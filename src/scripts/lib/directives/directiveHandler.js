import DirectiveIf from './directiveIf';
import DirectiveFor from './directiveFor';
import DirectiveShow from './directiveShow';

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