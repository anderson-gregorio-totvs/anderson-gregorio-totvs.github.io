import{$ as T,$a as w,Cd as V,F as u,Fa as q,G as b,Ga as i,Ia as y,Ka as f,La as E,Lb as W,Ma as S,Mb as U,Nb as j,Ob as R,Od as G,Pa as _,Pb as H,Pd as k,T as l,U as M,Wb as A,Xd as P,Yb as I,Yd as C,Zb as F,_ as g,ha as m,ka as D,md as J,na as e,oa as t,oc as z,pa as o,re as x,se as K,ta as O,ua as h,y as L}from"./chunk-23IW53AA.js";var Q=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=g({type:n,selectors:[["sample-po-page-detail-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page Detail"]],template:function(r,a){r&1&&o(0,"po-page-detail",0)},dependencies:[k],encapsulation:2})}return n})();var re=n=>({"docs-sample-code-tabs":n}),Y=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=g({type:n,selectors:[["sample-po-page-detail-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,a){r&1&&(o(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Page Detail Basic"),t(),e(4,"a",2),h("click",function(){return a.toggleSampleCodeTabs()}),o(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.html"),t(),e(13,"pre",7),i(14,`<po-page-detail p-title="PO Page Detail"> </po-page-detail>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts"),t(),e(19,"pre",9),i(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-detail-basic',
  templateUrl: './sample-po-page-detail-basic.component.html',
  standalone: false
})
export class SamplePoPageDetailBasicComponent {}
`),t()()()()(),e(21,"div",10),o(22,"sample-po-page-detail-basic"),t(),o(23,"hr")),r&2&&(l(5),D("po-icon "+a.sampleCodeButtonIcon),l(),y(" ",a.sampleCodeButtonLabel,""),l(),m("ngClass",_(4,re,a.hideSampleCodeTabs)))},dependencies:[w,x,P,C,Q],encapsulation:2})}return n})();var Z=(()=>{class n{action;breadcrumb;breadcrumbItem;breadcrumbParams;customLiterals;literals;params;title;subtitle;ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={}}back(){this.action="back"}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}edit(){this.action="edit"}remove(){this.action="remove"}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.customLiterals=void 0,this.literals="",this.title="PO Page Detail",this.subtitle=""}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=g({type:n,selectors:[["sample-po-page-detail-labs"]],standalone:!1,decls:33,vars:15,consts:[["f","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-edit","p-remove","p-breadcrumb","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-12",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-12",3,"ngModelChange","ngModel"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-4",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}',"p-label","Literals",1,"po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(r,a){if(r&1){let s=O();e(0,"po-page-detail",4),h("p-back",function(){return u(s),b(a.back())})("p-edit",function(){return u(s),b(a.edit())})("p-remove",function(){return u(s),b(a.remove())}),e(1,"div",5),o(2,"po-info",6),t(),o(3,"hr"),e(4,"form",null,0)(6,"div",5)(7,"po-input",7),S("ngModelChange",function(p){return u(s),E(a.title,p)||(a.title=p),b(p)}),t(),e(8,"po-input",8),S("ngModelChange",function(p){return u(s),E(a.subtitle,p)||(a.subtitle=p),b(p)}),t()(),o(9,"hr"),e(10,"form",null,1)(12,"div",5)(13,"po-input",9),S("ngModelChange",function(p){return u(s),E(a.breadcrumb.favorite,p)||(a.breadcrumb.favorite=p),b(p)}),t()()(),e(14,"form",null,2)(16,"div",5)(17,"po-input",10),S("ngModelChange",function(p){return u(s),E(a.breadcrumbItem.label,p)||(a.breadcrumbItem.label=p),b(p)}),t(),e(18,"po-input",11),S("ngModelChange",function(p){return u(s),E(a.breadcrumbItem.link,p)||(a.breadcrumbItem.link=p),b(p)}),t()(),e(19,"div",5)(20,"po-button",12),h("p-click",function(){return u(s),b(a.addBreadcrumbItem())}),t()()(),o(21,"hr"),e(22,"form",null,3)(24,"div",5)(25,"po-input",13),S("ngModelChange",function(p){return u(s),E(a.breadcrumbParams.property,p)||(a.breadcrumbParams.property=p),b(p)}),t(),e(26,"po-input",14),S("ngModelChange",function(p){return u(s),E(a.breadcrumbParams.value,p)||(a.breadcrumbParams.value=p),b(p)}),t()(),e(27,"div",5)(28,"po-button",15),h("p-click",function(){return u(s),b(a.addBreadcrumbParam())}),t()()(),e(29,"div",5)(30,"po-input",16),S("ngModelChange",function(p){return u(s),E(a.literals,p)||(a.literals=p),b(p)}),h("p-change",function(){return u(s),b(a.changeLiterals())}),t()(),e(31,"div",5)(32,"po-button",17),h("p-click",function(){return u(s),b(a.restore())}),t()()()()}if(r&2){let s=q(15),c=q(23);m("p-breadcrumb",a.breadcrumb)("p-literals",a.customLiterals)("p-title",a.title)("p-subtitle",a.subtitle),l(2),m("p-value",a.action),l(5),f("ngModel",a.title),l(),f("ngModel",a.subtitle),l(5),f("ngModel",a.breadcrumb.favorite),l(4),f("ngModel",a.breadcrumbItem.label),l(),f("ngModel",a.breadcrumbItem.link),l(2),m("p-disabled",s.invalid),l(5),f("ngModel",a.breadcrumbParams.property),l(),f("ngModel",a.breadcrumbParams.value),l(2),m("p-disabled",c.invalid),l(2),f("ngModel",a.literals)}},dependencies:[H,W,U,R,j,z,J,V,k],encapsulation:2})}return n})();var me=n=>({"docs-sample-code-tabs":n}),$=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=g({type:n,selectors:[["sample-po-page-detail-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,a){r&1&&(o(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Page Detail Labs"),t(),e(4,"a",2),h("click",function(){return a.toggleSampleCodeTabs()}),o(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.html"),t(),e(13,"pre",7),i(14,`<po-page-detail
  [p-breadcrumb]="breadcrumb"
  [p-literals]="customLiterals"
  [p-title]="title"
  (p-back)="back()"
  (p-edit)="edit()"
  (p-remove)="remove()"
  [p-subtitle]="subtitle"
>
  <div class="po-row">
    <po-info class="po-md-12" p-label="Action" [p-value]="action"> </po-info>
  </div>

  <hr />

  <form #f="ngForm">
    <div class="po-row">
      <po-input class="po-md-12" name="title" [(ngModel)]="title" p-label="Title"> </po-input>
      <po-input class="po-md-12" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>
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
        p-help='Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}'
        p-label="Literals"
        (p-change)="changeLiterals()"
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</po-page-detail>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts"),t(),e(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem } from '@po-ui/ng-components';
import { PoPageDetailLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-labs',
  templateUrl: './sample-po-page-detail-labs.component.html',
  standalone: false
})
export class SamplePoPageDetailLabsComponent implements OnInit {
  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  customLiterals: PoPageDetailLiterals;
  literals: string;
  params: any;
  title: string;
  subtitle: string;

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

  back() {
    this.action = 'back';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  edit() {
    this.action = 'edit';
  }

  remove() {
    this.action = 'remove';
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.customLiterals = undefined;
    this.literals = '';
    this.title = 'PO Page Detail';
    this.subtitle = '';
  }
}
`),t()()()()(),e(21,"div",10),o(22,"sample-po-page-detail-labs"),t(),o(23,"hr")),r&2&&(l(5),D("po-icon "+a.sampleCodeButtonIcon),l(),y(" ",a.sampleCodeButtonLabel,""),l(),m("ngClass",_(4,me,a.hideSampleCodeTabs)))},dependencies:[w,x,P,C,Z],encapsulation:2})}return n})();var ee=(()=>{class n{router;birthDate="26/12/1978";email="john.doe@po-ui.com.br";fathersName="Mike Doe";genre="male";graduation="College Degree";mothersName="Jane Doe";name="John Doe";nationality="USA";nickname="John";placeOfBirth="Colorado";userId=122635;breadcrumb={items:[{label:"Home",link:"/"},{label:"User Detail"}]};constructor(d){this.router=d}edit(){this.router.navigate(["/documentation/po-page-edit"],{queryParams:{view:"web"}})}static \u0275fac=function(r){return new(r||n)(M(I))};static \u0275cmp=g({type:n,selectors:[["sample-po-page-detail-user"]],standalone:!1,decls:19,vars:12,consts:[["p-title","User Detail",3,"p-edit","p-breadcrumb"],[1,"po-row"],["p-label","User ID",1,"po-md-4",3,"p-value"],["p-label","E-mail",1,"po-md-4",3,"p-value"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Birth Date",1,"po-md-4",3,"p-value"],["p-label","Genre",1,"po-md-4",3,"p-value"],["p-label","Nationality",1,"po-md-4",3,"p-value"],["p-label","Place Of Birth",1,"po-md-4",3,"p-value"],["p-label","Graduation",1,"po-md-4",3,"p-value"],["p-label","Fathers Name",1,"po-md-4",3,"p-value"],["p-label","Mothers Name",1,"po-md-4",3,"p-value"]],template:function(r,a){r&1&&(e(0,"po-page-detail",0),h("p-edit",function(){return a.edit()}),e(1,"div",1),o(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),t(),o(5,"hr"),e(6,"div",1),o(7,"po-info",5)(8,"po-info",6)(9,"po-info",7),t(),o(10,"hr"),e(11,"div",1),o(12,"po-info",8)(13,"po-info",9)(14,"po-info",10),t(),o(15,"hr"),e(16,"div",1),o(17,"po-info",11)(18,"po-info",12),t()()),r&2&&(m("p-breadcrumb",a.breadcrumb),l(2),m("p-value",a.userId),l(),m("p-value",a.email),l(),m("p-value",a.name),l(3),m("p-value",a.nickname),l(),m("p-value",a.birthDate),l(),m("p-value",a.genre),l(3),m("p-value",a.nationality),l(),m("p-value",a.placeOfBirth),l(),m("p-value",a.graduation),l(3),m("p-value",a.fathersName),l(),m("p-value",a.mothersName))},dependencies:[V,k],encapsulation:2})}return n})();var ue=n=>({"docs-sample-code-tabs":n}),te=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=g({type:n,selectors:[["sample-po-page-detail-user-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,a){r&1&&(o(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Page Detail - User"),t(),e(4,"a",2),h("click",function(){return a.toggleSampleCodeTabs()}),o(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-detail-user/sample-po-page-detail-user.component.html"),t(),e(13,"pre",7),i(14,`<po-page-detail p-title="User Detail" [p-breadcrumb]="breadcrumb" (p-edit)="edit()">
  <div class="po-row">
    <po-info class="po-md-4" p-label="User ID" [p-value]="userId"> </po-info>

    <po-info class="po-md-4" p-label="E-mail" [p-value]="email"> </po-info>

    <po-info class="po-md-4" p-label="Name" [p-value]="name"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nickname" [p-value]="nickname"> </po-info>

    <po-info class="po-md-4" p-label="Birth Date" [p-value]="birthDate"> </po-info>

    <po-info class="po-md-4" p-label="Genre" [p-value]="genre"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nationality" [p-value]="nationality"> </po-info>

    <po-info class="po-md-4" p-label="Place Of Birth" [p-value]="placeOfBirth"> </po-info>

    <po-info class="po-md-4" p-label="Graduation" [p-value]="graduation"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Fathers Name" [p-value]="fathersName"> </po-info>

    <po-info class="po-md-4" p-label="Mothers Name" [p-value]="mothersName"> </po-info>
  </div>
</po-page-detail>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-detail-user/sample-po-page-detail-user.component.ts"),t(),e(19,"pre",9),i(20,`import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-user',
  templateUrl: './sample-po-page-detail-user.component.html',
  standalone: false
})
export class SamplePoPageDetailUserComponent {
  birthDate: string = '26/12/1978';
  email: string = 'john.doe@po-ui.com.br';
  fathersName: string = 'Mike Doe';
  genre: string = 'male';
  graduation: string = 'College Degree';
  mothersName: string = 'Jane Doe';
  name: string = 'John Doe';
  nationality: string = 'USA';
  nickname: string = 'John';
  placeOfBirth: string = 'Colorado';
  userId: number = 122635;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'User Detail' }]
  };

  constructor(private router: Router) {}

  edit() {
    this.router.navigate(['/documentation/po-page-edit'], { queryParams: { view: 'web' } });
  }
}
`),t()()()()(),e(21,"div",10),o(22,"sample-po-page-detail-user"),t(),o(23,"hr")),r&2&&(l(5),D("po-icon "+a.sampleCodeButtonIcon),l(),y(" ",a.sampleCodeButtonLabel,""),l(),m("ngClass",_(4,ue,a.hideSampleCodeTabs)))},dependencies:[w,x,P,C,ee],encapsulation:2})}return n})();var ie=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=g({type:n,selectors:[["sample-po-page-detail-doc"]],standalone:!1,decls:425,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","PoPageDetailLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(r,a){r&1&&(e(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoPageModule } from '@po-ui/ng-components';"),t()(),e(4,"div",2)(5,"p"),i(6,`M\xF3dulo dos componentes po-page-default, po-page-detail, po-page-edit,
po-page-list e po-page-slide.`),t()(),e(7,"h3",3),i(8,"Componente"),t(),e(9,"h4",4)(10,"code",5),i(11,"PoPageDetailComponent"),t()(),e(12,"div",2)(13,"p"),i(14,"O componente "),e(15,"strong"),i(16,"po-page-detail"),t(),i(17,` \xE9 utilizado como container principal para a tela de
detalhamento de um registro, tendo a possibilidade de usar as a\xE7\xF5es de "Voltar", "Editar" e "Remover". `),t()(),e(18,"div",6)(19,"h4",7),i(20,"Seletor"),t(),e(21,"pre",8),i(22,`<po-page-detail
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    (p-edit)="EventEmitter"
    p-literals="PoPageDetailLiterals"
    (p-remove)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-detail>
