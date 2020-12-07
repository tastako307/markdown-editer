const path = require('path')

module.exports = {
  entry:'./src/index.ts', //entryセクションは最初に読み込むファイルを指定する。
  module:{
    rules:[
      {
        test:/\.ts$/,
        use:'ts-loader',
        exclude:/node_modules/,
      },
    ],
  },
  resolve:{
    extensions:['.ts'],
  },
  output:{
    path:path.resolve(__dirname,'dist'),//コンフィグファイルを置いたディレクトリにdist
    filename:'index.js',
    publicPath:'dist/',
  }
}