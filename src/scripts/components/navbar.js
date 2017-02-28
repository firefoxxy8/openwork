import View from '../lib/view';

export const Navbar = new View({
	template: `
		<nav class="navbar navbar-default">
		  <div class="container-fluid">
		      <a class="navbar-brand" href="#">Openwork</a>
		      <a href="https://github.com/Skahrz/openwork" target="_blank" class="pull-right"><img class="social-icon" src="https://dynamicimagesfr-v2b.netdna-ssl.com/product_class_external_product/github_128.png"/></a>
		    </div>
		  </div>
		</nav>
	`,
	tag: 'navbar'
});
