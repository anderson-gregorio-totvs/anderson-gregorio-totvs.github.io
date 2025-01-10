import{$,$a as w,A,Bc as Y,Cd as B,F as E,Fa as ce,G as x,Ga as e,Ia as L,Ka as b,Kb as ae,La as v,Lb as _,Ma as g,Mb as j,Na as D,Nb as X,Oa as U,Ob as I,Od as Le,Pa as F,Pb as N,Sb as be,T as d,Tb as ve,U as f,Ua as ue,Va as Ee,Vb as ge,Wb as he,Xd as C,Yb as fe,Yd as k,Zb as le,_ as u,a as G,ad as Z,bb as xe,c as me,dd as ke,ea as pe,gd as ee,h as ne,ha as c,hb as Se,ka as P,md as ye,na as i,oa as t,oc as H,pa as n,pb as V,pd as M,q as de,re as y,se as Fe,ta as J,ua as S,va as se,vc as K,x as O,y as Q,yd as z,za as oe,zc as Ce,zd as Pe}from"./chunk-QVEZB6GT.js";var we=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&n(0,"po-lookup",0)},dependencies:[M],encapsulation:2})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Basic"),t(),i(4,"a",2),S("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-basic/sample-po-lookup-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-lookup-basic"),t(),n(23,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),c("ngClass",F(4,Ge,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,we],encapsulation:2})}return a})();var T=(()=>{class a{httpClient;url="https://po-sample-api.onrender.com/v1/heroes";constructor(r){this.httpClient=r}getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,p=me(m,["filterParams","advancedFilters"]),s=G(G(G({},p),l),o);return this.httpClient.get(this.url,{params:s})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)(A(V))};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Te=(()=>{class a{sampleFilterService;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;spacing=ke.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];constructor(r){this.sampleFilterService=r}ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch{this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch{this.customAdvancedFilters=void 0}}restore(){this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[]}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static \u0275fac=function(l){return new(l||a)(f(T))};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-labs"]],standalone:!1,features:[D([T])],decls:31,vars:46,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-selected","ngModel","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-spacing","p-text-wrap","p-virtual-scroll","p-error-limit"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","4","p-label","Columns",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","2","p-label","Properties",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-label","Spacing",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,o){if(l&1){let p=J();i(0,"po-lookup",1),g("ngModelChange",function(m){return E(p),v(o.lookup,m)||(o.lookup=m),x(m)}),S("p-change",function(){return E(p),x(o.changeEvent("p-change"))})("p-error",function(){return E(p),x(o.changeEvent("p-error"))})("p-selected",function(){return E(p),x(o.changeEvent("p-selected"))}),t(),n(1,"hr"),i(2,"po-container",2)(3,"div",3),n(4,"po-info",4)(5,"po-info",5),t()(),n(6,"hr"),i(7,"form",null,0)(9,"div",3)(10,"po-input",6),g("ngModelChange",function(m){return E(p),v(o.label,m)||(o.label=m),x(m)}),t(),i(11,"po-checkbox-group",7),g("ngModelChange",function(m){return E(p),v(o.columnsName,m)||(o.columnsName=m),x(m)}),S("p-change",function(){return E(p),x(o.updateColumns())}),t()(),i(12,"div",3)(13,"po-select",8),g("ngModelChange",function(m){return E(p),v(o.fieldLabel,m)||(o.fieldLabel=m),x(m)}),t(),i(14,"po-select",9),g("ngModelChange",function(m){return E(p),v(o.fieldValue,m)||(o.fieldValue=m),x(m)}),t()(),i(15,"div",3)(16,"po-input",10),g("ngModelChange",function(m){return E(p),v(o.filterService,m)||(o.filterService=m),x(m)}),t(),i(17,"po-input",11),g("ngModelChange",function(m){return E(p),v(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),x(m)}),t()(),i(18,"div",3)(19,"po-input",12),g("ngModelChange",function(m){return E(p),v(o.help,m)||(o.help=m),x(m)}),t(),i(20,"po-input",13),g("ngModelChange",function(m){return E(p),v(o.placeholder,m)||(o.placeholder=m),x(m)}),t()(),i(21,"div",3)(22,"po-input",14),g("ngModelChange",function(m){return E(p),v(o.literals,m)||(o.literals=m),x(m)}),S("p-change",function(){return E(p),x(o.changeLiterals())}),t(),i(23,"po-input",15),g("ngModelChange",function(m){return E(p),v(o.formatField,m)||(o.formatField=m),x(m)}),S("p-change",function(m){return E(p),x(o.onFieldFormatChange(m))}),t()(),i(24,"div",3)(25,"po-checkbox-group",16),g("ngModelChange",function(m){return E(p),v(o.properties,m)||(o.properties=m),x(m)}),t(),i(26,"po-radio-group",17),g("ngModelChange",function(m){return E(p),v(o.spacing,m)||(o.spacing=m),x(m)}),t()(),i(27,"div",3)(28,"po-textarea",18),g("ngModelChange",function(m){return E(p),v(o.advancedFilters,m)||(o.advancedFilters=m),x(m)}),S("p-change",function(){return E(p),x(o.changeAdvancedFilters())}),t()(),i(29,"div",3)(30,"po-button",19),S("p-click",function(){return E(p),x(o.restore())}),t()()()}l&2&&(b("ngModel",o.lookup),c("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit")),d(4),c("p-value",o.lookup),d(),c("p-value",o.event),d(5),b("ngModel",o.label),d(),b("ngModel",o.columnsName),c("p-options",o.columnsOptions),d(2),b("ngModel",o.fieldLabel),c("p-options",o.fieldLabelOptions),d(),b("ngModel",o.fieldValue),c("p-options",o.fieldValueOptions),d(2),b("ngModel",o.filterService),d(),b("ngModel",o.fieldErrorMessage),d(2),b("ngModel",o.help),d(),b("ngModel",o.placeholder),d(2),b("ngModel",o.literals),d(),b("ngModel",o.formatField),d(2),b("ngModel",o.properties),c("p-options",o.propertiesOptions),d(),b("ngModel",o.spacing),c("p-options",o.typeSpacing),d(2),b("ngModel",o.advancedFilters))},dependencies:[N,_,j,I,X,H,K,Ce,Y,ye,M,z,Pe,B],encapsulation:2})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Labs"),t(),i(4,"a",2),S("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-lookup
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
  [p-error-limit]="properties?.includes('errorLimit')"
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
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-labs/sample-po-lookup-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

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
    { value: 'virtualScroll', label: 'Virtual Sroll' },
    { value: 'errorLimit', label: 'Limit Error Message' }
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
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
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
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-labs"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),c("ngClass",F(4,Je,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Te],encapsulation:2})}return a})();var Ke=()=>({modalTitle:"Heroes available for mission"}),De=(()=>{class a{service;notification;hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:!0,gridColumns:6,label:"Hero"},{property:"name",optional:!0,gridColumns:6}];constructor(r,l){this.service=r,this.notification=l}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static \u0275fac=function(l){return new(l||a)(f(T),f(Z))};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-hero"]],standalone:!1,features:[D([T])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let p=J();i(0,"div",1),n(1,"po-info",2),t(),n(2,"hr"),i(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),g("ngModelChange",function(m){return E(p),v(o.hero,m)||(o.hero=m),x(m)}),t(),i(7,"po-select",4),g("ngModelChange",function(m){return E(p),v(o.vehicle,m)||(o.vehicle=m),x(m)}),t()(),i(8,"div",1)(9,"po-button",5),S("p-click",function(){return E(p),x(o.startMission())}),t()()()}if(l&2){let p=ce(4);d(6),b("ngModel",o.hero),c("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",!0)("p-advanced-filters",o.advancedFilters)("p-literals",U(10,Ke)),d(),b("ngModel",o.vehicle),c("p-options",o.vehicles),d(2),c("p-disabled",p.form.invalid||p.form.pending)}},dependencies:[N,_,j,I,X,H,M,z,B],encapsulation:2})}return a})();var Ze=a=>({"docs-sample-code-tabs":a}),Ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero"),t(),i(4,"a",2),S("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero/sample-po-lookup-hero.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

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
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
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
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-hero"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),c("ngClass",F(4,Ze,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,De],encapsulation:2})}return a})();var tt=()=>["nickname","label"],it=()=>({modalTitle:"Heroes available for mission"}),Oe=(()=>{class a{service;notification;formBuilder;formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];constructor(r,l,o){this.service=r,this.notification=l,this.formBuilder=o}ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,ae.required],vehicle:[null,ae.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static \u0275fac=function(l){return new(l||a)(f(T),f(Z),f(ge))};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:!1,features:[D([T])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(i(0,"div",0),n(1,"po-info",1),t(),n(2,"hr"),i(3,"form",2)(4,"div",0),n(5,"po-lookup",3)(6,"po-select",4),t(),i(7,"div",0)(8,"po-button",5),S("p-click",function(){return o.startMission()}),t()()()),l&2&&(d(3),c("formGroup",o.formMission),d(2),c("p-columns",o.columns)("p-field-format",U(7,tt))("p-filter-service",o.service)("p-literals",U(8,it)),d(),c("p-options",o.vehicles),d(2),c("p-disabled",o.formMission.invalid||o.formMission.pending))},dependencies:[N,_,j,be,ve,H,M,z,B],encapsulation:2})}return a})();var ot=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero Reactive Form"),t(),i(4,"a",2),S("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
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
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
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
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-hero-reactive-form"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),c("ngClass",F(4,ot,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Oe],encapsulation:2})}return a})();var ie=(()=>{class a{http;baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";constructor(r){this.http=r}getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let p={page:l.toString()};return r&&(p.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:p}).pipe(ne(s=>({items:s.results,hasNext:!!s.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(ne(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)(A(V))};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function rt(a,bt){if(a&1&&(i(0,"div",0),n(1,"po-table",4),t()),a&2){let r=se();d(),c("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",!0)("p-hide-table-search",!1)}}var Ve=(()=>{class a{filterService;entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;constructor(r){this.filterService=r}get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case"people":return this.characterColumns;case"planets":return this.planetsColumns;case"starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case"people":return"character";case"planets":return"planet";case"starships":return"starship"}}static \u0275fac=function(l){return new(l||a)(f(ie))};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:!1,features:[D([ie])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],["class","po-row",4,"ngIf"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"po-radio-group",1),g("ngModelChange",function(s){return v(o.filterParams,s)||(o.filterParams=s),s}),t()(),n(2,"hr"),i(3,"div",0)(4,"po-lookup",2),ue(5,"titlecase"),g("ngModelChange",function(s){return v(o.entity,s)||(o.entity=s),s}),S("p-selected",function(s){return o.onSelected(s)}),t()(),pe(6,rt,2,4,"div",3)),l&2&&(d(),b("ngModel",o.filterParams),c("p-options",o.entities),d(3),oe("p-help","Select a ",o.entityLabel," to see the list of movies in which it participated"),oe("p-label","",Ee(5,12,o.entityLabel)," of Star Wars"),b("ngModel",o.entity),c("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",!0),d(2),c("ngIf",o.filmItemsFiltered&&o.entity))},dependencies:[xe,_,I,Y,M,ee,Se],encapsulation:2})}return a})();var dt=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Star Wars films"),t(),i(4,"a",2),S("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
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
`),t(),i(21,"label",6),e(22,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
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
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-sw-films"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),c("ngClass",F(4,dt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Ve],encapsulation:2})}return a})();var Ne=(()=>{class a{http;constructor(r){this.http=r}getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(de("items"))}static \u0275fac=function(l){return new(l||a)(A(V))};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var He=(()=>{class a{service;loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];constructor(r){this.service=r}changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank")}static \u0275fac=function(l){return new(l||a)(f(Ne))};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:!1,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"po-lookup",1),g("ngModelChange",function(s){return v(o.multiLookup,s)||(o.multiLookup=s),s}),S("p-change",function(s){return o.changeOptions(s)}),t(),i(2,"po-container",2),n(3,"po-table",3),t()()),l&2&&(d(),b("ngModel",o.multiLookup),c("p-multiple",!0),d(2),c("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-loading",o.loading))},dependencies:[_,I,K,M,ee],encapsulation:2})}return a})();var ut=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Multiple"),t(),i(4,"a",2),S("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';
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
`),t(),i(21,"label",6),e(22,"sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
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
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-multiple"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),c("ngClass",F(4,ut,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,He],encapsulation:2})}return a})();var Be=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-lookup-doc"]],standalone:!1,decls:4785,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoTableColumnSpacing"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),i(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),i(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),i(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),i(16,"h3",3),e(17,"Componente"),t(),i(18,"h4",4)(19,"code",5),e(20,"PoLookupComponent"),t()(),i(21,"div",2)(22,"p"),e(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),i(24,"code"),e(25,"po-lookup"),t(),e(26," permite que o usu\xE1rio digite um valor e pressione a tecla "),i(27,"em"),e(28,"TAB"),t(),e(29,` para
buscar um registro.`),t(),i(30,"blockquote")(31,"p"),e(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),t()(),i(33,"blockquote")(34,"p"),e(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),i(36,"a",6),e(37,"modelo"),t(),e(38," como "),i(39,"code"),e(40,"pending"),t(),e(41,"."),t()(),i(42,"p"),e(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),i(44,"code"),e(45,"po-select"),t(),e(46," ou o "),i(47,"code"),e(48,"po-combo"),t(),e(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),i(50,"a",7),e(51,"Guia de implementa\xE7\xE3o das APIs TOTVS"),t(),e(52,"."),t(),i(53,"p"),e(54,"Importante:"),t(),i(55,"ul")(56,"li"),e(57,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),i(58,"pre")(59,"code"),e(60,`<po-lookup
[(ngModel)]="pessoa.nome"
[ngModelOptions]="{standalone: true}">
</po-lookup>`),t()()()(),i(61,"h4",8),e(62,"Tokens customiz\xE1veis"),t(),i(63,"p"),e(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),i(65,"blockquote")(66,"p"),e(67,"Para maiores informa\xE7\xF5es, acesse o guia "),i(68,"a",9),e(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(70,"."),t()(),i(71,"table")(72,"thead")(73,"tr")(74,"th"),e(75,"Propriedade"),t(),i(76,"th"),e(77,"Descri\xE7\xE3o"),t(),i(78,"th"),e(79,"Valor Padr\xE3o"),t()()(),i(80,"tbody")(81,"tr")(82,"td")(83,"strong"),e(84,"Default Values"),t()(),n(85,"td")(86,"td"),t(),i(87,"tr")(88,"td")(89,"code"),e(90,"--font-family"),t()(),i(91,"td"),e(92,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(93,"td")(94,"code"),e(95,"var(--font-family-theme)"),t()()(),i(96,"tr")(97,"td")(98,"code"),e(99,"--font-size"),t()(),i(100,"td"),e(101,"Tamanho da fonte"),t(),i(102,"td")(103,"code"),e(104,"var(--font-size-default)"),t()()(),i(105,"tr")(106,"td")(107,"code"),e(108,"--text-color-placeholder"),t()(),i(109,"td"),e(110,"Cor do texto no placeholder"),t(),i(111,"td")(112,"code"),e(113,"var(--color-neutral-light-30)"),t()()(),i(114,"tr")(115,"td")(116,"code"),e(117,"--color"),t()(),i(118,"td"),e(119,"Cor principal do lookup"),t(),i(120,"td")(121,"code"),e(122,"var(--color-neutral-dark-70)"),t()()(),i(123,"tr")(124,"td")(125,"code"),e(126,"--border-radius"),t()(),i(127,"td"),e(128,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),t(),i(129,"td")(130,"code"),e(131,"var(--border-radius-md)"),t()()(),i(132,"tr")(133,"td")(134,"code"),e(135,"--background"),t()(),i(136,"td"),e(137,"Cor de background"),t(),i(138,"td")(139,"code"),e(140,"var(--color-neutral-light-05)"),t()()(),i(141,"tr")(142,"td")(143,"code"),e(144,"--text-color"),t()(),i(145,"td"),e(146,"Cor do texto"),t(),i(147,"td")(148,"code"),e(149,"var(--color-neutral-dark-90)"),t()()(),i(150,"tr")(151,"td")(152,"code"),e(153,"--color-clear"),t()(),i(154,"td"),e(155,"Cor principal do icone clear"),t(),i(156,"td")(157,"code"),e(158,"var(--color-action-default)"),t()()(),i(159,"tr")(160,"td")(161,"strong"),e(162,"Icon"),t()(),n(163,"td")(164,"td"),t(),i(165,"tr")(166,"td")(167,"code"),e(168,"--color-icon"),t()(),i(169,"td"),e(170,"Cor principal do icone pesquisar"),t(),i(171,"td")(172,"code"),e(173,"var(--color-action-default)"),t()()(),i(174,"tr")(175,"td")(176,"strong"),e(177,"Hover"),t()(),n(178,"td")(179,"td"),t(),i(180,"tr")(181,"td")(182,"code"),e(183,"--color-hover"),t()(),i(184,"td"),e(185,"Cor principal no estado hover"),t(),i(186,"td")(187,"code"),e(188,"var(--color-action-hover)"),t()()(),i(189,"tr")(190,"td")(191,"code"),e(192,"--background-hover"),t()(),i(193,"td"),e(194,"Cor de background no estado hover"),t(),i(195,"td")(196,"code"),e(197,"var(--color-brand-01-lightest)"),t()()(),i(198,"tr")(199,"td")(200,"strong"),e(201,"Focused"),t()(),n(202,"td")(203,"td"),t(),i(204,"tr")(205,"td")(206,"code"),e(207,"--color-focused"),t()(),i(208,"td"),e(209,"Cor principal no estado de focus"),t(),i(210,"td")(211,"code"),e(212,"var(--color-action-default)"),t()()(),i(213,"tr")(214,"td")(215,"code"),e(216,"--outline-color-focused"),t()(),i(217,"td"),e(218,"Cor do outline do estado de focus"),t(),i(219,"td")(220,"code"),e(221,"var(--color-action-focus)"),t()()(),i(222,"tr")(223,"td")(224,"strong"),e(225,"Disabled"),t()(),n(226,"td")(227,"td"),t(),i(228,"tr")(229,"td")(230,"code"),e(231,"--color-disabled"),t()(),i(232,"td"),e(233,"Cor principal no estado disabled"),t(),i(234,"td")(235,"code"),e(236,"var(--color-action-disabled)"),t()()(),i(237,"tr")(238,"td")(239,"code"),e(240,"--background-disabled"),t()(),i(241,"td"),e(242,"Cor de background no estado disabled"),t(),i(243,"td")(244,"code"),e(245,"var(--color-neutral-light-20)"),t()()(),i(246,"tr")(247,"td")(248,"code"),e(249,"--text-color-disabled"),t()(),i(250,"td"),e(251,"Cor do texto quando campo est\xE1 desabilitado"),t(),i(252,"td")(253,"code"),e(254,"var(--color-action-disabled)"),t()()(),i(255,"tr")(256,"td")(257,"strong"),e(258,"Error"),t()(),n(259,"td")(260,"td"),t(),i(261,"tr")(262,"td")(263,"code"),e(264,"--color-error"),t()(),i(265,"td"),e(266,"Cor de background no estado de requerido"),t(),i(267,"td")(268,"code"),e(269,"var(--color-feedback-negative-base)"),t()()()()()(),i(270,"div",10)(271,"h4",11),e(272,"Seletor"),t(),i(273,"pre",12),e(274,`<po-lookup
    p-advanced-filters="Array<PoLookupAdvancedFilter>"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-change)="EventEmitter"
    (p-change-visible-columns)="EventEmitter"
    p-clean="boolean"
    (p-restore-column-manager)="EventEmitter"
    p-columns="Array<PoLookupColumn>"
    p-disabled="boolean"
    p-error-limit="boolean"
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
`),t()(),i(275,"h4",13),e(276,"Propriedades"),t(),i(277,"table",14)(278,"tr",15)(279,"th",16),e(280,"Nome"),t(),i(281,"th",16),e(282,"Tipo"),t(),i(283,"th",16),e(284,"Padr\xE3o"),t(),i(285,"th",16),e(286,"Descri\xE7\xE3o"),t()(),i(287,"tr",17)(288,"td",18)(289,"div",19)(290,"span",20),e(291," p-advanced-filters"),n(292,"br"),t()()(),i(293,"td",21)(294,"code",22),e(295,"Array<PoLookupAdvancedFilter>"),t()(),i(296,"td",23),e(297,"-"),t(),i(298,"td",24)(299,"em")(300,"strong"),e(301,"(opcional)"),t()(),i(302,"p"),e(303,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),i(304,"blockquote")(305,"p"),e(306,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),i(307,"p"),e(308,"Exemplo de URL com busca avan\xE7ada:"),t(),i(309,"pre")(310,"code"),e(311,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),i(312,"p"),e(313,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),t(),i(314,"pre")(315,"code"),e(316,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),i(317,"tr",17)(318,"td",18)(319,"div",19)(320,"span",20),e(321," p-auto-focus"),n(322,"br"),t()()(),i(323,"td",21)(324,"code",25),e(325,"boolean"),t()(),i(326,"td",23)(327,"p")(328,"code"),e(329,"false"),t()()(),i(330,"td",24)(331,"em")(332,"strong"),e(333,"(opcional)"),t()(),i(334,"p"),e(335,"Aplica foco no elemento ao ser iniciado."),t(),i(336,"blockquote")(337,"p"),e(338,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(339,"tr",17)(340,"td",18)(341,"div",19)(342,"span",20),e(343," p-auto-height"),n(344,"br"),t()()(),i(345,"td",21)(346,"code",25),e(347,"boolean"),t()(),i(348,"td",23)(349,"p")(350,"code"),e(351,"false"),t()()(),i(352,"td",24)(353,"em")(354,"strong"),e(355,"(opcional)"),t()(),i(356,"p"),e(357,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),t()()(),i(358,"tr",17)(359,"td",18)(360,"div",26)(361,"span",27),e(362," (p-change)"),n(363,"br"),t()()(),i(364,"td",21)(365,"code",28),e(366,"EventEmitter"),t()(),i(367,"td",23),e(368,"-"),t(),i(369,"td",24)(370,"em")(371,"strong"),e(372,"(opcional)"),t()(),i(373,"p"),e(374,"Evento que ser\xE1 disparado ao alterar o model. Por par\xE2metro ser\xE1 passado o novo valor."),t()()(),i(375,"tr",17)(376,"td",18)(377,"div",26)(378,"span",27),e(379," (p-change-visible-columns)"),n(380,"br"),t()()(),i(381,"td",21)(382,"code",28),e(383,"EventEmitter"),t()(),i(384,"td",23),e(385,"-"),t(),i(386,"td",24)(387,"em")(388,"strong"),e(389,"(opcional)"),t()(),i(390,"p"),e(391,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),i(392,"p"),e(393,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),i(394,"tr",17)(395,"td",18)(396,"div",19)(397,"span",20),e(398," p-clean"),n(399,"br"),t()()(),i(400,"td",21)(401,"code",25),e(402,"boolean"),t()(),i(403,"td",23),e(404,"-"),t(),i(405,"td",24)(406,"p"),e(407,"Exibe um \xEDcone que permite limpar o campo."),t()()(),i(408,"tr",17)(409,"td",18)(410,"div",26)(411,"span",27),e(412," (p-restore-column-manager)"),n(413,"br"),t()()(),i(414,"td",21)(415,"code",28),e(416,"EventEmitter"),t()(),i(417,"td",23),e(418,"-"),t(),i(419,"td",24)(420,"em")(421,"strong"),e(422,"(opcional)"),t()(),i(423,"p"),e(424,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),i(425,"p"),e(426,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),i(427,"tr",17)(428,"td",18)(429,"div",19)(430,"span",20),e(431," p-columns"),n(432,"br"),t()()(),i(433,"td",21)(434,"code",29),e(435,"Array<PoLookupColumn>"),t()(),i(436,"td",23),e(437,"-"),t(),i(438,"td",24)(439,"em")(440,"strong"),e(441,"(opcional)"),t()(),i(442,"p"),e(443,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),t()()(),i(444,"tr",17)(445,"td",18)(446,"div",19)(447,"span",20),e(448," p-disabled"),n(449,"br"),t()()(),i(450,"td",21)(451,"code",25),e(452,"boolean"),t()(),i(453,"td",23)(454,"p"),e(455,"false"),t()(),i(456,"td",24)(457,"em")(458,"strong"),e(459,"(opcional)"),t()(),i(460,"p"),e(461,"Indica que o campo ser\xE1 desabilitado."),t()()(),i(462,"tr",17)(463,"td",18)(464,"div",19)(465,"span",20),e(466," p-error-limit"),n(467,"br"),t()()(),i(468,"td",21)(469,"code",25),e(470,"boolean"),t()(),i(471,"td",23)(472,"p")(473,"code"),e(474,"false"),t()()(),i(475,"td",24)(476,"em")(477,"strong"),e(478,"(opcional)"),t()(),i(479,"p"),e(480,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(481,"blockquote")(482,"p"),e(483,"Caso essa propriedade seja definida como "),i(484,"code"),e(485,"true"),t(),e(486,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(487,"tr",17)(488,"td",18)(489,"div",19)(490,"span",20),e(491," p-field-error-message"),n(492,"br"),t()()(),i(493,"td",21)(494,"code",30),e(495,"string"),t()(),i(496,"td",23),e(497,"-"),t(),i(498,"td",24)(499,"em")(500,"strong"),e(501,"(opcional)"),t()(),i(502,"p"),e(503,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),i(504,"blockquote")(505,"p"),e(506,"Necess\xE1rio que a propriedade "),i(507,"code"),e(508,"p-required"),t(),e(509," esteja habilitada."),t()()()(),i(510,"tr",17)(511,"td",18)(512,"div",19)(513,"span",20),e(514," p-field-format"),n(515,"br"),t()()(),i(516,"td",21)(517,"code",31),e(518,"((value) => string) "),t(),i(519,"code",32),e(520," Array<string>"),t()(),i(521,"td",23),e(522,"-"),t(),i(523,"td",24)(524,"em")(525,"strong"),e(526,"(opcional)"),t()(),i(527,"p"),e(528,"Formato de exibi\xE7\xE3o do campo."),t(),i(529,"p"),e(530,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(531,"em"),e(532,"string"),t(),e(533," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(534,"pre")(535,"code"),e(536,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}"),t()(),i(537,"blockquote")(538,"p"),e(539,"Esta propriedade sobrep\xF5e o valor da propriedade "),i(540,"code"),e(541,"p-field-label"),t(),e(542," na descri\xE7\xE3o do campo."),t()(),i(543,"p"),e(544,"Pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo, Por exemplo:"),t(),i(545,"pre")(546,"code"),e(547,`<po-lookup
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
Apresenta\xE7\xE3o no campo: 123 - Goku`),t()(),i(548,"blockquote")(549,"p"),e(550,"Ser\xE1 utilizado "),i(551,"code"),e(552,"-"),t(),e(553," como separador."),t()()()(),i(554,"tr",17)(555,"td",18)(556,"div",19)(557,"span",20),e(558," p-field-label"),n(559,"br"),t()()(),i(560,"td",21)(561,"code",30),e(562,"string"),t()(),i(563,"td",23),e(564,"-"),t(),i(565,"td",24)(566,"p"),e(567,"Indica a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e como filtro dentro da janela."),t()()(),i(568,"tr",17)(569,"td",18)(570,"div",19)(571,"span",20),e(572," p-field-value"),n(573,"br"),t()()(),i(574,"td",21)(575,"code",30),e(576,"string"),t()(),i(577,"td",23),e(578,"-"),t(),i(579,"td",24)(580,"p"),e(581,"Indica a coluna que ser\xE1 utilizada como valor do campo."),t(),i(582,"blockquote")(583,"p"),e(584,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(585,"tr",17)(586,"td",18)(587,"div",19)(588,"span",20),e(589," p-filter-params"),n(590,"br"),t()()(),i(591,"td",21)(592,"code",33),e(593,"any"),t()(),i(594,"td",23),e(595,"-"),t(),i(596,"td",24)(597,"em")(598,"strong"),e(599,"(opcional)"),t()(),i(600,"p"),e(601,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),i(602,"code"),e(603,"PoLookupFilter"),t(),e(604,"."),t()()(),i(605,"tr",17)(606,"td",18)(607,"div",19)(608,"span",20),e(609," p-filter-service"),n(610,"br"),t()()(),i(611,"td",21)(612,"code",30),e(613,"string "),t(),i(614,"code",34),e(615," PoLookupFilter"),t()(),i(616,"td",23),e(617,"-"),t(),i(618,"td",24)(619,"p"),e(620,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),i(621,"code"),e(622,"PoLookupFilter"),t(),e(623," ou uma URL."),t(),i(624,"p"),e(625,"Quando utilizada uma URL de um servi\xE7o, ser\xE1 concatenada nesta URL o valor que deseja-se filtrar, por exemplo:"),t(),i(626,"pre")(627,"code"),e(628,"url + ?page=1&pageSize=20&filter=Peter"),t()(),i(629,"p"),e(630,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),i(631,"code"),e(632,"order"),t(),e(633,", por exemplo:"),t(),i(634,"ul")(635,"li")(636,"p"),e(637,"Coluna decrescente:"),t(),i(638,"pre")(639,"code"),e(640,"url + ?page=1&pageSize=20&filter=Peter&order=-name"),t()()(),i(641,"li")(642,"p"),e(643,"Coluna ascendente:"),t(),i(644,"pre")(645,"code"),e(646,"url + ?page=1&pageSize=20&filter=Peter&order=name"),t()()()(),i(647,"p"),e(648,"Se for definido a propriedade "),i(649,"code"),e(650,"p-filter-params"),t(),e(651,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),i(652,"code"),e(653,"{ age: 23 }"),t(),e(654," a URL ficaria:"),t(),i(655,"pre")(656,"code"),e(657,"url + ?page=1&pageSize=20&age=23&filter=Peter"),t()(),i(658,"p"),e(659,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),t(),i(660,"pre")(661,"code"),e(662,`model = 1234;

GET url/1234`),t()(),i(663,"p"),e(664,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),t(),i(665,"pre")(666,"code"),e(667,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678`),t()(),i(668,"blockquote")(669,"p"),e(670,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(671,"a",7),e(672,"API do PO UI"),t(),e(673,` e utiliza os valores
definidos nas propriedades `),i(674,"code"),e(675,"p-field-label"),t(),e(676," e "),i(677,"code"),e(678,"p-field-value"),t(),e(679," para a constru\xE7\xE3o do "),i(680,"code"),e(681,"po-lookup"),t(),e(682,"."),t()(),i(683,"p"),e(684,"Caso o usu\xE1rio digite um valor e pressione a tecla "),i(685,"em"),e(686,"TAB"),t(),e(687,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),i(688,"a",35),e(689,"encodeURIComponent"),t(),e(690,`
e concatenado na URL da seguinte forma:`),t(),i(691,"pre")(692,"code"),e(693,"url/valor%20que%20se%20deseja%20filtrar"),t()(),i(694,"blockquote")(695,"p"),e(696,"Quando informado um servi\xE7o que implemente a interface "),i(697,"code"),e(698,"PoLookupFilter"),t(),e(699," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),t()()()(),i(700,"tr",17)(701,"td",18)(702,"div",19)(703,"span",20),e(704," p-help"),n(705,"br"),t()()(),i(706,"td",21)(707,"code",30),e(708,"string"),t()(),i(709,"td",23),e(710,"-"),t(),i(711,"td",24)(712,"em")(713,"strong"),e(714,"(opcional)"),t()(),i(715,"p"),e(716,"Texto de apoio do campo."),t()()(),i(717,"tr",17)(718,"td",18)(719,"div",19)(720,"span",20),e(721," p-hide-columns-manager"),n(722,"br"),t()()(),i(723,"td",21)(724,"code",25),e(725,"boolean"),t()(),i(726,"td",23)(727,"p")(728,"code"),e(729,"false"),t()()(),i(730,"td",24)(731,"em")(732,"strong"),e(733,"(opcional)"),t()(),i(734,"p"),e(735,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),t()()(),i(736,"tr",17)(737,"td",18)(738,"div",19)(739,"span",20),e(740," p-infinite-scroll"),n(741,"br"),t()()(),i(742,"td",21)(743,"code",25),e(744,"boolean"),t()(),i(745,"td",23)(746,"p")(747,"code"),e(748,"false"),t()()(),i(749,"td",24)(750,"em")(751,"strong"),e(752,"(opcional)"),t()(),i(753,"p"),e(754,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),t()()(),i(755,"tr",17)(756,"td",18)(757,"div",19)(758,"span",20),e(759," p-label"),n(760,"br"),t()()(),i(761,"td",21)(762,"code",30),e(763,"string"),t()(),i(764,"td",23),e(765,"-"),t(),i(766,"td",24)(767,"em")(768,"strong"),e(769,"(opcional)"),t()(),i(770,"p"),e(771,"Label do campo."),t(),i(772,"blockquote")(773,"p"),e(774,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),i(775,"code"),e(776,"modalTitle"),t(),e(777," na propriedade "),i(778,"code"),e(779,"p-literals"),t(),e(780,"."),t()()()(),i(781,"tr",17)(782,"td",18)(783,"div",19)(784,"span",20),e(785," p-literals"),n(786,"br"),t()()(),i(787,"td",21)(788,"code",36),e(789,"PoLookupLiterals"),t()(),i(790,"td",23),e(791,"-"),t(),i(792,"td",24)(793,"p"),e(794,"Objeto com as literais usadas no "),i(795,"code"),e(796,"po-lookup"),t(),e(797,"."),t(),i(798,"p"),e(799,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),i(800,"pre")(801,"code"),e(802,`const customLiterals: PoLookupLiterals = {
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
};`),t()(),i(803,"p"),e(804,"Ou passando apenas as literais que deseja customizar:"),t(),i(805,"pre")(806,"code"),e(807,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};`),t()(),i(808,"p"),e(809,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),i(810,"pre")(811,"code"),e(812,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>`),t()(),i(813,"blockquote")(814,"p"),e(815,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),i(816,"a",37)(817,"code"),e(818,"PoI18nService"),t()(),e(819," ou do browser."),t()()()(),i(820,"tr",17)(821,"td",18)(822,"div",19)(823,"span",20),e(824," p-multiple"),n(825,"br"),t()()(),i(826,"td",21)(827,"code",25),e(828,"boolean"),t()(),i(829,"td",23)(830,"p")(831,"code"),e(832,"false"),t()()(),i(833,"td",24)(834,"em")(835,"strong"),e(836,"(opcional)"),t()(),i(837,"p"),e(838,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(839,"blockquote")(840,"p"),e(841,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(842,"code"),e(843,"[ 12345, 67890 ]"),t()()()()(),i(844,"tr",17)(845,"td",18)(846,"div",19)(847,"span",20),e(848," name"),n(849,"br"),t()()(),i(850,"td",21)(851,"code",30),e(852,"string"),t()(),i(853,"td",23),e(854,"-"),t(),i(855,"td",24)(856,"p"),e(857,"Nome e Id do componente."),t()()(),i(858,"tr",17)(859,"td",18)(860,"div",19)(861,"span",20),e(862," p-no-autocomplete"),n(863,"br"),t()()(),i(864,"td",21)(865,"code",25),e(866,"boolean"),t()(),i(867,"td",23)(868,"p")(869,"code"),e(870,"false"),t()()(),i(871,"td",24)(872,"em")(873,"strong"),e(874,"(opcional)"),t()(),i(875,"p"),e(876,"Define a propriedade nativa "),i(877,"code"),e(878,"autocomplete"),t(),e(879," do campo como "),i(880,"code"),e(881,"off"),t(),e(882,"."),t()()(),i(883,"tr",17)(884,"td",18)(885,"div",26)(886,"span",27),e(887," (p-error)"),n(888,"br"),t()()(),i(889,"td",21)(890,"code",28),e(891,"EventEmitter"),t()(),i(892,"td",23),e(893,"-"),t(),i(894,"td",24)(895,"p"),e(896,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(897,"tr",17)(898,"td",18)(899,"div",19)(900,"span",20),e(901," p-optional"),n(902,"br"),t()()(),i(903,"td",21)(904,"code",25),e(905,"boolean"),t()(),i(906,"td",23)(907,"p")(908,"code"),e(909,"false"),t()()(),i(910,"td",24)(911,"em")(912,"strong"),e(913,"(opcional)"),t()(),i(914,"p"),e(915,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(916,"blockquote")(917,"p"),e(918,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(919,"ul")(920,"li"),e(921,"O campo conter "),i(922,"code"),e(923,"p-required"),t(),e(924,";"),t(),i(925,"li"),e(926,"N\xE3o possuir "),i(927,"code"),e(928,"p-help"),t(),e(929," e/ou "),i(930,"code"),e(931,"p-label"),t(),e(932,"."),t()()()(),i(933,"tr",17)(934,"td",18)(935,"div",19)(936,"span",20),e(937," p-placeholder"),n(938,"br"),t()()(),i(939,"td",21)(940,"code",30),e(941,"string"),t()(),i(942,"td",23),e(943,"-"),t(),i(944,"td",24)(945,"p"),e(946,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),i(947,"tr",17)(948,"td",18)(949,"div",19)(950,"span",20),e(951," p-required"),n(952,"br"),t()()(),i(953,"td",21)(954,"code",25),e(955,"boolean"),t()(),i(956,"td",23)(957,"p")(958,"code"),e(959,"false"),t()()(),i(960,"td",24)(961,"em")(962,"strong"),e(963,"(opcional)"),t()(),i(964,"p"),e(965,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),i(966,"blockquote")(967,"p"),e(968,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),i(969,"code"),e(970,"(p-disabled)"),t(),e(971,"."),t()()()(),i(972,"tr",17)(973,"td",18)(974,"div",26)(975,"span",27),e(976," (p-selected)"),n(977,"br"),t()()(),i(978,"td",21)(979,"code",28),e(980,"EventEmitter"),t()(),i(981,"td",23),e(982,"-"),t(),i(983,"td",24)(984,"em")(985,"strong"),e(986,"(opcional)"),t()(),i(987,"p"),e(988,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),t()()(),i(989,"tr",17)(990,"td",18)(991,"div",19)(992,"span",20),e(993," p-show-required"),n(994,"br"),t()()(),i(995,"td",21)(996,"code",25),e(997,"boolean"),t()(),i(998,"td",23),e(999,"-"),t(),i(1e3,"td",24)(1001,"p"),e(1002,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),t(),i(1003,"blockquote")(1004,"p"),e(1005,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(1006,"ul")(1007,"li"),e(1008,"N\xE3o possuir "),i(1009,"code"),e(1010,"p-help"),t(),e(1011," e/ou "),i(1012,"code"),e(1013,"p-label"),t(),e(1014,"."),t()()()(),i(1015,"tr",17)(1016,"td",18)(1017,"div",19)(1018,"span",20),e(1019," p-spacing"),n(1020,"br"),t()()(),i(1021,"td",21)(1022,"code",38),e(1023,"PoTableColumnSpacing"),t()(),i(1024,"td",23)(1025,"p")(1026,"code"),e(1027,"medium"),t()()(),i(1028,"td",24)(1029,"em")(1030,"strong"),e(1031,"(opcional)"),t()(),i(1032,"p"),e(1033,"Respons\xE1vel por aplicar espa\xE7amento nas colunas da tabela contida no lookup."),t(),i(1034,"p"),e(1035,"Deve receber um dos valores do enum "),i(1036,"code"),e(1037,"PoTableColumnSpacing"),t(),e(1038,"."),t()()(),i(1039,"tr",17)(1040,"td",18)(1041,"div",19)(1042,"span",20),e(1043," p-text-wrap"),n(1044,"br"),t()()(),i(1045,"td",21)(1046,"code",25),e(1047,"boolean"),t()(),i(1048,"td",23)(1049,"p")(1050,"code"),e(1051,"false"),t()()(),i(1052,"td",24)(1053,"em")(1054,"strong"),e(1055,"(opcional)"),t()(),i(1056,"p"),e(1057,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t(),i(1058,"p"),e(1059,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),t(),i(1060,"blockquote")(1061,"p"),e(1062,"Incompat\xEDvel com "),i(1063,"code"),e(1064,"virtual-scroll"),t(),e(1065,", que requer altura fixa nas linhas."),t()()()(),i(1066,"tr",17)(1067,"td",18)(1068,"div",19)(1069,"span",20),e(1070," p-virtual-scroll"),n(1071,"br"),t()()(),i(1072,"td",21)(1073,"code",25),e(1074,"boolean"),t()(),i(1075,"td",23)(1076,"p")(1077,"code"),e(1078,"true"),t()()(),i(1079,"td",24)(1080,"em")(1081,"strong"),e(1082,"(opcional)"),t()(),i(1083,"p"),e(1084,"Habilita o "),i(1085,"code"),e(1086,"virtual-scroll"),t(),e(1087,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),i(1088,"code"),e(1089,"virtual-scroll"),t(),e(1090," ser\xE1 ativado automaticamente."),t(),i(1091,"blockquote")(1092,"p"),e(1093,"Incompat\xEDvel com "),i(1094,"code"),e(1095,"p-text-wrap"),t(),e(1096," e "),i(1097,"code"),e(1098,"master-detail"),t(),e(1099,", pois o "),i(1100,"code"),e(1101,"virtual-scroll"),t(),e(1102," exige altura fixa nas linhas."),t()()()()(),i(1103,"h3",13),e(1104,"M\xE9todos"),t(),i(1105,"table",39)(1106,"tr",17)(1107,"th",40)(1108,"div",19)(1109,"h4")(1110,"span",20),e(1111," focus "),t()()()()(),i(1112,"tr",24)(1113,"td",24)(1114,"p"),e(1115,"Fun\xE7\xE3o que atribui foco ao componente."),t(),i(1116,"p"),e(1117,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),i(1118,"pre")(1119,"code"),e(1120,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}`),t()()()()(),n(1121,"br"),i(1122,"h3"),e(1123,"Interfaces"),t(),i(1124,"h4",41)(1125,"code",5),e(1126,"PoLookupAdvancedFilter"),t()(),i(1127,"div",2)(1128,"p"),e(1129," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),t()(),i(1130,"h4",13),e(1131,"Propriedades"),t(),i(1132,"table",14)(1133,"tr",15)(1134,"th",16),e(1135,"Nome"),t(),i(1136,"th",16),e(1137,"Tipo"),t(),i(1138,"th",16),e(1139,"Descri\xE7\xE3o"),t()(),i(1140,"tr",17)(1141,"td",18)(1142,"div",19)(1143,"span",20),e(1144," advancedFilters"),n(1145,"br"),t()()(),i(1146,"td",21)(1147,"code",22),e(1148,"Array<PoLookupAdvancedFilter>"),t()(),i(1149,"td",24)(1150,"em")(1151,"strong"),e(1152,"(opcional)"),t()(),i(1153,"p"),e(1154,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),i(1155,"blockquote")(1156,"p"),e(1157,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),i(1158,"p"),e(1159,"Exemplo de URL com busca avan\xE7ada:"),t(),i(1160,"p")(1161,"code"),e(1162,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),i(1163,"p"),e(1164,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),i(1165,"p")(1166,"code"),e(1167,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),i(1168,"tr",17)(1169,"td",18)(1170,"div",19)(1171,"span",20),e(1172," autoHeight"),n(1173,"br"),t()()(),i(1174,"td",21)(1175,"code",25),e(1176,"boolean"),t()(),i(1177,"td",24)(1178,"em")(1179,"strong"),e(1180,"(opcional)"),t()(),i(1181,"p"),e(1182,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),i(1183,"p")(1184,"strong"),e(1185,"Componentes compat\xEDveis:"),t(),i(1186,"code"),e(1187,"po-multiselect"),t(),e(1188,", "),i(1189,"code"),e(1190,"po-lookup"),t(),e(1191,"."),t()()(),i(1192,"tr",17)(1193,"td",18)(1194,"div",19)(1195,"span",20),e(1196," autoUpload"),n(1197,"br"),t()()(),i(1198,"td",21)(1199,"code",25),e(1200,"boolean"),t()(),i(1201,"td",24)(1202,"em")(1203,"strong"),e(1204,"(opcional)"),t()(),i(1205,"p"),e(1206,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),i(1207,"p")(1208,"strong"),e(1209,"Componente compat\xEDvel"),t(),e(1210,": "),i(1211,"code"),e(1212,"po-upload"),t()()()(),i(1213,"tr",17)(1214,"td",18)(1215,"div",19)(1216,"span",20),e(1217," booleanFalse"),n(1218,"br"),t()()(),i(1219,"td",21)(1220,"code",30),e(1221,"string"),t()(),i(1222,"td",24)(1223,"em")(1224,"strong"),e(1225,"(opcional)"),t()(),i(1226,"p"),e(1227,"Texto exibido quando o valor do componente for "),i(1228,"em"),e(1229,"false"),t(),e(1230,"."),t()()(),i(1231,"tr",17)(1232,"td",18)(1233,"div",19)(1234,"span",20),e(1235," booleanTrue"),n(1236,"br"),t()()(),i(1237,"td",21)(1238,"code",30),e(1239,"string"),t()(),i(1240,"td",24)(1241,"em")(1242,"strong"),e(1243,"(opcional)"),t()(),i(1244,"p"),e(1245,"Texto exibido quando o valor do componente for "),i(1246,"em"),e(1247,"true"),t(),e(1248,"."),t()()(),i(1249,"tr",17)(1250,"td",18)(1251,"div",19)(1252,"span",20),e(1253," changeOnEnter"),n(1254,"br"),t()()(),i(1255,"td",21)(1256,"code",25),e(1257,"boolean"),t()(),i(1258,"td",24)(1259,"em")(1260,"strong"),e(1261,"(opcional)"),t()(),i(1262,"p"),e(1263,"Indica que o evento "),i(1264,"code"),e(1265,"p-change"),t(),e(1266,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),i(1267,"code"),e(1268,"po-combo"),t(),e(1269,"."),t()()(),i(1270,"tr",17)(1271,"td",18)(1272,"div",19)(1273,"span",20),e(1274," changeVisibleColumns"),n(1275,"br"),t()()(),i(1276,"td",21)(1277,"code",42),e(1278,"Function"),t()(),i(1279,"td",24)(1280,"em")(1281,"strong"),e(1282,"(opcional)"),t()(),i(1283,"p"),e(1284,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),i(1285,"p"),e(1286,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(1287,"p")(1288,"strong"),e(1289,"Componentes compat\xEDveis"),t(),e(1290,": "),i(1291,"code"),e(1292,"po-lookup"),t()()()(),i(1293,"tr",17)(1294,"td",18)(1295,"div",19)(1296,"span",20),e(1297," clean"),n(1298,"br"),t()()(),i(1299,"td",21)(1300,"code",25),e(1301,"boolean"),t()(),i(1302,"td",24)(1303,"em")(1304,"strong"),e(1305,"(opcional)"),t()(),i(1306,"p"),e(1307,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),i(1308,"p")(1309,"strong"),e(1310,"Componentes compat\xEDveis:"),t(),i(1311,"code"),e(1312,"po-datepicker"),t(),e(1313,", "),i(1314,"code"),e(1315,"po-datepicker-range"),t(),e(1316,", "),i(1317,"code"),e(1318,"po-input"),t(),e(1319,", "),i(1320,"code"),e(1321,"po-number"),t(),e(1322,", "),i(1323,"code"),e(1324,"po-decimal"),t(),e(1325,", "),i(1326,"code"),e(1327,"po-combo"),t(),e(1328,", "),i(1329,"code"),e(1330,"po-lookup"),t(),e(1331,", "),i(1332,"code"),e(1333,"po-password"),t()()()(),i(1334,"tr",17)(1335,"td",18)(1336,"div",19)(1337,"span",20),e(1338," columnRestoreManager"),n(1339,"br"),t()()(),i(1340,"td",21)(1341,"code",42),e(1342,"Function"),t()(),i(1343,"td",24)(1344,"em")(1345,"strong"),e(1346,"(opcional)"),t()(),i(1347,"p"),e(1348,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),i(1349,"p"),e(1350,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(1351,"p")(1352,"strong"),e(1353,"Componentes compat\xEDveis"),t(),e(1354,": "),i(1355,"code"),e(1356,"po-lookup"),t()()()(),i(1357,"tr",17)(1358,"td",18)(1359,"div",19)(1360,"span",20),e(1361," columns"),n(1362,"br"),t()()(),i(1363,"td",21)(1364,"code",29),e(1365,"Array<PoLookupColumn> "),t(),i(1366,"code",43),e(1367," number"),t()(),i(1368,"td",24)(1369,"em")(1370,"strong"),e(1371,"(opcional)"),t()(),i(1372,"p"),e(1373,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),i(1374,"code"),e(1375,"searchService"),t(),e(1376,`,
essa propriedade deve receber um array de objetos que implementam a interface `),i(1377,"a",44)(1378,"code"),e(1379,"PoLookupColumn"),t()(),e(1380,"."),t(),i(1381,"blockquote")(1382,"p"),e(1383,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),i(1384,"em"),e(1385,"label"),t(),e(1386," e "),i(1387,"em"),e(1388,"value"),t(),e(1389,` para valores
de tela e do model respectivamente.`),t()(),i(1390,"p")(1391,"strong"),e(1392,"Componentes compat\xEDveis:"),t(),i(1393,"code"),e(1394,"po-radio-group"),t(),e(1395,", "),i(1396,"code"),e(1397,"po-lookup"),t(),e(1398,", "),i(1399,"code"),e(1400,"po-checkbox-group"),t(),e(1401,"."),t()()(),i(1402,"tr",17)(1403,"td",18)(1404,"div",19)(1405,"span",20),e(1406," container"),n(1407,"br"),t()()(),i(1408,"td",21)(1409,"code",30),e(1410,"string"),t()(),i(1411,"td",24)(1412,"em")(1413,"strong"),e(1414,"(opcional)"),t()(),i(1415,"p"),e(1416,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),i(1417,"p"),e(1418,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),i(1419,"tr",17)(1420,"td",18)(1421,"div",19)(1422,"span",20),e(1423," customAction"),n(1424,"br"),t()()(),i(1425,"td",21)(1426,"code",45),e(1427,"PoProgressAction"),t()(),i(1428,"td",24)(1429,"em")(1430,"strong"),e(1431,"(opcional)"),t()(),i(1432,"p"),e(1433,"Define uma a\xE7\xE3o personalizada no componente "),i(1434,"code"),e(1435,"po-upload"),t(),e(1436,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),i(1437,"p")(1438,"strong"),e(1439,"Componente compat\xEDvel"),t(),e(1440,": "),i(1441,"code"),e(1442,"po-upload"),t(),e(1443,","),t(),i(1444,"p")(1445,"strong"),e(1446,"Exemplo de configura\xE7\xE3o"),t(),e(1447,":"),t(),i(1448,"pre")(1449,"code",46),e(1450,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};`),t()()()(),i(1451,"tr",17)(1452,"td",18)(1453,"div",19)(1454,"span",20),e(1455," customActionClick"),n(1456,"br"),t()()(),i(1457,"td",21)(1458,"code",47),e(1459,"(file: PoUploadFile) => void"),t()(),i(1460,"td",24)(1461,"em")(1462,"strong"),e(1463,"(opcional)"),t()(),i(1464,"p"),e(1465,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),i(1466,"code"),e(1467,"p-custom-action"),t(),e(1468,"."),t(),i(1469,"p")(1470,"strong"),e(1471,"Componente compat\xEDvel"),t(),e(1472,": "),i(1473,"code"),e(1474,"po-upload"),t(),e(1475,","),t(),i(1476,"p"),e(1477,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),i(1478,"p")(1479,"strong"),e(1480,"Par\xE2metro do evento"),t(),e(1481,":"),t(),i(1482,"ul")(1483,"li")(1484,"code"),e(1485,"file"),t(),e(1486,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),i(1487,"code"),e(1488,"PoUploadFile"),t(),e(1489," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),i(1490,"p")(1491,"strong"),e(1492,"Exemplo de uso"),t(),e(1493,":"),t(),i(1494,"pre")(1495,"code",46),e(1496,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}`),t()()()(),i(1497,"tr",17)(1498,"td",18)(1499,"div",19)(1500,"span",20),e(1501," debounceTime"),n(1502,"br"),t()()(),i(1503,"td",21)(1504,"code",43),e(1505,"number"),t()(),i(1506,"td",24)(1507,"em")(1508,"strong"),e(1509,"(opcional)"),t()(),i(1510,"p"),e(1511,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),i(1512,"code"),e(1513,"p-filter-service"),t(),e(1514,")."),t(),i(1515,"p")(1516,"strong"),e(1517,"Componentes compat\xEDveis:"),t(),i(1518,"code"),e(1519,"po-combo"),t(),e(1520,", "),i(1521,"code"),e(1522,"po-multiselect"),t(),e(1523,"."),t()()(),i(1524,"tr",17)(1525,"td",18)(1526,"div",19)(1527,"span",20),e(1528," decimalsLength"),n(1529,"br"),t()()(),i(1530,"td",21)(1531,"code",43),e(1532,"number"),t()(),i(1533,"td",24)(1534,"em")(1535,"strong"),e(1536,"(opcional)"),t()(),i(1537,"p"),e(1538,"Quantidade m\xE1xima de casas decimais."),t(),i(1539,"blockquote")(1540,"p"),e(1541,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(1542,"code"),e(1543,"type"),t(),e(1544," for "),i(1545,"em"),e(1546,"currency"),t(),e(1547," ou "),i(1548,"em"),e(1549,"decimal"),t(),e(1550,"."),t()()()(),i(1551,"tr",17)(1552,"td",18)(1553,"div",19)(1554,"span",20),e(1555," directory"),n(1556,"br"),t()()(),i(1557,"td",21)(1558,"code",25),e(1559,"boolean"),t()(),i(1560,"td",24)(1561,"em")(1562,"strong"),e(1563,"(opcional)"),t()(),i(1564,"p"),e(1565,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),i(1566,"blockquote")(1567,"p"),e(1568,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),i(1569,"blockquote")(1570,"p"),e(1571,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),i(1572,"strong"),e(1573,"Internet Explorer"),t(),e(1574,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),i(1575,"p")(1576,"strong"),e(1577,"Componente compat\xEDvel"),t(),e(1578,": "),i(1579,"code"),e(1580,"po-upload"),t()()()(),i(1581,"tr",17)(1582,"td",18)(1583,"div",19)(1584,"span",20),e(1585," disabled"),n(1586,"br"),t()()(),i(1587,"td",21)(1588,"code",25),e(1589,"boolean"),t()(),i(1590,"td",24)(1591,"em")(1592,"strong"),e(1593,"(opcional)"),t()(),i(1594,"p"),e(1595,"Desabilita o campo caso informar o valor "),i(1596,"em"),e(1597,"true"),t(),e(1598,"."),t()()(),i(1599,"tr",17)(1600,"td",18)(1601,"div",19)(1602,"span",20),e(1603," disabledInitFilter"),n(1604,"br"),t()()(),i(1605,"td",21)(1606,"code",25),e(1607,"boolean"),t()(),i(1608,"td",24)(1609,"em")(1610,"strong"),e(1611,"(opcional)"),t()(),i(1612,"p"),e(1613,"Desabilita o filtro inicial no servi\xE7o do "),i(1614,"code"),e(1615,"po-combo"),t(),e(1616,", que \xE9 executado no primeiro clique no campo."),t()()(),i(1617,"tr",17)(1618,"td",18)(1619,"div",19)(1620,"span",20),e(1621," disabledTabFilter"),n(1622,"br"),t()()(),i(1623,"td",21)(1624,"code",25),e(1625,"boolean"),t()(),i(1626,"td",24)(1627,"em")(1628,"strong"),e(1629,"(opcional)"),t()(),i(1630,"p"),e(1631,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),i(1632,"code"),e(1633,"po-combo"),t(),e(1634,"."),t()()(),i(1635,"tr",17)(1636,"td",18)(1637,"div",19)(1638,"span",20),e(1639," divider"),n(1640,"br"),t()()(),i(1641,"td",21)(1642,"code",30),e(1643,"string"),t()(),i(1644,"td",24)(1645,"em")(1646,"strong"),e(1647,"(opcional)"),t()(),i(1648,"p"),e(1649,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),i(1650,"tr",17)(1651,"td",18)(1652,"div",19)(1653,"span",20),e(1654," dragDrop"),n(1655,"br"),t()()(),i(1656,"td",21)(1657,"code",25),e(1658,"boolean"),t()(),i(1659,"td",24)(1660,"em")(1661,"strong"),e(1662,"(opcional)"),t()(),i(1663,"p"),e(1664,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),i(1665,"blockquote")(1666,"p"),e(1667,"Recomendamos utilizar apenas um "),i(1668,"code"),e(1669,"po-upload"),t(),e(1670," com esta funcionalidade por tela."),t()(),i(1671,"p")(1672,"strong"),e(1673,"Componente compat\xEDvel"),t(),e(1674,": "),i(1675,"code"),e(1676,"po-upload"),t()()()(),i(1677,"tr",17)(1678,"td",18)(1679,"div",19)(1680,"span",20),e(1681," dragDropHeight"),n(1682,"br"),t()()(),i(1683,"td",21)(1684,"code",43),e(1685,"number"),t()(),i(1686,"td",24)(1687,"em")(1688,"strong"),e(1689,"(opcional)"),t()(),i(1690,"p"),e(1691,"Define em "),i(1692,"em"),e(1693,"pixels"),t(),e(1694," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),i(1695,"code"),e(1696,"160px"),t(),e(1697,"."),t(),i(1698,"blockquote")(1699,"p"),e(1700,"Esta propriedade funciona somente se a propriedade "),i(1701,"code"),e(1702,"p-drag-drop"),t(),e(1703," estiver habilitada."),t()(),i(1704,"p")(1705,"strong"),e(1706,"Componente compat\xEDvel"),t(),e(1707,": "),i(1708,"code"),e(1709,"po-upload"),t()()()(),i(1710,"tr",17)(1711,"td",18)(1712,"div",19)(1713,"span",20),e(1714," errorAsyncFunction"),n(1715,"br"),t()()(),i(1716,"td",21)(1717,"code",48),e(1718,"(value) => Observable<boolean>"),t()(),i(1719,"td",24)(1720,"em")(1721,"strong"),e(1722,"(opcional)"),t()(),i(1723,"p"),e(1724,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),i(1725,"code"),e(1726,"change"),t(),e(1727," ou "),i(1728,"code"),e(1729,"change-model"),t(),e(1730,", dependendo do valor da propriedade "),i(1731,"code"),e(1732,"triggerMode"),t(),e(1733,"."),t(),i(1734,"blockquote")(1735,"p"),e(1736,"Retorna "),i(1737,"code"),e(1738,"Observable com o valor true"),t(),e(1739," para sinalizar o erro "),i(1740,"code"),e(1741,"false"),t(),e(1742," para indicar que n\xE3o h\xE1 erro."),t()(),i(1743,"p")(1744,"strong"),e(1745,"Componente compat\xEDvel"),t(),e(1746,": "),i(1747,"code"),e(1748,"po-datepicker"),t()()()(),i(1749,"tr",17)(1750,"td",18)(1751,"div",19)(1752,"span",20),e(1753," errorAsyncProperties"),n(1754,"br"),t()()(),i(1755,"td",21)(1756,"code",49),e(1757,"ErrorAsyncProperties"),t()(),i(1758,"td",24)(1759,"em")(1760,"strong"),e(1761,"(opcional)"),t()(),i(1762,"p"),e(1763,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),i(1764,"p")(1765,"strong"),e(1766,"Componentes compat\xEDveis:"),t(),i(1767,"code"),e(1768,"po-input"),t(),e(1769,", "),i(1770,"code"),e(1771,"po-number"),t(),e(1772,", "),i(1773,"code"),e(1774,"po-decimal"),t(),e(1775,", "),i(1776,"code"),e(1777,"po-password"),t(),e(1778,"."),t()()(),i(1779,"tr",17)(1780,"td",18)(1781,"div",19)(1782,"span",20),e(1783," errorLimit"),n(1784,"br"),t()()(),i(1785,"td",21)(1786,"code",25),e(1787,"boolean"),t()(),i(1788,"td",24)(1789,"em")(1790,"strong"),e(1791,"(opcional)"),t()(),i(1792,"p"),e(1793,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(1794,"blockquote")(1795,"p"),e(1796,"Caso essa propriedade seja definida como "),i(1797,"code"),e(1798,"true"),t(),e(1799,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),i(1800,"p")(1801,"strong"),e(1802,"Componentes compat\xEDveis:"),t(),i(1803,"code"),e(1804,"po-datepicker"),t(),e(1805,", "),i(1806,"code"),e(1807,"po-input"),t(),e(1808,", "),i(1809,"code"),e(1810,"po-number"),t(),e(1811,", "),i(1812,"code"),e(1813,"po-decimal"),t(),e(1814,", "),i(1815,"code"),e(1816,"po-password"),t(),e(1817,", "),i(1818,"code"),e(1819,"po-datepicker-range"),t(),e(1820,", "),i(1821,"code"),e(1822,"po-select"),t(),e(1823,", "),i(1824,"code"),e(1825,"po-checkbox-group"),t(),e(1826,", "),i(1827,"code"),e(1828,"po-radio-group"),t(),e(1829,", "),i(1830,"code"),e(1831,"po-multiselect"),t(),e(1832,", "),i(1833,"code"),e(1834,"po-combo"),t(),e(1835,", "),i(1836,"code"),e(1837,"po-lookup"),t(),e(1838,", "),i(1839,"code"),e(1840,"po-textarea"),t(),e(1841,"."),t()()(),i(1842,"tr",17)(1843,"td",18)(1844,"div",19)(1845,"span",20),e(1846," errorMessage"),n(1847,"br"),t()()(),i(1848,"td",21)(1849,"code",30),e(1850,"string"),t()(),i(1851,"td",24)(1852,"em")(1853,"strong"),e(1854,"(opcional)"),t()(),i(1855,"p"),e(1856,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),i(1857,"p"),e(1858,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),i(1859,"ul")(1860,"li"),e(1861,"pattern;"),t(),i(1862,"li"),e(1863,"minValue;"),t(),i(1864,"li"),e(1865,"maxValue;"),t(),i(1866,"li"),e(1867,"required;"),t()(),i(1868,"blockquote")(1869,"p"),e(1870,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),i(1871,"code"),e(1872,"po-datepicker"),t(),e(1873,", "),i(1874,"code"),e(1875,"po-input"),t(),e(1876,", "),i(1877,"code"),e(1878,"po-number"),t(),e(1879,", "),i(1880,"code"),e(1881,"po-decimal"),t(),e(1882,", "),i(1883,"code"),e(1884,"po-password"),t(),e(1885,`, \xE9 necess\xE1rio que a propriedade
`),i(1886,"code"),e(1887,"requiredFieldErrorMessage"),t(),e(1888," esteja como "),i(1889,"code"),e(1890,"true"),t(),e(1891,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),i(1892,"code"),e(1893,"po-datepicker-range"),t(),e(1894,", "),i(1895,"code"),e(1896,"po-select"),t(),e(1897,", "),i(1898,"code"),e(1899,"po-checkbox-group"),t(),e(1900,", "),i(1901,"code"),e(1902,"po-radio-group"),t(),e(1903,", "),i(1904,"code"),e(1905,"po-multiselect"),t(),e(1906,", "),i(1907,"code"),e(1908,"po-combo"),t(),e(1909,`,
`),i(1910,"code"),e(1911,"po-lookup"),t(),e(1912," e "),i(1913,"code"),e(1914,"po-textarea"),t(),e(1915," n\xE3o \xE9 necess\xE1rio passar a propriedade "),i(1916,"code"),e(1917,"requiredFieldErrorMessage"),t(),e(1918,"."),t()(),i(1919,"p")(1920,"strong"),e(1921,"Componentes compat\xEDveis:"),t(),i(1922,"code"),e(1923,"po-datepicker"),t(),e(1924,", "),i(1925,"code"),e(1926,"po-input"),t(),e(1927,", "),i(1928,"code"),e(1929,"po-number"),t(),e(1930,", "),i(1931,"code"),e(1932,"po-decimal"),t(),e(1933,", "),i(1934,"code"),e(1935,"po-password"),t(),e(1936,", "),i(1937,"code"),e(1938,"po-datepicker-range"),t(),e(1939,", "),i(1940,"code"),e(1941,"po-select"),t(),e(1942,", "),i(1943,"code"),e(1944,"po-checkbox-group"),t(),e(1945,", "),i(1946,"code"),e(1947,"po-radio-group"),t(),e(1948,", "),i(1949,"code"),e(1950,"po-multiselect"),t(),e(1951,", "),i(1952,"code"),e(1953,"po-combo"),t(),e(1954,", "),i(1955,"code"),e(1956,"po-lookup"),t(),e(1957,", "),i(1958,"code"),e(1959,"po-textarea"),t(),e(1960,"."),t()()(),i(1961,"tr",17)(1962,"td",18)(1963,"div",19)(1964,"span",20),e(1965," fieldLabel"),n(1966,"br"),t()()(),i(1967,"td",21)(1968,"code",30),e(1969,"string"),t()(),i(1970,"td",24)(1971,"em")(1972,"strong"),e(1973,"(opcional)"),t()(),i(1974,"p"),e(1975,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),i(1976,"p"),e(1977,"O valor padr\xE3o \xE9: "),i(1978,"code"),e(1979,"label"),t(),e(1980,"."),t(),i(1981,"blockquote")(1982,"p"),e(1983,"Esta propriedade pode ser utilizada em conjunto com: "),i(1984,"code"),e(1985,"options"),t(),e(1986,", "),i(1987,"code"),e(1988,"optionsService"),t(),e(1989," e "),i(1990,"code"),e(1991,"searchService"),t(),e(1992,"."),t()()()(),i(1993,"tr",17)(1994,"td",18)(1995,"div",19)(1996,"span",20),e(1997," fieldValue"),n(1998,"br"),t()()(),i(1999,"td",21)(2e3,"code",30),e(2001,"string"),t()(),i(2002,"td",24)(2003,"em")(2004,"strong"),e(2005,"(opcional)"),t()(),i(2006,"p"),e(2007,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),i(2008,"p"),e(2009,"O valor padr\xE3o \xE9: "),i(2010,"code"),e(2011,"value"),t(),e(2012,"."),t(),i(2013,"blockquote")(2014,"p"),e(2015,"Esta propriedade pode ser utilizada em conjunto com: "),i(2016,"code"),e(2017,"options"),t(),e(2018,", "),i(2019,"code"),e(2020,"optionsService"),t(),e(2021," e "),i(2022,"code"),e(2023,"searchService"),t(),e(2024,"."),t()()()(),i(2025,"tr",17)(2026,"td",18)(2027,"div",19)(2028,"span",20),e(2029," filterMinlength"),n(2030,"br"),t()()(),i(2031,"td",21)(2032,"code",43),e(2033,"number"),t()(),i(2034,"td",24)(2035,"em")(2036,"strong"),e(2037,"(opcional)"),t()(),i(2038,"p"),e(2039,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),i(2040,"code"),e(2041,"po-combo"),t(),e(2042,"."),t()()(),i(2043,"tr",17)(2044,"td",18)(2045,"div",19)(2046,"span",20),e(2047," filterMode"),n(2048,"br"),t()()(),i(2049,"td",21)(2050,"code",50),e(2051,"PoMultiselectFilterMode"),t()(),i(2052,"td",24)(2053,"em")(2054,"strong"),e(2055,"(opcional)"),t()(),i(2056,"p"),e(2057,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),i(2058,"code"),e(2059,"startsWith"),t(),e(2060,", "),i(2061,"code"),e(2062,"contains"),t(),e(2063," ou "),i(2064,"code"),e(2065,"endsWith"),t(),e(2066,"."),t(),i(2067,"blockquote")(2068,"p"),e(2069,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),i(2070,"p")(2071,"strong"),e(2072,"Componentes compat\xEDveis:"),t(),i(2073,"code"),e(2074,"po-multiselect"),t(),e(2075,"."),t()()(),i(2076,"tr",17)(2077,"td",18)(2078,"div",19)(2079,"span",20),e(2080," forceBooleanComponentType"),n(2081,"br"),t()()(),i(2082,"td",21)(2083,"code",51),e(2084,"ForceBooleanComponentEnum"),t()(),i(2085,"td",24)(2086,"em")(2087,"strong"),e(2088,"(opcional)"),t()(),i(2089,"p"),e(2090,"Valores aceitos:"),t(),i(2091,"ul")(2092,"li"),e(2093,"ForceBooleanComponentEnum.switch"),t(),i(2094,"li"),e(2095,"ForceBooleanComponentEnum.checkbox"),t()()()(),i(2096,"tr",17)(2097,"td",18)(2098,"div",19)(2099,"span",20),e(2100," forceOptionsComponentType"),n(2101,"br"),t()()(),i(2102,"td",21)(2103,"code",52),e(2104,"ForceOptionComponentEnum"),t()(),i(2105,"td",24)(2106,"em")(2107,"strong"),e(2108,"(opcional)"),t()(),i(2109,"p"),e(2110,"pode ser utilizada em conjunto com a propriedade "),i(2111,"code"),e(2112,"options"),t(),e(2113," for\xE7ando o componente a renderizar um "),i(2114,"code"),e(2115,"po-select"),t(),e(2116," ou "),i(2117,"code"),e(2118,"po-radio-group"),t(),e(2119,"."),t(),i(2120,"p"),e(2121,"Valores aceitos:"),t(),i(2122,"ul")(2123,"li"),e(2124,"ForceOptionComponentEnum.radioGroup"),t(),i(2125,"li"),e(2126,"ForceOptionComponentEnum.select"),t()(),i(2127,"blockquote")(2128,"p"),e(2129,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),i(2130,"code"),e(2131,"optionsMulti"),t(),e(2132," e "),i(2133,"code"),e(2134,"optionsService"),t(),e(2135,"."),t()()()(),i(2136,"tr",17)(2137,"td",18)(2138,"div",19)(2139,"span",20),e(2140," formField"),n(2141,"br"),t()()(),i(2142,"td",21)(2143,"code",30),e(2144,"string"),t()(),i(2145,"td",24)(2146,"em")(2147,"strong"),e(2148,"(opcional)"),t()(),i(2149,"p"),e(2150,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),i(2151,"code"),e(2152,"url"),t(),e(2153,"."),t(),i(2154,"blockquote")(2155,"p"),e(2156,"O valor default \xE9 "),i(2157,"code"),e(2158,"files"),t()()(),i(2159,"p")(2160,"strong"),e(2161,"Componente compat\xEDvel"),t(),e(2162,": "),i(2163,"code"),e(2164,"po-upload"),t()()()(),i(2165,"tr",17)(2166,"td",18)(2167,"div",19)(2168,"span",20),e(2169," format"),n(2170,"br"),t()()(),i(2171,"td",21)(2172,"code",30),e(2173,"string "),t(),i(2174,"code",32),e(2175," Array<string>"),t()(),i(2176,"td",24)(2177,"em")(2178,"strong"),e(2179,"(opcional)"),t()(),i(2180,"p"),e(2181,"Formato de exibi\xE7\xE3o no campo."),t(),i(2182,"p"),e(2183,"Ao utilizar esta propriedade com o "),i(2184,"code"),e(2185,"type"),t(),i(2186,"em"),e(2187,"PoDynamicFieldType.Date"),t(),e(2188," ou "),i(2189,"em"),e(2190,"PoDynamicFieldType.DateTime"),t(),e(2191,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),i(2192,"p"),e(2193,"Valores v\xE1lidos:"),t(),i(2194,"ul")(2195,"li"),e(2196,"dd/mm/yyyy"),t(),i(2197,"li"),e(2198,"mm/dd/yyyy"),t(),i(2199,"li"),e(2200,"yyyy/mm/dd"),t()(),i(2201,"p"),e(2202,"Tamb\xE9m pode-se utilizar em conjunto com "),i(2203,"code"),e(2204,"searchService"),t(),e(2205,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t()()(),i(2206,"tr",17)(2207,"td",18)(2208,"div",19)(2209,"span",20),e(2210," formatModel"),n(2211,"br"),t()()(),i(2212,"td",21)(2213,"code",25),e(2214,"boolean"),t()(),i(2215,"td",24)(2216,"em")(2217,"strong"),e(2218,"(opcional)"),t()(),i(2219,"p"),e(2220,"Indica se o "),i(2221,"code"),e(2222,"model"),t(),e(2223," receber\xE1 o valor formatado pelas propriedades "),i(2224,"code"),e(2225,"p-label-on"),t(),e(2226," e "),i(2227,"code"),e(2228,"p-label-off"),t(),e(2229,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),i(2230,"p"),e(2231,"O valor padr\xE3o \xE9: "),i(2232,"code"),e(2233,"false"),t(),e(2234,"."),t(),i(2235,"blockquote")(2236,"p"),e(2237,"Esta propriedade est\xE1 disponivel apenas para o "),i(2238,"code"),e(2239,"swicth"),t(),e(2240,"."),t()()()(),i(2241,"tr",17)(2242,"td",18)(2243,"div",19)(2244,"span",20),e(2245," gridColumns"),n(2246,"br"),t()()(),i(2247,"td",21)(2248,"code",43),e(2249,"number"),t()(),i(2250,"td",24)(2251,"em")(2252,"strong"),e(2253,"(opcional)"),t()(),i(2254,"p"),e(2255,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),i(2256,"p"),e(2257,"Deve ser usado o sistema de "),i(2258,"strong"),e(2259,"grid"),t(),e(2260," do PO (1 ... 12 colunas)."),t(),i(2261,"blockquote")(2262,"p"),e(2263,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(2264,"tr",17)(2265,"td",18)(2266,"div",19)(2267,"span",20),e(2268," gridLgColumns"),n(2269,"br"),t()()(),i(2270,"td",21)(2271,"code",43),e(2272,"number"),t()(),i(2273,"td",24)(2274,"em")(2275,"strong"),e(2276,"(opcional)"),t()(),i(2277,"p"),e(2278,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(2279,"p"),e(2280,"Deve ser usado o sistema de "),i(2281,"strong"),e(2282,"grid"),t(),e(2283," do PO (1 ... 12 colunas)."),t(),i(2284,"blockquote")(2285,"p"),e(2286,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2287,"code"),e(2288,"gridColumns"),t(),e(2289,"."),t()()()(),i(2290,"tr",17)(2291,"td",18)(2292,"div",19)(2293,"span",20),e(2294," gridLgPull"),n(2295,"br"),t()()(),i(2296,"td",21)(2297,"code",43),e(2298,"number"),t()(),i(2299,"td",24)(2300,"em")(2301,"strong"),e(2302,"(opcional)"),t()(),i(2303,"p"),e(2304,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),i(2305,"p"),e(2306,"Deve ser usado o sistema de "),i(2307,"strong"),e(2308,"grid"),t(),e(2309," do PO (1 ... 11 colunas)."),t(),i(2310,"blockquote")(2311,"p"),e(2312,"Esta propriedade n\xE3o funciona com a propriedade "),i(2313,"code"),e(2314,"gridColumns"),t(),e(2315,". Deve-se especificar o tamanho da tela."),t()()()(),i(2316,"tr",17)(2317,"td",18)(2318,"div",19)(2319,"span",20),e(2320," gridMdColumns"),n(2321,"br"),t()()(),i(2322,"td",21)(2323,"code",43),e(2324,"number"),t()(),i(2325,"td",24)(2326,"em")(2327,"strong"),e(2328,"(opcional)"),t()(),i(2329,"p"),e(2330,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(2331,"p"),e(2332,"Deve ser usado o sistema de "),i(2333,"strong"),e(2334,"grid"),t(),e(2335," do PO (1 ... 12 colunas)."),t(),i(2336,"blockquote")(2337,"p"),e(2338,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2339,"code"),e(2340,"gridColumns"),t(),e(2341,"."),t()()()(),i(2342,"tr",17)(2343,"td",18)(2344,"div",19)(2345,"span",20),e(2346," gridMdPull"),n(2347,"br"),t()()(),i(2348,"td",21)(2349,"code",43),e(2350,"number"),t()(),i(2351,"td",24)(2352,"em")(2353,"strong"),e(2354,"(opcional)"),t()(),i(2355,"p"),e(2356,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),i(2357,"p"),e(2358,"Deve ser usado o sistema de "),i(2359,"strong"),e(2360,"grid"),t(),e(2361," do PO (1 ... 11 colunas)."),t(),i(2362,"blockquote")(2363,"p"),e(2364,"Esta propriedade n\xE3o funciona com a propriedade "),i(2365,"code"),e(2366,"gridColumns"),t(),e(2367,". Deve-se especificar o tamanho da tela."),t()()()(),i(2368,"tr",17)(2369,"td",18)(2370,"div",19)(2371,"span",20),e(2372," gridSmColumns"),n(2373,"br"),t()()(),i(2374,"td",21)(2375,"code",43),e(2376,"number"),t()(),i(2377,"td",24)(2378,"em")(2379,"strong"),e(2380,"(opcional)"),t()(),i(2381,"p"),e(2382,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(2383,"p"),e(2384,"Deve ser usado o sistema de "),i(2385,"strong"),e(2386,"grid"),t(),e(2387," do PO (1 ... 12 colunas)."),t(),i(2388,"blockquote")(2389,"p"),e(2390,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2391,"code"),e(2392,"gridColumns"),t(),e(2393,"."),t()()()(),i(2394,"tr",17)(2395,"td",18)(2396,"div",19)(2397,"span",20),e(2398," gridSmPull"),n(2399,"br"),t()()(),i(2400,"td",21)(2401,"code",43),e(2402,"number"),t()(),i(2403,"td",24)(2404,"em")(2405,"strong"),e(2406,"(opcional)"),t()(),i(2407,"p"),e(2408,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),i(2409,"p"),e(2410,"Deve ser usado o sistema de "),i(2411,"strong"),e(2412,"grid"),t(),e(2413," do PO (1 ... 11 colunas)."),t(),i(2414,"blockquote")(2415,"p"),e(2416,"Esta propriedade n\xE3o funciona com a propriedade "),i(2417,"code"),e(2418,"gridColumns"),t(),e(2419,". Deve-se especificar o tamanho da tela."),t()()()(),i(2420,"tr",17)(2421,"td",18)(2422,"div",19)(2423,"span",20),e(2424," gridXlColumns"),n(2425,"br"),t()()(),i(2426,"td",21)(2427,"code",43),e(2428,"number"),t()(),i(2429,"td",24)(2430,"em")(2431,"strong"),e(2432,"(opcional)"),t()(),i(2433,"p"),e(2434,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(2435,"p"),e(2436,"Deve ser usado o sistema de "),i(2437,"strong"),e(2438,"grid"),t(),e(2439," do PO (1 ... 12 colunas)."),t(),i(2440,"blockquote")(2441,"p"),e(2442,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2443,"code"),e(2444,"gridColumns"),t(),e(2445,"."),t()()()(),i(2446,"tr",17)(2447,"td",18)(2448,"div",19)(2449,"span",20),e(2450," gridXlPull"),n(2451,"br"),t()()(),i(2452,"td",21)(2453,"code",43),e(2454,"number"),t()(),i(2455,"td",24)(2456,"em")(2457,"strong"),e(2458,"(opcional)"),t()(),i(2459,"p"),e(2460,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),i(2461,"p"),e(2462,"Deve ser usado o sistema de "),i(2463,"strong"),e(2464,"grid"),t(),e(2465," do PO (1 ... 11 colunas)."),t(),i(2466,"blockquote")(2467,"p"),e(2468,"Esta propriedade n\xE3o funciona com a propriedade "),i(2469,"code"),e(2470,"gridColumns"),t(),e(2471,". Deve-se especificar o tamanho da tela."),t()()()(),i(2472,"tr",17)(2473,"td",18)(2474,"div",19)(2475,"span",20),e(2476," headers"),n(2477,"br"),t()()(),i(2478,"td",21)(2479,"code",53),e(2480,"{ [name: string]: string "),t(),i(2481,"code",54),e(2482,` Array<string>;
}`),t()(),i(2483,"td",24)(2484,"em")(2485,"strong"),e(2486,"(opcional)"),t()(),i(2487,"p"),e(2488,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),i(2489,"p")(2490,"strong"),e(2491,"Componente compat\xEDvel"),t(),e(2492,": "),i(2493,"code"),e(2494,"po-upload"),t()()()(),i(2495,"tr",17)(2496,"td",18)(2497,"div",19)(2498,"span",20),e(2499," help"),n(2500,"br"),t()()(),i(2501,"td",21)(2502,"code",30),e(2503,"string"),t()(),i(2504,"td",24)(2505,"em")(2506,"strong"),e(2507,"(opcional)"),t()(),i(2508,"p"),e(2509,"Texto de ajuda."),t()()(),i(2510,"tr",17)(2511,"td",18)(2512,"div",19)(2513,"span",20),e(2514," hideLabelStatus"),n(2515,"br"),t()()(),i(2516,"td",21)(2517,"code",25),e(2518,"boolean"),t()(),i(2519,"td",24)(2520,"em")(2521,"strong"),e(2522,"(opcional)"),t()(),i(2523,"p"),e(2524,"Indica se o status do "),i(2525,"code"),e(2526,"model"),t(),e(2527," ser\xE1 escondido visualmente ao lado do switch"),t()()(),i(2528,"tr",17)(2529,"td",18)(2530,"div",19)(2531,"span",20),e(2532," hidePasswordPeek"),n(2533,"br"),t()()(),i(2534,"td",21)(2535,"code",25),e(2536,"boolean"),t()(),i(2537,"td",24)(2538,"em")(2539,"strong"),e(2540,"(opcional)"),t()(),i(2541,"p"),e(2542,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),i(2543,"code"),e(2544,"po-password"),t(),e(2545,"."),t()()(),i(2546,"tr",17)(2547,"td",18)(2548,"div",19)(2549,"span",20),e(2550," hideRestrictionsInfo"),n(2551,"br"),t()()(),i(2552,"td",21)(2553,"code",25),e(2554,"boolean"),t()(),i(2555,"td",24)(2556,"em")(2557,"strong"),e(2558,"(opcional)"),t()(),i(2559,"p"),e(2560,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),i(2561,"p")(2562,"strong"),e(2563,"Componente compat\xEDvel"),t(),e(2564,": "),i(2565,"code"),e(2566,"po-upload"),t()()()(),i(2567,"tr",17)(2568,"td",18)(2569,"div",19)(2570,"span",20),e(2571," hideSearch"),n(2572,"br"),t()()(),i(2573,"td",21)(2574,"code",25),e(2575,"boolean"),t()(),i(2576,"td",24)(2577,"em")(2578,"strong"),e(2579,"(opcional)"),t()(),i(2580,"p"),e(2581,"Esconde o campo de pesquisa existente dentro do dropdown do "),i(2582,"code"),e(2583,"po-multiselect"),t(),e(2584,"."),t()()(),i(2585,"tr",17)(2586,"td",18)(2587,"div",19)(2588,"span",20),e(2589," hideSelectAll"),n(2590,"br"),t()()(),i(2591,"td",21)(2592,"code",25),e(2593,"boolean"),t()(),i(2594,"td",24)(2595,"em")(2596,"strong"),e(2597,"(opcional)"),t()(),i(2598,"p"),e(2599,'Indica se o campo "Selecionar todos" do '),i(2600,"code"),e(2601,"po-multiselect"),t(),e(2602," ser\xE1 escondido."),t()()(),i(2603,"tr",17)(2604,"td",18)(2605,"div",19)(2606,"span",20),e(2607," hideSelectButton"),n(2608,"br"),t()()(),i(2609,"td",21)(2610,"code",25),e(2611,"boolean"),t()(),i(2612,"td",24)(2613,"em")(2614,"strong"),e(2615,"(opcional)"),t()(),i(2616,"p"),e(2617,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),i(2618,"blockquote")(2619,"p"),e(2620,"Caso o valor definido seja "),i(2621,"code"),e(2622,"true"),t(),e(2623,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(2624,"code"),e(2625,"selectFiles()"),t(),e(2626," para sele\xE7\xE3o de arquivos."),t()(),i(2627,"p")(2628,"strong"),e(2629,"Componente compat\xEDvel"),t(),e(2630,": "),i(2631,"code"),e(2632,"po-upload"),t()()()(),i(2633,"tr",17)(2634,"td",18)(2635,"div",19)(2636,"span",20),e(2637," hideSendButton"),n(2638,"br"),t()()(),i(2639,"td",21)(2640,"code",25),e(2641,"boolean"),t()(),i(2642,"td",24)(2643,"em")(2644,"strong"),e(2645,"(opcional)"),t()(),i(2646,"p"),e(2647,"Omite o bot\xE3o de envio de arquivos."),t(),i(2648,"blockquote")(2649,"p"),e(2650,"Caso o valor definido seja "),i(2651,"code"),e(2652,"true"),t(),e(2653,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(2654,"code"),e(2655,"sendFiles()"),t(),e(2656," para envio do(s) arquivo(s) selecionado(s)."),t()(),i(2657,"p")(2658,"strong"),e(2659,"Componente compat\xEDvel"),t(),e(2660,": "),i(2661,"code"),e(2662,"po-upload"),t()()()(),i(2663,"tr",17)(2664,"td",18)(2665,"div",19)(2666,"span",20),e(2667," icon"),n(2668,"br"),t()()(),i(2669,"td",21)(2670,"code",30),e(2671,"string "),t(),i(2672,"code",55),e(2673," TemplateRef<void>"),t()(),i(2674,"td",24)(2675,"em")(2676,"strong"),e(2677,"(opcional)"),t()(),i(2678,"p"),e(2679,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),i(2680,"blockquote")(2681,"p"),e(2682,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),i(2683,"ul")(2684,"li"),e(2685,"Input;"),t(),i(2686,"li"),e(2687,"Number;"),t(),i(2688,"li"),e(2689,"Decimal;"),t(),i(2690,"li"),e(2691,"Combo;"),t(),i(2692,"li"),e(2693,"Password;"),t()(),i(2694,"blockquote")(2695,"p"),e(2696,"Veja a disponibilidade de \xEDcones em "),i(2697,"a",56),e(2698,"biblioteca de \xEDcones"),t(),e(2699,"."),t()()()(),i(2700,"tr",17)(2701,"td",18)(2702,"div",19)(2703,"span",20),e(2704," infiniteScroll"),n(2705,"br"),t()()(),i(2706,"td",21)(2707,"code",25),e(2708,"boolean"),t()(),i(2709,"td",24)(2710,"em")(2711,"strong"),e(2712,"(opcional)"),t()(),i(2713,"p"),e(2714,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),i(2715,"p")(2716,"strong"),e(2717,"Componentes compat\xEDveis:"),t(),i(2718,"code"),e(2719,"po-combo"),t(),e(2720,", "),i(2721,"code"),e(2722,"po-lookup"),t(),e(2723,"."),t()()(),i(2724,"tr",17)(2725,"td",18)(2726,"div",19)(2727,"span",20),e(2728," infiniteScrollDistance"),n(2729,"br"),t()()(),i(2730,"td",21)(2731,"code",43),e(2732,"number"),t()(),i(2733,"td",24)(2734,"em")(2735,"strong"),e(2736,"(opcional)"),t()(),i(2737,"p"),e(2738,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),i(2739,"strong"),e(2740,"Exemplos"),t(),i(2741,"code"),e(2742,"{ infiniteScrollDistance: 80 }"),t(),e(2743,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),i(2744,"p")(2745,"strong"),e(2746,"Componente compat\xEDvel:"),t(),i(2747,"code"),e(2748,"po-combo"),t(),e(2749,"."),t()()(),i(2750,"tr",17)(2751,"td",18)(2752,"div",19)(2753,"span",20),e(2754," isoFormat"),n(2755,"br"),t()()(),i(2756,"td",21)(2757,"code",57),e(2758,"PoDatepickerIsoFormat"),t()(),i(2759,"td",24)(2760,"em")(2761,"strong"),e(2762,"(opcional)"),t()(),i(2763,"p"),e(2764,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),i(2765,"blockquote")(2766,"p"),e(2767,"Veja os valores v\xE1lidos no "),i(2768,"code"),e(2769,"enumPoDatepickerIsoFormat"),t(),e(2770,"."),t()(),i(2771,"p")(2772,"strong"),e(2773,"Componente compat\xEDvel:"),t(),e(2774," po-datepicker"),t()()(),i(2775,"tr",17)(2776,"td",18)(2777,"div",19)(2778,"span",20),e(2779," key"),n(2780,"br"),t()()(),i(2781,"td",21)(2782,"code",25),e(2783,"boolean"),t()(),i(2784,"td",24)(2785,"em")(2786,"strong"),e(2787,"(opcional)"),t()(),i(2788,"p"),e(2789,"Identificador"),t()()(),i(2790,"tr",17)(2791,"td",18)(2792,"div",19)(2793,"span",20),e(2794," label"),n(2795,"br"),t()()(),i(2796,"td",21)(2797,"code",30),e(2798,"string"),t()(),i(2799,"td",24)(2800,"em")(2801,"strong"),e(2802,"(opcional)"),t()(),i(2803,"p"),e(2804,"R\xF3tulo do campo exibido."),t(),i(2805,"p"),e(2806,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(2807,"code"),e(2808,"label"),t(),e(2809," o valor da propriedade "),i(2810,"code"),e(2811,"property"),t(),e(2812," com a primeira letra em mai\xFAsculo."),t()()(),i(2813,"tr",17)(2814,"td",18)(2815,"div",19)(2816,"span",20),e(2817," labelPosition"),n(2818,"br"),t()()(),i(2819,"td",21)(2820,"code",58),e(2821,"PoSwitchLabelPosition"),t()(),i(2822,"td",24)(2823,"em")(2824,"strong"),e(2825,"(opcional)"),t()(),i(2826,"p"),e(2827,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),i(2828,"blockquote")(2829,"p"),e(2830,"Por padr\xE3o exibe \xE0 direita."),t()()()(),i(2831,"tr",17)(2832,"td",18)(2833,"div",19)(2834,"span",20),e(2835," literals"),n(2836,"br"),t()()(),i(2837,"td",21)(2838,"code",36),e(2839,"PoLookupLiterals "),t(),i(2840,"code",59),e(2841," PoMultiselectLiterals "),t(),i(2842,"code",60),e(2843," PoComboLiterals "),t(),i(2844,"code",61),e(2845," PoDatepickerRangeLiterals "),t(),i(2846,"code",62),e(2847," PoUploadLiterals"),t()(),i(2848,"td",24)(2849,"em")(2850,"strong"),e(2851,"(opcional)"),t()(),i(2852,"p"),e(2853,"Objeto com as literais usadas para os seguintes componentes: "),i(2854,"code"),e(2855,"po-lookup"),t(),e(2856,", "),i(2857,"code"),e(2858,"po-multiselect"),t(),e(2859,", "),i(2860,"code"),e(2861,"po-combo"),t(),e(2862," e "),i(2863,"code"),e(2864,"po-datepicker-range"),t(),e(2865,"."),t(),i(2866,"blockquote")(2867,"p"),e(2868,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),i(2869,"p")(2870,"strong"),e(2871,"Componentes compat\xEDveis:"),t(),i(2872,"code"),e(2873,"po-lookup"),t(),e(2874,", "),i(2875,"code"),e(2876,"po-multiselect"),t(),e(2877,", "),i(2878,"code"),e(2879,"po-combo"),t(),e(2880,", "),i(2881,"code"),e(2882,"po-datepicker-range"),t()()()(),i(2883,"tr",17)(2884,"td",18)(2885,"div",19)(2886,"span",20),e(2887," locale"),n(2888,"br"),t()()(),i(2889,"td",21)(2890,"code",30),e(2891,"string"),t()(),i(2892,"td",24)(2893,"em")(2894,"strong"),e(2895,"(opcional)"),t()(),i(2896,"p"),e(2897,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),i(2898,"a",63)(2899,"code"),e(2900,"I18n"),t()()(),i(2901,"p"),e(2902,`Exemplo de utiliza\xE7\xE3o:
`),i(2903,"code"),e(2904,`[ { property: 'birthday', locale: 'en', type: 'date' }, { property: 'wage', locale: 'ru', type: 'currency' }
];`),t()(),i(2905,"blockquote")(2906,"p"),e(2907,"Para ver quais linguagens suportadas acesse "),i(2908,"a",63)(2909,"code"),e(2910,"I18n"),t()(),e(2911,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),i(2912,"tr",17)(2913,"td",18)(2914,"div",19)(2915,"span",20),e(2916," mask"),n(2917,"br"),t()()(),i(2918,"td",21)(2919,"code",30),e(2920,"string"),t()(),i(2921,"td",24)(2922,"em")(2923,"strong"),e(2924,"(opcional)"),t()(),i(2925,"p"),e(2926,"M\xE1scara para o campo."),t(),i(2927,"p")(2928,"strong"),e(2929,"Componentes compat\xEDveis:"),t(),i(2930,"code"),e(2931,"po-input"),t(),e(2932,"."),t(),i(2933,"blockquote")(2934,"p"),e(2935,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(2936,"code"),e(2937,"type: time"),t(),e(2938,"."),t()()()(),i(2939,"tr",17)(2940,"td",18)(2941,"div",19)(2942,"span",20),e(2943," maskFormatModel"),n(2944,"br"),t()()(),i(2945,"td",21)(2946,"code",25),e(2947,"boolean"),t()(),i(2948,"td",24)(2949,"em")(2950,"strong"),e(2951,"(opcional)"),t()(),i(2952,"p"),e(2953,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),i(2954,"code"),e(2955,"false"),t(),e(2956,"."),t(),i(2957,"p")(2958,"strong"),e(2959,"Componentes compat\xEDveis:"),t(),i(2960,"code"),e(2961,"po-input"),t(),e(2962,"."),t(),i(2963,"blockquote")(2964,"p"),e(2965,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(2966,"code"),e(2967,"type: time"),t(),e(2968,"."),t()()()(),i(2969,"tr",17)(2970,"td",18)(2971,"div",19)(2972,"span",20),e(2973," maxLength"),n(2974,"br"),t()()(),i(2975,"td",21)(2976,"code",43),e(2977,"number"),t()(),i(2978,"td",24)(2979,"em")(2980,"strong"),e(2981,"(opcional)"),t()(),i(2982,"p"),e(2983,"Tamanho m\xE1ximo de caracteres."),t(),i(2984,"p")(2985,"strong"),e(2986,"Componentes compat\xEDveis:"),t(),i(2987,"code"),e(2988,"po-input"),t(),e(2989,", "),i(2990,"code"),e(2991,"po-number"),t(),e(2992,", "),i(2993,"code"),e(2994,"po-decimal"),t(),e(2995,", "),i(2996,"code"),e(2997,"po-textarea"),t(),e(2998,", "),i(2999,"code"),e(3e3,"po-password"),t(),e(3001,"."),t()()(),i(3002,"tr",17)(3003,"td",18)(3004,"div",19)(3005,"span",20),e(3006," maxValue"),n(3007,"br"),t()()(),i(3008,"td",21)(3009,"code",30),e(3010,"string "),t(),i(3011,"code",43),e(3012," number"),t()(),i(3013,"td",24)(3014,"em")(3015,"strong"),e(3016,"(opcional)"),t()(),i(3017,"p"),e(3018,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3019,"em"),e(3020,"number"),t(),e(3021,", "),i(3022,"em"),e(3023,"date"),t(),e(3024," ou "),i(3025,"em"),e(3026,"dateTime"),t(),e(3027,"."),t(),i(3028,"p")(3029,"strong"),e(3030,"Componentes compat\xEDveis:"),t(),i(3031,"code"),e(3032,"po-datepicker"),t(),e(3033,", "),i(3034,"code"),e(3035,"po-datepicker-range"),t(),e(3036,", "),i(3037,"code"),e(3038,"po-number"),t(),e(3039,", "),i(3040,"code"),e(3041,"po-decimal"),t()()()(),i(3042,"tr",17)(3043,"td",18)(3044,"div",19)(3045,"span",20),e(3046," minLength"),n(3047,"br"),t()()(),i(3048,"td",21)(3049,"code",43),e(3050,"number"),t()(),i(3051,"td",24)(3052,"em")(3053,"strong"),e(3054,"(opcional)"),t()(),i(3055,"p"),e(3056,"Tamanho m\xEDnimo de caracteres."),t(),i(3057,"p")(3058,"strong"),e(3059,"Componentes compat\xEDveis:"),t(),i(3060,"code"),e(3061,"po-input"),t(),e(3062,", "),i(3063,"code"),e(3064,"po-number"),t(),e(3065,", "),i(3066,"code"),e(3067,"po-decimal"),t(),e(3068,", "),i(3069,"code"),e(3070,"po-textarea"),t(),e(3071,", "),i(3072,"code"),e(3073,"po-password"),t(),e(3074,"."),t()()(),i(3075,"tr",17)(3076,"td",18)(3077,"div",19)(3078,"span",20),e(3079," minValue"),n(3080,"br"),t()()(),i(3081,"td",21)(3082,"code",30),e(3083,"string "),t(),i(3084,"code",43),e(3085," number"),t()(),i(3086,"td",24)(3087,"em")(3088,"strong"),e(3089,"(opcional)"),t()(),i(3090,"p"),e(3091,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3092,"em"),e(3093,"number"),t(),e(3094,", "),i(3095,"em"),e(3096,"date"),t(),e(3097," ou "),i(3098,"em"),e(3099,"dateTime"),t(),e(3100,"."),t(),i(3101,"p")(3102,"strong"),e(3103,"Componentes compat\xEDveis:"),t(),i(3104,"code"),e(3105,"po-datepicker"),t(),e(3106,", "),i(3107,"code"),e(3108,"po-datepicker-range"),t(),e(3109,", "),i(3110,"code"),e(3111,"po-number"),t(),e(3112,", "),i(3113,"code"),e(3114,"po-decimal"),t()()()(),i(3115,"tr",17)(3116,"td",18)(3117,"div",19)(3118,"span",20),e(3119," multiple"),n(3120,"br"),t()()(),i(3121,"td",21)(3122,"code",25),e(3123,"boolean"),t()(),i(3124,"td",24)(3125,"em")(3126,"strong"),e(3127,"(opcional)"),t()(),i(3128,"p"),e(3129,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(3130,"p")(3131,"strong"),e(3132,"Componente compat\xEDvel:"),t(),i(3133,"code"),e(3134,"po-lookup"),t(),e(3135,", "),i(3136,"code"),e(3137,"po-upload"),t()()()(),i(3138,"tr",17)(3139,"td",18)(3140,"div",19)(3141,"span",20),e(3142," noAutocomplete"),n(3143,"br"),t()()(),i(3144,"td",21)(3145,"code",25),e(3146,"boolean"),t()(),i(3147,"td",24)(3148,"em")(3149,"strong"),e(3150,"(opcional)"),t()(),i(3151,"p"),e(3152,"Define a propriedade nativa "),i(3153,"code"),e(3154,"autocomplete"),t(),e(3155," do campo como off."),t(),i(3156,"p")(3157,"strong"),e(3158,"Componentes compat\xEDveis:"),t(),i(3159,"code"),e(3160,"po-datepicker"),t(),e(3161,", "),i(3162,"code"),e(3163,"po-datepicker-range"),t(),e(3164,", "),i(3165,"code"),e(3166,"po-input"),t(),e(3167,", "),i(3168,"code"),e(3169,"po-number"),t(),e(3170,", "),i(3171,"code"),e(3172,"po-decimal"),t(),e(3173,", "),i(3174,"code"),e(3175,"po-lookup"),t(),e(3176,", "),i(3177,"code"),e(3178,"po-password"),t()()()(),i(3179,"tr",17)(3180,"td",18)(3181,"div",19)(3182,"span",20),e(3183," offsetColumns"),n(3184,"br"),t()()(),i(3185,"td",21)(3186,"code",43),e(3187,"number"),t()(),i(3188,"td",24)(3189,"em")(3190,"strong"),e(3191,"(opcional)"),t()(),i(3192,"p"),e(3193,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),i(3194,"p"),e(3195,"Deve ser usado o sistema de "),i(3196,"strong"),e(3197,"grid"),t(),e(3198," do PO (1 ... 12 colunas)."),t(),i(3199,"blockquote")(3200,"p"),e(3201,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(3202,"tr",17)(3203,"td",18)(3204,"div",19)(3205,"span",20),e(3206," offsetLgColumns"),n(3207,"br"),t()()(),i(3208,"td",21)(3209,"code",43),e(3210,"number"),t()(),i(3211,"td",24)(3212,"em")(3213,"strong"),e(3214,"(opcional)"),t()(),i(3215,"p"),e(3216,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(3217,"p"),e(3218,"Deve ser usado o sistema de "),i(3219,"strong"),e(3220,"grid"),t(),e(3221," do PO (1 ... 12 colunas)."),t(),i(3222,"blockquote")(3223,"p"),e(3224,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3225,"code"),e(3226,"offsetColumns"),t(),e(3227,"."),t()()()(),i(3228,"tr",17)(3229,"td",18)(3230,"div",19)(3231,"span",20),e(3232," offsetMdColumns"),n(3233,"br"),t()()(),i(3234,"td",21)(3235,"code",43),e(3236,"number"),t()(),i(3237,"td",24)(3238,"em")(3239,"strong"),e(3240,"(opcional)"),t()(),i(3241,"p"),e(3242,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(3243,"p"),e(3244,"Deve ser usado o sistema de "),i(3245,"strong"),e(3246,"grid"),t(),e(3247," do PO (1 ... 12 colunas)."),t(),i(3248,"blockquote")(3249,"p"),e(3250,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3251,"code"),e(3252,"offsetColumns"),t(),e(3253,"."),t()()()(),i(3254,"tr",17)(3255,"td",18)(3256,"div",19)(3257,"span",20),e(3258," offsetSmColumns"),n(3259,"br"),t()()(),i(3260,"td",21)(3261,"code",43),e(3262,"number"),t()(),i(3263,"td",24)(3264,"em")(3265,"strong"),e(3266,"(opcional)"),t()(),i(3267,"p"),e(3268,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(3269,"p"),e(3270,"Deve ser usado o sistema de "),i(3271,"strong"),e(3272,"grid"),t(),e(3273," do PO (1 ... 12 colunas)."),t(),i(3274,"blockquote")(3275,"p"),e(3276,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3277,"code"),e(3278,"offsetColumns"),t(),e(3279,"."),t()()()(),i(3280,"tr",17)(3281,"td",18)(3282,"div",19)(3283,"span",20),e(3284," offsetXlColumns"),n(3285,"br"),t()()(),i(3286,"td",21)(3287,"code",43),e(3288,"number"),t()(),i(3289,"td",24)(3290,"em")(3291,"strong"),e(3292,"(opcional)"),t()(),i(3293,"p"),e(3294,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(3295,"p"),e(3296,"Deve ser usado o sistema de "),i(3297,"strong"),e(3298,"grid"),t(),e(3299," do PO (1 ... 12 colunas)."),t(),i(3300,"blockquote")(3301,"p"),e(3302,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3303,"code"),e(3304,"offsetColumns"),t(),e(3305,"."),t()()()(),i(3306,"tr",17)(3307,"td",18)(3308,"div",19)(3309,"span",20),e(3310," onError"),n(3311,"br"),t()()(),i(3312,"td",21)(3313,"code",42),e(3314,"Function"),t()(),i(3315,"td",24)(3316,"em")(3317,"strong"),e(3318,"(opcional)"),t()(),i(3319,"p"),e(3320,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),i(3321,"blockquote")(3322,"p"),e(3323,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(3324,"code"),e(3325,"HttpErrorResponse"),t(),e(3326,"."),t()(),i(3327,"p")(3328,"strong"),e(3329,"Componente compat\xEDvel"),t(),e(3330,": "),i(3331,"code"),e(3332,"po-upload"),t()()()(),i(3333,"tr",17)(3334,"td",18)(3335,"div",19)(3336,"span",20),e(3337," onSuccess"),n(3338,"br"),t()()(),i(3339,"td",21)(3340,"code",42),e(3341,"Function"),t()(),i(3342,"td",24)(3343,"em")(3344,"strong"),e(3345,"(opcional)"),t()(),i(3346,"p"),e(3347,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),i(3348,"blockquote")(3349,"p"),e(3350,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(3351,"code"),e(3352,"HttpResponse"),t(),e(3353,"."),t()(),i(3354,"p")(3355,"strong"),e(3356,"Componente compat\xEDvel"),t(),e(3357,": "),i(3358,"code"),e(3359,"po-upload"),t()()()(),i(3360,"tr",17)(3361,"td",18)(3362,"div",19)(3363,"span",20),e(3364," onUpload"),n(3365,"br"),t()()(),i(3366,"td",21)(3367,"code",42),e(3368,"Function"),t()(),i(3369,"td",24)(3370,"em")(3371,"strong"),e(3372,"(opcional)"),t()(),i(3373,"p"),e(3374,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),i(3375,"pre")(3376,"code"),e(3377,"event.data = {id: 'id do usu\xE1rio'};"),t()(),i(3378,"p")(3379,"strong"),e(3380,"Componente compat\xEDvel"),t(),e(3381,": "),i(3382,"code"),e(3383,"po-upload"),t()()()(),i(3384,"tr",17)(3385,"td",18)(3386,"div",19)(3387,"span",20),e(3388," optional"),n(3389,"br"),t()()(),i(3390,"td",21)(3391,"code",25),e(3392,"boolean"),t()(),i(3393,"td",24)(3394,"em")(3395,"strong"),e(3396,"(opcional)"),t()(),i(3397,"p"),e(3398,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(3399,"blockquote")(3400,"p"),e(3401,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),i(3402,"ul")(3403,"li"),e(3404,"O campo for "),i(3405,"code"),e(3406,"required"),t(),e(3407,", ou;"),t(),i(3408,"li"),e(3409,"N\xE3o possuir "),i(3410,"code"),e(3411,"help"),t(),e(3412," e "),i(3413,"code"),e(3414,"label"),t(),e(3415,"."),t()()()(),i(3416,"tr",17)(3417,"td",18)(3418,"div",19)(3419,"span",20),e(3420," options"),n(3421,"br"),t()()(),i(3422,"td",21)(3423,"code",32),e(3424,"Array<string> "),t(),i(3425,"code",64),e(3426," Array<PoSelectOption> "),t(),i(3427,"code",65),e(3428," Array<PoMultiselectOption> "),t(),i(3429,"code",66),e(3430," Array<PoCheckboxGroupOption> "),t(),i(3431,"code",67),e(3432," Array<any>"),t()(),i(3433,"td",24)(3434,"em")(3435,"strong"),e(3436,"(opcional)"),t()(),i(3437,"p"),e(3438,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),i(3439,"p")(3440,"strong"),e(3441,"Componentes compat\xEDveis:"),t(),i(3442,"code"),e(3443,"po-select"),t(),e(3444,", "),i(3445,"code"),e(3446,"po-radio-group"),t(),e(3447,", "),i(3448,"code"),e(3449,"po-checkbox-group"),t(),e(3450,", "),i(3451,"code"),e(3452,"po-multiselect"),t(),e(3453,"."),t()()(),i(3454,"tr",17)(3455,"td",18)(3456,"div",19)(3457,"span",20),e(3458," optionsMulti"),n(3459,"br"),t()()(),i(3460,"td",21)(3461,"code",25),e(3462,"boolean"),t()(),i(3463,"td",24)(3464,"em")(3465,"strong"),e(3466,"(opcional)"),t()(),i(3467,"p"),e(3468,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),i(3469,"tr",17)(3470,"td",18)(3471,"div",19)(3472,"span",20),e(3473," optionsService"),n(3474,"br"),t()()(),i(3475,"td",21)(3476,"code",30),e(3477,"string "),t(),i(3478,"code",68),e(3479," PoComboFilter "),t(),i(3480,"code",69),e(3481," PoMultiselectFilter"),t()(),i(3482,"td",24)(3483,"em")(3484,"strong"),e(3485,"(opcional)"),t()(),i(3486,"p"),e(3487,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),i(3488,"strong"),e(3489,"Importante"),t()(),i(3490,"blockquote")(3491,"p"),e(3492,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),i(3493,"a",7),e(3494,"guia de API do PO UI"),t(),e(3495,"."),t()()()(),i(3496,"tr",17)(3497,"td",18)(3498,"div",19)(3499,"span",20),e(3500," order"),n(3501,"br"),t()()(),i(3502,"td",21)(3503,"code",43),e(3504,"number"),t()(),i(3505,"td",24)(3506,"em")(3507,"strong"),e(3508,"(opcional)"),t()(),i(3509,"p"),e(3510,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),i(3511,"p"),e(3512,"Exemplo de utiliza\xE7\xE3o:"),t(),i(3513,"p")(3514,"code"),e(3515,`[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 }
];`),t()(),i(3516,"p"),e(3517,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),i(3518,"code"),e(3519,`[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' }
];`),t()(),i(3520,"p"),e(3521,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),i(3522,"p"),e(3523,"Campos sem "),i(3524,"code"),e(3525,"order"),t(),e(3526,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),i(3527,"tr",17)(3528,"td",18)(3529,"div",19)(3530,"span",20),e(3531," params"),n(3532,"br"),t()()(),i(3533,"td",21)(3534,"code",33),e(3535,"any"),t()(),i(3536,"td",24)(3537,"em")(3538,"strong"),e(3539,"(opcional)"),t()(),i(3540,"p"),e(3541,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),i(3542,"code"),e(3543,"po-lookup"),t(),e(3544,` e
`),i(3545,"code"),e(3546,"po-combo"),t(),e(3547,"."),t(),i(3548,"p"),e(3549,"Por exemplo, para o par\xE2metro "),i(3550,"code"),e(3551,"{ age: 23 }"),t(),e(3552," a URL da requisi\xE7\xE3o ficaria:"),t(),i(3553,"p")(3554,"code"),e(3555,"url + ?age=23&filter=Peter"),t()()()(),i(3556,"tr",17)(3557,"td",18)(3558,"div",19)(3559,"span",20),e(3560," pattern"),n(3561,"br"),t()()(),i(3562,"td",21)(3563,"code",30),e(3564,"string"),t()(),i(3565,"td",24)(3566,"em")(3567,"strong"),e(3568,"(opcional)"),t()(),i(3569,"p"),e(3570,"Regex para valida\xE7\xE3o do campo."),t(),i(3571,"p")(3572,"strong"),e(3573,"Componentes compat\xEDveis:"),t(),i(3574,"code"),e(3575,"po-input"),t(),e(3576,", "),i(3577,"code"),e(3578,"po-password"),t(),e(3579,"."),t()()(),i(3580,"tr",17)(3581,"td",18)(3582,"div",19)(3583,"span",20),e(3584," placeholder"),n(3585,"br"),t()()(),i(3586,"td",21)(3587,"code",30),e(3588,"string"),t()(),i(3589,"td",24)(3590,"em")(3591,"strong"),e(3592,"(opcional)"),t()(),i(3593,"p"),e(3594,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),i(3595,"tr",17)(3596,"td",18)(3597,"div",19)(3598,"span",20),e(3599," placeholderSearch"),n(3600,"br"),t()()(),i(3601,"td",21)(3602,"code",30),e(3603,"string"),t()(),i(3604,"td",24)(3605,"em")(3606,"strong"),e(3607,"(opcional)"),t()(),i(3608,"p"),e(3609,"Placeholder do campo de pesquisa do "),i(3610,"code"),e(3611,"po-multiselect"),t(),e(3612,"."),t(),i(3613,"blockquote")(3614,"p"),e(3615,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),i(3616,"tr",17)(3617,"td",18)(3618,"div",19)(3619,"span",20),e(3620," property"),n(3621,"br"),t()()(),i(3622,"td",21)(3623,"code",30),e(3624,"string"),t()(),i(3625,"td",24)(3626,"p"),e(3627,"Nome de refer\xEAncia do campo."),t()()(),i(3628,"tr",17)(3629,"td",18)(3630,"div",19)(3631,"span",20),e(3632," range"),n(3633,"br"),t()()(),i(3634,"td",21)(3635,"code",25),e(3636,"boolean"),t()(),i(3637,"td",24)(3638,"em")(3639,"strong"),e(3640,"(opcional)"),t()(),i(3641,"p"),e(3642,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),i(3643,"blockquote")(3644,"p"),e(3645,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),i(3646,"tr",17)(3647,"td",18)(3648,"div",19)(3649,"span",20),e(3650," readonly"),n(3651,"br"),t()()(),i(3652,"td",21)(3653,"code",25),e(3654,"boolean"),t()(),i(3655,"td",24)(3656,"em")(3657,"strong"),e(3658,"(opcional)"),t()(),i(3659,"p"),e(3660,"Indica que o campo ser\xE1 somente leitura."),t(),i(3661,"p")(3662,"strong"),e(3663,"Componentes compat\xEDveis:"),t(),i(3664,"code"),e(3665,"po-datepicker"),t(),e(3666,", "),i(3667,"code"),e(3668,"po-datepicker-range"),t(),e(3669,", "),i(3670,"code"),e(3671,"po-input"),t(),e(3672,", "),i(3673,"code"),e(3674,"po-number"),t(),e(3675,", "),i(3676,"code"),e(3677,"po-decimal"),t(),e(3678,", "),i(3679,"code"),e(3680,"po-select"),t(),e(3681,", "),i(3682,"code"),e(3683,"po-textarea"),t(),e(3684,", "),i(3685,"code"),e(3686,"po-password"),t()()()(),i(3687,"tr",17)(3688,"td",18)(3689,"div",19)(3690,"span",20),e(3691," required"),n(3692,"br"),t()()(),i(3693,"td",21)(3694,"code",25),e(3695,"boolean"),t()(),i(3696,"td",24)(3697,"em")(3698,"strong"),e(3699,"(opcional)"),t()(),i(3700,"p"),e(3701,"Define a obrigatoriedade do campo."),t()()(),i(3702,"tr",17)(3703,"td",18)(3704,"div",19)(3705,"span",20),e(3706," requiredFieldErrorMessage"),n(3707,"br"),t()()(),i(3708,"td",21)(3709,"code",25),e(3710,"boolean"),t()(),i(3711,"td",24)(3712,"em")(3713,"strong"),e(3714,"(opcional)"),t()(),i(3715,"p"),e(3716,"Exibe a mensagem setada na propriedade "),i(3717,"code"),e(3718,"errorMessage"),t(),e(3719," se o campo estiver vazio e for requerido."),t(),i(3720,"blockquote")(3721,"p"),e(3722,"Necess\xE1rio que a propriedade "),i(3723,"code"),e(3724,"required"),t(),e(3725," esteja habilitada."),t()(),i(3726,"p")(3727,"strong"),e(3728,"Componentes compat\xEDveis:"),t(),i(3729,"code"),e(3730,"po-datepicker"),t(),e(3731,", "),i(3732,"code"),e(3733,"po-input"),t(),e(3734,", "),i(3735,"code"),e(3736,"po-number"),t(),e(3737,", "),i(3738,"code"),e(3739,"po-decimal"),t(),e(3740,", "),i(3741,"code"),e(3742,"po-password"),t(),e(3743,"."),t()()(),i(3744,"tr",17)(3745,"td",18)(3746,"div",19)(3747,"span",20),e(3748," restrictions"),n(3749,"br"),t()()(),i(3750,"td",21)(3751,"code",70),e(3752,"PoUploadFileRestrictions"),t()(),i(3753,"td",24)(3754,"em")(3755,"strong"),e(3756,"(opcional)"),t()(),i(3757,"p"),e(3758,"Objeto que segue a defini\xE7\xE3o da interface "),i(3759,"code"),e(3760,"PoUploadFileRestrictions"),t(),e(3761,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),i(3762,"p")(3763,"strong"),e(3764,"Componente compat\xEDvel"),t(),e(3765,": "),i(3766,"code"),e(3767,"po-upload"),t()()()(),i(3768,"tr",17)(3769,"td",18)(3770,"div",19)(3771,"span",20),e(3772," rows"),n(3773,"br"),t()()(),i(3774,"td",21)(3775,"code",43),e(3776,"number"),t()(),i(3777,"td",24)(3778,"em")(3779,"strong"),e(3780,"(opcional)"),t()(),i(3781,"p"),e(3782,"Quantidade de linhas exibidas no "),i(3783,"code"),e(3784,"po-textarea"),t(),e(3785,"."),t()()(),i(3786,"tr",17)(3787,"td",18)(3788,"div",19)(3789,"span",20),e(3790," searchService"),n(3791,"br"),t()()(),i(3792,"td",21)(3793,"code",30),e(3794,"string "),t(),i(3795,"code",34),e(3796," PoLookupFilter"),t()(),i(3797,"td",24)(3798,"em")(3799,"strong"),e(3800,"(opcional)"),t()(),i(3801,"p"),e(3802,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),i(3803,"code"),e(3804,"columns"),t(),e(3805,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),i(3806,"strong"),e(3807,"Importante:"),t()(),i(3808,"blockquote")(3809,"p"),e(3810,"Caso utilizar a propriedade "),i(3811,"code"),e(3812,"optionsService"),t(),e(3813,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),i(3814,"a",7),e(3815,"guia de API do PO UI"),t(),e(3816,"."),t()()()(),i(3817,"tr",17)(3818,"td",18)(3819,"div",19)(3820,"span",20),e(3821," secret"),n(3822,"br"),t()()(),i(3823,"td",21)(3824,"code",25),e(3825,"boolean"),t()(),i(3826,"td",24)(3827,"em")(3828,"strong"),e(3829,"(opcional)"),t()(),i(3830,"p"),e(3831,"Esconde a informa\xE7\xE3o estilo "),i(3832,"em"),e(3833,"password"),t(),e(3834,", pode ser utilizado quando o tipo de dado for "),i(3835,"em"),e(3836,"string"),t(),e(3837,"."),t()()(),i(3838,"tr",17)(3839,"td",18)(3840,"div",19)(3841,"span",20),e(3842," showRequired"),n(3843,"br"),t()()(),i(3844,"td",21)(3845,"code",25),e(3846,"boolean"),t()(),i(3847,"td",24)(3848,"em")(3849,"strong"),e(3850,"(opcional)"),t()(),i(3851,"p"),e(3852,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),i(3853,"blockquote")(3854,"p"),e(3855,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(3856,"ul")(3857,"li"),e(3858,"N\xE3o possuir "),i(3859,"code"),e(3860,"p-help"),t(),e(3861," e/ou "),i(3862,"code"),e(3863,"p-label"),t(),e(3864,"."),t()()()(),i(3865,"tr",17)(3866,"td",18)(3867,"div",19)(3868,"span",20),e(3869," sort"),n(3870,"br"),t()()(),i(3871,"td",21)(3872,"code",25),e(3873,"boolean"),t()(),i(3874,"td",24)(3875,"em")(3876,"strong"),e(3877,"(opcional)"),t()(),i(3878,"p"),e(3879,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),i(3880,"p")(3881,"strong"),e(3882,"Componentes compat\xEDveis:"),t(),i(3883,"code"),e(3884,"po-combo"),t(),e(3885,", po-multiselect"),t()()(),i(3886,"tr",17)(3887,"td",18)(3888,"div",19)(3889,"span",20),e(3890," step"),n(3891,"br"),t()()(),i(3892,"td",21)(3893,"code",43),e(3894,"number"),t()(),i(3895,"td",24)(3896,"em")(3897,"strong"),e(3898,"(opcional)"),t()(),i(3899,"p"),e(3900,"Intervalo utilizado no "),i(3901,"code"),e(3902,"po-number"),t(),e(3903,"."),t()()(),i(3904,"tr",17)(3905,"td",18)(3906,"div",19)(3907,"span",20),e(3908," thousandMaxlength"),n(3909,"br"),t()()(),i(3910,"td",21)(3911,"code",43),e(3912,"number"),t()(),i(3913,"td",24)(3914,"em")(3915,"strong"),e(3916,"(opcional)"),t()(),i(3917,"p"),e(3918,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),i(3919,"blockquote")(3920,"p"),e(3921,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(3922,"code"),e(3923,"type"),t(),e(3924," for "),i(3925,"em"),e(3926,"currency"),t(),e(3927," ou "),i(3928,"em"),e(3929,"decimal"),t(),e(3930,"."),t()()()(),i(3931,"tr",17)(3932,"td",18)(3933,"div",19)(3934,"span",20),e(3935," type"),n(3936,"br"),t()()(),i(3937,"td",21)(3938,"code",30),e(3939,"string "),t(),i(3940,"code",71),e(3941," PoDynamicFieldType"),t()(),i(3942,"td",24)(3943,"em")(3944,"strong"),e(3945,"(opcional)"),t()(),i(3946,"p"),e(3947,"Tipo do valor campo."),t(),i(3948,"p"),e(3949,"Valores v\xE1lidos:"),t(),i(3950,"ul")(3951,"li")(3952,"code"),e(3953,"boolean"),t(),e(3954,": Valores "),i(3955,"em"),e(3956,"booleanos"),t(),e(3957,"."),t(),i(3958,"li")(3959,"code"),e(3960,"currency"),t(),e(3961,": Valores monet\xE1rios."),t(),i(3962,"li")(3963,"code"),e(3964,"decimal"),t(),e(3965,": Valores decimais."),t(),i(3966,"li")(3967,"code"),e(3968,"date"),t(),e(3969,": Valores de datas."),i(3970,"ul")(3971,"li"),e(3972,"Aceita os tipos "),i(3973,"strong"),e(3974,"string"),t(),e(3975," e "),i(3976,"strong"),e(3977,"Date"),t(),e(3978,` padr\xE3o do Javascript,
por exemplo: `),i(3979,"code"),e(3980,"'2017-11-28'"),t(),e(3981," ou "),i(3982,"code"),e(3983,"new Date(2017, 10, 28)"),t(),e(3984,"."),t()()(),i(3985,"li")(3986,"code"),e(3987,"dateTime"),t(),e(3988,": Valor de data com hor\xE1rio."),i(3989,"ul")(3990,"li"),e(3991,"Aceita o tipo "),i(3992,"em"),e(3993,"string"),t(),e(3994," no formato "),i(3995,"strong"),e(3996,"ISO-8601"),t(),e(3997," extendido "),i(3998,"strong"),e(3999,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(4e3,`
e o tipo `),i(4001,"strong"),e(4002,"Date"),t(),e(4003," padr\xE3o do Javascript, por exemplo: "),i(4004,"code"),e(4005,"'2017-11-28T00:00:00-02:00'"),t(),e(4006," ou "),i(4007,"code"),e(4008,"new Date(2017, 10, 28)"),t(),e(4009,"."),t()()(),i(4010,"li")(4011,"code"),e(4012,"number"),t(),e(4013,": Valores num\xE9ricos."),t(),i(4014,"li")(4015,"code"),e(4016,"string"),t(),e(4017,": Textos."),t(),i(4018,"li")(4019,"code"),e(4020,"time"),t(),e(4021,": Valor do hor\xE1rio."),i(4022,"ul")(4023,"li"),e(4024,"Aceita o tipo "),i(4025,"strong"),e(4026,"string"),t(),e(4027," nos formatos "),i(4028,"strong"),e(4029,"'HH:mm:ss'"),t(),e(4030," ou "),i(4031,"strong"),e(4032,"'HH:mm:ss.ffffff'"),t(),e(4033,", por exemplo: "),i(4034,"code"),e(4035,"'23:12:45'"),t(),e(4036,"."),t()()()()()(),i(4037,"tr",17)(4038,"td",18)(4039,"div",19)(4040,"span",20),e(4041," url"),n(4042,"br"),t()()(),i(4043,"td",21)(4044,"code",30),e(4045,"string"),t()(),i(4046,"td",24)(4047,"em")(4048,"strong"),e(4049,"(opcional)"),t()(),i(4050,"p"),e(4051,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),i(4052,"p")(4053,"strong"),e(4054,"Componente compat\xEDvel"),t(),e(4055,": "),i(4056,"code"),e(4057,"po-upload"),t()()()(),i(4058,"tr",17)(4059,"td",18)(4060,"div",19)(4061,"span",20),e(4062," validate"),n(4063,"br"),t()()(),i(4064,"td",21)(4065,"code",30),e(4066,"string "),t(),i(4067,"code",42),e(4068," Function"),t()(),i(4069,"td",24)(4070,"em")(4071,"strong"),e(4072,"(opcional)"),t()(),i(4073,"p"),e(4074,"Fun\xE7\xE3o ou servi\xE7o para validar as "),i(4075,"strong"),e(4076,"mudan\xE7as do campo"),t(),e(4077,"."),t(),i(4078,"ul")(4079,"li"),e(4080,"A propriedade aceita os seguintes tipos:"),t(),i(4081,"li")(4082,"strong"),e(4083,"String"),t(),e(4084,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),i(4085,"code"),e(4086,"POST"),t(),e(4087,"."),t(),i(4088,"li")(4089,"strong"),e(4090,"Function"),t(),e(4091,": M\xE9todo que ser\xE1 executado."),t()(),i(4092,"p"),e(4093,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),i(4094,"code"),e(4095,"PoDynamicFormFieldChanged"),t(),e(4096,":"),t(),i(4097,"p")(4098,"code"),e(4099,"{ property: 'property name', value: 'new value' }"),t()(),i(4100,"p"),e(4101,"O retorno desta fun\xE7\xE3o deve ser do tipo "),i(4102,"a",72),e(4103,"PoDynamicFormFieldValidation"),t(),e(4104,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),i(4105,"pre")(4106,"code"),e(4107,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}`),t()(),i(4108,"p"),e(4109,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(4110,"code"),e(4111,"bind"),t(),e(4112,`, por exemplo:
`),i(4113,"code"),e(4114,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),i(4115,"tr",17)(4116,"td",18)(4117,"div",19)(4118,"span",20),e(4119," visible"),n(4120,"br"),t()()(),i(4121,"td",21)(4122,"code",25),e(4123,"boolean"),t()(),i(4124,"td",24)(4125,"em")(4126,"strong"),e(4127,"(opcional)"),t()(),i(4128,"p"),e(4129,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),i(4130,"h4",41)(4131,"code",5),e(4132,"PoLookupColumn"),t()(),i(4133,"div",2)(4134,"p"),e(4135,"Interface para configura\xE7\xE3o das colunas do po-lookup."),t()(),i(4136,"h4",13),e(4137,"Propriedades"),t(),i(4138,"table",14)(4139,"tr",15)(4140,"th",16),e(4141,"Nome"),t(),i(4142,"th",16),e(4143,"Tipo"),t(),i(4144,"th",16),e(4145,"Descri\xE7\xE3o"),t()(),i(4146,"tr",17)(4147,"td",18)(4148,"div",19)(4149,"span",20),e(4150," fieldLabel"),n(4151,"br"),t()()(),i(4152,"td",21)(4153,"code",25),e(4154,"boolean"),t()(),i(4155,"td",24)(4156,"em")(4157,"strong"),e(4158,"(opcional)"),t()(),i(4159,"p"),e(4160,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),t(),i(4161,"p"),e(4162,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),t(),i(4163,"p"),e(4164,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),i(4165,"code"),e(4166,"p-field-format"),t(),e(4167," ou "),i(4168,"code"),e(4169,"p-field-label"),t(),e(4170," forem configurados no componente."),t()()(),i(4171,"tr",17)(4172,"td",18)(4173,"div",19)(4174,"span",20),e(4175," format"),n(4176,"br"),t()()(),i(4177,"td",21)(4178,"code",30),e(4179,"string"),t()(),i(4180,"td",24)(4181,"em")(4182,"strong"),e(4183,"(opcional)"),t()(),i(4184,"p"),e(4185,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(4186,"ul")(4187,"li"),e(4188,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(4189,"li"),e(4190,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(4191,"tr",17)(4192,"td",18)(4193,"div",19)(4194,"span",20),e(4195," label"),n(4196,"br"),t()()(),i(4197,"td",21)(4198,"code",30),e(4199,"string"),t()(),i(4200,"td",24)(4201,"em")(4202,"strong"),e(4203,"(opcional)"),t()(),i(4204,"p"),e(4205,"Texto para t\xEDtulo da coluna."),t(),i(4206,"p"),e(4207,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(4208,"em"),e(4209,"label"),t(),e(4210," o valor da propriedade "),i(4211,"em"),e(4212,"property"),t(),e(4213," com a primeira letra em mai\xFAsculo."),t()()(),i(4214,"tr",17)(4215,"td",18)(4216,"div",19)(4217,"span",20),e(4218," property"),n(4219,"br"),t()()(),i(4220,"td",21)(4221,"code",30),e(4222,"string"),t()(),i(4223,"td",24)(4224,"em")(4225,"strong"),e(4226,"(opcional)"),t()(),i(4227,"p"),e(4228,"Nome identificador da coluna."),t()()(),i(4229,"tr",17)(4230,"td",18)(4231,"div",19)(4232,"span",20),e(4233," type"),n(4234,"br"),t()()(),i(4235,"td",21)(4236,"code",30),e(4237,"string"),t()(),i(4238,"td",24)(4239,"em")(4240,"strong"),e(4241,"(opcional)"),t()(),i(4242,"p"),e(4243,"Tipo da coluna:"),t(),i(4244,"ul")(4245,"li"),e(4246,"string (padr\xE3o): textos"),t(),i(4247,"li"),e(4248,"number: valores num\xE9ricos"),t(),i(4249,"li"),e(4250,"date: data"),t(),i(4251,"li"),e(4252,"currency: valores monet\xE1rios"),t(),i(4253,"li"),e(4254,"dateTime: data e hora"),t()()()(),i(4255,"tr",17)(4256,"td",18)(4257,"div",19)(4258,"span",20),e(4259," width"),n(4260,"br"),t()()(),i(4261,"td",21)(4262,"code",30),e(4263,"string"),t()(),i(4264,"td",24)(4265,"em")(4266,"strong"),e(4267,"(opcional)"),t()(),i(4268,"p"),e(4269,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()(),i(4270,"h4",41)(4271,"code",5),e(4272,"PoLookupFilter"),t()(),i(4273,"div",2)(4274,"p"),e(4275,"Define o tipo de busca utilizado no po-lookup."),t()(),i(4276,"h4",13),e(4277,"M\xE9todos"),t(),i(4278,"table",39)(4279,"tr",17)(4280,"th",40)(4281,"div",19)(4282,"h4")(4283,"span",20),e(4284," getFilteredItems "),t()()()()(),i(4285,"tr",24)(4286,"td",24)(4287,"p"),e(4288,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),i(4289,"em"),e(4290,"Observable"),t(),e(4291," com a resposta da API no formato da interface "),i(4292,"code"),e(4293,"PoLookupResponseApi"),t(),e(4294,"."),t()()()(),i(4295,"h5")(4296,"b"),e(4297,"Par\xE2metros"),t()(),i(4298,"table",14)(4299,"tr",15)(4300,"th",16),e(4301,"Nome"),t(),i(4302,"th",16),e(4303,"Tipo"),t(),i(4304,"th",16),e(4305,"Descri\xE7\xE3o"),t()(),i(4306,"tr",17)(4307,"td",18),e(4308," params"),t(),i(4309,"td",21)(4310,"code",73),e(4311," PoLookupFilteredItemsParams "),t()(),i(4312,"td",24)(4313,"p"),e(4314,"Objeto enviado por par\xE2metro que implementa a interface "),i(4315,"code"),e(4316,"PoLookupFilteredItemsParams"),t(),e(4317,"."),t()()()(),n(4318,"br"),i(4319,"table",39)(4320,"tr",17)(4321,"th",40)(4322,"div",19)(4323,"h4")(4324,"span",20),e(4325," getObjectByValue "),t()()()()(),i(4326,"tr",24)(4327,"td",24)(4328,"p"),e(4329,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(4330,"p"),e(4331,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),t()()()(),i(4332,"h5")(4333,"b"),e(4334,"Par\xE2metros"),t()(),i(4335,"table",14)(4336,"tr",15)(4337,"th",16),e(4338,"Nome"),t(),i(4339,"th",16),e(4340,"Tipo"),t(),i(4341,"th",16),e(4342,"Descri\xE7\xE3o"),t()(),i(4343,"tr",17)(4344,"td",18),e(4345," value"),t(),i(4346,"td",21)(4347,"code",30),e(4348," string "),t(),i(4349,"code",67),e(4350," Array<any> "),t()(),i(4351,"td",24)(4352,"p"),e(4353,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(4354,"tr",17)(4355,"td",18),e(4356," filterParams"),t(),i(4357,"td",21)(4358,"code",73),e(4359," any "),t()(),i(4360,"td",24)(4361,"p"),e(4362,"Valor informado atrav\xE9s da propriedade "),i(4363,"code"),e(4364,"p-filter-params"),t(),e(4365,"."),t()()()(),n(4366,"br"),i(4367,"h4",41)(4368,"code",5),e(4369,"PoLookupFilteredItemsParams"),t()(),i(4370,"div",2)(4371,"p"),e(4372,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),i(4373,"code"),e(4374,"getFilteredItems"),t(),e(4375,"."),t()(),i(4376,"h4",13),e(4377,"Propriedades"),t(),i(4378,"table",14)(4379,"tr",15)(4380,"th",16),e(4381,"Nome"),t(),i(4382,"th",16),e(4383,"Tipo"),t(),i(4384,"th",16),e(4385,"Descri\xE7\xE3o"),t()(),i(4386,"tr",17)(4387,"td",18)(4388,"div",19)(4389,"span",20),e(4390," advancedFilters"),n(4391,"br"),t()()(),i(4392,"td",21)(4393,"code",74),e(4394,`{ [key: string]: any;
}`),t()(),i(4395,"td",24)(4396,"em")(4397,"strong"),e(4398,"(opcional)"),t()(),i(4399,"p"),e(4400,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),t()()(),i(4401,"tr",17)(4402,"td",18)(4403,"div",19)(4404,"span",20),e(4405," filter"),n(4406,"br"),t()()(),i(4407,"td",21)(4408,"code",30),e(4409,"string"),t()(),i(4410,"td",24)(4411,"em")(4412,"strong"),e(4413,"(opcional)"),t()(),i(4414,"p"),e(4415,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(4416,"tr",17)(4417,"td",18)(4418,"div",19)(4419,"span",20),e(4420," filterParams"),n(4421,"br"),t()()(),i(4422,"td",21)(4423,"code",33),e(4424,"any"),t()(),i(4425,"td",24)(4426,"em")(4427,"strong"),e(4428,"(opcional)"),t()(),i(4429,"p"),e(4430,"Valor informado atrav\xE9s da propriedade "),i(4431,"code"),e(4432,"p-filter-params"),t(),e(4433,"."),t()()(),i(4434,"tr",17)(4435,"td",18)(4436,"div",19)(4437,"span",20),e(4438," order"),n(4439,"br"),t()()(),i(4440,"td",21)(4441,"code",30),e(4442,"string"),t()(),i(4443,"td",24)(4444,"em")(4445,"strong"),e(4446,"(opcional)"),t()(),i(4447,"p"),e(4448,"Coluna que est\xE1 sendo ordenada na tabela."),t(),i(4449,"ul")(4450,"li"),e(4451,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(4452,"code"),e(4453,"-<colunaOrdenada>"),t(),e(4454,", por exemplo "),i(4455,"code"),e(4456,"-name"),t(),e(4457,"."),t(),i(4458,"li"),e(4459,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(4460,"code"),e(4461,"<colunaOrdenada>"),t(),e(4462,", por exemplo "),i(4463,"code"),e(4464,"name"),t(),e(4465,"."),t()()()(),i(4466,"tr",17)(4467,"td",18)(4468,"div",19)(4469,"span",20),e(4470," page"),n(4471,"br"),t()()(),i(4472,"td",21)(4473,"code",43),e(4474,"number"),t()(),i(4475,"td",24)(4476,"em")(4477,"strong"),e(4478,"(opcional)"),t()(),i(4479,"p"),e(4480,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(4481,"tr",17)(4482,"td",18)(4483,"div",19)(4484,"span",20),e(4485," pageSize"),n(4486,"br"),t()()(),i(4487,"td",21)(4488,"code",43),e(4489,"number"),t()(),i(4490,"td",24)(4491,"em")(4492,"strong"),e(4493,"(opcional)"),t()(),i(4494,"p"),e(4495,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()(),i(4496,"h4",41)(4497,"code",5),e(4498,"PoLookupLiterals"),t()(),i(4499,"div",2)(4500,"p"),e(4501,"Interface para defini\xE7\xE3o das literais usadas no "),i(4502,"code"),e(4503,"po-lookup"),t(),e(4504,"."),t()(),i(4505,"h4",13),e(4506,"Propriedades"),t(),i(4507,"table",14)(4508,"tr",15)(4509,"th",16),e(4510,"Nome"),t(),i(4511,"th",16),e(4512,"Tipo"),t(),i(4513,"th",16),e(4514,"Descri\xE7\xE3o"),t()(),i(4515,"tr",17)(4516,"td",18)(4517,"div",19)(4518,"span",20),e(4519," clean"),n(4520,"br"),t()()(),i(4521,"td",21)(4522,"code",30),e(4523,"string"),t()(),i(4524,"td",24)(4525,"em")(4526,"strong"),e(4527,"(opcional)"),t()(),i(4528,"p"),e(4529,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),t()()(),i(4530,"tr",17)(4531,"td",18)(4532,"div",19)(4533,"span",20),e(4534," modalAdvancedSearch"),n(4535,"br"),t()()(),i(4536,"td",21)(4537,"code",30),e(4538,"string"),t()(),i(4539,"td",24)(4540,"em")(4541,"strong"),e(4542,"(opcional)"),t()(),i(4543,"p"),e(4544,"Texto do link de busca avan\xE7ada."),t(),i(4545,"p"),e(4546,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),t()()(),i(4547,"tr",17)(4548,"td",18)(4549,"div",19)(4550,"span",20),e(4551," modalAdvancedSearchPrimaryActionLabel"),n(4552,"br"),t()()(),i(4553,"td",21)(4554,"code",30),e(4555,"string"),t()(),i(4556,"td",24)(4557,"em")(4558,"strong"),e(4559,"(opcional)"),t()(),i(4560,"p"),e(4561,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),t()()(),i(4562,"tr",17)(4563,"td",18)(4564,"div",19)(4565,"span",20),e(4566," modalAdvancedSearchSecondaryActionLabel"),n(4567,"br"),t()()(),i(4568,"td",21)(4569,"code",30),e(4570,"string"),t()(),i(4571,"td",24)(4572,"em")(4573,"strong"),e(4574,"(opcional)"),t()(),i(4575,"p"),e(4576,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),t()()(),i(4577,"tr",17)(4578,"td",18)(4579,"div",19)(4580,"span",20),e(4581," modalAdvancedSearchTitle"),n(4582,"br"),t()()(),i(4583,"td",21)(4584,"code",30),e(4585,"string"),t()(),i(4586,"td",24)(4587,"em")(4588,"strong"),e(4589,"(opcional)"),t()(),i(4590,"p"),e(4591,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),t()()(),i(4592,"tr",17)(4593,"td",18)(4594,"div",19)(4595,"span",20),e(4596," modalDisclaimerGroupTitle"),n(4597,"br"),t()()(),i(4598,"td",21)(4599,"code",30),e(4600,"string"),t()(),i(4601,"td",24)(4602,"em")(4603,"strong"),e(4604,"(opcional)"),t()(),i(4605,"p"),e(4606,"Texto exibido no t\xEDtulo do disclaimer."),t()()(),i(4607,"tr",17)(4608,"td",18)(4609,"div",19)(4610,"span",20),e(4611," modalPlaceholder"),n(4612,"br"),t()()(),i(4613,"td",21)(4614,"code",30),e(4615,"string"),t()(),i(4616,"td",24)(4617,"em")(4618,"strong"),e(4619,"(opcional)"),t()(),i(4620,"p"),e(4621,"Texto exibido no placeholder do input da modal."),t()()(),i(4622,"tr",17)(4623,"td",18)(4624,"div",19)(4625,"span",20),e(4626," modalPrimaryActionLabel"),n(4627,"br"),t()()(),i(4628,"td",21)(4629,"code",30),e(4630,"string"),t()(),i(4631,"td",24)(4632,"em")(4633,"strong"),e(4634,"(opcional)"),t()(),i(4635,"p"),e(4636,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),i(4637,"tr",17)(4638,"td",18)(4639,"div",19)(4640,"span",20),e(4641," modalSecondaryActionLabel"),n(4642,"br"),t()()(),i(4643,"td",21)(4644,"code",30),e(4645,"string"),t()(),i(4646,"td",24)(4647,"em")(4648,"strong"),e(4649,"(opcional)"),t()(),i(4650,"p"),e(4651,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),i(4652,"tr",17)(4653,"td",18)(4654,"div",19)(4655,"span",20),e(4656," modalTableLoadMoreData"),n(4657,"br"),t()()(),i(4658,"td",21)(4659,"code",30),e(4660,"string"),t()(),i(4661,"td",24)(4662,"em")(4663,"strong"),e(4664,"(opcional)"),t()(),i(4665,"p"),e(4666,"Label do "),i(4667,"code"),e(4668,"button"),t(),e(4669," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),t()()(),i(4670,"tr",17)(4671,"td",18)(4672,"div",19)(4673,"span",20),e(4674," modalTableLoadingData"),n(4675,"br"),t()()(),i(4676,"td",21)(4677,"code",30),e(4678,"string"),t()(),i(4679,"td",24)(4680,"em")(4681,"strong"),e(4682,"(opcional)"),t()(),i(4683,"p"),e(4684,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),t()()(),i(4685,"tr",17)(4686,"td",18)(4687,"div",19)(4688,"span",20),e(4689," modalTableNoColumns"),n(4690,"br"),t()()(),i(4691,"td",21)(4692,"code",30),e(4693,"string"),t()(),i(4694,"td",24)(4695,"em")(4696,"strong"),e(4697,"(opcional)"),t()(),i(4698,"p"),e(4699,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),t()()(),i(4700,"tr",17)(4701,"td",18)(4702,"div",19)(4703,"span",20),e(4704," modalTableNoData"),n(4705,"br"),t()()(),i(4706,"td",21)(4707,"code",30),e(4708,"string"),t()(),i(4709,"td",24)(4710,"em")(4711,"strong"),e(4712,"(opcional)"),t()(),i(4713,"p"),e(4714,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),t()()(),i(4715,"tr",17)(4716,"td",18)(4717,"div",19)(4718,"span",20),e(4719," modalTitle"),n(4720,"br"),t()()(),i(4721,"td",21)(4722,"code",30),e(4723,"string"),t()(),i(4724,"td",24)(4725,"em")(4726,"strong"),e(4727,"(opcional)"),t()(),i(4728,"p"),e(4729,"Texto exibido no t\xEDtulo da modal."),t()()(),i(4730,"tr",17)(4731,"td",18)(4732,"div",19)(4733,"span",20),e(4734," search"),n(4735,"br"),t()()(),i(4736,"td",21)(4737,"code",30),e(4738,"string"),t()(),i(4739,"td",24)(4740,"em")(4741,"strong"),e(4742,"(opcional)"),t()(),i(4743,"p"),e(4744,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),t()()()(),i(4745,"h4",41)(4746,"code",5),e(4747,"PoLookupResponseApi"),t()(),i(4748,"div",2)(4749,"p"),e(4750,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),t()(),i(4751,"h4",13),e(4752,"Propriedades"),t(),i(4753,"table",14)(4754,"tr",15)(4755,"th",16),e(4756,"Nome"),t(),i(4757,"th",16),e(4758,"Tipo"),t(),i(4759,"th",16),e(4760,"Descri\xE7\xE3o"),t()(),i(4761,"tr",17)(4762,"td",18)(4763,"div",19)(4764,"span",20),e(4765," hasNext"),n(4766,"br"),t()()(),i(4767,"td",21)(4768,"code",25),e(4769,"boolean"),t()(),i(4770,"td",24)(4771,"p"),e(4772,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(4773,"tr",17)(4774,"td",18)(4775,"div",19)(4776,"span",20),e(4777," items"),n(4778,"br"),t()()(),i(4779,"td",21)(4780,"code",75),e(4781,"Array<object>"),t()(),i(4782,"td",24)(4783,"p"),e(4784,"Lista de itens retornados."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var Re=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(f(he),f(fe))};static \u0275cmp=u({type:a,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title"," Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(l,o){l&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),n(3,"sample-po-lookup-doc"),t(),i(4,"po-tab",3),n(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view"),t()()()),l&2&&(c("p-actions",o.actions),d(2),c("p-active",o.activeTab.includes("doc")),d(2),c("p-hide",o.hidePoWebSample)("p-active",o.activeTab.includes("web")))},dependencies:[Le,C,k,Me,_e,Ie,Ae,je,ze,Be],encapsulation:2})}return a})();var St=[{path:"",component:Re}],We=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=$({type:a});static \u0275inj=Q({imports:[le.forChild(St),le]})}return a})();var mi=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=$({type:a});static \u0275inj=Q({imports:[Fe,We]})}return a})();export{mi as DocPoLookupModule};
