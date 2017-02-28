import h from 'snabbdom/h';
import interpolate from './interpolate';

// Sometimes display doesnt exist, and we dont know why
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
		if (this.astNode.type === 'Text') {
			this.astNode.content = interpolate(this.astNode.content, this.data);
			return this.astNode.content;
		}
		if (this.children.length > 0) {
			return h(this.astNode.tagName, {
				style: this.style,
				props: this._interpolateProps(this.props),
				on: this.events
			}, this.children.map(child => child.sel ? child : child.display()));
		}
		return h(this.astNode.tagName || this.astNode.type, {
			style: this.style,
			props: this._interpolateProps(this.props),
			on: this.events
		}, interpolate(this.astNode.content, this.data));
	}

	_interpolateProps(props) {
		const newProps = Object.assign({}, props);
		if (this.astNode.tagName === 'img') {
			for (let k in props) {
				newProps[k] = interpolate(props[k], this.data);
			}
		}
		return newProps;
	}
}