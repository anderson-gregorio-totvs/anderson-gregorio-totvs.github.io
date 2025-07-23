import{$ as L,$a as w,Bc as q,Ca as z,Cd as X,Da as G,Ea as U,F as m,Fa as Q,G as c,Ga as i,Ia as M,Jc as x,Ka as h,La as C,Lb as N,Ma as b,Mb as A,Nb as B,Ob as W,Od as R,Pa as _,Pb as I,T as s,U as E,Wb as J,Xd as D,Yb as K,Yd as y,Zb as j,_ as f,ad as Y,ha as u,ka as P,md as H,na as e,oa as t,oc as F,pa as r,re as T,se as $,ta as V,ua as S,y as k,zc as Z}from"./chunk-TZ5FQAUY.js";var ee=(()=>{class a{poDialog;constructor(p){this.poDialog=p}static \u0275fac=function(l){return new(l||a)(E(x))};static \u0275cmp=f({type:a,selectors:[["sample-po-dialog-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-label","Open Dialog",3,"p-click"]],template:function(l,n){l&1&&(e(0,"po-button",0),S("p-click",function(){return n.poDialog.alert({title:"PO Dialog",message:"PO Dialog"})}),t())},dependencies:[F],encapsulation:2})}return a})();var ce=a=>({"docs-sample-code-tabs":a}),ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-dialog-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(r(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Dialog Basic"),t(),e(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-dialog-basic/sample-po-dialog-basic.component.html"),t(),e(13,"pre",7),i(14,`<po-button p-label="Open Dialog" (p-click)="poDialog.alert({ title: 'PO Dialog', message: 'PO Dialog' })"> </po-button>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-dialog-basic/sample-po-dialog-basic.component.ts"),t(),e(19,"pre",9),i(20,`import { Component } from '@angular/core';

import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dialog-basic',
  templateUrl: './sample-po-dialog-basic.component.html',
  standalone: false
})
export class SamplePoDialogBasicComponent {
  constructor(public poDialog: PoDialogService) {}
}
`),t()()()()(),e(21,"div",10),r(22,"sample-po-dialog-basic"),t(),r(23,"hr")),l&2&&(s(5),P("po-icon "+n.sampleCodeButtonIcon),s(),M(" ",n.sampleCodeButtonLabel,""),s(),u("ngClass",_(4,ce,n.hideSampleCodeTabs)))},dependencies:[w,T,D,y,ee],encapsulation:2})}return a})();var oe=(()=>{class a{poAlert;action;actionOptions;dialogMethod;help;literals;literalsAlert;literalsConfirm;message;title;dialogActionOptions=[{label:"Ok",value:"ok"},{label:"Cancel",value:"cancel"},{label:"Confirm",value:"confirm"},{label:"Close",value:"close"}];dialogMethodOptions=[{label:"Alert",value:"alert"},{label:"Confirm",value:"confirm"}];constructor(p){this.poAlert=p}ngOnInit(){this.restore()}alertDialog(){this.poAlert.alert({literals:this.literalsAlert,title:this.title,message:this.message,ok:()=>this.actionOptions.includes("ok")?this.action="OK":void 0})}changeLiterals(){let p;try{p=this.literals?JSON.parse(this.literals):void 0}catch{p=void 0}this.dialogMethod==="alert"?this.literalsAlert=p:this.dialogMethod==="confirm"&&(this.literalsConfirm=p)}changeMethod(){this.dialogMethod==="alert"?this.help='Ex: { "ok": "Conclu\xEDdo" }':this.help='Ex: { "cancel": "N\xE3o", "confirm": "Sim" }'}confirmDialog(){this.poAlert.confirm({literals:this.literalsConfirm,title:this.title,message:this.message,confirm:()=>this.actionOptions.includes("confirm")?this.action="Confirm":void 0,cancel:()=>this.actionOptions.includes("cancel")?this.action="Cancel":void 0,close:()=>this.actionOptions.includes("close")?this.action="Close":void 0})}openDialog(){this.action="",this.dialogMethod==="alert"?this.alertDialog():this.confirmDialog()}restore(){this.action=void 0,this.actionOptions=[],this.title="PO Dialog",this.message="PO Dialog",this.dialogMethod=void 0,this.literals=void 0,this.literalsAlert=void 0,this.literalsConfirm=void 0,this.help=""}static \u0275fac=function(l){return new(l||a)(E(x))};static \u0275cmp=f({type:a,selectors:[["sample-po-dialog-labs"]],standalone:!1,decls:18,vars:10,consts:[["f","ngForm"],["name","openDialog","p-label","Open Dialog",3,"p-click","p-disabled"],[1,"po-row"],["p-label","Action clicked",1,"po-md-12",3,"p-value"],["name","title","p-clean","","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","message","p-clean","","p-label","Message","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","dialogMethod","p-label","Dialog method",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","literals","p-clean","","p-label","Literals",1,"po-md-12",3,"ngModelChange","p-blur","p-change-model","ngModel","p-help"],["name","actionOptions","p-label","Action options",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,n){if(l&1){let d=V();e(0,"po-button",1),S("p-click",function(){return m(d),c(n.openDialog())}),t(),r(1,"hr"),e(2,"div",2),r(3,"po-info",3),t(),r(4,"hr"),e(5,"form",null,0)(7,"div",2)(8,"po-input",4),b("ngModelChange",function(o){return m(d),C(n.title,o)||(n.title=o),c(o)}),t(),e(9,"po-input",5),b("ngModelChange",function(o){return m(d),C(n.message,o)||(n.message=o),c(o)}),t()(),e(10,"div",2)(11,"po-radio-group",6),b("ngModelChange",function(o){return m(d),C(n.dialogMethod,o)||(n.dialogMethod=o),c(o)}),S("p-change",function(){return m(d),c(n.changeMethod())}),t()(),e(12,"div",2)(13,"po-input",7),b("ngModelChange",function(o){return m(d),C(n.literals,o)||(n.literals=o),c(o)}),S("p-blur",function(){return m(d),c(n.changeLiterals())})("p-change-model",function(){return m(d),c(n.changeLiterals())}),t()(),e(14,"div",2)(15,"po-checkbox-group",8),b("ngModelChange",function(o){return m(d),C(n.actionOptions,o)||(n.actionOptions=o),c(o)}),t()(),e(16,"div",2)(17,"po-button",9),S("p-click",function(){return m(d),c(n.restore())}),t()()()}if(l&2){let d=Q(6);u("p-disabled",d.invalid),s(3),u("p-value",n.action),s(5),h("ngModel",n.title),s(),h("ngModel",n.message),s(2),h("ngModel",n.dialogMethod),u("p-options",n.dialogMethodOptions),s(2),h("ngModel",n.literals),u("p-help",n.help),s(2),h("ngModel",n.actionOptions),u("p-options",n.dialogActionOptions)}},dependencies:[I,N,A,W,B,F,Z,q,H,X],encapsulation:2})}return a})();var Ce=a=>({"docs-sample-code-tabs":a}),ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-dialog-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(r(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Dialog Labs"),t(),e(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-dialog-labs/sample-po-dialog-labs.component.html"),t(),e(13,"pre",7),i(14,`<po-button name="openDialog" p-label="Open Dialog" [p-disabled]="f.invalid" (p-click)="openDialog()"> </po-button>

