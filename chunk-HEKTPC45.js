import{$ as L,$a as _,Bc as ae,Ca as J,Cc as Q,Cd as re,Da as Y,Dc as M,Ea as K,F as c,Fa as X,G as u,Ga as e,Ia as w,Jc as j,Ka as b,Kb as T,La as E,Lb as q,Ma as h,Mb as A,Nb as I,Ob as R,Od as le,Pa as P,Pb as B,Sb as $,T as p,Tb as ee,U as y,Vb as te,Wb as ne,Xd as C,Yb as ie,Yd as k,Zb as U,_ as g,ad as z,ha as d,ka as x,md as O,na as n,oa as t,oc as V,pa as l,re as D,se as pe,ta as W,ua as S,y as N,yd as H,zc as oe}from"./chunk-V5DQALWN.js";var me=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-datepicker-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","datepicker","p-label","PO Datepicker"]],template:function(r,i){r&1&&l(0,"po-datepicker",0)},dependencies:[M],encapsulation:2})}return a})();var De=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-datepicker-basic-view"]],standalone:!1,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","E2E"],["appCodeHighlight","",1,"test"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Basic"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-datepicker name="datepicker" p-label="PO Datepicker"> </po-datepicker>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
    selector: 'sample-po-datepicker-basic',
    templateUrl: './sample-po-datepicker-basic.component.html',
    standalone: false
})
export class SamplePoDatepickerBasicComponent {}
`),t()()(),n(21,"po-tab",10)(22,"div")(23,"label",6),e(24,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.po.ts"),t(),n(25,"pre",11),e(26,`import { browser, by, element } from 'protractor';

export class SamplePoDatepickerBasicComponentPO {
  private sampleDatepicker = 'sample-po-datepicker-basic';

  navigateTo() {
    return browser.get(browser.baseUrl + '/documentation/po-datepicker?view=web');
  }

