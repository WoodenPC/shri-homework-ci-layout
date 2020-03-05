const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('compile scss', () => {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', () => {
  watch('./scss/**/*.scss', gulp.series('compile scss'));
});