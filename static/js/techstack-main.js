// Based loosely from this D3 bubble graph https://bl.ocks.org/mbostock/4063269
// And this Forced directed diagram https://bl.ocks.org/mbostock/4062045
/*eslint-disable indent*/
let data = [{
	cat: 'library', name: 'D3', value: 30,
	icon: 'static/js/tech-stack/img/d3.svg',
	desc: `
		D3.js (or just D3 for Data-Driven Documents) is a JavaScript library for
		producing dynamic, interactive data visualizations in web browsers.
		It makes use of the widely implemented SVG, HTML5, and CSS standards.<br>
		This infographic you are viewing is made with D3.
	`
}, {
	cat: 'library', name: 'RaphaÃ«l', value: 10,
	icon: 'js/tech-stack/img/raphael.svg',
	desc: `
		RaphaÃ«l is a cross-browser JavaScript library that draws Vector graphics for web sites.
		It will use SVG for most browsers, but will use VML for older versions of Internet Explorer.
	`
}, {
	cat: 'library', name: 'Relay', value: 70,
	icon: 'static/js/tech-stack/img/relay.svg',
	desc: `
		A JavaScript framework for building data-driven React applications.
		It uses GraphQL as the query language to exchange data between app and server efficiently.
		Queries live next to the views that rely on them, so you can easily reason
		about your app. Relay aggregates queries into efficient network requests to fetch only what you need.
	`
}, {
	cat: 'library', name: 'Three.js', value: 40,
	icon: 'static/js/tech-stack/img/threejs.png',
	desc: `
		Three.js allows the creation of GPU-accelerated 3D animations using
		the JavaScript language as part of a website without relying on
		proprietary browser plugins. This is possible thanks to the advent of WebGL.
	`
}, {
	cat: 'library sub', name: 'Lodash', value: 30,
	icon: 'static/js/tech-stack/img/lodash.svg',
	desc: `
		Lodash is a JavaScript library which provides <strong>utility functions</strong> for
		common programming tasks using the functional programming paradigm.`
}, {
	cat: 'library sub', name: 'Moment JS', value: 30,
	icon: 'static/js/tech-stack/img/momentjs.png',
	desc: `
		Handy and resourceful JavaScript library to parse, validate, manipulate, and display dates and times.
	`
}, {
	cat: 'library sub', name: 'Numeral.js', value: 20,
	icon: 'static/js/tech-stack/Numeral.js',
	desc: `
		A javascript library for formatting and manipulating numbers.
	`
}, {
	cat: 'library sub', name: 'Redux', value: 80,
	icon: 'static/js/tech-stack/img/redux.svg',
	desc: `
		Redux is an open-source JavaScript library designed for managing
		application state. It is primarily used together with React for building user interfaces.
		Redux is inspired by Facebookâ€™s Flux and influenced by functional programming language Elm.
	`
}, {
	cat: 'framework', name: 'Angular 2.0', value: 30,
	icon: 'static/js/tech-stack/img/angular2.svg',
	desc: `
		Angular (commonly referred to as 'Angular 2+' or 'Angular 2') is a TypeScript-based
		open-source front-end web application platform led by the Angular Team at Google and
		by a community of individuals and corporations to address all of the parts of the
		developer's workflow while building complex web applications.
	`
}, /*{
	cat: 'framework', name: 'Trails.JS', value: 10,
	icon: '',
},*/
{
	cat: 'framework', name: 'Bootstrap CSS', value: 50,
	icon: 'static/js/tech-stack/img/bootstrap.svg',
	desc: `
		Bootstrap is a free and open-source front-end web framework for designing websites
		and web applications. It contains HTML-and CSS-based design templates for typography,
		forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.
	`
	}, {
		cat: 'framework', name: 'Ember JS', value: 10,
		icon: 'static/js/tech-stack/img/ember.png',
		desc: `
		Ember.js is an open-source JavaScript web framework, based on the Modelâ€“viewâ€“viewmodel
		(MVVM) pattern. It allows developers to create scalable single-page web applications by
		incorporating common idioms and best practices into the framework.
	`
	}, {
		cat: 'framework', name: 'ExpressJS', value: 30,
		icon: 'static/js/tech-stack/img/expressjs.png',
		desc: `
		Express.js, or simply Express, is a JavaScript framework designed for building web applications and APIs.
		It is the de facto server framework for Node.js.
	`
	}, /*{
	cat: 'framework', name: 'Foundation', value: 10,
	icon: '',
},*/										{
		cat: 'framework', name: 'Hexo', value: 50,
		icon: 'static/js/tech-stack/img/hexo.png',
		desc: `
		A fast, simple & powerful blog-aware <strong>static website</strong> generator, powered by Node.js.
	`
	}, {
		cat: 'framework', name: 'ReactJS', value: 100,
		icon: 'static/js/tech-stack/img/react.png',
		desc: `
		React (sometimes written React.js or ReactJS) is an open-source JavaScript framework maintained by Facebook for building user interfaces.
		React processes only user interface in applications and can be used in combination with other JavaScript libraries
		or frameworks such as Redux, Flux, Backbone...
	`
	}, /*{
	cat: 'framework', name: 'SenchaTouch', value: 10,
	icon: '',
},*/ 										{
		cat: 'tooling', name: 'Atom', value: 10,
		icon: 'static/js/tech-stack/img/atom.png',
		desc: `
		Atom is a free and open-source text and source code editor for macOS, Linux, and Windows with support
		for plug-ins written in Node.js, and embedded Git Control, developed by GitHub.
		Atom is a desktop application built using web technologies.
	`
	}, {
		cat: 'tooling', name: 'Google Chrome & Devtool', value: 70,
		icon: 'static/js/tech-stack/img/chrome-devtools.svg',
		desc: `
		<strong>Web development tools (devtool)</strong> allow web developers to test and debug their code.
		At Nau, we use the one come with Google Chrome to debug our apps. It is one the the most powerful
		and sophisticated devtool available.
	`
	}, {
		cat: 'tooling', name: 'Jenkins CI', value: 30,
		icon: 'static/js/tech-stack/img/jenkins.png',
		desc: `
		Jenkins is an open source automation server. Jenkins helps to automate the non-human part of
		the whole software development process, with now common things like continuous integration,
		but by further empowering teams to implement the technical part of a Continuous Delivery.
	`
	}, {
		cat: 'tooling', name: 'Sublime Text 3', value: 100,
		icon: 'static/js/tech-stack/img/sublimetext.png',
		desc: `
		Sublime Text 3 is a powerful and cross-platform source code editor. It is well-known for
		introducing the concept of multi-cursor and lots of text editing command. Besides, its
		plugin ecosystem is very rich which allows enhancing productivity to the fullest.
	`

	}, {
	cat: 'backend', name: 'MongoDB', value: 70,
	icon: 'static/js/tech-stack/img/mongodb.png',
	desc: `
		The de-facto Database solution for JavaScript and Node.js applications. It is a light weight,
		high performance NoSQL database and can be used for small and large websites.
	`
}, {
	cat: 'backend', name: 'NodeJS', value: 100,
	icon: 'static/js/tech-stack/img/nodejs.svg',
	desc: `
		Node.js is a cross-platform JavaScript runtime environment.
		Node.js allows creation of high performance and high concurrency websites with smaller footprint compared to
		other server-side solution. Node.js ecosystem is growing very fast and is trusted by a lot of big companies who
		are adopting it to enhance current products as well as for new ones.
	`
}, {
	cat: 'platform', name: 'Docker Platform', value: 10,
	icon: 'static/js/tech-stack/img/docker.svg',
	desc: `
		Docker is an open-source project that automates the deployment of applications inside software containers.
		At Nau, we're still learning this technology to later facilitate easy web app deployments.
	`
}, {
	cat: 'platform', name: 'MeteorJS', value: 80,
	icon: 'static/js/tech-stack/img/meteor.svg',
	desc: `
		MeteorJS is a free and open-source JavaScript web framework written using Node.js.
		Meteor allows for rapid prototyping and produces cross-platform (Android, iOS, Web) code.
		It integrates with MongoDB and uses the Distributed Data Protocol and a publishâ€“subscribe
		pattern to automatically propagate data changes to clients without requiring the developer
		to write any synchronization code.
	`
}, {
	cat: 'platform', name: 'Phonegap', value: 50,
	icon: 'static/js/tech-stack/img/phonegap.png',
	desc: `
		A platform, library and tool for building hybrid mobile app.
	`
}, {
	cat: 'platform', name: 'SquareSpace', value: 30,
	icon: 'static/js/tech-stack/img/squarespace.svg',
	desc: `
		Squarespace is a SaaS-based content management system-integrated ecommerce-aware website builder and blogging platform.
		At Nau, we have built a website for Squarespace using their low-level API which allowed fully customization
		of the interface and other Front End functionalities.
	`
}, {
	cat: 'language', name: 'HTML5 & CSS3', value: 100,
	icon: 'static/js/tech-stack/img/html5-css3.png',
	desc: `
		The languages of the Web Front End. At Nau, they are in our blood and with them we can build
		world-class websites with any kind of visual effects or designs requested.
	`
}, {
	cat: 'language', name: 'JavaScript', value: 100,
	icon: 'static/js/tech-stack/img/javascript.png',
	desc: `
		JavaScript is the heart of modern Web front end development and essential element of any Single Page
		Applications. In Nau, we invest a good deal in training developers to have good control of this universal language
		and now caplable of developing full stack websites with only JavaScript.
	`
}, {
	cat: 'language', name: 'CSS Next', value: 10,
	icon: 'static/js/tech-stack/img/cssnext.png',
	desc: `
		The CSS language specs of the future but with the help of PostCSS (like Babel for ES6),
		we can use CSS Next today.
	`
}, /*{
	cat: 'workflow', name: 'Browserify', value: 10,
	icon: '',
},*/ 										{
		cat: 'workflow', name: 'CSS BEM Notation', value: 70,
		icon: 'CSS BEM Notation',
		desc: `
		Our naming standard for CSS, which enhance collaboration, documentation and reusability of
		CSS rules.
	`
	}
}];
/*eslint-enable indent*/
/*global d3*/
let svg = d3.select('#teck-stack-svg');
let width = svg.property('clientWidth'); // get width in pixels
let height = +svg.attr('height');
let centerX = width * 0.5;
let centerY = height * 0.5;
let strength = 0.05;
let focusedNode;
console.log('width', width);