  get poDatepicker() {
    return element(by.css(\`\${this.sampleDatepicker} .po-calendar\`));
  }

  get poDatepickerIcon() {
    return element(by.css(\`\${this.sampleDatepicker} po-field-container .po-field-icon, .ph ph-calendar-dots\`));
  }
}
`),t(),n(27,"label",6),e(28,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.e2e-spec.ts"),t(),n(29,"pre",11),e(30,`import { SamplePoDatepickerBasicComponentPO } from './sample-po-datepicker-basic.component.po';

describe('SamplePodatepickerBasic E2E', () => {
  const datepicker = new SamplePoDatepickerBasicComponentPO();

  beforeEach(() => {
    datepicker.navigateTo();
  });

  it('Check if the element Po datepicker is present', () => {
    datepicker.poDatepickerIcon.click();
    expect(datepicker.poDatepicker.isDisplayed()).toBeTruthy();
  });
});
`),t()()()()(),n(31,"div",12),l(32,"sample-po-datepicker-basic"),t(),l(33,"hr")),r&2&&(p(5),x("po-icon "+i.sampleCodeButtonIcon),p(),w(" ",i.sampleCodeButtonLabel,""),p(),d("ngClass",P(4,De,i.hideSampleCodeTabs)))},dependencies:[_,D,C,k,me],encapsulation:2})}return a})();var ce=(()=>{class a{datepicker;maxDate;errorPattern;event;format;help;isoFormat;label;locale;placeholder;properties;minDate;isoFormatOptions=[{label:"Basic",value:Q.Basic},{label:"Extended",value:Q.Extended}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];formatOptions=[{label:"dd/mm/yyyy",value:"dd/mm/yyyy"},{label:"mm/dd/yyyy",value:"mm/dd/yyyy"},{label:"yyyy/mm/dd",value:"yyyy/mm/dd"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.datepicker=void 0,this.maxDate=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.isoFormat=void 0,this.label=void 0,this.locale=void 0,this.placeholder=void 0,this.properties=[],this.minDate=void 0}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-datepicker-labs"]],standalone:!1,decls:25,vars:38,consts:[["f","ngForm"],["name","datepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","ngModel","p-clean","p-disabled","p-max-date","p-error-pattern","p-format","p-help","p-iso-format","p-label","p-locale","p-min-date","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date","p-format"],["name","maxDate","p-clean","","p-label","Max date",1,"po-md-6",3,"ngModelChange","ngModel","p-format","p-min-date"],["name","format","p-columns","3","p-label","Format",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","3","p-label","Locale",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","isoFormat","p-columns","1","p-label","Iso Format",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","3","p-label","Properties",1,"po-sm-8",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let s=W();n(0,"po-datepicker",1),h("ngModelChange",function(o){return c(s),E(i.datepicker,o)||(i.datepicker=o),u(o)}),S("p-blur",function(){return c(s),u(i.changeEvent("p-blur"))})("p-change",function(){return c(s),u(i.changeEvent("p-change"))}),t(),l(1,"hr"),n(2,"div",2),l(3,"po-info",3)(4,"po-info",4),t(),l(5,"hr"),n(6,"form",null,0)(8,"div",2)(9,"po-input",5),h("ngModelChange",function(o){return c(s),E(i.label,o)||(i.label=o),u(o)}),t(),n(10,"po-input",6),h("ngModelChange",function(o){return c(s),E(i.help,o)||(i.help=o),u(o)}),t()(),n(11,"div",2)(12,"po-input",7),h("ngModelChange",function(o){return c(s),E(i.placeholder,o)||(i.placeholder=o),u(o)}),t(),n(13,"po-input",8),h("ngModelChange",function(o){return c(s),E(i.errorPattern,o)||(i.errorPattern=o),u(o)}),t()(),n(14,"div",2)(15,"po-datepicker",9),h("ngModelChange",function(o){return c(s),E(i.minDate,o)||(i.minDate=o),u(o)}),t(),n(16,"po-datepicker",10),h("ngModelChange",function(o){return c(s),E(i.maxDate,o)||(i.maxDate=o),u(o)}),t()(),n(17,"div",2)(18,"po-radio-group",11),h("ngModelChange",function(o){return c(s),E(i.format,o)||(i.format=o),u(o)}),t(),n(19,"po-radio-group",12),h("ngModelChange",function(o){return c(s),E(i.locale,o)||(i.locale=o),u(o)}),t()(),n(20,"div",2)(21,"po-radio-group",13),h("ngModelChange",function(o){return c(s),E(i.isoFormat,o)||(i.isoFormat=o),u(o)}),t(),n(22,"po-checkbox-group",14),h("ngModelChange",function(o){return c(s),E(i.properties,o)||(i.properties=o),u(o)}),t()(),n(23,"div",2)(24,"po-button",15),S("p-click",function(){return c(s),u(i.restore())}),t()()()}r&2&&(b("ngModel",i.datepicker),d("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-max-date",i.maxDate)("p-error-pattern",i.errorPattern)("p-format",i.format)("p-help",i.help)("p-iso-format",i.isoFormat)("p-label",i.label)("p-locale",i.locale)("p-min-date",i.minDate)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired")),p(3),d("p-value",i.datepicker),p(),d("p-value",i.event),p(5),b("ngModel",i.label),p(),b("ngModel",i.help),p(2),b("ngModel",i.placeholder),p(),b("ngModel",i.errorPattern),p(2),b("ngModel",i.minDate),d("p-max-date",i.maxDate)("p-format",i.format),p(),b("ngModel",i.maxDate),d("p-format",i.format)("p-min-date",i.minDate),p(2),b("ngModel",i.format),d("p-options",i.formatOptions),p(),b("ngModel",i.locale),d("p-options",i.localeOptions),p(2),b("ngModel",i.isoFormat),d("p-options",i.isoFormatOptions),p(),b("ngModel",i.properties),d("p-options",i.propertiesOptions))},dependencies:[B,q,A,R,I,V,oe,ae,M,O,re],encapsulation:2})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-datepicker-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Labs"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-labs/sample-po-datepicker-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-datepicker
  class="po-sm-12"
  name="datepicker"
  [(ngModel)]="datepicker"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-max-date]="maxDate"
  [p-error-pattern]="errorPattern"
  [p-format]="format"
  [p-help]="help"
  [p-iso-format]="isoFormat"
  [p-label]="label"
  [p-locale]="locale"
  [p-min-date]="minDate"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
>
</po-datepicker>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="datepicker"> </po-info>

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
    <po-datepicker
      class="po-md-6"
      name="minDate"
      [(ngModel)]="minDate"
      p-clean
      p-label="Min date"
      [p-max-date]="maxDate"
      [p-format]="format"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="maxDate"
      [(ngModel)]="maxDate"
      p-clean
      p-label="Max date"
      [p-format]="format"
      [p-min-date]="minDate"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-6"
      name="format"
      [(ngModel)]="format"
      p-columns="3"
      p-label="Format"
      [p-options]="formatOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-6"
      name="locale"
      [(ngModel)]="locale"
      p-columns="3"
      p-label="Locale"
      [p-options]="localeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-4"
      name="isoFormat"
      [(ngModel)]="isoFormat"
      p-columns="1"
      p-label="Iso Format"
      [p-options]="isoFormatOptions"
    >
    </po-radio-group>

    <po-checkbox-group
      class="po-sm-8"
      name="properties"
      [(ngModel)]="properties"
      p-columns="3"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" name="restore" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-labs/sample-po-datepicker-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoDatepickerIsoFormat, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
    selector: 'sample-po-datepicker-labs',
    templateUrl: './sample-po-datepicker-labs.component.html',
    standalone: false
})
export class SamplePoDatepickerLabsComponent implements OnInit {
  datepicker: string | Date;
  maxDate: string | Date;
  errorPattern: string;
  event: string;
  format: string;
  help: string;
  isoFormat: PoDatepickerIsoFormat;
  label: string;
  locale: string;
  placeholder: string;
  properties: Array<string>;
  minDate: string | Date;

  public readonly isoFormatOptions: Array<PoRadioGroupOption> = [
    { label: 'Basic', value: PoDatepickerIsoFormat.Basic },
    { label: 'Extended', value: PoDatepickerIsoFormat.Extended }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' }
  ];

  public readonly formatOptions: Array<PoRadioGroupOption> = [
    { label: 'dd/mm/yyyy', value: 'dd/mm/yyyy' },
    { label: 'mm/dd/yyyy', value: 'mm/dd/yyyy' },
    { label: 'yyyy/mm/dd', value: 'yyyy/mm/dd' }
  ];

  public readonly localeOptions: Array<PoRadioGroupOption> = [
    { label: 'pt', value: 'pt' },
    { label: 'en', value: 'en' },
    { label: 'es', value: 'es' },
    { label: 'ru', value: 'ru' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.datepicker = undefined;
    this.maxDate = undefined;
    this.event = undefined;
    this.errorPattern = undefined;
    this.format = undefined;
    this.help = undefined;
    this.isoFormat = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.placeholder = undefined;
    this.properties = [];
    this.minDate = undefined;
  }
}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-datepicker-labs"),t(),l(23,"hr")),r&2&&(p(5),x("po-icon "+i.sampleCodeButtonIcon),p(),w(" ",i.sampleCodeButtonLabel,""),p(),d("ngClass",P(4,Pe,i.hideSampleCodeTabs)))},dependencies:[_,D,C,k,ce],encapsulation:2})}return a})();var Me=["formAirfare"],fe=(()=>{class a{poDialog;poNotification;formAirfare;accompany=0;destination;endDate=new Date;origin;startDate=new Date;ticketClass="Economy";accompanyNumber=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}];ticketClassOptions=[{value:"Economy",label:"Economy"},{value:"Premium",label:"Premium"},{value:"Business",label:"Business"},{value:"First",label:"First"}];constructor(m,r){this.poDialog=m,this.poNotification=r}apply(){let m=`Would you like to confirm the ticket from ${this.origin} to ${this.destination} with departure date at
    ${this.getFormatedDate(this.startDate)} and return at ${this.getFormatedDate(this.endDate)} with ${this.accompany} companions in
    ${this.ticketClass} class?`;this.poDialog.confirm({title:"Confirm",message:m,confirm:()=>{this.poNotification.success("Booking Confirmed"),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:"Economy"})},cancel:()=>{this.poNotification.warning("Booking Canceled")}})}getFormatedDate(m){return m&&m.slice(0,10)}static \u0275fac=function(r){return new(r||a)(y(j),y(z))};static \u0275cmp=g({type:a,selectors:[["sample-po-datepicker-airfare"]],viewQuery:function(r,i){if(r&1&&J(Me,7),r&2){let s;Y(s=K())&&(i.formAirfare=s.first)}},standalone:!1,decls:13,vars:11,consts:[["formAirfare","ngForm"],[1,"po-row"],["name","startDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date start","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","endDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date end","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","origin","p-placeholder","Flight origin","p-label","Origin","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-placeholder","Flight destination","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["clas","po-row"],["name","ticketClass","p-label","Class","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","accompany","p-label","Accompany","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","applyButton","p-label","Apply",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let s=W();n(0,"form",null,0)(2,"div",1)(3,"po-datepicker",2),h("ngModelChange",function(o){return c(s),E(i.startDate,o)||(i.startDate=o),u(o)}),t(),n(4,"po-datepicker",3),h("ngModelChange",function(o){return c(s),E(i.endDate,o)||(i.endDate=o),u(o)}),t()(),n(5,"div",1)(6,"po-input",4),h("ngModelChange",function(o){return c(s),E(i.origin,o)||(i.origin=o),u(o)}),t(),n(7,"po-input",5),h("ngModelChange",function(o){return c(s),E(i.destination,o)||(i.destination=o),u(o)}),t()(),n(8,"div",6)(9,"po-select",7),h("ngModelChange",function(o){return c(s),E(i.ticketClass,o)||(i.ticketClass=o),u(o)}),t(),n(10,"po-select",8),h("ngModelChange",function(o){return c(s),E(i.accompany,o)||(i.accompany=o),u(o)}),t()(),n(11,"div",1)(12,"po-button",9),S("p-click",function(){return c(s),u(i.apply())}),t()()()}if(r&2){let s=X(1);p(3),b("ngModel",i.startDate),d("p-max-date",i.endDate),p(),b("ngModel",i.endDate),d("p-min-date",i.startDate),p(2),b("ngModel",i.origin),p(),b("ngModel",i.destination),p(2),b("ngModel",i.ticketClass),d("p-options",i.ticketClassOptions),p(),b("ngModel",i.accompany),d("p-options",i.accompanyNumber),p(2),d("p-disabled",s.invalid)}},dependencies:[B,q,A,R,I,V,M,O,H],encapsulation:2})}return a})();var Te=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-datepicker-airfare-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker - Airfare"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.html"),t(),n(13,"pre",7),e(14,`<form #formAirfare="ngForm">
  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      name="startDate"
      [(ngModel)]="startDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date start"
      p-required
      [p-max-date]="endDate"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="endDate"
      [(ngModel)]="endDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date end"
      p-required
      [p-min-date]="startDate"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="origin"
      [(ngModel)]="origin"
      p-placeholder="Flight origin"
      p-label="Origin"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="destination"
      [(ngModel)]="destination"
      p-label="Destination"
      p-placeholder="Flight destination"
      p-required
    >
    </po-input>
  </div>

  <div clas="po-row">
    <po-select
      class="po-md-6"
      name="ticketClass"
      [(ngModel)]="ticketClass"
      p-label="Class"
      p-required
      [p-options]="ticketClassOptions"
    >
    </po-select>

    <po-select
      class="po-md-6"
      name="accompany"
      [(ngModel)]="accompany"
      p-label="Accompany"
      p-required
      [p-options]="accompanyNumber"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="applyButton"
      p-label="Apply"
      [p-disabled]="formAirfare.invalid"
      (p-click)="apply()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
    selector: 'sample-po-datepicker-airfare',
    templateUrl: './sample-po-datepicker-airfare.component.html',
    standalone: false
})
export class SamplePoDatepickerAirfareComponent {
  @ViewChild('formAirfare', { static: true }) formAirfare: UntypedFormControl;

  accompany: number = 0;
  destination: string;
  endDate: string = <any>new Date();
  origin: string;
  startDate: string = <any>new Date();
  ticketClass: string = 'Economy';

  public readonly accompanyNumber: Array<PoSelectOption> = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' }
  ];

  public readonly ticketClassOptions: Array<PoSelectOption> = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Premium', label: 'Premium' },
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First' }
  ];

