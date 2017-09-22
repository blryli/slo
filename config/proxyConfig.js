module.exports = {
  proxyList: {
        '/api': {
            target: 'http://170.168.0.51:9011', 
            changeOrigin: true, 
            pathRewrite: {
                '^/api': '' 
            }              
        }
  }
}