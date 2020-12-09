const path = require('path')

module.exports = {
  entry:'./src/index.tsx', //entryセクションは最初に読み込むファイルを指定する。
  module:{
    rules:[
      {
        test:/\.tsx?$/,
        use:'ts-loader',
        exclude:/node_modules/,
      },
    ],
  },
  resolve:{
    extensions:['.js','.ts','.tsx'],
  },
  output:{
    path:path.resolve(__dirname,'dist'),//コンフィグファイルを置いたディレクトリにdist
    filename:'index.js',
    publicPath:'dist/',
  }
}