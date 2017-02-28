import View from '../lib/view';

export const Explanation = new View({
	template: `
		<div class="box">
			<div>
				<h2>About this project</h2>
				<p class="error">This project doesn’t aim to be run in production. It’s not optimized at all.</p>
				<p>It’s a really simple approach to create a front end framework using the awesomeness of open sources projects and APIs.</p>
				<p>It’s based on knowledge provided by the community, and many frameworks such as Vuejs, React, Angular 1 & 2, Cyclejs, and many others...</p>
				<h3>What’s inside ?</h3>
				<ul>
					<li><a target="_blank" href="https://facebook.github.io/react/docs/state-and-lifecycle.html">Change detection using <code>setState</code></a></li>
					<li><a target="_blank" href="https://vuejs.org/v2/guide/events.html">Syntaxes like <code>@click</code>, <code>@change</code> and the notion of <code>:model</code></a></li>
					<li><a target="_blank" href="https://facebook.github.io/react/docs/components-and-props.html">Props passing</a></li>
					<li><a target="_blank" href="https://docs.angularjs.org/api/ng/service/$interpolate">Syntax interpolation using <code>{\r{toInterpolate}\r}</code></a></li>
					<li><a target="_blank" href="https://vuejs.org/v2/guide/">Vuejs “like” API with <code>new View({data, components, methods})</code></a></li>
					<li><a target="_blank" href="https://github.com/snabbdom/snabbdom">Snabbdom virtual DOM</a></li>
					<li><a target="_blank" href="https://github.com/andrejewski/himalaya">Himalayajs for HTML strings to AST</a></li>
					<li><a target="_blank" href="https://developer.mozilla.org/en/docs/Web/API/Fetch_API">Fetch for promise based async calls</a></li>
					<li>Has been built using <a target="_blank" href="https://github.com/wbkd/yet-another-webpack-es6-starterkit">https://github.com/wbkd/yet-another-webpack-es6-starterkit</a></li>
				</ul>
				<h3>What can be done for now ?</h3>
				<ul>
					<li><code>:if</code> directive that creates / removes a node based on a boolean equality</li>
					<li><code>:show</code> directive that add a <code>display: none</code> style on an element based on a boolean equality</li>
					<li>String interpolation from objects / simple string such as <code>{\r{object.name}\r}</code></li>
					<li>Nesting components</li>
					<li>Apply changes at the component state level using <code>setState({...newState})</code></li>
					<li>Passing data to child with <code>child-component childProps="parentDataProps"</code></li>
				</ul>
				<h3>Internal stuff</h3>
				<div>
					<code>Component (template string + data)</code> > <code>AST (via Himalaya)</code> > <code>Custom node</code> > <code>Interpolation > Snabbdom Node</code>
				</div>
			</div>
		</div>
	`,
	tag: 'explanation'
});
