# TW-Fonts

[English](README.md) · **Français**

![Status](https://img.shields.io/badge/status-experimental-orange)
![TiddlyWiki](https://img.shields.io/badge/TiddlyWiki-%E2%89%A55.2.0-blue)

Un plugin TiddlyWiki qui regroupe une collection de polices web sous forme de tiddlers de feuille de style prêts à l'emploi.

## Présentation

Chaque police est un tiddler `text/css` (`$:/fonts/<name>`) tagué `$:/tags/Stylesheet`, qui embarque la police sous forme de déclaration `@font-face` en base64. Il suffit de déposer le plugin pour que les polices soient disponibles dans tout le wiki — aucune requête externe, aucun fichier de police séparé à gérer.

## Installation

**Démo en ligne** : [https://nikorion.github.io/TW-Fonts/](https://nikorion.github.io/TW-Fonts/) — pour essayer le plugin avant de l'installer.

**Depuis la bibliothèque de plugins nikorion** (TiddlyWiki propose ensuite chaque nouvelle version en mise à jour) :

1. Sur [nikorion.github.io/tw-plugins](https://nikorion.github.io/tw-plugins/), glisser le bouton **Bibliothèque de plugins nikorion** sur votre wiki (une fois par wiki).
2. Ouvrir *Panneau de configuration → Plugins → Obtenir d'autres plugins → Ouvrir la bibliothèque de plugins*, choisir l'onglet nikorion et installer **Fonts**.

**À la main** : télécharger [`TW-Fonts-Plugin.json`](https://nikorion.github.io/TW-Fonts/TW-Fonts-Plugin.json) et le glisser-déposer sur votre wiki.

Nécessite TiddlyWiki ≥ 5.2.0.

## Développement

```
pnpm install
pnpm dev      # wiki de dev + rechargement à chaud ; l'URL (port libre aléatoire) s'affiche au démarrage
pnpm build    # dist/TW-Fonts-Plugin.json + docs/ (wiki de démo, publié par la CI)
```

Les sources sont dans `src/fonts/`.

## Fichiers

| Fichier | Rôle |
|---|---|
| `src/fonts/plugin.info` | Métadonnées du plugin |
| `src/fonts/$__fonts_*.css` | Un tiddler de feuille de style `@font-face` par police |

## Historique des versions

**v0.1.0**

Première version — collection de polices extraite dans son propre plugin.

## Crédits

Développé avec l'aide d'Anthropic Claude pour le code, la revue et la documentation.

## Licence

Licence MIT — voir `LICENSE`
