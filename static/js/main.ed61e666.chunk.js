(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{17:function(e,t,n){e.exports={title:"HomePage_title__2SwkK",subTitle:"HomePage_subTitle__14AE-"}},21:function(e,t,n){e.exports={logo:"NavBar_logo__2C6RD"}},22:function(e,t,n){e.exports={main:"Layout_main__auk_r"}},23:function(e,t,n){e.exports={dailyWeatherCard:"DailyWeather_dailyWeatherCard__3cc4H"}},24:function(e,t,n){e.exports={card:"Card_card__1ZQtN"}},30:function(e,t,n){},31:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(20),i=n.n(c),o=(n(30),n(3)),s=(n(31),n(4)),d=n(12),u=n(0);var l=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(d.a,{icon:s.a})})},h=n(21),j=n.n(h);var b=function(e){return Object(u.jsxs)("header",{children:[Object(u.jsx)("div",{className:j.a.logo,children:"WeatherApp"}),Object(u.jsx)(l,{})]})},v=n(22),f=n.n(v);var g=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsx)("main",{className:f.a.main,children:e.children})]})};var m=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("h1",{children:"Forecast"})})},p=n(13),O=n(23),x=n.n(O),y={"01d":s.l,"01n":s.g,"02d":s.e,"03d":s.b,"03n":s.b,"04d":s.b,"04n":s.b,"09d":s.d,"09n":s.d,"10d":s.f,"10n":s.c,"11d":s.h,"11n":s.h,"13d":s.k,"13n":s.k,"50d":s.j,"50n":s.j,default:s.i};function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y;return t[e]&&"default"!==e?t[e]:t.default}var w=function(e){return Object(u.jsxs)("div",{className:x.a.dailyWeatherCard,children:[Object(u.jsx)("h3",{children:e.weekDay}),Object(u.jsx)("p",{children:e.dateTime}),Object(u.jsx)(d.a,{icon:_(e.icon),style:{fontSize:"5rem"}}),Object(u.jsx)("h2",{children:e.temperature}),Object(u.jsx)("h4",{children:e.description})]})},D=n(24),F=n.n(D);var C=function(e){return Object(u.jsx)("div",{className:F.a.card,children:e.children})},N=n(17),S=n.n(N),T={en:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],es:["Domingo","Lunes","Martes","Mi\xe9rcoles","Jueves","Viernes","S\xe1bado"]},k={en:["January","February","March","April","May","June","July","August","September","October","November","December"],es:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]};function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:T;return e>=0&&e<7?n[t][e]?n[t][e]:"Invalid languaje":"Inalid day number"}function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:k;return e>=0&&e<12?n[t][e]?n[t][e]:"Invalid languaje":"Invalid month number"}function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:A,r=new Date(e),a=n(r.getMonth(),t),c=r.getDate(),i=r.getHours(),o=r.getMinutes();return"".concat(a," ").concat(c,", ").concat(0===i?"00":i,":").concat(o<10?"0"+o:o)}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:M,r=new Date(e);return n(r.getDay(),t)}function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.charAt(0).toUpperCase()+e.slice(1)}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"C";return"".concat(e," \xb0").concat(t)}function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.name+", "+e.country}var L=function(e){var t=Object(r.useState)(""),n=Object(p.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)([]),o=Object(p.a)(i,2),s=o[0],d=o[1];return Object(r.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/forecast?id=3590979&appid=d35ffbb008d9cbfc7bec181cf4685403&units=".concat("metric","&lang=").concat("en")).then((function(e){return e.json()})).then((function(e){var t=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"C",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en",r=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:H)(e.city),a=e.list.length,c=[],i=0;i<a;i+=8){var o={};o.description=W(e.list[i].weather[0].description),o.temperature=E(e.list[i].main.temp,t),o.dateTime=J(e.list[i].dt_txt,n),o.weekDay=I(e.list[i].dt_txt,n),o.icon=e.list[i].weather[0].icon,c.push(o)}return[r,c]}(e,"C","en"),n=Object(p.a)(t,2),r=n[0],a=n[1];c(r),d(a)}))}),[c,d]),Object(r.useEffect)((function(){console.log(s),console.log(a)}),[s,a]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:S.a.title,children:"Next 5 days forecast"}),Object(u.jsxs)(C,{children:[Object(u.jsx)("h3",{className:S.a.subTitle,children:a}),s.map((function(e,t){return Object(u.jsx)(w,{weekDay:e.weekDay,dateTime:e.dateTime,icon:e.icon,description:e.description,temperature:e.temperature},t)}))]})]})};var P=function(){return Object(u.jsx)(g,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/hourlyForecast",children:Object(u.jsx)(m,{})}),Object(u.jsx)(o.a,{path:"/",children:Object(u.jsx)(L,{})})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},z=n(16);i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(z.a,{basename:"/weatherAppReact",children:Object(u.jsx)(P,{})})}),document.getElementById("root")),B()}},[[43,1,2]]]);
//# sourceMappingURL=main.ed61e666.chunk.js.map