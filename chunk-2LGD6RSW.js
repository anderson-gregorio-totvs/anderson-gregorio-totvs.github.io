import{$ as d,Ga as e,Od as b,T as c,U as u,Wb as S,Xd as h,Yb as f,Yd as v,Zb as E,_ as l,ha as s,na as t,oa as o,pa as p,re as g,se as D,y as m}from"./chunk-TZ5FQAUY.js";var P=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["sample-po-step-doc"]],standalone:!1,decls:228,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-stepper"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","((currentStep)","=>","boolean)"],["pan","",1,"docs-api-property-type","((currentStep)","=>","Observable<boolean>)"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["href","https://phosphoricons.com/"]],template:function(n,r){n&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoStepperModule } from '@po-ui/ng-components';"),o()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-stepper"),o()(),t(7,"h3",3),e(8,"Componente"),o(),t(9,"h4",4)(10,"code",5),e(11,"PoStepComponent"),o()(),t(12,"div",2)(13,"p"),e(14,"O componente "),t(15,"code"),e(16,"po-step"),o(),e(17," \xE9 utilizado para envolver e renderizar o conte\xFAdo de um passo ("),t(18,"em"),e(19,"step"),o(),e(20,") do "),t(21,"code"),e(22,"po-stepper"),o(),e(23,", por exemplo:"),o(),t(24,"pre")(25,"code"),e(26,`<po-stepper>

  <po-step p-label="Endere\xE7o">

      <!-- Conte\xFAdo referente ao endere\xE7o -->

  </po-step>

  <po-step p-label="Pagamento">

      <!-- Conte\xFAdo referente ao pagamento -->

  </po-step>

</po-stepper>`),o()(),t(27,"p"),e(28,`A renderiza\xE7\xE3o do conte\xFAdo envolvido na tela e o controle dos status s\xE3o feitos automaticamente. No qual, o primeiro
`),t(29,"code"),e(30,"po-step"),o(),e(31," encontrado ser\xE1 colocado como ativo, o pr\xF3ximo fica com o status "),t(32,"em"),e(33,"default"),o(),e(34,` e os demais ficam
desabilitados (`),t(35,"em"),e(36,"disabled"),o(),e(37,")."),o(),t(38,"p"),e(39,"Ao clicar no "),t(40,"code"),e(41,"po-step"),o(),e(42," que est\xE1 com o status "),t(43,"em"),e(44,"default"),o(),e(45,`, o que est\xE1 ativo ficar\xE1 com o
status de conclu\xEDdo (`),t(46,"em"),e(47,"done"),o(),e(48,") e o pr\xF3ximo que estava desabilitado ficar\xE1 com o status "),t(49,"em"),e(50,"default"),o(),e(51,` e o restante permanecer\xE1
com o status desabilitado.`),o(),t(52,"blockquote")(53,"p"),e(54,"Ao utilizar o "),t(55,"code"),e(56,"po-step"),o(),e(57,", o componente "),t(58,"code"),e(59,"po-stepper"),o(),e(60,` funcionar\xE1 de forma sequencial, ou seja, n\xE3o ser\xE1 poss\xEDvel
pular para outro `),t(61,"code"),e(62,"po-step"),o(),e(63," que esteja com o status igual a desabilitado ("),t(64,"em"),e(65,"disabled"),o(),e(66,")."),o()(),t(67,"p"),e(68,"Acesse a "),t(69,"a",6),e(70,"documenta\xE7\xE3o do "),t(71,"code"),e(72,"po-stepper"),o()(),e(73,` para ter mais informa\xE7\xF5es sobre o seu funcionamento
e exemplos de uso.`),o()(),t(74,"div",7)(75,"h4",8),e(76,"Seletor"),o(),t(77,"pre",9),e(78,`<po-step
    p-can-active-next-step="((currentStep) => boolean) | ((currentStep) => Observable<boolean>)"
    p-icon-default="string | TemplateRef<void>"
    p-label="string" >
</po-step>
`),o()(),t(79,"h4",10),e(80,"Propriedades"),o(),t(81,"table",11)(82,"tr",12)(83,"th",13),e(84,"Nome"),o(),t(85,"th",13),e(86,"Tipo"),o(),t(87,"th",13),e(88,"Padr\xE3o"),o(),t(89,"th",13),e(90,"Descri\xE7\xE3o"),o()(),t(91,"tr",14)(92,"td",15)(93,"div",16)(94,"span",17),e(95," p-can-active-next-step"),p(96,"br"),o()()(),t(97,"td",18)(98,"code",19),e(99,"((currentStep) => boolean) "),o(),t(100,"code",20),e(101," ((currentStep) => Observable<boolean>)"),o()(),t(102,"td",21),e(103,"-"),o(),t(104,"td",22)(105,"em")(106,"strong"),e(107,"(opcional)"),o()(),t(108,"p"),e(109,"Fun\xE7\xE3o chamada quando o pr\xF3ximo "),t(110,"em"),e(111,"step"),o(),e(112," for clicado ou quando o m\xE9todo "),t(113,"code"),e(114,"PoStepperComponent.next()"),o(),e(115,` for chamado.
Ao retornar `),t(116,"code"),e(117,"true"),o(),e(118," define que esse "),t(119,"em"),e(120,"step"),o(),e(121," ficar\xE1 ativo e o atual como conclu\xEDdo ("),t(122,"em"),e(123,"done"),o(),e(124,`).
Tamb\xE9m aceita fun\xE7\xF5es que retornem `),t(125,"code"),e(126,"Observable<boolean>"),o(),e(127,". Ao retornar um "),t(128,"code"),e(129,"Observable<boolean>"),o(),e(130,`,
garanta que esse `),t(131,"code"),e(132,"Observable"),o(),e(133,` ser\xE1 completado, caso houver algum erro durante o processo n\xE3o ser\xE1 poss\xEDvel prosseguir
ao pr\xF3ximo `),t(134,"em"),e(135,"step"),o(),e(136,"."),o(),t(137,"p"),e(138,"Ao ser disparada, a mesma receber\xE1 por par\xE2metro o "),t(139,"code"),e(140,"PoStepComponent"),o(),e(141," atual."),o(),t(142,"p"),e(143,"O contexto da fun\xE7\xE3o que ser\xE1 chamada, ser\xE1 o mesmo que o do "),t(144,"code"),e(145,"PoStepComponent"),o(),e(146,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),t(147,"code"),e(148,"bind"),o(),e(149,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),t(150,"code"),e(151,"validate"),o(),e(152,":"),o(),t(153,"pre")(154,"code"),e(155,`<po-step p-label="Step 1" [p-can-active-next-step]="validate.bind(this)">
...
</po-step>`),o()()()(),t(156,"tr",14)(157,"td",15)(158,"div",16)(159,"span",17),e(160," p-icon-default"),p(161,"br"),o()()(),t(162,"td",18)(163,"code",23),e(164,"string "),o(),t(165,"code",24),e(166," TemplateRef<void>"),o()(),t(167,"td",21),e(168,"-"),o(),t(169,"td",22)(170,"em")(171,"strong"),e(172,"(opcional)"),o()(),t(173,"p"),e(174,"Define o \xEDcone padr\xE3o do step em seu status "),t(175,"em"),e(176,"default"),o(),e(177,`.
Esta propriedade permite usar \xEDcones da `),t(178,"a",25),e(179,"Biblioteca de \xEDcones"),o(),e(180," ou da biblioteca "),t(181,"a",26),e(182,"Phosphor"),o(),e(183,"."),o(),t(184,"p"),e(185,"Exemplo usando a biblioteca de \xEDcones padr\xE3o:"),o(),t(186,"pre")(187,"code"),e(188,`<po-stepper>
   ...
   <po-step p-icon-default="po-icon po-icon-pin"></po-step>
</po-stepper>`),o()(),t(189,"p"),e(190,"Exemplo usando a biblioteca "),t(191,"em"),e(192,"Phosphor"),o(),e(193,":"),o(),t(194,"pre")(195,"code"),e(196,`<po-stepper>
   ...
   <po-step p-icon-default="ph ph-map-pin"></po-step>
</po-stepper>`),o()(),t(197,"p"),e(198,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(199,"code"),e(200,"TemplateRef"),o(),e(201,", conforme exemplo abaixo:"),o(),t(202,"pre")(203,"code"),e(204,`<po-stepper>
   ...
   <po-step [p-icon-default]="template"></po-step>
</po-stepper>

<ng-template #template>
   <i class="ph ph-shopping-cart"></i>
</ng-template`),o()(),t(205,"blockquote")(206,"p"),e(207,"Deve-se usar "),t(208,"code"),e(209,"font-size: inherit"),o(),e(210," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),o()()()(),t(211,"tr",14)(212,"td",15)(213,"div",16)(214,"span",17),e(215," p-label"),p(216,"br"),o()()(),t(217,"td",18)(218,"code",23),e(219,"string"),o()(),t(220,"td",21),e(221,"-"),o(),t(222,"td",22)(223,"p"),e(224,"T\xEDtulo que ser\xE1 exibido descrevendo o passo ("),t(225,"em"),e(226,"step"),o(),e(227,")."),o()()()()())},dependencies:[g],encapsulation:2})}return i})();var y=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(n){return new(n||i)(u(S),u(f))};static \u0275cmp=l({type:i,selectors:[["ng-component"]],standalone:!1,decls:5,vars:4,consts:[["p-title"," Step",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(n,r){n&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),p(3,"sample-po-step-doc"),o(),p(4,"po-tab",3),o()()),n&2&&(s("p-actions",r.actions),c(2),s("p-active",r.activeTab.includes("doc")),c(2),s("p-hide",r.hidePoWebSample)("p-active",r.activeTab.includes("web")))},dependencies:[b,h,v,P],encapsulation:2})}return i})();var F=[{path:"",component:y}],C=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=d({type:i});static \u0275inj=m({imports:[E.forChild(F),E]})}return i})();var H=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=d({type:i});static \u0275inj=m({imports:[D,C]})}return i})();export{H as DocPoStepModule};