import{$ as N,$a as _,$c as k,$d as z,Bc as ee,Cd as oe,F as u,G as b,Ga as o,Ha as R,Ia as O,Ka as g,La as w,Lb as M,Ma as v,Mb as B,Nb as W,Ob as H,Od as ie,Pa as T,Pb as D,Sb as Y,T as p,Tb as Q,U as x,Vb as $,Wb as J,Xd as C,Yb as X,Yd as E,Zb as U,_ as d,_c as F,ad as q,gd as G,ha as m,ka as y,md as te,na as t,oa as e,oc as I,pa as l,re as P,se as ne,ta as A,ua as h,y as V,zc as Z}from"./chunk-23IW53AA.js";var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-switch-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","switch","p-label","PO Switch"]],template:function(a,i){a&1&&l(0,"po-switch",0)},dependencies:[k],encapsulation:2})}return n})();var ge=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-switch-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Switch Basic"),e(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-switch-basic/sample-po-switch-basic.component.html"),e(),t(13,"pre",7),o(14,`<po-switch name="switch" p-label="PO Switch"> </po-switch>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-switch-basic/sample-po-switch-basic.component.ts"),e(),t(19,"pre",9),o(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-switch-basic',
  templateUrl: './sample-po-switch-basic.component.html',
  standalone: false
})
export class SamplePoSwitchBasicComponent {}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-switch-basic"),e(),l(23,"hr")),a&2&&(p(5),y("po-icon "+i.sampleCodeButtonIcon),p(),O(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",T(4,ge,i.hideSampleCodeTabs)))},dependencies:[_,P,C,E,ae],encapsulation:2})}return n})();var re=(()=>{class n{event;help;label;labelOff;labelOn;labelPosition;properties;switch;labelPositionOptions=[{label:"Left",value:F.Left},{label:"Right",value:F.Right}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"formatModel",label:"Format Model"},{value:"hideLabelStatus",label:"Hide label status"}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}restore(){this.event="",this.help=void 0,this.label=void 0,this.labelOn="",this.labelOff="",this.labelPosition=void 0,this.properties=[],this.switch=void 0}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-switch-labs"]],standalone:!1,decls:19,vars:19,consts:[["f","ngForm"],["name","switch",3,"ngModelChange","p-change","ngModel","p-disabled","p-help","p-label","p-label-off","p-label-on","p-label-position","p-format-model","p-hide-label-status"],[1,"po-row"],["p-label","Model",1,"po-lg-6",3,"p-value"],["p-label","Event",1,"po-lg-6",3,"p-value"],["name","label","p-label","Label",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","labelOff","p-help","Text displayed when PO Switch is set to 'false'","p-label","Label Off",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","labelOn","p-help","Text displayed when PO Switch is set to 'true'","p-label","Label On",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","labelPosition","p-label","Label Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let c=A();t(0,"po-switch",1),v("ngModelChange",function(s){return u(c),w(i.switch,s)||(i.switch=s),b(s)}),h("p-change",function(){return u(c),b(i.changeEvent("p-change"))}),e(),l(1,"hr"),t(2,"div",2),l(3,"po-info",3)(4,"po-info",4),e(),l(5,"hr"),t(6,"form",null,0)(8,"div",2)(9,"po-input",5),v("ngModelChange",function(s){return u(c),w(i.label,s)||(i.label=s),b(s)}),e(),t(10,"po-input",6),v("ngModelChange",function(s){return u(c),w(i.help,s)||(i.help=s),b(s)}),e()(),t(11,"div",2)(12,"po-input",7),v("ngModelChange",function(s){return u(c),w(i.labelOff,s)||(i.labelOff=s),b(s)}),e(),t(13,"po-input",8),v("ngModelChange",function(s){return u(c),w(i.labelOn,s)||(i.labelOn=s),b(s)}),e()(),t(14,"div",2)(15,"po-radio-group",9),v("ngModelChange",function(s){return u(c),w(i.labelPosition,s)||(i.labelPosition=s),b(s)}),e(),t(16,"po-checkbox-group",10),v("ngModelChange",function(s){return u(c),w(i.properties,s)||(i.properties=s),b(s)}),e()(),t(17,"div",2)(18,"po-button",11),h("p-click",function(){return u(c),b(i.restore())}),e()()()}a&2&&(g("ngModel",i.switch),m("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-label-off",i.labelOff)("p-label-on",i.labelOn)("p-label-position",i.labelPosition)("p-format-model",i.properties.includes("formatModel"))("p-hide-label-status",i.properties.includes("hideLabelStatus")),p(3),m("p-value",i.switch),p(),m("p-value",i.event),p(5),g("ngModel",i.label),p(),g("ngModel",i.help),p(2),g("ngModel",i.labelOff),p(),g("ngModel",i.labelOn),p(2),g("ngModel",i.labelPosition),m("p-options",i.labelPositionOptions),p(),g("ngModel",i.properties),m("p-options",i.propertiesOptions))},dependencies:[D,M,B,H,W,I,Z,ee,te,k,oe],encapsulation:2})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-switch-labs-view"]],standalone:!1,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","E2E"],["appCodeHighlight","",1,"test"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Switch Labs"),e(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-switch-labs/sample-po-switch-labs.component.html"),e(),t(13,"pre",7),o(14,`<po-switch
  name="switch"
  [(ngModel)]="switch"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-label-off]="labelOff"
  [p-label-on]="labelOn"
  [p-label-position]="labelPosition"
  [p-format-model]="properties.includes('formatModel')"
  [p-hide-label-status]="properties.includes('hideLabelStatus')"
  (p-change)="changeEvent('p-change')"
