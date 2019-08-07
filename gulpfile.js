'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');
const pug = require('gulp-pug');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const htmlPrettify = require('gulp-html-prettify');
const sequence = require('run-sequence');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const svgSprites = require('gulp-svg-sprites');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const replace = require('gulp-replace');
const inject = require('gulp-inject-string');
const babel = require('gulp-babel');

var args = require('yargs').argv;


/*******************************************************************************
 *
 *     CLEANUP
 *
 *******************************************************************************/

gulp.task('clean', function () {
  return gulp.src('./build', {read: false})
    .pipe(clean({force: true}));
});


/*******************************************************************************
 *
 *     MARKUP COMPILATION
 *
 *******************************************************************************/

gulp.task('compile-markup', function () {
  global.jsonVars = {};
  return gulp.src("./source/pages/**/*.pug")
    .pipe(pug()).on('error', gutil.log)
    .pipe(htmlPrettify({indent_char: ' ', indent_size: 2})).on('error', gutil.log)
    .pipe(gulp.dest('./build/'));
});


/*******************************************************************************
 *
 *     JAVASCRIPT COMPILATION
 *
 *******************************************************************************/

gulp.task('compile-module-javascript', function () {
  return gulp.src("./source/components/**/*.js")
    .pipe(concat('components.js')).on('error', gutil.log)
    .pipe(babel({presets: ['env']}))
    .pipe(gulp.dest('./build/scripts/'))
});

gulp.task('compile-global-javascript', function () {
  return gulp.src(["./source/**/*.js", '!./source/components/**/*'])
    .pipe(babel({presets: ['env']}))
    .pipe(gulp.dest('./build/'))
});


/*******************************************************************************
 *
 *     CSS COMPILATION (Supporting SASS, LESS, or just copying plain CSS)
 *
 *******************************************************************************/

gulp.task('compile-module-sass', function () {
  return gulp.src(['./source/components/**/*.{scss,sass}'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(concat('components.css')).on('error', gutil.log)
    .pipe(gulp.dest('./build/styles/'))
    .pipe(browserSync.stream());
});

gulp.task('compile-global-sass', function () {
  return gulp.src(['./source/**/*.{scss,sass}', '!./source/components/**/*'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./build/'))
    .pipe(browserSync.stream());
});

/*******************************************************************************
 *
 *     SVG ICONS (if no source/icons folder full of svgs exists... this won't do anything)
 *
 *******************************************************************************/

gulp.task('compile-icons', function () {
  return gulp.src('./source/icons/*.svg')
    .pipe(svgSprites({preview: false, mode: "symbols", svg: {symbols: "icons.svg"}})).on('error', gutil.log)
    .pipe(gulp.dest(`./build/images/`));
});

/*******************************************************************************
 *
 *     ASSET COPYING
 *
 *******************************************************************************/

gulp.task('copy-images', function () {
  return gulp.src(['./source/images/**/*'])
    .pipe(gulp.dest('./build/images/'))
});

gulp.task('copy-fonts', function () {
  return gulp.src('./source/fonts/**/*')
    .pipe(gulp.dest('./build/fonts/'))
});

gulp.task('copy-data', function () {
  return gulp.src('./source/data/**/*')
    .pipe(gulp.dest('./build/data/'))
});

gulp.task('copy-libs', function () {
  return gulp.src('./source/libs/**/*.js')
    .pipe(gulp.dest('./build/libs/'))
});

gulp.task('copy-files', function () {
  return gulp.src('./source/files/**/*')
    .pipe(gulp.dest('./build/files/'))
});


/*******************************************************************************
 *
 *     WATCH MANAGEMENT
 *
 *******************************************************************************/

gulp.task('start-watch', function () {
  browserSync.init({server: "./build/"});
  gulp.watch('./source/**/*.{scss,sass}', {interval: 250}, ['compile-module-sass']).on('change', browserSync.reload);
  gulp.watch(['./source/**/*.{scss,sass}', '!./source/components/**/*'], {interval: 250}, ['compile-global-sass']).on('change', browserSync.reload);
  gulp.watch('./source/components/**/*.js', {interval: 250}, ['compile-module-javascript']);
  gulp.watch(['./source/**/*.js', '!./source/components/**/*'], {interval: 250}, ['compile-global-javascript']);
  gulp.watch(['./source/images/**/*'], {interval: 250}, ['copy-images']).on('change', browserSync.reload);
  gulp.watch(['./source/files/**/*'], {interval: 250}, ['copy-files']);
  gulp.watch(['./source/libs/**/*.js'], {interval: 250}, ['copy-libs']);
  gulp.watch(['./source/icons/*.svg'], {interval: 250}, ['compile-icons']);
  gulp.watch('./source/fonts/**/*', {interval: 250}, ['copy-fonts']);
  gulp.watch('./source/**/*.pug', {interval: 250}, ['compile-markup']);
  gulp.watch(["./build/**/*.html", "./build/**/*.js", "./build/images/**/*", "./build/fonts/**/*"]).on('change', browserSync.reload);
});


/*******************************************************************************
 *
 *     WATCH MANAGEMENT
 *
 *******************************************************************************/

gulp.task('component', function () {
  const componentName = args.name.toLowerCase();
  const componentClassName = componentName.split('-').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join('');
  gulp.src(['./source/components/example/*.pug'])
    .pipe(replace('example', componentName))
    .pipe(concat(`${componentName}.pug`))
    .pipe(gulp.dest(`./source/components/${componentName}/`));
  gulp.src(['./source/components/example/*.scss'])
    .pipe(replace('example', componentName))
    .pipe(concat(`${componentName}.scss`))
    .pipe(gulp.dest(`./source/components/${componentName}/`));
  gulp.src(['./source/components/example/*.js'])
    .pipe(replace('Example', componentClassName))
    .pipe(replace('example', componentName))
    .pipe(concat(`${componentName}.js`))
    .pipe(gulp.dest(`./source/components/${componentName}/`));
  gulp.src(['./source/components/index.pug'])
    .pipe(inject.append(`\ninclude ${componentName}/${componentName}.pug`))
    .pipe(gulp.dest(`./source/components/`));
});


/*******************************************************************************
 *
 *     TASKS (Available from command line)
 *
 *******************************************************************************/

gulp.task('default', function (done) {
  global.buildEnv = 'production';
  return sequence(
    'clean',
    'compile-icons',
    'compile-markup',
    'copy-images',
    'copy-libs',
    'copy-fonts',
    'copy-files',
    'compile-module-sass',
    'compile-global-sass',
    'compile-module-javascript',
    'compile-global-javascript',
    () => {
      done()
    }
  );
});

gulp.task('watch', function (done) {
  sequence(
    'default',
    'start-watch',
    () => {
      done()
    }
  );
});
