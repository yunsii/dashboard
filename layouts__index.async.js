(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"+ego":function(t,e,s){"use strict";s.r(e);var r=s("q1tI"),n=s.n(r),o=s("p0pE"),a=s.n(o),i=s("3SXp"),u=s("IJ71");class c extends n.a.Component{constructor(t){super(t),this.setAuthorised=(t=>{this.setState({authorised:t})}),this.setOctokit=(t=>{this.setState({authorised:!!(null===t||void 0===t?void 0:t.auth),octokit:Object(i["a"])(t)})}),this.setUserInfo=(t=>{this.setState({userInfo:t})}),this.setUserInfoLoading=(t=>{this.setState({userInfoLoading:t})}),this.state=a()({},Object(u["b"])(),{setAuthorised:this.setAuthorised,setOctokit:this.setOctokit,setUserInfo:this.setUserInfo,setUserInfoLoading:this.setUserInfoLoading})}render(){var t=this.props.children;return n.a.createElement(u["a"].Provider,{value:this.state},t)}}var h=t=>{return n.a.createElement(c,null,t.children)};e["default"]=h},"3SXp":function(t,e,s){"use strict";s.d(e,"a",function(){return d});var r=s("d6i3"),n=s.n(r),o=s("1l/V"),a=s.n(o),i=s("3a4m"),u=s.n(i),c=s("1p3Y"),h=s.n(c);function d(t){var e=new h.a(t);return e.hook.error("request",function(){var t=a()(n.a.mark(function t(e,s){return n.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:throw console.log("error.status",e.status),401===e.status&&(localStorage.clear(),u.a.push("/")),e;case 3:case"end":return t.stop()}},t)}));return function(e,s){return t.apply(this,arguments)}}()),e}},IJ71:function(t,e,s){"use strict";s.d(e,"b",function(){return i});var r=s("q1tI"),n=s.n(r),o=s("3SXp"),a=()=>!!localStorage.getItem("TOKEN"),i=()=>({authorised:a(),octokit:Object(o["a"])(a?{auth:localStorage.getItem("TOKEN")}:void 0),setAuthorised:()=>{},setOctokit:()=>{},setUserInfo:()=>{},setUserInfoLoading:()=>{}}),u=n.a.createContext(i());u.displayName="Global ConfigContext",e["a"]=u}}]);