>
</po-switch>

<hr />

<div class="po-row">
  <po-info class="po-lg-6" p-label="Model" [p-value]="switch"> </po-info>

  <po-info class="po-lg-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-lg-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

    <po-input class="po-lg-6" name="help" [(ngModel)]="help" p-label="Help"> </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="labelOff"
      [(ngModel)]="labelOff"
      p-help="Text displayed when PO Switch is set to 'false'"
      p-label="Label Off"
    >
    </po-input>

    <po-input
      class="po-lg-6"
      name="labelOn"
      [(ngModel)]="labelOn"
      p-help="Text displayed when PO Switch is set to 'true'"
      p-label="Label On"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-6"
      name="labelPosition"
      [(ngModel)]="labelPosition"
      p-label="Label Position"
      [p-options]="labelPositionOptions"
    >
    </po-radio-group>

    <po-checkbox-group
      class="po-lg-6"
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
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-switch-labs/sample-po-switch-labs.component.ts"),e(),t(19,"pre",9),o(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSwitchLabelPosition } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-labs',
  templateUrl: './sample-po-switch-labs.component.html',
  standalone: false
})
export class SamplePoSwitchLabsComponent implements OnInit {
  event: string;
  help: string;
  label: string;
  labelOff: string;
  labelOn: string;
  labelPosition: PoSwitchLabelPosition;
  properties: Array<string>;
  switch: boolean;

  public readonly labelPositionOptions: Array<PoRadioGroupOption> = [
    { label: 'Left', value: PoSwitchLabelPosition.Left },
    { label: 'Right', value: PoSwitchLabelPosition.Right }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'formatModel', label: 'Format Model' },
    { value: 'hideLabelStatus', label: 'Hide label status' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.event = '';
    this.help = undefined;
    this.label = undefined;
    this.labelOn = '';
    this.labelOff = '';
    this.labelPosition = undefined;
    this.properties = [];
    this.switch = undefined;
  }
}
`),e()()(),t(21,"po-tab",10)(22,"div")(23,"label",6),o(24,"sample-po-switch-labs/sample-po-switch-labs.component.e2e-spec.ts"),e(),t(25,"pre",11),o(26,`import { PoSwitchPage } from './sample-po-switch-labs.component.po';

describe('Po-Switch E2E', () => {
  const page: PoSwitchPage = new PoSwitchPage();

  beforeEach(() => {
    page.navigateTo();
  });

  it('Verify if switch is clickable', () => {
    page.poSwitch.click();
    expect(page.poSwitch.getAttribute('class')).toContain('po-switch-container-off');
    page.poSwitch.click();
    expect(page.poSwitch.getAttribute('class')).toContain('po-switch-container-on');
  });

  it('Switch disable', () => {
    page.poCheckboxDisabled.click();
    expect(page.poSwitch.getAttribute('class')).toContain('po-switch-container-disabled');
  });

  it('Change the switch label', () => {
    page.poInputLabelSwitch.clear();
    page.poInputLabelSwitch.sendKeys('My Label');
    expect(page.poFieldTitle.getText()).toContain('My Label');
  });

  it('Change the Label On', () => {
    page.poInputLabelOn.clear();
    page.poInputLabelOn.sendKeys('Here is On!');
    expect(page.poSwitchLabel.getText()).toContain('Here is On!');
  });

  it('Change the Label Off', () => {
    page.poInputLabelOff.clear();
    page.poInputLabelOff.sendKeys('Here is Off!');
    page.poSwitch.click();
    expect(page.poSwitchLabel.getText()).toContain('Here is Off!');
  });

  it('Trun on required Switch', () => {
    expect(page.poFieldOptional.isPresent()).toBeTruthy();
    page.poCheckboxRequired.click();
    expect(page.poFieldOptional.isPresent()).toBeFalsy();
  });
});
`),e(),t(27,"label",6),o(28,"sample-po-switch-labs/sample-po-switch-labs.component.po.ts"),e(),t(29,"pre",11),o(30,`import { browser, by, element } from 'protractor';

