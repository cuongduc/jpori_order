/**
 * Created by duccuong on 24/03/2017.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');


gulp.task('default', function() {
   return gulp.src('./frontend/stylesheets/app.scss')
       .pipe(sass())
       .pipe(cssnano())
       .pipe(gulp.dest('./jpori_order/static/css/'))
});