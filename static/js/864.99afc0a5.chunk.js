"use strict";(self.webpackChunkclothing_store_app=self.webpackChunkclothing_store_app||[]).push([[864],{6956:function(n,e,i){i.d(e,{u:function(){return on}});var t,a,r,p,d,o,l,x,c,s,h,g,u,f,m,j,Z,w,v,y,P=i(9439),b=i(2791),C=i(9434),k=i(9654),z=i(2140),I=i(851),S=i(5612),E=i(168),H=i(5867),T=H.ZP.select(t||(t=(0,E.Z)(["\n  width: 100%;\n  background: #ececec;\n  border: none;\n  padding: 10px 5px 10px 18px;\n  font-size: 12px;\n  line-height: 14px;\n  @media (min-width: 768px) {\n    width: 365px;\n    font-size: 16px;\n    line-height: 18px;\n  }\n"]))),F=i(184),G=function(n){var e=n.page,i=n.selectedCategory,t=(0,C.I0)(),a=(0,b.useCallback)((function(n){t((0,S.xw)({page:e,sort:"lowestToHighest"===n?"price.value,asc":"price.value,desc",selectedCategory:i}))}),[t,e,i]);return(0,F.jsx)("div",{children:(0,F.jsxs)(T,{id:"sortOption",onChange:function(n){return a(n.target.value)},children:[(0,F.jsx)("option",{value:"lowestToHighest",children:"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0437\u0430 \u0446\u0456\u043d\u043e\u044e: \u0432\u0456\u0434 \u043d\u0438\u0436\u0447\u043e\u0457 \u0434\u043e \u0432\u0438\u0449\u043e\u0457"}),(0,F.jsx)("option",{value:"highestToLowest",children:"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0437\u0430 \u0446\u0456\u043d\u043e\u044e: \u0432\u0456\u0434 \u0432\u0438\u0449\u043e\u0457 \u0434\u043e \u043d\u0438\u0436\u0447\u043e\u0457"})]})})},U=H.ZP.section(a||(a=(0,E.Z)(["\n  width: 100%;\n  padding: 13px 0 32px;\n  @media (min-width: 768px) {\n    padding: 69px 0 40px;\n  }\n"]))),_=H.ZP.div(r||(r=(0,E.Z)(["\n  display: flex;\n  flex-direction: column-reverse;\n  gap: 26px;\n  padding-left: 28px;\n  padding-right: 28px;\n  margin: 0 auto;\n  @media (min-width: 768px) {\n    flex-direction: row;\n    gap: 112px;\n    justify-content: space-between;\n    max-width: 1360px;\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n"]))),L=H.ZP.ul(p||(p=(0,E.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px 14px;\n\n  @media (min-width: 768px) {\n    gap: 14px;\n  }\n"]))),M=H.ZP.button(d||(d=(0,E.Z)(["\n  padding: 6px 18px;\n  background: transparent;\n  border: 1px solid #000000;\n\n  font-size: 14px;\n  line-height: 16px;\n  color: #000000;\n\n  @media (min-width: 768px) {\n    padding: 8px 24px;\n\n    font-size: 18px;\n    line-height: 21px;\n  }\n"]))),A=H.ZP.button(o||(o=(0,E.Z)(["\n  padding: 7px 18px;\n  background: #000000;\n  border: none;\n\n  font-size: 14px;\n  line-height: 16px;\n  color: #ffffff;\n\n  @media (min-width: 768px) {\n    padding: 10px 24px;\n\n    font-size: 18px;\n    line-height: 21px;\n  }\n"]))),N=function(n){var e=n.page,i=n.categoryId,t=n.handlePageChange,a=(0,C.I0)(),r=(0,b.useState)(null),p=(0,P.Z)(r,2),d=p[0],o=p[1],l=(0,C.v9)(I.u)||[];(0,b.useEffect)((function(){a((0,z.C)())}),[a]),(0,b.useEffect)((function(){null!==d&&void 0!==d&&0!==d?a((0,S.hH)({page:e,categoryId:d})):0===d?a((0,S.th)({page:e})):null!==i&&void 0!==i&&0!==i?(o(i),a((0,S.hH)({page:e,categoryId:i}))):(o(0),a((0,S.th)({page:e})))}),[a,e,i,d]);return(0,F.jsx)(U,{children:(0,F.jsxs)(_,{children:[(0,F.jsxs)(L,{children:[0===d?(0,F.jsx)(A,{children:"\u0412\u0441\u0456"}):(0,F.jsx)(M,{onClick:function(){o(0),t(0)},children:"\u0412\u0441\u0456"}),l.length>0&&l.map((function(n){return(0,F.jsx)("li",{children:d===n.id?(0,F.jsx)(A,{children:n.title},n.id):(0,F.jsx)(M,{onClick:function(){var i;(i=n.id)!==d&&(t(0),a((0,S.hH)({page:e,categoryId:i}))),o(n.id)},children:n.title},n.id)},n.id)}))]}),(0,F.jsx)(G,{page:e,selectedCategory:d})]})})},R=i(7689),K=i(2098),O=H.ZP.ul(l||(l=(0,E.Z)(["\n  display: flex;\n  gap: 24px;\n  justify-content: center;\n  @media (min-width: 768px) {\n    gap: 34px;\n  }\n"]))),q=H.ZP.button(x||(x=(0,E.Z)(["\n  font-family: Gill Sans;\n  font-size: 14px;\n  line-height: 16px;\n  color: #939393;\n\n  border: none;\n  background-color: transparent;\n\n  @media (min-width: 768px) {\n    font-size: 18px;\n    line-height: 21px;\n  }\n"]))),B=H.ZP.button(c||(c=(0,E.Z)(["\n  font-family: Gill Sans;\n  font-size: 14px;\n  line-height: 16px;\n  color: #4c4b4b;\n\n  border: none;\n  background-color: transparent;\n\n  @media (min-width: 768px) {\n    font-size: 18px;\n    line-height: 21px;\n  }\n"]))),D=H.ZP.span(s||(s=(0,E.Z)(["\n  color: #b4b4b4;\n"]))),J=function(n){var e=n.totalPage,i=n.page,t=n.handlePageChange;return(0,F.jsx)(O,{children:Array.from({length:e}).map((function(n,a){var r=Math.max(0,i-4),p=Math.min(e-1,i+4);return a===r&&r>0?(0,F.jsx)(D,{children:"..."},"startEllipsis"):a>=r&&a<=p?(0,F.jsx)("li",{children:i===a?(0,F.jsx)(B,{onClick:function(){return t(a)},children:a+1}):(0,F.jsx)(q,{onClick:function(){return t(a)},children:a+1})},a):a===p+1&&p<e-4?(0,F.jsx)(D,{children:"..."},"endEllipsis"):a>e-4?(0,F.jsx)("li",{children:i===a?(0,F.jsx)(B,{onClick:function(){return t(a)},children:a+1}):(0,F.jsx)(q,{onClick:function(){return t(a)},children:a+1})},a):null}))})},Q=i(7609),V=i(1087),W=H.ZP.section(h||(h=(0,E.Z)(["\n  width: 100%;\n  padding: 32px 0 65px;\n  @media (min-width: 768px) {\n    padding: 40px 0 81px;\n  }\n"]))),X=H.ZP.div(g||(g=(0,E.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 31px;\n  padding: 105px 28px 28px;\n  margin: 0;\n  @media (min-width: 768px) {\n    max-width: 1360px;\n    padding: 155px 40px 69px;\n  }\n"]))),Y=H.ZP.div(u||(u=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 78px;\n  padding-left: 28px;\n  padding-right: 28px;\n  margin: 0 auto;\n  @media (min-width: 768px) {\n    gap: 112px;\n    max-width: 1360px;\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n"]))),$=(0,H.ZP)(V.rU)(f||(f=(0,E.Z)(["\n  font-family: Gill Sans;\n  font-size: 18px;\n  line-height: 21px;\n  color: #000000;\n\n  @media (min-width: 768px) {\n    font-size: 22px;\n    line-height: 25px;\n  }\n"]))),nn=H.ZP.ul(m||(m=(0,E.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 26px 15px;\n  justify-content: center;\n\n  @media (min-width: 768px) {\n    gap: 58px 24px;\n  }\n"]))),en=H.ZP.div(j||(j=(0,E.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 18px;\n  @media (min-width: 768px) {\n    gap: 24px;\n  }\n"]))),tn=H.ZP.button(Z||(Z=(0,E.Z)(["\n  font-family: Gill Sans;\n  font-size: 14px;\n  line-height: 16px;\n  color: #4c4b4b;\n\n  border: none;\n  background-color: transparent;\n\n  @media (min-width: 768px) {\n    font-size: 18px;\n    line-height: 21px;\n  }\n"]))),an=H.ZP.svg(w||(w=(0,E.Z)(["\n  width: 11px;\n  height: 10px;\n"]))),rn=H.ZP.p(v||(v=(0,E.Z)(["\n  text-align: center;\n  font-size: 20px;\n"]))),pn=H.ZP.span(y||(y=(0,E.Z)(["\n  color: grey;\n  font-weight: 600;\n"]))),dn=function(n){var e=n.data,i=n.type,t=n.handleNextPage,a=n.page,r=n.totalPage,p=n.handlePageChange,d=(0,R.TH)(),o=new URLSearchParams(d.search).get("s");return(0,b.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[a]),0!==e.length?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(nn,{children:e.map((function(n){return(0,F.jsx)("li",{children:(0,F.jsx)(K.F,{item:n})},n.id)}))}),r>1?(0,F.jsxs)(en,{children:[(0,F.jsx)(J,{totalPage:r,page:a,handlePageChange:p}),(0,F.jsx)(tn,{onClick:t,disabled:1===r,children:(0,F.jsx)(an,{children:(0,F.jsx)("use",{href:"".concat(Q.Z,"#icon-next-page")})})})]}):(0,F.jsx)(F.Fragment,{})]}):"searchpage"!==i?(0,F.jsx)(rn,{children:"Sorry, but this category is not available yet"}):"searchpage"===i&&0===e.length&&(0,F.jsxs)(rn,{children:["\u0417\u0430 \u0437\u0430\u043f\u0438\u0442\u043e\u043c ",(0,F.jsxs)(pn,{children:['"',o,'"']})," \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"]})},on=function(n){var e=n.type,i=n.data,t=n.categoryId,a=(0,b.useState)(0),r=(0,P.Z)(a,2),p=r[0],d=r[1],o=(0,C.v9)(k.eA)||1,l=(0,b.useCallback)((function(n){d(n)}),[]);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)($,{to:"/",children:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"}),(0,F.jsx)("span",{children:"|"}),"searchpage"!==e?(0,F.jsx)($,{to:"/catalog",children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"}):(0,F.jsx)("p",{children:"\u041f\u043e\u0448\u0443\u043a"})]}),"searchpage"!==e&&(0,F.jsx)(N,{page:p,categoryId:t,handlePageChange:l}),(0,F.jsx)(W,{children:(0,F.jsx)(Y,{children:(0,F.jsx)(dn,{data:i,type:e,handleNextPage:function(){p<o-1&&l(p+1)},page:p,totalPage:o,handlePageChange:l})})})]})}},7864:function(n,e,i){i.r(e),i.d(e,{default:function(){return j}});var t,a=i(4165),r=i(5861),p=i(2791),d=i(9434),o=i(7689),l=i(6956),x=i(1454),c=i(9654),s=i(4494),h=i(5612),g=i(168),u=i(5867).ZP.div(t||(t=(0,g.Z)(["\n  padding-top: 300px;\n"]))),f=i(184),m=function(){var n=(0,d.v9)(c.wU),e=(0,d.I0)(),i=(0,o.TH)(),t=(0,d.v9)(c.z5),g=new URLSearchParams(i.search).get("s");return(0,p.useEffect)((function(){var n=function(){var n=(0,r.Z)((0,a.Z)().mark((function n(){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{e((0,h.Kc)(g))}catch(i){console.error("Error fetching data:",i)}case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return n(),function(){e((0,s.Mo)())}}),[e,g]),n?(0,f.jsx)(u,{children:(0,f.jsx)(x.a,{})}):(0,f.jsx)(l.u,{type:"searchpage",data:t})},j=function(){return(0,f.jsx)("div",{children:(0,f.jsx)(m,{})})}},851:function(n,e,i){i.d(e,{u:function(){return t}});var t=function(n){return n.categories.categories}}}]);
//# sourceMappingURL=864.99afc0a5.chunk.js.map