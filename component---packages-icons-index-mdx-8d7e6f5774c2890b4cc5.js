(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"1Pvk":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return b})),t.d(n,"default",(function(){return O}));var a=t("cxan"),o=t("+wNj"),c=(t("Tz2Q"),t("ERkP")),r=t("ZVZ0"),i=t("9Rvw"),s=t("qbsg"),l=t("K5iU"),u=t("Q9RW"),m=t("E1Lo"),d=t("Mre/"),p=(t("l1C2"),["components"]),b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"packages/icons/index.mdx"}});h="CurrentIcon";var h,f={_frontmatter:b},v=i.a;function O(e){var n,t=e.components,h=Object(o.a)(e,p);return Object(r.b)(v,Object(a.a)({},f,h,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"ícones"},"Ícones"),Object(r.b)("p",null,"Coleção de ícones do Houston."),Object(r.b)("h3",{id:"lista-de-ícones"},"Lista de ícones"),Object(r.b)(s.c,{__position:0,__code:'() => {\n  const initialIcons = Object.entries(Icon).map(([name, CurrentIcon]) => ({\n    icon: <CurrentIcon size={\'large\'} />,\n    name,\n  }))\n  const [currentIcons, setCurrentIcons] = React.useState([])\n  const [search, setSearch] = React.useState(\'\')\n  const handleChangeSearch = React.useCallback(\n    value => {\n      setSearch(value)\n      if (!value) {\n        setSearch(\'\')\n        setCurrentIcons([])\n        return\n      }\n      const currentValue = value.toLowerCase()\n      const searched = initialIcons.filter(\n        i =>\n          i.name.toLowerCase().startsWith(currentValue) ||\n          i.name.toLowerCase() === currentValue,\n      )\n      setCurrentIcons(searched)\n    },\n    [initialIcons],\n  )\n  const icons = search ? currentIcons : initialIcons\n  return (\n    <div className="list-icons">\n      <TextField\n        value={search}\n        onChange={handleChangeSearch}\n        placeholder="Busque por ícones"\n        endAdornment={<Icon.SearchOutline />}\n      />\n      {icons.length > 0 &&\n        icons\n          .sort((a, b) => a.name.localeCompare(b.name))\n          .map((icon, index) => (\n            <div key={`icon-${index}`} className="icon-preview">\n              {icon.icon}\n              <Tooltip title={icon.name} placement="bottom">\n                <div className="name">{icon.name}</div>\n              </Tooltip>\n            </div>\n          ))}\n      {icons.length === 0 && (\n        <Typography>Nenhum ícone encontrado...</Typography>\n      )}\n    </div>\n  )\n}',__scope:(n={props:h,DefaultLayout:i.a,Playground:s.c,TextField:l.a,Tooltip:u.a,Typography:m.a,Icon:d},n.DefaultLayout=i.a,n._frontmatter=b,n),mdxType:"Playground"},(function(){var e=Object.entries(d).map((function(e){var n=e[0],t=e[1];return{icon:Object(r.b)(t,{size:"large",mdxType:"CurrentIcon"}),name:n}})),n=c.useState([]),t=n[0],a=n[1],o=c.useState(""),i=o[0],s=o[1],p=c.useCallback((function(n){if(s(n),!n)return s(""),void a([]);var t=n.toLowerCase(),o=e.filter((function(e){return e.name.toLowerCase().startsWith(t)||e.name.toLowerCase()===t}));a(o)}),[e]),b=i?t:e;return Object(r.b)("div",{className:"list-icons"},Object(r.b)(l.a,{value:i,onChange:p,placeholder:"Busque por ícones",endAdornment:Object(r.b)(d.SearchOutline,null),mdxType:"TextField"}),b.length>0&&b.sort((function(e,n){return e.name.localeCompare(n.name)})).map((function(e,n){return Object(r.b)("div",{key:"icon-"+n,className:"icon-preview"},e.icon,Object(r.b)(u.a,{title:e.name,placement:"bottom",mdxType:"Tooltip"},Object(r.b)("div",{className:"name"},e.name)))})),0===b.length&&Object(r.b)(m.a,{mdxType:"Typography"},"Nenhum ícone encontrado..."))})))}void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"packages/icons/index.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-icons-index-mdx-8d7e6f5774c2890b4cc5.js.map