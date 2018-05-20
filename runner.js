let packageJson = require("./package.json");
let webpack = require("webpack");
let webpackConfig = require("./webpack.config");
let WebpackDevServer = require("webpack-dev-server");
let devConfig = require('./config/config.dev');
let prodConfig = require('./config/config.prod');
let args = process.argv.slice(2);
let path = require('path');

const PORT = process.env.PORT || 4900;
/**
 * 
 * @param {Array<string>} args 
 */
function ExecuteApp(args) {
    if (args[0] == 'debug') {
        const config = GetProperConfigs('debug');

        const options = {
            contentBase: `./dist`,
            watchOptions: {
                aggregateTimeout: 100
            },
            stats: {
                colors: true
            },
            hot: true, // Live-reload
            inline: true,
            watchContentBase: true,
            publicPath: config.output.publicPath,
            host: 'localhost'
        };

        WebpackDevServer.addDevServerEntrypoints(config, options)

        return new WebpackDevServer(webpack(config), options)
            .listen(PORT, 'localhost', (err) => {
                if (err) throw new console.error('webpack-dev-server\n ' + err);
                console.log(`[${packageJson.name} serve]`, `Listening at http://127.0.0.1:${PORT}`);
            });

    } else if (args[0] == 'prod') {
        const config = GetProperConfigs('prod');

        webpack(config, (err, stats) => {
            if (err) throw new console.error('build\n ', err);
            console.log(`[${packageJson.name} build]`, stats.toString({
                colors: true
            }));
        });
    } else if (args[0] == 'watch') {
        const config = GetProperConfigs('watch');

        console.log('[Watch started]');
        webpack(config).watch({
            aggregateTimeout: 100
        }, (err, stats) => {
            if (err) throw new console.error('watch\n ', err);
            console.log(`[${packageJson.name} Watching...]`, stats.toString({
                colors: true
            }));
        });
    }
}

function GetProperConfigs(type) {
    var defaultConfig = webpackConfig();
    var conf = type === 'prod' ? prodConfig('build') : devConfig(path.resolve(__dirname, 'dist'));
    conf.module.rules.forEach(r => {
        defaultConfig.module.rules.push({
            test: r.test,
            use: (() => {
                var loaders = [];
                r.use.forEach(u => {
                    loaders.push({
                        loader: u.loader.toString()
                    });
                });
                return loaders
            })()
        });
    });
    delete conf.module;

    return Object.assign(defaultConfig, conf);
}

ExecuteApp(args);