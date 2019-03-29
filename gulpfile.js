var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var rename = require("gulp-rename");
var fs = require('fs');
var minify = require('gulp-minify');
var runSequence = require('run-sequence');

var config = JSON.parse(fs.readFileSync('./package.json'));

var paths = {
    css: ['./css/**/*.css'],
    js: [
      './js/labelControls/*.js',
      './js/lindell-barcode/JsBarcode.all.min.js',
      './js/tools/*.js',
      './js/*.js'
    ],
};

// clean task
gulp.task('clean', function() {
    return gulp.src('./dist/*', { read: false })
        .pipe(clean());
});


// copy task, copy assets to dist folder
gulp.task('copy', function() {
    gulp.src('./css/**').pipe(gulp.dest('./dist/css'));
    gulp.src('./fonts/**').pipe(gulp.dest('./dist/fonts'));
    gulp.src('./design/**').pipe(gulp.dest('./dist/design'));
});

gulp.task('build', function(){
  return gulp.src(paths.js)
    .pipe(concat('app.js'))
    .pipe(minify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('default', function(){
  runSequence('clean', 'copy', 'build');
});
