import DirectiveIf from './directives/directiveIf';
import DirectiveFor from './directives/directiveFor';
import DirectiveShow from './directives/directiveShow';

export default class DirectiveHandler {
	handle(compiledNode) {
		const props = compiledNode.props;
		if (props[':if']) {
			compiledNode = new DirectiveIf(compiledNode).apply();
		}
		if (props[':for']) {
			compiledNode = new DirectiveFor(compiledNode).apply();
		}
		if (props[':show']) {
			compiledNode = new DirectiveShow(compiledNode).apply();
		}
		return compiledNode.display();
	}
}