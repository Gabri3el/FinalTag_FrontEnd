(function(e){function t(t){for(var r,s,i=t[0],c=t[1],l=t[2],d=0,m=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},o=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1099:function(e,t,a){},"12ae":function(e,t,a){e.exports=a.p+"img/loading.8a7630ca.gif"},2175:function(e,t,a){"use strict";a("5ce0")},"2dd6":function(e,t,a){"use strict";a("1099")},"32a6":function(e,t,a){},"45c1":function(e,t,a){"use strict";a("d27f")},"4b57":function(e,t,a){"use strict";a("df2f")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("7f10");var r=a("2b0e"),n=a("2f62"),o=a("bc3a"),s=a.n(o);r["default"].use(n["a"]);var i=new n["a"].Store({state:{isMenuVisiable:!0,user:null},mutations:{toggleMenu:function(e,t){e.isMenuVisiable=void 0===t?!e.isMenuVisiable:t},setUser:function(e,t){e.user=t,t?s.a.defaults.headers.common["Authorization"]="bearer ".concat(t.token):delete s.a.defaults.headers.common["Authorization"]}}}),c=a("8c4f"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("pageTitle",{attrs:{icon:"fa fa-home",main:"Bem Vindo a Final Tag",sub:"Desenvolvido de um desenvolvedor para outros desenvolvedores"}}),a("div",{staticClass:"container"},[a("h4",[e._v("Esse site foi criado para passar meus estudos e projetos para auxiliar novos desenvolvedores")]),a("cite",[e._v('"Não é a linguagem de programação que define o programador, mas sim sua lógica."')]),a("hr"),a("h5",[e._v("Essa frase parece até cliche, mas a pratica leva a perfeição, abaixo você pode acompanhar minha trajetoria, e a esquerda poderá ver todos os meus artigos de estudos.")]),a("br"),a("br"),a("br"),a("h1",[e._v("Gabriel Merino")]),a("p",[e._v("Desenvolvedor Junior")]),a("p",[e._v("Cursando o ultimo semestre de Ciencias da Computação")]),e._m(0),a("hr"),a("h4",[e._v("JOBS: ")]),a("P",[e._v("Desenvolvedor Junior na A5 Solutions | 09/2020 - atualmente")]),e._m(1),a("cite",[e._v("Front-End: Javascript, HTML5 & CSS3, Jquery, ReactJs")]),a("br"),a("br"),a("P",[e._v("Estagiario na A5 Solutions | 02/2020 - 09/2020")]),e._m(2),a("cite",[e._v("Front-End: Javascript, HTML5 & CSS3")])],1)],1)},u=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Linguagens de programação: "),a("cite",[e._v('"Javascript, Java, Vuejs, ReactJS, Angular, NodeJs"')])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Skills: "),a("cite",[e._v("Back-End: Java, SpringBoot, Avaya, Convergys, C#")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Skills: "),a("cite",[e._v("Back-End: Java Avaya, Convergys")])])}],d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pageTitle"},[a("h1",[e.icon?a("i",{class:e.icon}):e._e(),e._v(e._s(e.main))]),a("h2",[e.icon?a("i",{class:e.icon}):e._e(),e._v(e._s(e.sub))]),a("hr")])},m=[],f={name:"PageTitle",props:["icon","main","sub"]},p=f,v=(a("a405"),a("2877")),g=Object(v["a"])(p,d,m,!1,null,null,null),h=g.exports,b={name:"Home",components:{pageTitle:h}},_=b,y=Object(v["a"])(_,l,u,!1,null,null,null),w=y.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"adminPages"},[a("pageTitle",{attrs:{icon:"fa fa-cogs",main:"Administração",sub:"Novos Artigos e Categorias"}}),a("div",{staticClass:"adminPagesTabs"},[a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{card:""}},[a("b-tab",{attrs:{title:"Artigos",active:""}},[a("ArticleAdmin")],1),a("b-tab",{attrs:{title:"Categorias"}},[a("CategoryAdmin")],1),a("b-tab",{attrs:{title:"Usuarios"}},[a("UserAdmin")],1)],1)],1)],1)],1)},x=[],k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"articleAdmin"},[a("b-form",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.article.id,expression:"article.id"}],attrs:{id:"article-id",type:"hidden"},domProps:{value:e.article.id},on:{input:function(t){t.target.composing||e.$set(e.article,"id",t.target.value)}}}),a("b-row",[a("b-col",{attrs:{xs:"12"}},[a("b-form-group",{attrs:{label:"Nome","label-for":"article-name"}},[a("b-form-input",{attrs:{id:"article-name",type:"text",required:"",readonly:"remove"==e.mode,placeholder:"Informe o nome do Artigo"},model:{value:e.article.name,callback:function(t){e.$set(e.article,"name",t)},expression:"article.name"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{xs:"12"}},[a("b-form-group",{attrs:{label:"Descrição","label-for":"article-description"}},[a("b-form-input",{attrs:{id:"article-description",type:"text",required:"",readonly:"remove"==e.mode,placeholder:"Informe a descrição"},model:{value:e.article.description,callback:function(t){e.$set(e.article,"description",t)},expression:"article.description"}})],1)],1)],1),a("b-row",["save"===e.mode?a("b-col",{attrs:{xs:"12"}},[a("b-form-group",{attrs:{label:"Imagem: (URL)","label-for":"article-imageUrl"}},[a("b-form-input",{attrs:{id:"article-imageUrl",type:"text",required:"",readonly:"remove"==e.mode,placeholder:"Informe a URL da imagem..."},model:{value:e.article.imageUrl,callback:function(t){e.$set(e.article,"imageUrl",t)},expression:"article.imageUrl"}})],1)],1):e._e()],1),a("b-row",{directives:[{name:"show",rawName:"v-show",value:"save"===e.mode,expression:"mode ==='save' "}]},[a("b-col",{attrs:{xs:"12"}},[a("b-form-group",{attrs:{label:"Categoria:","label-for":"article-categoryId"}},[a("b-form-select",{attrs:{id:"article-categoryId",options:e.categories},model:{value:e.article.categoryId,callback:function(t){e.$set(e.article,"categoryId",t)},expression:"article.categoryId"}})],1)],1)],1),a("b-row",{directives:[{name:"show",rawName:"v-show",value:"save"===e.mode,expression:"mode ==='save' "}]},[a("b-col",{attrs:{xs:"12"}},[a("b-form-group",{attrs:{label:"Autor:","label-for":"article-userId"}},[a("b-form-select",{attrs:{id:"article-userId",options:e.users},model:{value:e.article.userId,callback:function(t){e.$set(e.article,"userId",t)},expression:"article.userId"}})],1)],1)],1),"save"===e.mode?a("b-form-group",{attrs:{label:"Counteúdo","label-for":"article-content"}},[a("VueEditor",{attrs:{placeholder:"Informe o Conteúdo do artigo!!"},model:{value:e.article.content,callback:function(t){e.$set(e.article,"content",t)},expression:"article.content"}})],1):e._e(),"save"===e.mode?a("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?a("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Excluir")]):e._e(),a("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),e._l(e.articles,(function(t){return a("div",{key:t.id},[e._v(" "+e._s(t.id)+" "+e._s(t.name)+" "+e._s(t.description)+" "),a("b-button",{staticClass:"mr-2",attrs:{variant:"warning"},on:{click:function(t){return e.loadArticle()}}},[a("i",{staticClass:"fa fa-pencil"})]),a("b-button",{attrs:{variant:"danger"}},[a("i",{staticClass:"fa fa-trash",on:{click:function(t){return e.loadUser("remove")}}})])],1)})),a("b-pagination",{attrs:{size:"md","total-rows":e.count,"per-page":e.limit},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],2)},A=[],$=(a("99af"),a("d81d"),a("b0c0"),a("b3e9")),S="__FinalTagUser",I="https://tagfinalbackend.herokuapp.com";function E(e){e&&e.response&&e.response.data?r["default"].toasted.global.defaultError({msg:e.response.data}):"string"===typeof e?r["default"].toasted.global.defaultError({msg:e}):r["default"].toasted.global.defaultError()}var U={name:"ArticleAdmin",components:{VueEditor:$["VueEditor"]},data:function(){return{mode:"save",article:{},articles:[],categories:[],users:[],page:1,limit:0,count:0,fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"description",label:"Descrição",sortable:!0},{key:"actions",label:"Ações"}]}},methods:{loadArticles:function(){var e=this,t="".concat(I,"/articles?page=").concat(this.page);s.a.get(t).then((function(t){e.articles=t.data.data,e.count=t.data.count,e.limit=t.data.limit}))},reset:function(){this.mode="save",this.article={},this.loadArticles()},save:function(){var e=this,t=this.article.id?"put":"post",a=this.article.id?"/".concat(this.article.id):"";s.a[t]("".concat(I,"/articles").concat(a),this.article).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(E)},remove:function(){var e=this,t=this.article.id;s.a.delete("".concat(I,"/articles/").concat(t)).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(E)},loadArticle:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=a,s.a.get("".concat(I,"/articles/").concat(articles.id)).then((function(e){return t.article=e.data}))},loadCategories:function(){var e=this,t="".concat(I,"/categories");s.a.get(t).then((function(t){e.categories=t.data.map((function(e){return{value:e.id,text:e.path}}))}))},loadUser:function(){var e=this,t="".concat(I,"/users");s.a.get(t).then((function(t){e.users=t.data.map((function(e){return{value:e.id,text:"".concat(e.name," - ").concat(e.email)}}))}))}},watch:{page:function(){this.loadArticles()}},mounted:function(){this.loadUser(),this.loadCategories(),this.loadArticles()}},O=U,P=Object(v["a"])(O,k,A,!1,null,null,null),j=P.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"categoryAdmin"},[a("b-form",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.category.id,expression:"category.id"}],attrs:{id:"category-id",type:"hidden"},domProps:{value:e.category.id},on:{input:function(t){t.target.composing||e.$set(e.category,"id",t.target.value)}}}),a("b-row",[a("b-col",{attrs:{xs:"12"}},[a("b-form-group",{attrs:{label:"Nome","label-for":"category-name"}},[a("b-form-input",{attrs:{id:"category-name",type:"text",required:"",readonly:"remove"==e.mode,placeholder:"Informe o Usuario"},model:{value:e.category.name,callback:function(t){e.$set(e.category,"name",t)},expression:"category.name"}})],1)],1)],1),a("b-row",{directives:[{name:"show",rawName:"v-show",value:"save"===e.mode,expression:"mode ==='save' "}]},[a("b-col",{attrs:{xs:"12"}},[a("b-form-group",{attrs:{label:"Categoria Pai","label-for":"category-parentId"}},[a("b-form-select",{attrs:{id:"category-parentId",options:e.categories},model:{value:e.category.parentId,callback:function(t){e.$set(e.category,"parentId",t)},expression:"category.parentId"}})],1)],1)],1),"save"===e.mode?a("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?a("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Excluir")]):e._e(),a("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),a("b-table",{attrs:{hover:"",striped:"",items:e.categories,fields:e.fields},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{variant:"warning"},on:{click:function(a){return e.loadCategory(t.item)}}},[a("i",{staticClass:"fa fa-pencil"})]),a("b-button",{attrs:{variant:"danger"},on:{click:function(a){return e.loadCategory(t.item,"remove")}}},[a("i",{staticClass:"fa fa-trash"})])]}}])})],1)},T=[],N=a("5530"),D={name:"CategoryAdmin",data:function(){return{mode:"save",category:{},categories:[],fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"path",label:"Caminho",sortable:!0},{key:"actions",label:"Ações"}]}},methods:{loadcategories:function(){var e=this,t="".concat(I,"/categories");s.a.get(t).then((function(t){e.categories=t.data.map((function(e){return Object(N["a"])(Object(N["a"])({},e),{},{value:e.id,text:e.path})}))}))},reset:function(){this.mode="save",this.category={},this.loadcategories()},save:function(){var e=this,t="".concat(I,"/categories"),a=this.category.id?"put":"post",r=this.category.id?"/".concat(this.category.id):"";s.a[a]("".concat(t).concat(r),this.category).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(E)},remove:function(){var e=this,t=this.category.id;s.a.delete("".concat(I,"/categories/").concat(t)).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(E)},loadCategory:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=t,this.category={id:e.id,name:e.name,parentId:e.parentId}}},mounted:function(){this.loadcategories()}},B=D,J=Object(v["a"])(B,M,T,!1,null,null,null),F=J.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"userAdmin"},[a("b-form",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.id,expression:"user.id"}],attrs:{id:"user-id",type:"hidden"},domProps:{value:e.user.id},on:{input:function(t){t.target.composing||e.$set(e.user,"id",t.target.value)}}}),a("b-row",[a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Nome","label-for":"user-name"}},[a("b-form-input",{attrs:{id:"user-name",type:"text",required:"",readonly:"remove"==e.mode,placeholder:"Informe o Usuario"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1)],1),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"E-mail","label-for":"user-email"}},[a("b-form-input",{attrs:{id:"user-email",type:"text",required:"",readonly:"remove"==e.mode,placeholder:"Informe o E-mail"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1)],1)],1),a("b-form-checkbox",{directives:[{name:"show",rawName:"v-show",value:"save"===e.mode,expression:"mode === 'save'"}],staticClass:"mt-3 mb-3",attrs:{id:"user-admin"},model:{value:e.user.admin,callback:function(t){e.$set(e.user,"admin",t)},expression:"user.admin"}},[e._v(" Administrador? ")]),a("b-row",{directives:[{name:"show",rawName:"v-show",value:"save"===e.mode,expression:"mode === 'save'"}]},[a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Senha","label-for":"user-password"}},[a("b-form-input",{attrs:{id:"user-password",type:"password",required:"",placeholder:"Informe a senha do Usuario"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1)],1),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Confirme sua senha","label-for":"user-confirmPassword"}},[a("b-form-input",{attrs:{id:"user-confirmPassword",type:"password",required:"",placeholder:"Confirme sua senha"},model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}})],1)],1)],1),"save"===e.mode?a("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?a("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Excluir")]):e._e(),a("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),a("b-table",{attrs:{hover:"",striped:"",items:e.users,fields:e.fields},scopedSlots:e._u([{key:"actions",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{variant:"warning"},on:{click:function(a){return e.loadUser(t.item)}}},[a("i",{staticClass:"fa fa-pencil"})]),a("b-button",{attrs:{variant:"danger"},on:{click:function(a){return e.loadUser(t.item,"remove")}}},[a("i",{staticClass:"fa fa-trash"})])]}}])})],1)},V=[],R=a("1da1"),L=(a("96cf"),{name:"UserAdmin",data:function(){return{mode:"save",user:{},users:[],fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"email",label:"E-mail",sortable:!0},{key:"admin",label:"Administrador",sortable:!0,formatter:function(e){return e?"Sim":"Não"}},{key:"actions",label:"Ações"}]}},methods:{loadUsers:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a="".concat(I,"/users"),t.next=3,s.a.get(a).then((function(t){e.users=t.data}));case 3:case"end":return t.stop()}}),t)})))()},reset:function(){this.mode="save",this.user={},this.loadUsers()},save:function(){var e=this,t=this.user.id?"put":"post",a=this.user.id?"/".concat(this.user.id):"";s.a[t]("".concat(I,"/users").concat(a),this.user).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(E)},remove:function(){var e=this,t=this.user.id;s.a.delete("".concat(I,"/users/").concat(t)).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(E)},loadUser:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=t,this.user=Object(N["a"])({},e)}},mounted:function(){this.loadUsers()}}),H=L,G=Object(v["a"])(H,q,V,!1,null,null,null),z=G.exports,K={name:"AdminPages",components:{pageTitle:h,ArticleAdmin:j,CategoryAdmin:F,UserAdmin:z}},Q=K,W=Object(v["a"])(Q,C,x,!1,null,null,null),X=W.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"articlesByCategory"},[a("PageTitle",{attrs:{icon:"fa fa-folder-o",main:e.category.name,sub:"Categoria"}}),a("ul",e._l(e.articles,(function(e){return a("li",{key:e.id},[a("ArticleItem",{attrs:{article:e}})],1)})),0),a("div",{staticClass:"loadMore"},[e.loadMore?a("b-button",{staticClass:"btn btn-lg btn-outline-primary",on:{click:e.getArticle}},[e._v(" Carregar Mais Artigos ")]):e._e()],1)],1)},Z=[],ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"articleItem"},[r("router-link",{attrs:{to:{name:"ArticleById",params:{id:e.article.id}}}},[r("div",{staticClass:"articleItemImage",attrs:{"d-none":"","d-sm-block":""}},[e.article.imageUrl?r("img",{attrs:{src:e.article.imageUrl,height:"150",width:"150",alt:"Article Image"}}):r("img",{attrs:{src:a("7395"),height:"150",width:"150",alt:"Article Image"}})]),r("div",{staticClass:"articleItemInfo"},[r("h2",[e._v(e._s(e.article.name))]),r("p",[e._v(e._s(e.article.description))]),r("span",[r("cite",[e._v("Autor: "+e._s(e.article.Author)+" ")])])])])],1)},te=[],ae={name:"ArticleItem",props:["article"]},re=ae,ne=(a("fb2c"),Object(v["a"])(re,ee,te,!1,null,null,null)),oe=ne.exports,se={name:"ArticlesByCategory",components:{PageTitle:h,ArticleItem:oe},data:function(){return{category:{},articles:[],page:1,loadMore:!0}},methods:{getCategory:function(){var e=this,t="".concat(I,"/categories/").concat(this.category.id);s()(t).then((function(t){return e.category=t.data}))},getArticle:function(){var e=this,t="".concat(I,"/categories/").concat(this.category.id,"/articles?page=").concat(this.page);s()(t).then((function(t){e.articles=e.articles.concat(t.data),e.page++,0===t.data.length&&(e.loadMore=!1)}))}},watch:{$route:function(e){this.category.id=e.params.id,this.articles=[],this.page=1,this.loadMore=!0,this.getCategory(),this.getArticle()}},mounted:function(){this.category.id=this.$route.params.id,this.getCategory(),this.getArticle()}},ie=se,ce=(a("cb32"),Object(v["a"])(ie,Y,Z,!1,null,null,null)),le=ce.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"articleById"},[a("PageTitle",{attrs:{icon:"fa fa-file-o",main:e.article.name,sub:e.article.description}}),a("div",{staticClass:"articleContent",domProps:{innerHTML:e._s(e.article.content)}})],1)},de=[],me={name:"ArticleById",components:{PageTitle:h},data:function(){return{article:{}}},mounted:function(){var e=this,t="".concat(I,"/articles/").concat(this.$route.params.id);s.a.get(t).then((function(t){return e.article=t.data}))}},fe=me,pe=(a("45c1"),Object(v["a"])(fe,ue,de,!1,null,null,null)),ve=pe.exports,ge=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"authContent"},[r("div",{staticClass:"authModal"},[r("img",{attrs:{src:a("9d64"),alt:"logo",width:"200"}}),r("hr"),r("div",{staticClass:"authTitle"},[e._v(" "+e._s(e.showSignUp?"Cadastro":"login")+" ")]),e.showSignUp?r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],attrs:{type:"text",placeholder:"Nome"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}):e._e(),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],attrs:{type:"text",placeholder:"E-mail"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"Senha"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.showSignUp?r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirmPassword,expression:"user.confirmPassword"}],attrs:{type:"text",placeholder:"Confirme sua senha"},domProps:{value:e.user.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.user,"confirmPassword",t.target.value)}}}):e._e(),e.showSignUp?r("b-button",{on:{click:e.signUp}},[e._v("Registrar")]):r("b-button",{on:{click:e.signIn}},[e._v("Entrar")]),r("a",{attrs:{href:""},on:{click:function(t){t.preventDefault(),e.showSignUp=!e.showSignUp}}},[e.showSignUp?r("span",[e._v("Já tem cadastro? Acesse o Login!")]):r("span",[e._v("Não tem cadastro? Acesse aqui!")])])],1)])},he=[],be={name:"Auth",data:function(){return{showSignUp:!1,user:{}}},methods:{signIn:function(){var e=this;s.a.post("".concat(I,"/signin"),this.user).then((function(t){e.$store.commit("setUser",t.data),localStorage.setItem(S,JSON.stringify(t.data)),e.$router.push({path:"/"})})).catch(E)},signUp:function(){var e=this;s.a.post("".concat(I,"/signup"),this.user).then((function(){e.$toasted.global.defaultSuccess(),e.user={}})).catch(E)}}},_e=be,ye=(a("6668"),Object(v["a"])(_e,ge,he,!1,null,null,null)),we=ye.exports;r["default"].use(c["a"]);var Ce=[{name:"Home",path:"/",component:w},{name:"AdminPages",path:"/admin",component:X,meta:{requiresAdmin:!0}},{name:"ArticleByCategory",path:"/categories/:id/articles",component:le},{name:"ArticleById",path:"/articles/:id",component:ve},{name:"Auth",path:"/Auth",component:we}],xe=new c["a"]({mode:"history",routes:Ce});xe.beforeEach((function(e,t,a){var r=localStorage.getItem(S);if(e.matched.some((function(e){return e.meta.requiresAdmin}))){var n=JSON.parse(r);n&&n.admin?a():a({path:"/"})}else a()}));var ke=xe,Ae=(a("f9e3"),a("2dd8"),a("5f5b"));r["default"].use(Ae["a"]);var $e=a("a65d"),Se=a.n($e);r["default"].use(Se.a,{iconPack:"fontawesome",duration:3e3}),r["default"].toasted.register("defaultSuccess",(function(e){return e.msg?e.msg:"Operação Realizada com Sucesso!"}),{type:"success",icon:"check"}),r["default"].toasted.register("defaultError",(function(e){return e.msg?e.msg:"Oops.. Erro Inesperado!"}),{type:"error",icon:"times"});var Ie=a("660e");r["default"].use(Ie["a"],{breakpoints:{xs:576,sm:768,md:960,lg:1140,xl:1/0}});var Ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{hideMenu:!e.isMenuVisiable},attrs:{id:"app"}},[a("Header",{attrs:{title:"Final Tag | Gabriel Merino",toggleBtnMenu:!0,hideUserDropdown:!e.user}}),a("Menu"),e.validatingToken?a("Loading"):a("Content"),a("Footer")],1)},Ue=[],Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[a("a",{staticClass:"toggle",on:{click:e.toggleBtnMenu}},[a("i",{staticClass:"fa fa-lg",class:e.icon})]),a("h1",{staticClass:"title"},[a("i",{staticClass:"fa fa-angle-left"},[a("router-link",{attrs:{to:"/"}},[e._v(e._s("/"+e.title))])],1)]),e.hideUserDropdown?a("router-link",{attrs:{to:"/auth"}},[a("b-button",{attrs:{variant:"primary"}},[e._v("Login/Registro")])],1):a("UserDropDown")],1)},Pe=[],je=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"userDropdown"},[a("div",{staticClass:"userBtn"},[a("span",{staticClass:"d-none d-sm-block"},[e._v(e._s(e.user.name))]),a("div",{staticClass:"userDropdownImg"},[a("Gravatar",{attrs:{email:e.user.email,alt:"user"}})],1),a("i",{staticClass:"fa fa-angle-down"})]),a("div",{staticClass:"userDropdownContent"},[e.user.admin?a("a",{attrs:{href:"/admin"}},[a("i",{staticClass:"fa fa-cogs"}),e._v("Admistração")]):e._e(),a("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[a("i",{staticClass:"fa fa-cogs"}),e._v("Desconectar")])])])},Me=[],Te=a("e06a"),Ne=a.n(Te),De={name:"UserDropDown",components:{Gravatar:Ne.a},computed:Object(n["b"])(["user"]),methods:{logout:function(){localStorage.removeItem(S),this.$store.commit("setUser",null),this.$router.push({name:""})}}},Be=De,Je=(a("f786"),Object(v["a"])(Be,je,Me,!1,null,null,null)),Fe=Je.exports,qe={name:"Header",components:{UserDropDown:Fe},props:{title:String,hideToggleBtn:Boolean,hideUserDropdown:Boolean},computed:{icon:function(){return this.$store.state.isMenuVisiable?"fa-angle-left":"fa-angle-down"}},methods:{toggleBtnMenu:function(){this.$store.commit("toggleMenu")}}},Ve=qe,Re=(a("9f34"),Object(v["a"])(Ve,Oe,Pe,!1,null,null,null)),Le=Re.exports,He=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("router-view")],1)},Ge=[],ze={name:"Content"},Ke=ze,Qe=(a("9551"),Object(v["a"])(Ke,He,Ge,!1,null,null,null)),We=Qe.exports,Xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{directives:[{name:"show",rawName:"v-show",value:e.isMenuVisiable,expression:"isMenuVisiable"}],staticClass:"menu"},[a("div",{staticClass:"menuFilter"},[a("i",{staticClass:"fa fa-search fa-lg"}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.treeFilter,expression:"treeFilter"}],staticClass:"filterField",attrs:{type:"text",placeholder:"Digite Para filtrar..."},domProps:{value:e.treeFilter},on:{input:function(t){t.target.composing||(e.treeFilter=t.target.value)}}})]),a("Tree",{ref:"tree",attrs:{data:e.treeData,options:e.treeOptions,filter:e.treeFilter}})],1)},Ye=[],Ze=a("25ea"),et={name:"Menu",components:{Tree:Ze["a"]},computed:Object(n["b"])(["isMenuVisiable"]),data:function(){return{treeData:this.getTreeData(),treeOptions:{propertyNames:{text:"name"},filter:{emptyText:"Categoria Não Encontrada"}},treeFilter:""}},methods:{getTreeData:function(){var e="".concat(I,"/categories/tree");return s.a.get(e).then((function(e){return e.data}))},onNodeSelected:function(e){this.$router.push({name:"ArticleByCategory",params:{id:e.id}})}},mounted:function(){this.$refs.tree.$on("node:selected",this.onNodeSelected)}},tt=et,at=(a("4b57"),Object(v["a"])(tt,Xe,Ye,!1,null,null,null)),rt=at.exports,nt=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ot=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("span",[e._v("Copyright "),a("strong",[e._v("Gabriel Merino")]),e._v(" 2021")])])}],st={name:"Footer"},it=st,ct=(a("2175"),Object(v["a"])(it,nt,ot,!1,null,null,null)),lt=ct.exports,ut=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},dt=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loading"},[r("img",{attrs:{src:a("12ae"),alt:"loading"}})])}],mt={name:"loading"},ft=mt,pt=(a("2dd6"),Object(v["a"])(ft,ut,dt,!1,null,null,null)),vt=pt.exports,gt={name:"App",components:{Header:Le,Content:We,Menu:rt,Footer:lt,Loading:vt},computed:Object(n["b"])(["isMenuVisiable","user"]),data:function(){return{validatingToken:!0}},methods:{validateToken:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.validatingToken=!0,a=localStorage.getItem(S),r=JSON.parse(a),e.$store.commit("setUser",null),r){t.next=8;break}return e.validatingToken=!1,e.$router.push({name:""}),t.abrupt("return");case 8:return t.next=10,s.a.post("".concat(I,"/validateToken"),r);case 10:if(n=t.sent,!n.data){t.next=16;break}return t.next=14,e.$store.commit("setUser",r);case 14:t.next=18;break;case 16:localStorage.removeItem(S),e.$router.push({name:""});case 18:e.validatingToken=!1;case 19:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.validateToken()}},ht=gt,bt=(a("79cc"),Object(v["a"])(ht,Ee,Ue,!1,null,null,null)),_t=bt.exports;r["default"].config.productionTip=!1,new r["default"]({store:i,router:ke,render:function(e){return e(_t)}}).$mount("#app")},"5ce0":function(e,t,a){},"5e0e":function(e,t,a){},6668:function(e,t,a){"use strict";a("ff8e")},6698:function(e,t,a){},7395:function(e,t,a){e.exports=a.p+"img/article.ceb5521b.png"},"79cc":function(e,t,a){"use strict";a("d231")},"8d87":function(e,t,a){},9551:function(e,t,a){"use strict";a("32a6")},"9d64":function(e,t,a){e.exports=a.p+"img/logo.654c9b6a.png"},"9f34":function(e,t,a){"use strict";a("6698")},a405:function(e,t,a){"use strict";a("a90e")},a90e:function(e,t,a){},c9e1:function(e,t,a){},cb32:function(e,t,a){"use strict";a("5e0e")},d231:function(e,t,a){},d27f:function(e,t,a){},df2f:function(e,t,a){},f786:function(e,t,a){"use strict";a("c9e1")},fb2c:function(e,t,a){"use strict";a("8d87")},ff8e:function(e,t,a){}});
//# sourceMappingURL=app.38c89712.js.map