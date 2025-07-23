import{$ as V,$a as _,$c as te,Bc as T,Cd as oe,F as u,Fa as q,G as c,Ga as o,Ia as R,Ka as E,Kb as D,La as S,Lb as G,Ma as f,Mb as F,Nb as N,Oa as H,Ob as W,Od as ne,Pa as P,Pb as L,Qa as K,Sb as Q,T as p,Tb as J,U as B,Vb as X,Wb as Y,Xd as C,Yb as Z,Yd as x,Zb as j,_ as g,ha as m,ka as y,md as O,na as e,oa as t,oc as $,pa as l,re as w,se as ie,ta as A,ua as b,y as k,yd as I,zc as ee}from"./chunk-PI3TYJHE.js";var Se=()=>({label:"Option 1",value:"1"}),fe=()=>({label:"Option 2",value:"2"}),ve=(i,Ee)=>[i,Ee],ae=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-radio-group-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","radioGroupBasic","p-label","PO Radio Group",3,"p-options"]],template:function(a,n){a&1&&l(0,"po-radio-group",0),a&2&&m("p-options",K(3,ve,H(1,Se),H(2,fe)))},dependencies:[T],encapsulation:2})}return i})();var xe=i=>({"docs-sample-code-tabs":i}),re=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-radio-group-basic-view"]],standalone:!1,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","E2E"],["appCodeHighlight","",1,"test"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),e(1,"blockquote",0)(2,"label",1),o(3,"PO Radio Group Basic"),t(),e(4,"a",2),b("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.html"),t(),e(13,"pre",7),o(14,`<po-radio-group
  name="radioGroupBasic"
  p-label="PO Radio Group"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-radio-group>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts"),t(),e(19,"pre",9),o(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-radio-group-basic',
  templateUrl: './sample-po-radio-group-basic.component.html',
  standalone: false
})
export class SamplePoRadioGroupBasicComponent {}
`),t()()(),e(21,"po-tab",10)(22,"div")(23,"label",6),o(24,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.e2e-spec.ts"),t(),e(25,"pre",11),o(26,`import { browser } from 'protractor';

import { PoRadioTest } from './sample-po-radio-group-basic.component.po';

describe('Po-Radio-Group E2E', () => {
  const radio: PoRadioTest = new PoRadioTest();

  beforeEach(() => {
    radio.navigateTo();
  });

  it('Verify if button is disable on init', () => {
    browser.refresh();
    expect(radio.poButton.isEnabled()).toBeFalsy();
  });

  it('Making the choice gender female', () => {
    radio.poRadioFemale.click();
    expect(radio.poRadioFemale).toBeTruthy();
    const btn = radio.poButton;
    expect(btn.isEnabled()).toBeTruthy();
  });

  it('Makink the choice gender male', () => {
    radio.poRadioMale.click();
    expect(radio.poRadioMale).toBeTruthy();
    const btn = radio.poButton;
    expect(btn.isEnabled()).toBeTruthy();
  });

  it('Verify if button is disable after browser reload', () => {
    radio.poRadioMale.click();
    browser.refresh();
    expect(radio.poButton.isEnabled()).toBeFalsy();
  });

  it('Choose interest book', () => {
    radio.poRadioBook.click();
    expect(radio.poRadioBook.getAttribute('class')).toBeTruthy();
    expect(radio.poRadioMovie.getAttribute('po-input-radio')).toBeFalsy();
    expect(radio.poRadioMusic.getAttribute('po-input-radio')).toBeFalsy();
    expect(radio.poRadioArt.getAttribute('po-input-radio')).toBeFalsy();
  });

  it('Choose interest film', () => {
    radio.poRadioMovie.click();
    expect(radio.poRadioMovie.getAttribute('class')).toBeTruthy();
    expect(radio.poRadioBook.getAttribute('po-input-radio')).toBeFalsy();
    expect(radio.poRadioMusic.getAttribute('po-input-radio')).toBeFalsy();
    expect(radio.poRadioArt.getAttribute('po-input-radio')).toBeFalsy();
  });

  it('Choose interest music', () => {
    radio.poRadioMusic.click();
    expect(radio.poRadioMusic.getAttribute('class')).toBeTruthy();
    expect(radio.poRadioMovie.getAttribute('po-input-radio')).toBeFalsy();
    expect(radio.poRadioBook.getAttribute('po-input-radio')).toBeFalsy();
    expect(radio.poRadioArt.getAttribute('po-input-radio')).toBeFalsy();
  });

  it('Choose interest art', () => {
    radio.poRadioArt.click();
    expect(radio.poRadioArt.getAttribute('class')).toBeTruthy();
    expect(radio.poRadioMovie.getAttribute('po-input-radio')).toBeFalsy();
    expect(radio.poRadioBook.getAttribute('po-input-radio')).toBeFalsy();
    expect(radio.poRadioMusic.getAttribute('po-input-radio')).toBeFalsy();
  });
});
`),t(),e(27,"label",6),o(28,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.po.ts"),t(),e(29,"pre",11),o(30,`import { browser, by, element } from 'protractor';

