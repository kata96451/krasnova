const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");


module.exports = {
    entry: {
        index: [
            path.resolve(__dirname, "src/js/index.js"),
            path.resolve(__dirname, "src/style.scss")
            ]
    },
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "main.min.js"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset",
            },

        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
        filename: '../css/[name].css'
    }),
        new ImageMinimizerPlugin({
            minimizerOptions: {
                // Lossless optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                    ["gifsicle", { interlaced: true }],
                    ["jpegtran", { progressive: true }],
                    ["optipng", { optimizationLevel: 5 }],
                    // Svgo configuration here https://github.com/svg/svgo#configuration
                    [
                        "svgo",
                        {
                            plugins: [
                                {
                                    name: 'preset-default',
                                    params: {
                                        overrides: {
                                            // customize options for plugins included in preset
                                            builtinPluginName: {
                                                optionName: 'optionValue',
                                            },
                                            // or disable plugins
                                            anotherBuiltinPlugin: false,
                                        },
                                    },
                                },
                                // Enable builtin plugin not included in preset
                                'moreBuiltinPlugin',
                                // Enable and configure builtin plugin not included in preset
                                {
                                    name: 'manyBuiltInPlugin',
                                    params: {
                                        optionName: 'value',
                                    },
                                },
                            ],
                        },
                    ],
                ],
            },
        }),
    ],
}