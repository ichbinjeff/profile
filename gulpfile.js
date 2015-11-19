var gulp = require('gulp');

var babel = require('gulp-babel');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var dest = require('gulp-dest');
var clean = require('gulp-clean');
var del = require('del');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var buildFile = require('./build.json');
var ngHtml2Js = require('gulp-ng-html2js');
var connect = require('gulp-connect');
var protractor = require('gulp-protractor').protractor;
var Server = require('karma').Server;

livereload({ start: true });

gulp.task('lint', function() { 
	return gulp.src(['src/js/*.js', 'src/js/**/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('clean', function() {
	return del([
		'dist/**'
	]);
});

// gulp.task('clean:html', function() {
// 	return gulp.src('dist/*.html')
// 		.pipe(clean());
// });

// gulp.task('clean:lib', function() {
// 	return gulp.src('dist/lib/**')
// 		.pipe(clean());
// });


// gulp.task('clean:code', function() {
// 	return gulp.src('dist/app/**')
// 		.pipe(clean());
// });

// gulp.task('clean:style', function() {
// 	return gulp.src('dist/style/**')
// 		.pipe(clean());
// });

gulp.task('build:code', function() {
	console.log('building code');

	return gulp.src(['src/js/*.js', 'src/js/**/*.js'])
		.pipe(babel())
		.pipe(concat('app.js'))
		.pipe(gulp.dest('dist/app'))
		.pipe(rename('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/app'))
		.pipe(livereload());
});

gulp.task('build:template', function() {
	console.log('building template');

	return gulp.src('src/js/**/*.tpl.html')
		.pipe(ngHtml2Js({
			moduleName: 'app'
		}))
		.pipe(concat('partials.js'))
		.pipe(gulp.dest('dist/partial'))
		.pipe(rename('partials.min.js'))
		.pipe(uglify())
	    .pipe(gulp.dest('dist/partial'))
	    .pipe(livereload());
});


gulp.task('build:lib', function() {
	console.log('building lib');

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
	console.log('building style');

	return gulp.src('src/css/*.css')
		.pipe(concat('style.css'))
		.pipe(gulp.dest('dist/style'))
		.pipe(livereload());
});

gulp.task('build:test', function() {
	console.log(buildFile.dependencies.test);

	var testDep = buildFile.dependencies.test;
	return gulp.src(testDep)
			.pipe(concat('test-dependencies.js'))
			.pipe(gulp.dest('dist/test'));
});

gulp.task('build:libStyle', function() {
    console.log('building lib style');
    var libStyle = buildFile.dependencies.css;

	return gulp.src(libStyle)
		.pipe(concat('libStyle.css'))
		.pipe(gulp.dest('dist/lib'))
		.pipe(livereload());
});

gulp.task('build:html', function() {
	return gulp.src(['html/index.html'])
			.pipe(gulp.dest('dist'))
			.pipe(livereload());
});

gulp.task('build', ['build:lib', 'build:libStyle', 'build:code', 'build:template', 'build:style', 'build:html']);

// gulp.task('clean', function() {
// 	return gulp.src('dist/**')
// 		.pipe(clean());
// });

// gulp.task('clean', ['clean:code', 'clean:style', 'clean:html', 'clean:lib']);

gulp.task('watch', function() {
	console.log('watch');
	gulp.watch('src/js/*.js', ['lint', 'build:code']);
	gulp.watch('src/js/**/*.tpl.html', ['build:template']);
	gulp.watch('src/js/**/*.js', ['lint', 'build:code']);
	gulp.watch('src/css/*.css', ['build:style']);
	gulp.watch('html/index.html', ['build:html']);
});

gulp.task('connect', function() {
	return connect.server({
		root: 'dist',
		port: 9002,
		livereload: true
	});
})

gulp.task('default', ['build', 'connect', 'watch'], function() {
	console.log('default task');
});

gulp.task('test-server', function (done) {
  new Server({
    configFile: require('path').resolve('test/unit/karma.conf.js'),
    singleRun: true
  }, done).start();
});

gulp.task('test:unit', ['build', 'build:test', 'test-server']);
gulp.task('test:e2e', function() {
	gulp.src('test/e2e/*.js')
		.pipe(protractor({
			configFile: 'test/e2e/protractor.conf.js'
		}))
		// .on('error', function(e) {
		// 	throw e;
		// });
});
