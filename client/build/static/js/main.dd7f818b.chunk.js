(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(50)},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l),o=a(1),u=a(2),s=a(4),i=a(3),p=a(5),m=a(11),h=a(10),b=a(12),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("header",null,r.a.createElement("ul",null,r.a.createElement(m.b,{to:"/"},"Home"),r.a.createElement("br",null),r.a.createElement(m.b,{to:"/aboutus"},"AboutUs"),r.a.createElement("br",null),r.a.createElement(m.b,{to:"/"},"Sign Out"),r.a.createElement("br",null))))}}]),t}(n.Component),d=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("aside",null,r.a.createElement("ul",null,r.a.createElement("p",null,"TBD"),r.a.createElement("p",null,"TBD"),r.a.createElement("p",null,"TBD"),r.a.createElement("p",null,"TBD"))))}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"setData",value:function(e){this.setState(e)}},{key:"render",value:function(){return console.log(this.state),r.a.createElement(n.Fragment,null,r.a.createElement("footer",null,"This is our footer."))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(E,null),r.a.createElement("main",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h3",null,"Jack Daniel Kinne"),r.a.createElement("p",null,"description")),r.a.createElement("div",null,r.a.createElement("h3",null,"Chris Coulon"),r.a.createElement("p",null,"description")),r.a.createElement("div",null,r.a.createElement("h3",null,"Kevin Couture"),r.a.createElement("p",null,"description")),r.a.createElement("div",null,r.a.createElement("h3",null,"Promila Tamang"),r.a.createElement("p",null,"description"))),r.a.createElement(d,null)),r.a.createElement(O,null))}}]),t}(n.Component),f=a(16),v=a.n(f);var y,w,g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={isLogin:!1},a.loginClick=a.loginClick.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"loginClick",value:function(e){var t=this;e.preventDefault(),console.log(e.target.username.value),console.log(e.target.password.value);v.a.get("https://operation-breach.herokuapp.com/pg").query({username:e.target.username.value,password:e.target.password.value}).then(function(e){t.props.history.push("/search")}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(E,null),r.a.createElement("main",null,r.a.createElement("h1",null,"Welcome: Operation Breach"),r.a.createElement("p",null,"Description of our services"),r.a.createElement("form",{onSubmit:this.loginClick},r.a.createElement("label",{for:"username"},"Username: "),r.a.createElement("input",{name:"username",id:"username",type:"text",placeholder:"Username Here"}),r.a.createElement("label",{for:"password"},"Password"),r.a.createElement("input",{name:"password",id:"password",type:"password",placeholder:"Password"}),r.a.createElement("button",{type:"submit",value:"submit"},"Log In")),r.a.createElement(d,null)),r.a.createElement(O,null))}}]),t}(n.Component),k=a(13),C=a.n(k),D=a(17),S=Object(b.e)(function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).searchPwnd=a.searchPwnd.bind(Object(h.a)(a)),a.searchSocial=a.searchSocial.bind(Object(h.a)(a)),a.submitHandle=a.submitHandle.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"searchPwnd",value:function(){var e=Object(D.a)(C.a.mark(function e(t){var a=this;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"https://operation-breach.herokuapp.com/apiPwnd",v.a.get("https://operation-breach.herokuapp.com/apiPwnd").query({data:t}).then(function(e){y=e.body,console.log(y),a.props.callback({pwndResult:y})});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"searchSocial",value:function(){var e=Object(D.a)(C.a.mark(function e(t){var a=this;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"https://operation-breach.herokuapp.com/apiSocial",v.a.get("https://operation-breach.herokuapp.com/apiSocial").query({data:t}).then(function(e){w=e.body,console.log(w),a.props.callback({socialResult:w})});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"submitHandle",value:function(){var e=Object(D.a)(C.a.mark(function e(t){var a,n=this;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.email.value,e.next=4,this.searchPwnd(a);case 4:return e.next=6,this.searchSocial(a).then(function(){n.props.history.push("/results")});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(E,null),r.a.createElement("main",null,r.a.createElement("h1",null,"Welcome: Operation Breach"),r.a.createElement("p",null,"Description of our services"),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.submitHandle},r.a.createElement("label",{for:"email"},"email: "),r.a.createElement("input",{name:"email",type:"text",placeholder:"E-mail Address "}),r.a.createElement("button",{type:"submit",value:"submit"},"Search"))),r.a.createElement("h3",null,"placeholder"),r.a.createElement("p",null,"we don't sell any kind of Password"),r.a.createElement(d,null)),r.a.createElement(O,null))}}]),t}(n.Component)),P=(a(44),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"PwndResult"},r.a.createElement("h3",null,this.props.resObj.Name),r.a.createElement("p",null,this.props.resObj.Title),r.a.createElement("p",null,this.props.resObj.Domain),r.a.createElement("p",null,this.props.resObj.BreachDate),r.a.createElement("p",null,this.props.resObj.PwnCount),r.a.createElement("p",null,this.props.resObj.Description),r.a.createElement("p",null,this.props.resObj.DataClasses))}}]),t}(n.Component)),x=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"SocialResult"},r.a.createElement("h3",null,this.props.resObj.user.name),r.a.createElement("img",{src:this.props.resObj.image}),r.a.createElement("p",null,this.props.resObj.posted),r.a.createElement("p",null,this.props.resObj.url),r.a.createElement("p",null,this.props.resObj.text))}}]),t}(n.Component),B=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log("test 1",this.state),console.log("test 2",this.props),r.a.createElement(n.Fragment,null,r.a.createElement(E,null),r.a.createElement("main",null,r.a.createElement("section",{id:"resultSection"},r.a.createElement("h2",null,"PWND Results"),this.props.apiPwnd.map(function(e,t){return r.a.createElement(P,{resObj:e})}),r.a.createElement("h2",null,"Social Results"),this.props.apiSocial.posts.map(function(e,t){return r.a.createElement(x,{resObj:e})})),r.a.createElement(d,null)),r.a.createElement(O,null))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).setData=a.setData.bind(Object(h.a)(a)),a.state={},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"setData",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=this;return console.log(this.state),r.a.createElement(n.Fragment,null,r.a.createElement(b.a,{exact:!0,path:"/",component:g}),r.a.createElement(b.a,{exact:!0,path:"/search",component:function(){return r.a.createElement(S,{callback:e.setData})}}),r.a.createElement(b.a,{path:"/results",component:function(){return r.a.createElement(B,{apiPwnd:e.state.pwndResult||[],apiSocial:e.state.socialResult||{posts:[]}})}}),r.a.createElement(b.a,{exact:!0,path:"/aboutus",component:j}))}}]),t}(n.Component),R=(a(49),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={page:0,username:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(F,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.dd7f818b.chunk.js.map