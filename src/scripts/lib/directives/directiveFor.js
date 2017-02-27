import Directive from './directive';
import CompiledNode from '../node';

export default class DirectiveFor extends Directive {
	constructor(compiledNode) {
		super(compiledNode);
	}

	apply() {
		const valueToCheck = this.compiledNode.props[':for'].split(' ');
		const keyToIterateOn = valueToCheck[2];
		const {children, currentView} = this.compiledNode;
		console.log(children);
		const dataLength = currentView.data[keyToIterateOn].length;
		let newChildren = [];
		for(let i = 0; i < dataLength; i++) {
			newChildren = children.concat(newChildren);
		}

		console.log(newChildren);


		return new CompiledNode(
			this.compiledNode.currentView,
			this.compiledNode.astNode,
			this.compiledNode.events,
			this.compiledNode.style,
			this.compiledNode.props,
			newChildren
		);
	}
}