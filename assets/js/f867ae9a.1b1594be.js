(self.webpackChunkjava_bot_docs=self.webpackChunkjava_bot_docs||[]).push([[505],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7206:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={id:"q37",title:"Week 37"},l={unversionedId:"qotw/weeks/q37",id:"qotw/weeks/q37",isDocsHomePage:!1,title:"Week 37",description:"18.07.2021 - 25.07.2021",source:"@site/docs/qotw/weeks/q37.md",sourceDirName:"qotw/weeks",slug:"/qotw/weeks/q37",permalink:"/qotw/weeks/q37",version:"current",frontMatter:{id:"q37",title:"Week 37"},sidebar:"tutorialSidebar",previous:{title:"Week 36",permalink:"/qotw/weeks/q36"},next:{title:"Week 38",permalink:"/qotw/weeks/q38"}},c=[],u={toc:c};function p(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"18072021---25072021"},"18.07.2021 - 25.07.2021"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(4952).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Submission by NeiiZun#2021"))),(0,o.kt)("p",null,"A class that has 1 and unique instance on the program (singleton classes should have a private contructor and a static instance access)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Submission by darkknight#8489"))),(0,o.kt)("p",null,"a class that can have only one object, an instance of the class, at a time"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Submission by Krystilize#7980"))),(0,o.kt)("p",null,"A singleton class is a class that has a single instance. Typically these are implemented using a ",(0,o.kt)("inlineCode",{parentName:"p"},"public static final")," field, with the singleton having a private constructor.\nHowever modern approaches sometimes incorporate an enum with a single enum instance. This approach initialises the singleton before standard classes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Submission by  dan1st#7327"))),(0,o.kt)("p",null,"A singleton is a class where only a single object/instance of a class exists and no other objects can be created. A simple version that uses ",(0,o.kt)("inlineCode",{parentName:"p"},"enum"),"s looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public enum SomeSingleton{\n    INSTANCE;\n    //Some code\n}\n")),(0,o.kt)("p",null,"Having just one enum constant makes sure that only one instance (the enum constant named ",(0,o.kt)("inlineCode",{parentName:"p"},"INSTANCE"),") exists)."),(0,o.kt)("p",null,"For lazy initialization, class loading can be abused in order to create a singleton."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class SomeSingleton{\n    private SomeSingleton(){\n        //Prevent instantiation from outside\n    }\n    private static class SomeSingletonHolder{\n        private static final SomeSingleton INSTANCE=new SomeSingleton();\n    }\n    public SomeSingleton getInstance(){\n        return SomeSingletonHolder.INSTANCE;\n    }\n}\n")),(0,o.kt)("p",null,"Class loading works on demand so the object is created as soon as the class is used at first. The private constructor makes sure that no other instance is created."))}p.isMDXComponent=!0},4952:function(e,t,n){"use strict";t.Z=n.p+"assets/images/QOTW37-26c4e830bd544cd7fce831f9867c4c92.png"}}]);