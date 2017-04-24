{
	transitionTime:400,
	easing:"linear",
	states: {
		draw: [
			{ id: "draw", element: ".checkmark", drawPath:100 },
		],
		hide: [
			{ id:"hide", element: ".checkmark", drawPath:0, transitionTime:0 },
		]
	},
	events: [
		{ event:'click', state: ["draw", "hide"], selector: '.checkbox-selector' }
	]
}