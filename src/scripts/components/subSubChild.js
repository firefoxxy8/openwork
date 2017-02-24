import View from '../lib/view';
export default new View({
	template: `
		<div class="subsubchild">
			<p>Image chargée par le parent du parent : {{image}}</p>
		</div>
	`,
	tag: 'subsubchild',
	data: {
	}
});