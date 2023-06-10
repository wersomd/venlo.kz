const { src, dest } = require("gulp");

const path = require("../config/path.js");
const app = require("../config/app.js");

const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify-es").default;



const js = () => {
    return src(["src/js/*.js", "src/js/**/*.js"], {sourcemaps: app.isDev})
        .pipe(plumber({
            errorHandler: notify.onError()
        }))
        .pipe(dest(path.js.dest))
        .pipe(
            uglify()
        )
        .pipe(
            rename({
                extname: ".min.js"
            })
        )
        .pipe(dest(path.js.dest, {sourcemaps: app.isDev}));
}

module.exports = js;