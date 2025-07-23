import{$ as L,$a as T,$d as ae,Ca as H,Da as z,Ea as G,F as s,Fa as I,Fc as W,G as c,Ga as n,Ia as _,Ka as g,La as f,Lb as V,Ma as h,Mb as F,Na as K,Nb as O,Ob as N,Od as x,Pa as M,Pb as q,T as p,U as P,Wb as X,Xd as C,Yb as Y,Yd as w,Zb as U,_ as S,ad as j,gd as ee,ha as u,ka as D,ld as te,md as ne,na as t,oa as e,oc as Z,pa as r,re as y,se as oe,ta as B,ua as E,x as Q,y as A,yd as ie,zc as $}from"./chunk-23IW53AA.js";var le=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-page-default-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page Default"]],template:function(l,i){l&1&&r(0,"po-page-default",0)},dependencies:[x],encapsulation:2})}return a})();var he=a=>({"docs-sample-code-tabs":a}),pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-page-default-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Page Default Basic"),e(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-page-default-basic/sample-po-page-default-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-page-default-basic/sample-po-page-default-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),e()()()()(),t(21,"div",10),r(22,"sample-po-page-default-basic"),e(),r(23,"hr")),l&2&&(p(5),D("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),u("ngClass",M(4,he,i.hideSampleCodeTabs)))},dependencies:[T,y,C,w,le],encapsulation:2})}return a})();var me=(()=>{class a{poNotification;action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;customLiterals;literals;title;subtitle;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];iconOptions=[{value:"ph ph-newspaper",label:"ph ph-newspaper"},{value:"ph ph-magnifying-glass",label:"ph ph-magnifying-glass"},{value:"ph ph-globe",label:"ph ph-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];constructor(m){this.poNotification=m}ngOnInit(){this.restore()}addAction(m){let l=Object.assign({},m);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.actions=[...this.actions,l],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let m={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,m):this.breadcrumb.params=m,this.breadcrumbParams={}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.literals="",this.title="PO Page Default",this.subtitle="",this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}showAction(m){this.poNotification.success(`Action clicked: ${m}`)}static \u0275fac=function(l){return new(l||a)(P(j))};static \u0275cmp=S({type:a,selectors:[["sample-po-page-default-labs"]],standalone:!1,decls:43,vars:25,consts:[["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],["formPage","ngForm"],[3,"p-actions","p-breadcrumb","p-literals","p-title","p-subtitle"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-4",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-4",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-3",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-3",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-4",3,"p-click","p-disabled"],["name","title","p-label","Title","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-12",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let d=B();r(0,"po-page-default",5)(1,"hr"),t(2,"form",null,0)(4,"div",6)(5,"po-input",7),h("ngModelChange",function(o){return s(d),f(i.action.action,o)||(i.action.action=o),c(o)}),e(),t(6,"po-input",8),h("ngModelChange",function(o){return s(d),f(i.action.label,o)||(i.action.label=o),c(o)}),e(),t(7,"po-input",9),h("ngModelChange",function(o){return s(d),f(i.action.url,o)||(i.action.url=o),c(o)}),e()(),t(8,"div",6)(9,"po-select",10),h("ngModelChange",function(o){return s(d),f(i.action.type,o)||(i.action.type=o),c(o)}),e(),t(10,"po-select",11),h("ngModelChange",function(o){return s(d),f(i.action.icon,o)||(i.action.icon=o),c(o)}),e(),t(11,"po-checkbox-group",12),h("ngModelChange",function(o){return s(d),f(i.action,o)||(i.action=o),c(o)}),e()(),t(12,"div",6)(13,"po-button",13),E("p-click",function(){return s(d),c(i.addAction(i.action))}),e()()(),r(14,"hr"),t(15,"form",null,1)(17,"div",6)(18,"po-input",14),h("ngModelChange",function(o){return s(d),f(i.breadcrumb.favorite,o)||(i.breadcrumb.favorite=o),c(o)}),e()()(),t(19,"form",null,2)(21,"div",6)(22,"po-input",15),h("ngModelChange",function(o){return s(d),f(i.breadcrumbItem.label,o)||(i.breadcrumbItem.label=o),c(o)}),e(),t(23,"po-input",16),h("ngModelChange",function(o){return s(d),f(i.breadcrumbItem.link,o)||(i.breadcrumbItem.link=o),c(o)}),e()(),t(24,"div",6)(25,"po-button",17),E("p-click",function(){return s(d),c(i.addBreadcrumbItem())}),e()()(),r(26,"hr"),t(27,"form",null,3)(29,"div",6)(30,"po-input",18),h("ngModelChange",function(o){return s(d),f(i.breadcrumbParams.property,o)||(i.breadcrumbParams.property=o),c(o)}),e(),t(31,"po-input",19),h("ngModelChange",function(o){return s(d),f(i.breadcrumbParams.value,o)||(i.breadcrumbParams.value=o),c(o)}),e()(),t(32,"div",6)(33,"po-button",20),E("p-click",function(){return s(d),c(i.addBreadcrumbParam())}),e()()(),r(34,"hr"),t(35,"form",null,4)(37,"div",6)(38,"po-input",21),h("ngModelChange",function(o){return s(d),f(i.title,o)||(i.title=o),c(o)}),e(),t(39,"po-input",22),h("ngModelChange",function(o){return s(d),f(i.subtitle,o)||(i.subtitle=o),c(o)}),e(),t(40,"po-input",23),h("ngModelChange",function(o){return s(d),f(i.literals,o)||(i.literals=o),c(o)}),E("p-change",function(){return s(d),c(i.changeLiterals())}),e()(),t(41,"div",6)(42,"po-button",24),E("p-click",function(){return s(d),c(i.restore())}),e()()()}if(l&2){let d=I(3),b=I(20),o=I(28);u("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-literals",i.customLiterals)("p-title",i.title)("p-subtitle",i.subtitle),p(5),g("ngModel",i.action.action),p(),g("ngModel",i.action.label),p(),g("ngModel",i.action.url),p(2),g("ngModel",i.action.type),u("p-options",i.typeOptions),p(),g("ngModel",i.action.icon),u("p-options",i.iconOptions),p(),g("ngModel",i.action),u("p-options",i.actionOptions),p(2),u("p-disabled",d.form.invalid),p(5),g("ngModel",i.breadcrumb.favorite),p(4),g("ngModel",i.breadcrumbItem.label),p(),g("ngModel",i.breadcrumbItem.link),p(2),u("p-disabled",b.invalid),p(5),g("ngModel",i.breadcrumbParams.property),p(),g("ngModel",i.breadcrumbParams.value),p(2),u("p-disabled",o.invalid),p(5),g("ngModel",i.title),p(),g("ngModel",i.subtitle),p(),g("ngModel",i.literals)}},dependencies:[q,V,F,N,O,Z,$,ne,ie,x],encapsulation:2})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-page-default-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Page Default Labs"),e(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-page-default-labs/sample-po-page-default-labs.component.html"),e(),t(13,"pre",7),n(14,`<po-page-default
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-literals]="customLiterals"
  [p-title]="title"
  [p-subtitle]="subtitle"
>
</po-page-default>

<hr />

<form #formAction="ngForm">
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
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<hr />

<form #formBreadcrumbFavorite="ngForm">
  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="breadcrumbFavorite"
      [(ngModel)]="breadcrumb.favorite"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/favorite"
      p-label="Breadcrumb favorite"
    >
    </po-input>
  </div>
</form>

<form #formBreadcrumbItems="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbItemLabel"
      [(ngModel)]="breadcrumbItem.label"
      p-clean
      p-label="Breadcrumb item label"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="breadcrumbItemLink"
      [(ngModel)]="breadcrumbItem.link"
      p-clean
      p-label="Breadcrumb item link"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6 po-lg-4"
      p-label="Add breadcrumb item"
      [p-disabled]="formBreadcrumbItems.invalid"
      (p-click)="addBreadcrumbItem()"
    >
    </po-button>
  </div>
</form>

<hr />

<form #formBreadcrumbParams="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbParamsProperty"
      [(ngModel)]="breadcrumbParams.property"
      p-clean
      p-label="Breadcrumb params property"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="breadcrumbParamsValue"
      [(ngModel)]="breadcrumbParams.value"
      p-clean
      p-label="Breadcrumb params value"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6 po-lg-4"
      p-label="Add breadcrumb params"
      [p-disabled]="formBreadcrumbParams.invalid"
      (p-click)="addBreadcrumbParam()"
    >
    </po-button>
  </div>
</form>

<hr />

<form #formPage="ngForm">
  <div class="po-row">
    <po-input class="po-md-12" name="title" [(ngModel)]="title" p-label="Title" p-required> </po-input>
    <po-input class="po-md-12" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

    <po-input
      class="po-lg-12"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"otherActions": "Mais a\xE7\xF5es"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-page-default-labs/sample-po-page-default-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem } from '@po-ui/ng-components';
import { PoCheckboxGroupOption, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction, PoPageDefaultLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-default-labs',
  templateUrl: './sample-po-page-default-labs.component.html',
  standalone: false
})
export class SamplePoPageDefaultLabsComponent implements OnInit {
  action: PoPageAction;
  actions: Array<PoPageAction>;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  customLiterals: PoPageDefaultLiterals;
  literals: string;
  title: string;
  subtitle: string;

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'ph ph-newspaper', label: 'ph ph-newspaper' },
    { value: 'ph ph-magnifying-glass', label: 'ph ph-magnifying-glass' },
    { value: 'ph ph-globe', label: 'ph ph-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoPageAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions = [...this.actions, newAction];

    this.restoreActionForm();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: undefined, link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = { [this.breadcrumbParams.property]: this.breadcrumbParams.value };

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
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
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.literals = '';
    this.title = 'PO Page Default';
    this.subtitle = '';
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null
    };
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),e()()()()(),t(21,"div",10),r(22,"sample-po-page-default-labs"),e(),r(23,"hr")),l&2&&(p(5),D("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),u("ngClass",M(4,Pe,i.hideSampleCodeTabs)))},dependencies:[T,y,C,w,me],encapsulation:2})}return a})();var R=(()=>{class a{getColumns(){return[{property:"cities",label:"Cities that most downloaded PO"},{property:"package",label:"Package version"},{property:"downloads",label:"Downloads"}]}getItems(){return[{cities:"S\xE3o Paulo",package:"2.0.0-beta.2",downloads:"2000"},{cities:"Joinville",package:"1.9.1",downloads:"1000"},{cities:"Rio de Janeiro",package:"2.0.0-beta.2",downloads:"250"},{cities:"Santa Catarina",package:"1.9.1",downloads:"100"},{cities:"Curitiba",package:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",package:"1.9.1",downloads:"250"},{cities:"Londrina",package:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",package:"1.9.1",downloads:"1100"}]}static \u0275fac=function(l){return new(l||a)};static \u0275prov=Q({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var we=["formShare"],se=(()=>{class a{poNotification;sampleDashboardService;formShare;poModal;columns;email=void 0;isSubscribed=!1;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"ph ph-share"},{label:"GitHub",url:"https://github.com/po-ui/po-angular"},{label:"Components",url:"/documentation"},{label:"Disable notification",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};cancelAction={action:()=>{this.modalClose()},label:"Cancel"};shareAction={action:()=>{this.share()},label:"Share"};constructor(m,l){this.poNotification=m,this.sampleDashboardService=l}ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Email invalid."),this.modalClose()}disableNotification(){this.isSubscribed=!0}static \u0275fac=function(l){return new(l||a)(P(j),P(R))};static \u0275cmp=S({type:a,selectors:[["sample-po-page-default-dashboard"]],viewQuery:function(l,i){if(l&1&&(H(we,7),H(W,7)),l&2){let d;z(d=G())&&(i.formShare=d.first),z(d=G())&&(i.poModal=d.first)}},standalone:!1,features:[K([R])],decls:38,vars:8,consts:[["formShare","ngForm"],["p-title","Dashboard",3,"p-actions","p-breadcrumb"],[1,"po-row"],["p-title","Daily visitors",1,"po-md-6","po-lg-4","po-mb-2"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-widget-text-subtitle"],["p-title","Most viewed page",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Website status",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","NPM downloads",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Devforum PO questions",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Angular versions supported",1,"po-md-6","po-lg-4","po-mb-2"],[3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(l,i){if(l&1){let d=B();t(0,"po-page-default",1)(1,"div",2)(2,"po-widget",3)(3,"div",4),n(4,"540"),e(),t(5,"div",5),n(6,"www.po.com.br"),e()(),t(7,"po-widget",6)(8,"div",4),n(9,"300 views"),e(),t(10,"div",5),n(11,"https://po-ui.io"),e()(),t(12,"po-widget",7)(13,"div",4),n(14,"Online"),e(),t(15,"div",5),n(16,"28 days"),e()(),t(17,"po-widget",8)(18,"div",4),n(19,"266"),e(),t(20,"div",5),n(21,"@po-ui/ng-components - 1.10.1"),e()(),t(22,"po-widget",9)(23,"div",4),n(24,"800 questions"),e(),t(25,"div",5),n(26,"https://devforum.po.com.br"),e()(),t(27,"po-widget",10)(28,"div",4),n(29,"AngularJS - Angular 6"),e(),t(30,"div",5),n(31,"Angular 6 most downloaded"),e()()(),r(32,"hr")(33,"po-table",11),e(),t(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),h("ngModelChange",function(o){return s(d),f(i.email,o)||(i.email=o),c(o)}),e()()()}l&2&&(u("p-actions",i.actions)("p-breadcrumb",i.breadcrumb),p(33),u("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",!1),p(),u("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),p(3),g("ngModel",i.email))},dependencies:[q,V,F,N,O,te,W,x,ee,ae],styles:[".sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}"]})}return a})();var De=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-page-default-dashboard-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Page Default - Dashboard"),e(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html"),e(),t(13,"pre",7),n(14,`<po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
  <div class="po-row">
    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Daily visitors">
      <div class="po-font-subtitle po-text-center">540</div>
      <div class="po-text-center sample-widget-text-subtitle">www.po.com.br</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Most viewed page">
      <div class="po-font-subtitle po-text-center">300 views</div>
      <div class="po-text-center sample-widget-text-subtitle">https://po-ui.io</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Website status">
      <div class="po-font-subtitle po-text-center">Online</div>
      <div class="po-text-center sample-widget-text-subtitle">28 days</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="NPM downloads">
      <div class="po-font-subtitle po-text-center">266</div>
      <div class="po-text-center sample-widget-text-subtitle">&#64;po-ui/ng-components - 1.10.1</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Devforum PO questions">
      <div class="po-font-subtitle po-text-center">800 questions</div>
      <div class="po-text-center sample-widget-text-subtitle">https://devforum.po.com.br</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Angular versions supported">
      <div class="po-font-subtitle po-text-center">AngularJS - Angular 6</div>
      <div class="po-text-center sample-widget-text-subtitle">Angular 6 most downloaded</div>
    </po-widget>
  </div>

  <hr />

  <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>
</po-page-default>

<po-modal p-title="Share webpage" [p-primary-action]="shareAction" [p-secondary-action]="cancelAction">
  <form #formShare="ngForm">
    <po-email
      class="po-lg-12"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Type an e-mail for sharing webpage: http://www.po.com.br"
      p-required
    >
    </po-email>
  </form>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';

import { SampleDashboardService } from './sample-po-page-default-dashboard.service';

@Component({
  selector: 'sample-po-page-default-dashboard',
  templateUrl: './sample-po-page-default-dashboard.component.html',
  styles: [
    \`
      .sample-widget-text-subtitle {
        font-family: NunitoSans;
        font-size: 14px;
        text-align: center;
        color: #9da7a9;
      }
    \`
  ],
  providers: [SampleDashboardService],
  standalone: false
})
export class SamplePoPageDefaultDashboardComponent implements OnInit {
  @ViewChild('formShare', { static: true }) formShare: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  columns: Array<PoTableColumn>;
  email: string = undefined;
  isSubscribed: boolean = false;
  items: Array<object>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Share', action: this.modalOpen.bind(this), icon: 'ph ph-share' },
    { label: 'GitHub', url: 'https://github.com/po-ui/po-angular' },
    { label: 'Components', url: '/documentation' },
    { label: 'Disable notification', action: this.disableNotification.bind(this), disabled: () => this.isSubscribed }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Dashboard' }]
  };

  public readonly cancelAction: PoModalAction = {
    action: () => {
      this.modalClose();
    },
    label: 'Cancel'
  };

  public readonly shareAction: PoModalAction = {
    action: () => {
      this.share();
    },
    label: 'Share'
  };

  constructor(
    private poNotification: PoNotificationService,
    private sampleDashboardService: SampleDashboardService
  ) {}

  ngOnInit(): void {
    this.columns = this.sampleDashboardService.getColumns();
    this.items = this.sampleDashboardService.getItems();
  }

  modalClose() {
    this.poModal.close();
    this.formShare.reset();
  }

  modalOpen() {
    this.poModal.open();
  }

  share() {
    if (this.formShare.valid) {
      this.poNotification.success(\`Webpage shared successfully to: \${this.email}.\`);
    } else {
      this.poNotification.error(\`Email invalid.\`);
    }
    this.modalClose();
  }

  private disableNotification() {
    this.isSubscribed = true;
  }
}
`),e(),t(21,"label",6),n(22,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts"),e(),t(23,"pre",9),n(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SampleDashboardService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'cities', label: 'Cities that most downloaded PO' },
      { property: 'package', label: 'Package version' },
      { property: 'downloads', label: 'Downloads' }
    ];
  }

  getItems() {
    return [
      { cities: 'S\xE3o Paulo', package: '2.0.0-beta.2', downloads: '2000' },
      { cities: 'Joinville', package: '1.9.1', downloads: '1000' },
      { cities: 'Rio de Janeiro', package: '2.0.0-beta.2', downloads: '250' },
      { cities: 'Santa Catarina', package: '1.9.1', downloads: '100' },
      { cities: 'Curitiba', package: '2.0.0-beta.2', downloads: '1040' },
      { cities: 'Goiania', package: '1.9.1', downloads: '250' },
      { cities: 'Londrina', package: '1.9.1', downloads: '35' },
      { cities: 'Belo Horizonte', package: '1.9.1', downloads: '1100' }
    ];
  }
}
`),e()()()()(),t(25,"div",10),r(26,"sample-po-page-default-dashboard"),e(),r(27,"hr")),l&2&&(p(5),D("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),u("ngClass",M(4,De,i.hideSampleCodeTabs)))},dependencies:[T,y,C,w,se],encapsulation:2})}return a})();var ue=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-page-default-doc"]],standalone:!1,decls:653,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","PoPageDefaultLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(l,i){l&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoPageModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,`M\xF3dulo dos componentes po-page-default, po-page-detail, po-page-edit,
po-page-list e po-page-slide.`),e()(),t(7,"h3",3),n(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),n(11,"PoPageDefaultComponent"),e()(),t(12,"div",2)(13,"p"),n(14,"O componente "),t(15,"code"),n(16,"po-page-default"),e(),n(17," \xE9 utilizado como o container principal para as telas sem um template definido."),e(),t(18,"h4",6),n(19,"Tokens customiz\xE1veis"),e(),t(20,"blockquote")(21,"p"),n(22,"Para maiores informa\xE7\xF5es, acesse o guia "),t(23,"a",7),n(24,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(25,"."),e()(),t(26,"table")(27,"thead")(28,"tr")(29,"th"),n(30,"Propriedade"),e(),t(31,"th"),n(32,"Descri\xE7\xE3o"),e(),t(33,"th"),n(34,"Valor Padr\xE3o"),e()()(),t(35,"tbody")(36,"tr")(37,"td")(38,"strong"),n(39,"Default Values"),e()(),r(40,"td")(41,"td"),e(),t(42,"tr")(43,"td")(44,"code"),n(45,"--padding"),e()(),t(46,"td"),n(47,"Espa\xE7amento do componente"),e(),t(48,"td")(49,"code"),n(50,"var(--spacing-xs) var(--spacing-md)"),e()()(),t(51,"tr")(52,"td")(53,"code"),n(54,"--gap"),e()(),t(55,"td"),n(56,"Gap entre o header e o conte\xFAdo"),e(),t(57,"td")(58,"code"),n(59,"var(--spacing-md)"),e()()(),t(60,"tr")(61,"td")(62,"code"),n(63,"--padding-top-header"),e()(),t(64,"td"),n(65,"Espa\xE7amento do topo do header"),e(),t(66,"td")(67,"code"),n(68,"var(--color-neutral-light-30)"),e()()(),t(69,"tr")(70,"td")(71,"code"),n(72,"--gap-actions"),e()(),t(73,"td"),n(74,"Gap entre os bot\xF5es de action"),e(),t(75,"td")(76,"code"),n(77,"var(--spacing-xs)"),e()()(),t(78,"tr")(79,"td")(80,"code"),n(81,"--padding-content"),e()(),t(82,"td"),n(83,"Espa\xE7amento do conte\xFAdo"),e(),t(84,"td")(85,"code"),n(86,"var(--spacing-xs) var(--spacing-sm)"),e()()()()()(),t(87,"div",8)(88,"h4",9),n(89,"Seletor"),e(),t(90,"pre",10),n(91,`<po-page-default
    p-actions="Array<PoPageAction>"
    p-breadcrumb="PoBreadcrumb"
    p-literals="PoPageDefaultLiterals"
    p-subtitle="string"
    p-title="string" >
</po-page-default>
`),e()(),t(92,"h4",11),n(93,"Propriedades"),e(),t(94,"table",12)(95,"tr",13)(96,"th",14),n(97,"Nome"),e(),t(98,"th",14),n(99,"Tipo"),e(),t(100,"th",14),n(101,"Padr\xE3o"),e(),t(102,"th",14),n(103,"Descri\xE7\xE3o"),e()(),t(104,"tr",15)(105,"td",16)(106,"div",17)(107,"span",18),n(108," p-actions"),r(109,"br"),e()()(),t(110,"td",19)(111,"code",20),n(112,"Array<PoPageAction>"),e()(),t(113,"td",21),n(114,"-"),e(),t(115,"td",22)(116,"em")(117,"strong"),n(118,"(opcional)"),e()(),t(119,"p"),n(120,"Nesta propriedade deve ser definido um array de objetos que implementam a interface "),t(121,"code"),n(122,"PoPageAction"),e(),n(123,"."),e()()(),t(124,"tr",15)(125,"td",16)(126,"div",17)(127,"span",18),n(128," p-breadcrumb"),r(129,"br"),e()()(),t(130,"td",19)(131,"code",23),n(132,"PoBreadcrumb"),e()(),t(133,"td",21),n(134,"-"),e(),t(135,"td",22)(136,"em")(137,"strong"),n(138,"(opcional)"),e()(),t(139,"p"),n(140,"Objeto com propriedades do breadcrumb."),e()()(),t(141,"tr",15)(142,"td",16)(143,"div",17)(144,"span",18),n(145," p-literals"),r(146,"br"),e()()(),t(147,"td",19)(148,"code",24),n(149,"PoPageDefaultLiterals"),e()(),t(150,"td",21),n(151,"-"),e(),t(152,"td",22)(153,"em")(154,"strong"),n(155,"(opcional)"),e()(),t(156,"p"),n(157,"Objeto com as literais usadas no "),t(158,"code"),n(159,"po-page-default"),e(),n(160,"."),e(),t(161,"p"),n(162,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),e(),t(163,"pre")(164,"code"),n(165,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};`),e()(),t(166,"p"),n(167,"Ou passando apenas as literais que deseja customizar:"),e(),t(168,"pre")(169,"code"),n(170,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};`),e()(),t(171,"p"),n(172,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),e(),t(173,"pre")(174,"code"),n(175,`<po-page-default
  [p-literals]="customLiterals">
