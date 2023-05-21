const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode:'development',
	entry: {
		index: './src/index.js',
	},
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Todo',
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	}, 
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(csv|tsv)$/i,
				use: ['csv-loader'],
			},
			{
				test: /\.xml$/i,
				use: ['xml-loader'],
			},
      
		],
	},
};
