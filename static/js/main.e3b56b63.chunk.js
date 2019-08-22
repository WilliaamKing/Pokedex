(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{70:function(e,t,a){e.exports=a(82)},75:function(e,t,a){},76:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(8),r=a.n(s),c=(a(75),a(29)),i=a(27),o=(a(76),a(62)),m=a(67),u=a(35),p=a(122),d=a(123),h=a(127),f=a(124),E=a(120),v=a(64),g=a.n(v),b=a(129),y=Object(E.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(u.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(u.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}});function k(){var e,t=y(),a=l.a.useState({top:!1,left:!1,bottom:!1,right:!1}),n=Object(m.a)(a,2),s=n[0],r=n[1],i=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&r(Object(o.a)({},s,Object(u.a)({},e,t)))}};return l.a.createElement("div",{className:t.root},l.a.createElement(p.a,{position:"fixed"},l.a.createElement(d.a,null,l.a.createElement(h.a,{edge:"start",onClick:i("left",!0),className:t.menuButton,color:"inherit","aria-label":"open drawer"},l.a.createElement(g.a,null)),l.a.createElement(b.a,{open:s.left,onClose:i("left",!1)},(e="left",l.a.createElement("div",{className:"menu",onClick:i(e,!1),onKeyDown:i(e,!1)},l.a.createElement("div",{className:"head_menu"},l.a.createElement("p",null,"Pokedex")),l.a.createElement("div",{className:"menu_section"},l.a.createElement(c.b,{to:"/"},l.a.createElement("p",null,"Home"))),l.a.createElement("div",{className:"menu_section"},l.a.createElement(c.b,{to:"/about"},l.a.createElement("p",null,"About"))),l.a.createElement("div",{className:"menu_section"},l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/WilliaamKing/Pokedex",target:"__blank"},"Code"))),l.a.createElement("div",{className:"menu_section"},l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:dimkas2001@icloud.com",target:"__blank"},"Contact")))))),l.a.createElement(f.a,{className:t.title,variant:"h6",noWrap:!0},"Pokedex"))))}function _(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",null,"\xa9Project by Shmaliuk Dmitriy",l.a.createElement("br",null),"2019"))}function N(e){var t=e.children;return l.a.createElement("div",{className:"app"},l.a.createElement(k,null),l.a.createElement("div",null,t),l.a.createElement(_,null))}var w=a(46),S=a(25),j=a(49),P=a(47),x=a(48),A=Object(E.a)(function(e){return{link:{"text-decoration":"none"}}});function C(e){var t=e.name,a=e.front_default,n=e.id,s=A();return l.a.createElement(c.b,{to:"/pokemons/".concat(n,"/"),className:s.link},l.a.createElement("div",{className:"card"},l.a.createElement("div",null),l.a.createElement("div",{className:"img_of_card"},l.a.createElement("img",{src:a,alt:t})),l.a.createElement("div",{className:"text_of_card"},l.a.createElement("span",{className:"head_card"},t))))}C.defaultProps={name:"Name of pokemon",front_default:"",id:0};var O=a(126),M=a(65),I=a.n(M),B=a(66),D=a.n(B);function H(e){var t=e.filterMethod;return l.a.createElement("div",{className:"filter"},l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Pokedex"),l.a.createElement("h4",null,"Filter")),l.a.createElement("form",{onChange:t},l.a.createElement("div",{className:"check"},l.a.createElement("div",{className:"check_min"},l.a.createElement("div",null,l.a.createElement("span",null,"Min HP: "),l.a.createElement("input",{type:"number",name:"hp",id:"hp"})),l.a.createElement("div",null,l.a.createElement("span",null,"Min Attack: "),l.a.createElement("input",{type:"number",name:"attack",id:"attack"})),l.a.createElement("div",null,l.a.createElement("span",null,"Min Speed: "),l.a.createElement("input",{type:"number",name:"speed",id:"speed"})),l.a.createElement("div",null,l.a.createElement("span",null,"Min Defense: "),l.a.createElement("input",{type:"number",name:"defense",id:"defense"}))),l.a.createElement("div",{className:"types"},l.a.createElement("h3",null,"Types"),l.a.createElement("div",{className:"checkBoxes"},["normal","flying","poison","ground","bug","fire","water","grass","figting","rock","ghost","steel","electric","psychic","ice","dragon","dark","fairy","shadow"].map(function(e){return l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",name:e,id:e}),l.a.createElement("span",null,e))}))))))}var F=Object(E.a)(function(e){return{filterIcon:{"&:hover":{fill:"red",cursor:"pointer"}},filterForm:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},closeIcon:{position:"absolute",left:"95%",top:"65px",fill:"#ffffff","&:hover":{fill:"red",cursor:"pointer"}}}});function T(e){var t=e.searchingMethod,a=e.filterMethod,n=F();return l.a.createElement("div",{className:"searching_form"},l.a.createElement(O.a,{id:"search",fullWidth:!0,autocomplete:"off",placeholder:"Searching Pokemons",name:"search",onChange:t}),l.a.createElement(I.a,{className:n.filterIcon,onClick:function(){document.getElementsByClassName("filter_form")[0].style.display="block"}}),l.a.createElement("div",{className:"filter_form"},l.a.createElement("div",{className:n.filterForm},l.a.createElement(D.a,{className:n.closeIcon,onClick:function(){document.getElementsByClassName("filter_form")[0].style.display="none"}}),l.a.createElement(H,{filterMethod:a}))))}var W=function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(j.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(l)))).state={items:[],show_arr:[],count:32},a.gettingMore=function(){a.state.count+32<a.state.show_arr.length?a.setState({count:a.state.count+32}):a.setState({count:a.state.show_arr.length})},a.searchAsName=function(){var e=a.state.items.filter(function(e){return e.name.indexOf(document.getElementById("search").value)>=0});a.setState({show_arr:e}),e.length<32&&a.setState({count:e.length}),0===document.getElementById("search").value.length&&a.setState({count:32})},a.searchAsFilterMenu=function(e){var t=a.state.items.filter(function(e){return e.stats[5].base_stat>=document.getElementById("hp").value});t=(t=(t=t.filter(function(e){return e.stats[4].base_stat>=document.getElementById("attack").value})).filter(function(e){return e.stats[0].base_stat>=document.getElementById("speed").value})).filter(function(e){return e.stats[3].base_stat>=document.getElementById("defense").value});var n=["normal","flying","poison","ground","bug","fire","water","grass","figting","rock","ghost","steel","electric","psychic","ice","dragon","dark","fairy","shadow"],l=[],s=!1;for(var r in n)document.getElementById(n[r]).checked&&(s=!0,l=l.concat(t.filter(function(e){return e.types[1]?e.types[0].type.name===n[r]||e.types[1].type.name===n[r]:e.types[0].type.name===n[r]})));0!==l.length||s||(l=t),l.length<32?a.setState({count:l.length}):a.setState({count:32}),l=l.sort(function(e,t){return e.id-t.id}),a.setState({show_arr:l})},a}return Object(x.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){for(var e=this,t=[],a=1;a<=802;++a)fetch("https://pokeapi.co/api/v2/pokemon/".concat(a,"/")).then(function(e){return e.json()}).then(function(a){t.push(a),e.setState({items:t,show_arr:t})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"start"},l.a.createElement("div",null,l.a.createElement(T,{searchingMethod:this.searchAsName,filterMethod:this.searchAsFilterMenu})),l.a.createElement("div",{className:"body"},this.state.show_arr.slice(0,this.state.count).map(function(e){return l.a.createElement(C,{name:e.name,front_default:e.sprites.front_default,id:e.id})})),l.a.createElement("div",{className:"result_of_search"},l.a.createElement("p",null," Showed ",this.state.count>this.state.show_arr.length?this.state.show_arr.length:this.state.count," pokemons from ",this.state.show_arr.length),this.state.count<this.state.show_arr.length&&l.a.createElement("p",{className:"ref",onClick:this.gettingMore},"More")))}}]),t}(l.a.Component),G=a(84),U=Object(G.a)({info:{minHeight:"70vh",marginTop:"90px","& h1, & p":{margin:"30px",width:"85%",fontFamily:"Arial, sans-serif"}}});function J(){var e=U();return l.a.createElement("div",{className:e.info},l.a.createElement("h1",null,"About Pokedex"),l.a.createElement("p",null,"This is Pokedex, application about Pokemons..."),l.a.createElement("h1",null,"About Pokemons"),l.a.createElement("p",null,"Every Pok\xe9mon creature has an array of stats. HP (Hit Points) is a Pok\xe9mon's life force. If your Pok\xe9mon's HP hits zero, it faints and is no longer usable in battle (it can still use Hidden Machines, though). The Speed stat decides which Pok\xe9mon will make the first move in battle. This stat can be critical in long battles. ",l.a.createElement("br",null),l.a.createElement("br",null),"Attack and Special Attack measure the strength of moves used by your Pok\xe9mon; the higher this is, the more damage you will do to opponents. Attack corresponds to moves in the Physical category, while Special Attack corresponds to Special moves.",l.a.createElement("br",null),l.a.createElement("br",null),"Similarly, Defense and Special Defense measure the ability to take attacks from other Pok\xe9mon; the higher the stat is, the fewer Hit Points will be lost when attacked. Defense corresponds to moves in the Physical category, while Special Defense corresponds to Special moves."))}var K=a(125),R=function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(j.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(l)))).state={info:{},add_info:{}},a}return Object(x.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon/".concat(this.props.match.params.number,"/")).then(function(e){return e.json()}).then(function(t){e.setState({info:t})}),fetch("https://pokeapi.co/api/v2/pokemon-species/".concat(this.props.match.params.number,"/")).then(function(e){return e.json()}).then(function(t){e.setState({add_info:t})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"background_card"},void 0!==this.state.info.stats&&l.a.createElement(K.a,{in:"true",timeout:{enter:500}},l.a.createElement("div",{className:"info_card"},l.a.createElement("div",{className:"head"},l.a.createElement("div",null),l.a.createElement("div",null,this.state.info.name.charAt(0).toUpperCase()+this.state.info.name.slice(1)," "),l.a.createElement("div",null,"#",this.state.info.id)),l.a.createElement("div",{className:"types"},l.a.createElement("div",{className:"type one"},this.state.info.types[0].type.name.toUpperCase()),void 0!==this.state.info.types[1]&&l.a.createElement("div",{className:"type two"},this.state.info.types[1].type.name.toUpperCase())),l.a.createElement("div",{className:"main_info"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:this.state.info.sprites.front_default,alt:this.state.info.name})),l.a.createElement("div",{className:"skils"},l.a.createElement("div",null,l.a.createElement("span",null,"HP:")," ",l.a.createElement("span",{className:"count"},this.state.info.stats[5].base_stat)),l.a.createElement("div",null,l.a.createElement("span",null,"Attack:")," ",l.a.createElement("span",{className:"count"},this.state.info.stats[4].base_stat)),l.a.createElement("div",null,l.a.createElement("span",null,"Speed:")," ",l.a.createElement("span",{className:"count"},this.state.info.stats[0].base_stat)),l.a.createElement("div",null,l.a.createElement("span",null,"Defense:")," ",l.a.createElement("span",{className:"count"},this.state.info.stats[3].base_stat)),l.a.createElement("div",null,l.a.createElement("span",null,"Sp Atk:")," ",l.a.createElement("span",{className:"count"},this.state.info.stats[2].base_stat)),l.a.createElement("div",null,l.a.createElement("span",null,"Sp Def:")," ",l.a.createElement("span",{className:"count"},this.state.info.stats[1].base_stat)))),l.a.createElement("div",{className:"profile"},l.a.createElement("h4",null,"Additional information"),l.a.createElement("div",{className:"info_profile"},l.a.createElement("div",null,l.a.createElement("span",{className:"prop"},"Weigth:"),l.a.createElement("span",{className:"c_profile"},this.state.info.weight/10," kg")),l.a.createElement("div",null,l.a.createElement("span",{className:"prop"},"Height:"),l.a.createElement("span",{className:"c_profile"},this.state.info.height/10," m")),l.a.createElement("div",null,l.a.createElement("span",{className:"prop"},"Egg Groups:"),l.a.createElement("span",{className:"c_profile"},void 0!==this.state.add_info.egg_groups&&l.a.createElement("span",null,this.state.add_info.egg_groups.map(function(e){return e.name+" "})))),l.a.createElement("div",null,l.a.createElement("span",{className:"prop"},"Abilities:"),l.a.createElement("span",{className:"c_profile"},this.state.info.abilities[0]&&this.state.info.abilities[0].ability.name,this.state.info.abilities[1]&&this.state.info.abilities[1].ability.name)),l.a.createElement("div",null,l.a.createElement("span",{className:"prop"},"Capture rate:"),l.a.createElement("span",{className:"c_profile"},this.state.add_info.capture_rate)),l.a.createElement("div",null,l.a.createElement("span",{className:"prop"},"Gender rate:"),l.a.createElement("span",{className:"c_profile"},this.state.add_info.gender_rate)),l.a.createElement("div",null,l.a.createElement("span",{className:"prop"},"Base happiness:"),l.a.createElement("span",{className:"c_profile"},this.state.add_info.base_happiness)),l.a.createElement("div",null,l.a.createElement("span",{className:"prop"},"Shape:"),l.a.createElement("span",{className:"c_profile"},void 0!==this.state.add_info.shape&&l.a.createElement("span",null,this.state.add_info.shape.name))))))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(function(){return l.a.createElement("div",null,l.a.createElement(c.a,null,l.a.createElement(N,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:W}),l.a.createElement(i.a,{path:"/about",component:J}),l.a.createElement(i.a,{path:"/pokemons/:number",component:R})))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[70,1,2]]]);
//# sourceMappingURL=main.e3b56b63.chunk.js.map