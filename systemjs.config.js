SystemJS.config({
    map: {
        jquery: 'https://code.jquery.com/jquery.js',
        textd: "node_modules/systemjs-plugin-text/text.js",
        pluginTest: "plugin.js"
    },
    packages: {
        ".": { defaultJSExtensions: "js" },
        "formatters": {
            main: "index.js",
            defaultJSExtensions: "js",
        }
    },
    meta: {
        "templates/*.html": {
            loader: "textd",
            defaultExtension: false
        },
        "plugin-target.js": {
            loader: "pluginTest"
        }
    }
});