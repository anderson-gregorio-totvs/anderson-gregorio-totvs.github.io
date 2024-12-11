import{$ as O,$a as A,Ca as Y,Cd as D,Da as Z,Ea as K,F as c,Fa as q,Fc as ge,G as u,Ga as i,Hd as T,Ia as V,Id as j,Jd as k,Ka as v,La as S,Lb as oe,Ma as E,Mb as ae,Na as X,Nb as le,Oa as W,Ob as re,Od as Ee,Pa as M,Pb as se,Qa as ee,Rd as we,T as s,U as C,Ua as te,Va as ie,Wb as pe,Xd as y,Yb as me,Yd as x,Zb as R,_ as g,a as G,ad as B,b as $,dc as de,ea as L,gc as ce,ha as m,ib as ne,ka as _,md as be,na as e,oa as t,oc as ue,pa as r,re as P,sd as ve,se as fe,ta as H,ua as b,x as J,y as I,ya as Q,yd as Se,zc as he}from"./chunk-V5DQALWN.js";var De=()=>({name:"Registro 1",email:"register@po-ui.com"}),Te=()=>({name:"Registro 2",email:"register2@po-ui.com"}),ke=(a,w)=>[a,w];function Fe(a,w){if(a&1&&(e(0,"div",2),r(1,"po-info",3),t()),a&2){let o=w.$implicit;s(),m("p-value",o.email)}}var Ce=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-list-view-basic"]],standalone:!1,decls:2,vars:6,consts:[["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],[1,"po-row"],["p-label","Email",1,"po-md-12",3,"p-value"]],template:function(l,n){l&1&&(e(0,"po-list-view",0),L(1,Fe,2,1,"ng-template",1),t()),l&2&&m("p-items",ee(3,ke,W(1,De),W(2,Te)))},dependencies:[D,k,T],encapsulation:2})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-list-view-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(r(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO List View Basic"),t(),e(4,"a",2),b("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-list-view-basic/sample-po-list-view-basic.component.html"),t(),e(13,"pre",7),i(14,`<po-list-view
  p-property-title="name"
  [p-items]="[
    { name: 'Registro 1', email: 'register@po-ui.com' },
    { name: 'Registro 2', email: 'register2@po-ui.com' }
  ]"
>
  <ng-template p-list-view-content-template let-item>
    <div class="po-row">
      <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>
</po-list-view>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-list-view-basic/sample-po-list-view-basic.component.ts"),t(),e(19,"pre",9),i(20,`import { Component } from '@angular/core';

@Component({
    selector: 'sample-po-list-view-basic',
    templateUrl: './sample-po-list-view-basic.component.html',
    standalone: false
})
export class SamplePoListViewBasicComponent {}
`),t()()()()(),e(21,"div",10),r(22,"sample-po-list-view-basic"),t(),r(23,"hr")),l&2&&(s(5),_("po-icon "+n.sampleCodeButtonIcon),s(),V(" ",n.sampleCodeButtonLabel,""),s(),m("ngClass",M(4,Oe,n.hideSampleCodeTabs)))},dependencies:[A,P,y,x,Ce],encapsulation:2})}return a})();function Be(a,w){if(a&1&&(e(0,"div",5),r(1,"po-info",21)(2,"po-info",22)(3,"po-info",23)(4,"po-info",24),t()),a&2){let o=w.$implicit;s(),m("p-value",o.name),s(),m("p-value",o.email),s(),m("p-value",o.location),s(),m("p-value",o.phone)}}function je(a,w){if(a&1&&(e(0,"div",5),r(1,"po-info",25)(2,"po-info",26),t()),a&2){let o=w.$implicit;s(),m("p-value",o.company),s(),m("p-value",o.zipCode)}}var xe=(()=>{class a{poNotification;action;actions;customLiterals;height;items;literals;properties;propertyLink;propertyLinkValue;propertyTitle;titleAction;propertiesOptions=[{value:"select",label:"Select"},{value:"hideSelectAll",label:"Hide Select All",disabled:!0},{value:"showMoreDisabled",label:"Show More Disabled"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];iconOptions=[{value:"ph ph-newspaper",label:"ph ph-newspaper"},{value:"ph ph-magnifying-glass",label:"ph ph-magnifying-glass"},{value:"ph ph-globe",label:"ph ph-globe"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"fa fa-podcast",label:"fa fa-podcast"}];propertyTitleOptions=[{value:"name",label:"name"},{value:"email",label:"email"},{value:"phone",label:"phone"},{value:"location",label:"location"}];typeOptions=[{label:"Default",value:"default"},{label:"Danger",value:"danger"}];constructor(o){this.poNotification=o}ngOnInit(){this.restore()}addAction(o){let l=Object.assign({},o);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.actions.push(l),this.restoreActionForm()}addItem(){this.items.push(this.generateNewItem(this.items.length+1))}changeAction(o){this.titleAction=o}changeActionOptions(){this.propertiesOptions=this.propertiesOptions.map(o=>o.value==="hideSelectAll"?$(G({},o),{disabled:!this.properties.includes("select")}):o)}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}restore(){this.actions=[],this.items=[],this.height=void 0,this.literals="",this.properties=[],this.propertyLink="url",this.propertyLinkValue="",this.propertyTitle="",this.titleAction="",this.restoreActionForm()}showMore(){this.addItem()}generateNewItem(o){return{name:`Register ${o}`,email:`register${o}@po-ui.com`,phone:`(55) ${o}234567`,location:"Brazil",company:`Company ${o}`,url:this.propertyLinkValue,zipCode:`${o}221`}}restoreActionForm(){this.action={label:"",visible:null}}showAction(o){this.poNotification.success(`Action clicked: ${o}`)}static \u0275fac=function(l){return new(l||a)(C(B))};static \u0275cmp=g({type:a,selectors:[["sample-po-list-view-labs"]],standalone:!1,decls:37,vars:27,consts:[["propertiesForm","ngForm"],["actionForm","ngForm"],[3,"p-show-more","p-title-action","p-actions","p-height","p-hide-select-all","p-items","p-literals","p-property-link","p-property-title","p-select","p-show-more-disabled"],["p-list-view-content-template",""],["p-list-view-detail-template",""],[1,"po-row"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["p-label","Action",1,"po-md-6",3,"p-value"],["name","propertyTitle","p-help","Ex.: email","p-label","Property title",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","height","p-help","Ex.: 200","p-label","Height",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","propertyLinkValue","p-help",'Ex.: "http://po.com.br"',"p-label","Title Link",1,"po-md-12",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "hideDetails": "Esconder detalhes", "showDetails": "Ver detalhes", "loadMoreData": "Ver mais", "noData": "Sem itens cadastrados" }',"p-label","Literals",1,"po-md-12",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","3","p-label","Properties","p-help",'To enable the "Hide Select All" option, you must select the "Select" option first.',1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-4",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-4",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-3",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-3",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-label","Name",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Email",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Location",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Phone",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Company",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Zip Code",1,"po-md-6","po-lg-3",3,"p-value"]],template:function(l,n){if(l&1){let d=H();e(0,"po-list-view",2),b("p-show-more",function(){return c(d),u(n.showMore())})("p-title-action",function(){return c(d),u(n.changeAction("p-title-action"))}),L(1,Be,5,4,"ng-template",3)(2,je,3,2,"ng-template",4),t(),r(3,"hr"),e(4,"div",5)(5,"po-button",6),b("p-click",function(){return c(d),u(n.addItem())}),t()(),r(6,"hr"),e(7,"div",5),r(8,"po-info",7),t(),r(9,"hr"),e(10,"form",null,0)(12,"div",5)(13,"po-select",8),E("ngModelChange",function(p){return c(d),S(n.propertyTitle,p)||(n.propertyTitle=p),u(p)}),t(),e(14,"po-number",9),E("ngModelChange",function(p){return c(d),S(n.height,p)||(n.height=p),u(p)}),b("p-change",function(){return c(d),u(n.changeLiterals())}),t()(),e(15,"div",5)(16,"po-input",10),E("ngModelChange",function(p){return c(d),S(n.propertyLinkValue,p)||(n.propertyLinkValue=p),u(p)}),t()(),e(17,"div",5)(18,"po-input",11),E("ngModelChange",function(p){return c(d),S(n.literals,p)||(n.literals=p),u(p)}),b("p-change",function(){return c(d),u(n.changeLiterals())}),t()(),e(19,"div",5)(20,"po-checkbox-group",12),E("ngModelChange",function(p){return c(d),S(n.properties,p)||(n.properties=p),u(p)}),b("p-change",function(){return c(d),u(n.changeActionOptions())}),t()()(),r(21,"hr"),e(22,"form",null,1)(24,"div",5)(25,"po-input",13),E("ngModelChange",function(p){return c(d),S(n.action.action,p)||(n.action.action=p),u(p)}),t(),e(26,"po-input",14),E("ngModelChange",function(p){return c(d),S(n.action.label,p)||(n.action.label=p),u(p)}),t(),e(27,"po-input",15),E("ngModelChange",function(p){return c(d),S(n.action.url,p)||(n.action.url=p),u(p)}),t()(),e(28,"div",5)(29,"po-select",16),E("ngModelChange",function(p){return c(d),S(n.action.type,p)||(n.action.type=p),u(p)}),t(),e(30,"po-select",17),E("ngModelChange",function(p){return c(d),S(n.action.icon,p)||(n.action.icon=p),u(p)}),t(),e(31,"po-checkbox-group",18),E("ngModelChange",function(p){return c(d),S(n.action,p)||(n.action=p),u(p)}),t()(),e(32,"div",5)(33,"po-button",19),b("p-click",function(){return c(d),u(n.addAction(n.action))}),t()()(),r(34,"hr"),e(35,"div",5)(36,"po-button",20),b("p-click",function(){return c(d),q(23).reset(),u(n.restore())}),t()()}if(l&2){let d=q(23);m("p-actions",n.actions)("p-height",n.height)("p-hide-select-all",n.properties.includes("hideSelectAll"))("p-items",n.items)("p-literals",n.customLiterals)("p-property-link",n.propertyLink)("p-property-title",n.propertyTitle)("p-select",n.properties.includes("select"))("p-show-more-disabled",n.properties.includes("showMoreDisabled")),s(8),m("p-value",n.titleAction),s(5),v("ngModel",n.propertyTitle),m("p-options",n.propertyTitleOptions),s(),v("ngModel",n.height),s(2),v("ngModel",n.propertyLinkValue),s(2),v("ngModel",n.literals),s(2),v("ngModel",n.properties),m("p-options",n.propertiesOptions),s(5),v("ngModel",n.action.action),s(),v("ngModel",n.action.label),s(),v("ngModel",n.action.url),s(2),v("ngModel",n.action.type),m("p-options",n.typeOptions),s(),v("ngModel",n.action.icon),m("p-options",n.iconOptions),s(),v("ngModel",n.action),m("p-options",n.actionOptions),s(2),m("p-disabled",d.invalid)}},dependencies:[se,oe,ae,re,le,ue,he,be,ve,Se,D,k,T,j],encapsulation:2})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),Pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-list-view-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(r(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO List View Labs"),t(),e(4,"a",2),b("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-list-view-labs/sample-po-list-view-labs.component.html"),t(),e(13,"pre",7),i(14,`<po-list-view
  [p-actions]="actions"
  [p-height]="height"
  [p-hide-select-all]="properties.includes('hideSelectAll')"
  [p-items]="items"
  [p-literals]="customLiterals"
  [p-property-link]="propertyLink"
  [p-property-title]="propertyTitle"
  [p-select]="properties.includes('select')"
  [p-show-more-disabled]="properties.includes('showMoreDisabled')"
  (p-show-more)="showMore()"
  (p-title-action)="changeAction('p-title-action')"
>
  <ng-template p-list-view-content-template let-item>
    <div class="po-row">
      <po-info class="po-md-6 po-lg-3" p-label="Name" [p-value]="item.name"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Email" [p-value]="item.email"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Location" [p-value]="item.location"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Phone" [p-value]="item.phone"> </po-info>
    </div>
  </ng-template>

  <ng-template p-list-view-detail-template let-item>
    <div class="po-row">
      <po-info class="po-md-6 po-lg-3" p-label="Company" [p-value]="item.company"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Zip Code" [p-value]="item.zipCode"> </po-info>
    </div>
  </ng-template>
</po-list-view>

<hr />

<div class="po-row">
  <po-button class="po-md-3" p-label="Add Item" (p-click)="addItem()"> </po-button>
</div>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Action" [p-value]="titleAction"> </po-info>
</div>

<hr />

<form #propertiesForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6"
      name="propertyTitle"
      [(ngModel)]="propertyTitle"
      p-help="Ex.: email"
      p-label="Property title"
      [p-options]="propertyTitleOptions"
    >
    </po-select>

    <po-number
      class="po-md-6"
      name="height"
      [(ngModel)]="height"
      p-help="Ex.: 200"
      p-label="Height"
      (p-change)="changeLiterals()"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-12"
      name="propertyLinkValue"
      [(ngModel)]="propertyLinkValue"
      p-help='Ex.: "http://po.com.br"'
      p-label="Title Link"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-12"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: { "hideDetails": "Esconder detalhes", "showDetails": "Ver detalhes", "loadMoreData": "Ver mais", "noData": "Sem itens cadastrados" }'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="3"
      p-label="Properties"
      p-help='To enable the "Hide Select All" option, you must select the "Select" option first.'
      [p-options]="propertiesOptions"
      (p-change)="changeActionOptions()"
    >
    </po-checkbox-group>
  </div>
</form>

<hr />

<form #actionForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-4" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

    <po-input class="po-md-4" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

    <po-input class="po-md-4" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>
  </div>

  <div class="po-row">
    <po-select class="po-md-3" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
    </po-select>

    <po-select class="po-md-3" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
    </po-select>

    <po-checkbox-group
      class="po-md-6"
      name="action"
      [(ngModel)]="action"
      p-columns="4"
      p-indeterminate
      p-label="Action properties"
      [p-options]="actionOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6 po-lg-3"
      p-label="Add Action"
      [p-disabled]="actionForm.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<hr />

<div class="po-row">
  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="actionForm.reset(); restore()"> </po-button>
</div>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-list-view-labs/sample-po-list-view-labs.component.ts"),t(),e(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoSelectOption,
  PoListViewAction,
  PoListViewLiterals,
  PoNotificationService
} from '@po-ui/ng-components';