<hr />

<div class="po-row">
  <po-info class="po-md-12" p-label="Action clicked" [p-value]="action"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-clean p-label="Title" p-required> </po-input>

    <po-input class="po-md-6" name="message" [(ngModel)]="message" p-clean p-label="Message" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-12"
      name="dialogMethod"
      [(ngModel)]="dialogMethod"
      p-label="Dialog method"
      [p-options]="dialogMethodOptions"
      (p-change)="changeMethod()"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-12"
      name="literals"
      [(ngModel)]="literals"
      p-clean
      p-label="Literals"
      [p-help]="help"
      (p-blur)="changeLiterals()"
      (p-change-model)="changeLiterals()"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="actionOptions"
      [(ngModel)]="actionOptions"
      p-label="Action options"
      [p-options]="dialogActionOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-dialog-labs/sample-po-dialog-labs.component.ts"),t(),e(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

import { PoDialogAlertLiterals, PoDialogConfirmLiterals, PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dialog-labs',
  templateUrl: './sample-po-dialog-labs.component.html',
  standalone: false
})
export class SamplePoDialogLabsComponent implements OnInit {
  action: string;
  actionOptions: Array<string>;
  dialogMethod: string;
  help: string;
  literals: string;
  literalsAlert: PoDialogAlertLiterals;
  literalsConfirm: PoDialogConfirmLiterals;
  message: string;
  title: string;

