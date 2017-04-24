{
	transitionTime: 1500,
	easing: "linear",
	states: {
		start:[
			{ id: ["init", 500], element: ".square", x:260, repeat: { loop: true } },
			{ waitFor: ["init", 500], element: ".square", x:0 }
		],
	},
	initState: 'start'
}