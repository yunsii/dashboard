(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"+ego":function(t,e,s){"use strict";s.r(e);var o=s("2w0b"),n=s.n(o),r=s("mK77"),a=s.n(r),i=s("IJ71");class c extends n.a.Component{constructor(t){super(t),this.setOctokit=(t=>{this.setState({authorised:!0,octokit:t})}),this.setUserInfo=(t=>{this.setState({userInfo:t})}),this.state=a()({},Object(i["b"])(),{setOctokit:this.setOctokit,setUserInfo:this.setUserInfo})}render(){var t=this.props.children;return n.a.createElement(i["a"].Provider,{value:this.state},t)}}var u=t=>{return n.a.createElement(c,null,t.children)};e["default"]=u},IJ71:function(t,e,s){"use strict";s.d(e,"b",function(){return c});var o=s("2w0b"),n=s.n(o),r=s("U3dD"),a=s.n(r),i=()=>!!localStorage.getItem("TOKEN"),c=()=>({authorised:i(),octokit:new a.a(i?{auth:localStorage.getItem("TOKEN")}:void 0),setOctokit:()=>{},setUserInfo:()=>{}}),u=n.a.createContext(c());u.displayName="Global ConfigContext",e["a"]=u}}]);