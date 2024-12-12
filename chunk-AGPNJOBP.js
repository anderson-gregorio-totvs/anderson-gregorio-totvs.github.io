import{$ as V,$a as M,Bc as K,Cd as $,F as g,G as b,Ga as t,Gc as O,Hc as k,Ia as w,Ic as T,Ka as S,La as E,Lb as I,Ma as f,Mb as j,Nb as A,Ob as L,Od as W,Pa as _,Pb as G,T as s,U as F,Wb as U,Xd as P,Yb as Q,Yd as C,Zb as N,_ as d,_b as z,ha as m,ka as y,md as X,na as n,oa as e,oc as q,pa as r,re as x,sd as Y,se as ee,ta as H,ua as h,xd as Z,y as B,zc as J}from"./chunk-23IW53AA.js";var te=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-progress-basic"]],standalone:!1,decls:1,vars:1,consts:[[3,"p-value"]],template:function(a,o){a&1&&r(0,"po-progress",0),a&2&&m("p-value",25)},dependencies:[T],encapsulation:2})}return i})();var ce=i=>({"docs-sample-code-tabs":i}),oe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-progress-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Progress Basic"),e(),n(4,"a",2),h("click",function(){return o.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-progress-basic/sample-po-progress-basic.component.html"),e(),n(13,"pre",7),t(14,`<po-progress [p-value]="25"></po-progress>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-progress-basic/sample-po-progress-basic.component.ts"),e(),n(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-progress-basic',
  templateUrl: './sample-po-progress-basic.component.html',
  standalone: false
})
export class SamplePoProgressBasicComponent {}
`),e()()()()(),n(21,"div",10),r(22,"sample-po-progress-basic"),e(),r(23,"hr")),a&2&&(s(5),y("po-icon "+o.sampleCodeButtonIcon),s(),w(" ",o.sampleCodeButtonLabel,""),s(),m("ngClass",_(4,ce,o.hideSampleCodeTabs)))},dependencies:[M,x,P,C,te],encapsulation:2})}return i})();var ie=(()=>{class i{event;info;infoIcon;properties;status;size=k.large;text;value;infoIconsOptions=[{label:"ph ph-warning-circle",value:"ph ph-warning-circle"},{label:"ph ph-check",value:"ph ph-check"},{label:"ph ph-user",value:"ph ph-user"},{label:"ph ph-cloud-slash",value:"ph ph-cloud-slash"}];propertiesOptions=[{label:"Disabled Cancel",value:"disabledCancel"},{label:"Indeterminate",value:"indeterminate"},{label:"Show percentage",value:"showPercentage"}];statusOptions=[{label:"Default",value:O.Default},{label:"Success",value:O.Success},{label:"Error",value:O.Error}];sizeOptions=[{label:"Medium",value:k.medium},{label:"Large",value:k.large}];ngOnInit(){this.restore()}onEvent(p){this.event=p}restore(){this.event=void 0,this.info=void 0,this.infoIcon=void 0,this.properties=[],this.status=void 0,this.text=void 0,this.value=void 0,this.size=k.large}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-progress-labs"]],standalone:!1,decls:16,vars:21,consts:[["progressBarPropertiesForm","ngForm"],[3,"p-cancel","p-retry","p-disabled-cancel","p-indeterminate","p-show-percentage","p-info","p-info-icon","p-status","p-text","p-value","p-size"],["p-label","Event",3,"p-value"],[1,"po-row"],["name","text","p-clean","","p-label","Text",1,"po-md-6",3,"ngModelChange","ngModel"],["name","value","p-clean","","p-label","Value","p-max","100","p-min","0",1,"po-md-6",3,"ngModelChange","ngModel"],["name","info","p-clean","","p-label","Info",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","infoIcon","p-label","Info icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","status","p-label","Status",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let c=H();n(0,"po-progress",1),h("p-cancel",function(){return g(c),b(o.onEvent("p-cancel"))})("p-retry",function(){return g(c),b(o.onEvent("p-retry"))}),e(),r(1,"po-divider")(2,"po-info",2)(3,"po-divider"),n(4,"form",null,0)(6,"div",3)(7,"po-input",4),f("ngModelChange",function(l){return g(c),E(o.text,l)||(o.text=l),b(l)}),e(),n(8,"po-number",5),f("ngModelChange",function(l){return g(c),E(o.value,l)||(o.value=l),b(l)}),e(),n(9,"po-input",6),f("ngModelChange",function(l){return g(c),E(o.info,l)||(o.info=l),b(l)}),e(),n(10,"po-checkbox-group",7),f("ngModelChange",function(l){return g(c),E(o.properties,l)||(o.properties=l),b(l)}),e(),n(11,"po-radio-group",8),f("ngModelChange",function(l){return g(c),E(o.infoIcon,l)||(o.infoIcon=l),b(l)}),e(),n(12,"po-radio-group",9),f("ngModelChange",function(l){return g(c),E(o.status,l)||(o.status=l),b(l)}),e(),n(13,"po-radio-group",10),f("ngModelChange",function(l){return g(c),E(o.size,l)||(o.size=l),b(l)}),e()(),n(14,"div",3)(15,"po-button",11),h("p-click",function(){return g(c),b(o.restore())}),e()()()}a&2&&(m("p-disabled-cancel",o.properties.includes("disabledCancel"))("p-indeterminate",o.properties.includes("indeterminate"))("p-show-percentage",o.properties.includes("showPercentage"))("p-info",o.info)("p-info-icon",o.infoIcon)("p-status",o.status)("p-text",o.text)("p-value",o.value)("p-size",o.size),s(2),m("p-value",o.event),s(5),S("ngModel",o.text),s(),S("ngModel",o.value),s(),S("ngModel",o.info),s(),S("ngModel",o.properties),m("p-options",o.propertiesOptions),s(),S("ngModel",o.infoIcon),m("p-options",o.infoIconsOptions),s(),S("ngModel",o.status),m("p-options",o.statusOptions),s(),S("ngModel",o.size),m("p-options",o.sizeOptions))},dependencies:[G,I,j,L,A,q,z,J,K,X,Y,$,T],encapsulation:2})}return i})();var he=i=>({"docs-sample-code-tabs":i}),ae=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-progress-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Progress Labs"),e(),n(4,"a",2),h("click",function(){return o.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-progress-labs/sample-po-progress-labs.component.html"),e(),n(13,"pre",7),t(14,`<po-progress
  [p-disabled-cancel]="properties.includes('disabledCancel')"
  [p-indeterminate]="properties.includes('indeterminate')"
  [p-show-percentage]="properties.includes('showPercentage')"
  [p-info]="info"
  [p-info-icon]="infoIcon"
  [p-status]="status"
  [p-text]="text"
  [p-value]="value"
  [p-size]="size"
  (p-cancel)="onEvent('p-cancel')"
  (p-retry)="onEvent('p-retry')"
