module.exports = {
  NODE_ENV: '"production"',
  configList:{
  	 '/paf':{
  	 	  target:'http://10.5.162.12:8088/paf',//需要代理的接口
  	 	  changeOrigin:true,//需不需要跨域
  	 	  pathRewrite:{
  	 	  	'^/test':'' //重写地址
  	 	  }
  		},
  		'/api': {
  			target: 'http://www.sojson.com',
  			changeOrigin: true,
  			pathRewrite: {
  				'^/api': ''
  			}
  		}
	}
}