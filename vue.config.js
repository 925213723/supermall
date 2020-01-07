module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        'assets': '@/assets',
        'network': '@/network',
        'common': '@/common',
        'components': '@/components',
        'views': '@/views'
      }
    }
  }
}
