import Node from '../node';
import Directive from './directive';
export default class DirectiveShow extends Directive{

	constructor(compiledNode) {
		super(compiledNode);
	}

	apply() {
		const props = this.compiledNode.props;
		const data = this.compiledNode.data;
		const style = {};
		if (props[':show']) {
			style.display = data[props[':show']] ? 'block' : 'none';
		}
		return new Node(this.compiledNode.data,
			this.compiledNode.astNode,
			this.compiledNode.events,
			style,
			this.compiledNode.props,
			this.compiledNode.children);
	}
}