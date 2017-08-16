webpackJsonp([1],[,,,,function(t,e,a){"use strict";var n=a(22),i=a.n(n),o=a(23),s=a.n(o),l=a(37),r=a.n(l),c=a(9),d=a.n(c),u=function(){function t(){i()(this,t),this.ready=!1,this.readyCallbacks=[],this.idbAdapter=new d.a,this.db=new r.a("iplan-data.db",{autoload:!0,autoloadCallback:this.initializeDB.bind(this),autosave:!0,autosaveInterval:4e3,adapter:this.idbAdapter}),this.whenReady=this.whenReady.bind(this)}return s()(t,[{key:"initializeDB",value:function(){var t=this;(this.todos=this.db.getCollection("todos"))||(this.todos=this.db.addCollection("todos")),this.ready=!0,this.readyCallbacks.reduce(function(e,a){return a(t)},0)}},{key:"whenReady",value:function(t){this.readyCallbacks.push(t)}},{key:"getDB",value:function(){return this.db}},{key:"addToDo",value:function(t,e,a,n){if(!this.todos)return void n(!0,null);var i={_id:(new Date).toISOString(),name:t,dueDate:e,dueTime:a,done:!1};console.log(i),this.todos.insert(i)?n(!1,i._id):n(!0,i._id)}},{key:"deleteToDo",value:function(t){this.todos.remove(t)}}]),t}(),v=new u;e.a=v},,,,,,,,function(t,e,a){"use strict";var n=a(3),i=a(44),o=a(40),s=a.n(o),l=a(39),r=a.n(l);n.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Dashboard",component:s.a},{path:"/createtodo",name:"Create ToDo",component:r.a}]})},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){function n(t){a(35)}var i=a(2)(a(17),a(42),n,null,null);t.exports=i.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{pages:[{name:"Dashboard",url:"/",icon:"home"}],drawer:!1}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(4);window.database=n.a,e.default={name:"createToDo",data:function(){return{dueDate:null,dueTime:null,name:null,menuTime:!1,menu:!1,modalTime:!1,modal:!1}},methods:{createToDo:function(){console.log(this.name,this.dueDate,this.dueTime),n.a.addToDo(this.name,this.dueDate,this.dueTime,function(t,e){return console.log(t,e)}),this.$router.push("/")},goBack:function(){this.$router.go(-1)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(4);e.default={name:"startPage",created:function(){var t=this;if(this.database.ready){if(this.noTodos=this.database.todos.count()<1,this.noTodos)return void(this.ready=!0);this.buildData()}else this.database.whenReady(function(){if(t.noTodos=t.database.todos.count()<1,t.noTodos)return void(t.ready=!0);t.buildData()})},data:function(){return{database:n.a,ready:!1,noTodos:!1,headers:[{text:"Name",value:"name"},{text:"Due Date",value:"dueDate"},{text:"Due Time",value:"dueTime"},{text:"Actions",value:"actions"}],items:[]}},methods:{buildData:function(){var t=this.database.todos.find({});if(console.log(t),0==t.length)return void(this.noTodos=!0);this.ready=!0,this.items=t},createtodo:function(){this.$router.push("/createtodo")},deleteToDo:function(t){console.log(t),this.database.deleteToDo(t),this.buildData()}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3),i=a(11),o=a.n(i),s=a(15),l=(a.n(s),a(13)),r=(a.n(l),a(14)),c=(a.n(r),a(12)),d=a(16),u=a.n(d);n.a.config.productionTip=!1,n.a.use(o.a);new n.a({el:"#app",router:c.a,template:"<App/>",components:{App:u.a}})},,,,,,,,,,,,,,,function(t,e){},function(t,e){},,,function(t,e,a){var n=a(2)(a(18),a(41),null,null,null);t.exports=n.exports},function(t,e,a){function n(t){a(36)}var i=a(2)(a(19),a(43),n,"data-v-68267224",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-toolbar",{staticClass:"purple",attrs:{flat:"",dark:""}},[a("v-toolbar-title",[t._v("New ToDo")])],1),t._v(" "),a("v-card",{staticClass:"primary white"},[a("v-card-text",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{label:"Name","prepend-icon":"create"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-menu",{staticClass:"hidden-xs-only",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-left":40,"max-width":"290px"},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-text-field",{attrs:{label:"Date when ToDo is due","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.dueDate,callback:function(e){t.dueDate=e},expression:"dueDate"}}),t._v(" "),a("v-date-picker",{attrs:{"no-title":"",scrollable:"",actions:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.save,i=e.cancel;return[a("v-card-actions",[a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){i()}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){n()}}},[t._v("Save")])],1)]}}]),model:{value:t.dueDate,callback:function(e){t.dueDate=e},expression:"dueDate"}})],1),t._v(" "),a("v-dialog",{staticClass:"hidden-sm-and-up",attrs:{persistent:"",lazy:"","full-width":""},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("v-text-field",{attrs:{label:"Date when ToDo is due","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.dueDate,callback:function(e){t.dueDate=e},expression:"dueDate"}}),t._v(" "),a("v-date-picker",{attrs:{"no-title":"",scrollable:"",actions:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.save,i=e.cancel;return[a("v-card-actions",[a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){i()}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){n()}}},[t._v("Save")])],1)]}}]),model:{value:t.dueDate,callback:function(e){t.dueDate=e},expression:"dueDate"}})],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-menu",{staticClass:"hidden-xs-only",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-left":40,"max-width":"290px"},model:{value:t.menuTime,callback:function(e){t.menuTime=e},expression:"menuTime"}},[a("v-text-field",{attrs:{label:"Time when ToDo is due","prepend-icon":"alarm",readonly:""},slot:"activator",model:{value:t.dueTime,callback:function(e){t.dueTime=e},expression:"dueTime"}}),t._v(" "),a("v-time-picker",{attrs:{"no-title":"",scrollable:"",actions:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.save,i=e.cancel;return[a("v-card-actions",[a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){i()}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){n()}}},[t._v("Save")])],1)]}}]),model:{value:t.dueTime,callback:function(e){t.dueTime=e},expression:"dueTime"}})],1),t._v(" "),a("v-dialog",{staticClass:"hidden-sm-and-up",attrs:{persistent:"",lazy:"","full-width":""},model:{value:t.modalTime,callback:function(e){t.modalTime=e},expression:"modalTime"}},[a("v-text-field",{attrs:{label:"Time when ToDo is due","prepend-icon":"alarm",readonly:""},slot:"activator",model:{value:t.dueTime,callback:function(e){t.dueTime=e},expression:"dueTime"}}),t._v(" "),a("v-time-picker",{attrs:{"no-title":"",scrollable:"",actions:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.save,i=e.cancel;return[a("v-card-actions",[a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){i()}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){n()}}},[t._v("Save")])],1)]}}]),model:{value:t.dueTime,callback:function(e){t.dueTime=e},expression:"dueTime"}})],1)],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-btn",{staticClass:"blue--text",attrs:{primary:"",flat:""},nativeOn:{click:function(e){e.stopPropagation(),t.createToDo(e)}}},[t._v("Create")]),t._v(" "),a("v-btn",{staticClass:"red--text",attrs:{flat:""},nativeOn:{click:function(e){e.stopPropagation(),t.goBack(e)}}},[t._v("Cancel")])],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{attrs:{persistent:"",light:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[a("v-list",{staticClass:"pa-0"},[a("v-list-tile",{attrs:{avatar:"",tag:"ul"}},[t._v("iPlan")])],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-list",{staticClass:"pt-0",attrs:{dense:""}},t._l(t.pages,function(e){return a("v-list-tile",{key:e.name,attrs:{to:e.url}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.name))])],1)],1)}))],1),t._v(" "),a("v-toolbar",{staticClass:"blue",attrs:{id:"main-toolbar",dark:""}},[a("v-toolbar-side-icon",{nativeOn:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),a("v-toolbar-title",[t._v("iPlan")])],1),t._v(" "),a("main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"content"}},[a("v-layout",{attrs:{row:""}},[t.ready&&t.noTodos?a("v-flex",{attrs:{xs6:"",sm6:"","offset-sm3":""}},[a("v-card",{staticClass:"primary white"},[a("v-card-title",{attrs:{"primary-title":""}},[a("h3",{staticClass:"headline mb-0"},[t._v("SO BLENK")])]),t._v(" "),a("v-card-text",[t._v("You have yet to create any ToDo, Ser User.")]),t._v(" "),a("v-card-actions",[a("v-btn",{staticClass:"blue--text",attrs:{flat:"",to:"/createtodo"}},[t._v("Create")])],1)],1)],1):t._e(),t._v(" "),t.ready?t._e():a("v-flex",{attrs:{"offset-sm6":""}},[a("v-progress-circular",{staticClass:"primary--text",attrs:{indeterminate:""}})],1),t._v(" "),t.ready&&!t.noTodos?a("v-flex",{attrs:{xs12:"",sm12:""}},[a("v-card",{staticClass:"flat",attrs:{flat:""}},[a("v-card-text",{staticClass:"grey lighten-5",staticStyle:{height:"100%"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.name))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.dueDate))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.dueTime))]),t._v(" "),a("td",{staticClass:"xs1 right"},[a("v-btn",{attrs:{flat:""},nativeOn:{click:function(a){t.deleteToDo(e.item)}}},[a("v-icon",[t._v("delete")])],1)],1)]}}])})],1)],1)],1):t._e()],1),t._v(" "),t.ready&&!t.noTodos?a("v-btn",{staticClass:"pink",staticStyle:{"margin-bottom":"3rem"},attrs:{absolute:"",fixed:"",dark:"",fab:"",bottom:"",right:""},nativeOn:{click:function(e){t.createtodo(e)}}},[a("v-icon",[t._v("add")])],1):t._e()],1)},staticRenderFns:[]}}],[20]);
//# sourceMappingURL=app.8967f0598827b963a868.js.map