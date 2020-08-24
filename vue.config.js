const path = require('path');
module.exports = {
	devServer: {
		overlay: {
			wainings: false,
			errors: false
		},
		// chainWebpack: config => {
		// 	config.resolve.alias.set('')
		// },
		
		// proxy: {
		// 	"/api": {
		// 		target: 'http://v.juhe.cn',
		// 		changeOrigin: true,
		// 		ws: true,
		// 		secure: true,
		// 		pathRewrite: {
		// 			"^/api": ""
		// 		}
		// 	}
		// }
	},
	configureWebpack: {
		resolve: {
			alias: {
				"styles": "@/assets/styles",
				"scripts": "@/assets/scripts"
			}
		}
	},
	lintOnSave: false
}