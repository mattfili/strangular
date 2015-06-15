var gulp = require('gulp'),
    $    = require('gulp-load-plugins')();

gulp.task('build', function () {
  gulp
    .src(['src/**/*.jade', '!src/**/_*.jade'])
    .pipe($.jade({
      pretty: true
    }))
    .pipe(gulp.dest('public'));

});

gulp.task('default', function() {
  // place code for your default task here
});
