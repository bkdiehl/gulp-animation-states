{
	easing: "linear",
	states:{
		mute:[
			{ id: "waveline1", element: ".wave-line-1", x:-10, s:0.1, attr:{ opacity:.8 }, transitionTime: 250 },
			{ id: "waveline2", element: ".wave-line-2", x:-16, s:0.1, attr:{ opacity:.8 }, transitionTime: 300 },
			{ id: "waveline3", element: ".wave-line-3", x:-22, s:0.1, attr:{ opacity:.8 }, transitionTime: 350 },
		],
		unmute: [
			{ id: "waveline1", element: ".wave-line-1", x:0, s:1, attr:{ opacity:1 }, transitionTime: 350 },
			{ id: "waveline2", element: ".wave-line-2", x:0, s:1, attr:{ opacity:1 }, transitionTime: 300 },
			{ id: "waveline3", element: ".wave-line-3", x:0, s:1, attr:{ opacity:1 }, transitionTime: 250 },
		]
	},
	events: [
		{ event: 'click', state: ["mute", "unmute"] }
	]
}