"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{6242:function(e,n,t){t.d(n,{M:function(){return p},v:function(){return u}});var r=t(5861),s=t(7757),a=t.n(s),i=t(1243),c="a7dde24bc80070e7cc27b7a3c039ad7e",o="https://api.themoviedb.org/3/";function u(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o+n+"&api_key=".concat(c),e.next=3,i.Z.get(t);case 3:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(n),headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2RkZTI0YmM4MDA3MGU3Y2MyN2I3YTNjMDM5YWQ3ZSIsInN1YiI6IjY1NGE3MjhkZmQ0ZjgwMDEwMWI3OTU0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HLs_coIGniZz3rHJhpnbRhPNnr1FLCXJ7grh_79FRuI"}},e.next=3,i.Z.request(t);case 3:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},5033:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r,s,a=t(5861),i=t(9439),c=t(7757),o=t.n(c),u=t(6242),l=t(8512),p=t(2791),h=t(7689),d=t(6214),f=t(168),x=t(5867),v=x.zo.div(r||(r=(0,f.Z)(["\n  padding-top: 12px;\n  display: flex;\n  gap: 24px;\n\n  & img {\n    border-radius: 5px;\n  }\n\n  & span {\n    margin-right: 24px;\n    margin-top: 24px;\n    display: inline-block;\n  }\n"]))),m=x.zo.div(s||(s=(0,f.Z)(["\n  display: flex;\n  gap: 24px;\n"]))),j=t(184),g=(0,p.lazy)((function(){return t.e(779).then(t.bind(t,9779))})),w=(0,p.lazy)((function(){return t.e(387).then(t.bind(t,3387))})),Z=function(){var e,n,t=(0,h.UO)().movieId,r=(0,h.TH)(),s=(0,p.useRef)(null!==(e=null===(n=r.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),c=(0,p.useState)(null),f=(0,i.Z)(c,2),x=f[0],Z=f[1],b=(0,p.useState)(!1),y=(0,i.Z)(b,2),I=y[0],k=y[1],_=(0,p.useState)(null),M=(0,i.Z)(_,2),J=M[0],N=M[1];return(0,p.useEffect)((function(){var e=function(){var e=(0,a.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,(0,u.M)(t);case 4:n=e.sent,Z(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),N(e.t0.message);case 11:return e.prev=11,k(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,j.jsxs)(d.SD,{children:[(0,j.jsx)(d.Fg,{to:s.current,children:"Go back"}),null!==J&&(0,j.jsx)("p",{className:"error",children:J}),I&&(0,j.jsx)(l.Z,{}),null!==x&&(0,j.jsxs)(v,{children:[null!==x.poster_path&&(0,j.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(x.poster_path),alt:x.title,width:"300",height:"450"}),null===x.poster_path&&(0,j.jsx)("img",{src:"https://static.vecteezy.com/system/resources/previews/005/337/799/large_2x/icon-image-not-found-free-vector.jpg",alt:x.title,width:"300",height:"450"}),(0,j.jsxs)("div",{className:"movieInfo",children:[(0,j.jsxs)("h2",{children:[x.title||x.name||x.original_name," ","( ",x.release_date.slice(0,4)," )"]}),(0,j.jsxs)("p",{children:["User score: ",Math.ceil(10*x.vote_average),"%"]}),(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:x.overview}),(0,j.jsx)("h3",{children:"Genres"}),x.genres.map((function(e){var n=e.id,t=e.name;return(0,j.jsx)("span",{children:t},n)}))]})]}),(0,j.jsx)("h4",{children:"Additional information"}),(0,j.jsxs)(m,{children:[(0,j.jsx)(d.Fg,{to:"reviews",children:"Reviews"}),(0,j.jsx)(d.Fg,{to:"cast",children:"Cast"})]}),(0,j.jsx)(p.Suspense,{fallback:(0,j.jsx)(l.Z,{}),children:(0,j.jsxs)(h.Z5,{children:[(0,j.jsx)(h.AW,{path:"reviews",element:(0,j.jsx)(g,{})}),(0,j.jsx)(h.AW,{path:"cast",element:(0,j.jsx)(w,{})})]})})]})}}}]);
//# sourceMappingURL=33.cc42d66f.chunk.js.map