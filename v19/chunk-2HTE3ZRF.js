import{$ as O,$a as M,Cd as ee,F as s,Fa as G,G as c,Ga as e,Ia as D,Ka as b,Kb as F,La as S,Lb as W,Ma as x,Mb as q,Nb as R,Ob as I,Od as te,Pa as P,Pb as T,Sb as U,T as m,Tb as Q,U as L,Vb as J,Wb as X,Xd as y,Yb as K,Yd as v,Zb as A,_ as g,ha as u,ka as w,kd as _,md as Z,na as n,oa as t,oc as H,pa as o,re as C,sd as V,se as ne,ta as N,ua as E,y as B,yd as $,zc as Y}from"./chunk-23IW53AA.js";var ie=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=g({type:l,selectors:[["sample-po-decimal-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","decimal","p-label","PO Decimal"]],template:function(r,i){r&1&&o(0,"po-decimal",0)},dependencies:[_],encapsulation:2})}return l})();var Ee=l=>({"docs-sample-code-tabs":l}),oe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=g({type:l,selectors:[["sample-po-decimal-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal Basic"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-basic/sample-po-decimal-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-decimal name="decimal" p-label="PO Decimal"> </po-decimal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-basic/sample-po-decimal-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-basic',
  templateUrl: './sample-po-decimal-basic.component.html',
  standalone: false
})
export class SamplePoDecimalBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-basic"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),u("ngClass",P(4,Ee,i.hideSampleCodeTabs)))},dependencies:[M,C,y,v,ie],encapsulation:2})}return l})();var le=(()=>{class l{decimal;decimalsLength;event;help;icon;label;locale;placeholder;properties;thousandMaxlength;errorPattern;max;min;localeOptions=[{value:"pt",label:"Portuguese"},{value:"en",label:"English"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"}];iconOptions=[{value:"ph ph-shopping-cart-simple",label:"ph ph-shopping-cart-simple"},{value:"ph ph-currency-dollar-simple",label:"ph ph-currency-dollar-simple"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];get maxDecimalsLength(){return 16-this.thousandMaxlength||15}get maxThousandMaxlength(){return 16-this.decimalsLength||13}ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.decimal=void 0,this.decimalsLength=void 0,this.event="",this.help=void 0,this.icon=void 0,this.label=void 0,this.locale=void 0,this.placeholder="",this.thousandMaxlength=void 0,this.errorPattern=void 0,this.max=void 0,this.min=void 0,this.properties=[]}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=g({type:l,selectors:[["sample-po-decimal-labs"]],standalone:!1,decls:26,vars:37,consts:[["f","ngForm"],["name","decimal",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","ngModel","p-clean","p-decimals-length","p-disabled","p-help","p-icon","p-label","p-locale","p-error-pattern","p-max","p-min","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-thousand-maxlength"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","decimalsLength","p-clean","","p-help","By default is equal 2, check the behavior in doc.","p-label","Decimals max length","p-min","0",1,"po-md-4",3,"ngModelChange","ngModel","p-max"],["name","thousandMaxlength","p-clean","","p-help","By default is equal 13, check the behavior in doc.","p-label","Thousand max length","p-min","0",1,"po-md-4",3,"ngModelChange","ngModel","p-max"],["name","locale","p-clean","","p-help","By default is equal your browser locale","p-label","Locale",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let p=N();n(0,"po-decimal",1),x("ngModelChange",function(a){return s(p),S(i.decimal,a)||(i.decimal=a),c(a)}),E("p-blur",function(){return s(p),c(i.changeEvent("p-blur"))})("p-change",function(){return s(p),c(i.changeEvent("p-change"))})("p-change-model",function(){return s(p),c(i.changeEvent("p-change-model"))}),t(),o(1,"hr"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"hr"),n(6,"form",null,0)(8,"div",2)(9,"po-input",5),x("ngModelChange",function(a){return s(p),S(i.label,a)||(i.label=a),c(a)}),t(),n(10,"po-input",6),x("ngModelChange",function(a){return s(p),S(i.help,a)||(i.help=a),c(a)}),t()(),n(11,"div",2)(12,"po-number",7),x("ngModelChange",function(a){return s(p),S(i.decimalsLength,a)||(i.decimalsLength=a),c(a)}),t(),n(13,"po-number",8),x("ngModelChange",function(a){return s(p),S(i.thousandMaxlength,a)||(i.thousandMaxlength=a),c(a)}),t(),n(14,"po-select",9),x("ngModelChange",function(a){return s(p),S(i.locale,a)||(i.locale=a),c(a)}),t()(),n(15,"div",2)(16,"po-input",10),x("ngModelChange",function(a){return s(p),S(i.placeholder,a)||(i.placeholder=a),c(a)}),t(),n(17,"po-select",11),x("ngModelChange",function(a){return s(p),S(i.icon,a)||(i.icon=a),c(a)}),t()(),n(18,"div",2)(19,"po-number",12),x("ngModelChange",function(a){return s(p),S(i.min,a)||(i.min=a),c(a)}),t(),n(20,"po-number",13),x("ngModelChange",function(a){return s(p),S(i.max,a)||(i.max=a),c(a)}),t(),n(21,"po-input",14),x("ngModelChange",function(a){return s(p),S(i.errorPattern,a)||(i.errorPattern=a),c(a)}),t()(),n(22,"div",2)(23,"po-checkbox-group",15),x("ngModelChange",function(a){return s(p),S(i.properties,a)||(i.properties=a),c(a)}),t()(),n(24,"div",2)(25,"po-button",16),E("p-click",function(){return s(p),c(i.restore())}),t()()()}r&2&&(b("ngModel",i.decimal),u("p-clean",i.properties.includes("clean"))("p-decimals-length",i.decimalsLength)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-locale",i.locale)("p-error-pattern",i.errorPattern)("p-max",i.max)("p-min",i.min)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-thousand-maxlength",i.thousandMaxlength),m(3),u("p-value",i.decimal),m(),u("p-value",i.event),m(5),b("ngModel",i.label),m(),b("ngModel",i.help),m(2),b("ngModel",i.decimalsLength),u("p-max",i.maxDecimalsLength),m(),b("ngModel",i.thousandMaxlength),u("p-max",i.maxThousandMaxlength),m(),b("ngModel",i.locale),u("p-options",i.localeOptions),m(2),b("ngModel",i.placeholder),m(),b("ngModel",i.icon),u("p-options",i.iconOptions),m(2),b("ngModel",i.min),m(),b("ngModel",i.max),m(),b("ngModel",i.errorPattern),m(2),b("ngModel",i.properties),u("p-options",i.propertiesOptions))},dependencies:[T,W,q,I,R,H,Y,_,Z,V,$,ee],encapsulation:2})}return l})();var xe=l=>({"docs-sample-code-tabs":l}),re=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=g({type:l,selectors:[["sample-po-decimal-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal Labs"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-labs/sample-po-decimal-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-decimal
  class="po-md-12"
  name="decimal"
  [(ngModel)]="decimal"
  [p-clean]="properties.includes('clean')"
  [p-decimals-length]="decimalsLength"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-locale]="locale"
  [p-error-pattern]="errorPattern"
  [p-max]="max"
  [p-min]="min"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-thousand-maxlength]="thousandMaxlength"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
>
</po-decimal>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="decimal"> </po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>
  </div>

  <div class="po-row">
    <po-number
      class="po-md-4"
      name="decimalsLength"
      [(ngModel)]="decimalsLength"
      p-clean
      p-help="By default is equal 2, check the behavior in doc."
      p-label="Decimals max length"
      p-min="0"
      [p-max]="maxDecimalsLength"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="thousandMaxlength"
      [(ngModel)]="thousandMaxlength"
      p-clean
      p-help="By default is equal 13, check the behavior in doc."
      p-label="Thousand max length"
      p-min="0"
      [p-max]="maxThousandMaxlength"
    >
    </po-number>

    <po-select
      class="po-md-4"
      name="locale"
      [(ngModel)]="locale"
      p-clean
      p-help="By default is equal your browser locale"
      p-label="Locale"
      [p-options]="localeOptions"
    ></po-select>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

    <po-select class="po-md-6" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
    </po-select>
  </div>

  <div class="po-row">
    <po-number class="po-md-6 po-lg-3" name="min" [(ngModel)]="min" p-clean p-label="Min"> </po-number>

    <po-number class="po-md-6 po-lg-3" name="max" [(ngModel)]="max" p-clean p-label="Max"> </po-number>

    <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern">
    </po-input>
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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-labs/sample-po-decimal-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-decimal-labs',
  templateUrl: './sample-po-decimal-labs.component.html',
  standalone: false
})
export class SamplePoDecimalLabsComponent implements OnInit {
  decimal: number;
  decimalsLength: number;
  event: string;
  help: string;
  icon: string;
  label: string;
  locale: string;
  placeholder: string;
  properties: Array<string>;
  thousandMaxlength: number;
  errorPattern: string;
  max: number;
  min: number;

