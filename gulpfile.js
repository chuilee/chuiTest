// 加载模块
var gulp = require( "gulp" );

var connect = require( "gulp-connect" );


// 配置变量
var cj_config = {
  html : "./chuijs/**/*.html",
  jsSrc : "./chuijs/assets/js",
  cssSrc : "./chuijs/assets/css/",
  lessSrc : "./chuijs/assets/less/",
  js : "./chuijs/assets/js/*.js",
  less : "./chuijs/assets/less/*/*.less",
  css : "./chuijs/assets/css/*/*.css",
  compile_less: [ "./chuijs/assets/less/chui.less", "./chuijs/assets/less/onediv.less" ]
}


// 创建服务器
gulp.task( "connect", function() {

  connect.server({
    root: "chuijs",
    livereload: true,
    port: 8000
  });

} );


// less to css;
var less = require( "gulp-less" );
var minifyCSS = require( "gulp-minify-css" );
var rename = require( "gulp-rename" );
var lessPluginCleanCSS = require( "less-plugin-clean-css" );
var lessPluginAutoprefix = require( "less-plugin-autoprefix" );
var cleancss = new lessPluginCleanCSS( { advanced: true } );
var autoprefix = new lessPluginAutoprefix( { browsers: [ "last 2 versions" ] } );
gulp.task( "less", function(){
  
  gulp.src( cj_config.compile_less )
    .pipe( less({
      plugins: [ autoprefix ]
    }) )
    .pipe( gulp.dest( "./chuijs/assets/css" ) )
    .pipe( minifyCSS() )
    .pipe( rename( { extname: ".min.css" } ) )
    .pipe( gulp.dest( "./chuijs/assets/css/mins/" ) )
    .pipe( connect.reload() );

} );

gulp.task( "html", function(){

  gulp.src( cj_config.html )
    .pipe( connect.reload() );

} );

gulp.task( "js", function(){

  gulp.src( cj_config.js )
    .pipe( connect.reload() );

} );

gulp.task( "watch", function(){

  gulp.watch( [ cj_config.html ], [ "html" ] );

  gulp.watch( [ cj_config.js ], [ "js" ] );

  gulp.watch( [ cj_config.less ], [ "less" ] );

} );

gulp.task( "default", [ "connect", "watch" ] );

