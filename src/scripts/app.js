import View from './lib/view';
import Navbar from './components/navbar';

const root = new View({
	template: `
	<div>
		<navbar></navbar>
    </div>`,
	tag: 'my-view',
	data: {
	},
	methods: {
	},
	components: [
		Navbar
	]
});
root.mount('application');