  public readonly localeOptions: Array<PoSelectOption> = [
    { value: 'pt', label: 'Portuguese' },
    { value: 'en', label: 'English' },
    { value: 'ru', label: 'Russian' },
    { value: 'es', label: 'Spanish' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'ph ph-shopping-cart-simple', label: 'ph ph-shopping-cart-simple' },
    { value: 'ph ph-currency-dollar-simple', label: 'ph ph-currency-dollar-simple' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
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

  get maxDecimalsLength() {
    return 16 - this.thousandMaxlength || 15;
  }

  get maxThousandMaxlength() {
    return 16 - this.decimalsLength || 13;
  }

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.decimal = undefined;
    this.decimalsLength = undefined;
    this.event = '';
    this.help = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.placeholder = '';
    this.thousandMaxlength = undefined;
    this.errorPattern = undefined;
    this.max = undefined;
    this.min = undefined;

    this.properties = [];
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-labs"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),u("ngClass",P(4,xe,i.hideSampleCodeTabs)))},dependencies:[M,C,y,v,le],encapsulation:2})}return l})();var me=(()=>{class l{hourlyWage;quantityDaysPerMonth;salary;weekHours;workingDaysPerWeek;calculate(){let d=this.weekHours/this.workingDaysPerWeek*this.quantityDaysPerMonth,r=this.salary/d;this.hourlyWage=r}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=g({type:l,selectors:[["sample-po-decimal-hourly-wage"]],standalone:!1,decls:16,vars:6,consts:[["f","ngForm"],[1,"po-font-title"],[1,"po-row"],["name","weekHours","p-label","Week Hours","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","workingDaysPerWeek","p-label","Working days per week","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantityDaysPerMonth","p-label","Quantity days per month","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","salary","p-decimals-length","2","p-icon","ph ph-currency-circle-dollar","p-label","Salary","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","ph ph-currency-dollar-simple","p-label","Hourly Wage","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=N();n(0,"form",null,0)(2,"div",1),e(3,"Calculate hourly wage"),t(),o(4,"hr"),n(5,"div",2)(6,"po-number",3),x("ngModelChange",function(a){return s(p),S(i.weekHours,a)||(i.weekHours=a),c(a)}),t(),n(7,"po-number",4),x("ngModelChange",function(a){return s(p),S(i.workingDaysPerWeek,a)||(i.workingDaysPerWeek=a),c(a)}),t()(),n(8,"div",2)(9,"po-number",5),x("ngModelChange",function(a){return s(p),S(i.quantityDaysPerMonth,a)||(i.quantityDaysPerMonth=a),c(a)}),t(),n(10,"po-decimal",6),x("ngModelChange",function(a){return s(p),S(i.salary,a)||(i.salary=a),c(a)}),E("p-change",function(){return s(p),c(i.calculate())}),t()(),n(11,"div",2)(12,"po-decimal",7),x("ngModelChange",function(a){return s(p),S(i.hourlyWage,a)||(i.hourlyWage=a),c(a)}),t()(),n(13,"div",2)(14,"po-button",8),E("p-click",function(){s(p);let a=G(1);return c(a.reset())}),t(),n(15,"po-button",9),E("p-click",function(){return s(p),c(i.calculate())}),t()()()}r&2&&(m(6),b("ngModel",i.weekHours),m(),b("ngModel",i.workingDaysPerWeek),m(2),b("ngModel",i.quantityDaysPerMonth),m(),b("ngModel",i.salary),m(2),b("ngModel",i.hourlyWage),m(3),u("p-disabled",!i.hourlyWage))},dependencies:[T,W,q,I,R,H,_,V],encapsulation:2})}return l})();var ve=l=>({"docs-sample-code-tabs":l}),pe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=g({type:l,selectors:[["sample-po-decimal-hourly-wage-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal - Hourly Wage"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html"),t(),n(13,"pre",7),e(14,`<form #f="ngForm">
  <div class="po-font-title">Calculate hourly wage</div>

  <hr />

  <div class="po-row">
    <po-number class="po-md-6" name="weekHours" [(ngModel)]="weekHours" p-label="Week Hours" p-required> </po-number>

    <po-number
      class="po-md-6"
      name="workingDaysPerWeek"
      [(ngModel)]="workingDaysPerWeek"
      p-label="Working days per week"
      p-required
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-number
      class="po-md-6"
      name="quantityDaysPerMonth"
      [(ngModel)]="quantityDaysPerMonth"
      p-label="Quantity days per month"
      p-required
    >
    </po-number>

    <po-decimal
      class="po-md-6"
      name="salary"
      [(ngModel)]="salary"
      p-decimals-length="2"
      p-icon="ph ph-currency-circle-dollar"
      p-label="Salary"
      p-required
      p-thousand-maxlength="13"
      (p-change)="calculate()"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      name="hourlyWage"
      [(ngModel)]="hourlyWage"
      p-decimals-length="2"
      p-disabled
      p-icon="ph ph-currency-dollar-simple"
      p-label="Hourly Wage"
      p-required
      p-thousand-maxlength="13"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Clean" (p-click)="f.reset()"> </po-button>

    <po-button
      class="po-md-3"
      p-label="Recalculate"
      p-kind="primary"
      [p-disabled]="!hourlyWage"
      (p-click)="calculate()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-hourly-wage',
  templateUrl: './sample-po-decimal-hourly-wage.component.html',
  standalone: false
})
export class SamplePoDecimalHourlyWageComponent {
  hourlyWage: number;
  quantityDaysPerMonth: number;
  salary: number;
  weekHours: number;
  workingDaysPerWeek: number;

  calculate() {
    const hours = (this.weekHours / this.workingDaysPerWeek) * this.quantityDaysPerMonth;
    const salary = this.salary / hours;
    this.hourlyWage = salary;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-hourly-wage"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),u("ngClass",P(4,ve,i.hideSampleCodeTabs)))},dependencies:[M,C,y,v,me],encapsulation:2})}return l})();var de=(()=>{class l{formBuilder;formCalculateHourlyWage;constructor(d){this.formBuilder=d}ngOnInit(){this.formCalculateHourlyWage=this.formBuilder.group({hourlyWage:[null],quantityDaysPerMonth:[null,F.required],salary:[null,F.required],weekHours:[null,F.required],workingDaysPerWeek:[null,F.required]})}calculate(){let{weekHours:d,workingDaysPerWeek:r,quantityDaysPerMonth:i,salary:p}=this.formCalculateHourlyWage.value,h=d/r*i,a=p/h;this.formCalculateHourlyWage.patchValue({hourlyWage:a})}static \u0275fac=function(r){return new(r||l)(L(J))};static \u0275cmp=g({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form"]],standalone:!1,decls:15,vars:2,consts:[[3,"formGroup"],[1,"po-font-title"],[1,"po-row"],["formControlName","weekHours","p-label","Week Hours",1,"po-md-6"],["formControlName","workingDaysPerWeek","p-label","Working days per week",1,"po-md-6"],["formControlName","quantityDaysPerMonth","p-label","Quantity days per month",1,"po-md-6"],["formControlName","salary","p-decimals-length","2","p-icon","ph ph-currency-circle-dollar","p-label","Salary","p-thousand-maxlength","13",1,"po-md-6",3,"p-change"],["formControlName","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","ph ph-currency-dollar-simple","p-label","Hourly Wage","p-thousand-maxlength","13",1,"po-md-6"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){r&1&&(n(0,"form",0)(1,"div",1),e(2,"Calculate hourly wage"),t(),o(3,"hr"),n(4,"div",2),o(5,"po-number",3)(6,"po-number",4),t(),n(7,"div",2),o(8,"po-number",5),n(9,"po-decimal",6),E("p-change",function(){return i.calculate()}),t()(),n(10,"div",2),o(11,"po-decimal",7),t(),n(12,"div",2)(13,"po-button",8),E("p-click",function(){return i.formCalculateHourlyWage.reset()}),t(),n(14,"po-button",9),E("p-click",function(){return i.calculate()}),t()()()),r&2&&(u("formGroup",i.formCalculateHourlyWage),m(14),u("p-disabled",i.formCalculateHourlyWage.invalid))},dependencies:[T,W,q,U,Q,H,_,V],encapsulation:2})}return l})();var De=l=>({"docs-sample-code-tabs":l}),se=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=g({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal - Hourly Wage Reactive Form"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<form [formGroup]="formCalculateHourlyWage">
  <div class="po-font-title">Calculate hourly wage</div>

  <hr />

  <div class="po-row">
    <po-number class="po-md-6" formControlName="weekHours" p-label="Week Hours"> </po-number>

    <po-number class="po-md-6" formControlName="workingDaysPerWeek" p-label="Working days per week"> </po-number>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" formControlName="quantityDaysPerMonth" p-label="Quantity days per month"> </po-number>

    <po-decimal
      class="po-md-6"
      formControlName="salary"
      p-decimals-length="2"
      p-icon="ph ph-currency-circle-dollar"
      p-label="Salary"
      p-thousand-maxlength="13"
      (p-change)="calculate()"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      formControlName="hourlyWage"
      p-decimals-length="2"
      p-disabled
      p-icon="ph ph-currency-dollar-simple"
      p-label="Hourly Wage"
      p-thousand-maxlength="13"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Clean" (p-click)="formCalculateHourlyWage.reset()"> </po-button>

    <po-button
      class="po-md-3"
      p-label="Recalculate"
      p-kind="primary"
      [p-disabled]="formCalculateHourlyWage.invalid"
      (p-click)="calculate()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sample-po-decimal-hourly-wage-reactive-form',
  templateUrl: './sample-po-decimal-hourly-wage-reactive-form.component.html',
  standalone: false
})
export class SamplePoDecimalHourlyWageReactiveFormComponent implements OnInit {
  formCalculateHourlyWage: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.formCalculateHourlyWage = this.formBuilder.group({
      hourlyWage: [null],
      quantityDaysPerMonth: [null, Validators.required],
      salary: [null, Validators.required],
      weekHours: [null, Validators.required],
      workingDaysPerWeek: [null, Validators.required]
    });
  }

  calculate() {
    const { weekHours, workingDaysPerWeek, quantityDaysPerMonth, salary } = this.formCalculateHourlyWage.value;

    const hours = (weekHours / workingDaysPerWeek) * quantityDaysPerMonth;
    const hourlyWage = salary / hours;

    this.formCalculateHourlyWage.patchValue({ hourlyWage });
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-hourly-wage-reactive-form"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),u("ngClass",P(4,De,i.hideSampleCodeTabs)))},dependencies:[M,C,y,v,de],encapsulation:2})}return l})();var ce=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=g({type:l,selectors:[["sample-po-decimal-doc"]],standalone:!1,decls:1081,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["href","documentation/po-i18n"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoDecimalComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4",6),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",7),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",8),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),o(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),n(209,"p"),o(210,"br"),e(211," - O "),n(212,"code"),e(213,"po-decimal"),t(),e(214," \xE9 um "),n(215,"em"),e(216,"input"),t(),e(217," espec\xEDfico para receber apenas n\xFAmeros decimais, por isso recebe as seguintes caracter\xEDsticas:"),t(),n(218,"ul")(219,"li"),e(220,"Aceita apenas n\xFAmeros;"),t(),n(221,"li"),e(222,"Utiliza ',' como separador de decimal;"),t(),n(223,"li"),e(224,"Utiliza '.' para separa\xE7\xE3o de milhar;"),t(),n(225,"li"),e(226,"\xC9 poss\xEDvel configurar a quantidade de casas decimais e a quantidade de digitos do campo."),t()(),n(227,"blockquote")(228,"p")(229,"strong"),e(230,"Importante:"),t(),e(231,`
Atualmente o JavaScript limita-se a um conjunto de dados de `),n(232,"code"),e(233,"32 bits"),t(),e(234,`, e para que os valores comportem-se devidamente,
o `),n(235,"code"),e(236,"po-decimal"),t(),e(237,` cont\xE9m um tratamento que limita em 16 o n\xFAmero total de casas antes e ap\xF3s a v\xEDrgula.
Veja abaixo as demais regras nas documenta\xE7\xF5es de `),n(238,"code"),e(239,"p-decimals-length"),t(),e(240," e "),n(241,"code"),e(242,"p-thousand-maxlength"),t(),e(243,"."),t()()(),n(244,"div",9)(245,"h4",10),e(246,"Seletor"),t(),n(247,"pre",11),e(248,`<po-decimal
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-decimals-length="number"
    p-disabled="boolean"
    p-emit-all-changes="boolean"
    (p-enter)="EventEmitter"
    p-error-async-properties="ErrorAsyncProperties"
    p-error-pattern="string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    p-label="string"
    p-locale="string"
    p-mask="string"
    p-mask-format-model="boolean"
    p-max="number"
    p-maxlength="number"
    p-min="number"
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
    p-thousand-maxlength="number"
    p-upper-case="boolean" >
</po-decimal>
`),t()(),n(249,"h4",12),e(250,"Propriedades"),t(),n(251,"table",13)(252,"tr",14)(253,"th",15),e(254,"Nome"),t(),n(255,"th",15),e(256,"Tipo"),t(),n(257,"th",15),e(258,"Padr\xE3o"),t(),n(259,"th",15),e(260,"Descri\xE7\xE3o"),t()(),n(261,"tr",16)(262,"td",17)(263,"div",18)(264,"span",19),e(265," p-auto-focus"),o(266,"br"),t()()(),n(267,"td",20)(268,"code",21),e(269,"boolean"),t()(),n(270,"td",22)(271,"p")(272,"code"),e(273,"false"),t()()(),n(274,"td",23)(275,"em")(276,"strong"),e(277,"(opcional)"),t()(),n(278,"p"),e(279,"Aplica foco no elemento ao ser iniciado."),t(),n(280,"blockquote")(281,"p"),e(282,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(283,"tr",16)(284,"td",17)(285,"div",24)(286,"span",25),e(287," (p-blur)"),o(288,"br"),t()()(),n(289,"td",20)(290,"code",26),e(291,"EventEmitter"),t()(),n(292,"td",22),e(293,"-"),t(),n(294,"td",23)(295,"em")(296,"strong"),e(297,"(opcional)"),t()(),n(298,"p"),e(299,"Evento disparado ao sair do campo."),t()()(),n(300,"tr",16)(301,"td",17)(302,"div",24)(303,"span",25),e(304," (p-change)"),o(305,"br"),t()()(),n(306,"td",20)(307,"code",26),e(308,"EventEmitter"),t()(),n(309,"td",22),e(310,"-"),t(),n(311,"td",23)(312,"em")(313,"strong"),e(314,"(opcional)"),t()(),n(315,"p"),e(316,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(317,"tr",16)(318,"td",17)(319,"div",24)(320,"span",25),e(321," (p-change-model)"),o(322,"br"),t()()(),n(323,"td",20)(324,"code",26),e(325,"EventEmitter"),t()(),n(326,"td",22),e(327,"-"),t(),n(328,"td",23)(329,"em")(330,"strong"),e(331,"(opcional)"),t()(),n(332,"p"),e(333,"Evento disparado ao alterar valor do model."),t()()(),n(334,"tr",16)(335,"td",17)(336,"div",18)(337,"span",19),e(338,"p-clean"),o(339,"br"),t()()(),n(340,"td",20)(341,"code",21),e(342,"boolean"),t()(),n(343,"td",22),e(344,"-"),t(),n(345,"td",23)(346,"em")(347,"strong"),e(348,"(opcional)"),t()(),n(349,"p"),e(350,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(351,"tr",16)(352,"td",17)(353,"div",18)(354,"span",19),e(355," p-decimals-length"),o(356,"br"),t()()(),n(357,"td",20)(358,"code",27),e(359,"number"),t()(),n(360,"td",22)(361,"p")(362,"code"),e(363,"2"),t()()(),n(364,"td",23)(365,"em")(366,"strong"),e(367,"(opcional)"),t()(),n(368,"p"),e(369,"Quantidade m\xE1xima de casas decimais."),t(),n(370,"blockquote")(371,"p")(372,"strong"),e(373,"Importante:"),t()()(),n(374,"ul")(375,"li"),e(376,"O valor m\xE1ximo permitido \xE9 15;"),t(),n(377,"li"),e(378,"A soma total de "),n(379,"code"),e(380,"p-decimals-length"),t(),e(381," com "),n(382,"code"),e(383,"p-thousand-maxlength"),t(),e(384," limita-se \xE0 16;"),t(),n(385,"li"),e(386,"Esta propriedade sobrep\xF5e apenas o valor "),n(387,"strong"),e(388,"padr\xE3o"),t(),e(389," de "),n(390,"code"),e(391,"p-thousand-maxlength"),t(),e(392,";"),t(),n(393,"li"),e(394,"Caso "),n(395,"code"),e(396,"p-thousand-maxlength"),t(),e(397," tenha um valor definido, esta propriedade poder\xE1 receber apenas o valor restante do limite total (16)."),t()()()(),n(398,"tr",16)(399,"td",17)(400,"div",18)(401,"span",19),e(402,"p-disabled"),o(403,"br"),t()()(),n(404,"td",20)(405,"code",21),e(406,"boolean"),t()(),n(407,"td",22)(408,"p")(409,"code"),e(410,"false"),t()()(),n(411,"td",23)(412,"em")(413,"strong"),e(414,"(opcional)"),t()(),n(415,"p"),e(416,"Se verdadeiro, desabilita o campo."),t()()(),n(417,"tr",16)(418,"td",17)(419,"div",18)(420,"span",19),e(421," p-emit-all-changes"),o(422,"br"),t()()(),n(423,"td",20)(424,"code",21),e(425,"boolean"),t()(),n(426,"td",22)(427,"p")(428,"code"),e(429,"false"),t()()(),n(430,"td",23)(431,"em")(432,"strong"),e(433,"(opcional)"),t()(),n(434,"p"),e(435,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(436,"tr",16)(437,"td",17)(438,"div",24)(439,"span",25),e(440," (p-enter)"),o(441,"br"),t()()(),n(442,"td",20)(443,"code",26),e(444,"EventEmitter"),t()(),n(445,"td",22),e(446,"-"),t(),n(447,"td",23)(448,"em")(449,"strong"),e(450,"(opcional)"),t()(),n(451,"p"),e(452,"Evento disparado ao entrar do campo."),t()()(),n(453,"tr",16)(454,"td",17)(455,"div",18)(456,"span",19),e(457," p-error-async-properties"),o(458,"br"),t()()(),n(459,"td",20)(460,"code",28),e(461,"ErrorAsyncProperties"),t()(),n(462,"td",22),e(463,"-"),t(),n(464,"td",23)(465,"em")(466,"strong"),e(467,"(opcional)"),t()(),n(468,"p"),e(469,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(470,"code"),e(471,"Reactive Forms"),t(),e(472,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(473,"code"),e(474,"asyncValidators"),t(),e(475,"."),t()()(),n(476,"tr",16)(477,"td",17)(478,"div",18)(479,"span",19),e(480," p-error-pattern"),o(481,"br"),t()()(),n(482,"td",20)(483,"code",29),e(484,"string"),t()(),n(485,"td",22),e(486,"-"),t(),n(487,"td",23)(488,"em")(489,"strong"),e(490,"(opcional)"),t()(),n(491,"p"),e(492,"Mensagem que ser\xE1 apresentada quando o "),n(493,"code"),e(494,"pattern"),t(),e(495," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(496,"blockquote")(497,"p"),e(498,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(499,"code"),e(500,"p-required-field-error-message"),t(),e(501," em conjunto."),t()()()(),n(502,"tr",16)(503,"td",17)(504,"div",18)(505,"span",19),e(506," p-help"),o(507,"br"),t()()(),n(508,"td",20)(509,"code",29),e(510,"string"),t()(),n(511,"td",22),e(512,"-"),t(),n(513,"td",23)(514,"em")(515,"strong"),e(516,"(opcional)"),t()(),n(517,"p"),e(518,"Texto de apoio do campo."),t()()(),n(519,"tr",16)(520,"td",17)(521,"div",18)(522,"span",19),e(523," p-icon"),o(524,"br"),t()()(),n(525,"td",20)(526,"code",29),e(527,"string "),t(),n(528,"code",30),e(529," TemplateRef<void>"),t()(),n(530,"td",22),e(531,"-"),t(),n(532,"td",23)(533,"em")(534,"strong"),e(535,"(opcional)"),t()(),n(536,"p"),e(537,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(538,"p"),e(539,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(540,"a",31),e(541,"Biblioteca de \xEDcones"),t(),e(542,". conforme exemplo abaixo:"),t(),n(543,"pre")(544,"code"),e(545,'<po-input p-icon="ph ph-user" p-label="PO input"></po-input>'),t()(),n(546,"p"),e(547,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(548,"em"),e(549,"Font Awesome"),t(),e(550,", da seguinte forma:"),t(),n(551,"pre")(552,"code"),e(553,'<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>'),t()(),n(554,"p"),e(555,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(556,"code"),e(557,"TemplateRef"),t(),e(558,", conforme exemplo abaixo:"),t(),n(559,"pre")(560,"code"),e(561,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>`),t()(),n(562,"blockquote")(563,"p"),e(564,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(565,"code"),e(566,"font-size: inherit"),t(),e(567," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(568,"tr",16)(569,"td",17)(570,"div",18)(571,"span",19),e(572," p-label"),o(573,"br"),t()()(),n(574,"td",20)(575,"code",29),e(576,"string"),t()(),n(577,"td",22),e(578,"-"),t(),n(579,"td",23)(580,"em")(581,"strong"),e(582,"(opcional)"),t()(),n(583,"p"),e(584,"R\xF3tulo do campo."),t()()(),n(585,"tr",16)(586,"td",17)(587,"div",18)(588,"span",19),e(589," p-locale"),o(590,"br"),t()()(),n(591,"td",20)(592,"code",29),e(593,"string"),t()(),n(594,"td",22),e(595,"-"),t(),n(596,"td",23)(597,"em")(598,"strong"),e(599,"(opcional)"),t()(),n(600,"p"),e(601,`Informa o locale(pa\xEDs) para a formata\xE7\xE3o do valor.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),n(602,"a",32)(603,"code"),e(604,"I18n"),t()()(),n(605,"blockquote")(606,"p"),e(607,"Para ver quais linguagens suportadas acesse "),n(608,"a",32)(609,"code"),e(610,"I18n"),t()()()()()(),n(611,"tr",16)(612,"td",17)(613,"div",18)(614,"span",19),e(615,"p-mask"),o(616,"br"),t()()(),n(617,"td",20)(618,"code",29),e(619,"string"),t()(),n(620,"td",22),e(621,"-"),t(),n(622,"td",23)(623,"em")(624,"strong"),e(625,"(opcional)"),t()(),n(626,"p"),e(627,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(628,"tr",16)(629,"td",17)(630,"div",18)(631,"span",19),e(632,"p-mask-format-model"),o(633,"br"),t()()(),n(634,"td",20)(635,"code",21),e(636,"boolean"),t()(),n(637,"td",22)(638,"p")(639,"code"),e(640,"false"),t()()(),n(641,"td",23)(642,"em")(643,"strong"),e(644,"(opcional)"),t()(),n(645,"p"),e(646,"Indica se o "),n(647,"code"),e(648,"model"),t(),e(649," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(650,"tr",16)(651,"td",17)(652,"div",18)(653,"span",19),e(654," p-max"),o(655,"br"),t()()(),n(656,"td",20)(657,"code",27),e(658,"number"),t()(),n(659,"td",22),e(660,"-"),t(),n(661,"td",23)(662,"em")(663,"strong"),e(664,"(opcional)"),t()(),n(665,"p"),e(666,"Valor m\xE1ximo."),t()()(),n(667,"tr",16)(668,"td",17)(669,"div",18)(670,"span",19),e(671," p-maxlength"),o(672,"br"),t()()(),n(673,"td",20)(674,"code",27),e(675,"number"),t()(),n(676,"td",22),e(677,"-"),t(),n(678,"td",23)(679,"em")(680,"strong"),e(681,"(opcional)"),t()(),n(682,"p"),e(683,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(684,"tr",16)(685,"td",17)(686,"div",18)(687,"span",19),e(688," p-min"),o(689,"br"),t()()(),n(690,"td",20)(691,"code",27),e(692,"number"),t()(),n(693,"td",22),e(694,"-"),t(),n(695,"td",23)(696,"em")(697,"strong"),e(698,"(opcional)"),t()(),n(699,"p"),e(700,"Valor m\xEDnimo."),t()()(),n(701,"tr",16)(702,"td",17)(703,"div",18)(704,"span",19),e(705," p-minlength"),o(706,"br"),t()()(),n(707,"td",20)(708,"code",27),e(709,"number"),t()(),n(710,"td",22),e(711,"-"),t(),n(712,"td",23)(713,"em")(714,"strong"),e(715,"(opcional)"),t()(),n(716,"p"),e(717,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(718,"tr",16)(719,"td",17)(720,"div",18)(721,"span",19),e(722," name"),o(723,"br"),t()()(),n(724,"td",20)(725,"code",29),e(726,"string"),t()(),n(727,"td",22),e(728,"-"),t(),n(729,"td",23)(730,"p"),e(731,"Nome e identificador do campo."),t()()(),n(732,"tr",16)(733,"td",17)(734,"div",18)(735,"span",19),e(736," p-no-autocomplete"),o(737,"br"),t()()(),n(738,"td",20)(739,"code",21),e(740,"boolean"),t()(),n(741,"td",22)(742,"p")(743,"code"),e(744,"false"),t()()(),n(745,"td",23)(746,"em")(747,"strong"),e(748,"(opcional)"),t()(),n(749,"p"),e(750,"Define a propriedade nativa "),n(751,"code"),e(752,"autocomplete"),t(),e(753," do campo como "),n(754,"code"),e(755,"off"),t(),e(756,"."),t(),n(757,"blockquote")(758,"p"),e(759,"No componente "),n(760,"code"),e(761,"po-password"),t(),e(762," ser\xE1 definido como "),n(763,"code"),e(764,"new-password"),t(),e(765,"."),t()(),n(766,"p"),e(767,"Nos componentes "),n(768,"code"),e(769,"po-password"),t(),e(770," e "),n(771,"code"),e(772,"po-login"),t(),e(773," o valor padr\xE3o ser\xE1 "),n(774,"code"),e(775,"true"),t(),e(776,"."),t()()(),n(777,"tr",16)(778,"td",17)(779,"div",18)(780,"span",19),e(781," p-optional"),o(782,"br"),t()()(),n(783,"td",20)(784,"code",21),e(785,"boolean"),t()(),n(786,"td",22)(787,"p")(788,"code"),e(789,"false"),t()()(),n(790,"td",23)(791,"em")(792,"strong"),e(793,"(opcional)"),t()(),n(794,"p"),e(795,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(796,"blockquote")(797,"p"),e(798,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(799,"ul")(800,"li"),e(801,"O campo conter "),n(802,"code"),e(803,"p-required"),t(),e(804,";"),t(),n(805,"li"),e(806,"N\xE3o possuir "),n(807,"code"),e(808,"p-help"),t(),e(809," e/ou "),n(810,"code"),e(811,"p-label"),t(),e(812,"."),t()()()(),n(813,"tr",16)(814,"td",17)(815,"div",18)(816,"span",19),e(817,"p-pattern"),o(818,"br"),t()()(),n(819,"td",20)(820,"code",29),e(821,"string"),t()(),n(822,"td",22),e(823,"-"),t(),n(824,"td",23)(825,"em")(826,"strong"),e(827,"(opcional)"),t()(),n(828,"p"),e(829,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(830,"code"),e(831,"(p-mask)"),t(),e(832,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(833,"tr",16)(834,"td",17)(835,"div",18)(836,"span",19),e(837," p-placeholder"),o(838,"br"),t()()(),n(839,"td",20)(840,"code",29),e(841,"string"),t()(),n(842,"td",22)(843,"p"),e(844,"''"),t()(),n(845,"td",23)(846,"em")(847,"strong"),e(848,"(opcional)"),t()(),n(849,"p"),e(850,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(851,"tr",16)(852,"td",17)(853,"div",18)(854,"span",19),e(855,"p-readonly"),o(856,"br"),t()()(),n(857,"td",20)(858,"code",21),e(859,"boolean"),t()(),n(860,"td",22),e(861,"-"),t(),n(862,"td",23)(863,"em")(864,"strong"),e(865,"(opcional)"),t()(),n(866,"p"),e(867,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(868,"tr",16)(869,"td",17)(870,"div",18)(871,"span",19),e(872,"p-required"),o(873,"br"),t()()(),n(874,"td",20)(875,"code",21),e(876,"boolean"),t()(),n(877,"td",22)(878,"p")(879,"code"),e(880,"false"),t()()(),n(881,"td",23)(882,"em")(883,"strong"),e(884,"(opcional)"),t()(),n(885,"p"),e(886,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(887,"blockquote")(888,"p"),e(889,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(890,"code"),e(891,"(p-disabled)"),t(),e(892,"."),t()()()(),n(893,"tr",16)(894,"td",17)(895,"div",18)(896,"span",19),e(897," p-required-field-error-message"),o(898,"br"),t()()(),n(899,"td",20)(900,"code",21),e(901,"boolean"),t()(),n(902,"td",22)(903,"p")(904,"code"),e(905,"false"),t()()(),n(906,"td",23)(907,"em")(908,"strong"),e(909,"(opcional)"),t()(),n(910,"p"),e(911,"Exibe a mensagem setada na propriedade "),n(912,"code"),e(913,"p-error-pattern"),t(),e(914," se o campo estiver vazio e for requerido."),t(),n(915,"blockquote")(916,"p"),e(917,"Necess\xE1rio que a propriedade "),n(918,"code"),e(919,"p-required"),t(),e(920," esteja habilitada."),t()()()(),n(921,"tr",16)(922,"td",17)(923,"div",18)(924,"span",19),e(925," p-show-required"),o(926,"br"),t()()(),n(927,"td",20)(928,"code",21),e(929,"boolean"),t()(),n(930,"td",22),e(931,"-"),t(),n(932,"td",23)(933,"p"),e(934,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(935,"blockquote")(936,"p"),e(937,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(938,"ul")(939,"li"),e(940,"N\xE3o possuir "),n(941,"code"),e(942,"p-help"),t(),e(943," e/ou "),n(944,"code"),e(945,"p-label"),t(),e(946,"."),t()()()(),n(947,"tr",16)(948,"td",17)(949,"div",18)(950,"span",19),e(951," p-thousand-maxlength"),o(952,"br"),t()()(),n(953,"td",20)(954,"code",27),e(955,"number"),t()(),n(956,"td",22)(957,"p")(958,"code"),e(959,"13"),t()()(),n(960,"td",23)(961,"em")(962,"strong"),e(963,"(opcional)"),t()(),n(964,"p"),e(965,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal."),t(),n(966,"blockquote")(967,"p")(968,"strong"),e(969,"Importante:"),t()()(),n(970,"ul")(971,"li"),e(972,"O valor m\xE1ximo permitido \xE9 13;"),t(),n(973,"li"),e(974,"A soma total de "),n(975,"code"),e(976,"p-decimals-length"),t(),e(977," com "),n(978,"code"),e(979,"p-thousand-maxlength"),t(),e(980," limita-se \xE0 16;"),t(),n(981,"li"),e(982,"Esta propriedade sobrep\xF5e o valor definido em "),n(983,"code"),e(984,"p-decimals-length"),t(),e(985,"."),t()()()(),n(986,"tr",16)(987,"td",17)(988,"div",18)(989,"span",19),e(990," p-upper-case"),o(991,"br"),t()()(),n(992,"td",20)(993,"code",21),e(994,"boolean"),t()(),n(995,"td",22),e(996,"-"),t(),n(997,"td",23)(998,"p"),e(999,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1e3,"h3",12),e(1001,"M\xE9todos"),t(),n(1002,"table",33)(1003,"tr",16)(1004,"th",34)(1005,"div",18)(1006,"h4")(1007,"span",19),e(1008," focus "),t()()()()(),n(1009,"tr",23)(1010,"td",23)(1011,"p"),e(1012,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1013,"p"),e(1014,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1015,"pre")(1016,"code"),e(1017,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}`),t()()()()(),o(1018,"br"),n(1019,"h3"),e(1020,"Interfaces"),t(),n(1021,"h4",35)(1022,"code",5),e(1023,"ErrorAsyncProperties"),t()(),n(1024,"div",2)(1025,"p"),e(1026,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1027,"h4",12),e(1028,"Propriedades"),t(),n(1029,"table",13)(1030,"tr",14)(1031,"th",15),e(1032,"Nome"),t(),n(1033,"th",15),e(1034,"Tipo"),t(),n(1035,"th",15),e(1036,"Descri\xE7\xE3o"),t()(),n(1037,"tr",16)(1038,"td",17)(1039,"div",18)(1040,"span",19),e(1041," errorAsync"),o(1042,"br"),t()()(),n(1043,"td",20)(1044,"code",36),e(1045,"(value) => Observable<boolean>"),t()(),n(1046,"td",23)(1047,"p"),e(1048,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1049,"code"),e(1050,"change"),t(),e(1051," ou "),n(1052,"code"),e(1053,"change-model"),t(),e(1054,", dependendo do valor da propriedade "),n(1055,"code"),e(1056,"triggerMode"),t(),e(1057,"."),t()()(),n(1058,"tr",16)(1059,"td",17)(1060,"div",18)(1061,"span",19),e(1062," triggerMode"),o(1063,"br"),t()()(),n(1064,"td",20)(1065,"code",37),e(1066,"'change' "),t(),n(1067,"code",38),e(1068," 'changeModel'"),t()(),n(1069,"td",23)(1070,"em")(1071,"strong"),e(1072,"(opcional)"),t()(),n(1073,"p"),e(1074,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1075,"code"),e(1076,"change"),t(),e(1077," ou "),n(1078,"code"),e(1079,"change-model"),t(),e(1080,"."),t()()()()())},dependencies:[C],encapsulation:2})}return l})();var ue=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)(L(X),L(K))};static \u0275cmp=g({type:l,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title"," Decimal",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),o(3,"sample-po-decimal-doc"),t(),n(4,"po-tab",3),o(5,"sample-po-decimal-basic-view")(6,"sample-po-decimal-labs-view")(7,"sample-po-decimal-hourly-wage-view")(8,"sample-po-decimal-hourly-wage-reactive-form-view"),t()()()),r&2&&(u("p-actions",i.actions),m(2),u("p-active",i.activeTab.includes("doc")),m(2),u("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[te,y,v,oe,re,pe,se,ce],encapsulation:2})}return l})();var _e=[{path:"",component:ue}],he=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=O({type:l});static \u0275inj=B({imports:[A.forChild(_e),A]})}return l})();var it=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=O({type:l});static \u0275inj=B({imports:[ne,he]})}return l})();export{it as DocPoDecimalModule};
