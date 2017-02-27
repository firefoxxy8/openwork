import Directive from './directive';
import Node from '../node';

export default class DirectiveFor extends Directive {
	constructor(compiledNode) {
		super(compiledNode);
	}

	apply() {
		const valueToCheck = this.compiledNode.props[':for'].split(' ');
		const keyToIterateOn = valueToCheck[2];
		const {children, data} = this.compiledNode;
		const dataLength = data[keyToIterateOn].length;
		let newChildren = [];

		for(let i = 0; i < dataLength; i++) {
			newChildren = children.concat(newChildren);
		}

		return new Node(
			data,
			this.compiledNode.astNode,
			this.compiledNode.events,
			this.compiledNode.style,
			this.compiledNode.props,
			newChildren
		);
	}
}