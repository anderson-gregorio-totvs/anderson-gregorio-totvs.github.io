import{$ as W,$a as T,$c as Y,Bc as K,Ca as q,Da as H,Ea as R,F as s,Fa as M,G as c,Ga as t,Ia as P,Ka as b,La as f,Lb as F,Ma as E,Mb as j,Nb as U,Ob as O,Od as $,Pa as k,Pb as G,T as r,U as B,Wb as Q,Xd as x,Yb as I,Yc as X,Yd as v,Zb as N,Zc as D,_ as u,ha as S,ka as y,md as Z,na as e,oa as i,oc as V,pa as p,re as w,se as ee,ta as _,ua as h,y as L,zc as J}from"./chunk-PI3TYJHE.js";var te=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-page-slide-basic"]],standalone:!1,decls:5,vars:0,consts:[["pageSlide",""],["p-title","Po Page Slide Title"],[1,"po-row"],["p-label","View Page Slide",1,"po-sm-3",3,"p-click"]],template:function(a,n){if(a&1){let d=_();e(0,"po-page-slide",1,0),t(2," Hello World! "),i(),e(3,"div",2)(4,"po-button",3),h("p-click",function(){s(d);let l=M(1);return c(l.open())}),i()()}},dependencies:[V,D],encapsulation:2})}return o})();var ce=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-page-slide-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(p(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Page Slide Basic"),i(),e(4,"a",2),h("click",function(){return n.toggleSampleCodeTabs()}),p(5,"span"),t(6),i()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-page-slide-basic/sample-po-page-slide-basic.component.html"),i(),e(13,"pre",7),t(14,`<po-page-slide #pageSlide p-title="Po Page Slide Title"> Hello World! </po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="View Page Slide" (p-click)="pageSlide.open()"></po-button>
</div>
`),i()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts"),i(),e(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-slide-basic',
  templateUrl: './sample-po-page-slide-basic.component.html',
  standalone: false
})
export class SamplePoPageSlideBasicComponent {}
`),i()()()()(),e(21,"div",10),p(22,"sample-po-page-slide-basic"),i(),p(23,"hr")),a&2&&(r(5),y("po-icon "+n.sampleCodeButtonIcon),r(),P(" ",n.sampleCodeButtonLabel,""),r(),S("ngClass",k(4,ce,n.hideSampleCodeTabs)))},dependencies:[T,w,x,v,te],encapsulation:2})}return o})();var Se=["poPageSlide"],oe=(()=>{class o{poPageSlide;hideClose=!1;title;subtitle;content;size;properties;propertiesOptions=[{value:"click-out",label:"Click Out"},{value:"hide-close",label:"Hide Close"}];sizeOptions=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra large",value:"xl"},{label:"Automatic",value:"auto"}];ngOnInit(){this.restore()}openPage(){this.poPageSlide.open()}restore(){this.hideClose=!1,this.title="",this.subtitle="",this.content="",this.size="md",this.properties=[]}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-page-slide-labs"]],viewQuery:function(a,n){if(a&1&&q(Se,5),a&2){let d;H(d=R())&&(n.poPageSlide=d.first)}},standalone:!1,decls:16,vars:14,consts:[["poPageSlide",""],["f","ngForm"],[3,"p-click-out","p-hide-close","p-size","p-subtitle","p-title"],["p-label","Open Page Slide",3,"p-click","p-disabled"],[1,"po-row"],["name","Title","p-clean","","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Subtitle","p-clean","","p-label","Subtitle","p-optional","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Content","p-clean","","p-label","Content","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-sm-6",3,"ngModelChange","ngModel","p-options"],["name","Size","p-label","Size","p-optional","",1,"po-sm-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-sm-3",3,"p-click"]],template:function(a,n){if(a&1){let d=_();e(0,"po-page-slide",2,0),t(2),i(),e(3,"po-button",3),h("p-click",function(){return s(d),c(n.openPage())}),i(),p(4,"hr"),e(5,"form",null,1)(7,"div",4)(8,"po-input",5),E("ngModelChange",function(l){return s(d),f(n.title,l)||(n.title=l),c(l)}),i(),e(9,"po-input",6),E("ngModelChange",function(l){return s(d),f(n.subtitle,l)||(n.subtitle=l),c(l)}),i(),e(10,"po-input",7),E("ngModelChange",function(l){return s(d),f(n.content,l)||(n.content=l),c(l)}),i()(),e(11,"div",4)(12,"po-checkbox-group",8),E("ngModelChange",function(l){return s(d),f(n.properties,l)||(n.properties=l),c(l)}),i(),e(13,"po-radio-group",9),E("ngModelChange",function(l){return s(d),f(n.size,l)||(n.size=l),c(l)}),i()(),e(14,"div",4)(15,"po-button",10),h("p-click",function(){return s(d),c(n.restore())}),i()()()}if(a&2){let d=M(6);S("p-click-out",n.properties.includes("click-out"))("p-hide-close",n.properties.includes("hide-close"))("p-size",n.size)("p-subtitle",n.subtitle)("p-title",n.title),r(2),P(" ",n.content,`
`),r(),S("p-disabled",d.form.invalid),r(5),b("ngModel",n.title),r(),b("ngModel",n.subtitle),r(),b("ngModel",n.content),r(2),b("ngModel",n.properties),S("p-options",n.propertiesOptions),r(),b("ngModel",n.size),S("p-options",n.sizeOptions)}},dependencies:[G,F,j,O,U,V,J,K,Z,D],encapsulation:2})}return o})();var be=o=>({"docs-sample-code-tabs":o}),ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-page-slide-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(p(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Page Slide Labs"),i(),e(4,"a",2),h("click",function(){return n.toggleSampleCodeTabs()}),p(5,"span"),t(6),i()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-page-slide-labs/sample-po-page-slide-labs.component.html"),i(),e(13,"pre",7),t(14,`<po-page-slide
  [p-click-out]="properties.includes('click-out')"
  [p-hide-close]="properties.includes('hide-close')"
  [p-size]="size"
  [p-subtitle]="subtitle"
  [p-title]="title"
  #poPageSlide
>
  { { content }}
</po-page-slide>

<po-button p-label="Open Page Slide" [p-disabled]="f.form.invalid" (p-click)="openPage()"></po-button>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="Title" [(ngModel)]="title" p-clean p-label="Title" p-required></po-input>
    <po-input class="po-md-6" name="Subtitle" [(ngModel)]="subtitle" p-clean p-label="Subtitle" p-optional></po-input>
    <po-input class="po-sm-12" name="Content" [(ngModel)]="content" p-clean p-label="Content" p-required></po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-sm-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    ></po-checkbox-group>

    <po-radio-group
      class="po-sm-6"
      name="Size"
      [(ngModel)]="size"
      p-label="Size"
      [p-options]="sizeOptions"
      p-optional
    ></po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-sm-3" p-label="Sample Restore" (p-click)="restore()"></po-button>
  </div>
</form>
`),i()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts"),i(),e(19,"pre",9),t(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { PoCheckboxGroupOption, PoPageSlideComponent, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-slide-labs',
  templateUrl: './sample-po-page-slide-labs.component.html',
  standalone: false
})
export class SamplePoPageSlideLabsComponent implements OnInit {
  @ViewChild('poPageSlide')
  private readonly poPageSlide: PoPageSlideComponent;

