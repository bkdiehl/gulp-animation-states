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