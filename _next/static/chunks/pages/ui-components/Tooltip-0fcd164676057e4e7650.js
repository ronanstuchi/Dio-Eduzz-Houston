(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9869],{399203:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(759312),r=o(824246),n=(0,i.__importStar)(o(827378)),a=(0,i.__importDefault)(o(858423)),l=(0,i.__importDefault)(o(880910));e.default=n.memo((function(t){var e=t.children,o=t.disabled,n=void 0!==o&&o,d=t.variant,u=void 0===d?"contained":d,s=t.startIcon,m=t.loading,p=void 0!==m&&m,c=t.loadingText,f=(0,i.__rest)(t,["children","disabled","variant","startIcon","loading","loadingText"]);return(0,r.jsxs)(a.default,(0,i.__assign)({},f,{disabled:n||p,startIcon:p?(0,r.jsx)(l.default,{size:18,color:"inherit"},void 0):s,disableRipple:!0,disableFocusRipple:!0,disableElevation:!0,disableTouchRipple:!0,variant:u,color:"primary"},{children:[!p&&e,p&&(null!==c&&void 0!==c?c:e)]}),void 0)}))},89127:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(759312),r=o(824246),n=(0,i.__importStar)(o(827378)),a=(0,i.__importDefault)(o(847577)),l=n.forwardRef((function(t,e){var o=t.className,n=(0,i.__rest)(t,["className"]);return(0,r.jsx)(a.default,(0,i.__assign)({},n,{item:!0,className:o,ref:e}),void 0)}));e.default=l},815684:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(759312),r=o(824246),n=(0,i.__importStar)(o(827378)),a=(0,i.__importDefault)(o(847577)),l=o(455693),d=o(641013),u=o(417790),s=n.forwardRef((function(t,e){var o=t.className,s=t.spacing,m=(0,i.__rest)(t,["className","spacing"]),p=(0,l.useContextSelector)(d.GridContext,(function(t){return t.spacing})),c=n.useMemo((function(){var t;return u.ContainerSizes[null!==(t=null!==s&&void 0!==s?s:p)&&void 0!==t?t:"cozy"]}),[p,s]);return(0,r.jsx)(a.default,(0,i.__assign)({},m,{container:!0,ref:e,className:o,spacing:c}),void 0)}));e.default=n.memo(s)},641013:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GridContext=void 0;var i=o(455693);e.GridContext=(0,i.createContext)({});var r=e.GridContext.Provider;e.default=r},417790:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ContainerSizes=void 0,e.ContainerSizes={comfortable:10,cozy:4,compact:2}},430162:function(t,e,o){"use strict";var i=o(759312),r=o(824246),n=(0,i.__importStar)(o(827378)),a=(0,i.__importDefault)(o(575077)),l=n.forwardRef((function(t,e){var o=t.children,n=t.className,a=(0,i.__rest)(t,["children","className"]);return(0,r.jsx)("div",(0,i.__assign)({className:n},a,{ref:e,style:{display:"inline-flex"}},{children:o}),void 0)}));e.Z=n.memo((function(t){var e=t.placement,o=void 0===e?"top":e,n=t.children,d=t.disabled,u=void 0!==d&&d,s=t.className,m=(0,i.__rest)(t,["placement","children","disabled","className"]);return(0,r.jsx)(a.default,(0,i.__assign)({},m,{disableTouchListener:u,disableHoverListener:u,disableFocusListener:u,placement:o,arrow:!0},{children:(0,r.jsx)(l,{children:n,className:s},void 0)}),void 0)}))},532032:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(759312),r=o(824246),n=o(827378),a=(0,i.__importDefault)(o(483813)),l=(0,n.forwardRef)((function(t,e){return(0,r.jsx)(a.default,(0,i.__assign)({direction:"up"},t,{ref:e}),void 0)}));e.default=l},970967:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(759312),r=(0,i.__importDefault)(o(532032)),n=(0,i.__importDefault)(o(788583));e.default=function(t){return{MuiDialog:{defaultProps:{TransitionComponent:r.default}},MuiButton:{styleOverrides:{root:{textTransform:"none",padding:"10px 16px",height:40,borderRadius:n.default.radius(),fontWeight:n.default.fontWeight("semibold"),fontFamily:n.default.fontFamily,lineHeight:n.default.lineHeight("compact"),fontSize:n.default.textSize("small"),"&:before":{content:'" "',position:"absolute",left:-4,right:-4,top:-4,bottom:-4,border:"2px solid transparent",transition:"0.3s",borderRadius:n.default.radius(2)},"&:focus:not(:active):not(:hover):before":{borderColor:n.default.colors.grey[300]}},iconSizeMedium:{"& > *:first-child":{fontSize:15}},sizeSmall:{height:30},sizeLarge:{height:50},startIcon:{marginRight:8},containedPrimary:{"&:hover":{backgroundColor:t.primary.light},"&:active":{backgroundColor:t.primary.dark},"&.Mui-disabled":{color:t.grey[500],backgroundColor:t.grey[300]}},outlinedPrimary:{borderColor:t.primary.light,"&:before":{left:-5,right:-5,top:-5,bottom:-5},"&:hover":{backgroundColor:"transparent"},"&:active":{borderColor:t.primary.dark,color:t.primary.dark},"&.Mui-disabled":{color:t.grey[300],borderColor:t.grey[300]}},text:{"&.Mui-disabled":{color:t.grey[300]}}}},MuiTextField:{styleOverrides:{root:{"&.input-size-small":{"& input":{height:35,padding:"4px 12px"},"& label":{transform:"translate("+n.default.spacing(4)+"px, "+(n.default.spacing(2)+2)+"px) scale(1)"}}}}},MuiInputBase:{styleOverrides:{root:{fontFamily:n.default.fontFamily,"&.Mui-disabled":{backgroundColor:t.grey[100]}}}},MuiSelect:{styleOverrides:{select:{"&:focus":{backgroundColor:"transparent"},"&.input-size-small":{height:35,padding:"8px 32px 8px 12px"}},iconOutlined:{right:4},icon:{top:"calc(50% - 14px)"}}},MuiSwitch:{styleOverrides:{root:{width:36,height:40,padding:0,alignItems:"center",overflow:"unset"},switchBase:{left:-10,padding:12,overflow:"hidden","&.Mui-checked":{transform:"translateX(16px)","& > .MuiSwitch-thumb":{color:"white"},"& + .MuiSwitch-track":{backgroundColor:t.primary.main,borderColor:t.primary.main,opacity:"1 !important"}},"&.Mui-disabled":{color:t.grey[400],"& > .MuiSwitch-thumb":{color:t.grey[400]},"& + .MuiSwitch-track":{backgroundColor:t.grey[300],opacity:"1 !important",borderColor:t.grey[300]}}},thumb:{width:16,height:16,boxShadow:"none",transition:"color 150ms cubic-bezier(0.4, 0, 0.2, 1)","&:hover":{color:t.primary.light}},track:{backgroundColor:t.grey[300],border:"2px solid "+t.grey[300],width:36,height:20,borderRadius:10,opacity:"1 !important"},sizeSmall:{width:28,height:40,padding:0,alignItems:"center",overflow:"unset","& > .MuiSwitch-switchBase":{top:2,padding:12,"& + .MuiSwitch-track":{width:28,height:16},"&.Mui-checked":{transform:"translateX(12px)"},"& > .MuiSwitch-thumb":{width:12,height:12}}}}},MuiOutlinedInput:{styleOverrides:{input:{height:45,boxSizing:"border-box",fontSize:n.default.textSize(),padding:n.default.spacing(3)+"px "+n.default.spacing(4)+"px"},inputMultiline:{minHeight:96}}},MuiFormHelperText:{styleOverrides:{root:{fontFamily:n.default.fontFamily,fontSize:n.default.textSize("x-small"),lineHeight:n.default.lineHeight("compact")},contained:{marginLeft:2,marginRight:0}}},MuiFormControlLabel:{styleOverrides:{root:{color:t.grey[500],fontFamily:n.default.fontFamily}}},MuiFormControl:{styleOverrides:{marginNormal:{marginTop:n.default.spacing(1),marginBottom:n.default.spacing(3)}}},MuiFormLabel:{styleOverrides:{root:{color:t.grey[500],fontFamily:n.default.fontFamily}}},MuiInputLabel:{styleOverrides:{root:{fontFamily:n.default.fontFamily,fontSize:n.default.textSize()},outlined:{transform:"translate(16px, 12px) scale(1)"},shrink:{transform:"translate(16px, -6px) scale(0.70) !important"}}},MuiAlertTitle:{styleOverrides:{root:{fontWeight:n.default.fontWeight("semibold")}}},MuiAlert:{styleOverrides:{root:{borderRadius:4},icon:{color:t.grey[600]+" !important"},action:{marginRight:0,"&:empty":{display:"none"}},message:{fontWeight:n.default.fontWeight("regular"),color:t.grey[600],width:"100%"},standardSuccess:{backgroundColor:t.success.light},standardError:{backgroundColor:t.error.light},standardInfo:{backgroundColor:t.info.light},standardWarning:{backgroundColor:t.warning.light}}},MuiTableRow:{styleOverrides:{root:{"&$selected":{background:"rgba(177, 177, 177, 0.08)"},"&$hover":{"&:hover":{background:t.grey[100]}}}}},MuiTableCell:{styleOverrides:{root:{padding:"12px 20px",borderColor:t.grey[200],color:t.grey[600]},head:{fontWeight:n.default.fontWeight("semibold"),color:t.grey[600],lineHeight:n.default.lineHeight("compact")},body:{color:t.grey[600]},sizeSmall:{fontSize:n.default.textSize("small"),padding:"8px 12px"}}},MuiTableSortLabel:{styleOverrides:{root:{color:t.grey[600],"&:focus":{color:"inherit"},"&$active":{color:t.grey[600],"&$root":{"&$active":{"& $icon":{color:t.grey[600]}}}}}}},MuiMenuItem:{styleOverrides:{root:{fontSize:n.default.textSize("normal"),fontWeight:n.default.fontWeight("regular")}}},MuiPaginationItem:{styleOverrides:{root:{margin:"0 1px",minWidth:32,minHeight:28,padding:0,fontWeight:n.default.fontWeight("semibold"),"&$selected":{color:t.primary.main},"@media screen and (max-width: 599.95px)":{width:26,minWidth:26,height:24}}}},MuiPagination:{styleOverrides:{ul:{"& li":{"&:first-child, &:last-child":{borderRadius:4},"&:first-child":{marginRight:2},"&:last-child":{marginLeft:2}}}}},MuiIconButton:{styleOverrides:{colorPrimary:{"&:hover, &:focus":{backgroundColor:""+t.grey[200]},"&:active":{backgroundColor:""+t.grey[300]}}}},MuiTabs:{styleOverrides:{root:{height:40,minHeight:40,borderBottom:"1px solid "+t.grey[200]},scrollButtons:{color:t.primary.main,opacity:1,"&.Mui-disabled":{opacity:1,color:t.grey[300]}}}},MuiTab:{styleOverrides:{root:{height:40,minHeight:40,minWidth:"0 !important",lineHeight:n.default.lineHeight("normal"),fontSize:n.default.textSize("small"),fontWeight:n.default.fontWeight("semibold"),textTransform:"none",padding:"0px "+n.default.spacing(4)+"px"},labelIcon:{minHeight:40,paddingTop:0,flexDirection:"row","& > svg":{marginBottom:"0 !important",maxWidth:20,maxHeight:20,marginRight:n.default.spacing(2)}},textColorPrimary:{color:t.grey[400],transition:"0.3s",border:"2px solid transparent",borderBottom:"none",borderRadius:n.default.radius(1)+"px "+n.default.radius(1)+"px 0 0","& svg":{fill:t.grey[500],transition:"0.3s"},"&:focus":{borderColor:t.grey[300]},"&:hover:not($selected):not(:active)":{color:t.primary.light,"& svg":{fill:t.primary.light}},"&:active":{color:t.primary.dark,"& svg":{fill:t.primary.dark}},"&$selected":{color:t.primary.main,"& svg":{fill:t.primary.main}},"&.Mui-disabled":{color:t.grey[300],"& svg":{fill:t.grey[300]}}}}},MuiTooltip:{styleOverrides:{tooltip:{fontSize:n.default.textSize("x-small"),backgroundColor:t.grey[600],letterSpacing:.5},arrow:{color:t.grey[600]}}},MuiTypography:{styleOverrides:{body2:{color:t.grey[400]}}},MuiStep:{styleOverrides:{horizontal:{paddingLeft:0,paddingRight:0}}},MuiStepLabel:{styleOverrides:{root:{"&$error":{color:t.error.main}},label:{color:t.grey[300],fontSize:n.default.textSize("default"),lineHeight:1.5,fontWeight:n.default.fontWeight("semibold"),"&$active":{color:t.success.main,fontWeight:n.default.fontWeight("semibold")},"&$completed":{color:t.success.main,fontWeight:n.default.fontWeight("semibold")}},iconContainer:{paddingRight:18}}}}}},823577:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(759312),r=o(857256),n=(0,i.__importDefault)(o(970967)),a=(0,i.__importDefault)(o(26060)),l=(0,i.__importDefault)(o(788583));e.default=function(t){var e,o=(0,i.__assign)((0,i.__assign)({},l.default.colors),null!==(e=null===t||void 0===t?void 0:t.colors)&&void 0!==e?e:{});return(0,r.createTheme)((0,i.__assign)((0,i.__assign)({palette:o,components:(0,n.default)(o),typography:a.default},l.default),{variables:null===t||void 0===t?void 0:t.variables,colors:o}))}},26060:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(0,o(759312).__importDefault)(o(788583)),r={fontFamily:i.default.fontFamily,fontSize:i.default.textSize(),body1:{fontFamily:i.default.fontFamily,fontSize:i.default.textSize(),fontWeight:i.default.fontWeight()},body2:{fontFamily:i.default.fontFamily,fontSize:i.default.textSize(),fontWeight:i.default.fontWeight()},button:{fontWeight:i.default.fontWeight("semibold")}};e.default=r},808874:function(t,e){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),e.getCurrentTime=e.setCurrentTheme=void 0,e.setCurrentTheme=function(t){o=t},e.getCurrentTime=function(){return o}},826034:function(t,e,o){"use strict";var i=o(759312),r=o(824246),n=(0,i.__importStar)(o(827378)),a=(0,i.__importDefault)(o(100735)),l=o(857256),d=(0,i.__importDefault)(o(558625)),u=(0,i.__importDefault)(o(823577)),s=(0,i.__importDefault)(o(788583)),m=o(808874);e.Z=n.memo((function(t){var e=t.children,o=t.theme,p=t.disableCssBaseline,c=t.disabledFontBase,f=t.disableToast,g=n.useMemo((function(){return(0,u.default)(o)}),[o]),h=n.useMemo((function(){return!c&&"\n        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700');\n\n        body {\n          font-family: "+s.default.fontFamily+";\n          font-size: "+s.default.textSize("default")+"px;\n        }\n      "}),[c]),y=n.useMemo((function(){return{__html:"\n        form {\n          width: 100%;\n        }\n\n        .houston-icon {\n          line-height: 0;\n        }\n\n        "+h+"\n      "}}),[h]);return n.useEffect((function(){return(0,m.setCurrentTheme)(g)}),[g]),(0,r.jsx)(l.StyledEngineProvider,(0,i.__assign)({injectFirst:!0},{children:(0,r.jsxs)(l.ThemeProvider,(0,i.__assign)({theme:g},{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:y},void 0),!f&&(0,r.jsx)(d.default,{},void 0),!p&&(0,r.jsx)(a.default,{},void 0),e]}),void 0)}),void 0)}))},699763:function(t,e,o){"use strict";o.r(e),o.d(e,{meta:function(){return p},default:function(){return f}});var i=o(987397),r=o(831750),n=(o(827378),o(735318)),a=o(112696),l=o(399203),d=o(89127),u=o(815684),s=o(430162),m=["components"],p={name:"Tooltip",tableOfContents:{depth:0,children:[{depth:1,slug:"#tooltip",title:"Tooltip",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#dire\xe7\xe3o",title:"Dire\xe7\xe3o"}]}]}]}},c={meta:p};function f(t){var e=t.components,o=(0,r.Z)(t,m);return(0,n.kt)("wrapper",(0,i.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tooltip"},"Tooltip"),(0,n.kt)("p",null,"Usado para identificar elementos e descrever funcionalidades."),(0,n.kt)("h3",{id:"importa\xe7\xe3o"},"Importa\xe7\xe3o"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import Tooltip from '@eduzz/houston-ui/Tooltip';\n")),(0,n.kt)("h3",{id:"exemplo"},"Exemplo"),(0,n.kt)(a.X,{__position:0,code:'<Row>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor">\n      <Button>John Doe</Button>\n    </Tooltip>\n  </Column>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor" disabled>\n      <Button>Tooltip desabilitado</Button>\n    </Tooltip>\n  </Column>\n</Row>',scope:{props:o,Playground:a.X,Button:l.default,Column:d.default,Row:u.default,Tooltip:s.Z,meta:p},mdxType:"Playground"},(0,n.kt)(u.default,{mdxType:"Row"},(0,n.kt)(d.default,{mdxType:"Column"},(0,n.kt)(s.Z,{title:"Lorem ipsum dolor",mdxType:"Tooltip"},(0,n.kt)(l.default,{mdxType:"Button"},"John Doe"))),(0,n.kt)(d.default,{mdxType:"Column"},(0,n.kt)(s.Z,{title:"Lorem ipsum dolor",disabled:!0,mdxType:"Tooltip"},(0,n.kt)(l.default,{mdxType:"Button"},"Tooltip desabilitado"))))),(0,n.kt)("h3",{id:"dire\xe7\xe3o"},"Dire\xe7\xe3o"),(0,n.kt)(a.X,{__position:1,code:'<Row>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor">\n      <Button>Top</Button>\n    </Tooltip>\n  </Column>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor" placement="bottom">\n      <Button>Bottom</Button>\n    </Tooltip>\n  </Column>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor" placement="left">\n      <Button>Left</Button>\n    </Tooltip>\n  </Column>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor" placement="right">\n      <Button>Right</Button>\n    </Tooltip>\n  </Column>\n</Row>',scope:{props:o,Playground:a.X,Button:l.default,Column:d.default,Row:u.default,Tooltip:s.Z,meta:p},mdxType:"Playground"},(0,n.kt)(u.default,{mdxType:"Row"},(0,n.kt)(d.default,{mdxType:"Column"},(0,n.kt)(s.Z,{title:"Lorem ipsum dolor",mdxType:"Tooltip"},(0,n.kt)(l.default,{mdxType:"Button"},"Top"))),(0,n.kt)(d.default,{mdxType:"Column"},(0,n.kt)(s.Z,{title:"Lorem ipsum dolor",placement:"bottom",mdxType:"Tooltip"},(0,n.kt)(l.default,{mdxType:"Button"},"Bottom"))),(0,n.kt)(d.default,{mdxType:"Column"},(0,n.kt)(s.Z,{title:"Lorem ipsum dolor",placement:"left",mdxType:"Tooltip"},(0,n.kt)(l.default,{mdxType:"Button"},"Left"))),(0,n.kt)(d.default,{mdxType:"Column"},(0,n.kt)(s.Z,{title:"Lorem ipsum dolor",placement:"right",mdxType:"Tooltip"},(0,n.kt)(l.default,{mdxType:"Button"},"Right"))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"prop"),(0,n.kt)("th",{parentName:"tr",align:null},"tipo"),(0,n.kt)("th",{parentName:"tr",align:null},"obrigat\xf3rio"),(0,n.kt)("th",{parentName:"tr",align:null},"padr\xe3o"),(0,n.kt)("th",{parentName:"tr",align:null},"descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"title"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"disabled"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"placement"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ITooltipPlacement")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"top")),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"open"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:null},"Se verdadeiro, sempre exibir\xe1 o ",(0,n.kt)("inlineCode",{parentName:"td"},"title"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onOpen"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"function")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onClose"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"function")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-")))))}f.isMDXComponent=!0;var g={editThisPagePath:"src/pages/ui-components/Tooltip/index.mdx"};for(var h in g)window[h]=g[h]},179798:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Tooltip",function(){return o(699763)}])}},function(t){t.O(0,[4526,4375,6844,7456,6467,5077,5754,9774,2888,179],(function(){return e=179798,t(t.s=e);var e}));var e=t.O();_N_E=e}]);