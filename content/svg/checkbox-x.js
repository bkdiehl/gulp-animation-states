{
	transitionTime:400,
	easing:"linear",
	states: {
		draw: [
			{ id: "draw1", element: ".line_1", drawPath:100 },
			{ id: ["draw2", 200], element: ".line_2", drawPath:100 }
		],
		hide: [
			{ id:"hide1", element: ".line_1", drawPath:0, transitionTime:0 },
			{ id:"hide2", element: ".line_2", drawPath:0, transitionTime:0 }
		]
	},
	events: [
		{ event:'click', state: ["draw", "hide"], selector: '.checkbox-selector' }
	]
}