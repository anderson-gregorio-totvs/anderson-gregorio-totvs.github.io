import{$ as G,$a as P,Ca as Q,Cd as W,Da as A,Dc as de,Ea as j,F as c,Fa as z,Fc as M,G as u,Ga as n,Ia as R,Ka as S,Kb as ne,La as h,Lb as F,Ma as E,Mb as O,Nb as J,Ob as B,Od as ce,Pa as w,Pb as N,Sb as ae,T as p,Tb as ie,U as y,Ua as q,Vb as oe,Wb as le,Xa as L,Xd as k,Yb as re,Yd as D,Zb as te,_ as f,_b as Z,ad as K,ha as m,jb as Y,jd as _,ka as x,md as se,na as e,oa as t,oc as I,pa as o,re as C,sd as X,se as ue,ta as T,ua as b,y as U,yd as me,zc as pe,zd as $}from"./chunk-PI3TYJHE.js";var ge=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-datepicker-range-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","datepickerRange","p-label","PO Datepicker Range"]],template:function(i,a){i&1&&o(0,"po-datepicker-range",0)},dependencies:[_],encapsulation:2})}return l})();var we=l=>({"docs-sample-code-tabs":l}),fe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-datepicker-range-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(o(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Datepicker Range Basic"),t(),e(4,"a",2),b("click",function(){return a.toggleSampleCodeTabs()}),o(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-datepicker-range-basic/sample-po-datepicker-range-basic.component.html"),t(),e(13,"pre",7),n(14,`<po-datepicker-range name="datepickerRange" p-label="PO Datepicker Range"> </po-datepicker-range>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-datepicker-range-basic/sample-po-datepicker-range-basic.component.ts"),t(),e(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-range-basic',
  templateUrl: './sample-po-datepicker-range-basic.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeBasicComponent {}
`),t()()()()(),e(21,"div",10),o(22,"sample-po-datepicker-range-basic"),t(),o(23,"hr")),i&2&&(p(5),x("po-icon "+a.sampleCodeButtonIcon),p(),R(" ",a.sampleCodeButtonLabel,""),p(),m("ngClass",w(4,we,a.hideSampleCodeTabs)))},dependencies:[P,C,k,D,ge],encapsulation:2})}return l})();var Se=(()=>{class l{clean;customLiterals;datepickerRange;endDate;event;help;label;literals;properties;fieldErrorMessage;startDate;maxDate;minDate;locale;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"}];localeOptions=[{label:"English",value:"en"},{label:"Espa\xF1ol",value:"es"},{label:"Portugu\xEAs",value:"pt"},{label:"P\u0443\u0441\u0441\u043A\u0438\u0439",value:"ru"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}getDatepickerRange(){return JSON.stringify(this.datepickerRange)}restore(){this.clean=void 0,this.customLiterals=void 0,this.endDate=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.literals=void 0,this.properties=[],this.fieldErrorMessage="",this.startDate=void 0,this.maxDate=void 0,this.minDate=void 0,this.locale=void 0,setTimeout(()=>this.datepickerRange=void 0)}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-datepicker-range-labs"]],standalone:!1,decls:22,vars:32,consts:[["f","ngForm"],["name","datepickerRange",1,"po-sm-12",3,"ngModelChange","p-change","ngModel","p-clean","p-disabled","p-end-date","p-help","p-label","p-literals","p-max-date","p-min-date","p-no-autocomplete","p-optional","p-readonly","p-required","p-field-error-message","p-show-required","p-start-date","p-locale","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","maxDate","p-clean","","p-label","Max date",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","literals","p-help",'Ex.: { "invalidFormat": "Date in inconsistent format", "startDateGreaterThanEndDate": "End date less than start date" }',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","3","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","locale","p-label","Locale",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(i,a){if(i&1){let s=T();e(0,"po-datepicker-range",1),E("ngModelChange",function(r){return c(s),h(a.datepickerRange,r)||(a.datepickerRange=r),u(r)}),b("p-change",function(){return c(s),u(a.changeEvent("p-change"))}),t(),o(1,"hr"),e(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"hr"),e(6,"form",null,0)(8,"div",2)(9,"po-input",5),E("ngModelChange",function(r){return c(s),h(a.label,r)||(a.label=r),u(r)}),t(),e(10,"po-input",6),E("ngModelChange",function(r){return c(s),h(a.help,r)||(a.help=r),u(r)}),t()(),e(11,"div",2)(12,"po-datepicker",7),E("ngModelChange",function(r){return c(s),h(a.minDate,r)||(a.minDate=r),u(r)}),t(),e(13,"po-datepicker",8),E("ngModelChange",function(r){return c(s),h(a.maxDate,r)||(a.maxDate=r),u(r)}),t()(),e(14,"div",2)(15,"po-input",9),E("ngModelChange",function(r){return c(s),h(a.literals,r)||(a.literals=r),u(r)}),b("p-change",function(){return c(s),u(a.changeLiterals())}),t(),e(16,"po-input",10),E("ngModelChange",function(r){return c(s),h(a.fieldErrorMessage,r)||(a.fieldErrorMessage=r),u(r)}),t()(),e(17,"div",2)(18,"po-checkbox-group",11),E("ngModelChange",function(r){return c(s),h(a.properties,r)||(a.properties=r),u(r)}),t(),e(19,"po-select",12),E("ngModelChange",function(r){return c(s),h(a.locale,r)||(a.locale=r),u(r)}),t()(),e(20,"div",2)(21,"po-button",13),b("p-click",function(){return c(s),u(a.restore())}),t()()()}i&2&&(S("ngModel",a.datepickerRange),m("p-clean",a.properties.includes("clean"))("p-disabled",a.properties.includes("disabled"))("p-end-date",a.endDate)("p-help",a.help)("p-label",a.label)("p-literals",a.customLiterals)("p-max-date",a.maxDate)("p-min-date",a.minDate)("p-no-autocomplete",a.properties==null?null:a.properties.includes("noAutocomplete"))("p-optional",a.properties.includes("optional"))("p-readonly",a.properties.includes("readonly"))("p-required",a.properties.includes("required"))("p-field-error-message",a.fieldErrorMessage)("p-show-required",a.properties.includes("showRequired"))("p-start-date",a.startDate)("p-locale",a.locale)("p-error-limit",a.properties==null?null:a.properties.includes("errorLimit")),p(3),m("p-value",a.getDatepickerRange()),p(),m("p-value",a.event),p(5),S("ngModel",a.label),p(),S("ngModel",a.help),p(2),S("ngModel",a.minDate),m("p-max-date",a.maxDate),p(),S("ngModel",a.maxDate),m("p-min-date",a.minDate),p(2),S("ngModel",a.literals),p(),S("ngModel",a.fieldErrorMessage),p(2),S("ngModel",a.properties),m("p-options",a.propertiesOptions),p(),S("ngModel",a.locale),m("p-options",a.localeOptions))},dependencies:[N,F,O,B,J,I,pe,de,_,se,me,W],encapsulation:2})}return l})();var _e=l=>({"docs-sample-code-tabs":l}),he=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-datepicker-range-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(o(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Datepicker Range Labs"),t(),e(4,"a",2),b("click",function(){return a.toggleSampleCodeTabs()}),o(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-datepicker-range-labs/sample-po-datepicker-range-labs.component.html"),t(),e(13,"pre",7),n(14,`<po-datepicker-range
  class="po-sm-12"
  name="datepickerRange"
  [(ngModel)]="datepickerRange"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-end-date]="endDate"
  [p-help]="help"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-max-date]="maxDate"
  [p-min-date]="minDate"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-start-date]="startDate"
  [p-locale]="locale"
  (p-change)="changeEvent('p-change')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-datepicker-range>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="getDatepickerRange()"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>
  </div>

  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      name="minDate"
      [(ngModel)]="minDate"
      p-clean
      p-label="Min date"
      [p-max-date]="maxDate"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="maxDate"
      [(ngModel)]="maxDate"
      p-clean
      p-label="Max date"
      [p-min-date]="minDate"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: { "invalidFormat": "Date in inconsistent format", "startDateGreaterThanEndDate": "End date less than start date" }'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="fieldErrorMessage"
      [(ngModel)]="fieldErrorMessage"
      p-clean
      p-label="Field Error Message"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-6"
      name="properties"
      [(ngModel)]="properties"
      p-columns="3"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-select class="po-md-6" name="locale" p-label="Locale" [(ngModel)]="locale" [p-options]="localeOptions">
    </po-select>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" name="restore" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-datepicker-range-labs/sample-po-datepicker-range-labs.component.ts"),t(),e(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoDatepickerRange,
  PoDatepickerRangeLiterals,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-range-labs',
  templateUrl: './sample-po-datepicker-range-labs.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeLabsComponent implements OnInit {
  clean: boolean;
  customLiterals: PoDatepickerRangeLiterals;
  datepickerRange: PoDatepickerRange;
  endDate: string | Date;
  event: string;
  help: string;
  label: string;
  literals: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  startDate: string | Date;
  maxDate: string | Date;
  minDate: string | Date;
  locale: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' }
  ];

  public readonly localeOptions: Array<PoSelectOption> = [
    { label: 'English', value: 'en' },
    { label: 'Espa\xF1ol', value: 'es' },
    { label: 'Portugu\xEAs', value: 'pt' },
    { label: 'P\u0443\u0441\u0441\u043A\u0438\u0439', value: 'ru' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  getDatepickerRange() {
    return JSON.stringify(this.datepickerRange);
  }

  restore() {
    this.clean = undefined;
    this.customLiterals = undefined;
    this.endDate = undefined;
    this.event = undefined;
    this.help = undefined;
    this.label = undefined;
    this.literals = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.startDate = undefined;
    this.maxDate = undefined;
    this.minDate = undefined;
    this.locale = undefined;
    setTimeout(() => (this.datepickerRange = undefined));
  }
}
`),t()()()()(),e(21,"div",10),o(22,"sample-po-datepicker-range-labs"),t(),o(23,"hr")),i&2&&(p(5),x("po-icon "+a.sampleCodeButtonIcon),p(),R(" ",a.sampleCodeButtonLabel,""),p(),m("ngClass",w(4,_e,a.hideSampleCodeTabs)))},dependencies:[P,C,k,D,Se],encapsulation:2})}return l})();var Te=["formVacationSuggestion"],Ee=(()=>{class l{poNotification;formVacationSuggestion;poModal;datepickerRange;quantityOfDays=void 0;reason;cancel={action:()=>{this.poModal.close()},label:"Cancel"};submit={action:()=>{this.poModal.close(),this.formVacationSuggestion.reset(),this.poNotification.success("Vacation suggestion submitted!")},label:"Submit"};get validateForm(){return!(this.formVacationSuggestion.valid&&this.datepickerRange&&this.datepickerRange.start&&this.datepickerRange.end)}constructor(d){this.poNotification=d}calculateQuantityOfVacationDays(){let d=new Date(this.datepickerRange.start),i=new Date(this.datepickerRange.end);this.quantityOfDays=Math.floor((Date.UTC(i.getFullYear(),i.getMonth(),i.getDate())-Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()))/(1e3*60*60*24))}clean(){this.datepickerRange=void 0,this.quantityOfDays=void 0,this.reason=void 0}static \u0275fac=function(i){return new(i||l)(y(K))};static \u0275cmp=f({type:l,selectors:[["sample-po-datepicker-range-vacations"]],viewQuery:function(i,a){if(i&1&&(Q(Te,7),Q(M,7)),i&2){let s;A(s=j())&&(a.formVacationSuggestion=s.first),A(s=j())&&(a.poModal=s.first)}},standalone:!1,decls:21,vars:18,consts:[["formVacationSuggestion","ngForm"],["modalVacationSuggestion",""],["p-label","Vacation suggestion",1,"po-md-9"],[1,"po-row"],["name","datepickerRange","p-clean","","p-label","Select the period","p-required","",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","number","p-disabled","","p-label","Quantity of days","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","textarea","p-label","Reason",1,"po-md-9",3,"ngModelChange","ngModel"],["p-label","Clean",1,"po-md-2","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click"],["p-label","Submit",1,"po-md-2",3,"p-click","p-disabled"],["p-hide-close","","p-title","Confirm vacation suggestion",3,"p-primary-action","p-secondary-action"],["p-label","Initial period",1,"po-md-4",3,"p-value"],["p-label","Final period",1,"po-md-4",3,"p-value"],["p-label","Quantity of days",1,"po-md-4",3,"p-value"],["p-disabled","","p-label","Reason","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"]],template:function(i,a){if(i&1){let s=T();e(0,"form",null,0),o(2,"po-divider",2),e(3,"div",3)(4,"po-datepicker-range",4),E("ngModelChange",function(r){return c(s),h(a.datepickerRange,r)||(a.datepickerRange=r),u(r)}),b("p-change",function(){return c(s),u(a.calculateQuantityOfVacationDays())}),t(),e(5,"po-number",5),E("ngModelChange",function(r){return c(s),h(a.quantityOfDays,r)||(a.quantityOfDays=r),u(r)}),t()(),e(6,"div",3)(7,"po-textarea",6),E("ngModelChange",function(r){return c(s),h(a.reason,r)||(a.reason=r),u(r)}),t()(),e(8,"div",3)(9,"po-button",7),b("p-click",function(){return c(s),u(a.clean())}),t(),e(10,"po-button",8),b("p-click",function(){c(s);let r=z(12);return u(r.open())}),t()()(),e(11,"po-modal",9,1)(13,"div",3),o(14,"po-info",10),q(15,"date"),o(16,"po-info",11),q(17,"date"),o(18,"po-info",12),t(),e(19,"div",3)(20,"po-textarea",13),E("ngModelChange",function(r){return c(s),h(a.reason,r)||(a.reason=r),u(r)}),t()()()}i&2&&(p(4),S("ngModel",a.datepickerRange),p(),S("ngModel",a.quantityOfDays),p(2),S("ngModel",a.reason),p(3),m("p-disabled",a.validateForm),p(),m("p-primary-action",a.submit)("p-secondary-action",a.cancel),p(3),m("p-value",L(15,10,a.datepickerRange==null?null:a.datepickerRange.start,"longDate","+0000")),p(2),m("p-value",L(17,14,a.datepickerRange==null?null:a.datepickerRange.end,"longDate","+0000")),p(2),m("p-value",a.quantityOfDays),p(2),S("ngModel",a.reason))},dependencies:[N,F,O,B,J,I,Z,_,X,$,W,M,Y],encapsulation:2})}return l})();var Le=l=>({"docs-sample-code-tabs":l}),ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-datepicker-range-vacations-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(o(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Datepicker Range - Vacations Suggestion"),t(),e(4,"a",2),b("click",function(){return a.toggleSampleCodeTabs()}),o(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-datepicker-range-vacations/sample-po-datepicker-range-vacations.component.html"),t(),e(13,"pre",7),n(14,`<form #formVacationSuggestion="ngForm">
  <po-divider class="po-md-9" p-label="Vacation suggestion"> </po-divider>

  <div class="po-row">
    <po-datepicker-range
      class="po-md-6"
      name="datepickerRange"
      [(ngModel)]="datepickerRange"
      p-clean
      p-label="Select the period"
      p-required
      (p-change)="calculateQuantityOfVacationDays()"
    >
    </po-datepicker-range>

    <po-number
      class="po-md-3"
      name="number"
      [(ngModel)]="quantityOfDays"
      p-disabled
      p-label="Quantity of days"
      p-required
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-9" name="textarea" [(ngModel)]="reason" p-label="Reason"> </po-textarea>
  </div>

  <div class="po-row">
    <po-button class="po-md-2 po-offset-md-5 po-offset-lg-5 po-offset-xl-5" p-label="Clean" (p-click)="clean()">
    </po-button>

    <po-button class="po-md-2" p-label="Submit" [p-disabled]="validateForm" (p-click)="modalVacationSuggestion.open()">
    </po-button>
  </div>
</form>

<po-modal
  #modalVacationSuggestion
  p-hide-close
  p-title="Confirm vacation suggestion"
  [p-primary-action]="submit"
  [p-secondary-action]="cancel"
>
  <div class="po-row">
    <po-info class="po-md-4" p-label="Initial period" [p-value]="datepickerRange?.start | date: 'longDate' : '+0000'">
    </po-info>

    <po-info class="po-md-4" p-label="Final period" [p-value]="datepickerRange?.end | date: 'longDate' : '+0000'">
    </po-info>

    <po-info class="po-md-4" p-label="Quantity of days" [p-value]="quantityOfDays"> </po-info>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" [(ngModel)]="reason" p-disabled p-label="Reason" p-required> </po-textarea>
  </div>
</po-modal>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-datepicker-range-vacations/sample-po-datepicker-range-vacations.component.ts"),t(),e(19,"pre",9),n(20,`import { Component, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoDatepickerRange, PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-range-vacations',
  templateUrl: './sample-po-datepicker-range-vacations.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeVacationsComponent {
  @ViewChild('formVacationSuggestion', { static: true }) formVacationSuggestion: UntypedFormControl;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  datepickerRange: PoDatepickerRange;
  quantityOfDays: number = undefined;
  reason: string;

  cancel: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Cancel'
  };

  submit: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.formVacationSuggestion.reset();
      this.poNotification.success('Vacation suggestion submitted!');
    },
    label: 'Submit'
  };

  get validateForm() {
    return !(
      this.formVacationSuggestion.valid &&
      this.datepickerRange &&
      this.datepickerRange.start &&
      this.datepickerRange.end
    );
  }

  constructor(private poNotification: PoNotificationService) {}

  calculateQuantityOfVacationDays() {
    const start = new Date(this.datepickerRange.start);
    const end = new Date(this.datepickerRange.end);

    this.quantityOfDays = Math.floor(
      (Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) -
        Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  }

  clean() {
    this.datepickerRange = undefined;
    this.quantityOfDays = undefined;
    this.reason = undefined;
  }
}
`),t()()()()(),e(21,"div",10),o(22,"sample-po-datepicker-range-vacations"),t(),o(23,"hr")),i&2&&(p(5),x("po-icon "+a.sampleCodeButtonIcon),p(),R(" ",a.sampleCodeButtonLabel,""),p(),m("ngClass",w(4,Le,a.hideSampleCodeTabs)))},dependencies:[P,C,k,D,Ee],encapsulation:2})}return l})();var ke=(()=>{class l{poNotification;formBuilder;poModal;datepickerRange;formVacationSuggestion;quantityOfDays;reason;cancel={action:()=>{this.poModal.close()},label:"Cancel"};submit={action:()=>{this.poModal.close(),this.formVacationSuggestion.reset(),this.poNotification.success("Vacation suggestion submitted!")},label:"Submit"};get validateForm(){return!(this.formVacationSuggestion.valid&&this.formVacationSuggestion.get("datepickerRange").value.start&&this.formVacationSuggestion.get("datepickerRange").value.end)}constructor(d,i){this.poNotification=d,this.formBuilder=i}ngOnInit(){this.formVacationSuggestion=this.formBuilder.group({datepickerRange:[void 0,ne.required],quantityOfDays:[void 0],reason:[void 0]})}calculateQuantityOfVacationDays(){let d=new Date(this.formVacationSuggestion.get("datepickerRange").value.start),i=new Date(this.formVacationSuggestion.get("datepickerRange").value.end),a=Math.floor((Date.UTC(i.getFullYear(),i.getMonth(),i.getDate())-Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()))/(1e3*60*60*24));this.formVacationSuggestion.get("quantityOfDays").setValue(a)}clean(){this.formVacationSuggestion.reset()}submitForm(){this.datepickerRange=this.formVacationSuggestion.get("datepickerRange").value,this.reason=this.formVacationSuggestion.get("reason").value,this.quantityOfDays=this.formVacationSuggestion.get("quantityOfDays").value}static \u0275fac=function(i){return new(i||l)(y(K),y(oe))};static \u0275cmp=f({type:l,selectors:[["sample-po-datepicker-range-vacations-reactive-form"]],viewQuery:function(i,a){if(i&1&&Q(M,7),i&2){let s;A(s=j())&&(a.poModal=s.first)}},standalone:!1,decls:20,vars:16,consts:[["modalVacationSuggestion",""],[3,"formGroup"],["p-label","Vacation suggestion",1,"po-md-9"],[1,"po-row"],["formControlName","datepickerRange","p-clean","","p-label","Select the period","p-required","",1,"po-md-6",3,"p-change"],["formControlName","quantityOfDays","p-disabled","","p-label","Quantity of days","p-required","",1,"po-md-3"],["formControlName","reason","p-label","Reason",1,"po-md-9"],["p-label","Clean",1,"po-md-2","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click"],["p-label","Submit",1,"po-md-2",3,"p-click","p-disabled"],["p-hide-close","","p-title","Confirm vacation suggestion",3,"p-primary-action","p-secondary-action"],["p-label","Initial period",1,"po-md-4",3,"p-value"],["p-label","Final period",1,"po-md-4",3,"p-value"],["p-label","Quantity of days",1,"po-md-4",3,"p-value"],["p-disabled","","p-label","Reason","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"]],template:function(i,a){if(i&1){let s=T();e(0,"form",1),o(1,"po-divider",2),e(2,"div",3)(3,"po-datepicker-range",4),b("p-change",function(){return c(s),u(a.calculateQuantityOfVacationDays())}),t(),o(4,"po-number",5),t(),e(5,"div",3),o(6,"po-textarea",6),t(),e(7,"div",3)(8,"po-button",7),b("p-click",function(){return c(s),u(a.clean())}),t(),e(9,"po-button",8),b("p-click",function(){c(s);let r=z(11);return a.submitForm(),u(r.open())}),t()()(),e(10,"po-modal",9,0)(12,"div",3),o(13,"po-info",10),q(14,"date"),o(15,"po-info",11),q(16,"date"),o(17,"po-info",12),t(),e(18,"div",3)(19,"po-textarea",13),E("ngModelChange",function(r){return c(s),h(a.reason,r)||(a.reason=r),u(r)}),t()()()}i&2&&(m("formGroup",a.formVacationSuggestion),p(9),m("p-disabled",a.validateForm),p(),m("p-primary-action",a.submit)("p-secondary-action",a.cancel),p(3),m("p-value",L(14,8,a.datepickerRange==null?null:a.datepickerRange.start,"longDate","+0000")),p(2),m("p-value",L(16,12,a.datepickerRange==null?null:a.datepickerRange.end,"longDate","+0000")),p(2),m("p-value",a.quantityOfDays),p(2),S("ngModel",a.reason))},dependencies:[N,F,O,B,ae,ie,I,Z,_,X,$,W,M,Y],encapsulation:2})}return l})();var Be=l=>({"docs-sample-code-tabs":l}),De=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-datepicker-range-vacations-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(o(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Datepicker Range - Vacations Reactive Form"),t(),e(4,"a",2),b("click",function(){return a.toggleSampleCodeTabs()}),o(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-datepicker-range-vacations-reactive-form/sample-po-datepicker-range-vacations-reactive-form.component.html"),t(),e(13,"pre",7),n(14,`<form [formGroup]="formVacationSuggestion">
  <po-divider class="po-md-9" p-label="Vacation suggestion"> </po-divider>

  <div class="po-row">
    <po-datepicker-range
      class="po-md-6"
      formControlName="datepickerRange"
      p-clean
      p-label="Select the period"
      p-required
      (p-change)="calculateQuantityOfVacationDays()"
    >
    </po-datepicker-range>

    <po-number class="po-md-3" formControlName="quantityOfDays" p-disabled p-label="Quantity of days" p-required>
    </po-number>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-9" formControlName="reason" p-label="Reason"> </po-textarea>
  </div>

  <div class="po-row">
    <po-button class="po-md-2 po-offset-md-5 po-offset-lg-5 po-offset-xl-5" p-label="Clean" (p-click)="clean()">
    </po-button>

    <po-button
      class="po-md-2"
      p-label="Submit"
      [p-disabled]="validateForm"
      (p-click)="submitForm(); modalVacationSuggestion.open()"
    >
    </po-button>
  </div>
