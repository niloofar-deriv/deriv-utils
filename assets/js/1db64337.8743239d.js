"use strict";(self.webpackChunkutils_docs=self.webpackChunkutils_docs||[]).push([[413],{4339:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(4848),s=t(8453);const o={sidebar_position:1},r="Overview",a={id:"overview",title:"Overview",description:"This utility library provides a comprehensive suite of utilities designed to support the development of web applications for Deriv. It encapsulates common functionalities such as handling constants, formatting, sorting, and more, with a focus on enhancing development efficiency and ensuring type safety.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Constants",permalink:"/docs/category/constants"}},c={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Usage Example",id:"usage-example",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Notes",id:"notes",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["This utility library provides a comprehensive suite of utilities designed to support the development of ",(0,i.jsx)(n.strong,{children:"web applications for Deriv"}),". It encapsulates common functionalities such as ",(0,i.jsx)(n.strong,{children:"handling constants"}),", ",(0,i.jsx)(n.strong,{children:"formatting"}),", ",(0,i.jsx)(n.strong,{children:"sorting"}),", and more, with a focus on enhancing development efficiency and ensuring type safety."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"This library is divided into two main namespaces:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Constants:"}),"\nThe Constants namespace acts as a central hub for all static values and identifiers used across Deriv's web applications. It consolidates these values in one place, making it easier to maintain and update, ensuring consistent usage across components, and enhancing code readability and manageability."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Utils:"}),"\nThe Utils namespace provides a suite of utility functions and tools to simplify and improve web application development at Deriv. These utilities address common development challenges and tasks, enhancing efficiency, reliability, and maintainability throughout the development process."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(n.p,{children:["To get started simply install deriv utils from the ",(0,i.jsx)(n.code,{children:"@deriv-com/utils"})," package :)"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm i --save @deriv-com/utils\n"})}),"\n",(0,i.jsx)(n.p,{children:"or"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add @deriv-com/utils\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,i.jsxs)(n.p,{children:["Each of the namespaces listed above are exposed directly from the library root. In this example, we are using the ",(0,i.jsx)(n.code,{children:"FormatUtils.formatMoney()"})," functionality to format different currencies to their correct decimal points or localised formatting."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'import { FormatUtils } from "@deriv-com/utils";\n\nconst formattedBalance = FormatUtils.formatMoney(1, { currency: "BTC" });\nconsole.log(formattedBalance); // Should output 1.00000000\n'})}),"\n",(0,i.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,i.jsx)(n.p,{children:"For detailed documentation on each utility and constant, refer to the specific files in the constants and utils directories. Each utility function and constant is documented with JSDoc comments, providing insights into their purpose, parameters, and return values. (A dedicated document page is in the pipeline)"}),"\n",(0,i.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,i.jsxs)(n.p,{children:["We welcome contributions to the ",(0,i.jsx)(n.code,{children:"@deriv-com/utils"})," library. If you have suggestions for improvements or find a bug, please open an issue or submit a pull request."]}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@deriv-com/utils"})," outputs both ESM and CJS files but currently, this library only support code running in the browser environment. However, support for Node runtime is planned in the pipeline."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);