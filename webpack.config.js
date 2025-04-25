const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/index.js',
    devServer: {
        static: './dist',
        hot: true, 
      },      
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' 
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ]
};

