(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{67:function(e,t,a){e.exports=a(80)},72:function(e,t,a){},73:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),c=(a(72),a(36)),i=a(26),s=(a(73),a(60)),m=a(63),u=a(34),h=a(118),d=a(119),p=a(122),f=a(120),E=a(116),b=a(62),v=a.n(b),k=a(124),g=Object(E.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(u.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(u.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}});function w(){var e,t=g(),a=o.a.useState({top:!1,left:!1,bottom:!1,right:!1}),n=Object(m.a)(a,2),r=n[0],l=n[1],i=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&l(Object(s.a)({},r,Object(u.a)({},e,t)))}};return o.a.createElement("div",{className:t.root},o.a.createElement(h.a,{position:"fixed"},o.a.createElement(d.a,null,o.a.createElement(p.a,{edge:"start",onClick:i("left",!0),className:t.menuButton,color:"inherit","aria-label":"open drawer"},o.a.createElement(v.a,null)),o.a.createElement(k.a,{open:r.left,onClose:i("left",!1)},(e="left",o.a.createElement("div",{className:"menu",onClick:i(e,!1),onKeyDown:i(e,!1)},o.a.createElement("div",{className:"head_menu"},o.a.createElement("p",null,"Pokedex")),o.a.createElement("div",{className:"menu_section"},o.a.createElement(c.b,{to:"/"},o.a.createElement("p",null,"Home"))),o.a.createElement("div",{className:"menu_section"},o.a.createElement(c.b,{to:"/about"},o.a.createElement("p",null,"About"))),o.a.createElement("div",{className:"menu_section"},o.a.createElement("p",null,o.a.createElement("a",{href:"https://github.com/WilliaamKing/Pokedex",target:"__blank"},"Code"))),o.a.createElement("div",{className:"menu_section"},o.a.createElement("p",null,o.a.createElement("a",{href:"mailto:dimkas2001@icloud.com",target:"__blank"},"Contact")))))),o.a.createElement(f.a,{className:t.title,variant:"h6",noWrap:!0},"Pokedex"))))}var y=a(44),_=a(24),N=a(47),P=a(45),j=a(46),O=function(e){function t(){return Object(y.a)(this,t),Object(N.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"footer"},o.a.createElement("p",null,"\xa9Project by Shmaliuk Dmitriy",o.a.createElement("br",null),"2019"))}}]),t}(o.a.Component);function S(e){var t=e.children;return o.a.createElement("div",{className:"app"},o.a.createElement(w,null),o.a.createElement("div",null,t),o.a.createElement(O,null))}function x(e){var t=e.name,a=e.front_default;return o.a.createElement("div",{className:"card"},o.a.createElement("div",null),o.a.createElement("div",{className:"img_of_card"},o.a.createElement("img",{src:a,alt:t})),o.a.createElement("div",{className:"text_of_card","aria-controls":"info_pok"},o.a.createElement("span",null,t," ")))}x.defaultProps={name:"Name of pokemon",front_default:""};var A=a(121);function C(e){var t=e.searchingMethod;return o.a.createElement("div",{className:"searching_form"},o.a.createElement(A.a,{id:"search",fullWidth:!0,placeholder:"Searching Pokemons",name:"search",onChange:t}))}var D=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(N.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(o)))).state={items:[],show_arr:[],count:40},a.gettingMore=function(){a.state.count+40<a.state.show_arr.length?a.setState({count:a.state.count+40}):a.setState({count:a.state.show_arr.length})},a.searchAsName=function(e){var t=a.state.items.filter(function(e){return e.name.indexOf(document.getElementById("search").value)>=0});a.setState({show_arr:t})},a}return Object(j.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){for(var e=this,t=[],a=1;a<=802;++a)fetch("https://pokeapi.co/api/v2/pokemon/".concat(a,"/")).then(function(e){return e.json()}).then(function(a){t.push(a),e.setState({items:t,show_arr:t})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"start"},o.a.createElement("div",null,o.a.createElement(C,{searchingMethod:this.searchAsName})),o.a.createElement("div",{className:"body"},this.state.show_arr.slice(0,this.state.count).map(function(e){return o.a.createElement(x,{name:e.name,front_default:e.sprites.front_default})})),o.a.createElement("div",{className:"result_of_search"},o.a.createElement("p",null," Showed ",this.state.count," pokemons from ",this.state.show_arr.length),this.state.count<this.state.show_arr.length&&o.a.createElement("p",{className:"ref",onClick:this.gettingMore},"More")))}}]),t}(o.a.Component);function M(){return o.a.createElement("div",{className:"info"},o.a.createElement("h1",null,"About Pokedex"),o.a.createElement("p",null,"This is Pokedex, application about Pokemons..."),o.a.createElement("h1",null,"About Pokemons"),o.a.createElement("p",null,"Every Pok\xe9mon creature has an array of stats. HP (Hit Points) is a Pok\xe9mon's life force. If your Pok\xe9mon's HP hits zero, it faints and is no longer usable in battle (it can still use Hidden Machines, though). The Speed stat decides which Pok\xe9mon will make the first move in battle. This stat can be critical in long battles. ",o.a.createElement("br",null),o.a.createElement("br",null),"Attack and Special Attack measure the strength of moves used by your Pok\xe9mon; the higher this is, the more damage you will do to opponents. Attack corresponds to moves in the Physical category, while Special Attack corresponds to Special moves.",o.a.createElement("br",null),o.a.createElement("br",null),"Similarly, Defense and Special Defense measure the ability to take attacks from other Pok\xe9mon; the higher the stat is, the fewer Hit Points will be lost when attacked. Defense corresponds to moves in the Physical category, while Special Defense corresponds to Special moves."))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(function(){return o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement(S,null,o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:D}),o.a.createElement(i.a,{path:"/about",component:M})))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[67,1,2]]]);
//# sourceMappingURL=main.33c00182.chunk.js.map