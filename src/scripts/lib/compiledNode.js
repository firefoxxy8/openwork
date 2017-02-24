import h from 'snabbdom/h';
export default class CompiledNode {
	constructor(astNode = {type: 'div', content: ''}, events = {}, style = {}, props = {}, children = []) {
		this.astNode = astNode;
		this.events = events;
		this.style = style;
		this.props = props;
		this.children = children;
	}

	display() {
		if (this.children.length > 0) {
			return h(this.astNode.tagName || this.astNode.type, {
				style: this.style,
				props: this.props,
				on: this.events
			}, this.children);
		}
		return h(this.astNode.tagName || this.astNode.type, {
			style: this.style,
			props: this.props,
			on: this.events
		}, this.astNode.content);
	}
}