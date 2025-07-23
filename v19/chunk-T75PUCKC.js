import{$ as A,$a as T,$d as ae,Ca as j,Da as z,Ea as R,F as b,Fc as W,G as h,Ga as t,Ia as C,Ka as E,La as x,Lb as N,Ma as w,Mb as I,Na as U,Nb as L,Ob as O,Od as q,Pa as M,Pb as F,T as s,U as P,Wb as K,Xd as f,Yb as X,Yd as S,Zb as G,_ as m,ad as $,gd as ee,ha as d,ka as y,ld as te,md as ne,na as n,oa as e,oc as Y,pa as r,re as v,sd as oe,se as re,ta as B,ua as g,vc as D,x as Q,y as V,zc as Z,zd as ie}from"./chunk-ODUOVNEW.js";var le=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=m({type:o,selectors:[["sample-po-container-basic"]],standalone:!1,decls:1,vars:0,template:function(a,i){a&1&&r(0,"po-container")},dependencies:[D],encapsulation:2})}return o})();var fe=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=m({type:o,selectors:[["sample-po-container-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Container Basic"),e(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-container-basic/sample-po-container-basic.component.html"),e(),n(13,"pre",7),t(14,`<po-container></po-container>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-container-basic/sample-po-container-basic.component.ts"),e(),n(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-container-basic',
  templateUrl: './sample-po-container-basic.component.html',
  standalone: false
})
export class SamplePoContainerBasicComponent {}
`),e()()()()(),n(21,"div",10),r(22,"sample-po-container-basic"),e(),r(23,"hr")),a&2&&(s(5),y("po-icon "+i.sampleCodeButtonIcon),s(),C(" ",i.sampleCodeButtonLabel,""),s(),d("ngClass",M(4,fe,i.hideSampleCodeTabs)))},dependencies:[T,v,f,S,le],encapsulation:2})}return o})();var de=(()=>{class o{content;title;height;properties;propertiesOptions=[{value:"noBorder",label:"No Border"},{value:"noPadding",label:"No Padding"}];ngOnInit(){this.restore()}restore(){this.title=void 0,this.content=void 0,this.height=void 0,this.properties=[]}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=m({type:o,selectors:[["sample-po-container-labs"]],standalone:!1,decls:13,vars:10,consts:[["f","ngForm"],[3,"p-title","p-height","p-no-border","p-no-padding"],[1,"po-row"],["name","title","p-label","Titulo",1,"po-md-4",3,"ngModelChange","ngModel"],["name","height","p-label","Height",1,"po-md-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","content","p-label","Content",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let c=B();n(0,"po-container",1),t(1),e(),r(2,"hr"),n(3,"form",null,0)(5,"div",2)(6,"po-input",3),w("ngModelChange",function(p){return b(c),x(i.title,p)||(i.title=p),h(p)}),e(),n(7,"po-number",4),w("ngModelChange",function(p){return b(c),x(i.height,p)||(i.height=p),h(p)}),e(),n(8,"po-checkbox-group",5),w("ngModelChange",function(p){return b(c),x(i.properties,p)||(i.properties=p),h(p)}),e()(),n(9,"div",2)(10,"po-textarea",6),w("ngModelChange",function(p){return b(c),x(i.content,p)||(i.content=p),h(p)}),e()(),n(11,"div",2)(12,"po-button",7),g("p-click",function(){return b(c),h(i.restore())}),e()()()}a&2&&(d("p-title",i.title)("p-height",i.height)("p-no-border",i.properties.includes("noBorder"))("p-no-padding",i.properties.includes("noPadding")),s(),C(" ",i.content,`
`),s(5),E("ngModel",i.title),s(),E("ngModel",i.height),s(),E("ngModel",i.properties),d("p-options",i.propertiesOptions),s(2),E("ngModel",i.content))},dependencies:[F,N,I,O,L,Y,D,Z,ne,oe,ie],encapsulation:2})}return o})();var xe=o=>({"docs-sample-code-tabs":o}),me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=m({type:o,selectors:[["sample-po-container-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Container Labs"),e(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-container-labs/sample-po-container-labs.component.html"),e(),n(13,"pre",7),t(14,`<po-container
  [p-title]="title"
  [p-height]="height"
  [p-no-border]="properties.includes('noBorder')"
  [p-no-padding]="properties.includes('noPadding')"
>
  { { content }}
</po-container>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-4" name="title" [(ngModel)]="title" p-label="Titulo"> </po-input>

    <po-number class="po-md-4" name="height" [(ngModel)]="height" p-label="Height"> </po-number>

    <po-checkbox-group
      class="po-md-4"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" [(ngModel)]="content" name="content" p-label="Content"> </po-textarea>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-container-labs/sample-po-container-labs.component.ts"),e(),n(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-container-labs',
  templateUrl: './sample-po-container-labs.component.html',
  standalone: false
})
export class SamplePoContainerLabsComponent implements OnInit {
  content: string;
  title: string;
  height: number;
  properties: Array<string>;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'noBorder', label: 'No Border' },
    { value: 'noPadding', label: 'No Padding' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.title = undefined;
    this.content = undefined;
    this.height = undefined;
    this.properties = [];
  }
}
`),e()()()()(),n(21,"div",10),r(22,"sample-po-container-labs"),e(),r(23,"hr")),a&2&&(s(5),y("po-icon "+i.sampleCodeButtonIcon),s(),C(" ",i.sampleCodeButtonLabel,""),s(),d("ngClass",M(4,xe,i.hideSampleCodeTabs)))},dependencies:[T,v,f,S,de],encapsulation:2})}return o})();var H=(()=>{class o{getColumns(){return[{property:"cities",label:"Cities that most downloaded PO"},{property:"packageVersion",label:"Package version"},{property:"downloads"}]}getItems(){return[{cities:"S\xE3o Paulo",packageVersion:"3.0.0-beta.1",downloads:"2000"},{cities:"Joinville",packageVersion:"2.9.1",downloads:"1000"},{cities:"Rio de Janeiro",packageVersion:"3.0.0",downloads:"250"},{cities:"Santa Catarina",packageVersion:"1.9.1",downloads:"100"},{cities:"Curitiba",packageVersion:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",packageVersion:"1.9.1",downloads:"250"},{cities:"Londrina",packageVersion:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",packageVersion:"1.9.1",downloads:"1100"}]}static \u0275fac=function(a){return new(a||o)};static \u0275prov=Q({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ye=["formShare"],ce=(()=>{class o{poNotification;sampleDashboardService;formShare;poModal;columns;email=void 0;isSubscribed=!1;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"Disable notification",icon:"an an-bell",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};cancelAction={action:()=>{this.modalClose()},label:"Cancel"};shareAction={action:()=>{this.share()},label:"Share"};constructor(l,a){this.poNotification=l,this.sampleDashboardService=a}ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}ngAfterContentChecked(){this.shareAction.danger=this.formShare.invalid}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Invalid email."),this.modalClose()}disableNotification(){this.isSubscribed=!0}static \u0275fac=function(a){return new(a||o)(P($),P(H))};static \u0275cmp=m({type:o,selectors:[["sample-po-container-dashboard"]],viewQuery:function(a,i){if(a&1&&(j(ye,7),j(W,5)),a&2){let c;z(c=R())&&(i.formShare=c.first),z(c=R())&&(i.poModal=c.first)}},standalone:!1,features:[U([H])],decls:38,vars:8,consts:[["formShare","ngForm"],["p-title","Dashboard",3,"p-actions","p-breadcrumb"],[1,"po-lg-6"],["p-title","Daily visitors",1,"po-lg-6","po-mb-1"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-container-dashboard"],["p-title","Most viewed page",1,"po-lg-6","po-mb-1"],["p-title","Website status",1,"po-lg-6","po-mb-1"],["p-title","NPM downloads",1,"po-lg-6","po-mb-1"],["p-title","Devforum PO questions",1,"po-lg-6","po-mb-1"],["p-title","Angular versions supported",1,"po-lg-6","po-mb-1"],["p-striped","true",3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(a,i){if(a&1){let c=B();n(0,"po-page-default",1)(1,"po-container",2)(2,"po-widget",3)(3,"div",4),t(4,"540"),e(),n(5,"div",5),t(6,"www.po.com.br"),e()(),n(7,"po-widget",6)(8,"div",4),t(9,"300 views"),e(),n(10,"div",5),t(11,"https://po-ui.io"),e()(),n(12,"po-widget",7)(13,"div",4),t(14,"Online"),e(),n(15,"div",5),t(16,"21 days"),e()(),n(17,"po-widget",8)(18,"div",4),t(19,"266"),e(),n(20,"div",5),t(21,"@po-ui/ng-components - 2.0.0"),e()(),n(22,"po-widget",9)(23,"div",4),t(24,"800 questions"),e(),n(25,"div",5),t(26,"https://devforum.po.com.br"),e()(),n(27,"po-widget",10)(28,"div",4),t(29,"AngularJS - Angular 7"),e(),n(30,"div",5),t(31,"Angular 7 most downloaded"),e()()(),n(32,"po-container",2),r(33,"po-table",11),e()(),n(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),w("ngModelChange",function(p){return b(c),x(i.email,p)||(i.email=p),h(p)}),e()()()}a&2&&(d("p-actions",i.actions)("p-breadcrumb",i.breadcrumb),s(33),d("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",!1),s(),d("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),s(3),E("ngModel",i.email))},dependencies:[F,N,I,O,L,D,te,W,q,ee,ae],styles:[".sample-container-dashboard[_ngcontent-%COMP%]{color:#9da7a9;font-family:NunitoSans;font-size:14px}"]})}return o})();var Te=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=m({type:o,selectors:[["sample-po-container-dashboard-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Container - Dashboard"),e(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-container-dashboard/sample-po-container-dashboard.component.html"),e(),n(13,"pre",7),t(14,`<po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
  <po-container class="po-lg-6">
    <po-widget class="po-lg-6 po-mb-1" p-title="Daily visitors">
      <div class="po-font-subtitle po-text-center">540</div>
      <div class="po-text-center sample-container-dashboard">www.po.com.br</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="Most viewed page">
      <div class="po-font-subtitle po-text-center">300 views</div>
      <div class="po-text-center sample-container-dashboard">https://po-ui.io</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="Website status">
      <div class="po-font-subtitle po-text-center">Online</div>
      <div class="po-text-center sample-container-dashboard">21 days</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="NPM downloads">
      <div class="po-font-subtitle po-text-center">266</div>
      <div class="po-text-center sample-container-dashboard">&#64;po-ui/ng-components - 2.0.0</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="Devforum PO questions">
      <div class="po-font-subtitle po-text-center">800 questions</div>
      <div class="po-text-center sample-container-dashboard">https://devforum.po.com.br</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="Angular versions supported">
      <div class="po-font-subtitle po-text-center">AngularJS - Angular 7</div>
      <div class="po-text-center sample-container-dashboard">Angular 7 most downloaded</div>
    </po-widget>
  </po-container>

  <po-container class="po-lg-6">
    <po-table [p-columns]="columns" [p-items]="items" p-striped="true" [p-hide-table-search]="false"> </po-table>
  </po-container>
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
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-container-dashboard/sample-po-container-dashboard.component.ts"),e(),n(19,"pre",9),t(20,`import { AfterContentChecked, Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SampleDashboardService } from './sample-po-container-dashboard.service';

