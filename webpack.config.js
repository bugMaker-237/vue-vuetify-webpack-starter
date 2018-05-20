let path = require("path");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = () => ({

    module: {
        rules: [{
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader?name=images/[name].[ext]'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
                ]
            },
            {
                test: /\.svg/,
                use: ["file-loader?name=svg/[name].[ext]"]
            },
            {
                test: /\.mp4|\.mp3/,
                use: ['file-loader?name=media/[name].[ext]']
            },
            {
                test: /\.html$/,
                include: [
                    path.resolve(__dirname, "src/app"),
                ],
                use: ['html-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        modules: ['node_modules', 'src'],

        alias: {
            _img: path.resolve(__dirname, 'src', 'assets', 'images'),
            _svg: path.resolve(__dirname, 'src', 'assets', 'icons'),
            _mat_icons: path.resolve(__dirname, 'node_modules', 'material-design-icons', 'iconfont'),
            'vue$': 'vue/dist/vue.esm.js'
        },

        // Allow to omit extensions when requiring these files
        extensions: [".*", ".js", ".scss", ".css"],
    }

})

// DEBUG ? [{
//     loader: "style-loader" // creates style nodes from JS strings
// }, {
//     loader: "css-loader" // translates CSS into CommonJS
// }, {
//     loader: "sass-loader" // compiles Sass to CSS
// }] :