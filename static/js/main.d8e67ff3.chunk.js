(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{281:function(e,t,a){},283:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(86),l=a.n(r),i=a(12),c=a(1),s=a(13),p=Object(c.e)("Landing",{Wrapper:{_size:"100%",_flex:["column","left","top"]},IntroWrapper:{_flex:["column","left","top"],maxWidth:"650px","@media screen and (max-width: 600px)":{width:"100%"}},Title:{_el:"h1",_font:["48px","normal","$bold"],marginBottom:"20px","@media screen and (max-width: 600px)":{_font:["36px","normal","$bold"]}},Subtitle:{_el:"h3",_font:["24px","normal","$regular"],"@media screen and (max-width: 600px)":{_font:["20px","normal","$regular"]}},Link:{_el:"a",_font:["24px","normal","$bold"],color:function(e){return"".concat(e("color"))},"&:hover":{textDecoration:"underline",cursor:"pointer"},underline:{textDecoration:"underline",marginBottom:"23px"},"@media screen and (max-width: 600px)":{_font:["20px","normal","$bold"]}},ContentWrapper:{_flex:["row","left","top"],width:"100%",marginTop:"40px","@media screen and (max-width: 600px)":{_flex:["column","left","top"]}},Column:{_flex:["column","left","top"],maxWidth:"550px","&:first-child":{marginRight:"40px"},"@media screen and (max-width: 600px)":{"&:first-child":{marginRight:"0px"}}},List:{_el:"ul"},Item:{_flex:["column","left","top"],marginBottom:"15px"},ItemTitle:{_font:["20px","normal","$medium"],marginBottom:"15px"},ItemText:{_font:["16px","26px","$regular"]}});function m(){return o.a.createElement(p.Wrapper,null,o.a.createElement(p.IntroWrapper,null,o.a.createElement(p.Title,null,"Hi, I'm Petar Dyakov a.k.a Decho \ud83d\udc4b"),o.a.createElement(p.Subtitle,null,"I\u2019m a software developer currently living in Sofia, Bulgaria \ud83c\udde7\ud83c\uddec Currently working as Chief Consistency Officer at"," ",o.a.createElement(p.Link,{href:"https://swipesapp.com",color:"green"},"Swipes"),". You can follow me on"," ",o.a.createElement(p.Link,{href:"https://twitter.com/petardyakov",color:"#55acee"},"Twitter"),", check out my messy code on"," ",o.a.createElement(p.Link,{href:"https://github.com/PepoDyakov",color:"black"},"GitHub")," ","or double-tap my photos on"," ",o.a.createElement(p.Link,{href:"https://www.instagram.com/pepodyakov/",color:"#c13584"},"Instagram"),".")),o.a.createElement(p.ContentWrapper,null,o.a.createElement(p.Column,null,o.a.createElement(p.Title,null,"Projects I'm working on"),o.a.createElement(p.List,null,o.a.createElement(p.Item,null,o.a.createElement(p.ItemTitle,null,"Dojohunt"),o.a.createElement(p.ItemText,null,"Improving the way how martial artists discover gyms that are best suitable for them.")),o.a.createElement(p.Item,null,o.a.createElement(p.ItemTitle,null,"we-are.cc"),o.a.createElement(p.ItemText,null,"We form a place where a broad spectrum \ud83c\udf08 of creatives share their personal and professional experiences \u270c\ufe0f")),o.a.createElement(p.Item,null,o.a.createElement(p.ItemTitle,null,"This place"),o.a.createElement(p.ItemText,null,"A spot where I share my thoughts on different things.")))),o.a.createElement(p.Column,null,o.a.createElement(p.Title,null,"Have worked on"),o.a.createElement(p.Item,null,o.a.createElement(p.Link,{href:"https://legalpad.io",underline:!0},"legalpad.io"),o.a.createElement(p.Link,{href:"https://jd.dk",underline:!0},"jd.dk"),o.a.createElement(p.Link,{href:"https://swipesapp.com",underline:!0},"swipesapp.com")))))}var u=a(29),d=a(96),g=a(97),f=Object(c.e)("Blog",{Wrapper:{width:"100%"},LinkWrapper:{_flex:["column","left","top"],width:"100%",marginBottom:"12px","@media screen and (max-width: 600px)":{marginBottom:"0"}},Link:{_el:i.b,width:"100%"},Title:{_el:"h1",_textStyle:"H1",width:"100%",height:"48px",fontWeight:"$bold",textTransform:"uppercase",backgroundColor:"white",zIndex:"5",wordBreak:"break-word","&:hover":{textDecoration:"underline",cursor:"pointer"},"@media screen and (max-width: 600px)":{_textStyle:"H3",fontWeight:"$bold",height:"30px"}}}),x=a(282).createClient({space:"z8eq0o5z2qn0",accessToken:"b699bc16154bedc7c79c05758fd97fc1c37d179c7e9b39f64bf6912c5465113a"});function b(e){var t=Object(n.useState)([]),a=Object(g.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)(function(){x.getEntries({order:"sys.createdAt"}).then(function(e){l(Object(d.a)(e.items))})},[]),0===r.length?o.a.createElement(f.Wrapper,null,o.a.createElement(f.Title,null,"Loading...")):o.a.createElement(f.Wrapper,null,r.map(function(e,t){return o.a.createElement(f.Link,{to:{pathname:"test".concat(e.fields.path),state:Object(u.a)({},e.fields)},key:t},o.a.createElement(f.LinkWrapper,null,o.a.createElement(f.Title,null,e.fields.title)))}))}var h=a(94),k=a.n(h),w=Object(c.e)("Post",{Wrapper:{_flex:["column","left","top"],maxWidth:"740px"},Header:{_flex:["column","left","top"]},Title:{_el:"h1",_textStyle:"title",fontWeight:"$bold",marginBottom:"12px",textTransform:"lowercase",wordBreak:"break-word","@media screen and (max-width: 600px)":{_textStyle:"H2",fontWeight:"$bold"}},Subtitle:{_el:"h3",_textStyle:"H3",fontWeight:"$medium",marginBottom:"24px",wordBreak:"break-word","@media screen and (max-width: 600px)":{_textStyle:"H3"}},Date:{_el:"p",_textStyle:"H3",fontWeight:"$bold",marginBottom:"24px"}});function y(e){var t=e.location.state;return o.a.createElement(w.Wrapper,null,o.a.createElement(w.Title,null,t.title),o.a.createElement(w.Subtitle,null,t.subtitle),o.a.createElement(k.a,{source:t.content,className:"blog-post"}),o.a.createElement(w.Date,null,t.date))}var _=Object(c.e)("NotFound",{Wrapper:{_size:"100%",_flex:["column","center","center"]},Title:{_el:"h1",_textStyle:"title",fontWeight:"$bold",marginBottom:"48px"},Image:{_el:"img",width:"500px"}});function E(){return o.a.createElement(_.Wrapper,null,o.a.createElement(_.Title,null,"These is not the page you're looking for - Obi Wan Kenobi"),o.a.createElement(_.Image,{src:"https://media.giphy.com/media/IHOOMIiw5v9VS/giphy.gif"}))}var I=a(95),j=a.n(I),v=Object(c.e)("App",{Wrapper:{_size:["calc(100% - 120px)","100%"],_flex:["column","left","top"],overflowX:"hidden",margin:"0 60px",minHeight:"100vh","@media screen and (max-width: 600px)":{_size:["calc(100% - 60px)","100%"],margin:"0 30px"}},NavBar:{_el:"nav",_flex:["row","left","center"],_size:["100%","70px"],flex:"none"},Logo:{_el:"img",width:"80px"},Link:{_el:i.c,_textStyle:"body","&:first-child":{marginRight:"auto"},"&:not(:first-child)":{marginRight:"18px"},"&:hover":{color:"grey"}}});Object(c.b)({regular:400,medium:500,bold:700,cardShadow:"0px 3px 5px 1px rgba(#000000, 0.3)"}),Object(c.d)("size",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{width:e||"auto",height:(arguments.length>1&&void 0!==arguments[1]?arguments[1]:null)||e||"auto"}}),Object(c.d)("font",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{fontSize:e||"initial",lineHeight:isNaN(t)?parseInt(t,10)/parseInt(e,10):"1",fontWeight:a||isNaN(t)?a:t}}),Object(c.d)("flex",function(e,t,a){var n={display:"flex"};if("center"===e&&(n.justifyContent="center",n.alignItems="center"),"row"===e){switch(n.flexDirection=e,t){case"left":n.justifyContent="flex-start";break;case"center":n.justifyContent="center";break;case"end":n.justifyContent="flex-end";break;case"between":n.justifyContent="space-between";break;case"around":n.justifyContent="space-around";break;default:n.justifyContent="flex-start"}switch(a){case"top":n.alignItems="flex-start";break;case"center":n.alignItems="center";break;case"bottom":n.alignItems="flex-end";break;case"stretch":n.alignItems="stretch";break;default:n.alignItems="flex-start"}}if("column"===e){switch(n.flexDirection=e,t){case"start":n.alignItems="flex-start";break;case"center":n.alignItems="center";break;case"end":n.alignItems="flex-end";break;default:n.alignItems="flex-start"}switch(a){case"top":n.justifyContent="flex-start";break;case"center":n.justifyContent="center";break;case"bottom":n.justifyContent="flex-end";break;case"between":n.justifyContent="space-between";break;case"around":n.justifyContent="space-around";break;default:n.justifyContent="flex-start"}}if("column-reverse"===e){switch(n.flexDirection=e,t){case"left":n.alignItems="flex-start";break;case"center":n.alignItems="center";break;case"right":n.alignItems="flex-end";break;default:n.alignItems="flex-start"}switch(a){case"top":n.justifyContent="flex-start";break;case"center":n.justifyContent="center";break;case"bottom":n.justifyContent="flex-end";break;case"between":n.justifyContent="space-between";break;case"around":n.justifyContent="space-around";break;default:n.justifyContent="flex-start"}}if("row-reverse"===e){switch(n.flexDirection=e,t){case"left":n.justifyContent="flex-start";break;case"center":n.justifyContent="center";break;case"right":n.justifyContent="flex-end";break;case"between":n.justifyContent="space-between";break;case"around":n.justifyContent="space-around";break;default:n.justifyContent="flex-start"}switch(a){case"top":n.alignItems="flex-start";break;case"center":n.alignItems="center";break;case"bottom":n.alignItems="flex-end";break;case"stretch":n.alignItems="stretch";break;default:n.alignItems="flex-start"}}return Object(u.a)({},n)}),Object(c.d)("textStyle",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"item";switch(e){case"body":return{_font:["18px","24px","$regular"]};case"caption":return{_font:["13px","24px","$medium"]};case"H3":return{_font:["20px","24px","$regular"]};case"H2":return{_font:["24px","24px","$regular"]};case"H1":return{_font:["28px","36px","$regular"],letterSpacing:"-0.6px"};case"title":return{_font:["48px","56px","$regular"],letterSpacing:"-1.5px"};default:return console.warn("unsupported textStyle: ".concat(e,". Check _textStyle.js for support")),{_font:["1rem","1rem","$regular"]}}}),Object(c.c)({".blog-post":{_size:["100%","auto"]},".blog-post h1":{_size:["100%","auto"],_textStyle:"H1",fontWeight:"$bold",margin:"0 auto",marginTop:"30px",marginBottom:"24px"},".blog-post h2":{_size:["100%","auto"],_textStyle:"H2",fontWeight:"$bold",margin:"0 auto",marginTop:"30px",marginBottom:"24px"},".blog-post h3":{_size:["100%","auto"],_textStyle:"H3",fontWeight:"$bold",margin:"0 auto",marginBottom:"18px"},".blog-post p":{_size:["100%","auto"],_textStyle:"body",margin:"0 auto",marginBottom:"30px"},".blog-post p > span":{fontWeight:700,backgroundColor:"#ffd776"},".blog-post blockquote":{_size:["100%","auto"],backgroundColor:"rgba(#ffd776, .2)",margin:"0 auto",marginTop:"30px",marginBottom:"60px",padding:"30px 46px",paddingRight:0},".blog-post blockquote:before":{_size:["17px","100%"],backgroundColor:"#ffd776",content:""},".blog-post blockquote p":{_textStyle:"body",fontStyle:"italic",letterSpacing:"-.6px",margin:0},".blog-post img":{maxWidth:"100%",maxHeight:"50vh",display:"block"},".blog-post video":{_size:["100%","auto"],display:"block",margin:"0 auto",marginTop:"30px",marginBottom:"60px"},".blog-post audio":{_size:["100%","auto"],display:"block",margin:"0 auto",marginTop:"30px",marginBottom:"60px"},".blog-post strong":{},".blog-post em":{},".blog-post ul":{_size:["100%","auto"],_textStyle:"body",paddingLeft:"60px",margin:"0 auto",marginBottom:"30px",listStyle:"initial"},".blog-post ol":{_size:["100%","auto"],_textStyle:"body",paddingLeft:"60px",margin:"0 auto",marginBottom:"30px",listStyle:"initial",listStyleType:"decimal"},".blog-post li":{_textStyle:"body",listStyle:"initial"},".blog-post ol li":{listStyleType:"decimal"},".blog-post a img":{cursor:"pointer"},".blog-post a":{cursor:"pointer",wordWrap:"break-word"},".blog-post a:hover":{textDecoration:"underline",wordWrap:"break-word"},".blog-post a:visited":{color:"#5f50b7",textDecoration:"underline",wordWrap:"break-word"},".blog-post a:focused":{outline:"1px dotted #5f50b7",wordWrap:"break-word"},".blog-post pre":{_size:["100%","auto"],margin:"15px 0",padding:"9px"},".blog-post code":{_size:["100%","auto"]},"@media screen and (max-width: 600px)":{".blog-post h1":{_textStyle:"H3"},".blog-post h2":{_font:["30px","39px","bold"]},".blog-post h3":{},".blog-post p":{},".blog-post img":{margin:"30px auto"},".blog-post img.small":{margin:"30px auto",minHeight:"initial"},".blog-post large":{margin:"30px auto",minHeight:"initial"}}});a(281);l.a.render(o.a.createElement(c.a,null,o.a.createElement(i.a,null,o.a.createElement(function(){return o.a.createElement(v.Wrapper,null,o.a.createElement(v.NavBar,null,o.a.createElement(v.Link,{to:"/"},o.a.createElement(v.Logo,{src:j.a})),o.a.createElement(v.Link,{to:"/"},"resume"),o.a.createElement(v.Link,{to:"/blog"},"thoughts")),o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:"/",component:m}),o.a.createElement(s.a,{path:"/blog",component:b}),o.a.createElement(s.a,{path:"/test/:post",component:y}),o.a.createElement(s.a,{component:E})))},null))),document.getElementById("root"))},49:function(e,t){},95:function(e,t,a){e.exports=a.p+"static/media/logo.1598e9bc.svg"},98:function(e,t,a){e.exports=a(283)}},[[98,1,2]]]);
//# sourceMappingURL=main.d8e67ff3.chunk.js.map