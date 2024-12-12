import{$ as A,$a as T,$d as ae,F as u,Fa as O,G as b,Ga as n,Ia as h,Ka as S,La as g,Lb as G,Ma as E,Mb as Y,Nb as X,Oa as z,Ob as J,Od as ie,Pa as C,Pb as K,T as p,U as y,Wb as Q,Xd as x,Ya as j,Yb as Z,Yd as D,Zb as N,_ as c,ad as L,bb as U,ea as V,gc as $,ha as s,ka as M,md as ne,na as t,oa as e,oc as ee,pa as l,qa as q,ra as R,re as P,se as le,ta as W,ua as w,va as H,y as F,yc as k,yd as oe,zc as te}from"./chunk-23IW53AA.js";var we=()=>({label:"How to install PO",url:"/guides/how-install"}),Se=o=>[o],re=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-dropdown-basic"]],standalone:!1,decls:1,vars:4,consts:[["p-label","PO Dropdown",3,"p-actions"]],template:function(a,i){a&1&&l(0,"po-dropdown",0),a&2&&s("p-actions",C(2,Se,z(1,we)))},dependencies:[k],encapsulation:2})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-dropdown-basic-view"]],standalone:!1,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","E2E"],["appCodeHighlight","",1,"test"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Dropdown Basic"),e(),t(4,"a",2),w("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-dropdown-basic/sample-po-dropdown-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="[{ label: 'How to install PO', url: '/guides/how-install' }]">
</po-dropdown>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-dropdown-basic/sample-po-dropdown-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-dropdown-basic',
  templateUrl: './sample-po-dropdown-basic.component.html',
  standalone: false
})
export class SamplePoDropdownBasicComponent {}
`),e()()(),t(21,"po-tab",10)(22,"div")(23,"label",6),n(24,"sample-po-dropdown-basic/sample-po-dropdown-basic.component.e2e-spec.ts"),e(),t(25,"pre",11),n(26,`import { SamplePoDropdownBasicComponentPO } from './sample-po-dropdown-basic.component.po';

describe('SamplePoDropdownBasic E2E', () => {
  const dropdown = new SamplePoDropdownBasicComponentPO();

  beforeEach(() => {
    dropdown.navigateTo();
  });

  it('Check if Po Dropdown is present', () => {
    expect(dropdown.poDropdown.isPresent()).toBeTruthy();
  });

  it('Check if Po Dropdown-Content is present', () => {
    dropdown.poDropdown.click();
    expect(dropdown.poDropdownContent.isDisplayed()).toBeTruthy();
  });

  it('Check if Po Dropdown-Content has content ', () => {
    dropdown.poDropdown.click();
    expect(dropdown.poDropdownContent.count()).toBe(5);
  });
});
`),e(),t(27,"label",6),n(28,"sample-po-dropdown-basic/sample-po-dropdown-basic.component.po.ts"),e(),t(29,"pre",11),n(30,`import { browser, by, element } from 'protractor';

export class SamplePoDropdownBasicComponentPO {
  private sampleName = 'sample-po-dropdown-basic';

  navigateTo() {
    return browser.get(browser.baseUrl + '/documentation/po-dropdown?view=web');
  }

