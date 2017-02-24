import DirectiveIf from './directives/directiveIf';
import CompiledNode from './compiledNode';

export default class DirectiveHandler {
	handle(currentView, astNode, events = {}, style = {}, props = {}, children = []) {
		let compiledNode = new CompiledNode(astNode, events, style, props, children);
		if (props[':if']) {
			compiledNode = new DirectiveIf().apply(currentView, astNode, events, style, props, children);
		}
		return compiledNode.display();
	}
}