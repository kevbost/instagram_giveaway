(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){e.exports={animatedTextContainer:"AnimatedText_animatedTextContainer__11JMm",animatedTextContent:"AnimatedText_animatedTextContent__1d64z",animatedTextContentClone:"AnimatedText_animatedTextContentClone__3r07Z AnimatedText_animatedTextContent__1d64z"}},229:function(e,t,n){},230:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(19),i=n.n(r),c=n(7),l=n(8),s=n(6),u=n(11),m=n(10),d=n(9),h=n.n(d),f=n(2),p=n(1),b=n(20);function g(){var e=Object(f.a)(["\n  ",'\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Ubuntu", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  *::selection {\n    background: blue;\n    color: white;\n  }\n\n  p {\n    line-height: 1.58;\n    letter-spacing: -.004em;\n  }\n\n  ol,\n  ul {\n    margin: 0;\n    list-style-position: outside;\n    padding-left: 1rem;\n  }\n\n  code {\n    font-size: 90%;\n  }\n\n  pre,\n  code {\n    margin: 0;\n    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n      monospace;\n  }\n\n  /* --------github corners-------- */\n  .github-corner:hover .octo-arm {\n    animation: octocat-wave 2000ms ease-in-out\n  }\n  /* --------end github corners-------- */\n\n  @keyframes octocat-wave {\n    0%,\n    100% {\n      transform: rotate(0)\n    }\n    20%,\n    60% {\n      transform: rotate(-25deg)\n    }\n    40%,\n    80% {\n      transform: rotate(10deg)\n    }\n  }\n\n  @media (max-width:500px) {\n    .github-corner:hover .octo-arm {\n      animation: none\n    }\n\n    .github-corner .octo-arm {\n      animation: octocat-wave 560ms ease-in-out\n    }\n  }\n']);return g=function(){return e},e}var v=n.n(b)()({black:"#313131",fontFamilyBase:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',fontFamilyMonospace:'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',fontSizeBase:"1rem",fontWeightBase:400,lineHeightBase:1.5,bodyColor:"#313131",bodyBg:"#fff",headingsMarginBottom:"0.5rem",paragraphMarginBottom:"1rem",labelMarginBottom:"0.5rem",dtFontWeight:700,linkColor:"#007bff",linkDecoration:"none",linkHoverColor:"#0056b3",linkHoverDecoration:"underline",tableCellPadding:"0.75rem",textMuted:"#6c757d"}),C=Object(p.createGlobalStyle)(g(),v),x=function(e){return o.a.createElement("a",{href:"https://github.com/kevbost/instagram_giveaway",className:"github-corner","aria-label":"View source on GitHub"},o.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#fff",color:"#151513",position:"absolute",top:"0",border:"0",right:"0"},"aria-hidden":"true"},o.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),o.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),o.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})))},k=n(5),y=function(e){return new Promise((function(t){var n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n);var a=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);n.select(),document.execCommand("copy"),document.body.removeChild(n),a&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(a)),t()}))},w=n(24),E=n(26),j=n(14),O=n.n(j),A={x:0,y:0},S=function(e){var t=e.textColor,n=e.overlayColor,r=e.children,i=Object(E.a)(e,["textColor","overlayColor","children"]),c=Object(a.useRef)(null),l=Object(a.useState)({x:0,y:0}),s=Object(w.a)(l,2),u=s[0],m=s[1];return o.a.createElement("section",Object.assign({className:O.a.animatedTextContainer,style:{"--maskX":u.x,"--maskY":u.y},onMouseMove:function(e){e=e.nativeEvent;var t=c.current,n=Math.floor((e.pageX-t.offsetLeft)/t.clientWidth*100),a=Math.floor((e.pageY-t.offsetTop)/t.clientHeight*100);m(A={x:n,y:a})},onMouseOut:function(){return m(A)},ref:c},i),o.a.createElement("h1",{style:{color:t},className:O.a.animatedTextContent},r),o.a.createElement("h1",{style:{color:n},className:O.a.animatedTextContentClone},r))};function T(){var e=Object(f.a)(["\n        left: 4px;\n      "]);return T=function(){return e},e}function M(){var e=Object(f.a)(["\n        left: calc( 100% - "," - 0.25rem );\n      "]);return M=function(){return e},e}function N(){var e=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  color: ",";\n  font-weight: bold;\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);\n  position: absolute;\n  top: 4px;\n  bottom: 4px;\n  ",";\n\n  ",":hover & {\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  }\n\n  ","\n"]);return N=function(){return e},e}function B(){var e=Object(f.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  background-color: ",";\n  ","\n"]);return B=function(){return e},e}function I(){var e=Object(f.a)(["\n  position: relative;\n  font-weight: bold;\n  text-align: center;\n  color: ",";\n  ","\n"]);return I=function(){return e},e}function U(){var e=Object(f.a)(["\n  position: relative;\n  height: 4.25rem;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n"]);return U=function(){return e},e}function _(){var e=Object(f.a)(["\n      transition: all "," ease-out;\n      transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n    "]);return _=function(){return e},e}function z(){var e=Object(f.a)(["\n      transition:\n        color "," ease-in ",",\n        background-color "," ease-in ",",\n        box-shadow ",",\n        margin ",";;\n    "]);return z=function(){return e},e}var D="4rem",F="0.35s",L="0.25s",R="0.125s",J=function(e){return"background"===e?Object(p.css)(z(),R,L,R,L,F,F):"box"===e?Object(p.css)(_(),F):void 0},W=Object(p.default)(k.Flex).attrs({justifyContent:["center"]})(U()),G=Object(p.default)(k.Text).attrs((function(e){return{fontSize:["1","1.25rem","1.5rem"],ml:e.checked?["0"]:["4.5rem","3rem","0"],mr:e.checked?["4.5rem","3rem","0"]:["0"]}}))(I(),(function(e){return e.checked?"white":"#888"}),J("background")),H=p.default.div(B(),(function(e){return e.checked?"#fd5949":"white"}),J("background")),P=Object(p.default)(k.Box).attrs({width:[D]})(N(),(function(e){return e.checked?"#fd5949":"#777"}),(function(e){return e.checked?Object(p.css)(M(),D):Object(p.css)(T())}),W,J("box")),Q=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(c.a)(this,n),e=t.call(this),h()(Object(s.a)(e)),e.state={checked:!0},e}return Object(l.a)(n,[{key:"handleClick",value:function(){this.setState((function(e,t){return{checked:!e.checked}}))}},{key:"shouldComponentUpdate",value:function(e,t){return t.checked!==this.state.checked}},{key:"render",value:function(){var e=this.state.checked;return o.a.createElement("div",null,o.a.createElement(W,{onClick:this.handleClick},o.a.createElement(H,{checked:e},o.a.createElement(P,{checked:e,id:"checkbox"},e?"ON":"OFF")),o.a.createElement(G,{checked:e},this.props.label)))}}]),n}(o.a.Component),Y=n(23),V=n.n(Y);function X(){var e=Object(f.a)(["\n  cursor: pointer;\n  text-align: center;\n  background-color: ",";\n  transition: background-color ease-out 0.25s, color ease-out 0.25s;\n  user-select: none;\n  font-size: 20px;\n  padding: 10px;\n  font-weight: bold;\n  color: white;\n\n  &:active {\n    background-color: blue;\n  }\n"]);return X=function(){return e},e}function Z(){var e=Object(f.a)(["\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  padding: 3rem 0 1rem;\n"]);return Z=function(){return e},e}function K(){var e=Object(f.a)(["\n  margin: 0;\n  padding: 1rem !important;\n  height: 10rem;\n  overflow: auto;\n  background-color: transparent !important;\n"]);return K=function(){return e},e}function $(){var e=Object(f.a)(['\n  background-color: #3f4245;\n  background:\n    linear-gradient(\n      to left top,\n      rgba(0, 255, 255, 1) 0%,\n      rgba(255, 0, 255, 0.5) 50%,\n      rgba(255, 255, 0, 1) 100%\n    ),\n    url(./noise.svg);\n    /* url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAIklEQVQoU2NkYGD4z8DAwMiAA+CUgKmnjQIUN9HGChQPAwB5swIJcl6NNwAAAABJRU5ErkJggg=="); */\n']);return $=function(){return e},e}var q=p.default.div($()),ee=Object(p.default)(V.a).attrs({className:"js"})(K()),te=p.default.div(Z()),ne=Object(p.default)(k.Text)(X(),(function(e){return e.copied?"#fd5949":"#313131"}));function ae(){var e=Object(f.a)(["\n  /* border-radius: 0.25rem; */\n  /* box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25); */\n  /* margin: 2rem 0; */\n  /* background-color: rgba(255, 255, 255, 0.5); */\n  background-color: #fff;\n  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);\n  position: relative;\n"]);return ae=function(){return e},e}var oe=Object(p.default)(k.Box)(ae()),re=(n(228),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(c.a)(this,n),e=t.call(this),h()(Object(s.a)(e)),e.state={checked:!0,copied:!1,copiedText:"Copy to Clipboard",gistCode:""},e}return Object(l.a)(n,[{key:"getCheckedState",value:function(){if(this.state.checked){var e=this.state.gistCode.replace(/(var removeDuplicates = true)/,"var removeDuplicates = false");this.setState((function(t,n){return{gistCode:e,checked:!t.checked}}))}else{var t=this.state.gistCode.replace(/(var removeDuplicates = false)/,"var removeDuplicates = true");this.setState((function(e,n){return{gistCode:t,checked:!e.checked}}))}}},{key:"handleCopy",value:function(){var e=this;return this.setState({copied:!0,copiedText:"Copied!"}),y(this.state.gistCode).then((function(){setTimeout((function(){e.setState({copiedText:"Paste it into the console!"}),setTimeout((function(){e.setState({copied:!1,copiedText:"Copy to Clipboard"})}),3e3)}),3e3)}))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/kevbost/3b2806d56dc084e6a4ec9a420cced359/raw").then((function(e){return e.text()})).then((function(t){e.setState({gistCode:t})}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return o.a.createElement(q,null,o.a.createElement(te,null,o.a.createElement(S,{textColor:"rgba(253, 89, 73, 0.5)",overlayColor:"#fff"},o.a.createElement(k.Text,{fontSize:["11vw","10vw","10vw","6.4rem"]},"IG Contest"),o.a.createElement(k.Text,{fontSize:["15vw","14vw","14vw","9rem"]},"Winner"))),o.a.createElement(k.Flex,{p:4,pb:5,justifyContent:"center"},o.a.createElement(k.Box,{width:[1,1,"45rem"],style:{zIndex:1}},o.a.createElement(oe,{p:3,mb:4},o.a.createElement("h2",null,"INSTRUCTIONS"),o.a.createElement("ol",null,o.a.createElement("li",null,"Open chrome's javascript console",o.a.createElement("ul",null,o.a.createElement("li",null,"Windows: Ctrl + Shift + J"),o.a.createElement("li",null,"Mac: Cmd + Option + J"))),o.a.createElement("li",null,"Copy the code below (click the button)"),o.a.createElement("li",null,"Paste into the javascript console"),o.a.createElement("li",null,"???"),o.a.createElement("li",null,"Profit"))),o.a.createElement(oe,{mb:4,onClick:this.getCheckedState},o.a.createElement(Q,{label:"Remove Duplicate Comments"})),o.a.createElement(oe,{mb:4},o.a.createElement(ee,null,this.state.gistCode),o.a.createElement(ne,{onClick:this.handleCopy,copied:this.state.copied},this.state.copiedText)),o.a.createElement(oe,{p:3},o.a.createElement("h2",null,"NOTES"),o.a.createElement("p",null,"This function should work for any instagram post. Use it by opening Chrome's javascript console and pasting all of this code (see instructions)"),o.a.createElement("p",null,'All comments are not immediately visible. The code will automatically click the "show more" button for you. It could take some time depending on how many comments there are, just wait. Once all comments have been made available, it will then choose a random commenter by username.'),o.a.createElement("p",null,"Sometimes Instagram acts up and doesn't properly load the comments. If this happens, it will run the random comment generator but will advise review. There's not much that can be done other than waiting and trying again later."),o.a.createElement("p",null,"Math.random() creates a random number between 0 & 1, multiply that random number by how many comments exist, round that new number down using Math.floor(), return the person at position people[ randomNumber ]."),o.a.createElement("p",null,"For the sticklers out there, the reason this is so convoluted is for validation and message handling. It's users aren't programmers, instructions are logged if there is an error."),o.a.createElement("p",null,"If something is seriously ",o.a.createElement("a",{href:"https://youtu.be/ONB2MJMGXM8?t=53"},"wonko"),", leave an issue on the ",o.a.createElement("a",{href:"https://github.com/kevbost/instagram_giveaway/issues"},"github project page"),".")))))}}]),n}(o.a.Component)),ie=(n(229),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(c.a)(this,n),e=t.call(this),h()(Object(s.a)(e)),e}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(C,null),o.a.createElement(x,null),o.a.createElement(re,null))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},27:function(e,t,n){e.exports=n(230)}},[[27,1,2]]]);
//# sourceMappingURL=main.47c6ec7c.chunk.js.map