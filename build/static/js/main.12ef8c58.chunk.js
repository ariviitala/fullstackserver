(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),l=(t(20),t(14)),o=t(2),i=t(3),m=t.n(i),f="/api/persons",d=function(){return m.a.get(f).then((function(e){return e.data}))},s=function(e){return m.a.post(f,e).then((function(e){return e.data}))},b=function(e,n){return m.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return m.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},h=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:n.type},n.text)},v=function(e){return r.a.createElement("div",null,e.persons.map((function(n){return r.a.createElement(E,{key:n.name,person:n,deleteHandler:e.deleteHandler})})))},E=function(e){var n=e.person,t=e.deleteHandler;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(n.name)}},n.name," ",n.number," ",r.a.createElement("button",{type:"submit"},"Delete")))},g=function(e){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},"Filter shown with: ",r.a.createElement("input",{value:e.value,onChange:e.changeHandler})))},w=function(e){return r.a.createElement("form",{onSubmit:e.submitHandler},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.nameValue,onChange:e.nameHandler})),"number: ",r.a.createElement("input",{value:e.numberValue,onChange:e.numberHandler}),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},j=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),i=Object(o.a)(c,2),m=i[0],f=i[1],E=Object(a.useState)(""),j=Object(o.a)(E,2),H=j[0],O=j[1],S=Object(a.useState)(""),y=Object(o.a)(S,2),k=y[0],D=y[1],C=Object(a.useState)({}),V=Object(o.a)(C,2),x=V[0],N=V[1],F=function(e,n,t){N({text:n,type:e}),setTimeout((function(){N(null)}),t)};Object(a.useEffect)((function(){d().then((function(e){u(e)}))}),[]);console.log(t);var J=t.filter((function(e){return-1!==e.name.toLowerCase().search(k.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(h,{message:x}),r.a.createElement("h2",null,"Find"),r.a.createElement(g,{value:k,changeHandler:function(e){e.preventDefault(),D(e.target.value)}}),r.a.createElement("h2",null,"Add New"),r.a.createElement(w,{nameValue:m,numberValue:H,nameHandler:function(e){f(e.target.value)},numberHandler:function(e){O(e.target.value)},submitHandler:function(e){e.preventDefault();var n=t.filter((function(e){return e.name===m})).length>0,a=!1;if(n&&(a=window.confirm("".concat(m," is already added to phonebook. Replace old number with a new one?"))),a){var r=t.find((function(e){return e.name===m})),c=Object(l.a)({},r,{number:H});console.log(r),b(r.id,c).then((function(e){u(t.map((function(n){return n.id!==r.id?n:e})))})).catch((function(e){F("error","".concat(m," was already deleted from server."),5e3),u(t.filter((function(e){return e.name!==m})))})),console.log(t),F("success","".concat(m," number updated."),5e3),f(""),O("")}if(!n){var o={name:m,number:H};u(t.concat(o)),s(o),F("success","".concat(m," added to the phonebook."),5e3),f(""),O("")}}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(v,{persons:J,deleteHandler:function(e){if(window.confirm("Delete ".concat(e,"?"))){var n=t.filter((function(n){return n.name===e}))[0];console.log(n),p(n.id),u(t.filter((function(n){return n.name!==e}))),F("success","".concat(e," deleted from phonebook."),5e3)}}}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.12ef8c58.chunk.js.map