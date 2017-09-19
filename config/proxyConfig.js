module.exports = {
  proxyList: {
        '/api': {
            target: 'http://localhost:9005', 
            changeOrigin: true, 
            pathRewrite: {
                '^/api': '' 
            }              
        }
  }
}