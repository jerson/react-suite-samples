const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        'app': [
            'webpack-dev-server/client?http://0.0.0.0:3008',
            'webpack/hot/only-dev-server',
            path.join(__dirname, 'index'),
        ]
    },
    resolve: {
        alias: { 'react-native': 'react-native-web' },
        extensions: ['.webpack.js', '.web.js', '.js'],
    },
    output: {
        path: path.join(__dirname, 'dist/web'),
        filename: 'static/app.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({
            '__DEV__': true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),

    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            include: [
                path.join(__dirname, 'build'),
                path.join(__dirname, 'index.web.js'),
                path.join(__dirname, 'node_modules/react-native-vector-icons'),
                path.join(__dirname, 'node_modules/react-native-drawer'),
                path.join(__dirname, 'node_modules/react-native-slider'),

                //react-native-vector-icons
            ]
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: ['file-loader?name=images/[name].[ext]']
        }, {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            loaders: ['file-loader?name=fonts/[name].[ext]']
        }, {
            test: /\.(ico)$/,
            loaders: ['file-loader?name=[name].[ext]']
        }]
    }
};