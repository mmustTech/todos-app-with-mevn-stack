(function(e){function t(t){for(var n,i,r=t[0],c=t[1],d=t[2],u=0,f=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var l=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"364d":function(e,t,a){},"3d28":function(e,t,a){},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id="4678"},"552e":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=a("5f5b"),o=a("bc3a"),i=a.n(o),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("LoadedData"),a("div",{staticClass:"row vertical-centre justify-content-center mt-50"},[a("div",{staticClass:"col-md-6 mx-auto"},[a("HeaderTodo"),a("CreateTodo"),a("ListTodo")],1),a("FooterTodo")],1)],1)},c=[],d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col align-self-center sticky-position"},[a("form",{staticClass:"sign-in",on:{submit:function(e){e.preventDefault()}}},[a("div",{staticClass:"main-submit-area"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"main-create-title-input-area",attrs:{type:"text",placeholder:"What do you want to do?"},domProps:{value:e.title},on:{keypress:function(t){e.typing=!0},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo(t)},input:function(t){t.target.composing||(e.title=t.target.value)}}}),a("small",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}],staticClass:"main-msg-submit-text-area"},[e._v("Save with "),a("img",{attrs:{src:"/img/svg/enter-key.svg",alt:"#"}}),e._v(" Enter Keyboard.")])])])])},l=[],u=new n["default"],f=u,m={data:function(){return{title:"",typing:!1}},methods:{addTodo:function(e){var t=this;e&&e.preventDefault();var a={title:this.title,done:!1};this.$http.post("/",a).then((function(e){t.clearTodo(),t.refreshTodo(),t.typing=!1})).catch((function(e){console.log(e)}))},clearTodo:function(){this.title=""},refreshTodo:function(){f.$emit("refreshTodo")}}},h=m,b=(a("9072"),a("2877")),p=Object(b["a"])(h,d,l,!1,null,"0dcc6012",null),v=p.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col align-self-center"},[e._l(e.todos,(function(t,n){return a("div",{key:t.id,staticClass:"main-todo-ui-article"},[a("div",{staticClass:"main-todos-list-area"},[a("div",{staticClass:"main-todo-item-area"},[a("div",{staticClass:"main-todo-item-fields-area action-elem"},[a("label",{staticClass:"main-checkbox-btn-setting-elem"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.done,expression:"todo.done"}],attrs:{type:"checkbox",title:"Mark as done?"},domProps:{checked:t.done,value:t.done,checked:Array.isArray(t.done)?e._i(t.done,t.done)>-1:t.done},on:{change:[function(a){var n=t.done,s=a.target,o=!!s.checked;if(Array.isArray(n)){var i=t.done,r=e._i(n,i);s.checked?r<0&&e.$set(t,"done",n.concat([i])):r>-1&&e.$set(t,"done",n.slice(0,r).concat(n.slice(r+1)))}else e.$set(t,"done",o)},function(a){return e.updateTodo(t)}]}}),a("i",{staticClass:"btn-setting update-btn",class:t.done?"checked":""})])]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"todo.title"}],ref:"textarea",refInFor:!0,staticClass:"main-todo-item-fields-area field-elem textarea",class:t.done?"todo__done":"",attrs:{type:"text",disabled:t.done},domProps:{value:t.title},on:{input:[function(a){a.target.composing||e.$set(t,"title",a.target.value)},e.resizeTextarea],keypress:function(e){t.editing=!0},change:function(a){return e.updateTodo(t)},focus:function(t){return e.addOnFocusClass(t,n)},blur:e.removeOnFocusClass}}),a("div",{staticClass:"main-todo-item-fields-area action-elem"},[a("div",{staticClass:"text-align-right"},[e.actionBtn[n]?e._e():a("span",{attrs:{title:"Delete todo?"},on:{click:function(a){return e.deleteTodo(t._id)}}},[a("i",{staticClass:"btn-setting delete-btn"})]),e.actionBtn[n]?a("span",{staticClass:"main-auto-save-msg--elem"},[a("div",[e._v("Auto")]),a("div",[e._v("Save")])]):e._e()])])])])])})),0===e.todos.length?a("div",{staticClass:"main-no-todo-ui-article"},[e._v(" No more todos right now "),a("span",[e._v("😉")])]):e._e()],2)},g=[],y=(a("4e82"),a("96cf"),a("1da1")),_={data:function(){return{todos:[],actionBtn:[],blured:!1,doneLoading:!1,textareaFocus:!1}},created:function(){this.fetchTodo(),this.listenToEvents()},updated:function(){this.getResizeTextarea()},mounted:function(){this.$nextTick((function(){window.addEventListener("resize",this.getResizeTextarea),this.getResizeTextarea}))},beforeDestroy:function(){window.removeEventListener("resize",this.getResizeTextarea)},watch:{$route:function(){var e=this;e.doneLoading=!1,e.fetchData().then((function(){e.doneLoading=!0}))}},methods:{fetchTodo:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$http.get("/").then((function(e){var a=e.data.data.data,n=a.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})),s=n.sort((function(e,t){return e.done-t.done}));t.todos=s,f.$emit("todos-data-loader")}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),updateTodo:function(e){var t=this,a=e._id;""===e.title&&console.log("delete item"),this.$http.patch("/".concat(a),e).then((function(e){t.fetchTodo(),setTimeout((function(){t.actionBtn=[]}),125),f.$emit("editItem")})).catch((function(e){console.log(e)}))},deleteTodo:function(e){var t=this;this.$http.delete("/".concat(e)).then((function(e){t.fetchTodo(),f.$emit("deleteItem")}))},resizeTextarea:function(e){e.target.style.minHeight="27.5px";var t=e.target.scrollHeight;"Enter"==e.code&&(t=e.target.scrollHeight+22),e.target.style.minHeight=t+"px"},addOnFocusClass:function(e,t){this.removeOnFocusClass(),this.blured=!0,this.actionBtn[t]=!0,e.target.offsetParent.parentNode.classList.add("isFocus")},removeOnFocusClass:function(){this.actionBtn=[];var e=document.querySelectorAll(".main-todo-ui-article");[].forEach.call(e,(function(e){e.classList.remove("isFocus")}))},removeEditBtn:function(){console.log("remove edit btn!")},listenToEvents:function(){var e=this;f.$on("refreshTodo",(function(t){e.actionBtn=[],e.fetchTodo()}))},getResizeTextarea:function(e){if(0!=this.todos)for(var t=0;t<this.$refs.textarea.length;t++)this.$refs.textarea[t].style.minHeight="27.5px",this.$refs.textarea[t].style.minHeight=this.$refs.textarea[t].scrollHeight+"px"}}},w=_,k=(a("8a26"),Object(b["a"])(w,j,g,!1,null,"88b97694",null)),x=k.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[!0===e.actionOn?a("div",{staticClass:"main-alert-msg-item",class:"delete"===e.actionStatus?"deleted-layout":"updated-layout"},[e._v(e._s(e.actionMsg))]):e._e(),a("div",{staticClass:"main-datetime-area"},[a("div",{staticClass:"main-numeric-date-area"},[a("div",[e._v(" "+e._s(e.dayNumber)+" "),a("span",[a("i",[e._v(e._s(e.month))]),e._v(" "+e._s(e.year)+" ")])])]),a("div",{staticClass:"main-text-date-area"},[e._v(" "+e._s(e.dayString)+" "),a("div",{staticClass:"main-weather-wedget-api-area"},[a("div",{staticClass:"main--data"},[a("span",{staticClass:"weather-icons",class:"_"+e.weatherApiData.weather[0].icon}),e._v(" "+e._s(Math.ceil(e.weatherApiData.main.temp))+" "),a("small",[e._v("°C")])])]),a("span",{staticClass:"weather-country"},[e._v(e._s(e.weatherApiData.name)+", "+e._s(e.weatherApiData.sys.country))])])])])},C=[],O=a("c1df"),$=a.n(O),E={data:function(){return{dayNumber:$()().format("D"),dayString:$()().format("dddd"),month:$()().format("MMM"),year:$()().format("YYYY"),actionOn:!1,actionStatus:"",actionMsg:"",weatherApiData:{weather:[{icon:""}],main:{temp_max:"__"},name:"",sys:{country:""}}}},created:function(){this.listenToEvents(),this.getWeatherApiInfo()},methods:{getWeatherApiInfo:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()({method:"GET",url:"https://api.openweathermap.org/data/2.5/weather?q=Rabat&appid=886705b4c1182eb1c69f28eb8c520e20&units=metric"});case 3:t=e.sent,this.weatherApiData=t.data,f.$emit("weather-data-loader"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),listenToEvents:function(){var e=this;f.$on("deleteItem",(function(t){e.actionOn=!0,e.actionStatus="delete",e.actionMsg="Item deleted!",setTimeout((function(){e.actionOn=!1}),1500)})),f.$on("editItem",(function(t){e.actionOn=!0,e.actionStatus="",e.actionMsg="Item edited!",setTimeout((function(){e.actionOn=!1}),1500)}))}}},z=E,D=(a("ad2e"),Object(b["a"])(z,T,C,!1,null,null,null)),L=D.exports,A=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"copyright-text-footer"},[a("p",[e._v("@2020 | simple Todo App built with MEVN Stack | by mustDev.")])])}],N={},M=N,R=(a("7056"),Object(b["a"])(M,A,S,!1,null,null,null)),B=R.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[!0===e.todosDataLaoded||!0===e.weatherDataLaoded?a("div",{staticClass:"main-loading-page-area"},[!0===e.removeLoadingContent?a("div",{staticClass:"main-loading-page-content-area"},[a("img",{attrs:{src:"/img/loading.gif",alt:"#"}}),a("small",[e._v("Loading Page")])]):e._e()]):e._e()])},P=[],H={data:function(){return{todosDataLaoded:!0,weatherDataLaoded:!0,removeLoadingContent:!0}},created:function(){this.listenToEvents()},methods:{listenToEvents:function(){var e=this;f.$on("todos-data-loader",(function(t){setTimeout((function(){e.todosDataLaoded=!1}),2250)})),f.$on("weather-data-loader",(function(t){setTimeout((function(){e.removeLoadingContent=!1}),2e3),setTimeout((function(){e.weatherDataLaoded=!1}),2250)})),setTimeout((function(){e.weatherDataLaoded=!1,e.weatherDataLaoded=!1}),2500)}}},I=H,U=(a("a1f5"),Object(b["a"])(I,F,P,!1,null,null,null)),q=U.exports,Y={name:"app",components:{CreateTodo:v,ListTodo:x,HeaderTodo:L,FooterTodo:B,LoadedData:q}},G=Y,K=(a("5c0b"),Object(b["a"])(G,r,c,!1,null,null,null)),V=K.exports,W=i.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).BACKEND_URL?Object({NODE_ENV:"production",BASE_URL:"/"}).BACKEND_URL:"/api/v1/todo"});n["default"].prototype.$http=W,n["default"].use(s["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(V)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},7056:function(e,t,a){"use strict";var n=a("e1ce"),s=a.n(n);s.a},"8a26":function(e,t,a){"use strict";var n=a("364d"),s=a.n(n);s.a},9072:function(e,t,a){"use strict";var n=a("552e"),s=a.n(n);s.a},"9c0c":function(e,t,a){},a1f5:function(e,t,a){"use strict";var n=a("3d28"),s=a.n(n);s.a},ad2e:function(e,t,a){"use strict";var n=a("da42"),s=a.n(n);s.a},da42:function(e,t,a){},e1ce:function(e,t,a){}});
//# sourceMappingURL=app.b90464d7.js.map