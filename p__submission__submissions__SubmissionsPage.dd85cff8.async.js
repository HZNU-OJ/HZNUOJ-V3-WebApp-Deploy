(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[52],{OVpk:function(t,n,e){"use strict";e.r(n);var i=e("tJVT"),s=(e("q1tI"),e("bx7e")),r=e("yVPj"),a=e.n(r),o=e("d1CT"),u=e("Urjs"),c=e("nKUr"),d=t=>{var n=Object(u["g"])({username:""}),e=Object(i["a"])(n,2),r=e[0];e[1];return Object(c["jsx"])(s["a"],{current:"submissions",children:Object(c["jsx"])("div",{className:a.a.root,children:Object(c["jsx"])(o["a"],{query:{submitter:r.username}})})})};n["default"]=d},Wgwc:function(t,n,e){!function(n,e){t.exports=e()}(0,(function(){"use strict";var t="millisecond",n="second",e="minute",i="hour",s="day",r="week",a="month",o="quarter",u="year",c="date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,n,e){var i=String(t);return!i||i.length>=n?t:""+Array(n+1-i.length).join(e)+t},f={s:m,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),i=Math.floor(e/60),s=e%60;return(n<=0?"+":"-")+m(i,2,"0")+":"+m(s,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var i=12*(e.year()-n.year())+(e.month()-n.month()),s=n.clone().add(i,a),r=e-s<0,o=n.clone().add(i+(r?-1:1),a);return+(-(i+(e-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:a,y:u,w:r,d:s,D:c,h:i,m:e,s:n,ms:t,Q:o}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",_={};_[p]=h;var v=function(t){return t instanceof b},$=function(t,n,e){var i;if(!t)return p;if("string"==typeof t)_[t]&&(i=t),n&&(_[t]=n,i=t);else{var s=t.name;_[s]=t,i=s}return!e&&i&&(p=i),i||!e&&p},g=function(t,n){if(v(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new b(e)},y=f;y.l=$,y.i=v,y.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var b=function(){function h(t){this.$L=$(t.locale,null,!0),this.parse(t)}var m=h.prototype;return m.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(y.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var i=n.match(d);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return e?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return y},m.isValid=function(){return!("Invalid Date"===this.$d.toString())},m.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},m.isAfter=function(t,n){return g(t)<this.startOf(n)},m.isBefore=function(t,n){return this.endOf(n)<g(t)},m.$g=function(t,n,e){return y.u(t)?this[n]:this.set(e,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,o){var d=this,l=!!y.u(o)||o,h=y.p(t),m=function(t,n){var e=y.w(d.$u?Date.UTC(d.$y,n,t):new Date(d.$y,n,t),d);return l?e:e.endOf(s)},f=function(t,n){return y.w(d.toDate()[t].apply(d.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(n)),d)},p=this.$W,_=this.$M,v=this.$D,$="set"+(this.$u?"UTC":"");switch(h){case u:return l?m(1,0):m(31,11);case a:return l?m(1,_):m(0,_+1);case r:var g=this.$locale().weekStart||0,b=(p<g?p+7:p)-g;return m(l?v-b:v+(6-b),_);case s:case c:return f($+"Hours",0);case i:return f($+"Minutes",1);case e:return f($+"Seconds",2);case n:return f($+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(r,o){var d,l=y.p(r),h="set"+(this.$u?"UTC":""),m=(d={},d[s]=h+"Date",d[c]=h+"Date",d[a]=h+"Month",d[u]=h+"FullYear",d[i]=h+"Hours",d[e]=h+"Minutes",d[n]=h+"Seconds",d[t]=h+"Milliseconds",d)[l],f=l===s?this.$D+(o-this.$W):o;if(l===a||l===u){var p=this.clone().set(c,1);p.$d[m](f),p.init(),this.$d=p.set(c,Math.min(this.$D,p.daysInMonth())).$d}else m&&this.$d[m](f);return this.init(),this},m.set=function(t,n){return this.clone().$set(t,n)},m.get=function(t){return this[y.p(t)]()},m.add=function(t,o){var c,d=this;t=Number(t);var l=y.p(o),h=function(n){var e=g(d);return y.w(e.date(e.date()+Math.round(n*t)),d)};if(l===a)return this.set(a,this.$M+t);if(l===u)return this.set(u,this.$y+t);if(l===s)return h(1);if(l===r)return h(7);var m=(c={},c[e]=6e4,c[i]=36e5,c[n]=1e3,c)[l]||1,f=this.$d.getTime()+t*m;return y.w(f,this)},m.subtract=function(t,n){return this.add(-1*t,n)},m.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",i=y.z(this),s=this.$locale(),r=this.$H,a=this.$m,o=this.$M,u=s.weekdays,c=s.months,d=function(t,i,s,r){return t&&(t[i]||t(n,e))||s[i].substr(0,r)},h=function(t){return y.s(r%12||12,t,"0")},m=s.meridiem||function(t,n,e){var i=t<12?"AM":"PM";return e?i.toLowerCase():i},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:y.s(o+1,2,"0"),MMM:d(s.monthsShort,o,c,3),MMMM:d(c,o),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:d(s.weekdaysMin,this.$W,u,2),ddd:d(s.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(r),HH:y.s(r,2,"0"),h:h(1),hh:h(2),a:m(r,a,!0),A:m(r,a,!1),m:String(a),mm:y.s(a,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:i};return e.replace(l,(function(t,n){return n||f[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(t,c,d){var l,h=y.p(c),m=g(t),f=6e4*(m.utcOffset()-this.utcOffset()),p=this-m,_=y.m(this,m);return _=(l={},l[u]=_/12,l[a]=_,l[o]=_/3,l[r]=(p-f)/6048e5,l[s]=(p-f)/864e5,l[i]=p/36e5,l[e]=p/6e4,l[n]=p/1e3,l)[h]||p,d?_:y.a(_)},m.daysInMonth=function(){return this.endOf(a).$D},m.$locale=function(){return _[this.$L]},m.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),i=$(t,n,!0);return i&&(e.$L=i),e},m.clone=function(){return y.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),M=b.prototype;return g.prototype=M,[["$ms",t],["$s",n],["$m",e],["$H",i],["$W",s],["$M",a],["$y",u],["$D",c]].forEach((function(t){M[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),g.extend=function(t,n){return t.$i||(t(n,b,g),t.$i=!0),g},g.locale=$,g.isDayjs=v,g.unix=function(t){return g(1e3*t)},g.en=_[p],g.Ls=_,g.p={},g}))},bnip:function(t,n,e){t.exports={root:"root___75B7Y",secondRoot:"secondRoot___PF0A-",main:"main___3b34R","h-header":"h-header___2IoNM"}},bx7e:function(t,n,e){"use strict";var i=e("9kvl"),s=e("q1tI"),r=e("b2pr"),a=e("Qb08"),o=e("bnip"),u=e.n(o),c=e("nKUr");function d(t,n){var e="";return n.forEach((n=>{e+='<li class="'.concat(t===n.id?"am-active":"",'"><a href="').concat(n.link,'">').concat(n.name,"</a></li>")})),e}function l(t,n){var e="";e+='<li class="am-dropdown" data-am-dropdown>',e+="\n  <a class='am-dropdown-toggle' data-am-dropdown-toggle href='javascript:;'>\n  <span class='am-icon-user'></span>&nbsp;".concat(n,"&nbsp;<span class='am-icon-caret-down'></span>\n  </a>"),e+='<ul class="am-dropdown-content">';for(var i=0;i<t.length;++i)0!==t[i].length&&(t[i].forEach((t=>{e+='<li><a href="'.concat(t.link,'">').concat(t.name,"</a></li>")})),i<t.length-1&&(e+='<li class="am-divider"></li>'));return e+="</ul>",e+="</li>",e}function h(t,n,e,i,s){var r=[{id:"contests",name:"Contests",link:"/contests"},{id:"problem_set",name:"Problem Set",link:"/problemset"},{id:"submissions",name:"Submissions",link:"/submissions"},{id:"users",name:"Users",link:"/users"},{id:"discussions",name:"Discussions",link:"/discussions"}],a=[{id:"enter",name:"Enter",link:"/login"}],o=[[{id:"my_profile",name:"My Profile",link:"/user/".concat(e)},{id:"my_submissions",name:"My Submissions",link:"/submissions?username=".concat(null!==e&&void 0!==e?e:"")},...s?[{id:"my_discussions",name:"My Discussions",link:"/discussions?publisherId=".concat(null!==i&&void 0!==i?i:"")}]:[]],s?[{id:"polygon",name:"Polygon",link:"/polygon"},{id:"administration",name:"Administration",link:"/admin"}]:[],[{id:"settings",name:"Settings",link:"/settings"},{id:"logout",name:"Logout",link:"/logout"}]];return{__html:'\n    <header class="am-topbar-inverse am-topbar-fixed-toped" style="font-size: 16px; margin-top: 0px;">\n    <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-primary am-show-sm-only"\n      data-am-collapse="{target: \'#collapse-head\'}">\n      <span class="am-sr-only">\u5bfc\u822a\u5207\u6362</span>\n      <span class="am-icon-bars"></span>\n    </button>\n    <div class="am-container '.concat(u.a["h-header"],'">\n      <h1 class="am-topbar-brand">\n        <a href="/" >').concat(t,'</a>\n      </h1>\n      <div class="am-collapse am-topbar-collapse" id="collapse-head">\n        <ul class="am-nav am-nav-pills am-topbar-nav">\n          ').concat(d(n,r),'\n        </ul>\n        <div class="am-topbar-right" style="padding-right: 0px;">\n          <ul class="am-nav am-nav-pills am-topbar-nav">\n          ').concat(e?l(o,e):d(n,a),"\n          </ul>\n        </div>\n      </div>\n    </div>\n  </header>\n    ")}}var m=t=>Object(c["jsx"])("div",{dangerouslySetInnerHTML:h("HZNU Online Judge",t.current,t.username,t.id,t.isAdmin)}),f=t=>{var n,e,o,d=Object(i["d"])("@@initialState"),l=d.initialState,h=d.loading;return Object(s["useEffect"])((()=>{window.$(".am-dropdown").dropdown()})),Object(c["jsxs"])(c["Fragment"],{children:[!0===h&&Object(c["jsx"])("div",{style:{height:"calc(100vh)",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(c["jsx"])(a["a"],{})}),!1===h&&Object(c["jsxs"])(c["Fragment"],{children:[Object(c["jsx"])(m,{current:t.current,username:null===l||void 0===l||null===(n=l.userMeta)||void 0===n?void 0:n.username,id:null===l||void 0===l||null===(e=l.userMeta)||void 0===e?void 0:e.id,isAdmin:null===l||void 0===l||null===(o=l.userMeta)||void 0===o?void 0:o.isAdmin}),Object(c["jsx"])("div",{className:u.a.root,style:{maxWidth:t.maxWidth?t.maxWidth:""},children:Object(c["jsxs"])("div",{className:u.a.secondRoot,children:[Object(c["jsx"])("div",{className:u.a.main,children:t.children}),Object(c["jsx"])(r["a"],{})]})})]})]})};n["a"]=f},pHGr:function(t,n,e){!function(n,i){t.exports=i(e("Wgwc"))}(0,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var n={name:"zh-cn",weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),ordinal:function(t,n){switch(n){case"W":return t+"\u5468";default:return t+"\u65e5"}},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206",LLLL:"YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206",l:"YYYY/M/D",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm"},relativeTime:{future:"%s\u5185",past:"%s\u524d",s:"\u51e0\u79d2",m:"1 \u5206\u949f",mm:"%d \u5206\u949f",h:"1 \u5c0f\u65f6",hh:"%d \u5c0f\u65f6",d:"1 \u5929",dd:"%d \u5929",M:"1 \u4e2a\u6708",MM:"%d \u4e2a\u6708",y:"1 \u5e74",yy:"%d \u5e74"},meridiem:function(t,n){var e=100*t+n;return e<600?"\u51cc\u6668":e<900?"\u65e9\u4e0a":e<1100?"\u4e0a\u5348":e<1300?"\u4e2d\u5348":e<1800?"\u4e0b\u5348":"\u665a\u4e0a"}};return t.locale(n,null,!0),n}))},yVPj:function(t,n,e){t.exports={root:"root___3HTWx",loading:"loading___1Eyts"}}}]);