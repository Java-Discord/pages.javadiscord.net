(self.webpackChunkjava_bot_docs=self.webpackChunkjava_bot_docs||[]).push([[370],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5184:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={id:"q21",title:"Week 21"},s={unversionedId:"qotw/weeks/q21",id:"qotw/weeks/q21",isDocsHomePage:!1,title:"Week 21",description:"21.03.2021 - 28.03.2021",source:"@site/docs/qotw/weeks/q21.md",sourceDirName:"qotw/weeks",slug:"/qotw/weeks/q21",permalink:"/qotw/weeks/q21",version:"current",frontMatter:{id:"q21",title:"Week 21"},sidebar:"tutorialSidebar",previous:{title:"What is QOTW?",permalink:"/qotw/qotw"},next:{title:"Week 22",permalink:"/qotw/weeks/q22"}},u=[],c={toc:u};function p(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"21032021---28032021"},"21.03.2021 - 28.03.2021"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(1016).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Submission by dan1st#7327"))),(0,a.kt)("p",null,"Singlethreaded programs can only execute one thing at a time. If multiple operations should be executed in parallel, it would be required to check for other operations constantly. If the thread blocks (because of e.g. I/O or a loop), the whole program blocks. This makes asynchronous I/O the only option for I/O operations with a single thread as the program cannot execute other operations while waiting for I/O. Also, multiple threads cab utilize multiple CPU cores and therefore speed up computations. This is very well described in the book ",(0,a.kt)("inlineCode",{parentName:"p"},"Java Concurrency in Practice"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Submission by Spider EveryOS#8098"))),(0,a.kt)("p",null,"Threading takes advantages of the OS's scheduling processes and allows you to make multiple tasks appear as if they were running concurrently. Additionally, on systems with multiple cores, multi-threading may allow programs to leverage the power of multiple cores at once."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Submission by OneWholesomeDev#7465"))),(0,a.kt)("p",null,"Multithreading allows making use of simultaneous calculations and operations. Which means in certain cases and when used correctly, you may get better performance off a certain process or algorithm. Thus you can split the possible bottlenecking 100 % load for one thread down to multiple 40 % load-threads. - Can be faster - No bottleneck"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Submission by AttilaTheHun#9489"))),(0,a.kt)("p",null,"Multithre",(0,a.kt)("em",{parentName:"p"},"ding")," allows us to run numerous task simultaneously, which is extra useful when you need several tasks running at the same time, or when you are doing some blocking operations. However it is good to keep in mind that working with multiple threads can lead to some unexpected behavior, mainly if the threads are accessing the same resources. Multithreading is also used in brute-force algorithms to check all the cases in a shorter time, making them much more powerful."))}p.isMDXComponent=!0},1016:function(e,t,n){"use strict";t.Z=n.p+"assets/images/QOTW21-fc3eb8c99c0ae636f5ba77ff21d4f4ee.png"}}]);