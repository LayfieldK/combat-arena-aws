var path = require('path');

module.exports = {
    // Change to your "entry-point".
    entry: './src/handlers/handler.ts',
    target: 'node',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'handler.js',
        library: 'handler',
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