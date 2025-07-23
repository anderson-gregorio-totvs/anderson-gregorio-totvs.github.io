import{$ as z,$a as k,Bc as J,Ca as L,Da as F,Ea as V,Ec as K,F as c,Fa as W,Fc as C,G as u,Ga as t,Ia as M,Ka as S,La as f,Lb as N,Ma as E,Mb as q,Nb as I,Ob as R,Od as oe,Pa as A,Pb as H,T as d,U as O,Wb as U,Xd as v,Yb as Y,Yd as x,Zb as Q,_ as h,ad as X,ha as s,id as Z,ka as w,md as $,na as o,oa as e,oc as T,pa as r,re as P,se as ne,ta as _,ua as g,y as B,yd as ee,zc as G,zd as te}from"./chunk-23IW53AA.js";var ie=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=h({type:i,selectors:[["sample-po-modal-basic"]],standalone:!1,decls:4,vars:0,consts:[["modal",""],["p-title","PO Modal"],["p-label","Open modal",3,"p-click"]],template:function(a,n){if(a&1){let p=_();o(0,"po-modal",1,0),t(2," We are TOTVERS!!! "),e(),o(3,"po-button",2),g("p-click",function(){c(p);let l=W(1);return u(l.open())}),e()}},dependencies:[T,C],encapsulation:2})}return i})();var he=i=>({"docs-sample-code-tabs":i}),le=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=h({type:i,selectors:[["sample-po-modal-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(r(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Modal Basic"),e(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-modal-basic/sample-po-modal-basic.component.html"),e(),o(13,"pre",7),t(14,`<po-modal #modal p-title="PO Modal"> We are TOTVERS!!! </po-modal>

<po-button p-label="Open modal" (p-click)="modal.open()"> </po-button>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-modal-basic/sample-po-modal-basic.component.ts"),e(),o(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-modal-basic',
  templateUrl: './sample-po-modal-basic.component.html',
  standalone: false
})
export class SamplePoModalBasicComponent {}
`),e()()()()(),o(21,"div",10),r(22,"sample-po-modal-basic"),e(),r(23,"hr")),a&2&&(d(5),w("po-icon "+n.sampleCodeButtonIcon),d(),M(" ",n.sampleCodeButtonLabel,""),d(),s("ngClass",A(4,he,n.hideSampleCodeTabs)))},dependencies:[k,P,v,x,ie],encapsulation:2})}return i})();var re=(()=>{class i{poModal;content;size;title;icon;primaryAction={action:()=>{this.poModal.close()},label:"Confirm"};primaryActionLabel;primaryActionProperties;primaryActionOptions=[{value:"danger",label:"Danger"},{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"}];iconOptions=[{value:"ph ph-newspaper",label:"ph ph-newspaper"},{value:"ph ph-magnifying-glass",label:"ph ph-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];secondaryAction={action:()=>{this.poModal.close()},label:"Cancel"};secondaryActionLabel;secondaryActionProperties;secondaryActionOptions=[{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"},{value:"danger",label:"Danger"}];propertiesOptions=[{value:"click-out",label:"Click Out"},{value:"hide-close",label:"Hide Close"}];properties;sizeOptions=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra large",value:"xl"},{label:"Automatic",value:"auto"}];openModal(){this.primaryAction.disabled=this.primaryActionProperties.includes("disabled"),this.primaryAction.label=this.primaryActionLabel,this.primaryAction.loading=this.primaryActionProperties.includes("loading"),this.primaryAction.danger=this.primaryActionProperties.includes("danger"),this.secondaryAction.disabled=this.secondaryActionProperties.includes("disabled"),this.secondaryAction.label=this.secondaryActionLabel,this.secondaryAction.loading=this.secondaryActionProperties.includes("loading"),this.secondaryAction.danger=this.secondaryActionProperties.includes("danger"),this.poModal.open()}ngOnInit(){this.restore()}restore(){this.size=void 0,this.content=void 0,this.title="PO Modal",this.properties=[],this.primaryActionLabel=void 0,this.primaryActionProperties=[],this.secondaryActionLabel=void 0,this.secondaryActionProperties=[],this.icon=void 0}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=h({type:i,selectors:[["sample-po-modal-labs"]],viewQuery:function(a,n){if(a&1&&L(C,7),a&2){let p;F(p=V())&&(n.poModal=p.first)}},standalone:!1,decls:21,vars:23,consts:[["f","ngForm"],[3,"p-click-out","p-hide-close","p-primary-action","p-secondary-action","p-size","p-title","p-icon"],["p-label","Open Modal",3,"p-click","p-disabled"],[1,"po-row"],["name","Title","p-clean","","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Content","p-clean","","p-label","Content","p-maxlength","200",1,"po-sm-12","po-md-6",3,"ngModelChange","ngModel"],["name","primaryActionLabel","p-clean","","p-label","Primary action label","p-maxlength","30",1,"po-md-6",3,"ngModelChange","ngModel"],["name","primaryActionProperties","p-columns","3","p-label","Primary Action Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","secondaryActionLabel","p-clean","","p-label","Secondary action label","p-maxlength","100",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondaryActionProperties","p-columns","3","p-label","Secondary Action Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","Size","p-label","Size",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,n){if(a&1){let p=_();o(0,"po-modal",1),t(1),e(),o(2,"po-button",2),g("p-click",function(){return c(p),u(n.openModal())}),e(),r(3,"hr"),o(4,"form",null,0)(6,"div",3)(7,"po-input",4),E("ngModelChange",function(l){return c(p),f(n.title,l)||(n.title=l),u(l)}),e(),o(8,"po-input",5),E("ngModelChange",function(l){return c(p),f(n.content,l)||(n.content=l),u(l)}),e()(),o(9,"div",3)(10,"po-input",6),E("ngModelChange",function(l){return c(p),f(n.primaryActionLabel,l)||(n.primaryActionLabel=l),u(l)}),e(),o(11,"po-checkbox-group",7),E("ngModelChange",function(l){return c(p),f(n.primaryActionProperties,l)||(n.primaryActionProperties=l),u(l)}),e()(),o(12,"div",3)(13,"po-input",8),E("ngModelChange",function(l){return c(p),f(n.secondaryActionLabel,l)||(n.secondaryActionLabel=l),u(l)}),e(),o(14,"po-checkbox-group",9),E("ngModelChange",function(l){return c(p),f(n.secondaryActionProperties,l)||(n.secondaryActionProperties=l),u(l)}),e()(),o(15,"div",3)(16,"po-radio-group",10),E("ngModelChange",function(l){return c(p),f(n.size,l)||(n.size=l),u(l)}),e(),o(17,"po-select",11),E("ngModelChange",function(l){return c(p),f(n.icon,l)||(n.icon=l),u(l)}),e(),o(18,"po-checkbox-group",12),E("ngModelChange",function(l){return c(p),f(n.properties,l)||(n.properties=l),u(l)}),e()(),o(19,"div",3)(20,"po-button",13),g("p-click",function(){return c(p),u(n.restore())}),e()()()}if(a&2){let p=W(5);s("p-click-out",n.properties.includes("click-out"))("p-hide-close",n.properties.includes("hide-close"))("p-primary-action",n.primaryAction)("p-secondary-action",n.secondaryActionLabel?n.secondaryAction:null)("p-size",n.size)("p-title",n.title)("p-icon",n.icon),d(),M(" ",n.content,`
`),d(),s("p-disabled",p.form.invalid),d(5),S("ngModel",n.title),d(),S("ngModel",n.content),d(2),S("ngModel",n.primaryActionLabel),d(),S("ngModel",n.primaryActionProperties),s("p-options",n.primaryActionOptions),d(2),S("ngModel",n.secondaryActionLabel),d(),S("ngModel",n.secondaryActionProperties),s("p-options",n.secondaryActionOptions),d(2),S("ngModel",n.size),s("p-options",n.sizeOptions),d(),S("ngModel",n.icon),s("p-options",n.iconOptions),d(),S("ngModel",n.properties),s("p-options",n.propertiesOptions)}},dependencies:[H,N,q,R,I,T,G,J,$,ee,C],encapsulation:2})}return i})();var Ee=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=h({type:i,selectors:[["sample-po-modal-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(r(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Modal Labs"),e(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-modal-labs/sample-po-modal-labs.component.html"),e(),o(13,"pre",7),t(14,`<po-modal
  [p-click-out]="properties.includes('click-out')"
  [p-hide-close]="properties.includes('hide-close')"
  [p-primary-action]="primaryAction"
  [p-secondary-action]="secondaryActionLabel ? secondaryAction : null"
  [p-size]="size"
  [p-title]="title"
  [p-icon]="icon"
>
  { { content }}
</po-modal>

<po-button p-label="Open Modal" [p-disabled]="f.form.invalid" (p-click)="openModal()"> </po-button>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="Title" [(ngModel)]="title" p-clean p-label="Title" p-required> </po-input>

    <po-input class="po-sm-12 po-md-6" name="Content" [(ngModel)]="content" p-clean p-label="Content" p-maxlength="200">
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="primaryActionLabel"
      [(ngModel)]="primaryActionLabel"
      p-clean
      p-label="Primary action label"
      p-maxlength="30"
    >
    </po-input>

    <po-checkbox-group
      class="po-md-6"
      name="primaryActionProperties"
      [(ngModel)]="primaryActionProperties"
      p-columns="3"
      p-label="Primary Action Properties"
      [p-options]="primaryActionOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="secondaryActionLabel"
      [(ngModel)]="secondaryActionLabel"
      p-clean
      p-label="Secondary action label"
      p-maxlength="100"
    >
    </po-input>

    <po-checkbox-group
      class="po-md-6"
      name="secondaryActionProperties"
      [(ngModel)]="secondaryActionProperties"
      p-columns="3"
      p-label="Secondary Action Properties"
      [p-options]="secondaryActionOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-radio-group class="po-lg-6" name="Size" [(ngModel)]="size" p-label="Size" [p-options]="sizeOptions">
    </po-radio-group>

    <po-select class="po-lg-6" name="icon" [(ngModel)]="icon" p-label="Icon" [p-options]="iconOptions"></po-select>

    <po-checkbox-group
      class="po-md-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-modal-labs/sample-po-modal-labs.component.ts"),e(),o(19,"pre",9),t(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import {
  PoModalAction,
  PoModalComponent,
  PoRadioGroupOption,
  PoCheckboxGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-modal-labs',
  templateUrl: './sample-po-modal-labs.component.html',
  standalone: false
})
export class SamplePoModalLabsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  content;
  size;
  title;
  icon: string;

  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Confirm'
  };

  primaryActionLabel: string;
  primaryActionProperties: Array<string>;
  primaryActionOptions: Array<PoCheckboxGroupOption> = [
    { value: 'danger', label: 'Danger' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'loading', label: 'Loading' }
  ];
  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'ph ph-newspaper', label: 'ph ph-newspaper' },
    { value: 'ph ph-magnifying-glass', label: 'ph ph-magnifying-glass' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  secondaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Cancel'
  };

  secondaryActionLabel: string;
  secondaryActionProperties: Array<string>;
  secondaryActionOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'loading', label: 'Loading' },
    { value: 'danger', label: 'Danger' }
  ];

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'click-out', label: 'Click Out' },
    { value: 'hide-close', label: 'Hide Close' }
  ];

  properties: Array<string>;

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Extra large', value: 'xl' },
    { label: 'Automatic', value: 'auto' }
  ];

  openModal() {
    this.primaryAction.disabled = this.primaryActionProperties.includes('disabled');
    this.primaryAction.label = this.primaryActionLabel;
    this.primaryAction.loading = this.primaryActionProperties.includes('loading');
    this.primaryAction.danger = this.primaryActionProperties.includes('danger');

    this.secondaryAction.disabled = this.secondaryActionProperties.includes('disabled');
    this.secondaryAction.label = this.secondaryActionLabel;
    this.secondaryAction.loading = this.secondaryActionProperties.includes('loading');
    this.secondaryAction.danger = this.secondaryActionProperties.includes('danger');

    this.poModal.open();
  }

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.size = undefined;
    this.content = undefined;
    this.title = 'PO Modal';
    this.properties = [];
    this.primaryActionLabel = undefined;
    this.primaryActionProperties = [];
    this.secondaryActionLabel = undefined;
    this.secondaryActionProperties = [];
    this.icon = undefined;
  }
}
`),e()()()()(),o(21,"div",10),r(22,"sample-po-modal-labs"),e(),r(23,"hr")),a&2&&(d(5),w("po-icon "+n.sampleCodeButtonIcon),d(),M(" ",n.sampleCodeButtonLabel,""),d(),s("ngClass",A(4,Ee,n.hideSampleCodeTabs)))},dependencies:[k,P,v,x,re],encapsulation:2})}return i})();var ye=["optionsForm"],de=(()=>{class i{poNotification;form;poModal;accompaniment="";fruits;orderDetail="";close={action:()=>{this.closeModal()},label:"Close",danger:!0};confirm={action:()=>{this.proccessOrder()},label:"Confirm"};accompanimentOptions=[{value:"chocolate",label:"Chocolate"},{value:"hazeinut",label:"Hazelnut"},{value:"milk",label:"Milk"}];fruitsOptions=[{value:"orange",label:"Orange"},{value:"apple",label:"Apple"},{value:"pineapple",label:"Pineapple"},{value:"graple",label:"Grape"},{value:"strawberry",label:"Strawberry"}];constructor(m){this.poNotification=m}closeModal(){this.form.reset(),this.poModal.close()}confirmFruits(){this.proccessOrder()}restore(){this.form.reset()}openQuestionnaire(){this.poModal.open()}proccessOrder(){this.form.invalid?this.poNotification.warning("Choose the items to confirm the order."):(this.confirm.loading=!0,setTimeout(()=>{this.poNotification.success(`Your order confirmed: ${this.fruits}, with accompaniment: ${this.accompaniment}.`),this.confirm.loading=!1,this.closeModal()},700))}static \u0275fac=function(a){return new(a||i)(O(X))};static \u0275cmp=h({type:i,selectors:[["sample-po-modal-fruits-salad"]],viewQuery:function(a,n){if(a&1&&(L(ye,7),L(C,7)),a&2){let p;F(p=V())&&(n.form=p.first),F(p=V())&&(n.poModal=p.first)}},standalone:!1,decls:14,vars:8,consts:[["optionsForm","ngForm"],["p-title","Options",3,"p-primary-action","p-secondary-action"],[1,"po-row"],["name","checkboxGroup","p-label","Fruits:","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","accompaniment","p-label","Accompaniment:","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","orderDetail","p-label","Details:","p-rows","8",1,"po-md-12",3,"ngModelChange","ngModel"],[3,"p-disabled-align"],["p-danger","true","p-label","Close",3,"p-click"],["p-label","Clear",3,"p-click"],["p-kind","primary","p-label","Confirm",3,"p-click"],["p-label","Buy fruits salad",3,"p-click"]],template:function(a,n){if(a&1){let p=_();o(0,"po-modal",1)(1,"form",null,0)(3,"div",2)(4,"po-checkbox-group",3),E("ngModelChange",function(l){return c(p),f(n.fruits,l)||(n.fruits=l),u(l)}),e()(),o(5,"div",2)(6,"po-combo",4),E("ngModelChange",function(l){return c(p),f(n.accompaniment,l)||(n.accompaniment=l),u(l)}),e()(),o(7,"div",2)(8,"po-textarea",5),E("ngModelChange",function(l){return c(p),f(n.orderDetail,l)||(n.orderDetail=l),u(l)}),e()()(),o(9,"po-modal-footer",6)(10,"po-button",7),g("p-click",function(){return c(p),u(n.closeModal())}),e(),o(11,"po-button",8),g("p-click",function(){return c(p),u(n.restore())}),e(),o(12,"po-button",9),g("p-click",function(){return c(p),u(n.confirmFruits())}),e()()(),o(13,"po-button",10),g("p-click",function(){return c(p),u(n.openQuestionnaire())}),e()}a&2&&(s("p-primary-action",n.confirm)("p-secondary-action",n.close),d(4),S("ngModel",n.fruits),s("p-options",n.fruitsOptions),d(2),S("ngModel",n.accompaniment),s("p-options",n.accompanimentOptions),d(2),S("ngModel",n.orderDetail),d(),s("p-disabled-align",!1))},dependencies:[H,N,q,R,I,T,G,Z,te,C,K],encapsulation:2})}return i})();var ve=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=h({type:i,selectors:[["sample-po-modal-fruits-salad-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(r(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Modal - Fruits Salad"),e(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.html"),e(),o(13,"pre",7),t(14,`<po-modal p-title="Options" [p-primary-action]="confirm" [p-secondary-action]="close">
  <form #optionsForm="ngForm">
    <div class="po-row">
      <po-checkbox-group
        class="po-md-12"
        name="checkboxGroup"
        [(ngModel)]="fruits"
        p-label="Fruits:"
        p-required
        [p-options]="fruitsOptions"
      >
      </po-checkbox-group>
    </div>

    <div class="po-row">
      <po-combo
        class="po-md-12"
        name="accompaniment"
        [(ngModel)]="accompaniment"
        p-label="Accompaniment:"
        p-required
        [p-options]="accompanimentOptions"
      >
      </po-combo>
    </div>

    <div class="po-row">
      <po-textarea class="po-md-12" name="orderDetail" [(ngModel)]="orderDetail" p-label="Details:" p-rows="8">
      </po-textarea>
    </div>
  </form>

  <po-modal-footer [p-disabled-align]="false">
    <po-button p-danger="true" p-label="Close" (p-click)="closeModal()"> </po-button>
    <po-button p-label="Clear" (p-click)="restore()"> </po-button>
    <po-button p-kind="primary" p-label="Confirm" (p-click)="confirmFruits()"> </po-button>
  </po-modal-footer>
