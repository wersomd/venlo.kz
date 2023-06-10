const { src, dest } = require("gulp");

const path = require("../config/path.js");
const app = require("../config/app.js");

const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const webp = require("gulp-webp");
const gulpif = require("gulp-if");

const img = () => {
  return src([
    "src/img/*.{png,jpg,jpeg,gif,svg}",
    "src/img/**/*.{png,jpg,jpeg,gif,svg}",
  ])
    .pipe(
      plumber({
        errorHandler: notify.onError(),
      })
    )
    .pipe(newer(path.img.dest))
    .pipe(webp())
    .pipe(
      imagemin([
        imagemin.svgo({
          plugins: [{ removeViewBox: false }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest(path.img.dest))
    .pipe(
      src([
        "src/img/*.{png,jpg,jpeg,gif,svg}",
        "src/img/**/*.{png,jpg,jpeg,gif,svg}",
      ])
    )
    .pipe(newer(path.img.dest))
    .pipe(gulpif(app.isProd, imagemin(app.imagemin)))
    .pipe(dest(path.img.dest));
};

module.exports = img;
