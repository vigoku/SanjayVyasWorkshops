const path = require("path");

module.exports = {
    output: {
        path: path.resolve(__dirname, "dist")
    },

    entry: "/src/index.js",

    mode: "development",

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    presets:['@babel/preset-react']
                }
            }
        ]
    }
}