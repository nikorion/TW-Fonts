# TW-Fonts — contexte projet pour Claude

## Ce que c'est
Plugin TiddlyWiki (`$:/plugins/nikorion/fonts`) qui embarque une collection de webfonts sous forme de tiddlers stylesheet. Auteur : nikorion.

## Structure
```
src/fonts/                       ← sources du plugin (seul dossier à toucher)
  $__fonts_<Nom>.css(.meta)      ← un tiddler par police (@font-face en base64, tag $:/tags/Stylesheet)
  plugin.info                    ← métadonnées du plugin (v0.1.0)

wiki/                        ← wiki TW de développement
  tiddlywiki.info                ← plugins actifs (filesystem, tiddlyweb, nikorion/fonts), pluginPath: ../src, build plugin-json + html
  tiddlers/
    $__StoryList.tid (non versionné)
    system/$__dev-hmr.tid + system/$__config_SyncFilter.tid
    system/plugins/               ← plugins tiers installés par glisser-déposé du .json (commander, shiraz, tweaks, utility, katex, codemirror-6, link-to-tabs, langue fr-FR, highlight.js) — tiddlers plugin normaux, non liés au plugin fonts lui-même

dist/                            ← généré par pnpm build, gitignored
docs/                            ← TW-Fonts-Wiki.html généré par pnpm build
scripts/
  dev.cjs                        ← orchestrateur pnpm dev (résout les ports, spawn nodemon + dev-hmr)
  dev-hmr.cjs                    ← serveur SSE de HMR de contenu (polices .css hot-swap via leur .meta ; reboot/reload sur plugin.info)
```

## Build html (docs/) — publishFilter
`--rendertiddler $:/core/save/all` embarque tout le store de tiddlers chargé dans wiki, pas seulement le plugin fonts. Pour ne pas publier les outils de confort du dev dans `docs/TW-Fonts-Wiki.html`, la target `html` passe la variable `publishFilter` (mécanisme core du bouton "Download full wiki") en args supplémentaires :
```json
"--rendertiddler", "$:/core/save/all", "TW-Fonts-Wiki.html", "text/plain", "",
"publishFilter", "-[[$:/dev/hmr]] -[[$:/config/dev/hmr-port]] -[[$:/config/SyncFilter]] -[[$:/plugins/kookma/commander]] -[[$:/plugins/oeyoews/tiddlywiki-codemirror-6]] -[[$:/plugins/wikilabs/link-to-tabs]]"
```
Le `""` avant `publishFilter` est le slot `template` (inutilisé, à laisser vide sinon les index se décalent). Exclus : les tiddlers de dev du HMR, `commander`, `codemirror-6`, `link-to-tabs` (outils de confort dev sans usage en prod). Gardés : `shiraz`, `tweaks`, `utility` (utiles en prod pour l'utilisateur), `highlight`, `katex`, langue `fr-FR` (plugins officiels TiddlyWiki).

## Ce que fait le plugin
Chaque police est un tiddler `text/css` titré `$:/fonts/<Nom>`, taggé `$:/tags/Stylesheet`, contenant une déclaration `@font-face` avec la police encodée en base64. Pour l'instant, le plugin ne contient **que** ces tiddlers de police — pas encore de widget de prévisualisation, de macro d'édition ni de documentation embarquée (ces tiddlers restent dans `wiki/tiddlers/user/` pour l'instant, hors du plugin).

## Workflow dev
```
pnpm install
pnpm dev      # TW sur :8080 (défaut ; port libre si occupé) + HMR SSE — l'URL est affichée
pnpm build    # génère dist/TW-Fonts-Plugin.json + docs/TW-Fonts-Wiki.html
```

Pas de JS de plugin, pas d'ESLint : ce plugin ne contient que des tiddlers CSS.

`pnpm dev` lance `scripts/dev.cjs`, orchestrateur (calqué sur TW-Hover-Tilt, zéro dépendance ajoutée) : il résout le port TW (défaut **8080**, sinon un port libre si occupé) et le port SSE du HMR (défaut **35730**, même logique) — « move aside » — écrit le port SSE dans le tiddler git-ignoré `$:/config/dev/hmr-port` (lu par le client navigateur), puis lance nodemon + `dev-hmr.cjs` en parallèle (spawn direct, plus de `concurrently`). Les polices sont des tiddlers `text/css` (`$__fonts_<Nom>.css` + sidecar `.css.meta`) : `dev-hmr.cjs` les **hot-swappe à chaud** (corps = le `.css`, champs = le `.meta`, override de shadow en mémoire, pas de reboot). Un changement du `.meta` seul re-pousse aussi le tiddler. Seul `plugin.info` déclenche un reboot (nodemon ne surveille que lui). Le garde-fou `$:/config/SyncFilter` (`wiki/tiddlers/system/$__config_SyncFilter.tid`) exclut le préfixe du plugin du sync tiddlyweb. Client : `wiki/tiddlers/system/$__dev-hmr.tid`. Principe : `../guides/hmr-tiddlywiki.md`.

## Fichiers de config
- [package.json](package.json) — scripts pnpm, dépendances dev
- [scripts/dev.cjs](scripts/dev.cjs) — orchestrateur `pnpm dev` : résolution des ports (défaut/libre) + spawn nodemon & dev-hmr
- [scripts/dev-hmr.cjs](scripts/dev-hmr.cjs) — serveur SSE de HMR de contenu (polices `.css` hot-swap ; reboot/reload sur `plugin.info`)
- [nodemon.json](nodemon.json) — watch `src/fonts/plugin.info` seulement, ext `info` ; port de fallback standalone (`dev.cjs` surcharge le port réel)
- [wiki/tiddlywiki.info](wiki/tiddlywiki.info) — plugins actifs, pluginPath: `../src`

## Symlink TIDDLYWIKI_PLUGIN_PATH
```
C:\Users\Nico\tw\plugins\nikorion\fonts → D:\projets\devops\tw\plugins\nikorion\TW-Fonts\src\fonts
```

## Points d'attention Windows
- `pnpm dev` nécessite **deux Ctrl+C** pour quitter (comportement normal sur Windows).
- Voir le CLAUDE.md de TW-Math (`D:\projets\devops\tw\plugins\nikorion\TW-Math\CLAUDE.md`) pour les pièges PowerShell : BOM UTF-8, fins de ligne CRLF, caractères Unicode, etc.
