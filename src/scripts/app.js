import View from './lib/view';
import {Navbar} from './components/navbar';
import {PokemonCard} from './components/pokemonCard';
import {Explanation} from './components/explanation';

const root = new View({
	template: `
	<div>
		<navbar></navbar>
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-sm-12 m-b">
					<pokemon-card></pokemon-card>
				</div>
				<div class="col-md-6 col-sm-12">
					<explanation></explanation>
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
		PokemonCard,
		Explanation
	]
});
root.mount('application');