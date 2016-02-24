var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'build');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry:{
        'hello-demo':'./src/hellodemo/hello-demo.jsx',
        'dom-diff':'./src/domdiff/dom-diff.jsx',
        'lifecycle':'./src/lifecycle/lifecycle.jsx'
    },
    output:{
        path:buildPath,
        filename:'[name].js'
    },
    plugins:[
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ["", ".js", ".jsx"],
        //node_modules: ["web_modules", "node_modules"]  (Default Settings)
    },
    module:{
        loaders:[
            {
                test:/\.(js|jsx)$/,
                loader:'babel',
                exclude:[nodeModulesPath],
            }
        ]
    }

}