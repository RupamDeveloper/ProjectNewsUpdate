(this.webpackJsonpnewsupdate=this.webpackJsonpnewsupdate||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(5),a=c.n(r),l=(c(11),c(4)),i=c.n(l),o=c(6),j=c(2),b=(c(13),c(0)),d=function(e){var t=e.searchText,c=Object(n.useState)(""),s=Object(j.a)(c,2),r=s[0],a=s[1];return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r)},children:[Object(b.jsx)("input",{type:"text",className:"py-1 px-2 rounded-l-lg",placeholder:"e.g. politics",onChange:function(e){return a(e.target.value)}}),Object(b.jsx)("button",{type:"submit",className:"bg-green-400 py-1 px-2 rounded-r-lg text-white",children:"Search"})]})})},u=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)("everything"),a=Object(j.a)(r,2),l=a[0],u=a[1],x=Object(n.useState)(!0),h=Object(j.a)(x,2),p=h[0],O=h[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(o.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=".concat(l,"&api-key=nQasOvtqQ0GNfXQafWM9nYcov8HmK6GU "));case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,console.log(c),s(c.response.docs),O(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[l]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"showcase",children:Object(b.jsxs)("div",{className:"overlay px-5",children:[Object(b.jsxs)("h1",{className:"text-4x1 font-bold text-white text-center mb-4 lg:text-6xl capitalize",children:["Viewing Articles About ",l]}),Object(b.jsx)(d,{searchText:function(e){return u(e)}})]})}),p?Object(b.jsx)("h1",{className:"text-center mt-20 font-bold text-6=5xl",children:"Loading ... "}):Object(b.jsx)("section",{className:" grid grid-cols-1 gap-10  px-5 pt-10 pb-20",children:c.map((function(e){var t=e.abstract,c=e.headline.main,n=e.byline.original,s=e.lead_paragraph,r=e.news_desk,a=e.section_name,l=e.web_url,i=e._id,o=e.word_count;return Object(b.jsxs)("article",{className:"bg-white py-10 px-5 rounded-lg lg:w-9/12 lg:mx-auto",children:[Object(b.jsx)("h2",{className:"font-bold text-2xl mb-5 lg:text-4xl",children:c}),Object(b.jsx)("p",{children:s}),Object(b.jsxs)("ul",{className:"my-4",children:[Object(b.jsx)("li",{children:n}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:"font-bold",children:"News Desk : "}),r]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:"font-bold",children:"Section Name :"})," ",a]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:"font-bold",children:"word Count :"})," ",o]})]}),Object(b.jsx)("p",{children:t}),Object(b.jsx)("a",{href:l,className:"underline",rel:"noreferrer",target:"_blank",children:"Web Resourse"})]},i)}))})]})};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2cd94776.chunk.js.map