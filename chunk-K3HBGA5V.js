import{$ as Y,$a as w,A as ae,Bc as R,Cd as F,Dc as Z,F as b,Fa as D,Fc as $,G as f,Ga as n,Ha as pe,Ia as x,Ka as v,Kb as j,La as S,Lb as A,Ma as g,Mb as H,Na as re,Nb as X,Ob as O,Od as Ce,Pa as _,Pb as z,Sb as de,T as p,Tb as ce,U as q,Ua as N,Vb as ue,Wb as he,Xa as W,Xd as y,Yb as be,Yd as C,Zb as oe,_ as u,a as G,bb as se,dc as fe,ea as ie,gd as ge,h as ne,ha as m,jb as K,ka as P,md as Ee,na as t,oa as e,oc as k,pa as l,pb as me,qd as ye,rd as V,re as M,se as Me,ta as I,ua as h,vc as ve,x as le,y as Q,yd as ee,zc as Se}from"./chunk-TZ5FQAUY.js";var Pe=(()=>{class o{options=[{value:"poMultiselect1",label:"PO Multiselect 1"},{value:"poMultiselect2",label:"PO Multiselect 2"}];static \u0275fac=function(a){return new(a||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-multiselect-basic"]],standalone:!1,decls:1,vars:1,consts:[["name","multiselect","p-label","PO Multiselect",3,"p-options"]],template:function(a,i){a&1&&l(0,"po-multiselect",0),a&2&&m("p-options",i.options)},dependencies:[V],encapsulation:2})}return o})();var ze=o=>({"docs-sample-code-tabs":o}),xe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-multiselect-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Multiselect Basic"),e(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="options"> </po-multiselect>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

import { PoMultiselectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-basic',
  templateUrl: './sample-po-multiselect-basic.component.html',
  standalone: false
})
export class SamplePoMultiselectBasicComponent {
  options: Array<PoMultiselectOption> = [
    { value: 'poMultiselect1', label: 'PO Multiselect 1' },
    { value: 'poMultiselect2', label: 'PO Multiselect 2' }
  ];
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-basic"),e(),l(23,"hr")),a&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),x(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,ze,i.hideSampleCodeTabs)))},dependencies:[w,M,y,C,Pe],encapsulation:2})}return o})();var _e=(()=>{class o{customLiterals;event;filterMode;help;label;literals;multiselect;option;options;placeholder;placeholderSearch;properties;fieldErrorMessage;filterService;fieldLabel;fieldValue;filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];propertiesOptions=[{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"hideSearch",label:"Hide Search"},{value:"autoHeight",label:"Auto Height"},{value:"sort",label:"Sort"},{value:"hideSelectAll",label:"Hide Select All"}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,G({},this.option)],this.option={label:void 0,value:void 0}}changeEvent(s){this.event=s}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}restore(){this.customLiterals=void 0,this.help="",this.filterMode=void 0,this.label=void 0,this.literals="",this.placeholder="",this.placeholderSearch=void 0,this.properties=[],this.fieldErrorMessage="",this.filterService="",this.fieldLabel="",this.fieldValue="",this.option={label:void 0,value:void 0},this.options=[],this.event="",this.multiselect=[]}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-multiselect-labs"]],standalone:!1,decls:36,vars:39,consts:[["fOption","ngForm"],["f","ngForm"],[1,"po-row"],["name","PO Multiselect",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-auto-height","p-disabled","p-field-label","p-field-value","p-filter-service","p-filter-mode","p-help","p-hide-search","p-hide-select-all","p-label","p-literals","p-optional","p-options","p-placeholder","p-placeholder-search","p-required","p-field-error-message","p-show-required","p-sort"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholderSearch","p-clean","","p-label","Placeholder Search",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12",3,"ngModelChange","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","3","p-label","Properties",1,"po-md-7",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","3","p-label","Filter mode",1,"po-md-5",3,"ngModelChange","ngModel","p-disabled","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let c=I();t(0,"div",2)(1,"po-multiselect",3),g("ngModelChange",function(r){return b(c),S(i.multiselect,r)||(i.multiselect=r),f(r)}),h("p-change",function(){return b(c),f(i.changeEvent("p-change"))}),e()(),l(2,"hr"),t(3,"div",2),l(4,"po-info",4)(5,"po-info",5),e(),l(6,"hr"),t(7,"form",null,0)(9,"div",2)(10,"po-input",6),g("ngModelChange",function(r){return b(c),S(i.option.label,r)||(i.option.label=r),f(r)}),e(),t(11,"po-input",7),g("ngModelChange",function(r){return b(c),S(i.option.value,r)||(i.option.value=r),f(r)}),e()(),t(12,"div",2)(13,"po-button",8),h("p-click",function(){return b(c),f(i.addOption())}),e()()(),l(14,"hr"),t(15,"form",null,1)(17,"div",2)(18,"po-input",9),g("ngModelChange",function(r){return b(c),S(i.label,r)||(i.label=r),f(r)}),e(),t(19,"po-input",10),g("ngModelChange",function(r){return b(c),S(i.help,r)||(i.help=r),f(r)}),e()(),t(20,"div",2)(21,"po-input",11),g("ngModelChange",function(r){return b(c),S(i.placeholder,r)||(i.placeholder=r),f(r)}),e(),t(22,"po-input",12),g("ngModelChange",function(r){return b(c),S(i.placeholderSearch,r)||(i.placeholderSearch=r),f(r)}),e()(),t(23,"div",2)(24,"po-input",13),g("ngModelChange",function(r){return b(c),S(i.literals,r)||(i.literals=r),f(r)}),h("p-change",function(){return b(c),f(i.changeLiterals())}),e(),t(25,"po-input",14),g("ngModelChange",function(r){return b(c),S(i.fieldErrorMessage,r)||(i.fieldErrorMessage=r),f(r)}),e()(),t(26,"div",2)(27,"po-input",15),g("ngModelChange",function(r){return b(c),S(i.filterService,r)||(i.filterService=r),f(r)}),e()(),t(28,"div",2)(29,"po-input",16),g("ngModelChange",function(r){return b(c),S(i.fieldValue,r)||(i.fieldValue=r),f(r)}),e(),t(30,"po-input",17),g("ngModelChange",function(r){return b(c),S(i.fieldLabel,r)||(i.fieldLabel=r),f(r)}),e()(),t(31,"div",2)(32,"po-checkbox-group",18),g("ngModelChange",function(r){return b(c),S(i.properties,r)||(i.properties=r),f(r)}),e(),t(33,"po-radio-group",19),g("ngModelChange",function(r){return b(c),S(i.filterMode,r)||(i.filterMode=r),f(r)}),e()(),t(34,"div",2)(35,"po-button",20),h("p-click",function(){return b(c),f(i.restore())}),e()()()}if(a&2){let c=D(8);p(),v("ngModel",i.multiselect),m("p-auto-height",i.properties.includes("autoHeight"))("p-disabled",i.properties.includes("disabled"))("p-field-label",i.fieldLabel)("p-field-value",i.fieldValue)("p-filter-service",i.filterService)("p-filter-mode",i.filterMode)("p-help",i.help)("p-hide-search",i.properties.includes("hideSearch"))("p-hide-select-all",i.properties.includes("hideSelectAll"))("p-label",i.label)("p-literals",i.customLiterals)("p-optional",i.properties.includes("optional"))("p-options",i.options)("p-placeholder",i.placeholder)("p-placeholder-search",i.placeholderSearch)("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-sort",i.properties.includes("sort")),p(3),m("p-value",i.multiselect),p(),m("p-value",i.event),p(5),v("ngModel",i.option.label),p(),v("ngModel",i.option.value),p(2),m("p-disabled",c.form.invalid),p(5),v("ngModel",i.label),p(),v("ngModel",i.help),p(2),v("ngModel",i.placeholder),p(),v("ngModel",i.placeholderSearch),p(2),v("ngModel",i.literals),p(),v("ngModel",i.fieldErrorMessage),p(2),v("ngModel",i.filterService),p(2),v("ngModel",i.fieldValue),p(),v("ngModel",i.fieldLabel),p(2),v("ngModel",i.properties),m("p-options",i.propertiesOptions),p(),v("ngModel",i.filterMode),m("p-disabled",i.properties.includes("hideSearch"))("p-options",i.filterModeOptions)}},dependencies:[z,A,H,O,X,k,Se,R,Ee,V,F],encapsulation:2})}return o})();var Je=o=>({"docs-sample-code-tabs":o}),we=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-multiselect-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Multiselect Labs"),e(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-multiselect
    class="po-md-12"
    name="PO Multiselect"
    [(ngModel)]="multiselect"
    [p-auto-height]="properties.includes('autoHeight')"
    [p-disabled]="properties.includes('disabled')"
    [p-field-label]="fieldLabel"
    [p-field-value]="fieldValue"
    [p-filter-service]="filterService"
    [p-filter-mode]="filterMode"
    [p-help]="help"
    [p-hide-search]="properties.includes('hideSearch')"
    [p-hide-select-all]="properties.includes('hideSelectAll')"
    [p-label]="label"
    [p-literals]="customLiterals"
    [p-optional]="properties.includes('optional')"
    [p-options]="options"
    [p-placeholder]="placeholder"
    [p-placeholder-search]="placeholderSearch"
    [p-required]="properties.includes('required')"
    [p-field-error-message]="fieldErrorMessage"
    [p-show-required]="properties.includes('showRequired')"
    [p-sort]="properties.includes('sort')"
    (p-change)="changeEvent('p-change')"
  >
  </po-multiselect>
</div>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="multiselect"> </po-info>

  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<hr />

<form #fOption="ngForm">
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
      name="placeholderSearch"
      [(ngModel)]="placeholderSearch"
      p-clean
      p-label="Placeholder Search"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

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
    <po-input
      class="po-md-12"
      name="filterService"
      [(ngModel)]="filterService"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Filter Service"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="fieldValue" [(ngModel)]="fieldValue" p-clean p-label="Field Value"> </po-input>

    <po-input class="po-md-6" name="fieldLabel" [(ngModel)]="fieldLabel" p-clean p-label="Field Label"> </po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-7"
      name="properties"
      [(ngModel)]="properties"
      p-columns="3"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-5"
      name="filterMode"
      [(ngModel)]="filterMode"
      p-columns="3"
      p-label="Filter mode"
      [p-disabled]="properties.includes('hideSearch')"
      [p-options]="filterModeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoMultiselectLiterals,
  PoMultiselectOption,
  PoRadioGroupOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-labs',
  templateUrl: './sample-po-multiselect-labs.component.html',
  standalone: false
})
export class SamplePoMultiselectLabsComponent implements OnInit {
  customLiterals: PoMultiselectLiterals;
  event: string;
  filterMode: string;
  help: string;
  label: string;
  literals: string;
  multiselect: Array<string>;
  option: PoMultiselectOption;
  options: Array<PoMultiselectOption>;
  placeholder: string;
  placeholderSearch: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  filterService: string;
  fieldLabel: string;
  fieldValue: string;

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: 'startsWith' },
    { label: 'Contains', value: 'contains' },
    { label: 'Ends With', value: 'endsWith' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'hideSearch', label: 'Hide Search' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'sort', label: 'Sort' },
    { value: 'hideSelectAll', label: 'Hide Select All' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = [...this.options, { ...this.option }];
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

  restore() {
    this.customLiterals = undefined;
    this.help = '';
    this.filterMode = undefined;
    this.label = undefined;
    this.literals = '';
    this.placeholder = '';
    this.placeholderSearch = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.filterService = '';
    this.fieldLabel = '';
    this.fieldValue = '';

    this.option = { label: undefined, value: undefined };
    this.options = [];

    this.event = '';
    this.multiselect = [];
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-labs"),e(),l(23,"hr")),a&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),x(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Je,i.hideSampleCodeTabs)))},dependencies:[w,M,y,C,_e],encapsulation:2})}return o})();var Ve=(()=>{class o{days;employeesVacations=[];finalPeriod;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];ngOnInit(){this.clean()}clean(){this.days=20,this.initialPeriod=void 0,this.finalPeriod=void 0,this.employeesVacations=[]}updateNameEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.employeesVacations.includes(s.value)).map(s=>s.label).join(", ")}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-multiselect-vacation"]],standalone:!1,decls:26,vars:20,consts:[["f","ngForm"],["modalEmployeesVacation",""],[1,"po-row"],["name","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","days","p-help","Maximum of days that employs can choose","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","employeesVacations","p-label","Select your employees for collective vacations","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,i){if(a&1){let c=I();t(0,"form",null,0)(2,"h3"),n(3,"Collective vacations"),e(),l(4,"hr"),t(5,"div",2)(6,"po-datepicker",3),g("ngModelChange",function(r){return b(c),S(i.initialPeriod,r)||(i.initialPeriod=r),f(r)}),e(),t(7,"po-datepicker",4),g("ngModelChange",function(r){return b(c),S(i.finalPeriod,r)||(i.finalPeriod=r),f(r)}),e()(),t(8,"div",2)(9,"po-radio-group",5),g("ngModelChange",function(r){return b(c),S(i.days,r)||(i.days=r),f(r)}),e()(),t(10,"div",2)(11,"po-multiselect",6),g("ngModelChange",function(r){return b(c),S(i.employeesVacations,r)||(i.employeesVacations=r),f(r)}),e()(),t(12,"div",2)(13,"po-button",7),h("p-click",function(){b(c);let r=D(16);return i.updateNameEmployeesVacations(),f(r.open())}),e(),t(14,"po-button",8),h("p-click",function(){return b(c),f(i.clean())}),e()()(),t(15,"po-modal",9,1)(17,"div",2),l(18,"po-info",10),N(19,"date"),l(20,"po-info",11),N(21,"date"),l(22,"po-info",12),e(),l(23,"hr"),t(24,"div",2),l(25,"po-info",13),e()()}if(a&2){let c=D(1);p(6),v("ngModel",i.initialPeriod),p(),v("ngModel",i.finalPeriod),m("p-min-date",i.initialPeriod),p(2),v("ngModel",i.days),m("p-options",i.daysOptions),p(2),v("ngModel",i.employeesVacations),m("p-options",i.employees),p(2),m("p-disabled",c.form.invalid),p(5),m("p-value",W(19,12,i.initialPeriod,"longDate","+0000")),p(2),m("p-value",W(21,16,i.finalPeriod,"longDate","+0000")),p(2),m("p-value",i.days),p(3),m("p-value",i.nameEmployeesVacations)}},dependencies:[z,A,H,O,X,k,R,Z,V,F,$,K],encapsulation:2})}return o})();var Qe=o=>({"docs-sample-code-tabs":o}),Te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-multiselect-vacation-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Multiselect - Vacation"),e(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html"),e(),t(13,"pre",7),n(14,`<form #f="ngForm">
  <h3>Collective vacations</h3>

  <hr />

  <div class="po-row">
    <po-datepicker class="po-md-6" name="initialPeriod" [(ngModel)]="initialPeriod" p-label="Initial period" p-required>
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="finalPeriod"
      [(ngModel)]="finalPeriod"
      p-label="Final period"
      p-required
      [p-min-date]="initialPeriod"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-12"
      name="days"
      [(ngModel)]="days"
      p-help="Maximum of days that employs can choose"
      p-label="How many days of vacation the employees will be able to have?"
      p-required
      [p-options]="daysOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-multiselect
      class="po-md-12"
      name="employeesVacations"
      [(ngModel)]="employeesVacations"
      p-label="Select your employees for collective vacations"
      [p-options]="employees"
      p-required
    >
    </po-multiselect>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-offset-md-5 po-offset-lg-5 po-offset-xl-5"
      name="Approve Vacations"
      p-label="Approve Vacations"
      [p-disabled]="f.form.invalid"
      (p-click)="updateNameEmployeesVacations(); modalEmployeesVacation.open()"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Clean" (p-click)="clean()"> </po-button>
  </div>
</form>

<po-modal #modalEmployeesVacation p-title="Collective Vacation">
  <div class="po-row">
    <po-info class="po-md-5" p-label="Initial period" [p-value]="initialPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-5" p-label="Final period" [p-value]="finalPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-2" p-label="Days" [p-value]="days"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation',
  templateUrl: './sample-po-multiselect-vacation.component.html',
  standalone: false
})
export class SamplePoMultiselectVacationComponent implements OnInit {
  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  initialPeriod: Date;
  nameEmployeesVacations: string;

  public readonly employees: Array<PoMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<PoRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  ngOnInit() {
    this.clean();
  }

  clean() {
    this.days = 20;
    this.initialPeriod = undefined;
    this.finalPeriod = undefined;
    this.employeesVacations = [];
  }

  updateNameEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: PoMultiselectOption) => this.employeesVacations.includes(<string>employee.value))
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-vacation"),e(),l(23,"hr")),a&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),x(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Qe,i.hideSampleCodeTabs)))},dependencies:[w,M,y,C,Ve],encapsulation:2})}return o})();var Ae=(()=>{class o{formBuilder;days;employeesVacations=[];finalPeriod;formCollectiveVacations;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"112333",label:"Jane"},{value:"989898",label:"John"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];constructor(s){this.formBuilder=s}ngOnInit(){this.formCollectiveVacations=this.formBuilder.group({initialPeriod:[null,j.required],finalPeriod:[null,j.required],days:[null,j.required],employeesVacations:[null,j.required]}),this.clean()}clean(){this.formCollectiveVacations.patchValue({days:20,initialPeriod:void 0,finalPeriod:void 0,employeesVacations:void 0})}getRangeFinalPeriod(){return this.formCollectiveVacations.get("initialPeriod").value}updateEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.formCollectiveVacations.get("employeesVacations").value.includes(s.value)).map(s=>s.label).join(", "),this.initialPeriod=this.formCollectiveVacations.get("initialPeriod").value,this.finalPeriod=this.formCollectiveVacations.get("finalPeriod").value,this.days=this.formCollectiveVacations.get("days").value}static \u0275fac=function(a){return new(a||o)(q(ue))};static \u0275cmp=u({type:o,selectors:[["sample-po-multiselect-vacation-reactive-form"]],standalone:!1,decls:24,vars:20,consts:[["modalEmployeesVacation",""],[3,"formGroup"],[1,"po-row"],["name","initialPeriod","formControlName","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6"],["name","finalPeriod","formControlName","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"p-min-date"],["name","employeesVacations","formControlName","employeesVacations","p-label","Select your employees for collective vacations",1,"po-md-4",3,"p-auto-height","p-options","p-required"],["name","days","formControlName","days","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-8",3,"p-options","p-columns"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,i){if(a&1){let c=I();t(0,"form",1)(1,"h3"),n(2,"Collective vacations"),e(),l(3,"hr"),t(4,"div",2),l(5,"po-datepicker",3)(6,"po-datepicker",4),e(),t(7,"div",2),l(8,"po-multiselect",5)(9,"po-radio-group",6),e(),t(10,"div",2)(11,"po-button",7),h("p-click",function(){b(c);let r=D(14);return i.updateEmployeesVacations(),f(r.open())}),e(),t(12,"po-button",8),h("p-click",function(){return b(c),f(i.clean())}),e()()(),t(13,"po-modal",9,0)(15,"div",2),l(16,"po-info",10),N(17,"date"),l(18,"po-info",11),N(19,"date"),l(20,"po-info",12),e(),l(21,"hr"),t(22,"div",2),l(23,"po-info",13),e()()}a&2&&(m("formGroup",i.formCollectiveVacations),p(6),m("p-min-date",i.getRangeFinalPeriod()),p(2),m("p-auto-height",!0)("p-options",i.employees)("p-required",!0),p(),m("p-options",i.daysOptions)("p-columns",3),p(2),m("p-disabled",i.formCollectiveVacations.invalid),p(5),m("p-value",W(17,12,i.initialPeriod,"longDate","+0000")),p(2),m("p-value",W(19,16,i.finalPeriod,"longDate","+0000")),p(2),m("p-value",i.days),p(3),m("p-value",i.nameEmployeesVacations))},dependencies:[z,A,H,de,ce,k,R,Z,V,F,$,K],encapsulation:2})}return o})();var Xe=o=>({"docs-sample-code-tabs":o}),Oe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-multiselect-vacation-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Multiselect - Vacation Reactive Form"),e(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html"),e(),t(13,"pre",7),n(14,`<form [formGroup]="formCollectiveVacations">
  <h3>Collective vacations</h3>

  <hr />

  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      name="initialPeriod"
      formControlName="initialPeriod"
      p-label="Initial period"
      p-required
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="finalPeriod"
      formControlName="finalPeriod"
      p-label="Final period"
      p-required
      [p-min-date]="getRangeFinalPeriod()"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-multiselect
      class="po-md-4"
      name="employeesVacations"
      formControlName="employeesVacations"
      p-label="Select your employees for collective vacations"
      [p-auto-height]="true"
      [p-options]="employees"
      [p-required]="true"
    >
    </po-multiselect>

    <po-radio-group
      class="po-lg-8"
      name="days"
      formControlName="days"
      p-label="How many days of vacation the employees will be able to have?"
      p-required
      [p-options]="daysOptions"
      [p-columns]="3"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-offset-md-5 po-offset-lg-5 po-offset-xl-5"
      name="Approve Vacations"
      p-label="Approve Vacations"
      [p-disabled]="formCollectiveVacations.invalid"
      (p-click)="updateEmployeesVacations(); modalEmployeesVacation.open()"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Clean" (p-click)="clean()"> </po-button>
  </div>
</form>

<po-modal #modalEmployeesVacation p-title="Collective Vacation">
  <div class="po-row">
    <po-info class="po-md-5" p-label="Initial period" [p-value]="initialPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-5" p-label="Final period" [p-value]="finalPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-2" p-label="Days" [p-value]="days"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation-reactive-form',
  templateUrl: './sample-po-multiselect-vacation-reactive-form.component.html',
  standalone: false
})
export class SamplePoMultiselectVacationReactiveFormComponent implements OnInit {
  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  formCollectiveVacations: UntypedFormGroup;
  initialPeriod: Date;
  nameEmployeesVacations: string;

  public readonly employees: Array<PoMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '112333', label: 'Jane' },
    { value: '989898', label: 'John' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<PoRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.formCollectiveVacations = this.formBuilder.group({
      initialPeriod: [null, Validators.required],
      finalPeriod: [null, Validators.required],
      days: [null, Validators.required],
      employeesVacations: [null, Validators.required]
    });

    this.clean();
  }

  clean() {
    this.formCollectiveVacations.patchValue({
      days: 20,
      initialPeriod: undefined,
      finalPeriod: undefined,
      employeesVacations: undefined
    });
  }

  getRangeFinalPeriod() {
    return this.formCollectiveVacations.get('initialPeriod').value;
  }

  updateEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: PoMultiselectOption) =>
        this.formCollectiveVacations.get('employeesVacations').value.includes(<string>employee.value)
      )
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
    this.initialPeriod = this.formCollectiveVacations.get('initialPeriod').value;
    this.finalPeriod = this.formCollectiveVacations.get('finalPeriod').value;
    this.days = this.formCollectiveVacations.get('days').value;
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-vacation-reactive-form"),e(),l(23,"hr")),a&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),x(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Xe,i.hideSampleCodeTabs)))},dependencies:[w,M,y,C,Ae],encapsulation:2})}return o})();function $e(o,U){o&1&&l(0,"po-tag",14),o&2&&m("p-icon",!0)}function et(o,U){o&1&&l(0,"po-tag",15),o&2&&m("p-icon",!0)}function tt(o,U){o&1&&l(0,"po-tag",16),o&2&&m("p-icon",!0)}function nt(o,U){if(o&1&&(t(0,"div",0)(1,"div",7)(2,"div",8),n(3),e()(),t(4,"div",9)(5,"div",10),ie(6,$e,1,1,"po-tag",11)(7,et,1,1,"po-tag",12)(8,tt,1,1,"po-tag",13),e()()()),o&2){let s=U.$implicit;p(3),pe(s.label),p(3),m("ngIf",s.admin),p(),m("ngIf",s.access),p(),m("ngIf",!s.admin&&!s.access)}}var Le=(()=>{class o{employee;typeAccess;typeAccessMap={admin:{admin:!0,access:!0},access:{admin:!1,access:!0},noAccess:{admin:!1,access:!1}};options=[{value:"Anna M.",label:"Anna M.",admin:!1,access:!0},{value:"Jhon T.",label:"Jhon T.",admin:!0,access:!0},{value:"Marie J.",label:"Marie J.",admin:!1,access:!1}];employees=[{label:"Anna M.",value:"Anna M."},{label:"Jhon T.",value:"Jhon T."},{label:"Marie J.",value:"Marie J."}];typeAccessValue=[{label:"Admin e acesso padr\xE3o",value:"admin"},{label:"Acesso padr\xE3o",value:"access"},{label:"Sem acesso",value:"noAccess"}];changeAccess(){let s=[...this.options].map(a=>a.value===this.employee?G({value:a.value,label:a.label},this.typeAccessMap[this.typeAccess]):a);this.options=s,this.employee=void 0,this.typeAccess=void 0}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-multiselect-template"]],standalone:!1,decls:7,vars:7,consts:[[1,"po-row"],["name","employee","p-label","Employee",1,"po-md-5",3,"ngModelChange","p-options","ngModel"],["name","typeOfAccess","p-label","Type of access",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-md-1","containerButton"],["p-label","Alterar acesso",3,"p-click","p-disabled"],["name","multiselect","p-label","PO Multiselect",1,"po-md-12",3,"p-options","p-hide-select-all"],["p-multiselect-option-template",""],[1,"po-md-2","containerFlex"],[1,"po-font-text-large-bold"],[1,"po-md-10"],[1,"containerFlexTag"],["p-value","Admin","p-type","success",3,"p-icon",4,"ngIf"],["p-value","Normal","p-type","info",3,"p-icon",4,"ngIf"],["p-value","Sem acesso","p-type","danger",3,"p-icon",4,"ngIf"],["p-value","Admin","p-type","success",3,"p-icon"],["p-value","Normal","p-type","info",3,"p-icon"],["p-value","Sem acesso","p-type","danger",3,"p-icon"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"po-select",1),g("ngModelChange",function(d){return S(i.employee,d)||(i.employee=d),d}),e(),t(2,"po-select",2),g("ngModelChange",function(d){return S(i.typeAccess,d)||(i.typeAccess=d),d}),e(),t(3,"div",3)(4,"po-button",4),h("p-click",function(){return i.changeAccess()}),e()(),t(5,"po-multiselect",5),ie(6,nt,9,4,"ng-template",6),e()()),a&2&&(p(),m("p-options",i.employees),v("ngModel",i.employee),p(),m("p-options",i.typeAccessValue),v("ngModel",i.typeAccess),p(2),m("p-disabled",!i.employee||!i.typeAccess),p(),m("p-options",i.options)("p-hide-select-all",!0))},dependencies:[se,A,O,k,ye,V,ee,fe],styles:[".containerFlex[_ngcontent-%COMP%]{display:flex;align-items:center}.containerFlexTag[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column}.containerButton[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:8px}"]})}return o})();var ot=o=>({"docs-sample-code-tabs":o}),ke=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-multiselect-template-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Multiselect - Template"),e(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-multiselect-template/sample-po-multiselect-template.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-select class="po-md-5" name="employee" p-label="Employee" [p-options]="employees" [(ngModel)]="employee">
  </po-select>

  <po-select
    class="po-md-6"
    name="typeOfAccess"
    p-label="Type of access"
    [p-options]="typeAccessValue"
    [(ngModel)]="typeAccess"
  >
  </po-select>

  <div class="po-md-1 containerButton">
    <po-button p-label="Alterar acesso" [p-disabled]="!employee || !typeAccess" (p-click)="changeAccess()"> </po-button>
  </div>

  <po-multiselect
    class="po-md-12"
    name="multiselect"
    p-label="PO Multiselect"
    [p-options]="options"
    [p-hide-select-all]="true"
  >
    <ng-template p-multiselect-option-template let-option>
      <div class="po-row">
        <div class="po-md-2 containerFlex">
          <div class="po-font-text-large-bold">{ { option.label }}</div>
        </div>

        <div class="po-md-10">
          <div class="containerFlexTag">
            <po-tag *ngIf="option.admin" p-value="Admin" p-type="success" [p-icon]="true"> </po-tag>
            <po-tag *ngIf="option.access" p-value="Normal" p-type="info" [p-icon]="true"> </po-tag>
            <po-tag *ngIf="!option.admin && !option.access" p-value="Sem acesso" p-type="danger" [p-icon]="true">
            </po-tag>
          </div>
        </div>
      </div>
    </ng-template>
  </po-multiselect>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-multiselect-template/sample-po-multiselect-template.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';
import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-template',
  templateUrl: './sample-po-multiselect-template.component.html',
  styles: [
    \`
      .containerFlex {
        display: flex;
        align-items: center;
      }

      .containerFlexTag {
        display: flex;
        gap: 2px;
        flex-direction: column;
      }

      .containerButton {
        display: flex;
        align-items: flex-end;
        padding: 8px;
      }
    \`
  ],
  standalone: false
})
export class SamplePoMultiselectTemplateComponent {
  employee;
  typeAccess;
  typeAccessMap = {
    admin: { admin: true, access: true },
    access: { admin: false, access: true },
    noAccess: { admin: false, access: false }
  };

  options = [
    { value: 'Anna M.', label: 'Anna M.', admin: false, access: true },
    { value: 'Jhon T.', label: 'Jhon T.', admin: true, access: true },
    { value: 'Marie J.', label: 'Marie J.', admin: false, access: false }
  ];

  readonly employees: Array<PoSelectOption> = [
    { label: 'Anna M.', value: 'Anna M.' },
    { label: 'Jhon T.', value: 'Jhon T.' },
    { label: 'Marie J.', value: 'Marie J.' }
  ];

  readonly typeAccessValue: Array<PoSelectOption> = [
    { label: 'Admin e acesso padr\xE3o', value: 'admin' },
    { label: 'Acesso padr\xE3o', value: 'access' },
    { label: 'Sem acesso', value: 'noAccess' }
  ];

  changeAccess() {
    const newOptions = [...this.options].map(opt => {
      if (opt.value === this.employee) {
        return {
          value: opt.value,
          label: opt.label,
          ...this.typeAccessMap[this.typeAccess]
        };
      }
      return opt;
    });

    this.options = newOptions;
    this.employee = undefined;
    this.typeAccess = undefined;
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-template"),e(),l(23,"hr")),a&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),x(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,ot,i.hideSampleCodeTabs)))},dependencies:[w,M,y,C,Le],encapsulation:2})}return o})();var te=(()=>{class o{http;constructor(s){this.http=s}getFilteredData({value:s}){let a={filter:s};return this.http.get("https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10",{params:a}).pipe(ne(i=>i.items))}getObjectsByValues(s){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/?value=${s.toString()}`).pipe(ne(a=>a.items))}static \u0275fac=function(a){return new(a||o)(ae(me))};static \u0275prov=le({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Fe=(()=>{class o{samplePoMultiselectHeroesService;debounce=500;filterService;heroes;multiselect=["1495831666871","1405833068599"];columns=[{property:"value",label:"id"},{property:"label",label:"Name",type:"link",action:s=>{this.openLink(s)}}];constructor(s){this.samplePoMultiselectHeroesService=s,this.filterService=s}changeOptions(s){this.heroes=[...s]}openLink(s){window.open(`http://google.com/search?q=${s}`,"_blank")}static \u0275fac=function(a){return new(a||o)(q(te))};static \u0275cmp=u({type:o,selectors:[["sample-po-multiselect-heroes"]],standalone:!1,features:[re([te])],decls:4,vars:9,consts:[[1,"po-row"],["name","multiselect","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-filter-service","p-debounce-time"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-hide-table-search"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"po-multiselect",1),g("ngModelChange",function(d){return S(i.multiselect,d)||(i.multiselect=d),d}),h("p-change",function(d){return i.changeOptions(d)}),e(),t(2,"po-container",2),l(3,"po-table",3),e()()),a&2&&(p(),v("ngModel",i.multiselect),m("p-filter-service",i.filterService)("p-debounce-time",i.debounce),p(2),m("p-columns",i.columns)("p-items",i.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-hide-table-search",!1))},dependencies:[A,O,ve,V,ge],encapsulation:2})}return o})();var rt=o=>({"docs-sample-code-tabs":o}),qe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-multiselect-heroes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Multiselect - Heroes - using API"),e(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-multiselect
    class="po-md-6"
    name="multiselect"
    [(ngModel)]="multiselect"
    p-label="Search a Hero"
    [p-filter-service]="filterService"
    [p-debounce-time]="debounce"
    (p-change)="changeOptions($event)"
  >
  </po-multiselect>

  <po-container class="po-md-6 po-mt-4">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-hide-table-search]="false"
    >
    </po-table>
  </po-container>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';
