(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,n){},113:function(e,t,n){},147:function(e,t,n){e.exports=n(346)},152:function(e,t,n){},154:function(e,t,n){},160:function(e,t,n){},162:function(e,t,n){},164:function(e,t,n){},166:function(e,t,n){},168:function(e,t,n){},254:function(e,t,n){},256:function(e,t,n){},286:function(e,t){},346:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(27),i=n.n(r),o=(n(152),n(2)),l=n(3),u=n(5),s=n(4),d=n(6),p=(n(154),n(8)),m=function(e){return{type:"UPDATE_SELECTED_SLID",selectedSlide:e}},h=function(e){return{type:"UPDATE_PRESENTATION",presentation:e}},f=function(e){return{type:"UPDATE_PRESENTATION_SLIDS",updatedSlide:e}},b=function(e,t){return{type:"COMMAND_PRESENTATION",action:e,pres:t}},v=n(1),O=(n(160),n(162),n(164),n(166),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderFrame",value:function(){var e=this.props.data;return c.a.createElement("iframe",{className:"frame",src:e.src})}},{key:"renderImage",value:function(){var e=this.props.data;return c.a.createElement("img",{className:"image",src:e.src})}},{key:"render",value:function(){var e=this.props.data;return!e||"img"!==e.type&&"img_url"!==e.type?!e||"video"!==e.type&&"web"!==e.type?null:this.renderFrame():this.renderImage()}}]),t}(a.Component)),E=function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.content;return c.a.createElement(O,{data:e})}}]),t}(a.Component),j=function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.content;return c.a.createElement("div",{className:"contentContainer"},c.a.createElement(O,{data:e}),c.a.createElement("span",{className:"contentTitle"},e.title),c.a.createElement("span",{className:"contentSubtitle"},"ID: "+e.id))}}]),t}(a.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"drag",value:function(e){var t=this.props,n=t.content;(0,t.updateDraggedElt)(n.id)}},{key:"render",value:function(){var e=this,t=this.props,n=t.content,a=t.onlyContent;return c.a.createElement("div",{draggable:!0,onDrag:function(t){return e.drag(t)}},a&&c.a.createElement(j,{content:n}),!a&&c.a.createElement(E,{content:n}))}}]),t}(a.Component);var g=Object(p.b)(function(e,t){return Object(v.a)({},t)},{updateDraggedElt:function(e){return{type:"UPDATE_DRAGGED_ELT",id:e}}})(y),C=(n(168),n(137)),k=n.n(C),S=n(89),T=n.n(S),D=n(40),N=n.n(D),x=n(57),M=n.n(x),P=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={open:!1,type:"img",title:"",src:"",data:null,ext:null},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1,type:"img",title:"",src:"",data:""})}},{key:"handleTypeChange",value:function(e){this.setState({type:e.target.value})}},{key:"handleTitleChange",value:function(e){this.setState({title:e.target.value})}},{key:"handleScrChange",value:function(e){this.setState({src:e.target.value})}},{key:"handleFileChange",value:function(e){var t=this,n=new FileReader;this.setState({ext:e.target.files[0].type}),n.readAsBinaryString(e.target.files[0]),n.onloadend=function(e){t.setState({data:e.target.result})}}},{key:"render",value:function(){var e=this,t=this.state,n=t.title,a=t.type,r=t.src,i=t.open,o=t.data,l=t.ext,u=this.props.addContent,s=[c.a.createElement(T.a,{label:"Cancel",primary:!0,onClick:function(){return e.handleClose()}}),c.a.createElement(T.a,{label:"Add",primary:!0,onClick:function(){u({type:a,title:n,src:r,data:o,ext:l}),e.handleClose()}})];return c.a.createElement("div",null,c.a.createElement(N.a,{onClick:function(){return e.handleOpen()},className:"buttonFloatUid"},c.a.createElement(M.a,null)),c.a.createElement(k.a,{title:"Add a new content",actions:s,modal:!0,open:i},c.a.createElement("div",{className:"dialogContent"},c.a.createElement("label",{for:"titleInput"},"Title"),c.a.createElement("input",{value:n,id:"titleInput",type:"text",onChange:function(t){return e.handleTitleChange(t)}}),c.a.createElement("label",{for:"typeInput"},"Content Type"),c.a.createElement("select",{value:a,id:"typeInput",onChange:function(t){return e.handleTypeChange(t)}},c.a.createElement("option",{value:"img"},"img"),c.a.createElement("option",{value:"img_url"},"img_url"),c.a.createElement("option",{value:"video"},"video"),c.a.createElement("option",{value:"web"},"web")),"img"===a&&c.a.createElement("div",{className:"dialogContent"},c.a.createElement("label",{for:"fileInput"},"File"),c.a.createElement("input",{id:"fileInput",type:"file",accept:"image/*",onChange:function(t){return e.handleFileChange(t)}})),"img"!==a&&c.a.createElement("div",{className:"dialogContent"},c.a.createElement("label",{for:"urlInput"},"URL"),c.a.createElement("input",{value:r,id:"urlInput",type:"text",onChange:function(t){return e.handleScrChange(t)}})))))}}]),t}(a.Component);var A=Object(p.b)(function(e,t){return Object(v.a)({},t)},{addContent:function(e){return{type:"ADD_CONTENT",content:e}}})(P),w=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.contentMap;return c.a.createElement("div",null,e&&Object.keys(e).map(function(t,n){return c.a.createElement(g,{key:n,content:e[t],onlyContent:!0})}),c.a.createElement(A,null))}}]),t}(a.Component);var U=Object(p.b)(function(e,t){return Object(v.a)({},t,{contentMap:e.UpdateModelReducer.contentMap})},{})(w),_=(n(254),n(256),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleChangeTitle",value:function(e){var t=this.props,n=t.updateCurrentSlide,a=t.slide;n(Object(v.a)({},a,{title:e.target.value}))}},{key:"handleChangeTxt",value:function(e){var t=this.props,n=t.updateCurrentSlide,a=t.slide;n(Object(v.a)({},a,{txt:e.target.value}))}},{key:"render",value:function(){var e=this,t=this.props.slide;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"currentSlideTitle"},"Title"),c.a.createElement("input",{type:"text",className:"form-control",id:"currentSlideTitle",onChange:function(t){return e.handleChangeTitle(t)},value:t.title}),c.a.createElement("label",{htmlFor:"currentSlideText"},"Text"),c.a.createElement("textarea",{rows:"5",type:"text",className:"form-control",id:"currentSlideText",onChange:function(t){return e.handleChangeTxt(t)},value:t.txt}))}}]),t}(a.Component)),I=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"updateSelectedSlid",value:function(){var e=this.props,t=e.slide;(0,e.setSelectedSlid)(t)}},{key:"drop",value:function(e){var t=this.props,n=t.updateSlid,a=t.slide,c=t.draggedElt;n(Object(v.a)({},a,{contentMap:{1:c}}))}},{key:"onDragOver",value:function(e){e.stopPropagation(),e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.props,n=t.slide,a=t.displayMode,r=t.contentMap,i=t.updateSlid;return c.a.createElement("div",{className:"contentContainer",onClick:function(){return e.updateSelectedSlid()},onDrop:function(t){return e.drop(t)},onDragOver:function(t){return e.onDragOver(t)}},c.a.createElement("span",{className:"contentTitle"},n.title),c.a.createElement("span",{className:"contentSubtitle"},n.txt),r&&n.contentMap&&Object.keys(n.contentMap).length>0&&c.a.createElement(O,{data:r[n.contentMap[1]]}),"FULL_MNG"===a&&c.a.createElement(_,{slide:n,updateCurrentSlide:i}))}}]),t}(a.Component);var R=Object(p.b)(function(e,t){return Object(v.a)({},t,{contentMap:e.UpdateModelReducer.contentMap,draggedElt:e.SelectedReducer.draggedElt})},{setSelectedSlid:m,updateSlid:f})(I),L=(n(112),n(138)),F=(n(77),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.presentation;return c.a.createElement("div",null,e&&e.slidArray.map(function(e,t){return c.a.createElement(R,{key:t,slide:e,displayMode:"SHORT"})}))}}]),t}(a.Component));var G=Object(p.b)(function(e,t){return Object(v.a)({},t,{presentation:e.UpdateModelReducer.presentation})},{})(F),V=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleChangeTitle",value:function(e){var t=this.props,n=t.updatePresentation,a=t.presentation;n(Object(v.a)({},a,{title:e.target.value}))}},{key:"handleChangeDesc",value:function(e){var t=this.props,n=t.updatePresentation,a=t.presentation;n(Object(v.a)({},a,{description:e.target.value}))}},{key:"render",value:function(){var e=this,t=this.props.presentation;return c.a.createElement("div",null,t&&c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"currentSlideTitle"},"Title "),c.a.createElement("input",{type:"text",className:"form-control",id:"currentSlideTitle",onChange:function(t){return e.handleChangeTitle(t)},value:t.title}),c.a.createElement("label",{htmlFor:"currentSlideText"},"Description"),c.a.createElement("textarea",{rows:"5",type:"text",className:"form-control",id:"currentSlideText",onChange:function(t){return e.handleChangeDesc(t)},value:t.description})))}}]),t}(a.Component);var B=Object(p.b)(function(e,t){return Object(v.a)({},t,{presentation:e.UpdateModelReducer.presentation})},{updatePresentation:h})(V),X=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return Object(L.a)(this.props),c.a.createElement("div",null,c.a.createElement(B,null),c.a.createElement(G,null))}}]),t}(a.Component),J=n(139),W=n.n(J),H=n(87),K=n.n(H),$=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.updateSlid,n=e.selectedSlide,a=e.sendNavCmd;return c.a.createElement("div",{className:"buttonFloatCommand"},c.a.createElement(N.a,{mini:!0,onClick:function(){return t({add:!0})}},c.a.createElement(M.a,null)),c.a.createElement(N.a,{mini:!0,onClick:function(){return t(Object(v.a)({},n,{remove:!0}))}},c.a.createElement(W.a,null)),c.a.createElement(N.a,{mini:!0,onClick:function(){return a("SAVE_CMD")}},c.a.createElement(K.a,null)))}}]),t}(a.Component);var q=Object(p.b)(function(e,t){return Object(v.a)({},t,{selectedSlide:e.SelectedReducer.selectedSlide})},{updateSlid:f,sendNavCmd:b})($),z=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"height-100"},c.a.createElement(q,null),c.a.createElement(X,null))}}]),t}(a.Component);var Q=Object(p.b)(function(e,t){return Object(v.a)({},t)},{})(z),Y=(n(113),n(31)),Z=n.n(Y),ee=n(140),te=n.n(ee),ne=n(141),ae=n.n(ne),ce=n(142),re=n.n(ce),ie=n(143),oe=n.n(ie),le=n(144),ue=n.n(le),se=n(145),de=n.n(se),pe=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.sendNavCmd,n=e.presentation;return c.a.createElement("div",{className:"navigationButtons"},c.a.createElement(Z.a,{onClick:function(){return t("FIRST")}},c.a.createElement(oe.a,null)),c.a.createElement(Z.a,{onClick:function(){return t("PREVIOUS")}},c.a.createElement(de.a,null)),c.a.createElement(Z.a,{onClick:function(){return t("START",n)}},c.a.createElement(ae.a,null)),c.a.createElement(Z.a,{onClick:function(){return t("STOP")}},c.a.createElement(te.a,null)),c.a.createElement(Z.a,{onClick:function(){return t("NEXT")}},c.a.createElement(ue.a,null)),c.a.createElement(Z.a,{onClick:function(){return t("LAST")}},c.a.createElement(re.a,null)))}}]),t}(a.Component);var me=Object(p.b)(function(e,t){return Object(v.a)({},t,{presentation:e.UpdateModelReducer.presentation})},{sendNavCmd:b})(pe),he=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"updateCurrentSlid",value:function(e){(0,this.props.updateSlid)(e)}},{key:"render",value:function(){var e=this,t=this.props.selectedSlide;return c.a.createElement("div",{className:"height-100"},t&&c.a.createElement(R,{slide:t,displayMode:"FULL_MNG",updateCurrentSlide:function(t){return e.updateCurrentSlid(t)}}),c.a.createElement(me,null))}}]),t}(a.Component);var fe=Object(p.b)(function(e,t){return Object(v.a)({},t,{selectedSlide:e.SelectedReducer.selectedSlide})},{updateSlid:f})(he),be=n(262),ve=n(289),Oe=function(){function e(){Object(o.a)(this,e),this.comm={},this.comm.io={},this.socket="",this.instance=ve.create(),this.emitOnConnect=this.emitOnConnect.bind(this)}return Object(l.a)(e,[{key:"toString",value:function(){return""}},{key:"loadPres",value:function(e,t,n){this.instance.get("/loadPres").then(function(n){var a=Object.keys(n.data).length;console.log("raw data"),console.log(n.data);var c="";a>0&&(console.log("key"),console.log(e),console.log("data"),console.log(n.data[e]),c=n.data[e]),t(c)}).catch(function(e){n(e)})}},{key:"loadContent",value:function(e,t){this.instance.get("/contents").then(function(t){for(var n=Object.keys(t.data).length,a={},c=0;c<n;c++){var r=t.data[Object.keys(t.data)[c]];a[r.id]=r}e(a)}).catch(function(e){t(e)})}},{key:"savPres",value:function(e,t){this.instance.post("/savePres",e).then(function(e){console.log(e)}).catch(function(e){t(e)})}},{key:"savContent",value:function(e,t,n){this.instance.post("/contents",e).then(function(e){t(e)}).catch(function(e){n(e)})}},{key:"fileUpload",value:function(e,t,n){var a=new FormData;a.append("file",e),this.instance.post("/file-upload",a).then(function(e){console.log(e),t()}).catch(function(e){n(e)})}},{key:"emitOnConnect",value:function(e){console.log("message"),console.log("socket"),console.log(this.socket),console.log("this.comm.io.uuid"),console.log(this.comm.io.uuid),this.socket.emit("data_comm",{id:this.comm.io.uuid},function(e){console.log(e)})}},{key:"socketConnection",value:function(e){var t=this;this.socket=be.connect(Object({NODE_ENV:"production",PUBLIC_URL:""}).SOCKET_URL),this.comm.io.uuid=e,this.socket.on("connection",function(e){t.emitOnConnect(e)}),this.socket.on("newPres",function(e){}),this.socket.on("slidEvent",function(e){})}},{key:"backward",value:function(){this.socket.emit("slidEvent",{CMD:"PREV"})}},{key:"forward",value:function(){this.socket.emit("slidEvent",{CMD:"NEXT"})}},{key:"play",value:function(e){this.socket.emit("slidEvent",{CMD:"START",PRES_ID:e})}},{key:"pause",value:function(){this.socket.emit("slidEvent",{CMD:"PAUSE"})}},{key:"begin",value:function(){this.socket.emit("slidEvent",{CMD:"BEGIN"})}},{key:"end",value:function(){this.socket.emit("slidEvent",{CMD:"END"})}}]),e}(),Ee=n(55),je=n.n(Ee),ye=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.updateContentMap,n=e.updatePresentation;this.comm=new Oe,this.comm.loadContent(function(e){t(e)},function(e){console.error(e)}),this.comm.loadPres("efa0a79a-2f20-4e97-b0b7-71f824bfe349",function(e){n(e)},function(e){console.error(e)})}},{key:"componentDidUpdate",value:function(e){"SAVE_CMD"===this.props.cmdPres&&"SAVE_CMD"!==e.cmdPres&&this.comm.savPres(this.props.presentation,function(e){return console.error(e)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"container-fluid height-100"},c.a.createElement("div",{className:"row height-100"},c.a.createElement("div",{className:"col-md-3 col-lg-3 height-100 vertical-scroll"},c.a.createElement(Q,null)),c.a.createElement("div",{className:"col-md-6 col-lg-6 height-100 vertical-scroll"},c.a.createElement(fe,null)),c.a.createElement("div",{className:"col-md-3 col-lg-3 height-100 vertical-scroll"},c.a.createElement(U,null))))}}]),t}(a.Component);var ge=Object(p.b)(function(e,t){return Object(v.a)({},t,{cmdPres:e.CommandReducer.cmdPres,presentation:e.UpdateModelReducer.presentation})},{updateContentMap:function(e){return{type:"UPDATE_CONTENT_MAP",contentMap:e}},updatePresentation:h})(ye),Ce=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"mainContainer"},c.a.createElement(ge,null))}}]),t}(a.Component);var ke=Object(p.b)(function(e,t){return{}},{})(Ce),Se=n(146),Te=n.n(Se),De=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(Te.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(ke,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ne=function(e){return function(t){return function(n){var a=!1,c=[];function r(){c.forEach(function(t){return e.dispatch(t)}),c=[]}var i=Object.assign({},n,{asyncDispatch:function(e){c=c.concat([e]),a&&r()}});t(i),a=!0,r()}}},xe=n(30),Me=n(56),Pe=new Oe,Ae=n(55),we=function(e,t){switch(e||(e={presentation:void 0,contentMap:void 0,updatedSlide:void 0}),t.type){case"UPDATE_PRESENTATION":return t.asyncDispatch(b()),Object(v.a)({},e,{presentation:Object(v.a)({},t.presentation)});case"UPDATE_PRESENTATION_SLIDS":var n=e.presentation,a={id:Ae.generateUUID(),title:"",txt:"",contentMap:{1:""}};if(t.updatedSlide.add)n.slidArray.push(a),t.asyncDispatch(m(a));else{console.log(t.updatedSlide);var c=n.slidArray.findIndex(function(e){return e.id===t.updatedSlide.id});c>-1&&(t.updatedSlide.remove?(n.slidArray.splice(c,1),t.asyncDispatch(m(null))):(n.slidArray[c]=t.updatedSlide,t.asyncDispatch(m(t.updatedSlide))))}return t.asyncDispatch(b()),Object(v.a)({},e,{presentation:Object(v.a)({},n)});case"UPDATE_CONTENT_MAP":return Object(v.a)({},e,{contentMap:Object(v.a)({},t.contentMap)});case"ADD_CONTENT":var r=Ae.generateUUID(),i={};"img"===t.content.type&&(i={fileName:r+t.content.ext.replace("image/","."),src:"/contents/"+r,data:t.content.data});var o=Object(v.a)({id:r,src:t.content.src,type:t.content.type,title:t.content.title},i);return Pe.savContent(o,function(e){t.asyncDispatch({type:"CONTENT_ADDED",newContent:e.data})},function(e){console.error(e)}),Object(v.a)({},e);case"CONTENT_ADDED":return Object(v.a)({},e,{contentMap:Object(v.a)({},e.contentMap,Object(Me.a)({},t.newContent.id,t.newContent))});default:return Object(v.a)({},e)}},Ue=function(e,t){switch(e||(e={selectedSlide:void 0}),t.type){case"UPDATE_SELECTED_SLID":return Object(v.a)({},e,{selectedSlide:t.selectedSlide});case"UPDATE_DRAGGED_ELT":return Object(v.a)({},e,{draggedElt:t.id});default:return Object(v.a)({},e)}},_e=new Oe,Ie=je.a.generateUUID();_e.socketConnection(Ie);var Re=function(e,t){switch(e||(e={}),t.type){case"COMMAND_PRESENTATION":switch(t.action){case"FIRST":_e.begin();break;case"PREVIOUS":_e.backward();break;case"START":_e.play(t.pres.id);break;case"STOP":_e.pause();break;case"NEXT":_e.forward();break;case"LAST":_e.end()}return Object(v.a)({},e,{cmdPres:t.action});default:return Object(v.a)({},e)}},Le=Object(xe.c)({UpdateModelReducer:we,SelectedReducer:Ue,CommandReducer:Re}),Fe=Object(xe.d)(Le,Object(xe.a)(Ne));i.a.render(c.a.createElement(p.a,{store:Fe},c.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},55:function(e,t){var n={generateUUID:function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)})},getNextSlidIndex:function(e,t){for(var n=-1,a=0;a<e.length;a++)if(t===e[a].id){n=a;break}return n+1<e.length?n+1:e.length-1},getPrevSlidIndex:function(e,t){for(var n=-1,a=0;a<e.length;a++)if(t===e[a].id){n=a;break}return n-1>=0?n-1:0}};e.exports=n},77:function(e,t,n){}},[[147,2,1]]]);
//# sourceMappingURL=main.f4551818.chunk.js.map