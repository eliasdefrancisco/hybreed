'use strict';

var gulp = require('gulp');

gulp.task('copyFiles', ['copyIndex', 'copyFonts']);

gulp.task('copyIndex', function() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('www'));
});

gulp.task('copyFonts', function() {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('www/fonts'));
});

gulp.task('copyImg', function() {
    return gulp.src('src/img/**/*')
        .pipe(gulp.dest('www/img'));
});

gulp.task('copyVendor', function() {
    return gulp.src(['src/vendor/**', '!src/vendor/libs.js', '!src/vendor/libs.scss'])
        .pipe(gulp.dest('www/vendor'));
});
