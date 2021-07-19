(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{42:function(e,t,a){},44:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(7),s=a.n(n),r=(a(42),a(5)),i=a.n(r),o=a(10),d=a(6),l=(a(44),a(11)),j=a.n(l),u=a(8),h=a.n(u),p=a(1),b=function(e){var t=e.weatherData,a=e.lat,n=e.long,s=Object(c.useState)([]),r=Object(d.a)(s,2),l=r[0],u=r[1];Object(c.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat("https://api.openweathermap.org/data/2.5","/onecall?lat=").concat(a,"&lon=").concat(n,"&exclude=hourly,minutely&units=metric&APPID=").concat("731368453825eee9b4a6f83b6fb487e0"));case 2:t=e.sent,u(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,n]);var b=l.daily&&l.daily.filter((function(e,t){return 0!==t}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"main-weather",children:[Object(p.jsxs)("div",{className:"deg",children:[t.main.temp,"\xb0"]}),Object(p.jsxs)("div",{className:"date-place",children:[t.name,Object(p.jsx)("div",{className:"date",children:h()().format("dddd, MMM D 'YY")})]})]}),Object(p.jsx)("div",{className:"forecast",children:l.daily&&b.map((function(e,t){return Object(p.jsxs)("div",{className:"forecastlist",children:[Object(p.jsx)("div",{className:"forecast-day",children:h()(1e3*e.dt).format("ddd")}),Object(p.jsx)("div",{className:"forecast-img",children:Object(p.jsx)("img",{src:"".concat("http://openweathermap.org/img/wn/").concat(e.weather[0].icon,"@2x.png"),alt:""})}),Object(p.jsx)("div",{className:"forecast-desc",children:e.weather[0].description})]},t)}))})]})},m=a(88),f=function(e){var t=e.weatherDetail;return Object(p.jsxs)("div",{className:"weather-detail",children:[Object(p.jsx)("h3",{children:"Weather Detail"}),Object(p.jsxs)("p",{className:"detail",children:["Temperature ",Object(p.jsxs)("span",{children:[t.main.temp," \xb0C"]})]}),Object(p.jsxs)("p",{className:"detail",children:["Description ",Object(p.jsx)("span",{children:t.weather[0].description})]}),Object(p.jsxs)("p",{className:"detail",children:["Humidity ",Object(p.jsxs)("span",{children:[t.main.humidity," %"]})]}),Object(p.jsxs)("p",{className:"detail",children:["Wind ",Object(p.jsxs)("span",{children:[t.wind.speed," mph"]})]}),Object(p.jsxs)("p",{className:"detail",children:["Sunrise",Object(p.jsx)("span",{children:h()(1e3*t.sys.sunrise).format("hh.mm a")})]}),Object(p.jsxs)("p",{className:"detail",children:["Sunset",Object(p.jsx)("span",{children:h()(1e3*t.sys.sunset).format("hh.mm a")})]})]})};var O=function(){var e=Object(c.useState)(),t=Object(d.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(),r=Object(d.a)(s,2),l=r[0],u=r[1],h=Object(c.useState)([]),O=Object(d.a)(h,2),x=O[0],v=O[1],w=Object(c.useState)(),g=Object(d.a)(w,2),N=g[0],y=g[1],D=Object(c.useState)(),S=Object(d.a)(D,2),P=S[0],C=S[1],k="731368453825eee9b4a6f83b6fb487e0",A="https://api.openweathermap.org/data/2.5";return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return navigator.geolocation.getCurrentPosition((function(e){n(e.coords.latitude),u(e.coords.longitude)})),e.next=3,j.a.get("".concat(A,"/weather?lat=").concat(a,"&lon=").concat(l,"&units=metric&APPID=").concat(k,"&wind.speed=imperial"));case 3:t=e.sent,v(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,l]),Object(c.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat(A,"/weather?q=").concat(N,"&units=metric&APPID=").concat(k,"&wind.speed=imperial"));case 2:t=e.sent,v(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[N]),Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("div",{className:"split",children:[Object(p.jsx)("div",{className:"column1",children:"undefined"!=typeof x.main?Object(p.jsx)(b,{weatherData:x,lat:x.coord.lat?x.coord.lat:a,long:x.coord.lon?x.coord.lon:l}):Object(p.jsx)("div",{})}),Object(p.jsxs)("div",{className:"column2",children:[Object(p.jsx)("div",{className:"input-group",children:Object(p.jsx)("form",{action:"",onSubmit:function(e){e.preventDefault(),y(P),C("")},children:Object(p.jsx)(m.a,{value:P,action:{icon:"search"},onChange:function(e){return C(e.target.value)},placeholder:"Another location...",transparent:!0})})}),"undefined"!=typeof x.main?Object(p.jsx)(f,{weatherDetail:x}):Object(p.jsx)("div",{})]})]})})},x=(a(71),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,89)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))});s.a.render(Object(p.jsx)(O,{}),document.getElementById("root")),x()}},[[72,1,2]]]);
//# sourceMappingURL=main.422d73aa.chunk.js.map