</form>

<po-modal
  #modalVacationSuggestion
  p-hide-close
  p-title="Confirm vacation suggestion"
  [p-primary-action]="submit"
  [p-secondary-action]="cancel"
>
  <div class="po-row">
    <po-info class="po-md-4" p-label="Initial period" [p-value]="datepickerRange?.start | date: 'longDate' : '+0000'">
    </po-info>

    <po-info class="po-md-4" p-label="Final period" [p-value]="datepickerRange?.end | date: 'longDate' : '+0000'">
    </po-info>

    <po-info class="po-md-4" p-label="Quantity of days" [p-value]="quantityOfDays"> </po-info>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" [(ngModel)]="reason" p-disabled p-label="Reason" p-required> </po-textarea>
  </div>
</po-modal>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-datepicker-range-vacations-reactive-form/sample-po-datepicker-range-vacations-reactive-form.component.ts"),t(),e(19,"pre",9),n(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoDatepickerRange, PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-range-vacations-reactive-form',
  templateUrl: './sample-po-datepicker-range-vacations-reactive-form.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeVacationsReactiveFormComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  datepickerRange: PoDatepickerRange;
  formVacationSuggestion: UntypedFormGroup;
  quantityOfDays: number;
  reason: string;

  cancel: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Cancel'
  };

  submit: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.formVacationSuggestion.reset();
      this.poNotification.success('Vacation suggestion submitted!');
    },
    label: 'Submit'
  };

  get validateForm() {
    return !(
      this.formVacationSuggestion.valid &&
      this.formVacationSuggestion.get('datepickerRange').value.start &&
      this.formVacationSuggestion.get('datepickerRange').value.end
    );
  }

  constructor(
    private poNotification: PoNotificationService,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit() {
    this.formVacationSuggestion = this.formBuilder.group({
      datepickerRange: [undefined, Validators.required],
      quantityOfDays: [undefined],
      reason: [undefined]
    });
  }

  calculateQuantityOfVacationDays() {
    const start = new Date(this.formVacationSuggestion.get('datepickerRange').value.start);
    const end = new Date(this.formVacationSuggestion.get('datepickerRange').value.end);

    const result = Math.floor(
      (Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) -
        Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) /
        (1000 * 60 * 60 * 24)
    );

    this.formVacationSuggestion.get('quantityOfDays').setValue(result);
  }

  clean() {
    this.formVacationSuggestion.reset();
  }

  submitForm() {
    this.datepickerRange = this.formVacationSuggestion.get('datepickerRange').value;
    this.reason = this.formVacationSuggestion.get('reason').value;
    this.quantityOfDays = this.formVacationSuggestion.get('quantityOfDays').value;
  }
}
`),t()()()()(),e(21,"div",10),o(22,"sample-po-datepicker-range-vacations-reactive-form"),t(),o(23,"hr")),i&2&&(p(5),x("po-icon "+a.sampleCodeButtonIcon),p(),R(" ",a.sampleCodeButtonLabel,""),p(),m("ngClass",w(4,Be,a.hideSampleCodeTabs)))},dependencies:[P,C,k,D,ke],encapsulation:2})}return l})();var Ce=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-datepicker-range-doc"]],standalone:!1,decls:709,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","accepted-formats"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["href","/documentation/po-datepicker-range#accepted-formats"]],template:function(i,a){i&1&&(e(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),e(4,"div",2)(5,"p"),n(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),e(7,"blockquote")(8,"p"),n(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),e(10,"code"),n(11,"FormsModule"),t(),n(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),e(13,"code"),n(14,"ReactiveFormsModule"),t(),n(15,", ambos nativos do Angular."),t()()(),e(16,"h3",3),n(17,"Componente"),t(),e(18,"h4",4)(19,"code",5),n(20,"PoDatepickerRangeComponent"),t()(),e(21,"div",2)(22,"p"),n(23,"O "),e(24,"code"),n(25,"po-datepicker-range"),t(),n(26,` \xE9 um componente para sele\xE7\xE3o de um per\xEDodo entre duas datas, onde \xE9 poss\xEDvel informar apenas
a data inicial ou a data final.`),t(),e(27,"p"),n(28,"O componente "),e(29,"code"),n(30,"[(ngModel)]"),t(),n(31," do "),e(32,"code"),n(33,"po-datepicker-range"),t(),n(34,` trabalha com um objeto que implementa a interface
`),e(35,"code"),n(36,"PoDatepickerRange"),t(),n(37,", contendo as seguintes propriedades:"),t(),e(38,"pre")(39,"code"),n(40,`{ "start": '2017-11-28', "end": '2017-11-30' }`),t()(),e(41,"p"),o(42,"a",6),n(43,`
Este componente pode receber os seguintes formatos de data:`),t(),e(44,"ul")(45,"li")(46,"p")(47,"strong"),n(48,"Data e hora combinados (E8601DZw): yyyy-mm-ddThh:mm:ss+|-hh:mm"),t()(),e(49,"pre")(50,"code"),n(51,"'2017-11-28T00:00:00-02:00';"),t()()(),e(52,"li")(53,"p")(54,"strong"),n(55,"Data (E8601DAw.): yyyy-mm-dd"),t()(),e(56,"pre")(57,"code"),n(58,"'2017-11-28';"),t()()(),e(59,"li")(60,"p")(61,"strong"),n(62,"JavaScript Date Object:"),t()(),e(63,"pre")(64,"code"),n(65,"new Date(2017, 10, 28);"),t()()()(),e(66,"blockquote")(67,"p"),n(68,"O componente respeitar\xE1 o formato passado para o "),e(69,"em"),n(70,"model"),t(),n(71,` via codifica\xE7\xE3o. Por\xE9m, caso seja feita altera\xE7\xE3o em algum
dos valores de data em tela, o componente atribuir\xE1 o formato `),e(72,"strong"),n(73,"Data (E8601DAw.): yyyy-mm-dd"),t(),n(74," ao model."),t()(),e(75,"p"),n(76,"Importante:"),t(),e(77,"ul")(78,"li"),n(79,"Quando preenchidas a data inicial e final, a data inicial deve ser sempre menor ou igual a data final;"),t(),e(80,"li"),n(81,"Ao passar uma data inv\xE1lida via codifica\xE7\xE3o, o valor ser\xE1 mantido no "),e(82,"em"),n(83,"model"),t(),n(84," e o "),e(85,"code"),n(86,"input"),t(),n(87," da tela aparecer\xE1 vazio;"),t(),e(88,"li"),n(89,"Permite trabalhar com as duas datas separadamente atrav\xE9s das propriedades "),e(90,"code"),n(91,"p-start-date"),t(),n(92," e "),e(93,"code"),n(94,"p-end-date"),t(),n(95,` no lugar do
`),e(96,"code"),n(97,"[(ngModel)]"),t(),n(98,", no entanto sem a valida\xE7\xE3o do formul\xE1rio;"),t(),e(99,"li"),n(100,"Para a valida\xE7\xE3o do formul\xE1rio, utilize o "),e(101,"code"),n(102,"[(ngModel)]"),t(),n(103,". "),t()()(),e(104,"div",7)(105,"h4",8),n(106,"Seletor"),t(),e(107,"pre",9),n(108,`<po-datepicker-range
    p-auto-focus="boolean"
    p-clean="boolean"
    p-disabled="boolean"
    p-end-date="string | Date"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    p-label="string"
    p-literals="PoDatepickerRangeLiterals"
    p-locale="string"
    p-max-date="string | Date"
    p-min-date="string | Date"
    p-no-autocomplete="boolean"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-readonly="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-start-date="string | Date" >
