const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminGuetzli = require('imagemin-guetzli');
const imageminMozjpeg = require('imagemin-mozjpeg');
const webp = require('gulp-webp');

gulp.task('guetzli', () =>
    gulp.src('src/*.jpg')
    .pipe(imagemin([
        imageminGuetzli({
            quality: 84
        })
    ]))
    .pipe(gulp.dest('dist/guetzli'))
);

gulp.task('mozjpeg', () =>
    gulp.src('src/*')
    .pipe(imagemin([
        imageminMozjpeg({
            quality: 90
        })
    ]))
    .pipe(gulp.dest('dist/mozjpeg'))
);

gulp.task('webp', () =>
    gulp.src('src/*')
    .pipe(webp({
        quality: 80,
        preset: 'photo',
        method: 6
    }))
    .pipe(gulp.dest('dist/webp'))
);