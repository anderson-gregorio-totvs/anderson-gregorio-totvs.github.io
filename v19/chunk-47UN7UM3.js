import{$ as L,$a as M,$c as W,Bc as Z,Cd as oe,F as c,Fa as z,G as u,Ga as e,Ia as y,Ka as g,La as x,Lb as D,Ma as E,Mb as q,Nb as F,Oa as I,Ob as B,Od as ne,Pa as P,Pb as A,Qa as U,T as r,U as T,Ua as J,Va as Q,Wb as X,Xd as C,Yb as Y,Yd as v,Zb as R,_ as b,ad as $,ha as m,ka as w,kb as K,md as ee,na as o,oa as t,oc as N,pa as a,re as k,sd as te,se as ie,ta as V,ua as S,y as O,zc as _}from"./chunk-QVEZB6GT.js";var he=()=>({value:"1",label:"Option 1"}),ge=()=>({value:"2",label:"Option 2"}),xe=(i,be)=>[i,be],ae=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-checkbox-group-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","checkboxGroup","p-label","PO Checkbox Group",3,"p-options"]],template:function(p,n){p&1&&a(0,"po-checkbox-group",0),p&2&&m("p-options",U(3,xe,I(1,he),I(2,ge)))},dependencies:[_],encapsulation:2})}return i})();var Se=i=>({"docs-sample-code-tabs":i}),le=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-checkbox-group-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Group Basic"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox-group
  name="checkboxGroup"
  p-label="PO Checkbox Group"
  [p-options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]"
>
</po-checkbox-group>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-group-basic',
  templateUrl: './sample-po-checkbox-group-basic.component.html',
  standalone: false
})
export class SamplePoCheckboxGroupBasicComponent {}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-checkbox-group-basic"),t(),a(23,"hr")),p&2&&(r(5),w("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel,""),r(),m("ngClass",P(4,Se,n.hideSampleCodeTabs)))},dependencies:[M,k,C,v,ae],encapsulation:2})}return i})();var pe=(()=>{class i{checkboxGroup;columns;disabled;event;help;indeterminate;label;option;options;properties;fieldErrorMessage;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"indeterminate",label:"Indeterminate"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,this.option],this.clearOption()}changeEvent(s){this.event=s}restore(){this.checkboxGroup=void 0,this.columns=void 0,this.disabled=!1,this.event=void 0,this.help="",this.indeterminate=void 0,this.label=void 0,this.options=[],this.properties=[],this.fieldErrorMessage="",this.clearOption()}clearOption(){this.option={label:void 0,value:void 0}}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-checkbox-group-labs"]],standalone:!1,decls:27,vars:27,consts:[["fOption","ngForm"],["f","ngForm"],["name","checkboxGroup",3,"ngModelChange","p-change","ngModel","p-columns","p-disabled","p-help","p-indeterminate","p-label","p-optional","p-options","p-required","p-field-error-message","p-error-limit","p-show-required"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionValue","p-clean","","p-label","Option Value","p-required","",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","optionLabel","p-clean","","p-label","Option Label","p-required","",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","disabled","p-label","Option Disabled",1,"po-lg-4",3,"ngModelChange","ngModel"],["p-label","Add option",1,"po-lg-3",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columns","p-columns","3","p-label","Columns",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","3","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(p,n){if(p&1){let d=V();o(0,"po-checkbox-group",2),E("ngModelChange",function(l){return c(d),x(n.checkboxGroup,l)||(n.checkboxGroup=l),u(l)}),S("p-change",function(){return c(d),u(n.changeEvent("p-change"))}),t(),a(1,"hr"),o(2,"div",3),a(3,"po-info",4),J(4,"json"),a(5,"po-info",5),t(),a(6,"hr"),o(7,"form",null,0)(9,"div",3)(10,"po-input",6),E("ngModelChange",function(l){return c(d),x(n.option.value,l)||(n.option.value=l),u(l)}),t(),o(11,"po-input",7),E("ngModelChange",function(l){return c(d),x(n.option.label,l)||(n.option.label=l),u(l)}),t(),o(12,"po-switch",8),E("ngModelChange",function(l){return c(d),x(n.option.disabled,l)||(n.option.disabled=l),u(l)}),t(),o(13,"po-button",9),S("p-click",function(){return c(d),u(n.addOption())}),t()()(),a(14,"hr"),o(15,"form",null,1)(17,"div",3)(18,"po-input",10),E("ngModelChange",function(l){return c(d),x(n.label,l)||(n.label=l),u(l)}),t(),o(19,"po-input",11),E("ngModelChange",function(l){return c(d),x(n.help,l)||(n.help=l),u(l)}),t()(),o(20,"div",3)(21,"po-input",12),E("ngModelChange",function(l){return c(d),x(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),u(l)}),t()(),o(22,"div",3)(23,"po-radio-group",13),E("ngModelChange",function(l){return c(d),x(n.columns,l)||(n.columns=l),u(l)}),t(),o(24,"po-checkbox-group",14),E("ngModelChange",function(l){return c(d),x(n.properties,l)||(n.properties=l),u(l)}),t()(),o(25,"div",3)(26,"po-button",15),S("p-click",function(){return c(d),u(n.restore())}),t()()()}if(p&2){let d=z(8);g("ngModel",n.checkboxGroup),m("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-indeterminate",n.properties.includes("indeterminate"))("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-show-required",n.properties.includes("showRequired")),r(3),m("p-value",Q(4,25,n.checkboxGroup)),r(2),m("p-value",n.event),r(5),g("ngModel",n.option.value),r(),g("ngModel",n.option.label),r(),g("ngModel",n.option.disabled),r(),m("p-disabled",d.invalid),r(5),g("ngModel",n.label),r(),g("ngModel",n.help),r(2),g("ngModel",n.fieldErrorMessage),r(2),g("ngModel",n.columns),m("p-options",n.columnOptions),r(),g("ngModel",n.properties),m("p-options",n.propertiesOptions)}},dependencies:[A,D,q,B,F,N,_,Z,ee,W,oe,K],encapsulation:2})}return i})();var ke=i=>({"docs-sample-code-tabs":i}),re=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-checkbox-group-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Group Labs"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox-group
  name="checkboxGroup"
  [(ngModel)]="checkboxGroup"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-indeterminate]="properties.includes('indeterminate')"
  [p-label]="label"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-show-required]="properties.includes('showRequired')"
  (p-change)="changeEvent('p-change')"
