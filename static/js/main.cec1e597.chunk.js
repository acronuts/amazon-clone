(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},63:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(3),s=c.n(n),i=c(34),r=c.n(i),o=(c(45),c(35)),l=c(10),j=(c(46),c(47),c(36)),d=c.n(j),u=c(37),h=c.n(u),b=c(18),m=Object(n.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(a.jsx)(m.Provider,{value:Object(n.useReducer)(t,c),children:s})},p=function(){return Object(n.useContext)(m)},g=c(29),_=(g.a.initializeApp({apiKey:"AIzaSyC1jNwXX-PYAgublM43nZsPh8R33D0Jxhs",authDomain:"clone-63e37.firebaseapp.com",databaseURL:"https://clone-63e37.firebaseio.com",projectId:"clone-63e37",storageBucket:"clone-63e37.appspot.com",messagingSenderId:"731293124809",appId:"1:731293124809:web:a0d23782d0d930c6b5e518",measurementId:"G-RE5X3PR974"}).firestore(),g.a.auth());var x=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],n=c.basket,s=c.user;return t[1],Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(b.b,{to:"/",children:Object(a.jsx)("img",{className:"header__logo",src:"https://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(a.jsxs)("div",{className:"header__search",children:[Object(a.jsx)("input",{className:"header__searchInput",type:"text"}),Object(a.jsx)(d.a,{className:"header__searchIcon"})]}),Object(a.jsxs)("div",{className:"header__nav",children:[Object(a.jsx)(b.b,{to:!s&&"/login",children:Object(a.jsxs)("div",{className:"header__option",onClick:function(){s&&_.signOut()},children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:s?"Hello ".concat(null===s||void 0===s?void 0:s.email.split("@")[0]):"Hello Guest"}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:s?"Sign Out":"Sign In"})]})}),Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]}),Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(a.jsx)(b.b,{to:"/checkout",children:Object(a.jsxs)("div",{className:"header__optionBasket",children:[Object(a.jsx)(h.a,{}),Object(a.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===n||void 0===n?void 0:n.length})]})})]})]})};c(57),c(58);var v=function(e){var t=e.id,c=e.title,n=e.image,s=e.price,i=e.rating,r=p(),o=Object(l.a)(r,2),j=(o[0].basket,o[1]);return Object(a.jsxs)("div",{className:"product",children:[Object(a.jsxs)("div",{className:"product__info",children:[Object(a.jsx)("p",{children:c}),Object(a.jsxs)("p",{className:"product__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:s})]}),Object(a.jsx)("div",{className:"product__rating",children:Object(a.jsx)("p",{children:"\u2b50".repeat(i)})})]}),Object(a.jsx)("img",{src:n,alt:"deals"}),Object(a.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:t,title:c,image:n,price:s,rating:i}})},children:"Add to Basket"})]})};var f=function(){return Object(a.jsx)("div",{className:"home",children:Object(a.jsxs)("div",{className:"home__container",children:[Object(a.jsx)("img",{className:"home__image",src:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/March/Fuji_TallHero_ShipATW_Modified_en_US_1x._CB419795291_.jpg",alt:""}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(v,{id:"6235321541",title:"OnePlus 8T Lunar Silver, 5G Unlocked Android Smartphone U.S. Version, 256GB Storage + 12GB RAM, 120Hz Fluid Display, Quad Camera",image:"https://images-na.ssl-images-amazon.com/images/I/71GuLTfMJAL._AC_SL1500_.jpg",price:699.99,rating:5}),Object(a.jsx)(v,{id:"2162423252",title:"Samsung Galaxy Watch Active 2 (40mm, GPS, Bluetooth) Smart Watch with Advanced Health Monitoring, Fitness Tracking , and Long Lasting Battery - Silver (US Version)",image:"https://images-na.ssl-images-amazon.com/images/I/51bSW9gjoaL._AC_SL1024_.jpg",price:159.99,rating:4})]}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(v,{id:"525451135",title:"Riedel Curly Decanter",image:"https://images-na.ssl-images-amazon.com/images/I/61rMrQzYV-L._AC_SL1500_.jpg",price:174.69,rating:5}),Object(a.jsx)(v,{id:"912415151",title:"Wine Folly: The Essential Guide to Wine",image:"https://images-na.ssl-images-amazon.com/images/I/51S++zq9ydL._SX404_BO1,204,203,200_.jpg",price:7.95,rating:5}),Object(a.jsx)(v,{id:"222526678",title:"Rabbit Automatic Electric Corkscrew Wine Bottle Opener, One Size, Silver",image:"https://images-na.ssl-images-amazon.com/images/I/61o1RRPnjoL._AC_SL1500_.jpg",price:12.99,rating:3})]}),Object(a.jsx)("div",{className:"home__row",children:Object(a.jsx)(v,{id:"14772341",title:"The Mindful Word Inspirational Mountain Poster - 16 x 42 Inches - Canvas Fabric Poster With Inspirational Quote by Lao Tzu (White / Blue)",image:"https://images-na.ssl-images-amazon.com/images/I/71lk2fndxUL._AC_SL1500_.jpg",price:49.99,rating:4})})]})})},N=c(8);c(59),c(60);var S=function(e){var t=e.id,c=e.image,n=e.title,s=e.price,i=e.rating,r=p(),o=Object(l.a)(r,2),j=(o[0].basket,o[1]);return Object(a.jsxs)("div",{className:"checkoutProduct",children:[Object(a.jsx)("img",{className:"checkoutProduct__image",src:c}),Object(a.jsxs)("div",{className:"checkoutProduct__info",children:[Object(a.jsx)("p",{className:"checkoutProcuct__title",children:n}),Object(a.jsxs)("p",{className:"checkoutProduct__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:s})]}),Object(a.jsx)("div",{className:"checkoutProduct__rating",children:Object(a.jsx)("p",{children:"\u2b50".repeat(i)})}),Object(a.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})},k=(c(61),c(38)),A=c.n(k),C=c(30),y=c(20),L=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},T=function(e,t){switch(console.log("action",t),t.type){case"ADD_TO_BASKET":return Object(y.a)(Object(y.a)({},e),{},{basket:[].concat(Object(C.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),a=Object(C.a)(e.basket);return c>=0?a.splice(c,1):console.warn("Can't remove product (id: ".concat(t.id,") as it's not in basket!")),Object(y.a)(Object(y.a)({},e),{},{basket:a});case"SET_USER":return Object(y.a)(Object(y.a)({},e),{},{user:t.user})}};var I=function(){var e=p(),t=Object(l.a)(e,2),c=t[0].basket;return t[1],Object(a.jsxs)("div",{className:"subtotal",children:[Object(a.jsx)(A.a,{renderText:function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{children:["Subtotal (",c.length," items):",Object(a.jsx)("strong",{children:" ".concat(e)})]}),Object(a.jsxs)("small",{className:"subtotal__gift",children:[Object(a.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:L(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(a.jsx)("button",{children:"Proceed to Checkout"})]})};var E=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],n=c.basket,s=c.user;return t[1],Object(a.jsxs)("div",{className:"checkout",children:[Object(a.jsx)("div",{className:"checkout__left",children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:["Hello ",s?"".concat(null===s||void 0===s?void 0:s.email.split("@")[0]):"Guest"]}),Object(a.jsx)("h2",{className:"checkout__title",children:"Your Items"}),n.map((function(e){return Object(a.jsx)(S,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})}),Object(a.jsx)("div",{className:"checkout__right",children:Object(a.jsx)(I,{})})]})};c(63);var P=function(){var e=Object(N.f)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],i=c[1],r=Object(n.useState)(""),o=Object(l.a)(r,2),j=o[0],d=o[1];return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)(b.b,{to:"/",children:Object(a.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"})}),Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("h1",{children:"Sign In"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("h5",{children:"Email"}),Object(a.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("h5",{children:"Password"}),Object(a.jsx)("input",{type:"password",value:j,onChange:function(e){return d(e.target.value)}}),Object(a.jsx)("button",{className:"login__signInButton",onClick:function(t){t.preventDefault(),_.signInWithEmailAndPassword(s,j).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",children:"Sign In"})]}),Object(a.jsx)("p",{children:"Don't sign-in unless you want to have your search history tracked by us."}),Object(a.jsx)("button",{className:"login__registerButton",onClick:function(t){t.preventDefault(),_.createUserWithEmailAndPassword(s,j).then((function(t){console.log("auth",t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Create your fake amazon account"})]})]})};var w=function(){var e=p(),t=Object(l.a)(e,2);Object(o.a)(t[0]);var c=t[1];return Object(n.useEffect)((function(){_.onAuthStateChanged((function(e){c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(a.jsx)(b.a,{children:Object(a.jsx)("div",{className:"app",children:Object(a.jsxs)(N.c,{children:[Object(a.jsx)(N.a,{path:"/login",children:Object(a.jsx)(P,{})}),Object(a.jsxs)(N.a,{path:"/checkout",children:[Object(a.jsx)(x,{}),Object(a.jsx)(E,{})]}),Object(a.jsxs)(N.a,{path:"/",children:[Object(a.jsx)(x,{}),Object(a.jsx)(f,{})]})]})})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,76)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{initialState:{basket:[],user:null},reducer:T,children:Object(a.jsx)(w,{})})}),document.getElementById("root")),z()}},[[65,1,2]]]);
//# sourceMappingURL=main.cec1e597.chunk.js.map