export class PoRadioTest {
  private sampleRadio = 'sample-po-radio-group';

  private labelRadio = '.po-radio-group-label';

  private inputRadio = '.po-radio-group-input';

  navigateTo() {
    return browser.get(browser.baseUrl + '/documentation/po-radio-group?view=web');
  }

  private getInterestArea(area) {
    return element(
      by.css(
        \`\${this.sampleRadio} po-radio-group[name="interestName"] \${this.inputRadio}[value="\${area}"]+\${this.labelRadio}\`
      )
    );
  }

  private getGenderName(gender) {
    return element(
      by.css(
        \`\${this.sampleRadio} po-radio-group[name="genderName"] \${this.inputRadio}[value="\${gender}"]+\${this.labelRadio}\`
      )
    );
  }

  get poButton() {
    return element(by.css(\`\${this.sampleRadio} po-button .po-button\`));
  }

  get poRadioMovie() {
    return this.getInterestArea('movies');
  }

  get poRadioBook() {
    return this.getInterestArea('books');
  }

  get poRadioArt() {
    return this.getInterestArea('arts');
  }

  get poRadioMusic() {
    return this.getInterestArea('music');
  }

  get poRadioSport() {
    return this.getInterestArea('sports');
  }

  get poRadioFemale() {
    return this.getGenderName('female');
  }

  get poRadioMale() {
    return this.getGenderName('male');
  }
}
`),t()()()()(),e(31,"div",12),l(32,"sample-po-radio-group-basic"),t(),l(33,"hr")),a&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),R(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",P(4,xe,n.hideSampleCodeTabs)))},dependencies:[_,w,C,x,ae],encapsulation:2})}return i})();var pe=(()=>{class i{columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"}];sizesOptions=[{label:"Medium",value:"medium"},{label:"Large",value:"large"}];ngOnInit(){this.restore()}addOption(){this.options.push(this.option),this.option=this.getNewOption()}changeEvent(d){this.event=d}restore(){this.event="",this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage="",this.option=this.getNewOption(),this.options=[]}getNewOption(){return{label:void 0,value:void 0}}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-radio-group-labs"]],standalone:!1,decls:28,vars:27,consts:[["optionForm","ngForm"],["propertiesForm","ngForm"],["name","radioGroupLabs",3,"ngModelChange","p-change","ngModel","p-columns","p-disabled","p-help","p-label","p-optional","p-options","p-required","p-field-error-message","p-show-required","p-size","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionDisabled","p-label","Option Disabled",1,"po-lg-4",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columns","p-columns","3","p-label","Columns",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","3","p-label","Properties",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"click"]],template:function(a,n){if(a&1){let s=A();e(0,"po-radio-group",2),f("ngModelChange",function(r){return u(s),S(n.radioGroup,r)||(n.radioGroup=r),c(r)}),b("p-change",function(){return u(s),c(n.changeEvent("p-change"))}),t(),l(1,"hr"),e(2,"div",3),l(3,"po-info",4)(4,"po-info",5),t(),l(5,"hr"),e(6,"form",null,0)(8,"div",3)(9,"po-input",6),f("ngModelChange",function(r){return u(s),S(n.option.label,r)||(n.option.label=r),c(r)}),t(),e(10,"po-input",7),f("ngModelChange",function(r){return u(s),S(n.option.value,r)||(n.option.value=r),c(r)}),t(),e(11,"po-switch",8),f("ngModelChange",function(r){return u(s),S(n.option.disabled,r)||(n.option.disabled=r),c(r)}),t()(),e(12,"div",3)(13,"po-button",9),b("p-click",function(){u(s);let r=q(7);return n.addOption(),c(r.reset())}),t()()(),l(14,"hr"),e(15,"form",null,1)(17,"div",3)(18,"po-input",10),f("ngModelChange",function(r){return u(s),S(n.label,r)||(n.label=r),c(r)}),t(),e(19,"po-input",11),f("ngModelChange",function(r){return u(s),S(n.help,r)||(n.help=r),c(r)}),t()(),e(20,"div",3)(21,"po-radio-group",12),f("ngModelChange",function(r){return u(s),S(n.columns,r)||(n.columns=r),c(r)}),t(),e(22,"po-checkbox-group",13),f("ngModelChange",function(r){return u(s),S(n.properties,r)||(n.properties=r),c(r)}),t()(),e(23,"div",3)(24,"po-radio-group",14),f("ngModelChange",function(r){return u(s),S(n.size,r)||(n.size=r),c(r)}),t(),e(25,"po-input",15),f("ngModelChange",function(r){return u(s),S(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),c(r)}),t()(),e(26,"div",3)(27,"po-button",16),b("click",function(){return u(s),q(16).reset(),c(n.restore())}),t()()()}if(a&2){let s=q(7);E("ngModel",n.radioGroup),m("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit")),p(3),m("p-value",n.radioGroup),p(),m("p-value",n.event),p(5),E("ngModel",n.option.label),p(),E("ngModel",n.option.value),p(),E("ngModel",n.option.disabled),p(2),m("p-disabled",s.invalid),p(5),E("ngModel",n.label),p(),E("ngModel",n.help),p(2),E("ngModel",n.columns),m("p-options",n.columnOptions),p(),E("ngModel",n.properties),m("p-options",n.propertiesOptions),p(2),E("ngModel",n.size),m("p-options",n.sizesOptions),p(),E("ngModel",n.fieldErrorMessage)}},dependencies:[L,G,F,W,N,$,ee,T,O,te,oe],encapsulation:2})}return i})();var Re=i=>({"docs-sample-code-tabs":i}),de=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-radio-group-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),e(1,"blockquote",0)(2,"label",1),o(3,"PO Radio Group Labs"),t(),e(4,"a",2),b("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.html"),t(),e(13,"pre",7),o(14,`<po-radio-group
  name="radioGroupLabs"
  [(ngModel)]="radioGroup"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-radio-group>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="radioGroup"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #optionForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6 po-lg-4" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6 po-lg-4" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>

    <po-switch class="po-lg-4" name="optionDisabled" [(ngModel)]="option.disabled" p-label="Option Disabled">
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6 po-lg-3"
      p-label="Add Option"
      [p-disabled]="optionForm.invalid"
      (p-click)="addOption(); optionForm.reset()"
    >
    </po-button>
  </div>
