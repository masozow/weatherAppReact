(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,function(e,t,a){e.exports={row:"TableRow_row__3sq-P",rowLightTheme:"TableRow_rowLightTheme__1pHx3",hourSection:"TableRow_hourSection__HA1GU",dataSection:"TableRow_dataSection__1aPFq",column:"TableRow_column__29phD",columnSmall:"TableRow_columnSmall__2TUf2",dataCell:"TableRow_dataCell__33c0W",p:"TableRow_p__uQTQn"}},,,,,,,,,function(e,t,a){e.exports={navBarButtonsContainer:"NavLinks_navBarButtonsContainer__31pAt",navBarButtonsContainerActive:"NavLinks_navBarButtonsContainerActive__2Yc4i",navBarButtonsContainerActiveLightTheme:"NavLinks_navBarButtonsContainerActiveLightTheme__20pwn",navBarButton:"NavLinks_navBarButton__3GL1m",navBarButtonBorder:"NavLinks_navBarButtonBorder__c78zt",navBarButtonBorderDarkTheme:"NavLinks_navBarButtonBorderDarkTheme__2GXbr",navBarButtonBorderLightTheme:"NavLinks_navBarButtonBorderLightTheme__1Kp_5"}},,,function(e,t,a){e.exports={toggleButtonContainer:"ToggleButton_toggleButtonContainer__2sB6s",toggleButtonStructure:"ToggleButton_toggleButtonStructure__18dfw",toggleButtonStructureLightTheme:"ToggleButton_toggleButtonStructureLightTheme__3Lb-9",toggleButtonBouncingCircle:"ToggleButton_toggleButtonBouncingCircle__jqbvM",toggleButtonBouncingCircleLightTheme:"ToggleButton_toggleButtonBouncingCircleLightTheme__3eW9e",left:"ToggleButton_left__QV4O3",right:"ToggleButton_right__31d3P",toggleButtonTitle:"ToggleButton_toggleButtonTitle__3W5Pk",toggleButtonTitleLightTheme:"ToggleButton_toggleButtonTitleLightTheme__3IvqM"}},,function(e,t,a){e.exports={searchBox:"searchBox_searchBox__3jr2_",searchIcon:"searchBox_searchIcon__30RNM",textBox:"searchBox_textBox__3nscU",textBoxLight:"searchBox_textBoxLight__25DLD",textBox_open:"searchBox_textBox_open__2_PRc"}},,,function(e,t,a){e.exports={logo:"NavBar_logo__2C6RD",logoLightTheme:"NavBar_logoLightTheme__VOpLV",header:"NavBar_header__2psxu",headerLightTheme:"NavBar_headerLightTheme__34Avv"}},,function(e,t,a){e.exports={modal:"modal_modal__1DF1f",active:"modal_active__-76bp",card:"modal_card__1x4YE"}},function(e,t,a){e.exports={subTitleRow:"HourlyForecastPage_subTitleRow__2qzqX",loading:"HourlyForecastPage_loading__21mCV"}},,,function(e,t,a){e.exports={backdrop:"backdrop_backdrop__2DiaR",active:"backdrop_active__23CvR"}},function(e,t,a){e.exports={card:"Card_card__1ZQtN",cardLightTheme:"Card_cardLightTheme__2jY3u"}},,,function(e,t,a){e.exports={main:"Layout_main__auk_r",mainLightTheme:"Layout_mainLightTheme__2jxdk"}},function(e,t,a){e.exports={dailyWeatherCard:"DailyWeather_dailyWeatherCard__3cc4H",dailyWeatherCardLightTheme:"DailyWeather_dailyWeatherCardLightTheme__3u14c"}},function(e,t,a){e.exports={title:"HomePage_title__2SwkK",subTitle:"HomePage_subTitle__14AE-"}},,function(e,t,a){e.exports={menuButtonContainer:"MenuButton_menuButtonContainer__3Ix7I"}},,,function(e,t,a){e.exports={table:"Table_table__3Cw9e"}},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(33),i=a.n(o),r=(a(42),a(7)),l=(a(43),a(4)),s=a(6),u=a(8),d=a.n(u),h=a(16),j=a(0),g=Object(n.createContext)({unitSystem:"imperial",language:"en",theme:!1,apiCallCondition:"lat=40.776676&lon=-73.971321",overrideGeolocation:!1,changeTheme:function(){},changeLanguage:function(){},changeUnitSystem:function(){},changeApiCallCondition:function(){},changeOverrideGeolocation:function(){}});function m(e){var t=Object(n.useState)("imperial"),a=Object(s.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)("en"),r=Object(s.a)(i,2),l=r[0],u=r[1],d=Object(n.useState)(!1),h=Object(s.a)(d,2),m=h[0],b=h[1],v=Object(n.useState)("lat=40.776676&lon=-73.971321"),O=Object(s.a)(v,2),x=O[0],p=O[1],_=Object(n.useState)(!1),f=Object(s.a)(_,2),B=f[0],T=f[1];var C={theme:m,language:l,unitSystem:c,apiCallCondition:x,overrideGeolocation:B,changeTheme:function(){b(!m)},changeUnitSystem:function(){o("imperial"===c?"metric":"imperial")},changeLanguage:function(){u("en"===l?"es":"en")},changeApiCallCondition:function(e){p(e),T(!0)}};return Object(j.jsx)(g.Provider,{value:C,children:e.children})}var b=g,v=a(5),O=a(13),x=a(34),p=a.n(x);var _=function(e){var t=Object(n.useContext)(b).theme;return Object(j.jsx)("div",{className:p.a.menuButtonContainer,children:e.isOpen?Object(j.jsx)(O.a,{size:"lg",color:t?"black":"white",icon:v.o,style:{filter:"drop-shadow(0 0 2px white)"},onClick:e.handleClick}):Object(j.jsx)(O.a,{size:"lg",color:t?"black":"white",icon:v.a,onClick:e.handleClick})})},f={en:"Next 5 days forecast",es:"Pron\xf3stico para los pr\xf3ximos 5 d\xedas"},B={toggleLanguage:{en:"Language",es:"Idioma"},toggleTemperature:{en:"Temperature",es:"Temperatura"},toggleTheme:{en:"Theme",es:"Tema"}},T={en:["Temperature","Feels like","Weather","Humidity","Clouds"],es:["Temperatura","Se siente como","Clima","Humedad","Nubosidad"]},C={loading:{en:"Loading",es:"Cargando"},unavailableData:{en:"Due to the usage of Open Weather Map API free tier, this data is currently unavailable.",es:"Debido al uso del plan gratuito de la API de Open Weather Map, estos datos no est\xe1n disponibles actualmente."},cityDataUnavailable:{en:"Try with other city",es:"Prueba con otra ciudad"}},S=a(15),y=a.n(S);var N=function(e){var t,a=Object(n.useState)(!1),c=Object(s.a)(a,2),o=c[0],i=c[1],r=d()(y.a.toggleButtonBouncingCircle,(t={},Object(l.a)(t,y.a.right,o),Object(l.a)(t,y.a.left,!o),Object(l.a)(t,y.a.toggleButtonBouncingCircleLightTheme,e.themeSelector),t)),u=d()(y.a.toggleButtonStructure,Object(l.a)({},y.a.toggleButtonStructureLightTheme,e.themeSelector)),h=d()(y.a.toggleButtonTitle,Object(l.a)({},y.a.toggleButtonTitleLightTheme,e.themeSelector));return Object(j.jsxs)("span",{className:y.a.toggleButtonContainer,children:[Object(j.jsx)("label",{className:h,children:e.text}),Object(j.jsxs)("p",{children:[e.defaultOption,"\xa0",Object(j.jsx)("span",{className:u,onClick:function(t){i(!o),e.callbackFunction()},children:Object(j.jsx)("span",{className:r})}),"\xa0",e.alternativeOption]})]})},L=a(12),k=a.n(L);var w=function(e){var t,a=Object(n.useContext)(b),c=d()((t={},Object(l.a)(t,k.a.navBarButtonsContainerActive,e.isOpen),Object(l.a)(t,k.a.navBarButtonsContainer,!e.isOpen),Object(l.a)(t,k.a.navBarButtonsContainerActiveLightTheme,e.themeSelector),t));return Object(j.jsxs)("div",{className:c,children:[Object(j.jsx)("div",{className:k.a.navBarButton,children:Object(j.jsx)(N,{text:B.toggleLanguage[a.language],defaultOption:"EN",alternativeOption:"ES",callbackFunction:a.changeLanguage,themeSelector:a.theme},"nvt1")}),Object(j.jsx)("div",{className:"".concat(k.a.navBarButtonBorder," ").concat(a.theme?k.a.navBarButtonBorderLightTheme:k.a.navBarButtonBorderDarkTheme)}),Object(j.jsx)("div",{className:k.a.navBarButton,children:Object(j.jsx)(N,{text:B.toggleTemperature[a.language],defaultOption:"\xb0F",alternativeOption:"\xb0C",callbackFunction:a.changeUnitSystem,themeSelector:a.theme},"nvt2")}),Object(j.jsx)("div",{className:"".concat(k.a.navBarButtonBorder," ").concat(a.theme?k.a.navBarButtonBorderLightTheme:k.a.navBarButtonBorderDarkTheme)}),Object(j.jsx)("div",{className:k.a.navBarButton,children:Object(j.jsx)(N,{text:B.toggleTheme[a.language],defaultOption:"Dark",alternativeOption:"Light",callbackFunction:a.changeTheme,themeSelector:a.theme},"nvt3")})]})},D=a(26),A=a.n(D);var F=function(e){var t=d()(A.a.backdrop,Object(l.a)({},A.a.active,e.isBackdropVisible));return Object(j.jsx)("div",{className:t,onClick:e.isBackdropVisibleHandler})},R=a(17),P=a.n(R);var I=function(e){return Object(j.jsx)(O.a,{icon:v.k,className:P.a.searchIcon,onClick:e.handleClick})},W=Object(n.forwardRef)((function(e,t){Object(n.useEffect)((function(){t.current.focus()}),[t]);var a=Object(n.useContext)(b),c=d()(P.a.textBox,Object(l.a)({},P.a.textBoxLight,a.theme),Object(l.a)({},P.a.textBox_open,e.textBoxIsVisible));return Object(j.jsx)("input",{type:"text",placeholder:"Search for a city",ref:t,className:c})})),V="d35ffbb008d9cbfc7bec181cf4685403",E=a(27),H=a.n(E);var M=function(e){var t=d()(H.a.card,Object(l.a)({},H.a.cardLightTheme,e.themeSelector),e.classes);return Object(j.jsx)("div",{className:t,children:e.children})},U=a(22),z=a.n(U);var q=function(e){return Object(j.jsx)("li",{onClick:e.handleClick,children:e.children})};var G=function(e){var t,a=d()(z.a.modal,Object(l.a)({},z.a.active,e.isModalVisible)),c=Object(n.useContext)(b),o=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a.formatted&&c.changeApiCallCondition("lat=".concat(a.geometry.lat,"&lon=").concat(a.geometry.lng)),e.closeModalBackdrophandler()};return Object(j.jsx)("div",{className:a,children:Object(j.jsx)(M,{themeSelector:c.theme,classes:z.a.card,children:(t=e.data,Array.isArray(t)?Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("ul",{children:[" ",e.data.map((function(e,t){return Object(j.jsx)(q,{handleClick:function(t){return o(t,e)},children:e.formatted?"".concat(e.formatted):e},t)}))]})}):Object(j.jsx)("p",{onClick:o,children:t}))})})};var Q=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(!1),r=Object(s.a)(i,2),l=r[0],u=r[1],d=Object(n.useState)([]),h=Object(s.a)(d,2),g=h[0],m=h[1],v=Object(n.createRef)(),O=Object(n.useContext)(b),x=function(){u(!1),console.log("backdrop has been clicked")};function p(e){e.preventDefault(),l||o(!0);var t=v.current.value;c&&0!==t.trim().length&&(console.log("searching for: ",t),fetch("https://api.opencagedata.com/geocode/v1/json?q=".concat(t,"&key=").concat("cd71a160436b45b7826b1e37253fcc76","&language=").concat(O.language,"&pretty=1")).then((function(e){return e.json()})).then((function(e){switch(console.log(e.results),e.results.length){case 1:console.log("Just 1 record returned"),O.changeApiCallCondition("lat=".concat(e.results[0].geometry.lat,"&lon=").concat(e.results[0].geometry.lng));break;case 0:console.log("No records"),m(C.cityDataUnavailable[O.language]),u(!0);break;default:m(e.results),u(!0)}})))}return Object(j.jsxs)("form",{className:P.a.searchBox,onSubmit:p,onBlur:function(){0===v.current.value.trim().length&&o(!1)},children:[Object(j.jsx)(W,{autoFocus:!0,textBoxIsVisible:c,ref:v}),Object(j.jsx)(I,{handleClick:p}),Object(j.jsx)(G,{isModalVisible:l,data:g,closeModalBackdrophandler:x}),Object(j.jsx)(F,{isBackdropVisible:l,isBackdropVisibleHandler:x})]})},J=a(20),Y=a.n(J);var K=function(e){var t=Object(n.useContext)(b),a=Object(n.useState)(!1),c=Object(s.a)(a,2),o=c[0],i=c[1],r=d()(Y.a.header,Object(l.a)({},Y.a.headerLightTheme,e.themeSelector)),u=d()(Y.a.logo,Object(l.a)({},Y.a.logoLightTheme,e.themeSelector));function g(){i(!o)}return Object(j.jsxs)("header",{className:r,children:[Object(j.jsx)("div",{className:u,children:Object(j.jsx)(h.b,{to:"/",style:{textDecoration:"none",color:"inherit",padding:"0",margin:"0"},children:"WeatherApp"})}),Object(j.jsx)(Q,{}),Object(j.jsx)(w,{isOpen:o,themeSelector:t.theme}),Object(j.jsx)(_,{isOpen:o,handleClick:g}),Object(j.jsx)(F,{isBackdropVisibleHandler:g,isBackdropVisible:o})]})},X=a(30),Z=a.n(X);var $=function(e){return Object(j.jsx)("style",{children:"body {background-color:".concat(e.themeSelector?"#E9ECEF":"#1C1C27",";transition: ease-in 0.2s;}")})};var ee=function(e){var t=Object(n.useContext)(b),a=d()(Z.a.main,Object(l.a)({},Z.a.mainLightTheme,t.theme));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)($,{themeSelector:t.theme}),Object(j.jsx)(K,{themeSelector:t.theme}),Object(j.jsx)("main",{className:a,children:e.children})]})},te=a(36),ae={"01d":v.n,"01n":v.h,"02d":v.f,"02n":v.c,"03d":v.b,"03n":v.b,"04d":v.b,"04n":v.b,"09d":v.e,"09n":v.e,"10d":v.g,"10n":v.d,"11d":v.i,"11n":v.i,"13d":v.m,"13n":v.m,"50d":v.l,"50n":v.l,default:v.j};function ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ae;return t[e]&&"default"!==e?t[e]:t.default}var ce=a(3),oe=a.n(ce);var ie=function(e){var t=Object(n.useContext)(b),a=T,c=t.language;return Object(j.jsxs)("div",{className:"".concat(oe.a.row," ").concat(t.theme?oe.a.rowLightTheme:""),children:[Object(j.jsx)("div",{className:oe.a.hourSection,children:e.time}),Object(j.jsxs)("div",{className:oe.a.dataSection,children:[Object(j.jsxs)("div",{className:oe.a.columnSmall,children:[Object(j.jsxs)("div",{className:oe.a.dataCell,children:[Object(j.jsx)("div",{className:oe.a.column,children:Object(j.jsxs)("div",{className:oe.a.p,children:[a[c][0],":"]})}),Object(j.jsx)("div",{className:oe.a.column,children:Object(j.jsx)("div",{className:oe.a.p,children:e.temperature})})]}),Object(j.jsxs)("div",{className:oe.a.dataCell,children:[Object(j.jsx)("div",{className:oe.a.column,children:Object(j.jsxs)("div",{className:oe.a.p,children:[a[c][1],":"]})}),Object(j.jsx)("div",{className:oe.a.column,children:Object(j.jsx)("div",{className:oe.a.p,children:e.feelsLike})})]}),Object(j.jsxs)("div",{className:oe.a.dataCell,children:[Object(j.jsx)("div",{className:oe.a.column,children:Object(j.jsxs)("div",{className:oe.a.p,children:[a[c][2],":"]})}),Object(j.jsx)("div",{className:oe.a.column,children:Object(j.jsxs)("div",{className:oe.a.p,children:[e.description," ",Object(j.jsx)(O.a,{icon:ne(e.icon),style:{fontSize:"1rem"}})]})})]})]}),Object(j.jsxs)("div",{className:oe.a.columnSmall,children:[Object(j.jsxs)("div",{className:oe.a.dataCell,children:[Object(j.jsx)("div",{className:oe.a.column,children:Object(j.jsxs)("div",{className:oe.a.p,children:[a[c][3],":"]})}),Object(j.jsx)("div",{className:oe.a.column,children:Object(j.jsxs)("div",{className:oe.a.p,children:[" ",e.humidity]})})]}),Object(j.jsxs)("div",{className:oe.a.dataCell,children:[Object(j.jsx)("div",{className:oe.a.column,children:Object(j.jsxs)("div",{className:oe.a.p,children:[a[c][4],":"]})}),Object(j.jsx)("div",{className:oe.a.column,children:Object(j.jsxs)("div",{className:oe.a.p,children:[" ",e.clouds]})})]})]})]})]})},re=a(37),le=a.n(re);var se=function(e){return Object(j.jsx)("div",{className:le.a.table,children:e.data.map((function(e,t){return Object(j.jsx)(ie,Object(te.a)({},e),t)}))})};function ue(e){return e.toLocaleTimeString("en",{hour:"2-digit",minute:"2-digit",hourCycle:"h24"})}function de(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en";return e.toLocaleDateString(t,{month:"long",day:"numeric"})}function he(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",a=new Date(e);return a.toLocaleDateString(t,{weekday:"long"})}function je(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",a=new Date(e),n=de(a,t),c=ue(a,t);return"".concat(n,", ").concat(c)}function ge(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.charAt(0).toUpperCase()+e.slice(1)}var me={metric:"C",imperial:"F"};function be(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"metric",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:me;return"".concat(e," \xb0").concat(a[t])}function ve(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.name+", "+e.country}function Oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",a=ge(de(e,t)),n=ge(he(e,t));return"".concat(n,", ").concat(a)}var xe=a(23),pe=a.n(xe);var _e=function(e){var t=Object(n.useContext)(b),a=Object(n.useState)({}),c=Object(s.a)(a,2),o=c[0],i=c[1],l=Object(n.useState)([]),u=Object(s.a)(l,2),d=u[0],h=u[1],g=Object(n.useState)(!0),m=Object(s.a)(g,2),x=m[0],p=m[1],_=Object(r.f)(),f=new Date(_.day);Object(n.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/onecall?".concat(_.coords,"&exclude=minutely,alerts&appid=").concat(V,"&units=").concat(t.unitSystem,"&lang=").concat(t.language)).then((function(e){return e.json()})).then((function(e){console.log(_),console.log(e);var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"imperial";if(0===e.length)return[{sunrise:"",sunset:""},[]];for(var n=e.hourly.length,c=[],o=0;o<n;o++){var i=new Date(1e3*e.hourly[o].dt);if(i.toDateString()===t){var r={time:i.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),description:ge(e.hourly[o].weather[0].description),temperature:be(e.hourly[o].temp,a),feelsLike:be(e.hourly[o].feels_like,a),humidity:e.hourly[o].humidity+"%",clouds:e.hourly[o].clouds+"%",icon:e.hourly[o].weather[0].icon};c.push(r)}}return[{sunrise:new Date(1e3*e.current.sunrise).toLocaleTimeString(),sunset:new Date(1e3*e.current.sunset).toLocaleTimeString()},c]}(e,_.day,t.language,t.unitSystem),n=Object(s.a)(a,2),c=n[0],o=n[1];i(c),h(o),p(!1)}))}),[t.language,_,t.unitSystem]);var B=0!==d.length||x?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("h1",{children:[Oe(f,t.language)," "]}),Object(j.jsxs)("div",{className:pe.a.subTitleRow,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(O.a,{icon:v.n,style:{fontSize:"2rem"}}),"\xa0",o.sunrise]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(O.a,{icon:v.h,style:{fontSize:"2rem"}}),"\xa0",o.sunset]})]})]}),Object(j.jsx)("div",{children:Object(j.jsx)(M,{themeSelector:t.theme,children:Object(j.jsx)(se,{data:d})})})]}):Object(j.jsx)("div",{className:pe.a.loading,children:C.unavailableData[t.language]}),T=Object(j.jsxs)("div",{className:pe.a.loading,children:[C.loading[t.language],"..."]});return Object(j.jsx)(j.Fragment,{children:x?T:B})},fe=a(31),Be=a.n(fe);var Te=function(e){var t=d()(Be.a.dailyWeatherCard,Object(l.a)({},Be.a.dailyWeatherCardLightTheme,e.themeSelector));return Object(j.jsxs)("div",{className:t,children:[Object(j.jsx)("h3",{children:e.weekDay}),Object(j.jsx)("p",{children:e.dateTime}),Object(j.jsx)(O.a,{icon:ne(e.icon),style:{fontSize:"5rem"}}),Object(j.jsx)("h2",{children:e.temperature}),Object(j.jsx)("h4",{children:e.description})]})},Ce=a(32),Se=a.n(Ce);var ye=function(e){return Object(n.useEffect)((function(){var t=setInterval((function(){e.setTimer(),console.log("Timer has changed:",e.timer)}),6e3);return function(){clearInterval(t)}}),[e]),null};var Ne=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)([]),r=Object(s.a)(i,2),l=r[0],u=r[1],d=Object(n.useContext)(b),g=Object(n.useState)(0),m=Object(s.a)(g,2),v=m[0],O=m[1],x=d.language,p=d.unitSystem;return Object(n.useEffect)((function(){if("geolocation"in navigator&&!d.overrideGeolocation){navigator.geolocation.getCurrentPosition((function(e){d.changeApiCallCondition("lat=".concat(e.coords.latitude,"&lon=").concat(e.coords.longitude)),console.log(e)}),(function(e){console.log(e)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})}console.log(navigator.geolocation)}),[d]),Object(n.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/forecast?".concat(d.apiCallCondition,"&appid=").concat(V,"&units=").concat(p,"&lang=").concat(x)).then((function(e){return e.json()})).then((function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:me.metric;if(void 0===typeof e)return["",[]];for(var n=ve(e.city),c=e.list.length,o=[],i=0;i<c;i+=8){var r={};r.description=ge(e.list[i].weather[0].description),r.temperature=be(e.list[i].main.temp,a),r.dateTime=je(1e3*e.list[i].dt,t),r.weekDay=ge(he(1e3*e.list[i].dt,t)),r.icon=e.list[i].weather[0].icon,r.dateTimeOriginal=new Date(1e3*e.list[i].dt).toDateString(),o.push(r)}return[n,o]}(e,x,p),a=Object(s.a)(t,2),n=a[0],c=a[1];o(n),u(c)}))}),[o,u,x,p,d,v]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:Se.a.title,children:f[x]}),Object(j.jsx)(ye,{setTimer:function(){O(v+1)},timer:v}),Object(j.jsxs)(M,{themeSelector:d.theme,children:[Object(j.jsx)("h3",{className:Se.a.subTitle,children:c}),l.map((function(e,t){return Object(j.jsx)(h.b,{to:"/hourlyForecast/".concat(e.dateTimeOriginal,"/").concat(d.apiCallCondition),style:{textDecoration:"none",color:"inherit"},children:Object(j.jsx)(Te,{weekDay:e.weekDay,dateTime:e.dateTime,icon:e.icon,description:e.description,temperature:e.temperature,themeSelector:d.theme})},t)}))]})]})};var Le=function(){return Object(j.jsx)(ee,{children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{path:"/hourlyForecast/:day/:coords",children:Object(j.jsx)(_e,{})}),Object(j.jsx)(r.a,{path:"/",exact:!0,children:Object(j.jsx)(Ne,{})})]})})},ke=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,56)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),o(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(m,{children:Object(j.jsx)(h.a,{basename:"/weatherAppReact",children:Object(j.jsx)(Le,{})})})}),document.getElementById("root")),ke()}],[[55,1,2]]]);
//# sourceMappingURL=main.3f29368c.chunk.js.map