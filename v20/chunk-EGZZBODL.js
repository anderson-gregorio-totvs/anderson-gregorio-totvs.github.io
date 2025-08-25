import{o as y,p as pe}from"./chunk-5IWYWWNW.js";import{Ea as de,Fb as M,Ja as me,O as ae,aa as re,kb as se,qa as le,ra as B,wb as C,xb as A,y as V}from"./chunk-G5FNTBUK.js";import{$a as P,Ab as Y,Db as H,Dc as Z,Ec as $,Fc as ee,Ga as j,Gc as te,Ha as O,Hc as ne,Ia as p,Ja as n,Ka as e,La as o,O as I,Pa as z,Qa as S,Ra as R,U as c,V as u,Va as G,Vc as ie,Wa as Q,Xa as J,Xc as oe,Zc as U,a as L,ab as t,b as F,cb as T,eb as b,fb as g,gb as x,ka as m,lb as N,mb as _,pa as v,pb as K,ra as h,sa as D,wa as q,xb as X}from"./chunk-VPXBL5U4.js";var ce=(()=>{class a{poNotification;headerBrand={title:"Minha empresa",logo:"../../../assets/po-logos/po_color.png",action:this.myAction.bind(this,"Logo a\xE7\xE3o")};constructor(l){this.poNotification=l}myAction(l){this.poNotification.success(`Action clicked: ${l}`)}static \u0275fac=function(r){return new(r||a)(v(B))};static \u0275cmp=h({type:a,selectors:[["sample-po-header-basic"]],standalone:!1,decls:1,vars:2,consts:[[3,"p-brand","p-side-menu-only-action"]],template:function(r,i){r&1&&o(0,"po-header",0),r&2&&p("p-brand",i.headerBrand)("p-side-menu-only-action",!0)},dependencies:[M],styles:["po-header[_ngcontent-%COMP%]{--nav-position: flex}"]})}return a})();var Ae=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-header-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Header Basic"),e(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-header-basic/sample-po-header-basic.component.html"),e(),n(13,"pre",7),t(14,`<po-header [p-brand]="headerBrand" [p-side-menu-only-action]="true"></po-header>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-header-basic/sample-po-header-basic.component.ts"),e(),n(19,"pre",9),t(20,`import { Component } from '@angular/core';

import { PoHeaderBrand, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-basic',
  templateUrl: './sample-po-header-basic.component.html',
  standalone: false,
  styles: \`
    /* alterado apenas para demonstra\xE7\xE3o no portal*/
    po-header {
      --nav-position: flex;
    }
  \`
})
export class SamplePoHeaderBasicComponent {
  headerBrand: PoHeaderBrand = {
    title: 'Minha empresa',
    logo: '../../../assets/po-logos/po_color.png',
    action: this.myAction.bind(this, 'Logo a\xE7\xE3o')
  };

  constructor(private poNotification: PoNotificationService) {}

  myAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),e()()()()(),n(21,"div",10),o(22,"sample-po-header-basic"),e(),o(23,"hr")),r&2&&(m(5),P("po-icon "+i.sampleCodeButtonIcon),m(),T(" ",i.sampleCodeButtonLabel),m(),p("ngClass",_(4,Ae,i.hideSampleCodeTabs)))},dependencies:[H,y,C,A,ce],encapsulation:2})}return a})();var we=()=>({label:"Positive",value:"positive"}),Pe=()=>({label:"Negative",value:"negative"}),Te=()=>({label:"Warning",value:"warning"}),_e=()=>({label:"Disabled",value:"disabled"}),He=(a,w,l,r)=>[a,w,l,r],he=(()=>{class a{poNotification;headerBrandTitle="";headerBrandLogo="";headerBrandSmallLogo="";headerBrand={};menuActionLabel="";menuActionEvent="";menuActions=[];actionNewTool={tooltip:"",icon:"",badge:null,action:null,label:""};actionNewToolEvent=!1;actionTools=[];newActionUser={avatar:"",customerBrand:"",status:"positive"};actionUser={avatar:"",customerBrand:"",status:"positive"};constructor(l){this.poNotification=l}addBrand(){this.headerBrand={logo:this.headerBrandLogo,title:this.headerBrandTitle,smallLogo:this.headerBrandSmallLogo},this.headerBrandTitle="",this.headerBrandLogo="",this.headerBrandSmallLogo=""}addAction(){this.menuActions=[...this.menuActions,{label:this.menuActionLabel,action:this.menuActionEvent?this.showAction.bind(this,this.menuActionEvent):null}],this.menuActionLabel="",this.menuActionEvent=""}addTool(l){let r=l;l.label=`${this.actionTools.length}`,this.actionNewToolEvent&&(r.action=this.showAction.bind(this,"Tool Actions!")),this.actionTools=[...this.actionTools,l],this.actionNewTool={}}addUser(){this.actionUser=L({},this.newActionUser),this.newActionUser={avatar:"",customerBrand:"",status:"positive"}}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}reset(){this.headerBrand={},this.menuActions=[],this.actionNewTool={},this.actionTools=[],this.actionUser={avatar:"",customerBrand:"",status:"positive"},this.newActionUser={avatar:"",customerBrand:"",status:"positive"}}static \u0275fac=function(r){return new(r||a)(v(B))};static \u0275cmp=h({type:a,selectors:[["sample-po-header-labs"]],standalone:!1,decls:35,vars:30,consts:[["formAction","ngForm"],[3,"p-side-menu-only-action","p-brand","p-menu-items","p-actions-tools","p-header-user"],[1,"po-row","po-mt-4"],["p-clean","","p-label","T\xEDtulo da marca",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Logo da marca",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Logo da marca - small",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","po-mt-1"],["p-label","Add Brand",1,"po-lg-6","po-md-6",3,"p-click"],[1,"po-row","po-mt-2"],[1,"po-lg-12","po-mb-2"],["p-clean","","p-label","Action",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","label",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Action",1,"po-md-3",3,"p-click","p-disabled"],["name","icon","p-clean","","p-label","Icon",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","tooltip","p-clean","","p-label","Tooltip",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","badge","p-clean","","p-label","Badge",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","switch","name","action","p-label","Action",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add settings",1,"po-md-3",3,"p-click","p-disabled"],["name","brand","p-clean","","p-label","Logo Brand",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","avatar","p-clean","","p-label","Avatar",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","radioGroupBasic","p-label","Status",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Reset",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let s=z();o(0,"po-header",1),n(1,"div",2)(2,"po-input",3),x("ngModelChange",function(d){return c(s),g(i.headerBrandTitle,d)||(i.headerBrandTitle=d),u(d)}),e(),n(3,"po-input",4),x("ngModelChange",function(d){return c(s),g(i.headerBrandLogo,d)||(i.headerBrandLogo=d),u(d)}),e(),n(4,"po-input",5),x("ngModelChange",function(d){return c(s),g(i.headerBrandSmallLogo,d)||(i.headerBrandSmallLogo=d),u(d)}),e(),n(5,"div",6)(6,"po-button",7),S("p-click",function(){return c(s),u(i.addBrand())}),e()()(),o(7,"hr"),n(8,"div",8)(9,"h3",9),t(10,"A\xE7\xF5es dos itens de menu"),e(),n(11,"po-input",10),x("ngModelChange",function(d){return c(s),g(i.menuActionLabel,d)||(i.menuActionLabel=d),u(d)}),e(),n(12,"po-input",11),x("ngModelChange",function(d){return c(s),g(i.menuActionEvent,d)||(i.menuActionEvent=d),u(d)}),e(),n(13,"po-button",12),S("p-click",function(){return c(s),u(i.addAction())}),e()(),o(14,"hr"),n(15,"h3",9),t(16,"A\xE7\xF5es das configura\xE7\xF5es"),e(),n(17,"form",8,0)(19,"po-input",13),x("ngModelChange",function(d){return c(s),g(i.actionNewTool.icon,d)||(i.actionNewTool.icon=d),u(d)}),e(),n(20,"po-input",14),x("ngModelChange",function(d){return c(s),g(i.actionNewTool.tooltip,d)||(i.actionNewTool.tooltip=d),u(d)}),e(),n(21,"po-number",15),x("ngModelChange",function(d){return c(s),g(i.actionNewTool.badge,d)||(i.actionNewTool.badge=d),u(d)}),e(),n(22,"po-switch",16),x("ngModelChange",function(d){return c(s),g(i.actionNewToolEvent,d)||(i.actionNewToolEvent=d),u(d)}),e(),n(23,"po-button",17),S("p-click",function(){return c(s),u(i.addTool(i.actionNewTool))}),e()(),o(24,"hr"),n(25,"h3",9),t(26,"A\xE7\xF5es do Usu\xE1rio"),e(),n(27,"form",8,0)(29,"po-input",18),x("ngModelChange",function(d){return c(s),g(i.newActionUser.customerBrand,d)||(i.newActionUser.customerBrand=d),u(d)}),e(),n(30,"po-input",19),x("ngModelChange",function(d){return c(s),g(i.newActionUser.avatar,d)||(i.newActionUser.avatar=d),u(d)}),e(),n(31,"po-radio-group",20),x("ngModelChange",function(d){return c(s),g(i.newActionUser.status,d)||(i.newActionUser.status=d),u(d)}),e(),n(32,"po-button",17),S("p-click",function(){return c(s),u(i.addUser())}),e(),o(33,"hr"),n(34,"po-button",21),S("p-click",function(){return c(s),u(i.reset())}),e()()}r&2&&(p("p-side-menu-only-action",!0)("p-brand",i.headerBrand)("p-menu-items",i.menuActions)("p-actions-tools",i.actionTools)("p-header-user",i.actionUser),m(2),b("ngModel",i.headerBrandTitle),m(),b("ngModel",i.headerBrandLogo),m(),b("ngModel",i.headerBrandSmallLogo),m(7),b("ngModel",i.menuActionLabel),m(),b("ngModel",i.menuActionEvent),m(),p("p-disabled",!i.menuActionLabel),m(6),b("ngModel",i.actionNewTool.icon),m(),b("ngModel",i.actionNewTool.tooltip),m(),b("ngModel",i.actionNewTool.badge),m(),b("ngModel",i.actionNewToolEvent),m(),p("p-disabled",i.actionTools.length>2),m(6),b("ngModel",i.newActionUser.customerBrand),m(),b("ngModel",i.newActionUser.avatar),m(),b("ngModel",i.newActionUser.status),p("p-options",K(25,He,N(21,we),N(22,Pe),N(23,Te),N(24,_e))),m(),p("p-disabled",!i.newActionUser.avatar||i.newActionUser.customerBrand))},dependencies:[ne,Z,$,te,ee,V,ae,de,me,le,M],styles:["po-header[_ngcontent-%COMP%]{--nav-position: flex}"]})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-header-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Header Labs"),e(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-header-labs/sample-po-header-labs.component.html"),e(),n(13,"pre",7),t(14,`<po-header
  [p-side-menu-only-action]="true"
  [p-brand]="headerBrand"
  [p-menu-items]="menuActions"
  [p-actions-tools]="actionTools"
  [p-header-user]="actionUser"
></po-header>

<div class="po-row po-mt-4">
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandTitle" p-clean p-label="T\xEDtulo da marca"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandLogo" p-clean p-label="Logo da marca"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandSmallLogo" p-clean p-label="Logo da marca - small">
  </po-input>
  <div class="po-row po-mt-1">
    <po-button class="po-lg-6 po-md-6" p-label="Add Brand" (p-click)="addBrand()"></po-button>
  </div>
</div>
<hr />
<div class="po-row po-mt-2">
  <h3 class="po-lg-12 po-mb-2">A\xE7\xF5es dos itens de menu</h3>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="menuActionLabel" p-clean p-label="Action"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="menuActionEvent" p-clean p-label="label"> </po-input>
  <po-button [p-disabled]="!menuActionLabel" class="po-md-3" p-label="Add Action" (p-click)="addAction()"></po-button>
</div>
<hr />
<h3 class="po-lg-12 po-mb-2">A\xE7\xF5es das configura\xE7\xF5es</h3>
<form #formAction="ngForm" class="po-row po-mt-2">
  <po-input class="po-lg-6 po-md-6" name="icon" [(ngModel)]="actionNewTool.icon" p-clean p-label="Icon"> </po-input>
  <po-input class="po-lg-6 po-md-6" name="tooltip" [(ngModel)]="actionNewTool.tooltip" p-clean p-label="Tooltip">
  </po-input>
  <po-number class="po-lg-6 po-md-6" name="badge" [(ngModel)]="actionNewTool.badge" p-clean p-label="Badge">
  </po-number>
  <po-switch class="po-lg-6 po-md-6" name="switch" [(ngModel)]="actionNewToolEvent" name="action" p-label="Action">
  </po-switch>
  <po-button
    [p-disabled]="actionTools.length > 2"
    class="po-md-3"
    p-label="Add settings"
    (p-click)="addTool(actionNewTool)"
  ></po-button>
</form>
<hr />
<h3 class="po-lg-12 po-mb-2">A\xE7\xF5es do Usu\xE1rio</h3>
<form #formAction="ngForm" class="po-row po-mt-2">
  <po-input class="po-lg-6 po-md-6" name="brand" [(ngModel)]="newActionUser.customerBrand" p-clean p-label="Logo Brand">
  </po-input>
  <po-input class="po-lg-6 po-md-6" name="avatar" [(ngModel)]="newActionUser.avatar" p-clean p-label="Avatar">
  </po-input>

  <po-radio-group
    name="radioGroupBasic"
    class="po-lg-12"
    p-label="Status"
    [(ngModel)]="newActionUser.status"
    [p-options]="[
      { label: 'Positive', value: 'positive' },
      { label: 'Negative', value: 'negative' },
      { label: 'Warning', value: 'warning' },
      { label: 'Disabled', value: 'disabled' }
    ]"
  >
  </po-radio-group>
  <po-button
    [p-disabled]="!newActionUser.avatar || newActionUser.customerBrand"
    class="po-md-3"
    p-label="Add settings"
    (p-click)="addUser()"
  ></po-button>
  <hr />
  <po-button class="po-md-3" p-label="Reset" (p-click)="reset()"></po-button>
</form>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-header-labs/sample-po-header-labs.component.ts"),e(),n(19,"pre",9),t(20,`import { Component } from '@angular/core';

import {
  PoHeaderActions,
  PoHeaderActionTool,
  PoHeaderBrand,
  PoHeaderUser,
  PoNotificationService
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-labs',
  templateUrl: './sample-po-header-labs.component.html',
  standalone: false,
  styles: \`
    /* alterado apenas para demonstra\xE7\xE3o no portal*/
    po-header {
      --nav-position: flex;
    }
  \`
})
export class SamplePoHeaderLabsComponent {
  headerBrandTitle = '';
  headerBrandLogo = '';
  headerBrandSmallLogo = '';
  headerBrand: PoHeaderBrand = {};

  menuActionLabel = '';
  menuActionEvent = '';
  menuActions: Array<PoHeaderActions> = [];

  actionNewTool: PoHeaderActionTool = {
    tooltip: '',
    icon: '',
    badge: null,
    action: null,
    label: ''
  };
  actionNewToolEvent = false;
  actionTools: Array<PoHeaderActionTool> = [];

  newActionUser: any = {
    avatar: '',
    customerBrand: '',
    status: 'positive'
  };

  actionUser: PoHeaderUser = {
    avatar: '',
    customerBrand: '',
    status: 'positive'
  };

  constructor(private poNotification: PoNotificationService) {}

  addBrand() {
    this.headerBrand = {
      logo: this.headerBrandLogo,
      title: this.headerBrandTitle,
      smallLogo: this.headerBrandSmallLogo
    };
    this.headerBrandTitle = '';
    this.headerBrandLogo = '';
    this.headerBrandSmallLogo = '';
  }

  addAction() {
    this.menuActions = [
      ...this.menuActions,
      {
        label: this.menuActionLabel,
        action: this.menuActionEvent ? this.showAction.bind(this, this.menuActionEvent) : null
      }
    ];
    this.menuActionLabel = '';
    this.menuActionEvent = '';
  }

  addTool(action: PoHeaderActionTool) {
    const newAction = action;
    action.label = \`\${this.actionTools.length}\`;
    if (this.actionNewToolEvent) {
      newAction.action = this.showAction.bind(this, 'Tool Actions!');
    }
    this.actionTools = [...this.actionTools, action];
    this.actionNewTool = {};
  }

  addUser() {
    this.actionUser = { ...this.newActionUser };
    this.newActionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }

  reset() {
    this.headerBrand = {};
    this.menuActions = [];
    this.actionNewTool = {};
    this.actionTools = [];
    this.actionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
    this.newActionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
  }
}
`),e()()()()(),n(21,"div",10),o(22,"sample-po-header-labs"),e(),o(23,"hr")),r&2&&(m(5),P("po-icon "+i.sampleCodeButtonIcon),m(),T(" ",i.sampleCodeButtonLabel),m(),p("ngClass",_(4,Me,i.hideSampleCodeTabs)))},dependencies:[H,y,C,A,he],encapsulation:2})}return a})();var Le=["meuTemplate"],Ne=(a,w)=>w.icon;function Ie(a,w){if(a&1&&o(0,"po-button",4),a&2){let l=w.$implicit;p("p-icon",l.icon)}}function De(a,w){if(a&1&&(n(0,"div",2)(1,"p"),t(2,"Meus aplicativos"),e(),o(3,"br"),n(4,"div",3),j(5,Ie,1,1,"po-button",4,Ne),e()()),a&2){let l=R();m(5),O(l.systemApps)}}var be=(()=>{class a{poNotification;cd;meuTemplate;listItem=[{label:"A\xE7\xE3o 1",action:this.myAction.bind(this,"A\xE7\xE3o 1")},{label:"A\xE7\xE3o 2",action:this.myAction.bind(this,"A\xE7\xE3o 2")},{label:"A\xE7\xE3o 3",action:this.myAction.bind(this,"A\xE7\xE3o 3")}];headerBrand={title:"PO UI",logo:"../../../assets/po-logos/po_color.png",action:this.myAction.bind(this,"Logo a\xE7\xE3o")};menuItems=[{label:"Item 1",action:this.myAction.bind(this,"Item 1")},{label:"Item 2",action:this.myAction.bind(this,"Item 2")},{label:"Item 3",action:this.myAction.bind(this,"Item 3")}];actionTools=[{label:"Configura\xE7\xF5es",icon:"an an-gear-six",tooltip:"Configura\xE7\xF5es do sistema",action:this.myAction.bind(this,"Configura\xE7\xE3o")},{label:"Aplicativos",icon:"an an-dots-nine",tooltip:"Aplicativos do sistema",popover:{content:this.meuTemplate}},{label:"Notifica\xE7\xF5es",icon:"an an-chat-circle-dots",tooltip:"Notifica\xE7\xF5es do usu\xE1rio",badge:5,items:this.listItem}];headerUser={avatar:"../../../assets/graphics/avatar1.png",customerBrand:"../../../assets/po-logos/po_black.png",action:this.myAction.bind(this,"Meu Usu\xE1rio"),status:"positive"};systemApps=[{icon:"an an-reddit-logo",action:this.myAction.bind(this,"Aplicativo 1")},{icon:"an an-twitter-logo",action:this.myAction.bind(this,"Aplicativo 2")},{icon:"an an-twitch-logo",action:this.myAction.bind(this,"Aplicativo 3")},{icon:"an an-facebook-logo",action:this.myAction.bind(this,"Aplicativo 4")},{icon:"an an-meta-logo",action:this.myAction.bind(this,"Aplicativo 5")},{icon:"an an-amazon-logo",action:this.myAction.bind(this,"Aplicativo 6")}];constructor(l,r){this.poNotification=l,this.cd=r}ngAfterViewInit(){this.actionTools=this.actionTools.map(l=>l.popover?F(L({},l),{popover:F(L({},l.popover),{content:this.meuTemplate})}):l),this.cd.detectChanges()}myAction(l){this.poNotification.success({message:`Action clicked: ${l}`,orientation:re.Top})}static \u0275fac=function(r){return new(r||a)(v(B),v(Y))};static \u0275cmp=h({type:a,selectors:[["sample-po-header-apps"]],viewQuery:function(r,i){if(r&1&&G(Le,5),r&2){let s;Q(s=J())&&(i.meuTemplate=s.first)}},standalone:!1,decls:3,vars:5,consts:[["meuTemplate",""],[3,"p-brand","p-menu-items","p-actions-tools","p-header-user","p-side-menu-only-action"],[1,"custom-template"],[1,"app-wrapper"],[3,"p-icon"]],template:function(r,i){r&1&&(o(0,"po-header",1),q(1,De,7,0,"ng-template",null,0,X)),r&2&&p("p-brand",i.headerBrand)("p-menu-items",i.menuItems)("p-actions-tools",i.actionTools)("p-header-user",i.headerUser)("p-side-menu-only-action",!0)},dependencies:[V,M],styles:[".app-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;justify-items:center}.custom-template[_ngcontent-%COMP%]{padding:.5rem}.custom-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-weight:700;color:var(--color-neutral-dark-90)}po-header[_ngcontent-%COMP%]{--nav-position: flex}"]})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-header-apps-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Header Apps"),e(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-header-apps/sample-po-header-apps.component.html"),e(),n(13,"pre",7),t(14,`<po-header
  [p-brand]="headerBrand"
  [p-menu-items]="menuItems"
  [p-actions-tools]="actionTools"
  [p-header-user]="headerUser"
  [p-side-menu-only-action]="true"
></po-header>

<ng-template #meuTemplate>
  <div class="custom-template">
    <p>Meus aplicativos</p>
    <br />
    <div class="app-wrapper">
      @for (app of systemApps; track app.icon) {
        <po-button [p-icon]="app.icon"></po-button>
      }
    </div>
  </div>
</ng-template>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-header-apps/sample-po-header-apps.component.ts"),e(),n(19,"pre",9),t(20,`import { AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';

import {
  PoHeaderActions,
  PoHeaderActionTool,
  PoHeaderActionToolItem,
  PoHeaderBrand,
  PoHeaderUser,
  PoNotificationService,
  PoToasterOrientation
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-apps',
  templateUrl: './sample-po-header-apps.component.html',
  standalone: false,
  styles: \`
    .app-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      justify-items: center;
    }

    .custom-template {
      padding: 0.5rem;
    }

    .custom-template p {
      text-align: center;
      font-weight: bold;
      color: var(--color-neutral-dark-90);
    }

    /* alterado apenas para demonstra\xE7\xE3o no portal*/
    po-header {
      --nav-position: flex;
    }
  \`
})
export class SamplePoHeaderAppsComponent implements AfterViewInit {
  @ViewChild('meuTemplate') meuTemplate!: TemplateRef<any>;

  listItem: Array<PoHeaderActionToolItem> = [
    {
      label: 'A\xE7\xE3o 1',
      action: this.myAction.bind(this, 'A\xE7\xE3o 1')
    },
    { label: 'A\xE7\xE3o 2', action: this.myAction.bind(this, 'A\xE7\xE3o 2') },
    { label: 'A\xE7\xE3o 3', action: this.myAction.bind(this, 'A\xE7\xE3o 3') }
  ];

  headerBrand: PoHeaderBrand = {
    title: 'PO UI',
    logo: '../../../assets/po-logos/po_color.png',
    action: this.myAction.bind(this, 'Logo a\xE7\xE3o')
  };

  menuItems: Array<PoHeaderActions> = [
    {
      label: 'Item 1',
      action: this.myAction.bind(this, 'Item 1')
    },
    { label: 'Item 2', action: this.myAction.bind(this, 'Item 2') },
    { label: 'Item 3', action: this.myAction.bind(this, 'Item 3') }
  ];

  actionTools: Array<PoHeaderActionTool> = [
    {
      label: 'Configura\xE7\xF5es',
      icon: 'an an-gear-six',
      tooltip: 'Configura\xE7\xF5es do sistema',
      action: this.myAction.bind(this, 'Configura\xE7\xE3o')
    },
    {
      label: 'Aplicativos',
      icon: 'an an-dots-nine',
      tooltip: 'Aplicativos do sistema',
      popover: {
        content: this.meuTemplate
      }
    },
    {
      label: 'Notifica\xE7\xF5es',
      icon: 'an an-chat-circle-dots',
      tooltip: 'Notifica\xE7\xF5es do usu\xE1rio',
      badge: 5,
      items: this.listItem
    }
  ];

  headerUser: PoHeaderUser = {
    avatar: '../../../assets/graphics/avatar1.png',
    customerBrand: '../../../assets/po-logos/po_black.png',
    action: this.myAction.bind(this, 'Meu Usu\xE1rio'),
    status: 'positive'
  };

  systemApps = [
    {
      icon: 'an an-reddit-logo',
      action: this.myAction.bind(this, 'Aplicativo 1')
    },
    {
      icon: 'an an-twitter-logo',
      action: this.myAction.bind(this, 'Aplicativo 2')
    },
    {
      icon: 'an an-twitch-logo',
      action: this.myAction.bind(this, 'Aplicativo 3')
    },
    {
      icon: 'an an-facebook-logo',
      action: this.myAction.bind(this, 'Aplicativo 4')
    },
    {
      icon: 'an an-meta-logo',
      action: this.myAction.bind(this, 'Aplicativo 5')
    },
    {
      icon: 'an an-amazon-logo',
      action: this.myAction.bind(this, 'Aplicativo 6')
    }
  ];

  constructor(
    private poNotification: PoNotificationService,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.actionTools = this.actionTools.map(action => {
      if (action.popover) {
        return {
          ...action,
          popover: {
            ...action.popover,
            content: this.meuTemplate
          }
        };
      }
      return action;
    });

    this.cd.detectChanges();
  }

  myAction(action: string): any {
    this.poNotification.success({ message: \`Action clicked: \${action}\`, orientation: PoToasterOrientation.Top });
  }
}
`),e()()()()(),n(21,"div",10),o(22,"sample-po-header-apps"),e(),o(23,"hr")),r&2&&(m(5),P("po-icon "+i.sampleCodeButtonIcon),m(),T(" ",i.sampleCodeButtonLabel),m(),p("ngClass",_(4,Fe,i.hideSampleCodeTabs)))},dependencies:[H,y,C,A,be],encapsulation:2})}return a})();var xe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-header-doc"]],standalone:!1,decls:1290,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoHeaderActionTool>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHeaderBrand"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<any>"],["pan","",1,"docs-api-property-type","PoHeaderUser"],["pan","",1,"docs-api-property-type","PoHeaderLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMenuItem>"],["pan","",1,"docs-api-property-type","Array<PoHeaderActions>"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoHeaderActionToolItem>"],["pan","",1,"docs-api-property-type","PoHeaderActionPopoverAction"],["pan","",1,"docs-api-property-type","'positive'"],["pan","",1,"docs-api-property-type","'negative'"],["pan","",1,"docs-api-property-type","'warning'"],["pan","",1,"docs-api-property-type","'disabled'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoHeaderModule } from '@po-ui/ng-components';"),e()(),n(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente "),n(7,"code"),t(8,"po-header"),e(),t(9,"."),e()(),n(10,"h3",3),t(11,"Componente"),e(),n(12,"h4",4)(13,"code",5),t(14,"PoHeaderComponent"),e()(),n(15,"div",2)(16,"p"),t(17,"O componente "),n(18,"code"),t(19,"po-header"),e(),t(20," \xE9 um cabe\xE7alho fixo que permite apresentar itens com a\xE7\xF5es, divididos em "),n(21,"code"),t(22,"p-brand"),e(),t(23,", "),n(24,"code"),t(25,"p-menu-items"),e(),t(26,", "),n(27,"code"),t(28,"p-actions-tools"),e(),t(29," e "),n(30,"code"),t(31,"p-header-user"),e(),t(32,"."),e(),n(33,"ul")(34,"li")(35,"code"),t(36,"p-brand"),e(),t(37,": Possibilita a inclus\xE3o de uma imagem e o titulo do header."),e(),n(38,"li")(39,"code"),t(40,"p-menu-items"),e(),t(41,": Possibilita a inclus\xE3o de uma lista de itens com a\xE7\xF5es ou links."),e(),n(42,"li")(43,"code"),t(44,"p-actions-tools"),e(),t(45,": Possibilita a inclus\xE3o de at\xE9 3 bot\xF5es com a\xE7\xF5es."),e(),n(46,"li")(47,"code"),t(48,"p-header-user"),e(),t(49,": Possibilita a inclus\xE3o de uma imagem representando a marca e avatar."),e()(),n(50,"p"),t(51,"O componente "),n(52,"code"),t(53,"po-header"),e(),t(54," pode ser usado de duas formas:"),e(),n(55,"p"),t(56,"Com "),n(57,"code"),t(58,"po-menu"),e(),t(59," definido pelo usu\xE1rio:"),e(),n(60,"pre")(61,"code"),t(62,`...
<po-header
  [p-brand]="brand"
  [p-menu-items]="items"
  [p-actions-tools]="actions"
  [p-header-user]="user"
></po-header>

<div class="po-wrapper">
  <po-menu [p-menus]="itemsMenu">
  </po-menu>

  <po-page-default>
      <router-outlet></router-outlet>
  </po-page-default>
</div>
...
`),e()(),n(63,"p"),t(64,"Passando os itens diretamente para o "),n(65,"code"),t(66,"po-header"),e(),t(67," pela propriedade "),n(68,"code"),t(69,"p-menus"),e(),t(70,":"),e(),n(71,"pre")(72,"code"),t(73,`...
<po-header
  [p-brand]="brand"
  [p-menu-items]="items"
  [p-actions-tools]="actions"
  [p-header-user]="user"
  [p-menus]="itensMenu"
></po-header>

<div class="po-wrapper">
  <po-page-default>
      <router-outlet></router-outlet>
  </po-page-default>
</div>
...
`),e()(),n(74,"h4"),t(75,"Tokens customiz\xE1veis"),e(),n(76,"p"),t(77,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),n(78,"blockquote")(79,"p"),t(80,"Para maiores informa\xE7\xF5es, acesse o guia "),n(81,"a",6),t(82,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),t(83,"."),e()(),n(84,"table")(85,"thead")(86,"tr")(87,"th"),t(88,"Propriedade"),e(),n(89,"th"),t(90,"Descri\xE7\xE3o"),e(),n(91,"th"),t(92,"Valor Padr\xE3o"),e()()(),n(93,"tbody")(94,"tr")(95,"td")(96,"code"),t(97,"--font-family"),e()(),n(98,"td"),t(99,"Fam\xEDlia tipogr\xE1fica usada"),e(),n(100,"td")(101,"code"),t(102,"var(--font-family-theme)"),e()()(),n(103,"tr")(104,"td")(105,"code"),t(106,"--font-weight"),e()(),n(107,"td"),t(108,"Peso da fonte"),e(),n(109,"td")(110,"code"),t(111,"var(--font-weight-bold)"),e()()(),n(112,"tr")(113,"td")(114,"code"),t(115,"--text-color"),e()(),n(116,"td"),t(117,"Cor do texto"),e(),n(118,"td")(119,"code"),t(120,"var(--color-neutral-dark-70)"),e()()(),n(121,"tr")(122,"td")(123,"code"),t(124,"--outline-color-focused"),e()(),n(125,"td"),t(126,"Cor do outline dos itens de sub-menu e customer"),e(),n(127,"td")(128,"code"),t(129,"var(--color-neutral-dark-95)"),e()()(),n(130,"tr")(131,"td")(132,"code"),t(133,"--object-fit-brand"),e()(),n(134,"td"),t(135,"Valor do object-fit da imagem do logo"),e(),n(136,"td")(137,"code"),t(138,"contain"),e()()(),n(139,"tr")(140,"td")(141,"code"),t(142,"--object-fit-customer"),e()(),n(143,"td"),t(144,"Valor do object-fit da imagem do logo na se\xE7\xE3o customer"),e(),n(145,"td")(146,"code"),t(147,"contain"),e()()(),n(148,"tr")(149,"td")(150,"code"),t(151,"--object-fit-customer-user"),e()(),n(152,"td"),t(153,"Valor do object-fit da imagem do avatar"),e(),n(154,"td")(155,"code"),t(156,"cover"),e()()(),n(157,"tr")(158,"td")(159,"strong"),t(160,"Header"),e()(),o(161,"td")(162,"td"),e(),n(163,"tr")(164,"td")(165,"code"),t(166,"--background-color"),e()(),n(167,"td"),t(168,"Cor de background do header"),e(),n(169,"td")(170,"code"),t(171,"var(--color-neutral-light-05)"),e()()(),n(172,"tr")(173,"td")(174,"code"),t(175,"--border-radius-bottom-left"),e()(),n(176,"td"),t(177,"Valor do radius do lado esquerdo do header"),e(),n(178,"td")(179,"code"),t(180,"var(--border-radius-md)"),e()()(),n(181,"tr")(182,"td")(183,"code"),t(184,"--border-radius-bottom-right"),e()(),n(185,"td"),t(186,"Valor do radius do lado direito do header"),e(),n(187,"td")(188,"code"),t(189,"var(--border-radius-md)"),e()()(),n(190,"tr")(191,"td")(192,"code"),t(193,"--base shadow"),e()(),n(194,"td"),t(195,"Cor da sombra do header"),e(),n(196,"td")(197,"code"),t(198,"0 1px 8px rgba(0, 0, 0, 0.1)"),e()()(),n(199,"tr")(200,"td")(201,"strong"),t(202,"Sub-menu"),e()(),o(203,"td")(204,"td"),e(),n(205,"tr")(206,"td")(207,"code"),t(208,"--border-radius"),e()(),n(209,"td"),t(210,"Valor do radius dos itens do sub-menu"),e(),n(211,"td")(212,"code"),t(213,"var(--border-radius-md);"),e()()(),n(214,"tr")(215,"td")(216,"code"),t(217,"--text-color-submenu"),e()(),n(218,"td"),t(219,"Cor do texto dos itens do sub-menu"),e(),n(220,"td")(221,"code"),t(222,"var(--color-brand-01-base)"),e()()(),n(223,"tr")(224,"td")(225,"code"),t(226,"--icon-color"),e()(),n(227,"td"),t(228,"Cor do \xEDcone do sub-menu com itens"),e(),n(229,"td")(230,"code"),t(231,"var(--color-brand-01-base)"),e()()(),n(232,"tr")(233,"td")(234,"code"),t(235,"--border-color"),e()(),n(236,"td"),t(237,"Cor da borda"),e(),n(238,"td")(239,"code"),t(240,"var(--color-transparent)"),e()()(),n(241,"tr")(242,"td")(243,"code"),t(244,"--shadow"),e()(),n(245,"td"),t(246,"Cont\xE9m o valor da sombra do elemento"),e(),n(247,"td")(248,"code"),t(249,"var(--shadow-none)"),e()()(),n(250,"tr")(251,"td")(252,"strong"),t(253,"Sub-menu - Hover"),e()(),o(254,"td")(255,"td"),e(),n(256,"tr")(257,"td")(258,"code"),t(259,"--background-hover"),e()(),n(260,"td"),t(261,"Cor de background dos itens do sub-menu no estado hover"),e(),n(262,"td")(263,"code"),t(264,"var(--color-brand-01-lighter)"),e()()(),n(265,"tr")(266,"td")(267,"code"),t(268,"--icon-color-hover"),e()(),n(269,"td"),t(270,"Cor do \xEDcone dos itens de sub-menu no estado hover"),e(),n(271,"td")(272,"code"),t(273,"var(--color-brand-01-darkest)"),e()()(),n(274,"tr")(275,"td")(276,"code"),t(277,"--text-color-hover"),e()(),n(278,"td"),t(279,"Cor do texo dos itens de sub-menu no estado hover"),e(),n(280,"td")(281,"code"),t(282,"var(--color-brand-01-darkest)"),e()()(),n(283,"tr")(284,"td")(285,"strong"),t(286,"Sub-menu - pressed"),e()(),o(287,"td")(288,"td"),e(),n(289,"tr")(290,"td")(291,"code"),t(292,"--background-pressed"),e()(),n(293,"td"),t(294,"Cor de background dos itens do sub-menu no estado pressed"),e(),n(295,"td")(296,"code"),t(297,"var(--color-brand-01-light)"),e()()(),n(298,"tr")(299,"td")(300,"code"),t(301,"--icon-color-pressed"),e()(),n(302,"td"),t(303,"Cor do \xEDcone dos itens de sub-menu no estado pressed"),e(),n(304,"td")(305,"code"),t(306,"var(--color-brand-01-darkest)"),e()()(),n(307,"tr")(308,"td")(309,"code"),t(310,"--text-color-pressed"),e()(),n(311,"td"),t(312,"Cor do texo dos itens de sub-menu no estado pressed"),e(),n(313,"td")(314,"code"),t(315,"var(--color-brand-01-darkest)"),e()()(),n(316,"tr")(317,"td")(318,"strong"),t(319,"Sub-menu - selected"),e()(),o(320,"td")(321,"td"),e(),n(322,"tr")(323,"td")(324,"code"),t(325,"--background-selected"),e()(),n(326,"td"),t(327,"Cor de background dos itens do sub-menu no estado selected"),e(),n(328,"td")(329,"code"),t(330,"var(--color-brand-01-light)"),e()()(),n(331,"tr")(332,"td")(333,"code"),t(334,"--icon-color-selected"),e()(),n(335,"td"),t(336,"Cor do \xEDcone dos itens de sub-menu no estado selected"),e(),n(337,"td")(338,"code"),t(339,"var(--color-neutral-dark-95)"),e()()(),n(340,"tr")(341,"td")(342,"code"),t(343,"--text-color-selected"),e()(),n(344,"td"),t(345,"Cor do texo dos itens de sub-menu no estado selected"),e(),n(346,"td")(347,"code"),t(348,"var(--color-brand-01-darkest)"),e()()(),n(349,"tr")(350,"td")(351,"strong"),t(352,"Customer"),e()(),o(353,"td")(354,"td"),e(),n(355,"tr")(356,"td")(357,"code"),t(358,"--background-color-customer"),e()(),n(359,"td"),t(360,"Cor do background da se\xE7\xE3o customer"),e(),n(361,"td")(362,"code"),t(363,"var(--color-neutral-light-00)"),e()()(),n(364,"tr")(365,"td")(366,"code"),t(367,"--border-color"),e()(),n(368,"td"),t(369,"Cor da borda da se\xE7\xE3o customer"),e(),n(370,"td")(371,"code"),t(372,"var(--color-neutral-light-10)"),e()()(),n(373,"tr")(374,"td")(375,"code"),t(376,"--border-style"),e()(),n(377,"td"),t(378,"Estilo da borda da se\xE7\xE3o customer"),e(),n(379,"td")(380,"code"),t(381,"solid"),e()()(),n(382,"tr")(383,"td")(384,"code"),t(385,"--border-width"),e()(),n(386,"td"),t(387,"Largura da borda da se\xE7\xE3o customer"),e(),n(388,"td")(389,"code"),t(390,"var(--border-width-sm)"),e()()(),n(391,"tr")(392,"td")(393,"strong"),t(394,"Customer - hover"),e()(),o(395,"td")(396,"td"),e(),n(397,"tr")(398,"td")(399,"code"),t(400,"--background-color-customer-hover"),e()(),n(401,"td"),t(402,"Cor do background da se\xE7\xE3o customer no estado hover"),e(),n(403,"td")(404,"code"),t(405,"var(--color-brand-01-lighter)"),e()()(),n(406,"tr")(407,"td")(408,"code"),t(409,"--background-color-customer-hover"),e()(),n(410,"td"),t(411,"Cor do background da se\xE7\xE3o customer no estado hover"),e(),n(412,"td")(413,"code"),t(414,"var(--color-brand-01-lighter)"),e()()(),n(415,"tr")(416,"td")(417,"strong"),t(418,"Customer - pressed"),e()(),o(419,"td")(420,"td"),e(),n(421,"tr")(422,"td")(423,"code"),t(424,"--background-color-customer-pressed"),e()(),n(425,"td"),t(426,"Cor do background da se\xE7\xE3o customer no estado pressed"),e(),n(427,"td")(428,"code"),t(429,"var(--color-brand-01-light)"),e()()()()()(),n(430,"div",7)(431,"h4",8),t(432,"Seletor"),e(),n(433,"pre",9),t(434,`<po-header
    p-actions-tools="Array<PoHeaderActionTool>"
    p-amount-more="number"
    p-brand="PoHeaderBrand | string"
    (p-colapsed-menu)="EventEmitter"
    p-filter-menu="boolean"
    p-header-template="TemplateRef<any>"
    p-header-user="PoHeaderUser"
    p-hide-button-menu="boolean"
    p-literals="PoHeaderLiterals"
    p-menus="Array<PoMenuItem>"
    p-menu-items="Array<PoHeaderActions>" >
</po-header>
`),e()(),n(435,"h4",10),t(436,"Propriedades"),e(),n(437,"table",11)(438,"tr",12)(439,"th",13),t(440,"Nome"),e(),n(441,"th",13),t(442,"Tipo"),e(),n(443,"th",13),t(444,"Padr\xE3o"),e(),n(445,"th",13),t(446,"Descri\xE7\xE3o"),e()(),n(447,"tr",14)(448,"td",15)(449,"div",16)(450,"span",17),t(451," p-actions-tools"),o(452,"br"),e()()(),n(453,"td",18)(454,"code",19),t(455,"Array<PoHeaderActionTool>"),e()(),n(456,"td",20),t(457,"-"),e(),n(458,"td",21)(459,"em")(460,"strong"),t(461,"(opcional)"),e()(),n(462,"p"),t(463,"Propriedade para configurar a se\xE7\xE3o de tools do "),n(464,"code"),t(465,"po-header"),e()(),n(466,"blockquote")(467,"p"),t(468,"M\xE1ximo de 3 itens, o componente ir\xE1 ignorar os itens caso seja mandado mais itens que o suportado."),e()()()(),n(469,"tr",14)(470,"td",15)(471,"div",16)(472,"span",17),t(473," p-amount-more"),o(474,"br"),e()()(),n(475,"td",18)(476,"code",22),t(477,"number"),e()(),n(478,"td",20),t(479,"-"),e(),n(480,"td",21)(481,"em")(482,"strong"),t(483,"(opcional)"),e()(),n(484,"p"),t(485,`N\xFAmero de itens dentro do bot\xE3o de overflow. Caso a largura do header n\xE3o suportar a quantidade de itens passadas, um bot\xE3o com itens ser\xE1 criado.
Essa propriedade possibilita a escolha de quantos itens estar\xE3o dentro do bot\xE3o de overflow.`),e(),n(486,"blockquote")(487,"p"),t(488,"Ao utilizar essa propriedade o "),n(489,"code"),t(490,"po-header"),e(),t(491," n\xE3o ir\xE1 realizar o calculo automat\xEDco de itens."),e()()()(),n(492,"tr",14)(493,"td",15)(494,"div",16)(495,"span",17),t(496," p-brand"),o(497,"br"),e()()(),n(498,"td",18)(499,"code",23),t(500,"PoHeaderBrand "),e(),n(501,"code",24),t(502," string"),e()(),n(503,"td",20),t(504,"-"),e(),n(505,"td",21)(506,"em")(507,"strong"),t(508,"(opcional)"),e()(),n(509,"p"),t(510,"Propriedade para configurar a se\xE7\xE3o de brand do "),n(511,"code"),t(512,"po-header"),e()(),n(513,"p"),t(514,"Caso seja enviada uma string, apenas o logo sera mostrado com o valor da string passada."),e()()(),n(515,"tr",14)(516,"td",15)(517,"div",25)(518,"span",26),t(519," (p-colapsed-menu)"),o(520,"br"),e()()(),n(521,"td",18)(522,"code",27),t(523,"EventEmitter"),e()(),n(524,"td",20),t(525,"-"),e(),n(526,"td",21)(527,"em")(528,"strong"),t(529,"(opcional)"),e()(),n(530,"p"),t(531,"Evento emitido ao clicar no bot\xE3o para colapsar ou expandir menu."),e()()(),n(532,"tr",14)(533,"td",15)(534,"div",16)(535,"span",17),t(536," p-filter-menu"),o(537,"br"),e()()(),n(538,"td",18)(539,"code",28),t(540,"boolean"),e()(),n(541,"td",20),t(542,"-"),e(),n(543,"td",21)(544,"em")(545,"strong"),t(546,"(opcional)"),e()(),n(547,"p"),t(548,"Habilita campo para filtrar itens no menu"),e()()(),n(549,"tr",14)(550,"td",15)(551,"div",16)(552,"span",17),t(553," p-header-template"),o(554,"br"),e()()(),n(555,"td",18)(556,"code",29),t(557,"TemplateRef<any>"),e()(),n(558,"td",20),t(559,"-"),e(),n(560,"td",21)(561,"em")(562,"strong"),t(563,"(opcional)"),e()(),n(564,"p"),t(565,"Template customiado que ser\xE1 renderizado ap\xF3s os itens definidos na propriedade "),n(566,"code"),t(567,"p-menu-items"),e()()()(),n(568,"tr",14)(569,"td",15)(570,"div",16)(571,"span",17),t(572," p-header-user"),o(573,"br"),e()()(),n(574,"td",18)(575,"code",30),t(576,"PoHeaderUser"),e()(),n(577,"td",20),t(578,"-"),e(),n(579,"td",21)(580,"em")(581,"strong"),t(582,"(opcional)"),e()(),n(583,"p"),t(584,"Propriedade para configurar a se\xE7\xE3o de headerUser do "),n(585,"code"),t(586,"po-header"),e()()()(),n(587,"tr",14)(588,"td",15)(589,"div",16)(590,"span",17),t(591," p-hide-button-menu"),o(592,"br"),e()()(),n(593,"td",18)(594,"code",28),t(595,"boolean"),e()(),n(596,"td",20),t(597,"-"),e(),n(598,"td",21)(599,"em")(600,"strong"),t(601,"(opcional)"),e()(),n(602,"p"),t(603,"Esconde o bot\xE3o de menu colapsado."),e()()(),n(604,"tr",14)(605,"td",15)(606,"div",16)(607,"span",17),t(608," p-literals"),o(609,"br"),e()()(),n(610,"td",18)(611,"code",31),t(612,"PoHeaderLiterals"),e()(),n(613,"td",20),t(614,"-"),e(),n(615,"td",21)(616,"em")(617,"strong"),t(618,"(opcional)"),e()(),n(619,"p"),t(620,"Objeto com a literal usada na propriedade "),n(621,"code"),t(622,"p-literals"),e(),t(623,"."),e(),n(624,"p"),t(625,"Para customizar a literal, basta declarar um objeto do tipo "),n(626,"code"),t(627,"PoHeaderLiterals"),e(),t(628," conforme exemplo abaixo:"),e(),n(629,"pre")(630,"code"),t(631,`const customLiterals: PoHeaderLiterals = {
  headerLinks: 'Itens de navega\xE7\xE3o',
  notifications: 'Mensagens'
};
`),e()(),n(632,"p"),t(633,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),e(),n(634,"pre")(635,"code"),t(636,`<po-header
  [p-literals]="customLiterals">
</po-header>
`),e()(),n(637,"blockquote")(638,"p"),t(639,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),n(640,"a",32)(641,"code"),t(642,"PoI18nService"),e()(),t(643," ou do browser."),e()()()(),n(644,"tr",14)(645,"td",15)(646,"div",16)(647,"span",17),t(648," p-menus"),o(649,"br"),e()()(),n(650,"td",18)(651,"code",33),t(652,"Array<PoMenuItem>"),e()(),n(653,"td",20),t(654,"-"),e(),n(655,"td",21)(656,"em")(657,"strong"),t(658,"(opcional)"),e()(),n(659,"p"),t(660,"Lista dos itens do menu. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),e(),n(661,"blockquote")(662,"p"),t(663,"O menu poder\xE1 ser aberto via bot\xE3o hamburguer quando a tela tiver menos que 960px"),e()()()(),n(664,"tr",14)(665,"td",15)(666,"div",16)(667,"span",17),t(668," p-menu-items"),o(669,"br"),e()()(),n(670,"td",18)(671,"code",34),t(672,"Array<PoHeaderActions>"),e()(),n(673,"td",20),t(674,"-"),e(),n(675,"td",21)(676,"em")(677,"strong"),t(678,"(opcional)"),e()(),n(679,"p"),t(680,"Propriedade para configurar a se\xE7\xE3o de menu do "),n(681,"code"),t(682,"po-header"),e(),t(683,`.
Cada item pode receber uma label e uma a\xE7\xE3o`),e(),n(684,"blockquote")(685,"p"),t(686,"Os itens ir\xE3o ficar vis\xEDveis em uma tela de at\xE9 960px"),e()()()()(),n(687,"h3"),t(688,"Interfaces"),e(),n(689,"h4",35)(690,"code",5),t(691,"PoHeaderActionTool"),e()(),n(692,"div",2)(693,"p")(694,"em"),t(695,"Interface"),e(),t(696," que define a se\xE7\xE3o de Actions do header."),e(),n(697,"p"),t(698,"Indica\xE7\xE3o de uso:"),e(),n(699,"ul")(700,"li"),t(701,"Primeira a\xE7\xE3o destinada \xE0 app launcher."),e(),n(702,"li"),t(703,"Segunda a\xE7\xE3o (terceiro \xEDcone) destinada \xE0 notifica\xE7\xF5es."),e(),n(704,"li"),t(705,"Terceira a\xE7\xE3o (segundo \xEDcone) destinada para agrupamento de a\xE7\xF5es."),e()(),n(706,"blockquote")(707,"p"),t(708,"Caso seja passado items e popover, o componente ir\xE1 renderizar o popover e os itens ser\xE3o ignorados."),e()()(),n(709,"h4",10),t(710,"Propriedades"),e(),n(711,"table",11)(712,"tr",12)(713,"th",13),t(714,"Nome"),e(),n(715,"th",13),t(716,"Tipo"),e(),n(717,"th",13),t(718,"Descri\xE7\xE3o"),e()(),n(719,"tr",14)(720,"td",15)(721,"div",16)(722,"span",17),t(723," action"),o(724,"br"),e()()(),n(725,"td",18)(726,"code",36),t(727,"Function"),e()(),n(728,"td",21)(729,"em")(730,"strong"),t(731,"(opcional)"),e()(),n(732,"p"),t(733,"Evento emitido ao clicar em uma a\xE7\xE3o"),e(),n(734,"p"),t(735,"Exemplo: "),n(736,"code"),t(737,"action: this.myFunction.bind(this)"),e()()()(),n(738,"tr",14)(739,"td",15)(740,"div",16)(741,"span",17),t(742," badge"),o(743,"br"),e()()(),n(744,"td",18)(745,"code",22),t(746,"number"),e()(),n(747,"td",21)(748,"em")(749,"strong"),t(750,"(opcional)"),e()(),n(751,"p"),t(752,"Valor n\xFAmerico com a repsenta\xE7\xE3o de notifica\xE7\xF5es"),e()()(),n(753,"tr",14)(754,"td",15)(755,"div",16)(756,"span",17),t(757," icon"),o(758,"br"),e()()(),n(759,"td",18)(760,"code",24),t(761,"string"),e()(),n(762,"td",21)(763,"em")(764,"strong"),t(765,"(opcional)"),e()(),n(766,"p"),t(767,"\xCDcone do bot\xE3o de a\xE7\xE3o"),e()()(),n(768,"tr",14)(769,"td",15)(770,"div",16)(771,"span",17),t(772," items"),o(773,"br"),e()()(),n(774,"td",18)(775,"code",37),t(776,"Array<PoHeaderActionToolItem>"),e()(),n(777,"td",21)(778,"em")(779,"strong"),t(780,"(opcional)"),e()(),n(781,"p"),t(782,"Itens de a\xE7\xF5es"),e()()(),n(783,"tr",14)(784,"td",15)(785,"div",16)(786,"span",17),t(787," label"),o(788,"br"),e()()(),n(789,"td",18)(790,"code",24),t(791,"string"),e()(),n(792,"td",21)(793,"em")(794,"strong"),t(795,"(opcional)"),e()(),n(796,"p"),t(797,"T\xEDtulo da a\xE7\xE3o"),e()()(),n(798,"tr",14)(799,"td",15)(800,"div",16)(801,"span",17),t(802," link"),o(803,"br"),e()()(),n(804,"td",18)(805,"code",24),t(806,"string"),e()(),n(807,"td",21)(808,"em")(809,"strong"),t(810,"(opcional)"),e()(),n(811,"p"),t(812,"link utilizado no redirecionamento das p\xE1ginas."),e()()(),n(813,"tr",14)(814,"td",15)(815,"div",16)(816,"span",17),t(817," popover"),o(818,"br"),e()()(),n(819,"td",18)(820,"code",38),t(821,"PoHeaderActionPopoverAction"),e()(),n(822,"td",21)(823,"em")(824,"strong"),t(825,"(opcional)"),e()(),n(826,"p"),t(827,"Template que ser\xE1 utilizado na a\xE7\xE3o"),e()()(),n(828,"tr",14)(829,"td",15)(830,"div",16)(831,"span",17),t(832," tooltip"),o(833,"br"),e()()(),n(834,"td",18)(835,"code",24),t(836,"string"),e()(),n(837,"td",21)(838,"em")(839,"strong"),t(840,"(opcional)"),e()(),n(841,"p"),t(842,"Texto que ser\xE1 apresentado na tooltip"),e()()()(),n(843,"h4",35)(844,"code",5),t(845,"PoHeaderActionPopoverAction"),e()(),n(846,"div",2)(847,"p")(848,"em"),t(849,"Interface"),e(),t(850," que define um template para uma a\xE7\xE3o."),e()(),n(851,"h4",10),t(852,"Propriedades"),e(),n(853,"table",11)(854,"tr",12)(855,"th",13),t(856,"Nome"),e(),n(857,"th",13),t(858,"Tipo"),e(),n(859,"th",13),t(860,"Descri\xE7\xE3o"),e()(),n(861,"tr",14)(862,"td",15)(863,"div",16)(864,"span",17),t(865," content"),o(866,"br"),e()()(),n(867,"td",18)(868,"code",29),t(869,"TemplateRef<any>"),e()(),n(870,"td",21)(871,"p"),t(872,"Template que ser\xE1 renderizado dentro do popover"),e()()()(),n(873,"h4",35)(874,"code",5),t(875,"PoHeaderActionToolItem"),e()(),n(876,"div",2)(877,"p")(878,"em"),t(879,"Interface"),e(),t(880," que define uma lista de a\xE7\xF5es."),e()(),n(881,"h4",10),t(882,"Propriedades"),e(),n(883,"table",11)(884,"tr",12)(885,"th",13),t(886,"Nome"),e(),n(887,"th",13),t(888,"Tipo"),e(),n(889,"th",13),t(890,"Descri\xE7\xE3o"),e()(),n(891,"tr",14)(892,"td",15)(893,"div",16)(894,"span",17),t(895," action"),o(896,"br"),e()()(),n(897,"td",18)(898,"code",36),t(899,"Function"),e()(),n(900,"td",21)(901,"p"),t(902,"Evento emitido ao clicar em uma a\xE7\xE3o"),e(),n(903,"p"),t(904,"Exemplo: "),n(905,"code"),t(906,"action: this.myFunction.bind(this)"),e()()()(),n(907,"tr",14)(908,"td",15)(909,"div",16)(910,"span",17),t(911," label"),o(912,"br"),e()()(),n(913,"td",18)(914,"code",24),t(915,"string"),e()(),n(916,"td",21)(917,"p"),t(918,"Label da a\xE7\xE3o"),e()()()(),n(919,"h4",35)(920,"code",5),t(921,"PoHeaderActions"),e()(),n(922,"div",2)(923,"p")(924,"em"),t(925,"Interface"),e(),t(926," que define uma lista de a\xE7\xF5es no sub-menu."),e()(),n(927,"h4",10),t(928,"Propriedades"),e(),n(929,"table",11)(930,"tr",12)(931,"th",13),t(932,"Nome"),e(),n(933,"th",13),t(934,"Tipo"),e(),n(935,"th",13),t(936,"Descri\xE7\xE3o"),e()(),n(937,"tr",14)(938,"td",15)(939,"div",16)(940,"span",17),t(941," action"),o(942,"br"),e()()(),n(943,"td",18)(944,"code",36),t(945,"Function"),e()(),n(946,"td",21)(947,"em")(948,"strong"),t(949,"(opcional)"),e()(),n(950,"p"),t(951,"Evento da a\xE7\xE3o"),e(),n(952,"p"),t(953," Exemplo: "),n(954,"code"),t(955,"action: this.myFunction.bind(this)"),e()()()(),n(956,"tr",14)(957,"td",15)(958,"div",16)(959,"span",17),t(960," id"),o(961,"br"),e()()(),n(962,"td",18)(963,"code",24),t(964,"string"),e()(),n(965,"td",21)(966,"em")(967,"strong"),t(968,"(opcional)"),e()(),n(969,"p"),t(970,"Identificador da a\xE7\xE3o"),e()()(),n(971,"tr",14)(972,"td",15)(973,"div",16)(974,"span",17),t(975," label"),o(976,"br"),e()()(),n(977,"td",18)(978,"code",24),t(979,"string"),e()(),n(980,"td",21)(981,"p"),t(982,"Label da a\xE7\xE3o"),e()()(),n(983,"tr",14)(984,"td",15)(985,"div",16)(986,"span",17),t(987," link"),o(988,"br"),e()()(),n(989,"td",18)(990,"code",24),t(991,"string"),e()(),n(992,"td",21)(993,"em")(994,"strong"),t(995,"(opcional)"),e()(),n(996,"p"),t(997,"link utilizado no redirecionamento das p\xE1ginas."),e()()()(),n(998,"h4",35)(999,"code",5),t(1e3,"PoHeaderBrand"),e()(),n(1001,"div",2)(1002,"p")(1003,"em"),t(1004,"Interface"),e(),t(1005," que define a se\xE7\xE3o de brand."),e()(),n(1006,"h4",10),t(1007,"Propriedades"),e(),n(1008,"table",11)(1009,"tr",12)(1010,"th",13),t(1011,"Nome"),e(),n(1012,"th",13),t(1013,"Tipo"),e(),n(1014,"th",13),t(1015,"Descri\xE7\xE3o"),e()(),n(1016,"tr",14)(1017,"td",15)(1018,"div",16)(1019,"span",17),t(1020," action"),o(1021,"br"),e()()(),n(1022,"td",18)(1023,"code",36),t(1024,"Function"),e()(),n(1025,"td",21)(1026,"em")(1027,"strong"),t(1028,"(opcional)"),e()(),n(1029,"p"),t(1030,"Evento da a\xE7\xE3o"),e(),n(1031,"p"),t(1032," Exemplo: "),n(1033,"code"),t(1034,"action: this.myFunction.bind(this)"),e()()()(),n(1035,"tr",14)(1036,"td",15)(1037,"div",16)(1038,"span",17),t(1039," link"),o(1040,"br"),e()()(),n(1041,"td",18)(1042,"code",24),t(1043,"string"),e()(),n(1044,"td",21)(1045,"em")(1046,"strong"),t(1047,"(opcional)"),e()(),n(1048,"p"),t(1049,"link utilizado no redirecionamento das p\xE1ginas."),e()()(),n(1050,"tr",14)(1051,"td",15)(1052,"div",16)(1053,"span",17),t(1054," logo"),o(1055,"br"),e()()(),n(1056,"td",18)(1057,"code",24),t(1058,"string"),e()(),n(1059,"td",21)(1060,"em")(1061,"strong"),t(1062,"(opcional)"),e()(),n(1063,"p"),t(1064,"Imagem da marca"),e()()(),n(1065,"tr",14)(1066,"td",15)(1067,"div",16)(1068,"span",17),t(1069," smallLogo"),o(1070,"br"),e()()(),n(1071,"td",18)(1072,"code",24),t(1073,"string"),e()(),n(1074,"td",21)(1075,"em")(1076,"strong"),t(1077,"(opcional)"),e()(),n(1078,"p"),t(1079,"Imagem da marca quando a tela \xE9 menor que 960px"),e()()(),n(1080,"tr",14)(1081,"td",15)(1082,"div",16)(1083,"span",17),t(1084," title"),o(1085,"br"),e()()(),n(1086,"td",18)(1087,"code",24),t(1088,"string"),e()(),n(1089,"td",21)(1090,"em")(1091,"strong"),t(1092,"(opcional)"),e()(),n(1093,"p"),t(1094,"T\xEDtulo da marca"),e()()()(),n(1095,"h4",35)(1096,"code",5),t(1097,"PoHeaderLiterals"),e()(),n(1098,"div",2)(1099,"p"),t(1100,"Interface para defini\xE7\xE3o das literais usadas no "),n(1101,"code"),t(1102,"po-header"),e(),t(1103,"."),e()(),n(1104,"h4",10),t(1105,"Propriedades"),e(),n(1106,"table",11)(1107,"tr",12)(1108,"th",13),t(1109,"Nome"),e(),n(1110,"th",13),t(1111,"Tipo"),e(),n(1112,"th",13),t(1113,"Descri\xE7\xE3o"),e()(),n(1114,"tr",14)(1115,"td",15)(1116,"div",16)(1117,"span",17),t(1118," headerLinks"),o(1119,"br"),e()()(),n(1120,"td",18)(1121,"code",24),t(1122,"string"),e()(),n(1123,"td",21)(1124,"em")(1125,"strong"),t(1126,"(opcional)"),e()(),n(1127,"p"),t(1128,"Texto exibido no item de menu no qual os itens do header s\xE3o agrupados quando est\xE1 no modo responsivo."),e()()(),n(1129,"tr",14)(1130,"td",15)(1131,"div",16)(1132,"span",17),t(1133," notifications"),o(1134,"br"),e()()(),n(1135,"td",18)(1136,"code",24),t(1137,"string"),e()(),n(1138,"td",21)(1139,"em")(1140,"strong"),t(1141,"(opcional)"),e()(),n(1142,"p"),t(1143,"Texto para indica\xE7\xE3o de notifica\xE7\xE3o, caso seja passado um valor v\xE1lido na propriedade "),n(1144,"code"),t(1145,"badge"),e()()()()(),n(1146,"h4",35)(1147,"code",5),t(1148,"PoHeaderUser"),e()(),n(1149,"div",2)(1150,"p")(1151,"em"),t(1152,"Interface"),e(),t(1153," que define a se\xE7\xE3o de Customer do header."),e()(),n(1154,"h4",10),t(1155,"Propriedades"),e(),n(1156,"table",11)(1157,"tr",12)(1158,"th",13),t(1159,"Nome"),e(),n(1160,"th",13),t(1161,"Tipo"),e(),n(1162,"th",13),t(1163,"Descri\xE7\xE3o"),e()(),n(1164,"tr",14)(1165,"td",15)(1166,"div",16)(1167,"span",17),t(1168," action"),o(1169,"br"),e()()(),n(1170,"td",18)(1171,"code",36),t(1172,"Function"),e()(),n(1173,"td",21)(1174,"em")(1175,"strong"),t(1176,"(opcional)"),e()(),n(1177,"p"),t(1178,"Evento emitido ao clicar na se\xE7\xE3o"),e(),n(1179,"p"),t(1180,"Exemplo: "),n(1181,"code"),t(1182,"action: this.myFunction.bind(this)"),e()()()(),n(1183,"tr",14)(1184,"td",15)(1185,"div",16)(1186,"span",17),t(1187," avatar"),o(1188,"br"),e()()(),n(1189,"td",18)(1190,"code",24),t(1191,"string"),e()(),n(1192,"td",21)(1193,"p"),t(1194,"Logo representando o perfil"),e()()(),n(1195,"tr",14)(1196,"td",15)(1197,"div",16)(1198,"span",17),t(1199," customerBrand"),o(1200,"br"),e()()(),n(1201,"td",18)(1202,"code",24),t(1203,"string"),e()(),n(1204,"td",21)(1205,"p"),t(1206,"Imagem da marca"),e()()(),n(1207,"tr",14)(1208,"td",15)(1209,"div",16)(1210,"span",17),t(1211," items"),o(1212,"br"),e()()(),n(1213,"td",18)(1214,"code",37),t(1215,"Array<PoHeaderActionToolItem>"),e()(),n(1216,"td",21)(1217,"em")(1218,"strong"),t(1219,"(opcional)"),e()(),n(1220,"p"),t(1221,"Itens de a\xE7\xF5es"),e(),n(1222,"blockquote")(1223,"p"),t(1224,"Caso seja passado items e popover, o componente ir\xE1 renderizar o popover e os itens ser\xE3o ignorados"),e()()()(),n(1225,"tr",14)(1226,"td",15)(1227,"div",16)(1228,"span",17),t(1229," popover"),o(1230,"br"),e()()(),n(1231,"td",18)(1232,"code",38),t(1233,"PoHeaderActionPopoverAction"),e()(),n(1234,"td",21)(1235,"em")(1236,"strong"),t(1237,"(opcional)"),e()(),n(1238,"p"),t(1239,"Template que ser\xE1 utilizado na a\xE7\xE3o"),e()()(),n(1240,"tr",14)(1241,"td",15)(1242,"div",16)(1243,"span",17),t(1244," status"),o(1245,"br"),e()()(),n(1246,"td",18)(1247,"code",39),t(1248,"'positive' "),e(),n(1249,"code",40),t(1250," 'negative' "),e(),n(1251,"code",41),t(1252," 'warning' "),e(),n(1253,"code",42),t(1254," 'disabled'"),e()(),n(1255,"td",21)(1256,"em")(1257,"strong"),t(1258,"(opcional)"),e()(),n(1259,"p"),t(1260,`Indica\xE7\xE3o representando o estado do usu\xE1rio
Valores v\xE1lidos:`),e(),n(1261,"ul")(1262,"li")(1263,"code"),t(1264,"positive"),e(),t(1265,": Define a cor do "),n(1266,"code"),t(1267,"status"),e(),t(1268," com a cor de feedback positivo."),e(),n(1269,"li")(1270,"code"),t(1271,"negative"),e(),t(1272,": Define a cor do "),n(1273,"code"),t(1274,"status"),e(),t(1275," com a cor de feedback negative."),e(),n(1276,"li")(1277,"code"),t(1278,"warning"),e(),t(1279,": Define a cor do "),n(1280,"code"),t(1281,"status"),e(),t(1282," com a cor de feedback warning."),e(),n(1283,"li")(1284,"code"),t(1285,"disabled"),e(),t(1286,": Define a cor do "),n(1287,"code"),t(1288,"status"),e(),t(1289," com a cor de feedback disabled"),e()()()()()())},dependencies:[y],encapsulation:2})}return a})();var ve=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(v(ie),v(oe))};static \u0275cmp=h({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Header",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-header-doc"),e(),n(4,"po-tab",3),S("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-header-basic-view")(6,"sample-po-header-labs-view")(7,"sample-po-header-apps-view"),e()()()),r&2&&(p("p-actions",i.actions),m(2),p("p-active",i.activeTab==="doc"),m(2),p("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[se,C,A,Ee,Se,ge,xe],encapsulation:2})}return a})();var qe=[{path:"",component:ve}],fe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=D({type:a});static \u0275inj=I({imports:[U.forChild(qe),U]})}return a})();var ht=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=D({type:a});static \u0275inj=I({imports:[pe,fe]})}return a})();export{ht as DocPoHeaderModule};