>
</po-checkbox-group>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="checkboxGroup | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #fOption="ngForm">
  <div class="po-row">
    <po-input class="po-lg-4" name="optionValue" [(ngModel)]="option.value" p-clean p-label="Option Value" p-required>
    </po-input>

    <po-input class="po-lg-4" name="optionLabel" [(ngModel)]="option.label" p-clean p-label="Option Label" p-required>
    </po-input>

    <po-switch class="po-lg-4" name="disabled" [(ngModel)]="option.disabled" p-label="Option Disabled"> </po-switch>

    <po-button class="po-lg-3" p-label="Add option" [p-disabled]="fOption.invalid" (p-click)="addOption()"> </po-button>
  </div>
</form>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-lg-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-lg-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>
  </div>
  <div class="po-row">
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
    <po-radio-group
      class="po-md-6"
      name="columns"
      [(ngModel)]="columns"
      p-columns="3"
      p-label="Columns"
      [p-options]="columnOptions"
    >
    </po-radio-group>

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
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-group-labs',
  templateUrl: './sample-po-checkbox-group-labs.component.html',
  standalone: false
})
export class SamplePoCheckboxGroupLabsComponent implements OnInit {
  checkboxGroup: object;
  columns: number;
  disabled: boolean;
  event: string;
  help: string;
  indeterminate: boolean;
  label: string;
  option: PoCheckboxGroupOption;
  options: Array<PoCheckboxGroupOption>;
  properties: Array<string>;
  fieldErrorMessage: string;