`),t()(),e(23,"h4",9),i(24,"Propriedades"),t(),e(25,"table",10)(26,"tr",11)(27,"th",12),i(28,"Nome"),t(),e(29,"th",12),i(30,"Tipo"),t(),e(31,"th",12),i(32,"Padr\xE3o"),t(),e(33,"th",12),i(34,"Descri\xE7\xE3o"),t()(),e(35,"tr",13)(36,"td",14)(37,"div",15)(38,"span",16),i(39," (p-back)"),o(40,"br"),t()()(),e(41,"td",17)(42,"code",18),i(43,"EventEmitter"),t()(),e(44,"td",19),i(45,"-"),t(),e(46,"td",20)(47,"p"),i(48,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Voltar".'),t(),e(49,"pre")(50,"code"),i(51,`<po-page-detail (p-back)="myBackFunction()">
</po-page-detail>`),t()(),e(52,"blockquote")(53,"p"),i(54,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Voltar" n\xE3o ser\xE1 exibido.'),t()()()(),e(55,"tr",13)(56,"td",14)(57,"div",21)(58,"span",22),i(59," p-breadcrumb"),o(60,"br"),t()()(),e(61,"td",17)(62,"code",23),i(63,"PoBreadcrumb"),t()(),e(64,"td",19),i(65,"-"),t(),e(66,"td",20)(67,"p"),i(68,"Objeto com propriedades do breadcrumb."),t()()(),e(69,"tr",13)(70,"td",14)(71,"div",15)(72,"span",16),i(73," (p-edit)"),o(74,"br"),t()()(),e(75,"td",17)(76,"code",18),i(77,"EventEmitter"),t()(),e(78,"td",19),i(79,"-"),t(),e(80,"td",20)(81,"p"),i(82,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Editar".'),t(),e(83,"pre")(84,"code"),i(85,`<po-page-detail (p-edit)="myEditFunction()">
</po-page-detail>`),t()(),e(86,"blockquote")(87,"p"),i(88,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Editar" n\xE3o ser\xE1 exibido.'),t()()()(),e(89,"tr",13)(90,"td",14)(91,"div",21)(92,"span",22),i(93," p-literals"),o(94,"br"),t()()(),e(95,"td",17)(96,"code",24),i(97,"PoPageDetailLiterals"),t()(),e(98,"td",19),i(99,"-"),t(),e(100,"td",20)(101,"em")(102,"strong"),i(103,"(opcional)"),t()(),e(104,"p"),i(105,"Objeto com as literais usadas no "),e(106,"code"),i(107,"po-page-detail"),t(),i(108,"."),t(),e(109,"p"),i(110,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),e(111,"pre")(112,"code"),i(113,`const customLiterals: PoPageDetailLiterals = {
  edit: 'Edi\xE7\xE3o',
  remove: 'Exclus\xE3o',
  back: 'Menu'
};`),t()(),e(114,"p"),i(115,"Ou passando apenas as literais que deseja customizar:"),t(),e(116,"pre")(117,"code"),i(118,`const customLiterals: PoPageDetailLiterals = {
  remove: 'Excluir registro permanentemente'
};`),t()(),e(119,"p"),i(120,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),e(121,"pre")(122,"code"),i(123,`<po-page-detail
  [p-literals]="customLiterals">
