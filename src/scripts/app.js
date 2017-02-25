import View from './lib/view';
import Child from './components/child';
import Subsubchild from './components/subSubChild';
import Navbar from './components/navbar';

const toString = array => {
	return array.map(item => {
		return `Ability : ${item.ability.name} / Slots : ${item.slot}`;
	}).join(', ');
};

const root = new View({
	template: `
	<div>
		<navbar></navbar>
		<div class="container">
		    <h3>Current search : <span class="primary">{{pokemonName}}</span></h3>
		    <input :model="pokemonName" type="text" placeholder="Tap a pokemon name !"/>
		    <button @click="onLoadPokemon">Load the pokemon !</button>
		    <p>{{test.key}}</p>
		    <div class="m-t">
		    	<div :for="a of arr">{{a.name}}</div>
			    <div :if="loading">
			        Loading...
				</div>
				<div :if="image">
			        <pokemon-card image="{{image}}" abilities="{{abilities}}"></pokemon-card>
			    </div>
			    <div :if="error">
			        {{error}}
				</div>
			</div>
		</div>
    </div>`,
	tag: 'my-view',
	data: {
		pokemonName: '',
		test: {key: 'value'},
		image: null,
		loading: false,
		abilities: {
			plouf: 'paf'
		},
		arr : [{name: 'toto'}, {name: 'tata'}]
	},
	methods: {
		onLoadPokemon: function () {
			this.setState({loading: true, error: null});
			fetch('https://pokeapi.co/api/v2/pokemon/' + this.data.pokemonName.toLowerCase())
				.then(res => {
					if (res.ok) return res;
					throw new Error();
				})
				.then(res => res.json())
				.then(pokemon => {
					this.setState({
						loading: false,
						error: null,
						image: pokemon.sprites.front_default,
						abilities: toString(pokemon.abilities)
					});
				}).catch(e => {
				this.setState({
					loading: false,
					error: 'The pokemon doesnt exist :('
				});
			});
		}
	},
	components: [
		Child,
		Subsubchild,
		Navbar
	]
});
root.mount('application');