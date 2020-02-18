module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/wuhan-timeline/'
    : '/',
  transpileDependencies: [
    "vuetify"
  ]
}