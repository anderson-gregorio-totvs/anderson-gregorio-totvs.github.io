import{o as w,p as ve}from"./chunk-KTHQ6LKY.js";import{Db as fe,Ea as ue,O as Z,Pa as ge,Q as be,Ua as Y,Xa as he,a as de,c as me,kb as G,q as ce,ra as V,wb as f,xb as v,y as F}from"./chunk-K2OBELIH.js";import{$a as j,Ab as M,Bc as H,Ca as _,Cc as oe,Dc as le,Ec as Q,Fc as re,Ha as N,Ia as L,Ja as A,Ka as t,La as e,M as O,Ma as s,Nb as ae,P as D,Qa as P,Ra as g,Sa as z,Sc as pe,T as c,U as b,Uc as se,Va as te,Wa as ne,Wc as ee,Za as I,_a as R,ab as k,bb as n,cb as ie,db as E,fb as C,gb as S,hb as T,ia as p,ja as K,kb as x,pa as h,qa as q,qb as X,sb as $,za as m}from"./chunk-TT2MSOYL.js";var Ce=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-tabs-basic"]],standalone:!1,decls:3,vars:0,consts:[["p-label","PO Tabs 1"],["p-label","PO Tabs 2"]],template:function(o,i){o&1&&(t(0,"po-tabs"),s(1,"po-tab",0)(2,"po-tab",1),e())},dependencies:[f,v],encapsulation:2})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-tabs-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(s(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Tabs Basic"),e(),t(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),s(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-tabs-basic/sample-po-tabs-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-tabs>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-tabs-basic/sample-po-tabs-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-tabs-basic',
  templateUrl: './sample-po-tabs-basic.component.html',
  standalone: false
})
export class SamplePoTabsBasicComponent {}
`),e()()()()(),t(21,"div",10),s(22,"sample-po-tabs-basic"),e(),s(23,"hr")),o&2&&(p(5),_("po-icon "+i.sampleCodeButtonIcon),p(),E(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",x(4,Fe,i.hideSampleCodeTabs)))},dependencies:[M,w,f,v,Ce],encapsulation:2})}return a})();var Oe=["poTab"];function qe(a,W){if(a&1){let r=P();t(0,"po-tab",9),g("p-click",function(){let i=c(r).$implicit,d=z();return b(d.onClick(i))}),t(1,"div",10),n(2),e()()}if(a&2){let r=W.$implicit,o=W.$index;m("p-active",r.active)("p-disabled",r.disabled)("p-hide",r.hide)("p-label",r.label),p(2),E("Tab Content ",o,"")}}var Te=(()=>{class a{poNotification=D(V);poTab;tabsFieldsForm=[{property:"label",divider:"TAB",required:!0,gridColumns:6},{property:"click",gridColumns:6},{property:"active",type:"boolean",gridColumns:4},{property:"disabled",type:"boolean",gridColumns:4},{property:"hide",type:"boolean",gridColumns:4}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];size="medium";tabs=[];properties=[];pageWidth;ngOnInit(){this.restore(),this.pageWidth=window.innerWidth}addTab(r){let o=Object.assign({},r);o.click=o.click?this.showClick.bind(this,o.click):void 0,this.tabs.push(o),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4)}onClick(r){r.click&&r.click()}restore(){this.size="medium",this.tabs=[],this.poTab.quantityTabsButton=0}showClick(r){this.poNotification.success(`Action clicked: ${r}`)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-tabs-labs"]],viewQuery:function(o,i){if(o&1&&I(Oe,7),o&2){let d;R(d=j())&&(i.poTab=d.first)}},standalone:!1,decls:12,vars:6,consts:[["poTab",""],["tabsForm",""],[3,"p-size"],[3,"p-active","p-disabled","p-hide","p-label"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Tab",1,"po-md-3",3,"p-click","p-disabled"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],[3,"p-click","p-active","p-disabled","p-hide","p-label"],[1,"po-font-subtitle"]],template:function(o,i){if(o&1){let d=P();t(0,"po-tabs",2,0),L(2,qe,3,5,"po-tab",3,N),e(),s(4,"po-dynamic-form",4,1),t(6,"div",5)(7,"po-button",6),g("p-click",function(){c(d);let l=k(5);return i.addTab(l.form.value),b(l.form.reset())}),e()(),s(8,"po-divider"),t(9,"po-radio-group",7),T("ngModelChange",function(l){return c(d),S(i.size,l)||(i.size=l),b(l)}),e(),t(10,"div",5)(11,"po-button",8),g("p-click",function(){return c(d),b(i.restore())}),e()()}if(o&2){let d=k(5);m("p-size",i.size),p(2),A(i.tabs),p(2),m("p-fields",i.tabsFieldsForm)("p-value",i.tabs),p(3),m("p-disabled",d.form.invalid),p(2),C("ngModel",i.size),m("p-options",i.sizeOptions)}},dependencies:[H,Q,F,de,he,Z,f,v],encapsulation:2})}return a})();var Le=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-tabs-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(s(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Tabs Labs"),e(),t(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),s(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-tabs-labs/sample-po-tabs-labs.component.html"),e(),t(13,"pre",7),n(14,`<po-tabs #poTab [p-size]="size">
  @for (tab of tabs; track tab; let i = $index) {
    <po-tab
      [p-active]="tab.active"
      [p-disabled]="tab.disabled"
      [p-hide]="tab.hide"
      [p-label]="tab.label"
      (p-click)="onClick(tab)"
    >
      <div class="po-font-subtitle">Tab Content { { i }}</div>
    </po-tab>
  }
</po-tabs>

<po-dynamic-form #tabsForm [p-fields]="tabsFieldsForm" [p-value]="tabs"> </po-dynamic-form>

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Add Tab"
    [p-disabled]="tabsForm.form.invalid"
    (p-click)="addTab(tabsForm.form.value); tabsForm.form.reset()"
  >
  </po-button>
