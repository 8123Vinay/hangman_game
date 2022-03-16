
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-react"]
                }
            },

            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({ template: './index.html' })
    ],
    watch: true

}



// module.exports = {
//     mode: "development",
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader'
//                 }
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                     MiniCssExtractPlugin.loader,
//                     "css-loader",
//                     "postcss-loader",
//                 ],
//             },
//         ],
//     },
//     plugins: [
//         new MiniCssExtractPlugin(),
//         new HtmlWebpackPlugin({ template: './index.html' })
//     ],
// }