  public readonly dialogActionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Ok', value: 'ok' },
    { label: 'Cancel', value: 'cancel' },
    { label: 'Confirm', value: 'confirm' },
    { label: 'Close', value: 'close' }
  ];

  public readonly dialogMethodOptions: Array<PoRadioGroupOption> = [
    { label: 'Alert', value: 'alert' },
    { label: 'Confirm', value: 'confirm' }
  ];

  constructor(private poAlert: PoDialogService) {}

  ngOnInit() {
    this.restore();
  }

  alertDialog() {
    this.poAlert.alert({
      literals: this.literalsAlert,
      title: this.title,
      message: this.message,
      ok: () => (this.actionOptions.includes('ok') ? (this.action = 'OK') : undefined)
    });
  }

  changeLiterals() {
    let literalsModel;
    try {
      literalsModel = this.literals ? JSON.parse(this.literals) : undefined;
    } catch (error) {
      literalsModel = undefined;
    }

    if (this.dialogMethod === 'alert') {
      this.literalsAlert = literalsModel;
    } else if (this.dialogMethod === 'confirm') {
      this.literalsConfirm = literalsModel;
    }
  }

  changeMethod() {
    if (this.dialogMethod === 'alert') {
      this.help = 'Ex: { "ok": "Conclu\xEDdo" }';
    } else {
      this.help = 'Ex: { "cancel": "N\xE3o", "confirm": "Sim" }';
    }
  }

  confirmDialog() {
    this.poAlert.confirm({
      literals: this.literalsConfirm,
      title: this.title,
      message: this.message,
      confirm: () => (this.actionOptions.includes('confirm') ? (this.action = 'Confirm') : undefined),
      cancel: () => (this.actionOptions.includes('cancel') ? (this.action = 'Cancel') : undefined),
      close: () => (this.actionOptions.includes('close') ? (this.action = 'Close') : undefined)
    });
  }

  openDialog() {
    this.action = '';
    this.dialogMethod === 'alert' ? this.alertDialog() : this.confirmDialog();
  }

  restore() {
    this.action = undefined;
    this.actionOptions = [];
    this.title = 'PO Dialog';
    this.message = 'PO Dialog';
    this.dialogMethod = undefined;
    this.literals = undefined;
    this.literalsAlert = undefined;
    this.literalsConfirm = undefined;
    this.help = '';
  }
}
`),t()()()()(),e(21,"div",10),r(22,"sample-po-dialog-labs"),t(),r(23,"hr")),l&2&&(s(5),P("po-icon "+n.sampleCodeButtonIcon),s(),M(" ",n.sampleCodeButtonLabel,""),s(),u("ngClass",_(4,Ce,n.hideSampleCodeTabs)))},dependencies:[w,T,D,y,oe],encapsulation:2})}return a})();var fe=["form"],le=(()=>{class a{poDialog;poNotification;form;action;address;cardNumber;cardType;city;country;name;phoneNumber;securityCode;stateProvince;zipPostalCode;cardTypeOptions=[{label:"Master Card",value:"Master"},{label:"Visa",value:"visa"},{label:"Diners",value:"diners"},{label:"Hipercard",value:"hipercard"}];statusSubscription;constructor(p,l){this.poDialog=p,this.poNotification=l}ngOnDestroy(){this.statusSubscription.unsubscribe()}ngOnInit(){this.action=[{label:"Cancel",icon:"ICON_DELETE",action:this.openConfirmDialog.bind(this),disabled:!0}],this.statusSubscription=this.form.statusChanges.subscribe(p=>this.actionDisabledCheck(p))}actionDisabledCheck(p){this.action[0].disabled=p==="INVALID"}confirmCancelation(){this.poNotification.success(`Credit card ${this.cardNumber} canceled`),this.form.reset()}openConfirmDialog(){this.poDialog.confirm({title:"Confirm",message:`<p>Hi <b>${this.name}</b>.</p> <p> Do you confirm the cancellation of the card number  <i class="po-icon ph ph-credit-card"></i> <b>${this.cardNumber}<b>? </p>`,confirm:()=>this.confirmCancelation()})}static \u0275fac=function(l){return new(l||a)(E(x),E(Y))};static \u0275cmp=f({type:a,selectors:[["sample-po-dialog-cancel-credit-card"]],viewQuery:function(l,n){if(l&1&&z(fe,7),l&2){let d;G(d=U())&&(n.form=d.first)}},standalone:!1,decls:18,vars:12,consts:[["form","ngForm"],["p-title","Credit Card Cancelation",3,"p-actions"],[1,"po-row"],["name","cardType","p-label","Card type","p-required","",1,"po-md-8",3,"ngModelChange","ngModel","p-options"],["name","cardNumber","p-label","Card number","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-minlength","19","p-required","",1,"po-md-8",3,"ngModelChange","ngModel"],["name","securityCode","p-label","Security code","p-mask","999","p-minlength","3","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","name","p-label","Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","address","p-label","Address",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","city","p-label","City",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","stateProvince","p-label","State/Province",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","zipPostalCode","p-label","Zip/PostalCode",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","phoneNumber","p-label","Phone number","p-mask","(99) 9?9999-9999","p-mask-format-model","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","country","p-label","Country",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,n){if(l&1){let d=V();e(0,"po-page-default",1)(1,"form",null,0)(3,"div",2)(4,"po-radio-group",3),b("ngModelChange",function(o){return m(d),C(n.cardType,o)||(n.cardType=o),c(o)}),t()(),e(5,"div",2)(6,"po-input",4),b("ngModelChange",function(o){return m(d),C(n.cardNumber,o)||(n.cardNumber=o),c(o)}),t(),e(7,"po-input",5),b("ngModelChange",function(o){return m(d),C(n.securityCode,o)||(n.securityCode=o),c(o)}),t()(),e(8,"div",2)(9,"po-input",6),b("ngModelChange",function(o){return m(d),C(n.name,o)||(n.name=o),c(o)}),t()(),e(10,"div",2)(11,"po-input",7),b("ngModelChange",function(o){return m(d),C(n.address,o)||(n.address=o),c(o)}),t(),e(12,"po-input",8),b("ngModelChange",function(o){return m(d),C(n.city,o)||(n.city=o),c(o)}),t(),e(13,"po-input",9),b("ngModelChange",function(o){return m(d),C(n.stateProvince,o)||(n.stateProvince=o),c(o)}),t(),e(14,"po-input",10),b("ngModelChange",function(o){return m(d),C(n.zipPostalCode,o)||(n.zipPostalCode=o),c(o)}),t()(),e(15,"div",2)(16,"po-input",11),b("ngModelChange",function(o){return m(d),C(n.phoneNumber,o)||(n.phoneNumber=o),c(o)}),t(),e(17,"po-input",12),b("ngModelChange",function(o){return m(d),C(n.country,o)||(n.country=o),c(o)}),t()()()()}l&2&&(u("p-actions",n.action),s(4),h("ngModel",n.cardType),u("p-options",n.cardTypeOptions),s(2),h("ngModel",n.cardNumber),s(),h("ngModel",n.securityCode),s(2),h("ngModel",n.name),s(2),h("ngModel",n.address),s(),h("ngModel",n.city),s(),h("ngModel",n.stateProvince),s(),h("ngModel",n.zipPostalCode),s(2),h("ngModel",n.phoneNumber),s(),h("ngModel",n.country))},dependencies:[I,N,A,W,B,q,H,R],encapsulation:2})}return a})();var Ee=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-dialog-cancel-credit-card-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(r(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Dialog - Cancel Credit Card"),t(),e(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.html"),t(),e(13,"pre",7),i(14,`<po-page-default p-title="Credit Card Cancelation" [p-actions]="action">
  <form #form="ngForm">
    <div class="po-row">
      <po-radio-group
        class="po-md-8"
        name="cardType"
        [(ngModel)]="cardType"
        p-label="Card type"
        p-required
        [p-options]="cardTypeOptions"
      >
      </po-radio-group>
    </div>

    <div class="po-row">
      <po-input
        class="po-md-8"
        name="cardNumber"
        [(ngModel)]="cardNumber"
        p-label="Card number"
        p-mask="9999 9999 9999 9999"
        p-mask-format-model
        p-minlength="19"
        p-required
      >
      </po-input>

      <po-input
        class="po-md-4"
        name="securityCode"
        [(ngModel)]="securityCode"
        p-label="Security code"
        p-mask="999"
        p-minlength="3"
        p-required
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-12" name="name" [(ngModel)]="name" p-label="Name" p-required> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-6 po-lg-3" name="address" [(ngModel)]="address" p-label="Address"> </po-input>

      <po-input class="po-md-6 po-lg-3" name="city" [(ngModel)]="city" p-label="City"> </po-input>

      <po-input class="po-md-6 po-lg-3" name="stateProvince" [(ngModel)]="stateProvince" p-label="State/Province">
      </po-input>

      <po-input class="po-md-6 po-lg-3" name="zipPostalCode" [(ngModel)]="zipPostalCode" p-label="Zip/PostalCode">
      </po-input>
    </div>

    <div class="po-row">
      <po-input
        class="po-md-6"
        name="phoneNumber"
        [(ngModel)]="phoneNumber"
        p-label="Phone number"
        p-mask="(99) 9?9999-9999"
        p-mask-format-model
      >
      </po-input>

      <po-input class="po-md-6" name="country" [(ngModel)]="country" p-label="Country"> </po-input>
    </div>
  </form>
