import{$ as k,$a as T,Bc as J,F as u,Fa as q,G as g,Ga as n,Ia as L,Ka as C,La as b,Lb as V,Ma as S,Mb as z,Nb as N,Ob as I,Od as X,Pa as P,Pb as F,T as s,U as M,Wb as G,Xd as y,Yb as j,Yd as E,Zb as R,_ as c,ad as K,ha as m,jc as _,ka as w,md as H,na as t,oa as e,oc as W,pa as l,re as x,se as Y,ta as B,td as Q,ua as v,y as D,zc as A}from"./chunk-PI3TYJHE.js";var Z=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-loading-overlay-basic"]],standalone:!1,decls:2,vars:0,consts:[[1,"sample-container"]],template:function(a,i){a&1&&(t(0,"div",0),l(1,"po-loading-overlay"),e())},dependencies:[_],styles:[".sample-container[_ngcontent-%COMP%]{position:relative;height:300px}"]})}return o})();var se=o=>({"docs-sample-code-tabs":o}),ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-loading-overlay-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Loading Overlay Basic"),e(),t(4,"a",2),v("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.html"),e(),t(13,"pre",7),n(14,`<div class="sample-container">
  <po-loading-overlay></po-loading-overlay>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-loading-overlay-basic',
  templateUrl: './sample-po-loading-overlay-basic.component.html',
  styles: [
    \`
      .sample-container {
        position: relative;
        height: 300px;
      }
    \`
  ],
  standalone: false
})
export class SamplePoLoadingOverlayBasicComponent {}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-loading-overlay-basic"),e(),l(23,"hr")),a&2&&(s(5),w("po-icon "+i.sampleCodeButtonIcon),s(),L(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",P(4,se,i.hideSampleCodeTabs)))},dependencies:[T,x,y,E,Z],encapsulation:2})}return o})();var te=(()=>{class o{properties=[];text;size;sizesOptions=[{label:"xs",value:"xs"},{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"}];propertiesOptions=[{value:"screenLock",label:"Screen Lock"}];ngOnInit(){this.restore()}onChangeCheckbox(p){p.includes("screenLock")&&setTimeout(()=>{this.properties=[]},2e3)}restore(){this.size="lg",this.text=null}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-loading-overlay-labs"]],standalone:!1,decls:13,vars:8,consts:[["formProperties","ngForm"],[1,"sample-container"],[3,"p-screen-lock","p-text","p-size"],[1,"po-row"],["name","text","p-label","Text",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],[1,"po-md-3"],["p-label","Sample Restore",3,"p-click"]],template:function(a,i){if(a&1){let d=B();t(0,"div",1),l(1,"po-loading-overlay",2),e(),l(2,"hr"),t(3,"form",null,0)(5,"div",3)(6,"po-input",4),S("ngModelChange",function(r){return u(d),b(i.text,r)||(i.text=r),g(r)}),e(),t(7,"po-checkbox-group",5),S("ngModelChange",function(r){return u(d),b(i.properties,r)||(i.properties=r),g(r)}),v("p-change",function(r){return u(d),g(i.onChangeCheckbox(r))}),e()(),t(8,"div",3)(9,"po-radio-group",6),S("ngModelChange",function(r){return u(d),b(i.size,r)||(i.size=r),g(r)}),e()(),t(10,"div",3)(11,"div",7)(12,"po-button",8),v("p-click",function(){return u(d),g(i.restore())}),e()()()()}a&2&&(s(),m("p-screen-lock",i.properties==null?null:i.properties.includes("screenLock"))("p-text",i.text)("p-size",i.size),s(5),C("ngModel",i.text),s(),C("ngModel",i.properties),m("p-options",i.propertiesOptions),s(2),C("ngModel",i.size),m("p-options",i.sizesOptions))},dependencies:[F,V,z,I,N,W,A,J,H,_],styles:[".sample-container[_ngcontent-%COMP%]{position:relative;height:300px}"]})}return o})();var ue=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-loading-overlay-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Loading Overlay Labs"),e(),t(4,"a",2),v("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.html"),e(),t(13,"pre",7),n(14,`<div class="sample-container">
  <po-loading-overlay [p-screen-lock]="properties?.includes('screenLock')" [p-text]="text" [p-size]="size">
  </po-loading-overlay>
</div>

<hr />

<form #formProperties="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="text" [(ngModel)]="text" p-label="Text"> </po-input>

    <po-checkbox-group
      class="po-md-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="onChangeCheckbox($event)"
    >
    </po-checkbox-group>
  </div>
  <div class="po-row">
    <po-radio-group class="po-md-6" name="size" [(ngModel)]="size" p-label="Size" [p-options]="sizesOptions">
    </po-radio-group>
  </div>

  <div class="po-row">
    <div class="po-md-3">
      <po-button p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-loading-overlay-labs',
  templateUrl: './sample-po-loading-overlay-labs.component.html',
  styles: [
    \`
      .sample-container {
        position: relative;
        height: 300px;
      }
    \`
  ],
  standalone: false
})
export class SamplePoLoadingOverlayLabsComponent implements OnInit {
  properties: Array<string> = [];
  text: string;
  size: string;
  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'xs', value: 'xs' },
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' }
  ];

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'screenLock', label: 'Screen Lock' }];

  ngOnInit() {
    this.restore();
  }

  onChangeCheckbox(checkbox: Array<string>) {
    if (checkbox.includes('screenLock')) {
      setTimeout(() => {
        this.properties = [];
      }, 2000);
    }
  }

  restore() {
    this.size = 'lg';
    this.text = null;
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-loading-overlay-labs"),e(),l(23,"hr")),a&2&&(s(5),w("po-icon "+i.sampleCodeButtonIcon),s(),L(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",P(4,ue,i.hideSampleCodeTabs)))},dependencies:[T,x,y,E,te],encapsulation:2})}return o})();var oe=(()=>{class o{poNotification;environment={urlServer:"",urlDB:"",userDB:"",passwordDB:""};isHideLoading=!0;constructor(p){this.poNotification=p}connectionTest(){let p="Connection ok";this.isHideLoading=!1,setTimeout(()=>{this.isHideLoading=!0,this.poNotification.success(p)},450)}static \u0275fac=function(a){return new(a||o)(M(K))};static \u0275cmp=c({type:o,selectors:[["sample-po-loading-overlay-connection-test"]],standalone:!1,decls:11,vars:6,consts:[["formConfig","ngForm"],[3,"hidden"],[1,"po-row"],["name","urlServer","p-clean","","p-label","URL Server","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","urlDB","p-clean","","p-label","URL Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","userDB","p-clean","","p-label","User Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","passwordDB","p-clean","","p-label","Password Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Connect",1,"po-md-4",3,"p-click","p-disabled"]],template:function(a,i){if(a&1){let d=B();t(0,"form",null,0)(2,"div"),l(3,"po-loading-overlay",1),e(),t(4,"div",2)(5,"po-input",3),S("ngModelChange",function(r){return u(d),b(i.environment.urlServer,r)||(i.environment.urlServer=r),g(r)}),e(),t(6,"po-input",4),S("ngModelChange",function(r){return u(d),b(i.environment.urlDB,r)||(i.environment.urlDB=r),g(r)}),e(),t(7,"po-input",5),S("ngModelChange",function(r){return u(d),b(i.environment.userDB,r)||(i.environment.userDB=r),g(r)}),e(),t(8,"po-password",6),S("ngModelChange",function(r){return u(d),b(i.environment.passwordDB,r)||(i.environment.passwordDB=r),g(r)}),e()(),t(9,"div",2)(10,"po-button",7),v("p-click",function(){u(d);let r=q(1);return i.connectionTest(),g(r.reset())}),e()()()}if(a&2){let d=q(1);s(3),m("hidden",i.isHideLoading),s(2),C("ngModel",i.environment.urlServer),s(),C("ngModel",i.environment.urlDB),s(),C("ngModel",i.environment.userDB),s(),C("ngModel",i.environment.passwordDB),s(2),m("p-disabled",d.invalid)}},dependencies:[F,V,z,I,N,W,H,Q,_],encapsulation:2})}return o})();var he=o=>({"docs-sample-code-tabs":o}),ie=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-loading-overlay-connection-test-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Loading Overlay - Connection Test"),e(),t(4,"a",2),v("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.html"),e(),t(13,"pre",7),n(14,`<form #formConfig="ngForm">
  <div>
    <po-loading-overlay [hidden]="isHideLoading"></po-loading-overlay>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="urlServer"
      [(ngModel)]="environment.urlServer"
      p-clean
      p-label="URL Server"
      p-required
    >
    </po-input>

    <po-input class="po-md-6" name="urlDB" [(ngModel)]="environment.urlDB" p-clean p-label="URL Database" p-required>
    </po-input>

    <po-input class="po-md-6" name="userDB" [(ngModel)]="environment.userDB" p-clean p-label="User Database" p-required>
    </po-input>

    <po-password
      class="po-md-6"
      name="passwordDB"
      [(ngModel)]="environment.passwordDB"
      p-clean
      p-label="Password Database"
      p-required
    >
    </po-password>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4"
      p-label="Connect"
      [p-disabled]="formConfig.invalid"
      (p-click)="connectionTest(); formConfig.reset()"
    >
    </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-loading-overlay-connection-test',
  templateUrl: 'sample-po-loading-overlay-connection-test.component.html',
  standalone: false
})
export class SamplePoLoadingOverlayConnectionTestComponent {
  environment = {
    urlServer: '',
    urlDB: '',
    userDB: '',
    passwordDB: ''
  };