</form>

<hr />

<form #propertiesForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-6 po-md-12"
      name="columns"
      [(ngModel)]="columns"
      p-columns="3"
      p-label="Columns"
      [p-options]="columnOptions"
    >
    </po-radio-group>

    <po-checkbox-group
      class="po-lg-6 po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="3"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>
  <div class="po-row">
    <po-radio-group class="po-lg-6 po-md-12" name="size" [(ngModel)]="size" p-label="Size" [p-options]="sizesOptions">
    </po-radio-group>

    <po-input
      class="po-md-6"
      name="fieldErrorMessage"
      [(ngModel)]="fieldErrorMessage"
      p-clean
      p-label="Field Error Message"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (click)="propertiesForm.reset(); restore()"> </po-button>
  </div>
</form>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts"),t(),e(19,"pre",9),o(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-labs',
  templateUrl: './sample-po-radio-group-labs.component.html',
  standalone: false
})
export class SamplePoRadioGroupLabsComponent implements OnInit {
  columns: number;
  event: string;
  help: string;
  label: string;
  option: PoRadioGroupOption;
  options: Array<PoRadioGroupOption>;
  properties: Array<string>;
  radioGroup: string;
  fieldErrorMessage: string;
  size: string;

  readonly columnOptions: Array<PoRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' }
  ];

  readonly sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options.push(this.option);
    this.option = this.getNewOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.event = '';
    this.radioGroup = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';

    this.option = this.getNewOption();
    this.options = [];
  }

  private getNewOption(): PoRadioGroupOption {
    return {
      label: undefined,
      value: undefined
    };
  }
}
`),t()()()()(),e(21,"div",10),l(22,"sample-po-radio-group-labs"),t(),l(23,"hr")),a&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),R(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",P(4,Re,n.hideSampleCodeTabs)))},dependencies:[_,w,C,x,pe],encapsulation:2})}return i})();var se=(()=>{class i{language="es";original="";translated="";languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];changeLanguage(d){let a=this.wordsOptions.find(n=>n.id===this.original);a&&(this.translated=a[d||this.language])}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-radio-group-translator"]],standalone:!1,decls:6,vars:5,consts:[["f","ngForm"],[1,"po-row"],["name","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4",3,"ngModelChange","ngModel"]],template:function(a,n){if(a&1){let s=A();e(0,"form",null,0)(2,"div",1)(3,"po-radio-group",2),f("ngModelChange",function(r){return u(s),S(n.language,r)||(n.language=r),c(r)}),b("p-change",function(r){return u(s),c(n.changeLanguage(r))}),t(),e(4,"po-select",3),f("ngModelChange",function(r){return u(s),S(n.original,r)||(n.original=r),c(r)}),b("p-change",function(r){return u(s),c(n.changeLanguage(r))}),t(),e(5,"po-input",4),f("ngModelChange",function(r){return u(s),S(n.translated,r)||(n.translated=r),c(r)}),t()()()}a&2&&(p(3),E("ngModel",n.language),m("p-options",n.languageOptions),p(),E("ngModel",n.original),m("p-options",n.optionsList),p(),E("ngModel",n.translated))},dependencies:[L,G,F,W,N,T,O,I],encapsulation:2})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-radio-group-translator-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),e(1,"blockquote",0)(2,"label",1),o(3,"PO Radio Group - Translator"),t(),e(4,"a",2),b("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.html"),t(),e(13,"pre",7),o(14,`<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-4"
      name="language"
      [(ngModel)]="language"
      p-label="Select a Language"
      p-required
      [p-options]="languageOptions"
      (p-change)="changeLanguage($event)"
    >
    </po-radio-group>

    <po-select
      class="po-lg-4"
      name="original"
      [(ngModel)]="original"
      p-label="Original Text (Portuguese)"
      p-required
      [p-options]="optionsList"
      (p-change)="changeLanguage($event)"
    >
    </po-select>

    <po-input
      class="po-lg-4"
      name="translated"
      [(ngModel)]="translated"
      p-label="Translated Text"
      p-readonly
      p-required
    >
    </po-input>
  </div>
