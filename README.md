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

1. On [nikorion.github.io/tw-plugins](https://nikorion.github.io/tw-plugins/), drag the **nikorion plugin library** button onto your wiki (once per wiki).
2. Open *Control Panel → Plugins → Get more plugins → Open plugin library*, choose the nikorion tab and install **Fonts**.

**By hand**: download [`TW-Fonts-Plugin.json`](https://nikorion.github.io/TW-Fonts/TW-Fonts-Plugin.json) and drag it onto your wiki.

Requires TiddlyWiki ≥ 5.2.0.

## Development

Clone [tw-dev](https://github.com/nikorion/tw-dev) next to this repository: `pnpm dev` runs it, and it links by itself the nikorion plugins the dev wiki loads — from clones sitting next to this one (`../TW-Math`…), so your edits to them are live, otherwise from a read-only copy it fetches from GitHub. No symlink, no `TIDDLYWIKI_PLUGIN_PATH`, no admin rights. `pnpm build` alone still needs `TIDDLYWIKI_PLUGIN_PATH`: point it to `../tw-dev/.state/TW-Fonts/plugins`, created by `pnpm dev`.

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
