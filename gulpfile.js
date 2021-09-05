'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var sass = require('gulp-sass')(require('sass'));
const image = require('gulp-image');

sass.compiler = require('node-sass');

// gulp.task('scss', function () {
//     return gulp.src('./src/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(postcss([
//             autoprefixer({browsers: ['last 1 version']}),
//             cssnano()
//         ]))
//         .pipe(gulp.dest('./dist'));
// });

gulp.task('scss:watch', function () {
    gulp.watch('./src/**/*.scss',  gulp.series(['scss']));});

gulp.task('img', function () {
    return gulp.src('./img/*.*')
        .pipe(image())
        .pipe(gulp.dest('./dist/img'));
});