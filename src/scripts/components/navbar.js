import View from '../lib/view';

export const Navbar = new View({
	template: `
		<nav class="navbar navbar-default">
		  <div class="container-fluid">
		      <a class="navbar-brand" href="#">Openwork</a>
		    </div>
		  </div>
		</nav>
	`,
	tag: 'navbar'
});
