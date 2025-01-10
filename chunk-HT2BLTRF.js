import{$ as U,$a as P,Ca as N,Cd as W,Da as O,Ea as j,F as c,Fc as _,G as u,Ga as n,Ia as y,Ka as h,Kb as R,La as f,Lb as L,Ma as E,Mb as F,Nb as X,Ob as k,Od as I,Pa as M,Pb as D,Sb as ee,T as p,Tb as te,U as A,Vb as ne,Wb as oe,Xd as C,Yb as ie,Yd as v,Zb as $,_ as g,bb as K,ea as Q,ha as s,ka as T,ld as Y,md as B,na as e,oa as t,oc as ae,pa as a,re as w,sd as re,se as pe,ta as z,ua as x,va as J,y as G,zc as le,zd as q}from"./chunk-QVEZB6GT.js";var me=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-textarea-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","textarea","p-label","PO Textarea"]],template:function(l,o){l&1&&a(0,"po-textarea",0)},dependencies:[q],encapsulation:2})}return i})();var we=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-textarea-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(a(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Textarea Basic"),t(),e(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),a(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-textarea-basic/sample-po-textarea-basic.component.html"),t(),e(13,"pre",7),n(14,`<po-textarea name="textarea" p-label="PO Textarea"> </po-textarea>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-textarea-basic/sample-po-textarea-basic.component.ts"),t(),e(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-textarea-basic',
  templateUrl: './sample-po-textarea-basic.component.html',
  standalone: false
})
export class SamplePoTextareaBasicComponent {}
`),t()()()()(),e(21,"div",10),a(22,"sample-po-textarea-basic"),t(),a(23,"hr")),l&2&&(p(5),T("po-icon "+o.sampleCodeButtonIcon),p(),y(" ",o.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,we,o.hideSampleCodeTabs)))},dependencies:[P,w,C,v,me],encapsulation:2})}return i})();var ce=(()=>{class i{event;help;label;maxlength;minlength;placeholder;properties;fieldErrorMessage;rows;textarea;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.textarea=void 0,this.label=void 0,this.help=void 0,this.minlength=void 0,this.maxlength=void 0,this.event=void 0,this.fieldErrorMessage="",this.rows=void 0,this.placeholder="",this.properties=[]}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-textarea-labs"]],standalone:!1,decls:22,vars:25,consts:[["f","ngForm"],["name","textarea",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","ngModel","p-disabled","p-help","p-label","p-maxlength","p-minlength","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-rows","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","rows","p-clean","","p-label","Rows","p-min","3",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,o){if(l&1){let d=z();e(0,"po-textarea",1),E("ngModelChange",function(r){return c(d),f(o.textarea,r)||(o.textarea=r),u(r)}),x("p-blur",function(){return c(d),u(o.changeEvent("p-blur"))})("p-change",function(){return c(d),u(o.changeEvent("p-change"))})("p-change-model",function(){return c(d),u(o.changeEvent("p-change-model"))})("p-enter",function(){return c(d),u(o.changeEvent("p-enter"))}),t(),a(1,"hr"),e(2,"div",2),a(3,"po-info",3)(4,"po-info",4),t(),a(5,"hr"),e(6,"form",null,0)(8,"div",2)(9,"po-input",5),E("ngModelChange",function(r){return c(d),f(o.label,r)||(o.label=r),u(r)}),t(),e(10,"po-input",6),E("ngModelChange",function(r){return c(d),f(o.help,r)||(o.help=r),u(r)}),t()(),e(11,"div",2)(12,"po-input",7),E("ngModelChange",function(r){return c(d),f(o.placeholder,r)||(o.placeholder=r),u(r)}),t(),e(13,"po-number",8),E("ngModelChange",function(r){return c(d),f(o.rows,r)||(o.rows=r),u(r)}),t()(),e(14,"div",2)(15,"po-number",9),E("ngModelChange",function(r){return c(d),f(o.minlength,r)||(o.minlength=r),u(r)}),t(),e(16,"po-number",10),E("ngModelChange",function(r){return c(d),f(o.maxlength,r)||(o.maxlength=r),u(r)}),t()(),e(17,"div",2)(18,"po-input",11),E("ngModelChange",function(r){return c(d),f(o.fieldErrorMessage,r)||(o.fieldErrorMessage=r),u(r)}),t(),e(19,"po-checkbox-group",12),E("ngModelChange",function(r){return c(d),f(o.properties,r)||(o.properties=r),u(r)}),t()(),e(20,"div",2)(21,"po-button",13),x("p-click",function(){return c(d),u(o.restore())}),t()()()}l&2&&(h("ngModel",o.textarea),s("p-disabled",o.properties.includes("disabled"))("p-help",o.help)("p-label",o.label)("p-maxlength",o.maxlength)("p-minlength",o.minlength)("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-readonly",o.properties.includes("readonly"))("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-rows",o.rows)("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit")),p(3),s("p-value",o.textarea),p(),s("p-value",o.event),p(5),h("ngModel",o.label),p(),h("ngModel",o.help),p(2),h("ngModel",o.placeholder),p(),h("ngModel",o.rows),p(2),h("ngModel",o.minlength),p(),h("ngModel",o.maxlength),p(2),h("ngModel",o.fieldErrorMessage),p(),h("ngModel",o.properties),s("p-options",o.propertiesOptions))},dependencies:[D,L,F,k,X,ae,le,B,re,q,W],encapsulation:2})}return i})();var Me=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-textarea-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(a(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Textarea Labs"),t(),e(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),a(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-textarea-labs/sample-po-textarea-labs.component.html"),t(),e(13,"pre",7),n(14,`<po-textarea
  name="textarea"
  [(ngModel)]="textarea"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-rows]="rows"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-textarea>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="textarea"> </po-info>

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

    <po-number class="po-md-6" name="rows" [(ngModel)]="rows" p-clean p-label="Rows" p-min="3"> </po-number>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

    <po-number class="po-md-6" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>
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

    <po-checkbox-group
      class="po-md-6"
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
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-textarea-labs/sample-po-textarea-labs.component.ts"),t(),e(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-labs',
  templateUrl: './sample-po-textarea-labs.component.html',
  standalone: false
})
export class SamplePoTextareaLabsComponent implements OnInit {
  event: string;
  help: string;
  label: string;
  maxlength: number;
  minlength: number;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  rows: string;
  textarea: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
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
    this.textarea = undefined;
    this.label = undefined;
    this.help = undefined;
    this.minlength = undefined;
    this.maxlength = undefined;
    this.event = undefined;
    this.fieldErrorMessage = '';
    this.rows = undefined;
    this.placeholder = '';
    this.properties = [];
  }
}
`),t()()()()(),e(21,"div",10),a(22,"sample-po-textarea-labs"),t(),a(23,"hr")),l&2&&(p(5),T("po-icon "+o.sampleCodeButtonIcon),p(),y(" ",o.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,Me,o.hideSampleCodeTabs)))},dependencies:[P,w,C,v,ce],encapsulation:2})}return i})();var _e=["formEmail"];function qe(i,Ce){if(i&1&&(e(0,"div")(1,"div",8),a(2,"po-info",14),t(),a(3,"hr"),t()),i&2){let m=J();p(2),s("p-value",m.cc)}}var ge=(()=>{class i{formEmail;poModal;cc="";emailText="";from="";subject="";to="";pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:"Ok"};getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-textarea-email"]],viewQuery:function(l,o){if(l&1&&(N(_e,7),N(_,7)),l&2){let d;O(d=j())&&(o.formEmail=d.first),O(d=j())&&(o.poModal=d.first)}},standalone:!1,decls:19,vars:12,consts:[["formEmail","ngForm"],["p-title","Send email",3,"p-actions"],["name","from","p-clean","","p-label","From","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","emailText","p-label","E-mail","p-required","","p-rows","8",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],[4,"ngIf"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(l,o){if(l&1){let d=z();e(0,"po-page-default",1)(1,"form",null,0)(3,"po-email",2),E("ngModelChange",function(r){return c(d),f(o.from,r)||(o.from=r),u(r)}),t(),e(4,"po-email",3),E("ngModelChange",function(r){return c(d),f(o.to,r)||(o.to=r),u(r)}),t(),e(5,"po-email",4),E("ngModelChange",function(r){return c(d),f(o.cc,r)||(o.cc=r),u(r)}),t(),e(6,"po-input",5),E("ngModelChange",function(r){return c(d),f(o.subject,r)||(o.subject=r),u(r)}),t(),e(7,"po-textarea",6),E("ngModelChange",function(r){return c(d),f(o.emailText,r)||(o.emailText=r),u(r)}),t()()(),e(8,"po-modal",7)(9,"div",8),a(10,"po-info",9)(11,"po-info",10),t(),a(12,"hr"),Q(13,qe,4,1,"div",11),e(14,"div",8),a(15,"po-info",12),t(),a(16,"hr"),e(17,"div",8)(18,"po-textarea",13),E("ngModelChange",function(r){return c(d),f(o.emailText,r)||(o.emailText=r),u(r)}),t()()()}l&2&&(s("p-actions",o.getPageAction()),p(3),h("ngModel",o.from),p(),h("ngModel",o.to),p(),h("ngModel",o.cc),p(),h("ngModel",o.subject),p(),h("ngModel",o.emailText),p(),s("p-primary-action",o.primaryAction),p(2),s("p-value",o.from),p(),s("p-value",o.to),p(2),s("ngIf",o.cc!==""),p(2),s("p-value",o.subject),p(3),h("ngModel",o.emailText))},dependencies:[K,D,L,F,k,X,Y,B,q,W,_,I],encapsulation:2})}return i})();var Le=i=>({"docs-sample-code-tabs":i}),be=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-textarea-email-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(a(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Textarea - Email"),t(),e(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),a(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-textarea-email/sample-po-textarea-email.component.html"),t(),e(13,"pre",7),n(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
  <form #formEmail="ngForm">
    <po-email class="po-sm-12" name="from" [(ngModel)]="from" p-clean p-label="From" p-required> </po-email>

    <po-email class="po-sm-12" name="to" [(ngModel)]="to" p-clean p-label="To" p-required> </po-email>

    <po-email class="po-sm-12" name="cc" [(ngModel)]="cc" p-clean p-label="CC"> </po-email>

    <po-input class="po-sm-12" name="subject" [(ngModel)]="subject" p-clean p-label="Subject" p-required> </po-input>

    <po-textarea class="po-sm-12" name="emailText" [(ngModel)]="emailText" p-label="E-mail" p-required p-rows="8">
    </po-textarea>
  </form>
</po-page-default>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="from"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="to"> </po-info>
  </div>

  <hr />

  <div *ngIf="cc !== ''">
    <div class="po-row">
      <po-info class="po-md-12" p-label="CC:" [p-value]="cc"> </po-info>
    </div>
    <hr />
  </div>

  <div class="po-row">
    <po-info class="po-md-12" p-label="Subject:" [p-value]="subject"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-textarea class="po-md-12" name="text" [(ngModel)]="emailText" p-label="E-mail" p-readonly p-rows="6">
    </po-textarea>
  </div>
</po-modal>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-textarea-email/sample-po-textarea-email.component.ts"),t(),e(19,"pre",9),n(20,`import { Component, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-email',
  templateUrl: './sample-po-textarea-email.component.html',
  standalone: false
})
export class SamplePoTextareaEmailComponent {
  @ViewChild('formEmail', { static: true }) formEmail: UntypedFormControl;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  cc: string = '';
  emailText: string = '';
  from: string = '';
  subject: string = '';
  to: string = '';

