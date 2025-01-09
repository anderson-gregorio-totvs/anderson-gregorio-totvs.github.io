import{$ as P,$a as k,$c as Z,Bc as Y,Ca as B,Da as W,Ea as q,F as c,Fc as D,G as u,Ga as o,Ia as _,Ka as E,Kc as H,La as b,Lb as O,Ma as f,Mb as z,Mc as C,Nb as j,Nc as V,Ob as Q,Od as ee,Pa as L,Pb as G,T as p,U as A,Wb as U,Xd as v,Yb as K,Yd as x,Zb as F,_ as d,_b as J,ha as h,ka as M,md as $,na as t,oa as e,oc as X,pa as r,re as w,se as te,ta as R,ua as S,y,za as N}from"./chunk-PI3TYJHE.js";var oe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-toaster-basic"]],standalone:!1,decls:2,vars:0,consts:[[1,"po-row"],["p-message","Toaster Basic - Information","p-type","information",1,"po-md-12"]],template:function(a,n){a&1&&(t(0,"div",0),r(1,"po-toaster",1),e())},dependencies:[V],encapsulation:2})}return i})();var ce=i=>({"docs-sample-code-tabs":i}),ie=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-toaster-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Toaster Basic"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-toaster-basic/sample-po-toaster-basic.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-row">
  <po-toaster class="po-md-12" p-message="Toaster Basic - Information" p-type="information"></po-toaster>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-toaster-basic/sample-po-toaster-basic.component.ts"),e(),t(19,"pre",9),o(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-toaster-basic',
  templateUrl: './sample-po-toaster-basic.component.html',
  standalone: false
})
export class SamplePoToasterBasicComponent {}
`),e()()()()(),t(21,"div",10),r(22,"sample-po-toaster-basic"),e(),r(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),_(" ",n.sampleCodeButtonLabel,""),p(),h("ngClass",L(4,ce,n.hideSampleCodeTabs)))},dependencies:[k,w,v,x,oe],encapsulation:2})}return i})();var he=["toasterRef"],ae=(()=>{class i{poModal;toasterRef;message="Title Message";supportMessage="Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.";actionLabel="action";type=C.Information;mode=H.Inline;hide=!1;showClose=!0;showIcon=!0;hasAction=!1;action=void 0;typeOptions=[{label:"Success",value:C.Success},{label:"Error",value:C.Error},{label:"Warning",value:C.Warning},{label:"Information",value:C.Information}];constructor(){}changeAction(){this.hasAction?this.action=()=>this.poModal.open():this.action=void 0}hideChange(s){this.changeHide(s)}changeHide(s){this.hide=s||!this.hide}restore(){this.message="Title Message",this.supportMessage="Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.",this.actionLabel="action",this.type=C.Information,this.mode=H.Inline,this.hide=!1,this.showClose=!0,this.showIcon=!0,this.hasAction=!1,this.action=void 0}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-toaster-labs"]],viewQuery:function(a,n){if(a&1&&(B(D,7),B(he,5)),a&2){let m;W(m=q())&&(n.poModal=m.first),W(m=q())&&(n.toasterRef=m.first)}},standalone:!1,decls:18,vars:17,consts:[["toasterRef",""],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-hide-change","p-hide","p-mode","p-message","p-support-message","p-type","p-show-close","p-action","p-action-label"],["p-label","Type","name","type",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Message","name","message","p-clean","","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Support Message","name","supportMessage","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Has Action","name","action",1,"po-md-4",3,"p-change","ngModelChange","ngModel"],["p-label","Action Label","name","actionLabel","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Show Close","name","showClose",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-4",3,"p-click"],["name","hide",1,"po-md-4",3,"p-click","p-label"],["p-title","PO Notification"]],template:function(a,n){if(a&1){let m=R();t(0,"div",2)(1,"po-toaster",3,0),S("p-hide-change",function(l){return c(m),u(n.hideChange(l))}),e()(),r(3,"hr"),t(4,"form",null,1)(6,"po-radio-group",4),f("ngModelChange",function(l){return c(m),b(n.type,l)||(n.type=l),u(l)}),e(),t(7,"po-input",5),f("ngModelChange",function(l){return c(m),b(n.message,l)||(n.message=l),u(l)}),e(),t(8,"po-input",6),f("ngModelChange",function(l){return c(m),b(n.supportMessage,l)||(n.supportMessage=l),u(l)}),e(),t(9,"po-switch",7),S("p-change",function(){return c(m),u(n.changeAction())}),f("ngModelChange",function(l){return c(m),b(n.hasAction,l)||(n.hasAction=l),u(l)}),e(),t(10,"po-input",8),f("ngModelChange",function(l){return c(m),b(n.actionLabel,l)||(n.actionLabel=l),u(l)}),e(),t(11,"po-switch",9),f("ngModelChange",function(l){return c(m),b(n.showClose,l)||(n.showClose=l),u(l)}),e(),r(12,"po-divider"),t(13,"div",2)(14,"po-button",10),S("p-click",function(){return c(m),u(n.restore())}),e(),t(15,"po-button",11),S("p-click",function(){return c(m),u(n.changeHide())}),e()()(),t(16,"po-modal",12),o(17," Notification Action "),e()}a&2&&(p(),h("p-hide",n.hide)("p-mode",n.mode)("p-message",n.message)("p-support-message",n.supportMessage)("p-type",n.type)("p-show-close",n.showClose)("p-action",n.action)("p-action-label",n.actionLabel),p(5),E("ngModel",n.type),h("p-options",n.typeOptions),p(),E("ngModel",n.message),p(),E("ngModel",n.supportMessage),p(),E("ngModel",n.hasAction),p(),E("ngModel",n.actionLabel),p(),E("ngModel",n.showClose),p(4),N("p-label","",n.hide?"Show":"Hide"," Toaster"))},dependencies:[G,O,z,Q,j,X,J,Y,$,Z,D,V],encapsulation:2})}return i})();var Se=i=>({"docs-sample-code-tabs":i}),re=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-toaster-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Toaster Labs"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-toaster-labs/sample-po-toaster-labs.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-row">
  <po-toaster
    #toasterRef
    class="po-md-12"
    [p-hide]="hide"
    (p-hide-change)="hideChange($event)"
    [p-mode]="mode"
    [p-message]="message"
    [p-support-message]="supportMessage"
    [p-type]="type"
    [p-show-close]="showClose"
    [p-action]="action"
    [p-action-label]="actionLabel"
  ></po-toaster>
</div>

<hr />

<form #f="ngForm">
  <po-radio-group
    p-label="Type"
    class="po-md-12"
    name="type"
    [(ngModel)]="type"
    [p-options]="typeOptions"
  ></po-radio-group>
  <po-input p-label="Message" class="po-md-6" name="message" [(ngModel)]="message" p-clean p-required> </po-input>
  <po-input p-label="Support Message" class="po-md-6" name="supportMessage" [(ngModel)]="supportMessage" p-clean>
  </po-input>
  <po-switch p-label="Has Action" class="po-md-4" (p-change)="changeAction()" name="action" [(ngModel)]="hasAction">
  </po-switch>
  <po-input p-label="Action Label" class="po-md-4" name="actionLabel" [(ngModel)]="actionLabel" p-clean> </po-input>
  <po-switch p-label="Show Close" class="po-md-4" name="showClose" [(ngModel)]="showClose"> </po-switch>

  <po-divider></po-divider>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    <po-button class="po-md-4" name="hide" (p-click)="changeHide()" p-label="{ { hide ? 'Show' : 'Hide' }} Toaster">
    </po-button>
  </div>
</form>

<po-modal p-title="PO Notification"> Notification Action </po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-toaster-labs/sample-po-toaster-labs.component.ts"),e(),t(19,"pre",9),o(20,`import { Component, ViewChild } from '@angular/core';
import {
  PoModalComponent,
  PoRadioGroupOption,
  PoToasterComponent,
  PoToasterMode,
  PoToasterType
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-toaster-labs',
  templateUrl: './sample-po-toaster-labs.component.html',
  standalone: false
})
export class SamplePoToasterLabsComponent {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild('toasterRef') toasterRef: PoToasterComponent;

