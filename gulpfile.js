'use strict';
// 公共模块
var gulp = require('gulp');                         // gulp
var connect = require('gulp-connect');              // server livereload
var less = require('gulp-less');                    // less to css
var minifyCSS = require('gulp-minify-css');         // cssmin
var rename = require('gulp-rename');                // rename 
var sourcemaps = require("gulp-sourcemaps");        // 文件地图
var autoprefixer = require("gulp-autoprefixer");    // 自动添加前缀
var spritesmith = require("gulp.spritesmith");      // 雪碧图
var csso = require('gulp-csso');                    // 优化css
var merge = require('merge-stream');                // 合并流
var imagemin = require("gulp-imagemin");            // 压缩图片

// cj配置变量

var lessPluginCleanCSS = require('less-plugin-clean-css');
var lessPluginAutoprefix = require('less-plugin-autoprefix');
var cleancss = new lessPluginCleanCSS({ advanced: true });
var autoprefix = new lessPluginAutoprefix({ browsers: [ 'last 2 versions' ] });
var cj_config = {
  html : './chuijs/**/*.html',
  jsSrc : './chuijs/assets/js',
  cssSrc : './chuijs/assets/css/',
  lessSrc : './chuijs/assets/less/',
  js : './chuijs/assets/js/*.js',
  less : './chuijs/assets/less/*/*.less',
  css : './chuijs/assets/css/*/*.css',
  compile_less: [ './chuijs/assets/less/chui.less', './chuijs/assets/less/onediv.less' ]
};

// 创建服务器
gulp.task('cj_server', function(){

  connect.server({
    root: './chuijs/',
    livereload: true,
    port: 8000
  });

});

gulp.task('cj_less', function(){
  
  gulp.src(cj_config.compile_less )
    .pipe(less({
      plugins: [ autoprefix ]
    }) )
    .pipe(gulp.dest('./chuijs/assets/css' ) )
    .pipe(minifyCSS() )
    .pipe(rename({ extname: '.min.css' } ) )
    .pipe(gulp.dest('./chuijs/assets/css/mins/' ) )
    .pipe(connect.reload());

});

gulp.task('cj_html', function(){

  gulp.src(cj_config.html )
    .pipe(connect.reload());

});

gulp.task('cj_js', function(){

  gulp.src(cj_config.js )
    .pipe(connect.reload());

});

gulp.task('cj_watch', function(){

  gulp.watch([ cj_config.html ], [ 'cj_html' ]);

  gulp.watch([ cj_config.js ], [ 'cj_js' ]);

  gulp.watch([ cj_config.less ], [ 'cj_less' ]);

});

gulp.task('chuijs', [ 'cj_server', 'cj_watch' ]);


/*********************************************************************************
 * AVT UI SERVER
 *********************************************************************************/

var AVT_CONFIG = {
  htmlSrc: ["./avtui/*/**.html","./avtui/index.html"],
  webLess: "./avtui/web/less/avt-web.less",
  webAllLess: "./avtui/web/less/*.less",
  webCssSrc: "./avtui/web/assets/css",
  webCss: ["./avtui/web/assets/css/avt-web.css"]
};

gulp.task('AVT_SERVER', function(){

connect.server({
  root: './avtui/',
  livereload: true,
  port: 8001
});

});

gulp.task('AVT_HTML', function(){

  gulp.src(AVT_CONFIG.htmlSrc)
      .pipe(connect.reload());

});

// AVT-WEB LESS
gulp.task('AVTWEB_LESS', function(){
  
  gulp.src(AVT_CONFIG.webLess )
    .pipe( sourcemaps.init() )
      .pipe(less() )
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
    .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest(AVT_CONFIG.webCssSrc ) );
});

gulp.task('AVTWEB_CSSMIN', function(){
  
  gulp.src(AVT_CONFIG.webCss )
    .pipe(minifyCSS() )
    .pipe(rename({ extname: '.min.css' } ))
    .pipe(gulp.dest(AVT_CONFIG.webCssSrc ))
    .pipe(connect.reload());

});

gulp.task('AVTWEB_SPRITE_slidePanel', function(){
  
  var spriteData = gulp.src("avtui/web/icons/slidePanel/*").pipe(spritesmith({
    imgName: "slidePanel.png",
    cssName: "iconSlidePanel.less",
    padding: 10,
    imgPath: "../imgs/slidePanel.png"
  }));

  var imgStream = spriteData.img
      .pipe(imagemin())
      .pipe(gulp.dest('./avtui/web/assets/imgs/'));

  // Pipe CSS stream through CSS optimizer and onto disk
  var cssStream = spriteData.css
    // .pipe(csso())
    .pipe(gulp.dest('./avtui/web/less/'));

  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream);

});

gulp.task('AVT_WATCH', function(){

  gulp.watch([AVT_CONFIG.htmlSrc], ['AVT_HTML']);

  gulp.watch([AVT_CONFIG.webAllLess], ['AVTWEB_LESS']);

  gulp.watch([AVT_CONFIG.webCss], ['AVTWEB_CSSMIN']);

});


gulp.task('avtui', ['AVT_SERVER', 'AVT_WATCH']);