>
</po-progress>

<po-divider></po-divider>

<po-info p-label="Event" [p-value]="event"> </po-info>

<po-divider></po-divider>

<form #progressBarPropertiesForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="text" [(ngModel)]="text" p-clean p-label="Text"> </po-input>

    <po-number class="po-md-6" name="value" [(ngModel)]="value" p-clean p-label="Value" p-max="100" p-min="0">
    </po-number>

    <po-input class="po-md-6" name="info" [(ngModel)]="info" p-clean p-label="Info"> </po-input>

    <po-checkbox-group
      class="po-md-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-6"
      name="infoIcon"
      [(ngModel)]="infoIcon"
      p-label="Info icon"
      [p-options]="infoIconsOptions"
    >
    </po-radio-group>

    <po-radio-group class="po-md-6" name="status" [(ngModel)]="status" p-label="Status" [p-options]="statusOptions">
    </po-radio-group>

    <po-radio-group class="po-md-6" name="size" [(ngModel)]="size" p-label="Size" [p-options]="sizeOptions">
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-progress-labs/sample-po-progress-labs.component.ts"),e(),n(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoProgressStatus, PoRadioGroupOption, PoProgressSize } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-progress-labs',
  templateUrl: './sample-po-progress-labs.component.html',
  standalone: false
})
export class SamplePoProgressLabsComponent implements OnInit {
  event: any;
  info: string;
  infoIcon: string;
  properties: Array<string>;
  status: PoProgressStatus;
  size: PoProgressSize = PoProgressSize.large;
  text: string;
  value: number;

