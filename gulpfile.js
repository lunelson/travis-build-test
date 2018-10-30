/*
  svg workflow based on this
  https://www.npmjs.com/package/gulp-svgstore#extracting-metadata-from-combined-svg
*/

var gulp = require('gulp');
var Vinyl = require('vinyl');
var svgstore = require('gulp-svgstore');
var through2 = require('through2');
var cheerio = require('cheerio');

gulp.task('metadata', function () {
  return gulp
    .src('test/src/*.svg')
    .pipe(svgstore())
    .pipe(through2.obj(function (file, encoding, cb) {
      var $ = cheerio.load(file.contents.toString(), {
        xmlMode: true
      });
      var data = $('svg > symbol').map(function () {
        return {
          name: $(this).attr('id'),
          viewBox: $(this).attr('viewBox')
        };
      }).get();
      var jsonFile = new Vinyl({
        path: 'metadata.json',
        contents: Buffer.from(JSON.stringify(data))
      });
      this.push(jsonFile);
      this.push(file);
      cb();
    }))
    .pipe(gulp.dest('test/dest'));
});
