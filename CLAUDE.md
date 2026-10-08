# TW-Fonts — contexte projet pour Claude

> **Avant toute tâche sur ce plugin, consulter d'abord le `CLAUDE.md` du workspace** (`../CLAUDE.md`) et ses `guides/` : outillage de dev commun (pnpm, `dev.cjs`/HMR, Ctrl+C, git push), pièges PowerShell/Windows, `publishFilter`, symlink. Ci-dessous : uniquement le spécifique à TW-Fonts.

## Ce que c'est
Plugin TiddlyWiki (`$:/plugins/nikorion/fonts`) qui embarque une collection de webfonts sous forme de tiddlers stylesheet. Auteur : nikorion. **Pas de JS de plugin, pas d'ESLint** : ce plugin ne contient que des tiddlers CSS.

## Structure
```
src/fonts/                       ← sources du plugin (seul dossier à toucher)
  $__fonts_<Nom>.css(.meta)      ← un tiddler par police (@font-face en base64, tag $:/tags/Stylesheet)
  plugin.info                    ← métadonnées du plugin (v0.1.0)

wiki/                            ← wiki TW de développement
  tiddlywiki.info                ← plugins actifs (filesystem, tiddlyweb, nikorion/fonts), pluginPath: ../src, build plugin-json + html
  tiddlers/
    $__StoryList.tid (non versionné)
    system/$__config_SyncFilter.tid
    system/plugins/               ← plugins tiers installés par glisser-déposé du .json (commander, shiraz, tweaks, utility, katex, codemirror-6, link-to-tabs, langue fr-FR, highlight.js) — tiddlers plugin normaux, non liés au plugin fonts lui-même

dist/                            ← généré par pnpm build, gitignored
docs/                            ← démo générée par `pnpm build` (`index.html` + moteur externe), gitignorée, publiée par la CI
```

## Ce que fait le plugin
Chaque police est un tiddler `text/css` titré `$:/fonts/<Nom>`, taggé `$:/tags/Stylesheet`, contenant une déclaration `@font-face` avec la police encodée en base64. Pour l'instant, le plugin ne contient **que** ces tiddlers de police — pas encore de widget de prévisualisation, de macro d'édition ni de documentation embarquée (ces tiddlers restent dans `wiki/tiddlers/user/` pour l'instant, hors du plugin).

## Spécificités dev
- `pnpm build` → `dist/TW-Fonts-Plugin.json` + démo `docs/` (publiée par la CI : `../guides/publication.md`). Démo `publishFilter` (`../guides/build-html-publishfilter.md`) : gardés `shiraz`/`tweaks`/`utility` (utiles en prod), `highlight`/`katex`/langue `fr-FR` (officiels TW).
- HMR : les polices `.css` (corps = le `.css`, champs = le `.meta`) sont **hot-swappées à chaud** (un changement du `.meta` seul re-pousse aussi). Seul `plugin.info` déclenche un reboot.