  isHideLoading = true;

  constructor(private poNotification: PoNotificationService) {}

  connectionTest() {
    const message = 'Connection ok';

    this.isHideLoading = false;

    setTimeout(() => {
      this.isHideLoading = true;
      this.poNotification.success(message);
    }, 450);
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-loading-overlay-connection-test"),e(),l(23,"hr")),a&2&&(s(5),w("po-icon "+i.sampleCodeButtonIcon),s(),L(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",P(4,he,i.hideSampleCodeTabs)))},dependencies:[T,x,y,E,oe],encapsulation:2})}return o})();var ae=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-loading-overlay-doc"]],standalone:!1,decls:255,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","/documentation/po-i18n"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoLoadingModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,"M\xF3dulo do componente po-loading-overlay."),e()(),t(7,"h3",3),n(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),n(11,"PoLoadingOverlayComponent"),e()(),t(12,"div",2)(13,"p"),n(14,"Este componente mostra ao usu\xE1rio uma imagem de "),t(15,"em"),n(16,"loading"),e(),n(17,` e bloqueia a p\xE1gina inteira ou o container escolhido,
enquanto aguarda a resposta de alguma requisi\xE7\xE3o.`),e(),t(18,"h4",6),n(19,"Tokens customiz\xE1veis"),e(),t(20,"p"),n(21,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),l(22,"br"),n(23,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),t(24,"code"),n(25,".po-loading"),e()(),t(26,"blockquote")(27,"p"),n(28,"Para maiores informa\xE7\xF5es, acesse o guia "),t(29,"a",7),n(30,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(31,"."),e()(),t(32,"table")(33,"thead")(34,"tr")(35,"th"),n(36,"Propriedade"),e(),t(37,"th"),n(38,"Descri\xE7\xE3o"),e(),t(39,"th"),n(40,"Valor Padr\xE3o"),e()()(),t(41,"tbody")(42,"tr")(43,"td")(44,"strong"),n(45,"Default Values"),e()(),l(46,"td")(47,"td"),e(),t(48,"tr")(49,"td")(50,"code"),n(51,"--font-family"),e()(),t(52,"td"),n(53,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(54,"td")(55,"code"),n(56,"var(--font-family-theme)"),e()()(),t(57,"tr")(58,"td")(59,"code"),n(60,"--font-weight"),e()(),t(61,"td"),n(62,"Peso da fonte"),e(),t(63,"td")(64,"code"),n(65,"var(--font-weight-normal)"),e()()(),t(66,"tr")(67,"td")(68,"code"),n(69,"--text-color"),e()(),t(70,"td"),n(71,"Cor do texto"),e(),t(72,"td")(73,"code"),n(74,"var(--color-neutral-dark-70)"),e()()(),t(75,"tr")(76,"td")(77,"code"),n(78,"--border-radius"),e()(),t(79,"td"),n(80,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),t(81,"td")(82,"code"),n(83,"var(--border-radius-md)"),e()()(),t(84,"tr")(85,"td")(86,"code"),n(87,"--border-width"),e()(),t(88,"td"),n(89,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),e(),t(90,"td")(91,"code"),n(92,"var(--border-width-sm)"),e()()(),t(93,"tr")(94,"td")(95,"code"),n(96,"--border-color"),e()(),t(97,"td"),n(98,"Cor da borda"),e(),t(99,"td")(100,"code"),n(101,"var(--color-neutral-light-20)"),e()()(),t(102,"tr")(103,"td")(104,"code"),n(105,"--background"),e()(),t(106,"td"),n(107,"Cor de background"),e(),t(108,"td")(109,"code"),n(110,"var(--color-neutral-light-00)"),e()()(),t(111,"tr")(112,"td")(113,"code"),n(114,"--shadow"),e()(),t(115,"td"),n(116,"Cont\xE9m o valor da sombra do elemento"),e(),t(117,"td")(118,"code"),n(119,"var(--shadow-md)"),e()()(),t(120,"tr")(121,"td")(122,"strong"),n(123,"po-loading-icon"),e()(),l(124,"td")(125,"td"),e(),t(126,"tr")(127,"td")(128,"code"),n(129,"--color"),e()(),t(130,"td"),n(131,"Cor principal do spinner"),e(),t(132,"td")(133,"code"),n(134,"var(--color-action-default)"),e()()()()()(),t(135,"div",8)(136,"h4",9),n(137,"Seletor"),e(),t(138,"pre",10),n(139,`<po-loading-overlay
    p-screen-lock="boolean"
    p-size="string"
    p-text="string" >
</po-loading-overlay>
`),e()(),t(140,"h4",11),n(141,"Propriedades"),e(),t(142,"table",12)(143,"tr",13)(144,"th",14),n(145,"Nome"),e(),t(146,"th",14),n(147,"Tipo"),e(),t(148,"th",14),n(149,"Padr\xE3o"),e(),t(150,"th",14),n(151,"Descri\xE7\xE3o"),e()(),t(152,"tr",15)(153,"td",16)(154,"div",17)(155,"span",18),n(156," p-screen-lock"),l(157,"br"),e()()(),t(158,"td",19)(159,"code",20),n(160,"boolean"),e()(),t(161,"td",21)(162,"p")(163,"code"),n(164,"false"),e()()(),t(165,"td",22)(166,"em")(167,"strong"),n(168,"(opcional)"),e()(),t(169,"p"),n(170,"Define se o "),t(171,"em"),n(172,"overlay"),e(),n(173," ser\xE1 aplicado a um "),t(174,"em"),n(175,"container"),e(),n(176," ou \xE0 p\xE1gina inteira."),e(),t(177,"p"),n(178,"Para utilizar o componente como um "),t(179,"em"),n(180,"container"),e(),n(181,", o elemento pai dever\xE1 receber uma posi\xE7\xE3o relativa, por exemplo:"),e(),t(182,"pre")(183,"code"),n(184,`<div style="position: relative">

 <po-chart [p-series]="[{ value: 10, category: 'Example' }]">
 </po-chart>

 <po-loading-overlay>
 </po-loading-overlay>
</div>`),e()()()(),t(185,"tr",15)(186,"td",16)(187,"div",17)(188,"span",18),n(189," p-size"),l(190,"br"),e()()(),t(191,"td",19)(192,"code",23),n(193,"string"),e()(),t(194,"td",21)(195,"p")(196,"code"),n(197,"lg"),e()()(),t(198,"td",22)(199,"em")(200,"strong"),n(201,"(opcional)"),e()(),t(202,"p"),n(203,"Define o tamanho do componente com base no tamanho do \xEDcone de "),t(204,"em"),n(205,"loading"),e(),n(206,"."),e(),t(207,"p"),n(208,"Tamanhos dispon\xEDveis para o "),t(209,"em"),n(210,"loading"),e(),n(211,":"),e(),t(212,"ul")(213,"li")(214,"code"),n(215,"xs"),e(),n(216,": 16px"),e(),t(217,"li")(218,"code"),n(219,"sm"),e(),n(220,": 24px"),e(),t(221,"li")(222,"code"),n(223,"md"),e(),n(224,": 48px"),e(),t(225,"li")(226,"code"),n(227,"lg"),e(),n(228,": 80px (valor padr\xE3o)"),e()()()(),t(229,"tr",15)(230,"td",16)(231,"div",17)(232,"span",18),n(233," p-text"),l(234,"br"),e()()(),t(235,"td",19)(236,"code",23),n(237,"string"),e()(),t(238,"td",21)(239,"p")(240,"code"),n(241,"Carregando"),e()()(),t(242,"td",22)(243,"em")(244,"strong"),n(245,"(opcional)"),e()(),t(246,"p"),n(247,"Texto a ser exibido no componente."),e(),t(248,"blockquote")(249,"p"),n(250,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),t(251,"a",24)(252,"strong"),n(253,"PoI18n"),e()(),n(254," ou navegador."),e()()()()()())},dependencies:[x],encapsulation:2})}return o})();var le=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(M(G),M(j))};static \u0275cmp=c({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Loading Overlay",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,i){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),l(3,"sample-po-loading-overlay-doc"),e(),t(4,"po-tab",3),l(5,"sample-po-loading-overlay-basic-view")(6,"sample-po-loading-overlay-labs-view")(7,"sample-po-loading-overlay-connection-test-view"),e()()()),a&2&&(m("p-actions",i.actions),s(2),m("p-active",i.activeTab.includes("doc")),s(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[X,y,E,ee,ne,ie,ae],encapsulation:2})}return o})();var Se=[{path:"",component:le}],re=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=k({type:o});static \u0275inj=D({imports:[R.forChild(Se),R]})}return o})();var Ue=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=k({type:o});static \u0275inj=D({imports:[Y,re]})}return o})();export{Ue as DocPoLoadingOverlayModule};
