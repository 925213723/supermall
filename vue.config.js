module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        '@': 'src',
        'assets': '@/assets',
        'network': '@/network',
        'common': '@/common',
        'components': '@/components',
        'views': '@/views'
      }
    }
  }
}
