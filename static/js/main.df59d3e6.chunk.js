(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,function(e,t,n){e.exports={row:"TableRow_row__3sq-P",rowLightTheme:"TableRow_rowLightTheme__1pHx3",hourSection:"TableRow_hourSection__HA1GU",dataSection:"TableRow_dataSection__1aPFq",column:"TableRow_column__29phD",columnSmall:"TableRow_columnSmall__2TUf2",dataCell:"TableRow_dataCell__33c0W",p:"TableRow_p__uQTQn"}},,,,,,,,,,,function(e,t,n){e.exports={toggleButtonContainer:"ToggleButton_toggleButtonContainer__2sB6s",toggleButtonStructure:"ToggleButton_toggleButtonStructure__18dfw",toggleButtonStructureLightTheme:"ToggleButton_toggleButtonStructureLightTheme__3Lb-9",toggleButtonBouncingCircle:"ToggleButton_toggleButtonBouncingCircle__jqbvM",toggleButtonBouncingCircleLightTheme:"ToggleButton_toggleButtonBouncingCircleLightTheme__3eW9e",left:"ToggleButton_left__QV4O3",right:"ToggleButton_right__31d3P",toggleButtonTitle:"ToggleButton_toggleButtonTitle__3W5Pk",toggleButtonTitleLightTheme:"ToggleButton_toggleButtonTitleLightTheme__3IvqM"}},,,function(e,t,n){e.exports={navBarButtonsContainer:"NavLinks_navBarButtonsContainer__31pAt",navBarButtonsContainerActive:"NavLinks_navBarButtonsContainerActive__2Yc4i",navBarButtonsContainerActiveLightTheme:"NavLinks_navBarButtonsContainerActiveLightTheme__20pwn",navBarButton:"NavLinks_navBarButton__3GL1m"}},,function(e,t,n){e.exports={logo:"NavBar_logo__2C6RD",logoLightTheme:"NavBar_logoLightTheme__VOpLV",header:"NavBar_header__2psxu",headerLightTheme:"NavBar_headerLightTheme__34Avv"}},,,,,,function(e,t,n){e.exports={main:"Layout_main__auk_r",mainLightTheme:"Layout_mainLightTheme__2jxdk"}},function(e,t,n){e.exports={card:"Card_card__1ZQtN",cardLightTheme:"Card_cardLightTheme__2jY3u"}},function(e,t,n){e.exports={dailyWeatherCard:"DailyWeather_dailyWeatherCard__3cc4H",dailyWeatherCardLightTheme:"DailyWeather_dailyWeatherCardLightTheme__3u14c"}},function(e,t,n){e.exports={title:"HomePage_title__2SwkK",subTitle:"HomePage_subTitle__14AE-"}},,function(e,t,n){e.exports={menuButtonContainer:"MenuButton_menuButtonContainer__3Ix7I"}},,,function(e,t,n){e.exports={table:"Table_table__3Cw9e"}},function(e,t,n){e.exports={subTitleRow:"HourlyForecastPage_subTitleRow__2qzqX"}},,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(29),o=n.n(i),r=(n(39),n(5)),l=(n(40),n(6)),s=n(8),u=n(9),h=n.n(u),d=n(15),j=n(0),m=Object(a.createContext)({unitSystem:"imperial",language:"en",theme:!1,changeTheme:function(){},changeLanguaje:function(){},changeUnitSystem:function(){}});function g(e){var t=Object(a.useState)("imperial"),n=Object(s.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)("en"),r=Object(s.a)(o,2),l=r[0],u=r[1],h=Object(a.useState)(!1),d=Object(s.a)(h,2),g=d[0],b=d[1];var O={theme:g,language:l,unitSystem:c,changeTheme:function(){b(!g)},changeUnitSystem:function(){i("imperial"===c?"metric":"imperial")},changeLanguaje:function(){u("en"===l?"es":"en")}};return Object(j.jsx)(m.Provider,{value:O,children:e.children})}var b=m,O=n(4),v=n(13),x=n(30),p=n.n(x);var _=function(e){var t=Object(a.useContext)(b).theme;return Object(j.jsx)("div",{className:p.a.menuButtonContainer,children:e.isOpen?Object(j.jsx)(v.a,{size:"lg",color:t?"black":"white",icon:O.m,onClick:e.handleClick}):Object(j.jsx)(v.a,{size:"lg",color:t?"black":"white",icon:O.a,onClick:e.handleClick})})},f={en:"Next 5 days forecast",es:"Pron\xf3stico para los pr\xf3ximos 5 d\xedas"},T={toggleLanguage:{en:"Language",es:"Idioma"},toggleTemperature:{en:"Temperature",es:"Temperatura"},toggleTheme:{en:"Theme",es:"Tema"}},B={en:["Temperature","Feels like","Wheater","Humidity","Clouds"],es:["Temperatura","Se siente como","Clima","Humedad","Nubosidad"]},S=n(14),C=n.n(S);var N=function(e){var t,n=Object(a.useState)(!1),c=Object(s.a)(n,2),i=c[0],o=c[1],r=h()(C.a.toggleButtonBouncingCircle,(t={},Object(l.a)(t,C.a.right,i),Object(l.a)(t,C.a.left,!i),Object(l.a)(t,C.a.toggleButtonBouncingCircleLightTheme,e.themeSelector),t)),u=h()(C.a.toggleButtonStructure,Object(l.a)({},C.a.toggleButtonStructureLightTheme,e.themeSelector)),d=h()(C.a.toggleButtonTitle,Object(l.a)({},C.a.toggleButtonTitleLightTheme,e.themeSelector));return Object(j.jsxs)("span",{className:C.a.toggleButtonContainer,children:[Object(j.jsx)("label",{className:d,children:e.text}),Object(j.jsxs)("p",{children:[e.defaultOption,"\xa0",Object(j.jsx)("span",{className:u,onClick:function(t){o(!i),e.callbackFunction()},children:Object(j.jsx)("span",{className:r})}),"\xa0",e.alternativeOption]})]})},y=n(17),L=n.n(y);var w=function(e){var t,n=Object(a.useContext)(b),c=h()((t={},Object(l.a)(t,L.a.navBarButtonsContainerActive,e.isOpen),Object(l.a)(t,L.a.navBarButtonsContainer,!e.isOpen),Object(l.a)(t,L.a.navBarButtonsContainerActiveLightTheme,e.themeSelector),t));return Object(j.jsxs)("div",{className:c,children:[Object(j.jsx)("div",{className:L.a.navBarButton,children:Object(j.jsx)(N,{text:T.toggleLanguage[n.languaje],defaultOption:"EN",alternativeOption:"ES",callbackFunction:n.changeLanguaje,themeSelector:n.theme},"nvt1")}),Object(j.jsx)("div",{className:L.a.navBarButton,children:Object(j.jsx)(N,{text:T.toggleTemperature[n.languaje],defaultOption:"\xb0F",alternativeOption:"\xb0C",callbackFunction:n.changeUnitSystem,themeSelector:n.theme},"nvt2")}),Object(j.jsx)("div",{className:L.a.navBarButton,children:Object(j.jsx)(N,{text:T.toggleTheme[n.languaje],defaultOption:"Dark",alternativeOption:"Light",callbackFunction:n.changeTheme,themeSelector:n.theme},"nvt3")})]})},k=n(19),D=n.n(k);var F=function(e){var t=Object(a.useContext)(b),n=Object(a.useState)(!1),c=Object(s.a)(n,2),i=c[0],o=c[1],r=h()(D.a.header,Object(l.a)({},D.a.headerLightTheme,e.themeSelector)),u=h()(D.a.logo,Object(l.a)({},D.a.logoLightTheme,e.themeSelector));return Object(j.jsxs)("header",{className:r,children:[Object(j.jsx)("div",{className:u,children:Object(j.jsx)(d.b,{to:"/",style:{textDecoration:"none",color:"inherit"},children:"WeatherApp"})}),Object(j.jsx)(w,{isOpen:i,themeSelector:t.theme}),Object(j.jsx)(_,{isOpen:i,handleClick:function(){o(!i)}})]})},A=n(25),R=n.n(A);var W=function(e){return Object(j.jsx)("style",{children:"body {background-color:".concat(e.themeSelector?"#E9ECEF":"#1C1C27",";transition: ease-in 0.2s;}")})};var P=function(e){var t=Object(a.useContext)(b),n=h()(R.a.main,Object(l.a)({},R.a.mainLightTheme,t.theme));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(W,{themeSelector:t.theme}),Object(j.jsx)(F,{themeSelector:t.theme}),Object(j.jsx)("main",{className:n,children:e.children})]})},E=n(26),H=n.n(E);var z=function(e){var t=h()(H.a.card,Object(l.a)({},H.a.cardLightTheme,e.themeSelector));return Object(j.jsx)("div",{className:t,children:e.children})},q=n(32),I={"01d":O.l,"01n":O.g,"02d":O.e,"03d":O.b,"03n":O.b,"04d":O.b,"04n":O.b,"09d":O.d,"09n":O.d,"10d":O.f,"10n":O.c,"11d":O.h,"11n":O.h,"13d":O.k,"13n":O.k,"50d":O.j,"50n":O.j,default:O.i};function U(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I;return t[e]&&"default"!==e?t[e]:t.default}var M=n(3),Q=n.n(M);var V=function(e){var t=Object(a.useContext)(b),n=B,c=t.language;return Object(j.jsxs)("div",{className:"".concat(Q.a.row," ").concat(t.theme?Q.a.rowLightTheme:""),children:[Object(j.jsx)("div",{className:Q.a.hourSection,children:e.time}),Object(j.jsxs)("div",{className:Q.a.dataSection,children:[Object(j.jsxs)("div",{className:Q.a.columnSmall,children:[Object(j.jsxs)("div",{className:Q.a.dataCell,children:[Object(j.jsx)("div",{className:Q.a.column,children:Object(j.jsxs)("div",{className:Q.a.p,children:[n[c][0],":"]})}),Object(j.jsx)("div",{className:Q.a.column,children:Object(j.jsx)("div",{className:Q.a.p,children:e.temperature})})]}),Object(j.jsxs)("div",{className:Q.a.dataCell,children:[Object(j.jsx)("div",{className:Q.a.column,children:Object(j.jsxs)("div",{className:Q.a.p,children:[n[c][1],":"]})}),Object(j.jsx)("div",{className:Q.a.column,children:Object(j.jsx)("div",{className:Q.a.p,children:e.feelsLike})})]}),Object(j.jsxs)("div",{className:Q.a.dataCell,children:[Object(j.jsx)("div",{className:Q.a.column,children:Object(j.jsxs)("div",{className:Q.a.p,children:[n[c][2],":"]})}),Object(j.jsx)("div",{className:Q.a.column,children:Object(j.jsxs)("div",{className:Q.a.p,children:[e.description," ",Object(j.jsx)(v.a,{icon:U(e.icon),style:{fontSize:"1rem"}})]})})]})]}),Object(j.jsxs)("div",{className:Q.a.columnSmall,children:[Object(j.jsxs)("div",{className:Q.a.dataCell,children:[Object(j.jsx)("div",{className:Q.a.column,children:Object(j.jsxs)("div",{className:Q.a.p,children:[n[c][3],":"]})}),Object(j.jsx)("div",{className:Q.a.column,children:Object(j.jsxs)("div",{className:Q.a.p,children:[" ",e.humidity]})})]}),Object(j.jsxs)("div",{className:Q.a.dataCell,children:[Object(j.jsx)("div",{className:Q.a.column,children:Object(j.jsxs)("div",{className:Q.a.p,children:[n[c][4],":"]})}),Object(j.jsx)("div",{className:Q.a.column,children:Object(j.jsxs)("div",{className:Q.a.p,children:[" ",e.clouds]})})]})]})]})]})},G=n(33),J=n.n(G);var Y=function(e){return Object(j.jsx)("div",{className:J.a.table,children:e.data.map((function(e,t){return Object(j.jsx)(V,Object(q.a)({},e),t)}))})};function K(e){return e.toLocaleTimeString("en",{timeStyle:"short",hourCycle:"h24"})}function X(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en";return e.toLocaleDateString(t,{month:"long",day:"numeric"})}function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",n=new Date(e);return n.toLocaleDateString(t,{weekday:"long"})}function $(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",n=new Date(e),a=X(n,t),c=K(n,t);return"".concat(a,", ").concat(c)}function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.charAt(0).toUpperCase()+e.slice(1)}var te={metric:"C",imperial:"F"};function ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"metric",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:te;return"".concat(e," \xb0").concat(n[t])}function ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.name+", "+e.country}function ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",n=ee(X(e,t)),a=ee(Z(e,t));return"".concat(a,", ").concat(n)}var ie=n(34),oe=n.n(ie);var re=function(e){var t=Object(a.useContext)(b),n=Object(a.useState)({}),c=Object(s.a)(n,2),i=c[0],o=c[1],l=Object(a.useState)([]),u=Object(s.a)(l,2),h=u[0],d=u[1],m=Object(r.f)(),g=new Date(m.day);return Object(a.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/onecall?lat=15.594288299999999&lon=-90.14949879999999&exclude=minutely,alerts&appid=d35ffbb008d9cbfc7bec181cf4685403&units=".concat(t.unitSystem,"&lang=").concat(t.language)).then((function(e){return e.json()})).then((function(e){var n=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"imperial",a=e.hourly.length,c=[],i=0;i<a;i++){var o=new Date(1e3*e.hourly[i].dt);if(o.toDateString()===t){var r={time:o.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),description:ee(e.hourly[i].weather[0].description),temperature:ne(e.hourly[i].temp,n),feelsLike:ne(e.hourly[i].feels_like,n),humidity:e.hourly[i].humidity+"%",clouds:e.hourly[i].clouds+"%",icon:e.hourly[i].weather[0].icon};c.push(r)}}return[{sunrise:new Date(1e3*e.current.sunrise).toLocaleTimeString(),sunset:new Date(1e3*e.current.sunset).toLocaleTimeString()},c]}(e,m.day,t.language,t.unitSystem),a=Object(s.a)(n,2),c=a[0],i=a[1];o(c),d(i)}))}),[t.language,t.unitSystem,m.day]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("h1",{children:[ce(g,t.language)," "]}),Object(j.jsxs)("div",{className:oe.a.subTitleRow,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(v.a,{icon:O.l,style:{fontSize:"2rem"}}),"\xa0",i.sunrise]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(v.a,{icon:O.g,style:{fontSize:"2rem"}}),"\xa0",i.sunset]})]})]}),Object(j.jsx)("div",{children:Object(j.jsx)(z,{themeSelector:t.theme,children:Object(j.jsx)(Y,{data:h})})})]})},le=n(27),se=n.n(le);var ue=function(e){var t=h()(se.a.dailyWeatherCard,Object(l.a)({},se.a.dailyWeatherCardLightTheme,e.themeSelector));return Object(j.jsxs)("div",{className:t,children:[Object(j.jsx)("h3",{children:e.weekDay}),Object(j.jsx)("p",{children:e.dateTime}),Object(j.jsx)(v.a,{icon:U(e.icon),style:{fontSize:"5rem"}}),Object(j.jsx)("h2",{children:e.temperature}),Object(j.jsx)("h4",{children:e.description})]})},he=n(28),de=n.n(he);var je=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)([]),r=Object(s.a)(o,2),l=r[0],u=r[1],h=Object(a.useState)("id=5128581"),m=Object(s.a)(h,2),g=m[0],O=m[1],v=Object(a.useContext)(b),x=v.language,p=v.unitSystem;return Object(a.useEffect)((function(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((function(e){O("lat=".concat(e.coords.latitude,"&lon=").concat(e.coords.longitude)),console.log(e.coords)}))}),[]),Object(a.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/forecast?".concat(g,"&appid=d35ffbb008d9cbfc7bec181cf4685403&units=").concat(p,"&lang=").concat(x)).then((function(e){return e.json()})).then((function(e){var t=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:te.metric,a=ae(e.city),c=e.list.length,i=[],o=0;o<c;o+=8){var r={};r.description=ee(e.list[o].weather[0].description),r.temperature=ne(e.list[o].main.temp,n),r.dateTime=$(1e3*e.list[o].dt,t),r.weekDay=ee(Z(1e3*e.list[o].dt,t)),r.icon=e.list[o].weather[0].icon,r.dateTimeOriginal=new Date(1e3*e.list[o].dt).toDateString(),i.push(r)}return[a,i]}(e,x,p),n=Object(s.a)(t,2),a=n[0],c=n[1];i(a),u(c)}))}),[i,u,O,x,p,g]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:de.a.title,children:f[x]}),Object(j.jsxs)(z,{themeSelector:v.theme,children:[Object(j.jsx)("h3",{className:de.a.subTitle,children:c}),l.map((function(e,t){return Object(j.jsx)(d.b,{to:"/hourlyForecast/".concat(e.dateTimeOriginal),style:{textDecoration:"none",color:"inherit"},children:Object(j.jsx)(ue,{weekDay:e.weekDay,dateTime:e.dateTime,icon:e.icon,description:e.description,temperature:e.temperature,themeSelector:v.theme})},t)}))]})]})};var me=function(){return Object(j.jsx)(P,{children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{path:"/hourlyForecast/:day",children:Object(j.jsx)(re,{})}),Object(j.jsx)(r.a,{path:"/",exact:!0,children:Object(j.jsx)(je,{})})]})})},ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{children:Object(j.jsx)(d.a,{basename:"/weatherAppReact",children:Object(j.jsx)(me,{})})})}),document.getElementById("root")),ge()}],[[52,1,2]]]);
//# sourceMappingURL=main.df59d3e6.chunk.js.map