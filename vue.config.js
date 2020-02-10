var path = require("path");

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "@src": path.resolve(__dirname, "src/"),
                vue$: "vue/dist/vue.esm.js",
                "@node_modules": path.resolve(__dirname, "node_modules/")
            }
        },
        plugins: [
        // new MyAwesomeWebpackPlugin()
        ]
    }
}