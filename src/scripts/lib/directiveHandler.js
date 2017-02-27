import DirectiveIf from './directives/directiveIf';
import DirectiveFor from './directives/directiveFor';

export default class DirectiveHandler {
	handle(compiledNode) {
		const props = compiledNode.props;
		if (props[':if']) {
			compiledNode = new DirectiveIf(compiledNode).apply();
		}
		if (props[':for']) {
			compiledNode = new DirectiveFor(compiledNode).apply();
		}
		return compiledNode.display();
	}
}