export class PoSwitchPage {
  private sampleSwitch = 'sample-po-switch-labs';

  private boxLabel = '.po-checkbox-group-label';

  private _poSwitch;

  get poSwitch() {
    if (!this._poSwitch) {
      this._poSwitch = element(by.css(\`\${this.sampleSwitch} .po-switch-container\`));
    }
    return this._poSwitch;
  }

  get poCheckboxDisabled() {
    return this.getPoCheckBox('disabled');
  }

  get poInputLabelSwitch() {
    return this.getPoInputLabel('label');
  }

  get poInputLabelOn() {
    return this.getPoInputLabel('labelOn');
  }

  get poInputLabelOff() {
    return this.getPoInputLabel('labelOff');
  }

  get poFieldTitle() {
    return element(by.css(\`\${this.sampleSwitch} .po-label\`));
  }

  get poSwitchLabel() {
    return element(by.css(\`\${this.sampleSwitch} .po-switch[name="poSwitch"] .po-switch-label\`));
  }

  get poFieldOptional() {
    return element(by.css(\`\${this.sampleSwitch} po-switch .po-label-requirement\`));
  }

  navigateTo() {
    return browser.get(browser.baseUrl + '/documentation/po-switch?view=web');
  }

  private getPoCheckBox(checkbox: string) {
    return element(
      by.css(\`\${this.sampleSwitch} [name="properties"] .po-checkbox-group-input[value="\${checkbox}"]+\${this.boxLabel}\`)
    );
  }

  private getPoInputLabel(labelName) {
    return element(by.css(\`\${this.sampleSwitch} po-input [name="\${labelName}"]\`));
  }
}
`),e()()()()(),t(31,"div",12),l(32,"sample-po-switch-labs"),e(),l(33,"hr")),a&2&&(p(5),y("po-icon "+i.sampleCodeButtonIcon),p(),O(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",T(4,Ce,i.hideSampleCodeTabs)))},dependencies:[_,P,C,E,re],encapsulation:2})}return n})();var me=(()=>{class n{poNotification;labelPosition=F.Left;serviceFee=!1;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];constructor(r){this.poNotification=r}addServiceFee(){this.totalAmount=this.serviceFee?parseFloat((this.totalAmount*1.1).toFixed(2)):43}confirm(){this.poNotification.success("Purchase done Successful!")}static \u0275fac=function(a){return new(a||n)(x(q))};static \u0275cmp=d({type:n,selectors:[["sample-po-switch-order"]],standalone:!1,decls:15,vars:6,consts:[["f","ngForm"],[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"ngModelChange","p-change","ngModel","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","po-icon ph ph-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(a,i){if(a&1){let c=A();t(0,"div",1)(1,"po-widget",2)(2,"form",null,0),l(4,"po-table",3),t(5,"po-switch",4),v("ngModelChange",function(s){return u(c),w(i.serviceFee,s)||(i.serviceFee=s),b(s)}),h("p-change",function(){return u(c),b(i.addServiceFee())}),e(),t(6,"div",5)(7,"div",6),o(8,"Total value"),e(),t(9,"span",7),o(10,"R$"),e(),t(11,"span",8),o(12),e()(),t(13,"div",1)(14,"po-button",9),h("p-click",function(){return u(c),b(i.confirm())}),e()()()()()}a&2&&(p(4),m("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",!1),p(),g("ngModel",i.serviceFee),m("p-label-position",i.labelPosition),p(7),R(i.totalAmount))},dependencies:[D,M,B,H,W,I,k,G,z],encapsulation:2})}return n})();var xe=n=>({"docs-sample-code-tabs":n}),de=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-switch-order-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Switch - Order Summary"),e(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-switch-order/sample-po-switch-order.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-row">
  <po-widget class="po-md-6 po-lg-4" p-title="Order Summary">
    <form #f="ngForm">
      <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>

      <po-switch
        name="serviceFee"
        [(ngModel)]="serviceFee"
        p-label="Allow a 10% service fee?"
        p-label-off="No, thank you."
        p-label-on="Yes, please."
        [p-label-position]="labelPosition"
        (p-change)="addServiceFee()"
      >
      </po-switch>

      <div class="po-pull-right">
        <div class="po-font-text-large-bold">Total value</div>
        <span class="po-font-text">R$</span>
        <span class="po-pull-right po-font-title">{ { totalAmount }}</span>
      </div>

      <div class="po-row">
        <po-button
          class="po-md-12"
          p-icon="po-icon ph ph-check"
          p-label="Confirm"
          p-kind="primary"
          (p-click)="confirm()"
        >
        </po-button>
      </div>
    </form>
  </po-widget>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-switch-order/sample-po-switch-order.component.ts"),e(),t(19,"pre",9),o(20,`import { Component } from '@angular/core';

