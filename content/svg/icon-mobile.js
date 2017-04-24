{
	easing:'bounce',
	transitionTime:500,
	states: {
		showContent: [
			{ id: 'init1', element: ".content1", y: 0, attr: { height:6.8, opacity:1 }, transitionTime:0 },	
			{ waitFor: 'init1', element: ".content1", y:37 },	
			{ id: "grow1", waitFor: 'init1', element: ".content1", attr: { height: 10 } },
			
			{ id: 'init2', element: ".content2", y: 0, attr: { height:6.8, opacity:1 }, transitionTime:0 },	
			{ waitFor: 'grow1', element: ".content2", y:24, },	
			{ id: "grow2", waitFor: 'grow1', element: ".content2", attr: { height: 10 } },

			{ id: 'init3', element: ".content3", y: 0, attr: { height:6.8, opacity:1 }, transitionTime:0 },	
			{ waitFor: 'grow2', element: ".content3", y:11 },	
			{ id: "grow3", waitFor: 'grow2', element: ".content3", attr: { height: 10 } },

			{ waitFor: ["grow3", 250], element: ".content1", attr: { opacity:0 }, transitionTime:500, easing: 'linear' },
			{ waitFor: ["grow3", 250], element: ".content2",attr: { opacity:0 }, transitionTime:500, easing: 'linear' },
			{ waitFor: ["grow3", 250], element: ".content3",attr: { opacity:0 }, transitionTime:500, easing: 'linear' }
		]
	},
	events: [
		{ event: 'mouseenter', state: "showContent" }
	]
}