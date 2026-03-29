var zp=Object.defineProperty;var kp=(r,t,e)=>t in r?zp(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Rt=(r,t,e)=>kp(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function yi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Uf(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Es={duration:.5,overwrite:!1,delay:0},pu,Qe,Ae,Kn=1e8,ve=1/Kn,ec=Math.PI*2,Hp=ec/4,Gp=0,Nf=Math.sqrt,Vp=Math.cos,Wp=Math.sin,Ze=function(t){return typeof t=="string"},Pe=function(t){return typeof t=="function"},Di=function(t){return typeof t=="number"},mu=function(t){return typeof t>"u"},mi=function(t){return typeof t=="object"},xn=function(t){return t!==!1},_u=function(){return typeof window<"u"},Lo=function(t){return Pe(t)||Ze(t)},Of=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},an=Array.isArray,Xp=/random\([^)]+\)/g,Yp=/,\s*/g,Zu=/(?:-?\.?\d|\.)+/gi,Ff=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,us=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,al=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Bf=/[+-]=-?[.\d]+/,qp=/[^,'"\[\]\s]+/gi,$p=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Re,ai,nc,gu,Hn={},Ia={},zf,kf=function(t){return(Ia=Ts(t,Hn))&&An},vu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},mo=function(t,e){return!e&&console.warn(t)},Hf=function(t,e){return t&&(Hn[t]=e)&&Ia&&(Ia[t]=e)||Hn},_o=function(){return 0},Kp={suppressEvents:!0,isStart:!0,kill:!1},_a={suppressEvents:!0,kill:!1},Zp={suppressEvents:!0},xu={},Ji=[],ic={},Gf,In={},ll={},ju=30,ga=[],Su="",Mu=function(t){var e=t[0],n,i;if(mi(e)||Pe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ga.length;i--&&!ga[i].targetTest(e););n=ga[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new fd(t[i],n)))||t.splice(i,1);return t},Cr=function(t){return t._gsap||Mu(Zn(t))[0]._gsap},Vf=function(t,e,n){return(n=t[e])&&Pe(n)?t[e]():mu(n)&&t.getAttribute&&t.getAttribute(e)||n},Sn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ue=function(t){return Math.round(t*1e5)/1e5||0},we=function(t){return Math.round(t*1e7)/1e7||0},ps=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},jp=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ua=function(){var t=Ji.length,e=Ji.slice(0),n,i;for(ic={},Ji.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},yu=function(t){return!!(t._initted||t._startAt||t.add)},Wf=function(t,e,n,i){Ji.length&&!Qe&&Ua(),t.render(e,n,!!(Qe&&e<0&&yu(t))),Ji.length&&!Qe&&Ua()},Xf=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(qp).length<2?e:Ze(t)?t.trim():t},Yf=function(t){return t},Gn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Jp=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ts=function(t,e){for(var n in e)t[n]=e[n];return t},Ju=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=mi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Na=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},eo=function(t){var e=t.parent||Re,n=t.keyframes?Jp(an(t.keyframes)):Gn;if(xn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Qp=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},qf=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Ka=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},ir=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Pr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},tm=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},rc=function(t,e,n,i){return t._startAt&&(Qe?t._startAt.revert(_a):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},em=function r(t){return!t||t._ts&&r(t.parent)},Qu=function(t){return t._repeat?bs(t._tTime,t=t.duration()+t._rDelay)*t:0},bs=function(t,e){var n=Math.floor(t=we(t/e));return t&&n===t?n-1:n},Oa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Za=function(t){return t._end=we(t._start+(t._tDur/Math.abs(t._ts||t._rts||ve)||0))},ja=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=we(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Za(t),n._dirty||Pr(n,t)),t},$f=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Oa(t.rawTime(),e),(!e._dur||bo(0,e.totalDuration(),n)-e._tTime>ve)&&e.render(n,!0)),Pr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ve}},hi=function(t,e,n,i){return e.parent&&ir(e),e._start=we((Di(n)?n:n||t!==Re?Xn(t,n,e):t._time)+e._delay),e._end=we(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),qf(t,e,"_first","_last",t._sort?"_start":0),sc(e)||(t._recent=e),i||$f(t,e),t._ts<0&&ja(t,t._tTime),t},Kf=function(t,e){return(Hn.ScrollTrigger||vu("scrollTrigger",e))&&Hn.ScrollTrigger.create(e,t)},Zf=function(t,e,n,i,s){if(Tu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Qe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Gf!==Nn.frame)return Ji.push(t),t._lazy=[s,i],1},nm=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},sc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},im=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&nm(t)&&!(!t._initted&&sc(t))||(t._ts<0||t._dp._ts<0)&&!sc(t))?0:1,a=t._rDelay,l=0,c,u,f;if(a&&t._repeat&&(l=bo(0,t._tDur,e),u=bs(l,a),t._yoyo&&u&1&&(o=1-o),u!==bs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Qe||i||t._zTime===ve||!e&&t._zTime){if(!t._initted&&Zf(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?ve:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&rc(t,e,n,!0),t._onUpdate&&!n&&Fn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Fn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&ir(t,1),!n&&!Qe&&(Fn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},rm=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},As=function(t,e,n,i){var s=t._repeat,o=we(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:we(o*(s+1)+t._rDelay*s):o,a>0&&!i&&ja(t,t._tTime=t._tDur*a),t.parent&&Za(t),n||Pr(t.parent,t),t},th=function(t){return t instanceof pn?Pr(t):As(t,t._dur)},sm={_start:0,endTime:_o,totalDuration:_o},Xn=function r(t,e,n){var i=t.labels,s=t._recent||sm,o=t.duration()>=Kn?s.endTime(!1):t._dur,a,l,c;return Ze(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(an(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},no=function(t,e,n){var i=Di(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=xn(l.vars.inherit)&&l.parent;o.immediateRender=xn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new ke(e[0],o,e[s+1])},lr=function(t,e){return t||t===0?e(t):e},bo=function(t,e,n){return n<t?t:n>e?e:n},sn=function(t,e){return!Ze(t)||!(e=$p.exec(t))?"":e[1]},om=function(t,e,n){return lr(n,function(i){return bo(t,e,i)})},oc=[].slice,jf=function(t,e){return t&&mi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&mi(t[0]))&&!t.nodeType&&t!==ai},am=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ze(i)&&!e||jf(i,1)?(s=n).push.apply(s,Zn(i)):n.push(i)})||n},Zn=function(t,e,n){return Ae&&!e&&Ae.selector?Ae.selector(t):Ze(t)&&!n&&(nc||!ws())?oc.call((e||gu).querySelectorAll(t),0):an(t)?am(t,n):jf(t)?oc.call(t,0):t?[t]:[]},ac=function(t){return t=Zn(t)[0]||mo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Zn(e,n.querySelectorAll?n:n===t?mo("Invalid scope")||gu.createElement("div"):t)}},Jf=function(t){return t.sort(function(){return .5-Math.random()})},Qf=function(t){if(Pe(t))return t;var e=mi(t)?t:{each:t},n=Dr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,f=i;return Ze(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,_){var g=(_||e).length,p=o[g],m,y,S,x,R,A,T,C,O;if(!p){if(O=e.grid==="auto"?0:(e.grid||[1,Kn])[1],!O){for(T=-Kn;T<(T=_[O++].getBoundingClientRect().left)&&O<g;);O<g&&O--}for(p=o[g]=[],m=l?Math.min(O,g)*u-.5:i%O,y=O===Kn?0:l?g*f/O-.5:i/O|0,T=0,C=Kn,A=0;A<g;A++)S=A%O-m,x=y-(A/O|0),p[A]=R=c?Math.abs(c==="y"?x:S):Nf(S*S+x*x),R>T&&(T=R),R<C&&(C=R);i==="random"&&Jf(p),p.max=T-C,p.min=C,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(O>g?g-1:c?c==="y"?g/O:O:Math.max(O,g/O))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=sn(e.amount||e.each)||0,n=n&&g<0?cd(n):n}return g=(p[h]-p.min)/p.max||0,we(p.b+(n?n(g):g)*p.v)+p.u}},lc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=we(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Di(n)?0:sn(n))}},td=function(t,e){var n=an(t),i,s;return!n&&mi(t)&&(i=n=t.radius||Kn,t.values?(t=Zn(t.values),(s=!Di(t[0]))&&(i*=i)):t=lc(t.increment)),lr(e,n?Pe(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Kn,u=0,f=t.length,h,d;f--;)s?(h=t[f].x-a,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?t[u]:o,s||u===o||Di(o)?u:u+sn(o)}:lc(t))},ed=function(t,e,n,i){return lr(an(t)?!e:n===!0?!!(n=0):!i,function(){return an(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},lm=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},cm=function(t,e){return function(n){return t(parseFloat(n))+(e||sn(n))}},um=function(t,e,n){return id(t,e,0,1,n)},nd=function(t,e,n){return lr(n,function(i){return t[~~e(i)]})},hm=function r(t,e,n){var i=e-t;return an(t)?nd(t,r(0,t.length),e):lr(n,function(s){return(i+(s-t)%i)%i+t})},fm=function r(t,e,n){var i=e-t,s=i*2;return an(t)?nd(t,r(0,t.length-1),e):lr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},go=function(t){return t.replace(Xp,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Yp);return ed(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},id=function(t,e,n,i,s){var o=e-t,a=i-n;return lr(s,function(l){return n+((l-t)/o*a||0)})},dm=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Ze(t),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(an(t)&&!an(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(r(t[c-1],t[c]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},n=e}else i||(t=Ts(an(t)?[]:{},t));if(!u){for(l in e)Eu.call(a,t,l,"get",e[l]);s=function(_){return wu(_,a)||(o?t.p:t)}}}return lr(n,s)},eh=function(t,e,n){var i=t.labels,s=Kn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Fn=function(t,e,n){var i=t.vars,s=i[e],o=Ae,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Ji.length&&Ua(),a&&(Ae=a),u=l?s.apply(c,l):s.call(c),Ae=o,u},qs=function(t){return ir(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Qe),t.progress()<1&&Fn(t,"onInterrupt"),t},hs,rd=[],sd=function(t){if(t)if(t=!t.name&&t.default||t,_u()||t.headless){var e=t.name,n=Pe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:_o,render:wu,add:Eu,kill:Cm,modifier:Rm,rawVars:0},o={targetTest:0,get:0,getSetter:Au,aliases:{},register:0};if(ws(),t!==i){if(In[e])return;Gn(i,Gn(Na(t,s),o)),Ts(i.prototype,Ts(s,Na(t,o))),In[i.prop=e]=i,t.targetTest&&(ga.push(i),xu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Hf(e,i),t.register&&t.register(An,i,Mn)}else rd.push(t)},ge=255,$s={aqua:[0,ge,ge],lime:[0,ge,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ge],navy:[0,0,128],white:[ge,ge,ge],olive:[128,128,0],yellow:[ge,ge,0],orange:[ge,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ge,0,0],pink:[ge,192,203],cyan:[0,ge,ge],transparent:[ge,ge,ge,0]},cl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ge+.5|0},od=function(t,e,n){var i=t?Di(t)?[t>>16,t>>8&ge,t&ge]:0:$s.black,s,o,a,l,c,u,f,h,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),$s[t])i=$s[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ge,i&ge,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ge,t&ge]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Zu),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=cl(l+1/3,s,o),i[1]=cl(l,s,o),i[2]=cl(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Ff),n&&i.length<4&&(i[3]=1),i}else i=t.match(Zu)||$s.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/ge,o=i[1]/ge,a=i[2]/ge,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ad=function(t){var e=[],n=[],i=-1;return t.split(Qi).forEach(function(s){var o=s.match(us)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},nh=function(t,e,n){var i="",s=(t+i).match(Qi),o=e?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=od(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=ad(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Qi,"1").split(us),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Qi),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Qi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in $s)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),pm=/hsl[a]?\(/,ld=function(t){var e=t.join(" "),n;if(Qi.lastIndex=0,Qi.test(e))return n=pm.test(e),t[1]=nh(t[1],n),t[0]=nh(t[0],n,ad(t[1])),!0},vo,Nn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,_=function g(p){var m=r()-i,y=p===!0,S,x,R,A;if((m>t||m<0)&&(n+=m-e),i+=m,R=i-n,S=R-o,(S>0||y)&&(A=++f.frame,h=R-f.time*1e3,f.time=R=R/1e3,o+=S+(S>=s?4:s-S),x=1),y||(l=c(g)),x)for(d=0;d<a.length;d++)a[d](R,h,A,p)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){zf&&(!nc&&_u()&&(ai=nc=window,gu=ai.document||{},Hn.gsap=An,(ai.gsapVersions||(ai.gsapVersions=[])).push(An.version),kf(Ia||ai.GreenSockGlobals||!ai.gsap&&ai||{}),rd.forEach(sd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},vo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),vo=0,c=_o},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,y){var S=m?function(x,R,A,T){p(x,R,A,T),f.remove(S)}:p;return f.remove(p),a[y?"unshift":"push"](S),ws(),S},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},f}(),ws=function(){return!vo&&Nn.wake()},ae={},mm=/^[\d.\-M][\d.\-,\s]/,_m=/["']/g,gm=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(_m,"").trim():+c,i=l.substr(a+1).trim();return e},vm=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},xm=function(t){var e=(t+"").split("("),n=ae[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[gm(e[1])]:vm(t).split(",").map(Xf)):ae._CE&&mm.test(t)?ae._CE("",t):n},cd=function(t){return function(e){return 1-t(1-e)}},ud=function r(t,e){for(var n=t._first,i;n;)n instanceof pn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Dr=function(t,e){return t&&(Pe(t)?t:ae[t]||xm(t))||e},Gr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Sn(t,function(a){ae[a]=Hn[a]=s,ae[o=a.toLowerCase()]=n;for(var l in s)ae[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ae[a+"."+l]=s[l]}),s},hd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ul=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/ec*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Wp((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:hd(a);return s=ec/s,l.config=function(c,u){return r(t,c,u)},l},hl=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:hd(n);return i.config=function(s){return r(t,s)},i};Sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Gr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ae.Linear.easeNone=ae.none=ae.Linear.easeIn;Gr("Elastic",ul("in"),ul("out"),ul());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Gr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Gr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Gr("Circ",function(r){return-(Nf(1-r*r)-1)});Gr("Sine",function(r){return r===1?1:-Vp(r*Hp)+1});Gr("Back",hl("in"),hl("out"),hl());ae.SteppedEase=ae.steps=Hn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-ve;return function(a){return((i*bo(0,o,a)|0)+s)*n}}};Es.ease=ae["quad.out"];Sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Su+=r+","+r+"Params,"});var fd=function(t,e){this.id=Gp++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Vf,this.set=e?e.getSetter:Au},xo=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,As(this,+e.duration,1,1),this.data=e.data,Ae&&(this._ctx=Ae,Ae.data.push(this)),vo||Nn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,As(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ws(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ja(this,n),!s._dp||s.parent||$f(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&hi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ve||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Wf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Qu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Qu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?bs(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ve?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Oa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ve?0:this._rts,this.totalTime(bo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Za(this),tm(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ws(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ve&&(this._tTime-=ve)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=we(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&hi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(xn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Oa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Zp);var i=Qe;return Qe=n,yu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Qe=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,th(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,th(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Xn(this,n),xn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,xn(i)),this._dur||(this._zTime=-ve),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ve:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ve,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ve)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Pe(n)?n:Yf,l=function(){var u=i.then;i.then=null,s&&s(),Pe(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){qs(this)},r}();Gn(xo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ve,_prom:0,_ps:!1,_rts:1});var pn=function(r){Uf(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=xn(n.sortChildren),Re&&hi(n.parent||Re,yi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Kf(yi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return no(0,arguments,this),this},e.from=function(i,s,o){return no(1,arguments,this),this},e.fromTo=function(i,s,o,a){return no(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,eo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ke(i,s,Xn(this,o),1),this},e.call=function(i,s,o){return hi(this,ke.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ke(i,o,Xn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,eo(o).immediateRender=xn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,eo(a).immediateRender=xn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:we(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,_,g,p,m,y,S,x,R,A,T;if(this!==Re&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,x=this._start,S=this._ts,m=!S,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(h=we(u%p),u===l?(g=this._repeat,h=c):(R=we(u/p),g=~~R,g&&g===R&&(h=c,g--),h>c&&(h=c)),R=bs(this._tTime,p),!a&&this._tTime&&R!==g&&this._tTime-R*p-this._dur<=0&&(R=g),A&&g&1&&(h=c-h,T=1),g!==R&&!this._lock){var C=A&&R&1,O=C===(A&&g&1);if(g<R&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(T?0:we(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Fn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,R=g),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,O&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;ud(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=rm(this,we(a),we(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!R&&(Fn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=-ve);break}}d=_}else{d=this._last;for(var v=i<0?i:h;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||Qe&&yu(d)),h!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=v?-ve:ve);break}}d=_}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-ve)._zTime=h>=a?1:-1,this._ts))return this._start=x,Za(this),this.render(i,s,o);this._onUpdate&&!s&&Fn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ir(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Fn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Di(s)||(s=Xn(this,s,i)),!(i instanceof xo)){if(an(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ze(i))return this.addLabel(i,s);if(Pe(i))i=ke.delayedCall(0,i);else return this}return this!==i?hi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Kn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ke?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Ze(i)?this.removeLabel(i):Pe(i)?this.killTweensOf(i):(i.parent===this&&Ka(this,i),i===this._recent&&(this._recent=this._last),Pr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=we(Nn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Xn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=ke.delayedCall(0,s||_o,o);return a.data="isPause",this._hasPause=1,hi(this,a,Xn(this,i))},e.removePause=function(i){var s=this._first;for(i=Xn(this,i);s;)s._start===i&&s.data==="isPause"&&ir(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)qi!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Zn(i),l=this._first,c=Di(s),u;l;)l instanceof ke?jp(l._targets,a)&&(c?(!qi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Xn(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=ke.to(o,Gn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ve,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&As(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Gn({startAt:{time:Xn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),eh(this,Xn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),eh(this,Xn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ve)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=we(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Pr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Pr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Kn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,hi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=we(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;As(o,o===Re&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Re._ts&&(Wf(Re,Oa(i,Re)),Gf=Nn.frame),Nn.frame>=ju){ju+=zn.autoSleep||120;var s=Re._first;if((!s||!s._ts)&&zn.autoSleep&&Nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Nn.sleep()}}},t}(xo);Gn(pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Sm=function(t,e,n,i,s,o,a){var l=new Mn(this._pt,t,e,0,1,vd,null,s),c=0,u=0,f,h,d,_,g,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=go(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),h=n.match(al)||[];f=al.exec(i);)_=f[0],g=i.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?ps(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=al.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Bf.test(i)||m)&&(l.e=0),this._pt=l,l},Eu=function(t,e,n,i,s,o,a,l,c,u){Pe(i)&&(i=i(s||0,t,o));var f=t[e],h=n!=="get"?n:Pe(f)?c?t[e.indexOf("set")||!Pe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=Pe(f)?c?bm:_d:bu,_;if(Ze(i)&&(~i.indexOf("random(")&&(i=go(i)),i.charAt(1)==="="&&(_=ps(h,i)+(sn(h)||0),(_||_===0)&&(i=_))),!u||h!==i||cc)return!isNaN(h*i)&&i!==""?(_=new Mn(this._pt,t,e,+h||0,i-(h||0),typeof f=="boolean"?wm:gd,0,d),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!f&&!(e in t)&&vu(e,i),Sm.call(this,t,e,h,i,d,l||zn.stringFilter,c))},Mm=function(t,e,n,i,s){if(Pe(t)&&(t=io(t,s,e,n,i)),!mi(t)||t.style&&t.nodeType||an(t)||Of(t))return Ze(t)?io(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=io(t[a],s,e,n,i);return o},dd=function(t,e,n,i,s,o){var a,l,c,u;if(In[t]&&(a=new In[t]).init(s,a.rawVars?e[t]:Mm(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Mn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==hs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},qi,cc,Tu=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,y=m&&m.data==="nested"?m.vars.targets:p,S=t._overwrite==="auto"&&!pu,x=t.timeline,R,A,T,C,O,v,E,L,z,W,K,H,X;if(x&&(!h||!s)&&(s="none"),t._ease=Dr(s,Es.ease),t._yEase=f?cd(Dr(f===!0?s:f,Es.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!x&&!!i.runBackwards,!x||h&&!i.stagger){if(L=p[0]?Cr(p[0]).harness:0,H=L&&i[L.prop],R=Na(i,xu),g&&(g._zTime<0&&g.progress(1),e<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?_a:Kp),g._lazy=0),o){if(ir(t._startAt=ke.set(p,Gn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&xn(l),startAt:null,delay:0,onUpdate:c&&function(){return Fn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qe||!a&&!d)&&t._startAt.revert(_a),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(a=!1),T=Gn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&xn(l),immediateRender:a,stagger:0,parent:m},R),H&&(T[L.prop]=H),ir(t._startAt=ke.set(p,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qe?t._startAt.revert(_a):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,ve,ve);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&xn(l)||l&&!_,A=0;A<p.length;A++){if(O=p[A],E=O._gsap||Mu(p)[A]._gsap,t._ptLookup[A]=W={},ic[E.id]&&Ji.length&&Ua(),K=y===p?A:y.indexOf(O),L&&(z=new L).init(O,H||R,t,K,y)!==!1&&(t._pt=C=new Mn(t._pt,O,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(V){W[V]=C}),z.priority&&(v=1)),!L||H)for(T in R)In[T]&&(z=dd(T,R,t,K,O,y))?z.priority&&(v=1):W[T]=C=Eu.call(t,O,T,"get",R[T],K,y,0,i.stringFilter);t._op&&t._op[A]&&t.kill(O,t._op[A]),S&&t._pt&&(qi=t,Re.killTweensOf(O,W,t.globalTime(e)),X=!t.parent,qi=0),t._pt&&l&&(ic[E.id]=1)}v&&xd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!X,h&&e<=0&&x.render(Kn,!0,!0)},ym=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,d;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(u=h[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return cc=1,t.vars[e]="+=0",Tu(t,a),cc=0,l?mo(e+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Ue(n)+sn(f.e)),f.b&&(f.b=u.s+sn(f.b))},Em=function(t,e){var n=t[0]?Cr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Ts({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Tm=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(an(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},io=function(t,e,n,i,s){return Pe(t)?t.call(e,n,i,s):Ze(t)&&~t.indexOf("random(")?go(t):t},pd=Su+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",md={};Sn(pd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return md[r]=1});var ke=function(r){Uf(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:eo(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=i.parent||Re,S=(an(n)||Of(n)?Di(n[0]):"length"in i)?[n]:Zn(n),x,R,A,T,C,O,v,E;if(a._targets=S.length?Mu(S):mo("GSAP target "+n+" not found. https://gsap.com",!zn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||h||Lo(c)||Lo(u)){if(i=a.vars,x=a.timeline=new pn({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:S}),x.kill(),x.parent=x._dp=yi(a),x._start=0,h||Lo(c)||Lo(u)){if(T=S.length,v=h&&Qf(h),mi(h))for(C in h)~pd.indexOf(C)&&(E||(E={}),E[C]=h[C]);for(R=0;R<T;R++)A=Na(i,md),A.stagger=0,m&&(A.yoyoEase=m),E&&Ts(A,E),O=S[R],A.duration=+io(c,yi(a),R,O,S),A.delay=(+io(u,yi(a),R,O,S)||0)-a._delay,!h&&T===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),x.to(O,A,v?v(R,O,S):0),x._ease=ae.none;x.duration()?c=u=0:a.timeline=0}else if(_){eo(Gn(x.vars.defaults,{ease:"none"})),x._ease=Dr(_.ease||i.ease||"none");var L=0,z,W,K;if(an(_))_.forEach(function(H){return x.to(S,H,">")}),x.duration();else{A={};for(C in _)C==="ease"||C==="easeEach"||Tm(C,_[C],A,_.easeEach);for(C in A)for(z=A[C].sort(function(H,X){return H.t-X.t}),L=0,R=0;R<z.length;R++)W=z[R],K={ease:W.e,duration:(W.t-(R?z[R-1].t:0))/100*c},K[C]=W.v,x.to(S,K,L),L+=K.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!pu&&(qi=yi(a),Re.killTweensOf(S),qi=0),hi(y,yi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!_&&a._start===we(y._time)&&xn(f)&&em(yi(a))&&y.data!=="nested")&&(a._tTime=-ve,a.render(Math.max(0,-u)||0)),p&&Kf(yi(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-ve&&!u?l:i<ve?0:i,h,d,_,g,p,m,y,S,x;if(!c)im(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(h=we(f%g),f===l?(_=this._repeat,h=c):(p=we(f/g),_=~~p,_&&_===p?(h=c,_--):h>c&&(h=c)),m=this._yoyo&&_&1,m&&(x=this._yEase,h=c-h),p=bs(this._tTime,g),h===a&&!o&&this._initted&&_===p)return this._tTime=f,this;_!==p&&(S&&this._yEase&&ud(S,m),this.vars.repeatRefresh&&!m&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(we(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Zf(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(x||this._ease)(h/c),this._from&&(this.ratio=y=1-y),!a&&f&&!s&&!p&&(Fn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;S&&S.render(i<0?i:S._dur*S._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&rc(this,i,s,o),Fn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&Fn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&rc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ir(this,1),!s&&!(u&&!a)&&(f||a||m)&&(Fn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){vo||Nn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Tu(this,c),u=this._ease(c/this._dur),ym(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(ja(this,0),this.parent||qf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?qs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qe),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,qi&&qi.vars.overwrite!==!0)._first||qs(this),this.parent&&o!==this.timeline.totalDuration()&&As(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Zn(i):a,c=this._ptLookup,u=this._pt,f,h,d,_,g,p,m;if((!s||s==="all")&&Qp(a,l))return s==="all"&&(this._pt=0),qs(this);for(f=this._op=this._op||[],s!=="all"&&(Ze(s)&&(g={},Sn(s,function(y){return g[y]=1}),s=g),s=Em(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=c[m],s==="all"?(f[m]=s,_=h,d={}):(d=f[m]=f[m]||{},_=s);for(g in _)p=h&&h[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Ka(this,p,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&qs(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return no(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return no(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Re.killTweensOf(i,s,o)},t}(xo);Gn(ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Sn("staggerTo,staggerFrom,staggerFromTo",function(r){ke[r]=function(){var t=new pn,e=oc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var bu=function(t,e,n){return t[e]=n},_d=function(t,e,n){return t[e](n)},bm=function(t,e,n,i){return t[e](i.fp,n)},Am=function(t,e,n){return t.setAttribute(e,n)},Au=function(t,e){return Pe(t[e])?_d:mu(t[e])&&t.setAttribute?Am:bu},gd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},wm=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},vd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},wu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Rm=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},Cm=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ka(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Pm=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},xd=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Mn=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||gd,this.d=l||this,this.set=c||bu,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Pm,this.m=n,this.mt=s,this.tween=i},r}();Sn(Su+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return xu[r]=1});Hn.TweenMax=Hn.TweenLite=ke;Hn.TimelineLite=Hn.TimelineMax=pn;Re=new pn({sortChildren:!1,defaults:Es,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zn.stringFilter=ld;var Lr=[],va={},Dm=[],ih=0,Lm=0,fl=function(t){return(va[t]||Dm).map(function(e){return e()})},uc=function(){var t=Date.now(),e=[];t-ih>2&&(fl("matchMediaInit"),Lr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ai.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),fl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ih=t,fl("matchMedia"))},Sd=function(){function r(e,n){this.selector=n&&ac(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Lm++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Pe(n)&&(s=i,i=n,n=Pe);var o=this,a=function(){var c=Ae,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=ac(s)),Ae=o,f=i.apply(o,arguments),Pe(f)&&o._r.push(f),Ae=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Pe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ae;Ae=null,n(this),Ae=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ke&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof pn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ke)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Lr.length;o--;)Lr[o].id===this.id&&Lr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),Im=function(){function r(e){this.contexts=[],this.scope=e,Ae&&Ae.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){mi(n)||(n={matches:n});var o=new Sd(0,s||this.scope),a=o.conditions={},l,c,u;Ae&&!o.selector&&(o.selector=Ae.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ai.matchMedia(n[c]),l&&(Lr.indexOf(o)<0&&Lr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(uc):l.addEventListener("change",uc)));return u&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Fa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return sd(i)})},timeline:function(t){return new pn(t)},getTweensOf:function(t,e){return Re.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ze(t)&&(t=Zn(t)[0]);var s=Cr(t||{}).get,o=n?Yf:Xf;return n==="native"&&(n=""),t&&(e?o((In[e]&&In[e].get||s)(t,e,n,i)):function(a,l,c){return o((In[a]&&In[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Zn(t),t.length>1){var i=t.map(function(u){return An.quickSetter(u,e,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}t=t[0]||{};var o=In[e],a=Cr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var f=new o;hs._pt=0,f.init(t,n?u+n:u,hs,0,[t]),f.render(1,f),hs._pt&&wu(1,hs)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=An.to(t,Gn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Re.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Dr(t.ease,Es.ease)),Ju(Es,t||{})},config:function(t){return Ju(zn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!In[a]&&!Hn[a]&&mo(e+" effect requires "+a+" plugin.")}),ll[e]=function(a,l,c){return n(Zn(a),Gn(l||{},s),c)},o&&(pn.prototype[e]=function(a,l,c){return this.add(ll[e](a,mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ae[t]=Dr(e)},parseEase:function(t,e){return arguments.length?Dr(t,e):ae},getById:function(t){return Re.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new pn(t),i,s;for(n.smoothChildTiming=xn(t.smoothChildTiming),Re.remove(n),n._dp=0,n._time=n._tTime=Re._time,i=Re._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ke&&i.vars.onComplete===i._targets[0]))&&hi(n,i,i._start-i._delay),i=s;return hi(Re,n,0),n},context:function(t,e){return t?new Sd(t,e):Ae},matchMedia:function(t){return new Im(t)},matchMediaRefresh:function(){return Lr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||uc()},addEventListener:function(t,e){var n=va[t]||(va[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=va[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:hm,wrapYoyo:fm,distribute:Qf,random:ed,snap:td,normalize:um,getUnit:sn,clamp:om,splitColor:od,toArray:Zn,selector:ac,mapRange:id,pipe:lm,unitize:cm,interpolate:dm,shuffle:Jf},install:kf,effects:ll,ticker:Nn,updateRoot:pn.updateRoot,plugins:In,globalTimeline:Re,core:{PropTween:Mn,globals:Hf,Tween:ke,Timeline:pn,Animation:xo,getCache:Cr,_removeLinkedListItem:Ka,reverting:function(){return Qe},context:function(t){return t&&Ae&&(Ae.data.push(t),t._ctx=Ae),Ae},suppressOverwrites:function(t){return pu=t}}};Sn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Fa[r]=ke[r]});Nn.add(pn.updateRoot);hs=Fa.to({},{duration:0});var Um=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Nm=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Um(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},dl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ze(s)&&(l={},Sn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Nm(a,s)}}}},An=Fa.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Qe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},dl("roundProps",lc),dl("modifiers"),dl("snap",td))||Fa;ke.version=pn.version=An.version="3.14.2";zf=1;_u()&&ws();ae.Power0;ae.Power1;ae.Power2;ae.Power3;ae.Power4;ae.Linear;ae.Quad;ae.Cubic;ae.Quart;ae.Quint;ae.Strong;ae.Elastic;ae.Back;ae.SteppedEase;ae.Bounce;ae.Sine;ae.Expo;ae.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var rh,$i,ms,Ru,br,sh,Cu,Om=function(){return typeof window<"u"},Li={},vr=180/Math.PI,_s=Math.PI/180,Wr=Math.atan2,oh=1e8,Pu=/([A-Z])/g,Fm=/(left|right|width|margin|padding|x)/i,Bm=/[\s,\(]\S/,fi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},hc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},zm=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},km=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Hm=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Gm=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Md=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},yd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Vm=function(t,e,n){return t.style[e]=n},Wm=function(t,e,n){return t.style.setProperty(e,n)},Xm=function(t,e,n){return t._gsap[e]=n},Ym=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},qm=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},$m=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ce="transform",yn=Ce+"Origin",Km=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Li&&s){if(this.tfm=this.tfm||{},t!=="transform")t=fi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Ei(i,a)}):this.tfm[t]=o.x?o[t]:Ei(i,t),t===yn&&(this.tfm.zOrigin=o.zOrigin);else return fi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Ce)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(yn,e,"")),t=Ce}(s||e)&&this.props.push(t,e,s[t])},Ed=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Zm=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Pu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Cu(),(!s||!s.isStart)&&!n[Ce]&&(Ed(n),i.zOrigin&&n[yn]&&(n[yn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Td=function(t,e){var n={target:t,props:[],revert:Zm,save:Km};return t._gsap||An.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},bd,fc=function(t,e){var n=$i.createElementNS?$i.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):$i.createElement(t);return n&&n.style?n:$i.createElement(t)},Bn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Pu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Rs(e)||e,1)||""},ah="O,Moz,ms,Ms,Webkit".split(","),Rs=function(t,e,n){var i=e||br,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(ah[o]+t in s););return o<0?null:(o===3?"ms":o>=0?ah[o]:"")+t},dc=function(){Om()&&window.document&&(rh=window,$i=rh.document,ms=$i.documentElement,br=fc("div")||{style:{}},fc("div"),Ce=Rs(Ce),yn=Ce+"Origin",br.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bd=!!Rs("perspective"),Cu=An.core.reverting,Ru=1)},lh=function(t){var e=t.ownerSVGElement,n=fc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ms.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ms.removeChild(n),s},ch=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Ad=function(t){var e,n;try{e=t.getBBox()}catch{e=lh(t),n=1}return e&&(e.width||e.height)||n||(e=lh(t)),e&&!e.width&&!e.x&&!e.y?{x:+ch(t,["x","cx","x1"])||0,y:+ch(t,["y","cy","y1"])||0,width:0,height:0}:e},wd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Ad(t))},rr=function(t,e){if(e){var n=t.style,i;e in Li&&e!==yn&&(e=Ce),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Pu,"-$1").toLowerCase())):n.removeAttribute(e)}},Ki=function(t,e,n,i,s,o){var a=new Mn(t._pt,e,n,0,1,o?yd:Md);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},uh={deg:1,rad:1,turn:1},jm={grid:1,flex:1},sr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=br.style,l=Fm.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",_,g,p,m;if(i===o||!s||uh[i]||uh[o])return s;if(o!=="px"&&!h&&(s=r(t,e,n,"px")),m=t.getCTM&&wd(t),(d||o==="%")&&(Li[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[u],Ue(d?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(h?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===$i||!g.appendChild)&&(g=$i.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Nn.time&&!p.uncache)return Ue(s/p.width*f);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=f+i,_=t[u],y?t.style[e]=y:rr(t,e)}else(d||o==="%")&&!jm[Bn(g,"display")]&&(a.position=Bn(t,"position")),g===t&&(a.position="static"),g.appendChild(br),_=br[u],g.removeChild(br),a.position="absolute";return l&&d&&(p=Cr(g),p.time=Nn.time,p.width=g[u]),Ue(h?_*s/f:_&&s?f/_*s:0)},Ei=function(t,e,n,i){var s;return Ru||dc(),e in fi&&e!=="transform"&&(e=fi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Li[e]&&e!=="transform"?(s=Mo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:za(Bn(t,yn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ba[e]&&Ba[e](t,e,n)||Bn(t,e)||Vf(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?sr(t,e,s,n)+n:s},Jm=function(t,e,n,i){if(!n||n==="none"){var s=Rs(e,t,1),o=s&&Bn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Bn(t,"borderTopColor"))}var a=new Mn(this._pt,t.style,e,0,1,vd),l=0,c=0,u,f,h,d,_,g,p,m,y,S,x,R;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Bn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Bn(t,e)||i,g?t.style[e]=g:rr(t,e)),u=[n,i],ld(u),n=u[0],i=u[1],h=n.match(us)||[],R=i.match(us)||[],R.length){for(;f=us.exec(i);)p=f[0],y=i.substring(l,f.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(g=h[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),p.charAt(1)==="="&&(p=ps(d,p)+x),m=parseFloat(p),S=p.substr((m+"").length),l=us.lastIndex-S.length,S||(S=S||zn.units[e]||x,l===i.length&&(i+=S,a.e+=S)),x!==S&&(d=sr(t,e,g,S)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:m-d,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?yd:Md;return Bf.test(i)&&(a.e=0),this._pt=a,a},hh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Qm=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=hh[n]||n,e[1]=hh[i]||i,e.join(" ")},t_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Li[a]&&(l=1,a=a==="transformOrigin"?yn:Ce),rr(n,a);l&&(rr(n,Ce),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Mo(n,1),o.uncache=1,Ed(i)))}},Ba={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Mn(t._pt,e,n,0,0,t_);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},So=[1,0,0,1,0,0],Rd={},Cd=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},fh=function(t){var e=Bn(t,Ce);return Cd(e)?So:e.substr(7).match(Ff).map(Ue)},Du=function(t,e){var n=t._gsap||Cr(t),i=t.style,s=fh(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?So:s):(s===So&&!t.offsetParent&&t!==ms&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,ms.appendChild(t)),s=fh(t),l?i.display=l:rr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):ms.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},pc=function(t,e,n,i,s,o){var a=t._gsap,l=s||Du(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],y=l[5],S=e.split(" "),x=parseFloat(S[0])||0,R=parseFloat(S[1])||0,A,T,C,O;n?l!==So&&(T=d*p-_*g)&&(C=x*(p/T)+R*(-g/T)+(g*y-p*m)/T,O=x*(-_/T)+R*(d/T)-(d*y-_*m)/T,x=C,R=O):(A=Ad(t),x=A.x+(~S[0].indexOf("%")?x/100*A.width:x),R=A.y+(~(S[1]||S[0]).indexOf("%")?R/100*A.height:R)),i||i!==!1&&a.smooth?(m=x-c,y=R-u,a.xOffset=f+(m*d+y*g)-m,a.yOffset=h+(m*_+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=R,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[yn]="0px 0px",o&&(Ki(o,a,"xOrigin",c,x),Ki(o,a,"yOrigin",u,R),Ki(o,a,"xOffset",f,a.xOffset),Ki(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+R)},Mo=function(t,e){var n=t._gsap||new fd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Bn(t,yn)||"0",u,f,h,d,_,g,p,m,y,S,x,R,A,T,C,O,v,E,L,z,W,K,H,X,V,st,P,at,Bt,Xt,q,Q;return u=f=h=g=p=m=y=S=x=0,d=_=1,n.svg=!!(t.getCTM&&wd(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ce]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ce]!=="none"?l[Ce]:"")),i.scale=i.rotate=i.translate="none"),T=Du(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),pc(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,T)),R=n.xOrigin||0,A=n.yOrigin||0,T!==So&&(E=T[0],L=T[1],z=T[2],W=T[3],u=K=T[4],f=H=T[5],T.length===6?(d=Math.sqrt(E*E+L*L),_=Math.sqrt(W*W+z*z),g=E||L?Wr(L,E)*vr:0,y=z||W?Wr(z,W)*vr+g:0,y&&(_*=Math.abs(Math.cos(y*_s))),n.svg&&(u-=R-(R*E+A*z),f-=A-(R*L+A*W))):(Q=T[6],Xt=T[7],P=T[8],at=T[9],Bt=T[10],q=T[11],u=T[12],f=T[13],h=T[14],C=Wr(Q,Bt),p=C*vr,C&&(O=Math.cos(-C),v=Math.sin(-C),X=K*O+P*v,V=H*O+at*v,st=Q*O+Bt*v,P=K*-v+P*O,at=H*-v+at*O,Bt=Q*-v+Bt*O,q=Xt*-v+q*O,K=X,H=V,Q=st),C=Wr(-z,Bt),m=C*vr,C&&(O=Math.cos(-C),v=Math.sin(-C),X=E*O-P*v,V=L*O-at*v,st=z*O-Bt*v,q=W*v+q*O,E=X,L=V,z=st),C=Wr(L,E),g=C*vr,C&&(O=Math.cos(C),v=Math.sin(C),X=E*O+L*v,V=K*O+H*v,L=L*O-E*v,H=H*O-K*v,E=X,K=V),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Ue(Math.sqrt(E*E+L*L+z*z)),_=Ue(Math.sqrt(H*H+Q*Q)),C=Wr(K,H),y=Math.abs(C)>2e-4?C*vr:0,x=q?1/(q<0?-q:q):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Cd(Bn(t,Ce)),X&&t.setAttribute("transform",X))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Ue(d),n.scaleY=Ue(_),n.rotation=Ue(g)+a,n.rotationX=Ue(p)+a,n.rotationY=Ue(m)+a,n.skewX=y+a,n.skewY=S+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[yn]=za(c)),n.xOffset=n.yOffset=0,n.force3D=zn.force3D,n.renderTransform=n.svg?n_:bd?Pd:e_,n.uncache=0,n},za=function(t){return(t=t.split(" "))[0]+" "+t[1]},pl=function(t,e,n){var i=sn(e);return Ue(parseFloat(e)+parseFloat(sr(t,"x",n+"px",i)))+i},e_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Pd(t,e)},ur="0deg",Bs="0px",hr=") ",Pd=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,S=n.zOrigin,x="",R=m==="auto"&&t&&t!==1||m===!0;if(S&&(f!==ur||u!==ur)){var A=parseFloat(u)*_s,T=Math.sin(A),C=Math.cos(A),O;A=parseFloat(f)*_s,O=Math.cos(A),o=pl(y,o,T*O*-S),a=pl(y,a,-Math.sin(A)*-S),l=pl(y,l,C*O*-S+S)}p!==Bs&&(x+="perspective("+p+hr),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(R||o!==Bs||a!==Bs||l!==Bs)&&(x+=l!==Bs||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+hr),c!==ur&&(x+="rotate("+c+hr),u!==ur&&(x+="rotateY("+u+hr),f!==ur&&(x+="rotateX("+f+hr),(h!==ur||d!==ur)&&(x+="skew("+h+", "+d+hr),(_!==1||g!==1)&&(x+="scale("+_+", "+g+hr),y.style[Ce]=x||"translate(0, 0)"},n_=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,S=parseFloat(o),x=parseFloat(a),R,A,T,C,O;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=_s,c*=_s,R=Math.cos(l)*f,A=Math.sin(l)*f,T=Math.sin(l-c)*-h,C=Math.cos(l-c)*h,c&&(u*=_s,O=Math.tan(c-u),O=Math.sqrt(1+O*O),T*=O,C*=O,u&&(O=Math.tan(u),O=Math.sqrt(1+O*O),R*=O,A*=O)),R=Ue(R),A=Ue(A),T=Ue(T),C=Ue(C)):(R=f,C=h,A=T=0),(S&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=sr(d,"x",o,"px"),x=sr(d,"y",a,"px")),(_||g||p||m)&&(S=Ue(S+_-(_*R+g*T)+p),x=Ue(x+g-(_*A+g*C)+m)),(i||s)&&(O=d.getBBox(),S=Ue(S+i/100*O.width),x=Ue(x+s/100*O.height)),O="matrix("+R+","+A+","+T+","+C+","+S+","+x+")",d.setAttribute("transform",O),y&&(d.style[Ce]=O)},i_=function(t,e,n,i,s){var o=360,a=Ze(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?vr:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*oh)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*oh)%o-~~(c/o)*o)),t._pt=h=new Mn(t._pt,e,n,i,c,zm),h.e=u,h.u="deg",t._props.push(n),h},dh=function(t,e){for(var n in e)t[n]=e[n];return t},r_=function(t,e,n){var i=dh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ce]=e,a=Mo(n,1),rr(n,Ce),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ce],o[Ce]=e,a=Mo(n,1),o[Ce]=c);for(l in Li)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=sn(c),_=sn(u),f=d!==_?sr(n,l,c,_):parseFloat(c),h=parseFloat(u),t._pt=new Mn(t._pt,a,l,f,h-f,hc),t._pt.u=_||0,t._props.push(l));dh(a,i)};Sn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Ba[t>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(_){return Ei(a,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,d,f)}});var Dd={name:"css",register:dc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,f,h,d,_,g,p,m,y,S,x,R,A,T,C,O;Ru||dc(),this.styles=this.styles||Td(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(In[g]&&dd(g,e,n,i,t,s)))){if(d=typeof u,_=Ba[g],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=go(u)),_)_(this,t,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",Qi.lastIndex=0,Qi.test(c)||(p=sn(c),m=sn(u),m?p!==m&&(c=sr(t,g,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),C.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Ze(c)&&~c.indexOf("random(")&&(c=go(c)),sn(c+"")||c==="auto"||(c+=zn.units[g]||sn(Ei(t,g))||""),(c+"").charAt(1)==="="&&(c=Ei(t,g))):c=Ei(t,g),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),g in fi&&(g==="autoAlpha"&&(h===1&&Ei(t,"visibility")==="hidden"&&f&&(h=0),C.push("visibility",0,a.visibility),Ki(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=fi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in Li,S){if(this.styles.save(g),O=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Bn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=t.style.perspective;t.style.perspective=u,u=Bn(t,"perspective"),v?t.style.perspective=v:rr(t,"perspective")}f=parseFloat(u)}if(x||(R=t._gsap,R.renderTransform&&!e.parseTransform||Mo(t,e.parseTransform),A=e.smoothOrigin!==!1&&R.smooth,x=this._pt=new Mn(this._pt,a,Ce,0,1,R.renderTransform,R,0,-1),x.dep=1),g==="scale")this._pt=new Mn(this._pt,R,"scaleY",R.scaleY,(y?ps(R.scaleY,y+f):f)-R.scaleY||0,hc),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(yn,0,a[yn]),u=Qm(u),R.svg?pc(t,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&Ki(this,R,"zOrigin",R.zOrigin,m),Ki(this,a,g,za(c),za(u)));continue}else if(g==="svgOrigin"){pc(t,u,1,A,0,this);continue}else if(g in Rd){i_(this,R,g,h,y?ps(h,y+u):u);continue}else if(g==="smoothOrigin"){Ki(this,R,"smooth",R.smooth,u);continue}else if(g==="force3D"){R[g]=u;continue}else if(g==="transform"){r_(this,u,t);continue}}else g in a||(g=Rs(g)||g);if(S||(f||f===0)&&(h||h===0)&&!Bm.test(u)&&g in a)p=(c+"").substr((h+"").length),f||(f=0),m=sn(u)||(g in zn.units?zn.units[g]:p),p!==m&&(h=sr(t,g,c,m)),this._pt=new Mn(this._pt,S?R:a,g,h,(y?ps(h,y+f):f)-h,!S&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?Gm:hc),this._pt.u=m||0,S&&O!==u?(this._pt.b=c,this._pt.e=O,this._pt.r=Hm):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=km);else if(g in a)Jm.call(this,t,g,c,y?y+u:u);else if(g in t)this.add(t,g,c||t[g],y?y+u:u,i,s);else if(g!=="parseTransform"){vu(g,u);continue}S||(g in a?C.push(g,0,a[g]):typeof t[g]=="function"?C.push(g,2,t[g]()):C.push(g,1,c||t[g])),o.push(g)}}T&&xd(this)},render:function(t,e){if(e.tween._time||!Cu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ei,aliases:fi,getSetter:function(t,e,n){var i=fi[e];return i&&i.indexOf(",")<0&&(e=i),e in Li&&e!==yn&&(t._gsap.x||Ei(t,"x"))?n&&sh===n?e==="scale"?Ym:Xm:(sh=n||{})&&(e==="scale"?qm:$m):t.style&&!mu(t.style[e])?Vm:~e.indexOf("-")?Wm:Au(t,e)},core:{_removeProperty:rr,_getMatrix:Du}};An.utils.checkPrefix=Rs;An.core.getStyleSaver=Td;(function(r,t,e,n){var i=Sn(r+","+t+","+e,function(s){Li[s]=1});Sn(t,function(s){zn.units[s]="deg",Rd[s]=1}),fi[i[13]]=r+","+t,Sn(n,function(s){var o=s.split(":");fi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){zn.units[r]="px"});An.registerPlugin(Dd);var Ke=An.registerPlugin(Dd)||An;Ke.core.Tween;function s_(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function o_(r,t,e){return t&&s_(r.prototype,t),r}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Je,xa,On,Zi,ji,gs,Ld,xr,ro,Id,Ai,ii,Ud,Nd=function(){return Je||typeof window<"u"&&(Je=window.gsap)&&Je.registerPlugin&&Je},Od=1,fs=[],ee=[],pi=[],so=Date.now,mc=function(t,e){return e},a_=function(){var t=ro.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ee),i.push.apply(i,pi),ee=n,pi=i,mc=function(o,a){return e[o](a)}},tr=function(t,e){return~pi.indexOf(t)&&pi[pi.indexOf(t)+1][e]},oo=function(t){return!!~Id.indexOf(t)},cn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},ln=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Io="scrollLeft",Uo="scrollTop",_c=function(){return Ai&&Ai.isPressed||ee.cache++},ka=function(t,e){var n=function i(s){if(s||s===0){Od&&(On.history.scrollRestoration="manual");var o=Ai&&Ai.isPressed;s=i.v=Math.round(s)||(Ai&&Ai.iOS?1:0),t(s),i.cacheID=ee.cache,o&&mc("ss",s)}else(e||ee.cache!==i.cacheID||mc("ref"))&&(i.cacheID=ee.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},mn={s:Io,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ka(function(r){return arguments.length?On.scrollTo(r,Ge.sc()):On.pageXOffset||Zi[Io]||ji[Io]||gs[Io]||0})},Ge={s:Uo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:mn,sc:ka(function(r){return arguments.length?On.scrollTo(mn.sc(),r):On.pageYOffset||Zi[Uo]||ji[Uo]||gs[Uo]||0})},gn=function(t,e){return(e&&e._ctx&&e._ctx.selector||Je.utils.toArray)(t)[0]||(typeof t=="string"&&Je.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},l_=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},or=function(t,e){var n=e.s,i=e.sc;oo(t)&&(t=Zi.scrollingElement||ji);var s=ee.indexOf(t),o=i===Ge.sc?1:2;!~s&&(s=ee.push(t)-1),ee[s+o]||cn(t,"scroll",_c);var a=ee[s+o],l=a||(ee[s+o]=ka(tr(t,n),!0)||(oo(t)?i:ka(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=Je.getProperty(t,"scrollBehavior")==="smooth"),l},gc=function(t,e,n){var i=t,s=t,o=so(),a=o,l=e||50,c=Math.max(500,l*3),u=function(_,g){var p=so();g||p-o>l?(s=i,i=_,a=o,o=p):n?i+=_:i=s+(_-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(_){var g=a,p=s,m=so();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:f,getVelocity:h}},zs=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},ph=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Fd=function(){ro=Je.core.globals().ScrollTrigger,ro&&ro.core&&a_()},Bd=function(t){return Je=t||Nd(),!xa&&Je&&typeof document<"u"&&document.body&&(On=window,Zi=document,ji=Zi.documentElement,gs=Zi.body,Id=[On,Zi,ji,gs],Je.utils.clamp,Ud=Je.core.context||function(){},xr="onpointerenter"in gs?"pointer":"mouse",Ld=Oe.isTouch=On.matchMedia&&On.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in On||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ii=Oe.eventTypes=("ontouchstart"in ji?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ji?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Od=0},500),Fd(),xa=1),xa};mn.op=Ge;ee.cache=0;var Oe=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){xa||Bd(Je)||console.warn("Please gsap.registerPlugin(Observer)"),ro||Fd();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,S=n.onPress,x=n.onRelease,R=n.onRight,A=n.onLeft,T=n.onUp,C=n.onDown,O=n.onChangeX,v=n.onChangeY,E=n.onChange,L=n.onToggleX,z=n.onToggleY,W=n.onHover,K=n.onHoverEnd,H=n.onMove,X=n.ignoreCheck,V=n.isNormalizer,st=n.onGestureStart,P=n.onGestureEnd,at=n.onWheel,Bt=n.onEnable,Xt=n.onDisable,q=n.onClick,Q=n.scrollSpeed,ft=n.capture,ot=n.allowClicks,bt=n.lockAxis,yt=n.onLockAxis;this.target=a=gn(a)||ji,this.vars=n,d&&(d=Je.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,Q=Q||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(On.getComputedStyle(gs).lineHeight)||22);var Wt,Gt,Nt,D,re,Ot,zt,F=this,jt=0,Dt=0,w=n.passive||!u&&n.passive!==!1,M=or(a,mn),G=or(a,Ge),j=M(),et=G(),Z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ii[0]==="pointerdown",St=oo(a),it=a.ownerDocument||Zi,dt=[0,0,0],Ht=[0,0,0],nt=0,vt=function(){return nt=so()},xt=function(Et,le){return(F.event=Et)&&d&&l_(Et.target,d)||le&&Z&&Et.pointerType!=="touch"||X&&X(Et,le)},It=function(){F._vx.reset(),F._vy.reset(),Gt.pause(),f&&f(F)},gt=function(){var Et=F.deltaX=ph(dt),le=F.deltaY=ph(Ht),pt=Math.abs(Et)>=i,Lt=Math.abs(le)>=i;E&&(pt||Lt)&&E(F,Et,le,dt,Ht),pt&&(R&&F.deltaX>0&&R(F),A&&F.deltaX<0&&A(F),O&&O(F),L&&F.deltaX<0!=jt<0&&L(F),jt=F.deltaX,dt[0]=dt[1]=dt[2]=0),Lt&&(C&&F.deltaY>0&&C(F),T&&F.deltaY<0&&T(F),v&&v(F),z&&F.deltaY<0!=Dt<0&&z(F),Dt=F.deltaY,Ht[0]=Ht[1]=Ht[2]=0),(D||Nt)&&(H&&H(F),Nt&&(p&&Nt===1&&p(F),y&&y(F),Nt=0),D=!1),Ot&&!(Ot=!1)&&yt&&yt(F),re&&(at(F),re=!1),Wt=0},Yt=function(Et,le,pt){dt[pt]+=Et,Ht[pt]+=le,F._vx.update(Et),F._vy.update(le),c?Wt||(Wt=requestAnimationFrame(gt)):gt()},Ft=function(Et,le){bt&&!zt&&(F.axis=zt=Math.abs(Et)>Math.abs(le)?"x":"y",Ot=!0),zt!=="y"&&(dt[2]+=Et,F._vx.update(Et,!0)),zt!=="x"&&(Ht[2]+=le,F._vy.update(le,!0)),c?Wt||(Wt=requestAnimationFrame(gt)):gt()},se=function(Et){if(!xt(Et,1)){Et=zs(Et,u);var le=Et.clientX,pt=Et.clientY,Lt=le-F.x,Ct=pt-F.y,kt=F.isDragging;F.x=le,F.y=pt,(kt||(Lt||Ct)&&(Math.abs(F.startX-le)>=s||Math.abs(F.startY-pt)>=s))&&(Nt||(Nt=kt?2:1),kt||(F.isDragging=!0),Ft(Lt,Ct))}},I=F.onPress=function(wt){xt(wt,1)||wt&&wt.button||(F.axis=zt=null,Gt.pause(),F.isPressed=!0,wt=zs(wt),jt=Dt=0,F.startX=F.x=wt.clientX,F.startY=F.y=wt.clientY,F._vx.reset(),F._vy.reset(),cn(V?a:it,ii[1],se,w,!0),F.deltaX=F.deltaY=0,S&&S(F))},tt=F.onRelease=function(wt){if(!xt(wt,1)){ln(V?a:it,ii[1],se,!0);var Et=!isNaN(F.y-F.startY),le=F.isDragging,pt=le&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Lt=zs(wt);!pt&&Et&&(F._vx.reset(),F._vy.reset(),u&&ot&&Je.delayedCall(.08,function(){if(so()-nt>300&&!wt.defaultPrevented){if(wt.target.click)wt.target.click();else if(it.createEvent){var Ct=it.createEvent("MouseEvents");Ct.initMouseEvent("click",!0,!0,On,1,Lt.screenX,Lt.screenY,Lt.clientX,Lt.clientY,!1,!1,!1,!1,0,null),wt.target.dispatchEvent(Ct)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,f&&le&&!V&&Gt.restart(!0),Nt&&gt(),m&&le&&m(F),x&&x(F,pt)}},$=function(Et){return Et.touches&&Et.touches.length>1&&(F.isGesturing=!0)&&st(Et,F.isDragging)},J=function(){return(F.isGesturing=!1)||P(F)},lt=function(Et){if(!xt(Et)){var le=M(),pt=G();Yt((le-j)*Q,(pt-et)*Q,1),j=le,et=pt,f&&Gt.restart(!0)}},ct=function(Et){if(!xt(Et)){Et=zs(Et,u),at&&(re=!0);var le=(Et.deltaMode===1?l:Et.deltaMode===2?On.innerHeight:1)*_;Yt(Et.deltaX*le,Et.deltaY*le,0),f&&!V&&Gt.restart(!0)}},qt=function(Et){if(!xt(Et)){var le=Et.clientX,pt=Et.clientY,Lt=le-F.x,Ct=pt-F.y;F.x=le,F.y=pt,D=!0,f&&Gt.restart(!0),(Lt||Ct)&&Ft(Lt,Ct)}},me=function(Et){F.event=Et,W(F)},Te=function(Et){F.event=Et,K(F)},ne=function(Et){return xt(Et)||zs(Et,u)&&q(F)};Gt=F._dc=Je.delayedCall(h||.25,It).pause(),F.deltaX=F.deltaY=0,F._vx=gc(0,50,!0),F._vy=gc(0,50,!0),F.scrollX=M,F.scrollY=G,F.isDragging=F.isGesturing=F.isPressed=!1,Ud(this),F.enable=function(wt){return F.isEnabled||(cn(St?it:a,"scroll",_c),o.indexOf("scroll")>=0&&cn(St?it:a,"scroll",lt,w,ft),o.indexOf("wheel")>=0&&cn(a,"wheel",ct,w,ft),(o.indexOf("touch")>=0&&Ld||o.indexOf("pointer")>=0)&&(cn(a,ii[0],I,w,ft),cn(it,ii[2],tt),cn(it,ii[3],tt),ot&&cn(a,"click",vt,!0,!0),q&&cn(a,"click",ne),st&&cn(it,"gesturestart",$),P&&cn(it,"gestureend",J),W&&cn(a,xr+"enter",me),K&&cn(a,xr+"leave",Te),H&&cn(a,xr+"move",qt)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=D=Nt=!1,F._vx.reset(),F._vy.reset(),j=M(),et=G(),wt&&wt.type&&I(wt),Bt&&Bt(F)),F},F.disable=function(){F.isEnabled&&(fs.filter(function(wt){return wt!==F&&oo(wt.target)}).length||ln(St?it:a,"scroll",_c),F.isPressed&&(F._vx.reset(),F._vy.reset(),ln(V?a:it,ii[1],se,!0)),ln(St?it:a,"scroll",lt,ft),ln(a,"wheel",ct,ft),ln(a,ii[0],I,ft),ln(it,ii[2],tt),ln(it,ii[3],tt),ln(a,"click",vt,!0),ln(a,"click",ne),ln(it,"gesturestart",$),ln(it,"gestureend",J),ln(a,xr+"enter",me),ln(a,xr+"leave",Te),ln(a,xr+"move",qt),F.isEnabled=F.isPressed=F.isDragging=!1,Xt&&Xt(F))},F.kill=F.revert=function(){F.disable();var wt=fs.indexOf(F);wt>=0&&fs.splice(wt,1),Ai===F&&(Ai=0)},fs.push(F),V&&oo(a)&&(Ai=F),F.enable(g)},o_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Oe.version="3.14.2";Oe.create=function(r){return new Oe(r)};Oe.register=Bd;Oe.getAll=function(){return fs.slice()};Oe.getById=function(r){return fs.filter(function(t){return t.vars.id===r})[0]};Nd()&&Je.registerPlugin(Oe);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mt,ls,te,Se,Un,ue,Lu,Ha,yo,ao,Ks,No,nn,Ja,vc,fn,mh,_h,cs,zd,ml,kd,hn,xc,Hd,Gd,Xi,Sc,Iu,vs,Uu,lo,Mc,_l,Oo=1,rn=Date.now,gl=rn(),Jn=0,Zs=0,gh=function(t,e,n){var i=Ln(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},vh=function(t,e){return e&&(!Ln(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},c_=function r(){return Zs&&requestAnimationFrame(r)},xh=function(){return Ja=1},Sh=function(){return Ja=0},li=function(t){return t},js=function(t){return Math.round(t*1e5)/1e5||0},Vd=function(){return typeof window<"u"},Wd=function(){return Mt||Vd()&&(Mt=window.gsap)&&Mt.registerPlugin&&Mt},Fr=function(t){return!!~Lu.indexOf(t)},Xd=function(t){return(t==="Height"?Uu:te["inner"+t])||Un["client"+t]||ue["client"+t]},Yd=function(t){return tr(t,"getBoundingClientRect")||(Fr(t)?function(){return Ta.width=te.innerWidth,Ta.height=Uu,Ta}:function(){return Ti(t)})},u_=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=tr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Xd(s):t["client"+s])||0}},h_=function(t,e){return!e||~pi.indexOf(t)?Yd(t):function(){return Ta}},di=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=tr(t,n))?o()-Yd(t)()[s]:Fr(t)?(Un[n]||ue[n])-Xd(i):t[n]-t["offset"+i])},Fo=function(t,e){for(var n=0;n<cs.length;n+=3)(!e||~e.indexOf(cs[n+1]))&&t(cs[n],cs[n+1],cs[n+2])},Ln=function(t){return typeof t=="string"},on=function(t){return typeof t=="function"},Js=function(t){return typeof t=="number"},Sr=function(t){return typeof t=="object"},ks=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},vl=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Xr=Math.abs,qd="left",$d="top",Nu="right",Ou="bottom",Ir="width",Ur="height",co="Right",uo="Left",ho="Top",fo="Bottom",ze="padding",Yn="margin",Cs="Width",Fu="Height",He="px",qn=function(t){return te.getComputedStyle(t)},f_=function(t){var e=qn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Mh=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ti=function(t,e){var n=e&&qn(t)[vc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Mt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ga=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Kd=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},d_=function(t){return function(e){return Mt.utils.snap(Kd(t),e)}},Bu=function(t){var e=Mt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},p_=function(t){return function(e,n){return Bu(Kd(t))(e,n.direction)}},Bo=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},$e=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},qe=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},zo=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},yh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ko={toggleActions:"play",anticipatePin:0},Va={top:0,left:0,center:.5,bottom:1,right:1},Sa=function(t,e){if(Ln(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Va?Va[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Ho=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,_=Se.createElement("div"),g=Fr(n)||tr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=g?ue:n,y=t.indexOf("start")!==-1,S=y?c:u,x="border-color:"+S+";font-size:"+f+";color:"+S+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(x+=(i===Ge?Nu:Ou)+":"+(o+parseFloat(h))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=x,_.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],Ma(_,0,i,y),_},Ma=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Cs]=1,s["border"+a+Cs]=0,s[n.p]=e+"px",Mt.set(t,s)},Qt=[],yc={},Eo,Eh=function(){return rn()-Jn>34&&(Eo||(Eo=requestAnimationFrame(Pi)))},Yr=function(){(!hn||!hn.isPressed||hn.startX>ue.clientWidth)&&(ee.cache++,hn?Eo||(Eo=requestAnimationFrame(Pi)):Pi(),Jn||zr("scrollStart"),Jn=rn())},xl=function(){Gd=te.innerWidth,Hd=te.innerHeight},Qs=function(t){ee.cache++,(t===!0||!nn&&!kd&&!Se.fullscreenElement&&!Se.webkitFullscreenElement&&(!xc||Gd!==te.innerWidth||Math.abs(te.innerHeight-Hd)>te.innerHeight*.25))&&Ha.restart(!0)},Br={},m_=[],Zd=function r(){return qe(Vt,"scrollEnd",r)||Ar(!0)},zr=function(t){return Br[t]&&Br[t].map(function(e){return e()})||m_},Dn=[],jd=function(t){for(var e=0;e<Dn.length;e+=5)(!t||Dn[e+4]&&Dn[e+4].query===t)&&(Dn[e].style.cssText=Dn[e+1],Dn[e].getBBox&&Dn[e].setAttribute("transform",Dn[e+2]||""),Dn[e+3].uncache=1)},Jd=function(){return ee.forEach(function(t){return on(t)&&++t.cacheID&&(t.rec=t())})},zu=function(t,e){var n;for(fn=0;fn<Qt.length;fn++)n=Qt[fn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));lo=!0,e&&jd(e),e||zr("revert")},Qd=function(t,e){ee.cache++,(e||!dn)&&ee.forEach(function(n){return on(n)&&n.cacheID++&&(n.rec=0)}),Ln(t)&&(te.history.scrollRestoration=Iu=t)},dn,Nr=0,Th,__=function(){if(Th!==Nr){var t=Th=Nr;requestAnimationFrame(function(){return t===Nr&&Ar(!0)})}},tp=function(){ue.appendChild(vs),Uu=!hn&&vs.offsetHeight||te.innerHeight,ue.removeChild(vs)},bh=function(t){return yo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Ar=function(t,e){if(Un=Se.documentElement,ue=Se.body,Lu=[te,Se,Un,ue],Jn&&!t&&!lo){$e(Vt,"scrollEnd",Zd);return}tp(),dn=Vt.isRefreshing=!0,lo||Jd();var n=zr("refreshInit");zd&&Vt.sort(),e||zu(),ee.forEach(function(i){on(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Qt.slice(0).forEach(function(i){return i.refresh()}),lo=!1,Qt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Mc=1,bh(!0),Qt.forEach(function(i){var s=di(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),bh(!1),Mc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ee.forEach(function(i){on(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Qd(Iu,1),Ha.pause(),Nr++,dn=2,Pi(2),Qt.forEach(function(i){return on(i.vars.onRefresh)&&i.vars.onRefresh(i)}),dn=Vt.isRefreshing=!1,zr("refresh")},Ec=0,ya=1,po,Pi=function(t){if(t===2||!dn&&!lo){Vt.isUpdating=!0,po&&po.update(0);var e=Qt.length,n=rn(),i=n-gl>=50,s=e&&Qt[0].scroll();if(ya=Ec>s?-1:1,dn||(Ec=s),i&&(Jn&&!Ja&&n-Jn>200&&(Jn=0,zr("scrollEnd")),Ks=gl,gl=n),ya<0){for(fn=e;fn-- >0;)Qt[fn]&&Qt[fn].update(0,i);ya=1}else for(fn=0;fn<e;fn++)Qt[fn]&&Qt[fn].update(0,i);Vt.isUpdating=!1}Eo=0},Tc=[qd,$d,Ou,Nu,Yn+fo,Yn+co,Yn+ho,Yn+uo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ea=Tc.concat([Ir,Ur,"boxSizing","max"+Cs,"max"+Fu,"position",Yn,ze,ze+ho,ze+co,ze+fo,ze+uo]),g_=function(t,e,n){xs(n);var i=t._gsap;if(i.spacerIsNative)xs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Sl=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Tc.length,o=e.style,a=t.style,l;s--;)l=Tc[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Ou]=a[Nu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ir]=Ga(t,mn)+He,o[Ur]=Ga(t,Ge)+He,o[ze]=a[Yn]=a[$d]=a[qd]="0",xs(i),a[Ir]=a["max"+Cs]=n[Ir],a[Ur]=a["max"+Fu]=n[Ur],a[ze]=n[ze],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},v_=/([A-Z])/g,xs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Mt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(v_,"-$1").toLowerCase())}},Go=function(t){for(var e=Ea.length,n=t.style,i=[],s=0;s<e;s++)i.push(Ea[s],n[Ea[s]]);return i.t=t,i},x_=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Ta={left:0,top:0},Ah=function(t,e,n,i,s,o,a,l,c,u,f,h,d,_){on(t)&&(t=t(l)),Ln(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?Sa("0"+t.substr(3),n):0));var g=d?d.time():0,p,m,y;if(d&&d.seek(0),isNaN(t)||(t=+t),Js(t))d&&(t=Mt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,t)),a&&Ma(a,n,i,!0);else{on(e)&&(e=e(l));var S=(t||"0").split(" "),x,R,A,T;y=gn(e,l)||ue,x=Ti(y)||{},(!x||!x.left&&!x.top)&&qn(y).display==="none"&&(T=y.style.display,y.style.display="block",x=Ti(y),T?y.style.display=T:y.style.removeProperty("display")),R=Sa(S[0],x[i.d]),A=Sa(S[1]||"0",n),t=x[i.p]-c[i.p]-u+R+s-A,a&&Ma(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var C=t+n,O=o._isStart;p="scroll"+i.d2,Ma(o,C,i,O&&C>20||!O&&(f?Math.max(ue[p],Un[p]):o.parentNode[p])<=C+1),f&&(c=Ti(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+He))}return d&&y&&(p=Ti(y),d.seek(h),m=Ti(y),d._caScrollDist=p[i.p]-m[i.p],t=t/d._caScrollDist*h),d&&d.seek(g),d?t:Math.round(t)},S_=/(webkit|moz|length|cssText|inset)/i,wh=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===ue){t._stOrig=s.cssText,a=qn(t);for(o in a)!+o&&!S_.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Mt.core.getCache(t).uncache=1,e.appendChild(t)}},ep=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Vo=function(t,e,n){var i={};i[e.p]="+="+n,Mt.set(t,i)},Rh=function(t,e){var n=or(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,_={};c=c||n();var g=ep(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){ee.cache++,o.tween&&Pi()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Mt.to(t,l),h};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},$e(t,"wheel",n.wheelHandler),Vt.isTouch&&$e(t,"touchmove",n.wheelHandler),s},Vt=function(){function r(e,n){ls||r.register(Mt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Sc(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Zs){this.update=this.refresh=this.kill=li;return}n=Mh(Ln(n)||Js(n)||n.nodeType?{trigger:n}:n,ko);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,S=s.once,x=s.snap,R=s.pinReparent,A=s.pinSpacer,T=s.containerAnimation,C=s.fastScrollEnd,O=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?mn:Ge,E=!f&&f!==0,L=gn(n.scroller||te),z=Mt.core.getCache(L),W=Fr(L),K=("pinType"in n?n.pinType:tr(L,"pinType")||W&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=E&&n.toggleActions.split(" "),V="markers"in n?n.markers:ko.markers,st=W?0:parseFloat(qn(L)["border"+v.p2+Cs])||0,P=this,at=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Bt=u_(L,W,v),Xt=h_(L,W),q=0,Q=0,ft=0,ot=or(L,v),bt,yt,Wt,Gt,Nt,D,re,Ot,zt,F,jt,Dt,w,M,G,j,et,Z,St,it,dt,Ht,nt,vt,xt,It,gt,Yt,Ft,se,I,tt,$,J,lt,ct,qt,me,Te;if(P._startClamp=P._endClamp=!1,P._dir=v,p*=45,P.scroller=L,P.scroll=T?T.time.bind(T):ot,Gt=ot(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(zd=1,n.refreshPriority===-9999&&(po=P)),z.tweenScroll=z.tweenScroll||{top:Rh(L,Ge),left:Rh(L,mn)},P.tweenTo=bt=z.tweenScroll[v.p],P.scrubDuration=function(pt){$=Js(pt)&&pt,$?tt?tt.duration(pt):tt=Mt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:$,paused:!0,onComplete:function(){return m&&m(P)}}):(tt&&tt.progress(1).kill(),tt=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),se=0,l||(l=i.vars.id)),x&&((!Sr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in ue.style&&Mt.set(W?[ue,Un]:L,{scrollBehavior:"auto"}),ee.forEach(function(pt){return on(pt)&&pt.target===(W?Se.scrollingElement||Un:L)&&(pt.smooth=!1)}),Wt=on(x.snapTo)?x.snapTo:x.snapTo==="labels"?d_(i):x.snapTo==="labelsDirectional"?p_(i):x.directional!==!1?function(pt,Lt){return Bu(x.snapTo)(pt,rn()-Q<500?0:Lt.direction)}:Mt.utils.snap(x.snapTo),J=x.duration||{min:.1,max:2},J=Sr(J)?ao(J.min,J.max):ao(J,J),lt=Mt.delayedCall(x.delay||$/2||.1,function(){var pt=ot(),Lt=rn()-Q<500,Ct=bt.tween;if((Lt||Math.abs(P.getVelocity())<10)&&!Ct&&!Ja&&q!==pt){var kt=(pt-D)/M,De=i&&!E?i.totalProgress():kt,$t=Lt?0:(De-I)/(rn()-Ks)*1e3||0,be=Mt.utils.clamp(-kt,1-kt,Xr($t/2)*$t/.185),Le=kt+(x.inertia===!1?0:be),Me,_e,de=x,wn=de.onStart,ye=de.onInterrupt,b=de.onComplete;if(Me=Wt(Le,P),Js(Me)||(Me=Le),_e=Math.max(0,Math.round(D+Me*M)),pt<=re&&pt>=D&&_e!==pt){if(Ct&&!Ct._initted&&Ct.data<=Xr(_e-pt))return;x.inertia===!1&&(be=Me-kt),bt(_e,{duration:J(Xr(Math.max(Xr(Le-De),Xr(Me-De))*.185/$t/.05||0)),ease:x.ease||"power3",data:Xr(_e-pt),onInterrupt:function(){return lt.restart(!0)&&ye&&ye(P)},onComplete:function(){P.update(),q=ot(),i&&!E&&(tt?tt.resetTo("totalProgress",Me,i._tTime/i._tDur):i.progress(Me)),se=I=i&&!E?i.totalProgress():P.progress,y&&y(P),b&&b(P)}},pt,be*M,_e-pt-be*M),wn&&wn(P,bt.tween)}}else P.isActive&&q!==pt&&lt.restart(!0)}).pause()),l&&(yc[l]=P),h=P.trigger=gn(h||d!==!0&&d),Te=h&&h._gsap&&h._gsap.stRevert,Te&&(Te=Te(P)),d=d===!0?h:gn(d),Ln(a)&&(a={targets:h,className:a}),d&&(_===!1||_===Yn||(_=!_&&d.parentNode&&d.parentNode.style&&qn(d.parentNode).display==="flex"?!1:ze),P.pin=d,yt=Mt.core.getCache(d),yt.spacer?G=yt.pinState:(A&&(A=gn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),yt.spacerIsNative=!!A,A&&(yt.spacerState=Go(A))),yt.spacer=Z=A||Se.createElement("div"),Z.classList.add("pin-spacer"),l&&Z.classList.add("pin-spacer-"+l),yt.pinState=G=Go(d)),n.force3D!==!1&&Mt.set(d,{force3D:!0}),P.spacer=Z=yt.spacer,Ft=qn(d),vt=Ft[_+v.os2],it=Mt.getProperty(d),dt=Mt.quickSetter(d,v.a,He),Sl(d,Z,Ft),et=Go(d)),V){Dt=Sr(V)?Mh(V,yh):yh,F=Ho("scroller-start",l,L,v,Dt,0),jt=Ho("scroller-end",l,L,v,Dt,0,F),St=F["offset"+v.op.d2];var ne=gn(tr(L,"content")||L);Ot=this.markerStart=Ho("start",l,ne,v,Dt,St,0,T),zt=this.markerEnd=Ho("end",l,ne,v,Dt,St,0,T),T&&(me=Mt.quickSetter([Ot,zt],v.a,He)),!K&&!(pi.length&&tr(L,"fixedMarkers")===!0)&&(f_(W?ue:L),Mt.set([F,jt],{force3D:!0}),It=Mt.quickSetter(F,v.a,He),Yt=Mt.quickSetter(jt,v.a,He))}if(T){var wt=T.vars.onUpdate,Et=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){P.update(0,0,1),wt&&wt.apply(T,Et||[])})}if(P.previous=function(){return Qt[Qt.indexOf(P)-1]},P.next=function(){return Qt[Qt.indexOf(P)+1]},P.revert=function(pt,Lt){if(!Lt)return P.kill(!0);var Ct=pt!==!1||!P.enabled,kt=nn;Ct!==P.isReverted&&(Ct&&(ct=Math.max(ot(),P.scroll.rec||0),ft=P.progress,qt=i&&i.progress()),Ot&&[Ot,zt,F,jt].forEach(function(De){return De.style.display=Ct?"none":"block"}),Ct&&(nn=P,P.update(Ct)),d&&(!R||!P.isActive)&&(Ct?g_(d,Z,G):Sl(d,Z,qn(d),xt)),Ct||P.update(Ct),nn=kt,P.isReverted=Ct)},P.refresh=function(pt,Lt,Ct,kt){if(!((nn||!P.enabled)&&!Lt)){if(d&&pt&&Jn){$e(r,"scrollEnd",Zd);return}!dn&&at&&at(P),nn=P,bt.tween&&!Ct&&(bt.tween.kill(),bt.tween=0),tt&&tt.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Jt){return Jt.vars.immediateRender&&Jt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var De=Bt(),$t=Xt(),be=T?T.duration():di(L,v),Le=M<=.01||!M,Me=0,_e=kt||0,de=Sr(Ct)?Ct.end:n.end,wn=n.endTrigger||h,ye=Sr(Ct)?Ct.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),b=P.pinnedContainer=n.pinnedContainer&&gn(n.pinnedContainer,P),N=h&&Math.max(0,Qt.indexOf(P))||0,B=N,k,U,rt,_t,ht,ut,At,Ut,Tt,oe,ie,pe,Xe;for(V&&Sr(Ct)&&(pe=Mt.getProperty(F,v.p),Xe=Mt.getProperty(jt,v.p));B-- >0;)ut=Qt[B],ut.end||ut.refresh(0,1)||(nn=P),At=ut.pin,At&&(At===h||At===d||At===b)&&!ut.isReverted&&(oe||(oe=[]),oe.unshift(ut),ut.revert(!0,!0)),ut!==Qt[B]&&(N--,B--);for(on(ye)&&(ye=ye(P)),ye=gh(ye,"start",P),D=Ah(ye,h,De,v,ot(),Ot,F,P,$t,st,K,be,T,P._startClamp&&"_startClamp")||(d?-.001:0),on(de)&&(de=de(P)),Ln(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=(Ln(ye)?ye.split(" ")[0]:"")+de:(Me=Sa(de.substr(2),De),de=Ln(ye)?ye:(T?Mt.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,D):D)+Me,wn=h)),de=gh(de,"end",P),re=Math.max(D,Ah(de||(wn?"100% 0":be),wn,De,v,ot()+Me,zt,jt,P,$t,st,K,be,T,P._endClamp&&"_endClamp"))||-.001,Me=0,B=N;B--;)ut=Qt[B]||{},At=ut.pin,At&&ut.start-ut._pinPush<=D&&!T&&ut.end>0&&(k=ut.end-(P._startClamp?Math.max(0,ut.start):ut.start),(At===h&&ut.start-ut._pinPush<D||At===b)&&isNaN(ye)&&(Me+=k*(1-ut.progress)),At===d&&(_e+=k));if(D+=Me,re+=Me,P._startClamp&&(P._startClamp+=Me),P._endClamp&&!dn&&(P._endClamp=re||-.001,re=Math.min(re,di(L,v))),M=re-D||(D-=.01)&&.001,Le&&(ft=Mt.utils.clamp(0,1,Mt.utils.normalize(D,re,ct))),P._pinPush=_e,Ot&&Me&&(k={},k[v.a]="+="+Me,b&&(k[v.p]="-="+ot()),Mt.set([Ot,zt],k)),d&&!(Mc&&P.end>=di(L,v)))k=qn(d),_t=v===Ge,rt=ot(),Ht=parseFloat(it(v.a))+_e,!be&&re>1&&(ie=(W?Se.scrollingElement||Un:L).style,ie={style:ie,value:ie["overflow"+v.a.toUpperCase()]},W&&qn(ue)["overflow"+v.a.toUpperCase()]!=="scroll"&&(ie.style["overflow"+v.a.toUpperCase()]="scroll")),Sl(d,Z,k),et=Go(d),U=Ti(d,!0),Ut=K&&or(L,_t?mn:Ge)(),_?(xt=[_+v.os2,M+_e+He],xt.t=Z,B=_===ze?Ga(d,v)+M+_e:0,B&&(xt.push(v.d,B+He),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=B+He)),xs(xt),b&&Qt.forEach(function(Jt){Jt.pin===b&&Jt.vars.pinSpacing!==!1&&(Jt._subPinOffset=!0)}),K&&ot(ct)):(B=Ga(d,v),B&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=B+He)),K&&(ht={top:U.top+(_t?rt-D:Ut)+He,left:U.left+(_t?Ut:rt-D)+He,boxSizing:"border-box",position:"fixed"},ht[Ir]=ht["max"+Cs]=Math.ceil(U.width)+He,ht[Ur]=ht["max"+Fu]=Math.ceil(U.height)+He,ht[Yn]=ht[Yn+ho]=ht[Yn+co]=ht[Yn+fo]=ht[Yn+uo]="0",ht[ze]=k[ze],ht[ze+ho]=k[ze+ho],ht[ze+co]=k[ze+co],ht[ze+fo]=k[ze+fo],ht[ze+uo]=k[ze+uo],j=x_(G,ht,R),dn&&ot(0)),i?(Tt=i._initted,ml(1),i.render(i.duration(),!0,!0),nt=it(v.a)-Ht+M+_e,gt=Math.abs(M-nt)>1,K&&gt&&j.splice(j.length-2,2),i.render(0,!0,!0),Tt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ml(0)):nt=M,ie&&(ie.value?ie.style["overflow"+v.a.toUpperCase()]=ie.value:ie.style.removeProperty("overflow-"+v.a));else if(h&&ot()&&!T)for(U=h.parentNode;U&&U!==ue;)U._pinOffset&&(D-=U._pinOffset,re-=U._pinOffset),U=U.parentNode;oe&&oe.forEach(function(Jt){return Jt.revert(!1,!0)}),P.start=D,P.end=re,Gt=Nt=dn?ct:ot(),!T&&!dn&&(Gt<ct&&ot(ct),P.scroll.rec=0),P.revert(!1,!0),Q=rn(),lt&&(q=-1,lt.restart(!0)),nn=0,i&&E&&(i._initted||qt)&&i.progress()!==qt&&i.progress(qt||0,!0).render(i.time(),!0,!0),(Le||ft!==P.progress||T||g||i&&!i._initted)&&(i&&!E&&(i._initted||ft||i.vars.immediateRender!==!1)&&i.totalProgress(T&&D<-.001&&!ft?Mt.utils.normalize(D,re,0):ft,!0),P.progress=Le||(Gt-D)/M===ft?0:ft),d&&_&&(Z._pinOffset=Math.round(P.progress*nt)),tt&&tt.invalidate(),isNaN(pe)||(pe-=Mt.getProperty(F,v.p),Xe-=Mt.getProperty(jt,v.p),Vo(F,v,pe),Vo(Ot,v,pe-(kt||0)),Vo(jt,v,Xe),Vo(zt,v,Xe-(kt||0))),Le&&!dn&&P.update(),u&&!dn&&!w&&(w=!0,u(P),w=!1)}},P.getVelocity=function(){return(ot()-Nt)/(rn()-Ks)*1e3||0},P.endAnimation=function(){ks(P.callbackAnimation),i&&(tt?tt.progress(1):i.paused()?E||ks(i,P.direction<0,1):ks(i,i.reversed()))},P.labelToScroll=function(pt){return i&&i.labels&&(D||P.refresh()||D)+i.labels[pt]/i.duration()*M||0},P.getTrailing=function(pt){var Lt=Qt.indexOf(P),Ct=P.direction>0?Qt.slice(0,Lt).reverse():Qt.slice(Lt+1);return(Ln(pt)?Ct.filter(function(kt){return kt.vars.preventOverlaps===pt}):Ct).filter(function(kt){return P.direction>0?kt.end<=D:kt.start>=re})},P.update=function(pt,Lt,Ct){if(!(T&&!Ct&&!pt)){var kt=dn===!0?ct:P.scroll(),De=pt?0:(kt-D)/M,$t=De<0?0:De>1?1:De||0,be=P.progress,Le,Me,_e,de,wn,ye,b,N;if(Lt&&(Nt=Gt,Gt=T?ot():kt,x&&(I=se,se=i&&!E?i.totalProgress():$t)),p&&d&&!nn&&!Oo&&Jn&&(!$t&&D<kt+(kt-Nt)/(rn()-Ks)*p?$t=1e-4:$t===1&&re>kt+(kt-Nt)/(rn()-Ks)*p&&($t=.9999)),$t!==be&&P.enabled){if(Le=P.isActive=!!$t&&$t<1,Me=!!be&&be<1,ye=Le!==Me,wn=ye||!!$t!=!!be,P.direction=$t>be?1:-1,P.progress=$t,wn&&!nn&&(_e=$t&&!be?0:$t===1?1:be===1?2:3,E&&(de=!ye&&X[_e+1]!=="none"&&X[_e+1]||X[_e],N=i&&(de==="complete"||de==="reset"||de in i))),O&&(ye||N)&&(N||f||!i)&&(on(O)?O(P):P.getTrailing(O).forEach(function(rt){return rt.endAnimation()})),E||(tt&&!nn&&!Oo?(tt._dp._time-tt._start!==tt._time&&tt.render(tt._dp._time-tt._start),tt.resetTo?tt.resetTo("totalProgress",$t,i._tTime/i._tDur):(tt.vars.totalProgress=$t,tt.invalidate().restart())):i&&i.totalProgress($t,!!(nn&&(Q||pt)))),d){if(pt&&_&&(Z.style[_+v.os2]=vt),!K)dt(js(Ht+nt*$t));else if(wn){if(b=!pt&&$t>be&&re+1>kt&&kt+1>=di(L,v),R)if(!pt&&(Le||b)){var B=Ti(d,!0),k=kt-D;wh(d,ue,B.top+(v===Ge?k:0)+He,B.left+(v===Ge?0:k)+He)}else wh(d,Z);xs(Le||b?j:et),gt&&$t<1&&Le||dt(Ht+($t===1&&!b?nt:0))}}x&&!bt.tween&&!nn&&!Oo&&lt.restart(!0),a&&(ye||S&&$t&&($t<1||!_l))&&yo(a.targets).forEach(function(rt){return rt.classList[Le||S?"add":"remove"](a.className)}),o&&!E&&!pt&&o(P),wn&&!nn?(E&&(N&&(de==="complete"?i.pause().totalProgress(1):de==="reset"?i.restart(!0).pause():de==="restart"?i.restart(!0):i[de]()),o&&o(P)),(ye||!_l)&&(c&&ye&&vl(P,c),H[_e]&&vl(P,H[_e]),S&&($t===1?P.kill(!1,1):H[_e]=0),ye||(_e=$t===1?1:3,H[_e]&&vl(P,H[_e]))),C&&!Le&&Math.abs(P.getVelocity())>(Js(C)?C:2500)&&(ks(P.callbackAnimation),tt?tt.progress(1):ks(i,de==="reverse"?1:!$t,1))):E&&o&&!nn&&o(P)}if(Yt){var U=T?kt/T.duration()*(T._caScrollDist||0):kt;It(U+(F._isFlipped?1:0)),Yt(U)}me&&me(-kt/T.duration()*(T._caScrollDist||0))}},P.enable=function(pt,Lt){P.enabled||(P.enabled=!0,$e(L,"resize",Qs),W||$e(L,"scroll",Yr),at&&$e(r,"refreshInit",at),pt!==!1&&(P.progress=ft=0,Gt=Nt=q=ot()),Lt!==!1&&P.refresh())},P.getTween=function(pt){return pt&&bt?bt.tween:tt},P.setPositions=function(pt,Lt,Ct,kt){if(T){var De=T.scrollTrigger,$t=T.duration(),be=De.end-De.start;pt=De.start+be*pt/$t,Lt=De.start+be*Lt/$t}P.refresh(!1,!1,{start:vh(pt,Ct&&!!P._startClamp),end:vh(Lt,Ct&&!!P._endClamp)},kt),P.update()},P.adjustPinSpacing=function(pt){if(xt&&pt){var Lt=xt.indexOf(v.d)+1;xt[Lt]=parseFloat(xt[Lt])+pt+He,xt[1]=parseFloat(xt[1])+pt+He,xs(xt)}},P.disable=function(pt,Lt){if(pt!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Lt||tt&&tt.pause(),ct=0,yt&&(yt.uncache=1),at&&qe(r,"refreshInit",at),lt&&(lt.pause(),bt.tween&&bt.tween.kill()&&(bt.tween=0)),!W)){for(var Ct=Qt.length;Ct--;)if(Qt[Ct].scroller===L&&Qt[Ct]!==P)return;qe(L,"resize",Qs),W||qe(L,"scroll",Yr)}},P.kill=function(pt,Lt){P.disable(pt,Lt),tt&&!Lt&&tt.kill(),l&&delete yc[l];var Ct=Qt.indexOf(P);Ct>=0&&Qt.splice(Ct,1),Ct===fn&&ya>0&&fn--,Ct=0,Qt.forEach(function(kt){return kt.scroller===P.scroller&&(Ct=1)}),Ct||dn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,pt&&i.revert({kill:!1}),Lt||i.kill()),Ot&&[Ot,zt,F,jt].forEach(function(kt){return kt.parentNode&&kt.parentNode.removeChild(kt)}),po===P&&(po=0),d&&(yt&&(yt.uncache=1),Ct=0,Qt.forEach(function(kt){return kt.pin===d&&Ct++}),Ct||(yt.spacer=0)),n.onKill&&n.onKill(P)},Qt.push(P),P.enable(!1,!1),Te&&Te(P),i&&i.add&&!M){var le=P.update;P.update=function(){P.update=le,ee.cache++,D||re||P.refresh()},Mt.delayedCall(.01,P.update),M=.01,D=re=0}else P.refresh();d&&__()},r.register=function(n){return ls||(Mt=n||Wd(),Vd()&&window.document&&r.enable(),ls=Zs),ls},r.defaults=function(n){if(n)for(var i in n)ko[i]=n[i];return ko},r.disable=function(n,i){Zs=0,Qt.forEach(function(o){return o[i?"kill":"disable"](n)}),qe(te,"wheel",Yr),qe(Se,"scroll",Yr),clearInterval(No),qe(Se,"touchcancel",li),qe(ue,"touchstart",li),Bo(qe,Se,"pointerdown,touchstart,mousedown",xh),Bo(qe,Se,"pointerup,touchend,mouseup",Sh),Ha.kill(),Fo(qe);for(var s=0;s<ee.length;s+=3)zo(qe,ee[s],ee[s+1]),zo(qe,ee[s],ee[s+2])},r.enable=function(){if(te=window,Se=document,Un=Se.documentElement,ue=Se.body,Mt&&(yo=Mt.utils.toArray,ao=Mt.utils.clamp,Sc=Mt.core.context||li,ml=Mt.core.suppressOverwrites||li,Iu=te.history.scrollRestoration||"auto",Ec=te.pageYOffset||0,Mt.core.globals("ScrollTrigger",r),ue)){Zs=1,vs=document.createElement("div"),vs.style.height="100vh",vs.style.position="absolute",tp(),c_(),Oe.register(Mt),r.isTouch=Oe.isTouch,Xi=Oe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),xc=Oe.isTouch===1,$e(te,"wheel",Yr),Lu=[te,Se,Un,ue],Mt.matchMedia?(r.matchMedia=function(c){var u=Mt.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Mt.addEventListener("matchMediaInit",function(){Jd(),zu()}),Mt.addEventListener("matchMediaRevert",function(){return jd()}),Mt.addEventListener("matchMedia",function(){Ar(0,1),zr("matchMedia")}),Mt.matchMedia().add("(orientation: portrait)",function(){return xl(),xl})):console.warn("Requires GSAP 3.11.0 or later"),xl(),$e(Se,"scroll",Yr);var n=ue.hasAttribute("style"),i=ue.style,s=i.borderTopStyle,o=Mt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ti(ue),Ge.m=Math.round(a.top+Ge.sc())||0,mn.m=Math.round(a.left+mn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ue.setAttribute("style",""),ue.removeAttribute("style")),No=setInterval(Eh,250),Mt.delayedCall(.5,function(){return Oo=0}),$e(Se,"touchcancel",li),$e(ue,"touchstart",li),Bo($e,Se,"pointerdown,touchstart,mousedown",xh),Bo($e,Se,"pointerup,touchend,mouseup",Sh),vc=Mt.utils.checkPrefix("transform"),Ea.push(vc),ls=rn(),Ha=Mt.delayedCall(.2,Ar).pause(),cs=[Se,"visibilitychange",function(){var c=te.innerWidth,u=te.innerHeight;Se.hidden?(mh=c,_h=u):(mh!==c||_h!==u)&&Qs()},Se,"DOMContentLoaded",Ar,te,"load",Ar,te,"resize",Qs],Fo($e),Qt.forEach(function(c){return c.enable(0,1)}),l=0;l<ee.length;l+=3)zo(qe,ee[l],ee[l+1]),zo(qe,ee[l],ee[l+2])}},r.config=function(n){"limitCallbacks"in n&&(_l=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(No)||(No=i)&&setInterval(Eh,i),"ignoreMobileResize"in n&&(xc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Fo(qe)||Fo($e,n.autoRefreshEvents||"none"),kd=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=gn(n),o=ee.indexOf(s),a=Fr(s);~o&&ee.splice(o,a?6:2),i&&(a?pi.unshift(te,i,ue,i,Un,i):pi.unshift(s,i))},r.clearMatchMedia=function(n){Qt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Ln(n)?gn(n):n).getBoundingClientRect(),a=o[s?Ir:Ur]*i||0;return s?o.right-a>0&&o.left+a<te.innerWidth:o.bottom-a>0&&o.top+a<te.innerHeight},r.positionInViewport=function(n,i,s){Ln(n)&&(n=gn(n));var o=n.getBoundingClientRect(),a=o[s?Ir:Ur],l=i==null?a/2:i in Va?Va[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/te.innerWidth:(o.top+l)/te.innerHeight},r.killAll=function(n){if(Qt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Br.killAll||[];Br={},i.forEach(function(s){return s()})}},r}();Vt.version="3.14.2";Vt.saveStyles=function(r){return r?yo(r).forEach(function(t){if(t&&t.style){var e=Dn.indexOf(t);e>=0&&Dn.splice(e,5),Dn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Mt.core.getCache(t),Sc())}}):Dn};Vt.revert=function(r,t){return zu(!r,t)};Vt.create=function(r,t){return new Vt(r,t)};Vt.refresh=function(r){return r?Qs(!0):(ls||Vt.register())&&Ar(!0)};Vt.update=function(r){return++ee.cache&&Pi(r===!0?2:0)};Vt.clearScrollMemory=Qd;Vt.maxScroll=function(r,t){return di(r,t?mn:Ge)};Vt.getScrollFunc=function(r,t){return or(gn(r),t?mn:Ge)};Vt.getById=function(r){return yc[r]};Vt.getAll=function(){return Qt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Vt.isScrolling=function(){return!!Jn};Vt.snapDirectional=Bu;Vt.addEventListener=function(r,t){var e=Br[r]||(Br[r]=[]);~e.indexOf(t)||e.push(t)};Vt.removeEventListener=function(r,t){var e=Br[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Vt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Mt.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),h.push(_),s<=f.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&on(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return on(s)&&(s=s(),$e(Vt,"refresh",function(){return s=t.batchMax()})),yo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Vt.create(c))}),e};var Ch=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Ml=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Oe.isTouch?" pinch-zoom":""):"none",t===Un&&r(ue,e)},Wo={auto:1,scroll:1},M_=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Mt.core.getCache(s),a=rn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ue&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Wo[(l=qn(s)).overflowY]||Wo[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Fr(s)&&(Wo[(l=qn(s)).overflowY]||Wo[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},np=function(t,e,n,i){return Oe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&M_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&$e(Se,Oe.eventTypes[0],Dh,!1,!0)},onDisable:function(){return qe(Se,Oe.eventTypes[0],Dh,!0)}})},y_=/(input|label|select|textarea)/i,Ph,Dh=function(t){var e=y_.test(t.target.tagName);(e||Ph)&&(t._gsapAllow=!0,Ph=e)},E_=function(t){Sr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=gn(t.target)||Un,u=Mt.core.globals().ScrollSmoother,f=u&&u.get(),h=Xi&&(t.content&&gn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=or(c,Ge),_=or(c,mn),g=1,p=(Oe.isTouch&&te.visualViewport?te.visualViewport.scale*te.visualViewport.width:te.outerWidth)/te.innerWidth,m=0,y=on(i)?function(){return i(a)}:function(){return i||2.8},S,x,R=np(c,t.type,!0,s),A=function(){return x=!1},T=li,C=li,O=function(){l=di(c,Ge),C=ao(Xi?1:0,l),n&&(T=ao(0,di(c,mn))),S=Nr},v=function(){h._gsap.y=js(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},E=function(){if(x){requestAnimationFrame(A);var V=js(a.deltaY/2),st=C(d.v-V);if(h&&st!==d.v+d.offset){d.offset=st-d.v;var P=js((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",d.cacheID=ee.cache,Pi()}return!0}d.offset&&v(),x=!0},L,z,W,K,H=function(){O(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return h&&Mt.set(h,{y:"+=0"}),t.ignoreCheck=function(X){return Xi&&X.type==="touchmove"&&E()||g>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){x=!1;var X=g;g=js((te.visualViewport&&te.visualViewport.scale||1)/p),L.pause(),X!==g&&Ml(c,g>1.01?!0:n?!1:"x"),z=_(),W=d(),O(),S=Nr},t.onRelease=t.onGestureStart=function(X,V){if(d.offset&&v(),!V)K.restart(!0);else{ee.cache++;var st=y(),P,at;n&&(P=_(),at=P+st*.05*-X.velocityX/.227,st*=Ch(_,P,at,di(c,mn)),L.vars.scrollX=T(at)),P=d(),at=P+st*.05*-X.velocityY/.227,st*=Ch(d,P,at,di(c,Ge)),L.vars.scrollY=C(at),L.invalidate().duration(st).play(.01),(Xi&&L.vars.scrollY>=l||P>=l-1)&&Mt.to({},{onUpdate:H,duration:st})}o&&o(X)},t.onWheel=function(){L._ts&&L.pause(),rn()-m>1e3&&(S=0,m=rn())},t.onChange=function(X,V,st,P,at){if(Nr!==S&&O(),V&&n&&_(T(P[2]===V?z+(X.startX-X.x):_()+V-P[1])),st){d.offset&&v();var Bt=at[2]===st,Xt=Bt?W+X.startY-X.y:d()+st-at[1],q=C(Xt);Bt&&Xt!==q&&(W+=q-Xt),d(q)}(st||V)&&Pi()},t.onEnable=function(){Ml(c,n?!1:"x"),Vt.addEventListener("refresh",H),$e(te,"resize",H),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),R.enable()},t.onDisable=function(){Ml(c,!0),qe(te,"resize",H),Vt.removeEventListener("refresh",H),R.kill()},t.lockAxis=t.lockAxis!==!1,a=new Oe(t),a.iOS=Xi,Xi&&!d()&&d(1),Xi&&Mt.ticker.add(li),K=a._dc,L=Mt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ep(d,d(),function(){return L.pause()})},onUpdate:Pi,onComplete:K.vars.onComplete}),a};Vt.sort=function(r){if(on(r))return Qt.sort(r);var t=te.pageYOffset||0;return Vt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+te.innerHeight}),Qt.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Vt.observe=function(r){return new Oe(r)};Vt.normalizeScroll=function(r){if(typeof r>"u")return hn;if(r===!0&&hn)return hn.enable();if(r===!1){hn&&hn.kill(),hn=r;return}var t=r instanceof Oe?r:E_(r);return hn&&hn.target===t.target&&hn.kill(),Fr(t.target)&&(hn=t),t};Vt.core={_getVelocityProp:gc,_inputObserver:np,_scrollers:ee,_proxies:pi,bridge:{ss:function(){Jn||zr("scrollStart"),Jn=rn()},ref:function(){return nn}}};Wd()&&Mt.registerPlugin(Vt);var Lh="1.3.21";function ip(r,t,e){return Math.max(r,Math.min(t,e))}function T_(r,t,e){return(1-e)*r+e*t}function b_(r,t,e,n){return T_(r,t,1-Math.exp(-e*n))}function A_(r,t){return(r%t+t)%t}var w_=class{constructor(){Rt(this,"isRunning",!1);Rt(this,"value",0);Rt(this,"from",0);Rt(this,"to",0);Rt(this,"currentTime",0);Rt(this,"lerp");Rt(this,"duration");Rt(this,"easing");Rt(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=ip(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=b_(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function R_(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var C_=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Rt(this,"width",0);Rt(this,"height",0);Rt(this,"scrollHeight",0);Rt(this,"scrollWidth",0);Rt(this,"debouncedResize");Rt(this,"wrapperResizeObserver");Rt(this,"contentResizeObserver");Rt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Rt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Rt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=R_(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},rp=class{constructor(){Rt(this,"events",{})}emit(r,...t){var n;const e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}};const P_=100/6,Bi={passive:!1};function Ih(r,t){return r===1?P_:r===2?t:1}var D_=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Rt(this,"touchStart",{x:0,y:0});Rt(this,"lastDelta",{x:0,y:0});Rt(this,"window",{width:0,height:0});Rt(this,"emitter",new rp);Rt(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Rt(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Rt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Rt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=Ih(n,this.window.width),s=Ih(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Rt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Bi),this.element.addEventListener("touchstart",this.onTouchStart,Bi),this.element.addEventListener("touchmove",this.onTouchMove,Bi),this.element.addEventListener("touchend",this.onTouchEnd,Bi)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Bi),this.element.removeEventListener("touchstart",this.onTouchStart,Bi),this.element.removeEventListener("touchmove",this.onTouchMove,Bi),this.element.removeEventListener("touchend",this.onTouchEnd,Bi)}};const Uh=r=>Math.min(1,1.001-2**(-10*r));var L_=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:p,virtualScroll:m,overscroll:y=!0,autoRaf:S=!1,anchors:x=!1,autoToggle:R=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:C=T,stopInertiaOnNavigate:O=!1}={}){Rt(this,"_isScrolling",!1);Rt(this,"_isStopped",!1);Rt(this,"_isLocked",!1);Rt(this,"_preventNextNativeScrollEvent",!1);Rt(this,"_resetVelocityTimeout",null);Rt(this,"_rafId",null);Rt(this,"isTouching");Rt(this,"time",0);Rt(this,"userData",{});Rt(this,"lastVelocity",0);Rt(this,"velocity",0);Rt(this,"direction",0);Rt(this,"options");Rt(this,"targetScroll");Rt(this,"animatedScroll");Rt(this,"animate",new w_);Rt(this,"emitter",new rp);Rt(this,"dimensions");Rt(this,"virtualScroll");Rt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Rt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Rt(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Rt(this,"onClick",r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.hash.split("#")[1]}`;this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Rt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Rt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(_=>{var g,p,m,y,S;return _ instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(_))||((g=_.hasAttribute)==null?void 0:g.call(_,"data-lenis-prevent"))||u==="vertical"&&((p=_.hasAttribute)==null?void 0:p.call(_,"data-lenis-prevent-vertical"))||u==="horizontal"&&((m=_.hasAttribute)==null?void 0:m.call(_,"data-lenis-prevent-horizontal"))||i&&((y=_.hasAttribute)==null?void 0:y.call(_,"data-lenis-prevent-touch"))||s&&((S=_.hasAttribute)==null?void 0:S.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(this.velocity)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...h?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Rt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Rt(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Lh,window.lenis||(window.lenis={}),window.lenis.version=Lh,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Uh:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:p,virtualScroll:m,overscroll:y,autoRaf:S,anchors:x,autoToggle:R,allowNestedScroll:A,naiveDimensions:C,stopInertiaOnNavigate:O},this.dimensions=new C_(r,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new D_(e,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if((this.isStopped||this.isLocked)&&!u)return;let h=r,d=t;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let _=null;if(typeof h=="string"?(_=document.querySelector(h),_||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(_=h),_){if(this.options.wrapper!==window){const x=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?x.left:x.top}const g=_.getBoundingClientRect(),p=getComputedStyle(_),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),y=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);h=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(S)?0:S)}}if(typeof h=="number"){if(h+=d,h=Math.round(h),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const _=h-this.animatedScroll;_>this.limit/2?h-=this.limit:_<-this.limit/2&&(h+=this.limit)}}else h=ip(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=Uh:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(_,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),i&&(this.targetScroll=_),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,f,h,d,_;if(n-(i.time??0)>2e3){i.time=Date.now();const A=window.getComputedStyle(r);if(i.computedStyle=A,s=["auto","overlay","scroll"].includes(A.overflowX),o=["auto","overlay","scroll"].includes(A.overflowY),c=["auto"].includes(A.overscrollBehaviorX),u=["auto"].includes(A.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;f=r.scrollWidth,h=r.scrollHeight,d=r.clientWidth,_=r.clientHeight,a=f>d,l=h>_,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=h,i.clientWidth=d,i.clientHeight=_,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,h=i.scrollHeight,d=i.clientWidth,_=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const g=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let p,m,y,S,x,R;if(g==="horizontal")p=Math.round(r.scrollLeft),m=f-d,y=t,S=s,x=a,R=c;else if(g==="vertical")p=Math.round(r.scrollTop),m=h-_,y=e,S=o,x=l,R=u;else return!1;return!R&&(p>=m||p<=0)?!0:(y>0?p<m:p>0)&&S&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?A_(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function I_(){const r=new L_;return r.on("scroll",Vt.update),Ke.ticker.add(t=>{r.raf(t*1e3)}),Ke.ticker.lagSmoothing(0),r}Ke.registerPlugin(Vt);function U_(){const r=document.querySelector(".hero-title");if(r){const o=r.textContent;r.innerHTML=o.split("").map(l=>l===" "?" ":`<span class="char">${l}</span>`).join(""),Ke.timeline({delay:.3}).to(".hero-title .char",{opacity:1,y:0,duration:.05,stagger:.03,ease:"power2.out"}).to(".hero-subtitle",{opacity:1,y:0,duration:.6,ease:"power2.out"},"-=0.2").to(".hero-tagline",{opacity:1,y:0,duration:.6,ease:"power2.out"},"-=0.4").to(".btn-primary",{opacity:1,y:0,duration:.6,ease:"power2.out"},"-=0.4")}Ke.utils.toArray(".reveal").forEach(o=>{Ke.to(o,{opacity:1,y:0,duration:.8,ease:"power2.out",scrollTrigger:{trigger:o,start:"top 85%",toggleActions:"play none none none"}})}),document.querySelector(".skills-grid")&&Ke.to(".skill-card",{opacity:1,y:0,duration:.6,ease:"power2.out",stagger:.15,scrollTrigger:{trigger:".skills-grid",start:"top 80%",toggleActions:"play none none none"}}),document.querySelectorAll("[data-count]").forEach(o=>{const a=parseInt(o.dataset.count);Vt.create({trigger:o,start:"top 85%",onEnter:()=>{Ke.to({val:0},{val:a,duration:1.5,ease:"power2.out",onUpdate:function(){o.textContent=Math.round(this.targets()[0].val)}})},once:!0})}),document.querySelector(".gallery-grid")&&Ke.to(".gallery-item",{opacity:1,duration:.6,ease:"power2.out",stagger:{each:.07,from:"start"},scrollTrigger:{trigger:".gallery-grid",start:"top 80%",toggleActions:"play none none none"}});const n=document.querySelector(".vision-underline");n&&Ke.to(n,{scaleX:1,duration:1,ease:"power3.out",scrollTrigger:{trigger:".vision",start:"top 70%",toggleActions:"play none none none"}});const i=document.querySelectorAll("section[id]"),s=document.querySelectorAll(".nav-links a");i.length&&s.length&&Vt.create({trigger:document.body,start:"top top",end:"bottom bottom",onUpdate:()=>{let o="";i.forEach(a=>{window.scrollY>=a.offsetTop-200&&(o=a.getAttribute("id"))}),s.forEach(a=>{a.classList.toggle("active",a.getAttribute("href")===`#${o}`)})}})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ku="169",N_=0,Nh=1,O_=2,sp=1,F_=2,Mi=3,ar=0,En=1,bi=2,er=0,Ss=1,bc=2,Oh=3,Fh=4,B_=5,Er=100,z_=101,k_=102,H_=103,G_=104,V_=200,W_=201,X_=202,Y_=203,Ac=204,wc=205,q_=206,$_=207,K_=208,Z_=209,j_=210,J_=211,Q_=212,tg=213,eg=214,Rc=0,Cc=1,Pc=2,Ps=3,Dc=4,Lc=5,Ic=6,Uc=7,op=0,ng=1,ig=2,nr=0,rg=1,sg=2,og=3,ag=4,lg=5,cg=6,ug=7,ap=300,Ds=301,Ls=302,Nc=303,Oc=304,Qa=306,Fc=1e3,wr=1001,Bc=1002,jn=1003,hg=1004,Xo=1005,ri=1006,yl=1007,Rr=1008,Ii=1009,lp=1010,cp=1011,To=1012,Hu=1013,kr=1014,wi=1015,Ao=1016,Gu=1017,Vu=1018,Is=1020,up=35902,hp=1021,fp=1022,oi=1023,dp=1024,pp=1025,Ms=1026,Us=1027,mp=1028,Wu=1029,_p=1030,Xu=1031,Yu=1033,ba=33776,Aa=33777,wa=33778,Ra=33779,zc=35840,kc=35841,Hc=35842,Gc=35843,Vc=36196,Wc=37492,Xc=37496,Yc=37808,qc=37809,$c=37810,Kc=37811,Zc=37812,jc=37813,Jc=37814,Qc=37815,tu=37816,eu=37817,nu=37818,iu=37819,ru=37820,su=37821,Ca=36492,ou=36494,au=36495,gp=36283,lu=36284,cu=36285,uu=36286,fg=3200,dg=3201,pg=0,mg=1,Yi="",ci="srgb",cr="srgb-linear",qu="display-p3",tl="display-p3-linear",Wa="linear",Ee="srgb",Xa="rec709",Ya="p3",qr=7680,Bh=519,_g=512,gg=513,vg=514,vp=515,xg=516,Sg=517,Mg=518,yg=519,zh=35044,kh="300 es",Ri=2e3,qa=2001;class Os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],El=Math.PI/180,hu=180/Math.PI;function wo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function vn(r,t,e){return Math.max(t,Math.min(e,r))}function Eg(r,t){return(r%t+t)%t}function Tl(r,t,e){return(1-e)*r+e*t}function Hs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function _n(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class xe{constructor(t=0,e=0){xe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(vn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,i,s,o,a,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],y=i[1],S=i[4],x=i[7],R=i[2],A=i[5],T=i[8];return s[0]=o*g+a*y+l*R,s[3]=o*p+a*S+l*A,s[6]=o*m+a*x+l*T,s[1]=c*g+u*y+f*R,s[4]=c*p+u*S+f*A,s[7]=c*m+u*x+f*T,s[2]=h*g+d*y+_*R,s[5]=h*p+d*S+_*A,s[8]=h*m+d*x+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,_=e*f+n*h+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(i*c-u*n)*g,t[2]=(a*n-i*o)*g,t[3]=h*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(bl.makeScale(t,e)),this}rotate(t){return this.premultiply(bl.makeRotation(-t)),this}translate(t,e){return this.premultiply(bl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const bl=new Zt;function xp(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function $a(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Tg(){const r=$a("canvas");return r.style.display="block",r}const Hh={};function Pa(r){r in Hh||(Hh[r]=!0,console.warn(r))}function bg(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Ag(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wg(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Gh=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vh=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gs={[cr]:{transfer:Wa,primaries:Xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[ci]:{transfer:Ee,primaries:Xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[tl]:{transfer:Wa,primaries:Ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Vh),fromReference:r=>r.applyMatrix3(Gh)},[qu]:{transfer:Ee,primaries:Ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Vh),fromReference:r=>r.applyMatrix3(Gh).convertLinearToSRGB()}},Rg=new Set([cr,tl]),he={enabled:!0,_workingColorSpace:cr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Rg.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Gs[t].toReference,i=Gs[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Gs[r].primaries},getTransfer:function(r){return r===Yi?Wa:Gs[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(Gs[t].luminanceCoefficients)}};function ys(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Al(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let $r;class Cg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$r===void 0&&($r=$a("canvas")),$r.width=t.width,$r.height=t.height;const n=$r.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$r}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$a("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ys(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ys(e[n]/255)*255):e[n]=ys(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pg=0;class Sp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=wo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(wl(i[o].image)):s.push(wl(i[o]))}else s=wl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function wl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Cg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dg=0;class Tn extends Os{constructor(t=Tn.DEFAULT_IMAGE,e=Tn.DEFAULT_MAPPING,n=wr,i=wr,s=ri,o=Rr,a=oi,l=Ii,c=Tn.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=wo(),this.name="",this.source=new Sp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ap)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fc:t.x=t.x-Math.floor(t.x);break;case wr:t.x=t.x<0?0:1;break;case Bc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fc:t.y=t.y-Math.floor(t.y);break;case wr:t.y=t.y<0?0:1;break;case Bc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=ap;Tn.DEFAULT_ANISOTROPY=1;class Ne{constructor(t=0,e=0,n=0,i=1){Ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,x=(d+1)/2,R=(m+1)/2,A=(u+h)/4,T=(f+g)/4,C=(_+p)/4;return S>x&&S>R?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=A/n,s=T/n):x>R?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=C/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=T/s,i=C/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(f-g)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lg extends Os{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Sp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hr extends Lg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mp extends Tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=jn,this.minFilter=jn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ig extends Tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=jn,this.minFilter=jn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ro{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==h||c!==d||u!==_){let p=1-a;const m=l*h+c*d+u*_+f*g,y=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const R=Math.sqrt(S),A=Math.atan2(R,m*y);p=Math.sin(p*A)/R,a=Math.sin(a*A)/R}const x=a*y;if(l=l*p+h*x,c=c*p+d*x,u=u*p+_*x,f=f*p+g*x,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+u*f+l*d-c*h,t[e+1]=l*_+u*h+c*f-a*d,t[e+2]=c*_+u*d+a*h-l*f,t[e+3]=u*_-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(vn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,e=0,n=0){Y.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rl.copy(this).projectOnVector(t),this.sub(Rl)}reflect(t){return this.sub(Rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(vn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rl=new Y,Wh=new Ro;class Co{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ti):ti.fromBufferAttribute(s,o),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yo.copy(n.boundingBox)),Yo.applyMatrix4(t.matrixWorld),this.union(Yo)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),qo.subVectors(this.max,Vs),Kr.subVectors(t.a,Vs),Zr.subVectors(t.b,Vs),jr.subVectors(t.c,Vs),zi.subVectors(Zr,Kr),ki.subVectors(jr,Zr),fr.subVectors(Kr,jr);let e=[0,-zi.z,zi.y,0,-ki.z,ki.y,0,-fr.z,fr.y,zi.z,0,-zi.x,ki.z,0,-ki.x,fr.z,0,-fr.x,-zi.y,zi.x,0,-ki.y,ki.x,0,-fr.y,fr.x,0];return!Cl(e,Kr,Zr,jr,qo)||(e=[1,0,0,0,1,0,0,0,1],!Cl(e,Kr,Zr,jr,qo))?!1:($o.crossVectors(zi,ki),e=[$o.x,$o.y,$o.z],Cl(e,Kr,Zr,jr,qo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _i=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ti=new Y,Yo=new Co,Kr=new Y,Zr=new Y,jr=new Y,zi=new Y,ki=new Y,fr=new Y,Vs=new Y,qo=new Y,$o=new Y,dr=new Y;function Cl(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){dr.fromArray(r,s);const a=i.x*Math.abs(dr.x)+i.y*Math.abs(dr.y)+i.z*Math.abs(dr.z),l=t.dot(dr),c=e.dot(dr),u=n.dot(dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ug=new Co,Ws=new Y,Pl=new Y;class el{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ug.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);const e=Ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ws,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(Pl)),this.expandByPoint(Ws.copy(t.center).sub(Pl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new Y,Dl=new Y,Ko=new Y,Hi=new Y,Ll=new Y,Zo=new Y,Il=new Y;class yp{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Dl.copy(t).add(e).multiplyScalar(.5),Ko.copy(e).sub(t).normalize(),Hi.copy(this.origin).sub(Dl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ko),a=Hi.dot(this.direction),l=-Hi.dot(Ko),c=Hi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Dl).addScaledVector(Ko,h),d}intersectSphere(t,e){gi.subVectors(t.center,this.origin);const n=gi.dot(this.direction),i=gi.dot(gi)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,n,i,s){Ll.subVectors(e,t),Zo.subVectors(n,t),Il.crossVectors(Ll,Zo);let o=this.direction.dot(Il),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,t);const l=a*this.direction.dot(Zo.crossVectors(Hi,Zo));if(l<0)return null;const c=a*this.direction.dot(Ll.cross(Hi));if(c<0||l+c>o)return null;const u=-a*Hi.dot(Il);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(t,e,n,i,s,o,a,l,c,u,f,h,d,_,g,p){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,f,h,d,_,g,p)}set(t,e,n,i,s,o,a,l,c,u,f,h,d,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Jr.setFromMatrixColumn(t,0).length(),s=1/Jr.setFromMatrixColumn(t,1).length(),o=1/Jr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,d=o*f,_=a*u,g=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+_*c,e[5]=h-g*c,e[9]=-a*l,e[2]=g-h*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,_=c*u,g=c*f;e[0]=h+g*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-_,e[6]=g+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,_=c*u,g=c*f;e[0]=h-g*a,e[4]=-o*f,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*u,e[9]=g-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,_=a*u,g=a*f;e[0]=l*u,e[4]=_*c-d,e[8]=h*c+g,e[1]=l*f,e[5]=g*c+h,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=g-h*f,e[8]=_*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+_,e[10]=h-g*f}else if(t.order==="XZY"){const h=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+g,e[5]=o*u,e[9]=d*f-_,e[2]=_*f-d,e[6]=a*u,e[10]=g*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ng,t,Og)}lookAt(t,e,n){const i=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Gi.crossVectors(n,Cn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Gi.crossVectors(n,Cn)),Gi.normalize(),jo.crossVectors(Cn,Gi),i[0]=Gi.x,i[4]=jo.x,i[8]=Cn.x,i[1]=Gi.y,i[5]=jo.y,i[9]=Cn.y,i[2]=Gi.z,i[6]=jo.z,i[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],y=n[3],S=n[7],x=n[11],R=n[15],A=i[0],T=i[4],C=i[8],O=i[12],v=i[1],E=i[5],L=i[9],z=i[13],W=i[2],K=i[6],H=i[10],X=i[14],V=i[3],st=i[7],P=i[11],at=i[15];return s[0]=o*A+a*v+l*W+c*V,s[4]=o*T+a*E+l*K+c*st,s[8]=o*C+a*L+l*H+c*P,s[12]=o*O+a*z+l*X+c*at,s[1]=u*A+f*v+h*W+d*V,s[5]=u*T+f*E+h*K+d*st,s[9]=u*C+f*L+h*H+d*P,s[13]=u*O+f*z+h*X+d*at,s[2]=_*A+g*v+p*W+m*V,s[6]=_*T+g*E+p*K+m*st,s[10]=_*C+g*L+p*H+m*P,s[14]=_*O+g*z+p*X+m*at,s[3]=y*A+S*v+x*W+R*V,s[7]=y*T+S*E+x*K+R*st,s[11]=y*C+S*L+x*H+R*P,s[15]=y*O+S*z+x*X+R*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*d-n*l*d)+g*(+e*l*d-e*c*h+s*o*h-i*o*d+i*c*u-s*l*u)+p*(+e*c*f-e*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+m*(-i*a*u-e*l*f+e*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],_=t[12],g=t[13],p=t[14],m=t[15],y=f*p*c-g*h*c+g*l*d-a*p*d-f*l*m+a*h*m,S=_*h*c-u*p*c-_*l*d+o*p*d+u*l*m-o*h*m,x=u*g*c-_*f*c+_*a*d-o*g*d-u*a*m+o*f*m,R=_*f*l-u*g*l-_*a*h+o*g*h+u*a*p-o*f*p,A=e*y+n*S+i*x+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=y*T,t[1]=(g*h*s-f*p*s-g*i*d+n*p*d+f*i*m-n*h*m)*T,t[2]=(a*p*s-g*l*s+g*i*c-n*p*c-a*i*m+n*l*m)*T,t[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*d-n*l*d)*T,t[4]=S*T,t[5]=(u*p*s-_*h*s+_*i*d-e*p*d-u*i*m+e*h*m)*T,t[6]=(_*l*s-o*p*s-_*i*c+e*p*c+o*i*m-e*l*m)*T,t[7]=(o*h*s-u*l*s+u*i*c-e*h*c-o*i*d+e*l*d)*T,t[8]=x*T,t[9]=(_*f*s-u*g*s-_*n*d+e*g*d+u*n*m-e*f*m)*T,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*m+e*a*m)*T,t[11]=(u*a*s-o*f*s-u*n*c+e*f*c+o*n*d-e*a*d)*T,t[12]=R*T,t[13]=(u*g*i-_*f*i+_*n*h-e*g*h-u*n*p+e*f*p)*T,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*p-e*a*p)*T,t[15]=(o*f*i-u*a*i+u*n*l-e*f*l-o*n*h+e*a*h)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,_=s*f,g=o*u,p=o*f,m=a*f,y=l*c,S=l*u,x=l*f,R=n.x,A=n.y,T=n.z;return i[0]=(1-(g+m))*R,i[1]=(d+x)*R,i[2]=(_-S)*R,i[3]=0,i[4]=(d-x)*A,i[5]=(1-(h+m))*A,i[6]=(p+y)*A,i[7]=0,i[8]=(_+S)*T,i[9]=(p-y)*T,i[10]=(1-(h+g))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Jr.set(i[0],i[1],i[2]).length();const o=Jr.set(i[4],i[5],i[6]).length(),a=Jr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ei.copy(this);const c=1/s,u=1/o,f=1/a;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=f,ei.elements[9]*=f,ei.elements[10]*=f,e.setFromRotationMatrix(ei),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Ri){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),h=(n+i)/(n-i);let d,_;if(a===Ri)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===qa)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Ri){const l=this.elements,c=1/(e-t),u=1/(n-i),f=1/(o-s),h=(e+t)*c,d=(n+i)*u;let _,g;if(a===Ri)_=(o+s)*f,g=-2*f;else if(a===qa)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Jr=new Y,ei=new Fe,Ng=new Y(0,0,0),Og=new Y(1,1,1),Gi=new Y,jo=new Y,Cn=new Y,Xh=new Fe,Yh=new Ro;class Ui{constructor(t=0,e=0,n=0,i=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(vn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(vn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-vn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class Ep{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fg=0;const qh=new Y,Qr=new Ro,vi=new Fe,Jo=new Y,Xs=new Y,Bg=new Y,zg=new Ro,$h=new Y(1,0,0),Kh=new Y(0,1,0),Zh=new Y(0,0,1),jh={type:"added"},kg={type:"removed"},ts={type:"childadded",child:null},Ul={type:"childremoved",child:null};class bn extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const t=new Y,e=new Ui,n=new Ro,i=new Y(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Zt}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ep,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qr.setFromAxisAngle(t,e),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(t,e){return Qr.setFromAxisAngle(t,e),this.quaternion.premultiply(Qr),this}rotateX(t){return this.rotateOnAxis($h,t)}rotateY(t){return this.rotateOnAxis(Kh,t)}rotateZ(t){return this.rotateOnAxis(Zh,t)}translateOnAxis(t,e){return qh.copy(t).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($h,t)}translateY(t){return this.translateOnAxis(Kh,t)}translateZ(t){return this.translateOnAxis(Zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jo.copy(t):Jo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Xs,Jo,this.up):vi.lookAt(Jo,Xs,this.up),this.quaternion.setFromRotationMatrix(vi),i&&(vi.extractRotation(i.matrixWorld),Qr.setFromRotationMatrix(vi),this.quaternion.premultiply(Qr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jh),ts.child=t,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kg),Ul.child=t,this.dispatchEvent(Ul),Ul.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jh),ts.child=t,this.dispatchEvent(ts),ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,Bg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,zg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}bn.DEFAULT_UP=new Y(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new Y,xi=new Y,Nl=new Y,Si=new Y,es=new Y,ns=new Y,Jh=new Y,Ol=new Y,Fl=new Y,Bl=new Y,zl=new Ne,kl=new Ne,Hl=new Ne;class si{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ni.subVectors(t,e),i.cross(ni);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ni.subVectors(i,e),xi.subVectors(n,e),Nl.subVectors(t,e);const o=ni.dot(ni),a=ni.dot(xi),l=ni.dot(Nl),c=xi.dot(xi),u=xi.dot(Nl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return zl.setScalar(0),kl.setScalar(0),Hl.setScalar(0),zl.fromBufferAttribute(t,e),kl.fromBufferAttribute(t,n),Hl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(zl,s.x),o.addScaledVector(kl,s.y),o.addScaledVector(Hl,s.z),o}static isFrontFacing(t,e,n,i){return ni.subVectors(n,e),xi.subVectors(t,e),ni.cross(xi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),ni.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return si.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return si.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;es.subVectors(i,n),ns.subVectors(s,n),Ol.subVectors(t,n);const l=es.dot(Ol),c=ns.dot(Ol);if(l<=0&&c<=0)return e.copy(n);Fl.subVectors(t,i);const u=es.dot(Fl),f=ns.dot(Fl);if(u>=0&&f<=u)return e.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(es,o);Bl.subVectors(t,s);const d=es.dot(Bl),_=ns.dot(Bl);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(ns,a);const p=u*_-d*f;if(p<=0&&f-u>=0&&d-_>=0)return Jh.subVectors(s,i),a=(f-u)/(f-u+(d-_)),e.copy(i).addScaledVector(Jh,a);const m=1/(p+g+h);return o=g*m,a=h*m,e.copy(n).addScaledVector(es,o).addScaledVector(ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function Gl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class fe{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=Eg(t,1),e=vn(e,0,1),n=vn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Gl(o,s,t+1/3),this.g=Gl(o,s,t),this.b=Gl(o,s,t-1/3)}return he.toWorkingColorSpace(this,i),this}setStyle(t,e=ci){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ci){const n=Tp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}copyLinearToSRGB(t){return this.r=Al(t.r),this.g=Al(t.g),this.b=Al(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return he.fromWorkingColorSpace(en.copy(this),t),Math.round(vn(en.r*255,0,255))*65536+Math.round(vn(en.g*255,0,255))*256+Math.round(vn(en.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(en.copy(this),e);const n=en.r,i=en.g,s=en.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=ci){he.fromWorkingColorSpace(en.copy(this),t);const e=en.r,n=en.g,i=en.b;return t!==ci?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(Qo);const n=Tl(Vi.h,Qo.h,e),i=Tl(Vi.s,Qo.s,e),s=Tl(Vi.l,Qo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new fe;fe.NAMES=Tp;let Hg=0;class Po extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=Ss,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=wc,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==ar&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ac&&(n.blendSrc=this.blendSrc),this.blendDst!==wc&&(n.blendDst=this.blendDst),this.blendEquation!==Er&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class bp extends Po{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=op,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Be=new Y,ta=new xe;class kn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zh,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ta.fromBufferAttribute(this,e),ta.applyMatrix3(t),this.setXY(e,ta.x,ta.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),i=_n(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),i=_n(i,this.array),s=_n(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zh&&(t.usage=this.usage),t}}class Ap extends kn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wp extends kn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Or extends kn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Gg=0;const Wn=new Fe,Vl=new bn,is=new Y,Pn=new Co,Ys=new Co,Ye=new Y;class Oi extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xp(t)?wp:Ap)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,n){return Wn.makeTranslation(t,e,n),this.applyMatrix4(Wn),this}scale(t,e,n){return Wn.makeScale(t,e,n),this.applyMatrix4(Wn),this}lookAt(t){return Vl.lookAt(t),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Or(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Co);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new el);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(Pn.min,Ys.min),Pn.expandByPoint(Ye),Ye.addVectors(Pn.max,Ys.max),Pn.expandByPoint(Ye)):(Pn.expandByPoint(Ys.min),Pn.expandByPoint(Ys.max))}Pn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ye.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ye));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ye.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(t,c),Ye.add(is)),i=Math.max(i,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new Y,l[C]=new Y;const c=new Y,u=new Y,f=new Y,h=new xe,d=new xe,_=new xe,g=new Y,p=new Y;function m(C,O,v){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,O),f.fromBufferAttribute(n,v),h.fromBufferAttribute(s,C),d.fromBufferAttribute(s,O),_.fromBufferAttribute(s,v),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const E=1/(d.x*_.y-_.x*d.y);isFinite(E)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(E),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(E),a[C].add(g),a[O].add(g),a[v].add(g),l[C].add(p),l[O].add(p),l[v].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,O=y.length;C<O;++C){const v=y[C],E=v.start,L=v.count;for(let z=E,W=E+L;z<W;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const S=new Y,x=new Y,R=new Y,A=new Y;function T(C){R.fromBufferAttribute(i,C),A.copy(R);const O=a[C];S.copy(O),S.sub(R.multiplyScalar(R.dot(O))).normalize(),x.crossVectors(A,O);const E=x.dot(l[C])<0?-1:1;o.setXYZW(C,S.x,S.y,S.z,E)}for(let C=0,O=y.length;C<O;++C){const v=y[C],E=v.start,L=v.count;for(let z=E,W=E+L;z<W;z+=3)T(t.getX(z+0)),T(t.getX(z+1)),T(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(t)for(let h=0,d=t.count;h<d;h+=3){const _=t.getX(h+0),g=t.getX(h+1),p=t.getX(h+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)h[_++]=c[d++]}return new kn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qh=new Fe,pr=new yp,ea=new el,tf=new Y,na=new Y,ia=new Y,ra=new Y,Wl=new Y,sa=new Y,ef=new Y,oa=new Y;class Ci extends bn{constructor(t=new Oi,e=new bp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){sa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Wl.fromBufferAttribute(f,t),o?sa.addScaledVector(Wl,u):sa.addScaledVector(Wl.sub(e),u))}e.add(sa)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),pr.copy(t.ray).recast(t.near),!(ea.containsPoint(pr.origin)===!1&&(pr.intersectSphere(ea,tf)===null||pr.origin.distanceToSquared(tf)>(t.far-t.near)**2))&&(Qh.copy(s).invert(),pr.copy(t.ray).applyMatrix4(Qh),!(n.boundingBox!==null&&pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=o[p.materialIndex],y=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=y,R=S;x<R;x+=3){const A=a.getX(x),T=a.getX(x+1),C=a.getX(x+2);i=aa(this,m,t,n,c,u,f,A,T,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const y=a.getX(p),S=a.getX(p+1),x=a.getX(p+2);i=aa(this,o,t,n,c,u,f,y,S,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=o[p.materialIndex],y=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=y,R=S;x<R;x+=3){const A=x,T=x+1,C=x+2;i=aa(this,m,t,n,c,u,f,A,T,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const y=p,S=p+1,x=p+2;i=aa(this,o,t,n,c,u,f,y,S,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Vg(r,t,e,n,i,s,o,a){let l;if(t.side===En?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===ar,a),l===null)return null;oa.copy(a),oa.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(oa);return c<e.near||c>e.far?null:{distance:c,point:oa.clone(),object:r}}function aa(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,na),r.getVertexPosition(l,ia),r.getVertexPosition(c,ra);const u=Vg(r,t,e,n,na,ia,ra,ef);if(u){const f=new Y;si.getBarycoord(ef,na,ia,ra,f),i&&(u.uv=si.getInterpolatedAttribute(i,a,l,c,f,new xe)),s&&(u.uv1=si.getInterpolatedAttribute(s,a,l,c,f,new xe)),o&&(u.normal=si.getInterpolatedAttribute(o,a,l,c,f,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Y,materialIndex:0};si.getNormal(na,ia,ra,h.normal),u.face=h,u.barycoord=f}return u}class Do extends Oi{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Or(c,3)),this.setAttribute("normal",new Or(u,3)),this.setAttribute("uv",new Or(f,2));function _(g,p,m,y,S,x,R,A,T,C,O){const v=x/T,E=R/C,L=x/2,z=R/2,W=A/2,K=T+1,H=C+1;let X=0,V=0;const st=new Y;for(let P=0;P<H;P++){const at=P*E-z;for(let Bt=0;Bt<K;Bt++){const Xt=Bt*v-L;st[g]=Xt*y,st[p]=at*S,st[m]=W,c.push(st.x,st.y,st.z),st[g]=0,st[p]=0,st[m]=A>0?1:-1,u.push(st.x,st.y,st.z),f.push(Bt/T),f.push(1-P/C),X+=1}}for(let P=0;P<C;P++)for(let at=0;at<T;at++){const Bt=h+at+K*P,Xt=h+at+K*(P+1),q=h+(at+1)+K*(P+1),Q=h+(at+1)+K*P;l.push(Bt,Xt,Q),l.push(Xt,q,Q),V+=6}a.addGroup(d,V,O),d+=V,h+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ns(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function un(r){const t={};for(let e=0;e<r.length;e++){const n=Ns(r[e]);for(const i in n)t[i]=n[i]}return t}function Wg(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Rp(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const Xg={clone:Ns,merge:un};var Yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Po{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yg,this.fragmentShader=qg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=Wg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Cp extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new Y,nf=new xe,rf=new xe;class $n extends Cp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(El*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hu*2*Math.atan(Math.tan(El*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,nf,rf),e.subVectors(rf,nf)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(El*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rs=-90,ss=1;class $g extends bn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $n(rs,ss,t,e);i.layers=this.layers,this.add(i);const s=new $n(rs,ss,t,e);s.layers=this.layers,this.add(s);const o=new $n(rs,ss,t,e);o.layers=this.layers,this.add(o);const a=new $n(rs,ss,t,e);a.layers=this.layers,this.add(a);const l=new $n(rs,ss,t,e);l.layers=this.layers,this.add(l);const c=new $n(rs,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Pp extends Tn{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ds,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kg extends Hr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Pp(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ri}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Do(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:er});s.uniforms.tEquirect.value=e;const o=new Ci(i,s),a=e.minFilter;return e.minFilter===Rr&&(e.minFilter=ri),new $g(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Xl=new Y,Zg=new Y,jg=new Zt;class Mr{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Xl.subVectors(n,e).cross(Zg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jg.getNormalMatrix(t),i=this.coplanarPoint(Xl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new el,la=new Y;class Dp{constructor(t=new Mr,e=new Mr,n=new Mr,i=new Mr,s=new Mr,o=new Mr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ri){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],y=i[13],S=i[14],x=i[15];if(n[0].setComponents(l-s,h-c,p-d,x-m).normalize(),n[1].setComponents(l+s,h+c,p+d,x+m).normalize(),n[2].setComponents(l+o,h+u,p+_,x+y).normalize(),n[3].setComponents(l-o,h-u,p-_,x-y).normalize(),n[4].setComponents(l-a,h-f,p-g,x-S).normalize(),e===Ri)n[5].setComponents(l+a,h+f,p+g,x+S).normalize();else if(e===qa)n[5].setComponents(a,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(la.x=i.normal.x>0?t.max.x:t.min.x,la.y=i.normal.y>0?t.max.y:t.min.y,la.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(la)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lp(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Jg(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],g=f[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,f[h]=g)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const g=f[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class nl extends Oi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=t/a,h=e/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const y=m*h-o;for(let S=0;S<c;S++){const x=S*f-s;_.push(x,-y,0),g.push(0,0,1),p.push(S/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const S=y+c*m,x=y+c*(m+1),R=y+1+c*(m+1),A=y+1+c*m;d.push(S,x,A),d.push(x,R,A)}this.setIndex(d),this.setAttribute("position",new Or(_,3)),this.setAttribute("normal",new Or(g,3)),this.setAttribute("uv",new Or(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.width,t.height,t.widthSegments,t.heightSegments)}}var Qg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,e0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,r0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,o0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,l0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,f0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,d0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,y0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,E0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,T0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,b0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C0="gl_FragColor = linearToOutputTexel( gl_FragColor );",P0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,H0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,X0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Y0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,j0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,J0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ev=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ov=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_v=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ev=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Av=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Nv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ox=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ax=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ex=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Px=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:Qg,alphahash_pars_fragment:t0,alphamap_fragment:e0,alphamap_pars_fragment:n0,alphatest_fragment:i0,alphatest_pars_fragment:r0,aomap_fragment:s0,aomap_pars_fragment:o0,batching_pars_vertex:a0,batching_vertex:l0,begin_vertex:c0,beginnormal_vertex:u0,bsdfs:h0,iridescence_fragment:f0,bumpmap_pars_fragment:d0,clipping_planes_fragment:p0,clipping_planes_pars_fragment:m0,clipping_planes_pars_vertex:_0,clipping_planes_vertex:g0,color_fragment:v0,color_pars_fragment:x0,color_pars_vertex:S0,color_vertex:M0,common:y0,cube_uv_reflection_fragment:E0,defaultnormal_vertex:T0,displacementmap_pars_vertex:b0,displacementmap_vertex:A0,emissivemap_fragment:w0,emissivemap_pars_fragment:R0,colorspace_fragment:C0,colorspace_pars_fragment:P0,envmap_fragment:D0,envmap_common_pars_fragment:L0,envmap_pars_fragment:I0,envmap_pars_vertex:U0,envmap_physical_pars_fragment:X0,envmap_vertex:N0,fog_vertex:O0,fog_pars_vertex:F0,fog_fragment:B0,fog_pars_fragment:z0,gradientmap_pars_fragment:k0,lightmap_pars_fragment:H0,lights_lambert_fragment:G0,lights_lambert_pars_fragment:V0,lights_pars_begin:W0,lights_toon_fragment:Y0,lights_toon_pars_fragment:q0,lights_phong_fragment:$0,lights_phong_pars_fragment:K0,lights_physical_fragment:Z0,lights_physical_pars_fragment:j0,lights_fragment_begin:J0,lights_fragment_maps:Q0,lights_fragment_end:tv,logdepthbuf_fragment:ev,logdepthbuf_pars_fragment:nv,logdepthbuf_pars_vertex:iv,logdepthbuf_vertex:rv,map_fragment:sv,map_pars_fragment:ov,map_particle_fragment:av,map_particle_pars_fragment:lv,metalnessmap_fragment:cv,metalnessmap_pars_fragment:uv,morphinstance_vertex:hv,morphcolor_vertex:fv,morphnormal_vertex:dv,morphtarget_pars_vertex:pv,morphtarget_vertex:mv,normal_fragment_begin:_v,normal_fragment_maps:gv,normal_pars_fragment:vv,normal_pars_vertex:xv,normal_vertex:Sv,normalmap_pars_fragment:Mv,clearcoat_normal_fragment_begin:yv,clearcoat_normal_fragment_maps:Ev,clearcoat_pars_fragment:Tv,iridescence_pars_fragment:bv,opaque_fragment:Av,packing:wv,premultiplied_alpha_fragment:Rv,project_vertex:Cv,dithering_fragment:Pv,dithering_pars_fragment:Dv,roughnessmap_fragment:Lv,roughnessmap_pars_fragment:Iv,shadowmap_pars_fragment:Uv,shadowmap_pars_vertex:Nv,shadowmap_vertex:Ov,shadowmask_pars_fragment:Fv,skinbase_vertex:Bv,skinning_pars_vertex:zv,skinning_vertex:kv,skinnormal_vertex:Hv,specularmap_fragment:Gv,specularmap_pars_fragment:Vv,tonemapping_fragment:Wv,tonemapping_pars_fragment:Xv,transmission_fragment:Yv,transmission_pars_fragment:qv,uv_pars_fragment:$v,uv_pars_vertex:Kv,uv_vertex:Zv,worldpos_vertex:jv,background_vert:Jv,background_frag:Qv,backgroundCube_vert:tx,backgroundCube_frag:ex,cube_vert:nx,cube_frag:ix,depth_vert:rx,depth_frag:sx,distanceRGBA_vert:ox,distanceRGBA_frag:ax,equirect_vert:lx,equirect_frag:cx,linedashed_vert:ux,linedashed_frag:hx,meshbasic_vert:fx,meshbasic_frag:dx,meshlambert_vert:px,meshlambert_frag:mx,meshmatcap_vert:_x,meshmatcap_frag:gx,meshnormal_vert:vx,meshnormal_frag:xx,meshphong_vert:Sx,meshphong_frag:Mx,meshphysical_vert:yx,meshphysical_frag:Ex,meshtoon_vert:Tx,meshtoon_frag:bx,points_vert:Ax,points_frag:wx,shadow_vert:Rx,shadow_frag:Cx,sprite_vert:Px,sprite_frag:Dx},mt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},ui={basic:{uniforms:un([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:un([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new fe(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:un([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:un([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:un([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new fe(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:un([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:un([mt.points,mt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:un([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:un([mt.common,mt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:un([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:un([mt.sprite,mt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:un([mt.common,mt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:un([mt.lights,mt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};ui.physical={uniforms:un([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const ca={r:0,b:0,g:0},_r=new Ui,Lx=new Fe;function Ix(r,t,e,n,i,s,o){const a=new fe(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function g(y){let S=!1;const x=_(y);x===null?m(a,l):x&&x.isColor&&(m(x,1),S=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(y,S){const x=_(S);x&&(x.isCubeTexture||x.mapping===Qa)?(u===void 0&&(u=new Ci(new Do(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:Ns(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),_r.copy(S.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(_r)),u.material.toneMapped=he.getTransfer(x.colorSpace)!==Ee,(f!==x||h!==x.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ci(new nl(2,2),new Ni({name:"BackgroundMaterial",uniforms:Ns(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=he.getTransfer(x.colorSpace)!==Ee,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,S){y.getRGB(ca,Rp(r)),n.buffers.color.setClear(ca.r,ca.g,ca.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),l=S,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:g,addToRenderList:p}}function Ux(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(v,E,L,z,W){let K=!1;const H=f(z,L,E);s!==H&&(s=H,c(s.object)),K=d(v,z,L,W),K&&_(v,z,L,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(v,E,L,z),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function f(v,E,L){const z=L.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let K=W[E.id];K===void 0&&(K={},W[E.id]=K);let H=K[z];return H===void 0&&(H=h(l()),K[z]=H),H}function h(v){const E=[],L=[],z=[];for(let W=0;W<e;W++)E[W]=0,L[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:L,attributeDivisors:z,object:v,attributes:{},index:null}}function d(v,E,L,z){const W=s.attributes,K=E.attributes;let H=0;const X=L.getAttributes();for(const V in X)if(X[V].location>=0){const P=W[V];let at=K[V];if(at===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(at=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(at=v.instanceColor)),P===void 0||P.attribute!==at||at&&P.data!==at.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function _(v,E,L,z){const W={},K=E.attributes;let H=0;const X=L.getAttributes();for(const V in X)if(X[V].location>=0){let P=K[V];P===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(P=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(P=v.instanceColor));const at={};at.attribute=P,P&&P.data&&(at.data=P.data),W[V]=at,H++}s.attributes=W,s.attributesNum=H,s.index=z}function g(){const v=s.newAttributes;for(let E=0,L=v.length;E<L;E++)v[E]=0}function p(v){m(v,0)}function m(v,E){const L=s.newAttributes,z=s.enabledAttributes,W=s.attributeDivisors;L[v]=1,z[v]===0&&(r.enableVertexAttribArray(v),z[v]=1),W[v]!==E&&(r.vertexAttribDivisor(v,E),W[v]=E)}function y(){const v=s.newAttributes,E=s.enabledAttributes;for(let L=0,z=E.length;L<z;L++)E[L]!==v[L]&&(r.disableVertexAttribArray(L),E[L]=0)}function S(v,E,L,z,W,K,H){H===!0?r.vertexAttribIPointer(v,E,L,W,K):r.vertexAttribPointer(v,E,L,z,W,K)}function x(v,E,L,z){g();const W=z.attributes,K=L.getAttributes(),H=E.defaultAttributeValues;for(const X in K){const V=K[X];if(V.location>=0){let st=W[X];if(st===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(st=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(st=v.instanceColor)),st!==void 0){const P=st.normalized,at=st.itemSize,Bt=t.get(st);if(Bt===void 0)continue;const Xt=Bt.buffer,q=Bt.type,Q=Bt.bytesPerElement,ft=q===r.INT||q===r.UNSIGNED_INT||st.gpuType===Hu;if(st.isInterleavedBufferAttribute){const ot=st.data,bt=ot.stride,yt=st.offset;if(ot.isInstancedInterleavedBuffer){for(let Wt=0;Wt<V.locationSize;Wt++)m(V.location+Wt,ot.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Wt=0;Wt<V.locationSize;Wt++)p(V.location+Wt);r.bindBuffer(r.ARRAY_BUFFER,Xt);for(let Wt=0;Wt<V.locationSize;Wt++)S(V.location+Wt,at/V.locationSize,q,P,bt*Q,(yt+at/V.locationSize*Wt)*Q,ft)}else{if(st.isInstancedBufferAttribute){for(let ot=0;ot<V.locationSize;ot++)m(V.location+ot,st.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ot=0;ot<V.locationSize;ot++)p(V.location+ot);r.bindBuffer(r.ARRAY_BUFFER,Xt);for(let ot=0;ot<V.locationSize;ot++)S(V.location+ot,at/V.locationSize,q,P,at*Q,at/V.locationSize*ot*Q,ft)}}else if(H!==void 0){const P=H[X];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(V.location,P);break;case 3:r.vertexAttrib3fv(V.location,P);break;case 4:r.vertexAttrib4fv(V.location,P);break;default:r.vertexAttrib1fv(V.location,P)}}}}y()}function R(){C();for(const v in n){const E=n[v];for(const L in E){const z=E[L];for(const W in z)u(z[W].object),delete z[W];delete E[L]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const E=n[v.id];for(const L in E){const z=E[L];for(const W in z)u(z[W].object),delete z[W];delete E[L]}delete n[v.id]}function T(v){for(const E in n){const L=n[E];if(L[v.id]===void 0)continue;const z=L[v.id];for(const W in z)u(z[W].object),delete z[W];delete L[v.id]}}function C(){O(),o=!0,s!==i&&(s=i,c(s.object))}function O(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:O,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function Nx(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];for(let g=0;g<h.length;g++)e.update(_,n,h[g])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ox(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==oi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===Ao&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ii&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==wi&&!C)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(h===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function Fx(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Mr,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,S=y*4;let x=m.clippingState||null;l.value=x,x=u(_,h,S,d);for(let R=0;R!==S;++R)x[R]=e[R];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,x=d;S!==g;++S,x+=4)o.copy(f[S]).applyMatrix4(y,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Bx(r){let t=new WeakMap;function e(o,a){return a===Nc?o.mapping=Ds:a===Oc&&(o.mapping=Ls),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Nc||a===Oc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Kg(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class zx extends Cp{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ds=4,sf=[.125,.215,.35,.446,.526,.582],Tr=20,Yl=new zx,of=new fe;let ql=null,$l=0,Kl=0,Zl=!1;const yr=(1+Math.sqrt(5))/2,os=1/yr,af=[new Y(-yr,os,0),new Y(yr,os,0),new Y(-os,0,yr),new Y(os,0,yr),new Y(0,yr,-os),new Y(0,yr,os),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class lf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ql=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ql,$l,Kl),this._renderer.xr.enabled=Zl,t.scissorTest=!1,ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ds||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ql=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:Ao,format:oi,colorSpace:cr,depthBuffer:!1},i=cf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cf(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kx(s)),this._blurMaterial=Hx(s,t,e)}return i}_compileMaterial(t){const e=new Ci(this._lodPlanes[0],t);this._renderer.compile(e,Yl)}_sceneToCubeUV(t,e,n,i){const a=new $n(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(of),u.toneMapping=nr,u.autoClear=!1;const d=new bp({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),_=new Ci(new Do,d);let g=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,g=!0):(d.color.copy(of),g=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const S=this._cubeSize;ua(i,y*S,m>2?S:0,S,S),u.setRenderTarget(i),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ds||t.mapping===Ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ci(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ua(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Yl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=af[(i-s-1)%af.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ci(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Tr-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Tr;p>Tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Tr}`);const m=[];let y=0;for(let T=0;T<Tr;++T){const C=T/g,O=Math.exp(-C*C/2);m.push(O),T===0?y+=O:T<p&&(y+=2*O)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=_,h.mipInt.value=S-n;const x=this._sizeLods[i],R=3*x*(i>S-ds?i-S+ds:0),A=4*(this._cubeSize-x);ua(e,R,A,3*x,2*x),l.setRenderTarget(e),l.render(f,Yl)}}function kx(r){const t=[],e=[],n=[];let i=r;const s=r-ds+1+sf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-ds?l=sf[o-r+ds-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,p=2,m=1,y=new Float32Array(g*_*d),S=new Float32Array(p*_*d),x=new Float32Array(m*_*d);for(let A=0;A<d;A++){const T=A%3*2/3-1,C=A>2?0:-1,O=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];y.set(O,g*_*A),S.set(h,p*_*A);const v=[A,A,A,A,A,A];x.set(v,m*_*A)}const R=new Oi;R.setAttribute("position",new kn(y,g)),R.setAttribute("uv",new kn(S,p)),R.setAttribute("faceIndex",new kn(x,m)),t.push(R),i>ds&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function cf(r,t,e){const n=new Hr(r,t,e);return n.texture.mapping=Qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ua(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Hx(r,t,e){const n=new Float32Array(Tr),i=new Y(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function uf(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function hf(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function $u(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gx(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Nc||l===Oc,u=l===Ds||l===Ls;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new lf(r)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new lf(r)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Vx(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Pa("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wx(r,t,e,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)t.update(h[_],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],r.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let S=0,x=y.length;S<x;S+=3){const R=y[S+0],A=y[S+1],T=y[S+2];h.push(R,A,A,T,T,R)}}else if(_!==void 0){const y=_.array;g=_.version;for(let S=0,x=y.length/3-1;S<x;S+=3){const R=S+0,A=S+1,T=S+2;h.push(R,A,A,T,T,R)}}else return;const p=new(xp(h)?wp:Ap)(h,1);p.version=g;const m=s.get(f);m&&t.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Xx(r,t,e){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*o),e.update(d,n,1)}function c(h,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,h*o,_),e.update(d,n,_))}function u(h,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];e.update(p,n,1)}function f(h,d,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/o,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,g,0,_);let m=0;for(let y=0;y<_;y++)m+=d[y];for(let y=0;y<g.length;y++)e.update(m,n,g[y])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Yx(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function qx(r,t,e){const n=new WeakMap,i=new Ne;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let v=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var d=v;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),p===!0&&(x=3);let R=a.attributes.position.count*x,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const T=new Float32Array(R*A*4*f),C=new Mp(T,R,A,f);C.type=wi,C.needsUpdate=!0;const O=x*4;for(let E=0;E<f;E++){const L=m[E],z=y[E],W=S[E],K=R*A*4*E;for(let H=0;H<L.count;H++){const X=H*O;_===!0&&(i.fromBufferAttribute(L,H),T[K+X+0]=i.x,T[K+X+1]=i.y,T[K+X+2]=i.z,T[K+X+3]=0),g===!0&&(i.fromBufferAttribute(z,H),T[K+X+4]=i.x,T[K+X+5]=i.y,T[K+X+6]=i.z,T[K+X+7]=0),p===!0&&(i.fromBufferAttribute(W,H),T[K+X+8]=i.x,T[K+X+9]=i.y,T[K+X+10]=i.z,T[K+X+11]=W.itemSize===4?i.w:1)}}h={count:f,texture:C,size:new xe(R,A)},n.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function $x(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Ip extends Tn{constructor(t,e,n,i,s,o,a,l,c,u=Ms){if(u!==Ms&&u!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ms&&(n=kr),n===void 0&&u===Us&&(n=Is),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:jn,this.minFilter=l!==void 0?l:jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Up=new Tn,ff=new Ip(1,1),Np=new Mp,Op=new Ig,Fp=new Pp,df=[],pf=[],mf=new Float32Array(16),_f=new Float32Array(9),gf=new Float32Array(4);function Fs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=df[i];if(s===void 0&&(s=new Float32Array(i),df[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ve(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function We(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function il(r,t){let e=pf[t];e===void 0&&(e=new Int32Array(t),pf[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Kx(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Zx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;r.uniform2fv(this.addr,t),We(e,t)}}function jx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;r.uniform3fv(this.addr,t),We(e,t)}}function Jx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;r.uniform4fv(this.addr,t),We(e,t)}}function Qx(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;gf.set(n),r.uniformMatrix2fv(this.addr,!1,gf),We(e,n)}}function tS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;_f.set(n),r.uniformMatrix3fv(this.addr,!1,_f),We(e,n)}}function eS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;mf.set(n),r.uniformMatrix4fv(this.addr,!1,mf),We(e,n)}}function nS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function iS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;r.uniform2iv(this.addr,t),We(e,t)}}function rS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;r.uniform3iv(this.addr,t),We(e,t)}}function sS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;r.uniform4iv(this.addr,t),We(e,t)}}function oS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function aS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;r.uniform2uiv(this.addr,t),We(e,t)}}function lS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;r.uniform3uiv(this.addr,t),We(e,t)}}function cS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;r.uniform4uiv(this.addr,t),We(e,t)}}function uS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ff.compareFunction=vp,s=ff):s=Up,e.setTexture2D(t||s,i)}function hS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Op,i)}function fS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Fp,i)}function dS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Np,i)}function pS(r){switch(r){case 5126:return Kx;case 35664:return Zx;case 35665:return jx;case 35666:return Jx;case 35674:return Qx;case 35675:return tS;case 35676:return eS;case 5124:case 35670:return nS;case 35667:case 35671:return iS;case 35668:case 35672:return rS;case 35669:case 35673:return sS;case 5125:return oS;case 36294:return aS;case 36295:return lS;case 36296:return cS;case 35678:case 36198:case 36298:case 36306:case 35682:return uS;case 35679:case 36299:case 36307:return hS;case 35680:case 36300:case 36308:case 36293:return fS;case 36289:case 36303:case 36311:case 36292:return dS}}function mS(r,t){r.uniform1fv(this.addr,t)}function _S(r,t){const e=Fs(t,this.size,2);r.uniform2fv(this.addr,e)}function gS(r,t){const e=Fs(t,this.size,3);r.uniform3fv(this.addr,e)}function vS(r,t){const e=Fs(t,this.size,4);r.uniform4fv(this.addr,e)}function xS(r,t){const e=Fs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function SS(r,t){const e=Fs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function MS(r,t){const e=Fs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function yS(r,t){r.uniform1iv(this.addr,t)}function ES(r,t){r.uniform2iv(this.addr,t)}function TS(r,t){r.uniform3iv(this.addr,t)}function bS(r,t){r.uniform4iv(this.addr,t)}function AS(r,t){r.uniform1uiv(this.addr,t)}function wS(r,t){r.uniform2uiv(this.addr,t)}function RS(r,t){r.uniform3uiv(this.addr,t)}function CS(r,t){r.uniform4uiv(this.addr,t)}function PS(r,t,e){const n=this.cache,i=t.length,s=il(e,i);Ve(n,s)||(r.uniform1iv(this.addr,s),We(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Up,s[o])}function DS(r,t,e){const n=this.cache,i=t.length,s=il(e,i);Ve(n,s)||(r.uniform1iv(this.addr,s),We(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Op,s[o])}function LS(r,t,e){const n=this.cache,i=t.length,s=il(e,i);Ve(n,s)||(r.uniform1iv(this.addr,s),We(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Fp,s[o])}function IS(r,t,e){const n=this.cache,i=t.length,s=il(e,i);Ve(n,s)||(r.uniform1iv(this.addr,s),We(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Np,s[o])}function US(r){switch(r){case 5126:return mS;case 35664:return _S;case 35665:return gS;case 35666:return vS;case 35674:return xS;case 35675:return SS;case 35676:return MS;case 5124:case 35670:return yS;case 35667:case 35671:return ES;case 35668:case 35672:return TS;case 35669:case 35673:return bS;case 5125:return AS;case 36294:return wS;case 36295:return RS;case 36296:return CS;case 35678:case 36198:case 36298:case 36306:case 35682:return PS;case 35679:case 36299:case 36307:return DS;case 35680:case 36300:case 36308:case 36293:return LS;case 36289:case 36303:case 36311:case 36292:return IS}}class NS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pS(e.type)}}class OS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=US(e.type)}}class FS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const jl=/(\w+)(\])?(\[|\.)?/g;function vf(r,t){r.seq.push(t),r.map[t.id]=t}function BS(r,t,e){const n=r.name,i=n.length;for(jl.lastIndex=0;;){const s=jl.exec(n),o=jl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){vf(e,c===void 0?new NS(a,r,t):new OS(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new FS(a),vf(e,f)),e=f}}}class Da{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);BS(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function xf(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const zS=37297;let kS=0;function HS(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function GS(r){const t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(r);let n;switch(t===e?n="":t===Ya&&e===Xa?n="LinearDisplayP3ToLinearSRGB":t===Xa&&e===Ya&&(n="LinearSRGBToLinearDisplayP3"),r){case cr:case tl:return[n,"LinearTransferOETF"];case ci:case qu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Sf(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+HS(r.getShaderSource(t),o)}else return i}function VS(r,t){const e=GS(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function WS(r,t){let e;switch(t){case rg:e="Linear";break;case sg:e="Reinhard";break;case og:e="Cineon";break;case ag:e="ACESFilmic";break;case cg:e="AgX";break;case ug:e="Neutral";break;case lg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ha=new Y;function XS(){he.getLuminanceCoefficients(ha);const r=ha.x.toFixed(4),t=ha.y.toFixed(4),e=ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function qS(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $S(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function to(r){return r!==""}function Mf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const KS=/^[ \t]*#include +<([\w\d./]+)>/gm;function fu(r){return r.replace(KS,jS)}const ZS=new Map;function jS(r,t){let e=Kt[t];if(e===void 0){const n=ZS.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fu(e)}const JS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ef(r){return r.replace(JS,QS)}function QS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Tf(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tM(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===sp?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===F_?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Mi&&(t="SHADOWMAP_TYPE_VSM"),t}function eM(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ds:case Ls:t="ENVMAP_TYPE_CUBE";break;case Qa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nM(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ls:t="ENVMAP_MODE_REFRACTION";break}return t}function iM(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case op:t="ENVMAP_BLENDING_MULTIPLY";break;case ng:t="ENVMAP_BLENDING_MIX";break;case ig:t="ENVMAP_BLENDING_ADD";break}return t}function rM(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function sM(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=tM(e),c=eM(e),u=nM(e),f=iM(e),h=rM(e),d=YS(e),_=qS(s),g=i.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(to).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(to).join(`
`),m.length>0&&(m+=`
`)):(p=[Tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),m=[Tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==nr?"#define TONE_MAPPING":"",e.toneMapping!==nr?Kt.tonemapping_pars_fragment:"",e.toneMapping!==nr?WS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,VS("linearToOutputTexel",e.outputColorSpace),XS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(to).join(`
`)),o=fu(o),o=Mf(o,e),o=yf(o,e),a=fu(a),a=Mf(a,e),a=yf(a,e),o=Ef(o),a=Ef(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=y+p+o,x=y+m+a,R=xf(i,i.VERTEX_SHADER,S),A=xf(i,i.FRAGMENT_SHADER,x);i.attachShader(g,R),i.attachShader(g,A),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(E){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(R).trim(),W=i.getShaderInfoLog(A).trim();let K=!0,H=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,R,A);else{const X=Sf(i,R,"vertex"),V=Sf(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+L+`
`+X+`
`+V)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(z===""||W==="")&&(H=!1);H&&(E.diagnostics={runnable:K,programLog:L,vertexShader:{log:z,prefix:p},fragmentShader:{log:W,prefix:m}})}i.deleteShader(R),i.deleteShader(A),C=new Da(i,g),O=$S(i,g)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let O;this.getAttributes=function(){return O===void 0&&T(this),O};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,zS)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kS++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=A,this}let oM=0;class aM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new lM(t),e.set(t,n)),n}}class lM{constructor(t){this.id=oM++,this.code=t,this.usedTimes=0}}function cM(r,t,e,n,i,s,o){const a=new Ep,l=new aM,c=new Set,u=[],f=i.logarithmicDepthBuffer,h=i.reverseDepthBuffer,d=i.vertexTextures;let _=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,E,L,z,W){const K=z.fog,H=W.geometry,X=v.isMeshStandardMaterial?z.environment:null,V=(v.isMeshStandardMaterial?e:t).get(v.envMap||X),st=V&&V.mapping===Qa?V.image.height:null,P=g[v.type];v.precision!==null&&(_=i.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const at=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Bt=at!==void 0?at.length:0;let Xt=0;H.morphAttributes.position!==void 0&&(Xt=1),H.morphAttributes.normal!==void 0&&(Xt=2),H.morphAttributes.color!==void 0&&(Xt=3);let q,Q,ft,ot;if(P){const wt=ui[P];q=wt.vertexShader,Q=wt.fragmentShader}else q=v.vertexShader,Q=v.fragmentShader,l.update(v),ft=l.getVertexShaderID(v),ot=l.getFragmentShaderID(v);const bt=r.getRenderTarget(),yt=W.isInstancedMesh===!0,Wt=W.isBatchedMesh===!0,Gt=!!v.map,Nt=!!v.matcap,D=!!V,re=!!v.aoMap,Ot=!!v.lightMap,zt=!!v.bumpMap,F=!!v.normalMap,jt=!!v.displacementMap,Dt=!!v.emissiveMap,w=!!v.metalnessMap,M=!!v.roughnessMap,G=v.anisotropy>0,j=v.clearcoat>0,et=v.dispersion>0,Z=v.iridescence>0,St=v.sheen>0,it=v.transmission>0,dt=G&&!!v.anisotropyMap,Ht=j&&!!v.clearcoatMap,nt=j&&!!v.clearcoatNormalMap,vt=j&&!!v.clearcoatRoughnessMap,xt=Z&&!!v.iridescenceMap,It=Z&&!!v.iridescenceThicknessMap,gt=St&&!!v.sheenColorMap,Yt=St&&!!v.sheenRoughnessMap,Ft=!!v.specularMap,se=!!v.specularColorMap,I=!!v.specularIntensityMap,tt=it&&!!v.transmissionMap,$=it&&!!v.thicknessMap,J=!!v.gradientMap,lt=!!v.alphaMap,ct=v.alphaTest>0,qt=!!v.alphaHash,me=!!v.extensions;let Te=nr;v.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Te=r.toneMapping);const ne={shaderID:P,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:Q,defines:v.defines,customVertexShaderID:ft,customFragmentShaderID:ot,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:Wt,batchingColor:Wt&&W._colorsTexture!==null,instancing:yt,instancingColor:yt&&W.instanceColor!==null,instancingMorph:yt&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:cr,alphaToCoverage:!!v.alphaToCoverage,map:Gt,matcap:Nt,envMap:D,envMapMode:D&&V.mapping,envMapCubeUVHeight:st,aoMap:re,lightMap:Ot,bumpMap:zt,normalMap:F,displacementMap:d&&jt,emissiveMap:Dt,normalMapObjectSpace:F&&v.normalMapType===mg,normalMapTangentSpace:F&&v.normalMapType===pg,metalnessMap:w,roughnessMap:M,anisotropy:G,anisotropyMap:dt,clearcoat:j,clearcoatMap:Ht,clearcoatNormalMap:nt,clearcoatRoughnessMap:vt,dispersion:et,iridescence:Z,iridescenceMap:xt,iridescenceThicknessMap:It,sheen:St,sheenColorMap:gt,sheenRoughnessMap:Yt,specularMap:Ft,specularColorMap:se,specularIntensityMap:I,transmission:it,transmissionMap:tt,thicknessMap:$,gradientMap:J,opaque:v.transparent===!1&&v.blending===Ss&&v.alphaToCoverage===!1,alphaMap:lt,alphaTest:ct,alphaHash:qt,combine:v.combine,mapUv:Gt&&p(v.map.channel),aoMapUv:re&&p(v.aoMap.channel),lightMapUv:Ot&&p(v.lightMap.channel),bumpMapUv:zt&&p(v.bumpMap.channel),normalMapUv:F&&p(v.normalMap.channel),displacementMapUv:jt&&p(v.displacementMap.channel),emissiveMapUv:Dt&&p(v.emissiveMap.channel),metalnessMapUv:w&&p(v.metalnessMap.channel),roughnessMapUv:M&&p(v.roughnessMap.channel),anisotropyMapUv:dt&&p(v.anisotropyMap.channel),clearcoatMapUv:Ht&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:nt&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:It&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&p(v.sheenRoughnessMap.channel),specularMapUv:Ft&&p(v.specularMap.channel),specularColorMapUv:se&&p(v.specularColorMap.channel),specularIntensityMapUv:I&&p(v.specularIntensityMap.channel),transmissionMapUv:tt&&p(v.transmissionMap.channel),thicknessMapUv:$&&p(v.thicknessMap.channel),alphaMapUv:lt&&p(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(F||G),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!H.attributes.uv&&(Gt||lt),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:W.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:Xt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:Te,decodeVideoTexture:Gt&&v.map.isVideoTexture===!0&&he.getTransfer(v.map.colorSpace)===Ee,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===bi,flipSided:v.side===En,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:me&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&v.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ne.vertexUv1s=c.has(1),ne.vertexUv2s=c.has(2),ne.vertexUv3s=c.has(3),c.clear(),ne}function y(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)E.push(L),E.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(S(E,v),x(E,v),E.push(r.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function S(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function x(v,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),v.push(a.mask)}function R(v){const E=g[v.type];let L;if(E){const z=ui[E];L=Xg.clone(z.uniforms)}else L=v.uniforms;return L}function A(v,E){let L;for(let z=0,W=u.length;z<W;z++){const K=u[z];if(K.cacheKey===E){L=K,++L.usedTimes;break}}return L===void 0&&(L=new sM(r,E,v,s),u.push(L)),L}function T(v){if(--v.usedTimes===0){const E=u.indexOf(v);u[E]=u[u.length-1],u.pop(),v.destroy()}}function C(v){l.remove(v)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:R,acquireProgram:A,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:O}}function uM(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function hM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function bf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Af(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f,h,d,_,g,p){let m=r[t];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},r[t]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=_,m.renderOrder=f.renderOrder,m.z=g,m.group=p),t++,m}function a(f,h,d,_,g,p){const m=o(f,h,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(f,h,d,_,g,p){const m=o(f,h,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(f,h){e.length>1&&e.sort(f||hM),n.length>1&&n.sort(h||bf),i.length>1&&i.sort(h||bf)}function u(){for(let f=t,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function fM(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Af,r.set(n,[o])):i>=s.length?(o=new Af,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function dM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Y,color:new fe};break;case"SpotLight":e={position:new Y,direction:new Y,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[t.id]=e,e}}}function pM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let mM=0;function _M(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function gM(r){const t=new dM,e=pM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);const i=new Y,s=new Fe,o=new Fe;function a(c){let u=0,f=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,y=0,S=0,x=0,R=0,A=0,T=0;c.sort(_M);for(let O=0,v=c.length;O<v;O++){const E=c[O],L=E.color,z=E.intensity,W=E.distance,K=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=L.r*z,f+=L.g*z,h+=L.b*z;else if(E.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(E.sh.coefficients[H],z);T++}else if(E.isDirectionalLight){const H=t.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const X=E.shadow,V=e.get(E);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=K,n.directionalShadowMatrix[d]=E.shadow.matrix,y++}n.directional[d]=H,d++}else if(E.isSpotLight){const H=t.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(L).multiplyScalar(z),H.distance=W,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,n.spot[g]=H;const X=E.shadow;if(E.map&&(n.spotLightMap[R]=E.map,R++,X.updateMatrices(E),E.castShadow&&A++),n.spotLightMatrix[g]=X.matrix,E.castShadow){const V=e.get(E);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=K,x++}g++}else if(E.isRectAreaLight){const H=t.get(E);H.color.copy(L).multiplyScalar(z),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=H,p++}else if(E.isPointLight){const H=t.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),H.distance=E.distance,H.decay=E.decay,E.castShadow){const X=E.shadow,V=e.get(E);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=K,n.pointShadowMatrix[_]=E.shadow.matrix,S++}n.point[_]=H,_++}else if(E.isHemisphereLight){const H=t.get(E);H.skyColor.copy(E.color).multiplyScalar(z),H.groundColor.copy(E.groundColor).multiplyScalar(z),n.hemi[m]=H,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==d||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==y||C.numPointShadows!==S||C.numSpotShadows!==x||C.numSpotMaps!==R||C.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,C.directionalLength=d,C.pointLength=_,C.spotLength=g,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=y,C.numPointShadows=S,C.numSpotShadows=x,C.numSpotMaps=R,C.numLightProbes=T,n.version=mM++)}function l(c,u){let f=0,h=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const S=c[m];if(S.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),f++}else if(S.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),d++}else if(S.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),o.identity(),s.copy(S.matrixWorld),s.premultiply(p),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function wf(r){const t=new gM(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function vM(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new wf(r),t.set(i,[a])):s>=o.length?(a=new wf(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class xM extends Po{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class SM extends Po{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const MM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function EM(r,t,e){let n=new Dp;const i=new xe,s=new xe,o=new Ne,a=new xM({depthPacking:dg}),l=new SM,c={},u=e.maxTextureSize,f={[ar]:En,[En]:ar,[bi]:bi},h=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:MM,fragmentShader:yM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new Oi;_.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ci(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sp;let m=this.type;this.render=function(A,T,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const O=r.getRenderTarget(),v=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),L=r.state;L.setBlending(er),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const z=m!==Mi&&this.type===Mi,W=m===Mi&&this.type!==Mi;for(let K=0,H=A.length;K<H;K++){const X=A[K],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const st=V.getFrameExtents();if(i.multiply(st),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/st.x),i.x=s.x*st.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/st.y),i.y=s.y*st.y,V.mapSize.y=s.y)),V.map===null||z===!0||W===!0){const at=this.type!==Mi?{minFilter:jn,magFilter:jn}:{};V.map!==null&&V.map.dispose(),V.map=new Hr(i.x,i.y,at),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const P=V.getViewportCount();for(let at=0;at<P;at++){const Bt=V.getViewport(at);o.set(s.x*Bt.x,s.y*Bt.y,s.x*Bt.z,s.y*Bt.w),L.viewport(o),V.updateMatrices(X,at),n=V.getFrustum(),x(T,C,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===Mi&&y(V,C),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(O,v,E)};function y(A,T){const C=t.update(g);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hr(i.x,i.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(T,null,C,h,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(T,null,C,d,g,null)}function S(A,T,C,O){let v=null;const E=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)v=E;else if(v=C.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const L=v.uuid,z=T.uuid;let W=c[L];W===void 0&&(W={},c[L]=W);let K=W[z];K===void 0&&(K=v.clone(),W[z]=K,T.addEventListener("dispose",R)),v=K}if(v.visible=T.visible,v.wireframe=T.wireframe,O===Mi?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:f[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const L=r.properties.get(v);L.light=C}return v}function x(A,T,C,O,v){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Mi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const z=t.update(A),W=A.material;if(Array.isArray(W)){const K=z.groups;for(let H=0,X=K.length;H<X;H++){const V=K[H],st=W[V.materialIndex];if(st&&st.visible){const P=S(A,st,O,v);A.onBeforeShadow(r,A,T,C,z,P,V),r.renderBufferDirect(C,null,z,P,A,V),A.onAfterShadow(r,A,T,C,z,P,V)}}}else if(W.visible){const K=S(A,W,O,v);A.onBeforeShadow(r,A,T,C,z,K,null),r.renderBufferDirect(C,null,z,K,A,null),A.onAfterShadow(r,A,T,C,z,K,null)}}const L=A.children;for(let z=0,W=L.length;z<W;z++)x(L[z],T,C,O,v)}function R(A){A.target.removeEventListener("dispose",R);for(const C in c){const O=c[C],v=A.target.uuid;v in O&&(O[v].dispose(),delete O[v])}}}const TM={[Rc]:Cc,[Pc]:Ic,[Dc]:Uc,[Ps]:Lc,[Cc]:Rc,[Ic]:Pc,[Uc]:Dc,[Lc]:Ps};function bM(r){function t(){let I=!1;const tt=new Ne;let $=null;const J=new Ne(0,0,0,0);return{setMask:function(lt){$!==lt&&!I&&(r.colorMask(lt,lt,lt,lt),$=lt)},setLocked:function(lt){I=lt},setClear:function(lt,ct,qt,me,Te){Te===!0&&(lt*=me,ct*=me,qt*=me),tt.set(lt,ct,qt,me),J.equals(tt)===!1&&(r.clearColor(lt,ct,qt,me),J.copy(tt))},reset:function(){I=!1,$=null,J.set(-1,0,0,0)}}}function e(){let I=!1,tt=!1,$=null,J=null,lt=null;return{setReversed:function(ct){tt=ct},setTest:function(ct){ct?ft(r.DEPTH_TEST):ot(r.DEPTH_TEST)},setMask:function(ct){$!==ct&&!I&&(r.depthMask(ct),$=ct)},setFunc:function(ct){if(tt&&(ct=TM[ct]),J!==ct){switch(ct){case Rc:r.depthFunc(r.NEVER);break;case Cc:r.depthFunc(r.ALWAYS);break;case Pc:r.depthFunc(r.LESS);break;case Ps:r.depthFunc(r.LEQUAL);break;case Dc:r.depthFunc(r.EQUAL);break;case Lc:r.depthFunc(r.GEQUAL);break;case Ic:r.depthFunc(r.GREATER);break;case Uc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ct}},setLocked:function(ct){I=ct},setClear:function(ct){lt!==ct&&(r.clearDepth(ct),lt=ct)},reset:function(){I=!1,$=null,J=null,lt=null}}}function n(){let I=!1,tt=null,$=null,J=null,lt=null,ct=null,qt=null,me=null,Te=null;return{setTest:function(ne){I||(ne?ft(r.STENCIL_TEST):ot(r.STENCIL_TEST))},setMask:function(ne){tt!==ne&&!I&&(r.stencilMask(ne),tt=ne)},setFunc:function(ne,wt,Et){($!==ne||J!==wt||lt!==Et)&&(r.stencilFunc(ne,wt,Et),$=ne,J=wt,lt=Et)},setOp:function(ne,wt,Et){(ct!==ne||qt!==wt||me!==Et)&&(r.stencilOp(ne,wt,Et),ct=ne,qt=wt,me=Et)},setLocked:function(ne){I=ne},setClear:function(ne){Te!==ne&&(r.clearStencil(ne),Te=ne)},reset:function(){I=!1,tt=null,$=null,J=null,lt=null,ct=null,qt=null,me=null,Te=null}}}const i=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,_=!1,g=null,p=null,m=null,y=null,S=null,x=null,R=null,A=new fe(0,0,0),T=0,C=!1,O=null,v=null,E=null,L=null,z=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,H=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(X)[1]),K=H>=1):X.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),K=H>=2);let V=null,st={};const P=r.getParameter(r.SCISSOR_BOX),at=r.getParameter(r.VIEWPORT),Bt=new Ne().fromArray(P),Xt=new Ne().fromArray(at);function q(I,tt,$,J){const lt=new Uint8Array(4),ct=r.createTexture();r.bindTexture(I,ct),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qt=0;qt<$;qt++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(tt,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(tt+qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return ct}const Q={};Q[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ft(r.DEPTH_TEST),s.setFunc(Ps),Ot(!1),zt(Nh),ft(r.CULL_FACE),D(er);function ft(I){c[I]!==!0&&(r.enable(I),c[I]=!0)}function ot(I){c[I]!==!1&&(r.disable(I),c[I]=!1)}function bt(I,tt){return u[I]!==tt?(r.bindFramebuffer(I,tt),u[I]=tt,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=tt),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=tt),!0):!1}function yt(I,tt){let $=h,J=!1;if(I){$=f.get(tt),$===void 0&&($=[],f.set(tt,$));const lt=I.textures;if($.length!==lt.length||$[0]!==r.COLOR_ATTACHMENT0){for(let ct=0,qt=lt.length;ct<qt;ct++)$[ct]=r.COLOR_ATTACHMENT0+ct;$.length=lt.length,J=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,J=!0);J&&r.drawBuffers($)}function Wt(I){return d!==I?(r.useProgram(I),d=I,!0):!1}const Gt={[Er]:r.FUNC_ADD,[z_]:r.FUNC_SUBTRACT,[k_]:r.FUNC_REVERSE_SUBTRACT};Gt[H_]=r.MIN,Gt[G_]=r.MAX;const Nt={[V_]:r.ZERO,[W_]:r.ONE,[X_]:r.SRC_COLOR,[Ac]:r.SRC_ALPHA,[j_]:r.SRC_ALPHA_SATURATE,[K_]:r.DST_COLOR,[q_]:r.DST_ALPHA,[Y_]:r.ONE_MINUS_SRC_COLOR,[wc]:r.ONE_MINUS_SRC_ALPHA,[Z_]:r.ONE_MINUS_DST_COLOR,[$_]:r.ONE_MINUS_DST_ALPHA,[J_]:r.CONSTANT_COLOR,[Q_]:r.ONE_MINUS_CONSTANT_COLOR,[tg]:r.CONSTANT_ALPHA,[eg]:r.ONE_MINUS_CONSTANT_ALPHA};function D(I,tt,$,J,lt,ct,qt,me,Te,ne){if(I===er){_===!0&&(ot(r.BLEND),_=!1);return}if(_===!1&&(ft(r.BLEND),_=!0),I!==B_){if(I!==g||ne!==C){if((p!==Er||S!==Er)&&(r.blendEquation(r.FUNC_ADD),p=Er,S=Er),ne)switch(I){case Ss:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bc:r.blendFunc(r.ONE,r.ONE);break;case Oh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ss:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Oh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,y=null,x=null,R=null,A.set(0,0,0),T=0,g=I,C=ne}return}lt=lt||tt,ct=ct||$,qt=qt||J,(tt!==p||lt!==S)&&(r.blendEquationSeparate(Gt[tt],Gt[lt]),p=tt,S=lt),($!==m||J!==y||ct!==x||qt!==R)&&(r.blendFuncSeparate(Nt[$],Nt[J],Nt[ct],Nt[qt]),m=$,y=J,x=ct,R=qt),(me.equals(A)===!1||Te!==T)&&(r.blendColor(me.r,me.g,me.b,Te),A.copy(me),T=Te),g=I,C=!1}function re(I,tt){I.side===bi?ot(r.CULL_FACE):ft(r.CULL_FACE);let $=I.side===En;tt&&($=!$),Ot($),I.blending===Ss&&I.transparent===!1?D(er):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),i.setMask(I.colorWrite);const J=I.stencilWrite;o.setTest(J),J&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),jt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ft(r.SAMPLE_ALPHA_TO_COVERAGE):ot(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(I){O!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),O=I)}function zt(I){I!==N_?(ft(r.CULL_FACE),I!==v&&(I===Nh?r.cullFace(r.BACK):I===O_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ot(r.CULL_FACE),v=I}function F(I){I!==E&&(K&&r.lineWidth(I),E=I)}function jt(I,tt,$){I?(ft(r.POLYGON_OFFSET_FILL),(L!==tt||z!==$)&&(r.polygonOffset(tt,$),L=tt,z=$)):ot(r.POLYGON_OFFSET_FILL)}function Dt(I){I?ft(r.SCISSOR_TEST):ot(r.SCISSOR_TEST)}function w(I){I===void 0&&(I=r.TEXTURE0+W-1),V!==I&&(r.activeTexture(I),V=I)}function M(I,tt,$){$===void 0&&(V===null?$=r.TEXTURE0+W-1:$=V);let J=st[$];J===void 0&&(J={type:void 0,texture:void 0},st[$]=J),(J.type!==I||J.texture!==tt)&&(V!==$&&(r.activeTexture($),V=$),r.bindTexture(I,tt||Q[I]),J.type=I,J.texture=tt)}function G(){const I=st[V];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ht(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(I){Bt.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Bt.copy(I))}function gt(I){Xt.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Xt.copy(I))}function Yt(I,tt){let $=l.get(tt);$===void 0&&($=new WeakMap,l.set(tt,$));let J=$.get(I);J===void 0&&(J=r.getUniformBlockIndex(tt,I.name),$.set(I,J))}function Ft(I,tt){const J=l.get(tt).get(I);a.get(tt)!==J&&(r.uniformBlockBinding(tt,J,I.__bindingPointIndex),a.set(tt,J))}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},V=null,st={},u={},f=new WeakMap,h=[],d=null,_=!1,g=null,p=null,m=null,y=null,S=null,x=null,R=null,A=new fe(0,0,0),T=0,C=!1,O=null,v=null,E=null,L=null,z=null,Bt.set(0,0,r.canvas.width,r.canvas.height),Xt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:ft,disable:ot,bindFramebuffer:bt,drawBuffers:yt,useProgram:Wt,setBlending:D,setMaterial:re,setFlipSided:Ot,setCullFace:zt,setLineWidth:F,setPolygonOffset:jt,setScissorTest:Dt,activeTexture:w,bindTexture:M,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:et,texImage2D:vt,texImage3D:xt,updateUBOMapping:Yt,uniformBlockBinding:Ft,texStorage2D:Ht,texStorage3D:nt,texSubImage2D:Z,texSubImage3D:St,compressedTexSubImage2D:it,compressedTexSubImage3D:dt,scissor:It,viewport:gt,reset:se}}function Rf(r,t,e,n){const i=AM(n);switch(e){case hp:return r*t;case dp:return r*t;case pp:return r*t*2;case mp:return r*t/i.components*i.byteLength;case Wu:return r*t/i.components*i.byteLength;case _p:return r*t*2/i.components*i.byteLength;case Xu:return r*t*2/i.components*i.byteLength;case fp:return r*t*3/i.components*i.byteLength;case oi:return r*t*4/i.components*i.byteLength;case Yu:return r*t*4/i.components*i.byteLength;case ba:case Aa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case wa:case Ra:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case kc:case Gc:return Math.max(r,16)*Math.max(t,8)/4;case zc:case Hc:return Math.max(r,8)*Math.max(t,8)/2;case Vc:case Wc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Xc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case qc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case $c:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Zc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case jc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Qc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case tu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case eu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case nu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case iu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case ru:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case su:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ca:case ou:case au:return Math.ceil(r/4)*Math.ceil(t/4)*16;case gp:case lu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case cu:case uu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function AM(r){switch(r){case Ii:case lp:return{byteLength:1,components:1};case To:case cp:case Ao:return{byteLength:2,components:1};case Gu:case Vu:return{byteLength:2,components:4};case kr:case Hu:case wi:return{byteLength:4,components:1};case up:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function wM(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,M){return d?new OffscreenCanvas(w,M):$a("canvas")}function g(w,M,G){let j=1;const et=Dt(w);if((et.width>G||et.height>G)&&(j=G/Math.max(et.width,et.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Z=Math.floor(j*et.width),St=Math.floor(j*et.height);f===void 0&&(f=_(Z,St));const it=M?_(Z,St):f;return it.width=Z,it.height=St,it.getContext("2d").drawImage(w,0,0,Z,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+St+")."),it}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),w;return w}function p(w){return w.generateMipmaps&&w.minFilter!==jn&&w.minFilter!==ri}function m(w){r.generateMipmap(w)}function y(w,M,G,j,et=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=M;if(M===r.RED&&(G===r.FLOAT&&(Z=r.R32F),G===r.HALF_FLOAT&&(Z=r.R16F),G===r.UNSIGNED_BYTE&&(Z=r.R8)),M===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.R8UI),G===r.UNSIGNED_SHORT&&(Z=r.R16UI),G===r.UNSIGNED_INT&&(Z=r.R32UI),G===r.BYTE&&(Z=r.R8I),G===r.SHORT&&(Z=r.R16I),G===r.INT&&(Z=r.R32I)),M===r.RG&&(G===r.FLOAT&&(Z=r.RG32F),G===r.HALF_FLOAT&&(Z=r.RG16F),G===r.UNSIGNED_BYTE&&(Z=r.RG8)),M===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RG8UI),G===r.UNSIGNED_SHORT&&(Z=r.RG16UI),G===r.UNSIGNED_INT&&(Z=r.RG32UI),G===r.BYTE&&(Z=r.RG8I),G===r.SHORT&&(Z=r.RG16I),G===r.INT&&(Z=r.RG32I)),M===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),G===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),G===r.UNSIGNED_INT&&(Z=r.RGB32UI),G===r.BYTE&&(Z=r.RGB8I),G===r.SHORT&&(Z=r.RGB16I),G===r.INT&&(Z=r.RGB32I)),M===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),G===r.UNSIGNED_INT&&(Z=r.RGBA32UI),G===r.BYTE&&(Z=r.RGBA8I),G===r.SHORT&&(Z=r.RGBA16I),G===r.INT&&(Z=r.RGBA32I)),M===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),M===r.RGBA){const St=et?Wa:he.getTransfer(j);G===r.FLOAT&&(Z=r.RGBA32F),G===r.HALF_FLOAT&&(Z=r.RGBA16F),G===r.UNSIGNED_BYTE&&(Z=St===Ee?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function S(w,M){let G;return w?M===null||M===kr||M===Is?G=r.DEPTH24_STENCIL8:M===wi?G=r.DEPTH32F_STENCIL8:M===To&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===kr||M===Is?G=r.DEPTH_COMPONENT24:M===wi?G=r.DEPTH_COMPONENT32F:M===To&&(G=r.DEPTH_COMPONENT16),G}function x(w,M){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==jn&&w.minFilter!==ri?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function R(w){const M=w.target;M.removeEventListener("dispose",R),T(M),M.isVideoTexture&&u.delete(M)}function A(w){const M=w.target;M.removeEventListener("dispose",A),O(M)}function T(w){const M=n.get(w);if(M.__webglInit===void 0)return;const G=w.source,j=h.get(G);if(j){const et=j[M.__cacheKey];et.usedTimes--,et.usedTimes===0&&C(w),Object.keys(j).length===0&&h.delete(G)}n.remove(w)}function C(w){const M=n.get(w);r.deleteTexture(M.__webglTexture);const G=w.source,j=h.get(G);delete j[M.__cacheKey],o.memory.textures--}function O(w){const M=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let et=0;et<M.__webglFramebuffer[j].length;et++)r.deleteFramebuffer(M.__webglFramebuffer[j][et]);else r.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)r.deleteFramebuffer(M.__webglFramebuffer[j]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=w.textures;for(let j=0,et=G.length;j<et;j++){const Z=n.get(G[j]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(G[j])}n.remove(w)}let v=0;function E(){v=0}function L(){const w=v;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),v+=1,w}function z(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function W(w,M){const G=n.get(w);if(w.isVideoTexture&&F(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(G,w,M);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+M)}function K(w,M){const G=n.get(w);if(w.version>0&&G.__version!==w.version){Xt(G,w,M);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+M)}function H(w,M){const G=n.get(w);if(w.version>0&&G.__version!==w.version){Xt(G,w,M);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+M)}function X(w,M){const G=n.get(w);if(w.version>0&&G.__version!==w.version){q(G,w,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+M)}const V={[Fc]:r.REPEAT,[wr]:r.CLAMP_TO_EDGE,[Bc]:r.MIRRORED_REPEAT},st={[jn]:r.NEAREST,[hg]:r.NEAREST_MIPMAP_NEAREST,[Xo]:r.NEAREST_MIPMAP_LINEAR,[ri]:r.LINEAR,[yl]:r.LINEAR_MIPMAP_NEAREST,[Rr]:r.LINEAR_MIPMAP_LINEAR},P={[_g]:r.NEVER,[yg]:r.ALWAYS,[gg]:r.LESS,[vp]:r.LEQUAL,[vg]:r.EQUAL,[Mg]:r.GEQUAL,[xg]:r.GREATER,[Sg]:r.NOTEQUAL};function at(w,M){if(M.type===wi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ri||M.magFilter===yl||M.magFilter===Xo||M.magFilter===Rr||M.minFilter===ri||M.minFilter===yl||M.minFilter===Xo||M.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,V[M.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,V[M.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,V[M.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,st[M.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,st[M.minFilter]),M.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,P[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===jn||M.minFilter!==Xo&&M.minFilter!==Rr||M.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Bt(w,M){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",R));const j=M.source;let et=h.get(j);et===void 0&&(et={},h.set(j,et));const Z=z(M);if(Z!==w.__cacheKey){et[Z]===void 0&&(et[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),et[Z].usedTimes++;const St=et[w.__cacheKey];St!==void 0&&(et[w.__cacheKey].usedTimes--,St.usedTimes===0&&C(M)),w.__cacheKey=Z,w.__webglTexture=et[Z].texture}return G}function Xt(w,M,G){let j=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=r.TEXTURE_3D);const et=Bt(w,M),Z=M.source;e.bindTexture(j,w.__webglTexture,r.TEXTURE0+G);const St=n.get(Z);if(Z.version!==St.__version||et===!0){e.activeTexture(r.TEXTURE0+G);const it=he.getPrimaries(he.workingColorSpace),dt=M.colorSpace===Yi?null:he.getPrimaries(M.colorSpace),Ht=M.colorSpace===Yi||it===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let nt=g(M.image,!1,i.maxTextureSize);nt=jt(M,nt);const vt=s.convert(M.format,M.colorSpace),xt=s.convert(M.type);let It=y(M.internalFormat,vt,xt,M.colorSpace,M.isVideoTexture);at(j,M);let gt;const Yt=M.mipmaps,Ft=M.isVideoTexture!==!0,se=St.__version===void 0||et===!0,I=Z.dataReady,tt=x(M,nt);if(M.isDepthTexture)It=S(M.format===Us,M.type),se&&(Ft?e.texStorage2D(r.TEXTURE_2D,1,It,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,It,nt.width,nt.height,0,vt,xt,null));else if(M.isDataTexture)if(Yt.length>0){Ft&&se&&e.texStorage2D(r.TEXTURE_2D,tt,It,Yt[0].width,Yt[0].height);for(let $=0,J=Yt.length;$<J;$++)gt=Yt[$],Ft?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,gt.width,gt.height,vt,xt,gt.data):e.texImage2D(r.TEXTURE_2D,$,It,gt.width,gt.height,0,vt,xt,gt.data);M.generateMipmaps=!1}else Ft?(se&&e.texStorage2D(r.TEXTURE_2D,tt,It,nt.width,nt.height),I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,nt.width,nt.height,vt,xt,nt.data)):e.texImage2D(r.TEXTURE_2D,0,It,nt.width,nt.height,0,vt,xt,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ft&&se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,tt,It,Yt[0].width,Yt[0].height,nt.depth);for(let $=0,J=Yt.length;$<J;$++)if(gt=Yt[$],M.format!==oi)if(vt!==null)if(Ft){if(I)if(M.layerUpdates.size>0){const lt=Rf(gt.width,gt.height,M.format,M.type);for(const ct of M.layerUpdates){const qt=gt.data.subarray(ct*lt/gt.data.BYTES_PER_ELEMENT,(ct+1)*lt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,ct,gt.width,gt.height,1,vt,qt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,gt.width,gt.height,nt.depth,vt,gt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,It,gt.width,gt.height,nt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?I&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,gt.width,gt.height,nt.depth,vt,xt,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,It,gt.width,gt.height,nt.depth,0,vt,xt,gt.data)}else{Ft&&se&&e.texStorage2D(r.TEXTURE_2D,tt,It,Yt[0].width,Yt[0].height);for(let $=0,J=Yt.length;$<J;$++)gt=Yt[$],M.format!==oi?vt!==null?Ft?I&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,gt.width,gt.height,vt,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,$,It,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,gt.width,gt.height,vt,xt,gt.data):e.texImage2D(r.TEXTURE_2D,$,It,gt.width,gt.height,0,vt,xt,gt.data)}else if(M.isDataArrayTexture)if(Ft){if(se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,tt,It,nt.width,nt.height,nt.depth),I)if(M.layerUpdates.size>0){const $=Rf(nt.width,nt.height,M.format,M.type);for(const J of M.layerUpdates){const lt=nt.data.subarray(J*$/nt.data.BYTES_PER_ELEMENT,(J+1)*$/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,vt,xt,lt)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,vt,xt,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,It,nt.width,nt.height,nt.depth,0,vt,xt,nt.data);else if(M.isData3DTexture)Ft?(se&&e.texStorage3D(r.TEXTURE_3D,tt,It,nt.width,nt.height,nt.depth),I&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,vt,xt,nt.data)):e.texImage3D(r.TEXTURE_3D,0,It,nt.width,nt.height,nt.depth,0,vt,xt,nt.data);else if(M.isFramebufferTexture){if(se)if(Ft)e.texStorage2D(r.TEXTURE_2D,tt,It,nt.width,nt.height);else{let $=nt.width,J=nt.height;for(let lt=0;lt<tt;lt++)e.texImage2D(r.TEXTURE_2D,lt,It,$,J,0,vt,xt,null),$>>=1,J>>=1}}else if(Yt.length>0){if(Ft&&se){const $=Dt(Yt[0]);e.texStorage2D(r.TEXTURE_2D,tt,It,$.width,$.height)}for(let $=0,J=Yt.length;$<J;$++)gt=Yt[$],Ft?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,vt,xt,gt):e.texImage2D(r.TEXTURE_2D,$,It,vt,xt,gt);M.generateMipmaps=!1}else if(Ft){if(se){const $=Dt(nt);e.texStorage2D(r.TEXTURE_2D,tt,It,$.width,$.height)}I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,vt,xt,nt)}else e.texImage2D(r.TEXTURE_2D,0,It,vt,xt,nt);p(M)&&m(j),St.__version=Z.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function q(w,M,G){if(M.image.length!==6)return;const j=Bt(w,M),et=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+G);const Z=n.get(et);if(et.version!==Z.__version||j===!0){e.activeTexture(r.TEXTURE0+G);const St=he.getPrimaries(he.workingColorSpace),it=M.colorSpace===Yi?null:he.getPrimaries(M.colorSpace),dt=M.colorSpace===Yi||St===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Ht=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,vt=[];for(let J=0;J<6;J++)!Ht&&!nt?vt[J]=g(M.image[J],!0,i.maxCubemapSize):vt[J]=nt?M.image[J].image:M.image[J],vt[J]=jt(M,vt[J]);const xt=vt[0],It=s.convert(M.format,M.colorSpace),gt=s.convert(M.type),Yt=y(M.internalFormat,It,gt,M.colorSpace),Ft=M.isVideoTexture!==!0,se=Z.__version===void 0||j===!0,I=et.dataReady;let tt=x(M,xt);at(r.TEXTURE_CUBE_MAP,M);let $;if(Ht){Ft&&se&&e.texStorage2D(r.TEXTURE_CUBE_MAP,tt,Yt,xt.width,xt.height);for(let J=0;J<6;J++){$=vt[J].mipmaps;for(let lt=0;lt<$.length;lt++){const ct=$[lt];M.format!==oi?It!==null?Ft?I&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,0,0,ct.width,ct.height,It,ct.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,Yt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,0,0,ct.width,ct.height,It,gt,ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,Yt,ct.width,ct.height,0,It,gt,ct.data)}}}else{if($=M.mipmaps,Ft&&se){$.length>0&&tt++;const J=Dt(vt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,tt,Yt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){Ft?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,vt[J].width,vt[J].height,It,gt,vt[J].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Yt,vt[J].width,vt[J].height,0,It,gt,vt[J].data);for(let lt=0;lt<$.length;lt++){const qt=$[lt].image[J].image;Ft?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,0,0,qt.width,qt.height,It,gt,qt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,Yt,qt.width,qt.height,0,It,gt,qt.data)}}else{Ft?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,It,gt,vt[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Yt,It,gt,vt[J]);for(let lt=0;lt<$.length;lt++){const ct=$[lt];Ft?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,0,0,It,gt,ct.image[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,Yt,It,gt,ct.image[J])}}}p(M)&&m(r.TEXTURE_CUBE_MAP),Z.__version=et.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Q(w,M,G,j,et,Z){const St=s.convert(G.format,G.colorSpace),it=s.convert(G.type),dt=y(G.internalFormat,St,it,G.colorSpace);if(!n.get(M).__hasExternalTextures){const nt=Math.max(1,M.width>>Z),vt=Math.max(1,M.height>>Z);et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,dt,nt,vt,M.depth,0,St,it,null):e.texImage2D(et,Z,dt,nt,vt,0,St,it,null)}e.bindFramebuffer(r.FRAMEBUFFER,w),zt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,et,n.get(G).__webglTexture,0,Ot(M)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,et,n.get(G).__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(w,M,G){if(r.bindRenderbuffer(r.RENDERBUFFER,w),M.depthBuffer){const j=M.depthTexture,et=j&&j.isDepthTexture?j.type:null,Z=S(M.stencilBuffer,et),St=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=Ot(M);zt(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,Z,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,it,Z,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Z,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,w)}else{const j=M.textures;for(let et=0;et<j.length;et++){const Z=j[et],St=s.convert(Z.format,Z.colorSpace),it=s.convert(Z.type),dt=y(Z.internalFormat,St,it,Z.colorSpace),Ht=Ot(M);G&&zt(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,dt,M.width,M.height):zt(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ht,dt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,dt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ot(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const j=n.get(M.depthTexture).__webglTexture,et=Ot(M);if(M.depthTexture.format===Ms)zt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(M.depthTexture.format===Us)zt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function bt(w){const M=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const j=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const et=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",et)};j.addEventListener("dispose",et),M.__depthDisposeCallback=et}M.__boundDepthTexture=j}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ot(M.__webglFramebuffer,w)}else if(G){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=r.createRenderbuffer(),ft(M.__webglDepthbuffer[j],w,!1);else{const et=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,et,r.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),ft(M.__webglDepthbuffer,w,!1);else{const j=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,et)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function yt(w,M,G){const j=n.get(w);M!==void 0&&Q(j.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&bt(w)}function Wt(w){const M=w.texture,G=n.get(w),j=n.get(M);w.addEventListener("dispose",A);const et=w.textures,Z=w.isWebGLCubeRenderTarget===!0,St=et.length>1;if(St||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=M.version,o.memory.textures++),Z){G.__webglFramebuffer=[];for(let it=0;it<6;it++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[it]=[];for(let dt=0;dt<M.mipmaps.length;dt++)G.__webglFramebuffer[it][dt]=r.createFramebuffer()}else G.__webglFramebuffer[it]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let it=0;it<M.mipmaps.length;it++)G.__webglFramebuffer[it]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(St)for(let it=0,dt=et.length;it<dt;it++){const Ht=n.get(et[it]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=r.createTexture(),o.memory.textures++)}if(w.samples>0&&zt(w)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let it=0;it<et.length;it++){const dt=et[it];G.__webglColorRenderbuffer[it]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[it]);const Ht=s.convert(dt.format,dt.colorSpace),nt=s.convert(dt.type),vt=y(dt.internalFormat,Ht,nt,dt.colorSpace,w.isXRRenderTarget===!0),xt=Ot(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,vt,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,G.__webglColorRenderbuffer[it])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),ft(G.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),at(r.TEXTURE_CUBE_MAP,M);for(let it=0;it<6;it++)if(M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)Q(G.__webglFramebuffer[it][dt],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt);else Q(G.__webglFramebuffer[it],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(M)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let it=0,dt=et.length;it<dt;it++){const Ht=et[it],nt=n.get(Ht);e.bindTexture(r.TEXTURE_2D,nt.__webglTexture),at(r.TEXTURE_2D,Ht),Q(G.__webglFramebuffer,w,Ht,r.COLOR_ATTACHMENT0+it,r.TEXTURE_2D,0),p(Ht)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let it=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(it=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(it,j.__webglTexture),at(it,M),M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)Q(G.__webglFramebuffer[dt],w,M,r.COLOR_ATTACHMENT0,it,dt);else Q(G.__webglFramebuffer,w,M,r.COLOR_ATTACHMENT0,it,0);p(M)&&m(it),e.unbindTexture()}w.depthBuffer&&bt(w)}function Gt(w){const M=w.textures;for(let G=0,j=M.length;G<j;G++){const et=M[G];if(p(et)){const Z=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,St=n.get(et).__webglTexture;e.bindTexture(Z,St),m(Z),e.unbindTexture()}}}const Nt=[],D=[];function re(w){if(w.samples>0){if(zt(w)===!1){const M=w.textures,G=w.width,j=w.height;let et=r.COLOR_BUFFER_BIT;const Z=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,St=n.get(w),it=M.length>1;if(it)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),it){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,St.__webglColorRenderbuffer[dt]);const Ht=n.get(M[dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ht,0)}r.blitFramebuffer(0,0,G,j,0,0,G,j,et,r.NEAREST),l===!0&&(Nt.length=0,D.length=0,Nt.push(r.COLOR_ATTACHMENT0+dt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Nt.push(Z),D.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),it)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,St.__webglColorRenderbuffer[dt]);const Ht=n.get(M[dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,Ht,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Ot(w){return Math.min(i.maxSamples,w.samples)}function zt(w){const M=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function F(w){const M=o.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function jt(w,M){const G=w.colorSpace,j=w.format,et=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==cr&&G!==Yi&&(he.getTransfer(G)===Ee?(j!==oi||et!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function Dt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=E,this.setTexture2D=W,this.setTexture2DArray=K,this.setTexture3D=H,this.setTextureCube=X,this.rebindTextures=yt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=zt}function RM(r,t){function e(n,i=Yi){let s;const o=he.getTransfer(i);if(n===Ii)return r.UNSIGNED_BYTE;if(n===Gu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Vu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===up)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===lp)return r.BYTE;if(n===cp)return r.SHORT;if(n===To)return r.UNSIGNED_SHORT;if(n===Hu)return r.INT;if(n===kr)return r.UNSIGNED_INT;if(n===wi)return r.FLOAT;if(n===Ao)return r.HALF_FLOAT;if(n===hp)return r.ALPHA;if(n===fp)return r.RGB;if(n===oi)return r.RGBA;if(n===dp)return r.LUMINANCE;if(n===pp)return r.LUMINANCE_ALPHA;if(n===Ms)return r.DEPTH_COMPONENT;if(n===Us)return r.DEPTH_STENCIL;if(n===mp)return r.RED;if(n===Wu)return r.RED_INTEGER;if(n===_p)return r.RG;if(n===Xu)return r.RG_INTEGER;if(n===Yu)return r.RGBA_INTEGER;if(n===ba||n===Aa||n===wa||n===Ra)if(o===Ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ba)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ba)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Aa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ra)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zc||n===kc||n===Hc||n===Gc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===zc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vc||n===Wc||n===Xc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vc||n===Wc)return o===Ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Xc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yc||n===qc||n===$c||n===Kc||n===Zc||n===jc||n===Jc||n===Qc||n===tu||n===eu||n===nu||n===iu||n===ru||n===su)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Yc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$c)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tu)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eu)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nu)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===iu)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ru)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===su)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ca||n===ou||n===au)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ca)return o===Ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ou)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===au)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gp||n===lu||n===cu||n===uu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ca)return s.COMPRESSED_RED_RGTC1_EXT;if(n===lu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class CM extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fa extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PM={type:"move"};class Jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(PM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fa;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const DM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class IM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Tn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ni({vertexShader:DM,fragmentShader:LM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ci(new nl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UM extends Os{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const g=new IM,p=e.getContextAttributes();let m=null,y=null;const S=[],x=[],R=new xe;let A=null;const T=new $n;T.layers.enable(1),T.viewport=new Ne;const C=new $n;C.layers.enable(2),C.viewport=new Ne;const O=[T,C],v=new CM;v.layers.enable(1),v.layers.enable(2);let E=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=S[q];return Q===void 0&&(Q=new Jl,S[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=S[q];return Q===void 0&&(Q=new Jl,S[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=S[q];return Q===void 0&&(Q=new Jl,S[q]=Q),Q.getHandSpace()};function z(q){const Q=x.indexOf(q.inputSource);if(Q===-1)return;const ft=S[Q];ft!==void 0&&(ft.update(q.inputSource,q.frame,c||o),ft.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",K);for(let q=0;q<S.length;q++){const Q=x[q];Q!==null&&(x[q]=null,S[q].disconnect(Q))}E=null,L=null,g.reset(),t.setRenderTarget(m),d=null,h=null,f=null,i=null,y=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",W),i.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Hr(d.framebufferWidth,d.framebufferHeight,{format:oi,type:Ii,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ft=null,ot=null;p.depth&&(ot=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?Us:Ms,ft=p.stencil?Is:kr);const bt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};f=new XRWebGLBinding(i,e),h=f.createProjectionLayer(bt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Hr(h.textureWidth,h.textureHeight,{format:oi,type:Ii,depthTexture:new Ip(h.textureWidth,h.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Xt.setContext(i),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(q){for(let Q=0;Q<q.removed.length;Q++){const ft=q.removed[Q],ot=x.indexOf(ft);ot>=0&&(x[ot]=null,S[ot].disconnect(ft))}for(let Q=0;Q<q.added.length;Q++){const ft=q.added[Q];let ot=x.indexOf(ft);if(ot===-1){for(let yt=0;yt<S.length;yt++)if(yt>=x.length){x.push(ft),ot=yt;break}else if(x[yt]===null){x[yt]=ft,ot=yt;break}if(ot===-1)break}const bt=S[ot];bt&&bt.connect(ft)}}const H=new Y,X=new Y;function V(q,Q,ft){H.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(ft.matrixWorld);const ot=H.distanceTo(X),bt=Q.projectionMatrix.elements,yt=ft.projectionMatrix.elements,Wt=bt[14]/(bt[10]-1),Gt=bt[14]/(bt[10]+1),Nt=(bt[9]+1)/bt[5],D=(bt[9]-1)/bt[5],re=(bt[8]-1)/bt[0],Ot=(yt[8]+1)/yt[0],zt=Wt*re,F=Wt*Ot,jt=ot/(-re+Ot),Dt=jt*-re;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Dt),q.translateZ(jt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),bt[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const w=Wt+jt,M=Gt+jt,G=zt-Dt,j=F+(ot-Dt),et=Nt*Gt/M*w,Z=D*Gt/M*w;q.projectionMatrix.makePerspective(G,j,et,Z,w,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function st(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Q=q.near,ft=q.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(ft=g.depthFar)),v.near=C.near=T.near=Q,v.far=C.far=T.far=ft,(E!==v.near||L!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,L=v.far);const ot=q.parent,bt=v.cameras;st(v,ot);for(let yt=0;yt<bt.length;yt++)st(bt[yt],ot);bt.length===2?V(v,T,C):v.projectionMatrix.copy(T.projectionMatrix),P(q,v,ot)};function P(q,Q,ft){ft===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(ft.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=hu*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let at=null;function Bt(q,Q){if(u=Q.getViewerPose(c||o),_=Q,u!==null){const ft=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ot=!1;ft.length!==v.cameras.length&&(v.cameras.length=0,ot=!0);for(let yt=0;yt<ft.length;yt++){const Wt=ft[yt];let Gt=null;if(d!==null)Gt=d.getViewport(Wt);else{const D=f.getViewSubImage(h,Wt);Gt=D.viewport,yt===0&&(t.setRenderTargetTextures(y,D.colorTexture,h.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(y))}let Nt=O[yt];Nt===void 0&&(Nt=new $n,Nt.layers.enable(yt),Nt.viewport=new Ne,O[yt]=Nt),Nt.matrix.fromArray(Wt.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Wt.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),yt===0&&(v.matrix.copy(Nt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ot===!0&&v.cameras.push(Nt)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const yt=f.getDepthInformation(ft[0]);yt&&yt.isValid&&yt.texture&&g.init(t,yt,i.renderState)}}for(let ft=0;ft<S.length;ft++){const ot=x[ft],bt=S[ft];ot!==null&&bt!==void 0&&bt.update(ot,Q,c||o)}at&&at(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Xt=new Lp;Xt.setAnimationLoop(Bt),this.setAnimationLoop=function(q){at=q},this.dispose=function(){}}}const gr=new Ui,NM=new Fe;function OM(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Rp(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,S,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===En&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===En&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),S=y.envMap,x=y.envMapRotation;S&&(p.envMap.value=S,gr.copy(x),gr.x*=-1,gr.y*=-1,gr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),p.envMapRotation.value.setFromMatrix4(NM.makeRotationFromEuler(gr)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===En&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function FM(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const x=S.program;n.uniformBlockBinding(y,x)}function c(y,S){let x=i[y.id];x===void 0&&(_(y),x=u(y),i[y.id]=x,y.addEventListener("dispose",p));const R=S.program;n.updateUBOMapping(y,R);const A=t.render.frame;s[y.id]!==A&&(h(y),s[y.id]=A)}function u(y){const S=f();y.__bindingPointIndex=S;const x=r.createBuffer(),R=y.__size,A=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,x),x}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const S=i[y.id],x=y.uniforms,R=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let A=0,T=x.length;A<T;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let O=0,v=C.length;O<v;O++){const E=C[O];if(d(E,A,O,R)===!0){const L=E.__offset,z=Array.isArray(E.value)?E.value:[E.value];let W=0;for(let K=0;K<z.length;K++){const H=z[K],X=g(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,L+W,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,W),W+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,E.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,S,x,R){const A=y.value,T=S+"_"+x;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const C=R[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return R[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function _(y){const S=y.uniforms;let x=0;const R=16;for(let T=0,C=S.length;T<C;T++){const O=Array.isArray(S[T])?S[T]:[S[T]];for(let v=0,E=O.length;v<E;v++){const L=O[v],z=Array.isArray(L.value)?L.value:[L.value];for(let W=0,K=z.length;W<K;W++){const H=z[W],X=g(H),V=x%R,st=V%X.boundary,P=V+st;x+=st,P!==0&&R-P<X.storage&&(x+=R-P),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=X.storage}}}const A=x%R;return A>0&&(x+=R-A),y.__size=x,y.__cache={},this}function g(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function p(y){const S=y.target;S.removeEventListener("dispose",p);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function m(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class BM{constructor(t={}){const{canvas:e=Tg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ci,this.toneMapping=nr,this.toneMappingExposure=1;const S=this;let x=!1,R=0,A=0,T=null,C=-1,O=null;const v=new Ne,E=new Ne;let L=null;const z=new fe(0);let W=0,K=e.width,H=e.height,X=1,V=null,st=null;const P=new Ne(0,0,K,H),at=new Ne(0,0,K,H);let Bt=!1;const Xt=new Dp;let q=!1,Q=!1;const ft=new Fe,ot=new Fe,bt=new Y,yt=new Ne,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Nt(){return T===null?X:1}let D=n;function re(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ku}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),D===null){const N="webgl2";if(D=re(N,b),D===null)throw re(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ot,zt,F,jt,Dt,w,M,G,j,et,Z,St,it,dt,Ht,nt,vt,xt,It,gt,Yt,Ft,se,I;function tt(){Ot=new Vx(D),Ot.init(),Ft=new RM(D,Ot),zt=new Ox(D,Ot,t,Ft),F=new bM(D),zt.reverseDepthBuffer&&F.buffers.depth.setReversed(!0),jt=new Yx(D),Dt=new uM,w=new wM(D,Ot,F,Dt,zt,Ft,jt),M=new Bx(S),G=new Gx(S),j=new Jg(D),se=new Ux(D,j),et=new Wx(D,j,jt,se),Z=new $x(D,et,j,jt),It=new qx(D,zt,w),nt=new Fx(Dt),St=new cM(S,M,G,Ot,zt,se,nt),it=new OM(S,Dt),dt=new fM,Ht=new vM(Ot),xt=new Ix(S,M,G,F,Z,h,l),vt=new EM(S,Z,zt),I=new FM(D,jt,zt,F),gt=new Nx(D,Ot,jt),Yt=new Xx(D,Ot,jt),jt.programs=St.programs,S.capabilities=zt,S.extensions=Ot,S.properties=Dt,S.renderLists=dt,S.shadowMap=vt,S.state=F,S.info=jt}tt();const $=new UM(S,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Ot.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ot.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(K,H,!1))},this.getSize=function(b){return b.set(K,H)},this.setSize=function(b,N,B=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,H=N,e.width=Math.floor(b*X),e.height=Math.floor(N*X),B===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(K*X,H*X).floor()},this.setDrawingBufferSize=function(b,N,B){K=b,H=N,X=B,e.width=Math.floor(b*B),e.height=Math.floor(N*B),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(P)},this.setViewport=function(b,N,B,k){b.isVector4?P.set(b.x,b.y,b.z,b.w):P.set(b,N,B,k),F.viewport(v.copy(P).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(at)},this.setScissor=function(b,N,B,k){b.isVector4?at.set(b.x,b.y,b.z,b.w):at.set(b,N,B,k),F.scissor(E.copy(at).multiplyScalar(X).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(b){F.setScissorTest(Bt=b)},this.setOpaqueSort=function(b){V=b},this.setTransparentSort=function(b){st=b},this.getClearColor=function(b){return b.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(b=!0,N=!0,B=!0){let k=0;if(b){let U=!1;if(T!==null){const rt=T.texture.format;U=rt===Yu||rt===Xu||rt===Wu}if(U){const rt=T.texture.type,_t=rt===Ii||rt===kr||rt===To||rt===Is||rt===Gu||rt===Vu,ht=xt.getClearColor(),ut=xt.getClearAlpha(),At=ht.r,Ut=ht.g,Tt=ht.b;_t?(d[0]=At,d[1]=Ut,d[2]=Tt,d[3]=ut,D.clearBufferuiv(D.COLOR,0,d)):(_[0]=At,_[1]=Ut,_[2]=Tt,_[3]=ut,D.clearBufferiv(D.COLOR,0,_))}else k|=D.COLOR_BUFFER_BIT}N&&(k|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),dt.dispose(),Ht.dispose(),Dt.dispose(),M.dispose(),G.dispose(),Z.dispose(),se.dispose(),I.dispose(),St.dispose(),$.dispose(),$.removeEventListener("sessionstart",le),$.removeEventListener("sessionend",pt),Lt.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const b=jt.autoReset,N=vt.enabled,B=vt.autoUpdate,k=vt.needsUpdate,U=vt.type;tt(),jt.autoReset=b,vt.enabled=N,vt.autoUpdate=B,vt.needsUpdate=k,vt.type=U}function ct(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function qt(b){const N=b.target;N.removeEventListener("dispose",qt),me(N)}function me(b){Te(b),Dt.remove(b)}function Te(b){const N=Dt.get(b).programs;N!==void 0&&(N.forEach(function(B){St.releaseProgram(B)}),b.isShaderMaterial&&St.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,B,k,U,rt){N===null&&(N=Wt);const _t=U.isMesh&&U.matrixWorld.determinant()<0,ht=de(b,N,B,k,U);F.setMaterial(k,_t);let ut=B.index,At=1;if(k.wireframe===!0){if(ut=et.getWireframeAttribute(B),ut===void 0)return;At=2}const Ut=B.drawRange,Tt=B.attributes.position;let oe=Ut.start*At,ie=(Ut.start+Ut.count)*At;rt!==null&&(oe=Math.max(oe,rt.start*At),ie=Math.min(ie,(rt.start+rt.count)*At)),ut!==null?(oe=Math.max(oe,0),ie=Math.min(ie,ut.count)):Tt!=null&&(oe=Math.max(oe,0),ie=Math.min(ie,Tt.count));const pe=ie-oe;if(pe<0||pe===1/0)return;se.setup(U,k,ht,B,ut);let Xe,Jt=gt;if(ut!==null&&(Xe=j.get(ut),Jt=Yt,Jt.setIndex(Xe)),U.isMesh)k.wireframe===!0?(F.setLineWidth(k.wireframeLinewidth*Nt()),Jt.setMode(D.LINES)):Jt.setMode(D.TRIANGLES);else if(U.isLine){let Pt=k.linewidth;Pt===void 0&&(Pt=1),F.setLineWidth(Pt*Nt()),U.isLineSegments?Jt.setMode(D.LINES):U.isLineLoop?Jt.setMode(D.LINE_LOOP):Jt.setMode(D.LINE_STRIP)}else U.isPoints?Jt.setMode(D.POINTS):U.isSprite&&Jt.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Jt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Jt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Pt=U._multiDrawStarts,je=U._multiDrawCounts,ce=U._multiDrawCount,Qn=ut?j.get(ut).bytesPerElement:1,Vr=Dt.get(k).currentProgram.getUniforms();for(let Rn=0;Rn<ce;Rn++)Vr.setValue(D,"_gl_DrawID",Rn),Jt.render(Pt[Rn]/Qn,je[Rn])}else if(U.isInstancedMesh)Jt.renderInstances(oe,pe,U.count);else if(B.isInstancedBufferGeometry){const Pt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,je=Math.min(B.instanceCount,Pt);Jt.renderInstances(oe,pe,je)}else Jt.render(oe,pe)};function ne(b,N,B){b.transparent===!0&&b.side===bi&&b.forceSinglePass===!1?(b.side=En,b.needsUpdate=!0,Le(b,N,B),b.side=ar,b.needsUpdate=!0,Le(b,N,B),b.side=bi):Le(b,N,B)}this.compile=function(b,N,B=null){B===null&&(B=b),p=Ht.get(B),p.init(N),y.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),b!==B&&b.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const k=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const rt=U.material;if(rt)if(Array.isArray(rt))for(let _t=0;_t<rt.length;_t++){const ht=rt[_t];ne(ht,B,U),k.add(ht)}else ne(rt,B,U),k.add(rt)}),y.pop(),p=null,k},this.compileAsync=function(b,N,B=null){const k=this.compile(b,N,B);return new Promise(U=>{function rt(){if(k.forEach(function(_t){Dt.get(_t).currentProgram.isReady()&&k.delete(_t)}),k.size===0){U(b);return}setTimeout(rt,10)}Ot.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let wt=null;function Et(b){wt&&wt(b)}function le(){Lt.stop()}function pt(){Lt.start()}const Lt=new Lp;Lt.setAnimationLoop(Et),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(b){wt=b,$.setAnimationLoop(b),b===null?Lt.stop():Lt.start()},$.addEventListener("sessionstart",le),$.addEventListener("sessionend",pt),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,N,T),p=Ht.get(b,y.length),p.init(N),y.push(p),ot.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Xt.setFromProjectionMatrix(ot),Q=this.localClippingEnabled,q=nt.init(this.clippingPlanes,Q),g=dt.get(b,m.length),g.init(),m.push(g),$.enabled===!0&&$.isPresenting===!0){const rt=S.xr.getDepthSensingMesh();rt!==null&&Ct(rt,N,-1/0,S.sortObjects)}Ct(b,N,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(V,st),Gt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Gt&&xt.addToRenderList(g,b),this.info.render.frame++,q===!0&&nt.beginShadows();const B=p.state.shadowsArray;vt.render(B,b,N),q===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=g.opaque,U=g.transmissive;if(p.setupLights(),N.isArrayCamera){const rt=N.cameras;if(U.length>0)for(let _t=0,ht=rt.length;_t<ht;_t++){const ut=rt[_t];De(k,U,b,ut)}Gt&&xt.render(b);for(let _t=0,ht=rt.length;_t<ht;_t++){const ut=rt[_t];kt(g,b,ut,ut.viewport)}}else U.length>0&&De(k,U,b,N),Gt&&xt.render(b),kt(g,b,N);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(S,b,N),se.resetDefaultState(),C=-1,O=null,y.pop(),y.length>0?(p=y[y.length-1],q===!0&&nt.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Ct(b,N,B,k){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Xt.intersectsSprite(b)){k&&yt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ot);const _t=Z.update(b),ht=b.material;ht.visible&&g.push(b,_t,ht,B,yt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Xt.intersectsObject(b))){const _t=Z.update(b),ht=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),yt.copy(b.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),yt.copy(_t.boundingSphere.center)),yt.applyMatrix4(b.matrixWorld).applyMatrix4(ot)),Array.isArray(ht)){const ut=_t.groups;for(let At=0,Ut=ut.length;At<Ut;At++){const Tt=ut[At],oe=ht[Tt.materialIndex];oe&&oe.visible&&g.push(b,_t,oe,B,yt.z,Tt)}}else ht.visible&&g.push(b,_t,ht,B,yt.z,null)}}const rt=b.children;for(let _t=0,ht=rt.length;_t<ht;_t++)Ct(rt[_t],N,B,k)}function kt(b,N,B,k){const U=b.opaque,rt=b.transmissive,_t=b.transparent;p.setupLightsView(B),q===!0&&nt.setGlobalState(S.clippingPlanes,B),k&&F.viewport(v.copy(k)),U.length>0&&$t(U,N,B),rt.length>0&&$t(rt,N,B),_t.length>0&&$t(_t,N,B),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function De(b,N,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Hr(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Ao:Ii,minFilter:Rr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const rt=p.state.transmissionRenderTarget[k.id],_t=k.viewport||v;rt.setSize(_t.z,_t.w);const ht=S.getRenderTarget();S.setRenderTarget(rt),S.getClearColor(z),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),Gt&&xt.render(B);const ut=S.toneMapping;S.toneMapping=nr;const At=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),q===!0&&nt.setGlobalState(S.clippingPlanes,k),$t(b,B,k),w.updateMultisampleRenderTarget(rt),w.updateRenderTargetMipmap(rt),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Tt=0,oe=N.length;Tt<oe;Tt++){const ie=N[Tt],pe=ie.object,Xe=ie.geometry,Jt=ie.material,Pt=ie.group;if(Jt.side===bi&&pe.layers.test(k.layers)){const je=Jt.side;Jt.side=En,Jt.needsUpdate=!0,be(pe,B,k,Xe,Jt,Pt),Jt.side=je,Jt.needsUpdate=!0,Ut=!0}}Ut===!0&&(w.updateMultisampleRenderTarget(rt),w.updateRenderTargetMipmap(rt))}S.setRenderTarget(ht),S.setClearColor(z,W),At!==void 0&&(k.viewport=At),S.toneMapping=ut}function $t(b,N,B){const k=N.isScene===!0?N.overrideMaterial:null;for(let U=0,rt=b.length;U<rt;U++){const _t=b[U],ht=_t.object,ut=_t.geometry,At=k===null?_t.material:k,Ut=_t.group;ht.layers.test(B.layers)&&be(ht,N,B,ut,At,Ut)}}function be(b,N,B,k,U,rt){b.onBeforeRender(S,N,B,k,U,rt),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(S,N,B,k,b,rt),U.transparent===!0&&U.side===bi&&U.forceSinglePass===!1?(U.side=En,U.needsUpdate=!0,S.renderBufferDirect(B,N,k,U,b,rt),U.side=ar,U.needsUpdate=!0,S.renderBufferDirect(B,N,k,U,b,rt),U.side=bi):S.renderBufferDirect(B,N,k,U,b,rt),b.onAfterRender(S,N,B,k,U,rt)}function Le(b,N,B){N.isScene!==!0&&(N=Wt);const k=Dt.get(b),U=p.state.lights,rt=p.state.shadowsArray,_t=U.state.version,ht=St.getParameters(b,U.state,rt,N,B),ut=St.getProgramCacheKey(ht);let At=k.programs;k.environment=b.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(b.isMeshStandardMaterial?G:M).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,At===void 0&&(b.addEventListener("dispose",qt),At=new Map,k.programs=At);let Ut=At.get(ut);if(Ut!==void 0){if(k.currentProgram===Ut&&k.lightsStateVersion===_t)return _e(b,ht),Ut}else ht.uniforms=St.getUniforms(b),b.onBeforeCompile(ht,S),Ut=St.acquireProgram(ht,ut),At.set(ut,Ut),k.uniforms=ht.uniforms;const Tt=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Tt.clippingPlanes=nt.uniform),_e(b,ht),k.needsLights=ye(b),k.lightsStateVersion=_t,k.needsLights&&(Tt.ambientLightColor.value=U.state.ambient,Tt.lightProbe.value=U.state.probe,Tt.directionalLights.value=U.state.directional,Tt.directionalLightShadows.value=U.state.directionalShadow,Tt.spotLights.value=U.state.spot,Tt.spotLightShadows.value=U.state.spotShadow,Tt.rectAreaLights.value=U.state.rectArea,Tt.ltc_1.value=U.state.rectAreaLTC1,Tt.ltc_2.value=U.state.rectAreaLTC2,Tt.pointLights.value=U.state.point,Tt.pointLightShadows.value=U.state.pointShadow,Tt.hemisphereLights.value=U.state.hemi,Tt.directionalShadowMap.value=U.state.directionalShadowMap,Tt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Tt.spotShadowMap.value=U.state.spotShadowMap,Tt.spotLightMatrix.value=U.state.spotLightMatrix,Tt.spotLightMap.value=U.state.spotLightMap,Tt.pointShadowMap.value=U.state.pointShadowMap,Tt.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Ut,k.uniformsList=null,Ut}function Me(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Da.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function _e(b,N){const B=Dt.get(b);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function de(b,N,B,k,U){N.isScene!==!0&&(N=Wt),w.resetTextureUnits();const rt=N.fog,_t=k.isMeshStandardMaterial?N.environment:null,ht=T===null?S.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:cr,ut=(k.isMeshStandardMaterial?G:M).get(k.envMap||_t),At=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ut=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Tt=!!B.morphAttributes.position,oe=!!B.morphAttributes.normal,ie=!!B.morphAttributes.color;let pe=nr;k.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(pe=S.toneMapping);const Xe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Jt=Xe!==void 0?Xe.length:0,Pt=Dt.get(k),je=p.state.lights;if(q===!0&&(Q===!0||b!==O)){const Vn=b===O&&k.id===C;nt.setState(k,b,Vn)}let ce=!1;k.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==je.state.version||Pt.outputColorSpace!==ht||U.isBatchedMesh&&Pt.batching===!1||!U.isBatchedMesh&&Pt.batching===!0||U.isBatchedMesh&&Pt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Pt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Pt.instancing===!1||!U.isInstancedMesh&&Pt.instancing===!0||U.isSkinnedMesh&&Pt.skinning===!1||!U.isSkinnedMesh&&Pt.skinning===!0||U.isInstancedMesh&&Pt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Pt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Pt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Pt.instancingMorph===!1&&U.morphTexture!==null||Pt.envMap!==ut||k.fog===!0&&Pt.fog!==rt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==nt.numPlanes||Pt.numIntersection!==nt.numIntersection)||Pt.vertexAlphas!==At||Pt.vertexTangents!==Ut||Pt.morphTargets!==Tt||Pt.morphNormals!==oe||Pt.morphColors!==ie||Pt.toneMapping!==pe||Pt.morphTargetsCount!==Jt)&&(ce=!0):(ce=!0,Pt.__version=k.version);let Qn=Pt.currentProgram;ce===!0&&(Qn=Le(k,N,U));let Vr=!1,Rn=!1,rl=!1;const Ie=Qn.getUniforms(),Fi=Pt.uniforms;if(F.useProgram(Qn.program)&&(Vr=!0,Rn=!0,rl=!0),k.id!==C&&(C=k.id,Rn=!0),Vr||O!==b){zt.reverseDepthBuffer?(ft.copy(b.projectionMatrix),Ag(ft),wg(ft),Ie.setValue(D,"projectionMatrix",ft)):Ie.setValue(D,"projectionMatrix",b.projectionMatrix),Ie.setValue(D,"viewMatrix",b.matrixWorldInverse);const Vn=Ie.map.cameraPosition;Vn!==void 0&&Vn.setValue(D,bt.setFromMatrixPosition(b.matrixWorld)),zt.logarithmicDepthBuffer&&Ie.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ie.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),O!==b&&(O=b,Rn=!0,rl=!0)}if(U.isSkinnedMesh){Ie.setOptional(D,U,"bindMatrix"),Ie.setOptional(D,U,"bindMatrixInverse");const Vn=U.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),Ie.setValue(D,"boneTexture",Vn.boneTexture,w))}U.isBatchedMesh&&(Ie.setOptional(D,U,"batchingTexture"),Ie.setValue(D,"batchingTexture",U._matricesTexture,w),Ie.setOptional(D,U,"batchingIdTexture"),Ie.setValue(D,"batchingIdTexture",U._indirectTexture,w),Ie.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&Ie.setValue(D,"batchingColorTexture",U._colorsTexture,w));const sl=B.morphAttributes;if((sl.position!==void 0||sl.normal!==void 0||sl.color!==void 0)&&It.update(U,B,Qn),(Rn||Pt.receiveShadow!==U.receiveShadow)&&(Pt.receiveShadow=U.receiveShadow,Ie.setValue(D,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Fi.envMap.value=ut,Fi.flipEnvMap.value=ut.isCubeTexture&&ut.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(Fi.envMapIntensity.value=N.environmentIntensity),Rn&&(Ie.setValue(D,"toneMappingExposure",S.toneMappingExposure),Pt.needsLights&&wn(Fi,rl),rt&&k.fog===!0&&it.refreshFogUniforms(Fi,rt),it.refreshMaterialUniforms(Fi,k,X,H,p.state.transmissionRenderTarget[b.id]),Da.upload(D,Me(Pt),Fi,w)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Da.upload(D,Me(Pt),Fi,w),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ie.setValue(D,"center",U.center),Ie.setValue(D,"modelViewMatrix",U.modelViewMatrix),Ie.setValue(D,"normalMatrix",U.normalMatrix),Ie.setValue(D,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Vn=k.uniformsGroups;for(let ol=0,Bp=Vn.length;ol<Bp;ol++){const Ku=Vn[ol];I.update(Ku,Qn),I.bind(Ku,Qn)}}return Qn}function wn(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function ye(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,N,B){Dt.get(b.texture).__webglTexture=N,Dt.get(b.depthTexture).__webglTexture=B;const k=Dt.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const B=Dt.get(b);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,B=0){T=b,R=N,A=B;let k=!0,U=null,rt=!1,_t=!1;if(b){const ut=Dt.get(b);if(ut.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(D.FRAMEBUFFER,null),k=!1;else if(ut.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(ut.__hasExternalTextures)w.rebindTextures(b,Dt.get(b.texture).__webglTexture,Dt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Tt=b.depthTexture;if(ut.__boundDepthTexture!==Tt){if(Tt!==null&&Dt.has(Tt)&&(b.width!==Tt.image.width||b.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const At=b.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(_t=!0);const Ut=Dt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ut[N])?U=Ut[N][B]:U=Ut[N],rt=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?U=Dt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ut)?U=Ut[B]:U=Ut,v.copy(b.viewport),E.copy(b.scissor),L=b.scissorTest}else v.copy(P).multiplyScalar(X).floor(),E.copy(at).multiplyScalar(X).floor(),L=Bt;if(F.bindFramebuffer(D.FRAMEBUFFER,U)&&k&&F.drawBuffers(b,U),F.viewport(v),F.scissor(E),F.setScissorTest(L),rt){const ut=Dt.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ut.__webglTexture,B)}else if(_t){const ut=Dt.get(b.texture),At=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ut.__webglTexture,B||0,At)}C=-1},this.readRenderTargetPixels=function(b,N,B,k,U,rt,_t){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=Dt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(ht=ht[_t]),ht){F.bindFramebuffer(D.FRAMEBUFFER,ht);try{const ut=b.texture,At=ut.format,Ut=ut.type;if(!zt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-k&&B>=0&&B<=b.height-U&&D.readPixels(N,B,k,U,Ft.convert(At),Ft.convert(Ut),rt)}finally{const ut=T!==null?Dt.get(T).__webglFramebuffer:null;F.bindFramebuffer(D.FRAMEBUFFER,ut)}}},this.readRenderTargetPixelsAsync=async function(b,N,B,k,U,rt,_t){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=Dt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(ht=ht[_t]),ht){const ut=b.texture,At=ut.format,Ut=ut.type;if(!zt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-k&&B>=0&&B<=b.height-U){F.bindFramebuffer(D.FRAMEBUFFER,ht);const Tt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Tt),D.bufferData(D.PIXEL_PACK_BUFFER,rt.byteLength,D.STREAM_READ),D.readPixels(N,B,k,U,Ft.convert(At),Ft.convert(Ut),0);const oe=T!==null?Dt.get(T).__webglFramebuffer:null;F.bindFramebuffer(D.FRAMEBUFFER,oe);const ie=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await bg(D,ie,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Tt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,rt),D.deleteBuffer(Tt),D.deleteSync(ie),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,B=0){b.isTexture!==!0&&(Pa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const k=Math.pow(2,-B),U=Math.floor(b.image.width*k),rt=Math.floor(b.image.height*k),_t=N!==null?N.x:0,ht=N!==null?N.y:0;w.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,_t,ht,U,rt),F.unbindTexture()},this.copyTextureToTexture=function(b,N,B=null,k=null,U=0){b.isTexture!==!0&&(Pa("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],N=arguments[2],U=arguments[3]||0,B=null);let rt,_t,ht,ut,At,Ut;B!==null?(rt=B.max.x-B.min.x,_t=B.max.y-B.min.y,ht=B.min.x,ut=B.min.y):(rt=b.image.width,_t=b.image.height,ht=0,ut=0),k!==null?(At=k.x,Ut=k.y):(At=0,Ut=0);const Tt=Ft.convert(N.format),oe=Ft.convert(N.type);w.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const ie=D.getParameter(D.UNPACK_ROW_LENGTH),pe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Xe=D.getParameter(D.UNPACK_SKIP_PIXELS),Jt=D.getParameter(D.UNPACK_SKIP_ROWS),Pt=D.getParameter(D.UNPACK_SKIP_IMAGES),je=b.isCompressedTexture?b.mipmaps[U]:b.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,je.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,je.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ht),D.pixelStorei(D.UNPACK_SKIP_ROWS,ut),b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,At,Ut,rt,_t,Tt,oe,je.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,At,Ut,je.width,je.height,Tt,je.data):D.texSubImage2D(D.TEXTURE_2D,U,At,Ut,rt,_t,Tt,oe,je),D.pixelStorei(D.UNPACK_ROW_LENGTH,ie),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Jt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pt),U===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(b,N,B=null,k=null,U=0){b.isTexture!==!0&&(Pa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,b=arguments[2],N=arguments[3],U=arguments[4]||0);let rt,_t,ht,ut,At,Ut,Tt,oe,ie;const pe=b.isCompressedTexture?b.mipmaps[U]:b.image;B!==null?(rt=B.max.x-B.min.x,_t=B.max.y-B.min.y,ht=B.max.z-B.min.z,ut=B.min.x,At=B.min.y,Ut=B.min.z):(rt=pe.width,_t=pe.height,ht=pe.depth,ut=0,At=0,Ut=0),k!==null?(Tt=k.x,oe=k.y,ie=k.z):(Tt=0,oe=0,ie=0);const Xe=Ft.convert(N.format),Jt=Ft.convert(N.type);let Pt;if(N.isData3DTexture)w.setTexture3D(N,0),Pt=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)w.setTexture2DArray(N,0),Pt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const je=D.getParameter(D.UNPACK_ROW_LENGTH),ce=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Qn=D.getParameter(D.UNPACK_SKIP_PIXELS),Vr=D.getParameter(D.UNPACK_SKIP_ROWS),Rn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ut),D.pixelStorei(D.UNPACK_SKIP_ROWS,At),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ut),b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Pt,U,Tt,oe,ie,rt,_t,ht,Xe,Jt,pe.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Pt,U,Tt,oe,ie,rt,_t,ht,Xe,pe.data):D.texSubImage3D(Pt,U,Tt,oe,ie,rt,_t,ht,Xe,Jt,pe),D.pixelStorei(D.UNPACK_ROW_LENGTH,je),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Qn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rn),U===0&&N.generateMipmaps&&D.generateMipmap(Pt),F.unbindTexture()},this.initRenderTarget=function(b){Dt.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),F.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,F.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===qu?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===tl?"display-p3":"srgb"}}class zM extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class kM extends Po{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cf=new Fe,du=new yp,da=new el,pa=new Y;class HM extends bn{constructor(t=new Oi,e=new kM){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(i),da.radius+=s,t.ray.intersectsSphere(da)===!1)return;Cf.copy(i).invert(),du.copy(t.ray).applyMatrix4(Cf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=h,g=d;_<g;_++){const p=c.getX(_);pa.fromBufferAttribute(f,p),Pf(pa,p,l,i,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let _=h,g=d;_<g;_++)pa.fromBufferAttribute(f,_),Pf(pa,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Pf(r,t,e,n,i,s,o){const a=du.distanceSqToPoint(r);if(a<e){const l=new Y;du.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ku}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ku);const GM=`
attribute float size;
attribute float alpha;
varying float vAlpha;
void main() {
  vAlpha = alpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * (300.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
}
`,VM=`
uniform vec3 color;
varying float vAlpha;
void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  if (d > 0.5) discard;
  float core = 1.0 - smoothstep(0.0, 0.12, d);
  float halo = 1.0 - smoothstep(0.0, 0.5, d);
  float a = (core * 1.0 + halo * 0.5) * vAlpha;
  gl_FragColor = vec4(color, a);
}
`;function WM(){const r=document.getElementById("hero-canvas");if(!r)return;const t=r.clientWidth||window.innerWidth,e=r.clientHeight||window.innerHeight,n=new zM,i=new $n(75,t/e,.1,200);i.position.z=20;const s=new BM({alpha:!0,antialias:!1,premultipliedAlpha:!1});s.setSize(t,e),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setClearColor(0,0),s.domElement.style.cssText="position:absolute;inset:0;background:transparent;display:block;",r.appendChild(s.domElement);const a=window.matchMedia("(max-width: 768px)").matches?40:80,l=75*Math.PI/180,c=Math.tan(l/2)*20,u=c*(t/e),f=new Float32Array(a*3),h=new Float32Array(a*4),d=new Float32Array(a*3),_=new Float32Array(a),g=new Float32Array(a);for(let x=0;x<a;x++){const R=Math.random()<.8,A=R?-c*.85:-c*.2,T=R?-c*.05:c*.05;f[x*3]=(Math.random()-.5)*u*1.9,f[x*3+1]=A+Math.random()*(T-A),f[x*3+2]=(Math.random()-.5)*10,d[x*3]=f[x*3],d[x*3+1]=f[x*3+1],d[x*3+2]=f[x*3+2],h[x*4]=Math.random()*Math.PI*2,h[x*4+1]=.15+Math.random()*.35,h[x*4+2]=Math.random()*Math.PI*2,h[x*4+3]=.1+Math.random()*.25,_[x]=1+Math.random()*1.8,g[x]=.5+Math.random()*.5}const p=new Oi;p.setAttribute("position",new kn(d,3)),p.setAttribute("size",new kn(_,1)),p.setAttribute("alpha",new kn(g,1));const m=new Ni({uniforms:{color:{value:new fe(11206468)}},vertexShader:GM,fragmentShader:VM,transparent:!0,depthWrite:!1,blending:bc});n.add(new HM(p,m));let y;function S(x){y=requestAnimationFrame(S);const R=x*.001,A=p.attributes.position.array,T=p.attributes.alpha.array;for(let C=0;C<a;C++){A[C*3]=f[C*3]+Math.sin(R*h[C*4+1]+h[C*4])*.9,A[C*3+1]=f[C*3+1]+Math.sin(R*h[C*4+3]+h[C*4+2])*.6;const O=.5+.5*Math.sin(R*2.1+h[C*4]*3.7)*Math.sin(R*1.3+h[C*4+2]*2.1);T[C]=Math.max(.05,O)}p.attributes.position.needsUpdate=!0,p.attributes.alpha.needsUpdate=!0,s.render(n,i)}return requestAnimationFrame(S),document.addEventListener("visibilitychange",()=>{document.hidden?cancelAnimationFrame(y):requestAnimationFrame(S)}),window.addEventListener("resize",()=>{const x=r.clientWidth||window.innerWidth,R=r.clientHeight||window.innerHeight;i.aspect=x/R,i.updateProjectionMatrix(),s.setSize(x,R)}),{destroy:()=>{cancelAnimationFrame(y),p.dispose(),m.dispose(),s.dispose(),r.contains(s.domElement)&&r.removeChild(s.domElement)}}}Ke.registerPlugin(Vt);function XM(){const r=document.getElementById("films"),t=document.getElementById("films-track");if(!r||!t)return;Ke.matchMedia().add("(min-width: 769px)",()=>{const n=()=>-(t.scrollWidth-window.innerWidth),i=Ke.to(t,{x:n,ease:"none",duration:1});Vt.create({trigger:r,start:"top top",end:()=>`+=${Math.abs(n())}`,pin:!0,scrub:1,animation:i,invalidateOnRefresh:!0})})}function YM(){const r=document.querySelectorAll(".gallery-item img");r.length&&(r.forEach(t=>{t.style.cursor="pointer",t.addEventListener("click",()=>qM(t.src,t.alt))}),document.addEventListener("keydown",t=>{t.key==="Escape"&&La()}))}function qM(r,t){La(!0);const e=document.createElement("div");e.className="lightbox-overlay",e.id="lightbox-overlay",e.innerHTML=`
    <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
    <img src="${r}" alt="">
  `,e.querySelector("img").alt=t,document.body.appendChild(e),document.body.style.overflow="hidden",Ke.to(e,{opacity:1,duration:.3,ease:"power2.out"}),Ke.to(e.querySelector("img"),{scale:1,duration:.4,ease:"back.out(1.2)"}),e.querySelector(".lightbox-close").addEventListener("click",()=>La()),e.addEventListener("click",n=>{n.target===e&&La()})}function La(r=!1){const t=document.getElementById("lightbox-overlay");if(t){if(document.body.style.overflow="",r){t.remove();return}Ke.to(t,{opacity:0,duration:.25,ease:"power2.in",onComplete:()=>t.remove()})}}Ke.registerPlugin(Vt);const Df=document.querySelector(".hero");Df&&(Df.style.backgroundImage="url('/enock-portfolio/assets/images/hero-bg.jpg')");I_();U_();WM();XM();YM();const Lf=document.getElementById("year");Lf&&(Lf.textContent=new Date().getFullYear());const ma=document.querySelector(".nav-toggle"),Ql=document.querySelector(".nav-links");ma&&Ql&&(ma.addEventListener("click",()=>{Ql.classList.toggle("active"),ma.classList.toggle("active")}),document.querySelectorAll(".nav-links a").forEach(r=>{r.addEventListener("click",()=>{Ql.classList.remove("active"),ma.classList.remove("active")})}));const If=document.querySelector(".navbar");If&&window.addEventListener("scroll",()=>{If.classList.toggle("scrolled",window.scrollY>50)});const tc=document.getElementById("emailBtn"),as=document.getElementById("emailDropdown");if(tc&&as){let r=!1;tc.addEventListener("click",t=>{t.stopPropagation(),r=!r,as.style.display=r?"block":"none"}),document.addEventListener("click",t=>{!tc.contains(t.target)&&!as.contains(t.target)&&(r=!1,as.style.display="none")}),as.querySelectorAll("a").forEach(t=>{t.addEventListener("click",()=>{r=!1,as.style.display="none"})})}document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",function(t){t.preventDefault();const e=document.querySelector(this.getAttribute("href"));e&&e.scrollIntoView({behavior:"smooth",block:"start"})})});