import { PoNotificationService, PoSwitchLabelPosition, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-order',
  templateUrl: './sample-po-switch-order.component.html',
  standalone: false
})
export class SamplePoSwitchOrderComponent {
  labelPosition: PoSwitchLabelPosition = PoSwitchLabelPosition.Left;
  serviceFee: boolean = false;
  totalAmount: number = 43;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'page',
      label: 'Product'
    },
    {
      property: 'value',
      label: 'Value (R$)',
      type: 'currency',
      format: 'BRL'
    }
  ];

  public readonly items: Array<any> = [
    { page: 'Hamburger', value: '20' },
    { page: 'Soft Drink', value: '6' },
    { page: 'French Fries', value: '17' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  addServiceFee() {
    const percentage: number = 1.1;
    this.totalAmount = this.serviceFee ? parseFloat((this.totalAmount * percentage).toFixed(2)) : 43;
  }

  confirm() {
    this.poNotification.success('Purchase done Successful!');
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-switch-order"),e(),l(23,"hr")),a&2&&(p(5),y("po-icon "+i.sampleCodeButtonIcon),p(),O(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",T(4,xe,i.hideSampleCodeTabs)))},dependencies:[_,P,C,E,me],encapsulation:2})}return n})();var ce=(()=>{class n{poNotification;formBuilder;formOrderSummary;labelPosition=F.Left;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];constructor(r,a){this.poNotification=r,this.formBuilder=a}ngOnInit(){this.formOrderSummary=this.formBuilder.group({serviceFee:[!1]})}addServiceFee(){let r=this.formOrderSummary.get("serviceFee").value,a=1.1;this.totalAmount=r?parseFloat((this.totalAmount*a).toFixed(2)):43}confirm(){this.poNotification.success("Purchase done Successful!")}static \u0275fac=function(a){return new(a||n)(x(q),x($))};static \u0275cmp=d({type:n,selectors:[["sample-po-switch-order-reactive-form"]],standalone:!1,decls:14,vars:6,consts:[[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"formGroup"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","formControlName","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"p-change","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","ph ph-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"po-widget",1)(2,"form",2),l(3,"po-table",3),t(4,"po-switch",4),h("p-change",function(){return i.addServiceFee()}),e(),t(5,"div",5)(6,"div",6),o(7,"Total value"),e(),t(8,"span",7),o(9,"R$"),e(),t(10,"span",8),o(11),e()(),t(12,"div",0)(13,"po-button",9),h("p-click",function(){return i.confirm()}),e()()()()()),a&2&&(p(2),m("formGroup",i.formOrderSummary),p(),m("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",!1),p(),m("p-label-position",i.labelPosition),p(7),R(i.totalAmount))},dependencies:[D,M,B,Y,Q,I,k,G,z],encapsulation:2})}return n})();var Te=n=>({"docs-sample-code-tabs":n}),he=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-switch-order-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Switch - Order Summary Reactive Form"),e(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-row">
  <po-widget class="po-md-6 po-lg-4" p-title="Order Summary">
    <form [formGroup]="formOrderSummary">
      <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>

      <po-switch
        name="serviceFee"
        formControlName="serviceFee"
        p-label="Allow a 10% service fee?"
        p-label-off="No, thank you."
        p-label-on="Yes, please."
        [p-label-position]="labelPosition"
        (p-change)="addServiceFee()"
      >
      </po-switch>

      <div class="po-pull-right">
        <div class="po-font-text-large-bold">Total value</div>
        <span class="po-font-text">R$</span>
        <span class="po-pull-right po-font-title">{ { totalAmount }}</span>
      </div>

      <div class="po-row">
        <po-button class="po-md-12" p-icon="ph ph-check" p-label="Confirm" p-kind="primary" (p-click)="confirm()">
        </po-button>
      </div>
    </form>
  </po-widget>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts"),e(),t(19,"pre",9),o(20,`import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { PoNotificationService, PoSwitchLabelPosition, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-order-reactive-form',
  templateUrl: './sample-po-switch-order-reactive-form.component.html',
  standalone: false
})
export class SamplePoSwitchOrderReactiveFormComponent implements OnInit {
  formOrderSummary: UntypedFormGroup;
  labelPosition: PoSwitchLabelPosition = PoSwitchLabelPosition.Left;
  totalAmount: number = 43;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'page',
      label: 'Product'
    },
    {
      property: 'value',
      label: 'Value (R$)',
      type: 'currency',
      format: 'BRL'
    }
  ];

  public readonly items: Array<any> = [
    { page: 'Hamburger', value: '20' },
    { page: 'Soft Drink', value: '6' },
    { page: 'French Fries', value: '17' }
  ];

  constructor(
    private poNotification: PoNotificationService,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit() {
    this.formOrderSummary = this.formBuilder.group({ serviceFee: [false] });
  }

  addServiceFee() {
    const serviceFee = this.formOrderSummary.get('serviceFee').value;
    const percentage: number = 1.1;
    this.totalAmount = serviceFee ? parseFloat((this.totalAmount * percentage).toFixed(2)) : 43;
  }

  confirm() {
    this.poNotification.success('Purchase done Successful!');
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-switch-order-reactive-form"),e(),l(23,"hr")),a&2&&(p(5),y("po-icon "+i.sampleCodeButtonIcon),p(),O(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",T(4,Te,i.hideSampleCodeTabs)))},dependencies:[_,P,C,E,ce],encapsulation:2})}return n})();var ue=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-switch-doc"]],standalone:!1,decls:475,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-checkbox-group"],["id","boas-pr\xE1ticas"],["id","acessibilidade-tratada-no-componente"],["href","https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),o(3,"import { PoFieldModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),o(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),e(),t(7,"blockquote")(8,"p"),o(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),t(10,"code"),o(11,"FormsModule"),e(),o(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),t(13,"code"),o(14,"ReactiveFormsModule"),e(),o(15,", ambos nativos do Angular."),e()()(),t(16,"h3",3),o(17,"Componente"),e(),t(18,"h4",4)(19,"code",5),o(20,"PoSwitchComponent"),e()(),t(21,"div",2)(22,"p"),o(23," O componente "),t(24,"code"),o(25,"po-switch"),e(),o(26," \xE9 um "),t(27,"a",6),o(28,"checkbox"),e(),o(29,` mais intuitivo, pois faz analogia a um interruptor.
Deve ser usado quando deseja-se transmitir a ideia de ligar / desligar uma funcionalidade espec\xEDfica.`),e(),t(30,"p"),o(31,"Pode-se ligar ou desligar o switch utilizando a tecla de espa\xE7o ou o clique do mouse."),e(),t(32,"p"),o(33,`O texto exibido pode ser alterado de acordo com o valor setado aumentando as possibilidades de uso do componente,
portanto, recomenda-se informar textos que contextualizem seu uso para que facilite a compreens\xE3o do usu\xE1rio.`),e(),t(34,"blockquote")(35,"p"),o(36,"O componente n\xE3o altera o valor incial informado no "),t(37,"em"),o(38,"model"),e(),o(39,", portanto indica-se inicializa-lo caso ter necessidade."),e()(),t(40,"h4",7),o(41,"Boas pr\xE1ticas"),e(),t(42,"ul")(43,"li"),o(44,"Evite "),t(45,"code"),o(46,"labels"),e(),o(47," extensos que quebram o layout do "),t(48,"code"),o(49,"po-switch"),e(),o(50,", use "),t(51,"code"),o(52,"labels"),e(),o(53," diretos, curtos e intuitivos."),e()(),t(54,"h4",8),o(55,"Acessibilidade tratada no componente"),e(),t(56,"p"),o(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),e(),t(58,"ul")(59,"li"),o(60,"Quando em foco, o switch \xE9 ativado usando a tecla de Espa\xE7o. "),t(61,"a",9),o(62,"W3C WAI-ARIA 3.5 Switch - Keyboard Interaction"),e()(),t(63,"li"),o(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),t(65,"a",10),o(66,"WCAG 2.4.12: Focus Appearance"),e()()(),t(67,"h4",11),o(68,"Tokens customiz\xE1veis"),e(),t(69,"p"),o(70,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(71,"blockquote")(72,"p"),o(73,"Para maiores informa\xE7\xF5es, acesse o guia "),t(74,"a",12),o(75,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),o(76,"."),e()(),t(77,"table")(78,"thead")(79,"tr")(80,"th"),o(81,"Propriedade"),e(),t(82,"th"),o(83,"Descri\xE7\xE3o"),e(),t(84,"th"),o(85,"Valor Padr\xE3o"),e()()(),t(86,"tbody")(87,"tr")(88,"td")(89,"strong"),o(90,"Unchecked"),e()(),l(91,"td")(92,"td"),e(),t(93,"tr")(94,"td")(95,"code"),o(96,"--color-unchecked"),e()(),t(97,"td"),o(98,"Cor principal no estado desmarcado"),e(),t(99,"td")(100,"code"),o(101,"var(--color-neutral-light-00)"),e()()(),t(102,"tr")(103,"td")(104,"code"),o(105,"--border-color"),e()(),t(106,"td"),o(107,"Cor da borda"),e(),t(108,"td")(109,"code"),o(110,"var(--color-neutral-dark-70)"),e()()(),t(111,"tr")(112,"td")(113,"code"),o(114,"--track-unchecked"),e()(),t(115,"td"),o(116,"Cor principal da faixa no estado desmarcado"),e(),t(117,"td")(118,"code"),o(119,"var(--color-neutral-light-20)"),e()()(),t(120,"tr")(121,"td")(122,"strong"),o(123,"Checked"),e()(),l(124,"td")(125,"td"),e(),t(126,"tr")(127,"td")(128,"code"),o(129,"--color-checked"),e()(),t(130,"td"),o(131,"Cor principal no estado selecionado"),e(),t(132,"td")(133,"code"),o(134,"var(--color-action-default)"),e()()(),t(135,"tr")(136,"td")(137,"code"),o(138,"--track-checked"),e()(),t(139,"td"),o(140,"Cor da faixa no estado selecionado"),e(),t(141,"td")(142,"code"),o(143,"var(--color-brand-01-light)"),e()()(),t(144,"tr")(145,"td")(146,"strong"),o(147,"Hover"),e()(),l(148,"td")(149,"td"),e(),t(150,"tr")(151,"td")(152,"code"),o(153,"--color-unchecked-hover"),e()(),t(154,"td"),o(155,"Cor principal no estado hover desmarcado"),e(),t(156,"td")(157,"code"),o(158,"var(--color-action-pressed)"),e()()(),t(159,"tr")(160,"td")(161,"code"),o(162,"--color-checked-hover"),e()(),t(163,"td"),o(164,"Cor principal no estado hover marcado"),e(),t(165,"td")(166,"code"),o(167,"var(--color-action-pressed)"),e()()(),t(168,"tr")(169,"td")(170,"strong"),o(171,"Focused"),e()(),l(172,"td")(173,"td"),e(),t(174,"tr")(175,"td")(176,"code"),o(177,"--outline-color-focused"),e()(),t(178,"td"),o(179,"Cor do outline do estado de focus"),e(),t(180,"td")(181,"code"),o(182,"var(--color-action-focus)"),e()()(),t(183,"tr")(184,"td")(185,"strong"),o(186,"Disabled"),e()(),l(187,"td")(188,"td"),e(),t(189,"tr")(190,"td")(191,"code"),o(192,"--color-unchecked-disabled"),e()(),t(193,"td"),o(194,"Cor principal do disabled no estado desmarcado"),e(),t(195,"td")(196,"code"),o(197,"var(--color-neutral-light-20)"),e()()(),t(198,"tr")(199,"td")(200,"code"),o(201,"--color-checked-disabled"),e()(),t(202,"td"),o(203,"Cor principal do disabled no estado marcado"),e(),t(204,"td")(205,"code"),o(206,"var(--color-action-disabled)"),e()()()()()(),t(207,"div",13)(208,"h4",14),o(209,"Seletor"),e(),t(210,"pre",15),o(211,`<po-switch
    (p-change)="EventEmitter"
    p-disabled="boolean"
    p-format-model="boolean"
    p-help="string"
    p-hide-label-status="boolean"
    p-label="string"
    p-label-off="string"
    p-label-on="string"
    p-label-position="PoSwitchLabelPosition"
    name="string" >
</po-switch>
`),e()(),t(212,"h4",16),o(213,"Propriedades"),e(),t(214,"table",17)(215,"tr",18)(216,"th",19),o(217,"Nome"),e(),t(218,"th",19),o(219,"Tipo"),e(),t(220,"th",19),o(221,"Padr\xE3o"),e(),t(222,"th",19),o(223,"Descri\xE7\xE3o"),e()(),t(224,"tr",20)(225,"td",21)(226,"div",22)(227,"span",23),o(228," (p-change)"),l(229,"br"),e()()(),t(230,"td",24)(231,"code",25),o(232,"EventEmitter"),e()(),t(233,"td",26),o(234,"-"),e(),t(235,"td",27)(236,"em")(237,"strong"),o(238,"(opcional)"),e()(),t(239,"p"),o(240,"Evento disparado ao alterar valor do campo."),e()()(),t(241,"tr",20)(242,"td",21)(243,"div",28)(244,"span",29),o(245," p-disabled"),l(246,"br"),e()()(),t(247,"td",24)(248,"code",30),o(249,"boolean"),e()(),t(250,"td",26)(251,"p")(252,"code"),o(253,"false"),e()()(),t(254,"td",27)(255,"em")(256,"strong"),o(257,"(opcional)"),e()(),t(258,"p"),o(259,"Indica se o campo ser\xE1 desabilitado."),e()()(),t(260,"tr",20)(261,"td",21)(262,"div",28)(263,"span",29),o(264," p-format-model"),l(265,"br"),e()()(),t(266,"td",24)(267,"code",30),o(268,"boolean"),e()(),t(269,"td",26)(270,"p")(271,"code"),o(272,"false"),e()()(),t(273,"td",27)(274,"em")(275,"strong"),o(276,"(opcional)"),e()(),t(277,"p"),o(278,"Indica se o "),t(279,"code"),o(280,"model"),e(),o(281," receber\xE1 o valor formatado pelas propriedades "),t(282,"code"),o(283,"p-label-on"),e(),o(284," e "),t(285,"code"),o(286,"p-label-off"),e(),o(287,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),e(),t(288,"blockquote")(289,"p"),o(290,"Por padr\xE3o ser\xE1 atribu\xEDdo "),t(291,"code"),o(292,"false"),e(),o(293,"."),e()()()(),t(294,"tr",20)(295,"td",21)(296,"div",28)(297,"span",29),o(298," p-help"),l(299,"br"),e()()(),t(300,"td",24)(301,"code",31),o(302,"string"),e()(),t(303,"td",26),o(304,"-"),e(),t(305,"td",27)(306,"p"),o(307,"Texto de apoio para o campo."),e()()(),t(308,"tr",20)(309,"td",21)(310,"div",28)(311,"span",29),o(312," p-hide-label-status"),l(313,"br"),e()()(),t(314,"td",24)(315,"code",30),o(316,"boolean"),e()(),t(317,"td",26)(318,"p")(319,"code"),o(320,"false"),e()()(),t(321,"td",27)(322,"em")(323,"strong"),o(324,"(opcional)"),e()(),t(325,"p"),o(326,"Indica se o status do "),t(327,"code"),o(328,"model"),e(),o(329," ser\xE1 escondido visualmente ao lado do switch."),e(),t(330,"blockquote")(331,"p"),o(332,"Por padr\xE3o ser\xE1 atribu\xEDdo "),t(333,"code"),o(334,"false"),e(),o(335,"."),e()()()(),t(336,"tr",20)(337,"td",21)(338,"div",28)(339,"span",29),o(340," p-label"),l(341,"br"),e()()(),t(342,"td",24)(343,"code",31),o(344,"string"),e()(),t(345,"td",26),o(346,"-"),e(),t(347,"td",27)(348,"p"),o(349,"R\xF3tulo exibido pelo componente."),e()()(),t(350,"tr",20)(351,"td",21)(352,"div",28)(353,"span",29),o(354," p-label-off"),l(355,"br"),e()()(),t(356,"td",24)(357,"code",31),o(358,"string"),e()(),t(359,"td",26)(360,"p")(361,"code"),o(362,"false"),e()()(),t(363,"td",27)(364,"p"),o(365,"Texto exibido quando o valor do componente for "),t(366,"code"),o(367,"false"),e(),o(368,"."),e()()(),t(369,"tr",20)(370,"td",21)(371,"div",28)(372,"span",29),o(373," p-label-on"),l(374,"br"),e()()(),t(375,"td",24)(376,"code",31),o(377,"string"),e()(),t(378,"td",26)(379,"p")(380,"code"),o(381,"true"),e()()(),t(382,"td",27)(383,"p"),o(384,"Texto exibido quando o valor do componente for "),t(385,"code"),o(386,"true"),e(),o(387,"."),e()()(),t(388,"tr",20)(389,"td",21)(390,"div",28)(391,"span",29),o(392," p-label-position"),l(393,"br"),e()()(),t(394,"td",24)(395,"code",32),o(396,"PoSwitchLabelPosition"),e()(),t(397,"td",26),o(398,"-"),e(),t(399,"td",27)(400,"em")(401,"strong"),o(402,"(opcional)"),e()(),t(403,"p"),o(404,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo que fica ao lado do switch."),e(),t(405,"blockquote")(406,"p"),o(407,"Por padr\xE3o exibe \xE0 direita."),e()()()(),t(408,"tr",20)(409,"td",21)(410,"div",28)(411,"span",29),o(412," name"),l(413,"br"),e()()(),t(414,"td",24)(415,"code",31),o(416,"string"),e()(),t(417,"td",26),o(418,"-"),e(),t(419,"td",27)(420,"p"),o(421,"Nome do componente."),e()()()(),t(422,"h3",16),o(423,"M\xE9todos"),e(),t(424,"table",33)(425,"tr",20)(426,"th",34)(427,"div",28)(428,"h4")(429,"span",29),o(430," focus "),e()()()()(),t(431,"tr",27)(432,"td",27)(433,"p"),o(434,"Fun\xE7\xE3o que atribui foco ao componente."),e(),t(435,"p"),o(436,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),t(437,"pre")(438,"code"),o(439,`import { PoSwitchComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;

focusSwitch() {
  this.switch.focus();
}`),e()()()()(),l(440,"br"),t(441,"h3"),o(442,"Enums"),e(),t(443,"h4",4)(444,"code",5),o(445,"PoSwitchLabelPosition"),e()(),t(446,"div",2)(447,"p"),o(448,"Enum para posicionar o label do valor do po-switch."),e()(),t(449,"h4",16),o(450,"Propriedades"),e(),t(451,"table",17)(452,"tr",18)(453,"th",19),o(454,"Nome"),e(),t(455,"th",19),o(456,"Descri\xE7\xE3o"),e()(),t(457,"tr",20)(458,"td",21)(459,"div",28)(460,"span",29),o(461," Right"),l(462,"br"),e()()(),t(463,"td",27)(464,"p"),o(465,"Posiciona o label do lado esquerdo do switch."),e()()(),t(466,"tr",20)(467,"td",21)(468,"div",28)(469,"span",29),o(470," Left"),l(471,"br"),e()()(),t(472,"td",27)(473,"p"),o(474,"Posiciona o label do lado direito do switch."),e()()()()())},dependencies:[P],encapsulation:2})}return n})();var be=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||n)(x(J),x(X))};static \u0275cmp=d({type:n,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title"," Switch",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,i){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),l(3,"sample-po-switch-doc"),e(),t(4,"po-tab",3),l(5,"sample-po-switch-basic-view")(6,"sample-po-switch-labs-view")(7,"sample-po-switch-order-view")(8,"sample-po-switch-order-reactive-form-view"),e()()()),a&2&&(m("p-actions",i.actions),p(2),m("p-active",i.activeTab.includes("doc")),p(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[ie,C,E,le,se,de,he,ue],encapsulation:2})}return n})();var Le=[{path:"",component:be}],Se=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[U.forChild(Le),U]})}return n})();var pt=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[ne,Se]})}return n})();export{pt as DocPoSwitchModule};
