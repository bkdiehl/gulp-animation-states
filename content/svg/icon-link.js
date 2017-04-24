{
	states: {
		animateLinks: [
			{ id: "top-contract", element: ".top-link", x:-3.5, y:3.5, transitionTime:250, easing: "easein", repeat:{ times: 2, delay: 200 } },
			{ id: "middle-twist", element: ".middle-link", r: 8, transitionTime:250, easing: "easein", repeat:{ times: 2, delay: 200 } },
			{ id: "bottom-contract", element: ".bottom-link", x:3.5, y:-3.5, transitionTime:250, easing: "easein", repeat:{ times: 2, delay: 200 } },
			{ waitFor: "top-contract", element: ".top-link", x:0, y:0, transitionTime:50, easing: "bounce" },
			{ waitFor: "middle-twist", element: ".middle-link", r:0, transitionTime:50, easing: "bounce" },
			{ waitFor: "bottom-contract", element: ".bottom-link", x:0, y:0, transitionTime:50, easing: "bounce" },
		],
	},
	events: [
		{ event: 'mouseenter', state: "animateLinks" }
	]
}