  message = 'Title Message';
  supportMessage =
    'Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.';
  actionLabel = 'action';
  type: PoToasterType = PoToasterType.Information;
  mode = PoToasterMode.Inline;
  hide = false;
  showClose = true;
  showIcon = true;
  hasAction = false;
  action = undefined;

  public readonly typeOptions: Array<PoRadioGroupOption> = [
    { label: 'Success', value: PoToasterType.Success },
    { label: 'Error', value: PoToasterType.Error },
    { label: 'Warning', value: PoToasterType.Warning },
    { label: 'Information', value: PoToasterType.Information }
  ];

  constructor() {}

  changeAction() {
    if (this.hasAction) {
      this.action = () => this.poModal.open();
    } else {
      this.action = undefined;
    }
  }

  hideChange($event) {
    this.changeHide($event);
  }

  changeHide(state?: boolean) {
    this.hide = state || !this.hide;
  }

  restore() {
    this.message = 'Title Message';
    this.supportMessage =
      'Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.';
    this.actionLabel = 'action';
    this.type = PoToasterType.Information;
    this.mode = PoToasterMode.Inline;
    this.hide = false;
    this.showClose = true;
    this.showIcon = true;
    this.hasAction = false;
    this.action = undefined;
  }
}
`),e()()()()(),t(21,"div",10),r(22,"sample-po-toaster-labs"),e(),r(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),_(" ",n.sampleCodeButtonLabel,""),p(),h("ngClass",L(4,Se,n.hideSampleCodeTabs)))},dependencies:[k,w,v,x,ae],encapsulation:2})}return i})();var le=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-toaster-doc"]],standalone:!1,decls:462,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","acessibilidade-tratada-no-componente"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Function"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoToasterType"]],template:function(a,n){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),o(3,"import { PoToasterModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),o(6,"M\xF3dulo do componente po-toaster."),e()(),t(7,"h3",3),o(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),o(11,"PoToasterComponent"),e()(),t(12,"div",2)(13,"p"),o(14,"O Toaster serve para exibir uma mensagem tempor\xE1ria em linha na interface, podendo ou n\xE3o ser removida pelos usu\xE1rios a depender do uso especificado."),e(),t(15,"h4",6),o(16,"Acessibilidade tratada no componente"),e(),t(17,"p"),o(18,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),e(),t(19,"ul")(20,"li"),o(21,"Permitir a intera\xE7\xE3o via teclado (2.1.1: Keyboard (A));"),e(),t(22,"li"),o(23,"Permitir que o usu\xE1rio feche facilmente o toaster e n\xE3o retirar o foco de onde est\xE1. (2.2.4: Interrup\xE7\xF5es (AAA));"),e(),t(24,"li"),o(25,"Preservar o foco vis\xEDvel na navega\xE7\xE3o via teclado. (2.4.7: Foco vis\xEDvel (A));"),e(),t(26,"li"),o(27,"\xC1reas de clique ou toque para elementos interativos devem ter pelo menos 44x44 pixels (2.5.5: \xC1rea de clique (AAA));"),e()(),t(28,"h4",7),o(29,"Tokens customiz\xE1veis"),e(),t(30,"p"),o(31,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(32,"blockquote")(33,"p"),o(34,"Para maiores informa\xE7\xF5es, acesse o guia "),t(35,"a",8),o(36,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),o(37,"."),e()(),t(38,"table")(39,"thead")(40,"tr")(41,"th"),o(42,"Propriedade"),e(),t(43,"th"),o(44,"Descri\xE7\xE3o"),e(),t(45,"th"),o(46,"Valor Padr\xE3o"),e()()(),t(47,"tbody")(48,"tr")(49,"td")(50,"strong"),o(51,"Default Values"),e()(),r(52,"td")(53,"td"),e(),t(54,"tr")(55,"td")(56,"code"),o(57,"--font-family"),e()(),t(58,"td"),o(59,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(60,"td")(61,"code"),o(62,"var(--font-family-theme)"),e()()(),t(63,"tr")(64,"td")(65,"code"),o(66,"--font-color"),e()(),t(67,"td"),o(68,"Cor principal do texto"),e(),t(69,"td")(70,"code"),o(71,"var(--color-neutral-dark-90)"),e()()(),t(72,"tr")(73,"td")(74,"code"),o(75,"--font-color-support"),e()(),t(76,"td"),o(77,"Cor principal do texto de supporte"),e(),t(78,"td")(79,"code"),o(80,"var(--color-neutral-dark-80)"),e()()(),t(81,"tr")(82,"td")(83,"code"),o(84,"--border-radius"),e()(),t(85,"td"),o(86,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),t(87,"td")(88,"code"),o(89,"var(--border-radius-md)"),e()()(),t(90,"tr")(91,"td")(92,"strong"),o(93,"Type Success"),e()(),r(94,"td")(95,"td"),e(),t(96,"tr")(97,"td")(98,"code"),o(99,"--color-success"),e()(),t(100,"td"),o(101,"Cor principal no tipo success"),e(),t(102,"td")(103,"code"),o(104,"var(--color-feedback-positive-base)"),e()()(),t(105,"tr")(106,"td")(107,"code"),o(108,"--background-success"),e()(),t(109,"td"),o(110,"Cor de fundo principal no tipo success"),e(),t(111,"td")(112,"code"),o(113,"var(--color-feedback-positive-lightest)"),e()()(),t(114,"tr")(115,"td")(116,"code"),o(117,"--border-color-success"),e()(),t(118,"td"),o(119,"Cor da borda principal tipo success"),e(),t(120,"td")(121,"code"),o(122,"var(--color-feedback-positive-lighter)"),e()()(),t(123,"tr")(124,"td")(125,"strong"),o(126,"Type Error"),e()(),r(127,"td")(128,"td"),e(),t(129,"tr")(130,"td")(131,"code"),o(132,"--color-error"),e()(),t(133,"td"),o(134,"Cor principal no tipo error"),e(),t(135,"td")(136,"code"),o(137,"var(--color-feedback-negative-base)"),e()()(),t(138,"tr")(139,"td")(140,"code"),o(141,"--background-error"),e()(),t(142,"td"),o(143,"Cor de fundo principal no tipo error"),e(),t(144,"td")(145,"code"),o(146,"var(--color-feedback-negative-lightest)"),e()()(),t(147,"tr")(148,"td")(149,"code"),o(150,"--border-color-error"),e()(),t(151,"td"),o(152,"Cor da borda principal tipo error"),e(),t(153,"td")(154,"code"),o(155,"var(--color-feedback-negative-lighter)"),e()()(),t(156,"tr")(157,"td")(158,"strong"),o(159,"Type Warning"),e()(),r(160,"td")(161,"td"),e(),t(162,"tr")(163,"td")(164,"code"),o(165,"--color-icon-warning"),e()(),t(166,"td"),o(167,"Cor principal do icone no tipo warning"),e(),t(168,"td")(169,"code"),o(170,"var(--color-neutral-dark-90)"),e()()(),t(171,"tr")(172,"td")(173,"code"),o(174,"--color-warning"),e()(),t(175,"td"),o(176,"Cor principal no tipo warning"),e(),t(177,"td")(178,"code"),o(179,"var(--color-feedback-warning-base)"),e()()(),t(180,"tr")(181,"td")(182,"code"),o(183,"--background-warning"),e()(),t(184,"td"),o(185,"Cor de fundo principal no tipo warning"),e(),t(186,"td")(187,"code"),o(188,"var(--color-feedback-warning-lightest)"),e()()(),t(189,"tr")(190,"td")(191,"code"),o(192,"--border-color-warning"),e()(),t(193,"td"),o(194,"Cor da borda principal tipo warning"),e(),t(195,"td")(196,"code"),o(197,"var(--color-feedback-warning-lighter)"),e()()(),t(198,"tr")(199,"td")(200,"strong"),o(201,"Type Info"),e()(),r(202,"td")(203,"td"),e(),t(204,"tr")(205,"td")(206,"code"),o(207,"--color-info"),e()(),t(208,"td"),o(209,"Cor principal no tipo info"),e(),t(210,"td")(211,"code"),o(212,"var(--color-feedback-info-base)"),e()()(),t(213,"tr")(214,"td")(215,"code"),o(216,"--background-info"),e()(),t(217,"td"),o(218,"Cor de fundo principal no tipo info"),e(),t(219,"td")(220,"code"),o(221,"var(--color-feedback-info-lightest)"),e()()(),t(222,"tr")(223,"td")(224,"code"),o(225,"--border-color-info"),e()(),t(226,"td"),o(227,"Cor da borda principal tipo info"),e(),t(228,"td")(229,"code"),o(230,"var(--color-feedback-info-lighter)"),e()()()()()(),t(231,"div",9)(232,"h4",10),o(233,"Seletor"),e(),t(234,"pre",11),o(235,`<po-toaster
    p-action="Function"
    p-action-label="string"
    p-hide="boolean"
    (p-hide-change)="EventEmitter"
    p-message="string"
    p-show-close="boolean"
    p-support-message="string"
    p-type="PoToasterType" >
