"use strict";(self.webpackChunkclothing_store_app=self.webpackChunkclothing_store_app||[]).push([[478],{3960:function(n,t,e){e.r(t),e.d(t,{default:function(){return ze}});var i,o,r,d,a,l,s,c,p,x,h,u,f,m,g,w,b,j,Z,y,v,k,P,z,S,I,C,U,E,G,M,q,L,Q,T,O,V,_,A,D,F,N,R,$,H,Y,B,K,X,W,J,nn,tn,en,on,rn,dn,an,ln,sn,cn,pn,xn,hn,un,fn,mn,gn,wn,bn,jn,Zn,yn,vn,kn=e(4165),Pn=e(5861),zn=e(9439),Sn=e(2791),In=e(9434),Cn=e(1243),Un=e(4261),En=e(4164),Gn=e(7609),Mn=e(168),qn=e(5867),Ln=qn.ZP.div(i||(i=(0,Mn.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1002;\n"]))),Qn=qn.ZP.div(o||(o=(0,Mn.Z)(["\n  position: relative;\n  background: white;\n\n  padding: 36px 28.5px 34px;\n  min-width: 360px;\n  min-height: 262px;\n  text-align: center;\n  box-sizing: border-box;\n  @media (min-width: 1440px) {\n    padding: 99px 138.5px 80px;\n    width: 1130px;\n    height: 612px;\n  }\n"]))),Tn=qn.ZP.button(r||(r=(0,Mn.Z)(["\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  margin: 0;\n  padding: 0;\n  background: transparent;\n  border: none;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media (min-width: 1024px) {\n    top: 32px;\n    right: 32px;\n  }\n"]))),On=qn.ZP.svg(d||(d=(0,Mn.Z)(["\n  stroke-width: 2px;\n  width: 24px;\n  height: 24px;\n"]))),Vn=e(184),_n=function(n){var t=n.children,e=n.toggleModal,i=n.openModal;(0,Sn.useEffect)((function(){return i?document.body.classList.add("modal-open"):document.body.classList.remove("modal-open"),window.addEventListener("keydown",o),function(){document.body.classList.remove("modal-open"),window.removeEventListener("keydown",o)}}));var o=function(n){if("Escape"===n.code||n.target===n.currentTarget)return e()};return(0,En.createPortal)((0,Vn.jsx)(Ln,{onClick:o,children:(0,Vn.jsxs)(Qn,{children:[(0,Vn.jsx)(Tn,{onClick:e,children:(0,Vn.jsx)(On,{children:(0,Vn.jsx)("use",{href:"".concat(Gn.Z,"#icon-cross")})})}),t]})}),document.querySelector("#modal-root"))},An=e(7689),Dn=e(1087),Fn=qn.ZP.div(a||(a=(0,Mn.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 18px;\n\n  margin-bottom: 52px;\n\n  button {\n    margin: 0;\n    background: transparent;\n    border: none;\n    display: inline-block;\n    font-family: Gill Sans;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 140%;\n    color: #3f3831;\n  }\n\n  @media (min-width: 1024px) {\n    gap: 24px;\n    margin-bottom: 92px;\n\n    button {\n      font-size: 22px;\n      line-height: 130%;\n    }\n  }\n"]))),Nn=qn.ZP.div(l||(l=(0,Mn.Z)(["\n  width: 1px;\n  height: 14px;\n  background: #160b03;\n  @media (min-width: 1024px) {\n    height: 16px;\n  }\n"]))),Rn=(0,qn.ZP)(Dn.rU)(s||(s=(0,Mn.Z)(["\n  font-family: Gill Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n\n  color: #160b03;\n  &:hover,\n  &:focus {\n    color: #3f3831;\n  }\n  @media (min-width: 1024px) {\n    font-size: 22px;\n    line-height: 130%;\n  }\n"]))),$n=function(n){var t=n.category,e=t.id,i=t.title,o=(0,An.s0)();return(0,Vn.jsxs)(Fn,{children:[(0,Vn.jsx)(Rn,{to:"/",children:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"}),(0,Vn.jsx)(Nn,{}),(0,Vn.jsx)(Rn,{to:"/catalog",children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"}),(0,Vn.jsx)(Nn,{}),(0,Vn.jsx)("button",{onClick:function(){return o("/catalog",{state:{categoryId:e}})},children:i})]})},Hn=e(9705),Yn=e(8870),Bn=e(4305),Kn=(e(6497),e(6593),qn.ZP.img(c||(c=(0,Mn.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n\n  @media (max-width: 360px) {\n    max-width: 94px;\n    max-height: 112px;\n    object-fit: cover;\n    object-position: center;\n  }\n\n  @media (min-width: 1440px) {\n    width: 178px;\n    height: 218px;\n    object-fit: cover;\n    object-position: center;\n  }\n"])))),Xn=function(n){var t=n.photos,e=n.renderPhotos,i=(0,Bn.G)().isMobileScreen;return(0,Vn.jsx)(Hn.tq,{style:{"--swiper-navigation-color":"#000000","--swiper-navigation-size":"".concat(i?"16px":"32px"," ")},slidesPerView:3,spaceBetween:i?10:16,navigation:!0,modules:[Yn.W_],className:"mySwiper",children:t.map((function(n,t){return(0,Vn.jsx)(Hn.o5,{children:(0,Vn.jsx)("li",{children:(0,Vn.jsx)(Kn,{src:n.url,alt:n.color,onClick:function(){e(t)}})})},t)}))})},Wn=e(5652),Jn=qn.ZP.aside(p||(p=(0,Mn.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 56px;\n  @media (min-width: 1024px) {\n    margin-top: 92px;\n  }\n"]))),nt=qn.ZP.h3(x||(x=(0,Mn.Z)(["\n  color: #000;\n  font-family: Gill Sans;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n  @media (min-width: 1024px) {\n    font-size: 26px;\n  }\n"]))),tt=qn.ZP.ul(h||(h=(0,Mn.Z)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  column-gap: 16px;\n  row-gap: 24px;\n  margin-top: 24px;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media (min-width: 1024px) {\n    grid-template-columns: repeat(4, 1fr);\n    margin-top: 40px;\n    column-gap: 24px;\n    /* row-gap: 26px; */\n  }\n  @media (min-width: 1440px) {\n    margin-left: 0;\n    margin-right: 0;\n  }\n"]))),et=qn.ZP.li(u||(u=(0,Mn.Z)(["\n  max-width: 322px;\n"]))),it=(0,qn.ZP)(Dn.rU)(f||(f=(0,Mn.Z)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),ot=qn.ZP.img(m||(m=(0,Mn.Z)(["\n  max-height: 100%;\n  max-width: 100%;\n  object-fit: cover;\n  user-select: none;\n\n  @media (max-width: 360px) {\n    max-width: 144px;\n    height: 190px;\n\n    object-fit: cover;\n    object-position: center;\n  }\n\n  @media (min-width: 1440px) {\n    width: 322px;\n    height: 416px;\n    object-fit: cover;\n    object-position: center;\n  }\n"]))),rt=qn.ZP.h4(g||(g=(0,Mn.Z)(["\n  color: #160b03;\n  font-family: Gill Sans;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 130%;\n  margin-top: 6px;\n  @media (min-width: 1024px) {\n    margin-top: 14px;\n    font-size: 18px;\n    line-height: 140%;\n  }\n"]))),dt=qn.ZP.p(w||(w=(0,Mn.Z)(["\n  color: #3f3831;\n\n  font-family: Inter;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n  margin-top: 2px;\n  @media (min-width: 1024px) {\n    margin-top: 8px;\n    font-size: 14px;\n  }\n"]))),at=function(n){var t=n.similarProducts,e=n.setClickedIndex,i=n.setQuantity,o=n.setSkuIdProduct,r=n.message,d=n.setMessageSize,a=t.content.slice(0,4),l=function(){e(0),i(1),o(null),r(!1),d(!1)};return(0,Vn.jsxs)(Jn,{children:[(0,Vn.jsx)(nt,{children:"\u0412\u0430\u043c \u043c\u043e\u0436\u0435 \u0441\u043f\u043e\u0434\u043e\u0431\u0430\u0442\u0438\u0441\u044c"}),(0,Vn.jsx)(tt,{children:a.map((function(n){var t=n.id,e=n.title,i=n.photos,o=n.price;return(0,Vn.jsx)(et,{children:(0,Vn.jsxs)(it,{to:"/catalog/".concat(t),onClick:l,children:[0!==i.length?(0,Vn.jsx)(ot,{src:i[0].url,alt:e,width:"322",height:"402"}):(0,Vn.jsx)(ot,{src:Wn,alt:"no image",width:"322",height:"402"}),(0,Vn.jsx)(rt,{children:e}),(0,Vn.jsxs)(dt,{children:[o.value," ",o.currency.code]})]})},t)}))})]})},lt=qn.ZP.div(b||(b=(0,Mn.Z)(["\n  margin-top: 38px;\n  @media (min-width: 1024px) {\n    margin-top: 58px;\n  }\n"]))),st=qn.ZP.div(j||(j=(0,Mn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  margin-top: 2px;\n  padding: 7px 21px 10px 0;\n  border-bottom: 1px solid #160b03;\n  @media (min-width: 1024px) {\n    padding: 11px 21px 11px 0;\n  }\n"]))),ct=qn.ZP.p(Z||(Z=(0,Mn.Z)(["\n  color: #160b03;\n  font-family: Gill Sans;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n  border-bottom: #160b03;\n  user-select: none;\n  @media (min-width: 1024px) {\n    font-size: 16px;\n  }\n"]))),pt=qn.ZP.button(y||(y=(0,Mn.Z)(["\n  background: transparent;\n  border: none;\n  margin: 0;\n  padding: 0;\n"]))),xt=qn.ZP.svg(v||(v=(0,Mn.Z)(["\n  display: inline-block;\n  fill: transparent;\n  stroke-width: 1px;\n  stroke: #160b03;\n  width: 14px;\n  height: 7px;\n  flex-shrink: 0;\n  @media (min-width: 1024px) {\n    width: 15px;\n    height: 7px;\n  }\n"]))),ht=qn.ZP.p(k||(k=(0,Mn.Z)(["\n  margin-top: 10px;\n  margin-bottom: 14px;\n  stroke: #160b03;\n\n  font-family: Gill Sans;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 130%;\n  @media (min-width: 1024px) {\n    margin-top: 31px;\n    margin-bottom: 73px;\n    font-size: 14px;\n\n    line-height: 140%;\n  }\n"]))),ut=function(){var n=(0,Sn.useState)(!1),t=(0,zn.Z)(n,2),e=t[0],i=t[1],o=(0,Sn.useState)(!1),r=(0,zn.Z)(o,2),d=r[0],a=r[1];return(0,Vn.jsxs)(lt,{children:[(0,Vn.jsxs)("div",{children:[(0,Vn.jsxs)(st,{children:[(0,Vn.jsx)(ct,{children:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430 \u0442\u043e\u0432\u0430\u0440\u0443"}),(0,Vn.jsx)(pt,{name:"characteristic",type:"button",onClick:function(){i(!e)},children:e?(0,Vn.jsx)(xt,{children:(0,Vn.jsx)("use",{href:"".concat(Gn.Z,"#icon-vector-14")})}):(0,Vn.jsx)(xt,{children:(0,Vn.jsx)("use",{href:"".concat(Gn.Z,"#icon-vector-13")})})})]}),e&&(0,Vn.jsx)(ht,{children:"\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u044f"})]}),(0,Vn.jsxs)(st,{children:[(0,Vn.jsx)(ct,{children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0434\u043e\u0433\u043b\u044f\u0434\u0443 "}),(0,Vn.jsx)(pt,{name:"regulations",type:"button",onClick:function(){a(!d)},children:d?(0,Vn.jsx)(xt,{children:(0,Vn.jsx)("use",{href:"".concat(Gn.Z,"#icon-vector-14")})}):(0,Vn.jsx)(xt,{children:(0,Vn.jsx)("use",{href:"".concat(Gn.Z,"#icon-vector-13")})})})]}),d&&(0,Vn.jsx)(ht,{children:"\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u044f"})]})},ft=qn.ZP.div(P||(P=(0,Mn.Z)(["\n  margin-top: 18px;\n  user-select: none;\n  @media (min-width: 1024px) {\n    margin-top: 30px;\n  }\n"]))),mt=qn.ZP.p(z||(z=(0,Mn.Z)(["\n  color: #000;\n  font-family: Gill Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n  margin-bottom: 8px;\n  @media (min-width: 1024px) {\n    margin-bottom: 16px;\n  }\n"]))),gt=qn.ZP.ul(S||(S=(0,Mn.Z)(["\n  display: flex;\n  gap: 16px;\n"]))),wt=qn.ZP.button(I||(I=(0,Mn.Z)(["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  background: ",";\n  width: 24px;\n  height: 24px;\n  border-radius: 12px;\n  border: 1px solid #d9d9d9;\n\n  &.active {\n    border-color: #000000;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px 3px;\n  }\n\n  &:hover,\n  &:focus {\n    border-color: #000000;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px 3px;\n  }\n"])),(function(n){return n.color&&n.color})),bt=function(n){var t=n.uniqueColors,e=n.colorValue,i=n.setColorValue,o=n.setClickedIndex,r=n.setQuantity,d=n.setSkuIdProduct;return(0,Vn.jsxs)(ft,{children:[(0,Vn.jsx)(mt,{children:"\u041a\u043e\u043b\u0456\u0440"}),t.length>0&&(0,Vn.jsx)(gt,{children:t.map((function(n,t){return(0,Vn.jsx)("li",{onClick:function(){i(n),o(0),r(1),d(null)},children:(0,Vn.jsx)(wt,{color:n,className:e===n?"active":""})},t)}))})]})},jt=qn.ZP.p(C||(C=(0,Mn.Z)(["\n  color: #000000;\n\n  font-family: Gill Sans;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n  margin-bottom: 8px;\n  @media (min-width: 1024px) {\n    margin-bottom: 16px;\n  }\n"]))),Zt=qn.ZP.ul(U||(U=(0,Mn.Z)(["\n  display: flex;\n  gap: 12px;\n  @media (min-width: 1024px) {\n    gap: 21px;\n  }\n"]))),yt=qn.ZP.button(E||(E=(0,Mn.Z)(["\n  color: #9d9a97;\n\n  background: transparent;\n  border: none;\n  margin: 0;\n\n  font-family: Gill Sans;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 130%;\n\n  &.active {\n    color: #160b03;\n  }\n  &:hover,\n  &:focus {\n    color: #160b03;\n  }\n  @media (min-width: 1024px) {\n    font-size: 22px;\n  }\n"]))),vt=function(n){var t=n.sizesForSelectedColor,e=n.selectSize,i=n.activeSizeId;return(0,Vn.jsxs)("div",{children:[(0,Vn.jsx)(jt,{children:"\u0420\u043e\u0437\u043c\u0456\u0440"}),t.length>0&&(0,Vn.jsx)(Zt,{children:t.map((function(n){var t=n.id;return n.characteristics.map((function(n){var o=n.id,r=n.characteristic,d=n.value;return"size"===r.title&&(0,Vn.jsx)("li",{children:(0,Vn.jsx)(yt,{type:"button",className:i===o?"active":"",onClick:function(){return e(o,t)},children:d})},o)}))}))})]})},kt=qn.ZP.div(G||(G=(0,Mn.Z)(["\n  position: relative;\n  display: flex;\n  width: 112px;\n  height: 38px;\n  padding: 8px 19px;\n  justify-content: space-between;\n  align-items: center;\n\n  flex-shrink: 0;\n  border: 1px solid #160b03;\n  box-sizing: border-box;\n  color: #160b03;\n\n  font-family: Inter;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 130%;\n  margin-top: 24px;\n  user-select: none;\n  @media (min-width: 1024px) {\n    margin-top: 32px;\n  }\n"]))),Pt=qn.ZP.button(M||(M=(0,Mn.Z)(["\n  background: transparent;\n  border: none;\n  box-sizing: border-box;\n  display: flex;\n  fill: #9d9a97;\n  font-family: Inter;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 130%;\n\n  & svg {\n    width: 12px;\n    height: 23px;\n    &:hover,\n    &:focus {\n      fill: #160b03;\n    }\n  }\n  & svg:first-child {\n    width: 9px;\n    height: 23px;\n  }\n"]))),zt=function(n){var t=n.decreaseQuantity,e=n.increaseQuantity,i=n.quantity;return(0,Vn.jsxs)(kt,{children:[(0,Vn.jsx)(Pt,{onClick:t,children:(0,Vn.jsx)("svg",{children:(0,Vn.jsx)("use",{href:"".concat(Gn.Z,"#icon-minus")})})}),i,(0,Vn.jsx)(Pt,{onClick:e,children:(0,Vn.jsx)("svg",{children:(0,Vn.jsx)("use",{href:"".concat(Gn.Z,"#icon-plus")})})})]})},St=qn.ZP.div(q||(q=(0,Mn.Z)(["\n  @media (max-width: 360px) {\n    width: 304px;\n    height: 310px;\n    overflow: hidden;\n  }\n  min-width: 304px;\n  min-height: 310px;\n  /* @media (max-width: 1440px) {\n    max-width: 692px;\n    max-height: 703px;\n    overflow: hidden;\n  } */\n  @media (min-width: 1440px) {\n    width: 566px;\n    height: 627px;\n    overflow: hidden;\n  }\n"]))),It=qn.ZP.img(L||(L=(0,Mn.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n\n  @media (max-width: 360px) {\n    max-width: 304px;\n    max-height: 310px;\n    object-fit: cover;\n    object-position: center;\n  }\n\n  @media (min-width: 1440px) {\n    width: 566px;\n    height: 627px;\n    object-fit: cover;\n    object-position: center;\n  }\n"]))),Ct=function(n){var t=n.filterPhoto,e=n.clickedIndex;return(0,Vn.jsx)(St,{children:0!==t.length?(0,Vn.jsx)(It,{src:t[e].url,alt:t[e].color}):(0,Vn.jsx)(It,{src:Wn,alt:"no image"})})},Ut=qn.ZP.h3(Q||(Q=(0,Mn.Z)(["\n  color: #000;\n  font-family: Gill Sans;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  margin-bottom: 24px;\n  @media (min-width: 768px) {\n    font-size: 48px;\n    margin-bottom: 48px;\n  }\n"]))),Et=qn.ZP.div(T||(T=(0,Mn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Gt=qn.ZP.table(O||(O=(0,Mn.Z)(["\n  width: 853px;\n  height: auto;\n  border: 0.5px solid #000;\n  border-collapse: collapse;\n  @media (max-width: 360px) {\n    width: 303px;\n    height: 103px;\n  }\n  @media (min-width: 768px) {\n    border-bottom: 1px solid #000;\n  }\n  @media (min-width: 1440px) {\n    height: 240px;\n  }\n  th {\n    text-align: left;\n    color: #000;\n    border: 0.427px solid #000;\n    background: #eaeaea;\n    font-family: Gill Sans;\n    font-size: 10.25px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    padding: 6px 5px;\n    @media (min-width: 768px) {\n      font-size: 24px;\n      padding: 14px 10px 14px 12px;\n    }\n    @media (min-width: 1024px) {\n      background: #e3e0de;\n    }\n  }\n  td {\n    color: #000;\n    border: 0.427px solid #000;\n    font-family: Gill Sans;\n    font-size: 10.25px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    @media (min-width: 768px) {\n      font-size: 24px;\n    }\n  }\n"]))),Mt=qn.ZP.p(V||(V=(0,Mn.Z)(["\n  color: #eaeaea;\n  text-align: center;\n  font-family: Roboto;\n  font-size: 22px;\n  font-style: italic;\n  font-weight: 700;\n  line-height: normal;\n  letter-spacing: 4.62px;\n  margin-top: 13px;\n  @media (min-width: 768px) {\n    margin-top: 32px;\n    font-size: 48px;\n    letter-spacing: 10.08px;\n  }\n  @media (min-width: 1024px) {\n    color: #e3e0de;\n  }\n"]))),qt=function(){return(0,Vn.jsxs)("div",{style:{userSelect:"none"},children:[(0,Vn.jsx)(Ut,{children:" \u0420\u043e\u0437\u043c\u0456\u0440\u043d\u0430 \u0441\u0456\u0442\u043a\u0430"}),(0,Vn.jsx)(Et,{children:(0,Vn.jsxs)(Gt,{children:[(0,Vn.jsxs)("colgroup",{children:[(0,Vn.jsx)("col",{style:{width:"30%"}}),(0,Vn.jsx)("col",{style:{width:"14%"}}),(0,Vn.jsx)("col",{style:{width:"14%"}}),(0,Vn.jsx)("col",{style:{width:"14%"}}),(0,Vn.jsx)("col",{style:{width:"14%"}}),(0,Vn.jsx)("col",{style:{width:"14%"}})]}),(0,Vn.jsxs)("tbody",{children:[(0,Vn.jsxs)("tr",{children:[(0,Vn.jsx)("th",{children:"\u0420\u043e\u0437\u043c\u0456\u0440"}),(0,Vn.jsx)("td",{children:"XS"}),(0,Vn.jsx)("td",{children:"S"}),(0,Vn.jsx)("td",{children:"M"}),(0,Vn.jsx)("td",{children:"L"}),(0,Vn.jsx)("td",{children:"XL"})]}),(0,Vn.jsxs)("tr",{children:[(0,Vn.jsx)("th",{children:"\u041e\u0431\u0445\u0432\u0430\u0442 \u0433\u0440\u0443\u0434\u0435\u0439"}),(0,Vn.jsx)("td",{children:"75-84"}),(0,Vn.jsx)("td",{children:"85-90"}),(0,Vn.jsx)("td",{children:"91-95"}),(0,Vn.jsx)("td",{children:"96-100"}),(0,Vn.jsx)("td",{children:"101-105"})]}),(0,Vn.jsxs)("tr",{children:[(0,Vn.jsx)("th",{children:"\u041e\u0431\u0445\u0432\u0430\u0442\u0438 \u0442\u0430\u043b\u0456\u0457"}),(0,Vn.jsx)("td",{children:"60-64"}),(0,Vn.jsx)("td",{children:"65-70"}),(0,Vn.jsx)("td",{children:"71-75"}),(0,Vn.jsx)("td",{children:"76-80"}),(0,Vn.jsx)("td",{children:"81-85"})]}),(0,Vn.jsxs)("tr",{children:[(0,Vn.jsx)("th",{children:"\u041e\u0431\u0445\u0432\u0430\u0442\u0438 \u0431\u0435\u0434\u0435\u0440"}),(0,Vn.jsx)("td",{children:"85-89"}),(0,Vn.jsx)("td",{children:"90-94"}),(0,Vn.jsx)("td",{children:"95-98"}),(0,Vn.jsx)("td",{children:"99-104"}),(0,Vn.jsx)("td",{children:"105-110"})]})]})]})}),(0,Vn.jsx)(Mt,{children:"ZATYSHNA"})]})},Lt=qn.ZP.div(_||(_=(0,Mn.Z)(["\n  position: fixed;\n  top: 76px;\n  right: 20px;\n  width: 100%;\n  height: 100%;\n  z-index: 1002;\n  /* overflow: auto; */\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  @media (min-width: 768px) {\n    top: 87px;\n    right: 40px;\n  }\n"]))),Qt=qn.ZP.div(A||(A=(0,Mn.Z)(["\n  position: relative;\n  right: 10px;\n  background-color: #fff;\n  width: 296px;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  @media (min-width: 768px) {\n    width: 437px;\n    right: 10px;\n  }\n"]))),Tt=qn.ZP.button(D||(D=(0,Mn.Z)(["\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  @media (min-width: 768px) {\n    top: 9px;\n  }\n"]))),Ot=qn.ZP.svg(F||(F=(0,Mn.Z)(["\n  fill: #eee;\n"]))),Vt=function(n){var t=n.children,e=n.closeModal,i=(0,Sn.useCallback)((function(n){"Escape"===n.code&&e()}),[e]),o=(0,Sn.useCallback)((function(n){n.currentTarget===n.target&&e()}),[e]);return(0,Sn.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}})),(0,En.createPortal)((0,Vn.jsx)(Lt,{onClick:o,children:(0,Vn.jsxs)(Qt,{children:[(0,Vn.jsx)(Tt,{type:"button",onClick:e,children:(0,Vn.jsx)(Ot,{width:"24",height:"24",children:(0,Vn.jsx)("use",{href:"".concat(Gn.Z,"#icon-cross")})})}),(0,Vn.jsx)("div",{children:t})]})}),document.querySelector("#modal-root"))},_t=e(6565),At=e(8379),Dt=e(8117),Ft=qn.ZP.div(N||(N=(0,Mn.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),Nt=qn.ZP.div(R||(R=(0,Mn.Z)(["\n  display: flex;\n  gap: 16px;\n"]))),Rt=qn.ZP.img($||($=(0,Mn.Z)(["\n  width: 72px;\n  height: 94px;\n  @media (min-width: 768px) {\n    width: 108px;\n    height: 140px;\n  }\n"]))),$t=qn.ZP.div(H||(H=(0,Mn.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 16p;\n  width: max-content;\n  color: #000;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n"]))),Ht=qn.ZP.p(Y||(Y=(0,Mn.Z)(["\n  margin-bottom: 8px;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 130%;\n  @media (min-width: 768px) {\n    font-size: 18px;\n    line-height: 140%;\n  }\n"]))),Yt=qn.ZP.p(B||(B=(0,Mn.Z)(["\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n"]))),Bt=qn.ZP.button(K||(K=(0,Mn.Z)(["\n  width: 24px;\n  height: 24px;\n  margin-right: 12px;\n  background-color: transparent;\n  border: none;\n  @media (min-width: 768px) {\n    margin-right: 24px;\n  }\n"]))),Kt=qn.ZP.svg(X||(X=(0,Mn.Z)(["\n  width: 24px;\n  height: 24px;\n"]))),Xt=function(n){var t=n.item,e=(0,An.TH)(),i=(0,In.I0)(),o=function(){var n=(0,Pn.Z)((0,kn.Z)().mark((function n(t){return(0,kn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i((0,Dt.x$)(t));case 2:return n.next=4,i((0,Dt.dv)());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,Vn.jsxs)(Ft,{children:[(0,Vn.jsxs)(Nt,{children:[(0,Vn.jsx)(Dn.rU,{to:"/catalog/".concat(t.productId),state:{from:e},children:(0,Vn.jsx)(Rt,{src:t.photoUrl,alt:(0,At.$)(t.productTitle,15)})}),(0,Vn.jsxs)($t,{children:[(0,Vn.jsx)(Dn.rU,{to:"/catalog/".concat(t.productId),state:{from:e},style:{color:"#000"},children:(0,Vn.jsx)(Ht,{children:(0,At.$)(t.productTitle,15)})}),(0,Vn.jsx)("p",{children:t.sku.characteristics[1].name}),(0,Vn.jsx)("p",{children:t.sku.characteristics[0].name}),(0,Vn.jsxs)(Yt,{children:[t.quantity," x ",(0,_t.T)(t.price)," ",t.currencyCode]})]})]}),(0,Vn.jsx)(Bt,{onClick:function(){return o(t.sku.id)},children:(0,Vn.jsx)(Kt,{width:13,height:13,children:(0,Vn.jsx)("use",{href:"".concat(Gn.Z,"#icon-cross")})})})]})},Wt=e(1454),Jt=e(2894),ne=qn.ZP.p(W||(W=(0,Mn.Z)(["\n  background-color: #9d9d9d;\n  padding: 7px 25px;\n  color: #000000;\n  font-size: 14px;\n  line-height: 140%;\n  @media (min-width: 768px) {\n    padding: 10px 38px;\n    font-size: 16px;\n  }\n"]))),te=qn.ZP.div(J||(J=(0,Mn.Z)(["\n  padding: 11px 25px 38px 25px;\n  @media (min-width: 768px) {\n    padding: 8px 38px 42px;\n  }\n"]))),ee=qn.ZP.div(nn||(nn=(0,Mn.Z)(["\n  padding-bottom: 11px;\n  border-bottom: 1px solid #c6c6c6;\n  @media (min-width: 768px) {\n    padding-bottom: 8px;\n  }\n"]))),ie=qn.ZP.ul(tn||(tn=(0,Mn.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  max-height: 247px;\n  padding-bottom: 11px;\n  overflow-y: auto;\n  @media (min-width: 768px) {\n    gap: 18px;\n    max-height: 377px;\n    padding-bottom: 8px;\n  }\n  /* -webkit-overflow-scrolling: touch; */\n\n  /* IE and Edge: */\n  -ms-overflow-style: none;\n  &::-ms-scrollbar-thumb {\n    background-color: #888;\n  }\n  &::-ms-scrollbar-track {\n    background-color: #f1f1f1;\n  }\n\n  /* FireFox: */\n  scrollbar-width: thin;\n  scrollbar-color: #888 #f1f1f1;\n  scroll-behavior: smooth;\n\n  /* Chrome and Safari: */\n  &::-webkit-scrollbar {\n    width: 3px;\n    @media (min-width: 768px) {\n      width: 6px;\n    }\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: #888;\n    border-radius: 6px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: #f1f1f1;\n    border-radius: 6px;\n  }\n"]))),oe=(qn.ZP.div(en||(en=(0,Mn.Z)(["\n  display: flex;\n"]))),qn.ZP.div(on||(on=(0,Mn.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n"])))),re=(0,qn.ZP)(Dn.rU)(rn||(rn=(0,Mn.Z)(["\n  display: flex;\n  padding: 8px 20px;\n  justify-content: center;\n  color: #fff;\n  background-color: #0e0e0e;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 140%;\n  border: 1px solid #191919;\n  @media (min-width: 768px) {\n    padding: 9px 28px;\n    font-size: 18px;\n    font-weight: 400;\n  }\n"]))),de=(0,qn.ZP)(Dn.rU)(dn||(dn=(0,Mn.Z)(["\n  display: flex;\n  padding: 8px 20px;\n  justify-content: center;\n  color: #191919;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 140%;\n  border: 1px solid #191919;\n  @media (min-width: 768px) {\n    padding: 9px 28px;\n    font-size: 18px;\n    font-weight: 400;\n  }\n"]))),ae=qn.ZP.div(an||(an=(0,Mn.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* max-width: max-content; */\n  /* gap: 71px; */\n  padding: 24px 28.5px 0px;\n  @media (min-width: 768px) {\n    padding: 32px 64px 0px;\n  }\n"]))),le=qn.ZP.div(ln||(ln=(0,Mn.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  gap: 71px;\n  @media (min-width: 768px) {\n    margin-bottom: 32px;\n    gap: 101px;\n  }\n"]))),se=qn.ZP.p(sn||(sn=(0,Mn.Z)(["\n  color: #000;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 130%;\n  @media (min-width: 768px) {\n    font-size: 18px;\n    line-height: 140%;\n  }\n"]))),ce=qn.ZP.p(cn||(cn=(0,Mn.Z)(["\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 130%;\n  text-align: right;\n  white-space: nowrap;\n  @media (min-width: 768px) {\n    font-size: 16px;\n    line-height: 140%;\n  }\n"]))),pe=function(n){var t=n.closeModal,e=n.toggleCartModal,i=(0,Sn.useState)([]),o=(0,zn.Z)(i,2),r=o[0],d=o[1],a=(0,Sn.useState)(null),l=(0,zn.Z)(a,2),s=l[0],c=l[1],p=(0,Sn.useState)(""),x=(0,zn.Z)(p,2),h=x[0],u=x[1],f=(0,In.I0)(),m=(0,An.TH)(),g=(0,In.v9)(Jt.KY),w=(0,In.v9)(Jt.wU);return(0,Sn.useEffect)((function(){try{f((0,Dt.dv)())}catch(n){console.error("Error fetching data:",n)}}),[f]),(0,Sn.useEffect)((function(){d(g.items),c(g.totalAmount),u(g.currencyCode)}),[g]),(0,Vn.jsx)(Vt,{closeModal:t,toggleModal:e,children:w?(0,Vn.jsx)(Wt.a,{}):g.items&&g.items.length>0?(0,Vn.jsxs)("div",{children:[(0,Vn.jsx)(ne,{children:"\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0434\u0430\u043d\u043e \u0432 \u043a\u043e\u0448\u0438\u043a"}),(0,Vn.jsxs)(te,{children:[(0,Vn.jsx)(ee,{children:(0,Vn.jsx)(ie,{children:r&&r.map((function(n){return(0,Vn.jsx)("li",{children:(0,Vn.jsx)(Xt,{item:n})},n.sku.id)}))})}),(0,Vn.jsxs)(ae,{children:[(0,Vn.jsxs)(le,{children:[(0,Vn.jsx)(se,{children:"\u0420\u0430\u0437\u043e\u043c:"}),(0,Vn.jsxs)(ce,{children:[(0,_t.T)(s)," ",h]})]}),(0,Vn.jsxs)(oe,{children:[(0,Vn.jsx)(re,{to:"/order",state:{from:m,sessionId:null===g||void 0===g?void 0:g.sessionId},children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),(0,Vn.jsx)(de,{to:"/cart",state:{from:m},children:"\u041a\u043e\u0448\u0438\u043a"})]})]})]})]}):(0,Vn.jsx)("div",{children:(0,Vn.jsx)(ne,{children:"\u0412\u0430\u0448 \u043a\u043e\u0448\u0438\u043a \u043f\u0443\u0441\u0442\u0438\u0439"})})})},xe=qn.ZP.div(pn||(pn=(0,Mn.Z)(["\n  box-sizing: border-box;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 124px 28px 80px;\n  @media (min-width: 1024px) {\n    padding: 170px 40px 142px;\n  }\n"]))),he=qn.ZP.div(xn||(xn=(0,Mn.Z)(["\n  @media (min-width: 768px) {\n    display: grid;\n    grid-template-columns: 48% 52%;\n    grid-template-rows: 1fr;\n  }\n  @media (min-width: 1440px) {\n    padding: 0 91px 0 70px;\n  }\n"]))),ue=qn.ZP.div(hn||(hn=(0,Mn.Z)(["\n  max-width: 692px;\n  user-select: none;\n  @media (min-width: 1440px) {\n    width: 566px;\n  }\n"]))),fe=qn.ZP.ul(un||(un=(0,Mn.Z)(["\n  margin-top: 11px;\n  @media (min-width: 768px) {\n    margin-top: 16px;\n  }\n"]))),me=qn.ZP.div(fn||(fn=(0,Mn.Z)(["\n  margin-top: 32px;\n  @media (min-width: 768px) {\n    margin-top: 55px;\n    margin-left: 40px;\n  }\n  @media (min-width: 1024px) {\n    margin-left: 83px;\n  }\n"]))),ge=qn.ZP.h2(mn||(mn=(0,Mn.Z)(["\n  color: #000;\n\n  font-family: Gill Sans;\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 120%;\n  @media (min-width: 1024px) {\n    font-size: 40px;\n    line-height: 140%;\n  }\n"]))),we=qn.ZP.p(gn||(gn=(0,Mn.Z)(["\n  color: #000;\n  font-family: Inter;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 130%;\n  margin-top: 12px;\n  @media (min-width: 1024px) {\n    font-size: 22px;\n    line-height: 130%;\n  }\n"]))),be=qn.ZP.p(wn||(wn=(0,Mn.Z)(["\n  color: #000;\n\n  font-family: Gill Sans;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n  margin-top: 18px;\n  text-align: justify;\n"]))),je=qn.ZP.div(bn||(bn=(0,Mn.Z)(["\n  user-select: none;\n  position: relative;\n  margin-top: 18px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  @media (min-width: 1024px) {\n    margin-top: 32px;\n    align-items: center;\n  }\n"]))),Ze=qn.ZP.button(jn||(jn=(0,Mn.Z)(["\n  background: transparent;\n  border: none;\n  margin: 0;\n  padding: 0;\n  color: #000000;\n\n  font-family: Gill Sans;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 130%;\n  padding-bottom: 3px;\n\n  border-bottom: 1px solid#000000;\n\n  &:hover,\n  &:focus {\n    color: #3f3831;\n    border-bottom: 1px solid #3f3831;\n  }\n\n  @media (min-width: 1024px) {\n    padding-bottom: 2px;\n    line-height: 140%;\n  }\n"]))),ye=qn.ZP.p(Zn||(Zn=(0,Mn.Z)(["\n  color: #242424;\n\n  font-family: Gill Sans;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  margin-top: 24px;\n  @media (min-width: 1024px) {\n    margin-top: 60px;\n\n    font-size: 32px;\n  }\n"]))),ve=qn.ZP.p(yn||(yn=(0,Mn.Z)(["\n  position: absolute;\n  font-size: 10px;\n  bottom: -15px;\n\n  color: #ff0000;\n  @media (min-width: 1024px) {\n    font-size: 18px;\n    bottom: -25px;\n  }\n"]))),ke=qn.ZP.button(vn||(vn=(0,Mn.Z)(["\n  display: flex;\n  min-width: 160px;\n\n  padding: 7px 16px;\n  justify-content: center;\n  align-items: center;\n\n  flex-shrink: 0;\n  background: #160b03;\n  color: #fff;\n  border: 1px solid #160b03;\n  border-radius: 1px;\n  font-family: Gill Sans;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 130%;\n  margin-top: 32px;\n  user-select: none;\n  &:disabled {\n    cursor: not-allowed;\n    background: #3f3831;\n    border: 1px solid #3f3831;\n  }\n  &:hover,\n  &:focus {\n    background: #3f3831;\n    border: 1px solid #3f3831;\n  }\n  @media (min-width: 1024px) {\n    padding: 9px 46px;\n    line-height: 140%;\n    margin-top: 46px;\n  }\n"]))),Pe=function(n){var t=n.productsId,e=(0,Sn.useState)([]),i=(0,zn.Z)(e,2),o=i[0],r=i[1],d=(0,Sn.useState)([]),a=(0,zn.Z)(d,2),l=a[0],s=a[1],c=(0,Sn.useState)(1),p=(0,zn.Z)(c,2),x=p[0],h=p[1],u=(0,Sn.useState)(0),f=(0,zn.Z)(u,2),m=f[0],g=f[1],w=(0,Sn.useState)(null),b=(0,zn.Z)(w,2),j=b[0],Z=b[1],y=(0,Sn.useState)(null),v=(0,zn.Z)(y,2),k=v[0],P=v[1],z=(0,Sn.useState)(null),S=(0,zn.Z)(z,2),I=S[0],C=S[1],U=(0,Sn.useState)(!1),E=(0,zn.Z)(U,2),G=E[0],M=E[1],q=(0,Sn.useState)(null),L=(0,zn.Z)(q,2),Q=L[0],T=L[1],O=(0,Sn.useState)(!1),V=(0,zn.Z)(O,2),_=V[0],A=V[1],D=(0,Sn.useState)(!1),F=(0,zn.Z)(D,2),N=F[0],R=F[1],$=(0,In.I0)(),H=(0,Sn.useState)(!1),Y=(0,zn.Z)(H,2),B=Y[0],K=Y[1],X=(0,In.v9)(Jt.KY);if((0,Sn.useEffect)((function(){var n=function(){var n=(0,Pn.Z)((0,kn.Z)().mark((function n(){var e,i,o,d,a;return(0,kn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Cn.Z.get("/products/".concat(t));case 3:e=n.sent,i=e.data,r(i),o=i.skuSet[0].characteristics.find((function(n){return"color"===n.characteristic.title})),d=o.value,Z(d),a=i.skuSet[0].availableQuantity,T(a),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430:",n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}(),e=function(){var n=(0,Pn.Z)((0,kn.Z)().mark((function n(){var e,i;return(0,kn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Cn.Z.get("/products/similar_products/".concat(t));case 3:e=n.sent,i=e.data,s(i),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430:",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n(),e(),window.scrollTo({top:0,behavior:"smooth"})}),[t]),(0,Sn.useEffect)((function(){try{$((0,Dt.dv)())}catch(n){console.error("Error:",n)}}),[$]),!o||0===o.length||!l||0===l.length)return(0,Vn.jsx)("div",{children:"Loading..."});var W=Array.from(new Set(o.skuSet.flatMap((function(n){return n.characteristics.filter((function(n){return"color"===n.characteristic.title})).map((function(n){return n.value}))})))),J=o.photos.filter((function(n){return n.colorValue===j})),nn=o.skuSet.filter((function(n){return n.characteristics.some((function(n){var t=n.characteristic,e=n.value;return"color"===t.title&&e===j}))})),tn=function(){return M((function(n){return!n}))},en=function(){K(!B)},on=function(){var n=(0,Pn.Z)((0,kn.Z)().mark((function n(){var e,i,r;return(0,kn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!X.items){n.next=5;break}if(!((e=X.items.find((function(n){return n.sku.id===I})))&&e.quantity+x>Q)){n.next=5;break}return A(!0),n.abrupt("return");case 5:if(!I){n.next=16;break}return(i=localStorage.getItem("userUid"))||(i=(0,Un.Z)(),localStorage.setItem("userUid",i)),r={sessionId:i,skuId:I,price:o.price.value,quantity:x,amount:o.price.value*x,productId:t},n.next=11,$((0,Dt.Bk)(r));case 11:return n.next=13,$((0,Dt.dv)());case 13:en(),n.next=17;break;case 16:R(!0);case 17:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,Vn.jsxs)(Vn.Fragment,{children:[(0,Vn.jsxs)(xe,{children:[(0,Vn.jsx)($n,{category:o.category}),(0,Vn.jsxs)(he,{children:[(0,Vn.jsxs)(ue,{children:[(0,Vn.jsx)(Ct,{filterPhoto:J,clickedIndex:m}),J.length>1&&(0,Vn.jsx)(fe,{children:(0,Vn.jsx)(Xn,{photos:J,renderPhotos:g})})]}),(0,Vn.jsxs)(me,{children:[(0,Vn.jsx)(ge,{children:o.title}),(0,Vn.jsxs)(we,{children:[o.price.value," ",o.price.currency.code]}),(0,Vn.jsx)(be,{children:o.description}),(0,Vn.jsx)(bt,{uniqueColors:W,colorValue:j,setClickedIndex:g,setColorValue:Z,setQuantity:h,setSkuIdProduct:C}),(0,Vn.jsxs)(je,{children:[(0,Vn.jsx)(vt,{sizesForSelectedColor:nn,selectSize:function(n,t){n===k?(P(null),C(null)):(P(n),C(t),R(!1));var e=o.skuSet.find((function(n){return n.id===t}));e&&(T(e.availableQuantity),h(1))},activeSizeId:k}),N&&(0,Vn.jsx)(ve,{children:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0440\u043e\u0437\u043c\u0456\u0440"}),(0,Vn.jsx)(Ze,{onClick:tn,children:"\u0420\u043e\u0437\u043c\u0456\u0440\u043d\u0430 \u0441\u0456\u0442\u043a\u0430"})]}),Q<=0?(0,Vn.jsx)(ye,{children:"\u041d\u0435\u043c\u0430\u0454 \u0432 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456"}):(0,Vn.jsxs)("div",{style:{position:"relative"},children:[(0,Vn.jsx)(zt,{decreaseQuantity:function(){1!==x&&(h((function(n){return n-1})),A(!1))},increaseQuantity:function(){Q>x?(h((function(n){return n+1})),A(!1)):A(!0)},quantity:x}),_&&(0,Vn.jsx)(ve,{children:"\u0411\u0456\u043b\u044c\u0448\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0446\u044c\u043e\u0433\u043e \u0442\u043e\u0432\u0430\u0440\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430"})]}),(0,Vn.jsx)(ke,{type:"button",onClick:on,disabled:Q<=0,children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0432 \u043a\u043e\u0448\u0438\u043a"}),B&&(0,Vn.jsx)(pe,{closeModal:en,toggleCartModal:en}),(0,Vn.jsx)(ut,{})]})]}),0!==l.content.length&&(0,Vn.jsx)(at,{setQuantity:h,similarProducts:l,setClickedIndex:g,setSkuIdProduct:C,message:A,messageSize:R})]}),G&&(0,Vn.jsx)(_n,{toggleModal:tn,openModal:G,children:(0,Vn.jsx)(qt,{})})]})},ze=function(){var n=(0,An.UO)().productsId;return(0,Vn.jsx)("main",{children:(0,Vn.jsx)(Pe,{productsId:n})})}},8379:function(n,t,e){e.d(t,{$:function(){return i}});var i=function(n,t){return n.length>t?n.substring(0,t-3)+"...":n}},4261:function(n,t,e){e.d(t,{Z:function(){return c}});var i,o={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},r=new Uint8Array(16);function d(){if(!i&&!(i="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(r)}for(var a=[],l=0;l<256;++l)a.push((l+256).toString(16).slice(1));function s(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return a[n[t+0]]+a[n[t+1]]+a[n[t+2]]+a[n[t+3]]+"-"+a[n[t+4]]+a[n[t+5]]+"-"+a[n[t+6]]+a[n[t+7]]+"-"+a[n[t+8]]+a[n[t+9]]+"-"+a[n[t+10]]+a[n[t+11]]+a[n[t+12]]+a[n[t+13]]+a[n[t+14]]+a[n[t+15]]}var c=function(n,t,e){if(o.randomUUID&&!t&&!n)return o.randomUUID();var i=(n=n||{}).random||(n.rng||d)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){e=e||0;for(var r=0;r<16;++r)t[e+r]=i[r];return t}return s(i)}},4925:function(n,t,e){function i(n,t){if(null==n)return{};var e,i,o=function(n,t){if(null==n)return{};var e,i,o={},r=Object.keys(n);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}e.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=478.f6ab98c3.chunk.js.map