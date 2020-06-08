// var webpack=require('webpack');
var path=require("path");
module.exports={
    entry:'./src/app.js',//设置入口文件
    output:{
        path:path.resolve(__dirname,'./'),//如果把出口文件放在一个文件夹中，那么需要使用path.resolve：direm代表的是除了文件之外的路径
        filename:'index.js'//代表出口文件的名字
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,//不包含这些文件
                use:{  //用的什么转换器
                    loader:'babel-loader',
                    options:{
                        presets:['es2015','stage-0','react']   //安装了当前转换器的哪些包 
                    }
                }
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            }
        ]
    }
}