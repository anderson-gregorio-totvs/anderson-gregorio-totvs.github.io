import{o as E,p as he}from"./chunk-KTHQ6LKY.js";import{Db as ge,Ea as be,O as Y,Pa as ue,Q as ce,Ua as G,Xa as Ce,a as re,c as de,kb as J,q as me,ra as O,wb as h,xb as y,y as V,yb as D}from"./chunk-K2OBELIH.js";import{$a as H,Ab as B,Bb as j,Bc as Q,Ca as _,Cc as ie,Dc as ae,Ec as Z,Fc as le,Ka as t,La as e,M as L,Ma as r,Nb as oe,Qa as P,Ra as C,Sa as W,Sc as se,T as c,U as b,Uc as pe,Va as ee,Wa as te,Wc as $,Za as I,_a as R,ab as k,bb as n,cb as ne,db as x,fb as f,gb as v,hb as T,ia as p,ja as w,kb as M,pa as g,qa as A,qb as K,sb as X,va as z,za as m}from"./chunk-TT2MSOYL.js";var fe=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275cmp=g({type:l,selectors:[["sample-po-context-tabs-basic"]],standalone:!1,decls:3,vars:0,consts:[["p-label","PO Tabs 1"],["p-label","PO Tabs 2"]],template:function(i,o){i&1&&(t(0,"po-context-tabs"),r(1,"po-tab",0)(2,"po-tab",1),e())},dependencies:[D,h],encapsulation:2})}return l})();var De=l=>({"docs-sample-code-tabs":l}),ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=g({type:l,selectors:[["sample-po-context-tabs-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Context Tabs Basic"),e(),t(4,"a",2),C("click",function(){return o.toggleSampleCodeTabs()}),r(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-context-tabs-basic/sample-po-context-tabs-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-context-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-context-tabs>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-context-tabs-basic/sample-po-context-tabs-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-context-tabs-basic',
  templateUrl: './sample-po-context-tabs-basic.component.html',
  standalone: false
})
export class SamplePoContextTabsBasicComponent {}
`),e()()()()(),t(21,"div",10),r(22,"sample-po-context-tabs-basic"),e(),r(23,"hr")),i&2&&(p(5),_("po-icon "+o.sampleCodeButtonIcon),p(),x(" ",o.sampleCodeButtonLabel,""),p(),m("ngClass",M(4,De,o.hideSampleCodeTabs)))},dependencies:[B,E,h,y,fe],encapsulation:2})}return l})();var Oe=["poTab"];function We(l,q){if(l&1){let a=P();t(0,"po-tab",9),C("p-click",function(){let o=c(a).$implicit,d=W();return b(d.onClick(o))})("p-close-tab",function(){let o=c(a).$implicit,d=W();return b(d.onClose(o))}),t(1,"div",10),n(2),e()()}if(l&2){let a=q.$implicit,i=q.index;m("p-active",a.active)("p-disabled",a.disabled)("p-hide",a.hide)("p-hide-close",a.hideClose)("p-label",a.label),p(2),x("Tab Content ",i,"")}}var Te=(()=>{class l{poNotification;poTab;tabsFieldsForm=[{property:"label",divider:"TAB",required:!0,gridColumns:4},{property:"click",gridColumns:4},{property:"closeTab",label:"Close Tab",gridColumns:4},{property:"active",type:"boolean",gridColumns:3},{property:"disabled",type:"boolean",gridColumns:3},{property:"hide",type:"boolean",gridColumns:3},{property:"hideClose",label:"Hide Close",type:"boolean",gridColumns:3}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];size="medium";tabs=[];properties=[];pageWidth;constructor(a){this.poNotification=a}ngOnInit(){this.restore(),this.pageWidth=window.innerWidth}addTab(a){let i=Object.assign({},a);i.click=i.click?this.showClick.bind(this,i.click):void 0,i.closeTab=i.closeTab?this.dispachClose.bind(this,i.closeTab):void 0,this.tabs.push(i),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4)}onClick(a){a.click&&a.click()}onClose(a){a.closeTab&&a.closeTab()}restore(){this.size="medium",this.tabs=[],this.poTab.quantityTabsButton=0}showClick(a){this.poNotification.success(`Action clicked: ${a}`)}dispachClose(a){this.poNotification.success(`Action closed: ${a}`)}static \u0275fac=function(i){return new(i||l)(w(O))};static \u0275cmp=g({type:l,selectors:[["sample-po-context-tabs-labs"]],viewQuery:function(i,o){if(i&1&&I(Oe,7),i&2){let d;R(d=H())&&(o.poTab=d.first)}},standalone:!1,decls:11,vars:7,consts:[["poTab",""],["tabsForm",""],[3,"p-size"],[3,"p-active","p-disabled","p-hide","p-hide-close","p-label","p-click","p-close-tab",4,"ngFor","ngForOf"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Tab",1,"po-md-3",3,"p-click","p-disabled"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],[3,"p-click","p-close-tab","p-active","p-disabled","p-hide","p-hide-close","p-label"],[1,"po-font-subtitle"]],template:function(i,o){if(i&1){let d=P();t(0,"po-context-tabs",2,0),z(2,We,3,6,"po-tab",3),e(),r(3,"po-dynamic-form",4,1),t(5,"div",5)(6,"po-button",6),C("p-click",function(){c(d);let s=k(4);return o.addTab(s.form.value),b(s.form.reset())}),e()(),r(7,"po-divider"),t(8,"po-radio-group",7),T("ngModelChange",function(s){return c(d),v(o.size,s)||(o.size=s),b(s)}),e(),t(9,"div",5)(10,"po-button",8),C("p-click",function(){return c(d),b(o.restore())}),e()()}if(i&2){let d=k(4);m("p-size",o.size),p(2),m("ngForOf",o.tabs),p(),m("p-fields",o.tabsFieldsForm)("p-value",o.tabs),p(3),m("p-disabled",d.form.invalid),p(2),f("ngModel",o.size),m("p-options",o.sizeOptions)}},dependencies:[j,Q,Z,V,re,Ce,Y,D,h],encapsulation:2})}return l})();var qe=l=>({"docs-sample-code-tabs":l}),Se=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=g({type:l,selectors:[["sample-po-context-tabs-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Context Tabs Labs"),e(),t(4,"a",2),C("click",function(){return o.toggleSampleCodeTabs()}),r(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-context-tabs-labs/sample-po-context-tabs-labs.component.html"),e(),t(13,"pre",7),n(14,`<po-context-tabs #poTab [p-size]="size">
  <po-tab
    *ngFor="let tab of tabs; let i = index"
    [p-active]="tab.active"
    [p-disabled]="tab.disabled"
    [p-hide]="tab.hide"
    [p-hide-close]="tab.hideClose"
    [p-label]="tab.label"
    (p-click)="onClick(tab)"
    (p-close-tab)="onClose(tab)"
  >
    <div class="po-font-subtitle">Tab Content { { i }}</div>
  </po-tab>
</po-context-tabs>

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
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-context-tabs-labs/sample-po-context-tabs-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import {
  PoDynamicFormField,
  PoNotificationService,
  PoRadioGroupOption,
  PoTab,
  PoContextTabsComponent
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-tabs-labs',
  templateUrl: './sample-po-context-tabs-labs.component.html',
  standalone: false
})
export class SamplePoContextTabsLabsComponent implements OnInit {
  @ViewChild('poTab', { static: true }) poTab: PoContextTabsComponent;

  tabsFieldsForm: Array<PoDynamicFormField> = [
    { property: 'label', divider: 'TAB', required: true, gridColumns: 4 },
    { property: 'click', gridColumns: 4 },
    { property: 'closeTab', label: 'Close Tab', gridColumns: 4 },
    { property: 'active', type: 'boolean', gridColumns: 3 },
    { property: 'disabled', type: 'boolean', gridColumns: 3 },
    { property: 'hide', type: 'boolean', gridColumns: 3 },
    { property: 'hideClose', label: 'Hide Close', type: 'boolean', gridColumns: 3 }
  ];

  public sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  size: string = 'medium';
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
    newTab.closeTab = newTab.closeTab ? this.dispachClose.bind(this, newTab.closeTab) : undefined;
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

  onClose(tab: PoTab) {
    if (tab.closeTab) {
      tab.closeTab();
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

  private dispachClose(action: string): any {
    this.poNotification.success(\`Action closed: \${action}\`);
  }
}
`),e()()()()(),t(21,"div",10),r(22,"sample-po-context-tabs-labs"),e(),r(23,"hr")),i&2&&(p(5),_("po-icon "+o.sampleCodeButtonIcon),p(),x(" ",o.sampleCodeButtonLabel,""),p(),m("ngClass",M(4,qe,o.hideSampleCodeTabs)))},dependencies:[B,E,h,y,Te],encapsulation:2})}return l})();var xe=(()=>{class l{poNotificationService;card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:"Economy",value:1},{label:"Business",value:2},{label:"Comfort",value:3},{label:"First Class",value:4}];classTrainOptions=[{label:"Economy",value:1},{label:"Cabin",value:2},{label:"First Class",value:3}];flightCompanyOptions=[{label:"American Airlines",value:"american"},{label:"Avianca",value:"avianca"},{label:"Delta Airlines",value:"delta"},{label:"Emirates",value:"emirates"},{label:"Latam",value:"latam"}];trainCompanyOptions=[{label:"EuroStar",value:"eurostar"},{label:"OBB",value:"obb"},{label:"Renfe",value:"renfe"},{label:"TrenItalia",value:"trenitalia"}];transportationOptions=[{label:"Flights",value:"flight"},{label:"Trains",value:"train"}];constructor(a){this.poNotificationService=a}bankBillet(){this.poNotificationService.warning("Bank billet sent to email")}isPaymentEnable(a,i,o){return a.valid&&this.transportation==="flight"&&o.valid||a.valid&&this.transportation==="train"&&i.valid}getTotalCost(){return this.transportation==="flight"&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation==="train"&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,"Fields are missing")}payment(){this.poNotificationService.success("Order confirmed")}static \u0275fac=function(i){return new(i||l)(w(O))};static \u0275cmp=g({type:l,selectors:[["sample-po-context-tabs-travel"]],standalone:!1,decls:47,vars:30,consts:[["formTravel","ngForm"],["formTrain","ngForm"],["formFlight","ngForm"],["formCreditCard","ngForm"],["p-active","","p-label","Destination"],[1,"po-row"],["name","origin","p-label","Origin","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","departDate","p-label","Depart","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","returnDate","p-label","Return","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","transportation","p-label","Transportation","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Trains",3,"p-hide","p-hide-close"],["name","trainCompany","p-label","Tran Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classTrain","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Flights",3,"p-hide","p-hide-close"],["name","flightCompany","p-label","Flight Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classFlight","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Payment",3,"p-disabled","p-hide-close"],["p-label","Total Cost",1,"po-md-6",3,"p-value"],["p-active","","p-label","Credit Card"],["name","cardName","p-clean","","p-label","Name on Card","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","card","p-clean","","p-label","Card Number","p-mask","9999 9999 9999 9999","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","expiryMonth","p-clean","","p-label","Expiry Month","p-mask","19","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","expiryYear","p-clean","","p-label","Year","p-mask","2999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","cvv","p-clean","","p-label","CVV","p-mask","9999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["p-label","Pay now",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Bank Billet",3,"p-hide-close"],["p-label","Generate Bank Billet",1,"po-md-4",3,"p-click","p-disabled"]],template:function(i,o){if(i&1){let d=P();t(0,"po-context-tabs")(1,"po-tab",4)(2,"form",null,0)(4,"div",5)(5,"po-input",6),T("ngModelChange",function(s){return c(d),v(o.origin,s)||(o.origin=s),b(s)}),e()(),t(6,"div",5)(7,"po-input",7),T("ngModelChange",function(s){return c(d),v(o.destination,s)||(o.destination=s),b(s)}),e()(),t(8,"div",5)(9,"po-datepicker",8),T("ngModelChange",function(s){return c(d),v(o.departDate,s)||(o.departDate=s),b(s)}),e(),t(10,"po-datepicker",9),T("ngModelChange",function(s){return c(d),v(o.returnDate,s)||(o.returnDate=s),b(s)}),e()(),t(11,"div",5)(12,"po-radio-group",10),T("ngModelChange",function(s){return c(d),v(o.transportation,s)||(o.transportation=s),b(s)}),e()()()(),t(13,"po-tab",11)(14,"form",null,1)(16,"div",5)(17,"po-select",12),T("ngModelChange",function(s){return c(d),v(o.trainCompany,s)||(o.trainCompany=s),b(s)}),e()(),t(18,"div",5)(19,"po-select",13),T("ngModelChange",function(s){return c(d),v(o.classTrain,s)||(o.classTrain=s),b(s)}),e()()()(),t(20,"po-tab",14)(21,"form",null,2)(23,"div",5)(24,"po-select",15),T("ngModelChange",function(s){return c(d),v(o.flightCompany,s)||(o.flightCompany=s),b(s)}),e()(),t(25,"div",5)(26,"po-select",16),T("ngModelChange",function(s){return c(d),v(o.classFlight,s)||(o.classFlight=s),b(s)}),e()()()(),t(27,"po-tab",17)(28,"div",5),r(29,"po-info",18),e(),t(30,"po-context-tabs")(31,"po-tab",19)(32,"form",null,3)(34,"div",5)(35,"po-input",20),T("ngModelChange",function(s){return c(d),v(o.cardName,s)||(o.cardName=s),b(s)}),e()(),t(36,"div",5)(37,"po-input",21),T("ngModelChange",function(s){return c(d),v(o.card,s)||(o.card=s),b(s)}),e()(),t(38,"div",5)(39,"po-input",22),T("ngModelChange",function(s){return c(d),v(o.expiryMonth,s)||(o.expiryMonth=s),b(s)}),e(),t(40,"po-input",23),T("ngModelChange",function(s){return c(d),v(o.expiryYear,s)||(o.expiryYear=s),b(s)}),e(),t(41,"po-input",24),T("ngModelChange",function(s){return c(d),v(o.cvv,s)||(o.cvv=s),b(s)}),e()(),t(42,"div",5)(43,"po-button",25),C("p-click",function(){return c(d),b(o.payment())}),e()()()(),t(44,"po-tab",26)(45,"div",5)(46,"po-button",27),C("p-click",function(){return c(d),b(o.bankBillet())}),e()()()()()()}if(i&2){let d=k(3),u=k(15),s=k(22),Me=k(33);p(5),f("ngModel",o.origin),p(2),f("ngModel",o.destination),p(2),f("ngModel",o.departDate),p(),f("ngModel",o.returnDate),m("p-min-date",o.departDate),p(2),f("ngModel",o.transportation),m("p-options",o.transportationOptions),p(),m("p-hide",o.transportation!=="train")("p-hide-close",!0),p(4),f("ngModel",o.trainCompany),m("p-options",o.trainCompanyOptions),p(2),f("ngModel",o.classTrain),m("p-options",o.classTrainOptions),p(),m("p-hide",o.transportation!=="flight")("p-hide-close",!0),p(4),f("ngModel",o.flightCompany),m("p-options",o.flightCompanyOptions),p(2),f("ngModel",o.classFlight),m("p-options",o.classFlightOptions),p(),m("p-disabled",o.isPaymentEnable(d,u,s)===!1)("p-hide-close",!0),p(2),m("p-value",o.getTotalCost()),p(6),f("ngModel",o.cardName),p(2),f("ngModel",o.card),p(2),f("ngModel",o.expiryMonth),p(),f("ngModel",o.expiryYear),p(),f("ngModel",o.cvv),p(2),m("p-disabled",!Me.form.valid||!o.totalCost),p(),m("p-hide-close",!0),p(2),m("p-disabled",!o.totalCost)}},dependencies:[le,Q,ie,Z,ae,V,Y,ce,be,ue,G,D,h],encapsulation:2})}return l})();var ze=l=>({"docs-sample-code-tabs":l}),ye=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=g({type:l,selectors:[["sample-po-context-tabs-travel-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Context Tabs - Travel"),e(),t(4,"a",2),C("click",function(){return o.toggleSampleCodeTabs()}),r(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-context-tabs-travel/sample-po-context-tabs-travel.component.html"),e(),t(13,"pre",7),n(14,`<po-context-tabs>
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
  <po-tab p-label="Trains" [p-hide]="transportation !== 'train'" [p-hide-close]="true">
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
  <po-tab p-label="Flights" [p-hide]="transportation !== 'flight'" [p-hide-close]="true">
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
  <po-tab
    p-label="Payment"
    [p-disabled]="isPaymentEnable(formTravel, formTrain, formFlight) === false"
    [p-hide-close]="true"
  >
    <div class="po-row">
      <po-info class="po-md-6" p-label="Total Cost" [p-value]="getTotalCost()"> </po-info>
    </div>

    <po-context-tabs>
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

      <po-tab p-label="Bank Billet" [p-hide-close]="true">
        <div class="po-row">
          <po-button class="po-md-4" p-label="Generate Bank Billet" [p-disabled]="!totalCost" (p-click)="bankBillet()">
          </po-button>
        </div>
      </po-tab>
    </po-context-tabs>
  </po-tab>
</po-context-tabs>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-context-tabs-travel/sample-po-context-tabs-travel.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

import { PoNotificationService, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-tabs-travel',
  templateUrl: './sample-po-context-tabs-travel.component.html',
  standalone: false
})
export class SamplePoContextTabsTravelComponent {
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
`),e()()()()(),t(21,"div",10),r(22,"sample-po-context-tabs-travel"),e(),r(23,"hr")),i&2&&(p(5),_("po-icon "+o.sampleCodeButtonIcon),p(),x(" ",o.sampleCodeButtonLabel,""),p(),m("ngClass",M(4,ze,o.hideSampleCodeTabs)))},dependencies:[B,E,h,y,xe],encapsulation:2})}return l})();var Re=["poTab"];function He(l,q){if(l&1){let a=P();t(0,"po-tab",7),K(1,"date"),t(2,"div",8)(3,"div",5)(4,"div",4)(5,"div",9)(6,"po-widget")(7,"div",4)(8,"div",10),r(9,"po-avatar",11),e(),t(10,"div",12)(11,"div",13),r(12,"po-info",14),e(),t(13,"div",13),r(14,"po-info",15),e(),t(15,"div",13),r(16,"po-info",16),e()()()()(),t(17,"div",17)(18,"po-widget",18)(19,"div",19),n(20,"TFace Conference Week"),e(),t(21,"div",20),n(22,"From 21th September until 26th setember 2018"),e(),r(23,"hr"),t(24,"div",4)(25,"div",21)(26,"span",22),r(27,"po-icon",23),e(),t(28,"span",24),n(29),K(30,"date"),e()(),t(31,"div",21)(32,"span",22),r(33,"po-icon",25),e(),t(34,"span",26),n(35,"Av. Braz Leme, 1000, Santana"),e()()(),t(36,"div",27)(37,"po-button",28),C("p-click",function(){let o=c(a).$implicit,d=W();return b(d.confirmSubscription(o))}),e()()()()()()()()}if(l&2){let a=q.$implicit;ee("p-label",X(1,9,a.createdDate,"MMM d")),m("p-active",a.id==="1")("p-hide",a.subscribe),p(9),te("p-src","assets/graphics/",a.photo,""),p(3),m("p-value",a.name),p(2),m("p-value",a.email),p(2),m("p-value",a.description),p(13),ne(X(30,12,a.createdDate,"MM/dd/yyyy"))}}var Ee=(()=>{class l{poNotification;poTab;disableRestoreBtn=!0;speakers;pageWidth;constructor(a){this.poNotification=a}ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3)}cancelSubscription(){this.disableRestoreBtn=!0,this.speakers.forEach(a=>a.subscribe=!1)}confirmSubscription(a){this.disableRestoreBtn=!1,a.subscribe=!0,this.poNotification.success("Registration completed successfully. See you soon!")}getSpeakers(){return[{id:"1",name:"Peter Benjamin Parker",email:"peter.parker@po-ui.com.br",photo:"avatar1.png",description:"Nodejs developer with 4 years experience",createdDate:"2018-09-21T20:21:06.990Z",subscribe:"false"},{id:"2",name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png",description:"Angular developer with 2 years experience",createdDate:"2018-09-22T20:21:06.990Z",subscribe:"false"},{id:"3",name:"Anthony Stark",email:"anthony.stark@po-ui.com.br",photo:"avatar3.png",description:"Javascript developer with 8 years experience",createdDate:"2018-09-23T20:21:06.990Z",subscribe:"false"},{id:"4",name:"Carol Danvers",email:"carol.danvers@po-ui.com.br",photo:"avatar4.png",description:"Full stack developer with 2 years experience",createdDate:"2018-09-24T20:21:06.990Z",subscribe:"false"},{id:"5",name:"Wagner Dantas",email:"wagner.dantas@po-ui.com.br",photo:"avatar5.png",description:"Front-end Engineer developer with 8 years experience",createdDate:"2018-09-25T20:21:06.990Z",subscribe:"false"},{id:"6",name:"Kaiam Alexandre",email:"kaiam.alexandre@po-ui.com.br",photo:"avatar6.png",description:"Javascript developer with 12 years experience",createdDate:"2018-09-26T20:21:06.990Z",subscribe:"false"}]}static \u0275fac=function(i){return new(i||l)(w(O))};static \u0275cmp=g({type:l,selectors:[["sample-po-context-tabs-business-conf"]],viewQuery:function(i,o){if(i&1&&I(Re,7),i&2){let d;R(d=H())&&(o.poTab=d.first)}},standalone:!1,decls:9,vars:2,consts:[["poTab",""],["p-title","Check the speaker's list"],[3,"p-label","p-active","p-hide",4,"ngFor","ngForOf"],[1,"po-offset-lg-1","po-offset-xl-1","po-lg-10","po-mt-0"],[1,"po-row"],[1,"po-offset-lg-1","po-offset-xl-1","po-lg-10"],["p-label","Cancel Subscription",1,"po-offset-lg-8","po-offset-xl-8","po-lg-4",3,"p-click","p-disabled"],[3,"p-label","p-active","p-hide"],[1,"po-row","po-mt-5"],[1,"po-lg-8","po-mb-2"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Speaker",3,"p-value"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-label","Description",1,"po-mb-5",3,"p-value"],[1,"po-lg-4","po-mb-2"],["p-title","Subscription"],[1,"po-font-subtitle","po-mb-2"],[1,"po-font-text-bold","po-mb-5"],[1,"po-md-6","po-lg-12"],[1,"po-mr-1","po-font-subtitle"],["p-icon","po-icon an an-calendar-dots"],[1,"po-font-text","po-mb-2"],["p-icon","po-icon an an-map-pin"],[1,"po-font-text"],[1,"po-mt-5"],["p-label","Subscription",1,"po-mt-5",3,"p-click"]],template:function(i,o){if(i&1){let d=P();t(0,"po-page-default",1)(1,"po-context-tabs",null,0),z(3,He,38,15,"po-tab",2),e(),r(4,"hr",3),t(5,"div",4)(6,"div",5)(7,"div",4)(8,"po-button",6),C("p-click",function(){return c(d),b(o.cancelSubscription())}),e()()()()()}i&2&&(p(3),m("ngForOf",o.speakers),p(5),m("p-disabled",o.disableRestoreBtn))},dependencies:[j,me,V,de,G,J,D,h,ge,oe],encapsulation:2})}return l})();var Qe=l=>({"docs-sample-code-tabs":l}),we=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=g({type:l,selectors:[["sample-po-context-tabs-business-conf-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Context Tabs - Business Conference"),e(),t(4,"a",2),C("click",function(){return o.toggleSampleCodeTabs()}),r(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-context-tabs-business-conf/sample-po-context-tabs-business-conf.component.html"),e(),t(13,"pre",7),n(14,`<po-page-default p-title="Check the speaker's list">
  <po-context-tabs #poTab>
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
  </po-context-tabs>

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
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-context-tabs-business-conf/sample-po-context-tabs-business-conf.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import { PoNotificationService, PoContextTabsComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-tabs-business-conf',
  templateUrl: './sample-po-context-tabs-business-conf.component.html',
  standalone: false
})
export class SamplePoContextTabsBusinessConfComponent implements OnInit {
  @ViewChild('poTab', { static: true }) poTab: PoContextTabsComponent;

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
`),e()()()()(),t(21,"div",10),r(22,"sample-po-context-tabs-business-conf"),e(),r(23,"hr")),i&2&&(p(5),_("po-icon "+o.sampleCodeButtonIcon),p(),x(" ",o.sampleCodeButtonLabel,""),p(),m("ngClass",M(4,Qe,o.hideSampleCodeTabs)))},dependencies:[B,E,h,y,Ee],encapsulation:2})}return l})();var _e=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275cmp=g({type:l,selectors:[["sample-po-context-tabs-doc"]],standalone:!1,decls:361,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],["href","/documentation/po-tab"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(i,o){i&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoContextTabsModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,"M\xF3dulo do componente po-context-tabs"),e()(),t(7,"h3",3),n(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),n(11,"PoContextTabsComponent"),e()(),t(12,"div",2)(13,"h4"),n(14,"Tokens customiz\xE1veis"),e(),t(15,"p"),n(16,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(17,"blockquote")(18,"p"),n(19,"Para maiores informa\xE7\xF5es, acesse o guia "),t(20,"a",6),n(21,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(22,"."),e()(),t(23,"table")(24,"thead")(25,"tr")(26,"th"),n(27,"Propriedade"),e(),t(28,"th"),n(29,"Descri\xE7\xE3o"),e(),t(30,"th"),n(31,"Valor Padr\xE3o"),e()()(),t(32,"tbody")(33,"tr")(34,"td")(35,"strong"),n(36,"Default Values"),e()(),r(37,"td")(38,"td"),e(),t(39,"tr")(40,"td")(41,"code"),n(42,"--background"),e()(),t(43,"td"),n(44,"Cor de background"),e(),t(45,"td")(46,"code"),n(47,"var(--color-transparent)"),e()()(),t(48,"tr")(49,"td")(50,"code"),n(51,"--background-item-default"),e()(),t(52,"td"),n(53,"Cor de background do item padr\xE3o"),e(),t(54,"td")(55,"code"),n(56,"var(--color-transparent)"),e()()(),t(57,"tr")(58,"td")(59,"code"),n(60,"--border-radius"),e()(),t(61,"td"),n(62,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),t(63,"td")(64,"code"),n(65,"var(--border-radius-md)"),e()()(),t(66,"tr")(67,"td")(68,"code"),n(69,"--color"),e()(),t(70,"td"),n(71,"Cor da fonte padr\xE3o"),e(),t(72,"td")(73,"code"),n(74,"var(--color-action-default)"),e()()(),t(75,"tr")(76,"td")(77,"code"),n(78,"--color-baseline"),e()(),t(79,"td"),n(80,"Cor para box-shadow"),e(),t(81,"td")(82,"code"),n(83,"var(--color-neutral-light-20)"),e()()(),t(84,"tr")(85,"td")(86,"code"),n(87,"--font-family"),e()(),t(88,"td"),n(89,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(90,"td")(91,"code"),n(92,"var(--font-family-theme)"),e()()(),t(93,"tr")(94,"td")(95,"code"),n(96,"--font-size"),e()(),t(97,"td"),n(98,"Tamanho da fonte"),e(),t(99,"td")(100,"code"),n(101,"var(--font-size-default)"),e()()(),t(102,"tr")(103,"td")(104,"code"),n(105,"--font-weight"),e()(),t(106,"td"),n(107,"Peso da fonte"),e(),t(108,"td")(109,"code"),n(110,"var(--font-weight-bold)"),e()()(),t(111,"tr")(112,"td")(113,"code"),n(114,"--margin-tabs-container-left"),e()(),t(115,"td"),n(116,"Margem lateral esquerda do componente quando usado dentro de um "),t(117,"code"),n(118,"page-default"),e()(),t(119,"td")(120,"code"),n(121,"var(--spacing-md)"),e()()(),t(122,"tr")(123,"td")(124,"code"),n(125,"--margin-tabs-container-right"),e()(),t(126,"td"),n(127,"Margem lateral direita do componente quando usado dentro de um "),t(128,"code"),n(129,"page-default"),e()(),t(130,"td")(131,"code"),n(132,"-16px"),e()()(),t(133,"tr")(134,"td")(135,"code"),n(136,"--padding-tabs-header"),e()(),t(137,"td"),n(138,"Padding do valor lateral das abas"),e(),t(139,"td")(140,"code"),n(141,"var(--spacing-sm)"),e()()(),t(142,"tr")(143,"td")(144,"code"),n(145,"--margin-tabs-first-child"),e()(),t(146,"td"),n(147,"Margem lateral da primeira aba"),e(),t(148,"td")(149,"code"),n(150,"var(--spacing-md)"),e()()(),t(151,"tr")(152,"td")(153,"code"),n(154,"--margin-tabs-last-child"),e()(),t(155,"td"),n(156,"Margem lateral da ultima aba"),e(),t(157,"td")(158,"code"),n(159,"var(--spacing-md)"),e()()(),t(160,"tr")(161,"td")(162,"strong"),n(163,"Disabled"),e()(),r(164,"td")(165,"td"),e(),t(166,"tr")(167,"td")(168,"code"),n(169,"--color-disabled"),e()(),t(170,"td"),n(171,"Cor da fonte no estado disabilitado"),e(),t(172,"td")(173,"code"),n(174,"var(--color-action-disabled)"),e()()(),t(175,"tr")(176,"td")(177,"code"),n(178,"--background-item-disabled"),e(),n(179,"\xA0"),e(),t(180,"td"),n(181,"Cor de background do item desabilitado"),e(),t(182,"td")(183,"code"),n(184,"var(--color-neutral-light-10)"),e()()(),t(185,"tr")(186,"td")(187,"strong"),n(188,"Focused"),e()(),r(189,"td")(190,"td"),e(),t(191,"tr")(192,"td")(193,"code"),n(194,"--outline-color-focused"),e()(),t(195,"td"),n(196,"Cor do outline do estado de focus"),e(),t(197,"td")(198,"code"),n(199,"var(--color-action-focus)"),e()()(),t(200,"tr")(201,"td")(202,"strong"),n(203,"Hover"),e()(),r(204,"td")(205,"td"),e(),t(206,"tr")(207,"td")(208,"code"),n(209,"--color-hover"),e()(),t(210,"td"),n(211,"Cor principal no estado hover"),e(),t(212,"td")(213,"code"),n(214,"var(--color-brand-01-darkest)"),e()()(),t(215,"tr")(216,"td")(217,"code"),n(218,"--background-item-hover"),e()(),t(219,"td"),n(220,"Cor de background no estado de hover"),e(),t(221,"td")(222,"code"),n(223,"var(--color-brand-01-lightest)"),e()()(),t(224,"tr")(225,"td")(226,"strong"),n(227,"Selected"),e()(),r(228,"td")(229,"td"),e(),t(230,"tr")(231,"td")(232,"code"),n(233,"--background-item-selected"),e()(),t(234,"td"),n(235,"Cor de background do item selecionado"),e(),t(236,"td")(237,"code"),n(238,"var(--color-brand-01-lightest)"),e()()()()(),t(239,"p"),r(240,"br"),n(241," O componente "),t(242,"code"),n(243,"po-context-tabs"),e(),n(244," \xE9 respons\xE1vel por agrupar "),t(245,"a",7),n(246,"abas"),e(),n(247,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),e(),t(248,"p"),n(249,"O componente exibir\xE1 as abas enquanto houver espa\xE7o na tela, caso a aba ultrapasse o limite da tela a mesma ser\xE1 agrupada em um dropdown."),e(),t(250,"blockquote")(251,"p"),n(252,"As abas que estiverem agrupadas ser\xE3o dispostas numa cascata suspensa que ser\xE1 exibida ao clicar no bot\xE3o."),e()(),t(253,"p"),n(254,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),e(),t(255,"h4"),n(256,"Boas pr\xE1ticas"),e(),t(257,"ul")(258,"li"),n(259,"Evite utilizar um "),t(260,"code"),n(261,"po-context-tabs"),e(),n(262," dentro de outro "),t(263,"code"),n(264,"po-context-tabs"),e(),n(265,";"),e(),t(266,"li"),n(267,"Evite utilizar uma quantidade excessiva de abas, pois ir\xE1 gerar um "),t(268,"em"),n(269,"scroll"),e(),n(270," muito longo no "),t(271,"code"),n(272,"dropdown"),e(),n(273,";"),e(),t(274,"li"),n(275,"Evite "),t(276,"code"),n(277,"labels"),e(),n(278," extensos para as "),t(279,"code"),n(280,"tabs"),e(),n(281," pois podem quebrar seu "),t(282,"em"),n(283,"layout"),e(),n(284,", use "),t(285,"code"),n(286,"labels"),e(),n(287," diretas, curtas e intuitivas."),e()()(),t(288,"div",8)(289,"h4",9),n(290,"Seletor"),e(),t(291,"pre",10),n(292,`<po-context-tabs
    p-size="string" >
</po-context-tabs>
`),e()(),t(293,"h4",11),n(294,"Propriedades"),e(),t(295,"table",12)(296,"tr",13)(297,"th",14),n(298,"Nome"),e(),t(299,"th",14),n(300,"Tipo"),e(),t(301,"th",14),n(302,"Padr\xE3o"),e(),t(303,"th",14),n(304,"Descri\xE7\xE3o"),e()(),t(305,"tr",15)(306,"td",16)(307,"div",17)(308,"span",18),n(309," p-size"),r(310,"br"),e()()(),t(311,"td",19)(312,"code",20),n(313,"string"),e()(),t(314,"td",21)(315,"p")(316,"code"),n(317,"medium"),e()()(),t(318,"td",22)(319,"em")(320,"strong"),n(321,"(opcional)"),e()(),t(322,"p"),n(323,"Define o tamanho do componente:"),e(),t(324,"ul")(325,"li")(326,"code"),n(327,"small"),e(),n(328,": altura dos tabs como 32px (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(329,"li")(330,"code"),n(331,"medium"),e(),n(332,": altura dos tabs como 44px."),e()(),t(333,"blockquote")(334,"p"),n(335,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(336,"code"),n(337,"medium"),e(),n(338,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(339,"a",23),n(340,"po-theme"),e(),n(341,"."),e()()()()(),t(342,"h3",11),n(343,"M\xE9todos"),e(),t(344,"table",24)(345,"tr",15)(346,"th",25)(347,"div",17)(348,"h4")(349,"span",18),n(350," setQuantityTabsButton "),e()()()()(),t(351,"tr",22)(352,"td",22)(353,"p"),n(354,"Fun\xE7\xE3o que atribui o n\xFAmero de tabs fora do dropdown."),e(),t(355,"p"),n(356,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),t(357,"pre")(358,"code"),n(359,`import { PoContextTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poContextTabs', { static: true }) poContextTabs: PoContextTabsComponent;

changeQuantityTabs() {
  this.poContextTabs.setQuantityTabsButton(1); //N\xFAmero de context-tabs
}
`),e()()()()(),r(360,"br"),e())},dependencies:[E],encapsulation:2})}return l})();var Pe=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(i){return new(i||l)(w(se),w(pe))};static \u0275cmp=g({type:l,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Context Tabs",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,o){i&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),C("p-click",function(){return o.changeTab("doc")}),r(3,"sample-po-context-tabs-doc"),e(),t(4,"po-tab",3),C("p-click",function(){return o.changeTab("web")}),r(5,"sample-po-context-tabs-basic-view")(6,"sample-po-context-tabs-labs-view")(7,"sample-po-context-tabs-travel-view")(8,"sample-po-context-tabs-business-conf-view"),e()()()),i&2&&(m("p-actions",o.actions),p(2),m("p-active",o.activeTab==="doc"),p(2),m("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[J,h,y,ve,Se,ye,we,_e],encapsulation:2})}return l})();var Ge=[{path:"",component:Pe}],ke=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275mod=A({type:l});static \u0275inj=L({imports:[$.forChild(Ge),$]})}return l})();var xt=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275mod=A({type:l});static \u0275inj=L({imports:[he,ke]})}return l})();export{xt as DocPoContextTabsModule};
