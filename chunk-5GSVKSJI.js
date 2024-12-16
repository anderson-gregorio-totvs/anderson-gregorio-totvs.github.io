import{$ as V,$a as k,Ca as H,Cd as W,Da as j,Ea as G,F as c,Fa as U,Fc as te,G as u,Ga as e,Ia as M,Ka as S,Kb as g,La as h,Lb as L,Ma as v,Mb as N,Nb as Q,Ob as Z,Od as ae,Pa as _,Pb as R,Sb as X,T as p,Tb as J,U as q,Vb as K,Wb as Y,Xd as C,Yb as $,Yd as y,Zb as A,_ as b,ha as d,ka as P,ld as ne,md as F,na as n,oa as t,oc as B,pa as o,re as w,sd as O,se as le,ta as D,ua as x,wd as ie,y as T,yd as oe,zc as ee}from"./chunk-TZ5FQAUY.js";var re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","input","p-label","PO Input"]],template:function(l,i){l&1&&o(0,"po-input",0)},dependencies:[F],encapsulation:2})}return a})();var he=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input Basic"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-basic/sample-po-input-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-input name="input" p-label="PO Input"> </po-input>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-input-basic/sample-po-input-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-input-basic',
  templateUrl: './sample-po-input-basic.component.html',
  standalone: false
})
export class SamplePoInputBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-basic"),t(),o(23,"hr")),l&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),M(" ",i.sampleCodeButtonLabel,""),p(),d("ngClass",_(4,he,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,re],encapsulation:2})}return a})();var de=(()=>{class a{input;errorPattern;event;help;icon;label;mask;maxlength;minlength;pattern;placeholder;properties;iconOptions=[{value:"ph ph-newspaper",label:"ph ph-newspaper"},{value:"ph ph-magnifying-glass",label:"ph ph-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"maskFormatModel",label:"Formatted Model"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"uppercase",label:"Upper Case"},{value:"showRequired",label:"Show Required"},{value:"maskNoLengthValidation",label:"Mask No Length Validation"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.input=void 0}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-labs"]],standalone:!1,decls:25,vars:35,consts:[["f","ngForm"],["name","input",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","ngModel","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-mask","p-mask-format-model","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-required","p-required-field-error-message","p-readonly","p-upper-case","p-show-required","p-mask-no-length-validation"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","mask","p-clean","","p-help","Ex.: Zip code: '99999-999'; License plate: '@@@-9999'","p-label","Mask",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'","p-label","Pattern (Regex)",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","2","p-label","Properties",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let s=D();n(0,"po-input",1),v("ngModelChange",function(r){return c(s),h(i.input,r)||(i.input=r),u(r)}),x("p-blur",function(){return c(s),u(i.changeEvent("p-blur"))})("p-change",function(){return c(s),u(i.changeEvent("p-change"))})("p-change-model",function(){return c(s),u(i.changeEvent("p-change-model"))})("p-enter",function(){return c(s),u(i.changeEvent("p-enter"))}),t(),o(1,"hr"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"hr"),n(6,"form",null,0)(8,"div",2)(9,"po-input",5),v("ngModelChange",function(r){return c(s),h(i.label,r)||(i.label=r),u(r)}),t(),n(10,"po-input",6),v("ngModelChange",function(r){return c(s),h(i.help,r)||(i.help=r),u(r)}),t()(),n(11,"div",2)(12,"po-input",7),v("ngModelChange",function(r){return c(s),h(i.placeholder,r)||(i.placeholder=r),u(r)}),t(),n(13,"po-input",8),v("ngModelChange",function(r){return c(s),h(i.errorPattern,r)||(i.errorPattern=r),u(r)}),t()(),n(14,"div",2)(15,"po-input",9),v("ngModelChange",function(r){return c(s),h(i.mask,r)||(i.mask=r),u(r)}),t(),n(16,"po-input",10),v("ngModelChange",function(r){return c(s),h(i.pattern,r)||(i.pattern=r),u(r)}),t()(),n(17,"div",2)(18,"po-number",11),v("ngModelChange",function(r){return c(s),h(i.minlength,r)||(i.minlength=r),u(r)}),t(),n(19,"po-number",12),v("ngModelChange",function(r){return c(s),h(i.maxlength,r)||(i.maxlength=r),u(r)}),t()(),n(20,"div",2)(21,"po-select",13),v("ngModelChange",function(r){return c(s),h(i.icon,r)||(i.icon=r),u(r)}),t(),n(22,"po-checkbox-group",14),v("ngModelChange",function(r){return c(s),h(i.properties,r)||(i.properties=r),u(r)}),t()(),n(23,"div",2)(24,"po-button",15),x("p-click",function(){return c(s),U(7).reset(),u(i.restore())}),t()()()}l&2&&(S("ngModel",i.input),d("p-clean",i.properties==null?null:i.properties.includes("clean"))("p-disabled",i.properties==null?null:i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-mask",i.mask)("p-mask-format-model",i.properties==null?null:i.properties.includes("maskFormatModel"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties==null?null:i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-required",i.properties==null?null:i.properties.includes("required"))("p-required-field-error-message",i.properties==null?null:i.properties.includes("requiredFieldErrorMessage"))("p-readonly",i.properties==null?null:i.properties.includes("readonly"))("p-upper-case",i.properties==null?null:i.properties.includes("uppercase"))("p-show-required",i.properties==null?null:i.properties.includes("showRequired"))("p-mask-no-length-validation",i.properties==null?null:i.properties.includes("maskNoLengthValidation")),p(3),d("p-value",i.input),p(),d("p-value",i.event),p(5),S("ngModel",i.label),p(),S("ngModel",i.help),p(2),S("ngModel",i.placeholder),p(),S("ngModel",i.errorPattern),p(2),S("ngModel",i.mask),p(),S("ngModel",i.pattern),p(2),S("ngModel",i.minlength),p(),S("ngModel",i.maxlength),p(2),S("ngModel",i.icon),d("p-options",i.iconOptions),p(),S("ngModel",i.properties),d("p-options",i.propertiesOptions))},dependencies:[R,L,N,Z,Q,B,ee,F,O,oe,W],encapsulation:2})}return a})();var Ce=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input Labs"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-labs/sample-po-input-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-input
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
    { value: 'ph ph-newspaper', label: 'ph ph-newspaper' },
    { value: 'ph ph-magnifying-glass', label: 'ph ph-magnifying-glass' },
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
    { value: 'maskNoLengthValidation', label: 'Mask No Length Validation' }
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
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-labs"),t(),o(23,"hr")),l&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),M(" ",i.sampleCodeButtonLabel,""),p(),d("ngClass",_(4,Ce,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,de],encapsulation:2})}return a})();var we=["reactiveFormData"],ce=(()=>{class a{fb;reactiveFormModal;reactiveForm;modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};constructor(m){this.fb=m,this.createReactiveForm()}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",g.compose([g.required,g.minLength(5),g.maxLength(30)])],address:["",g.compose([g.required,g.minLength(5),g.maxLength(50)])],number:["",g.compose([g.required,g.min(1),g.max(99999)])],email:["",g.required],website:["",g.required]})}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(l){return new(l||a)(q(K))};static \u0275cmp=b({type:a,selectors:[["sample-po-input-reactive-form"]],viewQuery:function(l,i){if(l&1&&H(we,7),l&2){let s;j(s=G())&&(i.reactiveFormModal=s.first)}},standalone:!1,decls:23,vars:8,consts:[["reactiveFormData",""],[3,"formGroup"],[1,"po-row"],["formControlName","name","p-clean","","p-icon","ph ph-user","p-label","Customer name",1,"po-md-12"],["formControlName","address","p-clean","","p-icon","ph ph-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"]],template:function(l,i){if(l&1){let s=D();n(0,"form",1)(1,"div",2),o(2,"po-input",3),t(),n(3,"div",2),o(4,"po-input",4)(5,"po-number",5),t(),n(6,"div",2),o(7,"po-email",6)(8,"po-url",7),t(),n(9,"div",2)(10,"po-button",8),x("p-click",function(){return c(s),u(i.saveForm())}),t()()(),n(11,"po-modal",9,0)(13,"div",2),o(14,"po-info",10),t(),o(15,"hr"),n(16,"div",2),o(17,"po-info",11)(18,"po-info",12),t(),o(19,"hr"),n(20,"div",2),o(21,"po-info",13)(22,"po-info",14),t()()}l&2&&(d("formGroup",i.reactiveForm),p(10),d("p-disabled",!i.reactiveForm.valid),p(),d("p-primary-action",i.modalPrimaryAction),p(3),d("p-value",i.reactiveForm.controls.name.value),p(3),d("p-value",i.reactiveForm.controls.address.value),p(),d("p-value",i.reactiveForm.controls.number.value),p(3),d("p-value",i.reactiveForm.controls.email.value),p(),d("p-value",i.reactiveForm.controls.website.value))},dependencies:[R,L,N,X,J,B,ne,F,O,ie,W,te],encapsulation:2})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input - Reactive Form"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<form [formGroup]="reactiveForm">
  <div class="po-row">
    <po-input class="po-md-12" formControlName="name" p-clean p-icon="ph ph-user" p-label="Customer name"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-9" formControlName="address" p-clean p-icon="ph ph-map-pin" p-label="Address"> </po-input>

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
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-reactive-form"),t(),o(23,"hr")),l&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),M(" ",i.sampleCodeButtonLabel,""),p(),d("ngClass",_(4,Me,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,ce],encapsulation:2})}return a})();var Ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-doc"]],standalone:!1,decls:954,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
utilizando `),n(389,"code"),e(390,"Reactive Forms"),t(),e(391,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(392,"code"),e(393,"asyncValidators"),t(),e(394,"."),t()()(),n(395,"tr",16)(396,"td",17)(397,"div",18)(398,"span",19),e(399," p-error-pattern"),o(400,"br"),t()()(),n(401,"td",20)(402,"code",28),e(403,"string"),t()(),n(404,"td",22),e(405,"-"),t(),n(406,"td",23)(407,"em")(408,"strong"),e(409,"(opcional)"),t()(),n(410,"p"),e(411,"Mensagem que ser\xE1 apresentada quando o "),n(412,"code"),e(413,"pattern"),t(),e(414," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(415,"blockquote")(416,"p"),e(417,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(418,"code"),e(419,"p-required-field-error-message"),t(),e(420," em conjunto."),t()()()(),n(421,"tr",16)(422,"td",17)(423,"div",18)(424,"span",19),e(425," p-help"),o(426,"br"),t()()(),n(427,"td",20)(428,"code",28),e(429,"string"),t()(),n(430,"td",22),e(431,"-"),t(),n(432,"td",23)(433,"em")(434,"strong"),e(435,"(opcional)"),t()(),n(436,"p"),e(437,"Texto de apoio do campo."),t()()(),n(438,"tr",16)(439,"td",17)(440,"div",18)(441,"span",19),e(442," p-icon"),o(443,"br"),t()()(),n(444,"td",20)(445,"code",28),e(446,"string "),t(),n(447,"code",29),e(448," TemplateRef<void>"),t()(),n(449,"td",22),e(450,"-"),t(),n(451,"td",23)(452,"em")(453,"strong"),e(454,"(opcional)"),t()(),n(455,"p"),e(456,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(457,"p"),e(458,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(459,"a",30),e(460,"Biblioteca de \xEDcones"),t(),e(461,". conforme exemplo abaixo:"),t(),n(462,"pre")(463,"code"),e(464,'<po-input p-icon="ph ph-user" p-label="PO input"></po-input>'),t()(),n(465,"p"),e(466,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(467,"em"),e(468,"Font Awesome"),t(),e(469,", da seguinte forma:"),t(),n(470,"pre")(471,"code"),e(472,'<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>'),t()(),n(473,"p"),e(474,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(475,"code"),e(476,"TemplateRef"),t(),e(477,", conforme exemplo abaixo:"),t(),n(478,"pre")(479,"code"),e(480,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>`),t()(),n(481,"blockquote")(482,"p"),e(483,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(484,"code"),e(485,"font-size: inherit"),t(),e(486," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(487,"tr",16)(488,"td",17)(489,"div",18)(490,"span",19),e(491," p-label"),o(492,"br"),t()()(),n(493,"td",20)(494,"code",28),e(495,"string"),t()(),n(496,"td",22),e(497,"-"),t(),n(498,"td",23)(499,"em")(500,"strong"),e(501,"(opcional)"),t()(),n(502,"p"),e(503,"R\xF3tulo do campo."),t()()(),n(504,"tr",16)(505,"td",17)(506,"div",18)(507,"span",19),e(508,"p-mask"),o(509,"br"),t()()(),n(510,"td",20)(511,"code",28),e(512,"string"),t()(),n(513,"td",22),e(514,"-"),t(),n(515,"td",23)(516,"em")(517,"strong"),e(518,"(opcional)"),t()(),n(519,"p"),e(520,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(521,"tr",16)(522,"td",17)(523,"div",18)(524,"span",19),e(525,"p-mask-format-model"),o(526,"br"),t()()(),n(527,"td",20)(528,"code",21),e(529,"boolean"),t()(),n(530,"td",22)(531,"p")(532,"code"),e(533,"false"),t()()(),n(534,"td",23)(535,"em")(536,"strong"),e(537,"(opcional)"),t()(),n(538,"p"),e(539,"Indica se o "),n(540,"code"),e(541,"model"),t(),e(542," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(543,"tr",16)(544,"td",17)(545,"div",18)(546,"span",19),e(547," p-mask-no-length-validation"),o(548,"br"),t()()(),n(549,"td",20)(550,"code",21),e(551,"boolean"),t()(),n(552,"td",22)(553,"p")(554,"code"),e(555,"false"),t()()(),n(556,"td",23)(557,"p"),e(558,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(559,"code"),e(560,"minLength"),t(),e(561,") e m\xE1ximo ("),n(562,"code"),e(563,"maxLength"),t(),e(564,") do campo."),t(),n(565,"ul")(566,"li"),e(567,"Quando "),n(568,"code"),e(569,"true"),t(),e(570,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(571,"li"),e(572,"Quando "),n(573,"code"),e(574,"false"),t(),e(575,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(576,"blockquote")(577,"p"),e(578,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(579,"code"),e(580,"p-mask-format-model"),t(),e(581,"."),t()(),n(582,"p"),e(583,"Exemplo:"),t(),n(584,"pre")(585,"code"),e(586,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>`),t()(),n(587,"ul")(588,"li"),e(589,"Entrada: "),n(590,"code"),e(591,"123-456"),t(),e(592," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(593,"code"),e(594,"-"),t(),e(595,"."),t()()()(),n(596,"tr",16)(597,"td",17)(598,"div",18)(599,"span",19),e(600," p-maxlength"),o(601,"br"),t()()(),n(602,"td",20)(603,"code",31),e(604,"number"),t()(),n(605,"td",22),e(606,"-"),t(),n(607,"td",23)(608,"em")(609,"strong"),e(610,"(opcional)"),t()(),n(611,"p"),e(612,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(613,"tr",16)(614,"td",17)(615,"div",18)(616,"span",19),e(617," p-minlength"),o(618,"br"),t()()(),n(619,"td",20)(620,"code",31),e(621,"number"),t()(),n(622,"td",22),e(623,"-"),t(),n(624,"td",23)(625,"em")(626,"strong"),e(627,"(opcional)"),t()(),n(628,"p"),e(629,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(630,"tr",16)(631,"td",17)(632,"div",18)(633,"span",19),e(634," name"),o(635,"br"),t()()(),n(636,"td",20)(637,"code",28),e(638,"string"),t()(),n(639,"td",22),e(640,"-"),t(),n(641,"td",23)(642,"p"),e(643,"Nome e identificador do campo."),t()()(),n(644,"tr",16)(645,"td",17)(646,"div",18)(647,"span",19),e(648," p-no-autocomplete"),o(649,"br"),t()()(),n(650,"td",20)(651,"code",21),e(652,"boolean"),t()(),n(653,"td",22)(654,"p")(655,"code"),e(656,"false"),t()()(),n(657,"td",23)(658,"em")(659,"strong"),e(660,"(opcional)"),t()(),n(661,"p"),e(662,"Define a propriedade nativa "),n(663,"code"),e(664,"autocomplete"),t(),e(665," do campo como "),n(666,"code"),e(667,"off"),t(),e(668,"."),t(),n(669,"blockquote")(670,"p"),e(671,"No componente "),n(672,"code"),e(673,"po-password"),t(),e(674," ser\xE1 definido como "),n(675,"code"),e(676,"new-password"),t(),e(677,"."),t()(),n(678,"p"),e(679,"Nos componentes "),n(680,"code"),e(681,"po-password"),t(),e(682," e "),n(683,"code"),e(684,"po-login"),t(),e(685," o valor padr\xE3o ser\xE1 "),n(686,"code"),e(687,"true"),t(),e(688,"."),t()()(),n(689,"tr",16)(690,"td",17)(691,"div",18)(692,"span",19),e(693," p-optional"),o(694,"br"),t()()(),n(695,"td",20)(696,"code",21),e(697,"boolean"),t()(),n(698,"td",22)(699,"p")(700,"code"),e(701,"false"),t()()(),n(702,"td",23)(703,"em")(704,"strong"),e(705,"(opcional)"),t()(),n(706,"p"),e(707,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(708,"blockquote")(709,"p"),e(710,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(711,"ul")(712,"li"),e(713,"O campo conter "),n(714,"code"),e(715,"p-required"),t(),e(716,";"),t(),n(717,"li"),e(718,"N\xE3o possuir "),n(719,"code"),e(720,"p-help"),t(),e(721," e/ou "),n(722,"code"),e(723,"p-label"),t(),e(724,"."),t()()()(),n(725,"tr",16)(726,"td",17)(727,"div",18)(728,"span",19),e(729,"p-pattern"),o(730,"br"),t()()(),n(731,"td",20)(732,"code",28),e(733,"string"),t()(),n(734,"td",22),e(735,"-"),t(),n(736,"td",23)(737,"em")(738,"strong"),e(739,"(opcional)"),t()(),n(740,"p"),e(741,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(742,"code"),e(743,"(p-mask)"),t(),e(744,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(745,"tr",16)(746,"td",17)(747,"div",18)(748,"span",19),e(749," p-placeholder"),o(750,"br"),t()()(),n(751,"td",20)(752,"code",28),e(753,"string"),t()(),n(754,"td",22)(755,"p"),e(756,"''"),t()(),n(757,"td",23)(758,"em")(759,"strong"),e(760,"(opcional)"),t()(),n(761,"p"),e(762,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(763,"tr",16)(764,"td",17)(765,"div",18)(766,"span",19),e(767,"p-readonly"),o(768,"br"),t()()(),n(769,"td",20)(770,"code",21),e(771,"boolean"),t()(),n(772,"td",22),e(773,"-"),t(),n(774,"td",23)(775,"em")(776,"strong"),e(777,"(opcional)"),t()(),n(778,"p"),e(779,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(780,"tr",16)(781,"td",17)(782,"div",18)(783,"span",19),e(784,"p-required"),o(785,"br"),t()()(),n(786,"td",20)(787,"code",21),e(788,"boolean"),t()(),n(789,"td",22)(790,"p")(791,"code"),e(792,"false"),t()()(),n(793,"td",23)(794,"em")(795,"strong"),e(796,"(opcional)"),t()(),n(797,"p"),e(798,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(799,"blockquote")(800,"p"),e(801,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(802,"code"),e(803,"(p-disabled)"),t(),e(804,"."),t()()()(),n(805,"tr",16)(806,"td",17)(807,"div",18)(808,"span",19),e(809," p-required-field-error-message"),o(810,"br"),t()()(),n(811,"td",20)(812,"code",21),e(813,"boolean"),t()(),n(814,"td",22)(815,"p")(816,"code"),e(817,"false"),t()()(),n(818,"td",23)(819,"em")(820,"strong"),e(821,"(opcional)"),t()(),n(822,"p"),e(823,"Exibe a mensagem setada na propriedade "),n(824,"code"),e(825,"p-error-pattern"),t(),e(826," se o campo estiver vazio e for requerido."),t(),n(827,"blockquote")(828,"p"),e(829,"Necess\xE1rio que a propriedade "),n(830,"code"),e(831,"p-required"),t(),e(832," esteja habilitada."),t()()()(),n(833,"tr",16)(834,"td",17)(835,"div",18)(836,"span",19),e(837," p-show-required"),o(838,"br"),t()()(),n(839,"td",20)(840,"code",21),e(841,"boolean"),t()(),n(842,"td",22),e(843,"-"),t(),n(844,"td",23)(845,"p"),e(846,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(847,"blockquote")(848,"p"),e(849,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(850,"ul")(851,"li"),e(852,"N\xE3o possuir "),n(853,"code"),e(854,"p-help"),t(),e(855," e/ou "),n(856,"code"),e(857,"p-label"),t(),e(858,"."),t()()()(),n(859,"tr",16)(860,"td",17)(861,"div",18)(862,"span",19),e(863," p-upper-case"),o(864,"br"),t()()(),n(865,"td",20)(866,"code",21),e(867,"boolean"),t()(),n(868,"td",22),e(869,"-"),t(),n(870,"td",23)(871,"p"),e(872,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(873,"h3",12),e(874,"M\xE9todos"),t(),n(875,"table",32)(876,"tr",16)(877,"th",33)(878,"div",18)(879,"h4")(880,"span",19),e(881," focus "),t()()()()(),n(882,"tr",23)(883,"td",23)(884,"p"),e(885,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(886,"p"),e(887,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(888,"pre")(889,"code"),e(890,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}`),t()()()()(),o(891,"br"),n(892,"h3"),e(893,"Interfaces"),t(),n(894,"h4",34)(895,"code",5),e(896,"ErrorAsyncProperties"),t()(),n(897,"div",2)(898,"p"),e(899,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(900,"h4",12),e(901,"Propriedades"),t(),n(902,"table",13)(903,"tr",14)(904,"th",15),e(905,"Nome"),t(),n(906,"th",15),e(907,"Tipo"),t(),n(908,"th",15),e(909,"Descri\xE7\xE3o"),t()(),n(910,"tr",16)(911,"td",17)(912,"div",18)(913,"span",19),e(914," errorAsync"),o(915,"br"),t()()(),n(916,"td",20)(917,"code",35),e(918,"(value) => Observable<boolean>"),t()(),n(919,"td",23)(920,"p"),e(921,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(922,"code"),e(923,"change"),t(),e(924," ou "),n(925,"code"),e(926,"change-model"),t(),e(927,", dependendo do valor da propriedade "),n(928,"code"),e(929,"triggerMode"),t(),e(930,"."),t()()(),n(931,"tr",16)(932,"td",17)(933,"div",18)(934,"span",19),e(935," triggerMode"),o(936,"br"),t()()(),n(937,"td",20)(938,"code",36),e(939,"'change' "),t(),n(940,"code",37),e(941," 'changeModel'"),t()(),n(942,"td",23)(943,"em")(944,"strong"),e(945,"(opcional)"),t()(),n(946,"p"),e(947,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(948,"code"),e(949,"change"),t(),e(950," ou "),n(951,"code"),e(952,"change-model"),t(),e(953,"."),t()()()()())},dependencies:[w],encapsulation:2})}return a})();var be=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(q(Y),q($))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Input",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),o(3,"sample-po-input-doc"),t(),n(4,"po-tab",3),o(5,"sample-po-input-basic-view")(6,"sample-po-input-labs-view")(7,"sample-po-input-reactive-form-view"),t()()()),l&2&&(d("p-actions",i.actions),p(2),d("p-active",i.activeTab.includes("doc")),p(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[ae,C,y,me,se,ue,Ee],encapsulation:2})}return a})();var Fe=[{path:"",component:be}],ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=V({type:a});static \u0275inj=T({imports:[A.forChild(Fe),A]})}return a})();var et=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=V({type:a});static \u0275inj=T({imports:[le,ge]})}return a})();export{et as DocPoInputModule};
