import View from '../lib/view';

export const PokemonStats = new View({
	template: `
		<section>
			<h2>{{title}}</h2>
			<p class="text-content">
				{{stats}}
			</p>
		</section>
	`,
	tag: 'pokemon-stats'
});
