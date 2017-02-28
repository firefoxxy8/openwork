/**
 * Created by pc on 28/02/2017.
 */
import View from '../lib/view';
import {pokemonService} from './../services/pokemonService';
import {PokemonDetails} from './pokemonDetails';

export const PokemonCard = new View({
	template: `
		<aside>
			<select class="form-control" @change="onSelectedPokemon">
			  <option>Select a pokemon :D</option>
			  <option>Bulbasaur</option>
				<option>Ivysaur</option>
				<option>Venusaur</option>
				<option>Charmander</option>
				<option>Charmeleon</option>
				<option>Charizard</option>
				<option>Squirtle</option>
				<option>Wartortle</option>
				<option>Blastoise</option>
				<option>Caterpie</option>
				<option>Metapod</option>
				<option>Butterfree</option>
				<option>Weedle</option>
				<option>Kakuna</option>
				<option>Beedrill</option>
				<option>Pidgey</option>
				<option>Pidgeotto</option>
				<option>Pidgeot</option>
				<option>Rattata</option>
				<option>Raticate</option>
				<option>Spearow</option>
				<option>Fearow</option>
				<option>Ekans</option>
				<option>Arbok</option>
				<option>Pikachu</option>
				<option>Raichu</option>
				<option>Sandshrew</option>
				<option>Sandslash</option>
				<option>Nidoran-F</option>
				<option>Nidorina</option>
				<option>Nidoqueen</option>
				<option>Nidoran-M</option>
				<option>Nidorino</option>
				<option>Nidoking</option>
				<option>Clefairy</option>
				<option>Clefable</option>
				<option>Vulpix</option>
				<option>Ninetales</option>
				<option>Jigglypuff</option>
				<option>Wigglytuff</option>
				<option>Zubat</option>
				<option>Golbat</option>
				<option>Oddish</option>
				<option>Gloom</option>
				<option>Vileplume</option>
				<option>Paras</option>
				<option>Parasect</option>
				<option>Venonat</option>
				<option>Venomoth</option>
				<option>Diglett</option>
				<option>Dugtrio</option>
				<option>Meowth</option>
				<option>Persian</option>
				<option>Psyduck</option>
				<option>Golduck</option>
				<option>Mankey</option>
				<option>Primeape</option>
				<option>Growlithe</option>
				<option>Arcanine</option>
				<option>Poliwag</option>
				<option>Poliwhirl</option>
				<option>Poliwrath</option>
				<option>Abra</option>
				<option>Kadabra</option>
				<option>Alakazam</option>
				<option>Machop</option>
				<option>Machoke</option>
				<option>Machamp</option>
				<option>Bellsprout</option>
				<option>Weepinbell</option>
				<option>Victreebel</option>
				<option>Tentacool</option>
				<option>Tentacruel</option>
				<option>Geodude</option>
				<option>Graveler</option>
				<option>Golem</option>
				<option>Ponyta</option>
				<option>Rapidash</option>
				<option>Slowpoke</option>
				<option>Slowbro</option>
				<option>Magnemite</option>
				<option>Magneton</option>
				<option>Doduo</option>
				<option>Dodrio</option>
				<option>Seel</option>
				<option>Dewgong</option>
				<option>Grimer</option>
				<option>Muk</option>
				<option>Shellder</option>
				<option>Cloyster</option>
				<option>Gastly</option>
				<option>Haunter</option>
				<option>Gengar</option>
				<option>Onix</option>
				<option>Drowzee</option>
				<option>Hypno</option>
				<option>Krabby</option>
				<option>Kingler</option>
				<option>Voltorb</option>
				<option>Electrode</option>
				<option>Exeggcute</option>
				<option>Exeggutor</option>
				<option>Cubone</option>
				<option>Marowak</option>
				<option>Hitmonlee</option>
				<option>Hitmonchan</option>
				<option>Lickitung</option>
				<option>Koffing</option>
				<option>Weezing</option>
				<option>Rhyhorn</option>
				<option>Rhydon</option>
				<option>Chansey</option>
				<option>Tangela</option>
				<option>Kangaskhan</option>
				<option>Horsea</option>
				<option>Seadra</option>
				<option>Goldeen</option>
				<option>Seaking</option>
				<option>Staryu</option>
				<option>Starmie</option>
				<option>Scyther</option>
				<option>Jynx</option>
				<option>Electabuzz</option>
				<option>Magmar</option>
				<option>Pinsir</option>
				<option>Tauros</option>
				<option>Magikarp</option>
				<option>Gyarados</option>
				<option>Lapras</option>
				<option>Ditto</option>
				<option>Eevee</option>
				<option>Vaporeon</option>
				<option>Jolteon</option>
				<option>Flareon</option>
				<option>Porygon</option>
				<option>Omanyte</option>
				<option>Omastar</option>
				<option>Kabuto (Dome)</option>
				<option>Kabutops</option>
				<option>Aerodactyl</option>
				<option>Snorlax</option>
				<option>Articuno</option>
				<option>Zapdos</option>
				<option>Moltres</option>
				<option>Dratini</option>
				<option>Dragonair</option>
				<option>Dragonite</option>
				<option>Mewtwo</option>
				<option>Mew</option>
			</select>
			<div :if="loading">
				Loading...
			</div>
			<div :if="error">
				{{error}}
			</div>
			<div :if="currentPokemon">
				<pokemon-details pokemon="currentPokemon"></pokemon-details>
			</div>
		</aside>
	`,
	tag: 'pokemon-card',
	components: [
		PokemonDetails
	],
	data: {
		pokemons: [],
		currentPokemon: null,
		loading: false,
		error: null
	},
	methods: {
		fetchAll: function () {
			return pokemonService
				.fetchRemote()
				.then(pokemons => {
					this.setState({
						pokemons,
						error: null
					});
				})
				.catch(() => {
					this.setState({
						loading: false,
						error: 'We cant load the pokemon for now :('
					});
				});
		},
		fetchOne: function (name) {
			return pokemonService
				.fetchPokemon(name.toLowerCase())
				.then(currentPokemon => {
					this.setState({
						loading: false,
						currentPokemon,
						error: null
					});
				})
				.catch(() => {
					this.setState({
						loading: false,
						error: 'We cant load the pokemon for now :('
					});
				});
		},
		onSelectedPokemon: function (ev) {
			this.setState({loading: true});
			const pokemonName = ev.target.value;
			if (this.data.pokemons.length === 0) {
				this.methods
					.fetchAll.bind(this)()
					.then(() => this.methods.fetchOne.bind(this)(pokemonName));
			} else {
				this.methods.fetchOne.bind(this)(pokemonName);
			}
		}
	}
});
