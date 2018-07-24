var gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
  clean = require('gulp-clean'),
  usemin = require('gulp-usemin'),
  cssmin = require('gulp-cssmin'),
  uglify = require('gulp-uglify'),
  browserSync = require('browser-sync'),
  jshint = require('gulp-jshint'),
  jshintstylish = require('jshint-stylish'),
  csslint = require('gulp-csslint');


gulp.task('default', ['copy'], function () {
  gulp.start('build-img', 'usemin');
  gulp.start('usemin');
});

gulp.task('copy', ['clean'], function () {
  return gulp.src('app/**/*')
    .pipe(gulp.dest('public'));
});

gulp.task('clean', function () {
  return gulp.src('public')
    .pipe(clean());
});

gulp.task('build-img', function () {
  return gulp.src('public/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/img'));
});

gulp.task('usemin', function () {
  return gulp.src(['public/**/*.html', 'public/**/*.php'])
    .pipe(usemin({
      js: [uglify],
      css: [cssmin]
    }))
    .pipe(gulp.dest('public'));
});

gulp.task('server', function () {



  browserSync.init({
    server: {
      baseDir: './'
    },
    startPath: './app',
    routes: {
      "node_modules": "./node_modules"
    }
  });

  gulp.watch('app/**/*').on('change', browserSync.reload);

      gulp.watch('app/css/*.css').on('change', function (event) {
        gulp.src(event.path)
          .pipe(csslint())
          .pipe(csslint.reporter());
      });
  
   gulp.watch('app/js/*.js').on('change', function(event) {
        console.log("Linting " + event.path);
        gulp.src(event.path)
            .pipe(jshint())
            .pipe(jshint.reporter(jshintstylish));
    });

});
