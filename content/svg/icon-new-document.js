{
	states: {
		draw: [
			{ id: 'line1-init', element: ".new-document-line1", drawPath: { min: 25, max: 75 }, transitionTime: { min: 500, max: 1000 }, repeat: {times:1} },	
			{ id: 'line2-init', element: ".new-document-line2", drawPath: { min: 25, max: 75 }, transitionTime: { min: 500, max: 1000 }, repeat: {times:1} },
			{ id: 'line3-init', element: ".new-document-line3", drawPath: { min: 25, max: 75 }, transitionTime: { min: 500, max: 1000 }, repeat: {times:1} },
			{ id: 'line4-init', element: ".new-document-line4", drawPath: { min: 25, max: 75 }, transitionTime: { min: 500, max: 1000 }, repeat: {times:1} },
			{ id: 'line5-init', element: ".new-document-line5", drawPath: { min: 25, max: 75 }, transitionTime: { min: 500, max: 1000 }, repeat: {times:1} },
			{ waitFor: 'line1-init', element: ".new-document-line1", drawPath: 100, transitionTime: { min: 500, max: 1000 } },
			{ waitFor: 'line2-init', element: ".new-document-line2", drawPath: 100, transitionTime: { min: 500, max: 1000 } },
			{ waitFor: 'line3-init', element: ".new-document-line3", drawPath: 100, transitionTime: { min: 500, max: 1000 } },
			{ waitFor: 'line4-init', element: ".new-document-line4", drawPath: 100, transitionTime: { min: 500, max: 1000 } },
			{ waitFor: 'line5-init', element: ".new-document-line5", drawPath: 100, transitionTime: { min: 500, max: 1000 } },
		]
	},
	events: [
		{ event: 'mouseenter', state: "draw" }
	]
}