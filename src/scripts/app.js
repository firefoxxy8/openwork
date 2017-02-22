import View from './view';


const result = new View({
	tag: 'result',
	template: `<div>
		<h4>Result is {{here}}</h4>
		<input :model="here" type="text" value="{{here}}"/>
	</div>`,
	data: {
		here: 'here !'
	}
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
		}
	},
	components: [
		result
	]
}).mount('application');