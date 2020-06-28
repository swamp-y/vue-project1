const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry:'./public/main.js',
    output: {
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    devServer:{
        contentBase:'./dist',
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
                            esModule:false,
                            outputPath:'./img'
                        }
                    }
                ]
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                use:[{
                    loader:'file-loader',
                    options:{
                        outputPath:'./fonts'
                    }
                }]
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.scss$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'sass-loader'}
                ]
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            {
                test:/\.(html)$/,
                use:{
                    loader:'html-loader?attributes=img:src',
                    options: {
                        attrs: ['img:src', 'img:data-src']
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.ejs',
            filename:'webpack.html'
        }),
        new VueLoaderPlugin()
    ]
}