</po-datepicker-range>
`),t()(),e(109,"h4",10),n(110,"Propriedades"),t(),e(111,"table",11)(112,"tr",12)(113,"th",13),n(114,"Nome"),t(),e(115,"th",13),n(116,"Tipo"),t(),e(117,"th",13),n(118,"Padr\xE3o"),t(),e(119,"th",13),n(120,"Descri\xE7\xE3o"),t()(),e(121,"tr",14)(122,"td",15)(123,"div",16)(124,"span",17),n(125," p-auto-focus"),o(126,"br"),t()()(),e(127,"td",18)(128,"code",19),n(129,"boolean"),t()(),e(130,"td",20)(131,"p")(132,"code"),n(133,"false"),t()()(),e(134,"td",21)(135,"em")(136,"strong"),n(137,"(opcional)"),t()(),e(138,"p"),n(139,"Aplica foco no elemento ao ser iniciado."),t(),e(140,"blockquote")(141,"p"),n(142,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),e(143,"tr",14)(144,"td",15)(145,"div",16)(146,"span",17),n(147," p-clean"),o(148,"br"),t()()(),e(149,"td",18)(150,"code",19),n(151,"boolean"),t()(),e(152,"td",20)(153,"p")(154,"code"),n(155,"false"),t()()(),e(156,"td",21)(157,"em")(158,"strong"),n(159,"(opcional)"),t()(),e(160,"p"),n(161,"Habilita a\xE7\xE3o para limpar o campo."),t()()(),e(162,"tr",14)(163,"td",15)(164,"div",16)(165,"span",17),n(166," p-disabled"),o(167,"br"),t()()(),e(168,"td",18)(169,"code",19),n(170,"boolean"),t()(),e(171,"td",20)(172,"p")(173,"code"),n(174,"false"),t()()(),e(175,"td",21)(176,"em")(177,"strong"),n(178,"(opcional)"),t()(),e(179,"p"),n(180,"Desabilita o campo."),t()()(),e(181,"tr",14)(182,"td",15)(183,"div",16)(184,"span",17),n(185," p-end-date"),o(186,"br"),t()()(),e(187,"td",18)(188,"code",22),n(189,"string "),t(),e(190,"code",23),n(191," Date"),t()(),e(192,"td",20),n(193,"-"),t(),e(194,"td",21)(195,"em")(196,"strong"),n(197,"(opcional)"),t()(),e(198,"p"),n(199,"Data final."),t()()(),e(200,"tr",14)(201,"td",15)(202,"div",16)(203,"span",17),n(204," p-error-limit"),o(205,"br"),t()()(),e(206,"td",18)(207,"code",19),n(208,"boolean"),t()(),e(209,"td",20)(210,"p")(211,"code"),n(212,"false"),t()()(),e(213,"td",21)(214,"em")(215,"strong"),n(216,"(opcional)"),t()(),e(217,"p"),n(218,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),e(219,"blockquote")(220,"p"),n(221,"Caso essa propriedade seja definida como "),e(222,"code"),n(223,"true"),t(),n(224,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),e(225,"tr",14)(226,"td",15)(227,"div",16)(228,"span",17),n(229," p-field-error-message"),o(230,"br"),t()()(),e(231,"td",18)(232,"code",22),n(233,"string"),t()(),e(234,"td",20),n(235,"-"),t(),e(236,"td",21)(237,"em")(238,"strong"),n(239,"(opcional)"),t()(),e(240,"p"),n(241,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),e(242,"blockquote")(243,"p"),n(244,"Necess\xE1rio que a propriedade "),e(245,"code"),n(246,"p-required"),t(),n(247," esteja habilitada."),t()()()(),e(248,"tr",14)(249,"td",15)(250,"div",16)(251,"span",17),n(252," p-help"),o(253,"br"),t()()(),e(254,"td",18)(255,"code",22),n(256,"string"),t()(),e(257,"td",20),n(258,"-"),t(),e(259,"td",21)(260,"em")(261,"strong"),n(262,"(opcional)"),t()(),e(263,"p"),n(264,"Texto de apoio do campo."),t()()(),e(265,"tr",14)(266,"td",15)(267,"div",16)(268,"span",17),n(269," p-label"),o(270,"br"),t()()(),e(271,"td",18)(272,"code",22),n(273,"string"),t()(),e(274,"td",20),n(275,"-"),t(),e(276,"td",21)(277,"em")(278,"strong"),n(279,"(opcional)"),t()(),e(280,"p"),n(281,"R\xF3tulo do campo."),t()()(),e(282,"tr",14)(283,"td",15)(284,"div",16)(285,"span",17),n(286," p-literals"),o(287,"br"),t()()(),e(288,"td",18)(289,"code",24),n(290,"PoDatepickerRangeLiterals"),t()(),e(291,"td",20),n(292,"-"),t(),e(293,"td",21)(294,"em")(295,"strong"),n(296,"(opcional)"),t()(),e(297,"p"),n(298,"Objeto com as literais usadas no "),e(299,"code"),n(300,"po-datepicker-range"),t(),n(301,"."),t(),e(302,"p"),n(303,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),e(304,"pre")(305,"code"),n(306,`const customLiterals: PoDatepickerRangeLiterals = {
  invalidFormat: 'Date in inconsistent format',
  startDateGreaterThanEndDate: 'End date less than start date'
};`),t()(),e(307,"p"),n(308,"Ou passando apenas as literais que deseja customizar:"),t(),e(309,"pre")(310,"code"),n(311,`const customLiterals: PoDatepickerRangeLiterals = {
  invalidFormat: 'Date in inconsistent format'
};`),t()(),e(312,"p"),n(313,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),e(314,"pre")(315,"code"),n(316,`<po-datepicker-range
  [p-literals]="customLiterals">
