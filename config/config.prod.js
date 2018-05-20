let webpack = require("webpack");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = (PATH) => ({
    entry: () => {
        return {
            'vendor.code': [
                'vue/dist/vue.esm',
                'vue-router/dist/vue-router.esm',
            ],
            'vendor.design': [
                'vuetify/dist/vuetify',
                'vuetify/dist/vuetify.css',
                'material-design-icons/iconfont/material-icons.css',
            ],
            app: [
                './src/app/main',
                './src/assets/main.scss'
            ]
        }
    },
    output: {
        path: PATH,
        filename: 'js/[name].js',
        publicPath: './'
    },
    module: {
        rules: [{
            test: /\.(scss|css)$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ['css-loader', 'sass-loader']
            })
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        // new webpack.optimize.OccurrenceOrderPlugin({}),
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 25
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: true,
            mangle: true,
            beautify: false,
            comments: false,
            fromString: true,
            spidermonkey: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity,
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: "css/[name].css",
            allChunks: true
        })
    ],
    mode: 'production'

})