import { PoTableColumn, PoMultiselectFilter } from '@po-ui/ng-components';

import { SamplePoMultiselectHeroesService } from './sample-po-multiselect-heroes.service';

@Component({
  selector: 'sample-po-multiselect-heroes',
  templateUrl: './sample-po-multiselect-heroes.component.html',
  providers: [SamplePoMultiselectHeroesService],
  standalone: false
})
export class SamplePoMultiselectHeroesComponent {
  debounce = 500;
  filterService: PoMultiselectFilter;
  heroes: Array<any>;
  multiselect: Array<string> = ['1495831666871', '1405833068599'];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name',
      type: 'link',
      action: value => {
        this.openLink(value);
      }
    }
  ];

  constructor(public samplePoMultiselectHeroesService: SamplePoMultiselectHeroesService) {
    this.filterService = samplePoMultiselectHeroesService;
  }

  changeOptions(event): void {
    this.heroes = [...event];
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),e(),t(21,"label",6),n(22,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.service.ts"),e(),t(23,"pre",9),n(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoMultiselectFilter, PoMultiselectOption } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoMultiselectHeroesService implements PoMultiselectFilter {
  constructor(private http: HttpClient) {}

  getFilteredData({ value }): Observable<Array<PoMultiselectOption>> {
    const params = { filter: value };

    return this.http
      .get(\`https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10\`, { params })
      .pipe(map((response: { items: Array<PoMultiselectOption> }) => response.items));
  }

  getObjectsByValues(value: Array<string | number>): Observable<Array<PoMultiselectOption>> {
    return this.http
      .get(\`https://po-sample-api.onrender.com/v1/heroes/?value=\${value.toString()}\`)
      .pipe(map((response: { items: Array<PoMultiselectOption> }) => response.items));
  }
}
`),e()()()()(),t(25,"div",10),l(26,"sample-po-multiselect-heroes"),e(),l(27,"hr")),a&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),x(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,rt,i.hideSampleCodeTabs)))},dependencies:[w,M,y,C,Fe],encapsulation:2})}return o})();var De=(()=>{class o{company;fieldLabel="razaoSocial";fieldValue="cnpj";options=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];optionsSelect=[{label:"codigo",value:"codigo"},{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"label",value:"label"},{label:"cnpj",value:"cnpj"},{label:"value",value:"value"},{label:"id",value:"id"},{label:"email",value:"email"},{label:"data",value:"data"},{label:"origem",value:"origem"}];onChange(s){this.company=void 0}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-multiselect-any-array"]],standalone:!1,decls:9,vars:9,consts:[[1,"po-row"],[1,"po-md-6"],["name","label","p-label","Select Field Label",3,"ngModelChange","p-change","p-options","ngModel"],["name","label","p-label","Select Field Value",3,"ngModelChange","p-change","p-options","ngModel"],["name","multiselect","p-label","Select your Company",1,"po-md-12",3,"ngModelChange","p-options","p-field-value","p-field-label","ngModel"],["p-label","Model",1,"po-md-12",3,"p-value"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"div",1)(2,"po-select",2),g("ngModelChange",function(d){return S(i.fieldLabel,d)||(i.fieldLabel=d),d}),h("p-change",function(d){return i.onChange(d)}),e(),t(3,"po-select",3),g("ngModelChange",function(d){return S(i.fieldValue,d)||(i.fieldValue=d),d}),h("p-change",function(d){return i.onChange(d)}),e()(),t(4,"div",1)(5,"div",0)(6,"po-multiselect",4),g("ngModelChange",function(d){return S(i.company,d)||(i.company=d),d}),e()(),t(7,"div",0),l(8,"po-info",5),e()()()),a&2&&(p(2),m("p-options",i.optionsSelect),v("ngModel",i.fieldLabel),p(),m("p-options",i.optionsSelect),v("ngModel",i.fieldValue),p(3),m("p-options",i.options)("p-field-value",i.fieldValue)("p-field-label",i.fieldLabel),v("ngModel",i.company),p(2),m("p-value",i.company))},dependencies:[A,O,V,ee,F],encapsulation:2})}return o})();var dt=o=>({"docs-sample-code-tabs":o}),Be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-multiselect-any-array-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Multiselect - Array Any"),e(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <div class="po-md-6">
    <po-select
      name="label"
      p-label="Select Field Label"
      [p-options]="optionsSelect"
      [(ngModel)]="fieldLabel"
      (p-change)="onChange($event)"
    >
    </po-select>
    <po-select
      name="label"
      p-label="Select Field Value"
      [p-options]="optionsSelect"
      [(ngModel)]="fieldValue"
      (p-change)="onChange($event)"
    >
    </po-select>
  </div>
  <div class="po-md-6">
    <div class="po-row">
      <po-multiselect
        class="po-md-12"
        name="multiselect"
        p-label="Select your Company"
        [p-options]="options"
        [p-field-value]="fieldValue"
        [p-field-label]="fieldLabel"
        [(ngModel)]="company"
      >
      </po-multiselect>
    </div>
    <div class="po-row">
      <po-info class="po-md-12" p-label="Model" [p-value]="company"> </po-info>
    </div>
  </div>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-any-array',
  templateUrl: './sample-po-multiselect-any-array.component.html',
  standalone: false
})
export class SamplePoMultiselectAnyArrayComponent {
  company;
  fieldLabel = 'razaoSocial';
  fieldValue = 'cnpj';

