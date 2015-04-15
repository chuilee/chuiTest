
var gulp = require( "gulp" );

// 配置变量
var html = "./assets/**/*.html";
var jsSrc = "./assets/js/*.js";
var lessSrc = "./assets/less/**/*.less";
var styleSrc = "./assets/less/styles.status.less";

// 创建服务器
var connect = require( "gulp-connect" );
gulp.task( "connect", function() {

  connect.server({
    root: "assets",
    livereload: true
  });

} );

// less to css;
var less = require( "gulp-less" );
var minifyCSS = require( "gulp-minify-css" );
var rename = require( "gulp-rename" );
gulp.task( "less", function(){

  var lessPluginCleanCSS = require( "less-plugin-clean-css" );
  var lessPluginAutoprefix = require( "less-plugin-autoprefix" );
  var cleancss = new lessPluginCleanCSS( { advanced: true } );
  var autoprefix = new lessPluginAutoprefix( { browsers: [ "last 2 versions" ] } );

  gulp.src( styleSrc )
    .pipe( less({
      plugins: [ autoprefix ]
    }) )
    .pipe( gulp.dest( "./assets/css" ) )
    .pipe( minifyCSS() )
    .pipe( rename( { extname: ".min.css" } ) )
    .pipe( gulp.dest( "./assets/css/" ) );

} );

// 合并雪碧图
var spritesmith = require( "gulp.spritesmith" );
var icons = "./assets/images/icons/*.png";
gulp.task( "sprite", function(){

  var spriteData = gulp.src( icons )
                      .pipe( spritesmith({
                        imgName: "icons.png",
                        cssName: "icons.less"
                      }) );
  spriteData.pipe( gulp.dest( "./built/sprite" ) );

} );

// 压缩js
var uglyfiy = require( "gulp-uglyfly" );
gulp.task( "uglyfly", function(){

  gulp.src( jsSrc )
    .pipe( uglyfiy() )
    .pipe( rename( { extname: ".min.js" } ) )
    .pipe( gulp.dest( "./assets/js" ) );

} )

gulp.task( "html", function(){

  gulp.src( html )
    .pipe( connect.reload() );

} );

gulp.task( "js", function(){

  gulp.src( jsSrc )
    .pipe( connect.reload() );

} );

gulp.task( "watch", function(){

  gulp.watch( [ html ], [ "html" ] );

  gulp.watch( [ jsSrc ], [ "js" ] );

  gulp.watch( [ lessSrc ], [ "less" ] );

  // gulp.watch( [ jsSrc ], [ "uglyfly" ] );

} );

gulp.task( "default", [ "connect", "watch" ] );