</div>

<po-divider></po-divider>

<po-radio-group
  class="po-md-12"
  name="size"
  [(ngModel)]="size"
  p-columns="4"
  p-label="Size"
  p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
  [p-options]="sizeOptions"
>
</po-radio-group>

<div class="po-row">
  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-tabs-labs/sample-po-tabs-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';

import {
  PoDynamicFormField,
  PoNotificationService,
  PoRadioGroupOption,
  PoTab,
  PoTabsComponent
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tabs-labs',
  templateUrl: './sample-po-tabs-labs.component.html',
  standalone: false
})
export class SamplePoTabsLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  @ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

  tabsFieldsForm: Array<PoDynamicFormField> = [
    { property: 'label', divider: 'TAB', required: true, gridColumns: 6 },
    { property: 'click', gridColumns: 6 },
    { property: 'active', type: 'boolean', gridColumns: 4 },
    { property: 'disabled', type: 'boolean', gridColumns: 4 },
    { property: 'hide', type: 'boolean', gridColumns: 4 }
  ];

  public sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  size: string = 'medium';
  tabs: Array<PoTab> = [];
  properties: Array<string> = [];
  pageWidth: number;

  ngOnInit() {
    this.restore();
    this.pageWidth = window.innerWidth;
  }

  addTab(tab: PoTab) {
    const newTab = Object.assign({}, tab);

    newTab.click = newTab.click ? this.showClick.bind(this, newTab.click) : undefined;
    this.tabs.push(newTab);
    if (this.tabs.length <= 4) {
      this.poTab.setQuantityTabsButton(this.tabs.length);
    } else if (this.tabs.length > 4) {
      this.poTab.setQuantityTabsButton(4);
    }
  }

  onClick(tab: PoTab) {
    if (tab.click) {
      tab.click();
    }
  }

  restore() {
    this.size = 'medium';
    this.tabs = [];
    this.poTab.quantityTabsButton = 0;
  }

  private showClick(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),e()()()()(),t(21,"div",10),s(22,"sample-po-tabs-labs"),e(),s(23,"hr")),o&2&&(p(5),_("po-icon "+i.sampleCodeButtonIcon),p(),E(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",x(4,Le,i.hideSampleCodeTabs)))},dependencies:[M,w,f,v,Te],encapsulation:2})}return a})();var Ee=(()=>{class a{poNotificationService=D(V);card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:"Economy",value:1},{label:"Business",value:2},{label:"Comfort",value:3},{label:"First Class",value:4}];classTrainOptions=[{label:"Economy",value:1},{label:"Cabin",value:2},{label:"First Class",value:3}];flightCompanyOptions=[{label:"American Airlines",value:"american"},{label:"Avianca",value:"avianca"},{label:"Delta Airlines",value:"delta"},{label:"Emirates",value:"emirates"},{label:"Latam",value:"latam"}];trainCompanyOptions=[{label:"EuroStar",value:"eurostar"},{label:"OBB",value:"obb"},{label:"Renfe",value:"renfe"},{label:"TrenItalia",value:"trenitalia"}];transportationOptions=[{label:"Flights",value:"flight"},{label:"Trains",value:"train"}];bankBillet(){this.poNotificationService.warning("Bank billet sent to email")}isPaymentEnable(r,o,i){return r.valid&&this.transportation==="flight"&&i.valid||r.valid&&this.transportation==="train"&&o.valid}getTotalCost(){return this.transportation==="flight"&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation==="train"&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,"Fields are missing")}payment(){this.poNotificationService.success("Order confirmed")}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-tabs-travel"]],standalone:!1,decls:47,vars:26,consts:[["formTravel","ngForm"],["formTrain","ngForm"],["formFlight","ngForm"],["formCreditCard","ngForm"],["p-active","","p-label","Destination"],[1,"po-row"],["name","origin","p-label","Origin","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","departDate","p-label","Depart","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","returnDate","p-label","Return","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","transportation","p-label","Transportation","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Trains",3,"p-hide"],["name","trainCompany","p-label","Tran Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classTrain","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Flights",3,"p-hide"],["name","flightCompany","p-label","Flight Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classFlight","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Payment",3,"p-disabled"],["p-label","Total Cost",1,"po-md-6",3,"p-value"],["p-active","","p-label","Credit Card"],["name","cardName","p-clean","","p-label","Name on Card","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","card","p-clean","","p-label","Card Number","p-mask","9999 9999 9999 9999","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","expiryMonth","p-clean","","p-label","Expiry Month","p-mask","19","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","expiryYear","p-clean","","p-label","Year","p-mask","2999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","cvv","p-clean","","p-label","CVV","p-mask","9999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["p-label","Pay now",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Bank Billet"],["p-label","Generate Bank Billet",1,"po-md-4",3,"p-click","p-disabled"]],template:function(o,i){if(o&1){let d=P();t(0,"po-tabs")(1,"po-tab",4)(2,"form",null,0)(4,"div",5)(5,"po-input",6),T("ngModelChange",function(l){return c(d),S(i.origin,l)||(i.origin=l),b(l)}),e()(),t(6,"div",5)(7,"po-input",7),T("ngModelChange",function(l){return c(d),S(i.destination,l)||(i.destination=l),b(l)}),e()(),t(8,"div",5)(9,"po-datepicker",8),T("ngModelChange",function(l){return c(d),S(i.departDate,l)||(i.departDate=l),b(l)}),e(),t(10,"po-datepicker",9),T("ngModelChange",function(l){return c(d),S(i.returnDate,l)||(i.returnDate=l),b(l)}),e()(),t(11,"div",5)(12,"po-radio-group",10),T("ngModelChange",function(l){return c(d),S(i.transportation,l)||(i.transportation=l),b(l)}),e()()()(),t(13,"po-tab",11)(14,"form",null,1)(16,"div",5)(17,"po-select",12),T("ngModelChange",function(l){return c(d),S(i.trainCompany,l)||(i.trainCompany=l),b(l)}),e()(),t(18,"div",5)(19,"po-select",13),T("ngModelChange",function(l){return c(d),S(i.classTrain,l)||(i.classTrain=l),b(l)}),e()()()(),t(20,"po-tab",14)(21,"form",null,2)(23,"div",5)(24,"po-select",15),T("ngModelChange",function(l){return c(d),S(i.flightCompany,l)||(i.flightCompany=l),b(l)}),e()(),t(25,"div",5)(26,"po-select",16),T("ngModelChange",function(l){return c(d),S(i.classFlight,l)||(i.classFlight=l),b(l)}),e()()()(),t(27,"po-tab",17)(28,"div",5),s(29,"po-info",18),e(),t(30,"po-tabs")(31,"po-tab",19)(32,"form",null,3)(34,"div",5)(35,"po-input",20),T("ngModelChange",function(l){return c(d),S(i.cardName,l)||(i.cardName=l),b(l)}),e()(),t(36,"div",5)(37,"po-input",21),T("ngModelChange",function(l){return c(d),S(i.card,l)||(i.card=l),b(l)}),e()(),t(38,"div",5)(39,"po-input",22),T("ngModelChange",function(l){return c(d),S(i.expiryMonth,l)||(i.expiryMonth=l),b(l)}),e(),t(40,"po-input",23),T("ngModelChange",function(l){return c(d),S(i.expiryYear,l)||(i.expiryYear=l),b(l)}),e(),t(41,"po-input",24),T("ngModelChange",function(l){return c(d),S(i.cvv,l)||(i.cvv=l),b(l)}),e()(),t(42,"div",5)(43,"po-button",25),g("p-click",function(){return c(d),b(i.payment())}),e()()()(),t(44,"po-tab",26)(45,"div",5)(46,"po-button",27),g("p-click",function(){return c(d),b(i.bankBillet())}),e()()()()()()}if(o&2){let d=k(3),u=k(15),l=k(22),Be=k(33);p(5),C("ngModel",i.origin),p(2),C("ngModel",i.destination),p(2),C("ngModel",i.departDate),p(),C("ngModel",i.returnDate),m("p-min-date",i.departDate),p(2),C("ngModel",i.transportation),m("p-options",i.transportationOptions),p(),m("p-hide",i.transportation!=="train"),p(4),C("ngModel",i.trainCompany),m("p-options",i.trainCompanyOptions),p(2),C("ngModel",i.classTrain),m("p-options",i.classTrainOptions),p(),m("p-hide",i.transportation!=="flight"),p(4),C("ngModel",i.flightCompany),m("p-options",i.flightCompanyOptions),p(2),C("ngModel",i.classFlight),m("p-options",i.classFlightOptions),p(),m("p-disabled",i.isPaymentEnable(d,u,l)===!1),p(2),m("p-value",i.getTotalCost()),p(6),C("ngModel",i.cardName),p(2),C("ngModel",i.card),p(2),C("ngModel",i.expiryMonth),p(),C("ngModel",i.expiryYear),p(),C("ngModel",i.cvv),p(2),m("p-disabled",!Be.form.valid||!i.totalCost),p(3),m("p-disabled",!i.totalCost)}},dependencies:[re,H,oe,Q,le,F,Z,be,ue,ge,Y,f,v],encapsulation:2})}return a})();var Ie=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-tabs-travel-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(s(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Tabs - Travel"),e(),t(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),s(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-tabs-travel/sample-po-tabs-travel.component.html"),e(),t(13,"pre",7),n(14,`<po-tabs>
  <po-tab p-active p-label="Destination">
    <form #formTravel="ngForm">
      <div class="po-row">
        <po-input class="po-lg-12" name="origin" [(ngModel)]="origin" p-label="Origin" p-required> </po-input>
      </div>

      <div class="po-row">
        <po-input class="po-lg-12" name="destination" [(ngModel)]="destination" p-label="Destination" p-required>
        </po-input>
      </div>

      <div class="po-row">
        <po-datepicker class="po-md-6" name="departDate" [(ngModel)]="departDate" p-label="Depart" p-required>
        </po-datepicker>

        <po-datepicker
          class="po-md-6"
          name="returnDate"
          [(ngModel)]="returnDate"
          p-label="Return"
          p-required
          [p-min-date]="departDate"
        >
        </po-datepicker>
      </div>

      <div class="po-row">
        <po-radio-group
          class="po-lg-12"
          name="transportation"
          [(ngModel)]="transportation"
          p-label="Transportation"
          p-required
          [p-options]="transportationOptions"
        >
        </po-radio-group>
      </div>
    </form>
  </po-tab>
  <po-tab p-label="Trains" [p-hide]="transportation !== 'train'">
    <form #formTrain="ngForm">
      <div class="po-row">
        <po-select
          class="po-lg-12"
          name="trainCompany"
          [(ngModel)]="trainCompany"
          p-label="Tran Company"
          p-required
          [p-options]="trainCompanyOptions"
        >
        </po-select>
      </div>

      <div class="po-row">
        <po-select
          class="po-lg-12"
          name="classTrain"
          [(ngModel)]="classTrain"
          p-label="Class"
          p-required
          [p-options]="classTrainOptions"
        >
        </po-select>
      </div>
    </form>
  </po-tab>
  <po-tab p-label="Flights" [p-hide]="transportation !== 'flight'">
    <form #formFlight="ngForm">
      <div class="po-row">
        <po-select
          class="po-lg-12"
          name="flightCompany"
          [(ngModel)]="flightCompany"
          p-label="Flight Company"
          p-required
          [p-options]="flightCompanyOptions"
        >
        </po-select>
      </div>

      <div class="po-row">
        <po-select
          class="po-lg-12"
          name="classFlight"
          [(ngModel)]="classFlight"
          p-label="Class"
          p-required
          [p-options]="classFlightOptions"
        >
        </po-select>
      </div>
    </form>
  </po-tab>
  <po-tab p-label="Payment" [p-disabled]="isPaymentEnable(formTravel, formTrain, formFlight) === false">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Total Cost" [p-value]="getTotalCost()"> </po-info>
    </div>

    <po-tabs>
      <po-tab p-active p-label="Credit Card">
        <form #formCreditCard="ngForm">
          <div class="po-row">
            <po-input
              class="po-md-8 po-lg-6"
              name="cardName"
              [(ngModel)]="cardName"
              p-clean
              p-label="Name on Card"
              p-required
            >
            </po-input>
          </div>

          <div class="po-row">
            <po-input
              class="po-md-8 po-lg-6"
              name="card"
              [(ngModel)]="card"
              p-clean
              p-label="Card Number"
              p-mask="9999 9999 9999 9999"
              p-required
            >
            </po-input>
          </div>

          <div class="po-row">
            <po-input
              class="po-md-2"
              name="expiryMonth"
              [(ngModel)]="expiryMonth"
              p-clean
              p-label="Expiry Month"
              p-mask="19"
              p-required
            >
            </po-input>

            <po-input
              class="po-md-2"
              name="expiryYear"
              [(ngModel)]="expiryYear"
              p-clean
              p-label="Year"
              p-mask="2999"
              p-required
            >
            </po-input>

            <po-input class="po-md-2" name="cvv" [(ngModel)]="cvv" p-clean p-label="CVV" p-mask="9999" p-required>
            </po-input>
          </div>

          <div class="po-row">
            <po-button
              class="po-md-3"
              p-label="Pay now"
              [p-disabled]="!formCreditCard.form.valid || !totalCost"
              (p-click)="payment()"
            >
            </po-button>
          </div>
        </form>
      </po-tab>

      <po-tab p-label="Bank Billet">
        <div class="po-row">
          <po-button class="po-md-4" p-label="Generate Bank Billet" [p-disabled]="!totalCost" (p-click)="bankBillet()">
          </po-button>
        </div>
      </po-tab>
    </po-tabs>
  </po-tab>
</po-tabs>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-tabs-travel/sample-po-tabs-travel.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, inject } from '@angular/core';

import { PoNotificationService, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tabs-travel',
  templateUrl: './sample-po-tabs-travel.component.html',
  standalone: false
})
export class SamplePoTabsTravelComponent {
  private poNotificationService = inject(PoNotificationService);

  card: number;
  cardName: string;
  classFlight: number;
  classTrain: number;
  cvv: number;
  departDate: Date;
  destination: string;
  expiryMonth: number;
  expiryYear: number;
  flightCompany: string;
  origin: string;
  returnDate: Date;
  totalCost: number;
  trainCompany: string;
  transportation: string;

  public readonly classFlightOptions: Array<PoSelectOption> = [
    { label: 'Economy', value: 1 },
    { label: 'Business', value: 2 },
    { label: 'Comfort', value: 3 },
    { label: 'First Class', value: 4 }
  ];

  public readonly classTrainOptions: Array<PoSelectOption> = [
    { label: 'Economy', value: 1 },
    { label: 'Cabin', value: 2 },
    { label: 'First Class', value: 3 }
  ];

  public readonly flightCompanyOptions: Array<PoSelectOption> = [
    { label: 'American Airlines', value: 'american' },
    { label: 'Avianca', value: 'avianca' },
    { label: 'Delta Airlines', value: 'delta' },
    { label: 'Emirates', value: 'emirates' },
    { label: 'Latam', value: 'latam' }
  ];

  public readonly trainCompanyOptions: Array<PoSelectOption> = [
    { label: 'EuroStar', value: 'eurostar' },
    { label: 'OBB', value: 'obb' },
    { label: 'Renfe', value: 'renfe' },
    { label: 'TrenItalia', value: 'trenitalia' }
  ];

  public readonly transportationOptions: Array<PoRadioGroupOption> = [
    { label: 'Flights', value: 'flight' },
    { label: 'Trains', value: 'train' }
  ];

  bankBillet() {
    this.poNotificationService.warning('Bank billet sent to email');
  }

  isPaymentEnable(formTravel, formTrain, formFlight) {
    return (
      (formTravel.valid && this.transportation === 'flight' && formFlight.valid) ||
      (formTravel.valid && this.transportation === 'train' && formTrain.valid)
    );
  }

  getTotalCost() {
    if (this.transportation === 'flight' && this.classFlight) {
      this.totalCost = 800 * this.classFlight;
      return \`$\${this.totalCost}\`;
    }

    if (this.transportation === 'train' && this.classTrain) {
      this.totalCost = 300 * this.classTrain;
      return \`$\${this.totalCost}\`;
    }

    this.totalCost = undefined;
    return 'Fields are missing';
  }

  payment() {
    this.poNotificationService.success('Order confirmed');
  }
}
`),e()()()()(),t(21,"div",10),s(22,"sample-po-tabs-travel"),e(),s(23,"hr")),o&2&&(p(5),_("po-icon "+i.sampleCodeButtonIcon),p(),E(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",x(4,Ie,i.hideSampleCodeTabs)))},dependencies:[M,w,f,v,Ee],encapsulation:2})}return a})();var je=["poTab"];function He(a,W){if(a&1){let r=P();t(0,"po-tab",2),X(1,"date"),t(2,"div",7)(3,"div",5)(4,"div",4)(5,"div",8)(6,"po-widget")(7,"div",4)(8,"div",9),s(9,"po-avatar",10),e(),t(10,"div",11)(11,"div",12),s(12,"po-info",13),e(),t(13,"div",12),s(14,"po-info",14),e(),t(15,"div",12),s(16,"po-info",15),e()()()()(),t(17,"div",16)(18,"po-widget",17)(19,"div",18),n(20,"TFace Conference Week"),e(),t(21,"div",19),n(22,"From 21th September until 26th setember 2018"),e(),s(23,"hr"),t(24,"div",4)(25,"div",20)(26,"span",21),s(27,"po-icon",22),e(),t(28,"span",23),n(29),X(30,"date"),e()(),t(31,"div",20)(32,"span",21),s(33,"po-icon",24),e(),t(34,"span",25),n(35,"Av. Braz Leme, 1000, Santana"),e()()(),t(36,"div",26)(37,"po-button",27),g("p-click",function(){let i=c(r).$implicit,d=z();return b(d.confirmSubscription(i))}),e()()()()()()()()}if(a&2){let r=W.$implicit;te("p-label",$(1,9,r.createdDate,"MMM d")),m("p-active",r.id==="1")("p-hide",r.subscribe),p(9),ne("p-src","assets/graphics/",r.photo,""),p(3),m("p-value",r.name),p(2),m("p-value",r.email),p(2),m("p-value",r.description),p(13),ie($(30,12,r.createdDate,"MM/dd/yyyy"))}}var _e=(()=>{class a{poNotification=D(V);poTab;disableRestoreBtn=!0;speakers;pageWidth;ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3)}cancelSubscription(){this.disableRestoreBtn=!0,this.speakers.forEach(r=>r.subscribe=!1)}confirmSubscription(r){this.disableRestoreBtn=!1,r.subscribe=!0,this.poNotification.success("Registration completed successfully. See you soon!")}getSpeakers(){return[{id:"1",name:"Peter Benjamin Parker",email:"peter.parker@po-ui.com.br",photo:"avatar1.png",description:"Nodejs developer with 4 years experience",createdDate:"2018-09-21T20:21:06.990Z",subscribe:"false"},{id:"2",name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png",description:"Angular developer with 2 years experience",createdDate:"2018-09-22T20:21:06.990Z",subscribe:"false"},{id:"3",name:"Anthony Stark",email:"anthony.stark@po-ui.com.br",photo:"avatar3.png",description:"Javascript developer with 8 years experience",createdDate:"2018-09-23T20:21:06.990Z",subscribe:"false"},{id:"4",name:"Carol Danvers",email:"carol.danvers@po-ui.com.br",photo:"avatar4.png",description:"Full stack developer with 2 years experience",createdDate:"2018-09-24T20:21:06.990Z",subscribe:"false"},{id:"5",name:"Wagner Dantas",email:"wagner.dantas@po-ui.com.br",photo:"avatar5.png",description:"Front-end Engineer developer with 8 years experience",createdDate:"2018-09-25T20:21:06.990Z",subscribe:"false"},{id:"6",name:"Kaiam Alexandre",email:"kaiam.alexandre@po-ui.com.br",photo:"avatar6.png",description:"Javascript developer with 12 years experience",createdDate:"2018-09-26T20:21:06.990Z",subscribe:"false"}]}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-tabs-business-conf"]],viewQuery:function(o,i){if(o&1&&I(je,7),o&2){let d;R(d=j())&&(i.poTab=d.first)}},standalone:!1,decls:10,vars:1,consts:[["poTab",""],["p-title","Check the speaker's list"],[3,"p-label","p-active","p-hide"],[1,"po-offset-lg-1","po-offset-xl-1","po-lg-10","po-mt-0"],[1,"po-row"],[1,"po-offset-lg-1","po-offset-xl-1","po-lg-10"],["p-label","Cancel Subscription",1,"po-offset-lg-8","po-offset-xl-8","po-lg-4",3,"p-click","p-disabled"],[1,"po-row","po-mt-5"],[1,"po-lg-8","po-mb-2"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Speaker",3,"p-value"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-label","Description",1,"po-mb-5",3,"p-value"],[1,"po-lg-4","po-mb-2"],["p-title","Subscription"],[1,"po-font-subtitle","po-mb-2"],[1,"po-font-text-bold","po-mb-5"],[1,"po-md-6","po-lg-12"],[1,"po-mr-1","po-font-subtitle"],["p-icon","po-icon an an-calendar-dots"],[1,"po-font-text","po-mb-2"],["p-icon","po-icon an an-map-pin"],[1,"po-font-text"],[1,"po-mt-5"],["p-label","Subscription",1,"po-mt-5",3,"p-click"]],template:function(o,i){if(o&1){let d=P();t(0,"po-page-default",1)(1,"po-tabs",null,0),L(3,He,38,15,"po-tab",2,N),e(),s(5,"hr",3),t(6,"div",4)(7,"div",5)(8,"div",4)(9,"po-button",6),g("p-click",function(){return c(d),b(i.cancelSubscription())}),e()()()()()}o&2&&(p(3),A(i.speakers),p(6),m("p-disabled",i.disableRestoreBtn))},dependencies:[ce,F,me,Y,G,f,v,fe,ae],encapsulation:2})}return a})();var Ze=a=>({"docs-sample-code-tabs":a}),Pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-tabs-business-conf-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(s(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Tabs - Business Conference"),e(),t(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),s(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.html"),e(),t(13,"pre",7),n(14,`<po-page-default p-title="Check the speaker's list">
  <po-tabs #poTab>
    @for (speaker of speakers; track speaker) {
      <po-tab
        p-label="{ { speaker.createdDate | date: 'MMM d' }}"
        [p-active]="speaker.id === '1'"
        [p-hide]="speaker.subscribe"
      >
        <div class="po-row po-mt-5">
          <div class="po-offset-lg-1 po-offset-xl-1 po-lg-10">
            <div class="po-row">
              <div class="po-lg-8 po-mb-2">
                <po-widget>
                  <div class="po-row">
                    <div class="po-md-5 po-lg-4">
                      <po-avatar p-size="xl" p-src="assets/graphics/{ { speaker.photo }}"></po-avatar>
                    </div>
                    <div class="po-md-7 po-lg-8">
                      <div class="po-mb-2">
                        <po-info p-label="Speaker" [p-value]="speaker.name"></po-info>
                      </div>
                      <div class="po-mb-2">
                        <po-info class="po-mt-5" p-label="Email" [p-value]="speaker.email"> </po-info>
                      </div>
                      <div class="po-mb-2">
                        <po-info class="po-mb-5" p-label="Description" [p-value]="speaker.description"> </po-info>
                      </div>
                    </div>
                  </div>
                </po-widget>
              </div>
              <div class="po-lg-4 po-mb-2">
                <po-widget p-title="Subscription">
                  <div class="po-font-subtitle po-mb-2">TFace Conference Week</div>
                  <div class="po-font-text-bold po-mb-5">From 21th September until 26th setember 2018</div>
                  <hr />
                  <div class="po-row">
                    <div class="po-md-6 po-lg-12">
                      <span class="po-mr-1 po-font-subtitle">
                        <po-icon p-icon="po-icon an an-calendar-dots"></po-icon>
                      </span>
                      <span class="po-font-text po-mb-2">{ { speaker.createdDate | date: 'MM/dd/yyyy' }}</span>
                    </div>
                    <div class="po-md-6 po-lg-12">
                      <span class="po-mr-1 po-font-subtitle">
                        <po-icon p-icon="po-icon an an-map-pin"></po-icon>
                      </span>
                      <span class="po-font-text">Av. Braz Leme, 1000, Santana</span>
                    </div>
                  </div>
                  <div class="po-mt-5">
                    <po-button class="po-mt-5" p-label="Subscription" (p-click)="confirmSubscription(speaker)">
                    </po-button>
                  </div>
                </po-widget>
              </div>
            </div>
          </div>
        </div>
      </po-tab>
    }
  </po-tabs>

  <hr class="po-offset-lg-1 po-offset-xl-1 po-lg-10 po-mt-0" />

  <div class="po-row">
    <div class="po-offset-lg-1 po-offset-xl-1 po-lg-10">
      <div class="po-row">
        <po-button
          class="po-offset-lg-8 po-offset-xl-8 po-lg-4"
          p-label="Cancel Subscription"
          [p-disabled]="disableRestoreBtn"
          (p-click)="cancelSubscription()"
        >
        </po-button>
      </div>
    </div>
  </div>
