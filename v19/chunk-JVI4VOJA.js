import{$ as L,$a as O,$d as re,Bc as ne,F as u,Fa as H,G as b,Ga as e,Ia as h,Jc as oe,Ka as B,La as P,Lb as K,Ma as w,Mb as $,Nb as Q,Ob as Y,Od as le,Pa as T,Pb as X,T as d,U as y,Wb as J,Xd as v,Ya as j,Yb as Z,Yd as C,Zb as N,_ as g,a as x,ad as ie,b as f,bb as U,ea as q,gc as ee,ha as s,ka as _,md as ae,na as n,nc as z,oa as t,oc as D,pa as r,qa as W,ra as G,re as k,se as pe,ta as A,ua as m,va as F,y as I,zc as te}from"./chunk-TZ5FQAUY.js";var de=(()=>{class i{onClick(){alert("Po Button!")}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-button-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-label","PO Button",3,"p-click"]],template:function(a,o){a&1&&(n(0,"po-button",0),m("p-click",function(){return o.onClick()}),t())},dependencies:[D],encapsulation:2})}return i})();var fe=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-button-basic-view"]],standalone:!1,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","E2E"],["appCodeHighlight","",1,"test"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Button Basic"),t(),n(4,"a",2),m("click",function(){return o.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-button-basic/sample-po-button-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-button p-label="PO Button" (p-click)="onClick()"> </po-button>
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
`),t()()(),n(21,"po-tab",10)(22,"div")(23,"label",6),e(24,"sample-po-button-basic/sample-po-button-basic.component.e2e-spec.ts"),t(),n(25,"pre",11),e(26,`import { SamplePoButtonBasicComponentPO } from './sample-po-button-basic.component.po';

describe('SamplePoButtonBasic E2E', () => {
  const button = new SamplePoButtonBasicComponentPO();

  beforeEach(() => {
    button.navigateTo();
  });

  it('Check if the element Po Button is present', () => {
    expect(button.poButton.isPresent()).toBeTruthy();
  });
});
`),t(),n(27,"label",6),e(28,"sample-po-button-basic/sample-po-button-basic.component.po.ts"),t(),n(29,"pre",11),e(30,`import { browser, by, element } from 'protractor';

export class SamplePoButtonBasicComponentPO {
  private sampleName = 'sample-po-button-basic';

  navigateTo() {
    return browser.get(browser.baseUrl + '/documentation/po-button?view=web');
  }

  get poButton() {
    return element(by.css(\`\${this.sampleName} .po-button\`));
  }
}
`),t()()()()(),n(31,"div",12),r(32,"sample-po-button-basic"),t(),r(33,"hr")),a&2&&(d(5),_("po-icon "+o.sampleCodeButtonIcon),d(),h(" ",o.sampleCodeButtonLabel,""),d(),s("ngClass",T(4,fe,o.hideSampleCodeTabs)))},dependencies:[O,k,v,C,de],encapsulation:2})}return i})();var me=(()=>{class i{poDialog;label;kind;icon;size;properties;type;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"},{value:"danger",label:"Danger"}];iconsOptions=[{label:"ph ph-newspaper",value:"ph ph-newspaper"},{label:"ph ph-calendar-dots",value:"ph ph-calendar-dots"},{label:"ph ph-user",value:"ph ph-user"},{label:"fa fa-podcast",value:"fa fa-podcast"}];kindsOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"},{label:"tertiary",value:"tertiary"}];sizesOptions=[{label:"medium",value:"medium"},{label:"large",value:"large"}];typeOptions=[{label:"button",value:z.Button},{label:"submit",value:z.Submit},{label:"reset",value:z.Reset}];constructor(l){this.poDialog=l}ngOnInit(){this.restore()}buttonClick(){this.poDialog.alert({title:"PO Button",message:"Hello PO World!!!"})}propertiesChange(l){this.kindsOptions[2]=f(x({},this.kindsOptions[2]),{disabled:!1}),this.sizesOptions[0]=f(x({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=f(x({},this.sizesOptions[1]),{disabled:!1}),l&&l.forEach(a=>{a==="danger"&&this.properties.includes("danger")&&(this.kindsOptions[2]=f(x({},this.kindsOptions[2]),{disabled:!0}))})}verifyDisabled(l){let a=[...this.propertiesOptions];l==="tertiary"?(a[2]={value:"danger",label:"Danger",disabled:!0},this.propertiesOptions=a):(a[2]={value:"danger",label:"Danger",disabled:!1},this.propertiesOptions=a)}restore(){this.label=void 0,this.kind="secondary",this.size="medium",this.icon=void 0,this.type=z.Button,this.properties=[],this.kindsOptions[2]=f(x({},this.kindsOptions[2]),{disabled:!1}),this.sizesOptions[0]=f(x({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=f(x({},this.sizesOptions[1]),{disabled:!1})}static \u0275fac=function(a){return new(a||i)(y(oe))};static \u0275cmp=g({type:i,selectors:[["sample-po-button-labs"]],standalone:!1,decls:16,vars:19,consts:[["f","ngForm"],[1,"po-row"],[1,"po-sm-12",3,"p-click","p-disabled","p-icon","p-label","p-loading","p-size","p-danger","p-kind","p-type"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","kind","p-label","Kind",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","type","p-label","Type",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let c=A();n(0,"div",1)(1,"po-button",2),m("p-click",function(){return u(c),b(o.buttonClick())}),t()(),r(2,"hr"),n(3,"form",null,0)(5,"div",1)(6,"po-input",3),w("ngModelChange",function(p){return u(c),P(o.label,p)||(o.label=p),b(p)}),t()(),n(7,"div",1)(8,"po-checkbox-group",4),w("ngModelChange",function(p){return u(c),P(o.properties,p)||(o.properties=p),b(p)}),m("p-change",function(p){return u(c),b(o.propertiesChange(p))}),t()(),n(9,"div",1)(10,"po-radio-group",5),w("ngModelChange",function(p){return u(c),P(o.icon,p)||(o.icon=p),b(p)}),t(),n(11,"po-radio-group",6),w("ngModelChange",function(p){return u(c),P(o.kind,p)||(o.kind=p),b(p)}),m("p-change",function(p){return u(c),b(o.verifyDisabled(p))}),t(),n(12,"po-radio-group",7),w("ngModelChange",function(p){return u(c),P(o.size,p)||(o.size=p),b(p)}),m("p-change",function(p){return u(c),b(o.verifyDisabled(p))}),t(),n(13,"po-radio-group",8),w("ngModelChange",function(p){return u(c),P(o.type,p)||(o.type=p),b(p)}),t()(),n(14,"div",1)(15,"po-button",9),m("p-click",function(){return u(c),b(o.restore())}),t()()()}a&2&&(d(),s("p-disabled",o.properties.includes("disabled"))("p-icon",o.icon)("p-label",o.label)("p-loading",o.properties.includes("loading"))("p-size",o.size)("p-danger",o.properties.includes("danger"))("p-kind",o.kind)("p-type",o.type),d(5),B("ngModel",o.label),d(2),B("ngModel",o.properties),s("p-options",o.propertiesOptions),d(2),B("ngModel",o.icon),s("p-options",o.iconsOptions),d(),B("ngModel",o.kind),s("p-options",o.kindsOptions),d(),B("ngModel",o.size),s("p-options",o.sizesOptions),d(),B("ngModel",o.type),s("p-options",o.typeOptions))},dependencies:[X,K,$,Y,Q,D,te,ne,ae],encapsulation:2})}return i})();var ke=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-button-labs-view"]],standalone:!1,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","E2E"],["appCodeHighlight","",1,"test"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Button Labs"),t(),n(4,"a",2),m("click",function(){return o.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-button-labs/sample-po-button-labs.component.html"),t(),n(13,"pre",7),e(14,`<!-- Component -->
<div class="po-row">
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

<!-- Properties -->
<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="propertiesChange($event)"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-radio-group class="po-lg-12" name="icon" [(ngModel)]="icon" p-label="Icon" [p-options]="iconsOptions">
    </po-radio-group>

    <po-radio-group
      class="po-lg-12"
      name="kind"
      [(ngModel)]="kind"
      p-label="Kind"
      [p-options]="kindsOptions"
      (p-change)="verifyDisabled($event)"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-12"
      name="size"
      [(ngModel)]="size"
      p-label="Size"
      [p-options]="sizesOptions"
      (p-change)="verifyDisabled($event)"
    >
    </po-radio-group>

    <po-radio-group class="po-lg-12" name="type" [(ngModel)]="type" p-label="Type" [p-options]="typeOptions">
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-button-labs/sample-po-button-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoDialogService, PoButtonType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-labs',
  templateUrl: './sample-po-button-labs.component.html',
  standalone: false
})
export class SamplePoButtonLabsComponent implements OnInit {
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
    { label: 'ph ph-newspaper', value: 'ph ph-newspaper' },
    { label: 'ph ph-calendar-dots', value: 'ph ph-calendar-dots' },
    { label: 'ph ph-user', value: 'ph ph-user' },
    { label: 'fa fa-podcast', value: 'fa fa-podcast' }
  ];

  kindsOptions: Array<PoRadioGroupOption> = [
    { label: 'primary', value: 'primary' },
    { label: 'secondary', value: 'secondary' },
    { label: 'tertiary', value: 'tertiary' }
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'medium', value: 'medium' },
    { label: 'large', value: 'large' }
  ];

  typeOptions: Array<PoRadioGroupOption> = [
    { label: 'button', value: PoButtonType.Button },
    { label: 'submit', value: PoButtonType.Submit },
    { label: 'reset', value: PoButtonType.Reset }
  ];

  constructor(private poDialog: PoDialogService) {}

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
`),t()()(),n(21,"po-tab",10)(22,"div")(23,"label",6),e(24,"sample-po-button-labs/sample-po-button-labs.component.e2e-spec.ts"),t(),n(25,"pre",11),e(26,`import { SamplePoButtonLabsComponentPO } from './sample-po-button-labs.component.po';

describe('SamplePoButtonLabs E2E', () => {
  const button = new SamplePoButtonLabsComponentPO();

  beforeAll(() => {
    button.navigateTo();
  });

  it('Check if the element Button is present and open modal and close', () => {
    expect(button.poButton.isPresent()).toBeTruthy();

    button.poButton.click();

    expect(button.poModal.isPresent()).toBeTruthy();

    button.poModalOk.click();

    expect(button.poModal.isPresent()).toBeFalsy();
  });

  it('Check \`po-button\` show icon \`ph ph-newspaper\` after select icon \`ph ph-newspaper\`', () => {
    button.poRadioLogoPO.click();

    expect(button.poButtonIcon.getAttribute('class')).toContain('ph ph-newspaper');
  });

  it('Check \`po-button\` show icon \`po-icon-user\` after select icon \`po-icon-user\`', () => {
    button.poRadioUser.click();

    expect(button.poButtonIcon.getAttribute('class')).toContain('po-icon-user');
  });

  it('Check \`po-button\` show icon \`po-icon-calendar\` after select icon \`po-icon-calendar\`', () => {
    button.poRadioCalendar.click();

    expect(button.poButtonIcon.getAttribute('class')).toContain('po-icon-calendar');
    // expect(element(by.css('span .po-icon'))).toBeTruthy();
    // expect(button.poButtonIcon.isPresent()).toBeTruthy();
  });

  it('Check \`po-button\` hide icon after select \`none\`', () => {
    button.poRadioNone.click();

    expect(button.poButtonIcon.isPresent()).toBeFalsy();
  });

  it('Apply \xB4default\xB4 type to \`po-button\`', () => {
    button.poRadioDefault.click();

    expect(button.poButton.getAttribute('class')).toContain('po-button');

    expect(button.poButton.getAttribute('class')).not.toContain('po-button-primary');
    expect(button.poButton.getAttribute('class')).not.toContain('po-button-danger');
    expect(button.poButton.getAttribute('class')).not.toContain('po-button-link');
  });

  it('Apply \xB4primary\xB4 type to \`po-button\`', () => {
    button.poRadioPrimary.click();

    expect(button.poButton.getAttribute('class')).toContain('po-button-primary');
  });

  it('Apply \xB4danger\xB4 type to \`po-button\`', () => {
    button.poRadioDanger.click();

    expect(button.poButton.getAttribute('class')).toContain('po-button-danger');
  });

  it('Apply \xB4link\xB4 type to \`po-button\`', () => {
    button.poRadioLink.click();

    expect(button.poButton.getAttribute('class')).toContain('po-button-link');
  });

  it('Check if \`po-input\` is required after clean', () => {
    button.poInputClean.click();

    expect(button.poInputGroup.getAttribute('class')).toContain('ng-invalid');
  });
});
`),t(),n(27,"label",6),e(28,"sample-po-button-labs/sample-po-button-labs.component.po.ts"),t(),n(29,"pre",11),e(30,`import { browser, by, element } from 'protractor';

export class SamplePoButtonLabsComponentPO {
  private sampleName = 'sample-po-button-labs';

  private poCheckboxGroupProperties = 'po-checkbox-group[name="properties"] .po-checkbox-group-input';
  private poCheckboxGroupPropertiesLabel = '.po-checkbox-group-label';
  private poRadioGroupLabel = '.po-radio-group-label';

  get poButton() {
    return element(by.css(\`\${this.sampleName} .po-button\`));
  }

  get poButtonIcon() {
    return element(by.css(\`\${this.sampleName} po-button span.po-icon\`));
  }

  get poModal() {
    return element(by.css('.po-modal-content'));
  }

  get poModalOk() {
    return this.poModal.element(by.css('.po-button'));
  }

  get poCheckboxDisable() {
    return this.getPoButtonProperties('disabled');
  }

  get poRadioLogoPO() {
    return this.getPoButtonIcon('ph ph-newspaper');
  }

  get poRadioCalendar() {
    return this.getPoButtonIcon('ph ph-calendar-dots');
  }

  get poRadioUser() {
    return this.getPoButtonIcon('ph ph-user');
  }
  get poRadioNone() {
    return this.getPoButtonIcon('undefined');
  }

  get poRadioDefault() {
    return this.getPoButtonKind('default');
  }

  get poRadioDanger() {
    return this.getPoButtonKind('danger');
  }

  get poRadioPrimary() {
    return this.getPoButtonKind('primary');
  }

  get poRadioLink() {
    return this.getPoButtonKind('link');
  }

  get poInputClean() {
    return element(by.tagName(\`\${this.sampleName} po-clean span\`));
  }

  get poInputGroup() {
    return element(by.css(\`\${this.sampleName} po-input\`));
  }

  navigateTo() {
    return browser.get(browser.baseUrl + '/documentation/po-button?view=web' + '/documentation/po-button?view=web' + '/documentation/po-button?view=web');
  }

  private getPoButtonProperties(prop) {
    return element(
      by.css(
        \`\${this.sampleName} \${this.poCheckboxGroupProperties}[value="\${prop}"]+\${this.poCheckboxGroupPropertiesLabel}\`
      )
    );
  }

  private getPoButtonIcon(icon) {
    return element(
      by.css(
        \`\${this.sampleName} po-radio-group[name="icon"] .po-radio-group-input[value="\${icon}"]+\${this.poRadioGroupLabel}\`
      )
    );
  }

  private getPoButtonKind(kind) {
    return element(
      by.css(
        \`\${this.sampleName} po-radio-group[name="kind"] .po-radio-group-input[value="\${kind}"]+\${this.poRadioGroupLabel}\`
      )
    );
  }
}
`),t()()()()(),n(31,"div",12),r(32,"sample-po-button-labs"),t(),r(33,"hr")),a&2&&(d(5),_("po-icon "+o.sampleCodeButtonIcon),d(),h(" ",o.sampleCodeButtonLabel,""),d(),s("ngClass",T(4,ke,o.hideSampleCodeTabs)))},dependencies:[O,k,v,C,me],encapsulation:2})}return i})();function Be(i,Se){if(i&1){let l=A();W(0),n(1,"div",1),r(2,"po-avatar",4),n(3,"div",5)(4,"span",6),e(5),t(),n(6,"span",7),e(7),t(),n(8,"span",7),e(9),t()()(),n(10,"div",1)(11,"po-button",8),m("p-click",function(){u(l);let o=F();return b(o.notification("added","success"))}),t(),n(12,"po-button",9),m("p-click",function(){u(l);let o=F();return b(o.notification("ignored","warning"))}),t(),n(13,"po-button",10),m("p-click",function(){u(l);let o=F();return b(o.notification("blocked","information"))}),t()(),G()}if(i&2){let l=F();d(2),s("p-src",l.userAvatar),d(3),h(" ",l.currentFriend.name," "),d(2),h(" ",l.currentFriend.mutualFriends," mutual friends "),d(2),h(" Resides in ",l.currentFriend.reside," ")}}function Pe(i,Se){i&1&&(n(0,"div",1)(1,"span",11),e(2,"Congratulations Totver, no more requests!"),t()())}var ue=(()=>{class i{poNotification;currentFriend;userAvatar="https://lorempixel.com/144/144/";newFriends=[{name:"Mr. Dev PO",mutualFriends:"7",reside:"Mountain View, CA"},{name:"Mr. AI PO",mutualFriends:"99+",reside:"New York City, NY"},{name:"Mr. UX PO",mutualFriends:"14",reside:"Los Angeles, CA"}];indexFriend=0;constructor(l){this.poNotification=l}ngOnInit(){this.setCurrentFriend(0)}notification(l,a){this.poNotification[a](`User ${l} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend)}setCurrentFriend(l){this.currentFriend=this.newFriends[l]}static \u0275fac=function(a){return new(a||i)(y(ie))};static \u0275cmp=g({type:i,selectors:[["sample-po-button-social-network"]],standalone:!1,decls:5,vars:2,consts:[["noMoreRequest",""],[1,"po-row"],["p-title","Friend Request",1,"po-lg-6"],[4,"ngIf","ngIfElse"],["p-size","lg",1,"po-md-4",3,"p-src"],[1,"po-md-8"],[1,"po-sm-12","po-font-subtitle"],[1,"po-sm-12","po-font-text"],["p-icon","fa fa-check-circle","p-label","Confirm",1,"po-md-4",3,"p-click"],["p-icon","fa fa-eye-slash","p-label","Ignore",1,"po-md-4",3,"p-click"],["p-icon","fa fa-ban","p-label","Block",1,"po-md-4",3,"p-click"],[1,"po-lg-8","po-font-subtitle"]],template:function(a,o){if(a&1&&(n(0,"div",1)(1,"po-widget",2),q(2,Be,14,4,"ng-container",3)(3,Pe,3,0,"ng-template",null,0,j),t()()),a&2){let c=H(4);d(2),s("ngIf",o.currentFriend)("ngIfElse",c)}},dependencies:[U,ee,D,re],encapsulation:2})}return i})();var _e=i=>({"docs-sample-code-tabs":i}),be=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-button-social-network-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Button Social Network"),t(),n(4,"a",2),m("click",function(){return o.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-button-social-network/sample-po-button-social-network.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
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
    </ng-container>

    <ng-template #noMoreRequest>
      <div class="po-row">
        <span class="po-lg-8 po-font-subtitle">Congratulations Totver, no more requests!</span>
      </div>
    </ng-template>
  </po-widget>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-button-social-network/sample-po-button-social-network.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-social-network',
  templateUrl: './sample-po-button-social-network.component.html',
  standalone: false
})
export class SamplePoButtonSocialNetworkComponent implements OnInit {
  currentFriend: object;
  userAvatar: string = 'https://lorempixel.com/144/144/';

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

  notification(action: string, notificationType: string) {
    this.poNotification[notificationType](\`User \${action} successfully!\`);

    this.indexFriend++;
    this.setCurrentFriend(this.indexFriend);
  }

  private setCurrentFriend(index: number) {
    this.currentFriend = this.newFriends[index];
  }
}
`),t()()()()(),n(21,"div",10),r(22,"sample-po-button-social-network"),t(),r(23,"hr")),a&2&&(d(5),_("po-icon "+o.sampleCodeButtonIcon),d(),h(" ",o.sampleCodeButtonLabel,""),d(),s("ngClass",T(4,_e,o.hideSampleCodeTabs)))},dependencies:[O,k,v,C,ue],encapsulation:2})}return i})();var ge=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-button-doc"]],standalone:!1,decls:757,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","boas-pr\xE1ticas"],["id","acessibilidade-tratada-no-componente"],["href","https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoButtonType"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(a,o){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoButtonModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-button."),t()(),n(7,"h3",3),e(8,"Componente"),t(),n(9,"h4",4)(10,"code",5),e(11,"PoButtonComponent"),t()(),n(12,"div",2)(13,"p"),e(14,"O "),n(15,"code"),e(16,"po-button"),t(),e(17," permite que o usu\xE1rio execute a\xE7\xF5es predefinidas pelo desenvolvedor."),t(),n(18,"p"),e(19,"Atrav\xE9s dos tipos, \xE9 poss\xEDvel identificar a import\xE2ncia de cada a\xE7\xE3o."),t(),n(20,"h4",6),e(21,"Boas pr\xE1ticas"),t(),n(22,"ul")(23,"li"),e(24,"Evite "),n(25,"code"),e(26,"labels"),t(),e(27," extensos que quebram o layout do "),n(28,"code"),e(29,"po-button"),t(),e(30,", use "),n(31,"code"),e(32,"labels"),t(),e(33," diretos, curtos e intuitivos."),t(),n(34,"li"),e(35,"Utilize apenas um "),n(36,"code"),e(37,"po-button"),t(),e(38," configurado como "),n(39,"code"),e(40,"primary"),t(),e(41," por p\xE1gina."),t(),n(42,"li"),e(43,"Para a\xE7\xF5es irrevers\xEDveis use sempre a propriedade "),n(44,"code"),e(45,"p-danger"),t(),e(46,"."),t()(),n(47,"h4",7),e(48,"Acessibilidade tratada no componente"),t(),n(49,"p"),e(50,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),t(),n(51,"ul")(52,"li"),e(53,"Quando em foco, o bot\xE3o \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),n(54,"a",8),e(55,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),t()(),n(56,"li"),e(57,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),n(58,"a",9),e(59,"WCAG 2.4.12: Focus Appearance"),t()()(),n(60,"h4",10),e(61,"Tokens customiz\xE1veis"),t(),n(62,"p"),e(63,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(64,"blockquote")(65,"p"),e(66,"Para maiores informa\xE7\xF5es, acesse o guia "),n(67,"a",11),e(68,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(69,"."),t()(),n(70,"table")(71,"thead")(72,"tr")(73,"th"),e(74,"Propriedade"),t(),n(75,"th"),e(76,"Descri\xE7\xE3o"),t(),n(77,"th"),e(78,"Valor Padr\xE3o"),t()()(),n(79,"tbody")(80,"tr")(81,"td")(82,"code"),e(83,"--font-family"),t()(),n(84,"td"),e(85,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(86,"td")(87,"code"),e(88,"var(--font-family-theme)"),t()()(),n(89,"tr")(90,"td")(91,"code"),e(92,"--font-size"),t()(),n(93,"td"),e(94,"Tamanho da fonte"),t(),n(95,"td")(96,"code"),e(97,"var(--font-size-default)"),t()()(),n(98,"tr")(99,"td")(100,"code"),e(101,"--font-weight"),t()(),n(102,"td"),e(103,"Peso da fonte"),t(),n(104,"td")(105,"code"),e(106,"var(--font-weight-bold)"),t()()(),n(107,"tr")(108,"td")(109,"code"),e(110,"--line-height"),t()(),n(111,"td"),e(112,"Tamanho da label"),t(),n(113,"td")(114,"code"),e(115,"var(--line-height-none)"),t()()(),n(116,"tr")(117,"td")(118,"code"),e(119,"--border-radius"),t()(),n(120,"td"),e(121,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),t(),n(122,"td")(123,"code"),e(124,"var(--border-radius-md)"),t()()(),n(125,"tr")(126,"td")(127,"code"),e(128,"--border-width"),t()(),n(129,"td"),e(130,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),t(),n(131,"td")(132,"code"),e(133,"var(--border-width-md)"),t()()(),n(134,"tr")(135,"td")(136,"code"),e(137,"--padding"),t()(),n(138,"td"),e(139,"Preenchimento"),t(),n(140,"td")(141,"code"),e(142,"0 1em"),t()()(),n(143,"tr")(144,"td")(145,"strong"),e(146,"Danger"),t()(),r(147,"td")(148,"td"),t(),n(149,"tr")(150,"td")(151,"code"),e(152,"--text-color-danger"),t()(),n(153,"td"),e(154,"Cor do texto no estado danger"),t(),n(155,"td")(156,"code"),e(157,"var(--color-neutral-light-00)"),t()()(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-button-danger"),t()(),n(162,"td"),e(163,"Cor do bot\xE3o no estado danger"),t(),n(164,"td")(165,"code"),e(166,"var(--color-feedback-negative-dark)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--color-danger-hover"),t()(),n(171,"td"),e(172,"Cor de hover no estado danger"),t(),n(173,"td")(174,"code"),e(175,"var(--color-feedback-negative-darker)"),t()()(),n(176,"tr")(177,"td")(178,"code"),e(179,"--color-danger-pressed"),t()(),n(180,"td"),e(181,"Cor pressionada no estado danger"),t(),n(182,"td")(183,"code"),e(184,"var(--color-feedback-negative-darkest)"),t()()(),n(185,"tr")(186,"td")(187,"code"),e(188,"--background-danger-hover"),t()(),n(189,"td"),e(190,"Cor de background de hover no estado danger"),t(),n(191,"td")(192,"code"),e(193,"var(--color-feedback-negative-lighter)"),t()()(),n(194,"tr")(195,"td")(196,"code"),e(197,"--border-color-danger-hover"),t()(),n(198,"td"),e(199,"Cor da borda de hover no estado danger"),t(),n(200,"td")(201,"code"),e(202,"var(--color-feedback-negative-darkest)"),t()()(),n(203,"tr")(204,"td")(205,"code"),e(206,"--background-danger-pressed"),t()(),n(207,"td"),e(208,"Cor de background pressionado no estado danger"),t(),n(209,"td")(210,"code"),e(211,"var(--color-feedback-negative-light)"),t()()(),n(212,"tr")(213,"td")(214,"code"),e(215,"--background-color-button-danger"),t(),e(216,"\xA0"),t(),n(217,"td"),e(218,"Cor de background do bot\xE3o no estado danger"),t(),n(219,"td")(220,"code"),e(221,"var(--color-transparent)"),t()()(),n(222,"tr")(223,"td")(224,"strong"),e(225,"Default Values"),t()(),r(226,"td")(227,"td"),t(),n(228,"tr")(229,"td")(230,"code"),e(231,"--text-color"),t()(),n(232,"td"),e(233,"Cor do texto"),t(),n(234,"td")(235,"code"),e(236,"var(--color-neutral-light-00)"),t()()(),n(237,"tr")(238,"td")(239,"code"),e(240,"--color"),t()(),n(241,"td"),e(242,"Cor principal do bot\xE3o"),t(),n(243,"td")(244,"code"),e(245,"var(--color-action-default)"),t()()(),n(246,"tr")(247,"td")(248,"code"),e(249,"--background-color"),t()(),n(250,"td"),e(251,"Cor de background"),t(),n(252,"td")(253,"code"),e(254,"var(--color-transparent)"),t()()(),n(255,"tr")(256,"td")(257,"code"),e(258,"--border-color"),t()(),n(259,"td"),e(260,"Cor da borda"),t(),n(261,"td")(262,"code"),e(263,"var(--color-transparent)"),t()()(),n(264,"tr")(265,"td")(266,"code"),e(267,"--shadow"),t()(),n(268,"td"),e(269,"Cont\xE9m o valor da sombra do elemento"),t(),n(270,"td")(271,"code"),e(272,"var(--shadow-none)"),t()()(),n(273,"tr")(274,"td")(275,"strong"),e(276,"Hover"),t()(),r(277,"td")(278,"td"),t(),n(279,"tr")(280,"td")(281,"code"),e(282,"--color-hover"),t()(),n(283,"td"),e(284,"Cor principal no estado hover"),t(),n(285,"td")(286,"code"),e(287,"var(--color-action-hover)"),t()()(),n(288,"tr")(289,"td")(290,"code"),e(291,"--background-hover"),t()(),n(292,"td"),e(293,"Cor de background no estado hover"),t(),n(294,"td")(295,"code"),e(296,"var(--color-brand-01-lighter)"),t()()(),n(297,"tr")(298,"td")(299,"code"),e(300,"--border-color-hover"),t()(),n(301,"td"),e(302,"Cor da borda no estado hover"),t(),n(303,"td")(304,"code"),e(305,"var(--color-brand-01-darkest)"),t()()(),n(306,"tr")(307,"td")(308,"strong"),e(309,"Focused"),t()(),r(310,"td")(311,"td"),t(),n(312,"tr")(313,"td")(314,"code"),e(315,"--outline-color-focused"),t()(),n(316,"td"),e(317,"Cor do outline do estado de focus"),t(),n(318,"td")(319,"code"),e(320,"var(--color-action-focus)"),t()()(),n(321,"tr")(322,"td")(323,"strong"),e(324,"Pressed"),t()(),r(325,"td")(326,"td"),t(),n(327,"tr")(328,"td")(329,"code"),e(330,"--color-pressed"),t()(),n(331,"td"),e(332,"Cor principal no estado de pressionado"),t(),n(333,"td")(334,"code"),e(335,"var(--color-action-pressed)"),t()()(),n(336,"tr")(337,"td")(338,"code"),e(339,"--background-pressed"),t()(),n(340,"td"),e(341,"Cor de background no estado de pressionado\xA0"),t(),n(342,"td")(343,"code"),e(344,"var(--color-brand-01-light)"),t()()(),n(345,"tr")(346,"td")(347,"strong"),e(348,"Disabled"),t()(),r(349,"td")(350,"td"),t(),n(351,"tr")(352,"td")(353,"code"),e(354,"--text-color-disabled"),t()(),n(355,"td"),e(356,"Cor do texto no estado disabled"),t(),n(357,"td")(358,"code"),e(359,"var(--color-neutral-dark-70)"),t()()(),n(360,"tr")(361,"td")(362,"code"),e(363,"--color-disabled"),t()(),n(364,"td"),e(365,"Cor principal no estado disabled"),t(),n(366,"td")(367,"code"),e(368,"var(--color-action-disabled)"),t()()(),n(369,"tr")(370,"td")(371,"code"),e(372,"--background-color-disabled"),t()(),n(373,"td"),e(374,"Cor de background no estado disabled"),t(),n(375,"td")(376,"code"),e(377,"var(--color-transparent)"),t()()()()()(),n(378,"div",12)(379,"h4",13),e(380,"Seletor"),t(),n(381,"pre",14),e(382,`<po-button
    p-aria-label="string"
    (p-click)="EventEmitter"
    p-danger="boolean"
    p-disabled="boolean"
    p-icon="string | TemplateRef<void>"
    p-kind="string"
    p-label="string"
    p-loading="boolean"
    p-size="string"
    p-type="PoButtonType" >
</po-button>
`),t()(),n(383,"h4",15),e(384,"Propriedades"),t(),n(385,"table",16)(386,"tr",17)(387,"th",18),e(388,"Nome"),t(),n(389,"th",18),e(390,"Tipo"),t(),n(391,"th",18),e(392,"Padr\xE3o"),t(),n(393,"th",18),e(394,"Descri\xE7\xE3o"),t()(),n(395,"tr",19)(396,"td",20)(397,"div",21)(398,"span",22),e(399," p-aria-label"),r(400,"br"),t()()(),n(401,"td",23)(402,"code",24),e(403,"string"),t()(),n(404,"td",25),e(405,"-"),t(),n(406,"td",26)(407,"em")(408,"strong"),e(409,"(opcional)"),t()(),n(410,"p"),e(411,"Define um "),n(412,"code"),e(413,"aria-label"),t(),e(414," para o "),n(415,"code"),e(416,"po-button"),t(),e(417,"."),t(),n(418,"p"),e(419,"Caso esta propriedade n\xE3o seja informada ser\xE1 considerada a label do bot\xE3o."),t(),n(420,"blockquote")(421,"p"),e(422,"Em caso de bot\xF5es com apenas \xEDcone a atribui\xE7\xE3o de valor \xE0 esta propriedade \xE9 muito importante para acessibilidade."),t()()()(),n(423,"tr",19)(424,"td",20)(425,"div",27)(426,"span",28),e(427," (p-click)"),r(428,"br"),t()()(),n(429,"td",23)(430,"code",29),e(431,"EventEmitter"),t()(),n(432,"td",25),e(433,"-"),t(),n(434,"td",26)(435,"p"),e(436,"A\xE7\xE3o que ser\xE1 executada quando o usu\xE1rio clicar sobre o "),n(437,"code"),e(438,"po-button"),t(),e(439,"."),t()()(),n(440,"tr",19)(441,"td",20)(442,"div",21)(443,"span",22),e(444," p-danger"),r(445,"br"),t()()(),n(446,"td",23)(447,"code",30),e(448,"boolean"),t()(),n(449,"td",25),e(450,"-"),t(),n(451,"td",26)(452,"em")(453,"strong"),e(454,"(opcional)"),t()(),n(455,"p"),e(456,"Deve ser usado em a\xE7\xF5es irrevers\xEDveis que o usu\xE1rio precisa ter cuidado ao execut\xE1-la, como a exclus\xE3o de um registro."),t(),n(457,"blockquote")(458,"p"),e(459,"A propriedade "),n(460,"code"),e(461,'p-kind="tertiary"'),t(),e(462," ser\xE1 inativada ao utilizar esta propriedade."),t()()()(),n(463,"tr",19)(464,"td",20)(465,"div",21)(466,"span",22),e(467," p-disabled"),r(468,"br"),t()()(),n(469,"td",23)(470,"code",30),e(471,"boolean"),t()(),n(472,"td",25)(473,"p")(474,"code"),e(475,"false"),t()()(),n(476,"td",26)(477,"em")(478,"strong"),e(479,"(opcional)"),t()(),n(480,"p"),e(481,"Desabilita o "),n(482,"code"),e(483,"po-button"),t(),e(484," e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),t()()(),n(485,"tr",19)(486,"td",20)(487,"div",21)(488,"span",22),e(489," p-icon"),r(490,"br"),t()()(),n(491,"td",23)(492,"code",24),e(493,"string "),t(),n(494,"code",31),e(495," TemplateRef<void>"),t()(),n(496,"td",25),e(497,"-"),t(),n(498,"td",26)(499,"em")(500,"strong"),e(501,"(opcional)"),t()(),n(502,"p"),e(503,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),t(),n(504,"p"),e(505,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(506,"a",32),e(507,"Biblioteca de \xEDcones"),t(),e(508,". conforme exemplo abaixo:"),t(),n(509,"pre")(510,"code"),e(511,'<po-button p-icon="ph ph-user" p-label="PO button"></po-button>'),t()(),n(512,"p"),e(513,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(514,"em"),e(515,"Font Awesome"),t(),e(516,", da seguinte forma:"),t(),n(517,"pre")(518,"code"),e(519,'<po-button p-icon="fa fa-podcast" p-label="PO button"></po-button>'),t()(),n(520,"p"),e(521,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(522,"code"),e(523,"TemplateRef"),t(),e(524,", conforme exemplo abaixo:"),t(),n(525,"pre")(526,"code"),e(527,`<po-button [p-icon]="template" p-label="button template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>`),t()(),n(528,"blockquote")(529,"p"),e(530,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(531,"code"),e(532,"font-size: inherit"),t(),e(533," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(534,"tr",19)(535,"td",20)(536,"div",21)(537,"span",22),e(538," p-kind"),r(539,"br"),t()()(),n(540,"td",23)(541,"code",24),e(542,"string"),t()(),n(543,"td",25)(544,"p")(545,"code"),e(546,"secondary"),t()()(),n(547,"td",26)(548,"em")(549,"strong"),e(550,"(opcional)"),t()(),n(551,"p"),e(552,"Define o estilo do "),n(553,"code"),e(554,"po-button"),t(),e(555,"."),t(),n(556,"p"),e(557,"Valores v\xE1lidos:"),t(),n(558,"ul")(559,"li")(560,"code"),e(561,"primary"),t(),e(562,": deixa o "),n(563,"code"),e(564,"po-button"),t(),e(565," com destaque, deve ser usado para a\xE7\xF5es prim\xE1rias."),t(),n(566,"li")(567,"code"),e(568,"secondary"),t(),e(569,": estilo padr\xE3o do "),n(570,"code"),e(571,"po-button"),t(),e(572,"."),t(),n(573,"li")(574,"code"),e(575,"tertiary"),t(),e(576,": o "),n(577,"code"),e(578,"po-button"),t(),e(579," \xE9 exibido sem cor do fundo, recebendo menos destaque entre as a\xE7\xF5es."),t()()()(),n(580,"tr",19)(581,"td",20)(582,"div",21)(583,"span",22),e(584," p-label"),r(585,"br"),t()()(),n(586,"td",23)(587,"code",24),e(588,"string"),t()(),n(589,"td",25),e(590,"-"),t(),n(591,"td",26)(592,"em")(593,"strong"),e(594,"(opcional)"),t()(),n(595,"p"),e(596,"Label do bot\xE3o."),t()()(),n(597,"tr",19)(598,"td",20)(599,"div",21)(600,"span",22),e(601," p-loading"),r(602,"br"),t()()(),n(603,"td",23)(604,"code",30),e(605,"boolean"),t()(),n(606,"td",25)(607,"p")(608,"code"),e(609,"false"),t()()(),n(610,"td",26)(611,"em")(612,"strong"),e(613,"(opcional)"),t()(),n(614,"p"),e(615,"Exibe um \xEDcone de carregamento \xE0 esquerda do "),n(616,"em"),e(617,"label"),t(),e(618," do bot\xE3o."),t(),n(619,"blockquote")(620,"p"),e(621,"Quando esta propriedade estiver habilitada, desabilitar\xE1 o bot\xE3o."),t()()()(),n(622,"tr",19)(623,"td",20)(624,"div",21)(625,"span",22),e(626," p-size"),r(627,"br"),t()()(),n(628,"td",23)(629,"code",24),e(630,"string"),t()(),n(631,"td",25)(632,"p")(633,"code"),e(634,"medium"),t()()(),n(635,"td",26)(636,"em")(637,"strong"),e(638,"(opcional)"),t()(),n(639,"p"),e(640,"Define o tamanho do "),n(641,"code"),e(642,"po-button"),t(),e(643,"."),t(),n(644,"p"),e(645,"Valores v\xE1lidos:"),t(),n(646,"ul")(647,"li")(648,"code"),e(649,"medium"),t(),e(650,": o "),n(651,"code"),e(652,"po-button"),t(),e(653," fica do tamanho padr\xE3o, com 44px de altura.;"),t(),n(654,"li")(655,"code"),e(656,"large"),t(),e(657,": o "),n(658,"code"),e(659,"po-button"),t(),e(660," fica maior, com 56px de altura.;"),t()()()(),n(661,"tr",19)(662,"td",20)(663,"div",21)(664,"span",22),e(665," p-type"),r(666,"br"),t()()(),n(667,"td",23)(668,"code",33),e(669,"PoButtonType"),t()(),n(670,"td",25)(671,"p")(672,"code"),e(673,"PoButtonType.Button"),t()()(),n(674,"td",26)(675,"em")(676,"strong"),e(677,"(opcional)"),t()(),n(678,"p"),e(679,"Define o tipo do bot\xE3o."),t()()()(),n(680,"h3",15),e(681,"M\xE9todos"),t(),n(682,"table",34)(683,"tr",19)(684,"th",35)(685,"div",21)(686,"h4")(687,"span",22),e(688," focus "),t()()()()(),n(689,"tr",26)(690,"td",26)(691,"p"),e(692,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(693,"p"),e(694,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(695,"pre")(696,"code"),e(697,`import { PoButtonComponent } from '@po-ui/ng-components';

...

@ViewChild(PoButtonComponent, { static: true }) button: PoButtonComponent;

focusButton() {
  this.button.focus();
}`),t()()()()(),r(698,"br"),n(699,"h3"),e(700,"Enums"),t(),n(701,"h4",4)(702,"code",5),e(703,"PoButtonType"),t()(),n(704,"div",2)(705,"p"),e(706,"Enumera\xE7\xE3o que define os tipos poss\xEDveis para o "),n(707,"code"),e(708,"PoButtonComponent"),t(),e(709,`. Estes tipos est\xE3o relacionados ao comportamento
do bot\xE3o quando utilizado dentro de um formul\xE1rio HTML.`),t()(),n(710,"h4",15),e(711,"Propriedades"),t(),n(712,"table",16)(713,"tr",17)(714,"th",18),e(715,"Nome"),t(),n(716,"th",18),e(717,"Descri\xE7\xE3o"),t()(),n(718,"tr",19)(719,"td",20)(720,"div",21)(721,"span",22),e(722," Submit"),r(723,"br"),t()()(),n(724,"td",26)(725,"p"),e(726,"Define o bot\xE3o como do tipo "),n(727,"code"),e(728,"submit"),t(),e(729,`. Quando clicado, o formul\xE1rio \xE9 enviado automaticamente,
disparando o evento `),n(730,"code"),e(731,"submit"),t(),e(732,"."),t()()(),n(733,"tr",19)(734,"td",20)(735,"div",21)(736,"span",22),e(737," Button"),r(738,"br"),t()()(),n(739,"td",26)(740,"p"),e(741,"Define o bot\xE3o como do tipo "),n(742,"code"),e(743,"button"),t(),e(744,`. Este tipo de bot\xE3o n\xE3o possui comportamento padr\xE3o associado
e \xE9 utilizado principalmente para a\xE7\xF5es program\xE1ticas como cliques e disparos de eventos customizados.`),t()()(),n(745,"tr",19)(746,"td",20)(747,"div",21)(748,"span",22),e(749," Reset"),r(750,"br"),t()()(),n(751,"td",26)(752,"p"),e(753,"Define o bot\xE3o como do tipo "),n(754,"code"),e(755,"reset"),t(),e(756,`. Quando clicado, redefine os campos do formul\xE1rio ao qual pertence
para seus valores iniciais.`),t()()()()())},dependencies:[k],encapsulation:2})}return i})();var Ee=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||i)(y(J),y(Z))};static \u0275cmp=g({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Button",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,o){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),r(3,"sample-po-button-doc"),t(),n(4,"po-tab",3),r(5,"sample-po-button-basic-view")(6,"sample-po-button-labs-view")(7,"sample-po-button-social-network-view"),t()()()),a&2&&(s("p-actions",o.actions),d(2),s("p-active",o.activeTab.includes("doc")),d(2),s("p-hide",o.hidePoWebSample)("p-active",o.activeTab.includes("web")))},dependencies:[le,v,C,se,ce,be,ge],encapsulation:2})}return i})();var De=[{path:"",component:Ee}],he=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=L({type:i});static \u0275inj=I({imports:[N.forChild(De),N]})}return i})();var it=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=L({type:i});static \u0275inj=I({imports:[pe,he]})}return i})();export{it as DocPoButtonModule};
