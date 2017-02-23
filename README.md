<div style="color:red">
This project doesn't aim to be run in production. It's not optimized at all.
</div>

It's a really simple approach to create a front end framework using the awesomeness of open sources projects and APIs.


It's based on knowledge provided by the community.

[Click here to check the demo, and enter a pokemon name in the search bar](https://skahrz.github.io/openwork/)

![Gif](https://media.giphy.com/media/3o84U1gcw1ae2219XW/source.gif)


### What's inside ?

- [React style change detection using `setState`](https://facebook.github.io/react/docs/state-and-lifecycle.html)
- [Some Vuejs syntaxes like `@click`, `@change` and the notion of `:model`](https://vuejs.org/v2/guide/events.html)
- [Props passing "like" react `<component customProps="{{props}}/>"`](https://facebook.github.io/react/docs/components-and-props.html)
- [Syntax interpolation "like" Angularjs using `{{toInterpolate}}`](https://docs.angularjs.org/api/ng/service/$interpolate)
- [Vuejs "like" API with `new View({data, components, methods})`](https://vuejs.org/v2/guide/)
- [Snabbdom virtual DOM, just like Cyclejs](https://github.com/snabbdom/snabbdom)
- [Himalayajs for HTML strings to AST](https://github.com/andrejewski/himalaya)
- [Fetch for promise based async calls](https://developer.mozilla.org/en/docs/Web/API/Fetch_API)
- Has been built using https://github.com/wbkd/yet-another-webpack-es6-starterkit


With the help of [Pokeapi](https://pokeapi.co/) for the example

### Try it

Actually tried on Node v6.9.0.

```
git clone https://github.com/Skahrz/openwork.git
cd openwork
yarn install
npm run dev
```

And open your browser on http://127.0.0.1:1337/

### What's in it

#### Create components

```javascript
import View from './../view';
export default new View({
	template: `
		<div>
			<p>Super component !</p>
		</div>
	`,
	tag: 'cmp'
});
```

#### Nested components

```javascript
// <cmp> tags comes from the previous component definition
import View from './../view';
import MyComponent from './myComponent';
export default new View({
	template: `
		<div>
			<p>Super component !</p>
      <cmp></cmp>
		</div>
	`,
	tag: 'compo',
  components: [
    MyComponent
  ]
});
```


#### Two way data binding
```javascript
import View from './../view';
export default new View({
	template: `
		<div>
      {{content}}
			<input type="text" value={{content}} :model="content"/>
		</div>
	`,
	tag: 'two-ways',
  data: {
    content: ''
  }
});
```

#### Use methods

```javascript
import View from './../view';
export default new View({
	template: `
		<div>
      {{content}}
			<input type="text" value={{content}} :model="content"/>
      <button @click="showContent">What's the content ?</button>
		</div>
	`,
	tag: 'two-ways',
  data: {
    content: ''
  },
  methods: {
    showContent: function () {
      alert(this.data.content);
    }
  }
});
```

#### Passing props to child components

```javascript
import View from './../view';

// Prints hello world
const Child = new View({
  template: `
		<div>
      {{detail}
		</div>
	`,
	tag: 'child'
});

export default new View({
	template: `
		<div>
      <p>Parent</p>
      <child detail="{{content}}"></child>
		</div>
	`,
	tag: 'parent',
  data: {
    content: 'Hello world !'
  }
});
```

#### `:show` to display content on variable value
```javascript
import View from './../view';

export default new View({
  template: `
		<div>
      <div :show="isShown">
        Show me on condition
      </div>
      <button @click="changeVisibility">
        Let's show the button !
      </button>
		</div>
	`,
	tag: 'child',
  methods: {
    changeVisibility: function () {
      this.setState({
        isShown: !this.data.isShown
      });
    }
  }
});
```

------------

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