let format = d3.format(',d');

let scaleColor = d3.scaleOrdinal(d3.schemeCategory20);

// use pack to calculate radius of the circle
let pack = d3.pack()
	.size([width, height ])
	.padding(1.5);

let forceCollide = d3.forceCollide(d => d.r + 1);

// use the force
let simulation = d3.forceSimulation()
	// .force('link', d3.forceLink().id(d => d.id))
	.force('charge', d3.forceManyBody())
	.force('collide', forceCollide)
	// .force('center', d3.forceCenter(centerX, centerY))
	.force('x', d3.forceX(centerX ).strength(strength))
	.force('y', d3.forceY(centerY ).strength(strength));

// reduce number of circles on mobile screen due to slow computation
if ('matchMedia' in window && window.matchMedia('(max-device-width: 767px)').matches) {
	data = data.filter(el => {
		return el.value >= 50;
	});
}

let root = d3.hierarchy({ children: data })
	.sum(d => d.value);

// we use pack() to automatically calculate radius conveniently only
// and get only the leaves
let nodes = pack(root).leaves().map(node => {
	// console.log('node:', node.x, (node.x - centerX) * 2);
	const data = node.data;
	return {
		x: centerX + (node.x - centerX) * 3, // magnify start position to have transition to center movement
		y: centerY + (node.y - centerY) * 3,
		r: 0, // for tweening
		radius: node.r, //original radius
		id: data.cat + '.' + (data.name.replace(/\s/g, '-')),
		cat: data.cat,
		name: data.name,
		value: data.value,
		icon: data.icon,
		desc: data.desc,
	};
});
simulation.nodes(nodes).on('tick', ticked);

