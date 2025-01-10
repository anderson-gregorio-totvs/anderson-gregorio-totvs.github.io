import{$ as re,$a as T,$c as ce,$d as ne,Bc as qe,Ca as H,Cd as W,Da as G,Dc as te,Ea as A,F as u,Fa as N,Fc as se,G as b,Ga as o,Ha as ae,Ia as v,Ka as g,Kb as Pe,La as h,Lb as L,Ma as f,Mb as D,Na as xe,Nb as U,Oa as he,Ob as q,Od as We,Pa as M,Pb as Q,Qa as we,Sb as Me,T as m,Tb as Te,U as _,Ua as R,Va as j,Vb as ke,Wb as Oe,Xd as y,Ya as fe,Yb as Ve,Yd as x,Zb as Se,_ as C,_b as me,ad as oe,bb as z,ea as I,gb as $,gc as de,ha as s,hd as ue,id as k,jb as _e,ka as P,kd as Fe,ld as Ie,md as be,na as t,oa as e,oc as J,pa as l,pb as ee,qa as X,ra as Z,re as w,sa as ve,sd as Ne,se as Be,ta as B,ua as S,va as pe,x as Ee,y as le,ya as ye,yd as K,zc as Le,zd as De}from"./chunk-QVEZB6GT.js";var lt=()=>({value:"Option 1"}),rt=()=>({value:"Option 2"}),pt=(a,V)=>[a,V],He=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","combo","p-label","PO Combo",3,"p-options"]],template:function(r,n){r&1&&l(0,"po-combo",0),r&2&&s("p-options",we(3,pt,he(1,lt),he(2,rt)))},dependencies:[k],encapsulation:2})}return a})();var dt=a=>({"docs-sample-code-tabs":a}),Ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo Basic"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-basic/sample-po-combo-basic.component.html"),e(),t(13,"pre",7),o(14,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{ value: 'Option 1' }, { value: 'Option 2' }]"> </po-combo>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-combo-basic/sample-po-combo-basic.component.ts"),e(),t(19,"pre",9),o(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-combo-basic',
  templateUrl: './sample-po-combo-basic.component.html',
  standalone: false
})
export class SamplePoComboBasicComponent {}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-basic"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,dt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,He],encapsulation:2})}return a})();var Ae=(()=>{class a{combo;comboOptionGroupSwitch;customLiterals;debounceTime;event;fieldLabel;fieldValue;filterMinlength;filterMode;filterService;help;icon;label;literals;optionsGroup;optionsGroupList;placeholder;properties;fieldErrorMessage;option;options;selectedOptionsGroup;filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];iconsOptions=[{label:"an an-building-apartment",value:"an an-building-apartment"},{label:"an an-gas-pump",value:"an an-gas-pump"},{label:"fa fa-calculator",value:"fa fa-calculator"}];propertiesOptions=[{value:"changeOnEnter",label:"Change On Enter"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"disabledInitFilter",label:"Disabled Init Filter"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"sort",label:"Sort"},{value:"clean",label:"Clean"},{value:"disabledTabFilter",label:"Disabled Tab Filter"},{value:"errorLimit",label:"Limit Error Message"}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0}}changeEvent(p){this.event=p}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.combo=void 0,this.comboOptionGroupSwitch=!1,this.customLiterals=void 0,this.event="",this.debounceTime=void 0,this.fieldLabel="",this.fieldValue="",this.filterMinlength=void 0,this.filterService="",this.filterMode=void 0,this.help=void 0,this.label=void 0,this.literals="",this.icon=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.selectedOptionsGroup=void 0}insertGroupIntoSelectInput(p){this.selectedOptionsGroup=p,this.optionsGroupList=[...this.optionsGroupList,{label:p,value:p}]}verifyOptionObject(p,r,n){let{label:d,value:c}=r;if(n){let i=p.findIndex(Ce=>Ce.label===n&&"options"in Ce);return i===-1?(this.insertGroupIntoSelectInput(n),[...p,{label:n,options:[{label:d,value:c}]}]):(p[i].options.push({label:d,value:c}),p)}return[...p,{label:d,value:c}]}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-labs"]],standalone:!1,decls:43,vars:51,consts:[["fOption","ngForm"],["f","ngForm"],["name","combo",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-change-on-enter","p-clean","p-debounce-time","p-disabled","p-disabled-init-filter","p-disabled-tab-filter","p-field-label","p-field-value","p-filter-minlength","p-filter-mode","p-filter-service","p-help","p-icon","p-label","p-literals","p-optional","p-options","p-placeholder","p-required","p-field-error-message","p-show-required","p-sort","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po combo options group"],["name","comboOptionGroupSwitch","p-label","Combo options group",1,"po-md-2",3,"ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-md-5",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-md-5",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po combo options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","2","p-label","Properties",1,"po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","icon","p-columns","1","p-label","Icon",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","1","p-label","Filter Mode",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos"}',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","debounceTime","p-clean","","p-label","Debounce Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterMinlength","p-clean","","p-label","Filter Min Length",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(r,n){if(r&1){let d=B();t(0,"po-combo",2),f("ngModelChange",function(i){return u(d),h(n.combo,i)||(n.combo=i),b(i)}),S("p-change",function(){return u(d),b(n.changeEvent("p-change"))}),e(),l(1,"hr"),t(2,"div",3),l(3,"po-info",4)(4,"po-info",5),e(),l(5,"hr"),t(6,"form",null,0),l(8,"po-divider",6),t(9,"div",3)(10,"po-switch",7),f("ngModelChange",function(i){return u(d),h(n.comboOptionGroupSwitch,i)||(n.comboOptionGroupSwitch=i),b(i)}),e(),t(11,"po-select",8),f("ngModelChange",function(i){return u(d),h(n.selectedOptionsGroup,i)||(n.selectedOptionsGroup=i),b(i)}),S("p-change",function(){return u(d),b(n.optionsGroupSelection())}),e(),t(12,"po-input",9),f("ngModelChange",function(i){return u(d),h(n.optionsGroup,i)||(n.optionsGroup=i),b(i)}),e()(),l(13,"po-divider",10),t(14,"div",3)(15,"po-input",11),f("ngModelChange",function(i){return u(d),h(n.option.label,i)||(n.option.label=i),b(i)}),e(),t(16,"po-input",12),f("ngModelChange",function(i){return u(d),h(n.option.value,i)||(n.option.value=i),b(i)}),e()(),t(17,"div",3)(18,"po-button",13),S("p-click",function(){return u(d),b(n.addOption())}),e()()(),l(19,"hr"),t(20,"form",null,1)(22,"div",3)(23,"po-input",14),f("ngModelChange",function(i){return u(d),h(n.label,i)||(n.label=i),b(i)}),e(),t(24,"po-input",15),f("ngModelChange",function(i){return u(d),h(n.help,i)||(n.help=i),b(i)}),e()(),t(25,"div",3)(26,"po-input",16),f("ngModelChange",function(i){return u(d),h(n.placeholder,i)||(n.placeholder=i),b(i)}),e(),t(27,"po-input",17),f("ngModelChange",function(i){return u(d),h(n.fieldErrorMessage,i)||(n.fieldErrorMessage=i),b(i)}),e()(),t(28,"div",3)(29,"po-checkbox-group",18),f("ngModelChange",function(i){return u(d),h(n.properties,i)||(n.properties=i),b(i)}),e(),t(30,"po-radio-group",19),f("ngModelChange",function(i){return u(d),h(n.icon,i)||(n.icon=i),b(i)}),e(),t(31,"po-radio-group",20),f("ngModelChange",function(i){return u(d),h(n.filterMode,i)||(n.filterMode=i),b(i)}),e()(),t(32,"div",3)(33,"po-input",21),f("ngModelChange",function(i){return u(d),h(n.filterService,i)||(n.filterService=i),b(i)}),e(),t(34,"po-input",22),f("ngModelChange",function(i){return u(d),h(n.literals,i)||(n.literals=i),b(i)}),S("p-change",function(){return u(d),b(n.changeLiterals())}),e()(),t(35,"div",3)(36,"po-input",23),f("ngModelChange",function(i){return u(d),h(n.fieldValue,i)||(n.fieldValue=i),b(i)}),e(),t(37,"po-input",24),f("ngModelChange",function(i){return u(d),h(n.fieldLabel,i)||(n.fieldLabel=i),b(i)}),e()(),t(38,"div",3)(39,"po-number",25),f("ngModelChange",function(i){return u(d),h(n.debounceTime,i)||(n.debounceTime=i),b(i)}),e(),t(40,"po-number",26),f("ngModelChange",function(i){return u(d),h(n.filterMinlength,i)||(n.filterMinlength=i),b(i)}),e()(),t(41,"div",3)(42,"po-button",27),S("p-click",function(){return u(d),b(n.restore())}),e()()()}if(r&2){let d=N(7);g("ngModel",n.combo),s("p-change-on-enter",n.properties.includes("changeOnEnter"))("p-clean",n.properties.includes("clean"))("p-debounce-time",n.debounceTime)("p-disabled",n.properties.includes("disabled"))("p-disabled-init-filter",n.properties.includes("disableInitFilter"))("p-disabled-tab-filter",n.properties.includes("disabledTabFilter"))("p-field-label",n.fieldLabel)("p-field-value",n.fieldValue)("p-filter-minlength",n.filterMinlength)("p-filter-mode",n.filterMode)("p-filter-service",n.filterService)("p-help",n.help)("p-icon",n.icon)("p-label",n.label)("p-literals",n.customLiterals)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-placeholder",n.placeholder)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-sort",n.properties.includes("sort"))("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit")),m(3),s("p-value",n.combo),m(),s("p-value",n.event),m(6),g("ngModel",n.comboOptionGroupSwitch),m(),g("ngModel",n.selectedOptionsGroup),s("p-disabled",!n.comboOptionGroupSwitch)("p-options",n.optionsGroupList),m(),g("ngModel",n.optionsGroup),s("p-disabled",!n.comboOptionGroupSwitch),m(3),g("ngModel",n.option.label),m(),g("ngModel",n.option.value),m(2),s("p-disabled",d.form.invalid),m(5),g("ngModel",n.label),m(),g("ngModel",n.help),m(2),g("ngModel",n.placeholder),m(),g("ngModel",n.fieldErrorMessage),m(2),g("ngModel",n.properties),s("p-options",n.propertiesOptions),m(),g("ngModel",n.icon),s("p-options",n.iconsOptions),m(),g("ngModel",n.filterMode),s("p-options",n.filterModeOptions),m(2),g("ngModel",n.filterService),m(),g("ngModel",n.literals),m(2),g("ngModel",n.fieldValue),m(),g("ngModel",n.fieldLabel),m(2),g("ngModel",n.debounceTime),m(),g("ngModel",n.filterMinlength)}},dependencies:[Q,L,D,q,U,J,me,Le,qe,k,be,Ne,K,ce,W],encapsulation:2})}return a})();var ut=a=>({"docs-sample-code-tabs":a}),Re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo Labs"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-labs/sample-po-combo-labs.component.html"),e(),t(13,"pre",7),o(14,`<po-combo
  class="po-md-12"
  name="combo"
  [(ngModel)]="combo"
  [p-change-on-enter]="properties.includes('changeOnEnter')"
  [p-clean]="properties.includes('clean')"
  [p-debounce-time]="debounceTime"
  [p-disabled]="properties.includes('disabled')"
  [p-disabled-init-filter]="properties.includes('disableInitFilter')"
  [p-disabled-tab-filter]="properties.includes('disabledTabFilter')"
  [p-field-label]="fieldLabel"
  [p-field-value]="fieldValue"
  [p-filter-minlength]="filterMinlength"
  [p-filter-mode]="filterMode"
  [p-filter-service]="filterService"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-sort]="properties.includes('sort')"
  (p-change)="changeEvent('p-change')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-combo>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="combo"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #fOption="ngForm">
  <po-divider p-label="Po combo options group"></po-divider>

  <div class="po-row">
    <po-switch
      class="po-md-2"
      name="comboOptionGroupSwitch"
      [(ngModel)]="comboOptionGroupSwitch"
      p-label="Combo options group"
    >
    </po-switch>

    <po-select
      class="po-md-5"
      name="selectedsOptionsGroup"
      [(ngModel)]="selectedOptionsGroup"
      p-label="Options group list"
      [p-disabled]="!comboOptionGroupSwitch"
      [p-options]="optionsGroupList"
      (p-change)="optionsGroupSelection()"
    >
    </po-select>

    <po-input
      class="po-md-5"
      name="optionsGroup"
      [(ngModel)]="optionsGroup"
      p-label="New Options Group"
      [p-disabled]="!comboOptionGroupSwitch"
      p-required
    >
    </po-input>
  </div>

  <po-divider p-label="Po combo options"></po-divider>

  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-6 po-lg-3" p-label="Add Option" [p-disabled]="fOption.form.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>
  </div>
  <div class="po-row">
    <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

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
    <po-checkbox-group
      class="po-lg-4"
      name="properties"
      [(ngModel)]="properties"
      p-columns="2"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-6 po-lg-4"
      name="icon"
      [(ngModel)]="icon"
      p-columns="1"
      p-label="Icon"
      [p-options]="iconsOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-6 po-lg-4"
      name="filterMode"
      [(ngModel)]="filterMode"
      p-columns="1"
      p-label="Filter Mode"
      [p-options]="filterModeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="filterService"
      [(ngModel)]="filterService"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Filter Service"
    >
    </po-input>

    <po-input
      class="po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"noData": "Sem dados a serem exibidos"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="fieldValue" [(ngModel)]="fieldValue" p-clean p-label="Field Value"> </po-input>

    <po-input class="po-md-6" name="fieldLabel" [(ngModel)]="fieldLabel" p-clean p-label="Field Label"> </po-input>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" name="debounceTime" [(ngModel)]="debounceTime" p-clean p-label="Debounce Time">
    </po-number>

    <po-number class="po-md-6" name="filterMinlength" [(ngModel)]="filterMinlength" p-clean p-label="Filter Min Length">
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-combo-labs/sample-po-combo-labs.component.ts"),e(),t(19,"pre",9),o(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoComboLiterals,
  PoComboOption,
  PoComboOptionGroup,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-labs',
  templateUrl: './sample-po-combo-labs.component.html',
  standalone: false
})
export class SamplePoComboLabsComponent implements OnInit {
  combo: string;
  comboOptionGroupSwitch: boolean;
  customLiterals: PoComboLiterals;
  debounceTime: number;
  event: string;

  fieldLabel: string;
  fieldValue: string;
  filterMinlength: number;
  filterMode: string;
  filterService: string;

  help: string;
  icon: string;
  label: string;
  literals: string;
  optionsGroup: string;
  optionsGroupList: Array<PoSelectOption>;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;

  option: PoComboOption;
  options: Array<PoComboOption | PoComboOptionGroup>;
  selectedOptionsGroup: string;

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: 'startsWith' },
    { label: 'Contains', value: 'contains' },
    { label: 'Ends With', value: 'endsWith' }
  ];

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-building-apartment', value: 'an an-building-apartment' },
    { label: 'an an-gas-pump', value: 'an an-gas-pump' },
    { label: 'fa fa-calculator', value: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'changeOnEnter', label: 'Change On Enter' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'disabledInitFilter', label: 'Disabled Init Filter' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'sort', label: 'Sort' },
    { value: 'clean', label: 'Clean' },
    { value: 'disabledTabFilter', label: 'Disabled Tab Filter' },
    { value: 'errorLimit', label: 'Limit Error Message' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = this.verifyOptionObject(this.options.concat(), this.option, this.optionsGroup);
    this.option = { label: undefined, value: undefined };
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  optionsGroupSelection() {
    this.optionsGroup = this.selectedOptionsGroup;
  }

  restore() {
    this.combo = undefined;
    this.comboOptionGroupSwitch = false;
    this.customLiterals = undefined;
    this.event = '';

    this.debounceTime = undefined;
    this.fieldLabel = '';
    this.fieldValue = '';
    this.filterMinlength = undefined;
    this.filterService = '';
    this.filterMode = undefined;

    this.help = undefined;
    this.label = undefined;
    this.literals = '';
    this.icon = undefined;

    this.option = { label: undefined, value: undefined };
    this.options = [];
    this.optionsGroup = undefined;
    this.optionsGroupList = [];
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.selectedOptionsGroup = undefined;
  }

  private insertGroupIntoSelectInput(value: string) {
    this.selectedOptionsGroup = value;
    this.optionsGroupList = [...this.optionsGroupList, { label: value, value }];
  }

  private verifyOptionObject(
    options: Array<PoComboOption | PoComboOptionGroup>,
    option: PoComboOption,
    optionsGroup?: string
  ) {
    const { label, value } = option;

    if (optionsGroup) {
      const indexItem = options.findIndex(
        (optionItem: PoComboOptionGroup) => optionItem.label === optionsGroup && 'options' in optionItem
      );

      if (indexItem === -1) {
        this.insertGroupIntoSelectInput(optionsGroup);
        return [...options, { label: optionsGroup, options: [{ label, value }] }];
      }

      (options as Array<PoComboOptionGroup>)[indexItem].options.push({ label, value });
      return options;
    }

    return [...options, { label, value }];
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-labs"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,ut,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,Ae],encapsulation:2})}return a})();var ge=(()=>{class a{getcities(){return[{label:"S\xE3o Paulo",options:[{label:"S\xE3o Paulo",value:"sao paulo"},{label:"Campinas",value:"campinas"}]},{label:"Paran\xE1",options:[{label:"S\xE3o Jos\xE9 dos Pinhais",value:"sao jose dos pinhais"},{label:"Londrina",value:"londrina"},{label:"Maring\xE1",value:"maringa"}]},{label:"Santa Catarina",options:[{label:"Joinville",value:"joinville"},{label:"Florian\xF3polis",value:"florianopolis"},{label:"Itaja\xED",value:"itajai"}]}]}getMedicalSpecialty(){return[{specialty:"Allergist",specialtyValue:"allergist"},{specialty:"Cardiologist",specialtyValue:"cardiologist"},{specialty:"General practitioner",specialtyValue:"generalPractitioner"},{specialty:"Dermatologist",specialtyValue:"dermatologist"},{specialty:"Gynecologist",specialtyValue:"gynecologist"},{specialty:"Nutritionist",specialtyValue:"nutritionist"},{specialty:"Pediatrist",specialtyValue:"pediatrist"},{specialty:"Psychiatrist",specialtyValue:"psychiatrist"},{specialty:"Orthopaedist",specialtyValue:"orthopaedist"}]}static \u0275fac=function(r){return new(r||a)};static \u0275prov=Ee({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ht=["schedulingForm"];function ft(a,V){a&1&&ve(0)}function St(a,V){if(a&1&&(t(0,"div",5),l(1,"po-avatar",17),t(2,"p",18),o(3),e()()),a&2){let p=pe().$implicit,r=pe();m(),s("p-src",r.getStateByLabel(p.label)),m(2),ae(p.label)}}function Ct(a,V){if(a&1&&(t(0,"div",18),o(1),e()),a&2){let p=pe().$implicit;m(),ae(p.label)}}function Et(a,V){if(a&1&&I(0,ft,1,0,"ng-container",16)(1,St,4,2,"ng-template",null,1,fe)(3,Ct,2,1,"ng-template",null,2,fe),a&2){let p=V.$implicit,r=N(2),n=N(4);s("ngIf",p.options)("ngIfThen",r)("ngIfElse",n)}}var je=(()=>{class a{poNotification;schedulingService;form;birthday;citiesOptions;city;email;informations;medicalSpecialty;medicalSpecialtyOptions;name;phone;typeScheduling;typeSchedulings=[{label:"Particular",value:"particular"},{label:"Health Insurance",value:"healthInsurance"}];constructor(p,r){this.poNotification=p,this.schedulingService=r}ngOnInit(){this.citiesOptions=this.schedulingService.getcities(),this.medicalSpecialtyOptions=this.schedulingService.getMedicalSpecialty()}confirmPreAppointment(p=""){this.poNotification.success(`Great ${p}, your pre-appointment was successfully received!`),this.form.reset()}getStateByLabel(p){return`https://thf.totvs.com.br/sample/api/static/assets/${{"S\xE3o Paulo":"sp","Santa Catarina":"sc",Paran\u00E1:"pr"}[p]}.png`}static \u0275fac=function(r){return new(r||a)(_(oe),_(ge))};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-scheduling"]],viewQuery:function(r,n){if(r&1&&H(ht,7),r&2){let d;G(d=A())&&(n.form=d.first)}},standalone:!1,features:[xe([ge])],decls:20,vars:12,consts:[["schedulingForm","ngForm"],["OptionsGroupTitle",""],["optionsGroup",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-placeholder","example@domain.com","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","birthday","p-clean","","p-label","Birthday","p-placeholder","dd/mm/yyyy","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","phone","p-clean","","p-label","Phone number","p-mask","(99) 99999-9999","p-placeholder","(99) 99999-9999","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","city","p-icon","an an-map-trifold","p-label","Select a location","p-placeholder","Select a location","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-combo-option-template",""],["name","typeScheduling","p-label","Type scheduling","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","medicalSpecialty","p-icon","an an-flask","p-label","Medical Specialty/Exam","p-required","","p-sort","","p-field-label","specialty","p-field-value","specialtyValue",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","informations","p-help","Additional informations","p-label","Informations",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-label","Schedule","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],[4,"ngIf","ngIfThen","ngIfElse"],["p-size","xs",1,"po-sm-2","po-md-3","po-lg-1",2,"background-color","#fbfbfb",3,"p-src"],[1,"po-sm-10","po-md-9","po-lg-11"]],template:function(r,n){if(r&1){let d=B();t(0,"div",3)(1,"div",4),o(2,"Pre-appointment scheduling"),e()(),t(3,"form",null,0)(5,"div",5)(6,"po-input",6),f("ngModelChange",function(i){return u(d),h(n.name,i)||(n.name=i),b(i)}),e(),t(7,"po-email",7),f("ngModelChange",function(i){return u(d),h(n.email,i)||(n.email=i),b(i)}),e()(),t(8,"div",5)(9,"po-datepicker",8),f("ngModelChange",function(i){return u(d),h(n.birthday,i)||(n.birthday=i),b(i)}),e(),t(10,"po-input",9),f("ngModelChange",function(i){return u(d),h(n.phone,i)||(n.phone=i),b(i)}),e()(),t(11,"div",5)(12,"po-combo",10),f("ngModelChange",function(i){return u(d),h(n.city,i)||(n.city=i),b(i)}),I(13,Et,5,3,"ng-template",11),e(),t(14,"po-select",12),f("ngModelChange",function(i){return u(d),h(n.typeScheduling,i)||(n.typeScheduling=i),b(i)}),e(),t(15,"po-combo",13),f("ngModelChange",function(i){return u(d),h(n.medicalSpecialty,i)||(n.medicalSpecialty=i),b(i)}),e()(),t(16,"div",5)(17,"po-textarea",14),f("ngModelChange",function(i){return u(d),h(n.informations,i)||(n.informations=i),b(i)}),e()(),t(18,"div",5)(19,"po-button",15),S("p-click",function(){return u(d),b(n.confirmPreAppointment(n.name))}),e()()()}if(r&2){let d=N(4);m(6),g("ngModel",n.name),m(),g("ngModel",n.email),m(2),g("ngModel",n.birthday),m(),g("ngModel",n.phone),m(2),g("ngModel",n.city),s("p-options",n.citiesOptions),m(2),g("ngModel",n.typeScheduling),s("p-options",n.typeSchedulings),m(),g("ngModel",n.medicalSpecialty),s("p-options",n.medicalSpecialtyOptions),m(2),g("ngModel",n.informations),m(2),s("p-disabled",d.invalid)}},dependencies:[z,Q,L,D,q,U,de,J,te,k,ue,Ie,be,K,De],encapsulation:2})}return a})();var yt=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-scheduling-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo - Scheduling"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-text-center">
  <div class="po-font-title">Pre-appointment scheduling</div>
</div>

<form #schedulingForm="ngForm">
  <div class="po-row">
    <po-input class="po-lg-6" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>

    <po-email
      class="po-lg-6"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Email"
      p-placeholder="example@domain.com"
      p-required
    >
    </po-email>
  </div>

  <div class="po-row">
    <po-datepicker
      class="po-lg-6"
      name="birthday"
      [(ngModel)]="birthday"
      p-clean
      p-label="Birthday"
      p-placeholder="dd/mm/yyyy"
      p-required
    >
    </po-datepicker>

    <po-input
      class="po-lg-6"
      name="phone"
      [(ngModel)]="phone"
      p-clean
      p-label="Phone number"
      p-mask="(99) 99999-9999"
      p-placeholder="(99) 99999-9999"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-combo
      class="po-lg-6"
      name="city"
      [(ngModel)]="city"
      p-icon="an an-map-trifold"
      p-label="Select a location"
      p-placeholder="Select a location"
      p-required
      p-sort
      [p-options]="citiesOptions"
    >
      <ng-template p-combo-option-template let-option>
        <ng-container *ngIf="option.options; then OptionsGroupTitle; else optionsGroup"></ng-container>
        <ng-template #OptionsGroupTitle>
          <div class="po-row">
            <po-avatar
              class="po-sm-2 po-md-3 po-lg-1"
              p-size="xs"
              style="background-color: #fbfbfb"
              [p-src]="getStateByLabel(option.label)"
            >
            </po-avatar>
            <p class="po-sm-10 po-md-9 po-lg-11">{ { option.label }}</p>
          </div>
        </ng-template>
        <ng-template #optionsGroup>
          <div class="po-sm-10 po-md-9 po-lg-11">{ { option.label }}</div>
        </ng-template>
      </ng-template>
    </po-combo>

    <po-select
      class="po-lg-6"
      name="typeScheduling"
      [(ngModel)]="typeScheduling"
      p-label="Type scheduling"
      p-required
      p-sort
      [p-options]="typeSchedulings"
    >
    </po-select>

    <po-combo
      class="po-lg-6"
      name="medicalSpecialty"
      [(ngModel)]="medicalSpecialty"
      p-icon="an an-flask"
      p-label="Medical Specialty/Exam"
      p-required
      p-sort
      [p-options]="medicalSpecialtyOptions"
      p-field-label="specialty"
      p-field-value="specialtyValue"
    >
    </po-combo>
  </div>

  <div class="po-row">
    <po-textarea
      class="po-sm-12"
      name="informations"
      [(ngModel)]="informations"
      p-help="Additional informations"
      p-label="Informations"
    >
    </po-textarea>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Schedule"
      p-kind="primary"
      [p-disabled]="schedulingForm.invalid"
      (p-click)="confirmPreAppointment(name)"
    >
    </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts"),e(),t(19,"pre",9),o(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoComboOption, PoComboOptionGroup, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';
import { SamplePoComboSchedulingService } from './sample-po-combo-scheduling.service';

@Component({
  selector: 'sample-po-combo-scheduling',
  templateUrl: './sample-po-combo-scheduling.component.html',
  providers: [SamplePoComboSchedulingService],
  standalone: false
})
export class SamplePoComboSchedulingComponent implements OnInit {
  @ViewChild('schedulingForm', { static: true }) form: NgForm;

  birthday: string;
  citiesOptions: Array<PoComboOptionGroup>;
  city: string;
  email: string;
  informations: string;
  medicalSpecialty: string;
  medicalSpecialtyOptions: Array<any>;
  name: string;
  phone: string;
  typeScheduling: string;

  readonly typeSchedulings: Array<PoSelectOption> = [
    { label: 'Particular', value: 'particular' },
    { label: 'Health Insurance', value: 'healthInsurance' }
  ];

  constructor(
    private poNotification: PoNotificationService,
    private schedulingService: SamplePoComboSchedulingService
  ) {}

  ngOnInit() {
    this.citiesOptions = this.schedulingService.getcities();
    this.medicalSpecialtyOptions = this.schedulingService.getMedicalSpecialty();
  }

  confirmPreAppointment(name: string = '') {
    this.poNotification.success(\`Great \${name}, your pre-appointment was successfully received!\`);

    this.form.reset();
  }

  getStateByLabel(state: string) {
    const stateByLabel = {
      ['S\xE3o Paulo']: 'sp',
      ['Santa Catarina']: 'sc',
      ['Paran\xE1']: 'pr'
    };

    return \`https://thf.totvs.com.br/sample/api/static/assets/\${stateByLabel[state]}.png\`;
  }
}
`),e(),t(21,"label",6),o(22,"sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts"),e(),t(23,"pre",9),o(24,`import { Injectable } from '@angular/core';

import { PoComboOptionGroup } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoComboSchedulingService {
  getcities(): Array<PoComboOptionGroup> {
    return [
      {
        label: 'S\xE3o Paulo',
        options: [
          { label: 'S\xE3o Paulo', value: 'sao paulo' },
          { label: 'Campinas', value: 'campinas' }
        ]
      },
      {
        label: 'Paran\xE1',
        options: [
          { label: 'S\xE3o Jos\xE9 dos Pinhais', value: 'sao jose dos pinhais' },
          { label: 'Londrina', value: 'londrina' },
          { label: 'Maring\xE1', value: 'maringa' }
        ]
      },
      {
        label: 'Santa Catarina',
        options: [
          { label: 'Joinville', value: 'joinville' },
          { label: 'Florian\xF3polis', value: 'florianopolis' },
          { label: 'Itaja\xED', value: 'itajai' }
        ]
      }
    ];
  }

  getMedicalSpecialty() {
    return [
      { specialty: 'Allergist', specialtyValue: 'allergist' },
      { specialty: 'Cardiologist', specialtyValue: 'cardiologist' },
      { specialty: 'General practitioner', specialtyValue: 'generalPractitioner' },
      { specialty: 'Dermatologist', specialtyValue: 'dermatologist' },
      { specialty: 'Gynecologist', specialtyValue: 'gynecologist' },
      { specialty: 'Nutritionist', specialtyValue: 'nutritionist' },
      { specialty: 'Pediatrist', specialtyValue: 'pediatrist' },
      { specialty: 'Psychiatrist', specialtyValue: 'psychiatrist' },
      { specialty: 'Orthopaedist', specialtyValue: 'orthopaedist' }
    ];
  }
}
`),e()()()()(),t(25,"div",10),l(26,"sample-po-combo-scheduling"),e(),l(27,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,yt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,je],encapsulation:2})}return a})();var wt=["transferForm"];function _t(a,V){if(a&1&&(t(0,"div",3),l(1,"po-avatar",15),t(2,"div",16)(3,"div",17),o(4),e(),t(5,"div",18),o(6),e()()()),a&2){let p=V.$implicit;m(4),ae(p.label),m(2),v("Account: ",p.value,"")}}var Ue=(()=>{class a{poNotification;form;poModal;contact;dateTransfer=new Date;typeAccount="Checking Account";value;cancelAction={label:"Cancel",action:()=>this.poModal.close()};confirmAction={label:"Confirm",action:()=>this.confirmTransfer()};typeAccounts=[{label:"Checking Account",value:"Checking Account"},{label:"Savings Account",value:"Savings Account"}];constructor(p){this.poNotification=p}confirmTransfer(){this.poModal.close(),this.poNotification.success("Successful Transfer"),this.formReset()}transfer(){this.poModal.open()}formReset(){this.form.reset({dateTransfer:new Date,typeAccount:"Checking Account"})}static \u0275fac=function(r){return new(r||a)(_(oe))};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-transfer"]],viewQuery:function(r,n){if(r&1&&(H(wt,7),H(se,7)),r&2){let d;G(d=A())&&(n.form=d.first),G(d=A())&&(n.poModal=d.first)}},standalone:!1,decls:23,vars:14,consts:[["transferForm","ngForm"],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","typeAccount","p-label","From","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","contact","p-field-value","id","p-field-label","name","p-filter-service","https://po-sample-api.onrender.com/v1/people","p-icon","an an-user","p-label","To contact","p-placeholder","Select a contact","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-combo-option-template",""],["name","value","p-clean","","p-label","Value to transfer","p-placeholder","R$ 0,00","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","dateTransfer","p-label","Date to transfer","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Transfer","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Do you confirm transfer?",3,"p-primary-action","p-secondary-action"],["p-label","From",1,"po-md-6",3,"p-value"],["p-label","To",1,"po-md-6",3,"p-value"],["p-label","Value",1,"po-md-6",3,"p-value"],["p-label","Date to transfer",1,"po-md-6",3,"p-value"],["p-size","sm",1,"po-sm-2","po-md-3","po-lg-1"],[1,"po-sm-10","po-md-9","po-lg-11"],[1,"po-font-text-large-bold"],[1,"po-font-text-smaller"]],template:function(r,n){if(r&1){let d=B();t(0,"div",1)(1,"div",2),o(2,"Banking Transfer"),e()(),t(3,"form",null,0)(5,"div",3)(6,"po-select",4),f("ngModelChange",function(i){return u(d),h(n.typeAccount,i)||(n.typeAccount=i),b(i)}),e(),t(7,"po-combo",5),f("ngModelChange",function(i){return u(d),h(n.contact,i)||(n.contact=i),b(i)}),I(8,_t,7,2,"ng-template",6),e()(),t(9,"div",3)(10,"po-decimal",7),f("ngModelChange",function(i){return u(d),h(n.value,i)||(n.value=i),b(i)}),e(),t(11,"po-datepicker",8),f("ngModelChange",function(i){return u(d),h(n.dateTransfer,i)||(n.dateTransfer=i),b(i)}),e()(),t(12,"div",3)(13,"po-button",9),S("p-click",function(){return u(d),b(n.transfer())}),e()()(),t(14,"po-modal",10)(15,"div",3),l(16,"po-info",11)(17,"po-info",12),e(),l(18,"po-divider"),t(19,"div",3),l(20,"po-info",13)(21,"po-info",14),R(22,"date"),e()()}if(r&2){let d=N(4);m(6),g("ngModel",n.typeAccount),s("p-options",n.typeAccounts),m(),g("ngModel",n.contact),m(3),g("ngModel",n.value),m(),g("ngModel",n.dateTransfer),m(2),s("p-disabled",d.invalid),m(),s("p-primary-action",n.confirmAction)("p-secondary-action",n.cancelAction),m(2),s("p-value",n.typeAccount),m(),s("p-value",n.contact),m(3),s("p-value",n.value),m(),ye("p-value",j(22,12,n.dateTransfer))}},dependencies:[Q,L,D,q,U,de,J,me,te,k,ue,Fe,K,W,se,_e],encapsulation:2})}return a})();var Mt=a=>({"docs-sample-code-tabs":a}),Qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-transfer-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo - Banking Transfer"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-transfer/sample-po-combo-transfer.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-text-center">
  <div class="po-font-title">Banking Transfer</div>