</po-page-detail>`),t()(),e(124,"blockquote")(125,"p"),i(126,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),e(127,"a",25)(128,"code"),i(129,"PoI18nService"),t()(),i(130," ou do browser."),t()()()(),e(131,"tr",13)(132,"td",14)(133,"div",15)(134,"span",16),i(135," (p-remove)"),o(136,"br"),t()()(),e(137,"td",17)(138,"code",18),i(139,"EventEmitter"),t()(),e(140,"td",19),i(141,"-"),t(),e(142,"td",20)(143,"p"),i(144,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Remover".'),t(),e(145,"pre")(146,"code"),i(147,`<po-page-detail (p-remove)="myRemoveFunction()">
</po-page-detail>`),t()(),e(148,"blockquote")(149,"p"),i(150,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Remover" n\xE3o ser\xE1 exibido.'),t()()()(),e(151,"tr",13)(152,"td",14)(153,"div",21)(154,"span",22),i(155," p-subtitle"),o(156,"br"),t()()(),e(157,"td",17)(158,"code",26),i(159,"string"),t()(),e(160,"td",19),i(161,"-"),t(),e(162,"td",20)(163,"em")(164,"strong"),i(165,"(opcional)"),t()(),e(166,"p"),i(167,"Subtitulo do Header da p\xE1gina"),t()()(),e(168,"tr",13)(169,"td",14)(170,"div",21)(171,"span",22),i(172," p-title"),o(173,"br"),t()()(),e(174,"td",17)(175,"code",26),i(176,"string"),t()(),e(177,"td",19),i(178,"-"),t(),e(179,"td",20)(180,"p"),i(181,"T\xEDtulo da p\xE1gina."),t()()()(),e(182,"h3"),i(183,"Interfaces"),t(),e(184,"h4",27)(185,"code",5),i(186,"PoBreadcrumbItem"),t()(),e(187,"div",2)(188,"p"),i(189,"Interface que define cada item do componente "),e(190,"strong"),i(191,"po-breadcrumb"),t(),i(192,"."),t()(),e(193,"h4",9),i(194,"Propriedades"),t(),e(195,"table",10)(196,"tr",11)(197,"th",12),i(198,"Nome"),t(),e(199,"th",12),i(200,"Tipo"),t(),e(201,"th",12),i(202,"Descri\xE7\xE3o"),t()(),e(203,"tr",13)(204,"td",14)(205,"div",21)(206,"span",22),i(207," action"),o(208,"br"),t()()(),e(209,"td",17)(210,"code",28),i(211,"Function"),t()(),e(212,"td",20)(213,"em")(214,"strong"),i(215,"(opcional)"),t()(),e(216,"p"),i(217,"A\xE7\xE3o executada ao clicar no item."),t(),e(218,"blockquote")(219,"p"),i(220,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),e(221,"em"),i(222,"label"),t(),i(223," do item como par\xE2metro para execu\xE7\xE3o."),t()()()(),e(224,"tr",13)(225,"td",14)(226,"div",21)(227,"span",22),i(228," label"),o(229,"br"),t()()(),e(230,"td",17)(231,"code",26),i(232,"string"),t()(),e(233,"td",20)(234,"p"),i(235,"R\xF3tulo do item."),t()()(),e(236,"tr",13)(237,"td",14)(238,"div",21)(239,"span",22),i(240," link"),o(241,"br"),t()()(),e(242,"td",17)(243,"code",26),i(244,"string"),t()(),e(245,"td",20)(246,"em")(247,"strong"),i(248,"(opcional)"),t()(),e(249,"p"),i(250,"Url do item."),t(),e(251,"blockquote")(252,"p"),i(253,"Caso o item tamb\xE9m contenha uma "),e(254,"em"),i(255,"action"),t(),i(256," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),e(257,"em"),i(258,"link"),t(),i(259,"."),t()(),e(260,"blockquote")(261,"p"),i(262,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),e(263,"strong")(264,"a",29),i(265,"Veja um exemplo de como criar rotas aqui"),t()(),i(266,"."),t()(),e(267,"blockquote")(268,"p"),i(269,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),e(270,"code"),i(271,"p-favorite-service"),t(),i(272," consiga favoritar ou desfavoritar."),t()()()()(),e(273,"h4",27)(274,"code",5),i(275,"PoBreadcrumb"),t()(),e(276,"div",2)(277,"p"),i(278,"Interface que define o "),e(279,"code"),i(280,"po-breadcrumb"),t(),i(281,"."),t()(),e(282,"h4",9),i(283,"Propriedades"),t(),e(284,"table",10)(285,"tr",11)(286,"th",12),i(287,"Nome"),t(),e(288,"th",12),i(289,"Tipo"),t(),e(290,"th",12),i(291,"Descri\xE7\xE3o"),t()(),e(292,"tr",13)(293,"td",14)(294,"div",21)(295,"span",22),i(296," favorite"),o(297,"br"),t()()(),e(298,"td",17)(299,"code",26),i(300,"string"),t()(),e(301,"td",20)(302,"em")(303,"strong"),i(304,"(opcional)"),t()(),e(305,"p"),i(306,"Permite definir uma URL para favoritar ou desfavoritar."),t(),e(307,"blockquote")(308,"p"),i(309,"Para maiores informa\xE7\xF5es verificar a propriedade "),e(310,"code"),i(311,"p-favorite-service"),t(),i(312," do componente "),e(313,"code"),i(314,"po-breadcrumb"),t(),i(315,"."),t()()()(),e(316,"tr",13)(317,"td",14)(318,"div",21)(319,"span",22),i(320," items"),o(321,"br"),t()()(),e(322,"td",17)(323,"code",30),i(324,"Array<PoBreadcrumbItem>"),t()(),e(325,"td",20)(326,"p"),i(327,"Lista de itens do "),e(328,"em"),i(329,"breadcrumb"),t(),i(330,"."),t(),e(331,"p")(332,"strong"),i(333,"Exemplo:"),t()(),e(334,"pre")(335,"code"),i(336,"{ label: 'Po Portal', link: 'portal' }"),t()()()(),e(337,"tr",13)(338,"td",14)(339,"div",21)(340,"span",22),i(341," params"),o(342,"br"),t()()(),e(343,"td",17)(344,"code",31),i(345,"object"),t()(),e(346,"td",20)(347,"em")(348,"strong"),i(349,"(opcional)"),t()(),e(350,"p"),i(351,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),t()()()(),e(352,"h4",27)(353,"code",5),i(354,"PoPageDetailLiterals"),t()(),e(355,"div",2)(356,"p"),i(357,"Interface para defini\xE7\xE3o das literais usadas no "),e(358,"code"),i(359,"po-page-detail"),t(),i(360,"."),t()(),e(361,"h4",9),i(362,"Propriedades"),t(),e(363,"table",10)(364,"tr",11)(365,"th",12),i(366,"Nome"),t(),e(367,"th",12),i(368,"Tipo"),t(),e(369,"th",12),i(370,"Descri\xE7\xE3o"),t()(),e(371,"tr",13)(372,"td",14)(373,"div",21)(374,"span",22),i(375," back"),o(376,"br"),t()()(),e(377,"td",17)(378,"code",26),i(379,"string"),t()(),e(380,"td",20)(381,"em")(382,"strong"),i(383,"(opcional)"),t()(),e(384,"p"),i(385,"Label da a\xE7\xE3o "),e(386,"code"),i(387,"back"),t(),i(388,"."),t()()(),e(389,"tr",13)(390,"td",14)(391,"div",21)(392,"span",22),i(393," edit"),o(394,"br"),t()()(),e(395,"td",17)(396,"code",26),i(397,"string"),t()(),e(398,"td",20)(399,"em")(400,"strong"),i(401,"(opcional)"),t()(),e(402,"p"),i(403,"Label da a\xE7\xE3o "),e(404,"code"),i(405,"edit"),t(),i(406,"."),t()()(),e(407,"tr",13)(408,"td",14)(409,"div",21)(410,"span",22),i(411," remove"),o(412,"br"),t()()(),e(413,"td",17)(414,"code",26),i(415,"string"),t()(),e(416,"td",20)(417,"em")(418,"strong"),i(419,"(opcional)"),t()(),e(420,"p"),i(421,"Label da a\xE7\xE3o "),e(422,"code"),i(423,"remove"),t(),i(424,"."),t()()()()())},dependencies:[x],encapsulation:2})}return n})();var ae=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||n)(M(A),M(I))};static \u0275cmp=g({type:n,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Page Detail",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(r,a){r&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),o(3,"sample-po-page-detail-doc"),t(),e(4,"po-tab",3),o(5,"sample-po-page-detail-basic-view")(6,"sample-po-page-detail-labs-view")(7,"sample-po-page-detail-user-view"),t()()()),r&2&&(m("p-actions",a.actions),l(2),m("p-active",a.activeTab.includes("doc")),l(2),m("p-hide",a.hidePoWebSample)("p-active",a.activeTab.includes("web")))},dependencies:[G,P,C,Y,$,te,ie],encapsulation:2})}return n})();var he=[{path:"",component:ae}],ne=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=T({type:n});static \u0275inj=L({imports:[F.forChild(he),F]})}return n})();var Ue=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=T({type:n});static \u0275inj=L({imports:[K,ne]})}return n})();export{Ue as DocPoPageDetailModule};
