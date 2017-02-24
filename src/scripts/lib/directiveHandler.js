import DirectiveIf from './directives/directiveIf';
import CompiledNode from './compiledNode';

export default class DirectiveHandler {
	handle(currentView, astNode, events = {}, style = {}, props = {}, children = []) {
		if (props[':if']) {
			return new DirectiveIf().apply(currentView, astNode, events, style, props, children);
		}
		return new CompiledNode(astNode, events, style, props, children).display();
	}
}