var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [path.join(__dirname, './src/client/main.jsx')],
    output: {
        path: path.join(__dirname, './src/public/dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.ENV_NAME': JSON.stringify("production")
        })
    ]
};
