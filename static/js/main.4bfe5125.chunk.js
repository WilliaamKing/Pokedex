(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{70:function(e,a,t){e.exports=t(84)},75:function(e,a,t){},76:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(9),c=t.n(o),s=(t(75),t(24)),r=t(29),i=(t(76),t(60)),m=t(67),u=t(36),p=t(124),d=t(125),f=t(129),E=t(126),h=t(122),k=t(62),v=t.n(k),g=t(131),b=Object(h.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(u.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(u.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}});function N(){var e,a=b(),t=l.a.useState({top:!1,left:!1,bottom:!1,right:!1}),n=Object(m.a)(t,2),o=n[0],c=n[1],r=function(e,a){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&c(Object(i.a)({},o,Object(u.a)({},e,a)))}};return l.a.createElement("div",{className:a.root},l.a.createElement(p.a,{position:"fixed"},l.a.createElement(d.a,null,l.a.createElement(f.a,{edge:"start",onClick:r("left",!0),className:a.menuButton,color:"inherit","aria-label":"open drawer"},l.a.createElement(v.a,null)),l.a.createElement(g.a,{open:o.left,onClose:r("left",!1)},(e="left",l.a.createElement("div",{className:"menu",onClick:r(e,!1),onKeyDown:r(e,!1)},l.a.createElement("div",{className:"head_menu"},l.a.createElement("p",null,"Pokedex")),l.a.createElement("div",{className:"menu_section"},l.a.createElement(s.b,{to:"/"},l.a.createElement("p",null,"Home"))),l.a.createElement("div",{className:"menu_section"},l.a.createElement(s.b,{to:"/about"},l.a.createElement("p",null,"About"))),l.a.createElement("div",{className:"menu_section"},l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/WilliaamKing/Pokedex",target:"__blank"},"Code"))),l.a.createElement("div",{className:"menu_section"},l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:dimkas2001@icloud.com",target:"__blank"},"Contact")))))),l.a.createElement(E.a,{className:a.title,variant:"h6",noWrap:!0},"Pokedex"))))}function P(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",null,"\xa9Project by Shmaliuk Dmitriy",l.a.createElement("br",null),"2019"))}function y(e){var a=e.children;return l.a.createElement("div",{className:"app"},l.a.createElement(N,null),l.a.createElement("div",null,a),l.a.createElement(P,null))}var w=t(19),_=t(39),x=t.n(_),O=t(52),C=t(63),j=t(6),S=function e(){var a=this;Object(C.a)(this,e),this.pokemons=[],this.filterPokemons=[],this.showPokemons=[],this.pokemon={},this.additionalInfo={},this.page=1,this.countOfPokemons=50,this.countOfCard=802,this.types=["normal","flying","poison","ground","bug","fire","water","grass","figting","rock","ghost","steel","electric","psychic","ice","dragon","dark","fairy","shadow"],this.InitialPokemons=Object(O.a)(x.a.mark(function e(){var t,n,l;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l=1;case 1:if(!(l<=802)){e.next=12;break}return e.next=4,fetch("https://pokeapi.co/api/v2/pokemon/".concat(l,"/"));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,a.showPokemons.push(n);case 9:++l,e.next=1;break;case 12:a.showPokemons.map(function(e){return a.pokemons.push(e)});case 13:case"end":return e.stop()}},e)})),this.SetCountPokemons=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;a.countOfPokemons=e},this.SearchAsName=function(){},this.SearchAsFilterMenu=function(){},this.NextPage=function(){a.page++},this.BackPage=function(){a.page--},this.SettingPage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;a.page=e>0?e:1},this.SettingPokemons=Object(O.a)(x.a.mark(function e(){var t,n,l,o=arguments;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t,"/"));case 3:return n=e.sent,e.next=6,n.json();case 6:return l=e.sent,a.pokemon=l,e.next=10,fetch("https://pokeapi.co/api/v2/pokemon-species/".concat(t,"/"));case 10:return n=e.sent,e.next=13,n.json();case 13:l=e.sent,a.additionalInfo=l;case 15:case"end":return e.stop()}},e)})),this.InitialPokemons()};Object(j.h)(S,{pokemons:j.m,showPokemons:j.m,pokemon:j.m,additionalInfo:j.m,page:j.m,countOfPokemons:j.m,countOfCard:j.m,types:j.m,InitialPokemons:j.d,SetCountPokemons:j.d,SearchAsName:j.d,SearchAsFilterMenu:j.d,NextPage:j.d,BackPage:j.d,SettingPage:j.d,SettingPokemons:j.d});var I=Object(n.createContext)(new S),A=Object(h.a)(function(e){return{link:{"text-decoration":"none"}}}),B=Object(w.a)(function(e){var a=e.name,t=e.front_default,o=e.id,c=A(),r=Object(n.useContext)(I);return l.a.createElement(s.b,{to:"/pokemons/".concat(o,"/"),className:c.link,onClick:function(){return r.SettingPokemons(o)}},l.a.createElement("div",{className:"card"},l.a.createElement("div",null),l.a.createElement("div",{className:"img_of_card"},l.a.createElement("img",{src:t,alt:a})),l.a.createElement("div",{className:"text_of_card"},l.a.createElement("span",{className:"head_card"},a))))}),M=B;B.defaultProps={name:"Name of pokemon",front_default:"",id:0};var D=Object(w.a)(function(e){var a=e.number,t=Object(n.useContext)(I);return l.a.createElement("div",{className:"section",onClick:function(){t.SettingPage(a)}},a)}),H=Object(w.a)(function(){var e=Object(n.useContext)(I);return l.a.createElement("div",{className:"pages_list"},e.page>1&&l.a.createElement("div",{className:"button",onClick:e.BackPage},"Back"),function(){var a=[];1!==e.page&&(a.push(l.a.createElement(D,{number:1})),a.push(l.a.createElement("div",{className:"section"},"...")));for(var t=e.page;t<e.page+10&&t<Math.ceil(e.showPokemons.length/e.countOfPokemons);++t)a.push(l.a.createElement(D,{number:t}));return e.page!==Math.ceil(e.showPokemons.length/e.countOfPokemons)&&a.push(l.a.createElement("div",{className:"section"},"...")),a.push(l.a.createElement(D,{number:Math.ceil(e.showPokemons.length/e.countOfPokemons)})),a}().map(function(e){return e}),e.page<Math.ceil(e.countOfCard/e.countOfPokemons)&&l.a.createElement("div",{className:"button",onClick:e.NextPage},"Next"))}),F=t(128),T=t(64),W=t.n(T),G=t(65),U=t.n(G);function J(e){var a=e.filterMethod;return l.a.createElement("div",{className:"filter"},l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Pokedex"),l.a.createElement("h4",null,"Filter")),l.a.createElement("form",{onChange:a},l.a.createElement("div",{className:"check"},l.a.createElement("div",{className:"check_min"},l.a.createElement("div",null,l.a.createElement("span",null,"Min HP: "),l.a.createElement("input",{type:"number",name:"hp",id:"hp"})),l.a.createElement("div",null,l.a.createElement("span",null,"Min Attack: "),l.a.createElement("input",{type:"number",name:"attack",id:"attack"})),l.a.createElement("div",null,l.a.createElement("span",null,"Min Speed: "),l.a.createElement("input",{type:"number",name:"speed",id:"speed"})),l.a.createElement("div",null,l.a.createElement("span",null,"Min Defense: "),l.a.createElement("input",{type:"number",name:"defense",id:"defense"}))),l.a.createElement("div",{className:"types"},l.a.createElement("h3",null,"Types"),l.a.createElement("div",{className:"checkBoxes"},["normal","flying","poison","ground","bug","fire","water","grass","figting","rock","ghost","steel","electric","psychic","ice","dragon","dark","fairy","shadow"].map(function(e){return l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",name:e,id:e}),l.a.createElement("span",null,e))}))))))}var K=Object(h.a)(function(e){return{filterIcon:{"&:hover":{fill:"red",cursor:"pointer"}},filterForm:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},closeIcon:{position:"absolute",left:"95%",top:"65px",fill:"#ffffff","&:hover":{fill:"red",cursor:"pointer"}}}}),R=Object(w.a)(function(){var e=K(),a=Object(n.useContext)(I);return l.a.createElement("div",{className:"searching_form"},l.a.createElement(F.a,{id:"search",fullWidth:!0,autocomplete:"off",placeholder:"Searching Pokemons",name:"search",onChange:a.SearchAsName}),l.a.createElement(W.a,{className:e.filterIcon,onClick:function(){document.getElementsByClassName("filter_form")[0].style.display="block"}}),l.a.createElement("div",{className:"filter_form"},l.a.createElement("div",{className:e.filterForm},l.a.createElement(U.a,{className:e.closeIcon,onClick:function(){document.getElementsByClassName("filter_form")[0].style.display="none"}}),l.a.createElement(J,null))))}),z=Object(w.a)(function(e){var a=Object(n.useContext)(I);return l.a.createElement("div",{className:"start"},l.a.createElement("div",null,l.a.createElement(R,null)),l.a.createElement("div",{className:"body"},a.showPokemons.slice(a.page*a.countOfPokemons-a.countOfPokemons,a.page*a.countOfPokemons).map(function(e){return l.a.createElement(M,{name:e.name,front_default:e.sprites.front_default,id:e.id})})),l.a.createElement("div",{className:"result_of_search"},l.a.createElement("div",{className:"pagination"},l.a.createElement(H,null)),l.a.createElement("div",{className:"props"},l.a.createElement("label",null,"Show: ",l.a.createElement("select",{id:"show",onChange:function(){var e=document.getElementById("show").value;a.SetCountPokemons(e)}},l.a.createElement("option",null,"50"),l.a.createElement("option",null,"20"),l.a.createElement("option",null,"10"))))))}),$=t(86),q=Object($.a)({info:{minHeight:"70vh",marginTop:"90px","& h1, & p":{margin:"30px",width:"85%",fontFamily:"Arial, sans-serif"}}}),L=function(){var e=q();return l.a.createElement("div",{className:e.info},l.a.createElement("h1",null,"About Pokedex"),l.a.createElement("p",null,"This is Pokedex, application about Pokemons..."),l.a.createElement("h1",null,"About Pokemons"),l.a.createElement("p",null,"Every Pok\xe9mon creature has an array of stats. HP (Hit Points) is a Pok\xe9mon's life force. If your Pok\xe9mon's HP hits zero, it faints and is no longer usable in battle (it can still use Hidden Machines, though). The Speed stat decides which Pok\xe9mon will make the first move in battle. This stat can be critical in long battles. ",l.a.createElement("br",null),l.a.createElement("br",null),"Attack and Special Attack measure the strength of moves used by your Pok\xe9mon; the higher this is, the more damage you will do to opponents. Attack corresponds to moves in the Physical category, while Special Attack corresponds to Special moves.",l.a.createElement("br",null),l.a.createElement("br",null),"Similarly, Defense and Special Defense measure the ability to take attacks from other Pok\xe9mon; the higher the stat is, the fewer Hit Points will be lost when attacked. Defense corresponds to moves in the Physical category, while Special Defense corresponds to Special moves."))},Q=t(127),V=t(66),X=t.n(V),Y=Object(w.a)(function(e){var a=Object(n.useContext)(I);return l.a.createElement("div",{className:"background_card"},void 0!==a.pokemon.stats&&l.a.createElement("div",null,l.a.createElement(s.b,{to:"/",className:"back_icon"},l.a.createElement(X.a,null)),l.a.createElement(Q.a,{in:"true",timeout:{enter:500}},l.a.createElement("div",{className:"info_card"},l.a.createElement("div",{className:"head"},l.a.createElement("div",null),l.a.createElement("div",null,a.pokemon.name.charAt(0).toUpperCase()+a.pokemon.name.slice(1)," "),l.a.createElement("div",null,"#",a.pokemon.id)),l.a.createElement("div",{className:"types"},l.a.createElement("div",{className:"type one"},a.pokemon.types[0].type.name.toUpperCase()),void 0!==a.pokemon.types[1]&&l.a.createElement("div",{className:"type two"},a.pokemon.types[1].type.name.toUpperCase())),l.a.createElement("div",{className:"main_info"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:a.pokemon.sprites.front_default,alt:a.pokemon.name})),l.a.createElement("div",{className:"skils"},l.a.createElement("div",null,l.a.createElement("span",null,"HP:")," ",l.a.createElement("span",{className:"count"},a.pokemon.stats[5].base_stat)),l.a.createElement("div",null,l.a.createElement("span",null,"Attack:")," ",l.a.createElement("span",{className:"count"},a.pokemon.stats[4].base_stat)),l.a.createElement("div",null,l.a.createElement("span",null,"Speed:")," ",l.a.createElement("span",{className:"count"},a.pokemon.stats[0].base_stat)),l.a.createElement("div",null,l.a.createElement("span",null,"Defense:")," ",l.a.createElement("span",{className:"count"},a.pokemon.stats[3].base_stat)),l.a.createElement("div",null,l.a.createElement("span",null,"Sp Atk:")," ",l.a.createElement("span",{className:"count"},a.pokemon.stats[2].base_stat)),l.a.createElement("div",null,l.a.createElement("span",null,"Sp Def:")," ",l.a.createElement("span",{className:"count"},a.pokemon.stats[1].base_stat)))),l.a.createElement("div",{className:"profile"},l.a.createElement("h4",null,"Additional information"),l.a.createElement("div",{className:"info_profile"},l.a.createElement("div",null,l.a.createElement("span",{className:"prop"},"Weigth:"),l.a.createElement("span",{className:"c_profile"},a.pokemon.weight/10," kg")),l.a.createElement("div",null,l.a.createElement("span",{className:"prop"},"Height:"),l.a.createElement("span",{className:"c_profile"},a.pokemon.height/10," m")),l.a.createElement("div",null,l.a.createElement("span",{className:"prop"},"Egg Groups:"),l.a.createElement("span",{className:"c_profile"},void 0!==a.additionalInfo.egg_groups&&l.a.createElement("span",null,a.additionalInfo.egg_groups.map(function(e){return e.name+" "})))),l.a.createElement("div",null,l.a.createElement("span",{className:"prop"},"Abilities:"),l.a.createElement("span",{className:"c_profile"},a.pokemon.ailities&&a.pokemon.abilities[0].ability.name,a.pokemon.abilities[1]&&a.pokemon.abilities[1].ability.name)),l.a.createElement("div",null,l.a.createElement("span",{className:"prop"},"Capture rate:"),l.a.createElement("span",{className:"c_profile"},a.additionalInfo.capture_rate)),l.a.createElement("div",null,l.a.createElement("span",{className:"prop"},"Gender rate:"),l.a.createElement("span",{className:"c_profile"},a.additionalInfo.gender_rate)),l.a.createElement("div",null,l.a.createElement("span",{className:"prop"},"Base happiness:"),l.a.createElement("span",{className:"c_profile"},a.additionalInfo.base_happiness)),l.a.createElement("div",null,l.a.createElement("span",{className:"prop"},"Shape:"),l.a.createElement("span",{className:"c_profile"},void 0!==a.additionalInfo.shape&&l.a.createElement("span",null,a.additionalInfo.shape.name)))))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(function(){return l.a.createElement("div",null,l.a.createElement(s.a,null,l.a.createElement(y,null,l.a.createElement(r.c,null,l.a.createElement(r.a,{exact:!0,path:"/",component:z}),l.a.createElement(r.a,{path:"/about",component:L}),l.a.createElement(r.a,{path:"/pokemons/:number",component:Y})))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[70,1,2]]]);
//# sourceMappingURL=main.4bfe5125.chunk.js.map