  public readonly options: Array<any> = [
    {
      codigo: '1',
      nomeFantasia: 'TOTVS SA',
      razaoSocial: 'TOTVS LTDA',
      label: 'TOTVS COMPANY',
      cnpj: '01.234.567/0000-01',
      value: '100',
      id: '10',
      email: 'totvscompany@sample.com',
      data: '10/03/2015',
      origem: 'S\xE3o Paulo'
    },
    {
      codigo: '2',
      nomeFantasia: 'INSTITUTO TOTVS DE ENSINO SA',
      razaoSocial: 'INST TOTVS DE ENSINO LTDA',
      label: 'INST TOTVS',
      cnpj: '02.345.678/0000-02',
      value: '200',
      id: '20',
      email: 'insttotvs@sample.com',
      data: '10/10/2020',
      origem: 'Joinville'
    },
    {
      codigo: '3',
      nomeFantasia: 'TOTVS ENTERPRISE SA',
      razaoSocial: 'TOTVS ENTERPRISE LTDA ',
      label: 'ENT TOTVS',
      cnpj: '03.456.789/0000-03',
      value: '300',
      id: '30',
      email: 'enttotvs@sample.com',
      data: '10/01/2022',
      origem: 'Curitiba'
    }
  ];

  public readonly optionsSelect: Array<PoSelectOption> = [
    { label: 'codigo', value: 'codigo' },
    { label: 'nomeFantasia', value: 'nomeFantasia' },
    { label: 'razaoSocial', value: 'razaoSocial' },
    { label: 'label', value: 'label' },
    { label: 'cnpj', value: 'cnpj' },
    { label: 'value', value: 'value' },
    { label: 'id', value: 'id' },
    { label: 'email', value: 'email' },
    { label: 'data', value: 'data' },
    { label: 'origem', value: 'origem' }
  ];

