{
	transitionTime: 400,
	states: {
		showMore: [	
			//1
			{ id: "transform-s-in", element: ".share-icon-main", x:11, s:.5 },

			//2
			{ waitFor:"transform-s-in", element: ".left", drawPath:100 },
			{ waitFor:"transform-s-in", element: ".center-circle", attr: { r: 11 }, transitionTime: 1500 },
			{ waitFor:'transform-s-in', element: ".bottom-line", drawPath:100 },
			{ waitFor:'transform-s-in', element: ".top-line", drawPath:100 },
			{ waitFor:"transform-s-in", element: ".right-upper-circle", s:.7, x:2, y:-1 },

			//3
			{ id:["right-upper-branch", 600], element: ".right-upper-branch", drawPath:100  },
			{ id:["left-upper-circle", 600], element: ".left-upper-circle", s:1, attr: { opacity:1 }  },
			{ id:["left-lower-circle", 600], element: ".left-lower-circle", s:1, attr: { opacity:1 }  },		
			{ id:["right-upper-branch-circle", 600], element: ".right-upper-branch-circle", s:1, attr: { opacity:1 }  },
		],
		showLess: [
			//1
			{ id:"left-upper-circle-hide", element: ".left-upper-circle", s:0, attr: { opacity:0 }  },
			{ id:"left-lower-circle-hide", element: ".left-lower-circle", s:0, attr: { opacity:0 }  },		
			{ id:"right-upper-branch-circle-hide", element: ".right-upper-branch-circle", s:0, attr: { opacity:0 }  },
			{ id:"right-upper-branch-hide", element: ".right-upper-branch", drawPath:0  },
			{ id:"left-hide", element: ".left", drawPath:0 },
			{ id:"center-circle-hide", element: ".center-circle", attr: { r: 7 } },
			{ id:'bottom-line-hide', element: ".bottom-line", drawPath:0 },
			{ id:'top-line-hide', element: ".top-line", drawPath:0 },
			{ id:"right-upper-circle-hide", element: ".right-upper-circle", s:1, x:0, y:0 },

			//2
			{ waitFor:"left-hide", element: ".share-icon-main", x:0, s:1 },
		]
	},
	events: [
		{ event: 'mouseenter', state: "showMore" },
		{ event: 'mouseleave', state: "showLess" }
	]
}