</po-datepicker-range>`),t()(),e(317,"blockquote")(318,"p"),n(319,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),e(320,"a",25)(321,"code"),n(322,"PoI18nService"),t()(),n(323," ou do browser."),t()()()(),e(324,"tr",14)(325,"td",15)(326,"div",16)(327,"span",17),n(328," p-locale"),o(329,"br"),t()()(),e(330,"td",18)(331,"code",22),n(332,"string"),t()(),e(333,"td",20),n(334,"-"),t(),e(335,"td",21)(336,"em")(337,"strong"),n(338,"(opcional)"),t()(),e(339,"p"),n(340,"Idioma que o calend\xE1rio utilizar\xE1 para exibir as datas."),t(),e(341,"blockquote")(342,"p"),n(343,"O locale padr\xE3o ser\xE1 recuperado com base no "),e(344,"a",25)(345,"code"),n(346,"PoI18nService"),t()(),n(347," ou "),e(348,"em"),n(349,"browser"),t(),n(350,"."),t()()()(),e(351,"tr",14)(352,"td",15)(353,"div",16)(354,"span",17),n(355," p-max-date"),o(356,"br"),t()()(),e(357,"td",18)(358,"code",22),n(359,"string "),t(),e(360,"code",23),n(361," Date"),t()(),e(362,"td",20),n(363,"-"),t(),e(364,"td",21)(365,"em")(366,"strong"),n(367,"(opcional)"),t()(),e(368,"p"),n(369,"Define uma data m\xE1xima para o "),e(370,"code"),n(371,"po-datepicker-range"),t(),n(372,"."),t()()(),e(373,"tr",14)(374,"td",15)(375,"div",16)(376,"span",17),n(377," p-min-date"),o(378,"br"),t()()(),e(379,"td",18)(380,"code",22),n(381,"string "),t(),e(382,"code",23),n(383," Date"),t()(),e(384,"td",20),n(385,"-"),t(),e(386,"td",21)(387,"em")(388,"strong"),n(389,"(opcional)"),t()(),e(390,"p"),n(391,"Define uma data m\xEDnima para o "),e(392,"code"),n(393,"po-datepicker-range"),t(),n(394,"."),t()()(),e(395,"tr",14)(396,"td",15)(397,"div",16)(398,"span",17),n(399," p-no-autocomplete"),o(400,"br"),t()()(),e(401,"td",18)(402,"code",19),n(403,"boolean"),t()(),e(404,"td",20)(405,"p")(406,"code"),n(407,"false"),t()()(),e(408,"td",21)(409,"em")(410,"strong"),n(411,"(opcional)"),t()(),e(412,"p"),n(413,"Define a propriedade nativa "),e(414,"code"),n(415,"autocomplete"),t(),n(416," do campo como "),e(417,"code"),n(418,"off"),t(),n(419,"."),t()()(),e(420,"tr",14)(421,"td",15)(422,"div",26)(423,"span",27),n(424," (p-change)"),o(425,"br"),t()()(),e(426,"td",18)(427,"code",28),n(428,"EventEmitter"),t()(),e(429,"td",20),n(430,"-"),t(),e(431,"td",21)(432,"em")(433,"strong"),n(434,"(opcional)"),t()(),e(435,"p"),n(436,"Evento disparado ao alterar valor do campo."),t()()(),e(437,"tr",14)(438,"td",15)(439,"div",16)(440,"span",17),n(441," p-optional"),o(442,"br"),t()()(),e(443,"td",18)(444,"code",19),n(445,"boolean"),t()(),e(446,"td",20)(447,"p")(448,"code"),n(449,"false"),t()()(),e(450,"td",21)(451,"em")(452,"strong"),n(453,"(opcional)"),t()(),e(454,"p"),n(455,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),e(456,"blockquote")(457,"p"),n(458,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),e(459,"ul")(460,"li"),n(461,"O campo conter "),e(462,"code"),n(463,"p-required"),t(),n(464,";"),t(),e(465,"li"),n(466,"N\xE3o possuir "),e(467,"code"),n(468,"p-help"),t(),n(469," e/ou "),e(470,"code"),n(471,"p-label"),t(),n(472,"."),t()()()(),e(473,"tr",14)(474,"td",15)(475,"div",16)(476,"span",17),n(477," p-readonly"),o(478,"br"),t()()(),e(479,"td",18)(480,"code",19),n(481,"boolean"),t()(),e(482,"td",20)(483,"p")(484,"code"),n(485,"false"),t()()(),e(486,"td",21)(487,"em")(488,"strong"),n(489,"(opcional)"),t()(),e(490,"p"),n(491,"Indica que o campo ser\xE1 somente leitura."),t()()(),e(492,"tr",14)(493,"td",15)(494,"div",16)(495,"span",17),n(496," p-required"),o(497,"br"),t()()(),e(498,"td",18)(499,"code",19),n(500,"boolean"),t()(),e(501,"td",20)(502,"p")(503,"code"),n(504,"false"),t()()(),e(505,"td",21)(506,"em")(507,"strong"),n(508,"(opcional)"),t()(),e(509,"p"),n(510,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),e(511,"tr",14)(512,"td",15)(513,"div",16)(514,"span",17),n(515," p-show-required"),o(516,"br"),t()()(),e(517,"td",18)(518,"code",19),n(519,"boolean"),t()(),e(520,"td",20),n(521,"-"),t(),e(522,"td",21)(523,"p"),n(524,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),e(525,"blockquote")(526,"p"),n(527,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),e(528,"ul")(529,"li"),n(530,"N\xE3o possuir "),e(531,"code"),n(532,"p-help"),t(),n(533," e/ou "),e(534,"code"),n(535,"p-label"),t(),n(536,"."),t()()()(),e(537,"tr",14)(538,"td",15)(539,"div",16)(540,"span",17),n(541," p-start-date"),o(542,"br"),t()()(),e(543,"td",18)(544,"code",22),n(545,"string "),t(),e(546,"code",23),n(547," Date"),t()(),e(548,"td",20),n(549,"-"),t(),e(550,"td",21)(551,"em")(552,"strong"),n(553,"(opcional)"),t()(),e(554,"p"),n(555,"Data inicial."),t()()()(),e(556,"h3",10),n(557,"M\xE9todos"),t(),e(558,"table",29)(559,"tr",14)(560,"th",30)(561,"div",16)(562,"h4")(563,"span",17),n(564," focus "),t()()()()(),e(565,"tr",21)(566,"td",21)(567,"p"),n(568,"Fun\xE7\xE3o que atribui foco ao componente."),t(),e(569,"p"),n(570,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),e(571,"pre")(572,"code"),n(573,`import { PoDatepickerRangeComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerRangeComponent, { static: true }) datepickerRange: PoDatepickerRangeComponent;