  public hideClose = false;
  public title: string;
  public subtitle: string;
  public content: string;
  public size: string;
  public properties: Array<string>;

  public propertiesOptions: Array<PoCheckboxGroupOption> = [
    {
      value: 'click-out',
      label: 'Click Out'
    },
    {
      value: 'hide-close',
      label: 'Hide Close'
    }
  ];

  public sizeOptions: Array<PoRadioGroupOption> = [
    {
      label: 'Small',
      value: 'sm'
    },
    {
      label: 'Medium',
      value: 'md'
    },
    {
      label: 'Large',
      value: 'lg'
    },
    {
      label: 'Extra large',
      value: 'xl'
    },
    {
      label: 'Automatic',
      value: 'auto'
    }
  ];

  ngOnInit() {
    this.restore();
  }

  public openPage() {
    this.poPageSlide.open();
  }

  public restore() {
    this.hideClose = false;
    this.title = '';
    this.subtitle = '';
    this.content = '';
    this.size = 'md';
    this.properties = [];
  }
}
`),i()()()()(),e(21,"div",10),p(22,"sample-po-page-slide-labs"),i(),p(23,"hr")),a&2&&(r(5),y("po-icon "+n.sampleCodeButtonIcon),r(),P(" ",n.sampleCodeButtonLabel,""),r(),S("ngClass",k(4,be,n.hideSampleCodeTabs)))},dependencies:[T,w,x,v,oe],encapsulation:2})}return o})();var le=(()=>{class o{router;bluetooth=!0;locked=!1;microphone=!0;notification=!0;favorited=!1;localization=!0;constructor(m){this.router=m}openPageSlideFooterDocumentation(){this.router.navigate(["documentation","po-page-slide-footer"])}static \u0275fac=function(a){return new(a||o)(B(I))};static \u0275cmp=u({type:o,selectors:[["sample-po-page-slide-configuration"]],standalone:!1,decls:54,vars:6,consts:[["pageSlide",""],["p-title","Configuration","p-size","sm"],[1,"po-row","po-mb-2"],["p-label-off","Bluetooth","p-label-on","Bluetooth","name","bluetooth",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Unlocked","p-label-on","Locked","name","locked",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Microphone","p-label-on","Microphone","name","microphone",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Notification","p-label-on","Notification","name","notification",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Localization","p-label-on","Localization","name","localization",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Not favorited","p-label-on","Favorited","name","favorited",1,"po-sm-6",3,"ngModelChange","ngModel"],[1,"po-font-title"],[1,"po-m-2"],[1,"po-font-subtitle","po-mb-1"],[1,"po-ml-2"],["href","http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern","target","_blank","rel","noopener"],["p-label","Check footer",3,"p-click"],[1,"po-row"],["p-label","Open Configuration",1,"po-sm-3",3,"p-click"]],template:function(a,n){if(a&1){let d=_();e(0,"po-page-slide",1,0)(2,"div",2)(3,"po-switch",3),E("ngModelChange",function(l){return s(d),f(n.bluetooth,l)||(n.bluetooth=l),c(l)}),i(),e(4,"po-switch",4),E("ngModelChange",function(l){return s(d),f(n.locked,l)||(n.locked=l),c(l)}),i()(),e(5,"div",2)(6,"po-switch",5),E("ngModelChange",function(l){return s(d),f(n.microphone,l)||(n.microphone=l),c(l)}),i(),e(7,"po-switch",6),E("ngModelChange",function(l){return s(d),f(n.notification,l)||(n.notification=l),c(l)}),i()(),e(8,"div",2)(9,"po-switch",7),E("ngModelChange",function(l){return s(d),f(n.localization,l)||(n.localization=l),c(l)}),i(),e(10,"po-switch",8),E("ngModelChange",function(l){return s(d),f(n.favorited,l)||(n.favorited=l),c(l)}),i()(),p(11,"hr"),e(12,"h2",9),t(13,"About Page Slide"),i(),e(14,"section",10)(15,"h3",11),t(16,"Usage"),i(),e(17,"ul",12)(18,"li"),t(19,"To reveal additional navigation controls"),i(),e(20,"li"),t(21,"In TV or mobile space since controls and/or space is limited"),i(),e(22,"li"),t(23,"To expose a configuration panel (similar to the Module Configure Pattern)"),i(),e(24,"li"),t(25," To a lesser extent to reveal help or contextual information (the partial hiding of the related content might make it a poor choice for this) "),i()()(),e(26,"section",10)(27,"h3",11),t(28,"Challenges"),i(),e(29,"ul",12)(30,"li"),t(31,"Discoverability"),i(),e(32,"li"),t(33,"Losing context with the rest of the page"),i(),e(34,"li"),t(35,"Make the disruption work for you"),i()()(),e(36,"section",10)(37,"h3",11),t(38,"Recommendations"),i(),e(39,"ul",12)(40,"li"),t(41,"Use it sparingly only for major context switches"),i(),e(42,"li"),t(43,"Make the animation fast. No reason to wow the user with your ability to scroll"),i(),e(44,"li"),t(45,"Make the activation/deactivation dead simple"),i()()(),e(46,"p"),t(47," For more information visit "),e(48,"a",13),t(49,"Designing Web Interfaces: Page Slide"),i()(),e(50,"po-page-slide-footer")(51,"po-button",14),h("p-click",function(){return s(d),c(n.openPageSlideFooterDocumentation())}),i()()(),e(52,"div",15)(53,"po-button",16),h("p-click",function(){s(d);let l=M(1);return c(l.open())}),i()()}a&2&&(r(3),b("ngModel",n.bluetooth),r(),b("ngModel",n.locked),r(2),b("ngModel",n.microphone),r(),b("ngModel",n.notification),r(2),b("ngModel",n.localization),r(),b("ngModel",n.favorited))},dependencies:[F,O,V,Y,D,X],encapsulation:2})}return o})();var Pe=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-page-slide-configuration-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(p(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Page Slide - Configuration"),i(),e(4,"a",2),h("click",function(){return n.toggleSampleCodeTabs()}),p(5,"span"),t(6),i()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html"),i(),e(13,"pre",7),t(14,`<po-page-slide p-title="Configuration" p-size="sm" #pageSlide>
  <div class="po-row po-mb-2">
    <po-switch
      class="po-sm-6"
      p-label-off="Bluetooth"
      p-label-on="Bluetooth"
      name="bluetooth"
      [(ngModel)]="bluetooth"
    ></po-switch>
    <po-switch
      class="po-sm-6"
      p-label-off="Unlocked"
      p-label-on="Locked"
      name="locked"
      [(ngModel)]="locked"
    ></po-switch>
  </div>

  <div class="po-row po-mb-2">
    <po-switch
      class="po-sm-6"
      p-label-off="Microphone"
      p-label-on="Microphone"
      name="microphone"
      [(ngModel)]="microphone"
    ></po-switch>
    <po-switch
      class="po-sm-6"
      p-label-off="Notification"
      p-label-on="Notification"
      name="notification"
      [(ngModel)]="notification"
    ></po-switch>
  </div>

  <div class="po-row po-mb-2">
    <po-switch
      class="po-sm-6"
      p-label-off="Localization"
      p-label-on="Localization"
      name="localization"
      [(ngModel)]="localization"
    ></po-switch>
    <po-switch
      class="po-sm-6"
      p-label-off="Not favorited"
      p-label-on="Favorited"
      name="favorited"
      [(ngModel)]="favorited"
    ></po-switch>
  </div>

  <hr />

  <h2 class="po-font-title">About Page Slide</h2>

  <section class="po-m-2">
    <h3 class="po-font-subtitle po-mb-1">Usage</h3>
    <ul class="po-ml-2">
      <li>To reveal additional navigation controls</li>
      <li>In TV or mobile space since controls and/or space is limited</li>
      <li>To expose a configuration panel (similar to the Module Configure Pattern)</li>
      <li>
        To a lesser extent to reveal help or contextual information (the partial hiding of the related content might
        make it a poor choice for this)
      </li>
    </ul>
  </section>

  <section class="po-m-2">
    <h3 class="po-font-subtitle po-mb-1">Challenges</h3>
    <ul class="po-ml-2">
      <li>Discoverability</li>
      <li>Losing context with the rest of the page</li>
      <li>Make the disruption work for you</li>
    </ul>
  </section>

  <section class="po-m-2">
    <h3 class="po-font-subtitle po-mb-1">Recommendations</h3>
    <ul class="po-ml-2">
      <li>Use it sparingly only for major context switches</li>
      <li>Make the animation fast. No reason to wow the user with your ability to scroll</li>
      <li>Make the activation/deactivation dead simple</li>
    </ul>
  </section>

  <p>
    For more information visit
    <a href="http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern" target="_blank" rel="noopener"
      >Designing Web Interfaces: Page Slide</a
    >
  </p>
  <po-page-slide-footer>
    <po-button p-label="Check footer" (p-click)="openPageSlideFooterDocumentation()"> </po-button>
  </po-page-slide-footer>
