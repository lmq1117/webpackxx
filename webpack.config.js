module.exports = {
	devtool: "eval-source-map",//使用eval打包源文件模块，在同一个文件中生成干净的完整的source map

	entry: __dirname + "/app/main.js",//唯一入口文件
	output: {
		path: __dirname + "/public",//打包后的文件存放的地方
		filename: "bundle.js"//打包后输出文件的文件名
	},

	devServer: {
		contentBase: "./public",//本地服务器所加载的页面所在的目录
    		historyApiFallback: true,//不跳转
    		port: 8888,//端口
    		inline: true//实时刷新
	},
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"env","react"
						]
					}
				},
				exclude: /node_modules/
			}
		]
	}
};