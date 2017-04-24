{
	easing: "easeinout",
	transitionTime:100,
	states: {
		shake: [
			{ id: "shake-right", element: '.wrench', r: 10 },
			{ id: "shake-left", waitFor: 'shake-right', element: '.wrench', r: -10 },
			{ id: "back-to-right", waitFor: 'shake-left', element: '.wrench', r: 10 },
			{ id: "back-to-left", waitFor: 'back-to-right', element: '.wrench', r: -10 },
			{ waitFor: 'back-to-left', element: '.wrench', r: 0 }
		]
	},
	events: [
		{ event: 'mouseenter', state: "shake" }
	]
}