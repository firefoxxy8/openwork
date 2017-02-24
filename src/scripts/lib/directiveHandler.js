import DirectiveIf from './directives/directiveIf';
import CompiledNode from './compiledNode';

export default class DirectiveHandler {
	handle(currentView, astNode, events = {}, style = {}, props = {}, children = []) {
		let compiledNode = new CompiledNode(currentView, astNode, events, style, props, children);
		if (props[':if']) {
			compiledNode = new DirectiveIf(compiledNode).apply();
		}
		return compiledNode.display();
	}
}