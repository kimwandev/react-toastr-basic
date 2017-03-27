const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
    filename: "styles/[name].css"
});

const path = require('path');


module.exports = {
    entry: {
            'js/toastrDemo': './web/ToastrDemo.jsx'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules:[
            {
                test: /\.jsx$/,
                exclude: [/node_modules/],
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            } //,
            // {
            //     test: /\.less$/,
            //     use: extractLess.extract({
            //         use: [{
            //             loader: "css-loader"
            //         }, {
            //             loader: "less-loader"
            //         }],
            //         // use style-loader in development
            //         fallback: "style-loader"
            //     })
            // }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        extractLess
    ],
    devServer:{
        contentBase: './public'
    }
}