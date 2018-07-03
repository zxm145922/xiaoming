const gulp=require("gulp"),
    connect=require("gulp-connect"),
    sass=require("gulp-sass");

    //启动服务器
gulp.task("connect",function(){
    connect.server({
        root:"dist",
        livereload:true//浏览器自动刷新
    });
});

//复制HTML文件到dist目录下，让HTML页面修改后重新加载
gulp.task("html",function(){
    gulp.src("src/**/*.html")
        .pipe(gulp.dest("dist/"))
        .pipe(connect.reload());//浏览器自动刷新
});
gulp.task("img",function(){
    gulp.src("src/img/*.*")
        .pipe(gulp.dest("dist/img"))
        .pipe(connect.reload());//浏览器自动刷新
});
gulp.task("lib",function(){
    gulp.src("src/lib/**/*.*")
        .pipe(gulp.dest("dist/lib"))
        .pipe(connect.reload());//浏览器自动刷新
});
gulp.task("js",function(){
    gulp.src("src/js/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());//浏览器自动刷新
});
//编译*.scss文件为*.css文件
gulp.task("sass",function(){
    gulp.src("src/sass/*.scss")
        .pipe(sass({outputStyle:"compressed"}))
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());//浏览器自动刷新
});

//监视文件的修改
gulp.task("watch",function(){
    gulp.watch("src/sass/*.scss",["sass"]);
    gulp.watch("src/**/*.html",["html"]);
    gulp.watch("src/img/*.*",["img"]);
    gulp.watch("src/js/*.js",["js"]);
    gulp.watch("src/lib/*.*",["lib"]);
});

//定制默认任务
gulp.task("default",["lib","js","img","html","sass","connect","watch"]);