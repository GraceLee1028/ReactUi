const path = require("path")
const isProd = process.env.NODE_ENV==="production";
module.exports = {
  webpack: {
    // 配置路径别名
    alias: {
      "@": path.join(__dirname, "src"),
    },
    configure: webpackConfig => {
      // 生产环境配置
      if (isProd) {
        // 去除map文件
        webpackConfig.devtool = false
        // 拆包
        webpackConfig.optimization = {
          splitChunks: {
            chunks: 'async',
            minSize: 40000, // bite
            maxAsyncRequests: 10, // 最大异步请求数
            maxInitialRequests: 10, // 页面初始化最大异步请求数
            automaticNameDelimiter: '~', // 解决命名冲突
            name: false,
            cacheGroups: {
              antd: {
                name: 'chunk-antd',
                chunks: 'all',
                test: /[\\/]node_modules[\\/](@ant-design|antd-mobile)[\\/]/,
                priority: -7
              },
              common: {
                name: 'chunk-common',
                chunks: 'all',
                test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-redux|react-router-dom|redux-persist|react-fastclick)[\\/]/,
                priority: -9
              },
              vendor: {
                name: 'chunk-vendor',
                chunks: 'all',
                test: /[\\/]node_modules[\\/](axios|lodash|core-js|react-copy-to-clipboard|crypto-js|web-vitals)[\\/]/,
                priority: -10
              }
            }
          }
        }
        // 输出output
        webpackConfig.output = {
          ...webpackConfig.output,
          publicPath: './' // 打包资源引入路径--目前使用的是相对路径
        }
      }
      return webpackConfig
    },
    devServer: {
      // 本地服务的端口号
      port: 3001,
      // 本地服务的响应头设置
      headers: {
        // 允许跨域
        'Access-Control-Allow-Origin': '*',
      },
    },
    babel: {
      plugins: [
        // 生产环境只留console.error、warn，去除console.log
        [
          'babel-plugin-transform-remove-console',
          { exclude: isProd ? ['error', 'warn'] : ['error', 'warn', 'log'] }
        ]
      ]
    }
  }
}
