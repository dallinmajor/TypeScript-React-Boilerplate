import * as gulp from 'gulp';
import * as webpack from 'webpack';
import * as del from 'del';
import * as defaultConfig from './webpack/webpack.config.default';

function onWebpackBuild(done?) {
    return (err, stats) => {
        if (err)
            console.log(err);
        else
            console.log(stats.toString({
                chunks: false,
                colors: true
            }));
        if (done)
            done();
    }
}

gulp.task('clean', () => {
    return del('./dist/**', {force: true});
})

gulp.task('default', (done) => {
    webpack(defaultConfig.default)
        .run(onWebpackBuild(done))
})

gulp.task('default:watch', () => {
    webpack(defaultConfig.default)
        .watch({
            aggregateTimeout: 300
        }, onWebpackBuild())
})