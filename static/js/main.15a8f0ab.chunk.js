(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(224)},224:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(6),l=n.n(r),i=(n(28),n(7)),c=n(8),u=n(11),s=n(9),m=n(4),d=n(12),h=n(10),b=n.n(h),p=n(3),g=n(2),f=n(17);function v(){var e=Object(p.a)(["\n  ","\n  /* other styles */\n"]);return v=function(){return e},e}var y=n.n(f)()({black:"#000",fontFamilyBase:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',fontFamilyMonospace:'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',fontSizeBase:"1rem",fontWeightBase:400,lineHeightBase:1.5,bodyColor:"#212529",bodyBg:"#fff",headingsMarginBottom:"0.5rem",paragraphMarginBottom:"1rem",labelMarginBottom:"0.5rem",dtFontWeight:700,linkColor:"#007bff",linkDecoration:"none",linkHoverColor:"#0056b3",linkHoverDecoration:"underline",tableCellPadding:"0.75rem",textMuted:"#6c757d"}),E=Object(g.createGlobalStyle)(v(),y),w=(n(34),n(5)),j=function(e){fetch(e).then(function(e){return e.text()}).then(function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n))})},C=n(20),O=n.n(C);n(223);function k(){var e=Object(p.a)(["\n  cursor: pointer;\n  text-align: center;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  background-color: ",";\n  transition: background-color ease-out 0.25s, color ease-out 0.25s;\n  user-select: none;\n  font-size: 20px;\n  padding: 10px;\n  font-weight: bold;\n  color: white;\n\n  &:active {\n    background-color: blue;\n  }\n"]);return k=function(){return e},e}function x(){var e=Object(p.a)(["\n  margin: 2rem auto 0;\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);\n"]);return x=function(){return e},e}function S(){var e=Object(p.a)(["\n  margin: 0 auto;\n"]);return S=function(){return e},e}function M(){var e=Object(p.a)(["\n  margin: 0;\n  padding: 1rem;\n  height: 10rem;\n  overflow: auto;\n"]);return M=function(){return e},e}var B="https://gist.githubusercontent.com/kevbost/3b2806d56dc084e6a4ec9a420cced359/raw/3dec2ab1e662b041da644b1a8a415ca55bbf48a4/instagram_contest_winner.js",A=Object(g.default)(O.a)(M()),F=function(e){return a.a.createElement(A,{className:"js"},e.gistCode)},I=Object(g.default)(w.Box)(S()),N=Object(g.default)(w.Box)(x()),T=Object(g.default)(w.Text)(k(),function(e){return e.copied?"red":"#75AADA"}),R=function(e){function t(){var e;return Object(i.a)(this,t),e=Object(u.a)(this,Object(s.a)(t).call(this)),b()(Object(m.a)(e)),e.state={copied:!1,gistCode:""},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleCopy",value:function(){return this.setState({copied:!0}),j(B)}},{key:"componentDidMount",value:function(){var e=this;fetch(B).then(function(e){return e.text()}).then(function(t){e.setState({gistCode:t})})}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{style:{margin:"2rem 0",textAlign:"center"}},"Instagram Contest Winner"),a.a.createElement(w.Flex,{mb:5},a.a.createElement(I,{width:[1,1,.75]},a.a.createElement(N,{p:3,style:{marginTop:0}},a.a.createElement("h2",null,"INSTRUCTIONS"),a.a.createElement("ol",null,a.a.createElement("li",null,"Open chrome's javascript console",a.a.createElement("ul",null,a.a.createElement("li",null,"Windows: Ctrl + Shift + J"),a.a.createElement("li",null,"Mac: Cmd + Option + J"))),a.a.createElement("li",null,"Copy the code below (click the button)"),a.a.createElement("li",null,"Paste into the javascript console"),a.a.createElement("li",null,"???"),a.a.createElement("li",null,"Profit"))),a.a.createElement(N,null,a.a.createElement(F,{gistCode:this.state.gistCode}),a.a.createElement(T,{onClick:this.handleCopy,copied:this.state.copied},this.state.copied?"Copied!":"Copy to clipboard")),a.a.createElement(N,{p:3},a.a.createElement("h2",null,"NOTES"),a.a.createElement("p",null,"This function should work for any instagram post. Use it by opening Chrome's javascript console and pasting all of this code (see instructions)"),a.a.createElement("p",null,'All comments are not immediately visible. The code will automatically click the "show more" button for you. It could take some time depending on how many comments there are, just wait. Once all comments have been made available, it will then choose a random commenter by username.'),a.a.createElement("p",null,"Math.random() creates a random number between 0 & 1, multiply that random number by how many comments exist, round that new number down using Math.floor(), return the person at position people[ randomNumber ]."),a.a.createElement("p",null,"For the sticklers out there, the reason this is so convoluted is for validation and message handling. It's users aren't programmers, instructions are logged if there is an error.")))))}}]),t}(a.a.Component),W=function(e){function t(){var e;return Object(i.a)(this,t),e=Object(u.a)(this,Object(s.a)(t).call(this)),b()(Object(m.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(E,null),a.a.createElement(R,null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},28:function(e,t,n){},34:function(e,t,n){}},[[22,1,2]]]);
//# sourceMappingURL=main.15a8f0ab.chunk.js.map