const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();
const rimraf = require('rimraf');

// Paths
const files = {
    scssPath: 'src/css/**/*.scss',
    jsPath: 'src/js/**/*.js',
    htmlPath: 'src/**/*.html',
    imgPath: 'src/img/**/*'
};
// Clean Task
function clean(cb) {
    rimraf('dist', cb);
}
// SCSS Task
function scssTask() {
    return src(files.scssPath)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream());
}
// JS Task
function jsTask() {
    return src(files.jsPath)
        .pipe(terser())
        .pipe(dest('dist/js'))
        .pipe(browserSync.stream());
}
// HTML Task
function htmlTask() {
    return src(files.htmlPath)
        .pipe(dest('dist'))
        .pipe(browserSync.stream());
}
// Image Task
function imgTask() {
    return src(files.imgPath)
        .pipe(dest('dist/img'))
        .pipe(browserSync.stream());
}
// Watch Task
function watchTask() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });
    watch([files.scssPath, files.jsPath, files.htmlPath], parallel(scssTask, jsTask, htmlTask));
    watch(files.imgPath, imgTask); 
}

// Default Gulp Task
exports.default = series(
    clean,
    parallel(scssTask, jsTask, htmlTask, imgTask),
    watchTask
);