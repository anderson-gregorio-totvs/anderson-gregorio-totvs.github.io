import{$ as V,$a as k,Ca as H,Cd as W,Da as j,Ea as G,F as c,Fa as U,Fc as te,G as u,Ga as e,Ia as M,Ka as S,Kb as g,La as v,Lb as D,Ma as h,Mb as N,Nb as Q,Ob as Z,Od as ae,Pa as _,Pb as R,Sb as X,T as p,Tb as J,U as q,Vb as K,Wb as Y,Xd as C,Yb as $,Yd as y,Zb as A,_ as b,ha as d,ka as P,ld as ne,md as F,na as n,oa as t,oc as B,pa as o,re as w,sd as O,se as le,ta as L,ua as x,wd as ie,y as T,yd as oe,zc as ee}from"./chunk-QVEZB6GT.js";var re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","input","p-label","PO Input"]],template:function(l,i){l&1&&o(0,"po-input",0)},dependencies:[F],encapsulation:2})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input Basic"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-basic/sample-po-input-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-input name="input" p-label="PO Input"> </po-input>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-input-basic/sample-po-input-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-input-basic',
  templateUrl: './sample-po-input-basic.component.html',
  standalone: false
})
export class SamplePoInputBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-basic"),t(),o(23,"hr")),l&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),M(" ",i.sampleCodeButtonLabel,""),p(),d("ngClass",_(4,ve,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,re],encapsulation:2})}return a})();var de=(()=>{class a{input;errorPattern;event;help;icon;label;mask;maxlength;minlength;pattern;placeholder;properties;iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"maskFormatModel",label:"Formatted Model"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"uppercase",label:"Upper Case"},{value:"showRequired",label:"Show Required"},{value:"maskNoLengthValidation",label:"Mask No Length Validation"},{value:"errorLimit",label:"Limit Error Message"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.input=void 0}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-labs"]],standalone:!1,decls:25,vars:36,consts:[["f","ngForm"],["name","input",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","ngModel","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-mask","p-mask-format-model","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-required","p-required-field-error-message","p-readonly","p-upper-case","p-show-required","p-mask-no-length-validation","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","mask","p-clean","","p-help","Ex.: Zip code: '99999-999'; License plate: '@@@-9999'","p-label","Mask",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'","p-label","Pattern (Regex)",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","2","p-label","Properties",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let s=L();n(0,"po-input",1),h("ngModelChange",function(r){return c(s),v(i.input,r)||(i.input=r),u(r)}),x("p-blur",function(){return c(s),u(i.changeEvent("p-blur"))})("p-change",function(){return c(s),u(i.changeEvent("p-change"))})("p-change-model",function(){return c(s),u(i.changeEvent("p-change-model"))})("p-enter",function(){return c(s),u(i.changeEvent("p-enter"))}),t(),o(1,"hr"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"hr"),n(6,"form",null,0)(8,"div",2)(9,"po-input",5),h("ngModelChange",function(r){return c(s),v(i.label,r)||(i.label=r),u(r)}),t(),n(10,"po-input",6),h("ngModelChange",function(r){return c(s),v(i.help,r)||(i.help=r),u(r)}),t()(),n(11,"div",2)(12,"po-input",7),h("ngModelChange",function(r){return c(s),v(i.placeholder,r)||(i.placeholder=r),u(r)}),t(),n(13,"po-input",8),h("ngModelChange",function(r){return c(s),v(i.errorPattern,r)||(i.errorPattern=r),u(r)}),t()(),n(14,"div",2)(15,"po-input",9),h("ngModelChange",function(r){return c(s),v(i.mask,r)||(i.mask=r),u(r)}),t(),n(16,"po-input",10),h("ngModelChange",function(r){return c(s),v(i.pattern,r)||(i.pattern=r),u(r)}),t()(),n(17,"div",2)(18,"po-number",11),h("ngModelChange",function(r){return c(s),v(i.minlength,r)||(i.minlength=r),u(r)}),t(),n(19,"po-number",12),h("ngModelChange",function(r){return c(s),v(i.maxlength,r)||(i.maxlength=r),u(r)}),t()(),n(20,"div",2)(21,"po-select",13),h("ngModelChange",function(r){return c(s),v(i.icon,r)||(i.icon=r),u(r)}),t(),n(22,"po-checkbox-group",14),h("ngModelChange",function(r){return c(s),v(i.properties,r)||(i.properties=r),u(r)}),t()(),n(23,"div",2)(24,"po-button",15),x("p-click",function(){return c(s),U(7).reset(),u(i.restore())}),t()()()}l&2&&(S("ngModel",i.input),d("p-clean",i.properties==null?null:i.properties.includes("clean"))("p-disabled",i.properties==null?null:i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-mask",i.mask)("p-mask-format-model",i.properties==null?null:i.properties.includes("maskFormatModel"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties==null?null:i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-required",i.properties==null?null:i.properties.includes("required"))("p-required-field-error-message",i.properties==null?null:i.properties.includes("requiredFieldErrorMessage"))("p-readonly",i.properties==null?null:i.properties.includes("readonly"))("p-upper-case",i.properties==null?null:i.properties.includes("uppercase"))("p-show-required",i.properties==null?null:i.properties.includes("showRequired"))("p-mask-no-length-validation",i.properties==null?null:i.properties.includes("maskNoLengthValidation"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),p(3),d("p-value",i.input),p(),d("p-value",i.event),p(5),S("ngModel",i.label),p(),S("ngModel",i.help),p(2),S("ngModel",i.placeholder),p(),S("ngModel",i.errorPattern),p(2),S("ngModel",i.mask),p(),S("ngModel",i.pattern),p(2),S("ngModel",i.minlength),p(),S("ngModel",i.maxlength),p(2),S("ngModel",i.icon),d("p-options",i.iconOptions),p(),S("ngModel",i.properties),d("p-options",i.propertiesOptions))},dependencies:[R,D,N,Z,Q,B,ee,F,O,oe,W],encapsulation:2})}return a})();var Ce=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input Labs"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-labs/sample-po-input-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-input
  name="input"
  [(ngModel)]="input"
  [p-clean]="properties?.includes('clean')"
  [p-disabled]="properties?.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-mask]="mask"
  [p-mask-format-model]="properties?.includes('maskFormatModel')"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties?.includes('optional')"
  [p-pattern]="pattern"
  [p-placeholder]="placeholder"
  [p-required]="properties?.includes('required')"
  [p-required-field-error-message]="properties?.includes('requiredFieldErrorMessage')"
  [p-readonly]="properties?.includes('readonly')"
  [p-upper-case]="properties?.includes('uppercase')"
  [p-show-required]="properties?.includes('showRequired')"
  [p-mask-no-length-validation]="properties?.includes('maskNoLengthValidation')"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-input>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="input"> </po-info>

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
      class="po-md-6"
      name="mask"
      [(ngModel)]="mask"
      p-clean
      p-help="Ex.: Zip code: '99999-999'; License plate: '@@@-9999'"
      p-label="Mask"
    >
    </po-input>

    <po-input
      class="po-lg-6 po-md-12"
      name="pattern"
      [(ngModel)]="pattern"
      p-clean
      p-help="Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'"
      p-label="Pattern (Regex)"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

    <po-number class="po-md-6" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>
  </div>

  <div class="po-row">
    <po-select class="po-lg-6" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
    </po-select>

    <po-checkbox-group
      class="po-lg-6 po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="2"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="f.reset(); this.restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-input-labs/sample-po-input-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-input-labs',
  templateUrl: './sample-po-input-labs.component.html',
  standalone: false
})
export class SamplePoInputLabsComponent implements OnInit {
  input: string;
  errorPattern: string;
  event: string;
  help: string;
  icon: string;
  label: string;
  mask: string;
  maxlength: number;
  minlength: number;
  pattern: string;
  placeholder: string;
  properties: Array<string>;

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'maskFormatModel', label: 'Formatted Model' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'uppercase', label: 'Upper Case' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'maskNoLengthValidation', label: 'Mask No Length Validation' },
    { value: 'errorLimit', label: 'Limit Error Message' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.input = undefined;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-labs"),t(),o(23,"hr")),l&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),M(" ",i.sampleCodeButtonLabel,""),p(),d("ngClass",_(4,Ce,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,de],encapsulation:2})}return a})();var we=["reactiveFormData"],ce=(()=>{class a{fb;reactiveFormModal;reactiveForm;modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};constructor(m){this.fb=m,this.createReactiveForm()}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",g.compose([g.required,g.minLength(5),g.maxLength(30)])],address:["",g.compose([g.required,g.minLength(5),g.maxLength(50)])],number:["",g.compose([g.required,g.min(1),g.max(99999)])],email:["",g.required],website:["",g.required]})}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(l){return new(l||a)(q(K))};static \u0275cmp=b({type:a,selectors:[["sample-po-input-reactive-form"]],viewQuery:function(l,i){if(l&1&&H(we,7),l&2){let s;j(s=G())&&(i.reactiveFormModal=s.first)}},standalone:!1,decls:23,vars:8,consts:[["reactiveFormData",""],[3,"formGroup"],[1,"po-row"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-md-12"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"]],template:function(l,i){if(l&1){let s=L();n(0,"form",1)(1,"div",2),o(2,"po-input",3),t(),n(3,"div",2),o(4,"po-input",4)(5,"po-number",5),t(),n(6,"div",2),o(7,"po-email",6)(8,"po-url",7),t(),n(9,"div",2)(10,"po-button",8),x("p-click",function(){return c(s),u(i.saveForm())}),t()()(),n(11,"po-modal",9,0)(13,"div",2),o(14,"po-info",10),t(),o(15,"hr"),n(16,"div",2),o(17,"po-info",11)(18,"po-info",12),t(),o(19,"hr"),n(20,"div",2),o(21,"po-info",13)(22,"po-info",14),t()()}l&2&&(d("formGroup",i.reactiveForm),p(10),d("p-disabled",!i.reactiveForm.valid),p(),d("p-primary-action",i.modalPrimaryAction),p(3),d("p-value",i.reactiveForm.controls.name.value),p(3),d("p-value",i.reactiveForm.controls.address.value),p(),d("p-value",i.reactiveForm.controls.number.value),p(3),d("p-value",i.reactiveForm.controls.email.value),p(),d("p-value",i.reactiveForm.controls.website.value))},dependencies:[R,D,N,X,J,B,ne,F,O,ie,W,te],encapsulation:2})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input - Reactive Form"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<form [formGroup]="reactiveForm">
  <div class="po-row">
    <po-input class="po-md-12" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-9" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address"> </po-input>

    <po-number class="po-lg-3" formControlName="number" p-label="Number" p-clean> </po-number>
  </div>

  <div class="po-row">
    <po-email class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-url class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
  </div>
