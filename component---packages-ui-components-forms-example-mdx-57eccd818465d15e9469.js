(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"0NZg":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return j})),n.d(t,"default",(function(){return g}));var a=n("cxan"),o=n("+wNj"),r=n("ERkP"),i=n("ZVZ0"),l=n("9Rvw"),m=n("qbsg"),u=n("zdIC"),b=n("FvlN"),s=n("x6WP"),d=n("bXe8"),c=n("qasM"),p=n("K5iU"),O=(n("l1C2"),["components"]),j={};void 0!==j&&j&&j===Object(j)&&Object.isExtensible(j)&&!j.hasOwnProperty("__filemeta")&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"packages/ui-components/Forms/example.mdx"}});var f={_frontmatter:j},y=l.a;function g(e){var t,n,g,x=e.components,v=Object(o.a)(e,O);return Object(i.b)(y,Object(a.a)({},f,v,{components:x,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"exemplo-de-validação"},"Exemplo de Validação"),Object(i.b)("p",null,"Este é um exemplo utilzando o @eduzz/houston-ui."),Object(i.b)("p",null,"O componente de formulário (Form) é utilizado para a criação, validação e controle de formulários de uma aplicação,\npodendo ser utilizado através de um contexto ou hook."),Object(i.b)("h3",{id:"importação"},"Importação"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import useForm from '@eduzz/houston-forms/useForm';\nimport Form from '@eduzz/houston-ui/Forms/Form';\n")),Object(i.b)("h3",{id:"exemplo"},"Exemplo"),Object(i.b)(m.c,{__position:0,__code:'() => {\n  const form = useForm({\n    initialValues: { money: 5 }, //estado inicial, não precisa passar todas as propriedades\n    validationSchema: yup => {\n      // não é necessário importar o yup ele será passado como argumento\n      return yup.object().shape({\n        name: yup.string().required(),\n        money: yup.number().min(10),\n        option: yup.number().min(3),\n      })\n    },\n    onSubmit: () => {\n      // onSubmit pode retornar uma promise ou um observable de rxjs, desse jeito ele irá\n      // setar corretamente o isSubmitting\n      return new Promise(resolve => {\n        setTimeout(() => resolve(null), 3000)\n      })\n    },\n  })\n  const [options] = React.useState(() => [\n    { value: 1, label: \'Option 1\' },\n    { value: 2, label: \'Option 2\' },\n    { value: 3, label: \'Option 3 (disabled)\', disabled: true }, // é possível desativar alguma opção\n    { value: 4, label: \'Option 4\' },\n    { value: 5, label: \'Option 5\' },\n  ])\n  return (\n    //Criando o contexto do form não é preciso passar para os components filhos\n    <Form context={form}>\n      {/* a prop name que irá dizer o campo que receberá o valor */}\n      <TextField label="Name" name="name" />\n      {/* você passar uma função de mascara, você pode importar uma pronta ou criar a sua */}\n      <TextField label="Money" name="money" mask={moneyMask} />\n      <SelectField label="Options" name="option" options={options} />\n      {/* Por ser um type submit não precisa passar o form.handleSubmit */}\n      <Button type="submit" loading={form.isSubmitting}>\n        Submit\n      </Button>\n      {/* Por ser um type reset não precisa passar o form.handleReset */}\n      <Button variant="text" type="reset" disabled={form.isSubmitting}>\n        Reset\n      </Button>\n    </Form>\n  )\n}',__scope:(t={props:v,DefaultLayout:l.a,Playground:m.c,moneyMask:u.a,useForm:b.a,Button:s.a,Form:d.b,SelectField:c.a,TextField:p.a},t.DefaultLayout=l.a,t._frontmatter=j,t),mdxType:"Playground"},(function(){var e=Object(b.a)({initialValues:{money:5},validationSchema:function(e){return e.object().shape({name:e.string().required(),money:e.number().min(10),option:e.number().min(3)})},onSubmit:function(){return new Promise((function(e){setTimeout((function(){return e(null)}),3e3)}))}}),t=r.useState((function(){return[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3 (disabled)",disabled:!0},{value:4,label:"Option 4"},{value:5,label:"Option 5"}]}))[0];return Object(i.b)(d.b,{context:e,mdxType:"Form"},Object(i.b)(p.a,{label:"Name",name:"name",mdxType:"TextField"}),Object(i.b)(p.a,{label:"Money",name:"money",mask:u.a,mdxType:"TextField"}),Object(i.b)(c.a,{label:"Options",name:"option",options:t,mdxType:"SelectField"}),Object(i.b)(s.a,{type:"submit",loading:e.isSubmitting,mdxType:"Button"},"Submit"),Object(i.b)(s.a,{variant:"text",type:"reset",disabled:e.isSubmitting,mdxType:"Button"},"Reset"))})),Object(i.b)("h3",{id:"sem-o-contexto-de-formulário"},"Sem o contexto de formulário"),Object(i.b)("p",null,"Também é possível utilizar o componente de formulário sem utilizá-lo como um contexto,\npassando o formulário via propriedade:"),Object(i.b)(m.c,{__position:1,__code:'() => {\n  const form = useForm({\n    onSubmit: () => {},\n  })\n  return <TextField label="Name" name="name" form={form} />\n}',__scope:(n={props:v,DefaultLayout:l.a,Playground:m.c,moneyMask:u.a,useForm:b.a,Button:s.a,Form:d.b,SelectField:c.a,TextField:p.a},n.DefaultLayout=l.a,n._frontmatter=j,n),mdxType:"Playground"},(function(){var e=Object(b.a)({onSubmit:function(){}});return Object(i.b)(p.a,{label:"Name",name:"name",form:e,mdxType:"TextField"})})),Object(i.b)("h3",{id:"campos-dinâmicos"},"Campos dinâmicos"),Object(i.b)(m.c,{__position:2,__code:"() => {\n  const form = useForm({\n    initialValues: {\n      users: [{ id: '', age: '', name: '' }],\n    },\n    validationSchema: yup => {\n      return yup.object().shape({\n        users: yup\n          .array()\n          .of(\n            yup.object().shape({\n              id: yup.number().required('Por favor, preencha o campo ID.'),\n              name: yup.string().required(),\n              age: yup.number().required(),\n            }),\n          )\n          .min(1)\n          .required(),\n      })\n    },\n    onSubmitWithErrors: err => console.log('failed', err),\n    onSubmit: values => console.log('success', values),\n  })\n  const values = React.useMemo(() => form.getFieldValue('users'), [form])\n  const handleClickAdd = React.useCallback(() => {\n    form.setFieldValue(`users[${values.length}]`, {})\n    setTimeout(() => form.setErrors({}), 50)\n  }, [form, values.length])\n  const handleClickRemove = React.useCallback(\n    index => {\n      const newUsers = values.filter((_, i) => i !== index)\n      form.setFieldValue('users', newUsers)\n    },\n    [form, values],\n  )\n  return (\n    <Form context={form}>\n      {values.map((_, index) => (\n        <div\n          style={{\n            borderBottom: '1px solid #ccc',\n            paddingBottom: 10,\n            marginBottom: 20,\n          }}\n          key={index}\n        >\n          <TextField name={`users.${index}.id`} label=\"ID\" />\n          <TextField name={`users.${index}.name`} label=\"Nome\" />\n          <TextField name={`users.${index}.age`} label=\"Idade\" />\n          <Button variant=\"text\" onClick={() => handleClickRemove(index)}>\n            Remover linha\n          </Button>\n        </div>\n      ))}\n      <Button variant=\"text\" onClick={handleClickAdd}>\n        Adicionar linha\n      </Button>\n      <Button type=\"submit\">Enviar</Button>\n    </Form>\n  )\n}",__scope:(g={props:v,DefaultLayout:l.a,Playground:m.c,moneyMask:u.a,useForm:b.a,Button:s.a,Form:d.b,SelectField:c.a,TextField:p.a},g.DefaultLayout=l.a,g._frontmatter=j,g),mdxType:"Playground"},(function(){var e=Object(b.a)({initialValues:{users:[{id:"",age:"",name:""}]},validationSchema:function(e){return e.object().shape({users:e.array().of(e.object().shape({id:e.number().required("Por favor, preencha o campo ID."),name:e.string().required(),age:e.number().required()})).min(1).required()})},onSubmitWithErrors:function(e){return console.log("failed",e)},onSubmit:function(e){return console.log("success",e)}}),t=r.useMemo((function(){return e.getFieldValue("users")}),[e]),n=r.useCallback((function(){e.setFieldValue("users["+t.length+"]",{}),setTimeout((function(){return e.setErrors({})}),50)}),[e,t.length]),a=r.useCallback((function(n){var a=t.filter((function(e,t){return t!==n}));e.setFieldValue("users",a)}),[e,t]);return Object(i.b)(d.b,{context:e,mdxType:"Form"},t.map((function(e,t){return Object(i.b)("div",{style:{borderBottom:"1px solid #ccc",paddingBottom:10,marginBottom:20},key:t},Object(i.b)(p.a,{name:"users."+t+".id",label:"ID",mdxType:"TextField"}),Object(i.b)(p.a,{name:"users."+t+".name",label:"Nome",mdxType:"TextField"}),Object(i.b)(p.a,{name:"users."+t+".age",label:"Idade",mdxType:"TextField"}),Object(i.b)(s.a,{variant:"text",onClick:function(){return a(t)},mdxType:"Button"},"Remover linha"))})),Object(i.b)(s.a,{variant:"text",onClick:n,mdxType:"Button"},"Adicionar linha"),Object(i.b)(s.a,{type:"submit",mdxType:"Button"},"Enviar"))})),Object(i.b)("h3",{id:"hooks-para-validação-de-formulários-e-máscaras"},"Hooks para validação de formulários e máscaras"),Object(i.b)("p",null,"Veja os hooks do Houston para validar formulários e máscaras em ",Object(i.b)("a",{parentName:"p",href:"https://github.com/eduzz/houston/tree/master/src/packages/forms"},"@eduzz/houston-forms"),"."),Object(i.b)("h3",{id:"propriedades"},"Propriedades"),Object(i.b)("h3",{id:"form-props"},"Form props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"prop"),Object(i.b)("th",{parentName:"tr",align:null},"tipo"),Object(i.b)("th",{parentName:"tr",align:null},"obrigatório"),Object(i.b)("th",{parentName:"tr",align:null},"padrão"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"context"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"IFormAdapter")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",{parentName:"tr",align:null},"-")))),Object(i.b)("h3",{id:"useform-props"},"useForm props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"prop"),Object(i.b)("th",{parentName:"tr",align:null},"tipo"),Object(i.b)("th",{parentName:"tr",align:null},"obrigatório"),Object(i.b)("th",{parentName:"tr",align:null},"descrição"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"initialValues"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"Partial<any>")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"false")),Object(i.b)("td",{parentName:"tr",align:null},"Estado inicial do formulário, não sendo necessário passar todas as propriedades")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"validationSchema"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"function")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"false")),Object(i.b)("td",{parentName:"tr",align:null},"Utilizado para validação do formulário, não sendo necessário importar o yup, pois ele será passado como argumento")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"onSubmitWithErrors"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"function")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"false")),Object(i.b)("td",{parentName:"tr",align:null},"É possível passar os erros do ",Object(i.b)("inlineCode",{parentName:"td"},"Formik")," como argumento")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"onSubmit"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"function"),", ",Object(i.b)("inlineCode",{parentName:"td"},"Promise<any>"),", ",Object(i.b)("inlineCode",{parentName:"td"},"Observable<any>")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",{parentName:"tr",align:null},"Pode retornar uma ",Object(i.b)("inlineCode",{parentName:"td"},"Promise")," ou um ",Object(i.b)("inlineCode",{parentName:"td"},"Observable")," em RxJS, definindo corretamente o ",Object(i.b)("inlineCode",{parentName:"td"},"isSubmitting"))))))}void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"packages/ui-components/Forms/example.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-ui-components-forms-example-mdx-57eccd818465d15e9469.js.map