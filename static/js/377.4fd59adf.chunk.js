"use strict";(self.webpackChunkclothing_store_app=self.webpackChunkclothing_store_app||[]).push([[377],{7377:function(n,e,t){t.d(e,{l:function(){return cn}});var i=t(1413),r=t(4165),a=t(5861),o=t(9439),s=t(1134),d=t(4695),p=t(4942),l=t(7762),c=t(2791),x=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=function(n,e){var t=e.storage,i=e.watch,r=e.setValue,a=e.exclude,s=void 0===a?[]:a,d=e.onDataRestored,u=e.validate,f=void 0!==u&&u,g=e.dirty,Z=void 0!==g&&g,w=e.onTimeout,b=e.timeout,v=i(),y=function(){return t||window.sessionStorage};return(0,c.useEffect)((function(){var e=y().getItem(n);if(e){var t=JSON.parse(e),i=t._timestamp,a=void 0===i?null:i,o=function(n,e){var t={};for(var i in n)h.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(null!=n&&x){var r,a=(0,l.Z)(x(n));try{for(a.s();!(r=a.n()).done;)i=r.value,e.indexOf(i)<0&&m.call(n,i)&&(t[i]=n[i])}catch(o){a.e(o)}finally{a.f()}}return t}(t,["_timestamp"]),p={},c=Date.now();if(b&&c-a>b)return w&&w(),void y().removeItem(n);Object.keys(o).forEach((function(n){!s.includes(n)&&(p[n]=o[n],r(n,o[n],{shouldValidate:f,shouldDirty:Z}))})),d&&d(p)}}),[t,n,d,r]),(0,c.useEffect)((function(){var e=s.length?Object.entries(v).filter((function(n){var e=(0,o.Z)(n,1)[0];return!s.includes(e)})).reduce((function(n,e){var t=(0,o.Z)(e,2),i=t[0],r=t[1];return Object.assign(n,(0,p.Z)({},i,r))}),{}):Object.assign({},v);Object.entries(e).length&&(void 0!==b&&(e._timestamp=Date.now()),y().setItem(n,JSON.stringify(e)))}),[v,b]),{clear:function(){return y().removeItem(n)}}},f=t(9434),g=t(184);var Z,w,b,v,y,j,z,_,P,A,k,O,S,I,$,q,C,E,N,D,J,R=t(1085),T=t(8799),V=t(168),F=t(5867),L=F.ZP.input(Z||(Z=(0,V.Z)(["\n  font-size: 12px;\n  line-height: 14px;\n  padding: 12px 16px;\n  border: 1px solid #000000;\n  width: -webkit-fill-available;\n  border-color: ",";\n  @media (min-width: 768px) {\n    font-size: 14px;\n    line-height: 16px;\n    padding: 16px;\n  }\n  &:focus {\n    outline: none;\n    border: 2px solid #7c7d80;\n  }\n"])),(function(n){return n.$errors&&"red"})),M=F.ZP.textarea(w||(w=(0,V.Z)(["\n  font-size: 12px;\n  line-height: 14px;\n  padding: 19px 16px;\n  border: 1px solid #000000;\n  height: 156px;\n  resize: none;\n  width: -webkit-fill-available;\n  border-color: ",";\n  @media (min-width: 768px) {\n    font-size: 14px;\n    line-height: 16px;\n    padding: 18px 16px;\n  }\n  &:focus {\n    outline: none;\n    border: 2px solid #7c7d80;\n  }\n"])),(function(n){return n.$errors&&"red"})),X=F.ZP.p(b||(b=(0,V.Z)(["\n  color: red;\n  position: absolute;\n  bottom: -13px;\n  font-size: 12px;\n  left: 0;\n  @media (min-width: 768px) {\n    font-size: 16px;\n    bottom: -17px;\n  }\n"]))),K=F.ZP.div(v||(v=(0,V.Z)(["\n  color: #888;\n  font-size: 12px;\n  position: absolute;\n  bottom: -15px;\n  right: 0;\n"]))),U=function(n){var e=n.type,t=n.name,r=n.register,a=n.errors,o=n.placeholder,s=n.maxLength,d=n.handleInputChange,p=n.isApproachingMax,l=n.charCount;return(0,g.jsx)(g.Fragment,{children:"textarea"===e?(0,g.jsxs)("div",{style:{position:"relative"},children:[(0,g.jsx)(M,(0,i.Z)((0,i.Z)({id:t},r(t)),{},{placeholder:o,onKeyUp:d,maxLength:s,$errors:a[t]})),(0,g.jsxs)(K,{style:{color:p?"red":""},children:[l,"/",s]}),a[t]&&(0,g.jsx)(X,{children:a[t].message})]}):(0,g.jsxs)("div",{style:{position:"relative"},children:[(0,g.jsx)(L,(0,i.Z)((0,i.Z)({id:t},r(t)),{},{type:e,placeholder:o,autoComplete:"true",$errors:a[t]})),a[t]&&(0,g.jsx)(X,{children:a[t].message})]})})},B=F.ZP.form(y||(y=(0,V.Z)(["\n  width: 100%;\n  max-width: 303px;\n  @media (min-width: 768px) {\n    max-width: 438px;\n  }\n"]))),G=F.ZP.div(j||(j=(0,V.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 12px;\n  @media (min-width: 768px) {\n    margin-bottom: 18px;\n    gap: 18px;\n    max-width: 438px;\n  }\n"]))),H=F.ZP.h3(z||(z=(0,V.Z)(["\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 21px;\n  margin-bottom: 16px;\n  @media (min-width: 768px) {\n    font-size: 24px;\n    font-weight: 600;\n    line-height: 29px;\n    margin-bottom: 22px;\n  }\n"]))),Q=F.ZP.button(_||(_=(0,V.Z)(["\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 18px;\n  padding: 10px 0;\n  background: #686868;\n  color: #fff;\n  border: none;\n  width: 186px;\n  transition: all 0.5s ease-out;\n  &:hover,\n  &:focus {\n    background: #525151;\n  }\n  @media (min-width: 768px) {\n    width: 253px;\n    font-size: 22px;\n    line-height: 25px;\n    margin-bottom: 22px;\n  }\n"]))),W=F.ZP.div(P||(P=(0,V.Z)(["\n  width: 100%;\n  background-color: #c9c9c9;\n  padding: 27px 30px;\n  height: max-content;\n  text-align: center;\n  max-width: 688px;\n"]))),Y=(F.ZP.p(A||(A=(0,V.Z)(["\n  font-size: 24px;\n  line-height: 28px;\n  text-align: center;\n  @media (min-width: 768px) {\n    font-size: 24px;\n    line-height: 28px;\n  }\n"]))),F.ZP.section(k||(k=(0,V.Z)(["\n  width: 100%;\n  padding: 30px 0;\n  @media (min-width: 768px) {\n    padding: 60px 0;\n  }\n"])))),nn=F.ZP.div(O||(O=(0,V.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 0 auto;\n  padding-left: 28px;\n  padding-right: 28px;\n  @media (min-width: 768px) {\n    gap: 20px;\n    max-width: 1360px;\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n"]))),en=F.ZP.div(S||(S=(0,V.Z)(["\n  width: 330px;\n  height: 315px;\n  background-color: #ececec;\n  display: none;\n  @media screen and (min-width: 768px) {\n    display: block;\n  }\n  @media (min-width: 768px) {\n    width: 418px;\n    height: 400px;\n  }\n"]))),tn=F.ZP.div(I||(I=(0,V.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 33px;\n  @media (min-width: 768px) {\n    gap: 43px;\n  }\n"]))),rn=F.ZP.h3($||($=(0,V.Z)(["\n  width: 192px;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 22px;\n  @media (min-width: 768px) {\n    width: 459px;\n    font-size: 36px;\n    font-weight: 400;\n    line-height: 50px;\n  }\n"]))),an=F.ZP.form(q||(q=(0,V.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 304px;\n  @media (min-width: 768px) {\n    width: 534px;\n  }\n"]))),on=F.ZP.input(C||(C=(0,V.Z)(["\n  width: 100%;\n  padding: 10px 16px 10px 16px;\n  border: 1px solid #000000;\n  font-size: 12px;\n  line-height: 17px;\n  color: #696969;\n  @media (min-width: 768px) {\n    padding: 14px 16px 14px 16px;\n    font-size: 20px;\n    line-height: 28px;\n  }\n  &:focus {\n    outline: none;\n    border: 2px solid #7c7d80;\n  }\n"]))),sn=F.ZP.button(E||(E=(0,V.Z)(["\n  border: none;\n  padding: 11px 27px;\n  background: #191919;\n  font-size: 12px;\n  line-height: 17px;\n  color: #fff;\n  transition: all 0.5s ease-out;\n  &:hover,\n  &:focus {\n    background: #525151;\n  }\n  @media (min-width: 768px) {\n    padding: 15px;\n    font-size: 20px;\n    line-height: 28px;\n    border: none;\n  }\n"]))),dn=F.ZP.div(N||(N=(0,V.Z)(["\n  display: flex;\n  width: 100%;\n"]))),pn=F.ZP.p(D||(D=(0,V.Z)(["\n  color: red;\n"]))),ln=F.ZP.p(J||(J=(0,V.Z)(["\n  color: green;\n"]))),cn=function(n){var e=n.formType,t=(0,c.useState)(null),p=(0,o.Z)(t,2),l=p[0],x=p[1],h=(0,c.useState)(!1),m=(0,o.Z)(h,2),Z=m[0],w=m[1],b=(0,c.useState)(!0),v=(0,o.Z)(b,2),y=v[0],j=v[1],z=(0,c.useState)(0),_=(0,o.Z)(z,2),P=_[0],A=_[1],k=(0,c.useState)(!1),O=(0,o.Z)(k,2),S=O[0],I=O[1],$=(0,f.I0)();(0,c.useEffect)((function(){var n=localStorage.getItem("contact_us_form");if(n){var e=JSON.parse(n).message||"";A(e.length),I(e.length>=990)}}),[]);var q=(0,s.cI)({mode:"onSubmit",resolver:"subscription"===e?(0,d.X)(R.Io):(0,d.X)(R.kn)}),C=q.register,E=q.handleSubmit,N=q.watch,D=q.setValue,J=q.formState.errors,V=q.reset,F=function(n,e,t,i,r){return t?(0,g.jsx)(r,{children:"\u0412\u0438 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u043f\u0456\u0434\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044f \u043d\u0430 \u0441\u043f\u043e\u0432\u0456\u0449\u0435\u043d\u043d\u044f!"}):n?e.email?(0,g.jsx)(i,{children:e.email.message}):"":(0,g.jsx)(i,{children:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438!"})}(y,J,Z,pn,ln),L=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,R.Io.validate({email:e.email});case 3:$((0,T.J5)({subscriptionId:1,email:e.email})),V(),w(!0),j(!0),n.next=14;break;case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0),j(!1),w(!1);case 14:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),M=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{x("success"),setTimeout((function(){x(null)}),5e3),$((0,T.hz)(e)),A(0),V()}catch(t){console.error(t),x("error"),setTimeout((function(){x(null)}),5e3)}case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return u("subscription"===e?null:"contact_us_form",{watch:N,storage:"undefined"!==typeof window?window.localStorage:void 0,setValue:D}),(0,g.jsx)(g.Fragment,{children:"subscription"===e?(0,g.jsx)(Y,{children:(0,g.jsxs)(nn,{children:[(0,g.jsx)(en,{}),(0,g.jsxs)(tn,{children:[(0,g.jsx)(rn,{children:"\u041f\u0456\u0434\u043f\u0438\u0441\u0443\u0439\u0441\u044f \u0442\u0430 \u0431\u0443\u0434\u044c \u0432 \u043a\u0443\u0440\u0441\u0456 \u0443\u0441\u0456\u0445 \u043d\u043e\u0432\u0438\u043d\u043e\u043a \u0442\u0430 \u0437\u043d\u0438\u0436\u043e\u043a!"}),(0,g.jsxs)(an,{onSubmit:E(L),children:[(0,g.jsxs)(dn,{children:[(0,g.jsx)(on,(0,i.Z)((0,i.Z)({type:"email",name:"email",id:"email",placeholder:"Email"},C("email")),{},{autoComplete:"true",onChange:function(){w(!1)}})),(0,g.jsx)(sn,{type:"submit",children:"\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438"})]}),F]})]})]})}):"contact_us"===e?(0,g.jsx)(g.Fragment,{children:"success"===l?(0,g.jsx)(W,{children:(0,g.jsx)("p",{children:"\u0414\u044f\u043a\u0443\u0454\u043c\u043e, \u043c\u0438 \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0435\u043c\u043e \u0432\u0430\u0448 \u043b\u0438\u0441\u0442 \u0456 \u0437\u0432'\u044f\u0436\u0435\u043c\u043e\u0441\u044c \u0437 \u0432\u0430\u043c\u0438 \u043d\u0430\u0439\u0431\u043b\u0438\u0436\u0447\u0438\u043c \u0447\u0430\u0441\u043e\u043c!"})}):(0,g.jsxs)(B,{onSubmit:E(M),children:[(0,g.jsx)(H,{children:"\u0417\u0432\u2019\u044f\u0437\u0430\u0442\u0438\u0441\u044c \u0437 \u043d\u0430\u043c\u0438"}),(0,g.jsxs)(G,{children:[(0,g.jsx)(U,{type:"text",name:"name",register:C,errors:J,placeholder:"\u0406\u043c\u02bc\u044f"}),(0,g.jsx)(U,{type:"email",name:"email",register:C,errors:J,placeholder:"E-mail"}),(0,g.jsx)(U,{type:"textarea",name:"message",register:C,errors:J,placeholder:"\u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f",maxLength:1e3,handleInputChange:function(n){var e=n.target.value.length;A(e),I(e>=90)},isApproachingMax:S,charCount:P})]}),(0,g.jsx)(Q,{type:"submit",disabled:"error"===l||"success"===l,children:"error"===l?"\u041f\u043e\u043c\u0438\u043b\u043a\u0430":"success"===l?"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e":"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438"})]})}):null})}},1085:function(n,e,t){t.d(e,{Io:function(){return r},kn:function(){return a},mp:function(){return o}});var i=t(6727),r=i.Ry().shape({email:i.Z_().required("\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438.").min(6,"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438.").max(63,"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438.").matches(/^[a-zA-Z0-9_][a-zA-Z0-9_.-]*@[a-zA-Z0-9.-]+[a-zA-Z0-9-]*\.[a-zA-Z]{2,4}$/,"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438.")}),a=i.Ry().shape({name:i.Z_().trim().required("\u041f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432\u02bc\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f").min(3,"\u041f\u043e\u043b\u0435 \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u044f\u043a \u043c\u0456\u043d\u0456\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0438").max(70,"\u041f\u0435\u0440\u0435\u0432\u0438\u0449\u0435\u043d\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c").matches(/^(?!.*(\s-|-\s)|.*--|.*\u2014\u2014|.*\u2013\u2013|.*\u2013\s|.*\s\u2013|.*\u2014\s|.*\s\u2014)[\u0430-\u044f\u0410-\u042fa-zA-Z\s'\u2019\-\u2013\u2014\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491]*$/,"\u041d\u0435\u0432\u0456\u0440\u043d\u0435 \u0456\u043c\u02bc\u044f"),email:i.Z_().required("\u041f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432\u02bc\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f").min(6,"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438.").max(63,"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438.").matches(/^[a-zA-Z0-9_][a-zA-Z0-9_.-]*@[a-zA-Z0-9.-]+[a-zA-Z0-9-]*\.[a-zA-Z]{2,4}$/,"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438."),message:i.Z_().trim().required("\u041f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432\u02bc\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f").min(3,"\u041f\u043e\u043b\u0435 \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u044f\u043a \u043c\u0456\u043d\u0456\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0438").max(1e3,"\u041f\u0435\u0440\u0435\u0432\u0438\u0449\u0435\u043d\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c")}),o=i.Ry().shape({firstName:i.Z_().trim().required("\u041f\u043e\u043b\u0435 \u0456\u043c\u02bc\u044f \u043e\u0431\u043e\u0432\u02bc\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f").min(3,"\u041f\u043e\u043b\u0435 \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u044f\u043a \u043c\u0456\u043d\u0456\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0438").max(70,"\u041f\u0435\u0440\u0435\u0432\u0438\u0449\u0435\u043d\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c").matches(/^(?!.*(\s-|-\s)|.*--|.*\u2014\u2014|.*\u2013\u2013|.*\u2013\s|.*\s\u2013|.*\u2014\s|.*\s\u2014)[\u0430-\u044f\u0410-\u042fa-zA-Z\s'\u2019\-\u2013\u2014\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491]*$/,"\u041f\u043e\u043b\u0435 \u043f\u0440\u0438\u0439\u043c\u0430\u0454 \u0442\u0456\u043b\u044c\u043a\u0438 \u043a\u0438\u0440\u0438\u043b\u0438\u0446\u044e \u0442\u0430 \u043b\u0430\u0442\u0438\u043d\u0438\u0446\u044e."),secondName:i.Z_().trim().required("\u041f\u043e\u043b\u0435 \u0456\u043c\u02bc\u044f \u043e\u0431\u043e\u0432\u02bc\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f").min(3,"\u041f\u043e\u043b\u0435 \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u044f\u043a \u043c\u0456\u043d\u0456\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0438").max(70,"\u041f\u0435\u0440\u0435\u0432\u0438\u0449\u0435\u043d\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c").matches(/^(?!.*(\s-|-\s)|.*--|.*\u2014\u2014|.*\u2013\u2013|.*\u2013\s|.*\s\u2013|.*\u2014\s|.*\s\u2014)[\u0430-\u044f\u0410-\u042fa-zA-Z\s'\u2019\-\u2013\u2014\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491]*$/,"\u041f\u043e\u043b\u0435 \u043f\u0440\u0438\u0439\u043c\u0430\u0454 \u0442\u0456\u043b\u044c\u043a\u0438 \u043a\u0438\u0440\u0438\u043b\u0438\u0446\u044e \u0442\u0430 \u043b\u0430\u0442\u0438\u043d\u0438\u0446\u044e."),orderEmail:i.Z_().required("\u041f\u043e\u043b\u0435 \u043f\u043e\u0448\u0442\u0430 \u043e\u0431\u043e\u0432\u02bc\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f").min(6,"\u041f\u043e\u043b\u0435 \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u044f\u043a \u043c\u0456\u043d\u0456\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432").max(63,"\u041f\u0435\u0440\u0435\u0432\u0438\u0449\u0435\u043d\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c").matches(/^[a-zA-Z0-9_][a-zA-Z0-9_.-]*@[a-zA-Z0-9.-]+[a-zA-Z0-9-]*\.[a-zA-Z]{2,4}$/,"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438."),phoneNumber:i.Z_().trim().required("\u041f\u043e\u043b\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443 \u043e\u0431\u043e\u0432\u02bc\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f").min(10,"\u041f\u043e\u043b\u0435 \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u044f\u043a \u043c\u0456\u043d\u0456\u043c\u0443\u043c 10 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432").max(17,"\u041f\u0435\u0440\u0435\u0432\u0438\u0449\u0435\u043d\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c").matches(/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443."),city:i.Z_().trim().required("\u041f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432\u02bc\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f"),warehouse:i.Z_().trim().required("\u041f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432\u02bc\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f"),agreement:i.O7().oneOf([!0],"\u041f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432\u02bc\u044f\u0437\u043a\u043e\u0432\u0435")})}}]);
//# sourceMappingURL=377.4fd59adf.chunk.js.map