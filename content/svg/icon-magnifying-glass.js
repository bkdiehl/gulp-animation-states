{
	transitionTime:500,
	states: {
		zoomIn: [
			{ id: "vertical-line-in", element:'.vertical', r:270 },
			{ id: "horizontal-line-in", element:'.horizontal', r:-180 }
		],
		zoomOut: [
			{ id: "vertical-line-out", element:'.vertical', r:0 },
			{ id: "horizontal-line-out", element:'.horizontal', r:0 }
		],
	},
	events: [
		{ event: 'click', state: ["zoomIn", "zoomOut"] }
	]
}