var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
	console.log("Hooray! You created a gulp task.");
});

gulp.task('html', function() {
	console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('styles', function() {
	console.log("Imagine Sass or PostCSS tasks running here.");
});

gulp.task('watch', function() {

	watch('./app/index.html', function() {
		gulp.start('html'); 
	});

	watch('./app/assets/styles/**/*styles.css', function() {
	gulp.start('styles');
	});

});