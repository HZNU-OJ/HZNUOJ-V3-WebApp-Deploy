(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[49],{"8Nw7":function(t,e,n){t.exports={root:"root___1XJgj"}},"8gW3":function(t,e,n){"use strict";n.r(e);n("14J3");var s=n("BMrR"),r=(n("jCWc"),n("kPKH")),i=n("8Nw7"),a=n.n(i),c=n("bx7e"),o=n("q1tI"),l=n("WmNS"),u=n.n(l),d=(n("cWXX"),n("/ezw")),h=n("9og8"),f=n("tJVT"),j=(n("5Dmo"),n("3S7+")),p=n("JJCB"),m=n.n(p),b=n("acru"),x=n("f133"),O=n("nKUr");var g=t=>{var e=Object(o["useState"])(!0),n=Object(f["a"])(e,2),s=n[0],r=n[1],i=Object(o["useState"])(null),a=Object(f["a"])(i,2),c=a[0],l=a[1];function p(){return g.apply(this,arguments)}function g(){return g=Object(h["a"])(u.a.mark((function t(){var e,n,s,i;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x["c"].homepage.getAnnouncements();case 2:e=t.sent,n=e.requestError,s=e.response,n?console.log(n):(i=[],s.announcementMetas.forEach(((t,e)=>{var n=t.lastUpdateTime;i.push(Object(O["jsxs"])("tr",{children:[Object(O["jsx"])("td",{style:{textAlign:"left"},className:"h-ellipsis",children:Object(O["jsx"])("a",{href:"/discussion/".concat(t.id),children:Object(O["jsx"])(j["a"],{placement:"top",title:t.title,children:Object(O["jsx"])("span",{style:{fontWeight:"bold"},children:t.title})})})}),Object(O["jsx"])("td",{style:{textAlign:"right",fontFamily:"Georgia"},children:Object(O["jsx"])(j["a"],{placement:"top",title:Object(b["b"])(n)[1],children:Object(O["jsx"])("span",{children:Object(b["b"])(n)[0]})})})]},["announcemnet",e].join("-")))})),l(i),r(!1));case 6:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}return Object(o["useEffect"])((()=>{p()}),[]),Object(O["jsxs"])("div",{className:"am-panel am-panel-primary",style:{fontSize:15},children:[Object(O["jsx"])("div",{className:"am-panel-hd",style:{padding:"2px 5px",fontSize:16},children:"Announcement"}),Object(O["jsx"])(d["a"],{active:!0,title:!0,paragraph:{rows:4},loading:s,children:Object(O["jsxs"])("table",{className:"am-table",children:[Object(O["jsx"])("thead",{children:Object(O["jsxs"])("tr",{children:[Object(O["jsx"])("th",{className:m.a.tableTitle,children:"Title"}),Object(O["jsx"])("th",{className:m.a.tableDate,children:"Date"})]})}),Object(O["jsx"])("tbody",{children:c})]})})]})},y=t=>Object(O["jsxs"])("div",{className:"am-panel am-panel-primary",style:{fontSize:15},children:[Object(O["jsx"])("div",{className:"am-panel-hd",style:{padding:"2px 5px",fontSize:16},children:"Pay Attention"}),Object(O["jsx"])("div",{className:"am-panel-bd",children:"Welcome to HZNU Online Judge V3!"})]}),$=(n("miYZ"),n("tsqr")),v=n("6n/F"),S=n.n(v),w=n("lVxW"),D=n.n(w),M=n("0lfv");function _(t){return{colors:["#E1FFB5","#C8D6FA"],chart:{type:"column",backgroundColor:"transparent",height:"350px"},title:{text:null},xAxis:{categories:["6 days ago","5 days ago","4 days ago","3 days ago","2 days ago","Yesterday","Today"],labels:{style:{fontSize:"16px"}},title:{text:null,style:{fontSize:"16px"}}},yAxis:{min:0,title:{text:window.innerWidth<880?null:"Submissions",style:{fontSize:"16px",height:"320px"}},stackLabels:{enabled:!0,style:{fontSize:"16px"}}},tooltip:{enabled:!0,headerFormat:"",pointFormat:"{series.name}\uff1a{point.y}"},plotOptions:{bar:{stacking:"normal"},column:{stacking:"normal"}},credits:{enabled:!1},series:[{name:"Accepted",showInLegend:!1,data:t.accepted},{name:"Rejected",showInLegend:!1,data:t.rejected}]}}var N=t=>{var e=Object(o["useState"])({accepted:[],rejected:[]}),n=Object(f["a"])(e,2),s=n[0],r=n[1],i=Object(o["useState"])(!0),a=Object(f["a"])(i,2),c=a[0],l=a[1];function j(){return p.apply(this,arguments)}function p(){return p=Object(h["a"])(u.a.mark((function t(){var e,n,s,i;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new Date,t.next=3,x["c"].homepage.getSubmissionStatics({timezone:Object(M["c"])(),now:e.toISOString()});case 3:n=t.sent,s=n.requestError,i=n.response,s?$["default"].error(s):(r(i),l(!1));case 7:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}return Object(o["useEffect"])((()=>{j()}),[]),Object(O["jsxs"])("div",{className:"am-panel am-panel-primary",style:{fontSize:15},children:[Object(O["jsx"])("div",{className:"am-panel-hd",style:{padding:"2px 5px",fontSize:16},children:"Submission Statics"}),Object(O["jsx"])("div",{className:"am-panel-bd",style:{marginLeft:-10},children:Object(O["jsx"])(d["a"],{active:!0,title:!0,paragraph:{rows:8},loading:c,children:Object(O["jsx"])(D.a,{highcharts:S.a,options:_(s)})})})]})},A=n("vXky");function T(){var t=[3749,2600,2400,2300,2100,1900,1600,1400,1200,800],e=[];return t.forEach(((t,n)=>{var s="Kwords";e.push(Object(O["jsxs"])("tr",{children:[Object(O["jsx"])("td",{style:{textAlign:"left"},children:n}),Object(O["jsx"])("td",{style:{textAlign:"center"},children:Object(A["a"])(s,Object(A["b"])(t))}),Object(O["jsx"])("td",{style:{textAlign:"right"},children:Object(A["c"])(t)})]},["top","users",n].join("-")))})),e}var W=t=>Object(O["jsxs"])("div",{className:"am-panel am-panel-primary",style:{fontSize:15},children:[Object(O["jsx"])("div",{className:"am-panel-hd",style:{padding:"2px 5px",fontSize:16},children:"Top Users"}),Object(O["jsxs"])("table",{className:"am-table am-table-striped",children:[Object(O["jsx"])("thead",{children:Object(O["jsxs"])("tr",{children:[Object(O["jsx"])("th",{style:{textAlign:"left",width:"10%"},children:"#"}),Object(O["jsx"])("th",{style:{textAlign:"center",width:"70%"},children:"User"}),Object(O["jsx"])("th",{style:{textAlign:"right",width:"20%"},children:"Rating"})]})}),Object(O["jsx"])("tbody",{children:T()})]})]}),z=t=>Object(O["jsx"])(c["a"],{current:"",children:Object(O["jsx"])("div",{className:a.a.root,children:Object(O["jsxs"])(s["a"],{gutter:16,align:"top",children:[Object(O["jsxs"])(r["a"],{xs:24,sm:24,md:24,lg:17,xl:18,children:[Object(O["jsx"])(g,{}),Object(O["jsx"])(N,{})]}),Object(O["jsxs"])(r["a"],{xs:24,sm:24,md:24,lg:7,xl:6,children:[Object(O["jsx"])(y,{}),Object(O["jsx"])(W,{})]})]})})});e["default"]=z},JJCB:function(t,e,n){t.exports={tableTitle:"tableTitle___3_LpU",tableDate:"tableDate___2mlBD"}},Wgwc:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t="millisecond",e="second",n="minute",s="hour",r="day",i="week",a="month",c="quarter",o="year",l="date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},j={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+f(s,2,"0")+":"+f(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(s,a),i=n-r<0,c=e.clone().add(s+(i?-1:1),a);return+(-(s+(n-r)/(i?r-c:c-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(u){return{M:a,y:o,w:i,d:r,D:l,h:s,m:n,s:e,ms:t,Q:c}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",m={};m[p]=h;var b=function(t){return t instanceof y},x=function(t,e,n){var s;if(!t)return p;if("string"==typeof t)m[t]&&(s=t),e&&(m[t]=e,s=t);else{var r=t.name;m[r]=t,s=r}return!n&&s&&(p=s),s||!n&&p},O=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new y(n)},g=j;g.l=x,g.i=b,g.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var y=function(){function h(t){this.$L=x(t.locale,null,!0),this.parse(t)}var f=h.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(u);if(s){var r=s[2]-1||0,i=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)):new Date(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return g},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return O(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<O(t)},f.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,c){var u=this,d=!!g.u(c)||c,h=g.p(t),f=function(t,e){var n=g.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return d?n:n.endOf(r)},j=function(t,e){return g.w(u.toDate()[t].apply(u.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},p=this.$W,m=this.$M,b=this.$D,x="set"+(this.$u?"UTC":"");switch(h){case o:return d?f(1,0):f(31,11);case a:return d?f(1,m):f(0,m+1);case i:var O=this.$locale().weekStart||0,y=(p<O?p+7:p)-O;return f(d?b-y:b+(6-y),m);case r:case l:return j(x+"Hours",0);case s:return j(x+"Minutes",1);case n:return j(x+"Seconds",2);case e:return j(x+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(i,c){var u,d=g.p(i),h="set"+(this.$u?"UTC":""),f=(u={},u[r]=h+"Date",u[l]=h+"Date",u[a]=h+"Month",u[o]=h+"FullYear",u[s]=h+"Hours",u[n]=h+"Minutes",u[e]=h+"Seconds",u[t]=h+"Milliseconds",u)[d],j=d===r?this.$D+(c-this.$W):c;if(d===a||d===o){var p=this.clone().set(l,1);p.$d[f](j),p.init(),this.$d=p.set(l,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](j);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[g.p(t)]()},f.add=function(t,c){var l,u=this;t=Number(t);var d=g.p(c),h=function(e){var n=O(u);return g.w(n.date(n.date()+Math.round(e*t)),u)};if(d===a)return this.set(a,this.$M+t);if(d===o)return this.set(o,this.$y+t);if(d===r)return h(1);if(d===i)return h(7);var f=(l={},l[n]=6e4,l[s]=36e5,l[e]=1e3,l)[d]||1,j=this.$d.getTime()+t*f;return g.w(j,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=g.z(this),r=this.$locale(),i=this.$H,a=this.$m,c=this.$M,o=r.weekdays,l=r.months,u=function(t,s,r,i){return t&&(t[s]||t(e,n))||r[s].substr(0,i)},h=function(t){return g.s(i%12||12,t,"0")},f=r.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},j={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:g.s(c+1,2,"0"),MMM:u(r.monthsShort,c,l,3),MMMM:u(l,c),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:u(r.weekdaysMin,this.$W,o,2),ddd:u(r.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(i),HH:g.s(i,2,"0"),h:h(1),hh:h(2),a:f(i,a,!0),A:f(i,a,!1),m:String(a),mm:g.s(a,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:s};return n.replace(d,(function(t,e){return e||j[t]||s.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,l,u){var d,h=g.p(l),f=O(t),j=6e4*(f.utcOffset()-this.utcOffset()),p=this-f,m=g.m(this,f);return m=(d={},d[o]=m/12,d[a]=m,d[c]=m/3,d[i]=(p-j)/6048e5,d[r]=(p-j)/864e5,d[s]=p/36e5,d[n]=p/6e4,d[e]=p/1e3,d)[h]||p,u?m:g.a(m)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return m[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=x(t,e,!0);return s&&(n.$L=s),n},f.clone=function(){return g.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}(),$=y.prototype;return O.prototype=$,[["$ms",t],["$s",e],["$m",n],["$H",s],["$W",r],["$M",a],["$y",o],["$D",l]].forEach((function(t){$[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,y,O),t.$i=!0),O},O.locale=x,O.isDayjs=b,O.unix=function(t){return O(1e3*t)},O.en=m[p],O.Ls=m,O.p={},O}))}}]);