</po-page-default>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.ts"),t(),e(19,"pre",9),i(20,`import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { Subscription } from 'rxjs';

import { PoDialogService, PoNotificationService, PoPageAction, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dialog-cancel-credit-card',
  templateUrl: './sample-po-dialog-cancel-credit-card.component.html',
  standalone: false
})
export class SamplePoDialogCancelCreditCardComponent implements OnDestroy, OnInit {
  @ViewChild('form', { static: true }) form: UntypedFormControl;

  action: Array<PoPageAction>;
  address: string;
  cardNumber: string;
  cardType: string;
  city: string;
  country: string;
  name: string;
  phoneNumber: string;
  securityCode: string;
  stateProvince: string;
  zipPostalCode: string;

  public readonly cardTypeOptions: Array<PoRadioGroupOption> = [
    { label: 'Master Card', value: 'Master' },
    { label: 'Visa', value: 'visa' },
    { label: 'Diners', value: 'diners' },
    { label: 'Hipercard', value: 'hipercard' }
  ];

  private statusSubscription: Subscription;

  constructor(
    private poDialog: PoDialogService,
    private poNotification: PoNotificationService
  ) {}

  ngOnDestroy() {
    this.statusSubscription.unsubscribe();
  }

  ngOnInit() {
    this.action = [
      {
        label: 'Cancel',
        icon: 'ICON_DELETE',
        action: this.openConfirmDialog.bind(this),
        disabled: true
      }
    ];
    this.statusSubscription = this.form.statusChanges.subscribe(status => this.actionDisabledCheck(status));
  }

