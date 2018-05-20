let path = require("path");
let webpack = require("webpack");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let VueLoaderPlugin = require("vue-loader");

module.exports = (PATH, PORT = 4900) => ({
    entry: () => {
        return {
            vendor: [
                //vendors
                `webpack-dev-server/client?http://localhost:${PORT}`,
                'vue/dist/vue.esm',
                'vuetify/dist/vuetify',
                'material-design-icons/iconfont/material-icons.css',
                'vuetify/dist/vuetify.css',
                'vue-router/dist/vue-router.esm',
            ],
            app: [
                './src/app/main',
                './src/assets/main.scss'
            ]
        }
    },
    output: {
        path: path.resolve(__dirname, PATH),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    cache: true,
    // devtool: "eval",
    module: {
        rules: [{
            test: /\.(scss|css)$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    mode: 'development'

})