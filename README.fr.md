# TW-Fonts

[English](README.md) · **Français**

![Status](https://img.shields.io/badge/status-experimental-orange)
![TiddlyWiki](https://img.shields.io/badge/TiddlyWiki-%E2%89%A55.2.0-blue)

Un plugin TiddlyWiki qui regroupe une collection de polices web sous forme de tiddlers de feuille de style prêts à l'emploi.

---

## Sommaire

- [Présentation](#présentation)
- [Installation](#installation)
- [Développement](#développement)
- [Fichiers](#fichiers)
- [Historique des versions](#historique-des-versions)
  - [v0.1.0](#v010)
- [Crédits](#crédits)
- [Licence](#licence)

---

## Présentation

Chaque police est un tiddler `text/css` (`$:/fonts/<name>`) tagué `$:/tags/Stylesheet`, qui embarque la police sous forme de déclaration `@font-face` en base64. Il suffit de déposer le plugin pour que les polices soient disponibles dans tout le wiki — aucune requête externe, aucun fichier de police séparé à gérer.

[↑ Retour au sommaire](#sommaire)

---

## Installation

1. Télécharger `TW-Fonts-Plugin.json` depuis la [dernière version](https://github.com/nikorion/TW-Fonts/releases/latest)
2. Le glisser-déposer dans votre TiddlyWiki (≥ 5.2.0)
3. Enregistrer et recharger

[↑ Retour au sommaire](#sommaire)

---

## Développement

```
pnpm install
pnpm dev      # wiki de dev + rechargement à chaud ; l'URL (port libre aléatoire) s'affiche au démarrage
pnpm build    # génère dist/TW-Fonts-Plugin.json + docs/TW-Fonts-Wiki.html
```

Les sources sont dans `src/fonts/`.

[↑ Retour au sommaire](#sommaire)

---

## Fichiers

| Fichier | Rôle |
|---|---|
| `src/fonts/plugin.info` | Métadonnées du plugin |
| `src/fonts/$__fonts_*.css` | Un tiddler de feuille de style `@font-face` par police |

[↑ Retour au sommaire](#sommaire)

---

## Historique des versions

### v0.1.0

Première version — collection de polices extraite dans son propre plugin.

[↑ Retour au sommaire](#sommaire)

---

## Crédits

Développé avec l'aide d'Anthropic Claude pour le code, la revue et la documentation.

[↑ Retour au sommaire](#sommaire)

---

## Licence

Licence MIT — voir `LICENSE`

[↑ Retour au sommaire](#sommaire)
