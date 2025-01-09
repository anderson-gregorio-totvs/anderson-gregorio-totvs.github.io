import{$ as q,$a as F,$b as pe,$d as ue,Bc as se,Ca as A,Cd as Q,Da as R,Dc as de,Ea as z,F as c,Fa as M,G as b,Ga as n,Ha as X,Ia as w,Ka as C,La as T,Lb as ee,Ma as S,Mb as te,Nb as ne,Ob as ie,Od as j,Pa as x,Pb as oe,T as r,U as _,Ua as Y,Wa as G,Wb as ae,Xd as h,Yb as le,Yd as v,Zb as J,_ as g,ab as H,ad as V,ea as L,gc as re,ha as m,jb as $,ka as P,md as me,na as t,oa as e,oc as D,od as ce,pa as s,re as E,se as ge,ta as k,ua as f,va as I,y as N,ya as U,yd as be,za as K}from"./chunk-PI3TYJHE.js";var fe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=g({type:o,selectors:[["sample-po-tabs-basic"]],standalone:!1,decls:3,vars:0,consts:[["p-label","PO Tabs 1"],["p-label","PO Tabs 2"]],template:function(a,i){a&1&&(t(0,"po-tabs"),s(1,"po-tab",0)(2,"po-tab",1),e())},dependencies:[h,v],encapsulation:2})}return o})();var xe=o=>({"docs-sample-code-tabs":o}),he=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=g({type:o,selectors:[["sample-po-tabs-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(s(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Tabs Basic"),e(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),s(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-tabs-basic/sample-po-tabs-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-tabs>
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
`),e()()()()(),t(21,"div",10),s(22,"sample-po-tabs-basic"),e(),s(23,"hr")),a&2&&(r(5),P("po-icon "+i.sampleCodeButtonIcon),r(),w(" ",i.sampleCodeButtonLabel,""),r(),m("ngClass",x(4,xe,i.hideSampleCodeTabs)))},dependencies:[F,E,h,v,fe],encapsulation:2})}return o})();var Be=["poTab"];function De(o,W){if(o&1){let l=k();t(0,"po-tab",8),f("p-click",function(){let i=c(l).$implicit,d=I();return b(d.onClick(i))}),t(1,"div",9),n(2),e()()}if(o&2){let l=W.$implicit,a=W.index;m("p-active",l.active)("p-disabled",l.disabled)("p-hide",l.hide)("p-label",l.label),r(2),w("Tab Content ",a,"")}}var ve=(()=>{class o{poNotification;poTab;tabsFieldsForm=[{property:"label",divider:"TABS",required:!0,gridColumns:6},{property:"click",gridColumns:6},{property:"active",type:"boolean",gridColumns:4},{property:"disabled",type:"boolean",gridColumns:4},{property:"hide",type:"boolean",gridColumns:4}];propertiesFieldsForm=[{property:"properties",divider:"PROPERTIES",optionsMulti:!0,gridColumns:4}];tabs=[];properties=[];pageWidth;constructor(l){this.poNotification=l}ngOnInit(){this.restore(),this.pageWidth=window.innerWidth}addTab(l){let a=Object.assign({},l);a.click=a.click?this.showClick.bind(this,a.click):void 0,this.tabs.push(a),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4)}onClick(l){l.click&&l.click()}restore(){this.tabs=[],this.properties=[],this.poTab.quantityTabsButton=0}showClick(l){this.poNotification.success(`Action clicked: ${l}`)}static \u0275fac=function(a){return new(a||o)(_(V))};static \u0275cmp=g({type:o,selectors:[["sample-po-tabs-labs"]],viewQuery:function(a,i){if(a&1&&A(Be,7),a&2){let d;R(d=z())&&(i.poTab=d.first)}},standalone:!1,decls:11,vars:6,consts:[["poTab",""],["tabsForm",""],["propertiesForm",""],[3,"p-active","p-disabled","p-hide","p-label","p-click",4,"ngFor","ngForOf"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Tab",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],[3,"p-click","p-active","p-disabled","p-hide","p-label"],[1,"po-font-subtitle"]],template:function(a,i){if(a&1){let d=k();t(0,"po-tabs",null,0),L(2,De,3,5,"po-tab",3),e(),s(3,"po-dynamic-form",4,1),t(5,"div",5)(6,"po-button",6),f("p-click",function(){c(d);let p=M(4);return i.addTab(p.form.value),b(p.form.reset())}),e()(),s(7,"po-dynamic-form",4,2),t(9,"div",5)(10,"po-button",7),f("p-click",function(){return c(d),b(i.restore())}),e()()}if(a&2){let d=M(4);r(2),m("ngForOf",i.tabs),r(),m("p-fields",i.tabsFieldsForm)("p-value",i.tabs),r(3),m("p-disabled",d.form.invalid),r(),m("p-fields",i.propertiesFieldsForm)("p-value",i.properties)}},dependencies:[H,D,ce,h,v],encapsulation:2})}return o})();var Oe=o=>({"docs-sample-code-tabs":o}),Ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=g({type:o,selectors:[["sample-po-tabs-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(s(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Tabs Labs"),e(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),s(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-tabs-labs/sample-po-tabs-labs.component.html"),e(),t(13,"pre",7),n(14,`<po-tabs #poTab>
  <po-tab
    *ngFor="let tab of tabs; let i = index"
    [p-active]="tab.active"
    [p-disabled]="tab.disabled"
    [p-hide]="tab.hide"
    [p-label]="tab.label"
    (p-click)="onClick(tab)"
  >
    <div class="po-font-subtitle">Tab Content { { i }}</div>
  </po-tab>
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

<po-dynamic-form #propertiesForm [p-fields]="propertiesFieldsForm" [p-value]="properties"> </po-dynamic-form>

<div class="po-row">
  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-tabs-labs/sample-po-tabs-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import { PoDynamicFormField, PoNotificationService, PoTab, PoTabsComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tabs-labs',
  templateUrl: './sample-po-tabs-labs.component.html',
  standalone: false
})
export class SamplePoTabsLabsComponent implements OnInit {
  @ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

  tabsFieldsForm: Array<PoDynamicFormField> = [
    { property: 'label', divider: 'TABS', required: true, gridColumns: 6 },
    { property: 'click', gridColumns: 6 },
    { property: 'active', type: 'boolean', gridColumns: 4 },
    { property: 'disabled', type: 'boolean', gridColumns: 4 },
    { property: 'hide', type: 'boolean', gridColumns: 4 }
  ];
  propertiesFieldsForm: Array<PoDynamicFormField> = [
    {
      property: 'properties',
      divider: 'PROPERTIES',
      optionsMulti: true,
      gridColumns: 4
    }
  ];
  tabs: Array<PoTab> = [];
  properties: Array<string> = [];
  pageWidth: number;

  constructor(private poNotification: PoNotificationService) {}

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
    this.tabs = [];
    this.properties = [];
    this.poTab.quantityTabsButton = 0;
  }

  private showClick(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),e()()()()(),t(21,"div",10),s(22,"sample-po-tabs-labs"),e(),s(23,"hr")),a&2&&(r(5),P("po-icon "+i.sampleCodeButtonIcon),r(),w(" ",i.sampleCodeButtonLabel,""),r(),m("ngClass",x(4,Oe,i.hideSampleCodeTabs)))},dependencies:[F,E,h,v,ve],encapsulation:2})}return o})();var Te=(()=>{class o{poNotificationService;card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:"Economy",value:1},{label:"Business",value:2},{label:"Comfort",value:3},{label:"First Class",value:4}];classTrainOptions=[{label:"Economy",value:1},{label:"Cabin",value:2},{label:"First Class",value:3}];flightCompanyOptions=[{label:"American Airlines",value:"american"},{label:"Avianca",value:"avianca"},{label:"Delta Airlines",value:"delta"},{label:"Emirates",value:"emirates"},{label:"Latam",value:"latam"}];trainCompanyOptions=[{label:"EuroStar",value:"eurostar"},{label:"OBB",value:"obb"},{label:"Renfe",value:"renfe"},{label:"TrenItalia",value:"trenitalia"}];transportationOptions=[{label:"Flights",value:"flight"},{label:"Trains",value:"train"}];constructor(l){this.poNotificationService=l}bankBillet(){this.poNotificationService.warning("Bank billet sent to email")}isPaymentEnable(l,a,i){return l.valid&&this.transportation==="flight"&&i.valid||l.valid&&this.transportation==="train"&&a.valid}getTotalCost(){return this.transportation==="flight"&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation==="train"&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,"Fields are missing")}payment(){this.poNotificationService.success("Order confirmed")}static \u0275fac=function(a){return new(a||o)(_(V))};static \u0275cmp=g({type:o,selectors:[["sample-po-tabs-travel"]],standalone:!1,decls:47,vars:26,consts:[["formTravel","ngForm"],["formTrain","ngForm"],["formFlight","ngForm"],["formCreditCard","ngForm"],["p-active","","p-label","Destination"],[1,"po-row"],["name","origin","p-label","Origin","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","departDate","p-label","Depart","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","returnDate","p-label","Return","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","transportation","p-label","Transportation","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Trains",3,"p-hide"],["name","trainCompany","p-label","Tran Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classTrain","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Flights",3,"p-hide"],["name","flightCompany","p-label","Flight Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classFlight","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Payment",3,"p-disabled"],["p-label","Total Cost",1,"po-md-6",3,"p-value"],["p-active","","p-label","Credit Card"],["name","cardName","p-clean","","p-label","Name on Card","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","card","p-clean","","p-label","Card Number","p-mask","9999 9999 9999 9999","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","expiryMonth","p-clean","","p-label","Expiry Month","p-mask","19","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","expiryYear","p-clean","","p-label","Year","p-mask","2999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","cvv","p-clean","","p-label","CVV","p-mask","9999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["p-label","Pay now",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Bank Billet"],["p-label","Generate Bank Billet",1,"po-md-4",3,"p-click","p-disabled"]],template:function(a,i){if(a&1){let d=k();t(0,"po-tabs")(1,"po-tab",4)(2,"form",null,0)(4,"div",5)(5,"po-input",6),S("ngModelChange",function(p){return c(d),T(i.origin,p)||(i.origin=p),b(p)}),e()(),t(6,"div",5)(7,"po-input",7),S("ngModelChange",function(p){return c(d),T(i.destination,p)||(i.destination=p),b(p)}),e()(),t(8,"div",5)(9,"po-datepicker",8),S("ngModelChange",function(p){return c(d),T(i.departDate,p)||(i.departDate=p),b(p)}),e(),t(10,"po-datepicker",9),S("ngModelChange",function(p){return c(d),T(i.returnDate,p)||(i.returnDate=p),b(p)}),e()(),t(11,"div",5)(12,"po-radio-group",10),S("ngModelChange",function(p){return c(d),T(i.transportation,p)||(i.transportation=p),b(p)}),e()()()(),t(13,"po-tab",11)(14,"form",null,1)(16,"div",5)(17,"po-select",12),S("ngModelChange",function(p){return c(d),T(i.trainCompany,p)||(i.trainCompany=p),b(p)}),e()(),t(18,"div",5)(19,"po-select",13),S("ngModelChange",function(p){return c(d),T(i.classTrain,p)||(i.classTrain=p),b(p)}),e()()()(),t(20,"po-tab",14)(21,"form",null,2)(23,"div",5)(24,"po-select",15),S("ngModelChange",function(p){return c(d),T(i.flightCompany,p)||(i.flightCompany=p),b(p)}),e()(),t(25,"div",5)(26,"po-select",16),S("ngModelChange",function(p){return c(d),T(i.classFlight,p)||(i.classFlight=p),b(p)}),e()()()(),t(27,"po-tab",17)(28,"div",5),s(29,"po-info",18),e(),t(30,"po-tabs")(31,"po-tab",19)(32,"form",null,3)(34,"div",5)(35,"po-input",20),S("ngModelChange",function(p){return c(d),T(i.cardName,p)||(i.cardName=p),b(p)}),e()(),t(36,"div",5)(37,"po-input",21),S("ngModelChange",function(p){return c(d),T(i.card,p)||(i.card=p),b(p)}),e()(),t(38,"div",5)(39,"po-input",22),S("ngModelChange",function(p){return c(d),T(i.expiryMonth,p)||(i.expiryMonth=p),b(p)}),e(),t(40,"po-input",23),S("ngModelChange",function(p){return c(d),T(i.expiryYear,p)||(i.expiryYear=p),b(p)}),e(),t(41,"po-input",24),S("ngModelChange",function(p){return c(d),T(i.cvv,p)||(i.cvv=p),b(p)}),e()(),t(42,"div",5)(43,"po-button",25),f("p-click",function(){return c(d),b(i.payment())}),e()()()(),t(44,"po-tab",26)(45,"div",5)(46,"po-button",27),f("p-click",function(){return c(d),b(i.bankBillet())}),e()()()()()()}if(a&2){let d=M(3),u=M(15),p=M(22),ke=M(33);r(5),C("ngModel",i.origin),r(2),C("ngModel",i.destination),r(2),C("ngModel",i.departDate),r(),C("ngModel",i.returnDate),m("p-min-date",i.departDate),r(2),C("ngModel",i.transportation),m("p-options",i.transportationOptions),r(),m("p-hide",i.transportation!=="train"),r(4),C("ngModel",i.trainCompany),m("p-options",i.trainCompanyOptions),r(2),C("ngModel",i.classTrain),m("p-options",i.classTrainOptions),r(),m("p-hide",i.transportation!=="flight"),r(4),C("ngModel",i.flightCompany),m("p-options",i.flightCompanyOptions),r(2),C("ngModel",i.classFlight),m("p-options",i.classFlightOptions),r(),m("p-disabled",i.isPaymentEnable(d,u,p)===!1),r(2),m("p-value",i.getTotalCost()),r(6),C("ngModel",i.cardName),r(2),C("ngModel",i.card),r(2),C("ngModel",i.expiryMonth),r(),C("ngModel",i.expiryYear),r(),C("ngModel",i.cvv),r(2),m("p-disabled",!ke.form.valid||!i.totalCost),r(3),m("p-disabled",!i.totalCost)}},dependencies:[oe,ee,te,ie,ne,D,se,de,me,be,Q,h,v],encapsulation:2})}return o})();var qe=o=>({"docs-sample-code-tabs":o}),Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=g({type:o,selectors:[["sample-po-tabs-travel-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(s(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Tabs - Travel"),e(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),s(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-tabs-travel/sample-po-tabs-travel.component.html"),e(),t(13,"pre",7),n(14,`<po-tabs>
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
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-tabs-travel/sample-po-tabs-travel.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

import { PoNotificationService, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tabs-travel',
  templateUrl: './sample-po-tabs-travel.component.html',
  standalone: false
})
export class SamplePoTabsTravelComponent {
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

  constructor(private poNotificationService: PoNotificationService) {}

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
`),e()()()()(),t(21,"div",10),s(22,"sample-po-tabs-travel"),e(),s(23,"hr")),a&2&&(r(5),P("po-icon "+i.sampleCodeButtonIcon),r(),w(" ",i.sampleCodeButtonLabel,""),r(),m("ngClass",x(4,qe,i.hideSampleCodeTabs)))},dependencies:[F,E,h,v,Te],encapsulation:2})}return o})();var Ie=["poTab"];function Ae(o,W){if(o&1){let l=k();t(0,"po-tab",7),Y(1,"date"),t(2,"div",8)(3,"div",5)(4,"div",4)(5,"div",9)(6,"po-widget")(7,"div",4)(8,"div",10),s(9,"po-avatar",11),e(),t(10,"div",12)(11,"div",13),s(12,"po-info",14),e(),t(13,"div",13),s(14,"po-info",15),e(),t(15,"div",13),s(16,"po-info",16),e()()()()(),t(17,"div",17)(18,"po-widget",18)(19,"div",19),n(20,"TFace Conference Week"),e(),t(21,"div",20),n(22,"From 21th September until 26th setember 2018"),e(),s(23,"hr"),t(24,"div",4)(25,"div",21)(26,"span",22),s(27,"po-icon",23),e(),t(28,"span",24),n(29),Y(30,"date"),e()(),t(31,"div",21)(32,"span",22),s(33,"po-icon",25),e(),t(34,"span",26),n(35,"Av. Braz Leme, 1000, Santana"),e()()(),t(36,"div",27)(37,"po-button",28),f("p-click",function(){let i=c(l).$implicit,d=I();return b(d.confirmSubscription(i))}),e()()()()()()()()}if(o&2){let l=W.$implicit;U("p-label",G(1,9,l.createdDate,"MMM d")),m("p-active",l.id==="1")("p-hide",l.subscribe),r(9),K("p-src","assets/graphics/",l.photo,""),r(3),m("p-value",l.name),r(2),m("p-value",l.email),r(2),m("p-value",l.description),r(13),X(G(30,12,l.createdDate,"MM/dd/yyyy"))}}var ye=(()=>{class o{poNotification;poTab;disableRestoreBtn=!0;speakers;pageWidth;constructor(l){this.poNotification=l}ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3)}cancelSubscription(){this.disableRestoreBtn=!0,this.speakers.forEach(l=>l.subscribe=!1)}confirmSubscription(l){this.disableRestoreBtn=!1,l.subscribe=!0,this.poNotification.success("Registration completed successfully. See you soon!")}getSpeakers(){return[{id:"1",name:"Peter Benjamin Parker",email:"peter.parker@po-ui.com.br",photo:"avatar1.png",description:"Nodejs developer with 4 years experience",createdDate:"2018-09-21T20:21:06.990Z",subscribe:"false"},{id:"2",name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png",description:"Angular developer with 2 years experience",createdDate:"2018-09-22T20:21:06.990Z",subscribe:"false"},{id:"3",name:"Anthony Stark",email:"anthony.stark@po-ui.com.br",photo:"avatar3.png",description:"Javascript developer with 8 years experience",createdDate:"2018-09-23T20:21:06.990Z",subscribe:"false"},{id:"4",name:"Carol Danvers",email:"carol.danvers@po-ui.com.br",photo:"avatar4.png",description:"Full stack developer with 2 years experience",createdDate:"2018-09-24T20:21:06.990Z",subscribe:"false"},{id:"5",name:"Wagner Dantas",email:"wagner.dantas@po-ui.com.br",photo:"avatar5.png",description:"Front-end Engineer developer with 8 years experience",createdDate:"2018-09-25T20:21:06.990Z",subscribe:"false"},{id:"6",name:"Kaiam Alexandre",email:"kaiam.alexandre@po-ui.com.br",photo:"avatar6.png",description:"Javascript developer with 12 years experience",createdDate:"2018-09-26T20:21:06.990Z",subscribe:"false"}]}static \u0275fac=function(a){return new(a||o)(_(V))};static \u0275cmp=g({type:o,selectors:[["sample-po-tabs-business-conf"]],viewQuery:function(a,i){if(a&1&&A(Ie,7),a&2){let d;R(d=z())&&(i.poTab=d.first)}},standalone:!1,decls:9,vars:2,consts:[["poTab",""],["p-title","Check the speaker's list"],[3,"p-label","p-active","p-hide",4,"ngFor","ngForOf"],[1,"po-offset-lg-1","po-offset-xl-1","po-lg-10","po-mt-0"],[1,"po-row"],[1,"po-offset-lg-1","po-offset-xl-1","po-lg-10"],["p-label","Cancel Subscription",1,"po-offset-lg-8","po-offset-xl-8","po-lg-4",3,"p-click","p-disabled"],[3,"p-label","p-active","p-hide"],[1,"po-row","po-mt-5"],[1,"po-lg-8","po-mb-2"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Speaker",3,"p-value"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-label","Description",1,"po-mb-5",3,"p-value"],[1,"po-lg-4","po-mb-2"],["p-title","Subscription"],[1,"po-font-subtitle","po-mb-2"],[1,"po-font-text-bold","po-mb-5"],[1,"po-md-6","po-lg-12"],[1,"po-mr-1","po-font-subtitle"],["p-icon","po-icon an an-calendar-dots"],[1,"po-font-text","po-mb-2"],["p-icon","po-icon an an-map-pin"],[1,"po-font-text"],[1,"po-mt-5"],["p-label","Subscription",1,"po-mt-5",3,"p-click"]],template:function(a,i){if(a&1){let d=k();t(0,"po-page-default",1)(1,"po-tabs",null,0),L(3,Ae,38,15,"po-tab",2),e(),s(4,"hr",3),t(5,"div",4)(6,"div",5)(7,"div",4)(8,"po-button",6),f("p-click",function(){return c(d),b(i.cancelSubscription())}),e()()()()()}a&2&&(r(3),m("ngForOf",i.speakers),r(5),m("p-disabled",i.disableRestoreBtn))},dependencies:[H,re,D,pe,Q,j,h,v,ue,$],encapsulation:2})}return o})();var ze=o=>({"docs-sample-code-tabs":o}),we=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=g({type:o,selectors:[["sample-po-tabs-business-conf-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(s(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Tabs - Business Conference"),e(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),s(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.html"),e(),t(13,"pre",7),n(14,`<po-page-default p-title="Check the speaker's list">
  <po-tabs #poTab>
    <po-tab
      *ngFor="let speaker of speakers"
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
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import { PoNotificationService, PoTabsComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tabs-business-conf',
  templateUrl: './sample-po-tabs-business-conf.component.html',
  standalone: false
})
export class SamplePoTabsBusinessConfComponent implements OnInit {
  @ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

  disableRestoreBtn: boolean = true;
  speakers: Array<any>;
  pageWidth: number;

  constructor(private poNotification: PoNotificationService) {}

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
`),e()()()()(),t(21,"div",10),s(22,"sample-po-tabs-business-conf"),e(),s(23,"hr")),a&2&&(r(5),P("po-icon "+i.sampleCodeButtonIcon),r(),w(" ",i.sampleCodeButtonLabel,""),r(),m("ngClass",x(4,ze,i.hideSampleCodeTabs)))},dependencies:[F,E,h,v,ye],encapsulation:2})}return o})();var Ee=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=g({type:o,selectors:[["sample-po-tabs-doc"]],standalone:!1,decls:275,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-tab"],["id","boas-pr\xE1ticas"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoTabsModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,"M\xF3dulo do componente po-tabs"),e()(),t(7,"h3",3),n(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),n(11,"PoTabsComponent"),e()(),t(12,"div",2)(13,"p"),n(14,"O componente "),t(15,"code"),n(16,"po-tabs"),e(),n(17," \xE9 respons\xE1vel por agrupar "),t(18,"a",6),n(19,"abas"),e(),n(20,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),e(),t(21,"p"),n(22,"O componente exibir\xE1 as abas enquanto houver espa\xE7o na tela, caso a aba ultrapasse o limite da tela a mesma ser\xE1 agrupada em um dropdown."),e(),t(23,"blockquote")(24,"p"),n(25,"As abas que estiverem agrupadas ser\xE3o dispostas numa cascata suspensa que ser\xE1 exibida ao clicar no bot\xE3o."),e()(),t(26,"p"),n(27,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),e(),t(28,"h4",7),n(29,"Boas pr\xE1ticas"),e(),t(30,"ul")(31,"li"),n(32,"Evite utilizar um "),t(33,"code"),n(34,"po-tabs"),e(),n(35," dentro de outro "),t(36,"code"),n(37,"po-tabs"),e(),n(38,";"),e(),t(39,"li"),n(40,"Evite utilizar uma quantidade excessiva de abas, pois ir\xE1 gerar um "),t(41,"em"),n(42,"scroll"),e(),n(43," muito longo no "),t(44,"code"),n(45,"dropdown"),e(),n(46,";"),e(),t(47,"li"),n(48,"Evite "),t(49,"code"),n(50,"labels"),e(),n(51," extensos para as "),t(52,"code"),n(53,"tabs"),e(),n(54," pois podem quebrar seu "),t(55,"em"),n(56,"layout"),e(),n(57,", use "),t(58,"code"),n(59,"labels"),e(),n(60," diretas, curtas e intuitivas."),e()(),t(61,"h4",8),n(62,"Tokens customiz\xE1veis"),e(),t(63,"p"),n(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(65,"blockquote")(66,"p"),n(67,"Para maiores informa\xE7\xF5es, acesse o guia "),t(68,"a",9),n(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(70,"."),e()(),t(71,"table")(72,"thead")(73,"tr")(74,"th"),n(75,"Propriedade"),e(),t(76,"th"),n(77,"Descri\xE7\xE3o"),e(),t(78,"th"),n(79,"Valor Padr\xE3o"),e()()(),t(80,"tbody")(81,"tr")(82,"td")(83,"strong"),n(84,"Default Values"),e()(),s(85,"td")(86,"td"),e(),t(87,"tr")(88,"td")(89,"code"),n(90,"--background"),e()(),t(91,"td"),n(92,"Cor de background"),e(),t(93,"td")(94,"code"),n(95,"var(--color-neutral-light-00)"),e()()(),t(96,"tr")(97,"td")(98,"code"),n(99,"--border-radius"),e()(),t(100,"td"),n(101,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),t(102,"td")(103,"code"),n(104,"var(--border-radius-md)"),e()()(),t(105,"tr")(106,"td")(107,"code"),n(108,"--color-baseline"),e()(),t(109,"td"),n(110,"Cor para box-shadow"),e(),t(111,"td")(112,"code"),n(113,"var(--color-neutral-light-20)"),e()()(),t(114,"tr")(115,"td")(116,"code"),n(117,"--font-family"),e()(),t(118,"td"),n(119,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(120,"td")(121,"code"),n(122,"var(--font-family-theme)"),e()()(),t(123,"tr")(124,"td")(125,"code"),n(126,"--font-size"),e()(),t(127,"td"),n(128,"Tamanho da fonte"),e(),t(129,"td")(130,"code"),n(131,"var(--font-size-default)"),e()()(),t(132,"tr")(133,"td")(134,"code"),n(135,"--font-weight"),e()(),t(136,"td"),n(137,"Peso da fonte"),e(),t(138,"td")(139,"code"),n(140,"var(--font-weight-bold)"),e()()(),t(141,"tr")(142,"td")(143,"code"),n(144,"--margin-tabs-container-left"),e()(),t(145,"td"),n(146,"Margem lateral esquerda do componente quando usado dentro de um "),t(147,"code"),n(148,"page-default"),e()(),t(149,"td")(150,"code"),n(151,"var(--spacing-md)"),e()()(),t(152,"tr")(153,"td")(154,"code"),n(155,"--margin-tabs-container-right"),e()(),t(156,"td"),n(157,"Margem lateral direita do componente quando usado dentro de um "),t(158,"code"),n(159,"page-default"),e()(),t(160,"td")(161,"code"),n(162,"-16px"),e()()(),t(163,"tr")(164,"td")(165,"code"),n(166,"--padding-tabs-header"),e()(),t(167,"td"),n(168,"Padding do valor lateral das abas"),e(),t(169,"td")(170,"code"),n(171,"-16px"),e()()(),t(172,"tr")(173,"td")(174,"strong"),n(175,"Disabled"),e()(),s(176,"td")(177,"td"),e(),t(178,"tr")(179,"td")(180,"code"),n(181,"--color-disabled"),e()(),t(182,"td"),n(183,"Cor da fonte no estado disabilitado"),e(),t(184,"td")(185,"code"),n(186,"var(--color-action-disabled)"),e()()(),t(187,"tr")(188,"td")(189,"code"),n(190,"--background-item-disabled"),e(),n(191,"\xA0"),e(),t(192,"td"),n(193,"Cor de background do item desabilitado"),e(),t(194,"td")(195,"code"),n(196,"var(--color-neutral-light-10)"),e()()(),t(197,"tr")(198,"td")(199,"strong"),n(200,"Focused"),e()(),s(201,"td")(202,"td"),e(),t(203,"tr")(204,"td")(205,"code"),n(206,"--outline-color-focused"),e()(),t(207,"td"),n(208,"Cor do outline do estado de focus"),e(),t(209,"td")(210,"code"),n(211,"var(--color-action-focus)"),e()()(),t(212,"tr")(213,"td")(214,"strong"),n(215,"Hover"),e()(),s(216,"td")(217,"td"),e(),t(218,"tr")(219,"td")(220,"code"),n(221,"--color-hover"),e()(),t(222,"td"),n(223,"Cor principal no estado hover"),e(),t(224,"td")(225,"code"),n(226,"var(--color-brand-01-darkest)"),e()()(),t(227,"tr")(228,"td")(229,"code"),n(230,"--background-item-hover"),e()(),t(231,"td"),n(232,"Cor de background no estado de hover"),e(),t(233,"td")(234,"code"),n(235,"var(--color-brand-01-lightest)"),e()()(),t(236,"tr")(237,"td")(238,"strong"),n(239,"Selected"),e()(),s(240,"td")(241,"td"),e(),t(242,"tr")(243,"td")(244,"code"),n(245,"--background-item-selected"),e()(),t(246,"td"),n(247,"Cor de background do \xEDtem selecionado"),e(),t(248,"td")(249,"code"),n(250,"var(--color-neutral-light-10)"),e()()()()()(),t(251,"div",10)(252,"h4",11),n(253,"Seletor"),e(),t(254,"pre",12),n(255,`<po-tabs >
</po-tabs>
`),e()(),t(256,"h3",13),n(257,"M\xE9todos"),e(),t(258,"table",14)(259,"tr",15)(260,"th",16)(261,"div",17)(262,"h4")(263,"span",18),n(264," setQuantityTabsButton "),e()()()()(),t(265,"tr",19)(266,"td",19)(267,"p"),n(268,"Fun\xE7\xE3o que atribui o n\xFAmero de tabs fora do dropdown."),e(),t(269,"p"),n(270,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),t(271,"pre")(272,"code"),n(273,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

changeQuantityTabs() {
  this.poTab.setQuantityTabsButton(1); //N\xFAmero de tabs
}`),e()()()()(),s(274,"br"),e())},dependencies:[E],encapsulation:2})}return o})();var _e=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(_(ae),_(le))};static \u0275cmp=g({type:o,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title"," Tabs",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,i){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),s(3,"sample-po-tabs-doc"),e(),t(4,"po-tab",3),s(5,"sample-po-tabs-basic-view")(6,"sample-po-tabs-labs-view")(7,"sample-po-tabs-travel-view")(8,"sample-po-tabs-business-conf-view"),e()()()),a&2&&(m("p-actions",i.actions),r(2),m("p-active",i.activeTab.includes("doc")),r(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[j,h,v,he,Ce,Se,we,Ee],encapsulation:2})}return o})();var je=[{path:"",component:_e}],Pe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=q({type:o});static \u0275inj=N({imports:[J.forChild(je),J]})}return o})();var Tt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=q({type:o});static \u0275inj=N({imports:[ge,Pe]})}return o})();export{Tt as DocPoTabsModule};
