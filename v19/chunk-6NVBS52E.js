import{$,$a as w,A as V,Bc as Y,Cd as B,F as E,Fa as ce,G as S,Ga as e,Ia as L,Ka as b,Kb as ae,La as v,Lb as _,Ma as g,Mb as j,Na as D,Nb as X,Oa as U,Ob as I,Od as Le,Pa as F,Pb as N,Sb as be,T as d,Tb as ve,U as f,Ua as ue,Va as Ee,Vb as ge,Wb as he,Xd as C,Yb as fe,Yd as k,Zb as le,_ as u,a as G,ad as Z,bb as Se,c as me,dd as ke,ea as pe,gd as ee,h as ie,ha as c,hb as xe,ka as P,md as ye,na as n,oa as t,oc as H,pa as i,pb as A,pd as M,q as de,re as y,se as Fe,ta as J,ua as x,va as se,vc as K,x as O,y as Q,yd as z,za as oe,zc as Ce,zd as Pe}from"./chunk-ODUOVNEW.js";var we=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&i(0,"po-lookup",0)},dependencies:[M],encapsulation:2})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Basic"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-basic/sample-po-lookup-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),t()()()()(),n(21,"div",10),i(22,"sample-po-lookup-basic"),t(),i(23,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),c("ngClass",F(4,Ge,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,we],encapsulation:2})}return a})();var T=(()=>{class a{httpClient;url="https://po-sample-api.onrender.com/v1/heroes";constructor(r){this.httpClient=r}getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,p=me(m,["filterParams","advancedFilters"]),s=G(G(G({},p),l),o);return this.httpClient.get(this.url,{params:s})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)(V(A))};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Te=(()=>{class a{sampleFilterService;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;spacing=ke.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];constructor(r){this.sampleFilterService=r}ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch{this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch{this.customAdvancedFilters=void 0}}restore(){this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[]}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static \u0275fac=function(l){return new(l||a)(f(T))};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-labs"]],standalone:!1,features:[D([T])],decls:31,vars:45,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-selected","ngModel","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-spacing","p-text-wrap","p-virtual-scroll"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","4","p-label","Columns",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","2","p-label","Properties",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-label","Spacing",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,o){if(l&1){let p=J();n(0,"po-lookup",1),g("ngModelChange",function(m){return E(p),v(o.lookup,m)||(o.lookup=m),S(m)}),x("p-change",function(){return E(p),S(o.changeEvent("p-change"))})("p-error",function(){return E(p),S(o.changeEvent("p-error"))})("p-selected",function(){return E(p),S(o.changeEvent("p-selected"))}),t(),i(1,"hr"),n(2,"po-container",2)(3,"div",3),i(4,"po-info",4)(5,"po-info",5),t()(),i(6,"hr"),n(7,"form",null,0)(9,"div",3)(10,"po-input",6),g("ngModelChange",function(m){return E(p),v(o.label,m)||(o.label=m),S(m)}),t(),n(11,"po-checkbox-group",7),g("ngModelChange",function(m){return E(p),v(o.columnsName,m)||(o.columnsName=m),S(m)}),x("p-change",function(){return E(p),S(o.updateColumns())}),t()(),n(12,"div",3)(13,"po-select",8),g("ngModelChange",function(m){return E(p),v(o.fieldLabel,m)||(o.fieldLabel=m),S(m)}),t(),n(14,"po-select",9),g("ngModelChange",function(m){return E(p),v(o.fieldValue,m)||(o.fieldValue=m),S(m)}),t()(),n(15,"div",3)(16,"po-input",10),g("ngModelChange",function(m){return E(p),v(o.filterService,m)||(o.filterService=m),S(m)}),t(),n(17,"po-input",11),g("ngModelChange",function(m){return E(p),v(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),S(m)}),t()(),n(18,"div",3)(19,"po-input",12),g("ngModelChange",function(m){return E(p),v(o.help,m)||(o.help=m),S(m)}),t(),n(20,"po-input",13),g("ngModelChange",function(m){return E(p),v(o.placeholder,m)||(o.placeholder=m),S(m)}),t()(),n(21,"div",3)(22,"po-input",14),g("ngModelChange",function(m){return E(p),v(o.literals,m)||(o.literals=m),S(m)}),x("p-change",function(){return E(p),S(o.changeLiterals())}),t(),n(23,"po-input",15),g("ngModelChange",function(m){return E(p),v(o.formatField,m)||(o.formatField=m),S(m)}),x("p-change",function(m){return E(p),S(o.onFieldFormatChange(m))}),t()(),n(24,"div",3)(25,"po-checkbox-group",16),g("ngModelChange",function(m){return E(p),v(o.properties,m)||(o.properties=m),S(m)}),t(),n(26,"po-radio-group",17),g("ngModelChange",function(m){return E(p),v(o.spacing,m)||(o.spacing=m),S(m)}),t()(),n(27,"div",3)(28,"po-textarea",18),g("ngModelChange",function(m){return E(p),v(o.advancedFilters,m)||(o.advancedFilters=m),S(m)}),x("p-change",function(){return E(p),S(o.changeAdvancedFilters())}),t()(),n(29,"div",3)(30,"po-button",19),x("p-click",function(){return E(p),S(o.restore())}),t()()()}l&2&&(b("ngModel",o.lookup),c("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll")),d(4),c("p-value",o.lookup),d(),c("p-value",o.event),d(5),b("ngModel",o.label),d(),b("ngModel",o.columnsName),c("p-options",o.columnsOptions),d(2),b("ngModel",o.fieldLabel),c("p-options",o.fieldLabelOptions),d(),b("ngModel",o.fieldValue),c("p-options",o.fieldValueOptions),d(2),b("ngModel",o.filterService),d(),b("ngModel",o.fieldErrorMessage),d(2),b("ngModel",o.help),d(),b("ngModel",o.placeholder),d(2),b("ngModel",o.literals),d(),b("ngModel",o.formatField),d(2),b("ngModel",o.properties),c("p-options",o.propertiesOptions),d(),b("ngModel",o.spacing),c("p-options",o.typeSpacing),d(2),b("ngModel",o.advancedFilters))},dependencies:[N,_,j,I,X,H,K,Ce,Y,ye,M,z,Pe,B],encapsulation:2})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Labs"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-lookup
  name="lookup"
  [(ngModel)]="lookup"
  [p-advanced-filters]="customAdvancedFilters"
  [p-auto-height]="properties.includes('autoHeight')"
  [p-clean]="properties.includes('clean')"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-field-format]="fieldFormat"
  [p-field-label]="fieldLabel"
  [p-filter-service]="filterService || sampleFilterService"
  [p-field-value]="fieldValue"
  [p-help]="help"
  [p-hide-columns-manager]="properties.includes('hideColumnsManager')"
  [p-infinite-scroll]="properties.includes('infiniteScroll')"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-multiple]="properties.includes('multiple')"
  [p-no-autocomplete]="properties.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-spacing]="spacing"
  [p-text-wrap]="properties.includes('textWrap')"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-change)="changeEvent('p-change')"
  (p-error)="changeEvent('p-error')"
  (p-selected)="changeEvent('p-selected')"
>
</po-lookup>

<hr />

<po-container p-no-border="true" p-no-padding="true">
  <div class="po-row">
    <po-info class="po-md-12" p-label="Model" [p-value]="lookup"> </po-info>

    <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
  </div>
