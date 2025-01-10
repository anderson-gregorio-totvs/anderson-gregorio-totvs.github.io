import{$ as D,$a as B,Ca as R,Cd as te,Da as H,Dc as X,Ea as G,F as d,Fa as k,G as s,Ga as i,Ia as M,Jc as Y,Ka as b,La as g,Lb as N,Ma as h,Mb as W,Nb as O,Ob as U,Od as ie,Pa as x,Pb as q,Qd as L,T as m,U as _,Wb as J,Xd as v,Yb as F,Yd as C,Zb as z,_ as S,ad as Z,ha as E,ka as y,ld as $,md as j,na as e,oa as t,oc as Q,pa as l,re as w,sd as ee,se as ne,ta as I,ua as f,y as V,zc as K}from"./chunk-QVEZB6GT.js";var ae=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-edit-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page Edit"]],template:function(r,n){r&1&&l(0,"po-page-edit",0)},dependencies:[L],encapsulation:2})}return o})();var ge=o=>({"docs-sample-code-tabs":o}),re=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-edit-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Page Edit Basic"),t(),e(4,"a",2),f("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.html"),t(),e(13,"pre",7),i(14,`<po-page-edit p-title="PO Page Edit"> </po-page-edit>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts"),t(),e(19,"pre",9),i(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-edit-basic',
  templateUrl: './sample-po-page-edit-basic.component.html',
  standalone: false
})
export class SamplePoPageEditBasicComponent {}
`),t()()()()(),e(21,"div",10),l(22,"sample-po-page-edit-basic"),t(),l(23,"hr")),r&2&&(m(5),y("po-icon "+n.sampleCodeButtonIcon),m(),M(" ",n.sampleCodeButtonLabel,""),m(),E("ngClass",x(4,ge,n.hideSampleCodeTabs)))},dependencies:[B,w,v,C,ae],encapsulation:2})}return o})();var le=(()=>{class o{action;breadcrumb;breadcrumbItem;breadcrumbParams;customLiterals;literals;params;properties;title;subtitle;propertiesOptions=[{value:"disableSubmit",label:"Disable Submit"}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let u={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,u):this.breadcrumb.params=u,this.breadcrumbParams={}}cancel(){this.action="Cancel"}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.customLiterals=void 0,this.literals="",this.properties=[],this.title="PO Page Edit",this.subtitle=""}save(){this.action="Save"}saveNew(){this.action="Save and new"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-edit-labs"]],standalone:!1,decls:33,vars:18,consts:[["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-cancel","p-save","p-save-new","p-breadcrumb","p-disable-submit","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-12",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-4",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}',"p-label","Literals",1,"po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(r,n){if(r&1){let p=I();e(0,"po-page-edit",3),f("p-cancel",function(){return d(p),s(n.cancel())})("p-save",function(){return d(p),s(n.save())})("p-save-new",function(){return d(p),s(n.saveNew())}),e(1,"div",4),l(2,"po-info",5),t(),l(3,"hr"),e(4,"form")(5,"div",4)(6,"po-input",6),h("ngModelChange",function(a){return d(p),g(n.title,a)||(n.title=a),s(a)}),t(),e(7,"po-input",7),h("ngModelChange",function(a){return d(p),g(n.subtitle,a)||(n.subtitle=a),s(a)}),t(),e(8,"po-checkbox-group",8),h("ngModelChange",function(a){return d(p),g(n.properties,a)||(n.properties=a),s(a)}),t()(),l(9,"hr"),e(10,"form",null,0)(12,"div",4)(13,"po-input",9),h("ngModelChange",function(a){return d(p),g(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),s(a)}),t()()(),e(14,"form",null,1)(16,"div",4)(17,"po-input",10),h("ngModelChange",function(a){return d(p),g(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),s(a)}),t(),e(18,"po-input",11),h("ngModelChange",function(a){return d(p),g(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),s(a)}),t()(),e(19,"div",4)(20,"po-button",12),f("p-click",function(){return d(p),s(n.addBreadcrumbItem())}),t()()(),l(21,"hr"),e(22,"form",null,2)(24,"div",4)(25,"po-input",13),h("ngModelChange",function(a){return d(p),g(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),s(a)}),t(),e(26,"po-input",14),h("ngModelChange",function(a){return d(p),g(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),s(a)}),t()(),e(27,"div",4)(28,"po-button",15),f("p-click",function(){return d(p),s(n.addBreadcrumbParam())}),t()()(),e(29,"div",4)(30,"po-input",16),h("ngModelChange",function(a){return d(p),g(n.literals,a)||(n.literals=a),s(a)}),f("p-change",function(){return d(p),s(n.changeLiterals())}),t()(),e(31,"div",4)(32,"po-button",17),f("p-click",function(){return d(p),s(n.restore())}),t()()()()}if(r&2){let p=k(15),c=k(23);E("p-breadcrumb",n.breadcrumb)("p-disable-submit",n.properties.includes("disableSubmit"))("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),m(2),E("p-value",n.action),m(4),b("ngModel",n.title),m(),b("ngModel",n.subtitle),m(),b("ngModel",n.properties),E("p-options",n.propertiesOptions),m(5),b("ngModel",n.breadcrumb.favorite),m(4),b("ngModel",n.breadcrumbItem.label),m(),b("ngModel",n.breadcrumbItem.link),m(2),E("p-disabled",p.invalid),m(5),b("ngModel",n.breadcrumbParams.property),m(),b("ngModel",n.breadcrumbParams.value),m(2),E("p-disabled",c.invalid),m(2),b("ngModel",n.literals)}},dependencies:[q,N,W,U,O,Q,K,j,te,L],encapsulation:2})}return o})();var fe=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-edit-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Page Edit Labs"),t(),e(4,"a",2),f("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.html"),t(),e(13,"pre",7),i(14,`<po-page-edit
  [p-breadcrumb]="breadcrumb"
  [p-disable-submit]="properties.includes('disableSubmit')"
  [p-literals]="customLiterals"
  [p-title]="title"
  (p-cancel)="cancel()"
  (p-save)="save()"
  (p-save-new)="saveNew()"
  [p-subtitle]="subtitle"
>
  <div class="po-row">
    <po-info class="po-md-12" p-label="Action" [p-value]="action"> </po-info>
  </div>

  <hr />

  <form>
    <div class="po-row">
      <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>
      <po-input class="po-md-12" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

      <po-checkbox-group
        class="po-md-6"
        name="properties"
        [(ngModel)]="properties"
        p-label="Properties"
        [p-options]="propertiesOptions"
      >
      </po-checkbox-group>
    </div>

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

    <div class="po-row">
      <po-input
        class="po-lg-12"
        name="literals"
        [(ngModel)]="literals"
        p-help='Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}'
        p-label="Literals"
        (p-change)="changeLiterals()"
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</po-page-edit>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts"),t(),e(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem } from '@po-ui/ng-components';
import { PoCheckboxGroupOption } from '@po-ui/ng-components';

import { PoPageEditLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-edit-labs',
  templateUrl: './sample-po-page-edit-labs.component.html',
  standalone: false
})
export class SamplePoPageEditLabsComponent implements OnInit {
  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  customLiterals: PoPageEditLiterals;
  literals: string;
  params: any;
  properties: Array<string>;
  title: string;
  subtitle: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disableSubmit', label: 'Disable Submit' }
  ];

  ngOnInit() {
    this.restore();
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

  cancel() {
    this.action = 'Cancel';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.customLiterals = undefined;
    this.literals = '';
    this.properties = [];
    this.title = 'PO Page Edit';
    this.subtitle = '';
  }

  save() {
    this.action = 'Save';
  }

  saveNew() {
    this.action = 'Save and new';
  }
}
`),t()()()()(),e(21,"div",10),l(22,"sample-po-page-edit-labs"),t(),l(23,"hr")),r&2&&(m(5),y("po-icon "+n.sampleCodeButtonIcon),m(),M(" ",n.sampleCodeButtonLabel,""),m(),E("ngClass",x(4,fe,n.hideSampleCodeTabs)))},dependencies:[B,w,v,C,le],encapsulation:2})}return o})();var Ce=["formEditUser"],me=(()=>{class o{route;poDialog;poNotification;formEditUser;birthDate;email;fathersName;genre;graduation;mothersName;name;nationality;nickname;placeOfBirth;userId;breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"User Edit"}]};constructor(u,r,n){this.route=u,this.poDialog=r,this.poNotification=n}ngOnInit(){this.initialize()}cancel(){this.initialize()}initialize(){this.birthDate=new Date(1978,11,26),this.email="john.doe@po-ui.com.br",this.fathersName="Mike Doe",this.genre="male",this.graduation="College Degree",this.mothersName="Jane Doe",this.name="John Doe",this.nationality="USA",this.nickname="John",this.placeOfBirth="Colorado",this.userId=122635}save(){this.poNotification.success("Save successfully")}beforeRedirect(u){this.formEditUser.valid?this.route.navigate(["/"]):this.poDialog.confirm({title:`Confirm redirect to ${u}`,message:"There is data that has not been saved yet. Are you sure you want to quit?",confirm:()=>this.route.navigate(["/"])})}static \u0275fac=function(r){return new(r||o)(_(F),_(Y),_(Z))};static \u0275cmp=S({type:o,selectors:[["sample-po-page-edit-user"]],viewQuery:function(r,n){if(r&1&&R(Ce,7),r&2){let p;H(p=G())&&(n.formEditUser=p.first)}},standalone:!1,decls:18,vars:13,consts:[["formEditUser","ngForm"],["p-title","User Edit",3,"p-cancel","p-save","p-breadcrumb","p-disable-submit"],[1,"po-row"],["name","userId","p-clean","","p-label","User ID","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nickname","p-clean","","p-label","Nickname",1,"po-md-4",3,"ngModelChange","ngModel"],["name","birthDate","p-clean","","p-label","Birth Date",1,"po-md-4",3,"ngModelChange","ngModel"],["name","genre","p-clean","","p-label","Genre",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nationality","p-clean","","p-label","Nationality",1,"po-md-4",3,"ngModelChange","ngModel"],["name","placeOfBirth","p-clean","","p-label","Place Of Birth",1,"po-md-4",3,"ngModelChange","ngModel"],["name","graduation","p-clean","","p-label","Graduation",1,"po-md-4",3,"ngModelChange","ngModel"],["name","fathersName","p-clean","","p-label","Father's Name",1,"po-md-4",3,"ngModelChange","ngModel"],["name","mothersName","p-clean","","p-label","Mother's Name",1,"po-md-4",3,"ngModelChange","ngModel"]],template:function(r,n){if(r&1){let p=I();e(0,"po-page-edit",1),f("p-cancel",function(){return d(p),s(n.cancel())})("p-save",function(){return d(p),s(n.save())}),e(1,"form",null,0)(3,"div",2)(4,"po-number",3),h("ngModelChange",function(a){return d(p),g(n.userId,a)||(n.userId=a),s(a)}),t(),e(5,"po-email",4),h("ngModelChange",function(a){return d(p),g(n.email,a)||(n.email=a),s(a)}),t(),e(6,"po-input",5),h("ngModelChange",function(a){return d(p),g(n.name,a)||(n.name=a),s(a)}),t()(),e(7,"div",2)(8,"po-input",6),h("ngModelChange",function(a){return d(p),g(n.nickname,a)||(n.nickname=a),s(a)}),t(),e(9,"po-datepicker",7),h("ngModelChange",function(a){return d(p),g(n.birthDate,a)||(n.birthDate=a),s(a)}),t(),e(10,"po-input",8),h("ngModelChange",function(a){return d(p),g(n.genre,a)||(n.genre=a),s(a)}),t()(),e(11,"div",2)(12,"po-input",9),h("ngModelChange",function(a){return d(p),g(n.nationality,a)||(n.nationality=a),s(a)}),t(),e(13,"po-input",10),h("ngModelChange",function(a){return d(p),g(n.placeOfBirth,a)||(n.placeOfBirth=a),s(a)}),t(),e(14,"po-input",11),h("ngModelChange",function(a){return d(p),g(n.graduation,a)||(n.graduation=a),s(a)}),t()(),e(15,"div",2)(16,"po-input",12),h("ngModelChange",function(a){return d(p),g(n.fathersName,a)||(n.fathersName=a),s(a)}),t(),e(17,"po-input",13),h("ngModelChange",function(a){return d(p),g(n.mothersName,a)||(n.mothersName=a),s(a)}),t()()()()}if(r&2){let p=k(2);E("p-breadcrumb",n.breadcrumb)("p-disable-submit",p.invalid),m(4),b("ngModel",n.userId),m(),b("ngModel",n.email),m(),b("ngModel",n.name),m(2),b("ngModel",n.nickname),m(),b("ngModel",n.birthDate),m(),b("ngModel",n.genre),m(2),b("ngModel",n.nationality),m(),b("ngModel",n.placeOfBirth),m(),b("ngModel",n.graduation),m(2),b("ngModel",n.fathersName),m(),b("ngModel",n.mothersName)}},dependencies:[q,N,W,U,O,X,$,j,ee,L],encapsulation:2})}return o})();var _e=o=>({"docs-sample-code-tabs":o}),de=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-edit-user-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Page Edit - User"),t(),e(4,"a",2),f("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-edit-user/sample-po-page-edit-user.component.html"),t(),e(13,"pre",7),i(14,`<po-page-edit
  p-title="User Edit"
  [p-breadcrumb]="breadcrumb"
  [p-disable-submit]="formEditUser.invalid"
  (p-cancel)="cancel()"
  (p-save)="save()"
>
  <form #formEditUser="ngForm">
    <div class="po-row">
      <po-number class="po-md-4" name="userId" [(ngModel)]="userId" p-clean p-label="User ID" p-required> </po-number>

      <po-email class="po-md-4" name="email" [(ngModel)]="email" p-clean p-label="Email" p-required> </po-email>

      <po-input class="po-md-4" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="nickname" [(ngModel)]="nickname" p-clean p-label="Nickname"> </po-input>

      <po-datepicker class="po-md-4" name="birthDate" [(ngModel)]="birthDate" p-clean p-label="Birth Date">
      </po-datepicker>

      <po-input class="po-md-4" name="genre" [(ngModel)]="genre" p-clean p-label="Genre"> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="nationality" [(ngModel)]="nationality" p-clean p-label="Nationality"> </po-input>

      <po-input class="po-md-4" name="placeOfBirth" [(ngModel)]="placeOfBirth" p-clean p-label="Place Of Birth">
      </po-input>

      <po-input class="po-md-4" name="graduation" [(ngModel)]="graduation" p-clean p-label="Graduation"> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="fathersName" [(ngModel)]="fathersName" p-clean p-label="Father's Name">
      </po-input>

      <po-input class="po-md-4" name="mothersName" [(ngModel)]="mothersName" p-clean p-label="Mother's Name">
      </po-input>
    </div>
  </form>
</po-page-edit>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-edit-user/sample-po-page-edit-user.component.ts"),t(),e(19,"pre",9),i(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoDialogService } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-edit-user',
  templateUrl: './sample-po-page-edit-user.component.html',
  standalone: false
})
export class SamplePoPageEditUserComponent implements OnInit {
  @ViewChild('formEditUser', { static: true }) formEditUser: NgForm;