  constructor(
    private poDialog: PoDialogService,
    private poNotification: PoNotificationService
  ) {}

  apply() {
    const message = \`Would you like to confirm the ticket from \${this.origin} to \${
      this.destination
    } with departure date at
    \${this.getFormatedDate(this.startDate)} and return at \${this.getFormatedDate(this.endDate)} with \${
      this.accompany
    } companions in
    \${this.ticketClass} class?\`;

    this.poDialog.confirm({
      title: 'Confirm',
      message,
      confirm: () => {
        this.poNotification.success('Booking Confirmed');

        this.formAirfare.reset({
          accompany: 0,
          endDate: new Date(),
          startDate: new Date(),
          ticketClass: 'Economy'
        });
      },
      cancel: () => {
        this.poNotification.warning('Booking Canceled');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }
}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-datepicker-airfare"),t(),l(23,"hr")),r&2&&(p(5),x("po-icon "+i.sampleCodeButtonIcon),p(),w(" ",i.sampleCodeButtonLabel,""),p(),d("ngClass",P(4,Te,i.hideSampleCodeTabs)))},dependencies:[_,D,C,k,fe],encapsulation:2})}return a})();var be=(()=>{class a{formBuilder;poDialog;poNotification;formAirfare;accompanyNumber=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}];ticketClassOptions=[{value:"Economy",label:"Economy"},{value:"Premium",label:"Premium"},{value:"Business",label:"Business"},{value:"First",label:"First"}];constructor(m,r,i){this.formBuilder=m,this.poDialog=r,this.poNotification=i}ngOnInit(){this.formAirfare=this.formBuilder.group({accompany:[0,T.required],destination:["",T.required],endDate:[new Date,T.required],origin:["",T.required],startDate:[new Date,T.required],ticketClass:["Economy",T.required]})}apply(m){let{accompany:r,destination:i,endDate:s,origin:f,ticketClass:o,startDate:ye}=m.value,Ce=`Would you like to confirm the ticket from ${f} to ${i} with departure date at
    ${this.getFormatedDate(ye)} and return at ${this.getFormatedDate(s)} with ${r} companions in
    ${o} class?`;this.poDialog.confirm({title:"Confirm",message:Ce,confirm:()=>{this.poNotification.success("Booking Confirmed"),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:"Economy"})},cancel:()=>{this.poNotification.warning("Booking Canceled")}})}getFormatedDate(m){return m&&m.slice(0,10)}static \u0275fac=function(r){return new(r||a)(y(te),y(j),y(z))};static \u0275cmp=g({type:a,selectors:[["sample-po-datepicker-airfare-reactive-form"]],standalone:!1,decls:12,vars:6,consts:[[3,"formGroup"],[1,"po-row"],["formControlName","startDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date start",1,"po-md-6",3,"p-max-date"],["formControlName","endDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date end",1,"po-md-6",3,"p-min-date"],["formControlName","origin","p-placeholder","Flight origin","p-label","Origin",1,"po-md-6"],["formControlName","destination","p-label","Destination","p-placeholder","Flight destination",1,"po-md-6"],["clas","po-row"],["formControlName","ticketClass","p-label","Class",1,"po-md-6",3,"p-options"],["formControlName","accompany","p-label","Accompany",1,"po-md-6",3,"p-options"],["name","applyButton","p-label","Apply",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(r,i){r&1&&(n(0,"form",0)(1,"div",1),l(2,"po-datepicker",2)(3,"po-datepicker",3),t(),n(4,"div",1),l(5,"po-input",4)(6,"po-input",5),t(),n(7,"div",6),l(8,"po-select",7)(9,"po-select",8),t(),n(10,"div",1)(11,"po-button",9),S("p-click",function(){return i.apply(i.formAirfare)}),t()()()),r&2&&(d("formGroup",i.formAirfare),p(2),d("p-max-date",i.formAirfare.get("endDate").value),p(),d("p-min-date",i.formAirfare.get("startDate").value),p(5),d("p-options",i.ticketClassOptions),p(),d("p-options",i.accompanyNumber),p(2),d("p-disabled",i.formAirfare.invalid))},dependencies:[B,q,A,$,ee,V,M,O,H],encapsulation:2})}return a})();var Be=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-datepicker-airfare-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker - Airfare Reactive Form"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<form [formGroup]="formAirfare">
  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      formControlName="startDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date start"
      [p-max-date]="formAirfare.get('endDate').value"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      formControlName="endDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date end"
      [p-min-date]="formAirfare.get('startDate').value"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" formControlName="origin" p-placeholder="Flight origin" p-label="Origin"> </po-input>

    <po-input class="po-md-6" formControlName="destination" p-label="Destination" p-placeholder="Flight destination">
    </po-input>
  </div>

  <div clas="po-row">
    <po-select class="po-md-6" formControlName="ticketClass" p-label="Class" [p-options]="ticketClassOptions">
    </po-select>

    <po-select class="po-md-6" formControlName="accompany" p-label="Accompany" [p-options]="accompanyNumber">
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="applyButton"
      p-label="Apply"
      [p-disabled]="formAirfare.invalid"
      (p-click)="apply(formAirfare)"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
    selector: 'sample-po-datepicker-airfare-reactive-form',
    templateUrl: './sample-po-datepicker-airfare-reactive-form.component.html',
    standalone: false
})
export class SamplePoDatepickerAirfareReactiveFormComponent implements OnInit {
  formAirfare: UntypedFormGroup;

  readonly accompanyNumber: Array<PoSelectOption> = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' }
  ];

  readonly ticketClassOptions: Array<PoSelectOption> = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Premium', label: 'Premium' },
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First' }
  ];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private poDialog: PoDialogService,
    private poNotification: PoNotificationService
  ) {}

  ngOnInit() {
    this.formAirfare = this.formBuilder.group({
      accompany: [0, Validators.required],
      destination: ['', Validators.required],
      endDate: [new Date(), Validators.required],
      origin: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      ticketClass: ['Economy', Validators.required]
    });
  }

  apply(formAirfare: UntypedFormGroup) {
    const { accompany, destination, endDate, origin, ticketClass, startDate } = formAirfare.value;

    const message = \`Would you like to confirm the ticket from \${origin} to \${destination} with departure date at
    \${this.getFormatedDate(startDate)} and return at \${this.getFormatedDate(endDate)} with \${accompany} companions in
    \${ticketClass} class?\`;

    this.poDialog.confirm({
      title: 'Confirm',
      message,
      confirm: () => {
        this.poNotification.success('Booking Confirmed');

        this.formAirfare.reset({
          accompany: 0,
          endDate: new Date(),
          startDate: new Date(),
          ticketClass: 'Economy'
        });
      },
      cancel: () => {
        this.poNotification.warning('Booking Canceled');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }
}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-datepicker-airfare-reactive-form"),t(),l(23,"hr")),r&2&&(p(5),x("po-icon "+i.sampleCodeButtonIcon),p(),w(" ",i.sampleCodeButtonLabel,""),p(),d("ngClass",P(4,Be,i.hideSampleCodeTabs)))},dependencies:[_,D,C,k,be],encapsulation:2})}return a})();var he=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-datepicker-doc"]],standalone:!1,decls:869,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3schools.com/js/js_dates.asp"],["href","https://www.w3schools.com/jsref/jsref_setfullyear.asp"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","Date"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoDatepickerComponent"),t()(),n(21,"div",2)(22,"p"),e(23,"O "),n(24,"code"),e(25,"po-datepicker"),t(),e(26," \xE9 um componente espec\xEDfico para manipula\xE7\xE3o de datas permitindo a digita\xE7\xE3o e / ou sele\xE7\xE3o."),t(),n(27,"p"),e(28,`O formato de exibi\xE7\xE3o da data, ou seja, o formato que \xE9 apresentado ao usu\xE1rio \xE9 o dd/mm/yyyy,
mas podem ser definidos outros padr\xF5es (veja mais na propriedade `),n(29,"code"),e(30,"p-format"),t(),e(31,")."),t(),n(32,"p"),e(33,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),n(34,"code"),e(35,"p-locale"),t(),e(36,"."),t(),n(37,"p"),e(38,`O datepicker aceita tr\xEAs formatos de data: o E8601DZw (yyyy-mm-ddThh:mm:ss+|-hh:mm), o E8601DAw (yyyy-mm-dd) e o
Date padr\xE3o do Javascript.`),t(),n(39,"blockquote")(40,"p"),e(41,"Por padr\xE3o, o formato de sa\xEDda do "),n(42,"em"),e(43,"model"),t(),e(44,` se ajustar\xE1 conforme o formato de entrada. Se por acaso precisar controlar o valor de sa\xEDda,
a propriedade `),n(45,"code"),e(46,"p-iso-format"),t(),e(47," prov\xEA esse controle independentemente do formato de entrada. Veja abaixo os formatos dispon\xEDveis:"),t()(),n(48,"ul")(49,"li")(50,"p"),e(51,"Formato de entrada e sa\xEDda (E8601DZw) - "),n(52,"code"),e(53,"'2017-11-28T00:00:00-02:00'"),t(),e(54,";"),t()(),n(55,"li")(56,"p"),e(57,"Formato de entrada e sa\xEDda (E8601DAw) - "),n(58,"code"),e(59,"'2017-11-28'"),t(),e(60,";"),t()(),n(61,"li")(62,"p"),e(63,"Formato de entrada (Date) - "),n(64,"code"),e(65,"new Date(2017, 10, 28)"),t(),e(66," e sa\xEDda (E8601DAw) - "),n(67,"code"),e(68,"'2017-11-28'"),t(),e(69,";"),t()()(),n(70,"p")(71,"strong"),e(72,"Importante:"),t()(),n(73,"ul")(74,"li"),e(75,"Para utilizar datas com ano inferior a 100, verificar o comportamento do "),n(76,"a",6)(77,"code"),e(78,"new Date"),t()(),e(79,`
e utilizar o m\xE9todo `),n(80,"a",7)(81,"code"),e(82,"setFullYear"),t()(),e(83,"."),t(),n(84,"li"),e(85,"Caso a data esteja inv\xE1lida, o "),n(86,"code"),e(87,"model"),t(),e(88," receber\xE1 "),n(89,"strong"),e(90,"'Data inv\xE1lida'"),t(),e(91,"."),t(),n(92,"li"),e(93,"Caso o "),n(94,"code"),e(95,"input"),t(),e(96," esteja passando um "),n(97,"code"),e(98,"[(ngModel)]"),t(),e(99,", mas n\xE3o tenha um "),n(100,"code"),e(101,"name"),t(),e(102,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),n(103,"code"),e(104,'[ngModelOptions]="{standalone: true}"'),t(),e(105,")."),t()(),n(106,"p"),e(107,"Exemplo:"),t(),n(108,"pre")(109,"code"),e(110,`<po-datepicker
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}"
</po-datepicker>`),t()(),n(111,"blockquote")(112,"p"),e(113,"N\xE3o esque\xE7a de importar o "),n(114,"code"),e(115,"FormsModule"),t(),e(116," em seu m\xF3dulo, tal como para utilizar o "),n(117,"code"),e(118,"input default"),t(),e(119,"."),t()(),n(120,"h4",8),e(121,"Tokens customiz\xE1veis"),t(),n(122,"p"),e(123,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),l(124,"br"),e(125,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(126,"code"),e(127,".po-input"),t()(),n(128,"blockquote")(129,"p"),e(130,"Para maiores informa\xE7\xF5es, acesse o guia "),n(131,"a",9),e(132,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(133,"."),t()(),n(134,"table")(135,"thead")(136,"tr")(137,"th"),e(138,"Propriedade"),t(),n(139,"th"),e(140,"Descri\xE7\xE3o"),t(),n(141,"th"),e(142,"Valor Padr\xE3o"),t()()(),n(143,"tbody")(144,"tr")(145,"td")(146,"strong"),e(147,"Default Values"),t()(),l(148,"td")(149,"td"),t(),n(150,"tr")(151,"td")(152,"code"),e(153,"--font-family"),t()(),n(154,"td"),e(155,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(156,"td")(157,"code"),e(158,"var(--font-family-theme)"),t()()(),n(159,"tr")(160,"td")(161,"code"),e(162,"--font-size"),t()(),n(163,"td"),e(164,"Tamanho da fonte"),t(),n(165,"td")(166,"code"),e(167,"var(--font-size-default)"),t()()(),n(168,"tr")(169,"td")(170,"code"),e(171,"--text-color-placeholder"),t(),e(172," \xA0"),t(),n(173,"td"),e(174,"Cor principal do texto do placeholder"),t(),n(175,"td")(176,"code"),e(177,"var(--color-neutral-light-30)"),t()()(),n(178,"tr")(179,"td")(180,"code"),e(181,"--color"),t()(),n(182,"td"),e(183,"Cor principal do datepicker"),t(),n(184,"td")(185,"code"),e(186,"var(--color-neutral-dark-70)"),t()()(),n(187,"tr")(188,"td")(189,"code"),e(190,"--background"),t()(),n(191,"td"),e(192,"Cor de background"),t(),n(193,"td")(194,"code"),e(195,"var(--color-neutral-light-05)"),t()()(),n(196,"tr")(197,"td")(198,"code"),e(199,"--padding"),t()(),n(200,"td"),e(201,"Preenchimento"),t(),n(202,"td")(203,"code"),e(204,"0 0.5rem"),t()()(),n(205,"tr")(206,"td")(207,"code"),e(208,"--text-color"),t()(),n(209,"td"),e(210,"Cor do texto"),t(),n(211,"td")(212,"code"),e(213,"var(--color-neutral-dark-90)"),t()()(),n(214,"tr")(215,"td")(216,"strong"),e(217,"Hover"),t()(),l(218,"td")(219,"td"),t(),n(220,"tr")(221,"td")(222,"code"),e(223,"--color-hover"),t()(),n(224,"td"),e(225,"Cor principal no estado hover"),t(),n(226,"td")(227,"code"),e(228,"var(--color-brand-01-dark)"),t()()(),n(229,"tr")(230,"td")(231,"code"),e(232,"--background-hover"),t()(),n(233,"td"),e(234,"Cor de background no estado hover"),t(),n(235,"td")(236,"code"),e(237,"var(--color-brand-01-lightest)"),t()()(),n(238,"tr")(239,"td")(240,"strong"),e(241,"Focused"),t()(),l(242,"td")(243,"td"),t(),n(244,"tr")(245,"td")(246,"code"),e(247,"--color-focused"),t()(),n(248,"td"),e(249,"Cor principal no estado de focus"),t(),n(250,"td")(251,"code"),e(252,"var(--color-action-default)"),t()()(),n(253,"tr")(254,"td")(255,"code"),e(256,"--outline-color-focused"),t()(),n(257,"td"),e(258,"Cor do outline do estado de focus"),t(),n(259,"td")(260,"code"),e(261,"var(--color-action-focus)"),t()()(),n(262,"tr")(263,"td")(264,"strong"),e(265,"Disabled"),t()(),l(266,"td")(267,"td"),t(),n(268,"tr")(269,"td")(270,"code"),e(271,"--color-disabled"),t()(),n(272,"td"),e(273,"Cor principal no estado disabled"),t(),n(274,"td")(275,"code"),e(276,"var(--color-neutral-light-30)"),t()()(),n(277,"tr")(278,"td")(279,"code"),e(280,"--background-disabled"),t()(),n(281,"td"),e(282,"Cor de background no estado disabled \xA0"),t(),n(283,"td")(284,"code"),e(285,"var(--color-neutral-light-20)"),t()()(),n(286,"tr")(287,"td")(288,"code"),e(289,"--text-color-disabled"),t()(),n(290,"td"),e(291,"Cor do texto no estado disabled"),t(),n(292,"td")(293,"code"),e(294,"var(--color-neutral-dark-70)"),t()()()()()(),n(295,"div",10)(296,"h4",11),e(297,"Seletor"),t(),n(298,"pre",12),e(299,`<po-datepicker
    p-locale="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-clean="boolean"
    p-disabled="boolean"
    p-error-async="(value) => Observable<boolean>"
    p-error-pattern="string"
    p-format="string"
    p-help="string"
    p-iso-format="PoDatepickerIsoFormat"
    p-label="string"
    p-max-date="string | Date"
    p-min-date="string | Date"
    p-no-autocomplete="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean" >
</po-datepicker>
`),t()(),n(300,"h4",13),e(301,"Propriedades"),t(),n(302,"table",14)(303,"tr",15)(304,"th",16),e(305,"Nome"),t(),n(306,"th",16),e(307,"Tipo"),t(),n(308,"th",16),e(309,"Padr\xE3o"),t(),n(310,"th",16),e(311,"Descri\xE7\xE3o"),t()(),n(312,"tr",17)(313,"td",18)(314,"div",19)(315,"span",20),e(316,"p-locale"),l(317,"br"),t()()(),n(318,"td",21)(319,"code",22),e(320,"string"),t()(),n(321,"td",23),e(322,"-"),t(),n(323,"td",24)(324,"em")(325,"strong"),e(326,"(opcional)"),t()(),n(327,"p"),e(328,"Idioma do Datepicker."),t(),n(329,"blockquote")(330,"p"),e(331,"O locale padr\xE3o sera recuperado com base no "),n(332,"a",25)(333,"code"),e(334,"PoI18nService"),t()(),e(335," ou "),n(336,"em"),e(337,"browser"),t(),e(338,"."),t()()()(),n(339,"tr",17)(340,"td",18)(341,"div",19)(342,"span",20),e(343," p-append-in-body"),l(344,"br"),t()()(),n(345,"td",21)(346,"code",26),e(347,"boolean"),t()(),n(348,"td",23)(349,"p")(350,"code"),e(351,"false"),t()()(),n(352,"td",24)(353,"em")(354,"strong"),e(355,"(opcional)"),t()(),n(356,"p"),e(357,`Define que o calend\xE1rio do DatePicker ser\xE1 inclu\xEDdo no body da p\xE1gina, em vez de suspenso junto ao campo de entrada do componente.
Essa op\xE7\xE3o \xE9 \xFAtil em cen\xE1rios onde o DatePicker precisa ser renderizado fora do conte\xFAdo principal da p\xE1gina,
como em formul\xE1rios que utilizam scroll ou containers com overflow escondido.`),t(),n(358,"blockquote")(359,"p"),e(360,"Obs: O uso dessa propriedade pode interferir na sequ\xEAncia de tabula\xE7\xE3o da p\xE1gina, especialmente em formul\xE1rios longos."),t()()()(),n(361,"tr",17)(362,"td",18)(363,"div",19)(364,"span",20),e(365," p-auto-focus"),l(366,"br"),t()()(),n(367,"td",21)(368,"code",26),e(369,"boolean"),t()(),n(370,"td",23)(371,"p")(372,"code"),e(373,"false"),t()()(),n(374,"td",24)(375,"em")(376,"strong"),e(377,"(opcional)"),t()(),n(378,"p"),e(379,"Aplica foco no elemento ao ser iniciado."),t(),n(380,"blockquote")(381,"p"),e(382,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(383,"tr",17)(384,"td",18)(385,"div",19)(386,"span",20),e(387,"p-clean"),l(388,"br"),t()()(),n(389,"td",21)(390,"code",26),e(391,"boolean"),t()(),n(392,"td",23),e(393,"-"),t(),n(394,"td",24)(395,"em")(396,"strong"),e(397,"(opcional)"),t()(),n(398,"p"),e(399,"Habilita a\xE7\xE3o para limpar o campo."),t()()(),n(400,"tr",17)(401,"td",18)(402,"div",19)(403,"span",20),e(404,"p-disabled"),l(405,"br"),t()()(),n(406,"td",21)(407,"code",26),e(408,"boolean"),t()(),n(409,"td",23),e(410,"-"),t(),n(411,"td",24)(412,"em")(413,"strong"),e(414,"(opcional)"),t()(),n(415,"p"),e(416,"Desabilita o campo."),t()()(),n(417,"tr",17)(418,"td",18)(419,"div",19)(420,"span",20),e(421," p-error-async"),l(422,"br"),t()()(),n(423,"td",21)(424,"code",27),e(425,"(value) => Observable<boolean>"),t()(),n(426,"td",23),e(427,"-"),t(),n(428,"td",24)(429,"em")(430,"strong"),e(431,"(opcional)"),t()(),n(432,"p"),e(433,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(434,"code"),e(435,"change"),t(),e(436,"."),t()()(),n(437,"tr",17)(438,"td",18)(439,"div",19)(440,"span",20),e(441," p-error-pattern"),l(442,"br"),t()()(),n(443,"td",21)(444,"code",22),e(445,"string"),t()(),n(446,"td",23),e(447,"-"),t(),n(448,"td",24)(449,"em")(450,"strong"),e(451,"(opcional)"),t()(),n(452,"p"),e(453,"Mensagem apresentada quando a data for inv\xE1lida ou fora do per\xEDodo."),t(),n(454,"blockquote")(455,"p"),e(456,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(457,"code"),e(458,"p-required-field-error-message"),t(),e(459," em conjunto."),t()()()(),n(460,"tr",17)(461,"td",18)(462,"div",19)(463,"span",20),e(464," p-format"),l(465,"br"),t()()(),n(466,"td",21)(467,"code",22),e(468,"string"),t()(),n(469,"td",23)(470,"p")(471,"code"),e(472,"dd/mm/yyyy"),t()()(),n(473,"td",24)(474,"em")(475,"strong"),e(476,"(opcional)"),t()(),n(477,"p"),e(478,"Formato de exibi\xE7\xE3o da data."),t(),n(479,"p"),e(480,"Valores v\xE1lidos:"),t(),n(481,"ul")(482,"li")(483,"code"),e(484,"dd/mm/yyyy"),t()(),n(485,"li")(486,"code"),e(487,"mm/dd/yyyy"),t()(),n(488,"li")(489,"code"),e(490,"yyyy/mm/dd"),t()()()()(),n(491,"tr",17)(492,"td",18)(493,"div",19)(494,"span",20),e(495," p-help"),l(496,"br"),t()()(),n(497,"td",21)(498,"code",22),e(499,"string"),t()(),n(500,"td",23),e(501,"-"),t(),n(502,"td",24)(503,"em")(504,"strong"),e(505,"(opcional)"),t()(),n(506,"p"),e(507,"Texto de apoio do campo."),t()()(),n(508,"tr",17)(509,"td",18)(510,"div",19)(511,"span",20),e(512," p-iso-format"),l(513,"br"),t()()(),n(514,"td",21)(515,"code",28),e(516,"PoDatepickerIsoFormat"),t()(),n(517,"td",23),e(518,"-"),t(),n(519,"td",24)(520,"em")(521,"strong"),e(522,"(opcional)"),t()(),n(523,"p"),e(524,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do "),n(525,"em"),e(526,"model"),t(),e(527,", independentemente do formato de entrada."),t(),n(528,"blockquote")(529,"p"),e(530,"Veja os valores v\xE1lidos no "),n(531,"em"),e(532,"enum"),t(),n(533,"code"),e(534,"PoDatepickerIsoFormat"),t(),e(535,"."),t()()()(),n(536,"tr",17)(537,"td",18)(538,"div",19)(539,"span",20),e(540," p-label"),l(541,"br"),t()()(),n(542,"td",21)(543,"code",22),e(544,"string"),t()(),n(545,"td",23),e(546,"-"),t(),n(547,"td",24)(548,"em")(549,"strong"),e(550,"(opcional)"),t()(),n(551,"p"),e(552,"R\xF3tulo do campo."),t()()(),n(553,"tr",17)(554,"td",18)(555,"div",19)(556,"span",20),e(557," p-max-date"),l(558,"br"),t()()(),n(559,"td",21)(560,"code",22),e(561,"string "),t(),n(562,"code",29),e(563," Date"),t()(),n(564,"td",23),e(565,"-"),t(),n(566,"td",24)(567,"em")(568,"strong"),e(569,"(opcional)"),t()(),n(570,"p"),e(571,"Define uma data m\xE1xima para o "),n(572,"code"),e(573,"po-datepicker"),t(),e(574,"."),t()()(),n(575,"tr",17)(576,"td",18)(577,"div",19)(578,"span",20),e(579," p-min-date"),l(580,"br"),t()()(),n(581,"td",21)(582,"code",22),e(583,"string "),t(),n(584,"code",29),e(585," Date"),t()(),n(586,"td",23),e(587,"-"),t(),n(588,"td",24)(589,"em")(590,"strong"),e(591,"(opcional)"),t()(),n(592,"p"),e(593,"Define uma data m\xEDnima para o "),n(594,"code"),e(595,"po-datepicker"),t(),e(596,"."),t()()(),n(597,"tr",17)(598,"td",18)(599,"div",19)(600,"span",20),e(601," p-no-autocomplete"),l(602,"br"),t()()(),n(603,"td",21)(604,"code",26),e(605,"boolean"),t()(),n(606,"td",23)(607,"p")(608,"code"),e(609,"false"),t()()(),n(610,"td",24)(611,"em")(612,"strong"),e(613,"(opcional)"),t()(),n(614,"p"),e(615,"Define a propriedade nativa "),n(616,"code"),e(617,"autocomplete"),t(),e(618," do campo como "),n(619,"code"),e(620,"off"),t(),e(621,"."),t()()(),n(622,"tr",17)(623,"td",18)(624,"div",30)(625,"span",31),e(626," (p-blur)"),l(627,"br"),t()()(),n(628,"td",21)(629,"code",32),e(630,"EventEmitter"),t()(),n(631,"td",23),e(632,"-"),t(),n(633,"td",24)(634,"em")(635,"strong"),e(636,"(opcional)"),t()(),n(637,"p"),e(638,"Evento disparado ao sair do campo."),t()()(),n(639,"tr",17)(640,"td",18)(641,"div",30)(642,"span",31),e(643," (p-change)"),l(644,"br"),t()()(),n(645,"td",21)(646,"code",32),e(647,"EventEmitter"),t()(),n(648,"td",23),e(649,"-"),t(),n(650,"td",24)(651,"em")(652,"strong"),e(653,"(opcional)"),t()(),n(654,"p"),e(655,"Evento disparado ao alterar valor do campo."),t()()(),n(656,"tr",17)(657,"td",18)(658,"div",19)(659,"span",20),e(660," p-optional"),l(661,"br"),t()()(),n(662,"td",21)(663,"code",26),e(664,"boolean"),t()(),n(665,"td",23)(666,"p")(667,"code"),e(668,"false"),t()()(),n(669,"td",24)(670,"em")(671,"strong"),e(672,"(opcional)"),t()(),n(673,"p"),e(674,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(675,"blockquote")(676,"p"),e(677,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(678,"ul")(679,"li"),e(680,"O campo conter "),n(681,"code"),e(682,"p-required"),t(),e(683,";"),t(),n(684,"li"),e(685,"N\xE3o possuir "),n(686,"code"),e(687,"p-help"),t(),e(688," e/ou "),n(689,"code"),e(690,"p-label"),t(),e(691,"."),t()()()(),n(692,"tr",17)(693,"td",18)(694,"div",19)(695,"span",20),e(696," p-placeholder"),l(697,"br"),t()()(),n(698,"td",21)(699,"code",22),e(700,"string"),t()(),n(701,"td",23),e(702,"-"),t(),n(703,"td",24)(704,"em")(705,"strong"),e(706,"(opcional)"),t()(),n(707,"p"),e(708,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(709,"tr",17)(710,"td",18)(711,"div",19)(712,"span",20),e(713,"p-readonly"),l(714,"br"),t()()(),n(715,"td",21)(716,"code",26),e(717,"boolean"),t()(),n(718,"td",23),e(719,"-"),t(),n(720,"td",24)(721,"em")(722,"strong"),e(723,"(opcional)"),t()(),n(724,"p"),e(725,"Torna o elemento somente leitura."),t()()(),n(726,"tr",17)(727,"td",18)(728,"div",19)(729,"span",20),e(730,"p-required"),l(731,"br"),t()()(),n(732,"td",21)(733,"code",26),e(734,"boolean"),t()(),n(735,"td",23)(736,"p")(737,"code"),e(738,"false"),t()()(),n(739,"td",24)(740,"em")(741,"strong"),e(742,"(opcional)"),t()(),n(743,"p"),e(744,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),n(745,"tr",17)(746,"td",18)(747,"div",19)(748,"span",20),e(749," p-required-field-error-message"),l(750,"br"),t()()(),n(751,"td",21)(752,"code",26),e(753,"boolean"),t()(),n(754,"td",23)(755,"p")(756,"code"),e(757,"false"),t()()(),n(758,"td",24)(759,"em")(760,"strong"),e(761,"(opcional)"),t()(),n(762,"p"),e(763,"Exibe a mensagem setada na propriedade "),n(764,"code"),e(765,"p-error-pattern"),t(),e(766," se o campo estiver vazio e for requerido."),t(),n(767,"blockquote")(768,"p"),e(769,"Necess\xE1rio que a propriedade "),n(770,"code"),e(771,"p-required"),t(),e(772," esteja habilitada."),t()()()(),n(773,"tr",17)(774,"td",18)(775,"div",19)(776,"span",20),e(777," p-show-required"),l(778,"br"),t()()(),n(779,"td",21)(780,"code",26),e(781,"boolean"),t()(),n(782,"td",23),e(783,"-"),t(),n(784,"td",24)(785,"p"),e(786,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(787,"blockquote")(788,"p"),e(789,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(790,"ul")(791,"li"),e(792,"N\xE3o possuir "),n(793,"code"),e(794,"p-help"),t(),e(795," e/ou "),n(796,"code"),e(797,"p-label"),t(),e(798,"."),t()()()()(),n(799,"h3",13),e(800,"M\xE9todos"),t(),n(801,"table",33)(802,"tr",17)(803,"th",34)(804,"div",19)(805,"h4")(806,"span",20),e(807," focus "),t()()()()(),n(808,"tr",24)(809,"td",24)(810,"p"),e(811,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(812,"p"),e(813,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(814,"pre")(815,"code"),e(816,`import { PoDatepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerComponent, { static: true }) datepicker: PoDatepickerComponent;

focusDatepicker() {
  this.datepicker.focus();
}`),t()()()()(),l(817,"br"),n(818,"h3"),e(819,"Enums"),t(),n(820,"h4",4)(821,"code",5),e(822,"PoDatepickerIsoFormat"),t()(),n(823,"div",2)(824,"p")(825,"em"),e(826,"Enum"),t(),e(827," que define o padr\xE3o de formata\xE7\xE3o das datas."),t(),n(828,"blockquote")(829,"p"),e(830,"Caso um formato padr\xE3o seja definido, o mesmo n\xE3o ser\xE1 mais alterado de acordo com o formato de entrada."),t()()(),n(831,"h4",13),e(832,"Propriedades"),t(),n(833,"table",14)(834,"tr",15)(835,"th",16),e(836,"Nome"),t(),n(837,"th",16),e(838,"Descri\xE7\xE3o"),t()(),n(839,"tr",17)(840,"td",18)(841,"div",19)(842,"span",20),e(843," Basic"),l(844,"br"),t()()(),n(845,"td",24)(846,"p"),e(847,"Padr\xE3o "),n(848,"strong"),e(849,"E8601DAw"),t(),e(850," ("),n(851,"em"),e(852,"yyyy-mm-dd"),t(),e(853,")."),t()()(),n(854,"tr",17)(855,"td",18)(856,"div",19)(857,"span",20),e(858," Extended"),l(859,"br"),t()()(),n(860,"td",24)(861,"p"),e(862,"Padr\xE3o "),n(863,"strong"),e(864,"E8601DZw"),t(),e(865," ("),n(866,"em"),e(867,"yyyy-mm-ddThh:mm:ss+|-hh:mm"),t(),e(868,")."),t()()()()())},dependencies:[D],encapsulation:2})}return a})();var Se=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(y(ne),y(ie))};static \u0275cmp=g({type:a,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title"," Datepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),l(3,"sample-po-datepicker-doc"),t(),n(4,"po-tab",3),l(5,"sample-po-datepicker-basic-view")(6,"sample-po-datepicker-labs-view")(7,"sample-po-datepicker-airfare-view")(8,"sample-po-datepicker-airfare-reactive-form-view"),t()()()),r&2&&(d("p-actions",i.actions),p(2),d("p-active",i.activeTab.includes("doc")),p(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[le,C,k,de,ue,ge,Ee,he],encapsulation:2})}return a})();var Ne=[{path:"",component:Se}],ve=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=L({type:a});static \u0275inj=N({imports:[U.forChild(Ne),U]})}return a})();var ut=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=L({type:a});static \u0275inj=N({imports:[pe,ve]})}return a})();export{ut as DocPoDatepickerModule};
