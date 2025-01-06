import{$ as k,$a as P,Cd as X,F as s,Fa as A,G as u,Ga as e,Ia as M,Ka as E,La as g,Lb as V,Ma as S,Mb as L,Nb as W,Ob as F,Od as J,Pa as _,Pb as B,T as m,U as z,Wb as j,Xd as v,Yb as G,Yd as C,Zb as R,_ as h,ha as b,ka as w,md as U,na as n,oa as t,oc as O,pa as a,re as y,sd as q,se as K,ta as D,ua as x,y as T,yd as I,zc as Q}from"./chunk-ODUOVNEW.js";var Y=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","number","p-label","PO Number"]],template:function(r,i){r&1&&a(0,"po-number",0)},dependencies:[q],encapsulation:2})}return l})();var me=l=>({"docs-sample-code-tabs":l}),$=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Number Basic"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-number-basic/sample-po-number-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-number name="number" p-label="PO Number"> </po-number>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-number-basic/sample-po-number-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-number-basic',
  templateUrl: './sample-po-number-basic.component.html',
  standalone: false
})
export class SamplePoNumberBasicComponent {}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-number-basic"),t(),a(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),M(" ",i.sampleCodeButtonLabel,""),m(),b("ngClass",_(4,me,i.hideSampleCodeTabs)))},dependencies:[P,y,v,C,Y],encapsulation:2})}return l})();var ee=(()=>{class l{event;messageErrorPattern;help;icon;label;max;maxlength;min;minlength;number;placeholder;properties;step;iconOptions=[{value:"an an-currency-circle-dollar",label:"an an-currency-circle-dollar"},{value:"an an-currency-btc",label:"an an-currency-btc"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.number=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.event="",this.messageErrorPattern="",this.label=void 0,this.placeholder="",this.help="",this.icon="",this.step=void 0,this.properties=[]}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-labs"]],standalone:!1,decls:26,vars:34,consts:[["f","ngForm"],["name","PO number",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","ngModel","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-max","p-maxlength","p-min","p-minlength","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-step"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","messageErrorPattern","p-clean","","p-label","Message error pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Minlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Maxlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","step","p-clean","","p-label","Step",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","3","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let p=D();n(0,"po-number",1),S("ngModelChange",function(o){return s(p),g(i.number,o)||(i.number=o),u(o)}),x("p-blur",function(){return s(p),u(i.changeEvent("p-blur"))})("p-change",function(){return s(p),u(i.changeEvent("p-change"))})("p-change-model",function(){return s(p),u(i.changeEvent("p-change-model"))}),t(),a(1,"hr"),n(2,"div",2),a(3,"po-info",3)(4,"po-info",4),t(),a(5,"hr"),n(6,"form",null,0)(8,"div",2)(9,"po-input",5),S("ngModelChange",function(o){return s(p),g(i.label,o)||(i.label=o),u(o)}),t(),n(10,"po-input",6),S("ngModelChange",function(o){return s(p),g(i.help,o)||(i.help=o),u(o)}),t()(),n(11,"div",2)(12,"po-input",7),S("ngModelChange",function(o){return s(p),g(i.placeholder,o)||(i.placeholder=o),u(o)}),t(),n(13,"po-input",8),S("ngModelChange",function(o){return s(p),g(i.messageErrorPattern,o)||(i.messageErrorPattern=o),u(o)}),t()(),n(14,"div",2)(15,"po-number",9),S("ngModelChange",function(o){return s(p),g(i.min,o)||(i.min=o),u(o)}),t(),n(16,"po-number",10),S("ngModelChange",function(o){return s(p),g(i.minlength,o)||(i.minlength=o),u(o)}),t(),n(17,"po-number",11),S("ngModelChange",function(o){return s(p),g(i.max,o)||(i.max=o),u(o)}),t(),n(18,"po-number",12),S("ngModelChange",function(o){return s(p),g(i.maxlength,o)||(i.maxlength=o),u(o)}),t()(),n(19,"div",2)(20,"po-number",13),S("ngModelChange",function(o){return s(p),g(i.step,o)||(i.step=o),u(o)}),t(),n(21,"po-select",14),S("ngModelChange",function(o){return s(p),g(i.icon,o)||(i.icon=o),u(o)}),t()(),n(22,"div",2)(23,"po-checkbox-group",15),S("ngModelChange",function(o){return s(p),g(i.properties,o)||(i.properties=o),u(o)}),t()(),n(24,"div",2)(25,"po-button",16),x("p-click",function(){return s(p),u(i.restore())}),t()()()}r&2&&(E("ngModel",i.number),b("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.messageErrorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-max",i.max)("p-maxlength",i.maxlength)("p-min",i.min)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-step",i.step),m(3),b("p-value",i.number),m(),b("p-value",i.event),m(5),E("ngModel",i.label),m(),E("ngModel",i.help),m(2),E("ngModel",i.placeholder),m(),E("ngModel",i.messageErrorPattern),m(2),E("ngModel",i.min),m(),E("ngModel",i.minlength),m(),E("ngModel",i.max),m(),E("ngModel",i.maxlength),m(2),E("ngModel",i.step),m(),E("ngModel",i.icon),b("p-options",i.iconOptions),m(2),E("ngModel",i.properties),b("p-options",i.propertiesOptions))},dependencies:[B,V,L,F,W,O,Q,U,q,I,X],encapsulation:2})}return l})();var ue=l=>({"docs-sample-code-tabs":l}),te=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Number Labs"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-number-labs/sample-po-number-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-number
  class="po-md-12"
  name="PO number"
  [(ngModel)]="number"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="messageErrorPattern"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-max]="max"
  [p-maxlength]="maxlength"
  [p-min]="min"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-step]="step"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
