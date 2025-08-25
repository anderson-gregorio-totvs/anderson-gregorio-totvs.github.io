import{o as k,p as oe}from"./chunk-5IWYWWNW.js";import{Db as ie,Ea as te,M as J,O as Z,Y as $,kb as ne,q as X,ra as ee,wb as v,x as F,xb as C,y as D}from"./chunk-G5FNTBUK.js";import{$a as _,Da as W,Db as T,Dc as j,Ea as R,Ec as H,Fc as G,Gc as U,Hc as K,Ia as m,Ja as n,Ka as t,La as l,O as z,Pa as L,Qa as p,R as V,Ra as M,U as u,V as b,Vc as Q,Xc as Y,Zc as I,a as f,ab as e,b as x,cb as g,eb as y,fb as w,gb as P,ka as s,mb as B,pa as N,ra as E,sa as A}from"./chunk-VPXBL5U4.js";var ae=(()=>{class o{onClick(){alert("Po Button!")}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-button-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-label","PO Button",3,"p-click"]],template:function(a,i){a&1&&(n(0,"po-button",0),p("p-click",function(){return i.onClick()}),t())},dependencies:[D],encapsulation:2})}return o})();var ge=o=>({"docs-sample-code-tabs":o}),re=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-button-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Button Basic"),t(),n(4,"a",2),p("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-button-basic/sample-po-button-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-button p-label="PO Button" (p-click)="onClick()"> </po-button>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-button-basic/sample-po-button-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-button-basic',
  templateUrl: './sample-po-button-basic.component.html',
  standalone: false
})
export class SamplePoButtonBasicComponent {
  onClick() {
    alert('Po Button!');
  }
}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-button-basic"),t(),l(23,"hr")),a&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),g(" ",i.sampleCodeButtonLabel),s(),m("ngClass",B(4,ge,i.hideSampleCodeTabs)))},dependencies:[T,k,v,C,ae],encapsulation:2})}return o})();var de=(()=>{class o{poDialog=V($);label;kind;icon;size;properties;type;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"},{value:"danger",label:"Danger"}];iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"an an-user",value:"an an-user"},{label:"fa fa-podcast",value:"fa fa-podcast"}];kindsOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"},{label:"tertiary",value:"tertiary"}];sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}];typeOptions=[{label:"button",value:F.Button},{label:"submit",value:F.Submit},{label:"reset",value:F.Reset}];ngOnInit(){this.restore()}buttonClick(){this.poDialog.alert({title:"PO Button",message:"Hello PO World!!!"})}propertiesChange(r){this.kindsOptions[2]=x(f({},this.kindsOptions[2]),{disabled:!1}),this.sizesOptions[0]=x(f({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=x(f({},this.sizesOptions[1]),{disabled:!1}),r&&r.forEach(a=>{a==="danger"&&this.properties.includes("danger")&&(this.kindsOptions[2]=x(f({},this.kindsOptions[2]),{disabled:!0}))})}verifyDisabled(r){let a=[...this.propertiesOptions];r==="tertiary"?(a[2]={value:"danger",label:"Danger",disabled:!0},this.propertiesOptions=a):(a[2]={value:"danger",label:"Danger",disabled:!1},this.propertiesOptions=a)}restore(){this.label=void 0,this.kind="secondary",this.size="medium",this.icon=void 0,this.type=F.Button,this.properties=[],this.kindsOptions[2]=x(f({},this.kindsOptions[2]),{disabled:!1}),this.sizesOptions[0]=x(f({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=x(f({},this.sizesOptions[1]),{disabled:!1})}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-button-labs"]],standalone:!1,decls:14,vars:19,consts:[["f","ngForm"],[1,"po-row"],[1,"po-sm-12",3,"p-click","p-disabled","p-icon","p-label","p-loading","p-size","p-danger","p-kind","p-type"],["name","label","p-clean","","p-label","Label",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","icon","p-columns","4","p-label","Icon",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","kind","p-columns","4","p-label","Kind",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","type","p-columns","4","p-label","Type",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,i){if(a&1){let c=L();n(0,"div",1)(1,"po-button",2),p("p-click",function(){return u(c),b(i.buttonClick())}),t()(),l(2,"hr"),n(3,"form",null,0)(5,"div",1)(6,"po-input",3),P("ngModelChange",function(d){return u(c),w(i.label,d)||(i.label=d),b(d)}),t()(),n(7,"po-checkbox-group",4),P("ngModelChange",function(d){return u(c),w(i.properties,d)||(i.properties=d),b(d)}),p("p-change",function(d){return u(c),b(i.propertiesChange(d))}),t(),n(8,"po-radio-group",5),P("ngModelChange",function(d){return u(c),w(i.icon,d)||(i.icon=d),b(d)}),t(),n(9,"po-radio-group",6),P("ngModelChange",function(d){return u(c),w(i.kind,d)||(i.kind=d),b(d)}),p("p-change",function(d){return u(c),b(i.verifyDisabled(d))}),t(),n(10,"po-radio-group",7),P("ngModelChange",function(d){return u(c),w(i.type,d)||(i.type=d),b(d)}),t(),n(11,"po-radio-group",8),P("ngModelChange",function(d){return u(c),w(i.size,d)||(i.size=d),b(d)}),p("p-change",function(d){return u(c),b(i.verifyDisabled(d))}),t(),n(12,"div",1)(13,"po-button",9),p("p-click",function(){return u(c),b(i.restore())}),t()()()}a&2&&(s(),m("p-disabled",i.properties.includes("disabled"))("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-size",i.size)("p-danger",i.properties.includes("danger"))("p-kind",i.kind)("p-type",i.type),s(5),y("ngModel",i.label),s(),y("ngModel",i.properties),m("p-options",i.propertiesOptions),s(),y("ngModel",i.icon),m("p-options",i.iconsOptions),s(),y("ngModel",i.kind),m("p-options",i.kindsOptions),s(),y("ngModel",i.type),m("p-options",i.typeOptions),s(),y("ngModel",i.size),m("p-options",i.sizesOptions))},dependencies:[K,j,H,U,G,D,J,Z,te],encapsulation:2})}return o})();var xe=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-button-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Button Labs"),t(),n(4,"a",2),p("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-button-labs/sample-po-button-labs.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-button
    class="po-sm-12"
    [p-disabled]="properties.includes('disabled')"
    [p-icon]="icon"
    [p-label]="label"
    [p-loading]="properties.includes('loading')"
    [p-size]="size"
    [p-danger]="properties.includes('danger')"
    [p-kind]="kind"
    (p-click)="buttonClick()"
    [p-type]="type"
  >
  </po-button>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-lg-6 po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>
  </div>

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
    (p-change)="propertiesChange($event)"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-12"
    name="icon"
    [(ngModel)]="icon"
    p-columns="4"
    p-label="Icon"
    [p-options]="iconsOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-12"
    name="kind"
    [(ngModel)]="kind"
    p-columns="4"
    p-label="Kind"
    [p-options]="kindsOptions"
    (p-change)="verifyDisabled($event)"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-12"
    name="type"
    [(ngModel)]="type"
    p-columns="4"
    p-label="Type"
    [p-options]="typeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizesOptions"
    (p-change)="verifyDisabled($event)"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-button-labs/sample-po-button-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoDialogService, PoButtonType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-labs',
  templateUrl: './sample-po-button-labs.component.html',
  standalone: false
})
export class SamplePoButtonLabsComponent implements OnInit {
  private poDialog = inject(PoDialogService);