</po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="Open Configuration" (p-click)="pageSlide.open()"></po-button>
</div>
`),i()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts"),i(),e(19,"pre",9),t(20,`import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sample-po-page-slide-configuration',
  templateUrl: './sample-po-page-slide-configuration.component.html',
  standalone: false
})
export class SamplePoPageSlideConfigurationComponent {
  public bluetooth = true;
  public locked = false;
  public microphone = true;
  public notification = true;
  public favorited = false;
  public localization = true;

  constructor(private router: Router) {}

  openPageSlideFooterDocumentation() {
    this.router.navigate(['documentation', 'po-page-slide-footer']);
  }
}
`),i()()()()(),e(21,"div",10),p(22,"sample-po-page-slide-configuration"),i(),p(23,"hr")),a&2&&(r(5),y("po-icon "+n.sampleCodeButtonIcon),r(),P(" ",n.sampleCodeButtonLabel,""),r(),S("ngClass",k(4,Pe,n.hideSampleCodeTabs)))},dependencies:[T,w,x,v,le],encapsulation:2})}return o})();var re=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-page-slide-doc"]],standalone:!1,decls:501,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","/documentation/po-page-slide-footer"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"]],template:function(a,n){a&1&&(e(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoPageModule } from '@po-ui/ng-components';"),i()(),e(4,"div",2)(5,"p"),t(6,`M\xF3dulo dos componentes po-page-default, po-page-detail, po-page-edit,
po-page-list e po-page-slide.`),i()(),e(7,"h3",3),t(8,"Componente"),i(),e(9,"h4",4)(10,"code",5),t(11,"PoPageSlideComponent"),i()(),e(12,"div",2)(13,"p"),t(14,"O componente "),e(15,"code"),t(16,"po-page-slide"),i(),t(17,` \xE9 utilizado para incluir conte\xFAdos secund\xE1rios
adicionando controles e navega\xE7\xF5es adicionais, mas mantendo o usu\xE1rio na
p\xE1gina principal.`),i(),e(18,"p"),t(19,"Este componente \xE9 ativado a partir do m\xE9todo "),e(20,"code"),t(21,"#open()"),i(),t(22,` e pode ser encerrado
atrav\xE9s do bot\xE3o que encontra-se no cabe\xE7alho do mesmo ou atrav\xE9s do m\xE9todo
`),e(23,"code"),t(24,"#close()"),i(),t(25,"."),i(),e(26,"blockquote")(27,"p"),t(28,"Para o correto funcionamento do componente "),e(29,"code"),t(30,"po-page-slide"),i(),t(31,`, deve ser
importado o m\xF3dulo `),e(32,"code"),t(33,"BrowserAnimationsModule"),i(),t(34,` no m\xF3dulo principal da sua
aplica\xE7\xE3o.`),i()(),e(35,"p"),t(36,"M\xF3dulo da aplica\xE7\xE3o:"),i(),e(37,"pre")(38,"code"),t(39,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
export class AppModule { }`),i()(),e(40,"p"),t(41,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),i(),e(42,"pre")(43,"code"),t(44,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));`),i()(),e(45,"p"),t(46," Caso utilize componentes de field dentro do page-slide, recomenda-se o uso do "),e(47,"a",6),t(48,"Grid System"),i(),t(49,"."),i(),e(50,"p"),t(51,"No rodap\xE9 \xE9 poss\xEDvel utilizar o componente "),e(52,"a",7)(53,"code"),t(54,"PoPageSlideFooter"),i()(),t(55," para customiza\xE7\xE3o do template."),i(),e(56,"ul")(57,"li")(58,"h4",8),t(59,"Tokens customiz\xE1veis"),i()()(),e(60,"p"),t(61,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),i(),e(62,"blockquote")(63,"p"),t(64,"Para maiores informa\xE7\xF5es, acesse o guia "),e(65,"a",9),t(66,"Personalizando o Tema Padr\xE3o com Tokens CSS"),i(),t(67,"."),i()(),e(68,"table")(69,"thead")(70,"tr")(71,"th"),t(72,"Propriedade"),i(),e(73,"th"),t(74,"Descri\xE7\xE3o"),i(),e(75,"th"),t(76,"Valor Padr\xE3o"),i()()(),e(77,"tbody")(78,"tr")(79,"td")(80,"code"),t(81,"--font-family"),i()(),e(82,"td"),t(83,"Fam\xEDlia tipogr\xE1fica usada"),i(),e(84,"td")(85,"code"),t(86,"var(--font-family-theme)"),i()()(),e(87,"tr")(88,"td")(89,"code"),t(90,"--font-weight"),i()(),e(91,"td"),t(92,"Peso da fonte"),i(),e(93,"td")(94,"code"),t(95,"var(--font-weight-bold)"),i()()(),e(96,"tr")(97,"td")(98,"code"),t(99,"--padding-header"),i()(),e(100,"td"),t(101,"Espa\xE7amento do header"),i(),e(102,"td")(103,"code"),t(104,"var(--spacing-md)"),i()()(),e(105,"tr")(106,"td")(107,"code"),t(108,"--padding-body"),i()(),e(109,"td"),t(110,"Espa\xE7amento do conte\xFAdo"),i(),e(111,"td")(112,"code"),t(113,"var(--line-height-none)"),i()()(),e(114,"tr")(115,"td")(116,"code"),t(117,"--padding-footer"),i()(),e(118,"td"),t(119,"Espa\xE7amento do footer"),i(),e(120,"td")(121,"code"),t(122,"var(--spacing-sm) var(--spacing-md) var(--spacing-xl) var(--spacing-md)"),i()()(),e(123,"tr")(124,"td")(125,"strong"),t(126,"Default Values"),i()(),p(127,"td")(128,"td"),i(),e(129,"tr")(130,"td")(131,"code"),t(132,"--color-overlay"),i()(),e(133,"td"),t(134,"Cor do overlay"),i(),e(135,"td")(136,"code"),t(137,"var(--color-neutral-dark-80)"),i()()(),e(138,"tr")(139,"td")(140,"code"),t(141,"--opacity-overlay"),i()(),e(142,"td"),t(143,"Cor da opacidade do overlay"),i(),e(144,"td")(145,"code"),t(146,"0.7"),i()()(),e(147,"tr")(148,"td")(149,"code"),t(150,"--background-color"),i()(),e(151,"td"),t(152,"Cor de background"),i(),e(153,"td")(154,"code"),t(155,"var(--color-neutral-light-00)"),i()()(),e(156,"tr")(157,"td")(158,"code"),t(159,"--border-color"),i()(),e(160,"td"),t(161,"Cor da borda"),i(),e(162,"td")(163,"code"),t(164,"var(--color-neutral-light-20)"),i()()(),e(165,"tr")(166,"td")(167,"code"),t(168,"--color-title"),i()(),e(169,"td"),t(170,"Cor do titulo do header"),i(),e(171,"td")(172,"code"),t(173,"var(--color-neutral-dark-95)"),i()()(),e(174,"tr")(175,"td")(176,"code"),t(177,"--border-radius"),i()(),e(178,"td"),t(179,"Radius da borda"),i(),e(180,"td")(181,"code"),t(182,"var(--border-radius-md) 0 0 var(--border-radius-md)"),i()()(),e(183,"tr")(184,"td")(185,"code"),t(186,"--transition-duration"),i()(),e(187,"td"),t(188,"Dura\xE7\xE3o da transi\xE7\xE3o"),i(),e(189,"td")(190,"code"),t(191,"var(--duration-extra-fast)"),i()()(),e(192,"tr")(193,"td")(194,"code"),t(195,"--transition-timing"),i()(),e(196,"td"),t(197,"Dura\xE7\xE3o da transi\xE7\xE3o com o tipo de transi\xE7\xE3o"),i(),e(198,"td")(199,"code"),t(200,"var(--duration-extra-slow) var(--timing-standart)"),i()()(),e(201,"tr")(202,"td")(203,"code"),t(204,"--page-slide-width-sm"),i()(),e(205,"td"),t(206,"Tamanho da largura do componente no tamanho "),e(207,"code"),t(208,"small"),i()(),e(209,"td")(210,"code"),t(211,"40%"),i()()(),e(212,"tr")(213,"td")(214,"code"),t(215,"--page-slide-width-md"),i()(),e(216,"td"),t(217,"Tamanho da largura do componente no tamanho "),e(218,"code"),t(219,"medium"),i()(),e(220,"td")(221,"code"),t(222,"50%"),i()()(),e(223,"tr")(224,"td")(225,"code"),t(226,"--page-slide-width-lg"),i()(),e(227,"td"),t(228,"Tamanho da largura do componente no tamanho "),e(229,"code"),t(230,"large"),i()(),e(231,"td")(232,"code"),t(233,"60%"),i()()(),e(234,"tr")(235,"td")(236,"code"),t(237,"--page-slide-width-xl"),i()(),e(238,"td"),t(239,"Tamanho da largura do componente no tamanho "),e(240,"code"),t(241,"extra large"),i()(),e(242,"td")(243,"code"),t(244,"70%"),i()()(),e(245,"tr")(246,"td")(247,"code"),t(248,"--page-slide-min-width-auto"),i()(),e(249,"td"),t(250,"Tamanho da largura m\xEDnima do componente no tamanho "),e(251,"code"),t(252,"auto"),i()(),e(253,"td")(254,"code"),t(255,"40%"),i()()(),e(256,"tr")(257,"td")(258,"code"),t(259,"--page-slide-max-width-auto"),i()(),e(260,"td"),t(261,"Tamanho da largura m\xE1xima do componente no tamanho "),e(262,"code"),t(263,"auto"),i()(),e(264,"td")(265,"code"),t(266,"90%"),i()()()()()(),e(267,"div",10)(268,"h4",11),t(269,"Seletor"),i(),e(270,"pre",12),t(271,`<po-page-slide
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-flexible-width="boolean"
    p-hide-close="boolean"
    p-size="string"
    p-subtitle="string"
    p-title="string" >
