import himalaya from 'himalaya';
import EventFactory from './eventFactory';
import DirectiveHandler from './directives/directiveHandler';
import Node from './node';

class TemplateCompiler {

	constructor() {
		this.directiveHandler = new DirectiveHandler();
	}

	compile(currentNode) {
		const {template} = currentNode;
		const astTree = himalaya.parse(template);
		return this._compileToNode(currentNode, astTree);
	}

	_compileToNode(currentView, astTree) {
		const vNodes = astTree.map(node => this._computeChild(currentView, node));
		return new Node(currentView.data, {tagName: currentView.tag}, {}, {}, {}, vNodes).display();
	}

	_computeChild(currentView, astNode) {
		const childComponent = this._resolveChildComponent(currentView, astNode);
		if (childComponent) {
			return childComponent;
		}
		return this._computeChildTags(currentView, astNode);
	}

	_computeChildTags (currentView, astNode) {
		const props = astNode.attributes;
		const events = EventFactory.createFrom(currentView, props);
		let children = [];
		const nodeCompiled = new Node(currentView.data, astNode, events, {},  props, children);
		if (astNode.children) {
			children = astNode.children.map(node => this._computeChild(currentView, node));
		}
		nodeCompiled.children = children;
		return this.directiveHandler.handle(nodeCompiled);
	}

	_resolveChildComponent(parentComponent, node) {
		const componentsAvailable = parentComponent.components.filter(component => node.tagName === component.tag);
		const compiledElements = componentsAvailable.map(component => {
			const parentProps = this._computeParentProperties(parentComponent.data, node.attributes);
			component.data = Object.assign({}, component.data, node.attributes, parentProps);
			const compiledNode = this.compile(component);
			component.currentNode = compiledNode;
			return compiledNode;
		});
		return compiledElements.length === 1 ? compiledElements[0] : null;
	}

	_computeParentProperties(parentProperties, nodeAttributes) {
		const parentProps = {};
		for (let key in parentProperties) {
			for (let k in nodeAttributes) {
				if (nodeAttributes[k] === key) {
					parentProps[key] = parentProperties[key];
				}
			}
		}
		return parentProps;
	}
}

export default new TemplateCompiler();