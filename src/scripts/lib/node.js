import h from 'snabbdom/h';
export default class Node {
	constructor(data = {}, astNode = {type: 'div', content: ''}, events = {}, style = {}, props = {}, children = []) {
		this.data = data;
		this.astNode = astNode;
		this.events = events;
		this.style = style;
		this.props = props;
		this.children = children;
	}

	display() {
		if (this.astNode.type === 'Text') return this.astNode.content;
		if (this.children.length > 0) {
			return h(this.astNode.tagName, {
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