</po-page-slide>
`),i()(),e(272,"h4",13),t(273,"Propriedades"),i(),e(274,"table",14)(275,"tr",15)(276,"th",16),t(277,"Nome"),i(),e(278,"th",16),t(279,"Tipo"),i(),e(280,"th",16),t(281,"Padr\xE3o"),i(),e(282,"th",16),t(283,"Descri\xE7\xE3o"),i()(),e(284,"tr",17)(285,"td",18)(286,"div",19)(287,"span",20),t(288," p-click-out"),p(289,"br"),i()()(),e(290,"td",21)(291,"code",22),t(292,"boolean"),i()(),e(293,"td",23)(294,"p")(295,"code"),t(296,"false"),i()()(),e(297,"td",24)(298,"em")(299,"strong"),t(300,"(opcional)"),i()(),e(301,"p"),t(302,"Define se permite o encerramento da p\xE1gina ao clicar fora da mesma."),i()()(),e(303,"tr",17)(304,"td",18)(305,"div",25)(306,"span",26),t(307," (p-close)"),p(308,"br"),i()()(),e(309,"td",21)(310,"code",27),t(311,"EventEmitter"),i()(),e(312,"td",23),t(313,"-"),i(),e(314,"td",24)(315,"em")(316,"strong"),t(317,"(opcional)"),i()(),e(318,"p"),t(319,"Evento executado ao fechar o page slide."),i()()(),e(320,"tr",17)(321,"td",18)(322,"div",19)(323,"span",20),t(324," p-flexible-width"),p(325,"br"),i()()(),e(326,"td",21)(327,"code",22),t(328,"boolean"),i()(),e(329,"td",23)(330,"p")(331,"code"),t(332,"false"),i()()(),e(333,"td",24)(334,"em")(335,"strong"),t(336,"(opcional)"),i()(),e(337,"p"),t(338,"Permite a expans\xE3o din\xE2mica da largura do "),e(339,"code"),t(340,"po-page-slide"),i(),t(341," quando "),e(342,"code"),t(343,"p-size"),i(),t(344," for "),e(345,"code"),t(346,"auto"),i(),t(347,` (autom\xE1tico).
Propriedade necess\xE1ria para correto funcionamento da `),e(348,"code"),t(349,"po-table"),i(),t(350," dentro do "),e(351,"code"),t(352,"po-page-slide"),i()()()(),e(353,"tr",17)(354,"td",18)(355,"div",19)(356,"span",20),t(357," p-hide-close"),p(358,"br"),i()()(),e(359,"td",21)(360,"code",22),t(361,"boolean"),i()(),e(362,"td",23)(363,"p")(364,"code"),t(365,"false"),i()()(),e(366,"td",24)(367,"em")(368,"strong"),t(369,"(opcional)"),i()(),e(370,"p"),t(371,"Oculta o bot\xE3o de encerramento da p\xE1gina."),i(),e(372,"p"),t(373,"Esta op\xE7\xE3o s\xF3 \xE9 poss\xEDvel se a propriedade "),e(374,"code"),t(375,"p-click-out"),i(),t(376," estiver habilitada."),i()()(),e(377,"tr",17)(378,"td",18)(379,"div",19)(380,"span",20),t(381," p-size"),p(382,"br"),i()()(),e(383,"td",21)(384,"code",28),t(385,"string"),i()(),e(386,"td",23)(387,"p")(388,"code"),t(389,"md"),i()()(),e(390,"td",24)(391,"em")(392,"strong"),t(393,"(opcional)"),i()(),e(394,"p"),t(395,"Define o tamanho da p\xE1gina."),i(),e(396,"p"),t(397,"Valores v\xE1lidos:"),i(),e(398,"ul")(399,"li")(400,"code"),t(401,"sm"),i(),t(402," (pequeno)"),i(),e(403,"li")(404,"code"),t(405,"md"),i(),t(406," (m\xE9dio)"),i(),e(407,"li")(408,"code"),t(409,"lg"),i(),t(410," (grande)"),i(),e(411,"li")(412,"code"),t(413,"xl"),i(),t(414," (extra-grande)"),i(),e(415,"li")(416,"code"),t(417,"auto"),i(),t(418," (autom\xE1tico)"),i()(),e(419,"blockquote")(420,"p"),t(421,"Todas as op\xE7\xF5es de tamanho, exceto "),e(422,"code"),t(423,"auto"),i(),t(424,", possuem uma largura m\xE1xima de "),e(425,"strong"),t(426,"768px"),i(),t(427,"."),i()()()(),e(428,"tr",17)(429,"td",18)(430,"div",19)(431,"span",20),t(432," p-subtitle"),p(433,"br"),i()()(),e(434,"td",21)(435,"code",28),t(436,"string"),i()(),e(437,"td",23),t(438,"-"),i(),e(439,"td",24)(440,"em")(441,"strong"),t(442,"(opcional)"),i()(),e(443,"p"),t(444,"Subt\xEDtulo da p\xE1gina."),i()()(),e(445,"tr",17)(446,"td",18)(447,"div",19)(448,"span",20),t(449," p-title"),p(450,"br"),i()()(),e(451,"td",21)(452,"code",28),t(453,"string"),i()(),e(454,"td",23),t(455,"-"),i(),e(456,"td",24)(457,"p"),t(458,"T\xEDtulo da p\xE1gina."),i()()()(),e(459,"h3",13),t(460,"M\xE9todos"),i(),e(461,"table",29)(462,"tr",17)(463,"th",30)(464,"div",19)(465,"h4")(466,"span",20),t(467," open "),i()()()()(),e(468,"tr",24)(469,"td",24)(470,"p"),t(471,"Ativa a visualiza\xE7\xE3o da p\xE1gina."),i(),e(472,"p"),t(473,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),e(474,"code"),t(475,"ViewChild"),i(),t(476," da seguinte forma:"),i(),e(477,"pre")(478,"code",31),t(479,`import { PoPageSlideComponent } from '@po/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public openPage() {
  this.pageSlide.open();
}`),i()()()()(),p(480,"br"),e(481,"table",29)(482,"tr",17)(483,"th",30)(484,"div",19)(485,"h4")(486,"span",20),t(487," close "),i()()()()(),e(488,"tr",24)(489,"td",24)(490,"p"),t(491,"Encerra a visualiza\xE7\xE3o da p\xE1gina."),i(),e(492,"p"),t(493,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),e(494,"code"),t(495,"ViewChild"),i(),t(496," da seguinte forma:"),i(),e(497,"pre")(498,"code",31),t(499,`import { PoPageSlideComponent } from '@po-ui/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public closePage() {
  this.pageSlide.close();
}`),i()()()()(),p(500,"br"),i())},dependencies:[w],encapsulation:2})}return o})();var de=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(B(Q),B(I))};static \u0275cmp=u({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Page Slide",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,n){a&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),p(3,"sample-po-page-slide-doc"),i(),e(4,"po-tab",3),p(5,"sample-po-page-slide-basic-view")(6,"sample-po-page-slide-labs-view")(7,"sample-po-page-slide-configuration-view"),i()()()),a&2&&(S("p-actions",n.actions),r(2),S("p-active",n.activeTab.includes("doc")),r(2),S("p-hide",n.hidePoWebSample)("p-active",n.activeTab.includes("web")))},dependencies:[$,x,v,ne,ae,pe,re],encapsulation:2})}return o})();var we=[{path:"",component:de}],me=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=W({type:o});static \u0275inj=L({imports:[N.forChild(we),N]})}return o})();var Qe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=W({type:o});static \u0275inj=L({imports:[ee,me]})}return o})();export{Qe as DocPoPageSlideModule};
