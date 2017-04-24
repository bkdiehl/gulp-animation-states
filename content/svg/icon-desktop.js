{
	easing: "linear",
	states: {
		flicker:[
			{ id: "init", element: ".line", path: "M7.992,27.043L57.008,27.043", attr: { opacity:0 }, transitionTime:0 },
			{ id: "fade-in", waitFor:'init', element: ".line", attr: { opacity:1 }, transitionTime:100 },
			{ id: "transform", waitFor:'fade-in', element: ".line", path:"M7.992,27.046L10,27.046L16.125,29.849L22.25,21.849L28.375,36.849L34.5,27.046L57.008,27.046", transitionTime:250 },
			{ id: "move", waitFor:'transform', element: ".line", path:"M7.992,27.046L26.451,27.046L32.576,29.849L38.701,21.849L44.826,36.849L50.951,27.046L57.008,27.046", transitionTime:400 },
			{ waitFor:'move', element: ".line", attr: {opacity:0}, transitionTime:100 },
		]		
	},
	events: [
		{ event: 'mouseenter', state: "flicker" }
	]
}