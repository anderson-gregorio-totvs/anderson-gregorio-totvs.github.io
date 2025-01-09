import{$ as L,$a as _,Cd as J,F as m,Fa as H,G as c,Ga as e,Ia as y,Jc as z,Ka as g,La as h,Lb as F,Ma as b,Mb as N,Na as j,Nb as R,Ob as B,Od as X,Pa as M,Pb as W,T as d,U as T,Wb as G,Xd as f,Yb as Q,Yd as v,Zb as O,_ as S,ha as u,ka as C,md as Y,na as n,oa as t,oc as A,pa as i,re as P,sd as Z,se as K,ta as V,td as k,ua as w,y as D,zc as U}from"./chunk-PI3TYJHE.js";var $=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","password","p-label","PO Password"]],template:function(l,o){l&1&&i(0,"po-password",0)},dependencies:[k],encapsulation:2})}return a})();var pe=a=>({"docs-sample-code-tabs":a}),te=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password Basic"),t(),n(4,"a",2),w("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-basic/sample-po-password-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-password name="password" p-label="PO Password"> </po-password>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-password-basic/sample-po-password-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-password-basic',
  templateUrl: './sample-po-password-basic.component.html',
  standalone: false
})
export class SamplePoPasswordBasicComponent {}
`),t()()()()(),n(21,"div",10),i(22,"sample-po-password-basic"),t(),i(23,"hr")),l&2&&(d(5),C("po-icon "+o.sampleCodeButtonIcon),d(),y(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",M(4,pe,o.hideSampleCodeTabs)))},dependencies:[_,P,f,v,$],encapsulation:2})}return a})();var ne=(()=>{class a{errorPattern;event;help;label;mask;maxlength;minlength;password;pattern;placeholder;properties;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"hidepasswordpeek",label:"Hide Password Peek"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"}];ngOnInit(){this.restore()}changeEvent(s){this.event=s}restore(){this.errorPattern=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.password=void 0,this.pattern="",this.placeholder="",this.properties=[]}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-labs"]],standalone:!1,decls:23,vars:29,consts:[["f","ngForm"],["name","password",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","ngModel","p-clean","p-disabled","p-error-pattern","p-help","p-hide-password-peek","p-label","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-12",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,o){if(l&1){let p=V();n(0,"po-password",1),b("ngModelChange",function(r){return m(p),h(o.password,r)||(o.password=r),c(r)}),w("p-blur",function(){return m(p),c(o.changeEvent("p-blur"))})("p-change",function(){return m(p),c(o.changeEvent("p-change"))})("p-change-model",function(){return m(p),c(o.changeEvent("p-change-model"))})("p-enter",function(){return m(p),c(o.changeEvent("p-enter"))}),t(),i(1,"hr"),n(2,"div",2),i(3,"po-info",3)(4,"po-info",4),t(),i(5,"hr"),n(6,"form",null,0)(8,"div",2)(9,"po-input",5),b("ngModelChange",function(r){return m(p),h(o.label,r)||(o.label=r),c(r)}),t(),n(10,"po-input",6),b("ngModelChange",function(r){return m(p),h(o.help,r)||(o.help=r),c(r)}),t()(),n(11,"div",2)(12,"po-input",7),b("ngModelChange",function(r){return m(p),h(o.placeholder,r)||(o.placeholder=r),c(r)}),t(),n(13,"po-input",8),b("ngModelChange",function(r){return m(p),h(o.errorPattern,r)||(o.errorPattern=r),c(r)}),t()(),n(14,"div",2)(15,"po-input",9),b("ngModelChange",function(r){return m(p),h(o.pattern,r)||(o.pattern=r),c(r)}),t()(),n(16,"div",2)(17,"po-number",10),b("ngModelChange",function(r){return m(p),h(o.minlength,r)||(o.minlength=r),c(r)}),t(),n(18,"po-number",11),b("ngModelChange",function(r){return m(p),h(o.maxlength,r)||(o.maxlength=r),c(r)}),t()(),n(19,"div",2)(20,"po-checkbox-group",12),b("ngModelChange",function(r){return m(p),h(o.properties,r)||(o.properties=r),c(r)}),t()(),n(21,"div",2)(22,"po-button",13),w("p-click",function(){return m(p),c(o.restore())}),t()()()}l&2&&(g("ngModel",o.password),u("p-clean",o.properties.includes("clean"))("p-disabled",o.properties.includes("disabled"))("p-error-pattern",o.errorPattern)("p-help",o.help)("p-hide-password-peek",o.properties.includes("hidepasswordpeek"))("p-label",o.label)("p-maxlength",o.maxlength)("p-minlength",o.minlength)("p-no-autocomplete",o.properties==null?null:o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-pattern",o.pattern)("p-placeholder",o.placeholder)("p-readonly",o.properties.includes("readonly"))("p-required",o.properties.includes("required"))("p-required-field-error-message",o.properties.includes("requiredFieldErrorMessage"))("p-show-required",o.properties.includes("showRequired"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit")),d(3),u("p-value",o.password),d(),u("p-value",o.event),d(5),g("ngModel",o.label),d(),g("ngModel",o.help),d(2),g("ngModel",o.placeholder),d(),g("ngModel",o.errorPattern),d(2),g("ngModel",o.pattern),d(2),g("ngModel",o.minlength),d(),g("ngModel",o.maxlength),d(2),g("ngModel",o.properties),u("p-options",o.propertiesOptions))},dependencies:[W,F,N,B,R,A,U,Y,Z,k,J],encapsulation:2})}return a})();var Ee=a=>({"docs-sample-code-tabs":a}),oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password Labs"),t(),n(4,"a",2),w("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-labs/sample-po-password-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-password
  name="password"
  [(ngModel)]="password"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-hide-password-peek]="properties.includes('hidepasswordpeek')"
  [p-label]="label"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-pattern]="pattern"
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
</po-password>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="password"> </po-info>

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
    <po-input
      class="po-md-12"
      name="pattern"
      [(ngModel)]="pattern"
      p-clean
      p-help="Ex.: '[a-zA]{5}[Z0-9]{3}'"
      p-label="Pattern (Regex)"
    >
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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-password-labs/sample-po-password-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-password-labs',
  templateUrl: './sample-po-password-labs.component.html',
  standalone: false
})
export class SamplePoPasswordLabsComponent implements OnInit {
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  mask: string;
  maxlength: number;
  minlength: number;
  password: string;
  pattern: string;
  placeholder: string;
  properties: Array<string>;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'hidepasswordpeek', label: 'Hide Password Peek' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.errorPattern = undefined;
    this.event = undefined;
    this.help = undefined;
    this.label = undefined;
    this.maxlength = undefined;
    this.minlength = undefined;
    this.password = undefined;
    this.pattern = '';
    this.placeholder = '';
    this.properties = [];
  }
}
`),t()()()()(),n(21,"div",10),i(22,"sample-po-password-labs"),t(),i(23,"hr")),l&2&&(d(5),C("po-icon "+o.sampleCodeButtonIcon),d(),y(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",M(4,Ee,o.hideSampleCodeTabs)))},dependencies:[_,P,f,v,ne],encapsulation:2})}return a})();var ie=(()=>{class a{poAlert;confirmNewPassword;currentPassword;errorPattern;help="Initial password = 123456";newPassword;password="123456";constructor(s){this.poAlert=s}setPassword(){this.confirmNewPassword===this.newPassword?(this.password=this.newPassword,this.help=`Actual password = ${this.password}`,this.currentPassword=void 0,this.newPassword=void 0,this.confirmNewPassword=void 0,this.poAlert.alert({title:"Password Reset",message:"Password saved successfully",ok:()=>this.reset()})):this.poAlert.alert({title:"Password Error",message:"Your (new passsword) is different of (confirm new password)",ok:()=>this.reset()})}reset(){this.newPassword=void 0,this.confirmNewPassword=void 0}static \u0275fac=function(l){return new(l||a)(T(z))};static \u0275cmp=S({type:a,selectors:[["sample-po-password-reset"]],standalone:!1,features:[j([z])],decls:7,vars:7,consts:[["passwordForm","ngForm"],["name","currentPassword","p-clean","","p-error-pattern","invalid password","p-label","Current Password","p-mask","999999","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-help"],["name","newPassword","p-clean","","p-error-pattern","invalid password","p-label","New password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","confirmNewPassword","p-clean","","p-error-pattern","invalid password","p-label","Confirm New Password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],[1,"po-row"],["p-label","Save",1,"po-md-4",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let p=V();n(0,"form",null,0)(2,"po-password",1),b("ngModelChange",function(r){return m(p),h(o.currentPassword,r)||(o.currentPassword=r),c(r)}),t(),n(3,"po-password",2),b("ngModelChange",function(r){return m(p),h(o.newPassword,r)||(o.newPassword=r),c(r)}),t(),n(4,"po-password",3),b("ngModelChange",function(r){return m(p),h(o.confirmNewPassword,r)||(o.confirmNewPassword=r),c(r)}),t(),n(5,"div",4)(6,"po-button",5),w("p-click",function(){return m(p),c(o.setPassword())}),t()()()}if(l&2){let p=H(1);d(2),g("ngModel",o.currentPassword),u("p-help",o.help),d(),g("ngModel",o.newPassword),u("p-disabled",o.currentPassword!==o.password),d(),g("ngModel",o.confirmNewPassword),u("p-disabled",o.currentPassword!==o.password),d(2),u("p-disabled",p.invalid)}},dependencies:[W,F,N,B,R,A,k],encapsulation:2})}return a})();var he=a=>({"docs-sample-code-tabs":a}),ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-reset-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password - Reset"),t(),n(4,"a",2),w("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-reset/sample-po-password-reset.component.html"),t(),n(13,"pre",7),e(14,`<form #passwordForm="ngForm">
  <po-password
    class="po-sm-12"
    name="currentPassword"
    [(ngModel)]="currentPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="Current Password"
    p-mask="999999"
    p-required
    [p-help]="help"
  >
  </po-password>

  <po-password
    class="po-sm-12"
    name="newPassword"
    [(ngModel)]="newPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="New password"
    p-mask="999999"
    p-minlength="6"
    p-required
    [p-disabled]="currentPassword !== password"
  >
  </po-password>

  <po-password
    class="po-sm-12"
    name="confirmNewPassword"
    [(ngModel)]="confirmNewPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="Confirm New Password"
    p-mask="999999"
    p-minlength="6"
    p-required
    [p-disabled]="currentPassword !== password"
  >
  </po-password>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Save" [p-disabled]="passwordForm.invalid" (p-click)="setPassword()">
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-password-reset/sample-po-password-reset.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-password-reset',
  templateUrl: './sample-po-password-reset.component.html',
  providers: [PoDialogService],
  standalone: false
})
export class SamplePoPasswordResetComponent {
  confirmNewPassword: string;
  currentPassword: string;
  errorPattern: string;
  help: string = 'Initial password = 123456';
  newPassword: string;
  password: string = '123456';

