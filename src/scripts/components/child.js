import View from '../lib/view';
import Subchild from './subChild';

export default new View({
	template: `
		<div class="card">
			<div class="global-padding">
			    <img src="{{image}}"/>
			    <p>
			        {{abilities.plouf}}
				</p>
				<button @click="showAbilitied">Abilities</button>
			    <subchild image="image"></subchild>
		    </div>
	    </div>
	`,
	tag: 'pokemon-card',
	data: {
	},
	methods: {
		showAbilitied: function() {
			console.log(this.data.abilities);
		}
	},
	components: [
		Subchild
	]
});
