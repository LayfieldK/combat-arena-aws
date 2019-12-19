var path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
    // Change to your "entry-point".
    entry: slsw.lib.entries,
    //entry: './src/handlers/handler.ts',
    target: 'node',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'webpack'),
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loaders: ['babel-loader', 'ts-loader'],
        }],
    }
};