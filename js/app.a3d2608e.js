(function(){"use strict";var e={6713:function(e,t,a){var s=a(8935),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("BannerComponent"),a("div",{staticClass:"container"},[e._l(e.textsDescprtIntroduction,(function(t){return a("div",{key:t.text,staticClass:"row m-2 align-items-center"},[e._m(0,!0),a("div",{staticClass:"col-lg-10 col-sm-10"},[e._v(e._s(t.text))])])})),a("div",{staticClass:"row"},e._l(e.textsDescprt,(function(e){return a("div",{key:e.id,staticClass:"col-lg-6 col-sm-12"},[a("GalleryComponent",{attrs:{textDesc:e}})],1)})),0)],2)],1)},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-lg-2 col-sm-2"},[s("img",{staticClass:"img-fluid img-thumbnail rounded-circle",attrs:{src:a(5131),alt:"logo appartement Serenity"}})])}],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"masthead"},[a("div",{staticClass:"container"},[a("div",{staticClass:"masthead-subheading"},[e._v("Une résidence au bord de mer")]),a("div",{staticClass:"masthead-heading text-uppercase"},[e._v("Appart Serenity")]),a("div",{staticClass:"row d-flex justify-content-center"},[a("div",{staticClass:"col-10 p-3 mb-2 bg-light text-dark rounded"},[a("CalendarComponent"),a("a",{staticClass:"btn btn-primary btn-xl text-uppercase",attrs:{href:"#reserver"}},[e._v("Réserver")])],1)])])])},o=[],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("date-picker",{attrs:{"disabled-dates":[{start:new Date(2020,9,13),end:new Date(2020,9,14)},{start:new Date(2020,9,12),end:new Date(2020,9,12)}],"is-range":""},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.inputValue,n=t.inputEvents;return[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-2 col-sm-12"},[a("p",{staticClass:"m-4"},[e._v("Du")])]),a("div",{staticClass:"col-lg-4 col-sm-12"},[a("input",e._g({staticClass:"border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300 m-4",domProps:{value:s.start}},n.start))]),a("div",{staticClass:"col-lg-2 col-sm-12"},[a("p",{staticClass:"m-4"},[e._v("Au")])]),a("div",{staticClass:"col-lg-4 col-sm-12"},[a("input",e._g({staticClass:"border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300 m-4",domProps:{value:s.end}},n.end))]),a("div",{staticClass:"col-lg-4 col-sm-12"})])])]}}]),model:{value:e.range,callback:function(t){e.range=t},expression:"range"}})},l=[],c=a(8579),d=a.n(c),p={components:{DatePicker:d()},data(){return{range:{start:new Date(2020,9,12),end:new Date(2020,9,12)}}}},m=p,f=a(1001),v=(0,f.Z)(m,u,l,!1,null,null,null),g=v.exports,b={name:"BannerComponent",components:{CalendarComponent:g}},h=b,x=(0,f.Z)(h,i,o,!1,null,null,null),C=x.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card m-3"},[a("img",{staticClass:"card-img-top",attrs:{src:e.textDesc.image,alt:e.textDesc.alt}}),a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text"},[e._v(e._s(e.textDesc.text))])])])},_=[],D={props:["textDesc"],data(){return{}}},j=D,w=(0,f.Z)(j,y,_,!1,null,null,null),A=w.exports,k={name:"App",components:{BannerComponent:C,GalleryComponent:A},data(){return{textsDescprtIntroduction:[{id:1,text:"L’appart Serenity et son jardin vous accueillent au cœur de la campagne martiniquaise. A mi-chemin entre les communes des Anses d’Arlet et du Diamant, vous serez à 5min des plages, des restaurants et des autres commodités.",image:""},{id:2,text:"En couple, entre amis ou en famille, l’appart vous offre 4 couchages muni d’une literie de qualité. A votre retour d’escapades, vous pourrez préparer ou tout simplement vous réchauffer de succulents petits plats dans la cuisine entièrement équipée.",image:""},{id:3,text:"Vous avez besoin de repos ? Vous disposez de 2 chambres climatisées ou de chaises longues dans le jardin. Venez profiter de la grande terrasse pour des repas conviviaux ou des soirées jeux.",image:""},{id:4,text:"N’hésitez pas à contacter Sandrine au 06 90 34 71 12 ou sandrine_mcll@hotmail.com",image:""}],textsDescprt:[{id:1,text:"Vous êtes fans de plages et d’activités nautiques ? Vous êtes au bon endroit. Depuis l’appart Serenity, vous êtes à 5 min en voiture des plages des Anses d’Arlet et du Diamant. Aux Anses d’Arlet, les plages de Grand-Anse, du bourg, de l’Anse Dufour sont des plages de sables blancs, alors qu’Anse Noire et Petite Anse sont bordées de sable noir.",image:"./appart/serenitychambre.jpg",alt:"blabla"},{id:2,text:"Muni d’un masque, vous apprécierez notamment le petit parcours sous-marin autour de Kay-la sur la plage du bourg ou peut-être aurez-vous la chance de croiser une tortue à Anse Noire.",image:"./appart/dehors.jpg",alt:"blabla"},{id:3,text:"Location de paddle, de jetski ou professionnels de la plongée sous-marine sont à votre disposition. Du coté du Diamant, la Grande-Anse du Diamant vous offre de belles vagues avec vue sur le majestueux Rocher du Diamant. Vous pourrez vous joindre aux diamantinoises et diamantinois lors de leur marche matinale sur la plage longue de 3km.",image:"./appart/serenitychambre2.jpg",alt:"blabla"},{id:4,text:"Si vous avez un appétit pour les activités sportives, vous serez comblés par les randonnées aux alentours. La trace du Morne Champagne, le circuit du Morne Baguidi qui relie Grand-Anse à l’Anse Dufour et l’ascension du mythique Morne Larcher avec sa magnifique vue sur le Rocher auront de quoi vous satisfaire.",image:"./appart/serenitydouche.jpg",alt:"blabla"},{id:5,text:"Cuisine familiale, cuisine gastronomique ou juste un snack, le secteur est bien achalandé. Il y en a pour tous les appétits et toutes les bourses.",image:"./appart/serenitylavabo.jpg",alt:"blabla"},{id:6,text:"Cuisine familiale, cuisine gastronomique ou juste un snack, le secteur est bien achalandé. Il y en a pour tous les appétits et toutes les bourses.",image:"./appart/serenitysejour.jpg",alt:"blabla"}]}}},O=k,S=(0,f.Z)(O,n,r,!1,null,null,null),q=S.exports;s["default"].config.productionTip=!1,new s["default"]({render:e=>e(q)}).$mount("#app")},5131:function(e,t,a){e.exports=a.p+"img/logoSerenity.e0f72457.png"}},t={};function a(s){var n=t[s];if(void 0!==n)return n.exports;var r=t[s]={exports:{}};return e[s].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,s,n,r){if(!s){var i=1/0;for(c=0;c<e.length;c++){s=e[c][0],n=e[c][1],r=e[c][2];for(var o=!0,u=0;u<s.length;u++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](s[u])}))?s.splice(u--,1):(o=!1,r<i&&(i=r));if(o){e.splice(c--,1);var l=n();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[s,n,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,r,i=s[0],o=s[1],u=s[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(u)var c=u(a)}for(t&&t(s);l<i.length;l++)r=i[l],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},s=self["webpackChunkcalendrier"]=self["webpackChunkcalendrier"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(6713)}));s=a.O(s)})();
//# sourceMappingURL=app.a3d2608e.js.map