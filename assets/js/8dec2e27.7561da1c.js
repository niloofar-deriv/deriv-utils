"use strict";(self.webpackChunkutils_docs=self.webpackChunkutils_docs||[]).push([[337],{2629:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=t(4848),s=t(8453);const r={sidebar_position:2},i="validation",l={id:"Constants/validation",title:"validation",description:"messagesHints",source:"@site/docs/Constants/validation.md",sourceDirName:"Constants",slug:"/Constants/validation",permalink:"/docs/Constants/validation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Constants/validation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"url",permalink:"/docs/Constants/url"},next:{title:"Utils",permalink:"/docs/category/utils"}},d={},c=[{value:"messagesHints",id:"messageshints",level:2},{value:"addressPermittedSpecialCharacters",id:"addresspermittedspecialcharacters",level:3},{value:"patterns",id:"patterns",level:2},{value:"address",id:"address",level:3},{value:"addressCity",id:"addresscity",level:3},{value:"addressState",id:"addressstate",level:3},{value:"barrier",id:"barrier",level:3},{value:"decimal",id:"decimal",level:3},{value:"integer",id:"integer",level:3},{value:"postalOfficeBoxNumber",id:"postalofficeboxnumber",level:3},{value:"email",id:"email",level:3},{value:"password",id:"password",level:3},{value:"affilliatePassword",id:"affilliatepassword",level:3},{value:"paymentAgentEmail",id:"paymentagentemail",level:3},{value:"postalCode",id:"postalcode",level:3},{value:"taxIdentificationNumber",id:"taxidentificationnumber",level:3},{value:"phoneNumber",id:"phonenumber",level:3},{value:"fileType",id:"filetype",level:3},{value:"formattedCardNumber",id:"formattedcardnumber",level:3},{value:"invalidFormattedCardNumberCharacters",id:"invalidformattedcardnumbercharacters",level:3},{value:"tradingPlatformInvestorPassword",id:"tradingplatforminvestorpassword",level:3},{value:"letterSymbols",id:"lettersymbols",level:3},{value:"name",id:"name",level:3},{value:"general",id:"general",level:3},{value:"lowercase",id:"lowercase",level:3},{value:"number",id:"number",level:3},{value:"specialCharacter",id:"specialcharacter",level:3},{value:"uppercase",id:"uppercase",level:3},{value:"between8and16Characters",id:"between8and16characters",level:3},{value:"between8and25Characters",id:"between8and25characters",level:3}];function o(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"validation",children:"validation"}),"\n",(0,n.jsx)(a.h2,{id:"messageshints",children:"messagesHints"}),"\n",(0,n.jsx)(a.h3,{id:"addresspermittedspecialcharacters",children:"addressPermittedSpecialCharacters"}),"\n",(0,n.jsx)(a.p,{children:"Represents the special characters permitted in an address."}),"\n",(0,n.jsx)(a.p,{children:"This is to be used in the message of the validation error, to let the user know which characters are permitted."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example `Special characters permitted:\n// ${ValidationConstants.messagesHints.addressPermittedSpecialCharacters}`\naddressPermittedSpecialCharacters: ". , \' : ; ( ) \xb0 @ # / -";\n'})}),"\n",(0,n.jsx)(a.h2,{id:"patterns",children:"patterns"}),"\n",(0,n.jsx)(a.h3,{id:"address",children:"address"}),"\n",(0,n.jsxs)(a.p,{children:["This pattern matches any string with no more than ",(0,n.jsx)(a.strong,{children:"70"})," characters, can contain letters, numbers, spaces, and any of the following special characters: ",(0,n.jsx)(a.code,{children:"'\u2019.,:;()@#/-"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.address.test("123 Main St.")\n// @example ValidationConstants.patterns.address.test("Apt. 123")\n// @example ValidationConstants.patterns.address.test("123 Main St. Apt. 123")\naddress: /^[\\p{L}\\p{Nd}\\s\'\u2019.,:;()\\\\x{b0}@#/-]{0,70}$/u;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"addresscity",children:"addressCity"}),"\n",(0,n.jsxs)(a.p,{children:["This pattern matches any string with no more than ",(0,n.jsx)(a.strong,{children:"50"})," characters."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.addressCity.test("Main St.")\n// @example ValidationConstants.patterns.addressCity.test("Apt.")\n// @example ValidationConstants.patterns.addressCity.test("Main St. Apt.")\naddressCity: /^\\p{L}[\\p{L}\\s\'.-]{0,49}$/u;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"addressstate",children:"addressState"}),"\n",(0,n.jsxs)(a.p,{children:["This pattern matches any string that contains up to ",(0,n.jsx)(a.strong,{children:"100"})," characters composed of Unicode letters, Unicode digits, whitespace characters, apostrophes, periods, commas, hyphens, and semicolons ",(0,n.jsx)(a.code,{children:"( '.,-;)"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.addressState.test("New York")\n// @example ValidationConstants.patterns.addressState.test("Qu\xe9bec")\naddressState: /^[\\p{L}\\p{Nd}\\s\'.,-;]{0,100}$/u,\n'})}),"\n",(0,n.jsx)(a.h3,{id:"barrier",children:"barrier"}),"\n",(0,n.jsxs)(a.p,{children:["This pattern matches any string with ",(0,n.jsx)(a.strong,{children:"0-9"})," characters (numeric values. i.e. both integers and floats), and may contain a ",(0,n.jsx)(a.code,{children:"'+'"})," or ",(0,n.jsx)(a.code,{children:"'-'"})," sign."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.barrier.test("123")\n// @example ValidationConstants.patterns.barrier.test("123.45")\n// @example ValidationConstants.patterns.barrier.test("-123")\n// @example ValidationConstants.patterns.barrier.test("-123.45")\n// @example ValidationConstants.patterns.barrier.test("+123")\n// @example ValidationConstants.patterns.barrier.test("+123.45")\nbarrier: /^(?=.{1,20}$)[+-]?[0-9]+\\.?[0-9]*$/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"decimal",children:"decimal"}),"\n",(0,n.jsx)(a.p,{children:"This pattern matches any string that contains only numeric values, and may contain a decimal point."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.decimal.test("123")\n// @example ValidationConstants.patterns.decimal.test("123.45")\ndecimal: /^\\d*(\\.\\d+)?$/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"integer",children:"integer"}),"\n",(0,n.jsx)(a.p,{children:"This pattern matches any string that contains only numeric values."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.integer.test("123")\n// @example ValidationConstants.patterns.integer.test("12345")\ninteger: /^\\d+$/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"postalofficeboxnumber",children:"postalOfficeBoxNumber"}),"\n",(0,n.jsxs)(a.p,{children:["This pattern matches any string that contains the characters ",(0,n.jsx)(a.code,{children:"'p.o.box'"})," or ",(0,n.jsx)(a.code,{children:"'p o box'"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.postalOfficeBoxNumber.test("P.O. Box 1234")\n// @example ValidationConstants.patterns.postalOfficeBoxNumber.test("p.o. box 1234")\n// @example ValidationConstants.patterns.postalOfficeBoxNumber.test("P O Box 1234")\n// @example ValidationConstants.patterns.postalOfficeBoxNumber.test("p o box 1234")\npostalOfficeBoxNumber: /p[.\\s]+o[.\\s]+box/i;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"email",children:"email"}),"\n",(0,n.jsxs)(a.p,{children:["This pattern matches any string with ",(0,n.jsx)(a.code,{children:"2-63"})," characters, and contains aplhanumeric characters, an ",(0,n.jsx)(a.code,{children:"'@'"})," sign, and may also contain any of these characters ",(0,n.jsx)(a.code,{children:"'+,-.\\_'"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.email.test("doe@meme.me")\nemail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,63}$/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"password",children:"password"}),"\n",(0,n.jsxs)(a.p,{children:["This pattern matches any string that contains ",(0,n.jsx)(a.code,{children:"8-25"})," characters that include; at least one lowercase letter, at least one digit, at least one uppercase letter, and only printable ASCII characters ",(0,n.jsx)(a.code,{children:"(from '!' to '~')"})]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.password.test("Password1!")\npassword: /^(?=.*[a-z])(?=.*\\d)(?=.*[A-Z])[!-~]{8,25}$/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"affilliatepassword",children:"affilliatePassword"}),"\n",(0,n.jsxs)(a.p,{children:["This pattern matches any string that contains ",(0,n.jsx)(a.strong,{children:"6-50"})," characters that include; at least one lowercase letter, at least one digit, at least one uppercase letter, and only printable ASCII characters ",(0,n.jsx)(a.code,{children:"(from '!' to '~')"})]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.affilliatePassword.test("Password1")\naffilliatePassword: /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])[ -~]{6,50}$/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"paymentagentemail",children:"paymentAgentEmail"}),"\n",(0,n.jsxs)(a.p,{children:["This pattern matches any string with ",(0,n.jsx)(a.strong,{children:"1-255"})," characters, and contains aplhanumeric characters, an ",(0,n.jsx)(a.code,{children:"'@'"})," sign, and may also contain any of these characters ",(0,n.jsx)(a.code,{children:"'+,-._'"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.paymentAgentEmail.test("doe@meme.us")\npaymentAgentEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{1,255}$/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"postalcode",children:"postalCode"}),"\n",(0,n.jsxs)(a.p,{children:["This pattern matches any string with no more than ",(0,n.jsx)(a.strong,{children:"20"})," characters and may not contain ",(0,n.jsx)(a.code,{children:"'+'"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.postalCode.test("123")\n// @example ValidationConstants.patterns.postalCode.test("123-456")\npostalCode: /^([A-Za-z0-9][A-Za-z0-9\\s-]{0,20})?$/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"taxidentificationnumber",children:"taxIdentificationNumber"}),"\n",(0,n.jsxs)(a.p,{children:["This pattern matches any string with ",(0,n.jsx)(a.strong,{children:"0-25"})," characters, and may contain alphanumeric characters (both uppercase and lowercase), and any of these characters",(0,n.jsx)(a.code,{children:"'./-'"}),", and or sapce characters"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.taxIdentificationNumber.test("123")\ntaxIdentificationNumber: /^(?!^$|\\s+)[A-Za-z0-9.\\/\\s-]{0,25}$/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"phonenumber",children:"phoneNumber"}),"\n",(0,n.jsxs)(a.p,{children:["This pattern matches any string that starts with a ",(0,n.jsx)(a.code,{children:"'+'"})," character, followed by ",(0,n.jsx)(a.code,{children:"8-35"})," digits, allowing hyphens or spaces."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.phoneNumber.test("+1234567890")\nphoneNumber: /^\\+((-|\\s)*[0-9]){8,35}$/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"filetype",children:"fileType"}),"\n",(0,n.jsx)(a.p,{children:"This pattern matches any of the file types jpeg, jpg, pdf, or png."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.fileType.test("image/jpeg")\n// @example ValidationConstants.patterns.fileType.test("application/pdf")\n// @example ValidationConstants.patterns.fileType.test("image/png")\n// @example ValidationConstants.patterns.fileType.test("image/jpg")\nfileType: /(image|application)\\/(jpe?g|pdf|png)$/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"formattedcardnumber",children:"formattedCardNumber"}),"\n",(0,n.jsxs)(a.p,{children:["This pattern matches any string that's formatted in the following format: ",(0,n.jsx)(a.code,{children:"1234 56XX XXXX 1121"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.formattedCardNumber.test("1234 56XX XXXX 1121")\nformattedCardNumber: /(^\\d{4})\\s(\\d{2}X{2})\\s(X{4})\\s(\\d{4}$)/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"invalidformattedcardnumbercharacters",children:"invalidFormattedCardNumberCharacters"}),"\n",(0,n.jsxs)(a.p,{children:["The is pattern matches any string that contains characters that aren't digits, the uppercase letter ",(0,n.jsx)(a.code,{children:"'X'"})," and spaces."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.invalidFormattedCardNumberCharacters.test("9876-5432-1098")\n// @example ValidationConstants.patterns.invalidFormattedCardNumberCharacters.test("9876 5432 1098")\ninvalidFormattedCardNumberCharacters: /[^\\dX\\s]/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"tradingplatforminvestorpassword",children:"tradingPlatformInvestorPassword"}),"\n",(0,n.jsxs)(a.p,{children:["This pattern matches any string that contains ",(0,n.jsx)(a.strong,{children:"8-16"})," characters that include; at least one lowercase letter, at least one digit, at least one uppercase letter, and only printable ASCII characters ",(0,n.jsx)(a.code,{children:"(from '!' to '~')"})]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.tradingPlatformInvestorPassword.test("Password1!$")\ntradingPlatformInvestorPassword:\n/^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()+\\-=\\[\\]{};\':\\"|,\\.<>\\?_~])[ -~]{8,16}$/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"lettersymbols",children:"letterSymbols"}),"\n",(0,n.jsxs)(a.p,{children:["This pattern matches any string that starts with one or more letters (uppercase or lowercase), followed by zero or more occurrences of letters, and any of these characters ",(0,n.jsx)(a.code,{children:"(.' -)"})," and ends with one or more occurrences of letters, and any of these characters ",(0,n.jsx)(a.code,{children:"(.' -)"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.letterSymbols.test("John Doe")\n// @example ValidationConstants.patterns.letterSymbols.test("John-Doe")\n// @example ValidationConstants.patterns.letterSymbols.test("John O\'Doe")\nletterSymbols: /^[A-Za-z]+([a-zA-Z.\' -])*[a-zA-Z.\' -]+$/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"name",children:"name"}),"\n",(0,n.jsxs)(a.p,{children:["This pattern matches any string that contains ",(0,n.jsx)(a.strong,{children:"2-50"})," characters, starts and ends with valid characters (letters, whitespace, period, single quote, or hyphen)."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.name.test("John Doe")\n// @example ValidationConstants.patterns.name.test("John-Doe")\n// @example ValidationConstants.patterns.name.test("John O\'Doe")\n// @example ValidationConstants.patterns.name.test("John O. Doe")\nname: /^(?!.*\\s{2,})[\\p{L}\\s\'.-]{2,50}$/u;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"general",children:"general"}),"\n",(0,n.jsx)(a.p,{children:"This pattern matches any string that contains any of these characters:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:'`~!@#$%^&*)(_=+[}{\\]\\\\/";:?><|\n'})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.general.test("Password1!")\ngeneral: /[`~!@#$%^&*)(_=+[}{\\]\\\\/";:?><|]+/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"lowercase",children:"lowercase"}),"\n",(0,n.jsx)(a.p,{children:"This pattern matches any string that contains lowercase letters."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.lowercase.test("abc")\nlowercase: /[a-z]/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"number",children:"number"}),"\n",(0,n.jsx)(a.p,{children:"This pattern matches any string that contains digits."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.number.test("pets123")\nnumber: /\\d/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"specialcharacter",children:"specialCharacter"}),"\n",(0,n.jsx)(a.p,{children:"This pattern matches any string that contains special characters."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.specialCharacter.test("Password1!")\nspecialCharacter: /\\W/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"uppercase",children:"uppercase"}),"\n",(0,n.jsx)(a.p,{children:"This pattern matches any string that contains uppercase letters."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.uppercase.test("ABC")\nuppercase: /[A-Z]/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"between8and16characters",children:"between8and16Characters"}),"\n",(0,n.jsxs)(a.p,{children:["This pattern matches any string that contains ",(0,n.jsx)(a.strong,{children:"8-16"})," characters."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.between8and16Characters.test("Password1!")\nbetween8and16Characters: /^.{8,16}$/;\n'})}),"\n",(0,n.jsx)(a.h3,{id:"between8and25characters",children:"between8and25Characters"}),"\n",(0,n.jsxs)(a.p,{children:["This pattern matches any string that contains ",(0,n.jsx)(a.strong,{children:"8-25"})," characters."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-JS",children:'// @example ValidationConstants.patterns.between8and25Characters.test("Password1!")\nbetween8and25Characters: /^.{8,25}$/;\n'})})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>l});var n=t(6540);const s={},r=n.createContext(s);function i(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);