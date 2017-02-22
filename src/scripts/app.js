import View from './view';

const subSubChild = new View({
	template: `
		<div>
			<p>Subsubchild niveau 3 => {{sub}}</p>
			<input type="text" :model="sub"/>
		</div>
	`,
	tag: 'subsubchild',
	data: {
		sub: ''
	}
});

const subChild = new View({
	template: `
		<div>
			<span>Subchild niveau 2</span>
			<subsubchild></subsubchild>
		</div>
	`,
	tag: 'subchild',
	components: [
		subSubChild
	]
});

const result = new View({
	template: `<div>
    <h3>{{lol}}</h3>
    <input :model="lol" type="text" value="{{lol}}"/>
    <subchild></subchild>
    </div>`,
	tag: 'result',
	data: {
		lol: 'Let\s bangarang !'
	},
	methods: {},
	components: [
		subChild
	]
});

const view = new View({
	template: `<div>
    <h3>{{test}}</h3>
    <input :model="test" type="text" value="{{test}}"/>
    <button @click="callMeBaby">Click me !</button>
    <result></result>
    </div>`,
	tag: 'my-view',
	data: {
		test: 'Let\s test !'
	},
	methods: {
		callMeBaby: function () {
			alert(this.data.test);
		},
		changeOnHere: function (ev) {
			console.log(this.currentNode);
		}
	},
	components: [
		result
	]
}).mount('application');