  constructor(private poAlert: PoDialogService) {}

  setPassword() {
    if (this.confirmNewPassword === this.newPassword) {
      this.password = this.newPassword;
      this.help = \`Actual password = \${this.password}\`;
      this.currentPassword = undefined;
      this.newPassword = undefined;
      this.confirmNewPassword = undefined;

      this.poAlert.alert({
        title: 'Password Reset',
        message: 'Password saved successfully',
        ok: () => this.reset()
      });
    } else {
      this.poAlert.alert({
        title: 'Password Error',
        message: 'Your (new passsword) is different of (confirm new password)',
        ok: () => this.reset()
      });
    }
  }

  reset() {
    this.newPassword = undefined;
    this.confirmNewPassword = undefined;
  }
}
`),t()()()()(),n(21,"div",10),i(22,"sample-po-password-reset"),t(),i(23,"hr")),l&2&&(d(5),C("po-icon "+o.sampleCodeButtonIcon),d(),y(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",M(4,he,o.hideSampleCodeTabs)))},dependencies:[_,P,f,v,ie],encapsulation:2})}return a})();var re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-doc"]],standalone:!1,decls:1003,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoPasswordComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4",6),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),i(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",7),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",8),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),i(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),i(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),i(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),i(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),n(209,"p"),i(210,"br"),e(211," O "),n(212,"code"),e(213,"po-password"),t(),e(214," \xE9 um input espec\xEDfico para senhas. J\xE1 possui tipo, estilo e \xEDcone predefinidos."),t()(),n(215,"div",9)(216,"h4",10),e(217,"Seletor"),t(),n(218,"pre",11),e(219,`<po-password
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
    p-hide-password-peek="boolean"
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
</po-password>
`),t()(),n(220,"h4",12),e(221,"Propriedades"),t(),n(222,"table",13)(223,"tr",14)(224,"th",15),e(225,"Nome"),t(),n(226,"th",15),e(227,"Tipo"),t(),n(228,"th",15),e(229,"Padr\xE3o"),t(),n(230,"th",15),e(231,"Descri\xE7\xE3o"),t()(),n(232,"tr",16)(233,"td",17)(234,"div",18)(235,"span",19),e(236," p-auto-focus"),i(237,"br"),t()()(),n(238,"td",20)(239,"code",21),e(240,"boolean"),t()(),n(241,"td",22)(242,"p")(243,"code"),e(244,"false"),t()()(),n(245,"td",23)(246,"em")(247,"strong"),e(248,"(opcional)"),t()(),n(249,"p"),e(250,"Aplica foco no elemento ao ser iniciado."),t(),n(251,"blockquote")(252,"p"),e(253,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(254,"tr",16)(255,"td",17)(256,"div",24)(257,"span",25),e(258," (p-blur)"),i(259,"br"),t()()(),n(260,"td",20)(261,"code",26),e(262,"EventEmitter"),t()(),n(263,"td",22),e(264,"-"),t(),n(265,"td",23)(266,"em")(267,"strong"),e(268,"(opcional)"),t()(),n(269,"p"),e(270,"Evento disparado ao sair do campo."),t()()(),n(271,"tr",16)(272,"td",17)(273,"div",24)(274,"span",25),e(275," (p-change)"),i(276,"br"),t()()(),n(277,"td",20)(278,"code",26),e(279,"EventEmitter"),t()(),n(280,"td",22),e(281,"-"),t(),n(282,"td",23)(283,"em")(284,"strong"),e(285,"(opcional)"),t()(),n(286,"p"),e(287,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(288,"tr",16)(289,"td",17)(290,"div",24)(291,"span",25),e(292," (p-change-model)"),i(293,"br"),t()()(),n(294,"td",20)(295,"code",26),e(296,"EventEmitter"),t()(),n(297,"td",22),e(298,"-"),t(),n(299,"td",23)(300,"em")(301,"strong"),e(302,"(opcional)"),t()(),n(303,"p"),e(304,"Evento disparado ao alterar valor do model."),t()()(),n(305,"tr",16)(306,"td",17)(307,"div",18)(308,"span",19),e(309,"p-clean"),i(310,"br"),t()()(),n(311,"td",20)(312,"code",21),e(313,"boolean"),t()(),n(314,"td",22),e(315,"-"),t(),n(316,"td",23)(317,"em")(318,"strong"),e(319,"(opcional)"),t()(),n(320,"p"),e(321,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(322,"tr",16)(323,"td",17)(324,"div",18)(325,"span",19),e(326,"p-disabled"),i(327,"br"),t()()(),n(328,"td",20)(329,"code",21),e(330,"boolean"),t()(),n(331,"td",22)(332,"p")(333,"code"),e(334,"false"),t()()(),n(335,"td",23)(336,"em")(337,"strong"),e(338,"(opcional)"),t()(),n(339,"p"),e(340,"Se verdadeiro, desabilita o campo."),t()()(),n(341,"tr",16)(342,"td",17)(343,"div",18)(344,"span",19),e(345," p-emit-all-changes"),i(346,"br"),t()()(),n(347,"td",20)(348,"code",21),e(349,"boolean"),t()(),n(350,"td",22)(351,"p")(352,"code"),e(353,"false"),t()()(),n(354,"td",23)(355,"em")(356,"strong"),e(357,"(opcional)"),t()(),n(358,"p"),e(359,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(360,"tr",16)(361,"td",17)(362,"div",24)(363,"span",25),e(364," (p-enter)"),i(365,"br"),t()()(),n(366,"td",20)(367,"code",26),e(368,"EventEmitter"),t()(),n(369,"td",22),e(370,"-"),t(),n(371,"td",23)(372,"em")(373,"strong"),e(374,"(opcional)"),t()(),n(375,"p"),e(376,"Evento disparado ao entrar do campo."),t()()(),n(377,"tr",16)(378,"td",17)(379,"div",18)(380,"span",19),e(381," p-error-async-properties"),i(382,"br"),t()()(),n(383,"td",20)(384,"code",27),e(385,"ErrorAsyncProperties"),t()(),n(386,"td",22),e(387,"-"),t(),n(388,"td",23)(389,"em")(390,"strong"),e(391,"(opcional)"),t()(),n(392,"p"),e(393,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(394,"code"),e(395,"Reactive Forms"),t(),e(396,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(397,"code"),e(398,"asyncValidators"),t(),e(399,"."),t()()(),n(400,"tr",16)(401,"td",17)(402,"div",18)(403,"span",19),e(404," p-error-limit"),i(405,"br"),t()()(),n(406,"td",20)(407,"code",21),e(408,"boolean"),t()(),n(409,"td",22)(410,"p")(411,"code"),e(412,"false"),t()()(),n(413,"td",23)(414,"em")(415,"strong"),e(416,"(opcional)"),t()(),n(417,"p"),e(418,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(419,"blockquote")(420,"p"),e(421,"Caso essa propriedade seja definida como "),n(422,"code"),e(423,"true"),t(),e(424,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(425,"tr",16)(426,"td",17)(427,"div",18)(428,"span",19),e(429," p-error-pattern"),i(430,"br"),t()()(),n(431,"td",20)(432,"code",28),e(433,"string"),t()(),n(434,"td",22),e(435,"-"),t(),n(436,"td",23)(437,"em")(438,"strong"),e(439,"(opcional)"),t()(),n(440,"p"),e(441,"Mensagem que ser\xE1 apresentada quando o "),n(442,"code"),e(443,"pattern"),t(),e(444," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(445,"blockquote")(446,"p"),e(447,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(448,"code"),e(449,"p-required-field-error-message"),t(),e(450," em conjunto."),t()()()(),n(451,"tr",16)(452,"td",17)(453,"div",18)(454,"span",19),e(455," p-help"),i(456,"br"),t()()(),n(457,"td",20)(458,"code",28),e(459,"string"),t()(),n(460,"td",22),e(461,"-"),t(),n(462,"td",23)(463,"em")(464,"strong"),e(465,"(opcional)"),t()(),n(466,"p"),e(467,"Texto de apoio do campo."),t()()(),n(468,"tr",16)(469,"td",17)(470,"div",18)(471,"span",19),e(472," p-hide-password-peek"),i(473,"br"),t()()(),n(474,"td",20)(475,"code",21),e(476,"boolean"),t()(),n(477,"td",22)(478,"p")(479,"code"),e(480,"false"),t()()(),n(481,"td",23)(482,"em")(483,"strong"),e(484,"(opcional)"),t()(),n(485,"p"),e(486,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),t()()(),n(487,"tr",16)(488,"td",17)(489,"div",18)(490,"span",19),e(491," p-icon"),i(492,"br"),t()()(),n(493,"td",20)(494,"code",28),e(495,"string "),t(),n(496,"code",29),e(497," TemplateRef<void>"),t()(),n(498,"td",22),e(499,"-"),t(),n(500,"td",23)(501,"em")(502,"strong"),e(503,"(opcional)"),t()(),n(504,"p"),e(505,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(506,"p"),e(507,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(508,"a",30),e(509,"Biblioteca de \xEDcones"),t(),e(510,". conforme exemplo abaixo:"),t(),n(511,"pre")(512,"code"),e(513,'<po-input p-icon="an an-user" p-label="PO input"></po-input>'),t()(),n(514,"p"),e(515,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(516,"em"),e(517,"Font Awesome"),t(),e(518,", da seguinte forma:"),t(),n(519,"pre")(520,"code"),e(521,'<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>'),t()(),n(522,"p"),e(523,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(524,"code"),e(525,"TemplateRef"),t(),e(526,", conforme exemplo abaixo:"),t(),n(527,"pre")(528,"code"),e(529,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>`),t()(),n(530,"blockquote")(531,"p"),e(532,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(533,"code"),e(534,"font-size: inherit"),t(),e(535," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(536,"tr",16)(537,"td",17)(538,"div",18)(539,"span",19),e(540," p-label"),i(541,"br"),t()()(),n(542,"td",20)(543,"code",28),e(544,"string"),t()(),n(545,"td",22),e(546,"-"),t(),n(547,"td",23)(548,"em")(549,"strong"),e(550,"(opcional)"),t()(),n(551,"p"),e(552,"R\xF3tulo do campo."),t()()(),n(553,"tr",16)(554,"td",17)(555,"div",18)(556,"span",19),e(557,"p-mask"),i(558,"br"),t()()(),n(559,"td",20)(560,"code",28),e(561,"string"),t()(),n(562,"td",22),e(563,"-"),t(),n(564,"td",23)(565,"em")(566,"strong"),e(567,"(opcional)"),t()(),n(568,"p"),e(569,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(570,"tr",16)(571,"td",17)(572,"div",18)(573,"span",19),e(574,"p-mask-format-model"),i(575,"br"),t()()(),n(576,"td",20)(577,"code",21),e(578,"boolean"),t()(),n(579,"td",22)(580,"p")(581,"code"),e(582,"false"),t()()(),n(583,"td",23)(584,"em")(585,"strong"),e(586,"(opcional)"),t()(),n(587,"p"),e(588,"Indica se o "),n(589,"code"),e(590,"model"),t(),e(591," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(592,"tr",16)(593,"td",17)(594,"div",18)(595,"span",19),e(596," p-mask-no-length-validation"),i(597,"br"),t()()(),n(598,"td",20)(599,"code",21),e(600,"boolean"),t()(),n(601,"td",22)(602,"p")(603,"code"),e(604,"false"),t()()(),n(605,"td",23)(606,"p"),e(607,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(608,"code"),e(609,"minLength"),t(),e(610,") e m\xE1ximo ("),n(611,"code"),e(612,"maxLength"),t(),e(613,") do campo."),t(),n(614,"ul")(615,"li"),e(616,"Quando "),n(617,"code"),e(618,"true"),t(),e(619,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(620,"li"),e(621,"Quando "),n(622,"code"),e(623,"false"),t(),e(624,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(625,"blockquote")(626,"p"),e(627,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(628,"code"),e(629,"p-mask-format-model"),t(),e(630,"."),t()(),n(631,"p"),e(632,"Exemplo:"),t(),n(633,"pre")(634,"code"),e(635,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>`),t()(),n(636,"ul")(637,"li"),e(638,"Entrada: "),n(639,"code"),e(640,"123-456"),t(),e(641," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(642,"code"),e(643,"-"),t(),e(644,"."),t()()()(),n(645,"tr",16)(646,"td",17)(647,"div",18)(648,"span",19),e(649," p-maxlength"),i(650,"br"),t()()(),n(651,"td",20)(652,"code",31),e(653,"number"),t()(),n(654,"td",22),e(655,"-"),t(),n(656,"td",23)(657,"em")(658,"strong"),e(659,"(opcional)"),t()(),n(660,"p"),e(661,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(662,"tr",16)(663,"td",17)(664,"div",18)(665,"span",19),e(666," p-minlength"),i(667,"br"),t()()(),n(668,"td",20)(669,"code",31),e(670,"number"),t()(),n(671,"td",22),e(672,"-"),t(),n(673,"td",23)(674,"em")(675,"strong"),e(676,"(opcional)"),t()(),n(677,"p"),e(678,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(679,"tr",16)(680,"td",17)(681,"div",18)(682,"span",19),e(683," name"),i(684,"br"),t()()(),n(685,"td",20)(686,"code",28),e(687,"string"),t()(),n(688,"td",22),e(689,"-"),t(),n(690,"td",23)(691,"p"),e(692,"Nome e identificador do campo."),t()()(),n(693,"tr",16)(694,"td",17)(695,"div",18)(696,"span",19),e(697," p-no-autocomplete"),i(698,"br"),t()()(),n(699,"td",20)(700,"code",21),e(701,"boolean"),t()(),n(702,"td",22)(703,"p")(704,"code"),e(705,"false"),t()()(),n(706,"td",23)(707,"em")(708,"strong"),e(709,"(opcional)"),t()(),n(710,"p"),e(711,"Define a propriedade nativa "),n(712,"code"),e(713,"autocomplete"),t(),e(714," do campo como "),n(715,"code"),e(716,"off"),t(),e(717,"."),t(),n(718,"blockquote")(719,"p"),e(720,"No componente "),n(721,"code"),e(722,"po-password"),t(),e(723," ser\xE1 definido como "),n(724,"code"),e(725,"new-password"),t(),e(726,"."),t()(),n(727,"p"),e(728,"Nos componentes "),n(729,"code"),e(730,"po-password"),t(),e(731," e "),n(732,"code"),e(733,"po-login"),t(),e(734," o valor padr\xE3o ser\xE1 "),n(735,"code"),e(736,"true"),t(),e(737,"."),t()()(),n(738,"tr",16)(739,"td",17)(740,"div",18)(741,"span",19),e(742," p-optional"),i(743,"br"),t()()(),n(744,"td",20)(745,"code",21),e(746,"boolean"),t()(),n(747,"td",22)(748,"p")(749,"code"),e(750,"false"),t()()(),n(751,"td",23)(752,"em")(753,"strong"),e(754,"(opcional)"),t()(),n(755,"p"),e(756,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(757,"blockquote")(758,"p"),e(759,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(760,"ul")(761,"li"),e(762,"O campo conter "),n(763,"code"),e(764,"p-required"),t(),e(765,";"),t(),n(766,"li"),e(767,"N\xE3o possuir "),n(768,"code"),e(769,"p-help"),t(),e(770," e/ou "),n(771,"code"),e(772,"p-label"),t(),e(773,"."),t()()()(),n(774,"tr",16)(775,"td",17)(776,"div",18)(777,"span",19),e(778,"p-pattern"),i(779,"br"),t()()(),n(780,"td",20)(781,"code",28),e(782,"string"),t()(),n(783,"td",22),e(784,"-"),t(),n(785,"td",23)(786,"em")(787,"strong"),e(788,"(opcional)"),t()(),n(789,"p"),e(790,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(791,"code"),e(792,"(p-mask)"),t(),e(793,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(794,"tr",16)(795,"td",17)(796,"div",18)(797,"span",19),e(798," p-placeholder"),i(799,"br"),t()()(),n(800,"td",20)(801,"code",28),e(802,"string"),t()(),n(803,"td",22)(804,"p"),e(805,"''"),t()(),n(806,"td",23)(807,"em")(808,"strong"),e(809,"(opcional)"),t()(),n(810,"p"),e(811,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(812,"tr",16)(813,"td",17)(814,"div",18)(815,"span",19),e(816,"p-readonly"),i(817,"br"),t()()(),n(818,"td",20)(819,"code",21),e(820,"boolean"),t()(),n(821,"td",22),e(822,"-"),t(),n(823,"td",23)(824,"em")(825,"strong"),e(826,"(opcional)"),t()(),n(827,"p"),e(828,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(829,"tr",16)(830,"td",17)(831,"div",18)(832,"span",19),e(833,"p-required"),i(834,"br"),t()()(),n(835,"td",20)(836,"code",21),e(837,"boolean"),t()(),n(838,"td",22)(839,"p")(840,"code"),e(841,"false"),t()()(),n(842,"td",23)(843,"em")(844,"strong"),e(845,"(opcional)"),t()(),n(846,"p"),e(847,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(848,"blockquote")(849,"p"),e(850,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(851,"code"),e(852,"(p-disabled)"),t(),e(853,"."),t()()()(),n(854,"tr",16)(855,"td",17)(856,"div",18)(857,"span",19),e(858," p-required-field-error-message"),i(859,"br"),t()()(),n(860,"td",20)(861,"code",21),e(862,"boolean"),t()(),n(863,"td",22)(864,"p")(865,"code"),e(866,"false"),t()()(),n(867,"td",23)(868,"em")(869,"strong"),e(870,"(opcional)"),t()(),n(871,"p"),e(872,"Exibe a mensagem setada na propriedade "),n(873,"code"),e(874,"p-error-pattern"),t(),e(875," se o campo estiver vazio e for requerido."),t(),n(876,"blockquote")(877,"p"),e(878,"Necess\xE1rio que a propriedade "),n(879,"code"),e(880,"p-required"),t(),e(881," esteja habilitada."),t()()()(),n(882,"tr",16)(883,"td",17)(884,"div",18)(885,"span",19),e(886," p-show-required"),i(887,"br"),t()()(),n(888,"td",20)(889,"code",21),e(890,"boolean"),t()(),n(891,"td",22),e(892,"-"),t(),n(893,"td",23)(894,"p"),e(895,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(896,"blockquote")(897,"p"),e(898,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(899,"ul")(900,"li"),e(901,"N\xE3o possuir "),n(902,"code"),e(903,"p-help"),t(),e(904," e/ou "),n(905,"code"),e(906,"p-label"),t(),e(907,"."),t()()()(),n(908,"tr",16)(909,"td",17)(910,"div",18)(911,"span",19),e(912," p-upper-case"),i(913,"br"),t()()(),n(914,"td",20)(915,"code",21),e(916,"boolean"),t()(),n(917,"td",22),e(918,"-"),t(),n(919,"td",23)(920,"p"),e(921,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(922,"h3",12),e(923,"M\xE9todos"),t(),n(924,"table",32)(925,"tr",16)(926,"th",33)(927,"div",18)(928,"h4")(929,"span",19),e(930," focus "),t()()()()(),n(931,"tr",23)(932,"td",23)(933,"p"),e(934,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(935,"p"),e(936,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(937,"pre")(938,"code"),e(939,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}`),t()()()()(),i(940,"br"),n(941,"h3"),e(942,"Interfaces"),t(),n(943,"h4",34)(944,"code",5),e(945,"ErrorAsyncProperties"),t()(),n(946,"div",2)(947,"p"),e(948,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(949,"h4",12),e(950,"Propriedades"),t(),n(951,"table",13)(952,"tr",14)(953,"th",15),e(954,"Nome"),t(),n(955,"th",15),e(956,"Tipo"),t(),n(957,"th",15),e(958,"Descri\xE7\xE3o"),t()(),n(959,"tr",16)(960,"td",17)(961,"div",18)(962,"span",19),e(963," errorAsync"),i(964,"br"),t()()(),n(965,"td",20)(966,"code",35),e(967,"(value) => Observable<boolean>"),t()(),n(968,"td",23)(969,"p"),e(970,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(971,"code"),e(972,"change"),t(),e(973," ou "),n(974,"code"),e(975,"change-model"),t(),e(976,", dependendo do valor da propriedade "),n(977,"code"),e(978,"triggerMode"),t(),e(979,"."),t()()(),n(980,"tr",16)(981,"td",17)(982,"div",18)(983,"span",19),e(984," triggerMode"),i(985,"br"),t()()(),n(986,"td",20)(987,"code",36),e(988,"'change' "),t(),n(989,"code",37),e(990," 'changeModel'"),t()(),n(991,"td",23)(992,"em")(993,"strong"),e(994,"(opcional)"),t()(),n(995,"p"),e(996,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(997,"code"),e(998,"change"),t(),e(999," ou "),n(1e3,"code"),e(1001,"change-model"),t(),e(1002,"."),t()()()()())},dependencies:[P],encapsulation:2})}return a})();var le=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,l){this.route=s,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let l=s.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(T(G),T(Q))};static \u0275cmp=S({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(l,o){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),i(3,"sample-po-password-doc"),t(),n(4,"po-tab",3),i(5,"sample-po-password-basic-view")(6,"sample-po-password-labs-view")(7,"sample-po-password-reset-view"),t()()()),l&2&&(u("p-actions",o.actions),d(2),u("p-active",o.activeTab.includes("doc")),d(2),u("p-hide",o.hidePoWebSample)("p-active",o.activeTab.includes("web")))},dependencies:[X,f,v,te,oe,ae,re],encapsulation:2})}return a})();var xe=[{path:"",component:le}],de=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=L({type:a});static \u0275inj=D({imports:[O.forChild(xe),O]})}return a})();var Ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=L({type:a});static \u0275inj=D({imports:[K,de]})}return a})();export{Ge as DocPoPasswordModule};