svg.style('background-color', '#eee');
let node = svg.selectAll('.node')
	.data(nodes)
	.enter().append('g')
	.attr('class', 'node')
	.call(d3.drag()
		.on('start', (d) => {
			if (!d3.event.active) { simulation.alphaTarget(0.2).restart(); }
			d.fx = d.x;
			d.fy = d.y;
		})
		.on('drag', (d) => {
			d.fx = d3.event.x;
			d.fy = d3.event.y;
		})
		.on('end', (d) => {
			if (!d3.event.active) { simulation.alphaTarget(0); }
			d.fx = null;
			d.fy = null;
		}));

node.append('circle')
	.attr('id', d => d.id)
	.attr('r', 0)
	.style('fill', d => scaleColor(d.cat))
	.transition().duration(2000).ease(d3.easeElasticOut)
		.tween('circleIn', (d) => {
			let i = d3.interpolateNumber(0, d.radius);
			return (t) => {
				d.r = i(t);
				simulation.force('collide', forceCollide);
			};
		});

node.append('clipPath')
	.attr('id', d => `clip-${d.id}`)
	.append('use')
	.attr('xlink:href', d => `#${d.id}`);

// display text as circle icon
node.filter(d => !String(d.icon).includes('img/'))
	.append('text')
	.classed('node-icon', true)
	.attr('clip-path', d => `url(#clip-${d.id})`)
	.selectAll('tspan')
	.data(d => d.icon.split(';'))
	.enter()
		.append('tspan')
		.attr('x', 0)
		.attr('y', (d, i, nodes) => (13 + (i - nodes.length / 2 - 0.5) * 10))
		.text(name => name);

