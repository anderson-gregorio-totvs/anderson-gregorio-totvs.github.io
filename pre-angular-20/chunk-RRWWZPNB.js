import{o as C,p as ce}from"./chunk-KTHQ6LKY.js";import{Db as T,Ea as le,Ia as re,Ja as de,M as ie,Pa as pe,Qa as me,S as D,Ua as O,kb as se,la as ae,ra as I,wb as y,xb as w,y as B,ya as oe}from"./chunk-K2OBELIH.js";import{$a as q,Aa as R,Ab as A,Bc as X,Ca as P,Cc as Y,Dc as Z,Ec as $,Fc as ee,Ha as J,Ia as G,Ja as Q,Ka as n,La as t,M as W,Ma as a,P as k,Qa as V,Ra as b,Sc as te,T as c,U as u,Uc as ne,Wc as j,Za as F,_a as z,bb as e,cb as K,db as f,fb as E,gb as S,hb as v,ia as r,ja as U,kb as _,pa as h,qa as L,za as s}from"./chunk-TT2MSOYL.js";var ue=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=h({type:o,selectors:[["sample-po-widget-basic"]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&a(0,"po-widget")},dependencies:[T],encapsulation:2})}return o})();var _e=o=>({"docs-sample-code-tabs":o}),ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=h({type:o,selectors:[["sample-po-widget-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Widget Basic"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-widget-basic/sample-po-widget-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-widget></po-widget>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-widget-basic/sample-po-widget-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-widget-basic',
  templateUrl: './sample-po-widget-basic.component.html',
  standalone: false
})
export class SamplePoWidgetBasicComponent {}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-widget-basic"),t(),a(23,"hr")),l&2&&(r(5),P("po-icon "+i.sampleCodeButtonIcon),r(),f(" ",i.sampleCodeButtonLabel,""),r(),s("ngClass",_(4,_e,i.hideSampleCodeTabs)))},dependencies:[A,C,y,w,ue],encapsulation:2})}return o})();var be=(()=>{class o{poNotification=k(I);action;background;content;height;help;primaryLabel;properties;secondaryLabel;tagIcon;tagLabel;title;actionPopup={action:null,label:""};myActions=[];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"primaryWidget",label:"Primary Widget"},{value:"small",label:"small"}];iconList=[{label:"an an-bluetooth",value:"an an-bluetooth"},{label:"an an-heart",value:"an an-heart"},{label:"an an-lightbulb",value:"an an-lightbulb"},{label:"an an-star",value:"an an-star"},{label:"an an-gear",value:"an an-gear"},{label:"an an-globe",value:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];ngOnInit(){this.restore()}changeAction(p){this.action=p}addAction(p){this.myActions=[...this.myActions,{label:p.label,action:this.showAction.bind(this,p.action)}],this.actionPopup={action:null,label:""}}restore(){this.background="",this.action="",this.content="",this.height=void 0,this.help="",this.title=void 0,this.primaryLabel=void 0,this.properties=[],this.myActions=[],this.secondaryLabel=void 0,this.tagLabel=void 0,this.tagIcon=void 0,this.actionPopup={action:null,label:""}}showAction(p){this.poNotification.success(`Action clicked: ${p}`)}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=h({type:o,selectors:[["sample-po-widget-labs"]],standalone:!1,decls:27,vars:29,consts:[["f","ngForm"],[1,"po-sm-12",3,"p-on-disabled","p-primary-action","p-secondary-action","p-setting","p-title-action","p-background","p-disabled","p-size","p-height","p-help","p-primary","p-primary-label","p-secondary-label","p-tag","p-tag-icon","p-title","p-actions"],[1,"po-row"],["p-label","Action",1,"po-md-6",3,"p-value"],["name","title","p-label","Title",1,"po-md-4",3,"ngModelChange","ngModel"],["name","help","p-label","Help","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","height","p-label","Height",1,"po-md-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","background","p-clean","","p-help","Ex.: 'http://image.com'; '../../image.png'","p-label","Background",1,"po-md-12",3,"ngModelChange","ngModel"],["name","primaryLabel","p-label","Primary Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondaryLabel","p-label","Secondary Label",1,"po-md-6",3,"ngModelChange","ngModel"],[1,"po-row",2,"align-items","flex-end"],["name","tagLabel","p-label","Label tag",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-6","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","3","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","content","p-label","Content",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let m=V();n(0,"po-widget",1),b("p-on-disabled",function(){return c(m),u(i.changeAction("p-on-disabled"))})("p-primary-action",function(){return c(m),u(i.changeAction("p-primary-action"))})("p-secondary-action",function(){return c(m),u(i.changeAction("p-secondary-action"))})("p-setting",function(){return c(m),u(i.changeAction("p-setting"))})("p-title-action",function(){return c(m),u(i.changeAction("p-title-action"))}),e(1),t(),a(2,"hr"),n(3,"div",2),a(4,"po-info",3),t(),a(5,"hr"),n(6,"form",null,0)(8,"po-input",4),v("ngModelChange",function(d){return c(m),S(i.title,d)||(i.title=d),u(d)}),t(),n(9,"po-input",5),v("ngModelChange",function(d){return c(m),S(i.help,d)||(i.help=d),u(d)}),t(),n(10,"po-number",6),v("ngModelChange",function(d){return c(m),S(i.height,d)||(i.height=d),u(d)}),t(),n(11,"div",2)(12,"po-input",7),v("ngModelChange",function(d){return c(m),S(i.actionPopup.action,d)||(i.actionPopup.action=d),u(d)}),t(),n(13,"po-input",8),v("ngModelChange",function(d){return c(m),S(i.actionPopup.label,d)||(i.actionPopup.label=d),u(d)}),t()(),n(14,"div",2)(15,"po-button",9),b("p-click",function(){return c(m),u(i.addAction(i.actionPopup))}),t()(),n(16,"po-input",10),v("ngModelChange",function(d){return c(m),S(i.background,d)||(i.background=d),u(d)}),t(),n(17,"po-input",11),v("ngModelChange",function(d){return c(m),S(i.primaryLabel,d)||(i.primaryLabel=d),u(d)}),t(),n(18,"po-input",12),v("ngModelChange",function(d){return c(m),S(i.secondaryLabel,d)||(i.secondaryLabel=d),u(d)}),t(),n(19,"div",13)(20,"po-input",14),v("ngModelChange",function(d){return c(m),S(i.tagLabel,d)||(i.tagLabel=d),u(d)}),t(),n(21,"po-select",15),v("ngModelChange",function(d){return c(m),S(i.tagIcon,d)||(i.tagIcon=d),u(d)}),t()(),n(22,"div",2)(23,"po-checkbox-group",16),v("ngModelChange",function(d){return c(m),S(i.properties,d)||(i.properties=d),u(d)}),t()(),n(24,"po-textarea",17),v("ngModelChange",function(d){return c(m),S(i.content,d)||(i.content=d),u(d)}),t(),n(25,"div",2)(26,"po-button",18),b("p-click",function(){return c(m),u(i.restore())}),t()()()}l&2&&(s("p-background",i.background)("p-disabled",i.properties.includes("disabled"))("p-size",i.properties.includes("small")?"small":"medium")("p-height",i.height)("p-help",i.help)("p-primary",i.properties.includes("primaryWidget"))("p-primary-label",i.primaryLabel)("p-secondary-label",i.secondaryLabel)("p-tag",i.tagLabel)("p-tag-icon",i.tagIcon)("p-title",i.title)("p-actions",i.myActions),r(),f(" ",i.content,`
`),r(3),s("p-value",i.action),r(4),E("ngModel",i.title),r(),E("ngModel",i.help),r(),E("ngModel",i.height),r(2),E("ngModel",i.actionPopup.action),r(),E("ngModel",i.actionPopup.label),r(2),s("p-disabled",!i.actionPopup.action||!i.actionPopup.label),r(),E("ngModel",i.background),r(),E("ngModel",i.primaryLabel),r(),E("ngModel",i.secondaryLabel),r(2),E("ngModel",i.tagLabel),r(),E("ngModel",i.tagIcon),s("p-options",i.iconList),r(2),E("ngModel",i.properties),s("p-options",i.propertiesOptions),r(),E("ngModel",i.content))},dependencies:[ee,X,Y,$,Z,B,ie,le,de,pe,me,O,T],encapsulation:2})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),he=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=h({type:o,selectors:[["sample-po-widget-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Widget Labs"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-widget-labs/sample-po-widget-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-widget
  class="po-sm-12"
  [p-background]="background"
  [p-disabled]="properties.includes('disabled')"
  [p-size]="properties.includes('small') ? 'small' : 'medium'"
  [p-height]="height"
  [p-help]="help"
  [p-primary]="properties.includes('primaryWidget')"
  [p-primary-label]="primaryLabel"
  [p-secondary-label]="secondaryLabel"
  [p-tag]="tagLabel"
  [p-tag-icon]="tagIcon"
  [p-title]="title"
  [p-actions]="myActions"
  (p-on-disabled)="changeAction('p-on-disabled')"
  (p-primary-action)="changeAction('p-primary-action')"
  (p-secondary-action)="changeAction('p-secondary-action')"
  (p-setting)="changeAction('p-setting')"
  (p-title-action)="changeAction('p-title-action')"
>
  { { content }}
</po-widget>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Action" [p-value]="action"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <po-input class="po-md-4" name="title" [(ngModel)]="title" p-label="Title"> </po-input>

  <po-input class="po-md-4" name="help" [(ngModel)]="help" p-label="Help" p-clean> </po-input>

  <po-number class="po-md-4" name="height" [(ngModel)]="height" p-label="Height"> </po-number>

  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="actionPopup.action" p-clean p-label="Action"> </po-input>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="actionPopup.label" p-label="Label" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-2 po-md-4"
      p-label="Add Action"
      [p-disabled]="!actionPopup.action || !actionPopup.label"
      (p-click)="addAction(actionPopup)"
    >
    </po-button>
  </div>

  <po-input
    class="po-md-12"
    name="background"
    [(ngModel)]="background"
    p-clean
    p-help="Ex.: 'http://image.com'; '../../image.png'"
    p-label="Background"
  >
  </po-input>

  <po-input class="po-md-6" name="primaryLabel" [(ngModel)]="primaryLabel" p-label="Primary Label"> </po-input>

  <po-input class="po-md-6" name="secondaryLabel" [(ngModel)]="secondaryLabel" p-label="Secondary Label"> </po-input>
  <div class="po-row" style="align-items: flex-end">
    <po-input class="po-md-6" name="tagLabel" [(ngModel)]="tagLabel" p-label="Label tag"> </po-input>

    <po-select class="po-md-6 po-mt-2" name="icon" [(ngModel)]="tagIcon" p-label="Icon" [p-options]="iconList">
    </po-select>
  </div>
  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="3"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <po-textarea class="po-md-12" [(ngModel)]="content" name="content" p-label="Content"> </po-textarea>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-widget-labs/sample-po-widget-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import { PoCheckboxGroupOption, PoNotificationService, PoPopupAction, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-widget-labs',
  templateUrl: './sample-po-widget-labs.component.html',
  standalone: false
})
export class SamplePoWidgetLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: string;
  background: string;
  content: string;
  height: number;
  help: string;
  primaryLabel: string;
  properties: Array<string>;
  secondaryLabel: string;
  tagIcon: string;
  tagLabel: string;
  title: string;
  actionPopup: PoPopupAction = { action: null, label: '' };
  myActions: Array<PoPopupAction> = [];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'primaryWidget', label: 'Primary Widget' },
    { value: 'small', label: 'small' }
  ];

  public readonly iconList: Array<PoSelectOption> = [
    { label: 'an an-bluetooth', value: 'an an-bluetooth' },
    { label: 'an an-heart', value: 'an an-heart' },
    { label: 'an an-lightbulb', value: 'an an-lightbulb' },
    { label: 'an an-star', value: 'an an-star' },
    { label: 'an an-gear', value: 'an an-gear' },
    { label: 'an an-globe', value: 'an an-globe' },
    { label: 'fa fa-address-card', value: 'fa fa-address-card' },
    { label: 'fa fa-bell', value: 'fa fa-bell' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeAction(action) {
    this.action = action;
  }

  addAction(action: PoPopupAction) {
    this.myActions = [...this.myActions, { label: action.label, action: this.showAction.bind(this, action.action) }];
    this.actionPopup = { action: null, label: '' };
  }

  restore() {
    this.background = '';
    this.action = '';
    this.content = '';
    this.height = undefined;
    this.help = '';
    this.title = undefined;
    this.primaryLabel = undefined;
    this.properties = [];
    this.myActions = [];
    this.secondaryLabel = undefined;
    this.tagLabel = undefined;
    this.tagIcon = undefined;
    this.actionPopup = { action: null, label: '' };
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-widget-labs"),t(),a(23,"hr")),l&2&&(r(5),P("po-icon "+i.sampleCodeButtonIcon),r(),f(" ",i.sampleCodeButtonLabel,""),r(),s("ngClass",_(4,Me,i.hideSampleCodeTabs)))},dependencies:[A,C,y,w,be],encapsulation:2})}return o})();var ke=["detailsModal"],Ee=(()=>{class o{poNotification=k(I);poTheme=k(ae);detailsModalElement;paymentLink="https://www.google.com.br/search?q=days+to+payment";itemsDetails;titleDetailsModal;typeChart="line";myActions=[{label:"Detail",icon:"an an-align-top",action:this.showAction.bind(this)},{label:"Remove",icon:"an an-trash",type:"danger",action:this.showAction.bind(this)}];options=[{value:"poMultiselect1",label:"Admin"},{value:"poMultiselect2",label:"User"}];columnsDetails=[{property:"dateUpdate",label:"Date update",type:"date"},{property:"statement",label:"Statement",type:"currency"}];itemsAccountDetails=[{dateUpdate:"03-05-2018",statement:"-56.45"},{dateUpdate:"02-05-2018",statement:"-14.99"},{dateUpdate:"02-05-2018",statement:"-657.56"},{dateUpdate:"12-05-2017",statement:"3547.29"}];itemsSavingsDetails=[{dateUpdate:"03-05-2018",statement:"-300"},{dateUpdate:"03-05-2018",statement:"2000"},{dateUpdate:"02-05-2018",statement:"1500"},{dateUpdate:"02-05-2018",statement:"-200"},{dateUpdate:"12-05-2017",statement:"2000"}];get a11Level(){return this.poTheme.getA11yLevel()}openModal(p){switch(p){case"savings":this.titleDetailsModal="Total savings - Details",this.itemsDetails=this.itemsSavingsDetails,this.detailsModalElement.open();break;case"account":this.titleDetailsModal="Total checking account - Details",this.itemsDetails=this.itemsAccountDetails,this.detailsModalElement.open();break}}openExternalLink(p){window.open(p,"_blank")}showAction(){this.poNotification.success("Action clicked")}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=h({type:o,selectors:[["sample-po-widget-finance-dashboard"]],viewQuery:function(l,i){if(l&1&&F(ke,7),l&2){let m;z(m=q())&&(i.detailsModalElement=m.first)}},standalone:!1,decls:42,vars:20,consts:[["detailsModal",""],[1,"po-row"],["p-title","Days to Payment","p-tag","Sales","p-tag-icon","an an-arrow-circle-up","p-help","https://github.com/po-ui/po-angular/stargazers",1,"po-lg-6","po-mt-2",3,"p-height","p-size"],[2,"display","flex","justify-content","flex-end","gap","0.5rem","margin-right","0.5rem"],["p-size","","p-label","Cancel","p-danger",""],["p-size","","p-label","Confirm",3,"p-click"],["p-primary-label","Details","p-title","Total savings",1,"po-lg-3","po-mt-2",3,"p-primary-action","p-height","p-size"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center"],["p-primary-label","Details","p-secondary-label","Edit","p-title","Total checking account","p-disabled","",1,"po-lg-3","po-mt-2",3,"p-primary-action","p-height","p-size"],[1,"po-text-center",2,"font-size","2rem","margin-bottom","0.5rem"],["p-background","../../../assets/graphics/sales-statistics.png",1,"po-md-12","po-lg-4","po-mt-2",3,"p-height","p-size"],[1,"po-text-center",2,"padding-inline","0.5rem"],[2,"margin-bottom","0.5rem","display","inline-block","background-color","black","padding","0.5rem","border-radius","3px","opacity","0.85"],[2,"color","white"],[2,"padding-inline","0.5rem"],["name","multiselect",3,"p-size","p-options"],["p-title","Most used payment type",1,"po-md-12","po-lg-4","po-mt-2",3,"p-size","p-height","p-actions"],["p-tag","Revenue","p-tag-icon","an an-money","p-title","Highest revenue in the month considering Marketing and Sales",1,"po-md-12","po-lg-4","po-mt-2",3,"p-height"],[3,"p-title"],[3,"p-columns","p-items","p-hide-table-search"]],template:function(l,i){if(l&1){let m=V();n(0,"div",1)(1,"po-widget",2)(2,"div"),e(3,"Sales order"),t(),n(4,"div"),e(5,"Scheduled to: "),n(6,"strong"),e(7,"05/04/2018"),t()(),n(8,"div",3),a(9,"po-button",4),n(10,"po-button",5),b("p-click",function(){return c(m),u(i.openExternalLink("https://github.com/po-ui/po-angular/stargazers"))}),t()()(),n(11,"po-widget",6),b("p-primary-action",function(){return c(m),u(i.openModal("savings"))}),n(12,"div",7),e(13,"$5.000,00"),t(),n(14,"div",8),e(15,"Last updated at 18:34"),t()(),n(16,"po-widget",9),b("p-primary-action",function(){return c(m),u(i.openModal("account"))}),n(17,"div",10),e(18,"$2.818,29"),t(),n(19,"div",8),e(20,"Last updated at 08:20"),t()()(),n(21,"div",1)(22,"po-widget",11)(23,"div",12)(24,"div",13)(25,"strong",14),e(26,"Enter the user routine"),t()()(),n(27,"div",15),a(28,"po-multiselect",16),t()(),n(29,"po-widget",17)(30,"div",7),e(31,"Credit card"),t(),n(32,"div",8),e(33,"MasterCard - 5500 0000 0000 0004"),t()(),n(34,"po-widget",18)(35,"div",7),e(36,"$2.000,00"),t(),n(37,"div",8),e(38,"05/03/2018"),t()()(),n(39,"po-modal",19,0),a(41,"po-table",20),t()}l&2&&(r(),s("p-height",200)("p-size",i.a11Level==="AAA"?"medium":"small"),r(7),R("padding-top",i.a11Level==="AA"?"2.5rem":"1rem"),r(3),s("p-height",200)("p-size",i.a11Level==="AAA"?"medium":"small"),r(5),s("p-height",200)("p-size",i.a11Level==="AAA"?"medium":"small"),r(6),s("p-height",200)("p-size",i.a11Level==="AAA"?"medium":"small"),r(6),s("p-size",i.a11Level==="AAA"?"medium":"small")("p-options",i.options),r(),s("p-size",i.a11Level==="AAA"?"medium":"small")("p-height",200)("p-actions",i.myActions),r(5),s("p-height",200),r(5),s("p-title",i.titleDetailsModal),r(2),s("p-columns",i.columnsDetails)("p-items",i.itemsDetails)("p-hide-table-search",!1))},dependencies:[B,re,D,oe,T],encapsulation:2})}return o})();var Le=o=>({"docs-sample-code-tabs":o}),Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=h({type:o,selectors:[["sample-po-widget-finance-dashboard-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Widget - Finance dashboard"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-widget
    class="po-lg-6 po-mt-2"
    p-title="Days to Payment"
    p-tag="Sales"
    p-tag-icon="an an-arrow-circle-up"
    p-help="https://github.com/po-ui/po-angular/stargazers"
    [p-height]="200"
    [p-size]="a11Level === 'AAA' ? 'medium' : 'small'"
  >
    <div>Sales order</div>
    <div>Scheduled to: <strong>05/04/2018</strong></div>
    <div
      [style.padding-top]="a11Level === 'AA' ? '2.5rem' : '1rem'"
      style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-right: 0.5rem"
    >
      <po-button p-size="" p-label="Cancel" p-danger></po-button>
      <po-button
        p-size=""
        p-label="Confirm"
        (p-click)="openExternalLink('https://github.com/po-ui/po-angular/stargazers')"
      ></po-button>
    </div>
  </po-widget>

  <po-widget
    class="po-lg-3 po-mt-2"
    p-primary-label="Details"
    p-title="Total savings"
    (p-primary-action)="openModal('savings')"
    [p-height]="200"
    [p-size]="a11Level === 'AAA' ? 'medium' : 'small'"
  >
    <div class="po-font-subtitle po-text-center">$5.000,00</div>
    <div class="po-text-center">Last updated at 18:34</div>
  </po-widget>

  <po-widget
    class="po-lg-3 po-mt-2"
    p-primary-label="Details"
    p-secondary-label="Edit"
    p-title="Total checking account"
    (p-primary-action)="openModal('account')"
    p-disabled
    [p-height]="200"
    [p-size]="a11Level === 'AAA' ? 'medium' : 'small'"
  >
    <div class="po-text-center" style="font-size: 2rem; margin-bottom: 0.5rem">$2.818,29</div>
    <div class="po-text-center">Last updated at 08:20</div>
  </po-widget>
</div>

<div class="po-row">
  <po-widget
    [p-height]="200"
    p-background="../../../assets/graphics/sales-statistics.png"
    class="po-md-12 po-lg-4 po-mt-2"
    [p-size]="a11Level === 'AAA' ? 'medium' : 'small'"
  >
    <div class="po-text-center" style="padding-inline: 0.5rem">
      <div
        style="
          margin-bottom: 0.5rem;
          display: inline-block;
          background-color: black;
          padding: 0.5rem;
          border-radius: 3px;
          opacity: 0.85;
        "
      >
        <strong style="color: white">Enter the user routine</strong>
      </div>
    </div>
    <div style="padding-inline: 0.5rem">
      <po-multiselect [p-size]="a11Level === 'AAA' ? 'medium' : 'small'" name="multiselect" [p-options]="options">
      </po-multiselect>
    </div>
  </po-widget>

  <po-widget
    [p-size]="a11Level === 'AAA' ? 'medium' : 'small'"
    [p-height]="200"
    class="po-md-12 po-lg-4 po-mt-2"
    p-title="Most used payment type"
    [p-actions]="myActions"
  >
    <div class="po-font-subtitle po-text-center">Credit card</div>
    <div class="po-text-center">MasterCard - 5500 0000 0000 0004</div>
  </po-widget>

  <po-widget
    p-tag="Revenue"
    p-tag-icon="an an-money"
    class="po-md-12 po-lg-4 po-mt-2"
    p-title="Highest revenue in the month considering Marketing and Sales"
    [p-height]="200"
  >
    <div class="po-font-subtitle po-text-center">$2.000,00</div>
    <div class="po-text-center">05/03/2018</div>
  </po-widget>
</div>

<po-modal #detailsModal [p-title]="titleDetailsModal">
  <po-table [p-columns]="columnsDetails" [p-items]="itemsDetails" [p-hide-table-search]="false"> </po-table>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild, inject } from '@angular/core';

import {
  PoModalComponent,
  PoMultiselectOption,
  PoNotificationService,
  PoTableColumn,
  PoThemeService
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-widget-finance-dashboard',
  templateUrl: './sample-po-widget-finance-dashboard.component.html',
  standalone: false
})
export class SamplePoWidgetFinanceDashboardComponent {
  private poNotification = inject(PoNotificationService);
  private poTheme = inject(PoThemeService);

  @ViewChild('detailsModal', { static: true }) detailsModalElement: PoModalComponent;

  paymentLink: string = 'https://www.google.com.br/search?q=days+to+payment';
  itemsDetails: Array<any>;
  titleDetailsModal: string;
  typeChart: string = 'line';
  myActions = [
    { label: 'Detail', icon: 'an an-align-top', action: this.showAction.bind(this) },
    { label: 'Remove', icon: 'an an-trash', type: 'danger', action: this.showAction.bind(this) }
  ];

  options: Array<PoMultiselectOption> = [
    { value: 'poMultiselect1', label: 'Admin' },
    { value: 'poMultiselect2', label: 'User' }
  ];

  public readonly columnsDetails: Array<PoTableColumn> = [
    { property: 'dateUpdate', label: 'Date update', type: 'date' },
    { property: 'statement', label: 'Statement', type: 'currency' }
  ];

  public readonly itemsAccountDetails: Array<any> = [
    { dateUpdate: '03-05-2018', statement: '-56.45' },
    { dateUpdate: '02-05-2018', statement: '-14.99' },
    { dateUpdate: '02-05-2018', statement: '-657.56' },
    { dateUpdate: '12-05-2017', statement: '3547.29' }
  ];

  public readonly itemsSavingsDetails: Array<any> = [
    { dateUpdate: '03-05-2018', statement: '-300' },
    { dateUpdate: '03-05-2018', statement: '2000' },
    { dateUpdate: '02-05-2018', statement: '1500' },
    { dateUpdate: '02-05-2018', statement: '-200' },
    { dateUpdate: '12-05-2017', statement: '2000' }
  ];

  get a11Level() {
    return this.poTheme.getA11yLevel();
  }

  openModal(type) {
    switch (type) {
      case 'savings':
        this.titleDetailsModal = 'Total savings - Details';
        this.itemsDetails = this.itemsSavingsDetails;
        this.detailsModalElement.open();
        break;
      case 'account':
        this.titleDetailsModal = 'Total checking account - Details';
        this.itemsDetails = this.itemsAccountDetails;
        this.detailsModalElement.open();
        break;
    }
  }

  openExternalLink(url) {
    window.open(url, '_blank');
  }

  private showAction(): any {
    this.poNotification.success(\`Action clicked\`);
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-widget-finance-dashboard"),t(),a(23,"hr")),l&2&&(r(5),P("po-icon "+i.sampleCodeButtonIcon),r(),f(" ",i.sampleCodeButtonLabel,""),r(),s("ngClass",_(4,Le,i.hideSampleCodeTabs)))},dependencies:[A,C,y,w,Ee],encapsulation:2})}return o})();function Fe(o,Ce){if(o&1&&(n(0,"li"),e(1),t()),o&2){let p=Ce.$implicit;r(),K(p)}}var ve=(()=>{class o{poModal;help;label;technologies=["Angular","Typescript","React","Babel","Jasmine","Vue"];value;ngOnInit(){this.showAngular()}showAngular(){this.label="Angular",this.value=`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.`,this.help="https://angular.io/"}showJavascriptTechnologies(){this.poModal.open()}showTypescript(){this.label="Typescript",this.value=`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.`,this.help="https://www.typescriptlang.org/"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=h({type:o,selectors:[["sample-po-widget-card"]],viewQuery:function(l,i){if(l&1&&F(D,7),l&2){let m;z(m=q())&&(i.poModal=m.first)}},standalone:!1,decls:9,vars:3,consts:[[1,"po-row"],["p-height","300","p-primary-label","Angular","p-secondary-label","Typescript","p-title","Javascript technologies",1,"po-lg-6",3,"p-primary-action","p-secondary-action","p-title-action","p-help"],[3,"p-label","p-value"],["p-title","Javascript Technologies"],[1,"po-ml-3"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"po-widget",1),b("p-primary-action",function(){return i.showAngular()})("p-secondary-action",function(){return i.showTypescript()})("p-title-action",function(){return i.showJavascriptTechnologies()}),a(2,"po-info",2),t()(),n(3,"po-modal",3),e(4," There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we can mention: "),n(5,"div",4)(6,"ul"),G(7,Fe,2,1,"li",null,J),t()()()),l&2&&(r(),s("p-help",i.help),r(),s("p-label",i.label)("p-value",i.value),r(5),Q(i.technologies))},dependencies:[O,D,T],encapsulation:2})}return o})();var qe=o=>({"docs-sample-code-tabs":o}),xe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=h({type:o,selectors:[["sample-po-widget-card-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Widget - Card"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-widget-card/sample-po-widget-card.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-widget
    class="po-lg-6"
    p-height="300"
    p-primary-label="Angular"
    p-secondary-label="Typescript"
    p-title="Javascript technologies"
    [p-help]="help"
    (p-primary-action)="showAngular()"
    (p-secondary-action)="showTypescript()"
    (p-title-action)="showJavascriptTechnologies()"
  >
    <po-info [p-label]="label" [p-value]="value"> </po-info>
  </po-widget>
</div>

<po-modal p-title="Javascript Technologies">
  There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we
  can mention:

  <div class="po-ml-3">
    <ul>
      @for (technology of technologies; track technology) {
        <li>{ { technology }}</li>
      }
    </ul>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-widget-card/sample-po-widget-card.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import { PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-widget-card',
  templateUrl: './sample-po-widget-card.component.html',
  standalone: false
})
export class SamplePoWidgetCardComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  help: string;
  label: string;
  technologies: Array<string> = ['Angular', 'Typescript', 'React', 'Babel', 'Jasmine', 'Vue'];
  value: string;

  ngOnInit() {
    this.showAngular();
  }

  showAngular() {
    this.label = 'Angular';
    this.value = \`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.\`;
    this.help = 'https://angular.io/';
  }

  showJavascriptTechnologies() {
    this.poModal.open();
  }

  showTypescript() {
    this.label = 'Typescript';
    this.value = \`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.\`;
    this.help = 'https://www.typescriptlang.org/';
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-widget-card"),t(),a(23,"hr")),l&2&&(r(5),P("po-icon "+i.sampleCodeButtonIcon),r(),f(" ",i.sampleCodeButtonLabel,""),r(),s("ngClass",_(4,qe,i.hideSampleCodeTabs)))},dependencies:[A,C,y,w,ve],encapsulation:2})}return o})();var fe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=h({type:o,selectors:[["sample-po-widget-doc"]],standalone:!1,decls:1128,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/grid-system"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/keyboard"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","false"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoWidgetModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-widget"),t()(),n(7,"h3",3),e(8,"Componente"),t(),n(9,"h4",4)(10,"code",5),e(11,"PoWidgetComponent"),t()(),n(12,"div",2)(13,"p"),e(14,"O componente "),n(15,"code"),e(16,"po-widget"),t(),e(17," \xE9 recomendado para exibi\xE7\xE3o de "),n(18,"em"),e(19,"dashboards"),t(),e(20,`, podendo ser utilizado
para incluir v\xE1rios tipos de conte\xFAdo como: gr\xE1ficos, tabelas, grids e imagens.`),t(),n(21,"p"),e(22,`Al\xE9m da exibi\xE7\xE3o de conte\xFAdos, este componente possibilita adicionar a\xE7\xF5es e um link
para ajuda, como tamb\xE9m possibilita ser utilizado com ou sem sombra.`),t(),n(23,"p"),e(24,"Para controlar sua largura, \xE9 poss\xEDvel utilizar o "),n(25,"a",6),e(26,"Grid System"),t(),e(27,` para um maior
controle de seu redimensionamento, assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),t(),n(28,"h4"),e(29,"Boas pr\xE1ticas"),t(),n(30,"p"),e(31,"Utilize um tamanho m\xEDnimo de largura de aproximadamente "),n(32,"code"),e(33,"18.75rem"),t(),e(34," no componente."),t(),n(35,"h4"),e(36,"Acessibilidade tratada no componente"),t(),n(37,"p"),e(38,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),t(),n(39,"ul")(40,"li"),e(41,"Utiliza medidas relativas, para se adequar \xE0s prefer\xEAncias e necessidades de quem for utilizar o sistema."),t(),n(42,"li"),e(43,"Desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o na interface por tecnologias assistivas. (WCAG "),n(44,"a",7),e(45,"4.1.2: Name, Role, Value"),t(),e(46,")"),t(),n(47,"li"),e(48,"O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros elementos da tela. (WCAG "),n(49,"a",8),e(50,"2.4.12: Focus Appearance"),t(),e(51,")"),t(),n(52,"li"),e(53,"Quando selecion\xE1vel, prev\xEA intera\xE7\xE3o por teclado, podendo ser selecionado atrav\xE9s da tecla space (WCAG "),n(54,"a",9),e(55,"2.4.1 - Keyboard"),t(),e(56,")"),t()(),n(57,"h4"),e(58,"Tokens customiz\xE1veis"),t(),n(59,"p"),e(60,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(61,"blockquote")(62,"p"),e(63,"Para maiores informa\xE7\xF5es, acesse o guia "),n(64,"a",10),e(65,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(66,"."),t()(),n(67,"table")(68,"thead")(69,"tr")(70,"th"),e(71,"Propriedade"),t(),n(72,"th"),e(73,"Descri\xE7\xE3o"),t(),n(74,"th"),e(75,"Valor Padr\xE3o"),t()()(),n(76,"tbody")(77,"tr")(78,"td")(79,"strong"),e(80,"Default Values"),t()(),a(81,"td")(82,"td"),t(),n(83,"tr")(84,"td")(85,"code"),e(86,"--font-family"),t()(),n(87,"td"),e(88,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(89,"td")(90,"code"),e(91,"var(--font-family-theme) "),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--font-size"),t()(),n(96,"td"),e(97,"Tamanho da fonte"),t(),n(98,"td")(99,"code"),e(100,"var(--font-size-sm)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--font-weight"),t()(),n(105,"td"),e(106,"Peso da fonte"),t(),n(107,"td")(108,"code"),e(109,"var(--font-weight-bold)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--font-color"),t()(),n(114,"td"),e(115,"Cor da fonte"),t(),n(116,"td")(117,"code"),e(118,"var(--color-neutral-dark-95)"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--padding"),t(),e(123," - "),n(124,"code"),e(125,"@deprecated 21.x.x"),t()(),n(126,"td"),e(127,"Preenchimento do componente"),t(),n(128,"td")(129,"code"),e(130,"1rem"),t()()(),n(131,"tr")(132,"td")(133,"code"),e(134,"--padding-header"),t()(),n(135,"td"),e(136,"Preenchimento do header"),t(),n(137,"td")(138,"code"),e(139,"var(--spacing-sm) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)"),t()()(),n(140,"tr")(141,"td")(142,"code"),e(143,"--padding-body"),t()(),n(144,"td"),e(145,"Preenchimento do body"),t(),n(146,"td")(147,"code"),e(148,"var(--spacing-xs) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)"),t()()(),n(149,"tr")(150,"td")(151,"code"),e(152,"--padding-footer"),t()(),n(153,"td"),e(154,"Preenchimento do footer"),t(),n(155,"td")(156,"code"),e(157,"var(--spacing-xs) var(--spacing-sm) var(--spacing-sm) var(--spacing-sm)"),t()()(),n(158,"tr")(159,"td")(160,"code"),e(161,"--border-radius"),t()(),n(162,"td"),e(163,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),t(),n(164,"td")(165,"code"),e(166,"var(--border-radius-md)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--border-width"),t()(),n(171,"td"),e(172,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),t(),n(173,"td")(174,"code"),e(175,"var(--border-width-sm)"),t()()(),n(176,"tr")(177,"td")(178,"code"),e(179,"--border-color"),t()(),n(180,"td"),e(181,"Cor da borda"),t(),n(182,"td")(183,"code"),e(184,"var(--color-neutral-light-20)"),t()()(),n(185,"tr")(186,"td")(187,"code"),e(188,"--background"),t()(),n(189,"td"),e(190,"Cor de background"),t(),n(191,"td")(192,"code"),e(193,"var(--color-neutral-light-00)"),t()()(),n(194,"tr")(195,"td")(196,"code"),e(197,"--shadow"),t()(),n(198,"td"),e(199,"Cont\xE9m o valor da sombra do elemento"),t(),n(200,"td")(201,"code"),e(202,"var(--shadow-md)"),t()()(),n(203,"tr")(204,"td")(205,"strong"),e(206,"Hover"),t()(),a(207,"td")(208,"td"),t(),n(209,"tr")(210,"td")(211,"code"),e(212,"--border-color-hover"),t()(),n(213,"td"),e(214,"Cor da borda no estado hover"),t(),n(215,"td")(216,"code"),e(217,"var(--color-brand-01-dark)"),t()()(),n(218,"tr")(219,"td")(220,"strong"),e(221,"Focused"),t()(),a(222,"td")(223,"td"),t(),n(224,"tr")(225,"td")(226,"code"),e(227,"--color-focused"),t()(),n(228,"td"),e(229,"Cor principal no estado de focus"),t(),n(230,"td")(231,"code"),e(232,"var(--color-action-default)"),t()()(),n(233,"tr")(234,"td")(235,"code"),e(236,"--outline-color-focused"),t(),e(237," \xA0"),t(),n(238,"td"),e(239,"Cor do outline do estado de focus"),t(),n(240,"td")(241,"code"),e(242,"var(--color-action-focus)"),t()()()()()(),n(243,"div",11)(244,"h4",12),e(245,"Seletor"),t(),n(246,"pre",13),e(247,`<po-widget
    p-actions="Array<PoPopupAction>"
    p-background="string"
    (p-click)="EventEmitter"
    p-danger-primary-action="false"
    p-danger-secondary-action="false"
    p-disabled="boolean"
    p-height="number"
    p-help="string"
    p-kind-primary-action="string"
    p-kind-secondary-action="string"
    p-no-shadow="boolean"
    (p-on-disabled)="EventEmitter"
    p-primary="boolean"
    (p-primary-action)="EventEmitter"
    p-primary-label="string"
    (p-secondary-action)="EventEmitter"
    p-secondary-label="string"
    (p-setting)="EventEmitter"
    p-size="string"
    p-tag-icon="string | TemplateRef<void>"
    p-tag="string"
    p-tag-type="PoTagType | string"
    p-title="string"
    (p-title-action)="EventEmitter" >
</po-widget>
`),t()(),n(248,"h4",14),e(249,"Propriedades"),t(),n(250,"table",15)(251,"tr",16)(252,"th",17),e(253,"Nome"),t(),n(254,"th",17),e(255,"Tipo"),t(),n(256,"th",17),e(257,"Padr\xE3o"),t(),n(258,"th",17),e(259,"Descri\xE7\xE3o"),t()(),n(260,"tr",18)(261,"td",19)(262,"div",20)(263,"span",21),e(264," p-actions"),a(265,"br"),t()()(),n(266,"td",22)(267,"code",23),e(268,"Array<PoPopupAction>"),t()(),n(269,"td",24),e(270,"-"),t(),n(271,"td",25)(272,"em")(273,"strong"),e(274,"(opcional)"),t()(),n(275,"p"),e(276,`Lista de a\xE7\xF5es exibidas no header do componente.
As propriedades das a\xE7\xF5es seguem a interface `),n(277,"code"),e(278,"PoPopupAction"),t(),e(279,"."),t()()(),n(280,"tr",18)(281,"td",19)(282,"div",20)(283,"span",21),e(284," p-background"),a(285,"br"),t()()(),n(286,"td",22)(287,"code",26),e(288,"string"),t()(),n(289,"td",24),e(290,"-"),t(),n(291,"td",25)(292,"em")(293,"strong"),e(294,"(opcional)"),t()(),n(295,"p"),e(296,"Define uma imagem de fundo."),t(),n(297,"blockquote")(298,"p"),e(299,"Se a imagem escolhida intervir na legibilidade do texto contido no "),n(300,"code"),e(301,"p-widget"),t(),e(302,`,
pode-se utilizar a propriedade `),n(303,"code"),e(304,"p-primary"),t(),e(305," em conjunto para que os textos fiquem na cor branca."),t()()()(),n(306,"tr",18)(307,"td",19)(308,"div",27)(309,"span",28),e(310," (p-click)"),a(311,"br"),t()()(),n(312,"td",22)(313,"code",29),e(314,"EventEmitter"),t()(),n(315,"td",24),e(316,"-"),t(),n(317,"td",25)(318,"em")(319,"strong"),e(320,"(opcional)"),t()(),n(321,"p"),e(322,"Evento disparado quando o usu\xE1rio clicar no componente."),t(),n(323,"blockquote")(324,"p"),e(325,"Quando este evento est\xE1 em uso, uma sombra (shadow) \xE9 aplicada automaticamente ao componente."),t()()()(),n(326,"tr",18)(327,"td",19)(328,"div",20)(329,"span",21),e(330," p-danger-primary-action"),a(331,"br"),t()()(),n(332,"td",22)(333,"code",30),e(334,"false"),t()(),n(335,"td",24)(336,"p")(337,"code"),e(338,"false"),t()()(),n(339,"td",25)(340,"em")(341,"strong"),e(342,"(opcional)"),t()(),n(343,"p"),e(344,"Caso verdadeiro o bot\xE3o da a\xE7\xE3o "),n(345,"code"),e(346,"p-primary-label"),t(),e(347," ativar\xE1 o modo "),n(348,"code"),e(349,"danger"),t(),e(350,"."),t(),n(351,"blockquote")(352,"p"),e(353,"Incompat\xEDvel com o tipo "),n(354,"strong"),e(355,"tertiary"),t(),e(356," da propriedade "),n(357,"code"),e(358,"p-kind-primary-action"),t(),e(359,"."),t()()()(),n(360,"tr",18)(361,"td",19)(362,"div",20)(363,"span",21),e(364," p-danger-secondary-action"),a(365,"br"),t()()(),n(366,"td",22)(367,"code",30),e(368,"false"),t()(),n(369,"td",24)(370,"p")(371,"code"),e(372,"false"),t()()(),n(373,"td",25)(374,"em")(375,"strong"),e(376,"(opcional)"),t()(),n(377,"p"),e(378,"Caso verdadeiro o bot\xE3o da a\xE7\xE3o "),n(379,"code"),e(380,"p-secondary-label"),t(),e(381," ativar\xE1 o modo "),n(382,"code"),e(383,"danger"),t(),e(384,"."),t(),n(385,"blockquote")(386,"p"),e(387,"Incompat\xEDvel com o tipo "),n(388,"strong"),e(389,"tertiary"),t(),e(390," da propriedade "),n(391,"code"),e(392,"p-kind-primary-action"),t(),e(393,"."),t()()()(),n(394,"tr",18)(395,"td",19)(396,"div",20)(397,"span",21),e(398," p-disabled"),a(399,"br"),t()()(),n(400,"td",22)(401,"code",31),e(402,"boolean"),t()(),n(403,"td",24)(404,"p")(405,"code"),e(406,"false"),t()()(),n(407,"td",25)(408,"em")(409,"strong"),e(410,"(opcional)"),t()(),n(411,"p"),e(412,"Desabilita o componente."),t()()(),n(413,"tr",18)(414,"td",19)(415,"div",20)(416,"span",21),e(417," p-height"),a(418,"br"),t()()(),n(419,"td",22)(420,"code",32),e(421,"number"),t()(),n(422,"td",24),e(423,"-"),t(),n(424,"td",25)(425,"em")(426,"strong"),e(427,"(opcional)"),t()(),n(428,"p"),e(429,"Define a altura do componente."),t(),n(430,"blockquote")(431,"p"),e(432,"Caso n\xE3o seja informado valor, a propriedade ir\xE1 assumir o tamanho do conte\xFAdo."),t()()()(),n(433,"tr",18)(434,"td",19)(435,"div",20)(436,"span",21),e(437," p-help"),a(438,"br"),t()()(),n(439,"td",22)(440,"code",26),e(441,"string"),t()(),n(442,"td",24),e(443,"-"),t(),n(444,"td",25)(445,"em")(446,"strong"),e(447,"(opcional)"),t()(),n(448,"p"),e(449,"Link de ajuda inclu\xEDdo no menu de a\xE7\xF5es do header."),t()()(),n(450,"tr",18)(451,"td",19)(452,"div",20)(453,"span",21),e(454," p-kind-primary-action"),a(455,"br"),t()()(),n(456,"td",22)(457,"code",26),e(458,"string"),t()(),n(459,"td",24)(460,"p")(461,"code"),e(462,"tertiary"),t()()(),n(463,"td",25)(464,"em")(465,"strong"),e(466,"(opcional)"),t()(),n(467,"p"),e(468,"Define o estilo do bot\xE3o da a\xE7\xE3o "),n(469,"code"),e(470,"p-primary-label"),t(),e(471,", conforme o enum "),n(472,"code"),e(473,"PoButtonKind"),t(),e(474,"."),t()()(),n(475,"tr",18)(476,"td",19)(477,"div",20)(478,"span",21),e(479," p-kind-secondary-action"),a(480,"br"),t()()(),n(481,"td",22)(482,"code",26),e(483,"string"),t()(),n(484,"td",24)(485,"p")(486,"code"),e(487,"tertiary"),t()()(),n(488,"td",25)(489,"em")(490,"strong"),e(491,"(opcional)"),t()(),n(492,"p"),e(493,"Define o estilo do bot\xE3o da a\xE7\xE3o "),n(494,"code"),e(495,"p-secondary-label"),t(),e(496,", conforme o enum "),n(497,"code"),e(498,"PoButtonKind"),t(),e(499,"."),t()()(),n(500,"tr",18)(501,"td",19)(502,"div",20)(503,"span",21),e(504," p-no-shadow"),a(505,"br"),t()()(),n(506,"td",22)(507,"code",31),e(508,"boolean"),t()(),n(509,"td",24)(510,"p")(511,"code"),e(512,"true"),t()()(),n(513,"td",25)(514,"em")(515,"strong"),e(516,"(opcional)"),t()(),n(517,"p"),e(518,"Desabilita a sombra do componente quando o mesmo for clic\xE1vel."),t(),n(519,"blockquote")(520,"p"),e(521,"A sombra \xE9 exibida por padr\xE3o apenas quando o evento "),n(522,"code"),e(523,"p-click"),t(),e(524," est\xE1 definido."),t()()()(),n(525,"tr",18)(526,"td",19)(527,"div",27)(528,"span",28),e(529," (p-on-disabled)"),a(530,"br"),t()()(),n(531,"td",22)(532,"code",29),e(533,"EventEmitter"),t()(),n(534,"td",24),e(535,"-"),t(),n(536,"td",25)(537,"em")(538,"strong"),e(539,"(opcional)"),t()(),n(540,"p"),e(541,"Evento disparado quando a propriedade "),n(542,"code"),e(543,"p-disabled"),t(),e(544," for alterada."),t()()(),n(545,"tr",18)(546,"td",19)(547,"div",20)(548,"span",21),e(549," p-primary"),a(550,"br"),t()()(),n(551,"td",22)(552,"code",31),e(553,"boolean"),t()(),n(554,"td",24)(555,"p")(556,"code"),e(557,"false"),t()()(),n(558,"td",25)(559,"em")(560,"strong"),e(561,"(opcional)"),t()(),n(562,"p"),e(563,"Op\xE7\xE3o para que o "),n(564,"code"),e(565,"po-widget"),t(),e(566," fique em destaque."),t()()(),n(567,"tr",18)(568,"td",19)(569,"div",27)(570,"span",28),e(571," (p-primary-action)"),a(572,"br"),t()()(),n(573,"td",22)(574,"code",29),e(575,"EventEmitter"),t()(),n(576,"td",24),e(577,"-"),t(),n(578,"td",25)(579,"em")(580,"strong"),e(581,"(opcional)"),t()(),n(582,"p"),e(583,"Evento disparado ao clicar na a\xE7\xE3o "),n(584,"code"),e(585,"p-primary-label"),t(),e(586,"."),t()()(),n(587,"tr",18)(588,"td",19)(589,"div",20)(590,"span",21),e(591," p-primary-label"),a(592,"br"),t()()(),n(593,"td",22)(594,"code",26),e(595,"string"),t()(),n(596,"td",24),e(597,"-"),t(),n(598,"td",25)(599,"em")(600,"strong"),e(601,"(opcional)"),t()(),n(602,"p"),e(603,"Define o label e exibe a a\xE7\xE3o prim\xE1ria no footer do componente."),t()()(),n(604,"tr",18)(605,"td",19)(606,"div",27)(607,"span",28),e(608," (p-secondary-action)"),a(609,"br"),t()()(),n(610,"td",22)(611,"code",29),e(612,"EventEmitter"),t()(),n(613,"td",24),e(614,"-"),t(),n(615,"td",25)(616,"em")(617,"strong"),e(618,"(opcional)"),t()(),n(619,"p"),e(620,"Evento disparado ao clicar na a\xE7\xE3o "),n(621,"code"),e(622,"p-secondary-label"),t(),e(623,"."),t()()(),n(624,"tr",18)(625,"td",19)(626,"div",20)(627,"span",21),e(628," p-secondary-label"),a(629,"br"),t()()(),n(630,"td",22)(631,"code",26),e(632,"string"),t()(),n(633,"td",24),e(634,"-"),t(),n(635,"td",25)(636,"em")(637,"strong"),e(638,"(opcional)"),t()(),n(639,"p"),e(640,"Define o label e exibe a a\xE7\xE3o secund\xE1ria no footer do componente."),t(),n(641,"blockquote")(642,"p"),e(643,"Exibida apenas quando "),n(644,"code"),e(645,"p-primary-label"),t(),e(646," estiver definida."),t()()()(),n(647,"tr",18)(648,"td",19)(649,"div",27)(650,"span",28),e(651," (p-setting)"),a(652,"br"),t()()(),n(653,"td",22)(654,"code",29),e(655,"EventEmitter"),t()(),n(656,"td",24),e(657,"-"),t(),n(658,"td",25)(659,"em")(660,"strong"),e(661,"(opcional)"),t()(),n(662,"p"),e(663,"Evento disparado ao clicar em "),n(664,"strong"),e(665,"Configura\xE7\xF5es"),t(),e(666," inclu\xEDdo no menu de a\xE7\xF5es do header."),t()()(),n(667,"tr",18)(668,"td",19)(669,"div",20)(670,"span",21),e(671," p-size"),a(672,"br"),t()()(),n(673,"td",22)(674,"code",26),e(675,"string"),t()(),n(676,"td",24)(677,"p")(678,"code"),e(679,"medium"),t()()(),n(680,"td",25)(681,"em")(682,"strong"),e(683,"(opcional)"),t()(),n(684,"p"),e(685,"Define o tamanho dos bot\xF5es do componente:"),t(),n(686,"ul")(687,"li")(688,"code"),e(689,"small"),t(),e(690,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(691,"li")(692,"code"),e(693,"medium"),t(),e(694,": altura de 44px."),t()(),n(695,"blockquote")(696,"p"),e(697,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(698,"code"),e(699,"medium"),t(),e(700,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(701,"a",33),e(702,"po-theme"),t(),e(703,"."),t()()()(),n(704,"tr",18)(705,"td",19)(706,"div",20)(707,"span",21),e(708," p-tag-icon"),a(709,"br"),t()()(),n(710,"td",22)(711,"code",26),e(712,"string "),t(),n(713,"code",34),e(714," TemplateRef<void>"),t()(),n(715,"td",24),e(716,"-"),t(),n(717,"td",25)(718,"em")(719,"strong"),e(720,"(opcional)"),t()(),n(721,"p"),e(722,"Define o \xEDcone exibido ao lado do label da "),n(723,"code"),e(724,"p-tag"),t(),e(725,"."),t(),n(726,"p"),e(727,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(728,"a",35),e(729,"Biblioteca de \xEDcones PO UI"),t(),e(730,", conforme exemplo:"),t(),n(731,"pre")(732,"code"),e(733,`<po-widget p-tag-icon="an an-user"></po-widget>
`),t()(),n(734,"p"),e(735,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(736,"em"),e(737,"Font Awesome"),t(),e(738,`, desde que a biblioteca
esteja carregada no projeto:`),t(),n(739,"pre")(740,"code"),e(741,`<po-widget p-tag-icon="fa fa-podcast"></po-widget>
`),t()(),n(742,"p"),e(743,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(744,"code"),e(745,"TemplateRef"),t(),e(746,", conforme exemplo abaixo:"),t(),n(747,"pre")(748,"code"),e(749,`<po-widget [p-tag-icon]="template"></po-widget>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),t()(),n(750,"blockquote")(751,"p"),e(752,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(753,"code"),e(754,"font-size: inherit"),t(),e(755," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(756,"tr",18)(757,"td",19)(758,"div",20)(759,"span",21),e(760," p-tag"),a(761,"br"),t()()(),n(762,"td",22)(763,"code",26),e(764,"string"),t()(),n(765,"td",24),e(766,"-"),t(),n(767,"td",25)(768,"em")(769,"strong"),e(770,"(opcional)"),t()(),n(771,"p"),e(772,"Label da tag exibida no header."),t(),n(773,"blockquote")(774,"p"),e(775,`Quando a tag atingir uma largura m\xE1xima de 15rem (240px), ser\xE1 truncado com retic\xEAncias.
O conte\xFAdo completo poder\xE1 ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),t()()()(),n(776,"tr",18)(777,"td",19)(778,"div",20)(779,"span",21),e(780," p-tag-type"),a(781,"br"),t()()(),n(782,"td",22)(783,"code",36),e(784,"PoTagType "),t(),n(785,"code",26),e(786," string"),t()(),n(787,"td",24)(788,"p")(789,"code"),e(790,"success"),t()()(),n(791,"td",25)(792,"em")(793,"strong"),e(794,"(opcional)"),t()(),n(795,"p"),e(796,"Define o tipo da "),n(797,"code"),e(798,"p-tag"),t(),e(799,", conforme o enum "),n(800,"strong"),e(801,"PoTagType"),t(),e(802,"."),t(),n(803,"p"),e(804,"Valores v\xE1lidos:"),t(),n(805,"ul")(806,"li")(807,"code"),e(808,"success"),t(),e(809,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),t(),n(810,"li")(811,"code"),e(812,"warning"),t(),e(813,": cor amarela que representa aviso ou advert\xEAncia."),t(),n(814,"li")(815,"code"),e(816,"danger"),t(),e(817,": cor vermelha para erro ou aviso cr\xEDtico."),t(),n(818,"li")(819,"code"),e(820,"info"),t(),e(821,": cor azul claro que caracteriza conte\xFAdo informativo."),t(),n(822,"li")(823,"code"),e(824,"neutral"),t(),e(825,": cor cinza claro para uso geral."),t()()()(),n(826,"tr",18)(827,"td",19)(828,"div",20)(829,"span",21),e(830," p-title"),a(831,"br"),t()()(),n(832,"td",22)(833,"code",26),e(834,"string"),t()(),n(835,"td",24),e(836,"-"),t(),n(837,"td",25)(838,"em")(839,"strong"),e(840,"(opcional)"),t()(),n(841,"p"),e(842,"T\xEDtulo do componente."),t(),n(843,"blockquote")(844,"p"),e(845,`Quando o conte\xFAdo exceder o espa\xE7o dispon\xEDvel, o texto ser\xE1 truncado com retic\xEAncias. O conte\xFAdo completo poder\xE1
ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),t()()()(),n(846,"tr",18)(847,"td",19)(848,"div",27)(849,"span",28),e(850," (p-title-action)"),a(851,"br"),t()()(),n(852,"td",22)(853,"code",29),e(854,"EventEmitter"),t()(),n(855,"td",24),e(856,"-"),t(),n(857,"td",25)(858,"em")(859,"strong"),e(860,"(opcional)"),t()(),n(861,"p"),e(862,"Evento disparado ao clicar no t\xEDtulo definido em "),n(863,"code"),e(864,"p-title"),t(),e(865,"."),t()()()(),n(866,"h3"),e(867,"Interfaces"),t(),n(868,"h4",37)(869,"code",5),e(870,"PoPopupAction"),t()(),n(871,"div",2)(872,"p"),e(873,"Interface para lista de a\xE7\xF5es do componente."),t()(),n(874,"h4",14),e(875,"Propriedades"),t(),n(876,"table",15)(877,"tr",16)(878,"th",17),e(879,"Nome"),t(),n(880,"th",17),e(881,"Tipo"),t(),n(882,"th",17),e(883,"Descri\xE7\xE3o"),t()(),n(884,"tr",18)(885,"td",19)(886,"div",20)(887,"span",21),e(888," action"),a(889,"br"),t()()(),n(890,"td",22)(891,"code",38),e(892,"Function"),t()(),n(893,"td",25)(894,"em")(895,"strong"),e(896,"(opcional)"),t()(),n(897,"p"),e(898,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),n(899,"blockquote")(900,"p"),e(901,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),n(902,"em"),e(903,"bind"),t(),e(904,"."),t()(),n(905,"p"),e(906,"Exemplo: "),n(907,"code"),e(908,"action: this.myFunction.bind(this)"),t()()()(),n(909,"tr",18)(910,"td",19)(911,"div",20)(912,"span",21),e(913," disabled"),a(914,"br"),t()()(),n(915,"td",22)(916,"code",31),e(917,"boolean "),t(),n(918,"code",38),e(919," Function"),t()(),n(920,"td",25)(921,"em")(922,"strong"),e(923,"(opcional)"),t()(),n(924,"p"),e(925,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),n(926,"p"),e(927,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),n(928,"tr",18)(929,"td",19)(930,"div",20)(931,"span",21),e(932," icon"),a(933,"br"),t()()(),n(934,"td",22)(935,"code",26),e(936,"string "),t(),n(937,"code",34),e(938," TemplateRef<void>"),t()(),n(939,"td",25)(940,"em")(941,"strong"),e(942,"(opcional)"),t()(),n(943,"p"),e(944,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),n(945,"p"),e(946,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(947,"a",35),e(948,"Biblioteca de \xEDcones"),t(),e(949,". conforme exemplo abaixo:"),t(),n(950,"pre")(951,"code"),e(952,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),t()(),n(953,"p"),e(954,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),n(955,"pre")(956,"code"),e(957,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),t()(),n(958,"p"),e(959,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(960,"code"),e(961,"TemplateRef"),t(),e(962,`, conforme exemplo abaixo:
component.html:`),t(),n(963,"pre")(964,"code"),e(965,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),t()(),n(966,"p"),e(967,"component.ts:"),t(),n(968,"pre")(969,"code"),e(970,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),t()()()(),n(971,"tr",18)(972,"td",19)(973,"div",20)(974,"span",21),e(975," label"),a(976,"br"),t()()(),n(977,"td",22)(978,"code",26),e(979,"string"),t()(),n(980,"td",25)(981,"p"),e(982,"R\xF3tulo da a\xE7\xE3o."),t()()(),n(983,"tr",18)(984,"td",19)(985,"div",20)(986,"span",21),e(987," selected"),a(988,"br"),t()()(),n(989,"td",22)(990,"code",31),e(991,"boolean"),t()(),n(992,"td",25)(993,"em")(994,"strong"),e(995,"(opcional)"),t()(),n(996,"p"),e(997,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),n(998,"tr",18)(999,"td",19)(1e3,"div",20)(1001,"span",21),e(1002," separator"),a(1003,"br"),t()()(),n(1004,"td",22)(1005,"code",31),e(1006,"boolean"),t()(),n(1007,"td",25)(1008,"em")(1009,"strong"),e(1010,"(opcional)"),t()(),n(1011,"p"),e(1012,"Atribui uma linha separadora acima do item."),t()()(),n(1013,"tr",18)(1014,"td",19)(1015,"div",20)(1016,"span",21),e(1017," type"),a(1018,"br"),t()()(),n(1019,"td",22)(1020,"code",26),e(1021,"string"),t()(),n(1022,"td",25)(1023,"em")(1024,"strong"),e(1025,"(opcional)"),t()(),n(1026,"p"),e(1027,"Define a cor do item, sendo "),n(1028,"code"),e(1029,"default"),t(),e(1030," o padr\xE3o."),t(),n(1031,"p"),e(1032,"Valores v\xE1lidos:"),t(),n(1033,"ul")(1034,"li")(1035,"code"),e(1036,"default"),t()(),n(1037,"li")(1038,"code"),e(1039,"danger"),t(),e(1040," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),n(1041,"tr",18)(1042,"td",19)(1043,"div",20)(1044,"span",21),e(1045," url"),a(1046,"br"),t()()(),n(1047,"td",22)(1048,"code",26),e(1049,"string"),t()(),n(1050,"td",25)(1051,"em")(1052,"strong"),e(1053,"(opcional)"),t()(),n(1054,"p"),e(1055,"URL utilizada no redirecionamento das p\xE1ginas."),t()()(),n(1056,"tr",18)(1057,"td",19)(1058,"div",20)(1059,"span",21),e(1060," visible"),a(1061,"br"),t()()(),n(1062,"td",22)(1063,"code",31),e(1064,"boolean "),t(),n(1065,"code",38),e(1066," Function"),t()(),n(1067,"td",25)(1068,"em")(1069,"strong"),e(1070,"(opcional)"),t()(),n(1071,"p"),e(1072,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),n(1073,"blockquote")(1074,"p"),e(1075,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),n(1076,"p"),e(1077,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),n(1078,"ul")(1079,"li")(1080,"p"),e(1081,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),n(1082,"li")(1083,"p"),e(1084,"Informar diretamente um valor booleano."),t()()()()()(),n(1085,"h3"),e(1086,"Enums"),t(),n(1087,"h4",4)(1088,"code",5),e(1089,"PoButtonKind"),t()(),n(1090,"div",2)(1091,"p"),e(1092,"Estilos dispon\xEDveis do button."),t()(),n(1093,"h4",14),e(1094,"Propriedades"),t(),n(1095,"table",15)(1096,"tr",16)(1097,"th",17),e(1098,"Nome"),t(),n(1099,"th",17),e(1100,"Descri\xE7\xE3o"),t()(),n(1101,"tr",18)(1102,"td",19)(1103,"div",20)(1104,"span",21),e(1105," primary"),a(1106,"br"),t()()(),n(1107,"td",25)(1108,"p"),e(1109,"Estilo prim\xE1rio, usado para a\xE7\xF5es principais que requerem maior destaque."),t()()(),n(1110,"tr",18)(1111,"td",19)(1112,"div",20)(1113,"span",21),e(1114," secondary"),a(1115,"br"),t()()(),n(1116,"td",25)(1117,"p"),e(1118,"Estilo secund\xE1rio, usado como padr\xE3o, para a\xE7\xF5es comuns."),t()()(),n(1119,"tr",18)(1120,"td",19)(1121,"div",20)(1122,"span",21),e(1123," tertiary"),a(1124,"br"),t()()(),n(1125,"td",25)(1126,"p"),e(1127,"Estilo terci\xE1rio, ideal para a\xE7\xF5es menos importantes, sem fundo preenchido."),t()()()()())},dependencies:[C],encapsulation:2})}return o})();var ye=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||o)(U(te),U(ne))};static \u0275cmp=h({type:o,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Widget",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),b("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-widget-doc"),t(),n(4,"po-tab",3),b("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-widget-basic-view")(6,"sample-po-widget-labs-view")(7,"sample-po-widget-finance-dashboard-view")(8,"sample-po-widget-card-view"),t()()()),l&2&&(s("p-actions",i.actions),r(2),s("p-active",i.activeTab==="doc"),r(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[se,y,w,ge,he,Se,xe,fe],encapsulation:2})}return o})();var Oe=[{path:"",component:ye}],we=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=L({type:o});static \u0275inj=W({imports:[j.forChild(Oe),j]})}return o})();var wt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=L({type:o});static \u0275inj=W({imports:[ce,we]})}return o})();export{wt as DocPoWidgetModule};
