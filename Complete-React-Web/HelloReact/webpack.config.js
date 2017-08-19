module.exports = {
  /* onde começar a processar o codigo */
  entry: './public/app.jsx',
  /* output */
  output: {
    /* dirname é o path para a pasta atual */
    path: __dirname,
    filename: './public/bundle.js'
  },
  /* Um array de extenções que queremos processar */
  resolve: {
    extensions: [' ', '.js', '.jsx']
  },

  module: {
    /**
     * [loaders description]
     * @type {Array}
     *
     *  Resumo desse processo:
     *
     *  Usamos o babel-loader,
     *  a através de react, processe-os e depois
     *  use a saida para o es2015, é sabido o tipo de
     *  arquivo a ser usado pela extensão test que
     *  maneja todos os arquivos com as extensões
     *  especificadas pela forma de regular expressions.
     *
     *  Abaixo de teste temos as pastas em que não queremos
     *  que o babel-loader processe, converta
     */
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }]
  }
};
