"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{6242:function(n,e,t){t.d(e,{M:function(){return l},v:function(){return u}});var r=t(5861),a=t(7757),o=t.n(a),c=t(1243),i="a7dde24bc80070e7cc27b7a3c039ad7e",s="https://api.themoviedb.org/3/";function u(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s+e+"&api_key=".concat(i),n.next=3,c.Z.get(t);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(e),headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2RkZTI0YmM4MDA3MGU3Y2MyN2I3YTNjMDM5YWQ3ZSIsInN1YiI6IjY1NGE3MjhkZmQ0ZjgwMDEwMWI3OTU0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HLs_coIGniZz3rHJhpnbRhPNnr1FLCXJ7grh_79FRuI"}},n.next=3,c.Z.request(t);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},3535:function(n,e,t){t.d(e,{Z:function(){return i}});var r,a=t(168),o=t(5867).zo.button(r||(r=(0,a.Z)(["\n  justify-self: center;\n  min-width: 250px;\n  padding: 8px 16px;\n  border-radius: 5px;\n  background-color: orange;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: tan;\n    color: #fff;\n  }\n"]))),c=t(184),i=function(n){var e=n.onLoadMoreHandler;return(0,c.jsx)(o,{onClick:function(){return e()},children:"Load More"})}},680:function(n,e,t){t.r(e);var r=t(3433),a=t(5861),o=t(9439),c=t(7757),i=t.n(c),s=t(6242),u=t(2791),p=t(6214),l=t(8512),h=t(3535),d=t(5667),f=t(7689),x=t(1087),m=t(184);e.default=function(){var n=(0,u.useState)(!1),e=(0,o.Z)(n,2),t=e[0],c=e[1],g=(0,u.useState)(!1),b=(0,o.Z)(g,2),v=b[0],Z=b[1],j=(0,u.useState)(null),w=(0,o.Z)(j,2),k=w[0],y=w[1],I=(0,u.useState)([]),M=(0,o.Z)(I,2),J=M[0],N=M[1],S=(0,u.useState)(1),_=(0,o.Z)(S,2),z=_[0],T=_[1],Y=(0,f.TH)();(0,u.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(!0),Z(!1),n.next=5,(0,s.v)("trending/all/day?language=en-US&page=".concat(z));case 5:e=n.sent,z>1?(N((function(n){return[].concat((0,r.Z)(n),(0,r.Z)(e.results))})),Z(!0)):(N((0,r.Z)(e.results)),Z(!0)),e.results.length<=19&&Z(!1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),y(n.t0.message);case 13:return n.prev=13,c(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[z]);return(0,m.jsxs)(p.SD,{children:[null!==k&&(0,m.jsxs)("p",{className:"error-bage",children:["Oops, some error occured... Error message: ",k]}),(0,m.jsx)("h1",{children:"Trending movies"}),(0,m.jsx)(p.hc,{children:J.map((function(n){return(0,m.jsx)(p.xj,{children:(0,m.jsxs)(x.rU,{state:{from:Y},to:"/movies/".concat(n.id),children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.title,width:"300",height:"450"}),(0,m.jsx)("h3",{children:n.title||n.name||n.original_name})]},n.id)},n.id)}))}),(0,m.jsxs)("div",{className:"btnWrapper",children:[t&&(0,m.jsx)(l.Z,{}),J!==[]&&v&&(0,m.jsx)(h.Z,{onLoadMoreHandler:function(){T((function(n){return n+1})),d.NY.scrollToBottom({duration:1e3,delay:10,smooth:"linear"})}})]})]})}}}]);
//# sourceMappingURL=680.13a77922.chunk.js.map