import View from './../view';
import Subsubchild from './subSubChild';

export default new View({
	template: `
		<div class="subchild">
			<span>Subchild niveau 2</span>
			<subsubchild image="{{image}}"></subsubchild>
		</div>
	`,
	tag: 'subchild',
	components: [
		Subsubchild
	]
});
