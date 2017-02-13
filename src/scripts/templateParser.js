import himalaya from 'himalaya';
import h from 'snabbdom/h';

export default class TemplateParser {

    compile(currentNode, htmlTemplate, data) {
        const htmlInterpolated = this.interpolate(htmlTemplate, data);
        const ast = himalaya.parse(htmlInterpolated);
        return this.compileToNode(currentNode, ast);
    }

    interpolate(stringTemplate, data) {
        const delimiters = /{{\s*(.+?)\s*}}/g;
        return stringTemplate.replace(delimiters, (val, match) => data[match]);
    }

    compileToNode(currentView, astTree) {
        return h(currentView.tag, {}, astTree.map(node => this.compileChild(currentView, node)));
    }

    compileChild(currentView, node) {
        const props = node.attributes;
        if (node.children) {
            const children = node.children.map(node => this.compileChild(currentView, node));
            return h(node.tagName || node.type, {props, on: this.handleEvents(currentView, props)}, children);
        }
        return h(node.tagName || node.type, {props, on: this.handleEvents(currentView, props)}, node.content);
    }

    handleEvents(currentView, attributes = {}) {
        const on = {};
        if (attributes['@click']) {
            on.click = currentView.methods[attributes['@click']].bind(currentView);
        }

        if (attributes['@change']) {
            on.input = currentView.methods[attributes['@change']].bind(currentView);
        }

        if(attributes[':model']) {
            on.input = ev => currentView.setState({[attributes[':model']]: ev.target.value});
        }
        return on;
    }
}