var t,e,r,n,o,a,i,c,u,s,l,f,h,p,d,g,v=globalThis;function y(t){return t&&t.__esModule?t.default:t}var m={},b={},w=function(t){return t&&t.Math===Math&&t};b=w("object"==typeof globalThis&&globalThis)||w("object"==typeof window&&window)||w("object"==typeof self&&self)||w("object"==typeof v&&v)||w("object"==typeof b&&b)||function(){return this}()||Function("return this")();var _={},E={};_=!(E=function(t){try{return!!t()}catch(t){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var S={},j={};j=!E(function(){var t=(function(){}).bind();return"function"!=typeof t||t.hasOwnProperty("prototype")});var O=Function.prototype.call;S=j?O.bind(O):function(){return O.apply(O,arguments)};var L={}.propertyIsEnumerable,P=Object.getOwnPropertyDescriptor;n=P&&!L.call({1:2},1)?function(t){var e=P(this,t);return!!e&&e.enumerable}:L;var $={};$=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var x={},M={},I={},T=Function.prototype,k=T.call,F=j&&T.bind.bind(k,k),N={},H=(I=j?F:function(t){return function(){return k.apply(t,arguments)}})({}.toString),A=I("".slice);N=function(t){return A(H(t),8,-1)};var R=Object,C=I("".split);M=E(function(){return!R("z").propertyIsEnumerable(0)})?function(t){return"String"===N(t)?C(t,""):R(t)}:R;var D={},q={};q=function(t){return null==t};var z=TypeError;D=function(t){if(q(t))throw new z("Can't call method on "+t);return t},x=function(t){return M(D(t))};var G={},Y={},W={},J={},U="object"==typeof document&&document.all;J=void 0===U&&void 0!==U?function(t){return"function"==typeof t||t===U}:function(t){return"function"==typeof t},W=function(t){return"object"==typeof t?null!==t:J(t)};var V={},Q={};Q=function(t,e){var r;return arguments.length<2?(r=b[t],J(r)?r:void 0):b[t]&&b[t][e]};var B={};B=I({}.isPrototypeOf);var Z={},K={},X={},tt={};tt="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var te=b.process,tr=b.Deno,tn=te&&te.versions||tr&&tr.version,to=tn&&tn.v8;to&&(a=(o=to.split("."))[0]>0&&o[0]<4?1:+(o[0]+o[1])),!a&&tt&&(!(o=tt.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=tt.match(/Chrome\/(\d+)/))&&(a=+o[1]),X=a;var ta=b.String;Z=(K=!!Object.getOwnPropertySymbols&&!E(function(){var t=Symbol("symbol detection");return!ta(t)||!(Object(t) instanceof Symbol)||!Symbol.sham&&X&&X<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ti=Object;V=Z?function(t){return"symbol"==typeof t}:function(t){var e=Q("Symbol");return J(e)&&B(e.prototype,ti(t))};var tc={},tu={},ts={},tl=String;ts=function(t){try{return tl(t)}catch(t){return"Object"}};var tf=TypeError;tu=function(t){if(J(t))return t;throw new tf(ts(t)+" is not a function")},tc=function(t,e){var r=t[e];return q(r)?void 0:tu(r)};var th={},tp=TypeError;th=function(t,e){var r,n;if("string"===e&&J(r=t.toString)&&!W(n=S(r,t))||J(r=t.valueOf)&&!W(n=S(r,t))||"string"!==e&&J(r=t.toString)&&!W(n=S(r,t)))return n;throw new tp("Can't convert object to primitive value")};var td={},tg={},tv={};tv=!1;var ty={},tm=Object.defineProperty;ty=function(t,e){try{tm(b,t,{value:e,configurable:!0,writable:!0})}catch(r){b[t]=e}return e};var tb="__core-js_shared__",tw=tg=b[tb]||ty(tb,{});(tw.versions||(tw.versions=[])).push({version:"3.37.1",mode:tv?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",source:"https://github.com/zloirock/core-js"}),td=function(t,e){return tg[t]||(tg[t]=e||{})};var t_={},tE={},tS=Object;tE=function(t){return tS(D(t))};var tj=I({}.hasOwnProperty);t_=Object.hasOwn||function(t,e){return tj(tE(t),e)};var tO={},tL=0,tP=Math.random(),t$=I(1..toString);tO=function(t){return"Symbol("+(void 0===t?"":t)+")_"+t$(++tL+tP,36)};var tx=b.Symbol,tM=td("wks"),tI=Z?tx.for||tx:tx&&tx.withoutSetter||tO,tT=TypeError,tk=(t_(tM,t="toPrimitive")||(tM[t]=K&&t_(tx,t)?tx[t]:tI("Symbol."+t)),tM[t]);Y=function(t,e){if(!W(t)||V(t))return t;var r,n=tc(t,tk);if(n){if(void 0===e&&(e="default"),r=S(n,t,e),!W(r)||V(r))return r;throw new tT("Can't convert object to primitive value")}return void 0===e&&(e="number"),th(t,e)},G=function(t){var e=Y(t,"string");return V(e)?e:e+""};var tF={},tN={},tH=b.document,tA=W(tH)&&W(tH.createElement);tN=function(t){return tA?tH.createElement(t):{}},tF=!_&&!E(function(){return 7!==Object.defineProperty(tN("div"),"a",{get:function(){return 7}}).a});var tR=Object.getOwnPropertyDescriptor;r=_?tR:function(t,e){if(t=x(t),e=G(e),tF)try{return tR(t,e)}catch(t){}if(t_(t,e))return $(!S(n,t,e),t[e])};var tC={},tD={};tD=_&&E(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var tq={},tz=String,tG=TypeError;tq=function(t){if(W(t))return t;throw new tG(tz(t)+" is not an object")};var tY=TypeError,tW=Object.defineProperty,tJ=Object.getOwnPropertyDescriptor,tU="enumerable",tV="configurable",tQ="writable";i=_?tD?function(t,e,r){if(tq(t),e=G(e),tq(r),"function"==typeof t&&"prototype"===e&&"value"in r&&tQ in r&&!r[tQ]){var n=tJ(t,e);n&&n[tQ]&&(t[e]=r.value,r={configurable:tV in r?r[tV]:n[tV],enumerable:tU in r?r[tU]:n[tU],writable:!1})}return tW(t,e,r)}:tW:function(t,e,r){if(tq(t),e=G(e),tq(r),tF)try{return tW(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new tY("Accessors not supported");return"value"in r&&(t[e]=r.value),t},tC=_?function(t,e,r){return i(t,e,$(1,r))}:function(t,e,r){return t[e]=r,t};var tB={},tZ={},tK=Function.prototype,tX=_&&Object.getOwnPropertyDescriptor,t1=t_(tK,"name")&&(!_||_&&tX(tK,"name").configurable),t0={},t2=I(Function.toString);J(tg.inspectSource)||(tg.inspectSource=function(t){return t2(t)}),t0=tg.inspectSource;var t4={},t3={},t6=b.WeakMap;t3=J(t6)&&/native code/.test(String(t6));var t7={},t9=td("keys");t7=function(t){return t9[t]||(t9[t]=tO(t))};var t8={};t8={};var t5="Object already initialized",et=b.TypeError,ee=b.WeakMap;if(t3||tg.state){var er=tg.state||(tg.state=new ee);er.get=er.get,er.has=er.has,er.set=er.set,c=function(t,e){if(er.has(t))throw new et(t5);return e.facade=t,er.set(t,e),e},u=function(t){return er.get(t)||{}},s=function(t){return er.has(t)}}else{var en=t7("state");t8[en]=!0,c=function(t,e){if(t_(t,en))throw new et(t5);return e.facade=t,tC(t,en,e),e},u=function(t){return t_(t,en)?t[en]:{}},s=function(t){return t_(t,en)}}var eo=(t4={set:c,get:u,has:s,enforce:function(t){return s(t)?u(t):c(t,{})},getterFor:function(t){return function(e){var r;if(!W(e)||(r=u(e)).type!==t)throw new et("Incompatible receiver, "+t+" required");return r}}}).enforce,ea=t4.get,ei=String,ec=Object.defineProperty,eu=I("".slice),es=I("".replace),el=I([].join),ef=_&&!E(function(){return 8!==ec(function(){},"length",{value:8}).length}),eh=String(String).split("String"),ep=tZ=function(t,e,r){"Symbol("===eu(ei(e),0,7)&&(e="["+es(ei(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!t_(t,"name")||t1&&t.name!==e)&&(_?ec(t,"name",{value:e,configurable:!0}):t.name=e),ef&&r&&t_(r,"arity")&&t.length!==r.arity&&ec(t,"length",{value:r.arity});try{r&&t_(r,"constructor")&&r.constructor?_&&ec(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=eo(t);return t_(n,"source")||(n.source=el(eh,"string"==typeof e?e:"")),t};Function.prototype.toString=ep(function(){return J(this)&&ea(this).source||t0(this)},"toString"),tB=function(t,e,r,n){n||(n={});var o=n.enumerable,a=void 0!==n.name?n.name:e;if(J(r)&&tZ(r,a,n),n.global)o?t[e]=r:ty(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:i(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var ed={},eg={},ev={},ey={},em={},eb={},ew=Math.ceil,e_=Math.floor;eb=Math.trunc||function(t){var e=+t;return(e>0?e_:ew)(e)},em=function(t){var e=+t;return e!=e||0===e?0:eb(e)};var eE=Math.max,eS=Math.min;ey=function(t,e){var r=em(t);return r<0?eE(r+e,0):eS(r,e)};var ej={},eO={},eL=Math.min;eO=function(t){var e=em(t);return e>0?eL(e,9007199254740991):0},ej=function(t){return eO(t.length)};var eP=function(t){return function(e,r,n){var o,a=x(e),i=ej(a);if(0===i)return!t&&-1;var c=ey(n,i);if(t&&r!=r){for(;i>c;)if((o=a[c++])!=o)return!0}else for(;i>c;c++)if((t||c in a)&&a[c]===r)return t||c||0;return!t&&-1}},e$={includes:eP(!0),indexOf:eP(!1)}.indexOf,ex=I([].push);ev=function(t,e){var r,n=x(t),o=0,a=[];for(r in n)!t_(t8,r)&&t_(n,r)&&ex(a,r);for(;e.length>o;)t_(n,r=e[o++])&&(~e$(a,r)||ex(a,r));return a};var eM=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(t){return ev(t,eM)},f=Object.getOwnPropertySymbols;var eI=I([].concat);eg=Q("Reflect","ownKeys")||function(t){var e=l(tq(t));return f?eI(e,f(t)):e},ed=function(t,e,n){for(var o=eg(e),a=0;a<o.length;a++){var c=o[a];t_(t,c)||n&&t_(n,c)||i(t,c,r(e,c))}};var eT={},ek=/#|\.prototype\./,eF=function(t,e){var r=eH[eN(t)];return r===eR||r!==eA&&(J(e)?E(e):!!e)},eN=eF.normalize=function(t){return String(t).replace(ek,".").toLowerCase()},eH=eF.data={},eA=eF.NATIVE="N",eR=eF.POLYFILL="P";eT=eF,m=function(t,e){var n,o,a,i,c,u=t.target,s=t.global,l=t.stat;if(n=s?b:l?b[u]||ty(u,{}):b[u]&&b[u].prototype)for(o in e){if(i=e[o],a=t.dontCallGetSet?(c=r(n,o))&&c.value:n[o],!eT(s?o:u+(l?".":"#")+o,t.forced)&&void 0!==a){if(typeof i==typeof a)continue;ed(i,a)}(t.sham||a&&a.sham)&&tC(i,"sham",!0),tB(n,o,i,t)}};var eC={},eD={},eq=Function.prototype,ez=eq.apply,eG=eq.call;eD="object"==typeof Reflect&&Reflect.apply||(j?eG.bind(ez):function(){return eG.apply(ez,arguments)});var eY={},eW={},eJ=(eW=function(t){if("Function"===N(t))return I(t)})(eW.bind);eY=function(t,e){return tu(t),void 0===e?t:j?eJ(t,e):function(){return t.apply(e,arguments)}};var eU={};eU=Q("document","documentElement");var eV={};eV=I([].slice);var eQ={},eB=TypeError;eQ=function(t,e){if(t<e)throw new eB("Not enough arguments");return t};var eZ={};eZ=/(?:ipad|iphone|ipod).*applewebkit/i.test(tt);var eK={};eK="process"===N(b.process);var eX=b.setImmediate,e1=b.clearImmediate,e0=b.process,e2=b.Dispatch,e4=b.Function,e3=b.MessageChannel,e6=b.String,e7=0,e9={},e8="onreadystatechange";E(function(){h=b.location});var e5=function(t){if(t_(e9,t)){var e=e9[t];delete e9[t],e()}},rt=function(t){return function(){e5(t)}},re=function(t){e5(t.data)},rr=function(t){b.postMessage(e6(t),h.protocol+"//"+h.host)};eX&&e1||(eX=function(t){eQ(arguments.length,1);var e=J(t)?t:e4(t),r=eV(arguments,1);return e9[++e7]=function(){eD(e,void 0,r)},p(e7),e7},e1=function(t){delete e9[t]},eK?p=function(t){e0.nextTick(rt(t))}:e2&&e2.now?p=function(t){e2.now(rt(t))}:e3&&!eZ?(g=(d=new e3).port2,d.port1.onmessage=re,p=eY(g.postMessage,g)):b.addEventListener&&J(b.postMessage)&&!b.importScripts&&h&&"file:"!==h.protocol&&!E(rr)?(p=rr,b.addEventListener("message",re,!1)):p=e8 in tN("script")?function(t){eU.appendChild(tN("script"))[e8]=function(){eU.removeChild(this),e5(t)}}:function(t){setTimeout(rt(t),0)});var rn=(eC={set:eX,clear:e1}).clear;m({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==rn},{clearImmediate:rn});var ro=eC.set,ra={},ri={};ri="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rc=b.Function,ru=/MSIE .\./.test(tt)||ri&&((e=b.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));ra=function(t,e){var r=e?2:1;return ru?function(n,o){var a=eQ(arguments.length,1)>r,i=J(n)?n:rc(n),c=a?eV(arguments,r):[],u=a?function(){eD(i,this,c)}:i;return e?t(u,o):t(u)}:t};var rs=b.setImmediate?ra(ro,!1):ro;m({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==rs},{setImmediate:rs});const rl="https://api.themoviedb.org/3/",rf="https://image.tmdb.org/t/p/original",rh="en-US",rp={method:"GET",headers:{accept:"application/json",Authorization:"bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5Nzk1OWNmMzM0N2MxYmVjZmU0ODQ3NzNmODliNCIsInN1YiI6IjY2NjdiNzE2OTE0Yjg4OTA3YWU5ZWZkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TVs4E2FC6H2_ax1pesVaqnQn8AkrY2GNMLdb63JSFmQ"}},rd=async function(t){try{let e=fetch(t,rp),r=await Promise.race([e,new Promise(function(t,e){setTimeout(function(){e(Error("Request took too long! Timeout after 10 second"))},1e4)})]),n=await r.json();if(!r.ok)throw Error(`${n.message} (${r.status})`);return n}catch(t){throw t}},rg={movie:{},search:{query:"",results:[],nextPage:1,page:1,resultsPerPage:10}},rv=async function(t){try{if(rg.movie.id===t)return;let e=await rd(`${rl}movie/${t}?language=${rh}`);rg.movie={id:e.id,title:e.original_title,overview:e.overview,image:e.poster_path,runtime:e.runtime,releaseDate:e.release_date,genres:e.genres,tagline:e.tagline}}catch(t){throw console.error(`${t} \u{1F622} \u{1F622} \u{1F622} \u{1F622}`),t}},ry=async function(t,e=1){try{rg.search.query!==t&&(rg.search.query=t,rg.search.results=[],rg.search.page=1,rg.search.nextPage=1);let r=await rd(`${rl}search/movie?query=${t}&include_adult=false&language=${rh}&page=${e}`);console.log(r),rg.search.results.push(...r.results.map(t=>({id:t.id,title:t.original_title,overview:t.overview,image:t.poster_path,backdrop:t.backdrop_path,genreID:t.genre_ids,releaseDate:t.release_date}))),rg.search.nextPage=r.page<r.total_pages?r.page+1:null}catch(t){throw console.error(`${t} \u{1F622} \u{1F622} \u{1F622} \u{1F622}`),t}};async function rm(t){for(rg.search.results=[],rg.search.page=1,rg.search.nextPage=1;rg.search.nextPage;)await ry(t,rg.search.nextPage)}const rb=function(t=rg.search.page){rg.search.page=t;let e=(t-1)*rg.search.resultsPerPage,r=t*rg.search.resultsPerPage;return rg.search.results.slice(e,r)};var rw={};rw=new URL("popcorn.98f291c0.png",import.meta.url).toString();var r_={};r_=new URL("spilled-popcorn.c0405803.png",import.meta.url).toString();class rE{_data;render(t){if(!t||Array.isArray(t)&&0===t.length)return this.renderError();this._data=t;let e=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let t=`
    <div class = "spinner">    
      <img src="${y(rw)}" alt="">
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){let e=`
    <div class="error">
         <img src="${y(r_)}">
      <p>${t}</p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderMessage(t=this._message){let e=`
    <div class="messge">
      <div>
        <svg>
          <use href="src/img/icons.svg#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${t}</p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}}class rS extends rE{_parentElement=document.querySelector(".movieView");_errorMessage="Could not find that movie. Please try another one.";_message="";addHandlerRender(t){["hashchange","load"].forEach(e=>window.addEventListener(e,t))}_generateMarkup(){return`
    <h2>${this._data.title}</h2>
    <p>${this._data.tagline}</p>
    <img class="movieImage" src="${rf}${this._data.image}" alt="${this._data.title}" />
    <p>OVERVIEW: ${this._data.overview}</p>
    <p>ID: ${this._data.id}</p>
    <p>RELEASE DATE: ${this._data.releaseDate}</p>
    <p>RUNTIME: ${this._data.runtime} minutes</p>
    <p>GENRES: ${this._data.genres.map(t=>`   ${t.name}`).join(",   ")}</p>
    `}}var rj=new rS;class rO{_parentElement=document.querySelector(".search");getQuery(){let t=this._parentElement.querySelector(".search__field").value;return this._clearInput(),t}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(t){this._parentElement.addEventListener("submit",function(e){e.preventDefault(),t()})}}var rL=new rO;class rP extends rE{_parentElement=document.querySelector(".results");_errorMessage="No movies found. Please try again.";_message="";constructor(){super(),this._addScrollHandler()}_addScrollHandler(){window.addEventListener("scroll",async()=>{document.documentElement.scrollTop+document.documentElement.clientHeight>=document.documentElement.scrollHeight-10&&this._handlerLoadMore&&await this._handlerLoadMore()})}_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(t){return`
      <li class="m-1 p-0">
         
            <a class="" href="#${t.id}">
            
              <img class="m-0 max-w-full h-auto transition-shadow tablet:w-64 laptop:w-128" src="${rf}${t.image}" alt="${t.title}" /> 
           
              <section class="my-0 ml-1 text-2xl content-center">
                  <h4 class="">${t.title}</h4>
                  <p class="">${t.releaseDate}</p>
              </section>
            </a>
          
        </li>
    `}addHandlerLoadMore(t){this._handlerLoadMore=t}}var r$=new rP,rx={};rx=new URL("icons.c14567a0.svg",import.meta.url).toString();class rM extends rE{_parentElement=document.querySelector(".pagination");addHandlerClick(t){this._parentElement.addEventListener("click",function(e){let r=e.target.closest(".btn--inline");r&&t(+r.dataset.goto)})}_generateMarkup(){let t=this._data.page,e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===t&&e>1?`
        <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
          <span>Page ${t+1}</span>
          <svg class="search__icon">
          <use href="./img/Right_Arrow.png"></use>
          </svg>
        </button>

    `:1===t&&e>1?`
        <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
          <span>Page ${t+1}</span>
          <svg class="search__icon">
            <use href="${y(rx)}#icon-arrow-right"></use>
          </svg>
        </button>
    `:t===e&&e>1?`
        <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${y(rx)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${t-1}</span>
        </button>
    `:t<e?`
        <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${y(rx)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${t-1}</span>
        </button>
        <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
        <span>Page ${t+1}</span>
        <svg class="search__icon">
          <use href="${y(rx)}#icon-arrow-right"></use>
        </svg>
      </button>
    `:""}}var rI=new rM,rT=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,r,n,a){var i,c,u=Object.create((r&&r.prototype instanceof v?r:v).prototype);return o(u,"_invoke",{value:(i=new P(a||[]),c=h,function(r,o){if(c===p)throw Error("Generator is already running");if(c===d){if("throw"===r)throw o;return{value:e,done:!0}}for(i.method=r,i.arg=o;;){var a=i.delegate;if(a){var u=function t(r,n){var o=n.method,a=r.iterator[o];if(a===e)return n.delegate=null,"throw"===o&&r.iterator.return&&(n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),g;var i=f(a,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var c=i.arg;return c?c.done?(n[r.resultName]=c.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(a,i);if(u){if(u===g)continue;return u}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(c===h)throw c=d,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);c=p;var s=f(t,n,i);if("normal"===s.type){if(c=i.done?d:"suspendedYield",s.arg===g)continue;return{value:s.arg,done:i.done}}"throw"===s.type&&(c=d,i.method="throw",i.arg=s.arg)}})}),u}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h="suspendedStart",p="executing",d="completed",g={};function v(){}function y(){}function m(){}var b={};s(b,i,function(){return this});var w=Object.getPrototypeOf,_=w&&w(w($([])));_&&_!==r&&n.call(_,i)&&(b=_);var E=m.prototype=v.prototype=Object.create(b);function S(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function j(t,e){var r;o(this,"_invoke",{value:function(o,a){function i(){return new e(function(r,i){!function r(o,a,i,c){var u=f(t[o],t,a);if("throw"===u.type)c(u.arg);else{var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(l).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}}(o,a,r,i)})}return r=r?r.then(i,i):i()}})}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function $(t){if(null!=t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw TypeError(typeof t+" is not iterable")}return y.prototype=m,o(E,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:y,configurable:!0}),y.displayName=s(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},S(j.prototype),s(j.prototype,c,function(){return this}),t.AsyncIterator=j,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new j(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},S(E),s(E,u,"Generator"),s(E,i,function(){return this}),s(E,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=$,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else if(s){if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return(i.type=t,i.arg=e,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:$(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}({});try{regeneratorRuntime=rT}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=rT:Function("r","regeneratorRuntime = r")(rT)}const rk=async function(){try{let t=window.location.hash.slice(1);if(!t)return;rj.renderSpinner(),await rv(t),rj.render(rg.movie)}catch(t){rj.renderError()}},rF=async function(){try{r$.renderSpinner();let t=rL.getQuery();if(!t)return;await rm(t),r$.render(rb()),rI.render(rg.search)}catch(t){console.log(t)}},rN=async function(){try{await rm(rg.search.query,rg.search.nextPage),r$.render(rg.search.results)}catch(t){console.log(t)}};rj.addHandlerRender(rk),rL.addHandlerSearch(rF),r$.addHandlerLoadMore(rN),rI.addHandlerClick(function(t){r$.render(rb(t)),rI.render(rg.search)});
//# sourceMappingURL=index.d885ed4b.js.map
