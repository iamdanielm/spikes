const CopyPlugin = require('copy-webpack-plugin')
const path = require('path');

module.exports = {
    mode: "none",
    entry: "./imports.js",
    output: {
        filename: "bundle.js",
        path: __dirname + '/dist'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: './index.html', to: './' },
                { from: './hacks.css', to: './' },
            ],
        }),
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    "presets": ["@babel/preset-env",]
                }
            }
        },
        ]
    }
};