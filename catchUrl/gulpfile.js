const htmlPage = "./index.html";
const sassChanges = "./sass/**/*.scss";
const sassToCompile = "./sass/style.scss";
const cssToMinify = "./dist/css/style.css";
const folderDistCSS = "./dist/css/";

////////////////////////////

const { src, dest, watch, series } = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass");
const cleanCss = require("gulp-clean-css");
const rename = require("gulp-rename");
const sourceMaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");

/////// watch files for change/////

function watchForChanges() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "./",
    },
  }),
    watch(sassChanges, series(Sass, minifyCss, cssInject));
  watch(htmlPage).on("change", browserSync.reload);
}

function Sass() {
  return src(sassToCompile)
    .pipe(sourceMaps.init())
    .pipe(sass())
    .pipe(sourceMaps.write())
    .pipe(dest(folderDistCSS));
}

function minifyCss() {
  return src(cssToMinify)
    .pipe(sourceMaps.init())
    .pipe(cleanCss({ compatibility: "ie8" }))
    .pipe(concat("style.css"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourceMaps.write())
    .pipe(dest(folderDistCSS));
}

function cssInject() {
  return src(folderDistCSS + "style.min.css").pipe(browserSync.stream());
}

exports.default = watchForChanges;
exports.watchForChanges = watchForChanges;
exports.Sass = Sass;
exports.minifyCss = minifyCss;
exports.cssInject = cssInject;
