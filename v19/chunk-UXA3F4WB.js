import{$ as re,$a as T,$c as ce,$d as ne,Bc as qe,Ca as H,Cd as W,Da as G,Dc as te,Ea as A,F as u,Fa as N,Fc as se,G as b,Ga as o,Ha as ae,Ia as v,Ka as h,Kb as Pe,La as g,Lb as L,Ma as f,Mb as D,Na as xe,Nb as U,Oa as ge,Ob as q,Od as We,Pa as M,Pb as Q,Qa as we,Sb as Me,T as m,Tb as Te,U as _,Ua as R,Va as j,Vb as ke,Wb as Oe,Xd as y,Ya as fe,Yb as Ve,Yd as x,Zb as Se,_ as C,_b as me,ad as oe,bb as z,ea as I,gb as $,gc as de,ha as s,hd as ue,id as k,jb as _e,ka as P,kd as Fe,ld as Ie,md as be,na as t,oa as e,oc as J,pa as l,pb as ee,qa as X,ra as Z,re as w,sa as ve,sd as Ne,se as Be,ta as B,ua as S,va as pe,x as Ee,y as le,ya as ye,yd as K,zc as Le,zd as De}from"./chunk-23IW53AA.js";var lt=()=>({value:"Option 1"}),rt=()=>({value:"Option 2"}),pt=(a,V)=>[a,V],He=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","combo","p-label","PO Combo",3,"p-options"]],template:function(r,n){r&1&&l(0,"po-combo",0),r&2&&s("p-options",we(3,pt,ge(1,lt),ge(2,rt)))},dependencies:[k],encapsulation:2})}return a})();var dt=a=>({"docs-sample-code-tabs":a}),Ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo Basic"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-basic/sample-po-combo-basic.component.html"),e(),t(13,"pre",7),o(14,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{ value: 'Option 1' }, { value: 'Option 2' }]"> </po-combo>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-combo-basic/sample-po-combo-basic.component.ts"),e(),t(19,"pre",9),o(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-combo-basic',
  templateUrl: './sample-po-combo-basic.component.html',
  standalone: false
})
export class SamplePoComboBasicComponent {}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-basic"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,dt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,He],encapsulation:2})}return a})();var Ae=(()=>{class a{combo;comboOptionGroupSwitch;customLiterals;debounceTime;event;fieldLabel;fieldValue;filterMinlength;filterMode;filterService;help;icon;label;literals;optionsGroup;optionsGroupList;placeholder;properties;fieldErrorMessage;option;options;selectedOptionsGroup;filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];iconsOptions=[{label:"ph ph-building-apartment",value:"ph ph-building-apartment"},{label:"ph ph-gas-pump",value:"ph ph-gas-pump"},{label:"fa fa-calculator",value:"fa fa-calculator"}];propertiesOptions=[{value:"changeOnEnter",label:"Change On Enter"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"disabledInitFilter",label:"Disabled Init Filter"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"sort",label:"Sort"},{value:"clean",label:"Clean"},{value:"disabledTabFilter",label:"Disabled Tab Filter"}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0}}changeEvent(p){this.event=p}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.combo=void 0,this.comboOptionGroupSwitch=!1,this.customLiterals=void 0,this.event="",this.debounceTime=void 0,this.fieldLabel="",this.fieldValue="",this.filterMinlength=void 0,this.filterService="",this.filterMode=void 0,this.help=void 0,this.label=void 0,this.literals="",this.icon=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.selectedOptionsGroup=void 0}insertGroupIntoSelectInput(p){this.selectedOptionsGroup=p,this.optionsGroupList=[...this.optionsGroupList,{label:p,value:p}]}verifyOptionObject(p,r,n){let{label:d,value:c}=r;if(n){let i=p.findIndex(Ce=>Ce.label===n&&"options"in Ce);return i===-1?(this.insertGroupIntoSelectInput(n),[...p,{label:n,options:[{label:d,value:c}]}]):(p[i].options.push({label:d,value:c}),p)}return[...p,{label:d,value:c}]}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-labs"]],standalone:!1,decls:43,vars:50,consts:[["fOption","ngForm"],["f","ngForm"],["name","combo",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-change-on-enter","p-clean","p-debounce-time","p-disabled","p-disabled-init-filter","p-disabled-tab-filter","p-field-label","p-field-value","p-filter-minlength","p-filter-mode","p-filter-service","p-help","p-icon","p-label","p-literals","p-optional","p-options","p-placeholder","p-required","p-field-error-message","p-show-required","p-sort"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po combo options group"],["name","comboOptionGroupSwitch","p-label","Combo options group",1,"po-md-2",3,"ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-md-5",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-md-5",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po combo options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","2","p-label","Properties",1,"po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","icon","p-columns","1","p-label","Icon",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","1","p-label","Filter Mode",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos"}',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","debounceTime","p-clean","","p-label","Debounce Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterMinlength","p-clean","","p-label","Filter Min Length",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(r,n){if(r&1){let d=B();t(0,"po-combo",2),f("ngModelChange",function(i){return u(d),g(n.combo,i)||(n.combo=i),b(i)}),S("p-change",function(){return u(d),b(n.changeEvent("p-change"))}),e(),l(1,"hr"),t(2,"div",3),l(3,"po-info",4)(4,"po-info",5),e(),l(5,"hr"),t(6,"form",null,0),l(8,"po-divider",6),t(9,"div",3)(10,"po-switch",7),f("ngModelChange",function(i){return u(d),g(n.comboOptionGroupSwitch,i)||(n.comboOptionGroupSwitch=i),b(i)}),e(),t(11,"po-select",8),f("ngModelChange",function(i){return u(d),g(n.selectedOptionsGroup,i)||(n.selectedOptionsGroup=i),b(i)}),S("p-change",function(){return u(d),b(n.optionsGroupSelection())}),e(),t(12,"po-input",9),f("ngModelChange",function(i){return u(d),g(n.optionsGroup,i)||(n.optionsGroup=i),b(i)}),e()(),l(13,"po-divider",10),t(14,"div",3)(15,"po-input",11),f("ngModelChange",function(i){return u(d),g(n.option.label,i)||(n.option.label=i),b(i)}),e(),t(16,"po-input",12),f("ngModelChange",function(i){return u(d),g(n.option.value,i)||(n.option.value=i),b(i)}),e()(),t(17,"div",3)(18,"po-button",13),S("p-click",function(){return u(d),b(n.addOption())}),e()()(),l(19,"hr"),t(20,"form",null,1)(22,"div",3)(23,"po-input",14),f("ngModelChange",function(i){return u(d),g(n.label,i)||(n.label=i),b(i)}),e(),t(24,"po-input",15),f("ngModelChange",function(i){return u(d),g(n.help,i)||(n.help=i),b(i)}),e()(),t(25,"div",3)(26,"po-input",16),f("ngModelChange",function(i){return u(d),g(n.placeholder,i)||(n.placeholder=i),b(i)}),e(),t(27,"po-input",17),f("ngModelChange",function(i){return u(d),g(n.fieldErrorMessage,i)||(n.fieldErrorMessage=i),b(i)}),e()(),t(28,"div",3)(29,"po-checkbox-group",18),f("ngModelChange",function(i){return u(d),g(n.properties,i)||(n.properties=i),b(i)}),e(),t(30,"po-radio-group",19),f("ngModelChange",function(i){return u(d),g(n.icon,i)||(n.icon=i),b(i)}),e(),t(31,"po-radio-group",20),f("ngModelChange",function(i){return u(d),g(n.filterMode,i)||(n.filterMode=i),b(i)}),e()(),t(32,"div",3)(33,"po-input",21),f("ngModelChange",function(i){return u(d),g(n.filterService,i)||(n.filterService=i),b(i)}),e(),t(34,"po-input",22),f("ngModelChange",function(i){return u(d),g(n.literals,i)||(n.literals=i),b(i)}),S("p-change",function(){return u(d),b(n.changeLiterals())}),e()(),t(35,"div",3)(36,"po-input",23),f("ngModelChange",function(i){return u(d),g(n.fieldValue,i)||(n.fieldValue=i),b(i)}),e(),t(37,"po-input",24),f("ngModelChange",function(i){return u(d),g(n.fieldLabel,i)||(n.fieldLabel=i),b(i)}),e()(),t(38,"div",3)(39,"po-number",25),f("ngModelChange",function(i){return u(d),g(n.debounceTime,i)||(n.debounceTime=i),b(i)}),e(),t(40,"po-number",26),f("ngModelChange",function(i){return u(d),g(n.filterMinlength,i)||(n.filterMinlength=i),b(i)}),e()(),t(41,"div",3)(42,"po-button",27),S("p-click",function(){return u(d),b(n.restore())}),e()()()}if(r&2){let d=N(7);h("ngModel",n.combo),s("p-change-on-enter",n.properties.includes("changeOnEnter"))("p-clean",n.properties.includes("clean"))("p-debounce-time",n.debounceTime)("p-disabled",n.properties.includes("disabled"))("p-disabled-init-filter",n.properties.includes("disableInitFilter"))("p-disabled-tab-filter",n.properties.includes("disabledTabFilter"))("p-field-label",n.fieldLabel)("p-field-value",n.fieldValue)("p-filter-minlength",n.filterMinlength)("p-filter-mode",n.filterMode)("p-filter-service",n.filterService)("p-help",n.help)("p-icon",n.icon)("p-label",n.label)("p-literals",n.customLiterals)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-placeholder",n.placeholder)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-sort",n.properties.includes("sort")),m(3),s("p-value",n.combo),m(),s("p-value",n.event),m(6),h("ngModel",n.comboOptionGroupSwitch),m(),h("ngModel",n.selectedOptionsGroup),s("p-disabled",!n.comboOptionGroupSwitch)("p-options",n.optionsGroupList),m(),h("ngModel",n.optionsGroup),s("p-disabled",!n.comboOptionGroupSwitch),m(3),h("ngModel",n.option.label),m(),h("ngModel",n.option.value),m(2),s("p-disabled",d.form.invalid),m(5),h("ngModel",n.label),m(),h("ngModel",n.help),m(2),h("ngModel",n.placeholder),m(),h("ngModel",n.fieldErrorMessage),m(2),h("ngModel",n.properties),s("p-options",n.propertiesOptions),m(),h("ngModel",n.icon),s("p-options",n.iconsOptions),m(),h("ngModel",n.filterMode),s("p-options",n.filterModeOptions),m(2),h("ngModel",n.filterService),m(),h("ngModel",n.literals),m(2),h("ngModel",n.fieldValue),m(),h("ngModel",n.fieldLabel),m(2),h("ngModel",n.debounceTime),m(),h("ngModel",n.filterMinlength)}},dependencies:[Q,L,D,q,U,J,me,Le,qe,k,be,Ne,K,ce,W],encapsulation:2})}return a})();var ut=a=>({"docs-sample-code-tabs":a}),Re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo Labs"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-labs/sample-po-combo-labs.component.html"),e(),t(13,"pre",7),o(14,`<po-combo
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
    { label: 'ph ph-building-apartment', value: 'ph ph-building-apartment' },
    { label: 'ph ph-gas-pump', value: 'ph ph-gas-pump' },
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
    { value: 'disabledTabFilter', label: 'Disabled Tab Filter' }
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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-labs"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,ut,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,Ae],encapsulation:2})}return a})();var he=(()=>{class a{getcities(){return[{label:"S\xE3o Paulo",options:[{label:"S\xE3o Paulo",value:"sao paulo"},{label:"Campinas",value:"campinas"}]},{label:"Paran\xE1",options:[{label:"S\xE3o Jos\xE9 dos Pinhais",value:"sao jose dos pinhais"},{label:"Londrina",value:"londrina"},{label:"Maring\xE1",value:"maringa"}]},{label:"Santa Catarina",options:[{label:"Joinville",value:"joinville"},{label:"Florian\xF3polis",value:"florianopolis"},{label:"Itaja\xED",value:"itajai"}]}]}getMedicalSpecialty(){return[{specialty:"Allergist",specialtyValue:"allergist"},{specialty:"Cardiologist",specialtyValue:"cardiologist"},{specialty:"General practitioner",specialtyValue:"generalPractitioner"},{specialty:"Dermatologist",specialtyValue:"dermatologist"},{specialty:"Gynecologist",specialtyValue:"gynecologist"},{specialty:"Nutritionist",specialtyValue:"nutritionist"},{specialty:"Pediatrist",specialtyValue:"pediatrist"},{specialty:"Psychiatrist",specialtyValue:"psychiatrist"},{specialty:"Orthopaedist",specialtyValue:"orthopaedist"}]}static \u0275fac=function(r){return new(r||a)};static \u0275prov=Ee({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var gt=["schedulingForm"];function ft(a,V){a&1&&ve(0)}function St(a,V){if(a&1&&(t(0,"div",5),l(1,"po-avatar",17),t(2,"p",18),o(3),e()()),a&2){let p=pe().$implicit,r=pe();m(),s("p-src",r.getStateByLabel(p.label)),m(2),ae(p.label)}}function Ct(a,V){if(a&1&&(t(0,"div",18),o(1),e()),a&2){let p=pe().$implicit;m(),ae(p.label)}}function Et(a,V){if(a&1&&I(0,ft,1,0,"ng-container",16)(1,St,4,2,"ng-template",null,1,fe)(3,Ct,2,1,"ng-template",null,2,fe),a&2){let p=V.$implicit,r=N(2),n=N(4);s("ngIf",p.options)("ngIfThen",r)("ngIfElse",n)}}var je=(()=>{class a{poNotification;schedulingService;form;birthday;citiesOptions;city;email;informations;medicalSpecialty;medicalSpecialtyOptions;name;phone;typeScheduling;typeSchedulings=[{label:"Particular",value:"particular"},{label:"Health Insurance",value:"healthInsurance"}];constructor(p,r){this.poNotification=p,this.schedulingService=r}ngOnInit(){this.citiesOptions=this.schedulingService.getcities(),this.medicalSpecialtyOptions=this.schedulingService.getMedicalSpecialty()}confirmPreAppointment(p=""){this.poNotification.success(`Great ${p}, your pre-appointment was successfully received!`),this.form.reset()}getStateByLabel(p){return`https://thf.totvs.com.br/sample/api/static/assets/${{"S\xE3o Paulo":"sp","Santa Catarina":"sc",Paran\u00E1:"pr"}[p]}.png`}static \u0275fac=function(r){return new(r||a)(_(oe),_(he))};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-scheduling"]],viewQuery:function(r,n){if(r&1&&H(gt,7),r&2){let d;G(d=A())&&(n.form=d.first)}},standalone:!1,features:[xe([he])],decls:20,vars:12,consts:[["schedulingForm","ngForm"],["OptionsGroupTitle",""],["optionsGroup",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-placeholder","example@domain.com","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","birthday","p-clean","","p-label","Birthday","p-placeholder","dd/mm/yyyy","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","phone","p-clean","","p-label","Phone number","p-mask","(99) 99999-9999","p-placeholder","(99) 99999-9999","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","city","p-icon","ph ph-map-trifold","p-label","Select a location","p-placeholder","Select a location","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-combo-option-template",""],["name","typeScheduling","p-label","Type scheduling","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","medicalSpecialty","p-icon","ph ph-flask","p-label","Medical Specialty/Exam","p-required","","p-sort","","p-field-label","specialty","p-field-value","specialtyValue",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","informations","p-help","Additional informations","p-label","Informations",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-label","Schedule","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],[4,"ngIf","ngIfThen","ngIfElse"],["p-size","xs",1,"po-sm-2","po-md-3","po-lg-1",2,"background-color","#fbfbfb",3,"p-src"],[1,"po-sm-10","po-md-9","po-lg-11"]],template:function(r,n){if(r&1){let d=B();t(0,"div",3)(1,"div",4),o(2,"Pre-appointment scheduling"),e()(),t(3,"form",null,0)(5,"div",5)(6,"po-input",6),f("ngModelChange",function(i){return u(d),g(n.name,i)||(n.name=i),b(i)}),e(),t(7,"po-email",7),f("ngModelChange",function(i){return u(d),g(n.email,i)||(n.email=i),b(i)}),e()(),t(8,"div",5)(9,"po-datepicker",8),f("ngModelChange",function(i){return u(d),g(n.birthday,i)||(n.birthday=i),b(i)}),e(),t(10,"po-input",9),f("ngModelChange",function(i){return u(d),g(n.phone,i)||(n.phone=i),b(i)}),e()(),t(11,"div",5)(12,"po-combo",10),f("ngModelChange",function(i){return u(d),g(n.city,i)||(n.city=i),b(i)}),I(13,Et,5,3,"ng-template",11),e(),t(14,"po-select",12),f("ngModelChange",function(i){return u(d),g(n.typeScheduling,i)||(n.typeScheduling=i),b(i)}),e(),t(15,"po-combo",13),f("ngModelChange",function(i){return u(d),g(n.medicalSpecialty,i)||(n.medicalSpecialty=i),b(i)}),e()(),t(16,"div",5)(17,"po-textarea",14),f("ngModelChange",function(i){return u(d),g(n.informations,i)||(n.informations=i),b(i)}),e()(),t(18,"div",5)(19,"po-button",15),S("p-click",function(){return u(d),b(n.confirmPreAppointment(n.name))}),e()()()}if(r&2){let d=N(4);m(6),h("ngModel",n.name),m(),h("ngModel",n.email),m(2),h("ngModel",n.birthday),m(),h("ngModel",n.phone),m(2),h("ngModel",n.city),s("p-options",n.citiesOptions),m(2),h("ngModel",n.typeScheduling),s("p-options",n.typeSchedulings),m(),h("ngModel",n.medicalSpecialty),s("p-options",n.medicalSpecialtyOptions),m(2),h("ngModel",n.informations),m(2),s("p-disabled",d.invalid)}},dependencies:[z,Q,L,D,q,U,de,J,te,k,ue,Ie,be,K,De],encapsulation:2})}return a})();var yt=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-scheduling-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo - Scheduling"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-text-center">
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
      p-icon="ph ph-map-trifold"
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
      p-icon="ph ph-flask"
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
`),e()()()()(),t(25,"div",10),l(26,"sample-po-combo-scheduling"),e(),l(27,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,yt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,je],encapsulation:2})}return a})();var wt=["transferForm"];function _t(a,V){if(a&1&&(t(0,"div",3),l(1,"po-avatar",15),t(2,"div",16)(3,"div",17),o(4),e(),t(5,"div",18),o(6),e()()()),a&2){let p=V.$implicit;m(4),ae(p.label),m(2),v("Account: ",p.value,"")}}var Ue=(()=>{class a{poNotification;form;poModal;contact;dateTransfer=new Date;typeAccount="Checking Account";value;cancelAction={label:"Cancel",action:()=>this.poModal.close()};confirmAction={label:"Confirm",action:()=>this.confirmTransfer()};typeAccounts=[{label:"Checking Account",value:"Checking Account"},{label:"Savings Account",value:"Savings Account"}];constructor(p){this.poNotification=p}confirmTransfer(){this.poModal.close(),this.poNotification.success("Successful Transfer"),this.formReset()}transfer(){this.poModal.open()}formReset(){this.form.reset({dateTransfer:new Date,typeAccount:"Checking Account"})}static \u0275fac=function(r){return new(r||a)(_(oe))};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-transfer"]],viewQuery:function(r,n){if(r&1&&(H(wt,7),H(se,7)),r&2){let d;G(d=A())&&(n.form=d.first),G(d=A())&&(n.poModal=d.first)}},standalone:!1,decls:23,vars:14,consts:[["transferForm","ngForm"],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","typeAccount","p-label","From","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","contact","p-field-value","id","p-field-label","name","p-filter-service","https://po-sample-api.onrender.com/v1/people","p-icon","ph ph-user","p-label","To contact","p-placeholder","Select a contact","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-combo-option-template",""],["name","value","p-clean","","p-label","Value to transfer","p-placeholder","R$ 0,00","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","dateTransfer","p-label","Date to transfer","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Transfer","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Do you confirm transfer?",3,"p-primary-action","p-secondary-action"],["p-label","From",1,"po-md-6",3,"p-value"],["p-label","To",1,"po-md-6",3,"p-value"],["p-label","Value",1,"po-md-6",3,"p-value"],["p-label","Date to transfer",1,"po-md-6",3,"p-value"],["p-size","sm",1,"po-sm-2","po-md-3","po-lg-1"],[1,"po-sm-10","po-md-9","po-lg-11"],[1,"po-font-text-large-bold"],[1,"po-font-text-smaller"]],template:function(r,n){if(r&1){let d=B();t(0,"div",1)(1,"div",2),o(2,"Banking Transfer"),e()(),t(3,"form",null,0)(5,"div",3)(6,"po-select",4),f("ngModelChange",function(i){return u(d),g(n.typeAccount,i)||(n.typeAccount=i),b(i)}),e(),t(7,"po-combo",5),f("ngModelChange",function(i){return u(d),g(n.contact,i)||(n.contact=i),b(i)}),I(8,_t,7,2,"ng-template",6),e()(),t(9,"div",3)(10,"po-decimal",7),f("ngModelChange",function(i){return u(d),g(n.value,i)||(n.value=i),b(i)}),e(),t(11,"po-datepicker",8),f("ngModelChange",function(i){return u(d),g(n.dateTransfer,i)||(n.dateTransfer=i),b(i)}),e()(),t(12,"div",3)(13,"po-button",9),S("p-click",function(){return u(d),b(n.transfer())}),e()()(),t(14,"po-modal",10)(15,"div",3),l(16,"po-info",11)(17,"po-info",12),e(),l(18,"po-divider"),t(19,"div",3),l(20,"po-info",13)(21,"po-info",14),R(22,"date"),e()()}if(r&2){let d=N(4);m(6),h("ngModel",n.typeAccount),s("p-options",n.typeAccounts),m(),h("ngModel",n.contact),m(3),h("ngModel",n.value),m(),h("ngModel",n.dateTransfer),m(2),s("p-disabled",d.invalid),m(),s("p-primary-action",n.confirmAction)("p-secondary-action",n.cancelAction),m(2),s("p-value",n.typeAccount),m(),s("p-value",n.contact),m(3),s("p-value",n.value),m(),ye("p-value",j(22,12,n.dateTransfer))}},dependencies:[Q,L,D,q,U,de,J,me,te,k,ue,Fe,K,W,se,_e],encapsulation:2})}return a})();var Mt=a=>({"docs-sample-code-tabs":a}),Qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-transfer-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo - Banking Transfer"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-transfer/sample-po-combo-transfer.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-text-center">
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
      p-icon="ph ph-user"
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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-transfer"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,Mt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,Ue],encapsulation:2})}return a})();function kt(a,V){if(a&1&&(X(0),t(1,"div",0),l(2,"po-info",4)(3,"po-info",5)(4,"po-info",6),e(),Z()),a&2){let p=V.ngIf;m(2),s("p-value",p.name),m(),s("p-value",p.nickname),m(),s("p-value",p.email)}}var Ke=(()=>{class a{http;hero$;heroName;constructor(p){this.http=p}get knowMoreLabel(){return this.heroName?"Know more":void 0}knowMore(p){window.open(`http://google.com/search?q=${p}`,"_blank")}onChangeHero(p){this.hero$=this.getHero(p)}getHero(p){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${p}`)}static \u0275fac=function(r){return new(r||a)(_(ee))};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-heroes"]],standalone:!1,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],["name","heroName","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"ngModelChange","p-change","ngModel"],[4,"ngIf"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"po-widget",1),S("p-primary-action",function(){return n.knowMore(n.heroName)}),t(2,"po-combo",2),f("ngModelChange",function(c){return g(n.heroName,c)||(n.heroName=c),c}),S("p-change",function(c){return n.onChangeHero(c)}),e(),I(3,kt,5,3,"ng-container",3),R(4,"async"),e()()),r&2&&(m(),s("p-primary-label",n.knowMoreLabel),m(),h("ngModel",n.heroName),m(),s("ngIf",j(4,3,n.hero$)))},dependencies:[z,L,q,k,W,ne,$],encapsulation:2})}return a})();var Vt=a=>({"docs-sample-code-tabs":a}),Ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-heroes-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo - Heroes"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-heroes/sample-po-combo-heroes.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-row">
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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-heroes"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,Vt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,Ke],encapsulation:2})}return a})();function qt(a,V){if(a&1&&(X(0),t(1,"div",0),l(2,"po-info",5)(3,"po-info",6)(4,"po-info",7),e(),Z()),a&2){let p=V.ngIf;m(2),s("p-value",p.name),m(),s("p-value",p.nickname),m(),s("p-value",p.email)}}var Xe=(()=>{class a{http;formBuilder;form;hero$;constructor(p,r){this.http=p,this.formBuilder=r}ngOnInit(){this.form=this.formBuilder.group({hero:[null,Pe.required]})}get knowMoreLabel(){return this.form.valid?"Know more":void 0}knowMore(){let p=this.form.get("hero").value;window.open(`http://google.com/search?q=${p}`,"_blank")}onChangeHero(p){this.hero$=this.getHero(p)}getHero(p){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${p}`)}static \u0275fac=function(r){return new(r||a)(_(ee),_(ke))};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-heroes-reactive-form"]],standalone:!1,decls:6,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],[3,"formGroup"],["name","heroName","formControlName","hero","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"p-change"],[4,"ngIf"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"po-widget",1),S("p-primary-action",function(){return n.knowMore()}),t(2,"div",2)(3,"po-combo",3),S("p-change",function(c){return n.onChangeHero(c)}),e()(),I(4,qt,5,3,"ng-container",4),R(5,"async"),e()()),r&2&&(m(),s("p-primary-label",n.knowMoreLabel),m(),s("formGroup",n.form),m(2),s("ngIf",j(5,3,n.hero$)))},dependencies:[z,L,D,Me,Te,k,W,ne,$],encapsulation:2})}return a})();var It=a=>({"docs-sample-code-tabs":a}),Ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-heroes-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo - Heroes Reactive Form"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-row">
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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-heroes-reactive-form"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,It,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,Xe],encapsulation:2})}return a})();function Dt(a,V){if(a&1&&(X(0),t(1,"div",0),l(2,"po-info",4)(3,"po-info",5)(4,"po-info",6),e(),Z()),a&2){let p=V.ngIf;m(2),s("p-value",p.name),m(),s("p-value",p.nickname),m(),s("p-value",p.email)}}var $e=(()=>{class a{http;peopleName;people$;constructor(p){this.http=p}onChangePeople(p){this.people$=this.getPeople(p)}getPeople(p){return this.http.get(`https://po-sample-api.onrender.com/v1/people/${p}`)}static \u0275fac=function(r){return new(r||a)(_(ee))};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-infinity-scroll"]],standalone:!1,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6"],["p-filter-service","https://po-sample-api.onrender.com/v1/people","p-label","People","name","people","p-field-label","name","p-field-value","id",3,"ngModelChange","p-change","ngModel","p-infinite-scroll"],[4,"ngIf"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"po-widget",1)(2,"po-combo",2),f("ngModelChange",function(c){return g(n.peopleName,c)||(n.peopleName=c),c}),S("p-change",function(c){return n.onChangePeople(c)}),e(),I(3,Dt,5,3,"ng-container",3),R(4,"async"),e()()),r&2&&(m(2),h("ngModel",n.peopleName),s("p-infinite-scroll",!0),m(),s("ngIf",j(4,3,n.people$)))},dependencies:[z,L,q,k,W,ne,$],encapsulation:2})}return a})();var Bt=a=>({"docs-sample-code-tabs":a}),et=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-infinity-scroll-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo - Inifity Scroll"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-row">
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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-infinity-scroll"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,Bt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,$e],encapsulation:2})}return a})();var Gt=["bookingForm"],At=["datepicker"],tt=(()=>{class a{poNotification;form;datepickerComponent;adults=1;category=!1;checkin;checkout;children=0;hotel;rooms=1;filterParams={};adultsOptions=[{label:"1 Adult",value:1},{label:"2 Adults",value:2},{label:"3 Adults",value:3},{label:"4 Adults",value:4}];childrenOptions=[{label:"No Child",value:0},{label:"1 Child",value:1},{label:"2 Children",value:2}];roomsOptions=[{label:"1 Room",value:1},{label:"2 Rooms",value:2},{label:"3 Rooms",value:3}];constructor(p){this.poNotification=p}booking(){this.poNotification.success("Hotel booked successfully"),this.formReset(),this.datepickerComponent.focus()}onChangeParams(p){this.filterParams=p?{category:"Luxo"}:{},this.hotel=void 0}formReset(){this.form.reset({adults:1,category:!1,children:0,rooms:1})}static \u0275fac=function(r){return new(r||a)(_(oe))};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-hotels"]],viewQuery:function(r,n){if(r&1&&(H(Gt,7),H(At,7)),r&2){let d;G(d=A())&&(n.form=d.first),G(d=A())&&(n.datepickerComponent=d.first)}},standalone:!1,decls:18,vars:14,consts:[["bookingForm","ngForm"],["datepicker",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","checkin","p-label","Check In","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max-date"],["name","checkout","p-label","Check Out","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-min-date"],["name","switch","p-label-off","No, thank you.","p-label-on","Yes, please.","p-label","Only Luxury Category",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","rooms","p-label","Rooms",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","children","p-label","Children",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","adults","p-label","Adults",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","hotel","p-debounce-time","500","p-disabled-init-filter","","p-filter-minlength","1","p-icon","ph ph-magnifying-glass","p-required","","p-field-label","name","p-field-value","value","p-label","Search a hotel","p-sort","","p-filter-service","https://po-sample-api.onrender.com/v1/hotels",1,"po-sm-12",3,"ngModelChange","ngModel","p-filter-params"],["p-label","Booking","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,n){if(r&1){let d=B();t(0,"div",2)(1,"div",3),o(2,"Booking a Hotel"),e()(),t(3,"form",null,0)(5,"div",4)(6,"po-datepicker",5,1),f("ngModelChange",function(i){return u(d),g(n.checkin,i)||(n.checkin=i),b(i)}),e(),t(8,"po-datepicker",6),f("ngModelChange",function(i){return u(d),g(n.checkout,i)||(n.checkout=i),b(i)}),e(),t(9,"po-switch",7),f("ngModelChange",function(i){return u(d),g(n.category,i)||(n.category=i),b(i)}),S("p-change",function(i){return u(d),b(n.onChangeParams(i))}),e()(),t(10,"div",4)(11,"po-select",8),f("ngModelChange",function(i){return u(d),g(n.rooms,i)||(n.rooms=i),b(i)}),e(),t(12,"po-select",9),f("ngModelChange",function(i){return u(d),g(n.children,i)||(n.children=i),b(i)}),e(),t(13,"po-select",10),f("ngModelChange",function(i){return u(d),g(n.adults,i)||(n.adults=i),b(i)}),e()(),t(14,"div",4)(15,"po-combo",11),f("ngModelChange",function(i){return u(d),g(n.hotel,i)||(n.hotel=i),b(i)}),e()(),t(16,"div",4)(17,"po-button",12),S("p-click",function(){return u(d),b(n.booking())}),e()()()}if(r&2){let d=N(4);m(6),h("ngModel",n.checkin),s("p-max-date",n.checkout),m(2),h("ngModel",n.checkout),s("p-min-date",n.checkin),m(),h("ngModel",n.category),m(2),h("ngModel",n.rooms),s("p-options",n.roomsOptions),m(),h("ngModel",n.children),s("p-options",n.childrenOptions),m(),h("ngModel",n.adults),s("p-options",n.adultsOptions),m(2),h("ngModel",n.hotel),s("p-filter-params",n.filterParams),m(2),s("p-disabled",d.invalid)}},dependencies:[Q,L,D,q,U,J,te,k,K,ce],encapsulation:2})}return a})();var jt=a=>({"docs-sample-code-tabs":a}),ot=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-hotels-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo - Booking Hotel"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-hotels/sample-po-combo-hotels.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-text-center">
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
      p-icon="ph ph-magnifying-glass"
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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-hotels"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,jt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,tt],encapsulation:2})}return a})();var nt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-combo-doc"]],standalone:!1,decls:1446,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoComboFilterMode"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoComboOption"],["pan","",1,"docs-api-property-type","PoComboOptionGroup"],["pan","",1,"docs-api-property-type","any>"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","Array<PoComboOption>"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"p",1)(2,"code"),o(3,"import { PoFieldModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),o(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
Ser\xE1 utilizada apenas quando houver servi\xE7o (`),t(436,"code"),o(437,"p-filter-service"),e(),o(438,")."),e()()(),t(439,"tr",15)(440,"td",16)(441,"div",17)(442,"span",18),o(443," p-disabled"),l(444,"br"),e()()(),t(445,"td",19)(446,"code",20),o(447,"boolean"),e()(),t(448,"td",21)(449,"p")(450,"code"),o(451,"false"),e()()(),t(452,"td",22)(453,"em")(454,"strong"),o(455,"(opcional)"),e()(),t(456,"p"),o(457,"Indica que o campo ser\xE1 desabilitado."),e()()(),t(458,"tr",15)(459,"td",16)(460,"div",17)(461,"span",18),o(462," p-disabled-init-filter"),l(463,"br"),e()()(),t(464,"td",19)(465,"code",20),o(466,"boolean"),e()(),t(467,"td",21)(468,"p")(469,"code"),o(470,"false"),e()()(),t(471,"td",22)(472,"em")(473,"strong"),o(474,"(opcional)"),e()(),t(475,"p"),o(476,"Desabilita o filtro inicial no servi\xE7o, que \xE9 executado no primeiro clique no campo."),e()()(),t(477,"tr",15)(478,"td",16)(479,"div",17)(480,"span",18),o(481," p-disabled-tab-filter"),l(482,"br"),e()()(),t(483,"td",19)(484,"code",20),o(485,"boolean"),e()(),t(486,"td",21)(487,"p")(488,"code"),o(489,"false"),e()()(),t(490,"td",22)(491,"em")(492,"strong"),o(493,"(opcional)"),e()(),t(494,"p"),o(495,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB."),e()()(),t(496,"tr",15)(497,"td",16)(498,"div",17)(499,"span",18),o(500," p-emit-object-value"),l(501,"br"),e()()(),t(502,"td",19)(503,"code",20),o(504,"boolean"),e()(),t(505,"td",21)(506,"p")(507,"code"),o(508,"false"),e()()(),t(509,"td",22)(510,"em")(511,"strong"),o(512,"(opcional)"),e()(),t(513,"p"),o(514,"Se verdadeiro, o evento "),t(515,"code"),o(516,"p-change"),e(),o(517," receber\xE1 como argumento o "),t(518,"code"),o(519,"PoComboOption"),e(),o(520," referente \xE0 op\xE7\xE3o selecionada."),e()()(),t(521,"tr",15)(522,"td",16)(523,"div",17)(524,"span",18),o(525," p-field-error-message"),l(526,"br"),e()()(),t(527,"td",19)(528,"code",27),o(529,"string"),e()(),t(530,"td",21),o(531,"-"),e(),t(532,"td",22)(533,"em")(534,"strong"),o(535,"(opcional)"),e()(),t(536,"p"),o(537,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),e(),t(538,"blockquote")(539,"p"),o(540,"Necess\xE1rio que a propriedade "),t(541,"code"),o(542,"p-required"),e(),o(543," esteja habilitada."),e()()()(),t(544,"tr",15)(545,"td",16)(546,"div",17)(547,"span",18),o(548," p-field-label"),l(549,"br"),e()()(),t(550,"td",19)(551,"code",27),o(552,"string"),e()(),t(553,"td",21)(554,"p")(555,"code"),o(556,"label"),e()()(),t(557,"td",22)(558,"em")(559,"strong"),o(560,"(opcional)"),e()(),t(561,"p"),o(562,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(563,"code"),o(564,"p-options"),e(),o(565,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),e(),t(566,"p"),o(567,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),e()()(),t(568,"tr",15)(569,"td",16)(570,"div",17)(571,"span",18),o(572," p-field-value"),l(573,"br"),e()()(),t(574,"td",19)(575,"code",27),o(576,"string"),e()(),t(577,"td",21)(578,"p")(579,"code"),o(580,"value"),e()()(),t(581,"td",22)(582,"em")(583,"strong"),o(584,"(opcional)"),e()(),t(585,"p"),o(586,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(587,"code"),o(588,"p-options"),e(),o(589,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),e(),t(590,"p"),o(591,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),e()()(),t(592,"tr",15)(593,"td",16)(594,"div",17)(595,"span",18),o(596," p-filter-minlength"),l(597,"br"),e()()(),t(598,"td",19)(599,"code",26),o(600,"number"),e()(),t(601,"td",21)(602,"p")(603,"code"),o(604,"0"),e()()(),t(605,"td",22)(606,"em")(607,"strong"),o(608,"(opcional)"),e()(),t(609,"p"),o(610,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o."),e()()(),t(611,"tr",15)(612,"td",16)(613,"div",17)(614,"span",18),o(615," p-filter-mode"),l(616,"br"),e()()(),t(617,"td",19)(618,"code",28),o(619,"PoComboFilterMode"),e()(),t(620,"td",21)(621,"p")(622,"code"),o(623,"startsWith"),e()()(),t(624,"td",22)(625,"em")(626,"strong"),o(627,"(opcional)"),e()(),t(628,"p"),o(629,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),t(630,"code"),o(631,"startsWith"),e(),o(632,", "),t(633,"code"),o(634,"contains"),e(),o(635," ou "),t(636,"code"),o(637,"endsWith"),e(),o(638,"."),e(),t(639,"blockquote")(640,"p"),o(641,"Quando utilizar a propriedade "),t(642,"code"),o(643,"p-filter-service"),e(),o(644," esta propriedade ser\xE1 ignorada."),e()()()(),t(645,"tr",15)(646,"td",16)(647,"div",17)(648,"span",18),o(649," p-filter-params"),l(650,"br"),e()()(),t(651,"td",19)(652,"code",29),o(653,"any"),e()(),t(654,"td",21),o(655,"-"),e(),t(656,"td",22)(657,"em")(658,"strong"),o(659,"(opcional)"),e()(),t(660,"p"),o(661,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),t(662,"em"),o(663,"PoComboFilter"),e(),o(664,"."),e(),t(665,"blockquote")(666,"p"),o(667,"Caso a lista contenha agrupamentos, os mesmos s\xF3 ser\xE3o exibidos se houver no m\xEDnimo uma op\xE7\xE3o que corresponda \xE0 pesquisa."),e()()()(),t(668,"tr",15)(669,"td",16)(670,"div",17)(671,"span",18),o(672," p-filter-service"),l(673,"br"),e()()(),t(674,"td",19)(675,"code",30),o(676,"PoComboFilter "),e(),t(677,"code",27),o(678," string"),e()(),t(679,"td",21),o(680,"-"),e(),t(681,"td",22)(682,"em")(683,"strong"),o(684,"(opcional)"),e()(),t(685,"p"),o(686,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de
itens no componente.
Caso haja a necessidade de customiza\xE7\xE3o, ent\xE3o pode ser informado um servi\xE7o implementando a interface PoComboFilter.`),e(),t(687,"p"),o(688,`Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o API TOTVS e utiliza as propriedades
`),t(689,"code"),o(690,"p-field-label"),e(),o(691," e "),t(692,"code"),o(693,"p-field-value"),e(),o(694," para a constru\xE7\xE3o da lista de itens."),e(),t(695,"p"),o(696,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),e(),t(697,"pre")(698,"code"),o(699,"url + ?filter=Peter"),e()(),t(700,"p"),o(701,"Se for definida a propriedade "),t(702,"code"),o(703,"p-filter-params"),e(),o(704,`, a mesma tamb\xE9m ser\xE1 concatenada. Por exemplo, para o
par\xE2metro `),t(705,"code"),o(706,"{ age: 23 }"),e(),o(707," a URL ficaria:"),e(),t(708,"pre")(709,"code"),o(710,"url + ?page=1&pageSize=20&age=23&filter=Peter"),e()()()(),t(711,"tr",15)(712,"td",16)(713,"div",17)(714,"span",18),o(715," p-help"),l(716,"br"),e()()(),t(717,"td",19)(718,"code",27),o(719,"string"),e()(),t(720,"td",21),o(721,"-"),e(),t(722,"td",22)(723,"em")(724,"strong"),o(725,"(opcional)"),e()(),t(726,"p"),o(727,"Texto de apoio para o campo."),e()()(),t(728,"tr",15)(729,"td",16)(730,"div",17)(731,"span",18),o(732," p-icon"),l(733,"br"),e()()(),t(734,"td",19)(735,"code",27),o(736,"string "),e(),t(737,"code",31),o(738," TemplateRef<void>"),e()(),t(739,"td",21),o(740,"-"),e(),t(741,"td",22)(742,"em")(743,"strong"),o(744,"(opcional)"),e()(),t(745,"p"),o(746,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),e(),t(747,"p"),o(748,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(749,"a",32),o(750,"Biblioteca de \xEDcones"),e(),o(751,". conforme exemplo abaixo:"),e(),t(752,"pre")(753,"code"),o(754,'<po-combo p-icon="ph ph-user" p-label="PO combo"></po-combo>'),e()(),t(755,"p"),o(756,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),t(757,"em"),o(758,"Font Awesome"),e(),o(759,", da seguinte forma:"),e(),t(760,"pre")(761,"code"),o(762,'<po-combo p-icon="fa fa-podcast" p-label="PO combo"></po-combo>'),e()(),t(763,"p"),o(764,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(765,"code"),o(766,"TemplateRef"),e(),o(767,", conforme exemplo abaixo:"),e(),t(768,"pre")(769,"code"),o(770,`<po-combo [p-icon]="template" p-label="combo template ionic"></po-combo>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>`),e()(),t(771,"blockquote")(772,"p"),o(773,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),t(774,"code"),o(775,"font-size: inherit"),e(),o(776," caso o \xEDcone utilizado n\xE3o aplique-o."),e()()()(),t(777,"tr",15)(778,"td",16)(779,"div",17)(780,"span",18),o(781," p-infinite-scroll"),l(782,"br"),e()()(),t(783,"td",19)(784,"code",20),o(785,"boolean"),e()(),t(786,"td",21)(787,"p")(788,"code"),o(789,"false"),e()()(),t(790,"td",22)(791,"em")(792,"strong"),o(793,"(opcional)"),e()(),t(794,"p"),o(795,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),e()()(),t(796,"tr",15)(797,"td",16)(798,"div",17)(799,"span",18),o(800," p-infinite-scroll-distance"),l(801,"br"),e()()(),t(802,"td",19)(803,"code",26),o(804,"number"),e()(),t(805,"td",21),o(806,"-"),e(),t(807,"td",22)(808,"em")(809,"strong"),o(810,"(opcional)"),e()(),t(811,"p"),o(812,"Define o percentual necess\xE1rio para disparar o evento "),t(813,"code"),o(814,"show-more"),e(),o(815,", que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%."),e(),t(816,"p")(817,"strong"),o(818,"Exemplos"),e()(),t(819,"ul")(820,"li"),o(821,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll do combo, o "),t(822,"code"),o(823,"show-more"),e(),o(824," ser\xE1 disparado."),e()()()(),t(825,"tr",15)(826,"td",16)(827,"div",23)(828,"span",24),o(829," (p-input-change)"),l(830,"br"),e()()(),t(831,"td",19)(832,"code",25),o(833,"EventEmitter"),e()(),t(834,"td",21),o(835,"-"),e(),t(836,"td",22)(837,"em")(838,"strong"),o(839,"(opcional)"),e()(),t(840,"p"),o(841,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no Search input. A fun\xE7\xE3o receber\xE1 como argumento o input modificado."),e()()(),t(842,"tr",15)(843,"td",16)(844,"div",17)(845,"span",18),o(846," p-label"),l(847,"br"),e()()(),t(848,"td",19)(849,"code",27),o(850,"string"),e()(),t(851,"td",21),o(852,"-"),e(),t(853,"td",22)(854,"em")(855,"strong"),o(856,"(opcional)"),e()(),t(857,"p"),o(858,"Label no componente."),e()()(),t(859,"tr",15)(860,"td",16)(861,"div",17)(862,"span",18),o(863," p-literals"),l(864,"br"),e()()(),t(865,"td",19)(866,"code",33),o(867,"PoComboLiterals"),e()(),t(868,"td",21),o(869,"-"),e(),t(870,"td",22)(871,"em")(872,"strong"),o(873,"(opcional)"),e()(),t(874,"p"),o(875,"Objeto com as literais usadas no "),t(876,"code"),o(877,"po-combo"),e(),o(878,"."),e(),t(879,"p"),o(880,"Para utilizar basta passar a literal que deseja customizar:"),e(),t(881,"pre")(882,"code"),o(883,`const customLiterals: PoComboLiterals = {
  noData: 'Nenhum valor'
};`),e()(),t(884,"p"),o(885,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),e(),t(886,"pre")(887,"code"),o(888,`<po-combo
  [p-literals]="customLiterals">
</po-combo>`),e()(),t(889,"blockquote")(890,"p"),o(891,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(892,"a",34)(893,"code"),o(894,"PoI18nService"),e()(),o(895," ou do browser."),e()()()(),t(896,"tr",15)(897,"td",16)(898,"div",17)(899,"span",18),o(900," name"),l(901,"br"),e()()(),t(902,"td",19)(903,"code",27),o(904,"string"),e()(),t(905,"td",21),o(906,"-"),e(),t(907,"td",22)(908,"p"),o(909,"Nome do componente."),e()()(),t(910,"tr",15)(911,"td",16)(912,"div",23)(913,"span",24),o(914," (ngModelChange)"),l(915,"br"),e()()(),t(916,"td",19)(917,"code",25),o(918,"EventEmitter"),e()(),t(919,"td",21),o(920,"-"),e(),t(921,"td",22)(922,"em")(923,"strong"),o(924,"(opcional)"),e()(),t(925,"p"),o(926,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),e(),t(927,"p"),o(928,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),t(929,"code"),o(930,"strictTemplates"),e(),o(931,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),e(),t(932,"pre")(933,"code"),o(934,'<po-combo ... [ngModel]="comboModel" (ngModelChange)="comboModel = $event"> </po-combo>'),e()()()(),t(935,"tr",15)(936,"td",16)(937,"div",17)(938,"span",18),o(939," p-optional"),l(940,"br"),e()()(),t(941,"td",19)(942,"code",20),o(943,"boolean"),e()(),t(944,"td",21)(945,"p")(946,"code"),o(947,"false"),e()()(),t(948,"td",22)(949,"em")(950,"strong"),o(951,"(opcional)"),e()(),t(952,"p"),o(953,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),e(),t(954,"blockquote")(955,"p"),o(956,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(957,"ul")(958,"li"),o(959,"O campo conter "),t(960,"code"),o(961,"p-required"),e(),o(962,";"),e(),t(963,"li"),o(964,"N\xE3o possuir "),t(965,"code"),o(966,"p-help"),e(),o(967," e/ou "),t(968,"code"),o(969,"p-label"),e(),o(970,"."),e()()()(),t(971,"tr",15)(972,"td",16)(973,"div",17)(974,"span",18),o(975," p-options"),l(976,"br"),e()()(),t(977,"td",19)(978,"code",35),o(979,"Array<PoComboOption "),e(),t(980,"code",36),o(981," PoComboOptionGroup "),e(),t(982,"code",37),o(983," any>"),e()(),t(984,"td",21),o(985,"-"),e(),t(986,"td",22)(987,"p"),o(988,"Nesta propriedade define a lista de op\xE7\xF5es do "),t(989,"code"),o(990,"po-combo"),e(),o(991,"."),e(),t(992,"blockquote")(993,"p"),o(994,"A lista pode ser definida utilizando um array com o valor representando o "),t(995,"code"),o(996,"value"),e(),o(997," e o "),t(998,"code"),o(999,"label"),e(),o(1e3," das seguintes formas:"),e()(),t(1001,"pre")(1002,"code"),o(1003,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-combo>`),e()(),t(1004,"pre")(1005,"code"),o(1006,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-combo>`),e()(),t(1007,"ul")(1008,"li"),o(1009,"Aconselha-se utilizar valores distintos no "),t(1010,"code"),o(1011,"label"),e(),o(1012," e "),t(1013,"code"),o(1014,"value"),e(),o(1015," dos itens."),e()()()(),t(1016,"tr",15)(1017,"td",16)(1018,"div",17)(1019,"span",18),o(1020," p-placeholder"),l(1021,"br"),e()()(),t(1022,"td",19)(1023,"code",27),o(1024,"string"),e()(),t(1025,"td",21),o(1026,"-"),e(),t(1027,"td",22)(1028,"p"),o(1029,"Mensagem apresentada enquanto o campo estiver vazio."),e()()(),t(1030,"tr",15)(1031,"td",16)(1032,"div",17)(1033,"span",18),o(1034," p-remove-initial-filter"),l(1035,"br"),e()()(),t(1036,"td",19)(1037,"code",20),o(1038,"boolean"),e()(),t(1039,"td",21)(1040,"p")(1041,"code"),o(1042,"false"),e()()(),t(1043,"td",22)(1044,"em")(1045,"strong"),o(1046,"(opcional)"),e()(),t(1047,"p"),o(1048,"Define que o filtro no primeiro clique ser\xE1 removido."),e(),t(1049,"blockquote")(1050,"p"),o(1051,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),e()()()(),t(1052,"tr",15)(1053,"td",16)(1054,"div",17)(1055,"span",18),o(1056," p-required"),l(1057,"br"),e()()(),t(1058,"td",19)(1059,"code",20),o(1060,"boolean"),e()(),t(1061,"td",21)(1062,"p")(1063,"code"),o(1064,"false"),e()()(),t(1065,"td",22)(1066,"em")(1067,"strong"),o(1068,"(opcional)"),e()(),t(1069,"p"),o(1070,"Define que o campo ser\xE1 obrigat\xF3rio."),e()()(),t(1071,"tr",15)(1072,"td",16)(1073,"div",17)(1074,"span",18),o(1075," p-show-required"),l(1076,"br"),e()()(),t(1077,"td",19)(1078,"code",20),o(1079,"boolean"),e()(),t(1080,"td",21),o(1081,"-"),e(),t(1082,"td",22)(1083,"p"),o(1084,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),e(),t(1085,"blockquote")(1086,"p"),o(1087,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(1088,"ul")(1089,"li"),o(1090,"N\xE3o possuir "),t(1091,"code"),o(1092,"p-help"),e(),o(1093," e/ou "),t(1094,"code"),o(1095,"p-label"),e(),o(1096,"."),e()()()(),t(1097,"tr",15)(1098,"td",16)(1099,"div",17)(1100,"span",18),o(1101," p-sort"),l(1102,"br"),e()()(),t(1103,"td",19)(1104,"code",20),o(1105,"boolean"),e()(),t(1106,"td",21),o(1107,"-"),e(),t(1108,"td",22)(1109,"p"),o(1110,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),e()()()(),t(1111,"h3",11),o(1112,"M\xE9todos"),e(),t(1113,"table",38)(1114,"tr",15)(1115,"th",39)(1116,"div",17)(1117,"h4")(1118,"span",18),o(1119," focus "),e()()()()(),t(1120,"tr",22)(1121,"td",22)(1122,"p"),o(1123,"Fun\xE7\xE3o que atribui foco ao componente."),e(),t(1124,"p"),o(1125,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),t(1126,"pre")(1127,"code"),o(1128,`import { PoComboComponent } from '@po-ui/ng-components';

...

@ViewChild(PoComboComponent, { static: true }) combo: PoComboComponent;

focusCombo() {
  this.combo.focus();
}`),e()()()()(),l(1129,"br"),t(1130,"h3"),o(1131,"Interfaces"),e(),t(1132,"h4",40)(1133,"code",5),o(1134,"PoComboFilter"),e()(),t(1135,"div",2)(1136,"p"),o(1137,"Interface para os servi\xE7os que ser\xE3o utilizados no po-combo."),e()(),t(1138,"h4",11),o(1139,"M\xE9todos"),e(),t(1140,"table",38)(1141,"tr",15)(1142,"th",39)(1143,"div",17)(1144,"h4")(1145,"span",18),o(1146," getFilteredData "),e()()()()(),t(1147,"tr",22)(1148,"td",22)(1149,"p"),o(1150,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem a interface PoComboOption,
ser\xE1 informado por parametro o campo, de acordo com o fieldLabel, e o valor a ser pesquisado.`),e()()()(),t(1151,"h5")(1152,"b"),o(1153,"Par\xE2metros"),e()(),t(1154,"table",12)(1155,"tr",13)(1156,"th",14),o(1157,"Nome"),e(),t(1158,"th",14),o(1159,"Tipo"),e(),t(1160,"th",14),o(1161,"Descri\xE7\xE3o"),e()(),t(1162,"tr",15)(1163,"td",16),o(1164," params"),e(),t(1165,"td",19)(1166,"code",41),o(1167," any "),e()(),t(1168,"td",22)(1169,"p"),o(1170,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),e()()(),t(1171,"tr",15)(1172,"td",16),o(1173," filterParams"),e(),t(1174,"td",19)(1175,"code",41),o(1176," any "),e()(),t(1177,"td",22)(1178,"p"),o(1179,"Valor informado atrav\xE9s da propriedade "),t(1180,"code"),o(1181,"p-filter-params"),e(),o(1182,"."),e()()()(),l(1183,"br"),t(1184,"table",38)(1185,"tr",15)(1186,"th",39)(1187,"div",17)(1188,"h4")(1189,"span",18),o(1190," getObjectByValue "),e()()()()(),t(1191,"tr",22)(1192,"td",22)(1193,"p"),o(1194,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m apenas o objeto filtrado que seguem a interface PoComboOption,
ser\xE1 informado por parametro valor a ser pesquisado.`),e()()()(),t(1195,"h5")(1196,"b"),o(1197,"Par\xE2metros"),e()(),t(1198,"table",12)(1199,"tr",13)(1200,"th",14),o(1201,"Nome"),e(),t(1202,"th",14),o(1203,"Tipo"),e(),t(1204,"th",14),o(1205,"Descri\xE7\xE3o"),e()(),t(1206,"tr",15)(1207,"td",16),o(1208," value"),e(),t(1209,"td",19)(1210,"code",27),o(1211," string "),e(),t(1212,"code",26),o(1213," number "),e()(),t(1214,"td",22)(1215,"p"),o(1216,"Valor respons\xE1vel por realizar a busca de um \xFAnico objeto."),e()()(),t(1217,"tr",15)(1218,"td",16),o(1219," filterParams"),e(),t(1220,"td",19)(1221,"code",41),o(1222," any "),e()(),t(1223,"td",22)(1224,"p"),o(1225,"Valor informado atrav\xE9s da propriedade "),t(1226,"code"),o(1227,"p-filter-params"),e(),o(1228,"."),e()()()(),l(1229,"br"),t(1230,"h4",40)(1231,"code",5),o(1232,"PoComboLiterals"),e()(),t(1233,"div",2)(1234,"p"),o(1235,"Interface para defini\xE7\xE3o das literais usadas no "),t(1236,"code"),o(1237,"po-combo"),e(),o(1238,"."),e()(),t(1239,"h4",11),o(1240,"Propriedades"),e(),t(1241,"table",12)(1242,"tr",13)(1243,"th",14),o(1244,"Nome"),e(),t(1245,"th",14),o(1246,"Tipo"),e(),t(1247,"th",14),o(1248,"Descri\xE7\xE3o"),e()(),t(1249,"tr",15)(1250,"td",16)(1251,"div",17)(1252,"span",18),o(1253," chooseOption"),l(1254,"br"),e()()(),t(1255,"td",19)(1256,"code",27),o(1257,"string"),e()(),t(1258,"td",22)(1259,"em")(1260,"strong"),o(1261,"(opcional)"),e()(),t(1262,"p"),o(1263,"Texto exibido quando o combo estiver vazio."),e()()(),t(1264,"tr",15)(1265,"td",16)(1266,"div",17)(1267,"span",18),o(1268," clean"),l(1269,"br"),e()()(),t(1270,"td",19)(1271,"code",27),o(1272,"string"),e()(),t(1273,"td",22)(1274,"em")(1275,"strong"),o(1276,"(opcional)"),e()(),t(1277,"p"),o(1278,"Texto do aria-label do bot\xE3o de limpar"),e()()(),t(1279,"tr",15)(1280,"td",16)(1281,"div",17)(1282,"span",18),o(1283," noData"),l(1284,"br"),e()()(),t(1285,"td",19)(1286,"code",27),o(1287,"string"),e()(),t(1288,"td",22)(1289,"em")(1290,"strong"),o(1291,"(opcional)"),e()(),t(1292,"p"),o(1293,"Texto exibido quando n\xE3o houver itens na lista ou se, a pesquisa do filtro n\xE3o retornar nenhum item."),e()()()(),t(1294,"h4",40)(1295,"code",5),o(1296,"PoComboOptionGroup"),e()(),t(1297,"div",2)(1298,"p"),o(1299,"Interface dos agrupamentos da cole\xE7\xE3o que ser\xE1 exibida no dropdown do "),t(1300,"code"),o(1301,"po-combo"),e(),o(1302,"."),e()(),t(1303,"h4",11),o(1304,"Propriedades"),e(),t(1305,"table",12)(1306,"tr",13)(1307,"th",14),o(1308,"Nome"),e(),t(1309,"th",14),o(1310,"Tipo"),e(),t(1311,"th",14),o(1312,"Descri\xE7\xE3o"),e()(),t(1313,"tr",15)(1314,"td",16)(1315,"div",17)(1316,"span",18),o(1317," label"),l(1318,"br"),e()()(),t(1319,"td",19)(1320,"code",27),o(1321,"string"),e()(),t(1322,"td",22)(1323,"p"),o(1324,"T\xEDtulo para cada grupo de op\xE7\xF5es."),e()()(),t(1325,"tr",15)(1326,"td",16)(1327,"div",17)(1328,"span",18),o(1329," options"),l(1330,"br"),e()()(),t(1331,"td",19)(1332,"code",42),o(1333,"Array<PoComboOption>"),e()(),t(1334,"td",22)(1335,"p"),o(1336,"Lista de itens a serem exibidos."),e()()()(),t(1337,"h4",40)(1338,"code",5),o(1339,"PoComboOption"),e()(),t(1340,"div",2)(1341,"p"),o(1342,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista do "),t(1343,"code"),o(1344,"po-combo"),e(),o(1345,"."),e()(),t(1346,"h4",11),o(1347,"Propriedades"),e(),t(1348,"table",12)(1349,"tr",13)(1350,"th",14),o(1351,"Nome"),e(),t(1352,"th",14),o(1353,"Tipo"),e(),t(1354,"th",14),o(1355,"Descri\xE7\xE3o"),e()(),t(1356,"tr",15)(1357,"td",16)(1358,"div",17)(1359,"span",18),o(1360," label"),l(1361,"br"),e()()(),t(1362,"td",19)(1363,"code",27),o(1364,"string"),e()(),t(1365,"td",22)(1366,"em")(1367,"strong"),o(1368,"(opcional)"),e()(),t(1369,"p"),o(1370,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),e(),t(1371,"blockquote")(1372,"p"),o(1373,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),t(1374,"code"),o(1375,"value"),e(),o(1376,"."),e()()()(),t(1377,"tr",15)(1378,"td",16)(1379,"div",17)(1380,"span",18),o(1381," value"),l(1382,"br"),e()()(),t(1383,"td",19)(1384,"code",27),o(1385,"string "),e(),t(1386,"code",26),o(1387," number"),e()(),t(1388,"td",22)(1389,"p"),o(1390,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),t(1391,"em"),o(1392,"model"),e(),o(1393,"."),e()()()(),t(1394,"h3"),o(1395,"Enums"),e(),t(1396,"h4",4)(1397,"code",5),o(1398,"PoComboFilterMode"),e()(),t(1399,"div",2)(1400,"p"),o(1401,"Define o tipo de busca usado no po-combo."),e()(),t(1402,"h4",11),o(1403,"Propriedades"),e(),t(1404,"table",12)(1405,"tr",13)(1406,"th",14),o(1407,"Nome"),e(),t(1408,"th",14),o(1409,"Descri\xE7\xE3o"),e()(),t(1410,"tr",15)(1411,"td",16)(1412,"div",17)(1413,"span",18),o(1414," startsWith"),l(1415,"br"),e()()(),t(1416,"td",22)(1417,"p"),o(1418,"Verifica se o texto "),t(1419,"em"),o(1420,"inicia"),e(),o(1421," com o valor pesquisado. Caso n\xE3o seja especificado um tipo, ser\xE1 esse o utilizado."),e()()(),t(1422,"tr",15)(1423,"td",16)(1424,"div",17)(1425,"span",18),o(1426," contains"),l(1427,"br"),e()()(),t(1428,"td",22)(1429,"p"),o(1430,"Verifica se o texto "),t(1431,"em"),o(1432,"cont\xE9m"),e(),o(1433," o valor pesquisado."),e()()(),t(1434,"tr",15)(1435,"td",16)(1436,"div",17)(1437,"span",18),o(1438," endsWith"),l(1439,"br"),e()()(),t(1440,"td",22)(1441,"p"),o(1442,"Verifica se o texto "),t(1443,"em"),o(1444,"finaliza"),e(),o(1445," com o valor pesquisado."),e()()()()())},dependencies:[w],encapsulation:2})}return a})();var it=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(_(Oe),_(Ve))};static \u0275cmp=C({type:a,selectors:[["ng-component"]],standalone:!1,decls:13,vars:4,consts:[["p-title"," Combo",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(r,n){r&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),l(3,"sample-po-combo-doc"),e(),t(4,"po-tab",3),l(5,"sample-po-combo-basic-view")(6,"sample-po-combo-labs-view")(7,"sample-po-combo-scheduling-view")(8,"sample-po-combo-transfer-view")(9,"sample-po-combo-heroes-view")(10,"sample-po-combo-heroes-reactive-form-view")(11,"sample-po-combo-infinity-scroll-view")(12,"sample-po-combo-hotels-view"),e()()()),r&2&&(s("p-actions",n.actions),m(2),s("p-active",n.activeTab.includes("doc")),m(2),s("p-hide",n.hidePoWebSample)("p-active",n.activeTab.includes("web")))},dependencies:[We,y,x,Ge,Re,ze,Qe,Ye,Ze,et,ot,nt],encapsulation:2})}return a})();var Qt=[{path:"",component:it}],at=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=re({type:a});static \u0275inj=le({imports:[Se.forChild(Qt),Se]})}return a})();var Go=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=re({type:a});static \u0275inj=le({imports:[Be,at]})}return a})();export{Go as DocPoComboModule};
