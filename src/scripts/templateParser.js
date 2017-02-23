import himalaya from 'himalaya';
import h from 'snabbdom/h';
class TemplateParser {

	compile(currentNode, htmlTemplate, data) {
		const htmlInterpolated = this._interpolateString(htmlTemplate, data);
		const ast = himalaya.parse(htmlInterpolated);
		return this._compileToNode(currentNode, ast);
	}

	_resolveChildComponent(parentComponent, node) {
		const presentInString = parentComponent.components.filter(component => {
			return node.tagName === component.tag;
		});

		const compiledElements = presentInString.map(component => {
			const parentProps = {};
			for (let key in parentComponent.data) {
				for(let k in node.attributes) {
					if (node.attributes[k] === key) {
						parentProps[key] = parentComponent.data[key];
					}
				}
			}
			component.data = Object.assign({}, component.data, node.attributes, parentProps);
			const compiledNode = this.compile(component, component.template, component.data);
			component.currentNode = compiledNode;
			return compiledNode;
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
		const props = node.attributes;
		const events = this._handleEvents(currentView, props);
		const childComponent = this._resolveChildComponent(currentView, node);
		if (childComponent) {
			return childComponent;
		}
		const styles = this._handleStyleModification(currentView, props);
		const style = styles.style;
		if (node.children) {
			const children = node.children.map(node => this._computeChildTags(currentView, node));
			return h(node.tagName || node.type, {style, props, on: events}, children);
		}
		return h(node.tagName || node.type, {style, props, on: events}, node.content);
	}

	_handleStyleModification(currentView, attributes = {}) {
		const styles = {style: {}, classes: {}};
		if (attributes[':show']) {
			styles.style.display = currentView.data[attributes[':show']] ? 'block' : 'none';
		}
		return styles;
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

export default new TemplateParser();