import {
  PoBreadcrumb,
  PoModalAction,
  PoModalComponent,
  PoNotificationService,
  PoPageAction,
  PoTableColumn
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-container-dashboard',
  templateUrl: './sample-po-container-dashboard.component.html',
  styles: [
    \`
      .sample-container-dashboard {
        color: #9da7a9;
        font-family: NunitoSans;
        font-size: 14px;
      }
    \`
  ],
  providers: [SampleDashboardService],
  standalone: false
})
export class SamplePoContainerDashboardComponent implements AfterContentChecked, OnInit {
  @ViewChild('formShare', { static: true }) formShare: NgForm;
  @ViewChild(PoModalComponent) poModal: PoModalComponent;

  columns: Array<PoTableColumn>;
  email: string = undefined;
  isSubscribed: boolean = false;
  items: Array<object>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Share', action: this.modalOpen.bind(this), icon: 'an an-share' },
    {
      label: 'Disable notification',
      icon: 'an an-bell',
      action: this.disableNotification.bind(this),
      disabled: () => this.isSubscribed
    }
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

  ngOnInit() {
    this.columns = this.sampleDashboardService.getColumns();
    this.items = this.sampleDashboardService.getItems();
  }

  ngAfterContentChecked() {
    this.shareAction.danger = this.formShare.invalid;
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
      this.poNotification.error(\`Invalid email.\`);
    }
    this.modalClose();
  }

  private disableNotification() {
    this.isSubscribed = true;
  }
}
`),e(),n(21,"label",6),t(22,"sample-po-container-dashboard/sample-po-container-dashboard.service.ts"),e(),n(23,"pre",9),t(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SampleDashboardService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'cities', label: 'Cities that most downloaded PO' },
      { property: 'packageVersion', label: 'Package version' },
      { property: 'downloads' }
    ];
  }

  getItems() {
    return [
      { cities: 'S\xE3o Paulo', packageVersion: '3.0.0-beta.1', downloads: '2000' },
      { cities: 'Joinville', packageVersion: '2.9.1', downloads: '1000' },
      { cities: 'Rio de Janeiro', packageVersion: '3.0.0', downloads: '250' },
      { cities: 'Santa Catarina', packageVersion: '1.9.1', downloads: '100' },
      { cities: 'Curitiba', packageVersion: '2.0.0-beta.2', downloads: '1040' },
      { cities: 'Goiania', packageVersion: '1.9.1', downloads: '250' },
      { cities: 'Londrina', packageVersion: '1.9.1', downloads: '35' },
      { cities: 'Belo Horizonte', packageVersion: '1.9.1', downloads: '1100' }
    ];
  }
}
`),e()()()()(),n(25,"div",10),r(26,"sample-po-container-dashboard"),e(),r(27,"hr")),a&2&&(s(5),y("po-icon "+i.sampleCodeButtonIcon),s(),C(" ",i.sampleCodeButtonLabel,""),s(),d("ngClass",M(4,Te,i.hideSampleCodeTabs)))},dependencies:[T,v,f,S,ce],encapsulation:2})}return o})();var be=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=m({type:o,selectors:[["sample-po-container-doc"]],standalone:!1,decls:279,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/grid-system"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"]],template:function(a,i){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoContainerModule } from '@po-ui/ng-components';"),e()(),n(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente "),n(7,"code"),t(8,"po-container"),e(),t(9,"."),e()(),n(10,"h3",3),t(11,"Componente"),e(),n(12,"h4",4)(13,"code",5),t(14,"PoContainerComponent"),e()(),n(15,"div",2)(16,"p"),t(17,"O "),n(18,"code"),t(19,"po-container"),e(),t(20,` \xE9 um componente que visa facilitar o agrupamento de conte\xFAdos.
Por padr\xE3o o mesmo exibe uma borda, um efeito de sombra ao seu redor e um espa\xE7amento em sua parte interna, os quais
podem ser desabilitados. Ao remover sua borda a sombra tamb\xE9m ser\xE1 removida. Al\xE9m disso, sua altura acompanha a
quantidade do conte\xFAdo, por\xE9m pode ser fixada. Para controlar sua largura, utilize o `),n(21,"a",6),t(22,"Grid System"),e(),t(23,`,
assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),e(),n(24,"h4",7),t(25,"Tokens customiz\xE1veis"),e(),n(26,"p"),t(27,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),n(28,"blockquote")(29,"p"),t(30,"Para maiores informa\xE7\xF5es, acesse o guia "),n(31,"a",8),t(32,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),t(33,"."),e()(),n(34,"table")(35,"thead")(36,"tr")(37,"th"),t(38,"Propriedade"),e(),n(39,"th"),t(40,"Descri\xE7\xE3o"),e(),n(41,"th"),t(42,"Valor Padr\xE3o"),e()()(),n(43,"tbody")(44,"tr")(45,"td"),t(46,"*"),n(47,"em"),t(48,"Default Values - CONTENT *"),e()(),r(49,"td")(50,"td"),e(),n(51,"tr")(52,"td")(53,"code"),t(54,"--padding"),e(),t(55," \xA0"),e(),n(56,"td"),t(57,"Preenchimento"),e(),n(58,"td")(59,"code"),t(60,"var(--spacing-sm)"),e()()(),n(61,"tr")(62,"td")(63,"code"),t(64,"--border-radius"),e(),t(65," \xA0"),e(),n(66,"td"),t(67,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),n(68,"td")(69,"code"),t(70,"var(--border-radius-md)"),e()()(),n(71,"tr")(72,"td")(73,"code"),t(74,"--border-width"),e(),t(75," \xA0"),e(),n(76,"td"),t(77,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),e(),n(78,"td")(79,"code"),t(80,"var(--border-width-sm)"),e()()(),n(81,"tr")(82,"td")(83,"code"),t(84,"--border-color"),e(),t(85," \xA0"),e(),n(86,"td"),t(87,"Cor da borda"),e(),n(88,"td")(89,"code"),t(90,"var(--color-neutral-light-20)"),e()()(),n(91,"tr")(92,"td")(93,"code"),t(94,"--background"),e(),t(95," \xA0"),e(),n(96,"td"),t(97,"Cor de background"),e(),n(98,"td")(99,"code"),t(100,"var(--color-neutral-light-00)"),e()()(),n(101,"tr")(102,"td"),t(103,"*"),n(104,"em"),t(105,"Default Values - TITLE *"),e()(),r(106,"td")(107,"td"),e(),n(108,"tr")(109,"td")(110,"code"),t(111,"--font-family"),e(),t(112," \xA0"),e(),n(113,"td"),t(114,"Font aplicado ao titulo"),e(),n(115,"td")(116,"code"),t(117,"var(--font-family-theme)"),e()()(),n(118,"tr")(119,"td")(120,"code"),t(121,"--line-weight"),e(),t(122," \xA0"),e(),n(123,"td"),t(124,"Espessura da Fonte a ser aplicada do titulo"),e(),n(125,"td")(126,"code"),t(127,"var(--font-weight-semibold)"),e()()(),n(128,"tr")(129,"td")(130,"code"),t(131,"--line-height"),e(),t(132," \xA0"),e(),n(133,"td"),t(134,"tamanho da linha do titulo"),e(),n(135,"td")(136,"code"),t(137,"var(--line-height-md)"),e()()(),n(138,"tr")(139,"td")(140,"code"),t(141,"--text-color"),e(),t(142," \xA0"),e(),n(143,"td"),t(144,"Cor do Texto do titulo"),e(),n(145,"td")(146,"code"),t(147,"var(--color-neutral-dark-90)"),e()()(),n(148,"tr")(149,"td")(150,"code"),t(151,"--font-size"),e(),t(152," \xA0"),e(),n(153,"td"),t(154,"Tamanho da fonte do titulo"),e(),n(155,"td")(156,"code"),t(157,"1.125rem"),e()()(),n(158,"tr")(159,"td")(160,"code"),t(161,"--letter-spacing"),e(),t(162," \xA0"),e(),n(163,"td"),t(164,"distancia entre letras do titulo"),e(),n(165,"td")(166,"code"),t(167,"0.017rem"),e()()(),n(168,"tr")(169,"td")(170,"code"),t(171,"--margin"),e(),t(172," \xA0"),e(),n(173,"td"),t(174,"Margin entre o titulo e o conteudo"),e(),n(175,"td")(176,"code"),t(177,"0 0 var(--spacing-xs)"),e()()()()()(),n(178,"div",9)(179,"h4",10),t(180,"Seletor"),e(),n(181,"pre",11),t(182,`<po-container
    p-height="number"
    p-no-border="boolean"
    p-no-padding="boolean"
    p-title="string" >
</po-container>
`),e()(),n(183,"h4",12),t(184,"Propriedades"),e(),n(185,"table",13)(186,"tr",14)(187,"th",15),t(188,"Nome"),e(),n(189,"th",15),t(190,"Tipo"),e(),n(191,"th",15),t(192,"Padr\xE3o"),e(),n(193,"th",15),t(194,"Descri\xE7\xE3o"),e()(),n(195,"tr",16)(196,"td",17)(197,"div",18)(198,"span",19),t(199," p-height"),r(200,"br"),e()()(),n(201,"td",20)(202,"code",21),t(203,"number"),e()(),n(204,"td",22),t(205,"-"),e(),n(206,"td",23)(207,"em")(208,"strong"),t(209,"(opcional)"),e()(),n(210,"p"),t(211,"Define a altura do "),n(212,"code"),t(213,"po-container"),e(),t(214,"."),e(),n(215,"blockquote")(216,"p"),t(217,"Caso n\xE3o seja definido um valor, a altura se ajustar\xE1 de acordo com o conte\xFAdo."),e()()()(),n(218,"tr",16)(219,"td",17)(220,"div",18)(221,"span",19),t(222," p-no-border"),r(223,"br"),e()()(),n(224,"td",20)(225,"code",24),t(226,"boolean"),e()(),n(227,"td",22)(228,"p")(229,"code"),t(230,"false"),e()()(),n(231,"td",23)(232,"em")(233,"strong"),t(234,"(opcional)"),e()(),n(235,"p"),t(236,"Desabilita a borda e a sombra em torno do "),n(237,"code"),t(238,"po-container"),e(),t(239,"."),e()()(),n(240,"tr",16)(241,"td",17)(242,"div",18)(243,"span",19),t(244," p-no-padding"),r(245,"br"),e()()(),n(246,"td",20)(247,"code",24),t(248,"boolean"),e()(),n(249,"td",22)(250,"p")(251,"code"),t(252,"false"),e()()(),n(253,"td",23)(254,"em")(255,"strong"),t(256,"(opcional)"),e()(),n(257,"p"),t(258,"Desabilita o espa\xE7amento interno do "),n(259,"code"),t(260,"po-container"),e(),t(261,"."),e()()(),n(262,"tr",16)(263,"td",17)(264,"div",18)(265,"span",19),t(266," p-title"),r(267,"br"),e()()(),n(268,"td",20)(269,"code",25),t(270,"string"),e()(),n(271,"td",22),t(272,"-"),e(),n(273,"td",23)(274,"em")(275,"strong"),t(276,"(opcional)"),e()(),n(277,"p"),t(278,"T\xEDtulo do Container."),e()()()()())},dependencies:[v],encapsulation:2})}return o})();var he=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(P(K),P(X))};static \u0275cmp=m({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Container",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,i){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),r(3,"sample-po-container-doc"),e(),n(4,"po-tab",3),r(5,"sample-po-container-basic-view")(6,"sample-po-container-labs-view")(7,"sample-po-container-dashboard-view"),e()()()),a&2&&(d("p-actions",i.actions),s(2),d("p-active",i.activeTab.includes("doc")),s(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[q,f,S,pe,me,ue,be],encapsulation:2})}return o})();var _e=[{path:"",component:he}],ge=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=A({type:o});static \u0275inj=V({imports:[G.forChild(_e),G]})}return o})();var nt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=A({type:o});static \u0275inj=V({imports:[re,ge]})}return o})();export{nt as DocPoContainerModule};
