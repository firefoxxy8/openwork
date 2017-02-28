class PokemonService {
	fetchRemote() {
		return fetch('https://pokeapi.co/api/v2/pokemon/')
			.then(res => {
				if (res.ok) return res.json();
				throw new Error('Cant reach the remote API');
			}).then(res => res.results);
	}

	fetchPokemon(name) {
		return fetch('https://pokeapi.co/api/v2/pokemon/' + name)
			.then(res => {
				if (res.ok) return res.json();
				throw new Error('Cant reach the remote API');
			});
	}
}

export const pokemonService = new PokemonService();