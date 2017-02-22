import himalaya from 'himalaya';
import h from 'snabbdom/h';

export default class TemplateParser {

	compile(currentNode, htmlTemplate, data) {
		const htmlInterpolated = this._interpolateString(htmlTemplate, data);
		const ast = himalaya.parse(htmlInterpolated);
		return this._compileToNode(currentNode, ast);
	}

	_compileChildComponents(componentList, node) {
		const presentInString = componentList.filter(component => {
			return node.tagName === component.tag;
		});

		const compiledElements = presentInString.map(component => {
			return this.compile(component, component.template, component.data);
		});

		return compiledElements.length === 1 ? compiledElements[0] : null;
	}

	_interpolateString(stringTemplate, data) {
		const delimiters = /{{\s*(.+?)\s*}}/g;
		return stringTemplate.replace(delimiters, (val, match) => data[match]);
	}

	_compileToNode(currentView, astTree) {
		return h(currentView.tag, {}, astTree.map(node => this._computeChildTags(currentView, node)));
	}

	_computeChildTags(currentView, node) {
		const compiledNode = this._compileChildComponents(currentView.components, node);
		if (compiledNode) {
			return compiledNode;
		}
		const props = node.attributes;
		if (node.children) {
			const children = node.children.map(node => this._computeChildTags(currentView, node));
			return h(node.tagName || node.type, {props, on: this._handleEvents(currentView, props)}, children);
		}
		const events = this._handleEvents(currentView, props);
		return h(node.tagName || node.type, {props, on: events}, node.content);
	}

	_handleEvents(currentView, attributes = {}) {
		const on = {};
		if (attributes['@click']) {
			on.click = currentView.methods[attributes['@click']].bind(currentView);
		}

		if (attributes['@change']) {
			on.input = currentView.methods[attributes['@change']].bind(currentView);
		}

		if (attributes[':model']) {
			on.input = ev => currentView.setState({[attributes[':model']]: ev.target.value});
		}
		return on;
	}
}