</div>

<form #transferForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6"
      name="typeAccount"
      [(ngModel)]="typeAccount"
      p-label="From"
      p-required
      [p-options]="typeAccounts"
    >
    </po-select>

    <po-combo
      class="po-md-6"
      name="contact"
      [(ngModel)]="contact"
      p-field-value="id"
      p-field-label="name"
      p-filter-service="https://po-sample-api.onrender.com/v1/people"
      p-icon="an an-user"
      p-label="To contact"
      p-placeholder="Select a contact"
      p-required
    >
      <ng-template p-combo-option-template let-option>
        <div class="po-row">
          <po-avatar class="po-sm-2 po-md-3 po-lg-1" p-size="sm"></po-avatar>

          <div class="po-sm-10 po-md-9 po-lg-11">
            <div class="po-font-text-large-bold">{ { option.label }}</div>
            <div class="po-font-text-smaller">Account: { { option.value }}</div>
          </div>
        </div>
      </ng-template>
    </po-combo>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      name="value"
      [(ngModel)]="value"
      p-clean
      p-label="Value to transfer"
      p-placeholder="R$ 0,00"
      p-required
    >
    </po-decimal>

    <po-datepicker
      class="po-md-6"
      name="dateTransfer"
      [(ngModel)]="dateTransfer"
      p-label="Date to transfer"
      p-placeholder="dd/mm/yyyy"
      p-required
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Transfer"
      p-kind="primary"
      [p-disabled]="transferForm.invalid"
      (p-click)="transfer()"
    >
    </po-button>
  </div>
