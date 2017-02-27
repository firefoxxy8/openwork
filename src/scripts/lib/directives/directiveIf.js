import CompiledNode from '../node';
import Directive from './directive';
export default class DirectiveIf extends Directive{

	constructor(compiledNode) {
		super(compiledNode);
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
}