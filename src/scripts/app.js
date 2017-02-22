import View from './view';

const subSubChild = new View({
	template: `
		<div>
			<p>Subsubchild niveau 3 => {{sub}} {{tutu}}</p>
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
			<subsubchild tutu="{{titi}}"></subsubchild>
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
    <p :show="displayed">I m the mountain !</p>
    <button @click="clickOnMe">Let see the moutain !</button>
    <subchild titi="{{toto}}"></subchild>
    </div>`,
	tag: 'result',
	data: {
		lol: 'Let\s bangarang !',
		displayed: false
	},
	methods: {
		clickOnMe: function () {
			this.setState({
				displayed: !this.data.displayed
			});
		}
	},
	components: [
		subChild
	]
});

const view = new View({
	template: `<div>
    <h3>{{test}}</h3>
    <input :model="test" type="text" value="{{test}}"/>
    <button @click="callMeBaby">Click me !</button>
    <result toto="{{test}}"></result>
    </div>`,
	tag: 'my-view',
	data: {
		test: 'Let\s test !'
	},
	methods: {
		callMeBaby: function () {
			alert(this.data.test);
		}
	},
	components: [
		result
	]
}).mount('application');