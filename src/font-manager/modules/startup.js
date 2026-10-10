/*\
title: $:/plugins/nikorion/font-manager/modules/startup.js
type: application/javascript
module-type: startup

Registers the `th-importing-file` hook so that a dropped (or imported) font
file becomes a ready-to-use stylesheet tiddler instead of a binary tiddler.

Core's `wiki.readFile()` invokes the hook before its default processing. When
the hook returns `true`, the default is skipped and the hook must call
`callback(arrayOfTiddlerFields)` itself. The result then goes through the
normal import screen (list, checkboxes, renaming).

The tiddler format is the one the plugin already ships: `$:/fonts/<Name>`,
tagged `$:/tags/Stylesheet`, holding a `@font-face` rule with a base64 data URI.
Pure browser JS: identical behaviour standalone and client/server.
\*/

"use strict";

exports.name = "nikorion-font-manager-import";
exports.platforms = ["browser"];
exports.after = ["load-modules"];
exports.synchronous = true;

// Warn above this size (bytes of the original file): base64 adds ~33 %
const LARGE_FONT_BYTES = 300 * 1024;

// Core registers these four as base64 file types (boot.js)
const FORMATS = {
	"font/woff2": "woff2",
	"font/woff": "woff",
	"font/ttf": "truetype",
	"font/otf": "opentype"
};

function familyFromFileName(name) {
	return (name || "Untitled font")
		.replace(/\.[^.]+$/, "")
		.replace(/[_]+/g, " ")
		.replace(/[\\/'"{}]+/g, "")
		.trim() || "Untitled font";
}

exports.startup = function() {
	$tw.hooks.addHook("th-importing-file", function(info) {
		const format = FORMATS[info.type];
		if(!format) {
			return false;
		}
		const file = info.file,
			family = familyFromFileName(file.name),
			reader = new FileReader();
		reader.onload = function(event) {
			const dataUri = event.target.result,
				base64 = dataUri.substring(dataUri.indexOf(",") + 1),
				fields = {
					title: "$:/fonts/" + family,
					type: "text/css",
					tags: "$:/tags/Stylesheet",
					"font-family": family,
					"font-format": format,
					text: "@font-face {\n" +
						"\tfont-family: '" + family + "';\n" +
						"\tfont-weight: normal;\n" +
						"\tfont-style: normal;\n" +
						"\tsrc: url(data:" + info.type + ";base64," + base64 + ") format('" + format + "');\n" +
						"}\n"
				};
			if(file.size > LARGE_FONT_BYTES) {
				fields.note = "Large font (" + Math.round(file.size / 1024) + " KB)" +
					(format === "woff2" ? "." : ": consider converting to WOFF2.");
			}
			info.callback([fields]);
		};
		reader.onerror = function() {
			info.callback([]);
		};
		reader.readAsDataURL(file);
		return true;
	});
};
