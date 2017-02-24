import CompiledNode from './../compiledNode';
export default class DirectiveIf {
	apply(currentView, astNode, events, style, props, children) {
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
	}
}