</po-modal>

<po-button p-label="Buy fruits salad" (p-click)="openQuestionnaire()"> </po-button>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.ts"),e(),o(19,"pre",9),t(20,`import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoCheckboxGroupOption, PoComboOption } from '@po-ui/ng-components';

import { PoModalAction } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-modal-fruits-salad',
  templateUrl: './sample-po-modal-fruits-salad.component.html',
  standalone: false
})
export class SamplePoModalFruitsSaladComponent {
  @ViewChild('optionsForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  accompaniment: string = '';
  fruits: Array<string>;
  orderDetail: string = '';

  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Close',
    danger: true
  };

  confirm: PoModalAction = {
    action: () => {
      this.proccessOrder();
    },
    label: 'Confirm'
  };

  public readonly accompanimentOptions: Array<PoComboOption> = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'hazeinut', label: 'Hazelnut' },
    { value: 'milk', label: 'Milk' }
  ];

  public readonly fruitsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'orange', label: 'Orange' },
    { value: 'apple', label: 'Apple' },
    { value: 'pineapple', label: 'Pineapple' },
    { value: 'graple', label: 'Grape' },
    { value: 'strawberry', label: 'Strawberry' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  closeModal() {
    this.form.reset();
    this.poModal.close();
  }

  confirmFruits() {
    this.proccessOrder();
  }

  restore() {
    this.form.reset();
  }

  openQuestionnaire() {
    this.poModal.open();
  }

  private proccessOrder() {
    if (this.form.invalid) {
      const orderInvalidMessage = 'Choose the items to confirm the order.';
      this.poNotification.warning(orderInvalidMessage);
    } else {
      this.confirm.loading = true;

      setTimeout(() => {
        this.poNotification.success(\`Your order confirmed: \${this.fruits}, with accompaniment: \${this.accompaniment}.\`);
        this.confirm.loading = false;
        this.closeModal();
      }, 700);
    }
  }
}
`),e()()()()(),o(21,"div",10),r(22,"sample-po-modal-fruits-salad"),e(),r(23,"hr")),a&2&&(d(5),w("po-icon "+n.sampleCodeButtonIcon),d(),M(" ",n.sampleCodeButtonLabel,""),d(),s("ngClass",A(4,ve,n.hideSampleCodeTabs)))},dependencies:[k,P,v,x,de],encapsulation:2})}return i})();var se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=h({type:i,selectors:[["sample-po-modal-doc"]],standalone:!1,decls:528,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-modal-footer"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoModalAction"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(a,n){a&1&&(o(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoModalModule } from '@po-ui/ng-components';"),e()(),o(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente po-modal"),e()(),o(7,"h3",3),t(8,"Componente"),e(),o(9,"h4",4)(10,"code",5),t(11,"PoModalComponent"),e()(),o(12,"div",2)(13,"p"),t(14,"O componente "),o(15,"code"),t(16,"po-modal"),e(),t(17," \xE9 utilizado para incluir conte\xFAdos r\xE1pidos e informativos."),e(),o(18,"p"),t(19,"No cabe\xE7alho do componente \xE9 poss\xEDvel definir um t\xEDtulo e como tamb\xE9m permite ocultar o \xEDcone de fechamento da modal."),e(),o(20,"p"),t(21,"Em seu corpo \xE9 poss\xEDvel definir um conte\xFAdo informativo, podendo utilizar componentes como por exemplo "),o(22,"code"),t(23,"po-chart"),e(),t(24,`,
`),o(25,"code"),t(26,"po-table"),e(),t(27," e os demais componentes do PO."),e(),o(28,"p"),t(29,`No rodap\xE9 encontram-se os bot\xF5es de a\xE7\xE3o prim\xE1ria e secund\xE1ria, no qual permitem definir uma a\xE7\xE3o e um r\xF3tulo, bem como
definir um estado de carregando e / ou desabilitado e / ou definir o bot\xE3o com o tipo `),o(30,"em"),t(31,"danger"),e(),t(32,`. Tamb\xE9m \xE9 poss\xEDvel utilizar
o componente `),o(33,"a",6)(34,"code"),t(35,"PoModalFooter"),e()(),t(36,"."),e(),o(37,"blockquote")(38,"p"),t(39,"\xC9 poss\xEDvel fechar a modal atrav\xE9s da tecla "),o(40,"em"),t(41,"ESC"),e(),t(42,", quando a propriedade "),o(43,"code"),t(44,"p-hide-close"),e(),t(45," n\xE3o estiver habilitada."),e()(),o(46,"h4",7),t(47,"Tokens customiz\xE1veis"),e(),o(48,"p"),t(49,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),o(50,"blockquote")(51,"p"),t(52,"Para maiores informa\xE7\xF5es, acesse o guia "),o(53,"a",8),t(54,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),t(55,"."),e()(),o(56,"table")(57,"thead")(58,"tr")(59,"th"),t(60,"Propriedade"),e(),o(61,"th"),t(62,"Descri\xE7\xE3o"),e(),o(63,"th"),t(64,"Valor Padr\xE3o"),e()()(),o(65,"tbody")(66,"tr")(67,"td")(68,"strong"),t(69,"Default Values"),e()(),r(70,"td")(71,"td"),e(),o(72,"tr")(73,"td")(74,"code"),t(75,"--border-radius"),e(),t(76," \xA0"),e(),o(77,"td"),t(78,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),o(79,"td")(80,"code"),t(81,"var(--border-radius-md)"),e()()(),o(82,"tr")(83,"td")(84,"code"),t(85,"--border-width"),e(),t(86," \xA0"),e(),o(87,"td"),t(88,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),e(),o(89,"td")(90,"code"),t(91,"var(--border-width-sm)"),e()()(),o(92,"tr")(93,"td")(94,"code"),t(95,"--border-color"),e(),t(96," \xA0"),e(),o(97,"td"),t(98,"Cor da borda"),e(),o(99,"td")(100,"code"),t(101,"var(--color-neutral-light-20)"),e()()(),o(102,"tr")(103,"td")(104,"code"),t(105,"--background"),e(),t(106," \xA0"),e(),o(107,"td"),t(108,"Cor de background"),e(),o(109,"td")(110,"code"),t(111,"var(--color-neutral-light-00)"),e()()(),o(112,"tr")(113,"td")(114,"code"),t(115,"--shadow"),e(),t(116," \xA0"),e(),o(117,"td"),t(118,"Cont\xE9m o valor da sombra do elemento"),e(),o(119,"td")(120,"code"),t(121,"var(--shadow-md)"),e()()(),o(122,"tr")(123,"td")(124,"code"),t(125,"--color-overlay"),e(),t(126," \xA0"),e(),o(127,"td"),t(128,"Cor da camada visual tempor\xE1ria"),e(),o(129,"td")(130,"code"),t(131,"var(--color-neutral-dark-80)"),e()()(),o(132,"tr")(133,"td")(134,"code"),t(135,"--opacity-overlay"),e(),t(136," \xA0"),e(),o(137,"td"),t(138,"Opacidade da camada visual tempor\xE1ria \xA0"),e(),o(139,"td")(140,"code"),t(141,"0.7"),e()()(),o(142,"tr")(143,"td")(144,"code"),t(145,"--color-divider"),e(),t(146," \xA0"),e(),o(147,"td"),t(148,"Cor das divis\xF5es do modal"),e(),o(149,"td")(150,"code"),t(151,"var(--color-neutral-light-20)"),e()()(),o(152,"tr")(153,"td")(154,"code"),t(155,"--padding-header"),e(),t(156," \xA0"),e(),o(157,"td"),t(158,"Padding do header do modal"),e(),o(159,"td")(160,"code"),t(161,"var(--spacing-sm) var(--spacing-md)"),e()()(),o(162,"tr")(163,"td")(164,"code"),t(165,"--padding-body"),e(),t(166," \xA0"),e(),o(167,"td"),t(168,"Padding do corpo do modal"),e(),o(169,"td")(170,"code"),t(171,"var(--spacing-md) var(--spacing-2xl) var(--spacing-2xl) var(--spacing-md)"),e()()()()()(),o(172,"div",9)(173,"h4",10),t(174,"Seletor"),e(),o(175,"pre",11),t(176,`<po-modal
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-hide-close="boolean"
    p-icon="string | TemplateRef<void>"
    p-primary-action="PoModalAction"
    p-secondary-action="PoModalAction"
    p-size="string"
    p-title="string" >
</po-modal>
`),e()(),o(177,"h4",12),t(178,"Propriedades"),e(),o(179,"table",13)(180,"tr",14)(181,"th",15),t(182,"Nome"),e(),o(183,"th",15),t(184,"Tipo"),e(),o(185,"th",15),t(186,"Padr\xE3o"),e(),o(187,"th",15),t(188,"Descri\xE7\xE3o"),e()(),o(189,"tr",16)(190,"td",17)(191,"div",18)(192,"span",19),t(193,"p-click-out"),r(194,"br"),e()()(),o(195,"td",20)(196,"code",21),t(197,"boolean"),e()(),o(198,"td",22),t(199,"-"),e(),o(200,"td",23)(201,"em")(202,"strong"),t(203,"(opcional)"),e()(),o(204,"p"),t(205,`Define o fechamento da modal ao clicar fora da mesma.
Informe o valor `),o(206,"code"),t(207,"true"),e(),t(208," para ativar o fechamento ao clicar fora da modal."),e()()(),o(209,"tr",16)(210,"td",17)(211,"div",24)(212,"span",25),t(213," (p-close)"),r(214,"br"),e()()(),o(215,"td",20)(216,"code",26),t(217,"EventEmitter"),e()(),o(218,"td",22),t(219,"-"),e(),o(220,"td",23)(221,"p"),t(222,"Evento disparado ao fechar o modal."),e()()(),o(223,"tr",16)(224,"td",17)(225,"div",18)(226,"span",19),t(227," p-hide-close"),r(228,"br"),e()()(),o(229,"td",20)(230,"code",21),t(231,"boolean"),e()(),o(232,"td",22)(233,"p")(234,"code"),t(235,"false"),e()()(),o(236,"td",23)(237,"em")(238,"strong"),t(239,"(opcional)"),e()(),o(240,"p"),t(241,"Oculta o \xEDcone de fechar do cabe\xE7alho da modal."),e(),o(242,"blockquote")(243,"p"),t(244,"Caso a propriedade estiver habilitada, n\xE3o ser\xE1 poss\xEDvel fechar a modal atrav\xE9s da tecla "),o(245,"em"),t(246,"ESC"),e(),t(247,"."),e()()()(),o(248,"tr",16)(249,"td",17)(250,"div",18)(251,"span",19),t(252," p-icon"),r(253,"br"),e()()(),o(254,"td",20)(255,"code",27),t(256,"string "),e(),o(257,"code",28),t(258," TemplateRef<void>"),e()(),o(259,"td",22),t(260,"-"),e(),o(261,"td",23)(262,"em")(263,"strong"),t(264,"(opcional)"),e()(),o(265,"p"),t(266,"\xCDcone exibido ao lado esquerdo do label do tit\xFAlo da modal."),e(),o(267,"p"),t(268,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),o(269,"a",29),t(270,"Biblioteca de \xEDcones"),e(),t(271,". conforme exemplo abaixo:"),e(),o(272,"pre")(273,"code"),t(274,'<po-modal p-icon="ph ph-user" p-title="PO Modal"></po-modal>'),e()(),o(275,"p"),t(276,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),o(277,"em"),t(278,"Font Awesome"),e(),t(279,", da seguinte forma:"),e(),o(280,"pre")(281,"code"),t(282,'<po-modal p-icon="fa fa-podcast" p-title="PO Modal"></po-modal>'),e()(),o(283,"p"),t(284,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),o(285,"code"),t(286,"TemplateRef"),e(),t(287,", conforme exemplo abaixo:"),e(),o(288,"pre")(289,"code"),t(290,`<po-modal [p-icon]="template" p-title="PO Modal"></po-modal>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>`),e()()()(),o(291,"tr",16)(292,"td",17)(293,"div",18)(294,"span",19),t(295," p-primary-action"),r(296,"br"),e()()(),o(297,"td",20)(298,"code",30),t(299,"PoModalAction"),e()(),o(300,"td",22),t(301,"-"),e(),o(302,"td",23)(303,"em")(304,"strong"),t(305,"(opcional)"),e()(),o(306,"p"),t(307,"Deve ser definido um objeto que implementa a interface "),o(308,"code"),t(309,"PoModalAction"),e(),t(310,` contendo a label e a fun\xE7\xE3o da primeira a\xE7\xE3o.
Caso esta propriedade n\xE3o seja definida ou esteja incompleta, automaticamente ser\xE1 adicionado um bot\xE3o de a\xE7\xE3o com
a fun\xE7\xE3o de fechar a modal.`),e()()(),o(311,"tr",16)(312,"td",17)(313,"div",18)(314,"span",19),t(315," p-secondary-action"),r(316,"br"),e()()(),o(317,"td",20)(318,"code",30),t(319,"PoModalAction"),e()(),o(320,"td",22),t(321,"-"),e(),o(322,"td",23)(323,"em")(324,"strong"),t(325,"(opcional)"),e()(),o(326,"p"),t(327,"Deve ser definido um objeto que implementa a interface "),o(328,"code"),t(329,"PoModalAction"),e(),t(330," contendo a label e a fun\xE7\xE3o da segunda a\xE7\xE3o."),e()()(),o(331,"tr",16)(332,"td",17)(333,"div",18)(334,"span",19),t(335," p-size"),r(336,"br"),e()()(),o(337,"td",20)(338,"code",27),t(339,"string"),e()(),o(340,"td",22),t(341,"-"),e(),o(342,"td",23)(343,"p"),t(344,"Define o tamanho da modal."),e(),o(345,"p"),t(346,"Valores v\xE1lidos:"),e(),o(347,"ul")(348,"li")(349,"code"),t(350,"sm"),e(),t(351," (pequeno)"),e(),o(352,"li")(353,"code"),t(354,"md"),e(),t(355," (m\xE9dio)"),e(),o(356,"li")(357,"code"),t(358,"lg"),e(),t(359," (grande)"),e(),o(360,"li")(361,"code"),t(362,"xl"),e(),t(363," (extra grande)"),e(),o(364,"li")(365,"code"),t(366,"auto"),e(),t(367," (autom\xE1tico)"),e()(),o(368,"blockquote")(369,"p"),t(370,"Quando informado "),o(371,"code"),t(372,"auto"),e(),t(373,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),o(374,"code"),t(375,"md"),e(),t(376,"."),e()(),o(377,"blockquote")(378,"p"),t(379,"Todas as op\xE7\xF5es de tamanho possuem uma largura m\xE1xima de "),o(380,"strong"),t(381,"768px"),e(),t(382,"."),e()()()(),o(383,"tr",16)(384,"td",17)(385,"div",18)(386,"span",19),t(387," p-title"),r(388,"br"),e()()(),o(389,"td",20)(390,"code",27),t(391,"string"),e()(),o(392,"td",22),t(393,"-"),e(),o(394,"td",23)(395,"p"),t(396,"T\xEDtulo da modal."),e()()()(),o(397,"h3",12),t(398,"M\xE9todos"),e(),o(399,"table",31)(400,"tr",16)(401,"th",32)(402,"div",18)(403,"h4")(404,"span",19),t(405," close "),e()()()()(),o(406,"tr",23)(407,"td",23)(408,"p"),t(409,"Fun\xE7\xE3o para fechar a modal."),e()()()(),r(410,"br"),o(411,"table",31)(412,"tr",16)(413,"th",32)(414,"div",18)(415,"h4")(416,"span",19),t(417," open "),e()()()()(),o(418,"tr",23)(419,"td",23)(420,"p"),t(421,"Fun\xE7\xE3o para abrir a modal."),e()()()(),r(422,"br"),o(423,"h3"),t(424,"Interfaces"),e(),o(425,"h4",33)(426,"code",5),t(427,"PoModalAction"),e()(),o(428,"div",2)(429,"p"),t(430,"Interface que define os bot\xF5es de a\xE7\xE3o do componente "),o(431,"code"),t(432,"po-modal"),e(),t(433,"."),e()(),o(434,"h4",12),t(435,"Propriedades"),e(),o(436,"table",13)(437,"tr",14)(438,"th",15),t(439,"Nome"),e(),o(440,"th",15),t(441,"Tipo"),e(),o(442,"th",15),t(443,"Descri\xE7\xE3o"),e()(),o(444,"tr",16)(445,"td",17)(446,"div",18)(447,"span",19),t(448," action"),r(449,"br"),e()()(),o(450,"td",20)(451,"code",34),t(452,"Function"),e()(),o(453,"td",23)(454,"p"),t(455,"Fun\xE7\xE3o que ser\xE1 executada ao clicar sobre o bot\xE3o."),e()()(),o(456,"tr",16)(457,"td",17)(458,"div",18)(459,"span",19),t(460," danger"),r(461,"br"),e()()(),o(462,"td",20)(463,"code",21),t(464,"boolean"),e()(),o(465,"td",23)(466,"em")(467,"strong"),t(468,"(opcional)"),e()(),o(469,"p"),t(470,"Define a propriedade "),o(471,"code"),t(472,"p-danger"),e(),t(473," do bot\xE3o."),e(),o(474,"blockquote")(475,"p"),t(476,"Caso a propriedade esteja definida como "),o(477,"code"),t(478,"true"),e(),t(479," em ambos os bot\xF5es, apenas o bot\xE3o prim\xE1rio receber\xE1 o "),o(480,"code"),t(481,"p-danger"),e(),t(482," como "),o(483,"code"),t(484,"true"),e(),t(485,"."),e()()()(),o(486,"tr",16)(487,"td",17)(488,"div",18)(489,"span",19),t(490," disabled"),r(491,"br"),e()()(),o(492,"td",20)(493,"code",21),t(494,"boolean"),e()(),o(495,"td",23)(496,"em")(497,"strong"),t(498,"(opcional)"),e()(),o(499,"p"),t(500,"Desabilita o bot\xE3o impossibilitando que sua a\xE7\xE3o seja executada."),e()()(),o(501,"tr",16)(502,"td",17)(503,"div",18)(504,"span",19),t(505," label"),r(506,"br"),e()()(),o(507,"td",20)(508,"code",27),t(509,"string"),e()(),o(510,"td",23)(511,"p"),t(512,"R\xF3tulo do bot\xE3o."),e()()(),o(513,"tr",16)(514,"td",17)(515,"div",18)(516,"span",19),t(517," loading"),r(518,"br"),e()()(),o(519,"td",20)(520,"code",21),t(521,"boolean"),e()(),o(522,"td",23)(523,"em")(524,"strong"),t(525,"(opcional)"),e()(),o(526,"p"),t(527,"Habilita um estado de carregamento ao bot\xE3o, desabilitando-o e exibindo um \xEDcone de carregamento \xE0 esquerda de seu r\xF3tulo."),e()()()()())},dependencies:[P],encapsulation:2})}return i})();var ce=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||i)(O(U),O(Y))};static \u0275cmp=h({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Modal",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,n){a&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),r(3,"sample-po-modal-doc"),e(),o(4,"po-tab",3),r(5,"sample-po-modal-basic-view")(6,"sample-po-modal-labs-view")(7,"sample-po-modal-fruits-salad-view"),e()()()),a&2&&(s("p-actions",n.actions),d(2),s("p-active",n.activeTab.includes("doc")),d(2),s("p-hide",n.hidePoWebSample)("p-active",n.activeTab.includes("web")))},dependencies:[oe,v,x,le,pe,me,se],encapsulation:2})}return i})();var we=[{path:"",component:ce}],ue=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=z({type:i});static \u0275inj=B({imports:[Q.forChild(we),Q]})}return i})();var Ze=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=z({type:i});static \u0275inj=B({imports:[ne,ue]})}return i})();export{Ze as DocPoModalModule};