</po-container>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-checkbox-group
      class="po-md-6"
      name="columnsName"
      [(ngModel)]="columnsName"
      p-columns="4"
      p-label="Columns"
      [p-options]="columnsOptions"
      (p-change)="updateColumns()"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-select
      class="po-md-6"
      name="fieldLabel"
      [(ngModel)]="fieldLabel"
      p-label="Field Label"
      p-required
      [p-options]="fieldLabelOptions"
    >
    </po-select>

    <po-select
      class="po-md-6"
      name="fieldValue"
      [(ngModel)]="fieldValue"
      p-label="Field Value"
      p-required
      [p-options]="fieldValueOptions"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="filterService"
      [(ngModel)]="filterService"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/people"
      p-label="Filter Service"
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
    <po-input class="po-lg-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

    <po-input class="po-lg-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input
      name="formatField"
      [(ngModel)]="formatField"
      class="po-lg-6"
      p-label="Field Format"
      p-help='Ex.: ["id", "name"]'
      (p-change)="onFieldFormatChange($event)"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-6"
      name="properties"
      [(ngModel)]="properties"
      p-columns="2"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group class="po-lg-6" name="spacing" [(ngModel)]="spacing" p-label="Spacing" [p-options]="typeSpacing">
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-textarea
      class="po-md-6"
      name="advancedFilters"
      [(ngModel)]="advancedFilters"
      (p-change)="changeAdvancedFilters()"
      p-help='Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]'
      p-label="Advanced Filters"
      p-rows="4"
    >
    </po-textarea>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-labs/sample-po-lookup-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoLookupColumn,
  PoLookupFilter,
  PoLookupLiterals,
  PoDynamicFormField,
  PoSelectOption,
  PoTableColumnSpacing,
  PoRadioGroupOption
} from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-labs',
  templateUrl: './sample-po-lookup-labs.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupLabsComponent implements OnInit {
  columns: Array<PoLookupColumn>;
  columnsName: Array<string>;
  customLiterals: PoLookupLiterals;
  event: string;
  fieldFormat: Array<string>;
  formatField: string;
  fieldLabel: string;
  fieldValue: string;
  filterService: PoLookupFilter | string;
  help: string;
  label: string;
  literals: string;
  lookup: any;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  advancedFilters: string;
  customAdvancedFilters: Array<PoDynamicFormField>;
  spacing: PoTableColumnSpacing = PoTableColumnSpacing.Medium;

  public readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Name' },
    { value: 'email', label: 'Email' }
  ];

  public readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'label', label: 'Label' },
    ...this.columnsOptions
  ];

  public readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'infiniteScroll', label: 'Infinite Scroll' },
    { value: 'multiple', label: 'Multiple' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'hideColumnsManager', label: 'Hide Columns Manager' },
    { value: 'textWrap', label: 'Text Wrap' },
    { value: 'virtualScroll', label: 'Virtual Sroll' }
  ];

  private readonly columnsDefinition = {
    id: <PoLookupColumn>{ property: 'id', label: 'Id' },
    name: <PoLookupColumn>{ property: 'name', label: 'Name' },
    email: <PoLookupColumn>{ property: 'email', label: 'Email' }
  };

  public readonly typeSpacing: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  constructor(public sampleFilterService: SamplePoLookupService) {}

  ngOnInit(): void {
    this.restore();
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

  onFieldFormatChange(event) {
    try {
      this.fieldFormat = JSON.parse(event);
    } catch {
      this.fieldFormat = undefined;
    }
  }

  changeAdvancedFilters() {
    try {
      this.customAdvancedFilters = JSON.parse(this.advancedFilters);
    } catch {
      this.customAdvancedFilters = undefined;
    }
  }

  restore() {
    this.columnsName = ['id', 'name'];
    this.customLiterals = undefined;
    this.updateColumns();

    this.fieldLabel = 'name';
    this.fieldValue = 'id';
    this.fieldFormat = undefined;
    this.formatField = undefined;
    this.event = undefined;
    this.filterService = undefined;
    this.label = undefined;
    this.literals = undefined;
    this.help = undefined;
    this.lookup = undefined;
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.customAdvancedFilters = [];
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach(column => this.columns.push(this.columnsDefinition[column]));
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),n(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  constructor(private httpClient: HttpClient) {}

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-lookup-labs"),t(),i(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),c("ngClass",F(4,Je,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Te],encapsulation:2})}return a})();var Ke=()=>({modalTitle:"Heroes available for mission"}),De=(()=>{class a{service;notification;hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:!0,gridColumns:6,label:"Hero"},{property:"name",optional:!0,gridColumns:6}];constructor(r,l){this.service=r,this.notification=l}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static \u0275fac=function(l){return new(l||a)(f(T),f(Z))};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-hero"]],standalone:!1,features:[D([T])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let p=J();n(0,"div",1),i(1,"po-info",2),t(),i(2,"hr"),n(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),g("ngModelChange",function(m){return E(p),v(o.hero,m)||(o.hero=m),S(m)}),t(),n(7,"po-select",4),g("ngModelChange",function(m){return E(p),v(o.vehicle,m)||(o.vehicle=m),S(m)}),t()(),n(8,"div",1)(9,"po-button",5),x("p-click",function(){return E(p),S(o.startMission())}),t()()()}if(l&2){let p=ce(4);d(6),b("ngModel",o.hero),c("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",!0)("p-advanced-filters",o.advancedFilters)("p-literals",U(10,Ke)),d(),b("ngModel",o.vehicle),c("p-options",o.vehicles),d(2),c("p-disabled",p.form.invalid||p.form.pending)}},dependencies:[N,_,j,I,X,H,M,z,B],encapsulation:2})}return a})();var Ze=a=>({"docs-sample-code-tabs":a}),Ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      [(ngModel)]="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="fieldFormat"
      [p-filter-service]="service"
      [p-hide-columns-manager]="true"
      [p-advanced-filters]="advancedFilters"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      [(ngModel)]="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="f.form.invalid || f.form.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero/sample-po-lookup-hero.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService, PoDynamicFormField } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero',
  templateUrl: './sample-po-lookup-hero.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupHeroComponent {
  hero: string;
  vehicle: string;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  advancedFilters: Array<PoDynamicFormField> = [
    { property: 'nickname', divider: 'Hero Informations', optional: true, gridColumns: 6, label: 'Hero' },
    { property: 'name', optional: true, gridColumns: 6 }
  ];

  constructor(
    public service: SamplePoLookupService,
    public notification: PoNotificationService
  ) {}

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    if (this.hero.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${this.hero} \${this.vehicle ? 'with vehicle: ' + this.vehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${this.hero} is in other mission.\`);
    }

    this.hero = undefined;
    this.vehicle = undefined;
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),n(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  constructor(private httpClient: HttpClient) {}

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-lookup-hero"),t(),i(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),c("ngClass",F(4,Ze,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,De],encapsulation:2})}return a})();var tt=()=>["nickname","label"],nt=()=>({modalTitle:"Heroes available for mission"}),Oe=(()=>{class a{service;notification;formBuilder;formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];constructor(r,l,o){this.service=r,this.notification=l,this.formBuilder=o}ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,ae.required],vehicle:[null,ae.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static \u0275fac=function(l){return new(l||a)(f(T),f(Z),f(ge))};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:!1,features:[D([T])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(n(0,"div",0),i(1,"po-info",1),t(),i(2,"hr"),n(3,"form",2)(4,"div",0),i(5,"po-lookup",3)(6,"po-select",4),t(),n(7,"div",0)(8,"po-button",5),x("p-click",function(){return o.startMission()}),t()()()),l&2&&(d(3),c("formGroup",o.formMission),d(2),c("p-columns",o.columns)("p-field-format",U(7,tt))("p-filter-service",o.service)("p-literals",U(8,nt)),d(),c("p-options",o.vehicles),d(2),c("p-disabled",o.formMission.invalid||o.formMission.pending))},dependencies:[N,_,j,be,ve,H,M,z,B],encapsulation:2})}return a})();var ot=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero Reactive Form"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<hr />

<form [formGroup]="formMission">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      formControlName="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="['nickname', 'label']"
      [p-filter-service]="service"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      formControlName="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="formMission.invalid || formMission.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero-reactive-form',
  templateUrl: './sample-po-lookup-hero-reactive-form.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupHeroReactiveFormComponent implements OnInit {
  formMission: UntypedFormGroup;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  constructor(
    public service: SamplePoLookupService,
    public notification: PoNotificationService,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.formMission = this.formBuilder.group({
      hero: [null, Validators.required],
      vehicle: [null, Validators.required]
    });
  }

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    const heroName = this.formMission.get('hero').value;
    const heroVehicle = this.formMission.get('vehicle').value;

    if (heroName.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${heroName} \${heroVehicle ? 'with vehicle: ' + heroVehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${heroName} is in other mission.\`);
    }

    this.formMission.reset();
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),n(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  constructor(private httpClient: HttpClient) {}

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-lookup-hero-reactive-form"),t(),i(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),c("ngClass",F(4,ot,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Oe],encapsulation:2})}return a})();var ne=(()=>{class a{http;baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";constructor(r){this.http=r}getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let p={page:l.toString()};return r&&(p.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:p}).pipe(ie(s=>({items:s.results,hasNext:!!s.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(ie(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)(V(A))};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function rt(a,bt){if(a&1&&(n(0,"div",0),i(1,"po-table",4),t()),a&2){let r=se();d(),c("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",!0)("p-hide-table-search",!1)}}var Ae=(()=>{class a{filterService;entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;constructor(r){this.filterService=r}get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case"people":return this.characterColumns;case"planets":return this.planetsColumns;case"starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case"people":return"character";case"planets":return"planet";case"starships":return"starship"}}static \u0275fac=function(l){return new(l||a)(f(ne))};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:!1,features:[D([ne])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],["class","po-row",4,"ngIf"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"po-radio-group",1),g("ngModelChange",function(s){return v(o.filterParams,s)||(o.filterParams=s),s}),t()(),i(2,"hr"),n(3,"div",0)(4,"po-lookup",2),ue(5,"titlecase"),g("ngModelChange",function(s){return v(o.entity,s)||(o.entity=s),s}),x("p-selected",function(s){return o.onSelected(s)}),t()(),pe(6,rt,2,4,"div",3)),l&2&&(d(),b("ngModel",o.filterParams),c("p-options",o.entities),d(3),oe("p-help","Select a ",o.entityLabel," to see the list of movies in which it participated"),oe("p-label","",Ee(5,12,o.entityLabel)," of Star Wars"),b("ngModel",o.entity),c("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",!0),d(2),c("ngIf",o.filmItemsFiltered&&o.entity))},dependencies:[Se,_,I,Y,M,ee,xe],encapsulation:2})}return a})();var dt=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Star Wars films"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-radio-group
    class="po-md-12"
    name="filterParams"
    [(ngModel)]="filterParams"
    p-label="Choose the entity of SW to search"
    [p-options]="entities"
  >
  </po-radio-group>
</div>

<hr />

<div class="po-row">
  <po-lookup
    class="po-md-12"
    name="entity"
    [(ngModel)]="entity"
    p-field-label="name"
    p-field-value="name"
    p-help="Select a { { entityLabel }} to see the list of movies in which it participated"
    p-label="{ { entityLabel | titlecase }} of Star Wars"
    [p-columns]="entityColumns"
    [p-filter-params]="filterParams"
    [p-filter-service]="filterService"
    [p-infinite-scroll]="true"
    (p-selected)="onSelected($event)"
  >
  </po-lookup>
</div>

<div class="po-row" *ngIf="filmItemsFiltered && entity">
  <po-table
    class="po-sm-12"
    [p-columns]="filmColumns"
    [p-items]="filmItemsFiltered"
    [p-sort]="true"
    [p-hide-table-search]="false"
  >
  </po-table>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
import { PoRadioGroupOption } from '@po-ui/ng-components';
import { SamplePoLookupSwFilmsService } from './sample-po-lookup-sw-films.service';

@Component({
  selector: 'sample-po-lookup-sw-films',
  templateUrl: './sample-po-lookup-sw-films.component.html',
  providers: [SamplePoLookupSwFilmsService],
  standalone: false
})
export class SamplePoLookupSwFilmsComponent implements OnInit {
  entity;
  filmItemsFiltered;
  filterParams = 'people';

  readonly characterColumns = [
    { property: 'name', label: 'Name' },
    { property: 'gender', label: 'Gender' },
    { property: 'height', label: 'Height' },
    { property: 'mass', label: 'Mass' }
  ];

  readonly entities: Array<PoRadioGroupOption> = [
    { label: 'Character', value: 'people' },
    { label: 'Planet', value: 'planets' },
    { label: 'Starship', value: 'starships' }
  ];

  readonly filmColumns = [
    { property: 'episode_id', label: 'Episode id' },
    { property: 'title', label: 'Title' },
    { property: 'director', label: 'Director' },
    { property: 'producer', label: 'Producer' },
    { property: 'release_date', label: 'Release date', type: 'date' }
  ];

  readonly planetsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'diameter', label: 'Diameter' },
    { property: 'population', label: 'Population' },
    { property: 'climate', label: 'Climate' }
  ];

  readonly starshipsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'passengers', label: 'Passengers' },
    { property: 'max_atmosphering_speed', label: 'Max Speed' },
    { property: 'consumables', label: 'Consumables' }
  ];

  private filmItems;

  constructor(public filterService: SamplePoLookupSwFilmsService) {}

  get entityColumns() {
    return this.getEntityColumns(this.filterParams);
  }

  get entityLabel() {
    return this.getLabelOfEntity(this.filterParams);
  }

  ngOnInit() {
    this.filterService.getFilms().subscribe((films: { results: Array<any> }) => {
      this.filmItems = films.results;
    });
  }

  onSelected(entity) {
    this.filterService.getObjectByValue(entity.name, this.filterParams).subscribe(
      result => {
        this.filmItemsFiltered = this.filmItems.filter(film => result?.films.includes(film.url));
      },
      err => console.error(err)
    );
  }

  private getEntityColumns(entity) {
    switch (entity) {
      case 'people':
        return this.characterColumns;
      case 'planets':
        return this.planetsColumns;
      case 'starships':
        return this.starshipsColumns;
    }
  }

  private getLabelOfEntity(entity): string {
    switch (entity) {
      case 'people':
        return 'character';
      case 'planets':
        return 'planet';
      case 'starships':
        return 'starship';
    }
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts"),t(),n(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupResponseApi, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupSwFilmsService implements PoLookupFilter {
  private baseUrl = 'https://swapi.dev/api';
  private filmsUrl = 'https://swapi.dev/api/films/';

  constructor(private http: HttpClient) {}

  getFilms() {
    return this.http.get(this.filmsUrl);
  }

  getFilteredItems({ filter, page, filterParams }: PoLookupFilteredItemsParams): Observable<PoLookupResponseApi> {
    const params = { page: page.toString() };

    if (filter) {
      params['search'] = filter;
    }

    return this.http.get(\`\${this.baseUrl}/\${filterParams}\`, { params }).pipe(
      map((response: { results: Array<any>; next: string }) => ({
        items: response.results,
        hasNext: !!response.next
      }))
    );
  }

  getObjectByValue(value: string, filterParams: any): Observable<any> {
    return this.http
      .get(\`\${this.baseUrl}/\${filterParams}/?search=\${value}\`)
      .pipe(map((response: { results: Array<any> }) => response.results[0]));
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-lookup-sw-films"),t(),i(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),c("ngClass",F(4,dt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Ae],encapsulation:2})}return a})();var Ne=(()=>{class a{http;constructor(r){this.http=r}getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(de("items"))}static \u0275fac=function(l){return new(l||a)(V(A))};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var He=(()=>{class a{service;loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];constructor(r){this.service=r}changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank")}static \u0275fac=function(l){return new(l||a)(f(Ne))};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:!1,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"po-lookup",1),g("ngModelChange",function(s){return v(o.multiLookup,s)||(o.multiLookup=s),s}),x("p-change",function(s){return o.changeOptions(s)}),t(),n(2,"po-container",2),i(3,"po-table",3),t()()),l&2&&(d(),b("ngModel",o.multiLookup),c("p-multiple",!0),d(2),c("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-loading",o.loading))},dependencies:[_,I,K,M,ee],encapsulation:2})}return a})();var ut=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Multiple"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-lookup
    class="po-md-6"
    name="lookup"
    [(ngModel)]="multiLookup"
    p-field-label="label"
    p-field-value="value"
    p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    p-label="Search a Hero"
    [p-multiple]="true"
    (p-change)="changeOptions($event)"
  ></po-lookup>
  <po-container class="po-md-6 po-mt-4">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-loading]="loading"
    ></po-table>
  </po-container>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

import { SamplePoLookupMultipleService } from './sample-po-lookup-multiple.service';

@Component({
  selector: 'sample-po-lookup-multiple',
  templateUrl: './sample-po-lookup-multiple.component.html',
  styles: [],
  standalone: false
})
export class SamplePoLookupMultipleComponent {
  loading: boolean = false;
  heroes: Array<any>;
  multiLookup: Array<any> = [1495831666871, 1405833068599];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name'
    }
  ];
  constructor(public service: SamplePoLookupMultipleService) {}

  changeOptions(event): void {
    this.loading = true;
    this.service.getHeroes(event).subscribe(
      result => {
        this.heroes = result;
      },
      err => console.error(err),
      () => (this.loading = false)
    );
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts"),t(),n(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupMultipleService {
  constructor(public http: HttpClient) {}

  getHeroes(data): Observable<any> {
    const values = data?.length ? data.toString() : data;
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes?value=\${values}\`).pipe(pluck('items'));
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-lookup-multiple"),t(),i(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),c("ngClass",F(4,ut,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,He],encapsulation:2})}return a})();var Be=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-doc"]],standalone:!1,decls:4619,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoTableColumnSpacing"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoLookupComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),n(24,"code"),e(25,"po-lookup"),t(),e(26," permite que o usu\xE1rio digite um valor e pressione a tecla "),n(27,"em"),e(28,"TAB"),t(),e(29,` para
buscar um registro.`),t(),n(30,"blockquote")(31,"p"),e(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),t()(),n(33,"blockquote")(34,"p"),e(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),n(36,"a",6),e(37,"modelo"),t(),e(38," como "),n(39,"code"),e(40,"pending"),t(),e(41,"."),t()(),n(42,"p"),e(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),n(44,"code"),e(45,"po-select"),t(),e(46," ou o "),n(47,"code"),e(48,"po-combo"),t(),e(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),n(50,"a",7),e(51,"Guia de implementa\xE7\xE3o das APIs TOTVS"),t(),e(52,"."),t(),n(53,"p"),e(54,"Importante:"),t(),n(55,"ul")(56,"li"),e(57,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),n(58,"pre")(59,"code"),e(60,`<po-lookup
[(ngModel)]="pessoa.nome"
[ngModelOptions]="{standalone: true}">
</po-lookup>`),t()()()(),n(61,"h4",8),e(62,"Tokens customiz\xE1veis"),t(),n(63,"p"),e(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(65,"blockquote")(66,"p"),e(67,"Para maiores informa\xE7\xF5es, acesse o guia "),n(68,"a",9),e(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(70,"."),t()(),n(71,"table")(72,"thead")(73,"tr")(74,"th"),e(75,"Propriedade"),t(),n(76,"th"),e(77,"Descri\xE7\xE3o"),t(),n(78,"th"),e(79,"Valor Padr\xE3o"),t()()(),n(80,"tbody")(81,"tr")(82,"td")(83,"strong"),e(84,"Default Values"),t()(),i(85,"td")(86,"td"),t(),n(87,"tr")(88,"td")(89,"code"),e(90,"--font-family"),t()(),n(91,"td"),e(92,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(93,"td")(94,"code"),e(95,"var(--font-family-theme)"),t()()(),n(96,"tr")(97,"td")(98,"code"),e(99,"--font-size"),t()(),n(100,"td"),e(101,"Tamanho da fonte"),t(),n(102,"td")(103,"code"),e(104,"var(--font-size-default)"),t()()(),n(105,"tr")(106,"td")(107,"code"),e(108,"--text-color-placeholder"),t()(),n(109,"td"),e(110,"Cor do texto no placeholder"),t(),n(111,"td")(112,"code"),e(113,"var(--color-neutral-light-30)"),t()()(),n(114,"tr")(115,"td")(116,"code"),e(117,"--color"),t()(),n(118,"td"),e(119,"Cor principal do lookup"),t(),n(120,"td")(121,"code"),e(122,"var(--color-neutral-dark-70)"),t()()(),n(123,"tr")(124,"td")(125,"code"),e(126,"--border-radius"),t()(),n(127,"td"),e(128,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),t(),n(129,"td")(130,"code"),e(131,"var(--border-radius-md)"),t()()(),n(132,"tr")(133,"td")(134,"code"),e(135,"--background"),t()(),n(136,"td"),e(137,"Cor de background"),t(),n(138,"td")(139,"code"),e(140,"var(--color-neutral-light-05)"),t()()(),n(141,"tr")(142,"td")(143,"code"),e(144,"--text-color"),t()(),n(145,"td"),e(146,"Cor do texto"),t(),n(147,"td")(148,"code"),e(149,"var(--color-neutral-dark-90)"),t()()(),n(150,"tr")(151,"td")(152,"code"),e(153,"--color-clear"),t()(),n(154,"td"),e(155,"Cor principal do icone clear"),t(),n(156,"td")(157,"code"),e(158,"var(--color-action-default)"),t()()(),n(159,"tr")(160,"td")(161,"strong"),e(162,"Icon"),t()(),i(163,"td")(164,"td"),t(),n(165,"tr")(166,"td")(167,"code"),e(168,"--color-icon"),t()(),n(169,"td"),e(170,"Cor principal do icone pesquisar"),t(),n(171,"td")(172,"code"),e(173,"var(--color-action-default)"),t()()(),n(174,"tr")(175,"td")(176,"strong"),e(177,"Hover"),t()(),i(178,"td")(179,"td"),t(),n(180,"tr")(181,"td")(182,"code"),e(183,"--color-hover"),t()(),n(184,"td"),e(185,"Cor principal no estado hover"),t(),n(186,"td")(187,"code"),e(188,"var(--color-action-hover)"),t()()(),n(189,"tr")(190,"td")(191,"code"),e(192,"--background-hover"),t()(),n(193,"td"),e(194,"Cor de background no estado hover"),t(),n(195,"td")(196,"code"),e(197,"var(--color-brand-01-lightest)"),t()()(),n(198,"tr")(199,"td")(200,"strong"),e(201,"Focused"),t()(),i(202,"td")(203,"td"),t(),n(204,"tr")(205,"td")(206,"code"),e(207,"--color-focused"),t()(),n(208,"td"),e(209,"Cor principal no estado de focus"),t(),n(210,"td")(211,"code"),e(212,"var(--color-action-default)"),t()()(),n(213,"tr")(214,"td")(215,"code"),e(216,"--outline-color-focused"),t()(),n(217,"td"),e(218,"Cor do outline do estado de focus"),t(),n(219,"td")(220,"code"),e(221,"var(--color-action-focus)"),t()()(),n(222,"tr")(223,"td")(224,"strong"),e(225,"Disabled"),t()(),i(226,"td")(227,"td"),t(),n(228,"tr")(229,"td")(230,"code"),e(231,"--color-disabled"),t()(),n(232,"td"),e(233,"Cor principal no estado disabled"),t(),n(234,"td")(235,"code"),e(236,"var(--color-action-disabled)"),t()()(),n(237,"tr")(238,"td")(239,"code"),e(240,"--background-disabled"),t()(),n(241,"td"),e(242,"Cor de background no estado disabled"),t(),n(243,"td")(244,"code"),e(245,"var(--color-neutral-light-20)"),t()()(),n(246,"tr")(247,"td")(248,"code"),e(249,"--text-color-disabled"),t()(),n(250,"td"),e(251,"Cor do texto quando campo est\xE1 desabilitado"),t(),n(252,"td")(253,"code"),e(254,"var(--color-action-disabled)"),t()()(),n(255,"tr")(256,"td")(257,"strong"),e(258,"Error"),t()(),i(259,"td")(260,"td"),t(),n(261,"tr")(262,"td")(263,"code"),e(264,"--color-error"),t()(),n(265,"td"),e(266,"Cor de background no estado de requerido"),t(),n(267,"td")(268,"code"),e(269,"var(--color-feedback-negative-base)"),t()()()()()(),n(270,"div",10)(271,"h4",11),e(272,"Seletor"),t(),n(273,"pre",12),e(274,`<po-lookup
    p-advanced-filters="Array<PoLookupAdvancedFilter>"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-change)="EventEmitter"
    (p-change-visible-columns)="EventEmitter"
    p-clean="boolean"
    (p-restore-column-manager)="EventEmitter"
    p-columns="Array<PoLookupColumn>"
    p-disabled="boolean"
    p-field-error-message="string"
    p-field-format="((value) => string) | Array<string>"
    p-field-label="string"
    p-field-value="string"
    p-filter-params="any"
    p-filter-service="string | PoLookupFilter"
    p-help="string"
    p-hide-columns-manager="boolean"
    p-infinite-scroll="boolean"
    p-label="string"
    p-literals="PoLookupLiterals"
    p-multiple="boolean"
    name="string"
    p-no-autocomplete="boolean"
    (p-error)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-required="boolean"
    (p-selected)="EventEmitter"
    p-show-required="boolean"
    p-spacing="PoTableColumnSpacing"
    p-text-wrap="boolean"
    p-virtual-scroll="boolean" >
</po-lookup>
`),t()(),n(275,"h4",13),e(276,"Propriedades"),t(),n(277,"table",14)(278,"tr",15)(279,"th",16),e(280,"Nome"),t(),n(281,"th",16),e(282,"Tipo"),t(),n(283,"th",16),e(284,"Padr\xE3o"),t(),n(285,"th",16),e(286,"Descri\xE7\xE3o"),t()(),n(287,"tr",17)(288,"td",18)(289,"div",19)(290,"span",20),e(291," p-advanced-filters"),i(292,"br"),t()()(),n(293,"td",21)(294,"code",22),e(295,"Array<PoLookupAdvancedFilter>"),t()(),n(296,"td",23),e(297,"-"),t(),n(298,"td",24)(299,"em")(300,"strong"),e(301,"(opcional)"),t()(),n(302,"p"),e(303,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),n(304,"blockquote")(305,"p"),e(306,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),n(307,"p"),e(308,"Exemplo de URL com busca avan\xE7ada:"),t(),n(309,"pre")(310,"code"),e(311,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),n(312,"p"),e(313,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),t(),n(314,"pre")(315,"code"),e(316,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),n(317,"tr",17)(318,"td",18)(319,"div",19)(320,"span",20),e(321," p-auto-focus"),i(322,"br"),t()()(),n(323,"td",21)(324,"code",25),e(325,"boolean"),t()(),n(326,"td",23)(327,"p")(328,"code"),e(329,"false"),t()()(),n(330,"td",24)(331,"em")(332,"strong"),e(333,"(opcional)"),t()(),n(334,"p"),e(335,"Aplica foco no elemento ao ser iniciado."),t(),n(336,"blockquote")(337,"p"),e(338,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(339,"tr",17)(340,"td",18)(341,"div",19)(342,"span",20),e(343," p-auto-height"),i(344,"br"),t()()(),n(345,"td",21)(346,"code",25),e(347,"boolean"),t()(),n(348,"td",23)(349,"p")(350,"code"),e(351,"false"),t()()(),n(352,"td",24)(353,"em")(354,"strong"),e(355,"(opcional)"),t()(),n(356,"p"),e(357,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),t()()(),n(358,"tr",17)(359,"td",18)(360,"div",26)(361,"span",27),e(362," (p-change)"),i(363,"br"),t()()(),n(364,"td",21)(365,"code",28),e(366,"EventEmitter"),t()(),n(367,"td",23),e(368,"-"),t(),n(369,"td",24)(370,"em")(371,"strong"),e(372,"(opcional)"),t()(),n(373,"p"),e(374,"Evento que ser\xE1 disparado ao alterar o model. Por par\xE2metro ser\xE1 passado o novo valor."),t()()(),n(375,"tr",17)(376,"td",18)(377,"div",26)(378,"span",27),e(379," (p-change-visible-columns)"),i(380,"br"),t()()(),n(381,"td",21)(382,"code",28),e(383,"EventEmitter"),t()(),n(384,"td",23),e(385,"-"),t(),n(386,"td",24)(387,"em")(388,"strong"),e(389,"(opcional)"),t()(),n(390,"p"),e(391,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),n(392,"p"),e(393,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),n(394,"tr",17)(395,"td",18)(396,"div",19)(397,"span",20),e(398," p-clean"),i(399,"br"),t()()(),n(400,"td",21)(401,"code",25),e(402,"boolean"),t()(),n(403,"td",23),e(404,"-"),t(),n(405,"td",24)(406,"p"),e(407,"Exibe um \xEDcone que permite limpar o campo."),t()()(),n(408,"tr",17)(409,"td",18)(410,"div",26)(411,"span",27),e(412," (p-restore-column-manager)"),i(413,"br"),t()()(),n(414,"td",21)(415,"code",28),e(416,"EventEmitter"),t()(),n(417,"td",23),e(418,"-"),t(),n(419,"td",24)(420,"em")(421,"strong"),e(422,"(opcional)"),t()(),n(423,"p"),e(424,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),n(425,"p"),e(426,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),n(427,"tr",17)(428,"td",18)(429,"div",19)(430,"span",20),e(431," p-columns"),i(432,"br"),t()()(),n(433,"td",21)(434,"code",29),e(435,"Array<PoLookupColumn>"),t()(),n(436,"td",23),e(437,"-"),t(),n(438,"td",24)(439,"em")(440,"strong"),e(441,"(opcional)"),t()(),n(442,"p"),e(443,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),t()()(),n(444,"tr",17)(445,"td",18)(446,"div",19)(447,"span",20),e(448," p-disabled"),i(449,"br"),t()()(),n(450,"td",21)(451,"code",25),e(452,"boolean"),t()(),n(453,"td",23)(454,"p"),e(455,"false"),t()(),n(456,"td",24)(457,"em")(458,"strong"),e(459,"(opcional)"),t()(),n(460,"p"),e(461,"Indica que o campo ser\xE1 desabilitado."),t()()(),n(462,"tr",17)(463,"td",18)(464,"div",19)(465,"span",20),e(466," p-field-error-message"),i(467,"br"),t()()(),n(468,"td",21)(469,"code",30),e(470,"string"),t()(),n(471,"td",23),e(472,"-"),t(),n(473,"td",24)(474,"em")(475,"strong"),e(476,"(opcional)"),t()(),n(477,"p"),e(478,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),n(479,"blockquote")(480,"p"),e(481,"Necess\xE1rio que a propriedade "),n(482,"code"),e(483,"p-required"),t(),e(484," esteja habilitada."),t()()()(),n(485,"tr",17)(486,"td",18)(487,"div",19)(488,"span",20),e(489," p-field-format"),i(490,"br"),t()()(),n(491,"td",21)(492,"code",31),e(493,"((value) => string) "),t(),n(494,"code",32),e(495," Array<string>"),t()(),n(496,"td",23),e(497,"-"),t(),n(498,"td",24)(499,"em")(500,"strong"),e(501,"(opcional)"),t()(),n(502,"p"),e(503,"Formato de exibi\xE7\xE3o do campo."),t(),n(504,"p"),e(505,"Recebe uma fun\xE7\xE3o que deve retornar uma "),n(506,"em"),e(507,"string"),t(),e(508," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),n(509,"pre")(510,"code"),e(511,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}"),t()(),n(512,"blockquote")(513,"p"),e(514,"Esta propriedade sobrep\xF5e o valor da propriedade "),n(515,"code"),e(516,"p-field-label"),t(),e(517," na descri\xE7\xE3o do campo."),t()(),n(518,"p"),e(519,"Pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo, Por exemplo:"),t(),n(520,"pre")(521,"code"),e(522,`<po-lookup
 ...
 [p-field-format]="['id','nickname']"
 ...
>

Objeto retornado:
  {
     id:123,
     name: 'Kakaroto',
     nickname: 'Goku',
  }
Apresenta\xE7\xE3o no campo: 123 - Goku`),t()(),n(523,"blockquote")(524,"p"),e(525,"Ser\xE1 utilizado "),n(526,"code"),e(527,"-"),t(),e(528," como separador."),t()()()(),n(529,"tr",17)(530,"td",18)(531,"div",19)(532,"span",20),e(533," p-field-label"),i(534,"br"),t()()(),n(535,"td",21)(536,"code",30),e(537,"string"),t()(),n(538,"td",23),e(539,"-"),t(),n(540,"td",24)(541,"p"),e(542,"Indica a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e como filtro dentro da janela."),t()()(),n(543,"tr",17)(544,"td",18)(545,"div",19)(546,"span",20),e(547," p-field-value"),i(548,"br"),t()()(),n(549,"td",21)(550,"code",30),e(551,"string"),t()(),n(552,"td",23),e(553,"-"),t(),n(554,"td",24)(555,"p"),e(556,"Indica a coluna que ser\xE1 utilizada como valor do campo."),t(),n(557,"blockquote")(558,"p"),e(559,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),n(560,"tr",17)(561,"td",18)(562,"div",19)(563,"span",20),e(564," p-filter-params"),i(565,"br"),t()()(),n(566,"td",21)(567,"code",33),e(568,"any"),t()(),n(569,"td",23),e(570,"-"),t(),n(571,"td",24)(572,"em")(573,"strong"),e(574,"(opcional)"),t()(),n(575,"p"),e(576,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),n(577,"code"),e(578,"PoLookupFilter"),t(),e(579,"."),t()()(),n(580,"tr",17)(581,"td",18)(582,"div",19)(583,"span",20),e(584," p-filter-service"),i(585,"br"),t()()(),n(586,"td",21)(587,"code",30),e(588,"string "),t(),n(589,"code",34),e(590," PoLookupFilter"),t()(),n(591,"td",23),e(592,"-"),t(),n(593,"td",24)(594,"p"),e(595,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),n(596,"code"),e(597,"PoLookupFilter"),t(),e(598," ou uma URL."),t(),n(599,"p"),e(600,"Quando utilizada uma URL de um servi\xE7o, ser\xE1 concatenada nesta URL o valor que deseja-se filtrar, por exemplo:"),t(),n(601,"pre")(602,"code"),e(603,"url + ?page=1&pageSize=20&filter=Peter"),t()(),n(604,"p"),e(605,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),n(606,"code"),e(607,"order"),t(),e(608,", por exemplo:"),t(),n(609,"ul")(610,"li")(611,"p"),e(612,"Coluna decrescente:"),t(),n(613,"pre")(614,"code"),e(615,"url + ?page=1&pageSize=20&filter=Peter&order=-name"),t()()(),n(616,"li")(617,"p"),e(618,"Coluna ascendente:"),t(),n(619,"pre")(620,"code"),e(621,"url + ?page=1&pageSize=20&filter=Peter&order=name"),t()()()(),n(622,"p"),e(623,"Se for definido a propriedade "),n(624,"code"),e(625,"p-filter-params"),t(),e(626,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),n(627,"code"),e(628,"{ age: 23 }"),t(),e(629," a URL ficaria:"),t(),n(630,"pre")(631,"code"),e(632,"url + ?page=1&pageSize=20&age=23&filter=Peter"),t()(),n(633,"p"),e(634,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),t(),n(635,"pre")(636,"code"),e(637,`model = 1234;

GET url/1234`),t()(),n(638,"p"),e(639,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),t(),n(640,"pre")(641,"code"),e(642,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678`),t()(),n(643,"blockquote")(644,"p"),e(645,"Esta URL deve retornar e receber os dados no padr\xE3o de "),n(646,"a",7),e(647,"API do PO UI"),t(),e(648,` e utiliza os valores
definidos nas propriedades `),n(649,"code"),e(650,"p-field-label"),t(),e(651," e "),n(652,"code"),e(653,"p-field-value"),t(),e(654," para a constru\xE7\xE3o do "),n(655,"code"),e(656,"po-lookup"),t(),e(657,"."),t()(),n(658,"p"),e(659,"Caso o usu\xE1rio digite um valor e pressione a tecla "),n(660,"em"),e(661,"TAB"),t(),e(662,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),n(663,"a",35),e(664,"encodeURIComponent"),t(),e(665,`
e concatenado na URL da seguinte forma:`),t(),n(666,"pre")(667,"code"),e(668,"url/valor%20que%20se%20deseja%20filtrar"),t()(),n(669,"blockquote")(670,"p"),e(671,"Quando informado um servi\xE7o que implemente a interface "),n(672,"code"),e(673,"PoLookupFilter"),t(),e(674," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),t()()()(),n(675,"tr",17)(676,"td",18)(677,"div",19)(678,"span",20),e(679," p-help"),i(680,"br"),t()()(),n(681,"td",21)(682,"code",30),e(683,"string"),t()(),n(684,"td",23),e(685,"-"),t(),n(686,"td",24)(687,"em")(688,"strong"),e(689,"(opcional)"),t()(),n(690,"p"),e(691,"Texto de apoio do campo."),t()()(),n(692,"tr",17)(693,"td",18)(694,"div",19)(695,"span",20),e(696," p-hide-columns-manager"),i(697,"br"),t()()(),n(698,"td",21)(699,"code",25),e(700,"boolean"),t()(),n(701,"td",23)(702,"p")(703,"code"),e(704,"false"),t()()(),n(705,"td",24)(706,"em")(707,"strong"),e(708,"(opcional)"),t()(),n(709,"p"),e(710,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),t()()(),n(711,"tr",17)(712,"td",18)(713,"div",19)(714,"span",20),e(715," p-infinite-scroll"),i(716,"br"),t()()(),n(717,"td",21)(718,"code",25),e(719,"boolean"),t()(),n(720,"td",23)(721,"p")(722,"code"),e(723,"false"),t()()(),n(724,"td",24)(725,"em")(726,"strong"),e(727,"(opcional)"),t()(),n(728,"p"),e(729,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),t()()(),n(730,"tr",17)(731,"td",18)(732,"div",19)(733,"span",20),e(734," p-label"),i(735,"br"),t()()(),n(736,"td",21)(737,"code",30),e(738,"string"),t()(),n(739,"td",23),e(740,"-"),t(),n(741,"td",24)(742,"em")(743,"strong"),e(744,"(opcional)"),t()(),n(745,"p"),e(746,"Label do campo."),t(),n(747,"blockquote")(748,"p"),e(749,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),n(750,"code"),e(751,"modalTitle"),t(),e(752," na propriedade "),n(753,"code"),e(754,"p-literals"),t(),e(755,"."),t()()()(),n(756,"tr",17)(757,"td",18)(758,"div",19)(759,"span",20),e(760," p-literals"),i(761,"br"),t()()(),n(762,"td",21)(763,"code",36),e(764,"PoLookupLiterals"),t()(),n(765,"td",23),e(766,"-"),t(),n(767,"td",24)(768,"p"),e(769,"Objeto com as literais usadas no "),n(770,"code"),e(771,"po-lookup"),t(),e(772,"."),t(),n(773,"p"),e(774,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),n(775,"pre")(776,"code"),e(777,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select',
  modalSecondaryActionLabel: 'Cancel',
  modalPlaceholder: 'Search Value',
  modalTableNoColumns: 'No columns',
  modalTableNoData: 'No data',
  modalTableLoadingData: 'Loading data',
  modalTableLoadMoreData: 'Load more',
  modalTitle: 'Select a user',
  modalAdvancedSearch: 'Advanced search',
  modalAdvancedSearchTitle: 'Advanced search',
  modalAdvancedSearchPrimaryActionLabel: 'Filter',
  modalAdvancedSearchSecondaryActionLabel: 'Return',
  modalDisclaimerGroupTitle: 'Presenting results filtered by:'
};`),t()(),n(778,"p"),e(779,"Ou passando apenas as literais que deseja customizar:"),t(),n(780,"pre")(781,"code"),e(782,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};`),t()(),n(783,"p"),e(784,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),n(785,"pre")(786,"code"),e(787,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>`),t()(),n(788,"blockquote")(789,"p"),e(790,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),n(791,"a",37)(792,"code"),e(793,"PoI18nService"),t()(),e(794," ou do browser."),t()()()(),n(795,"tr",17)(796,"td",18)(797,"div",19)(798,"span",20),e(799," p-multiple"),i(800,"br"),t()()(),n(801,"td",21)(802,"code",25),e(803,"boolean"),t()(),n(804,"td",23)(805,"p")(806,"code"),e(807,"false"),t()()(),n(808,"td",24)(809,"em")(810,"strong"),e(811,"(opcional)"),t()(),n(812,"p"),e(813,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),n(814,"blockquote")(815,"p"),e(816,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),n(817,"code"),e(818,"[ 12345, 67890 ]"),t()()()()(),n(819,"tr",17)(820,"td",18)(821,"div",19)(822,"span",20),e(823," name"),i(824,"br"),t()()(),n(825,"td",21)(826,"code",30),e(827,"string"),t()(),n(828,"td",23),e(829,"-"),t(),n(830,"td",24)(831,"p"),e(832,"Nome e Id do componente."),t()()(),n(833,"tr",17)(834,"td",18)(835,"div",19)(836,"span",20),e(837," p-no-autocomplete"),i(838,"br"),t()()(),n(839,"td",21)(840,"code",25),e(841,"boolean"),t()(),n(842,"td",23)(843,"p")(844,"code"),e(845,"false"),t()()(),n(846,"td",24)(847,"em")(848,"strong"),e(849,"(opcional)"),t()(),n(850,"p"),e(851,"Define a propriedade nativa "),n(852,"code"),e(853,"autocomplete"),t(),e(854," do campo como "),n(855,"code"),e(856,"off"),t(),e(857,"."),t()()(),n(858,"tr",17)(859,"td",18)(860,"div",26)(861,"span",27),e(862," (p-error)"),i(863,"br"),t()()(),n(864,"td",21)(865,"code",28),e(866,"EventEmitter"),t()(),n(867,"td",23),e(868,"-"),t(),n(869,"td",24)(870,"p"),e(871,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),n(872,"tr",17)(873,"td",18)(874,"div",19)(875,"span",20),e(876," p-optional"),i(877,"br"),t()()(),n(878,"td",21)(879,"code",25),e(880,"boolean"),t()(),n(881,"td",23)(882,"p")(883,"code"),e(884,"false"),t()()(),n(885,"td",24)(886,"em")(887,"strong"),e(888,"(opcional)"),t()(),n(889,"p"),e(890,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(891,"blockquote")(892,"p"),e(893,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(894,"ul")(895,"li"),e(896,"O campo conter "),n(897,"code"),e(898,"p-required"),t(),e(899,";"),t(),n(900,"li"),e(901,"N\xE3o possuir "),n(902,"code"),e(903,"p-help"),t(),e(904," e/ou "),n(905,"code"),e(906,"p-label"),t(),e(907,"."),t()()()(),n(908,"tr",17)(909,"td",18)(910,"div",19)(911,"span",20),e(912," p-placeholder"),i(913,"br"),t()()(),n(914,"td",21)(915,"code",30),e(916,"string"),t()(),n(917,"td",23),e(918,"-"),t(),n(919,"td",24)(920,"p"),e(921,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(922,"tr",17)(923,"td",18)(924,"div",19)(925,"span",20),e(926," p-required"),i(927,"br"),t()()(),n(928,"td",21)(929,"code",25),e(930,"boolean"),t()(),n(931,"td",23)(932,"p")(933,"code"),e(934,"false"),t()()(),n(935,"td",24)(936,"em")(937,"strong"),e(938,"(opcional)"),t()(),n(939,"p"),e(940,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(941,"blockquote")(942,"p"),e(943,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(944,"code"),e(945,"(p-disabled)"),t(),e(946,"."),t()()()(),n(947,"tr",17)(948,"td",18)(949,"div",26)(950,"span",27),e(951," (p-selected)"),i(952,"br"),t()()(),n(953,"td",21)(954,"code",28),e(955,"EventEmitter"),t()(),n(956,"td",23),e(957,"-"),t(),n(958,"td",24)(959,"em")(960,"strong"),e(961,"(opcional)"),t()(),n(962,"p"),e(963,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),t()()(),n(964,"tr",17)(965,"td",18)(966,"div",19)(967,"span",20),e(968," p-show-required"),i(969,"br"),t()()(),n(970,"td",21)(971,"code",25),e(972,"boolean"),t()(),n(973,"td",23),e(974,"-"),t(),n(975,"td",24)(976,"p"),e(977,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),t(),n(978,"blockquote")(979,"p"),e(980,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(981,"ul")(982,"li"),e(983,"N\xE3o possuir "),n(984,"code"),e(985,"p-help"),t(),e(986," e/ou "),n(987,"code"),e(988,"p-label"),t(),e(989,"."),t()()()(),n(990,"tr",17)(991,"td",18)(992,"div",19)(993,"span",20),e(994," p-spacing"),i(995,"br"),t()()(),n(996,"td",21)(997,"code",38),e(998,"PoTableColumnSpacing"),t()(),n(999,"td",23)(1e3,"p")(1001,"code"),e(1002,"medium"),t()()(),n(1003,"td",24)(1004,"em")(1005,"strong"),e(1006,"(opcional)"),t()(),n(1007,"p"),e(1008,"Respons\xE1vel por aplicar espa\xE7amento nas colunas da tabela contida no lookup."),t(),n(1009,"p"),e(1010,"Deve receber um dos valores do enum "),n(1011,"code"),e(1012,"PoTableColumnSpacing"),t(),e(1013,"."),t()()(),n(1014,"tr",17)(1015,"td",18)(1016,"div",19)(1017,"span",20),e(1018," p-text-wrap"),i(1019,"br"),t()()(),n(1020,"td",21)(1021,"code",25),e(1022,"boolean"),t()(),n(1023,"td",23)(1024,"p")(1025,"code"),e(1026,"false"),t()()(),n(1027,"td",24)(1028,"em")(1029,"strong"),e(1030,"(opcional)"),t()(),n(1031,"p"),e(1032,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t(),n(1033,"p"),e(1034,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),t(),n(1035,"blockquote")(1036,"p"),e(1037,"Incompat\xEDvel com "),n(1038,"code"),e(1039,"virtual-scroll"),t(),e(1040,", que requer altura fixa nas linhas."),t()()()(),n(1041,"tr",17)(1042,"td",18)(1043,"div",19)(1044,"span",20),e(1045," p-virtual-scroll"),i(1046,"br"),t()()(),n(1047,"td",21)(1048,"code",25),e(1049,"boolean"),t()(),n(1050,"td",23)(1051,"p")(1052,"code"),e(1053,"true"),t()()(),n(1054,"td",24)(1055,"em")(1056,"strong"),e(1057,"(opcional)"),t()(),n(1058,"p"),e(1059,"Habilita o "),n(1060,"code"),e(1061,"virtual-scroll"),t(),e(1062,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),n(1063,"code"),e(1064,"virtual-scroll"),t(),e(1065," ser\xE1 ativado automaticamente."),t(),n(1066,"blockquote")(1067,"p"),e(1068,"Incompat\xEDvel com "),n(1069,"code"),e(1070,"p-text-wrap"),t(),e(1071," e "),n(1072,"code"),e(1073,"master-detail"),t(),e(1074,", pois o "),n(1075,"code"),e(1076,"virtual-scroll"),t(),e(1077," exige altura fixa nas linhas."),t()()()()(),n(1078,"h3",13),e(1079,"M\xE9todos"),t(),n(1080,"table",39)(1081,"tr",17)(1082,"th",40)(1083,"div",19)(1084,"h4")(1085,"span",20),e(1086," focus "),t()()()()(),n(1087,"tr",24)(1088,"td",24)(1089,"p"),e(1090,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1091,"p"),e(1092,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1093,"pre")(1094,"code"),e(1095,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}`),t()()()()(),i(1096,"br"),n(1097,"h3"),e(1098,"Interfaces"),t(),n(1099,"h4",41)(1100,"code",5),e(1101,"PoLookupAdvancedFilter"),t()(),n(1102,"div",2)(1103,"p"),e(1104," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),t()(),n(1105,"h4",13),e(1106,"Propriedades"),t(),n(1107,"table",14)(1108,"tr",15)(1109,"th",16),e(1110,"Nome"),t(),n(1111,"th",16),e(1112,"Tipo"),t(),n(1113,"th",16),e(1114,"Descri\xE7\xE3o"),t()(),n(1115,"tr",17)(1116,"td",18)(1117,"div",19)(1118,"span",20),e(1119," advancedFilters"),i(1120,"br"),t()()(),n(1121,"td",21)(1122,"code",22),e(1123,"Array<PoLookupAdvancedFilter>"),t()(),n(1124,"td",24)(1125,"em")(1126,"strong"),e(1127,"(opcional)"),t()(),n(1128,"p"),e(1129,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),n(1130,"blockquote")(1131,"p"),e(1132,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),n(1133,"p"),e(1134,"Exemplo de URL com busca avan\xE7ada:"),t(),n(1135,"p")(1136,"code"),e(1137,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),n(1138,"p"),e(1139,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),n(1140,"p")(1141,"code"),e(1142,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),n(1143,"tr",17)(1144,"td",18)(1145,"div",19)(1146,"span",20),e(1147," autoHeight"),i(1148,"br"),t()()(),n(1149,"td",21)(1150,"code",25),e(1151,"boolean"),t()(),n(1152,"td",24)(1153,"em")(1154,"strong"),e(1155,"(opcional)"),t()(),n(1156,"p"),e(1157,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),n(1158,"p")(1159,"strong"),e(1160,"Componentes compat\xEDveis:"),t(),n(1161,"code"),e(1162,"po-multiselect"),t(),e(1163,", "),n(1164,"code"),e(1165,"po-lookup"),t(),e(1166,"."),t()()(),n(1167,"tr",17)(1168,"td",18)(1169,"div",19)(1170,"span",20),e(1171," autoUpload"),i(1172,"br"),t()()(),n(1173,"td",21)(1174,"code",25),e(1175,"boolean"),t()(),n(1176,"td",24)(1177,"em")(1178,"strong"),e(1179,"(opcional)"),t()(),n(1180,"p"),e(1181,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),n(1182,"p")(1183,"strong"),e(1184,"Componente compat\xEDvel"),t(),e(1185,": "),n(1186,"code"),e(1187,"po-upload"),t()()()(),n(1188,"tr",17)(1189,"td",18)(1190,"div",19)(1191,"span",20),e(1192," booleanFalse"),i(1193,"br"),t()()(),n(1194,"td",21)(1195,"code",30),e(1196,"string"),t()(),n(1197,"td",24)(1198,"em")(1199,"strong"),e(1200,"(opcional)"),t()(),n(1201,"p"),e(1202,"Texto exibido quando o valor do componente for "),n(1203,"em"),e(1204,"false"),t(),e(1205,"."),t()()(),n(1206,"tr",17)(1207,"td",18)(1208,"div",19)(1209,"span",20),e(1210," booleanTrue"),i(1211,"br"),t()()(),n(1212,"td",21)(1213,"code",30),e(1214,"string"),t()(),n(1215,"td",24)(1216,"em")(1217,"strong"),e(1218,"(opcional)"),t()(),n(1219,"p"),e(1220,"Texto exibido quando o valor do componente for "),n(1221,"em"),e(1222,"true"),t(),e(1223,"."),t()()(),n(1224,"tr",17)(1225,"td",18)(1226,"div",19)(1227,"span",20),e(1228," changeOnEnter"),i(1229,"br"),t()()(),n(1230,"td",21)(1231,"code",25),e(1232,"boolean"),t()(),n(1233,"td",24)(1234,"em")(1235,"strong"),e(1236,"(opcional)"),t()(),n(1237,"p"),e(1238,"Indica que o evento "),n(1239,"code"),e(1240,"p-change"),t(),e(1241,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),n(1242,"code"),e(1243,"po-combo"),t(),e(1244,"."),t()()(),n(1245,"tr",17)(1246,"td",18)(1247,"div",19)(1248,"span",20),e(1249," changeVisibleColumns"),i(1250,"br"),t()()(),n(1251,"td",21)(1252,"code",42),e(1253,"Function"),t()(),n(1254,"td",24)(1255,"em")(1256,"strong"),e(1257,"(opcional)"),t()(),n(1258,"p"),e(1259,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),n(1260,"p"),e(1261,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(1262,"p")(1263,"strong"),e(1264,"Componentes compat\xEDveis"),t(),e(1265,": "),n(1266,"code"),e(1267,"po-lookup"),t()()()(),n(1268,"tr",17)(1269,"td",18)(1270,"div",19)(1271,"span",20),e(1272," clean"),i(1273,"br"),t()()(),n(1274,"td",21)(1275,"code",25),e(1276,"boolean"),t()(),n(1277,"td",24)(1278,"em")(1279,"strong"),e(1280,"(opcional)"),t()(),n(1281,"p"),e(1282,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),n(1283,"p")(1284,"strong"),e(1285,"Componentes compat\xEDveis:"),t(),n(1286,"code"),e(1287,"po-datepicker"),t(),e(1288,", "),n(1289,"code"),e(1290,"po-datepicker-range"),t(),e(1291,", "),n(1292,"code"),e(1293,"po-input"),t(),e(1294,", "),n(1295,"code"),e(1296,"po-number"),t(),e(1297,", "),n(1298,"code"),e(1299,"po-decimal"),t(),e(1300,", "),n(1301,"code"),e(1302,"po-combo"),t(),e(1303,", "),n(1304,"code"),e(1305,"po-lookup"),t(),e(1306,", "),n(1307,"code"),e(1308,"po-password"),t()()()(),n(1309,"tr",17)(1310,"td",18)(1311,"div",19)(1312,"span",20),e(1313," columnRestoreManager"),i(1314,"br"),t()()(),n(1315,"td",21)(1316,"code",42),e(1317,"Function"),t()(),n(1318,"td",24)(1319,"em")(1320,"strong"),e(1321,"(opcional)"),t()(),n(1322,"p"),e(1323,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),n(1324,"p"),e(1325,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(1326,"p")(1327,"strong"),e(1328,"Componentes compat\xEDveis"),t(),e(1329,": "),n(1330,"code"),e(1331,"po-lookup"),t()()()(),n(1332,"tr",17)(1333,"td",18)(1334,"div",19)(1335,"span",20),e(1336," columns"),i(1337,"br"),t()()(),n(1338,"td",21)(1339,"code",29),e(1340,"Array<PoLookupColumn> "),t(),n(1341,"code",43),e(1342," number"),t()(),n(1343,"td",24)(1344,"em")(1345,"strong"),e(1346,"(opcional)"),t()(),n(1347,"p"),e(1348,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),n(1349,"code"),e(1350,"searchService"),t(),e(1351,`,
essa propriedade deve receber um array de objetos que implementam a interface `),n(1352,"a",44)(1353,"code"),e(1354,"PoLookupColumn"),t()(),e(1355,"."),t(),n(1356,"blockquote")(1357,"p"),e(1358,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),n(1359,"em"),e(1360,"label"),t(),e(1361," e "),n(1362,"em"),e(1363,"value"),t(),e(1364,` para valores
de tela e do model respectivamente.`),t()(),n(1365,"p")(1366,"strong"),e(1367,"Componentes compat\xEDveis:"),t(),n(1368,"code"),e(1369,"po-radio-group"),t(),e(1370,", "),n(1371,"code"),e(1372,"po-lookup"),t(),e(1373,", "),n(1374,"code"),e(1375,"po-checkbox-group"),t(),e(1376,"."),t()()(),n(1377,"tr",17)(1378,"td",18)(1379,"div",19)(1380,"span",20),e(1381," container"),i(1382,"br"),t()()(),n(1383,"td",21)(1384,"code",30),e(1385,"string"),t()(),n(1386,"td",24)(1387,"em")(1388,"strong"),e(1389,"(opcional)"),t()(),n(1390,"p"),e(1391,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),n(1392,"p"),e(1393,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),n(1394,"tr",17)(1395,"td",18)(1396,"div",19)(1397,"span",20),e(1398," debounceTime"),i(1399,"br"),t()()(),n(1400,"td",21)(1401,"code",43),e(1402,"number"),t()(),n(1403,"td",24)(1404,"em")(1405,"strong"),e(1406,"(opcional)"),t()(),n(1407,"p"),e(1408,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),n(1409,"code"),e(1410,"p-filter-service"),t(),e(1411,")."),t(),n(1412,"p")(1413,"strong"),e(1414,"Componentes compat\xEDveis:"),t(),n(1415,"code"),e(1416,"po-combo"),t(),e(1417,", "),n(1418,"code"),e(1419,"po-multiselect"),t(),e(1420,"."),t()()(),n(1421,"tr",17)(1422,"td",18)(1423,"div",19)(1424,"span",20),e(1425," decimalsLength"),i(1426,"br"),t()()(),n(1427,"td",21)(1428,"code",43),e(1429,"number"),t()(),n(1430,"td",24)(1431,"em")(1432,"strong"),e(1433,"(opcional)"),t()(),n(1434,"p"),e(1435,"Quantidade m\xE1xima de casas decimais."),t(),n(1436,"blockquote")(1437,"p"),e(1438,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(1439,"code"),e(1440,"type"),t(),e(1441," for "),n(1442,"em"),e(1443,"currency"),t(),e(1444," ou "),n(1445,"em"),e(1446,"decimal"),t(),e(1447,"."),t()()()(),n(1448,"tr",17)(1449,"td",18)(1450,"div",19)(1451,"span",20),e(1452," directory"),i(1453,"br"),t()()(),n(1454,"td",21)(1455,"code",25),e(1456,"boolean"),t()(),n(1457,"td",24)(1458,"em")(1459,"strong"),e(1460,"(opcional)"),t()(),n(1461,"p"),e(1462,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(1463,"blockquote")(1464,"p"),e(1465,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(1466,"blockquote")(1467,"p"),e(1468,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(1469,"strong"),e(1470,"Internet Explorer"),t(),e(1471,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),n(1472,"p")(1473,"strong"),e(1474,"Componente compat\xEDvel"),t(),e(1475,": "),n(1476,"code"),e(1477,"po-upload"),t()()()(),n(1478,"tr",17)(1479,"td",18)(1480,"div",19)(1481,"span",20),e(1482," disabled"),i(1483,"br"),t()()(),n(1484,"td",21)(1485,"code",25),e(1486,"boolean"),t()(),n(1487,"td",24)(1488,"em")(1489,"strong"),e(1490,"(opcional)"),t()(),n(1491,"p"),e(1492,"Desabilita o campo caso informar o valor "),n(1493,"em"),e(1494,"true"),t(),e(1495,"."),t()()(),n(1496,"tr",17)(1497,"td",18)(1498,"div",19)(1499,"span",20),e(1500," disabledInitFilter"),i(1501,"br"),t()()(),n(1502,"td",21)(1503,"code",25),e(1504,"boolean"),t()(),n(1505,"td",24)(1506,"em")(1507,"strong"),e(1508,"(opcional)"),t()(),n(1509,"p"),e(1510,"Desabilita o filtro inicial no servi\xE7o do "),n(1511,"code"),e(1512,"po-combo"),t(),e(1513,", que \xE9 executado no primeiro clique no campo."),t()()(),n(1514,"tr",17)(1515,"td",18)(1516,"div",19)(1517,"span",20),e(1518," disabledTabFilter"),i(1519,"br"),t()()(),n(1520,"td",21)(1521,"code",25),e(1522,"boolean"),t()(),n(1523,"td",24)(1524,"em")(1525,"strong"),e(1526,"(opcional)"),t()(),n(1527,"p"),e(1528,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),n(1529,"code"),e(1530,"po-combo"),t(),e(1531,"."),t()()(),n(1532,"tr",17)(1533,"td",18)(1534,"div",19)(1535,"span",20),e(1536," divider"),i(1537,"br"),t()()(),n(1538,"td",21)(1539,"code",30),e(1540,"string"),t()(),n(1541,"td",24)(1542,"em")(1543,"strong"),e(1544,"(opcional)"),t()(),n(1545,"p"),e(1546,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),n(1547,"tr",17)(1548,"td",18)(1549,"div",19)(1550,"span",20),e(1551," dragDrop"),i(1552,"br"),t()()(),n(1553,"td",21)(1554,"code",25),e(1555,"boolean"),t()(),n(1556,"td",24)(1557,"em")(1558,"strong"),e(1559,"(opcional)"),t()(),n(1560,"p"),e(1561,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(1562,"blockquote")(1563,"p"),e(1564,"Recomendamos utilizar apenas um "),n(1565,"code"),e(1566,"po-upload"),t(),e(1567," com esta funcionalidade por tela."),t()(),n(1568,"p")(1569,"strong"),e(1570,"Componente compat\xEDvel"),t(),e(1571,": "),n(1572,"code"),e(1573,"po-upload"),t()()()(),n(1574,"tr",17)(1575,"td",18)(1576,"div",19)(1577,"span",20),e(1578," dragDropHeight"),i(1579,"br"),t()()(),n(1580,"td",21)(1581,"code",43),e(1582,"number"),t()(),n(1583,"td",24)(1584,"em")(1585,"strong"),e(1586,"(opcional)"),t()(),n(1587,"p"),e(1588,"Define em "),n(1589,"em"),e(1590,"pixels"),t(),e(1591," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(1592,"code"),e(1593,"160px"),t(),e(1594,"."),t(),n(1595,"blockquote")(1596,"p"),e(1597,"Esta propriedade funciona somente se a propriedade "),n(1598,"code"),e(1599,"p-drag-drop"),t(),e(1600," estiver habilitada."),t()(),n(1601,"p")(1602,"strong"),e(1603,"Componente compat\xEDvel"),t(),e(1604,": "),n(1605,"code"),e(1606,"po-upload"),t()()()(),n(1607,"tr",17)(1608,"td",18)(1609,"div",19)(1610,"span",20),e(1611," errorAsyncFunction"),i(1612,"br"),t()()(),n(1613,"td",21)(1614,"code",45),e(1615,"(value) => Observable<boolean>"),t()(),n(1616,"td",24)(1617,"em")(1618,"strong"),e(1619,"(opcional)"),t()(),n(1620,"p"),e(1621,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1622,"code"),e(1623,"change"),t(),e(1624," ou "),n(1625,"code"),e(1626,"change-model"),t(),e(1627,", dependendo do valor da propriedade "),n(1628,"code"),e(1629,"triggerMode"),t(),e(1630,"."),t(),n(1631,"blockquote")(1632,"p"),e(1633,"Retorna "),n(1634,"code"),e(1635,"Observable com o valor true"),t(),e(1636," para sinalizar o erro "),n(1637,"code"),e(1638,"false"),t(),e(1639," para indicar que n\xE3o h\xE1 erro."),t()(),n(1640,"p")(1641,"strong"),e(1642,"Componente compat\xEDvel"),t(),e(1643,": "),n(1644,"code"),e(1645,"po-datepicker"),t()()()(),n(1646,"tr",17)(1647,"td",18)(1648,"div",19)(1649,"span",20),e(1650," errorAsyncProperties"),i(1651,"br"),t()()(),n(1652,"td",21)(1653,"code",46),e(1654,"ErrorAsyncProperties"),t()(),n(1655,"td",24)(1656,"em")(1657,"strong"),e(1658,"(opcional)"),t()(),n(1659,"p"),e(1660,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),n(1661,"p")(1662,"strong"),e(1663,"Componentes compat\xEDveis:"),t(),n(1664,"code"),e(1665,"po-input"),t(),e(1666,", "),n(1667,"code"),e(1668,"po-number"),t(),e(1669,", "),n(1670,"code"),e(1671,"po-decimal"),t(),e(1672,", "),n(1673,"code"),e(1674,"po-password"),t(),e(1675,"."),t()()(),n(1676,"tr",17)(1677,"td",18)(1678,"div",19)(1679,"span",20),e(1680," errorMessage"),i(1681,"br"),t()()(),n(1682,"td",21)(1683,"code",30),e(1684,"string"),t()(),n(1685,"td",24)(1686,"em")(1687,"strong"),e(1688,"(opcional)"),t()(),n(1689,"p"),e(1690,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),n(1691,"p"),e(1692,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),n(1693,"ul")(1694,"li"),e(1695,"pattern;"),t(),n(1696,"li"),e(1697,"minValue;"),t(),n(1698,"li"),e(1699,"maxValue;"),t(),n(1700,"li"),e(1701,"required;"),t()(),n(1702,"blockquote")(1703,"p"),e(1704,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),n(1705,"code"),e(1706,"po-datepicker"),t(),e(1707,", "),n(1708,"code"),e(1709,"po-input"),t(),e(1710,", "),n(1711,"code"),e(1712,"po-number"),t(),e(1713,", "),n(1714,"code"),e(1715,"po-decimal"),t(),e(1716,", "),n(1717,"code"),e(1718,"po-password"),t(),e(1719,`, \xE9 necess\xE1rio que a propriedade
`),n(1720,"code"),e(1721,"requiredFieldErrorMessage"),t(),e(1722," esteja como "),n(1723,"code"),e(1724,"true"),t(),e(1725,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),n(1726,"code"),e(1727,"po-datepicker-range"),t(),e(1728,", "),n(1729,"code"),e(1730,"po-select"),t(),e(1731,", "),n(1732,"code"),e(1733,"po-checkbox-group"),t(),e(1734,", "),n(1735,"code"),e(1736,"po-radio-group"),t(),e(1737,", "),n(1738,"code"),e(1739,"po-multiselect"),t(),e(1740,", "),n(1741,"code"),e(1742,"po-combo"),t(),e(1743,`,
`),n(1744,"code"),e(1745,"po-lookup"),t(),e(1746," e "),n(1747,"code"),e(1748,"po-textarea"),t(),e(1749," n\xE3o \xE9 necess\xE1rio passar a propriedade "),n(1750,"code"),e(1751,"requiredFieldErrorMessage"),t(),e(1752,"."),t()(),n(1753,"p")(1754,"strong"),e(1755,"Componentes compat\xEDveis:"),t(),n(1756,"code"),e(1757,"po-datepicker"),t(),e(1758,", "),n(1759,"code"),e(1760,"po-input"),t(),e(1761,", "),n(1762,"code"),e(1763,"po-number"),t(),e(1764,", "),n(1765,"code"),e(1766,"po-decimal"),t(),e(1767,", "),n(1768,"code"),e(1769,"po-password"),t(),e(1770,", "),n(1771,"code"),e(1772,"po-datepicker-range"),t(),e(1773,", "),n(1774,"code"),e(1775,"po-select"),t(),e(1776,", "),n(1777,"code"),e(1778,"po-checkbox-group"),t(),e(1779,", "),n(1780,"code"),e(1781,"po-radio-group"),t(),e(1782,", "),n(1783,"code"),e(1784,"po-multiselect"),t(),e(1785,", "),n(1786,"code"),e(1787,"po-combo"),t(),e(1788,", "),n(1789,"code"),e(1790,"po-lookup"),t(),e(1791,", "),n(1792,"code"),e(1793,"po-textarea"),t(),e(1794,"."),t()()(),n(1795,"tr",17)(1796,"td",18)(1797,"div",19)(1798,"span",20),e(1799," fieldLabel"),i(1800,"br"),t()()(),n(1801,"td",21)(1802,"code",30),e(1803,"string"),t()(),n(1804,"td",24)(1805,"em")(1806,"strong"),e(1807,"(opcional)"),t()(),n(1808,"p"),e(1809,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),n(1810,"p"),e(1811,"O valor padr\xE3o \xE9: "),n(1812,"code"),e(1813,"label"),t(),e(1814,"."),t(),n(1815,"blockquote")(1816,"p"),e(1817,"Esta propriedade pode ser utilizada em conjunto com: "),n(1818,"code"),e(1819,"options"),t(),e(1820,", "),n(1821,"code"),e(1822,"optionsService"),t(),e(1823," e "),n(1824,"code"),e(1825,"searchService"),t(),e(1826,"."),t()()()(),n(1827,"tr",17)(1828,"td",18)(1829,"div",19)(1830,"span",20),e(1831," fieldValue"),i(1832,"br"),t()()(),n(1833,"td",21)(1834,"code",30),e(1835,"string"),t()(),n(1836,"td",24)(1837,"em")(1838,"strong"),e(1839,"(opcional)"),t()(),n(1840,"p"),e(1841,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),n(1842,"p"),e(1843,"O valor padr\xE3o \xE9: "),n(1844,"code"),e(1845,"value"),t(),e(1846,"."),t(),n(1847,"blockquote")(1848,"p"),e(1849,"Esta propriedade pode ser utilizada em conjunto com: "),n(1850,"code"),e(1851,"options"),t(),e(1852,", "),n(1853,"code"),e(1854,"optionsService"),t(),e(1855," e "),n(1856,"code"),e(1857,"searchService"),t(),e(1858,"."),t()()()(),n(1859,"tr",17)(1860,"td",18)(1861,"div",19)(1862,"span",20),e(1863," filterMinlength"),i(1864,"br"),t()()(),n(1865,"td",21)(1866,"code",43),e(1867,"number"),t()(),n(1868,"td",24)(1869,"em")(1870,"strong"),e(1871,"(opcional)"),t()(),n(1872,"p"),e(1873,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),n(1874,"code"),e(1875,"po-combo"),t(),e(1876,"."),t()()(),n(1877,"tr",17)(1878,"td",18)(1879,"div",19)(1880,"span",20),e(1881," filterMode"),i(1882,"br"),t()()(),n(1883,"td",21)(1884,"code",47),e(1885,"PoMultiselectFilterMode"),t()(),n(1886,"td",24)(1887,"em")(1888,"strong"),e(1889,"(opcional)"),t()(),n(1890,"p"),e(1891,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),n(1892,"code"),e(1893,"startsWith"),t(),e(1894,", "),n(1895,"code"),e(1896,"contains"),t(),e(1897," ou "),n(1898,"code"),e(1899,"endsWith"),t(),e(1900,"."),t(),n(1901,"blockquote")(1902,"p"),e(1903,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),n(1904,"p")(1905,"strong"),e(1906,"Componentes compat\xEDveis:"),t(),n(1907,"code"),e(1908,"po-multiselect"),t(),e(1909,"."),t()()(),n(1910,"tr",17)(1911,"td",18)(1912,"div",19)(1913,"span",20),e(1914," forceBooleanComponentType"),i(1915,"br"),t()()(),n(1916,"td",21)(1917,"code",48),e(1918,"ForceBooleanComponentEnum"),t()(),n(1919,"td",24)(1920,"em")(1921,"strong"),e(1922,"(opcional)"),t()(),n(1923,"p"),e(1924,"Valores aceitos:"),t(),n(1925,"ul")(1926,"li"),e(1927,"ForceBooleanComponentEnum.switch"),t(),n(1928,"li"),e(1929,"ForceBooleanComponentEnum.checkbox"),t()()()(),n(1930,"tr",17)(1931,"td",18)(1932,"div",19)(1933,"span",20),e(1934," forceOptionsComponentType"),i(1935,"br"),t()()(),n(1936,"td",21)(1937,"code",49),e(1938,"ForceOptionComponentEnum"),t()(),n(1939,"td",24)(1940,"em")(1941,"strong"),e(1942,"(opcional)"),t()(),n(1943,"p"),e(1944,"pode ser utilizada em conjunto com a propriedade "),n(1945,"code"),e(1946,"options"),t(),e(1947," for\xE7ando o componente a renderizar um "),n(1948,"code"),e(1949,"po-select"),t(),e(1950," ou "),n(1951,"code"),e(1952,"po-radio-group"),t(),e(1953,"."),t(),n(1954,"p"),e(1955,"Valores aceitos:"),t(),n(1956,"ul")(1957,"li"),e(1958,"ForceOptionComponentEnum.radioGroup"),t(),n(1959,"li"),e(1960,"ForceOptionComponentEnum.select"),t()(),n(1961,"blockquote")(1962,"p"),e(1963,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),n(1964,"code"),e(1965,"optionsMulti"),t(),e(1966," e "),n(1967,"code"),e(1968,"optionsService"),t(),e(1969,"."),t()()()(),n(1970,"tr",17)(1971,"td",18)(1972,"div",19)(1973,"span",20),e(1974," formField"),i(1975,"br"),t()()(),n(1976,"td",21)(1977,"code",30),e(1978,"string"),t()(),n(1979,"td",24)(1980,"em")(1981,"strong"),e(1982,"(opcional)"),t()(),n(1983,"p"),e(1984,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(1985,"code"),e(1986,"url"),t(),e(1987,"."),t(),n(1988,"blockquote")(1989,"p"),e(1990,"O valor default \xE9 "),n(1991,"code"),e(1992,"files"),t()()(),n(1993,"p")(1994,"strong"),e(1995,"Componente compat\xEDvel"),t(),e(1996,": "),n(1997,"code"),e(1998,"po-upload"),t()()()(),n(1999,"tr",17)(2e3,"td",18)(2001,"div",19)(2002,"span",20),e(2003," format"),i(2004,"br"),t()()(),n(2005,"td",21)(2006,"code",30),e(2007,"string "),t(),n(2008,"code",32),e(2009," Array<string>"),t()(),n(2010,"td",24)(2011,"em")(2012,"strong"),e(2013,"(opcional)"),t()(),n(2014,"p"),e(2015,"Formato de exibi\xE7\xE3o no campo."),t(),n(2016,"p"),e(2017,"Ao utilizar esta propriedade com o "),n(2018,"code"),e(2019,"type"),t(),n(2020,"em"),e(2021,"PoDynamicFieldType.Date"),t(),e(2022," ou "),n(2023,"em"),e(2024,"PoDynamicFieldType.DateTime"),t(),e(2025,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),n(2026,"p"),e(2027,"Valores v\xE1lidos:"),t(),n(2028,"ul")(2029,"li"),e(2030,"dd/mm/yyyy"),t(),n(2031,"li"),e(2032,"mm/dd/yyyy"),t(),n(2033,"li"),e(2034,"yyyy/mm/dd"),t()(),n(2035,"p"),e(2036,"Tamb\xE9m pode-se utilizar em conjunto com "),n(2037,"code"),e(2038,"searchService"),t(),e(2039,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t()()(),n(2040,"tr",17)(2041,"td",18)(2042,"div",19)(2043,"span",20),e(2044," formatModel"),i(2045,"br"),t()()(),n(2046,"td",21)(2047,"code",25),e(2048,"boolean"),t()(),n(2049,"td",24)(2050,"em")(2051,"strong"),e(2052,"(opcional)"),t()(),n(2053,"p"),e(2054,"Indica se o "),n(2055,"code"),e(2056,"model"),t(),e(2057," receber\xE1 o valor formatado pelas propriedades "),n(2058,"code"),e(2059,"p-label-on"),t(),e(2060," e "),n(2061,"code"),e(2062,"p-label-off"),t(),e(2063,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),n(2064,"p"),e(2065,"O valor padr\xE3o \xE9: "),n(2066,"code"),e(2067,"false"),t(),e(2068,"."),t(),n(2069,"blockquote")(2070,"p"),e(2071,"Esta propriedade est\xE1 disponivel apenas para o "),n(2072,"code"),e(2073,"swicth"),t(),e(2074,"."),t()()()(),n(2075,"tr",17)(2076,"td",18)(2077,"div",19)(2078,"span",20),e(2079," gridColumns"),i(2080,"br"),t()()(),n(2081,"td",21)(2082,"code",43),e(2083,"number"),t()(),n(2084,"td",24)(2085,"em")(2086,"strong"),e(2087,"(opcional)"),t()(),n(2088,"p"),e(2089,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),n(2090,"p"),e(2091,"Deve ser usado o sistema de "),n(2092,"strong"),e(2093,"grid"),t(),e(2094," do PO (1 ... 12 colunas)."),t(),n(2095,"blockquote")(2096,"p"),e(2097,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(2098,"tr",17)(2099,"td",18)(2100,"div",19)(2101,"span",20),e(2102," gridLgColumns"),i(2103,"br"),t()()(),n(2104,"td",21)(2105,"code",43),e(2106,"number"),t()(),n(2107,"td",24)(2108,"em")(2109,"strong"),e(2110,"(opcional)"),t()(),n(2111,"p"),e(2112,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(2113,"p"),e(2114,"Deve ser usado o sistema de "),n(2115,"strong"),e(2116,"grid"),t(),e(2117," do PO (1 ... 12 colunas)."),t(),n(2118,"blockquote")(2119,"p"),e(2120,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2121,"code"),e(2122,"gridColumns"),t(),e(2123,"."),t()()()(),n(2124,"tr",17)(2125,"td",18)(2126,"div",19)(2127,"span",20),e(2128," gridLgPull"),i(2129,"br"),t()()(),n(2130,"td",21)(2131,"code",43),e(2132,"number"),t()(),n(2133,"td",24)(2134,"em")(2135,"strong"),e(2136,"(opcional)"),t()(),n(2137,"p"),e(2138,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),n(2139,"p"),e(2140,"Deve ser usado o sistema de "),n(2141,"strong"),e(2142,"grid"),t(),e(2143," do PO (1 ... 11 colunas)."),t(),n(2144,"blockquote")(2145,"p"),e(2146,"Esta propriedade n\xE3o funciona com a propriedade "),n(2147,"code"),e(2148,"gridColumns"),t(),e(2149,". Deve-se especificar o tamanho da tela."),t()()()(),n(2150,"tr",17)(2151,"td",18)(2152,"div",19)(2153,"span",20),e(2154," gridMdColumns"),i(2155,"br"),t()()(),n(2156,"td",21)(2157,"code",43),e(2158,"number"),t()(),n(2159,"td",24)(2160,"em")(2161,"strong"),e(2162,"(opcional)"),t()(),n(2163,"p"),e(2164,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(2165,"p"),e(2166,"Deve ser usado o sistema de "),n(2167,"strong"),e(2168,"grid"),t(),e(2169," do PO (1 ... 12 colunas)."),t(),n(2170,"blockquote")(2171,"p"),e(2172,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2173,"code"),e(2174,"gridColumns"),t(),e(2175,"."),t()()()(),n(2176,"tr",17)(2177,"td",18)(2178,"div",19)(2179,"span",20),e(2180," gridMdPull"),i(2181,"br"),t()()(),n(2182,"td",21)(2183,"code",43),e(2184,"number"),t()(),n(2185,"td",24)(2186,"em")(2187,"strong"),e(2188,"(opcional)"),t()(),n(2189,"p"),e(2190,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),n(2191,"p"),e(2192,"Deve ser usado o sistema de "),n(2193,"strong"),e(2194,"grid"),t(),e(2195," do PO (1 ... 11 colunas)."),t(),n(2196,"blockquote")(2197,"p"),e(2198,"Esta propriedade n\xE3o funciona com a propriedade "),n(2199,"code"),e(2200,"gridColumns"),t(),e(2201,". Deve-se especificar o tamanho da tela."),t()()()(),n(2202,"tr",17)(2203,"td",18)(2204,"div",19)(2205,"span",20),e(2206," gridSmColumns"),i(2207,"br"),t()()(),n(2208,"td",21)(2209,"code",43),e(2210,"number"),t()(),n(2211,"td",24)(2212,"em")(2213,"strong"),e(2214,"(opcional)"),t()(),n(2215,"p"),e(2216,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(2217,"p"),e(2218,"Deve ser usado o sistema de "),n(2219,"strong"),e(2220,"grid"),t(),e(2221," do PO (1 ... 12 colunas)."),t(),n(2222,"blockquote")(2223,"p"),e(2224,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2225,"code"),e(2226,"gridColumns"),t(),e(2227,"."),t()()()(),n(2228,"tr",17)(2229,"td",18)(2230,"div",19)(2231,"span",20),e(2232," gridSmPull"),i(2233,"br"),t()()(),n(2234,"td",21)(2235,"code",43),e(2236,"number"),t()(),n(2237,"td",24)(2238,"em")(2239,"strong"),e(2240,"(opcional)"),t()(),n(2241,"p"),e(2242,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),n(2243,"p"),e(2244,"Deve ser usado o sistema de "),n(2245,"strong"),e(2246,"grid"),t(),e(2247," do PO (1 ... 11 colunas)."),t(),n(2248,"blockquote")(2249,"p"),e(2250,"Esta propriedade n\xE3o funciona com a propriedade "),n(2251,"code"),e(2252,"gridColumns"),t(),e(2253,". Deve-se especificar o tamanho da tela."),t()()()(),n(2254,"tr",17)(2255,"td",18)(2256,"div",19)(2257,"span",20),e(2258," gridXlColumns"),i(2259,"br"),t()()(),n(2260,"td",21)(2261,"code",43),e(2262,"number"),t()(),n(2263,"td",24)(2264,"em")(2265,"strong"),e(2266,"(opcional)"),t()(),n(2267,"p"),e(2268,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(2269,"p"),e(2270,"Deve ser usado o sistema de "),n(2271,"strong"),e(2272,"grid"),t(),e(2273," do PO (1 ... 12 colunas)."),t(),n(2274,"blockquote")(2275,"p"),e(2276,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2277,"code"),e(2278,"gridColumns"),t(),e(2279,"."),t()()()(),n(2280,"tr",17)(2281,"td",18)(2282,"div",19)(2283,"span",20),e(2284," gridXlPull"),i(2285,"br"),t()()(),n(2286,"td",21)(2287,"code",43),e(2288,"number"),t()(),n(2289,"td",24)(2290,"em")(2291,"strong"),e(2292,"(opcional)"),t()(),n(2293,"p"),e(2294,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),n(2295,"p"),e(2296,"Deve ser usado o sistema de "),n(2297,"strong"),e(2298,"grid"),t(),e(2299," do PO (1 ... 11 colunas)."),t(),n(2300,"blockquote")(2301,"p"),e(2302,"Esta propriedade n\xE3o funciona com a propriedade "),n(2303,"code"),e(2304,"gridColumns"),t(),e(2305,". Deve-se especificar o tamanho da tela."),t()()()(),n(2306,"tr",17)(2307,"td",18)(2308,"div",19)(2309,"span",20),e(2310," headers"),i(2311,"br"),t()()(),n(2312,"td",21)(2313,"code",50),e(2314,"{ [name: string]: string "),t(),n(2315,"code",51),e(2316,` Array<string>;
}`),t()(),n(2317,"td",24)(2318,"em")(2319,"strong"),e(2320,"(opcional)"),t()(),n(2321,"p"),e(2322,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),n(2323,"p")(2324,"strong"),e(2325,"Componente compat\xEDvel"),t(),e(2326,": "),n(2327,"code"),e(2328,"po-upload"),t()()()(),n(2329,"tr",17)(2330,"td",18)(2331,"div",19)(2332,"span",20),e(2333," help"),i(2334,"br"),t()()(),n(2335,"td",21)(2336,"code",30),e(2337,"string"),t()(),n(2338,"td",24)(2339,"em")(2340,"strong"),e(2341,"(opcional)"),t()(),n(2342,"p"),e(2343,"Texto de ajuda."),t()()(),n(2344,"tr",17)(2345,"td",18)(2346,"div",19)(2347,"span",20),e(2348," hideLabelStatus"),i(2349,"br"),t()()(),n(2350,"td",21)(2351,"code",25),e(2352,"boolean"),t()(),n(2353,"td",24)(2354,"em")(2355,"strong"),e(2356,"(opcional)"),t()(),n(2357,"p"),e(2358,"Indica se o status do "),n(2359,"code"),e(2360,"model"),t(),e(2361," ser\xE1 escondido visualmente ao lado do switch"),t()()(),n(2362,"tr",17)(2363,"td",18)(2364,"div",19)(2365,"span",20),e(2366," hidePasswordPeek"),i(2367,"br"),t()()(),n(2368,"td",21)(2369,"code",25),e(2370,"boolean"),t()(),n(2371,"td",24)(2372,"em")(2373,"strong"),e(2374,"(opcional)"),t()(),n(2375,"p"),e(2376,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),n(2377,"code"),e(2378,"po-password"),t(),e(2379,"."),t()()(),n(2380,"tr",17)(2381,"td",18)(2382,"div",19)(2383,"span",20),e(2384," hideRestrictionsInfo"),i(2385,"br"),t()()(),n(2386,"td",21)(2387,"code",25),e(2388,"boolean"),t()(),n(2389,"td",24)(2390,"em")(2391,"strong"),e(2392,"(opcional)"),t()(),n(2393,"p"),e(2394,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),n(2395,"p")(2396,"strong"),e(2397,"Componente compat\xEDvel"),t(),e(2398,": "),n(2399,"code"),e(2400,"po-upload"),t()()()(),n(2401,"tr",17)(2402,"td",18)(2403,"div",19)(2404,"span",20),e(2405," hideSearch"),i(2406,"br"),t()()(),n(2407,"td",21)(2408,"code",25),e(2409,"boolean"),t()(),n(2410,"td",24)(2411,"em")(2412,"strong"),e(2413,"(opcional)"),t()(),n(2414,"p"),e(2415,"Esconde o campo de pesquisa existente dentro do dropdown do "),n(2416,"code"),e(2417,"po-multiselect"),t(),e(2418,"."),t()()(),n(2419,"tr",17)(2420,"td",18)(2421,"div",19)(2422,"span",20),e(2423," hideSelectAll"),i(2424,"br"),t()()(),n(2425,"td",21)(2426,"code",25),e(2427,"boolean"),t()(),n(2428,"td",24)(2429,"em")(2430,"strong"),e(2431,"(opcional)"),t()(),n(2432,"p"),e(2433,'Indica se o campo "Selecionar todos" do '),n(2434,"code"),e(2435,"po-multiselect"),t(),e(2436," ser\xE1 escondido."),t()()(),n(2437,"tr",17)(2438,"td",18)(2439,"div",19)(2440,"span",20),e(2441," hideSelectButton"),i(2442,"br"),t()()(),n(2443,"td",21)(2444,"code",25),e(2445,"boolean"),t()(),n(2446,"td",24)(2447,"em")(2448,"strong"),e(2449,"(opcional)"),t()(),n(2450,"p"),e(2451,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(2452,"blockquote")(2453,"p"),e(2454,"Caso o valor definido seja "),n(2455,"code"),e(2456,"true"),t(),e(2457,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2458,"code"),e(2459,"selectFiles()"),t(),e(2460," para sele\xE7\xE3o de arquivos."),t()(),n(2461,"p")(2462,"strong"),e(2463,"Componente compat\xEDvel"),t(),e(2464,": "),n(2465,"code"),e(2466,"po-upload"),t()()()(),n(2467,"tr",17)(2468,"td",18)(2469,"div",19)(2470,"span",20),e(2471," hideSendButton"),i(2472,"br"),t()()(),n(2473,"td",21)(2474,"code",25),e(2475,"boolean"),t()(),n(2476,"td",24)(2477,"em")(2478,"strong"),e(2479,"(opcional)"),t()(),n(2480,"p"),e(2481,"Omite o bot\xE3o de envio de arquivos."),t(),n(2482,"blockquote")(2483,"p"),e(2484,"Caso o valor definido seja "),n(2485,"code"),e(2486,"true"),t(),e(2487,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2488,"code"),e(2489,"sendFiles()"),t(),e(2490," para envio do(s) arquivo(s) selecionado(s)."),t()(),n(2491,"p")(2492,"strong"),e(2493,"Componente compat\xEDvel"),t(),e(2494,": "),n(2495,"code"),e(2496,"po-upload"),t()()()(),n(2497,"tr",17)(2498,"td",18)(2499,"div",19)(2500,"span",20),e(2501," icon"),i(2502,"br"),t()()(),n(2503,"td",21)(2504,"code",30),e(2505,"string "),t(),n(2506,"code",52),e(2507," TemplateRef<void>"),t()(),n(2508,"td",24)(2509,"em")(2510,"strong"),e(2511,"(opcional)"),t()(),n(2512,"p"),e(2513,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(2514,"blockquote")(2515,"p"),e(2516,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),n(2517,"ul")(2518,"li"),e(2519,"Input;"),t(),n(2520,"li"),e(2521,"Number;"),t(),n(2522,"li"),e(2523,"Decimal;"),t(),n(2524,"li"),e(2525,"Combo;"),t(),n(2526,"li"),e(2527,"Password;"),t()(),n(2528,"blockquote")(2529,"p"),e(2530,"Veja a disponibilidade de \xEDcones em "),n(2531,"a",53),e(2532,"biblioteca de \xEDcones"),t(),e(2533,"."),t()()()(),n(2534,"tr",17)(2535,"td",18)(2536,"div",19)(2537,"span",20),e(2538," infiniteScroll"),i(2539,"br"),t()()(),n(2540,"td",21)(2541,"code",25),e(2542,"boolean"),t()(),n(2543,"td",24)(2544,"em")(2545,"strong"),e(2546,"(opcional)"),t()(),n(2547,"p"),e(2548,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),n(2549,"p")(2550,"strong"),e(2551,"Componentes compat\xEDveis:"),t(),n(2552,"code"),e(2553,"po-combo"),t(),e(2554,", "),n(2555,"code"),e(2556,"po-lookup"),t(),e(2557,"."),t()()(),n(2558,"tr",17)(2559,"td",18)(2560,"div",19)(2561,"span",20),e(2562," infiniteScrollDistance"),i(2563,"br"),t()()(),n(2564,"td",21)(2565,"code",43),e(2566,"number"),t()(),n(2567,"td",24)(2568,"em")(2569,"strong"),e(2570,"(opcional)"),t()(),n(2571,"p"),e(2572,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),n(2573,"strong"),e(2574,"Exemplos"),t(),n(2575,"code"),e(2576,"{ infiniteScrollDistance: 80 }"),t(),e(2577,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),n(2578,"p")(2579,"strong"),e(2580,"Componente compat\xEDvel:"),t(),n(2581,"code"),e(2582,"po-combo"),t(),e(2583,"."),t()()(),n(2584,"tr",17)(2585,"td",18)(2586,"div",19)(2587,"span",20),e(2588," isoFormat"),i(2589,"br"),t()()(),n(2590,"td",21)(2591,"code",54),e(2592,"PoDatepickerIsoFormat"),t()(),n(2593,"td",24)(2594,"em")(2595,"strong"),e(2596,"(opcional)"),t()(),n(2597,"p"),e(2598,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),n(2599,"blockquote")(2600,"p"),e(2601,"Veja os valores v\xE1lidos no "),n(2602,"code"),e(2603,"enumPoDatepickerIsoFormat"),t(),e(2604,"."),t()(),n(2605,"p")(2606,"strong"),e(2607,"Componente compat\xEDvel:"),t(),e(2608," po-datepicker"),t()()(),n(2609,"tr",17)(2610,"td",18)(2611,"div",19)(2612,"span",20),e(2613," key"),i(2614,"br"),t()()(),n(2615,"td",21)(2616,"code",25),e(2617,"boolean"),t()(),n(2618,"td",24)(2619,"em")(2620,"strong"),e(2621,"(opcional)"),t()(),n(2622,"p"),e(2623,"Identificador"),t()()(),n(2624,"tr",17)(2625,"td",18)(2626,"div",19)(2627,"span",20),e(2628," label"),i(2629,"br"),t()()(),n(2630,"td",21)(2631,"code",30),e(2632,"string"),t()(),n(2633,"td",24)(2634,"em")(2635,"strong"),e(2636,"(opcional)"),t()(),n(2637,"p"),e(2638,"R\xF3tulo do campo exibido."),t(),n(2639,"p"),e(2640,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),n(2641,"code"),e(2642,"label"),t(),e(2643," o valor da propriedade "),n(2644,"code"),e(2645,"property"),t(),e(2646," com a primeira letra em mai\xFAsculo."),t()()(),n(2647,"tr",17)(2648,"td",18)(2649,"div",19)(2650,"span",20),e(2651," labelPosition"),i(2652,"br"),t()()(),n(2653,"td",21)(2654,"code",55),e(2655,"PoSwitchLabelPosition"),t()(),n(2656,"td",24)(2657,"em")(2658,"strong"),e(2659,"(opcional)"),t()(),n(2660,"p"),e(2661,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),n(2662,"blockquote")(2663,"p"),e(2664,"Por padr\xE3o exibe \xE0 direita."),t()()()(),n(2665,"tr",17)(2666,"td",18)(2667,"div",19)(2668,"span",20),e(2669," literals"),i(2670,"br"),t()()(),n(2671,"td",21)(2672,"code",36),e(2673,"PoLookupLiterals "),t(),n(2674,"code",56),e(2675," PoMultiselectLiterals "),t(),n(2676,"code",57),e(2677," PoComboLiterals "),t(),n(2678,"code",58),e(2679," PoDatepickerRangeLiterals "),t(),n(2680,"code",59),e(2681," PoUploadLiterals"),t()(),n(2682,"td",24)(2683,"em")(2684,"strong"),e(2685,"(opcional)"),t()(),n(2686,"p"),e(2687,"Objeto com as literais usadas para os seguintes componentes: "),n(2688,"code"),e(2689,"po-lookup"),t(),e(2690,", "),n(2691,"code"),e(2692,"po-multiselect"),t(),e(2693,", "),n(2694,"code"),e(2695,"po-combo"),t(),e(2696," e "),n(2697,"code"),e(2698,"po-datepicker-range"),t(),e(2699,"."),t(),n(2700,"blockquote")(2701,"p"),e(2702,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),n(2703,"p")(2704,"strong"),e(2705,"Componentes compat\xEDveis:"),t(),n(2706,"code"),e(2707,"po-lookup"),t(),e(2708,", "),n(2709,"code"),e(2710,"po-multiselect"),t(),e(2711,", "),n(2712,"code"),e(2713,"po-combo"),t(),e(2714,", "),n(2715,"code"),e(2716,"po-datepicker-range"),t()()()(),n(2717,"tr",17)(2718,"td",18)(2719,"div",19)(2720,"span",20),e(2721," locale"),i(2722,"br"),t()()(),n(2723,"td",21)(2724,"code",30),e(2725,"string"),t()(),n(2726,"td",24)(2727,"em")(2728,"strong"),e(2729,"(opcional)"),t()(),n(2730,"p"),e(2731,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),n(2732,"a",60)(2733,"code"),e(2734,"I18n"),t()()(),n(2735,"p"),e(2736,`Exemplo de utiliza\xE7\xE3o:
`),n(2737,"code"),e(2738,`[ { property: 'birthday', locale: 'en', type: 'date' }, { property: 'wage', locale: 'ru', type: 'currency' }
];`),t()(),n(2739,"blockquote")(2740,"p"),e(2741,"Para ver quais linguagens suportadas acesse "),n(2742,"a",60)(2743,"code"),e(2744,"I18n"),t()(),e(2745,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),n(2746,"tr",17)(2747,"td",18)(2748,"div",19)(2749,"span",20),e(2750," mask"),i(2751,"br"),t()()(),n(2752,"td",21)(2753,"code",30),e(2754,"string"),t()(),n(2755,"td",24)(2756,"em")(2757,"strong"),e(2758,"(opcional)"),t()(),n(2759,"p"),e(2760,"M\xE1scara para o campo."),t(),n(2761,"p")(2762,"strong"),e(2763,"Componentes compat\xEDveis:"),t(),n(2764,"code"),e(2765,"po-input"),t(),e(2766,"."),t(),n(2767,"blockquote")(2768,"p"),e(2769,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(2770,"code"),e(2771,"type: time"),t(),e(2772,"."),t()()()(),n(2773,"tr",17)(2774,"td",18)(2775,"div",19)(2776,"span",20),e(2777," maskFormatModel"),i(2778,"br"),t()()(),n(2779,"td",21)(2780,"code",25),e(2781,"boolean"),t()(),n(2782,"td",24)(2783,"em")(2784,"strong"),e(2785,"(opcional)"),t()(),n(2786,"p"),e(2787,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),n(2788,"code"),e(2789,"false"),t(),e(2790,"."),t(),n(2791,"p")(2792,"strong"),e(2793,"Componentes compat\xEDveis:"),t(),n(2794,"code"),e(2795,"po-input"),t(),e(2796,"."),t(),n(2797,"blockquote")(2798,"p"),e(2799,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(2800,"code"),e(2801,"type: time"),t(),e(2802,"."),t()()()(),n(2803,"tr",17)(2804,"td",18)(2805,"div",19)(2806,"span",20),e(2807," maxLength"),i(2808,"br"),t()()(),n(2809,"td",21)(2810,"code",43),e(2811,"number"),t()(),n(2812,"td",24)(2813,"em")(2814,"strong"),e(2815,"(opcional)"),t()(),n(2816,"p"),e(2817,"Tamanho m\xE1ximo de caracteres."),t(),n(2818,"p")(2819,"strong"),e(2820,"Componentes compat\xEDveis:"),t(),n(2821,"code"),e(2822,"po-input"),t(),e(2823,", "),n(2824,"code"),e(2825,"po-number"),t(),e(2826,", "),n(2827,"code"),e(2828,"po-decimal"),t(),e(2829,", "),n(2830,"code"),e(2831,"po-textarea"),t(),e(2832,", "),n(2833,"code"),e(2834,"po-password"),t(),e(2835,"."),t()()(),n(2836,"tr",17)(2837,"td",18)(2838,"div",19)(2839,"span",20),e(2840," maxValue"),i(2841,"br"),t()()(),n(2842,"td",21)(2843,"code",30),e(2844,"string "),t(),n(2845,"code",43),e(2846," number"),t()(),n(2847,"td",24)(2848,"em")(2849,"strong"),e(2850,"(opcional)"),t()(),n(2851,"p"),e(2852,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(2853,"em"),e(2854,"number"),t(),e(2855,", "),n(2856,"em"),e(2857,"date"),t(),e(2858," ou "),n(2859,"em"),e(2860,"dateTime"),t(),e(2861,"."),t(),n(2862,"p")(2863,"strong"),e(2864,"Componentes compat\xEDveis:"),t(),n(2865,"code"),e(2866,"po-datepicker"),t(),e(2867,", "),n(2868,"code"),e(2869,"po-datepicker-range"),t(),e(2870,", "),n(2871,"code"),e(2872,"po-number"),t(),e(2873,", "),n(2874,"code"),e(2875,"po-decimal"),t()()()(),n(2876,"tr",17)(2877,"td",18)(2878,"div",19)(2879,"span",20),e(2880," minLength"),i(2881,"br"),t()()(),n(2882,"td",21)(2883,"code",43),e(2884,"number"),t()(),n(2885,"td",24)(2886,"em")(2887,"strong"),e(2888,"(opcional)"),t()(),n(2889,"p"),e(2890,"Tamanho m\xEDnimo de caracteres."),t(),n(2891,"p")(2892,"strong"),e(2893,"Componentes compat\xEDveis:"),t(),n(2894,"code"),e(2895,"po-input"),t(),e(2896,", "),n(2897,"code"),e(2898,"po-number"),t(),e(2899,", "),n(2900,"code"),e(2901,"po-decimal"),t(),e(2902,", "),n(2903,"code"),e(2904,"po-textarea"),t(),e(2905,", "),n(2906,"code"),e(2907,"po-password"),t(),e(2908,"."),t()()(),n(2909,"tr",17)(2910,"td",18)(2911,"div",19)(2912,"span",20),e(2913," minValue"),i(2914,"br"),t()()(),n(2915,"td",21)(2916,"code",30),e(2917,"string "),t(),n(2918,"code",43),e(2919," number"),t()(),n(2920,"td",24)(2921,"em")(2922,"strong"),e(2923,"(opcional)"),t()(),n(2924,"p"),e(2925,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(2926,"em"),e(2927,"number"),t(),e(2928,", "),n(2929,"em"),e(2930,"date"),t(),e(2931," ou "),n(2932,"em"),e(2933,"dateTime"),t(),e(2934,"."),t(),n(2935,"p")(2936,"strong"),e(2937,"Componentes compat\xEDveis:"),t(),n(2938,"code"),e(2939,"po-datepicker"),t(),e(2940,", "),n(2941,"code"),e(2942,"po-datepicker-range"),t(),e(2943,", "),n(2944,"code"),e(2945,"po-number"),t(),e(2946,", "),n(2947,"code"),e(2948,"po-decimal"),t()()()(),n(2949,"tr",17)(2950,"td",18)(2951,"div",19)(2952,"span",20),e(2953," multiple"),i(2954,"br"),t()()(),n(2955,"td",21)(2956,"code",25),e(2957,"boolean"),t()(),n(2958,"td",24)(2959,"em")(2960,"strong"),e(2961,"(opcional)"),t()(),n(2962,"p"),e(2963,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),n(2964,"p")(2965,"strong"),e(2966,"Componente compat\xEDvel:"),t(),n(2967,"code"),e(2968,"po-lookup"),t(),e(2969,", "),n(2970,"code"),e(2971,"po-upload"),t()()()(),n(2972,"tr",17)(2973,"td",18)(2974,"div",19)(2975,"span",20),e(2976," noAutocomplete"),i(2977,"br"),t()()(),n(2978,"td",21)(2979,"code",25),e(2980,"boolean"),t()(),n(2981,"td",24)(2982,"em")(2983,"strong"),e(2984,"(opcional)"),t()(),n(2985,"p"),e(2986,"Define a propriedade nativa "),n(2987,"code"),e(2988,"autocomplete"),t(),e(2989," do campo como off."),t(),n(2990,"p")(2991,"strong"),e(2992,"Componentes compat\xEDveis:"),t(),n(2993,"code"),e(2994,"po-datepicker"),t(),e(2995,", "),n(2996,"code"),e(2997,"po-datepicker-range"),t(),e(2998,", "),n(2999,"code"),e(3e3,"po-input"),t(),e(3001,", "),n(3002,"code"),e(3003,"po-number"),t(),e(3004,", "),n(3005,"code"),e(3006,"po-decimal"),t(),e(3007,", "),n(3008,"code"),e(3009,"po-lookup"),t(),e(3010,", "),n(3011,"code"),e(3012,"po-password"),t()()()(),n(3013,"tr",17)(3014,"td",18)(3015,"div",19)(3016,"span",20),e(3017," offsetColumns"),i(3018,"br"),t()()(),n(3019,"td",21)(3020,"code",43),e(3021,"number"),t()(),n(3022,"td",24)(3023,"em")(3024,"strong"),e(3025,"(opcional)"),t()(),n(3026,"p"),e(3027,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),n(3028,"p"),e(3029,"Deve ser usado o sistema de "),n(3030,"strong"),e(3031,"grid"),t(),e(3032," do PO (1 ... 12 colunas)."),t(),n(3033,"blockquote")(3034,"p"),e(3035,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(3036,"tr",17)(3037,"td",18)(3038,"div",19)(3039,"span",20),e(3040," offsetLgColumns"),i(3041,"br"),t()()(),n(3042,"td",21)(3043,"code",43),e(3044,"number"),t()(),n(3045,"td",24)(3046,"em")(3047,"strong"),e(3048,"(opcional)"),t()(),n(3049,"p"),e(3050,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(3051,"p"),e(3052,"Deve ser usado o sistema de "),n(3053,"strong"),e(3054,"grid"),t(),e(3055," do PO (1 ... 12 colunas)."),t(),n(3056,"blockquote")(3057,"p"),e(3058,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3059,"code"),e(3060,"offsetColumns"),t(),e(3061,"."),t()()()(),n(3062,"tr",17)(3063,"td",18)(3064,"div",19)(3065,"span",20),e(3066," offsetMdColumns"),i(3067,"br"),t()()(),n(3068,"td",21)(3069,"code",43),e(3070,"number"),t()(),n(3071,"td",24)(3072,"em")(3073,"strong"),e(3074,"(opcional)"),t()(),n(3075,"p"),e(3076,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(3077,"p"),e(3078,"Deve ser usado o sistema de "),n(3079,"strong"),e(3080,"grid"),t(),e(3081," do PO (1 ... 12 colunas)."),t(),n(3082,"blockquote")(3083,"p"),e(3084,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3085,"code"),e(3086,"offsetColumns"),t(),e(3087,"."),t()()()(),n(3088,"tr",17)(3089,"td",18)(3090,"div",19)(3091,"span",20),e(3092," offsetSmColumns"),i(3093,"br"),t()()(),n(3094,"td",21)(3095,"code",43),e(3096,"number"),t()(),n(3097,"td",24)(3098,"em")(3099,"strong"),e(3100,"(opcional)"),t()(),n(3101,"p"),e(3102,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(3103,"p"),e(3104,"Deve ser usado o sistema de "),n(3105,"strong"),e(3106,"grid"),t(),e(3107," do PO (1 ... 12 colunas)."),t(),n(3108,"blockquote")(3109,"p"),e(3110,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3111,"code"),e(3112,"offsetColumns"),t(),e(3113,"."),t()()()(),n(3114,"tr",17)(3115,"td",18)(3116,"div",19)(3117,"span",20),e(3118," offsetXlColumns"),i(3119,"br"),t()()(),n(3120,"td",21)(3121,"code",43),e(3122,"number"),t()(),n(3123,"td",24)(3124,"em")(3125,"strong"),e(3126,"(opcional)"),t()(),n(3127,"p"),e(3128,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(3129,"p"),e(3130,"Deve ser usado o sistema de "),n(3131,"strong"),e(3132,"grid"),t(),e(3133," do PO (1 ... 12 colunas)."),t(),n(3134,"blockquote")(3135,"p"),e(3136,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3137,"code"),e(3138,"offsetColumns"),t(),e(3139,"."),t()()()(),n(3140,"tr",17)(3141,"td",18)(3142,"div",19)(3143,"span",20),e(3144," onError"),i(3145,"br"),t()()(),n(3146,"td",21)(3147,"code",42),e(3148,"Function"),t()(),n(3149,"td",24)(3150,"em")(3151,"strong"),e(3152,"(opcional)"),t()(),n(3153,"p"),e(3154,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(3155,"blockquote")(3156,"p"),e(3157,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(3158,"code"),e(3159,"HttpErrorResponse"),t(),e(3160,"."),t()(),n(3161,"p")(3162,"strong"),e(3163,"Componente compat\xEDvel"),t(),e(3164,": "),n(3165,"code"),e(3166,"po-upload"),t()()()(),n(3167,"tr",17)(3168,"td",18)(3169,"div",19)(3170,"span",20),e(3171," onSuccess"),i(3172,"br"),t()()(),n(3173,"td",21)(3174,"code",42),e(3175,"Function"),t()(),n(3176,"td",24)(3177,"em")(3178,"strong"),e(3179,"(opcional)"),t()(),n(3180,"p"),e(3181,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(3182,"blockquote")(3183,"p"),e(3184,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(3185,"code"),e(3186,"HttpResponse"),t(),e(3187,"."),t()(),n(3188,"p")(3189,"strong"),e(3190,"Componente compat\xEDvel"),t(),e(3191,": "),n(3192,"code"),e(3193,"po-upload"),t()()()(),n(3194,"tr",17)(3195,"td",18)(3196,"div",19)(3197,"span",20),e(3198," onUpload"),i(3199,"br"),t()()(),n(3200,"td",21)(3201,"code",42),e(3202,"Function"),t()(),n(3203,"td",24)(3204,"em")(3205,"strong"),e(3206,"(opcional)"),t()(),n(3207,"p"),e(3208,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(3209,"pre")(3210,"code"),e(3211,"event.data = {id: 'id do usu\xE1rio'};"),t()(),n(3212,"p")(3213,"strong"),e(3214,"Componente compat\xEDvel"),t(),e(3215,": "),n(3216,"code"),e(3217,"po-upload"),t()()()(),n(3218,"tr",17)(3219,"td",18)(3220,"div",19)(3221,"span",20),e(3222," optional"),i(3223,"br"),t()()(),n(3224,"td",21)(3225,"code",25),e(3226,"boolean"),t()(),n(3227,"td",24)(3228,"em")(3229,"strong"),e(3230,"(opcional)"),t()(),n(3231,"p"),e(3232,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(3233,"blockquote")(3234,"p"),e(3235,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),n(3236,"ul")(3237,"li"),e(3238,"O campo for "),n(3239,"code"),e(3240,"required"),t(),e(3241,", ou;"),t(),n(3242,"li"),e(3243,"N\xE3o possuir "),n(3244,"code"),e(3245,"help"),t(),e(3246," e "),n(3247,"code"),e(3248,"label"),t(),e(3249,"."),t()()()(),n(3250,"tr",17)(3251,"td",18)(3252,"div",19)(3253,"span",20),e(3254," options"),i(3255,"br"),t()()(),n(3256,"td",21)(3257,"code",32),e(3258,"Array<string> "),t(),n(3259,"code",61),e(3260," Array<PoSelectOption> "),t(),n(3261,"code",62),e(3262," Array<PoMultiselectOption> "),t(),n(3263,"code",63),e(3264," Array<PoCheckboxGroupOption> "),t(),n(3265,"code",64),e(3266," Array<any>"),t()(),n(3267,"td",24)(3268,"em")(3269,"strong"),e(3270,"(opcional)"),t()(),n(3271,"p"),e(3272,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),n(3273,"p")(3274,"strong"),e(3275,"Componentes compat\xEDveis:"),t(),n(3276,"code"),e(3277,"po-select"),t(),e(3278,", "),n(3279,"code"),e(3280,"po-radio-group"),t(),e(3281,", "),n(3282,"code"),e(3283,"po-checkbox-group"),t(),e(3284,", "),n(3285,"code"),e(3286,"po-multiselect"),t(),e(3287,"."),t()()(),n(3288,"tr",17)(3289,"td",18)(3290,"div",19)(3291,"span",20),e(3292," optionsMulti"),i(3293,"br"),t()()(),n(3294,"td",21)(3295,"code",25),e(3296,"boolean"),t()(),n(3297,"td",24)(3298,"em")(3299,"strong"),e(3300,"(opcional)"),t()(),n(3301,"p"),e(3302,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),n(3303,"tr",17)(3304,"td",18)(3305,"div",19)(3306,"span",20),e(3307," optionsService"),i(3308,"br"),t()()(),n(3309,"td",21)(3310,"code",30),e(3311,"string "),t(),n(3312,"code",65),e(3313," PoComboFilter "),t(),n(3314,"code",66),e(3315," PoMultiselectFilter"),t()(),n(3316,"td",24)(3317,"em")(3318,"strong"),e(3319,"(opcional)"),t()(),n(3320,"p"),e(3321,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),n(3322,"strong"),e(3323,"Importante"),t()(),n(3324,"blockquote")(3325,"p"),e(3326,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),n(3327,"a",7),e(3328,"guia de API do PO UI"),t(),e(3329,"."),t()()()(),n(3330,"tr",17)(3331,"td",18)(3332,"div",19)(3333,"span",20),e(3334," order"),i(3335,"br"),t()()(),n(3336,"td",21)(3337,"code",43),e(3338,"number"),t()(),n(3339,"td",24)(3340,"em")(3341,"strong"),e(3342,"(opcional)"),t()(),n(3343,"p"),e(3344,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),n(3345,"p"),e(3346,"Exemplo de utiliza\xE7\xE3o:"),t(),n(3347,"p")(3348,"code"),e(3349,`[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 }
];`),t()(),n(3350,"p"),e(3351,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),n(3352,"code"),e(3353,`[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' }
];`),t()(),n(3354,"p"),e(3355,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),n(3356,"p"),e(3357,"Campos sem "),n(3358,"code"),e(3359,"order"),t(),e(3360,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),n(3361,"tr",17)(3362,"td",18)(3363,"div",19)(3364,"span",20),e(3365," params"),i(3366,"br"),t()()(),n(3367,"td",21)(3368,"code",33),e(3369,"any"),t()(),n(3370,"td",24)(3371,"em")(3372,"strong"),e(3373,"(opcional)"),t()(),n(3374,"p"),e(3375,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),n(3376,"code"),e(3377,"po-lookup"),t(),e(3378,` e
`),n(3379,"code"),e(3380,"po-combo"),t(),e(3381,"."),t(),n(3382,"p"),e(3383,"Por exemplo, para o par\xE2metro "),n(3384,"code"),e(3385,"{ age: 23 }"),t(),e(3386," a URL da requisi\xE7\xE3o ficaria:"),t(),n(3387,"p")(3388,"code"),e(3389,"url + ?age=23&filter=Peter"),t()()()(),n(3390,"tr",17)(3391,"td",18)(3392,"div",19)(3393,"span",20),e(3394," pattern"),i(3395,"br"),t()()(),n(3396,"td",21)(3397,"code",30),e(3398,"string"),t()(),n(3399,"td",24)(3400,"em")(3401,"strong"),e(3402,"(opcional)"),t()(),n(3403,"p"),e(3404,"Regex para valida\xE7\xE3o do campo."),t(),n(3405,"p")(3406,"strong"),e(3407,"Componentes compat\xEDveis:"),t(),n(3408,"code"),e(3409,"po-input"),t(),e(3410,", "),n(3411,"code"),e(3412,"po-password"),t(),e(3413,"."),t()()(),n(3414,"tr",17)(3415,"td",18)(3416,"div",19)(3417,"span",20),e(3418," placeholder"),i(3419,"br"),t()()(),n(3420,"td",21)(3421,"code",30),e(3422,"string"),t()(),n(3423,"td",24)(3424,"em")(3425,"strong"),e(3426,"(opcional)"),t()(),n(3427,"p"),e(3428,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),n(3429,"tr",17)(3430,"td",18)(3431,"div",19)(3432,"span",20),e(3433," placeholderSearch"),i(3434,"br"),t()()(),n(3435,"td",21)(3436,"code",30),e(3437,"string"),t()(),n(3438,"td",24)(3439,"em")(3440,"strong"),e(3441,"(opcional)"),t()(),n(3442,"p"),e(3443,"Placeholder do campo de pesquisa do "),n(3444,"code"),e(3445,"po-multiselect"),t(),e(3446,"."),t(),n(3447,"blockquote")(3448,"p"),e(3449,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),n(3450,"tr",17)(3451,"td",18)(3452,"div",19)(3453,"span",20),e(3454," property"),i(3455,"br"),t()()(),n(3456,"td",21)(3457,"code",30),e(3458,"string"),t()(),n(3459,"td",24)(3460,"p"),e(3461,"Nome de refer\xEAncia do campo."),t()()(),n(3462,"tr",17)(3463,"td",18)(3464,"div",19)(3465,"span",20),e(3466," range"),i(3467,"br"),t()()(),n(3468,"td",21)(3469,"code",25),e(3470,"boolean"),t()(),n(3471,"td",24)(3472,"em")(3473,"strong"),e(3474,"(opcional)"),t()(),n(3475,"p"),e(3476,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),n(3477,"blockquote")(3478,"p"),e(3479,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),n(3480,"tr",17)(3481,"td",18)(3482,"div",19)(3483,"span",20),e(3484," readonly"),i(3485,"br"),t()()(),n(3486,"td",21)(3487,"code",25),e(3488,"boolean"),t()(),n(3489,"td",24)(3490,"em")(3491,"strong"),e(3492,"(opcional)"),t()(),n(3493,"p"),e(3494,"Indica que o campo ser\xE1 somente leitura."),t(),n(3495,"p")(3496,"strong"),e(3497,"Componentes compat\xEDveis:"),t(),n(3498,"code"),e(3499,"po-datepicker"),t(),e(3500,", "),n(3501,"code"),e(3502,"po-datepicker-range"),t(),e(3503,", "),n(3504,"code"),e(3505,"po-input"),t(),e(3506,", "),n(3507,"code"),e(3508,"po-number"),t(),e(3509,", "),n(3510,"code"),e(3511,"po-decimal"),t(),e(3512,", "),n(3513,"code"),e(3514,"po-select"),t(),e(3515,", "),n(3516,"code"),e(3517,"po-textarea"),t(),e(3518,", "),n(3519,"code"),e(3520,"po-password"),t()()()(),n(3521,"tr",17)(3522,"td",18)(3523,"div",19)(3524,"span",20),e(3525," required"),i(3526,"br"),t()()(),n(3527,"td",21)(3528,"code",25),e(3529,"boolean"),t()(),n(3530,"td",24)(3531,"em")(3532,"strong"),e(3533,"(opcional)"),t()(),n(3534,"p"),e(3535,"Define a obrigatoriedade do campo."),t()()(),n(3536,"tr",17)(3537,"td",18)(3538,"div",19)(3539,"span",20),e(3540," requiredFieldErrorMessage"),i(3541,"br"),t()()(),n(3542,"td",21)(3543,"code",25),e(3544,"boolean"),t()(),n(3545,"td",24)(3546,"em")(3547,"strong"),e(3548,"(opcional)"),t()(),n(3549,"p"),e(3550,"Exibe a mensagem setada na propriedade "),n(3551,"code"),e(3552,"errorMessage"),t(),e(3553," se o campo estiver vazio e for requerido."),t(),n(3554,"blockquote")(3555,"p"),e(3556,"Necess\xE1rio que a propriedade "),n(3557,"code"),e(3558,"required"),t(),e(3559," esteja habilitada."),t()(),n(3560,"p")(3561,"strong"),e(3562,"Componentes compat\xEDveis:"),t(),n(3563,"code"),e(3564,"po-datepicker"),t(),e(3565,", "),n(3566,"code"),e(3567,"po-input"),t(),e(3568,", "),n(3569,"code"),e(3570,"po-number"),t(),e(3571,", "),n(3572,"code"),e(3573,"po-decimal"),t(),e(3574,", "),n(3575,"code"),e(3576,"po-password"),t(),e(3577,"."),t()()(),n(3578,"tr",17)(3579,"td",18)(3580,"div",19)(3581,"span",20),e(3582," restrictions"),i(3583,"br"),t()()(),n(3584,"td",21)(3585,"code",67),e(3586,"PoUploadFileRestrictions"),t()(),n(3587,"td",24)(3588,"em")(3589,"strong"),e(3590,"(opcional)"),t()(),n(3591,"p"),e(3592,"Objeto que segue a defini\xE7\xE3o da interface "),n(3593,"code"),e(3594,"PoUploadFileRestrictions"),t(),e(3595,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),n(3596,"p")(3597,"strong"),e(3598,"Componente compat\xEDvel"),t(),e(3599,": "),n(3600,"code"),e(3601,"po-upload"),t()()()(),n(3602,"tr",17)(3603,"td",18)(3604,"div",19)(3605,"span",20),e(3606," rows"),i(3607,"br"),t()()(),n(3608,"td",21)(3609,"code",43),e(3610,"number"),t()(),n(3611,"td",24)(3612,"em")(3613,"strong"),e(3614,"(opcional)"),t()(),n(3615,"p"),e(3616,"Quantidade de linhas exibidas no "),n(3617,"code"),e(3618,"po-textarea"),t(),e(3619,"."),t()()(),n(3620,"tr",17)(3621,"td",18)(3622,"div",19)(3623,"span",20),e(3624," searchService"),i(3625,"br"),t()()(),n(3626,"td",21)(3627,"code",30),e(3628,"string "),t(),n(3629,"code",34),e(3630," PoLookupFilter"),t()(),n(3631,"td",24)(3632,"em")(3633,"strong"),e(3634,"(opcional)"),t()(),n(3635,"p"),e(3636,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),n(3637,"code"),e(3638,"columns"),t(),e(3639,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),n(3640,"strong"),e(3641,"Importante:"),t()(),n(3642,"blockquote")(3643,"p"),e(3644,"Caso utilizar a propriedade "),n(3645,"code"),e(3646,"optionsService"),t(),e(3647,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),n(3648,"a",7),e(3649,"guia de API do PO UI"),t(),e(3650,"."),t()()()(),n(3651,"tr",17)(3652,"td",18)(3653,"div",19)(3654,"span",20),e(3655," secret"),i(3656,"br"),t()()(),n(3657,"td",21)(3658,"code",25),e(3659,"boolean"),t()(),n(3660,"td",24)(3661,"em")(3662,"strong"),e(3663,"(opcional)"),t()(),n(3664,"p"),e(3665,"Esconde a informa\xE7\xE3o estilo "),n(3666,"em"),e(3667,"password"),t(),e(3668,", pode ser utilizado quando o tipo de dado for "),n(3669,"em"),e(3670,"string"),t(),e(3671,"."),t()()(),n(3672,"tr",17)(3673,"td",18)(3674,"div",19)(3675,"span",20),e(3676," showRequired"),i(3677,"br"),t()()(),n(3678,"td",21)(3679,"code",25),e(3680,"boolean"),t()(),n(3681,"td",24)(3682,"em")(3683,"strong"),e(3684,"(opcional)"),t()(),n(3685,"p"),e(3686,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(3687,"blockquote")(3688,"p"),e(3689,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(3690,"ul")(3691,"li"),e(3692,"N\xE3o possuir "),n(3693,"code"),e(3694,"p-help"),t(),e(3695," e/ou "),n(3696,"code"),e(3697,"p-label"),t(),e(3698,"."),t()()()(),n(3699,"tr",17)(3700,"td",18)(3701,"div",19)(3702,"span",20),e(3703," sort"),i(3704,"br"),t()()(),n(3705,"td",21)(3706,"code",25),e(3707,"boolean"),t()(),n(3708,"td",24)(3709,"em")(3710,"strong"),e(3711,"(opcional)"),t()(),n(3712,"p"),e(3713,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),n(3714,"p")(3715,"strong"),e(3716,"Componentes compat\xEDveis:"),t(),n(3717,"code"),e(3718,"po-combo"),t(),e(3719,", po-multiselect"),t()()(),n(3720,"tr",17)(3721,"td",18)(3722,"div",19)(3723,"span",20),e(3724," step"),i(3725,"br"),t()()(),n(3726,"td",21)(3727,"code",43),e(3728,"number"),t()(),n(3729,"td",24)(3730,"em")(3731,"strong"),e(3732,"(opcional)"),t()(),n(3733,"p"),e(3734,"Intervalo utilizado no "),n(3735,"code"),e(3736,"po-number"),t(),e(3737,"."),t()()(),n(3738,"tr",17)(3739,"td",18)(3740,"div",19)(3741,"span",20),e(3742," thousandMaxlength"),i(3743,"br"),t()()(),n(3744,"td",21)(3745,"code",43),e(3746,"number"),t()(),n(3747,"td",24)(3748,"em")(3749,"strong"),e(3750,"(opcional)"),t()(),n(3751,"p"),e(3752,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),n(3753,"blockquote")(3754,"p"),e(3755,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(3756,"code"),e(3757,"type"),t(),e(3758," for "),n(3759,"em"),e(3760,"currency"),t(),e(3761," ou "),n(3762,"em"),e(3763,"decimal"),t(),e(3764,"."),t()()()(),n(3765,"tr",17)(3766,"td",18)(3767,"div",19)(3768,"span",20),e(3769," type"),i(3770,"br"),t()()(),n(3771,"td",21)(3772,"code",30),e(3773,"string "),t(),n(3774,"code",68),e(3775," PoDynamicFieldType"),t()(),n(3776,"td",24)(3777,"em")(3778,"strong"),e(3779,"(opcional)"),t()(),n(3780,"p"),e(3781,"Tipo do valor campo."),t(),n(3782,"p"),e(3783,"Valores v\xE1lidos:"),t(),n(3784,"ul")(3785,"li")(3786,"code"),e(3787,"boolean"),t(),e(3788,": Valores "),n(3789,"em"),e(3790,"booleanos"),t(),e(3791,"."),t(),n(3792,"li")(3793,"code"),e(3794,"currency"),t(),e(3795,": Valores monet\xE1rios."),t(),n(3796,"li")(3797,"code"),e(3798,"decimal"),t(),e(3799,": Valores decimais."),t(),n(3800,"li")(3801,"code"),e(3802,"date"),t(),e(3803,": Valores de datas."),n(3804,"ul")(3805,"li"),e(3806,"Aceita os tipos "),n(3807,"strong"),e(3808,"string"),t(),e(3809," e "),n(3810,"strong"),e(3811,"Date"),t(),e(3812,` padr\xE3o do Javascript,
por exemplo: `),n(3813,"code"),e(3814,"'2017-11-28'"),t(),e(3815," ou "),n(3816,"code"),e(3817,"new Date(2017, 10, 28)"),t(),e(3818,"."),t()()(),n(3819,"li")(3820,"code"),e(3821,"dateTime"),t(),e(3822,": Valor de data com hor\xE1rio."),n(3823,"ul")(3824,"li"),e(3825,"Aceita o tipo "),n(3826,"em"),e(3827,"string"),t(),e(3828," no formato "),n(3829,"strong"),e(3830,"ISO-8601"),t(),e(3831," extendido "),n(3832,"strong"),e(3833,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(3834,`
e o tipo `),n(3835,"strong"),e(3836,"Date"),t(),e(3837," padr\xE3o do Javascript, por exemplo: "),n(3838,"code"),e(3839,"'2017-11-28T00:00:00-02:00'"),t(),e(3840," ou "),n(3841,"code"),e(3842,"new Date(2017, 10, 28)"),t(),e(3843,"."),t()()(),n(3844,"li")(3845,"code"),e(3846,"number"),t(),e(3847,": Valores num\xE9ricos."),t(),n(3848,"li")(3849,"code"),e(3850,"string"),t(),e(3851,": Textos."),t(),n(3852,"li")(3853,"code"),e(3854,"time"),t(),e(3855,": Valor do hor\xE1rio."),n(3856,"ul")(3857,"li"),e(3858,"Aceita o tipo "),n(3859,"strong"),e(3860,"string"),t(),e(3861," nos formatos "),n(3862,"strong"),e(3863,"'HH:mm:ss'"),t(),e(3864," ou "),n(3865,"strong"),e(3866,"'HH:mm:ss.ffffff'"),t(),e(3867,", por exemplo: "),n(3868,"code"),e(3869,"'23:12:45'"),t(),e(3870,"."),t()()()()()(),n(3871,"tr",17)(3872,"td",18)(3873,"div",19)(3874,"span",20),e(3875," url"),i(3876,"br"),t()()(),n(3877,"td",21)(3878,"code",30),e(3879,"string"),t()(),n(3880,"td",24)(3881,"em")(3882,"strong"),e(3883,"(opcional)"),t()(),n(3884,"p"),e(3885,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),n(3886,"p")(3887,"strong"),e(3888,"Componente compat\xEDvel"),t(),e(3889,": "),n(3890,"code"),e(3891,"po-upload"),t()()()(),n(3892,"tr",17)(3893,"td",18)(3894,"div",19)(3895,"span",20),e(3896," validate"),i(3897,"br"),t()()(),n(3898,"td",21)(3899,"code",30),e(3900,"string "),t(),n(3901,"code",42),e(3902," Function"),t()(),n(3903,"td",24)(3904,"em")(3905,"strong"),e(3906,"(opcional)"),t()(),n(3907,"p"),e(3908,"Fun\xE7\xE3o ou servi\xE7o para validar as "),n(3909,"strong"),e(3910,"mudan\xE7as do campo"),t(),e(3911,"."),t(),n(3912,"ul")(3913,"li"),e(3914,"A propriedade aceita os seguintes tipos:"),t(),n(3915,"li")(3916,"strong"),e(3917,"String"),t(),e(3918,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),n(3919,"code"),e(3920,"POST"),t(),e(3921,"."),t(),n(3922,"li")(3923,"strong"),e(3924,"Function"),t(),e(3925,": M\xE9todo que ser\xE1 executado."),t()(),n(3926,"p"),e(3927,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),n(3928,"code"),e(3929,"PoDynamicFormFieldChanged"),t(),e(3930,":"),t(),n(3931,"p")(3932,"code"),e(3933,"{ property: 'property name', value: 'new value' }"),t()(),n(3934,"p"),e(3935,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(3936,"a",69),e(3937,"PoDynamicFormFieldValidation"),t(),e(3938,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),n(3939,"pre")(3940,"code"),e(3941,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}`),t()(),n(3942,"p"),e(3943,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(3944,"code"),e(3945,"bind"),t(),e(3946,`, por exemplo:
`),n(3947,"code"),e(3948,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),n(3949,"tr",17)(3950,"td",18)(3951,"div",19)(3952,"span",20),e(3953," visible"),i(3954,"br"),t()()(),n(3955,"td",21)(3956,"code",25),e(3957,"boolean"),t()(),n(3958,"td",24)(3959,"em")(3960,"strong"),e(3961,"(opcional)"),t()(),n(3962,"p"),e(3963,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),n(3964,"h4",41)(3965,"code",5),e(3966,"PoLookupColumn"),t()(),n(3967,"div",2)(3968,"p"),e(3969,"Interface para configura\xE7\xE3o das colunas do po-lookup."),t()(),n(3970,"h4",13),e(3971,"Propriedades"),t(),n(3972,"table",14)(3973,"tr",15)(3974,"th",16),e(3975,"Nome"),t(),n(3976,"th",16),e(3977,"Tipo"),t(),n(3978,"th",16),e(3979,"Descri\xE7\xE3o"),t()(),n(3980,"tr",17)(3981,"td",18)(3982,"div",19)(3983,"span",20),e(3984," fieldLabel"),i(3985,"br"),t()()(),n(3986,"td",21)(3987,"code",25),e(3988,"boolean"),t()(),n(3989,"td",24)(3990,"em")(3991,"strong"),e(3992,"(opcional)"),t()(),n(3993,"p"),e(3994,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),t(),n(3995,"p"),e(3996,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),t(),n(3997,"p"),e(3998,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),n(3999,"code"),e(4e3,"p-field-format"),t(),e(4001," ou "),n(4002,"code"),e(4003,"p-field-label"),t(),e(4004," forem configurados no componente."),t()()(),n(4005,"tr",17)(4006,"td",18)(4007,"div",19)(4008,"span",20),e(4009," format"),i(4010,"br"),t()()(),n(4011,"td",21)(4012,"code",30),e(4013,"string"),t()(),n(4014,"td",24)(4015,"em")(4016,"strong"),e(4017,"(opcional)"),t()(),n(4018,"p"),e(4019,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),n(4020,"ul")(4021,"li"),e(4022,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),n(4023,"li"),e(4024,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),n(4025,"tr",17)(4026,"td",18)(4027,"div",19)(4028,"span",20),e(4029," label"),i(4030,"br"),t()()(),n(4031,"td",21)(4032,"code",30),e(4033,"string"),t()(),n(4034,"td",24)(4035,"em")(4036,"strong"),e(4037,"(opcional)"),t()(),n(4038,"p"),e(4039,"Texto para t\xEDtulo da coluna."),t(),n(4040,"p"),e(4041,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),n(4042,"em"),e(4043,"label"),t(),e(4044," o valor da propriedade "),n(4045,"em"),e(4046,"property"),t(),e(4047," com a primeira letra em mai\xFAsculo."),t()()(),n(4048,"tr",17)(4049,"td",18)(4050,"div",19)(4051,"span",20),e(4052," property"),i(4053,"br"),t()()(),n(4054,"td",21)(4055,"code",30),e(4056,"string"),t()(),n(4057,"td",24)(4058,"em")(4059,"strong"),e(4060,"(opcional)"),t()(),n(4061,"p"),e(4062,"Nome identificador da coluna."),t()()(),n(4063,"tr",17)(4064,"td",18)(4065,"div",19)(4066,"span",20),e(4067," type"),i(4068,"br"),t()()(),n(4069,"td",21)(4070,"code",30),e(4071,"string"),t()(),n(4072,"td",24)(4073,"em")(4074,"strong"),e(4075,"(opcional)"),t()(),n(4076,"p"),e(4077,"Tipo da coluna:"),t(),n(4078,"ul")(4079,"li"),e(4080,"string (padr\xE3o): textos"),t(),n(4081,"li"),e(4082,"number: valores num\xE9ricos"),t(),n(4083,"li"),e(4084,"date: data"),t(),n(4085,"li"),e(4086,"currency: valores monet\xE1rios"),t(),n(4087,"li"),e(4088,"dateTime: data e hora"),t()()()(),n(4089,"tr",17)(4090,"td",18)(4091,"div",19)(4092,"span",20),e(4093," width"),i(4094,"br"),t()()(),n(4095,"td",21)(4096,"code",30),e(4097,"string"),t()(),n(4098,"td",24)(4099,"em")(4100,"strong"),e(4101,"(opcional)"),t()(),n(4102,"p"),e(4103,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()(),n(4104,"h4",41)(4105,"code",5),e(4106,"PoLookupFilter"),t()(),n(4107,"div",2)(4108,"p"),e(4109,"Define o tipo de busca utilizado no po-lookup."),t()(),n(4110,"h4",13),e(4111,"M\xE9todos"),t(),n(4112,"table",39)(4113,"tr",17)(4114,"th",40)(4115,"div",19)(4116,"h4")(4117,"span",20),e(4118," getFilteredItems "),t()()()()(),n(4119,"tr",24)(4120,"td",24)(4121,"p"),e(4122,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),n(4123,"em"),e(4124,"Observable"),t(),e(4125," com a resposta da API no formato da interface "),n(4126,"code"),e(4127,"PoLookupResponseApi"),t(),e(4128,"."),t()()()(),n(4129,"h5")(4130,"b"),e(4131,"Par\xE2metros"),t()(),n(4132,"table",14)(4133,"tr",15)(4134,"th",16),e(4135,"Nome"),t(),n(4136,"th",16),e(4137,"Tipo"),t(),n(4138,"th",16),e(4139,"Descri\xE7\xE3o"),t()(),n(4140,"tr",17)(4141,"td",18),e(4142," params"),t(),n(4143,"td",21)(4144,"code",70),e(4145," PoLookupFilteredItemsParams "),t()(),n(4146,"td",24)(4147,"p"),e(4148,"Objeto enviado por par\xE2metro que implementa a interface "),n(4149,"code"),e(4150,"PoLookupFilteredItemsParams"),t(),e(4151,"."),t()()()(),i(4152,"br"),n(4153,"table",39)(4154,"tr",17)(4155,"th",40)(4156,"div",19)(4157,"h4")(4158,"span",20),e(4159," getObjectByValue "),t()()()()(),n(4160,"tr",24)(4161,"td",24)(4162,"p"),e(4163,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),n(4164,"p"),e(4165,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),t()()()(),n(4166,"h5")(4167,"b"),e(4168,"Par\xE2metros"),t()(),n(4169,"table",14)(4170,"tr",15)(4171,"th",16),e(4172,"Nome"),t(),n(4173,"th",16),e(4174,"Tipo"),t(),n(4175,"th",16),e(4176,"Descri\xE7\xE3o"),t()(),n(4177,"tr",17)(4178,"td",18),e(4179," value"),t(),n(4180,"td",21)(4181,"code",30),e(4182," string "),t(),n(4183,"code",64),e(4184," Array<any> "),t()(),n(4185,"td",24)(4186,"p"),e(4187,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),n(4188,"tr",17)(4189,"td",18),e(4190," filterParams"),t(),n(4191,"td",21)(4192,"code",70),e(4193," any "),t()(),n(4194,"td",24)(4195,"p"),e(4196,"Valor informado atrav\xE9s da propriedade "),n(4197,"code"),e(4198,"p-filter-params"),t(),e(4199,"."),t()()()(),i(4200,"br"),n(4201,"h4",41)(4202,"code",5),e(4203,"PoLookupFilteredItemsParams"),t()(),n(4204,"div",2)(4205,"p"),e(4206,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),n(4207,"code"),e(4208,"getFilteredItems"),t(),e(4209,"."),t()(),n(4210,"h4",13),e(4211,"Propriedades"),t(),n(4212,"table",14)(4213,"tr",15)(4214,"th",16),e(4215,"Nome"),t(),n(4216,"th",16),e(4217,"Tipo"),t(),n(4218,"th",16),e(4219,"Descri\xE7\xE3o"),t()(),n(4220,"tr",17)(4221,"td",18)(4222,"div",19)(4223,"span",20),e(4224," advancedFilters"),i(4225,"br"),t()()(),n(4226,"td",21)(4227,"code",71),e(4228,`{ [key: string]: any;
}`),t()(),n(4229,"td",24)(4230,"em")(4231,"strong"),e(4232,"(opcional)"),t()(),n(4233,"p"),e(4234,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),t()()(),n(4235,"tr",17)(4236,"td",18)(4237,"div",19)(4238,"span",20),e(4239," filter"),i(4240,"br"),t()()(),n(4241,"td",21)(4242,"code",30),e(4243,"string"),t()(),n(4244,"td",24)(4245,"em")(4246,"strong"),e(4247,"(opcional)"),t()(),n(4248,"p"),e(4249,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),n(4250,"tr",17)(4251,"td",18)(4252,"div",19)(4253,"span",20),e(4254," filterParams"),i(4255,"br"),t()()(),n(4256,"td",21)(4257,"code",33),e(4258,"any"),t()(),n(4259,"td",24)(4260,"em")(4261,"strong"),e(4262,"(opcional)"),t()(),n(4263,"p"),e(4264,"Valor informado atrav\xE9s da propriedade "),n(4265,"code"),e(4266,"p-filter-params"),t(),e(4267,"."),t()()(),n(4268,"tr",17)(4269,"td",18)(4270,"div",19)(4271,"span",20),e(4272," order"),i(4273,"br"),t()()(),n(4274,"td",21)(4275,"code",30),e(4276,"string"),t()(),n(4277,"td",24)(4278,"em")(4279,"strong"),e(4280,"(opcional)"),t()(),n(4281,"p"),e(4282,"Coluna que est\xE1 sendo ordenada na tabela."),t(),n(4283,"ul")(4284,"li"),e(4285,"Coluna decrescente ser\xE1 informada da seguinte forma: "),n(4286,"code"),e(4287,"-<colunaOrdenada>"),t(),e(4288,", por exemplo "),n(4289,"code"),e(4290,"-name"),t(),e(4291,"."),t(),n(4292,"li"),e(4293,"Coluna ascendente ser\xE1 informada da seguinte forma: "),n(4294,"code"),e(4295,"<colunaOrdenada>"),t(),e(4296,", por exemplo "),n(4297,"code"),e(4298,"name"),t(),e(4299,"."),t()()()(),n(4300,"tr",17)(4301,"td",18)(4302,"div",19)(4303,"span",20),e(4304," page"),i(4305,"br"),t()()(),n(4306,"td",21)(4307,"code",43),e(4308,"number"),t()(),n(4309,"td",24)(4310,"em")(4311,"strong"),e(4312,"(opcional)"),t()(),n(4313,"p"),e(4314,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),n(4315,"tr",17)(4316,"td",18)(4317,"div",19)(4318,"span",20),e(4319," pageSize"),i(4320,"br"),t()()(),n(4321,"td",21)(4322,"code",43),e(4323,"number"),t()(),n(4324,"td",24)(4325,"em")(4326,"strong"),e(4327,"(opcional)"),t()(),n(4328,"p"),e(4329,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()(),n(4330,"h4",41)(4331,"code",5),e(4332,"PoLookupLiterals"),t()(),n(4333,"div",2)(4334,"p"),e(4335,"Interface para defini\xE7\xE3o das literais usadas no "),n(4336,"code"),e(4337,"po-lookup"),t(),e(4338,"."),t()(),n(4339,"h4",13),e(4340,"Propriedades"),t(),n(4341,"table",14)(4342,"tr",15)(4343,"th",16),e(4344,"Nome"),t(),n(4345,"th",16),e(4346,"Tipo"),t(),n(4347,"th",16),e(4348,"Descri\xE7\xE3o"),t()(),n(4349,"tr",17)(4350,"td",18)(4351,"div",19)(4352,"span",20),e(4353," clean"),i(4354,"br"),t()()(),n(4355,"td",21)(4356,"code",30),e(4357,"string"),t()(),n(4358,"td",24)(4359,"em")(4360,"strong"),e(4361,"(opcional)"),t()(),n(4362,"p"),e(4363,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),t()()(),n(4364,"tr",17)(4365,"td",18)(4366,"div",19)(4367,"span",20),e(4368," modalAdvancedSearch"),i(4369,"br"),t()()(),n(4370,"td",21)(4371,"code",30),e(4372,"string"),t()(),n(4373,"td",24)(4374,"em")(4375,"strong"),e(4376,"(opcional)"),t()(),n(4377,"p"),e(4378,"Texto do link de busca avan\xE7ada."),t(),n(4379,"p"),e(4380,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),t()()(),n(4381,"tr",17)(4382,"td",18)(4383,"div",19)(4384,"span",20),e(4385," modalAdvancedSearchPrimaryActionLabel"),i(4386,"br"),t()()(),n(4387,"td",21)(4388,"code",30),e(4389,"string"),t()(),n(4390,"td",24)(4391,"em")(4392,"strong"),e(4393,"(opcional)"),t()(),n(4394,"p"),e(4395,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),t()()(),n(4396,"tr",17)(4397,"td",18)(4398,"div",19)(4399,"span",20),e(4400," modalAdvancedSearchSecondaryActionLabel"),i(4401,"br"),t()()(),n(4402,"td",21)(4403,"code",30),e(4404,"string"),t()(),n(4405,"td",24)(4406,"em")(4407,"strong"),e(4408,"(opcional)"),t()(),n(4409,"p"),e(4410,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),t()()(),n(4411,"tr",17)(4412,"td",18)(4413,"div",19)(4414,"span",20),e(4415," modalAdvancedSearchTitle"),i(4416,"br"),t()()(),n(4417,"td",21)(4418,"code",30),e(4419,"string"),t()(),n(4420,"td",24)(4421,"em")(4422,"strong"),e(4423,"(opcional)"),t()(),n(4424,"p"),e(4425,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),t()()(),n(4426,"tr",17)(4427,"td",18)(4428,"div",19)(4429,"span",20),e(4430," modalDisclaimerGroupTitle"),i(4431,"br"),t()()(),n(4432,"td",21)(4433,"code",30),e(4434,"string"),t()(),n(4435,"td",24)(4436,"em")(4437,"strong"),e(4438,"(opcional)"),t()(),n(4439,"p"),e(4440,"Texto exibido no t\xEDtulo do disclaimer."),t()()(),n(4441,"tr",17)(4442,"td",18)(4443,"div",19)(4444,"span",20),e(4445," modalPlaceholder"),i(4446,"br"),t()()(),n(4447,"td",21)(4448,"code",30),e(4449,"string"),t()(),n(4450,"td",24)(4451,"em")(4452,"strong"),e(4453,"(opcional)"),t()(),n(4454,"p"),e(4455,"Texto exibido no placeholder do input da modal."),t()()(),n(4456,"tr",17)(4457,"td",18)(4458,"div",19)(4459,"span",20),e(4460," modalPrimaryActionLabel"),i(4461,"br"),t()()(),n(4462,"td",21)(4463,"code",30),e(4464,"string"),t()(),n(4465,"td",24)(4466,"em")(4467,"strong"),e(4468,"(opcional)"),t()(),n(4469,"p"),e(4470,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),n(4471,"tr",17)(4472,"td",18)(4473,"div",19)(4474,"span",20),e(4475," modalSecondaryActionLabel"),i(4476,"br"),t()()(),n(4477,"td",21)(4478,"code",30),e(4479,"string"),t()(),n(4480,"td",24)(4481,"em")(4482,"strong"),e(4483,"(opcional)"),t()(),n(4484,"p"),e(4485,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),n(4486,"tr",17)(4487,"td",18)(4488,"div",19)(4489,"span",20),e(4490," modalTableLoadMoreData"),i(4491,"br"),t()()(),n(4492,"td",21)(4493,"code",30),e(4494,"string"),t()(),n(4495,"td",24)(4496,"em")(4497,"strong"),e(4498,"(opcional)"),t()(),n(4499,"p"),e(4500,"Label do "),n(4501,"code"),e(4502,"button"),t(),e(4503," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),t()()(),n(4504,"tr",17)(4505,"td",18)(4506,"div",19)(4507,"span",20),e(4508," modalTableLoadingData"),i(4509,"br"),t()()(),n(4510,"td",21)(4511,"code",30),e(4512,"string"),t()(),n(4513,"td",24)(4514,"em")(4515,"strong"),e(4516,"(opcional)"),t()(),n(4517,"p"),e(4518,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),t()()(),n(4519,"tr",17)(4520,"td",18)(4521,"div",19)(4522,"span",20),e(4523," modalTableNoColumns"),i(4524,"br"),t()()(),n(4525,"td",21)(4526,"code",30),e(4527,"string"),t()(),n(4528,"td",24)(4529,"em")(4530,"strong"),e(4531,"(opcional)"),t()(),n(4532,"p"),e(4533,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),t()()(),n(4534,"tr",17)(4535,"td",18)(4536,"div",19)(4537,"span",20),e(4538," modalTableNoData"),i(4539,"br"),t()()(),n(4540,"td",21)(4541,"code",30),e(4542,"string"),t()(),n(4543,"td",24)(4544,"em")(4545,"strong"),e(4546,"(opcional)"),t()(),n(4547,"p"),e(4548,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),t()()(),n(4549,"tr",17)(4550,"td",18)(4551,"div",19)(4552,"span",20),e(4553," modalTitle"),i(4554,"br"),t()()(),n(4555,"td",21)(4556,"code",30),e(4557,"string"),t()(),n(4558,"td",24)(4559,"em")(4560,"strong"),e(4561,"(opcional)"),t()(),n(4562,"p"),e(4563,"Texto exibido no t\xEDtulo da modal."),t()()(),n(4564,"tr",17)(4565,"td",18)(4566,"div",19)(4567,"span",20),e(4568," search"),i(4569,"br"),t()()(),n(4570,"td",21)(4571,"code",30),e(4572,"string"),t()(),n(4573,"td",24)(4574,"em")(4575,"strong"),e(4576,"(opcional)"),t()(),n(4577,"p"),e(4578,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),t()()()(),n(4579,"h4",41)(4580,"code",5),e(4581,"PoLookupResponseApi"),t()(),n(4582,"div",2)(4583,"p"),e(4584,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),t()(),n(4585,"h4",13),e(4586,"Propriedades"),t(),n(4587,"table",14)(4588,"tr",15)(4589,"th",16),e(4590,"Nome"),t(),n(4591,"th",16),e(4592,"Tipo"),t(),n(4593,"th",16),e(4594,"Descri\xE7\xE3o"),t()(),n(4595,"tr",17)(4596,"td",18)(4597,"div",19)(4598,"span",20),e(4599," hasNext"),i(4600,"br"),t()()(),n(4601,"td",21)(4602,"code",25),e(4603,"boolean"),t()(),n(4604,"td",24)(4605,"p"),e(4606,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),n(4607,"tr",17)(4608,"td",18)(4609,"div",19)(4610,"span",20),e(4611," items"),i(4612,"br"),t()()(),n(4613,"td",21)(4614,"code",72),e(4615,"Array<object>"),t()(),n(4616,"td",24)(4617,"p"),e(4618,"Lista de itens retornados."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var Re=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(f(he),f(fe))};static \u0275cmp=u({type:a,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title"," Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(l,o){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),i(3,"sample-po-lookup-doc"),t(),n(4,"po-tab",3),i(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view"),t()()()),l&2&&(c("p-actions",o.actions),d(2),c("p-active",o.activeTab.includes("doc")),d(2),c("p-hide",o.hidePoWebSample)("p-active",o.activeTab.includes("web")))},dependencies:[Le,C,k,Me,_e,Ie,Ve,je,ze,Be],encapsulation:2})}return a})();var xt=[{path:"",component:Re}],We=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=$({type:a});static \u0275inj=Q({imports:[le.forChild(xt),le]})}return a})();var dn=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=$({type:a});static \u0275inj=Q({imports:[Fe,We]})}return a})();export{dn as DocPoLookupModule};
