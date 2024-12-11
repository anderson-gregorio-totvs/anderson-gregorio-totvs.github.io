import{$ as G,$a as P,Ca as Q,Cd as W,Da as A,Dc as de,Ea as j,F as c,Fa as z,Fc as M,G as u,Ga as n,Ia as R,Ka as b,Kb as ne,La as S,Lb as O,Ma as E,Mb as L,Nb as J,Ob as B,Od as ce,Pa as w,Pb as N,Sb as ae,T as p,Tb as ie,U as y,Ua as q,Vb as oe,Wb as le,Xa as F,Xd as k,Yb as re,Yd as D,Zb as te,_ as f,_b as Z,ad as K,ha as m,jb as Y,jd as _,ka as x,md as se,na as e,oa as t,oc as I,pa as o,re as C,sd as X,se as ue,ta as T,ua as h,y as U,yd as me,zc as pe,zd as $}from"./chunk-V5DQALWN.js";var ge=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-datepicker-range-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","datepickerRange","p-label","PO Datepicker Range"]],template:function(i,a){i&1&&o(0,"po-datepicker-range",0)},dependencies:[_],encapsulation:2})}return l})();var we=l=>({"docs-sample-code-tabs":l}),fe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-datepicker-range-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(o(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Datepicker Range Basic"),t(),e(4,"a",2),h("click",function(){return a.toggleSampleCodeTabs()}),o(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-datepicker-range-basic/sample-po-datepicker-range-basic.component.html"),t(),e(13,"pre",7),n(14,`<po-datepicker-range name="datepickerRange" p-label="PO Datepicker Range"> </po-datepicker-range>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-datepicker-range-basic/sample-po-datepicker-range-basic.component.ts"),t(),e(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
    selector: 'sample-po-datepicker-range-basic',
    templateUrl: './sample-po-datepicker-range-basic.component.html',
    standalone: false
})
export class SamplePoDatepickerRangeBasicComponent {}
`),t()()()()(),e(21,"div",10),o(22,"sample-po-datepicker-range-basic"),t(),o(23,"hr")),i&2&&(p(5),x("po-icon "+a.sampleCodeButtonIcon),p(),R(" ",a.sampleCodeButtonLabel,""),p(),m("ngClass",w(4,we,a.hideSampleCodeTabs)))},dependencies:[P,C,k,D,ge],encapsulation:2})}return l})();var be=(()=>{class l{clean;customLiterals;datepickerRange;endDate;event;help;label;literals;properties;fieldErrorMessage;startDate;maxDate;minDate;locale;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"}];localeOptions=[{label:"English",value:"en"},{label:"Espa\xF1ol",value:"es"},{label:"Portugu\xEAs",value:"pt"},{label:"P\u0443\u0441\u0441\u043A\u0438\u0439",value:"ru"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}getDatepickerRange(){return JSON.stringify(this.datepickerRange)}restore(){this.clean=void 0,this.customLiterals=void 0,this.endDate=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.literals=void 0,this.properties=[],this.fieldErrorMessage="",this.startDate=void 0,this.maxDate=void 0,this.minDate=void 0,this.locale=void 0,setTimeout(()=>this.datepickerRange=void 0)}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-datepicker-range-labs"]],standalone:!1,decls:22,vars:31,consts:[["f","ngForm"],["name","datepickerRange",1,"po-sm-12",3,"ngModelChange","p-change","ngModel","p-clean","p-disabled","p-end-date","p-help","p-label","p-literals","p-max-date","p-min-date","p-no-autocomplete","p-optional","p-readonly","p-required","p-field-error-message","p-show-required","p-start-date","p-locale"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","maxDate","p-clean","","p-label","Max date",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","literals","p-help",'Ex.: { "invalidFormat": "Date in inconsistent format", "startDateGreaterThanEndDate": "End date less than start date" }',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","3","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","locale","p-label","Locale",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(i,a){if(i&1){let s=T();e(0,"po-datepicker-range",1),E("ngModelChange",function(r){return c(s),S(a.datepickerRange,r)||(a.datepickerRange=r),u(r)}),h("p-change",function(){return c(s),u(a.changeEvent("p-change"))}),t(),o(1,"hr"),e(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"hr"),e(6,"form",null,0)(8,"div",2)(9,"po-input",5),E("ngModelChange",function(r){return c(s),S(a.label,r)||(a.label=r),u(r)}),t(),e(10,"po-input",6),E("ngModelChange",function(r){return c(s),S(a.help,r)||(a.help=r),u(r)}),t()(),e(11,"div",2)(12,"po-datepicker",7),E("ngModelChange",function(r){return c(s),S(a.minDate,r)||(a.minDate=r),u(r)}),t(),e(13,"po-datepicker",8),E("ngModelChange",function(r){return c(s),S(a.maxDate,r)||(a.maxDate=r),u(r)}),t()(),e(14,"div",2)(15,"po-input",9),E("ngModelChange",function(r){return c(s),S(a.literals,r)||(a.literals=r),u(r)}),h("p-change",function(){return c(s),u(a.changeLiterals())}),t(),e(16,"po-input",10),E("ngModelChange",function(r){return c(s),S(a.fieldErrorMessage,r)||(a.fieldErrorMessage=r),u(r)}),t()(),e(17,"div",2)(18,"po-checkbox-group",11),E("ngModelChange",function(r){return c(s),S(a.properties,r)||(a.properties=r),u(r)}),t(),e(19,"po-select",12),E("ngModelChange",function(r){return c(s),S(a.locale,r)||(a.locale=r),u(r)}),t()(),e(20,"div",2)(21,"po-button",13),h("p-click",function(){return c(s),u(a.restore())}),t()()()}i&2&&(b("ngModel",a.datepickerRange),m("p-clean",a.properties.includes("clean"))("p-disabled",a.properties.includes("disabled"))("p-end-date",a.endDate)("p-help",a.help)("p-label",a.label)("p-literals",a.customLiterals)("p-max-date",a.maxDate)("p-min-date",a.minDate)("p-no-autocomplete",a.properties==null?null:a.properties.includes("noAutocomplete"))("p-optional",a.properties.includes("optional"))("p-readonly",a.properties.includes("readonly"))("p-required",a.properties.includes("required"))("p-field-error-message",a.fieldErrorMessage)("p-show-required",a.properties.includes("showRequired"))("p-start-date",a.startDate)("p-locale",a.locale),p(3),m("p-value",a.getDatepickerRange()),p(),m("p-value",a.event),p(5),b("ngModel",a.label),p(),b("ngModel",a.help),p(2),b("ngModel",a.minDate),m("p-max-date",a.maxDate),p(),b("ngModel",a.maxDate),m("p-min-date",a.minDate),p(2),b("ngModel",a.literals),p(),b("ngModel",a.fieldErrorMessage),p(2),b("ngModel",a.properties),m("p-options",a.propertiesOptions),p(),b("ngModel",a.locale),m("p-options",a.localeOptions))},dependencies:[N,O,L,B,J,I,pe,de,_,se,me,W],encapsulation:2})}return l})();var _e=l=>({"docs-sample-code-tabs":l}),Se=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-datepicker-range-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(o(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Datepicker Range Labs"),t(),e(4,"a",2),h("click",function(){return a.toggleSampleCodeTabs()}),o(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-datepicker-range-labs/sample-po-datepicker-range-labs.component.html"),t(),e(13,"pre",7),n(14,`<po-datepicker-range
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
    { value: 'showRequired', label: 'Show Required' }
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
`),t()()()()(),e(21,"div",10),o(22,"sample-po-datepicker-range-labs"),t(),o(23,"hr")),i&2&&(p(5),x("po-icon "+a.sampleCodeButtonIcon),p(),R(" ",a.sampleCodeButtonLabel,""),p(),m("ngClass",w(4,_e,a.hideSampleCodeTabs)))},dependencies:[P,C,k,D,be],encapsulation:2})}return l})();var Te=["formVacationSuggestion"],Ee=(()=>{class l{poNotification;formVacationSuggestion;poModal;datepickerRange;quantityOfDays=void 0;reason;cancel={action:()=>{this.poModal.close()},label:"Cancel"};submit={action:()=>{this.poModal.close(),this.formVacationSuggestion.reset(),this.poNotification.success("Vacation suggestion submitted!")},label:"Submit"};get validateForm(){return!(this.formVacationSuggestion.valid&&this.datepickerRange&&this.datepickerRange.start&&this.datepickerRange.end)}constructor(d){this.poNotification=d}calculateQuantityOfVacationDays(){let d=new Date(this.datepickerRange.start),i=new Date(this.datepickerRange.end);this.quantityOfDays=Math.floor((Date.UTC(i.getFullYear(),i.getMonth(),i.getDate())-Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()))/(1e3*60*60*24))}clean(){this.datepickerRange=void 0,this.quantityOfDays=void 0,this.reason=void 0}static \u0275fac=function(i){return new(i||l)(y(K))};static \u0275cmp=f({type:l,selectors:[["sample-po-datepicker-range-vacations"]],viewQuery:function(i,a){if(i&1&&(Q(Te,7),Q(M,7)),i&2){let s;A(s=j())&&(a.formVacationSuggestion=s.first),A(s=j())&&(a.poModal=s.first)}},standalone:!1,decls:21,vars:18,consts:[["formVacationSuggestion","ngForm"],["modalVacationSuggestion",""],["p-label","Vacation suggestion",1,"po-md-9"],[1,"po-row"],["name","datepickerRange","p-clean","","p-label","Select the period","p-required","",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","number","p-disabled","","p-label","Quantity of days","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","textarea","p-label","Reason",1,"po-md-9",3,"ngModelChange","ngModel"],["p-label","Clean",1,"po-md-2","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click"],["p-label","Submit",1,"po-md-2",3,"p-click","p-disabled"],["p-hide-close","","p-title","Confirm vacation suggestion",3,"p-primary-action","p-secondary-action"],["p-label","Initial period",1,"po-md-4",3,"p-value"],["p-label","Final period",1,"po-md-4",3,"p-value"],["p-label","Quantity of days",1,"po-md-4",3,"p-value"],["p-disabled","","p-label","Reason","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"]],template:function(i,a){if(i&1){let s=T();e(0,"form",null,0),o(2,"po-divider",2),e(3,"div",3)(4,"po-datepicker-range",4),E("ngModelChange",function(r){return c(s),S(a.datepickerRange,r)||(a.datepickerRange=r),u(r)}),h("p-change",function(){return c(s),u(a.calculateQuantityOfVacationDays())}),t(),e(5,"po-number",5),E("ngModelChange",function(r){return c(s),S(a.quantityOfDays,r)||(a.quantityOfDays=r),u(r)}),t()(),e(6,"div",3)(7,"po-textarea",6),E("ngModelChange",function(r){return c(s),S(a.reason,r)||(a.reason=r),u(r)}),t()(),e(8,"div",3)(9,"po-button",7),h("p-click",function(){return c(s),u(a.clean())}),t(),e(10,"po-button",8),h("p-click",function(){c(s);let r=z(12);return u(r.open())}),t()()(),e(11,"po-modal",9,1)(13,"div",3),o(14,"po-info",10),q(15,"date"),o(16,"po-info",11),q(17,"date"),o(18,"po-info",12),t(),e(19,"div",3)(20,"po-textarea",13),E("ngModelChange",function(r){return c(s),S(a.reason,r)||(a.reason=r),u(r)}),t()()()}i&2&&(p(4),b("ngModel",a.datepickerRange),p(),b("ngModel",a.quantityOfDays),p(2),b("ngModel",a.reason),p(3),m("p-disabled",a.validateForm),p(),m("p-primary-action",a.submit)("p-secondary-action",a.cancel),p(3),m("p-value",F(15,10,a.datepickerRange==null?null:a.datepickerRange.start,"longDate","+0000")),p(2),m("p-value",F(17,14,a.datepickerRange==null?null:a.datepickerRange.end,"longDate","+0000")),p(2),m("p-value",a.quantityOfDays),p(2),b("ngModel",a.reason))},dependencies:[N,O,L,B,J,I,Z,_,X,$,W,M,Y],encapsulation:2})}return l})();var Fe=l=>({"docs-sample-code-tabs":l}),ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-datepicker-range-vacations-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(o(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Datepicker Range - Vacations Suggestion"),t(),e(4,"a",2),h("click",function(){return a.toggleSampleCodeTabs()}),o(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-datepicker-range-vacations/sample-po-datepicker-range-vacations.component.html"),t(),e(13,"pre",7),n(14,`<form #formVacationSuggestion="ngForm">
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
`),t()()()()(),e(21,"div",10),o(22,"sample-po-datepicker-range-vacations"),t(),o(23,"hr")),i&2&&(p(5),x("po-icon "+a.sampleCodeButtonIcon),p(),R(" ",a.sampleCodeButtonLabel,""),p(),m("ngClass",w(4,Fe,a.hideSampleCodeTabs)))},dependencies:[P,C,k,D,Ee],encapsulation:2})}return l})();var ke=(()=>{class l{poNotification;formBuilder;poModal;datepickerRange;formVacationSuggestion;quantityOfDays;reason;cancel={action:()=>{this.poModal.close()},label:"Cancel"};submit={action:()=>{this.poModal.close(),this.formVacationSuggestion.reset(),this.poNotification.success("Vacation suggestion submitted!")},label:"Submit"};get validateForm(){return!(this.formVacationSuggestion.valid&&this.formVacationSuggestion.get("datepickerRange").value.start&&this.formVacationSuggestion.get("datepickerRange").value.end)}constructor(d,i){this.poNotification=d,this.formBuilder=i}ngOnInit(){this.formVacationSuggestion=this.formBuilder.group({datepickerRange:[void 0,ne.required],quantityOfDays:[void 0],reason:[void 0]})}calculateQuantityOfVacationDays(){let d=new Date(this.formVacationSuggestion.get("datepickerRange").value.start),i=new Date(this.formVacationSuggestion.get("datepickerRange").value.end),a=Math.floor((Date.UTC(i.getFullYear(),i.getMonth(),i.getDate())-Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()))/(1e3*60*60*24));this.formVacationSuggestion.get("quantityOfDays").setValue(a)}clean(){this.formVacationSuggestion.reset()}submitForm(){this.datepickerRange=this.formVacationSuggestion.get("datepickerRange").value,this.reason=this.formVacationSuggestion.get("reason").value,this.quantityOfDays=this.formVacationSuggestion.get("quantityOfDays").value}static \u0275fac=function(i){return new(i||l)(y(K),y(oe))};static \u0275cmp=f({type:l,selectors:[["sample-po-datepicker-range-vacations-reactive-form"]],viewQuery:function(i,a){if(i&1&&Q(M,7),i&2){let s;A(s=j())&&(a.poModal=s.first)}},standalone:!1,decls:20,vars:16,consts:[["modalVacationSuggestion",""],[3,"formGroup"],["p-label","Vacation suggestion",1,"po-md-9"],[1,"po-row"],["formControlName","datepickerRange","p-clean","","p-label","Select the period","p-required","",1,"po-md-6",3,"p-change"],["formControlName","quantityOfDays","p-disabled","","p-label","Quantity of days","p-required","",1,"po-md-3"],["formControlName","reason","p-label","Reason",1,"po-md-9"],["p-label","Clean",1,"po-md-2","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click"],["p-label","Submit",1,"po-md-2",3,"p-click","p-disabled"],["p-hide-close","","p-title","Confirm vacation suggestion",3,"p-primary-action","p-secondary-action"],["p-label","Initial period",1,"po-md-4",3,"p-value"],["p-label","Final period",1,"po-md-4",3,"p-value"],["p-label","Quantity of days",1,"po-md-4",3,"p-value"],["p-disabled","","p-label","Reason","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"]],template:function(i,a){if(i&1){let s=T();e(0,"form",1),o(1,"po-divider",2),e(2,"div",3)(3,"po-datepicker-range",4),h("p-change",function(){return c(s),u(a.calculateQuantityOfVacationDays())}),t(),o(4,"po-number",5),t(),e(5,"div",3),o(6,"po-textarea",6),t(),e(7,"div",3)(8,"po-button",7),h("p-click",function(){return c(s),u(a.clean())}),t(),e(9,"po-button",8),h("p-click",function(){c(s);let r=z(11);return a.submitForm(),u(r.open())}),t()()(),e(10,"po-modal",9,0)(12,"div",3),o(13,"po-info",10),q(14,"date"),o(15,"po-info",11),q(16,"date"),o(17,"po-info",12),t(),e(18,"div",3)(19,"po-textarea",13),E("ngModelChange",function(r){return c(s),S(a.reason,r)||(a.reason=r),u(r)}),t()()()}i&2&&(m("formGroup",a.formVacationSuggestion),p(9),m("p-disabled",a.validateForm),p(),m("p-primary-action",a.submit)("p-secondary-action",a.cancel),p(3),m("p-value",F(14,8,a.datepickerRange==null?null:a.datepickerRange.start,"longDate","+0000")),p(2),m("p-value",F(16,12,a.datepickerRange==null?null:a.datepickerRange.end,"longDate","+0000")),p(2),m("p-value",a.quantityOfDays),p(2),b("ngModel",a.reason))},dependencies:[N,O,L,B,ae,ie,I,Z,_,X,$,W,M,Y],encapsulation:2})}return l})();var Be=l=>({"docs-sample-code-tabs":l}),De=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-datepicker-range-vacations-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(o(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Datepicker Range - Vacations Reactive Form"),t(),e(4,"a",2),h("click",function(){return a.toggleSampleCodeTabs()}),o(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-datepicker-range-vacations-reactive-form/sample-po-datepicker-range-vacations-reactive-form.component.html"),t(),e(13,"pre",7),n(14,`<form [formGroup]="formVacationSuggestion">
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
`),t()()()()(),e(21,"div",10),o(22,"sample-po-datepicker-range-vacations-reactive-form"),t(),o(23,"hr")),i&2&&(p(5),x("po-icon "+a.sampleCodeButtonIcon),p(),R(" ",a.sampleCodeButtonLabel,""),p(),m("ngClass",w(4,Be,a.hideSampleCodeTabs)))},dependencies:[P,C,k,D,ke],encapsulation:2})}return l})();var Ce=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-datepicker-range-doc"]],standalone:!1,decls:684,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","accepted-formats"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["href","/documentation/po-datepicker-range#accepted-formats"]],template:function(i,a){i&1&&(e(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),e(4,"div",2)(5,"p"),n(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
`),t()(),e(109,"h4",10),n(110,"Propriedades"),t(),e(111,"table",11)(112,"tr",12)(113,"th",13),n(114,"Nome"),t(),e(115,"th",13),n(116,"Tipo"),t(),e(117,"th",13),n(118,"Padr\xE3o"),t(),e(119,"th",13),n(120,"Descri\xE7\xE3o"),t()(),e(121,"tr",14)(122,"td",15)(123,"div",16)(124,"span",17),n(125," p-auto-focus"),o(126,"br"),t()()(),e(127,"td",18)(128,"code",19),n(129,"boolean"),t()(),e(130,"td",20)(131,"p")(132,"code"),n(133,"false"),t()()(),e(134,"td",21)(135,"em")(136,"strong"),n(137,"(opcional)"),t()(),e(138,"p"),n(139,"Aplica foco no elemento ao ser iniciado."),t(),e(140,"blockquote")(141,"p"),n(142,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),e(143,"tr",14)(144,"td",15)(145,"div",16)(146,"span",17),n(147," p-clean"),o(148,"br"),t()()(),e(149,"td",18)(150,"code",19),n(151,"boolean"),t()(),e(152,"td",20)(153,"p")(154,"code"),n(155,"false"),t()()(),e(156,"td",21)(157,"em")(158,"strong"),n(159,"(opcional)"),t()(),e(160,"p"),n(161,"Habilita a\xE7\xE3o para limpar o campo."),t()()(),e(162,"tr",14)(163,"td",15)(164,"div",16)(165,"span",17),n(166," p-disabled"),o(167,"br"),t()()(),e(168,"td",18)(169,"code",19),n(170,"boolean"),t()(),e(171,"td",20)(172,"p")(173,"code"),n(174,"false"),t()()(),e(175,"td",21)(176,"em")(177,"strong"),n(178,"(opcional)"),t()(),e(179,"p"),n(180,"Desabilita o campo."),t()()(),e(181,"tr",14)(182,"td",15)(183,"div",16)(184,"span",17),n(185," p-end-date"),o(186,"br"),t()()(),e(187,"td",18)(188,"code",22),n(189,"string "),t(),e(190,"code",23),n(191," Date"),t()(),e(192,"td",20),n(193,"-"),t(),e(194,"td",21)(195,"em")(196,"strong"),n(197,"(opcional)"),t()(),e(198,"p"),n(199,"Data final."),t()()(),e(200,"tr",14)(201,"td",15)(202,"div",16)(203,"span",17),n(204," p-field-error-message"),o(205,"br"),t()()(),e(206,"td",18)(207,"code",22),n(208,"string"),t()(),e(209,"td",20),n(210,"-"),t(),e(211,"td",21)(212,"em")(213,"strong"),n(214,"(opcional)"),t()(),e(215,"p"),n(216,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),e(217,"blockquote")(218,"p"),n(219,"Necess\xE1rio que a propriedade "),e(220,"code"),n(221,"p-required"),t(),n(222," esteja habilitada."),t()()()(),e(223,"tr",14)(224,"td",15)(225,"div",16)(226,"span",17),n(227," p-help"),o(228,"br"),t()()(),e(229,"td",18)(230,"code",22),n(231,"string"),t()(),e(232,"td",20),n(233,"-"),t(),e(234,"td",21)(235,"em")(236,"strong"),n(237,"(opcional)"),t()(),e(238,"p"),n(239,"Texto de apoio do campo."),t()()(),e(240,"tr",14)(241,"td",15)(242,"div",16)(243,"span",17),n(244," p-label"),o(245,"br"),t()()(),e(246,"td",18)(247,"code",22),n(248,"string"),t()(),e(249,"td",20),n(250,"-"),t(),e(251,"td",21)(252,"em")(253,"strong"),n(254,"(opcional)"),t()(),e(255,"p"),n(256,"R\xF3tulo do campo."),t()()(),e(257,"tr",14)(258,"td",15)(259,"div",16)(260,"span",17),n(261," p-literals"),o(262,"br"),t()()(),e(263,"td",18)(264,"code",24),n(265,"PoDatepickerRangeLiterals"),t()(),e(266,"td",20),n(267,"-"),t(),e(268,"td",21)(269,"em")(270,"strong"),n(271,"(opcional)"),t()(),e(272,"p"),n(273,"Objeto com as literais usadas no "),e(274,"code"),n(275,"po-datepicker-range"),t(),n(276,"."),t(),e(277,"p"),n(278,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),e(279,"pre")(280,"code"),n(281,`const customLiterals: PoDatepickerRangeLiterals = {
  invalidFormat: 'Date in inconsistent format',
  startDateGreaterThanEndDate: 'End date less than start date'
};`),t()(),e(282,"p"),n(283,"Ou passando apenas as literais que deseja customizar:"),t(),e(284,"pre")(285,"code"),n(286,`const customLiterals: PoDatepickerRangeLiterals = {
  invalidFormat: 'Date in inconsistent format'
};`),t()(),e(287,"p"),n(288,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),e(289,"pre")(290,"code"),n(291,`<po-datepicker-range
  [p-literals]="customLiterals">
</po-datepicker-range>`),t()(),e(292,"blockquote")(293,"p"),n(294,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),e(295,"a",25)(296,"code"),n(297,"PoI18nService"),t()(),n(298," ou do browser."),t()()()(),e(299,"tr",14)(300,"td",15)(301,"div",16)(302,"span",17),n(303," p-locale"),o(304,"br"),t()()(),e(305,"td",18)(306,"code",22),n(307,"string"),t()(),e(308,"td",20),n(309,"-"),t(),e(310,"td",21)(311,"em")(312,"strong"),n(313,"(opcional)"),t()(),e(314,"p"),n(315,"Idioma que o calend\xE1rio utilizar\xE1 para exibir as datas."),t(),e(316,"blockquote")(317,"p"),n(318,"O locale padr\xE3o ser\xE1 recuperado com base no "),e(319,"a",25)(320,"code"),n(321,"PoI18nService"),t()(),n(322," ou "),e(323,"em"),n(324,"browser"),t(),n(325,"."),t()()()(),e(326,"tr",14)(327,"td",15)(328,"div",16)(329,"span",17),n(330," p-max-date"),o(331,"br"),t()()(),e(332,"td",18)(333,"code",22),n(334,"string "),t(),e(335,"code",23),n(336," Date"),t()(),e(337,"td",20),n(338,"-"),t(),e(339,"td",21)(340,"em")(341,"strong"),n(342,"(opcional)"),t()(),e(343,"p"),n(344,"Define uma data m\xE1xima para o "),e(345,"code"),n(346,"po-datepicker-range"),t(),n(347,"."),t()()(),e(348,"tr",14)(349,"td",15)(350,"div",16)(351,"span",17),n(352," p-min-date"),o(353,"br"),t()()(),e(354,"td",18)(355,"code",22),n(356,"string "),t(),e(357,"code",23),n(358," Date"),t()(),e(359,"td",20),n(360,"-"),t(),e(361,"td",21)(362,"em")(363,"strong"),n(364,"(opcional)"),t()(),e(365,"p"),n(366,"Define uma data m\xEDnima para o "),e(367,"code"),n(368,"po-datepicker-range"),t(),n(369,"."),t()()(),e(370,"tr",14)(371,"td",15)(372,"div",16)(373,"span",17),n(374," p-no-autocomplete"),o(375,"br"),t()()(),e(376,"td",18)(377,"code",19),n(378,"boolean"),t()(),e(379,"td",20)(380,"p")(381,"code"),n(382,"false"),t()()(),e(383,"td",21)(384,"em")(385,"strong"),n(386,"(opcional)"),t()(),e(387,"p"),n(388,"Define a propriedade nativa "),e(389,"code"),n(390,"autocomplete"),t(),n(391," do campo como "),e(392,"code"),n(393,"off"),t(),n(394,"."),t()()(),e(395,"tr",14)(396,"td",15)(397,"div",26)(398,"span",27),n(399," (p-change)"),o(400,"br"),t()()(),e(401,"td",18)(402,"code",28),n(403,"EventEmitter"),t()(),e(404,"td",20),n(405,"-"),t(),e(406,"td",21)(407,"em")(408,"strong"),n(409,"(opcional)"),t()(),e(410,"p"),n(411,"Evento disparado ao alterar valor do campo."),t()()(),e(412,"tr",14)(413,"td",15)(414,"div",16)(415,"span",17),n(416," p-optional"),o(417,"br"),t()()(),e(418,"td",18)(419,"code",19),n(420,"boolean"),t()(),e(421,"td",20)(422,"p")(423,"code"),n(424,"false"),t()()(),e(425,"td",21)(426,"em")(427,"strong"),n(428,"(opcional)"),t()(),e(429,"p"),n(430,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),e(431,"blockquote")(432,"p"),n(433,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),e(434,"ul")(435,"li"),n(436,"O campo conter "),e(437,"code"),n(438,"p-required"),t(),n(439,";"),t(),e(440,"li"),n(441,"N\xE3o possuir "),e(442,"code"),n(443,"p-help"),t(),n(444," e/ou "),e(445,"code"),n(446,"p-label"),t(),n(447,"."),t()()()(),e(448,"tr",14)(449,"td",15)(450,"div",16)(451,"span",17),n(452," p-readonly"),o(453,"br"),t()()(),e(454,"td",18)(455,"code",19),n(456,"boolean"),t()(),e(457,"td",20)(458,"p")(459,"code"),n(460,"false"),t()()(),e(461,"td",21)(462,"em")(463,"strong"),n(464,"(opcional)"),t()(),e(465,"p"),n(466,"Indica que o campo ser\xE1 somente leitura."),t()()(),e(467,"tr",14)(468,"td",15)(469,"div",16)(470,"span",17),n(471," p-required"),o(472,"br"),t()()(),e(473,"td",18)(474,"code",19),n(475,"boolean"),t()(),e(476,"td",20)(477,"p")(478,"code"),n(479,"false"),t()()(),e(480,"td",21)(481,"em")(482,"strong"),n(483,"(opcional)"),t()(),e(484,"p"),n(485,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),e(486,"tr",14)(487,"td",15)(488,"div",16)(489,"span",17),n(490," p-show-required"),o(491,"br"),t()()(),e(492,"td",18)(493,"code",19),n(494,"boolean"),t()(),e(495,"td",20),n(496,"-"),t(),e(497,"td",21)(498,"p"),n(499,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),e(500,"blockquote")(501,"p"),n(502,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),e(503,"ul")(504,"li"),n(505,"N\xE3o possuir "),e(506,"code"),n(507,"p-help"),t(),n(508," e/ou "),e(509,"code"),n(510,"p-label"),t(),n(511,"."),t()()()(),e(512,"tr",14)(513,"td",15)(514,"div",16)(515,"span",17),n(516," p-start-date"),o(517,"br"),t()()(),e(518,"td",18)(519,"code",22),n(520,"string "),t(),e(521,"code",23),n(522," Date"),t()(),e(523,"td",20),n(524,"-"),t(),e(525,"td",21)(526,"em")(527,"strong"),n(528,"(opcional)"),t()(),e(529,"p"),n(530,"Data inicial."),t()()()(),e(531,"h3",10),n(532,"M\xE9todos"),t(),e(533,"table",29)(534,"tr",14)(535,"th",30)(536,"div",16)(537,"h4")(538,"span",17),n(539," focus "),t()()()()(),e(540,"tr",21)(541,"td",21)(542,"p"),n(543,"Fun\xE7\xE3o que atribui foco ao componente."),t(),e(544,"p"),n(545,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),e(546,"pre")(547,"code"),n(548,`import { PoDatepickerRangeComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerRangeComponent, { static: true }) datepickerRange: PoDatepickerRangeComponent;

focusDatepickerRange() {
  this.datepickerRange.focus();
}`),t()()()()(),o(549,"br"),e(550,"h3"),n(551,"Interfaces"),t(),e(552,"h4",31)(553,"code",5),n(554,"PoDatepickerRangeLiterals"),t()(),e(555,"div",2)(556,"p"),n(557,"Interface para defini\xE7\xE3o das literais usadas no "),e(558,"code"),n(559,"po-datepicker-range"),t(),n(560,"."),t()(),e(561,"h4",10),n(562,"Propriedades"),t(),e(563,"table",11)(564,"tr",12)(565,"th",13),n(566,"Nome"),t(),e(567,"th",13),n(568,"Tipo"),t(),e(569,"th",13),n(570,"Descri\xE7\xE3o"),t()(),e(571,"tr",14)(572,"td",15)(573,"div",16)(574,"span",17),n(575," dateOutOfPeriod"),o(576,"br"),t()()(),e(577,"td",18)(578,"code",22),n(579,"string"),t()(),e(580,"td",21)(581,"em")(582,"strong"),n(583,"(opcional)"),t()(),e(584,"p"),n(585,"Data fora do per\xEDodo."),t()()(),e(586,"tr",14)(587,"td",15)(588,"div",16)(589,"span",17),n(590," invalidDate"),o(591,"br"),t()()(),e(592,"td",18)(593,"code",22),n(594,"string"),t()(),e(595,"td",21)(596,"em")(597,"strong"),n(598,"(opcional)"),t()(),e(599,"p"),n(600,"Data inv\xE1lida."),t()()(),e(601,"tr",14)(602,"td",15)(603,"div",16)(604,"span",17),n(605," invalidFormat"),o(606,"br"),t()()(),e(607,"td",18)(608,"code",22),n(609,"string"),t()(),e(610,"td",21)(611,"em")(612,"strong"),n(613,"(opcional)"),t()(),e(614,"p"),n(615,"Data em formato inv\xE1lido."),t()()(),e(616,"tr",14)(617,"td",15)(618,"div",16)(619,"span",17),n(620," startDateGreaterThanEndDate"),o(621,"br"),t()()(),e(622,"td",18)(623,"code",22),n(624,"string"),t()(),e(625,"td",21)(626,"em")(627,"strong"),n(628,"(opcional)"),t()(),e(629,"p"),n(630,"Data inicial maior que data final."),t()()()(),e(631,"h4",31)(632,"code",5),n(633,"PoDatepickerRange"),t()(),e(634,"div",2)(635,"p"),n(636,"Interface para defini\xE7\xE3o do objeto com a data inicial e final usadas no "),e(637,"code"),n(638,"po-datepicker-range"),t(),n(639,"."),t(),e(640,"blockquote")(641,"p"),n(642,`Os formatos de data permitidos seguem os padr\xF5es definidos na
`),e(643,"a",32),n(644,"descri\xE7\xE3o do componente"),t(),n(645,"."),t()()(),e(646,"h4",10),n(647,"Propriedades"),t(),e(648,"table",11)(649,"tr",12)(650,"th",13),n(651,"Nome"),t(),e(652,"th",13),n(653,"Tipo"),t(),e(654,"th",13),n(655,"Descri\xE7\xE3o"),t()(),e(656,"tr",14)(657,"td",15)(658,"div",16)(659,"span",17),n(660," end"),o(661,"br"),t()()(),e(662,"td",18)(663,"code",22),n(664,"string "),t(),e(665,"code",23),n(666," Date"),t()(),e(667,"td",21)(668,"p"),n(669,"Data final"),t()()(),e(670,"tr",14)(671,"td",15)(672,"div",16)(673,"span",17),n(674," start"),o(675,"br"),t()()(),e(676,"td",18)(677,"code",22),n(678,"string "),t(),e(679,"code",23),n(680," Date"),t()(),e(681,"td",21)(682,"p"),n(683,"Data inicial"),t()()()()())},dependencies:[C],encapsulation:2})}return l})();var ye=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,i){this.route=d,this.router=i}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let i=d.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(i){return new(i||l)(y(le),y(re))};static \u0275cmp=f({type:l,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title"," Datepicker Range",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(i,a){i&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),o(3,"sample-po-datepicker-range-doc"),t(),e(4,"po-tab",3),o(5,"sample-po-datepicker-range-basic-view")(6,"sample-po-datepicker-range-labs-view")(7,"sample-po-datepicker-range-vacations-view")(8,"sample-po-datepicker-range-vacations-reactive-form-view"),t()()()),i&2&&(m("p-actions",a.actions),p(2),m("p-active",a.activeTab.includes("doc")),p(2),m("p-hide",a.hidePoWebSample)("p-active",a.activeTab.includes("web")))},dependencies:[ce,k,D,fe,Se,ve,De,Ce],encapsulation:2})}return l})();var We=[{path:"",component:ye}],xe=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275mod=G({type:l});static \u0275inj=U({imports:[te.forChild(We),te]})}return l})();var bt=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275mod=G({type:l});static \u0275inj=U({imports:[ue,xe]})}return l})();export{bt as DocPoDatepickerRangeModule};
