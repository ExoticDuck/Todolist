(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{61:function(e,t,a){e.exports=a(72)},66:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),c=a.n(r);a(66),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(108),o=a(109),u=a(104),s=a(111),d=a(107),f=a(112),m=a(113),v=a(73),T=a(110),E=a(27),O=(a(70),a(17)),p=a(114),b=a(105);var h=function(e){var t=Object(n.useState)(""),a=Object(O.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),o=Object(O.a)(l,2),s=o[0],d=o[1],f=function(){""!==r.trim()?(e.addItem(r),c("")):d("Title is required!")};return i.a.createElement("div",null,i.a.createElement(p.a,{variant:"outlined",value:r,onChange:function(e){c(e.currentTarget.value)},onKeyPress:function(e){d(null),13===e.charCode&&f()},error:!!s,label:"Title",helperText:s}),i.a.createElement(u.a,{color:"primary",onClick:f},i.a.createElement(b.a,null)))},D=a(33),g=a(15),I={};var j=a(28),k=a(115),S=[];var A=a(116),y=a(106);var C=function(e){var t=Object(n.useState)(!1),a=Object(O.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(e.value),o=Object(O.a)(l,2),u=o[0],s=o[1];return r?i.a.createElement(p.a,{value:u,onChange:function(e){s(e.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),e.onChange(u)}}):i.a.createElement("span",{onDoubleClick:function(){c(!0)}},e.value)},L=function(e){var t=Object(n.useState)(""),a=Object(O.a)(t,2),r=(a[0],a[1],Object(n.useState)(null)),c=Object(O.a)(r,2),l=(c[0],c[1],e.tasks.map((function(t){return i.a.createElement("li",{key:t.id,className:t.isDone?"is-done":""},i.a.createElement(A.a,{checked:t.isDone,color:"primary",onChange:function(a){var n=a.currentTarget.checked;e.changeTaskStatus(n,t.id,e.id)}}),i.a.createElement(C,{value:t.title,onChange:function(a){e.changeTaskTitle(a,t.id,e.id)}}),i.a.createElement(u.a,{onClick:function(){e.removeTask(t.id,e.id)}},i.a.createElement(y.a,null)))})));return i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement(C,{value:e.title,onChange:function(t){e.changeTodolistTitle(t,e.id)}}),i.a.createElement(u.a,{onClick:function(){e.deleteTodolist(e.id)}},i.a.createElement(y.a,null))),i.a.createElement("div",null,i.a.createElement(h,{addItem:function(t){e.addTask(t,e.id)}})),l,i.a.createElement("div",null,i.a.createElement(d.a,{onClick:function(){e.changeFilter("all",e.id)},className:"all"===e.filter?"active-filter":"",color:"primary",variant:"all"===e.filter?"contained":"outlined",style:{margin:"10px 5px 10px 0"}},"All"),i.a.createElement(d.a,{onClick:function(){e.changeFilter("active",e.id)},className:"active"===e.filter?"active-filter":"",color:"primary",variant:"active"===e.filter?"contained":"outlined",style:{margin:"10px 5px 10px 0"}},"Active"),i.a.createElement(d.a,{onClick:function(){e.changeFilter("completed",e.id)},className:"completed"===e.filter?"active-filter":"",color:"primary",variant:"completed"===e.filter?"contained":"outlined",style:{margin:"10px 0px 10px 0"}},"Completed")))};var w=function(){var e=Object(E.c)((function(e){return e.todolists})),t=Object(E.c)((function(e){return e.tasks})),a=Object(E.b)();function n(e,t){var n=function(e,t){return{type:"REMOVE-TASK",id:e,todolistID:t}}(e,t);a(n)}function r(e,t){var n=function(e,t){return{type:"CHANGE-TODOLIST-FILTER",id:e,filter:t}}(t,e);a(n)}function c(e,t){var n=function(e,t){return{type:"ADD-TASK",title:e,todolistID:t}}(e,t);a(n)}function O(e,t,n){var i=function(e,t,a){return{type:"CHANGE-TASK-STATUS",todolistID:a,taskID:e,isDone:t}}(t,e,n);a(i)}function p(e,t,n){var i=function(e,t,a){return{type:"CHANGE-TASK-TITLE",todolistID:a,taskID:e,title:t}}(t,e,n);a(i)}function b(e){var t=function(e){return{type:"REMOVE-TODOLIST",id:e}}(e);a(t)}function D(e,t){var n=function(e,t){return{type:"CHANGE-TODOLIST-TITLE",id:e,title:t}}(t,e);a(n)}return i.a.createElement("div",{className:"App"},i.a.createElement(l.a,{position:"static"},i.a.createElement(o.a,null,i.a.createElement(u.a,{edge:"start",color:"inherit","aria-label":"menu"},i.a.createElement(T.a,null)),i.a.createElement(s.a,{variant:"h6"},"News"),i.a.createElement(d.a,{color:"inherit"},"Login"))),i.a.createElement(f.a,{fixed:!0},i.a.createElement(m.a,{container:!0,style:{padding:"20px"}},i.a.createElement(h,{addItem:function(e){var t=function(e){return{type:"ADD-TODOLIST",title:e,todolistId:Object(k.a)()}}(e);a(t)}})),i.a.createElement(m.a,{container:!0,spacing:2},e.map((function(e){var a=t[e.id],l=a;switch(e.filter){case"active":l=l.filter((function(e){return!e.isDone}));break;case"completed":l=l.filter((function(e){return e.isDone}));break;default:l=a}return i.a.createElement(m.a,{item:!0},i.a.createElement(v.a,{style:{padding:"10px"}},i.a.createElement(L,{key:e.id,id:e.id,title:e.title,tasks:l,removeTask:n,changeFilter:r,addTask:c,changeTaskStatus:O,filter:e.filter,deleteTodolist:b,changeTodolistTitle:D,changeTaskTitle:p})))})))))},x=a(42),N=Object(x.a)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TASK":var a=Object(g.a)({},e),n=a[t.todolistID].filter((function(e){return e.id!==t.id}));return Object(g.a)(Object(g.a)({},a),{},Object(D.a)({},t.todolistID,n));case"ADD-TASK":var i=Object(g.a)({},e),r={id:"4",title:t.title,isDone:!1};return i[t.todolistID].unshift(r),i;case"CHANGE-TASK-STATUS":var c=Object(g.a)({},e),l=c[t.todolistID].find((function(e){return e.id===t.taskID}));return l&&(l.isDone=t.isDone),c;case"CHANGE-TASK-TITLE":var o=Object(g.a)({},e),u=o[t.todolistID].find((function(e){return e.id===t.taskID}));return u&&(u.title=t.title),o;case"ADD-TODOLIST":var s=Object(g.a)({},e),d=t.todolistId;return s=Object(g.a)(Object(g.a)({},s),{},Object(D.a)({},d,[]));case"REMOVE-TODOLIST":var f=Object(g.a)({},e);return delete f[t.id],f;default:return e}},todolists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TODOLIST":var a=Object(j.a)(e);return a.filter((function(e){return e.id!==t.id}));case"ADD-TODOLIST":var n=Object(j.a)(e);return[].concat(Object(j.a)(n),[{id:t.todolistId,title:t.title,filter:"all"}]);case"CHANGE-TODOLIST-TITLE":var i=Object(j.a)(e),r=i.find((function(e){return e.id===t.id}));return r&&(r.title=t.title),i;case"CHANGE-TODOLIST-FILTER":var c=Object(j.a)(e),l=c.find((function(e){return e.id===t.id}));return l&&(l.filter=t.filter),c;default:return e}}}),K=Object(x.b)(N);window.store=K,c.a.render(i.a.createElement(E.a,{store:K},i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.a38890eb.chunk.js.map