</po-toaster>
`),e()(),t(236,"h4",12),o(237,"Propriedades"),e(),t(238,"table",13)(239,"tr",14)(240,"th",15),o(241,"Nome"),e(),t(242,"th",15),o(243,"Tipo"),e(),t(244,"th",15),o(245,"Padr\xE3o"),e(),t(246,"th",15),o(247,"Descri\xE7\xE3o"),e()(),t(248,"tr",16)(249,"td",17)(250,"div",18)(251,"span",19),o(252," p-action"),r(253,"br"),e()()(),t(254,"td",20)(255,"code",21),o(256,"Function"),e()(),t(257,"td",22),o(258,"-"),e(),t(259,"td",23)(260,"em")(261,"strong"),o(262,"(opcional)"),e()(),t(263,"p"),o(264,"A\xE7\xE3o para a notifica\xE7\xE3o."),e()()(),t(265,"tr",16)(266,"td",17)(267,"div",18)(268,"span",19),o(269," p-action-label"),r(270,"br"),e()()(),t(271,"td",20)(272,"code",24),o(273,"string"),e()(),t(274,"td",22),o(275,"-"),e(),t(276,"td",23)(277,"em")(278,"strong"),o(279,"(opcional)"),e()(),t(280,"p"),o(281,"Label do bot\xE3o quando houver uma a\xE7\xE3o definida."),e()()(),t(282,"tr",16)(283,"td",17)(284,"div",18)(285,"span",19),o(286," p-hide"),r(287,"br"),e()()(),t(288,"td",20)(289,"code",25),o(290,"boolean"),e()(),t(291,"td",22)(292,"p")(293,"code"),o(294,"false"),e()()(),t(295,"td",23)(296,"em")(297,"strong"),o(298,"(opcional)"),e()(),t(299,"p"),o(300,"Define se o Toaster esta invisivel."),e()()(),t(301,"tr",16)(302,"td",17)(303,"div",26)(304,"span",27),o(305," (p-hide-change)"),r(306,"br"),e()()(),t(307,"td",20)(308,"code",28),o(309,"EventEmitter"),e()(),t(310,"td",22),o(311,"-"),e(),t(312,"td",23)(313,"em")(314,"strong"),o(315,"(opcional)"),e()(),t(316,"p"),o(317,"Evento emitido quando o valor de "),t(318,"code"),o(319,"isHide"),e(),o(320," \xE9 alterado."),e()()(),t(321,"tr",16)(322,"td",17)(323,"div",18)(324,"span",19),o(325," p-message"),r(326,"br"),e()()(),t(327,"td",20)(328,"code",24),o(329,"string"),e()(),t(330,"td",22),o(331,"-"),e(),t(332,"td",23)(333,"em")(334,"strong"),o(335,"(opcional)"),e()(),t(336,"p"),o(337,"Mensagem a ser exibida na notifica\xE7\xE3o."),e()()(),t(338,"tr",16)(339,"td",17)(340,"div",18)(341,"span",19),o(342," p-show-close"),r(343,"br"),e()()(),t(344,"td",20)(345,"code",25),o(346,"boolean"),e()(),t(347,"td",22)(348,"p")(349,"code"),o(350,"true"),e()()(),t(351,"td",23)(352,"em")(353,"strong"),o(354,"(opcional)"),e()(),t(355,"p"),o(356,"Exibe bot\xE3o de fechar no toaster modo inline."),e()()(),t(357,"tr",16)(358,"td",17)(359,"div",18)(360,"span",19),o(361," p-support-message"),r(362,"br"),e()()(),t(363,"td",20)(364,"code",24),o(365,"string"),e()(),t(366,"td",22),o(367,"-"),e(),t(368,"td",23)(369,"em")(370,"strong"),o(371,"(opcional)"),e()(),t(372,"p"),o(373,"Mensagem de suporte a ser exibida na notifica\xE7\xE3o."),e()()(),t(374,"tr",16)(375,"td",17)(376,"div",18)(377,"span",19),o(378," p-type"),r(379,"br"),e()()(),t(380,"td",20)(381,"code",29),o(382,"PoToasterType"),e()(),t(383,"td",22)(384,"p")(385,"code"),o(386,"PoToasterType.Information"),e()()(),t(387,"td",23)(388,"em")(389,"strong"),o(390,"(opcional)"),e()(),t(391,"p"),o(392,"Determina o tipo de notifica\xE7\xE3o."),e(),t(393,"p"),o(394,"Valores aceitos: "),t(395,"code"),o(396,"error"),e(),o(397,", "),t(398,"code"),o(399,"information"),e(),o(400,", "),t(401,"code"),o(402,"success"),e(),o(403," e "),t(404,"code"),o(405,"warning"),e(),o(406,"."),e()()()(),t(407,"h3"),o(408,"Enums"),e(),t(409,"h4",4)(410,"code",5),o(411,"PoToasterType"),e()(),t(412,"div",2)(413,"p"),o(414,"Define os tipos poss\xEDveis para o "),t(415,"code"),o(416,"PoToasterComponent"),e(),o(417,"."),e()(),t(418,"h4",12),o(419,"Propriedades"),e(),t(420,"table",13)(421,"tr",14)(422,"th",15),o(423,"Nome"),e(),t(424,"th",15),o(425,"Descri\xE7\xE3o"),e()(),t(426,"tr",16)(427,"td",17)(428,"div",18)(429,"span",19),o(430," Error"),r(431,"br"),e()()(),t(432,"td",23)(433,"p"),o(434,"Tipo de toaster para mensagens de erro."),e()()(),t(435,"tr",16)(436,"td",17)(437,"div",18)(438,"span",19),o(439," Information"),r(440,"br"),e()()(),t(441,"td",23)(442,"p"),o(443,"Tipo de toaster para mensagens informativas."),e()()(),t(444,"tr",16)(445,"td",17)(446,"div",18)(447,"span",19),o(448," Success"),r(449,"br"),e()()(),t(450,"td",23)(451,"p"),o(452,"Tipo de toaster para mensagens de sucesso."),e()()(),t(453,"tr",16)(454,"td",17)(455,"div",18)(456,"span",19),o(457," Warning"),r(458,"br"),e()()(),t(459,"td",23)(460,"p"),o(461,"Tipo de toaster para mensagens de aten\xE7\xE3o."),e()()()()())},dependencies:[w],encapsulation:2})}return i})();var se=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||i)(A(U),A(K))};static \u0275cmp=d({type:i,selectors:[["ng-component"]],standalone:!1,decls:7,vars:4,consts:[["p-title"," Toaster",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,n){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),r(3,"sample-po-toaster-doc"),e(),t(4,"po-tab",3),r(5,"sample-po-toaster-basic-view")(6,"sample-po-toaster-labs-view"),e()()()),a&2&&(h("p-actions",n.actions),p(2),h("p-active",n.activeTab.includes("doc")),p(2),h("p-hide",n.hidePoWebSample)("p-active",n.activeTab.includes("web")))},dependencies:[ee,v,x,ie,re,le],encapsulation:2})}return i})();var fe=[{path:"",component:se}],pe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=P({type:i});static \u0275inj=y({imports:[F.forChild(fe),F]})}return i})();var Ne=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=P({type:i});static \u0275inj=y({imports:[te,pe]})}return i})();export{Ne as DocPoToasterModule};
