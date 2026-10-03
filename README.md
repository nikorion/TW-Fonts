# TW-Fonts

**English** · [Français](README.fr.md)

![Status](https://img.shields.io/badge/status-experimental-orange)
![TiddlyWiki](https://img.shields.io/badge/TiddlyWiki-%E2%89%A55.2.0-blue)

A TiddlyWiki plugin bundling a collection of webfonts as ready-to-use stylesheet tiddlers.

---

## Contents

- [Overview](#overview)
- [Installation](#installation)
- [Development](#development)
- [Files](#files)
- [Version history](#version-history)
  - [v0.1.0](#v010)
- [Credits](#credits)
- [License](#license)

---

## Overview

Each font is a `text/css` tiddler (`$:/fonts/<name>`) tagged `$:/tags/Stylesheet`, embedding the font as a base64 `@font-face` declaration. Drop the plugin in and the fonts become available wiki-wide — no external requests, no separate font files to manage.

[↑](#contents "Back to contents")

---

## Installation

1. Download `TW-Fonts-Plugin.json` from the [latest release](https://github.com/nikorion/TW-Fonts/releases/latest)
2. Drag and drop it into your TiddlyWiki (≥ 5.2.0)
3. Save and reload

[↑](#contents "Back to contents")

---

## Development

```
pnpm install
pnpm dev      # dev wiki + hot reload; the URL (random free port) is printed on start
pnpm build    # generates dist/TW-Fonts-Plugin.json + docs/TW-Fonts-Wiki.html
```

Sources are in `src/fonts/`.

[↑](#contents "Back to contents")

---

## Files

| File | Role |
|---|---|
| `src/fonts/plugin.info` | Plugin metadata |
| `src/fonts/$__fonts_*.css` | One `@font-face` stylesheet tiddler per font |

[↑](#contents "Back to contents")

---

## Version history

### v0.1.0

Initial release — font collection extracted into its own plugin.

[↑](#contents "Back to contents")

---

## Credits

Developed with assistance from Anthropic Claude for code, review, and documentation.

[↑](#contents "Back to contents")

---

## License

MIT License — see `LICENSE`

[↑](#contents "Back to contents")
