(window.webpackJsonppokedex=window.webpackJsonppokedex||[]).push([[0],[,,,,,,,,,function(e,n,t){e.exports=t(19)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(2),c=t.n(r),s=(t(14),t(6)),i=t(3),l=t(4),u=t(7),m=t(5),h=t(8),p=(t(15),t(16),function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.pokemon.id,".png"),alt:"pokemon"}),o.a.createElement("h2",null,e.pokemon.name))}),d=(t(17),function(e){return o.a.createElement("div",{className:"card-list"},e.pokemons.map(function(e){return o.a.createElement(p,{key:e.id,pokemon:e})}))}),k=(t(18),function(e){var n=e.placeholder,t=e.handleChange;return o.a.createElement("input",{className:"search",type:"search",placeholder:n,onChange:t})}),f=function(e){function n(){var e;return Object(i.a)(this,n),(e=Object(u.a)(this,Object(m.a)(n).call(this))).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={pokemons:[],searchField:""},e}return Object(h.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,n=1;fetch("https://pokeapi.co/api/v2/pokemon?limit=10").then(function(e){return e.json()}).then(function(t){for(var a=0;a<t.results.length;a++)e.setState({pokemons:[].concat(Object(s.a)(e.state.pokemons),[{name:t.results[a].name,url:t.results[a].url,id:n}])}),n++})}},{key:"render",value:function(){var e=this.state,n=e.pokemons,t=e.searchField,a=n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Pokedex"),o.a.createElement(k,{placeholder:"search pokemons",handleChange:this.handleChange}),o.a.createElement(d,{pokemons:a}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.7cafdff6.chunk.js.map