{
	transitionTime:350,
	easing:"easeinout",
	states: {
		recycle: [
			{ id: "open-bin", element: ".recycling-bin-lid", x:-4, y:-5, r:-24 },
			{ id:"throw-garbage", element: ".recycling-bin-garbage", waitFor: "open-bin", x:-50, y:25, r:360, transitionTime:600 },
			{ id:"close-lid", element: ".recycling-bin-lid", waitFor: "throw-garbage", x:0, y:0, r:0 },
			{ id:"retrieve-garbage", element: ".recycling-bin-garbage", waitFor: "throw-garbage", x:0, y:0, r:0, transitionTime:0 },
		]
	},
	events: [
		{ event: 'click', state: "recycle" }
	]
}