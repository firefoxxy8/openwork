export default class EventFactory {
	static createFrom(viewInstance, attributes = {}) {
		const on = {};
		if (attributes['@click']) {
			on.click = viewInstance.methods[attributes['@click']].bind(viewInstance);
		}

		if (attributes['@change']) {
			on.input = viewInstance.methods[attributes['@change']].bind(viewInstance);
		}

		if (attributes[':model']) {
			on.input = ev => viewInstance.setState({[attributes[':model']]: ev.target.value});
		}
		return on;
	}
}