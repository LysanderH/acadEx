let mix = require('laravel-mix');

mix.setPublicPath('dist/')
    .copy('src/index.html', 'dist/index.html')
    .copyDirectory('src/assets/img', 'dist/assets/img')
    .copyDirectory('src/assets/fonts', 'dist/assets/fonts')
    .copyDirectory('src/views', 'dist/')
    .js('src/assets/js/main.js', 'dist/assets/js')
    .sass('src/assets/scss/bundle.scss', 'dist/assets/css');
