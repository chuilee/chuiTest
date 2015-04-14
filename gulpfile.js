// 加载模块
var gulp = require( "gulp" );
var connect = require( "gulp-connect" );

// 配置变量
var html = "./app/**/*.html";


gulp.task( "connect", function() {

  connect.server({
    root: "app",
    livereload: true
  });

} );

gulp.task( "html", function(){

  gulp.src( html )
  .pipe( connect.reload() );

} );

gulp.task( "watch", function(){

  gulp.watch( [ html ], [ "html" ] );

} );

gulp.task( "default", [ "connect", "watch" ] );
