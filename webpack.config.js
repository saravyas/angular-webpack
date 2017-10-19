var webpack = require('webpack');
var path = require('path');

module.exports = function() {
   return {	
	"entry" : {
		main : "./index.js",
	},
	"output" : {
		filename : "[chunkhash].[name].js",
		path : path.resolve(__dirname, 'dist')
	},
	plugins : [
	  new webpack.optimize.CommonsChunkPlugin({
	  	name : 'vendor',
	  	minChunks: function(module){
	  		return module.context && module.context.indexOf('node_modules') >= 0 && count >= 2
	  	}
	  })	
	],
	module : {
	  loaders : [
	  	{ test : /\.css/, loader:"style-loader!css-loader" },
	  	{ test : /\.png/, loader:"url-loader?limit=100000&mimetype=image/png" },
	  	{ test : /\.jpg/, loader:"file-loader"}
	  ]
	}
   }
}
