(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"0akt":function(t,e,n){"use strict";(function(t){function r(){return"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof t?t:"undefined"!==typeof window?window:"undefined"!==typeof self?self:void 0}n.d(e,"a",(function(){return r}))}).call(this,n("yLpj"))},"4JlD":function(t,e,n){"use strict";var r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,n,s){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"===typeof t?o(i(t),(function(i){var s=encodeURIComponent(r(i))+n;return a(t[i])?o(t[i],(function(t){return s+encodeURIComponent(r(t))})).join(e):s+encodeURIComponent(r(t[i]))})).join(e):s?encodeURIComponent(r(s))+n+encodeURIComponent(r(t)):""};var a=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function o(t,e){if(t.map)return t.map(e);for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r));return n}var i=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}},XFur:function(t,e,n){t.exports={root:"root___1EInN",secondRoot:"secondRoot___22Nvp",title:"title___3csOg",form:"form____NHZA"}},brKP:function(t,e,n){"use strict";n.r(e);n("14J3");var r,a,o=n("BMrR"),i=(n("jCWc"),n("kPKH")),s=(n("+L6B"),n("2/Rp")),c=(n("y8nQ"),n("Vl3Y")),u=(n("5NDa"),n("5rEg")),p=n("WmNS"),l=n.n(p),f=n("9og8"),d=(n("miYZ"),n("tsqr")),h=n("tJVT"),y=n("q1tI"),g=n("cJ7L"),m=n("FY4R"),j=n("9kvl"),O=(n("c+yx"),n("EW0o")),b=n("XFur"),v=n.n(b),w=n("Urjs"),x=new(function(){function t(){this.instances=[]}return t.prototype.get=function(t){var e=this.instances.find((function(e){return e.type===t}));return e||(e={type:t,object:new t},this.instances.push(e)),e.object},t}());function N(t){if(r)try{var e=r.get(t);if(e)return e;if(!a||!a.fallback)return e}catch(n){if(!a||!a.fallbackOnErrors)throw n}return x.get(t)}(function(){function t(t,e,n){void 0===n&&(n=!1),this.target=t,this.name=e,this.async=n}Object.defineProperty(t.prototype,"instance",{get:function(){return N(this.target)},enumerable:!1,configurable:!0})})();var I=function(){function t(t){this.groups=[],this.each=!1,this.context=void 0,this.type=t.type,this.target=t.target,this.propertyName=t.propertyName,this.constraints=t.constraints,this.constraintCls=t.constraintCls,this.validationTypeOptions=t.validationTypeOptions,t.validationOptions&&(this.message=t.validationOptions.message,this.groups=t.validationOptions.groups,this.always=t.validationOptions.always,this.each=t.validationOptions.each,this.context=t.validationOptions.context)}return t}(),E=(function(){function t(){}t.isValid=function(t){var e=this;return"isValid"!==t&&"getMessage"!==t&&-1!==Object.keys(this).map((function(t){return e[t]})).indexOf(t)},t.CUSTOM_VALIDATION="customValidation",t.NESTED_VALIDATION="nestedValidation",t.PROMISE_VALIDATION="promiseValidation",t.CONDITIONAL_VALIDATION="conditionalValidation",t.WHITELIST="whitelistValidation",t.IS_DEFINED="isDefined"}(),function(){function t(){}return t.prototype.transform=function(t){var e=[];return Object.keys(t.properties).forEach((function(n){t.properties[n].forEach((function(r){var a={message:r.message,groups:r.groups,always:r.always,each:r.each},o={type:r.type,target:t.name,propertyName:n,constraints:r.constraints,validationTypeOptions:r.options,validationOptions:a};e.push(new I(o))}))})),e},t}());n("0akt"),function(){function t(){this.validationMetadatas=[],this.constraintMetadatas=[]}Object.defineProperty(t.prototype,"hasValidationMetaData",{get:function(){return!!this.validationMetadatas.length},enumerable:!1,configurable:!0}),t.prototype.addValidationSchema=function(t){var e=this,n=(new E).transform(t);n.forEach((function(t){return e.addValidationMetadata(t)}))},t.prototype.addValidationMetadata=function(t){this.validationMetadatas.push(t)},t.prototype.addConstraintMetadata=function(t){this.constraintMetadatas.push(t)},t.prototype.groupByPropertyName=function(t){var e={};return t.forEach((function(t){e[t.propertyName]||(e[t.propertyName]=[]),e[t.propertyName].push(t)})),e},t.prototype.getTargetValidationMetadatas=function(t,e,n,r,a){var o=function(t){return"undefined"!==typeof t.always?t.always:(!t.groups||!t.groups.length)&&n},i=function(t){return!(!r||a&&a.length||!t.groups||!t.groups.length)},s=this.validationMetadatas.filter((function(n){return(n.target===t||n.target===e)&&(!!o(n)||!i(n)&&(!(a&&a.length>0)||n.groups&&!!n.groups.find((function(t){return-1!==a.indexOf(t)}))))})),c=this.validationMetadatas.filter((function(e){return"string"!==typeof e.target&&(e.target!==t&&((!(e.target instanceof Function)||t.prototype instanceof e.target)&&(!!o(e)||!i(e)&&(!(a&&a.length>0)||e.groups&&!!e.groups.find((function(t){return-1!==a.indexOf(t)}))))))})),u=c.filter((function(t){return!s.find((function(e){return e.propertyName===t.propertyName&&e.type===t.type}))}));return s.concat(u)},t.prototype.getTargetValidatorConstraints=function(t){return this.constraintMetadatas.filter((function(e){return e.target===t}))}}();var A=n("eWa3"),T=n.n(A);function _(t,e){return"string"===typeof t&&T()(t,e)}var k=n("f133"),R=n("nKUr"),V=()=>{var t=Object(w["a"])(),e=t.getToken,n=t.signIn,r=Object(y["useState"])(!1),a=Object(h["a"])(r,2),p=a[0],b=a[1];if(""!=e())return d["default"].warning("Already Login!"),j["a"].replace("/"),null;function x(t){return N.apply(this,arguments)}function N(){return N=Object(f["a"])(l.a.mark((function t(e){var r,a;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k["c"].auth.login({[_(e.usernameOrEmail)?"email":"username"]:e.usernameOrEmail,password:e.password});case 2:r=t.sent,r.requestError,a=r.response,a.error?"WRONG_PASSWORD"===a.error?d["default"].error("Password Error!"):d["default"].error("Login failed!"):a.token&&a.username&&(n(a.token),d["default"].success("Welcome back,".concat(a.username,"!")),j["a"].replace("/"));case 6:case"end":return t.stop()}}),t)}))),N.apply(this,arguments)}var I=function(){var t=Object(f["a"])(l.a.mark((function t(e){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return b(!0),t.next=3,x(e);case 3:b(!1);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(R["jsx"])(O["a"],{current:"enter",children:Object(R["jsx"])("div",{className:v.a.root,children:Object(R["jsxs"])("div",{className:v.a.secondRoot,children:[Object(R["jsx"])("span",{className:v.a.title,children:"Login to your account"}),Object(R["jsxs"])(c["a"],{name:"normal_login",className:v.a.form,onFinish:I,children:[Object(R["jsx"])(c["a"].Item,{name:"usernameOrEmail",rules:[{required:!0,message:"Please input your Username/E-mail!"}],children:Object(R["jsx"])(u["a"],{prefix:Object(R["jsx"])(g["a"],{className:"site-form-item-icon"}),placeholder:"Username/E-mail"})}),Object(R["jsx"])(c["a"].Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(R["jsx"])(u["a"],{prefix:Object(R["jsx"])(m["a"],{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(R["jsxs"])(c["a"].Item,{children:[Object(R["jsx"])(s["a"],{style:{width:"100%"},loading:!0===p,type:"primary",htmlType:"submit",className:"login-form-button",children:"Login"}),Object(R["jsx"])("div",{style:{marginTop:10},children:Object(R["jsxs"])(o["a"],{gutter:[16,0],children:[Object(R["jsx"])(i["a"],{style:{textAlign:"left"},span:8,children:Object(R["jsx"])("a",{href:"/register",children:"Register"})}),Object(R["jsx"])(i["a"],{style:{textAlign:"center"},span:0}),Object(R["jsx"])(i["a"],{style:{textAlign:"right"},span:16,children:Object(R["jsx"])("a",{href:"/forgot-password",children:"Forgot password?"})})]})})]})]})]})})})};e["default"]=V},"c+yx":function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return u}));var r=n("s4NR"),a=n("io9h"),o=t=>{var e=t.response;if(e&&e.status){var n=e.status;n>=500?console.error("\u7f51\u7edc\u5f02\u5e38\uff01"):n>=400&&console.error("\u8bbf\u95ee\u53d7\u9650\uff01")}else e||console.error("\u7f51\u7edc\u5f02\u5e38\uff01");return e},i=Object(a["a"])({errorHandler:o,prefix:"",timeout:6e4,headers:{"Content-Type":"application/json"}}),s=i,c=()=>Object(r["parse"])(window.location.href.split("?")[1]),u=t=>new Promise(((e,n)=>{s.get(t).then((t=>{e(t)}))}))},kd2E:function(t,e,n){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,n,o){e=e||"&",n=n||"=";var i={};if("string"!==typeof t||0===t.length)return i;var s=/\+/g;t=t.split(e);var c=1e3;o&&"number"===typeof o.maxKeys&&(c=o.maxKeys);var u=t.length;c>0&&u>c&&(u=c);for(var p=0;p<u;++p){var l,f,d,h,y=t[p].replace(s,"%20"),g=y.indexOf(n);g>=0?(l=y.substr(0,g),f=y.substr(g+1)):(l=y,f=""),d=decodeURIComponent(l),h=decodeURIComponent(f),r(i,d)?a(i[d])?i[d].push(h):i[d]=[i[d],h]:i[d]=h}return i};var a=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},s4NR:function(t,e,n){"use strict";e.decode=e.parse=n("kd2E"),e.encode=e.stringify=n("4JlD")}}]);