</po-page-default>`),e()(),t(176,"blockquote")(177,"p"),n(178,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),t(179,"a",25)(180,"code"),n(181,"PoI18nService"),e()(),n(182," ou "),t(183,"em"),n(184,"browser"),e(),n(185,"."),e()()()(),t(186,"tr",15)(187,"td",16)(188,"div",17)(189,"span",18),n(190," p-subtitle"),r(191,"br"),e()()(),t(192,"td",19)(193,"code",26),n(194,"string"),e()(),t(195,"td",21),n(196,"-"),e(),t(197,"td",22)(198,"em")(199,"strong"),n(200,"(opcional)"),e()(),t(201,"p"),n(202,"Subtitulo do Header da p\xE1gina"),e()()(),t(203,"tr",15)(204,"td",16)(205,"div",17)(206,"span",18),n(207," p-title"),r(208,"br"),e()()(),t(209,"td",19)(210,"code",26),n(211,"string"),e()(),t(212,"td",21),n(213,"-"),e(),t(214,"td",22)(215,"p"),n(216,"T\xEDtulo da p\xE1gina."),e()()()(),t(217,"h3"),n(218,"Interfaces"),e(),t(219,"h4",27)(220,"code",5),n(221,"PoBreadcrumbItem"),e()(),t(222,"div",2)(223,"p"),n(224,"Interface que define cada item do componente "),t(225,"strong"),n(226,"po-breadcrumb"),e(),n(227,"."),e()(),t(228,"h4",11),n(229,"Propriedades"),e(),t(230,"table",12)(231,"tr",13)(232,"th",14),n(233,"Nome"),e(),t(234,"th",14),n(235,"Tipo"),e(),t(236,"th",14),n(237,"Descri\xE7\xE3o"),e()(),t(238,"tr",15)(239,"td",16)(240,"div",17)(241,"span",18),n(242," action"),r(243,"br"),e()()(),t(244,"td",19)(245,"code",28),n(246,"Function"),e()(),t(247,"td",22)(248,"em")(249,"strong"),n(250,"(opcional)"),e()(),t(251,"p"),n(252,"A\xE7\xE3o executada ao clicar no item."),e(),t(253,"blockquote")(254,"p"),n(255,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),t(256,"em"),n(257,"label"),e(),n(258," do item como par\xE2metro para execu\xE7\xE3o."),e()()()(),t(259,"tr",15)(260,"td",16)(261,"div",17)(262,"span",18),n(263," label"),r(264,"br"),e()()(),t(265,"td",19)(266,"code",26),n(267,"string"),e()(),t(268,"td",22)(269,"p"),n(270,"R\xF3tulo do item."),e()()(),t(271,"tr",15)(272,"td",16)(273,"div",17)(274,"span",18),n(275," link"),r(276,"br"),e()()(),t(277,"td",19)(278,"code",26),n(279,"string"),e()(),t(280,"td",22)(281,"em")(282,"strong"),n(283,"(opcional)"),e()(),t(284,"p"),n(285,"Url do item."),e(),t(286,"blockquote")(287,"p"),n(288,"Caso o item tamb\xE9m contenha uma "),t(289,"em"),n(290,"action"),e(),n(291," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),t(292,"em"),n(293,"link"),e(),n(294,"."),e()(),t(295,"blockquote")(296,"p"),n(297,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),t(298,"strong")(299,"a",29),n(300,"Veja um exemplo de como criar rotas aqui"),e()(),n(301,"."),e()(),t(302,"blockquote")(303,"p"),n(304,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),t(305,"code"),n(306,"p-favorite-service"),e(),n(307," consiga favoritar ou desfavoritar."),e()()()()(),t(308,"h4",27)(309,"code",5),n(310,"PoBreadcrumb"),e()(),t(311,"div",2)(312,"p"),n(313,"Interface que define o "),t(314,"code"),n(315,"po-breadcrumb"),e(),n(316,"."),e()(),t(317,"h4",11),n(318,"Propriedades"),e(),t(319,"table",12)(320,"tr",13)(321,"th",14),n(322,"Nome"),e(),t(323,"th",14),n(324,"Tipo"),e(),t(325,"th",14),n(326,"Descri\xE7\xE3o"),e()(),t(327,"tr",15)(328,"td",16)(329,"div",17)(330,"span",18),n(331," favorite"),r(332,"br"),e()()(),t(333,"td",19)(334,"code",26),n(335,"string"),e()(),t(336,"td",22)(337,"em")(338,"strong"),n(339,"(opcional)"),e()(),t(340,"p"),n(341,"Permite definir uma URL para favoritar ou desfavoritar."),e(),t(342,"blockquote")(343,"p"),n(344,"Para maiores informa\xE7\xF5es verificar a propriedade "),t(345,"code"),n(346,"p-favorite-service"),e(),n(347," do componente "),t(348,"code"),n(349,"po-breadcrumb"),e(),n(350,"."),e()()()(),t(351,"tr",15)(352,"td",16)(353,"div",17)(354,"span",18),n(355," items"),r(356,"br"),e()()(),t(357,"td",19)(358,"code",30),n(359,"Array<PoBreadcrumbItem>"),e()(),t(360,"td",22)(361,"p"),n(362,"Lista de itens do "),t(363,"em"),n(364,"breadcrumb"),e(),n(365,"."),e(),t(366,"p")(367,"strong"),n(368,"Exemplo:"),e()(),t(369,"pre")(370,"code"),n(371,"{ label: 'Po Portal', link: 'portal' }"),e()()()(),t(372,"tr",15)(373,"td",16)(374,"div",17)(375,"span",18),n(376," params"),r(377,"br"),e()()(),t(378,"td",19)(379,"code",31),n(380,"object"),e()(),t(381,"td",22)(382,"em")(383,"strong"),n(384,"(opcional)"),e()(),t(385,"p"),n(386,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),e()()()(),t(387,"h4",27)(388,"code",5),n(389,"PoPageAction"),e()(),t(390,"div",2)(391,"p"),n(392,"Interface para as a\xE7\xF5es dos componentes po-page-default e po-page-list."),e(),t(393,"blockquote")(394,"p"),n(395,"As propriedades "),t(396,"code"),n(397,"selected"),e(),n(398,", "),t(399,"code"),n(400,"separator"),e(),n(401," e "),t(402,"code"),n(403,"type"),e(),n(404,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),e()()(),t(405,"h4",11),n(406,"Propriedades"),e(),t(407,"table",12)(408,"tr",13)(409,"th",14),n(410,"Nome"),e(),t(411,"th",14),n(412,"Tipo"),e(),t(413,"th",14),n(414,"Descri\xE7\xE3o"),e()(),t(415,"tr",15)(416,"td",16)(417,"div",17)(418,"span",18),n(419," action"),r(420,"br"),e()()(),t(421,"td",19)(422,"code",28),n(423,"Function"),e()(),t(424,"td",22)(425,"em")(426,"strong"),n(427,"(opcional)"),e()(),t(428,"p"),n(429,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),e(),t(430,"blockquote")(431,"p"),n(432,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),t(433,"em"),n(434,"bind"),e(),n(435,"."),e()(),t(436,"p"),n(437,"Exemplo: "),t(438,"code"),n(439,"action: this.myFunction.bind(this)"),e()()()(),t(440,"tr",15)(441,"td",16)(442,"div",17)(443,"span",18),n(444," disabled"),r(445,"br"),e()()(),t(446,"td",19)(447,"code",32),n(448,"boolean "),e(),t(449,"code",28),n(450," Function"),e()(),t(451,"td",22)(452,"em")(453,"strong"),n(454,"(opcional)"),e()(),t(455,"p"),n(456,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),e(),t(457,"p"),n(458,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),e()()(),t(459,"tr",15)(460,"td",16)(461,"div",17)(462,"span",18),n(463," icon"),r(464,"br"),e()()(),t(465,"td",19)(466,"code",26),n(467,"string "),e(),t(468,"code",33),n(469," TemplateRef<void>"),e()(),t(470,"td",22)(471,"em")(472,"strong"),n(473,"(opcional)"),e()(),t(474,"p"),n(475,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),e(),t(476,"p"),n(477,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(478,"a",34),n(479,"Biblioteca de \xEDcones"),e(),n(480,". conforme exemplo abaixo:"),e(),t(481,"pre")(482,"code"),n(483,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'ph ph-newspaper' }]">
</po-component>`),e()(),t(484,"p"),n(485,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),e(),t(486,"pre")(487,"code"),n(488,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>`),e()(),t(489,"p"),n(490,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(491,"code"),n(492,"TemplateRef"),e(),n(493,`, conforme exemplo abaixo:
component.html:`),e(),t(494,"pre")(495,"code"),n(496,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>`),e()(),t(497,"p"),n(498,"component.ts:"),e(),t(499,"pre")(500,"code"),n(501,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];`),e()()()(),t(502,"tr",15)(503,"td",16)(504,"div",17)(505,"span",18),n(506," label"),r(507,"br"),e()()(),t(508,"td",19)(509,"code",26),n(510,"string"),e()(),t(511,"td",22)(512,"p"),n(513,"R\xF3tulo da a\xE7\xE3o."),e()()(),t(514,"tr",15)(515,"td",16)(516,"div",17)(517,"span",18),n(518," selected"),r(519,"br"),e()()(),t(520,"td",19)(521,"code",32),n(522,"boolean"),e()(),t(523,"td",22)(524,"em")(525,"strong"),n(526,"(opcional)"),e()(),t(527,"p"),n(528,"Define se a a\xE7\xE3o est\xE1 selecionada."),e()()(),t(529,"tr",15)(530,"td",16)(531,"div",17)(532,"span",18),n(533," separator"),r(534,"br"),e()()(),t(535,"td",19)(536,"code",32),n(537,"boolean"),e()(),t(538,"td",22)(539,"em")(540,"strong"),n(541,"(opcional)"),e()(),t(542,"p"),n(543,"Atribui uma linha separadora acima do item."),e()()(),t(544,"tr",15)(545,"td",16)(546,"div",17)(547,"span",18),n(548," type"),r(549,"br"),e()()(),t(550,"td",19)(551,"code",26),n(552,"string"),e()(),t(553,"td",22)(554,"em")(555,"strong"),n(556,"(opcional)"),e()(),t(557,"p"),n(558,"Define a cor do item, sendo "),t(559,"code"),n(560,"default"),e(),n(561," o padr\xE3o."),e(),t(562,"p"),n(563,"Valores v\xE1lidos:"),e(),t(564,"ul")(565,"li")(566,"code"),n(567,"default"),e()(),t(568,"li")(569,"code"),n(570,"danger"),e(),n(571," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),e()()()(),t(572,"tr",15)(573,"td",16)(574,"div",17)(575,"span",18),n(576," url"),r(577,"br"),e()()(),t(578,"td",19)(579,"code",26),n(580,"string"),e()(),t(581,"td",22)(582,"em")(583,"strong"),n(584,"(opcional)"),e()(),t(585,"p"),n(586,"URL utilizada no redirecionamento das p\xE1ginas."),e()()(),t(587,"tr",15)(588,"td",16)(589,"div",17)(590,"span",18),n(591," visible"),r(592,"br"),e()()(),t(593,"td",19)(594,"code",32),n(595,"boolean "),e(),t(596,"code",28),n(597," Function"),e()(),t(598,"td",22)(599,"em")(600,"strong"),n(601,"(opcional)"),e()(),t(602,"p"),n(603,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),e(),t(604,"blockquote")(605,"p"),n(606,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),e()(),t(607,"p"),n(608,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),e(),t(609,"ul")(610,"li")(611,"p"),n(612,"Fun\xE7\xE3o que deve retornar um booleano."),e()(),t(613,"li")(614,"p"),n(615,"Informar diretamente um valor booleano."),e()()()()()(),t(616,"h4",27)(617,"code",5),n(618,"PoPageDefaultLiterals"),e()(),t(619,"div",2)(620,"p"),n(621,"Interface para defini\xE7\xE3o das literais usadas no "),t(622,"code"),n(623,"po-page-default"),e(),n(624,"."),e()(),t(625,"h4",11),n(626,"Propriedades"),e(),t(627,"table",12)(628,"tr",13)(629,"th",14),n(630,"Nome"),e(),t(631,"th",14),n(632,"Tipo"),e(),t(633,"th",14),n(634,"Descri\xE7\xE3o"),e()(),t(635,"tr",15)(636,"td",16)(637,"div",17)(638,"span",18),n(639," otherActions"),r(640,"br"),e()()(),t(641,"td",19)(642,"code",26),n(643,"string"),e()(),t(644,"td",22)(645,"em")(646,"strong"),n(647,"(opcional)"),e()(),t(648,"p"),n(649,"Legenda do "),t(650,"code"),n(651,"po-dropdown"),e(),n(652," de a\xE7\xF5es."),e()()()()())},dependencies:[y],encapsulation:2})}return a})();var be=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(P(X),P(Y))};static \u0275cmp=S({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Page Default",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(l,i){l&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),r(3,"sample-po-page-default-doc"),e(),t(4,"po-tab",3),r(5,"sample-po-page-default-basic-view")(6,"sample-po-page-default-labs-view")(7,"sample-po-page-default-dashboard-view"),e()()()),l&2&&(u("p-actions",i.actions),p(2),u("p-active",i.activeTab.includes("doc")),p(2),u("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[x,C,w,pe,de,ce,ue],encapsulation:2})}return a})();var Te=[{path:"",component:be}],ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=L({type:a});static \u0275inj=A({imports:[U.forChild(Te),U]})}return a})();var tt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=L({type:a});static \u0275inj=A({imports:[oe,ge]})}return a})();export{tt as DocPoPageDefaultModule};
