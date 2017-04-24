{
	svg: '<svg width="100%" height="100%" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.5;"><path class="clasp" d="M45.045,42.402L45.045,24.409C45.045,16.873 39.197,10.755 31.995,10.755C24.792,10.755 18.945,16.873 18.945,24.409L18.945,33.817" style="fill:none;stroke:#000;stroke-width:4.5px;"/><path d="M51.113,44.882C50.937,54.8 42.447,62.788 32,62.788C21.552,62.788 13.063,54.8 12.887,44.882L12.884,44.882L12.884,34.276C12.884,33.245 13.719,32.41 14.749,32.41L49.251,32.41C50.281,32.41 51.116,33.245 51.116,34.276L51.116,44.567L51.116,44.567C51.116,44.607 51.116,44.647 51.116,44.686L51.116,44.882L51.113,44.882ZM34,48.606C35.485,47.869 36.505,46.337 36.505,44.567C36.505,42.08 34.488,40.062 32,40.062C29.512,40.062 27.495,42.08 27.495,44.567C27.495,46.337 28.515,47.869 30,48.606L30,52.794L34,52.794L34,48.606Z" style="stroke:#000;stroke-width:1.25px;stroke-linejoin:miter;stroke-miterlimit:10;"/></svg>',
	transitionTime:250,
	states: {
		locked:[
			{ id: 'locked', element: '.clasp', y:0 }
		],
		unlocked:[
			{ id: 'unlocked', element: '.clasp', y:-7 }
		]
	},
	events: [
		{ event: 'click', state: ["locked", "unlocked"] }
	],
	initState:'unlocked'
}