const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function css( done ){
    // Compilar sass
    // Pasos: 1-Identificar archivo, 2.- Compilar, 3.- Guardar css
    src('src/scss/app.scss') //Identifica
        .pipe( sass( {outputStyle: 'expanded'} ) ) //Compila con sass
        .pipe( postcss([ autoprefixer() ]) )
        .pipe( dest('build/css') ) //Guarda en el destino

    done();
}

function watcher( done ){
    watch('src/scss/**/*.scss', css);

    done();
}

exports.css = css;
exports.watcher = watcher;
exports.default = series( css, watcher); //Siempre dejar el watch hasta el final