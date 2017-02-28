import Directive from './directive';
import Node from '../node';

export default class DirectiveFor extends Directive {
	constructor(compiledNode) {
		super(compiledNode);
	}

	apply() {
		return new Node(
			this.compiledNode.data,
			this.compiledNode.astNode,
			this.compiledNode.events,
			this.compiledNode.style,
			this.compiledNode.props,
			this._prepareChild(this.compiledNode)
		);
	}

	_prepareChild(node) {
		const valueToCheck = node.props[':for'].split(' ');
		const keyToIterateOn = valueToCheck[2];
		const {children, data} = node;
		const dataLength = data[keyToIterateOn].length;
		let newChildren = [];
		for(let i = 0; i < dataLength; i++) {
			newChildren = new Node({[valueToCheck[0]]: data[keyToIterateOn][i]}, {}, {}, {}, {}, children);
		}
		return newChildren;
	}
}