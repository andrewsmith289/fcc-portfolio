const { src, dest, series, parallel, watch } = require("gulp");
const sourcemaps = require('gulp-sourcemaps');
const sass = require("gulp-sass");
const concat = require("gulp-concat");

function compileScss() {
  return src("src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(dest("public/css"));
}

function watchScss() {
  return watch("src/scss/**/*.scss", compileScss);
}

function combineJs() {
  return src('src/js/header.js')
  .pipe(src("src/js/slider.js"))
  .pipe(concat('combined.js'))
  .pipe(dest("public/js/"));
}

function watchJs() {
  return watch("src/js/**/*.js", combineJs);
}

exports.compile = series(compileScss, combineJs);
exports.watch = parallel(compileScss, watchScss, watchJs);
