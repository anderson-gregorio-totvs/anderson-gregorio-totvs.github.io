import{$ as B,$a as M,$c as ie,Ca as N,Cd as le,Da as z,Ea as J,F as p,Fa as T,Fc as ee,G as c,Ga as e,Ia as L,Jb as X,Jc as te,Ka as b,La as h,Lb as H,Ma as S,Mb as V,Na as K,Nb as I,Ob as j,Od as se,Pa as _,Pb as G,Rd as D,T as m,U as P,Wb as Z,Xd as y,Yb as O,Yd as C,Zb as U,_ as E,ad as q,gd as ne,ha as g,ka as w,md as ae,na as i,oa as t,oc as $,pa as r,rd as oe,re as x,se as me,ta as k,ua as f,x as Y,y as F,yd as re,zc as W}from"./chunk-QVEZB6GT.js";var de=(()=>{class s{static \u0275fac=function(o){return new(o||s)};static \u0275cmp=E({type:s,selectors:[["sample-po-page-list-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page List"]],template:function(o,n){o&1&&r(0,"po-page-list",0)},dependencies:[D],encapsulation:2})}return s})();var ye=s=>({"docs-sample-code-tabs":s}),ce=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||s)};static \u0275cmp=E({type:s,selectors:[["sample-po-page-list-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(r(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page List Basic"),t(),i(4,"a",2),f("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-list-basic/sample-po-page-list-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-page-list p-title="PO Page List"> </po-page-list>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-list-basic/sample-po-page-list-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),t()()()()(),i(21,"div",10),r(22,"sample-po-page-list-basic"),t(),r(23,"hr")),o&2&&(m(5),w("po-icon "+n.sampleCodeButtonIcon),m(),L(" ",n.sampleCodeButtonLabel,""),m(),g("ngClass",_(4,ye,n.hideSampleCodeTabs)))},dependencies:[M,x,y,C,de],encapsulation:2})}return s})();var ue=(()=>{class s{poNotification;action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];constructor(l){this.poNotification=l}ngOnInit(){this.restore()}addAction(l){let o=Object.assign({},l);o.action=o.action?this.showAction.bind(this,o.action):void 0,this.actions=[...this.actions,o],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let l={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={}}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel()}addDisclaimerGroupParam(l,o){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:l,hideRemoveAll:o})}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onChangeDisclaimerGroupHideRemoveAll(l){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,l)}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=!1,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals="",this.title="PO Page List",this.subtitle="",this.restoreDisclaimerModel(),this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}showAdvanceAction(l){this.poNotification.success(`Advance Action clicked: ${l}`)}static \u0275fac=function(o){return new(o||s)(P(q))};static \u0275cmp=E({type:s,selectors:[["sample-po-page-list-labs"]],standalone:!1,decls:62,vars:37,consts:[["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],["formDisclaimers","ngForm"],["form","ngForm"],[3,"p-actions","p-breadcrumb","p-disclaimer-group","p-filter","p-literals","p-title","p-subtitle"],["p-label","Model",3,"p-value"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-4",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-4",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-3",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-3",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-3",3,"p-click","p-disabled"],["name","disclaimerGroupTitle","p-clean","","p-label","Disclaimer group title",1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","disclaimerGroupHideRemoveAll","p-label","Disclaimer group hide remove all","ngDefaultControl","",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","disclaimerLabel","p-clean","","p-label","Disclaimer label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-clean","","p-label","Disclaimer property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-clean","","p-label","Disclaimer value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer hide close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add disclaimer",1,"po-md-3",3,"p-click","p-disabled"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-12",3,"ngModelChange","ngModel"],["name","filterPlaceholder","p-label","Filter placeholder",1,"po-md-3",3,"ngModelChange","ngModel"],["name","filterWidth","p-label","Filter width",1,"po-md-3",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,n){if(o&1){let d=k();i(0,"po-page-list",6),r(1,"hr")(2,"po-info",7),t(),r(3,"hr"),i(4,"form",null,0)(6,"div",8)(7,"po-input",9),S("ngModelChange",function(a){return p(d),h(n.action.action,a)||(n.action.action=a),c(a)}),t(),i(8,"po-input",10),S("ngModelChange",function(a){return p(d),h(n.action.label,a)||(n.action.label=a),c(a)}),t(),i(9,"po-input",11),S("ngModelChange",function(a){return p(d),h(n.action.url,a)||(n.action.url=a),c(a)}),t()(),i(10,"div",8)(11,"po-select",12),S("ngModelChange",function(a){return p(d),h(n.action.type,a)||(n.action.type=a),c(a)}),t(),i(12,"po-select",13),S("ngModelChange",function(a){return p(d),h(n.action.icon,a)||(n.action.icon=a),c(a)}),t(),i(13,"po-checkbox-group",14),S("ngModelChange",function(a){return p(d),h(n.action,a)||(n.action=a),c(a)}),t()(),i(14,"div",8)(15,"po-button",15),f("p-click",function(){return p(d),c(n.addAction(n.action))}),t()()(),r(16,"hr"),i(17,"form",null,1)(19,"div",8)(20,"po-input",16),S("ngModelChange",function(a){return p(d),h(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),c(a)}),t()()(),i(21,"form",null,2)(23,"div",8)(24,"po-input",17),S("ngModelChange",function(a){return p(d),h(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),c(a)}),t(),i(25,"po-input",18),S("ngModelChange",function(a){return p(d),h(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),c(a)}),t()(),i(26,"div",8)(27,"po-button",19),f("p-click",function(){return p(d),c(n.addBreadcrumbItem())}),t()()(),r(28,"hr"),i(29,"form",null,3)(31,"div",8)(32,"po-input",20),S("ngModelChange",function(a){return p(d),h(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),c(a)}),t(),i(33,"po-input",21),S("ngModelChange",function(a){return p(d),h(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),c(a)}),t()(),i(34,"div",8)(35,"po-button",22),f("p-click",function(){return p(d),c(n.addBreadcrumbParam())}),t()()(),r(36,"hr"),i(37,"div",8)(38,"po-input",23),S("ngModelChange",function(a){return p(d),h(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),c(a)}),f("p-change-model",function(){return p(d),c(n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll))}),t(),i(39,"po-switch",24),S("ngModelChange",function(a){return p(d),h(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),c(a)}),f("p-change",function(a){return p(d),c(n.onChangeDisclaimerGroupHideRemoveAll(a))}),t()(),i(40,"form",null,4)(42,"div",8)(43,"po-input",25),S("ngModelChange",function(a){return p(d),h(n.disclaimerLabel,a)||(n.disclaimerLabel=a),c(a)}),t(),i(44,"po-input",26),S("ngModelChange",function(a){return p(d),h(n.disclaimerProperty,a)||(n.disclaimerProperty=a),c(a)}),t()(),i(45,"div",8)(46,"po-input",27),S("ngModelChange",function(a){return p(d),h(n.disclaimerValue,a)||(n.disclaimerValue=a),c(a)}),t(),i(47,"po-switch",28),S("ngModelChange",function(a){return p(d),h(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),c(a)}),t()(),i(48,"div",8)(49,"po-button",29),f("p-click",function(){return p(d),c(n.addDisclaimer())}),t()()(),r(50,"hr"),i(51,"form",null,5)(53,"div",8)(54,"po-input",30),S("ngModelChange",function(a){return p(d),h(n.title,a)||(n.title=a),c(a)}),t(),i(55,"po-input",31),S("ngModelChange",function(a){return p(d),h(n.subtitle,a)||(n.subtitle=a),c(a)}),t(),i(56,"po-input",32),S("ngModelChange",function(a){return p(d),h(n.filter.placeholder,a)||(n.filter.placeholder=a),c(a)}),t(),i(57,"po-input",33),S("ngModelChange",function(a){return p(d),h(n.filter.width,a)||(n.filter.width=a),c(a)}),t()(),i(58,"div",8)(59,"po-input",34),S("ngModelChange",function(a){return p(d),h(n.literals,a)||(n.literals=a),c(a)}),f("p-change",function(){return p(d),c(n.changeLiterals())}),t()(),i(60,"div",8)(61,"po-button",35),f("p-click",function(){return p(d),c(n.restore())}),t()()()}if(o&2){let d=T(5),u=T(22),a=T(30),Pe=T(41);g("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filter)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),m(2),g("p-value",n.filterModel),m(5),b("ngModel",n.action.action),m(),b("ngModel",n.action.label),m(),b("ngModel",n.action.url),m(2),b("ngModel",n.action.type),g("p-options",n.typeOptions),m(),b("ngModel",n.action.icon),g("p-options",n.iconOptions),m(),b("ngModel",n.action),g("p-options",n.actionOptions),m(2),g("p-disabled",d.form.invalid),m(5),b("ngModel",n.breadcrumb.favorite),m(4),b("ngModel",n.breadcrumbItem.label),m(),b("ngModel",n.breadcrumbItem.link),m(2),g("p-disabled",u.invalid),m(5),b("ngModel",n.breadcrumbParams.property),m(),b("ngModel",n.breadcrumbParams.value),m(2),g("p-disabled",a.invalid),m(3),b("ngModel",n.disclaimerGroupTitle),m(),b("ngModel",n.disclaimerGroupHideRemoveAll),m(4),b("ngModel",n.disclaimerLabel),m(),b("ngModel",n.disclaimerProperty),m(2),b("ngModel",n.disclaimerValue),m(),b("ngModel",n.disclaimerHideClose),m(2),g("p-disabled",Pe.invalid),m(5),b("ngModel",n.title),m(),b("ngModel",n.subtitle),m(),b("ngModel",n.filter.placeholder),m(),b("ngModel",n.filter.width),m(2),b("ngModel",n.literals)}},dependencies:[G,X,H,V,j,I,$,W,ae,re,ie,le,D],encapsulation:2})}return s})();var Le=s=>({"docs-sample-code-tabs":s}),ge=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||s)};static \u0275cmp=E({type:s,selectors:[["sample-po-page-list-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(r(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page List Labs"),t(),i(4,"a",2),f("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-list-labs/sample-po-page-list-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-page-list
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-disclaimer-group]="disclaimerGroup"
  [p-filter]="filter"
  [p-literals]="customLiterals"
  [p-title]="title"
  [p-subtitle]="subtitle"
>
  <hr />

  <po-info p-label="Model" [p-value]="filterModel"> </po-info>
</po-page-list>

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
      class="po-md-3"
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
      class="po-md-3"
      p-label="Add breadcrumb params"
      [p-disabled]="formBreadcrumbParams.invalid"
      (p-click)="addBreadcrumbParam()"
    >
    </po-button>
  </div>
</form>

<hr />

<div class="po-row">
  <po-input
    class="po-md-6"
    name="disclaimerGroupTitle"
    [(ngModel)]="disclaimerGroupTitle"
    p-clean
    p-label="Disclaimer group title"
    (p-change-model)="addDisclaimerGroupParam(disclaimerGroupTitle, disclaimerGroupHideRemoveAll)"
  >
  </po-input>

  <po-switch
    class="po-md-6"
    name="disclaimerGroupHideRemoveAll"
    [(ngModel)]="disclaimerGroupHideRemoveAll"
    p-label="Disclaimer group hide remove all"
    (p-change)="onChangeDisclaimerGroupHideRemoveAll($event)"
    ngDefaultControl
  >
  </po-switch>
</div>

<form #formDisclaimers="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="disclaimerLabel" [(ngModel)]="disclaimerLabel" p-clean p-label="Disclaimer label">
    </po-input>

    <po-input
      class="po-md-6"
      name="disclaimerProperty"
      [(ngModel)]="disclaimerProperty"
      p-clean
      p-label="Disclaimer property"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="disclaimerValue"
      [(ngModel)]="disclaimerValue"
      p-clean
      p-label="Disclaimer value"
      p-required
    >
    </po-input>

    <po-switch
      class="po-md-6"
      name="disclaimerHideClose"
      [(ngModel)]="disclaimerHideClose"
      p-label="Disclaimer hide close"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Add disclaimer"
      [p-disabled]="formDisclaimers.invalid"
      (p-click)="addDisclaimer()"
    >
    </po-button>
  </div>
</form>

<hr />

<form #form="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-required> </po-input>
    <po-input class="po-md-12" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

    <po-input class="po-md-3" name="filterPlaceholder" [(ngModel)]="filter.placeholder" p-label="Filter placeholder">
    </po-input>

    <po-input class="po-md-3" name="filterWidth" [(ngModel)]="filter.width" p-label="Filter width"> </po-input>
  </div>

  <div class="po-row">
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
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-list-labs/sample-po-page-list-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem } from '@po-ui/ng-components';
import { PoCheckboxGroupOption, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction, PoPageFilter, PoPageListLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-list-labs',
  templateUrl: './sample-po-page-list-labs.component.html',
  standalone: false
})
export class SamplePoPageListLabsComponent implements OnInit {
  action: PoPageAction;
  actions: Array<PoPageAction>;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  customLiterals: PoPageListLiterals;
  disclaimerGroupHideRemoveAll: boolean;
  disclaimerGroupTitle: string;
  disclaimerHideClose: boolean;
  disclaimerLabel: string;
  disclaimerProperty: string;
  disclaimerValue: string;
  filterModel: string;
  literals: string;
  title: string;
  subtitle: string;

  public disclaimerGroup;

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly filter: PoPageFilter = {
    action: this.showAction.bind(this),
    advancedAction: this.showAdvanceAction.bind(this)
  };

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
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

  addDisclaimer() {
    this.disclaimerGroup.disclaimers = [
      ...this.disclaimerGroup.disclaimers,
      {
        label: this.disclaimerLabel,
        property: this.disclaimerProperty,
        hideClose: this.disclaimerHideClose,
        value: this.disclaimerValue
      }
    ];

    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup);

    this.restoreDisclaimerModel();
  }

  addDisclaimerGroupParam(title, hideRemoveAll) {
    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup, {
      title,
      hideRemoveAll
    });
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onChangeDisclaimerGroupHideRemoveAll(hideRemoveAll: boolean) {
    this.addDisclaimerGroupParam(this.disclaimerGroupTitle, hideRemoveAll);
  }

  restore() {
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.customLiterals = undefined;
    this.disclaimerGroup = {
      title: this.disclaimerGroupTitle,
      disclaimers: [],
      hideRemoveAll: this.disclaimerGroupHideRemoveAll
    };
    this.disclaimerGroupHideRemoveAll = false;
    this.disclaimerGroupTitle = undefined;
    this.filterModel = undefined;
    this.filter.placeholder = undefined;
    this.filter.width = undefined;
    this.literals = '';
    this.title = 'PO Page List';
    this.subtitle = '';

    this.restoreDisclaimerModel();
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null
    };
  }

  restoreDisclaimerModel() {
    this.disclaimerHideClose = undefined;
    this.disclaimerLabel = undefined;
    this.disclaimerProperty = undefined;
    this.disclaimerValue = undefined;
  }

  showAction(filter) {
    this.poNotification.success(\`Action clicked: \${filter}\`);
  }

  showAdvanceAction(filter) {
    this.poNotification.success(\`Advance Action clicked: \${filter}\`);
  }
}
`),t()()()()(),i(21,"div",10),r(22,"sample-po-page-list-labs"),t(),r(23,"hr")),o&2&&(m(5),w("po-icon "+n.sampleCodeButtonIcon),m(),L(" ",n.sampleCodeButtonLabel,""),m(),g("ngClass",_(4,Le,n.hideSampleCodeTabs)))},dependencies:[M,x,y,C,ue],encapsulation:2})}return s})();var R=(()=>{class s{getColumns(){return[{property:"hireStatus",label:"Status",type:"subtitle",subtitles:[{value:"hired",color:"success",label:"Hired",content:"1"},{value:"progress",color:"warning",label:"Progress",content:"2"},{value:"canceled",color:"danger",label:"Canceled",content:"3"}]},{property:"idCard",label:"Identity card",type:"string"},{property:"name",label:"Name"},{property:"age",label:"Age"},{property:"city",label:"City"},{property:"jobDescription",label:"Job description",type:"string"}]}getHireStatus(){return[{value:"hired",label:"Hired"},{value:"progress",label:"Progress"},{value:"canceled",label:"Canceled"}]}getItems(){return[{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",jobDescription:"Systems Analyst"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",jobDescription:"Trainee"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",jobDescription:"Programmer"},{hireStatus:"hired",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",jobDescription:"Web developer"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",jobDescription:"Recruiter"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",jobDescription:"Consultant"},{hireStatus:"hired",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",jobDescription:"Programmer"}]}getJobs(){return[{value:"Systems Analyst",label:"Systems Analyst"},{value:"Trainee",label:"Trainee"},{value:"Programmer",label:"Programmer"},{value:"Web Developer",label:"Web developer"},{value:"Recruiter",label:"Recruiter"},{value:"Consultant",label:"Consultant"},{value:"DBA",label:"DBA"}]}static \u0275fac=function(o){return new(o||s)};static \u0275prov=Y({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var Ae=["advancedFilterModal"],Te=["poPageList"],be=(()=>{class s{sampleHiringProcessesService;poNotification;poDialog;router;advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter="";status=[];statusOptions;actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:"Legislation",url:"https://www.usa.gov/labor-laws"}];breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"Hiring processes"}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let l=[...this.jobDescription,...this.status];this.filterAction(l)},label:"Apply filters"};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:"Search"};disclaimers=[];constructor(l,o,n,d){this.sampleHiringProcessesService=l,this.poNotification=o,this.poDialog=n,this.router=d}ngOnInit(){this.disclaimerGroup={title:"Filters",disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses]}advancedFilterActionModal(){this.advancedFilterModal.open()}disableHireButton(){return!this.hiringProcesses.find(l=>l.$selected)}filter(){let l=this.disclaimers.map(o=>o.value);l.length?this.hiringProcessesFilter(l):this.resetFilterHiringProcess()}filterAction(l){let o=typeof l=="string"?[l]:[...l];this.populateDisclaimers(o),this.filter()}hireCandidate(){let l=this.hiringProcesses.find(o=>o.$selected);switch(l.hireStatus){case"progress":l.hireStatus="hired",this.poNotification.success("Hired candidate!");break;case"hired":this.poNotification.warning("This candidate has already been hired.");break;case"canceled":this.poNotification.error("This candidate has already been disqualified.");break}}hiringProcessesFilter(l){this.hiringProcessesFiltered=this.hiringProcesses.filter(o=>Object.keys(o).some(n=>!(o[n]instanceof Object)&&this.includeFilter(o[n],l)))}includeFilter(l,o){return o.some(n=>String(l).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(l){this.disclaimers=l,this.filter()}onClearDisclaimer(l){l.removedDisclaimer.property==="search"&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter()}populateDisclaimers(l){let o=l.length>1?"advanced":"search";this.disclaimers=l.map(n=>({value:n,property:o})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[]}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[]}beforeRedirect(l){this.hiringProcesses.some(o=>o.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${l}`,message:"There is data selected. Are you sure you want to quit?",confirm:()=>this.router.navigate(["/"])}):this.router.navigate(["/"])}static \u0275fac=function(o){return new(o||s)(P(R),P(q),P(te),P(O))};static \u0275cmp=E({type:s,selectors:[["sample-po-page-list-hiring-processes"]],viewQuery:function(o,n){if(o&1&&(N(Ae,7),N(Te,7)),o&2){let d;z(d=J())&&(n.advancedFilterModal=d.first),z(d=J())&&(n.poPageList=d.first)}},standalone:!1,features:[K([R])],decls:9,vars:15,consts:[["poPageList",""],["advancedFilterModal",""],["f","ngForm"],["p-title","Hiring processes",3,"p-actions","p-breadcrumb","p-disclaimer-group","p-filter"],[3,"p-selectable","p-single-select","p-sort","p-striped","p-columns","p-items"],["p-title","Advanced filter",3,"p-primary-action"],["name","jobDescription","p-label","Job description",3,"ngModelChange","ngModel","p-options"],["name","status","p-label","Status",3,"ngModelChange","ngModel","p-options"]],template:function(o,n){if(o&1){let d=k();i(0,"po-page-list",3,0),r(2,"po-table",4),t(),i(3,"po-modal",5,1)(5,"form",null,2)(7,"po-multiselect",6),S("ngModelChange",function(a){return p(d),h(n.jobDescription,a)||(n.jobDescription=a),c(a)}),t(),i(8,"po-checkbox-group",7),S("ngModelChange",function(a){return p(d),h(n.status,a)||(n.status=a),c(a)}),t()()()}o&2&&(g("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filterSettings),m(2),g("p-selectable",!0)("p-single-select",!0)("p-sort",!0)("p-striped",!0)("p-columns",n.hiringProcessesColumns)("p-items",n.hiringProcessesFiltered),m(),g("p-primary-action",n.advancedFilterPrimaryAction),m(4),b("ngModel",n.jobDescription),g("p-options",n.jobDescriptionOptions),m(),b("ngModel",n.status),g("p-options",n.statusOptions))},dependencies:[G,H,V,j,I,W,oe,ee,D,ne],encapsulation:2})}return s})();var Be=s=>({"docs-sample-code-tabs":s}),he=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||s)};static \u0275cmp=E({type:s,selectors:[["sample-po-page-list-hiring-processes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(r(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page List - Hiring Processes"),t(),i(4,"a",2),f("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html"),t(),i(13,"pre",7),e(14,`<po-page-list
  #poPageList
  p-title="Hiring processes"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-disclaimer-group]="disclaimerGroup"
  [p-filter]="filterSettings"
>
  <po-table
    [p-selectable]="true"
    [p-single-select]="true"
    [p-sort]="true"
    [p-striped]="true"
    [p-columns]="hiringProcessesColumns"
    [p-items]="hiringProcessesFiltered"
  >
  </po-table>
</po-page-list>

<po-modal #advancedFilterModal p-title="Advanced filter" [p-primary-action]="advancedFilterPrimaryAction">
  <form #f="ngForm">
    <po-multiselect
      name="jobDescription"
      [(ngModel)]="jobDescription"
      p-label="Job description"
      [p-options]="jobDescriptionOptions"
    >
    </po-multiselect>

    <po-checkbox-group name="status" [(ngModel)]="status" p-label="Status" [p-options]="statusOptions">
    </po-checkbox-group>
  </form>
</po-modal>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoCheckboxGroupOption, PoMultiselectOption } from '@po-ui/ng-components';

import { PoDialogService } from '@po-ui/ng-components';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction, PoPageFilter } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';
import { PoPageListComponent } from '@po-ui/ng-components';

import { SamplePoPageListHiringProcessesService } from './sample-po-page-list-hiring-processes.service';

@Component({
  selector: 'sample-po-page-list-hiring-processes',
  templateUrl: './sample-po-page-list-hiring-processes.component.html',
  providers: [SamplePoPageListHiringProcessesService],
  standalone: false
})
export class SamplePoPageListHiringProcessesComponent implements OnInit {
  @ViewChild('advancedFilterModal', { static: true }) advancedFilterModal: PoModalComponent;
  @ViewChild('poPageList', { static: true }) poPageList: PoPageListComponent;

  disclaimerGroup;
  hiringProcesses: Array<object>;
  hiringProcessesColumns: Array<PoTableColumn>;
  hiringProcessesFiltered: Array<object>;
  jobDescription: Array<string> = [];
  jobDescriptionOptions: Array<PoMultiselectOption>;
  labelFilter: string = '';
  status: Array<string> = [];
  statusOptions: Array<PoCheckboxGroupOption>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Hire', action: this.hireCandidate.bind(this), disabled: this.disableHireButton.bind(this) },
    { label: 'Legislation', url: 'https://www.usa.gov/labor-laws' }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', action: this.beforeRedirect.bind(this) }, { label: 'Hiring processes' }]
  };

  public readonly advancedFilterPrimaryAction: PoModalAction = {
    action: () => {
      this.poPageList.clearInputSearch();
      this.advancedFilterModal.close();
      const filters = [...this.jobDescription, ...this.status];
      this.filterAction(filters);
    },
    label: 'Apply filters'
  };

  public readonly filterSettings: PoPageFilter = {
    action: this.filterAction.bind(this),
    advancedAction: this.advancedFilterActionModal.bind(this),
    placeholder: 'Search'
  };

  private disclaimers = [];

  constructor(
    private sampleHiringProcessesService: SamplePoPageListHiringProcessesService,
    private poNotification: PoNotificationService,
    private poDialog: PoDialogService,
    private router: Router
  ) {}

  ngOnInit() {
    this.disclaimerGroup = {
      title: 'Filters',
      disclaimers: [],
      change: this.onChangeDisclaimer.bind(this),
      remove: this.onClearDisclaimer.bind(this)
    };

    this.hiringProcesses = this.sampleHiringProcessesService.getItems();
    this.hiringProcessesColumns = this.sampleHiringProcessesService.getColumns();
    this.jobDescriptionOptions = this.sampleHiringProcessesService.getJobs();
    this.statusOptions = this.sampleHiringProcessesService.getHireStatus();

    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  advancedFilterActionModal() {
    this.advancedFilterModal.open();
  }

  disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  filter() {
    const filters = this.disclaimers.map(disclaimer => disclaimer.value);
    filters.length ? this.hiringProcessesFilter(filters) : this.resetFilterHiringProcess();
  }

  filterAction(labelFilter: string | Array<string>) {
    const filter = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];
    this.populateDisclaimers(filter);
    this.filter();
  }

  hireCandidate() {
    const selectedCandidate = this.hiringProcesses.find(candidate => candidate['$selected']);
    switch (selectedCandidate['hireStatus']) {
      case 'progress':
        selectedCandidate['hireStatus'] = 'hired';
        this.poNotification.success('Hired candidate!');
        break;

      case 'hired':
        this.poNotification.warning('This candidate has already been hired.');
        break;

      case 'canceled':
        this.poNotification.error('This candidate has already been disqualified.');
        break;
    }
  }

  hiringProcessesFilter(filters) {
    this.hiringProcessesFiltered = this.hiringProcesses.filter(item =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters))
    );
  }

  includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  onChangeDisclaimer(disclaimers) {
    this.disclaimers = disclaimers;
    this.filter();
  }

  onClearDisclaimer(disclaimers) {
    if (disclaimers.removedDisclaimer.property === 'search') {
      this.poPageList.clearInputSearch();
    }
    this.disclaimers = [];
    this.filter();
  }

  populateDisclaimers(filters: Array<any>) {
    const property = filters.length > 1 ? 'advanced' : 'search';
    this.disclaimers = filters.map(value => ({ value, property }));

    if (this.disclaimers && this.disclaimers.length > 0) {
      this.disclaimerGroup.disclaimers = [...this.disclaimers];
    } else {
      this.disclaimerGroup.disclaimers = [];
    }
  }

  resetFilterHiringProcess() {
    this.hiringProcessesFiltered = [...this.hiringProcesses];
    this.status = [];
    this.jobDescription = [];
  }

  private beforeRedirect(itemBreadcrumbLabel) {
    if (this.hiringProcesses.some(candidate => candidate['$selected'])) {
      this.poDialog.confirm({
        title: \`Confirm redirect to \${itemBreadcrumbLabel}\`,
        message: \`There is data selected. Are you sure you want to quit?\`,
        confirm: () => this.router.navigate(['/'])
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts"),t(),i(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoPageListHiringProcessesService {
  getColumns(): Array<PoTableColumn> {
    return [
      {
        property: 'hireStatus',
        label: 'Status',
        type: 'subtitle',
        subtitles: [
          { value: 'hired', color: 'success', label: 'Hired', content: '1' },
          { value: 'progress', color: 'warning', label: 'Progress', content: '2' },
          { value: 'canceled', color: 'danger', label: 'Canceled', content: '3' }
        ]
      },
      { property: 'idCard', label: 'Identity card', type: 'string' },
      { property: 'name', label: 'Name' },
      { property: 'age', label: 'Age' },
      { property: 'city', label: 'City' },
      { property: 'jobDescription', label: 'Job description', type: 'string' }
    ];
  }

  getHireStatus() {
    return [
      { value: 'hired', label: 'Hired' },
      { value: 'progress', label: 'Progress' },
      { value: 'canceled', label: 'Canceled' }
    ];
  }

  getItems() {
    return [
      {
        hireStatus: 'hired',
        name: 'James Johnson',
        city: 'Ontario',
        age: 24,
        idCard: 'AB34lxi90',
        jobDescription: 'Systems Analyst'
      },
      {
        hireStatus: 'progress',
        name: 'Brian Brown',
        city: 'Buffalo',
        age: 23,
        idCard: 'HG56lds54',
        jobDescription: 'Trainee'
      },
      {
        hireStatus: 'canceled',
        name: 'Mary Davis',
        city: 'Albany',
        age: 31,
        idCard: 'DF23cfr65',
        jobDescription: 'Programmer'
      },
      {
        hireStatus: 'hired',
        name: 'Margaret Garcia',
        city: 'New York',
        age: 29,
        idCard: 'GF45fgh34',
        jobDescription: 'Web developer'
      },
      {
        hireStatus: 'hired',
        name: 'Emma Hall',
        city: 'Ontario',
        age: 34,
        idCard: 'RF76jut21',
        jobDescription: 'Recruiter'
      },
      {
        hireStatus: 'progress',
        name: 'Lucas Clark',
        city: 'Utica',
        age: 32,
        idCard: 'HY21kgu65',
        jobDescription: 'Consultant'
      },
      { hireStatus: 'hired', name: 'Ella Scott', city: 'Ontario', age: 24, idCard: 'UL78flg68', jobDescription: 'DBA' },
      {
        hireStatus: 'progress',
        name: 'Chloe Walker',
        city: 'Albany',
        age: 29,
        idCard: 'JH12oli98',
        jobDescription: 'Programmer'
      }
    ];
  }

  getJobs() {
    return [
      { value: 'Systems Analyst', label: 'Systems Analyst' },
      { value: 'Trainee', label: 'Trainee' },
      { value: 'Programmer', label: 'Programmer' },
      { value: 'Web Developer', label: 'Web developer' },
      { value: 'Recruiter', label: 'Recruiter' },
      { value: 'Consultant', label: 'Consultant' },
      { value: 'DBA', label: 'DBA' }
    ];
  }
}
`),t()()()()(),i(25,"div",10),r(26,"sample-po-page-list-hiring-processes"),t(),r(27,"hr")),o&2&&(m(5),w("po-icon "+n.sampleCodeButtonIcon),m(),L(" ",n.sampleCodeButtonLabel,""),m(),g("ngClass",_(4,Be,n.hideSampleCodeTabs)))},dependencies:[M,x,y,C,be],encapsulation:2})}return s})();var Se=(()=>{class s{static \u0275fac=function(o){return new(o||s)};static \u0275cmp=E({type:s,selectors:[["sample-po-page-list-doc"]],standalone:!1,decls:1063,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/icons"],["href","/documentation/po-disclaimer-group"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","PoDisclaimerGroup"],["pan","",1,"docs-api-property-type","PoPageFilter"],["pan","",1,"docs-api-property-type","PoPageListLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"]],template:function(o,n){o&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes po-page-default, po-page-detail, po-page-edit,
po-page-list e po-page-slide.`),t()(),i(7,"h3",3),e(8,"Componente"),t(),i(9,"h4",4)(10,"code",5),e(11,"PoPageListComponent"),t()(),i(12,"div",2)(13,"p"),e(14,"O componente "),i(15,"code"),e(16,"po-page-list"),t(),e(17,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),t(),i(18,"p"),e(19,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),i(20,"em"),e(21,"click"),t(),e(22," do \xEDcone "),i(23,"a",6),e(24,"an-magnifying-glass"),t(),e(25,`
quanto ao pressionar da tecla `),i(26,"em"),e(27,"ENTER"),t(),e(28," quando o foco estiver no campo de pesquisa."),t(),i(29,"p"),e(30,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),i(31,"a",7)(32,"code"),e(33,"po-disclaimer-group"),t()(),e(34,". "),t()(),i(35,"div",8)(36,"h4",9),e(37,"Seletor"),t(),i(38,"pre",10),e(39,`<po-page-list
    p-actions="Array<PoPageAction>"
    p-breadcrumb="PoBreadcrumb"
    p-disclaimer-group="PoDisclaimerGroup"
    p-filter="PoPageFilter"
    p-literals="PoPageListLiterals"
    p-quick-search-value="string"
    p-subtitle="string"
    p-title="string" >
</po-page-list>
`),t()(),i(40,"h4",11),e(41,"Propriedades"),t(),i(42,"table",12)(43,"tr",13)(44,"th",14),e(45,"Nome"),t(),i(46,"th",14),e(47,"Tipo"),t(),i(48,"th",14),e(49,"Padr\xE3o"),t(),i(50,"th",14),e(51,"Descri\xE7\xE3o"),t()(),i(52,"tr",15)(53,"td",16)(54,"div",17)(55,"span",18),e(56," p-actions"),r(57,"br"),t()()(),i(58,"td",19)(59,"code",20),e(60,"Array<PoPageAction>"),t()(),i(61,"td",21),e(62,"-"),t(),i(63,"td",22)(64,"em")(65,"strong"),e(66,"(opcional)"),t()(),i(67,"p"),e(68,"Nesta propriedade deve ser definido um array de objetos que implementam a interface "),i(69,"code"),e(70,"PoPageAction"),t(),e(71,"."),t()()(),i(72,"tr",15)(73,"td",16)(74,"div",17)(75,"span",18),e(76," p-breadcrumb"),r(77,"br"),t()()(),i(78,"td",19)(79,"code",23),e(80,"PoBreadcrumb"),t()(),i(81,"td",21),e(82,"-"),t(),i(83,"td",22)(84,"em")(85,"strong"),e(86,"(opcional)"),t()(),i(87,"p"),e(88,"Objeto que implementa as propriedades da interface "),i(89,"code"),e(90,"PoBreadcrumb"),t(),e(91,"."),t()()(),i(92,"tr",15)(93,"td",16)(94,"div",17)(95,"span",18),e(96," p-disclaimer-group"),r(97,"br"),t()()(),i(98,"td",19)(99,"code",24),e(100,"PoDisclaimerGroup"),t()(),i(101,"td",21),e(102,"-"),t(),i(103,"td",22)(104,"em")(105,"strong"),e(106,"(opcional)"),t()(),i(107,"p"),e(108,"Objeto que implementa as propriedades da interface "),i(109,"code"),e(110,"PoDisclaimerGroup"),t(),e(111,"."),t()()(),i(112,"tr",15)(113,"td",16)(114,"div",17)(115,"span",18),e(116," p-filter"),r(117,"br"),t()()(),i(118,"td",19)(119,"code",25),e(120,"PoPageFilter"),t()(),i(121,"td",21),e(122,"-"),t(),i(123,"td",22)(124,"p"),e(125,"Objeto que implementa as propriedades da interface "),i(126,"code"),e(127,"PoPageFilter"),t(),e(128,"."),t()()(),i(129,"tr",15)(130,"td",16)(131,"div",17)(132,"span",18),e(133," p-literals"),r(134,"br"),t()()(),i(135,"td",19)(136,"code",26),e(137,"PoPageListLiterals"),t()(),i(138,"td",21),e(139,"-"),t(),i(140,"td",22)(141,"em")(142,"strong"),e(143,"(opcional)"),t()(),i(144,"p"),e(145,"Objeto com as literais usadas no "),i(146,"code"),e(147,"po-page-list"),t(),e(148,"."),t(),i(149,"p"),e(150,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),i(151,"pre")(152,"code"),e(153,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};`),t()(),i(154,"p"),e(155,"Ou passando apenas as literais que deseja customizar:"),t(),i(156,"pre")(157,"code"),e(158,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};`),t()(),i(159,"p"),e(160,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),i(161,"pre")(162,"code"),e(163,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>`),t()(),i(164,"blockquote")(165,"p"),e(166,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),i(167,"a",27)(168,"code"),e(169,"PoI18nService"),t()(),e(170," ou "),i(171,"em"),e(172,"browser"),t(),e(173,"."),t()()()(),i(174,"tr",15)(175,"td",16)(176,"div",17)(177,"span",18),e(178," p-quick-search-value"),r(179,"br"),t()()(),i(180,"td",19)(181,"code",28),e(182,"string"),t()(),i(183,"td",21),e(184,"-"),t(),i(185,"td",22)(186,"em")(187,"strong"),e(188,"(opcional)"),t()(),i(189,"p"),e(190,"Valor padr\xE3o na busca r\xE1pida ao inicializar o componente"),t()()(),i(191,"tr",15)(192,"td",16)(193,"div",17)(194,"span",18),e(195," p-subtitle"),r(196,"br"),t()()(),i(197,"td",19)(198,"code",28),e(199,"string"),t()(),i(200,"td",21),e(201,"-"),t(),i(202,"td",22)(203,"em")(204,"strong"),e(205,"(opcional)"),t()(),i(206,"p"),e(207,"Subtitulo do Header da p\xE1gina"),t()()(),i(208,"tr",15)(209,"td",16)(210,"div",17)(211,"span",18),e(212," p-title"),r(213,"br"),t()()(),i(214,"td",19)(215,"code",28),e(216,"string"),t()(),i(217,"td",21),e(218,"-"),t(),i(219,"td",22)(220,"p"),e(221,"T\xEDtulo da p\xE1gina."),t()()()(),i(222,"h3",11),e(223,"M\xE9todos"),t(),i(224,"table",29)(225,"tr",15)(226,"th",30)(227,"div",17)(228,"h4")(229,"span",18),e(230," clearInputSearch "),t()()()()(),i(231,"tr",22)(232,"td",22)(233,"p"),e(234,"Limpa o campo de pesquisa."),t()()()(),r(235,"br"),i(236,"h3"),e(237,"Interfaces"),t(),i(238,"h4",31)(239,"code",5),e(240,"PoBreadcrumbItem"),t()(),i(241,"div",2)(242,"p"),e(243,"Interface que define cada item do componente "),i(244,"strong"),e(245,"po-breadcrumb"),t(),e(246,"."),t()(),i(247,"h4",11),e(248,"Propriedades"),t(),i(249,"table",12)(250,"tr",13)(251,"th",14),e(252,"Nome"),t(),i(253,"th",14),e(254,"Tipo"),t(),i(255,"th",14),e(256,"Descri\xE7\xE3o"),t()(),i(257,"tr",15)(258,"td",16)(259,"div",17)(260,"span",18),e(261," action"),r(262,"br"),t()()(),i(263,"td",19)(264,"code",32),e(265,"Function"),t()(),i(266,"td",22)(267,"em")(268,"strong"),e(269,"(opcional)"),t()(),i(270,"p"),e(271,"A\xE7\xE3o executada ao clicar no item."),t(),i(272,"blockquote")(273,"p"),e(274,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),i(275,"em"),e(276,"label"),t(),e(277," do item como par\xE2metro para execu\xE7\xE3o."),t()()()(),i(278,"tr",15)(279,"td",16)(280,"div",17)(281,"span",18),e(282," label"),r(283,"br"),t()()(),i(284,"td",19)(285,"code",28),e(286,"string"),t()(),i(287,"td",22)(288,"p"),e(289,"R\xF3tulo do item."),t()()(),i(290,"tr",15)(291,"td",16)(292,"div",17)(293,"span",18),e(294," link"),r(295,"br"),t()()(),i(296,"td",19)(297,"code",28),e(298,"string"),t()(),i(299,"td",22)(300,"em")(301,"strong"),e(302,"(opcional)"),t()(),i(303,"p"),e(304,"Url do item."),t(),i(305,"blockquote")(306,"p"),e(307,"Caso o item tamb\xE9m contenha uma "),i(308,"em"),e(309,"action"),t(),e(310," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),i(311,"em"),e(312,"link"),t(),e(313,"."),t()(),i(314,"blockquote")(315,"p"),e(316,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),i(317,"strong")(318,"a",33),e(319,"Veja um exemplo de como criar rotas aqui"),t()(),e(320,"."),t()(),i(321,"blockquote")(322,"p"),e(323,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),i(324,"code"),e(325,"p-favorite-service"),t(),e(326," consiga favoritar ou desfavoritar."),t()()()()(),i(327,"h4",31)(328,"code",5),e(329,"PoBreadcrumb"),t()(),i(330,"div",2)(331,"p"),e(332,"Interface que define o "),i(333,"code"),e(334,"po-breadcrumb"),t(),e(335,"."),t()(),i(336,"h4",11),e(337,"Propriedades"),t(),i(338,"table",12)(339,"tr",13)(340,"th",14),e(341,"Nome"),t(),i(342,"th",14),e(343,"Tipo"),t(),i(344,"th",14),e(345,"Descri\xE7\xE3o"),t()(),i(346,"tr",15)(347,"td",16)(348,"div",17)(349,"span",18),e(350," favorite"),r(351,"br"),t()()(),i(352,"td",19)(353,"code",28),e(354,"string"),t()(),i(355,"td",22)(356,"em")(357,"strong"),e(358,"(opcional)"),t()(),i(359,"p"),e(360,"Permite definir uma URL para favoritar ou desfavoritar."),t(),i(361,"blockquote")(362,"p"),e(363,"Para maiores informa\xE7\xF5es verificar a propriedade "),i(364,"code"),e(365,"p-favorite-service"),t(),e(366," do componente "),i(367,"code"),e(368,"po-breadcrumb"),t(),e(369,"."),t()()()(),i(370,"tr",15)(371,"td",16)(372,"div",17)(373,"span",18),e(374," items"),r(375,"br"),t()()(),i(376,"td",19)(377,"code",34),e(378,"Array<PoBreadcrumbItem>"),t()(),i(379,"td",22)(380,"p"),e(381,"Lista de itens do "),i(382,"em"),e(383,"breadcrumb"),t(),e(384,"."),t(),i(385,"p")(386,"strong"),e(387,"Exemplo:"),t()(),i(388,"pre")(389,"code"),e(390,"{ label: 'Po Portal', link: 'portal' }"),t()()()(),i(391,"tr",15)(392,"td",16)(393,"div",17)(394,"span",18),e(395," params"),r(396,"br"),t()()(),i(397,"td",19)(398,"code",35),e(399,"object"),t()(),i(400,"td",22)(401,"em")(402,"strong"),e(403,"(opcional)"),t()(),i(404,"p"),e(405,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),t()()()(),i(406,"h4",31)(407,"code",5),e(408,"PoDisclaimer"),t()(),i(409,"div",2)(410,"p"),e(411,"Interface que representa o objeto "),i(412,"code"),e(413,"po-disclaimer"),t(),e(414,"."),t()(),i(415,"h4",11),e(416,"Propriedades"),t(),i(417,"table",12)(418,"tr",13)(419,"th",14),e(420,"Nome"),t(),i(421,"th",14),e(422,"Tipo"),t(),i(423,"th",14),e(424,"Descri\xE7\xE3o"),t()(),i(425,"tr",15)(426,"td",16)(427,"div",17)(428,"span",18),e(429," hideClose"),r(430,"br"),t()()(),i(431,"td",19)(432,"code",36),e(433,"boolean"),t()(),i(434,"td",22)(435,"em")(436,"strong"),e(437,"(opcional)"),t()(),i(438,"p"),e(439,"Se verdadeiro, oculta o bot\xE3o para fechar o "),i(440,"em"),e(441,"disclaimer"),t(),e(442,"."),t()()(),i(443,"tr",15)(444,"td",16)(445,"div",17)(446,"span",18),e(447," label"),r(448,"br"),t()()(),i(449,"td",19)(450,"code",28),e(451,"string"),t()(),i(452,"td",22)(453,"em")(454,"strong"),e(455,"(opcional)"),t()(),i(456,"p"),e(457,"Texto de exibi\xE7\xE3o do objeto."),t()()(),i(458,"tr",15)(459,"td",16)(460,"div",17)(461,"span",18),e(462," property"),r(463,"br"),t()()(),i(464,"td",19)(465,"code",28),e(466,"string"),t()(),i(467,"td",22)(468,"em")(469,"strong"),e(470,"(opcional)"),t()(),i(471,"p"),e(472,"Nome da propriedade vinculada ao objeto "),i(473,"em"),e(474,"disclaimer"),t(),e(475,"."),t()()(),i(476,"tr",15)(477,"td",16)(478,"div",17)(479,"span",18),e(480," value"),r(481,"br"),t()()(),i(482,"td",19)(483,"code",37),e(484,"any"),t()(),i(485,"td",22)(486,"p"),e(487,"Valor do objeto."),t()()()(),i(488,"h4",31)(489,"code",5),e(490,"PoDisclaimerGroupRemoveAction"),t()(),i(491,"div",2)(492,"p"),e(493,"Estrutura do objeto representando o estado dos "),i(494,"em"),e(495,"disclaimers"),t(),e(496," ap\xF3s a remo\xE7\xE3o."),t()(),i(497,"h4",11),e(498,"Propriedades"),t(),i(499,"table",12)(500,"tr",13)(501,"th",14),e(502,"Nome"),t(),i(503,"th",14),e(504,"Tipo"),t(),i(505,"th",14),e(506,"Descri\xE7\xE3o"),t()(),i(507,"tr",15)(508,"td",16)(509,"div",17)(510,"span",18),e(511," currentDisclaimers"),r(512,"br"),t()()(),i(513,"td",19)(514,"code",38),e(515,"Array<PoDisclaimer>"),t()(),i(516,"td",22)(517,"p"),e(518,"Lista com os "),i(519,"em"),e(520,"disclaimers"),t(),e(521," atuais (restantes)."),t()()(),i(522,"tr",15)(523,"td",16)(524,"div",17)(525,"span",18),e(526," removedDisclaimer"),r(527,"br"),t()()(),i(528,"td",19)(529,"code",39),e(530,"PoDisclaimer"),t()(),i(531,"td",22)(532,"p")(533,"em"),e(534,"Disclaimer"),t(),e(535," que foi removido."),t()()()(),i(536,"h4",31)(537,"code",5),e(538,"PoDisclaimerGroup"),t()(),i(539,"div",2)(540,"p"),e(541,"Interface que representa o objeto "),i(542,"code"),e(543,"po-disclaimer-group"),t(),e(544,"."),t()(),i(545,"h4",11),e(546,"Propriedades"),t(),i(547,"table",12)(548,"tr",13)(549,"th",14),e(550,"Nome"),t(),i(551,"th",14),e(552,"Tipo"),t(),i(553,"th",14),e(554,"Descri\xE7\xE3o"),t()(),i(555,"tr",15)(556,"td",16)(557,"div",17)(558,"span",18),e(559," change"),r(560,"br"),t()()(),i(561,"td",19)(562,"code",32),e(563,"Function"),t()(),i(564,"td",22)(565,"em")(566,"strong"),e(567,"(opcional)"),t()(),i(568,"p"),e(569,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),i(570,"em"),e(571,"disclaimers"),t(),e(572,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),i(573,"em"),e(574,"disclaimers"),t(),e(575,"."),t()()(),i(576,"tr",15)(577,"td",16)(578,"div",17)(579,"span",18),e(580," disclaimers"),r(581,"br"),t()()(),i(582,"td",19)(583,"code",38),e(584,"Array<PoDisclaimer>"),t()(),i(585,"td",22)(586,"p"),e(587,"Lista de "),i(588,"em"),e(589,"disclaimers"),t(),e(590,"."),t(),i(591,"p"),e(592,"Exemplo:"),t(),i(593,"pre")(594,"code"),e(595,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]`),t()(),i(596,"p"),e(597,"Para que a lista de "),i(598,"em"),e(599,"disclaimers"),t(),e(600," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),i(601,"code"),e(602,"PoDisclaimer"),t(),e(603,"."),t(),i(604,"p"),e(605,"Exemplo:"),t(),i(606,"pre")(607,"code"),e(608,"this.disclaimerGroup.disclaimers = [...this.disclaimers];"),t()()()(),i(609,"tr",15)(610,"td",16)(611,"div",17)(612,"span",18),e(613," hideRemoveAll"),r(614,"br"),t()()(),i(615,"td",19)(616,"code",36),e(617,"boolean"),t()(),i(618,"td",22)(619,"em")(620,"strong"),e(621,"(opcional)"),t()(),i(622,"p"),e(623,"Oculta o bot\xE3o para remover todos os "),i(624,"em"),e(625,"disclaimers"),t(),e(626," do grupo."),t(),i(627,"blockquote")(628,"p"),e(629,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),i(630,"em"),e(631,"disclaimers"),t(),e(632," com a op\xE7\xE3o "),i(633,"code"),e(634,"hideClose"),t(),e(635," habilitada."),t()()()(),i(636,"tr",15)(637,"td",16)(638,"div",17)(639,"span",18),e(640," remove"),r(641,"br"),t()()(),i(642,"td",19)(643,"code",32),e(644,"Function"),t()(),i(645,"td",22)(646,"em")(647,"strong"),e(648,"(opcional)"),t()(),i(649,"p"),e(650,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),i(651,"em"),e(652,"disclaimer"),t(),e(653,` for removido da lista de
`),i(654,"em"),e(655,"disclaimers"),t(),e(656," pelo usu\xE1rio."),t(),i(657,"p"),e(658,"Recebe como par\xE2metro um objeto conforme a interface "),i(659,"code"),e(660,"PoDisclaimerGroupRemoveAction"),t(),e(661,"."),t()()(),i(662,"tr",15)(663,"td",16)(664,"div",17)(665,"span",18),e(666," removeAll"),r(667,"br"),t()()(),i(668,"td",19)(669,"code",32),e(670,"Function"),t()(),i(671,"td",22)(672,"em")(673,"strong"),e(674,"(opcional)"),t()(),i(675,"p"),e(676,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),i(677,"em"),e(678,"disclaimers"),t(),e(679," forem removidos da lista de "),i(680,"em"),e(681,"disclaimers"),t(),e(682,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),t(),i(683,"p"),e(684,"Recebe como par\xE2metro uma lista contendo todos os "),i(685,"code"),e(686,"disclaimers"),t(),e(687," removidos."),t()()(),i(688,"tr",15)(689,"td",16)(690,"div",17)(691,"span",18),e(692," title"),r(693,"br"),t()()(),i(694,"td",19)(695,"code",28),e(696,"string"),t()(),i(697,"td",22)(698,"em")(699,"strong"),e(700,"(opcional)"),t()(),i(701,"p"),e(702,"T\xEDtulo do grupo de "),i(703,"em"),e(704,"disclaimers"),t(),e(705,"."),t()()()(),i(706,"h4",31)(707,"code",5),e(708,"PoPageAction"),t()(),i(709,"div",2)(710,"p"),e(711,"Interface para as a\xE7\xF5es dos componentes po-page-default e po-page-list."),t(),i(712,"blockquote")(713,"p"),e(714,"As propriedades "),i(715,"code"),e(716,"selected"),t(),e(717,", "),i(718,"code"),e(719,"separator"),t(),e(720," e "),i(721,"code"),e(722,"type"),t(),e(723,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),t()()(),i(724,"h4",11),e(725,"Propriedades"),t(),i(726,"table",12)(727,"tr",13)(728,"th",14),e(729,"Nome"),t(),i(730,"th",14),e(731,"Tipo"),t(),i(732,"th",14),e(733,"Descri\xE7\xE3o"),t()(),i(734,"tr",15)(735,"td",16)(736,"div",17)(737,"span",18),e(738," action"),r(739,"br"),t()()(),i(740,"td",19)(741,"code",32),e(742,"Function"),t()(),i(743,"td",22)(744,"em")(745,"strong"),e(746,"(opcional)"),t()(),i(747,"p"),e(748,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),i(749,"blockquote")(750,"p"),e(751,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),i(752,"em"),e(753,"bind"),t(),e(754,"."),t()(),i(755,"p"),e(756,"Exemplo: "),i(757,"code"),e(758,"action: this.myFunction.bind(this)"),t()()()(),i(759,"tr",15)(760,"td",16)(761,"div",17)(762,"span",18),e(763," disabled"),r(764,"br"),t()()(),i(765,"td",19)(766,"code",36),e(767,"boolean "),t(),i(768,"code",32),e(769," Function"),t()(),i(770,"td",22)(771,"em")(772,"strong"),e(773,"(opcional)"),t()(),i(774,"p"),e(775,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),i(776,"p"),e(777,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),i(778,"tr",15)(779,"td",16)(780,"div",17)(781,"span",18),e(782," icon"),r(783,"br"),t()()(),i(784,"td",19)(785,"code",28),e(786,"string "),t(),i(787,"code",40),e(788," TemplateRef<void>"),t()(),i(789,"td",22)(790,"em")(791,"strong"),e(792,"(opcional)"),t()(),i(793,"p"),e(794,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),i(795,"p"),e(796,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),i(797,"a",6),e(798,"Biblioteca de \xEDcones"),t(),e(799,". conforme exemplo abaixo:"),t(),i(800,"pre")(801,"code"),e(802,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>`),t()(),i(803,"p"),e(804,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),i(805,"pre")(806,"code"),e(807,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>`),t()(),i(808,"p"),e(809,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),i(810,"code"),e(811,"TemplateRef"),t(),e(812,`, conforme exemplo abaixo:
component.html:`),t(),i(813,"pre")(814,"code"),e(815,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>`),t()(),i(816,"p"),e(817,"component.ts:"),t(),i(818,"pre")(819,"code"),e(820,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];`),t()()()(),i(821,"tr",15)(822,"td",16)(823,"div",17)(824,"span",18),e(825," label"),r(826,"br"),t()()(),i(827,"td",19)(828,"code",28),e(829,"string"),t()(),i(830,"td",22)(831,"p"),e(832,"R\xF3tulo da a\xE7\xE3o."),t()()(),i(833,"tr",15)(834,"td",16)(835,"div",17)(836,"span",18),e(837," selected"),r(838,"br"),t()()(),i(839,"td",19)(840,"code",36),e(841,"boolean"),t()(),i(842,"td",22)(843,"em")(844,"strong"),e(845,"(opcional)"),t()(),i(846,"p"),e(847,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),i(848,"tr",15)(849,"td",16)(850,"div",17)(851,"span",18),e(852," separator"),r(853,"br"),t()()(),i(854,"td",19)(855,"code",36),e(856,"boolean"),t()(),i(857,"td",22)(858,"em")(859,"strong"),e(860,"(opcional)"),t()(),i(861,"p"),e(862,"Atribui uma linha separadora acima do item."),t()()(),i(863,"tr",15)(864,"td",16)(865,"div",17)(866,"span",18),e(867," type"),r(868,"br"),t()()(),i(869,"td",19)(870,"code",28),e(871,"string"),t()(),i(872,"td",22)(873,"em")(874,"strong"),e(875,"(opcional)"),t()(),i(876,"p"),e(877,"Define a cor do item, sendo "),i(878,"code"),e(879,"default"),t(),e(880," o padr\xE3o."),t(),i(881,"p"),e(882,"Valores v\xE1lidos:"),t(),i(883,"ul")(884,"li")(885,"code"),e(886,"default"),t()(),i(887,"li")(888,"code"),e(889,"danger"),t(),e(890," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),i(891,"tr",15)(892,"td",16)(893,"div",17)(894,"span",18),e(895," url"),r(896,"br"),t()()(),i(897,"td",19)(898,"code",28),e(899,"string"),t()(),i(900,"td",22)(901,"em")(902,"strong"),e(903,"(opcional)"),t()(),i(904,"p"),e(905,"URL utilizada no redirecionamento das p\xE1ginas."),t()()(),i(906,"tr",15)(907,"td",16)(908,"div",17)(909,"span",18),e(910," visible"),r(911,"br"),t()()(),i(912,"td",19)(913,"code",36),e(914,"boolean "),t(),i(915,"code",32),e(916," Function"),t()(),i(917,"td",22)(918,"em")(919,"strong"),e(920,"(opcional)"),t()(),i(921,"p"),e(922,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),i(923,"blockquote")(924,"p"),e(925,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),i(926,"p"),e(927,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),i(928,"ul")(929,"li")(930,"p"),e(931,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),i(932,"li")(933,"p"),e(934,"Informar diretamente um valor booleano."),t()()()()()(),i(935,"h4",31)(936,"code",5),e(937,"PoPageFilter"),t()(),i(938,"div",2)(939,"p"),e(940,"Interface para o atributo "),i(941,"code"),e(942,"filter"),t(),e(943," do componente "),i(944,"code"),e(945,"po-page-list"),t(),e(946,"."),t()(),i(947,"h4",11),e(948,"Propriedades"),t(),i(949,"table",12)(950,"tr",13)(951,"th",14),e(952,"Nome"),t(),i(953,"th",14),e(954,"Tipo"),t(),i(955,"th",14),e(956,"Descri\xE7\xE3o"),t()(),i(957,"tr",15)(958,"td",16)(959,"div",17)(960,"span",18),e(961," action"),r(962,"br"),t()()(),i(963,"td",19)(964,"code",32),e(965,"Function"),t()(),i(966,"td",22)(967,"em")(968,"strong"),e(969,"(opcional)"),t()(),i(970,"p"),e(971,"A\xE7\xE3o a ser executada."),t()()(),i(972,"tr",15)(973,"td",16)(974,"div",17)(975,"span",18),e(976," advancedAction"),r(977,"br"),t()()(),i(978,"td",19)(979,"code",32),e(980,"Function"),t()(),i(981,"td",22)(982,"em")(983,"strong"),e(984,"(opcional)"),t()(),i(985,"p"),e(986,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),i(987,"em"),e(988,"click"),t(),e(989," atrav\xE9s do r\xF3tulo "),i(990,"strong"),e(991,"Busca Avan\xE7ada"),t(),e(992,"."),t()()(),i(993,"tr",15)(994,"td",16)(995,"div",17)(996,"span",18),e(997," placeholder"),r(998,"br"),t()()(),i(999,"td",19)(1e3,"code",28),e(1001,"string"),t()(),i(1002,"td",22)(1003,"em")(1004,"strong"),e(1005,"(opcional)"),t()(),i(1006,"p"),e(1007,"Texto de instru\xE7\xE3o exibido dentro do campo de filtro."),t()()(),i(1008,"tr",15)(1009,"td",16)(1010,"div",17)(1011,"span",18),e(1012," width"),r(1013,"br"),t()()(),i(1014,"td",19)(1015,"code",41),e(1016,"number"),t()(),i(1017,"td",22)(1018,"em")(1019,"strong"),e(1020,"(opcional)"),t()(),i(1021,"p"),e(1022,"Tamanho do filtro em tela, utilizando o "),i(1023,"em"),e(1024,"Grid System"),t(),e(1025,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),t()()()(),i(1026,"h4",31)(1027,"code",5),e(1028,"PoPageListLiterals"),t()(),i(1029,"div",2)(1030,"p"),e(1031,"Interface para defini\xE7\xE3o das literais usadas no "),i(1032,"code"),e(1033,"po-page-list"),t(),e(1034,"."),t()(),i(1035,"h4",11),e(1036,"Propriedades"),t(),i(1037,"table",12)(1038,"tr",13)(1039,"th",14),e(1040,"Nome"),t(),i(1041,"th",14),e(1042,"Tipo"),t(),i(1043,"th",14),e(1044,"Descri\xE7\xE3o"),t()(),i(1045,"tr",15)(1046,"td",16)(1047,"div",17)(1048,"span",18),e(1049," otherActions"),r(1050,"br"),t()()(),i(1051,"td",19)(1052,"code",28),e(1053,"string"),t()(),i(1054,"td",22)(1055,"em")(1056,"strong"),e(1057,"(opcional)"),t()(),i(1058,"p"),e(1059,"Legenda do "),i(1060,"code"),e(1061,"po-dropdown"),t(),e(1062," de a\xE7\xF5es."),t()()()()())},dependencies:[x],encapsulation:2})}return s})();var Ee=(()=>{class s{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||s)(P(Z),P(O))};static \u0275cmp=E({type:s,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Page List",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(o,n){o&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),r(3,"sample-po-page-list-doc"),t(),i(4,"po-tab",3),r(5,"sample-po-page-list-basic-view")(6,"sample-po-page-list-labs-view")(7,"sample-po-page-list-hiring-processes-view"),t()()()),o&2&&(g("p-actions",n.actions),m(2),g("p-active",n.activeTab.includes("doc")),m(2),g("p-hide",n.hidePoWebSample)("p-active",n.activeTab.includes("web")))},dependencies:[se,y,C,ce,ge,he,Se],encapsulation:2})}return s})();var Ve=[{path:"",component:Ee}],fe=(()=>{class s{static \u0275fac=function(o){return new(o||s)};static \u0275mod=B({type:s});static \u0275inj=F({imports:[U.forChild(Ve),U]})}return s})();var rt=(()=>{class s{static \u0275fac=function(o){return new(o||s)};static \u0275mod=B({type:s});static \u0275inj=F({imports:[me,fe]})}return s})();export{rt as DocPoPageListModule};
