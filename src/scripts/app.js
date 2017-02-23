import View from './view';
import Child from './components/child';
import Subsubchild from './components/subSubChild';

const toString = array => {
	return array.map(item => {
		return `Ability : ${item.ability.name} / Slots : ${item.slot}`;
	}).toString();
};

const root = new View({
	template: `
	<div class="container">
	    <h3>Current search : <span class="primary">{{pokemonName}}</span></h3>
	    <input :model="pokemonName" type="text" value="{{pokemonName}}"/>
	    <button @click="onLoadPokemon">Load the pokemon !</button>
	    <div :show="loading">
	        Loading...
		</div>
		<div :show="image">
	    	<pokemon-card image="{{image}}" abilities="{{abilities}}"></pokemon-card>
	    </div>
    </div>`,
	tag: 'my-view',
	data: {
		pokemonName: '',
		image: null,
		loading: false,
		abilities: {
			plouf: 'paf'
		}
	},
	methods: {
		onLoadPokemon: function () {
			this.setState({loading: true});
			fetch('http://pokeapi.co/api/v2/pokemon/' + this.data.pokemonName)
				.then(res => res.json())
				.then(pokemon => {
					this.setState({
						loading: false,
						image: pokemon.sprites.front_default,
						abilities: toString(pokemon.abilities)
					});
				});
		}
	},
	components: [
		Child,
		Subsubchild
	]
});
root.mount('application');