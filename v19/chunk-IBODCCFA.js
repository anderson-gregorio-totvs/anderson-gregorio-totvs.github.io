import{$ as D,$a as M,Ca as H,Cd as ee,Da as j,Ea as G,F as s,Fa as Q,G as c,Ga as e,Ia as P,Ka as S,La as g,Lb as V,Ma as x,Mb as F,N as A,Nb as B,Ob as N,Od as te,Pa as _,Pb as R,T as p,U as q,Wb as X,Xd as v,Yb as J,Yd as C,Zb as I,_ as h,ad as Y,gd as Z,ha as u,ka as w,md as z,na as n,oa as t,oc as O,pa as o,re as y,sd as $,se as ne,ta as L,ua as b,wd as U,y as k,zc as K}from"./chunk-TZ5FQAUY.js";var ie=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-url-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","url","p-label","PO Url"]],template:function(a,i){a&1&&o(0,"po-url",0)},dependencies:[U],encapsulation:2})}return l})();var Ee=l=>({"docs-sample-code-tabs":l}),le=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-url-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Url Basic"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-url-basic/sample-po-url-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-url name="url" p-label="PO Url"> </po-url>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-url-basic/sample-po-url-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-url-basic',
  templateUrl: './sample-po-url-basic.component.html',
  standalone: false
})
export class SamplePoUrlBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-url-basic"),t(),o(23,"hr")),a&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),P(" ",i.sampleCodeButtonLabel,""),p(),u("ngClass",_(4,Ee,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,ie],encapsulation:2})}return l})();var ae=(()=>{class l{errorPattern;event;help;label;maxlength;minlength;placeholder;properties;url;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"showRequired",label:"Show Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"required",label:"Required"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.properties=[],this.label=void 0,this.help=void 0,this.errorPattern="",this.placeholder="",this.minlength=void 0,this.maxlength=void 0,this.url="",this.event=""}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-url-labs"]],standalone:!1,decls:21,vars:25,consts:[["f","ngForm"],["name","url",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","ngModel","p-clean","p-disabled","p-error-pattern","p-help","p-label","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let d=L();n(0,"po-url",1),x("ngModelChange",function(r){return s(d),g(i.url,r)||(i.url=r),c(r)}),b("p-blur",function(){return s(d),c(i.changeEvent("p-blur"))})("p-change",function(){return s(d),c(i.changeEvent("p-change"))})("p-change-model",function(){return s(d),c(i.changeEvent("p-change-model"))})("p-enter",function(){return s(d),c(i.changeEvent("p-enter"))}),t(),o(1,"hr"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"hr"),n(6,"form",null,0)(8,"div",2)(9,"po-input",5),x("ngModelChange",function(r){return s(d),g(i.label,r)||(i.label=r),c(r)}),t(),n(10,"po-input",6),x("ngModelChange",function(r){return s(d),g(i.help,r)||(i.help=r),c(r)}),t()(),n(11,"div",2)(12,"po-input",7),x("ngModelChange",function(r){return s(d),g(i.placeholder,r)||(i.placeholder=r),c(r)}),t(),n(13,"po-input",8),x("ngModelChange",function(r){return s(d),g(i.errorPattern,r)||(i.errorPattern=r),c(r)}),t()(),n(14,"div",2)(15,"po-number",9),x("ngModelChange",function(r){return s(d),g(i.minlength,r)||(i.minlength=r),c(r)}),t(),n(16,"po-number",10),x("ngModelChange",function(r){return s(d),g(i.maxlength,r)||(i.maxlength=r),c(r)}),t()(),n(17,"div",2)(18,"po-checkbox-group",11),x("ngModelChange",function(r){return s(d),g(i.properties,r)||(i.properties=r),c(r)}),t()(),n(19,"div",2)(20,"po-button",12),b("p-click",function(){return s(d),c(i.restore())}),t()()()}a&2&&(S("ngModel",i.url),u("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-label",i.label)("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired")),p(3),u("p-value",i.url),p(),u("p-value",i.event),p(5),S("ngModel",i.label),p(),S("ngModel",i.help),p(2),S("ngModel",i.placeholder),p(),S("ngModel",i.errorPattern),p(2),S("ngModel",i.minlength),p(),S("ngModel",i.maxlength),p(2),S("ngModel",i.properties),u("p-options",i.propertiesOptions))},dependencies:[R,V,F,N,B,O,K,z,$,U,ee],encapsulation:2})}return l})();var ge=l=>({"docs-sample-code-tabs":l}),re=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-url-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Url Labs"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-url-labs/sample-po-url-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-url
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
    { value: 'required', label: 'Required' }
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
`),t()()()()(),n(21,"div",10),o(22,"sample-po-url-labs"),t(),o(23,"hr")),a&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),P(" ",i.sampleCodeButtonLabel,""),p(),u("ngClass",_(4,ge,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,ae],encapsulation:2})}return l})();var fe=["boxUrl"],pe=(()=>{class l{poNotification;boxUrlElement;baseUrls=[];shortenedUrl;url;urlColumns=[{property:"url",label:"Long URL"},{property:"short",label:"Shortened URL"}];constructor(m){this.poNotification=m}copyToClipboard(){this.boxUrlElement.nativeElement.querySelector("input").select(),document.execCommand("copy"),this.poNotification.success("Text copied!")}shortenUrl(){let m=btoa(this.url.replace(/http|www|com|br|\/|\./gi,"").trim());this.shortenedUrl=`po.com/${m.substr(m.length-3)}`+this.baseUrls.length,this.baseUrls.push({url:this.url,short:this.shortenedUrl})}static \u0275fac=function(a){return new(a||l)(q(Y))};static \u0275cmp=h({type:l,selectors:[["sample-po-url-shortener"]],viewQuery:function(a,i){if(a&1&&H(fe,7,A),a&2){let d;j(d=G())&&(i.boxUrlElement=d.first)}},standalone:!1,decls:11,vars:7,consts:[["f","ngForm"],["boxUrl",""],[1,"po-row"],["name","url","p-label","Type your URL to be shortened","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","shortenedUrl","p-label","URL shortened","p-readonly","",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Shorten URL","p-kind","primary",1,"po-lg-2",3,"p-click","p-disabled"],["p-icon","ph ph-copy","p-label","Copy",1,"po-offset-lg-4","po-offset-xl-4","po-lg-2",3,"click","p-disabled"],["p-striped","true",3,"p-columns","p-items","p-hide-table-search"]],template:function(a,i){if(a&1){let d=L();n(0,"form",null,0)(2,"div",2)(3,"po-url",3),x("ngModelChange",function(r){return s(d),g(i.url,r)||(i.url=r),c(r)}),t(),n(4,"po-input",4,1),x("ngModelChange",function(r){return s(d),g(i.shortenedUrl,r)||(i.shortenedUrl=r),c(r)}),t()(),n(6,"div",2)(7,"po-button",5),b("p-click",function(){return s(d),c(i.shortenUrl())}),t(),n(8,"po-button",6),b("click",function(){return s(d),c(i.copyToClipboard())}),t()()(),o(9,"hr")(10,"po-table",7)}if(a&2){let d=Q(1);p(3),S("ngModel",i.url),p(),S("ngModel",i.shortenedUrl),p(3),u("p-disabled",d.invalid),p(),u("p-disabled",!i.shortenedUrl),p(2),u("p-columns",i.urlColumns)("p-items",i.baseUrls)("p-hide-table-search",!1)}},dependencies:[R,V,F,N,B,O,z,U,Z],encapsulation:2})}return l})();var Ce=l=>({"docs-sample-code-tabs":l}),me=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-url-shortener-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Url - Shortener"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-url-shortener/sample-po-url-shortener.component.html"),t(),n(13,"pre",7),e(14,`<form #f="ngForm">
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
      p-icon="ph ph-copy"
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
`),t()()()()(),n(21,"div",10),o(22,"sample-po-url-shortener"),t(),o(23,"hr")),a&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),P(" ",i.sampleCodeButtonLabel,""),p(),u("ngClass",_(4,Ce,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,pe],encapsulation:2})}return l})();var de=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-url-doc"]],standalone:!1,decls:959,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,i){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
utilizando `),n(394,"code"),e(395,"Reactive Forms"),t(),e(396,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(397,"code"),e(398,"asyncValidators"),t(),e(399,"."),t()()(),n(400,"tr",16)(401,"td",17)(402,"div",18)(403,"span",19),e(404," p-error-pattern"),o(405,"br"),t()()(),n(406,"td",20)(407,"code",28),e(408,"string"),t()(),n(409,"td",22),e(410,"-"),t(),n(411,"td",23)(412,"em")(413,"strong"),e(414,"(opcional)"),t()(),n(415,"p"),e(416,"Mensagem que ser\xE1 apresentada quando o "),n(417,"code"),e(418,"pattern"),t(),e(419," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(420,"blockquote")(421,"p"),e(422,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(423,"code"),e(424,"p-required-field-error-message"),t(),e(425," em conjunto."),t()()()(),n(426,"tr",16)(427,"td",17)(428,"div",18)(429,"span",19),e(430," p-help"),o(431,"br"),t()()(),n(432,"td",20)(433,"code",28),e(434,"string"),t()(),n(435,"td",22),e(436,"-"),t(),n(437,"td",23)(438,"em")(439,"strong"),e(440,"(opcional)"),t()(),n(441,"p"),e(442,"Texto de apoio do campo."),t()()(),n(443,"tr",16)(444,"td",17)(445,"div",18)(446,"span",19),e(447," p-icon"),o(448,"br"),t()()(),n(449,"td",20)(450,"code",28),e(451,"string "),t(),n(452,"code",29),e(453," TemplateRef<void>"),t()(),n(454,"td",22),e(455,"-"),t(),n(456,"td",23)(457,"em")(458,"strong"),e(459,"(opcional)"),t()(),n(460,"p"),e(461,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(462,"p"),e(463,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(464,"a",30),e(465,"Biblioteca de \xEDcones"),t(),e(466,". conforme exemplo abaixo:"),t(),n(467,"pre")(468,"code"),e(469,'<po-input p-icon="ph ph-user" p-label="PO input"></po-input>'),t()(),n(470,"p"),e(471,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(472,"em"),e(473,"Font Awesome"),t(),e(474,", da seguinte forma:"),t(),n(475,"pre")(476,"code"),e(477,'<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>'),t()(),n(478,"p"),e(479,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(480,"code"),e(481,"TemplateRef"),t(),e(482,", conforme exemplo abaixo:"),t(),n(483,"pre")(484,"code"),e(485,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>`),t()(),n(486,"blockquote")(487,"p"),e(488,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(489,"code"),e(490,"font-size: inherit"),t(),e(491," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(492,"tr",16)(493,"td",17)(494,"div",18)(495,"span",19),e(496," p-label"),o(497,"br"),t()()(),n(498,"td",20)(499,"code",28),e(500,"string"),t()(),n(501,"td",22),e(502,"-"),t(),n(503,"td",23)(504,"em")(505,"strong"),e(506,"(opcional)"),t()(),n(507,"p"),e(508,"R\xF3tulo do campo."),t()()(),n(509,"tr",16)(510,"td",17)(511,"div",18)(512,"span",19),e(513,"p-mask"),o(514,"br"),t()()(),n(515,"td",20)(516,"code",28),e(517,"string"),t()(),n(518,"td",22),e(519,"-"),t(),n(520,"td",23)(521,"em")(522,"strong"),e(523,"(opcional)"),t()(),n(524,"p"),e(525,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(526,"tr",16)(527,"td",17)(528,"div",18)(529,"span",19),e(530,"p-mask-format-model"),o(531,"br"),t()()(),n(532,"td",20)(533,"code",21),e(534,"boolean"),t()(),n(535,"td",22)(536,"p")(537,"code"),e(538,"false"),t()()(),n(539,"td",23)(540,"em")(541,"strong"),e(542,"(opcional)"),t()(),n(543,"p"),e(544,"Indica se o "),n(545,"code"),e(546,"model"),t(),e(547," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(548,"tr",16)(549,"td",17)(550,"div",18)(551,"span",19),e(552," p-mask-no-length-validation"),o(553,"br"),t()()(),n(554,"td",20)(555,"code",21),e(556,"boolean"),t()(),n(557,"td",22)(558,"p")(559,"code"),e(560,"false"),t()()(),n(561,"td",23)(562,"p"),e(563,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(564,"code"),e(565,"minLength"),t(),e(566,") e m\xE1ximo ("),n(567,"code"),e(568,"maxLength"),t(),e(569,") do campo."),t(),n(570,"ul")(571,"li"),e(572,"Quando "),n(573,"code"),e(574,"true"),t(),e(575,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(576,"li"),e(577,"Quando "),n(578,"code"),e(579,"false"),t(),e(580,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(581,"blockquote")(582,"p"),e(583,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(584,"code"),e(585,"p-mask-format-model"),t(),e(586,"."),t()(),n(587,"p"),e(588,"Exemplo:"),t(),n(589,"pre")(590,"code"),e(591,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>`),t()(),n(592,"ul")(593,"li"),e(594,"Entrada: "),n(595,"code"),e(596,"123-456"),t(),e(597," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(598,"code"),e(599,"-"),t(),e(600,"."),t()()()(),n(601,"tr",16)(602,"td",17)(603,"div",18)(604,"span",19),e(605," p-maxlength"),o(606,"br"),t()()(),n(607,"td",20)(608,"code",31),e(609,"number"),t()(),n(610,"td",22),e(611,"-"),t(),n(612,"td",23)(613,"em")(614,"strong"),e(615,"(opcional)"),t()(),n(616,"p"),e(617,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(618,"tr",16)(619,"td",17)(620,"div",18)(621,"span",19),e(622," p-minlength"),o(623,"br"),t()()(),n(624,"td",20)(625,"code",31),e(626,"number"),t()(),n(627,"td",22),e(628,"-"),t(),n(629,"td",23)(630,"em")(631,"strong"),e(632,"(opcional)"),t()(),n(633,"p"),e(634,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(635,"tr",16)(636,"td",17)(637,"div",18)(638,"span",19),e(639," name"),o(640,"br"),t()()(),n(641,"td",20)(642,"code",28),e(643,"string"),t()(),n(644,"td",22),e(645,"-"),t(),n(646,"td",23)(647,"p"),e(648,"Nome e identificador do campo."),t()()(),n(649,"tr",16)(650,"td",17)(651,"div",18)(652,"span",19),e(653," p-no-autocomplete"),o(654,"br"),t()()(),n(655,"td",20)(656,"code",21),e(657,"boolean"),t()(),n(658,"td",22)(659,"p")(660,"code"),e(661,"false"),t()()(),n(662,"td",23)(663,"em")(664,"strong"),e(665,"(opcional)"),t()(),n(666,"p"),e(667,"Define a propriedade nativa "),n(668,"code"),e(669,"autocomplete"),t(),e(670," do campo como "),n(671,"code"),e(672,"off"),t(),e(673,"."),t(),n(674,"blockquote")(675,"p"),e(676,"No componente "),n(677,"code"),e(678,"po-password"),t(),e(679," ser\xE1 definido como "),n(680,"code"),e(681,"new-password"),t(),e(682,"."),t()(),n(683,"p"),e(684,"Nos componentes "),n(685,"code"),e(686,"po-password"),t(),e(687," e "),n(688,"code"),e(689,"po-login"),t(),e(690," o valor padr\xE3o ser\xE1 "),n(691,"code"),e(692,"true"),t(),e(693,"."),t()()(),n(694,"tr",16)(695,"td",17)(696,"div",18)(697,"span",19),e(698," p-optional"),o(699,"br"),t()()(),n(700,"td",20)(701,"code",21),e(702,"boolean"),t()(),n(703,"td",22)(704,"p")(705,"code"),e(706,"false"),t()()(),n(707,"td",23)(708,"em")(709,"strong"),e(710,"(opcional)"),t()(),n(711,"p"),e(712,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(713,"blockquote")(714,"p"),e(715,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(716,"ul")(717,"li"),e(718,"O campo conter "),n(719,"code"),e(720,"p-required"),t(),e(721,";"),t(),n(722,"li"),e(723,"N\xE3o possuir "),n(724,"code"),e(725,"p-help"),t(),e(726," e/ou "),n(727,"code"),e(728,"p-label"),t(),e(729,"."),t()()()(),n(730,"tr",16)(731,"td",17)(732,"div",18)(733,"span",19),e(734,"p-pattern"),o(735,"br"),t()()(),n(736,"td",20)(737,"code",28),e(738,"string"),t()(),n(739,"td",22),e(740,"-"),t(),n(741,"td",23)(742,"em")(743,"strong"),e(744,"(opcional)"),t()(),n(745,"p"),e(746,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(747,"code"),e(748,"(p-mask)"),t(),e(749,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(750,"tr",16)(751,"td",17)(752,"div",18)(753,"span",19),e(754," p-placeholder"),o(755,"br"),t()()(),n(756,"td",20)(757,"code",28),e(758,"string"),t()(),n(759,"td",22)(760,"p"),e(761,"''"),t()(),n(762,"td",23)(763,"em")(764,"strong"),e(765,"(opcional)"),t()(),n(766,"p"),e(767,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(768,"tr",16)(769,"td",17)(770,"div",18)(771,"span",19),e(772,"p-readonly"),o(773,"br"),t()()(),n(774,"td",20)(775,"code",21),e(776,"boolean"),t()(),n(777,"td",22),e(778,"-"),t(),n(779,"td",23)(780,"em")(781,"strong"),e(782,"(opcional)"),t()(),n(783,"p"),e(784,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(785,"tr",16)(786,"td",17)(787,"div",18)(788,"span",19),e(789,"p-required"),o(790,"br"),t()()(),n(791,"td",20)(792,"code",21),e(793,"boolean"),t()(),n(794,"td",22)(795,"p")(796,"code"),e(797,"false"),t()()(),n(798,"td",23)(799,"em")(800,"strong"),e(801,"(opcional)"),t()(),n(802,"p"),e(803,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(804,"blockquote")(805,"p"),e(806,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(807,"code"),e(808,"(p-disabled)"),t(),e(809,"."),t()()()(),n(810,"tr",16)(811,"td",17)(812,"div",18)(813,"span",19),e(814," p-required-field-error-message"),o(815,"br"),t()()(),n(816,"td",20)(817,"code",21),e(818,"boolean"),t()(),n(819,"td",22)(820,"p")(821,"code"),e(822,"false"),t()()(),n(823,"td",23)(824,"em")(825,"strong"),e(826,"(opcional)"),t()(),n(827,"p"),e(828,"Exibe a mensagem setada na propriedade "),n(829,"code"),e(830,"p-error-pattern"),t(),e(831," se o campo estiver vazio e for requerido."),t(),n(832,"blockquote")(833,"p"),e(834,"Necess\xE1rio que a propriedade "),n(835,"code"),e(836,"p-required"),t(),e(837," esteja habilitada."),t()()()(),n(838,"tr",16)(839,"td",17)(840,"div",18)(841,"span",19),e(842," p-show-required"),o(843,"br"),t()()(),n(844,"td",20)(845,"code",21),e(846,"boolean"),t()(),n(847,"td",22),e(848,"-"),t(),n(849,"td",23)(850,"p"),e(851,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(852,"blockquote")(853,"p"),e(854,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(855,"ul")(856,"li"),e(857,"N\xE3o possuir "),n(858,"code"),e(859,"p-help"),t(),e(860," e/ou "),n(861,"code"),e(862,"p-label"),t(),e(863,"."),t()()()(),n(864,"tr",16)(865,"td",17)(866,"div",18)(867,"span",19),e(868," p-upper-case"),o(869,"br"),t()()(),n(870,"td",20)(871,"code",21),e(872,"boolean"),t()(),n(873,"td",22),e(874,"-"),t(),n(875,"td",23)(876,"p"),e(877,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(878,"h3",12),e(879,"M\xE9todos"),t(),n(880,"table",32)(881,"tr",16)(882,"th",33)(883,"div",18)(884,"h4")(885,"span",19),e(886," focus "),t()()()()(),n(887,"tr",23)(888,"td",23)(889,"p"),e(890,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(891,"p"),e(892,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(893,"pre")(894,"code"),e(895,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}`),t()()()()(),o(896,"br"),n(897,"h3"),e(898,"Interfaces"),t(),n(899,"h4",34)(900,"code",5),e(901,"ErrorAsyncProperties"),t()(),n(902,"div",2)(903,"p"),e(904,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(905,"h4",12),e(906,"Propriedades"),t(),n(907,"table",13)(908,"tr",14)(909,"th",15),e(910,"Nome"),t(),n(911,"th",15),e(912,"Tipo"),t(),n(913,"th",15),e(914,"Descri\xE7\xE3o"),t()(),n(915,"tr",16)(916,"td",17)(917,"div",18)(918,"span",19),e(919," errorAsync"),o(920,"br"),t()()(),n(921,"td",20)(922,"code",35),e(923,"(value) => Observable<boolean>"),t()(),n(924,"td",23)(925,"p"),e(926,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(927,"code"),e(928,"change"),t(),e(929," ou "),n(930,"code"),e(931,"change-model"),t(),e(932,", dependendo do valor da propriedade "),n(933,"code"),e(934,"triggerMode"),t(),e(935,"."),t()()(),n(936,"tr",16)(937,"td",17)(938,"div",18)(939,"span",19),e(940," triggerMode"),o(941,"br"),t()()(),n(942,"td",20)(943,"code",36),e(944,"'change' "),t(),n(945,"code",37),e(946," 'changeModel'"),t()(),n(947,"td",23)(948,"em")(949,"strong"),e(950,"(opcional)"),t()(),n(951,"p"),e(952,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(953,"code"),e(954,"change"),t(),e(955," ou "),n(956,"code"),e(957,"change-model"),t(),e(958,"."),t()()()()())},dependencies:[y],encapsulation:2})}return l})();var se=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||l)(q(X),q(J))};static \u0275cmp=h({type:l,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Url",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,i){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),o(3,"sample-po-url-doc"),t(),n(4,"po-tab",3),o(5,"sample-po-url-basic-view")(6,"sample-po-url-labs-view")(7,"sample-po-url-shortener-view"),t()()()),a&2&&(u("p-actions",i.actions),p(2),u("p-active",i.activeTab.includes("doc")),p(2),u("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[te,v,C,le,re,me,de],encapsulation:2})}return l})();var Pe=[{path:"",component:se}],ce=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=D({type:l});static \u0275inj=k({imports:[I.forChild(Pe),I]})}return l})();var Ze=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=D({type:l});static \u0275inj=k({imports:[ne,ce]})}return l})();export{Ze as DocPoUrlModule};