  get poDropdown() {
    return element(by.css(\`\${this.sampleName} .dropdown .button-dropdown\`));
  }

  get poDropdownContent() {
    return element.all(by.css(\`\${this.sampleName} .dropdown .dropdown-content li a\`));
  }
}
`),e()()()()(),t(31,"div",12),l(32,"sample-po-dropdown-basic"),e(),l(33,"hr")),a&2&&(p(5),M("po-icon "+i.sampleCodeButtonIcon),p(),h(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",C(4,Ee,i.hideSampleCodeTabs)))},dependencies:[T,P,x,D,re],encapsulation:2})}return o})();var de=(()=>{class o{poNotification;action;actions;label;properties;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];iconOptions=[{value:"ph ph-newspaper",label:"ph ph-newspaper"},{value:"ph ph-magnifying-glass",label:"ph ph-magnifying-glass"},{value:"ph ph-globe",label:"ph ph-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];propertiesOptions=[{value:"disabled",label:"Disabled"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];constructor(r){this.poNotification=r}ngOnInit(){this.restore()}addAction(r){let a=Object.assign({},r);a.action=a.action?this.showAction.bind(this,a.action):void 0,this.actions.push(a),this.restoreActionForm()}restore(){this.actions=[],this.label="PO Dropdown",this.properties=[],this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}showAction(r){this.poNotification.success(`Action clicked: ${r}`)}static \u0275fac=function(a){return new(a||o)(y(L))};static \u0275cmp=c({type:o,selectors:[["sample-po-dropdown-labs"]],standalone:!1,decls:23,vars:16,consts:[["formAction","ngForm"],["f","ngForm"],[1,"po-row"],[1,"po-offset-xl-5","po-offset-lg-5",3,"p-actions","p-disabled","p-label"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-4",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-4",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-3",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-3",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let m=W();t(0,"div",2),l(1,"po-dropdown",3),e(),l(2,"hr"),t(3,"form",null,0)(5,"div",2)(6,"po-input",4),E("ngModelChange",function(d){return u(m),g(i.action.action,d)||(i.action.action=d),b(d)}),e(),t(7,"po-input",5),E("ngModelChange",function(d){return u(m),g(i.action.label,d)||(i.action.label=d),b(d)}),e(),t(8,"po-input",6),E("ngModelChange",function(d){return u(m),g(i.action.url,d)||(i.action.url=d),b(d)}),e()(),t(9,"div",2)(10,"po-select",7),E("ngModelChange",function(d){return u(m),g(i.action.type,d)||(i.action.type=d),b(d)}),e(),t(11,"po-select",8),E("ngModelChange",function(d){return u(m),g(i.action.icon,d)||(i.action.icon=d),b(d)}),e(),t(12,"po-checkbox-group",9),E("ngModelChange",function(d){return u(m),g(i.action,d)||(i.action=d),b(d)}),e()(),t(13,"div",2)(14,"po-button",10),w("p-click",function(){return u(m),b(i.addAction(i.action))}),e()()(),l(15,"hr"),t(16,"form",null,1)(18,"div",2)(19,"po-input",11),E("ngModelChange",function(d){return u(m),g(i.label,d)||(i.label=d),b(d)}),e(),t(20,"po-checkbox-group",12),E("ngModelChange",function(d){return u(m),g(i.properties,d)||(i.properties=d),b(d)}),e()(),t(21,"div",2)(22,"po-button",13),w("p-click",function(){return u(m),b(i.restore())}),e()()()}if(a&2){let m=O(4);p(),s("p-actions",i.actions)("p-disabled",i.properties.includes("disabled"))("p-label",i.label),p(5),S("ngModel",i.action.action),p(),S("ngModel",i.action.label),p(),S("ngModel",i.action.url),p(2),S("ngModel",i.action.type),s("p-options",i.typeOptions),p(),S("ngModel",i.action.icon),s("p-options",i.iconOptions),p(),S("ngModel",i.action),s("p-options",i.actionOptions),p(2),s("p-disabled",m.form.invalid),p(5),S("ngModel",i.label),p(),S("ngModel",i.properties),s("p-options",i.propertiesOptions)}},dependencies:[K,G,Y,J,X,ee,k,te,ne,oe],encapsulation:2})}return o})();var xe=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-dropdown-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Dropdown Labs"),e(),t(4,"a",2),w("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-dropdown-labs/sample-po-dropdown-labs.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-dropdown
    class="po-offset-xl-5 po-offset-lg-5"
    [p-actions]="actions"
    [p-disabled]="properties.includes('disabled')"
    [p-label]="label"
  >
  </po-dropdown>
</div>

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

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label" p-required> </po-input>