</form>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts"),t(),e(19,"pre",9),o(20,`import { Component } from '@angular/core';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-translator',
  templateUrl: './sample-po-radio-group-translator.component.html',
  standalone: false
})
export class SamplePoRadioGroupTranslatorComponent {
  language: string = 'es';
  original: string = '';
  translated: string = '';

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<PoSelectOption> = [
    { value: '1', label: 'Ol\xE1' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Vis\xE3o' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineaci\xF3n' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  changeLanguage(value) {
    const word = this.wordsOptions.find(item => item.id === this.original);

    if (word) {
      this.translated = word[value || this.language];
    }
  }
}
`),t()()()()(),e(21,"div",10),l(22,"sample-po-radio-group-translator"),t(),l(23,"hr")),a&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),R(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",P(4,Te,n.hideSampleCodeTabs)))},dependencies:[_,w,C,x,se],encapsulation:2})}return i})();var ue=(()=>{class i{formBuilder;translatorForm;languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];constructor(d){this.formBuilder=d}ngOnInit(){this.translatorForm=this.formBuilder.group({language:["es",D.required],original:[void 0,D.required],translated:[void 0,D.required]})}changeLanguage(){let d=this.translatorForm.value.language,a=this.translatorForm.value.original,n=this.wordsOptions.find(s=>s.id===a);n&&this.translatorForm.patchValue({translated:n[d]})}static \u0275fac=function(a){return new(a||i)(B(X))};static \u0275cmp=g({type:i,selectors:[["sample-po-radio-group-translator-reactive-form"]],standalone:!1,decls:5,vars:3,consts:[[3,"formGroup"],[1,"po-row"],["name","language","formControlName","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","original","formControlName","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","translated","formControlName","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4"]],template:function(a,n){a&1&&(e(0,"form",0)(1,"div",1)(2,"po-radio-group",2),b("p-change",function(){return n.changeLanguage()}),t(),e(3,"po-select",3),b("p-change",function(){return n.changeLanguage()}),t(),l(4,"po-input",4),t()()),a&2&&(m("formGroup",n.translatorForm),p(2),m("p-options",n.languageOptions),p(),m("p-options",n.optionsList))},dependencies:[L,G,F,Q,J,T,O,I],encapsulation:2})}return i})();var Fe=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-radio-group-translator-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),e(1,"blockquote",0)(2,"label",1),o(3,"PO Radio Group - Translator Reactive Form"),t(),e(4,"a",2),b("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html"),t(),e(13,"pre",7),o(14,`<form [formGroup]="translatorForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-4"
      name="language"
      formControlName="language"
      p-label="Select a Language"
      p-required
      [p-options]="languageOptions"
      (p-change)="changeLanguage()"
    >
    </po-radio-group>

    <po-select
      class="po-lg-4"
      name="original"
      formControlName="original"
      p-label="Original Text (Portuguese)"
      p-required
      [p-options]="optionsList"
      (p-change)="changeLanguage()"
    >
    </po-select>

    <po-input
      class="po-lg-4"
      name="translated"
      formControlName="translated"
      p-label="Translated Text"
      p-readonly
      p-required
    >
    </po-input>
  </div>
</form>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts"),t(),e(19,"pre",9),o(20,`import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-translator-reactive-form',
  templateUrl: './sample-po-radio-group-translator-reactive-form.component.html',
  standalone: false
})
export class SamplePoRadioGroupTranslatorReactiveFormComponent implements OnInit {
  translatorForm: UntypedFormGroup;

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<PoSelectOption> = [
    { value: '1', label: 'Ol\xE1' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Vis\xE3o' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineaci\xF3n' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.translatorForm = this.formBuilder.group({
      language: ['es', Validators.required],
      original: [undefined, Validators.required],
      translated: [undefined, Validators.required]
    });
  }

  changeLanguage() {
    const language = this.translatorForm.value.language;
    const original = this.translatorForm.value.original;

    const word = this.wordsOptions.find(item => item.id === original);

    if (word) {
      this.translatorForm.patchValue({
        translated: word[language]
      });
    }
  }
}
`),t()()()()(),e(21,"div",10),l(22,"sample-po-radio-group-translator-reactive-form"),t(),l(23,"hr")),a&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),R(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",P(4,Fe,n.hideSampleCodeTabs)))},dependencies:[_,w,C,x,ue],encapsulation:2})}return i})();var ge=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["sample-po-radio-group-doc"]],standalone:!1,decls:624,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo"],["href","/documentation/po-select"],["href","/documentation/po-checkbox-group"],["id","acessibilidade-tratada-no-componente-interno-po-radio"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://doc.animaliads.io/docs/components/radio"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoRadioGroupOption[]"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(a,n){a&1&&(e(0,"div",0)(1,"p",1)(2,"code"),o(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),e(4,"div",2)(5,"p"),o(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),e(7,"blockquote")(8,"p"),o(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),e(10,"code"),o(11,"FormsModule"),t(),o(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),e(13,"code"),o(14,"ReactiveFormsModule"),t(),o(15,", ambos nativos do Angular."),t()()(),e(16,"h3",3),o(17,"Componente"),t(),e(18,"h4",4)(19,"code",5),o(20,"PoRadioGroupComponent"),t()(),e(21,"div",2)(22,"p"),o(23,"O componente "),e(24,"code"),o(25,"po-radio-group"),t(),o(26,` deve ser utilizado para disponibilizar m\xFAltiplas op\xE7\xF5es ao usu\xE1rio, permitindo a ele que
selecione apenas uma delas. Seu uso \xE9 recomendado para um n\xFAmero pequeno de op\xE7\xF5es, caso contr\xE1rio, recomenda-se o uso
do `),e(27,"a",6)(28,"strong"),o(29,"po-combo"),t()(),o(30," ou "),e(31,"a",7)(32,"strong"),o(33,"po-select"),t()(),o(34,"."),t(),e(35,"p"),o(36,`Este n\xE3o \xE9 um componente de multisele\xE7\xE3o, se for este o caso, deve-se utilizar o
`),e(37,"a",8)(38,"strong"),o(39,"po-checkbox-group"),t()(),o(40,"."),t(),e(41,"blockquote")(42,"p"),o(43,"Ao passar um valor para o "),e(44,"em"),o(45,"model"),t(),o(46," que n\xE3o esteja na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),e(47,"code"),o(48,"undefined"),t(),o(49,"."),t()(),e(50,"h4",9),o(51,"Acessibilidade tratada no componente interno "),e(52,"code"),o(53,"po-radio"),t(),o(54,":"),t(),e(55,"p"),o(56,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),t(),e(57,"ul")(58,"li"),o(59,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),e(60,"a",10),o(61,"WCAG 4.1.2: Name, Role, Value"),t()(),e(62,"li"),o(63,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferen\xE7a visual entre os estados. "),e(64,"a",11),o(65,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),t()(),e(66,"li"),o(67,"Quando em foco, o componente \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),e(68,"a",12),o(69,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),t()(),e(70,"li"),o(71,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),e(72,"a",13),o(73,"(WCAG 2.4.12: Focus Appearance"),t()()(),e(74,"p"),o(75,"Conforme documenta\xE7\xE3o em: "),e(76,"a",14),o(77,"https://doc.animaliads.io/docs/components/radio"),t()(),e(78,"h4",15),o(79,"Tokens customiz\xE1veis"),t(),e(80,"p"),o(81,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),l(82,"br"),o(83,`
Obs: No componente Radio Group, a customiza\xE7\xE3o ocorre principalmente nos elementos `),e(84,"code"),o(85,"po-radio"),t(),o(86," que comp\xF5em o grupo de op\xE7\xF5es. "),l(87,"br"),o(88,`
Portanto, ao aplicar estilos customizados, \xE9 importante focar na customiza\xE7\xE3o dos elementos `),e(89,"code"),o(90,"po-radio"),t(),o(91," em vez do pr\xF3prio "),e(92,"code"),o(93,"po-radio-group"),t(),o(94,"."),t(),e(95,"blockquote")(96,"p"),o(97,"Para maiores informa\xE7\xF5es, acesse o guia "),e(98,"a",16),o(99,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),o(100,"."),t()(),e(101,"table")(102,"thead")(103,"tr")(104,"th"),o(105,"Propriedade"),t(),e(106,"th"),o(107,"Descri\xE7\xE3o"),t(),e(108,"th"),o(109,"Valor Padr\xE3o"),t()()(),e(110,"tbody")(111,"tr")(112,"td")(113,"strong"),o(114,"Default Values"),t()(),l(115,"td")(116,"td"),t(),e(117,"tr")(118,"td")(119,"code"),o(120,"--border-color"),t()(),e(121,"td"),o(122,"Cor da borda"),t(),e(123,"td")(124,"code"),o(125,"var(--color-neutral-dark-70)"),t()()(),e(126,"tr")(127,"td")(128,"strong"),o(129,"Hover"),t()(),l(130,"td")(131,"td"),t(),e(132,"tr")(133,"td")(134,"code"),o(135,"--shadow-color-hover"),t()(),e(136,"td"),o(137,"Cor da sombra no estado hover"),t(),e(138,"td")(139,"code"),o(140,"var(--color-brand-01-lighter)"),t()()(),e(141,"tr")(142,"td")(143,"code"),o(144,"--color-hover"),t()(),e(145,"td"),o(146,"Cor principal no estado hover"),t(),e(147,"td")(148,"code"),o(149,"var(--color-brand-01-dark)"),t()()(),e(150,"tr")(151,"td")(152,"strong"),o(153,"Focused"),t()(),l(154,"td")(155,"td"),t(),e(156,"tr")(157,"td")(158,"code"),o(159,"--outline-color-focused"),t()(),e(160,"td"),o(161,"Cor do outline do estado de focus"),t(),e(162,"td")(163,"code"),o(164,"var(--color-brand-01-darkest)"),t()()(),e(165,"tr")(166,"td")(167,"strong"),o(168,"checked"),t()(),l(169,"td")(170,"td"),t(),e(171,"tr")(172,"td")(173,"code"),o(174,"--color-unchecked"),t()(),e(175,"td"),o(176,"Cor quando n\xE3o selecionado"),t(),e(177,"td")(178,"code"),o(179,"var(--color-neutral-light-00)"),t()()(),e(180,"tr")(181,"td")(182,"code"),o(183,"--color-checked"),t()(),e(184,"td"),o(185,"Cor quando selecionado"),t(),e(186,"td")(187,"code"),o(188,"var(--color-action-default)"),t()()(),e(189,"tr")(190,"td")(191,"strong"),o(192,"Disabled"),t()(),l(193,"td")(194,"td"),t(),e(195,"tr")(196,"td")(197,"code"),o(198,"--color-unchecked-disabled"),t()(),e(199,"td"),o(200,"Cor pricipal quando n\xE3o selecionado no estado disabled"),t(),e(201,"td")(202,"code"),o(203,"var(--color-neutral-light-30)"),t()()(),e(204,"tr")(205,"td")(206,"code"),o(207,"--color-checked-disabled"),t()(),e(208,"td"),o(209,"Cor pricipal quando selecionado no estado disabled"),t(),e(210,"td")(211,"code"),o(212,"var(--color-neutral-dark-70)"),t()()()()()(),e(213,"div",17)(214,"h4",18),o(215,"Seletor"),t(),e(216,"pre",19),o(217,`<po-radio-group
    p-auto-focus="boolean"
    (p-change)="EventEmitter"
    p-columns="number"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    p-label="string"
    name="string"
    p-optional="boolean"
    p-options="PoRadioGroupOption[]"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-radio-group>
`),t()(),e(218,"h4",20),o(219,"Propriedades"),t(),e(220,"table",21)(221,"tr",22)(222,"th",23),o(223,"Nome"),t(),e(224,"th",23),o(225,"Tipo"),t(),e(226,"th",23),o(227,"Padr\xE3o"),t(),e(228,"th",23),o(229,"Descri\xE7\xE3o"),t()(),e(230,"tr",24)(231,"td",25)(232,"div",26)(233,"span",27),o(234," p-auto-focus"),l(235,"br"),t()()(),e(236,"td",28)(237,"code",29),o(238,"boolean"),t()(),e(239,"td",30)(240,"p")(241,"code"),o(242,"false"),t()()(),e(243,"td",31)(244,"em")(245,"strong"),o(246,"(opcional)"),t()(),e(247,"p"),o(248,"Aplica foco no elemento ao ser iniciado."),t(),e(249,"blockquote")(250,"p"),o(251,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),e(252,"tr",24)(253,"td",25)(254,"div",32)(255,"span",33),o(256," (p-change)"),l(257,"br"),t()()(),e(258,"td",28)(259,"code",34),o(260,"EventEmitter"),t()(),e(261,"td",30),o(262,"-"),t(),e(263,"td",31)(264,"em")(265,"strong"),o(266,"(opcional)"),t()(),e(267,"p"),o(268,"Evento ao alterar valor do campo."),t()()(),e(269,"tr",24)(270,"td",25)(271,"div",26)(272,"span",27),o(273," p-columns"),l(274,"br"),t()()(),e(275,"td",28)(276,"code",35),o(277,"number"),t()(),e(278,"td",30)(279,"p")(280,"code"),o(281,"2"),t()()(),e(282,"td",31)(283,"em")(284,"strong"),o(285,"(opcional)"),t()(),e(286,"p"),o(287,"Define a quantidade de colunas para exibi\xE7\xE3o das op\xE7\xF5es."),t(),e(288,"p")(289,"strong"),o(290,"Considera\xE7\xF5es:"),t()(),e(291,"ul")(292,"li"),o(293,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),e(294,"code"),o(295,"1"),t(),o(296," e "),e(297,"code"),o(298,"4"),t(),o(299," colunas."),t(),e(300,"li"),o(301,"O n\xFAmero m\xE1ximo de colunas \xE9 invari\xE1vel nas seguintes resolu\xE7\xF5es:"),e(302,"ul")(303,"li")(304,"code"),o(305,"sm"),t(),o(306,": "),e(307,"code"),o(308,"1"),t()(),e(309,"li")(310,"code"),o(311,"md"),t(),o(312,": "),e(313,"code"),o(314,"2"),t()()()()()()(),e(315,"tr",24)(316,"td",25)(317,"div",26)(318,"span",27),o(319," p-disabled"),l(320,"br"),t()()(),e(321,"td",28)(322,"code",29),o(323,"boolean"),t()(),e(324,"td",30)(325,"p")(326,"code"),o(327,"false"),t()()(),e(328,"td",31)(329,"em")(330,"strong"),o(331,"(opcional)"),t()(),e(332,"p"),o(333,"Indica que o campo ser\xE1 desabilitado."),t()()(),e(334,"tr",24)(335,"td",25)(336,"div",26)(337,"span",27),o(338," p-error-limit"),l(339,"br"),t()()(),e(340,"td",28)(341,"code",29),o(342,"boolean"),t()(),e(343,"td",30)(344,"p")(345,"code"),o(346,"false"),t()()(),e(347,"td",31)(348,"em")(349,"strong"),o(350,"(opcional)"),t()(),e(351,"p"),o(352,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),e(353,"blockquote")(354,"p"),o(355,"Caso essa propriedade seja definida como "),e(356,"code"),o(357,"true"),t(),o(358,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),e(359,"tr",24)(360,"td",25)(361,"div",26)(362,"span",27),o(363," p-field-error-message"),l(364,"br"),t()()(),e(365,"td",28)(366,"code",36),o(367,"string"),t()(),e(368,"td",30),o(369,"-"),t(),e(370,"td",31)(371,"em")(372,"strong"),o(373,"(opcional)"),t()(),e(374,"p"),o(375,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),e(376,"blockquote")(377,"p"),o(378,"Necess\xE1rio que a propriedade "),e(379,"code"),o(380,"p-required"),t(),o(381," esteja habilitada."),t()()()(),e(382,"tr",24)(383,"td",25)(384,"div",26)(385,"span",27),o(386," p-help"),l(387,"br"),t()()(),e(388,"td",28)(389,"code",36),o(390,"string"),t()(),e(391,"td",30),o(392,"-"),t(),e(393,"td",31)(394,"em")(395,"strong"),o(396,"(opcional)"),t()(),e(397,"p"),o(398,"Texto de apoio do campo."),t()()(),e(399,"tr",24)(400,"td",25)(401,"div",26)(402,"span",27),o(403," p-label"),l(404,"br"),t()()(),e(405,"td",28)(406,"code",36),o(407,"string"),t()(),e(408,"td",30),o(409,"-"),t(),e(410,"td",31)(411,"em")(412,"strong"),o(413,"(opcional)"),t()(),e(414,"p"),o(415,"Label do campo."),t()()(),e(416,"tr",24)(417,"td",25)(418,"div",26)(419,"span",27),o(420," name"),l(421,"br"),t()()(),e(422,"td",28)(423,"code",36),o(424,"string"),t()(),e(425,"td",30),o(426,"-"),t(),e(427,"td",31)(428,"p"),o(429,"Nome das op\xE7\xF5es."),t()()(),e(430,"tr",24)(431,"td",25)(432,"div",26)(433,"span",27),o(434," p-optional"),l(435,"br"),t()()(),e(436,"td",28)(437,"code",29),o(438,"boolean"),t()(),e(439,"td",30)(440,"p")(441,"code"),o(442,"false"),t()()(),e(443,"td",31)(444,"em")(445,"strong"),o(446,"(opcional)"),t()(),e(447,"p"),o(448,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),e(449,"blockquote")(450,"p"),o(451,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),e(452,"ul")(453,"li"),o(454,"O campo conter "),e(455,"code"),o(456,"p-required"),t(),o(457,";"),t(),e(458,"li"),o(459,"N\xE3o possuir "),e(460,"code"),o(461,"p-help"),t(),o(462," e/ou "),e(463,"code"),o(464,"p-label"),t(),o(465,"."),t()()()(),e(466,"tr",24)(467,"td",25)(468,"div",26)(469,"span",27),o(470," p-options"),l(471,"br"),t()()(),e(472,"td",28)(473,"code",37),o(474,"PoRadioGroupOption[]"),t()(),e(475,"td",30),o(476,"-"),t(),e(477,"td",31)(478,"p"),o(479,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),t()()(),e(480,"tr",24)(481,"td",25)(482,"div",26)(483,"span",27),o(484," p-required"),l(485,"br"),t()()(),e(486,"td",28)(487,"code",29),o(488,"boolean"),t()(),e(489,"td",30)(490,"p")(491,"code"),o(492,"false"),t()()(),e(493,"td",31)(494,"em")(495,"strong"),o(496,"(opcional)"),t()(),e(497,"p"),o(498,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),e(499,"tr",24)(500,"td",25)(501,"div",26)(502,"span",27),o(503," p-show-required"),l(504,"br"),t()()(),e(505,"td",28)(506,"code",29),o(507,"boolean"),t()(),e(508,"td",30),o(509,"-"),t(),e(510,"td",31)(511,"p"),o(512,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),e(513,"blockquote")(514,"p"),o(515,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),e(516,"ul")(517,"li"),o(518,"N\xE3o possuir "),e(519,"code"),o(520,"p-help"),t(),o(521," e/ou "),e(522,"code"),o(523,"p-label"),t(),o(524,"."),t()()()(),e(525,"tr",24)(526,"td",25)(527,"div",26)(528,"span",27),o(529," p-size"),l(530,"br"),t()()(),e(531,"td",28)(532,"code",36),o(533,"string"),t()(),e(534,"td",30)(535,"p")(536,"code"),o(537,"medium"),t()()(),e(538,"td",31)(539,"em")(540,"strong"),o(541,"(opcional)"),t()(),e(542,"p"),o(543,"Define o tamanho do "),e(544,"em"),o(545,"radio"),t()()()()(),e(546,"h3",20),o(547,"M\xE9todos"),t(),e(548,"table",38)(549,"tr",24)(550,"th",39)(551,"div",26)(552,"h4")(553,"span",27),o(554," focus "),t()()()()(),e(555,"tr",31)(556,"td",31)(557,"p"),o(558,"Fun\xE7\xE3o que atribui foco ao componente."),t(),e(559,"p"),o(560,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),e(561,"pre")(562,"code"),o(563,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}`),t()()()()(),l(564,"br"),e(565,"h3"),o(566,"Interfaces"),t(),e(567,"h4",40)(568,"code",5),o(569,"PoRadioGroupOption"),t()(),e(570,"div",2)(571,"p"),o(572,"Interface para as a\xE7\xF5es do componente po-radio-group."),t()(),e(573,"h4",20),o(574,"Propriedades"),t(),e(575,"table",21)(576,"tr",22)(577,"th",23),o(578,"Nome"),t(),e(579,"th",23),o(580,"Tipo"),t(),e(581,"th",23),o(582,"Descri\xE7\xE3o"),t()(),e(583,"tr",24)(584,"td",25)(585,"div",26)(586,"span",27),o(587," disabled"),l(588,"br"),t()()(),e(589,"td",28)(590,"code",29),o(591,"boolean"),t()(),e(592,"td",31)(593,"em")(594,"strong"),o(595,"(opcional)"),t()(),e(596,"p"),o(597,"Desabilita o radio."),t()()(),e(598,"tr",24)(599,"td",25)(600,"div",26)(601,"span",27),o(602," label"),l(603,"br"),t()()(),e(604,"td",28)(605,"code",36),o(606,"string"),t()(),e(607,"td",31)(608,"p"),o(609,"Texto do radio."),t()()(),e(610,"tr",24)(611,"td",25)(612,"div",26)(613,"span",27),o(614," value"),l(615,"br"),t()()(),e(616,"td",28)(617,"code",36),o(618,"string "),t(),e(619,"code",35),o(620," number"),t()(),e(621,"td",31)(622,"p"),o(623,"Valor do radio."),t()()()()())},dependencies:[w],encapsulation:2})}return i})();var be=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,a){this.route=d,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let a=d.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||i)(B(Y),B(Z))};static \u0275cmp=g({type:i,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title"," Radio Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,n){a&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),l(3,"sample-po-radio-group-doc"),t(),e(4,"po-tab",3),l(5,"sample-po-radio-group-basic-view")(6,"sample-po-radio-group-labs-view")(7,"sample-po-radio-group-translator-view")(8,"sample-po-radio-group-translator-reactive-form-view"),t()()()),a&2&&(m("p-actions",n.actions),p(2),m("p-active",n.activeTab.includes("doc")),p(2),m("p-hide",n.hidePoWebSample)("p-active",n.activeTab.includes("web")))},dependencies:[ne,C,x,re,de,me,ce,ge],encapsulation:2})}return i})();var Be=[{path:"",component:be}],he=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=V({type:i});static \u0275inj=k({imports:[j.forChild(Be),j]})}return i})();var dt=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=V({type:i});static \u0275inj=k({imports:[ie,he]})}return i})();export{dt as DocPoRadioGroupModule};
