(this["webpackJsonpfrontend-test"]=this["webpackJsonpfrontend-test"]||[]).push([[0],{86:function(e,n,t){},91:function(e,n,t){"use strict";t.r(n);var r=t(67),a=t(21),o=t(41),c=t(92),i=t(90),s=t(1),d=t.n(s),u=t(55),l=t.n(u),p=t(7);function j(){return Object(p.jsxs)("header",{style:{background:"red"},children:[Object(p.jsx)("img",{src:"https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png",alt:"logo"}),Object(p.jsx)("div",{children:"$ 0"})]})}var h,g=t(113),b=t(56),m=t(19),x=Object(m.a)(h||(h=Object(b.a)(["\n  query GetProducts {\n    products(options: { take: 10 }) {\n      items {\n        id\n        name\n        description\n        featuredAsset {\n          preview\n        }\n        variants {\n          name\n          price\n        }\n      }\n    }\n  }\n"]))),O=t(112),f=t(57),v=Object(f.a)(O.a)({display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"20px",padding:"20px"});function k(){var e=Object(g.a)(x),n=e.loading,t=e.error,r=e.data;return n?Object(p.jsx)("p",{children:"Loading..."}):t?Object(p.jsxs)("p",{children:["Error: ",t.message]}):Object(p.jsx)(v,{children:r.products.items.map((function(e){return Object(p.jsx)("div",{children:e.name},e.name)}))})}var w=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(j,{}),Object(p.jsx)("div",{children:Object(p.jsx)(k,{})})]})},A=(t(86),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,115)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),o(e),c(e)}))}),T=Object(r.a)({uri:"https://demo.vendure.io/shop-api/shop-api",headers:{authorization:localStorage.getItem("Auth-Token")?"Bearer ".concat(localStorage.getItem("Auth-Token")):""}}),C=new a.ApolloLink((function(e,n){return n(e).map((function(n){var t=e.getContext().response.headers.get("Vendure-Auth-Token");return t&&localStorage.setItem("Auth-Token",t),n}))})),F=new o.a({cache:new c.a,link:a.ApolloLink.from([C,T])});l.a.render(Object(p.jsx)(d.a.StrictMode,{children:Object(p.jsx)(i.a,{client:F,children:Object(p.jsx)(w,{})})}),document.getElementById("root")),A()}},[[91,1,2]]]);
//# sourceMappingURL=main.200c5e14.chunk.js.map