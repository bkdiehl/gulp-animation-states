{
	transitionTime: 500,
	easing: "linear",
	states: {
		open:[
			{ id: "fold-up", element: ".flap", y:-17.5, s:[1, -1] },
		],
		close:[
			{ id: "fold-down", element: ".flap", y:0, s:[1, 1] },
		]		
	},
	events: [
		{ event: 'click', state: ["open", "close"] }
	]
}