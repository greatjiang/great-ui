// const gulp = require('gulp')
// const sass = require('gulp-sass')
// const minifyCSS = require('gulp-minigy-css')
import gulp from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import minifyCSS from 'gulp-minify-css'
const sass = gulpSass(dartSass)

gulp.task('sass', async function () {
  return gulp.src('components/css/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
})