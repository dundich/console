(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[123],{399:function(e,t,a){"use strict";var n,o=a(16),r=a(1),c=a(2),s=a(41),i=a(388),l=a(381),d=a(414),b=a(415),j=a(416),u=a(308),m=a(320),p=a(122),O=a(32),h=a(39),x=a.n(h),f=a(129),g=a.n(f),v=a(128),C=a.n(v),y=a(125),N=a.n(y),k=a(0),S=function(){clearInterval(n)},w={displayErrorMessage:O.h},M=Object(s.b)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),w)(Object(m.a)((function(e){return Object(u.a)({modalErrorContainer:{position:"absolute",marginTop:10,width:"80%",backgroundColor:"#fff",border:"#C72C48 1px solid",borderLeftWidth:12,borderRadius:3,zIndex:1e3,padding:"10px 15px",left:"50%",transform:"translateX(-50%)",opacity:0,transitionDuration:"0.2s"},modalErrorShow:{opacity:1},closeButton:{position:"absolute",right:5,fontSize:"small",border:0,backgroundColor:"#fff",cursor:"pointer"},errorTitle:{display:"flex",alignItems:"center"},errorLabel:{color:"#000",fontSize:18,fontWeight:500,marginLeft:5,marginRight:25},messageIcon:{color:"#C72C48",display:"flex","& svg":{width:32,height:32}},detailsButton:{color:"#9C9C9C",display:"flex",alignItems:"center",border:0,backgroundColor:"transparent",paddingLeft:5,fontSize:14,transformDuration:"0.3s",cursor:"pointer"},extraDetailsContainer:{fontStyle:"italic",color:"#9C9C9C",lineHeight:0,padding:"0 10px",transition:"all .2s ease-in-out",overflow:"hidden"},extraDetailsOpen:{lineHeight:1,padding:"3px 10px"},arrowElement:{marginLeft:-5},arrowOpen:{transform:"rotateZ(90deg)",transformDuration:"0.3s"}})}))((function(e){var t=e.classes,a=e.modalSnackMessage,r=e.displayErrorMessage,s=e.customStyle,i=Object(c.useState)(!1),l=Object(o.a)(i,2),d=l[0],b=l[1],j=Object(c.useState)(!1),u=Object(o.a)(j,2),m=u[0],p=u[1],O=Object(c.useCallback)((function(){p(!1)}),[]);Object(c.useEffect)((function(){m||(r({detailedError:"",errorMessage:""}),b(!1))}),[r,m]),Object(c.useEffect)((function(){""!==a.message&&"error"===a.type&&p(!0)}),[O,a.message,a.type]);var h=x()(a,"message",""),f=x()(a,"detailedErrorMsg","");return"error"!==a.type||""===h?null:Object(k.jsx)(c.Fragment,{children:Object(k.jsxs)("div",{className:"".concat(t.modalErrorContainer," ").concat(m?t.modalErrorShow:""),style:s,onMouseOver:S,onMouseLeave:function(){n=setInterval(O,1e4)},children:[Object(k.jsx)("button",{className:t.closeButton,onClick:O,children:Object(k.jsx)(N.a,{})}),Object(k.jsxs)("div",{className:t.errorTitle,children:[Object(k.jsx)("span",{className:t.messageIcon,children:Object(k.jsx)(C.a,{})}),Object(k.jsx)("span",{className:t.errorLabel,children:h})]}),""!==f&&Object(k.jsxs)(c.Fragment,{children:[Object(k.jsx)("div",{className:t.detailsContainerLink,children:Object(k.jsxs)("button",{className:t.detailsButton,onClick:function(){b(!d)},children:["Details",Object(k.jsx)(g.a,{className:"".concat(t.arrowElement," ").concat(d?t.arrowOpen:"")})]})}),Object(k.jsx)("div",{className:"".concat(t.extraDetailsContainer," ").concat(d?t.extraDetailsOpen:""),children:f})]})]})})}))),E=Object(s.b)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:O.i});t.a=Object(m.a)((function(e){return Object(u.a)(Object(r.a)(Object(r.a)({},p.h),{},{root:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},p.z))}))(E((function(e){var t=e.onClose,a=e.modalOpen,n=e.title,s=e.children,u=e.classes,m=e.wideLimit,p=void 0===m||m,O=e.modalSnackMessage,h=e.noContentPadding,x=e.setModalSnackMessage,f=e.titleIcon,g=void 0===f?null:f,v=Object(c.useState)(!1),C=Object(o.a)(v,2),y=C[0],S=C[1];Object(c.useEffect)((function(){x("")}),[x]),Object(c.useEffect)((function(){if(O){if(""===O.message)return void S(!1);"error"!==O.type&&S(!0)}}),[O]);var w=p?{classes:{paper:u.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},E="";return O&&(E=O.detailedErrorMsg,(""===O.detailedErrorMsg||O.detailedErrorMsg.length<5)&&(E=O.message)),Object(k.jsxs)(d.a,Object(r.a)(Object(r.a)({open:a,classes:u},w),{},{scroll:"paper",onClose:function(e,a){"backdropClick"!==a&&t()},className:u.root,children:[Object(k.jsxs)(b.a,{className:u.title,children:[Object(k.jsxs)("div",{className:u.titleText,children:[g," ",n]}),Object(k.jsx)("div",{className:u.closeContainer,children:Object(k.jsx)(i.a,{"aria-label":"close",className:u.closeButton,onClick:t,disableRipple:!0,size:"small",children:Object(k.jsx)(N.a,{})})})]}),Object(k.jsx)(M,{}),Object(k.jsx)(l.a,{open:y,className:u.snackBarModal,onClose:function(){S(!1),x("")},message:E,ContentProps:{className:"".concat(u.snackBar," ").concat(O&&"error"===O.type?u.errorSnackBar:"")},autoHideDuration:O&&"error"===O.type?1e4:5e3}),Object(k.jsx)(j.a,{className:h?"":u.content,children:s})]}))})))},400:function(e,t,a){"use strict";var n=a(1),o=a(2),r=a.n(o),c=a(430),s=a(444),i=a(822),l=a(385),d=a(388),b=a(308),j=a(378),u=a(320),m=a(122),p=a(123),O=a(0),h=Object(j.a)((function(e){return Object(b.a)(Object(n.a)({},m.n))}));function x(e){var t=h();return Object(O.jsx)(c.a,Object(n.a)({InputProps:{classes:t}},e))}t.a=Object(u.a)((function(e){return Object(b.a)(Object(n.a)(Object(n.a)(Object(n.a)({},m.i),m.E),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var t=e.label,a=e.onChange,o=e.value,c=e.id,b=e.name,j=e.type,u=void 0===j?"text":j,m=e.autoComplete,h=void 0===m?"off":m,f=e.disabled,g=void 0!==f&&f,v=e.multiline,C=void 0!==v&&v,y=e.tooltip,N=void 0===y?"":y,k=e.index,S=void 0===k?0:k,w=e.error,M=void 0===w?"":w,E=e.required,L=void 0!==E&&E,B=e.placeholder,T=void 0===B?"":B,I=e.min,D=e.max,F=e.overlayIcon,z=void 0===F?null:F,R=e.overlayObject,W=void 0===R?null:R,A=e.extraInputProps,P=void 0===A?{}:A,H=e.overlayAction,K=e.noLabelMinWidth,q=void 0!==K&&K,J=e.pattern,U=void 0===J?"":J,G=e.autoFocus,X=void 0!==G&&G,Z=e.classes,Q=Object(n.a)({"data-index":S},P);return"number"===u&&I&&(Q.min=I),"number"===u&&D&&(Q.max=D),""!==U&&(Q.pattern=U),Object(O.jsx)(r.a.Fragment,{children:Object(O.jsxs)(s.a,{container:!0,className:" ".concat(""!==M?Z.errorInField:Z.inputBoxContainer),children:[""!==t&&Object(O.jsxs)(i.a,{htmlFor:c,className:q?Z.noMinWidthLabel:Z.inputLabel,children:[Object(O.jsxs)("span",{children:[t,L?"*":""]}),""!==N&&Object(O.jsx)("div",{className:Z.tooltipContainer,children:Object(O.jsx)(l.a,{title:N,placement:"top-start",children:Object(O.jsx)("div",{className:Z.tooltip,children:Object(O.jsx)(p.a,{})})})})]}),Object(O.jsxs)("div",{className:Z.textBoxContainer,children:[Object(O.jsx)(x,{id:c,name:b,fullWidth:!0,value:o,autoFocus:X,disabled:g,onChange:a,type:u,multiline:C,autoComplete:h,inputProps:Q,error:""!==M,helperText:M,placeholder:T,className:Z.inputRebase}),z&&Object(O.jsx)("div",{className:"".concat(Z.overlayAction," ").concat(""!==t?"withLabel":""),children:Object(O.jsx)(d.a,{onClick:H?function(){H()}:function(){return null},size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:z})}),W&&Object(O.jsx)("div",{className:"".concat(Z.overlayAction," ").concat(""!==t?"withLabel":""),children:W})]})]})})}))},901:function(e,t,a){"use strict";a.r(t);var n=a(16),o=a(1),r=a(2),c=a(39),s=a.n(c),i=a(41),l=a(444),d=a(386),b=a(308),j=a(320),u=a(122),m=a(32),p=a(400),O=a(399),h=a(52),x=a(23),f=a(0),g={setModalErrorSnackMessage:m.h},v=Object(i.b)((function(e){var t=e.system;return{distributedSetup:s()(t,"distributedSetup",!1)}}),g);t.default=Object(j.a)((function(e){return Object(b.a)(Object(o.a)(Object(o.a)(Object(o.a)({},u.k),u.q),u.A))}))(v((function(e){var t=e.modalOpen,a=e.currentTags,c=e.onCloseAndUpdate,s=e.bucketName,i=e.setModalErrorSnackMessage,b=e.classes,j=Object(r.useState)(""),u=Object(n.a)(j,2),m=u[0],g=u[1],v=Object(r.useState)(""),C=Object(n.a)(v,2),y=C[0],N=C[1],k=Object(r.useState)(!1),S=Object(n.a)(k,2),w=S[0],M=S[1];return Object(f.jsx)(O.a,{modalOpen:t,title:"Add New Tag ",onClose:function(){c(!1)},titleIcon:Object(f.jsx)(x.f,{}),children:Object(f.jsxs)(l.a,{container:!0,children:[Object(f.jsxs)("div",{className:b.spacerBottom,children:[Object(f.jsx)("strong",{children:"Bucket"}),": ",s]}),Object(f.jsx)(l.a,{item:!0,xs:12,className:b.formFieldRow,children:Object(f.jsx)(p.a,{value:m,label:"New Tag Key",id:"newTagKey",name:"newTagKey",placeholder:"Enter New Tag Key",onChange:function(e){g(e.target.value)}})}),Object(f.jsx)(l.a,{item:!0,xs:12,className:b.formFieldRow,children:Object(f.jsx)(p.a,{value:y,label:"New Tag Label",id:"newTagLabel",name:"newTagLabel",placeholder:"Enter New Tag Label",onChange:function(e){N(e.target.value)}})}),Object(f.jsxs)(l.a,{item:!0,xs:12,className:b.modalButtonBar,children:[Object(f.jsx)(d.a,{type:"button",variant:"outlined",color:"primary",onClick:function(){N(""),g("")},children:"Clear"}),Object(f.jsx)(d.a,{type:"submit",variant:"contained",color:"primary",disabled:""===y.trim()||""===m.trim()||w,onClick:function(){M(!0);var e={};e[m]=y;var t=Object(o.a)(Object(o.a)({},a),e);h.a.invoke("PUT","/api/v1/buckets/".concat(s,"/tags"),{tags:t}).then((function(e){M(!1),c(!0)})).catch((function(e){i(e),M(!1)}))},children:"Save"})]})]})})})))}}]);
//# sourceMappingURL=123.fcd41f96.chunk.js.map