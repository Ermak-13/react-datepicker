var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    rename = require('gulp-rename');


gulp.task('dev', ['watch']);
gulp.task('default', ['build']);

gulp.task('build', function () {
  return browserify({
    }).transform('babelify', {
      entries: './src/datepicker.jsx',
      extensions: ['.jsx', '.js']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(rename('react-datepicker.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.js*', ['build']);
});
