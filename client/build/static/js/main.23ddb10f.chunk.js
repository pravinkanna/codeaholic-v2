(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,a){},521:function(e,t,a){},522:function(e,t,a){},523:function(e,t,a){},524:function(e,t,a){},525:function(e,t,a){e.exports=a.p+"static/media/googleLogo.ef5056c5.svg"},526:function(e,t,a){},544:function(e,t,a){},545:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),i=a.n(r),s=(a(60),a(88),a(8)),c=a(9),l=a(11),d=a(10),u=a(56),p=function(e,t,a){u.a.event({category:e,action:t,label:a})},h=a(7),m=a.n(h),g=a(21),f=a(29),E=a(555),v=a(554),S=a(550),w=a(80),b=a(76),C=(a(93),a(74)),I=a.n(C),y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).languageName={50:"C (GCC 9.2.0)",54:"C++ (GCC 9.2.0)",71:"Python (3.8.1)",62:"Java (OpenJDK 13.0.1)",63:"JavaScript (Node.js 12.14.0)",68:"PHP (7.4.1)",82:"SQL (SQLite 3.27.2)"},e.sizeName={14:"14px",16:"16px",18:"18px",20:"20px"},e.handleLanguage=function(t){e.props.triggerLanguageUpdate(t)},e.handleFontSize=function(t){e.props.triggerFontSizeUpdate(t)},e.handleShareCode=function(){e.props.code?(e.props.shareCode(),p("Share","Code Shared Button","IDE_PAGE")):alert("Editor is empty!")},e.handleLogin=function(){e.props.login(),p("Login","Login Button","IDE_PAGE")},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.languageId,a=e.fontSize;return o.a.createElement(E.a,{variant:"dark",expand:"lg",className:"Navbar"},o.a.createElement(E.a.Brand,{href:"#home",className:"NavbarBrand"},o.a.createElement("img",{src:I.a,alt:"logo",className:"Logo"}),"\xa0 ",o.a.createElement("h1",{className:"BrandName"},"Pravin IDE")),o.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(v.a,{className:"ml-auto"},o.a.createElement(S.a,{className:"languageBtn",title:this.languageName[t],onSelect:this.handleLanguage},o.a.createElement(w.a.Item,{className:"50"===t?"selected":"",eventKey:"50"},"C (GCC 9.2.0)"),o.a.createElement(w.a.Item,{className:"54"===t?"selected":"",eventKey:"54"},"C++ (GCC 9.2.0)"),o.a.createElement(w.a.Item,{className:"71"===t?"selected":"",eventKey:"71"},"Python (3.8.1)"),o.a.createElement(w.a.Item,{className:"62"===t?"selected":"",eventKey:"62"},"Java (OpenJDK 13.0.1)"),o.a.createElement(w.a.Item,{className:"63"===t?"selected":"",eventKey:"63"},"JavaScript (Node.js 12.14.0)"),o.a.createElement(w.a.Item,{className:"68"===t?"selected":"",eventKey:"68"},"PHP (7.4.1)"),o.a.createElement(w.a.Item,{className:"82"===t?"selected":"",eventKey:"82"},"SQL (SQLite 3.27.2)")),o.a.createElement(S.a,{className:"fontSizeBtn",title:this.sizeName[a],onSelect:this.handleFontSize},o.a.createElement(w.a.Item,{className:"14"===a?"selected":"",eventKey:"14"},"14px"),o.a.createElement(w.a.Item,{className:"16"===a?"selected":"",eventKey:"16"},"16px"),o.a.createElement(w.a.Item,{className:"18"===a?"selected":"",eventKey:"18"},"18px"),o.a.createElement(w.a.Item,{className:"20"===a?"selected":"",eventKey:"20"},"20px")),o.a.createElement(b.a,{className:"share",onClick:this.handleShareCode},o.a.createElement("i",{className:"fas fa-share-alt"}),"\xa0Share"),o.a.createElement(b.a,{className:"login",onClick:this.handleLogin},o.a.createElement("i",{className:"fas fa-sign-in-alt"}),"\xa0Login"))))}}]),a}(n.Component),L=a(77),z=a.n(L),N=a(551),O=(a(101),a(102),a(103),a(104),a(105),a(106),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).modes={50:"c_cpp",54:"c_cpp",62:"java",71:"python",68:"php",82:"mysql"},n.handleChange=function(){var e=n.aceEditor.current.editor.getValue();n.props.triggerCodeUpdate(e)},n.handleClick=function(){n.props.run(),p("Run","Code Run Button","IDE_PAGE")},n.aceEditor=o.a.createRef(),n.state={isEmpty:!0},n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(){this.aceEditor.current.editor.resize()}},{key:"render",value:function(){var e=this.props,t=e.languageId,a=e.fontSize;return o.a.createElement("div",{className:"IdeEditor IdeComponent"},o.a.createElement("ul",{className:"EditorNav"},o.a.createElement("li",null,o.a.createElement("p",null,"Your\xa0Code")),o.a.createElement("li",null,o.a.createElement(b.a,{variant:"primary",size:"sm",onClick:this.handleClick,disabled:M(this.props.code)||this.props.isLoading},this.props.isLoading?o.a.createElement(N.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):o.a.createElement(o.a.Fragment,null,o.a.createElement("i",{className:"fas fa-play"}),"\xa0\xa0Run")))),o.a.createElement(z.a,{ref:this.aceEditor,onChange:this.handleChange,mode:this.modes[t],theme:"monokai",showPrintMargin:!1,showGutter:!0,focus:!0,fontSize:a,highlightActiveLine:!1,placeholder:"Write your code Here",width:"100%",height:"100%",value:this.props.code,setOptions:{tabSize:4}}))}}]),a}(n.Component)),M=function(e){return!e||void 0===e||""===e||0===e.length},j=O,k=a(43),x=(a(521),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.props.triggerInputUpdate(e.target.value)},n.state={input:""},n.handleChange=n.handleChange.bind(Object(k.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"IdeComponent IdeInput"},o.a.createElement("p",null,"Input"),o.a.createElement("textarea",{type:"text",onChange:this.handleChange}))}}]),a}(n.Component)),U=(a(522),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={output:"",statusId:"",isError:!1},n}return Object(c.a)(a,[{key:"render",value:function(){return this.props.result&&console.log(this.props.isError,this.props.output),o.a.createElement("div",{className:"IdeComponent IdeOutput"},o.a.createElement("p",null,"Output"),o.a.createElement("textarea",{readOnly:!0,name:"output",style:{color:this.props.isError?"#ff0033":"#ffffff"},disabled:this.props.isLoading,value:this.props.isLoading?"":this.props.output}),this.props.isLoading?o.a.createElement(N.a,{style:{color:"white",position:"absolute",top:"50%",left:"47%"},className:"spinner",as:"span",animation:"border",size:"lg",role:"status","aria-hidden":"true"}):"Run")}}]),a}(n.Component)),B=a(552),P=(a(523),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).showModal=function(){e.props.triggerShareModalShowUpdate(!0)},e.hideModal=function(){e.props.triggerShareModalShowUpdate(!1)},e.copyTextToClipboard=function(){var t="".concat(window.location.protocol,"//").concat(window.location.host,"?shareId=").concat(e.props.shareId),a=document.createElement("textarea");a.innerHTML=t,document.body.appendChild(a),a.select(),a.setSelectionRange(0,99999),document.execCommand("copy"),a.remove()},e}return Object(c.a)(a,[{key:"render",value:function(){var e="".concat(window.location.protocol,"//").concat(window.location.host,"?shareId=").concat(this.props.shareId);return o.a.createElement("div",{className:"IdeModal"},o.a.createElement(B.a,{show:this.props.shareModalShow,animation:!0,className:"modal",onHide:this.hideModal},o.a.createElement(B.a.Header,{closeButton:!0,className:"modal-header"},o.a.createElement(B.a.Title,null,"Code Shared")),o.a.createElement(B.a.Body,{className:"modal-body"},o.a.createElement("b",null,"Link"),o.a.createElement("br",null),e),o.a.createElement(B.a.Footer,{className:"modal-footer"},o.a.createElement(b.a,{variant:"primary",onClick:this.copyTextToClipboard},"Copy"))))}}]),a}(n.Component)),K=a(553),_=(a(524),a(525)),R=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).showModal=function(){n.props.triggerLoginModalShowUpdate(!0)},n.hideModal=function(){n.props.triggerLoginModalShowUpdate(!1)},n.state={show:!1,close:!1},n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"IdeModal"},o.a.createElement(B.a,{show:this.props.loginModalShow,className:"modal",size:"sm","aria-labelledby":"contained-modal-title-vcenter",onHide:this.hideModal,centered:!0},o.a.createElement(B.a.Header,{closeButton:!0,onClick:this.hideModal},o.a.createElement(B.a.Title,{id:"contained-modal-title-vcenter"},"Login")),o.a.createElement(B.a.Body,null,o.a.createElement(K.a,null,o.a.createElement(K.a.Group,{controlId:"formBasicEmail"},o.a.createElement(K.a.Label,null,"Email "),o.a.createElement(K.a.Control,{type:"email",placeholder:"Enter email"})),o.a.createElement(K.a.Group,{controlId:"formBasicPassword"},o.a.createElement(K.a.Label,null,"Password"),o.a.createElement(K.a.Control,{type:"password",placeholder:"Password"})),o.a.createElement(b.a,{variant:"primary",type:"submit",block:!0},"Login")),o.a.createElement("hr",null),o.a.createElement(b.a,{className:"login-button",block:!0},o.a.createElement("img",{src:_,alt:""}),"\xa0\xa0Continue with Google"))))}}]),a}(n.Component),G=(a(526),a(65)),F=function(){var e=Object(g.a)(m.a.mark((function e(t,a,n){var o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.post("/api/ide",{language_id:t,source_code:a,stdin:n});case 3:return o=e.sent,e.abrupt("return",o);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a,n){return e.apply(this,arguments)}}(),W=a(65),D=function(){var e=Object(g.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.post("/api/ide/share",{language_id:t,source_code:a});case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),A=function(){var e=Object(g.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.get("/api/ide/share/".concat(t));case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),H=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).updateLanguage=function(e){n.setState({languageId:e})},n.updateFontSize=function(e){e=Number(e),n.setState({fontSize:e})},n.updateCode=function(e){n.setState({code:e})},n.updateInput=function(e){n.setState({input:e})},n.updateResult=function(e){n.setState({result:e})},n.updateOutput=function(e){n.setState({output:e})},n.updateShareId=function(e){n.setState({shareId:e})},n.updateIsError=function(e){n.setState({isError:e})},n.updateWidth=function(){n.setState({width:window.innerWidth})},n.updateIsLoading=function(e){n.setState({isLoading:e})},n.updateShareModalShow=function(e){n.setState({shareModalShow:e})},n.updateLoginModalShow=function(e){n.setState({loginModalShow:e})},n.runCode=Object(g.a)(m.a.mark((function e(){var t,a,o,r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.updateIsLoading(!0),t=n.state.languageId,a=n.state.code,o=n.state.input,e.next=7,F(t,a,o);case 7:r=e.sent,i=r.data.data.stdout||r.data.data.stderr||r.data.data.error||r.data.data.compile_output||"",n.updateOutput(i),3===r.data.data.status.id?n.updateIsError(!1):n.updateIsError(!0),n.updateIsLoading(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])}))),n.shareCode=Object(g.a)(m.a.mark((function e(){var t,a,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.languageId,a=n.state.code,e.next=4,D(t,a);case 4:o=e.sent,n.updateShareId(o.data.data._id),n.updateShareModalShow(!0);case 7:case"end":return e.stop()}}),e)}))),n.getSharedCode=function(){var e=Object(g.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t);case 2:a=e.sent,console.log(a),n.updateCode(a.data.data.source_code),n.updateLanguage(a.data.data.language_id);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.login=Object(g.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.updateLoginModalShow(!0);case 1:case"end":return e.stop()}}),e)}))),n.state={languageId:"50",fontSize:16,code:"",input:"",output:"",result:"",shareId:"",isError:!1,isLoading:!1,shareModalShow:!1,loginModalShow:!1,width:window.width},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWidth,{passive:!1}),this.updateWidth();var e=window.location.search,t=new URLSearchParams(e).get("shareId");t&&console.log(this.getSharedCode(t))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWidth,{passive:!1}),this.updateWidth()}},{key:"render",value:function(){return this.state.width>=767?o.a.createElement("div",{className:"Ide"},o.a.createElement(f.a,{split:"horizontal",allowResize:!1},o.a.createElement(y,{triggerLanguageUpdate:this.updateLanguage,triggerFontSizeUpdate:this.updateFontSize,shareCode:this.shareCode,login:this.login,languageId:this.state.languageId,fontSize:this.state.fontSize,code:this.state.code}),o.a.createElement(f.a,{split:"vertical",minSize:0,maxSize:-1,defaultSize:"60%"},o.a.createElement(j,{languageId:this.state.languageId,fontSize:this.state.fontSize,triggerCodeUpdate:this.updateCode,isLoading:this.state.isLoading,code:this.state.code,run:this.runCode}),o.a.createElement(f.a,{split:"horizontal",allowResize:!1,defaultSize:"50%"},o.a.createElement(x,{triggerInputUpdate:this.updateInput}),o.a.createElement(U,{output:this.state.output,isError:this.state.isError,isLoading:this.state.isLoading})))),o.a.createElement(P,{triggerShareModalShowUpdate:this.updateShareModalShow,shareModalShow:this.state.shareModalShow,shareId:this.state.shareId}),o.a.createElement(R,{triggerLoginModalShowUpdate:this.updateLoginModalShow,loginModalShow:this.state.loginModalShow})):o.a.createElement("div",{className:"Ide"},o.a.createElement(f.a,{split:"horizontal",allowResize:!1},o.a.createElement(y,{triggerLanguageUpdate:this.updateLanguage,triggerFontSizeUpdate:this.updateFontSize,shareCode:this.shareCode,login:this.login,languageId:this.state.languageId,fontSize:this.state.fontSize,code:this.state.code}),o.a.createElement(f.a,{split:"horizontal",minSize:0,maxSize:-5,defaultSize:"50%"},o.a.createElement(j,{languageId:this.state.languageId,fontSize:this.state.fontSize,triggerCodeUpdate:this.updateCode,isLoading:this.state.isLoading,code:this.state.code,run:this.runCode}),o.a.createElement(f.a,{split:"horizontal",allowResize:!1,defaultSize:"50%"},o.a.createElement(x,{triggerInputUpdate:this.updateInput}),o.a.createElement(U,{output:this.state.output,isError:this.state.isError,isLoading:this.state.isLoading})))),o.a.createElement(P,{triggerShareModalShowUpdate:this.updateShareModalShow,shareModalShow:this.state.shareModalShow,shareId:this.state.shareId}),o.a.createElement(R,{triggerLoginModalShowUpdate:this.updateLoginModalShow,loginModalShow:this.state.loginModalShow}))}}]),a}(n.Component),J=(a(544),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e;e="UA-175900721-1",u.a.initialize(e),u.a.pageview(window.location.pathname+window.location.search)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(H,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){e.exports=a.p+"static/media/pkLogo.dcec42b2.svg"},83:function(e,t,a){e.exports=a(545)},88:function(e,t,a){},93:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.23ddb10f.chunk.js.map