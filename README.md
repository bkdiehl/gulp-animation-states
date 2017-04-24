# gulp-animation-states
<h1>gulp-animation-states</h1>
<p>A gulp plugin for consolidating svg and js files into objects readable by the snap-animation-states.js plugin</p>
<h2>Installation</h2>
<pre>npm install gulp-animation-states</pre>
<h2>Usage</h2>
<h3>gulpfile.js</h3>
<pre>
var animationStates = require('gulp-animation-states'),
    concat = require('gulp-concat');

gulp.task('svg', function() {
    return gulp.src([your, src, files])
    .pipe(animationStates(bool:optional))
    .pipe(concat('icons.js'))
    .pipe(gulp.dest('yourDestination.js'));
});
</pre>
<p>Set the optional bool to true if you want the gulpfile to combine your svg and js files into variables without calling the snap-animation-states plugin.</p>
<h3>SVG files</h3>
<p>No special formatting needed. Just place your svg files in a folder together and give them the name you want to call them by in snap-animation-states.js</p>
<h3>JS files</h3>
<p>Make sure you give them the same name as their corresponding svg file.  The gulp plugin cannot compare and combine the files if they do not have the same name.  The file would be formatted like this:</p>
<pre>
{
    transitionTime: 250,
    states: {
        open:[
            { id: "top-lower", element: ".hamburger-top", y:20 },
            { id: "bottom-raise", element: ".hamburger-bottom", y:-20 },
            { waitFor: "top-lower", element: ".hamburger-upper", r:45 },
            { waitFor: "top-lower", element: ".hamburger-lower", r:-45 },
        ],
        closed: [
            { id: "top-angle", element: ".hamburger-upper", r: 0 },
            { id: "bottom-angle", element: ".hamburger-lower", r: 0 },						
            { waitFor: "top-angle", element: ".hamburger-top", y: 0 },
            { waitFor: "bottom-angle", element: ".hamburger-bottom", y: 0 },
        ]
    },
    events: [
        { event: "click", state: ["open", "closed"], selector: '.hamburger-animate' }
    ]
}
</pre>
<p>The plugin will automatically include the "selector" and "svg" keys/properties needed to run snap-animation-states.js  Just make sure your the rest of your schema matches the rest of the <a href="https://bkdiehl.github.io/">snap-animation-states-schema</a></p>
