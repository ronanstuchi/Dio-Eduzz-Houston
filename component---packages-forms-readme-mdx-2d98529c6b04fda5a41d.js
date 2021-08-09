(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{tLCA:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return c}));var n=a("cxan"),r=a("+wNj"),o=(a("ERkP"),a("ZVZ0")),l=a("9Rvw"),i=(a("l1C2"),["components"]),b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"packages/forms/README.mdx"}});var m={_frontmatter:b},s=l.a;function c(e){var t=e.components,a=Object(r.a)(e,i);return Object(o.b)(s,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"formulários"},"Formulários"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@eduzz/houston-forms"},Object(o.b)("img",{alt:"version",src:"https://img.shields.io/npm/v/@eduzz/houston-forms"})),"\n",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@eduzz/houston-forms"},Object(o.b)("img",{alt:"size",src:"https://img.shields.io/bundlephobia/min/@eduzz/houston-forms"}))),Object(o.b)("p",null,"Implementação padrão do ",Object(o.b)("strong",{parentName:"p"},"IFormAdapter")," do houston para validação de formulário, foi criado para\nser compatível com retornos do RxJs e livre de plataforma (web/mobile)."),Object(o.b)("h3",{id:"instalação"},"Instalação"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @eduzz/houston-forms\n")),Object(o.b)("h3",{id:"técnologias"},"Técnologias"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Formik"),Object(o.b)("li",{parentName:"ul"},"Yup"),Object(o.b)("li",{parentName:"ul"},"RxJs")),Object(o.b)("h3",{id:"importação"},"Importação"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import useForm from '@eduzz/houston-forms/useForm';\n")),Object(o.b)("h3",{id:"como-usar"},"Como usar"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"// Não é necessário criar uma interface, ele pode inferir o tipo pelo initialValues\ninterface IModel {\n  name: string;\n  money: number;\n  option: number;\n  check: boolean;\n}\n\nconst form = useForm<IModel>({\n  initialValues: {\n    // Não é necessário iniciar os valores\n    money: 5\n  },\n  validationSchema: yup =>  {\n    // Não é necessário importar mais o yup, ele será passado via arg\n    return yup.object().shape({\n      name: yup.string().required(),\n      money: yup.number().min(10),\n      option: yup.number().min(3),\n      check: yup.bool().required().equals([true])\n    }),\n  }\n  onSubmit: () => {\n    // Pode retornar uma promise, observable ou nada\n    return new Promise(resolve => {\n      setTimeout(() => resolve(null), 3000);\n    });\n  }\n});\n")),Object(o.b)("h3",{id:"parametros"},"Parametros"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Nome"),Object(o.b)("th",{parentName:"tr",align:null},"Descrição"),Object(o.b)("th",{parentName:"tr",align:null},"Obrigatório"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"initialValues"),Object(o.b)("td",{parentName:"tr",align:null},"Valor inicial da model, não é necessário passar todos os valores"),Object(o.b)("td",{parentName:"tr",align:null},"false")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"validationSchema"),Object(o.b)("td",{parentName:"tr",align:null},"Função geradora do validationSchema"),Object(o.b)("td",{parentName:"tr",align:null},"false")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"onSubmitWithErrors"),Object(o.b)("td",{parentName:"tr",align:null},"Função de submit quando há erros, pode ser utilizado para dar algum feedback extra"),Object(o.b)("td",{parentName:"tr",align:null},"false")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"onSubmit"),Object(o.b)("td",{parentName:"tr",align:null},"Função de submit"),Object(o.b)("td",{parentName:"tr",align:null},"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"validateOnMount"),Object(o.b)("td",{parentName:"tr",align:null},"Validação ao montar o form, ",Object(o.b)("inlineCode",{parentName:"td"},"true")," por padrão."),Object(o.b)("td",{parentName:"tr",align:null},"false")))),Object(o.b)("h3",{id:"retorno"},"Retorno"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"interface IFormAdapter<V extends { [key: string]: any }> {\n  handleSubmit?: (event: any) => void;\n  handleChange?: (name: string) => (value: any) => void;\n  handleReset?: () => void;\n  getFieldValue?: (name: string) => any;\n  setFieldValue?: (name: string, value: any) => void;\n  getFieldError: (name: string) => string;\n  values: Partial<V>;\n  isSubmitting: boolean;\n  isValid: boolean;\n  reset: (values?: V) => void;\n}\n")))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"packages/forms/README.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-forms-readme-mdx-2d98529c6b04fda5a41d.js.map