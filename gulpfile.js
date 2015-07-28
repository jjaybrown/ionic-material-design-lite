var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var bower = require('bower');
var sh = require('shelljs');

var paths = {
    sass: ['./scss/**/*.scss'],
    js: ['./js/**/*.js'],
    dist: './dist'
};

gulp.task('default', ['test']);
gulp.task('dist', ['scripts', 'sass']);
gulp.task('minor-release', ['bump']);
gulp.task('major-release', ['major-bump']);

gulp.task('scripts', function() {
    return gulp.src(paths.js)
        .pipe($.concat('ionic.material-design-lite.js'))
        .pipe(gulp.dest(paths.dist))
        .pipe($.uglify())
        .pipe($.rename({ extname: '.min.js' }))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('sass', function(done) {
    gulp.src('./scss/ionic-material-design-lite.scss')
        .pipe($.sass({
            precision: 10,
            onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe($.stripCssComments())
        .pipe($.autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(paths.dist))
        .pipe($.minifyCss({ keepSpecialComments: 0 }))
        .pipe($.rename({ extname: '.min.css' }))
        .pipe(gulp.dest(paths.dist))
        .on('end', done);
});

gulp.task('test', function () {
    // Be sure to return the stream
    // NOTE: Using the fake './foobar' so as to run the files
    // listed in karma.conf.js INSTEAD of what was passed to
    // gulp.src !
    return gulp.src('./foobar')
        .pipe($.karma({
            configFile: './tests/karma.conf.js',
            action: 'run'
        }))
        .on('error', function (err) {
            // Make sure failed tests cause gulp to exit non-zero
            process.exit(1);
        });
});

gulp.task('coverage', ['test'], function () {
    return gulp.src('tests/coverage/**/lcov.info')
        .pipe($.coveralls()).on('error', function (err) {
            // Make sure failed tests cause gulp to exit non-zero
            process.exit(1);
        });
});

gulp.task('bump', ['dist'], function(){
    gulp.src(['./bower.json', './package.json'])
        .pipe($.bump())
        .pipe(gulp.dest('./'));
});

gulp.task('major-bump', ['dist'], function(){
    gulp.src(['./bower.json', './package.json'])
        .pipe($.bump({type: 'major'}))
        .pipe(gulp.dest('./'));
});

gulp.task('install', ['git-check'], function() {
    return bower.commands.install()
        .on('log', function(data) {
            $.util.log('bower', $.util.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function(done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + $.util.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', $.util.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + $.util.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});


gulp.task('watch', function() {
  gulp.watch(paths.js, ['scripts']);
  gulp.watch(paths.sass, ['sass']);
});