</form>

<po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
  <div class="po-row">
    <po-info class="po-md-12" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-md-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

    <po-info class="po-md-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-md-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

    <po-info class="po-md-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-input-reactive-form',
  templateUrl: './sample-po-input-reactive-form.component.html',
  standalone: false
})
export class SamplePoInputReactiveFormComponent {
  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal: PoModalComponent;

  reactiveForm: UntypedFormGroup;

  public readonly modalPrimaryAction: PoModalAction = {
    action: () => this.reactiveFormModal.close(),
    label: 'Close'
  };

  constructor(private fb: UntypedFormBuilder) {
    this.createReactiveForm();
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      number: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999)])],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  saveForm() {
    this.reactiveFormModal.open();
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-reactive-form"),t(),o(23,"hr")),l&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),M(" ",i.sampleCodeButtonLabel,""),p(),d("ngClass",_(4,Me,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,ce],encapsulation:2})}return a})();var Ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-doc"]],standalone:!1,decls:979,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoInputComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4",6),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",7),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",8),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),o(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),o(209,"br"),t(),n(210,"div",9)(211,"h4",10),e(212,"Seletor"),t(),n(213,"pre",11),e(214,`<po-input
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
</po-input>
`),t()(),n(215,"h4",12),e(216,"Propriedades"),t(),n(217,"table",13)(218,"tr",14)(219,"th",15),e(220,"Nome"),t(),n(221,"th",15),e(222,"Tipo"),t(),n(223,"th",15),e(224,"Padr\xE3o"),t(),n(225,"th",15),e(226,"Descri\xE7\xE3o"),t()(),n(227,"tr",16)(228,"td",17)(229,"div",18)(230,"span",19),e(231," p-auto-focus"),o(232,"br"),t()()(),n(233,"td",20)(234,"code",21),e(235,"boolean"),t()(),n(236,"td",22)(237,"p")(238,"code"),e(239,"false"),t()()(),n(240,"td",23)(241,"em")(242,"strong"),e(243,"(opcional)"),t()(),n(244,"p"),e(245,"Aplica foco no elemento ao ser iniciado."),t(),n(246,"blockquote")(247,"p"),e(248,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(249,"tr",16)(250,"td",17)(251,"div",24)(252,"span",25),e(253," (p-blur)"),o(254,"br"),t()()(),n(255,"td",20)(256,"code",26),e(257,"EventEmitter"),t()(),n(258,"td",22),e(259,"-"),t(),n(260,"td",23)(261,"em")(262,"strong"),e(263,"(opcional)"),t()(),n(264,"p"),e(265,"Evento disparado ao sair do campo."),t()()(),n(266,"tr",16)(267,"td",17)(268,"div",24)(269,"span",25),e(270," (p-change)"),o(271,"br"),t()()(),n(272,"td",20)(273,"code",26),e(274,"EventEmitter"),t()(),n(275,"td",22),e(276,"-"),t(),n(277,"td",23)(278,"em")(279,"strong"),e(280,"(opcional)"),t()(),n(281,"p"),e(282,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(283,"tr",16)(284,"td",17)(285,"div",24)(286,"span",25),e(287," (p-change-model)"),o(288,"br"),t()()(),n(289,"td",20)(290,"code",26),e(291,"EventEmitter"),t()(),n(292,"td",22),e(293,"-"),t(),n(294,"td",23)(295,"em")(296,"strong"),e(297,"(opcional)"),t()(),n(298,"p"),e(299,"Evento disparado ao alterar valor do model."),t()()(),n(300,"tr",16)(301,"td",17)(302,"div",18)(303,"span",19),e(304,"p-clean"),o(305,"br"),t()()(),n(306,"td",20)(307,"code",21),e(308,"boolean"),t()(),n(309,"td",22),e(310,"-"),t(),n(311,"td",23)(312,"em")(313,"strong"),e(314,"(opcional)"),t()(),n(315,"p"),e(316,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(317,"tr",16)(318,"td",17)(319,"div",18)(320,"span",19),e(321,"p-disabled"),o(322,"br"),t()()(),n(323,"td",20)(324,"code",21),e(325,"boolean"),t()(),n(326,"td",22)(327,"p")(328,"code"),e(329,"false"),t()()(),n(330,"td",23)(331,"em")(332,"strong"),e(333,"(opcional)"),t()(),n(334,"p"),e(335,"Se verdadeiro, desabilita o campo."),t()()(),n(336,"tr",16)(337,"td",17)(338,"div",18)(339,"span",19),e(340," p-emit-all-changes"),o(341,"br"),t()()(),n(342,"td",20)(343,"code",21),e(344,"boolean"),t()(),n(345,"td",22)(346,"p")(347,"code"),e(348,"false"),t()()(),n(349,"td",23)(350,"em")(351,"strong"),e(352,"(opcional)"),t()(),n(353,"p"),e(354,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(355,"tr",16)(356,"td",17)(357,"div",24)(358,"span",25),e(359," (p-enter)"),o(360,"br"),t()()(),n(361,"td",20)(362,"code",26),e(363,"EventEmitter"),t()(),n(364,"td",22),e(365,"-"),t(),n(366,"td",23)(367,"em")(368,"strong"),e(369,"(opcional)"),t()(),n(370,"p"),e(371,"Evento disparado ao entrar do campo."),t()()(),n(372,"tr",16)(373,"td",17)(374,"div",18)(375,"span",19),e(376," p-error-async-properties"),o(377,"br"),t()()(),n(378,"td",20)(379,"code",27),e(380,"ErrorAsyncProperties"),t()(),n(381,"td",22),e(382,"-"),t(),n(383,"td",23)(384,"em")(385,"strong"),e(386,"(opcional)"),t()(),n(387,"p"),e(388,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(389,"code"),e(390,"Reactive Forms"),t(),e(391,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(392,"code"),e(393,"asyncValidators"),t(),e(394,"."),t()()(),n(395,"tr",16)(396,"td",17)(397,"div",18)(398,"span",19),e(399," p-error-limit"),o(400,"br"),t()()(),n(401,"td",20)(402,"code",21),e(403,"boolean"),t()(),n(404,"td",22)(405,"p")(406,"code"),e(407,"false"),t()()(),n(408,"td",23)(409,"em")(410,"strong"),e(411,"(opcional)"),t()(),n(412,"p"),e(413,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(414,"blockquote")(415,"p"),e(416,"Caso essa propriedade seja definida como "),n(417,"code"),e(418,"true"),t(),e(419,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(420,"tr",16)(421,"td",17)(422,"div",18)(423,"span",19),e(424," p-error-pattern"),o(425,"br"),t()()(),n(426,"td",20)(427,"code",28),e(428,"string"),t()(),n(429,"td",22),e(430,"-"),t(),n(431,"td",23)(432,"em")(433,"strong"),e(434,"(opcional)"),t()(),n(435,"p"),e(436,"Mensagem que ser\xE1 apresentada quando o "),n(437,"code"),e(438,"pattern"),t(),e(439," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(440,"blockquote")(441,"p"),e(442,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(443,"code"),e(444,"p-required-field-error-message"),t(),e(445," em conjunto."),t()()()(),n(446,"tr",16)(447,"td",17)(448,"div",18)(449,"span",19),e(450," p-help"),o(451,"br"),t()()(),n(452,"td",20)(453,"code",28),e(454,"string"),t()(),n(455,"td",22),e(456,"-"),t(),n(457,"td",23)(458,"em")(459,"strong"),e(460,"(opcional)"),t()(),n(461,"p"),e(462,"Texto de apoio do campo."),t()()(),n(463,"tr",16)(464,"td",17)(465,"div",18)(466,"span",19),e(467," p-icon"),o(468,"br"),t()()(),n(469,"td",20)(470,"code",28),e(471,"string "),t(),n(472,"code",29),e(473," TemplateRef<void>"),t()(),n(474,"td",22),e(475,"-"),t(),n(476,"td",23)(477,"em")(478,"strong"),e(479,"(opcional)"),t()(),n(480,"p"),e(481,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(482,"p"),e(483,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(484,"a",30),e(485,"Biblioteca de \xEDcones"),t(),e(486,". conforme exemplo abaixo:"),t(),n(487,"pre")(488,"code"),e(489,'<po-input p-icon="an an-user" p-label="PO input"></po-input>'),t()(),n(490,"p"),e(491,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(492,"em"),e(493,"Font Awesome"),t(),e(494,", da seguinte forma:"),t(),n(495,"pre")(496,"code"),e(497,'<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>'),t()(),n(498,"p"),e(499,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(500,"code"),e(501,"TemplateRef"),t(),e(502,", conforme exemplo abaixo:"),t(),n(503,"pre")(504,"code"),e(505,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>`),t()(),n(506,"blockquote")(507,"p"),e(508,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(509,"code"),e(510,"font-size: inherit"),t(),e(511," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(512,"tr",16)(513,"td",17)(514,"div",18)(515,"span",19),e(516," p-label"),o(517,"br"),t()()(),n(518,"td",20)(519,"code",28),e(520,"string"),t()(),n(521,"td",22),e(522,"-"),t(),n(523,"td",23)(524,"em")(525,"strong"),e(526,"(opcional)"),t()(),n(527,"p"),e(528,"R\xF3tulo do campo."),t()()(),n(529,"tr",16)(530,"td",17)(531,"div",18)(532,"span",19),e(533,"p-mask"),o(534,"br"),t()()(),n(535,"td",20)(536,"code",28),e(537,"string"),t()(),n(538,"td",22),e(539,"-"),t(),n(540,"td",23)(541,"em")(542,"strong"),e(543,"(opcional)"),t()(),n(544,"p"),e(545,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(546,"tr",16)(547,"td",17)(548,"div",18)(549,"span",19),e(550,"p-mask-format-model"),o(551,"br"),t()()(),n(552,"td",20)(553,"code",21),e(554,"boolean"),t()(),n(555,"td",22)(556,"p")(557,"code"),e(558,"false"),t()()(),n(559,"td",23)(560,"em")(561,"strong"),e(562,"(opcional)"),t()(),n(563,"p"),e(564,"Indica se o "),n(565,"code"),e(566,"model"),t(),e(567," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(568,"tr",16)(569,"td",17)(570,"div",18)(571,"span",19),e(572," p-mask-no-length-validation"),o(573,"br"),t()()(),n(574,"td",20)(575,"code",21),e(576,"boolean"),t()(),n(577,"td",22)(578,"p")(579,"code"),e(580,"false"),t()()(),n(581,"td",23)(582,"p"),e(583,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(584,"code"),e(585,"minLength"),t(),e(586,") e m\xE1ximo ("),n(587,"code"),e(588,"maxLength"),t(),e(589,") do campo."),t(),n(590,"ul")(591,"li"),e(592,"Quando "),n(593,"code"),e(594,"true"),t(),e(595,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(596,"li"),e(597,"Quando "),n(598,"code"),e(599,"false"),t(),e(600,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(601,"blockquote")(602,"p"),e(603,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(604,"code"),e(605,"p-mask-format-model"),t(),e(606,"."),t()(),n(607,"p"),e(608,"Exemplo:"),t(),n(609,"pre")(610,"code"),e(611,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>`),t()(),n(612,"ul")(613,"li"),e(614,"Entrada: "),n(615,"code"),e(616,"123-456"),t(),e(617," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(618,"code"),e(619,"-"),t(),e(620,"."),t()()()(),n(621,"tr",16)(622,"td",17)(623,"div",18)(624,"span",19),e(625," p-maxlength"),o(626,"br"),t()()(),n(627,"td",20)(628,"code",31),e(629,"number"),t()(),n(630,"td",22),e(631,"-"),t(),n(632,"td",23)(633,"em")(634,"strong"),e(635,"(opcional)"),t()(),n(636,"p"),e(637,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(638,"tr",16)(639,"td",17)(640,"div",18)(641,"span",19),e(642," p-minlength"),o(643,"br"),t()()(),n(644,"td",20)(645,"code",31),e(646,"number"),t()(),n(647,"td",22),e(648,"-"),t(),n(649,"td",23)(650,"em")(651,"strong"),e(652,"(opcional)"),t()(),n(653,"p"),e(654,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(655,"tr",16)(656,"td",17)(657,"div",18)(658,"span",19),e(659," name"),o(660,"br"),t()()(),n(661,"td",20)(662,"code",28),e(663,"string"),t()(),n(664,"td",22),e(665,"-"),t(),n(666,"td",23)(667,"p"),e(668,"Nome e identificador do campo."),t()()(),n(669,"tr",16)(670,"td",17)(671,"div",18)(672,"span",19),e(673," p-no-autocomplete"),o(674,"br"),t()()(),n(675,"td",20)(676,"code",21),e(677,"boolean"),t()(),n(678,"td",22)(679,"p")(680,"code"),e(681,"false"),t()()(),n(682,"td",23)(683,"em")(684,"strong"),e(685,"(opcional)"),t()(),n(686,"p"),e(687,"Define a propriedade nativa "),n(688,"code"),e(689,"autocomplete"),t(),e(690," do campo como "),n(691,"code"),e(692,"off"),t(),e(693,"."),t(),n(694,"blockquote")(695,"p"),e(696,"No componente "),n(697,"code"),e(698,"po-password"),t(),e(699," ser\xE1 definido como "),n(700,"code"),e(701,"new-password"),t(),e(702,"."),t()(),n(703,"p"),e(704,"Nos componentes "),n(705,"code"),e(706,"po-password"),t(),e(707," e "),n(708,"code"),e(709,"po-login"),t(),e(710," o valor padr\xE3o ser\xE1 "),n(711,"code"),e(712,"true"),t(),e(713,"."),t()()(),n(714,"tr",16)(715,"td",17)(716,"div",18)(717,"span",19),e(718," p-optional"),o(719,"br"),t()()(),n(720,"td",20)(721,"code",21),e(722,"boolean"),t()(),n(723,"td",22)(724,"p")(725,"code"),e(726,"false"),t()()(),n(727,"td",23)(728,"em")(729,"strong"),e(730,"(opcional)"),t()(),n(731,"p"),e(732,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(733,"blockquote")(734,"p"),e(735,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(736,"ul")(737,"li"),e(738,"O campo conter "),n(739,"code"),e(740,"p-required"),t(),e(741,";"),t(),n(742,"li"),e(743,"N\xE3o possuir "),n(744,"code"),e(745,"p-help"),t(),e(746," e/ou "),n(747,"code"),e(748,"p-label"),t(),e(749,"."),t()()()(),n(750,"tr",16)(751,"td",17)(752,"div",18)(753,"span",19),e(754,"p-pattern"),o(755,"br"),t()()(),n(756,"td",20)(757,"code",28),e(758,"string"),t()(),n(759,"td",22),e(760,"-"),t(),n(761,"td",23)(762,"em")(763,"strong"),e(764,"(opcional)"),t()(),n(765,"p"),e(766,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(767,"code"),e(768,"(p-mask)"),t(),e(769,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(770,"tr",16)(771,"td",17)(772,"div",18)(773,"span",19),e(774," p-placeholder"),o(775,"br"),t()()(),n(776,"td",20)(777,"code",28),e(778,"string"),t()(),n(779,"td",22)(780,"p"),e(781,"''"),t()(),n(782,"td",23)(783,"em")(784,"strong"),e(785,"(opcional)"),t()(),n(786,"p"),e(787,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(788,"tr",16)(789,"td",17)(790,"div",18)(791,"span",19),e(792,"p-readonly"),o(793,"br"),t()()(),n(794,"td",20)(795,"code",21),e(796,"boolean"),t()(),n(797,"td",22),e(798,"-"),t(),n(799,"td",23)(800,"em")(801,"strong"),e(802,"(opcional)"),t()(),n(803,"p"),e(804,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(805,"tr",16)(806,"td",17)(807,"div",18)(808,"span",19),e(809,"p-required"),o(810,"br"),t()()(),n(811,"td",20)(812,"code",21),e(813,"boolean"),t()(),n(814,"td",22)(815,"p")(816,"code"),e(817,"false"),t()()(),n(818,"td",23)(819,"em")(820,"strong"),e(821,"(opcional)"),t()(),n(822,"p"),e(823,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(824,"blockquote")(825,"p"),e(826,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(827,"code"),e(828,"(p-disabled)"),t(),e(829,"."),t()()()(),n(830,"tr",16)(831,"td",17)(832,"div",18)(833,"span",19),e(834," p-required-field-error-message"),o(835,"br"),t()()(),n(836,"td",20)(837,"code",21),e(838,"boolean"),t()(),n(839,"td",22)(840,"p")(841,"code"),e(842,"false"),t()()(),n(843,"td",23)(844,"em")(845,"strong"),e(846,"(opcional)"),t()(),n(847,"p"),e(848,"Exibe a mensagem setada na propriedade "),n(849,"code"),e(850,"p-error-pattern"),t(),e(851," se o campo estiver vazio e for requerido."),t(),n(852,"blockquote")(853,"p"),e(854,"Necess\xE1rio que a propriedade "),n(855,"code"),e(856,"p-required"),t(),e(857," esteja habilitada."),t()()()(),n(858,"tr",16)(859,"td",17)(860,"div",18)(861,"span",19),e(862," p-show-required"),o(863,"br"),t()()(),n(864,"td",20)(865,"code",21),e(866,"boolean"),t()(),n(867,"td",22),e(868,"-"),t(),n(869,"td",23)(870,"p"),e(871,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(872,"blockquote")(873,"p"),e(874,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(875,"ul")(876,"li"),e(877,"N\xE3o possuir "),n(878,"code"),e(879,"p-help"),t(),e(880," e/ou "),n(881,"code"),e(882,"p-label"),t(),e(883,"."),t()()()(),n(884,"tr",16)(885,"td",17)(886,"div",18)(887,"span",19),e(888," p-upper-case"),o(889,"br"),t()()(),n(890,"td",20)(891,"code",21),e(892,"boolean"),t()(),n(893,"td",22),e(894,"-"),t(),n(895,"td",23)(896,"p"),e(897,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(898,"h3",12),e(899,"M\xE9todos"),t(),n(900,"table",32)(901,"tr",16)(902,"th",33)(903,"div",18)(904,"h4")(905,"span",19),e(906," focus "),t()()()()(),n(907,"tr",23)(908,"td",23)(909,"p"),e(910,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(911,"p"),e(912,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(913,"pre")(914,"code"),e(915,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}`),t()()()()(),o(916,"br"),n(917,"h3"),e(918,"Interfaces"),t(),n(919,"h4",34)(920,"code",5),e(921,"ErrorAsyncProperties"),t()(),n(922,"div",2)(923,"p"),e(924,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(925,"h4",12),e(926,"Propriedades"),t(),n(927,"table",13)(928,"tr",14)(929,"th",15),e(930,"Nome"),t(),n(931,"th",15),e(932,"Tipo"),t(),n(933,"th",15),e(934,"Descri\xE7\xE3o"),t()(),n(935,"tr",16)(936,"td",17)(937,"div",18)(938,"span",19),e(939," errorAsync"),o(940,"br"),t()()(),n(941,"td",20)(942,"code",35),e(943,"(value) => Observable<boolean>"),t()(),n(944,"td",23)(945,"p"),e(946,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(947,"code"),e(948,"change"),t(),e(949," ou "),n(950,"code"),e(951,"change-model"),t(),e(952,", dependendo do valor da propriedade "),n(953,"code"),e(954,"triggerMode"),t(),e(955,"."),t()()(),n(956,"tr",16)(957,"td",17)(958,"div",18)(959,"span",19),e(960," triggerMode"),o(961,"br"),t()()(),n(962,"td",20)(963,"code",36),e(964,"'change' "),t(),n(965,"code",37),e(966," 'changeModel'"),t()(),n(967,"td",23)(968,"em")(969,"strong"),e(970,"(opcional)"),t()(),n(971,"p"),e(972,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(973,"code"),e(974,"change"),t(),e(975," ou "),n(976,"code"),e(977,"change-model"),t(),e(978,"."),t()()()()())},dependencies:[w],encapsulation:2})}return a})();var be=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(q(Y),q($))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Input",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),o(3,"sample-po-input-doc"),t(),n(4,"po-tab",3),o(5,"sample-po-input-basic-view")(6,"sample-po-input-labs-view")(7,"sample-po-input-reactive-form-view"),t()()()),l&2&&(d("p-actions",i.actions),p(2),d("p-active",i.activeTab.includes("doc")),p(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[ae,C,y,me,se,ue,Ee],encapsulation:2})}return a})();var Fe=[{path:"",component:be}],ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=V({type:a});static \u0275inj=T({imports:[A.forChild(Fe),A]})}return a})();var et=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=V({type:a});static \u0275inj=T({imports:[le,ge]})}return a})();export{et as DocPoInputModule};
