import{S as L,i as q,s as G,E as te,k as p,a as k,l as g,m as b,c as $,h as _,n as v,J as se,b as T,D as m,K as le,F as ae,G as ne,H as re,f as j,t as C,L as W,M as Z,N as oe,q as U,r as X,w as F,x as N,y as z,z as H,p as ce,O as B,B as ie,P as ue,Q as fe,d as de,g as he}from"../../chunks/index-c8e3f4b9.js";/* empty css                                                          */function J(r){let e,s;return{c(){e=p("div"),s=U("REBOOT"),this.h()},l(t){e=g(t,"DIV",{class:!0});var a=b(e);s=X(a,"REBOOT"),a.forEach(_),this.h()},h(){v(e,"class","top svelte-ae1tnu")},m(t,a){T(t,e,a),m(e,s)},d(t){t&&_(e)}}}function me(r){let e,s,t,a,n,i,o,c,u=r[2]&&J();const l=r[5].default,f=te(l,r,r[4],null);return{c(){e=p("section"),u&&u.c(),s=k(),t=p("div"),a=p("span"),n=k(),f&&f.c(),this.h()},l(h){e=g(h,"SECTION",{class:!0});var d=b(e);u&&u.l(d),s=$(d),t=g(d,"DIV",{class:!0});var E=b(t);a=g(E,"SPAN",{class:!0}),b(a).forEach(_),n=$(E),f&&f.l(E),E.forEach(_),d.forEach(_),this.h()},h(){v(a,"class","btn__glitch"),v(t,"class","bot svelte-ae1tnu"),se(()=>r[6].call(t)),v(e,"class",o="draggable border-flicker border-2 border-solid "+(r[3].class||"")+" svelte-ae1tnu")},m(h,d){T(h,e,d),u&&u.m(e,null),m(e,s),m(e,t),m(t,a),m(t,n),f&&f.m(t,null),i=le(t,r[6].bind(t)),c=!0},p(h,[d]){h[2]?u||(u=J(),u.c(),u.m(e,s)):u&&(u.d(1),u=null),f&&f.p&&(!c||d&16)&&ae(f,l,h,h[4],c?re(l,h[4],d,null):ne(h[4]),null),(!c||d&8&&o!==(o="draggable border-flicker border-2 border-solid "+(h[3].class||"")+" svelte-ae1tnu"))&&v(e,"class",o)},i(h){c||(j(f,h),c=!0)},o(h){C(f,h),c=!1},d(h){h&&_(e),u&&u.d(),f&&f.d(h),i()}}}function _e(r,e,s){const t=["w","h","top"];let a=W(e,t),{$$slots:n={},$$scope:i}=e,{w:o=100}=e,{h:c=100}=e,{top:u=!1}=e;function l(){o=this.clientWidth,c=this.clientHeight,s(0,o),s(1,c)}return r.$$set=f=>{e=Z(Z({},e),oe(f)),s(3,a=W(e,t)),"w"in f&&s(0,o=f.w),"h"in f&&s(1,c=f.h),"top"in f&&s(2,u=f.top),"$$scope"in f&&s(4,i=f.$$scope)},[o,c,u,a,i,n,l]}class pe extends L{constructor(e){super(),q(this,e,_e,me,G,{w:0,h:1,top:2})}}let ge={data:""},ve=r=>typeof window=="object"?((r?r.querySelector("#_goober"):window._goober)||Object.assign((r||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:r||ge,be=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ee=/\/\*[^]*?\*\/|  +/g,K=/\n+/g,x=(r,e)=>{let s="",t="",a="";for(let n in r){let i=r[n];n[0]=="@"?n[1]=="i"?s=n+" "+i+";":t+=n[1]=="f"?x(i,n):n+"{"+x(i,n[1]=="k"?"":e)+"}":typeof i=="object"?t+=x(i,e?e.replace(/([^,])+/g,o=>n.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,o):o?o+" "+c:c)):n):i!=null&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=x.p?x.p(n,i):n+":"+i+";")}return s+(e&&a?e+"{"+a+"}":a)+t},I={},ee=r=>{if(typeof r=="object"){let e="";for(let s in r)e+=s+ee(r[s]);return e}return r},ye=(r,e,s,t,a)=>{let n=ee(r),i=I[n]||(I[n]=(c=>{let u=0,l=11;for(;u<c.length;)l=101*l+c.charCodeAt(u++)>>>0;return"go"+l})(n));if(!I[i]){let c=n!==r?r:(u=>{let l,f,h=[{}];for(;l=be.exec(u.replace(Ee,""));)l[4]?h.shift():l[3]?(f=l[3].replace(K," ").trim(),h.unshift(h[0][f]=h[0][f]||{})):h[0][l[1]]=l[2].replace(K," ").trim();return h[0]})(r);I[i]=x(a?{["@keyframes "+i]:c}:c,s?"":"."+i)}let o=s&&I.g?I.g:null;return s&&(I.g=I[i]),((c,u,l,f)=>{f?u.data=u.data.replace(f,c):u.data.indexOf(c)===-1&&(u.data=l?c+u.data:u.data+c)})(I[i],e,t,o),i},ke=(r,e,s)=>r.reduce((t,a,n)=>{let i=e[n];if(i&&i.call){let o=i(s),c=o&&o.props&&o.props.className||/^go/.test(o)&&o;i=c?"."+c:o&&typeof o=="object"?o.props?"":x(o,""):o===!1?"":o}return t+a+(i??"")},"");function R(r){let e=this||{},s=r.call?r(e.p):r;return ye(s.unshift?s.raw?ke(s,[].slice.call(arguments,1),e.p):s.reduce((t,a)=>Object.assign(t,a&&a.call?a(e.p):a),{}):s,ve(e.target),e.g,e.o,e.k)}R.bind({g:1});R.bind({k:1});function $e(r){let e,s,t,a,n,i,o,c,u,l,f,h,d,E,y,S,w;return{c(){e=p("div"),s=p("div"),t=p("div"),a=p("p"),n=k(),i=p("p"),o=k(),c=p("p"),u=k(),l=p("div"),f=p("p"),h=k(),d=p("p"),E=k(),y=p("p"),S=k(),w=p("p"),this.h()},l(D){e=g(D,"DIV",{class:!0});var V=b(e);s=g(V,"DIV",{class:!0});var M=b(s);t=g(M,"DIV",{class:!0});var O=b(t);a=g(O,"P",{class:!0}),b(a).forEach(_),n=$(O),i=g(O,"P",{class:!0,style:!0}),b(i).forEach(_),o=$(O),c=g(O,"P",{class:!0}),b(c).forEach(_),u=$(O),l=g(O,"DIV",{class:!0});var P=b(l);f=g(P,"P",{class:!0}),b(f).forEach(_),h=$(P),d=g(P,"P",{class:!0}),b(d).forEach(_),E=$(P),y=g(P,"P",{class:!0}),b(y).forEach(_),S=$(P),w=g(P,"P",{class:!0}),b(w).forEach(_),P.forEach(_),O.forEach(_),M.forEach(_),V.forEach(_),this.h()},h(){v(a,"class",r[5]+" text-4xl mt-7 svelte-1mg4uic"),v(i,"class",r[6]+" text-8xl -mt-7 svelte-1mg4uic"),ce(i,"content","'sus'"),v(c,"class",B(r[2])+" svelte-1mg4uic"),v(f,"class",B(r[3])+" svelte-1mg4uic"),v(d,"class",B(r[0])+" svelte-1mg4uic"),v(y,"class","text-white "+r[1]+" svelte-1mg4uic"),v(w,"class",B(r[4])+" svelte-1mg4uic"),v(l,"class","flex font-mono text-2xl"),v(t,"class","grid justify-items-center gap-2 w-[700px] -mx-[50%]"),v(s,"class","absolute grid justify-items-center"),v(e,"class","frame text-white svelte-1mg4uic")},m(D,V){T(D,e,V),m(e,s),m(s,t),m(t,a),m(t,n),m(t,i),m(t,o),m(t,c),m(t,u),m(t,l),m(l,f),m(l,h),m(l,d),m(l,E),m(l,y),m(l,S),m(l,w)},p:ie,d(D){D&&_(e)}}}function we(r){let e,s;return e=new pe({props:{class:"p-10 m-auto",$$slots:{default:[$e]},$$scope:{ctx:r}}}),{c(){F(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){z(e,t,a),s=!0},p(t,[a]){const n={};a&512&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){s||(j(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){H(e,t)}}}const A=20;function Ie(r){const e=[0,.1,.3,.45,.5,.55,.7,.95,1].map(l=>l/2);e.push(.51),e.push(.55),e.push(.6),e.push(1);const s=(l,f)=>R`
      &:after {
        animation: ${l} 3s 1s linear 1 both;
        content: '';
        @keyframes ${l} {
          ${e.map(h=>`${Math.round(h*100)}% { content: '${f(h)}';} 
`).reduce((h,d)=>h+d)}
        }
      }
    `,t=s("loading-a",l=>l<.5?"#".repeat(A*l*2):""),a=s("loading-b",l=>l<.5?".".repeat(A-A*l*2):""),n=s("loading-c",l=>l<.5?`${Math.round(l*100*2)}%`:""),i=s("loading-d",l=>l<.5?"[":""),o=s("loading-e",l=>l<.5?"]":""),c=s("loading-f",l=>l<.5?"[ SYSTEM REBOOT ]":""),u=s("loading-g",l=>l>.7?"< WGMLGZ_ >":"");return[t,a,n,i,o,c,u]}class Q extends L{constructor(e){super(),q(this,e,Ie,we,G,{})}}function Y(r){let e,s,t,a,n,i;return s=new Q({}),n=new Q({}),{c(){e=p("div"),F(s.$$.fragment),t=k(),a=p("div"),F(n.$$.fragment),this.h()},l(o){e=g(o,"DIV",{class:!0});var c=b(e);N(s.$$.fragment,c),t=$(c),a=g(c,"DIV",{class:!0});var u=b(a);N(n.$$.fragment,u),u.forEach(_),c.forEach(_),this.h()},h(){v(a,"class","absolute top-3 left-3 opacity-10 transition hover:translate-x-1 hover:translate-y-3"),v(e,"class","grid relative h-min w-min")},m(o,c){T(o,e,c),z(s,e,null),m(e,t),m(e,a),z(n,a,null),i=!0},i(o){i||(j(s.$$.fragment,o),j(n.$$.fragment,o),i=!0)},o(o){C(s.$$.fragment,o),C(n.$$.fragment,o),i=!1},d(o){o&&_(e),H(s),H(n)}}}function De(r){let e,s,t,a,n,i,o,c,u,l,f,h,d=r[0]&&Y();return{c(){e=p("meta"),s=k(),t=p("section"),a=p("div"),n=p("div"),d&&d.c(),i=k(),o=p("div"),c=p("p"),u=U(`Разнообразный и богатый опыт управление и развитие структуры влечёт за собой интересный
        процесс внедрения модернизации существующий финансовых и административных условий. Задача
        организации, в особенности же выбранный нами инновационный путь влечёт за собой интересный
        процесс внедрения модернизации форм воздействия. Идейные соображения высшего порядка, а
        также постоянный количественный рост и сфера нашей активности требует от нас анализа
        позиции, занимаемых участниками в отношении поставленных задач. Задача организации, в
        особенности же постоянный количественный рост и сфера нашей активности играет важную роль в
        формировании поставленных обществом и правительством задач. Равным образом новая модель
        организационной деятельности в значительной степени обуславливает создание поставленных
        обществом и правительством задач. Следует отметить, что реализация намеченных плановых
        заданий обеспечивает актуальность форм воздействия. Повседневная практика показывает, что
        управление и развитие структуры позволяет оценить значение соответствующих условий
        активизации. Не вызывает сомнений, что реализация намеченных плановых заданий обеспечивает
        актуальность дальнейших направлений развития. Равным образом выбранный нами инновационный
        путь позволяет оценить значение дальнейших направлений развития. Прежде всего
        социально-экономическое развитие создаёт предпосылки качественно новых шагов для направлений
        прогрессивного развития.`),this.h()},l(E){const y=ue("svelte-8gb88t",document.head);e=g(y,"META",{name:!0,content:!0}),y.forEach(_),s=$(E),t=g(E,"SECTION",{});var S=b(t);a=g(S,"DIV",{class:!0});var w=b(a);n=g(w,"DIV",{class:!0});var D=b(n);d&&d.l(D),D.forEach(_),i=$(w),o=g(w,"DIV",{class:!0});var V=b(o);c=g(V,"P",{});var M=b(c);u=X(M,`Разнообразный и богатый опыт управление и развитие структуры влечёт за собой интересный
        процесс внедрения модернизации существующий финансовых и административных условий. Задача
        организации, в особенности же выбранный нами инновационный путь влечёт за собой интересный
        процесс внедрения модернизации форм воздействия. Идейные соображения высшего порядка, а
        также постоянный количественный рост и сфера нашей активности требует от нас анализа
        позиции, занимаемых участниками в отношении поставленных задач. Задача организации, в
        особенности же постоянный количественный рост и сфера нашей активности играет важную роль в
        формировании поставленных обществом и правительством задач. Равным образом новая модель
        организационной деятельности в значительной степени обуславливает создание поставленных
        обществом и правительством задач. Следует отметить, что реализация намеченных плановых
        заданий обеспечивает актуальность форм воздействия. Повседневная практика показывает, что
        управление и развитие структуры позволяет оценить значение соответствующих условий
        активизации. Не вызывает сомнений, что реализация намеченных плановых заданий обеспечивает
        актуальность дальнейших направлений развития. Равным образом выбранный нами инновационный
        путь позволяет оценить значение дальнейших направлений развития. Прежде всего
        социально-экономическое развитие создаёт предпосылки качественно новых шагов для направлений
        прогрессивного развития.`),M.forEach(_),V.forEach(_),w.forEach(_),S.forEach(_),this.h()},h(){document.title="Home",v(e,"name","description"),v(e,"content","Svelte demo app"),v(n,"class","grid h-screen items-center justify-center"),v(o,"class","m-9"),v(a,"class","grid")},m(E,y){m(document.head,e),T(E,s,y),T(E,t,y),m(t,a),m(a,n),d&&d.m(n,null),m(a,i),m(a,o),m(o,c),m(c,u),l=!0,f||(h=fe(n,"click",r[1]),f=!0)},p(E,[y]){E[0]?d?y&1&&j(d,1):(d=Y(),d.c(),j(d,1),d.m(n,null)):d&&(he(),C(d,1,1,()=>{d=null}),de())},i(E){l||(j(d),l=!0)},o(E){C(d),l=!1},d(E){_(e),E&&_(s),E&&_(t),d&&d.d(),f=!1,h()}}}function Oe(r,e,s){let t=!0;return[t,()=>{console.log("sus"),s(0,t=!1),setTimeout(()=>{s(0,t=!0)},0)}]}class xe extends L{constructor(e){super(),q(this,e,Oe,De,G,{})}}export{xe as default};
