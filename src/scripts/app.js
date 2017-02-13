import View from './view';

/*const view = new View({
    template: '<div>' +
    '<h4>{{toi}}</h4>' +
    '<input @change="changeValue" type="number" value=""/>' +
    '<button @click="fetchPokemon">Fetch !</button>' +
    '<div>Je suis {{pokemonName}} !</div>' +
    '</div>',
    tag: 'my-view',
    data: {
        toi: 'On va chercher des pokemons !',
        pokemonName: 'Inconnu pour l instant...',
        pokemonId: 1
    },
    methods: {
        fetchPokemon: function () {
            fetch('https://pokeapi.co/api/v2/pokemon/' + this.data.pokemonId)
                .then(res => res.json())
                .then(pokemon => {
                    this.setState({pokemonName: pokemon.name});
                });
        },
        changeValue: function (event) {
            this.setState({pokemonId: event.target.value});
        }
    }
}).mount('application');*/

const view = new View({
    template: '<div>' +
    '<h3>{{test}}</h3>' +
    '<input :model="test" type="text" value=""/>' +
    '</div>',
    tag: 'my-view',
    data: {
        test: 'On va tester !'
    }
}).mount('application');