'use strict';
// 公共模块
var gulp = require('gulp'); // gulp
var connect = require('gulp-connect'); // server livereload
var cssmin = require('gulp-minify-css'); // cssmin 当与sass写在一个流下会报错
var csso = require('gulp-csso'); // 压缩css 与sass写在一个流下正常
var rename = require('gulp-rename'); // rename 
var sourcemaps = require('gulp-sourcemaps'); // 生成scss, css地图 
var autoprefixer = require('gulp-autoprefixer'); // 自动添加前缀
var spritesmith = require('gulp.spritesmith'); // 雪碧图
var imagemin = require('gulp-imagemin'); // 压缩图片
// var pngquant = require('imagemin-pngquant');         // png图片压缩质量
var sass = require('gulp-sass'); // sass模块
var plumber = require('gulp-plumber'); // plumber 运行出错不中断


/* BBD_H5 */
var CreateBBD_H5 = function(options) {
    var _config = {
        htmlDir: './BlueBerry_demo/h5/**/*.html',
        baseScss: './BlueBerry_demo/h5/sass/base.scss',
        allScss: './BlueBerry_demo/h5/sass/*.scss',
        cssDir: './BlueBerry_demo/h5/css',
        baseCss: './BlueBerry_demo/h5/css/base.css',
        allImgs: './BlueBerry_demo/h5/images/*.*',
        imgDir: './BlueBerry_demo/h5/images/'
    };

    // 创建服务器
    gulp.task('BBD_H5server', function() {

        connect.server({
            root: './BlueBerry_demo/h5/',
            livereload: true,
            port: 8001
        });

    });

    // 监听html
    gulp.task('BBD_H5html', function() {

        gulp.src(_config.htmlDir)
            .pipe(connect.reload());

    });

    // 编译scss文件 
    gulp.task('BBD_H5sass', function() {

        gulp.src(_config.baseScss)
            .pipe(sourcemaps.init())
            .pipe(plumber())
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(_config.cssDir))
            .pipe(rename({
                basename: 'base-min',
                extname: '.css'
            }))
            .pipe(csso()) // gulp-minify-css会报错
            .pipe(gulp.dest(_config.cssDir));

    });

    gulp.task('BBD_H5watch', function() {

        gulp.watch([_config.htmlDir], ['BBD_H5html']);

        gulp.watch([_config.allScss], ['BBD_H5sass']);

    });

    gulp.task('BBD_H5', ['BBD_H5server', 'BBD_H5watch']);

};

