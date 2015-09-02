var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var bower = require('bower');
var sh = require('shelljs');
var fs = require('fs');
var runSequence = require('run-sequence');
var strip = require('gulp-strip-comments');
var stripDebug = require('gulp-strip-debug');
var del = require('del');

var paths = {
    sass: ['./scss/**/*.scss'],
    js: ['./js/**/*.js'],
    dist: {
        base: './dist',
        js: '/js',
        css: '/css',
        fonts: '/fonts'
    }
};

gulp.task('default', ['bundle', 'sass']);
gulp.task('dist', ['bundle', 'sass', 'fonts']);
gulp.task('patch', ['bump']);
gulp.task('patch-release', ['patch', 'release']);
gulp.task('minor-release', ['minor-bump', 'release']);
gulp.task('major-release', ['major-bump', 'release']);

gulp.task('scripts', function() {
    return gulp.src(paths.js)
        .pipe($.concat('ionic.material-design-lite.js'))
        .pipe(gulp.dest(paths.dist.base + paths.dist.js))
        .pipe($.uglify())
        .pipe($.rename({ extname: '.min.js' }))
        .pipe(gulp.dest(paths.dist.base + paths.dist.js));
});

gulp.task('bundle', ['scripts'], function() {
    return gulp.src([
            './bower_components/material-design-lite/dist/material.js',
            './dist/js/ionic.material-design-lite.js'
        ])
        .pipe($.concat('ionic.material-design-lite.bundle.js'))
        .pipe(gulp.dest(paths.dist.base + paths.dist.js))
        .pipe($.uglify())
        .pipe(strip())
        .pipe(stripDebug())
        .pipe($.rename({ extname: '.min.js' }))
        .pipe(gulp.dest(paths.dist.base + paths.dist.js));
});

gulp.task('fonts', function () {
    return gulp.src(['./fonts/material-icons/**/*', './fonts/roboto/**/*'])
        .pipe($.copy(paths.dist.base));
});

gulp.task('sass', function(done) {
    gulp.src(paths.sass)
        .pipe($.sass({
            precision: 10,
            onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe($.stripCssComments())
        .pipe($.autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(paths.dist.base + paths.dist.css))
        .pipe($.minifyCss({ keepSpecialComments: 0 }))
        .pipe($.rename({ extname: '.min.css' }))
        .pipe(gulp.dest(paths.dist.base + paths.dist.css))
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

gulp.task('minor-bump', ['dist'], function(){
    gulp.src(['./bower.json', './package.json'])
        .pipe($.bump({type: 'minor'}))
        .pipe(gulp.dest('./'));
});

gulp.task('major-bump', ['dist'], function(){
    gulp.src(['./bower.json', './package.json'])
        .pipe($.bump({type: 'major'}))
        .pipe(gulp.dest('./'));
});

gulp.task('commit-changes', function () {
    var version = JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;

    return gulp.src('.')
        .pipe($.git.add())
        .pipe($.git.commit('[Prerelease] Bumped version to ' + version));
});

gulp.task('push-changes', function () {
    $.git.push('origin', 'master');
});

gulp.task('git-version-tag', function(){
    var version = JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;

    // get all the files to bump version in
    $.git.tag(version, 'released version ' + version, function (err) {
        if(err) {
            throw err;
        }else{
            $.git.push('origin', 'master', {args: '--tags'})
        }
    });
});

gulp.task('release', function(){
    var version = JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;

    runSequence(
        'commit-changes',
        'push-changes',
        'git-version-tag',
        function (error) {
            if(error) {
                console.log(error);
            } else {
                console.log('Release of version ' + version + ' finished successfully');
            }
        }
    );
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
  gulp.watch(paths.js, ['bundle']);
  gulp.watch(paths.sass, ['sass']);
});
