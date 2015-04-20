// 加载模块
var gulp = require( "gulp" );

var connect = require( "gulp-connect" );


// 配置变量
var html = "./app/**/*.html";
var jsSrc = "./app/modules/*.js";
var lessSrc = "./app/assets/less/*.less";
var styleSrc = "./app/assets/less/styles.status.less";

// 创建服务器
gulp.task( "connect", function() {

  connect.server({
    root: "app",
    livereload: true,
    port: 8000
  });

} );

// 创建服务器
gulp.task( "github", function() {

  connect.server({
    root: "github",
    livereload: true,
    port: 8001
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
  
  gulp.src( styleSrc )
    .pipe( less({
      plugins: [ autoprefix ]
    }) )
    .pipe( gulp.dest( "./app/assets/css" ) )
    .pipe( minifyCSS() )
    .pipe( rename( { extname: ".min.css" } ) )
    .pipe( gulp.dest( "./app/assets/css/mins/" ) )
    .pipe( connect.reload() );

} );

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

} );

gulp.task( "default", [ "connect", "watch" ] );

