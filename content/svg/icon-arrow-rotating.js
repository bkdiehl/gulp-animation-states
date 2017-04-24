{
	transitionTime: 500,
	easing: "linear",
	states: {
		spin:[
			{ id: "spin-init", element: ".arrow-group", r:180, s:.75, repeat: { times: 1 } },
			{ id: "spin-after", waitFor:'spin-init', element: ".arrow-group", r:360, s:1 },
			{ waitFor: "spin-after", element: ".arrow-group", r: 0, transitionTime: 0 }
		]		
	},
	events: [
		{ event: 'click', state: "spin" }
	]
}