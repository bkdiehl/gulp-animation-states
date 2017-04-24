{
	transitionTime: 500,
	easing: 'elastic',
	states: {
		shrink:[	
			{ id: 'circle-set', element: ".circle", attr: { r:29 }, transitionTime:0 },	
			{ id: "scale-down", element: ".globe", s:[.75, .75] }
		],
		grow: [
			{ id: "scale-up", element: ".globe", s:[1, 1] },	
			{ id: 'circle-grow', element: ".circle", attr: { r:32 } },	
			{ waitFor: 'circle-grow', element: ".circle", attr: { r:29 } },	
		]
	},
	events: [
		{ event: "mouseenter", state: "shrink", selector: '.icon-globe-animate' },
		{ event: "mouseleave", state: "grow", selector: '.icon-globe-animate' }
	]
}