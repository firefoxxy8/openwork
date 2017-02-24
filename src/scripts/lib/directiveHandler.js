import DirectiveIf from './directives/directiveIf';
import h from 'snabbdom/h';

export default class DirectiveHandler {
	handle(astNode, events = {}, style = {}, props = {}) {
		if (props[':if']) {
			return new DirectiveIf(astNode, events, props).apply();
		}
		return h(astNode.tagName || astNode.type, {style, props, on: events}, astNode.content);
	}
}