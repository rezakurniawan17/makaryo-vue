module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Mekarya | Branding Media Sosial";
        return args;
      })
  }
}