</form>

<po-modal p-title="Do you confirm transfer?" [p-primary-action]="confirmAction" [p-secondary-action]="cancelAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From" [p-value]="typeAccount"> </po-info>

    <po-info class="po-md-6" p-label="To" [p-value]="contact"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-md-6" p-label="Value" [p-value]="value"> </po-info>

    <po-info class="po-md-6" p-label="Date to transfer" p-value="{ { dateTransfer | date }}"> </po-info>
  </div>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-combo-transfer/sample-po-combo-transfer.component.ts"),e(),t(19,"pre",9),o(20,`import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-transfer',
  templateUrl: './sample-po-combo-transfer.component.html',
  standalone: false
})
export class SamplePoComboTransferComponent {
  @ViewChild('transferForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  contact: any;
  dateTransfer: Date = new Date();
  typeAccount: string = 'Checking Account';
  value: number;

  cancelAction: PoModalAction = {
    label: 'Cancel',
    action: () => this.poModal.close()
  };

  confirmAction: PoModalAction = {
    label: 'Confirm',
    action: () => this.confirmTransfer()
  };

  readonly typeAccounts: Array<PoSelectOption> = [
    { label: 'Checking Account', value: 'Checking Account' },
    { label: 'Savings Account', value: 'Savings Account' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  confirmTransfer() {
    this.poModal.close();

    this.poNotification.success('Successful Transfer');

    this.formReset();
  }

  transfer() {
    this.poModal.open();
  }

  private formReset() {
    this.form.reset({
      dateTransfer: new Date(),
      typeAccount: 'Checking Account'
    });
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-transfer"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,Mt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,Ue],encapsulation:2})}return a})();function kt(a,V){if(a&1&&(X(0),t(1,"div",0),l(2,"po-info",4)(3,"po-info",5)(4,"po-info",6),e(),Z()),a&2){let p=V.ngIf;m(2),s("p-value",p.name),m(),s("p-value",p.nickname),m(),s("p-value",p.email)}}var Ke=(()=>{class a{http;hero$;heroName;constructor(p){this.http=p}get knowMoreLabel(){return this.heroName?"Know more":void 0}knowMore(p){window.open(`http://google.com/search?q=${p}`,"_blank")}onChangeHero(p){this.hero$=this.getHero(p)}getHero(p){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${p}`)}static \u0275fac=function(r){return new(r||a)(_(ee))};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-heroes"]],standalone:!1,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],["name","heroName","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"ngModelChange","p-change","ngModel"],[4,"ngIf"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"po-widget",1),S("p-primary-action",function(){return n.knowMore(n.heroName)}),t(2,"po-combo",2),f("ngModelChange",function(c){return h(n.heroName,c)||(n.heroName=c),c}),S("p-change",function(c){return n.onChangeHero(c)}),e(),I(3,kt,5,3,"ng-container",3),R(4,"async"),e()()),r&2&&(m(),s("p-primary-label",n.knowMoreLabel),m(),g("ngModel",n.heroName),m(),s("ngIf",j(4,3,n.hero$)))},dependencies:[z,L,q,k,W,ne,$],encapsulation:2})}return a})();var Vt=a=>({"docs-sample-code-tabs":a}),Ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-heroes-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo - Heroes"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-heroes/sample-po-combo-heroes.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-row">
  <po-widget class="po-lg-6" [p-primary-label]="knowMoreLabel" (p-primary-action)="knowMore(heroName)">
    <po-combo
      name="heroName"
      [(ngModel)]="heroName"
      p-field-label="nickname"
      p-field-value="name"
      p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Search a Hero"
      p-sort
      (p-change)="onChangeHero($event)"
    >
    </po-combo>

    <ng-container *ngIf="hero$ | async as hero">
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="hero.name"> </po-info>

        <po-info class="po-md-4" p-label="Nickname" [p-value]="hero.nickname"> </po-info>

        <po-info class="po-md-4" p-label="Email" [p-value]="hero.email"> </po-info>
      </div>
    </ng-container>
  </po-widget>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-combo-heroes/sample-po-combo-heroes.component.ts"),e(),t(19,"pre",9),o(20,`import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-heroes',
  templateUrl: './sample-po-combo-heroes.component.html',
  standalone: false
})
export class SamplePoComboHeroesComponent {
  hero$: Observable<any>;
  heroName: string;

