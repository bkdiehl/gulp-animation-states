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

The plugin will search through your src files to find files that have the same name. 
Ex. `icon-hamburger.js` and `icon-hamburger.svg`
```
base
|--content
|----svg
|------icon-folder.svg
|------icon-folder.js
|------icon-hamburger.svg
|------icon-hamburger.js
|------icon-mic.svg
|------icon-wall.svg
|------icon-wrench.svg
```
It's okay to include an svg file without a js file.  That just means you want a static svg that is easily called. 
Ex. `<i class="icon-mic"></i>`

### Gulp File

We want to consolidate all our svg and js files into a single js file that we can use.  Since all my files are in the same folder, it's simple to plug those into my gulp.src.
```
var gulp = require('gulp'),
    animationStates = require('gulp-animation-states'),
    concat = require('gulp-concat');
    
gulp.task('svg', function() {
    return gulp.src('content/svg/*')
        .pipe(animationStates())
        .pipe(concat('icons.js'))
        .pipe(gulp.dest('content/js/icons.js'));
});
```
If you modify your icons a lot while testing, I recommend setting up with livereload.

### Output

This is how your file structure is going to look now.
```
base
|--content
|----svg
|------icon-folder.svg
|------icon-folder.js
|------icon-hamburger.svg
|------icon-hamburger.js
|------icon-mic.svg
|------icon-wall.svg
|------icon-wrench.svg
|----js
|------icons.js
```
And this is what your `icons.js` file looks like.  You'll notice that the file spits out variables which are then called by the plugin.  This allows you to modify the variables when you want to and then call `SnapStates()` again at your leisure.
```js
var iconFolder = {"transitionTime":500,"initState":"open","states":{"open":[{"id":"outline-open","element":".cover","path":"M3.5,51.5L54.5,51.5L62.415,24.29L31.915,24.255L23.915,29.49L11.415,29.49L3.5,51.5"}],"closed":[{"id":"outline-close","element":".cover","path":"M3.5,51.5L54.5,51.5L54.5,17.8L24,17.765L16,23L3.5,23L3.5,51.5"}],"hover":[{"id":"bounce-up","element":".folder","y":-2,"transitionTime":100,"repeat":{"times":1}},{"id":"bounce-side","waitFor":"bounce-up","element":".folder","y":0,"transitionTime":100}]},"events":[{"event":"click","state":["closed","open"]},{"event":"mouseenter","state":"hover"}],"selector":".icon-folder","svg":"<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 64 64\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;\">\n\t<g class=\"folder\">\n\t\t<path d=\"M3.5,51.5L3.5,14.664L18.375,14.5L18.413,17.765L54.459,17.765L54.5,51.5L3.5,51.5Z\" style=\"fill:none;stroke:#000;stroke-width:3px;\"/>\n\t\t<path class=\"cover\" d=\"M3.5,51.5L54.5,51.5L54.5,17.8L24,17.765L16,23L3.5,23L3.5,51.5\" style=\"stroke:#000;stroke-width:3px;\"/>\n\t</g>\n</svg>\n"};
SnapStates(iconFolder);
var iconHamburger = {"transitionTime":250,"states":{"open":[{"id":"top-lower","element":".hamburger-top","y":20},{"id":"bottom-raise","element":".hamburger-bottom","y":-20},{"waitFor":"top-lower","element":".hamburger-upper","r":45},{"waitFor":"top-lower","element":".hamburger-lower","r":-45}],"closed":[{"id":"top-angle","element":".hamburger-upper","r":0},{"id":"bottom-angle","element":".hamburger-lower","r":0},{"waitFor":"top-angle","element":".hamburger-top","y":0},{"waitFor":"bottom-angle","element":".hamburger-bottom","y":0}]},"events":[{"event":"click","state":["open","closed"],"selector":".hamburger-animate"}],"selector":".icon-hamburger","svg":"<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\r\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 65 60\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.5;\">\r\n\t<g class=\"hamburger-group\" fill=\"none\" stroke=\"#000\" stroke-width=\"10\">\r\n\t\t<g class=\"hamburger-upper\">\r\n\t\t\t<path class=\"hamburger-top\" d=\"m 5,10 55,0\" />\r\n\t\t\t<path class=\"hamburger-middle\" d=\"m 5,30 55,0\" />\r\n\t\t</g>\r\n\t\t<g class=\"hamburger-lower\">\r\n\t\t\t<path class=\"hamburger-bottom\" d=\"m 5,50 55,0\" />\r\n\t\t</g>\r\n\t</g>\r\n</svg>"};
SnapStates(iconHamburger);
var iconMic = {"selector":".icon-mic","svg":"<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 65 65\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;\">\n    <path d=\"M17.257,26.752L17.257,30.407C17.257,39.047 24.087,46.062 32.5,46.062C40.913,46.062 47.743,39.047 47.743,30.407L47.743,26.752\" style=\"fill:none;stroke:#000;stroke-width:5.42px;\"/>\n    <path d=\"M51.824,61.149C51.824,58.061 48.633,55.554 44.703,55.554L20.297,55.554C16.367,55.554 13.176,58.061 13.176,61.149\"/>\n    <path d=\"M32.5,46.062L32.5,58.351\" style=\"fill:none;stroke:#000;stroke-width:5.42px;\"/>\n    <path d=\"M39.076,12.426C39.076,8.797 36.129,5.851 32.5,5.851C28.871,5.851 25.924,8.797 25.924,12.426L25.924,30.793C25.924,34.422 28.871,37.368 32.5,37.368C36.129,37.368 39.076,34.422 39.076,30.793L39.076,12.426Z\" style=\"stroke:#000;stroke-width:5.42px;\"/>\n</svg>\n"};
SnapStates(iconMic);
var iconWall = {"selector":".icon-wall","svg":"<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 65 65\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;\">\n    <g>\n        <rect class=\"top-left\" x=\"-1.274\" y=\"2.983\" width=\"32.5\" height=\"18\"/>\n        <rect class=\"top-right\" x=\"33.774\" y=\"2.983\" width=\"32.5\" height=\"18\"/>\n        <rect class=\"bottom-left\" x=\"-1.274\" y=\"43.96\" width=\"32.5\" height=\"18\"/>\n        <rect class=\"bottom-right\" x=\"33.774\" y=\"43.96\" width=\"32.5\" height=\"18\"/>\n        <rect class=\"left\" x=\"-1.274\" y=\"23.5\" width=\"15.074\" height=\"18\"/>\n        <rect class=\"right\" x=\"51.213\" y=\"23.5\" width=\"15.074\" height=\"18\"/>\n        <rect class=\"center\" x=\"16.25\" y=\"23.5\" width=\"32.5\" height=\"18\"/>\n    </g>\n</svg>\n"};
SnapStates(iconWall);
var iconWrench = {"selector":".icon-wrench","svg":"<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 64 64\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;\">\n    <path class=\"wrench\" d=\"M38.017,19.362C37.493,18.125 37.203,16.765 37.203,15.338C37.203,9.636 41.832,5.006 47.534,5.006C48.278,5.006 49.003,5.085 49.702,5.235L44.72,10.216C42.53,12.406 42.53,15.962 44.72,18.152C46.91,20.342 50.466,20.342 52.656,18.152L57.637,13.17C57.787,13.869 57.866,14.594 57.866,15.338C57.866,21.04 53.236,25.669 47.534,25.669C46.107,25.669 44.747,25.379 43.51,24.855L23.714,44.651C24.238,45.888 24.528,47.248 24.528,48.675C24.528,54.377 19.899,59.006 14.197,59.006C13.454,59.006 12.729,58.928 12.03,58.778L17.011,53.797C19.201,51.607 19.201,48.051 17.011,45.861C14.821,43.671 11.265,43.671 9.075,45.861L4.094,50.842C3.944,50.143 3.866,49.418 3.866,48.675C3.866,42.973 8.495,38.344 14.197,38.344C15.624,38.344 16.984,38.634 18.221,39.158L38.017,19.362Z\" style=\"stroke:#000;stroke-width:1px;\"/>\n</svg>\n"};
SnapStates(iconWrench);
```

