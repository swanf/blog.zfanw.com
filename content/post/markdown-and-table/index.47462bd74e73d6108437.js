webpackJsonp(["index"],{"./node_modules/preact/dist/preact.esm.js":function(a,b,c){"use strict";function d(){}function e(a,b){var c,e,f,g,h=I;for(g=arguments.length;2<g--;)H.push(arguments[g]);for(b&&null!=b.children&&(!H.length&&H.push(b.children),delete b.children);H.length;)if((e=H.pop())&&void 0!==e.pop)for(g=e.length;g--;)H.push(e[g]);else"boolean"==typeof e&&(e=null),(f="function"!=typeof a)&&(null==e?e="":"number"==typeof e?e+="":"string"!=typeof e&&(f=!1)),f&&c?h[h.length-1]+=e:h===I?h=[e]:h.push(e),c=f;var i=new d;return i.nodeName=a,i.children=h,i.attributes=null==b?void 0:b,i.key=null==b?void 0:b.key,void 0!==G.vnode&&G.vnode(i),i}function f(a,b){for(var c in b)a[c]=b[c];return a}function g(a){!a._dirty&&(a._dirty=!0)&&1==L.push(a)&&(G.debounceRendering||J)(h)}function h(){var a,b=L;for(L=[];a=b.pop();)a._dirty&&B(a)}function i(a,b,c){return"string"==typeof b||"number"==typeof b?void 0!==a.splitText:"string"==typeof b.nodeName?!a._componentConstructor&&j(a,b.nodeName):c||a._componentConstructor===b.nodeName}function j(a,b){return a.normalizedNodeName===b||a.nodeName.toLowerCase()===b.toLowerCase()}function k(a){var b=f({},a.attributes);b.children=a.children;var c=a.nodeName.defaultProps;if(void 0!==c)for(var d in c)void 0===b[d]&&(b[d]=c[d]);return b}function l(a,b){var c=b?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a);return c.normalizedNodeName=a,c}function m(a){var b=a.parentNode;b&&b.removeChild(a)}function n(a,b,c,d,e){if("className"===b&&(b="class"),"key"===b);else if("ref"===b)c&&c(null),d&&d(a);else if("class"===b&&!e)a.className=d||"";else if("style"===b){if(d&&"string"!=typeof d&&"string"!=typeof c||(a.style.cssText=d||""),d&&"object"==typeof d){if("string"!=typeof c)for(var f in c)f in d||(a.style[f]="");for(var f in d)a.style[f]="number"==typeof d[f]&&!1===K.test(f)?d[f]+"px":d[f]}}else if("dangerouslySetInnerHTML"===b)d&&(a.innerHTML=d.__html||"");else if("o"==b[0]&&"n"==b[1]){var g=b!==(b=b.replace(/Capture$/,""));b=b.toLowerCase().substring(2),d?!c&&a.addEventListener(b,p,g):a.removeEventListener(b,p,g),(a._listeners||(a._listeners={}))[b]=d}else if("list"!==b&&"type"!==b&&!e&&b in a)o(a,b,null==d?"":d),(null==d||!1===d)&&a.removeAttribute(b);else{var h=e&&b!==(b=b.replace(/^xlink\:?/,""));null==d||!1===d?h?a.removeAttributeNS("http://www.w3.org/1999/xlink",b.toLowerCase()):a.removeAttribute(b):"function"!=typeof d&&(h?a.setAttributeNS("http://www.w3.org/1999/xlink",b.toLowerCase(),d):a.setAttribute(b,d))}}function o(a,b,c){try{a[b]=c}catch(a){}}function p(a){return this._listeners[a.type](G.event&&G.event(a)||a)}function q(){for(var a;a=M.pop();)G.afterMount&&G.afterMount(a),a.componentDidMount&&a.componentDidMount()}function r(a,b,c,d,e,f){N++||(O=null!=e&&void 0!==e.ownerSVGElement,P=null!=a&&!("__preactattr_"in a));var g=s(a,b,c,d,f);return e&&g.parentNode!==e&&e.appendChild(g),--N||(P=!1,!f&&q()),g}function s(b,c,d,e,f){var g=b,h=O;if((null==c||"boolean"==typeof c)&&(c=""),"string"==typeof c||"number"==typeof c)return b&&void 0!==b.splitText&&b.parentNode&&(!b._component||f)?b.nodeValue!=c&&(b.nodeValue=c):(g=document.createTextNode(c),b&&(b.parentNode&&b.parentNode.replaceChild(g,b),u(b,!0))),g.__preactattr_=!0,g;var k=c.nodeName;if("function"==typeof k)return C(b,c,d,e);if(O="svg"===k||"foreignObject"!==k&&O,k+="",(!b||!j(b,k))&&(g=l(k,O),b)){for(;b.firstChild;)g.appendChild(b.firstChild);b.parentNode&&b.parentNode.replaceChild(g,b),u(b,!0)}var m=g.firstChild,n=g.__preactattr_,o=c.children;if(null==n){n=g.__preactattr_={};for(var p=g.attributes,a=p.length;a--;)n[p[a].name]=p[a].value}return!P&&o&&1===o.length&&"string"==typeof o[0]&&null!=m&&void 0!==m.splitText&&null==m.nextSibling?m.nodeValue!=o[0]&&(m.nodeValue=o[0]):(o&&o.length||null!=m)&&t(g,o,d,e,P||null!=n.dangerouslySetInnerHTML),w(g,c.attributes,n),O=h,g}function t(a,b,d,e,g){var h,j,c,f,k,l=a.childNodes,n=[],o={},p=0,q=0,r=l.length,t=0,v=b?b.length:0;if(0!==r)for(var w=0;w<r;w++){var x=l[w],y=x.__preactattr_,z=v&&y?x._component?x._component.__key:y.key:null;null==z?(y||(void 0===x.splitText?g:!g||x.nodeValue.trim()))&&(n[t++]=x):(p++,o[z]=x)}if(0!==v)for(var w=0;w<v;w++){f=b[w],k=null;var z=f.key;if(null!=z)p&&void 0!==o[z]&&(k=o[z],o[z]=void 0,p--);else if(!k&&q<t)for(h=q;h<t;h++)if(void 0!==n[h]&&i(j=n[h],f,g)){k=j,n[h]=void 0,h===t-1&&t--,h===q&&q++;break}k=s(k,f,d,e),c=l[w],k&&k!==a&&k!==c&&(null==c?a.appendChild(k):k===c.nextSibling?m(c):a.insertBefore(k,c))}if(p)for(var w in o)void 0!==o[w]&&u(o[w],!1);for(;q<=t;)void 0!==(k=n[t--])&&u(k,!1)}function u(a,b){var c=a._component;c?D(c):(null!=a.__preactattr_&&a.__preactattr_.ref&&a.__preactattr_.ref(null),(!1===b||null==a.__preactattr_)&&m(a),v(a))}function v(a){for(a=a.lastChild;a;){var b=a.previousSibling;u(a,!0),a=b}}function w(a,b,c){for(var d in c)b&&null!=b[d]||null==c[d]||n(a,d,c[d],c[d]=void 0,O);for(d in b)"children"===d||"innerHTML"===d||d in c&&b[d]===("value"===d||"checked"===d?a[d]:c[d])||n(a,d,c[d],c[d]=b[d],O)}function x(a){var b=a.constructor.name;(Q[b]||(Q[b]=[])).push(a)}function y(a,b,c){var d,e=Q[a.name];if(a.prototype&&a.prototype.render?(d=new a(b,c),E.call(d,b,c)):(d=new E(b,c),d.constructor=a,d.render=z),e)for(var f=e.length;f--;)if(e[f].constructor===a){d.nextBase=e[f].nextBase,e.splice(f,1);break}return d}function z(a,b,c){return this.constructor(a,c)}function A(a,b,c,d,e){a._disable||(a._disable=!0,(a.__ref=b.ref)&&delete b.ref,(a.__key=b.key)&&delete b.key,!a.base||e?a.componentWillMount&&a.componentWillMount():a.componentWillReceiveProps&&a.componentWillReceiveProps(b,d),d&&d!==a.context&&(!a.prevContext&&(a.prevContext=a.context),a.context=d),!a.prevProps&&(a.prevProps=a.props),a.props=b,a._disable=!1,0!==c&&(1!==c&&!1===G.syncComponentUpdates&&a.base?g(a):B(a,1,e)),a.__ref&&a.__ref(a))}function B(a,b,c,d){if(!a._disable){var e,g,h,i=a.props,j=a.state,l=a.context,m=a.prevProps||i,n=a.prevState||j,o=a.prevContext||l,p=a.base,s=a.nextBase,v=p||s,w=a._component,x=!1;if(p&&(a.props=m,a.state=n,a.context=o,2!==b&&a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(i,j,l)?x=!0:a.componentWillUpdate&&a.componentWillUpdate(i,j,l),a.props=i,a.state=j,a.context=l),a.prevProps=a.prevState=a.prevContext=a.nextBase=null,a._dirty=!1,!x){e=a.render(i,j,l),a.getChildContext&&(l=f(f({},l),a.getChildContext()));var z,C,E=e&&e.nodeName;if("function"==typeof E){var F=k(e);g=w,g&&g.constructor===E&&F.key==g.__key?A(g,F,1,l,!1):(z=g,a._component=g=y(E,F,l),g.nextBase=g.nextBase||s,g._parentComponent=a,A(g,F,0,l,!1),B(g,1,c,!0)),C=g.base}else h=v,z=w,z&&(h=a._component=null),(v||1===b)&&(h&&(h._component=null),C=r(h,e,l,c||!p,v&&v.parentNode,!0));if(v&&C!==v&&g!==w){var H=v.parentNode;H&&C!==H&&(H.replaceChild(C,v),!z&&(v._component=null,u(v,!1)))}if(z&&D(z),a.base=C,C&&!d){for(var I=a,J=a;J=J._parentComponent;)(I=J).base=C;C._component=I,C._componentConstructor=I.constructor}}if(!p||c?M.unshift(a):!x&&(a.componentDidUpdate&&a.componentDidUpdate(m,n,o),G.afterUpdate&&G.afterUpdate(a)),null!=a._renderCallbacks)for(;a._renderCallbacks.length;)a._renderCallbacks.pop().call(a);N||d||q()}}function C(a,b,d,e){for(var f=a&&a._component,c=f,g=a,h=f&&a._componentConstructor===b.nodeName,i=h,j=k(b);f&&!i&&(f=f._parentComponent);)i=f.constructor===b.nodeName;return f&&i&&(!e||f._component)?(A(f,j,3,d,e),a=f.base):(c&&!h&&(D(c),a=g=null),f=y(b.nodeName,j,d),a&&!f.nextBase&&(f.nextBase=a,g=null),A(f,j,1,d,e),a=f.base,g&&a!==g&&(g._component=null,u(g,!1))),a}function D(a){G.beforeUnmount&&G.beforeUnmount(a);var b=a.base;a._disable=!0,a.componentWillUnmount&&a.componentWillUnmount(),a.base=null;var c=a._component;c?D(c):b&&(b.__preactattr_&&b.__preactattr_.ref&&b.__preactattr_.ref(null),a.nextBase=b,m(b),x(a),v(b)),a.__ref&&a.__ref(null)}function E(a,b){this._dirty=!0,this.context=b,this.props=a,this.state=this.state||{}}function F(a,b,c){return r(c,a,{},!1,b,!1)}c.d(b,"b",function(){return e}),c.d(b,"a",function(){return E}),c.d(b,"c",function(){return F});var G={},H=[],I=[],J="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,K=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,L=[],M=[],N=0,O=!1,P=!1,Q={};f(E.prototype,{setState:function(a,b){var c=this.state;this.prevState||(this.prevState=f({},c)),f(c,"function"==typeof a?a(c,this.props):a),b&&(this._renderCallbacks=this._renderCallbacks||[]).push(b),g(this)},forceUpdate:function(a){a&&(this._renderCallbacks=this._renderCallbacks||[]).push(a),B(this,2)},render:function(){}})},"./src/index.jsx":function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c("./node_modules/preact/dist/preact.esm.js");let e;const f=document.getElementById("root");!1,(()=>new Promise(function(a,b){var g,h;return Promise.resolve(c.e("d921da7afba1f46e74e1cb2519ac1ba9").then(c.bind(null,"./src/App.jsx"))).then(function(c){try{return g=c,h=g.default,e=Object(d.c)(Object(d.b)(h,null),f,e),a()}catch(a){return b(a)}}.bind(this),b)}.bind(this)))()},"multi /Users/sam/Documents/githubRepos/markdown-table/src/index":function(a,b,c){a.exports=c("./src/index.jsx")}},["multi /Users/sam/Documents/githubRepos/markdown-table/src/index"]);