import CompiledNode from './../compiledNode';
export default class DirectiveIf {

	constructor(compiledNode) {
		this.compiledNode = compiledNode;
	}

	apply() {
		const valueToCheck = this.compiledNode.props[':if'];
		const valueInData = this.compiledNode.currentView.data[valueToCheck];
		if (valueInData) {
			return new CompiledNode(
				this.compiledNode.currentView,
				this.compiledNode.astNode,
				this.compiledNode.events,
				this.compiledNode.style,
				this.compiledNode.props,
				this.compiledNode.children
			);
		}
		if (valueToCheck[0] === '!') {
			const negativeValueToCheck = valueToCheck.substr(1);
			if (!this.compiledNode.currentView.data[negativeValueToCheck]) {
				return new CompiledNode(
					this.compiledNode.currentView,
					this.compiledNode.astNode,
					this.compiledNode.events,
					this.compiledNode.style,
					this.compiledNode.props,
					this.compiledNode.children
				);
			}
		}
		return new CompiledNode();
	}

	/*apply(currentView, astNode, events, style, props, children) {
		const valueToCheck = props[':if'];
		const valueInData = currentView.data[valueToCheck];
		if (valueInData) {
			return new CompiledNode(astNode, events, style, props, children);
		}
		if (valueToCheck[0] === '!') {
			const negativeValueToCheck = valueToCheck.substr(1);
			if (!currentView.data[negativeValueToCheck]) {
				return new CompiledNode(astNode, events, style, props, children);

			}
		}
		return new CompiledNode();
	}*/
}