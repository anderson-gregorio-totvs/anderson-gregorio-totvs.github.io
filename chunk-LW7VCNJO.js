import{$ as V,$a as M,Cd as Q,F as m,Fa as H,G as c,Ga as e,Ia as y,Jc as O,Ka as g,La as S,Lb as F,Ma as w,Mb as N,Na as j,Nb as R,Ob as B,Od as X,Pa as _,Pb as W,T as d,U as T,Wb as G,Xd as f,Yb as U,Yd as v,Zb as z,_ as h,ha as u,ka as C,md as Z,na as n,oa as t,oc as A,pa as i,re as P,sd as J,se as K,ta as L,td as k,ua as b,y as D,zc as Y}from"./chunk-23IW53AA.js";var $=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-password-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","password","p-label","PO Password"]],template:function(l,o){l&1&&i(0,"po-password",0)},dependencies:[k],encapsulation:2})}return a})();var se=a=>({"docs-sample-code-tabs":a}),te=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-password-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password Basic"),t(),n(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-basic/sample-po-password-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-password name="password" p-label="PO Password"> </po-password>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-password-basic/sample-po-password-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-password-basic',
  templateUrl: './sample-po-password-basic.component.html',
  standalone: false
})
export class SamplePoPasswordBasicComponent {}
`),t()()()()(),n(21,"div",10),i(22,"sample-po-password-basic"),t(),i(23,"hr")),l&2&&(d(5),C("po-icon "+o.sampleCodeButtonIcon),d(),y(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,se,o.hideSampleCodeTabs)))},dependencies:[M,P,f,v,$],encapsulation:2})}return a})();var ne=(()=>{class a{errorPattern;event;help;label;mask;maxlength;minlength;password;pattern;placeholder;properties;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"hidepasswordpeek",label:"Hide Password Peek"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.errorPattern=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.password=void 0,this.pattern="",this.placeholder="",this.properties=[]}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-password-labs"]],standalone:!1,decls:23,vars:28,consts:[["f","ngForm"],["name","password",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","ngModel","p-clean","p-disabled","p-error-pattern","p-help","p-hide-password-peek","p-label","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-12",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,o){if(l&1){let s=L();n(0,"po-password",1),w("ngModelChange",function(r){return m(s),S(o.password,r)||(o.password=r),c(r)}),b("p-blur",function(){return m(s),c(o.changeEvent("p-blur"))})("p-change",function(){return m(s),c(o.changeEvent("p-change"))})("p-change-model",function(){return m(s),c(o.changeEvent("p-change-model"))})("p-enter",function(){return m(s),c(o.changeEvent("p-enter"))}),t(),i(1,"hr"),n(2,"div",2),i(3,"po-info",3)(4,"po-info",4),t(),i(5,"hr"),n(6,"form",null,0)(8,"div",2)(9,"po-input",5),w("ngModelChange",function(r){return m(s),S(o.label,r)||(o.label=r),c(r)}),t(),n(10,"po-input",6),w("ngModelChange",function(r){return m(s),S(o.help,r)||(o.help=r),c(r)}),t()(),n(11,"div",2)(12,"po-input",7),w("ngModelChange",function(r){return m(s),S(o.placeholder,r)||(o.placeholder=r),c(r)}),t(),n(13,"po-input",8),w("ngModelChange",function(r){return m(s),S(o.errorPattern,r)||(o.errorPattern=r),c(r)}),t()(),n(14,"div",2)(15,"po-input",9),w("ngModelChange",function(r){return m(s),S(o.pattern,r)||(o.pattern=r),c(r)}),t()(),n(16,"div",2)(17,"po-number",10),w("ngModelChange",function(r){return m(s),S(o.minlength,r)||(o.minlength=r),c(r)}),t(),n(18,"po-number",11),w("ngModelChange",function(r){return m(s),S(o.maxlength,r)||(o.maxlength=r),c(r)}),t()(),n(19,"div",2)(20,"po-checkbox-group",12),w("ngModelChange",function(r){return m(s),S(o.properties,r)||(o.properties=r),c(r)}),t()(),n(21,"div",2)(22,"po-button",13),b("p-click",function(){return m(s),c(o.restore())}),t()()()}l&2&&(g("ngModel",o.password),u("p-clean",o.properties.includes("clean"))("p-disabled",o.properties.includes("disabled"))("p-error-pattern",o.errorPattern)("p-help",o.help)("p-hide-password-peek",o.properties.includes("hidepasswordpeek"))("p-label",o.label)("p-maxlength",o.maxlength)("p-minlength",o.minlength)("p-no-autocomplete",o.properties==null?null:o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-pattern",o.pattern)("p-placeholder",o.placeholder)("p-readonly",o.properties.includes("readonly"))("p-required",o.properties.includes("required"))("p-required-field-error-message",o.properties.includes("requiredFieldErrorMessage"))("p-show-required",o.properties.includes("showRequired")),d(3),u("p-value",o.password),d(),u("p-value",o.event),d(5),g("ngModel",o.label),d(),g("ngModel",o.help),d(2),g("ngModel",o.placeholder),d(),g("ngModel",o.errorPattern),d(2),g("ngModel",o.pattern),d(2),g("ngModel",o.minlength),d(),g("ngModel",o.maxlength),d(2),g("ngModel",o.properties),u("p-options",o.propertiesOptions))},dependencies:[W,F,N,B,R,A,Y,Z,J,k,Q],encapsulation:2})}return a})();var Ee=a=>({"docs-sample-code-tabs":a}),oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-password-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password Labs"),t(),n(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-labs/sample-po-password-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-password
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
    { value: 'showRequired', label: 'Show Required' }
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
`),t()()()()(),n(21,"div",10),i(22,"sample-po-password-labs"),t(),i(23,"hr")),l&2&&(d(5),C("po-icon "+o.sampleCodeButtonIcon),d(),y(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,Ee,o.hideSampleCodeTabs)))},dependencies:[M,P,f,v,ne],encapsulation:2})}return a})();var ie=(()=>{class a{poAlert;confirmNewPassword;currentPassword;errorPattern;help="Initial password = 123456";newPassword;password="123456";constructor(p){this.poAlert=p}setPassword(){this.confirmNewPassword===this.newPassword?(this.password=this.newPassword,this.help=`Actual password = ${this.password}`,this.currentPassword=void 0,this.newPassword=void 0,this.confirmNewPassword=void 0,this.poAlert.alert({title:"Password Reset",message:"Password saved successfully",ok:()=>this.reset()})):this.poAlert.alert({title:"Password Error",message:"Your (new passsword) is different of (confirm new password)",ok:()=>this.reset()})}reset(){this.newPassword=void 0,this.confirmNewPassword=void 0}static \u0275fac=function(l){return new(l||a)(T(O))};static \u0275cmp=h({type:a,selectors:[["sample-po-password-reset"]],standalone:!1,features:[j([O])],decls:7,vars:7,consts:[["passwordForm","ngForm"],["name","currentPassword","p-clean","","p-error-pattern","invalid password","p-label","Current Password","p-mask","999999","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-help"],["name","newPassword","p-clean","","p-error-pattern","invalid password","p-label","New password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","confirmNewPassword","p-clean","","p-error-pattern","invalid password","p-label","Confirm New Password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],[1,"po-row"],["p-label","Save",1,"po-md-4",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let s=L();n(0,"form",null,0)(2,"po-password",1),w("ngModelChange",function(r){return m(s),S(o.currentPassword,r)||(o.currentPassword=r),c(r)}),t(),n(3,"po-password",2),w("ngModelChange",function(r){return m(s),S(o.newPassword,r)||(o.newPassword=r),c(r)}),t(),n(4,"po-password",3),w("ngModelChange",function(r){return m(s),S(o.confirmNewPassword,r)||(o.confirmNewPassword=r),c(r)}),t(),n(5,"div",4)(6,"po-button",5),b("p-click",function(){return m(s),c(o.setPassword())}),t()()()}if(l&2){let s=H(1);d(2),g("ngModel",o.currentPassword),u("p-help",o.help),d(),g("ngModel",o.newPassword),u("p-disabled",o.currentPassword!==o.password),d(),g("ngModel",o.confirmNewPassword),u("p-disabled",o.currentPassword!==o.password),d(2),u("p-disabled",s.invalid)}},dependencies:[W,F,N,B,R,A,k],encapsulation:2})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-password-reset-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password - Reset"),t(),n(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-reset/sample-po-password-reset.component.html"),t(),n(13,"pre",7),e(14,`<form #passwordForm="ngForm">
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
`),t()()()()(),n(21,"div",10),i(22,"sample-po-password-reset"),t(),i(23,"hr")),l&2&&(d(5),C("po-icon "+o.sampleCodeButtonIcon),d(),y(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,Se,o.hideSampleCodeTabs)))},dependencies:[M,P,f,v,ie],encapsulation:2})}return a})();var re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-password-doc"]],standalone:!1,decls:925,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
    p-error-pattern="string"
    p-help="string"
    p-hide-password-peek="boolean"
    p-icon="string | TemplateRef<void>"
    p-label="string"
    p-mask="string"
    p-mask-format-model="boolean"
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
utilizando `),n(394,"code"),e(395,"Reactive Forms"),t(),e(396,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(397,"code"),e(398,"asyncValidators"),t(),e(399,"."),t()()(),n(400,"tr",16)(401,"td",17)(402,"div",18)(403,"span",19),e(404," p-error-pattern"),i(405,"br"),t()()(),n(406,"td",20)(407,"code",28),e(408,"string"),t()(),n(409,"td",22),e(410,"-"),t(),n(411,"td",23)(412,"em")(413,"strong"),e(414,"(opcional)"),t()(),n(415,"p"),e(416,"Mensagem que ser\xE1 apresentada quando o "),n(417,"code"),e(418,"pattern"),t(),e(419," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(420,"blockquote")(421,"p"),e(422,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(423,"code"),e(424,"p-required-field-error-message"),t(),e(425," em conjunto."),t()()()(),n(426,"tr",16)(427,"td",17)(428,"div",18)(429,"span",19),e(430," p-help"),i(431,"br"),t()()(),n(432,"td",20)(433,"code",28),e(434,"string"),t()(),n(435,"td",22),e(436,"-"),t(),n(437,"td",23)(438,"em")(439,"strong"),e(440,"(opcional)"),t()(),n(441,"p"),e(442,"Texto de apoio do campo."),t()()(),n(443,"tr",16)(444,"td",17)(445,"div",18)(446,"span",19),e(447," p-hide-password-peek"),i(448,"br"),t()()(),n(449,"td",20)(450,"code",21),e(451,"boolean"),t()(),n(452,"td",22)(453,"p")(454,"code"),e(455,"false"),t()()(),n(456,"td",23)(457,"em")(458,"strong"),e(459,"(opcional)"),t()(),n(460,"p"),e(461,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),t()()(),n(462,"tr",16)(463,"td",17)(464,"div",18)(465,"span",19),e(466," p-icon"),i(467,"br"),t()()(),n(468,"td",20)(469,"code",28),e(470,"string "),t(),n(471,"code",29),e(472," TemplateRef<void>"),t()(),n(473,"td",22),e(474,"-"),t(),n(475,"td",23)(476,"em")(477,"strong"),e(478,"(opcional)"),t()(),n(479,"p"),e(480,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(481,"p"),e(482,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(483,"a",30),e(484,"Biblioteca de \xEDcones"),t(),e(485,". conforme exemplo abaixo:"),t(),n(486,"pre")(487,"code"),e(488,'<po-input p-icon="ph ph-user" p-label="PO input"></po-input>'),t()(),n(489,"p"),e(490,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(491,"em"),e(492,"Font Awesome"),t(),e(493,", da seguinte forma:"),t(),n(494,"pre")(495,"code"),e(496,'<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>'),t()(),n(497,"p"),e(498,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(499,"code"),e(500,"TemplateRef"),t(),e(501,", conforme exemplo abaixo:"),t(),n(502,"pre")(503,"code"),e(504,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>`),t()(),n(505,"blockquote")(506,"p"),e(507,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(508,"code"),e(509,"font-size: inherit"),t(),e(510," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(511,"tr",16)(512,"td",17)(513,"div",18)(514,"span",19),e(515," p-label"),i(516,"br"),t()()(),n(517,"td",20)(518,"code",28),e(519,"string"),t()(),n(520,"td",22),e(521,"-"),t(),n(522,"td",23)(523,"em")(524,"strong"),e(525,"(opcional)"),t()(),n(526,"p"),e(527,"R\xF3tulo do campo."),t()()(),n(528,"tr",16)(529,"td",17)(530,"div",18)(531,"span",19),e(532,"p-mask"),i(533,"br"),t()()(),n(534,"td",20)(535,"code",28),e(536,"string"),t()(),n(537,"td",22),e(538,"-"),t(),n(539,"td",23)(540,"em")(541,"strong"),e(542,"(opcional)"),t()(),n(543,"p"),e(544,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(545,"tr",16)(546,"td",17)(547,"div",18)(548,"span",19),e(549,"p-mask-format-model"),i(550,"br"),t()()(),n(551,"td",20)(552,"code",21),e(553,"boolean"),t()(),n(554,"td",22)(555,"p")(556,"code"),e(557,"false"),t()()(),n(558,"td",23)(559,"em")(560,"strong"),e(561,"(opcional)"),t()(),n(562,"p"),e(563,"Indica se o "),n(564,"code"),e(565,"model"),t(),e(566," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(567,"tr",16)(568,"td",17)(569,"div",18)(570,"span",19),e(571," p-maxlength"),i(572,"br"),t()()(),n(573,"td",20)(574,"code",31),e(575,"number"),t()(),n(576,"td",22),e(577,"-"),t(),n(578,"td",23)(579,"em")(580,"strong"),e(581,"(opcional)"),t()(),n(582,"p"),e(583,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(584,"tr",16)(585,"td",17)(586,"div",18)(587,"span",19),e(588," p-minlength"),i(589,"br"),t()()(),n(590,"td",20)(591,"code",31),e(592,"number"),t()(),n(593,"td",22),e(594,"-"),t(),n(595,"td",23)(596,"em")(597,"strong"),e(598,"(opcional)"),t()(),n(599,"p"),e(600,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(601,"tr",16)(602,"td",17)(603,"div",18)(604,"span",19),e(605," name"),i(606,"br"),t()()(),n(607,"td",20)(608,"code",28),e(609,"string"),t()(),n(610,"td",22),e(611,"-"),t(),n(612,"td",23)(613,"p"),e(614,"Nome e identificador do campo."),t()()(),n(615,"tr",16)(616,"td",17)(617,"div",18)(618,"span",19),e(619," p-no-autocomplete"),i(620,"br"),t()()(),n(621,"td",20)(622,"code",21),e(623,"boolean"),t()(),n(624,"td",22)(625,"p")(626,"code"),e(627,"false"),t()()(),n(628,"td",23)(629,"em")(630,"strong"),e(631,"(opcional)"),t()(),n(632,"p"),e(633,"Define a propriedade nativa "),n(634,"code"),e(635,"autocomplete"),t(),e(636," do campo como "),n(637,"code"),e(638,"off"),t(),e(639,"."),t(),n(640,"blockquote")(641,"p"),e(642,"No componente "),n(643,"code"),e(644,"po-password"),t(),e(645," ser\xE1 definido como "),n(646,"code"),e(647,"new-password"),t(),e(648,"."),t()(),n(649,"p"),e(650,"Nos componentes "),n(651,"code"),e(652,"po-password"),t(),e(653," e "),n(654,"code"),e(655,"po-login"),t(),e(656," o valor padr\xE3o ser\xE1 "),n(657,"code"),e(658,"true"),t(),e(659,"."),t()()(),n(660,"tr",16)(661,"td",17)(662,"div",18)(663,"span",19),e(664," p-optional"),i(665,"br"),t()()(),n(666,"td",20)(667,"code",21),e(668,"boolean"),t()(),n(669,"td",22)(670,"p")(671,"code"),e(672,"false"),t()()(),n(673,"td",23)(674,"em")(675,"strong"),e(676,"(opcional)"),t()(),n(677,"p"),e(678,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(679,"blockquote")(680,"p"),e(681,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(682,"ul")(683,"li"),e(684,"O campo conter "),n(685,"code"),e(686,"p-required"),t(),e(687,";"),t(),n(688,"li"),e(689,"N\xE3o possuir "),n(690,"code"),e(691,"p-help"),t(),e(692," e/ou "),n(693,"code"),e(694,"p-label"),t(),e(695,"."),t()()()(),n(696,"tr",16)(697,"td",17)(698,"div",18)(699,"span",19),e(700,"p-pattern"),i(701,"br"),t()()(),n(702,"td",20)(703,"code",28),e(704,"string"),t()(),n(705,"td",22),e(706,"-"),t(),n(707,"td",23)(708,"em")(709,"strong"),e(710,"(opcional)"),t()(),n(711,"p"),e(712,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(713,"code"),e(714,"(p-mask)"),t(),e(715,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(716,"tr",16)(717,"td",17)(718,"div",18)(719,"span",19),e(720," p-placeholder"),i(721,"br"),t()()(),n(722,"td",20)(723,"code",28),e(724,"string"),t()(),n(725,"td",22)(726,"p"),e(727,"''"),t()(),n(728,"td",23)(729,"em")(730,"strong"),e(731,"(opcional)"),t()(),n(732,"p"),e(733,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(734,"tr",16)(735,"td",17)(736,"div",18)(737,"span",19),e(738,"p-readonly"),i(739,"br"),t()()(),n(740,"td",20)(741,"code",21),e(742,"boolean"),t()(),n(743,"td",22),e(744,"-"),t(),n(745,"td",23)(746,"em")(747,"strong"),e(748,"(opcional)"),t()(),n(749,"p"),e(750,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(751,"tr",16)(752,"td",17)(753,"div",18)(754,"span",19),e(755,"p-required"),i(756,"br"),t()()(),n(757,"td",20)(758,"code",21),e(759,"boolean"),t()(),n(760,"td",22)(761,"p")(762,"code"),e(763,"false"),t()()(),n(764,"td",23)(765,"em")(766,"strong"),e(767,"(opcional)"),t()(),n(768,"p"),e(769,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(770,"blockquote")(771,"p"),e(772,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(773,"code"),e(774,"(p-disabled)"),t(),e(775,"."),t()()()(),n(776,"tr",16)(777,"td",17)(778,"div",18)(779,"span",19),e(780," p-required-field-error-message"),i(781,"br"),t()()(),n(782,"td",20)(783,"code",21),e(784,"boolean"),t()(),n(785,"td",22)(786,"p")(787,"code"),e(788,"false"),t()()(),n(789,"td",23)(790,"em")(791,"strong"),e(792,"(opcional)"),t()(),n(793,"p"),e(794,"Exibe a mensagem setada na propriedade "),n(795,"code"),e(796,"p-error-pattern"),t(),e(797," se o campo estiver vazio e for requerido."),t(),n(798,"blockquote")(799,"p"),e(800,"Necess\xE1rio que a propriedade "),n(801,"code"),e(802,"p-required"),t(),e(803," esteja habilitada."),t()()()(),n(804,"tr",16)(805,"td",17)(806,"div",18)(807,"span",19),e(808," p-show-required"),i(809,"br"),t()()(),n(810,"td",20)(811,"code",21),e(812,"boolean"),t()(),n(813,"td",22),e(814,"-"),t(),n(815,"td",23)(816,"p"),e(817,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(818,"blockquote")(819,"p"),e(820,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(821,"ul")(822,"li"),e(823,"N\xE3o possuir "),n(824,"code"),e(825,"p-help"),t(),e(826," e/ou "),n(827,"code"),e(828,"p-label"),t(),e(829,"."),t()()()(),n(830,"tr",16)(831,"td",17)(832,"div",18)(833,"span",19),e(834," p-upper-case"),i(835,"br"),t()()(),n(836,"td",20)(837,"code",21),e(838,"boolean"),t()(),n(839,"td",22),e(840,"-"),t(),n(841,"td",23)(842,"p"),e(843,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(844,"h3",12),e(845,"M\xE9todos"),t(),n(846,"table",32)(847,"tr",16)(848,"th",33)(849,"div",18)(850,"h4")(851,"span",19),e(852," focus "),t()()()()(),n(853,"tr",23)(854,"td",23)(855,"p"),e(856,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(857,"p"),e(858,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(859,"pre")(860,"code"),e(861,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}`),t()()()()(),i(862,"br"),n(863,"h3"),e(864,"Interfaces"),t(),n(865,"h4",34)(866,"code",5),e(867,"ErrorAsyncProperties"),t()(),n(868,"div",2)(869,"p"),e(870,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(871,"h4",12),e(872,"Propriedades"),t(),n(873,"table",13)(874,"tr",14)(875,"th",15),e(876,"Nome"),t(),n(877,"th",15),e(878,"Tipo"),t(),n(879,"th",15),e(880,"Descri\xE7\xE3o"),t()(),n(881,"tr",16)(882,"td",17)(883,"div",18)(884,"span",19),e(885," errorAsync"),i(886,"br"),t()()(),n(887,"td",20)(888,"code",35),e(889,"(value) => Observable<boolean>"),t()(),n(890,"td",23)(891,"p"),e(892,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(893,"code"),e(894,"change"),t(),e(895," ou "),n(896,"code"),e(897,"change-model"),t(),e(898,", dependendo do valor da propriedade "),n(899,"code"),e(900,"triggerMode"),t(),e(901,"."),t()()(),n(902,"tr",16)(903,"td",17)(904,"div",18)(905,"span",19),e(906," triggerMode"),i(907,"br"),t()()(),n(908,"td",20)(909,"code",36),e(910,"'change' "),t(),n(911,"code",37),e(912," 'changeModel'"),t()(),n(913,"td",23)(914,"em")(915,"strong"),e(916,"(opcional)"),t()(),n(917,"p"),e(918,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(919,"code"),e(920,"change"),t(),e(921," ou "),n(922,"code"),e(923,"change-model"),t(),e(924,"."),t()()()()())},dependencies:[P],encapsulation:2})}return a})();var le=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(T(G),T(U))};static \u0275cmp=h({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(l,o){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),i(3,"sample-po-password-doc"),t(),n(4,"po-tab",3),i(5,"sample-po-password-basic-view")(6,"sample-po-password-labs-view")(7,"sample-po-password-reset-view"),t()()()),l&2&&(u("p-actions",o.actions),d(2),u("p-active",o.activeTab.includes("doc")),d(2),u("p-hide",o.hidePoWebSample)("p-active",o.activeTab.includes("web")))},dependencies:[X,f,v,te,oe,ae,re],encapsulation:2})}return a})();var xe=[{path:"",component:le}],de=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=V({type:a});static \u0275inj=D({imports:[z.forChild(xe),z]})}return a})();var Ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=V({type:a});static \u0275inj=D({imports:[K,de]})}return a})();export{Ge as DocPoPasswordModule};
