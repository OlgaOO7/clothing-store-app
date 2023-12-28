"use strict";(self.webpackChunkclothing_store_app=self.webpackChunkclothing_store_app||[]).push([[377],{7377:function(n,e,i){i.d(e,{l:function(){return cn}});var t=i(1413),r=i(4165),a=i(5861),o=i(9439),s=i(2791),p=i(4695),d=i(9434),l=i(4942),c=i(7762),x=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=function(n,e){var i=e.storage,t=e.watch,r=e.setValue,a=e.exclude,p=void 0===a?[]:a,d=e.onDataRestored,u=e.validate,f=void 0!==u&&u,g=e.dirty,Z=void 0!==g&&g,w=e.onTimeout,v=e.timeout,b=t(),y=function(){return i||window.sessionStorage};return(0,s.useEffect)((function(){var e=y().getItem(n);if(e){var i=JSON.parse(e),t=i._timestamp,a=void 0===t?null:t,o=function(n,e){var i={};for(var t in n)h.call(n,t)&&e.indexOf(t)<0&&(i[t]=n[t]);if(null!=n&&x){var r,a=(0,c.Z)(x(n));try{for(a.s();!(r=a.n()).done;)t=r.value,e.indexOf(t)<0&&m.call(n,t)&&(i[t]=n[t])}catch(o){a.e(o)}finally{a.f()}}return i}(i,["_timestamp"]),s={},l=Date.now();if(v&&l-a>v)return w&&w(),void y().removeItem(n);Object.keys(o).forEach((function(n){!p.includes(n)&&(s[n]=o[n],r(n,o[n],{shouldValidate:f,shouldDirty:Z}))})),d&&d(s)}}),[i,n,d,r]),(0,s.useEffect)((function(){var e=p.length?Object.entries(b).filter((function(n){var e=(0,o.Z)(n,1)[0];return!p.includes(e)})).reduce((function(n,e){var i=(0,o.Z)(e,2),t=i[0],r=i[1];return Object.assign(n,(0,l.Z)({},t,r))}),{}):Object.assign({},b);Object.entries(e).length&&(void 0!==v&&(e._timestamp=Date.now()),y().setItem(n,JSON.stringify(e)))}),[b,v]),{clear:function(){return y().removeItem(n)}}},f=i(1134),g=i(1085),Z=i(8799),w=i(184);var v,b,y,j,z,_,P,A,k,O,S,I,q,C,E,$,N,D,J,R,T,V=i(168),F=i(5867),L=F.ZP.input(v||(v=(0,V.Z)(["\n  font-size: 12px;\n  line-height: 14px;\n  padding: 12px 16px;\n  border: 1px solid #000000;\n  width: -webkit-fill-available;\n  @media (min-width: 768px) {\n    font-size: 14px;\n    line-height: 16px;\n    padding: 16px;\n  }\n"]))),M=F.ZP.textarea(b||(b=(0,V.Z)(["\n  font-size: 12px;\n  line-height: 14px;\n  padding: 19px 16px;\n  border: 1px solid #000000;\n  height: 156px;\n  resize: none;\n  width: -webkit-fill-available;\n  @media (min-width: 768px) {\n    font-size: 14px;\n    line-height: 16px;\n    padding: 18px 16px;\n  }\n"]))),X=F.ZP.p(y||(y=(0,V.Z)(["\n  color: red;\n  position: absolute;\n  bottom: -17px;\n  left: 0;\n"]))),K=F.ZP.div(j||(j=(0,V.Z)(["\n  color: #888;\n  font-size: 12px;\n  position: absolute;\n  bottom: -15px;\n  right: 0;\n"]))),U=function(n){var e=n.type,i=n.name,r=n.register,a=n.errors,o=n.placeholder,s=n.maxLength,p=n.handleInputChange,d=n.isApproachingMax,l=n.charCount;return(0,w.jsx)(w.Fragment,{children:"textarea"===e?(0,w.jsxs)("div",{style:{position:"relative"},children:[(0,w.jsx)(M,(0,t.Z)((0,t.Z)({id:i},r(i)),{},{placeholder:o,onKeyUp:p,maxLength:s})),(0,w.jsxs)(K,{style:{color:d?"red":""},children:[l,"/",s]}),a[i]&&(0,w.jsx)(X,{children:a[i].message})]}):(0,w.jsxs)("div",{style:{position:"relative"},children:[(0,w.jsx)(L,(0,t.Z)((0,t.Z)({id:i},r(i)),{},{type:e,placeholder:o,autoComplete:"true"})),a[i]&&(0,w.jsx)(X,{children:a[i].message})]})})},B=F.ZP.form(z||(z=(0,V.Z)(["\n  width: 100%;\n  max-width: 303px;\n  @media (min-width: 768px) {\n    max-width: 438px;\n  }\n"]))),G=F.ZP.div(_||(_=(0,V.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 12px;\n  @media (min-width: 768px) {\n    margin-bottom: 18px;\n    gap: 18px;\n    max-width: 438px;\n  }\n"]))),H=F.ZP.h3(P||(P=(0,V.Z)(["\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 21px;\n  margin-bottom: 16px;\n  @media (min-width: 768px) {\n    font-size: 24px;\n    font-weight: 600;\n    line-height: 29px;\n    margin-bottom: 22px;\n  }\n"]))),Q=F.ZP.button(A||(A=(0,V.Z)(["\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 18px;\n  padding: 10px 0;\n  background: #686868;\n  color: #fff;\n  border: none;\n  width: 186px;\n  @media (min-width: 768px) {\n    width: 253px;\n    font-size: 22px;\n    line-height: 25px;\n    margin-bottom: 22px;\n  }\n"]))),W=F.ZP.div(k||(k=(0,V.Z)(["\n  width: 100%;\n  background-color: #c9c9c9;\n  padding: 27px 30px;\n  height: max-content;\n  text-align: center;\n  max-width: 688px;\n"]))),Y=(F.ZP.p(O||(O=(0,V.Z)(["\n  font-size: 24px;\n  line-height: 28px;\n  text-align: center;\n  @media (min-width: 768px) {\n    font-size: 24px;\n    line-height: 28px;\n  }\n"]))),F.ZP.section(S||(S=(0,V.Z)(["\n  width: 100%;\n  padding: 30px 0;\n  @media (min-width: 768px) {\n    padding: 60px 0;\n  }\n"])))),nn=F.ZP.div(I||(I=(0,V.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 0 auto;\n  padding-left: 28px;\n  padding-right: 28px;\n  @media (min-width: 768px) {\n    gap: 20px;\n    max-width: 1360px;\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n"]))),en=F.ZP.div(q||(q=(0,V.Z)(["\n  width: 330px;\n  height: 315px;\n  background-color: #ececec;\n  display: none;\n  @media screen and (min-width: 768px) {\n    display: block;\n  }\n  @media (min-width: 768px) {\n    width: 418px;\n    height: 400px;\n  }\n"]))),tn=F.ZP.div(C||(C=(0,V.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 33px;\n  @media (min-width: 768px) {\n    gap: 43px;\n  }\n"]))),rn=F.ZP.h3(E||(E=(0,V.Z)(["\n  width: 192px;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 22px;\n  @media (min-width: 768px) {\n    width: 459px;\n    font-size: 36px;\n    font-weight: 400;\n    line-height: 50px;\n  }\n"]))),an=F.ZP.form($||($=(0,V.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 304px;\n  @media (min-width: 768px) {\n    width: 534px;\n  }\n"]))),on=F.ZP.input(N||(N=(0,V.Z)(["\n  width: 100%;\n  padding: 10px 16px 10px 16px;\n  border: 1px solid #000000;\n  font-size: 12px;\n  line-height: 17px;\n  color: #696969;\n  @media (min-width: 768px) {\n    padding: 14px 16px 14px 16px;\n    font-size: 20px;\n    line-height: 28px;\n  }\n"]))),sn=F.ZP.button(D||(D=(0,V.Z)(["\n  border: none;\n  padding: 11px 27px;\n  background: #191919;\n  font-size: 12px;\n  line-height: 17px;\n  color: #fff;\n  @media (min-width: 768px) {\n    padding: 15px;\n    font-size: 20px;\n    line-height: 28px;\n    border: none;\n  }\n"]))),pn=F.ZP.div(J||(J=(0,V.Z)(["\n  display: flex;\n  width: 100%;\n"]))),dn=F.ZP.p(R||(R=(0,V.Z)(["\n  color: red;\n"]))),ln=F.ZP.p(T||(T=(0,V.Z)(["\n  color: green;\n"]))),cn=function(n){var e=n.formType,i=(0,s.useState)(null),l=(0,o.Z)(i,2),c=l[0],x=l[1],h=(0,s.useState)(!1),m=(0,o.Z)(h,2),v=m[0],b=m[1],y=(0,s.useState)(!0),j=(0,o.Z)(y,2),z=j[0],_=j[1],P=(0,s.useState)(0),A=(0,o.Z)(P,2),k=A[0],O=A[1],S=(0,s.useState)(!1),I=(0,o.Z)(S,2),q=I[0],C=I[1],E=(0,d.I0)();(0,s.useEffect)((function(){var n=localStorage.getItem("contact_us_form");if(n){var e=JSON.parse(n).message||"";O(e.length),C(e.length>=990)}}),[]);var $=(0,f.cI)({mode:"onSubmit",resolver:"subscription"===e?(0,p.X)(g.Io):(0,p.X)(g.kn)}),N=$.register,D=$.handleSubmit,J=$.watch,R=$.setValue,T=$.formState.errors,V=$.reset,F=function(n,e,i,t,r){return i?(0,w.jsx)(r,{children:"\u0412\u0438 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u043f\u0456\u0434\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044f \u043d\u0430 \u0441\u043f\u043e\u0432\u0456\u0449\u0435\u043d\u043d\u044f!"}):n?e.email?(0,w.jsx)(t,{children:e.email.message}):"":(0,w.jsx)(t,{children:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438!"})}(z,T,v,dn,ln),L=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.Io.validate({email:e.email});case 3:E((0,Z.J5)({subscriptionId:1,email:e.email})),V(),b(!0),_(!0),n.next=14;break;case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0),_(!1),b(!1);case 14:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),M=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{x("success"),setTimeout((function(){x(null)}),5e3),E((0,Z.hz)(e)),O(0),V()}catch(i){console.error(i),x("error"),setTimeout((function(){x(null)}),5e3)}case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return u("subscription"===e?null:"contact_us_form",{watch:J,storage:"undefined"!==typeof window?window.localStorage:void 0,setValue:R}),(0,w.jsx)(w.Fragment,{children:"subscription"===e?(0,w.jsx)(Y,{children:(0,w.jsxs)(nn,{children:[(0,w.jsx)(en,{}),(0,w.jsxs)(tn,{children:[(0,w.jsx)(rn,{children:"\u041f\u0456\u0434\u043f\u0438\u0441\u0443\u0439\u0441\u044f \u0442\u0430 \u0431\u0443\u0434\u044c \u0432 \u043a\u0443\u0440\u0441\u0456 \u0443\u0441\u0456\u0445 \u043d\u043e\u0432\u0438\u043d\u043e\u043a \u0442\u0430 \u0437\u043d\u0438\u0436\u043e\u043a!"}),(0,w.jsxs)(an,{onSubmit:D(L),children:[(0,w.jsxs)(pn,{children:[(0,w.jsx)(on,(0,t.Z)((0,t.Z)({type:"email",name:"email",id:"email",placeholder:"Email"},N("email")),{},{autoComplete:"true",onChange:function(){b(!1)}})),(0,w.jsx)(sn,{type:"submit",children:"\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438"})]}),F]})]})]})}):"contact_us"===e?(0,w.jsx)(w.Fragment,{children:"success"===c?(0,w.jsx)(W,{children:(0,w.jsx)("p",{children:"\u0414\u044f\u043a\u0443\u0454\u043c\u043e, \u043c\u0438 \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0435\u043c\u043e \u0432\u0430\u0448 \u043b\u0438\u0441\u0442 \u0456 \u0437\u0432'\u044f\u0436\u0435\u043c\u043e\u0441\u044c \u0437 \u0432\u0430\u043c\u0438 \u043d\u0430\u0439\u0431\u043b\u0438\u0436\u0447\u0438\u043c \u0447\u0430\u0441\u043e\u043c!"})}):(0,w.jsxs)(B,{onSubmit:D(M),children:[(0,w.jsx)(H,{children:"\u0417\u0432\u2019\u044f\u0437\u0430\u0442\u0438\u0441\u044c \u0437 \u043d\u0430\u043c\u0438"}),(0,w.jsxs)(G,{children:[(0,w.jsx)(U,{type:"text",name:"name",register:N,errors:T,placeholder:"\u0406\u043c\u02bc\u044f"}),(0,w.jsx)(U,{type:"email",name:"email",register:N,errors:T,placeholder:"E-mail"}),(0,w.jsx)(U,{type:"textarea",name:"message",register:N,errors:T,placeholder:"\u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f",maxLength:1e3,handleInputChange:function(n){var e=n.target.value.length;O(e),C(e>=90)},isApproachingMax:q,charCount:k})]}),(0,w.jsx)(Q,{type:"submit",disabled:"error"===c||"success"===c,children:"error"===c?"\u041f\u043e\u043c\u0438\u043b\u043a\u0430":"success"===c?"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e":"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438"})]})}):null})}},1085:function(n,e,i){i.d(e,{Io:function(){return r},kn:function(){return a},mp:function(){return o}});var t=i(6727),r=t.Ry().shape({email:t.Z_().required("\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438.").min(6,"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438.").max(63,"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438.").matches(/^[a-zA-Z0-9_][a-zA-Z0-9_.-]*@[a-zA-Z0-9.-]+[a-zA-Z0-9-]*\.[a-zA-Z]{2,4}$/,"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438.")}),a=t.Ry().shape({name:t.Z_().trim().required("\u041f\u043e\u043b\u0435 \u0456\u043c\u02bc\u044f \u043e\u0431\u043e\u0432\u02bc\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f").min(3,"\u041f\u043e\u043b\u0435 \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u044f\u043a \u043c\u0456\u043d\u0456\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0438").max(70,"\u041f\u0435\u0440\u0435\u0432\u0438\u0449\u0435\u043d\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c").matches(/^(?!.*(\s-|-\s)|.*--|.*\u2014\u2014|.*\u2013\u2013|.*\u2013\s|.*\s\u2013|.*\u2014\s|.*\s\u2014)[\u0430-\u044f\u0410-\u042fa-zA-Z\s'\u2019\-\u2013\u2014\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491]*$/,"\u041d\u0435\u0432\u0456\u0440\u043d\u0435 \u0456\u043c\u02bc\u044f"),email:t.Z_().required("\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438.").min(6,"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438.").max(63,"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438.").matches(/^[a-zA-Z0-9_][a-zA-Z0-9_.-]*@[a-zA-Z0-9.-]+[a-zA-Z0-9-]*\.[a-zA-Z]{2,4}$/,"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438."),message:t.Z_().trim().required("\u041f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432\u02bc\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f").min(3,"\u041f\u043e\u043b\u0435 \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u044f\u043a \u043c\u0456\u043d\u0456\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0438").max(1e3,"\u041f\u0435\u0440\u0435\u0432\u0438\u0449\u0435\u043d\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c")}),o=t.Ry().shape({firstName:t.Z_().trim().required("\u041f\u043e\u043b\u0435 \u0456\u043c\u02bc\u044f \u043e\u0431\u043e\u0432\u02bc\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f").min(3,"\u041f\u043e\u043b\u0435 \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u044f\u043a \u043c\u0456\u043d\u0456\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0438").max(70,"\u041f\u0435\u0440\u0435\u0432\u0438\u0449\u0435\u043d\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c").matches(/^(?!.*(\s-|-\s)|.*--|.*\u2014\u2014|.*\u2013\u2013|.*\u2013\s|.*\s\u2013|.*\u2014\s|.*\s\u2014)[\u0430-\u044f\u0410-\u042fa-zA-Z\s'\u2019\-\u2013\u2014\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491]*$/,"\u041d\u0435\u0432\u0456\u0440\u043d\u0435 \u0456\u043c\u02bc\u044f"),secondName:t.Z_().trim().required("\u041f\u043e\u043b\u0435 \u0456\u043c\u02bc\u044f \u043e\u0431\u043e\u0432\u02bc\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f").min(3,"\u041f\u043e\u043b\u0435 \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u044f\u043a \u043c\u0456\u043d\u0456\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0438").max(70,"\u041f\u0435\u0440\u0435\u0432\u0438\u0449\u0435\u043d\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c").matches(/^(?!.*(\s-|-\s)|.*--|.*\u2014\u2014|.*\u2013\u2013|.*\u2013\s|.*\s\u2013|.*\u2014\s|.*\s\u2014)[\u0430-\u044f\u0410-\u042fa-zA-Z\s'\u2019\-\u2013\u2014\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491]*$/,"\u041d\u0435\u0432\u0456\u0440\u043d\u0435 \u0456\u043c\u02bc\u044f"),orderEmail:t.Z_().required("\u041f\u043e\u043b\u0435 \u043f\u043e\u0448\u0442\u0430 \u043e\u0431\u043e\u0432\u02bc\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f").min(6,"\u041f\u043e\u043b\u0435 \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u044f\u043a \u043c\u0456\u043d\u0456\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432").max(63,"\u041f\u0435\u0440\u0435\u0432\u0438\u0449\u0435\u043d\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c").matches(/^[a-zA-Z0-9_][a-zA-Z0-9_.-]*@[a-zA-Z0-9.-]+[a-zA-Z0-9-]*\.[a-zA-Z]{2,4}$/,"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438."),phoneNumber:t.Z_().trim().required("\u041f\u043e\u043b\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443 \u043e\u0431\u043e\u0432\u02bc\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f").min(10,"\u041f\u043e\u043b\u0435 \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u044f\u043a \u043c\u0456\u043d\u0456\u043c\u0443\u043c 10 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432").max(17,"\u041f\u0435\u0440\u0435\u0432\u0438\u0449\u0435\u043d\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c").matches(/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443."),city:t.Z_().trim().required("\u041f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432\u02bc\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f"),warehouse:t.Z_().trim().required("\u041f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432\u02bc\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f"),agreement:t.O7().oneOf([!0],"\u041f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432\u02bc\u044f\u0437\u043a\u043e\u0432\u0435")})}}]);
//# sourceMappingURL=377.0da5c124.chunk.js.map