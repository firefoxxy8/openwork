import Directive from './directive';

export default class DirectiveFor extends Directive {
	constructor(compiledNode) {
		super(compiledNode);
	}

	apply() {
		return this.compiledNode;
	}
}