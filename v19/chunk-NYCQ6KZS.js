import{$ as B,$a as M,$c as te,$d as se,Cd as le,F as g,G as b,Ga as t,Gc as q,Hc as V,Ia as _,Ic as T,Ka as E,La as S,Lb as L,Ma as f,Mb as U,Nb as Q,Ob as F,Od as z,Pa as D,Pb as J,Sb as K,T as s,Tb as X,U as w,Ub as Y,Wb as Z,Xd as P,Yb as $,Yd as x,Zb as A,_ as u,_b as ee,ad as ne,bb as G,ea as R,ha as m,ka as y,md as oe,na as n,oa as e,oc as O,pa as a,re as C,sd as ie,se as pe,ta as H,ua as h,va as j,xd as ae,y as I,yd as re}from"./chunk-PI3TYJHE.js";var me=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-progress-basic"]],standalone:!1,decls:1,vars:1,consts:[[3,"p-value"]],template:function(r,o){r&1&&a(0,"po-progress",0),r&2&&m("p-value",25)},dependencies:[T],encapsulation:2})}return i})();var ve=i=>({"docs-sample-code-tabs":i}),de=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-progress-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,o){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Progress Basic"),e(),n(4,"a",2),h("click",function(){return o.toggleSampleCodeTabs()}),a(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-progress-basic/sample-po-progress-basic.component.html"),e(),n(13,"pre",7),t(14,`<po-progress [p-value]="25"></po-progress>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-progress-basic/sample-po-progress-basic.component.ts"),e(),n(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-progress-basic',
  templateUrl: './sample-po-progress-basic.component.html',
  standalone: false
})
export class SamplePoProgressBasicComponent {}
`),e()()()()(),n(21,"div",10),a(22,"sample-po-progress-basic"),e(),a(23,"hr")),r&2&&(s(5),y("po-icon "+o.sampleCodeButtonIcon),s(),_(" ",o.sampleCodeButtonLabel,""),s(),m("ngClass",D(4,ve,o.hideSampleCodeTabs)))},dependencies:[M,C,P,x,me],encapsulation:2})}return i})();function Ce(i,Ie){if(i&1&&(n(0,"div")(1,"po-widget",19)(2,"form",20),a(3,"po-input",21)(4,"po-select",22)(5,"po-select",23)(6,"po-switch",24)(7,"po-switch",25),e()()()),i&2){let p=j();s(2),m("formGroup",p.actionForm),s(2),m("p-options",p.iconOptions),s(),m("p-options",p.typeOptions)}}var ce=(()=>{class i{fb;poNotification;event;info;infoIcon;disabledCancel;indeterminate;showPercentage;status;size=V.large;text;value;action;actionForm;showAction;infoIconsOptions=[{label:"an an-warning-circle",value:"an an-warning-circle"},{label:"an an-check",value:"an an-check"},{label:"an an-user",value:"an an-user"},{label:"an an-cloud-slash",value:"an an-cloud-slash"}];statusOptions=[{label:"Default",value:q.Default},{label:"Success",value:q.Success},{label:"Error",value:q.Error}];sizeOptions=[{label:"Medium",value:V.medium},{label:"Large",value:V.large}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Visible",value:"visible"}];constructor(p,r){this.fb=p,this.poNotification=r,this.initializeActionForm()}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(p=>{this.updateAction(p)})}updateAction(p){this.action=p}onEvent(p){this.event=p}restore(){this.event=void 0,this.info=void 0,this.infoIcon=void 0,this.disabledCancel=!1,this.indeterminate=!1,this.showPercentage=!1,this.status=void 0,this.text=void 0,this.value=void 0,this.size=V.large,this.actionForm.reset({type:"default",visible:!0}),this.action={label:"",type:"default"},this.showAction=!1}static \u0275fac=function(r){return new(r||i)(w(Y),w(ne))};static \u0275cmp=u({type:i,selectors:[["sample-po-progress-labs"]],standalone:!1,decls:22,vars:25,consts:[["progressBarPropertiesForm","ngForm"],[2,"display","grid","gap","16px"],[3,"p-custom-action-click","p-cancel","p-retry","p-disabled-cancel","p-indeterminate","p-show-percentage","p-info","p-info-icon","p-status","p-text","p-value","p-size","p-custom-action"],["p-title","Events"],[3,"p-value"],["p-title","Properties"],[1,"po-row"],["name","text","p-clean","","p-label","Label",1,"po-sm-6","po-md-3",3,"ngModelChange","ngModel"],["name","value","p-clean","","p-label","Value","p-max","100","p-min","0",1,"po-sm-6","po-md-3",3,"ngModelChange","ngModel"],["name","Size","p-label","Size",1,"po-sm-6","po-md-3",3,"ngModelChange","ngModel","p-options"],["name","Status","p-label","Status",1,"po-sm-6","po-md-3",3,"ngModelChange","ngModel","p-options"],["name","infoIcon","p-label","Info icon",1,"po-sm-6","po-md-3",3,"ngModelChange","ngModel","p-options"],["name","info","p-clean","","p-label","Info",1,"po-sm-6","po-md-9",3,"ngModelChange","ngModel"],["name","disabledCancel","p-label","Disabled Cancel",1,"po-sm-3","po-md-2",3,"ngModelChange","ngModel"],["name","indeterminate","p-label","Indeterminate",1,"po-sm-3","po-md-2",3,"ngModelChange","ngModel"],["name","showPercentage","p-label","Show Percentage",1,"po-sm-3","po-md-2",3,"ngModelChange","ngModel"],["name","addAction","p-label","Add Action Button",1,"po-sm-3","po-md-2",3,"ngModelChange","ngModel"],[4,"ngIf"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-sm-6","po-md-4"],["formControlName","icon","p-label","Icon",1,"po-sm-6","po-md-2",3,"p-options"],["formControlName","type","p-label","Type",1,"po-sm-6","po-md-2",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-sm-6","po-md-2"],["formControlName","visible","p-label","Visible",1,"po-sm-6","po-md-2"]],template:function(r,o){if(r&1){let d=H();n(0,"div",1)(1,"po-progress",2),h("p-custom-action-click",function(){return g(d),b(o.onEvent("p-custom-action-click"))})("p-cancel",function(){return g(d),b(o.onEvent("p-cancel"))})("p-retry",function(){return g(d),b(o.onEvent("p-retry"))}),e(),n(2,"po-widget",3),a(3,"po-info",4),e(),n(4,"po-widget",5)(5,"form",null,0)(7,"div",6)(8,"po-input",7),f("ngModelChange",function(l){return g(d),S(o.text,l)||(o.text=l),b(l)}),e(),n(9,"po-number",8),f("ngModelChange",function(l){return g(d),S(o.value,l)||(o.value=l),b(l)}),e(),n(10,"po-select",9),f("ngModelChange",function(l){return g(d),S(o.size,l)||(o.size=l),b(l)}),e(),n(11,"po-select",10),f("ngModelChange",function(l){return g(d),S(o.status,l)||(o.status=l),b(l)}),e()(),n(12,"div",6)(13,"po-select",11),f("ngModelChange",function(l){return g(d),S(o.infoIcon,l)||(o.infoIcon=l),b(l)}),e(),n(14,"po-input",12),f("ngModelChange",function(l){return g(d),S(o.info,l)||(o.info=l),b(l)}),e()(),n(15,"po-switch",13),f("ngModelChange",function(l){return g(d),S(o.disabledCancel,l)||(o.disabledCancel=l),b(l)}),e(),n(16,"po-switch",14),f("ngModelChange",function(l){return g(d),S(o.indeterminate,l)||(o.indeterminate=l),b(l)}),e(),n(17,"po-switch",15),f("ngModelChange",function(l){return g(d),S(o.showPercentage,l)||(o.showPercentage=l),b(l)}),e(),n(18,"po-switch",16),f("ngModelChange",function(l){return g(d),S(o.showAction,l)||(o.showAction=l),b(l)}),e()()(),R(19,Ce,8,3,"div",17),n(20,"div",6)(21,"po-button",18),h("p-click",function(){return g(d),b(o.restore())}),e()()()}r&2&&(s(),m("p-disabled-cancel",o.disabledCancel)("p-indeterminate",o.indeterminate)("p-show-percentage",o.showPercentage)("p-info",o.info)("p-info-icon",o.infoIcon)("p-status",o.status)("p-text",o.text)("p-value",o.value)("p-size",o.size)("p-custom-action",o.action),s(2),m("p-value",o.event),s(5),E("ngModel",o.text),s(),E("ngModel",o.value),s(),E("ngModel",o.size),m("p-options",o.sizeOptions),s(),E("ngModel",o.status),m("p-options",o.statusOptions),s(2),E("ngModel",o.infoIcon),m("p-options",o.infoIconsOptions),s(),E("ngModel",o.info),s(),E("ngModel",o.disabledCancel),s(),E("ngModel",o.indeterminate),s(),E("ngModel",o.showPercentage),s(),E("ngModel",o.showAction),s(),m("ngIf",o.showAction))},dependencies:[G,J,L,U,F,Q,K,X,O,oe,ie,re,te,le,T,se],encapsulation:2})}return i})();var ye=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-progress-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,o){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Progress Labs"),e(),n(4,"a",2),h("click",function(){return o.toggleSampleCodeTabs()}),a(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-progress-labs/sample-po-progress-labs.component.html"),e(),n(13,"pre",7),t(14,`<div style="display: grid; gap: 16px">
  <po-progress
    [p-disabled-cancel]="disabledCancel"
    [p-indeterminate]="indeterminate"
    [p-show-percentage]="showPercentage"
    [p-info]="info"
    [p-info-icon]="infoIcon"
    [p-status]="status"
    [p-text]="text"
    [p-value]="value"
    [p-size]="size"
    [p-custom-action]="action"
    (p-custom-action-click)="onEvent('p-custom-action-click')"
    (p-cancel)="onEvent('p-cancel')"
    (p-retry)="onEvent('p-retry')"
  />

  <po-widget p-title="Events">
    <po-info [p-value]="event" />
  </po-widget>

  <po-widget p-title="Properties">
    <form #progressBarPropertiesForm="ngForm">
      <div class="po-row">
        <po-input class="po-sm-6 po-md-3" name="text" [(ngModel)]="text" p-clean p-label="Label" />
        <po-number
          class="po-sm-6 po-md-3"
          name="value"
          [(ngModel)]="value"
          p-clean
          p-label="Value"
          p-max="100"
          p-min="0"
        />
        <po-select class="po-sm-6 po-md-3" name="Size" p-label="Size" [(ngModel)]="size" [p-options]="sizeOptions" />
        <po-select
          class="po-sm-6 po-md-3"
          name="Status"
          p-label="Status"
          [(ngModel)]="status"
          [p-options]="statusOptions"
        />
      </div>

      <div class="po-row">
        <po-select
          class="po-sm-6 po-md-3"
          name="infoIcon"
          [(ngModel)]="infoIcon"
          p-label="Info icon"
          [p-options]="infoIconsOptions"
        />
        <po-input class="po-sm-6 po-md-9" name="info" [(ngModel)]="info" p-clean p-label="Info" />
      </div>

      <po-switch class="po-sm-3 po-md-2" name="disabledCancel" [(ngModel)]="disabledCancel" p-label="Disabled Cancel" />
      <po-switch class="po-sm-3 po-md-2" name="indeterminate" [(ngModel)]="indeterminate" p-label="Indeterminate" />
      <po-switch class="po-sm-3 po-md-2" name="showPercentage" [(ngModel)]="showPercentage" p-label="Show Percentage" />
      <po-switch class="po-sm-3 po-md-2" name="addAction" [(ngModel)]="showAction" p-label="Add Action Button" />
    </form>
  </po-widget>
  <div *ngIf="showAction">
    <po-widget p-title="Action Button">
      <form [formGroup]="actionForm" class="po-row">
        <po-input class="po-sm-6 po-md-4" formControlName="label" p-label="Label" />
        <po-select class="po-sm-6 po-md-2" formControlName="icon" p-label="Icon" [p-options]="iconOptions" />
        <po-select class="po-sm-6 po-md-2" formControlName="type" p-label="Type" [p-options]="typeOptions" />
        <po-switch class="po-sm-6 po-md-2" formControlName="disabled" p-label="Disabled" />
        <po-switch class="po-sm-6 po-md-2" formControlName="visible" p-label="Visible" />
      </form>
    </po-widget>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</div>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-progress-labs/sample-po-progress-labs.component.ts"),e(),n(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import {
  PoCheckboxGroupOption,
  PoProgressStatus,
  PoRadioGroupOption,
  PoProgressSize,
  PoProgressAction,
  PoSelectOption,
  PoNotificationService
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-progress-labs',
  templateUrl: './sample-po-progress-labs.component.html',
  standalone: false
})
export class SamplePoProgressLabsComponent implements OnInit {
  event: any;
  info: string;
  infoIcon: string;
  disabledCancel: boolean;
  indeterminate: boolean;
  showPercentage: boolean;
  status: PoProgressStatus;
  size: PoProgressSize = PoProgressSize.large;
  text: string;
  value: number;
  action: PoProgressAction;
  actionForm: FormGroup;
  showAction: false;

  infoIconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-warning-circle', value: 'an an-warning-circle' },
    { label: 'an an-check', value: 'an an-check' },
    { label: 'an an-user', value: 'an an-user' },
    { label: 'an an-cloud-slash', value: 'an an-cloud-slash' }
  ];

  statusOptions: Array<PoRadioGroupOption> = [
    { label: 'Default', value: PoProgressStatus.Default },
    { label: 'Success', value: PoProgressStatus.Success },
    { label: 'Error', value: PoProgressStatus.Error }
  ];

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'Medium', value: PoProgressSize.medium },
    { label: 'Large', value: PoProgressSize.large }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-download', label: 'an an-download' },
    { value: 'an an-Server', label: 'an an-Server' },
    { value: 'an an-upload', label: 'an an-upload' },
    { value: 'an an-share', label: 'an an-share' }
  ];

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Visible', value: 'visible' }
  ];

  constructor(
    private fb: FormBuilder,
    private poNotification: PoNotificationService
  ) {
    this.initializeActionForm();
  }

  initializeActionForm() {
    this.actionForm = this.fb.group({
      label: [''],
      icon: [''],
      type: ['default'],
      visible: [true],
      disabled: [false]
    });
  }

  ngOnInit() {
    this.restore();
    this.actionForm.valueChanges.subscribe(formValue => {
      this.updateAction(formValue);
    });
  }

  updateAction(formValue: any) {
    this.action = formValue;
  }

  onEvent(event) {
    this.event = event;
  }

  restore() {
    this.event = undefined;
    this.info = undefined;
    this.infoIcon = undefined;
    this.disabledCancel = false;
    this.indeterminate = false;
    this.showPercentage = false;
    this.status = undefined;
    this.text = undefined;
    this.value = undefined;
    this.size = PoProgressSize.large;
    this.actionForm.reset({ type: 'default', visible: true });
    this.action = { label: '', type: 'default' };
    this.showAction = false;
  }
}
`),e()()()()(),n(21,"div",10),a(22,"sample-po-progress-labs"),e(),a(23,"hr")),r&2&&(s(5),y("po-icon "+o.sampleCodeButtonIcon),s(),_(" ",o.sampleCodeButtonLabel,""),s(),m("ngClass",D(4,ye,o.hideSampleCodeTabs)))},dependencies:[M,C,P,x,ce],encapsulation:2})}return i})();var ge=(()=>{class i{buttonDisabled;progressBarValue=0;publication=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.`;get progressBarInfo(){return`${this.progressBarValue}/100`}finishEdition(){this.buttonDisabled=!0}updatePublication(){let p=setInterval(()=>{this.progressBarValue>=100?(clearInterval(p),this.finishEdition()):this.progressBarValue++},20)}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-progress-publication"]],standalone:!1,decls:7,vars:4,consts:[["p-title","Edit publication"],[1,"po-row"],[1,"po-md-9",3,"ngModelChange","ngModel"],[1,"po-md-9"],["p-text","Loading update",1,"po-md-9",3,"p-value","p-show-percentage"],["p-label","Update publication",3,"p-click","p-disabled"]],template:function(r,o){r&1&&(n(0,"po-page-default",0)(1,"div",1)(2,"po-rich-text",2),f("ngModelChange",function(c){return S(o.publication,c)||(o.publication=c),c}),e(),a(3,"po-divider",3)(4,"po-progress",4),e(),n(5,"div",1)(6,"po-button",5),h("p-click",function(){return o.updatePublication()}),e()()()),r&2&&(s(2),E("ngModel",o.publication),s(2),m("p-value",o.progressBarValue)("p-show-percentage",!0),s(2),m("p-disabled",o.buttonDisabled))},dependencies:[L,F,O,ee,ae,z,T],encapsulation:2})}return i})();var Me=i=>({"docs-sample-code-tabs":i}),be=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-progress-publication-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,o){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Progress - Publication"),e(),n(4,"a",2),h("click",function(){return o.toggleSampleCodeTabs()}),a(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-progress-publication/sample-po-progress-publication.component.html"),e(),n(13,"pre",7),t(14,`<po-page-default p-title="Edit publication">
  <div class="po-row">
    <po-rich-text class="po-md-9" [(ngModel)]="publication"></po-rich-text>

    <po-divider class="po-md-9"></po-divider>

    <po-progress class="po-md-9" p-text="Loading update" [p-value]="progressBarValue" [p-show-percentage]="true">
    </po-progress>
  </div>

  <div class="po-row">
    <po-button p-label="Update publication" [p-disabled]="buttonDisabled" (p-click)="updatePublication()"> </po-button>
  </div>
</po-page-default>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-progress-publication/sample-po-progress-publication.component.ts"),e(),n(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-progress-publication',
  templateUrl: './sample-po-progress-publication.component.html',
  standalone: false
})
export class SamplePoProgressPublicationComponent {
  buttonDisabled: boolean;
  progressBarValue = 0;
  publication: string = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.\`;

  get progressBarInfo() {
    return \`\${this.progressBarValue}/100\`;
  }

  finishEdition() {
    this.buttonDisabled = true;
  }

  updatePublication() {
    const interval = setInterval(() => {
      if (this.progressBarValue >= 100) {
        clearInterval(interval);

        this.finishEdition();
      } else {
        this.progressBarValue++;
      }
    }, 20);
  }
}
`),e()()()()(),n(21,"div",10),a(22,"sample-po-progress-publication"),e(),a(23,"hr")),r&2&&(s(5),y("po-icon "+o.sampleCodeButtonIcon),s(),_(" ",o.sampleCodeButtonLabel,""),s(),m("ngClass",D(4,Me,o.hideSampleCodeTabs)))},dependencies:[M,C,P,x,ge],encapsulation:2})}return i})();var Ee=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-progress-doc"]],standalone:!1,decls:696,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoProgressAction"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","PoProgressStatus"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","https://po-ui.io/icons"]],template:function(r,o){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoProgressModule } from '@po-ui/ng-components';"),e()(),n(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente "),n(7,"code"),t(8,"po-progress"),e(),t(9,"."),e()(),n(10,"h3",3),t(11,"Componente"),e(),n(12,"h4",4)(13,"code",5),t(14,"PoProgressComponent"),e()(),n(15,"div",2)(16,"p"),t(17,"Componente de barra de progresso que possibilita exibir visualmente o progresso/carregamento de uma tarefa."),e(),n(18,"p"),t(19,"Este componente pode ser utilizado no "),n(20,"em"),t(21,"upload"),e(),t(22," de arquivos, uma atualiza\xE7\xE3o no sistema ou o processamento de uma imagem."),e(),n(23,"h4",6),t(24,"Tokens customiz\xE1veis"),e(),n(25,"p"),t(26,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),n(27,"blockquote")(28,"p"),t(29,"Para maiores informa\xE7\xF5es, acesse o guia "),n(30,"a",7),t(31,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),t(32,"."),e()(),n(33,"table")(34,"thead")(35,"tr")(36,"th"),t(37,"Propriedade"),e(),n(38,"th"),t(39,"Descri\xE7\xE3o"),e(),n(40,"th"),t(41,"Valor Padr\xE3o"),e()()(),n(42,"tbody")(43,"tr")(44,"td")(45,"strong"),t(46,"Default Values"),e()(),a(47,"td")(48,"td"),e(),n(49,"tr")(50,"td")(51,"code"),t(52,"--font-family"),e()(),n(53,"td"),t(54,"Fam\xEDlia tipogr\xE1fica usada"),e(),n(55,"td")(56,"code"),t(57,"var(--font-family-theme)"),e()()(),n(58,"tr")(59,"td")(60,"code"),t(61,"--text-color"),e()(),n(62,"td"),t(63,"Cor do texto"),e(),n(64,"td")(65,"code"),t(66,"var(--color-neutral-dark-90)"),e()()(),n(67,"tr")(68,"td")(69,"strong"),t(70,"Error"),e()(),a(71,"td")(72,"td"),e(),n(73,"tr")(74,"td")(75,"code"),t(76,"--text-color-error"),e()(),n(77,"td"),t(78,"Cor do texto no estado error"),e(),n(79,"td")(80,"code"),t(81,"var(--color-feedback-negative-dark)"),e()()(),n(82,"tr")(83,"td")(84,"code"),t(85,"--color-icon-error"),e()(),n(86,"td"),t(87,"Cor do \xEDcone no estado error"),e(),n(88,"td")(89,"code"),t(90,"var(--color-feedback-negative-dark)"),e()()(),n(91,"tr")(92,"td")(93,"strong"),t(94,"po-progress-bar"),e()(),a(95,"td")(96,"td"),e(),n(97,"tr")(98,"td")(99,"code"),t(100,"--background-color-tray"),e()(),n(101,"td"),t(102,"Cor do background"),e(),n(103,"td")(104,"code"),t(105,"var(--color-brand-01-lightest)"),e()()(),n(106,"tr")(107,"td")(108,"code"),t(109,"--background-color-indicator"),e()(),n(110,"td"),t(111,"Cor do background do indicador"),e(),n(112,"td")(113,"code"),t(114,"var(--color-action-default)"),e()()()()()(),n(115,"div",8)(116,"h4",9),t(117,"Seletor"),e(),n(118,"pre",10),t(119,`<po-progress
    (p-cancel)="EventEmitter"
    p-custom-action="PoProgressAction"
    (p-custom-action-click)="EventEmitter"
    p-disabled-cancel="boolean"
    p-indeterminate="boolean"
    p-info="string"
    p-info-icon="string | TemplateRef<void>"
    (p-retry)="EventEmitter"
    p-show-percentage="boolean"
    p-size="string"
    p-status="PoProgressStatus"
    p-text="string"
    p-value="number" >
</po-progress>
`),e()(),n(120,"h4",11),t(121,"Propriedades"),e(),n(122,"table",12)(123,"tr",13)(124,"th",14),t(125,"Nome"),e(),n(126,"th",14),t(127,"Tipo"),e(),n(128,"th",14),t(129,"Padr\xE3o"),e(),n(130,"th",14),t(131,"Descri\xE7\xE3o"),e()(),n(132,"tr",15)(133,"td",16)(134,"div",17)(135,"span",18),t(136," (p-cancel)"),a(137,"br"),e()()(),n(138,"td",19)(139,"code",20),t(140,"EventEmitter"),e()(),n(141,"td",21),t(142,"-"),e(),n(143,"td",22)(144,"em")(145,"strong"),t(146,"(opcional)"),e()(),n(147,"p"),t(148,'Evento que ser\xE1 disparado ao clicar no \xEDcone de cancelamento ("x") na parte inferior da barra de progresso.'),e(),n(149,"p"),t(150,"Ao ser disparado, a fun\xE7\xE3o receber\xE1 como par\xE2metro o status atual da barra de progresso."),e(),n(151,"blockquote")(152,"p"),t(153,"Se nenhuma fun\xE7\xE3o for passada para o evento ou a barra de progresso estiver com o status "),n(154,"code"),t(155,"PoProgressStatus.Success"),e(),t(156,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),e()()()(),n(157,"tr",15)(158,"td",16)(159,"div",23)(160,"span",24),t(161," p-custom-action"),a(162,"br"),e()()(),n(163,"td",19)(164,"code",25),t(165,"PoProgressAction"),e()(),n(166,"td",21),t(167,"-"),e(),n(168,"td",22)(169,"em")(170,"strong"),t(171,"(opcional)"),e()(),n(172,"p"),t(173,"Permite definir uma a\xE7\xE3o personalizada no componente "),n(174,"code"),t(175,"po-progress"),e(),t(176,`, exibindo um bot\xE3o no canto inferior direito
da barra de progresso. A a\xE7\xE3o deve implementar a interface `),n(177,"strong"),t(178,"PoProgressAction"),e(),t(179,", possibilitando configurar:"),e(),n(180,"ul")(181,"li")(182,"strong")(183,"code"),t(184,"label"),e()(),t(185,": Texto exibido no bot\xE3o (opcional)."),e(),n(186,"li")(187,"strong")(188,"code"),t(189,"icon"),e()(),t(190,": \xCDcone exibido no bot\xE3o (opcional)."),e(),n(191,"li")(192,"strong")(193,"code"),t(194,"type"),e()(),t(195,": Tipo do bot\xE3o ("),n(196,"code"),t(197,"default"),e(),t(198," ou "),n(199,"code"),t(200,"danger"),e(),t(201,") para indicar a inten\xE7\xE3o da a\xE7\xE3o (opcional)."),e(),n(202,"li")(203,"strong")(204,"code"),t(205,"disabled"),e()(),t(206,": Indica se o bot\xE3o deve estar desabilitado (opcional)."),e(),n(207,"li")(208,"strong")(209,"code"),t(210,"visible"),e()(),t(211,": Determina se o bot\xE3o ser\xE1 exibido. Pode ser um valor booleano ou uma fun\xE7\xE3o que retorna um booleano (opcional)."),e()()()(),n(212,"tr",15)(213,"td",16)(214,"div",17)(215,"span",18),t(216," (p-custom-action-click)"),a(217,"br"),e()()(),n(218,"td",19)(219,"code",20),t(220,"EventEmitter"),e()(),n(221,"td",21),t(222,"-"),e(),n(223,"td",22)(224,"em")(225,"strong"),t(226,"(opcional)"),e()(),n(227,"p"),t(228,"Evento emitido quando o bot\xE3o definido em "),n(229,"code"),t(230,"p-custom-action"),e(),t(231,` \xE9 clicado. Este evento retorna informa\xE7\xF5es
relacionadas \xE0 barra de progresso ou ao arquivo/processo associado, permitindo executar a\xE7\xF5es espec\xEDficas.`),e()()(),n(232,"tr",15)(233,"td",16)(234,"div",23)(235,"span",24),t(236," p-disabled-cancel"),a(237,"br"),e()()(),n(238,"td",19)(239,"code",26),t(240,"boolean"),e()(),n(241,"td",21)(242,"p")(243,"code"),t(244,"false"),e()()(),n(245,"td",22)(246,"em")(247,"strong"),t(248,"(opcional)"),e()(),n(249,"p"),t(250,"Desabilita bot\xE3o de cancelamento na parte inferior da barra de progresso."),e(),n(251,"blockquote")(252,"p"),t(253,"Se nenhuma fun\xE7\xE3o for passada para o evento "),n(254,"code"),t(255,"(p-cancel)"),e(),t(256," ou a barra de progresso estiver com o status "),n(257,"code"),t(258,"PoProgressStatus.Success"),e(),t(259,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),e()()()(),n(260,"tr",15)(261,"td",16)(262,"div",23)(263,"span",24),t(264," p-indeterminate"),a(265,"br"),e()()(),n(266,"td",19)(267,"code",26),t(268,"boolean"),e()(),n(269,"td",21)(270,"p")(271,"code"),t(272,"false"),e()()(),n(273,"td",22)(274,"em")(275,"strong"),t(276,"(opcional)"),e()(),n(277,"p"),t(278,"Habilita o modo indeterminado na barra de progresso, que mostra uma anima\xE7\xE3o fixa sem um valor estabelecido."),e(),n(279,"p"),t(280,"Esta op\xE7\xE3o pode ser utilizada quando n\xE3o souber quanto tempo levar\xE1 para que um processo seja conclu\xEDdo."),e(),n(281,"blockquote")(282,"p"),t(283,"Caso esta propriedade e a "),n(284,"code"),t(285,"p-value"),e(),t(286," seja habilitada, a propriedade "),n(287,"code"),t(288,"p-value"),e(),t(289," ser\xE1 ignorada."),e()()()(),n(290,"tr",15)(291,"td",16)(292,"div",23)(293,"span",24),t(294," p-info"),a(295,"br"),e()()(),n(296,"td",19)(297,"code",27),t(298,"string"),e()(),n(299,"td",21),t(300,"-"),e(),n(301,"td",22)(302,"em")(303,"strong"),t(304,"(opcional)"),e()(),n(305,"p"),t(306,"Informa\xE7\xE3o adicional que aparecer\xE1 abaixo da barra de progresso ao lado direito."),e()()(),n(307,"tr",15)(308,"td",16)(309,"div",23)(310,"span",24),t(311," p-info-icon"),a(312,"br"),e()()(),n(313,"td",19)(314,"code",27),t(315,"string "),e(),n(316,"code",28),t(317," TemplateRef<void>"),e()(),n(318,"td",21),t(319,"-"),e(),n(320,"td",22)(321,"em")(322,"strong"),t(323,"(opcional)"),e()(),n(324,"p"),t(325,"\xCDcone que aparecer\xE1 ao lado do texto da propriedade "),n(326,"code"),t(327,"p-info"),e(),t(328,"."),e(),n(329,"p"),t(330,"Exemplo: "),n(331,"code"),t(332,"an an-check"),e(),t(333,"."),e()()(),n(334,"tr",15)(335,"td",16)(336,"div",17)(337,"span",18),t(338," (p-retry)"),a(339,"br"),e()()(),n(340,"td",19)(341,"code",20),t(342,"EventEmitter"),e()(),n(343,"td",21),t(344,"-"),e(),n(345,"td",22)(346,"em")(347,"strong"),t(348,"(opcional)"),e()(),n(349,"p"),t(350,"Evento que ser\xE1 disparado ao clicar no \xEDcone de tentar novamente na parte inferior da barra de progresso."),e(),n(351,"blockquote")(352,"p"),t(353,`o \xEDcone ser\xE1 exibido apenas se informar uma fun\xE7\xE3o neste evento e o status da barra de progresso for
`),n(354,"code"),t(355,"PoProgressStatus.Error"),e(),t(356,"."),e()()()(),n(357,"tr",15)(358,"td",16)(359,"div",23)(360,"span",24),t(361," p-show-percentage"),a(362,"br"),e()()(),n(363,"td",19)(364,"code",26),t(365,"boolean"),e()(),n(366,"td",21)(367,"p")(368,"code"),t(369,"false"),e()()(),n(370,"td",22)(371,"em")(372,"strong"),t(373,"(opcional)"),e()(),n(374,"p"),t(375,"Ativa a exibi\xE7\xE3o da porcentagem atual da barra de progresso."),e()()(),n(376,"tr",15)(377,"td",16)(378,"div",23)(379,"span",24),t(380," p-size"),a(381,"br"),e()()(),n(382,"td",19)(383,"code",27),t(384,"string"),e()(),n(385,"td",21)(386,"p")(387,"code"),t(388,"large"),e()()(),n(389,"td",22)(390,"em")(391,"strong"),t(392,"(opcional)"),e()(),n(393,"p"),t(394,"Defini\xE7\xE3o do tamanho da altura da barra de progresso."),e(),n(395,"p"),t(396,"Valores v\xE1lidos:"),e(),n(397,"ul")(398,"li")(399,"code"),t(400,"medium"),e(),t(401,": tamanho m\xE9dio"),e(),n(402,"li")(403,"code"),t(404,"large"),e(),t(405,": tamanho grande"),e()()()(),n(406,"tr",15)(407,"td",16)(408,"div",23)(409,"span",24),t(410," p-status"),a(411,"br"),e()()(),n(412,"td",19)(413,"code",29),t(414,"PoProgressStatus"),e()(),n(415,"td",21)(416,"p")(417,"code"),t(418,"PoProgressStatus.Default"),e()()(),n(419,"td",22)(420,"em")(421,"strong"),t(422,"(opcional)"),e()(),n(423,"p"),t(424,`Status da barra de progresso que indicar\xE1 visualmente ao usu\xE1rio
o andamento, por exemplo, se a mesma foi conclu\xEDda com sucesso.`),e()()(),n(425,"tr",15)(426,"td",16)(427,"div",23)(428,"span",24),t(429," p-text"),a(430,"br"),e()()(),n(431,"td",19)(432,"code",27),t(433,"string"),e()(),n(434,"td",21),t(435,"-"),e(),n(436,"td",22)(437,"em")(438,"strong"),t(439,"(opcional)"),e()(),n(440,"p"),t(441,"Texto principal que aparecer\xE1 abaixo da barra de progresso no lado esquerdo."),e()()(),n(442,"tr",15)(443,"td",16)(444,"div",23)(445,"span",24),t(446," p-value"),a(447,"br"),e()()(),n(448,"td",19)(449,"code",30),t(450,"number"),e()(),n(451,"td",21)(452,"p")(453,"code"),t(454,"0"),e()()(),n(455,"td",22)(456,"em")(457,"strong"),t(458,"(opcional)"),e()(),n(459,"p"),t(460,"Valor que representar\xE1 o progresso."),e(),n(461,"blockquote")(462,"p"),t(463,"Os valores aceitos s\xE3o n\xFAmeros inteiros de "),n(464,"code"),t(465,"0"),e(),t(466," \xE0 "),n(467,"code"),t(468,"100"),e(),t(469,"."),e()()()()(),n(470,"h3"),t(471,"Interfaces"),e(),n(472,"h4",31)(473,"code",5),t(474,"PoProgressAction"),e()(),n(475,"div",2)(476,"p"),t(477,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),e()(),n(478,"h4",11),t(479,"Propriedades"),e(),n(480,"table",12)(481,"tr",13)(482,"th",14),t(483,"Nome"),e(),n(484,"th",14),t(485,"Tipo"),e(),n(486,"th",14),t(487,"Descri\xE7\xE3o"),e()(),n(488,"tr",15)(489,"td",16)(490,"div",23)(491,"span",24),t(492," disabled"),a(493,"br"),e()()(),n(494,"td",19)(495,"code",26),t(496,"boolean "),e(),n(497,"code",32),t(498," Function"),e()(),n(499,"td",22)(500,"em")(501,"strong"),t(502,"(opcional)"),e()(),n(503,"p"),t(504,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),e(),n(505,"p"),t(506,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),e()()(),n(507,"tr",15)(508,"td",16)(509,"div",23)(510,"span",24),t(511," icon"),a(512,"br"),e()()(),n(513,"td",19)(514,"code",27),t(515,"string "),e(),n(516,"code",28),t(517," TemplateRef<void>"),e()(),n(518,"td",22)(519,"em")(520,"strong"),t(521,"(opcional)"),e()(),n(522,"p"),t(523,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),e(),n(524,"p"),t(525,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(526,"a",33),t(527,"Biblioteca de \xEDcones"),e(),t(528,". conforme exemplo abaixo:"),e(),n(529,"pre")(530,"code"),t(531,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>`),e()(),n(532,"p"),t(533,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),e(),n(534,"pre")(535,"code"),t(536,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>`),e()(),n(537,"p"),t(538,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(539,"code"),t(540,"TemplateRef"),e(),t(541,`, conforme exemplo abaixo:
component.html:`),e(),n(542,"pre")(543,"code"),t(544,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>`),e()(),n(545,"p"),t(546,"component.ts:"),e(),n(547,"pre")(548,"code"),t(549,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];`),e()()()(),n(550,"tr",15)(551,"td",16)(552,"div",23)(553,"span",24),t(554," label"),a(555,"br"),e()()(),n(556,"td",19)(557,"code",27),t(558,"string"),e()(),n(559,"td",22)(560,"em")(561,"strong"),t(562,"(opcional)"),e()(),n(563,"p"),t(564,"R\xF3tulo da a\xE7\xE3o."),e()()(),n(565,"tr",15)(566,"td",16)(567,"div",23)(568,"span",24),t(569," type"),a(570,"br"),e()()(),n(571,"td",19)(572,"code",27),t(573,"string"),e()(),n(574,"td",22)(575,"em")(576,"strong"),t(577,"(opcional)"),e()(),n(578,"p"),t(579,"Define a cor do item, sendo "),n(580,"code"),t(581,"default"),e(),t(582," o padr\xE3o."),e(),n(583,"p"),t(584,"Valores v\xE1lidos:"),e(),n(585,"ul")(586,"li")(587,"code"),t(588,"default"),e()(),n(589,"li")(590,"code"),t(591,"danger"),e(),t(592," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),e()()()(),n(593,"tr",15)(594,"td",16)(595,"div",23)(596,"span",24),t(597," visible"),a(598,"br"),e()()(),n(599,"td",19)(600,"code",26),t(601,"boolean "),e(),n(602,"code",32),t(603," Function"),e()(),n(604,"td",22)(605,"em")(606,"strong"),t(607,"(opcional)"),e()(),n(608,"p"),t(609,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),e(),n(610,"blockquote")(611,"p"),t(612,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),e()(),n(613,"p"),t(614,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),e(),n(615,"ul")(616,"li")(617,"p"),t(618,"Fun\xE7\xE3o que deve retornar um booleano."),e()(),n(619,"li")(620,"p"),t(621,"Informar diretamente um valor booleano."),e()()()()()(),n(622,"h3"),t(623,"Enums"),e(),n(624,"h4",4)(625,"code",5),t(626,"PoProgressSize"),e()(),n(627,"div",2)(628,"p")(629,"em"),t(630,"Enum"),e(),n(631,"code"),t(632,"PoProgressSize"),e(),t(633," para o tamanho da altura da barra de progresso."),e()(),n(634,"h4",11),t(635,"Propriedades"),e(),n(636,"table",12)(637,"tr",13)(638,"th",14),t(639,"Nome"),e(),n(640,"th",14),t(641,"Descri\xE7\xE3o"),e()()(),n(642,"h4",4)(643,"code",5),t(644,"PoProgressStatus"),e()(),n(645,"div",2)(646,"p")(647,"em"),t(648,"Enum"),e(),n(649,"code"),t(650,"PoProgressStatus"),e(),t(651," para os status de barra de progresso."),e()(),n(652,"h4",11),t(653,"Propriedades"),e(),n(654,"table",12)(655,"tr",13)(656,"th",14),t(657,"Nome"),e(),n(658,"th",14),t(659,"Descri\xE7\xE3o"),e()(),n(660,"tr",15)(661,"td",16)(662,"div",23)(663,"span",24),t(664," Default"),a(665,"br"),e()()(),n(666,"td",22)(667,"p"),t(668,"Define o status "),n(669,"code"),t(670,"default"),e(),t(671," para a barra de progresso."),e()()(),n(672,"tr",15)(673,"td",16)(674,"div",23)(675,"span",24),t(676," Error"),a(677,"br"),e()()(),n(678,"td",22)(679,"p"),t(680,"Define o status de "),n(681,"code"),t(682,"error"),e(),t(683," para a barra de progresso."),e()()(),n(684,"tr",15)(685,"td",16)(686,"div",23)(687,"span",24),t(688," Success"),a(689,"br"),e()()(),n(690,"td",22)(691,"p"),t(692,"Define o status de "),n(693,"code"),t(694,"success"),e(),t(695," para a barra de progresso."),e()()()()())},dependencies:[C],encapsulation:2})}return i})();var Se=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||i)(w(Z),w($))};static \u0275cmp=u({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Progress",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(r,o){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),a(3,"sample-po-progress-doc"),e(),n(4,"po-tab",3),a(5,"sample-po-progress-basic-view")(6,"sample-po-progress-labs-view")(7,"sample-po-progress-publication-view"),e()()()),r&2&&(m("p-actions",o.actions),s(2),m("p-active",o.activeTab.includes("doc")),s(2),m("p-hide",o.hidePoWebSample)("p-active",o.activeTab.includes("web")))},dependencies:[z,P,x,de,ue,be,Ee],encapsulation:2})}return i})();var Ve=[{path:"",component:Se}],fe=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=B({type:i});static \u0275inj=I({imports:[A.forChild(Ve),A]})}return i})();var ot=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=B({type:i});static \u0275inj=I({imports:[pe,fe]})}return i})();export{ot as DocPoProgressModule};
