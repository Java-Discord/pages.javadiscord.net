(self.webpackChunkjava_bot_docs=self.webpackChunkjava_bot_docs||[]).push([[436],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9784:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],l={id:"q29",title:"Week 29"},s={unversionedId:"qotw/weeks/q29",id:"qotw/weeks/q29",isDocsHomePage:!1,title:"Week 29",description:"16.05.2021 - 23.05.2021",source:"@site/docs/qotw/weeks/q29.md",sourceDirName:"qotw/weeks",slug:"/qotw/weeks/q29",permalink:"/qotw/weeks/q29",version:"current",frontMatter:{id:"q29",title:"Week 29"},sidebar:"weeks",previous:{title:"Week 28",permalink:"/qotw/weeks/q28"},next:{title:"Week 30",permalink:"/qotw/weeks/q30"}},c=[],u={toc:c};function p(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"16052021---23052021"},"16.05.2021 - 23.05.2021"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(7648).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Submission by nyarian#7075"))),(0,i.kt)("p",null,"it's a variable the value of which can't be changed after initialization"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Submission by AttilaTheHun#9489"))),(0,i.kt)("p",null,"Final variable is a variable that can not be reassigned, usually defining constants instead of the mythic ",(0,i.kt)("inlineCode",{parentName:"p"},"const")," keyword."),(0,i.kt)("p",null,"Methods can be final, too, meaning they can not be overridden."),(0,i.kt)("p",null,"Be sure to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"final")," keyword closest with the variable name, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"public static final int X...")," so it sounds the cool Java way \ud83d\ude0e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Submission by dan1st#7327"))),(0,i.kt)("p",null,"The keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"final")," makes sure that a variable cannot be changed.\nFor objects, it only makes sure that the reference to the variable cannot be changed. In contrast to ",(0,i.kt)("inlineCode",{parentName:"p"},"const")," in some other programming languages, ",(0,i.kt)("inlineCode",{parentName:"p"},"final")," does not make objects immutable.\nAs ",(0,i.kt)("inlineCode",{parentName:"p"},"final")," variables cannot change, they must be assigned before they are first accessed. This can happen with the declaration (for all variables), in a ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," block (for static variables), in a constructor or non-static initializer (for instance variables) or in all code branches between creation and first access of a local variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'final int i=0;\nfinal List<String>list=new ArrayList<>();\n//final int a;//compiler error (not initialized)\n//i=1337;//compiler error\n//i++;//compiler error\n//list=new LinkedList<>()//compiler error\nlist.add("Hello");//allowed, does not modify the reference\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"^ Comment by Dynxsty#7666:")," "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/66334318/119645167-06f5cb00-be1e-11eb-985d-470b160d0651.png",alt:"image"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Submission by daysling#6969"))),(0,i.kt)("p",null,"Final keyword us a keyword in java that declare a variable/class as constant, final variables/classes can't be modified."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Submission by Spider EveryOS#8098"))),(0,i.kt)("p",null,"When used on a variable, ",(0,i.kt)("inlineCode",{parentName:"p"},"final")," just means that the reference is immutable (the reference cannot be changed). ",(0,i.kt)("inlineCode",{parentName:"p"},"final"),' variables and "effectively final" variables play nice with lambdas, whereas normal variables do not.\nWhen used on a class, ',(0,i.kt)("inlineCode",{parentName:"p"},"final")," means that the class may not be extended,\nWhen used on a method, ",(0,i.kt)("inlineCode",{parentName:"p"},"final")," means that said method cannot be overridden."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Submission by Cirax856#4026"))),(0,i.kt)("p",null,"Final variable is a variable, that is in it's final state. It's value cannot be change by anything anywhere."))}p.isMDXComponent=!0},7648:function(e,t,n){"use strict";t.Z=n.p+"assets/images/QOTW29-e7207fface4fe60fd7b1570400ce5094.png"}}]);