const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const terser = require('gulp-terser');

function compilarSass() {
  return gulp.src('./source/styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
}

function comprimirImagens() {
  return gulp.src('./source/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function comprimirJavaScript() {
  return gulp.src('./source/scripts/**/*.js')
    .pipe(terser())
    .pipe(gulp.dest('./dist/scripts'));
}

function observar() {
  gulp.watch('./source/styles/**/*.scss', { ignoreInitial: false }, gulp.series(compilarSass));
  gulp.watch('./source/scripts/**/*.js', { ignoreInitial: false }, gulp.series(comprimirJavaScript));
  gulp.watch('./source/images/**/*', { ignoreInitial: false }, gulp.series(comprimirImagens));
}

exports.default = observar;