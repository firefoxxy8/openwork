export default class StyleFactory {
	static createFrom(data = {}, attributes = {}) {
		const style = {};
		const props = this.compiledNode.props[':show'];
		if (attributes[':show']) {
			style.display = data[attributes[':show']] ? 'block' : 'none';
		}
		return style;
	}
}