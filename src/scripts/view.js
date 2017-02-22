import {patch} from './vDom';
import TemplateParser from './templateParser';

export default class View {

    constructor(definition) {
        this.templateParser = new TemplateParser();
        this.template = definition.template;
        this.tag = definition.tag;
        this.methods = definition.methods || {};
        this.data = definition.data || {};
        this.components = definition.components || [];
        this.currentNode = null;
    }

    mount(mountingPoint) {
        const mountingPointElement = document.getElementById(mountingPoint);
        this._updateNode(mountingPointElement);
    }

	setState(newState) {
		this.data = Object.assign({}, this.data, newState);
		this._updateNode(this.currentNode);
	}

    _updateNode(oldNode) {
        const node = this.templateParser.compile(this, this.template, this.data);
        this.currentNode = node;
        patch(oldNode, this.currentNode);
    }
}