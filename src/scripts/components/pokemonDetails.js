import View from '../lib/view';

export const PokemonDetails = new View({
	template: `
		<section>
			{{pokemon.name}}
		</section>
	`,
	tag: 'pokemon-details',
	methods: {
		tellMe: function() {
			console.log(this.data);
		}
	}
});
