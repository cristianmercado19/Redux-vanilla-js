module.exports = {
  entry: './index.ts',
  devtool: 'inline-source-map',
  output: {
    filename: './[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      { 
        test: /.tsx?$/,
        use: 'ts-loader',
      }
    ]
  }
}