One last thing. I had previously mentioned that there is an optional bool argument. If I set `animationStates(true)` in the gulp file, I get a slightly different output.  This is for those of you who may want to call `SnapStates()` specifically when it's needed.  Here's the output:

```js
var iconFolder = {"transitionTime":500,"initState":"open","states":{"open":[{"id":"outline-open","element":".cover","path":"M3.5,51.5L54.5,51.5L62.415,24.29L31.915,24.255L23.915,29.49L11.415,29.49L3.5,51.5"}],"closed":[{"id":"outline-close","element":".cover","path":"M3.5,51.5L54.5,51.5L54.5,17.8L24,17.765L16,23L3.5,23L3.5,51.5"}],"hover":[{"id":"bounce-up","element":".folder","y":-2,"transitionTime":100,"repeat":{"times":1}},{"id":"bounce-side","waitFor":"bounce-up","element":".folder","y":0,"transitionTime":100}]},"events":[{"event":"click","state":["closed","open"]},{"event":"mouseenter","state":"hover"}],"selector":".icon-folder","svg":"<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 64 64\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;\">\n\t<g class=\"folder\">\n\t\t<path d=\"M3.5,51.5L3.5,14.664L18.375,14.5L18.413,17.765L54.459,17.765L54.5,51.5L3.5,51.5Z\" style=\"fill:none;stroke:#000;stroke-width:3px;\"/>\n\t\t<path class=\"cover\" d=\"M3.5,51.5L54.5,51.5L54.5,17.8L24,17.765L16,23L3.5,23L3.5,51.5\" style=\"stroke:#000;stroke-width:3px;\"/>\n\t</g>\n</svg>\n"};
var iconHamburger = {"transitionTime":250,"states":{"open":[{"id":"top-lower","element":".hamburger-top","y":20},{"id":"bottom-raise","element":".hamburger-bottom","y":-20},{"waitFor":"top-lower","element":".hamburger-upper","r":45},{"waitFor":"top-lower","element":".hamburger-lower","r":-45}],"closed":[{"id":"top-angle","element":".hamburger-upper","r":0},{"id":"bottom-angle","element":".hamburger-lower","r":0},{"waitFor":"top-angle","element":".hamburger-top","y":0},{"waitFor":"bottom-angle","element":".hamburger-bottom","y":0}]},"events":[{"event":"click","state":["open","closed"],"selector":".hamburger-animate"}],"selector":".icon-hamburger","svg":"<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\r\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 65 60\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.5;\">\r\n\t<g class=\"hamburger-group\" fill=\"none\" stroke=\"#000\" stroke-width=\"10\">\r\n\t\t<g class=\"hamburger-upper\">\r\n\t\t\t<path class=\"hamburger-top\" d=\"m 5,10 55,0\" />\r\n\t\t\t<path class=\"hamburger-middle\" d=\"m 5,30 55,0\" />\r\n\t\t</g>\r\n\t\t<g class=\"hamburger-lower\">\r\n\t\t\t<path class=\"hamburger-bottom\" d=\"m 5,50 55,0\" />\r\n\t\t</g>\r\n\t</g>\r\n</svg>"};
var iconMic = {"selector":".icon-mic","svg":"<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 65 65\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;\">\n    <path d=\"M17.257,26.752L17.257,30.407C17.257,39.047 24.087,46.062 32.5,46.062C40.913,46.062 47.743,39.047 47.743,30.407L47.743,26.752\" style=\"fill:none;stroke:#000;stroke-width:5.42px;\"/>\n    <path d=\"M51.824,61.149C51.824,58.061 48.633,55.554 44.703,55.554L20.297,55.554C16.367,55.554 13.176,58.061 13.176,61.149\"/>\n    <path d=\"M32.5,46.062L32.5,58.351\" style=\"fill:none;stroke:#000;stroke-width:5.42px;\"/>\n    <path d=\"M39.076,12.426C39.076,8.797 36.129,5.851 32.5,5.851C28.871,5.851 25.924,8.797 25.924,12.426L25.924,30.793C25.924,34.422 28.871,37.368 32.5,37.368C36.129,37.368 39.076,34.422 39.076,30.793L39.076,12.426Z\" style=\"stroke:#000;stroke-width:5.42px;\"/>\n</svg>\n"};
var iconWall = {"selector":".icon-wall","svg":"<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 65 65\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;\">\n    <g>\n        <rect class=\"top-left\" x=\"-1.274\" y=\"2.983\" width=\"32.5\" height=\"18\"/>\n        <rect class=\"top-right\" x=\"33.774\" y=\"2.983\" width=\"32.5\" height=\"18\"/>\n        <rect class=\"bottom-left\" x=\"-1.274\" y=\"43.96\" width=\"32.5\" height=\"18\"/>\n        <rect class=\"bottom-right\" x=\"33.774\" y=\"43.96\" width=\"32.5\" height=\"18\"/>\n        <rect class=\"left\" x=\"-1.274\" y=\"23.5\" width=\"15.074\" height=\"18\"/>\n        <rect class=\"right\" x=\"51.213\" y=\"23.5\" width=\"15.074\" height=\"18\"/>\n        <rect class=\"center\" x=\"16.25\" y=\"23.5\" width=\"32.5\" height=\"18\"/>\n    </g>\n</svg>\n"};
var iconWrench = {"selector":".icon-wrench","svg":"<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 64 64\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;\">\n    <path class=\"wrench\" d=\"M38.017,19.362C37.493,18.125 37.203,16.765 37.203,15.338C37.203,9.636 41.832,5.006 47.534,5.006C48.278,5.006 49.003,5.085 49.702,5.235L44.72,10.216C42.53,12.406 42.53,15.962 44.72,18.152C46.91,20.342 50.466,20.342 52.656,18.152L57.637,13.17C57.787,13.869 57.866,14.594 57.866,15.338C57.866,21.04 53.236,25.669 47.534,25.669C46.107,25.669 44.747,25.379 43.51,24.855L23.714,44.651C24.238,45.888 24.528,47.248 24.528,48.675C24.528,54.377 19.899,59.006 14.197,59.006C13.454,59.006 12.729,58.928 12.03,58.778L17.011,53.797C19.201,51.607 19.201,48.051 17.011,45.861C14.821,43.671 11.265,43.671 9.075,45.861L4.094,50.842C3.944,50.143 3.866,49.418 3.866,48.675C3.866,42.973 8.495,38.344 14.197,38.344C15.624,38.344 16.984,38.634 18.221,39.158L38.017,19.362Z\" style=\"stroke:#000;stroke-width:1px;\"/>\n</svg>\n"};
```