  public readonly columnOptions: Array<PoRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'indeterminate', label: 'Indeterminate' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = [...this.options, this.option];
    this.clearOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.checkboxGroup = undefined;
    this.columns = undefined;
    this.disabled = false;
    this.event = undefined;
    this.help = '';
    this.indeterminate = undefined;
    this.label = undefined;
    this.options = [];
    this.properties = [];
    this.fieldErrorMessage = '';

    this.clearOption();
  }

  private clearOption() {
    this.option = { label: undefined, value: undefined };
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-checkbox-group-labs"),t(),a(23,"hr")),p&2&&(r(5),w("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel,""),r(),m("ngClass",P(4,ke,n.hideSampleCodeTabs)))},dependencies:[M,k,C,v,pe],encapsulation:2})}return i})();var se=(()=>{class i{poNotification;attempts;expiration;maxAttempts;periodExpiration;auditOptions=[{value:"1",label:"Functional menu"},{value:"2",label:"Online panel"},{value:"3",label:"Internet browser"},{value:"4",label:"Browser details"},{value:"5",label:"Transparent panel"},{value:"6",label:"Browser refresh"}];systemOptions=[{value:"1",label:"Audit updates in the data dictionary"},{value:"2",label:"Audit updates in the user registry"},{value:"3",label:"Audit authentication / access"},{value:"4",label:"Audit rejection of access to resources"}];constructor(s){this.poNotification=s}confirm(){this.poNotification.success("Settings saved successfully!")}static \u0275fac=function(p){return new(p||i)(T($))};static \u0275cmp=b({type:i,selectors:[["sample-po-checkbox-group-password-policy"]],standalone:!1,decls:19,vars:7,consts:[["g","ngForm"],[1,"po-font-subtitle"],[1,"po-row"],["name","system","p-label","System features",1,"po-lg-12",3,"p-options"],["name","audit","p-label","Audit rules",1,"po-lg-12",3,"p-options"],["name","expiration","p-label","Password expiration","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","periodExpiration","p-label","Period (in days)","p-maxlength","3",1,"po-lg-6",3,"p-disabled"],["name","attempts","p-label","Restrict access attempts","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","maxAttempts","p-label","Maximum number of attempts","p-maxlength","3",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Apply password policy",1,"po-offset-lg-9","po-lg-3","po-offset-xl-9",3,"p-click"]],template:function(p,n){if(p&1){let d=V();o(0,"div",1),e(1,"Password Rules"),t(),a(2,"hr"),o(3,"form",null,0)(5,"div",2),a(6,"po-checkbox-group",3),t(),a(7,"hr"),o(8,"div",2),a(9,"po-checkbox-group",4),t(),a(10,"hr"),o(11,"div",2)(12,"po-switch",5),E("ngModelChange",function(l){return c(d),x(n.expiration,l)||(n.expiration=l),u(l)}),t(),a(13,"po-number",6),t(),o(14,"div",2)(15,"po-switch",7),E("ngModelChange",function(l){return c(d),x(n.attempts,l)||(n.attempts=l),u(l)}),t(),o(16,"po-number",8),E("ngModelChange",function(l){return c(d),x(n.maxAttempts,l)||(n.maxAttempts=l),u(l)}),t()(),o(17,"div",2)(18,"po-button",9),S("p-click",function(){return c(d),u(n.confirm())}),t()()()}p&2&&(r(6),m("p-options",n.systemOptions),r(3),m("p-options",n.auditOptions),r(3),g("ngModel",n.expiration),r(),m("p-disabled",!n.expiration),r(2),g("ngModel",n.attempts),r(),g("ngModel",n.maxAttempts),m("p-disabled",!n.attempts))},dependencies:[A,D,q,B,F,N,_,te,W],encapsulation:2})}return i})();var Pe=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-checkbox-group-password-policy-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Group \u2013 Security policy"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html"),t(),o(13,"pre",7),e(14,`<div class="po-font-subtitle">Password Rules</div>

<hr />

<form #g="ngForm">
  <div class="po-row">
    <po-checkbox-group class="po-lg-12" name="system" p-label="System features" [p-options]="systemOptions">
    </po-checkbox-group>
  </div>

  <hr />

  <div class="po-row">
    <po-checkbox-group class="po-lg-12" name="audit" p-label="Audit rules" [p-options]="auditOptions">
    </po-checkbox-group>
  </div>

  <hr />

  <div class="po-row">
    <po-switch
      class="po-lg-6"
      name="expiration"
      [(ngModel)]="expiration"
      p-label="Password expiration"
      p-label-off="Desactive"
      p-label-on="Actived"
    >
    </po-switch>

    <po-number
      class="po-lg-6"
      name="periodExpiration"
      p-label="Period (in days)"
      p-maxlength="3"
      [p-disabled]="!expiration"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-switch
      class="po-lg-6"
      name="attempts"
      [(ngModel)]="attempts"
      p-label="Restrict access attempts"
      p-label-off="Desactive"
      p-label-on="Actived"
    >
    </po-switch>

    <po-number
      class="po-lg-6"
      name="maxAttempts"
      [(ngModel)]="maxAttempts"
      p-label="Maximum number of attempts"
      p-maxlength="3"
      [p-disabled]="!attempts"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-offset-lg-9 po-lg-3 po-offset-xl-9" p-label="Apply password policy" (p-click)="confirm()">
    </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-group-password-policy',
  templateUrl: './sample-po-checkbox-group-password-policy.component.html',
  standalone: false
})
export class SamplePoCheckboxGroupPasswordPolicyComponent {
  attempts: number;
  expiration: number;
  maxAttempts: boolean;
  periodExpiration: boolean;

  public readonly auditOptions: Array<PoCheckboxGroupOption> = [
    { value: '1', label: 'Functional menu' },
    { value: '2', label: 'Online panel' },
    { value: '3', label: 'Internet browser' },
    { value: '4', label: 'Browser details' },
    { value: '5', label: 'Transparent panel' },
    { value: '6', label: 'Browser refresh' }
  ];

  public readonly systemOptions: Array<PoCheckboxGroupOption> = [
    { value: '1', label: 'Audit updates in the data dictionary' },
    { value: '2', label: 'Audit updates in the user registry' },
    { value: '3', label: 'Audit authentication / access' },
    { value: '4', label: 'Audit rejection of access to resources' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  confirm() {
    this.poNotification.success('Settings saved successfully!');
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-checkbox-group-password-policy"),t(),a(23,"hr")),p&2&&(r(5),w("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel,""),r(),m("ngClass",P(4,Pe,n.hideSampleCodeTabs)))},dependencies:[M,k,C,v,se],encapsulation:2})}return i})();var de=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-checkbox-group-doc"]],standalone:!1,decls:556,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-radio-group"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoCheckboxGroupOption[]"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(p,n){p&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),o(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),o(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),o(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),o(16,"h3",3),e(17,"Componente"),t(),o(18,"h4",4)(19,"code",5),e(20,"PoCheckboxGroupComponent"),t()(),o(21,"div",2)(22,"p"),e(23,"O componente "),o(24,"code"),e(25,"po-checkbox-group"),t(),e(26,` exibe uma lista de m\xFAltipla escolha onde o usu\xE1rio pode marcar e desmarcar,
utilizando a tecla de espa\xE7o ou o clique do mouse, v\xE1rias op\xE7\xF5es.`),t(),o(27,"blockquote")(28,"p"),e(29,"Para sele\xE7\xE3o \xFAnica, utilize o "),o(30,"a",6)(31,"strong"),e(32,"PO Radio Group"),t()(),e(33,"."),t()(),o(34,"p"),e(35,"Por padr\xE3o, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model."),t(),o(36,"pre")(37,"code"),e(38,"favorites = ['PO', 'Angular'];"),t()(),o(39,"p"),e(40,`Na maioria das situa\xE7\xF5es, o array com os objetos setados j\xE1 atende as necessidades mas, caso o desenvolvedor
tenha necessidade de usar um valor indeterminado (`),o(41,"code"),e(42,"null"),t(),e(43,"), ou seja, nem marcado ("),o(44,"code"),e(45,"true"),t(),e(46,") e nem desmarcado ("),o(47,"code"),e(48,"false"),t(),e(49,`),
deve setar a propriedade `),o(50,"code"),e(51,"p-indeterminate"),t(),e(52," como "),o(53,"code"),e(54,"true"),t(),e(55,"."),t(),o(56,"p"),e(57,"Nesse caso, o po-checkbox-group vai retornar um objeto com todas as op\xE7\xF5es dispon\xEDveis e seus valores."),t(),o(58,"pre")(59,"code"),e(60,`favorites = {
 PO: true,
 Angular: true,
 VueJS: false,
 React: null // indeterminado
};`),t()()(),o(61,"div",7)(62,"h4",8),e(63,"Seletor"),t(),o(64,"pre",9),e(65,`<po-checkbox-group
    p-auto-focus="boolean"
    (p-change)="EventEmitter"
    p-columns="number"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    p-indeterminate="boolean"
    p-label="string"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="PoCheckboxGroupOption[]"
    p-required="boolean"
    p-show-required="boolean" >
</po-checkbox-group>
`),t()(),o(66,"h4",10),e(67,"Propriedades"),t(),o(68,"table",11)(69,"tr",12)(70,"th",13),e(71,"Nome"),t(),o(72,"th",13),e(73,"Tipo"),t(),o(74,"th",13),e(75,"Padr\xE3o"),t(),o(76,"th",13),e(77,"Descri\xE7\xE3o"),t()(),o(78,"tr",14)(79,"td",15)(80,"div",16)(81,"span",17),e(82," p-auto-focus"),a(83,"br"),t()()(),o(84,"td",18)(85,"code",19),e(86,"boolean"),t()(),o(87,"td",20)(88,"p")(89,"code"),e(90,"false"),t()()(),o(91,"td",21)(92,"em")(93,"strong"),e(94,"(opcional)"),t()(),o(95,"p"),e(96,"Aplica foco no elemento ao ser iniciado."),t(),o(97,"blockquote")(98,"p"),e(99,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),o(100,"tr",14)(101,"td",15)(102,"div",22)(103,"span",23),e(104," (p-change)"),a(105,"br"),t()()(),o(106,"td",18)(107,"code",24),e(108,"EventEmitter"),t()(),o(109,"td",20),e(110,"-"),t(),o(111,"td",21)(112,"em")(113,"strong"),e(114,"(opcional)"),t()(),o(115,"p"),e(116,"Evento disparado ao alterar valor do campo"),t()()(),o(117,"tr",14)(118,"td",15)(119,"div",16)(120,"span",17),e(121," p-columns"),a(122,"br"),t()()(),o(123,"td",18)(124,"code",25),e(125,"number"),t()(),o(126,"td",20)(127,"p")(128,"code"),e(129,"2"),t()()(),o(130,"td",21)(131,"em")(132,"strong"),e(133,"(opcional)"),t()(),o(134,"p"),e(135,"Possibilita definir a quantidade de colunas para exibi\xE7\xE3o dos itens do "),o(136,"em"),e(137,"checkbox"),t(),e(138,"."),t(),o(139,"ul")(140,"li"),e(141,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),o(142,"code"),e(143,"1"),t(),e(144," e "),o(145,"code"),e(146,"4"),t(),e(147," colunas."),t(),o(148,"li"),e(149,"Para resolu\xE7\xE3o "),o(150,"code"),e(151,"sm"),t(),e(152," a colunagem invariavelmente passa para "),o(153,"code"),e(154,"1"),t(),e(155," coluna."),t(),o(156,"li"),e(157,"Quando se trata de resolu\xE7\xE3o "),o(158,"code"),e(159,"md"),t(),e(160," e o valor estabelecido para colunas for superior a "),o(161,"code"),e(162,"2"),t(),e(163,`,
o `),o(164,"em"),e(165,"grid system"),t(),e(166," ser\xE1 composto por "),o(167,"code"),e(168,"2"),t(),e(169," colunas."),t(),o(170,"li"),e(171,"Para evitar a quebra de linha, prefira a utiliza\xE7\xE3o de "),o(172,"code"),e(173,"1"),t(),e(174," coluna para op\xE7\xF5es com textos grandes."),t()()()(),o(175,"tr",14)(176,"td",15)(177,"div",16)(178,"span",17),e(179," p-disabled"),a(180,"br"),t()()(),o(181,"td",18)(182,"code",19),e(183,"boolean"),t()(),o(184,"td",20)(185,"p")(186,"code"),e(187,"false"),t()()(),o(188,"td",21)(189,"em")(190,"strong"),e(191,"(opcional)"),t()(),o(192,"p"),e(193,"Desabilita todos os itens do checkbox."),t()()(),o(194,"tr",14)(195,"td",15)(196,"div",16)(197,"span",17),e(198," p-error-limit"),a(199,"br"),t()()(),o(200,"td",18)(201,"code",19),e(202,"boolean"),t()(),o(203,"td",20)(204,"p")(205,"code"),e(206,"false"),t()()(),o(207,"td",21)(208,"em")(209,"strong"),e(210,"(opcional)"),t()(),o(211,"p"),e(212,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),o(213,"blockquote")(214,"p"),e(215,"Caso essa propriedade seja definida como "),o(216,"code"),e(217,"true"),t(),e(218,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),o(219,"tr",14)(220,"td",15)(221,"div",16)(222,"span",17),e(223," p-field-error-message"),a(224,"br"),t()()(),o(225,"td",18)(226,"code",26),e(227,"string"),t()(),o(228,"td",20),e(229,"-"),t(),o(230,"td",21)(231,"em")(232,"strong"),e(233,"(opcional)"),t()(),o(234,"p"),e(235,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),o(236,"blockquote")(237,"p"),e(238,"Necess\xE1rio que a propriedade "),o(239,"code"),e(240,"p-required"),t(),e(241," esteja habilitada."),t()()()(),o(242,"tr",14)(243,"td",15)(244,"div",16)(245,"span",17),e(246," p-help"),a(247,"br"),t()()(),o(248,"td",18)(249,"code",26),e(250,"string"),t()(),o(251,"td",20),e(252,"-"),t(),o(253,"td",21)(254,"em")(255,"strong"),e(256,"(opcional)"),t()(),o(257,"p"),e(258,"Texto de apoio do campo"),t()()(),o(259,"tr",14)(260,"td",15)(261,"div",16)(262,"span",17),e(263," p-indeterminate"),a(264,"br"),t()()(),o(265,"td",18)(266,"code",19),e(267,"boolean"),t()(),o(268,"td",20)(269,"p")(270,"code"),e(271,"false"),t()()(),o(272,"td",21)(273,"em")(274,"strong"),e(275,"(opcional)"),t()(),o(276,"p"),e(277,"Caso exista a necessidade de usar o valor indeterminado ("),o(278,"code"),e(279,"null"),t(),e(280,`) dentro da lista de op\xE7\xF5es, \xE9 necess\xE1rio setar
a propriedade `),o(281,"code"),e(282,"p-indeterminate"),t(),e(283," como "),o(284,"code"),e(285,"true"),t(),e(286,", por padr\xE3o essa propriedade vem desabilitada ("),o(287,"code"),e(288,"false"),t(),e(289,")."),t(),o(290,"p"),e(291,"Quando essa propriedade \xE9 setada como "),o(292,"code"),e(293,"true"),t(),e(294,", o "),o(295,"em"),e(296,"po-checkbox-group"),t(),e(297,` passa a devolver um objeto completo para o
`),o(298,"code"),e(299,"ngModel"),t(),e(300,", diferente do array que cont\xE9m apenas os valores selecionados."),t()()(),o(301,"tr",14)(302,"td",15)(303,"div",16)(304,"span",17),e(305," p-label"),a(306,"br"),t()()(),o(307,"td",18)(308,"code",26),e(309,"string"),t()(),o(310,"td",20),e(311,"-"),t(),o(312,"td",21)(313,"em")(314,"strong"),e(315,"(opcional)"),t()(),o(316,"p"),e(317,"Label do campo"),t()()(),o(318,"tr",14)(319,"td",15)(320,"div",16)(321,"span",17),e(322," name"),a(323,"br"),t()()(),o(324,"td",18)(325,"code",26),e(326,"string"),t()(),o(327,"td",20),e(328,"-"),t(),o(329,"td",21)(330,"p"),e(331,"Nome dos checkboxes"),t()()(),o(332,"tr",14)(333,"td",15)(334,"div",22)(335,"span",23),e(336," (ngModelChange)"),a(337,"br"),t()()(),o(338,"td",18)(339,"code",24),e(340,"EventEmitter"),t()(),o(341,"td",20),e(342,"-"),t(),o(343,"td",21)(344,"em")(345,"strong"),e(346,"(opcional)"),t()(),o(347,"p"),e(348,"Fun\xE7\xE3o para atualizar o "),o(349,"code"),e(350,"ngModel"),t(),e(351," do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),t(),o(352,"p"),e(353,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),o(354,"code"),e(355,"strictTemplates"),t(),e(356,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),t(),o(357,"pre")(358,"code"),e(359,'<po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>'),t()()()(),o(360,"tr",14)(361,"td",15)(362,"div",16)(363,"span",17),e(364," p-optional"),a(365,"br"),t()()(),o(366,"td",18)(367,"code",19),e(368,"boolean"),t()(),o(369,"td",20)(370,"p")(371,"code"),e(372,"false"),t()()(),o(373,"td",21)(374,"em")(375,"strong"),e(376,"(opcional)"),t()(),o(377,"p"),e(378,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),o(379,"blockquote")(380,"p"),e(381,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(382,"ul")(383,"li"),e(384,"O campo conter "),o(385,"code"),e(386,"p-required"),t(),e(387,";"),t(),o(388,"li"),e(389,"N\xE3o possuir "),o(390,"code"),e(391,"p-help"),t(),e(392," e/ou "),o(393,"code"),e(394,"p-label"),t(),e(395,"."),t()()()(),o(396,"tr",14)(397,"td",15)(398,"div",16)(399,"span",17),e(400," p-options"),a(401,"br"),t()()(),o(402,"td",18)(403,"code",27),e(404,"PoCheckboxGroupOption[]"),t()(),o(405,"td",20),e(406,"-"),t(),o(407,"td",21)(408,"em")(409,"strong"),e(410,"(opcional)"),t()(),o(411,"p"),e(412,`Lista de op\xE7\xF5es que ser\xE3o exibidas
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption`),t()()(),o(413,"tr",14)(414,"td",15)(415,"div",16)(416,"span",17),e(417," p-required"),a(418,"br"),t()()(),o(419,"td",18)(420,"code",19),e(421,"boolean"),t()(),o(422,"td",20)(423,"p")(424,"code"),e(425,"false"),t()()(),o(426,"td",21)(427,"em")(428,"strong"),e(429,"(opcional)"),t()(),o(430,"p"),e(431,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),o(432,"tr",14)(433,"td",15)(434,"div",16)(435,"span",17),e(436," p-show-required"),a(437,"br"),t()()(),o(438,"td",18)(439,"code",19),e(440,"boolean"),t()(),o(441,"td",20),e(442,"-"),t(),o(443,"td",21)(444,"p"),e(445,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),o(446,"blockquote")(447,"p"),e(448,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(449,"ul")(450,"li"),e(451,"N\xE3o possuir "),o(452,"code"),e(453,"p-help"),t(),e(454," e/ou "),o(455,"code"),e(456,"p-label"),t(),e(457,"."),t()()()()(),o(458,"h3",10),e(459,"M\xE9todos"),t(),o(460,"table",28)(461,"tr",14)(462,"th",29)(463,"div",16)(464,"h4")(465,"span",17),e(466," focus "),t()()()()(),o(467,"tr",21)(468,"td",21)(469,"p"),e(470,"Fun\xE7\xE3o que atribui foco ao componente."),t(),o(471,"p"),e(472,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),o(473,"pre")(474,"code"),e(475,`import { PoCheckboxGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;

focusCheckbox() {
  this.checkbox.focus();
}`),t()()()()(),a(476,"br"),o(477,"h3"),e(478,"Interfaces"),t(),o(479,"h4",30)(480,"code",5),e(481,"PoCheckboxGroupOption"),t()(),o(482,"div",2)(483,"p"),e(484,"Interface para as a\xE7\xF5es do componente po-checkbox-group."),t()(),o(485,"h4",10),e(486,"Propriedades"),t(),o(487,"table",11)(488,"tr",12)(489,"th",13),e(490,"Nome"),t(),o(491,"th",13),e(492,"Tipo"),t(),o(493,"th",13),e(494,"Descri\xE7\xE3o"),t()(),o(495,"tr",14)(496,"td",15)(497,"div",16)(498,"span",17),e(499," disabled"),a(500,"br"),t()()(),o(501,"td",18)(502,"code",19),e(503,"boolean"),t()(),o(504,"td",21)(505,"em")(506,"strong"),e(507,"(opcional)"),t()(),o(508,"p"),e(509,"Desabilita o checkbox, por padr\xE3o as op\xE7\xF5es sempre estar\xE3o habilitadas para o usu\xE1rio."),t(),o(510,"p"),e(511,`Mesmo desabilitado o desenvolvedor pode alterar o valor do item via c\xF3digo, mas n\xE3o ser\xE1 permitido ao
usu\xE1rio alterar a condi\xE7\xE3o do checkbox.`),t()()(),o(512,"tr",14)(513,"td",15)(514,"div",16)(515,"span",17),e(516," label"),a(517,"br"),t()()(),o(518,"td",18)(519,"code",26),e(520,"string"),t()(),o(521,"td",21)(522,"p"),e(523,"Texto exibido para o usu\xE1rio ao lado do checkbox."),t()()(),o(524,"tr",14)(525,"td",15)(526,"div",16)(527,"span",17),e(528," value"),a(529,"br"),t()()(),o(530,"td",18)(531,"code",26),e(532,"string"),t()(),o(533,"td",21)(534,"p"),e(535,"Valor retornado no model."),t(),o(536,"p"),e(537,"\xC9 poss\xEDvel usar os valores "),o(538,"code"),e(539,"true"),t(),e(540," e "),o(541,"code"),e(542,"false"),t(),e(543,", caso a propriedade "),o(544,"code"),e(545,"p-indeterminate"),t(),e(546," esteja setada como "),o(547,"code"),e(548,"true"),t(),e(549,`
passa a aceitar `),o(550,"code"),e(551,"null"),t(),e(552," tamb\xE9m, por padr\xE3o esse valor sempre ser\xE1 setado como "),o(553,"code"),e(554,"false"),t(),e(555,"."),t()()()()())},dependencies:[k],encapsulation:2})}return i})();var ce=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,p){this.route=s,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let p=s.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||i)(T(X),T(Y))};static \u0275cmp=b({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Checkbox Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(p,n){p&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),a(3,"sample-po-checkbox-group-doc"),t(),o(4,"po-tab",3),a(5,"sample-po-checkbox-group-basic-view")(6,"sample-po-checkbox-group-labs-view")(7,"sample-po-checkbox-group-password-policy-view"),t()()()),p&2&&(m("p-actions",n.actions),r(2),m("p-active",n.activeTab.includes("doc")),r(2),m("p-hide",n.hidePoWebSample)("p-active",n.activeTab.includes("web")))},dependencies:[ne,C,v,le,re,me,de],encapsulation:2})}return i})();var Ge=[{path:"",component:ce}],ue=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275mod=L({type:i});static \u0275inj=O({imports:[R.forChild(Ge),R]})}return i})();var $e=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275mod=L({type:i});static \u0275inj=O({imports:[ie,ue]})}return i})();export{$e as DocPoCheckboxGroupModule};
