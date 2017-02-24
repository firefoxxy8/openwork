import DirectiveIf from './directives/directiveIf';
import h from 'snabbdom/h';

export default class DirectiveHandler {
	handle(astNode, events = {}, style = {}, props = {}, children = []) {
		if (props[':if']) {
			return new DirectiveIf(astNode, events, style, props, children).apply();
		}
		if (children.length > 0) {
			return h(astNode.tagName || astNode.type, {style, props, on: events}, children);
		}
		return h(astNode.tagName || astNode.type, {style, props, on: events}, astNode.content);
	}
}