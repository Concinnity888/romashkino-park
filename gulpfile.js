'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var minify = require('gulp-csso');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');

gulp.task('style', function () {
    return gulp.src('src/sass/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest('src/css'));
});

gulp.task('scripts', function() {
    return gulp.src([
            'src/js/libs/stickyfill.min.js',
            'src/js/libs/tiny-slider.min.js',
            'src/js/scripts.js'
        ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('src/js'));
});

gulp.task('images', function() {
    return gulp.src('src/img/**/*.{png,jpg}')
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 3}),
            imagemin.jpegtran({progressive: true})
        ]))
        .pipe(gulp.dest('docs/img'));
});

gulp.task('copy', function() {
    return gulp.src([
            'src/**/*.{html}',
            'src/fonts/**/*.{woff, woff2}',
        ], {
            'base': 'src'
        })
        .pipe(gulp.dest('docs'));
});

gulp.task('dev', [
    'style',
    'scripts'
]);

gulp.task('build', [
    'copy',
    'style:min',
    'scripts:min',
    'images'
]);

