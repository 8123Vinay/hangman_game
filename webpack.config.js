module.exports={
    entry:"./index.js",
    mode:"development",
    module:{
        rules:[
            {
                test:/\.js/,
                loader:"babel-loader",
                options:{
                    presets:["@babel/preset-react"]
                }
            },
            
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },  
        ]
    }
    
}