/* APP */
var CreateAPP = function() {

    var _config = {
        root: './BlueBerry/trunk/02.DOC/03.HTML/BlueBerryApp',
        htmlDir: './BlueBerry/trunk/02.DOC/03.HTML/BlueBerryApp/**/*.html',
        muiScss: './BlueBerry/trunk/02.DOC/03.HTML/BlueBerryApp/sass-mui/mui.scss',
        muiAllScss: './BlueBerry/trunk/02.DOC/03.HTML/BlueBerryApp/sass-mui/*.scss',
        themeScss: './BlueBerry/trunk/02.DOC/03.HTML/BlueBerryApp/sass/app-theme.scss',
        themeAllScss: './BlueBerry/trunk/02.DOC/03.HTML/BlueBerryApp/sass/*.scss',
        pubThemeScss: './BlueBerry/trunk/02.DOC/03.HTML/BlueBerryApp/sass/pub-theme.scss',
        cssDir: './BlueBerry/trunk/02.DOC/03.HTML/BlueBerryApp/css',
        baseCss: './BlueBerry/trunk/02.DOC/03.HTML/BlueBerryApp/css/base.css',
        allImgs: './BlueBerry/trunk/02.DOC/03.HTML/BlueBerryApp/images/*.*',
        imgDir: './BlueBerry/trunk/02.DOC/03.HTML/BlueBerryApp/images/'
    };

    var ProductionEnvironment = {
        cssDir: "./BlueBerry/trunk/01.SRC/08 App/BlueBerry.App/css/"
    };

    // 创建服务器
    gulp.task('server', function() {

        connect.server({
            root: './BlueBerry/trunk/02.DOC/03.HTML/BlueBerryApp/',
            livereload: true,
            port: 8001
        });

    });

    // 编译mui.scss文件 
    gulp.task('sass-mui', function() {

        gulp.src(_config.muiScss)
            .pipe(sourcemaps.init())
            .pipe(plumber())
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(_config.cssDir))
            .pipe(rename({
                basename: 'mui.min',
                extname: '.css'
            }))
            .pipe(csso()) // gulp-minify-css会报错
            .pipe(gulp.dest(_config.cssDir))
            .pipe(connect.reload());

    });

    // 编译app-theme.scss文件 
    gulp.task('sass-theme', function() {

        gulp.src(_config.themeScss)
            .pipe(sourcemaps.init())
            .pipe(plumber())
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(_config.cssDir))
            .pipe(rename({
                basename: 'app-theme.min',
                extname: '.css'
            }))
            .pipe(csso()) // gulp-minify-css会报错
            .pipe(gulp.dest(_config.cssDir))
            .pipe(connect.reload());

    });

    // 编译pub-theme.scss文件 
    gulp.task('pub-theme', function() {

        gulp.src(_config.pubThemeScss)
            .pipe(sourcemaps.init())
            .pipe(plumber())
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(_config.cssDir))
            .pipe(rename({
                basename: 'pub-theme.min',
                extname: '.css'
            }))
            .pipe(csso()) // gulp-minify-css会报错
            .pipe(gulp.dest(_config.cssDir))
            .pipe(connect.reload());

    });

    // 监听html
    gulp.task('html', function() {

        gulp.src(_config.htmlDir)
            .pipe(connect.reload());

    });


    gulp.task('watch', function() {

        gulp.watch([_config.htmlDir], ['html']);

        gulp.watch([_config.muiAllScss], ['sass-mui']);

        gulp.watch([_config.themeAllScss], ['sass-theme', 'pub-theme']);

    });

    gulp.task('default', ['server', 'watch']);

};

new CreateAPP();

/* BlueBerryWeb */
var CreateWEB = function() {

    var _config = {
        root: './BlueBerry/trunk/02.DOC/03.HTML/BlueBerryWeb/',
        htmlDir: './BlueBerry/trunk/02.DOC/03.HTML/BlueBerryWeb/examples/',
        sassDir: './BlueBerry/trunk/02.DOC/03.HTML/BlueBerryWeb/assets/sass/',
        cssDir: './BlueBerry/trunk/02.DOC/03.HTML/BlueBerryWeb/assets/css/',
        jsDir: './BlueBerry/trunk/02.DOC/03.HTML/BlueBerryWeb/assets/js/',
        imagesDir: './BlueBerry/trunk/02.DOC/03.HTML/BlueBerryWeb/assets/images/',
        modelsDir: './BlueBerry/trunk/02.DOC/03.HTML/BlueBerryWeb/models/',
    };

    // 创建服务器
    gulp.task('server', function() {

        connect.server({
            root: _config.root,
            livereload: true,
            port: 8001
        });

    });

    // 编译 all.scss
    gulp.task('all.scss', function() {

        gulp.src(_config.sassDir + 'all.scss')
            .pipe(sourcemaps.init())
            .pipe(plumber())
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(_config.cssDir))
            .pipe(rename({
                basename: 'all.min',
                extname: '.css'
            }))
            .pipe(csso()) // gulp-minify-css会报错
            .pipe(gulp.dest(_config.cssDir))
            .pipe(connect.reload());
    });

    // reload
    gulp.task('reload', function() {
        gulp.src([_config.htmlDir + "*.html", , _config.imagesDir + "*.*", _config.modelsDir + "*.js"])
            .pipe(connect.reload());
    });


    gulp.task('watch', function() {

        gulp.watch([_config.htmlDir + "*.html", _config.imagesDir + "*.*", _config.modelsDir + "*.js"], ['reload']);

        gulp.watch([_config.sassDir + "all.scss"], ['all.scss']);

    });

    gulp.task('default', ['server', 'watch']);
};

// new CreateWEB();
