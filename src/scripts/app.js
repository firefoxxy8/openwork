import View from './lib/view';
import {Navbar} from './components/navbar';
import {PokemonCard} from './components/pokemonCard';

const root = new View({
	template: `
	<div>
		<navbar></navbar>
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<pokemon-card></pokemon-card>
				</div>
			</div>
		</div>
    </div>`,
	tag: 'my-view',
	data: {
	},
	methods: {
	},
	components: [
		Navbar,
		PokemonCard
	]
});
root.mount('application');