    <po-checkbox-group
      class="po-md-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-dropdown-labs/sample-po-dropdown-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoSelectOption, PoDropdownAction, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-labs',
  templateUrl: './sample-po-dropdown-labs.component.html',
  standalone: false
})
export class SamplePoDropdownLabsComponent implements OnInit {
  action: PoDropdownAction;
  actions: Array<PoDropdownAction>;
  label: string;
  properties: Array<string>;

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

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'disabled', label: 'Disabled' }];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoDropdownAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions.push(newAction);

    this.restoreActionForm();
  }

  restore() {
    this.actions = [];
    this.label = 'PO Dropdown';
    this.properties = [];
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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-dropdown-labs"),e(),l(23,"hr")),a&2&&(p(5),M("po-icon "+i.sampleCodeButtonIcon),p(),h(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",C(4,xe,i.hideSampleCodeTabs)))},dependencies:[T,P,x,D,de],encapsulation:2})}return o})();function Pe(o,fe){if(o&1&&(q(0),t(1,"div",1),l(2,"po-avatar",4),t(3,"div",5)(4,"span",6),n(5),e(),t(6,"span",7),n(7),e(),t(8,"span",7),n(9),e()()(),t(10,"div",1),l(11,"po-dropdown",8),e(),R()),o&2){let r=H();p(2),s("p-src",r.userAvatar),p(3),h(" ",r.currentFriend.name," "),p(2),h(" ",r.currentFriend.mutualFriends," mutual friends "),p(2),h(" Resides in ",r.currentFriend.reside," "),p(2),s("p-actions",r.answers)}}function ye(o,fe){o&1&&(t(0,"div",1)(1,"span",9),n(2,"Congratulations Totver, no more requests!"),e()())}var me=(()=>{class o{poNotification;currentFriend;userAvatar="https://lorempixel.com/144/144/";answers=[{label:"Confirm",action:this.notification.bind(this,"added","success")},{label:"Ignore",action:this.notification.bind(this,"ignored","warning")},{label:"Block",action:this.notification.bind(this,"blocked","information")}];newFriends=[{name:"Mr. Dev PO",mutualFriends:"7",reside:"Mountain View, CA"},{name:"Mr. AI PO",mutualFriends:"99+",reside:"New York City, NY"},{name:"Mr. UX PO",mutualFriends:"14",reside:"Los Angeles, CA"}];indexFriend=0;constructor(r){this.poNotification=r}ngOnInit(){this.setCurrentFriend(0)}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend)}setCurrentFriend(r){this.currentFriend=this.newFriends[r]}static \u0275fac=function(a){return new(a||o)(y(L))};static \u0275cmp=c({type:o,selectors:[["sample-po-dropdown-social-network"]],standalone:!1,decls:5,vars:2,consts:[["noMoreRequest",""],[1,"po-row"],["p-title","Friend Request",1,"po-lg-6"],[4,"ngIf","ngIfElse"],["p-size","lg",1,"po-md-4",3,"p-src"],[1,"po-md-8"],[1,"po-sm-12","po-font-subtitle"],[1,"po-sm-12","po-font-text"],["p-label","Add as friend?",1,"po-lg-8","po-offset-md-4","po-offset-lg-4","po-offset-xl-4",3,"p-actions"],[1,"po-lg-8","po-font-subtitle"]],template:function(a,i){if(a&1&&(t(0,"div",1)(1,"po-widget",2),V(2,Pe,12,5,"ng-container",3)(3,ye,3,0,"ng-template",null,0,j),e()()),a&2){let m=O(4);p(2),s("ngIf",i.currentFriend)("ngIfElse",m)}},dependencies:[U,$,k,ae],encapsulation:2})}return o})();var Te=o=>({"docs-sample-code-tabs":o}),ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-dropdown-social-network-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Dropdown - Social Network"),e(),t(4,"a",2),w("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-widget class="po-lg-6" p-title="Friend Request">
    <ng-container *ngIf="currentFriend; else noMoreRequest">
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
        <po-dropdown
          class="po-lg-8 po-offset-md-4 po-offset-lg-4 po-offset-xl-4"
          p-label="Add as friend?"
          [p-actions]="answers"
        >
        </po-dropdown>
      </div>
    </ng-container>

    <ng-template #noMoreRequest>
      <div class="po-row">
        <span class="po-lg-8 po-font-subtitle">Congratulations Totver, no more requests!</span>
      </div>
    </ng-template>
  </po-widget>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-social-network',
  templateUrl: './sample-po-dropdown-social-network.component.html',
  standalone: false
})
export class SamplePoDropdownSocialNetworkComponent implements OnInit {
  currentFriend: object;
  userAvatar: string = 'https://lorempixel.com/144/144/';

