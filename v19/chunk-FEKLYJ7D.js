import{$ as D,$a as M,Ca as j,Cd as ee,Da as H,Ea as G,F as s,Fa as Q,G as c,Ga as e,Ia as P,Ka as S,La as g,Lb as V,Ma as x,Mb as F,N as A,Nb as B,Ob as N,Od as te,Pa as _,Pb as R,T as m,U as q,Wb as X,Xd as v,Yb as J,Yd as C,Zb as I,_ as b,ad as Y,gd as Z,ha as u,ka as w,md as z,na as n,oa as t,oc as O,pa as o,re as y,sd as $,se as ne,ta as L,ua as h,wd as U,y as k,zc as K}from"./chunk-PI3TYJHE.js";var ie=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-url-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","url","p-label","PO Url"]],template:function(a,i){a&1&&o(0,"po-url",0)},dependencies:[U],encapsulation:2})}return l})();var Ee=l=>({"docs-sample-code-tabs":l}),le=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-url-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Url Basic"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-url-basic/sample-po-url-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-url name="url" p-label="PO Url"> </po-url>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-url-basic/sample-po-url-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-url-basic',
  templateUrl: './sample-po-url-basic.component.html',
  standalone: false
})
export class SamplePoUrlBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-url-basic"),t(),o(23,"hr")),a&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),P(" ",i.sampleCodeButtonLabel,""),m(),u("ngClass",_(4,Ee,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,ie],encapsulation:2})}return l})();var ae=(()=>{class l{errorPattern;event;help;label;maxlength;minlength;placeholder;properties;url;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"showRequired",label:"Show Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"required",label:"Required"},{value:"errorLimit",label:"Limit Error Message"}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.properties=[],this.label=void 0,this.help=void 0,this.errorPattern="",this.placeholder="",this.minlength=void 0,this.maxlength=void 0,this.url="",this.event=""}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-url-labs"]],standalone:!1,decls:21,vars:26,consts:[["f","ngForm"],["name","url",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","ngModel","p-clean","p-disabled","p-error-pattern","p-help","p-label","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let d=L();n(0,"po-url",1),x("ngModelChange",function(r){return s(d),g(i.url,r)||(i.url=r),c(r)}),h("p-blur",function(){return s(d),c(i.changeEvent("p-blur"))})("p-change",function(){return s(d),c(i.changeEvent("p-change"))})("p-change-model",function(){return s(d),c(i.changeEvent("p-change-model"))})("p-enter",function(){return s(d),c(i.changeEvent("p-enter"))}),t(),o(1,"hr"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"hr"),n(6,"form",null,0)(8,"div",2)(9,"po-input",5),x("ngModelChange",function(r){return s(d),g(i.label,r)||(i.label=r),c(r)}),t(),n(10,"po-input",6),x("ngModelChange",function(r){return s(d),g(i.help,r)||(i.help=r),c(r)}),t()(),n(11,"div",2)(12,"po-input",7),x("ngModelChange",function(r){return s(d),g(i.placeholder,r)||(i.placeholder=r),c(r)}),t(),n(13,"po-input",8),x("ngModelChange",function(r){return s(d),g(i.errorPattern,r)||(i.errorPattern=r),c(r)}),t()(),n(14,"div",2)(15,"po-number",9),x("ngModelChange",function(r){return s(d),g(i.minlength,r)||(i.minlength=r),c(r)}),t(),n(16,"po-number",10),x("ngModelChange",function(r){return s(d),g(i.maxlength,r)||(i.maxlength=r),c(r)}),t()(),n(17,"div",2)(18,"po-checkbox-group",11),x("ngModelChange",function(r){return s(d),g(i.properties,r)||(i.properties=r),c(r)}),t()(),n(19,"div",2)(20,"po-button",12),h("p-click",function(){return s(d),c(i.restore())}),t()()()}a&2&&(S("ngModel",i.url),u("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-label",i.label)("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),m(3),u("p-value",i.url),m(),u("p-value",i.event),m(5),S("ngModel",i.label),m(),S("ngModel",i.help),m(2),S("ngModel",i.placeholder),m(),S("ngModel",i.errorPattern),m(2),S("ngModel",i.minlength),m(),S("ngModel",i.maxlength),m(2),S("ngModel",i.properties),u("p-options",i.propertiesOptions))},dependencies:[R,V,F,N,B,O,K,z,$,U,ee],encapsulation:2})}return l})();var ge=l=>({"docs-sample-code-tabs":l}),re=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-url-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Url Labs"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-url-labs/sample-po-url-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-url
  name="url"
  [(ngModel)]="url"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-label]="label"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-url>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="url"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

    <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern">
    </po-input>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

    <po-number class="po-md-6" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-url-labs/sample-po-url-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-url-labs',
  templateUrl: './sample-po-url-labs.component.html',
  standalone: false
})
export class SamplePoUrlLabsComponent implements OnInit {
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  maxlength: number;
  minlength: number;
  placeholder: string;
  properties: Array<string>;
  url: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'required', label: 'Required' },
    { value: 'errorLimit', label: 'Limit Error Message' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.properties = [];

    this.label = undefined;
    this.help = undefined;
    this.errorPattern = '';
    this.placeholder = '';

    this.minlength = undefined;
    this.maxlength = undefined;

    this.url = '';
    this.event = '';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-url-labs"),t(),o(23,"hr")),a&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),P(" ",i.sampleCodeButtonLabel,""),m(),u("ngClass",_(4,ge,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,ae],encapsulation:2})}return l})();var fe=["boxUrl"],me=(()=>{class l{poNotification;boxUrlElement;baseUrls=[];shortenedUrl;url;urlColumns=[{property:"url",label:"Long URL"},{property:"short",label:"Shortened URL"}];constructor(p){this.poNotification=p}copyToClipboard(){this.boxUrlElement.nativeElement.querySelector("input").select(),document.execCommand("copy"),this.poNotification.success("Text copied!")}shortenUrl(){let p=btoa(this.url.replace(/http|www|com|br|\/|\./gi,"").trim());this.shortenedUrl=`po.com/${p.substr(p.length-3)}`+this.baseUrls.length,this.baseUrls.push({url:this.url,short:this.shortenedUrl})}static \u0275fac=function(a){return new(a||l)(q(Y))};static \u0275cmp=b({type:l,selectors:[["sample-po-url-shortener"]],viewQuery:function(a,i){if(a&1&&j(fe,7,A),a&2){let d;H(d=G())&&(i.boxUrlElement=d.first)}},standalone:!1,decls:11,vars:7,consts:[["f","ngForm"],["boxUrl",""],[1,"po-row"],["name","url","p-label","Type your URL to be shortened","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","shortenedUrl","p-label","URL shortened","p-readonly","",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Shorten URL","p-kind","primary",1,"po-lg-2",3,"p-click","p-disabled"],["p-icon","an an-copy","p-label","Copy",1,"po-offset-lg-4","po-offset-xl-4","po-lg-2",3,"click","p-disabled"],["p-striped","true",3,"p-columns","p-items","p-hide-table-search"]],template:function(a,i){if(a&1){let d=L();n(0,"form",null,0)(2,"div",2)(3,"po-url",3),x("ngModelChange",function(r){return s(d),g(i.url,r)||(i.url=r),c(r)}),t(),n(4,"po-input",4,1),x("ngModelChange",function(r){return s(d),g(i.shortenedUrl,r)||(i.shortenedUrl=r),c(r)}),t()(),n(6,"div",2)(7,"po-button",5),h("p-click",function(){return s(d),c(i.shortenUrl())}),t(),n(8,"po-button",6),h("click",function(){return s(d),c(i.copyToClipboard())}),t()()(),o(9,"hr")(10,"po-table",7)}if(a&2){let d=Q(1);m(3),S("ngModel",i.url),m(),S("ngModel",i.shortenedUrl),m(3),u("p-disabled",d.invalid),m(),u("p-disabled",!i.shortenedUrl),m(2),u("p-columns",i.urlColumns)("p-items",i.baseUrls)("p-hide-table-search",!1)}},dependencies:[R,V,F,N,B,O,z,U,Z],encapsulation:2})}return l})();var Ce=l=>({"docs-sample-code-tabs":l}),pe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-url-shortener-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Url - Shortener"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-url-shortener/sample-po-url-shortener.component.html"),t(),n(13,"pre",7),e(14,`<form #f="ngForm">
  <div class="po-row">
    <po-url class="po-lg-6" name="url" [(ngModel)]="url" p-label="Type your URL to be shortened" p-required> </po-url>

    <po-input #boxUrl class="po-lg-6" name="shortenedUrl" [(ngModel)]="shortenedUrl" p-label="URL shortened" p-readonly>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-2" p-label="Shorten URL" p-kind="primary" [p-disabled]="f.invalid" (p-click)="shortenUrl()">
    </po-button>

    <po-button
      class="po-offset-lg-4 po-offset-xl-4 po-lg-2"
      p-icon="an an-copy"
      p-label="Copy"
      [p-disabled]="!shortenedUrl"
      (click)="copyToClipboard()"
    >
    </po-button>
  </div>
</form>

<hr />

<po-table p-striped="true" [p-columns]="urlColumns" [p-items]="baseUrls" [p-hide-table-search]="false"> </po-table>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-url-shortener/sample-po-url-shortener.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ElementRef, ViewChild } from '@angular/core';

import { PoNotificationService, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-url-shortener',
  templateUrl: './sample-po-url-shortener.component.html',
  standalone: false
})
export class SamplePoUrlShortenerComponent {
  @ViewChild('boxUrl', { read: ElementRef, static: true }) boxUrlElement;

  baseUrls: Array<any> = [];
  shortenedUrl: string;
  url: string;

  public readonly urlColumns: Array<PoTableColumn> = [
    { property: 'url', label: 'Long URL' },
    { property: 'short', label: 'Shortened URL' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  copyToClipboard() {
    this.boxUrlElement.nativeElement.querySelector('input').select();
    document.execCommand('copy');
    this.poNotification.success('Text copied!');
  }

  shortenUrl() {
    const urlBase64 = btoa(this.url.replace(/http|www|com|br|\\/|\\./gi, '').trim());

    this.shortenedUrl = \`po.com/\${urlBase64.substr(urlBase64.length - 3)}\` + this.baseUrls.length;
    this.baseUrls.push({ url: this.url, short: this.shortenedUrl });
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-url-shortener"),t(),o(23,"hr")),a&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),P(" ",i.sampleCodeButtonLabel,""),m(),u("ngClass",_(4,Ce,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,me],encapsulation:2})}return l})();var de=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-url-doc"]],standalone:!1,decls:984,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,i){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoUrlComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4",6),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",7),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",8),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),o(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),n(209,"p"),o(210,"br"),e(211," O "),n(212,"code"),e(213,"po-url"),t(),e(214," \xE9 um input espec\xEDfico para receber URL, com o pattern j\xE1 configurado."),t()(),n(215,"div",9)(216,"h4",10),e(217,"Seletor"),t(),n(218,"pre",11),e(219,`<po-url
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-disabled="boolean"
    p-emit-all-changes="boolean"
    (p-enter)="EventEmitter"
    p-error-async-properties="ErrorAsyncProperties"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    p-label="string"
    p-mask="string"
    p-mask-format-model="boolean"
    p-mask-no-length-validation="boolean"
    p-maxlength="number"
    p-minlength="number"
    name="string"
    p-no-autocomplete="boolean"
    p-optional="boolean"
    p-pattern="string"
    p-placeholder="string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-upper-case="boolean" >
</po-url>
`),t()(),n(220,"h4",12),e(221,"Propriedades"),t(),n(222,"table",13)(223,"tr",14)(224,"th",15),e(225,"Nome"),t(),n(226,"th",15),e(227,"Tipo"),t(),n(228,"th",15),e(229,"Padr\xE3o"),t(),n(230,"th",15),e(231,"Descri\xE7\xE3o"),t()(),n(232,"tr",16)(233,"td",17)(234,"div",18)(235,"span",19),e(236," p-auto-focus"),o(237,"br"),t()()(),n(238,"td",20)(239,"code",21),e(240,"boolean"),t()(),n(241,"td",22)(242,"p")(243,"code"),e(244,"false"),t()()(),n(245,"td",23)(246,"em")(247,"strong"),e(248,"(opcional)"),t()(),n(249,"p"),e(250,"Aplica foco no elemento ao ser iniciado."),t(),n(251,"blockquote")(252,"p"),e(253,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(254,"tr",16)(255,"td",17)(256,"div",24)(257,"span",25),e(258," (p-blur)"),o(259,"br"),t()()(),n(260,"td",20)(261,"code",26),e(262,"EventEmitter"),t()(),n(263,"td",22),e(264,"-"),t(),n(265,"td",23)(266,"em")(267,"strong"),e(268,"(opcional)"),t()(),n(269,"p"),e(270,"Evento disparado ao sair do campo."),t()()(),n(271,"tr",16)(272,"td",17)(273,"div",24)(274,"span",25),e(275," (p-change)"),o(276,"br"),t()()(),n(277,"td",20)(278,"code",26),e(279,"EventEmitter"),t()(),n(280,"td",22),e(281,"-"),t(),n(282,"td",23)(283,"em")(284,"strong"),e(285,"(opcional)"),t()(),n(286,"p"),e(287,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(288,"tr",16)(289,"td",17)(290,"div",24)(291,"span",25),e(292," (p-change-model)"),o(293,"br"),t()()(),n(294,"td",20)(295,"code",26),e(296,"EventEmitter"),t()(),n(297,"td",22),e(298,"-"),t(),n(299,"td",23)(300,"em")(301,"strong"),e(302,"(opcional)"),t()(),n(303,"p"),e(304,"Evento disparado ao alterar valor do model."),t()()(),n(305,"tr",16)(306,"td",17)(307,"div",18)(308,"span",19),e(309,"p-clean"),o(310,"br"),t()()(),n(311,"td",20)(312,"code",21),e(313,"boolean"),t()(),n(314,"td",22),e(315,"-"),t(),n(316,"td",23)(317,"em")(318,"strong"),e(319,"(opcional)"),t()(),n(320,"p"),e(321,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(322,"tr",16)(323,"td",17)(324,"div",18)(325,"span",19),e(326,"p-disabled"),o(327,"br"),t()()(),n(328,"td",20)(329,"code",21),e(330,"boolean"),t()(),n(331,"td",22)(332,"p")(333,"code"),e(334,"false"),t()()(),n(335,"td",23)(336,"em")(337,"strong"),e(338,"(opcional)"),t()(),n(339,"p"),e(340,"Se verdadeiro, desabilita o campo."),t()()(),n(341,"tr",16)(342,"td",17)(343,"div",18)(344,"span",19),e(345," p-emit-all-changes"),o(346,"br"),t()()(),n(347,"td",20)(348,"code",21),e(349,"boolean"),t()(),n(350,"td",22)(351,"p")(352,"code"),e(353,"false"),t()()(),n(354,"td",23)(355,"em")(356,"strong"),e(357,"(opcional)"),t()(),n(358,"p"),e(359,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(360,"tr",16)(361,"td",17)(362,"div",24)(363,"span",25),e(364," (p-enter)"),o(365,"br"),t()()(),n(366,"td",20)(367,"code",26),e(368,"EventEmitter"),t()(),n(369,"td",22),e(370,"-"),t(),n(371,"td",23)(372,"em")(373,"strong"),e(374,"(opcional)"),t()(),n(375,"p"),e(376,"Evento disparado ao entrar do campo."),t()()(),n(377,"tr",16)(378,"td",17)(379,"div",18)(380,"span",19),e(381," p-error-async-properties"),o(382,"br"),t()()(),n(383,"td",20)(384,"code",27),e(385,"ErrorAsyncProperties"),t()(),n(386,"td",22),e(387,"-"),t(),n(388,"td",23)(389,"em")(390,"strong"),e(391,"(opcional)"),t()(),n(392,"p"),e(393,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(394,"code"),e(395,"Reactive Forms"),t(),e(396,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(397,"code"),e(398,"asyncValidators"),t(),e(399,"."),t()()(),n(400,"tr",16)(401,"td",17)(402,"div",18)(403,"span",19),e(404," p-error-limit"),o(405,"br"),t()()(),n(406,"td",20)(407,"code",21),e(408,"boolean"),t()(),n(409,"td",22)(410,"p")(411,"code"),e(412,"false"),t()()(),n(413,"td",23)(414,"em")(415,"strong"),e(416,"(opcional)"),t()(),n(417,"p"),e(418,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(419,"blockquote")(420,"p"),e(421,"Caso essa propriedade seja definida como "),n(422,"code"),e(423,"true"),t(),e(424,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(425,"tr",16)(426,"td",17)(427,"div",18)(428,"span",19),e(429," p-error-pattern"),o(430,"br"),t()()(),n(431,"td",20)(432,"code",28),e(433,"string"),t()(),n(434,"td",22),e(435,"-"),t(),n(436,"td",23)(437,"em")(438,"strong"),e(439,"(opcional)"),t()(),n(440,"p"),e(441,"Mensagem que ser\xE1 apresentada quando o "),n(442,"code"),e(443,"pattern"),t(),e(444," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(445,"blockquote")(446,"p"),e(447,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(448,"code"),e(449,"p-required-field-error-message"),t(),e(450," em conjunto."),t()()()(),n(451,"tr",16)(452,"td",17)(453,"div",18)(454,"span",19),e(455," p-help"),o(456,"br"),t()()(),n(457,"td",20)(458,"code",28),e(459,"string"),t()(),n(460,"td",22),e(461,"-"),t(),n(462,"td",23)(463,"em")(464,"strong"),e(465,"(opcional)"),t()(),n(466,"p"),e(467,"Texto de apoio do campo."),t()()(),n(468,"tr",16)(469,"td",17)(470,"div",18)(471,"span",19),e(472," p-icon"),o(473,"br"),t()()(),n(474,"td",20)(475,"code",28),e(476,"string "),t(),n(477,"code",29),e(478," TemplateRef<void>"),t()(),n(479,"td",22),e(480,"-"),t(),n(481,"td",23)(482,"em")(483,"strong"),e(484,"(opcional)"),t()(),n(485,"p"),e(486,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(487,"p"),e(488,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(489,"a",30),e(490,"Biblioteca de \xEDcones"),t(),e(491,". conforme exemplo abaixo:"),t(),n(492,"pre")(493,"code"),e(494,'<po-input p-icon="an an-user" p-label="PO input"></po-input>'),t()(),n(495,"p"),e(496,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(497,"em"),e(498,"Font Awesome"),t(),e(499,", da seguinte forma:"),t(),n(500,"pre")(501,"code"),e(502,'<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>'),t()(),n(503,"p"),e(504,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(505,"code"),e(506,"TemplateRef"),t(),e(507,", conforme exemplo abaixo:"),t(),n(508,"pre")(509,"code"),e(510,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>`),t()(),n(511,"blockquote")(512,"p"),e(513,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(514,"code"),e(515,"font-size: inherit"),t(),e(516," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(517,"tr",16)(518,"td",17)(519,"div",18)(520,"span",19),e(521," p-label"),o(522,"br"),t()()(),n(523,"td",20)(524,"code",28),e(525,"string"),t()(),n(526,"td",22),e(527,"-"),t(),n(528,"td",23)(529,"em")(530,"strong"),e(531,"(opcional)"),t()(),n(532,"p"),e(533,"R\xF3tulo do campo."),t()()(),n(534,"tr",16)(535,"td",17)(536,"div",18)(537,"span",19),e(538,"p-mask"),o(539,"br"),t()()(),n(540,"td",20)(541,"code",28),e(542,"string"),t()(),n(543,"td",22),e(544,"-"),t(),n(545,"td",23)(546,"em")(547,"strong"),e(548,"(opcional)"),t()(),n(549,"p"),e(550,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(551,"tr",16)(552,"td",17)(553,"div",18)(554,"span",19),e(555,"p-mask-format-model"),o(556,"br"),t()()(),n(557,"td",20)(558,"code",21),e(559,"boolean"),t()(),n(560,"td",22)(561,"p")(562,"code"),e(563,"false"),t()()(),n(564,"td",23)(565,"em")(566,"strong"),e(567,"(opcional)"),t()(),n(568,"p"),e(569,"Indica se o "),n(570,"code"),e(571,"model"),t(),e(572," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(573,"tr",16)(574,"td",17)(575,"div",18)(576,"span",19),e(577," p-mask-no-length-validation"),o(578,"br"),t()()(),n(579,"td",20)(580,"code",21),e(581,"boolean"),t()(),n(582,"td",22)(583,"p")(584,"code"),e(585,"false"),t()()(),n(586,"td",23)(587,"p"),e(588,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(589,"code"),e(590,"minLength"),t(),e(591,") e m\xE1ximo ("),n(592,"code"),e(593,"maxLength"),t(),e(594,") do campo."),t(),n(595,"ul")(596,"li"),e(597,"Quando "),n(598,"code"),e(599,"true"),t(),e(600,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(601,"li"),e(602,"Quando "),n(603,"code"),e(604,"false"),t(),e(605,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(606,"blockquote")(607,"p"),e(608,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(609,"code"),e(610,"p-mask-format-model"),t(),e(611,"."),t()(),n(612,"p"),e(613,"Exemplo:"),t(),n(614,"pre")(615,"code"),e(616,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>`),t()(),n(617,"ul")(618,"li"),e(619,"Entrada: "),n(620,"code"),e(621,"123-456"),t(),e(622," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(623,"code"),e(624,"-"),t(),e(625,"."),t()()()(),n(626,"tr",16)(627,"td",17)(628,"div",18)(629,"span",19),e(630," p-maxlength"),o(631,"br"),t()()(),n(632,"td",20)(633,"code",31),e(634,"number"),t()(),n(635,"td",22),e(636,"-"),t(),n(637,"td",23)(638,"em")(639,"strong"),e(640,"(opcional)"),t()(),n(641,"p"),e(642,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(643,"tr",16)(644,"td",17)(645,"div",18)(646,"span",19),e(647," p-minlength"),o(648,"br"),t()()(),n(649,"td",20)(650,"code",31),e(651,"number"),t()(),n(652,"td",22),e(653,"-"),t(),n(654,"td",23)(655,"em")(656,"strong"),e(657,"(opcional)"),t()(),n(658,"p"),e(659,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(660,"tr",16)(661,"td",17)(662,"div",18)(663,"span",19),e(664," name"),o(665,"br"),t()()(),n(666,"td",20)(667,"code",28),e(668,"string"),t()(),n(669,"td",22),e(670,"-"),t(),n(671,"td",23)(672,"p"),e(673,"Nome e identificador do campo."),t()()(),n(674,"tr",16)(675,"td",17)(676,"div",18)(677,"span",19),e(678," p-no-autocomplete"),o(679,"br"),t()()(),n(680,"td",20)(681,"code",21),e(682,"boolean"),t()(),n(683,"td",22)(684,"p")(685,"code"),e(686,"false"),t()()(),n(687,"td",23)(688,"em")(689,"strong"),e(690,"(opcional)"),t()(),n(691,"p"),e(692,"Define a propriedade nativa "),n(693,"code"),e(694,"autocomplete"),t(),e(695," do campo como "),n(696,"code"),e(697,"off"),t(),e(698,"."),t(),n(699,"blockquote")(700,"p"),e(701,"No componente "),n(702,"code"),e(703,"po-password"),t(),e(704," ser\xE1 definido como "),n(705,"code"),e(706,"new-password"),t(),e(707,"."),t()(),n(708,"p"),e(709,"Nos componentes "),n(710,"code"),e(711,"po-password"),t(),e(712," e "),n(713,"code"),e(714,"po-login"),t(),e(715," o valor padr\xE3o ser\xE1 "),n(716,"code"),e(717,"true"),t(),e(718,"."),t()()(),n(719,"tr",16)(720,"td",17)(721,"div",18)(722,"span",19),e(723," p-optional"),o(724,"br"),t()()(),n(725,"td",20)(726,"code",21),e(727,"boolean"),t()(),n(728,"td",22)(729,"p")(730,"code"),e(731,"false"),t()()(),n(732,"td",23)(733,"em")(734,"strong"),e(735,"(opcional)"),t()(),n(736,"p"),e(737,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(738,"blockquote")(739,"p"),e(740,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(741,"ul")(742,"li"),e(743,"O campo conter "),n(744,"code"),e(745,"p-required"),t(),e(746,";"),t(),n(747,"li"),e(748,"N\xE3o possuir "),n(749,"code"),e(750,"p-help"),t(),e(751," e/ou "),n(752,"code"),e(753,"p-label"),t(),e(754,"."),t()()()(),n(755,"tr",16)(756,"td",17)(757,"div",18)(758,"span",19),e(759,"p-pattern"),o(760,"br"),t()()(),n(761,"td",20)(762,"code",28),e(763,"string"),t()(),n(764,"td",22),e(765,"-"),t(),n(766,"td",23)(767,"em")(768,"strong"),e(769,"(opcional)"),t()(),n(770,"p"),e(771,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(772,"code"),e(773,"(p-mask)"),t(),e(774,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(775,"tr",16)(776,"td",17)(777,"div",18)(778,"span",19),e(779," p-placeholder"),o(780,"br"),t()()(),n(781,"td",20)(782,"code",28),e(783,"string"),t()(),n(784,"td",22)(785,"p"),e(786,"''"),t()(),n(787,"td",23)(788,"em")(789,"strong"),e(790,"(opcional)"),t()(),n(791,"p"),e(792,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(793,"tr",16)(794,"td",17)(795,"div",18)(796,"span",19),e(797,"p-readonly"),o(798,"br"),t()()(),n(799,"td",20)(800,"code",21),e(801,"boolean"),t()(),n(802,"td",22),e(803,"-"),t(),n(804,"td",23)(805,"em")(806,"strong"),e(807,"(opcional)"),t()(),n(808,"p"),e(809,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(810,"tr",16)(811,"td",17)(812,"div",18)(813,"span",19),e(814,"p-required"),o(815,"br"),t()()(),n(816,"td",20)(817,"code",21),e(818,"boolean"),t()(),n(819,"td",22)(820,"p")(821,"code"),e(822,"false"),t()()(),n(823,"td",23)(824,"em")(825,"strong"),e(826,"(opcional)"),t()(),n(827,"p"),e(828,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(829,"blockquote")(830,"p"),e(831,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(832,"code"),e(833,"(p-disabled)"),t(),e(834,"."),t()()()(),n(835,"tr",16)(836,"td",17)(837,"div",18)(838,"span",19),e(839," p-required-field-error-message"),o(840,"br"),t()()(),n(841,"td",20)(842,"code",21),e(843,"boolean"),t()(),n(844,"td",22)(845,"p")(846,"code"),e(847,"false"),t()()(),n(848,"td",23)(849,"em")(850,"strong"),e(851,"(opcional)"),t()(),n(852,"p"),e(853,"Exibe a mensagem setada na propriedade "),n(854,"code"),e(855,"p-error-pattern"),t(),e(856," se o campo estiver vazio e for requerido."),t(),n(857,"blockquote")(858,"p"),e(859,"Necess\xE1rio que a propriedade "),n(860,"code"),e(861,"p-required"),t(),e(862," esteja habilitada."),t()()()(),n(863,"tr",16)(864,"td",17)(865,"div",18)(866,"span",19),e(867," p-show-required"),o(868,"br"),t()()(),n(869,"td",20)(870,"code",21),e(871,"boolean"),t()(),n(872,"td",22),e(873,"-"),t(),n(874,"td",23)(875,"p"),e(876,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(877,"blockquote")(878,"p"),e(879,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(880,"ul")(881,"li"),e(882,"N\xE3o possuir "),n(883,"code"),e(884,"p-help"),t(),e(885," e/ou "),n(886,"code"),e(887,"p-label"),t(),e(888,"."),t()()()(),n(889,"tr",16)(890,"td",17)(891,"div",18)(892,"span",19),e(893," p-upper-case"),o(894,"br"),t()()(),n(895,"td",20)(896,"code",21),e(897,"boolean"),t()(),n(898,"td",22),e(899,"-"),t(),n(900,"td",23)(901,"p"),e(902,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(903,"h3",12),e(904,"M\xE9todos"),t(),n(905,"table",32)(906,"tr",16)(907,"th",33)(908,"div",18)(909,"h4")(910,"span",19),e(911," focus "),t()()()()(),n(912,"tr",23)(913,"td",23)(914,"p"),e(915,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(916,"p"),e(917,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(918,"pre")(919,"code"),e(920,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}`),t()()()()(),o(921,"br"),n(922,"h3"),e(923,"Interfaces"),t(),n(924,"h4",34)(925,"code",5),e(926,"ErrorAsyncProperties"),t()(),n(927,"div",2)(928,"p"),e(929,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(930,"h4",12),e(931,"Propriedades"),t(),n(932,"table",13)(933,"tr",14)(934,"th",15),e(935,"Nome"),t(),n(936,"th",15),e(937,"Tipo"),t(),n(938,"th",15),e(939,"Descri\xE7\xE3o"),t()(),n(940,"tr",16)(941,"td",17)(942,"div",18)(943,"span",19),e(944," errorAsync"),o(945,"br"),t()()(),n(946,"td",20)(947,"code",35),e(948,"(value) => Observable<boolean>"),t()(),n(949,"td",23)(950,"p"),e(951,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(952,"code"),e(953,"change"),t(),e(954," ou "),n(955,"code"),e(956,"change-model"),t(),e(957,", dependendo do valor da propriedade "),n(958,"code"),e(959,"triggerMode"),t(),e(960,"."),t()()(),n(961,"tr",16)(962,"td",17)(963,"div",18)(964,"span",19),e(965," triggerMode"),o(966,"br"),t()()(),n(967,"td",20)(968,"code",36),e(969,"'change' "),t(),n(970,"code",37),e(971," 'changeModel'"),t()(),n(972,"td",23)(973,"em")(974,"strong"),e(975,"(opcional)"),t()(),n(976,"p"),e(977,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(978,"code"),e(979,"change"),t(),e(980," ou "),n(981,"code"),e(982,"change-model"),t(),e(983,"."),t()()()()())},dependencies:[y],encapsulation:2})}return l})();var se=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||l)(q(X),q(J))};static \u0275cmp=b({type:l,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Url",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,i){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),o(3,"sample-po-url-doc"),t(),n(4,"po-tab",3),o(5,"sample-po-url-basic-view")(6,"sample-po-url-labs-view")(7,"sample-po-url-shortener-view"),t()()()),a&2&&(u("p-actions",i.actions),m(2),u("p-active",i.activeTab.includes("doc")),m(2),u("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[te,v,C,le,re,pe,de],encapsulation:2})}return l})();var Pe=[{path:"",component:se}],ce=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=D({type:l});static \u0275inj=k({imports:[I.forChild(Pe),I]})}return l})();var Ze=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=D({type:l});static \u0275inj=k({imports:[ne,ce]})}return l})();export{Ze as DocPoUrlModule};