  constructor(private http: HttpClient) {}

  get knowMoreLabel() {
    return this.heroName ? 'Know more' : undefined;
  }

  knowMore(heroName: string) {
    window.open(\`http://google.com/search?q=\${heroName}\`, '_blank');
  }

  onChangeHero(heroName: string) {
    this.hero$ = this.getHero(heroName);
  }

  private getHero(heroName: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes/\${heroName}\`);
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-heroes"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,Vt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,Ke],encapsulation:2})}return a})();function qt(a,V){if(a&1&&(X(0),t(1,"div",0),l(2,"po-info",5)(3,"po-info",6)(4,"po-info",7),e(),Z()),a&2){let p=V.ngIf;m(2),s("p-value",p.name),m(),s("p-value",p.nickname),m(),s("p-value",p.email)}}var Xe=(()=>{class a{http;formBuilder;form;hero$;constructor(p,r){this.http=p,this.formBuilder=r}ngOnInit(){this.form=this.formBuilder.group({hero:[null,Pe.required]})}get knowMoreLabel(){return this.form.valid?"Know more":void 0}knowMore(){let p=this.form.get("hero").value;window.open(`http://google.com/search?q=${p}`,"_blank")}onChangeHero(p){this.hero$=this.getHero(p)}getHero(p){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${p}`)}static \u0275fac=function(r){return new(r||a)(_(ee),_(ke))};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-heroes-reactive-form"]],standalone:!1,decls:6,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],[3,"formGroup"],["name","heroName","formControlName","hero","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"p-change"],[4,"ngIf"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"po-widget",1),S("p-primary-action",function(){return n.knowMore()}),t(2,"div",2)(3,"po-combo",3),S("p-change",function(c){return n.onChangeHero(c)}),e()(),I(4,qt,5,3,"ng-container",4),R(5,"async"),e()()),r&2&&(m(),s("p-primary-label",n.knowMoreLabel),m(),s("formGroup",n.form),m(2),s("ngIf",j(5,3,n.hero$)))},dependencies:[z,L,D,Me,Te,k,W,ne,$],encapsulation:2})}return a})();var It=a=>({"docs-sample-code-tabs":a}),Ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-heroes-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo - Heroes Reactive Form"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-row">
  <po-widget class="po-lg-6" [p-primary-label]="knowMoreLabel" (p-primary-action)="knowMore()">
    <div [formGroup]="form">
      <po-combo
        name="heroName"
        formControlName="hero"
        p-field-label="nickname"
        p-field-value="name"
        p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
        p-label="Search a Hero"
        p-sort
        (p-change)="onChangeHero($event)"
      >
      </po-combo>
    </div>

    <ng-container *ngIf="hero$ | async as hero">
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="hero.name"> </po-info>

        <po-info class="po-md-4" p-label="Nickname" [p-value]="hero.nickname"> </po-info>

        <po-info class="po-md-4" p-label="Email" [p-value]="hero.email"> </po-info>
      </div>
    </ng-container>
  </po-widget>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts"),e(),t(19,"pre",9),o(20,`import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-heroes-reactive-form',
  templateUrl: './sample-po-combo-heroes-reactive-form.component.html',
  standalone: false
})
export class SamplePoComboHeroesReactiveFormComponent implements OnInit {
  form: UntypedFormGroup;
  hero$: Observable<any>;

  constructor(
    private http: HttpClient,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      hero: [null, Validators.required]
    });
  }

  get knowMoreLabel() {
    return this.form.valid ? 'Know more' : undefined;
  }

  knowMore() {
    const heroName = this.form.get('hero').value;

    window.open(\`http://google.com/search?q=\${heroName}\`, '_blank');
  }

  onChangeHero(heroName: string) {
    this.hero$ = this.getHero(heroName);
  }

  private getHero(heroName: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes/\${heroName}\`);
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-heroes-reactive-form"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,It,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,Xe],encapsulation:2})}return a})();function Dt(a,V){if(a&1&&(X(0),t(1,"div",0),l(2,"po-info",4)(3,"po-info",5)(4,"po-info",6),e(),Z()),a&2){let p=V.ngIf;m(2),s("p-value",p.name),m(),s("p-value",p.nickname),m(),s("p-value",p.email)}}var $e=(()=>{class a{http;peopleName;people$;constructor(p){this.http=p}onChangePeople(p){this.people$=this.getPeople(p)}getPeople(p){return this.http.get(`https://po-sample-api.onrender.com/v1/people/${p}`)}static \u0275fac=function(r){return new(r||a)(_(ee))};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-infinity-scroll"]],standalone:!1,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6"],["p-filter-service","https://po-sample-api.onrender.com/v1/people","p-label","People","name","people","p-field-label","name","p-field-value","id",3,"ngModelChange","p-change","ngModel","p-infinite-scroll"],[4,"ngIf"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"po-widget",1)(2,"po-combo",2),f("ngModelChange",function(c){return h(n.peopleName,c)||(n.peopleName=c),c}),S("p-change",function(c){return n.onChangePeople(c)}),e(),I(3,Dt,5,3,"ng-container",3),R(4,"async"),e()()),r&2&&(m(2),g("ngModel",n.peopleName),s("p-infinite-scroll",!0),m(),s("ngIf",j(4,3,n.people$)))},dependencies:[z,L,q,k,W,ne,$],encapsulation:2})}return a})();var Bt=a=>({"docs-sample-code-tabs":a}),et=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-infinity-scroll-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo - Inifity Scroll"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-row">
  <po-widget class="po-lg-6">
    <po-combo
      p-filter-service="https://po-sample-api.onrender.com/v1/people"
      p-label="People"
      name="people"
      [(ngModel)]="peopleName"
      (p-change)="onChangePeople($event)"
      [p-infinite-scroll]="true"
      p-field-label="name"
      p-field-value="id"
    ></po-combo>

    <ng-container *ngIf="people$ | async as people">
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>

        <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>

        <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
      </div>
    </ng-container>
  </po-widget>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts"),e(),t(19,"pre",9),o(20,`import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-infinity-scroll',
  templateUrl: './sample-po-combo-infinity-scroll.component.html',
  standalone: false
})
export class SamplePoComboInfinityScrollComponent {
  peopleName: string;
  people$: Observable<any>;

  constructor(private http: HttpClient) {}

  onChangePeople(peopleId: string) {
    this.people$ = this.getPeople(peopleId);
  }

  private getPeople(peopleId: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/people/\${peopleId}\`);
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-infinity-scroll"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,Bt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,$e],encapsulation:2})}return a})();var Gt=["bookingForm"],At=["datepicker"],tt=(()=>{class a{poNotification;form;datepickerComponent;adults=1;category=!1;checkin;checkout;children=0;hotel;rooms=1;filterParams={};adultsOptions=[{label:"1 Adult",value:1},{label:"2 Adults",value:2},{label:"3 Adults",value:3},{label:"4 Adults",value:4}];childrenOptions=[{label:"No Child",value:0},{label:"1 Child",value:1},{label:"2 Children",value:2}];roomsOptions=[{label:"1 Room",value:1},{label:"2 Rooms",value:2},{label:"3 Rooms",value:3}];constructor(p){this.poNotification=p}booking(){this.poNotification.success("Hotel booked successfully"),this.formReset(),this.datepickerComponent.focus()}onChangeParams(p){this.filterParams=p?{category:"Luxo"}:{},this.hotel=void 0}formReset(){this.form.reset({adults:1,category:!1,children:0,rooms:1})}static \u0275fac=function(r){return new(r||a)(_(oe))};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-hotels"]],viewQuery:function(r,n){if(r&1&&(H(Gt,7),H(At,7)),r&2){let d;G(d=A())&&(n.form=d.first),G(d=A())&&(n.datepickerComponent=d.first)}},standalone:!1,decls:18,vars:14,consts:[["bookingForm","ngForm"],["datepicker",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","checkin","p-label","Check In","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max-date"],["name","checkout","p-label","Check Out","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-min-date"],["name","switch","p-label-off","No, thank you.","p-label-on","Yes, please.","p-label","Only Luxury Category",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","rooms","p-label","Rooms",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","children","p-label","Children",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","adults","p-label","Adults",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","hotel","p-debounce-time","500","p-disabled-init-filter","","p-filter-minlength","1","p-icon","an an-magnifying-glass","p-required","","p-field-label","name","p-field-value","value","p-label","Search a hotel","p-sort","","p-filter-service","https://po-sample-api.onrender.com/v1/hotels",1,"po-sm-12",3,"ngModelChange","ngModel","p-filter-params"],["p-label","Booking","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,n){if(r&1){let d=B();t(0,"div",2)(1,"div",3),o(2,"Booking a Hotel"),e()(),t(3,"form",null,0)(5,"div",4)(6,"po-datepicker",5,1),f("ngModelChange",function(i){return u(d),h(n.checkin,i)||(n.checkin=i),b(i)}),e(),t(8,"po-datepicker",6),f("ngModelChange",function(i){return u(d),h(n.checkout,i)||(n.checkout=i),b(i)}),e(),t(9,"po-switch",7),f("ngModelChange",function(i){return u(d),h(n.category,i)||(n.category=i),b(i)}),S("p-change",function(i){return u(d),b(n.onChangeParams(i))}),e()(),t(10,"div",4)(11,"po-select",8),f("ngModelChange",function(i){return u(d),h(n.rooms,i)||(n.rooms=i),b(i)}),e(),t(12,"po-select",9),f("ngModelChange",function(i){return u(d),h(n.children,i)||(n.children=i),b(i)}),e(),t(13,"po-select",10),f("ngModelChange",function(i){return u(d),h(n.adults,i)||(n.adults=i),b(i)}),e()(),t(14,"div",4)(15,"po-combo",11),f("ngModelChange",function(i){return u(d),h(n.hotel,i)||(n.hotel=i),b(i)}),e()(),t(16,"div",4)(17,"po-button",12),S("p-click",function(){return u(d),b(n.booking())}),e()()()}if(r&2){let d=N(4);m(6),g("ngModel",n.checkin),s("p-max-date",n.checkout),m(2),g("ngModel",n.checkout),s("p-min-date",n.checkin),m(),g("ngModel",n.category),m(2),g("ngModel",n.rooms),s("p-options",n.roomsOptions),m(),g("ngModel",n.children),s("p-options",n.childrenOptions),m(),g("ngModel",n.adults),s("p-options",n.adultsOptions),m(2),g("ngModel",n.hotel),s("p-filter-params",n.filterParams),m(2),s("p-disabled",d.invalid)}},dependencies:[Q,L,D,q,U,J,te,k,K,ce],encapsulation:2})}return a})();var jt=a=>({"docs-sample-code-tabs":a}),ot=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-hotels-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo - Booking Hotel"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-hotels/sample-po-combo-hotels.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-text-center">
  <div class="po-font-title">Booking a Hotel</div>
</div>

<form #bookingForm="ngForm">
  <div class="po-row">
    <po-datepicker
      #datepicker
      class="po-md-4"
      name="checkin"
      [(ngModel)]="checkin"
      p-label="Check In"
      p-placeholder="dd/mm/yyyy"
      p-required
      [p-max-date]="checkout"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-4"
      name="checkout"
      [(ngModel)]="checkout"
      p-label="Check Out"
      p-placeholder="dd/mm/yyyy"
      p-required
      [p-min-date]="checkin"
    >
    </po-datepicker>

    <po-switch
      class="po-md-4"
      name="switch"
      [(ngModel)]="category"
      p-label-off="No, thank you."
      p-label-on="Yes, please."
      p-label="Only Luxury Category"
      (p-change)="onChangeParams($event)"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-select class="po-md-4" name="rooms" [(ngModel)]="rooms" p-label="Rooms" [p-options]="roomsOptions"> </po-select>

    <po-select class="po-md-4" name="children" [(ngModel)]="children" p-label="Children" [p-options]="childrenOptions">
    </po-select>

    <po-select class="po-md-4" name="adults" [(ngModel)]="adults" p-label="Adults" [p-options]="adultsOptions">
    </po-select>
  </div>

  <div class="po-row">
    <po-combo
      class="po-sm-12"
      name="hotel"
      [(ngModel)]="hotel"
      p-debounce-time="500"
      p-disabled-init-filter
      p-filter-minlength="1"
      p-icon="an an-magnifying-glass"
      p-required
      p-field-label="name"
      p-field-value="value"
      p-label="Search a hotel"
      p-sort
      p-filter-service="https://po-sample-api.onrender.com/v1/hotels"
      [p-filter-params]="filterParams"
    >
    </po-combo>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Booking"
      p-kind="primary"
      [p-disabled]="bookingForm.invalid"
      (p-click)="booking()"
    >
    </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-combo-hotels/sample-po-combo-hotels.component.ts"),e(),t(19,"pre",9),o(20,`import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoDatepickerComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-hotels',
  templateUrl: './sample-po-combo-hotels.component.html',
  standalone: false
})
export class SamplePoComboHotelsComponent {
  @ViewChild('bookingForm', { static: true }) form: NgForm;
  @ViewChild('datepicker', { static: true }) datepickerComponent: PoDatepickerComponent;