>
</po-number>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="number"> </po-info>
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

    <po-input
      class="po-md-6"
      name="messageErrorPattern"
      [(ngModel)]="messageErrorPattern"
      p-clean
      p-label="Message error pattern"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-number class="po-md-6 po-lg-3" name="min" [(ngModel)]="min" p-clean p-label="Min"> </po-number>

    <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Minlength">
    </po-number>

    <po-number class="po-md-6 po-lg-3" name="max" [(ngModel)]="max" p-clean p-label="Max"> </po-number>

    <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Maxlength">
    </po-number>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" name="step" [(ngModel)]="step" p-clean p-label="Step"> </po-number>

    <po-select class="po-lg-6" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
    </po-select>
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
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-number-labs/sample-po-number-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-number-labs',
  templateUrl: './sample-po-number-labs.component.html',
  standalone: false
})
export class SamplePoNumberLabsComponent implements OnInit {
  event: string;
  messageErrorPattern: string;
  help: string;
  icon: string;
  label: string;
  max: number;
  maxlength: number;
  min: number;
  minlength: number;
  number: number;
  placeholder: string;
  properties: Array<string>;
  step: string;

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-currency-circle-dollar', label: 'an an-currency-circle-dollar' },
    { value: 'an an-currency-btc', label: 'an an-currency-btc' },
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

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.number = undefined;
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.event = '';
    this.messageErrorPattern = '';
    this.label = undefined;
    this.placeholder = '';
    this.help = '';
    this.icon = '';
    this.step = undefined;
    this.properties = [];
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-number-labs"),t(),a(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),M(" ",i.sampleCodeButtonLabel,""),m(),b("ngClass",_(4,ue,i.hideSampleCodeTabs)))},dependencies:[P,y,v,C,ee],encapsulation:2})}return l})();var ne=(()=>{class l{icms;liquid;price;quantity;state;total;statesOptions=[{value:18,label:"S\xE3o Paulo"},{value:17,label:"Alagoas"},{value:15,label:"Cear\xE1"}];calculate(){let d=this.price*this.quantity;this.liquid=d,this.total=d+d*(this.state/100)}loadICMS(){this.icms=this.state}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-calculate"]],standalone:!1,decls:16,vars:9,consts:[["f","ngForm"],[1,"po-row"],["name","price","p-label","Price","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantity","p-label","Quantity","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State","p-required","","p-sort","",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel","p-options"],["name","icms","p-label","ICMS %","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","liquid","p-label","Liquid","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","total","p-label","Total","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Calculate",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=D();n(0,"h3"),e(1,"Calculate Tax"),t(),a(2,"hr"),n(3,"form",null,0)(5,"div",1)(6,"po-number",2),S("ngModelChange",function(o){return s(p),g(i.price,o)||(i.price=o),u(o)}),t(),n(7,"po-number",3),S("ngModelChange",function(o){return s(p),g(i.quantity,o)||(i.quantity=o),u(o)}),t()(),n(8,"div")(9,"po-select",4),S("ngModelChange",function(o){return s(p),g(i.state,o)||(i.state=o),u(o)}),x("p-change",function(){return s(p),u(i.loadICMS())}),t(),n(10,"po-number",5),S("ngModelChange",function(o){return s(p),g(i.icms,o)||(i.icms=o),u(o)}),t(),n(11,"po-number",6),S("ngModelChange",function(o){return s(p),g(i.liquid,o)||(i.liquid=o),u(o)}),t(),n(12,"po-number",7),S("ngModelChange",function(o){return s(p),g(i.total,o)||(i.total=o),u(o)}),t()(),n(13,"div",1)(14,"po-button",8),x("p-click",function(){return s(p),u(i.calculate())}),t(),n(15,"po-button",9),x("p-click",function(){s(p);let o=A(4);return u(o.reset())}),t()()()}if(r&2){let p=A(4);m(6),E("ngModel",i.price),m(),E("ngModel",i.quantity),m(2),E("ngModel",i.state),b("p-options",i.statesOptions),m(),E("ngModel",i.icms),m(),E("ngModel",i.liquid),m(),E("ngModel",i.total),m(2),b("p-disabled",p.invalid),m(),b("p-disabled",p.invalid)}},dependencies:[B,V,L,F,W,O,q,I],encapsulation:2})}return l})();var Ee=l=>({"docs-sample-code-tabs":l}),ie=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-calculate-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Number - Calculate"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-number-calculate/sample-po-number-calculate.component.html"),t(),n(13,"pre",7),e(14,`<h3>Calculate Tax</h3>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-number class="po-md-6" name="price" [(ngModel)]="price" p-label="Price" p-required> </po-number>

    <po-number class="po-md-6" name="quantity" [(ngModel)]="quantity" p-label="Quantity" p-required> </po-number>
  </div>

  <div>
    <po-select
      class="po-md-6 po-lg-3"
      name="state"
      [(ngModel)]="state"
      p-label="State"
      p-required
      p-sort
      [p-options]="statesOptions"
      (p-change)="loadICMS()"
    >
    </po-select>

    <po-number class="po-md-6 po-lg-3" name="icms" [(ngModel)]="icms" p-label="ICMS %" p-disabled> </po-number>

    <po-number class="po-md-6 po-lg-3" name="liquid" [(ngModel)]="liquid" p-label="Liquid" p-disabled> </po-number>

    <po-number class="po-md-6 po-lg-3" name="total" [(ngModel)]="total" p-label="Total" p-disabled> </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Calculate" [p-disabled]="f.invalid" (p-click)="calculate()"> </po-button>

    <po-button class="po-md-3" p-label="Clean" [p-disabled]="f.invalid" (p-click)="f.reset()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-number-calculate/sample-po-number-calculate.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-number-calculate',
  templateUrl: './sample-po-number-calculate.component.html',
  standalone: false
})
export class SamplePoNumberCalculateComponent {
  icms: number;
  liquid: number;
  price: number;
  quantity: number;
  state: number;
  total: number;

