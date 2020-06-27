const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry:'./public/main.js',
    output: {
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    },
    devServer:{
        contentBase:'./build',
        host:'localhost',
        port:8080,
        open:true
    },
    module:{
        rules:[
            {
                test:/\.(jpg|png|gig|jpeg)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            outputPath:'./img'
                        }
                    }
                ]
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                use:'file-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'webpack.html'
        }),
        new VueLoaderPlugin()
    ]
}