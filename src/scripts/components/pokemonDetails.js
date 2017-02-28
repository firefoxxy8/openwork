import View from '../lib/view';
import {PokemonSprites} from './pokemonSprites';
import {PokemonStats} from './pokemonStats';

export const PokemonDetails = new View({
	template: `
		<section class="pokemon-details">
			<h1 class="{{types}}">{{pokemon.name}}</h1>
			<pokemon-sprites pokemon="pokemon"></pokemon-sprites>
			<pokemon-stats stats="abilities" title="Abilities"></pokemon-stats>
			<pokemon-stats stats="stats" title="Stats"></pokemon-stats>
		</section>
	`,
	tag: 'pokemon-details',
	components: [
		PokemonSprites,
		PokemonStats
	]
});