focusDatepickerRange() {
  this.datepickerRange.focus();
}`),t()()()()(),o(574,"br"),e(575,"h3"),n(576,"Interfaces"),t(),e(577,"h4",31)(578,"code",5),n(579,"PoDatepickerRangeLiterals"),t()(),e(580,"div",2)(581,"p"),n(582,"Interface para defini\xE7\xE3o das literais usadas no "),e(583,"code"),n(584,"po-datepicker-range"),t(),n(585,"."),t()(),e(586,"h4",10),n(587,"Propriedades"),t(),e(588,"table",11)(589,"tr",12)(590,"th",13),n(591,"Nome"),t(),e(592,"th",13),n(593,"Tipo"),t(),e(594,"th",13),n(595,"Descri\xE7\xE3o"),t()(),e(596,"tr",14)(597,"td",15)(598,"div",16)(599,"span",17),n(600," dateOutOfPeriod"),o(601,"br"),t()()(),e(602,"td",18)(603,"code",22),n(604,"string"),t()(),e(605,"td",21)(606,"em")(607,"strong"),n(608,"(opcional)"),t()(),e(609,"p"),n(610,"Data fora do per\xEDodo."),t()()(),e(611,"tr",14)(612,"td",15)(613,"div",16)(614,"span",17),n(615," invalidDate"),o(616,"br"),t()()(),e(617,"td",18)(618,"code",22),n(619,"string"),t()(),e(620,"td",21)(621,"em")(622,"strong"),n(623,"(opcional)"),t()(),e(624,"p"),n(625,"Data inv\xE1lida."),t()()(),e(626,"tr",14)(627,"td",15)(628,"div",16)(629,"span",17),n(630," invalidFormat"),o(631,"br"),t()()(),e(632,"td",18)(633,"code",22),n(634,"string"),t()(),e(635,"td",21)(636,"em")(637,"strong"),n(638,"(opcional)"),t()(),e(639,"p"),n(640,"Data em formato inv\xE1lido."),t()()(),e(641,"tr",14)(642,"td",15)(643,"div",16)(644,"span",17),n(645," startDateGreaterThanEndDate"),o(646,"br"),t()()(),e(647,"td",18)(648,"code",22),n(649,"string"),t()(),e(650,"td",21)(651,"em")(652,"strong"),n(653,"(opcional)"),t()(),e(654,"p"),n(655,"Data inicial maior que data final."),t()()()(),e(656,"h4",31)(657,"code",5),n(658,"PoDatepickerRange"),t()(),e(659,"div",2)(660,"p"),n(661,"Interface para defini\xE7\xE3o do objeto com a data inicial e final usadas no "),e(662,"code"),n(663,"po-datepicker-range"),t(),n(664,"."),t(),e(665,"blockquote")(666,"p"),n(667,`Os formatos de data permitidos seguem os padr\xF5es definidos na
`),e(668,"a",32),n(669,"descri\xE7\xE3o do componente"),t(),n(670,"."),t()()(),e(671,"h4",10),n(672,"Propriedades"),t(),e(673,"table",11)(674,"tr",12)(675,"th",13),n(676,"Nome"),t(),e(677,"th",13),n(678,"Tipo"),t(),e(679,"th",13),n(680,"Descri\xE7\xE3o"),t()(),e(681,"tr",14)(682,"td",15)(683,"div",16)(684,"span",17),n(685," end"),o(686,"br"),t()()(),e(687,"td",18)(688,"code",22),n(689,"string "),t(),e(690,"code",23),n(691," Date"),t()(),e(692,"td",21)(693,"p"),n(694,"Data final"),t()()(),e(695,"tr",14)(696,"td",15)(697,"div",16)(698,"span",17),n(699," start"),o(700,"br"),t()()(),e(701,"td",18)(702,"code",22),n(703,"string "),t(),e(704,"code",23),n(705," Date"),t()(),e(706,"td",21)(707,"p"),n(708,"Data inicial"),t()()()()())},dependencies:[C],encapsulation:2})}return l})();var ye=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,i){this.route=d,this.router=i}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let i=d.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(i){return new(i||l)(y(le),y(re))};static \u0275cmp=f({type:l,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title"," Datepicker Range",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(i,a){i&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),o(3,"sample-po-datepicker-range-doc"),t(),e(4,"po-tab",3),o(5,"sample-po-datepicker-range-basic-view")(6,"sample-po-datepicker-range-labs-view")(7,"sample-po-datepicker-range-vacations-view")(8,"sample-po-datepicker-range-vacations-reactive-form-view"),t()()()),i&2&&(m("p-actions",a.actions),p(2),m("p-active",a.activeTab.includes("doc")),p(2),m("p-hide",a.hidePoWebSample)("p-active",a.activeTab.includes("web")))},dependencies:[ce,k,D,fe,he,ve,De,Ce],encapsulation:2})}return l})();var We=[{path:"",component:ye}],xe=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275mod=G({type:l});static \u0275inj=U({imports:[te.forChild(We),te]})}return l})();var St=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275mod=G({type:l});static \u0275inj=U({imports:[ue,xe]})}return l})();export{St as DocPoDatepickerRangeModule};