</po-page-default>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';

import { PoNotificationService, PoTabsComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tabs-business-conf',
  templateUrl: './sample-po-tabs-business-conf.component.html',
  standalone: false
})
export class SamplePoTabsBusinessConfComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  @ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

  disableRestoreBtn: boolean = true;
  speakers: Array<any>;
  pageWidth: number;

  ngOnInit() {
    this.speakers = this.getSpeakers();
    this.pageWidth = window.innerWidth;
    if (this.pageWidth <= 600) {
      this.poTab.setQuantityTabsButton(3);
    }
  }

  cancelSubscription() {
    this.disableRestoreBtn = true;
    this.speakers.forEach(item => (item.subscribe = false));
  }

  confirmSubscription(speaker) {
    this.disableRestoreBtn = false;

    speaker.subscribe = true;

    this.poNotification.success('Registration completed successfully. See you soon!');
  }

  private getSpeakers() {
    return [
      {
        'id': '1',
        'name': 'Peter Benjamin Parker',
        'email': 'peter.parker@po-ui.com.br',
        'photo': 'avatar1.png',
        'description': 'Nodejs developer with 4 years experience',
        'createdDate': '2018-09-21T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '2',
        'name': 'Natasha Romanova',
        'email': 'natasha.romanova@po-ui.com.br',
        'photo': 'avatar2.png',
        'description': 'Angular developer with 2 years experience',
        'createdDate': '2018-09-22T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '3',
        'name': 'Anthony Stark',
        'email': 'anthony.stark@po-ui.com.br',
        'photo': 'avatar3.png',
        'description': 'Javascript developer with 8 years experience',
        'createdDate': '2018-09-23T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '4',
        'name': 'Carol Danvers',
        'email': 'carol.danvers@po-ui.com.br',
        'photo': 'avatar4.png',
        'description': 'Full stack developer with 2 years experience',
        'createdDate': '2018-09-24T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '5',
        'name': 'Wagner Dantas',
        'email': 'wagner.dantas@po-ui.com.br',
        'photo': 'avatar5.png',
        'description': 'Front-end Engineer developer with 8 years experience',
        'createdDate': '2018-09-25T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '6',
        'name': 'Kaiam Alexandre',
        'email': 'kaiam.alexandre@po-ui.com.br',
        'photo': 'avatar6.png',
        'description': 'Javascript developer with 12 years experience',
        'createdDate': '2018-09-26T20:21:06.990Z',
        'subscribe': 'false'
      }
    ];
  }
}
`),e()()()()(),t(21,"div",10),s(22,"sample-po-tabs-business-conf"),e(),s(23,"hr")),o&2&&(p(5),_("po-icon "+i.sampleCodeButtonIcon),p(),E(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",x(4,Ze,i.hideSampleCodeTabs)))},dependencies:[M,w,f,v,_e],encapsulation:2})}return a})();var ke=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-tabs-doc"]],standalone:!1,decls:361,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],["href","/documentation/po-tab"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(o,i){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoTabsModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,"M\xF3dulo do componente po-tabs"),e()(),t(7,"h3",3),n(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),n(11,"PoTabsComponent"),e()(),t(12,"div",2)(13,"h4"),n(14,"Tokens customiz\xE1veis"),e(),t(15,"p"),n(16,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(17,"blockquote")(18,"p"),n(19,"Para maiores informa\xE7\xF5es, acesse o guia "),t(20,"a",6),n(21,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(22,"."),e()(),t(23,"table")(24,"thead")(25,"tr")(26,"th"),n(27,"Propriedade"),e(),t(28,"th"),n(29,"Descri\xE7\xE3o"),e(),t(30,"th"),n(31,"Valor Padr\xE3o"),e()()(),t(32,"tbody")(33,"tr")(34,"td")(35,"strong"),n(36,"Default Values"),e()(),s(37,"td")(38,"td"),e(),t(39,"tr")(40,"td")(41,"code"),n(42,"--background"),e()(),t(43,"td"),n(44,"Cor de background"),e(),t(45,"td")(46,"code"),n(47,"var(--color-transparent)"),e()()(),t(48,"tr")(49,"td")(50,"code"),n(51,"--background-item-default"),e()(),t(52,"td"),n(53,"Cor de background do item padr\xE3o"),e(),t(54,"td")(55,"code"),n(56,"var(--color-transparent)"),e()()(),t(57,"tr")(58,"td")(59,"code"),n(60,"--border-radius"),e()(),t(61,"td"),n(62,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),t(63,"td")(64,"code"),n(65,"var(--border-radius-md)"),e()()(),t(66,"tr")(67,"td")(68,"code"),n(69,"--color"),e()(),t(70,"td"),n(71,"Cor da fonte padr\xE3o"),e(),t(72,"td")(73,"code"),n(74,"var(--color-action-default)"),e()()(),t(75,"tr")(76,"td")(77,"code"),n(78,"--color-baseline"),e()(),t(79,"td"),n(80,"Cor para box-shadow"),e(),t(81,"td")(82,"code"),n(83,"var(--color-neutral-light-20)"),e()()(),t(84,"tr")(85,"td")(86,"code"),n(87,"--font-family"),e()(),t(88,"td"),n(89,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(90,"td")(91,"code"),n(92,"var(--font-family-theme)"),e()()(),t(93,"tr")(94,"td")(95,"code"),n(96,"--font-size"),e()(),t(97,"td"),n(98,"Tamanho da fonte"),e(),t(99,"td")(100,"code"),n(101,"var(--font-size-default)"),e()()(),t(102,"tr")(103,"td")(104,"code"),n(105,"--font-weight"),e()(),t(106,"td"),n(107,"Peso da fonte"),e(),t(108,"td")(109,"code"),n(110,"var(--font-weight-bold)"),e()()(),t(111,"tr")(112,"td")(113,"code"),n(114,"--margin-tabs-container-left"),e()(),t(115,"td"),n(116,"Margem lateral esquerda do componente quando usado dentro de um "),t(117,"code"),n(118,"page-default"),e()(),t(119,"td")(120,"code"),n(121,"var(--spacing-md)"),e()()(),t(122,"tr")(123,"td")(124,"code"),n(125,"--margin-tabs-container-right"),e()(),t(126,"td"),n(127,"Margem lateral direita do componente quando usado dentro de um "),t(128,"code"),n(129,"page-default"),e()(),t(130,"td")(131,"code"),n(132,"-16px"),e()()(),t(133,"tr")(134,"td")(135,"code"),n(136,"--padding-tabs-header"),e()(),t(137,"td"),n(138,"Padding do valor lateral das abas"),e(),t(139,"td")(140,"code"),n(141,"var(--spacing-sm)"),e()()(),t(142,"tr")(143,"td")(144,"code"),n(145,"--margin-tabs-first-child"),e()(),t(146,"td"),n(147,"Margem lateral da primeira aba"),e(),t(148,"td")(149,"code"),n(150,"var(--spacing-md)"),e()()(),t(151,"tr")(152,"td")(153,"code"),n(154,"--margin-tabs-last-child"),e()(),t(155,"td"),n(156,"Margem lateral da ultima aba"),e(),t(157,"td")(158,"code"),n(159,"var(--spacing-md)"),e()()(),t(160,"tr")(161,"td")(162,"strong"),n(163,"Disabled"),e()(),s(164,"td")(165,"td"),e(),t(166,"tr")(167,"td")(168,"code"),n(169,"--color-disabled"),e()(),t(170,"td"),n(171,"Cor da fonte no estado disabilitado"),e(),t(172,"td")(173,"code"),n(174,"var(--color-action-disabled)"),e()()(),t(175,"tr")(176,"td")(177,"code"),n(178,"--background-item-disabled"),e(),n(179,"\xA0"),e(),t(180,"td"),n(181,"Cor de background do item desabilitado"),e(),t(182,"td")(183,"code"),n(184,"var(--color-neutral-light-10)"),e()()(),t(185,"tr")(186,"td")(187,"strong"),n(188,"Focused"),e()(),s(189,"td")(190,"td"),e(),t(191,"tr")(192,"td")(193,"code"),n(194,"--outline-color-focused"),e()(),t(195,"td"),n(196,"Cor do outline do estado de focus"),e(),t(197,"td")(198,"code"),n(199,"var(--color-action-focus)"),e()()(),t(200,"tr")(201,"td")(202,"strong"),n(203,"Hover"),e()(),s(204,"td")(205,"td"),e(),t(206,"tr")(207,"td")(208,"code"),n(209,"--color-hover"),e()(),t(210,"td"),n(211,"Cor principal no estado hover"),e(),t(212,"td")(213,"code"),n(214,"var(--color-brand-01-darkest)"),e()()(),t(215,"tr")(216,"td")(217,"code"),n(218,"--background-item-hover"),e()(),t(219,"td"),n(220,"Cor de background no estado de hover"),e(),t(221,"td")(222,"code"),n(223,"var(--color-brand-01-lightest)"),e()()(),t(224,"tr")(225,"td")(226,"strong"),n(227,"Selected"),e()(),s(228,"td")(229,"td"),e(),t(230,"tr")(231,"td")(232,"code"),n(233,"--background-item-selected"),e()(),t(234,"td"),n(235,"Cor de background do item selecionado"),e(),t(236,"td")(237,"code"),n(238,"var(--color-brand-01-lightest)"),e()()()()(),t(239,"p"),s(240,"br"),n(241," O componente "),t(242,"code"),n(243,"po-tabs"),e(),n(244," \xE9 respons\xE1vel por agrupar "),t(245,"a",7),n(246,"abas"),e(),n(247,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),e(),t(248,"p"),n(249,"O componente exibir\xE1 as abas enquanto houver espa\xE7o na tela, caso a aba ultrapasse o limite da tela a mesma ser\xE1 agrupada em um dropdown."),e(),t(250,"blockquote")(251,"p"),n(252,"As abas que estiverem agrupadas ser\xE3o dispostas numa cascata suspensa que ser\xE1 exibida ao clicar no bot\xE3o."),e()(),t(253,"p"),n(254,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),e(),t(255,"h4"),n(256,"Boas pr\xE1ticas"),e(),t(257,"ul")(258,"li"),n(259,"Evite utilizar um "),t(260,"code"),n(261,"po-tabs"),e(),n(262," dentro de outro "),t(263,"code"),n(264,"po-tabs"),e(),n(265,";"),e(),t(266,"li"),n(267,"Evite utilizar uma quantidade excessiva de abas, pois ir\xE1 gerar um "),t(268,"em"),n(269,"scroll"),e(),n(270," muito longo no "),t(271,"code"),n(272,"dropdown"),e(),n(273,";"),e(),t(274,"li"),n(275,"Evite "),t(276,"code"),n(277,"labels"),e(),n(278," extensos para as "),t(279,"code"),n(280,"tabs"),e(),n(281," pois podem quebrar seu "),t(282,"em"),n(283,"layout"),e(),n(284,", use "),t(285,"code"),n(286,"labels"),e(),n(287," diretas, curtas e intuitivas."),e()()(),t(288,"div",8)(289,"h4",9),n(290,"Seletor"),e(),t(291,"pre",10),n(292,`<po-tabs
    p-size="string" >
