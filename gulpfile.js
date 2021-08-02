const { src, dest, parallel } = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass')); // { ! }

sass.compiler = require('node-sass'); // { ! }

exports.default = () => {  // { ! }
    return src('src/assets/sass/style.scss')
           .pipe(sass({outputStyle: 'compressed'}))
           .pipe(rename({extname: '.min.css'}))
           .pipe(dest('public/assets/css/'));
}