import{$ as D,$a as F,Ca as H,Cd as W,Da as j,Ea as G,F as c,Fa as U,Fc as te,G as u,Ga as e,Ia as M,Ka as h,Kb as g,La as S,Lb as L,Ma as v,Mb as N,Nb as Q,Ob as Z,Od as ae,Pa as _,Pb as R,Sb as X,T as p,Tb as J,U as q,Vb as K,Wb as Y,Xd as C,Yb as $,Yd as y,Zb as A,_ as b,ha as d,ka as P,ld as ne,md as I,na as n,oa as t,oc as B,pa as o,re as w,sd as O,se as le,ta as V,ua as f,wd as ie,y as T,yd as oe,zc as ee}from"./chunk-V5DQALWN.js";var re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","input","p-label","PO Input"]],template:function(l,i){l&1&&o(0,"po-input",0)},dependencies:[I],encapsulation:2})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input Basic"),t(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-basic/sample-po-input-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-input name="input" p-label="PO Input"> </po-input>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-input-basic/sample-po-input-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
    selector: 'sample-po-input-basic',
    templateUrl: './sample-po-input-basic.component.html',
    standalone: false
})
export class SamplePoInputBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-basic"),t(),o(23,"hr")),l&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),M(" ",i.sampleCodeButtonLabel,""),p(),d("ngClass",_(4,Se,i.hideSampleCodeTabs)))},dependencies:[F,w,C,y,re],encapsulation:2})}return a})();var de=(()=>{class a{input;errorPattern;event;help;icon;label;mask;maxlength;minlength;pattern;placeholder;properties;iconOptions=[{value:"ph ph-newspaper",label:"ph ph-newspaper"},{value:"ph ph-magnifying-glass",label:"ph ph-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"maskFormatModel",label:"Formatted Model"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"uppercase",label:"Upper Case"},{value:"showRequired",label:"Show Required"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.input=void 0}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-labs"]],standalone:!1,decls:25,vars:34,consts:[["f","ngForm"],["name","input",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","ngModel","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-mask","p-mask-format-model","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-required","p-required-field-error-message","p-readonly","p-upper-case","p-show-required"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","mask","p-clean","","p-help","Ex.: Zip code: '99999-999'; License plate: '@@@-9999'","p-label","Mask",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'","p-label","Pattern (Regex)",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","2","p-label","Properties",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let s=V();n(0,"po-input",1),v("ngModelChange",function(r){return c(s),S(i.input,r)||(i.input=r),u(r)}),f("p-blur",function(){return c(s),u(i.changeEvent("p-blur"))})("p-change",function(){return c(s),u(i.changeEvent("p-change"))})("p-change-model",function(){return c(s),u(i.changeEvent("p-change-model"))})("p-enter",function(){return c(s),u(i.changeEvent("p-enter"))}),t(),o(1,"hr"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"hr"),n(6,"form",null,0)(8,"div",2)(9,"po-input",5),v("ngModelChange",function(r){return c(s),S(i.label,r)||(i.label=r),u(r)}),t(),n(10,"po-input",6),v("ngModelChange",function(r){return c(s),S(i.help,r)||(i.help=r),u(r)}),t()(),n(11,"div",2)(12,"po-input",7),v("ngModelChange",function(r){return c(s),S(i.placeholder,r)||(i.placeholder=r),u(r)}),t(),n(13,"po-input",8),v("ngModelChange",function(r){return c(s),S(i.errorPattern,r)||(i.errorPattern=r),u(r)}),t()(),n(14,"div",2)(15,"po-input",9),v("ngModelChange",function(r){return c(s),S(i.mask,r)||(i.mask=r),u(r)}),t(),n(16,"po-input",10),v("ngModelChange",function(r){return c(s),S(i.pattern,r)||(i.pattern=r),u(r)}),t()(),n(17,"div",2)(18,"po-number",11),v("ngModelChange",function(r){return c(s),S(i.minlength,r)||(i.minlength=r),u(r)}),t(),n(19,"po-number",12),v("ngModelChange",function(r){return c(s),S(i.maxlength,r)||(i.maxlength=r),u(r)}),t()(),n(20,"div",2)(21,"po-select",13),v("ngModelChange",function(r){return c(s),S(i.icon,r)||(i.icon=r),u(r)}),t(),n(22,"po-checkbox-group",14),v("ngModelChange",function(r){return c(s),S(i.properties,r)||(i.properties=r),u(r)}),t()(),n(23,"div",2)(24,"po-button",15),f("p-click",function(){return c(s),U(7).reset(),u(i.restore())}),t()()()}l&2&&(h("ngModel",i.input),d("p-clean",i.properties==null?null:i.properties.includes("clean"))("p-disabled",i.properties==null?null:i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-mask",i.mask)("p-mask-format-model",i.properties==null?null:i.properties.includes("maskFormatModel"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties==null?null:i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-required",i.properties==null?null:i.properties.includes("required"))("p-required-field-error-message",i.properties==null?null:i.properties.includes("requiredFieldErrorMessage"))("p-readonly",i.properties==null?null:i.properties.includes("readonly"))("p-upper-case",i.properties==null?null:i.properties.includes("uppercase"))("p-show-required",i.properties==null?null:i.properties.includes("showRequired")),p(3),d("p-value",i.input),p(),d("p-value",i.event),p(5),h("ngModel",i.label),p(),h("ngModel",i.help),p(2),h("ngModel",i.placeholder),p(),h("ngModel",i.errorPattern),p(2),h("ngModel",i.mask),p(),h("ngModel",i.pattern),p(2),h("ngModel",i.minlength),p(),h("ngModel",i.maxlength),p(2),h("ngModel",i.icon),d("p-options",i.iconOptions),p(),h("ngModel",i.properties),d("p-options",i.propertiesOptions))},dependencies:[R,L,N,Z,Q,B,ee,I,O,oe,W],encapsulation:2})}return a})();var Ce=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input Labs"),t(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-labs/sample-po-input-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-input
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
    { value: 'showRequired', label: 'Show Required' }
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
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-labs"),t(),o(23,"hr")),l&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),M(" ",i.sampleCodeButtonLabel,""),p(),d("ngClass",_(4,Ce,i.hideSampleCodeTabs)))},dependencies:[F,w,C,y,de],encapsulation:2})}return a})();var we=["reactiveFormData"],ce=(()=>{class a{fb;reactiveFormModal;reactiveForm;modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};constructor(m){this.fb=m,this.createReactiveForm()}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",g.compose([g.required,g.minLength(5),g.maxLength(30)])],address:["",g.compose([g.required,g.minLength(5),g.maxLength(50)])],number:["",g.compose([g.required,g.min(1),g.max(99999)])],email:["",g.required],website:["",g.required]})}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(l){return new(l||a)(q(K))};static \u0275cmp=b({type:a,selectors:[["sample-po-input-reactive-form"]],viewQuery:function(l,i){if(l&1&&H(we,7),l&2){let s;j(s=G())&&(i.reactiveFormModal=s.first)}},standalone:!1,decls:23,vars:8,consts:[["reactiveFormData",""],[3,"formGroup"],[1,"po-row"],["formControlName","name","p-clean","","p-icon","ph ph-user","p-label","Customer name",1,"po-md-12"],["formControlName","address","p-clean","","p-icon","ph ph-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"]],template:function(l,i){if(l&1){let s=V();n(0,"form",1)(1,"div",2),o(2,"po-input",3),t(),n(3,"div",2),o(4,"po-input",4)(5,"po-number",5),t(),n(6,"div",2),o(7,"po-email",6)(8,"po-url",7),t(),n(9,"div",2)(10,"po-button",8),f("p-click",function(){return c(s),u(i.saveForm())}),t()()(),n(11,"po-modal",9,0)(13,"div",2),o(14,"po-info",10),t(),o(15,"hr"),n(16,"div",2),o(17,"po-info",11)(18,"po-info",12),t(),o(19,"hr"),n(20,"div",2),o(21,"po-info",13)(22,"po-info",14),t()()}l&2&&(d("formGroup",i.reactiveForm),p(10),d("p-disabled",!i.reactiveForm.valid),p(),d("p-primary-action",i.modalPrimaryAction),p(3),d("p-value",i.reactiveForm.controls.name.value),p(3),d("p-value",i.reactiveForm.controls.address.value),p(),d("p-value",i.reactiveForm.controls.number.value),p(3),d("p-value",i.reactiveForm.controls.email.value),p(),d("p-value",i.reactiveForm.controls.website.value))},dependencies:[R,L,N,X,J,B,ne,I,O,ie,W,te],encapsulation:2})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input - Reactive Form"),t(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<form [formGroup]="reactiveForm">
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
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-reactive-form"),t(),o(23,"hr")),l&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),M(" ",i.sampleCodeButtonLabel,""),p(),d("ngClass",_(4,Me,i.hideSampleCodeTabs)))},dependencies:[F,w,C,y,ce],encapsulation:2})}return a})();var Ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-doc"]],standalone:!1,decls:901,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
mesmo quando desabilitado.`),t()()(),n(521,"tr",16)(522,"td",17)(523,"div",18)(524,"span",19),e(525,"p-mask-format-model"),o(526,"br"),t()()(),n(527,"td",20)(528,"code",21),e(529,"boolean"),t()(),n(530,"td",22)(531,"p")(532,"code"),e(533,"false"),t()()(),n(534,"td",23)(535,"em")(536,"strong"),e(537,"(opcional)"),t()(),n(538,"p"),e(539,"Indica se o "),n(540,"code"),e(541,"model"),t(),e(542," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(543,"tr",16)(544,"td",17)(545,"div",18)(546,"span",19),e(547," p-maxlength"),o(548,"br"),t()()(),n(549,"td",20)(550,"code",31),e(551,"number"),t()(),n(552,"td",22),e(553,"-"),t(),n(554,"td",23)(555,"em")(556,"strong"),e(557,"(opcional)"),t()(),n(558,"p"),e(559,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(560,"tr",16)(561,"td",17)(562,"div",18)(563,"span",19),e(564," p-minlength"),o(565,"br"),t()()(),n(566,"td",20)(567,"code",31),e(568,"number"),t()(),n(569,"td",22),e(570,"-"),t(),n(571,"td",23)(572,"em")(573,"strong"),e(574,"(opcional)"),t()(),n(575,"p"),e(576,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(577,"tr",16)(578,"td",17)(579,"div",18)(580,"span",19),e(581," name"),o(582,"br"),t()()(),n(583,"td",20)(584,"code",28),e(585,"string"),t()(),n(586,"td",22),e(587,"-"),t(),n(588,"td",23)(589,"p"),e(590,"Nome e identificador do campo."),t()()(),n(591,"tr",16)(592,"td",17)(593,"div",18)(594,"span",19),e(595," p-no-autocomplete"),o(596,"br"),t()()(),n(597,"td",20)(598,"code",21),e(599,"boolean"),t()(),n(600,"td",22)(601,"p")(602,"code"),e(603,"false"),t()()(),n(604,"td",23)(605,"em")(606,"strong"),e(607,"(opcional)"),t()(),n(608,"p"),e(609,"Define a propriedade nativa "),n(610,"code"),e(611,"autocomplete"),t(),e(612," do campo como "),n(613,"code"),e(614,"off"),t(),e(615,"."),t(),n(616,"blockquote")(617,"p"),e(618,"No componente "),n(619,"code"),e(620,"po-password"),t(),e(621," ser\xE1 definido como "),n(622,"code"),e(623,"new-password"),t(),e(624,"."),t()(),n(625,"p"),e(626,"Nos componentes "),n(627,"code"),e(628,"po-password"),t(),e(629," e "),n(630,"code"),e(631,"po-login"),t(),e(632," o valor padr\xE3o ser\xE1 "),n(633,"code"),e(634,"true"),t(),e(635,"."),t()()(),n(636,"tr",16)(637,"td",17)(638,"div",18)(639,"span",19),e(640," p-optional"),o(641,"br"),t()()(),n(642,"td",20)(643,"code",21),e(644,"boolean"),t()(),n(645,"td",22)(646,"p")(647,"code"),e(648,"false"),t()()(),n(649,"td",23)(650,"em")(651,"strong"),e(652,"(opcional)"),t()(),n(653,"p"),e(654,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(655,"blockquote")(656,"p"),e(657,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(658,"ul")(659,"li"),e(660,"O campo conter "),n(661,"code"),e(662,"p-required"),t(),e(663,";"),t(),n(664,"li"),e(665,"N\xE3o possuir "),n(666,"code"),e(667,"p-help"),t(),e(668," e/ou "),n(669,"code"),e(670,"p-label"),t(),e(671,"."),t()()()(),n(672,"tr",16)(673,"td",17)(674,"div",18)(675,"span",19),e(676,"p-pattern"),o(677,"br"),t()()(),n(678,"td",20)(679,"code",28),e(680,"string"),t()(),n(681,"td",22),e(682,"-"),t(),n(683,"td",23)(684,"em")(685,"strong"),e(686,"(opcional)"),t()(),n(687,"p"),e(688,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(689,"code"),e(690,"(p-mask)"),t(),e(691,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(692,"tr",16)(693,"td",17)(694,"div",18)(695,"span",19),e(696," p-placeholder"),o(697,"br"),t()()(),n(698,"td",20)(699,"code",28),e(700,"string"),t()(),n(701,"td",22)(702,"p"),e(703,"''"),t()(),n(704,"td",23)(705,"em")(706,"strong"),e(707,"(opcional)"),t()(),n(708,"p"),e(709,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(710,"tr",16)(711,"td",17)(712,"div",18)(713,"span",19),e(714,"p-readonly"),o(715,"br"),t()()(),n(716,"td",20)(717,"code",21),e(718,"boolean"),t()(),n(719,"td",22),e(720,"-"),t(),n(721,"td",23)(722,"em")(723,"strong"),e(724,"(opcional)"),t()(),n(725,"p"),e(726,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(727,"tr",16)(728,"td",17)(729,"div",18)(730,"span",19),e(731,"p-required"),o(732,"br"),t()()(),n(733,"td",20)(734,"code",21),e(735,"boolean"),t()(),n(736,"td",22)(737,"p")(738,"code"),e(739,"false"),t()()(),n(740,"td",23)(741,"em")(742,"strong"),e(743,"(opcional)"),t()(),n(744,"p"),e(745,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(746,"blockquote")(747,"p"),e(748,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(749,"code"),e(750,"(p-disabled)"),t(),e(751,"."),t()()()(),n(752,"tr",16)(753,"td",17)(754,"div",18)(755,"span",19),e(756," p-required-field-error-message"),o(757,"br"),t()()(),n(758,"td",20)(759,"code",21),e(760,"boolean"),t()(),n(761,"td",22)(762,"p")(763,"code"),e(764,"false"),t()()(),n(765,"td",23)(766,"em")(767,"strong"),e(768,"(opcional)"),t()(),n(769,"p"),e(770,"Exibe a mensagem setada na propriedade "),n(771,"code"),e(772,"p-error-pattern"),t(),e(773," se o campo estiver vazio e for requerido."),t(),n(774,"blockquote")(775,"p"),e(776,"Necess\xE1rio que a propriedade "),n(777,"code"),e(778,"p-required"),t(),e(779," esteja habilitada."),t()()()(),n(780,"tr",16)(781,"td",17)(782,"div",18)(783,"span",19),e(784," p-show-required"),o(785,"br"),t()()(),n(786,"td",20)(787,"code",21),e(788,"boolean"),t()(),n(789,"td",22),e(790,"-"),t(),n(791,"td",23)(792,"p"),e(793,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(794,"blockquote")(795,"p"),e(796,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(797,"ul")(798,"li"),e(799,"N\xE3o possuir "),n(800,"code"),e(801,"p-help"),t(),e(802," e/ou "),n(803,"code"),e(804,"p-label"),t(),e(805,"."),t()()()(),n(806,"tr",16)(807,"td",17)(808,"div",18)(809,"span",19),e(810," p-upper-case"),o(811,"br"),t()()(),n(812,"td",20)(813,"code",21),e(814,"boolean"),t()(),n(815,"td",22),e(816,"-"),t(),n(817,"td",23)(818,"p"),e(819,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(820,"h3",12),e(821,"M\xE9todos"),t(),n(822,"table",32)(823,"tr",16)(824,"th",33)(825,"div",18)(826,"h4")(827,"span",19),e(828," focus "),t()()()()(),n(829,"tr",23)(830,"td",23)(831,"p"),e(832,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(833,"p"),e(834,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(835,"pre")(836,"code"),e(837,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}`),t()()()()(),o(838,"br"),n(839,"h3"),e(840,"Interfaces"),t(),n(841,"h4",34)(842,"code",5),e(843,"ErrorAsyncProperties"),t()(),n(844,"div",2)(845,"p"),e(846,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(847,"h4",12),e(848,"Propriedades"),t(),n(849,"table",13)(850,"tr",14)(851,"th",15),e(852,"Nome"),t(),n(853,"th",15),e(854,"Tipo"),t(),n(855,"th",15),e(856,"Descri\xE7\xE3o"),t()(),n(857,"tr",16)(858,"td",17)(859,"div",18)(860,"span",19),e(861," errorAsync"),o(862,"br"),t()()(),n(863,"td",20)(864,"code",35),e(865,"(value) => Observable<boolean>"),t()(),n(866,"td",23)(867,"p"),e(868,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(869,"code"),e(870,"change"),t(),e(871," ou "),n(872,"code"),e(873,"change-model"),t(),e(874,", dependendo do valor da propriedade "),n(875,"code"),e(876,"triggerMode"),t(),e(877,"."),t()()(),n(878,"tr",16)(879,"td",17)(880,"div",18)(881,"span",19),e(882," triggerMode"),o(883,"br"),t()()(),n(884,"td",20)(885,"code",36),e(886,"'change' "),t(),n(887,"code",37),e(888," 'changeModel'"),t()(),n(889,"td",23)(890,"em")(891,"strong"),e(892,"(opcional)"),t()(),n(893,"p"),e(894,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(895,"code"),e(896,"change"),t(),e(897," ou "),n(898,"code"),e(899,"change-model"),t(),e(900,"."),t()()()()())},dependencies:[w],encapsulation:2})}return a})();var be=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(q(Y),q($))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Input",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),o(3,"sample-po-input-doc"),t(),n(4,"po-tab",3),o(5,"sample-po-input-basic-view")(6,"sample-po-input-labs-view")(7,"sample-po-input-reactive-form-view"),t()()()),l&2&&(d("p-actions",i.actions),p(2),d("p-active",i.activeTab.includes("doc")),p(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[ae,C,y,me,se,ue,Ee],encapsulation:2})}return a})();var Ie=[{path:"",component:be}],ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=D({type:a});static \u0275inj=T({imports:[A.forChild(Ie),A]})}return a})();var et=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=D({type:a});static \u0275inj=T({imports:[le,ge]})}return a})();export{et as DocPoInputModule};
