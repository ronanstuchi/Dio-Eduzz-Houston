(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{83902:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Forms/Form",function(){return c(40995)}])},42900:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.useFormContext=b.FormFieldsContext=void 0;var d=c(59312),e=c(24246),f=(0,d.__importStar)(c(27378)),g=c(55693);b.FormFieldsContext=(0,g.createContext)(null),b.useFormContext=function(){return(0,g.useContext)(b.FormFieldsContext)},b.default=f.memo(function(a){var c=a.context,f=(0,d.__rest)(a,["context"]);return(0,e.jsx)(b.FormFieldsContext.Provider,(0,d.__assign)({value:c},{children:(0,e.jsx)("form",(0,d.__assign)({},f,{onReset:c.handleReset,onSubmit:c.handleSubmit}),void 0)}),void 0)})},40995:function(a,b,c){"use strict";c.r(b),c.d(b,{meta:function(){return e},"default":function(){return g}}),c(27378);var d=c(35318);c(42900);var e={name:"Form",tableOfContents:{depth:0,children:[{depth:1,slug:"#form",title:"Form",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#contexto-interno",title:"Contexto interno"}]}]}]}},f={meta:e};function g(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)("wrapper",Object.assign({},f,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)("h1",Object.assign({},{id:"form"}),"Form"),(0,d.kt)("p",null,"Componente de formul\xe1rio de alto desempenho com gerenciamento de escopo de dados."),(0,d.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,d.kt)("pre",null,(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Form from '@eduzz/houston-ui/Forms/Form';\n")),(0,d.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,d.kt)("p",null,"Exemplo de uso ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://eduzz.github.io/houston/form/example"}),"aqui"),"."),(0,d.kt)("h3",Object.assign({},{id:"contexto-interno"}),"Contexto interno"),(0,d.kt)("p",null,"Utilizado internamente no componente ",(0,d.kt)("inlineCode",{parentName:"p"},"<Form />"),". Recomendado o uso apenas para compartilhar o estado do formul\xe1rio com os componentes filhos."),(0,d.kt)("pre",null,(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Form, { useFormContext } from '@eduzz/houston-ui/Forms/Form';\n\nconst Component = () => {\n  return (\n    <Form {...props}>\n      <SubComponent />\n    </Form>\n  );\n}\n\nconst SubComponent = () => {\n  const form = useFormContext();\n  ...\n};\n")),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,d.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,d.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,d.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,d.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),"id"),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.kt)("inlineCode",{parentName:"td"},"string")),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.kt)("inlineCode",{parentName:"td"},"false")),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),"className"),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.kt)("inlineCode",{parentName:"td"},"string")),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.kt)("inlineCode",{parentName:"td"},"false")),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),"context"),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.kt)("inlineCode",{parentName:"td"},"IFormAdapter<any>")),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.kt)("inlineCode",{parentName:"td"},"true")),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,d.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))))}g.isMDXComponent=!0;var h={editThisPagePath:"src/pages/ui-components/Forms/Form/index.mdx"};for(var i in h)window[i]=h[i]},55693:function(a,b,c){"use strict";c.r(b),c.d(b,{BridgeProvider:function(){return p},createContext:function(){return l},useBridgeValue:function(){return q},useContext:function(){return n},useContextSelector:function(){return m},useContextUpdate:function(){return o}});var d=c(27378),e=c(91102),f=c(31542);c(27061);const g=Symbol(),h=Symbol(),i="undefined"==typeof window||/ServerSideRendering/.test(window.navigator&&window.navigator.userAgent)?d.useEffect:d.useLayoutEffect,j=e.unstable_runWithPriority?a=>(0,e.unstable_runWithPriority)(e.unstable_NormalPriority,a):a=>a(),k=a=>a;function l(a){var b;const c=(0,d.createContext)({[g]:{v:{current:a},n:{current:-1},l:new Set,u:a=>a()}});return c[h]=c.Provider,b=c.Provider,c.Provider=({value:a,children:c})=>{const e=(0,d.useRef)(a),h=(0,d.useRef)(0),k=(0,d.useRef)();if(!k.current){const l=new Set,m=a=>{(0,f.unstable_batchedUpdates)(()=>{h.current+=1,l.forEach(a=>a([h.current])),a()})};k.current={[g]:{v:e,n:h,l:l,u:m}}}return i(()=>{e.current=a,h.current+=1,j(()=>{k.current[g].l.forEach(b=>{b([h.current,a])})})},[a]),(0,d.createElement)(b,{value:k.current},c)},delete c.Consumer,c}function m(a,b){const c=(0,d.useContext)(a)[g],{v:{current:e},n:{current:f},l:h}=c,j=b(e),[k,l]=(0,d.useReducer)((a,c)=>{if(!c)return[e,j];if(c[0]===f)return Object.is(a[1],j)?a:[e,j];try{if(2===c.length){if(Object.is(a[0],c[1]))return a;const d=b(c[1]);return Object.is(a[1],d)?a:[c[1],d]}}catch(g){}return[...a]},[e,j]);return Object.is(k[1],j)||l(),i(()=>(h.add(l),()=>{h.delete(l)}),[h]),k[1]}function n(a){return m(a,k)}function o(a){const b=(0,d.useContext)(a)[g],{u:c}=b;return c}const p=({context:a,value:b,children:c})=>{const{[h]:e}=a;return(0,d.createElement)(e,{value:b},c)},q=a=>{const b=(0,d.useContext)(a);return b}}},function(a){a.O(0,[9774,2888,179],function(){return a(a.s=83902)}),_N_E=a.O()}])