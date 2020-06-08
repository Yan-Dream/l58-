var path=require('path');

module.exports={
    entry:'./src/app.js',//入口文件
    output:{
        path:path.resolve(__dirname,"./"),
        filename:'index.js'
    },   //出口文件
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,//不包含哪个文件的解析
                use:{
                    loader:"babel-loader",//用什么转换器
                    options:{
                        presets:['es2015','stage-0','react']  //安装了当前转换器的那些包
                    }
                }
            },{
                test:/\.css$/,
                use:[ "style-loader","css-loader"]
            }
        ]
    }
}