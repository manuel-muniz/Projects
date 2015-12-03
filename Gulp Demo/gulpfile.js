var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function () {
    gulp.src("src/client/sass/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("src/client/css/"));
});

gulp.task("default", function () {
    gulp.watch("src/client/sass/**/*.scss", ["sass"]);
});