  public readonly statesOptions: Array<PoSelectOption> = [
    { value: 18, label: 'S\xE3o Paulo' },
    { value: 17, label: 'Alagoas' },
    { value: 15, label: 'Cear\xE1' }
  ];

  calculate() {
    const realPrice = this.price * this.quantity;
    this.liquid = realPrice;
    this.total = realPrice + realPrice * (this.state / 100);
  }

  loadICMS() {
    this.icms = this.state;
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-number-calculate"),t(),a(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),M(" ",i.sampleCodeButtonLabel,""),m(),b("ngClass",_(4,Ee,i.hideSampleCodeTabs)))},dependencies:[P,y,v,C,ne],encapsulation:2})}return l})();var oe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-doc"]],standalone:!1,decls:1023,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoNumberComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4",6),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),a(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",7),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",8),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),a(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),a(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),a(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),a(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),n(209,"p"),a(210,"br"),e(211," O "),n(212,"code"),e(213,"po-number"),t(),e(214,` \xE9 um input espec\xEDfico para receber apenas n\xFAmeros.
\xC9 poss\xEDvel configurar um valor m\xEDnimo, m\xE1ximo e um step com p-min, p-max e p-step,
respectivamente.`),t()(),n(215,"div",9)(216,"h4",10),e(217,"Seletor"),t(),n(218,"pre",11),e(219,`<po-number
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
    p-step="string"
    p-upper-case="boolean" >
