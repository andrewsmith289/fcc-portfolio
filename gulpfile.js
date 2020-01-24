const { src, dest, series, parallel, watch } = require("gulp");
const sourcemaps = require('gulp-sourcemaps');
const sass = require("gulp-sass");

function compileScss() {
  return src("scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(dest("css"));
}

function watchScss() {
  return watch("./scss/**/*.scss", compileScss);
}

exports.compile = series(compileScss);
exports.watch = parallel(compileScss, watchScss);
