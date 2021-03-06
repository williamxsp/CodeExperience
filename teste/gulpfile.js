var gulp = require('gulp');
var stylus = require('gulp-stylus');

// Task create
gulp.task('styles', function () {
    gulp.src('style.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./css/'));
});

// Auto task
gulp.task('watch:styles', function () {
    gulp.watch('**/*.styl', ['styles']);
});