  public readonly answers: Array<object> = [
    { label: 'Confirm', action: this.notification.bind(this, 'added', 'success') },
    { label: 'Ignore', action: this.notification.bind(this, 'ignored', 'warning') },
    { label: 'Block', action: this.notification.bind(this, 'blocked', 'information') }
  ];

  public readonly newFriends: Array<object> = [
    { name: 'Mr. Dev PO', mutualFriends: '7', reside: 'Mountain View, CA' },
    { name: 'Mr. AI PO', mutualFriends: '99+', reside: 'New York City, NY' },
    { name: 'Mr. UX PO', mutualFriends: '14', reside: 'Los Angeles, CA' }
  ];

  private indexFriend: number = 0;

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.setCurrentFriend(0);
  }

  private notification(action: string, notificationType: string) {
    this.poNotification[notificationType](\`User \${action} successfully!\`);

    this.indexFriend++;
    this.setCurrentFriend(this.indexFriend);
  }

  private setCurrentFriend(index: number) {
    this.currentFriend = this.newFriends[index];
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-dropdown-social-network"),e(),l(23,"hr")),a&2&&(p(5),M("po-icon "+i.sampleCodeButtonIcon),p(),h(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",C(4,Te,i.hideSampleCodeTabs)))},dependencies:[T,P,x,D,me],encapsulation:2})}return o})();var ue=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-dropdown-doc"]],standalone:!1,decls:488,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/getting-started"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoDropdownAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoDropdownModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,"M\xF3dulo do componente po-dropdown."),e()(),t(7,"h3",3),n(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),n(11,"PoDropdownComponent"),e()(),t(12,"div",2)(13,"p"),n(14,"O componente "),t(15,"code"),n(16,"po-dropdown"),e(),n(17," pode ser utilizado como um agrupador de a\xE7\xF5es e / ou op\xE7\xF5es."),e(),t(18,"blockquote")(19,"p"),n(20,"Caso n\xE3o haja configura\xE7\xE3o de rotas em sua aplica\xE7\xE3o, se faz necess\xE1rio importar o "),t(21,"code"),n(22,"RouterModule"),e(),n(23,`
no m\xF3dulo principal para o correto funcionamento deste componente:`),e()(),t(24,"pre")(25,"code"),n(26,`import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    ...
    RouterModule.forRoot([]),
    PoModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }`),e()(),t(27,"blockquote")(28,"p"),n(29,`Para maiores d\xFAvidas referente \xE0 configura\xE7\xE3o de rotas, acesse em nosso portal /Guias /Come\xE7ando
`),t(30,"a",6),n(31,"/Configurando as rotas do po-menu"),e(),n(32,"."),e()(),t(33,"h4",7),n(34,"Tokens customiz\xE1veis"),e(),t(35,"p"),n(36,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(37,"blockquote")(38,"p"),n(39,"Para maiores informa\xE7\xF5es, acesse o guia "),t(40,"a",8),n(41,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(42,"."),e()(),t(43,"table")(44,"thead")(45,"tr")(46,"th"),n(47,"Propriedade"),e(),t(48,"th"),n(49,"Descri\xE7\xE3o"),e(),t(50,"th"),n(51,"Valor Padr\xE3o"),e()()(),t(52,"tbody")(53,"tr")(54,"td")(55,"strong"),n(56,"Default Values"),e()(),l(57,"td")(58,"td"),e(),t(59,"tr")(60,"td")(61,"code"),n(62,"--font-family"),e()(),t(63,"td"),n(64,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(65,"td")(66,"code"),n(67,"var(--font-family-theme)"),e()()(),t(68,"tr")(69,"td")(70,"code"),n(71,"--font-size"),e()(),t(72,"td"),n(73,"Tamanho da fonte"),e(),t(74,"td")(75,"code"),n(76,"var(--font-size-default)"),e()()(),t(77,"tr")(78,"td")(79,"code"),n(80,"--font-weight"),e()(),t(81,"td"),n(82,"Peso da fonte"),e(),t(83,"td")(84,"code"),n(85,"var(--font-weight-bold)"),e()()(),t(86,"tr")(87,"td")(88,"code"),n(89,"--line-height"),e()(),t(90,"td"),n(91,"Tamanho da label"),e(),t(92,"td")(93,"code"),n(94,"var(--line-height-none)"),e()()(),t(95,"tr")(96,"td")(97,"code"),n(98,"--color"),e()(),t(99,"td"),n(100,"Cor principal do dropdown"),e(),t(101,"td")(102,"code"),n(103,"var(--color-action-default)"),e()()(),t(104,"tr")(105,"td")(106,"code"),n(107,"--border-radius"),e()(),t(108,"td"),n(109,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),t(110,"td")(111,"code"),n(112,"var(--border-radius-md)"),e()()(),t(113,"tr")(114,"td")(115,"code"),n(116,"--border-width"),e()(),t(117,"td"),n(118,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),e(),t(119,"td")(120,"code"),n(121,"var(--border-width-md)"),e()()(),t(122,"tr")(123,"td")(124,"code"),n(125,"--padding"),e()(),t(126,"td"),n(127,"Preenchimento"),e(),t(128,"td")(129,"code"),n(130,"0 1em"),e()()(),t(131,"tr")(132,"td")(133,"strong"),n(134,"Hover"),e()(),l(135,"td")(136,"td"),e(),t(137,"tr")(138,"td")(139,"code"),n(140,"--color-hover"),e()(),t(141,"td"),n(142,"Cor principal no estado hover"),e(),t(143,"td")(144,"code"),n(145,"var(--color-brand-01-darkest)"),e()()(),t(146,"tr")(147,"td")(148,"code"),n(149,"--background-hover"),e()(),t(150,"td"),n(151,"Cor de background no estado hover"),e(),t(152,"td")(153,"code"),n(154,"var(--color-brand-01-lighter)"),e()()(),t(155,"tr")(156,"td")(157,"strong"),n(158,"Focused"),e()(),l(159,"td")(160,"td"),e(),t(161,"tr")(162,"td")(163,"code"),n(164,"--outline-color-focused"),e(),n(165," \xA0"),e(),t(166,"td"),n(167,"Cor do outline do estado de focus"),e(),t(168,"td")(169,"code"),n(170,"var(--color-action-focus)"),e()()(),t(171,"tr")(172,"td")(173,"strong"),n(174,"Pressed"),e()(),l(175,"td")(176,"td"),e(),t(177,"tr")(178,"td")(179,"code"),n(180,"--background-pressed"),e(),n(181," \xA0"),e(),t(182,"td"),n(183,"Cor de background no estado de pressionado\xA0"),e(),t(184,"td")(185,"code"),n(186,"var(--color-brand-01-light)"),e()()(),t(187,"tr")(188,"td")(189,"strong"),n(190,"Disabled"),e()(),l(191,"td")(192,"td"),e(),t(193,"tr")(194,"td")(195,"code"),n(196,"--color-disabled"),e()(),t(197,"td"),n(198,"Cor principal no estado disabled"),e(),t(199,"td")(200,"code"),n(201,"var(--color-action-disabled)"),e()()()()()(),t(202,"div",9)(203,"h4",10),n(204,"Seletor"),e(),t(205,"pre",11),n(206,`<po-dropdown
    p-actions="PoDropdownAction[]"
    p-disabled="boolean"
    p-label="string" >
</po-dropdown>
`),e()(),t(207,"h4",12),n(208,"Propriedades"),e(),t(209,"table",13)(210,"tr",14)(211,"th",15),n(212,"Nome"),e(),t(213,"th",15),n(214,"Tipo"),e(),t(215,"th",15),n(216,"Padr\xE3o"),e(),t(217,"th",15),n(218,"Descri\xE7\xE3o"),e()(),t(219,"tr",16)(220,"td",17)(221,"div",18)(222,"span",19),n(223," p-actions"),l(224,"br"),e()()(),t(225,"td",20)(226,"code",21),n(227,"PoDropdownAction[]"),e()(),t(228,"td",22),n(229,"-"),e(),t(230,"td",23)(231,"p"),n(232,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),e()()(),t(233,"tr",16)(234,"td",17)(235,"div",18)(236,"span",19),n(237," p-disabled"),l(238,"br"),e()()(),t(239,"td",20)(240,"code",24),n(241,"boolean"),e()(),t(242,"td",22)(243,"p")(244,"code"),n(245,"false"),e()()(),t(246,"td",23)(247,"em")(248,"strong"),n(249,"(opcional)"),e()(),t(250,"p"),n(251,"Desabilita o campo."),e()()(),t(252,"tr",16)(253,"td",17)(254,"div",18)(255,"span",19),n(256," p-label"),l(257,"br"),e()()(),t(258,"td",20)(259,"code",25),n(260,"string"),e()(),t(261,"td",22),n(262,"-"),e(),t(263,"td",23)(264,"p"),n(265,"Adiciona um r\xF3tulo ao "),t(266,"code"),n(267,"dropdown"),e(),n(268,"."),e()()()(),t(269,"h3"),n(270,"Interfaces"),e(),t(271,"h4",26)(272,"code",5),n(273,"PoDropdownAction"),e()(),t(274,"div",2)(275,"p"),n(276,"Interface para lista de a\xE7\xF5es do componente. Interface do componente po-dropdown"),e()(),t(277,"h4",12),n(278,"Propriedades"),e(),t(279,"table",13)(280,"tr",14)(281,"th",15),n(282,"Nome"),e(),t(283,"th",15),n(284,"Tipo"),e(),t(285,"th",15),n(286,"Descri\xE7\xE3o"),e()(),t(287,"tr",16)(288,"td",17)(289,"div",18)(290,"span",19),n(291," action"),l(292,"br"),e()()(),t(293,"td",20)(294,"code",27),n(295,"Function"),e()(),t(296,"td",23)(297,"em")(298,"strong"),n(299,"(opcional)"),e()(),t(300,"p"),n(301,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),e(),t(302,"blockquote")(303,"p"),n(304,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),t(305,"em"),n(306,"bind"),e(),n(307,"."),e()(),t(308,"p"),n(309,"Exemplo: "),t(310,"code"),n(311,"action: this.myFunction.bind(this)"),e()()()(),t(312,"tr",16)(313,"td",17)(314,"div",18)(315,"span",19),n(316," disabled"),l(317,"br"),e()()(),t(318,"td",20)(319,"code",24),n(320,"boolean "),e(),t(321,"code",27),n(322," Function"),e()(),t(323,"td",23)(324,"em")(325,"strong"),n(326,"(opcional)"),e()(),t(327,"p"),n(328,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),e(),t(329,"p"),n(330,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),e()()(),t(331,"tr",16)(332,"td",17)(333,"div",18)(334,"span",19),n(335," icon"),l(336,"br"),e()()(),t(337,"td",20)(338,"code",25),n(339,"string "),e(),t(340,"code",28),n(341," TemplateRef<void>"),e()(),t(342,"td",23)(343,"em")(344,"strong"),n(345,"(opcional)"),e()(),t(346,"p"),n(347,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),e(),t(348,"p"),n(349,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(350,"a",29),n(351,"Biblioteca de \xEDcones"),e(),n(352,". conforme exemplo abaixo:"),e(),t(353,"pre")(354,"code"),n(355,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'ph ph-newspaper' }]">
</po-component>`),e()(),t(356,"p"),n(357,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),e(),t(358,"pre")(359,"code"),n(360,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>`),e()(),t(361,"p"),n(362,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(363,"code"),n(364,"TemplateRef"),e(),n(365,`, conforme exemplo abaixo:
component.html:`),e(),t(366,"pre")(367,"code"),n(368,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>`),e()(),t(369,"p"),n(370,"component.ts:"),e(),t(371,"pre")(372,"code"),n(373,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];`),e()()()(),t(374,"tr",16)(375,"td",17)(376,"div",18)(377,"span",19),n(378," label"),l(379,"br"),e()()(),t(380,"td",20)(381,"code",25),n(382,"string"),e()(),t(383,"td",23)(384,"p"),n(385,"R\xF3tulo da a\xE7\xE3o."),e()()(),t(386,"tr",16)(387,"td",17)(388,"div",18)(389,"span",19),n(390," selected"),l(391,"br"),e()()(),t(392,"td",20)(393,"code",24),n(394,"boolean"),e()(),t(395,"td",23)(396,"em")(397,"strong"),n(398,"(opcional)"),e()(),t(399,"p"),n(400,"Define se a a\xE7\xE3o est\xE1 selecionada."),e()()(),t(401,"tr",16)(402,"td",17)(403,"div",18)(404,"span",19),n(405," separator"),l(406,"br"),e()()(),t(407,"td",20)(408,"code",24),n(409,"boolean"),e()(),t(410,"td",23)(411,"em")(412,"strong"),n(413,"(opcional)"),e()(),t(414,"p"),n(415,"Atribui uma linha separadora acima do item."),e()()(),t(416,"tr",16)(417,"td",17)(418,"div",18)(419,"span",19),n(420," type"),l(421,"br"),e()()(),t(422,"td",20)(423,"code",25),n(424,"string"),e()(),t(425,"td",23)(426,"em")(427,"strong"),n(428,"(opcional)"),e()(),t(429,"p"),n(430,"Define a cor do item, sendo "),t(431,"code"),n(432,"default"),e(),n(433," o padr\xE3o."),e(),t(434,"p"),n(435,"Valores v\xE1lidos:"),e(),t(436,"ul")(437,"li")(438,"code"),n(439,"default"),e()(),t(440,"li")(441,"code"),n(442,"danger"),e(),n(443," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),e()()()(),t(444,"tr",16)(445,"td",17)(446,"div",18)(447,"span",19),n(448," url"),l(449,"br"),e()()(),t(450,"td",20)(451,"code",25),n(452,"string"),e()(),t(453,"td",23)(454,"em")(455,"strong"),n(456,"(opcional)"),e()(),t(457,"p"),n(458,"URL utilizada no redirecionamento das p\xE1ginas."),e()()(),t(459,"tr",16)(460,"td",17)(461,"div",18)(462,"span",19),n(463," visible"),l(464,"br"),e()()(),t(465,"td",20)(466,"code",24),n(467,"boolean "),e(),t(468,"code",27),n(469," Function"),e()(),t(470,"td",23)(471,"em")(472,"strong"),n(473,"(opcional)"),e()(),t(474,"p"),n(475,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),e(),t(476,"blockquote")(477,"p"),n(478,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),e()(),t(479,"p"),n(480,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),e(),t(481,"ul")(482,"li")(483,"p"),n(484,"Fun\xE7\xE3o que deve retornar um booleano."),e()(),t(485,"li")(486,"p"),n(487,"Informar diretamente um valor booleano."),e()()()()()()())},dependencies:[P],encapsulation:2})}return o})();var be=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(y(Q),y(Z))};static \u0275cmp=c({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Dropdown",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,i){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),l(3,"sample-po-dropdown-doc"),e(),t(4,"po-tab",3),l(5,"sample-po-dropdown-basic-view")(6,"sample-po-dropdown-labs-view")(7,"sample-po-dropdown-social-network-view"),e()()()),a&2&&(s("p-actions",i.actions),p(2),s("p-active",i.activeTab.includes("doc")),p(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[ie,x,D,pe,se,ce,ue],encapsulation:2})}return o})();var Fe=[{path:"",component:be}],he=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=A({type:o});static \u0275inj=F({imports:[N.forChild(Fe),N]})}return o})();var nt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=A({type:o});static \u0275inj=F({imports:[le,he]})}return o})();export{nt as DocPoDropdownModule};
