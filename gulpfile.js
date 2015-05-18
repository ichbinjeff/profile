var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var dest = require('gulp-dest');
var clean = require('gulp-clean');
var connect = require('gulp-connect');

var buildFile = require('./build.json');

gulp.task('lint', function() { 
	return gulp.src('src/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('clean', function() {
	return gulp.src('/dist')
	.pipe(clean());
});

gulp.task('clean:html', function() {
	return gulp.src('/dist/*.html')
		.pipe(clean())
});

gulp.task('clean:code', function() {
	return gulp.src('/dist/*.js')
		.pipe(clean());
});

gulp.task('clean:style', function() {
	return gulp.src('/dist/*.js')
		.pipe(clean());
});

gulp.task('build:code', function() {
	console.log('build code');

	return gulp.src('src/js/*.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest('dist/app'))
		.pipe(rename('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/app'))
		.pipe(connect.reload());
});

gulp.task('build:lib', function() {
	console.log('build lib');

	var libSrc = buildFile.dependencies.js;
	console.log(libSrc);
	return gulp.src(libSrc)
		.pipe(concat('lib.js'))
		.pipe(gulp.dest('dist/lib'))
		.pipe(rename('lib.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/lib'));
});

gulp.task('build:style', function() {
	console.log('build style');

	return gulp.src('src/css/*.css')
		.pipe(concat('style.css'))
		.pipe(gulp.dest('dist/style'))
		.pipe(connect.reload());
});

gulp.task('build:libStyle', function() {
    console.log('build lib style');
    var libStyle = buildFile.dependencies.css;

	return gulp.src(libStyle)
		.pipe(concat('libStyle.css'))
		.pipe(gulp.dest('dist/lib'))
		.pipe(connect.reload());
});

gulp.task('build:html', function() {
	return gulp.src(['html/index.html'])
			.pipe(gulp.dest('dist'));
})

gulp.task('build', ['build:code', 'build:style', 'build:lib', 'build:libStyle', 'build:html']);

gulp.task('watch', function() {
	gulp.watch('src/js/*.js', ['lint', 'clean:code', 'build:code']);
	gulp.watch('src/css/*.css', ['clean:style', 'build:style']);
	gulp.watch('html/index.html', ['clean:html', 'build:html']);
});

gulp.task('connect', function() {
	return connect.server({
		root: 'dist',
		port: 9000,
		liverload: true
	});
})

gulp.task('default', ['clean', 'build', 'watch', 'connect'], function() {
	console.log('default task');
});
