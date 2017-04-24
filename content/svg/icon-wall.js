{
	transitionTime:500,
	easing: 'elastic',
	states: {
		close: [
			{ id: 'top-left-in', element: ".top-left", x: 5, y: 5 },
			{ id: 'top-right-in', element: ".top-right", x: -5, y: 5 },
			{ id: 'bottom-left-in', element: ".bottom-left", x: 5, y: -5 },
			{ id: 'bottom-right-in', element: ".bottom-right", x: -5, y: -5 },
			{ id: 'left-in', element: ".left", x: 5 },
			{ id: 'right-in', element: ".right", x: -5 },
		],
		open: [
			{ id: 'top-left-out', element: ".top-left", x: 0, y: 0 },
			{ id: 'top-right-out', element: ".top-right", x: 0, y: 0 },
			{ id: 'bottom-left-out', element: ".bottom-left", x: 0, y: 0 },
			{ id: 'bottom-right-out', element: ".bottom-right", x: 0, y: 0 },
			{ id: 'left-out', element: ".left", x: 0 },
			{ id: 'right-out', element: ".right", x: 0 },
		]
	},
	events: [
		{ event: 'mouseenter', state: "close" },
		{ event: 'mouseleave', state: "open" },
	]
}