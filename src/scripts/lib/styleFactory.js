export default class StyleFactory {
	static createFrom(data = {}, attributes = {}) {
		const style = {};
		if (attributes[':show']) {
			style.display = data[attributes[':show']] ? 'block' : 'none';
		}
		return style;
	}
}