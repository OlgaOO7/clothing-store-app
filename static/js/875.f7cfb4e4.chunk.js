"use strict";(self.webpackChunkclothing_store_app=self.webpackChunkclothing_store_app||[]).push([[875],{1454:function(n,t,i){i.d(t,{a:function(){return c}});var e,o,r=i(168),a=i(5867),l=(0,a.F4)(e||(e=(0,r.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),d=a.ZP.div(o||(o=(0,r.Z)(["\n  margin: 0 auto;\n  width: 80px;\n  height: 80px;\n  border: 5px solid #fff;\n  border-top: 5px solid #000;\n  border-radius: 50%;\n  animation: "," 1s infinite linear;\n  margin-top: 15px;\n"])),l),s=i(184),c=function(){return(0,s.jsx)(d,{})}},3960:function(n,t,i){i.r(t),i.d(t,{default:function(){return yi}});var e,o,r,a,l,d,s,c,p,x,h,f,m,u,g,w,j,Z,b,y,v,k,P,z,S,C,I,G,U,E,M,q,L,Q,T,O,V,F,_,A,D,N,R,$,H,Y,B,K,X,W,J,nn,tn,en,on,rn,an,ln,dn,sn,cn,pn,xn,hn,fn,mn,un,gn,wn,jn,Zn,bn,yn=i(4165),vn=i(5861),kn=i(9439),Pn=i(2791),zn=i(9434),Sn=i(1243),Cn=i(4261),In=i(4164),Gn=i(7609),Un=i(168),En=i(5867),Mn=En.ZP.div(e||(e=(0,Un.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1002;\n"]))),qn=En.ZP.div(o||(o=(0,Un.Z)(["\n  position: relative;\n  background: white;\n\n  padding: 36px 28.5px 34px;\n  min-width: 360px;\n  min-height: 262px;\n  text-align: center;\n  box-sizing: border-box;\n  @media (min-width: 1440px) {\n    padding: 99px 138.5px 80px;\n    width: 1130px;\n    height: 612px;\n  }\n"]))),Ln=En.ZP.button(r||(r=(0,Un.Z)(["\n  position: absolute;\n  top: -24px;\n  right: 28px;\n  margin: 0;\n  padding: 0;\n  background: transparent;\n  border: none;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media (min-width: 1024px) {\n    top: -20px;\n    right: -20px;\n  }\n"]))),Qn=En.ZP.svg(a||(a=(0,Un.Z)(["\n  stroke-width: 3px;\n  width: 24px;\n  height: 24px;\n\n  @media (min-width: 1024px) {\n    width: 25px;\n    height: 25px;\n  }\n"]))),Tn=i(184),On=function(n){var t=n.children,i=n.toggleModal,e=n.openModal;(0,Pn.useEffect)((function(){return e?document.body.classList.add("modal-open"):document.body.classList.remove("modal-open"),window.addEventListener("keydown",o),function(){document.body.classList.remove("modal-open"),window.removeEventListener("keydown",o)}}));var o=function(n){if("Escape"===n.code||n.target===n.currentTarget)return i()};return(0,In.createPortal)((0,Tn.jsx)(Mn,{onClick:o,children:(0,Tn.jsxs)(qn,{children:[(0,Tn.jsx)(Ln,{onClick:i,children:(0,Tn.jsx)(Qn,{children:(0,Tn.jsx)("use",{href:"".concat(Gn.Z,"#icon-cross")})})}),t]})}),document.querySelector("#modal-root"))},Vn=i(7689),Fn=i(1087),_n=En.ZP.div(l||(l=(0,Un.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 31px;\n\n  margin-bottom: 88px;\n  button {\n    background: transparent;\n    border: none;\n    display: inline-block;\n    font-family: Gill Sans;\n    font-size: 22px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    color: #000000;\n  }\n"]))),An=(0,En.ZP)(Fn.rU)(d||(d=(0,Un.Z)(["\n  display: inline-block;\n  font-family: Gill Sans;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  color: #000000;\n"]))),Dn=function(n){var t=n.category,i=t.id,e=t.title,o=(0,Vn.s0)();return(0,Tn.jsxs)(_n,{children:[(0,Tn.jsx)(An,{to:"/",children:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"}),(0,Tn.jsx)("span",{children:"|"}),(0,Tn.jsx)(An,{to:"/catalog",children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"}),(0,Tn.jsx)("span",{children:"|"}),(0,Tn.jsx)("button",{onClick:function(){return o("/catalog",{state:{categoryId:i}})},children:e})]})},Nn=i(9705),Rn=i(8870),$n=i(4305),Hn=(i(6497),i(4277),i(6593),En.ZP.img(s||(s=(0,Un.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n\n  @media (max-width: 360px) {\n    max-width: 94px;\n    max-height: 112px;\n    object-fit: cover;\n    object-position: center;\n  }\n\n  @media (min-width: 1440px) {\n    width: 215px;\n    height: 257px;\n    object-fit: cover;\n    object-position: center;\n  }\n"])))),Yn=function(n){var t=n.photos,i=n.renderPhotos,e=(0,$n.G)().isMobileScreen;return(0,Tn.jsx)(Nn.tq,{style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},slidesPerView:3,spaceBetween:e?10:23,pagination:{clickable:!0},navigation:!0,modules:[Rn.tl,Rn.W_],className:"mySwiper",children:t.map((function(n,t){return(0,Tn.jsx)(Nn.o5,{children:(0,Tn.jsx)("li",{children:(0,Tn.jsx)(Hn,{src:n.url,alt:n.color,onClick:function(){i(t)}})})},t)}))})},Bn=i(5652),Kn=En.ZP.aside(c||(c=(0,Un.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 86px;\n  @media (min-width: 1024px) {\n    margin-top: 88px;\n  }\n"]))),Xn=En.ZP.h3(p||(p=(0,Un.Z)(["\n  color: #000;\n  font-family: Gill Sans;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  @media (min-width: 1024px) {\n    font-size: 40px;\n  }\n"]))),Wn=En.ZP.ul(x||(x=(0,Un.Z)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  column-gap: 15px;\n  row-gap: 26px;\n  margin-top: 28px;\n  margin-left: auto;\n  margin-right: auto;\n  @media (min-width: 1024px) {\n    grid-template-columns: repeat(4, 1fr);\n    margin-top: 48px;\n    column-gap: 24px;\n    row-gap: 26px;\n  }\n  @media (min-width: 1440px) {\n    margin-left: 0;\n    margin-right: 0;\n  }\n"]))),Jn=En.ZP.li(h||(h=(0,Un.Z)(["\n  max-width: 322px;\n"]))),nt=(0,En.ZP)(Fn.rU)(f||(f=(0,Un.Z)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),tt=En.ZP.img(m||(m=(0,Un.Z)(["\n  max-height: 100%;\n  max-width: 100%;\n  object-fit: cover;\n\n  @media (max-width: 360px) {\n    max-width: 144px;\n    height: 190px;\n\n    object-fit: cover;\n    object-position: center;\n  }\n\n  @media (min-width: 1440px) {\n    width: 322px;\n    height: 416px;\n    object-fit: cover;\n    object-position: center;\n  }\n"]))),it=En.ZP.h4(u||(u=(0,Un.Z)(["\n  color: #000;\n  font-family: Gill Sans;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  margin-top: 12px;\n  @media (min-width: 1024px) {\n    margin-top: 18px;\n    font-size: 24px;\n  }\n"]))),et=En.ZP.p(g||(g=(0,Un.Z)(["\n  color: #000;\n\n  font-family: Gill Sans;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: normal;\n  margin-top: 6px;\n  @media (min-width: 1024px) {\n    margin-top: 12px;\n    font-size: 24px;\n  }\n"]))),ot=function(n){var t=n.similarProducts,i=n.setClickedIndex,e=n.setQuantity,o=t.content.slice(0,4),r=function(){i(0),e(1)};return(0,Tn.jsxs)(Kn,{children:[(0,Tn.jsx)(Xn,{children:"\u0412\u0430\u043c \u043c\u043e\u0436\u0435 \u0441\u043f\u043e\u0434\u043e\u0431\u0430\u0442\u0438\u0441\u044c"}),(0,Tn.jsx)(Wn,{children:o.map((function(n){var t=n.id,i=n.title,e=n.photos,o=n.price;return(0,Tn.jsx)(Jn,{children:(0,Tn.jsxs)(nt,{to:"/catalog/".concat(t),onClick:r,children:[0!==e.length?(0,Tn.jsx)(tt,{src:e[0].url,alt:i,width:"322",height:"402"}):(0,Tn.jsx)(tt,{src:Bn,alt:"no image",width:"322",height:"402"}),(0,Tn.jsx)(it,{children:i}),(0,Tn.jsxs)(et,{children:[o.value," ",o.currency.code]})]})},t)}))})]})},rt=En.ZP.div(w||(w=(0,Un.Z)(["\n  margin-top: 38px;\n  @media (min-width: 1024px) {\n    margin-top: 46px;\n  }\n"]))),at=En.ZP.div(j||(j=(0,Un.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  margin-top: 14px;\n  @media (min-width: 1024px) {\n    margin-top: 16px;\n  }\n"]))),lt=En.ZP.p(Z||(Z=(0,Un.Z)(["\n  color: #000;\n  font-family: Gill Sans;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  @media (min-width: 1024px) {\n    font-size: 24px;\n  }\n"]))),dt=En.ZP.svg(b||(b=(0,Un.Z)(["\n  display: inline-block;\n  fill: transparent;\n  stroke-width: 1px;\n  stroke: #000;\n  width: 15px;\n  height: 8px;\n  flex-shrink: 0;\n  margin-right: 20px;\n  cursor: pointer;\n  @media (min-width: 1024px) {\n    width: 20px;\n    height: 10px;\n  }\n"]))),st=En.ZP.div(y||(y=(0,Un.Z)(["\n  height: 1px;\n  background: #000000;\n  margin-top: 14px;\n  @media (min-width: 1024px) {\n    margin-top: 12px;\n  }\n"]))),ct=function(){return(0,Tn.jsxs)(rt,{children:[(0,Tn.jsxs)(at,{children:[(0,Tn.jsx)(lt,{children:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430 \u0442\u043e\u0432\u0430\u0440\u0443"}),(0,Tn.jsx)(dt,{children:(0,Tn.jsx)("use",{href:"".concat(Gn.Z,"#icon-vector-13")})})]}),(0,Tn.jsx)(st,{}),(0,Tn.jsxs)(at,{children:[(0,Tn.jsx)(lt,{children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0434\u043e\u0433\u043b\u044f\u0434\u0443 "}),(0,Tn.jsx)(dt,{children:(0,Tn.jsx)("use",{href:"".concat(Gn.Z,"#icon-vector-13")})})]}),(0,Tn.jsx)(st,{})]})},pt=En.ZP.div(v||(v=(0,Un.Z)(["\n  margin-top: 22px;\n  @media (min-width: 1024px) {\n    margin-top: 30px;\n  }\n"]))),xt=En.ZP.p(k||(k=(0,Un.Z)(["\n  color: #000;\n  font-family: Gill Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  margin-bottom: 14px;\n  @media (min-width: 1024px) {\n    font-size: 36px;\n    margin-bottom: 25px;\n  }\n"]))),ht=En.ZP.ul(P||(P=(0,Un.Z)(["\n  display: flex;\n  gap: 12px;\n  @media (min-width: 1024px) {\n    gap: 22px;\n  }\n"]))),ft=En.ZP.div(z||(z=(0,Un.Z)(["\n  box-sizing: border-box;\n  background: ",";\n  width: 25px;\n  height: 25px;\n  border-radius: 25px;\n  border: 1px solid #d9d9d9;\n  cursor: pointer;\n  &.active {\n    border-color: #000000;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px 3px;\n  }\n\n  &:hover,\n  &:focus {\n    border-color: #000000;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px 3px;\n  }\n\n  @media (min-width: 1024px) {\n    width: 61px;\n    height: 61px;\n    border-radius: 31px;\n  }\n"])),(function(n){return n.color&&n.color})),mt=function(n){var t=n.uniqueColors,i=n.colorValue,e=n.setColorValue,o=n.setClickedIndex,r=n.setQuantity;return(0,Tn.jsxs)(pt,{children:[(0,Tn.jsx)(xt,{children:"\u041a\u043e\u043b\u0456\u0440"}),t.length>0&&(0,Tn.jsx)(ht,{children:t.map((function(n,t){return(0,Tn.jsx)("li",{onClick:function(){e(n),o(0),r(1)},children:(0,Tn.jsx)(ft,{color:n,className:i===n?"active":""})},t)}))})]})},ut=En.ZP.p(S||(S=(0,Un.Z)(["\n  color: #000;\n\n  font-family: Gill Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  margin-bottom: 14px;\n  @media (min-width: 1024px) {\n    font-size: 36px;\n    margin-bottom: 21px;\n  }\n"]))),gt=En.ZP.ul(C||(C=(0,Un.Z)(["\n  display: flex;\n  gap: 20px;\n  @media (min-width: 1024px) {\n    gap: 40px;\n  }\n"]))),wt=En.ZP.p(I||(I=(0,Un.Z)(["\n  color: #bababa;\n\n  font-family: Gill Sans;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  cursor: pointer;\n  &.active {\n    color: #414141;\n  }\n  &:hover,\n  &:focus {\n    color: #414141;\n  }\n  @media (min-width: 1024px) {\n    font-size: 32px;\n  }\n"]))),jt=function(n){var t=n.sizesForSelectedColor,i=n.selectSize,e=n.activeSizeId;return(0,Tn.jsxs)("div",{children:[(0,Tn.jsx)(ut,{children:"\u0420\u043e\u0437\u043c\u0456\u0440"}),t.length>0&&(0,Tn.jsx)(gt,{children:t.map((function(n){var t=n.id;return n.characteristics.map((function(n){var o=n.id,r=n.characteristic,a=n.value;return"size"===r.title&&(0,Tn.jsx)("li",{children:(0,Tn.jsx)(wt,{className:e===o?"active":"",onClick:function(){return i(o,t)},children:a})},o)}))}))})]})},Zt=En.ZP.div(G||(G=(0,Un.Z)(["\n  position: relative;\n  display: flex;\n  width: 122px;\n  height: 42px;\n  padding: 12px;\n  justify-content: space-between;\n  align-items: center;\n\n  flex-shrink: 0;\n  border: 1px solid #9d9d9d;\n  box-sizing: border-box;\n  color: #242424;\n\n  font-family: Gill Sans;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  margin-top: 38px;\n  @media (min-width: 1024px) {\n    margin-top: 60px;\n    width: 194px;\n    height: 61px;\n    padding: 20px;\n\n    color: #131313;\n\n    font-family: Inter;\n    font-size: 32px;\n  }\n"]))),bt=En.ZP.div(U||(U=(0,Un.Z)(["\n  display: flex;\n  fill: #9d9d9d;\n  font-family: Gill Sans;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n\n  cursor: pointer;\n\n  & svg {\n    width: 15px;\n    height: 28px;\n    &:hover,\n    &:focus {\n      fill: #242424;\n    }\n    @media (min-width: 1024px) {\n      width: 24px;\n      height: 44px;\n      &:hover,\n      &:focus {\n        fill: #121212;\n      }\n    }\n  }\n  & svg:first-child {\n    width: 8px;\n    height: 28px;\n\n    @media (min-width: 1024px) {\n      width: 17px;\n      height: 44px;\n    }\n  }\n  @media (min-width: 1024px) {\n    font-family: Inter;\n    font-size: 36px;\n  }\n"]))),yt=function(n){var t=n.decreaseQuantity,i=n.increaseQuantity,e=n.quantity;return(0,Tn.jsxs)(Zt,{children:[(0,Tn.jsx)(bt,{onClick:t,children:(0,Tn.jsx)("svg",{children:(0,Tn.jsx)("use",{href:"".concat(Gn.Z,"#icon-minus")})})}),e,(0,Tn.jsx)(bt,{onClick:i,children:(0,Tn.jsx)("svg",{children:(0,Tn.jsx)("use",{href:"".concat(Gn.Z,"#icon-plus")})})})]})},vt=En.ZP.div(E||(E=(0,Un.Z)(["\n  @media (max-width: 360px) {\n    width: 304px;\n    height: 310px;\n    overflow: hidden;\n  }\n  min-width: 304px;\n  min-height: 310px;\n  @media (max-width: 1440px) {\n    max-width: 692px;\n    max-height: 703px;\n    overflow: hidden;\n  }\n"]))),kt=En.ZP.img(M||(M=(0,Un.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n\n  @media (max-width: 360px) {\n    max-width: 304px;\n    max-height: 310px;\n    object-fit: cover;\n    object-position: center;\n  }\n\n  @media (min-width: 1440px) {\n    width: 692px;\n    height: 703px;\n    object-fit: cover;\n    object-position: center;\n  }\n"]))),Pt=function(n){var t=n.filterPhoto,i=n.clickedIndex;return(0,Tn.jsx)(vt,{children:0!==t.length?(0,Tn.jsx)(kt,{src:t[i].url,alt:t[i].color}):(0,Tn.jsx)(kt,{src:Bn,alt:"no image"})})},zt=En.ZP.h3(q||(q=(0,Un.Z)(["\n  color: #000;\n  font-family: Gill Sans;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  margin-bottom: 24px;\n  @media (min-width: 768px) {\n    font-size: 48px;\n    margin-bottom: 48px;\n  }\n"]))),St=En.ZP.div(L||(L=(0,Un.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Ct=En.ZP.table(Q||(Q=(0,Un.Z)(["\n  width: 853px;\n  height: auto;\n  border: 0.5px solid #000;\n  border-collapse: collapse;\n  @media (max-width: 360px) {\n    width: 303px;\n    height: 103px;\n  }\n  @media (min-width: 768px) {\n    border-bottom: 1px solid #000;\n  }\n  @media (min-width: 1440px) {\n    height: 240px;\n  }\n  th {\n    text-align: left;\n    color: #000;\n    border: 0.427px solid #000;\n    background: #eaeaea;\n    font-family: Gill Sans;\n    font-size: 10.25px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    padding: 6px 5px;\n    @media (min-width: 768px) {\n      font-size: 24px;\n      padding: 14px 10px 14px 12px;\n    }\n  }\n  td {\n    color: #000;\n    border: 0.427px solid #000;\n    font-family: Gill Sans;\n    font-size: 10.25px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    @media (min-width: 768px) {\n      font-size: 24px;\n    }\n  }\n"]))),It=En.ZP.p(T||(T=(0,Un.Z)(["\n  color: #eaeaea;\n  text-align: center;\n  font-family: Roboto;\n  font-size: 22px;\n  font-style: italic;\n  font-weight: 700;\n  line-height: normal;\n  letter-spacing: 4.62px;\n  margin-top: 13px;\n  @media (min-width: 768px) {\n    margin-top: 32px;\n    font-size: 48px;\n    letter-spacing: 10.08px;\n  }\n"]))),Gt=function(){return(0,Tn.jsxs)(Tn.Fragment,{children:[(0,Tn.jsx)(zt,{children:" \u0420\u043e\u0437\u043c\u0456\u0440\u043d\u0430 \u0441\u0456\u0442\u043a\u0430"}),(0,Tn.jsx)(St,{children:(0,Tn.jsxs)(Ct,{children:[(0,Tn.jsxs)("colgroup",{children:[(0,Tn.jsx)("col",{style:{width:"30%"}}),(0,Tn.jsx)("col",{style:{width:"14%"}}),(0,Tn.jsx)("col",{style:{width:"14%"}}),(0,Tn.jsx)("col",{style:{width:"14%"}}),(0,Tn.jsx)("col",{style:{width:"14%"}}),(0,Tn.jsx)("col",{style:{width:"14%"}})]}),(0,Tn.jsxs)("tbody",{children:[(0,Tn.jsxs)("tr",{children:[(0,Tn.jsx)("th",{children:"\u0420\u043e\u0437\u043c\u0456\u0440"}),(0,Tn.jsx)("td",{children:"XS"}),(0,Tn.jsx)("td",{children:"S"}),(0,Tn.jsx)("td",{children:"M"}),(0,Tn.jsx)("td",{children:"L"}),(0,Tn.jsx)("td",{children:"XL"})]}),(0,Tn.jsxs)("tr",{children:[(0,Tn.jsx)("th",{children:"\u041e\u0431\u0445\u0432\u0430\u0442 \u0433\u0440\u0443\u0434\u0435\u0439"}),(0,Tn.jsx)("td",{children:"75-84"}),(0,Tn.jsx)("td",{children:"85-90"}),(0,Tn.jsx)("td",{children:"91-95"}),(0,Tn.jsx)("td",{children:"96-100"}),(0,Tn.jsx)("td",{children:"101-105"})]}),(0,Tn.jsxs)("tr",{children:[(0,Tn.jsx)("th",{children:"\u041e\u0431\u0445\u0432\u0430\u0442\u0438 \u0442\u0430\u043b\u0456\u0457"}),(0,Tn.jsx)("td",{children:"60-64"}),(0,Tn.jsx)("td",{children:"65-70"}),(0,Tn.jsx)("td",{children:"71-75"}),(0,Tn.jsx)("td",{children:"76-80"}),(0,Tn.jsx)("td",{children:"81-85"})]}),(0,Tn.jsxs)("tr",{children:[(0,Tn.jsx)("th",{children:"\u041e\u0431\u0445\u0432\u0430\u0442\u0438 \u0431\u0435\u0434\u0435\u0440"}),(0,Tn.jsx)("td",{children:"85-89"}),(0,Tn.jsx)("td",{children:"90-94"}),(0,Tn.jsx)("td",{children:"95-98"}),(0,Tn.jsx)("td",{children:"99-104"}),(0,Tn.jsx)("td",{children:"105-110"})]})]})]})}),(0,Tn.jsx)(It,{children:"ZATYSHNA"})]})},Ut=En.ZP.div(O||(O=(0,Un.Z)(["\n  position: fixed;\n  top: 76px;\n  right: 20px;\n  width: 100%;\n  height: 100%;\n  z-index: 1002;\n  /* overflow: auto; */\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  @media (min-width: 768px) {\n    top: 87px;\n    right: 40px;\n  }\n"]))),Et=En.ZP.div(V||(V=(0,Un.Z)(["\n  position: relative;\n  right: 10px;\n  background-color: #fff;\n  width: 296px;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  @media (min-width: 768px) {\n    width: 437px;\n    right: 10px;\n  }\n"]))),Mt=En.ZP.button(F||(F=(0,Un.Z)(["\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  @media (min-width: 768px) {\n    top: 9px;\n  }\n"]))),qt=En.ZP.svg(_||(_=(0,Un.Z)(["\n  fill: #eee;\n"]))),Lt=function(n){var t=n.children,i=n.closeModal,e=(0,Pn.useCallback)((function(n){"Escape"===n.code&&i()}),[i]),o=(0,Pn.useCallback)((function(n){n.currentTarget===n.target&&i()}),[i]);return(0,Pn.useEffect)((function(){return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}})),(0,In.createPortal)((0,Tn.jsx)(Ut,{onClick:o,children:(0,Tn.jsxs)(Et,{children:[(0,Tn.jsx)(Mt,{type:"button",onClick:i,children:(0,Tn.jsx)(qt,{width:"24",height:"24",children:(0,Tn.jsx)("use",{href:"".concat(Gn.Z,"#icon-cross")})})}),(0,Tn.jsx)("div",{children:t})]})}),document.querySelector("#modal-root"))},Qt=i(6565),Tt=i(8379),Ot=i(8117),Vt=En.ZP.div(A||(A=(0,Un.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),Ft=En.ZP.div(D||(D=(0,Un.Z)(["\n  display: flex;\n  gap: 16px;\n"]))),_t=En.ZP.img(N||(N=(0,Un.Z)(["\n  width: 72px;\n  height: 94px;\n  @media (min-width: 768px) {\n    width: 108px;\n    height: 140px;\n  }\n"]))),At=En.ZP.div(R||(R=(0,Un.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 16p;\n  width: max-content;\n  color: #000;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n"]))),Dt=En.ZP.p($||($=(0,Un.Z)(["\n  margin-bottom: 8px;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 130%;\n  @media (min-width: 768px) {\n    font-size: 18px;\n    line-height: 140%;\n  }\n"]))),Nt=En.ZP.p(H||(H=(0,Un.Z)(["\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n"]))),Rt=En.ZP.button(Y||(Y=(0,Un.Z)(["\n  width: 24px;\n  height: 24px;\n  margin-right: 12px;\n  background-color: transparent;\n  border: none;\n  @media (min-width: 768px) {\n    margin-right: 24px;\n  }\n"]))),$t=En.ZP.svg(B||(B=(0,Un.Z)(["\n  width: 24px;\n  height: 24px;\n"]))),Ht=function(n){var t=n.item,i=(0,Vn.TH)(),e=(0,zn.I0)(),o=function(){var n=(0,vn.Z)((0,yn.Z)().mark((function n(t){return(0,yn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e((0,Ot.x$)(t));case 2:return n.next=4,e((0,Ot.dv)());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,Tn.jsxs)(Vt,{children:[(0,Tn.jsxs)(Ft,{children:[(0,Tn.jsx)(Fn.rU,{to:"/catalog/".concat(t.productId),state:{from:i},children:(0,Tn.jsx)(_t,{src:t.photoUrl,alt:(0,Tt.$)(t.productTitle,15)})}),(0,Tn.jsxs)(At,{children:[(0,Tn.jsx)(Fn.rU,{to:"/catalog/".concat(t.productId),state:{from:i},style:{color:"#000"},children:(0,Tn.jsx)(Dt,{children:(0,Tt.$)(t.productTitle,15)})}),(0,Tn.jsx)("p",{children:t.sku.characteristics[1].name}),(0,Tn.jsx)("p",{children:t.sku.characteristics[0].name}),(0,Tn.jsxs)(Nt,{children:[t.quantity," x ",(0,Qt.T)(t.price)," ",t.currencyCode]})]})]}),(0,Tn.jsx)(Rt,{onClick:function(){return o(t.sku.id)},children:(0,Tn.jsx)($t,{width:13,height:13,children:(0,Tn.jsx)("use",{href:"".concat(Gn.Z,"#icon-cross")})})})]})},Yt=i(1454),Bt=i(2894),Kt=En.ZP.p(K||(K=(0,Un.Z)(["\n  background-color: #9d9d9d;\n  padding: 7px 25px;\n  color: #000000;\n  font-size: 14px;\n  line-height: 140%;\n  @media (min-width: 768px) {\n    padding: 10px 38px;\n    font-size: 16px;\n  }\n"]))),Xt=En.ZP.div(X||(X=(0,Un.Z)(["\n  padding: 11px 25px 38px 25px;\n  @media (min-width: 768px) {\n    padding: 8px 38px 42px;\n  }\n"]))),Wt=En.ZP.div(W||(W=(0,Un.Z)(["\n  padding-bottom: 11px;\n  border-bottom: 1px solid #c6c6c6;\n  @media (min-width: 768px) {\n    padding-bottom: 8px;\n  }\n"]))),Jt=En.ZP.ul(J||(J=(0,Un.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 247px;\n  padding-bottom: 11px;\n  overflow-y: auto;\n  @media (min-width: 768px) {\n    gap: 18px;\n    max-height: 377px;\n    padding-bottom: 8px;\n  }\n  /* -webkit-overflow-scrolling: touch; */\n\n  /* IE and Edge: */\n  -ms-overflow-style: none;\n  &::-ms-scrollbar-thumb {\n    background-color: #888;\n  }\n  &::-ms-scrollbar-track {\n    background-color: #f1f1f1;\n  }\n\n  /* FireFox: */\n  scrollbar-width: thin;\n  scrollbar-color: #888 #f1f1f1;\n  scroll-behavior: smooth;\n\n  /* Chrome and Safari: */\n  &::-webkit-scrollbar {\n    width: 3px;\n    @media (min-width: 768px) {\n      width: 6px;\n    }\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: #888;\n    border-radius: 6px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: #f1f1f1;\n    border-radius: 6px;\n  }\n"]))),ni=(En.ZP.div(nn||(nn=(0,Un.Z)(["\n  display: flex;\n"]))),En.ZP.div(tn||(tn=(0,Un.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n"])))),ti=(0,En.ZP)(Fn.rU)(en||(en=(0,Un.Z)(["\n  display: flex;\n  padding: 8px 20px;\n  justify-content: center;\n  color: #fff;\n  background-color: #0e0e0e;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 140%;\n  border: 1px solid #191919;\n  @media (min-width: 768px) {\n    padding: 9px 28px;\n    font-size: 18px;\n    font-weight: 400;\n  }\n"]))),ii=(0,En.ZP)(Fn.rU)(on||(on=(0,Un.Z)(["\n  display: flex;\n  padding: 8px 20px;\n  justify-content: center;\n  color: #191919;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 140%;\n  border: 1px solid #191919;\n  @media (min-width: 768px) {\n    padding: 9px 28px;\n    font-size: 18px;\n    font-weight: 400;\n  }\n"]))),ei=En.ZP.div(rn||(rn=(0,Un.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* max-width: max-content; */\n  /* gap: 71px; */\n  padding: 24px 28.5px 0px;\n  @media (min-width: 768px) {\n    padding: 32px 64px 0px;\n  }\n"]))),oi=En.ZP.div(an||(an=(0,Un.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  gap: 71px;\n  @media (min-width: 768px) {\n    margin-bottom: 32px;\n    gap: 101px;\n  }\n"]))),ri=En.ZP.p(ln||(ln=(0,Un.Z)(["\n  color: #000;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 130%;\n  @media (min-width: 768px) {\n    font-size: 18px;\n    line-height: 140%;\n  }\n"]))),ai=En.ZP.p(dn||(dn=(0,Un.Z)(["\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 130%;\n  text-align: right;\n  white-space: nowrap;\n  @media (min-width: 768px) {\n    font-size: 16px;\n    line-height: 140%;\n  }\n"]))),li=function(n){var t=n.closeModal,i=n.toggleCartModal,e=(0,Pn.useState)([]),o=(0,kn.Z)(e,2),r=o[0],a=o[1],l=(0,Pn.useState)(null),d=(0,kn.Z)(l,2),s=d[0],c=d[1],p=(0,Pn.useState)(""),x=(0,kn.Z)(p,2),h=x[0],f=x[1],m=(0,zn.I0)(),u=(0,Vn.TH)(),g=(0,zn.v9)(Bt.KY),w=(0,zn.v9)(Bt.wU);return(0,Pn.useEffect)((function(){try{m((0,Ot.dv)())}catch(n){console.error("Error fetching data:",n)}}),[m]),(0,Pn.useEffect)((function(){a(g.items),c(g.totalAmount),f(g.currencyCode)}),[g]),(0,Tn.jsx)(Lt,{closeModal:t,toggleModal:i,children:w?(0,Tn.jsx)(Yt.a,{}):g.items&&g.items.length>0?(0,Tn.jsxs)("div",{children:[(0,Tn.jsx)(Kt,{children:"\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0434\u0430\u043d\u043e \u0432 \u043a\u043e\u0448\u0438\u043a"}),(0,Tn.jsxs)(Xt,{children:[(0,Tn.jsx)(Wt,{children:(0,Tn.jsx)(Jt,{children:r&&r.map((function(n){return(0,Tn.jsx)("li",{children:(0,Tn.jsx)(Ht,{item:n})},n.sku.id)}))})}),(0,Tn.jsxs)(ei,{children:[(0,Tn.jsxs)(oi,{children:[(0,Tn.jsx)(ri,{children:"\u0420\u0430\u0437\u043e\u043c:"}),(0,Tn.jsxs)(ai,{children:[(0,Qt.T)(s)," ",h]})]}),(0,Tn.jsxs)(ni,{children:[(0,Tn.jsx)(ti,{to:"/order",state:{from:u,sessionId:null===g||void 0===g?void 0:g.sessionId},children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),(0,Tn.jsx)(ii,{to:"/cart",state:{from:u},children:"\u041a\u043e\u0448\u0438\u043a"})]})]})]})]}):(0,Tn.jsx)("div",{children:(0,Tn.jsx)(Kt,{children:"\u0412\u0430\u0448 \u043a\u043e\u0448\u0438\u043a \u043f\u0443\u0441\u0442\u0438\u0439"})})})},di=En.ZP.div(sn||(sn=(0,Un.Z)(["\n  box-sizing: border-box;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 106px 28px 128px;\n  @media (min-width: 1024px) {\n    padding: 162px 40px 162px;\n  }\n"]))),si=En.ZP.div(cn||(cn=(0,Un.Z)(["\n  @media (min-width: 768px) {\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-template-rows: 1fr;\n  }\n"]))),ci=En.ZP.div(pn||(pn=(0,Un.Z)(["\n  max-width: 692px;\n  @media (min-width: 1440px) {\n    width: 692px;\n  }\n"]))),pi=En.ZP.ul(xn||(xn=(0,Un.Z)(["\n  margin-top: 11px;\n  @media (min-width: 768px) {\n    margin-top: 23px;\n  }\n"]))),xi=En.ZP.div(hn||(hn=(0,Un.Z)(["\n  margin-top: 38px;\n  @media (min-width: 768px) {\n    margin-top: 0;\n    margin-left: 50px;\n  }\n  @media (min-width: 1024px) {\n    margin-left: 115px;\n  }\n"]))),hi=En.ZP.h2(fn||(fn=(0,Un.Z)(["\n  color: #000;\n\n  font-family: Gill Sans;\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  @media (min-width: 1024px) {\n    font-size: 64px;\n  }\n"]))),fi=En.ZP.p(mn||(mn=(0,Un.Z)(["\n  color: #000;\n  font-family: Gill Sans;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  margin-top: 10px;\n  @media (min-width: 1024px) {\n    font-size: 40px;\n    margin-top: 25px;\n  }\n"]))),mi=En.ZP.p(un||(un=(0,Un.Z)(["\n  color: #000;\n\n  font-family: Gill Sans;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: normal;\n  margin-top: 20px;\n  text-align: justify;\n  @media (min-width: 1024px) {\n    font-size: 24px;\n    margin-top: 23px;\n  }\n"]))),ui=En.ZP.div(gn||(gn=(0,Un.Z)(["\n  position: relative;\n  margin-top: 32px;\n  @media (min-width: 1024px) {\n    margin-top: 47px;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n"]))),gi=En.ZP.button(wn||(wn=(0,Un.Z)(["\n  background: transparent;\n  border: none;\n  margin: 0;\n  padding: 0;\n  color: #000;\n  font-family: Gill Sans;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: normal;\n  margin-top: 14px;\n  text-decoration-line: underline;\n\n  @media (min-width: 1024px) {\n    font-size: 20px;\n  }\n"]))),wi=En.ZP.p(jn||(jn=(0,Un.Z)(["\n  color: #242424;\n\n  font-family: Gill Sans;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  margin-top: 38px;\n  @media (min-width: 1024px) {\n    margin-top: 60px;\n\n    font-size: 32px;\n  }\n"]))),ji=En.ZP.p(Zn||(Zn=(0,Un.Z)(["\n  position: absolute;\n  font-size: 10px;\n  bottom: -15px;\n\n  color: #ff0000;\n  @media (min-width: 1024px) {\n    font-size: 18px;\n    bottom: -25px;\n  }\n"]))),Zi=En.ZP.button(bn||(bn=(0,Un.Z)(["\n  display: flex;\n  width: 189px;\n  height: 38px;\n  padding: 12px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n  background: #686868;\n  color: #fff;\n  border: none;\n\n  font-family: Gill Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  margin-top: 18px;\n  &:disabled {\n    cursor: not-allowed;\n  }\n  @media (min-width: 1024px) {\n    width: 338px;\n    height: 72px;\n    padding: 10px;\n\n    font-size: 32px;\n    margin-top: 49px;\n  }\n"]))),bi=function(n){var t=n.productsId,i=(0,Pn.useState)([]),e=(0,kn.Z)(i,2),o=e[0],r=e[1],a=(0,Pn.useState)([]),l=(0,kn.Z)(a,2),d=l[0],s=l[1],c=(0,Pn.useState)(1),p=(0,kn.Z)(c,2),x=p[0],h=p[1],f=(0,Pn.useState)(0),m=(0,kn.Z)(f,2),u=m[0],g=m[1],w=(0,Pn.useState)(null),j=(0,kn.Z)(w,2),Z=j[0],b=j[1],y=(0,Pn.useState)(null),v=(0,kn.Z)(y,2),k=v[0],P=v[1],z=(0,Pn.useState)(null),S=(0,kn.Z)(z,2),C=S[0],I=S[1],G=(0,Pn.useState)(!1),U=(0,kn.Z)(G,2),E=U[0],M=U[1],q=(0,Pn.useState)(null),L=(0,kn.Z)(q,2),Q=L[0],T=L[1],O=(0,Pn.useState)(!1),V=(0,kn.Z)(O,2),F=V[0],_=V[1],A=(0,Pn.useState)(!1),D=(0,kn.Z)(A,2),N=D[0],R=D[1],$=(0,$n.G)().isMobileScreen,H=(0,zn.I0)(),Y=(0,Pn.useState)(!1),B=(0,kn.Z)(Y,2),K=B[0],X=B[1],W=(0,zn.v9)(Bt.KY);if((0,Pn.useEffect)((function(){var n=function(){var n=(0,vn.Z)((0,yn.Z)().mark((function n(){var i,e,o,a,l;return(0,yn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Sn.Z.get("/products/".concat(t));case 3:i=n.sent,e=i.data,r(e),o=e.skuSet[0].characteristics.find((function(n){return"color"===n.characteristic.title})),a=o.value,b(a),l=e.skuSet[0].availableQuantity,T(l),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430:",n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,vn.Z)((0,yn.Z)().mark((function n(){var i,e;return(0,yn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Sn.Z.get("/products/similar_products/".concat(t));case 3:i=n.sent,e=i.data,s(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430:",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n(),i(),window.scrollTo({top:0,behavior:"smooth"})}),[t]),(0,Pn.useEffect)((function(){try{H((0,Ot.dv)())}catch(n){console.error("Error:",n)}}),[H]),!o||0===o.length||!d||0===d.length)return(0,Tn.jsx)("div",{children:"Loading..."});var J=Array.from(new Set(o.skuSet.flatMap((function(n){return n.characteristics.filter((function(n){return"color"===n.characteristic.title})).map((function(n){return n.value}))})))),nn=o.photos.filter((function(n){return n.colorValue===Z})),tn=o.skuSet.filter((function(n){return n.characteristics.some((function(n){var t=n.characteristic,i=n.value;return"color"===t.title&&i===Z}))})),en=function(){return M((function(n){return!n}))},on=function(){X(!K)},rn=function(){var n=(0,vn.Z)((0,yn.Z)().mark((function n(){var i,e,r;return(0,yn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!W.items){n.next=5;break}if(!((i=W.items.find((function(n){return n.sku.id===C})))&&i.quantity+x>Q)){n.next=5;break}return _(!0),n.abrupt("return");case 5:if(!C){n.next=16;break}return(e=localStorage.getItem("userUid"))||(e=(0,Cn.Z)(),localStorage.setItem("userUid",e)),r={sessionId:e,skuId:C,price:o.price.value,quantity:x,amount:o.price.value*x,productId:t},n.next=11,H((0,Ot.Bk)(r));case 11:return n.next=13,H((0,Ot.dv)());case 13:on(),n.next=17;break;case 16:R(!0);case 17:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,Tn.jsxs)(Tn.Fragment,{children:[(0,Tn.jsxs)(di,{children:[!$&&(0,Tn.jsx)(Dn,{category:o.category}),(0,Tn.jsxs)(si,{children:[(0,Tn.jsxs)(ci,{children:[(0,Tn.jsx)(Pt,{filterPhoto:nn,clickedIndex:u}),nn.length>1&&(0,Tn.jsx)(pi,{children:(0,Tn.jsx)(Yn,{photos:nn,renderPhotos:g})})]}),(0,Tn.jsxs)(xi,{children:[(0,Tn.jsx)(hi,{children:o.title}),(0,Tn.jsxs)(fi,{children:[o.price.value," ",o.price.currency.code]}),(0,Tn.jsx)(mi,{children:o.description}),(0,Tn.jsx)(mt,{uniqueColors:J,colorValue:Z,setClickedIndex:g,setColorValue:b,setQuantity:h}),(0,Tn.jsxs)(ui,{children:[(0,Tn.jsx)(jt,{sizesForSelectedColor:tn,selectSize:function(n,t){n===k?(P(null),I(null)):(P(n),I(t),R(!1));var i=o.skuSet.find((function(n){return n.id===t}));i&&(T(i.availableQuantity),h(1))},activeSizeId:k}),N&&(0,Tn.jsx)(ji,{children:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0440\u043e\u0437\u043c\u0456\u0440"}),(0,Tn.jsx)(gi,{onClick:en,children:"\u0420\u043e\u0437\u043c\u0456\u0440\u043d\u0430 \u0441\u0456\u0442\u043a\u0430"})]}),Q<=0?(0,Tn.jsx)(wi,{children:"\u041d\u0435\u043c\u0430\u0454 \u0432 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456"}):(0,Tn.jsxs)("div",{style:{position:"relative"},children:[(0,Tn.jsx)(yt,{decreaseQuantity:function(){1!==x&&(h((function(n){return n-1})),_(!1))},increaseQuantity:function(){Q>x?(h((function(n){return n+1})),_(!1)):_(!0)},quantity:x}),F&&(0,Tn.jsx)(ji,{children:"\u0411\u0456\u043b\u044c\u0448\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0446\u044c\u043e\u0433\u043e \u0442\u043e\u0432\u0430\u0440\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430"})]}),(0,Tn.jsx)(Zi,{type:"button",onClick:rn,disabled:Q<=0,children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0432 \u043a\u043e\u0448\u0438\u043a"}),K&&(0,Tn.jsx)(li,{closeModal:on,toggleCartModal:on}),(0,Tn.jsx)(ct,{})]})]}),0!==d.content.length&&(0,Tn.jsx)(ot,{setQuantity:h,similarProducts:d,setClickedIndex:g})]}),E&&(0,Tn.jsx)(On,{toggleModal:en,openModal:E,children:(0,Tn.jsx)(Gt,{})})]})},yi=function(){var n=(0,Vn.UO)().productsId;return(0,Tn.jsx)("main",{children:(0,Tn.jsx)(bi,{productsId:n})})}},8379:function(n,t,i){i.d(t,{$:function(){return e}});var e=function(n,t){return n.length>t?n.substring(0,t-3)+"...":n}},4261:function(n,t,i){i.d(t,{Z:function(){return c}});var e,o={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},r=new Uint8Array(16);function a(){if(!e&&!(e="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(r)}for(var l=[],d=0;d<256;++d)l.push((d+256).toString(16).slice(1));function s(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return l[n[t+0]]+l[n[t+1]]+l[n[t+2]]+l[n[t+3]]+"-"+l[n[t+4]]+l[n[t+5]]+"-"+l[n[t+6]]+l[n[t+7]]+"-"+l[n[t+8]]+l[n[t+9]]+"-"+l[n[t+10]]+l[n[t+11]]+l[n[t+12]]+l[n[t+13]]+l[n[t+14]]+l[n[t+15]]}var c=function(n,t,i){if(o.randomUUID&&!t&&!n)return o.randomUUID();var e=(n=n||{}).random||(n.rng||a)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,t){i=i||0;for(var r=0;r<16;++r)t[i+r]=e[r];return t}return s(e)}},4925:function(n,t,i){function e(n,t){if(null==n)return{};var i,e,o=function(n,t){if(null==n)return{};var i,e,o={},r=Object.keys(n);for(e=0;e<r.length;e++)i=r[e],t.indexOf(i)>=0||(o[i]=n[i]);return o}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(e=0;e<r.length;e++)i=r[e],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(o[i]=n[i])}return o}i.d(t,{Z:function(){return e}})}}]);
//# sourceMappingURL=875.f7cfb4e4.chunk.js.map