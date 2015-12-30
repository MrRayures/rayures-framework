/*
* Merci Alsacreation pour le tuto :
* http://www.alsacreations.com/tuto/lire/1686-introduction-a-gulp.html
*/

// Requis
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json
var extender = require('gulp-html-extend');
var concat = require('gulp-uglify');


// Variables de chemins
var source = './src'; // dossier de travail
var prod = './dist'; // dossier à livrer

// Tâche "build" = SASS + autoprefixer + CSScomb + beautify (source -> prod)
gulp.task('css', function () {
  return gulp.src(source + '/assets/scss/**/*.scss')
    .pipe(plugins.sass())
    .pipe(plugins.csscomb())
    .pipe(plugins.cssbeautify({indent: '  '}))
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest(prod + '/assets/css/'));
});

// Tâche "minify" = minification CSS (prod -> prod)
gulp.task('minify', function () {
  return gulp.src(prod + '/assets/css/*.css')
    .pipe(plugins.csso())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(prod + '/assets/css/'));
});

// Tâche "js" = (source -> prod)
gulp.task('js', function() {
  gulp.src(source + '/assets/js/*.js')
    .pipe(gulp.dest(prod + '/assets/js/'));

  gulp.src(source + '/assets/js/*.js')
    .pipe(plugins.uglify())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(prod + '/assets/js/'));
});

// Tâche "uglify" = uglify (source -> prod)
gulp.task('uglify', function() {
  return gulp.src(source + '/assets/js/*.js')
    .pipe(plugins.uglify())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(prod + '/assets/js/'));
});


// Tâche "html" = includes HTML
gulp.task('html', function() {
  return gulp.src(source + '/*.html')
  // Generates HTML includes
  .pipe(extender({
    annotations: false,
    verbose: false
  })) // default options
  .pipe(gulp.dest(prod))
});

// Tâche "img" = Images optimisées
gulp.task('img', function () {
  return gulp.src(source + '/assets/img/*.{png,jpg,jpeg,gif,svg}')
    .pipe(plugins.imagemin())
    .pipe(gulp.dest(prod + '/assets/img'));
});


// Tâche "copy" = importation eds fichiers sources type vendor (source -> prod)
gulp.task('copy', function () {
    return gulp.src([
        source + '/assets/vendor/**/*',
        source + '/*.png',
        source + '/*.ico',
        source + '/*.css'
      ], {
        base: 'src'
    }).pipe(gulp.dest(prod));
});


// Tâche "watch" = je surveille *sass
gulp.task('watch', function () {
  gulp.watch(source + '/assets/scss/*.scss', ['css', 'minify']);
  gulp.watch(source + '/assets/scss/**/*', ['css', 'minify']);
  gulp.watch(source + '/assets/js/*.js', ['js', 'uglify']);
  gulp.watch(source + '/*.html', ['html']);
});

// Tâche "build"
gulp.task('build', ['css', 'html', 'js']);

// Tâche "prod" = Build + minify
gulp.task('prod', ['build', 'minify', 'uglify', 'img', 'copy']);

// Tâche par défaut
gulp.task('default', ['build', 'watch']);