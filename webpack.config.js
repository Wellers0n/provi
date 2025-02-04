const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'


module.exports = {
    entry: "./src/index.tsx",
    mode: isDevelopment ? 'development' : 'production',
    devtool: 'cheap-eval-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            'components': path.resolve(__dirname, './src/components'),
            'pages': path.resolve(__dirname, './src/pages'),
            'services': path.resolve(__dirname, './src/services'),
            'context': path.resolve(__dirname, './src/context'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.woff(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        mimetype: 'application/font-woff',
                    },
                },
            },
            {
                test: /\.woff2(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        mimetype: 'application/font-woff2',
                    },
                },
            },
            {
                test: /\.woff2(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        mimetype: 'application/font-woff2',
                    },
                },
            },
            {
                test: /\.(otf)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    },
                },
            },
            {
                test: /\.ttf(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                        mimetype: 'application/octet-stream',
                    },
                },
            },
            {
                test: /\.svg(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'images/[name].[ext]',
                        mimetype: 'image/svg+xml',
                    },
                },
            },
            {
                test: /\.(png|jpg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'images/[name].[ext]',
                    },
                },
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        hot: true,
        port: 4000
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
        new webpack.NamedModulesPlugin(),
        isDevelopment && new ReactRefreshWebpackPlugin()

    ].filter(Boolean),
}
