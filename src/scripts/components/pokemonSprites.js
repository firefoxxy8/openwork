import View from '../lib/view';

export const PokemonSprites = new View({
	template: `
		<section class="row">
			<div class="col-md-3 text-center pokemon-sprite col-sm-6 col-xs-6">
				<img src="{{pokemon.sprites.front_default}}"/>
			</div>
			
			<div class="col-md-3 text-center pokemon-sprite col-sm-6 col-xs-6">
				<img src="{{pokemon.sprites.back_default}}"/>
			</div>
			
			<div class="col-md-3 text-center pokemon-sprite col-sm-6 col-xs-6">
				<img src="{{pokemon.sprites.front_shiny}}"/>
			</div>
			
			<div class="col-md-3 text-center pokemon-sprite col-sm-6 col-xs-6">
				<img src="{{pokemon.sprites.back_shiny}}"/>
			</div>
		</section>
	`,
	tag: 'pokemon-sprites'
});
