const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, 'index'),
        vendor: ['pouchdb-browser', 'react-suite', 'react', 'react-native-web', 'lodash', 'react-syntax-highlighter', 'lowlight', 'react-native', 'react-dom'],
    },
    resolve: {
        alias: {'react-native': 'react-native-web'},
        extensions: ['.webpack.js', '.web.js', '.js'],
    },
    output: {
        path: path.join(__dirname, 'docs'),
        filename: 'static/app.[hash].js',
        publicPath: '/react-suite-samples/'
    },
    plugins: [
        new webpack.DefinePlugin({
            '__DEV__': false
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'static/vendor.[hash].js',
            publicPath: '/react-suite-samples/'
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {comments: false},
            beautify: false,
            compressor: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.prod.html',
            inject: true
        })
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
                path.join(__dirname, 'node_modules/react-suite'),
            ]
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: ['file-loader?name=images/[name].[hash].[ext]']
        }, {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            loaders: ['file-loader?name=fonts/[name].[hash].[ext]']
        }, {
            test: /\.(ico)$/,
            loaders: ['file-loader?name=[name].[hash].[ext]']
        }]
    }
};