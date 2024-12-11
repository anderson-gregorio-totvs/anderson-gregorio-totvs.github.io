import{$ as g,$a as y,$d as O,Ed as z,F as D,G as J,Ga as e,Ia as f,Od as A,Pa as P,T as d,U as T,Wb as q,Xd as E,Yb as V,Yd as b,Zb as F,_ as p,ea as _,gd as I,ha as m,ka as v,me as M,na as o,ne as L,oa as t,od as B,oe as C,pa as a,re as S,se as R,ta as j,ua as s,va as u,y as x}from"./chunk-V5DQALWN.js";var H=(()=>{class i{breadcrumb={items:[{label:"Home",link:"/"},{label:"Pipelines",link:"/"},{label:"Background Process Scheduler"}]};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["sample-po-page-job-scheduler-background-process"]],standalone:!1,decls:1,vars:1,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-title","Background Process Scheduler",3,"p-breadcrumb"]],template:function(n,l){n&1&&a(0,"po-page-job-scheduler",0),n&2&&m("p-breadcrumb",l.breadcrumb)},dependencies:[C],encapsulation:2})}return i})();var ee=i=>({"docs-sample-code-tabs":i}),N=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["sample-po-page-job-scheduler-background-process-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,l){n&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Page Job Scheduler - Background Process"),t(),o(4,"a",2),s("click",function(){return l.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html"),t(),o(13,"pre",7),e(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Background Process Scheduler"
  [p-breadcrumb]="breadcrumb"
>
</po-page-job-scheduler>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
    selector: 'sample-po-page-job-scheduler-background-process',
    templateUrl: './sample-po-page-job-scheduler-background-process.component.html',
    standalone: false
})
export class SamplePoPageJobSchedulerBackgroundProcessComponent {
  breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Pipelines', link: '/' }, { label: 'Background Process Scheduler' }]
  };
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-page-job-scheduler-background-process"),t(),a(23,"hr")),n&2&&(d(5),v("po-icon "+l.sampleCodeButtonIcon),d(),f(" ",l.sampleCodeButtonLabel,""),d(),m("ngClass",P(4,ee,l.hideSampleCodeTabs)))},dependencies:[y,S,E,b,H],encapsulation:2})}return i})();function oe(i,w){if(i&1){let r=j();o(0,"h1"),e(1,"Etapa 1"),t(),o(2,"po-dynamic-form",4),s("p-form",function(l){D(r);let h=u();return J(h.getFormExample(l))}),t()}if(i&2){let r=u();d(2),m("p-fields",r.parametersForm)}}function ie(i,w){if(i&1){let r=j();o(0,"po-table",5),s("p-selected",function(l){D(r);let h=u();return J(h.selectedItem(l))}),t()}if(i&2){let r=u();m("p-items",r.items)("p-selectable",!0)}}function ne(i,w){if(i&1&&(o(0,"po-widget",6),a(1,"po-dynamic-view",7),t()),i&2){let r=u();d(),m("p-fields",r.fieldsSummary)("p-value",r.valueSummary)}}var W=(()=>{class i{dynamicForm;selectedValue={select:[]};valueSummary;parametersForm=[{property:"version",label:"Vers\xE3o",required:!0,gridLgColumns:12,gridXlColumns:12}];fieldsSummary=[{property:"version",label:"Vers\xE3o",gridColumns:6,gridSmColumns:12},{property:"selectedValue",label:"Valor selecionado na tabela",isArrayOrObject:!0,fieldLabel:"customer",gridColumns:6,gridSmColumns:12}];items=[{code:1200,customer:"Angeloni",driver:"Jos\xE9 Oliveira"},{code:1355,customer:"Giassi",driver:"Francisco Pereira"},{code:1496,customer:"Walmart",driver:"Pedro da Costa"},{code:1712,customer:"Carrefour",driver:"Jo\xE3o da Silva"}];getFormExample(r){this.dynamicForm=r}selectedItem(r){this.selectedValue.select.push(r),this.valueSummary={selectedValue:this.selectedValue.select,version:this.dynamicForm.form.value.version}}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["sample-po-page-job-scheduler-directives"]],standalone:!1,decls:4,vars:5,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-orientation","horizontal",3,"p-step-execution-last"],["p-job-scheduler-parameters-template","","p-title","1",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-parameters-template","",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-summary-template",""],[3,"p-form","p-fields"],[3,"p-selected","p-items","p-selectable"],["p-title","Par\xE2metros"],[3,"p-fields","p-value"]],template:function(n,l){n&1&&(o(0,"po-page-job-scheduler",0),_(1,oe,3,1,"ng-template",1)(2,ie,1,2,"ng-template",2)(3,ne,2,2,"ng-template",3),t()),n&2&&(m("p-step-execution-last",!0),d(),m("p-disable-advance",l.dynamicForm==null?null:l.dynamicForm.form.invalid)("p-execution-parameter",l.dynamicForm==null?null:l.dynamicForm.form.value),d(),m("p-disable-advance",!l.selectedValue.select.length)("p-execution-parameter",l.selectedValue))},dependencies:[B,z,I,O,C,M,L],encapsulation:2})}return i})();var re=i=>({"docs-sample-code-tabs":i}),U=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["sample-po-page-job-scheduler-directives-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,l){n&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Page Job Scheduler - Directives"),t(),o(4,"a",2),s("click",function(){return l.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html"),t(),o(13,"pre",7),e(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-orientation="horizontal"
  [p-step-execution-last]="true"
>
  <ng-template
    p-job-scheduler-parameters-template
    [p-disable-advance]="dynamicForm?.form.invalid"
    [p-execution-parameter]="dynamicForm?.form.value"
    p-title="1"
  >
    <h1>Etapa 1</h1>
    <po-dynamic-form [p-fields]="parametersForm" (p-form)="getFormExample($event)"> </po-dynamic-form>
  </ng-template>

  <ng-template
    p-job-scheduler-parameters-template
    [p-disable-advance]="!selectedValue.select.length"
    [p-execution-parameter]="selectedValue"
  >
    <po-table [p-items]="items" [p-selectable]="true" (p-selected)="selectedItem($event)"></po-table>
  </ng-template>
  <ng-template p-job-scheduler-summary-template>
    <po-widget p-title="Par\xE2metros">
      <po-dynamic-view [p-fields]="fieldsSummary" [p-value]="valueSummary"> </po-dynamic-view>
    </po-widget>
  </ng-template>
</po-page-job-scheduler>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoDynamicFormField, PoDynamicViewField } from '@po-ui/ng-components';

@Component({
    selector: 'sample-po-page-job-scheduler-directives',
    templateUrl: './sample-po-page-job-scheduler-directives.component.html',
    standalone: false
})
export class SamplePoPageJobSchedulerDirectivesComponent {
  dynamicForm!: NgForm;
  selectedValue = { select: [] };
  valueSummary;

  parametersForm: Array<PoDynamicFormField> = [
    {
      property: 'version',
      label: 'Vers\xE3o',
      required: true,
      gridLgColumns: 12,
      gridXlColumns: 12
    }
  ];

  fieldsSummary: Array<PoDynamicViewField> = [
    {
      property: 'version',
      label: 'Vers\xE3o',
      gridColumns: 6,
      gridSmColumns: 12
    },
    {
      property: 'selectedValue',
      label: 'Valor selecionado na tabela',
      isArrayOrObject: true,
      fieldLabel: 'customer',
      gridColumns: 6,
      gridSmColumns: 12
    }
  ];

  items: Array<any> = [
    {
      code: 1200,
      customer: 'Angeloni',
      driver: 'Jos\xE9 Oliveira'
    },
    {
      code: 1355,
      customer: 'Giassi',
      driver: 'Francisco Pereira'
    },
    {
      code: 1496,
      customer: 'Walmart',
      driver: 'Pedro da Costa'
    },
    {
      code: 1712,
      customer: 'Carrefour',
      driver: 'Jo\xE3o da Silva'
    }
  ];

  getFormExample(form: NgForm) {
    this.dynamicForm = form;
  }

  selectedItem(value: any) {
    this.selectedValue.select.push(value);

    this.valueSummary = {
      selectedValue: this.selectedValue.select,
      version: this.dynamicForm.form.value.version
    };
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-page-job-scheduler-directives"),t(),a(23,"hr")),n&2&&(d(5),v("po-icon "+l.sampleCodeButtonIcon),d(),f(" ",l.sampleCodeButtonLabel,""),d(),m("ngClass",P(4,re,l.hideSampleCodeTabs)))},dependencies:[y,S,E,b,W],encapsulation:2})}return i})();var X=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["sample-po-page-job-scheduler-doc"]],standalone:!1,decls:511,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/api"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(model:","PoJobSchedulerInternal)","=>","PoJobSchedulerInternal"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],["pan","",1,"docs-api-property-type","string"],["id","processos"],["href","/documentation/po-dynamic-form"],["id","salvar-e-atualizar"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoStepperOrientation"],["href","documentation/po-stepper#stepperOrientation"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","{","day:","number;","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","{","daysOfWeek:","Array<string>;","hour:","number;","minute:","number;","}"]],template:function(n,l){n&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';"),t()(),a(4,"div",2),o(5,"h3",3),e(6,"Componente"),t(),o(7,"h4",4)(8,"code",5),e(9,"PoPageJobSchedulerComponent"),t()(),o(10,"div",2)(11,"p"),e(12,"O "),o(13,"code"),e(14,"po-page-job-scheduler"),t(),e(15,` \xE9 uma p\xE1gina para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler),
como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios.`),t(),o(16,"p"),e(17,`Para utilizar esta p\xE1gina, basta informar o servi\xE7o (endpoint) para consumo,
sem a necessidade de criar componentes e tratamentos dos dados.`),t(),o(18,"p"),e(19,"Veja mais sobre os padr\xF5es utilizados nas requisi\xE7\xF5es no "),o(20,"a",6),e(21,"Guia de implementa\xE7\xE3o de APIs"),t(),e(22,". "),t()(),o(23,"div",7)(24,"h4",8),e(25,"Seletor"),t(),o(26,"pre",9),e(27,`<po-page-job-scheduler
    p-before-send="(model: PoJobSchedulerInternal) => PoJobSchedulerInternal"
    p-breadcrumb="PoBreadcrumb"
    (p-error)="EventEmitter"
    p-parameters="Array<PoDynamicFormField>"
    p-service-api="string"
    p-step-execution-last="boolean"
    p-orientation="PoStepperOrientation"
    (p-success)="EventEmitter"
    p-title="string" >
</po-page-job-scheduler>
`),t()(),o(28,"h4",10),e(29,"Propriedades"),t(),o(30,"table",11)(31,"tr",12)(32,"th",13),e(33,"Nome"),t(),o(34,"th",13),e(35,"Tipo"),t(),o(36,"th",13),e(37,"Padr\xE3o"),t(),o(38,"th",13),e(39,"Descri\xE7\xE3o"),t()(),o(40,"tr",14)(41,"td",15)(42,"div",16)(43,"span",17),e(44," p-before-send"),a(45,"br"),t()()(),o(46,"td",18)(47,"code",19),e(48,"(model: PoJobSchedulerInternal) => PoJobSchedulerInternal"),t()(),o(49,"td",20),e(50,"-"),t(),o(51,"td",21)(52,"em")(53,"strong"),e(54,"(opcional)"),t()(),o(55,"p"),e(56,`Fun\xE7\xE3o chamada ap\xF3s realizar a confirma\xE7\xE3o da execu\xE7\xE3o no PoPageJobScheduler.
Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.`),t(),o(57,"blockquote")(58,"p"),e(59,"Deve retornar um objeto do tipo "),o(60,"code"),e(61,"PoPageJobScheduler"),t(),e(62," para ser adicionado ao model do PoPageJobScheduler."),t()(),o(63,"blockquote")(64,"p"),e(65,"Ao ser disparada, a mesma receber\xE1 por par\xE2metro o model do PoPageJobScheduler de interface "),o(66,"code"),e(67,"PoJobSchedulerInternal"),t(),e(68,"."),t()(),o(69,"p"),e(70,"O contexto da fun\xE7\xE3o que ser\xE1 chamada, ser\xE1 o mesmo que o do "),o(71,"code"),e(72,"PoPageJobScheduler"),t(),e(73,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),o(74,"code"),e(75,"bind"),t(),e(76,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),o(77,"code"),e(78,"beforeSend"),t(),e(79,":"),t(),o(80,"pre")(81,"code"),e(82,`<po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
...
</po-page-job-scheduler>`),t()()()(),o(83,"tr",14)(84,"td",15)(85,"div",16)(86,"span",17),e(87," p-breadcrumb"),a(88,"br"),t()()(),o(89,"td",18)(90,"code",22),e(91,"PoBreadcrumb"),t()(),o(92,"td",20),e(93,"-"),t(),o(94,"td",21)(95,"em")(96,"strong"),e(97,"(opcional)"),t()(),o(98,"p"),e(99,"Objeto com as propriedades do breadcrumb."),t()()(),o(100,"tr",14)(101,"td",15)(102,"div",23)(103,"span",24),e(104," (p-error)"),a(105,"br"),t()()(),o(106,"td",18)(107,"code",25),e(108,"EventEmitter"),t()(),o(109,"td",20),e(110,"-"),t(),o(111,"td",21)(112,"em")(113,"strong"),e(114,"(opcional)"),t()(),o(115,"p"),e(116,`Evento disparado ao ocorrer um erro impossibilitando a conclus\xE3o do agendamento.
Para este evento ser\xE1 passado como par\xE2metro os detalhes do erro.`),t()()(),o(117,"tr",14)(118,"td",15)(119,"div",16)(120,"span",17),e(121," p-parameters"),a(122,"br"),t()()(),o(123,"td",18)(124,"code",26),e(125,"Array<PoDynamicFormField>"),t()(),o(126,"td",20),e(127,"-"),t(),o(128,"td",21)(129,"p"),e(130,"Par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),t(),o(131,"p"),e(132,"Ao utilizar esta propriedade, o componente n\xE3o buscar\xE1 automaticamente os par\xE2metros da API e o campo para preenchimento do processo n\xE3o ser\xE1 exibido."),t()()(),o(133,"tr",14)(134,"td",15)(135,"div",16)(136,"span",17),e(137," p-service-api"),a(138,"br"),t()()(),o(139,"td",18)(140,"code",27),e(141,"string"),t()(),o(142,"td",20),e(143,"-"),t(),o(144,"td",21)(145,"p"),e(146,"Endpoint usado pelo componente para busca dos processos e par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),t(),o(147,"h4",28),e(148,"Processos"),t(),o(149,"p"),e(150,`Os processos s\xE3o as tarefas que estar\xE3o dispon\xEDveis para o usu\xE1rio poder fazer os agendamentos.
Ao inicializar o componente, ser\xE1 feito uma requisi\xE7\xE3o `),o(151,"code"),e(152,"GET"),t(),e(153," para o endpoint "),o(154,"code"),e(155,"{service-api}/processes"),t(),e(156,`, para buscar
essa lista de processos.`),t(),o(157,"p"),e(158,"Este endpoint "),o(159,"code"),e(160,"{service-api}/processes"),t(),e(161," deve retornar uma lista de objetos que seguem a defini\xE7\xE3o de dados abaixo:"),t(),o(162,"pre")(163,"code"),e(164,"GET {service-api}/processes"),t()(),o(165,"pre")(166,"code"),e(167,`{
  items: [
    { "processID": "ac4f", "description": "Gerar folha de pagamento" },
    { "processID": "df6l", "description": "Relat\xF3rio de imposto a recolher" },
    { "processID": "dk3p", "description": "T\xEDtulos em aberto" },
  ]
}`),t()(),o(168,"p"),e(169,"Desta forma ser\xE1 renderizado um componente para selecionar o processo e/ou filtr\xE1-los."),t(),o(170,"p"),e(171,`Para realizar o filtro de busca do processo, ser\xE1 feita uma requisi\xE7\xE3o enviando o conte\xFAdo digitado na busca atrav\xE9s do
par\xE2metro `),o(172,"code"),e(173,"search"),t(),e(174,". Da seguinte forma:"),t(),o(175,"pre")(176,"code"),e(177,"GET {service-api}/processes?search=relatorio"),t()(),o(178,"blockquote")(179,"p"),e(180,"Veja mais sobre pagina\xE7\xE3o e filtros no "),o(181,"a",6),e(182,"Guia de implementa\xE7\xE3o de APIs"),t(),e(183,`.
Caso seja informada a propriedade `),o(184,"code"),e(185,"p-parameters"),t(),e(186," n\xE3o ser\xE3o realizadas as requisi\xE7\xF5es de processos e nem de parametros automaticamente."),t()(),o(187,"p"),e(188,`Tamb\xE9m \xE9 poss\xEDvel fazer um agendamento de um processo espec\xEDfico, sem que seja necess\xE1rio um endpoint para busca desses
processos. Ent\xE3o, caso o endpoint `),o(189,"code"),e(190,"{service-api}/processes"),t(),e(191,` n\xE3o seja v\xE1lido, ser\xE1 apresentado um campo de entrada de
texto para o usu\xE1rio informar diretamente
o `),o(192,"strong"),e(193,"identificador do processo - "),o(194,"code"),e(195,"processID"),t()(),e(196," e ao salvar ser\xE1 enviado um "),o(197,"code"),e(198,"POST"),t(),e(199," para o endpoint difinido "),o(200,"code"),e(201,"serviceApi"),t(),e(202," conforme abaixo:"),t(),o(203,"pre")(204,"code"),e(205,"POST {service-api}"),t()(),o(206,"p")(207,"em"),e(208,"Request payload"),t(),e(209," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),o(210,"code"),e(211,"PoJobScheduler"),t(),e(212,":"),t(),o(213,"pre")(214,"code"),e(215,`{
  "daily": { "hour": 10, "minute": 12 },
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405"
  ...
}`),t()(),o(216,"p"),e(217,"Caso seja necess\xE1rio informar par\xE2metros e adicionar configura\xE7\xF5es no processo selecionado, ser\xE1 realizado um "),o(218,"code"),e(219,"GET"),t(),e(220,`
como exemplificado abaixo. Os par\xE2metros devem retornar uma lista de objetos que seguem a interface
`),o(221,"a",29),e(222,"PoDynamicFormField"),t(),e(223,". Por\xE9m, caso utilizar a propriedade "),o(224,"code"),e(225,"p-parameters"),t(),e(226,` o componente n\xE3o
realizar\xE1 a busca autom\xE1tica e o campo de processos n\xE3o ser\xE1 exibido.`),t(),o(227,"pre")(228,"code"),e(229,`GET {service-api}/processes/:id/parameters
...
{
  items: [
    { "property": "vencimento", type: "date" },
    { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
  ]
}`),t()(),o(230,"h4",30),e(231,"Salvar e Atualizar"),t(),o(232,"p"),e(233,"Para salvar o agendamento, ser\xE1 feita uma requisi\xE7\xE3o de cria\xE7\xE3o, passando os valores preenchidos pelo usu\xE1rio via "),o(234,"em"),e(235,"payload"),t(),e(236,`.
Abaixo uma requisi\xE7\xE3o `),o(237,"code"),e(238,"POST"),t(),e(239," disparada, onde as propriedades do "),o(240,"em"),e(241,"Job Scheduler"),t(),e(242," foram preenchidas:"),t(),o(243,"pre")(244,"code"),e(245,"POST {service-api}"),t()(),o(246,"p")(247,"em"),e(248,"Request payload"),t(),e(249," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),o(250,"code"),e(251,"PoJobScheduler"),t(),e(252,":"),t(),o(253,"pre")(254,"code"),e(255,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}`),t()(),o(256,"p"),e(257,"Caso queira que o componente carregue um agendamento j\xE1 existente, deve ser inclu\xEDdo um par\xE2metro na rota chamado "),o(258,"code"),e(259,"id"),t(),e(260,"."),t(),o(261,"p"),e(262,"Exemplo de configura\xE7\xE3o de rota:"),t(),o(263,"pre")(264,"code"),e(265,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: ExampleJobSchedulerComponent },
  ...
],`),t()(),o(266,"p"),e(267,"Baseado nisso, na inicializa\xE7\xE3o do template ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),t(),o(268,"pre")(269,"code"),e(270,"GET {service-api}/{id}"),t()(),o(271,"p"),e(272,"Ao atualizar o agendamento, ser\xE1 disparado um "),o(273,"code"),e(274,"PUT"),t(),e(275,` com os dados preenchidos.
Veja abaixo uma requisi\xE7\xE3o `),o(276,"code"),e(277,"PUT"),t(),e(278," disparada, onde a propriedade "),o(279,"em"),e(280,"recurrent"),t(),e(281," e "),o(282,"em"),e(283,"daily"),t(),e(284," foram atualizadas:"),t(),o(285,"pre")(286,"code"),e(287,"PUT {service-api}/{id}"),t()(),o(288,"p")(289,"em"),e(290,"Request payload"),t(),e(291," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),o(292,"code"),e(293,"PoJobScheduler"),t(),e(294,":"),t(),o(295,"pre")(296,"code"),e(297,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405",
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}`),t()()()(),o(298,"tr",14)(299,"td",15)(300,"div",16)(301,"span",17),e(302," p-step-execution-last"),a(303,"br"),t()()(),o(304,"td",18)(305,"code",31),e(306,"boolean"),t()(),o(307,"td",20),e(308,"-"),t(),o(309,"td",21)(310,"em")(311,"strong"),e(312,"(opcional)"),t()(),o(313,"p"),e(314,"Define se o step "),o(315,"code"),e(316,"Agendamento"),t(),e(317," deve ser exibido como o \xFAltimo na sequ\xEAncia de steps"),t(),o(318,"blockquote")(319,"p"),e(320,"Aplic\xE1vel apenas quando utilizado "),o(321,"code"),e(322,"PoJobSchedulerParametersTemplateDirective"),t()()()()(),o(323,"tr",14)(324,"td",15)(325,"div",16)(326,"span",17),e(327," p-orientation"),a(328,"br"),t()()(),o(329,"td",18)(330,"code",32),e(331,"PoStepperOrientation"),t()(),o(332,"td",20),e(333,"-"),t(),o(334,"td",21)(335,"em")(336,"strong"),e(337,"(opcional)"),t()(),o(338,"p"),e(339,"Define a orienta\xE7\xE3o de exibi\xE7\xE3o do "),o(340,"code"),e(341,"po-stepper"),t(),e(342,"."),t(),o(343,"blockquote")(344,"p"),e(345,"Quando n\xE3o utilizada, segue o comportamento com base nas dimens\xF5es da tela."),t()(),o(346,"blockquote")(347,"p"),e(348,"Veja os valores v\xE1lidos no "),o(349,"em"),e(350,"enum"),t(),o(351,"a",33),e(352,"PoStepperOrientation"),t(),e(353,"."),t()()()(),o(354,"tr",14)(355,"td",15)(356,"div",23)(357,"span",24),e(358," (p-success)"),a(359,"br"),t()()(),o(360,"td",18)(361,"code",25),e(362,"EventEmitter"),t()(),o(363,"td",20),e(364,"-"),t(),o(365,"td",21)(366,"em")(367,"strong"),e(368,"(opcional)"),t()(),o(369,"p"),e(370,"Evento disparado ao concluir o processo de agendamento com sucesso."),t()()(),o(371,"tr",14)(372,"td",15)(373,"div",16)(374,"span",17),e(375," p-title"),a(376,"br"),t()()(),o(377,"td",18)(378,"code",27),e(379,"string"),t()(),o(380,"td",20),e(381,"-"),t(),o(382,"td",21)(383,"p"),e(384,"T\xEDtulo da p\xE1gina."),t()()()(),o(385,"h3"),e(386,"Interfaces"),t(),o(387,"h4",34)(388,"code",5),e(389,"PoJobScheduler"),t()(),o(390,"div",2)(391,"p"),e(392,"Estrutura do "),o(393,"em"),e(394,"payload"),t(),e(395," enviado nas requisi\xE7\xF5es para salvar e/ou atualizar as tarefas do "),o(396,"em"),e(397,"Job Scheduler"),t(),e(398,"."),t()(),o(399,"h4",10),e(400,"Propriedades"),t(),o(401,"table",11)(402,"tr",12)(403,"th",13),e(404,"Nome"),t(),o(405,"th",13),e(406,"Tipo"),t(),o(407,"th",13),e(408,"Descri\xE7\xE3o"),t()(),o(409,"tr",14)(410,"td",15)(411,"div",16)(412,"span",17),e(413," daily"),a(414,"br"),t()()(),o(415,"td",18)(416,"code",35),e(417,`{ hour: number; minute: number;
}`),t()(),o(418,"td",21)(419,"em")(420,"strong"),e(421,"(opcional)"),t()(),o(422,"p"),e(423,"Define uma repeti\xE7\xE3o di\xE1ria."),t()()(),o(424,"tr",14)(425,"td",15)(426,"div",16)(427,"span",17),e(428," executionParameter"),a(429,"br"),t()()(),o(430,"td",18)(431,"code",36),e(432,"object"),t()(),o(433,"td",21)(434,"em")(435,"strong"),e(436,"(opcional)"),t()(),o(437,"p"),e(438,"Objeto contendo os nomes das propriedades dos par\xE2metros e os valores preenchidos pelo usu\xE1rio."),t()()(),o(439,"tr",14)(440,"td",15)(441,"div",16)(442,"span",17),e(443," firstExecution"),a(444,"br"),t()()(),o(445,"td",18)(446,"code",27),e(447,"string"),t()(),o(448,"td",21)(449,"em")(450,"strong"),e(451,"(opcional)"),t()(),o(452,"p"),e(453,"Data da primeira execu\xE7\xE3o."),t()()(),o(454,"tr",14)(455,"td",15)(456,"div",16)(457,"span",17),e(458," monthly"),a(459,"br"),t()()(),o(460,"td",18)(461,"code",37),e(462,`{ day: number; hour: number; minute: number;
}`),t()(),o(463,"td",21)(464,"em")(465,"strong"),e(466,"(opcional)"),t()(),o(467,"p"),e(468,"Define uma repeti\xE7\xE3o mensal."),t()()(),o(469,"tr",14)(470,"td",15)(471,"div",16)(472,"span",17),e(473," processID"),a(474,"br"),t()()(),o(475,"td",18)(476,"code",27),e(477,"string"),t()(),o(478,"td",21)(479,"p"),e(480,"Identificador do processo."),t()()(),o(481,"tr",14)(482,"td",15)(483,"div",16)(484,"span",17),e(485," recurrent"),a(486,"br"),t()()(),o(487,"td",18)(488,"code",31),e(489,"boolean"),t()(),o(490,"td",21)(491,"em")(492,"strong"),e(493,"(opcional)"),t()(),o(494,"p"),e(495,"Permite uma execu\xE7\xE3o recorrente."),t()()(),o(496,"tr",14)(497,"td",15)(498,"div",16)(499,"span",17),e(500," weekly"),a(501,"br"),t()()(),o(502,"td",18)(503,"code",38),e(504,`{ daysOfWeek: Array<string>; hour: number; minute: number;
}`),t()(),o(505,"td",21)(506,"em")(507,"strong"),e(508,"(opcional)"),t()(),o(509,"p"),e(510,"Define uma repeti\xE7\xE3o semanal."),t()()()()())},dependencies:[S],encapsulation:2})}return i})();var $=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,n){this.route=r,this.router=n}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let n=r.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(n){return new(n||i)(T(q),T(V))};static \u0275cmp=p({type:i,selectors:[["ng-component"]],standalone:!1,decls:7,vars:4,consts:[["p-title"," Page Job Scheduler",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(n,l){n&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),a(3,"sample-po-page-job-scheduler-doc"),t(),o(4,"po-tab",3),a(5,"sample-po-page-job-scheduler-background-process-view")(6,"sample-po-page-job-scheduler-directives-view"),t()()()),n&2&&(m("p-actions",l.actions),d(2),m("p-active",l.activeTab.includes("doc")),d(2),m("p-hide",l.hidePoWebSample)("p-active",l.activeTab.includes("web")))},dependencies:[A,E,b,N,U,X],encapsulation:2})}return i})();var de=[{path:"",component:$}],Q=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=g({type:i});static \u0275inj=x({imports:[F.forChild(de),F]})}return i})();var Fe=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=g({type:i});static \u0275inj=x({imports:[R,Q]})}return i})();export{Fe as DocPoPageJobSchedulerModule};