  birthDate: Date;
  email: string;
  fathersName: string;
  genre: string;
  graduation: string;
  mothersName: string;
  name: string;
  nationality: string;
  nickname: string;
  placeOfBirth: string;
  userId: number;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', action: this.beforeRedirect.bind(this) }, { label: 'User Edit' }]
  };

  constructor(
    private route: Router,
    private poDialog: PoDialogService,
    private poNotification: PoNotificationService
  ) {}

  ngOnInit() {
    this.initialize();
  }

  cancel() {
    this.initialize();
  }

  initialize() {
    this.birthDate = new Date(1978, 11, 26);
    this.email = 'john.doe@po-ui.com.br';
    this.fathersName = 'Mike Doe';
    this.genre = 'male';
    this.graduation = 'College Degree';
    this.mothersName = 'Jane Doe';
    this.name = 'John Doe';
    this.nationality = 'USA';
    this.nickname = 'John';
    this.placeOfBirth = 'Colorado';
    this.userId = 122635;
  }

  save() {
    this.poNotification.success(\`Save successfully\`);
  }

  private beforeRedirect(itemBreadcrumbLabel) {
    if (this.formEditUser.valid) {
      this.route.navigate(['/']);
    } else {
      this.poDialog.confirm({
        title: \`Confirm redirect to \${itemBreadcrumbLabel}\`,
        message: \`There is data that has not been saved yet. Are you sure you want to quit?\`,
        confirm: () => this.route.navigate(['/'])
      });
    }
  }
}
`),t()()()()(),e(21,"div",10),l(22,"sample-po-page-edit-user"),t(),l(23,"hr")),r&2&&(m(5),y("po-icon "+n.sampleCodeButtonIcon),m(),M(" ",n.sampleCodeButtonLabel,""),m(),E("ngClass",x(4,_e,n.hideSampleCodeTabs)))},dependencies:[B,w,v,C,me],encapsulation:2})}return o})();var se=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-edit-doc"]],standalone:!1,decls:450,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoPageEditLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(r,n){r&1&&(e(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoPageModule } from '@po-ui/ng-components';"),t()(),e(4,"div",2)(5,"p"),i(6,`M\xF3dulo dos componentes po-page-default, po-page-detail, po-page-edit,
po-page-list e po-page-slide.`),t()(),e(7,"h3",3),i(8,"Componente"),t(),e(9,"h4",4)(10,"code",5),i(11,"PoPageEditComponent"),t()(),e(12,"div",2)(13,"p"),i(14,"O componente "),e(15,"strong"),i(16,"po-page-edit"),t(),i(17,` \xE9 utilizado como container principal para tela de edi\xE7\xE3o ou adi\xE7\xE3o de um
registro, tendo a possibilidade de usar as a\xE7\xF5es de "Salvar", "Salvar e Novo" e "Cancelar".`),t(),e(18,"p"),i(19,'Os bot\xF5es "Salvar" e "Salvar e Novo" podem ser habilitados/desabilitados utilizando a propriedade '),e(20,"code"),i(21,"p-disable-submit"),t(),i(22,`.
Esta propriedade pode ser utilizada para desabilitar os bot\xF5es caso exista um formul\xE1rio inv\xE1lido na p\xE1gina ou alguma
regra de neg\xF3cio n\xE3o tenha sido atendida. `),t()(),e(23,"div",6)(24,"h4",7),i(25,"Seletor"),t(),e(26,"pre",8),i(27,`<po-page-edit
    p-breadcrumb="PoBreadcrumb"
    (p-cancel)="EventEmitter"
    p-disable-submit="boolean"
    p-literals="PoPageEditLiterals"
    (p-save)="EventEmitter"
    (p-save-new)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-edit>
`),t()(),e(28,"h4",9),i(29,"Propriedades"),t(),e(30,"table",10)(31,"tr",11)(32,"th",12),i(33,"Nome"),t(),e(34,"th",12),i(35,"Tipo"),t(),e(36,"th",12),i(37,"Padr\xE3o"),t(),e(38,"th",12),i(39,"Descri\xE7\xE3o"),t()(),e(40,"tr",13)(41,"td",14)(42,"div",15)(43,"span",16),i(44," p-breadcrumb"),l(45,"br"),t()()(),e(46,"td",17)(47,"code",18),i(48,"PoBreadcrumb"),t()(),e(49,"td",19),i(50,"-"),t(),e(51,"td",20)(52,"em")(53,"strong"),i(54,"(opcional)"),t()(),e(55,"p"),i(56,"Objeto com propriedades do breadcrumb."),t()()(),e(57,"tr",13)(58,"td",14)(59,"div",21)(60,"span",22),i(61," (p-cancel)"),l(62,"br"),t()()(),e(63,"td",17)(64,"code",23),i(65,"EventEmitter"),t()(),e(66,"td",19),i(67,"-"),t(),e(68,"td",20)(69,"p"),i(70,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Cancelar".'),t(),e(71,"pre")(72,"code"),i(73,`<po-page-edit (p-cancel)="myCancelFunction()">
</po-page-edit>`),t()(),e(74,"blockquote")(75,"p"),i(76,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Cancelar" n\xE3o ser\xE1 exibido.'),t()()()(),e(77,"tr",13)(78,"td",14)(79,"div",15)(80,"span",16),i(81," p-disable-submit"),l(82,"br"),t()()(),e(83,"td",17)(84,"code",24),i(85,"boolean"),t()(),e(86,"td",19),i(87,"-"),t(),e(88,"td",20)(89,"em")(90,"strong"),i(91,"(opcional)"),t()(),e(92,"p"),i(93,"Desabilita bot\xF5es de submiss\xE3o (save e saveNew)"),t()()(),e(94,"tr",13)(95,"td",14)(96,"div",15)(97,"span",16),i(98," p-literals"),l(99,"br"),t()()(),e(100,"td",17)(101,"code",25),i(102,"PoPageEditLiterals"),t()(),e(103,"td",19),i(104,"-"),t(),e(105,"td",20)(106,"em")(107,"strong"),i(108,"(opcional)"),t()(),e(109,"p"),i(110,"Objeto com as literais usadas no "),e(111,"code"),i(112,"po-page-edit"),t(),i(113,"."),t(),e(114,"p"),i(115,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),e(116,"pre")(117,"code"),i(118,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Voltar',
  save: 'Confirmar',
  saveNew: 'Confirmar e criar um novo'
};`),t()(),e(119,"p"),i(120,"Ou passando apenas as literais que deseja customizar:"),t(),e(121,"pre")(122,"code"),i(123,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Cancelar processo'
};`),t()(),e(124,"p"),i(125,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),e(126,"pre")(127,"code"),i(128,`<po-page-edit
  [p-literals]="customLiterals">
