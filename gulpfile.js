var gulp = require('gulp');
var size = require('gulp-size');
var notify = require('gulp-notify');
var foreach = require('gulp-foreach');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var imageResize = require('gulp-image-resize');
var parallel = require("concurrent-transform");
var os = require("os");

gulp.task('default', function () {

    return gulp.src('./public/images-origin/**/*.{png,jpg}')
    .pipe(size({showFiles: true}))
    .pipe(parallel(imageResize({
      width : 2560,
      height : 1600,
      upscale : false,
      quality: 0.6,
      imageMagick: true
    }), os.cpus().length))
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('./public/images'))
    .pipe(size({showFiles: true}));
});
