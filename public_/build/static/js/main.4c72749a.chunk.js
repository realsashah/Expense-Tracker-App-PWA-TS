(this["webpackJsonpexpense-tracker-app-ts-pwa"]=this["webpackJsonpexpense-tracker-app-ts-pwa"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),u=(n(13),n(14),function(){return r.a.createElement("h2",null,"Expense Tracker")}),o=n(2),i=n(7),s=n(4),m=function(e,t){switch(t.type){case"ADD_TRANSACTION":var n=Object(s.a)({id:e.transactions.length+1},t.payload);return Object(s.a)({},e,{transactions:[].concat(Object(i.a)(e.transactions),[n])});case"REMOVE_TRANSACTION":return Object(s.a)({},e,{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});default:return e}},d={transactions:[],deleteTransaction:null,addTransaction:null},E=Object(a.createContext)(d),p=function(e){var t=e.children,n=Object(a.useReducer)(m,d),c=Object(o.a)(n,2),l=c[0],u=c[1];return r.a.createElement(E.Provider,{value:{transactions:l.transactions,deleteTransaction:function(e){u({type:"REMOVE_TRANSACTION",payload:e})},addTransaction:function(e,t){u({type:"ADD_TRANSACTION",payload:{text:e,amount:t}})}}},t)},f=function(){var e=Object(a.useContext)(E).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement("div",null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",null,"$",e))},v=function(){var e=Object(a.useContext)(E).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{id:"money-plus",className:"money plus"},"+$",t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{id:"money-minus",className:"money minus"},"-$",n)))},b=function(e){var t=e.trans,n=Object(a.useContext)(E).deleteTransaction;return r.a.createElement("li",{className:t.amount>0?"plus":"minus",onClick:function(){return n(t.id)}},t.text," ",r.a.createElement("span",null,t.amount<0?"-":"+","$",Math.abs(t.amount)))},x=function(){var e=Object(a.useContext)(E).transactions;return r.a.createElement("div",null,r.a.createElement("h4",null,"History"),r.a.createElement("ul",{className:"list"},e.map((function(e){return r.a.createElement(b,{key:e.id,trans:e})}))))},O=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(),u=Object(o.a)(l,2),i=u[0],s=u[1],m=Object(a.useContext)(E).addTransaction;return r.a.createElement("div",null,r.a.createElement("h3",null,"Add new Transaction"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-control"},r.a.createElement("label",null,"Text"),r.a.createElement("input",{onChange:function(e){return c(e.target.value)},type:"text",className:"form-control",name:"text",placeholder:"Detail",value:n})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",null,"Amount",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{onChange:function(e){return s(parseInt(e.target.value))},type:"number",className:"form-control",name:"amount",placeholder:"Amount",value:i})),r.a.createElement("button",{className:"btn",onClick:function(e){e.preventDefault(),function(e,t){""!==e&&0!==t&&(m(e,Number(t)),c(""),s(0))}(n,i)}},"Add Transaction")))};var N=function(){return r.a.createElement("div",null,r.a.createElement(p,null,r.a.createElement(u,null),r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(v,null),r.a.createElement(x,null),r.a.createElement(O,null))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),function(){var e="".concat("","/expense-tracker-sw.js");navigator.serviceWorker.register(e).then((function(e){console.warn(e)}))}()},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.4c72749a.chunk.js.map