'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var log = require('gulplog');
var sourcemaps = require('gulp-sourcemaps');
var ld = require('lodash');
var browserSync = require('browser-sync').create();

// add custom browserify options here
var customOpts = {
  entries: ['./src/sketch2.js'],
  debug: true
};
var opts = ld.assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

// add transformations here
// i.e. b.transform(coffeeify);

//gulp.task('js', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', log.info); // output build logs to terminal

function bundle() {
  return b.bundle()
    // log errors if they happen
    .on('error', log.error.bind(log, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
       // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());//restart browserSync
}

function lunchBrowserSync() {
	browserSync.init({
        server: "."
    });
}

exports.js = bundle;
exports.run = lunchBrowserSync;
exports.default = gulp.parallel(lunchBrowserSync, bundle);