(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"4d1c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("ffc1"),a("551c");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view",{attrs:{name:"header"}}),a("main",[a("fade-transition",{attrs:{origin:"center",mode:"out-in",duration:250}},[a("router-view")],1)],1),a("router-view",{attrs:{name:"footer"}})],1)},i=[],r=a("7c76"),o={components:{FadeTransition:r["a"]}},l=o,c=a("2877"),d=Object(c["a"])(l,s,i,!1,null,null,null),u=d.exports,p=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header-global"},[a("base-nav",{staticClass:"navbar-main",attrs:{type:"",effect:"dark",expand:""},scopedSlots:t._u([{key:"content-header",fn:function(e){var n=e.closeMenu;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-10 collapse-brand"},[a("a",{attrs:{href:"/"}},[t._v("\n                        #AJUDEUMNEGOCIOLOCAL\n                    ")])]),a("div",{staticClass:"col-2 collapse-close"},[a("close-button",{on:{click:n}})],1)])}}])},[a("router-link",{attrs:{slot:"brand",to:"/"},slot:"brand"},[a("h1",{staticClass:"display-3  text-white"},[a("img",{staticClass:"d-lg-none",attrs:{width:"300px",src:"img/logo-m.png",alt:"Ajude um Negocio Local"}}),a("img",{staticClass:"d-none d-lg-block",attrs:{width:"600px",src:"img/logo.png",alt:"Ajude um Negocio Local"}})])]),a("ul",{staticClass:"navbar-nav navbar-nav-hover align-items-lg-center"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"dropdown-item-inverse",attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSd5pfwlBez8PG-RyqCzqWyR3Sncb8pUyf0-ZKlyRsWImd7wXA/viewform",target:"blank"}},[t._v("Cadastre seu Negócio")])])]),a("ul",{staticClass:"navbar-nav align-items-lg-center ml-lg-auto"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link nav-link-icon",attrs:{href:"https://www.instagram.com/ajudeumnegociolocal",target:"_blank","data-toggle":"tooltip",title:"Follow us on Instagram"}},[a("i",{staticClass:"fa fa-instagram"}),a("span",{staticClass:"nav-link-inner--text d-lg-none"},[t._v("Instagram")])])])])],1),t._m(0)],1)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section-default"},[a("div",{staticClass:"container"},[a("div",{staticClass:"col px-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("p",{staticClass:"lead  text-white"},[t._v("Olá! Criamos esse site para ajudarmos nossos estabelecimentos favoritos durante esse momento desafiador. A ideia é doarmos um valor, que será revertido em um crédito nesses lugares até dezembro de 2020. \n"),a("br"),t._v("Na torcida para que tudo isso passe logo!")])])])])])])}],g=function(){var t,e,a=this,n=a.$createElement,s=a._self._c||n;return s("nav",{staticClass:"navbar",class:[{"navbar-expand-lg":a.expand},(t={},t["navbar-"+a.effect]=a.effect,t),{"navbar-transparent":a.transparent},(e={},e["bg-"+a.type]=a.type,e),{rounded:a.round}]},[s("div",{staticClass:"container"},[a._t("container-pre"),a._t("brand",[s("a",{staticClass:"navbar-brand",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),a.onTitleClick(t)}}},[a._v("\n                "+a._s(a.title)+"\n            ")])]),s("navbar-toggle-button",{attrs:{toggled:a.toggled,target:a.contentId},nativeOn:{click:function(t){t.stopPropagation(),a.toggled=!a.toggled}}}),a._t("container-after"),s("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:a.closeMenu,expression:"closeMenu"}],staticClass:"collapse navbar-collapse",class:{show:a.toggled},attrs:{id:a.contentId}},[s("div",{staticClass:"navbar-collapse-header"},[a._t("content-header",null,{closeMenu:a.closeMenu})],2),a._t("default",null,{closeMenu:a.closeMenu})],2)],2)])},m=[],b=(a("6b54"),a("c5f6"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":t.target,"aria-controls":t.target,"aria-expanded":t.toggled,"aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}),v=[],y={props:{target:{type:[String,Number],description:"Button target element"},toggled:{type:Boolean,default:!1,description:"Whether button is toggled"}}},_=y,C=Object(c["a"])(_,b,v,!1,null,null,null),w=C.exports,x={name:"base-nav",components:{FadeTransition:r["a"],NavbarToggleButton:w},props:{type:{type:String,default:"primary",description:"Navbar type (e.g default, primary etc)"},title:{type:String,default:"",description:"Title of navbar"},contentId:{type:[String,Number],default:Math.random().toString(),description:"Explicit id for the menu. By default it's a generated random number"},effect:{type:String,default:"dark",description:"Effect of the navbar (light|dark)"},round:{type:Boolean,default:!1,description:"Whether nav has rounded corners"},transparent:{type:Boolean,default:!1,description:"Whether navbar is transparent"},expand:{type:Boolean,default:!1,description:"Whether navbar should contain `navbar-expand-lg` class"}},data:function(){return{toggled:!1}},methods:{onTitleClick:function(t){this.$emit("title-click",t)},closeMenu:function(){this.toggled=!1}}},O=x,k=Object(c["a"])(O,g,m,!1,null,null,null),S=k.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#"+t.target,"aria-controls":t.target,"aria-expanded":t.expanded,"aria-label":"Toggle navigation"},on:{click:t.handleClick}},[a("span"),a("span")])},P=[],$={name:"close-button",props:{target:{type:[String,Number],description:"Close button target element"},expanded:{type:Boolean,description:"Whether button is expanded (aria-expanded attribute)"}},methods:{handleClick:function(t){this.$emit("click",t)}}},B=$,E=Object(c["a"])(B,j,P,!1,null,null,null),I=E.exports,A={components:{BaseNav:S,CloseButton:I}},W=A,T=Object(c["a"])(W,h,f,!1,null,null,null),D=T.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer has-cards"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center justify-content-md-between"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"copyright"},[t._v("\n                    © "+t._s(t.year)+"\n                    "),a("a",{attrs:{href:"https://www.itelios.com.br",target:"_blank",rel:"noopener"}},[t._v("Itelios")]),t._v(" & \n                    "),a("a",{attrs:{href:"https://www.creative-tim.com",target:"_blank",rel:"noopener"}},[t._v("Creative Tim")])])])])])])},z=[],M={name:"starter-footer",data:function(){return{year:(new Date).getFullYear()}}},L=M,R=Object(c["a"])(L,N,z,!1,null,null,null),q=R.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"mt-50"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"row row-grid"},[a("div",{staticClass:"col-lg-4"},[a("card",{staticClass:"border-0",attrs:{hover:"",shadow:"","body-classes":"py-5 text-center"}},[a("img",{attrs:{width:"100%",src:"https://instagram.fcgh23-1.fna.fbcdn.net/v/t51.2885-19/s320x320/66443326_1371327579709918_3742764012178243584_n.jpg?_nc_ht=instagram.fcgh23-1.fna.fbcdn.net&_nc_ohc=nHi9-OuwwmcAX9YkSdP&oh=086ff88ee54c4799950a7b6c1936cbbe&oe=5EA2E9CC"}}),a("p",{staticClass:"description mt-3"},[t._v("Gelatos artesanais")]),a("base-button",{staticClass:"mt-4",attrs:{tag:"a",href:"https://pag.ae/7VSEVURr3",type:"primary"}},[t._v("\n                                    Doe agora\n                                ")])],1)],1),a("div",{staticClass:"col-lg-4"},[a("card",{staticClass:"border-0",attrs:{hover:"",shadow:"","body-classes":"py-5 text-center"}},[a("img",{attrs:{width:"100%",src:"https://www.bananaverde.com.br/wp-content/uploads/2017/08/logo-banana-400px.png"}}),a("p",{staticClass:"description mt-3"},[t._v("Comida natural é comida saudável.")]),a("base-button",{staticClass:"mt-4",attrs:{tag:"a",href:"#",type:"success"}},[t._v("\n                                    Doe Agora\n                                ")])],1)],1)])])])])])])},U=[],V={name:"home",components:{}},G=V,J=Object(c["a"])(G,F,U,!1,null,null,null),H=J.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},Y=[],K={name:"home",components:{}},Q=K,Z=Object(c["a"])(Q,X,Y,!1,null,null,null),tt=Z.exports;n["a"].use(p["a"]);var et=new p["a"]({routes:[{path:"/",name:"main",components:{header:D,default:H,footer:q}},{path:"/doe-agora/:id",name:"doe",components:{header:D,default:tt,footer:q}}],scrollBehavior:function(t){return t.hash?{selector:t.hash}:{x:0,y:0}}}),at=(a("4d1c"),a("d5a0"),a("a4d4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.tag,{tag:"component",staticClass:"badge",class:["badge-"+t.type,t.rounded?"badge-pill":"",t.circle&&"badge-circle"]},[t._t("default",[t.icon?a("i",{class:t.icon}):t._e()])],2)}),nt=[],st={name:"badge",props:{tag:{type:String,default:"span",description:"Html tag to use for the badge."},rounded:{type:Boolean,default:!1,description:"Whether badge is of pill type"},circle:{type:Boolean,default:!1,description:"Whether badge is circle"},icon:{type:String,default:"",description:"Icon name. Will be overwritten by slot if slot is used"},type:{type:String,default:"default",description:"Badge type (primary|info|danger|default|warning|success)"}}},it=st,rt=Object(c["a"])(it,at,nt,!1,null,null,null),ot=rt.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fade-transition",[t.visible?a("div",{staticClass:"alert",class:["alert-"+t.type,{"alert-dismissible":t.dismissible}],attrs:{role:"alert"}},[t.dismissible?[t._t("default",[t.icon?a("span",{staticClass:"alert-inner--icon"},[a("i",{class:t.icon})]):t._e(),t.$slots.text?a("span",{staticClass:"alert-inner--text"},[t._t("text")],2):t._e()]),t._t("dismiss-icon",[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:t.dismissAlert}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])]:t._t("default",[t.icon?a("span",{staticClass:"alert-inner--icon"},[a("i",{class:t.icon})]):t._e(),t.$slots.text?a("span",{staticClass:"alert-inner--text"},[t._t("text")],2):t._e()])],2):t._e()])},ct=[],dt={name:"base-alert",components:{FadeTransition:r["a"]},props:{type:{type:String,default:"default",description:"Alert type"},icon:{type:String,default:"",description:"Alert icon. Will be overwritten by default slot"},dismissible:{type:Boolean,default:!1,description:"Whether alert is closes when clicking"}},data:function(){return{visible:!0}},methods:{dismissAlert:function(){this.visible=!1}}},ut=dt,pt=Object(c["a"])(ut,lt,ct,!1,null,null,null),ht=pt.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.tag,{tag:"component",staticClass:"btn",class:t.classes,attrs:{type:"button"===t.tag?t.nativeType:""},on:{click:t.handleClick}},[t.$slots.icon||t.icon&&t.$slots.default?a("span",{staticClass:"btn-inner--icon"},[t._t("icon",[a("i",{class:t.icon})])],2):t._e(),t.$slots.default?t._e():a("i",{class:t.icon}),t.$slots.icon||t.icon&&t.$slots.default?a("span",{staticClass:"btn-inner--text"},[t._t("default",[t._v("\n        "+t._s(t.text)+"\n      ")])],2):t._e(),t.$slots.icon||t.icon?t._e():t._t("default")],2)},gt=[],mt=a("bd86"),bt={name:"base-button",props:{tag:{type:String,default:"button",description:"Button tag (default -> button)"},type:{type:String,default:"default",description:"Button type (e,g primary, danger etc)"},size:{type:String,default:"",description:"Button size lg|sm"},textColor:{type:String,default:"",description:"Button text color (e.g primary, danger etc)"},nativeType:{type:String,default:"button",description:"Button native type (e.g submit,button etc)"},icon:{type:String,default:"",description:"Button icon"},text:{type:String,default:"",description:"Button text in case not provided via default slot"},outline:{type:Boolean,default:!1,description:"Whether button style is outline"},rounded:{type:Boolean,default:!1,description:"Whether button style is rounded"},iconOnly:{type:Boolean,default:!1,description:"Whether button contains only an icon"},block:{type:Boolean,default:!1,description:"Whether button is of block type"}},computed:{classes:function(){var t=[{"btn-block":this.block},{"rounded-circle":this.rounded},{"btn-icon-only":this.iconOnly},Object(mt["a"])({},"text-".concat(this.textColor),this.textColor),{"btn-icon":this.icon||this.$slots.icon},this.type&&!this.outline?"btn-".concat(this.type):"",this.outline?"btn-outline-".concat(this.type):""];return this.size&&t.push("btn-".concat(this.size)),t}},methods:{handleClick:function(t){this.$emit("click",t)}}},vt=bt,yt=Object(c["a"])(vt,ft,gt,!1,null,null,null),_t=yt.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"custom-control custom-checkbox",class:[{disabled:t.disabled},t.inlineClass]},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],staticClass:"custom-control-input",attrs:{id:t.cbId,type:"checkbox",disabled:t.disabled},domProps:{checked:Array.isArray(t.model)?t._i(t.model,null)>-1:t.model},on:{change:function(e){var a=t.model,n=e.target,s=!!n.checked;if(Array.isArray(a)){var i=null,r=t._i(a,i);n.checked?r<0&&(t.model=a.concat([i])):r>-1&&(t.model=a.slice(0,r).concat(a.slice(r+1)))}else t.model=s}}}),a("label",{staticClass:"custom-control-label",attrs:{for:t.cbId}},[t._t("default",[t.inline?a("span",[t._v(" ")]):t._e()])],2)])},wt=[];function xt(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",a="",n=0;n<t;n++)a+=e.charAt(Math.floor(Math.random()*e.length));return a}var Ot={name:"base-checkbox",model:{prop:"checked"},props:{checked:{type:[Array,Boolean],description:"Whether checkbox is checked"},disabled:{type:Boolean,description:"Whether checkbox is disabled"},inline:{type:Boolean,description:"Whether checkbox is inline"}},data:function(){return{cbId:"",touched:!1}},computed:{model:{get:function(){return this.checked},set:function(t){this.touched||(this.touched=!0),this.$emit("input",t)}},inlineClass:function(){if(this.inline)return"form-check-inline"}},mounted:function(){this.cbId=xt()}},kt=Ot,St=Object(c["a"])(kt,Ct,wt,!1,null,null,null),jt=St.exports,Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group",class:[{"input-group":t.hasIcon},{"has-danger":t.error},{focused:t.focused},{"input-group-alternative":t.alternative},{"has-label":t.label||t.$slots.label},{"has-success":!0===t.valid},{"has-danger":!1===t.valid}]},[t._t("label",[t.label?a("label",{class:t.labelClasses},[t._v("\n            "+t._s(t.label)+"\n            "),t.required?a("span",[t._v("*")]):t._e()]):t._e()]),t.addonLeftIcon||t.$slots.addonLeft?a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._t("addonLeft",[a("i",{class:t.addonLeftIcon})])],2)]):t._e(),t._t("default",[a("input",t._g(t._b({staticClass:"form-control",class:[{"is-valid":!0===t.valid},{"is-invalid":!1===t.valid},t.inputClasses],attrs:{"aria-describedby":"addon-right addon-left"},domProps:{value:t.value}},"input",t.$attrs,!1),t.listeners))],null,t.slotData),t.addonRightIcon||t.$slots.addonRight?a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text"},[t._t("addonRight",[a("i",{class:t.addonRightIcon})])],2)]):t._e(),t._t("infoBlock"),t._t("helpBlock",[t.error?a("div",{staticClass:"text-danger invalid-feedback",class:{"mt-2":t.hasIcon},staticStyle:{display:"block"}},[t._v("\n            "+t._s(t.error)+"\n        ")]):t._e()])],2)},$t=[];a("8e6e"),a("ac6a"),a("cadf"),a("456d");function Bt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function Et(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Bt(Object(a),!0).forEach((function(e){Object(mt["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Bt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var It={inheritAttrs:!1,name:"base-input",props:{required:{type:Boolean,description:"Whether input is required (adds an asterix *)"},valid:{type:Boolean,description:"Whether is valid",default:void 0},alternative:{type:Boolean,description:"Whether input is of alternative layout"},label:{type:String,description:"Input label (text before input)"},error:{type:String,description:"Input error (below input)"},labelClasses:{type:String,description:"Input label css classes"},inputClasses:{type:String,description:"Input css classes"},value:{type:[String,Number],description:"Input value"},addonRightIcon:{type:String,description:"Addon right icon"},addonLeftIcon:{type:String,description:"Addont left icon"}},data:function(){return{focused:!1}},computed:{listeners:function(){return Et({},this.$listeners,{input:this.updateValue,focus:this.onFocus,blur:this.onBlur})},slotData:function(){return Et({focused:this.focused},this.listeners)},hasIcon:function(){var t=this.$slots,e=t.addonRight,a=t.addonLeft;return void 0!==e||void 0!==a||void 0!==this.addonRightIcon||void 0!==this.addonLeftIcon}},methods:{updateValue:function(t){var e=t.target.value;this.$emit("input",e)},onFocus:function(t){this.focused=!0,this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.$emit("blur",t)}}},At=It,Wt=Object(c["a"])(At,Pt,$t,!1,null,null,null),Tt=Wt.exports,Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"pagination",class:[t.size&&"pagination-"+t.size,t.align&&"justify-content-"+t.align]},[a("li",{staticClass:"page-item prev-page",class:{disabled:1===t.value}},[a("a",{staticClass:"page-link",attrs:{"aria-label":"Previous"},on:{click:t.prevPage}},[t._m(0)])]),t._l(t.range(t.minPage,t.maxPage),(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.value===e}},[a("a",{staticClass:"page-link",on:{click:function(a){return t.changePage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item next-page",class:{disabled:t.value===t.totalPages}},[a("a",{staticClass:"page-link",attrs:{"aria-label":"Next"},on:{click:t.nextPage}},[t._m(1)])])],2)},Nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fa fa-angle-left",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})])}],zt={name:"base-pagination",props:{pageCount:{type:Number,default:0,description:"Pagination page count. This should be specified in combination with perPage"},perPage:{type:Number,default:10,description:"Pagination per page. Should be specified with total or pageCount"},total:{type:Number,default:0,description:"Can be specified instead of pageCount. The page count in this case will be total/perPage"},value:{type:Number,default:1,description:"Pagination value"},size:{type:String,default:"",description:"Pagination size"},align:{type:String,default:"",description:"Pagination alignment (e.g center|start|end)"}},computed:{totalPages:function(){return this.pageCount>0?this.pageCount:this.total>0?Math.ceil(this.total/this.perPage):1},pagesToDisplay:function(){return this.totalPages>0&&this.totalPages<this.defaultPagesToDisplay?this.totalPages:this.defaultPagesToDisplay},minPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2),e=t+this.value;return e>this.totalPages?this.totalPages-this.pagesToDisplay+1:this.value-t}return 1},maxPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2),e=t+this.value;return e<this.totalPages?e:this.totalPages}return this.pagesToDisplay}},data:function(){return{defaultPagesToDisplay:5}},methods:{range:function(t,e){for(var a=[],n=t;n<=e;n++)a.push(n);return a},changePage:function(t){this.$emit("input",t)},nextPage:function(){this.value<this.totalPages&&this.$emit("input",this.value+1)},prevPage:function(){this.value>1&&this.$emit("input",this.value-1)}},watch:{perPage:function(){this.$emit("input",1)},total:function(){this.$emit("input",1)}}},Mt=zt,Lt=Object(c["a"])(Mt,Dt,Nt,!1,null,null,null),Rt=Lt.exports,qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"progress-wrapper"},[a("div",{class:"progress-"+t.type},[a("div",{staticClass:"progress-label"},[t._t("label",[a("span",[t._v(t._s(t.label))])])],2),a("div",{staticClass:"progress-percentage"},[t._t("default",[a("span",[t._v(t._s(t.value)+"%")])])],2)]),a("div",{staticClass:"progress",style:"height: "+t.height+"px"},[a("div",{staticClass:"progress-bar",class:t.computedClasses,style:"width: "+t.value+"%;",attrs:{role:"progressbar","aria-valuenow":t.value,"aria-valuemin":"0","aria-valuemax":"100"}})])])},Ft=[],Ut={name:"base-progress",props:{striped:{type:Boolean,description:"Whether progress is striped"},animated:{type:Boolean,description:"Whether progress is animated (works only with `striped` prop together)"},label:{type:String,description:"Progress label (shown on the left above progress)"},height:{type:Number,default:8,description:"Progress line height"},type:{type:String,default:"default",description:"Progress type (e.g danger, primary etc)"},value:{type:Number,default:0,validator:function(t){return t>=0&&t<=100},description:"Progress value"}},computed:{computedClasses:function(){return[{"progress-bar-striped":this.striped},{"progress-bar-animated":this.animated},Object(mt["a"])({},"bg-".concat(this.type),this.type)]}}},Vt=Ut,Gt=Object(c["a"])(Vt,qt,Ft,!1,null,null,null),Jt=Gt.exports,Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"custom-control custom-radio",class:[t.inlineClass,{disabled:t.disabled}]},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],staticClass:"custom-control-input",attrs:{id:t.cbId,type:"radio",disabled:t.disabled},domProps:{value:t.name,checked:t._q(t.model,t.name)},on:{change:function(e){t.model=t.name}}}),a("label",{staticClass:"custom-control-label",attrs:{for:t.cbId}},[t._t("default")],2)])},Xt=[],Yt={name:"base-radio",props:{name:{type:[String,Number],description:"Radio label"},disabled:{type:Boolean,description:"Whether radio is disabled"},value:{type:[String,Boolean],description:"Radio value"},inline:{type:Boolean,description:"Whether radio is inline"}},data:function(){return{cbId:""}},computed:{model:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},inlineClass:function(){return this.inline?"form-check-inline":""}},mounted:function(){this.cbId=xt()}},Kt=Yt,Qt=Object(c["a"])(Kt,Ht,Xt,!1,null,null,null),Zt=Qt.exports,te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-slider-container"},[a("div",{ref:"slider",staticClass:"input-slider",class:["slider-"+t.type],attrs:{disabled:t.disabled}})])},ee=[],ae=a("e9fa"),ne=a.n(ae);function se(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function ie(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?se(Object(a),!0).forEach((function(e){Object(mt["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):se(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var re={name:"base-slider",props:{value:{type:[String,Array,Number],description:"Slider value"},disabled:{type:Boolean,description:"Whether slider is disabled"},range:{type:Object,default:function(){return{min:0,max:100}},description:"Slider range (defaults to 0-100)"},type:{type:String,default:"",description:"Slider type (e.g primary, danger etc)"},options:{type:Object,default:function(){return{}},description:"noUiSlider options"}},computed:{connect:function(){return Array.isArray(this.value)||[!0,!1]}},data:function(){return{slider:null}},methods:{createSlider:function(){var t=this;ne.a.create(this.$refs.slider,ie({start:this.value,connect:this.connect,range:this.range},this.options));var e=this.$refs.slider.noUiSlider;e.on("slide",(function(){var a=e.get();a!==t.value&&t.$emit("input",a)}))}},mounted:function(){this.createSlider()},watch:{value:function(t,e){var a=this.$refs.slider.noUiSlider,n=a.get();t!==e&&n!==t&&(Array.isArray(n)&&Array.isArray(t)?e.length===t.length&&e.every((function(e,a){return e===t[a]}))&&a.set(t):a.set(t))}}},oe=re,le=Object(c["a"])(oe,te,ee,!1,null,null,null),ce=le.exports,de=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"custom-toggle"},[a("input",t._g(t._b({directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.model)?t._i(t.model,null)>-1:t.model},on:{change:function(e){var a=t.model,n=e.target,s=!!n.checked;if(Array.isArray(a)){var i=null,r=t._i(a,i);n.checked?r<0&&(t.model=a.concat([i])):r>-1&&(t.model=a.slice(0,r).concat(a.slice(r+1)))}else t.model=s}}},"input",t.$attrs,!1),t.$listeners)),a("span",{staticClass:"custom-toggle-slider rounded-circle"})])},ue=[],pe={name:"base-switch",inheritAttrs:!1,props:{value:{type:Boolean,default:!1,description:"Switch value"}},computed:{model:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},he=pe,fe=Object(c["a"])(he,de,ue,!1,null,null,null),ge=fe.exports,me=function(){var t,e,a,n=this,s=n.$createElement,i=n._self._c||s;return i("div",{staticClass:"card",class:[{"card-lift--hover":n.hover},{shadow:n.shadow},(t={},t["shadow-"+n.shadowSize]=n.shadowSize,t),(e={},e["bg-gradient-"+n.gradient]=n.gradient,e),(a={},a["bg-"+n.type]=n.type,a)]},[n.$slots.header?i("div",{staticClass:"card-header",class:n.headerClasses},[n._t("header")],2):n._e(),n.noBody?n._e():i("div",{staticClass:"card-body",class:n.bodyClasses},[n._t("default")],2),n.noBody?n._t("default"):n._e(),n.$slots.footer?i("div",{staticClass:"card-footer",class:n.footerClasses},[n._t("footer")],2):n._e()],2)},be=[],ve={name:"card",props:{type:{type:String,description:"Card type"},gradient:{type:String,description:"Card background gradient type (warning,danger etc)"},hover:{type:Boolean,description:"Whether card should move on hover"},shadow:{type:Boolean,description:"Whether card has shadow"},shadowSize:{type:String,description:"Card shadow size"},noBody:{type:Boolean,default:!1,description:"Whether card should have wrapper body class"},bodyClasses:{type:[String,Object,Array],description:"Card body css classes"},headerClasses:{type:[String,Object,Array],description:"Card header css classes"},footerClasses:{type:[String,Object,Array],description:"Card footer css classes"}}},ye=ve,_e=Object(c["a"])(ye,me,be,!1,null,null,null),Ce=_e.exports,we=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"icon icon-shape",class:[t.size&&"icon-"+t.size,t.type&&"icon-shape-"+t.type,t.gradient&&"bg-gradient-"+t.gradient,t.shadow&&"shadow",t.rounded&&"rounded-circle",t.color&&"text-"+t.color]},[t._t("default",[a("i",{class:t.name})])],2)},xe=[],Oe={name:"icon",props:{name:{type:String,default:"",description:"Icon name"},size:{type:String,default:"",description:"Icon size"},type:{type:String,default:"",description:"Icon type (primary, warning etc)"},gradient:{type:String,default:"",description:"Icon gradient type (primary, warning etc)"},color:{type:String,default:"",description:"Icon color (primary, warning etc)"},shadow:{type:Boolean,default:!1,description:"Whether icon has shadow"},rounded:{type:Boolean,default:!1,description:"Whether icon is rounded"}}},ke=Oe,Se=Object(c["a"])(ke,we,xe,!1,null,null,null),je=Se.exports,Pe={install:function(t){t.component(ot.name,ot),t.component(ht.name,ht),t.component(_t.name,_t),t.component(Tt.name,Tt),t.component(jt.name,jt),t.component(Rt.name,Rt),t.component(Jt.name,Jt),t.component(Zt.name,Zt),t.component(ce.name,ce),t.component(ge.name,ge),t.component(Ce.name,Ce),t.component(je.name,je)}},$e={bind:function(t,e,a){t.clickOutsideEvent=function(n){t==n.target||t.contains(n.target)||a.context[e.expression](n)},document.body.addEventListener("click",t.clickOutsideEvent)},unbind:function(t){document.body.removeEventListener("click",t.clickOutsideEvent)}},Be={install:function(t){t.directive("click-outside",$e)}},Ee=Be,Ie=a("caf9"),Ae={install:function(t){t.use(Pe),t.use(Ee),t.use(Ie["a"])}};
/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
n["a"].config.productionTip=!1,n["a"].use(Ae),new n["a"]({router:et,render:function(t){return t(u)}}).$mount("#app")},a4d4:function(t,e,a){},d5a0:function(t,e,a){}});
//# sourceMappingURL=app.65e48a37.js.map