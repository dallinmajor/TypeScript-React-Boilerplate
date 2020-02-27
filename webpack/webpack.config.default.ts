import * as webpack from 'webpack';
import * as path from 'path';

const defaultConfig: webpack.Configuration = {
    node: {
        __filename: true,
        __dirname: true
    },
    target:'web',
    mode: 'development',
    devtool: 'source-map',
    entry: path.resolve(__dirname, '../', 'src/main.tsx'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'default.bundle.js',
        libraryTarget: 'var',
        library: 'ReactDefault'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx', '.json']
    },
    plugins: [
        new webpack.DefinePlugin(
            {
                'process.env.NODE_ENV' : JSON.stringify('development')
            }
        ),
        new webpack.LoaderOptionsPlugin({ debug: true })
    ],
    module: {
        rules:[
			{
				test: /\.tsx?$/,
				include: [
					path.resolve(__dirname, '../', 'src/')
				],
				loader: 'ts-loader'
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader']
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader'
			}
		]
    }
}

export default defaultConfig;