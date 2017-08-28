var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');


const paths = {
  sass: ['./src/scss/**/*.scss'],
  html:['./src/**/*.html'],
  script:['./src/js/**/*.js']
}

gulp.task('sass', function () {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream())
});
 

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('watch', () => {
  gulp.watch(paths.sass, ['sass']).on('change', browserSync.reload);
  gulp.watch(paths.html, ['copy']).on('change', browserSync.reload);
  gulp.watch(paths.script, ['copy']).on('change', browserSync.reload);
});

gulp.task('copy', () => {
  gulp.src(['./src/**/**', '!./src/scss'])
    .pipe(gulp.dest('./build'))
});

gulp.task('default', ['watch', 'browser-sync', 'sass', 'copy']);