// display image as circle icon
node.filter(d => String(d.icon).includes('img/'))
	.append('image')
	.classed('node-icon', true)
	.attr('clip-path', d => `url(#clip-${d.id})`)
	.attr('xlink:href', d => d.icon)
	.attr('x', d => -d.radius * 0.7)
	.attr('y', d => -d.radius * 0.7)
	.attr('height', d => d.radius * 2 * 0.7)
	.attr('width', d => d.radius * 2 * 0.7);

node.append('title')
	.text(d => (d.cat + '::' + d.name + '\n' + format(d.value)));

let legendOrdinal = d3.legendColor()
	.scale(scaleColor)
	.shape('circle');

// legend 1
svg.append('g')
	.classed('legend-color', true)
	.attr('text-anchor', 'start')
	.attr('transform', 'translate(20,30)')
	.style('font-size', '12px')
	.call(legendOrdinal);

let sizeScale = d3.scaleOrdinal()
	.domain(['less use', 'more use'])
	.range([5, 10] );

let legendSize = d3.legendSize()
	.scale(sizeScale)
	.shape('circle')
	.shapePadding(10)
	.labelAlign('end');

// legend 2
svg.append('g')
	.classed('legend-size', true)
	.attr('text-anchor', 'start')
	.attr('transform', 'translate(150, 25)')
	.style('font-size', '12px')
	.call(legendSize);


/*
<foreignObject class="circle-overlay" x="10" y="10" width="100" height="150">
	<div class="circle-overlay__inner">
		<h2 class="circle-overlay__title">ReactJS</h2>
		<p class="circle-overlay__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, sunt, aspernatur. Autem repudiandae, laboriosam. Nulla quidem nihil aperiam dolorem repellendus pariatur, quaerat sed eligendi inventore ipsa natus fugiat soluta doloremque!</p>
	</div>
</foreignObject>
*/
let infoBox = node.append('foreignObject')
	.classed('circle-overlay hidden', true)
	.attr('x', -350 * 0.5 * 0.8)
	.attr('y', -350 * 0.5 * 0.8)
	.attr('height', 350 * 0.8)
	.attr('width', 350 * 0.8)
		.append('xhtml:div')
		.classed('circle-overlay__inner', true);