  onChange(event) {
    this.company = undefined;
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-any-array"),e(),l(23,"hr")),a&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),x(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,dt,i.hideSampleCodeTabs)))},dependencies:[w,M,y,C,De],encapsulation:2})}return o})();var Ie=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-multiselect-doc"]],standalone:!1,decls:1108,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","boas-pr\xE1ticas"],["id","acessibilidade-tratada-no-componente"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption"],["pan","",1,"docs-api-property-type","any>"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","property:","string,","value:","string","}"],["pan","",1,"docs-api-property-type","Array<string"],["pan","",1,"docs-api-property-type","number>"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoFieldModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),e(),t(7,"blockquote")(8,"p"),n(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),t(10,"code"),n(11,"FormsModule"),e(),n(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),t(13,"code"),n(14,"ReactiveFormsModule"),e(),n(15,", ambos nativos do Angular."),e()()(),t(16,"h3",3),n(17,"Componente"),e(),t(18,"h4",4)(19,"code",5),n(20,"PoMultiselectComponent"),e()(),t(21,"div",2)(22,"p"),n(23,`O po-multiselect \xE9 um componente de m\xFAltipla sele\xE7\xE3o.
Este componente \xE9 recomendado para dar ao usu\xE1rio a op\xE7\xE3o de selecionar v\xE1rios itens em uma lista.`),e(),t(24,"p"),n(25,`Quando a lista possuir poucos itens, deve-se dar prefer\xEAncia para o uso do po-checkbox-group, por ser mais simples
e mais r\xE1pido para a sele\xE7\xE3o do usu\xE1rio.`),e(),t(26,"p"),n(27,`Este componente tamb\xE9m n\xE3o deve ser utilizado em casos onde a sele\xE7\xE3o seja \xFAnica. Nesses casos, deve-se utilizar o
po-select, po-combo ou po-radio-group.`),e(),t(28,"p"),n(29,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),t(30,"code"),n(31,"p-filter-service"),e(),n(32,"."),e(),t(33,"h4",6),n(34,"Boas pr\xE1ticas"),e(),t(35,"ul")(36,"li"),n(37,"Caso a lista apresente menos de 5 itens, considere utilizar outro componente;"),e(),t(38,"li"),n(39,"N\xE3o utilize o multiselect caso o usu\xE1rio possa selecionar apenas uma op\xE7\xE3o. Para esse caso, opte por utilizar po-radio ou po-select;"),e(),t(40,"li"),n(41,`Sempre que poss\xEDvel, agrupe as op\xE7\xF5es e use labels curtas para descrever o conte\xFAdo. Exemplo: em uma combina\xE7\xE3o de alimentos,
as op\xE7\xF5es podem ser agrupadas por Vegetais, Frutas, etc;`),e()(),t(42,"h4",7),n(43,"Acessibilidade tratada no componente"),e(),t(44,"p"),n(45,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),e(),t(46,"ul")(47,"li"),n(48,"Quando em foco, o multiselect abre o listbox usando as teclas de Espa\xE7o ou Enter do teclado."),e(),t(49,"li"),n(50,"Utilize as teclas Arrow Up [seta para cima] ou Arrow Down [seta para baixo] do teclado para navegar entre os itens do listbox."),e(),t(51,"li"),n(52,"Utilize a tecla Esc do teclado para fechar o listbox."),e(),t(53,"li"),n(54,"Quando um item estiver em foco, utilize as teclas Arrow Right [seta para direita] ou Arrow Left [seta para esquerda] do teclado para navegar entre eles."),e(),t(55,"li"),n(56,"Quando em foco e havendo um item ou mais j\xE1 selecionado, utilize a tecla Arrow Down [seta para baixo] do teclado para abrir o listbox."),e()(),t(57,"h4",8),n(58,"Tokens customiz\xE1veis"),e(),t(59,"p"),n(60,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(61,"blockquote")(62,"p"),n(63,"Para maiores informa\xE7\xF5es, acesse o guia "),t(64,"a",9),n(65,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(66,"."),e()(),t(67,"table")(68,"thead")(69,"tr")(70,"th"),n(71,"Propriedade"),e(),t(72,"th"),n(73,"Descri\xE7\xE3o"),e(),t(74,"th"),n(75,"Valor Padr\xE3o"),e()()(),t(76,"tbody")(77,"tr")(78,"td")(79,"strong"),n(80,"Default Values"),e()(),l(81,"td")(82,"td"),e(),t(83,"tr")(84,"td")(85,"code"),n(86,"--font-family"),e()(),t(87,"td"),n(88,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(89,"td")(90,"code"),n(91,"var(--font-family-theme)"),e()()(),t(92,"tr")(93,"td")(94,"code"),n(95,"--font-size"),e()(),t(96,"td"),n(97,"Tamanho da fonte"),e(),t(98,"td")(99,"code"),n(100,"var(--font-size-default)"),e()()(),t(101,"tr")(102,"td")(103,"code"),n(104,"--text-color-placeholder"),e(),n(105," \xA0"),e(),t(106,"td"),n(107,"Cor do texto do placeholder"),e(),t(108,"td")(109,"code"),n(110,"var(--color-action-disabled)"),e()()(),t(111,"tr")(112,"td")(113,"code"),n(114,"--color"),e()(),t(115,"td"),n(116,"Cor principal do multiselect"),e(),t(117,"td")(118,"code"),n(119,"var(--color-neutral-dark-70)"),e()()(),t(120,"tr")(121,"td")(122,"code"),n(123,"--background"),e()(),t(124,"td"),n(125,"Cor de background"),e(),t(126,"td")(127,"code"),n(128,"var(--color-neutral-light-05)"),e()()(),t(129,"tr")(130,"td")(131,"strong"),n(132,"Hover"),e()(),l(133,"td")(134,"td"),e(),t(135,"tr")(136,"td")(137,"code"),n(138,"--color-hover"),e()(),t(139,"td"),n(140,"Cor principal no estado hover"),e(),t(141,"td")(142,"code"),n(143,"var(--color-action-hover)"),e()()(),t(144,"tr")(145,"td")(146,"code"),n(147,"--background-hover"),e()(),t(148,"td"),n(149,"Cor de background no estado hover"),e(),t(150,"td")(151,"code"),n(152,"var(--color-brand-01-lighter)"),e()()(),t(153,"tr")(154,"td")(155,"strong"),n(156,"Focused"),e()(),l(157,"td")(158,"td"),e(),t(159,"tr")(160,"td")(161,"code"),n(162,"--color-focused"),e()(),t(163,"td"),n(164,"Cor principal no estado de focus"),e(),t(165,"td")(166,"code"),n(167,"var(--color-action-default)"),e()()(),t(168,"tr")(169,"td")(170,"code"),n(171,"--outline-color-focused"),e(),n(172," \xA0"),e(),t(173,"td"),n(174,"Cor do outline do estado de focus"),e(),t(175,"td")(176,"code"),n(177,"var(--color-action-focus)"),e()()(),t(178,"tr")(179,"td")(180,"strong"),n(181,"Disabled"),e()(),l(182,"td")(183,"td"),e(),t(184,"tr")(185,"td")(186,"code"),n(187,"--color-disabled"),e()(),t(188,"td"),n(189,"Cor principal no estado disabled"),e(),t(190,"td")(191,"code"),n(192,"var(--color-action-disabled)"),e()()(),t(193,"tr")(194,"td")(195,"code"),n(196,"--background-disabled"),e(),n(197," \xA0"),e(),t(198,"td"),n(199,"Cor de background no estado disabled \xA0"),e(),t(200,"td")(201,"code"),n(202,"var(--color-neutral-light-20)"),e()()(),t(203,"tr")(204,"td")(205,"strong"),n(206,"Error"),e()(),l(207,"td")(208,"td"),e(),t(209,"tr")(210,"td")(211,"code"),n(212,"--color-error"),e()(),t(213,"td"),n(214,"Cor principal no estado error"),e(),t(215,"td")(216,"code"),n(217,"var(--color-feedback-negative-base)"),e()()()()()(),t(218,"div",10)(219,"h4",11),n(220,"Seletor"),e(),t(221,"pre",12),n(222,`<po-multiselect
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-change)="EventEmitter"
    p-debounce-time="number"
    p-disabled="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-filter-mode="PoMultiselectFilterMode"
    p-filter-service="string | PoMultiselectFilter"
    p-help="string"
    p-hide-search="boolean"
    p-hide-select-all="boolean"
    p-label="string"
    p-literals="PoMultiselectLiterals"
    name="string"
    p-optional="boolean"
    p-options="Array<PoMultiselectOption | any>"
    p-placeholder="string"
    p-placeholder-search="string"
    p-required="boolean"
    p-show-required="boolean"
    p-sort="boolean" >