  adults: number = 1;
  category: boolean = false;
  checkin: Date;
  checkout: Date;
  children: number = 0;
  hotel: string;
  rooms: number = 1;
  filterParams = {};

  readonly adultsOptions: Array<PoSelectOption> = [
    { label: '1 Adult', value: 1 },
    { label: '2 Adults', value: 2 },
    { label: '3 Adults', value: 3 },
    { label: '4 Adults', value: 4 }
  ];

  readonly childrenOptions: Array<PoSelectOption> = [
    { label: 'No Child', value: 0 },
    { label: '1 Child', value: 1 },
    { label: '2 Children', value: 2 }
  ];

  readonly roomsOptions: Array<PoSelectOption> = [
    { label: '1 Room', value: 1 },
    { label: '2 Rooms', value: 2 },
    { label: '3 Rooms', value: 3 }
  ];

  constructor(private poNotification: PoNotificationService) {}

  booking() {
    this.poNotification.success('Hotel booked successfully');

    this.formReset();

    this.datepickerComponent.focus();
  }

  onChangeParams(isLuxury: boolean) {
    this.filterParams = isLuxury ? { category: 'Luxo' } : {};
    this.hotel = undefined;
  }

  private formReset() {
    this.form.reset({
      adults: 1,
      category: false,
      children: 0,
      rooms: 1
    });
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-hotels"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,jt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,tt],encapsulation:2})}return a})();var nt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-doc"]],standalone:!1,decls:1471,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoComboFilterMode"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoComboOption"],["pan","",1,"docs-api-property-type","PoComboOptionGroup"],["pan","",1,"docs-api-property-type","any>"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","Array<PoComboOption>"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"p",1)(2,"code"),o(3,"import { PoFieldModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),o(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),e(),t(7,"blockquote")(8,"p"),o(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),t(10,"code"),o(11,"FormsModule"),e(),o(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),t(13,"code"),o(14,"ReactiveFormsModule"),e(),o(15,", ambos nativos do Angular."),e()()(),t(16,"h3",3),o(17,"Componente"),e(),t(18,"h4",4)(19,"code",5),o(20,"PoComboComponent"),e()(),t(21,"div",2)(22,"p"),o(23,"O "),t(24,"code"),o(25,"po-combo"),e(),o(26," exibe uma lista de op\xE7\xF5es com f\xE1cil sele\xE7\xE3o e filtragem."),e(),t(27,"p"),o(28,"Al\xE9m da exibi\xE7\xE3o padr\xE3o, nele \xE9 poss\xEDvel listar as op\xF5es em agrupamentos."),e(),t(29,"p"),o(30,"\xC9 poss\xEDvel selecionar e navegar entre as op\xE7\xF5es da lista tanto atrav\xE9s do "),t(31,"em"),o(32,"mouse"),e(),o(33,` quanto do teclado. No teclado navegue com
as setas e pressione `),t(34,"em"),o(35,"Enter"),e(),o(36," na op\xE7\xE3o que desejar."),e(),t(37,"p"),o(38,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),t(39,"code"),o(40,"p-filter-service"),e(),o(41,"."),e(),t(42,"p"),o(43,"Em "),t(44,"code"),o(45,"p-filter-mode"),e(),o(46,", o filtro poder\xE1 ser configurado para buscar op\xF5es que correspondam ao in\xEDcio, fim ou que contenha o valor digitado."),e(),t(47,"p"),o(48,"O "),t(49,"code"),o(50,"po-combo"),e(),o(51," guarda o \xFAltimo valor caso o usu\xE1rio desista de uma busca, deixando o campo ou pressionando "),t(52,"em"),o(53,"Esc"),e(),o(54,`. Caso seja digitado no
campo de busca a descri\xE7\xE3o completa de um item, ent\xE3o a sele\xE7\xE3o ser\xE1 automaticamente efetuada ao deixar o campo ou pressionando `),t(55,"em"),o(56,"Enter"),e(),o(57,"."),e(),t(58,"p"),o(59,`Utilizando po-combo com servi\xE7o, \xE9 possivel digitar um valor no campo de entrada e pressionar a tecla 'tab' para que o componente
fa\xE7a uma requisi\xE7\xE3o \xE0 URL informada passando o valor digitado no campo. Se encontrado o valor, ent\xE3o o mesmo ser\xE1 selecionado, caso
n\xE3o seja encontrado, ent\xE3o a lista de itens voltar\xE1 para o estado inicial.`),e(),t(60,"h4",6),o(61,"Tokens customiz\xE1veis"),e(),t(62,"p"),o(63,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(64,"blockquote")(65,"p"),o(66,"Para maiores informa\xE7\xF5es, acesse o guia "),t(67,"a",7),o(68,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),o(69,"."),e()(),t(70,"table")(71,"thead")(72,"tr")(73,"th"),o(74,"Propriedade"),e(),t(75,"th"),o(76,"Descri\xE7\xE3o"),e(),t(77,"th"),o(78,"Valor Padr\xE3o"),e()()(),t(79,"tbody")(80,"tr")(81,"td")(82,"strong"),o(83,"Default Values"),e()(),l(84,"td")(85,"td"),e(),t(86,"tr")(87,"td")(88,"code"),o(89,"--font-family"),e()(),t(90,"td"),o(91,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(92,"td")(93,"code"),o(94,"var(--font-family-theme)"),e()()(),t(95,"tr")(96,"td")(97,"code"),o(98,"--font-size"),e()(),t(99,"td"),o(100,"Tamanho da fonte"),e(),t(101,"td")(102,"code"),o(103,"var(--font-size-default)"),e()()(),t(104,"tr")(105,"td")(106,"code"),o(107,"--text-color"),e()(),t(108,"td"),o(109,"Cor do texto"),e(),t(110,"td")(111,"code"),o(112,"var(--color-neutral-dark-90)"),e()()(),t(113,"tr")(114,"td")(115,"code"),o(116,"--text-color-placeholder"),e()(),t(117,"td"),o(118,"Cor do texto no placeholder"),e(),t(119,"td")(120,"code"),o(121,"var(--color-neutral-light-30)"),e()()(),t(122,"tr")(123,"td")(124,"code"),o(125,"--color"),e()(),t(126,"td"),o(127,"Cor principal do Combo"),e(),t(128,"td")(129,"code"),o(130,"var(--color-neutral-dark-70)"),e()()(),t(131,"tr")(132,"td")(133,"code"),o(134,"--background"),e()(),t(135,"td"),o(136,"Cor de background"),e(),t(137,"td")(138,"code"),o(139,"var(--color-neutral-light-05)"),e()()(),t(140,"tr")(141,"td")(142,"code"),o(143,"--border-radius"),e()(),t(144,"td"),o(145,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),t(146,"td")(147,"code"),o(148,"var(--border-width-lg)"),e()()(),t(149,"tr")(150,"td")(151,"code"),o(152,"--min-width"),e()(),t(153,"td"),o(154,"Largura m\xEDnima do combo"),e(),t(155,"td")(156,"code"),o(157,"150px"),e()()(),t(158,"tr")(159,"td")(160,"strong"),o(161,"Hover"),e()(),l(162,"td")(163,"td"),e(),t(164,"tr")(165,"td")(166,"code"),o(167,"--color-hover"),e()(),t(168,"td"),o(169,"Cor principal no estado hover"),e(),t(170,"td")(171,"code"),o(172,"var(--color-action-hover)"),e()()(),t(173,"tr")(174,"td")(175,"code"),o(176,"--background-hover"),e()(),t(177,"td"),o(178,"Cor de background no estado hover"),e(),t(179,"td")(180,"code"),o(181,"var(--color-brand-01-lightest)"),e()()(),t(182,"tr")(183,"td")(184,"strong"),o(185,"Focused"),e()(),l(186,"td")(187,"td"),e(),t(188,"tr")(189,"td")(190,"code"),o(191,"--color-focused"),e()(),t(192,"td"),o(193,"Cor principal no estado de focus"),e(),t(194,"td")(195,"code"),o(196,"var(--color-action-default)"),e()()(),t(197,"tr")(198,"td")(199,"code"),o(200,"--outline-color-focused"),e()(),t(201,"td"),o(202,"Cor do outline do estado de focus"),e(),t(203,"td")(204,"code"),o(205,"var(--color-action-focus)"),e()()(),t(206,"tr")(207,"td")(208,"strong"),o(209,"Error"),e()(),l(210,"td")(211,"td"),e(),t(212,"tr")(213,"td")(214,"code"),o(215,"--color-error"),e()(),t(216,"td"),o(217,"Cor principal no estado de erro"),e(),t(218,"td")(219,"code"),o(220,"var(--color-feedback-negative-base)"),e()()(),t(221,"tr")(222,"td")(223,"strong"),o(224,"Disabled"),e()(),l(225,"td")(226,"td"),e(),t(227,"tr")(228,"td")(229,"code"),o(230,"--color-disabled"),e()(),t(231,"td"),o(232,"Cor principal no estado disabled"),e(),t(233,"td")(234,"code"),o(235,"var(--color-neutral-light-30)"),e()()(),t(236,"tr")(237,"td")(238,"code"),o(239,"--background-disabled"),e()(),t(240,"td"),o(241,"Cor de background no estado disabled"),e(),t(242,"td")(243,"code"),o(244,"var(--color-neutral-light-20)"),e()()(),t(245,"tr")(246,"td")(247,"strong"),o(248,"Suggestion"),e()(),l(249,"td")(250,"td"),e(),t(251,"tr")(252,"td")(253,"code"),o(254,"--text-color-suggestion"),e()(),t(255,"td"),o(256,"Cor do texto no estado suggestion"),e(),t(257,"td")(258,"code"),o(259,"var(--color-neutral-mid-60)"),e()()(),t(260,"tr")(261,"td")(262,"code"),o(263,"--background-suggestion"),e()(),t(264,"td"),o(265,"Cor do background no estado suggestion"),e(),t(266,"td")(267,"code"),o(268,"var(--color-brand-01-lightest)"),e()()()()()(),t(269,"div",8)(270,"h4",9),o(271,"Seletor"),e(),t(272,"pre",10),o(273,`<po-combo
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-cache="boolean"
    (p-change)="EventEmitter"
    p-change-on-enter="boolean"
    p-clean="boolean"
    p-debounce-time="number"
    p-disabled="boolean"
    p-disabled-init-filter="boolean"
    p-disabled-tab-filter="boolean"
    p-emit-object-value="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-filter-minlength="number"
    p-filter-mode="PoComboFilterMode"
    p-filter-params="any"
    p-filter-service="PoComboFilter | string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    p-infinite-scroll="boolean"
    p-infinite-scroll-distance="number"
    (p-input-change)="EventEmitter"
    p-label="string"
    p-literals="PoComboLiterals"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="Array<PoComboOption | PoComboOptionGroup | any>"
    p-placeholder="string"
    p-remove-initial-filter="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-sort="boolean" >
</po-combo>
`),e()(),t(274,"h4",11),o(275,"Propriedades"),e(),t(276,"table",12)(277,"tr",13)(278,"th",14),o(279,"Nome"),e(),t(280,"th",14),o(281,"Tipo"),e(),t(282,"th",14),o(283,"Padr\xE3o"),e(),t(284,"th",14),o(285,"Descri\xE7\xE3o"),e()(),t(286,"tr",15)(287,"td",16)(288,"div",17)(289,"span",18),o(290," p-append-in-body"),l(291,"br"),e()()(),t(292,"td",19)(293,"code",20),o(294,"boolean"),e()(),t(295,"td",21)(296,"p")(297,"code"),o(298,"false"),e()()(),t(299,"td",22)(300,"em")(301,"strong"),o(302,"(opcional)"),e()(),t(303,"p"),o(304,`Define que o dropdown do combo ser\xE1 incluido no body da p\xE1gina e n\xE3o suspenso com a caixa de texto do componente.
Op\xE7\xE3o necess\xE1ria para o caso de uso do componente em p\xE1ginas que necessitam renderizar o combo fora do conte\xFAdo principal.`),e(),t(305,"blockquote")(306,"p"),o(307,"Obs: O uso dessa propriedade pode acarretar na perda sequencial da tabula\xE7\xE3o da p\xE1gina"),e()()()(),t(308,"tr",15)(309,"td",16)(310,"div",17)(311,"span",18),o(312," p-auto-focus"),l(313,"br"),e()()(),t(314,"td",19)(315,"code",20),o(316,"boolean"),e()(),t(317,"td",21)(318,"p")(319,"code"),o(320,"false"),e()()(),t(321,"td",22)(322,"em")(323,"strong"),o(324,"(opcional)"),e()(),t(325,"p"),o(326,"Aplica foco no elemento ao ser iniciado."),e(),t(327,"blockquote")(328,"p"),o(329,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),e()()()(),t(330,"tr",15)(331,"td",16)(332,"div",17)(333,"span",18),o(334," p-cache"),l(335,"br"),e()()(),t(336,"td",19)(337,"code",20),o(338,"boolean"),e()(),t(339,"td",21)(340,"p")(341,"code"),o(342,"true"),e()()(),t(343,"td",22)(344,"em")(345,"strong"),o(346,"(opcional)"),e()(),t(347,"p"),o(348,"Define se o componente ir\xE1 guardar o valor do model para evitar requisi\xE7\xF5es repetidas."),e(),t(349,"blockquote")(350,"p"),o(351,"Caso o valor seja "),t(352,"code"),o(353,"false"),e(),o(354,", o componente far\xE1 uma nova requisi\xE7\xE3o mesmo que o valor procurado seja o mesmo do model."),e()()()(),t(355,"tr",15)(356,"td",16)(357,"div",23)(358,"span",24),o(359," (p-change)"),l(360,"br"),e()()(),t(361,"td",19)(362,"code",25),o(363,"EventEmitter"),e()(),t(364,"td",21),o(365,"-"),e(),t(366,"td",22)(367,"em")(368,"strong"),o(369,"(opcional)"),e()(),t(370,"p"),o(371,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel. A fun\xE7\xE3o receber\xE1 como argumento o model modificado."),e(),t(372,"blockquote")(373,"p"),o(374,"Pode-se optar pelo recebimento do objeto selecionado ao inv\xE9s do model atrav\xE9s da propriedade "),t(375,"code"),o(376,"p-emit-object-value"),e(),o(377,"."),e()()()(),t(378,"tr",15)(379,"td",16)(380,"div",17)(381,"span",18),o(382," p-change-on-enter"),l(383,"br"),e()()(),t(384,"td",19)(385,"code",20),o(386,"boolean"),e()(),t(387,"td",21)(388,"p")(389,"code"),o(390,"false"),e()()(),t(391,"td",22)(392,"em")(393,"strong"),o(394,"(opcional)"),e()(),t(395,"p"),o(396,"Indica que o evento "),t(397,"code"),o(398,"p-change"),e(),o(399,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada.'),e()()(),t(400,"tr",15)(401,"td",16)(402,"div",17)(403,"span",18),o(404," p-clean"),l(405,"br"),e()()(),t(406,"td",19)(407,"code",20),o(408,"boolean"),e()(),t(409,"td",21),o(410,"-"),e(),t(411,"td",22)(412,"em")(413,"strong"),o(414,"(opcional)"),e()(),t(415,"p"),o(416,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),e()()(),t(417,"tr",15)(418,"td",16)(419,"div",17)(420,"span",18),o(421," p-debounce-time"),l(422,"br"),e()()(),t(423,"td",19)(424,"code",26),o(425,"number"),e()(),t(426,"td",21)(427,"p")(428,"code"),o(429,"400"),e()()(),t(430,"td",22)(431,"em")(432,"strong"),o(433,"(opcional)"),e()(),t(434,"p"),o(435,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla.
Ser\xE1 utilizada apenas quando houver servi\xE7o (`),t(436,"code"),o(437,"p-filter-service"),e(),o(438,")."),e()()(),t(439,"tr",15)(440,"td",16)(441,"div",17)(442,"span",18),o(443," p-disabled"),l(444,"br"),e()()(),t(445,"td",19)(446,"code",20),o(447,"boolean"),e()(),t(448,"td",21)(449,"p")(450,"code"),o(451,"false"),e()()(),t(452,"td",22)(453,"em")(454,"strong"),o(455,"(opcional)"),e()(),t(456,"p"),o(457,"Indica que o campo ser\xE1 desabilitado."),e()()(),t(458,"tr",15)(459,"td",16)(460,"div",17)(461,"span",18),o(462," p-disabled-init-filter"),l(463,"br"),e()()(),t(464,"td",19)(465,"code",20),o(466,"boolean"),e()(),t(467,"td",21)(468,"p")(469,"code"),o(470,"false"),e()()(),t(471,"td",22)(472,"em")(473,"strong"),o(474,"(opcional)"),e()(),t(475,"p"),o(476,"Desabilita o filtro inicial no servi\xE7o, que \xE9 executado no primeiro clique no campo."),e()()(),t(477,"tr",15)(478,"td",16)(479,"div",17)(480,"span",18),o(481," p-disabled-tab-filter"),l(482,"br"),e()()(),t(483,"td",19)(484,"code",20),o(485,"boolean"),e()(),t(486,"td",21)(487,"p")(488,"code"),o(489,"false"),e()()(),t(490,"td",22)(491,"em")(492,"strong"),o(493,"(opcional)"),e()(),t(494,"p"),o(495,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB."),e()()(),t(496,"tr",15)(497,"td",16)(498,"div",17)(499,"span",18),o(500," p-emit-object-value"),l(501,"br"),e()()(),t(502,"td",19)(503,"code",20),o(504,"boolean"),e()(),t(505,"td",21)(506,"p")(507,"code"),o(508,"false"),e()()(),t(509,"td",22)(510,"em")(511,"strong"),o(512,"(opcional)"),e()(),t(513,"p"),o(514,"Se verdadeiro, o evento "),t(515,"code"),o(516,"p-change"),e(),o(517," receber\xE1 como argumento o "),t(518,"code"),o(519,"PoComboOption"),e(),o(520," referente \xE0 op\xE7\xE3o selecionada."),e()()(),t(521,"tr",15)(522,"td",16)(523,"div",17)(524,"span",18),o(525," p-error-limit"),l(526,"br"),e()()(),t(527,"td",19)(528,"code",20),o(529,"boolean"),e()(),t(530,"td",21)(531,"p")(532,"code"),o(533,"false"),e()()(),t(534,"td",22)(535,"em")(536,"strong"),o(537,"(opcional)"),e()(),t(538,"p"),o(539,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),e(),t(540,"blockquote")(541,"p"),o(542,"Caso essa propriedade seja definida como "),t(543,"code"),o(544,"true"),e(),o(545,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),e()()()(),t(546,"tr",15)(547,"td",16)(548,"div",17)(549,"span",18),o(550," p-field-error-message"),l(551,"br"),e()()(),t(552,"td",19)(553,"code",27),o(554,"string"),e()(),t(555,"td",21),o(556,"-"),e(),t(557,"td",22)(558,"em")(559,"strong"),o(560,"(opcional)"),e()(),t(561,"p"),o(562,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),e(),t(563,"blockquote")(564,"p"),o(565,"Necess\xE1rio que a propriedade "),t(566,"code"),o(567,"p-required"),e(),o(568," esteja habilitada."),e()()()(),t(569,"tr",15)(570,"td",16)(571,"div",17)(572,"span",18),o(573," p-field-label"),l(574,"br"),e()()(),t(575,"td",19)(576,"code",27),o(577,"string"),e()(),t(578,"td",21)(579,"p")(580,"code"),o(581,"label"),e()()(),t(582,"td",22)(583,"em")(584,"strong"),o(585,"(opcional)"),e()(),t(586,"p"),o(587,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(588,"code"),o(589,"p-options"),e(),o(590,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),e(),t(591,"p"),o(592,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),e()()(),t(593,"tr",15)(594,"td",16)(595,"div",17)(596,"span",18),o(597," p-field-value"),l(598,"br"),e()()(),t(599,"td",19)(600,"code",27),o(601,"string"),e()(),t(602,"td",21)(603,"p")(604,"code"),o(605,"value"),e()()(),t(606,"td",22)(607,"em")(608,"strong"),o(609,"(opcional)"),e()(),t(610,"p"),o(611,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(612,"code"),o(613,"p-options"),e(),o(614,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),e(),t(615,"p"),o(616,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),e()()(),t(617,"tr",15)(618,"td",16)(619,"div",17)(620,"span",18),o(621," p-filter-minlength"),l(622,"br"),e()()(),t(623,"td",19)(624,"code",26),o(625,"number"),e()(),t(626,"td",21)(627,"p")(628,"code"),o(629,"0"),e()()(),t(630,"td",22)(631,"em")(632,"strong"),o(633,"(opcional)"),e()(),t(634,"p"),o(635,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o."),e()()(),t(636,"tr",15)(637,"td",16)(638,"div",17)(639,"span",18),o(640," p-filter-mode"),l(641,"br"),e()()(),t(642,"td",19)(643,"code",28),o(644,"PoComboFilterMode"),e()(),t(645,"td",21)(646,"p")(647,"code"),o(648,"startsWith"),e()()(),t(649,"td",22)(650,"em")(651,"strong"),o(652,"(opcional)"),e()(),t(653,"p"),o(654,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),t(655,"code"),o(656,"startsWith"),e(),o(657,", "),t(658,"code"),o(659,"contains"),e(),o(660," ou "),t(661,"code"),o(662,"endsWith"),e(),o(663,"."),e(),t(664,"blockquote")(665,"p"),o(666,"Quando utilizar a propriedade "),t(667,"code"),o(668,"p-filter-service"),e(),o(669," esta propriedade ser\xE1 ignorada."),e()()()(),t(670,"tr",15)(671,"td",16)(672,"div",17)(673,"span",18),o(674," p-filter-params"),l(675,"br"),e()()(),t(676,"td",19)(677,"code",29),o(678,"any"),e()(),t(679,"td",21),o(680,"-"),e(),t(681,"td",22)(682,"em")(683,"strong"),o(684,"(opcional)"),e()(),t(685,"p"),o(686,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),t(687,"em"),o(688,"PoComboFilter"),e(),o(689,"."),e(),t(690,"blockquote")(691,"p"),o(692,"Caso a lista contenha agrupamentos, os mesmos s\xF3 ser\xE3o exibidos se houver no m\xEDnimo uma op\xE7\xE3o que corresponda \xE0 pesquisa."),e()()()(),t(693,"tr",15)(694,"td",16)(695,"div",17)(696,"span",18),o(697," p-filter-service"),l(698,"br"),e()()(),t(699,"td",19)(700,"code",30),o(701,"PoComboFilter "),e(),t(702,"code",27),o(703," string"),e()(),t(704,"td",21),o(705,"-"),e(),t(706,"td",22)(707,"em")(708,"strong"),o(709,"(opcional)"),e()(),t(710,"p"),o(711,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de
itens no componente.
Caso haja a necessidade de customiza\xE7\xE3o, ent\xE3o pode ser informado um servi\xE7o implementando a interface PoComboFilter.`),e(),t(712,"p"),o(713,`Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o API TOTVS e utiliza as propriedades
`),t(714,"code"),o(715,"p-field-label"),e(),o(716," e "),t(717,"code"),o(718,"p-field-value"),e(),o(719," para a constru\xE7\xE3o da lista de itens."),e(),t(720,"p"),o(721,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),e(),t(722,"pre")(723,"code"),o(724,"url + ?filter=Peter"),e()(),t(725,"p"),o(726,"Se for definida a propriedade "),t(727,"code"),o(728,"p-filter-params"),e(),o(729,`, a mesma tamb\xE9m ser\xE1 concatenada. Por exemplo, para o
par\xE2metro `),t(730,"code"),o(731,"{ age: 23 }"),e(),o(732," a URL ficaria:"),e(),t(733,"pre")(734,"code"),o(735,"url + ?page=1&pageSize=20&age=23&filter=Peter"),e()()()(),t(736,"tr",15)(737,"td",16)(738,"div",17)(739,"span",18),o(740," p-help"),l(741,"br"),e()()(),t(742,"td",19)(743,"code",27),o(744,"string"),e()(),t(745,"td",21),o(746,"-"),e(),t(747,"td",22)(748,"em")(749,"strong"),o(750,"(opcional)"),e()(),t(751,"p"),o(752,"Texto de apoio para o campo."),e()()(),t(753,"tr",15)(754,"td",16)(755,"div",17)(756,"span",18),o(757," p-icon"),l(758,"br"),e()()(),t(759,"td",19)(760,"code",27),o(761,"string "),e(),t(762,"code",31),o(763," TemplateRef<void>"),e()(),t(764,"td",21),o(765,"-"),e(),t(766,"td",22)(767,"em")(768,"strong"),o(769,"(opcional)"),e()(),t(770,"p"),o(771,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),e(),t(772,"p"),o(773,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(774,"a",32),o(775,"Biblioteca de \xEDcones"),e(),o(776,". conforme exemplo abaixo:"),e(),t(777,"pre")(778,"code"),o(779,'<po-combo p-icon="an an-user" p-label="PO combo"></po-combo>'),e()(),t(780,"p"),o(781,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),t(782,"em"),o(783,"Font Awesome"),e(),o(784,", da seguinte forma:"),e(),t(785,"pre")(786,"code"),o(787,'<po-combo p-icon="fa fa-podcast" p-label="PO combo"></po-combo>'),e()(),t(788,"p"),o(789,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(790,"code"),o(791,"TemplateRef"),e(),o(792,", conforme exemplo abaixo:"),e(),t(793,"pre")(794,"code"),o(795,`<po-combo [p-icon]="template" p-label="combo template ionic"></po-combo>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>`),e()(),t(796,"blockquote")(797,"p"),o(798,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),t(799,"code"),o(800,"font-size: inherit"),e(),o(801," caso o \xEDcone utilizado n\xE3o aplique-o."),e()()()(),t(802,"tr",15)(803,"td",16)(804,"div",17)(805,"span",18),o(806," p-infinite-scroll"),l(807,"br"),e()()(),t(808,"td",19)(809,"code",20),o(810,"boolean"),e()(),t(811,"td",21)(812,"p")(813,"code"),o(814,"false"),e()()(),t(815,"td",22)(816,"em")(817,"strong"),o(818,"(opcional)"),e()(),t(819,"p"),o(820,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),e()()(),t(821,"tr",15)(822,"td",16)(823,"div",17)(824,"span",18),o(825," p-infinite-scroll-distance"),l(826,"br"),e()()(),t(827,"td",19)(828,"code",26),o(829,"number"),e()(),t(830,"td",21),o(831,"-"),e(),t(832,"td",22)(833,"em")(834,"strong"),o(835,"(opcional)"),e()(),t(836,"p"),o(837,"Define o percentual necess\xE1rio para disparar o evento "),t(838,"code"),o(839,"show-more"),e(),o(840,", que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%."),e(),t(841,"p")(842,"strong"),o(843,"Exemplos"),e()(),t(844,"ul")(845,"li"),o(846,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll do combo, o "),t(847,"code"),o(848,"show-more"),e(),o(849," ser\xE1 disparado."),e()()()(),t(850,"tr",15)(851,"td",16)(852,"div",23)(853,"span",24),o(854," (p-input-change)"),l(855,"br"),e()()(),t(856,"td",19)(857,"code",25),o(858,"EventEmitter"),e()(),t(859,"td",21),o(860,"-"),e(),t(861,"td",22)(862,"em")(863,"strong"),o(864,"(opcional)"),e()(),t(865,"p"),o(866,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no Search input. A fun\xE7\xE3o receber\xE1 como argumento o input modificado."),e()()(),t(867,"tr",15)(868,"td",16)(869,"div",17)(870,"span",18),o(871," p-label"),l(872,"br"),e()()(),t(873,"td",19)(874,"code",27),o(875,"string"),e()(),t(876,"td",21),o(877,"-"),e(),t(878,"td",22)(879,"em")(880,"strong"),o(881,"(opcional)"),e()(),t(882,"p"),o(883,"Label no componente."),e()()(),t(884,"tr",15)(885,"td",16)(886,"div",17)(887,"span",18),o(888," p-literals"),l(889,"br"),e()()(),t(890,"td",19)(891,"code",33),o(892,"PoComboLiterals"),e()(),t(893,"td",21),o(894,"-"),e(),t(895,"td",22)(896,"em")(897,"strong"),o(898,"(opcional)"),e()(),t(899,"p"),o(900,"Objeto com as literais usadas no "),t(901,"code"),o(902,"po-combo"),e(),o(903,"."),e(),t(904,"p"),o(905,"Para utilizar basta passar a literal que deseja customizar:"),e(),t(906,"pre")(907,"code"),o(908,`const customLiterals: PoComboLiterals = {
  noData: 'Nenhum valor'
};`),e()(),t(909,"p"),o(910,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),e(),t(911,"pre")(912,"code"),o(913,`<po-combo
  [p-literals]="customLiterals">
</po-combo>`),e()(),t(914,"blockquote")(915,"p"),o(916,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(917,"a",34)(918,"code"),o(919,"PoI18nService"),e()(),o(920," ou do browser."),e()()()(),t(921,"tr",15)(922,"td",16)(923,"div",17)(924,"span",18),o(925," name"),l(926,"br"),e()()(),t(927,"td",19)(928,"code",27),o(929,"string"),e()(),t(930,"td",21),o(931,"-"),e(),t(932,"td",22)(933,"p"),o(934,"Nome do componente."),e()()(),t(935,"tr",15)(936,"td",16)(937,"div",23)(938,"span",24),o(939," (ngModelChange)"),l(940,"br"),e()()(),t(941,"td",19)(942,"code",25),o(943,"EventEmitter"),e()(),t(944,"td",21),o(945,"-"),e(),t(946,"td",22)(947,"em")(948,"strong"),o(949,"(opcional)"),e()(),t(950,"p"),o(951,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),e(),t(952,"p"),o(953,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),t(954,"code"),o(955,"strictTemplates"),e(),o(956,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),e(),t(957,"pre")(958,"code"),o(959,'<po-combo ... [ngModel]="comboModel" (ngModelChange)="comboModel = $event"> </po-combo>'),e()()()(),t(960,"tr",15)(961,"td",16)(962,"div",17)(963,"span",18),o(964," p-optional"),l(965,"br"),e()()(),t(966,"td",19)(967,"code",20),o(968,"boolean"),e()(),t(969,"td",21)(970,"p")(971,"code"),o(972,"false"),e()()(),t(973,"td",22)(974,"em")(975,"strong"),o(976,"(opcional)"),e()(),t(977,"p"),o(978,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),e(),t(979,"blockquote")(980,"p"),o(981,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(982,"ul")(983,"li"),o(984,"O campo conter "),t(985,"code"),o(986,"p-required"),e(),o(987,";"),e(),t(988,"li"),o(989,"N\xE3o possuir "),t(990,"code"),o(991,"p-help"),e(),o(992," e/ou "),t(993,"code"),o(994,"p-label"),e(),o(995,"."),e()()()(),t(996,"tr",15)(997,"td",16)(998,"div",17)(999,"span",18),o(1e3," p-options"),l(1001,"br"),e()()(),t(1002,"td",19)(1003,"code",35),o(1004,"Array<PoComboOption "),e(),t(1005,"code",36),o(1006," PoComboOptionGroup "),e(),t(1007,"code",37),o(1008," any>"),e()(),t(1009,"td",21),o(1010,"-"),e(),t(1011,"td",22)(1012,"p"),o(1013,"Nesta propriedade define a lista de op\xE7\xF5es do "),t(1014,"code"),o(1015,"po-combo"),e(),o(1016,"."),e(),t(1017,"blockquote")(1018,"p"),o(1019,"A lista pode ser definida utilizando um array com o valor representando o "),t(1020,"code"),o(1021,"value"),e(),o(1022," e o "),t(1023,"code"),o(1024,"label"),e(),o(1025," das seguintes formas:"),e()(),t(1026,"pre")(1027,"code"),o(1028,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-combo>`),e()(),t(1029,"pre")(1030,"code"),o(1031,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-combo>`),e()(),t(1032,"ul")(1033,"li"),o(1034,"Aconselha-se utilizar valores distintos no "),t(1035,"code"),o(1036,"label"),e(),o(1037," e "),t(1038,"code"),o(1039,"value"),e(),o(1040," dos itens."),e()()()(),t(1041,"tr",15)(1042,"td",16)(1043,"div",17)(1044,"span",18),o(1045," p-placeholder"),l(1046,"br"),e()()(),t(1047,"td",19)(1048,"code",27),o(1049,"string"),e()(),t(1050,"td",21),o(1051,"-"),e(),t(1052,"td",22)(1053,"p"),o(1054,"Mensagem apresentada enquanto o campo estiver vazio."),e()()(),t(1055,"tr",15)(1056,"td",16)(1057,"div",17)(1058,"span",18),o(1059," p-remove-initial-filter"),l(1060,"br"),e()()(),t(1061,"td",19)(1062,"code",20),o(1063,"boolean"),e()(),t(1064,"td",21)(1065,"p")(1066,"code"),o(1067,"false"),e()()(),t(1068,"td",22)(1069,"em")(1070,"strong"),o(1071,"(opcional)"),e()(),t(1072,"p"),o(1073,"Define que o filtro no primeiro clique ser\xE1 removido."),e(),t(1074,"blockquote")(1075,"p"),o(1076,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),e()()()(),t(1077,"tr",15)(1078,"td",16)(1079,"div",17)(1080,"span",18),o(1081," p-required"),l(1082,"br"),e()()(),t(1083,"td",19)(1084,"code",20),o(1085,"boolean"),e()(),t(1086,"td",21)(1087,"p")(1088,"code"),o(1089,"false"),e()()(),t(1090,"td",22)(1091,"em")(1092,"strong"),o(1093,"(opcional)"),e()(),t(1094,"p"),o(1095,"Define que o campo ser\xE1 obrigat\xF3rio."),e()()(),t(1096,"tr",15)(1097,"td",16)(1098,"div",17)(1099,"span",18),o(1100," p-show-required"),l(1101,"br"),e()()(),t(1102,"td",19)(1103,"code",20),o(1104,"boolean"),e()(),t(1105,"td",21),o(1106,"-"),e(),t(1107,"td",22)(1108,"p"),o(1109,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),e(),t(1110,"blockquote")(1111,"p"),o(1112,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(1113,"ul")(1114,"li"),o(1115,"N\xE3o possuir "),t(1116,"code"),o(1117,"p-help"),e(),o(1118," e/ou "),t(1119,"code"),o(1120,"p-label"),e(),o(1121,"."),e()()()(),t(1122,"tr",15)(1123,"td",16)(1124,"div",17)(1125,"span",18),o(1126," p-sort"),l(1127,"br"),e()()(),t(1128,"td",19)(1129,"code",20),o(1130,"boolean"),e()(),t(1131,"td",21),o(1132,"-"),e(),t(1133,"td",22)(1134,"p"),o(1135,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),e()()()(),t(1136,"h3",11),o(1137,"M\xE9todos"),e(),t(1138,"table",38)(1139,"tr",15)(1140,"th",39)(1141,"div",17)(1142,"h4")(1143,"span",18),o(1144," focus "),e()()()()(),t(1145,"tr",22)(1146,"td",22)(1147,"p"),o(1148,"Fun\xE7\xE3o que atribui foco ao componente."),e(),t(1149,"p"),o(1150,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),t(1151,"pre")(1152,"code"),o(1153,`import { PoComboComponent } from '@po-ui/ng-components';

...

@ViewChild(PoComboComponent, { static: true }) combo: PoComboComponent;

focusCombo() {
  this.combo.focus();
}`),e()()()()(),l(1154,"br"),t(1155,"h3"),o(1156,"Interfaces"),e(),t(1157,"h4",40)(1158,"code",5),o(1159,"PoComboFilter"),e()(),t(1160,"div",2)(1161,"p"),o(1162,"Interface para os servi\xE7os que ser\xE3o utilizados no po-combo."),e()(),t(1163,"h4",11),o(1164,"M\xE9todos"),e(),t(1165,"table",38)(1166,"tr",15)(1167,"th",39)(1168,"div",17)(1169,"h4")(1170,"span",18),o(1171," getFilteredData "),e()()()()(),t(1172,"tr",22)(1173,"td",22)(1174,"p"),o(1175,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem a interface PoComboOption,
ser\xE1 informado por parametro o campo, de acordo com o fieldLabel, e o valor a ser pesquisado.`),e()()()(),t(1176,"h5")(1177,"b"),o(1178,"Par\xE2metros"),e()(),t(1179,"table",12)(1180,"tr",13)(1181,"th",14),o(1182,"Nome"),e(),t(1183,"th",14),o(1184,"Tipo"),e(),t(1185,"th",14),o(1186,"Descri\xE7\xE3o"),e()(),t(1187,"tr",15)(1188,"td",16),o(1189," params"),e(),t(1190,"td",19)(1191,"code",41),o(1192," any "),e()(),t(1193,"td",22)(1194,"p"),o(1195,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),e()()(),t(1196,"tr",15)(1197,"td",16),o(1198," filterParams"),e(),t(1199,"td",19)(1200,"code",41),o(1201," any "),e()(),t(1202,"td",22)(1203,"p"),o(1204,"Valor informado atrav\xE9s da propriedade "),t(1205,"code"),o(1206,"p-filter-params"),e(),o(1207,"."),e()()()(),l(1208,"br"),t(1209,"table",38)(1210,"tr",15)(1211,"th",39)(1212,"div",17)(1213,"h4")(1214,"span",18),o(1215," getObjectByValue "),e()()()()(),t(1216,"tr",22)(1217,"td",22)(1218,"p"),o(1219,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m apenas o objeto filtrado que seguem a interface PoComboOption,
ser\xE1 informado por parametro valor a ser pesquisado.`),e()()()(),t(1220,"h5")(1221,"b"),o(1222,"Par\xE2metros"),e()(),t(1223,"table",12)(1224,"tr",13)(1225,"th",14),o(1226,"Nome"),e(),t(1227,"th",14),o(1228,"Tipo"),e(),t(1229,"th",14),o(1230,"Descri\xE7\xE3o"),e()(),t(1231,"tr",15)(1232,"td",16),o(1233," value"),e(),t(1234,"td",19)(1235,"code",27),o(1236," string "),e(),t(1237,"code",26),o(1238," number "),e()(),t(1239,"td",22)(1240,"p"),o(1241,"Valor respons\xE1vel por realizar a busca de um \xFAnico objeto."),e()()(),t(1242,"tr",15)(1243,"td",16),o(1244," filterParams"),e(),t(1245,"td",19)(1246,"code",41),o(1247," any "),e()(),t(1248,"td",22)(1249,"p"),o(1250,"Valor informado atrav\xE9s da propriedade "),t(1251,"code"),o(1252,"p-filter-params"),e(),o(1253,"."),e()()()(),l(1254,"br"),t(1255,"h4",40)(1256,"code",5),o(1257,"PoComboLiterals"),e()(),t(1258,"div",2)(1259,"p"),o(1260,"Interface para defini\xE7\xE3o das literais usadas no "),t(1261,"code"),o(1262,"po-combo"),e(),o(1263,"."),e()(),t(1264,"h4",11),o(1265,"Propriedades"),e(),t(1266,"table",12)(1267,"tr",13)(1268,"th",14),o(1269,"Nome"),e(),t(1270,"th",14),o(1271,"Tipo"),e(),t(1272,"th",14),o(1273,"Descri\xE7\xE3o"),e()(),t(1274,"tr",15)(1275,"td",16)(1276,"div",17)(1277,"span",18),o(1278," chooseOption"),l(1279,"br"),e()()(),t(1280,"td",19)(1281,"code",27),o(1282,"string"),e()(),t(1283,"td",22)(1284,"em")(1285,"strong"),o(1286,"(opcional)"),e()(),t(1287,"p"),o(1288,"Texto exibido quando o combo estiver vazio."),e()()(),t(1289,"tr",15)(1290,"td",16)(1291,"div",17)(1292,"span",18),o(1293," clean"),l(1294,"br"),e()()(),t(1295,"td",19)(1296,"code",27),o(1297,"string"),e()(),t(1298,"td",22)(1299,"em")(1300,"strong"),o(1301,"(opcional)"),e()(),t(1302,"p"),o(1303,"Texto do aria-label do bot\xE3o de limpar"),e()()(),t(1304,"tr",15)(1305,"td",16)(1306,"div",17)(1307,"span",18),o(1308," noData"),l(1309,"br"),e()()(),t(1310,"td",19)(1311,"code",27),o(1312,"string"),e()(),t(1313,"td",22)(1314,"em")(1315,"strong"),o(1316,"(opcional)"),e()(),t(1317,"p"),o(1318,"Texto exibido quando n\xE3o houver itens na lista ou se, a pesquisa do filtro n\xE3o retornar nenhum item."),e()()()(),t(1319,"h4",40)(1320,"code",5),o(1321,"PoComboOptionGroup"),e()(),t(1322,"div",2)(1323,"p"),o(1324,"Interface dos agrupamentos da cole\xE7\xE3o que ser\xE1 exibida no dropdown do "),t(1325,"code"),o(1326,"po-combo"),e(),o(1327,"."),e()(),t(1328,"h4",11),o(1329,"Propriedades"),e(),t(1330,"table",12)(1331,"tr",13)(1332,"th",14),o(1333,"Nome"),e(),t(1334,"th",14),o(1335,"Tipo"),e(),t(1336,"th",14),o(1337,"Descri\xE7\xE3o"),e()(),t(1338,"tr",15)(1339,"td",16)(1340,"div",17)(1341,"span",18),o(1342," label"),l(1343,"br"),e()()(),t(1344,"td",19)(1345,"code",27),o(1346,"string"),e()(),t(1347,"td",22)(1348,"p"),o(1349,"T\xEDtulo para cada grupo de op\xE7\xF5es."),e()()(),t(1350,"tr",15)(1351,"td",16)(1352,"div",17)(1353,"span",18),o(1354," options"),l(1355,"br"),e()()(),t(1356,"td",19)(1357,"code",42),o(1358,"Array<PoComboOption>"),e()(),t(1359,"td",22)(1360,"p"),o(1361,"Lista de itens a serem exibidos."),e()()()(),t(1362,"h4",40)(1363,"code",5),o(1364,"PoComboOption"),e()(),t(1365,"div",2)(1366,"p"),o(1367,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista do "),t(1368,"code"),o(1369,"po-combo"),e(),o(1370,"."),e()(),t(1371,"h4",11),o(1372,"Propriedades"),e(),t(1373,"table",12)(1374,"tr",13)(1375,"th",14),o(1376,"Nome"),e(),t(1377,"th",14),o(1378,"Tipo"),e(),t(1379,"th",14),o(1380,"Descri\xE7\xE3o"),e()(),t(1381,"tr",15)(1382,"td",16)(1383,"div",17)(1384,"span",18),o(1385," label"),l(1386,"br"),e()()(),t(1387,"td",19)(1388,"code",27),o(1389,"string"),e()(),t(1390,"td",22)(1391,"em")(1392,"strong"),o(1393,"(opcional)"),e()(),t(1394,"p"),o(1395,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),e(),t(1396,"blockquote")(1397,"p"),o(1398,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),t(1399,"code"),o(1400,"value"),e(),o(1401,"."),e()()()(),t(1402,"tr",15)(1403,"td",16)(1404,"div",17)(1405,"span",18),o(1406," value"),l(1407,"br"),e()()(),t(1408,"td",19)(1409,"code",27),o(1410,"string "),e(),t(1411,"code",26),o(1412," number"),e()(),t(1413,"td",22)(1414,"p"),o(1415,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),t(1416,"em"),o(1417,"model"),e(),o(1418,"."),e()()()(),t(1419,"h3"),o(1420,"Enums"),e(),t(1421,"h4",4)(1422,"code",5),o(1423,"PoComboFilterMode"),e()(),t(1424,"div",2)(1425,"p"),o(1426,"Define o tipo de busca usado no po-combo."),e()(),t(1427,"h4",11),o(1428,"Propriedades"),e(),t(1429,"table",12)(1430,"tr",13)(1431,"th",14),o(1432,"Nome"),e(),t(1433,"th",14),o(1434,"Descri\xE7\xE3o"),e()(),t(1435,"tr",15)(1436,"td",16)(1437,"div",17)(1438,"span",18),o(1439," startsWith"),l(1440,"br"),e()()(),t(1441,"td",22)(1442,"p"),o(1443,"Verifica se o texto "),t(1444,"em"),o(1445,"inicia"),e(),o(1446," com o valor pesquisado. Caso n\xE3o seja especificado um tipo, ser\xE1 esse o utilizado."),e()()(),t(1447,"tr",15)(1448,"td",16)(1449,"div",17)(1450,"span",18),o(1451," contains"),l(1452,"br"),e()()(),t(1453,"td",22)(1454,"p"),o(1455,"Verifica se o texto "),t(1456,"em"),o(1457,"cont\xE9m"),e(),o(1458," o valor pesquisado."),e()()(),t(1459,"tr",15)(1460,"td",16)(1461,"div",17)(1462,"span",18),o(1463," endsWith"),l(1464,"br"),e()()(),t(1465,"td",22)(1466,"p"),o(1467,"Verifica se o texto "),t(1468,"em"),o(1469,"finaliza"),e(),o(1470," com o valor pesquisado."),e()()()()())},dependencies:[w],encapsulation:2})}return a})();var it=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(_(Oe),_(Ve))};static \u0275cmp=C({type:a,selectors:[["ng-component"]],standalone:!1,decls:13,vars:4,consts:[["p-title"," Combo",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(r,n){r&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),l(3,"sample-po-combo-doc"),e(),t(4,"po-tab",3),l(5,"sample-po-combo-basic-view")(6,"sample-po-combo-labs-view")(7,"sample-po-combo-scheduling-view")(8,"sample-po-combo-transfer-view")(9,"sample-po-combo-heroes-view")(10,"sample-po-combo-heroes-reactive-form-view")(11,"sample-po-combo-infinity-scroll-view")(12,"sample-po-combo-hotels-view"),e()()()),r&2&&(s("p-actions",n.actions),m(2),s("p-active",n.activeTab.includes("doc")),m(2),s("p-hide",n.hidePoWebSample)("p-active",n.activeTab.includes("web")))},dependencies:[We,y,x,Ge,Re,ze,Qe,Ye,Ze,et,ot,nt],encapsulation:2})}return a})();var Qt=[{path:"",component:it}],at=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=re({type:a});static \u0275inj=le({imports:[Se.forChild(Qt),Se]})}return a})();var Go=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=re({type:a});static \u0275inj=le({imports:[Be,at]})}return a})();export{Go as DocPoComboModule};