  label: string;
  kind: string;
  icon: string;
  size: string;
  properties: Array<string>;
  type: string;

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'loading', label: 'Loading' },
    { value: 'danger', label: 'Danger' }
  ];

  iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-newspaper', value: 'an an-newspaper' },
    { label: 'an an-calendar-dots', value: 'an an-calendar-dots' },
    { label: 'an an-user', value: 'an an-user' },
    { label: 'fa fa-podcast', value: 'fa fa-podcast' }
  ];

  kindsOptions: Array<PoRadioGroupOption> = [
    { label: 'primary', value: 'primary' },
    { label: 'secondary', value: 'secondary' },
    { label: 'tertiary', value: 'tertiary' }
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
    { label: 'large', value: 'large' }
  ];

  typeOptions: Array<PoRadioGroupOption> = [
    { label: 'button', value: PoButtonType.Button },
    { label: 'submit', value: PoButtonType.Submit },
    { label: 'reset', value: PoButtonType.Reset }
  ];

  ngOnInit() {
    this.restore();
  }

  buttonClick() {
    this.poDialog.alert({ title: 'PO Button', message: 'Hello PO World!!!' });
  }

  propertiesChange(event) {
    this.kindsOptions[2] = { ...this.kindsOptions[2], disabled: false };
    this.sizesOptions[0] = { ...this.sizesOptions[0], disabled: false };
    this.sizesOptions[1] = { ...this.sizesOptions[1], disabled: false };

    if (event) {
      event.forEach(property => {
        if (property === 'danger' && this.properties.includes('danger')) {
          this.kindsOptions[2] = { ...this.kindsOptions[2], disabled: true };
        }
      });
    }
  }

  verifyDisabled(event) {
    const value = [...this.propertiesOptions];

    if (event === 'tertiary') {
      value[2] = { value: 'danger', label: 'Danger', disabled: true };
      this.propertiesOptions = value;
    } else {
      value[2] = { value: 'danger', label: 'Danger', disabled: false };
      this.propertiesOptions = value;
    }
  }

  restore() {
    this.label = undefined;
    this.kind = 'secondary';
    this.size = 'medium';
    this.icon = undefined;
    this.type = PoButtonType.Button;
    this.properties = [];
    this.kindsOptions[2] = { ...this.kindsOptions[2], disabled: false };
    this.sizesOptions[0] = { ...this.sizesOptions[0], disabled: false };
    this.sizesOptions[1] = { ...this.sizesOptions[1], disabled: false };
  }
}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-button-labs"),t(),l(23,"hr")),a&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),g(" ",i.sampleCodeButtonLabel),s(),m("ngClass",B(4,xe,i.hideSampleCodeTabs)))},dependencies:[T,k,v,C,de],encapsulation:2})}return o})();function Ce(o,Ee){if(o&1){let r=L();n(0,"div",0),l(1,"po-avatar",2),n(2,"div",3)(3,"span",4),e(4),t(),n(5,"span",5),e(6),t(),n(7,"span",5),e(8),t()()(),n(9,"div",0)(10,"po-button",6),p("p-click",function(){u(r);let i=M();return b(i.notification("added","success"))}),t(),n(11,"po-button",7),p("p-click",function(){u(r);let i=M();return b(i.notification("ignored","warning"))}),t(),n(12,"po-button",8),p("p-click",function(){u(r);let i=M();return b(i.notification("blocked","information"))}),t()()}if(o&2){let r=M();s(),m("p-src",r.userAvatar),s(3),g(" ",r.currentFriend.name," "),s(2),g(" ",r.currentFriend.mutualFriends," mutual friends "),s(2),g(" Resides in ",r.currentFriend.reside," ")}}function ke(o,Ee){o&1&&(n(0,"div",0)(1,"span",9),e(2,"Congratulations Totver, no more requests!"),t()())}var pe=(()=>{class o{poNotification=V(ee);currentFriend;userAvatar="https://lorempixel.com/144/144/";newFriends=[{name:"Mr. Dev PO",mutualFriends:"7",reside:"Mountain View, CA"},{name:"Mr. AI PO",mutualFriends:"99+",reside:"New York City, NY"},{name:"Mr. UX PO",mutualFriends:"14",reside:"Los Angeles, CA"}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0)}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend)}setCurrentFriend(r){this.currentFriend=this.newFriends[r]}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-button-social-network"]],standalone:!1,decls:4,vars:1,consts:[[1,"po-row"],["p-title","Friend Request",1,"po-lg-6"],["p-size","lg",1,"po-md-4",3,"p-src"],[1,"po-md-8"],[1,"po-sm-12","po-font-subtitle"],[1,"po-sm-12","po-font-text"],["p-icon","fa fa-check-circle","p-label","Confirm",1,"po-md-4",3,"p-click"],["p-icon","fa fa-eye-slash","p-label","Ignore",1,"po-md-4",3,"p-click"],["p-icon","fa fa-ban","p-label","Block",1,"po-md-4",3,"p-click"],[1,"po-lg-8","po-font-subtitle"]],template:function(a,i){a&1&&(n(0,"div",0)(1,"po-widget",1),W(2,Ce,13,4)(3,ke,3,0,"div",0),t()()),a&2&&(s(2),R(i.currentFriend?2:3))},dependencies:[X,D,ie],encapsulation:2})}return o})();var we=o=>({"docs-sample-code-tabs":o}),me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-button-social-network-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Button Social Network"),t(),n(4,"a",2),p("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-button-social-network/sample-po-button-social-network.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-widget class="po-lg-6" p-title="Friend Request">
    @if (currentFriend) {
      <div class="po-row">
        <po-avatar class="po-md-4" p-size="lg" [p-src]="userAvatar"> </po-avatar>
        <div class="po-md-8">
          <span class="po-sm-12 po-font-subtitle">
            { { currentFriend.name }}
          </span>
          <span class="po-sm-12 po-font-text"> { { currentFriend.mutualFriends }} mutual friends </span>
          <span class="po-sm-12 po-font-text"> Resides in { { currentFriend.reside }} </span>
        </div>
      </div>
      <div class="po-row">
        <po-button
          class="po-md-4"
          p-icon="fa fa-check-circle"
          p-label="Confirm"
          (p-click)="notification('added', 'success')"
        ></po-button>
        <po-button
          class="po-md-4"
          p-icon="fa fa-eye-slash"
          p-label="Ignore"
          (p-click)="notification('ignored', 'warning')"
        ></po-button>
        <po-button
          class="po-md-4"
          p-icon="fa fa-ban"
          p-label="Block"
          (p-click)="notification('blocked', 'information')"
        ></po-button>
      </div>
    } @else {
      <div class="po-row">
        <span class="po-lg-8 po-font-subtitle">Congratulations Totver, no more requests!</span>
      </div>
    }
  </po-widget>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-button-social-network/sample-po-button-social-network.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-social-network',
  templateUrl: './sample-po-button-social-network.component.html',
  standalone: false
})
export class SamplePoButtonSocialNetworkComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  currentFriend: object;
  userAvatar: string = 'https://lorempixel.com/144/144/';

  public readonly newFriends: Array<object> = [
    { name: 'Mr. Dev PO', mutualFriends: '7', reside: 'Mountain View, CA' },
    { name: 'Mr. AI PO', mutualFriends: '99+', reside: 'New York City, NY' },
    { name: 'Mr. UX PO', mutualFriends: '14', reside: 'Los Angeles, CA' }
  ];

  private indexFriend: number = 0;

  ngOnInit() {
    this.setCurrentFriend(0);
  }

  notification(action: string, notificationType: string) {
    this.poNotification[notificationType](\`User \${action} successfully!\`);

    this.indexFriend++;
    this.setCurrentFriend(this.indexFriend);
  }

  private setCurrentFriend(index: number) {
    this.currentFriend = this.newFriends[index];
  }
}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-button-social-network"),t(),l(23,"hr")),a&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),g(" ",i.sampleCodeButtonLabel),s(),m("ngClass",B(4,we,i.hideSampleCodeTabs)))},dependencies:[T,k,v,C,pe],encapsulation:2})}return o})();var ce=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=E({type:o,selectors:[["sample-po-button-doc"]],standalone:!1,decls:789,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void"],["href","https://po-ui.io/icons"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoButtonType"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(a,i){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoButtonModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-button."),t()(),n(7,"h3",3),e(8,"Componente"),t(),n(9,"h4",4)(10,"code",5),e(11,"PoButtonComponent"),t()(),n(12,"div",2)(13,"p"),e(14,"O "),n(15,"code"),e(16,"po-button"),t(),e(17," permite que o usu\xE1rio execute a\xE7\xF5es predefinidas pelo desenvolvedor."),t(),n(18,"p"),e(19,"Atrav\xE9s dos tipos, \xE9 poss\xEDvel identificar a import\xE2ncia de cada a\xE7\xE3o."),t(),n(20,"h4"),e(21,"Boas pr\xE1ticas"),t(),n(22,"ul")(23,"li"),e(24,"Evite "),n(25,"code"),e(26,"labels"),t(),e(27," extensos que quebram o layout do "),n(28,"code"),e(29,"po-button"),t(),e(30,", use "),n(31,"code"),e(32,"labels"),t(),e(33," diretos, curtos e intuitivos."),t(),n(34,"li"),e(35,"Utilize apenas um "),n(36,"code"),e(37,"po-button"),t(),e(38," configurado como "),n(39,"code"),e(40,"primary"),t(),e(41," por p\xE1gina."),t(),n(42,"li"),e(43,"Para a\xE7\xF5es irrevers\xEDveis use sempre a propriedade "),n(44,"code"),e(45,"p-danger"),t(),e(46,"."),t()(),n(47,"h4"),e(48,"Acessibilidade tratada no componente"),t(),n(49,"p"),e(50,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),t(),n(51,"ul")(52,"li"),e(53,"Quando em foco, o bot\xE3o \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),n(54,"a",6),e(55,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),t()(),n(56,"li"),e(57,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),n(58,"a",7),e(59,"WCAG 2.4.12: Focus Appearance"),t()()(),n(60,"h4"),e(61,"Tokens customiz\xE1veis"),t(),n(62,"p"),e(63,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(64,"blockquote")(65,"p"),e(66,"Para maiores informa\xE7\xF5es, acesse o guia "),n(67,"a",8),e(68,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(69,"."),t()(),n(70,"table")(71,"thead")(72,"tr")(73,"th"),e(74,"Propriedade"),t(),n(75,"th"),e(76,"Descri\xE7\xE3o"),t(),n(77,"th"),e(78,"Valor Padr\xE3o"),t()()(),n(79,"tbody")(80,"tr")(81,"td")(82,"code"),e(83,"--font-family"),t()(),n(84,"td"),e(85,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(86,"td")(87,"code"),e(88,"var(--font-family-theme)"),t()()(),n(89,"tr")(90,"td")(91,"code"),e(92,"--font-size"),t()(),n(93,"td"),e(94,"Tamanho da fonte"),t(),n(95,"td")(96,"code"),e(97,"var(--font-size-default)"),t()()(),n(98,"tr")(99,"td")(100,"code"),e(101,"--font-weight"),t()(),n(102,"td"),e(103,"Peso da fonte"),t(),n(104,"td")(105,"code"),e(106,"var(--font-weight-bold)"),t()()(),n(107,"tr")(108,"td")(109,"code"),e(110,"--line-height"),t()(),n(111,"td"),e(112,"Tamanho da label"),t(),n(113,"td")(114,"code"),e(115,"var(--line-height-none)"),t()()(),n(116,"tr")(117,"td")(118,"code"),e(119,"--border-radius"),t()(),n(120,"td"),e(121,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),t(),n(122,"td")(123,"code"),e(124,"var(--border-radius-md)"),t()()(),n(125,"tr")(126,"td")(127,"code"),e(128,"--border-width"),t()(),n(129,"td"),e(130,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),t(),n(131,"td")(132,"code"),e(133,"var(--border-width-md)"),t()()(),n(134,"tr")(135,"td")(136,"code"),e(137,"--padding"),t()(),n(138,"td"),e(139,"Preenchimento"),t(),n(140,"td")(141,"code"),e(142,"0 1em"),t()()(),n(143,"tr")(144,"td")(145,"strong"),e(146,"Danger"),t()(),l(147,"td")(148,"td"),t(),n(149,"tr")(150,"td")(151,"code"),e(152,"--text-color-danger"),t()(),n(153,"td"),e(154,"Cor do texto no estado danger"),t(),n(155,"td")(156,"code"),e(157,"var(--color-neutral-light-00)"),t()()(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-button-danger"),t()(),n(162,"td"),e(163,"Cor do bot\xE3o no estado danger"),t(),n(164,"td")(165,"code"),e(166,"var(--color-feedback-negative-dark)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--color-danger-hover"),t()(),n(171,"td"),e(172,"Cor de hover no estado danger"),t(),n(173,"td")(174,"code"),e(175,"var(--color-feedback-negative-darker)"),t()()(),n(176,"tr")(177,"td")(178,"code"),e(179,"--color-danger-pressed"),t()(),n(180,"td"),e(181,"Cor pressionada no estado danger"),t(),n(182,"td")(183,"code"),e(184,"var(--color-feedback-negative-darkest)"),t()()(),n(185,"tr")(186,"td")(187,"code"),e(188,"--background-danger-hover"),t()(),n(189,"td"),e(190,"Cor de background de hover no estado danger"),t(),n(191,"td")(192,"code"),e(193,"var(--color-feedback-negative-lighter)"),t()()(),n(194,"tr")(195,"td")(196,"code"),e(197,"--border-color-danger-hover"),t()(),n(198,"td"),e(199,"Cor da borda de hover no estado danger"),t(),n(200,"td")(201,"code"),e(202,"var(--color-feedback-negative-darkest)"),t()()(),n(203,"tr")(204,"td")(205,"code"),e(206,"--background-danger-pressed"),t()(),n(207,"td"),e(208,"Cor de background pressionado no estado danger"),t(),n(209,"td")(210,"code"),e(211,"var(--color-feedback-negative-light)"),t()()(),n(212,"tr")(213,"td")(214,"code"),e(215,"--background-color-button-danger"),t(),e(216,"\xA0"),t(),n(217,"td"),e(218,"Cor de background do bot\xE3o no estado danger"),t(),n(219,"td")(220,"code"),e(221,"var(--color-transparent)"),t()()(),n(222,"tr")(223,"td")(224,"strong"),e(225,"Default Values"),t()(),l(226,"td")(227,"td"),t(),n(228,"tr")(229,"td")(230,"code"),e(231,"--text-color"),t()(),n(232,"td"),e(233,"Cor do texto"),t(),n(234,"td")(235,"code"),e(236,"var(--color-neutral-light-00)"),t()()(),n(237,"tr")(238,"td")(239,"code"),e(240,"--color"),t()(),n(241,"td"),e(242,"Cor principal do bot\xE3o"),t(),n(243,"td")(244,"code"),e(245,"var(--color-action-default)"),t()()(),n(246,"tr")(247,"td")(248,"code"),e(249,"--background-color"),t()(),n(250,"td"),e(251,"Cor de background"),t(),n(252,"td")(253,"code"),e(254,"var(--color-transparent)"),t()()(),n(255,"tr")(256,"td")(257,"code"),e(258,"--border-color"),t()(),n(259,"td"),e(260,"Cor da borda"),t(),n(261,"td")(262,"code"),e(263,"var(--color-transparent)"),t()()(),n(264,"tr")(265,"td")(266,"code"),e(267,"--shadow"),t()(),n(268,"td"),e(269,"Cont\xE9m o valor da sombra do elemento"),t(),n(270,"td")(271,"code"),e(272,"var(--shadow-none)"),t()()(),n(273,"tr")(274,"td")(275,"strong"),e(276,"Hover"),t()(),l(277,"td")(278,"td"),t(),n(279,"tr")(280,"td")(281,"code"),e(282,"--color-hover"),t()(),n(283,"td"),e(284,"Cor principal no estado hover"),t(),n(285,"td")(286,"code"),e(287,"var(--color-action-hover)"),t()()(),n(288,"tr")(289,"td")(290,"code"),e(291,"--background-hover"),t()(),n(292,"td"),e(293,"Cor de background no estado hover"),t(),n(294,"td")(295,"code"),e(296,"var(--color-brand-01-lighter)"),t()()(),n(297,"tr")(298,"td")(299,"code"),e(300,"--border-color-hover"),t()(),n(301,"td"),e(302,"Cor da borda no estado hover"),t(),n(303,"td")(304,"code"),e(305,"var(--color-brand-01-darkest)"),t()()(),n(306,"tr")(307,"td")(308,"strong"),e(309,"Focused"),t()(),l(310,"td")(311,"td"),t(),n(312,"tr")(313,"td")(314,"code"),e(315,"--outline-color-focused"),t()(),n(316,"td"),e(317,"Cor do outline do estado de focus"),t(),n(318,"td")(319,"code"),e(320,"var(--color-action-focus)"),t()()(),n(321,"tr")(322,"td")(323,"strong"),e(324,"Pressed"),t()(),l(325,"td")(326,"td"),t(),n(327,"tr")(328,"td")(329,"code"),e(330,"--color-pressed"),t()(),n(331,"td"),e(332,"Cor principal no estado de pressionado"),t(),n(333,"td")(334,"code"),e(335,"var(--color-action-pressed)"),t()()(),n(336,"tr")(337,"td")(338,"code"),e(339,"--background-pressed"),t()(),n(340,"td"),e(341,"Cor de background no estado de pressionado\xA0"),t(),n(342,"td")(343,"code"),e(344,"var(--color-brand-01-light)"),t()()(),n(345,"tr")(346,"td")(347,"strong"),e(348,"Disabled"),t()(),l(349,"td")(350,"td"),t(),n(351,"tr")(352,"td")(353,"code"),e(354,"--text-color-disabled"),t()(),n(355,"td"),e(356,"Cor do texto no estado disabled"),t(),n(357,"td")(358,"code"),e(359,"var(--color-neutral-dark-70)"),t()()(),n(360,"tr")(361,"td")(362,"code"),e(363,"--color-disabled"),t()(),n(364,"td"),e(365,"Cor principal no estado disabled"),t(),n(366,"td")(367,"code"),e(368,"var(--color-action-disabled)"),t()()(),n(369,"tr")(370,"td")(371,"code"),e(372,"--background-color-disabled"),t()(),n(373,"td"),e(374,"Cor de background no estado disabled"),t(),n(375,"td")(376,"code"),e(377,"var(--color-transparent)"),t()()()()()(),n(378,"div",9)(379,"h4",10),e(380,"Seletor"),t(),n(381,"pre",11),e(382,`<po-button
    p-aria-label="string"
    (p-click)="EventEmitter"
    p-danger="boolean"
    p-disabled="boolean"
    p-icon="string | TemplateRef<void"
    p-kind="string"
    p-label="string"
    p-loading="boolean"
    p-size="string"
    p-type="PoButtonType" >
</po-button>
`),t()(),n(383,"h4",12),e(384,"Propriedades"),t(),n(385,"table",13)(386,"tr",14)(387,"th",15),e(388,"Nome"),t(),n(389,"th",15),e(390,"Tipo"),t(),n(391,"th",15),e(392,"Padr\xE3o"),t(),n(393,"th",15),e(394,"Descri\xE7\xE3o"),t()(),n(395,"tr",16)(396,"td",17)(397,"div",18)(398,"span",19),e(399," p-aria-label"),l(400,"br"),t()()(),n(401,"td",20)(402,"code",21),e(403,"string"),t()(),n(404,"td",22),e(405,"-"),t(),n(406,"td",23)(407,"em")(408,"strong"),e(409,"(opcional)"),t()(),n(410,"p"),e(411,"Define um "),n(412,"code"),e(413,"aria-label"),t(),e(414," para o "),n(415,"code"),e(416,"po-button"),t(),e(417,"."),t(),n(418,"p"),e(419,"Caso esta propriedade n\xE3o seja informada ser\xE1 considerada a label do bot\xE3o."),t(),n(420,"blockquote")(421,"p"),e(422,"Em caso de bot\xF5es com apenas \xEDcone a atribui\xE7\xE3o de valor \xE0 esta propriedade \xE9 muito importante para acessibilidade."),t()()()(),n(423,"tr",16)(424,"td",17)(425,"div",24)(426,"span",25),e(427," (p-click)"),l(428,"br"),t()()(),n(429,"td",20)(430,"code",26),e(431,"EventEmitter"),t()(),n(432,"td",22),e(433,"-"),t(),n(434,"td",23)(435,"p"),e(436,"A\xE7\xE3o que ser\xE1 executada quando o usu\xE1rio clicar sobre o "),n(437,"code"),e(438,"po-button"),t(),e(439,"."),t()()(),n(440,"tr",16)(441,"td",17)(442,"div",18)(443,"span",19),e(444," p-danger"),l(445,"br"),t()()(),n(446,"td",20)(447,"code",27),e(448,"boolean"),t()(),n(449,"td",22),e(450,"-"),t(),n(451,"td",23)(452,"em")(453,"strong"),e(454,"(opcional)"),t()(),n(455,"p"),e(456,"Deve ser usado em a\xE7\xF5es irrevers\xEDveis que o usu\xE1rio precisa ter cuidado ao execut\xE1-la, como a exclus\xE3o de um registro."),t(),n(457,"blockquote")(458,"p"),e(459,"A propriedade "),n(460,"code"),e(461,'p-kind="tertiary"'),t(),e(462," ser\xE1 inativada ao utilizar esta propriedade."),t()()()(),n(463,"tr",16)(464,"td",17)(465,"div",18)(466,"span",19),e(467," p-disabled"),l(468,"br"),t()()(),n(469,"td",20)(470,"code",27),e(471,"boolean"),t()(),n(472,"td",22)(473,"p")(474,"code"),e(475,"false"),t()()(),n(476,"td",23)(477,"em")(478,"strong"),e(479,"(opcional)"),t()(),n(480,"p"),e(481,"Desabilita o "),n(482,"code"),e(483,"po-button"),t(),e(484," e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),t()()(),n(485,"tr",16)(486,"td",17)(487,"div",18)(488,"span",19),e(489," p-icon"),l(490,"br"),t()()(),n(491,"td",20)(492,"code",21),e(493,"string "),t(),n(494,"code",28),e(495," TemplateRef<void"),t()(),n(496,"td",22),e(497,"-"),t(),n(498,"td",23)(499,"em")(500,"strong"),e(501,"(opcional)"),t()(),n(502,"p"),e(503,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),t(),n(504,"p"),e(505,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(506,"a",29),e(507,"Biblioteca de \xEDcones"),t(),e(508,". conforme exemplo abaixo:"),t(),n(509,"pre")(510,"code"),e(511,`<po-button p-icon="an an-user" p-label="PO button"></po-button>
`),t()(),n(512,"p"),e(513,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(514,"em"),e(515,"Font Awesome"),t(),e(516,", da seguinte forma:"),t(),n(517,"pre")(518,"code"),e(519,`<po-button p-icon="fa fa-podcast" p-label="PO button"></po-button>
`),t()(),n(520,"p"),e(521,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(522,"code"),e(523,"TemplateRef"),t(),e(524,", conforme exemplo abaixo:"),t(),n(525,"pre")(526,"code"),e(527,`<po-button [p-icon]="template" p-label="button template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(528,"blockquote")(529,"p"),e(530,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(531,"code"),e(532,"font-size: inherit"),t(),e(533," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(534,"tr",16)(535,"td",17)(536,"div",18)(537,"span",19),e(538," p-kind"),l(539,"br"),t()()(),n(540,"td",20)(541,"code",21),e(542,"string"),t()(),n(543,"td",22)(544,"p")(545,"code"),e(546,"secondary"),t()()(),n(547,"td",23)(548,"em")(549,"strong"),e(550,"(opcional)"),t()(),n(551,"p"),e(552,"Define o estilo visual do componente conforme valores especificados no enum "),n(553,"code"),e(554,"PoButtonKind"),t(),e(555,":"),t(),n(556,"ul")(557,"li")(558,"code"),e(559,"primary"),t(),e(560,": destaca o bot\xE3o, sendo recomendado para a\xE7\xF5es principais."),t(),n(561,"li")(562,"code"),e(563,"secondary"),t(),e(564,": estilo padr\xE3o, ideal para a\xE7\xF5es secund\xE1rias."),t(),n(565,"li")(566,"code"),e(567,"tertiary"),t(),e(568,": exibe o bot\xE3o sem preenchimento no fundo, indicado para a\xE7\xF5es opcionais."),t()()()(),n(569,"tr",16)(570,"td",17)(571,"div",18)(572,"span",19),e(573," p-label"),l(574,"br"),t()()(),n(575,"td",20)(576,"code",21),e(577,"string"),t()(),n(578,"td",22),e(579,"-"),t(),n(580,"td",23)(581,"em")(582,"strong"),e(583,"(opcional)"),t()(),n(584,"p"),e(585,"Label do bot\xE3o."),t()()(),n(586,"tr",16)(587,"td",17)(588,"div",18)(589,"span",19),e(590," p-loading"),l(591,"br"),t()()(),n(592,"td",20)(593,"code",27),e(594,"boolean"),t()(),n(595,"td",22)(596,"p")(597,"code"),e(598,"false"),t()()(),n(599,"td",23)(600,"em")(601,"strong"),e(602,"(opcional)"),t()(),n(603,"p"),e(604,"Exibe um \xEDcone de carregamento \xE0 esquerda do "),n(605,"em"),e(606,"label"),t(),e(607," do bot\xE3o."),t(),n(608,"blockquote")(609,"p"),e(610,"Quando esta propriedade estiver habilitada, desabilitar\xE1 o bot\xE3o."),t()()()(),n(611,"tr",16)(612,"td",17)(613,"div",18)(614,"span",19),e(615," p-size"),l(616,"br"),t()()(),n(617,"td",20)(618,"code",21),e(619,"string"),t()(),n(620,"td",22)(621,"p")(622,"code"),e(623,"medium"),t()()(),n(624,"td",23)(625,"em")(626,"strong"),e(627,"(opcional)"),t()(),n(628,"p"),e(629,"Define o tamanho do componente:"),t(),n(630,"ul")(631,"li")(632,"code"),e(633,"small"),t(),e(634,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(635,"li")(636,"code"),e(637,"medium"),t(),e(638,": altura de 44px."),t(),n(639,"li")(640,"code"),e(641,"large"),t(),e(642,": altura de 56px."),t()(),n(643,"blockquote")(644,"p"),e(645,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(646,"code"),e(647,"medium"),t(),e(648,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(649,"a",30),e(650,"po-theme"),t(),e(651,"."),t()()()(),n(652,"tr",16)(653,"td",17)(654,"div",18)(655,"span",19),e(656," p-type"),l(657,"br"),t()()(),n(658,"td",20)(659,"code",31),e(660,"PoButtonType"),t()(),n(661,"td",22)(662,"p")(663,"code"),e(664,"PoButtonType.Button"),t()()(),n(665,"td",23)(666,"em")(667,"strong"),e(668,"(opcional)"),t()(),n(669,"p"),e(670,"Define o tipo do bot\xE3o."),t()()()(),n(671,"h3",12),e(672,"M\xE9todos"),t(),n(673,"table",32)(674,"tr",16)(675,"th",33)(676,"div",18)(677,"h4")(678,"span",19),e(679," focus "),t()()()()(),n(680,"tr",23)(681,"td",23)(682,"p"),e(683,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(684,"p"),e(685,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(686,"pre")(687,"code"),e(688,`import { PoButtonComponent } from '@po-ui/ng-components';

...

@ViewChild(PoButtonComponent, { static: true }) button: PoButtonComponent;

focusButton() {
  this.button.focus();
}
`),t()()()()(),l(689,"br"),n(690,"h3"),e(691,"Enums"),t(),n(692,"h4",4)(693,"code",5),e(694,"PoButtonKind"),t()(),n(695,"div",2)(696,"p"),e(697,"Estilos dispon\xEDveis do button."),t()(),n(698,"h4",12),e(699,"Propriedades"),t(),n(700,"table",13)(701,"tr",14)(702,"th",15),e(703,"Nome"),t(),n(704,"th",15),e(705,"Descri\xE7\xE3o"),t()(),n(706,"tr",16)(707,"td",17)(708,"div",18)(709,"span",19),e(710," primary"),l(711,"br"),t()()(),n(712,"td",23)(713,"p"),e(714,"Estilo prim\xE1rio, usado para a\xE7\xF5es principais que requerem maior destaque."),t()()(),n(715,"tr",16)(716,"td",17)(717,"div",18)(718,"span",19),e(719," secondary"),l(720,"br"),t()()(),n(721,"td",23)(722,"p"),e(723,"Estilo secund\xE1rio, usado como padr\xE3o, para a\xE7\xF5es comuns."),t()()(),n(724,"tr",16)(725,"td",17)(726,"div",18)(727,"span",19),e(728," tertiary"),l(729,"br"),t()()(),n(730,"td",23)(731,"p"),e(732,"Estilo terci\xE1rio, ideal para a\xE7\xF5es menos importantes, sem fundo preenchido."),t()()()(),n(733,"h4",4)(734,"code",5),e(735,"PoButtonType"),t()(),n(736,"div",2)(737,"p"),e(738,"Enumera\xE7\xE3o que define os tipos poss\xEDveis para o "),n(739,"code"),e(740,"PoButtonComponent"),t(),e(741,`. Estes tipos est\xE3o relacionados ao comportamento
do bot\xE3o quando utilizado dentro de um formul\xE1rio HTML.`),t()(),n(742,"h4",12),e(743,"Propriedades"),t(),n(744,"table",13)(745,"tr",14)(746,"th",15),e(747,"Nome"),t(),n(748,"th",15),e(749,"Descri\xE7\xE3o"),t()(),n(750,"tr",16)(751,"td",17)(752,"div",18)(753,"span",19),e(754," Submit"),l(755,"br"),t()()(),n(756,"td",23)(757,"p"),e(758,"Define o bot\xE3o como do tipo "),n(759,"code"),e(760,"submit"),t(),e(761,`. Quando clicado, o formul\xE1rio \xE9 enviado automaticamente,
disparando o evento `),n(762,"code"),e(763,"submit"),t(),e(764,"."),t()()(),n(765,"tr",16)(766,"td",17)(767,"div",18)(768,"span",19),e(769," Button"),l(770,"br"),t()()(),n(771,"td",23)(772,"p"),e(773,"Define o bot\xE3o como do tipo "),n(774,"code"),e(775,"button"),t(),e(776,`. Este tipo de bot\xE3o n\xE3o possui comportamento padr\xE3o associado
e \xE9 utilizado principalmente para a\xE7\xF5es program\xE1ticas como cliques e disparos de eventos customizados.`),t()()(),n(777,"tr",16)(778,"td",17)(779,"div",18)(780,"span",19),e(781," Reset"),l(782,"br"),t()()(),n(783,"td",23)(784,"p"),e(785,"Define o bot\xE3o como do tipo "),n(786,"code"),e(787,"reset"),t(),e(788,`. Quando clicado, redefine os campos do formul\xE1rio ao qual pertence
para seus valores iniciais.`),t()()()()())},dependencies:[k],encapsulation:2})}return o})();var ue=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(N(Q),N(Y))};static \u0275cmp=E({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Button",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),p("p-click",function(){return i.changeTab("doc")}),l(3,"sample-po-button-doc"),t(),n(4,"po-tab",3),p("p-click",function(){return i.changeTab("web")}),l(5,"sample-po-button-basic-view")(6,"sample-po-button-labs-view")(7,"sample-po-button-social-network-view"),t()()()),a&2&&(m("p-actions",i.actions),s(2),m("p-active",i.activeTab==="doc"),s(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ne,v,C,re,se,me,ce],encapsulation:2})}return o})();var Be=[{path:"",component:ue}],be=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=A({type:o});static \u0275inj=z({imports:[I.forChild(Be),I]})}return o})();var lt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=A({type:o});static \u0275inj=z({imports:[oe,be]})}return o})();export{lt as DocPoButtonModule};