</po-multiselect>
`),e()(),t(223,"h4",13),n(224,"Propriedades"),e(),t(225,"table",14)(226,"tr",15)(227,"th",16),n(228,"Nome"),e(),t(229,"th",16),n(230,"Tipo"),e(),t(231,"th",16),n(232,"Padr\xE3o"),e(),t(233,"th",16),n(234,"Descri\xE7\xE3o"),e()(),t(235,"tr",17)(236,"td",18)(237,"div",19)(238,"span",20),n(239," p-append-in-body"),l(240,"br"),e()()(),t(241,"td",21)(242,"code",22),n(243,"boolean"),e()(),t(244,"td",23)(245,"p")(246,"code"),n(247,"false"),e()()(),t(248,"td",24)(249,"em")(250,"strong"),n(251,"(opcional)"),e()(),t(252,"p"),n(253,`Define que o dropdown do multiselect ser\xE1 incluido no body da p\xE1gina e n\xE3o suspenso com a caixa de texto do componente.
Op\xE7\xE3o necess\xE1ria para o caso de uso do componente em p\xE1ginas que necessitam renderizar o multiselect fora do conte\xFAdo principal.`),e(),t(254,"blockquote")(255,"p"),n(256,"Obs: O uso dessa propriedade pode acarretar na perda sequencial da tabula\xE7\xE3o da p\xE1gina"),e()()()(),t(257,"tr",17)(258,"td",18)(259,"div",19)(260,"span",20),n(261," p-auto-focus"),l(262,"br"),e()()(),t(263,"td",21)(264,"code",22),n(265,"boolean"),e()(),t(266,"td",23)(267,"p")(268,"code"),n(269,"false"),e()()(),t(270,"td",24)(271,"em")(272,"strong"),n(273,"(opcional)"),e()(),t(274,"p"),n(275,"Aplica foco no elemento ao ser iniciado."),e(),t(276,"blockquote")(277,"p"),n(278,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),e()()()(),t(279,"tr",17)(280,"td",18)(281,"div",19)(282,"span",20),n(283," p-auto-height"),l(284,"br"),e()()(),t(285,"td",21)(286,"code",22),n(287,"boolean"),e()(),t(288,"td",23)(289,"p")(290,"code"),n(291,"false"),e()()(),t(292,"td",24)(293,"em")(294,"strong"),n(295,"(opcional)"),e()(),t(296,"p"),n(297,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),e(),t(298,"blockquote")(299,"p"),n(300,"O valor padr\xE3o ser\xE1 "),t(301,"code"),n(302,"true"),e(),n(303," quando houver servi\xE7o ("),t(304,"code"),n(305,"p-filter-service"),e(),n(306,")."),e()()()(),t(307,"tr",17)(308,"td",18)(309,"div",25)(310,"span",26),n(311," (p-change)"),l(312,"br"),e()()(),t(313,"td",21)(314,"code",27),n(315,"EventEmitter"),e()(),t(316,"td",23),n(317,"-"),e(),t(318,"td",24)(319,"em")(320,"strong"),n(321,"(opcional)"),e()(),t(322,"p"),n(323,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel."),e()()(),t(324,"tr",17)(325,"td",18)(326,"div",19)(327,"span",20),n(328," p-debounce-time"),l(329,"br"),e()()(),t(330,"td",21)(331,"code",28),n(332,"number"),e()(),t(333,"td",23)(334,"p")(335,"code"),n(336,"400"),e()()(),t(337,"td",24)(338,"em")(339,"strong"),n(340,"(opcional)"),e()(),t(341,"p"),n(342,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla."),e(),t(343,"blockquote")(344,"p"),n(345,"Ser\xE1 utilizada apenas quando houver servi\xE7o ("),t(346,"code"),n(347,"p-filter-service"),e(),n(348,") e somente ser\xE1 aceito valor maior do que "),t(349,"em"),n(350,"zero"),e(),n(351,"."),e()()()(),t(352,"tr",17)(353,"td",18)(354,"div",19)(355,"span",20),n(356," p-disabled"),l(357,"br"),e()()(),t(358,"td",21)(359,"code",22),n(360,"boolean"),e()(),t(361,"td",23)(362,"p")(363,"code"),n(364,"false"),e()()(),t(365,"td",24)(366,"em")(367,"strong"),n(368,"(opcional)"),e()(),t(369,"p"),n(370,"Indica que o campo ser\xE1 desabilitado."),e()()(),t(371,"tr",17)(372,"td",18)(373,"div",19)(374,"span",20),n(375," p-field-error-message"),l(376,"br"),e()()(),t(377,"td",21)(378,"code",29),n(379,"string"),e()(),t(380,"td",23),n(381,"-"),e(),t(382,"td",24)(383,"em")(384,"strong"),n(385,"(opcional)"),e()(),t(386,"p"),n(387,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),e(),t(388,"blockquote")(389,"p"),n(390,"Necess\xE1rio que a propriedade "),t(391,"code"),n(392,"p-required"),e(),n(393," esteja habilitada."),e()()()(),t(394,"tr",17)(395,"td",18)(396,"div",19)(397,"span",20),n(398," p-field-label"),l(399,"br"),e()()(),t(400,"td",21)(401,"code",29),n(402,"string"),e()(),t(403,"td",23)(404,"p")(405,"code"),n(406,"label"),e()()(),t(407,"td",24)(408,"em")(409,"strong"),n(410,"(opcional)"),e()(),t(411,"p"),n(412,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(413,"code"),n(414,"p-options"),e(),n(415,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),e(),t(416,"p"),n(417,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),t(418,"code"),n(419,"PoMultiSelectOption"),e(),n(420,"."),e()()(),t(421,"tr",17)(422,"td",18)(423,"div",19)(424,"span",20),n(425," p-field-value"),l(426,"br"),e()()(),t(427,"td",21)(428,"code",29),n(429,"string"),e()(),t(430,"td",23)(431,"p")(432,"code"),n(433,"value"),e()()(),t(434,"td",24)(435,"em")(436,"strong"),n(437,"(opcional)"),e()(),t(438,"p"),n(439,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(440,"code"),n(441,"p-options"),e(),n(442,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),e(),t(443,"p"),n(444,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),t(445,"code"),n(446,"PoMultiSelectOption"),e(),n(447,"."),e()()(),t(448,"tr",17)(449,"td",18)(450,"div",19)(451,"span",20),n(452," p-filter-mode"),l(453,"br"),e()()(),t(454,"td",21)(455,"code",30),n(456,"PoMultiselectFilterMode"),e()(),t(457,"td",23)(458,"p")(459,"code"),n(460,"startsWith"),e()()(),t(461,"td",24)(462,"em")(463,"strong"),n(464,"(opcional)"),e()(),t(465,"p"),n(466,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoMultiselectFilterMode`),e()()(),t(467,"tr",17)(468,"td",18)(469,"div",19)(470,"span",20),n(471," p-filter-service"),l(472,"br"),e()()(),t(473,"td",21)(474,"code",29),n(475,"string "),e(),t(476,"code",31),n(477," PoMultiselectFilter"),e()(),t(478,"td",23),n(479,"-"),e(),t(480,"td",24)(481,"em")(482,"strong"),n(483,"(opcional)"),e()(),t(484,"p"),n(485,"Nesta propriedade pode ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de itens no componente."),e(),t(486,"p"),n(487,"Tamb\xE9m existe a possibilidade de informar um servi\xE7o implementando a interface "),t(488,"code"),n(489,"PoMultiselectFilter"),e(),n(490,"."),e(),t(491,"p"),n(492,"Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o "),t(493,"a",32),n(494,"API PO UI"),e(),n(495," e utilizar as propriedades "),t(496,"code"),n(497,"p-field-label"),e(),n(498," e "),t(499,"code"),n(500,"p-field-value"),e(),n(501," para a constru\xE7\xE3o da lista de itens."),e(),t(502,"p"),n(503,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),e(),t(504,"pre")(505,"code"),n(506,`// caso filtrar por "Peter"
https://localhost:8080/api/heroes?filter=Peter`),e()(),t(507,"p"),n(508,"E caso iniciar o campo com valor, os itens ser\xE3o buscados da seguinte forma:"),e(),t(509,"pre")(510,"code"),n(511,`// caso o valor do campo for [1234, 5678];
 https://localhost:8080/api/heroes?value=1234,5678

//O *value* \xE9 referente ao \`fieldValue\`.`),e()()()(),t(512,"tr",17)(513,"td",18)(514,"div",19)(515,"span",20),n(516," p-help"),l(517,"br"),e()()(),t(518,"td",21)(519,"code",29),n(520,"string"),e()(),t(521,"td",23),n(522,"-"),e(),t(523,"td",24)(524,"em")(525,"strong"),n(526,"(opcional)"),e()(),t(527,"p"),n(528,"Texto de apoio para o campo."),e()()(),t(529,"tr",17)(530,"td",18)(531,"div",19)(532,"span",20),n(533," p-hide-search"),l(534,"br"),e()()(),t(535,"td",21)(536,"code",22),n(537,"boolean"),e()(),t(538,"td",23)(539,"p")(540,"code"),n(541,"false"),e()()(),t(542,"td",24)(543,"em")(544,"strong"),n(545,"(opcional)"),e()(),t(546,"p"),n(547,"Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect."),e()()(),t(548,"tr",17)(549,"td",18)(550,"div",19)(551,"span",20),n(552," p-hide-select-all"),l(553,"br"),e()()(),t(554,"td",21)(555,"code",22),n(556,"boolean"),e()(),t(557,"td",23)(558,"p")(559,"code"),n(560,"false"),e()()(),t(561,"td",24)(562,"em")(563,"strong"),n(564,"(opcional)"),e()(),t(565,"p"),n(566,'Indica se o campo "Selecionar todos" ser\xE1 escondido.'),e()()(),t(567,"tr",17)(568,"td",18)(569,"div",19)(570,"span",20),n(571," p-label"),l(572,"br"),e()()(),t(573,"td",21)(574,"code",29),n(575,"string"),e()(),t(576,"td",23),n(577,"-"),e(),t(578,"td",24)(579,"em")(580,"strong"),n(581,"(opcional)"),e()(),t(582,"p"),n(583,"Label no componente."),e()()(),t(584,"tr",17)(585,"td",18)(586,"div",19)(587,"span",20),n(588," p-literals"),l(589,"br"),e()()(),t(590,"td",21)(591,"code",33),n(592,"PoMultiselectLiterals"),e()(),t(593,"td",23),n(594,"-"),e(),t(595,"td",24)(596,"em")(597,"strong"),n(598,"(opcional)"),e()(),t(599,"p"),n(600,"Objeto com as literais usadas no "),t(601,"code"),n(602,"po-multiselect"),e(),n(603,"."),e(),t(604,"p"),n(605,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),e(),t(606,"pre")(607,"code"),n(608,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Nenhum dado encontrado',
  placeholderSearch: 'Buscar',
  selectAll: 'Select all',
  selectItem: 'Select items'
};`),e()(),t(609,"p"),n(610,"Ou passando apenas as literais que deseja customizar:"),e(),t(611,"pre")(612,"code"),n(613,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Sem dados'
};`),e()(),t(614,"p"),n(615,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),e(),t(616,"pre")(617,"code"),n(618,`<po-multiselect
  [p-literals]="customLiterals">
</po-po-multiselect>`),e()(),t(619,"blockquote")(620,"p"),n(621,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(622,"a",34)(623,"code"),n(624,"PoI18nService"),e()(),n(625," ou do browser."),e()()()(),t(626,"tr",17)(627,"td",18)(628,"div",19)(629,"span",20),n(630," name"),l(631,"br"),e()()(),t(632,"td",21)(633,"code",29),n(634,"string"),e()(),t(635,"td",23),n(636,"-"),e(),t(637,"td",24)(638,"p"),n(639,"Nome do componente."),e()()(),t(640,"tr",17)(641,"td",18)(642,"div",19)(643,"span",20),n(644," p-optional"),l(645,"br"),e()()(),t(646,"td",21)(647,"code",22),n(648,"boolean"),e()(),t(649,"td",23)(650,"p")(651,"code"),n(652,"false"),e()()(),t(653,"td",24)(654,"em")(655,"strong"),n(656,"(opcional)"),e()(),t(657,"p"),n(658,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),e(),t(659,"blockquote")(660,"p"),n(661,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(662,"ul")(663,"li"),n(664,"O campo conter "),t(665,"code"),n(666,"p-required"),e(),n(667,";"),e(),t(668,"li"),n(669,"N\xE3o possuir "),t(670,"code"),n(671,"p-help"),e(),n(672," e/ou "),t(673,"code"),n(674,"p-label"),e(),n(675,"."),e()()()(),t(676,"tr",17)(677,"td",18)(678,"div",19)(679,"span",20),n(680," p-options"),l(681,"br"),e()()(),t(682,"td",21)(683,"code",35),n(684,"Array<PoMultiselectOption "),e(),t(685,"code",36),n(686," any>"),e()(),t(687,"td",23),n(688,"-"),e(),t(689,"td",24)(690,"p"),n(691,`Nesta propriedade deve ser definida uma lista de objetos que ser\xE1 exibida no multiselect.
Esta lista deve conter os valores e os labels que ser\xE3o apresentados na tela.`),e(),t(692,"blockquote")(693,"p"),n(694,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),e()(),t(695,"pre")(696,"code"),n(697,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });`),e()(),t(698,"blockquote")(699,"p"),n(700,"A lista pode ser definida utilizando um array com o valor representando "),t(701,"code"),n(702,"value"),e(),n(703," e "),t(704,"code"),n(705,"label"),e(),n(706," das seguintes formas:"),e()(),t(707,"pre")(708,"code"),n(709,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>`),e()(),t(710,"pre")(711,"code"),n(712,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>`),e()(),t(713,"ul")(714,"li"),n(715,"Aconselha-se utilizar valores distintos no "),t(716,"code"),n(717,"label"),e(),n(718," e "),t(719,"code"),n(720,"value"),e(),n(721," dos itens."),e()()()(),t(722,"tr",17)(723,"td",18)(724,"div",19)(725,"span",20),n(726," p-placeholder"),l(727,"br"),e()()(),t(728,"td",21)(729,"code",29),n(730,"string"),e()(),t(731,"td",23),n(732,"-"),e(),t(733,"td",24)(734,"em")(735,"strong"),n(736,"(opcional)"),e()(),t(737,"p"),n(738,"Mensagem apresentada enquanto o campo estiver vazio."),e()()(),t(739,"tr",17)(740,"td",18)(741,"div",19)(742,"span",20),n(743," p-placeholder-search"),l(744,"br"),e()()(),t(745,"td",21)(746,"code",29),n(747,"string"),e()(),t(748,"td",23)(749,"p")(750,"code"),n(751,"Buscar"),e()()(),t(752,"td",24)(753,"em")(754,"strong"),n(755,"(opcional)"),e()(),t(756,"p"),n(757,"Placeholder do campo de pesquisa."),e(),t(758,"blockquote")(759,"p"),n(760,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),e()()()(),t(761,"tr",17)(762,"td",18)(763,"div",19)(764,"span",20),n(765," p-required"),l(766,"br"),e()()(),t(767,"td",21)(768,"code",22),n(769,"boolean"),e()(),t(770,"td",23)(771,"p")(772,"code"),n(773,"false"),e()()(),t(774,"td",24)(775,"em")(776,"strong"),n(777,"(opcional)"),e()(),t(778,"p"),n(779,"Define que o campo ser\xE1 obrigat\xF3rio."),e(),t(780,"blockquote")(781,"p"),n(782,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),t(783,"code"),n(784,"(p-disabled)"),e(),n(785,"."),e()()()(),t(786,"tr",17)(787,"td",18)(788,"div",19)(789,"span",20),n(790," p-show-required"),l(791,"br"),e()()(),t(792,"td",21)(793,"code",22),n(794,"boolean"),e()(),t(795,"td",23),n(796,"-"),e(),t(797,"td",24)(798,"p"),n(799,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),e(),t(800,"blockquote")(801,"p"),n(802,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(803,"ul")(804,"li"),n(805,"N\xE3o possuir "),t(806,"code"),n(807,"p-help"),e(),n(808," e/ou "),t(809,"code"),n(810,"p-label"),e(),n(811,"."),e()()()(),t(812,"tr",17)(813,"td",18)(814,"div",19)(815,"span",20),n(816," p-sort"),l(817,"br"),e()()(),t(818,"td",21)(819,"code",22),n(820,"boolean"),e()(),t(821,"td",23)(822,"p")(823,"code"),n(824,"false"),e()()(),t(825,"td",24)(826,"em")(827,"strong"),n(828,"(opcional)"),e()(),t(829,"p"),n(830,`Indica que a lista definida na propriedade p-options ser\xE1 ordenada pelo label antes de ser apresentada no
dropdown.`),e()()()(),t(831,"h3",13),n(832,"M\xE9todos"),e(),t(833,"table",37)(834,"tr",17)(835,"th",38)(836,"div",19)(837,"h4")(838,"span",20),n(839," focus "),e()()()()(),t(840,"tr",24)(841,"td",24)(842,"p"),n(843,"Fun\xE7\xE3o que atribui foco ao componente."),e(),t(844,"p"),n(845,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),t(846,"pre")(847,"code"),n(848,`import { PoMultiselectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;

focusMultiselect() {
  this.multiselect.focus();
}`),e()()()()(),l(849,"br"),t(850,"h3"),n(851,"Interfaces"),e(),t(852,"h4",39)(853,"code",5),n(854,"PoMultiselectFilter"),e()(),t(855,"div",2)(856,"p"),n(857,"Interface para os servi\xE7os que ser\xE3o utilizados no po-multiselect."),e()(),t(858,"h4",13),n(859,"M\xE9todos"),e(),t(860,"table",37)(861,"tr",17)(862,"th",38)(863,"div",19)(864,"h4")(865,"span",20),n(866," getFilteredData "),e()()()()(),t(867,"tr",24)(868,"td",24)(869,"p"),n(870,`M\xE9todo que ser\xE1 chamado ao realizar uma busca no componente, deve retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem
a interface `),t(871,"code"),n(872,"PoMultiselectOption"),e(),n(873,", ser\xE1 informado por parametro o campo e o valor a ser pesquisado."),e()()()(),t(874,"h5")(875,"b"),n(876,"Par\xE2metros"),e()(),t(877,"table",14)(878,"tr",15)(879,"th",16),n(880,"Nome"),e(),t(881,"th",16),n(882,"Tipo"),e(),t(883,"th",16),n(884,"Descri\xE7\xE3o"),e()(),t(885,"tr",17)(886,"td",18),n(887," params"),e(),t(888,"td",21)(889,"code",40),n(890," { property: string, value: string } "),e()(),t(891,"td",24)(892,"p"),n(893,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),e()()()(),l(894,"br"),t(895,"table",37)(896,"tr",17)(897,"th",38)(898,"div",19)(899,"h4")(900,"span",20),n(901," getObjectsByValues "),e()()()()(),t(902,"tr",24)(903,"td",24)(904,"p"),n(905,`M\xE9todo que ser\xE1 chamado ao iniciar o componente com valor, deve retornar um Observable que cont\xE9m apenas os objetos filtrados que
seguem a interface `),t(906,"code"),n(907,"PoMultiselectOption"),e(),n(908,", ser\xE1 informado por par\xE2metro valor a ser pesquisado."),e()()()(),t(909,"h5")(910,"b"),n(911,"Par\xE2metros"),e()(),t(912,"table",14)(913,"tr",15)(914,"th",16),n(915,"Nome"),e(),t(916,"th",16),n(917,"Tipo"),e(),t(918,"th",16),n(919,"Descri\xE7\xE3o"),e()(),t(920,"tr",17)(921,"td",18),n(922," values"),e(),t(923,"td",21)(924,"code",41),n(925," Array<string "),e(),t(926,"code",42),n(927," number> "),e()(),t(928,"td",24)(929,"p"),n(930,"Array com os valores a serem buscados."),e()()()(),l(931,"br"),t(932,"h4",39)(933,"code",5),n(934,"PoMultiselectLiterals"),e()(),t(935,"div",2)(936,"p"),n(937,"Interface para defini\xE7\xE3o das literais usadas no "),t(938,"code"),n(939,"po-multiselect"),e(),n(940,"."),e()(),t(941,"h4",13),n(942,"Propriedades"),e(),t(943,"table",14)(944,"tr",15)(945,"th",16),n(946,"Nome"),e(),t(947,"th",16),n(948,"Tipo"),e(),t(949,"th",16),n(950,"Descri\xE7\xE3o"),e()(),t(951,"tr",17)(952,"td",18)(953,"div",19)(954,"span",20),n(955," noData"),l(956,"br"),e()()(),t(957,"td",21)(958,"code",29),n(959,"string"),e()(),t(960,"td",24)(961,"em")(962,"strong"),n(963,"(opcional)"),e()(),t(964,"p"),n(965,"Texto exibido quando n\xE3o houver dados encontrados na busca."),e()()(),t(966,"tr",17)(967,"td",18)(968,"div",19)(969,"span",20),n(970," placeholderSearch"),l(971,"br"),e()()(),t(972,"td",21)(973,"code",29),n(974,"string"),e()(),t(975,"td",24)(976,"em")(977,"strong"),n(978,"(opcional)"),e()(),t(979,"p"),n(980,"Texto do "),t(981,"em"),n(982,"placeholder"),e(),n(983," do campo de busca."),e()()(),t(984,"tr",17)(985,"td",18)(986,"div",19)(987,"span",20),n(988," selectAll"),l(989,"br"),e()()(),t(990,"td",21)(991,"code",29),n(992,"string"),e()(),t(993,"td",24)(994,"em")(995,"strong"),n(996,"(opcional)"),e()(),t(997,"p"),n(998,"Texto exibido no bot\xE3o de selecionar todos."),e()()(),t(999,"tr",17)(1e3,"td",18)(1001,"div",19)(1002,"span",20),n(1003," selectItem"),l(1004,"br"),e()()(),t(1005,"td",21)(1006,"code",29),n(1007,"string"),e()(),t(1008,"td",24)(1009,"em")(1010,"strong"),n(1011,"(opcional)"),e()(),t(1012,"p"),n(1013,"Texto exibido na propriedade placeholder."),e()()()(),t(1014,"h4",39)(1015,"code",5),n(1016,"PoMultiselectOption"),e()(),t(1017,"div",2)(1018,"p"),n(1019,"Interface dos itens da cole\xE7\xE3o que ser\xE1 exibida no dropdown do po-multiselect."),e()(),t(1020,"h4",13),n(1021,"Propriedades"),e(),t(1022,"table",14)(1023,"tr",15)(1024,"th",16),n(1025,"Nome"),e(),t(1026,"th",16),n(1027,"Tipo"),e(),t(1028,"th",16),n(1029,"Descri\xE7\xE3o"),e()(),t(1030,"tr",17)(1031,"td",18)(1032,"div",19)(1033,"span",20),n(1034," label"),l(1035,"br"),e()()(),t(1036,"td",21)(1037,"code",29),n(1038,"string"),e()(),t(1039,"td",24)(1040,"p"),n(1041,"Label exibido nos itens da lista."),e()()(),t(1042,"tr",17)(1043,"td",18)(1044,"div",19)(1045,"span",20),n(1046," value"),l(1047,"br"),e()()(),t(1048,"td",21)(1049,"code",29),n(1050,"string "),e(),t(1051,"code",28),n(1052," number"),e()(),t(1053,"td",24)(1054,"p"),n(1055,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),e()()()(),t(1056,"h3"),n(1057,"Enums"),e(),t(1058,"h4",4)(1059,"code",5),n(1060,"PoMultiselectFilterMode"),e()(),t(1061,"div",2)(1062,"p"),n(1063,"Define o tipo de busca usado no po-multiselect."),e()(),t(1064,"h4",13),n(1065,"Propriedades"),e(),t(1066,"table",14)(1067,"tr",15)(1068,"th",16),n(1069,"Nome"),e(),t(1070,"th",16),n(1071,"Descri\xE7\xE3o"),e()(),t(1072,"tr",17)(1073,"td",18)(1074,"div",19)(1075,"span",20),n(1076," startsWith"),l(1077,"br"),e()()(),t(1078,"td",24)(1079,"p"),n(1080,"Verifica se o texto "),t(1081,"em"),n(1082,"inicia"),e(),n(1083," com o valor pesquisado."),e()()(),t(1084,"tr",17)(1085,"td",18)(1086,"div",19)(1087,"span",20),n(1088," contains"),l(1089,"br"),e()()(),t(1090,"td",24)(1091,"p"),n(1092,"Verifica se o texto "),t(1093,"em"),n(1094,"cont\xE9m"),e(),n(1095," o valor pesquisado."),e()()(),t(1096,"tr",17)(1097,"td",18)(1098,"div",19)(1099,"span",20),n(1100," endsWith"),l(1101,"br"),e()()(),t(1102,"td",24)(1103,"p"),n(1104,"Verifica se o texto "),t(1105,"em"),n(1106,"finaliza"),e(),n(1107," com o valor pesquisado."),e()()()()())},dependencies:[M],encapsulation:2})}return o})();var Ne=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(q(he),q(be))};static \u0275cmp=u({type:o,selectors:[["ng-component"]],standalone:!1,decls:12,vars:4,consts:[["p-title"," Multiselect",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,i){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),l(3,"sample-po-multiselect-doc"),e(),t(4,"po-tab",3),l(5,"sample-po-multiselect-basic-view")(6,"sample-po-multiselect-labs-view")(7,"sample-po-multiselect-vacation-view")(8,"sample-po-multiselect-vacation-reactive-form-view")(9,"sample-po-multiselect-template-view")(10,"sample-po-multiselect-heroes-view")(11,"sample-po-multiselect-any-array-view"),e()()()),a&2&&(m("p-actions",i.actions),p(2),m("p-active",i.activeTab.includes("doc")),p(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[Ce,y,C,xe,we,Te,Oe,ke,qe,Be,Ie],encapsulation:2})}return o})();var ht=[{path:"",component:Ne}],We=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=Y({type:o});static \u0275inj=Q({imports:[oe.forChild(ht),oe]})}return o})();var pn=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=Y({type:o});static \u0275inj=Q({imports:[Me,We]})}return o})();export{pn as DocPoMultiselectModule};