infoBox.append('h2')
	.classed('circle-overlay__title', true)
	.text(d => d.name);

infoBox.append('p')
	.classed('circle-overlay__body', true)
	.html(d => d.desc);


node.on('click', (currentNode) => {
	d3.event.stopPropagation();
	console.log('currentNode', currentNode);
	let currentTarget = d3.event.currentTarget; // the <g> el

	if (currentNode === focusedNode) {
		// no focusedNode or same focused node is clicked
		return;
	}
	let lastNode = focusedNode;
	focusedNode = currentNode;

	simulation.alphaTarget(0.2).restart();
	// hide all circle-overlay
	d3.selectAll('.circle-overlay').classed('hidden', true);
	d3.selectAll('.node-icon').classed('node-icon--faded', false);

	// don't fix last node to center anymore
	if (lastNode) {
		lastNode.fx = null;
		lastNode.fy = null;
		node.filter((d, i) => i === lastNode.index)
			.transition().duration(2000).ease(d3.easePolyOut)
			.tween('circleOut', () => {
				let irl = d3.interpolateNumber(lastNode.r, lastNode.radius);
				return (t) => {
					lastNode.r = irl(t);
				};
			})
			.on('interrupt', () => {
				lastNode.r = lastNode.radius;
			});
	}

	// if (!d3.event.active) simulation.alphaTarget(0.5).restart();

	d3.transition().duration(2000).ease(d3.easePolyOut)
		.tween('moveIn', () => {
			console.log('tweenMoveIn', currentNode);
			let ix = d3.interpolateNumber(currentNode.x, centerX);
			let iy = d3.interpolateNumber(currentNode.y, centerY);
			let ir = d3.interpolateNumber(currentNode.r, centerY * 0.5);
			return function (t) {
				// console.log('i', ix(t), iy(t));
				currentNode.fx = ix(t);
				currentNode.fy = iy(t);
				currentNode.r = ir(t);
				simulation.force('collide', forceCollide);
			};
		})
		.on('end', () => {
			simulation.alphaTarget(0);
			let $currentGroup = d3.select(currentTarget);
			$currentGroup.select('.circle-overlay')
				.classed('hidden', false);
			$currentGroup.select('.node-icon')
				.classed('node-icon--faded', true);

		})
		.on('interrupt', () => {
			console.log('move interrupt', currentNode);
			currentNode.fx = null;
			currentNode.fy = null;
			simulation.alphaTarget(0);
		});

});

// blur
d3.select(document).on('click', () => {
	let target = d3.event.target;
	// check if click on document but not on the circle overlay
	if (!target.closest('#circle-overlay') && focusedNode) {
		focusedNode.fx = null;
		focusedNode.fy = null;
		simulation.alphaTarget(0.2).restart();
		d3.transition().duration(2000).ease(d3.easePolyOut)
			.tween('moveOut', function () {
				console.log('tweenMoveOut', focusedNode);
				let ir = d3.interpolateNumber(focusedNode.r, focusedNode.radius);
				return function (t) {
					focusedNode.r = ir(t);
					simulation.force('collide', forceCollide);
				};
			})
			.on('end', () => {
				focusedNode = null;
				simulation.alphaTarget(0);
			})
			.on('interrupt', () => {
				simulation.alphaTarget(0);
			});

		// hide all circle-overlay
		d3.selectAll('.circle-overlay').classed('hidden', true);
		d3.selectAll('.node-icon').classed('node-icon--faded', false);
	}
});

function ticked() {
	node
		.attr('transform', d => `translate(${d.x},${d.y})`)
		.select('circle')
			.attr('r', d => d.r);
}