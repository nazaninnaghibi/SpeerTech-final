(this["webpackJsonplab3-app"]=this["webpackJsonplab3-app"]||[]).push([[0],{169:function(e,t,a){},201:function(e,t,a){},205:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){},209:function(e,t,a){},210:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(14),c=a.n(i),s=(a(169),a(263)),r=a(256),l=a(43),o=a(21),d=a(15),j=a(262),u=a(252),b=a(251),h=a(32),m=a(247),x=a(213),p=a(248),O=a(249),f=a(250),g=a(148),v=a.n(g),y=a(150),w=a.n(y),A=a(149),N=a.n(A),C=a(142),S=a.n(C),k=a(114),D=a.n(k),I=a(18),B=a.n(I),L=a(35),T="AUTH",F="LOGOUT",H=a(143),E=a.n(H).a.create({baseURL:"https://serversidenazanin.herokuapp.com"});E.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var z=function(e,t){return E.patch("/posts/".concat(e),t)},G=function(e){return E.delete("/posts/".concat(e))},P=function(e){return E.patch("/posts/".concat(e,"/likePost"))},X=function(e){return E.post("/user/signin",e)},V=function(e){return E.post("/user/signup",e)},W=a(243),R=Object(W.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),M=a(1),Q=function(e){var t,a,n=e.post,i=e.setCurrentId,c=Object(h.b)(),s=R(),r=JSON.parse(localStorage.getItem("profile")),l=function(){return n.likes.length>0?n.likes.find((function(e){var t;return e===(null===r||void 0===r||null===(t=r.result)||void 0===t?void 0:t._id)}))?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(v.a,{fontSize:"small"}),"\xa0",n.likes.length>2?"You and ".concat(n.likes.length-1," others"):"".concat(n.likes.length," like").concat(n.likes.length>1?"s":"")]}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(D.a,{fontSize:"small"}),"\xa0",n.likes.length," ",1===n.likes.length?"Like":"Likes"]}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(D.a,{fontSize:"small"}),"\xa0Like"]})};return Object(M.jsxs)(m.a,{className:s.card,children:[Object(M.jsx)("div",{className:s.details,children:Object(M.jsx)(x.a,{variant:"p",children:S()(n.createdAt).fromNow()})}),Object(M.jsx)("div",{className:s.details,children:Object(M.jsxs)(x.a,{variant:"p",children:[n.name," said:"]})}),(null===r||void 0===r||null===(t=r.result)||void 0===t?void 0:t._id)==(null===n||void 0===n?void 0:n.creator)&&Object(M.jsx)("div",{className:s.overlay2,children:Object(M.jsx)(p.a,{style:{color:"black"},size:"small",onClick:function(){return i(n._id)},children:Object(M.jsx)(N.a,{fontSize:"default"})})}),Object(M.jsx)(O.a,{children:Object(M.jsx)(x.a,{className:s.title,variant:"h5",gutterBottom:!0,children:n.message})}),Object(M.jsx)("div",{className:s.details,children:Object(M.jsx)(x.a,{variant:"body2",color:"textSecondary",children:n.tags.map((function(e){return"#".concat(e," ")}))})}),Object(M.jsxs)(f.a,{className:s.cardActions,children:[Object(M.jsx)(p.a,{size:"small",color:"primary",disabled:!(null===r||void 0===r?void 0:r.result),onClick:function(){return c((e=n._id,function(){var t=Object(L.a)(B.a.mark((function t(a){var n,i;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P(e);case 3:n=t.sent,i=n.data,a({type:"LIKE",payload:i}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:Object(M.jsx)(l,{})}),(null===r||void 0===r||null===(a=r.result)||void 0===a?void 0:a._id)==(null===n||void 0===n?void 0:n.creator)&&Object(M.jsxs)(p.a,{size:"small",color:"secondary",onClick:function(){return c((e=n._id,function(){var t=Object(L.a)(B.a.mark((function t(a){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(M.jsx)(w.a,{fontSize:"small"}),"Delete"]})]})]})},U=Object(W.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),q=function(e){var t=e.setCurrentId,a=Object(h.c)((function(e){return e.posts})),n=U();return console.log(a),a.length?Object(M.jsx)(u.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3,children:a.map((function(e){return Object(M.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(M.jsx)(Q,{post:e,setCurrentId:t})},e._id)}))}):Object(M.jsx)(b.a,{})},Y=a(11),J=Object(W.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),Z=a(158),K=a(260),_=function(e){var t,a=e.currentId,i=e.setCurrentId,c=Object(n.useState)({title:"",message:"",tags:""}),s=Object(d.a)(c,2),r=s[0],l=s[1],o=Object(h.c)((function(e){return a?e.posts.find((function(e){return e._id==a})):null})),j=J(),u=Object(h.b)(),b=JSON.parse(localStorage.getItem("profile"));Object(n.useEffect)((function(){o&&l(o)}),[o]);if(!(null===b||void 0===b||null===(t=b.result)||void 0===t?void 0:t.name))return Object(M.jsx)(Z.a,{className:j.paper,children:Object(M.jsx)(x.a,{variant:"h6",align:"center",children:"Please sign in to create your own twitter and like other's twitters as well."})});var m=function(){i(0),l({title:"",message:"",tags:""})};return Object(M.jsx)(Z.a,{className:j.paper,children:Object(M.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(j.root," ").concat(j.form),onSubmit:function(e){var t,n;(e.preventDefault(),0==a)?(u(function(e){return function(){var t=Object(L.a)(B.a.mark((function t(a){var n,i;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,E.post("/posts",c);case 3:n=t.sent,i=n.data,a({type:"CREATE",payload:i}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(Object(Y.a)(Object(Y.a)({},r),{},{name:null===b||void 0===b||null===(t=b.result)||void 0===t?void 0:t.name}))),m()):(u(function(e,t){return function(){var a=Object(L.a)(B.a.mark((function a(n){var i,c;return B.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,z(e,t);case 3:i=a.sent,c=i.data,n({type:"UPDATE",payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(a,Object(Y.a)(Object(Y.a)({},r),{},{name:null===b||void 0===b||null===(n=b.result)||void 0===n?void 0:n.name}))),m())},children:[Object(M.jsxs)(x.a,{variant:"h6",children:[a?"Editing":"Creating"," a twitter"]}),Object(M.jsx)(K.a,{name:"title",variant:"outlined",label:"title",fullWidth:!0,value:r.title,onChange:function(e){return l(Object(Y.a)(Object(Y.a)({},r),{},{title:e.target.value}))}}),Object(M.jsx)(K.a,{name:"message",variant:"outlined",label:"message",fullWidth:!0,value:r.message,onChange:function(e){return l(Object(Y.a)(Object(Y.a)({},r),{},{message:e.target.value}))}}),Object(M.jsx)(K.a,{name:"tags",variant:"outlined",label:"tags",fullWidth:!0,value:r.tags,onChange:function(e){return l(Object(Y.a)(Object(Y.a)({},r),{},{tags:e.target.value}))}}),Object(M.jsx)(p.a,{className:j.buttonSubmit,variant:"contained",style:{backgroundColor:"#368d7a"},size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(M.jsx)(p.a,{variant:"contained",color:"secondary",size:"small",onClick:m,fullWidth:!0,children:"Clear"})]})})},$=(Object(W.a)((function(){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}}})),a(199),a(200),a(201),function(){return Object(M.jsx)("div",{children:Object(M.jsx)("footer",{className:"mainfooter",role:"contentinfo",children:Object(M.jsx)("div",{className:"footer-middle",children:Object(M.jsxs)("div",{className:"container",children:[Object(M.jsxs)("div",{className:"row",children:[Object(M.jsx)("div",{className:"col-md-3 col-sm-6",children:Object(M.jsxs)("div",{className:"footer-pad",children:[Object(M.jsx)("h4",{children:"Heading 1"}),Object(M.jsxs)("ul",{className:"list-unstyled",children:[Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"#"})}),Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"#",children:"Payment Center"})}),Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"#",children:"Contact Directory"})}),Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"#",children:"Forms"})}),Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"#",children:"News and Updates"})}),Object(M.jsx)("li",{children:Object(M.jsx)("a",{href:"#",children:"FAQs"})})]})]})}),Object(M.jsxs)("div",{className:"col-md-3",children:[Object(M.jsx)("h4",{children:"Follow Us"}),Object(M.jsxs)("ul",{className:"social-network social-circle",children:[Object(M.jsx)("li",{children:Object(M.jsxs)("a",{href:"#",children:[Object(M.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADb0lEQVRYhcWXW2gcVRzGf/8zM7vZptmotBIvEYu0pRBstbU1VGPMg0pSfFAWo4XSqlDNKr4ZEQziBYxIiIHQoHgBbVZYECrVVNR2SYxRH7StKFohqTa9prabmKxJZnaOD3txY1IyEzbp93TmXP6/b5gzc74RPGrL9o6w5QYaNLoOzXqEG0GuyIzqJJrjInLYFX1QSgKf9r/72N9e6sp8E+546K01rtLNIroRzTJPboUULjFD0drb/cTvCzJQHWkLiRl6WZBnANMTeLZsoN0KBlsS7++a9Gyg5pGu1WnNx0DVAsEzpflWmfJA34e7T89roLpxzy1K+BxkZVHg/4GGBbehL9Z09JIGMneu+4sNLzRhOunbEvHomVyfyjVqd75XktbEFwsOoOF62zT3V0faQrMMTE9NvgKsXyx4gY2Nylz2XO5KIPOqaeX+jM/dfn/dOh68t4obKsqxLAOAV7sO0dN7bL6l45aTXp2IR88oAFfpZr/w+pq1PPt4DTdVXpWH+9Byx1AtAGrL9o6wiG70W6H+rrV+l8yQFtmx9dF3yszM59XjF65A115dlm8fO36ep176hNSk7adEKSm7Xml0nV84QKjEyrdPnh3zCwdAQ52ZPVg8a82qFYRLg5hG/gXiyvIQm6quA2Bo+CJ/JVOeagncLFsf7hoBVng10P78tjxsLjW/cYD+H/7wWu6cAsJeZ3vRyMUJP9PLfZ9yvw2NALBh3TX5x3Bh9B8GT1wA4Oz5cV/1TGAMH49gT+w7AHre3klZaRCAI7+e5oU3v/AFzmpUofXQQlYWRZpBJSKHL5sBkSPKFX3w8vH5SgVsdz/ga+sWSROm7fSoRDw6juajpaYLdCfi0XEFYChayQTIpdI04r4G2UCSjc7tS8fXbV93Nw1CQQawgsEWe3LqToTbvZTo+OAbLDOTA06dG/NDHwgn7RdzFzOOodpIZ4VtGt8DlX4qepc+5TpsHog/eTLXowqHMxHJ3SYwvAj0E65S9xXCZxkA6Is1HRUncCvQW0T4gOWkNw/s3f3T/wfmDHN//rIvVVV5T2yqxHCBTUBggeBp4PVwcnrXl/ueHp1rwrxRpDbSWeEYqkWL7ABKPYIntGavUm5rbrdfSp6zUG2kc7ltGA2I3A16A7AKyP6ekwSGEH5E60OW436WiEc9ncv/AsIAHr2Jc7TXAAAAAElFTkSuQmCC"})," "]})}),Object(M.jsx)("li",{children:Object(M.jsxs)("a",{href:"#",children:[Object(M.jsx)("img",{src:"data:image/png;base64,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"})," "]})})]})]})]}),Object(M.jsx)("div",{className:"row",children:Object(M.jsx)("div",{className:"col-md-12 copy",children:Object(M.jsx)("p",{className:"text-center",children:"\xa9 Copyright 2018 - Company Name. All rights reserved."})})})]})})})})}),ee=a(254),te=a(255),ae=a(265),ne=a(253),ie=Object(W.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(ne.a[500]),backgroundColor:ne.a[500]}}})),ce=(a.p,a(7)),se=a(151),re=Object(ce.a)({root:{color:"#f1e363"}})(x.a),le=function(){var e=ie(),t=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),a=Object(d.a)(t,2),i=a[0],c=a[1],s=Object(h.b)(),r=Object(o.f)(),j=Object(o.g)(),u=function(){s({type:"LOGOUT"}),r.push("/twitters"),c(null)};return Object(n.useEffect)((function(){var e=null===i||void 0===i?void 0:i.token;e&&(1e3*Object(se.a)(e).exp<(new Date).getTime()&&u());c(JSON.parse(localStorage.getItem("profile")))}),[j]),Object(M.jsxs)(ee.a,{className:e.appBar,position:"static",color:"inherit",style:{backgroundColor:"#333"},children:[Object(M.jsx)("div",{className:e.brandContainer}),Object(M.jsx)(te.a,{className:e.toolbar,children:i?Object(M.jsxs)("div",{className:e.profile,children:[Object(M.jsx)(ae.a,{className:e.purple,alt:null===i||void 0===i?void 0:i.result.name,src:null===i||void 0===i?void 0:i.result.imageUrl,children:null===i||void 0===i?void 0:i.result.name.charAt(0)}),Object(M.jsx)(x.a,{className:e.userName,variant:"h6",children:Object(M.jsx)(re,{children:i.result.name})}),Object(M.jsx)(p.a,{variant:"contained",className:e.logout,color:"secondary",onClick:u,children:"Logout"})]}):Object(M.jsx)(p.a,{component:l.b,to:"/auth",variant:"contained",color:"primary",children:"Sign in"})})]})},oe=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),a=t[0],i=t[1],c=Object(h.b)();return Object(n.useEffect)((function(){c(function(){var e=Object(L.a)(B.a.mark((function e(t){var a,n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.get("/posts");case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,c]),Object(M.jsx)(r.a,{maxidth:"lg",children:Object(M.jsx)(j.a,{in:!0,children:Object(M.jsxs)(r.a,{children:[Object(M.jsxs)(u.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(M.jsx)(u.a,{item:!0,xs:12,sm:7,children:Object(M.jsx)(q,{setCurrentId:i})}),Object(M.jsx)(u.a,{item:!0,xs:12,sm:4,children:Object(M.jsx)(_,{currentId:a,setCurrentId:i})})]}),Object(M.jsx)($,{})]})})})},de=(a(205),[{image:"https://images.unsplash.com/photo-1602250988664-1adea3fed8e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHNvbmdzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},{image:"https://images.unsplash.com/photo-1583441249153-5821d2c99433?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fHNvbmdzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},{image:"https://images.unsplash.com/photo-1530889927395-8a6a32ebd244?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHNvbmdzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},{image:"https://images.unsplash.com/photo-1516916759473-600c07bc12d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29uZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}]),je=a(124),ue=a(117),be=a(259),he=(a(97),function(){return Object(M.jsx)(be.a.div,{className:"button container",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5,duration:1.5},children:Object(M.jsx)(l.b,{to:"/pricing",children:Object(M.jsx)(be.a.button,{className:"glow-on-hover",whileHover:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)",color:"#f8e112",backgroundColor:"gray"},children:"Try It Now"})})})}),me=function(e){var t=e.slides,a=Object(n.useState)(0),i=Object(d.a)(a,2),c=i[0],s=i[1],r=t.length,l=(Object(o.f)(),Object(ue.useTransition)(c,{key:c,from:{opacity:0},enter:{opacity:1},leave:{opacity:0},config:{duration:3e3}}));Object(n.useEffect)((function(){var e=setInterval((function(){return s((function(e){return(e+1)%r}))}),4e3);return function(){return clearTimeout(e)}}),[]);return console.log(c),!Array.isArray(t)||t.length<=0?null:Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("div",{className:"flex fill center",children:l((function(e,a){return Object(M.jsx)(ue.animated.div,{style:Object(Y.a)(Object(Y.a)({},e),{},{backgroundImage:"url(https://images.unsplash.com/".concat(t[a],"?w=1920&q=80&auto=format&fit=crop)")})})}))}),Object(M.jsxs)("section",{className:"slider",children:[Object(M.jsx)(je.a,{className:"left-arrow",onClick:function(){s(0===c?r-1:c-1)}}),Object(M.jsx)(je.b,{className:"right-arrow",onClick:function(){s(c===r-1?0:c+1)}}),de.map((function(e,t){return Object(M.jsx)("div",{className:t===c?"slide active":"slide",children:t===c&&Object(M.jsx)("img",{src:e.image,alt:"music image",className:"image"})},t)}))]}),Object(M.jsx)("div",{className:"container",children:Object(M.jsx)("div",{className:"vertical-center",children:Object(M.jsx)(he,{})})})]})};var xe=function(){return Object(M.jsx)("div",{className:"page-wrapper",children:Object(M.jsx)(me,{slides:de})})},pe=a(103),Oe=Object(W.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),fe=(a(206),a(257)),ge=a(258),ve=a(153),ye=a.n(ve),we=a(154),Ae=a.n(we),Ne=function(e){var t=e.name,a=e.half,n=e.handleChange,i=e.label,c=e.autoFocus,s=e.type,r=e.handleShowPassword;return Object(M.jsx)(u.a,{item:!0,xs:12,sm:a?6:12,children:Object(M.jsx)(K.a,{name:t,onChange:n,variant:"outlined",required:!0,fullWidth:!0,label:i,autoFocus:c,type:s,InputProps:"password"==t?{endAdornment:Object(M.jsx)(fe.a,{position:"end",children:Object(M.jsx)(ge.a,{onClick:r,children:"password"==s?Object(M.jsx)(ye.a,{}):Object(M.jsx)(Ae.a,{})})})}:null})})},Ce={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Se=function(){var e=Oe(),t=Object(n.useState)(!1),a=Object(d.a)(t,2),i=a[0],c=a[1],s=Object(n.useState)(!1),l=Object(d.a)(s,2),j=l[0],b=l[1],m=Object(h.b)(),O=Object(o.f)(),f=Object(n.useState)(Ce),g=Object(d.a)(f,2),v=g[0],y=g[1],w=function(e){y(Object(Y.a)(Object(Y.a)({},v),{},Object(pe.a)({},e.target.name,e.target.value)))};return Object(M.jsx)(r.a,{component:"main",maxWidth:"xs",children:Object(M.jsxs)(Z.a,{className:e.paper,elevation:3,children:[Object(M.jsx)(x.a,{variant:"h5",children:j?"Sign Up":"Sign In"}),Object(M.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),m(j?function(e,t){return function(){var a=Object(L.a)(B.a.mark((function a(n){var i,c;return B.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,V(e);case 3:i=a.sent,c=i.data,n({type:T,data:c}),t.push("/twitters"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(v,O):function(e,t){return function(){var a=Object(L.a)(B.a.mark((function a(n){var i,c;return B.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,X(e);case 3:i=a.sent,c=i.data,n({type:T,data:c}),t.push("/twitters"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(v,O))},children:[Object(M.jsxs)(u.a,{container:!0,spacing:2,children:[j&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(Ne,{name:"firstName",label:"First Name",handleChange:w,autoFocus:!0,xs:6}),Object(M.jsx)(Ne,{name:"lastName",label:"Last Name",handleChange:w,autoFocus:!0,xs:6})]}),Object(M.jsx)(Ne,{name:"email",label:"Email Address",handleChange:w,type:"email"}),Object(M.jsx)(Ne,{name:"password",label:"Password",handleChange:w,type:i?"text":"password",handleShowPassword:function(){return c((function(e){return!e}))}}),j&&Object(M.jsx)(Ne,{name:"confirmPassword",label:"Repeat Password",handleChange:w,type:"password"})]}),Object(M.jsx)(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:j?"Sign Up":"Sign In"}),Object(M.jsx)(u.a,{container:!0,justify:"flex-end",children:Object(M.jsx)(u.a,{item:!0,children:Object(M.jsx)(p.a,{onClick:function(){b((function(e){return!e})),c(!1)},children:j?"Already have an account? Sign In":"Don't have an account? Sign Up"})})})]})]})})},ke=(a(207),function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)("nav",{className:"menu",children:[Object(M.jsx)("input",{type:"checkbox",href:"#",className:"menu-open",name:"menu-open",id:"menu-open"}),Object(M.jsxs)("label",{className:"menu-open-button",htmlFor:"menu-open",children:[Object(M.jsx)("span",{className:"hamburger hamburger-1"}),Object(M.jsx)("span",{className:"hamburger hamburger-2"}),Object(M.jsx)("span",{className:"hamburger hamburger-3"})]}),Object(M.jsx)("a",{href:"/",className:"menu-item",children:"Images "}),Object(M.jsx)("a",{href:"/twitters",className:"menu-item",children:" Twitters "}),Object(M.jsx)("a",{href:"/pricing",className:"menu-item",children:"Pricing "}),Object(M.jsx)("a",{href:"/payment",className:"menu-item",children:"Payment "})]}),Object(M.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",children:Object(M.jsxs)("defs",{children:[Object(M.jsxs)("filter",{id:"shadowed-goo",children:[Object(M.jsx)("feGaussianBlur",{in:"SourceGraphic",result:"blur",stdDeviation:"10"}),Object(M.jsx)("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",result:"goo"}),Object(M.jsx)("feGaussianBlur",{in:"goo",stdDeviation:"3",result:"shadow"}),Object(M.jsx)("feColorMatrix",{in:"shadow",mode:"matrix",values:"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2",result:"shadow"}),Object(M.jsx)("feOffset",{in:"shadow",dx:"1",dy:"1",result:"shadow"}),Object(M.jsx)("feBlend",{in2:"shadow",in:"goo",result:"goo"}),Object(M.jsx)("feBlend",{in2:"goo",in:"SourceGraphic",result:"mix"})]}),Object(M.jsxs)("filter",{id:"goo",children:[Object(M.jsx)("feGaussianBlur",{in:"SourceGraphic",result:"blur",stdDeviation:"10"}),Object(M.jsx)("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",result:"goo"}),Object(M.jsx)("feBlend",{in2:"goo",in:"SourceGraphic",result:"mix"})]})]})})]})}),De=a(155),Ie=a.n(De),Be=a(88),Le=function(){return Object(M.jsx)(be.a.div,{className:"button container",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5,duration:1.5},children:Object(M.jsx)(l.b,{to:"/payment",children:Object(M.jsx)(be.a.button,{className:"glow-on-hover",whileHover:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)",color:"#f8e112",backgroundColor:"gray"},children:"Buy A Ticket"})})})},Te={duration:.6,ease:[.43,.13,.23,.96]},Fe=function(e){var t=e.imageDetails,n=e.image;return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)("main",{children:Object(M.jsx)("div",{className:"container",children:Object(M.jsx)("div",{className:"row center",children:Object(M.jsxs)("div",{className:"image-container",children:[Object(M.jsx)("div",{className:"thumbnail",ref:n,style:{width:t.width,height:t.height},children:Object(M.jsx)("div",{className:"frame",children:Object(M.jsx)(l.b,{to:"/artist/billie-eilish",children:Object(M.jsx)(Ie.a,{src:Be.default,placeholder:a(88),children:function(e){return Object(M.jsx)(be.a.img,{src:e,alt:"Billie Eilish",whileHover:{scale:1.1},transition:Te})}})})})}),Object(M.jsx)(Le,{}),Object(M.jsxs)(be.a.div,{exit:{opacity:0},transition:Te,className:"information",children:[Object(M.jsx)("div",{className:"title",children:"Billie Eilish"}),Object(M.jsxs)("div",{className:"location",children:[Object(M.jsx)("span",{children:"28.538336"}),Object(M.jsx)("span",{children:"-81.379234"})]})]})]})})})})})},He=a(264),Ee=a(261),ze={duration:1.4,ease:[.6,.01,-.05,.9]},Ge=function(){return Object(M.jsxs)(be.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:Object(Y.a)({delay:1.2},ze)},className:"scroll-for-more",children:[Object(M.jsx)("div",{className:"icon",children:Object(M.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23.539",height:"29.985",viewBox:"0 0 23.539 29.985",children:Object(M.jsx)("g",{id:"down-arrow",transform:"translate(-67.666 0.6)",children:Object(M.jsx)("g",{id:"Group_1","data-name":"Group 1",transform:"translate(68.266)",children:Object(M.jsx)("path",{id:"Path_1","data-name":"Path 1",d:"M90.452,18.153l-2.9-2.664a.528.528,0,0,0-.71,0L81.974,20V.48A.5.5,0,0,0,81.466,0H77.4A.5.5,0,0,0,76.9.48V20l-4.872-4.515a.529.529,0,0,0-.709,0l-2.9,2.664a.46.46,0,0,0,0,.687l10.662,9.81a.528.528,0,0,0,.708,0l10.662-9.81a.461.461,0,0,0,0-.687Z",transform:"translate(-68.266)",fill:"none",stroke:"#fff","stroke-width":"1.2"})})})})}),Object(M.jsxs)("div",{className:"text",children:["Scroll ",Object(M.jsx)("br",{}),"for more"]})]})},Pe={duration:1.4,ease:[.6,.01,-.05,.9]},Xe={initial:{y:0},animate:{y:0,transition:{delayChildren:.6,staggerChildren:.04,staggerDirection:-1}}},Ve={initial:{y:0},animate:{y:0,transition:{delayChildren:.6,staggerChildren:.04,staggerDirection:1}}},We={initial:{y:400},animate:{y:0,transition:Object(Y.a)({duration:1},Pe)}},Re=function(e){var t=e.imageDetails,a=Object(He.a)().scrollYProgress,i=Object(Ee.a)(a,[0,1],[1,1.15]),c=Object(n.useState)(!1),s=Object(d.a)(c,2),r=s[0],l=s[1];return Object(n.useEffect)((function(){!1===r?document.querySelector("body").classList.add("no-scroll"):document.querySelector("body").classList.remove("no-scroll")}),[r]),Object(M.jsxs)(be.a.div,{onAnimationComplete:function(){return l(!0)},className:"single",initial:"initial",animate:"animate",exit:"exit",children:[Object(M.jsxs)("div",{className:"container fluid",children:[Object(M.jsx)("div",{className:"row center top-row",children:Object(M.jsxs)("div",{className:"top",children:[Object(M.jsxs)(be.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:Object(Y.a)({delay:1.2},Pe)},className:"details",children:[Object(M.jsxs)("div",{className:"location",children:[Object(M.jsx)("span",{children:"28.538336"}),Object(M.jsx)("span",{children:"-81.379234"})]}),Object(M.jsx)("div",{className:"mua",children:"MUA: @mylifeascrystall"})]}),Object(M.jsxs)(be.a.div,{className:"model",children:[Object(M.jsxs)(be.a.span,{className:"first",variants:Xe,children:[Object(M.jsx)(be.a.span,{variants:We,children:"B"}),Object(M.jsx)(be.a.span,{variants:We,children:"i"}),Object(M.jsx)(be.a.span,{variants:We,children:"l"}),Object(M.jsx)(be.a.span,{variants:We,children:"l"}),Object(M.jsx)(be.a.span,{variants:We,children:"i"}),Object(M.jsx)(be.a.span,{variants:We,children:"e"})]}),Object(M.jsxs)(be.a.span,{className:"last",variants:Ve,children:[Object(M.jsx)(be.a.span,{variants:We,children:"E"}),Object(M.jsx)(be.a.span,{variants:We,children:"i"}),Object(M.jsx)(be.a.span,{variants:We,children:"l"}),Object(M.jsx)(be.a.span,{variants:We,children:"i"}),Object(M.jsx)(be.a.span,{variants:We,children:"s"}),Object(M.jsx)(be.a.span,{variants:We,children:"h"})]})]})]})}),Object(M.jsxs)("div",{className:"row bottom-row",children:[Object(M.jsx)("div",{className:"bottom",children:Object(M.jsx)(be.a.div,{className:"image-container-single",children:Object(M.jsx)(be.a.div,{initial:{y:"-50%",width:t.width,height:t.height},animate:{y:0,width:"100%",height:window.innerWidth>1440?800:400,transition:Object(Y.a)({delay:.2},Pe)},className:"thumbnail-single",children:Object(M.jsx)(be.a.div,{className:"frame-single",whileHover:"hover",transition:Pe,children:Object(M.jsx)(be.a.img,{src:Be.default,alt:"an image",style:{scale:i},initial:{scale:1},animate:{transition:Object(Y.a)({delay:.2},Pe),y:window.innerWidth>1440?-1200:-600}})})})})}),Object(M.jsx)(Ge,{})]})]}),Object(M.jsx)("div",{className:"detailed-information",children:Object(M.jsx)("div",{className:"container",children:Object(M.jsxs)("div",{className:"row",children:[Object(M.jsxs)("h2",{className:"title",children:["The insiration behind the artwork & ",Object(M.jsx)("br",{})," what it means."]}),Object(M.jsx)("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]})})})]})},Me=a.p+"static/media/concert.43690345.jpg",Qe=(a(208),function(){return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)("div",{class:"wrapper",children:Object(M.jsxs)("div",{class:"checkout_wrapper",children:[Object(M.jsxs)("div",{class:"product_info",children:[Object(M.jsx)("img",{src:Me,alt:"concert"}),Object(M.jsxs)("div",{class:"content",children:[Object(M.jsxs)("h3",{children:["Billie Eilish ",Object(M.jsx)("br",{}),"Tickets"]}),Object(M.jsx)("p",{children:"$1000"})]})]}),Object(M.jsxs)("div",{class:"checkout_form",children:[Object(M.jsx)("p",{children:"Payment Section"}),Object(M.jsxs)("div",{class:"details",children:[Object(M.jsx)("div",{class:"section",children:Object(M.jsx)("input",{type:"text",placeholder:"Card Number"})}),Object(M.jsx)("div",{class:"section",children:Object(M.jsx)("input",{type:"text",placeholder:"Cardholder Name"})}),Object(M.jsxs)("div",{class:"section last_section",children:[Object(M.jsx)("div",{class:"item",children:Object(M.jsx)("input",{type:"text",placeholder:"Expiry Date"})}),Object(M.jsx)("div",{class:"item",children:Object(M.jsx)("input",{type:"text",placeholder:"CVV"})})]}),Object(M.jsx)("div",{class:"btn",children:Object(M.jsx)("a",{href:"#",children:"Pay"})})]})]})]})})})}),Ue=(a(209),function(){var e={width:724,height:550};return Object(M.jsxs)(l.a,{children:[Object(M.jsx)(ke,{}),Object(M.jsxs)(r.a,{maxWidth:"lg",children:[Object(M.jsx)(le,{}),Object(M.jsxs)(o.c,{children:[Object(M.jsx)(o.a,{path:"/",exact:!0,component:xe}),Object(M.jsx)(o.a,{path:"/twitters",exact:!0,component:oe}),Object(M.jsx)(o.a,{path:"/auth",exact:!0,component:Se}),Object(M.jsx)(o.a,{path:"/payment",exact:!0,component:Qe}),Object(M.jsx)(o.a,{render:function(t){var a=t.location;return Object(M.jsx)(s.a,{initial:!1,exitBeforeEnter:!0,children:Object(M.jsxs)(o.c,{location:a,children:[Object(M.jsx)(o.a,{exact:!0,path:"/pricing",render:function(){return Object(M.jsx)(Fe,{imageDetails:e})}}),Object(M.jsx)(o.a,{exact:!0,path:"/artist/:id",render:function(){return Object(M.jsx)(Re,{imageDetails:e})}})]},a.pathname)})}})]})]})]})}),qe=a(55),Ye=a(156),Je=a(49),Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return localStorage.setItem("profile",JSON.stringify(Object(Y.a)({},null===t||void 0===t?void 0:t.data))),Object(Y.a)(Object(Y.a)({},e),{},{authData:null===t||void 0===t?void 0:t.data});case F:return localStorage.clear(),Object(Y.a)(Object(Y.a)({},e),{},{authData:null===t||void 0===t?void 0:t.data});default:return e}},Ke=Object(qe.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE":return e.filter((function(e){return!e._id==t.payload}));case"UPDATE":case"LIKE":return e.map((function(e){return e._id==t.payload._id?t.payload:e}));case"FETCH_ALL":return t.payload;case"CREATE":return[].concat(Object(Je.a)(e),[t.payload]);default:return e}},auth:Ze}),_e=Object(qe.e)(Ke,Object(qe.d)(Object(qe.a)(Ye.a)));c.a.render(Object(M.jsx)(h.a,{store:_e,children:Object(M.jsx)(Ue,{})}),document.getElementById("root"))},88:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/bill.92ddcfe2.jpg"},97:function(e,t,a){}},[[210,1,2]]]);
//# sourceMappingURL=main.58fc293b.chunk.js.map