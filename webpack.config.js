module.exports = {
	entry: ['./index.js'],

	output: {
		path: __dirname,
		publicPath: '/',
		filename: "bundle.js"
	},

	module: {
		loaders: [{
			test: /\.scss$/,
			loaders: ["style", "css", "sass"]
		}]
	}
}