  actionDisabledCheck(status: string) {
    this.action[0].disabled = status === 'INVALID';
  }

  confirmCancelation() {
    this.poNotification.success(\`Credit card \${this.cardNumber} canceled\`);
    this.form.reset();
  }

  openConfirmDialog() {
    this.poDialog.confirm({
      title: 'Confirm',
      message: \`<p>Hi <b>\${this.name}</b>.</p> <p> Do you confirm the cancellation of the card number  <i class="po-icon ph ph-credit-card"></i> <b>\${this.cardNumber}<b>? </p>\`,
      confirm: () => this.confirmCancelation()
    });
  }
}
`),t()()()()(),e(21,"div",10),r(22,"sample-po-dialog-cancel-credit-card"),t(),r(23,"hr")),l&2&&(s(5),P("po-icon "+n.sampleCodeButtonIcon),s(),M(" ",n.sampleCodeButtonLabel,""),s(),u("ngClass",_(4,Ee,n.hideSampleCodeTabs)))},dependencies:[w,T,D,y,le],encapsulation:2})}return a})();var pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-dialog-doc"]],standalone:!1,decls:331,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-h4","docs-api-class-name"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoDialogAlertLiterals"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoDialogConfirmLiterals"]],template:function(l,n){l&1&&(e(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoDialogModule } from '@po-ui/ng-components';"),t()(),r(4,"div",2),e(5,"h3",3),i(6,"Services"),t(),e(7,"h4",4)(8,"code",5),i(9,"PoDialogService"),t()(),e(10,"div",2)(11,"p"),i(12,`O po-dialog \xE9 um servi\xE7o para exibi\xE7\xE3o de caixas de di\xE1logo, \xE9 poss\xEDvel customiza-los passando alguns par\xE2metros de acordo com a
necessidade do desenvolvedor. `),t()(),e(13,"h3",6),i(14,"M\xE9todos"),t(),e(15,"table",7)(16,"tr",8)(17,"th",9)(18,"div",10)(19,"h4")(20,"span",11),i(21," confirm "),t()()()()(),e(22,"tr",12)(23,"td",12)(24,"p"),i(25,"Exibe um di\xE1logo de confirma\xE7\xE3o, \xE9 poss\xEDvel definir a\xE7\xF5es para as op\xE7\xF5es de confirma\xE7\xE3o e cancelamento."),t()()()(),r(26,"br"),e(27,"table",7)(28,"tr",8)(29,"th",9)(30,"div",10)(31,"h4")(32,"span",11),i(33," alert "),t()()()()(),e(34,"tr",12)(35,"td",12)(36,"p"),i(37,"Exibe um di\xE1logo de alerta."),t()()()(),r(38,"br"),e(39,"h3"),i(40,"Interfaces"),t(),e(41,"h4",13)(42,"code",5),i(43,"PoDialogAlertLiterals"),t()(),e(44,"div",2)(45,"p"),i(46,"Interface para defini\xE7\xE3o das literais usadas no servi\xE7o "),e(47,"code"),i(48,"po-dialog"),t(),i(49," para o tipo alerta."),t()(),e(50,"h4",6),i(51,"Propriedades"),t(),e(52,"table",14)(53,"tr",15)(54,"th",16),i(55,"Nome"),t(),e(56,"th",16),i(57,"Tipo"),t(),e(58,"th",16),i(59,"Descri\xE7\xE3o"),t()(),e(60,"tr",8)(61,"td",17)(62,"div",10)(63,"span",11),i(64," ok"),r(65,"br"),t()()(),e(66,"td",18)(67,"code",19),i(68,"string"),t()(),e(69,"td",12)(70,"em")(71,"strong"),i(72,"(opcional)"),t()(),e(73,"p"),i(74,'R\xF3tulo do bot\xE3o de "Ok".'),t()()()(),e(75,"h4",13)(76,"code",5),i(77,"PoDialogConfirmLiterals"),t()(),e(78,"div",2)(79,"p"),i(80,"Interface para defini\xE7\xE3o das literais usadas no servi\xE7o "),e(81,"code"),i(82,"po-dialog"),t(),i(83," para o tipo confirma\xE7\xE3o."),t()(),e(84,"h4",6),i(85,"Propriedades"),t(),e(86,"table",14)(87,"tr",15)(88,"th",16),i(89,"Nome"),t(),e(90,"th",16),i(91,"Tipo"),t(),e(92,"th",16),i(93,"Descri\xE7\xE3o"),t()(),e(94,"tr",8)(95,"td",17)(96,"div",10)(97,"span",11),i(98," cancel"),r(99,"br"),t()()(),e(100,"td",18)(101,"code",19),i(102,"string"),t()(),e(103,"td",12)(104,"em")(105,"strong"),i(106,"(opcional)"),t()(),e(107,"p"),i(108,'R\xF3tulo do bot\xE3o de "Cancelar".'),t()()(),e(109,"tr",8)(110,"td",17)(111,"div",10)(112,"span",11),i(113," confirm"),r(114,"br"),t()()(),e(115,"td",18)(116,"code",19),i(117,"string"),t()(),e(118,"td",12)(119,"em")(120,"strong"),i(121,"(opcional)"),t()(),e(122,"p"),i(123,'R\xF3tulo do bot\xE3o de "Confirmar".'),t()()()(),e(124,"h4",13)(125,"code",5),i(126,"PoDialogAlertOptions"),t()(),e(127,"div",2)(128,"p"),i(129,"Interface para o t\xEDtulo e a mensagem do servi\xE7o po-dialog. Interface com as propriedades da caixa de di\xE1logo de alerta do servi\xE7o po-dialog."),t()(),e(130,"h4",6),i(131,"Propriedades"),t(),e(132,"table",14)(133,"tr",15)(134,"th",16),i(135,"Nome"),t(),e(136,"th",16),i(137,"Tipo"),t(),e(138,"th",16),i(139,"Descri\xE7\xE3o"),t()(),e(140,"tr",8)(141,"td",17)(142,"div",10)(143,"span",11),i(144," literals"),r(145,"br"),t()()(),e(146,"td",18)(147,"code",20),i(148,"PoDialogAlertLiterals"),t()(),e(149,"td",12)(150,"em")(151,"strong"),i(152,"(opcional)"),t()(),e(153,"p"),i(154,"Objeto com as literais usadas no "),e(155,"code"),i(156,"po-dialog"),t(),i(157," do tipo alerta."),t(),e(158,"p"),i(159,"Para customizar o "),e(160,"em"),i(161,"label"),t(),i(162,", pode ser enviado o objeto da seguinte forma:"),t(),e(163,"pre")(164,"code",21),i(165,`this.poDialog.alert({
  literals: { ok: 'Close' },
  title: 'Info message',
  message: 'Message body dialog'
});`),t()(),e(166,"blockquote")(167,"p"),i(168,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),e(169,"em"),i(170,"browser"),t(),i(171," (pt, en, es)."),t()()()(),e(172,"tr",8)(173,"td",17)(174,"div",10)(175,"span",11),i(176," message"),r(177,"br"),t()()(),e(178,"td",18)(179,"code",19),i(180,"string"),t()(),e(181,"td",12)(182,"p"),i(183,"Mensagem da caixa de di\xE1logo."),t(),e(184,"blockquote")(185,"p"),i(186,"Pode-se informar um conte\xFAdo HTML na mensagem."),t()()()(),e(187,"tr",8)(188,"td",17)(189,"div",10)(190,"span",11),i(191," ok"),r(192,"br"),t()()(),e(193,"td",18)(194,"code",22),i(195,"Function"),t()(),e(196,"td",12)(197,"em")(198,"strong"),i(199,"(opcional)"),t()(),e(200,"p"),i(201,'A\xE7\xE3o executada ao fechar o alerta pelo bot\xE3o "Ok".'),t()()(),e(202,"tr",8)(203,"td",17)(204,"div",10)(205,"span",11),i(206," title"),r(207,"br"),t()()(),e(208,"td",18)(209,"code",19),i(210,"string"),t()(),e(211,"td",12)(212,"p"),i(213,"T\xEDtulo da caixa de di\xE1logo."),t()()()(),e(214,"h4",13)(215,"code",5),i(216,"PoDialogConfirmOptions"),t()(),e(217,"div",2)(218,"p"),i(219,"Interface para o t\xEDtulo e a mensagem do servi\xE7o po-dialog. Interface com as propriedades da caixa de di\xE1logo de confirma\xE7\xE3o do servi\xE7o po-dialog."),t()(),e(220,"h4",6),i(221,"Propriedades"),t(),e(222,"table",14)(223,"tr",15)(224,"th",16),i(225,"Nome"),t(),e(226,"th",16),i(227,"Tipo"),t(),e(228,"th",16),i(229,"Descri\xE7\xE3o"),t()(),e(230,"tr",8)(231,"td",17)(232,"div",10)(233,"span",11),i(234," cancel"),r(235,"br"),t()()(),e(236,"td",18)(237,"code",22),i(238,"Function"),t()(),e(239,"td",12)(240,"em")(241,"strong"),i(242,"(opcional)"),t()(),e(243,"p"),i(244,"A\xE7\xE3o de cancelamento da caixa de di\xE1logo."),t()()(),e(245,"tr",8)(246,"td",17)(247,"div",10)(248,"span",11),i(249," close"),r(250,"br"),t()()(),e(251,"td",18)(252,"code",22),i(253,"Function"),t()(),e(254,"td",12)(255,"em")(256,"strong"),i(257,"(opcional)"),t()(),e(258,"p"),i(259,"A\xE7\xE3o de fechamento da caixa de di\xE1logo."),t()()(),e(260,"tr",8)(261,"td",17)(262,"div",10)(263,"span",11),i(264," confirm"),r(265,"br"),t()()(),e(266,"td",18)(267,"code",22),i(268,"Function"),t()(),e(269,"td",12)(270,"p"),i(271,"A\xE7\xE3o de confirma\xE7\xE3o da caixa de di\xE1logo."),t()()(),e(272,"tr",8)(273,"td",17)(274,"div",10)(275,"span",11),i(276," literals"),r(277,"br"),t()()(),e(278,"td",18)(279,"code",23),i(280,"PoDialogConfirmLiterals"),t()(),e(281,"td",12)(282,"em")(283,"strong"),i(284,"(opcional)"),t()(),e(285,"p"),i(286,"Objeto com as literais usadas no "),e(287,"code"),i(288,"po-dialog"),t(),i(289," do tipo confirma\xE7\xE3o."),t(),e(290,"p"),i(291,"Para customizar os "),e(292,"em"),i(293,"labels"),t(),i(294,", pode ser enviado o objeto da seguinte forma:"),t(),e(295,"pre")(296,"code",21),i(297,`this.poDialog.confirm({
  literals: { cancel: 'No', confirm: 'Yes' },
  title: 'Confirm',
  message: 'Message body dialog',
  confirm: () => this.confirmOperation()
});`),t()(),e(298,"blockquote")(299,"p"),i(300,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),e(301,"em"),i(302,"browser"),t(),i(303," (pt, en, es)."),t()()()(),e(304,"tr",8)(305,"td",17)(306,"div",10)(307,"span",11),i(308," message"),r(309,"br"),t()()(),e(310,"td",18)(311,"code",19),i(312,"string"),t()(),e(313,"td",12)(314,"p"),i(315,"Mensagem da caixa de di\xE1logo."),t(),e(316,"blockquote")(317,"p"),i(318,"Pode-se informar um conte\xFAdo HTML na mensagem."),t()()()(),e(319,"tr",8)(320,"td",17)(321,"div",10)(322,"span",11),i(323," title"),r(324,"br"),t()()(),e(325,"td",18)(326,"code",19),i(327,"string"),t()(),e(328,"td",12)(329,"p"),i(330,"T\xEDtulo da caixa de di\xE1logo."),t()()()()())},encapsulation:2})}return a})();var se=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(E(J),E(K))};static \u0275cmp=f({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Dialog",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(l,n){l&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),r(3,"sample-po-dialog-doc"),t(),e(4,"po-tab",3),r(5,"sample-po-dialog-basic-view")(6,"sample-po-dialog-labs-view")(7,"sample-po-dialog-cancel-credit-card-view"),t()()()),l&2&&(u("p-actions",n.actions),s(2),u("p-active",n.activeTab.includes("doc")),s(2),u("p-hide",n.hidePoWebSample)("p-active",n.activeTab.includes("web")))},dependencies:[R,D,y,ne,ae,re,pe],encapsulation:2})}return a})();var ye=[{path:"",component:se}],de=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=L({type:a});static \u0275inj=k({imports:[j.forChild(ye),j]})}return a})();var Qe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=L({type:a});static \u0275inj=k({imports:[$,de]})}return a})();export{Qe as DocPoDialogModule};
