import View from './../view';
import Subchild from './subChild';

export default new View({
	template: `<div class="card">
    <img src="{{image}}"/>
    <p>
    	{{abilities}}
	</p>
    <subchild image="{{image}}"></subchild>
    </div>`,
	tag: 'pokemon-card',
	data: {},
	methods: {
	},
	components: [
		Subchild
	]
});