  infoIconsOptions: Array<PoRadioGroupOption> = [
    { label: 'ph ph-warning-circle', value: 'ph ph-warning-circle' },
    { label: 'ph ph-check', value: 'ph ph-check' },
    { label: 'ph ph-user', value: 'ph ph-user' },
    { label: 'ph ph-cloud-slash', value: 'ph ph-cloud-slash' }
  ];

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled Cancel', value: 'disabledCancel' },
    { label: 'Indeterminate', value: 'indeterminate' },
    { label: 'Show percentage', value: 'showPercentage' }
  ];

  statusOptions: Array<PoRadioGroupOption> = [
    { label: 'Default', value: PoProgressStatus.Default },
    { label: 'Success', value: PoProgressStatus.Success },
    { label: 'Error', value: PoProgressStatus.Error }
  ];

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'Medium', value: PoProgressSize.medium },
    { label: 'Large', value: PoProgressSize.large }
  ];

  ngOnInit() {
    this.restore();
  }

  onEvent(event) {
    this.event = event;
  }

  restore() {
    this.event = undefined;
    this.info = undefined;
    this.infoIcon = undefined;
    this.properties = [];
    this.status = undefined;
    this.text = undefined;
    this.value = undefined;
    this.size = PoProgressSize.large;
  }
}
`),e()()()()(),n(21,"div",10),r(22,"sample-po-progress-labs"),e(),r(23,"hr")),a&2&&(s(5),y("po-icon "+o.sampleCodeButtonIcon),s(),w(" ",o.sampleCodeButtonLabel,""),s(),m("ngClass",_(4,he,o.hideSampleCodeTabs)))},dependencies:[M,x,P,C,ie],encapsulation:2})}return i})();var re=(()=>{class i{buttonDisabled;progressBarValue=0;publication=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.`;get progressBarInfo(){return`${this.progressBarValue}/100`}finishEdition(){this.buttonDisabled=!0}updatePublication(){let p=setInterval(()=>{this.progressBarValue>=100?(clearInterval(p),this.finishEdition()):this.progressBarValue++},20)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-progress-publication"]],standalone:!1,decls:7,vars:4,consts:[["p-title","Edit publication"],[1,"po-row"],[1,"po-md-9",3,"ngModelChange","ngModel"],[1,"po-md-9"],["p-text","Loading update",1,"po-md-9",3,"p-value","p-show-percentage"],["p-label","Update publication",3,"p-click","p-disabled"]],template:function(a,o){a&1&&(n(0,"po-page-default",0)(1,"div",1)(2,"po-rich-text",2),f("ngModelChange",function(u){return E(o.publication,u)||(o.publication=u),u}),e(),r(3,"po-divider",3)(4,"po-progress",4),e(),n(5,"div",1)(6,"po-button",5),h("p-click",function(){return o.updatePublication()}),e()()()),a&2&&(s(2),S("ngModel",o.publication),s(2),m("p-value",o.progressBarValue)("p-show-percentage",!0),s(2),m("p-disabled",o.buttonDisabled))},dependencies:[I,L,q,z,Z,W,T],encapsulation:2})}return i})();var fe=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-progress-publication-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Progress - Publication"),e(),n(4,"a",2),h("click",function(){return o.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-progress-publication/sample-po-progress-publication.component.html"),e(),n(13,"pre",7),t(14,`<po-page-default p-title="Edit publication">
  <div class="po-row">
    <po-rich-text class="po-md-9" [(ngModel)]="publication"></po-rich-text>

    <po-divider class="po-md-9"></po-divider>

    <po-progress class="po-md-9" p-text="Loading update" [p-value]="progressBarValue" [p-show-percentage]="true">
    </po-progress>
  </div>

  <div class="po-row">
    <po-button p-label="Update publication" [p-disabled]="buttonDisabled" (p-click)="updatePublication()"> </po-button>
  </div>
</po-page-default>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-progress-publication/sample-po-progress-publication.component.ts"),e(),n(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-progress-publication',
  templateUrl: './sample-po-progress-publication.component.html',
  standalone: false
})
export class SamplePoProgressPublicationComponent {
  buttonDisabled: boolean;
  progressBarValue = 0;
  publication: string = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.\`;

  get progressBarInfo() {
    return \`\${this.progressBarValue}/100\`;
  }

  finishEdition() {
    this.buttonDisabled = true;
  }

  updatePublication() {
    const interval = setInterval(() => {
      if (this.progressBarValue >= 100) {
        clearInterval(interval);

        this.finishEdition();
      } else {
        this.progressBarValue++;
      }
    }, 20);
  }
}
`),e()()()()(),n(21,"div",10),r(22,"sample-po-progress-publication"),e(),r(23,"hr")),a&2&&(s(5),y("po-icon "+o.sampleCodeButtonIcon),s(),w(" ",o.sampleCodeButtonLabel,""),s(),m("ngClass",_(4,fe,o.hideSampleCodeTabs)))},dependencies:[M,x,P,C,re],encapsulation:2})}return i})();var le=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-progress-doc"]],standalone:!1,decls:469,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","PoProgressStatus"],["pan","",1,"docs-api-property-type","number"]],template:function(a,o){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoProgressModule } from '@po-ui/ng-components';"),e()(),n(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente "),n(7,"code"),t(8,"po-progress"),e(),t(9,"."),e()(),n(10,"h3",3),t(11,"Componente"),e(),n(12,"h4",4)(13,"code",5),t(14,"PoProgressComponent"),e()(),n(15,"div",2)(16,"p"),t(17,"Componente de barra de progresso que possibilita exibir visualmente o progresso/carregamento de uma tarefa."),e(),n(18,"p"),t(19,"Este componente pode ser utilizado no "),n(20,"em"),t(21,"upload"),e(),t(22," de arquivos, uma atualiza\xE7\xE3o no sistema ou o processamento de uma imagem."),e(),n(23,"h4",6),t(24,"Tokens customiz\xE1veis"),e(),n(25,"p"),t(26,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),n(27,"blockquote")(28,"p"),t(29,"Para maiores informa\xE7\xF5es, acesse o guia "),n(30,"a",7),t(31,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),t(32,"."),e()(),n(33,"table")(34,"thead")(35,"tr")(36,"th"),t(37,"Propriedade"),e(),n(38,"th"),t(39,"Descri\xE7\xE3o"),e(),n(40,"th"),t(41,"Valor Padr\xE3o"),e()()(),n(42,"tbody")(43,"tr")(44,"td")(45,"strong"),t(46,"Default Values"),e()(),r(47,"td")(48,"td"),e(),n(49,"tr")(50,"td")(51,"code"),t(52,"--font-family"),e()(),n(53,"td"),t(54,"Fam\xEDlia tipogr\xE1fica usada"),e(),n(55,"td")(56,"code"),t(57,"var(--font-family-theme)"),e()()(),n(58,"tr")(59,"td")(60,"code"),t(61,"--text-color"),e()(),n(62,"td"),t(63,"Cor do texto"),e(),n(64,"td")(65,"code"),t(66,"var(--color-neutral-dark-90)"),e()()(),n(67,"tr")(68,"td")(69,"strong"),t(70,"Error"),e()(),r(71,"td")(72,"td"),e(),n(73,"tr")(74,"td")(75,"code"),t(76,"--text-color-error"),e()(),n(77,"td"),t(78,"Cor do texto no estado error"),e(),n(79,"td")(80,"code"),t(81,"var(--color-feedback-negative-dark)"),e()()(),n(82,"tr")(83,"td")(84,"code"),t(85,"--color-icon-error"),e()(),n(86,"td"),t(87,"Cor do \xEDcone no estado error"),e(),n(88,"td")(89,"code"),t(90,"var(--color-feedback-negative-dark)"),e()()(),n(91,"tr")(92,"td")(93,"strong"),t(94,"po-progress-bar"),e()(),r(95,"td")(96,"td"),e(),n(97,"tr")(98,"td")(99,"code"),t(100,"--background-color-tray"),e()(),n(101,"td"),t(102,"Cor do background"),e(),n(103,"td")(104,"code"),t(105,"var(--color-brand-01-lightest)"),e()()(),n(106,"tr")(107,"td")(108,"code"),t(109,"--background-color-indicator"),e()(),n(110,"td"),t(111,"Cor do background do indicador"),e(),n(112,"td")(113,"code"),t(114,"var(--color-action-default)"),e()()()()()(),n(115,"div",8)(116,"h4",9),t(117,"Seletor"),e(),n(118,"pre",10),t(119,`<po-progress
    (p-cancel)="EventEmitter"
    p-disabled-cancel="boolean"
    p-indeterminate="boolean"
    p-info="string"
    p-info-icon="string | TemplateRef<void>"
    (p-retry)="EventEmitter"
    p-show-percentage="boolean"
    p-size="string"
    p-status="PoProgressStatus"
    p-text="string"
    p-value="number" >
</po-progress>
`),e()(),n(120,"h4",11),t(121,"Propriedades"),e(),n(122,"table",12)(123,"tr",13)(124,"th",14),t(125,"Nome"),e(),n(126,"th",14),t(127,"Tipo"),e(),n(128,"th",14),t(129,"Padr\xE3o"),e(),n(130,"th",14),t(131,"Descri\xE7\xE3o"),e()(),n(132,"tr",15)(133,"td",16)(134,"div",17)(135,"span",18),t(136," (p-cancel)"),r(137,"br"),e()()(),n(138,"td",19)(139,"code",20),t(140,"EventEmitter"),e()(),n(141,"td",21),t(142,"-"),e(),n(143,"td",22)(144,"em")(145,"strong"),t(146,"(opcional)"),e()(),n(147,"p"),t(148,'Evento que ser\xE1 disparado ao clicar no \xEDcone de cancelamento ("x") na parte inferior da barra de progresso.'),e(),n(149,"p"),t(150,"Ao ser disparado, a fun\xE7\xE3o receber\xE1 como par\xE2metro o status atual da barra de progresso."),e(),n(151,"blockquote")(152,"p"),t(153,"Se nenhuma fun\xE7\xE3o for passada para o evento ou a barra de progresso estiver com o status "),n(154,"code"),t(155,"PoProgressStatus.Success"),e(),t(156,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),e()()()(),n(157,"tr",15)(158,"td",16)(159,"div",23)(160,"span",24),t(161," p-disabled-cancel"),r(162,"br"),e()()(),n(163,"td",19)(164,"code",25),t(165,"boolean"),e()(),n(166,"td",21)(167,"p")(168,"code"),t(169,"false"),e()()(),n(170,"td",22)(171,"em")(172,"strong"),t(173,"(opcional)"),e()(),n(174,"p"),t(175,"Desabilita bot\xE3o de cancelamento na parte inferior da barra de progresso."),e(),n(176,"blockquote")(177,"p"),t(178,"Se nenhuma fun\xE7\xE3o for passada para o evento "),n(179,"code"),t(180,"(p-cancel)"),e(),t(181," ou a barra de progresso estiver com o status "),n(182,"code"),t(183,"PoProgressStatus.Success"),e(),t(184,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),e()()()(),n(185,"tr",15)(186,"td",16)(187,"div",23)(188,"span",24),t(189," p-indeterminate"),r(190,"br"),e()()(),n(191,"td",19)(192,"code",25),t(193,"boolean"),e()(),n(194,"td",21)(195,"p")(196,"code"),t(197,"false"),e()()(),n(198,"td",22)(199,"em")(200,"strong"),t(201,"(opcional)"),e()(),n(202,"p"),t(203,"Habilita o modo indeterminado na barra de progresso, que mostra uma anima\xE7\xE3o fixa sem um valor estabelecido."),e(),n(204,"p"),t(205,"Esta op\xE7\xE3o pode ser utilizada quando n\xE3o souber quanto tempo levar\xE1 para que um processo seja conclu\xEDdo."),e(),n(206,"blockquote")(207,"p"),t(208,"Caso esta propriedade e a "),n(209,"code"),t(210,"p-value"),e(),t(211," seja habilitada, a propriedade "),n(212,"code"),t(213,"p-value"),e(),t(214," ser\xE1 ignorada."),e()()()(),n(215,"tr",15)(216,"td",16)(217,"div",23)(218,"span",24),t(219," p-info"),r(220,"br"),e()()(),n(221,"td",19)(222,"code",26),t(223,"string"),e()(),n(224,"td",21),t(225,"-"),e(),n(226,"td",22)(227,"em")(228,"strong"),t(229,"(opcional)"),e()(),n(230,"p"),t(231,"Informa\xE7\xE3o adicional que aparecer\xE1 abaixo da barra de progresso ao lado direito."),e()()(),n(232,"tr",15)(233,"td",16)(234,"div",23)(235,"span",24),t(236," p-info-icon"),r(237,"br"),e()()(),n(238,"td",19)(239,"code",26),t(240,"string "),e(),n(241,"code",27),t(242," TemplateRef<void>"),e()(),n(243,"td",21),t(244,"-"),e(),n(245,"td",22)(246,"em")(247,"strong"),t(248,"(opcional)"),e()(),n(249,"p"),t(250,"\xCDcone que aparecer\xE1 ao lado do texto da propriedade "),n(251,"code"),t(252,"p-info"),e(),t(253,"."),e(),n(254,"p"),t(255,"Exemplo: "),n(256,"code"),t(257,"ph ph-check"),e(),t(258,"."),e()()(),n(259,"tr",15)(260,"td",16)(261,"div",17)(262,"span",18),t(263," (p-retry)"),r(264,"br"),e()()(),n(265,"td",19)(266,"code",20),t(267,"EventEmitter"),e()(),n(268,"td",21),t(269,"-"),e(),n(270,"td",22)(271,"em")(272,"strong"),t(273,"(opcional)"),e()(),n(274,"p"),t(275,"Evento que ser\xE1 disparado ao clicar no \xEDcone de tentar novamente na parte inferior da barra de progresso."),e(),n(276,"blockquote")(277,"p"),t(278,`o \xEDcone ser\xE1 exibido apenas se informar uma fun\xE7\xE3o neste evento e o status da barra de progresso for
`),n(279,"code"),t(280,"PoProgressStatus.Error"),e(),t(281,"."),e()()()(),n(282,"tr",15)(283,"td",16)(284,"div",23)(285,"span",24),t(286," p-show-percentage"),r(287,"br"),e()()(),n(288,"td",19)(289,"code",25),t(290,"boolean"),e()(),n(291,"td",21)(292,"p")(293,"code"),t(294,"false"),e()()(),n(295,"td",22)(296,"em")(297,"strong"),t(298,"(opcional)"),e()(),n(299,"p"),t(300,"Ativa a exibi\xE7\xE3o da porcentagem atual da barra de progresso."),e()()(),n(301,"tr",15)(302,"td",16)(303,"div",23)(304,"span",24),t(305," p-size"),r(306,"br"),e()()(),n(307,"td",19)(308,"code",26),t(309,"string"),e()(),n(310,"td",21)(311,"p")(312,"code"),t(313,"large"),e()()(),n(314,"td",22)(315,"em")(316,"strong"),t(317,"(opcional)"),e()(),n(318,"p"),t(319,"Defini\xE7\xE3o do tamanho da altura da barra de progresso."),e(),n(320,"p"),t(321,"Valores v\xE1lidos:"),e(),n(322,"ul")(323,"li")(324,"code"),t(325,"medium"),e(),t(326,": tamanho m\xE9dio"),e(),n(327,"li")(328,"code"),t(329,"large"),e(),t(330,": tamanho grande"),e()()()(),n(331,"tr",15)(332,"td",16)(333,"div",23)(334,"span",24),t(335," p-status"),r(336,"br"),e()()(),n(337,"td",19)(338,"code",28),t(339,"PoProgressStatus"),e()(),n(340,"td",21)(341,"p")(342,"code"),t(343,"PoProgressStatus.Default"),e()()(),n(344,"td",22)(345,"em")(346,"strong"),t(347,"(opcional)"),e()(),n(348,"p"),t(349,`Status da barra de progresso que indicar\xE1 visualmente ao usu\xE1rio
o andamento, por exemplo, se a mesma foi conclu\xEDda com sucesso.`),e()()(),n(350,"tr",15)(351,"td",16)(352,"div",23)(353,"span",24),t(354," p-text"),r(355,"br"),e()()(),n(356,"td",19)(357,"code",26),t(358,"string"),e()(),n(359,"td",21),t(360,"-"),e(),n(361,"td",22)(362,"em")(363,"strong"),t(364,"(opcional)"),e()(),n(365,"p"),t(366,"Texto principal que aparecer\xE1 abaixo da barra de progresso no lado esquerdo."),e()()(),n(367,"tr",15)(368,"td",16)(369,"div",23)(370,"span",24),t(371," p-value"),r(372,"br"),e()()(),n(373,"td",19)(374,"code",29),t(375,"number"),e()(),n(376,"td",21)(377,"p")(378,"code"),t(379,"0"),e()()(),n(380,"td",22)(381,"em")(382,"strong"),t(383,"(opcional)"),e()(),n(384,"p"),t(385,"Valor que representar\xE1 o progresso."),e(),n(386,"blockquote")(387,"p"),t(388,"Os valores aceitos s\xE3o n\xFAmeros inteiros de "),n(389,"code"),t(390,"0"),e(),t(391," \xE0 "),n(392,"code"),t(393,"100"),e(),t(394,"."),e()()()()(),n(395,"h3"),t(396,"Enums"),e(),n(397,"h4",4)(398,"code",5),t(399,"PoProgressSize"),e()(),n(400,"div",2)(401,"p")(402,"em"),t(403,"Enum"),e(),n(404,"code"),t(405,"PoProgressSize"),e(),t(406," para o tamanho da altura da barra de progresso."),e()(),n(407,"h4",11),t(408,"Propriedades"),e(),n(409,"table",12)(410,"tr",13)(411,"th",14),t(412,"Nome"),e(),n(413,"th",14),t(414,"Descri\xE7\xE3o"),e()()(),n(415,"h4",4)(416,"code",5),t(417,"PoProgressStatus"),e()(),n(418,"div",2)(419,"p")(420,"em"),t(421,"Enum"),e(),n(422,"code"),t(423,"PoProgressStatus"),e(),t(424," para os status de barra de progresso."),e()(),n(425,"h4",11),t(426,"Propriedades"),e(),n(427,"table",12)(428,"tr",13)(429,"th",14),t(430,"Nome"),e(),n(431,"th",14),t(432,"Descri\xE7\xE3o"),e()(),n(433,"tr",15)(434,"td",16)(435,"div",23)(436,"span",24),t(437," Default"),r(438,"br"),e()()(),n(439,"td",22)(440,"p"),t(441,"Define o status "),n(442,"code"),t(443,"default"),e(),t(444," para a barra de progresso."),e()()(),n(445,"tr",15)(446,"td",16)(447,"div",23)(448,"span",24),t(449," Error"),r(450,"br"),e()()(),n(451,"td",22)(452,"p"),t(453,"Define o status de "),n(454,"code"),t(455,"error"),e(),t(456," para a barra de progresso."),e()()(),n(457,"tr",15)(458,"td",16)(459,"div",23)(460,"span",24),t(461," Success"),r(462,"br"),e()()(),n(463,"td",22)(464,"p"),t(465,"Define o status de "),n(466,"code"),t(467,"success"),e(),t(468," para a barra de progresso."),e()()()()())},dependencies:[x],encapsulation:2})}return i})();var pe=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||i)(F(U),F(Q))};static \u0275cmp=d({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Progress",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,o){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),r(3,"sample-po-progress-doc"),e(),n(4,"po-tab",3),r(5,"sample-po-progress-basic-view")(6,"sample-po-progress-labs-view")(7,"sample-po-progress-publication-view"),e()()()),a&2&&(m("p-actions",o.actions),s(2),m("p-active",o.activeTab.includes("doc")),s(2),m("p-hide",o.hidePoWebSample)("p-active",o.activeTab.includes("web")))},dependencies:[W,P,C,oe,ae,se,le],encapsulation:2})}return i})();var Ce=[{path:"",component:pe}],me=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=V({type:i});static \u0275inj=B({imports:[N.forChild(Ce),N]})}return i})();var Qe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=V({type:i});static \u0275inj=B({imports:[ee,me]})}return i})();export{Qe as DocPoProgressModule};
