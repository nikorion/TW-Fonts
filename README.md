# TW-Fonts

**English** · [Français](README.fr.md)

![Status](https://img.shields.io/badge/status-experimental-orange)
![TiddlyWiki](https://img.shields.io/badge/TiddlyWiki-%E2%89%A55.2.0-blue)

A TiddlyWiki plugin bundling a collection of webfonts as ready-to-use stylesheet tiddlers.

## Overview

Each font is a `text/css` tiddler (`$:/fonts/<name>`) tagged `$:/tags/Stylesheet`, embedding the font as a base64 `@font-face` declaration. Drop the plugin in and the fonts become available wiki-wide — no external requests, no separate font files to manage.

## Installation

**Live demo**: [https://nikorion.github.io/TW-Fonts/](https://nikorion.github.io/TW-Fonts/) — try the plugin before installing it.

**From the nikorion plugin library** (TiddlyWiki then offers each new version as an update):

1. In your wiki, create a tiddler tagged `$:/tags/PluginLibrary`, with a field `url` set to `https://nikorion.github.io/tw-dev/library/index.html` and a `caption` such as `nikorion`.
2. Open *Control Panel → Plugins → Get more plugins*, choose the nikorion library and install **Fonts**.

**By hand**: download [`TW-Fonts-Plugin.json`](https://nikorion.github.io/TW-Fonts/TW-Fonts-Plugin.json) and drag it onto your wiki.

Requires TiddlyWiki ≥ 5.2.0.

## Development

```
pnpm install
pnpm dev      # dev wiki + hot reload; the URL (random free port) is printed on start
pnpm build    # dist/TW-Fonts-Plugin.json + docs/ (demo wiki, published by CI)
```

Sources are in `src/fonts/`.

## Files

| File | Role |
|---|---|
| `src/fonts/plugin.info` | Plugin metadata |
| `src/fonts/$__fonts_*.css` | One `@font-face` stylesheet tiddler per font |

## Version history

**v0.1.0**

Initial release — font collection extracted into its own plugin.

## Credits

Developed with assistance from Anthropic Claude for code, review, and documentation.

## License

MIT License — see `LICENSE`
