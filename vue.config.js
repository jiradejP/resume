// vue.config.js
// module.exports = {
//     publicPath: '<resume>'
// } 

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/resume/'
      : '/'
  }