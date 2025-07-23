import{$ as V,$a as _,F as u,Fa as A,Fd as G,G as g,Ga as t,Ia as w,Ka as h,La as f,Lb as O,Ma as E,Mb as W,Nb as I,Ob as F,Od as Q,Pa as M,Pb as H,T as m,U as L,Wb as N,Xd as C,Yb as j,Yd as x,Zb as B,_ as d,_b as q,ha as s,ka as P,md as J,na as e,oa as o,oc as z,pa as a,re as y,sd as K,se as X,ta as R,ua as S,vc as U,y as D}from"./chunk-PI3TYJHE.js";var Y=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-gauge-basic"]],standalone:!1,decls:1,vars:1,consts:[[3,"p-value"]],template:function(l,n){l&1&&a(0,"po-gauge",0),l&2&&s("p-value",50)},dependencies:[G],encapsulation:2})}return i})();var me=i=>({"docs-sample-code-tabs":i}),$=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-gauge-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Gauge Basic"),o(),e(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),t(6),o()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-gauge-basic/sample-po-gauge-basic.component.html"),o(),e(13,"pre",7),t(14,`<po-gauge [p-value]="50"></po-gauge>
`),o()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-gauge-basic/sample-po-gauge-basic.component.ts"),o(),e(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-gauge-basic',
  templateUrl: './sample-po-gauge-basic.component.html',
  standalone: false
})
export class SamplePoGaugeBasicComponent {}
`),o()()()()(),e(21,"div",10),a(22,"sample-po-gauge-basic"),o(),a(23,"hr")),l&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),w(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,me,n.hideSampleCodeTabs)))},dependencies:[_,y,C,x,Y],encapsulation:2})}return i})();var ee=(()=>{class i{description;gaugeValue;height;options={};ranges=[];title;get isEmptyObject(){return Object.keys(this.options).length===0}ngOnInit(){this.restore()}addRange(){this.ranges=[...this.ranges,this.options],this.options={}}restore(){this.description=void 0,this.gaugeValue=void 0,this.height=void 0,this.options={},this.ranges=[],this.title=void 0}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-gauge-labs"]],standalone:!1,decls:21,vars:14,consts:[["rangesForm","ngForm"],[3,"p-description","p-height","p-ranges","p-title","p-value"],["p-label","Properties",1,"po-md-12"],[1,"row"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-label","Height",1,"po-md-6",3,"ngModelChange","ngModel"],["name","gaugeValue","p-label","Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","description","p-label","Description",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Ranges",1,"po-md-12"],["name","from","p-label","from",1,"po-md-3",3,"ngModelChange","ngModel"],["name","from","p-label","to",1,"po-md-3",3,"ngModelChange","ngModel"],["name","label","p-label","label",1,"po-md-3",3,"ngModelChange","ngModel"],["name","color","p-label","color",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Add Range",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-row"],[1,"po-md-12"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,n){if(l&1){let c=R();a(0,"po-gauge",1)(1,"po-divider",2),e(2,"form")(3,"div",3)(4,"po-input",4),E("ngModelChange",function(r){return u(c),f(n.title,r)||(n.title=r),g(r)}),o(),e(5,"po-number",5),E("ngModelChange",function(r){return u(c),f(n.height,r)||(n.height=r),g(r)}),o(),e(6,"po-number",6),E("ngModelChange",function(r){return u(c),f(n.gaugeValue,r)||(n.gaugeValue=r),g(r)}),o(),e(7,"po-input",7),E("ngModelChange",function(r){return u(c),f(n.description,r)||(n.description=r),g(r)}),o()(),e(8,"form",null,0)(10,"div",3),a(11,"po-divider",8),e(12,"po-number",9),E("ngModelChange",function(r){return u(c),f(n.options.from,r)||(n.options.from=r),g(r)}),o(),e(13,"po-number",10),E("ngModelChange",function(r){return u(c),f(n.options.to,r)||(n.options.to=r),g(r)}),o(),e(14,"po-input",11),E("ngModelChange",function(r){return u(c),f(n.options.label,r)||(n.options.label=r),g(r)}),o(),e(15,"po-input",12),E("ngModelChange",function(r){return u(c),f(n.options.color,r)||(n.options.color=r),g(r)}),o()(),e(16,"div",3)(17,"po-button",13),S("p-click",function(){return u(c),g(n.addRange())}),o()()()(),e(18,"div",14),a(19,"po-divider",15),e(20,"po-button",16),S("p-click",function(){return u(c),g(n.restore())}),o()()}if(l&2){let c=A(9);s("p-description",n.description)("p-height",n.height)("p-ranges",n.ranges)("p-title",n.title)("p-value",n.gaugeValue),m(4),h("ngModel",n.title),m(),h("ngModel",n.height),m(),h("ngModel",n.gaugeValue),m(),h("ngModel",n.description),m(5),h("ngModel",n.options.from),m(),h("ngModel",n.options.to),m(),h("ngModel",n.options.label),m(),h("ngModel",n.options.color),m(2),s("p-disabled",c.invalid||n.isEmptyObject)}},dependencies:[H,O,W,F,I,z,q,J,K,G],encapsulation:2})}return i})();var de=i=>({"docs-sample-code-tabs":i}),te=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-gauge-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Gauge Labs"),o(),e(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),t(6),o()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-gauge-labs/sample-po-gauge-labs.component.html"),o(),e(13,"pre",7),t(14,`<po-gauge
  [p-description]="description"
  [p-height]="height"
  [p-ranges]="ranges"
  [p-title]="title"
  [p-value]="gaugeValue"
>
</po-gauge>

<po-divider class="po-md-12" p-label="Properties"></po-divider>

<form>
  <div class="row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>
    <po-number class="po-md-6" name="height" [(ngModel)]="height" p-label="Height"> </po-number>
    <po-number class="po-md-6" name="gaugeValue" [(ngModel)]="gaugeValue" p-label="Value"> </po-number>
    <po-input class="po-md-6" name="description" [(ngModel)]="description" p-label="Description"> </po-input>
  </div>

  <form #rangesForm="ngForm">
    <div class="row">
      <po-divider class="po-md-12" p-label="Ranges"></po-divider>
      <po-number class="po-md-3" name="from" [(ngModel)]="options.from" p-label="from"></po-number>
      <po-number class="po-md-3" name="from" [(ngModel)]="options.to" p-label="to"></po-number>
      <po-input class="po-md-3" name="label" [(ngModel)]="options.label" p-label="label"></po-input>
      <po-input class="po-md-3" name="color" [(ngModel)]="options.color" p-label="color"></po-input>
    </div>
    <div class="row">
      <po-button
        class="po-md-3"
        p-label="Add Range"
        [p-disabled]="rangesForm.invalid || isEmptyObject"
        (p-click)="addRange()"
      ></po-button>
    </div>
  </form>
</form>

<div class="po-row">
  <po-divider class="po-md-12"></po-divider>
  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"></po-button>
</div>
`),o()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-gauge-labs/sample-po-gauge-labs.component.ts"),o(),e(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import { PoGaugeRanges } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-gauge-labs',
  templateUrl: './sample-po-gauge-labs.component.html',
  standalone: false
})
export class SamplePoGaugeLabsComponent implements OnInit {
  description: string;
  gaugeValue: number;
  height: number;
  options: PoGaugeRanges = {};
  ranges: Array<PoGaugeRanges> = [];
  title: string;

  get isEmptyObject() {
    return Object.keys(this.options).length === 0;
  }

  ngOnInit() {
    this.restore();
  }

  addRange() {
    this.ranges = [...this.ranges, this.options];
    this.options = {};
  }

  restore() {
    this.description = undefined;
    this.gaugeValue = undefined;
    this.height = undefined;
    this.options = {};
    this.ranges = [];
    this.title = undefined;
  }
}
`),o()()()()(),e(21,"div",10),a(22,"sample-po-gauge-labs"),o(),a(23,"hr")),l&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),w(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,de,n.hideSampleCodeTabs)))},dependencies:[_,y,C,x,ee],encapsulation:2})}return i})();var oe=(()=>{class i{salesRanges=[{from:0,to:50,label:"Sales reduction",color:"#c64840"},{from:50,to:75,label:"Average sales",color:"#ea9b3e"},{from:75,to:100,label:"Sales soared",color:"#00b28e"}];turnoverRanges=[{from:0,to:50,label:"Low rate",color:"#00b28e"},{from:50,to:75,label:"Average rate",color:"#ea9b3e"},{from:75,to:100,label:"High rate",color:"#c64840"}];static \u0275fac=function(l){return new(l||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-gauge-summary"]],standalone:!1,decls:8,vars:2,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],[1,"po-md-6"],["p-title","Employee turnover rate","p-value","25","p-description","25% of turnover",3,"p-ranges"],["p-title","Sales performance","p-value","82","p-description","The sales increased in 82% in the first bimester of 2020",3,"p-ranges"]],template:function(l,n){l&1&&(e(0,"po-container")(1,"div",0),t(2,"Sales Performance"),o(),e(3,"div",1)(4,"div",2),a(5,"po-gauge",3),o(),e(6,"div",2),a(7,"po-gauge",4),o()()()),l&2&&(m(5),s("p-ranges",n.turnoverRanges),m(2),s("p-ranges",n.salesRanges))},dependencies:[U,G],encapsulation:2})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),ne=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-gauge-summary-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Gauge Summary"),o(),e(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),t(6),o()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-gauge-summary/sample-po-gauge-summary.component.html"),o(),e(13,"pre",7),t(14,`<po-container>
  <div class="po-font-title po-mb-3">Sales Performance</div>
  <div class="po-row">
    <div class="po-md-6">
      <po-gauge
        p-title="Employee turnover rate"
        p-value="25"
        p-description="25% of turnover"
        [p-ranges]="turnoverRanges"
      ></po-gauge>
    </div>
    <div class="po-md-6">
      <po-gauge
        p-title="Sales performance"
        p-value="82"
        p-description="The sales increased in 82% in the first bimester of 2020"
        [p-ranges]="salesRanges"
      ></po-gauge>
    </div>
  </div>
</po-container>
`),o()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-gauge-summary/sample-po-gauge-summary.component.ts"),o(),e(19,"pre",9),t(20,`import { Component } from '@angular/core';

import { PoGaugeRanges } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-gauge-summary',
  templateUrl: './sample-po-gauge-summary.component.html',
  standalone: false
})
export class SamplePoGaugeSummaryComponent {
  salesRanges: Array<PoGaugeRanges> = [
    { from: 0, to: 50, label: 'Sales reduction', color: '#c64840' },
    { from: 50, to: 75, label: 'Average sales', color: '#ea9b3e' },
    { from: 75, to: 100, label: 'Sales soared', color: '#00b28e' }
  ];

  turnoverRanges: Array<PoGaugeRanges> = [
    { from: 0, to: 50, label: 'Low rate', color: '#00b28e' },
    { from: 50, to: 75, label: 'Average rate', color: '#ea9b3e' },
    { from: 75, to: 100, label: 'High rate', color: '#c64840' }
  ];
}
`),o()()()()(),e(21,"div",10),a(22,"sample-po-gauge-summary"),o(),a(23,"hr")),l&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),w(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,ge,n.hideSampleCodeTabs)))},dependencies:[_,y,C,x,oe],encapsulation:2})}return i})();var ie=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-gauge-doc"]],standalone:!1,decls:362,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","guia-de-uso-para-gr\xE1ficos"],["href","/guides/guide-charts"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","Array<PoGaugeRanges>"],[1,"docs-api-h4","docs-api-class-name"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"]],template:function(l,n){l&1&&(e(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoGaugeModule } from '@po-ui/ng-components';"),o()(),e(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente po-gauge."),o()(),e(7,"h3",3),t(8,"Componente"),o(),e(9,"h4",4)(10,"code",5),t(11,"PoGaugeComponent"),o()(),e(12,"div",2)(13,"p"),t(14,"O componente "),e(15,"code"),t(16,"po-gauge"),o(),t(17,` prov\xEA a representa\xE7\xE3o de um valor atrav\xE9s de um arco. \xC9 muito comum, por exemplo, para demonstrar o desempenho ou progresso de algo.
O `),e(18,"code"),t(19,"po-gauge"),o(),t(20," possui dois tipos de tratamentos:"),o(),e(21,"ul")(22,"li"),t(23,"\xC9 poss\xEDvel demonstrar um dado percentual simples em conjunto com uma descri\xE7\xE3o resumida em seu interior;"),o(),e(24,"li"),t(25,"Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado."),o()(),e(26,"h4",6),t(27,"Guia de uso para Gr\xE1ficos"),o(),e(28,"blockquote")(29,"p"),t(30,"Veja nosso "),e(31,"a",7),t(32,"guia de uso para gr\xE1ficos"),o(),t(33,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores. `),o()()(),e(34,"div",8)(35,"h4",9),t(36,"Seletor"),o(),e(37,"pre",10),t(38,`<po-gauge
    p-description="string"
    p-height="number"
    p-ranges="Array<PoGaugeRanges>"
    p-title="string"
    p-value="number" >
</po-gauge>
`),o()(),e(39,"h4",11),t(40,"Propriedades"),o(),e(41,"table",12)(42,"tr",13)(43,"th",14),t(44,"Nome"),o(),e(45,"th",14),t(46,"Tipo"),o(),e(47,"th",14),t(48,"Padr\xE3o"),o(),e(49,"th",14),t(50,"Descri\xE7\xE3o"),o()(),e(51,"tr",15)(52,"td",16)(53,"div",17)(54,"span",18),t(55," p-description"),a(56,"br"),o()()(),e(57,"td",19)(58,"code",20),t(59,"string"),o()(),e(60,"td",21),t(61,"-"),o(),e(62,"td",22)(63,"em")(64,"strong"),t(65,"(opcional)"),o()(),e(66,"p"),t(67,`Define o texto que ser\xE1 exibido no gauge.
H\xE1 dois posicionamentos para ele:`),o(),e(68,"ul")(69,"li"),t(70,"Se houver defini\xE7\xE3o para "),e(71,"code"),t(72,"p-ranges"),o(),t(73,", o descritivo ser\xE1 exibido no topo do container, ficando acima do gauge;"),o(),e(74,"li"),t(75,"Na aus\xEAncia de "),e(76,"code"),t(77,"p-ranges"),o(),t(78,", ser\xE1 incorporado dentro do arco do gauge, e abaixo de "),e(79,"code"),t(80,"p-value"),o(),t(81,"."),o()(),e(82,"p"),t(83,`Para ambos os casos, se o conte\xFAdo ultrapassar a \xE1rea designada, ser\xE3o geradas automaticamente retic\xEAncias.
No entanto, ser\xE1 poss\xEDvel visualizar a mensagem atrav\xE9s de um tooltip no passar do mouse sobre o texto.`),o(),e(84,"blockquote")(85,"p"),t(86,`Para uma melhor experi\xEAncia do usu\xE1rio, \xE9 recomendado um descritivo breve e com poucas palavras.
Desta forma evita-se o `),e(87,"em"),t(88,"overflow"),o(),t(89," do texto."),o()()()(),e(90,"tr",15)(91,"td",16)(92,"div",17)(93,"span",18),t(94," p-height"),a(95,"br"),o()()(),e(96,"td",19)(97,"code",23),t(98,"number"),o()(),e(99,"td",21)(100,"p")(101,"code"),t(102,"300px"),o()()(),e(103,"td",22)(104,"em")(105,"strong"),t(106,"(opcional)"),o()(),e(107,"p"),t(108,"Define a altura do gauge."),o(),e(109,"p"),t(110,"O valor m\xEDnimo aceito \xE9 300px."),o()()(),e(111,"tr",15)(112,"td",16)(113,"div",17)(114,"span",18),t(115," p-ranges"),a(116,"br"),o()()(),e(117,"td",19)(118,"code",24),t(119,"Array<PoGaugeRanges>"),o()(),e(120,"td",21),t(121,"-"),o(),e(122,"td",22)(123,"em")(124,"strong"),t(125,"(opcional)"),o()(),e(126,"p"),t(127,`Defini\xE7\xE3o para o alcance de cores. Ao adicionar pelo menos um item na lista,
incorpora-se o ponteiro que assinala o valor passado em `),e(128,"code"),t(129,"p-value"),o(),t(130,`.
Se o valor de `),e(131,"code"),t(132,"p-value"),o(),t(133," for inferior ao m\xEDnimo valor definido em "),e(134,"code"),t(135,"PoGaugeRanges.from"),o(),t(136,", o dom\xEDnio m\xEDnimo do gauge ser\xE1 "),e(137,"code"),t(138,"p-value"),o(),t(139,`.
A mesma regra prevalece para valores m\xE1ximos.`),o()()(),e(140,"tr",15)(141,"td",16)(142,"div",17)(143,"span",18),t(144," p-title"),a(145,"br"),o()()(),e(146,"td",19)(147,"code",20),t(148,"string"),o()(),e(149,"td",21),t(150,"-"),o(),e(151,"td",22)(152,"em")(153,"strong"),t(154,"(opcional)"),o()(),e(155,"p"),t(156,"Define o t\xEDtulo do gauge."),o()()(),e(157,"tr",15)(158,"td",16)(159,"div",17)(160,"span",18),t(161," p-value"),a(162,"br"),o()()(),e(163,"td",19)(164,"code",23),t(165,"number"),o()(),e(166,"td",21),t(167,"-"),o(),e(168,"td",22)(169,"em")(170,"strong"),t(171,"(opcional)"),o()(),e(172,"p"),t(173,"Valor referente ao valor da s\xE9rie. Seu comportamento segue a seguintes regras:"),o(),e(174,"ul")(175,"li"),t(176,"Sem "),e(177,"code"),t(178,"p-ranges"),o(),t(179,": Os valores passados para "),e(180,"code"),t(181,"p-value"),o(),t(182," e "),e(183,"code"),t(184,"p-description"),o(),t(185,` ser\xE3o centralizados no interior do arco.
A base do valor ser\xE1 percentual tendo como base os alcances entre zero e 100%. Se passado um valor superior a 100,
A coloriza\xE7\xE3o do gauge ser\xE1 completa e o valor passado ser\xE1 exibido no interior do arco.`),o(),e(186,"li"),t(187,"Com "),e(188,"code"),t(189,"p-ranges"),o(),t(190,": A descri\xE7\xE3o ser\xE1 exibida acima do gauge e haver\xE1 um ponteiro marcando o valor passado em "),e(191,"code"),t(192,"p-value"),o(),t(193,`.
Considerando que o alcance em `),e(194,"code"),t(195,"ranges"),o(),t(196," \xE9 aberto, ent\xE3o a escala de "),e(197,"code"),t(198,"p-value"),o(),t(199,` ser\xE1 em rela\xE7\xE3o ao menor/maior alcance
absoluto definido em `),e(200,"code"),t(201,"p-ranges"),o(),t(202,`.
Se passado um `),e(203,"code"),t(204,"p-value"),o(),t(205," inferior em rela\xE7\xE3o ao m\xEDnimo valor definido em "),e(206,"code"),t(207,"p-ranges"),o(),t(208,", o dom\xEDnio m\xEDnimo do gauge partir\xE1 de "),e(209,"code"),t(210,"p-value"),o(),t(211,`.
A mesma regra prevalece para valores m\xE1ximos.`),o()()()()(),e(212,"h3"),t(213,"Interfaces"),o(),e(214,"h4",25)(215,"code",5),t(216,"PoGaugeRanges"),o()(),e(217,"div",2)(218,"p"),t(219,"Interface que define os alcances das cores do gauge."),o()(),e(220,"h4",11),t(221,"Propriedades"),o(),e(222,"table",12)(223,"tr",13)(224,"th",14),t(225,"Nome"),o(),e(226,"th",14),t(227,"Tipo"),o(),e(228,"th",14),t(229,"Descri\xE7\xE3o"),o()(),e(230,"tr",15)(231,"td",16)(232,"div",17)(233,"span",18),t(234," color"),a(235,"br"),o()()(),e(236,"td",19)(237,"code",20),t(238,"string"),o()(),e(239,"td",22)(240,"em")(241,"strong"),t(242,"(opcional)"),o()(),e(243,"p"),t(244,"Determina a cor do alcance. As maneiras de customizar o "),e(245,"em"),t(246,"preset"),o(),t(247," padr\xE3o de cores s\xE3o:"),o(),e(248,"ul")(249,"li"),t(250,"Hexadeximal, por exemplo "),e(251,"code"),t(252,"#c64840"),o(),t(253,";"),o(),e(254,"li"),t(255,"RGB, como "),e(256,"code"),t(257,"rgb(0, 0, 165)"),o()(),e(258,"li"),t(259,"O nome da cor, por exemplo "),e(260,"em"),t(261,"blue"),o(),t(262,");"),o(),e(263,"li"),t(264,"Usando uma das cores do tema do PO: Valores v\xE1lidos:"),e(265,"ul")(266,"li"),a(267,"span",26),e(268,"code"),t(269,"color-01"),o()(),e(270,"li"),a(271,"span",27),e(272,"code"),t(273,"color-02"),o()(),e(274,"li"),a(275,"span",28),e(276,"code"),t(277,"color-03"),o()(),e(278,"li"),a(279,"span",29),e(280,"code"),t(281,"color-04"),o()(),e(282,"li"),a(283,"span",30),e(284,"code"),t(285,"color-05"),o()(),e(286,"li"),a(287,"span",31),e(288,"code"),t(289,"color-06"),o()(),e(290,"li"),a(291,"span",32),e(292,"code"),t(293,"color-07"),o()(),e(294,"li"),a(295,"span",33),e(296,"code"),t(297,"color-08"),o()(),e(298,"li"),a(299,"span",34),e(300,"code"),t(301,"color-09"),o()(),e(302,"li"),a(303,"span",35),e(304,"code"),t(305,"color-10"),o()(),e(306,"li"),a(307,"span",36),e(308,"code"),t(309,"color-11"),o()(),e(310,"li"),a(311,"span",37),e(312,"code"),t(313,"color-12"),o()()()()()()(),e(314,"tr",15)(315,"td",16)(316,"div",17)(317,"span",18),t(318," from"),a(319,"br"),o()()(),e(320,"td",19)(321,"code",23),t(322,"number"),o()(),e(323,"td",22)(324,"em")(325,"strong"),t(326,"(opcional)"),o()(),e(327,"p"),t(328,"Alcance inicial da cor. O valor padr\xE3o \xE9 0."),o()()(),e(329,"tr",15)(330,"td",16)(331,"div",17)(332,"span",18),t(333," label"),a(334,"br"),o()()(),e(335,"td",19)(336,"code",20),t(337,"string"),o()(),e(338,"td",22)(339,"em")(340,"strong"),t(341,"(opcional)"),o()(),e(342,"p"),t(343,"O texto para a legenda do alcance."),o(),e(344,"blockquote")(345,"p"),t(346,"Se desejar ocultar a legenda basta ignorar esta propriedade."),o()()()(),e(347,"tr",15)(348,"td",16)(349,"div",17)(350,"span",18),t(351," to"),a(352,"br"),o()()(),e(353,"td",19)(354,"code",23),t(355,"number"),o()(),e(356,"td",22)(357,"em")(358,"strong"),t(359,"(opcional)"),o()(),e(360,"p"),t(361,"Alcance final da cor. O valor padr\xE3o \xE9 100."),o()()()()())},dependencies:[y],encapsulation:2})}return i})();var ae=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||i)(L(N),L(j))};static \u0275cmp=d({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Gauge",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(l,n){l&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),a(3,"sample-po-gauge-doc"),o(),e(4,"po-tab",3),a(5,"sample-po-gauge-basic-view")(6,"sample-po-gauge-labs-view")(7,"sample-po-gauge-summary-view"),o()()()),l&2&&(s("p-actions",n.actions),m(2),s("p-active",n.activeTab.includes("doc")),m(2),s("p-hide",n.hidePoWebSample)("p-active",n.activeTab.includes("web")))},dependencies:[Q,C,x,$,te,ne,ie],encapsulation:2})}return i})();var he=[{path:"",component:ae}],le=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=V({type:i});static \u0275inj=D({imports:[B.forChild(he),B]})}return i})();var Ne=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=V({type:i});static \u0275inj=D({imports:[X,le]})}return i})();export{Ne as DocPoGaugeModule};
