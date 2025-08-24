import{o as y,p as Le}from"./chunk-KTHQ6LKY.js";import{Ea as ke,Ga as q,H as K,M as fe,O as X,Pa as H,Qa as ye,Ua as N,kb as Pe,ra as Y,ua as Ce,wb as C,xb as k,y as z,ya as Z}from"./chunk-K2OBELIH.js";import{Ab as w,Bc as T,Ca as P,Cc as j,D as me,Dc as $,Ec as A,Fc as I,Ga as pe,Ic as Se,Jc as be,Ka as n,L as O,La as t,Lb as xe,M as G,Ma as i,Nc as ge,P as h,Qa as J,Ra as x,Sa as se,Sc as ve,T as c,U as E,Uc as he,Wa as ie,Wc as ae,Yb as V,a as U,ab as ue,bb as e,c as re,db as L,fb as b,gb as g,hb as v,ia as d,ib as D,ja as ne,jb as W,kb as F,o as te,pa as S,qa as Q,qb as ce,rb as Ee,va as de,yc as oe,za as u}from"./chunk-TT2MSOYL.js";var Fe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&i(0,"po-lookup",0)},dependencies:[q],encapsulation:2})}return a})();var We=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Basic"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-lookup
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
`),t()()()()(),n(21,"div",10),i(22,"sample-po-lookup-basic"),t(),i(23,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,We,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Fe],encapsulation:2})}return a})();var _=(()=>{class a{httpClient=h(V);url="https://po-sample-api.onrender.com/v1/heroes";getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,p=re(m,["filterParams","advancedFilters"]),s=U(U(U({},p),l),o);return this.httpClient.get(this.url,{params:s})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var qe=(()=>{class a{sampleFilterService=h(_);additionalHelpTooltip;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=Ce.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch{this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch{this.customAdvancedFilters=void 0}}restore(){this.additionalHelpTooltip="",this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[],this.size="medium"}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-labs"]],standalone:!1,features:[D([_])],decls:26,vars:51,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-keydown","p-selected","ngModel","p-additional-help-tooltip","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-size","p-spacing","p-text-wrap","p-virtual-scroll","p-error-limit"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","3","p-label","Columns",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-12","po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let p=J();n(0,"po-lookup",1),v("ngModelChange",function(m){return c(p),g(o.lookup,m)||(o.lookup=m),E(m)}),x("p-change",function(){return c(p),E(o.changeEvent("p-change"))})("p-error",function(){return c(p),E(o.changeEvent("p-error"))})("p-keydown",function(){return c(p),E(o.changeEvent("p-keydown"))})("p-selected",function(){return c(p),E(o.changeEvent("p-selected"))}),t(),i(1,"hr"),n(2,"po-container",2)(3,"div",3),i(4,"po-info",4)(5,"po-info",5),t()(),i(6,"hr"),n(7,"form",null,0)(9,"po-input",6),v("ngModelChange",function(m){return c(p),g(o.label,m)||(o.label=m),E(m)}),t(),n(10,"po-checkbox-group",7),v("ngModelChange",function(m){return c(p),g(o.columnsName,m)||(o.columnsName=m),E(m)}),x("p-change",function(){return c(p),E(o.updateColumns())}),t(),n(11,"po-select",8),v("ngModelChange",function(m){return c(p),g(o.fieldLabel,m)||(o.fieldLabel=m),E(m)}),t(),n(12,"po-select",9),v("ngModelChange",function(m){return c(p),g(o.fieldValue,m)||(o.fieldValue=m),E(m)}),t(),n(13,"po-input",10),v("ngModelChange",function(m){return c(p),g(o.filterService,m)||(o.filterService=m),E(m)}),t(),n(14,"po-input",11),v("ngModelChange",function(m){return c(p),g(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),E(m)}),t(),n(15,"po-input",12),v("ngModelChange",function(m){return c(p),g(o.help,m)||(o.help=m),E(m)}),t(),n(16,"po-input",13),v("ngModelChange",function(m){return c(p),g(o.additionalHelpTooltip,m)||(o.additionalHelpTooltip=m),E(m)}),t(),n(17,"po-input",14),v("ngModelChange",function(m){return c(p),g(o.placeholder,m)||(o.placeholder=m),E(m)}),t(),n(18,"po-input",15),v("ngModelChange",function(m){return c(p),g(o.literals,m)||(o.literals=m),E(m)}),x("p-change",function(){return c(p),E(o.changeLiterals())}),t(),n(19,"po-input",16),v("ngModelChange",function(m){return c(p),g(o.formatField,m)||(o.formatField=m),E(m)}),x("p-change",function(m){return c(p),E(o.onFieldFormatChange(m))}),t(),n(20,"po-checkbox-group",17),v("ngModelChange",function(m){return c(p),g(o.properties,m)||(o.properties=m),E(m)}),t(),n(21,"po-radio-group",18),v("ngModelChange",function(m){return c(p),g(o.spacing,m)||(o.spacing=m),E(m)}),t(),n(22,"po-radio-group",19),v("ngModelChange",function(m){return c(p),g(o.size,m)||(o.size=m),E(m)}),t(),n(23,"po-textarea",20),v("ngModelChange",function(m){return c(p),g(o.advancedFilters,m)||(o.advancedFilters=m),E(m)}),x("p-change",function(){return c(p),E(o.changeAdvancedFilters())}),t(),n(24,"div",3)(25,"po-button",21),x("p-click",function(){return c(p),E(o.restore())}),t()()()}l&2&&(b("ngModel",o.lookup),u("p-additional-help-tooltip",o.additionalHelpTooltip)("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit")),d(4),u("p-value",o.lookup),d(),u("p-value",o.event),d(4),b("ngModel",o.label),d(),b("ngModel",o.columnsName),u("p-options",o.columnsOptions),d(),b("ngModel",o.fieldLabel),u("p-options",o.fieldLabelOptions),d(),b("ngModel",o.fieldValue),u("p-options",o.fieldValueOptions),d(),b("ngModel",o.filterService),d(),b("ngModel",o.fieldErrorMessage),d(),b("ngModel",o.help),d(),b("ngModel",o.additionalHelpTooltip),d(),b("ngModel",o.placeholder),d(),b("ngModel",o.literals),d(),b("ngModel",o.formatField),d(),b("ngModel",o.properties),u("p-options",o.propertiesOptions),d(),b("ngModel",o.spacing),u("p-options",o.typeSpacing),d(),b("ngModel",o.size),u("p-options",o.sizeOptions),d(),b("ngModel",o.advancedFilters))},dependencies:[I,T,j,A,$,z,K,fe,X,ke,q,H,ye,N],encapsulation:2})}return a})();var Qe=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Labs"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-lookup
  name="lookup"
  [(ngModel)]="lookup"
  [p-additional-help-tooltip]="additionalHelpTooltip"
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
  [p-size]="size"
  [p-spacing]="spacing"
  [p-text-wrap]="properties.includes('textWrap')"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-change)="changeEvent('p-change')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
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
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-checkbox-group
    class="po-md-12 po-lg-6"
    name="columnsName"
    [(ngModel)]="columnsName"
    p-columns="3"
    p-label="Columns"
    [p-options]="columnsOptions"
    (p-change)="updateColumns()"
  >
  </po-checkbox-group>

  <po-select
    class="po-md-6 po-lg-12"
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

  <po-input
    class="po-md-12 po-lg-6"
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

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input
    class="po-md-6"
    name="additionalHelpTooltip"
    [(ngModel)]="additionalHelpTooltip"
    p-clean
    p-label="Additional Help Tooltip"
  >
  </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

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

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-12"
    name="spacing"
    [(ngModel)]="spacing"
    p-columns="4"
    p-help="Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    p-label="Spacing"
    [p-options]="typeSpacing"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <po-textarea
    class="po-md-12 po-lg-12"
    name="advancedFilters"
    [(ngModel)]="advancedFilters"
    (p-change)="changeAdvancedFilters()"
    p-help='Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]'
    p-label="Advanced Filters"
    p-rows="4"
  >
  </po-textarea>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-labs/sample-po-lookup-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

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
  sampleFilterService = inject(SamplePoLookupService);

  additionalHelpTooltip: string;
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
  size: string;
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
    { label: 'ExtraSmall', value: 'extraSmall' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

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
    this.additionalHelpTooltip = '';
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
    this.size = 'medium';
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach(column => this.columns.push(this.columnsDefinition[column]));
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),n(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-lookup-labs"),t(),i(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Qe,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,qe],encapsulation:2})}return a})();var $e=()=>({modalTitle:"Heroes available for mission"}),Te=(()=>{class a{service=h(_);notification=h(Y);hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:!0,gridColumns:6,label:"Hero"},{property:"name",optional:!0,gridColumns:6}];fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero"]],standalone:!1,features:[D([_])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let p=J();n(0,"div",1),i(1,"po-info",2),t(),i(2,"hr"),n(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),v("ngModelChange",function(m){return c(p),g(o.hero,m)||(o.hero=m),E(m)}),t(),n(7,"po-select",4),v("ngModelChange",function(m){return c(p),g(o.vehicle,m)||(o.vehicle=m),E(m)}),t()(),n(8,"div",1)(9,"po-button",5),x("p-click",function(){return c(p),E(o.startMission())}),t()()()}if(l&2){let p=ue(4);d(6),b("ngModel",o.hero),u("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",!0)("p-advanced-filters",o.advancedFilters)("p-literals",W(10,$e)),d(),b("ngModel",o.vehicle),u("p-options",o.vehicles),d(2),u("p-disabled",p.form.invalid||p.form.pending)}},dependencies:[I,T,j,A,$,z,q,H,N],encapsulation:2})}return a})();var Xe=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero/sample-po-lookup-hero.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

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
  service = inject(SamplePoLookupService);
  notification = inject(PoNotificationService);

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
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-lookup-hero"),t(),i(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Xe,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Te],encapsulation:2})}return a})();var Ze=()=>["nickname","label"],et=()=>({modalTitle:"Heroes available for mission"}),De=(()=>{class a{service=h(_);notification=h(Y);formBuilder=h(ge);formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,oe.required],vehicle:[null,oe.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:!1,features:[D([_])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(n(0,"div",0),i(1,"po-info",1),t(),i(2,"hr"),n(3,"form",2)(4,"div",0),i(5,"po-lookup",3)(6,"po-select",4),t(),n(7,"div",0)(8,"po-button",5),x("p-click",function(){return o.startMission()}),t()()()),l&2&&(d(3),u("formGroup",o.formMission),d(2),u("p-columns",o.columns)("p-field-format",W(7,Ze))("p-filter-service",o.service)("p-literals",W(8,et)),d(),u("p-options",o.vehicles),d(2),u("p-disabled",o.formMission.invalid||o.formMission.pending))},dependencies:[I,T,j,Se,be,z,q,H,N],encapsulation:2})}return a})();var nt=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero Reactive Form"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
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
  service = inject(SamplePoLookupService);
  notification = inject(PoNotificationService);
  private formBuilder = inject(UntypedFormBuilder);

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
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-lookup-hero-reactive-form"),t(),i(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,nt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,De],encapsulation:2})}return a})();var le=(()=>{class a{http=h(V);baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let p={page:l.toString()};return r&&(p.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:p}).pipe(te(s=>({items:s.results,hasNext:!!s.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(te(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ot(a,ct){if(a&1&&(n(0,"div",0),i(1,"po-table",3),t()),a&2){let r=se();d(),u("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",!0)("p-hide-table-search",!1)}}var Oe=(()=>{class a{filterService=h(le);entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case"people":return this.characterColumns;case"planets":return this.planetsColumns;case"starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case"people":return"character";case"planets":return"planet";case"starships":return"starship"}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:!1,features:[D([le])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"po-radio-group",1),v("ngModelChange",function(s){return g(o.filterParams,s)||(o.filterParams=s),s}),t()(),i(2,"hr"),n(3,"div",0)(4,"po-lookup",2),ce(5,"titlecase"),v("ngModelChange",function(s){return g(o.entity,s)||(o.entity=s),s}),x("p-selected",function(s){return o.onSelected(s)}),t()(),de(6,ot,2,4,"div",0)),l&2&&(d(),b("ngModel",o.filterParams),u("p-options",o.entities),d(3),ie("p-help","Select a ",o.entityLabel," to see the list of movies in which it participated"),ie("p-label","",Ee(5,12,o.entityLabel)," of Star Wars"),b("ngModel",o.entity),u("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",!0),d(2),pe(o.filmItemsFiltered&&o.entity?6:-1))},dependencies:[T,A,X,q,Z,xe],encapsulation:2})}return a})();var lt=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Star Wars films"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
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

@if (filmItemsFiltered && entity) {
  <div class="po-row">
    <po-table
      class="po-sm-12"
      [p-columns]="filmColumns"
      [p-items]="filmItemsFiltered"
      [p-sort]="true"
      [p-hide-table-search]="false"
    >
    </po-table>
  </div>
}
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { PoRadioGroupOption } from '@po-ui/ng-components';
import { SamplePoLookupSwFilmsService } from './sample-po-lookup-sw-films.service';

@Component({
  selector: 'sample-po-lookup-sw-films',
  templateUrl: './sample-po-lookup-sw-films.component.html',
  providers: [SamplePoLookupSwFilmsService],
  standalone: false
})
export class SamplePoLookupSwFilmsComponent implements OnInit {
  filterService = inject(SamplePoLookupSwFilmsService);

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
import { Injectable, inject } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupResponseApi, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupSwFilmsService implements PoLookupFilter {
  private http = inject(HttpClient);

  private baseUrl = 'https://swapi.dev/api';
  private filmsUrl = 'https://swapi.dev/api/films/';

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
`),t()()()()(),n(25,"div",10),i(26,"sample-po-lookup-sw-films"),t(),i(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,lt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Oe],encapsulation:2})}return a})();var je=(()=>{class a{http=h(V);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(me("items"))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Ie=(()=>{class a{service=h(je);loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank")}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:!1,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"po-lookup",1),v("ngModelChange",function(s){return g(o.multiLookup,s)||(o.multiLookup=s),s}),x("p-change",function(s){return o.changeOptions(s)}),t(),n(2,"po-container",2),i(3,"po-table",3),t()()),l&2&&(d(),b("ngModel",o.multiLookup),u("p-multiple",!0),d(2),u("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-loading",o.loading))},dependencies:[T,A,K,q,Z],encapsulation:2})}return a})();var dt=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Multiple"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

import { SamplePoLookupMultipleService } from './sample-po-lookup-multiple.service';

@Component({
  selector: 'sample-po-lookup-multiple',
  templateUrl: './sample-po-lookup-multiple.component.html',
  styles: [],
  standalone: false
})
export class SamplePoLookupMultipleComponent {
  service = inject(SamplePoLookupMultipleService);

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
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupMultipleService {
  http = inject(HttpClient);

  getHeroes(data): Observable<any> {
    const values = data?.length ? data.toString() : data;
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes?value=\${values}\`).pipe(pluck('items'));
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-lookup-multiple"),t(),i(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,dt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Ie],encapsulation:2})}return a})();var He=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-doc"]],standalone:!1,decls:5258,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
</po-lookup>
`),t()()()(),n(61,"h4"),e(62,"Tokens customiz\xE1veis"),t(),n(63,"p"),e(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(65,"blockquote")(66,"p"),e(67,"Para maiores informa\xE7\xF5es, acesse o guia "),n(68,"a",8),e(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(70,"."),t()(),n(71,"table")(72,"thead")(73,"tr")(74,"th"),e(75,"Propriedade"),t(),n(76,"th"),e(77,"Descri\xE7\xE3o"),t(),n(78,"th"),e(79,"Valor Padr\xE3o"),t()()(),n(80,"tbody")(81,"tr")(82,"td")(83,"strong"),e(84,"Default Values"),t()(),i(85,"td")(86,"td"),t(),n(87,"tr")(88,"td")(89,"code"),e(90,"--font-family"),t()(),n(91,"td"),e(92,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(93,"td")(94,"code"),e(95,"var(--font-family-theme)"),t()()(),n(96,"tr")(97,"td")(98,"code"),e(99,"--font-size"),t()(),n(100,"td"),e(101,"Tamanho da fonte"),t(),n(102,"td")(103,"code"),e(104,"var(--font-size-default)"),t()()(),n(105,"tr")(106,"td")(107,"code"),e(108,"--text-color-placeholder"),t()(),n(109,"td"),e(110,"Cor do texto no placeholder"),t(),n(111,"td")(112,"code"),e(113,"var(--color-neutral-light-30)"),t()()(),n(114,"tr")(115,"td")(116,"code"),e(117,"--color"),t()(),n(118,"td"),e(119,"Cor principal do lookup"),t(),n(120,"td")(121,"code"),e(122,"var(--color-neutral-dark-70)"),t()()(),n(123,"tr")(124,"td")(125,"code"),e(126,"--border-radius"),t()(),n(127,"td"),e(128,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),t(),n(129,"td")(130,"code"),e(131,"var(--border-radius-md)"),t()()(),n(132,"tr")(133,"td")(134,"code"),e(135,"--background"),t()(),n(136,"td"),e(137,"Cor de background"),t(),n(138,"td")(139,"code"),e(140,"var(--color-neutral-light-05)"),t()()(),n(141,"tr")(142,"td")(143,"code"),e(144,"--text-color"),t()(),n(145,"td"),e(146,"Cor do texto"),t(),n(147,"td")(148,"code"),e(149,"var(--color-neutral-dark-90)"),t()()(),n(150,"tr")(151,"td")(152,"code"),e(153,"--color-clear"),t()(),n(154,"td"),e(155,"Cor principal do icone clear"),t(),n(156,"td")(157,"code"),e(158,"var(--color-action-default)"),t()()(),n(159,"tr")(160,"td")(161,"strong"),e(162,"Icon"),t()(),i(163,"td")(164,"td"),t(),n(165,"tr")(166,"td")(167,"code"),e(168,"--color-icon"),t()(),n(169,"td"),e(170,"Cor principal do icone pesquisar"),t(),n(171,"td")(172,"code"),e(173,"var(--color-action-default)"),t()()(),n(174,"tr")(175,"td")(176,"strong"),e(177,"Hover"),t()(),i(178,"td")(179,"td"),t(),n(180,"tr")(181,"td")(182,"code"),e(183,"--color-hover"),t()(),n(184,"td"),e(185,"Cor principal no estado hover"),t(),n(186,"td")(187,"code"),e(188,"var(--color-action-hover)"),t()()(),n(189,"tr")(190,"td")(191,"code"),e(192,"--background-hover"),t()(),n(193,"td"),e(194,"Cor de background no estado hover"),t(),n(195,"td")(196,"code"),e(197,"var(--color-brand-01-lightest)"),t()()(),n(198,"tr")(199,"td")(200,"strong"),e(201,"Focused"),t()(),i(202,"td")(203,"td"),t(),n(204,"tr")(205,"td")(206,"code"),e(207,"--color-focused"),t()(),n(208,"td"),e(209,"Cor principal no estado de focus"),t(),n(210,"td")(211,"code"),e(212,"var(--color-action-default)"),t()()(),n(213,"tr")(214,"td")(215,"code"),e(216,"--outline-color-focused"),t()(),n(217,"td"),e(218,"Cor do outline do estado de focus"),t(),n(219,"td")(220,"code"),e(221,"var(--color-action-focus)"),t()()(),n(222,"tr")(223,"td")(224,"strong"),e(225,"Disabled"),t()(),i(226,"td")(227,"td"),t(),n(228,"tr")(229,"td")(230,"code"),e(231,"--color-disabled"),t()(),n(232,"td"),e(233,"Cor principal no estado disabled"),t(),n(234,"td")(235,"code"),e(236,"var(--color-action-disabled)"),t()()(),n(237,"tr")(238,"td")(239,"code"),e(240,"--background-disabled"),t()(),n(241,"td"),e(242,"Cor de background no estado disabled"),t(),n(243,"td")(244,"code"),e(245,"var(--color-neutral-light-20)"),t()()(),n(246,"tr")(247,"td")(248,"code"),e(249,"--text-color-disabled"),t()(),n(250,"td"),e(251,"Cor do texto quando campo est\xE1 desabilitado"),t(),n(252,"td")(253,"code"),e(254,"var(--color-action-disabled)"),t()()(),n(255,"tr")(256,"td")(257,"strong"),e(258,"Error"),t()(),i(259,"td")(260,"td"),t(),n(261,"tr")(262,"td")(263,"code"),e(264,"--color-error"),t()(),n(265,"td"),e(266,"Cor de background no estado de requerido"),t(),n(267,"td")(268,"code"),e(269,"var(--color-feedback-negative-base)"),t()()()()()(),n(270,"div",9)(271,"h4",10),e(272,"Seletor"),t(),n(273,"pre",11),e(274,`<po-lookup
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-advanced-filters="Array<PoLookupAdvancedFilter>"
    p-append-in-body="boolean"
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
    (p-keydown)="EventEmitter"
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
    p-size="string"
    p-spacing="string"
    p-text-wrap="boolean"
    p-virtual-scroll="boolean" >
</po-lookup>
`),t()(),n(275,"h4",12),e(276,"Propriedades"),t(),n(277,"table",13)(278,"tr",14)(279,"th",15),e(280,"Nome"),t(),n(281,"th",15),e(282,"Tipo"),t(),n(283,"th",15),e(284,"Padr\xE3o"),t(),n(285,"th",15),e(286,"Descri\xE7\xE3o"),t()(),n(287,"tr",16)(288,"td",17)(289,"div",18)(290,"span",19),e(291," (p-additional-help)"),i(292,"br"),t()()(),n(293,"td",20)(294,"code",21),e(295,"EventEmitter"),t()(),n(296,"td",22),e(297,"-"),t(),n(298,"td",23)(299,"em")(300,"strong"),e(301,"(opcional)"),t()(),n(302,"p"),e(303,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(304,"code"),e(305,"p-help"),t(),e(306,"."),t()()(),n(307,"tr",16)(308,"td",17)(309,"div",24)(310,"span",25),e(311," p-additional-help-tooltip"),i(312,"br"),t()()(),n(313,"td",20)(314,"code",26),e(315,"string"),t()(),n(316,"td",22),e(317,"-"),t(),n(318,"td",23)(319,"em")(320,"strong"),e(321,"(opcional)"),t()(),n(322,"p"),e(323,"Exibe um \xEDcone de ajuda adicional ao "),n(324,"code"),e(325,"p-help"),t(),e(326,`, com o texto desta propriedade no tooltip.
Se o evento `),n(327,"code"),e(328,"p-additional-help"),t(),e(329,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(330,"strong"),e(331,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(332,"blockquote")(333,"p"),e(334,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),n(335,"tr",16)(336,"td",17)(337,"div",24)(338,"span",25),e(339," p-advanced-filters"),i(340,"br"),t()()(),n(341,"td",20)(342,"code",27),e(343,"Array<PoLookupAdvancedFilter>"),t()(),n(344,"td",22),e(345,"-"),t(),n(346,"td",23)(347,"em")(348,"strong"),e(349,"(opcional)"),t()(),n(350,"p"),e(351,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),n(352,"blockquote")(353,"p"),e(354,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),n(355,"p"),e(356,"Exemplo de URL com busca avan\xE7ada:"),t(),n(357,"pre")(358,"code"),e(359,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),t()(),n(360,"p"),e(361,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),t(),n(362,"pre")(363,"code"),e(364,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),t()()()(),n(365,"tr",16)(366,"td",17)(367,"div",24)(368,"span",25),e(369," p-append-in-body"),i(370,"br"),t()()(),n(371,"td",20)(372,"code",28),e(373,"boolean"),t()(),n(374,"td",22)(375,"p")(376,"code"),e(377,"false"),t()()(),n(378,"td",23)(379,"em")(380,"strong"),e(381,"(opcional)"),t()(),n(382,"p"),e(383,"Define que o tooltip ("),n(384,"code"),e(385,"p-additional-help-tooltip"),t(),e(386," e/ou "),n(387,"code"),e(388,"p-error-limit"),t(),e(389,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(390,"blockquote")(391,"p"),e(392,"Quando utilizado com "),n(393,"code"),e(394,"p-additional-help-tooltip"),t(),e(395,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(396,"tr",16)(397,"td",17)(398,"div",24)(399,"span",25),e(400," p-auto-focus"),i(401,"br"),t()()(),n(402,"td",20)(403,"code",28),e(404,"boolean"),t()(),n(405,"td",22)(406,"p")(407,"code"),e(408,"false"),t()()(),n(409,"td",23)(410,"em")(411,"strong"),e(412,"(opcional)"),t()(),n(413,"p"),e(414,"Aplica foco no elemento ao ser iniciado."),t(),n(415,"blockquote")(416,"p"),e(417,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(418,"tr",16)(419,"td",17)(420,"div",24)(421,"span",25),e(422," p-auto-height"),i(423,"br"),t()()(),n(424,"td",20)(425,"code",28),e(426,"boolean"),t()(),n(427,"td",22)(428,"p")(429,"code"),e(430,"false"),t()()(),n(431,"td",23)(432,"em")(433,"strong"),e(434,"(opcional)"),t()(),n(435,"p"),e(436,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),t()()(),n(437,"tr",16)(438,"td",17)(439,"div",18)(440,"span",19),e(441," (p-change)"),i(442,"br"),t()()(),n(443,"td",20)(444,"code",21),e(445,"EventEmitter"),t()(),n(446,"td",22),e(447,"-"),t(),n(448,"td",23)(449,"em")(450,"strong"),e(451,"(opcional)"),t()(),n(452,"p"),e(453,"Evento que ser\xE1 disparado ao alterar o model. Por par\xE2metro ser\xE1 passado o novo valor."),t()()(),n(454,"tr",16)(455,"td",17)(456,"div",18)(457,"span",19),e(458," (p-change-visible-columns)"),i(459,"br"),t()()(),n(460,"td",20)(461,"code",21),e(462,"EventEmitter"),t()(),n(463,"td",22),e(464,"-"),t(),n(465,"td",23)(466,"em")(467,"strong"),e(468,"(opcional)"),t()(),n(469,"p"),e(470,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),n(471,"p"),e(472,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),n(473,"tr",16)(474,"td",17)(475,"div",24)(476,"span",25),e(477," p-clean"),i(478,"br"),t()()(),n(479,"td",20)(480,"code",28),e(481,"boolean"),t()(),n(482,"td",22),e(483,"-"),t(),n(484,"td",23)(485,"p"),e(486,"Exibe um \xEDcone que permite limpar o campo."),t()()(),n(487,"tr",16)(488,"td",17)(489,"div",18)(490,"span",19),e(491," (p-restore-column-manager)"),i(492,"br"),t()()(),n(493,"td",20)(494,"code",21),e(495,"EventEmitter"),t()(),n(496,"td",22),e(497,"-"),t(),n(498,"td",23)(499,"em")(500,"strong"),e(501,"(opcional)"),t()(),n(502,"p"),e(503,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),n(504,"p"),e(505,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),n(506,"tr",16)(507,"td",17)(508,"div",24)(509,"span",25),e(510," p-columns"),i(511,"br"),t()()(),n(512,"td",20)(513,"code",29),e(514,"Array<PoLookupColumn>"),t()(),n(515,"td",22),e(516,"-"),t(),n(517,"td",23)(518,"em")(519,"strong"),e(520,"(opcional)"),t()(),n(521,"p"),e(522,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),t()()(),n(523,"tr",16)(524,"td",17)(525,"div",24)(526,"span",25),e(527," p-disabled"),i(528,"br"),t()()(),n(529,"td",20)(530,"code",28),e(531,"boolean"),t()(),n(532,"td",22)(533,"p"),e(534,"false"),t()(),n(535,"td",23)(536,"em")(537,"strong"),e(538,"(opcional)"),t()(),n(539,"p"),e(540,"Indica que o campo ser\xE1 desabilitado."),t()()(),n(541,"tr",16)(542,"td",17)(543,"div",24)(544,"span",25),e(545," p-error-limit"),i(546,"br"),t()()(),n(547,"td",20)(548,"code",28),e(549,"boolean"),t()(),n(550,"td",22)(551,"p")(552,"code"),e(553,"false"),t()()(),n(554,"td",23)(555,"em")(556,"strong"),e(557,"(opcional)"),t()(),n(558,"p"),e(559,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(560,"blockquote")(561,"p"),e(562,"Caso essa propriedade seja definida como "),n(563,"code"),e(564,"true"),t(),e(565,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(566,"tr",16)(567,"td",17)(568,"div",24)(569,"span",25),e(570," p-field-error-message"),i(571,"br"),t()()(),n(572,"td",20)(573,"code",26),e(574,"string"),t()(),n(575,"td",22),e(576,"-"),t(),n(577,"td",23)(578,"em")(579,"strong"),e(580,"(opcional)"),t()(),n(581,"p"),e(582,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),n(583,"blockquote")(584,"p"),e(585,"Necess\xE1rio que a propriedade "),n(586,"code"),e(587,"p-required"),t(),e(588," esteja habilitada."),t()()()(),n(589,"tr",16)(590,"td",17)(591,"div",24)(592,"span",25),e(593," p-field-format"),i(594,"br"),t()()(),n(595,"td",20)(596,"code",30),e(597,"((value) => string) "),t(),n(598,"code",31),e(599," Array<string>"),t()(),n(600,"td",22),e(601,"-"),t(),n(602,"td",23)(603,"em")(604,"strong"),e(605,"(opcional)"),t()(),n(606,"p"),e(607,"Formato de exibi\xE7\xE3o do campo."),t(),n(608,"p"),e(609,"Recebe uma fun\xE7\xE3o que deve retornar uma "),n(610,"em"),e(611,"string"),t(),e(612," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),n(613,"pre")(614,"code"),e(615,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),t()(),n(616,"blockquote")(617,"p"),e(618,"Esta propriedade sobrep\xF5e o valor da propriedade "),n(619,"code"),e(620,"p-field-label"),t(),e(621," na descri\xE7\xE3o do campo."),t()(),n(622,"p"),e(623,"Pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo, Por exemplo:"),t(),n(624,"pre")(625,"code"),e(626,`<po-lookup
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
Apresenta\xE7\xE3o no campo: 123 - Goku
`),t()(),n(627,"blockquote")(628,"p"),e(629,"Ser\xE1 utilizado "),n(630,"code"),e(631,"-"),t(),e(632," como separador."),t()()()(),n(633,"tr",16)(634,"td",17)(635,"div",24)(636,"span",25),e(637," p-field-label"),i(638,"br"),t()()(),n(639,"td",20)(640,"code",26),e(641,"string"),t()(),n(642,"td",22),e(643,"-"),t(),n(644,"td",23)(645,"p"),e(646,"Indica a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e como filtro dentro da janela."),t()()(),n(647,"tr",16)(648,"td",17)(649,"div",24)(650,"span",25),e(651," p-field-value"),i(652,"br"),t()()(),n(653,"td",20)(654,"code",26),e(655,"string"),t()(),n(656,"td",22),e(657,"-"),t(),n(658,"td",23)(659,"p"),e(660,"Indica a coluna que ser\xE1 utilizada como valor do campo."),t(),n(661,"blockquote")(662,"p"),e(663,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),n(664,"tr",16)(665,"td",17)(666,"div",24)(667,"span",25),e(668," p-filter-params"),i(669,"br"),t()()(),n(670,"td",20)(671,"code",32),e(672,"any"),t()(),n(673,"td",22),e(674,"-"),t(),n(675,"td",23)(676,"em")(677,"strong"),e(678,"(opcional)"),t()(),n(679,"p"),e(680,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),n(681,"code"),e(682,"PoLookupFilter"),t(),e(683,"."),t()()(),n(684,"tr",16)(685,"td",17)(686,"div",24)(687,"span",25),e(688," p-filter-service"),i(689,"br"),t()()(),n(690,"td",20)(691,"code",26),e(692,"string "),t(),n(693,"code",33),e(694," PoLookupFilter"),t()(),n(695,"td",22),e(696,"-"),t(),n(697,"td",23)(698,"p"),e(699,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),n(700,"code"),e(701,"PoLookupFilter"),t(),e(702," ou uma URL."),t(),n(703,"p"),e(704,"Quando utilizada uma URL de um servi\xE7o, ser\xE1 concatenada nesta URL o valor que deseja-se filtrar, por exemplo:"),t(),n(705,"pre")(706,"code"),e(707,`url + ?page=1&pageSize=20&filter=Peter
`),t()(),n(708,"p"),e(709,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),n(710,"code"),e(711,"order"),t(),e(712,", por exemplo:"),t(),n(713,"ul")(714,"li")(715,"p"),e(716,"Coluna decrescente:"),t(),n(717,"pre")(718,"code"),e(719,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),t()()(),n(720,"li")(721,"p"),e(722,"Coluna ascendente:"),t(),n(723,"pre")(724,"code"),e(725,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),t()()()(),n(726,"p"),e(727,"Se for definido a propriedade "),n(728,"code"),e(729,"p-filter-params"),t(),e(730,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),n(731,"code"),e(732,"{ age: 23 }"),t(),e(733," a URL ficaria:"),t(),n(734,"pre")(735,"code"),e(736,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),t()(),n(737,"p"),e(738,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),t(),n(739,"pre")(740,"code"),e(741,`model = 1234;

GET url/1234
`),t()(),n(742,"p"),e(743,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),t(),n(744,"pre")(745,"code"),e(746,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),t()(),n(747,"blockquote")(748,"p"),e(749,"Esta URL deve retornar e receber os dados no padr\xE3o de "),n(750,"a",7),e(751,"API do PO UI"),t(),e(752,` e utiliza os valores
definidos nas propriedades `),n(753,"code"),e(754,"p-field-label"),t(),e(755," e "),n(756,"code"),e(757,"p-field-value"),t(),e(758," para a constru\xE7\xE3o do "),n(759,"code"),e(760,"po-lookup"),t(),e(761,"."),t()(),n(762,"p"),e(763,"Caso o usu\xE1rio digite um valor e pressione a tecla "),n(764,"em"),e(765,"TAB"),t(),e(766,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),n(767,"a",34),e(768,"encodeURIComponent"),t(),e(769,`
e concatenado na URL da seguinte forma:`),t(),n(770,"pre")(771,"code"),e(772,`url/valor%20que%20se%20deseja%20filtrar
`),t()(),n(773,"blockquote")(774,"p"),e(775,"Quando informado um servi\xE7o que implemente a interface "),n(776,"code"),e(777,"PoLookupFilter"),t(),e(778," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),t()()()(),n(779,"tr",16)(780,"td",17)(781,"div",24)(782,"span",25),e(783," p-help"),i(784,"br"),t()()(),n(785,"td",20)(786,"code",26),e(787,"string"),t()(),n(788,"td",22),e(789,"-"),t(),n(790,"td",23)(791,"em")(792,"strong"),e(793,"(opcional)"),t()(),n(794,"p"),e(795,"Texto de apoio do campo."),t()()(),n(796,"tr",16)(797,"td",17)(798,"div",24)(799,"span",25),e(800," p-hide-columns-manager"),i(801,"br"),t()()(),n(802,"td",20)(803,"code",28),e(804,"boolean"),t()(),n(805,"td",22)(806,"p")(807,"code"),e(808,"false"),t()()(),n(809,"td",23)(810,"em")(811,"strong"),e(812,"(opcional)"),t()(),n(813,"p"),e(814,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),t()()(),n(815,"tr",16)(816,"td",17)(817,"div",24)(818,"span",25),e(819," p-infinite-scroll"),i(820,"br"),t()()(),n(821,"td",20)(822,"code",28),e(823,"boolean"),t()(),n(824,"td",22)(825,"p")(826,"code"),e(827,"false"),t()()(),n(828,"td",23)(829,"em")(830,"strong"),e(831,"(opcional)"),t()(),n(832,"p"),e(833,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),t()()(),n(834,"tr",16)(835,"td",17)(836,"div",18)(837,"span",19),e(838," (p-keydown)"),i(839,"br"),t()()(),n(840,"td",20)(841,"code",21),e(842,"EventEmitter"),t()(),n(843,"td",22),e(844,"-"),t(),n(845,"td",23)(846,"em")(847,"strong"),e(848,"(opcional)"),t()(),n(849,"p"),e(850,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(851,"code"),e(852,"KeyboardEvent"),t(),e(853," com informa\xE7\xF5es sobre a tecla."),t()()(),n(854,"tr",16)(855,"td",17)(856,"div",24)(857,"span",25),e(858," p-label"),i(859,"br"),t()()(),n(860,"td",20)(861,"code",26),e(862,"string"),t()(),n(863,"td",22),e(864,"-"),t(),n(865,"td",23)(866,"em")(867,"strong"),e(868,"(opcional)"),t()(),n(869,"p"),e(870,"Label do campo."),t(),n(871,"blockquote")(872,"p"),e(873,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),n(874,"code"),e(875,"modalTitle"),t(),e(876," na propriedade "),n(877,"code"),e(878,"p-literals"),t(),e(879,"."),t()()()(),n(880,"tr",16)(881,"td",17)(882,"div",24)(883,"span",25),e(884," p-literals"),i(885,"br"),t()()(),n(886,"td",20)(887,"code",35),e(888,"PoLookupLiterals"),t()(),n(889,"td",22),e(890,"-"),t(),n(891,"td",23)(892,"p"),e(893,"Objeto com as literais usadas no "),n(894,"code"),e(895,"po-lookup"),t(),e(896,"."),t(),n(897,"p"),e(898,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),n(899,"pre")(900,"code"),e(901,`const customLiterals: PoLookupLiterals = {
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
};
`),t()(),n(902,"p"),e(903,"Ou passando apenas as literais que deseja customizar:"),t(),n(904,"pre")(905,"code"),e(906,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),t()(),n(907,"p"),e(908,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),n(909,"pre")(910,"code"),e(911,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),t()(),n(912,"blockquote")(913,"p"),e(914,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),n(915,"a",36)(916,"code"),e(917,"PoI18nService"),t()(),e(918," ou do browser."),t()()()(),n(919,"tr",16)(920,"td",17)(921,"div",24)(922,"span",25),e(923," p-multiple"),i(924,"br"),t()()(),n(925,"td",20)(926,"code",28),e(927,"boolean"),t()(),n(928,"td",22)(929,"p")(930,"code"),e(931,"false"),t()()(),n(932,"td",23)(933,"em")(934,"strong"),e(935,"(opcional)"),t()(),n(936,"p"),e(937,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),n(938,"blockquote")(939,"p"),e(940,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),n(941,"code"),e(942,"[ 12345, 67890 ]"),t()()()()(),n(943,"tr",16)(944,"td",17)(945,"div",24)(946,"span",25),e(947," name"),i(948,"br"),t()()(),n(949,"td",20)(950,"code",26),e(951,"string"),t()(),n(952,"td",22),e(953,"-"),t(),n(954,"td",23)(955,"p"),e(956,"Nome e Id do componente."),t()()(),n(957,"tr",16)(958,"td",17)(959,"div",24)(960,"span",25),e(961," p-no-autocomplete"),i(962,"br"),t()()(),n(963,"td",20)(964,"code",28),e(965,"boolean"),t()(),n(966,"td",22)(967,"p")(968,"code"),e(969,"false"),t()()(),n(970,"td",23)(971,"em")(972,"strong"),e(973,"(opcional)"),t()(),n(974,"p"),e(975,"Define a propriedade nativa "),n(976,"code"),e(977,"autocomplete"),t(),e(978," do campo como "),n(979,"code"),e(980,"off"),t(),e(981,"."),t()()(),n(982,"tr",16)(983,"td",17)(984,"div",18)(985,"span",19),e(986," (p-error)"),i(987,"br"),t()()(),n(988,"td",20)(989,"code",21),e(990,"EventEmitter"),t()(),n(991,"td",22),e(992,"-"),t(),n(993,"td",23)(994,"p"),e(995,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),n(996,"tr",16)(997,"td",17)(998,"div",24)(999,"span",25),e(1e3," p-optional"),i(1001,"br"),t()()(),n(1002,"td",20)(1003,"code",28),e(1004,"boolean"),t()(),n(1005,"td",22)(1006,"p")(1007,"code"),e(1008,"false"),t()()(),n(1009,"td",23)(1010,"em")(1011,"strong"),e(1012,"(opcional)"),t()(),n(1013,"p"),e(1014,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(1015,"blockquote")(1016,"p"),e(1017,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1018,"ul")(1019,"li"),e(1020,"O campo conter "),n(1021,"code"),e(1022,"p-required"),t(),e(1023,";"),t(),n(1024,"li"),e(1025,"N\xE3o possuir "),n(1026,"code"),e(1027,"p-help"),t(),e(1028," e/ou "),n(1029,"code"),e(1030,"p-label"),t(),e(1031,"."),t()()()(),n(1032,"tr",16)(1033,"td",17)(1034,"div",24)(1035,"span",25),e(1036," p-placeholder"),i(1037,"br"),t()()(),n(1038,"td",20)(1039,"code",26),e(1040,"string"),t()(),n(1041,"td",22),e(1042,"-"),t(),n(1043,"td",23)(1044,"p"),e(1045,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(1046,"tr",16)(1047,"td",17)(1048,"div",24)(1049,"span",25),e(1050," p-required"),i(1051,"br"),t()()(),n(1052,"td",20)(1053,"code",28),e(1054,"boolean"),t()(),n(1055,"td",22)(1056,"p")(1057,"code"),e(1058,"false"),t()()(),n(1059,"td",23)(1060,"em")(1061,"strong"),e(1062,"(opcional)"),t()(),n(1063,"p"),e(1064,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1065,"blockquote")(1066,"p"),e(1067,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1068,"code"),e(1069,"(p-disabled)"),t(),e(1070,"."),t()()()(),n(1071,"tr",16)(1072,"td",17)(1073,"div",18)(1074,"span",19),e(1075," (p-selected)"),i(1076,"br"),t()()(),n(1077,"td",20)(1078,"code",21),e(1079,"EventEmitter"),t()(),n(1080,"td",22),e(1081,"-"),t(),n(1082,"td",23)(1083,"em")(1084,"strong"),e(1085,"(opcional)"),t()(),n(1086,"p"),e(1087,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),t()()(),n(1088,"tr",16)(1089,"td",17)(1090,"div",24)(1091,"span",25),e(1092," p-show-required"),i(1093,"br"),t()()(),n(1094,"td",20)(1095,"code",28),e(1096,"boolean"),t()(),n(1097,"td",22),e(1098,"-"),t(),n(1099,"td",23)(1100,"p"),e(1101,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),t(),n(1102,"blockquote")(1103,"p"),e(1104,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1105,"ul")(1106,"li"),e(1107,"N\xE3o possuir "),n(1108,"code"),e(1109,"p-help"),t(),e(1110," e/ou "),n(1111,"code"),e(1112,"p-label"),t(),e(1113,"."),t()()()(),n(1114,"tr",16)(1115,"td",17)(1116,"div",24)(1117,"span",25),e(1118," p-size"),i(1119,"br"),t()()(),n(1120,"td",20)(1121,"code",26),e(1122,"string"),t()(),n(1123,"td",22)(1124,"p")(1125,"code"),e(1126,"medium"),t()()(),n(1127,"td",23)(1128,"em")(1129,"strong"),e(1130,"(opcional)"),t()(),n(1131,"p"),e(1132,"Define o tamanho do componente:"),t(),n(1133,"ul")(1134,"li")(1135,"code"),e(1136,"small"),t(),e(1137,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1138,"li")(1139,"code"),e(1140,"medium"),t(),e(1141,": altura do input como 44px."),t()(),n(1142,"blockquote")(1143,"p"),e(1144,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1145,"code"),e(1146,"medium"),t(),e(1147,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1148,"a",37),e(1149,"po-theme"),t(),e(1150,"."),t()()()(),n(1151,"tr",16)(1152,"td",17)(1153,"div",24)(1154,"span",25),e(1155," p-spacing"),i(1156,"br"),t()()(),n(1157,"td",20)(1158,"code",26),e(1159,"string"),t()(),n(1160,"td",22)(1161,"p")(1162,"code"),e(1163,"medium"),t()()(),n(1164,"td",23)(1165,"em")(1166,"strong"),e(1167,"(opcional)"),t()(),n(1168,"p"),e(1169,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),n(1170,"strong"),e(1171,"PoTableColumnSpacing"),t(),e(1172,"."),t(),n(1173,"blockquote")(1174,"p"),e(1175,"Em n\xEDvel de acessibilidade "),n(1176,"strong"),e(1177,"AA"),t(),e(1178,", caso o valor de "),n(1179,"code"),e(1180,"p-spacing"),t(),e(1181," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),n(1182,"code"),e(1183,"extraSmall"),t(),e(1184,`
nos seguintes cen\xE1rios:`),t(),n(1185,"ul")(1186,"li"),e(1187,"Quando o valor de "),n(1188,"code"),e(1189,"p-size"),t(),e(1190," for "),n(1191,"code"),e(1192,"small"),t(),e(1193,";"),t(),n(1194,"li"),e(1195,"Quando o valor padr\xE3o dos componentes for configurado como "),n(1196,"code"),e(1197,"small"),t(),e(1198,` no
`),n(1199,"a",37),e(1200,"servi\xE7o de tema"),t(),e(1201,"."),t()()()()(),n(1202,"tr",16)(1203,"td",17)(1204,"div",24)(1205,"span",25),e(1206," p-text-wrap"),i(1207,"br"),t()()(),n(1208,"td",20)(1209,"code",28),e(1210,"boolean"),t()(),n(1211,"td",22)(1212,"p")(1213,"code"),e(1214,"false"),t()()(),n(1215,"td",23)(1216,"em")(1217,"strong"),e(1218,"(opcional)"),t()(),n(1219,"p"),e(1220,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t(),n(1221,"p"),e(1222,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),t(),n(1223,"blockquote")(1224,"p"),e(1225,"Incompat\xEDvel com "),n(1226,"code"),e(1227,"virtual-scroll"),t(),e(1228,", que requer altura fixa nas linhas."),t()()()(),n(1229,"tr",16)(1230,"td",17)(1231,"div",24)(1232,"span",25),e(1233," p-virtual-scroll"),i(1234,"br"),t()()(),n(1235,"td",20)(1236,"code",28),e(1237,"boolean"),t()(),n(1238,"td",22)(1239,"p")(1240,"code"),e(1241,"true"),t()()(),n(1242,"td",23)(1243,"em")(1244,"strong"),e(1245,"(opcional)"),t()(),n(1246,"p"),e(1247,"Habilita o "),n(1248,"code"),e(1249,"virtual-scroll"),t(),e(1250,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),n(1251,"code"),e(1252,"virtual-scroll"),t(),e(1253," ser\xE1 ativado automaticamente."),t(),n(1254,"blockquote")(1255,"p"),e(1256,"Incompat\xEDvel com "),n(1257,"code"),e(1258,"p-text-wrap"),t(),e(1259," e "),n(1260,"code"),e(1261,"master-detail"),t(),e(1262,", pois o "),n(1263,"code"),e(1264,"virtual-scroll"),t(),e(1265," exige altura fixa nas linhas."),t()()()()(),n(1266,"h3",12),e(1267,"M\xE9todos"),t(),n(1268,"table",38)(1269,"tr",16)(1270,"th",39)(1271,"div",24)(1272,"h4")(1273,"span",25),e(1274," focus "),t()()()()(),n(1275,"tr",23)(1276,"td",23)(1277,"p"),e(1278,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1279,"p"),e(1280,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1281,"pre")(1282,"code"),e(1283,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),t()()()()(),i(1284,"br"),n(1285,"table",38)(1286,"tr",16)(1287,"th",39)(1288,"div",24)(1289,"h4")(1290,"span",25),e(1291," showAdditionalHelp "),t()()()()(),n(1292,"tr",23)(1293,"td",23)(1294,"p"),e(1295,"M\xE9todo que exibe "),n(1296,"code"),e(1297,"p-additionalHelpTooltip"),t(),e(1298," ou executa a a\xE7\xE3o definida em "),n(1299,"code"),e(1300,"p-additionalHelp"),t(),e(1301,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1302,"code"),e(1303,"p-keydown"),t(),e(1304,"."),t(),n(1305,"pre")(1306,"code"),e(1307,`<po-lookup
 #lookup
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),t()(),n(1308,"pre")(1309,"code"),e(1310,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),i(1311,"br"),n(1312,"h3"),e(1313,"Interfaces"),t(),n(1314,"h4",40)(1315,"code",5),e(1316,"PoLookupAdvancedFilter"),t()(),n(1317,"div",2)(1318,"p"),e(1319," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),t()(),n(1320,"h4",12),e(1321,"Propriedades"),t(),n(1322,"table",13)(1323,"tr",14)(1324,"th",15),e(1325,"Nome"),t(),n(1326,"th",15),e(1327,"Tipo"),t(),n(1328,"th",15),e(1329,"Descri\xE7\xE3o"),t()(),n(1330,"tr",16)(1331,"td",17)(1332,"div",24)(1333,"span",25),e(1334," additionalHelp"),i(1335,"br"),t()()(),n(1336,"td",20)(1337,"code",41),e(1338,"Function"),t()(),n(1339,"td",23)(1340,"em")(1341,"strong"),e(1342,"(opcional)"),t()(),n(1343,"p"),e(1344,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(1345,"code"),e(1346,"p-help"),t(),e(1347,"."),t()()(),n(1348,"tr",16)(1349,"td",17)(1350,"div",24)(1351,"span",25),e(1352," additionalHelpTooltip"),i(1353,"br"),t()()(),n(1354,"td",20)(1355,"code",26),e(1356,"string"),t()(),n(1357,"td",23)(1358,"em")(1359,"strong"),e(1360,"(opcional)"),t()(),n(1361,"p"),e(1362,"Exibe um \xEDcone de ajuda adicional ao "),n(1363,"code"),e(1364,"p-help"),t(),e(1365,`, com o texto desta propriedade no tooltip.
Se o evento `),n(1366,"code"),e(1367,"p-additional-help"),t(),e(1368,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(1369,"strong"),e(1370,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()()()(),n(1371,"tr",16)(1372,"td",17)(1373,"div",24)(1374,"span",25),e(1375," advancedFilters"),i(1376,"br"),t()()(),n(1377,"td",20)(1378,"code",27),e(1379,"Array<PoLookupAdvancedFilter>"),t()(),n(1380,"td",23)(1381,"em")(1382,"strong"),e(1383,"(opcional)"),t()(),n(1384,"p"),e(1385,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),n(1386,"blockquote")(1387,"p"),e(1388,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),n(1389,"p"),e(1390,"Exemplo de URL com busca avan\xE7ada:"),t(),n(1391,"p")(1392,"code"),e(1393,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),n(1394,"p"),e(1395,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),n(1396,"p")(1397,"code"),e(1398,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),n(1399,"tr",16)(1400,"td",17)(1401,"div",24)(1402,"span",25),e(1403," appendBox"),i(1404,"br"),t()()(),n(1405,"td",20)(1406,"code",28),e(1407,"boolean"),t()(),n(1408,"td",23)(1409,"em")(1410,"strong"),e(1411,"(opcional)"),t()(),n(1412,"p"),e(1413,"Define que o "),n(1414,"code"),e(1415,"listbox"),t(),e(1416," e/ou tooltip ("),n(1417,"code"),e(1418,"p-additional-help-tooltip"),t(),e(1419," e/ou "),n(1420,"code"),e(1421,"p-error-limit"),t(),e(1422,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),n(1423,"blockquote")(1424,"p"),e(1425,"Quando utilizado com "),n(1426,"code"),e(1427,"p-additional-help-tooltip"),t(),e(1428,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(1429,"tr",16)(1430,"td",17)(1431,"div",24)(1432,"span",25),e(1433," autoHeight"),i(1434,"br"),t()()(),n(1435,"td",20)(1436,"code",28),e(1437,"boolean"),t()(),n(1438,"td",23)(1439,"em")(1440,"strong"),e(1441,"(opcional)"),t()(),n(1442,"p"),e(1443,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),n(1444,"p")(1445,"strong"),e(1446,"Componentes compat\xEDveis:"),t(),n(1447,"code"),e(1448,"po-multiselect"),t(),e(1449,", "),n(1450,"code"),e(1451,"po-lookup"),t(),e(1452,"."),t()()(),n(1453,"tr",16)(1454,"td",17)(1455,"div",24)(1456,"span",25),e(1457," autoUpload"),i(1458,"br"),t()()(),n(1459,"td",20)(1460,"code",28),e(1461,"boolean"),t()(),n(1462,"td",23)(1463,"em")(1464,"strong"),e(1465,"(opcional)"),t()(),n(1466,"p"),e(1467,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),n(1468,"p")(1469,"strong"),e(1470,"Componente compat\xEDvel"),t(),e(1471,": "),n(1472,"code"),e(1473,"po-upload"),t()()()(),n(1474,"tr",16)(1475,"td",17)(1476,"div",24)(1477,"span",25),e(1478," booleanFalse"),i(1479,"br"),t()()(),n(1480,"td",20)(1481,"code",26),e(1482,"string"),t()(),n(1483,"td",23)(1484,"em")(1485,"strong"),e(1486,"(opcional)"),t()(),n(1487,"p"),e(1488,"Texto exibido quando o valor do componente for "),n(1489,"em"),e(1490,"false"),t(),e(1491,"."),t()()(),n(1492,"tr",16)(1493,"td",17)(1494,"div",24)(1495,"span",25),e(1496," booleanTrue"),i(1497,"br"),t()()(),n(1498,"td",20)(1499,"code",26),e(1500,"string"),t()(),n(1501,"td",23)(1502,"em")(1503,"strong"),e(1504,"(opcional)"),t()(),n(1505,"p"),e(1506,"Texto exibido quando o valor do componente for "),n(1507,"em"),e(1508,"true"),t(),e(1509,"."),t()()(),n(1510,"tr",16)(1511,"td",17)(1512,"div",24)(1513,"span",25),e(1514," changeOnEnter"),i(1515,"br"),t()()(),n(1516,"td",20)(1517,"code",28),e(1518,"boolean"),t()(),n(1519,"td",23)(1520,"em")(1521,"strong"),e(1522,"(opcional)"),t()(),n(1523,"p"),e(1524,"Indica que o evento "),n(1525,"code"),e(1526,"p-change"),t(),e(1527,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),n(1528,"code"),e(1529,"po-combo"),t(),e(1530,"."),t()()(),n(1531,"tr",16)(1532,"td",17)(1533,"div",24)(1534,"span",25),e(1535," changeVisibleColumns"),i(1536,"br"),t()()(),n(1537,"td",20)(1538,"code",41),e(1539,"Function"),t()(),n(1540,"td",23)(1541,"em")(1542,"strong"),e(1543,"(opcional)"),t()(),n(1544,"p"),e(1545,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),n(1546,"p"),e(1547,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(1548,"p")(1549,"strong"),e(1550,"Componentes compat\xEDveis"),t(),e(1551,": "),n(1552,"code"),e(1553,"po-lookup"),t()()()(),n(1554,"tr",16)(1555,"td",17)(1556,"div",24)(1557,"span",25),e(1558," clean"),i(1559,"br"),t()()(),n(1560,"td",20)(1561,"code",28),e(1562,"boolean"),t()(),n(1563,"td",23)(1564,"em")(1565,"strong"),e(1566,"(opcional)"),t()(),n(1567,"p"),e(1568,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),n(1569,"p")(1570,"strong"),e(1571,"Componentes compat\xEDveis:"),t(),n(1572,"code"),e(1573,"po-datepicker"),t(),e(1574,", "),n(1575,"code"),e(1576,"po-datepicker-range"),t(),e(1577,", "),n(1578,"code"),e(1579,"po-input"),t(),e(1580,", "),n(1581,"code"),e(1582,"po-number"),t(),e(1583,", "),n(1584,"code"),e(1585,"po-decimal"),t(),e(1586,", "),n(1587,"code"),e(1588,"po-combo"),t(),e(1589,", "),n(1590,"code"),e(1591,"po-lookup"),t(),e(1592,", "),n(1593,"code"),e(1594,"po-password"),t()()()(),n(1595,"tr",16)(1596,"td",17)(1597,"div",24)(1598,"span",25),e(1599," columnRestoreManager"),i(1600,"br"),t()()(),n(1601,"td",20)(1602,"code",41),e(1603,"Function"),t()(),n(1604,"td",23)(1605,"em")(1606,"strong"),e(1607,"(opcional)"),t()(),n(1608,"p"),e(1609,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),n(1610,"p"),e(1611,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(1612,"p")(1613,"strong"),e(1614,"Componentes compat\xEDveis"),t(),e(1615,": "),n(1616,"code"),e(1617,"po-lookup"),t()()()(),n(1618,"tr",16)(1619,"td",17)(1620,"div",24)(1621,"span",25),e(1622," columns"),i(1623,"br"),t()()(),n(1624,"td",20)(1625,"code",29),e(1626,"Array<PoLookupColumn> "),t(),n(1627,"code",42),e(1628," number"),t()(),n(1629,"td",23)(1630,"em")(1631,"strong"),e(1632,"(opcional)"),t()(),n(1633,"p"),e(1634,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),n(1635,"code"),e(1636,"searchService"),t(),e(1637,`,
essa propriedade deve receber um array de objetos que implementam a interface `),n(1638,"a",43)(1639,"code"),e(1640,"PoLookupColumn"),t()(),e(1641,"."),t(),n(1642,"blockquote")(1643,"p"),e(1644,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),n(1645,"em"),e(1646,"label"),t(),e(1647," e "),n(1648,"em"),e(1649,"value"),t(),e(1650,` para valores
de tela e do model respectivamente.`),t()(),n(1651,"p")(1652,"strong"),e(1653,"Componentes compat\xEDveis:"),t(),n(1654,"code"),e(1655,"po-radio-group"),t(),e(1656,", "),n(1657,"code"),e(1658,"po-lookup"),t(),e(1659,", "),n(1660,"code"),e(1661,"po-checkbox-group"),t(),e(1662,"."),t()()(),n(1663,"tr",16)(1664,"td",17)(1665,"div",24)(1666,"span",25),e(1667," container"),i(1668,"br"),t()()(),n(1669,"td",20)(1670,"code",26),e(1671,"string"),t()(),n(1672,"td",23)(1673,"em")(1674,"strong"),e(1675,"(opcional)"),t()(),n(1676,"p"),e(1677,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),n(1678,"p"),e(1679,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),n(1680,"tr",16)(1681,"td",17)(1682,"div",24)(1683,"span",25),e(1684," customAction"),i(1685,"br"),t()()(),n(1686,"td",20)(1687,"code",44),e(1688,"PoProgressAction"),t()(),n(1689,"td",23)(1690,"em")(1691,"strong"),e(1692,"(opcional)"),t()(),n(1693,"p"),e(1694,"Define uma a\xE7\xE3o personalizada no componente "),n(1695,"code"),e(1696,"po-upload"),t(),e(1697,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),n(1698,"p")(1699,"strong"),e(1700,"Componente compat\xEDvel"),t(),e(1701,": "),n(1702,"code"),e(1703,"po-upload"),t(),e(1704,","),t(),n(1705,"p")(1706,"strong"),e(1707,"Exemplo de configura\xE7\xE3o"),t(),e(1708,":"),t(),n(1709,"pre")(1710,"code",45),e(1711,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),t()()()(),n(1712,"tr",16)(1713,"td",17)(1714,"div",24)(1715,"span",25),e(1716," customActionClick"),i(1717,"br"),t()()(),n(1718,"td",20)(1719,"code",46),e(1720,"(file: PoUploadFile) => void"),t()(),n(1721,"td",23)(1722,"em")(1723,"strong"),e(1724,"(opcional)"),t()(),n(1725,"p"),e(1726,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),n(1727,"code"),e(1728,"p-custom-action"),t(),e(1729,"."),t(),n(1730,"p")(1731,"strong"),e(1732,"Componente compat\xEDvel"),t(),e(1733,": "),n(1734,"code"),e(1735,"po-upload"),t(),e(1736,","),t(),n(1737,"p"),e(1738,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),n(1739,"p")(1740,"strong"),e(1741,"Par\xE2metro do evento"),t(),e(1742,":"),t(),n(1743,"ul")(1744,"li")(1745,"code"),e(1746,"file"),t(),e(1747,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),n(1748,"code"),e(1749,"PoUploadFile"),t(),e(1750," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),n(1751,"p")(1752,"strong"),e(1753,"Exemplo de uso"),t(),e(1754,":"),t(),n(1755,"pre")(1756,"code",45),e(1757,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),t()()()(),n(1758,"tr",16)(1759,"td",17)(1760,"div",24)(1761,"span",25),e(1762," debounceTime"),i(1763,"br"),t()()(),n(1764,"td",20)(1765,"code",42),e(1766,"number"),t()(),n(1767,"td",23)(1768,"em")(1769,"strong"),e(1770,"(opcional)"),t()(),n(1771,"p"),e(1772,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),n(1773,"code"),e(1774,"p-filter-service"),t(),e(1775,")."),t(),n(1776,"p")(1777,"strong"),e(1778,"Componentes compat\xEDveis:"),t(),n(1779,"code"),e(1780,"po-combo"),t(),e(1781,", "),n(1782,"code"),e(1783,"po-multiselect"),t(),e(1784,"."),t()()(),n(1785,"tr",16)(1786,"td",17)(1787,"div",24)(1788,"span",25),e(1789," decimalsLength"),i(1790,"br"),t()()(),n(1791,"td",20)(1792,"code",42),e(1793,"number"),t()(),n(1794,"td",23)(1795,"em")(1796,"strong"),e(1797,"(opcional)"),t()(),n(1798,"p"),e(1799,"Quantidade m\xE1xima de casas decimais."),t(),n(1800,"blockquote")(1801,"p"),e(1802,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(1803,"code"),e(1804,"type"),t(),e(1805," for "),n(1806,"em"),e(1807,"currency"),t(),e(1808," ou "),n(1809,"em"),e(1810,"decimal"),t(),e(1811,"."),t()()()(),n(1812,"tr",16)(1813,"td",17)(1814,"div",24)(1815,"span",25),e(1816," directory"),i(1817,"br"),t()()(),n(1818,"td",20)(1819,"code",28),e(1820,"boolean"),t()(),n(1821,"td",23)(1822,"em")(1823,"strong"),e(1824,"(opcional)"),t()(),n(1825,"p"),e(1826,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(1827,"blockquote")(1828,"p"),e(1829,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(1830,"blockquote")(1831,"p"),e(1832,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(1833,"strong"),e(1834,"Internet Explorer"),t(),e(1835,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),n(1836,"p")(1837,"strong"),e(1838,"Componente compat\xEDvel"),t(),e(1839,": "),n(1840,"code"),e(1841,"po-upload"),t()()()(),n(1842,"tr",16)(1843,"td",17)(1844,"div",24)(1845,"span",25),e(1846," disabled"),i(1847,"br"),t()()(),n(1848,"td",20)(1849,"code",28),e(1850,"boolean"),t()(),n(1851,"td",23)(1852,"em")(1853,"strong"),e(1854,"(opcional)"),t()(),n(1855,"p"),e(1856,"Desabilita o campo caso informar o valor "),n(1857,"em"),e(1858,"true"),t(),e(1859,"."),t()()(),n(1860,"tr",16)(1861,"td",17)(1862,"div",24)(1863,"span",25),e(1864," disabledInitFilter"),i(1865,"br"),t()()(),n(1866,"td",20)(1867,"code",28),e(1868,"boolean"),t()(),n(1869,"td",23)(1870,"em")(1871,"strong"),e(1872,"(opcional)"),t()(),n(1873,"p"),e(1874,"Desabilita o filtro inicial no servi\xE7o do "),n(1875,"code"),e(1876,"po-combo"),t(),e(1877,", que \xE9 executado no primeiro clique no campo."),t()()(),n(1878,"tr",16)(1879,"td",17)(1880,"div",24)(1881,"span",25),e(1882," disabledTabFilter"),i(1883,"br"),t()()(),n(1884,"td",20)(1885,"code",28),e(1886,"boolean"),t()(),n(1887,"td",23)(1888,"em")(1889,"strong"),e(1890,"(opcional)"),t()(),n(1891,"p"),e(1892,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),n(1893,"code"),e(1894,"po-combo"),t(),e(1895,"."),t()()(),n(1896,"tr",16)(1897,"td",17)(1898,"div",24)(1899,"span",25),e(1900," divider"),i(1901,"br"),t()()(),n(1902,"td",20)(1903,"code",26),e(1904,"string"),t()(),n(1905,"td",23)(1906,"em")(1907,"strong"),e(1908,"(opcional)"),t()(),n(1909,"p"),e(1910,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),n(1911,"tr",16)(1912,"td",17)(1913,"div",24)(1914,"span",25),e(1915," dragDrop"),i(1916,"br"),t()()(),n(1917,"td",20)(1918,"code",28),e(1919,"boolean"),t()(),n(1920,"td",23)(1921,"em")(1922,"strong"),e(1923,"(opcional)"),t()(),n(1924,"p"),e(1925,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(1926,"blockquote")(1927,"p"),e(1928,"Recomendamos utilizar apenas um "),n(1929,"code"),e(1930,"po-upload"),t(),e(1931," com esta funcionalidade por tela."),t()(),n(1932,"p")(1933,"strong"),e(1934,"Componente compat\xEDvel"),t(),e(1935,": "),n(1936,"code"),e(1937,"po-upload"),t()()()(),n(1938,"tr",16)(1939,"td",17)(1940,"div",24)(1941,"span",25),e(1942," dragDropHeight"),i(1943,"br"),t()()(),n(1944,"td",20)(1945,"code",42),e(1946,"number"),t()(),n(1947,"td",23)(1948,"em")(1949,"strong"),e(1950,"(opcional)"),t()(),n(1951,"p"),e(1952,"Define em "),n(1953,"em"),e(1954,"pixels"),t(),e(1955," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(1956,"code"),e(1957,"160px"),t(),e(1958,"."),t(),n(1959,"blockquote")(1960,"p"),e(1961,"Esta propriedade funciona somente se a propriedade "),n(1962,"code"),e(1963,"p-drag-drop"),t(),e(1964," estiver habilitada."),t()(),n(1965,"p")(1966,"strong"),e(1967,"Componente compat\xEDvel"),t(),e(1968,": "),n(1969,"code"),e(1970,"po-upload"),t()()()(),n(1971,"tr",16)(1972,"td",17)(1973,"div",24)(1974,"span",25),e(1975," errorAsyncFunction"),i(1976,"br"),t()()(),n(1977,"td",20)(1978,"code",47),e(1979,"(value) => Observable<boolean>"),t()(),n(1980,"td",23)(1981,"em")(1982,"strong"),e(1983,"(opcional)"),t()(),n(1984,"p"),e(1985,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1986,"code"),e(1987,"change"),t(),e(1988," ou "),n(1989,"code"),e(1990,"change-model"),t(),e(1991,", dependendo do valor da propriedade "),n(1992,"code"),e(1993,"triggerMode"),t(),e(1994,"."),t(),n(1995,"blockquote")(1996,"p"),e(1997,"Retorna "),n(1998,"code"),e(1999,"Observable com o valor true"),t(),e(2e3," para sinalizar o erro "),n(2001,"code"),e(2002,"false"),t(),e(2003," para indicar que n\xE3o h\xE1 erro."),t()(),n(2004,"p")(2005,"strong"),e(2006,"Componente compat\xEDvel"),t(),e(2007,": "),n(2008,"code"),e(2009,"po-datepicker"),t()()()(),n(2010,"tr",16)(2011,"td",17)(2012,"div",24)(2013,"span",25),e(2014," errorAsyncProperties"),i(2015,"br"),t()()(),n(2016,"td",20)(2017,"code",48),e(2018,"ErrorAsyncProperties"),t()(),n(2019,"td",23)(2020,"em")(2021,"strong"),e(2022,"(opcional)"),t()(),n(2023,"p"),e(2024,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),n(2025,"p")(2026,"strong"),e(2027,"Componentes compat\xEDveis:"),t(),n(2028,"code"),e(2029,"po-input"),t(),e(2030,", "),n(2031,"code"),e(2032,"po-number"),t(),e(2033,", "),n(2034,"code"),e(2035,"po-decimal"),t(),e(2036,", "),n(2037,"code"),e(2038,"po-password"),t(),e(2039,"."),t()()(),n(2040,"tr",16)(2041,"td",17)(2042,"div",24)(2043,"span",25),e(2044," errorLimit"),i(2045,"br"),t()()(),n(2046,"td",20)(2047,"code",28),e(2048,"boolean"),t()(),n(2049,"td",23)(2050,"em")(2051,"strong"),e(2052,"(opcional)"),t()(),n(2053,"p"),e(2054,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(2055,"blockquote")(2056,"p"),e(2057,"Caso essa propriedade seja definida como "),n(2058,"code"),e(2059,"true"),t(),e(2060,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),n(2061,"p")(2062,"strong"),e(2063,"Componentes compat\xEDveis:"),t(),n(2064,"code"),e(2065,"po-checkbox-group"),t(),e(2066,", "),n(2067,"code"),e(2068,"po-combo"),t(),e(2069,", "),n(2070,"code"),e(2071,"po-datepicker"),t(),e(2072,", "),n(2073,"code"),e(2074,"po-datepicker-range"),t(),e(2075,", "),n(2076,"code"),e(2077,"po-decimal"),t(),e(2078,", "),n(2079,"code"),e(2080,"po-input"),t(),e(2081,", "),n(2082,"code"),e(2083,"po-lookup"),t(),e(2084,", "),n(2085,"code"),e(2086,"po-multiselect"),t(),e(2087,", "),n(2088,"code"),e(2089,"po-number"),t(),e(2090,", "),n(2091,"code"),e(2092,"po-password"),t(),e(2093,", "),n(2094,"code"),e(2095,"po-radio-group"),t(),e(2096,", "),n(2097,"code"),e(2098,"po-select"),t(),e(2099,", "),n(2100,"code"),e(2101,"po-switch"),t(),e(2102,", "),n(2103,"code"),e(2104,"po-textarea"),t(),e(2105,"."),t()()(),n(2106,"tr",16)(2107,"td",17)(2108,"div",24)(2109,"span",25),e(2110," errorMessage"),i(2111,"br"),t()()(),n(2112,"td",20)(2113,"code",26),e(2114,"string"),t()(),n(2115,"td",23)(2116,"em")(2117,"strong"),e(2118,"(opcional)"),t()(),n(2119,"p"),e(2120,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),n(2121,"p"),e(2122,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),n(2123,"ul")(2124,"li"),e(2125,"pattern;"),t(),n(2126,"li"),e(2127,"minValue;"),t(),n(2128,"li"),e(2129,"maxValue;"),t(),n(2130,"li"),e(2131,"required;"),t()(),n(2132,"blockquote")(2133,"p"),e(2134,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),n(2135,"code"),e(2136,"po-datepicker"),t(),e(2137,", "),n(2138,"code"),e(2139,"po-input"),t(),e(2140,", "),n(2141,"code"),e(2142,"po-number"),t(),e(2143,", "),n(2144,"code"),e(2145,"po-decimal"),t(),e(2146,", "),n(2147,"code"),e(2148,"po-password"),t(),e(2149,`, \xE9 necess\xE1rio que a propriedade
`),n(2150,"code"),e(2151,"requiredFieldErrorMessage"),t(),e(2152," esteja como "),n(2153,"code"),e(2154,"true"),t(),e(2155,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),n(2156,"code"),e(2157,"po-datepicker-range"),t(),e(2158,", "),n(2159,"code"),e(2160,"po-select"),t(),e(2161,", "),n(2162,"code"),e(2163,"po-checkbox-group"),t(),e(2164,", "),n(2165,"code"),e(2166,"po-radio-group"),t(),e(2167,", "),n(2168,"code"),e(2169,"po-multiselect"),t(),e(2170,", "),n(2171,"code"),e(2172,"po-combo"),t(),e(2173,`,
`),n(2174,"code"),e(2175,"po-lookup"),t(),e(2176," e "),n(2177,"code"),e(2178,"po-textarea"),t(),e(2179," n\xE3o \xE9 necess\xE1rio passar a propriedade "),n(2180,"code"),e(2181,"requiredFieldErrorMessage"),t(),e(2182,"."),t()(),n(2183,"p")(2184,"strong"),e(2185,"Componentes compat\xEDveis:"),t(),n(2186,"code"),e(2187,"po-checkbox-group"),t(),e(2188,", "),n(2189,"code"),e(2190,"po-combo"),t(),e(2191,", "),n(2192,"code"),e(2193,"po-datepicker"),t(),e(2194,", "),n(2195,"code"),e(2196,"po-datepicker-range"),t(),e(2197,", "),n(2198,"code"),e(2199,"po-decimal"),t(),e(2200,", "),n(2201,"code"),e(2202,"po-input"),t(),e(2203,", "),n(2204,"code"),e(2205,"po-lookup"),t(),e(2206,", "),n(2207,"code"),e(2208,"po-multiselect"),t(),e(2209,", "),n(2210,"code"),e(2211,"po-number"),t(),e(2212,", "),n(2213,"code"),e(2214,"po-password"),t(),e(2215,", "),n(2216,"code"),e(2217,"po-radio-group"),t(),e(2218,", "),n(2219,"code"),e(2220,"po-select"),t(),e(2221,", "),n(2222,"code"),e(2223,"po-switch"),t(),e(2224,", "),n(2225,"code"),e(2226,"po-textarea"),t(),e(2227,"."),t()()(),n(2228,"tr",16)(2229,"td",17)(2230,"div",24)(2231,"span",25),e(2232," fieldLabel"),i(2233,"br"),t()()(),n(2234,"td",20)(2235,"code",26),e(2236,"string"),t()(),n(2237,"td",23)(2238,"em")(2239,"strong"),e(2240,"(opcional)"),t()(),n(2241,"p"),e(2242,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),n(2243,"p"),e(2244,"O valor padr\xE3o \xE9: "),n(2245,"code"),e(2246,"label"),t(),e(2247,"."),t(),n(2248,"blockquote")(2249,"p"),e(2250,"Esta propriedade pode ser utilizada em conjunto com: "),n(2251,"code"),e(2252,"options"),t(),e(2253,", "),n(2254,"code"),e(2255,"optionsService"),t(),e(2256," e "),n(2257,"code"),e(2258,"searchService"),t(),e(2259,"."),t()()()(),n(2260,"tr",16)(2261,"td",17)(2262,"div",24)(2263,"span",25),e(2264," fieldValue"),i(2265,"br"),t()()(),n(2266,"td",20)(2267,"code",26),e(2268,"string"),t()(),n(2269,"td",23)(2270,"em")(2271,"strong"),e(2272,"(opcional)"),t()(),n(2273,"p"),e(2274,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),n(2275,"p"),e(2276,"O valor padr\xE3o \xE9: "),n(2277,"code"),e(2278,"value"),t(),e(2279,"."),t(),n(2280,"blockquote")(2281,"p"),e(2282,"Esta propriedade pode ser utilizada em conjunto com: "),n(2283,"code"),e(2284,"options"),t(),e(2285,", "),n(2286,"code"),e(2287,"optionsService"),t(),e(2288," e "),n(2289,"code"),e(2290,"searchService"),t(),e(2291,"."),t()()()(),n(2292,"tr",16)(2293,"td",17)(2294,"div",24)(2295,"span",25),e(2296," filterMinlength"),i(2297,"br"),t()()(),n(2298,"td",20)(2299,"code",42),e(2300,"number"),t()(),n(2301,"td",23)(2302,"em")(2303,"strong"),e(2304,"(opcional)"),t()(),n(2305,"p"),e(2306,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),n(2307,"code"),e(2308,"po-combo"),t(),e(2309,"."),t()()(),n(2310,"tr",16)(2311,"td",17)(2312,"div",24)(2313,"span",25),e(2314," filterMode"),i(2315,"br"),t()()(),n(2316,"td",20)(2317,"code",49),e(2318,"PoMultiselectFilterMode"),t()(),n(2319,"td",23)(2320,"em")(2321,"strong"),e(2322,"(opcional)"),t()(),n(2323,"p"),e(2324,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),n(2325,"code"),e(2326,"startsWith"),t(),e(2327,", "),n(2328,"code"),e(2329,"contains"),t(),e(2330," ou "),n(2331,"code"),e(2332,"endsWith"),t(),e(2333,"."),t(),n(2334,"blockquote")(2335,"p"),e(2336,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),n(2337,"p")(2338,"strong"),e(2339,"Componentes compat\xEDveis:"),t(),n(2340,"code"),e(2341,"po-multiselect"),t(),e(2342,"."),t()()(),n(2343,"tr",16)(2344,"td",17)(2345,"div",24)(2346,"span",25),e(2347," forceBooleanComponentType"),i(2348,"br"),t()()(),n(2349,"td",20)(2350,"code",50),e(2351,"ForceBooleanComponentEnum"),t()(),n(2352,"td",23)(2353,"em")(2354,"strong"),e(2355,"(opcional)"),t()(),n(2356,"p"),e(2357,"Valores aceitos:"),t(),n(2358,"ul")(2359,"li"),e(2360,"ForceBooleanComponentEnum.switch"),t(),n(2361,"li"),e(2362,"ForceBooleanComponentEnum.checkbox"),t()()()(),n(2363,"tr",16)(2364,"td",17)(2365,"div",24)(2366,"span",25),e(2367," forceOptionsComponentType"),i(2368,"br"),t()()(),n(2369,"td",20)(2370,"code",51),e(2371,"ForceOptionComponentEnum"),t()(),n(2372,"td",23)(2373,"em")(2374,"strong"),e(2375,"(opcional)"),t()(),n(2376,"p"),e(2377,"pode ser utilizada em conjunto com a propriedade "),n(2378,"code"),e(2379,"options"),t(),e(2380," for\xE7ando o componente a renderizar um "),n(2381,"code"),e(2382,"po-select"),t(),e(2383," ou "),n(2384,"code"),e(2385,"po-radio-group"),t(),e(2386,"."),t(),n(2387,"p"),e(2388,"Valores aceitos:"),t(),n(2389,"ul")(2390,"li"),e(2391,"ForceOptionComponentEnum.radioGroup"),t(),n(2392,"li"),e(2393,"ForceOptionComponentEnum.select"),t()(),n(2394,"blockquote")(2395,"p"),e(2396,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),n(2397,"code"),e(2398,"optionsMulti"),t(),e(2399," e "),n(2400,"code"),e(2401,"optionsService"),t(),e(2402,"."),t()()()(),n(2403,"tr",16)(2404,"td",17)(2405,"div",24)(2406,"span",25),e(2407," formField"),i(2408,"br"),t()()(),n(2409,"td",20)(2410,"code",26),e(2411,"string"),t()(),n(2412,"td",23)(2413,"em")(2414,"strong"),e(2415,"(opcional)"),t()(),n(2416,"p"),e(2417,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(2418,"code"),e(2419,"url"),t(),e(2420,"."),t(),n(2421,"blockquote")(2422,"p"),e(2423,"O valor default \xE9 "),n(2424,"code"),e(2425,"files"),t()()(),n(2426,"p")(2427,"strong"),e(2428,"Componente compat\xEDvel"),t(),e(2429,": "),n(2430,"code"),e(2431,"po-upload"),t()()()(),n(2432,"tr",16)(2433,"td",17)(2434,"div",24)(2435,"span",25),e(2436," format"),i(2437,"br"),t()()(),n(2438,"td",20)(2439,"code",26),e(2440,"string "),t(),n(2441,"code",31),e(2442," Array<string>"),t()(),n(2443,"td",23)(2444,"em")(2445,"strong"),e(2446,"(opcional)"),t()(),n(2447,"p"),e(2448,"Formato de exibi\xE7\xE3o no campo."),t(),n(2449,"p"),e(2450,"Ao utilizar esta propriedade com o "),n(2451,"code"),e(2452,"type"),t(),n(2453,"em"),e(2454,"PoDynamicFieldType.Date"),t(),e(2455," ou "),n(2456,"em"),e(2457,"PoDynamicFieldType.DateTime"),t(),e(2458,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),n(2459,"p"),e(2460,"Valores v\xE1lidos:"),t(),n(2461,"ul")(2462,"li"),e(2463,"dd/mm/yyyy"),t(),n(2464,"li"),e(2465,"mm/dd/yyyy"),t(),n(2466,"li"),e(2467,"yyyy/mm/dd"),t()(),n(2468,"p"),e(2469,"Tamb\xE9m pode-se utilizar em conjunto com "),n(2470,"code"),e(2471,"searchService"),t(),e(2472,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t()()(),n(2473,"tr",16)(2474,"td",17)(2475,"div",24)(2476,"span",25),e(2477," formatModel"),i(2478,"br"),t()()(),n(2479,"td",20)(2480,"code",28),e(2481,"boolean"),t()(),n(2482,"td",23)(2483,"em")(2484,"strong"),e(2485,"(opcional)"),t()(),n(2486,"p"),e(2487,"Indica se o "),n(2488,"code"),e(2489,"model"),t(),e(2490," receber\xE1 o valor formatado pelas propriedades "),n(2491,"code"),e(2492,"p-label-on"),t(),e(2493," e "),n(2494,"code"),e(2495,"p-label-off"),t(),e(2496,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),n(2497,"p"),e(2498,"O valor padr\xE3o \xE9: "),n(2499,"code"),e(2500,"false"),t(),e(2501,"."),t(),n(2502,"blockquote")(2503,"p"),e(2504,"Esta propriedade est\xE1 disponivel apenas para o "),n(2505,"code"),e(2506,"swicth"),t(),e(2507,"."),t()()()(),n(2508,"tr",16)(2509,"td",17)(2510,"div",24)(2511,"span",25),e(2512," gridColumns"),i(2513,"br"),t()()(),n(2514,"td",20)(2515,"code",42),e(2516,"number"),t()(),n(2517,"td",23)(2518,"em")(2519,"strong"),e(2520,"(opcional)"),t()(),n(2521,"p"),e(2522,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),n(2523,"p"),e(2524,"Deve ser usado o sistema de "),n(2525,"strong"),e(2526,"grid"),t(),e(2527," do PO (1 ... 12 colunas)."),t(),n(2528,"blockquote")(2529,"p"),e(2530,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(2531,"tr",16)(2532,"td",17)(2533,"div",24)(2534,"span",25),e(2535," gridLgColumns"),i(2536,"br"),t()()(),n(2537,"td",20)(2538,"code",42),e(2539,"number"),t()(),n(2540,"td",23)(2541,"em")(2542,"strong"),e(2543,"(opcional)"),t()(),n(2544,"p"),e(2545,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(2546,"p"),e(2547,"Deve ser usado o sistema de "),n(2548,"strong"),e(2549,"grid"),t(),e(2550," do PO (1 ... 12 colunas)."),t(),n(2551,"blockquote")(2552,"p"),e(2553,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2554,"code"),e(2555,"gridColumns"),t(),e(2556,"."),t()()()(),n(2557,"tr",16)(2558,"td",17)(2559,"div",24)(2560,"span",25),e(2561," gridLgPull"),i(2562,"br"),t()()(),n(2563,"td",20)(2564,"code",42),e(2565,"number"),t()(),n(2566,"td",23)(2567,"em")(2568,"strong"),e(2569,"(opcional)"),t()(),n(2570,"p"),e(2571,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),n(2572,"p"),e(2573,"Deve ser usado o sistema de "),n(2574,"strong"),e(2575,"grid"),t(),e(2576," do PO (1 ... 11 colunas)."),t(),n(2577,"blockquote")(2578,"p"),e(2579,"Esta propriedade n\xE3o funciona com a propriedade "),n(2580,"code"),e(2581,"gridColumns"),t(),e(2582,". Deve-se especificar o tamanho da tela."),t()()()(),n(2583,"tr",16)(2584,"td",17)(2585,"div",24)(2586,"span",25),e(2587," gridMdColumns"),i(2588,"br"),t()()(),n(2589,"td",20)(2590,"code",42),e(2591,"number"),t()(),n(2592,"td",23)(2593,"em")(2594,"strong"),e(2595,"(opcional)"),t()(),n(2596,"p"),e(2597,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(2598,"p"),e(2599,"Deve ser usado o sistema de "),n(2600,"strong"),e(2601,"grid"),t(),e(2602," do PO (1 ... 12 colunas)."),t(),n(2603,"blockquote")(2604,"p"),e(2605,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2606,"code"),e(2607,"gridColumns"),t(),e(2608,"."),t()()()(),n(2609,"tr",16)(2610,"td",17)(2611,"div",24)(2612,"span",25),e(2613," gridMdPull"),i(2614,"br"),t()()(),n(2615,"td",20)(2616,"code",42),e(2617,"number"),t()(),n(2618,"td",23)(2619,"em")(2620,"strong"),e(2621,"(opcional)"),t()(),n(2622,"p"),e(2623,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),n(2624,"p"),e(2625,"Deve ser usado o sistema de "),n(2626,"strong"),e(2627,"grid"),t(),e(2628," do PO (1 ... 11 colunas)."),t(),n(2629,"blockquote")(2630,"p"),e(2631,"Esta propriedade n\xE3o funciona com a propriedade "),n(2632,"code"),e(2633,"gridColumns"),t(),e(2634,". Deve-se especificar o tamanho da tela."),t()()()(),n(2635,"tr",16)(2636,"td",17)(2637,"div",24)(2638,"span",25),e(2639," gridSmColumns"),i(2640,"br"),t()()(),n(2641,"td",20)(2642,"code",42),e(2643,"number"),t()(),n(2644,"td",23)(2645,"em")(2646,"strong"),e(2647,"(opcional)"),t()(),n(2648,"p"),e(2649,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(2650,"p"),e(2651,"Deve ser usado o sistema de "),n(2652,"strong"),e(2653,"grid"),t(),e(2654," do PO (1 ... 12 colunas)."),t(),n(2655,"blockquote")(2656,"p"),e(2657,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2658,"code"),e(2659,"gridColumns"),t(),e(2660,"."),t()()()(),n(2661,"tr",16)(2662,"td",17)(2663,"div",24)(2664,"span",25),e(2665," gridSmPull"),i(2666,"br"),t()()(),n(2667,"td",20)(2668,"code",42),e(2669,"number"),t()(),n(2670,"td",23)(2671,"em")(2672,"strong"),e(2673,"(opcional)"),t()(),n(2674,"p"),e(2675,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),n(2676,"p"),e(2677,"Deve ser usado o sistema de "),n(2678,"strong"),e(2679,"grid"),t(),e(2680," do PO (1 ... 11 colunas)."),t(),n(2681,"blockquote")(2682,"p"),e(2683,"Esta propriedade n\xE3o funciona com a propriedade "),n(2684,"code"),e(2685,"gridColumns"),t(),e(2686,". Deve-se especificar o tamanho da tela."),t()()()(),n(2687,"tr",16)(2688,"td",17)(2689,"div",24)(2690,"span",25),e(2691," gridXlColumns"),i(2692,"br"),t()()(),n(2693,"td",20)(2694,"code",42),e(2695,"number"),t()(),n(2696,"td",23)(2697,"em")(2698,"strong"),e(2699,"(opcional)"),t()(),n(2700,"p"),e(2701,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(2702,"p"),e(2703,"Deve ser usado o sistema de "),n(2704,"strong"),e(2705,"grid"),t(),e(2706," do PO (1 ... 12 colunas)."),t(),n(2707,"blockquote")(2708,"p"),e(2709,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2710,"code"),e(2711,"gridColumns"),t(),e(2712,"."),t()()()(),n(2713,"tr",16)(2714,"td",17)(2715,"div",24)(2716,"span",25),e(2717," gridXlPull"),i(2718,"br"),t()()(),n(2719,"td",20)(2720,"code",42),e(2721,"number"),t()(),n(2722,"td",23)(2723,"em")(2724,"strong"),e(2725,"(opcional)"),t()(),n(2726,"p"),e(2727,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),n(2728,"p"),e(2729,"Deve ser usado o sistema de "),n(2730,"strong"),e(2731,"grid"),t(),e(2732," do PO (1 ... 11 colunas)."),t(),n(2733,"blockquote")(2734,"p"),e(2735,"Esta propriedade n\xE3o funciona com a propriedade "),n(2736,"code"),e(2737,"gridColumns"),t(),e(2738,". Deve-se especificar o tamanho da tela."),t()()()(),n(2739,"tr",16)(2740,"td",17)(2741,"div",24)(2742,"span",25),e(2743," headers"),i(2744,"br"),t()()(),n(2745,"td",20)(2746,"code",52),e(2747,"{ [name: string]: string "),t(),n(2748,"code",53),e(2749,` Array<string>;
}`),t()(),n(2750,"td",23)(2751,"em")(2752,"strong"),e(2753,"(opcional)"),t()(),n(2754,"p"),e(2755,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),n(2756,"p")(2757,"strong"),e(2758,"Componente compat\xEDvel"),t(),e(2759,": "),n(2760,"code"),e(2761,"po-upload"),t()()()(),n(2762,"tr",16)(2763,"td",17)(2764,"div",24)(2765,"span",25),e(2766," help"),i(2767,"br"),t()()(),n(2768,"td",20)(2769,"code",26),e(2770,"string"),t()(),n(2771,"td",23)(2772,"em")(2773,"strong"),e(2774,"(opcional)"),t()(),n(2775,"p"),e(2776,"Texto de ajuda."),t()()(),n(2777,"tr",16)(2778,"td",17)(2779,"div",24)(2780,"span",25),e(2781," hideLabelStatus"),i(2782,"br"),t()()(),n(2783,"td",20)(2784,"code",28),e(2785,"boolean"),t()(),n(2786,"td",23)(2787,"em")(2788,"strong"),e(2789,"(opcional)"),t()(),n(2790,"p"),e(2791,"Indica se o status do "),n(2792,"code"),e(2793,"model"),t(),e(2794," ser\xE1 escondido visualmente ao lado do switch"),t()()(),n(2795,"tr",16)(2796,"td",17)(2797,"div",24)(2798,"span",25),e(2799," hidePasswordPeek"),i(2800,"br"),t()()(),n(2801,"td",20)(2802,"code",28),e(2803,"boolean"),t()(),n(2804,"td",23)(2805,"em")(2806,"strong"),e(2807,"(opcional)"),t()(),n(2808,"p"),e(2809,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),n(2810,"code"),e(2811,"po-password"),t(),e(2812,"."),t()()(),n(2813,"tr",16)(2814,"td",17)(2815,"div",24)(2816,"span",25),e(2817," hideRestrictionsInfo"),i(2818,"br"),t()()(),n(2819,"td",20)(2820,"code",28),e(2821,"boolean"),t()(),n(2822,"td",23)(2823,"em")(2824,"strong"),e(2825,"(opcional)"),t()(),n(2826,"p"),e(2827,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),n(2828,"p")(2829,"strong"),e(2830,"Componente compat\xEDvel"),t(),e(2831,": "),n(2832,"code"),e(2833,"po-upload"),t()()()(),n(2834,"tr",16)(2835,"td",17)(2836,"div",24)(2837,"span",25),e(2838," hideSearch"),i(2839,"br"),t()()(),n(2840,"td",20)(2841,"code",28),e(2842,"boolean"),t()(),n(2843,"td",23)(2844,"em")(2845,"strong"),e(2846,"(opcional)"),t()(),n(2847,"p"),e(2848,"Esconde o campo de pesquisa existente dentro do dropdown do "),n(2849,"code"),e(2850,"po-multiselect"),t(),e(2851,"."),t()()(),n(2852,"tr",16)(2853,"td",17)(2854,"div",24)(2855,"span",25),e(2856," hideSelectAll"),i(2857,"br"),t()()(),n(2858,"td",20)(2859,"code",28),e(2860,"boolean"),t()(),n(2861,"td",23)(2862,"em")(2863,"strong"),e(2864,"(opcional)"),t()(),n(2865,"p"),e(2866,'Indica se o campo "Selecionar todos" do '),n(2867,"code"),e(2868,"po-multiselect"),t(),e(2869," ser\xE1 escondido."),t()()(),n(2870,"tr",16)(2871,"td",17)(2872,"div",24)(2873,"span",25),e(2874," hideSelectButton"),i(2875,"br"),t()()(),n(2876,"td",20)(2877,"code",28),e(2878,"boolean"),t()(),n(2879,"td",23)(2880,"em")(2881,"strong"),e(2882,"(opcional)"),t()(),n(2883,"p"),e(2884,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(2885,"blockquote")(2886,"p"),e(2887,"Caso o valor definido seja "),n(2888,"code"),e(2889,"true"),t(),e(2890,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2891,"code"),e(2892,"selectFiles()"),t(),e(2893," para sele\xE7\xE3o de arquivos."),t()(),n(2894,"p")(2895,"strong"),e(2896,"Componente compat\xEDvel"),t(),e(2897,": "),n(2898,"code"),e(2899,"po-upload"),t()()()(),n(2900,"tr",16)(2901,"td",17)(2902,"div",24)(2903,"span",25),e(2904," hideSendButton"),i(2905,"br"),t()()(),n(2906,"td",20)(2907,"code",28),e(2908,"boolean"),t()(),n(2909,"td",23)(2910,"em")(2911,"strong"),e(2912,"(opcional)"),t()(),n(2913,"p"),e(2914,"Omite o bot\xE3o de envio de arquivos."),t(),n(2915,"blockquote")(2916,"p"),e(2917,"Caso o valor definido seja "),n(2918,"code"),e(2919,"true"),t(),e(2920,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2921,"code"),e(2922,"sendFiles()"),t(),e(2923," para envio do(s) arquivo(s) selecionado(s)."),t()(),n(2924,"p")(2925,"strong"),e(2926,"Componente compat\xEDvel"),t(),e(2927,": "),n(2928,"code"),e(2929,"po-upload"),t()()()(),n(2930,"tr",16)(2931,"td",17)(2932,"div",24)(2933,"span",25),e(2934," icon"),i(2935,"br"),t()()(),n(2936,"td",20)(2937,"code",26),e(2938,"string "),t(),n(2939,"code",54),e(2940," TemplateRef<void>"),t()(),n(2941,"td",23)(2942,"em")(2943,"strong"),e(2944,"(opcional)"),t()(),n(2945,"p"),e(2946,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(2947,"blockquote")(2948,"p"),e(2949,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),n(2950,"ul")(2951,"li"),e(2952,"Input;"),t(),n(2953,"li"),e(2954,"Number;"),t(),n(2955,"li"),e(2956,"Decimal;"),t(),n(2957,"li"),e(2958,"Combo;"),t(),n(2959,"li"),e(2960,"Password;"),t()(),n(2961,"blockquote")(2962,"p"),e(2963,"Veja a disponibilidade de \xEDcones em "),n(2964,"a",55),e(2965,"biblioteca de \xEDcones"),t(),e(2966,"."),t()()()(),n(2967,"tr",16)(2968,"td",17)(2969,"div",24)(2970,"span",25),e(2971," infiniteScroll"),i(2972,"br"),t()()(),n(2973,"td",20)(2974,"code",28),e(2975,"boolean"),t()(),n(2976,"td",23)(2977,"em")(2978,"strong"),e(2979,"(opcional)"),t()(),n(2980,"p"),e(2981,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),n(2982,"p")(2983,"strong"),e(2984,"Componentes compat\xEDveis:"),t(),n(2985,"code"),e(2986,"po-combo"),t(),e(2987,", "),n(2988,"code"),e(2989,"po-lookup"),t(),e(2990,"."),t()()(),n(2991,"tr",16)(2992,"td",17)(2993,"div",24)(2994,"span",25),e(2995," infiniteScrollDistance"),i(2996,"br"),t()()(),n(2997,"td",20)(2998,"code",42),e(2999,"number"),t()(),n(3e3,"td",23)(3001,"em")(3002,"strong"),e(3003,"(opcional)"),t()(),n(3004,"p"),e(3005,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),n(3006,"strong"),e(3007,"Exemplos"),t(),n(3008,"code"),e(3009,"{ infiniteScrollDistance: 80 }"),t(),e(3010,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),n(3011,"p")(3012,"strong"),e(3013,"Componente compat\xEDvel:"),t(),n(3014,"code"),e(3015,"po-combo"),t(),e(3016,"."),t()()(),n(3017,"tr",16)(3018,"td",17)(3019,"div",24)(3020,"span",25),e(3021," invalidValue"),i(3022,"br"),t()()(),n(3023,"td",20)(3024,"code",28),e(3025,"boolean"),t()(),n(3026,"td",23)(3027,"em")(3028,"strong"),e(3029,"(opcional)"),t()(),n(3030,"p"),e(3031,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),n(3032,"code"),e(3033,"p-field-error-message"),t(),e(3034,"."),t(),n(3035,"blockquote")(3036,"p"),e(3037,"Caso essa propriedade seja definida como "),n(3038,"code"),e(3039,"true"),t(),e(3040,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()(),n(3041,"p")(3042,"strong"),e(3043,"Componente compat\xEDvel"),t(),e(3044,": "),n(3045,"code"),e(3046,"po-switch"),t()()()(),n(3047,"tr",16)(3048,"td",17)(3049,"div",24)(3050,"span",25),e(3051," isoFormat"),i(3052,"br"),t()()(),n(3053,"td",20)(3054,"code",56),e(3055,"PoDatepickerIsoFormat"),t()(),n(3056,"td",23)(3057,"em")(3058,"strong"),e(3059,"(opcional)"),t()(),n(3060,"p"),e(3061,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),n(3062,"blockquote")(3063,"p"),e(3064,"Veja os valores v\xE1lidos no "),n(3065,"code"),e(3066,"enumPoDatepickerIsoFormat"),t(),e(3067,"."),t()(),n(3068,"p")(3069,"strong"),e(3070,"Componente compat\xEDvel:"),t(),e(3071," po-datepicker"),t()()(),n(3072,"tr",16)(3073,"td",17)(3074,"div",24)(3075,"span",25),e(3076," key"),i(3077,"br"),t()()(),n(3078,"td",20)(3079,"code",28),e(3080,"boolean"),t()(),n(3081,"td",23)(3082,"em")(3083,"strong"),e(3084,"(opcional)"),t()(),n(3085,"p"),e(3086,"Identificador"),t()()(),n(3087,"tr",16)(3088,"td",17)(3089,"div",24)(3090,"span",25),e(3091," keydown"),i(3092,"br"),t()()(),n(3093,"td",20)(3094,"code",41),e(3095,"Function"),t()(),n(3096,"td",23)(3097,"em")(3098,"strong"),e(3099,"(opcional)"),t()(),n(3100,"p"),e(3101,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(3102,"code"),e(3103,"KeyboardEvent"),t(),e(3104," com informa\xE7\xF5es sobre a tecla."),t()()(),n(3105,"tr",16)(3106,"td",17)(3107,"div",24)(3108,"span",25),e(3109," label"),i(3110,"br"),t()()(),n(3111,"td",20)(3112,"code",26),e(3113,"string"),t()(),n(3114,"td",23)(3115,"em")(3116,"strong"),e(3117,"(opcional)"),t()(),n(3118,"p"),e(3119,"R\xF3tulo do campo exibido."),t(),n(3120,"p"),e(3121,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),n(3122,"code"),e(3123,"label"),t(),e(3124," o valor da propriedade "),n(3125,"code"),e(3126,"property"),t(),e(3127," com a primeira letra em mai\xFAsculo."),t()()(),n(3128,"tr",16)(3129,"td",17)(3130,"div",24)(3131,"span",25),e(3132," labelPosition"),i(3133,"br"),t()()(),n(3134,"td",20)(3135,"code",57),e(3136,"PoSwitchLabelPosition"),t()(),n(3137,"td",23)(3138,"em")(3139,"strong"),e(3140,"(opcional)"),t()(),n(3141,"p"),e(3142,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),n(3143,"blockquote")(3144,"p"),e(3145,"Por padr\xE3o exibe \xE0 direita."),t()()()(),n(3146,"tr",16)(3147,"td",17)(3148,"div",24)(3149,"span",25),e(3150," listboxControlPosition"),i(3151,"br"),t()()(),n(3152,"td",20)(3153,"code",58),e(3154,"'top' "),t(),n(3155,"code",59),e(3156," 'bottom'"),t()(),n(3157,"td",23)(3158,"em")(3159,"strong"),e(3160,"(opcional)"),t()(),n(3161,"p"),e(3162,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),n(3163,"code"),e(3164,"listbox"),t(),e(3165," em rela\xE7\xE3o ao campo ("),n(3166,"code"),e(3167,"top"),t(),e(3168," ou "),n(3169,"code"),e(3170,"bottom"),t(),e(3171,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t(),n(3172,"p")(3173,"strong"),e(3174,"Componentes compat\xEDveis:"),t(),n(3175,"code"),e(3176,"po-multiselect"),t(),e(3177,", "),n(3178,"code"),e(3179,"po-combo"),t(),e(3180,"."),t()()(),n(3181,"tr",16)(3182,"td",17)(3183,"div",24)(3184,"span",25),e(3185," literals"),i(3186,"br"),t()()(),n(3187,"td",20)(3188,"code",35),e(3189,"PoLookupLiterals "),t(),n(3190,"code",60),e(3191," PoMultiselectLiterals "),t(),n(3192,"code",61),e(3193," PoComboLiterals "),t(),n(3194,"code",62),e(3195," PoDatepickerRangeLiterals "),t(),n(3196,"code",63),e(3197," PoUploadLiterals"),t()(),n(3198,"td",23)(3199,"em")(3200,"strong"),e(3201,"(opcional)"),t()(),n(3202,"p"),e(3203,"Objeto com as literais usadas para os seguintes componentes: "),n(3204,"code"),e(3205,"po-lookup"),t(),e(3206,", "),n(3207,"code"),e(3208,"po-multiselect"),t(),e(3209,", "),n(3210,"code"),e(3211,"po-combo"),t(),e(3212," e "),n(3213,"code"),e(3214,"po-datepicker-range"),t(),e(3215,"."),t(),n(3216,"blockquote")(3217,"p"),e(3218,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),n(3219,"p")(3220,"strong"),e(3221,"Componentes compat\xEDveis:"),t(),n(3222,"code"),e(3223,"po-lookup"),t(),e(3224,", "),n(3225,"code"),e(3226,"po-multiselect"),t(),e(3227,", "),n(3228,"code"),e(3229,"po-combo"),t(),e(3230,", "),n(3231,"code"),e(3232,"po-datepicker-range"),t()()()(),n(3233,"tr",16)(3234,"td",17)(3235,"div",24)(3236,"span",25),e(3237," locale"),i(3238,"br"),t()()(),n(3239,"td",20)(3240,"code",26),e(3241,"string"),t()(),n(3242,"td",23)(3243,"em")(3244,"strong"),e(3245,"(opcional)"),t()(),n(3246,"p"),e(3247,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),n(3248,"a",64)(3249,"code"),e(3250,"I18n"),t()()(),n(3251,"p"),e(3252,`Exemplo de utiliza\xE7\xE3o:
`),n(3253,"code"),e(3254,"[ { property: 'birthday', locale: 'en', type: 'date' }, { property: 'wage', locale: 'ru', type: 'currency' } ];"),t()(),n(3255,"blockquote")(3256,"p"),e(3257,"Para ver quais linguagens suportadas acesse "),n(3258,"a",64)(3259,"code"),e(3260,"I18n"),t()(),e(3261,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),n(3262,"tr",16)(3263,"td",17)(3264,"div",24)(3265,"span",25),e(3266," mask"),i(3267,"br"),t()()(),n(3268,"td",20)(3269,"code",26),e(3270,"string"),t()(),n(3271,"td",23)(3272,"em")(3273,"strong"),e(3274,"(opcional)"),t()(),n(3275,"p"),e(3276,"M\xE1scara para o campo."),t(),n(3277,"p")(3278,"strong"),e(3279,"Componentes compat\xEDveis:"),t(),n(3280,"code"),e(3281,"po-input"),t(),e(3282,"."),t(),n(3283,"blockquote")(3284,"p"),e(3285,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(3286,"code"),e(3287,"type: time"),t(),e(3288,"."),t()()()(),n(3289,"tr",16)(3290,"td",17)(3291,"div",24)(3292,"span",25),e(3293," maskFormatModel"),i(3294,"br"),t()()(),n(3295,"td",20)(3296,"code",28),e(3297,"boolean"),t()(),n(3298,"td",23)(3299,"em")(3300,"strong"),e(3301,"(opcional)"),t()(),n(3302,"p"),e(3303,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),n(3304,"code"),e(3305,"false"),t(),e(3306,"."),t(),n(3307,"p")(3308,"strong"),e(3309,"Componentes compat\xEDveis:"),t(),n(3310,"code"),e(3311,"po-input"),t(),e(3312,"."),t(),n(3313,"blockquote")(3314,"p"),e(3315,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(3316,"code"),e(3317,"type: time"),t(),e(3318,"."),t()()()(),n(3319,"tr",16)(3320,"td",17)(3321,"div",24)(3322,"span",25),e(3323," maxLength"),i(3324,"br"),t()()(),n(3325,"td",20)(3326,"code",42),e(3327,"number"),t()(),n(3328,"td",23)(3329,"em")(3330,"strong"),e(3331,"(opcional)"),t()(),n(3332,"p"),e(3333,"Tamanho m\xE1ximo de caracteres."),t(),n(3334,"p")(3335,"strong"),e(3336,"Componentes compat\xEDveis:"),t(),n(3337,"code"),e(3338,"po-input"),t(),e(3339,", "),n(3340,"code"),e(3341,"po-number"),t(),e(3342,", "),n(3343,"code"),e(3344,"po-decimal"),t(),e(3345,", "),n(3346,"code"),e(3347,"po-textarea"),t(),e(3348,", "),n(3349,"code"),e(3350,"po-password"),t(),e(3351,"."),t()()(),n(3352,"tr",16)(3353,"td",17)(3354,"div",24)(3355,"span",25),e(3356," maxValue"),i(3357,"br"),t()()(),n(3358,"td",20)(3359,"code",26),e(3360,"string "),t(),n(3361,"code",42),e(3362," number"),t()(),n(3363,"td",23)(3364,"em")(3365,"strong"),e(3366,"(opcional)"),t()(),n(3367,"p"),e(3368,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(3369,"em"),e(3370,"number"),t(),e(3371,", "),n(3372,"em"),e(3373,"date"),t(),e(3374," ou "),n(3375,"em"),e(3376,"dateTime"),t(),e(3377,"."),t(),n(3378,"p")(3379,"strong"),e(3380,"Componentes compat\xEDveis:"),t(),n(3381,"code"),e(3382,"po-datepicker"),t(),e(3383,", "),n(3384,"code"),e(3385,"po-datepicker-range"),t(),e(3386,", "),n(3387,"code"),e(3388,"po-number"),t(),e(3389,", "),n(3390,"code"),e(3391,"po-decimal"),t()()()(),n(3392,"tr",16)(3393,"td",17)(3394,"div",24)(3395,"span",25),e(3396," minLength"),i(3397,"br"),t()()(),n(3398,"td",20)(3399,"code",42),e(3400,"number"),t()(),n(3401,"td",23)(3402,"em")(3403,"strong"),e(3404,"(opcional)"),t()(),n(3405,"p"),e(3406,"Tamanho m\xEDnimo de caracteres."),t(),n(3407,"p")(3408,"strong"),e(3409,"Componentes compat\xEDveis:"),t(),n(3410,"code"),e(3411,"po-input"),t(),e(3412,", "),n(3413,"code"),e(3414,"po-number"),t(),e(3415,", "),n(3416,"code"),e(3417,"po-decimal"),t(),e(3418,", "),n(3419,"code"),e(3420,"po-textarea"),t(),e(3421,", "),n(3422,"code"),e(3423,"po-password"),t(),e(3424,"."),t()()(),n(3425,"tr",16)(3426,"td",17)(3427,"div",24)(3428,"span",25),e(3429," minValue"),i(3430,"br"),t()()(),n(3431,"td",20)(3432,"code",26),e(3433,"string "),t(),n(3434,"code",42),e(3435," number"),t()(),n(3436,"td",23)(3437,"em")(3438,"strong"),e(3439,"(opcional)"),t()(),n(3440,"p"),e(3441,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(3442,"em"),e(3443,"number"),t(),e(3444,", "),n(3445,"em"),e(3446,"date"),t(),e(3447," ou "),n(3448,"em"),e(3449,"dateTime"),t(),e(3450,"."),t(),n(3451,"p")(3452,"strong"),e(3453,"Componentes compat\xEDveis:"),t(),n(3454,"code"),e(3455,"po-datepicker"),t(),e(3456,", "),n(3457,"code"),e(3458,"po-datepicker-range"),t(),e(3459,", "),n(3460,"code"),e(3461,"po-number"),t(),e(3462,", "),n(3463,"code"),e(3464,"po-decimal"),t()()()(),n(3465,"tr",16)(3466,"td",17)(3467,"div",24)(3468,"span",25),e(3469," multiple"),i(3470,"br"),t()()(),n(3471,"td",20)(3472,"code",28),e(3473,"boolean"),t()(),n(3474,"td",23)(3475,"em")(3476,"strong"),e(3477,"(opcional)"),t()(),n(3478,"p"),e(3479,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),n(3480,"p")(3481,"strong"),e(3482,"Componente compat\xEDvel:"),t(),n(3483,"code"),e(3484,"po-lookup"),t(),e(3485,", "),n(3486,"code"),e(3487,"po-upload"),t()()()(),n(3488,"tr",16)(3489,"td",17)(3490,"div",24)(3491,"span",25),e(3492," noAutocomplete"),i(3493,"br"),t()()(),n(3494,"td",20)(3495,"code",28),e(3496,"boolean"),t()(),n(3497,"td",23)(3498,"em")(3499,"strong"),e(3500,"(opcional)"),t()(),n(3501,"p"),e(3502,"Define a propriedade nativa "),n(3503,"code"),e(3504,"autocomplete"),t(),e(3505," do campo como off."),t(),n(3506,"p")(3507,"strong"),e(3508,"Componentes compat\xEDveis:"),t(),n(3509,"code"),e(3510,"po-datepicker"),t(),e(3511,", "),n(3512,"code"),e(3513,"po-datepicker-range"),t(),e(3514,", "),n(3515,"code"),e(3516,"po-input"),t(),e(3517,", "),n(3518,"code"),e(3519,"po-number"),t(),e(3520,", "),n(3521,"code"),e(3522,"po-decimal"),t(),e(3523,", "),n(3524,"code"),e(3525,"po-lookup"),t(),e(3526,", "),n(3527,"code"),e(3528,"po-password"),t()()()(),n(3529,"tr",16)(3530,"td",17)(3531,"div",24)(3532,"span",25),e(3533," offsetColumns"),i(3534,"br"),t()()(),n(3535,"td",20)(3536,"code",42),e(3537,"number"),t()(),n(3538,"td",23)(3539,"em")(3540,"strong"),e(3541,"(opcional)"),t()(),n(3542,"p"),e(3543,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),n(3544,"p"),e(3545,"Deve ser usado o sistema de "),n(3546,"strong"),e(3547,"grid"),t(),e(3548," do PO (1 ... 12 colunas)."),t(),n(3549,"blockquote")(3550,"p"),e(3551,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(3552,"tr",16)(3553,"td",17)(3554,"div",24)(3555,"span",25),e(3556," offsetLgColumns"),i(3557,"br"),t()()(),n(3558,"td",20)(3559,"code",42),e(3560,"number"),t()(),n(3561,"td",23)(3562,"em")(3563,"strong"),e(3564,"(opcional)"),t()(),n(3565,"p"),e(3566,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(3567,"p"),e(3568,"Deve ser usado o sistema de "),n(3569,"strong"),e(3570,"grid"),t(),e(3571," do PO (1 ... 12 colunas)."),t(),n(3572,"blockquote")(3573,"p"),e(3574,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3575,"code"),e(3576,"offsetColumns"),t(),e(3577,"."),t()()()(),n(3578,"tr",16)(3579,"td",17)(3580,"div",24)(3581,"span",25),e(3582," offsetMdColumns"),i(3583,"br"),t()()(),n(3584,"td",20)(3585,"code",42),e(3586,"number"),t()(),n(3587,"td",23)(3588,"em")(3589,"strong"),e(3590,"(opcional)"),t()(),n(3591,"p"),e(3592,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(3593,"p"),e(3594,"Deve ser usado o sistema de "),n(3595,"strong"),e(3596,"grid"),t(),e(3597," do PO (1 ... 12 colunas)."),t(),n(3598,"blockquote")(3599,"p"),e(3600,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3601,"code"),e(3602,"offsetColumns"),t(),e(3603,"."),t()()()(),n(3604,"tr",16)(3605,"td",17)(3606,"div",24)(3607,"span",25),e(3608," offsetSmColumns"),i(3609,"br"),t()()(),n(3610,"td",20)(3611,"code",42),e(3612,"number"),t()(),n(3613,"td",23)(3614,"em")(3615,"strong"),e(3616,"(opcional)"),t()(),n(3617,"p"),e(3618,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(3619,"p"),e(3620,"Deve ser usado o sistema de "),n(3621,"strong"),e(3622,"grid"),t(),e(3623," do PO (1 ... 12 colunas)."),t(),n(3624,"blockquote")(3625,"p"),e(3626,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3627,"code"),e(3628,"offsetColumns"),t(),e(3629,"."),t()()()(),n(3630,"tr",16)(3631,"td",17)(3632,"div",24)(3633,"span",25),e(3634," offsetXlColumns"),i(3635,"br"),t()()(),n(3636,"td",20)(3637,"code",42),e(3638,"number"),t()(),n(3639,"td",23)(3640,"em")(3641,"strong"),e(3642,"(opcional)"),t()(),n(3643,"p"),e(3644,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(3645,"p"),e(3646,"Deve ser usado o sistema de "),n(3647,"strong"),e(3648,"grid"),t(),e(3649," do PO (1 ... 12 colunas)."),t(),n(3650,"blockquote")(3651,"p"),e(3652,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3653,"code"),e(3654,"offsetColumns"),t(),e(3655,"."),t()()()(),n(3656,"tr",16)(3657,"td",17)(3658,"div",24)(3659,"span",25),e(3660," onError"),i(3661,"br"),t()()(),n(3662,"td",20)(3663,"code",41),e(3664,"Function"),t()(),n(3665,"td",23)(3666,"em")(3667,"strong"),e(3668,"(opcional)"),t()(),n(3669,"p"),e(3670,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(3671,"blockquote")(3672,"p"),e(3673,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(3674,"code"),e(3675,"HttpErrorResponse"),t(),e(3676,"."),t()(),n(3677,"p")(3678,"strong"),e(3679,"Componente compat\xEDvel"),t(),e(3680,": "),n(3681,"code"),e(3682,"po-upload"),t()()()(),n(3683,"tr",16)(3684,"td",17)(3685,"div",24)(3686,"span",25),e(3687," onSuccess"),i(3688,"br"),t()()(),n(3689,"td",20)(3690,"code",41),e(3691,"Function"),t()(),n(3692,"td",23)(3693,"em")(3694,"strong"),e(3695,"(opcional)"),t()(),n(3696,"p"),e(3697,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(3698,"blockquote")(3699,"p"),e(3700,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(3701,"code"),e(3702,"HttpResponse"),t(),e(3703,"."),t()(),n(3704,"p")(3705,"strong"),e(3706,"Componente compat\xEDvel"),t(),e(3707,": "),n(3708,"code"),e(3709,"po-upload"),t()()()(),n(3710,"tr",16)(3711,"td",17)(3712,"div",24)(3713,"span",25),e(3714," onUpload"),i(3715,"br"),t()()(),n(3716,"td",20)(3717,"code",41),e(3718,"Function"),t()(),n(3719,"td",23)(3720,"em")(3721,"strong"),e(3722,"(opcional)"),t()(),n(3723,"p"),e(3724,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(3725,"pre")(3726,"code"),e(3727,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),n(3728,"p")(3729,"strong"),e(3730,"Componente compat\xEDvel"),t(),e(3731,": "),n(3732,"code"),e(3733,"po-upload"),t()()()(),n(3734,"tr",16)(3735,"td",17)(3736,"div",24)(3737,"span",25),e(3738," optional"),i(3739,"br"),t()()(),n(3740,"td",20)(3741,"code",28),e(3742,"boolean"),t()(),n(3743,"td",23)(3744,"em")(3745,"strong"),e(3746,"(opcional)"),t()(),n(3747,"p"),e(3748,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(3749,"blockquote")(3750,"p"),e(3751,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),n(3752,"ul")(3753,"li"),e(3754,"O campo for "),n(3755,"code"),e(3756,"required"),t(),e(3757,", ou;"),t(),n(3758,"li"),e(3759,"N\xE3o possuir "),n(3760,"code"),e(3761,"help"),t(),e(3762," e "),n(3763,"code"),e(3764,"label"),t(),e(3765,"."),t()()()(),n(3766,"tr",16)(3767,"td",17)(3768,"div",24)(3769,"span",25),e(3770," options"),i(3771,"br"),t()()(),n(3772,"td",20)(3773,"code",31),e(3774,"Array<string> "),t(),n(3775,"code",65),e(3776," Array<PoSelectOption> "),t(),n(3777,"code",66),e(3778," Array<PoMultiselectOption> "),t(),n(3779,"code",67),e(3780," Array<PoCheckboxGroupOption> "),t(),n(3781,"code",68),e(3782," Array<any>"),t()(),n(3783,"td",23)(3784,"em")(3785,"strong"),e(3786,"(opcional)"),t()(),n(3787,"p"),e(3788,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),n(3789,"p")(3790,"strong"),e(3791,"Componentes compat\xEDveis:"),t(),n(3792,"code"),e(3793,"po-select"),t(),e(3794,", "),n(3795,"code"),e(3796,"po-radio-group"),t(),e(3797,", "),n(3798,"code"),e(3799,"po-checkbox-group"),t(),e(3800,", "),n(3801,"code"),e(3802,"po-multiselect"),t(),e(3803,"."),t()()(),n(3804,"tr",16)(3805,"td",17)(3806,"div",24)(3807,"span",25),e(3808," optionsMulti"),i(3809,"br"),t()()(),n(3810,"td",20)(3811,"code",28),e(3812,"boolean"),t()(),n(3813,"td",23)(3814,"em")(3815,"strong"),e(3816,"(opcional)"),t()(),n(3817,"p"),e(3818,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),n(3819,"tr",16)(3820,"td",17)(3821,"div",24)(3822,"span",25),e(3823," optionsService"),i(3824,"br"),t()()(),n(3825,"td",20)(3826,"code",26),e(3827,"string "),t(),n(3828,"code",69),e(3829," PoComboFilter "),t(),n(3830,"code",70),e(3831," PoMultiselectFilter"),t()(),n(3832,"td",23)(3833,"em")(3834,"strong"),e(3835,"(opcional)"),t()(),n(3836,"p"),e(3837,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),n(3838,"strong"),e(3839,"Importante"),t()(),n(3840,"blockquote")(3841,"p"),e(3842,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),n(3843,"a",7),e(3844,"guia de API do PO UI"),t(),e(3845,"."),t()()()(),n(3846,"tr",16)(3847,"td",17)(3848,"div",24)(3849,"span",25),e(3850," order"),i(3851,"br"),t()()(),n(3852,"td",20)(3853,"code",42),e(3854,"number"),t()(),n(3855,"td",23)(3856,"em")(3857,"strong"),e(3858,"(opcional)"),t()(),n(3859,"p"),e(3860,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),n(3861,"p"),e(3862,"Exemplo de utiliza\xE7\xE3o:"),t(),n(3863,"p")(3864,"code"),e(3865,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),n(3866,"p"),e(3867,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),n(3868,"code"),e(3869,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),n(3870,"p"),e(3871,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),n(3872,"p"),e(3873,"Campos sem "),n(3874,"code"),e(3875,"order"),t(),e(3876,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),n(3877,"tr",16)(3878,"td",17)(3879,"div",24)(3880,"span",25),e(3881," params"),i(3882,"br"),t()()(),n(3883,"td",20)(3884,"code",32),e(3885,"any"),t()(),n(3886,"td",23)(3887,"em")(3888,"strong"),e(3889,"(opcional)"),t()(),n(3890,"p"),e(3891,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),n(3892,"code"),e(3893,"po-lookup"),t(),e(3894,` e
`),n(3895,"code"),e(3896,"po-combo"),t(),e(3897,"."),t(),n(3898,"p"),e(3899,"Por exemplo, para o par\xE2metro "),n(3900,"code"),e(3901,"{ age: 23 }"),t(),e(3902," a URL da requisi\xE7\xE3o ficaria:"),t(),n(3903,"p")(3904,"code"),e(3905,"url + ?age=23&filter=Peter"),t()()()(),n(3906,"tr",16)(3907,"td",17)(3908,"div",24)(3909,"span",25),e(3910," pattern"),i(3911,"br"),t()()(),n(3912,"td",20)(3913,"code",26),e(3914,"string"),t()(),n(3915,"td",23)(3916,"em")(3917,"strong"),e(3918,"(opcional)"),t()(),n(3919,"p"),e(3920,"Regex para valida\xE7\xE3o do campo."),t(),n(3921,"p")(3922,"strong"),e(3923,"Componentes compat\xEDveis:"),t(),n(3924,"code"),e(3925,"po-input"),t(),e(3926,", "),n(3927,"code"),e(3928,"po-password"),t(),e(3929,"."),t()()(),n(3930,"tr",16)(3931,"td",17)(3932,"div",24)(3933,"span",25),e(3934," placeholder"),i(3935,"br"),t()()(),n(3936,"td",20)(3937,"code",26),e(3938,"string"),t()(),n(3939,"td",23)(3940,"em")(3941,"strong"),e(3942,"(opcional)"),t()(),n(3943,"p"),e(3944,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),n(3945,"tr",16)(3946,"td",17)(3947,"div",24)(3948,"span",25),e(3949," placeholderSearch"),i(3950,"br"),t()()(),n(3951,"td",20)(3952,"code",26),e(3953,"string"),t()(),n(3954,"td",23)(3955,"em")(3956,"strong"),e(3957,"(opcional)"),t()(),n(3958,"p"),e(3959,"Placeholder do campo de pesquisa do "),n(3960,"code"),e(3961,"po-multiselect"),t(),e(3962,"."),t(),n(3963,"blockquote")(3964,"p"),e(3965,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),n(3966,"tr",16)(3967,"td",17)(3968,"div",24)(3969,"span",25),e(3970," property"),i(3971,"br"),t()()(),n(3972,"td",20)(3973,"code",26),e(3974,"string"),t()(),n(3975,"td",23)(3976,"p"),e(3977,"Nome de refer\xEAncia do campo."),t()()(),n(3978,"tr",16)(3979,"td",17)(3980,"div",24)(3981,"span",25),e(3982," range"),i(3983,"br"),t()()(),n(3984,"td",20)(3985,"code",28),e(3986,"boolean"),t()(),n(3987,"td",23)(3988,"em")(3989,"strong"),e(3990,"(opcional)"),t()(),n(3991,"p"),e(3992,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),n(3993,"blockquote")(3994,"p"),e(3995,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),n(3996,"tr",16)(3997,"td",17)(3998,"div",24)(3999,"span",25),e(4e3," readonly"),i(4001,"br"),t()()(),n(4002,"td",20)(4003,"code",28),e(4004,"boolean"),t()(),n(4005,"td",23)(4006,"em")(4007,"strong"),e(4008,"(opcional)"),t()(),n(4009,"p"),e(4010,"Indica que o campo ser\xE1 somente leitura."),t(),n(4011,"p")(4012,"strong"),e(4013,"Componentes compat\xEDveis:"),t(),n(4014,"code"),e(4015,"po-datepicker"),t(),e(4016,", "),n(4017,"code"),e(4018,"po-datepicker-range"),t(),e(4019,", "),n(4020,"code"),e(4021,"po-input"),t(),e(4022,", "),n(4023,"code"),e(4024,"po-number"),t(),e(4025,", "),n(4026,"code"),e(4027,"po-decimal"),t(),e(4028,", "),n(4029,"code"),e(4030,"po-select"),t(),e(4031,", "),n(4032,"code"),e(4033,"po-textarea"),t(),e(4034,", "),n(4035,"code"),e(4036,"po-password"),t()()()(),n(4037,"tr",16)(4038,"td",17)(4039,"div",24)(4040,"span",25),e(4041," removeInitialFilter"),i(4042,"br"),t()()(),n(4043,"td",20)(4044,"code",28),e(4045,"boolean"),t()(),n(4046,"td",23)(4047,"em")(4048,"strong"),e(4049,"(opcional)"),t()(),n(4050,"p"),e(4051,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),n(4052,"blockquote")(4053,"p"),e(4054,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),n(4055,"p")(4056,"strong"),e(4057,"Componente compat\xEDvel"),t(),e(4058,": "),n(4059,"code"),e(4060,"po-combo"),t()()()(),n(4061,"tr",16)(4062,"td",17)(4063,"div",24)(4064,"span",25),e(4065," required"),i(4066,"br"),t()()(),n(4067,"td",20)(4068,"code",28),e(4069,"boolean"),t()(),n(4070,"td",23)(4071,"em")(4072,"strong"),e(4073,"(opcional)"),t()(),n(4074,"p"),e(4075,"Define a obrigatoriedade do campo."),t()()(),n(4076,"tr",16)(4077,"td",17)(4078,"div",24)(4079,"span",25),e(4080," requiredFieldErrorMessage"),i(4081,"br"),t()()(),n(4082,"td",20)(4083,"code",28),e(4084,"boolean"),t()(),n(4085,"td",23)(4086,"em")(4087,"strong"),e(4088,"(opcional)"),t()(),n(4089,"p"),e(4090,"Exibe a mensagem setada na propriedade "),n(4091,"code"),e(4092,"errorMessage"),t(),e(4093," se o campo estiver vazio e for requerido."),t(),n(4094,"blockquote")(4095,"p"),e(4096,"Necess\xE1rio que a propriedade "),n(4097,"code"),e(4098,"required"),t(),e(4099," esteja habilitada."),t()(),n(4100,"p")(4101,"strong"),e(4102,"Componentes compat\xEDveis:"),t(),n(4103,"code"),e(4104,"po-datepicker"),t(),e(4105,", "),n(4106,"code"),e(4107,"po-input"),t(),e(4108,", "),n(4109,"code"),e(4110,"po-number"),t(),e(4111,", "),n(4112,"code"),e(4113,"po-decimal"),t(),e(4114,", "),n(4115,"code"),e(4116,"po-password"),t(),e(4117,"."),t()()(),n(4118,"tr",16)(4119,"td",17)(4120,"div",24)(4121,"span",25),e(4122," restrictions"),i(4123,"br"),t()()(),n(4124,"td",20)(4125,"code",71),e(4126,"PoUploadFileRestrictions"),t()(),n(4127,"td",23)(4128,"em")(4129,"strong"),e(4130,"(opcional)"),t()(),n(4131,"p"),e(4132,"Objeto que segue a defini\xE7\xE3o da interface "),n(4133,"code"),e(4134,"PoUploadFileRestrictions"),t(),e(4135,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),n(4136,"p")(4137,"strong"),e(4138,"Componente compat\xEDvel"),t(),e(4139,": "),n(4140,"code"),e(4141,"po-upload"),t()()()(),n(4142,"tr",16)(4143,"td",17)(4144,"div",24)(4145,"span",25),e(4146," rows"),i(4147,"br"),t()()(),n(4148,"td",20)(4149,"code",42),e(4150,"number"),t()(),n(4151,"td",23)(4152,"em")(4153,"strong"),e(4154,"(opcional)"),t()(),n(4155,"p"),e(4156,"Quantidade de linhas exibidas no "),n(4157,"code"),e(4158,"po-textarea"),t(),e(4159,"."),t()()(),n(4160,"tr",16)(4161,"td",17)(4162,"div",24)(4163,"span",25),e(4164," searchService"),i(4165,"br"),t()()(),n(4166,"td",20)(4167,"code",26),e(4168,"string "),t(),n(4169,"code",33),e(4170," PoLookupFilter"),t()(),n(4171,"td",23)(4172,"em")(4173,"strong"),e(4174,"(opcional)"),t()(),n(4175,"p"),e(4176,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),n(4177,"code"),e(4178,"columns"),t(),e(4179,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),n(4180,"strong"),e(4181,"Importante:"),t()(),n(4182,"blockquote")(4183,"p"),e(4184,"Caso utilizar a propriedade "),n(4185,"code"),e(4186,"optionsService"),t(),e(4187,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),n(4188,"a",7),e(4189,"guia de API do PO UI"),t(),e(4190,"."),t()()()(),n(4191,"tr",16)(4192,"td",17)(4193,"div",24)(4194,"span",25),e(4195," secret"),i(4196,"br"),t()()(),n(4197,"td",20)(4198,"code",28),e(4199,"boolean"),t()(),n(4200,"td",23)(4201,"em")(4202,"strong"),e(4203,"(opcional)"),t()(),n(4204,"p"),e(4205,"Esconde a informa\xE7\xE3o estilo "),n(4206,"em"),e(4207,"password"),t(),e(4208,", pode ser utilizado quando o tipo de dado for "),n(4209,"em"),e(4210,"string"),t(),e(4211,"."),t()()(),n(4212,"tr",16)(4213,"td",17)(4214,"div",24)(4215,"span",25),e(4216," showRequired"),i(4217,"br"),t()()(),n(4218,"td",20)(4219,"code",28),e(4220,"boolean"),t()(),n(4221,"td",23)(4222,"em")(4223,"strong"),e(4224,"(opcional)"),t()(),n(4225,"p"),e(4226,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(4227,"blockquote")(4228,"p"),e(4229,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(4230,"ul")(4231,"li"),e(4232,"N\xE3o possuir "),n(4233,"code"),e(4234,"p-help"),t(),e(4235," e/ou "),n(4236,"code"),e(4237,"p-label"),t(),e(4238,"."),t()()()(),n(4239,"tr",16)(4240,"td",17)(4241,"div",24)(4242,"span",25),e(4243," size"),i(4244,"br"),t()()(),n(4245,"td",20)(4246,"code",26),e(4247,"string"),t()(),n(4248,"td",23)(4249,"em")(4250,"strong"),e(4251,"(opcional)"),t()(),n(4252,"p"),e(4253,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),n(4254,"ul")(4255,"li")(4256,"code"),e(4257,"small"),t(),e(4258,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(4259,"li")(4260,"code"),e(4261,"medium"),t(),e(4262,": aplica a medida medium de cada componente."),t(),n(4263,"li")(4264,"code"),e(4265,"large"),t(),e(4266,": aplica a medida large de cada componente (dispon\xEDvel para "),n(4267,"code"),e(4268,"po-checkbox"),t(),e(4269," e "),n(4270,"code"),e(4271,"po-radio-group"),t(),e(4272,")."),n(4273,"blockquote")(4274,"p"),e(4275,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(4276,"code"),e(4277,"medium"),t(),e(4278,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(4279,"a",37),e(4280,"po-theme"),t(),e(4281,"."),t()()()()()(),n(4282,"tr",16)(4283,"td",17)(4284,"div",24)(4285,"span",25),e(4286," sort"),i(4287,"br"),t()()(),n(4288,"td",20)(4289,"code",28),e(4290,"boolean"),t()(),n(4291,"td",23)(4292,"em")(4293,"strong"),e(4294,"(opcional)"),t()(),n(4295,"p"),e(4296,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),n(4297,"p")(4298,"strong"),e(4299,"Componentes compat\xEDveis:"),t(),n(4300,"code"),e(4301,"po-combo"),t(),e(4302,", po-multiselect"),t()()(),n(4303,"tr",16)(4304,"td",17)(4305,"div",24)(4306,"span",25),e(4307," step"),i(4308,"br"),t()()(),n(4309,"td",20)(4310,"code",42),e(4311,"number"),t()(),n(4312,"td",23)(4313,"em")(4314,"strong"),e(4315,"(opcional)"),t()(),n(4316,"p"),e(4317,"Intervalo utilizado no "),n(4318,"code"),e(4319,"po-number"),t(),e(4320,"."),t()()(),n(4321,"tr",16)(4322,"td",17)(4323,"div",24)(4324,"span",25),e(4325," thousandMaxlength"),i(4326,"br"),t()()(),n(4327,"td",20)(4328,"code",42),e(4329,"number"),t()(),n(4330,"td",23)(4331,"em")(4332,"strong"),e(4333,"(opcional)"),t()(),n(4334,"p"),e(4335,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),n(4336,"blockquote")(4337,"p"),e(4338,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(4339,"code"),e(4340,"type"),t(),e(4341," for "),n(4342,"em"),e(4343,"currency"),t(),e(4344," ou "),n(4345,"em"),e(4346,"decimal"),t(),e(4347,"."),t()()()(),n(4348,"tr",16)(4349,"td",17)(4350,"div",24)(4351,"span",25),e(4352," type"),i(4353,"br"),t()()(),n(4354,"td",20)(4355,"code",26),e(4356,"string "),t(),n(4357,"code",72),e(4358," PoDynamicFieldType"),t()(),n(4359,"td",23)(4360,"em")(4361,"strong"),e(4362,"(opcional)"),t()(),n(4363,"p"),e(4364,"Tipo do valor campo."),t(),n(4365,"p"),e(4366,"Valores v\xE1lidos:"),t(),n(4367,"ul")(4368,"li")(4369,"code"),e(4370,"boolean"),t(),e(4371,": Valores "),n(4372,"em"),e(4373,"booleanos"),t(),e(4374,"."),t(),n(4375,"li")(4376,"code"),e(4377,"currency"),t(),e(4378,": Valores monet\xE1rios."),t(),n(4379,"li")(4380,"code"),e(4381,"decimal"),t(),e(4382,": Valores decimais."),t(),n(4383,"li")(4384,"code"),e(4385,"date"),t(),e(4386,": Valores de datas."),n(4387,"ul")(4388,"li"),e(4389,"Aceita os tipos "),n(4390,"strong"),e(4391,"string"),t(),e(4392," e "),n(4393,"strong"),e(4394,"Date"),t(),e(4395,` padr\xE3o do Javascript,
por exemplo: `),n(4396,"code"),e(4397,"'2017-11-28'"),t(),e(4398," ou "),n(4399,"code"),e(4400,"new Date(2017, 10, 28)"),t(),e(4401,"."),t()()(),n(4402,"li")(4403,"code"),e(4404,"dateTime"),t(),e(4405,": Valor de data com hor\xE1rio."),n(4406,"ul")(4407,"li"),e(4408,"Aceita o tipo "),n(4409,"em"),e(4410,"string"),t(),e(4411," no formato "),n(4412,"strong"),e(4413,"ISO-8601"),t(),e(4414," extendido "),n(4415,"strong"),e(4416,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(4417,`
e o tipo `),n(4418,"strong"),e(4419,"Date"),t(),e(4420," padr\xE3o do Javascript, por exemplo: "),n(4421,"code"),e(4422,"'2017-11-28T00:00:00-02:00'"),t(),e(4423," ou "),n(4424,"code"),e(4425,"new Date(2017, 10, 28)"),t(),e(4426,"."),t()()(),n(4427,"li")(4428,"code"),e(4429,"number"),t(),e(4430,": Valores num\xE9ricos."),t(),n(4431,"li")(4432,"code"),e(4433,"string"),t(),e(4434,": Textos."),t(),n(4435,"li")(4436,"code"),e(4437,"time"),t(),e(4438,": Valor do hor\xE1rio."),n(4439,"ul")(4440,"li"),e(4441,"Aceita o tipo "),n(4442,"strong"),e(4443,"string"),t(),e(4444," nos formatos "),n(4445,"strong"),e(4446,"'HH:mm:ss'"),t(),e(4447," ou "),n(4448,"strong"),e(4449,"'HH:mm:ss.ffffff'"),t(),e(4450,", por exemplo: "),n(4451,"code"),e(4452,"'23:12:45'"),t(),e(4453,"."),t()()()()()(),n(4454,"tr",16)(4455,"td",17)(4456,"div",24)(4457,"span",25),e(4458," url"),i(4459,"br"),t()()(),n(4460,"td",20)(4461,"code",26),e(4462,"string"),t()(),n(4463,"td",23)(4464,"em")(4465,"strong"),e(4466,"(opcional)"),t()(),n(4467,"p"),e(4468,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),n(4469,"p")(4470,"strong"),e(4471,"Componente compat\xEDvel"),t(),e(4472,": "),n(4473,"code"),e(4474,"po-upload"),t()()()(),n(4475,"tr",16)(4476,"td",17)(4477,"div",24)(4478,"span",25),e(4479," validate"),i(4480,"br"),t()()(),n(4481,"td",20)(4482,"code",26),e(4483,"string "),t(),n(4484,"code",41),e(4485," Function"),t()(),n(4486,"td",23)(4487,"em")(4488,"strong"),e(4489,"(opcional)"),t()(),n(4490,"p"),e(4491,"Fun\xE7\xE3o ou servi\xE7o para validar as "),n(4492,"strong"),e(4493,"mudan\xE7as do campo"),t(),e(4494,"."),t(),n(4495,"ul")(4496,"li"),e(4497,"A propriedade aceita os seguintes tipos:"),t()(),n(4498,"ul")(4499,"li")(4500,"strong"),e(4501,"String"),t(),e(4502,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),n(4503,"code"),e(4504,"POST"),t(),e(4505,"."),t(),n(4506,"li")(4507,"strong"),e(4508,"Function"),t(),e(4509,": M\xE9todo que ser\xE1 executado."),t()(),n(4510,"p"),e(4511,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),n(4512,"code"),e(4513,"PoDynamicFormFieldChanged"),t(),e(4514,":"),t(),n(4515,"p")(4516,"code"),e(4517,"{ property: 'property name', value: 'new value' }"),t()(),n(4518,"p"),e(4519,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(4520,"a",73),e(4521,"PoDynamicFormFieldValidation"),t(),e(4522,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),n(4523,"pre")(4524,"code"),e(4525,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),n(4526,"p"),e(4527,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(4528,"code"),e(4529,"bind"),t(),e(4530,`, por exemplo:
`),n(4531,"code"),e(4532,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),n(4533,"tr",16)(4534,"td",17)(4535,"div",24)(4536,"span",25),e(4537," visible"),i(4538,"br"),t()()(),n(4539,"td",20)(4540,"code",28),e(4541,"boolean"),t()(),n(4542,"td",23)(4543,"em")(4544,"strong"),e(4545,"(opcional)"),t()(),n(4546,"p"),e(4547,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),n(4548,"h4",40)(4549,"code",5),e(4550,"PoLookupColumn"),t()(),n(4551,"div",2)(4552,"p"),e(4553,"Interface para configura\xE7\xE3o das colunas do po-lookup."),t()(),n(4554,"h4",12),e(4555,"Propriedades"),t(),n(4556,"table",13)(4557,"tr",14)(4558,"th",15),e(4559,"Nome"),t(),n(4560,"th",15),e(4561,"Tipo"),t(),n(4562,"th",15),e(4563,"Descri\xE7\xE3o"),t()(),n(4564,"tr",16)(4565,"td",17)(4566,"div",24)(4567,"span",25),e(4568," fieldLabel"),i(4569,"br"),t()()(),n(4570,"td",20)(4571,"code",28),e(4572,"boolean"),t()(),n(4573,"td",23)(4574,"em")(4575,"strong"),e(4576,"(opcional)"),t()(),n(4577,"p"),e(4578,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),t(),n(4579,"p"),e(4580,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),t(),n(4581,"p"),e(4582,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),n(4583,"code"),e(4584,"p-field-format"),t(),e(4585," ou "),n(4586,"code"),e(4587,"p-field-label"),t(),e(4588," forem configurados no componente."),t()()(),n(4589,"tr",16)(4590,"td",17)(4591,"div",24)(4592,"span",25),e(4593," format"),i(4594,"br"),t()()(),n(4595,"td",20)(4596,"code",26),e(4597,"string"),t()(),n(4598,"td",23)(4599,"em")(4600,"strong"),e(4601,"(opcional)"),t()(),n(4602,"p"),e(4603,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),n(4604,"ul")(4605,"li"),e(4606,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),n(4607,"li"),e(4608,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),n(4609,"tr",16)(4610,"td",17)(4611,"div",24)(4612,"span",25),e(4613," label"),i(4614,"br"),t()()(),n(4615,"td",20)(4616,"code",26),e(4617,"string"),t()(),n(4618,"td",23)(4619,"em")(4620,"strong"),e(4621,"(opcional)"),t()(),n(4622,"p"),e(4623,"Texto para t\xEDtulo da coluna."),t(),n(4624,"p"),e(4625,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),n(4626,"em"),e(4627,"label"),t(),e(4628," o valor da propriedade "),n(4629,"em"),e(4630,"property"),t(),e(4631," com a primeira letra em mai\xFAsculo."),t()()(),n(4632,"tr",16)(4633,"td",17)(4634,"div",24)(4635,"span",25),e(4636," property"),i(4637,"br"),t()()(),n(4638,"td",20)(4639,"code",26),e(4640,"string"),t()(),n(4641,"td",23)(4642,"em")(4643,"strong"),e(4644,"(opcional)"),t()(),n(4645,"p"),e(4646,"Nome identificador da coluna."),t()()(),n(4647,"tr",16)(4648,"td",17)(4649,"div",24)(4650,"span",25),e(4651," type"),i(4652,"br"),t()()(),n(4653,"td",20)(4654,"code",26),e(4655,"string"),t()(),n(4656,"td",23)(4657,"em")(4658,"strong"),e(4659,"(opcional)"),t()(),n(4660,"p"),e(4661,"Tipo da coluna:"),t(),n(4662,"ul")(4663,"li"),e(4664,"string (padr\xE3o): textos"),t(),n(4665,"li"),e(4666,"number: valores num\xE9ricos"),t(),n(4667,"li"),e(4668,"date: data"),t(),n(4669,"li"),e(4670,"currency: valores monet\xE1rios"),t(),n(4671,"li"),e(4672,"dateTime: data e hora"),t()()()(),n(4673,"tr",16)(4674,"td",17)(4675,"div",24)(4676,"span",25),e(4677," width"),i(4678,"br"),t()()(),n(4679,"td",20)(4680,"code",26),e(4681,"string"),t()(),n(4682,"td",23)(4683,"em")(4684,"strong"),e(4685,"(opcional)"),t()(),n(4686,"p"),e(4687,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()(),n(4688,"h4",40)(4689,"code",5),e(4690,"PoLookupFilter"),t()(),n(4691,"div",2)(4692,"p"),e(4693,"Define o tipo de busca utilizado no po-lookup."),t()(),n(4694,"h4",12),e(4695,"M\xE9todos"),t(),n(4696,"table",38)(4697,"tr",16)(4698,"th",39)(4699,"div",24)(4700,"h4")(4701,"span",25),e(4702," getFilteredItems "),t()()()()(),n(4703,"tr",23)(4704,"td",23)(4705,"p"),e(4706,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),n(4707,"em"),e(4708,"Observable"),t(),e(4709," com a resposta da API no formato da interface "),n(4710,"code"),e(4711,"PoLookupResponseApi"),t(),e(4712,"."),t()()()(),n(4713,"h5")(4714,"b"),e(4715,"Par\xE2metros"),t()(),n(4716,"table",13)(4717,"tr",14)(4718,"th",15),e(4719,"Nome"),t(),n(4720,"th",15),e(4721,"Tipo"),t(),n(4722,"th",15),e(4723,"Descri\xE7\xE3o"),t()(),n(4724,"tr",16)(4725,"td",17),e(4726," params"),t(),n(4727,"td",20)(4728,"code",74),e(4729," PoLookupFilteredItemsParams "),t()(),n(4730,"td",23)(4731,"p"),e(4732,"Objeto enviado por par\xE2metro que implementa a interface "),n(4733,"code"),e(4734,"PoLookupFilteredItemsParams"),t(),e(4735,"."),t()()()(),i(4736,"br"),n(4737,"table",38)(4738,"tr",16)(4739,"th",39)(4740,"div",24)(4741,"h4")(4742,"span",25),e(4743," getObjectByValue "),t()()()()(),n(4744,"tr",23)(4745,"td",23)(4746,"p"),e(4747,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),n(4748,"p"),e(4749,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),t()()()(),n(4750,"h5")(4751,"b"),e(4752,"Par\xE2metros"),t()(),n(4753,"table",13)(4754,"tr",14)(4755,"th",15),e(4756,"Nome"),t(),n(4757,"th",15),e(4758,"Tipo"),t(),n(4759,"th",15),e(4760,"Descri\xE7\xE3o"),t()(),n(4761,"tr",16)(4762,"td",17),e(4763," value"),t(),n(4764,"td",20)(4765,"code",26),e(4766," string "),t(),n(4767,"code",68),e(4768," Array<any> "),t()(),n(4769,"td",23)(4770,"p"),e(4771,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),n(4772,"tr",16)(4773,"td",17),e(4774," filterParams"),t(),n(4775,"td",20)(4776,"code",74),e(4777," any "),t()(),n(4778,"td",23)(4779,"p"),e(4780,"Valor informado atrav\xE9s da propriedade "),n(4781,"code"),e(4782,"p-filter-params"),t(),e(4783,"."),t()()()(),i(4784,"br"),n(4785,"h4",40)(4786,"code",5),e(4787,"PoLookupFilteredItemsParams"),t()(),n(4788,"div",2)(4789,"p"),e(4790,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),n(4791,"code"),e(4792,"getFilteredItems"),t(),e(4793,"."),t()(),n(4794,"h4",12),e(4795,"Propriedades"),t(),n(4796,"table",13)(4797,"tr",14)(4798,"th",15),e(4799,"Nome"),t(),n(4800,"th",15),e(4801,"Tipo"),t(),n(4802,"th",15),e(4803,"Descri\xE7\xE3o"),t()(),n(4804,"tr",16)(4805,"td",17)(4806,"div",24)(4807,"span",25),e(4808," advancedFilters"),i(4809,"br"),t()()(),n(4810,"td",20)(4811,"code",75),e(4812,`{ [key: string]: any;
}`),t()(),n(4813,"td",23)(4814,"em")(4815,"strong"),e(4816,"(opcional)"),t()(),n(4817,"p"),e(4818,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),t()()(),n(4819,"tr",16)(4820,"td",17)(4821,"div",24)(4822,"span",25),e(4823," filter"),i(4824,"br"),t()()(),n(4825,"td",20)(4826,"code",26),e(4827,"string"),t()(),n(4828,"td",23)(4829,"em")(4830,"strong"),e(4831,"(opcional)"),t()(),n(4832,"p"),e(4833,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),n(4834,"tr",16)(4835,"td",17)(4836,"div",24)(4837,"span",25),e(4838," filterParams"),i(4839,"br"),t()()(),n(4840,"td",20)(4841,"code",32),e(4842,"any"),t()(),n(4843,"td",23)(4844,"em")(4845,"strong"),e(4846,"(opcional)"),t()(),n(4847,"p"),e(4848,"Valor informado atrav\xE9s da propriedade "),n(4849,"code"),e(4850,"p-filter-params"),t(),e(4851,"."),t()()(),n(4852,"tr",16)(4853,"td",17)(4854,"div",24)(4855,"span",25),e(4856," order"),i(4857,"br"),t()()(),n(4858,"td",20)(4859,"code",26),e(4860,"string"),t()(),n(4861,"td",23)(4862,"em")(4863,"strong"),e(4864,"(opcional)"),t()(),n(4865,"p"),e(4866,"Coluna que est\xE1 sendo ordenada na tabela."),t(),n(4867,"ul")(4868,"li"),e(4869,"Coluna decrescente ser\xE1 informada da seguinte forma: "),n(4870,"code"),e(4871,"-<colunaOrdenada>"),t(),e(4872,", por exemplo "),n(4873,"code"),e(4874,"-name"),t(),e(4875,"."),t(),n(4876,"li"),e(4877,"Coluna ascendente ser\xE1 informada da seguinte forma: "),n(4878,"code"),e(4879,"<colunaOrdenada>"),t(),e(4880,", por exemplo "),n(4881,"code"),e(4882,"name"),t(),e(4883,"."),t()()()(),n(4884,"tr",16)(4885,"td",17)(4886,"div",24)(4887,"span",25),e(4888," page"),i(4889,"br"),t()()(),n(4890,"td",20)(4891,"code",42),e(4892,"number"),t()(),n(4893,"td",23)(4894,"em")(4895,"strong"),e(4896,"(opcional)"),t()(),n(4897,"p"),e(4898,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),n(4899,"tr",16)(4900,"td",17)(4901,"div",24)(4902,"span",25),e(4903," pageSize"),i(4904,"br"),t()()(),n(4905,"td",20)(4906,"code",42),e(4907,"number"),t()(),n(4908,"td",23)(4909,"em")(4910,"strong"),e(4911,"(opcional)"),t()(),n(4912,"p"),e(4913,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()(),n(4914,"h4",40)(4915,"code",5),e(4916,"PoLookupLiterals"),t()(),n(4917,"div",2)(4918,"p"),e(4919,"Interface para defini\xE7\xE3o das literais usadas no "),n(4920,"code"),e(4921,"po-lookup"),t(),e(4922,"."),t()(),n(4923,"h4",12),e(4924,"Propriedades"),t(),n(4925,"table",13)(4926,"tr",14)(4927,"th",15),e(4928,"Nome"),t(),n(4929,"th",15),e(4930,"Tipo"),t(),n(4931,"th",15),e(4932,"Descri\xE7\xE3o"),t()(),n(4933,"tr",16)(4934,"td",17)(4935,"div",24)(4936,"span",25),e(4937," clean"),i(4938,"br"),t()()(),n(4939,"td",20)(4940,"code",26),e(4941,"string"),t()(),n(4942,"td",23)(4943,"em")(4944,"strong"),e(4945,"(opcional)"),t()(),n(4946,"p"),e(4947,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),t()()(),n(4948,"tr",16)(4949,"td",17)(4950,"div",24)(4951,"span",25),e(4952," modalAdvancedSearch"),i(4953,"br"),t()()(),n(4954,"td",20)(4955,"code",26),e(4956,"string"),t()(),n(4957,"td",23)(4958,"em")(4959,"strong"),e(4960,"(opcional)"),t()(),n(4961,"p"),e(4962,"Texto do link de busca avan\xE7ada."),t(),n(4963,"p"),e(4964,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),t()()(),n(4965,"tr",16)(4966,"td",17)(4967,"div",24)(4968,"span",25),e(4969," modalAdvancedSearchPrimaryActionLabel"),i(4970,"br"),t()()(),n(4971,"td",20)(4972,"code",26),e(4973,"string"),t()(),n(4974,"td",23)(4975,"em")(4976,"strong"),e(4977,"(opcional)"),t()(),n(4978,"p"),e(4979,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),t()()(),n(4980,"tr",16)(4981,"td",17)(4982,"div",24)(4983,"span",25),e(4984," modalAdvancedSearchSecondaryActionLabel"),i(4985,"br"),t()()(),n(4986,"td",20)(4987,"code",26),e(4988,"string"),t()(),n(4989,"td",23)(4990,"em")(4991,"strong"),e(4992,"(opcional)"),t()(),n(4993,"p"),e(4994,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),t()()(),n(4995,"tr",16)(4996,"td",17)(4997,"div",24)(4998,"span",25),e(4999," modalAdvancedSearchTitle"),i(5e3,"br"),t()()(),n(5001,"td",20)(5002,"code",26),e(5003,"string"),t()(),n(5004,"td",23)(5005,"em")(5006,"strong"),e(5007,"(opcional)"),t()(),n(5008,"p"),e(5009,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),t()()(),n(5010,"tr",16)(5011,"td",17)(5012,"div",24)(5013,"span",25),e(5014," modalDisclaimerGroupTitle"),i(5015,"br"),t()()(),n(5016,"td",20)(5017,"code",26),e(5018,"string"),t()(),n(5019,"td",23)(5020,"em")(5021,"strong"),e(5022,"(opcional)"),t()(),n(5023,"p"),e(5024,"Texto exibido no t\xEDtulo do disclaimer."),t()()(),n(5025,"tr",16)(5026,"td",17)(5027,"div",24)(5028,"span",25),e(5029," modalPlaceholder"),i(5030,"br"),t()()(),n(5031,"td",20)(5032,"code",26),e(5033,"string"),t()(),n(5034,"td",23)(5035,"em")(5036,"strong"),e(5037,"(opcional)"),t()(),n(5038,"p"),e(5039,"Texto exibido no placeholder do input da modal."),t()()(),n(5040,"tr",16)(5041,"td",17)(5042,"div",24)(5043,"span",25),e(5044," modalPrimaryActionLabel"),i(5045,"br"),t()()(),n(5046,"td",20)(5047,"code",26),e(5048,"string"),t()(),n(5049,"td",23)(5050,"em")(5051,"strong"),e(5052,"(opcional)"),t()(),n(5053,"p"),e(5054,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),n(5055,"tr",16)(5056,"td",17)(5057,"div",24)(5058,"span",25),e(5059," modalSecondaryActionLabel"),i(5060,"br"),t()()(),n(5061,"td",20)(5062,"code",26),e(5063,"string"),t()(),n(5064,"td",23)(5065,"em")(5066,"strong"),e(5067,"(opcional)"),t()(),n(5068,"p"),e(5069,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),n(5070,"tr",16)(5071,"td",17)(5072,"div",24)(5073,"span",25),e(5074," modalTableLoadMoreData"),i(5075,"br"),t()()(),n(5076,"td",20)(5077,"code",26),e(5078,"string"),t()(),n(5079,"td",23)(5080,"em")(5081,"strong"),e(5082,"(opcional)"),t()(),n(5083,"p"),e(5084,"Label do "),n(5085,"code"),e(5086,"button"),t(),e(5087," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),t()()(),n(5088,"tr",16)(5089,"td",17)(5090,"div",24)(5091,"span",25),e(5092," modalTableLoadingData"),i(5093,"br"),t()()(),n(5094,"td",20)(5095,"code",26),e(5096,"string"),t()(),n(5097,"td",23)(5098,"em")(5099,"strong"),e(5100,"(opcional)"),t()(),n(5101,"p"),e(5102,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),t()()(),n(5103,"tr",16)(5104,"td",17)(5105,"div",24)(5106,"span",25),e(5107," modalTableNoColumns"),i(5108,"br"),t()()(),n(5109,"td",20)(5110,"code",26),e(5111,"string"),t()(),n(5112,"td",23)(5113,"em")(5114,"strong"),e(5115,"(opcional)"),t()(),n(5116,"p"),e(5117,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),t()()(),n(5118,"tr",16)(5119,"td",17)(5120,"div",24)(5121,"span",25),e(5122," modalTableNoData"),i(5123,"br"),t()()(),n(5124,"td",20)(5125,"code",26),e(5126,"string"),t()(),n(5127,"td",23)(5128,"em")(5129,"strong"),e(5130,"(opcional)"),t()(),n(5131,"p"),e(5132,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),t()()(),n(5133,"tr",16)(5134,"td",17)(5135,"div",24)(5136,"span",25),e(5137," modalTitle"),i(5138,"br"),t()()(),n(5139,"td",20)(5140,"code",26),e(5141,"string"),t()(),n(5142,"td",23)(5143,"em")(5144,"strong"),e(5145,"(opcional)"),t()(),n(5146,"p"),e(5147,"Texto exibido no t\xEDtulo da modal."),t()()(),n(5148,"tr",16)(5149,"td",17)(5150,"div",24)(5151,"span",25),e(5152," search"),i(5153,"br"),t()()(),n(5154,"td",20)(5155,"code",26),e(5156,"string"),t()(),n(5157,"td",23)(5158,"em")(5159,"strong"),e(5160,"(opcional)"),t()(),n(5161,"p"),e(5162,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),t()()()(),n(5163,"h4",40)(5164,"code",5),e(5165,"PoLookupResponseApi"),t()(),n(5166,"div",2)(5167,"p"),e(5168,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),t()(),n(5169,"h4",12),e(5170,"Propriedades"),t(),n(5171,"table",13)(5172,"tr",14)(5173,"th",15),e(5174,"Nome"),t(),n(5175,"th",15),e(5176,"Tipo"),t(),n(5177,"th",15),e(5178,"Descri\xE7\xE3o"),t()(),n(5179,"tr",16)(5180,"td",17)(5181,"div",24)(5182,"span",25),e(5183," hasNext"),i(5184,"br"),t()()(),n(5185,"td",20)(5186,"code",28),e(5187,"boolean"),t()(),n(5188,"td",23)(5189,"p"),e(5190,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),n(5191,"tr",16)(5192,"td",17)(5193,"div",24)(5194,"span",25),e(5195," items"),i(5196,"br"),t()()(),n(5197,"td",20)(5198,"code",76),e(5199,"Array<object>"),t()(),n(5200,"td",23)(5201,"p"),e(5202,"Lista de itens retornados."),t()()()(),n(5203,"h3"),e(5204,"Enums"),t(),n(5205,"h4",4)(5206,"code",5),e(5207,"PoTableColumnSpacing"),t()(),n(5208,"div",2)(5209,"p"),e(5210,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),n(5211,"strong"),e(5212,"p-spacing"),t(),e(5213,") do po-table."),t()(),n(5214,"h4",12),e(5215,"Propriedades"),t(),n(5216,"table",13)(5217,"tr",14)(5218,"th",15),e(5219,"Nome"),t(),n(5220,"th",15),e(5221,"Descri\xE7\xE3o"),t()(),n(5222,"tr",16)(5223,"td",17)(5224,"div",24)(5225,"span",25),e(5226," ExtraSmall"),i(5227,"br"),t()()(),n(5228,"td",23)(5229,"p"),e(5230,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 1rem (horizontal)."),t()()(),n(5231,"tr",16)(5232,"td",17)(5233,"div",24)(5234,"span",25),e(5235," Small"),i(5236,"br"),t()()(),n(5237,"td",23)(5238,"p"),e(5239,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()(),n(5240,"tr",16)(5241,"td",17)(5242,"div",24)(5243,"span",25),e(5244," Medium"),i(5245,"br"),t()()(),n(5246,"td",23)(5247,"p"),e(5248,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),n(5249,"tr",16)(5250,"td",17)(5251,"div",24)(5252,"span",25),e(5253," Large"),i(5254,"br"),t()()(),n(5255,"td",23)(5256,"p"),e(5257,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var Ne=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(ne(ve),ne(he))};static \u0275cmp=S({type:a,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title","Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),x("p-click",function(){return o.changeTab("doc")}),i(3,"sample-po-lookup-doc"),t(),n(4,"po-tab",3),x("p-click",function(){return o.changeTab("web")}),i(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view"),t()()()),l&2&&(u("p-actions",o.actions),d(2),u("p-active",o.activeTab==="doc"),d(2),u("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[Pe,C,k,we,Me,_e,Ae,Ve,ze,He],encapsulation:2})}return a})();var ut=[{path:"",component:Ne}],Be=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=Q({type:a});static \u0275inj=G({imports:[ae.forChild(ut),ae]})}return a})();var Mn=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=Q({type:a});static \u0275inj=G({imports:[Le,Be]})}return a})();export{Mn as DocPoLookupModule};
