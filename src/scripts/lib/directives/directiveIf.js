import Node from '../node';
import Directive from './directive';
export default class DirectiveIf extends Directive{

	constructor(compiledNode) {
		super(compiledNode);
	}

	apply() {
		const valueToCheck = this.compiledNode.props[':if'];
		const valueInData = this.compiledNode.data[valueToCheck];
		if (valueInData) {
			return new Node(
				this.compiledNode.data,
				this.compiledNode.astNode,
				this.compiledNode.events,
				this.compiledNode.style,
				this.compiledNode.props,
				this.compiledNode.children
			);
		}
		if (valueToCheck[0] === '!') {
			const negativeValueToCheck = valueToCheck.substr(1);
			if (!this.compiledNode.data[negativeValueToCheck]) {
				return new Node(
					this.compiledNode.data,
					this.compiledNode.astNode,
					this.compiledNode.events,
					this.compiledNode.style,
					this.compiledNode.props,
					this.compiledNode.children
				);
			}
		}
		return new Node();
	}
}