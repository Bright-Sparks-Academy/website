/*! For license information please see main.39860a05.js.LICENSE.txt */
(()=>{var e={730:(e,t,n)=>{"use strict";var r=n(43),a=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,a,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),_=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),N=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var R=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var L=Symbol.iterator;function I(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=L&&e[L]||e["@@iterator"])?e:null}var D,F=Object.assign;function A(e){if(void 0===D)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||""}return"\n"+D+e}var M=!1;function W(e,t){if(!e||M)return"";M=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var a=u.stack.split("\n"),o=r.stack.split("\n"),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(1!==i||1!==l)do{if(i--,0>--l||a[i]!==o[l]){var s="\n"+a[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{M=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?A(e):""}function B(e){switch(e.tag){case 5:return A(e.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return e=W(e.type,!1);case 11:return e=W(e.type.render,!1);case 1:return e=W(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case E:return"Profiler";case j:return"StrictMode";case z:return"Suspense";case T:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case _:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case O:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case N:t=e._payload,e=e._init;try{return U(e(t))}catch(n){}}return null}function $(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function q(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Y(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function K(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Q(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function G(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function J(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function X(e,t){J(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&K(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function oe(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ve=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,je=null;function Ee(e){if(e=ba(e)){if("function"!==typeof ke)throw Error(o(280));var t=e.stateNode;t&&(t=wa(t),ke(e.stateNode,e.type,t))}}function Ce(e){Se?je?je.push(e):je=[e]:Se=e}function _e(){if(Se){var e=Se,t=je;if(je=Se=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Pe(e,t){return e(t)}function ze(){}var Te=!1;function Oe(e,t,n){if(Te)return e(t,n);Te=!0;try{return Pe(e,t,n)}finally{Te=!1,(null!==Se||null!==je)&&(ze(),_e())}}function Ne(e,t){var n=e.stateNode;if(null===n)return null;var r=wa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Re=!1;if(c)try{var Le={};Object.defineProperty(Le,"passive",{get:function(){Re=!0}}),window.addEventListener("test",Le,Le),window.removeEventListener("test",Le,Le)}catch(ce){Re=!1}function Ie(e,t,n,r,a,o,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var De=!1,Fe=null,Ae=!1,Me=null,We={onError:function(e){De=!0,Fe=e}};function Be(e,t,n,r,a,o,i,l,s){De=!1,Fe=null,Ie.apply(We,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function $e(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Ue(e)!==e)throw Error(o(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return He(a),e;if(i===r)return He(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?qe(e):null}function qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=qe(e);if(null!==t)return t;e=e.sibling}return null}var Ye=a.unstable_scheduleCallback,Ke=a.unstable_cancelCallback,Qe=a.unstable_shouldYield,Ge=a.unstable_requestPaint,Je=a.unstable_now,Xe=a.unstable_getCurrentPriorityLevel,Ze=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,ot=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~a;0!==l?r=dt(l):0!==(o&=i)&&(r=dt(o))}else 0!==(i=n&~a)?r=dt(i):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(o=t&-t)||16===a&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-it(t)),r|=e[n],t&=~a;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var bt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,jt,Et,Ct=!1,_t=[],Pt=null,zt=null,Tt=null,Ot=new Map,Nt=new Map,Rt=[],Lt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function It(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Ot.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nt.delete(t.pointerId)}}function Dt(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=ba(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Ft(e){var t=ya(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=$e(n)))return e.blockedOn=t,void Et(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function At(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ba(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function Mt(e,t,n){At(e)&&n.delete(t)}function Wt(){Ct=!1,null!==Pt&&At(Pt)&&(Pt=null),null!==zt&&At(zt)&&(zt=null),null!==Tt&&At(Tt)&&(Tt=null),Ot.forEach(Mt),Nt.forEach(Mt)}function Bt(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Wt)))}function Ut(e){function t(t){return Bt(t,e)}if(0<_t.length){Bt(_t[0],e);for(var n=1;n<_t.length;n++){var r=_t[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Pt&&Bt(Pt,e),null!==zt&&Bt(zt,e),null!==Tt&&Bt(Tt,e),Ot.forEach(t),Nt.forEach(t),n=0;n<Rt.length;n++)(r=Rt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&null===(n=Rt[0]).blockedOn;)Ft(n),null===n.blockedOn&&Rt.shift()}var $t=x.ReactCurrentBatchConfig,Ht=!0;function Vt(e,t,n,r){var a=bt,o=$t.transition;$t.transition=null;try{bt=1,Yt(e,t,n,r)}finally{bt=a,$t.transition=o}}function qt(e,t,n,r){var a=bt,o=$t.transition;$t.transition=null;try{bt=4,Yt(e,t,n,r)}finally{bt=a,$t.transition=o}}function Yt(e,t,n,r){if(Ht){var a=Qt(e,t,n,r);if(null===a)Hr(e,t,r,Kt,n),It(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Pt=Dt(Pt,e,t,n,r,a),!0;case"dragenter":return zt=Dt(zt,e,t,n,r,a),!0;case"mouseover":return Tt=Dt(Tt,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Ot.set(o,Dt(Ot.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Nt.set(o,Dt(Nt.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(It(e,r),4&t&&-1<Lt.indexOf(e)){for(;null!==a;){var o=ba(a);if(null!==o&&wt(o),null===(o=Qt(e,t,n,r))&&Hr(e,t,r,Kt,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Kt=null;function Qt(e,t,n,r){if(Kt=null,null!==(e=ya(e=we(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=$e(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kt=e,null}function Gt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Jt=null,Xt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Xt,r=n.length,a="value"in Jt?Jt.value:Jt.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return Zt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(un),dn=F({},un,{view:0,detail:0}),fn=an(dn),pn=F({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=an(pn),mn=an(F({},pn,{dataTransfer:0})),gn=an(F({},dn,{relatedTarget:0})),vn=an(F({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=F({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=an(yn),xn=an(F({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function En(){return jn}var Cn=F({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),_n=an(Cn),Pn=an(F({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),zn=an(F({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),Tn=an(F({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),On=F({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nn=an(On),Rn=[9,13,27,32],Ln=c&&"CompositionEvent"in window,In=null;c&&"documentMode"in document&&(In=document.documentMode);var Dn=c&&"TextEvent"in window&&!In,Fn=c&&(!Ln||In&&8<In&&11>=In),An=String.fromCharCode(32),Mn=!1;function Wn(e,t){switch(e){case"keyup":return-1!==Rn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var $n={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!$n[e.type]:"textarea"===t}function Vn(e,t,n,r){Ce(r),0<(t=qr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,Yn=null;function Kn(e){Ar(e,0)}function Qn(e){if(Y(xa(e)))return e}function Gn(e,t){if("change"===e)return t}var Jn=!1;if(c){var Xn;if(c){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Xn=Zn}else Xn=!1;Jn=Xn&&(!document.documentMode||9<document.documentMode)}function tr(){qn&&(qn.detachEvent("onpropertychange",nr),Yn=qn=null)}function nr(e){if("value"===e.propertyName&&Qn(Yn)){var t=[];Vn(t,Yn,e,we(e)),Oe(Kn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Yn=n,(qn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qn(Yn)}function or(e,t){if("click"===e)return Qn(t)}function ir(e,t){if("input"===e||"change"===e)return Qn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=K();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=K((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=void 0===r.end?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=cr(n,o);var i=cr(n,r);a&&i&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,br=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==gr||gr!==K(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&sr(yr,r)||(yr=r,0<(r=qr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},jr={};function Er(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return Sr[e]=n[t];return e}c&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Cr=Er("animationend"),_r=Er("animationiteration"),Pr=Er("animationstart"),zr=Er("transitionend"),Tr=new Map,Or="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){Tr.set(e,t),s(t,[e])}for(var Rr=0;Rr<Or.length;Rr++){var Lr=Or[Rr];Nr(Lr.toLowerCase(),"on"+(Lr[0].toUpperCase()+Lr.slice(1)))}Nr(Cr,"onAnimationEnd"),Nr(_r,"onAnimationIteration"),Nr(Pr,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(zr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function Fr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,i,l,s,u){if(Be.apply(this,arguments),De){if(!De)throw Error(o(198));var c=Fe;De=!1,Fe=null,Ae||(Ae=!0,Me=c)}}(r,t,void 0,e),e.currentTarget=null}function Ar(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;Fr(a,l,u),o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,u=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;Fr(a,l,u),o=s}}}if(Ae)throw e=Me,Ae=!1,Me=null,e}function Mr(e,t){var n=t[ma];void 0===n&&(n=t[ma]=new Set);var r=e+"__bubble";n.has(r)||($r(t,e,2,!1),n.add(r))}function Wr(e,t,n){var r=0;t&&(r|=4),$r(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Br]){e[Br]=!0,i.forEach((function(t){"selectionchange"!==t&&(Dr.has(t)||Wr(t,!1,e),Wr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Br]||(t[Br]=!0,Wr("selectionchange",!1,t))}}function $r(e,t,n,r){switch(Gt(t)){case 1:var a=Vt;break;case 4:a=qt;break;default:a=Yt}n=a.bind(null,t,n,e),a=void 0,!Re||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;i=i.return}for(;null!==l;){if(null===(i=ya(l)))return;if(5===(s=i.tag)||6===s){r=o=i;continue e}l=l.parentNode}}r=r.return}Oe((function(){var r=o,a=we(n),i=[];e:{var l=Tr.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=_n;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=zn;break;case Cr:case _r:case Pr:s=vn;break;case zr:s=Tn;break;case"scroll":s=fn;break;case"wheel":s=Nn;break;case"copy":case"cut":case"paste":s=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Pn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Ne(h,f))&&c.push(Vr(h,m,p)))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,a),i.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===xe||!(u=n.relatedTarget||n.fromElement)||!ya(u)&&!u[ha])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?ya(u):null)&&(u!==(d=Ue(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=Pn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:xa(s),p=null==u?l:xa(u),(l=new c(m,h+"leave",s,n,a)).target=d,l.relatedTarget=p,m=null,ya(a)===r&&((c=new c(f,h+"enter",u,n,a)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)e:{for(f=u,h=0,p=c=s;p;p=Yr(p))h++;for(p=0,m=f;m;m=Yr(m))p++;for(;0<h-p;)c=Yr(c),h--;for(;0<p-h;)f=Yr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Yr(c),f=Yr(f)}c=null}else c=null;null!==s&&Kr(i,l,s,c,!1),null!==u&&null!==d&&Kr(i,d,u,c,!0)}if("select"===(s=(l=r?xa(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Gn;else if(Hn(l))if(Jn)g=ir;else{g=ar;var v=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=or);switch(g&&(g=g(e,r))?Vn(i,g,n,a):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?xa(r):window,e){case"focusin":(Hn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,xr(i,n,a);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":xr(i,n,a)}var y;if(Ln)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Un?Wn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Fn&&"ko"!==n.locale&&(Un||"onCompositionStart"!==b?"onCompositionEnd"===b&&Un&&(y=en()):(Xt="value"in(Jt=a)?Jt.value:Jt.textContent,Un=!0)),0<(v=qr(r,b)).length&&(b=new xn(b,e,null,n,a),i.push({event:b,listeners:v}),y?b.data=y:null!==(y=Bn(n))&&(b.data=y))),(y=Dn?function(e,t){switch(e){case"compositionend":return Bn(t);case"keypress":return 32!==t.which?null:(Mn=!0,An);case"textInput":return(e=t.data)===An&&Mn?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!Ln&&Wn(e,t)?(e=en(),Zt=Xt=Jt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=qr(r,"onBeforeInput")).length&&(a=new xn("onBeforeInput","beforeinput",null,n,a),i.push({event:a,listeners:r}),a.data=y))}Ar(i,t)}))}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;5===a.tag&&null!==o&&(a=o,null!=(o=Ne(e,n))&&r.unshift(Vr(e,o,a)),null!=(o=Ne(e,t))&&r.push(Vr(e,o,a))),e=e.return}return r}function Yr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Kr(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,a?null!=(s=Ne(n,o))&&i.unshift(Vr(n,s,l)):a||null!=(s=Ne(n,o))&&i.push(Vr(n,s,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Qr=/\r\n?/g,Gr=/\u0000|\uFFFD/g;function Jr(e){return("string"===typeof e?e:""+e).replace(Qr,"\n").replace(Gr,"")}function Xr(e,t,n){if(t=Jr(t),Jr(e)!==t&&n)throw Error(o(425))}function Zr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,oa="function"===typeof Promise?Promise:void 0,ia="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oa?function(e){return oa.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout((function(){throw e}))}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Ut(t)}function ua(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ca(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),fa="__reactFiber$"+da,pa="__reactProps$"+da,ha="__reactContainer$"+da,ma="__reactEvents$"+da,ga="__reactListeners$"+da,va="__reactHandles$"+da;function ya(e){var t=e[fa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[fa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ca(e);null!==e;){if(n=e[fa])return n;e=ca(e)}return t}n=(e=n).parentNode}return null}function ba(e){return!(e=e[fa]||e[ha])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wa(e){return e[pa]||null}var ka=[],Sa=-1;function ja(e){return{current:e}}function Ea(e){0>Sa||(e.current=ka[Sa],ka[Sa]=null,Sa--)}function Ca(e,t){Sa++,ka[Sa]=e.current,e.current=t}var _a={},Pa=ja(_a),za=ja(!1),Ta=_a;function Oa(e,t){var n=e.type.contextTypes;if(!n)return _a;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Na(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ra(){Ea(za),Ea(Pa)}function La(e,t,n){if(Pa.current!==_a)throw Error(o(168));Ca(Pa,t),Ca(za,n)}function Ia(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(o(108,$(e)||"Unknown",a));return F({},n,r)}function Da(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_a,Ta=Pa.current,Ca(Pa,e),Ca(za,za.current),!0}function Fa(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Ia(e,t,Ta),r.__reactInternalMemoizedMergedChildContext=e,Ea(za),Ea(Pa),Ca(Pa,e)):Ea(za),Ca(za,n)}var Aa=null,Ma=!1,Wa=!1;function Ba(e){null===Aa?Aa=[e]:Aa.push(e)}function Ua(){if(!Wa&&null!==Aa){Wa=!0;var e=0,t=bt;try{var n=Aa;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Aa=null,Ma=!1}catch(a){throw null!==Aa&&(Aa=Aa.slice(e+1)),Ye(Ze,Ua),a}finally{bt=t,Wa=!1}}return null}var $a=[],Ha=0,Va=null,qa=0,Ya=[],Ka=0,Qa=null,Ga=1,Ja="";function Xa(e,t){$a[Ha++]=qa,$a[Ha++]=Va,Va=e,qa=t}function Za(e,t,n){Ya[Ka++]=Ga,Ya[Ka++]=Ja,Ya[Ka++]=Qa,Qa=e;var r=Ga;e=Ja;var a=32-it(r)-1;r&=~(1<<a),n+=1;var o=32-it(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Ga=1<<32-it(t)+a|n<<a|r,Ja=o+e}else Ga=1<<o|n<<a|r,Ja=e}function eo(e){null!==e.return&&(Xa(e,1),Za(e,1,0))}function to(e){for(;e===Va;)Va=$a[--Ha],$a[Ha]=null,qa=$a[--Ha],$a[Ha]=null;for(;e===Qa;)Qa=Ya[--Ka],Ya[Ka]=null,Ja=Ya[--Ka],Ya[Ka]=null,Ga=Ya[--Ka],Ya[Ka]=null}var no=null,ro=null,ao=!1,oo=null;function io(e,t){var n=Ou(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function lo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ua(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Qa?{id:Ga,overflow:Ja}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Ou(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function so(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function uo(e){if(ao){var t=ro;if(t){var n=t;if(!lo(e,t)){if(so(e))throw Error(o(418));t=ua(n.nextSibling);var r=no;t&&lo(e,t)?io(r,n):(e.flags=-4097&e.flags|2,ao=!1,no=e)}}else{if(so(e))throw Error(o(418));e.flags=-4097&e.flags|2,ao=!1,no=e}}}function co(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function fo(e){if(e!==no)return!1;if(!ao)return co(e),ao=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ro)){if(so(e))throw po(),Error(o(418));for(;t;)io(e,t),t=ua(t.nextSibling)}if(co(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ua(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ua(e.stateNode.nextSibling):null;return!0}function po(){for(var e=ro;e;)e=ua(e.nextSibling)}function ho(){ro=no=null,ao=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=x.ReactCurrentBatchConfig;function vo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var a=r,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=a.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bo(e){return(0,e._init)(e._payload)}function xo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Ru(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Fu(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===N&&bo(o)===t.type)?((r=a(t,n.props)).ref=vo(e,t,n),r.return=e,r):((r=Lu(n.type,n.key,n.props,null,e.mode,r)).ref=vo(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Au(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Iu(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Fu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Lu(t.type,t.key,t.props,null,e.mode,n)).ref=vo(e,null,t),n.return=e,n;case k:return(t=Au(t,e.mode,n)).return=e,t;case N:return f(e,(0,t._init)(t._payload),n)}if(te(t)||I(t))return(t=Iu(t,e.mode,n,null)).return=e,t;yo(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===a?u(e,t,n,r):null;case k:return n.key===a?c(e,t,n,r):null;case N:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||I(n))return null!==a?null:d(e,t,n,r,null);yo(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case k:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case N:return h(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||I(r))return d(t,e=e.get(n)||null,r,a,null);yo(t,r)}return null}function m(a,o,l,s){for(var u=null,c=null,d=o,m=o=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(a,d,l[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(a,d),o=i(v,o,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===l.length)return n(a,d),ao&&Xa(a,m),u;if(null===d){for(;m<l.length;m++)null!==(d=f(a,l[m],s))&&(o=i(d,o,m),null===c?u=d:c.sibling=d,c=d);return ao&&Xa(a,m),u}for(d=r(a,d);m<l.length;m++)null!==(g=h(d,a,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=i(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(a,e)})),ao&&Xa(a,m),u}function g(a,l,s,u){var c=I(s);if("function"!==typeof c)throw Error(o(150));if(null==(s=c.call(s)))throw Error(o(151));for(var d=c=null,m=l,g=l=0,v=null,y=s.next();null!==m&&!y.done;g++,y=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=p(a,m,y.value,u);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(a,m),l=i(b,l,g),null===d?c=b:d.sibling=b,d=b,m=v}if(y.done)return n(a,m),ao&&Xa(a,g),c;if(null===m){for(;!y.done;g++,y=s.next())null!==(y=f(a,y.value,u))&&(l=i(y,l,g),null===d?c=y:d.sibling=y,d=y);return ao&&Xa(a,g),c}for(m=r(a,m);!y.done;g++,y=s.next())null!==(y=h(m,a,g,y.value,u))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),l=i(y,l,g),null===d?c=y:d.sibling=y,d=y);return e&&m.forEach((function(e){return t(a,e)})),ao&&Xa(a,g),c}return function e(r,o,i,s){if("object"===typeof i&&null!==i&&i.type===S&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case w:e:{for(var u=i.key,c=o;null!==c;){if(c.key===u){if((u=i.type)===S){if(7===c.tag){n(r,c.sibling),(o=a(c,i.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===N&&bo(u)===c.type){n(r,c.sibling),(o=a(c,i.props)).ref=vo(r,c,i),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}i.type===S?((o=Iu(i.props.children,r.mode,s,i.key)).return=r,r=o):((s=Lu(i.type,i.key,i.props,null,r.mode,s)).ref=vo(r,o,i),s.return=r,r=s)}return l(r);case k:e:{for(c=i.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===i.containerInfo&&o.stateNode.implementation===i.implementation){n(r,o.sibling),(o=a(o,i.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Au(i,r.mode,s)).return=r,r=o}return l(r);case N:return e(r,o,(c=i._init)(i._payload),s)}if(te(i))return m(r,o,i,s);if(I(i))return g(r,o,i,s);yo(r,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==o&&6===o.tag?(n(r,o.sibling),(o=a(o,i)).return=r,r=o):(n(r,o),(o=Fu(i,r.mode,s)).return=r,r=o),l(r)):n(r,o)}}var wo=xo(!0),ko=xo(!1),So=ja(null),jo=null,Eo=null,Co=null;function _o(){Co=Eo=jo=null}function Po(e){var t=So.current;Ea(So),e._currentValue=t}function zo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function To(e,t){jo=e,Co=Eo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bl=!0),e.firstContext=null)}function Oo(e){var t=e._currentValue;if(Co!==e)if(e={context:e,memoizedValue:t,next:null},null===Eo){if(null===jo)throw Error(o(308));Eo=e,jo.dependencies={lanes:0,firstContext:e}}else Eo=Eo.next=e;return t}var No=null;function Ro(e){null===No?No=[e]:No.push(e)}function Lo(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Ro(t)):(n.next=a.next,a.next=n),t.interleaved=n,Io(e,r)}function Io(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Do=!1;function Fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ao(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ps)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Io(e,n)}return null===(a=r.interleaved)?(t.next=t,Ro(r)):(t.next=a.next,a.next=t),r.interleaved=t,Io(e,n)}function Bo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Uo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $o(e,t,n,r){var a=e.updateQueue;Do=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===i?o=u:i.next=u,i=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,c=u=s=null,l=o;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=F({},d,f);break e;case 2:Do=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,i|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{i|=a.lane,a=a.next}while(a!==t)}else null===o&&(a.shared.lanes=0);Ds|=i,e.lanes=i,e.memoizedState=d}}function Ho(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(o(191,a));a.call(r)}}}var Vo={},qo=ja(Vo),Yo=ja(Vo),Ko=ja(Vo);function Qo(e){if(e===Vo)throw Error(o(174));return e}function Go(e,t){switch(Ca(Ko,t),Ca(Yo,e),Ca(qo,Vo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ea(qo),Ca(qo,t)}function Jo(){Ea(qo),Ea(Yo),Ea(Ko)}function Xo(e){Qo(Ko.current);var t=Qo(qo.current),n=se(t,e.type);t!==n&&(Ca(Yo,e),Ca(qo,n))}function Zo(e){Yo.current===e&&(Ea(qo),Ea(Yo))}var ei=ja(0);function ti(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ni=[];function ri(){for(var e=0;e<ni.length;e++)ni[e]._workInProgressVersionPrimary=null;ni.length=0}var ai=x.ReactCurrentDispatcher,oi=x.ReactCurrentBatchConfig,ii=0,li=null,si=null,ui=null,ci=!1,di=!1,fi=0,pi=0;function hi(){throw Error(o(321))}function mi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function gi(e,t,n,r,a,i){if(ii=i,li=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ai.current=null===e||null===e.memoizedState?Zi:el,e=n(r,a),di){i=0;do{if(di=!1,fi=0,25<=i)throw Error(o(301));i+=1,ui=si=null,t.updateQueue=null,ai.current=tl,e=n(r,a)}while(di)}if(ai.current=Xi,t=null!==si&&null!==si.next,ii=0,ui=si=li=null,ci=!1,t)throw Error(o(300));return e}function vi(){var e=0!==fi;return fi=0,e}function yi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ui?li.memoizedState=ui=e:ui=ui.next=e,ui}function bi(){if(null===si){var e=li.alternate;e=null!==e?e.memoizedState:null}else e=si.next;var t=null===ui?li.memoizedState:ui.next;if(null!==t)ui=t,si=e;else{if(null===e)throw Error(o(310));e={memoizedState:(si=e).memoizedState,baseState:si.baseState,baseQueue:si.baseQueue,queue:si.queue,next:null},null===ui?li.memoizedState=ui=e:ui=ui.next=e}return ui}function xi(e,t){return"function"===typeof t?t(e):t}function wi(e){var t=bi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=si,a=r.baseQueue,i=n.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(null!==a){i=a.next,r=r.baseState;var s=l=null,u=null,c=i;do{var d=c.lane;if((ii&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,li.lanes|=d,Ds|=d}c=c.next}while(null!==c&&c!==i);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(bl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{i=a.lane,li.lanes|=i,Ds|=i,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ki(e){var t=bi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);lr(i,t.memoizedState)||(bl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Si(){}function ji(e,t){var n=li,r=bi(),a=t(),i=!lr(r.memoizedState,a);if(i&&(r.memoizedState=a,bl=!0),r=r.queue,Di(_i.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==ui&&1&ui.memoizedState.tag){if(n.flags|=2048,Oi(9,Ci.bind(null,n,r,a,t),void 0,null),null===zs)throw Error(o(349));0!==(30&ii)||Ei(n,t,a)}return a}function Ei(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ci(e,t,n,r){t.value=n,t.getSnapshot=r,Pi(t)&&zi(e)}function _i(e,t,n){return n((function(){Pi(t)&&zi(e)}))}function Pi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function zi(e){var t=Io(e,1);null!==t&&nu(t,e,1,-1)}function Ti(e){var t=yi();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=Ki.bind(null,li,e),[t.memoizedState,e]}function Oi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ni(){return bi().memoizedState}function Ri(e,t,n,r){var a=yi();li.flags|=e,a.memoizedState=Oi(1|t,n,void 0,void 0===r?null:r)}function Li(e,t,n,r){var a=bi();r=void 0===r?null:r;var o=void 0;if(null!==si){var i=si.memoizedState;if(o=i.destroy,null!==r&&mi(r,i.deps))return void(a.memoizedState=Oi(t,n,o,r))}li.flags|=e,a.memoizedState=Oi(1|t,n,o,r)}function Ii(e,t){return Ri(8390656,8,e,t)}function Di(e,t){return Li(2048,8,e,t)}function Fi(e,t){return Li(4,2,e,t)}function Ai(e,t){return Li(4,4,e,t)}function Mi(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Wi(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Li(4,4,Mi.bind(null,t,e),n)}function Bi(){}function Ui(e,t){var n=bi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $i(e,t){var n=bi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hi(e,t,n){return 0===(21&ii)?(e.baseState&&(e.baseState=!1,bl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),li.lanes|=n,Ds|=n,e.baseState=!0),t)}function Vi(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=oi.transition;oi.transition={};try{e(!1),t()}finally{bt=n,oi.transition=r}}function qi(){return bi().memoizedState}function Yi(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qi(e))Gi(t,n);else if(null!==(n=Lo(e,t,n,r))){nu(n,e,r,eu()),Ji(n,t,r)}}function Ki(e,t,n){var r=tu(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qi(e))Gi(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,i)){var s=t.interleaved;return null===s?(a.next=a,Ro(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(u){}null!==(n=Lo(e,t,a,r))&&(nu(n,e,r,a=eu()),Ji(n,t,r))}}function Qi(e){var t=e.alternate;return e===li||null!==t&&t===li}function Gi(e,t){di=ci=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ji(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Xi={readContext:Oo,useCallback:hi,useContext:hi,useEffect:hi,useImperativeHandle:hi,useInsertionEffect:hi,useLayoutEffect:hi,useMemo:hi,useReducer:hi,useRef:hi,useState:hi,useDebugValue:hi,useDeferredValue:hi,useTransition:hi,useMutableSource:hi,useSyncExternalStore:hi,useId:hi,unstable_isNewReconciler:!1},Zi={readContext:Oo,useCallback:function(e,t){return yi().memoizedState=[e,void 0===t?null:t],e},useContext:Oo,useEffect:Ii,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ri(4194308,4,Mi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ri(4,2,e,t)},useMemo:function(e,t){var n=yi();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yi();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yi.bind(null,li,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},yi().memoizedState=e},useState:Ti,useDebugValue:Bi,useDeferredValue:function(e){return yi().memoizedState=e},useTransition:function(){var e=Ti(!1),t=e[0];return e=Vi.bind(null,e[1]),yi().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=li,a=yi();if(ao){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===zs)throw Error(o(349));0!==(30&ii)||Ei(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Ii(_i.bind(null,r,i,e),[e]),r.flags|=2048,Oi(9,Ci.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=yi(),t=zs.identifierPrefix;if(ao){var n=Ja;t=":"+t+"R"+(n=(Ga&~(1<<32-it(Ga)-1)).toString(32)+n),0<(n=fi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Oo,useCallback:Ui,useContext:Oo,useEffect:Di,useImperativeHandle:Wi,useInsertionEffect:Fi,useLayoutEffect:Ai,useMemo:$i,useReducer:wi,useRef:Ni,useState:function(){return wi(xi)},useDebugValue:Bi,useDeferredValue:function(e){return Hi(bi(),si.memoizedState,e)},useTransition:function(){return[wi(xi)[0],bi().memoizedState]},useMutableSource:Si,useSyncExternalStore:ji,useId:qi,unstable_isNewReconciler:!1},tl={readContext:Oo,useCallback:Ui,useContext:Oo,useEffect:Di,useImperativeHandle:Wi,useInsertionEffect:Fi,useLayoutEffect:Ai,useMemo:$i,useReducer:ki,useRef:Ni,useState:function(){return ki(xi)},useDebugValue:Bi,useDeferredValue:function(e){var t=bi();return null===si?t.memoizedState=e:Hi(t,si.memoizedState,e)},useTransition:function(){return[ki(xi)[0],bi().memoizedState]},useMutableSource:Si,useSyncExternalStore:ji,useId:qi,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=F({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:F({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),o=Mo(r,a);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Wo(e,o,a))&&(nu(t,e,a,r),Bo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),o=Mo(r,a);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Wo(e,o,a))&&(nu(t,e,a,r),Bo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),a=Mo(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Wo(e,a,r))&&(nu(t,e,r,n),Bo(t,e,r))}};function ol(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,o))}function il(e,t,n){var r=!1,a=_a,o=t.contextType;return"object"===typeof o&&null!==o?o=Oo(o):(a=Na(t)?Ta:Pa.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Oa(e,a):_a),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Fo(e);var o=t.contextType;"object"===typeof o&&null!==o?a.context=Oo(o):(o=Na(t)?Ta:Pa.current,a.context=Oa(e,o)),a.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rl(e,t,o,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&al.enqueueReplaceState(a,a.state,null),$o(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=B(r),r=r.return}while(r);var a=n}catch(o){a="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:a,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Mo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hs||(Hs=!0,Vs=r),dl(0,t)},n}function hl(e,t,n){(n=Mo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){dl(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===qs?qs=new Set([this]):qs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Eu.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Mo(-1,1)).tag=2,Wo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var yl=x.ReactCurrentOwner,bl=!1;function xl(e,t,n,r){t.child=null===e?ko(t,null,n,r):wo(t,e.child,n,r)}function wl(e,t,n,r,a){n=n.render;var o=t.ref;return To(t,a),r=gi(e,t,n,r,o,a),n=vi(),null===e||bl?(ao&&n&&eo(t),t.flags|=1,xl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Hl(e,t,a))}function kl(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Nu(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Lu(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Sl(e,t,o,r,a))}if(o=e.child,0===(e.lanes&a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(i,r)&&e.ref===t.ref)return Hl(e,t,a)}return t.flags|=1,(e=Ru(o,r)).ref=t.ref,e.return=t,t.child=e}function Sl(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref){if(bl=!1,t.pendingProps=r=o,0===(e.lanes&a))return t.lanes=e.lanes,Hl(e,t,a);0!==(131072&e.flags)&&(bl=!0)}}return Cl(e,t,n,r,a)}function jl(e,t,n){var r=t.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ca(Rs,Ns),Ns|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ca(Rs,Ns),Ns|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Ca(Rs,Ns),Ns|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ca(Rs,Ns),Ns|=r;return xl(e,t,a,n),t.child}function El(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,n,r,a){var o=Na(n)?Ta:Pa.current;return o=Oa(t,o),To(t,a),n=gi(e,t,n,r,o,a),r=vi(),null===e||bl?(ao&&r&&eo(t),t.flags|=1,xl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Hl(e,t,a))}function _l(e,t,n,r,a){if(Na(n)){var o=!0;Da(t)}else o=!1;if(To(t,a),null===t.stateNode)$l(e,t),il(t,n,r),sl(t,n,r,a),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;"object"===typeof u&&null!==u?u=Oo(u):u=Oa(t,u=Na(n)?Ta:Pa.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,i,r,u),Do=!1;var f=t.memoizedState;i.state=f,$o(t,r,i,a),s=t.memoizedState,l!==r||f!==s||za.current||Do?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=Do||ol(t,n,l,r,f,s,u))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Ao(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),i.props=u,d=t.pendingProps,f=i.context,"object"===typeof(s=n.contextType)&&null!==s?s=Oo(s):s=Oa(t,s=Na(n)?Ta:Pa.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,i,r,s),Do=!1,f=t.memoizedState,i.state=f,$o(t,r,i,a);var h=t.memoizedState;l!==d||f!==h||za.current||Do?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(u=Do||ol(t,n,u,r,f,h,s)||!1)?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=s,r=u):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Pl(e,t,n,r,o,a)}function Pl(e,t,n,r,a,o){El(e,t);var i=0!==(128&t.flags);if(!r&&!i)return a&&Fa(t,n,!1),Hl(e,t,o);r=t.stateNode,yl.current=t;var l=i&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,l,o)):xl(e,t,l,o),t.memoizedState=r.state,a&&Fa(t,n,!0),t.child}function zl(e){var t=e.stateNode;t.pendingContext?La(0,t.pendingContext,t.pendingContext!==t.context):t.context&&La(0,t.context,!1),Go(e,t.containerInfo)}function Tl(e,t,n,r,a){return ho(),mo(a),t.flags|=256,xl(e,t,n,r),t.child}var Ol,Nl,Rl,Ll,Il={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fl(e,t,n){var r,a=t.pendingProps,i=ei.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),Ca(ei,1&i),null===e)return uo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Du(s,a,0,null),e=Iu(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Dl(n),t.memoizedState=Il,e):Al(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,a,i,l){if(n)return 256&t.flags?(t.flags&=-257,Ml(e,t,l,r=cl(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Du({mode:"visible",children:r.children},a,0,null),(i=Iu(i,a,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,l),t.child.memoizedState=Dl(l),t.memoizedState=Il,i);if(0===(1&t.mode))return Ml(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Ml(e,t,l,r=cl(i=Error(o(419)),r,void 0))}if(s=0!==(l&e.childLanes),bl||s){if(null!==(r=zs)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==i.retryLane&&(i.retryLane=a,Io(e,a),nu(r,e,a,-1))}return mu(),Ml(e,t,l,r=cl(Error(o(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=_u.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,ro=ua(a.nextSibling),no=t,ao=!0,oo=null,null!==e&&(Ya[Ka++]=Ga,Ya[Ka++]=Ja,Ya[Ka++]=Qa,Ga=e.id,Ja=e.overflow,Qa=t),t=Al(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,i,n);if(l){l=a.fallback,s=t.mode,r=(i=e.child).sibling;var u={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==i?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=Ru(i,u)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=Ru(r,l):(l=Iu(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Dl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Il,a}return e=(l=e.child).sibling,a=Ru(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Al(e,t){return(t=Du({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ml(e,t,n,r){return null!==r&&mo(r),wo(t,e.child,null,n),(e=Al(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Wl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),zo(e.return,t,n)}function Bl(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Ul(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(xl(e,t,r.children,n),0!==(2&(r=ei.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Wl(e,n,t);else if(19===e.tag)Wl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ca(ei,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===ti(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Bl(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===ti(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Bl(t,!0,n,null,o);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $l(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ds|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Ru(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ru(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!ao)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ql(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Yl(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ql(t),null;case 1:case 17:return Na(t.type)&&Ra(),ql(t),null;case 3:return r=t.stateNode,Jo(),Ea(za),Ea(Pa),ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(iu(oo),oo=null))),Nl(e,t),ql(t),null;case 5:Zo(t);var a=Qo(Ko.current);if(n=t.type,null!==e&&null!=t.stateNode)Rl(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return ql(t),null}if(e=Qo(qo.current),fo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[fa]=t,r[pa]=i,e=0!==(1&t.mode),n){case"dialog":Mr("cancel",r),Mr("close",r);break;case"iframe":case"object":case"embed":Mr("load",r);break;case"video":case"audio":for(a=0;a<Ir.length;a++)Mr(Ir[a],r);break;case"source":Mr("error",r);break;case"img":case"image":case"link":Mr("error",r),Mr("load",r);break;case"details":Mr("toggle",r);break;case"input":G(r,i),Mr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Mr("invalid",r);break;case"textarea":ae(r,i),Mr("invalid",r)}for(var s in ye(n,i),a=null,i)if(i.hasOwnProperty(s)){var u=i[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==i.suppressHydrationWarning&&Xr(r.textContent,u,e),a=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==i.suppressHydrationWarning&&Xr(r.textContent,u,e),a=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Mr("scroll",r)}switch(n){case"input":q(r),Z(r,i,!0);break;case"textarea":q(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=Zr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fa]=t,e[pa]=r,Ol(e,t,!1,!1),t.stateNode=e;e:{switch(s=be(n,r),n){case"dialog":Mr("cancel",e),Mr("close",e),a=r;break;case"iframe":case"object":case"embed":Mr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Ir.length;a++)Mr(Ir[a],e);a=r;break;case"source":Mr("error",e),a=r;break;case"img":case"image":case"link":Mr("error",e),Mr("load",e),a=r;break;case"details":Mr("toggle",e),a=r;break;case"input":G(e,r),a=Q(e,r),Mr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=F({},r,{value:void 0}),Mr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Mr("invalid",e)}for(i in ye(n,a),u=a)if(u.hasOwnProperty(i)){var c=u[i];"style"===i?ge(e,c):"dangerouslySetInnerHTML"===i?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===i?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=c&&"onScroll"===i&&Mr("scroll",e):null!=c&&b(e,i,c,s))}switch(n){case"input":q(e),Z(e,r,!1);break;case"textarea":q(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return ql(t),null;case 6:if(e&&null!=t.stateNode)Ll(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Qo(Ko.current),Qo(qo.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[fa]=t,(i=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Xr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Xr(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fa]=t,t.stateNode=r}return ql(t),null;case 13:if(Ea(ei),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ao&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))po(),ho(),t.flags|=98560,i=!1;else if(i=fo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[fa]=t}else ho(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ql(t),i=!1}else null!==oo&&(iu(oo),oo=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ei.current)?0===Ls&&(Ls=3):mu())),null!==t.updateQueue&&(t.flags|=4),ql(t),null);case 4:return Jo(),Nl(e,t),null===e&&Ur(t.stateNode.containerInfo),ql(t),null;case 10:return Po(t.type._context),ql(t),null;case 19:if(Ea(ei),null===(i=t.memoizedState))return ql(t),null;if(r=0!==(128&t.flags),null===(s=i.rendering))if(r)Vl(i,!1);else{if(0!==Ls||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ti(e))){for(t.flags|=128,Vl(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ca(ei,1&ei.current|2),t.child}e=e.sibling}null!==i.tail&&Je()>Us&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ti(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!ao)return ql(t),null}else 2*Je()-i.renderingStartTime>Us&&1073741824!==n&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Je(),t.sibling=null,n=ei.current,Ca(ei,r?1&n|2:1&n),t):(ql(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ns)&&(ql(t),6&t.subtreeFlags&&(t.flags|=8192)):ql(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Kl(e,t){switch(to(t),t.tag){case 1:return Na(t.type)&&Ra(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Jo(),Ea(za),Ea(Pa),ri(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zo(t),null;case 13:if(Ea(ei),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ea(ei),null;case 4:return Jo(),null;case 10:return Po(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Ol=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Nl=function(){},Rl=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Qo(qo.current);var o,i=null;switch(n){case"input":a=Q(e,a),r=Q(e,r),i=[];break;case"select":a=F({},a,{value:void 0}),r=F({},r,{value:void 0}),i=[];break;case"textarea":a=re(e,a),r=re(e,r),i=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(c in ye(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(i=i||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(i=i||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Mr("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}},Ll=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ql=!1,Gl=!1,Jl="function"===typeof WeakSet?WeakSet:Set,Xl=null;function Zl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){ju(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){ju(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,void 0!==o&&es(t,n,o)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function os(e){var t=e.alternate;null!==t&&(e.alternate=null,os(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fa],delete t[pa],delete t[ma],delete t[ga],delete t[va])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function is(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||is(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(at,n)}catch(l){}switch(n.tag){case 5:Gl||Zl(n,t);case 6:var r=cs,a=ds;cs=null,fs(e,t,n),ds=a,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),Ut(e)):sa(cs,n.stateNode));break;case 4:r=cs,a=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=a;break;case 0:case 11:case 14:case 15:if(!Gl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,void 0!==i&&(0!==(2&o)||0!==(4&o))&&es(n,t,i),a=a.next}while(a!==r)}fs(e,t,n);break;case 1:if(!Gl&&(Zl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ju(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Gl=(r=Gl)||null!==n.memoizedState,fs(e,t,n),Gl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Jl),t.forEach((function(t){var r=Pu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(o(160));ps(i,l,a),cs=null,ds=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(c){ju(a,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),vs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){ju(e,e.return,g)}try{ns(5,e,e.return)}catch(g){ju(e,e.return,g)}}break;case 1:ms(t,e),vs(e),512&r&&null!==n&&Zl(n,n.return);break;case 5:if(ms(t,e),vs(e),512&r&&null!==n&&Zl(n,n.return),32&e.flags){var a=e.stateNode;try{fe(a,"")}catch(g){ju(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===i.type&&null!=i.name&&J(a,i),be(s,l);var c=be(s,i);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?ge(a,f):"dangerouslySetInnerHTML"===d?de(a,f):"children"===d?fe(a,f):b(a,d,f,c)}switch(s){case"input":X(a,i);break;case"textarea":oe(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?ne(a,!!i.multiple,h,!1):p!==!!i.multiple&&(null!=i.defaultValue?ne(a,!!i.multiple,i.defaultValue,!0):ne(a,!!i.multiple,i.multiple?[]:"",!1))}a[pa]=i}catch(g){ju(e,e.return,g)}}break;case 6:if(ms(t,e),vs(e),4&r){if(null===e.stateNode)throw Error(o(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(g){ju(e,e.return,g)}}break;case 3:if(ms(t,e),vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(g){ju(e,e.return,g)}break;case 4:default:ms(t,e),vs(e);break;case 13:ms(t,e),vs(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,!i||null!==a.alternate&&null!==a.alternate.memoizedState||(Bs=Je())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Gl=(c=Gl)||d,ms(t,e),Gl=c):ms(t,e),vs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Xl=e,d=e.child;null!==d;){for(f=Xl=d;null!==Xl;){switch(h=(p=Xl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Zl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){ju(r,n,g)}}break;case 5:Zl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Xl=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{a=f.stateNode,c?"function"===typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=me("display",l))}catch(g){ju(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){ju(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),vs(e),4&r&&hs(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(is(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(fe(a,""),r.flags&=-33),us(e,ls(e),a);break;case 3:case 4:var i=r.stateNode.containerInfo;ss(e,ls(e),i);break;default:throw Error(o(161))}}catch(l){ju(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ys(e,t,n){Xl=e,bs(e,t,n)}function bs(e,t,n){for(var r=0!==(1&e.mode);null!==Xl;){var a=Xl,o=a.child;if(22===a.tag&&r){var i=null!==a.memoizedState||Ql;if(!i){var l=a.alternate,s=null!==l&&null!==l.memoizedState||Gl;l=Ql;var u=Gl;if(Ql=i,(Gl=s)&&!u)for(Xl=a;null!==Xl;)s=(i=Xl).child,22===i.tag&&null!==i.memoizedState?ks(a):null!==s?(s.return=i,Xl=s):ks(a);for(;null!==o;)Xl=o,bs(o,t,n),o=o.sibling;Xl=a,Ql=l,Gl=u}xs(e)}else 0!==(8772&a.subtreeFlags)&&null!==o?(o.return=a,Xl=o):xs(e)}}function xs(e){for(;null!==Xl;){var t=Xl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Gl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Gl)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Ho(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ho(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Ut(f)}}}break;default:throw Error(o(163))}Gl||512&t.flags&&as(t)}catch(p){ju(t,t.return,p)}}if(t===e){Xl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Xl=n;break}Xl=t.return}}function ws(e){for(;null!==Xl;){var t=Xl;if(t===e){Xl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Xl=n;break}Xl=t.return}}function ks(e){for(;null!==Xl;){var t=Xl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){ju(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){ju(t,a,s)}}var o=t.return;try{as(t)}catch(s){ju(t,o,s)}break;case 5:var i=t.return;try{as(t)}catch(s){ju(t,i,s)}}}catch(s){ju(t,t.return,s)}if(t===e){Xl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Xl=l;break}Xl=t.return}}var Ss,js=Math.ceil,Es=x.ReactCurrentDispatcher,Cs=x.ReactCurrentOwner,_s=x.ReactCurrentBatchConfig,Ps=0,zs=null,Ts=null,Os=0,Ns=0,Rs=ja(0),Ls=0,Is=null,Ds=0,Fs=0,As=0,Ms=null,Ws=null,Bs=0,Us=1/0,$s=null,Hs=!1,Vs=null,qs=null,Ys=!1,Ks=null,Qs=0,Gs=0,Js=null,Xs=-1,Zs=0;function eu(){return 0!==(6&Ps)?Je():-1!==Xs?Xs:Xs=Je()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Ps)&&0!==Os?Os&-Os:null!==go.transition?(0===Zs&&(Zs=mt()),Zs):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Gt(e.type)}function nu(e,t,n,r){if(50<Gs)throw Gs=0,Js=null,Error(o(185));vt(e,n,r),0!==(2&Ps)&&e===zs||(e===zs&&(0===(2&Ps)&&(Fs|=n),4===Ls&&lu(e,Os)),ru(e,r),1===n&&0===Ps&&0===(1&t.mode)&&(Us=Je()+500,Ma&&Ua()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-it(o),l=1<<i,s=a[i];-1===s?0!==(l&n)&&0===(l&r)||(a[i]=pt(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}(e,t);var r=ft(e,e===zs?Os:0);if(0===r)null!==n&&Ke(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ke(n),1===t)0===e.tag?function(e){Ma=!0,Ba(e)}(su.bind(null,e)):Ba(su.bind(null,e)),ia((function(){0===(6&Ps)&&Ua()})),n=null;else{switch(xt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=zu(n,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function au(e,t){if(Xs=-1,Zs=0,0!==(6&Ps))throw Error(o(327));var n=e.callbackNode;if(ku()&&e.callbackNode!==n)return null;var r=ft(e,e===zs?Os:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var a=Ps;Ps|=2;var i=hu();for(zs===e&&Os===t||($s=null,Us=Je()+500,fu(e,t));;)try{yu();break}catch(s){pu(e,s)}_o(),Es.current=i,Ps=a,null!==Ts?t=0:(zs=null,Os=0,t=Ls)}if(0!==t){if(2===t&&(0!==(a=ht(e))&&(r=a,t=ou(e,a))),1===t)throw n=Is,fu(e,0),lu(e,r),ru(e,Je()),n;if(6===t)lu(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!lr(o(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=gu(e,r))&&(0!==(i=ht(e))&&(r=i,t=ou(e,i))),1===t))throw n=Is,fu(e,0),lu(e,r),ru(e,Je()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wu(e,Ws,$s);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=Bs+500-Je())){if(0!==ft(e,0))break;if(((a=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(wu.bind(null,e,Ws,$s),t);break}wu(e,Ws,$s);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-it(r);i=1<<l,(l=t[l])>a&&(a=l),r&=~i}if(r=a,10<(r=(120>(r=Je()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*js(r/1960))-r)){e.timeoutHandle=ra(wu.bind(null,e,Ws,$s),r);break}wu(e,Ws,$s);break;default:throw Error(o(329))}}}return ru(e,Je()),e.callbackNode===n?au.bind(null,e):null}function ou(e,t){var n=Ms;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=Ws,Ws=n,null!==t&&iu(t)),e}function iu(e){null===Ws?Ws=e:Ws.push.apply(Ws,e)}function lu(e,t){for(t&=~As,t&=~Fs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&Ps))throw Error(o(327));ku();var t=ft(e,0);if(0===(1&t))return ru(e,Je()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ou(e,r))}if(1===n)throw n=Is,fu(e,0),lu(e,t),ru(e,Je()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,Ws,$s),ru(e,Je()),null}function uu(e,t){var n=Ps;Ps|=1;try{return e(t)}finally{0===(Ps=n)&&(Us=Je()+500,Ma&&Ua())}}function cu(e){null!==Ks&&0===Ks.tag&&0===(6&Ps)&&ku();var t=Ps;Ps|=1;var n=_s.transition,r=bt;try{if(_s.transition=null,bt=1,e)return e()}finally{bt=r,_s.transition=n,0===(6&(Ps=t))&&Ua()}}function du(){Ns=Rs.current,Ea(Rs)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==Ts)for(n=Ts.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ra();break;case 3:Jo(),Ea(za),Ea(Pa),ri();break;case 5:Zo(r);break;case 4:Jo();break;case 13:case 19:Ea(ei);break;case 10:Po(r.type._context);break;case 22:case 23:du()}n=n.return}if(zs=e,Ts=e=Ru(e.current,null),Os=Ns=t,Ls=0,Is=null,As=Fs=Ds=0,Ws=Ms=null,null!==No){for(t=0;t<No.length;t++)if(null!==(r=(n=No[t]).interleaved)){n.interleaved=null;var a=r.next,o=n.pending;if(null!==o){var i=o.next;o.next=a,r.next=i}n.pending=r}No=null}return e}function pu(e,t){for(;;){var n=Ts;try{if(_o(),ai.current=Xi,ci){for(var r=li.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}ci=!1}if(ii=0,ui=si=li=null,di=!1,fi=0,Cs.current=null,null===n||null===n.return){Ls=1,Is=t,Ts=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=Os,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,vl(h,l,s,0,t),1&h.mode&&ml(i,c,t),u=c;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){ml(i,c,t),mu();break e}u=Error(o(426))}else if(ao&&1&s.mode){var v=gl(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vl(v,l,s,0,t),mo(ul(u,s));break e}}i=u=ul(u,s),4!==Ls&&(Ls=2),null===Ms?Ms=[i]:Ms.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Uo(i,pl(0,u,t));break e;case 1:s=u;var y=i.type,b=i.stateNode;if(0===(128&i.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===qs||!qs.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t,Uo(i,hl(i,s,t));break e}}i=i.return}while(null!==i)}xu(n)}catch(x){t=x,Ts===n&&null!==n&&(Ts=n=n.return);continue}break}}function hu(){var e=Es.current;return Es.current=Xi,null===e?Xi:e}function mu(){0!==Ls&&3!==Ls&&2!==Ls||(Ls=4),null===zs||0===(268435455&Ds)&&0===(268435455&Fs)||lu(zs,Os)}function gu(e,t){var n=Ps;Ps|=2;var r=hu();for(zs===e&&Os===t||($s=null,fu(e,t));;)try{vu();break}catch(a){pu(e,a)}if(_o(),Ps=n,Es.current=r,null!==Ts)throw Error(o(261));return zs=null,Os=0,Ls}function vu(){for(;null!==Ts;)bu(Ts)}function yu(){for(;null!==Ts&&!Qe();)bu(Ts)}function bu(e){var t=Ss(e.alternate,e,Ns);e.memoizedProps=e.pendingProps,null===t?xu(e):Ts=t,Cs.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Yl(n,t,Ns)))return void(Ts=n)}else{if(null!==(n=Kl(n,t)))return n.flags&=32767,void(Ts=n);if(null===e)return Ls=6,void(Ts=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ts=t);Ts=t=e}while(null!==t);0===Ls&&(Ls=5)}function wu(e,t,n){var r=bt,a=_s.transition;try{_s.transition=null,bt=1,function(e,t,n,r){do{ku()}while(null!==Ks);if(0!==(6&Ps))throw Error(o(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-it(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}(e,i),e===zs&&(Ts=zs=null,Os=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ys||(Ys=!0,zu(tt,(function(){return ku(),null}))),i=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||i){i=_s.transition,_s.transition=null;var l=bt;bt=1;var s=Ps;Ps|=4,Cs.current=null,function(e,t){if(ea=Ht,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(w){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==i||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=l),p===i&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Ht=!1,Xl=t;null!==Xl;)if(e=(t=Xl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Xl=e;else for(;null!==Xl;){t=Xl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(o(163))}}catch(w){ju(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Xl=e;break}Xl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(ta),Ht=!!ea,ta=ea=null,e.current=n,ys(n,e,a),Ge(),Ps=s,bt=l,_s.transition=i}else e.current=n;if(Ys&&(Ys=!1,Ks=e,Qs=a),i=e.pendingLanes,0===i&&(qs=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Je()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Hs)throw Hs=!1,e=Vs,Vs=null,e;0!==(1&Qs)&&0!==e.tag&&ku(),i=e.pendingLanes,0!==(1&i)?e===Js?Gs++:(Gs=0,Js=e):Gs=0,Ua()}(e,t,n,r)}finally{_s.transition=a,bt=r}return null}function ku(){if(null!==Ks){var e=xt(Qs),t=_s.transition,n=bt;try{if(_s.transition=null,bt=16>e?16:e,null===Ks)var r=!1;else{if(e=Ks,Ks=null,Qs=0,0!==(6&Ps))throw Error(o(331));var a=Ps;for(Ps|=4,Xl=e.current;null!==Xl;){var i=Xl,l=i.child;if(0!==(16&Xl.flags)){var s=i.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Xl=c;null!==Xl;){var d=Xl;switch(d.tag){case 0:case 11:case 15:ns(8,d,i)}var f=d.child;if(null!==f)f.return=d,Xl=f;else for(;null!==Xl;){var p=(d=Xl).sibling,h=d.return;if(os(d),d===c){Xl=null;break}if(null!==p){p.return=h,Xl=p;break}Xl=h}}}var m=i.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Xl=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,Xl=l;else e:for(;null!==Xl;){if(0!==(2048&(i=Xl).flags))switch(i.tag){case 0:case 11:case 15:ns(9,i,i.return)}var y=i.sibling;if(null!==y){y.return=i.return,Xl=y;break e}Xl=i.return}}var b=e.current;for(Xl=b;null!==Xl;){var x=(l=Xl).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,Xl=x;else e:for(l=b;null!==Xl;){if(0!==(2048&(s=Xl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(k){ju(s,s.return,k)}if(s===l){Xl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Xl=w;break e}Xl=s.return}}if(Ps=a,Ua(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(at,e)}catch(k){}r=!0}return r}finally{bt=n,_s.transition=t}}return!1}function Su(e,t,n){e=Wo(e,t=pl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function ju(e,t,n){if(3===e.tag)Su(e,e,n);else for(;null!==t;){if(3===t.tag){Su(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===qs||!qs.has(r))){t=Wo(t,e=hl(t,e=ul(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function Eu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,zs===e&&(Os&n)===n&&(4===Ls||3===Ls&&(130023424&Os)===Os&&500>Je()-Bs?fu(e,0):As|=n),ru(e,t)}function Cu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Io(e,t))&&(vt(e,t,n),ru(e,n))}function _u(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cu(e,n)}function Pu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Cu(e,n)}function zu(e,t){return Ye(e,t)}function Tu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ou(e,t,n,r){return new Tu(e,t,n,r)}function Nu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ru(e,t){var n=e.alternate;return null===n?((n=Ou(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lu(e,t,n,r,a,i){var l=2;if(r=e,"function"===typeof e)Nu(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Iu(n.children,a,i,t);case j:l=8,a|=8;break;case E:return(e=Ou(12,n,t,2|a)).elementType=E,e.lanes=i,e;case z:return(e=Ou(13,n,t,a)).elementType=z,e.lanes=i,e;case T:return(e=Ou(19,n,t,a)).elementType=T,e.lanes=i,e;case R:return Du(n,a,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:l=10;break e;case _:l=9;break e;case P:l=11;break e;case O:l=14;break e;case N:l=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Ou(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Iu(e,t,n,r){return(e=Ou(7,e,r,t)).lanes=n,e}function Du(e,t,n,r){return(e=Ou(22,e,r,t)).elementType=R,e.lanes=n,e.stateNode={isHidden:!1},e}function Fu(e,t,n){return(e=Ou(6,e,null,t)).lanes=n,e}function Au(e,t,n){return(t=Ou(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mu(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Wu(e,t,n,r,a,o,i,l,s){return e=new Mu(e,t,n,l,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Ou(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fo(o),e}function Bu(e){if(!e)return _a;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Na(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Na(n))return Ia(e,n,t)}return t}function Uu(e,t,n,r,a,o,i,l,s){return(e=Wu(n,r,!0,e,0,o,0,l,s)).context=Bu(null),n=e.current,(o=Mo(r=eu(),a=tu(n))).callback=void 0!==t&&null!==t?t:null,Wo(n,o,a),e.current.lanes=a,vt(e,a,r),ru(e,r),e}function $u(e,t,n,r){var a=t.current,o=eu(),i=tu(a);return n=Bu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Mo(o,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Wo(a,t,i))&&(nu(e,a,i,o),Bo(e,a,i)),i}function Hu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function qu(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}Ss=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||za.current)bl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return bl=!1,function(e,t,n){switch(t.tag){case 3:zl(t),ho();break;case 5:Xo(t);break;case 1:Na(t.type)&&Da(t);break;case 4:Go(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ca(So,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ca(ei,1&ei.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Fl(e,t,n):(Ca(ei,1&ei.current),null!==(e=Hl(e,t,n))?e.sibling:null);Ca(ei,1&ei.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Ul(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ca(ei,ei.current),r)break;return null;case 22:case 23:return t.lanes=0,jl(e,t,n)}return Hl(e,t,n)}(e,t,n);bl=0!==(131072&e.flags)}else bl=!1,ao&&0!==(1048576&t.flags)&&Za(t,qa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$l(e,t),e=t.pendingProps;var a=Oa(t,Pa.current);To(t,n),a=gi(null,t,r,e,a,n);var i=vi();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Na(r)?(i=!0,Da(t)):i=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Fo(t),a.updater=al,t.stateNode=a,a._reactInternals=t,sl(t,r,e,n),t=Pl(null,t,r,!0,i,n)):(t.tag=0,ao&&i&&eo(t),xl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch($l(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Nu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===O)return 14}return 2}(r),e=nl(r,e),a){case 0:t=Cl(null,t,r,e,n);break e;case 1:t=_l(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=kl(null,t,r,nl(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,Cl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 1:return r=t.type,a=t.pendingProps,_l(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 3:e:{if(zl(t),null===e)throw Error(o(387));r=t.pendingProps,a=(i=t.memoizedState).element,Ao(e,t),$o(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Tl(e,t,r,n,a=ul(Error(o(423)),t));break e}if(r!==a){t=Tl(e,t,r,n,a=ul(Error(o(424)),t));break e}for(ro=ua(t.stateNode.containerInfo.firstChild),no=t,ao=!0,oo=null,n=ko(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ho(),r===a){t=Hl(e,t,n);break e}xl(e,t,r,n)}t=t.child}return t;case 5:return Xo(t),null===e&&uo(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==i&&na(r,i)&&(t.flags|=32),El(e,t),xl(e,t,l,n),t.child;case 6:return null===e&&uo(t),null;case 13:return Fl(e,t,n);case 4:return Go(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):xl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,wl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 7:return xl(e,t,t.pendingProps,n),t.child;case 8:case 12:return xl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,Ca(So,r._currentValue),r._currentValue=l,null!==i)if(lr(i.value,l)){if(i.children===a.children&&!za.current){t=Hl(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===i.tag){(u=Mo(-1,n&-n)).tag=2;var c=i.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,null!==(u=i.alternate)&&(u.lanes|=n),zo(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(o(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),zo(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}xl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,To(t,n),r=r(a=Oo(a)),t.flags|=1,xl(e,t,r,n),t.child;case 14:return a=nl(r=t.type,t.pendingProps),kl(e,t,r,a=nl(r.type,a),n);case 15:return Sl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nl(r,a),$l(e,t),t.tag=1,Na(r)?(e=!0,Da(t)):e=!1,To(t,n),il(t,r,a),sl(t,r,a,n),Pl(null,t,r,!0,e,n);case 19:return Ul(e,t,n);case 22:return jl(e,t,n)}throw Error(o(156,t.tag))};var Yu="function"===typeof reportError?reportError:function(e){console.error(e)};function Ku(e){this._internalRoot=e}function Qu(e){this._internalRoot=e}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Ju(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xu(){}function Zu(e,t,n,r,a){var o=n._reactRootContainer;if(o){var i=o;if("function"===typeof a){var l=a;a=function(){var e=Hu(i);l.call(e)}}$u(t,i,e,a)}else i=function(e,t,n,r,a){if(a){if("function"===typeof r){var o=r;r=function(){var e=Hu(i);o.call(e)}}var i=Uu(t,r,e,0,null,!1,0,"",Xu);return e._reactRootContainer=i,e[ha]=i.current,Ur(8===e.nodeType?e.parentNode:e),cu(),i}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=Hu(s);l.call(e)}}var s=Wu(e,0,!1,null,0,!1,0,"",Xu);return e._reactRootContainer=s,e[ha]=s.current,Ur(8===e.nodeType?e.parentNode:e),cu((function(){$u(t,s,n,r)})),s}(n,t,e,a,r);return Hu(i)}Qu.prototype.render=Ku.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));$u(e,t,null,null)},Qu.prototype.unmount=Ku.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){$u(null,e,null,null)})),t[ha]=null}},Qu.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&0!==t&&t<Rt[n].priority;n++);Rt.splice(n,0,e),0===n&&Ft(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),ru(t,Je()),0===(6&Ps)&&(Us=Je()+500,Ua()))}break;case 13:cu((function(){var t=Io(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),qu(e,1)}},kt=function(e){if(13===e.tag){var t=Io(e,134217728);if(null!==t)nu(t,e,134217728,eu());qu(e,134217728)}},St=function(e){if(13===e.tag){var t=tu(e),n=Io(e,t);if(null!==n)nu(n,e,t,eu());qu(e,t)}},jt=function(){return bt},Et=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},ke=function(e,t,n){switch(t){case"input":if(X(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=wa(r);if(!a)throw Error(o(90));Y(r),X(r,a)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Pe=uu,ze=cu;var ec={usingClientEntryPoint:!1,Events:[ba,xa,wa,Ce,_e,uu]},tc={findFiberByHostInstance:ya,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{at=rc.inject(nc),ot=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gu(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Gu(e))throw Error(o(299));var n=!1,r="",a=Yu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Wu(e,1,!1,null,0,n,0,r,a),e[ha]=t.current,Ur(8===e.nodeType?e.parentNode:e),new Ku(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Ju(t))throw Error(o(200));return Zu(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Gu(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,a=!1,i="",l=Yu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Uu(t,null,e,1,null!=n?n:null,a,0,i,l),e[ha]=t.current,Ur(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Qu(t)},t.render=function(e,t,n){if(!Ju(t))throw Error(o(200));return Zu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Ju(e))throw Error(o(40));return!!e._reactRootContainer&&(cu((function(){Zu(null,null,e,!1,(function(){e._reactRootContainer=null,e[ha]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ju(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Zu(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},153:(e,t,n)=>{"use strict";var r=n(43),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:l.current}}t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,m(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var a,o={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,a)&&!j.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:l,props:o,_owner:S.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function z(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===o?"."+P(s,0):o,w(i)?(a="",null!=e&&(a=e.replace(_,"$&/")+"/"),z(i,t,a,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(s=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var c=o+P(l=e[u],u);s+=z(l,t,a,c,i)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=z(l=l.value,t,a,c=o+P(l,u++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function T(e,t,n){if(null==e)return e;var r=[],a=0;return z(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},R={transition:null},L={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:R,ReactCurrentOwner:S};function I(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=a,t.Profiler=i,t.PureComponent=b,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.act=I,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),o=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=S.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)k.call(t,u)&&!j.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:o,ref:i,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},t.unstable_act=I,t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.3.1"},43:(e,t,n)=>{"use strict";e.exports=n(202)},579:(e,t,n)=>{"use strict";e.exports=n(153)},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>o(s,n))u<a&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,x(e),!m)if(null!==r(u))m=!0,R(k);else{var t=r(c);null!==t&&L(w,t.startTime-e)}}function k(e,n){m=!1,g&&(g=!1,y(C),C=-1),h=!0;var o=p;try{for(x(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!z());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&a(u),x(n)}else a(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&L(w,d.startTime-n),s=!1}return s}finally{f=null,p=o,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,j=!1,E=null,C=-1,_=5,P=-1;function z(){return!(t.unstable_now()-P<_)}function T(){if(null!==E){var e=t.unstable_now();P=e;var n=!0;try{n=E(!0,e)}finally{n?S():(j=!1,E=null)}}else j=!1}if("function"===typeof b)S=function(){b(T)};else if("undefined"!==typeof MessageChannel){var O=new MessageChannel,N=O.port2;O.port1.onmessage=T,S=function(){N.postMessage(null)}}else S=function(){v(T,0)};function R(e){E=e,j||(j=!0,S())}function L(e,n){C=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,R(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(g?(y(C),C=-1):g=!0,L(w,o-i))):(e.sortIndex=l,n(u,e),m||h||(m=!0,R(k))),e},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853:(e,t,n)=>{"use strict";e.exports=n(234)},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var u=o[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=n?n.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,n.d(o,i),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".376e0964.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="brightsparks-academy:";n.l=(r,a,o,i)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[a];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=o);var i=n.p+n.u(t),l=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,o,i=r[0],l=r[1],s=r[2],u=0;if(i.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)s(n)}for(t&&t(r);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkbrightsparks_academy=self.webpackChunkbrightsparks_academy||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e,t=n(43),r=n.t(t,2),a=n(391),o=n(950),i=n.t(o,2);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const s="popstate";function u(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function c(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function f(e,t,n,r){return void 0===n&&(n=null),l({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?h(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function p(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function h(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(t,n,r,a){void 0===a&&(a={});let{window:o=document.defaultView,v5Compat:i=!1}=a,c=o.history,h=e.Pop,m=null,g=v();function v(){return(c.state||{idx:null}).idx}function y(){h=e.Pop;let t=v(),n=null==t?null:t-g;g=t,m&&m({action:h,location:x.location,delta:n})}function b(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:p(e);return n=n.replace(/ $/,"%20"),u(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,c.replaceState(l({},c.state,{idx:g}),""));let x={get action(){return h},get location(){return t(o,c)},listen(e){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(s,y),m=e,()=>{o.removeEventListener(s,y),m=null}},createHref:e=>n(o,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){h=e.Push;let a=f(x.location,t,n);r&&r(a,t),g=v()+1;let l=d(a,g),s=x.createHref(a);try{c.pushState(l,"",s)}catch(u){if(u instanceof DOMException&&"DataCloneError"===u.name)throw u;o.location.assign(s)}i&&m&&m({action:h,location:x.location,delta:1})},replace:function(t,n){h=e.Replace;let a=f(x.location,t,n);r&&r(a,t),g=v();let o=d(a,g),l=x.createHref(a);c.replaceState(o,"",l),i&&m&&m({action:h,location:x.location,delta:0})},go:e=>c.go(e)};return x}var g;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(g||(g={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function v(e,t,n){return void 0===n&&(n="/"),y(e,t,n,!1)}function y(e,t,n,r){let a=N(("string"===typeof t?h(t):t).pathname||"/",n);if(null==a)return null;let o=b(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let i=null;for(let l=0;null==i&&l<o.length;++l){let e=O(a);i=z(o[l],e,r)}return i}function b(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,o)=>{let i={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};i.relativePath.startsWith("/")&&(u(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let l=F([r,i.relativePath]),s=n.concat(i);e.children&&e.children.length>0&&(u(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),b(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:P(l,e.index),routesMeta:s})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of x(e.path))a(e,t,r);else a(e,t)})),t}function x(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=x(r.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const w=/^:[\w-]+$/,k=3,S=2,j=1,E=10,C=-2,_=e=>"*"===e;function P(e,t){let n=e.split("/"),r=n.length;return n.some(_)&&(r+=C),t&&(r+=S),n.filter((e=>!_(e))).reduce(((e,t)=>e+(w.test(t)?k:""===t?j:E)),r)}function z(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,a={},o="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===o?t:t.slice(o.length)||"/",c=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(a,c.params),i.push({params:a,pathname:F([o,c.pathname]),pathnameBase:A(F([o,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(o=F([o,c.pathnameBase]))}return i}function T(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);c("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function O(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return c(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function N(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function R(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function L(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function I(e,t){let n=L(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function D(e,t,n,r){let a;void 0===r&&(r=!1),"string"===typeof e?a=h(e):(a=l({},e),u(!a.pathname||!a.pathname.includes("?"),R("?","pathname","search",a)),u(!a.pathname||!a.pathname.includes("#"),R("#","pathname","hash",a)),u(!a.search||!a.search.includes("#"),R("#","search","hash",a)));let o,i=""===e||""===a.pathname,s=i?"/":a.pathname;if(null==s)o=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}o=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"===typeof e?h(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:M(r),hash:W(a)}}(a,o),d=s&&"/"!==s&&s.endsWith("/"),f=(i||"."===s)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!f||(c.pathname+="/"),c}const F=e=>e.join("/").replace(/\/\/+/g,"/"),A=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",W=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function B(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const U=["post","put","patch","delete"],$=(new Set(U),["get",...U]);new Set($),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(this,arguments)}const V=t.createContext(null);const q=t.createContext(null);const Y=t.createContext(null);const K=t.createContext(null);const Q=t.createContext({outlet:null,matches:[],isDataRoute:!1});const G=t.createContext(null);function J(){return null!=t.useContext(K)}function X(){return J()||u(!1),t.useContext(K).location}function Z(e){t.useContext(Y).static||t.useLayoutEffect(e)}function ee(){let{isDataRoute:e}=t.useContext(Q);return e?function(){let{router:e}=ce(se.UseNavigateStable),n=fe(ue.UseNavigateStable),r=t.useRef(!1);return Z((()=>{r.current=!0})),t.useCallback((function(t,a){void 0===a&&(a={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,H({fromRouteId:n},a)))}),[e,n])}():function(){J()||u(!1);let e=t.useContext(V),{basename:n,future:r,navigator:a}=t.useContext(Y),{matches:o}=t.useContext(Q),{pathname:i}=X(),l=JSON.stringify(I(o,r.v7_relativeSplatPath)),s=t.useRef(!1);return Z((()=>{s.current=!0})),t.useCallback((function(t,r){if(void 0===r&&(r={}),!s.current)return;if("number"===typeof t)return void a.go(t);let o=D(t,JSON.parse(l),i,"path"===r.relative);null==e&&"/"!==n&&(o.pathname="/"===o.pathname?n:F([n,o.pathname])),(r.replace?a.replace:a.push)(o,r.state,r)}),[n,a,l,i,e])}()}function te(e,n){let{relative:r}=void 0===n?{}:n,{future:a}=t.useContext(Y),{matches:o}=t.useContext(Q),{pathname:i}=X(),l=JSON.stringify(I(o,a.v7_relativeSplatPath));return t.useMemo((()=>D(e,JSON.parse(l),i,"path"===r)),[e,l,i,r])}function ne(n,r,a,o){J()||u(!1);let{navigator:i}=t.useContext(Y),{matches:l}=t.useContext(Q),s=l[l.length-1],c=s?s.params:{},d=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let f,p=X();if(r){var m;let e="string"===typeof r?h(r):r;"/"===d||(null==(m=e.pathname)?void 0:m.startsWith(d))||u(!1),f=e}else f=p;let g=f.pathname||"/",y=g;if("/"!==d){let e=d.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=v(n,{pathname:y});let x=le(b&&b.map((e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:F([d,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:F([d,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,a,o);return r&&x?t.createElement(K.Provider,{value:{location:H({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:e.Pop}},x):x}function re(){let e=function(){var e;let n=t.useContext(G),r=de(ue.UseRouteError),a=fe(ue.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[a]}(),n=B(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:o},r):null,null)}const ae=t.createElement(re,null);class oe extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(Q.Provider,{value:this.props.routeContext},t.createElement(G.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ie(e){let{routeContext:n,match:r,children:a}=e,o=t.useContext(V);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(Q.Provider,{value:n},a)}function le(e,n,r,a){var o;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===a&&(a=null),null==e){var i;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(i=a)&&i.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let l=e,s=null==(o=r)?void 0:o.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||u(!1),l=l.slice(0,Math.min(l.length,e+1))}let c=!1,d=-1;if(r&&a&&a.v7_partialHydration)for(let t=0;t<l.length;t++){let e=l[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,a=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||a){c=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight(((e,a,o)=>{let i,u=!1,f=null,p=null;var h;r&&(i=s&&a.route.id?s[a.route.id]:void 0,f=a.route.errorElement||ae,c&&(d<0&&0===o?(h="route-fallback",!1||pe[h]||(pe[h]=!0),u=!0,p=null):d===o&&(u=!0,p=a.route.hydrateFallbackElement||null)));let m=n.concat(l.slice(0,o+1)),g=()=>{let n;return n=i?f:u?p:a.route.Component?t.createElement(a.route.Component,null):a.route.element?a.route.element:e,t.createElement(ie,{match:a,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:n})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?t.createElement(oe,{location:r.location,revalidation:r.revalidation,component:f,error:i,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var se=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(se||{}),ue=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ue||{});function ce(e){let n=t.useContext(V);return n||u(!1),n}function de(e){let n=t.useContext(q);return n||u(!1),n}function fe(e){let n=function(){let e=t.useContext(Q);return e||u(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||u(!1),r.route.id}const pe={};r.startTransition;function he(e){u(!1)}function me(n){let{basename:r="/",children:a=null,location:o,navigationType:i=e.Pop,navigator:l,static:s=!1,future:c}=n;J()&&u(!1);let d=r.replace(/^\/*/,"/"),f=t.useMemo((()=>({basename:d,navigator:l,static:s,future:H({v7_relativeSplatPath:!1},c)})),[d,c,l,s]);"string"===typeof o&&(o=h(o));let{pathname:p="/",search:m="",hash:g="",state:v=null,key:y="default"}=o,b=t.useMemo((()=>{let e=N(p,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:v,key:y},navigationType:i}}),[d,p,m,g,v,y,i]);return null==b?null:t.createElement(Y.Provider,{value:f},t.createElement(K.Provider,{children:a,value:b}))}function ge(e){let{children:t,location:n}=e;return ne(ve(t),n)}new Promise((()=>{}));t.Component;function ve(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,((e,a)=>{if(!t.isValidElement(e))return;let o=[...n,a];if(e.type===t.Fragment)return void r.push.apply(r,ve(e.props.children,o));e.type!==he&&u(!1),e.props.index&&e.props.children&&u(!1);let i={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=ve(e.props.children,o)),r.push(i)})),r}function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ye.apply(this,arguments)}function be(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const xe=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(ic){}new Map;const we=r.startTransition;i.flushSync,r.useId;function ke(e){let{basename:n,children:r,future:a,window:o}=e,i=t.useRef();var l;null==i.current&&(i.current=(void 0===(l={window:o,v5Compat:!0})&&(l={}),m((function(e,t){let{pathname:n,search:r,hash:a}=e.location;return f("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:p(t)}),null,l)));let s=i.current,[u,c]=t.useState({action:s.action,location:s.location}),{v7_startTransition:d}=a||{},h=t.useCallback((e=>{d&&we?we((()=>c(e))):c(e)}),[c,d]);return t.useLayoutEffect((()=>s.listen(h)),[s,h]),t.createElement(me,{basename:n,children:r,location:u.location,navigationType:u.action,navigator:s,future:a})}const Se="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,je=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ee=t.forwardRef((function(e,n){let r,{onClick:a,relative:o,reloadDocument:i,replace:l,state:s,target:c,to:d,preventScrollReset:f,viewTransition:h}=e,m=be(e,xe),{basename:g}=t.useContext(Y),v=!1;if("string"===typeof d&&je.test(d)&&(r=d,Se))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=N(t.pathname,g);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:v=!0}catch(ic){}let y=function(e,n){let{relative:r}=void 0===n?{}:n;J()||u(!1);let{basename:a,navigator:o}=t.useContext(Y),{hash:i,pathname:l,search:s}=te(e,{relative:r}),c=l;return"/"!==a&&(c="/"===l?a:F([a,l])),o.createHref({pathname:c,search:s,hash:i})}(d,{relative:o}),b=function(e,n){let{target:r,replace:a,state:o,preventScrollReset:i,relative:l,viewTransition:s}=void 0===n?{}:n,u=ee(),c=X(),d=te(e,{relative:l});return t.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==a?a:p(c)===p(d);u(e,{replace:n,state:o,preventScrollReset:i,relative:l,viewTransition:s})}}),[c,u,d,a,o,r,e,i,l,s])}(d,{replace:l,state:s,target:c,preventScrollReset:f,relative:o,viewTransition:h});return t.createElement("a",ye({},m,{href:r||y,onClick:v||i?a:function(e){a&&a(e),e.defaultPrevented||b(e)},ref:n,target:c}))}));var Ce,_e;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ce||(Ce={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(_e||(_e={}));var Pe=function(){return Pe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Pe.apply(this,arguments)};Object.create;function ze(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Te=n(324),Oe=n.n(Te),Ne="-ms-",Re="-moz-",Le="-webkit-",Ie="comm",De="rule",Fe="decl",Ae="@keyframes",Me=Math.abs,We=String.fromCharCode,Be=Object.assign;function Ue(e){return e.trim()}function $e(e,t){return(e=t.exec(e))?e[0]:e}function He(e,t,n){return e.replace(t,n)}function Ve(e,t,n){return e.indexOf(t,n)}function qe(e,t){return 0|e.charCodeAt(t)}function Ye(e,t,n){return e.slice(t,n)}function Ke(e){return e.length}function Qe(e){return e.length}function Ge(e,t){return t.push(e),e}function Je(e,t){return e.filter((function(e){return!$e(e,t)}))}var Xe=1,Ze=1,et=0,tt=0,nt=0,rt="";function at(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:Xe,column:Ze,length:i,return:"",siblings:l}}function ot(e,t){return Be(at("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function it(e){for(;e.root;)e=ot(e.root,{children:[e]});Ge(e,e.siblings)}function lt(){return nt=tt>0?qe(rt,--tt):0,Ze--,10===nt&&(Ze=1,Xe--),nt}function st(){return nt=tt<et?qe(rt,tt++):0,Ze++,10===nt&&(Ze=1,Xe++),nt}function ut(){return qe(rt,tt)}function ct(){return tt}function dt(e,t){return Ye(rt,e,t)}function ft(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pt(e){return Xe=Ze=1,et=Ke(rt=e),tt=0,[]}function ht(e){return rt="",e}function mt(e){return Ue(dt(tt-1,yt(91===e?e+2:40===e?e+1:e)))}function gt(e){for(;(nt=ut())&&nt<33;)st();return ft(e)>2||ft(nt)>3?"":" "}function vt(e,t){for(;--t&&st()&&!(nt<48||nt>102||nt>57&&nt<65||nt>70&&nt<97););return dt(e,ct()+(t<6&&32==ut()&&32==st()))}function yt(e){for(;st();)switch(nt){case e:return tt;case 34:case 39:34!==e&&39!==e&&yt(nt);break;case 40:41===e&&yt(e);break;case 92:st()}return tt}function bt(e,t){for(;st()&&e+nt!==57&&(e+nt!==84||47!==ut()););return"/*"+dt(t,tt-1)+"*"+We(47===e?e:st())}function xt(e){for(;!ft(ut());)st();return dt(e,tt)}function wt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function kt(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Fe:return e.return=e.return||e.value;case Ie:return"";case Ae:return e.return=e.value+"{"+wt(e.children,r)+"}";case De:if(!Ke(e.value=e.props.join(",")))return""}return Ke(n=wt(e.children,r))?e.return=e.value+"{"+n+"}":""}function St(e,t,n){switch(function(e,t){return 45^qe(e,0)?(((t<<2^qe(e,0))<<2^qe(e,1))<<2^qe(e,2))<<2^qe(e,3):0}(e,t)){case 5103:return Le+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Le+e+e;case 4789:return Re+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Le+e+Re+e+Ne+e+e;case 5936:switch(qe(e,t+11)){case 114:return Le+e+Ne+He(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Le+e+Ne+He(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Le+e+Ne+He(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Le+e+Ne+e+e;case 6165:return Le+e+Ne+"flex-"+e+e;case 5187:return Le+e+He(e,/(\w+).+(:[^]+)/,Le+"box-$1$2"+Ne+"flex-$1$2")+e;case 5443:return Le+e+Ne+"flex-item-"+He(e,/flex-|-self/g,"")+($e(e,/flex-|baseline/)?"":Ne+"grid-row-"+He(e,/flex-|-self/g,""))+e;case 4675:return Le+e+Ne+"flex-line-pack"+He(e,/align-content|flex-|-self/g,"")+e;case 5548:return Le+e+Ne+He(e,"shrink","negative")+e;case 5292:return Le+e+Ne+He(e,"basis","preferred-size")+e;case 6060:return Le+"box-"+He(e,"-grow","")+Le+e+Ne+He(e,"grow","positive")+e;case 4554:return Le+He(e,/([^-])(transform)/g,"$1"+Le+"$2")+e;case 6187:return He(He(He(e,/(zoom-|grab)/,Le+"$1"),/(image-set)/,Le+"$1"),e,"")+e;case 5495:case 3959:return He(e,/(image-set\([^]*)/,Le+"$1$`$1");case 4968:return He(He(e,/(.+:)(flex-)?(.*)/,Le+"box-pack:$3"+Ne+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Le+e+e;case 4200:if(!$e(e,/flex-|baseline/))return Ne+"grid-column-align"+Ye(e,t)+e;break;case 2592:case 3360:return Ne+He(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,$e(e.props,/grid-\w+-end/)}))?~Ve(e+(n=n[t].value),"span",0)?e:Ne+He(e,"-start","")+e+Ne+"grid-row-span:"+(~Ve(n,"span",0)?$e(n,/\d+/):+$e(n,/\d+/)-+$e(e,/\d+/))+";":Ne+He(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return $e(e.props,/grid-\w+-start/)}))?e:Ne+He(He(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return He(e,/(.+)-inline(.+)/,Le+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ke(e)-1-t>6)switch(qe(e,t+1)){case 109:if(45!==qe(e,t+4))break;case 102:return He(e,/(.+:)(.+)-([^]+)/,"$1"+Le+"$2-$3$1"+Re+(108==qe(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ve(e,"stretch",0)?St(He(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return He(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,o,i,l){return Ne+n+":"+r+l+(a?Ne+n+"-span:"+(o?i:+i-+r)+l:"")+e}));case 4949:if(121===qe(e,t+6))return He(e,":",":"+Le)+e;break;case 6444:switch(qe(e,45===qe(e,14)?18:11)){case 120:return He(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Le+(45===qe(e,14)?"inline-":"")+"box$3$1"+Le+"$2$3$1"+Ne+"$2box$3")+e;case 100:return He(e,":",":"+Ne)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return He(e,"scroll-","scroll-snap-")+e}return e}function jt(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Fe:return void(e.return=St(e.value,e.length,n));case Ae:return wt([ot(e,{value:He(e.value,"@","@"+Le)})],r);case De:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch($e(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":it(ot(e,{props:[He(t,/:(read-\w+)/,":-moz-$1")]})),it(ot(e,{props:[t]})),Be(e,{props:Je(n,r)});break;case"::placeholder":it(ot(e,{props:[He(t,/:(plac\w+)/,":"+Le+"input-$1")]})),it(ot(e,{props:[He(t,/:(plac\w+)/,":-moz-$1")]})),it(ot(e,{props:[He(t,/:(plac\w+)/,Ne+"input-$1")]})),it(ot(e,{props:[t]})),Be(e,{props:Je(n,r)})}return""}))}}function Et(e){return ht(Ct("",null,null,null,[""],e=pt(e),0,[0],e))}function Ct(e,t,n,r,a,o,i,l,s){for(var u=0,c=0,d=i,f=0,p=0,h=0,m=1,g=1,v=1,y=0,b="",x=a,w=o,k=r,S=b;g;)switch(h=y,y=st()){case 40:if(108!=h&&58==qe(S,d-1)){-1!=Ve(S+=He(mt(y),"&","&\f"),"&\f",Me(u?l[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=mt(y);break;case 9:case 10:case 13:case 32:S+=gt(h);break;case 92:S+=vt(ct()-1,7);continue;case 47:switch(ut()){case 42:case 47:Ge(Pt(bt(st(),ct()),t,n,s),s);break;default:S+="/"}break;case 123*m:l[u++]=Ke(S)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+c:-1==v&&(S=He(S,/\f/g,"")),p>0&&Ke(S)-d&&Ge(p>32?zt(S+";",r,n,d-1,s):zt(He(S," ","")+";",r,n,d-2,s),s);break;case 59:S+=";";default:if(Ge(k=_t(S,t,n,u,c,a,l,b,x=[],w=[],d,o),o),123===y)if(0===c)Ct(S,t,k,k,x,o,d,l,w);else switch(99===f&&110===qe(S,3)?100:f){case 100:case 108:case 109:case 115:Ct(e,k,k,r&&Ge(_t(e,k,k,0,0,a,l,b,a,x=[],d,w),w),a,w,d,l,r?x:w);break;default:Ct(S,k,k,k,[""],w,0,l,w)}}u=c=p=0,m=v=1,b=S="",d=i;break;case 58:d=1+Ke(S),p=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==lt())continue;switch(S+=We(y),y*m){case 38:v=c>0?1:(S+="\f",-1);break;case 44:l[u++]=(Ke(S)-1)*v,v=1;break;case 64:45===ut()&&(S+=mt(st())),f=ut(),c=d=Ke(b=S+=xt(ct())),y++;break;case 45:45===h&&2==Ke(S)&&(m=0)}}return o}function _t(e,t,n,r,a,o,i,l,s,u,c,d){for(var f=a-1,p=0===a?o:[""],h=Qe(p),m=0,g=0,v=0;m<r;++m)for(var y=0,b=Ye(e,f+1,f=Me(g=i[m])),x=e;y<h;++y)(x=Ue(g>0?p[y]+" "+b:He(b,/&\f/g,p[y])))&&(s[v++]=x);return at(e,t,n,0===a?De:l,s,u,c,d)}function Pt(e,t,n,r){return at(e,t,n,Ie,We(nt),Ye(e,2,-2),0,r)}function zt(e,t,n,r,a){return at(e,t,n,Fe,Ye(e,0,r),Ye(e,r+1,-1),r,a)}var Tt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ot="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Nt="active",Rt="data-styled-version",Lt="6.1.15",It="/*!sc*/\n",Dt="undefined"!=typeof window&&"HTMLElement"in window,Ft=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),At={},Mt=(new Set,Object.freeze([])),Wt=Object.freeze({});function Bt(e,t,n){return void 0===n&&(n=Wt),e.theme!==n.theme&&e.theme||t||n.theme}var Ut=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$t=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ht=/(^-|-$)/g;function Vt(e){return e.replace($t,"-").replace(Ht,"")}var qt=/(a)(d)/gi,Yt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Kt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Yt(t%52)+n;return(Yt(t%52)+n).replace(qt,"$1-$2")}var Qt,Gt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jt=function(e){return Gt(5381,e)};function Xt(e){return Kt(Jt(e)>>>0)}function Zt(e){return e.displayName||e.name||"Component"}function en(e){return"string"==typeof e&&!0}var tn="function"==typeof Symbol&&Symbol.for,nn=tn?Symbol.for("react.memo"):60115,rn=tn?Symbol.for("react.forward_ref"):60112,an={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},on={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ln={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sn=((Qt={})[rn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qt[nn]=ln,Qt);function un(e){return("type"in(t=e)&&t.type.$$typeof)===nn?ln:"$$typeof"in e?sn[e.$$typeof]:an;var t}var cn=Object.defineProperty,dn=Object.getOwnPropertyNames,fn=Object.getOwnPropertySymbols,pn=Object.getOwnPropertyDescriptor,hn=Object.getPrototypeOf,mn=Object.prototype;function gn(e,t,n){if("string"!=typeof t){if(mn){var r=hn(t);r&&r!==mn&&gn(e,r,n)}var a=dn(t);fn&&(a=a.concat(fn(t)));for(var o=un(e),i=un(t),l=0;l<a.length;++l){var s=a[l];if(!(s in on||n&&n[s]||i&&s in i||o&&s in o)){var u=pn(t,s);try{cn(e,s,u)}catch(e){}}}}return e}function vn(e){return"function"==typeof e}function yn(e){return"object"==typeof e&&"styledComponentId"in e}function bn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function xn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function wn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function kn(e,t,n){if(void 0===n&&(n=!1),!n&&!wn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=kn(e[r],t[r]);else if(wn(t))for(var r in t)e[r]=kn(e[r],t[r]);return e}function Sn(e,t){Object.defineProperty(e,"toString",{value:t})}function jn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var En=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw jn(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+="".concat(this.tag.getRule(o)).concat(It);return t},e}(),Cn=new Map,_n=new Map,Pn=1,zn=function(e){if(Cn.has(e))return Cn.get(e);for(;_n.has(Pn);)Pn++;var t=Pn++;return Cn.set(e,t),_n.set(t,e),t},Tn=function(e,t){Pn=t+1,Cn.set(e,t),_n.set(t,e)},On="style[".concat(Ot,"][").concat(Rt,'="').concat(Lt,'"]'),Nn=new RegExp("^".concat(Ot,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Rn=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},Ln=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(It),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(Nn);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(Tn(c,u),Rn(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}},In=function(e){for(var t=document.querySelectorAll(On),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(Ot)!==Nt&&(Ln(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Dn(){return n.nc}var Fn=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Ot,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(Ot,Nt),r.setAttribute(Rt,Lt);var i=Dn();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},An=function(){function e(e){this.element=Fn(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw jn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Mn=function(){function e(e){this.element=Fn(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Wn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Bn=Dt,Un={isServer:!Dt,useCSSOMInjection:!Ft},$n=function(){function e(e,t,n){void 0===e&&(e=Wt),void 0===t&&(t={});var r=this;this.options=Pe(Pe({},Un),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Dt&&Bn&&(Bn=!1,In(this)),Sn(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return _n.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a),i=t.getGroup(n);if(void 0===o||!o.size||0===i.length)return"continue";var l="".concat(Ot,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==o&&o.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(It)},o=0;o<n;o++)a(o);return r}(r)}))}return e.registerId=function(e){return zn(e)},e.prototype.rehydrate=function(){!this.server&&Dt&&In(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Pe(Pe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Wn(n):t?new An(n):new Mn(n)}(this.options),new En(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(zn(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(zn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(zn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Hn=/&/g,Vn=/^\s*\/\/.*$/gm;function qn(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=qn(e.children,t)),e}))}function Yn(e){var t,n,r,a=void 0===e?Wt:e,o=a.options,i=void 0===o?Wt:o,l=a.plugins,s=void 0===l?Mt:l,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===De&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Hn,n).replace(r,u))})),i.prefix&&c.push(jt),c.push(kt);var d=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(Vn,""),u=Et(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);i.namespace&&(u=qn(u,i.namespace));var d,f=[];return wt(u,function(e){var t=Qe(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce((function(e,t){return t.name||jn(15),Gt(e,t.name)}),5381).toString():"",d}var Kn=new $n,Qn=Yn(),Gn=t.createContext({shouldForwardProp:void 0,styleSheet:Kn,stylis:Qn}),Jn=(Gn.Consumer,t.createContext(void 0));function Xn(){return(0,t.useContext)(Gn)}function Zn(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],a=n[1],o=Xn().styleSheet,i=(0,t.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),l=(0,t.useMemo)((function(){return Yn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)((function(){Oe()(r,e.stylisPlugins)||a(e.stylisPlugins)}),[e.stylisPlugins]);var s=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:l}}),[e.shouldForwardProp,i,l]);return t.createElement(Gn.Provider,{value:s},t.createElement(Jn.Provider,{value:l},e.children))}var er=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Qn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Sn(this,(function(){throw jn(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Qn),this.name+e.hash},e}(),tr=function(e){return e>="A"&&e<="Z"};function nr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;tr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var rr=function(e){return null==e||!1===e||""===e},ar=function(e){var t,n,r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!rr(o)&&(Array.isArray(o)&&o.isCss||vn(o)?r.push("".concat(nr(a),":"),o,";"):wn(o)?r.push.apply(r,ze(ze(["".concat(a," {")],ar(o),!1),["}"],!1)):r.push("".concat(nr(a),": ").concat((t=a,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Tt||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function or(e,t,n,r){return rr(e)?[]:yn(e)?[".".concat(e.styledComponentId)]:vn(e)?!vn(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:or(e(t),t,n,r):e instanceof er?n?(e.inject(n,r),[e.getName(r)]):[e]:wn(e)?ar(e):Array.isArray(e)?Array.prototype.concat.apply(Mt,e.map((function(e){return or(e,t,n,r)}))):[e.toString()];var a}function ir(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(vn(n)&&!yn(n))return!1}return!0}var lr=Jt(Lt),sr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&ir(e),this.componentId=t,this.baseHash=Gt(lr,t),this.baseStyle=n,$n.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=bn(r,this.staticRulesId);else{var a=xn(or(this.rules,e,t,n)),o=Kt(Gt(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=bn(r,o),this.staticRulesId=o}else{for(var l=Gt(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=xn(or(c,e,t,n));l=Gt(l,d+u),s+=d}}if(s){var f=Kt(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=bn(r,f)}}return r},e}(),ur=t.createContext(void 0);ur.Consumer;var cr={};new Set;function dr(e,n,r){var a=yn(e),o=e,i=!en(e),l=n.attrs,s=void 0===l?Mt:l,u=n.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":Vt(e);cr[n]=(cr[n]||0)+1;var r="".concat(n,"-").concat(Xt(Lt+n+cr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,f=void 0===d?function(e){return en(e)?"styled.".concat(e):"Styled(".concat(Zt(e),")")}(e):d,p=n.displayName&&n.componentId?"".concat(Vt(n.displayName),"-").concat(n.componentId):n.componentId||c,h=a&&o.attrs?o.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(a&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new sr(r,p,a?o.componentStyle:void 0);function b(e,n){return function(e,n,r){var a=e.attrs,o=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,u=e.target,c=t.useContext(ur),d=Xn(),f=e.shouldForwardProp||d.shouldForwardProp,p=Bt(n,c,i)||Wt,h=function(e,t,n){for(var r,a=Pe(Pe({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var i=vn(r=e[o])?r(a):r;for(var l in i)a[l]="className"===l?bn(a[l],i[l]):"style"===l?Pe(Pe({},a[l]),i[l]):i[l]}return t.className&&(a.className=bn(a.className,t.className)),a}(a,n,p),m=h.as||u,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===p||("forwardedAs"===v?g.as=h.forwardedAs:f&&!f(v,m)||(g[v]=h[v]));var y=function(e,t){var n=Xn();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),b=bn(l,s);return y&&(b+=" "+y),h.className&&(b+=" "+h.className),g[en(m)&&!Ut.has(m)?"class":"className"]=b,r&&(g.ref=r),(0,t.createElement)(m,g)}(x,e,n)}b.displayName=f;var x=t.forwardRef(b);return x.attrs=h,x.componentStyle=y,x.displayName=f,x.shouldForwardProp=m,x.foldedComponentIds=a?bn(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=p,x.target=a?o.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)kn(e,a[r],!0);return e}({},o.defaultProps,e):e}}),Sn(x,(function(){return".".concat(x.styledComponentId)})),i&&gn(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function fr(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var pr=function(e){return Object.assign(e,{isCss:!0})};function hr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(vn(e)||wn(e))return pr(or(fr(Mt,ze([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?or(r):pr(or(fr(r,t)))}function mr(e,t,n){if(void 0===n&&(n=Wt),!t)throw jn(1,t);var r=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,hr.apply(void 0,ze([r],a,!1)))};return r.attrs=function(r){return mr(e,t,Pe(Pe({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return mr(e,t,Pe(Pe({},n),r))},r}var gr=function(e){return mr(dr,e)},vr=gr;Ut.forEach((function(e){vr[e]=gr(e)}));var yr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ir(e),$n.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(xn(or(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&$n.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function br(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=xn(hr.apply(void 0,ze([e],t,!1))),a=Xt(r);return new er(a,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Dn(),r=xn([n&&'nonce="'.concat(n,'"'),"".concat(Ot,'="true"'),"".concat(Rt,'="').concat(Lt,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw jn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw jn(2);var r=e.instance.toString();if(!r)return[];var a=((n={})[Ot]="",n[Rt]=Lt,n.dangerouslySetInnerHTML={__html:r},n),o=Dn();return o&&(a.nonce=o),[t.createElement("style",Pe({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new $n({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw jn(2);return t.createElement(Zn,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw jn(3)}})(),"__sc-".concat(Ot,"__");const xr=n.p+"static/media/BrightSparksLogo.edaa220c989ac40f17de.png";var wr=n(579);const kr=br`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,Sr=()=>{const[e,n]=(0,t.useState)(!1),[r,a]=(0,t.useState)(!1),o=X();(0,t.useEffect)((()=>{const e=()=>{a(window.scrollY>10)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);return(0,wr.jsxs)(jr,{scrolled:r,children:[(0,wr.jsxs)(Er,{children:[(0,wr.jsxs)(Tr,{onClick:()=>n(!e),children:[(0,wr.jsx)("span",{}),(0,wr.jsx)("span",{}),(0,wr.jsx)("span",{})]}),(0,wr.jsxs)(Cr,{to:"/",children:[(0,wr.jsx)("img",{src:xr,alt:"Bright Sparks Academy"}),(0,wr.jsx)(Nr,{children:"Bright Sparks Academy"})]}),(0,wr.jsx)(_r,{isOpen:e,children:[{name:"Home",to:"/"},{name:"Programs",to:"/programs"},{name:"Join",to:"/join"},{name:"Volunteer",to:"/internships"},{name:"Impact",to:"/impact"},{name:"About",to:"/origin"},{name:"Connect",to:"/connect"},{name:"Contact",to:"/contact"}].map((e=>(0,wr.jsx)(Pr,{to:e.to,active:o.pathname===e.to?1:0,onClick:()=>n(!1),children:e.name},e.to)))}),(0,wr.jsx)(zr,{to:"/donate",children:"Donate"})]}),e&&(0,wr.jsx)(Or,{onClick:()=>n(!1)})]})},jr=vr.nav`
  position: sticky;
  top: 20px;
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 12px;
  z-index: 1000;
  box-shadow: ${e=>{let{scrolled:t}=e;return t?"0 4px 6px rgba(0, 0, 0, 0.1)":"none"}};
  transform-origin: top center;
  transition: transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`,Er=vr.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`,Cr=vr(Ee)`
  display: flex;
  align-items: center;
  text-decoration: none;
  img {
    height: 60px;
    transition: transform 0.3s ease;
  }
  &:hover img {
    transform: scale(1.05);
  }
`,_r=vr.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: #ffffff;
    flex-direction: column;
    transform: ${e=>{let{isOpen:t}=e;return t?"translateY(0)":"translateY(-100%)"}};
    transition: transform 0.3s ease;
    padding-top: 20px;
    z-index: 999;
  }
`,Pr=vr(Ee)`
  position: relative;
  color: #000000;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  padding: 8px 16px;
  margin: 0 4px;
  border-radius: 9999px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 217, 0, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 16px;
    height: 2px;
    width: ${e=>{let{active:t}=e;return t?"calc(100% - 32px)":"0"}};
    background: #ffd900;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: calc(100% - 32px);
  }

  @media (max-width: 768px) {
    margin: 8px 0;
    width: 100%;
    text-align: center;
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`,zr=vr(Ee)`
  background: #ffd900;
  color: #000000;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 9999px;
  text-decoration: none;
  transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  animation: ${kr} 10s ease-in-out infinite;

  &:hover {
    background: #000000;
    color: #ffd900;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    margin-left: 0;
    position: fixed;
    top: 15px;
    right: 20px;
  }
`,Tr=vr.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    span {
      width: 25px;
      height: 3px;
      background: #000000;
      margin: 4px 0;
      border-radius: 3px;
      transition: transform 0.3s ease;
    }
  }
`,Or=vr.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: calc(100% - 60px);
    background: rgba(0,0,0,0.3);
    z-index: 998;
  }
`,Nr=vr.span`
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  color: #000;
  margin-left: 8px;
  text-decoration: none;
`;var Rr={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Lr=t.createContext&&t.createContext(Rr),Ir=["attr","size","title"];function Dr(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Fr(){return Fr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fr.apply(this,arguments)}function Ar(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Mr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ar(Object(n),!0).forEach((function(t){Wr(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ar(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Wr(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Br(e){return e&&e.map(((e,n)=>t.createElement(e.tag,Mr({key:n},e.attr),Br(e.child))))}function Ur(e){return n=>t.createElement($r,Fr({attr:Mr({},e.attr)},n),Br(e.child))}function $r(e){var n=n=>{var r,{attr:a,size:o,title:i}=e,l=Dr(e,Ir),s=o||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",Fr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,l,{className:r,style:Mr(Mr({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&t.createElement("title",null,i),e.children)};return void 0!==Lr?t.createElement(Lr.Consumer,null,(e=>n(e))):n(Rr)}function Hr(e){return Ur({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}function Vr(e){return Ur({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function qr(e){return Ur({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function Yr(e){return Ur({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}function Kr(e){return Ur({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)}function Qr(e){return Ur({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"},child:[]}]})(e)}const Gr=()=>(0,wr.jsxs)(Jr,{children:[(0,wr.jsxs)(Xr,{children:[(0,wr.jsxs)(Zr,{children:[(0,wr.jsx)(ea,{src:xr,alt:"Bright Sparks Academy"}),(0,wr.jsx)(ta,{children:"EIN: 33-1317158"}),(0,wr.jsxs)(ma,{children:[(0,wr.jsx)(ga,{href:"https://linkedin.com/company/BrightSparksAcademy",target:"_blank",rel:"noopener noreferrer",children:(0,wr.jsx)(qr,{})}),(0,wr.jsx)(ga,{href:"https://youtube.com/BrightSparksAcademy",target:"_blank",rel:"noopener noreferrer",children:(0,wr.jsx)(Kr,{})}),(0,wr.jsx)(ga,{href:"https://x.com/BrightSparksAcad",target:"_blank",rel:"noopener noreferrer",children:(0,wr.jsx)(Yr,{})}),(0,wr.jsx)(ga,{href:"https://www.tiktok.com/@brightsparksacademy",target:"_blank",rel:"noopener noreferrer",children:(0,wr.jsx)(Qr,{})}),(0,wr.jsx)(ga,{href:"https://facebook.com/BrightSparksAcademy",target:"_blank",rel:"noopener noreferrer",children:(0,wr.jsx)(Hr,{})}),(0,wr.jsx)(ga,{href:"https://instagram.com/BrightSparksAcademy",target:"_blank",rel:"noopener noreferrer",children:(0,wr.jsx)(Vr,{})})]})]}),(0,wr.jsxs)(na,{children:[(0,wr.jsx)(ra,{children:"Programs & Join"}),(0,wr.jsxs)(aa,{children:[(0,wr.jsx)(oa,{children:(0,wr.jsx)(Ee,{to:"/",children:"Home"})}),(0,wr.jsx)(oa,{children:(0,wr.jsx)(Ee,{to:"/programs",children:"Programs"})}),(0,wr.jsx)(oa,{children:(0,wr.jsx)(Ee,{to:"/join",children:"Join"})}),(0,wr.jsx)(oa,{children:(0,wr.jsx)(Ee,{to:"/volunteer",children:"Volunteer"})})]})]}),(0,wr.jsxs)(na,{children:[(0,wr.jsx)(ra,{children:"Explore"}),(0,wr.jsxs)(aa,{children:[(0,wr.jsx)(oa,{children:(0,wr.jsx)(Ee,{to:"/impact",children:"Impact"})}),(0,wr.jsx)(oa,{children:(0,wr.jsx)(Ee,{to:"/origin",children:"About"})}),(0,wr.jsx)(oa,{children:(0,wr.jsx)(Ee,{to:"/connect",children:"Connect"})}),(0,wr.jsx)(oa,{children:(0,wr.jsx)(Ee,{to:"/contact",children:"Contact"})})]})]}),(0,wr.jsxs)(ia,{children:[(0,wr.jsx)(la,{children:"Contact Us"}),(0,wr.jsx)(sa,{children:(0,wr.jsx)("a",{href:"mailto:reach@brightsparks.academy",children:"reach@brightsparks.academy"})}),(0,wr.jsx)(sa,{children:"(650) 272-7186"})]}),(0,wr.jsxs)(ua,{children:[(0,wr.jsx)(ca,{children:"Stay Updated"}),(0,wr.jsxs)(da,{children:[(0,wr.jsx)(fa,{type:"email",placeholder:"Your email address"}),(0,wr.jsx)(pa,{children:"Subscribe"})]})]})]}),(0,wr.jsxs)(ha,{children:["\xa9 ",(new Date).getFullYear()," Bright Sparks Academy. All Rights Reserved."]})]}),Jr=vr.footer`
  background: #fffbeb;
  color: #000;
  padding: 4rem 2rem 2rem;
  font-family: 'Inter', sans-serif;
`,Xr=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;
`,Zr=vr.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,ea=vr.img`
  height: 80px;
  margin-bottom: 0.5rem;
`,ta=vr.p`
  font-size: 1rem;
  margin: 0;
`,na=vr.div``,ra=vr.h4`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`,aa=vr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,oa=vr.li`
  margin-bottom: 0.75rem;
  a {
    color: #000;
    font-size: 1rem;
    text-decoration: none;
    transition: color 0.2s ease;
    &:hover {
      color: #ffd900;
    }
  }
`,ia=vr.div`
  margin: 0;
  padding: 0;
`,la=vr.h4`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`,sa=vr.p`
  font-size: 1rem;
  margin: 0.75rem 0;
  a {
    color: #000;
    text-decoration: underline;
  }
`,ua=vr.div`
  margin: 0;
  padding: 0;
`,ca=vr.h4`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`,da=vr.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,fa=vr.input`
  width: 100%;
  max-width: 300px;
  padding: 0.75rem 1.25rem;
  border: 1px solid #ddd;
  border-radius: 9999px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #ffd900;
    box-shadow: 0 0 0 3px rgba(255, 217, 0, 0.3);
  }
`,pa=vr.button`
  background: #ffd900;
  color: #000;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  &:hover {
    background: #e6c800;
    transform: scale(1.05);
  }
`,ha=vr.p`
  text-align: center;
  font-size: 0.9rem;
  margin-top: 2rem;
`,ma=vr.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`,ga=vr.a`
  display: inline-block;
  width: 24px;
  height: 24px;
  svg {
    width: 100%;
    height: 100%;
    color: #000;
  }
  &:hover {
    opacity: 0.8;
  }
`,va=n.p+"static/media/landing-hero.d96bc5439255c6242825.png",ya=br`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,ba=()=>(0,wr.jsxs)(xa,{children:[(0,wr.jsxs)(wa,{children:[(0,wr.jsx)(ka,{}),(0,wr.jsxs)(Sa,{children:[(0,wr.jsx)(Ja,{children:(0,wr.jsxs)(Xa,{children:[(0,wr.jsx)(Za,{children:"\u2705 Over 5,000 sessions completed"}),(0,wr.jsx)(Za,{children:"\u2b50 Loved by 100+ families nationwide"})]})}),(0,wr.jsx)(ja,{children:"Free. Personalized. Flexible Tutoring That Transforms Futures."}),(0,wr.jsx)(Ea,{children:"Bright Sparks Academy offers free 1-on-1 tutoring tailored to every child\u2019s needs\u2014right from the comfort of your home."}),(0,wr.jsxs)(Ca,{children:[(0,wr.jsx)(_a,{to:"/join",children:"Get Started Today"}),(0,wr.jsx)(Pa,{to:"/origin",children:"Learn More About Us"})]})]}),(0,wr.jsx)(Ga,{src:va,alt:"Tutoring illustration"})]}),(0,wr.jsxs)(za,{children:[(0,wr.jsx)(Ta,{children:[{metric:"3+ Years of Free Tutoring"},{metric:"50+ Tutors Trained"},{metric:"20+ Current Students Served"},{metric:"100% Personalized Learning Paths"}].map(((e,t)=>(0,wr.jsx)(Oa,{style:{animationDelay:.2*t+"s"},children:(0,wr.jsx)(Na,{children:e.metric})},t)))}),(0,wr.jsx)(Ra,{children:"We\u2019re reimagining education by offering cutting-edge, customized tutoring to underserved children\u2014free of charge, anytime, anywhere."})]}),(0,wr.jsxs)(La,{children:[(0,wr.jsx)(Ia,{children:"Trusted by Families Across the Bay Area"}),(0,wr.jsx)(Da,{children:[{name:"Sarah K.",grade:"5th Grade Student",quote:"Bright Sparks has transformed my daughter\u2019s confidence in math!"},{name:"Michael T.",grade:"8th Grade Student",quote:"Tutors are professional and truly care about progress."},{name:"Emily R.",grade:"6th Grade Student",quote:"Flexible scheduling made it so easy for our busy family."}].map(((e,t)=>(0,wr.jsxs)(Fa,{children:[(0,wr.jsxs)(Aa,{children:['"',e.quote,'"']}),(0,wr.jsxs)(Ma,{children:[e.name," \u2013 ",e.grade]})]},t)))}),(0,wr.jsx)(Wa,{to:"/contact",children:"Submit Your Testimonial"})]}),(0,wr.jsxs)(Ba,{children:[(0,wr.jsx)(Ia,{children:"How Bright Sparks Works"}),(0,wr.jsxs)(Ua,{children:[(0,wr.jsxs)($a,{children:[(0,wr.jsx)(Ha,{children:"1"}),(0,wr.jsx)(Va,{children:"Sign Up & Tell Us Your Needs"}),(0,wr.jsx)(qa,{children:"Fill out a brief form with student info, schedule, and preferences."})]}),(0,wr.jsxs)($a,{children:[(0,wr.jsx)(Ha,{children:"2"}),(0,wr.jsx)(Va,{children:"Get Matched with a Tutor"}),(0,wr.jsx)(qa,{children:"Based on subject, style, and availability."})]}),(0,wr.jsxs)($a,{children:[(0,wr.jsx)(Ha,{children:"3"}),(0,wr.jsx)(Va,{children:"Start Learning & See Progress"}),(0,wr.jsx)(qa,{children:"Weekly sessions, flexible hours, regular parent updates."})]})]})]}),(0,wr.jsxs)(Ya,{children:[(0,wr.jsx)(Ka,{children:"Ready to Spark Your Child\u2019s Learning Journey?"}),(0,wr.jsx)(Qa,{children:"Join dozens of families already experiencing the power of personalized education\u2014100% free."}),(0,wr.jsx)(_a,{to:"/join",children:"Enroll for Free"})]})]}),xa=vr.div`
  font-family: 'Inter', sans-serif;
  color: #000;
`,wa=vr.section`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 3rem 0;
`,ka=vr.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 217, 0, 0.15);
`,Sa=vr.div`
  position: relative;
  max-width: 600px;
  margin-left: 5%;
  animation: ${ya} 0.6s ease-out;
`,ja=vr.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`,Ea=vr.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`,Ca=vr.div`
  display: flex;
  align-items: center;
`,_a=vr(Ee)`
  background: #000;
  color: #ffd900;
  padding: 12px 24px;
  border-radius: 9999px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 8px rgba(255,217,0,0.6);
  }
`,Pa=vr(Ee)`
  color: #000;
  text-decoration: underline;
  font-size: 1rem;
`,za=vr.section`
  padding: 4rem 2rem;
  background: #fff;
  text-align: center;
`,Ta=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`,Oa=vr.div`
  text-align: center;
  margin: 1rem;
  animation: ${ya} 0.6s ease-out forwards;
`,Na=vr.h3`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`,Ra=vr.p`
  max-width: 800px;
  margin: 2rem auto 0;
  text-align: center;
  font-style: italic;
`,La=vr.section`
  background: #f9f7f0;
  padding: 4rem 2rem;
  text-align: center;
`,Ia=vr.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`,Da=vr.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,Fa=vr.div`
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  margin: 1rem;
  max-width: 300px;
`,Aa=vr.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`,Ma=vr.p`
  font-weight: bold;
  font-size: 0.9rem;
`,Wa=vr(Ee)`
  display: inline-block;
  margin-top: 1.5rem;
  text-decoration: underline;
  color: #000;
`,Ba=vr.section`
  padding: 4rem 2rem;
`,Ua=vr.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`,$a=vr.div`
  max-width: 250px;
  text-align: center;
  margin: 1rem;
`,Ha=vr.div`
  background: #ffd900;
  color: #000;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:bold;
  margin: 0 auto 1rem;
`,Va=vr.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`,qa=vr.p`
  font-size: 1rem;
`,Ya=vr.section`
  padding: 4rem 2rem;
  text-align: center;
`,Ka=vr.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`,Qa=vr.p`
  font-size: 1rem;
  margin-bottom: 2rem;
`,Ga=vr.img`
  max-width: 40%;
  border-radius: 1rem;
  object-fit: cover;
  margin-right: 3%;
  animation: ${ya} 0.8s ease-out forwards;
`,Ja=vr.div`
  margin-top: 4rem;
  text-align: center;
`,Xa=vr.div`
  display: inline-flex;
  gap: 1rem;
  margin-left: -40px;
`,Za=vr.div`
  background: #fff;
  border: 1px solid #ffd900;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
`,eo=br`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,to=()=>(0,wr.jsxs)(no,{children:[(0,wr.jsxs)(ro,{children:[(0,wr.jsx)(ao,{children:"What We Offer at Bright Sparks"}),(0,wr.jsx)(oo,{children:"Every child learns differently. That\u2019s why our programs are 100% personalized, always flexible, and completely free."}),(0,wr.jsxs)(io,{children:[(0,wr.jsx)(lo,{to:"/join",children:"Join Today"}),(0,wr.jsx)(so,{to:"#teaching-style",children:"See How It Works"})]})]}),(0,wr.jsx)(uo,{children:(0,wr.jsx)(co,{children:"Subjects We Offer"})}),(0,wr.jsxs)(fo,{children:[(0,wr.jsx)(co,{children:"Customized by Grade, Skill Level, and Goals"}),(0,wr.jsxs)(po,{children:[(0,wr.jsxs)(ho,{style:{animationDelay:"0.1s"},children:[(0,wr.jsx)(mo,{children:"\ud83c\udf92"}),(0,wr.jsx)(go,{children:"Elementary (K\u20135)"}),(0,wr.jsxs)(vo,{children:[(0,wr.jsx)("li",{children:"Foundational math"}),(0,wr.jsx)("li",{children:"Phonics"}),(0,wr.jsx)("li",{children:"Creative writing"}),(0,wr.jsx)("li",{children:"Basic logic games"})]})]}),(0,wr.jsxs)(ho,{style:{animationDelay:"0.2s"},children:[(0,wr.jsx)(mo,{children:"\ud83e\udded"}),(0,wr.jsx)(go,{children:"Middle School (6\u20138)"}),(0,wr.jsxs)(vo,{children:[(0,wr.jsx)("li",{children:"Pre-algebra"}),(0,wr.jsx)("li",{children:"Literature"}),(0,wr.jsx)("li",{children:"Intro coding"}),(0,wr.jsx)("li",{children:"Science projects"}),(0,wr.jsx)("li",{children:"Essay writing"})]})]}),(0,wr.jsxs)(ho,{style:{animationDelay:"0.3s"},children:[(0,wr.jsx)(mo,{children:"\ud83c\udf93"}),(0,wr.jsx)(go,{children:"High School (9\u201312)"}),(0,wr.jsxs)(vo,{children:[(0,wr.jsx)("li",{children:"Algebra & Geometry"}),(0,wr.jsx)("li",{children:"Advanced writing"}),(0,wr.jsx)("li",{children:"SAT/ACT prep"}),(0,wr.jsx)("li",{children:"Leadership skills"})]})]})]})]}),(0,wr.jsxs)(yo,{id:"teaching-style",children:[(0,wr.jsx)(co,{children:"How We Teach"}),(0,wr.jsx)(bo,{children:[{icon:"\ud83d\udca1",title:"Personalized Plans",desc:"Every student starts with a learning needs survey"},{icon:"\ud83e\udd1d",title:"1-on-1 Tutors",desc:"Matched based on subject, schedule, personality"},{icon:"\u23f0",title:"Flexible Sessions",desc:"Weekdays, weekends, short or long-term"},{icon:"\ud83d\udcc8",title:"Progress Monitoring",desc:"Regular updates on student performance"},{icon:"\ud83e\udde0",title:"Growth-Focused",desc:"Emphasis on mindset, confidence, and curiosity"}].map(((e,t)=>(0,wr.jsxs)(xo,{style:{animationDelay:.1*t+"s"},children:[(0,wr.jsx)(wo,{children:e.icon}),(0,wr.jsx)(ko,{children:e.title}),(0,wr.jsx)(So,{children:e.desc})]},t)))})]}),(0,wr.jsxs)(jo,{children:[(0,wr.jsx)(co,{children:"Why Parents Choose Bright Sparks"}),(0,wr.jsx)(Eo,{children:[{icon:"\ud83d\udcb8",title:"Always Free",desc:"No hidden costs or subscription fees"},{icon:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67",title:"Family-First Scheduling",desc:"Sessions that work for your life"},{icon:"\ud83e\uddd1\u200d\ud83c\udfeb",title:"Volunteer-Powered",desc:"Passionate, trained tutors who care"},{icon:"\ud83d\udcca",title:"Real Growth",desc:"Confidence and skills, not just homework help"}].map(((e,t)=>(0,wr.jsxs)(Co,{style:{animationDelay:.1*t+"s"},children:[(0,wr.jsx)(_o,{children:e.icon}),(0,wr.jsx)(Po,{children:e.title}),(0,wr.jsx)(zo,{children:e.desc})]},t)))})]}),(0,wr.jsxs)(To,{children:[(0,wr.jsx)(Oo,{children:"Ready to find the perfect learning match for your child?"}),(0,wr.jsxs)(No,{children:[(0,wr.jsx)(lo,{to:"/join",children:"Join Bright Sparks Today"}),(0,wr.jsx)(so,{to:"/contact",children:"Have Questions?"})]})]}),(0,wr.jsx)(Ro,{})]}),no=vr.div`
  font-family: 'Inter', sans-serif;
  color: #000;
`,ro=vr.section`
  background: #fffbea;
  text-align: center;
  padding: 4rem 2rem;
`,ao=vr.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`,oo=vr.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
`,io=vr.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,lo=vr(Ee)`
  background: #000;
  color: #ffd900;
  padding: 12px 24px;
  border-radius: 9999px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`,so=vr.a`
  border: 2px solid #000;
  color: #000;
  padding: 12px 24px;
  border-radius: 9999px;
  text-decoration: none;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`,uo=vr.section`
  padding: 4rem 2rem;
`,co=vr.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`,fo=vr.section`
  background: #f7f3e8;
  padding: 4rem 2rem;
`,po=vr.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
`,ho=vr.div`
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  max-width: 240px;
  text-align: center;
  animation: ${eo} 0.6s ease-out forwards;
`,mo=vr.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`,go=vr.h4`
  font-size: 1.125rem;
  margin-bottom: 1rem;
`,vo=vr.ul`
  list-style: disc inside;
  text-align: left;
`,yo=vr.section`
  padding: 4rem 2rem;
`,bo=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  gap: 2rem;
`,xo=vr.div`
  background: #fff;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  animation: ${eo} 0.6s ease-out forwards;
`,wo=vr.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`,ko=vr.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`,So=vr.p`
  font-size: 0.9rem;
`,jo=vr.section`
  background: #fffbea;
  padding: 4rem 2rem;
`,Eo=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap: 2rem;
`,Co=vr.div`
  background: #fff;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  animation: ${eo} 0.6s ease-out forwards;
`,_o=vr.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`,Po=vr.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`,zo=vr.p`
  font-size: 0.9rem;
`,To=vr.section`
  text-align: center;
  padding: 4rem 2rem;
`,Oo=vr.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`,No=vr.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,Ro=vr.footer`
  padding: 2rem;
`,Lo=()=>{const[e,n]=(0,t.useState)(!1);return(0,wr.jsxs)(Do,{children:[(0,wr.jsxs)(Fo,{children:[(0,wr.jsx)(Ao,{children:"Let\u2019s Connect"}),(0,wr.jsx)(Mo,{children:"Got questions? We\u2019re here to help. Reach out and we\u2019ll get back to you ASAP."}),(0,wr.jsx)(Wo,{href:"mailto:reach@brightsparks.academy",children:"You can also email us directly at reach@brightsparks.academy"})]}),(0,wr.jsxs)(Bo,{children:[(0,wr.jsx)(Uo,{children:"Send Us a Message"}),e?(0,wr.jsx)(Yo,{children:"Thanks! We\u2019ll be in touch shortly."}):(0,wr.jsxs)($o,{onSubmit:e=>{e.preventDefault(),n(!0)},children:[(0,wr.jsx)(Ho,{type:"text",name:"name",placeholder:"Full Name",required:!0}),(0,wr.jsx)(Ho,{type:"email",name:"email",placeholder:"Email Address",required:!0}),(0,wr.jsx)(Ho,{type:"text",name:"subject",placeholder:"Subject",required:!0}),(0,wr.jsx)(Vo,{name:"message",rows:"5",placeholder:"Message",required:!0}),(0,wr.jsx)(qo,{type:"submit",children:"Send Message"})]})]}),(0,wr.jsxs)(Ko,{children:[(0,wr.jsx)(Qo,{children:"Or Reach Us Directly"}),(0,wr.jsxs)(Go,{children:[(0,wr.jsxs)(Jo,{children:["\ud83d\udce7 ",(0,wr.jsx)("a",{href:"mailto:reach@brightsparks.academy",children:"reach@brightsparks.academy"})]}),(0,wr.jsx)(Jo,{children:"\ud83d\udccd Cupertino, CA (Virtual)"}),(0,wr.jsxs)(Jo,{children:["\ud83d\udcf2 ",(0,wr.jsx)("a",{href:"https://www.instagram.com/brightsparks.academy/",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})]}),(0,wr.jsxs)(Jo,{children:["\ud83d\udd17 ",(0,wr.jsx)("a",{href:"https://linkedin.com/company/bright-sparks-project",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})]})]})]}),(0,wr.jsxs)(Xo,{children:[(0,wr.jsx)(Qo,{children:"Looking for quick answers?"}),(0,wr.jsxs)(Zo,{children:["Check out our ",(0,wr.jsx)(Ee,{to:"/faq",children:"FAQ page"})," to get instant answers to our most asked questions."]})]}),(0,wr.jsx)(ei,{children:(0,wr.jsx)(ti,{children:"Whether you\u2019re a parent, student, teacher, or future partner \u2014 we\u2019d love to hear from you."})}),(0,wr.jsx)(ni,{})]})},Io=br`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,Do=vr.div`
  font-family: 'Inter', sans-serif;
  color: #000;
`,Fo=vr.section`
  text-align: center;
  padding: 4rem 2rem;
  background: #fffbea;
  animation: ${Io} 0.6s ease-out;
`,Ao=vr.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`,Mo=vr.p`
  font-size: 1.125rem;
  margin-bottom: 1rem;
`,Wo=vr.a`
  color: #000;
  text-decoration: underline;
  font-size: 1rem;
`,Bo=vr.section`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
`,Uo=vr.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,$o=vr.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Ho=vr.input`
  padding: 0.75rem 1rem;
  border: 2px solid #000;
  border-radius: 0.75rem;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #ffd900;
    box-shadow: 0 0 0 3px rgba(255,217,0,0.3);
  }
`,Vo=vr.textarea`
  padding: 0.75rem 1rem;
  border: 2px solid #000;
  border-radius: 0.75rem;
  font-size: 1rem;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #ffd900;
    box-shadow: 0 0 0 3px rgba(255,217,0,0.3);
  }
`,qo=vr.button`
  background: #000;
  color: #ffd900;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`,Yo=vr.p`
  text-align: center;
  font-size: 1.125rem;
  color: #228B22;
`,Ko=vr.section`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
`,Qo=vr.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  text-align: center;
`,Go=vr.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`,Jo=vr.li`
  font-size: 1rem;
  margin-bottom: 0.75rem;
  a {
    color: #000;
    text-decoration: underline;
  }
`,Xo=vr.section`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
`,Zo=vr.p`
  font-size: 1rem;
  a {
    color: #000;
    text-decoration: underline;
    font-weight: bold;
  }
`,ei=vr.section`
  padding: 2rem;
  text-align: center;
`,ti=vr.p`
  font-size: 1.125rem;
`,ni=vr.footer`
  padding: 2rem;
`,ri=br`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,ai=()=>(0,wr.jsxs)(oi,{children:[(0,wr.jsxs)(ii,{children:[(0,wr.jsx)(li,{}),(0,wr.jsxs)(si,{children:[(0,wr.jsx)(ui,{children:"Real Results. Global Impact."}),(0,wr.jsx)(ci,{children:"From the Bay Area to Nigeria, Bright Sparks is shaping brighter futures through education, one act at a time."}),(0,wr.jsx)(di,{to:"/donate",children:"Support Our Work"})]})]}),(0,wr.jsx)(fi,{children:[{stat:"25 Textbooks Donated",caption:"To schoolchildren in Nigeria",icon:"\ud83d\udcda"},{stat:"20 Reading Lights Shipped",caption:"To low-income families",icon:"\ud83d\udca1"},{stat:"Students in 5 Countries",caption:"",icon:"\ud83c\udf0d"},{stat:"2,000+ Tutoring Hours",caption:"Delivered worldwide",icon:"\ud83e\udde0"},{stat:"50+ Trained Volunteers",caption:"",icon:"\ud83e\udd1d"},{stat:"100% Improved Confidence",caption:"Student self-reports",icon:"\ud83c\udf93"}].map(((e,t)=>(0,wr.jsxs)(pi,{style:{animationDelay:.1*t+"s"},children:[(0,wr.jsx)(hi,{children:e.icon}),(0,wr.jsx)(mi,{children:e.stat}),(0,wr.jsx)(gi,{children:e.caption})]},t)))}),(0,wr.jsxs)(vi,{children:[(0,wr.jsx)(yi,{children:"Stories That Matter"}),(0,wr.jsx)(bi,{children:[{name:"Amina S., Kenya",quote:"Bright Sparks gave my community access to books we never had."},{name:"David L., CA",quote:"The tutoring sessions boosted my son\u2019s confidence and grades."}].map(((e,t)=>(0,wr.jsxs)(xi,{style:{animationDelay:.2*t+"s"},children:[(0,wr.jsxs)(wi,{children:["\u201c",e.quote,"\u201d"]}),(0,wr.jsx)(ki,{children:e.name})]},t)))})]}),(0,wr.jsx)(Si,{children:(0,wr.jsx)(yi,{children:"See Our Work in Action"})}),(0,wr.jsxs)(ji,{children:[(0,wr.jsx)(Ei,{children:"Want to Help Us Make an Even Bigger Impact?"}),(0,wr.jsx)(di,{to:"/join",children:"Become a Volunteer"}),(0,wr.jsx)(Ci,{to:"/contact",children:"Contact Us to Support"})]}),(0,wr.jsx)(_i,{})]}),oi=vr.div`
  font-family: 'Inter', sans-serif;
  color: #000;
`,ii=vr.section`
  position: relative;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,li=vr.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 217, 0, 0.15);
`,si=vr.div`
  position: relative;
  text-align: center;
  max-width: 800px;
  animation: ${ri} 0.6s ease-out;
`,ui=vr.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`,ci=vr.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`,di=vr(Ee)`
  background: #000;
  color: #ffd900;
  padding: 12px 24px;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1rem;
  display: inline-block;
  &:hover {
    opacity: 0.8;
  }
`,fi=vr.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
`,pi=vr.div`
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  animation: ${ri} 0.6s ease-out forwards;
`,hi=vr.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`,mi=vr.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`,gi=vr.p`
  font-size: 1rem;
`,vi=vr.section`
  background: #f9f7f0;
  padding: 4rem 2rem;
  text-align: center;
`,yi=vr.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`,bi=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,xi=vr.div`
  background: #fffbea;
  border-radius: 1rem;
  padding: 1.5rem;
  animation: ${ri} 0.6s ease-out forwards;
`,wi=vr.p`
  font-style: italic;
  margin-bottom: 1rem;
`,ki=vr.p`
  font-weight: bold;
`,Si=vr.section`
  padding: 4rem 2rem;
`,ji=vr.section`
  text-align: center;
  padding: 4rem 2rem;
`,Ei=vr.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,Ci=vr(Ee)`
  margin-left: 1rem;
  background: transparent;
  border: 2px solid #000;
  color: #000;
  padding: 12px 24px;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    background: rgba(0,0,0,0.05);
  }
`,_i=vr.footer`
  /* Footer styling placeholder */
  padding: 2rem;
`,Pi=br`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,zi=()=>(0,wr.jsxs)(Ti,{children:[(0,wr.jsx)(Oi,{children:(0,wr.jsxs)(Ni,{children:[(0,wr.jsx)(Ri,{children:"Make a Difference. Grow Your Skills. Join Our Team."}),(0,wr.jsx)(Li,{children:"Whether you\u2019re a student, educator, or aspiring leader, Bright Sparks offers real impact, real growth, and real connection\u2014all while empowering the next generation."}),(0,wr.jsxs)(Ii,{children:[(0,wr.jsx)(Di,{href:"#apply-form",children:"Apply to Volunteer"}),(0,wr.jsx)(Fi,{href:"#why-join",children:"Why Volunteer With Us"})]})]})}),(0,wr.jsxs)(Ai,{id:"why-join",children:[(0,wr.jsx)(Mi,{children:"Why Volunteer or Intern With Bright Sparks?"}),(0,wr.jsx)(Wi,{children:[{title:"Make a Real Impact",desc:"Help young students learn and grow\u2014your time changes lives."},{title:"Flexible Commitment",desc:"Choose your own schedule. We work around you."},{title:"Build Resume & Skills",desc:"Stand out on college apps with leadership, communication, and teaching skills."},{title:"Leadership Pathways",desc:"Grow within our nonprofit. Lead workshops, mentor others, or manage chapters."}].map(((e,t)=>(0,wr.jsxs)(Bi,{style:{animationDelay:.2*t+"s"},children:[(0,wr.jsx)(Ui,{children:"\u2605"}),(0,wr.jsx)($i,{children:e.title}),(0,wr.jsx)(Hi,{children:e.desc})]},t)))})]}),(0,wr.jsxs)(Vi,{children:[(0,wr.jsx)(Mi,{children:"Explore Opportunities"}),(0,wr.jsx)(qi,{children:[{role:"Tutor",desc:"1-on-1 sessions in Math, English, CS, or Science",time:"2\u20134 hrs/week"},{role:"Workshop Leader",desc:"Host group lessons or topic-specific sessions",time:"3\u20135 hrs/week"},{role:"Operations Intern",desc:"Support backend processes, outreach, or event planning",time:"2\u20133 hrs/week"},{role:"Marketing & Content Intern",desc:"Create posts, write blogs, or promote campaigns",time:"2\u20134 hrs/week"}].map(((e,t)=>(0,wr.jsxs)(Yi,{children:[(0,wr.jsx)(Ki,{children:e.role}),(0,wr.jsx)(Qi,{children:e.desc}),(0,wr.jsx)(Gi,{children:e.time})]},t)))})]}),(0,wr.jsxs)(Ji,{id:"apply-form",children:[(0,wr.jsx)(Mi,{children:"Apply Now"}),(0,wr.jsx)(Xi,{children:(0,wr.jsx)(Zi,{src:"https://tally.so/embed/n0BGxN?alignLeft=1&hideTitle=1&transparentBackground=1",width:"100%",height:"800",frameBorder:"0",marginHeight:"0",marginWidth:"0",title:"Volunteer Application Form"})}),(0,wr.jsx)(el,{children:"Questions? Email us at reach@brightsparks.academy or DM us on Instagram @brightsparks.academy"}),(0,wr.jsx)(tl,{href:"https://tally.so/r/n0BGxN",target:"_blank",children:"Having trouble with the form? Click here to open it in a new tab \u2192"}),(0,wr.jsx)(nl,{href:"https://nimaigarg.craft.me/brightsparks-academy-positions",target:"_blank",children:"View All Positions"})]}),(0,wr.jsxs)(rl,{children:[(0,wr.jsx)(Mi,{children:"What Our Volunteers Say"}),(0,wr.jsx)(al,{children:[{name:"Alex P.",role:"Tutor",quote:"Volunteering here sharpened my leadership skills and boosted my confidence."},{name:"Jordan R.",role:"Workshop Leader",quote:"I loved the flexibility and the real impact I made."}].map(((e,t)=>(0,wr.jsxs)(ol,{style:{animationDelay:.2*t+"s"},children:[(0,wr.jsxs)(il,{children:["\u201c",e.quote,"\u201d"]}),(0,wr.jsxs)(ll,{children:[e.name," \u2013 ",e.role]})]},t)))})]}),(0,wr.jsxs)(sl,{children:[(0,wr.jsx)(ul,{children:"You have the power to change lives\u2014starting today."}),(0,wr.jsx)(Di,{href:"#apply-form",children:"Become a Volunteer"})]})]}),Ti=vr.div`
  font-family: 'Inter', sans-serif;
  color: #000;
`,Oi=vr.section`
  background: #fffbea;
  padding: 4rem 2rem;
  text-align: center;
  animation: ${Pi} 0.6s ease-out;
`,Ni=vr.div`
  max-width: 800px;
  margin: 0 auto;
`,Ri=vr.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`,Li=vr.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`,Ii=vr.div`
  display: inline-flex;
  gap: 1rem;
  flex-wrap: wrap;
`,Di=vr.a`
  background: #000;
  color: #ffd900;
  padding: 12px 24px;
  border-radius: 9999px;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
`,Fi=vr.a`
  border: 2px solid #000;
  color: #000;
  padding: 12px 24px;
  border-radius: 9999px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
`,Ai=vr.section`
  padding: 4rem 2rem;
  background: #ffffff;
`,Mi=vr.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`,Wi=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`,Bi=vr.div`
  text-align: center;
  padding: 2rem;
  border-radius: 1rem;
  animation: ${Pi} 0.6s ease-out forwards;
`,Ui=vr.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffd900;
`,$i=vr.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`,Hi=vr.p`
  font-size: 1rem;
`,Vi=vr.section`
  padding: 4rem 2rem;
  background: #f7f3e8;
`,qi=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
`,Yi=vr.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
`,Ki=vr.h4`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`,Qi=vr.p`
  font-size: 1rem;
`,Gi=vr.p`
  font-size: 0.875rem;
  margin-top: 1rem;
  font-style: italic;
`,Ji=vr.section`
  padding: 4rem 2rem;
  background: #ffffff;
  text-align: center;
`,Xi=vr.div`
  max-width: 800px;
  margin: 0 auto;
  background: #fffbea;
  border-radius: 1rem;
  padding: 2rem;
`,Zi=vr.iframe`
  width: 100%;
  border: none;
  border-radius: 0.5rem;
`,el=vr.p`
  margin-top: 1rem;
  font-size: 0.875rem;
`,tl=vr.a`
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #000;
  text-decoration: underline;
`,nl=vr.a`
  display: inline-block;
  margin-top: 1rem;
  background: #ffd900;
  color: #000;
  padding: 10px 20px;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
`,rl=vr.section`
  padding: 4rem 2rem;
  background: #ffffff;
`,al=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  gap: 2rem;
`,ol=vr.div`
  background: #fffbea;
  padding: 1.5rem;
  border-radius: 1rem;
  animation: ${Pi} 0.6s ease-out forwards;
`,il=vr.p`
  font-style: italic;
  margin-bottom: 1rem;
`,ll=vr.p`
  font-weight: bold;
  font-size: 0.875rem;
`,sl=vr.section`
  padding: 4rem 2rem;
  background: #f7f3e8;
  text-align: center;
`,ul=vr.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,cl=br`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,dl=()=>(0,wr.jsxs)(fl,{children:[(0,wr.jsxs)(pl,{children:[(0,wr.jsx)(hl,{}),(0,wr.jsxs)(ml,{children:[(0,wr.jsx)(gl,{children:"Introducing Project Codara \u2013 Bright Sparks for Coding"}),(0,wr.jsx)(vl,{children:"Free, personalized computer science tutoring built to spark a passion for programming\u2014powered by Bright Sparks Academy."}),(0,wr.jsxs)(yl,{children:[(0,wr.jsx)(bl,{href:"#signup-form",children:"Join Codara Today"}),(0,wr.jsx)(xl,{href:"#how-it-works",children:"See How It Works"})]})]})]}),(0,wr.jsxs)(wl,{id:"about-codara",children:[(0,wr.jsx)(kl,{children:"What is Project Codara?"}),(0,wr.jsxs)(Sl,{children:[(0,wr.jsxs)(jl,{children:[(0,wr.jsx)(El,{children:"Project Codara is a partnership program under Bright Sparks Academy that delivers the exact same tutoring experience\u20141-on-1, virtual, flexible, and free\u2014but entirely focused on programming and digital skills."}),(0,wr.jsxs)(Cl,{children:[(0,wr.jsx)("li",{children:"Python"}),(0,wr.jsx)("li",{children:"Scratch"}),(0,wr.jsx)("li",{children:"Web Development"}),(0,wr.jsx)("li",{children:"Logical Thinking"}),(0,wr.jsx)("li",{children:"AI & Tech Concepts"})]})]}),(0,wr.jsx)(_l,{})]})]}),(0,wr.jsxs)(Pl,{id:"how-it-works",children:[(0,wr.jsx)(kl,{children:"How It Works"}),(0,wr.jsx)(zl,{children:[{step:"1",title:"Sign Up with Your Child\u2019s Info",desc:"Complete a brief sign-up form."},{step:"2",title:"Get Matched with a Coding Tutor",desc:"We pair you with an expert tutor."},{step:"3",title:"Begin Weekly Sessions Online",desc:"Start learning and building projects."}].map(((e,t)=>(0,wr.jsxs)(Tl,{style:{animationDelay:.2*t+"s"},children:[(0,wr.jsx)(Ol,{children:e.step}),(0,wr.jsx)(Nl,{children:e.title}),(0,wr.jsx)(Rl,{children:e.desc})]},t)))})]}),(0,wr.jsxs)(Ll,{children:[(0,wr.jsx)(kl,{children:"What Will Students Learn?"}),(0,wr.jsx)(Il,{children:[{tier:"Beginner (Ages 8\u201312)",topics:"Scratch, Basic Logic, Sequencing, Intro to Python"},{tier:"Intermediate (Ages 12\u201315)",topics:"Python, HTML/CSS, Game Dev, Loops, Conditionals, Events"},{tier:"Advanced (Ages 15\u201318)",topics:"Web Dev (JS), APIs, GitHub Basics, Real-World Projects"}].map(((e,t)=>(0,wr.jsxs)(Dl,{style:{animationDelay:.2*t+"s"},children:[(0,wr.jsx)(Fl,{children:e.tier}),(0,wr.jsx)(Al,{children:e.topics})]},t)))})]}),(0,wr.jsxs)(Ml,{children:[(0,wr.jsx)(kl,{children:"What Families Say"}),(0,wr.jsx)(Wl,{children:[{quote:"My child built their first game in Python within a month!",author:"Priya S., Parent"},{quote:"Codara tutors are knowledgeable and make coding fun.",author:"Alex M., Student"}].map(((e,t)=>(0,wr.jsxs)(Bl,{style:{animationDelay:.2*t+"s"},children:[(0,wr.jsxs)(Ul,{children:["\u201c",e.quote,"\u201d"]}),(0,wr.jsx)($l,{children:e.author})]},t)))})]}),(0,wr.jsxs)(Hl,{id:"signup-form",children:[(0,wr.jsx)(kl,{children:"Ready to Join Project Codara?"}),(0,wr.jsx)(Vl,{children:(0,wr.jsx)(ql,{src:"https://tally.so/embed/YOUR_CODARA_FORM_ID?transparentBackground=1&hideTitle=1",width:"100%",height:"700",frameBorder:"0",title:"Project Codara Signup Form"})}),(0,wr.jsx)(Yl,{children:"Need help or want to ask questions first? Email us at info@brightsparks.academy."}),(0,wr.jsx)(Kl,{href:"https://tally.so/r/YOUR_CODARA_FORM_ID",target:"_blank",children:"If you can\u2019t see the form, click here to open it in a new tab \u2192"})]}),(0,wr.jsxs)(Ql,{children:[(0,wr.jsx)(Gl,{children:"The next generation of coders starts here."}),(0,wr.jsx)(bl,{href:"#signup-form",children:"Join Codara Now"}),(0,wr.jsx)(xl,{href:"/internships",children:"Become a Coding Tutor"})]}),(0,wr.jsx)(Jl,{})]}),fl=vr.div`
  font-family: 'Inter', sans-serif;
  color: #000;
`,pl=vr.section`
  position: relative;
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,hl=vr.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 217, 0, 0.15);
`,ml=vr.div`
  position: relative;
  text-align: center;
  max-width: 800px;
  animation: ${cl} 0.6s ease-out;
`,gl=vr.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`,vl=vr.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
`,yl=vr.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,bl=vr.a`
  background: #000;
  color: #ffd900;
  padding: 12px 24px;
  border-radius: 9999px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`,xl=vr.a`
  border: 2px solid #000;
  color: #000;
  padding: 12px 24px;
  border-radius: 9999px;
  text-decoration: none;
  &:hover {
    background: rgba(0,0,0,0.05);
  }
`,wl=vr.section`
  padding: 4rem 2rem;
`,kl=vr.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`,Sl=vr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
`,jl=vr.div`
  flex: 1;
  min-width: 280px;
`,El=vr.p`
  line-height: 1.6;
  margin-bottom: 1rem;
`,Cl=vr.ul`
  list-style: disc inside;
`,_l=vr.div`
  flex: 1;
  text-align: center;
`,Pl=vr.section`
  background: #f7f3e8;
  padding: 4rem 2rem;
`,zl=vr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`,Tl=vr.div`
  background: #fff;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  max-width: 240px;
  animation: ${cl} 0.6s ease-out forwards;
`,Ol=vr.div`
  background: #ffd900;
  color: #000;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 0 auto 0.5rem;
`,Nl=vr.h3`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`,Rl=vr.p`
  font-size: 0.9rem;
`,Ll=vr.section`
  padding: 4rem 2rem;
`,Il=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
`,Dl=vr.div`
  background: #fffbea;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  animation: ${cl} 0.6s ease-out forwards;
`,Fl=vr.h3`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`,Al=vr.p`
  font-size: 0.9rem;
  line-height: 1.4;
`,Ml=vr.section`
  padding: 4rem 2rem;
  text-align: center;
`,Wl=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,Bl=vr.div`
  background: #fff;
  border-radius: 1rem;
  padding: 1.5rem;
  animation: ${cl} 0.6s ease-out forwards;
`,Ul=vr.p`
  font-style: italic;
  margin-bottom: 0.5rem;
`,$l=vr.p`
  font-weight: bold;
`,Hl=vr.section`
  background: #ffffff;
  padding: 4rem 2rem;
  text-align: center;
`,Vl=vr.div`
  max-width: 700px;
  margin: 0 auto;
`,ql=vr.iframe`
  width: 100%;
  height: 700px;
  border: none;
  border-radius: 0.75rem;
`,Yl=vr.p`
  margin-top: 1rem;
  font-size: 0.875rem;
`,Kl=vr.a`
  display: block;
  margin-top: 0.5rem;
  color: #000;
  text-decoration: underline;
`,Ql=vr.section`
  padding: 4rem 2rem;
  text-align: center;
`,Gl=vr.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`,Jl=vr.footer`
  /* footer placeholder */
  padding: 2rem;
`,Xl=()=>{const[e,n]=(0,t.useState)(null);return(0,wr.jsxs)(Zl,{children:[(0,wr.jsxs)(es,{children:[(0,wr.jsx)(ts,{children:"Join Today to Get More"}),(0,wr.jsx)(ns,{children:"Be part of a personalized education revolution. We\u2019re here to empower your child\u2014completely free."}),(0,wr.jsxs)(rs,{children:[(0,wr.jsx)(as,{href:"#enroll-form",children:"Join Now"}),(0,wr.jsx)(os,{href:"#how-it-works",children:"Learn How It Works"})]})]}),(0,wr.jsxs)(is,{id:"how-it-works",children:[(0,wr.jsx)(ls,{children:"Here\u2019s How You Can Get Started"}),(0,wr.jsxs)(ss,{children:[(0,wr.jsxs)(us,{children:[(0,wr.jsx)(cs,{children:"1"}),(0,wr.jsx)(ds,{children:"Fill Out the Form"}),(0,wr.jsx)(fs,{children:"Share your child\u2019s grade, subjects, and availability."})]}),(0,wr.jsxs)(us,{children:[(0,wr.jsx)(cs,{children:"2"}),(0,wr.jsx)(ds,{children:"Get Matched With a Tutor"}),(0,wr.jsx)(fs,{children:"We carefully pair based on skills and fit."})]}),(0,wr.jsxs)(us,{children:[(0,wr.jsx)(cs,{children:"3"}),(0,wr.jsx)(ds,{children:"Start Learning"}),(0,wr.jsx)(fs,{children:"Sessions begin with regular updates to you."})]})]}),(0,wr.jsx)(ps,{children:"It only takes 5 minutes to join. No payments. No commitments."})]}),(0,wr.jsxs)(hs,{id:"enroll-form",children:[(0,wr.jsx)(ls,{children:"Enroll in Under 5 Minutes"}),(0,wr.jsx)(ms,{children:(0,wr.jsx)(gs,{src:"https://tally.so/embed/mO4r8A?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",width:"100%",height:"600",frameBorder:"0",marginHeight:"0",marginWidth:"0",title:"Bright Sparks Enrollment Form"})}),(0,wr.jsx)(vs,{children:"Having trouble or questions? Contact us at reach@brightsparks.academy or (650) 272-7186 for support."})]}),(0,wr.jsxs)(ys,{children:[(0,wr.jsx)(ls,{children:"Still Have Questions?"}),[{q:"Is this really free?",a:"Yes\u2014our services are 100% free for all families."},{q:"How are tutors selected?",a:"All tutors are vetted, trained, and background-checked."},{q:"Can I cancel or stop anytime?",a:"Absolutely\u2014no commitments or fees."},{q:"What if my child\u2019s schedule changes?",a:"You can update your availability at any time."}].map(((t,r)=>(0,wr.jsxs)(bs,{children:[(0,wr.jsxs)(xs,{onClick:()=>(t=>{n(e===t?null:t)})(r),children:[t.q,(0,wr.jsx)(ws,{open:e===r,children:"\u203a"})]}),e===r&&(0,wr.jsx)(ks,{children:t.a})]},r)))]}),(0,wr.jsxs)(Ss,{children:[(0,wr.jsx)(js,{children:"Ready to give your child the boost they deserve?"}),(0,wr.jsx)(as,{href:"#enroll-form",children:"Start Now \u2014 It\u2019s Free"})]})]})},Zl=vr.div`
  font-family: 'Inter', sans-serif;
  color: #000;
  background-color: #fffbea;
`,es=vr.section`
  text-align: center;
  padding: 4rem 2rem;
  background: #fffbea;
`,ts=vr.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`,ns=vr.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
`,rs=vr.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`,as=vr.a`
  background: #000;
  color: #ffd900;
  padding: 12px 24px;
  border-radius: 9999px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`,os=vr.a`
  border: 2px solid #000;
  color: #000;
  padding: 12px 24px;
  border-radius: 9999px;
  text-decoration: none;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`,is=vr.section`
  padding: 4rem 2rem;
  background: #ffffff;
  text-align: center;
`,ls=vr.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`,ss=vr.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`,us=vr.div`
  max-width: 250px;
  text-align: center;
`,cs=vr.div`
  background: #ffd900;
  color: #000;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 0 auto 1rem;
`,ds=vr.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`,fs=vr.p`
  font-size: 1rem;
`,ps=vr.p`
  margin-top: 1.5rem;
  font-style: italic;
`,hs=vr.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #f7f3e8;
`,ms=vr.div`
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
`,gs=vr.iframe`
  width: 100%;
  border: none;
  border-radius: 0.5rem;
`,vs=vr.p`
  margin-top: 1rem;
  font-size: 0.875rem;
`,ys=vr.section`
  padding: 4rem 2rem;
  background: transparent;
  max-width: 800px;
  margin: 0 auto;
`,bs=vr.div`
  margin-bottom: 1rem;
  border-radius: 0.75rem;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`,xs=vr.div`
  padding: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fffbea;
`,ws=vr.span`
  font-size: 1.25rem;
  transition: transform 0.3s ease;
  transform: rotate(${e=>e.open?"90deg":"0deg"});
`,ks=vr.div`
  padding: 1rem;
  font-size: 1rem;
  border-top: 1px solid #eee;
  background: #fff;
`,Ss=vr.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #fffbea;
`,js=vr.p`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`,Es=()=>{const[e,n]=(0,t.useState)("parents"),[r,a]=(0,t.useState)({parents:null,volunteers:null,general:null});return(0,wr.jsxs)(_s,{children:[(0,wr.jsxs)(Ps,{children:[(0,wr.jsx)(zs,{children:"Frequently Asked Questions"}),(0,wr.jsx)(Ts,{children:"We\u2019ve got answers for students, families, and volunteers."})]}),(0,wr.jsxs)(Os,{children:[(0,wr.jsx)(Ns,{active:"parents"===e,onClick:()=>n("parents"),children:"\ud83c\udfe0 For Parents"}),(0,wr.jsx)(Ns,{active:"volunteers"===e,onClick:()=>n("volunteers"),children:"\ud83e\uddd1\u200d\ud83c\udfeb For Volunteers"}),(0,wr.jsx)(Ns,{active:"general"===e,onClick:()=>n("general"),children:"\ud83c\udf0d General"})]}),(0,wr.jsx)(Rs,{children:{parents:[{q:"Is Bright Sparks really free?",a:"Yes! Bright Sparks Academy is 100% nonprofit. Our tutors are volunteers who want to make a difference. You\u2019ll never be charged."},{q:"How do I sign my child up?",a:"Simply go to the Join page, fill out the Tally.so form, and we\u2019ll match your child with a tutor within a few days."},{q:"What subjects do you offer?",a:"We offer Math, English, Science, Computer Science, Public Speaking, and more. View the full list on our Programs page."},{q:"How often are sessions held?",a:"You choose! Weekly, biweekly, or flexible. We work around your family\u2019s schedule."},{q:"Are the tutors trained?",a:"Yes! All volunteers go through an onboarding process and receive guidance throughout their time with Bright Sparks."}],volunteers:[{q:"Who can volunteer with Bright Sparks?",a:"Anyone in high school, college, or beyond with a passion for helping others. We welcome tutors from all over the world."},{q:"What is the time commitment?",a:"As little as 1 hour per week. You can choose your schedule and availability."},{q:"Do I need teaching experience?",a:"Nope! We provide resources and onboarding. All we ask is that you\u2019re committed, respectful, and enthusiastic."},{q:"Can I get volunteer hours or a certificate?",a:"Yes! We track your hours and can provide a certificate or letter of recommendation upon request."},{q:"How do I apply?",a:"Head over to the Volunteer Page and fill out the embedded Tally.so form to get started."}],general:[{q:"Where is Bright Sparks based?",a:"We\u2019re based in Cupertino, CA\u2014but we serve students and train volunteers globally."},{q:"How do I contact someone at Bright Sparks?",a:"You can reach us anytime through our Contact Page or email us at hello@brightsparks.org."},{q:"What is Bright Sparks Connect?",a:"Our very own video conferencing tool, designed just for tutoring. Learn more on the Connect page."},{q:"How was Bright Sparks started?",a:"It was founded by students with a vision to make education accessible for all. Read our story on the Origin Page."}]}[e].map(((t,n)=>(0,wr.jsxs)(Ls,{children:[(0,wr.jsxs)(Is,{onClick:()=>{return t=n,void a((n=>({...n,[e]:n[e]===t?null:t})));var t},children:[t.q,(0,wr.jsx)(Ds,{open:r[e]===n,children:"\u203a"})]}),r[e]===n&&(0,wr.jsx)(Fs,{children:t.a})]},n)))}),(0,wr.jsxs)(As,{children:[(0,wr.jsx)(Ms,{children:"Still Have Questions?"}),(0,wr.jsx)(Ws,{children:"We\u2019re here to help. Contact us anytime and we\u2019ll get back to you within 24 hours."}),(0,wr.jsxs)(Bs,{children:[(0,wr.jsx)(Us,{as:Ee,to:"/contact",children:"Contact Us"}),(0,wr.jsx)(Us,{as:Ee,to:"/join",children:"Join Bright Sparks"})]})]}),(0,wr.jsx)($s,{})]})},Cs=br`
  from { opacity: 0; }
  to { opacity: 1; }
`,_s=vr.div`
  font-family: 'Inter', sans-serif;
  color: #000;
  animation: ${Cs} 0.5s ease-in;
`,Ps=vr.section`
  text-align: center;
  padding: 4rem 2rem;
  background: #fffbea;
`,zs=vr.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`,Ts=vr.p`
  font-size: 1rem;
`,Os=vr.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  position: sticky;
  top: 0;
  background: #fff;
  padding: 1rem 0;
  z-index: 100;
  border-bottom: 1px solid #eee;
`,Ns=vr.button`
  background: ${e=>{let{active:t}=e;return t?"#ffd900":"transparent"}};
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background: rgba(255,217,0,0.3);
  }
`,Rs=vr.section`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`,Ls=vr.div`
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
`,Is=vr.div`
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ds=vr.span`
  display: inline-block;
  transform: rotate(${e=>{let{open:t}=e;return t?"90deg":"0deg"}});
  transition: transform 0.3s ease;
`,Fs=vr.p`
  margin-top: 0.5rem;
  line-height: 1.5;
`,As=vr.section`
  text-align: center;
  padding: 4rem 2rem;
`,Ms=vr.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`,Ws=vr.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
`,Bs=vr.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`,Us=vr(Ee)`
  background: #000;
  color: #ffd900;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`,$s=vr.footer`
  padding: 2rem;
  text-align: center;
`,Hs=br`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,Vs=()=>(0,wr.jsxs)(qs,{children:[(0,wr.jsxs)(Ys,{children:[(0,wr.jsx)(Ks,{}),(0,wr.jsxs)(Qs,{children:[(0,wr.jsx)(Gs,{children:"Our Story, Our Mission"}),(0,wr.jsx)(Js,{children:"We\u2019re not just teaching\u2014we\u2019re reimagining what education can be."}),(0,wr.jsx)(Xs,{as:Ee,to:"#leadership",children:"Meet the Team"})]})]}),(0,wr.jsxs)(eu,{children:[(0,wr.jsx)(Zs,{children:"Our Origin Story"}),(0,wr.jsx)(tu,{children:(0,wr.jsxs)(nu,{children:[(0,wr.jsxs)(ru,{children:[(0,wr.jsx)("strong",{children:"Bright Sparks Academy"})," was founded on a simple belief: education should be personal, accessible, and free. Born during a time when so many students were falling behind, we knew something had to change. So we built it."]}),(0,wr.jsx)(ru,{children:"What started as a few tutors helping a handful of students has now become a global network of volunteers empowering learners around the world."}),(0,wr.jsxs)(ru,{children:["Founded by ",(0,wr.jsx)("strong",{children:"Nimai Garg"}),", a student driven by purpose."]})]})})]}),(0,wr.jsxs)(au,{children:[(0,wr.jsx)(Zs,{children:"What We Do"}),(0,wr.jsx)(ou,{as:Ee,to:"/programs",children:"See Our Programs \u2192"})]}),(0,wr.jsxs)(iu,{children:[(0,wr.jsx)(Zs,{children:"Who This Is For"}),(0,wr.jsxs)(lu,{children:[(0,wr.jsxs)(su,{children:[(0,wr.jsx)(uu,{children:"\ud83d\udcda"}),(0,wr.jsx)(cu,{children:"Students & Families"}),(0,wr.jsx)(du,{children:"K\u201312 students who want personalized help, flexible scheduling, and a supportive tutor."})]}),(0,wr.jsxs)(su,{children:[(0,wr.jsx)(uu,{children:"\ud83d\udc69\u200d\ud83c\udfeb"}),(0,wr.jsx)(cu,{children:"Interns & Volunteers"}),(0,wr.jsx)(du,{children:"High schoolers, college students, and mentors looking to make an impact and grow their skills."})]})]})]}),(0,wr.jsx)(fu,{id:"leadership",children:(0,wr.jsx)(Zs,{children:"Meet the Team"})}),(0,wr.jsxs)(pu,{children:[(0,wr.jsx)(Zs,{children:"Where We\u2019re Located"}),(0,wr.jsx)(hu,{children:[{stat:"Interns in 10+ cities",icon:"\ud83c\udf0e"},{stat:"Students in 4 countries",icon:"\ud83d\udcda"},{stat:"Volunteers from 25+ schools",icon:"\ud83e\uddd1\u200d\ud83c\udfeb"},{stat:"Programs running year-round",icon:"\ud83e\udde0"}].map(((e,t)=>(0,wr.jsxs)(mu,{style:{animationDelay:.1*t+"s"},children:[(0,wr.jsx)(gu,{children:e.icon}),(0,wr.jsx)(vu,{children:e.stat})]},t)))})]}),(0,wr.jsxs)(yu,{children:[(0,wr.jsx)(Zs,{children:"What We Stand For"}),(0,wr.jsx)(bu,{children:[{title:"Equity",desc:"Every child deserves a chance."},{title:"Empowerment",desc:"We teach confidence, not just content."},{title:"Access",desc:"No barriers. Ever."},{title:"Flexibility",desc:"Life happens. We adapt."},{title:"Community",desc:"We\u2019re stronger together."}].map(((e,t)=>(0,wr.jsxs)(xu,{style:{animationDelay:.1*t+"s"},children:[(0,wr.jsx)(wu,{children:e.title}),(0,wr.jsx)(ku,{children:e.desc})]},t)))})]}),(0,wr.jsxs)(Su,{children:[(0,wr.jsx)(Zs,{children:"Be Part of Our Story"}),(0,wr.jsx)(ju,{children:"Whether you\u2019re a student, a parent, or someone who wants to make a difference\u2014we want to hear from you."}),(0,wr.jsxs)(Eu,{children:[(0,wr.jsx)(Cu,{as:Ee,to:"/join",children:"Join as a Student"}),(0,wr.jsx)(Cu,{as:Ee,to:"/internships",children:"Volunteer with Us"}),(0,wr.jsx)(Cu,{as:Ee,to:"/donate",children:"Support Our Mission"})]})]})]}),qs=vr.div`
  font-family: 'Inter', sans-serif;
  color: #000;
`,Ys=vr.section`
  position: relative;
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ks=vr.div`
  position: absolute;
  inset: 0;
  background: rgba(255,217,0,0.15);
`,Qs=vr.div`
  position: relative;
  text-align: center;
  max-width: 800px;
  animation: ${Hs} 0.6s ease-out;
`,Gs=vr.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`,Js=vr.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
`,Xs=vr(Ee)`
  background: #000;
  color: #ffd900;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: bold;
  text-decoration: none;
`,Zs=vr.h2`
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0 1rem;
`,eu=vr.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
`,tu=vr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
`,nu=vr.div`
  flex: 1;
  min-width: 280px;
`,ru=vr.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`,au=vr.section`
  padding: 4rem 2rem;
  background: #fffbea;
`,ou=vr(Ee)`
  display: block;
  text-align: center;
  font-weight: bold;
  color: #000;
  text-decoration: none;
`,iu=vr.section`
  padding: 4rem 2rem;
`,lu=vr.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`,su=vr.div`
  background: #f9f7f0;
  border-radius: 1rem;
  padding: 1.5rem;
  flex: 1;
  min-width: 260px;
  text-align: center;
`,uu=vr.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`,cu=vr.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`,du=vr.p`
  font-size: 0.875rem;
`,fu=vr.section`
  padding: 4rem 2rem;
  background: #fffbea;
`,pu=vr.section`
  padding: 4rem 2rem;
`,hu=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px,1fr));
  gap: 1rem;
`,mu=vr.div`
  background: #fffbea;
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
  animation: ${Hs} 0.6s ease-out forwards;
`,gu=vr.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`,vu=vr.p`
  font-size: 0.875rem;
`,yu=vr.section`
  padding: 4rem 2rem;
  background: #f9f7f0;
`,bu=vr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(140px,1fr));
  gap: 1rem;
`,xu=vr.div`
  background: #fff;
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
  animation: ${Hs} 0.6s ease-out forwards;
`,wu=vr.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`,ku=vr.p`
  font-size: 0.875rem;
`,Su=vr.section`
  padding: 4rem 2rem;
`,ju=vr.p`
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: 1rem;
`,Eu=vr.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`,Cu=vr(Ee)`
  background: #000;
  color: #ffd900;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`,_u=br`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,Pu=()=>(0,wr.jsxs)(zu,{children:[(0,wr.jsxs)(Tu,{children:[(0,wr.jsx)(Ou,{}),(0,wr.jsxs)(Nu,{children:[(0,wr.jsx)(Ru,{children:"Introducing Bright Sparks Connect"}),(0,wr.jsx)(Lu,{children:"A safe, smart, and beautifully simple video platform built just for our students, tutors, and families."}),(0,wr.jsxs)(Iu,{children:[(0,wr.jsx)(Du,{href:"https://www.connect.brightsparks.academy",target:"_blank",children:"See the Platform"}),(0,wr.jsx)(Fu,{href:"/join",children:"Join a Session"})]})]})]}),(0,wr.jsxs)(Au,{children:[(0,wr.jsx)(Mu,{children:"What is Bright Sparks Connect?"}),(0,wr.jsxs)(Wu,{children:[(0,wr.jsxs)(Bu,{children:[(0,wr.jsx)(Uu,{children:"We built Bright Sparks Connect because generic tools weren\u2019t built for education. Our platform is secure, distraction-free, and designed specifically for 1-on-1 tutoring."}),(0,wr.jsxs)($u,{children:[(0,wr.jsx)("li",{children:"Designed for Learning \u2013 Minimal distractions, smooth whiteboard, simple UI"}),(0,wr.jsx)("li",{children:"Safe & Private \u2013 Encrypted, no recordings, no ads, no unknown users"}),(0,wr.jsx)("li",{children:"Built-In Scheduling \u2013 Tutors and students connect seamlessly with auto-reminders"})]})]}),(0,wr.jsx)(Hu,{})]})]}),(0,wr.jsx)(Vu,{id:"features",children:(0,wr.jsx)(Mu,{children:"What Makes It Unique"})}),(0,wr.jsxs)(qu,{children:[(0,wr.jsx)(Mu,{children:"How It Works"}),(0,wr.jsx)(Yu,{children:[{title:"Parents",desc:"Schedule sessions, receive reminders, and track progress."},{title:"Students",desc:"Just click \u201cJoin\u201d and start learning\u2014no downloads needed."},{title:"Tutors",desc:"Your schedule, materials, and tools all in one place."}].map(((e,t)=>(0,wr.jsxs)(Ku,{style:{animationDelay:.1*t+"s"},children:[(0,wr.jsx)(Qu,{children:e.title}),(0,wr.jsx)(Gu,{children:e.desc}),(0,wr.jsx)(Ju,{to:"Parents"===e.title||"Students"===e.title?"/join":"/internships",children:"Join Today"})]},t)))})]}),(0,wr.jsxs)(Xu,{children:[(0,wr.jsx)(Zu,{children:"A smarter way to learn\u2014built by Bright Sparks."}),(0,wr.jsxs)(ec,{children:[(0,wr.jsx)(Du,{href:"https://app.brightsparks.connect",target:"_blank",children:"Try Bright Sparks Connect"}),(0,wr.jsx)(Fu,{as:Ee,to:"/join",children:"Join Our Programs"})]})]}),(0,wr.jsx)(tc,{})]}),zu=vr.div`
  font-family: 'Inter', sans-serif;
  color: #000;
`,Tu=vr.section`
  position: relative;
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ou=vr.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 217, 0, 0.15);
`,Nu=vr.div`
  position: relative;
  text-align: center;
  max-width: 800px;
  animation: ${_u} 0.6s ease-out;
`,Ru=vr.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`,Lu=vr.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
`,Iu=vr.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`,Du=vr.a`
  background: #000;
  color: #ffd900;
  padding: 12px 24px;
  border-radius: 9999px;
  font-weight: bold;
  text-decoration: none;
  &:hover { opacity: 0.8; }
`,Fu=vr.a`
  border: 2px solid #000;
  color: #000;
  padding: 12px 24px;
  border-radius: 9999px;
  text-decoration: none;
  background: transparent;
  &:hover { background: rgba(0,0,0,0.05); }
`,Au=vr.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`,Mu=vr.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`,Wu=vr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
`,Bu=vr.div`
  flex: 1;
  min-width: 280px;
  max-width: 600px;
  margin-right: 2rem;
`,Uu=vr.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,$u=vr.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    background: #fffbea;
    border: 2px solid #ffd900;
    border-radius: 0.75rem;
    padding: 1rem;
    line-height: 1.5;
    font-size: 1rem;
  }
`,Hu=vr.div`
  flex: 1;
  text-align: center;
`,Vu=vr.section`
  padding: 4rem 2rem;
  background: #f9f7f0;
`,qu=vr.section`
  padding: 4rem 2rem;
`,Yu=vr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`,Ku=vr.div`
  background: #fffbea;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  max-width: 220px;
  animation: ${_u} 0.6s ease-out forwards;
`,Qu=vr.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`,Gu=vr.p`
  font-size: 0.875rem;
  margin-bottom: 1rem;
`,Ju=vr(Ee)`
  font-size: 0.875rem;
  color: #000;
  text-decoration: underline;
`,Xu=vr.section`
  text-align: center;
  padding: 4rem 2rem;
`,Zu=vr.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`,ec=vr.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`,tc=vr.footer`
  padding: 2rem;
`,nc=()=>{const e=ee(),t=vr.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
        background: linear-gradient(135deg, #4facfe, #00f2fe); /* Blue gradient */
        color: #fff;
        font-family: 'Inter', sans-serif;
    `,n=vr.h1`
        font-size: 10rem;
        font-weight: bold;
        margin: 0;
        animation: bounce 1.75s infinite;

        @keyframes bounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }
    `,r=vr.h3`
        font-size: 2.5rem;
        margin: 20px 0;
    `,a=vr.button`
        color: #333;
        background: #fff;
        border: none;
        border-radius: 25px;
        padding: 15px 40px;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover, &:focus {
            background: #f5f5f5;
            transform: translateY(-5px);
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        }
    `,o=vr.p`
        margin-top: 50px;
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.8);
    `;return(0,wr.jsxs)(t,{children:[(0,wr.jsx)(n,{children:"404"}),(0,wr.jsx)(r,{children:"Oops! The page you're looking for doesn't exist."}),(0,wr.jsx)(a,{onClick:()=>{e("/")},children:"Back to Home"}),(0,wr.jsx)(o,{children:"Need help? Contact support or check the URL."})]})},rc=(function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var a=hr.apply(void 0,ze([e],n,!1)),o="sc-global-".concat(Xt(JSON.stringify(a))),i=new yr(a,o),l=function(e){var n=Xn(),r=t.useContext(ur),a=t.useRef(n.styleSheet.allocateGSInstance(o)).current;return n.styleSheet.server&&s(a,e,n.styleSheet,r,n.stylis),t.useLayoutEffect((function(){if(!n.styleSheet.server)return s(a,e,n.styleSheet,r,n.stylis),function(){return i.removeStyles(a,n.styleSheet)}}),[a,e,n.styleSheet,r,n.stylis]),null};function s(e,t,n,r,a){if(i.isStatic)i.renderStyles(e,At,n,a);else{var o=Pe(Pe({},t),{theme:Bt(t,r,l.defaultProps)});i.renderStyles(e,o,n,a)}}return t.memo(l)})`
  @import url('https://fonts.googleapis.com/css2?family=Gotham:wght@400;700&family=Quicksand:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Gotham', 'Quicksand', sans-serif;
    background-color: #FFFFFF;
    color: #000000;
  }

::-webkit-scrollbar {
    width: 12px; /* Overall width of the scrollbar */
}

::-webkit-scrollbar-track {
    background: #f1f1f1; /* Light gray background for the scrollbar track */
    border-radius: 10px; /* Rounded corners */
}

::-webkit-scrollbar-thumb {
    background: #888; /* Gray color for the scrollbar thumb */
    border-radius: 10px; /* Rounded corners */
    width: 8px; /* Adjusted width for the thumb */
    min-height: 20px; /* Ensure a minimum height for usability */
}

::-webkit-scrollbar-thumb:hover {
    background: #555; /* Darker gray when hovering over the scrollbar thumb */
}

`,ac=()=>(0,wr.jsxs)(ke,{children:[(0,wr.jsx)(rc,{}),(0,wr.jsx)(Sr,{}),(0,wr.jsxs)(ge,{children:[(0,wr.jsx)(he,{path:"/",element:(0,wr.jsx)(ba,{})}),(0,wr.jsx)(he,{path:"/programs",element:(0,wr.jsx)(to,{})}),(0,wr.jsx)(he,{path:"/origin",element:(0,wr.jsx)(Vs,{})}),(0,wr.jsx)(he,{path:"/contact",element:(0,wr.jsx)(Lo,{})}),(0,wr.jsx)(he,{path:"/faq",element:(0,wr.jsx)(Es,{})}),(0,wr.jsx)(he,{path:"/impact",element:(0,wr.jsx)(ai,{})}),(0,wr.jsx)(he,{path:"/internships",element:(0,wr.jsx)(zi,{})}),(0,wr.jsx)(he,{path:"/project-codara",element:(0,wr.jsx)(dl,{})}),(0,wr.jsx)(he,{path:"/connect",element:(0,wr.jsx)(Pu,{})}),(0,wr.jsx)(he,{path:"/join",element:(0,wr.jsx)(Xl,{})}),(0,wr.jsx)(he,{path:"*",element:(0,wr.jsx)(nc,{})})]}),(0,wr.jsx)(Gr,{})]}),oc=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:o,getTTFB:i}=t;n(e),r(e),a(e),o(e),i(e)}))};a.createRoot(document.getElementById("root")).render((0,wr.jsx)(t.StrictMode,{children:(0,wr.jsx)(ac,{})})),oc()})()})();
//# sourceMappingURL=main.39860a05.js.map