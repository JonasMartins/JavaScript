module.exports = {
  /* onde começar a processar o codigo */
  entry: './public/app.js',
  /* output */
  output: {
    /* dirname é o path para a pasta atual */
    path: __dirname,
    filename: './public/bundle.js'
  },
  /* Um array de extenções que queremos processar */
  resolve: {
    extensions: [' ','.js','.jsx']
  }
};