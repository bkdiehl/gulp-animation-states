# gulp-animation-states
A gulp plugin for consolidating svg and js files into objects readable by the snap-animation-states.js plugin

## Installation
```
npm install gulp-animation-states
```

## Usage

### gulpfile.js
```js
var animationStates = require('gulp-animation-states'),
    concat = require('gulp-concat');
    
gulp.task('svg', function() {
    return gulp.src([your, src, files])
        .pipe(animationStates(bool:optional))
        .pipe(concat('icons.js'))
        .pipe(gulp.dest('yourDestination.js'));
});
```

Set the optional bool to true if you want the gulpfile to combine your svg and js files into variables without calling the snap-animation-states plugin.

### SVG files
No special formatting needed. Just place your svg files in a folder together and give the file a name you want to call it by in snap-animation-states.js

### JS files
Make sure you give them the same name as their corresponding svg file.  The gulp plugin cannot compare and combine the files if they do not have the same name.  The file would be formatted like this:
```js
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
```

The plugin will automatically include the `selector` and `svg` keys/properties needed to run [`snap-animation-states.js`](https://github.com/bkdiehl/snap-animation-states) Just make sure your the rest of your schema matches the rest of the `snap-animation-states-schema`.  For examples of files and their output, view the content folder above.

## Example

### File Structure

The plugin will search through your src files to find files that have the same name. Ex. icon-hamburger.js and icon-hamburger.svg
```
base
|--content
|----svg
|------icon-folder.svg
|------icon-folder.js
|------icon-hamburger.svg
|------icon-hamburger.js
|------icon-lock.svg
|------icon-mic.svg
|------icon-wall.svg
```
It's okay to include an svg file without a js file.  That just means you want a static svg that is easily called. Ex. `<i class="icon-mic"></i>`