</po-number>
`),t()(),n(220,"h4",12),e(221,"Propriedades"),t(),n(222,"table",13)(223,"tr",14)(224,"th",15),e(225,"Nome"),t(),n(226,"th",15),e(227,"Tipo"),t(),n(228,"th",15),e(229,"Padr\xE3o"),t(),n(230,"th",15),e(231,"Descri\xE7\xE3o"),t()(),n(232,"tr",16)(233,"td",17)(234,"div",18)(235,"span",19),e(236," p-auto-focus"),a(237,"br"),t()()(),n(238,"td",20)(239,"code",21),e(240,"boolean"),t()(),n(241,"td",22)(242,"p")(243,"code"),e(244,"false"),t()()(),n(245,"td",23)(246,"em")(247,"strong"),e(248,"(opcional)"),t()(),n(249,"p"),e(250,"Aplica foco no elemento ao ser iniciado."),t(),n(251,"blockquote")(252,"p"),e(253,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(254,"tr",16)(255,"td",17)(256,"div",24)(257,"span",25),e(258," (p-blur)"),a(259,"br"),t()()(),n(260,"td",20)(261,"code",26),e(262,"EventEmitter"),t()(),n(263,"td",22),e(264,"-"),t(),n(265,"td",23)(266,"em")(267,"strong"),e(268,"(opcional)"),t()(),n(269,"p"),e(270,"Evento disparado ao sair do campo."),t()()(),n(271,"tr",16)(272,"td",17)(273,"div",24)(274,"span",25),e(275," (p-change)"),a(276,"br"),t()()(),n(277,"td",20)(278,"code",26),e(279,"EventEmitter"),t()(),n(280,"td",22),e(281,"-"),t(),n(282,"td",23)(283,"em")(284,"strong"),e(285,"(opcional)"),t()(),n(286,"p"),e(287,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(288,"tr",16)(289,"td",17)(290,"div",24)(291,"span",25),e(292," (p-change-model)"),a(293,"br"),t()()(),n(294,"td",20)(295,"code",26),e(296,"EventEmitter"),t()(),n(297,"td",22),e(298,"-"),t(),n(299,"td",23)(300,"em")(301,"strong"),e(302,"(opcional)"),t()(),n(303,"p"),e(304,"Evento disparado ao alterar valor do model."),t()()(),n(305,"tr",16)(306,"td",17)(307,"div",18)(308,"span",19),e(309,"p-clean"),a(310,"br"),t()()(),n(311,"td",20)(312,"code",21),e(313,"boolean"),t()(),n(314,"td",22),e(315,"-"),t(),n(316,"td",23)(317,"em")(318,"strong"),e(319,"(opcional)"),t()(),n(320,"p"),e(321,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(322,"tr",16)(323,"td",17)(324,"div",18)(325,"span",19),e(326,"p-disabled"),a(327,"br"),t()()(),n(328,"td",20)(329,"code",21),e(330,"boolean"),t()(),n(331,"td",22)(332,"p")(333,"code"),e(334,"false"),t()()(),n(335,"td",23)(336,"em")(337,"strong"),e(338,"(opcional)"),t()(),n(339,"p"),e(340,"Se verdadeiro, desabilita o campo."),t()()(),n(341,"tr",16)(342,"td",17)(343,"div",18)(344,"span",19),e(345," p-emit-all-changes"),a(346,"br"),t()()(),n(347,"td",20)(348,"code",21),e(349,"boolean"),t()(),n(350,"td",22)(351,"p")(352,"code"),e(353,"false"),t()()(),n(354,"td",23)(355,"em")(356,"strong"),e(357,"(opcional)"),t()(),n(358,"p"),e(359,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(360,"tr",16)(361,"td",17)(362,"div",24)(363,"span",25),e(364," (p-enter)"),a(365,"br"),t()()(),n(366,"td",20)(367,"code",26),e(368,"EventEmitter"),t()(),n(369,"td",22),e(370,"-"),t(),n(371,"td",23)(372,"em")(373,"strong"),e(374,"(opcional)"),t()(),n(375,"p"),e(376,"Evento disparado ao entrar do campo."),t()()(),n(377,"tr",16)(378,"td",17)(379,"div",18)(380,"span",19),e(381," p-error-async-properties"),a(382,"br"),t()()(),n(383,"td",20)(384,"code",27),e(385,"ErrorAsyncProperties"),t()(),n(386,"td",22),e(387,"-"),t(),n(388,"td",23)(389,"em")(390,"strong"),e(391,"(opcional)"),t()(),n(392,"p"),e(393,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(394,"code"),e(395,"Reactive Forms"),t(),e(396,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(397,"code"),e(398,"asyncValidators"),t(),e(399,"."),t()()(),n(400,"tr",16)(401,"td",17)(402,"div",18)(403,"span",19),e(404," p-error-pattern"),a(405,"br"),t()()(),n(406,"td",20)(407,"code",28),e(408,"string"),t()(),n(409,"td",22),e(410,"-"),t(),n(411,"td",23)(412,"em")(413,"strong"),e(414,"(opcional)"),t()(),n(415,"p"),e(416,"Mensagem que ser\xE1 apresentada quando o "),n(417,"code"),e(418,"pattern"),t(),e(419," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(420,"blockquote")(421,"p"),e(422,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(423,"code"),e(424,"p-required-field-error-message"),t(),e(425," em conjunto."),t()()()(),n(426,"tr",16)(427,"td",17)(428,"div",18)(429,"span",19),e(430," p-help"),a(431,"br"),t()()(),n(432,"td",20)(433,"code",28),e(434,"string"),t()(),n(435,"td",22),e(436,"-"),t(),n(437,"td",23)(438,"em")(439,"strong"),e(440,"(opcional)"),t()(),n(441,"p"),e(442,"Texto de apoio do campo."),t()()(),n(443,"tr",16)(444,"td",17)(445,"div",18)(446,"span",19),e(447," p-icon"),a(448,"br"),t()()(),n(449,"td",20)(450,"code",28),e(451,"string "),t(),n(452,"code",29),e(453," TemplateRef<void>"),t()(),n(454,"td",22),e(455,"-"),t(),n(456,"td",23)(457,"em")(458,"strong"),e(459,"(opcional)"),t()(),n(460,"p"),e(461,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(462,"p"),e(463,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(464,"a",30),e(465,"Biblioteca de \xEDcones"),t(),e(466,". conforme exemplo abaixo:"),t(),n(467,"pre")(468,"code"),e(469,'<po-input p-icon="an an-user" p-label="PO input"></po-input>'),t()(),n(470,"p"),e(471,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(472,"em"),e(473,"Font Awesome"),t(),e(474,", da seguinte forma:"),t(),n(475,"pre")(476,"code"),e(477,'<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>'),t()(),n(478,"p"),e(479,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(480,"code"),e(481,"TemplateRef"),t(),e(482,", conforme exemplo abaixo:"),t(),n(483,"pre")(484,"code"),e(485,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>`),t()(),n(486,"blockquote")(487,"p"),e(488,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(489,"code"),e(490,"font-size: inherit"),t(),e(491," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(492,"tr",16)(493,"td",17)(494,"div",18)(495,"span",19),e(496," p-label"),a(497,"br"),t()()(),n(498,"td",20)(499,"code",28),e(500,"string"),t()(),n(501,"td",22),e(502,"-"),t(),n(503,"td",23)(504,"em")(505,"strong"),e(506,"(opcional)"),t()(),n(507,"p"),e(508,"R\xF3tulo do campo."),t()()(),n(509,"tr",16)(510,"td",17)(511,"div",18)(512,"span",19),e(513,"p-mask"),a(514,"br"),t()()(),n(515,"td",20)(516,"code",28),e(517,"string"),t()(),n(518,"td",22),e(519,"-"),t(),n(520,"td",23)(521,"em")(522,"strong"),e(523,"(opcional)"),t()(),n(524,"p"),e(525,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(526,"tr",16)(527,"td",17)(528,"div",18)(529,"span",19),e(530,"p-mask-format-model"),a(531,"br"),t()()(),n(532,"td",20)(533,"code",21),e(534,"boolean"),t()(),n(535,"td",22)(536,"p")(537,"code"),e(538,"false"),t()()(),n(539,"td",23)(540,"em")(541,"strong"),e(542,"(opcional)"),t()(),n(543,"p"),e(544,"Indica se o "),n(545,"code"),e(546,"model"),t(),e(547," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(548,"tr",16)(549,"td",17)(550,"div",18)(551,"span",19),e(552," p-mask-no-length-validation"),a(553,"br"),t()()(),n(554,"td",20)(555,"code",21),e(556,"boolean"),t()(),n(557,"td",22)(558,"p")(559,"code"),e(560,"false"),t()()(),n(561,"td",23)(562,"p"),e(563,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(564,"code"),e(565,"minLength"),t(),e(566,") e m\xE1ximo ("),n(567,"code"),e(568,"maxLength"),t(),e(569,") do campo."),t(),n(570,"ul")(571,"li"),e(572,"Quando "),n(573,"code"),e(574,"true"),t(),e(575,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(576,"li"),e(577,"Quando "),n(578,"code"),e(579,"false"),t(),e(580,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(581,"blockquote")(582,"p"),e(583,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(584,"code"),e(585,"p-mask-format-model"),t(),e(586,"."),t()(),n(587,"p"),e(588,"Exemplo:"),t(),n(589,"pre")(590,"code"),e(591,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>`),t()(),n(592,"ul")(593,"li"),e(594,"Entrada: "),n(595,"code"),e(596,"123-456"),t(),e(597," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(598,"code"),e(599,"-"),t(),e(600,"."),t()()()(),n(601,"tr",16)(602,"td",17)(603,"div",18)(604,"span",19),e(605,"p-max"),a(606,"br"),t()()(),n(607,"td",20)(608,"code",31),e(609,"number"),t()(),n(610,"td",22),e(611,"-"),t(),n(612,"td",23)(613,"em")(614,"strong"),e(615,"(opcional)"),t()(),n(616,"p"),e(617,"Valor m\xE1ximo."),t(),n(618,"blockquote")(619,"p"),e(620,"Quando o valor m\xE1ximo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),n(621,"code"),e(622,"p-step"),t(),e(623," tamb\xE9m passando a ela um valor decimal."),t()()()(),n(624,"tr",16)(625,"td",17)(626,"div",18)(627,"span",19),e(628," p-maxlength"),a(629,"br"),t()()(),n(630,"td",20)(631,"code",31),e(632,"number"),t()(),n(633,"td",22),e(634,"-"),t(),n(635,"td",23)(636,"em")(637,"strong"),e(638,"(opcional)"),t()(),n(639,"p"),e(640,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(641,"tr",16)(642,"td",17)(643,"div",18)(644,"span",19),e(645,"p-min"),a(646,"br"),t()()(),n(647,"td",20)(648,"code",31),e(649,"number"),t()(),n(650,"td",22),e(651,"-"),t(),n(652,"td",23)(653,"em")(654,"strong"),e(655,"(opcional)"),t()(),n(656,"p"),e(657,"Valor m\xEDnimo."),t(),n(658,"blockquote")(659,"p"),e(660,"Quando o valor m\xEDnimo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),n(661,"code"),e(662,"p-step"),t(),e(663," tamb\xE9m passando a ela um valor decimal."),t()()()(),n(664,"tr",16)(665,"td",17)(666,"div",18)(667,"span",19),e(668," p-minlength"),a(669,"br"),t()()(),n(670,"td",20)(671,"code",31),e(672,"number"),t()(),n(673,"td",22),e(674,"-"),t(),n(675,"td",23)(676,"em")(677,"strong"),e(678,"(opcional)"),t()(),n(679,"p"),e(680,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(681,"tr",16)(682,"td",17)(683,"div",18)(684,"span",19),e(685," name"),a(686,"br"),t()()(),n(687,"td",20)(688,"code",28),e(689,"string"),t()(),n(690,"td",22),e(691,"-"),t(),n(692,"td",23)(693,"p"),e(694,"Nome e identificador do campo."),t()()(),n(695,"tr",16)(696,"td",17)(697,"div",18)(698,"span",19),e(699," p-no-autocomplete"),a(700,"br"),t()()(),n(701,"td",20)(702,"code",21),e(703,"boolean"),t()(),n(704,"td",22)(705,"p")(706,"code"),e(707,"false"),t()()(),n(708,"td",23)(709,"em")(710,"strong"),e(711,"(opcional)"),t()(),n(712,"p"),e(713,"Define a propriedade nativa "),n(714,"code"),e(715,"autocomplete"),t(),e(716," do campo como "),n(717,"code"),e(718,"off"),t(),e(719,"."),t(),n(720,"blockquote")(721,"p"),e(722,"No componente "),n(723,"code"),e(724,"po-password"),t(),e(725," ser\xE1 definido como "),n(726,"code"),e(727,"new-password"),t(),e(728,"."),t()(),n(729,"p"),e(730,"Nos componentes "),n(731,"code"),e(732,"po-password"),t(),e(733," e "),n(734,"code"),e(735,"po-login"),t(),e(736," o valor padr\xE3o ser\xE1 "),n(737,"code"),e(738,"true"),t(),e(739,"."),t()()(),n(740,"tr",16)(741,"td",17)(742,"div",18)(743,"span",19),e(744," p-optional"),a(745,"br"),t()()(),n(746,"td",20)(747,"code",21),e(748,"boolean"),t()(),n(749,"td",22)(750,"p")(751,"code"),e(752,"false"),t()()(),n(753,"td",23)(754,"em")(755,"strong"),e(756,"(opcional)"),t()(),n(757,"p"),e(758,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(759,"blockquote")(760,"p"),e(761,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(762,"ul")(763,"li"),e(764,"O campo conter "),n(765,"code"),e(766,"p-required"),t(),e(767,";"),t(),n(768,"li"),e(769,"N\xE3o possuir "),n(770,"code"),e(771,"p-help"),t(),e(772," e/ou "),n(773,"code"),e(774,"p-label"),t(),e(775,"."),t()()()(),n(776,"tr",16)(777,"td",17)(778,"div",18)(779,"span",19),e(780,"p-pattern"),a(781,"br"),t()()(),n(782,"td",20)(783,"code",28),e(784,"string"),t()(),n(785,"td",22),e(786,"-"),t(),n(787,"td",23)(788,"em")(789,"strong"),e(790,"(opcional)"),t()(),n(791,"p"),e(792,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(793,"code"),e(794,"(p-mask)"),t(),e(795,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(796,"tr",16)(797,"td",17)(798,"div",18)(799,"span",19),e(800," p-placeholder"),a(801,"br"),t()()(),n(802,"td",20)(803,"code",28),e(804,"string"),t()(),n(805,"td",22)(806,"p"),e(807,"''"),t()(),n(808,"td",23)(809,"em")(810,"strong"),e(811,"(opcional)"),t()(),n(812,"p"),e(813,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(814,"tr",16)(815,"td",17)(816,"div",18)(817,"span",19),e(818,"p-readonly"),a(819,"br"),t()()(),n(820,"td",20)(821,"code",21),e(822,"boolean"),t()(),n(823,"td",22),e(824,"-"),t(),n(825,"td",23)(826,"em")(827,"strong"),e(828,"(opcional)"),t()(),n(829,"p"),e(830,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(831,"tr",16)(832,"td",17)(833,"div",18)(834,"span",19),e(835,"p-required"),a(836,"br"),t()()(),n(837,"td",20)(838,"code",21),e(839,"boolean"),t()(),n(840,"td",22)(841,"p")(842,"code"),e(843,"false"),t()()(),n(844,"td",23)(845,"em")(846,"strong"),e(847,"(opcional)"),t()(),n(848,"p"),e(849,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(850,"blockquote")(851,"p"),e(852,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(853,"code"),e(854,"(p-disabled)"),t(),e(855,"."),t()()()(),n(856,"tr",16)(857,"td",17)(858,"div",18)(859,"span",19),e(860," p-required-field-error-message"),a(861,"br"),t()()(),n(862,"td",20)(863,"code",21),e(864,"boolean"),t()(),n(865,"td",22)(866,"p")(867,"code"),e(868,"false"),t()()(),n(869,"td",23)(870,"em")(871,"strong"),e(872,"(opcional)"),t()(),n(873,"p"),e(874,"Exibe a mensagem setada na propriedade "),n(875,"code"),e(876,"p-error-pattern"),t(),e(877," se o campo estiver vazio e for requerido."),t(),n(878,"blockquote")(879,"p"),e(880,"Necess\xE1rio que a propriedade "),n(881,"code"),e(882,"p-required"),t(),e(883," esteja habilitada."),t()()()(),n(884,"tr",16)(885,"td",17)(886,"div",18)(887,"span",19),e(888," p-show-required"),a(889,"br"),t()()(),n(890,"td",20)(891,"code",21),e(892,"boolean"),t()(),n(893,"td",22),e(894,"-"),t(),n(895,"td",23)(896,"p"),e(897,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(898,"blockquote")(899,"p"),e(900,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(901,"ul")(902,"li"),e(903,"N\xE3o possuir "),n(904,"code"),e(905,"p-help"),t(),e(906," e/ou "),n(907,"code"),e(908,"p-label"),t(),e(909,"."),t()()()(),n(910,"tr",16)(911,"td",17)(912,"div",18)(913,"span",19),e(914," p-step"),a(915,"br"),t()()(),n(916,"td",20)(917,"code",28),e(918,"string"),t()(),n(919,"td",22)(920,"p"),e(921,"1"),t()(),n(922,"td",23)(923,"em")(924,"strong"),e(925,"(opcional)"),t()(),n(926,"p"),e(927,"Intervalo."),t()()(),n(928,"tr",16)(929,"td",17)(930,"div",18)(931,"span",19),e(932," p-upper-case"),a(933,"br"),t()()(),n(934,"td",20)(935,"code",21),e(936,"boolean"),t()(),n(937,"td",22),e(938,"-"),t(),n(939,"td",23)(940,"p"),e(941,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(942,"h3",12),e(943,"M\xE9todos"),t(),n(944,"table",32)(945,"tr",16)(946,"th",33)(947,"div",18)(948,"h4")(949,"span",19),e(950," focus "),t()()()()(),n(951,"tr",23)(952,"td",23)(953,"p"),e(954,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(955,"p"),e(956,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(957,"pre")(958,"code"),e(959,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}`),t()()()()(),a(960,"br"),n(961,"h3"),e(962,"Interfaces"),t(),n(963,"h4",34)(964,"code",5),e(965,"ErrorAsyncProperties"),t()(),n(966,"div",2)(967,"p"),e(968,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(969,"h4",12),e(970,"Propriedades"),t(),n(971,"table",13)(972,"tr",14)(973,"th",15),e(974,"Nome"),t(),n(975,"th",15),e(976,"Tipo"),t(),n(977,"th",15),e(978,"Descri\xE7\xE3o"),t()(),n(979,"tr",16)(980,"td",17)(981,"div",18)(982,"span",19),e(983," errorAsync"),a(984,"br"),t()()(),n(985,"td",20)(986,"code",35),e(987,"(value) => Observable<boolean>"),t()(),n(988,"td",23)(989,"p"),e(990,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(991,"code"),e(992,"change"),t(),e(993," ou "),n(994,"code"),e(995,"change-model"),t(),e(996,", dependendo do valor da propriedade "),n(997,"code"),e(998,"triggerMode"),t(),e(999,"."),t()()(),n(1e3,"tr",16)(1001,"td",17)(1002,"div",18)(1003,"span",19),e(1004," triggerMode"),a(1005,"br"),t()()(),n(1006,"td",20)(1007,"code",36),e(1008,"'change' "),t(),n(1009,"code",37),e(1010," 'changeModel'"),t()(),n(1011,"td",23)(1012,"em")(1013,"strong"),e(1014,"(opcional)"),t()(),n(1015,"p"),e(1016,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1017,"code"),e(1018,"change"),t(),e(1019," ou "),n(1020,"code"),e(1021,"change-model"),t(),e(1022,"."),t()()()()())},dependencies:[y],encapsulation:2})}return l})();var ae=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)(z(j),z(G))};static \u0275cmp=h({type:l,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Number",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),a(3,"sample-po-number-doc"),t(),n(4,"po-tab",3),a(5,"sample-po-number-basic-view")(6,"sample-po-number-labs-view")(7,"sample-po-number-calculate-view"),t()()()),r&2&&(b("p-actions",i.actions),m(2),b("p-active",i.activeTab.includes("doc")),m(2),b("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[J,v,C,$,te,ie,oe],encapsulation:2})}return l})();var he=[{path:"",component:ae}],le=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=k({type:l});static \u0275inj=T({imports:[R.forChild(he),R]})}return l})();var Re=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=k({type:l});static \u0275inj=T({imports:[K,le]})}return l})();export{Re as DocPoNumberModule};
