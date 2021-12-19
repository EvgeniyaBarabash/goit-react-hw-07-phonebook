(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{18:function(t,e,n){t.exports={input:"Filter_input__BytMh",label:"Filter_label__2g7l2"}},35:function(t,e,n){},36:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(13),o=n.n(r),s=(n(35),n(36),n(4)),u=n(8),i=n.n(u),b=n(17),l=n.n(b),j=n(29),d=n(10),f=n.n(d),O=n(2),m=Object(O.b)("contacts/fetchContactsRequest"),h=Object(O.b)("contacts/fetchContactsSuccess"),p=Object(O.b)("contacts/fetchContactsError"),v=Object(O.b)("contacts/addContactRequest"),x=Object(O.b)("contacts/addContactError"),C=Object(O.b)("contacts/addContactSucces"),_=Object(O.b)("contacts/deleteContactRequest"),N=Object(O.b)("contacts/deleteContactSuccess"),g=Object(O.b)("contacts/deleteContactError"),y=Object(O.b)("contacts/changeContacts");f.a.defaults.baseURL="https://61bf061fb25c3a00173f4c43.mockapi.io/contacts/";var k={fetchContacts:function(){return function(){var t=Object(j.a)(l.a.mark((function t(e){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(m()),t.prev=1,t.next=4,f.a.get("contacts");case 4:n=t.sent,c=n.data,e(h(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(p(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t){var e=t.name,n=t.number;return function(t){var c={name:e,number:n};t(v()),f.a.post("contacts",c).then((function(e){var n=e.data;return t(C(n))})).catch((function(e){return t(x(e))}))}},deleteContact:function(t){return function(e){e(_()),f.a.delete("contacts/".concat(t)).then((function(){return e(N(t))})).catch((function(t){return e(g(t))}))}}},w=k,E=function(t){return t.contacts.items},F=function(t){return t.contacts.filter},L=function(t){return t.contacts.loading},S=function(t){var e=E(t),n=F(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},q=n(1);function A(){var t=Object(s.c)(S),e=Object(s.b)();return Object(q.jsx)("div",{className:i.a.wrapper,children:Object(q.jsx)("ul",{className:i.a.list,children:t.map((function(t){var n=t.id,c=t.name,a=t.number;return Object(q.jsxs)("li",{className:i.a.item,children:[Object(q.jsxs)("p",{className:i.a.text,children:[c,": ",a]}),Object(q.jsx)("button",{type:"button",className:i.a.btn,onClick:function(){return e(w.deleteContact(n))},children:"Delete"})]},n)}))})})}var R=n(19),z=n(7),B=n.n(z);function J(){var t=Object(s.c)(E),e=Object(s.b)(),n=Object(c.useState)(""),a=Object(R.a)(n,2),r=a[0],o=a[1],u=Object(c.useState)(""),i=Object(R.a)(u,2),b=i[0],l=i[1],j=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":l(c);break;default:return}},d=function(){o(""),l("")};return Object(q.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t.map((function(t){return t.name})).includes(r)?alert("".concat(r," is already in contacts")):e(w.addContact({name:r,number:b})),d()},className:B.a.form,children:[Object(q.jsx)("label",{className:B.a.title,htmlFor:"user-name",children:"Name"}),Object(q.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:j,value:r,id:"user-name",className:B.a.input}),Object(q.jsx)("label",{className:B.a.title,htmlFor:"user-number",children:"Number"}),Object(q.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:j,value:b,id:"user-number",className:B.a.input}),Object(q.jsx)("button",{type:"submit",className:B.a.btn,children:"Add Contact"})]})}var Z=n(18),D=n.n(Z);function I(){var t=Object(s.c)(F),e=Object(s.b)();return Object(q.jsxs)("label",{className:D.a.label,children:["\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438",Object(q.jsx)("input",{type:"text",value:t,onChange:function(t){return e(y(t.target.value))},className:D.a.input})]})}function M(){var t=Object(s.b)(),e=Object(s.c)(L);return Object(c.useEffect)((function(){t(w.fetchContacts())}),[t]),Object(q.jsxs)("div",{className:"wrapper",children:[Object(q.jsx)("h2",{className:"title",children:"Phonebook"}),Object(q.jsx)(J,{}),Object(q.jsx)("h2",{className:"title",children:"Contacts"}),Object(q.jsx)(I,{}),Object(q.jsx)(A,{}),e&&Object(q.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."})]})}var G,K,P,T=n(3),U=n(30),V=n(6),W=Object(O.c)([],(G={},Object(T.a)(G,h,(function(t,e){return e.payload})),Object(T.a)(G,C,(function(t,e){var n=e.payload;return[].concat(Object(U.a)(t),[n])})),Object(T.a)(G,N,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),G)),$=Object(O.c)("",Object(T.a)({},y,(function(t,e){return e.payload}))),H=Object(O.c)(!1,(K={},Object(T.a)(K,m,(function(){return!0})),Object(T.a)(K,h,(function(){return!1})),Object(T.a)(K,p,(function(){return!1})),Object(T.a)(K,v,(function(){return!0})),Object(T.a)(K,C,(function(){return!1})),Object(T.a)(K,x,(function(){return!1})),Object(T.a)(K,_,(function(){return!0})),Object(T.a)(K,N,(function(){return!1})),Object(T.a)(K,g,(function(){return!1})),K)),Q=Object(O.c)(null,(P={},Object(T.a)(P,p,(function(t){return console.log(t)})),Object(T.a)(P,x,(function(t){return console.log(t)})),Object(T.a)(P,g,(function(t){return console.log(t)})),P)),X=Object(V.b)({items:W,filter:$,loading:H,error:Q}),Y=Object(O.a)({reducer:{contacts:X},devTools:!1});o.a.render(Object(q.jsx)(a.a.StrictMode,{children:Object(q.jsx)(s.a,{store:Y,children:Object(q.jsx)(M,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={title:"FormEditor_title__K81eD",form:"FormEditor_form__1vGbB",btn:"FormEditor_btn__3-jr0",input:"FormEditor_input__3CNoW"}},8:function(t,e,n){t.exports={list:"ContactList_list__2Oe3R",item:"ContactList_item__2tVkJ",btn:"ContactList_btn__sdvsq",text:"ContactList_text__1CuZv",title:"ContactList_title__In6iI"}}},[[63,1,2]]]);
//# sourceMappingURL=main.4f40bb4d.chunk.js.map