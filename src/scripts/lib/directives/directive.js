export default class Directive {
	constructor(compiledNode) {
		this.compiledNode = compiledNode;
	}

	apply() {
		throw new Error('The apply method has not been redefined in a child class');
	}
}