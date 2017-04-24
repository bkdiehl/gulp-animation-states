{
	transitionTime:500,
	initState: 'open',
	states: {
		open: [
			{ id: 'outline-open', element: '.cover', path: "M3.5,51.5L54.5,51.5L62.415,24.29L31.915,24.255L23.915,29.49L11.415,29.49L3.5,51.5" },
		],
		closed: [
			{ id: 'outline-close', element: '.cover', path: "M3.5,51.5L54.5,51.5L54.5,17.8L24,17.765L16,23L3.5,23L3.5,51.5" },
		],
		hover: [
			{ id: "bounce-up", element: ".folder", y: -2, transitionTime: 100, repeat: { times:1 } },
			{ id:"bounce-side", waitFor: "bounce-up", element: ".folder", y:0, transitionTime: 100 },
		]
	},
	events: [
		{ event: "click", state: ['closed', 'open'] },
		{ event: "mouseenter", state: 'hover' },
	]
}