</po-tabs>
`),e()(),t(293,"h4",11),n(294,"Propriedades"),e(),t(295,"table",12)(296,"tr",13)(297,"th",14),n(298,"Nome"),e(),t(299,"th",14),n(300,"Tipo"),e(),t(301,"th",14),n(302,"Padr\xE3o"),e(),t(303,"th",14),n(304,"Descri\xE7\xE3o"),e()(),t(305,"tr",15)(306,"td",16)(307,"div",17)(308,"span",18),n(309," p-size"),s(310,"br"),e()()(),t(311,"td",19)(312,"code",20),n(313,"string"),e()(),t(314,"td",21)(315,"p")(316,"code"),n(317,"medium"),e()()(),t(318,"td",22)(319,"em")(320,"strong"),n(321,"(opcional)"),e()(),t(322,"p"),n(323,"Define o tamanho do componente:"),e(),t(324,"ul")(325,"li")(326,"code"),n(327,"small"),e(),n(328,": altura dos tabs como 32px (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(329,"li")(330,"code"),n(331,"medium"),e(),n(332,": altura dos tabs como 44px."),e()(),t(333,"blockquote")(334,"p"),n(335,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(336,"code"),n(337,"medium"),e(),n(338,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(339,"a",23),n(340,"po-theme"),e(),n(341,"."),e()()()()(),t(342,"h3",11),n(343,"M\xE9todos"),e(),t(344,"table",24)(345,"tr",15)(346,"th",25)(347,"div",17)(348,"h4")(349,"span",18),n(350," setQuantityTabsButton "),e()()()()(),t(351,"tr",22)(352,"td",22)(353,"p"),n(354,"Fun\xE7\xE3o que atribui o n\xFAmero de tabs fora do dropdown."),e(),t(355,"p"),n(356,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),t(357,"pre")(358,"code"),n(359,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

changeQuantityTabs() {
  this.poTab.setQuantityTabsButton(1); //N\xFAmero de tabs
}
`),e()()()()(),s(360,"br"),e())},dependencies:[w],encapsulation:2})}return a})();var xe=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||a)(K(pe),K(se))};static \u0275cmp=h({type:a,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Tabs",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return i.changeTab("doc")}),s(3,"sample-po-tabs-doc"),e(),t(4,"po-tab",3),g("p-click",function(){return i.changeTab("web")}),s(5,"sample-po-tabs-basic-view")(6,"sample-po-tabs-labs-view")(7,"sample-po-tabs-travel-view")(8,"sample-po-tabs-business-conf-view"),e()()()),o&2&&(m("p-actions",i.actions),p(2),m("p-active",i.activeTab==="doc"),p(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[G,f,v,Se,ye,we,Pe,ke],encapsulation:2})}return a})();var Je=[{path:"",component:xe}],Me=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=q({type:a});static \u0275inj=O({imports:[ee.forChild(Je),ee]})}return a})();var Wt=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=q({type:a});static \u0275inj=O({imports:[ve,Me]})}return a})();export{Wt as DocPoTabsModule};
