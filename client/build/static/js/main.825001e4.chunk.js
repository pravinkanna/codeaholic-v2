(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,a){},521:function(e,t,a){},522:function(e,t,a){},523:function(e,t,a){},524:function(e,t,a){},525:function(e,t,a){e.exports=a.p+"static/media/googleLogo.ef5056c5.svg"},526:function(e,t,a){},544:function(e,t,a){},545:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),s=a.n(o),i=(a(60),a(88),a(8)),l=a(9),c=a(11),d=a(10),u=a(56),p=function(e,t,a){u.a.event({category:e,action:t,label:a})},m=a(7),h=a.n(m),g=a(21),f=a(55),E=a(555),v=a(554),w=a(550),b=a(80),S=a(76),C=(a(93),a(74)),y=a.n(C),I=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).languageName={50:"C (GCC 9.2.0)",54:"C++ (GCC 9.2.0)",71:"Python (3.8.1)",62:"Java (OpenJDK 13.0.1)",63:"JavaScript (Node.js 12.14.0)",68:"PHP (7.4.1)",82:"SQL (SQLite 3.27.2)"},e.sizeName={14:"14px",16:"16px",18:"18px",20:"20px"},e.handleLanguage=function(t){e.props.triggerLanguageUpdate(t)},e.handleFontSize=function(t){e.props.triggerFontSizeUpdate(t)},e.handleShareCode=function(){e.props.code?(e.props.shareCode(),p("Share","Code Shared Button","IDE_PAGE")):alert("Editor is empty!")},e.handleLogin=function(){e.props.login(),p("Login","Login Button","IDE_PAGE")},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.languageId,a=e.fontSize;return r.a.createElement(E.a,{variant:"dark",expand:"lg",className:"Navbar"},r.a.createElement(E.a.Brand,{href:"#home",className:"NavbarBrand"},r.a.createElement("img",{src:y.a,alt:"logo",className:"Logo"}),"\xa0 ",r.a.createElement("h1",{className:"BrandName"},"Pravin IDE")),r.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(v.a,{className:"ml-auto"},r.a.createElement(w.a,{className:"languageBtn",title:this.languageName[t],onSelect:this.handleLanguage},r.a.createElement(b.a.Item,{className:"50"===t?"selected":"",eventKey:"50"},"C (GCC 9.2.0)"),r.a.createElement(b.a.Item,{className:"54"===t?"selected":"",eventKey:"54"},"C++ (GCC 9.2.0)"),r.a.createElement(b.a.Item,{className:"71"===t?"selected":"",eventKey:"71"},"Python (3.8.1)"),r.a.createElement(b.a.Item,{className:"62"===t?"selected":"",eventKey:"62"},"Java (OpenJDK 13.0.1)"),r.a.createElement(b.a.Item,{className:"63"===t?"selected":"",eventKey:"63"},"JavaScript (Node.js 12.14.0)"),r.a.createElement(b.a.Item,{className:"68"===t?"selected":"",eventKey:"68"},"PHP (7.4.1)"),r.a.createElement(b.a.Item,{className:"82"===t?"selected":"",eventKey:"82"},"SQL (SQLite 3.27.2)")),r.a.createElement(w.a,{className:"fontSizeBtn",title:this.sizeName[a],onSelect:this.handleFontSize},r.a.createElement(b.a.Item,{className:14===a?"selected":"",eventKey:"14"},"14px"),r.a.createElement(b.a.Item,{className:16===a?"selected":"",eventKey:"16"},"16px"),r.a.createElement(b.a.Item,{className:18===a?"selected":"",eventKey:"18"},"18px"),r.a.createElement(b.a.Item,{className:20===a?"selected":"",eventKey:"20"},"20px")),r.a.createElement(S.a,{className:"share",onClick:this.handleShareCode},r.a.createElement("i",{className:"fas fa-share-alt"}),"\xa0Share"),r.a.createElement(S.a,{className:"login",onClick:this.handleLogin},r.a.createElement("i",{className:"fas fa-sign-in-alt"}),"\xa0Login"))))}}]),a}(n.Component),L=a(77),N=a.n(L),O=a(551),j=(a(101),a(102),a(103),a(104),a(105),a(106),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).modes={50:"c_cpp",54:"c_cpp",62:"java",71:"python",68:"php",82:"mysql"},n.handleChange=function(){var e=n.aceEditor.current.editor.getValue();n.props.triggerCodeUpdate(e)},n.handleClick=function(){n.props.run(),p("Run","Code Run Button","IDE_PAGE")},n.aceEditor=r.a.createRef(),n.state={isEmpty:!0},n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(){this.aceEditor.current.editor.resize()}},{key:"render",value:function(){var e=this.props,t=e.languageId,a=e.fontSize;return r.a.createElement("div",{className:"IdeEditor IdeComponent"},r.a.createElement("ul",{className:"EditorNav"},r.a.createElement("li",null,r.a.createElement("p",null,"Your\xa0Code")),r.a.createElement("li",null,r.a.createElement(S.a,{variant:"primary",size:"sm",onClick:this.handleClick,disabled:k(this.props.code)||this.props.isLoading},this.props.isLoading?r.a.createElement(O.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-play"}),"\xa0\xa0Run")))),r.a.createElement(N.a,{ref:this.aceEditor,onChange:this.handleChange,mode:this.modes[t],theme:"monokai",showPrintMargin:!1,showGutter:!0,focus:!0,fontSize:a,highlightActiveLine:!1,placeholder:"Write your code Here",width:"100%",value:this.props.code,setOptions:{tabSize:4}}))}}]),a}(n.Component)),k=function(e){return!e||void 0===e||""===e||0===e.length},M=j,z=a(42),x=(a(521),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.props.triggerInputUpdate(e.target.value)},n.state={input:""},n.handleChange=n.handleChange.bind(Object(z.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"IdeComponent IdeInput"},r.a.createElement("p",null,"Input"),r.a.createElement("textarea",{type:"text",onChange:this.handleChange}))}}]),a}(n.Component)),R=(a(522),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={output:"",statusId:"",isError:!1},n}return Object(l.a)(a,[{key:"render",value:function(){return this.props.result&&console.log(this.props.isError,this.props.output),r.a.createElement("div",{className:"IdeComponent IdeOutput"},r.a.createElement("p",null,"Output"),r.a.createElement("textarea",{readOnly:!0,name:"output",style:{color:this.props.isError?"#ff0033":"#ffffff"},disabled:this.props.isLoading,value:this.props.isLoading?"":this.props.output}),this.props.isLoading?r.a.createElement(O.a,{style:{color:"white",position:"absolute",top:"50%",left:"47%"},className:"spinner",as:"span",animation:"border",size:"lg",role:"status","aria-hidden":"true"}):"")}}]),a}(n.Component)),P=a(552),U=(a(523),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).showModal=function(){e.props.triggerShareModalShowUpdate(!0)},e.hideModal=function(){e.props.triggerShareModalShowUpdate(!1)},e.copyTextToClipboard=function(){var t="".concat(window.location.protocol,"//").concat(window.location.host,"?shareId=").concat(e.props.shareId),a=document.createElement("textarea");a.innerHTML=t,document.body.appendChild(a),a.select(),a.setSelectionRange(0,99999),document.execCommand("copy"),a.remove()},e}return Object(l.a)(a,[{key:"render",value:function(){var e="".concat(window.location.protocol,"//").concat(window.location.host,"?shareId=").concat(this.props.shareId);return r.a.createElement("div",{className:"IdeModal"},r.a.createElement(P.a,{show:this.props.shareModalShow,animation:!0,className:"modal",onHide:this.hideModal},r.a.createElement(P.a.Header,{closeButton:!0,className:"modal-header"},r.a.createElement(P.a.Title,null,"Code Shared")),r.a.createElement(P.a.Body,{className:"modal-body"},r.a.createElement("b",null,"Link"),r.a.createElement("br",null),e),r.a.createElement(P.a.Footer,{className:"modal-footer"},r.a.createElement(S.a,{variant:"primary",onClick:this.copyTextToClipboard},"Copy"))))}}]),a}(n.Component)),G=a(553),B=(a(524),a(525)),K=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).showModal=function(){n.props.triggerLoginModalShowUpdate(!0)},n.hideModal=function(){n.props.triggerLoginModalShowUpdate(!1)},n.showLogin=function(){n.setState({type:"login"})},n.showRegister=function(){n.setState({type:"register"})},n.submitLogin=function(){console.log(n.state.loginEmail,n.state.loginPassword)},n.submitRegister=function(){console.log(n.state.name,n.state.email,n.state.password,n.state.password2)},n.handleLogin=function(){n.setState({loginEmail:n.loginEmail.current.value,loginPassword:n.loginPassword.current.value})},n.handleRegister=function(){n.setState({name:n.name.current.value,email:n.email.current.value,password:n.password.current.value,password2:n.password2.current.value})},n.state={show:!1,close:!1,type:"login",loginEmail:"",loginPassword:"",name:"",email:"",password:"",password2:""},n.loginEmail=r.a.createRef(),n.loginPassword=r.a.createRef(),n.name=r.a.createRef(),n.email=r.a.createRef(),n.password=r.a.createRef(),n.password2=r.a.createRef(),n}return Object(l.a)(a,[{key:"render",value:function(){return"login"===this.state.type?r.a.createElement("div",{className:"IdeModal"},r.a.createElement(P.a,{show:this.props.loginModalShow,className:"modal",size:"sm","aria-labelledby":"contained-modal-title-vcenter",onHide:this.hideModal,centered:!0},r.a.createElement(P.a.Header,{closeButton:!0,onClick:this.hideModal},r.a.createElement(P.a.Title,null,"Login")),r.a.createElement(P.a.Body,null,r.a.createElement(G.a,{onSubmit:this.submitLogin},r.a.createElement(G.a.Group,{controlId:"formLoginEmail"},r.a.createElement(G.a.Label,null,"Email "),r.a.createElement(G.a.Control,{ref:this.loginEmail,onChange:this.handleLogin,type:"email",placeholder:"Enter email"})),r.a.createElement(G.a.Group,{controlId:"formLoginPassword"},r.a.createElement(G.a.Label,null,"Password"),r.a.createElement(G.a.Control,{ref:this.loginPassword,onChange:this.handleLogin,type:"password",placeholder:"Password"})),r.a.createElement(S.a,{variant:"primary",type:"submit",block:!0},"Login")),r.a.createElement("hr",null),r.a.createElement(S.a,{variant:"primary",type:"submit",onClick:this.showRegister,block:!0},"Create new account"),r.a.createElement(S.a,{className:"oauth-login",block:!0},r.a.createElement("img",{src:B,alt:""}),"\xa0\xa0Continue with Google")))):r.a.createElement("div",{className:"IdeModal"},r.a.createElement(P.a,{show:this.props.loginModalShow,className:"modal",size:"sm","aria-labelledby":"contained-modal-title-vcenter",onHide:this.hideModal,centered:!0},r.a.createElement(P.a.Header,{closeButton:!0,onClick:this.hideModal},r.a.createElement(P.a.Title,null,"Register")),r.a.createElement(P.a.Body,null,r.a.createElement(G.a,{onSubmit:this.submitRegister},r.a.createElement(G.a.Group,{controlId:"formRegisterName"},r.a.createElement(G.a.Label,null,"Name "),r.a.createElement(G.a.Control,{ref:this.name,onChange:this.handleRegister,type:"text",placeholder:"Enter email"})),r.a.createElement(G.a.Group,{controlId:"formRegisterEmail"},r.a.createElement(G.a.Label,null,"Email "),r.a.createElement(G.a.Control,{ref:this.email,onChange:this.handleRegister,type:"email",placeholder:"Enter email"})),r.a.createElement(G.a.Group,{controlId:"formRegisterPassword"},r.a.createElement(G.a.Label,null,"Password"),r.a.createElement(G.a.Control,{ref:this.password,onChange:this.handleRegister,type:"password",placeholder:"Password"})),r.a.createElement(G.a.Group,{controlId:"formRegisterPassword2"},r.a.createElement(G.a.Label,null,"Verify Password"),r.a.createElement(G.a.Control,{ref:this.password2,onChange:this.handleRegister,type:"password",placeholder:"Re-type Password"})),r.a.createElement(S.a,{variant:"primary",type:"submit",block:!0},"Register")),r.a.createElement("hr",null),r.a.createElement(S.a,{variant:"primary",type:"submit",onClick:this.showLogin,block:!0},"I already have an account"),r.a.createElement(S.a,{className:"oauth-login",block:!0},r.a.createElement("img",{src:B,alt:""}),"\xa0\xa0Continue with Google"))))}}]),a}(n.Component),_=(a(526),a(65)),H=function(){var e=Object(g.a)(h.a.mark((function e(t,a,n){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.post("/api/ide",{language_id:t,source_code:a,stdin:n});case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a,n){return e.apply(this,arguments)}}(),D=a(65),T=function(){var e=Object(g.a)(h.a.mark((function e(t,a){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.post("/api/ide/share",{language_id:t,source_code:a});case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),A=function(){var e=Object(g.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.get("/api/ide/share/".concat(t));case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),F=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).updateLanguage=function(e){n.setState({languageId:e})},n.updateFontSize=function(e){e=Number(e),n.setState({fontSize:e})},n.updateCode=function(e){n.setState({code:e})},n.updateInput=function(e){n.setState({input:e})},n.updateResult=function(e){n.setState({result:e})},n.updateOutput=function(e){n.setState({output:e})},n.updateShareId=function(e){n.setState({shareId:e})},n.updateIsError=function(e){n.setState({isError:e})},n.updateWidth=function(){n.setState({width:window.innerWidth})},n.updateIsLoading=function(e){n.setState({isLoading:e})},n.updateShareModalShow=function(e){n.setState({shareModalShow:e})},n.updateLoginModalShow=function(e){n.setState({loginModalShow:e})},n.runCode=Object(g.a)(h.a.mark((function e(){var t,a,r,o,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.updateIsLoading(!0),t=n.state.languageId,a=n.state.code,r=n.state.input,e.next=7,H(t,a,r);case 7:o=e.sent,s=o.data.data.stdout||o.data.data.stderr||o.data.data.error||o.data.data.compile_output||o.data.data.message||"",n.updateOutput(s),3===o.data.data.status.id?n.updateIsError(!1):n.updateIsError(!0),n.updateIsLoading(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])}))),n.shareCode=Object(g.a)(h.a.mark((function e(){var t,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.languageId,a=n.state.code,e.next=4,T(t,a);case 4:r=e.sent,n.updateShareId(r.data.data._id),n.updateShareModalShow(!0);case 7:case"end":return e.stop()}}),e)}))),n.getSharedCode=function(){var e=Object(g.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t);case 2:a=e.sent,console.log(a),n.updateCode(a.data.data.source_code),n.updateLanguage(a.data.data.language_id);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.login=Object(g.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.updateLoginModalShow(!0);case 1:case"end":return e.stop()}}),e)}))),n.state={languageId:"50",fontSize:16,code:"",input:"",output:"",result:"",shareId:"",isError:!1,isLoading:!1,shareModalShow:!1,loginModalShow:!1,width:window.width},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWidth,{passive:!1}),this.updateWidth();var e=window.location.search,t=new URLSearchParams(e).get("shareId");t&&console.log(this.getSharedCode(t))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWidth,{passive:!1}),this.updateWidth()}},{key:"render",value:function(){return r.a.createElement("div",{className:"Ide"},r.a.createElement(f.a,{split:"horizontal",allowResize:!1},r.a.createElement(I,{triggerLanguageUpdate:this.updateLanguage,triggerFontSizeUpdate:this.updateFontSize,shareCode:this.shareCode,login:this.login,languageId:this.state.languageId,fontSize:this.state.fontSize,code:this.state.code}),r.a.createElement(f.a,{split:this.state.width>=767?"vertical":"horizontal",minSize:0,maxSize:-5,defaultSize:"60%"},r.a.createElement(M,{languageId:this.state.languageId,fontSize:this.state.fontSize,triggerCodeUpdate:this.updateCode,isLoading:this.state.isLoading,code:this.state.code,run:this.runCode}),r.a.createElement(f.a,{split:"horizontal",allowResize:!1,defaultSize:"50%"},r.a.createElement(x,{triggerInputUpdate:this.updateInput}),r.a.createElement(R,{output:this.state.output,isError:this.state.isError,isLoading:this.state.isLoading})))),r.a.createElement(U,{triggerShareModalShowUpdate:this.updateShareModalShow,shareModalShow:this.state.shareModalShow,shareId:this.state.shareId}),r.a.createElement(K,{triggerLoginModalShowUpdate:this.updateLoginModalShow,loginModalShow:this.state.loginModalShow}))}}]),a}(n.Component),J=(a(544),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e;e="UA-175900721-1",u.a.initialize(e),u.a.pageview(window.location.pathname+window.location.search)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(F,null))}}]),a}(n.Component));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root"))},74:function(e,t,a){e.exports=a.p+"static/media/pkLogo.dcec42b2.svg"},83:function(e,t,a){e.exports=a(545)},88:function(e,t,a){},93:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.825001e4.chunk.js.map