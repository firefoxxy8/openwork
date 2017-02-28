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
		if (data.a) {
			console.log(this);
		}
	}

	display() {
		if (this.children.length > 0) {
			return h(this.astNode.tagName, {
				style: this.style,
				props: this._interpolateProps(this.props),
				on: this.events
			}, this.children.map(child => child.sel ? child : child.display()));
		}
		const interpolated = interpolate(this.astNode.content, this.data);

		if (this.astNode.type === 'Text') {
			this.astNode.content = interpolated;
			return this.astNode.content;
		}
		return h(this.astNode.tagName || this.astNode.type, {
			style: this.style,
			props: this._interpolateProps(this.props),
			on: this.events
		}, interpolated);
	}

	_interpolateProps(props) {
		const newProps = Object.assign({}, props);
		for (let k in props) {
			if (typeof props[k] === 'string') {
				newProps[k] = interpolate(props[k], this.data);
			}
		}
		return newProps;
	}
}