import{$ as m,Ga as a,Od as S,T as c,U as u,Wb as v,Xd as f,Yb as E,Yd as P,Zb as b,_ as d,ha as s,na as t,oa as e,pa as r,re as x,se as g,y as l}from"./chunk-23IW53AA.js";var D=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-job-scheduler-parameters-template-doc"]],standalone:!1,decls:96,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","string"]],template:function(i,p){i&1&&(t(0,"div",0)(1,"p",1)(2,"code"),a(3,"import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';"),e()(),r(4,"div",2),t(5,"h3",3),a(6,"Componente"),e(),t(7,"h4",4)(8,"code",5),a(9,"PoJobSchedulerParametersTemplateDirective"),e()(),t(10,"div",2)(11,"p"),a(12,"Esta diretiva permite personalizar o conte\xFAdo da uma ou v\xE1rias etapa(s) de parametriza\xE7\xE3o do componente de PoPageJobScheduler."),e(),t(13,"p"),a(14,`Para repassar as altera\xE7\xF5es realizadas no componente customizado ao model do PoPageJobScheduler, deve
ser atualizado os valores atrav\xE9s da propriedade p-execution-parameter. Dessa forma as altera\xE7\xF5es ser\xE3o adicionadas ao
atributo executionParameter do objeto de envio a Api.
\xC9 poss\xEDvel tamb\xE9m controlar a permiss\xE3o de avan\xE7ar, fazendo uso da propriedade p-disable-advance.`),e(),t(15,"pre")(16,"code"),a(17,`...
<po-page-job-scheduler [p-service-api]="serviceApi">
    <ng-template p-job-scheduler-parameters-template
     [p-execution-parameter]="executionParameter"
     [p-disable-advance]="disableAdvance"
     p-label-step="titleStep"
    >
      ...
    </ng-template>
    <ng-template p-job-scheduler-parameters-template
     [p-execution-parameter]="executionParameter"
     [p-disable-advance]="disableAdvance"
     p-label-step="titleStep"
    >
      ...
    </ng-template>
</po-page-job-scheduler>
...`),e()()(),t(18,"div",6)(19,"h4",7),a(20,"Seletor"),e(),t(21,"pre",8),a(22,`<[p-job-scheduler-parameters-template]
    p-disable-advance="boolean"
    p-execution-parameter="object"
    p-label-step="string" >
</[p-job-scheduler-parameters-template]>
`),e()(),t(23,"h4",9),a(24,"Propriedades"),e(),t(25,"table",10)(26,"tr",11)(27,"th",12),a(28,"Nome"),e(),t(29,"th",12),a(30,"Tipo"),e(),t(31,"th",12),a(32,"Padr\xE3o"),e(),t(33,"th",12),a(34,"Descri\xE7\xE3o"),e()(),t(35,"tr",13)(36,"td",14)(37,"div",15)(38,"span",16),a(39," p-disable-advance"),r(40,"br"),e()()(),t(41,"td",17)(42,"code",18),a(43,"boolean"),e()(),t(44,"td",19)(45,"p"),a(46,"false"),e()(),t(47,"td",20)(48,"em")(49,"strong"),a(50,"(opcional)"),e()(),t(51,"p"),a(52,"Determina se deve desabilitar o bot\xE3o de avan\xE7ar para a pr\xF3xima etapa"),e(),t(53,"blockquote")(54,"p"),a(55,"Pode ser utilizado para validar campos antes de avan\xE7ar."),e()()()(),t(56,"tr",13)(57,"td",14)(58,"div",15)(59,"span",16),a(60," p-execution-parameter"),r(61,"br"),e()()(),t(62,"td",17)(63,"code",21),a(64,"object"),e()(),t(65,"td",19),a(66,"-"),e(),t(67,"td",20)(68,"em")(69,"strong"),a(70,"(opcional)"),e()(),t(71,"p"),a(72,`Objeto que deve conter as altera\xE7\xF5es feitas pelo componente de template que ser\xE3o repassadas dentro do atributo
`),t(73,"code"),a(74,"executionParameter"),e(),a(75," para envio na api."),e(),t(76,"blockquote")(77,"p"),a(78,"O componente deve manter essa propriedade atualizada. \xC9 chamada ap\xF3s o avan\xE7ar da etapa de parametriza\xE7\xE3o."),e()()()(),t(79,"tr",13)(80,"td",14)(81,"div",15)(82,"span",16),a(83," p-label-step"),r(84,"br"),e()()(),t(85,"td",17)(86,"code",22),a(87,"string"),e()(),t(88,"td",19),a(89,"-"),e(),t(90,"td",20)(91,"em")(92,"strong"),a(93,"(opcional)"),e()(),t(94,"p"),a(95,"Determina o label do step"),e()()()()())},dependencies:[x],encapsulation:2})}return o})();var y=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(n,i){this.route=n,this.router=i}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(n=>{let i=n.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(i){return new(i||o)(u(v),u(E))};static \u0275cmp=d({type:o,selectors:[["ng-component"]],standalone:!1,decls:5,vars:4,consts:[["p-title"," Job Scheduler Parameters Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(i,p){i&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),r(3,"sample-po-job-scheduler-parameters-template-doc"),e(),r(4,"po-tab",3),e()()),i&2&&(s("p-actions",p.actions),c(2),s("p-active",p.activeTab.includes("doc")),c(2),s("p-hide",p.hidePoWebSample)("p-active",p.activeTab.includes("web")))},dependencies:[S,f,P,D],encapsulation:2})}return o})();var j=[{path:"",component:y}],C=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=m({type:o});static \u0275inj=l({imports:[b.forChild(j),b]})}return o})();var B=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=m({type:o});static \u0275inj=l({imports:[g,C]})}return o})();export{B as DocPoJobSchedulerParametersTemplateModule};