@Component({
    selector: 'sample-po-list-view-labs',
    templateUrl: './sample-po-list-view-labs.component.html',
    standalone: false
})
export class SamplePoListViewLabsComponent implements OnInit {
  action: PoListViewAction;
  actions: Array<PoListViewAction>;
  customLiterals: PoListViewLiterals;
  height: number;
  items: Array<any>;
  literals: string;
  properties: Array<string>;
  propertyLink: string;
  propertyLinkValue: string;
  propertyTitle: string;
  titleAction: string;

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'select', label: 'Select' },
    { value: 'hideSelectAll', label: 'Hide Select All', disabled: true },
    { value: 'showMoreDisabled', label: 'Show More Disabled' }
  ];

  readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  readonly iconOptions: Array<PoSelectOption> = [
    { value: 'ph ph-newspaper', label: 'ph ph-newspaper' },
    { value: 'ph ph-magnifying-glass', label: 'ph ph-magnifying-glass' },
    { value: 'ph ph-globe', label: 'ph ph-globe' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  readonly propertyTitleOptions: Array<PoSelectOption> = [
    { value: 'name', label: 'name' },
    { value: 'email', label: 'email' },
    { value: 'phone', label: 'phone' },
    { value: 'location', label: 'location' }
  ];

  readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Default', value: 'default' },
    { label: 'Danger', value: 'danger' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoListViewAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    this.actions.push(newAction);
    this.restoreActionForm();
  }

  addItem() {
    this.items.push(this.generateNewItem(this.items.length + 1));
  }

  changeAction(action) {
    this.titleAction = action;
  }

  changeActionOptions() {
    this.propertiesOptions = this.propertiesOptions.map(propertyOption => {
      if (propertyOption.value === 'hideSelectAll') {
        return { ...propertyOption, disabled: !this.properties.includes('select') };
      } else {
        return propertyOption;
      }
    });
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.actions = [];
    this.items = [];
    this.height = undefined;
    this.literals = '';
    this.properties = [];
    this.propertyLink = 'url';
    this.propertyLinkValue = '';
    this.propertyTitle = '';
    this.titleAction = '';
    this.restoreActionForm();
  }

  showMore() {
    this.addItem();
  }

  private generateNewItem(index) {
    return {
      name: \`Register \${index}\`,
      email: \`register\${index}@po-ui.com\`,
      phone: \`(55) \${index}234567\`,
      location: 'Brazil',
      company: \`Company \${index}\`,
      url: this.propertyLinkValue,
      zipCode: \`\${index}221\`
    };
  }

  private restoreActionForm() {
    this.action = {
      label: '',
      visible: null
    };
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),t()()()()(),e(21,"div",10),r(22,"sample-po-list-view-labs"),t(),r(23,"hr")),l&2&&(s(5),_("po-icon "+n.sampleCodeButtonIcon),s(),V(" ",n.sampleCodeButtonLabel,""),s(),m("ngClass",M(4,qe,n.hideSampleCodeTabs)))},dependencies:[A,P,y,x,xe],encapsulation:2})}return a})();var N=(()=>{class a{getItems(){return[{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",email:"james@johnson.com",telephone:"1-541-754-3010",jobDescription:"Systems Analyst",url:"https://po-ui.io/"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",email:"brian@brown.com",telephone:"1-543-456-9876",jobDescription:"Trainee",url:"https://po-ui.io/"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",email:"mary@davis.com",telephone:"1-521-223-3232",jobDescription:"Programmer"},{hireStatus:"progress",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",email:"margaret@garcia.com",telephone:"1-541-344-2211",jobDescription:"Web developer",url:"https://po-ui.io/"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",email:"emma@hall.com",telephone:"1-555-321-3234",jobDescription:"Recruiter",url:"https://po-ui.io/"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",email:"lucas@clark.com",telephone:"1-541-322-4343",jobDescription:"Consultant"},{hireStatus:"progress",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",email:"ella@scott.com",telephone:"1-229-324-3434",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",email:"chloe@walker.com",telephone:"1-518-222-1212",jobDescription:"Programmer"}]}static \u0275fac=function(l){return new(l||a)};static \u0275prov=J({token:a,factory:a.\u0275fac})}return a})();var ze=["detailsModal"];function Ue(a,w){if(a&1&&(e(0,"div",6),r(1,"po-info",14)(2,"po-info",15)(3,"po-info",16),te(4,"uppercase"),t()),a&2){let o=w.$implicit;s(),m("p-value",o.idCard),s(),m("p-value",o.jobDescription),s(),Q("p-value",ie(4,3,o.hireStatus))}}function Ge(a,w){if(a&1&&(e(0,"div",6),r(1,"po-info",17)(2,"po-info",18),t()),a&2){let o=w.$implicit;s(),m("p-value",o.age),s(),m("p-value",o.city)}}var Le=(()=>{class a{poNotification;hiringProcessesService;detailsModalElement;hiringProcesses;hiringProcessesFiltered;labelFilter="";modalDetail=!1;selectedActionItem={};titleDetailsModal="User Detail";actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),icon:"ph ph-check"},{label:"Cancel",action:this.cancelCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),type:"danger",icon:"ph ph-x"}];pageActions=[{label:"Hire selected",action:this.updateCandidates.bind(this,this.hireCandidate),disabled:this.disableHireButton.bind(this),icon:"ph ph-check"},{label:"Cancel selected",action:this.updateCandidates.bind(this,this.cancelCandidate),disabled:this.disableHireButton.bind(this),icon:"ph ph-x"}];filterSettings={action:this.hiringProcessesFilter.bind(this),placeholder:"Search"};constructor(o,l){this.poNotification=o,this.hiringProcessesService=l}ngOnInit(){this.hiringProcesses=this.hiringProcessesService.getItems(),this.hiringProcessesFiltered=[...this.hiringProcesses]}formatTitle(o){return`${o.idCard} - ${o.name}`}showDetail(o){return o.url}showDetailModal(o){this.setModalItem(o),this.detailsModalElement.open()}cancelCandidate(o){o.hireStatus="canceled",this.poNotification.error("Canceled candidate!")}disableHireButton(){return!this.hiringProcesses.find(o=>o.$selected)}hireCandidate(o){o.hireStatus="hired",this.poNotification.success("Hired candidate!")}hiringProcessesFilter(o){let l=typeof o=="string"?[o]:[...o];this.hiringProcessesFiltered=this.hiringProcesses.filter(n=>Object.keys(n).some(d=>!(n[d]instanceof Object)&&this.includeFilter(n[d],l)))}includeFilter(o,l){return l.some(n=>String(o).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}isHiredOrCanceled(o){return o.hireStatus==="hired"||o.hireStatus==="canceled"}setModalItem(o){this.selectedActionItem=o,this.titleDetailsModal=`Get in touch with ${this.selectedActionItem.name}`}updateCandidates(o){this.hiringProcesses.forEach(l=>{if(l.$selected){switch(l.hireStatus){case"progress":o.call(this,l);break;case"hired":this.poNotification.warning("This candidate has already been hired.");break;case"canceled":this.poNotification.error("This candidate has already been disqualified.");break}l.$selected=!1}})}static \u0275fac=function(l){return new(l||a)(C(B),C(N))};static \u0275cmp=g({type:a,selectors:[["sample-po-list-view-hiring-processes"]],viewQuery:function(l,n){if(l&1&&Y(ze,7),l&2){let d;Z(d=K())&&(n.detailsModalElement=d.first)}},standalone:!1,features:[X([N])],decls:16,vars:11,consts:[["detailsModal",""],["p-title","Hiring processes",3,"p-actions","p-filter"],["p-hide-select-all","","p-property-link","url","p-property-title","name","p-select","",3,"p-title-action","p-actions","p-items"],["p-list-view-content-template","",3,"p-title"],["p-list-view-detail-template","",3,"p-show-detail"],[3,"p-title"],[1,"po-row"],[1,"po-md-5","po-lg-4"],["p-size","xl","p-src","assets/graphics/avatar2.png"],[1,"po-md-7","po-lg-8"],[1,"po-mb-1"],[3,"p-value","p-type"],["p-label","Email",3,"p-value"],["p-label","Telephone",3,"p-value"],["p-label","Id Card",1,"po-lg-4",3,"p-value"],["p-label","Job description",1,"po-lg-4",3,"p-value"],["p-label","Hire status",1,"po-lg-4",3,"p-value"],["p-label","Age",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"]],template:function(l,n){if(l&1){let d=H();e(0,"po-page-list",1)(1,"po-list-view",2),b("p-title-action",function(p){return c(d),u(n.showDetailModal(p))}),L(2,Ue,5,5,"ng-template",3)(3,Ge,3,2,"ng-template",4),t(),e(4,"po-modal",5,0)(6,"div",6)(7,"div",7),r(8,"po-avatar",8),t(),e(9,"div",9)(10,"div",10),r(11,"po-tag",11),t(),e(12,"div",10),r(13,"po-info",12),t(),e(14,"div",10),r(15,"po-info",13),t()()()()()}l&2&&(m("p-actions",n.pageActions)("p-filter",n.filterSettings),s(),m("p-actions",n.actions)("p-items",n.hiringProcessesFiltered),s(),m("p-title",n.formatTitle),s(),m("p-show-detail",n.showDetail),s(),m("p-title",n.titleDetailsModal),s(7),m("p-value",n.selectedActionItem.hireStatus)("p-type",n.selectedActionItem.hireStatus==="hired"?"success":"info"),s(2),m("p-value",n.selectedActionItem.email),s(2),m("p-value",n.selectedActionItem.telephone))},dependencies:[ce,de,D,k,T,j,ge,we,ne],encapsulation:2})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-list-view-hiring-processes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(r(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO List View - Hiring Processes"),t(),e(4,"a",2),b("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.html"),t(),e(13,"pre",7),i(14,`<po-page-list p-title="Hiring processes" [p-actions]="pageActions" [p-filter]="filterSettings">
  <po-list-view
    p-hide-select-all
    p-property-link="url"
    p-property-title="name"
    p-select
    [p-actions]="actions"
    [p-items]="hiringProcessesFiltered"
    (p-title-action)="showDetailModal($event)"
  >
    <ng-template p-list-view-content-template let-item [p-title]="formatTitle">
      <div class="po-row">
        <po-info class="po-lg-4" p-label="Id Card" [p-value]="item.idCard"></po-info>

        <po-info class="po-lg-4" p-label="Job description" [p-value]="item.jobDescription"></po-info>

        <po-info class="po-lg-4" p-label="Hire status" p-value="{ { item.hireStatus | uppercase }}"></po-info>
      </div>
    </ng-template>

    <ng-template p-list-view-detail-template let-item [p-show-detail]="showDetail">
      <div class="po-row">
        <po-info class="po-md-6" p-label="Age" [p-value]="item.age"></po-info>

        <po-info class="po-md-6" p-label="City" [p-value]="item.city"></po-info>
      </div>
    </ng-template>
  </po-list-view>

  <po-modal #detailsModal [p-title]="titleDetailsModal">
    <div class="po-row">
      <div class="po-md-5 po-lg-4">
        <po-avatar p-size="xl" p-src="assets/graphics/avatar2.png"></po-avatar>
      </div>
      <div class="po-md-7 po-lg-8">
        <div class="po-mb-1">
          <po-tag
            [p-value]="selectedActionItem['hireStatus']"
            [p-type]="selectedActionItem['hireStatus'] === 'hired' ? 'success' : 'info'"
          >
          </po-tag>
        </div>
        <div class="po-mb-1">
          <po-info p-label="Email" [p-value]="selectedActionItem['email']"> </po-info>
        </div>
        <div class="po-mb-1">
          <po-info p-label="Telephone" [p-value]="selectedActionItem['telephone']"> </po-info>
        </div>
      </div>
    </div>
  </po-modal>
</po-page-list>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.ts"),t(),e(19,"pre",9),i(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import {
  PoListViewAction,
  PoModalComponent,
  PoNotificationService,
  PoPageAction,
  PoPageFilter
} from '@po-ui/ng-components';

import { SamplePoListViewHiringProcessesService } from './sample-po-list-view-hiring-processes.service';

@Component({
    selector: 'sample-po-list-view-hiring-processes',
    templateUrl: 'sample-po-list-view-hiring-processes.component.html',
    providers: [SamplePoListViewHiringProcessesService],
    standalone: false
})
export class SamplePoListViewHiringProcessesComponent implements OnInit {
  @ViewChild('detailsModal', { static: true }) detailsModalElement: PoModalComponent;

  hiringProcesses: Array<any>;
  hiringProcessesFiltered: Array<object>;
  labelFilter: string = '';
  modalDetail: boolean = false;
  selectedActionItem = {};
  titleDetailsModal: string = 'User Detail';

  readonly actions: Array<PoListViewAction> = [
    {
      label: 'Hire',
      action: this.hireCandidate.bind(this),
      disabled: this.isHiredOrCanceled.bind(this),
      icon: 'ph ph-check'
    },
    {
      label: 'Cancel',
      action: this.cancelCandidate.bind(this),
      disabled: this.isHiredOrCanceled.bind(this),
      type: 'danger',
      icon: 'ph ph-x'
    }
  ];

  readonly pageActions: Array<PoPageAction> = [
    {
      label: 'Hire selected',
      action: this.updateCandidates.bind(this, this.hireCandidate),
      disabled: this.disableHireButton.bind(this),
      icon: 'ph ph-check'
    },
    {
      label: 'Cancel selected',
      action: this.updateCandidates.bind(this, this.cancelCandidate),
      disabled: this.disableHireButton.bind(this),
      icon: 'ph ph-x'
    }
  ];

  readonly filterSettings: PoPageFilter = {
    action: this.hiringProcessesFilter.bind(this),
    placeholder: 'Search'
  };

  constructor(
    private poNotification: PoNotificationService,
    private hiringProcessesService: SamplePoListViewHiringProcessesService
  ) {}

  ngOnInit() {
    this.hiringProcesses = this.hiringProcessesService.getItems();
    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  formatTitle(item) {
    return \`\${item.idCard} - \${item.name}\`;
  }

  showDetail(item) {
    return item.url;
  }

  showDetailModal(item) {
    this.setModalItem(item);
    this.detailsModalElement.open();
  }

  private cancelCandidate(selectedCandidate) {
    selectedCandidate['hireStatus'] = 'canceled';
    this.poNotification.error('Canceled candidate!');
  }

  private disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  private hireCandidate(selectedCandidate) {
    selectedCandidate['hireStatus'] = 'hired';
    this.poNotification.success('Hired candidate!');
  }

  private hiringProcessesFilter(labelFilter: string | Array<string>) {
    const filters = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];

    this.hiringProcessesFiltered = this.hiringProcesses.filter(item =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters))
    );
  }

  private includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  private isHiredOrCanceled(candidate): boolean {
    return candidate['hireStatus'] === 'hired' || candidate['hireStatus'] === 'canceled';
  }

  private setModalItem(listItem) {
    this.selectedActionItem = listItem;
    this.titleDetailsModal = \`Get in touch with \${this.selectedActionItem['name']}\`;
  }

  private updateCandidates(action: Function) {
    this.hiringProcesses.forEach(candidate => {
      if (candidate['$selected']) {
        switch (candidate['hireStatus']) {
          case 'progress':
            action.call(this, candidate);
            break;

          case 'hired':
            this.poNotification.warning('This candidate has already been hired.');
            break;

          case 'canceled':
            this.poNotification.error('This candidate has already been disqualified.');
            break;
        }

        candidate['$selected'] = false;
      }
    });
  }
}
`),t(),e(21,"label",6),i(22,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.service.ts"),t(),e(23,"pre",9),i(24,`import { Injectable } from '@angular/core';

@Injectable()
export class SamplePoListViewHiringProcessesService {
  getItems() {
    return [
      {
        hireStatus: 'hired',
        name: 'James Johnson',
        city: 'Ontario',
        age: 24,
        idCard: 'AB34lxi90',
        email: 'james@johnson.com',
        telephone: '1-541-754-3010',
        jobDescription: 'Systems Analyst',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'progress',
        name: 'Brian Brown',
        city: 'Buffalo',
        age: 23,
        idCard: 'HG56lds54',
        email: 'brian@brown.com',
        telephone: '1-543-456-9876',
        jobDescription: 'Trainee',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'canceled',
        name: 'Mary Davis',
        city: 'Albany',
        age: 31,
        idCard: 'DF23cfr65',
        email: 'mary@davis.com',
        telephone: '1-521-223-3232',
        jobDescription: 'Programmer'
      },
      {
        hireStatus: 'progress',
        name: 'Margaret Garcia',
        city: 'New York',
        age: 29,
        idCard: 'GF45fgh34',
        email: 'margaret@garcia.com',
        telephone: '1-541-344-2211',
        jobDescription: 'Web developer',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'hired',
        name: 'Emma Hall',
        city: 'Ontario',
        age: 34,
        idCard: 'RF76jut21',
        email: 'emma@hall.com',
        telephone: '1-555-321-3234',
        jobDescription: 'Recruiter',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'progress',
        name: 'Lucas Clark',
        city: 'Utica',
        age: 32,
        idCard: 'HY21kgu65',
        email: 'lucas@clark.com',
        telephone: '1-541-322-4343',
        jobDescription: 'Consultant'
      },
      {
        hireStatus: 'progress',
        name: 'Ella Scott',
        city: 'Ontario',
        age: 24,
        idCard: 'UL78flg68',
        email: 'ella@scott.com',
        telephone: '1-229-324-3434',
        jobDescription: 'DBA'
      },
      {
        hireStatus: 'progress',
        name: 'Chloe Walker',
        city: 'Albany',
        age: 29,
        idCard: 'JH12oli98',
        email: 'chloe@walker.com',
        telephone: '1-518-222-1212',
        jobDescription: 'Programmer'
      }
    ];
  }
}
`),t()()()()(),e(25,"div",10),r(26,"sample-po-list-view-hiring-processes"),t(),r(27,"hr")),l&2&&(s(5),_("po-icon "+n.sampleCodeButtonIcon),s(),V(" ",n.sampleCodeButtonLabel,""),s(),m("ngClass",M(4,Je,n.hideSampleCodeTabs)))},dependencies:[A,P,y,x,Le],encapsulation:2})}return a})();var Ve=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-list-view-doc"]],standalone:!1,decls:656,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-list-view-content-template"],["href","/documentation/po-list-view-detail-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoListViewAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoListViewLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(l,n){l&1&&(e(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoListViewModule } from '@po-ui/ng-components';"),t()(),e(4,"div",2)(5,"p"),i(6,"M\xF3dulo do componente "),e(7,"code"),i(8,"po-list-view"),t(),i(9,"."),t(),e(10,"blockquote")(11,"p"),i(12,"Para o correto funcionamento do componente "),e(13,"code"),i(14,"po-list-view"),t(),i(15,", deve ser importado o m\xF3dulo "),e(16,"code"),i(17,"BrowserAnimationsModule"),t(),i(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),t()(),e(19,"p"),i(20,"M\xF3dulo da aplica\xE7\xE3o:"),t(),e(21,"pre")(22,"code"),i(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...
    PoModule
  ],
  declarations: [
    AppComponent,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`),t()(),e(24,"p"),i(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),t(),e(26,"pre")(27,"code"),i(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));`),t()()(),e(29,"h3",3),i(30,"Componente"),t(),e(31,"h4",4)(32,"code",5),i(33,"PoListViewComponent"),t()(),e(34,"div",2)(35,"p"),i(36,`Componente de lista que recebe um array de objetos e renderiza de forma din\xE2mica os dados de
acordo com a necessidade de cada tela e deve ser utilizado em conjunto com as diretivas de `),e(37,"em"),i(38,"templates"),t(),e(39,"strong")(40,"a",6),i(41,"p-list-view-content-template"),t()(),i(42,` e
`),e(43,"strong")(44,"a",7),i(45,"p-list-view-detail-template"),t()(),i(46,"."),t(),e(47,"p"),i(48,`O componente disponibiliza uma \xE1rea espec\xEDfica para exibi\xE7\xE3o informa\xE7\xF5es adicionais,
atrav\xE9s da diretiva `),e(49,"strong")(50,"a",7),i(51,"p-list-view-detail-template"),t()(),i(52,". "),t()(),e(53,"div",8)(54,"h4",9),i(55,"Seletor"),t(),e(56,"pre",10),i(57,`<po-list-view
    p-actions="PoListViewAction[]"
    p-height="number"
    p-hide-select-all="boolean"
    p-items="any[]"
    p-literals="PoListViewLiterals"
    p-property-link="string"
    p-property-title="string"
    p-select="boolean"
    (p-show-detail)="EventEmitter"
    (p-show-more)="EventEmitter"
    p-show-more-disabled="boolean"
    (p-title-action)="EventEmitter" >
</po-list-view>
`),t()(),e(58,"h4",11),i(59,"Propriedades"),t(),e(60,"table",12)(61,"tr",13)(62,"th",14),i(63,"Nome"),t(),e(64,"th",14),i(65,"Tipo"),t(),e(66,"th",14),i(67,"Padr\xE3o"),t(),e(68,"th",14),i(69,"Descri\xE7\xE3o"),t()(),e(70,"tr",15)(71,"td",16)(72,"div",17)(73,"span",18),i(74," p-actions"),r(75,"br"),t()()(),e(76,"td",19)(77,"code",20),i(78,"PoListViewAction[]"),t()(),e(79,"td",21),i(80,"-"),t(),e(81,"td",22)(82,"em")(83,"strong"),i(84,"(opcional)"),t()(),e(85,"p"),i(86,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),t()()(),e(87,"tr",15)(88,"td",16)(89,"div",17)(90,"span",18),i(91," p-height"),r(92,"br"),t()()(),e(93,"td",19)(94,"code",23),i(95,"number"),t()(),e(96,"td",21),i(97,"-"),t(),e(98,"td",22)(99,"em")(100,"strong"),i(101,"(opcional)"),t()(),e(102,"p"),i(103,"Define a altura do "),e(104,"code"),i(105,"po-list-view"),t(),i(106," em "),e(107,"em"),i(108,"pixels"),t(),i(109,"."),t()()(),e(110,"tr",15)(111,"td",16)(112,"div",17)(113,"span",18),i(114," p-hide-select-all"),r(115,"br"),t()()(),e(116,"td",19)(117,"code",24),i(118,"boolean"),t()(),e(119,"td",21)(120,"p")(121,"code"),i(122,"false"),t()()(),e(123,"td",22)(124,"p"),i(125,"Esconde o "),e(126,"em"),i(127,"checkbox"),t(),i(128," para sele\xE7\xE3o de todos os itens."),t()()(),e(129,"tr",15)(130,"td",16)(131,"div",17)(132,"span",18),i(133," p-items"),r(134,"br"),t()()(),e(135,"td",19)(136,"code",25),i(137,"any[]"),t()(),e(138,"td",21),i(139,"-"),t(),e(140,"td",22)(141,"p"),i(142,"Lista de itens que ser\xE3o exibidos no componente."),t()()(),e(143,"tr",15)(144,"td",16)(145,"div",17)(146,"span",18),i(147," p-literals"),r(148,"br"),t()()(),e(149,"td",19)(150,"code",26),i(151,"PoListViewLiterals"),t()(),e(152,"td",21),i(153,"-"),t(),e(154,"td",22)(155,"em")(156,"strong"),i(157,"(opcional)"),t()(),e(158,"p"),i(159,"Objeto com as literais usadas no "),e(160,"code"),i(161,"po-list-view"),t(),i(162,"."),t(),e(163,"p"),i(164,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),e(165,"pre")(166,"code"),i(167,`const customLiterals: PoListViewLiterals = {
  hideDetail: 'Ocultar detalhes completamente',
  loadMoreData: 'Mais dados',
  showDetail: 'Mostrar mais detalhes',
  selectAll: 'Selecionar todos os itens'
};`),t()(),e(168,"p"),i(169,"Ou passando apenas as literais que deseja customizar:"),t(),e(170,"pre")(171,"code"),i(172,`const customLiterals: PoListViewLiterals = {
  showDetail: 'Mostrar mais detalhes'
};`),t()(),e(173,"p"),i(174,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),e(175,"pre")(176,"code"),i(177,`<po-list-view
  [p-literals]="customLiterals">
</po-list-view>`),t()(),e(178,"blockquote")(179,"p"),i(180,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),e(181,"a",27)(182,"code"),i(183,"PoI18nService"),t()(),i(184," ou do browser."),t()()()(),e(185,"tr",15)(186,"td",16)(187,"div",17)(188,"span",18),i(189," p-property-link"),r(190,"br"),t()()(),e(191,"td",19)(192,"code",28),i(193,"string"),t()(),e(194,"td",21),i(195,"-"),t(),e(196,"td",22)(197,"em")(198,"strong"),i(199,"(opcional)"),t()(),e(200,"p"),i(201,"Recebe uma propriedade que ser\xE1 utilizada para recuperar o valor do objeto que ser\xE1 usado como link para o t\xEDtulo."),t()()(),e(202,"tr",15)(203,"td",16)(204,"div",17)(205,"span",18),i(206," p-property-title"),r(207,"br"),t()()(),e(208,"td",19)(209,"code",28),i(210,"string"),t()(),e(211,"td",21),i(212,"-"),t(),e(213,"td",22)(214,"em")(215,"strong"),i(216,"(opcional)"),t()(),e(217,"p"),i(218,"Recebe uma propriedade que ser\xE1 utilizada para recuperar o valor do objeto que ser\xE1 exibido como o t\xEDtulo de cada item."),t()()(),e(219,"tr",15)(220,"td",16)(221,"div",17)(222,"span",18),i(223," p-select"),r(224,"br"),t()()(),e(225,"td",19)(226,"code",24),i(227,"boolean"),t()(),e(228,"td",21)(229,"p")(230,"code"),i(231,"false"),t()()(),e(232,"td",22)(233,"em")(234,"strong"),i(235,"(opcional)"),t()(),e(236,"p"),i(237,"Habilita um "),e(238,"em"),i(239,"checkbox"),t(),i(240," para cada item da lista. Todos os items possuem a propriedade din\xE2mica "),e(241,"code"),i(242,"$selected"),t(),i(243,` para identificar se o
item est\xE1 selecionado, por exemplo:`),t(),e(244,"pre")(245,"code"),i(246,`item.$selected

// ou

item['$selected']`),t()()()(),e(247,"tr",15)(248,"td",16)(249,"div",29)(250,"span",30),i(251," (p-show-detail)"),r(252,"br"),t()()(),e(253,"td",19)(254,"code",31),i(255,"EventEmitter"),t()(),e(256,"td",21),i(257,"-"),t(),e(258,"td",22)(259,"em")(260,"strong"),i(261,"(opcional)"),t()(),e(262,"p"),i(263,"A\xE7\xE3o que ser\xE1 executada ao clicar no bot\xE3o exibir detalhes."),t(),e(264,"p"),i(265,"Ao ser disparado, o m\xE9todo passa como par\xE2metros os detalhes que ser\xE3o exibidos."),t()()(),e(266,"tr",15)(267,"td",16)(268,"div",29)(269,"span",30),i(270," (p-show-more)"),r(271,"br"),t()()(),e(272,"td",19)(273,"code",31),i(274,"EventEmitter"),t()(),e(275,"td",21),i(276,"-"),t(),e(277,"td",22)(278,"em")(279,"strong"),i(280,"(opcional)"),t()(),e(281,"p"),i(282,'Recebe uma a\xE7\xE3o, que ser\xE1 executada quando clicar no bot\xE3o "Carregar mais resultados".'),t(),e(283,"blockquote")(284,"p"),i(285,"Caso nenhuma a\xE7\xE3o for definida o mesmo n\xE3o ficar\xE1 vis\xEDvel."),t()()()(),e(286,"tr",15)(287,"td",16)(288,"div",17)(289,"span",18),i(290," p-show-more-disabled"),r(291,"br"),t()()(),e(292,"td",19)(293,"code",24),i(294,"boolean"),t()(),e(295,"td",21),i(296,"-"),t(),e(297,"td",22)(298,"em")(299,"strong"),i(300,"(opcional)"),t()(),e(301,"p"),i(302,"Indica que o bot\xE3o "),e(303,"code"),i(304,"Carregar Mais Resultados"),t(),i(305," ser\xE1 desabilitado."),t()()(),e(306,"tr",15)(307,"td",16)(308,"div",29)(309,"span",30),i(310," (p-title-action)"),r(311,"br"),t()()(),e(312,"td",19)(313,"code",31),i(314,"EventEmitter"),t()(),e(315,"td",21),i(316,"-"),t(),e(317,"td",22)(318,"em")(319,"strong"),i(320,"(opcional)"),t()(),e(321,"p"),i(322,"A\xE7\xE3o que ser\xE1 executada ao clicar no t\xEDtulo."),t(),e(323,"p"),i(324,"Ao ser disparado, o m\xE9todo inserido na a\xE7\xE3o ir\xE1 receber como par\xE2metro o item da lista clicado."),t()()()(),e(325,"h3"),i(326,"Interfaces"),t(),e(327,"h4",32)(328,"code",5),i(329,"PoListViewAction"),t()(),e(330,"div",2)(331,"p"),i(332,"Interface para lista de a\xE7\xF5es do componente. Interface que define as a\xE7\xF5es do componente "),e(333,"code"),i(334,"po-list-view"),t(),i(335,"."),t(),e(336,"blockquote")(337,"p"),i(338,"As propriedades "),e(339,"code"),i(340,"separator"),t(),i(341,", "),e(342,"code"),i(343,"url"),t(),i(344," e "),e(345,"code"),i(346,"selected"),t(),i(347,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),t()()(),e(348,"h4",11),i(349,"Propriedades"),t(),e(350,"table",12)(351,"tr",13)(352,"th",14),i(353,"Nome"),t(),e(354,"th",14),i(355,"Tipo"),t(),e(356,"th",14),i(357,"Descri\xE7\xE3o"),t()(),e(358,"tr",15)(359,"td",16)(360,"div",17)(361,"span",18),i(362," action"),r(363,"br"),t()()(),e(364,"td",19)(365,"code",33),i(366,"Function"),t()(),e(367,"td",22)(368,"em")(369,"strong"),i(370,"(opcional)"),t()(),e(371,"p"),i(372,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),e(373,"blockquote")(374,"p"),i(375,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),e(376,"em"),i(377,"bind"),t(),i(378,"."),t()(),e(379,"p"),i(380,"Exemplo: "),e(381,"code"),i(382,"action: this.myFunction.bind(this)"),t()()()(),e(383,"tr",15)(384,"td",16)(385,"div",17)(386,"span",18),i(387," disabled"),r(388,"br"),t()()(),e(389,"td",19)(390,"code",24),i(391,"boolean "),t(),e(392,"code",33),i(393," Function"),t()(),e(394,"td",22)(395,"em")(396,"strong"),i(397,"(opcional)"),t()(),e(398,"p"),i(399,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),e(400,"p"),i(401,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),e(402,"tr",15)(403,"td",16)(404,"div",17)(405,"span",18),i(406," icon"),r(407,"br"),t()()(),e(408,"td",19)(409,"code",28),i(410,"string "),t(),e(411,"code",34),i(412," TemplateRef<void>"),t()(),e(413,"td",22)(414,"em")(415,"strong"),i(416,"(opcional)"),t()(),e(417,"p"),i(418,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),e(419,"p"),i(420,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),e(421,"a",35),i(422,"Biblioteca de \xEDcones"),t(),i(423,". conforme exemplo abaixo:"),t(),e(424,"pre")(425,"code"),i(426,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'ph ph-newspaper' }]">
</po-component>`),t()(),e(427,"p"),i(428,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),e(429,"pre")(430,"code"),i(431,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>`),t()(),e(432,"p"),i(433,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),e(434,"code"),i(435,"TemplateRef"),t(),i(436,`, conforme exemplo abaixo:
component.html:`),t(),e(437,"pre")(438,"code"),i(439,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>`),t()(),e(440,"p"),i(441,"component.ts:"),t(),e(442,"pre")(443,"code"),i(444,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];`),t()()()(),e(445,"tr",15)(446,"td",16)(447,"div",17)(448,"span",18),i(449," label"),r(450,"br"),t()()(),e(451,"td",19)(452,"code",28),i(453,"string"),t()(),e(454,"td",22)(455,"p"),i(456,"R\xF3tulo da a\xE7\xE3o."),t()()(),e(457,"tr",15)(458,"td",16)(459,"div",17)(460,"span",18),i(461," selected"),r(462,"br"),t()()(),e(463,"td",19)(464,"code",24),i(465,"boolean"),t()(),e(466,"td",22)(467,"em")(468,"strong"),i(469,"(opcional)"),t()(),e(470,"p"),i(471,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),e(472,"tr",15)(473,"td",16)(474,"div",17)(475,"span",18),i(476," separator"),r(477,"br"),t()()(),e(478,"td",19)(479,"code",24),i(480,"boolean"),t()(),e(481,"td",22)(482,"em")(483,"strong"),i(484,"(opcional)"),t()(),e(485,"p"),i(486,"Atribui uma linha separadora acima do item."),t()()(),e(487,"tr",15)(488,"td",16)(489,"div",17)(490,"span",18),i(491," type"),r(492,"br"),t()()(),e(493,"td",19)(494,"code",28),i(495,"string"),t()(),e(496,"td",22)(497,"em")(498,"strong"),i(499,"(opcional)"),t()(),e(500,"p"),i(501,"Define a cor do item, sendo "),e(502,"code"),i(503,"default"),t(),i(504," o padr\xE3o."),t(),e(505,"p"),i(506,"Valores v\xE1lidos:"),t(),e(507,"ul")(508,"li")(509,"code"),i(510,"default"),t()(),e(511,"li")(512,"code"),i(513,"danger"),t(),i(514," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),e(515,"tr",15)(516,"td",16)(517,"div",17)(518,"span",18),i(519," url"),r(520,"br"),t()()(),e(521,"td",19)(522,"code",28),i(523,"string"),t()(),e(524,"td",22)(525,"em")(526,"strong"),i(527,"(opcional)"),t()(),e(528,"p"),i(529,"URL utilizada no redirecionamento das p\xE1ginas."),t()()(),e(530,"tr",15)(531,"td",16)(532,"div",17)(533,"span",18),i(534," visible"),r(535,"br"),t()()(),e(536,"td",19)(537,"code",24),i(538,"boolean "),t(),e(539,"code",33),i(540," Function"),t()(),e(541,"td",22)(542,"em")(543,"strong"),i(544,"(opcional)"),t()(),e(545,"p"),i(546,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),e(547,"blockquote")(548,"p"),i(549,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),e(550,"p"),i(551,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),e(552,"ul")(553,"li")(554,"p"),i(555,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),e(556,"li")(557,"p"),i(558,"Informar diretamente um valor booleano."),t()()()()()(),e(559,"h4",32)(560,"code",5),i(561,"PoListViewLiterals"),t()(),e(562,"div",2)(563,"p"),i(564,"Interface para defini\xE7\xE3o das literais usadas no "),e(565,"code"),i(566,"po-list-view"),t(),i(567,"."),t()(),e(568,"h4",11),i(569,"Propriedades"),t(),e(570,"table",12)(571,"tr",13)(572,"th",14),i(573,"Nome"),t(),e(574,"th",14),i(575,"Tipo"),t(),e(576,"th",14),i(577,"Descri\xE7\xE3o"),t()(),e(578,"tr",15)(579,"td",16)(580,"div",17)(581,"span",18),i(582," hideDetails"),r(583,"br"),t()()(),e(584,"td",19)(585,"code",28),i(586,"string"),t()(),e(587,"td",22)(588,"em")(589,"strong"),i(590,"(opcional)"),t()(),e(591,"p"),i(592,"R\xF3tulo do bot\xE3o que oculta os detalhes do item."),t()()(),e(593,"tr",15)(594,"td",16)(595,"div",17)(596,"span",18),i(597," loadMoreData"),r(598,"br"),t()()(),e(599,"td",19)(600,"code",28),i(601,"string"),t()(),e(602,"td",22)(603,"em")(604,"strong"),i(605,"(opcional)"),t()(),e(606,"p"),i(607,"R\xF3tulo do bot\xE3o que deve carregar mais resultados."),t()()(),e(608,"tr",15)(609,"td",16)(610,"div",17)(611,"span",18),i(612," noData"),r(613,"br"),t()()(),e(614,"td",19)(615,"code",28),i(616,"string"),t()(),e(617,"td",22)(618,"em")(619,"strong"),i(620,"(opcional)"),t()(),e(621,"p"),i(622,"R\xF3tulo exibido quando n\xE3o existem itens para serem exibidos na lista."),t()()(),e(623,"tr",15)(624,"td",16)(625,"div",17)(626,"span",18),i(627," selectAll"),r(628,"br"),t()()(),e(629,"td",19)(630,"code",28),i(631,"string"),t()(),e(632,"td",22)(633,"em")(634,"strong"),i(635,"(opcional)"),t()(),e(636,"p"),i(637,"R\xF3tulo do "),e(638,"code"),i(639,"checkbox"),t(),i(640," da op\xE7\xE3o de selecionar todos."),t()()(),e(641,"tr",15)(642,"td",16)(643,"div",17)(644,"span",18),i(645," showDetails"),r(646,"br"),t()()(),e(647,"td",19)(648,"code",28),i(649,"string"),t()(),e(650,"td",22)(651,"em")(652,"strong"),i(653,"(opcional)"),t()(),e(654,"p"),i(655,"R\xF3tulo do bot\xE3o que exibe os detalhes do item."),t()()()()())},dependencies:[P],encapsulation:2})}return a})();var Me=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(C(pe),C(me))};static \u0275cmp=g({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," List View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(l,n){l&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),r(3,"sample-po-list-view-doc"),t(),e(4,"po-tab",3),r(5,"sample-po-list-view-basic-view")(6,"sample-po-list-view-labs-view")(7,"sample-po-list-view-hiring-processes-view"),t()()()),l&2&&(m("p-actions",n.actions),s(2),m("p-active",n.activeTab.includes("doc")),s(2),m("p-hide",n.hidePoWebSample)("p-active",n.activeTab.includes("web")))},dependencies:[Ee,y,x,ye,Pe,_e,Ve],encapsulation:2})}return a})();var Ze=[{path:"",component:Me}],Ae=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=O({type:a});static \u0275inj=I({imports:[R.forChild(Ze),R]})}return a})();var xt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=O({type:a});static \u0275inj=I({imports:[fe,Ae]})}return a})();export{xt as DocPoListViewModule};
