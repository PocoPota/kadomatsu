const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Sassをコンパイルする
const compileSass = () =>
    src("styles/*.scss")
        .pipe(
            sass({
                outputStyle: "expanded"
            })
        )
        .pipe(dest("styles"));

// Sassファイルを監視
const watchSassFiles = () =>
    watch("styles/*.scss", compileSass);

// npx gulpで実行される関数
exports.default = () =>
    watchSassFiles();