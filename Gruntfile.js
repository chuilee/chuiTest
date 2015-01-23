'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),
		
		cssmin: {
			options: {
				banner: '<%= pkg.name %>-<%= pkg.version %>-<%= grunt.template.today("yyyy-mm-dd") %>',
				root: './assets/'
			},
			target: {
				files: [
					{ src: 'assets/css/base.css', dest: 'assets/css/min/base.min.css' }
				]
			}
		},

		sprite: {
			all: {
				src: 'assets/images/test/*.png',
				dest: 'assets/images/test/tmp/spritesheet.png',
				destCss: 'assets/css/test/sprites.css'
			}
		},

		connect: {
			server: {
				options: {
					protocol: 'http',
					hostname: '127.0.0.1',
					port: 8000,
					base: 'assets/',
					livereload: true,
					keepalive: true,
					open: {
						target: 'http://localhost:8000',
						appName: 'chrome.exe',
						callback: function(){}
					}
				},
				livereload: {
					options: {
						middleware: function ( connect, options ) {
							return [
					          require('connect-livereload')(), // <--- here
					          // 静态文件服务器路径
					          connect.static(options.base),
					          // 启用目录浏览
					          connect.directory(options.base)
					        ];
						}
					}
				}
			}
		},

		watch: {
			configFiles: {
				files: [ 'Gruntfile.js' ],
				options: {
					reload: true
				}
			},
			css: {
				files: [ 'assets/css/*.css', '!assets/css/*.min.css' ],
				tasks: [ 'cssmin:target' ],
				options: {
					spawn: false
				}
			},
			client: {
				files: [ 'assets/*.html', 'assets/css/*.css', 'assets/images/*.*', 'assets/js/*.js' ],
				options: {
					livereload: true
				}
			}
		},
	});

	// 压缩css
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );

	// 监听文件修改
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	// 合并雪碧图
	grunt.loadNpmTasks( 'grunt-spritesmith' );

	// 建立连接，浏览器自动刷新
	grunt.loadNpmTasks( 'grunt-contrib-connect' );

	grunt.registerTask( 'default', [ 'cssmin' ] );
	
	grunt.registerTask( 'live', [ 'watch', 'connect' ] );
}