  pageActions: Array<PoPageAction>;
  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.reset();
    },
    label: 'Ok'
  };
  getPageAction() {
    const isDisabled = this.formEmail ? !this.formEmail['valid'] : true;
    return [
      { label: 'Send', action: this.send.bind(this), disabled: isDisabled },
      { label: 'Clean', action: this.reset.bind(this) }
    ];
  }

  reset() {
    this.formEmail.reset();
  }

  send() {
    this.poModal.open();
  }
}
`),t()()()()(),e(21,"div",10),a(22,"sample-po-textarea-email"),t(),a(23,"hr")),l&2&&(p(5),T("po-icon "+o.sampleCodeButtonIcon),p(),y(" ",o.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,Le,o.hideSampleCodeTabs)))},dependencies:[P,w,C,v,ge],encapsulation:2})}return i})();function ke(i,Ce){if(i&1&&(e(0,"div")(1,"div",8),a(2,"po-info",14),t(),a(3,"hr"),t()),i&2){let m=J();p(2),s("p-value",m.formEmail.get("cc").value)}}var he=(()=>{class i{formBuilder;poModal;formEmail;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:"Ok"};constructor(m){this.formBuilder=m}ngOnInit(){this.formEmail=this.formBuilder.group({cc:null,from:[null,R.required],to:[null,R.required],emailText:[null,R.required],subject:[null,R.required]})}getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static \u0275fac=function(l){return new(l||i)(A(ne))};static \u0275cmp=g({type:i,selectors:[["sample-po-textarea-email-reactive-form"]],viewQuery:function(l,o){if(l&1&&N(_,7),l&2){let d;O(d=j())&&(o.poModal=d.first)}},standalone:!1,decls:18,vars:8,consts:[["p-title","Send email",3,"p-actions"],[3,"formGroup"],["name","from","formControlName","from","p-clean","","p-label","From","p-required","",1,"po-sm-12"],["name","to","formControlName","to","p-clean","","p-label","To","p-required","",1,"po-sm-12"],["name","cc","formControlName","cc","p-clean","","p-label","CC",1,"po-sm-12"],["name","subject","formControlName","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12"],["name","emailText","formControlName","emailText","p-label","E-mail","p-rows","8","p-required","",1,"po-sm-12"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],[4,"ngIf"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-required","","p-rows","6",1,"po-md-12",3,"ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(l,o){l&1&&(e(0,"po-page-default",0)(1,"form",1),a(2,"po-email",2)(3,"po-email",3)(4,"po-email",4)(5,"po-input",5)(6,"po-textarea",6),t()(),e(7,"po-modal",7)(8,"div",8),a(9,"po-info",9)(10,"po-info",10),t(),a(11,"hr"),Q(12,ke,4,1,"div",11),e(13,"div",8),a(14,"po-info",12),t(),a(15,"hr"),e(16,"div",8),a(17,"po-textarea",13),t()()),l&2&&(s("p-actions",o.getPageAction()),p(),s("formGroup",o.formEmail),p(6),s("p-primary-action",o.primaryAction),p(2),s("p-value",o.formEmail.get("from").value),p(),s("p-value",o.formEmail.get("to").value),p(2),s("ngIf",o.formEmail.get("cc").value),p(2),s("p-value",o.formEmail.get("subject").value),p(3),s("ngModel",o.formEmail.get("emailText").value))},dependencies:[K,D,L,F,k,ee,te,Y,B,q,W,_,I],encapsulation:2})}return i})();var Be=i=>({"docs-sample-code-tabs":i}),fe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-textarea-email-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(a(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Textarea - Email Reactive Form"),t(),e(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),a(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html"),t(),e(13,"pre",7),n(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
  <form [formGroup]="formEmail">
    <po-email class="po-sm-12" name="from" formControlName="from" p-clean p-label="From" p-required> </po-email>

    <po-email class="po-sm-12" name="to" formControlName="to" p-clean p-label="To" p-required> </po-email>

    <po-email class="po-sm-12" name="cc" formControlName="cc" p-clean p-label="CC"> </po-email>

    <po-input class="po-sm-12" name="subject" formControlName="subject" p-clean p-label="Subject" p-required>
    </po-input>

    <po-textarea class="po-sm-12" name="emailText" formControlName="emailText" p-label="E-mail" p-rows="8" p-required>
    </po-textarea>
  </form>
</po-page-default>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="formEmail.get('from').value"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="formEmail.get('to').value"> </po-info>
  </div>

  <hr />

  <div *ngIf="formEmail.get('cc').value">
    <div class="po-row">
      <po-info class="po-md-12" p-label="CC:" [p-value]="formEmail.get('cc').value"> </po-info>
    </div>
    <hr />
  </div>

  <div class="po-row">
    <po-info class="po-md-12" p-label="Subject:" [p-value]="formEmail.get('subject').value"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-textarea
      class="po-md-12"
      name="text"
      [ngModel]="formEmail.get('emailText').value"
      p-label="E-mail"
      p-readonly
      p-required
      p-rows="6"
    >
    </po-textarea>
  </div>
</po-modal>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts"),t(),e(19,"pre",9),n(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-email-reactive-form',
  templateUrl: './sample-po-textarea-email-reactive-form.component.html',
  standalone: false
})
export class SamplePoTextareaEmailReactiveFormComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  formEmail: UntypedFormGroup;
  pageActions: Array<PoPageAction>;
  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.reset();
    },
    label: 'Ok'
  };

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.formEmail = this.formBuilder.group({
      cc: null,
      from: [null, Validators.required],
      to: [null, Validators.required],
      emailText: [null, Validators.required],
      subject: [null, Validators.required]
    });
  }

  getPageAction() {
    const isDisabled = this.formEmail ? !this.formEmail.valid : true;
    return [
      { label: 'Send', action: this.send.bind(this), disabled: isDisabled },
      { label: 'Clean', action: this.reset.bind(this) }
    ];
  }

  reset() {
    this.formEmail.reset();
  }

  send() {
    this.poModal.open();
  }
}
`),t()()()()(),e(21,"div",10),a(22,"sample-po-textarea-email-reactive-form"),t(),a(23,"hr")),l&2&&(p(5),T("po-icon "+o.sampleCodeButtonIcon),p(),y(" ",o.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,Be,o.hideSampleCodeTabs)))},dependencies:[P,w,C,v,he],encapsulation:2})}return i})();var Ee=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-textarea-doc"]],standalone:!1,decls:478,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","acessibilidade-tratada-no-componente"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,o){l&1&&(e(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),e(4,"div",2)(5,"p"),n(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),e(7,"blockquote")(8,"p"),n(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),e(10,"code"),n(11,"FormsModule"),t(),n(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),e(13,"code"),n(14,"ReactiveFormsModule"),t(),n(15,", ambos nativos do Angular."),t()()(),e(16,"h3",3),n(17,"Componente"),t(),e(18,"h4",4)(19,"code",5),n(20,"PoTextareaComponent"),t()(),e(21,"div",2)(22,"p"),n(23,`Este \xE9 um componente de entrada de dados que possibilita o preechimento com m\xFAltiplas linhas.
\xC9 recomendado para observa\xE7\xF5es, detalhamentos e outras situa\xE7\xF5es onde o usu\xE1rio deva preencher com um texto.`),t(),e(24,"p"),n(25,"Importante:"),t(),e(26,"ul")(27,"li"),n(28,"A propriedade "),e(29,"code"),n(30,"name"),t(),n(31," \xE9 obrigat\xF3ria para que o formul\xE1rio e o "),e(32,"code"),n(33,"model"),t(),n(34,` funcionem corretamente. Do contr\xE1rio, ocorrer\xE1 um erro de
`),e(35,"em"),n(36,"Angular"),t(),n(37,", onde ser\xE1 necess\xE1rio informar o atributo "),e(38,"code"),n(39,"name"),t(),n(40," ou o atributo "),e(41,"code"),n(42,'[ngModelOptions]="{standalone: true}"'),t(),n(43,", por exemplo:"),t()(),e(44,"pre")(45,"code"),n(46,`<po-textarea
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-textarea>`),t()(),e(47,"h4",6),n(48,"Acessibilidade tratada no componente"),t(),e(49,"p"),n(50,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),t(),e(51,"ul")(52,"li"),n(53,`O Text area foi desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o do mesmo na interface por tecnologias
assistivas. `),e(54,"a",7),n(55,"WCAG 4.1.2: Name, Role, Value"),t()(),e(56,"li"),n(57,`O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros
elementos da tela. `),e(58,"a",8),n(59,"WCAG 2.4.12: Focus Appearance)"),t()(),e(60,"li"),n(61,`A identifica\xE7\xE3o do erro acontece tamb\xE9m atrav\xE9s da mudan\xE7a de cor do campo, mas tamb\xE9m de um \xEDcone
junto da mensagem. `),e(62,"a",9),n(63,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),t()()()(),e(64,"div",10)(65,"h4",11),n(66,"Seletor"),t(),e(67,"pre",12),n(68,`<po-textarea
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-disabled="boolean"
    (p-enter)="EventEmitter"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    p-label="string"
    p-maxlength="number"
    p-minlength="number"
    name="string"
    p-optional="boolean"
    p-placeholder="string"
    p-readonly="boolean"
    p-required="boolean"
    p-rows="number"
    p-show-required="boolean" >
</po-textarea>
`),t()(),e(69,"h4",13),n(70,"Propriedades"),t(),e(71,"table",14)(72,"tr",15)(73,"th",16),n(74,"Nome"),t(),e(75,"th",16),n(76,"Tipo"),t(),e(77,"th",16),n(78,"Padr\xE3o"),t(),e(79,"th",16),n(80,"Descri\xE7\xE3o"),t()(),e(81,"tr",17)(82,"td",18)(83,"div",19)(84,"span",20),n(85," p-auto-focus"),a(86,"br"),t()()(),e(87,"td",21)(88,"code",22),n(89,"boolean"),t()(),e(90,"td",23)(91,"p")(92,"code"),n(93,"false"),t()()(),e(94,"td",24)(95,"em")(96,"strong"),n(97,"(opcional)"),t()(),e(98,"p"),n(99,"Aplica foco no elemento ao ser iniciado."),t(),e(100,"blockquote")(101,"p"),n(102,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),e(103,"tr",17)(104,"td",18)(105,"div",25)(106,"span",26),n(107," (p-blur)"),a(108,"br"),t()()(),e(109,"td",21)(110,"code",27),n(111,"EventEmitter"),t()(),e(112,"td",23),n(113,"-"),t(),e(114,"td",24)(115,"em")(116,"strong"),n(117,"(opcional)"),t()(),e(118,"p"),n(119,"Evento disparado ao sair do campo."),t()()(),e(120,"tr",17)(121,"td",18)(122,"div",25)(123,"span",26),n(124," (p-change)"),a(125,"br"),t()()(),e(126,"td",21)(127,"code",27),n(128,"EventEmitter"),t()(),e(129,"td",23),n(130,"-"),t(),e(131,"td",24)(132,"em")(133,"strong"),n(134,"(opcional)"),t()(),e(135,"p"),n(136,"Evento disparado ao alterar valor e deixar o campo."),t()()(),e(137,"tr",17)(138,"td",18)(139,"div",25)(140,"span",26),n(141," (p-change-model)"),a(142,"br"),t()()(),e(143,"td",21)(144,"code",27),n(145,"EventEmitter"),t()(),e(146,"td",23),n(147,"-"),t(),e(148,"td",24)(149,"em")(150,"strong"),n(151,"(opcional)"),t()(),e(152,"p"),n(153,"Evento disparado ao alterar valor do model."),t()()(),e(154,"tr",17)(155,"td",18)(156,"div",19)(157,"span",20),n(158," p-disabled"),a(159,"br"),t()()(),e(160,"td",21)(161,"code",22),n(162,"boolean"),t()(),e(163,"td",23)(164,"p")(165,"code"),n(166,"false"),t()()(),e(167,"td",24)(168,"em")(169,"strong"),n(170,"(opcional)"),t()(),e(171,"p"),n(172,"Indica que o campo ser\xE1 desabilitado."),t()()(),e(173,"tr",17)(174,"td",18)(175,"div",25)(176,"span",26),n(177," (p-enter)"),a(178,"br"),t()()(),e(179,"td",21)(180,"code",27),n(181,"EventEmitter"),t()(),e(182,"td",23),n(183,"-"),t(),e(184,"td",24)(185,"em")(186,"strong"),n(187,"(opcional)"),t()(),e(188,"p"),n(189,"Evento disparado ao entrar do campo."),t()()(),e(190,"tr",17)(191,"td",18)(192,"div",19)(193,"span",20),n(194," p-error-limit"),a(195,"br"),t()()(),e(196,"td",21)(197,"code",22),n(198,"boolean"),t()(),e(199,"td",23)(200,"p")(201,"code"),n(202,"false"),t()()(),e(203,"td",24)(204,"em")(205,"strong"),n(206,"(opcional)"),t()(),e(207,"p"),n(208,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),e(209,"blockquote")(210,"p"),n(211,"Caso essa propriedade seja definida como "),e(212,"code"),n(213,"true"),t(),n(214,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),e(215,"tr",17)(216,"td",18)(217,"div",19)(218,"span",20),n(219," p-field-error-message"),a(220,"br"),t()()(),e(221,"td",21)(222,"code",28),n(223,"string"),t()(),e(224,"td",23),n(225,"-"),t(),e(226,"td",24)(227,"em")(228,"strong"),n(229,"(opcional)"),t()(),e(230,"p"),n(231,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),e(232,"blockquote")(233,"p"),n(234,"Necess\xE1rio que a propriedade "),e(235,"code"),n(236,"p-required"),t(),n(237," esteja habilitada."),t()()()(),e(238,"tr",17)(239,"td",18)(240,"div",19)(241,"span",20),n(242," p-help"),a(243,"br"),t()()(),e(244,"td",21)(245,"code",28),n(246,"string"),t()(),e(247,"td",23),n(248,"-"),t(),e(249,"td",24)(250,"em")(251,"strong"),n(252,"(opcional)"),t()(),e(253,"p"),n(254,"Texto de apoio do campo."),t()()(),e(255,"tr",17)(256,"td",18)(257,"div",19)(258,"span",20),n(259," p-label"),a(260,"br"),t()()(),e(261,"td",21)(262,"code",28),n(263,"string"),t()(),e(264,"td",23),n(265,"-"),t(),e(266,"td",24)(267,"em")(268,"strong"),n(269,"(opcional)"),t()(),e(270,"p"),n(271,"Label do campo."),t()()(),e(272,"tr",17)(273,"td",18)(274,"div",19)(275,"span",20),n(276," p-maxlength"),a(277,"br"),t()()(),e(278,"td",21)(279,"code",29),n(280,"number"),t()(),e(281,"td",23),n(282,"-"),t(),e(283,"td",24)(284,"em")(285,"strong"),n(286,"(opcional)"),t()(),e(287,"p"),n(288,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),e(289,"tr",17)(290,"td",18)(291,"div",19)(292,"span",20),n(293," p-minlength"),a(294,"br"),t()()(),e(295,"td",21)(296,"code",29),n(297,"number"),t()(),e(298,"td",23),n(299,"-"),t(),e(300,"td",24)(301,"em")(302,"strong"),n(303,"(opcional)"),t()(),e(304,"p"),n(305,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),e(306,"tr",17)(307,"td",18)(308,"div",19)(309,"span",20),n(310," name"),a(311,"br"),t()()(),e(312,"td",21)(313,"code",28),n(314,"string"),t()(),e(315,"td",23),n(316,"-"),t(),e(317,"td",24)(318,"p"),n(319,"Nome e Id do componente."),t()()(),e(320,"tr",17)(321,"td",18)(322,"div",19)(323,"span",20),n(324," p-optional"),a(325,"br"),t()()(),e(326,"td",21)(327,"code",22),n(328,"boolean"),t()(),e(329,"td",23)(330,"p")(331,"code"),n(332,"false"),t()()(),e(333,"td",24)(334,"em")(335,"strong"),n(336,"(opcional)"),t()(),e(337,"p"),n(338,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),e(339,"blockquote")(340,"p"),n(341,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),e(342,"ul")(343,"li"),n(344,"O campo conter "),e(345,"code"),n(346,"p-required"),t(),n(347,";"),t(),e(348,"li"),n(349,"N\xE3o possuir "),e(350,"code"),n(351,"p-help"),t(),n(352," e/ou "),e(353,"code"),n(354,"p-label"),t(),n(355,"."),t()()()(),e(356,"tr",17)(357,"td",18)(358,"div",19)(359,"span",20),n(360," p-placeholder"),a(361,"br"),t()()(),e(362,"td",21)(363,"code",28),n(364,"string"),t()(),e(365,"td",23),n(366,"-"),t(),e(367,"td",24)(368,"p"),n(369,"Placeholder, mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),e(370,"tr",17)(371,"td",18)(372,"div",19)(373,"span",20),n(374," p-readonly"),a(375,"br"),t()()(),e(376,"td",21)(377,"code",22),n(378,"boolean"),t()(),e(379,"td",23)(380,"p")(381,"code"),n(382,"false"),t()()(),e(383,"td",24)(384,"em")(385,"strong"),n(386,"(opcional)"),t()(),e(387,"p"),n(388,"Indica que o campo ser\xE1 somente leitura."),t()()(),e(389,"tr",17)(390,"td",18)(391,"div",19)(392,"span",20),n(393," p-required"),a(394,"br"),t()()(),e(395,"td",21)(396,"code",22),n(397,"boolean"),t()(),e(398,"td",23)(399,"p")(400,"code"),n(401,"false"),t()()(),e(402,"td",24)(403,"em")(404,"strong"),n(405,"(opcional)"),t()(),e(406,"p"),n(407,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),e(408,"blockquote")(409,"p"),n(410,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),e(411,"code"),n(412,"(p-disabled)"),t(),n(413,"."),t()()()(),e(414,"tr",17)(415,"td",18)(416,"div",19)(417,"span",20),n(418," p-rows"),a(419,"br"),t()()(),e(420,"td",21)(421,"code",29),n(422,"number"),t()(),e(423,"td",23)(424,"p")(425,"code"),n(426,"3"),t()()(),e(427,"td",24)(428,"em")(429,"strong"),n(430,"(opcional)"),t()(),e(431,"p"),n(432,"Indica a quantidade de linhas que ser\xE3o exibidas."),t()()(),e(433,"tr",17)(434,"td",18)(435,"div",19)(436,"span",20),n(437," p-show-required"),a(438,"br"),t()()(),e(439,"td",21)(440,"code",22),n(441,"boolean"),t()(),e(442,"td",23),n(443,"-"),t(),e(444,"td",24)(445,"p"),n(446,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),e(447,"blockquote")(448,"p"),n(449,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),e(450,"ul")(451,"li"),n(452,"N\xE3o possuir "),e(453,"code"),n(454,"p-help"),t(),n(455," e/ou "),e(456,"code"),n(457,"p-label"),t(),n(458,"."),t()()()()(),e(459,"h3",13),n(460,"M\xE9todos"),t(),e(461,"table",30)(462,"tr",17)(463,"th",31)(464,"div",19)(465,"h4")(466,"span",20),n(467," focus "),t()()()()(),e(468,"tr",24)(469,"td",24)(470,"p"),n(471,"Fun\xE7\xE3o que atribui foco ao componente."),t(),e(472,"p"),n(473,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),e(474,"pre")(475,"code"),n(476,`import { PoTextareaComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;

focusTextarea() {
  this.textarea.focus();
}`),t()()()()(),a(477,"br"),t())},dependencies:[w],encapsulation:2})}return i})();var xe=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||i)(A(oe),A(ie))};static \u0275cmp=g({type:i,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title"," Textarea",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(l,o){l&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),a(3,"sample-po-textarea-doc"),t(),e(4,"po-tab",3),a(5,"sample-po-textarea-basic-view")(6,"sample-po-textarea-labs-view")(7,"sample-po-textarea-email-view")(8,"sample-po-textarea-email-reactive-form-view"),t()()()),l&2&&(s("p-actions",o.actions),p(2),s("p-active",o.activeTab.includes("doc")),p(2),s("p-hide",o.hidePoWebSample)("p-active",o.activeTab.includes("web")))},dependencies:[I,C,v,se,ue,be,fe,Ee],encapsulation:2})}return i})();var Ae=[{path:"",component:xe}],Se=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[$.forChild(Ae),$]})}return i})();var bt=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=U({type:i});static \u0275inj=G({imports:[pe,Se]})}return i})();export{bt as DocPoTextareaModule};
