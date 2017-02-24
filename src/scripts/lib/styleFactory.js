export default class StyleFactory {
	static createFrom(viewInstance, attributes = {}) {
		const style = {};
		if (attributes[':show']) {
			style.display = viewInstance.data[attributes[':show']] ? 'block' : 'none';
		}
		return style;
	}
}