</po-page-edit>`),t()(),e(129,"blockquote")(130,"p"),i(131,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),e(132,"a",26)(133,"code"),i(134,"PoI18nService"),t()(),i(135," ou do browser."),t()()()(),e(136,"tr",13)(137,"td",14)(138,"div",21)(139,"span",22),i(140," (p-save)"),l(141,"br"),t()()(),e(142,"td",17)(143,"code",23),i(144,"EventEmitter"),t()(),e(145,"td",19),i(146,"-"),t(),e(147,"td",20)(148,"p"),i(149,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar".'),t(),e(150,"pre")(151,"code"),i(152,`<po-page-edit (p-save)="mySaveFunction()">
</po-page-edit>`),t()(),e(153,"blockquote")(154,"p"),i(155,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar" n\xE3o ser\xE1 exibido.'),t()()()(),e(156,"tr",13)(157,"td",14)(158,"div",21)(159,"span",22),i(160," (p-save-new)"),l(161,"br"),t()()(),e(162,"td",17)(163,"code",23),i(164,"EventEmitter"),t()(),e(165,"td",19),i(166,"-"),t(),e(167,"td",20)(168,"p"),i(169,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar e Novo".'),t(),e(170,"pre")(171,"code"),i(172,`<po-page-edit (p-save-new)="mySaveNewFunction()">
</po-page-edit>`),t()(),e(173,"blockquote")(174,"p"),i(175,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar e Novo" n\xE3o ser\xE1 exibido.'),t()()()(),e(176,"tr",13)(177,"td",14)(178,"div",15)(179,"span",16),i(180," p-subtitle"),l(181,"br"),t()()(),e(182,"td",17)(183,"code",27),i(184,"string"),t()(),e(185,"td",19),i(186,"-"),t(),e(187,"td",20)(188,"em")(189,"strong"),i(190,"(opcional)"),t()(),e(191,"p"),i(192,"Subtitulo do Header da p\xE1gina"),t()()(),e(193,"tr",13)(194,"td",14)(195,"div",15)(196,"span",16),i(197," p-title"),l(198,"br"),t()()(),e(199,"td",17)(200,"code",27),i(201,"string"),t()(),e(202,"td",19),i(203,"-"),t(),e(204,"td",20)(205,"p"),i(206,"T\xEDtulo da p\xE1gina."),t()()()(),e(207,"h3"),i(208,"Interfaces"),t(),e(209,"h4",28)(210,"code",5),i(211,"PoBreadcrumbItem"),t()(),e(212,"div",2)(213,"p"),i(214,"Interface que define cada item do componente "),e(215,"strong"),i(216,"po-breadcrumb"),t(),i(217,"."),t()(),e(218,"h4",9),i(219,"Propriedades"),t(),e(220,"table",10)(221,"tr",11)(222,"th",12),i(223,"Nome"),t(),e(224,"th",12),i(225,"Tipo"),t(),e(226,"th",12),i(227,"Descri\xE7\xE3o"),t()(),e(228,"tr",13)(229,"td",14)(230,"div",15)(231,"span",16),i(232," action"),l(233,"br"),t()()(),e(234,"td",17)(235,"code",29),i(236,"Function"),t()(),e(237,"td",20)(238,"em")(239,"strong"),i(240,"(opcional)"),t()(),e(241,"p"),i(242,"A\xE7\xE3o executada ao clicar no item."),t(),e(243,"blockquote")(244,"p"),i(245,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),e(246,"em"),i(247,"label"),t(),i(248," do item como par\xE2metro para execu\xE7\xE3o."),t()()()(),e(249,"tr",13)(250,"td",14)(251,"div",15)(252,"span",16),i(253," label"),l(254,"br"),t()()(),e(255,"td",17)(256,"code",27),i(257,"string"),t()(),e(258,"td",20)(259,"p"),i(260,"R\xF3tulo do item."),t()()(),e(261,"tr",13)(262,"td",14)(263,"div",15)(264,"span",16),i(265," link"),l(266,"br"),t()()(),e(267,"td",17)(268,"code",27),i(269,"string"),t()(),e(270,"td",20)(271,"em")(272,"strong"),i(273,"(opcional)"),t()(),e(274,"p"),i(275,"Url do item."),t(),e(276,"blockquote")(277,"p"),i(278,"Caso o item tamb\xE9m contenha uma "),e(279,"em"),i(280,"action"),t(),i(281," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),e(282,"em"),i(283,"link"),t(),i(284,"."),t()(),e(285,"blockquote")(286,"p"),i(287,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),e(288,"strong")(289,"a",30),i(290,"Veja um exemplo de como criar rotas aqui"),t()(),i(291,"."),t()(),e(292,"blockquote")(293,"p"),i(294,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),e(295,"code"),i(296,"p-favorite-service"),t(),i(297," consiga favoritar ou desfavoritar."),t()()()()(),e(298,"h4",28)(299,"code",5),i(300,"PoBreadcrumb"),t()(),e(301,"div",2)(302,"p"),i(303,"Interface que define o "),e(304,"code"),i(305,"po-breadcrumb"),t(),i(306,"."),t()(),e(307,"h4",9),i(308,"Propriedades"),t(),e(309,"table",10)(310,"tr",11)(311,"th",12),i(312,"Nome"),t(),e(313,"th",12),i(314,"Tipo"),t(),e(315,"th",12),i(316,"Descri\xE7\xE3o"),t()(),e(317,"tr",13)(318,"td",14)(319,"div",15)(320,"span",16),i(321," favorite"),l(322,"br"),t()()(),e(323,"td",17)(324,"code",27),i(325,"string"),t()(),e(326,"td",20)(327,"em")(328,"strong"),i(329,"(opcional)"),t()(),e(330,"p"),i(331,"Permite definir uma URL para favoritar ou desfavoritar."),t(),e(332,"blockquote")(333,"p"),i(334,"Para maiores informa\xE7\xF5es verificar a propriedade "),e(335,"code"),i(336,"p-favorite-service"),t(),i(337," do componente "),e(338,"code"),i(339,"po-breadcrumb"),t(),i(340,"."),t()()()(),e(341,"tr",13)(342,"td",14)(343,"div",15)(344,"span",16),i(345," items"),l(346,"br"),t()()(),e(347,"td",17)(348,"code",31),i(349,"Array<PoBreadcrumbItem>"),t()(),e(350,"td",20)(351,"p"),i(352,"Lista de itens do "),e(353,"em"),i(354,"breadcrumb"),t(),i(355,"."),t(),e(356,"p")(357,"strong"),i(358,"Exemplo:"),t()(),e(359,"pre")(360,"code"),i(361,"{ label: 'Po Portal', link: 'portal' }"),t()()()(),e(362,"tr",13)(363,"td",14)(364,"div",15)(365,"span",16),i(366," params"),l(367,"br"),t()()(),e(368,"td",17)(369,"code",32),i(370,"object"),t()(),e(371,"td",20)(372,"em")(373,"strong"),i(374,"(opcional)"),t()(),e(375,"p"),i(376,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),t()()()(),e(377,"h4",28)(378,"code",5),i(379,"PoPageEditLiterals"),t()(),e(380,"div",2)(381,"p"),i(382,"Interface para defini\xE7\xE3o das literais usadas no "),e(383,"code"),i(384,"po-page-edit"),t(),i(385,"."),t()(),e(386,"h4",9),i(387,"Propriedades"),t(),e(388,"table",10)(389,"tr",11)(390,"th",12),i(391,"Nome"),t(),e(392,"th",12),i(393,"Tipo"),t(),e(394,"th",12),i(395,"Descri\xE7\xE3o"),t()(),e(396,"tr",13)(397,"td",14)(398,"div",15)(399,"span",16),i(400," cancel"),l(401,"br"),t()()(),e(402,"td",17)(403,"code",27),i(404,"string"),t()(),e(405,"td",20)(406,"em")(407,"strong"),i(408,"(opcional)"),t()(),e(409,"p"),i(410,"Label da a\xE7\xE3o "),e(411,"code"),i(412,"cancel"),t(),i(413,"."),t()()(),e(414,"tr",13)(415,"td",14)(416,"div",15)(417,"span",16),i(418," save"),l(419,"br"),t()()(),e(420,"td",17)(421,"code",27),i(422,"string"),t()(),e(423,"td",20)(424,"em")(425,"strong"),i(426,"(opcional)"),t()(),e(427,"p"),i(428,"Label da a\xE7\xE3o "),e(429,"code"),i(430,"save"),t(),i(431,"."),t()()(),e(432,"tr",13)(433,"td",14)(434,"div",15)(435,"span",16),i(436," saveNew"),l(437,"br"),t()()(),e(438,"td",17)(439,"code",27),i(440,"string"),t()(),e(441,"td",20)(442,"em")(443,"strong"),i(444,"(opcional)"),t()(),e(445,"p"),i(446,"Label da a\xE7\xE3o "),e(447,"code"),i(448,"saveNew"),t(),i(449,"."),t()()()()())},dependencies:[w],encapsulation:2})}return o})();var ce=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(u,r){this.route=u,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(u=>{let r=u.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||o)(_(J),_(F))};static \u0275cmp=S({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Page Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(r,n){r&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),l(3,"sample-po-page-edit-doc"),t(),e(4,"po-tab",3),l(5,"sample-po-page-edit-basic-view")(6,"sample-po-page-edit-labs-view")(7,"sample-po-page-edit-user-view"),t()()()),r&2&&(E("p-actions",n.actions),m(2),E("p-active",n.activeTab.includes("doc")),m(2),E("p-hide",n.hidePoWebSample)("p-active",n.activeTab.includes("web")))},dependencies:[ie,v,C,re,pe,de,se],encapsulation:2})}return o})();var xe=[{path:"",component:ce}],ue=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=D({type:o});static \u0275inj=V({imports:[z.forChild(xe),z]})}return o})();var Xe=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=D({type:o});static \u0275inj=V({imports:[ne,ue]})}return o})();export{Xe as DocPoPageEditModule};
