import{o as x,p as Fe}from"./chunk-KTHQ6LKY.js";import{Da as Ce,Db as Te,Ea as ee,H as ge,Ja as Pe,M as ve,Na as _e,O as xe,S as ye,Ua as V,a as Z,cb as we,eb as Ie,kb as Me,o as be,p as Ee,sa as z,wb as g,xa as T,xb as v,y as $}from"./chunk-K2OBELIH.js";import{$a as D,Ab as M,Bc as U,Ca as C,Cc as X,Dc as me,Ec as de,Fc as Y,Ga as le,Ha as A,Ia as q,Ic as ce,Ja as O,Jc as ue,Ka as n,L as H,La as t,M as K,Ma as l,Nc as he,P as B,Q as re,Qa as Q,Ra as u,Sa as W,Sc as Se,T as h,U as S,Uc as fe,Wa as se,Wc as ie,Yb as pe,Za as k,_a as L,bb as e,db as b,fb as P,gb as _,hb as w,ia as s,ib as G,ja as te,kb as I,pa as f,qa as J,va as ne,yc as N,za as m}from"./chunk-TT2MSOYL.js";var ke=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-search-basic"]],standalone:!1,decls:1,vars:0,template:function(o,i){o&1&&l(0,"po-search")},dependencies:[T],encapsulation:2})}return a})();var Qe=a=>({"docs-sample-code-tabs":a}),Le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-search-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Basic"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-basic/sample-po-search-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-search></po-search>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-basic/sample-po-search-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-search-basic',
  templateUrl: './sample-po-search-basic.component.html',
  standalone: false
})
export class SamplePoSearchBasicComponent {}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-search-basic"),t(),l(23,"hr")),o&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),b(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",I(4,Qe,i.hideSampleCodeTabs)))},dependencies:[M,x,g,v,ke],encapsulation:2})}return a})();var Xe=["poSearch"];function Ye(a,y){if(a&1&&(n(0,"div")(1,"strong"),e(2),t(),e(3),t()),a&2){let r=y.$implicit,o=W().$implicit;s(2),b("",r,": "),s(),b(" ",o[r]," \xA0 ")}}function Ze(a,y){if(a&1&&(n(0,"li"),q(1,Ye,4,2,"div",null,A),t()),a&2){let r=y.$implicit,o=W();s(),O(o.changeFilter(r))}}var De=(()=>{class a{http=B(pe);poSearch;ariaLabel;customLiterals;literals;properties=[];search="";event="";service="https://po-sample-api.onrender.com/v1/heroes";items=[];filteredItems=[];fieldKeys=[];fieldSelect=[];tooltip;icon;filterMode=z.startsWith;searchMode="action";fieldKey;itemsModel;filterModel='["name"]';filterSelectModel;size="medium";customLocateSummary;locateSummary;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"showListbox",label:"Show Listbox"}];iconsOptions=[{label:"fa-search",value:"fa fa-search"},{label:"an-user",value:"an an-user"},{label:"an-magnifying-glass",value:"an an-magnifying-glass"}];filterModeOptions=[{label:"Starts With",value:z.startsWith},{label:"Contains",value:z.contains},{label:"Ends With",value:z.endsWith}];searchModeOptions=[{label:"Action",value:"action"},{label:"Trigger",value:"trigger"},{label:"Locate",value:"locate"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}ngOnChanges(r){r.items&&(this.filteredItems=this.items)}changeFilter(r){return Object.keys(r)}onChangeService(){this.http.get(this.service).subscribe(r=>{let o=r.items;Array.isArray(o)&&o.length>0&&(this.items=o,this.filteredItems=o,this.fieldKeys=["name"])})}updateFilterKeys(r){this.fieldKeys=this.convertToArray(r)}updateFilterSelect(r){this.fieldSelect=this.convertToArray(r)}filter(r){this.filteredItems=r,this.event=r.length===0?"p-change-model":"p-filtered-items-change"}changeItems(r){try{let o=JSON.parse(r);Array.isArray(o)&&(this.filteredItems=o,this.items=o)}catch{}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals??"")}catch{this.customLiterals=void 0}}changeEvent(r){setTimeout(()=>{this.event=r})}changeLocateSummary(){try{this.customLocateSummary=JSON.parse(this.locateSummary??"")}catch{this.customLocateSummary=void 0}}restore(){this.ariaLabel="",this.search="",this.event="",this.icon=void 0,this.customLiterals=void 0,this.customLocateSummary=void 0,this.properties=[],this.filteredItems=void 0,this.items=void 0,this.itemsModel=void 0,this.filterModel='["name"]',this.filterSelectModel="",this.fieldKeys=void 0,this.fieldSelect=void 0,this.filterMode=z.startsWith,this.searchMode="action",this.literals=void 0,this.locateSummary=void 0,this.size="medium",this.cleanInput(),this.onChangeService()}cleanInput(){try{this.poSearch.clearSearch()}catch{}}convertToArray(r){try{return JSON.parse(r)}catch{return}}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-search-labs"]],viewQuery:function(o,i){if(o&1&&k(Xe,7),o&2){let p;L(p=D())&&(i.poSearch=p.first)}},standalone:!1,features:[re],decls:32,vars:32,consts:[["poSearch",""],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-blur","p-change-model","p-filtered-items-change","p-locate-next","p-locate-previous","p-aria-label","p-disabled","p-filter-keys","p-filter-type","p-filter-select","p-icon","p-items","p-literals","p-locate-summary","p-search-type","p-show-listbox","p-size"],[1,"po-md-12"],[3,"p-label"],[1,"sample-list-search","po-md-12","row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","ariaLabel","p-label","Aria label",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","items","p-label","Items","p-help",'Ex.: [{ "cidade": "S\xE3o Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "T\xF3quio", "pais": "Jap\xE3o" }]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","searchMode","p-label","Search Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-label","Filter Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locateSummary","p-help",'{ "currentIndex": 1000, "total": 1000 }',"p-label","Locate Summary",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"search": "Search people"}',"p-label","Literals",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","Filter Keys","p-label","Filter Keys","p-help",'Ex.: ["cidade", "pais"]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","Filter Select","p-label","Filter Select","p-help",'Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(o,i){if(o&1){let p=Q();n(0,"div",2)(1,"po-search",3,0),u("p-blur",function(){return h(p),S(i.changeEvent("p-blur"))})("p-change-model",function(){return h(p),S(i.changeEvent("p-change-model"))})("p-filtered-items-change",function(){return h(p),S(i.changeEvent("p-filtered-items-change"))})("p-locate-next",function(){return h(p),S(i.changeEvent("p-locate-next"))})("p-locate-previous",function(){return h(p),S(i.changeEvent("p-locate-previous"))}),t()(),l(3,"po-divider"),n(4,"div",2)(5,"po-accordion",4)(6,"po-accordion-item",5)(7,"po-widget",4)(8,"ul",6),q(9,Ze,3,0,"li",null,A),t()()()()(),l(11,"po-divider"),n(12,"div",2),l(13,"po-info",7)(14,"po-info",8),t(),l(15,"po-divider"),n(16,"form",null,1)(18,"po-input",9),w("ngModelChange",function(d){return h(p),_(i.ariaLabel,d)||(i.ariaLabel=d),S(d)}),t(),n(19,"po-input",10),w("ngModelChange",function(d){return h(p),_(i.itemsModel,d)||(i.itemsModel=d),S(d)}),u("p-change-model",function(d){return h(p),S(i.changeItems(d))}),t(),n(20,"po-checkbox-group",11),w("ngModelChange",function(d){return h(p),_(i.properties,d)||(i.properties=d),S(d)}),t(),n(21,"po-radio-group",12),w("ngModelChange",function(d){return h(p),_(i.icon,d)||(i.icon=d),S(d)}),t(),n(22,"po-radio-group",13),w("ngModelChange",function(d){return h(p),_(i.searchMode,d)||(i.searchMode=d),S(d)}),t(),n(23,"po-radio-group",14),w("ngModelChange",function(d){return h(p),_(i.filterMode,d)||(i.filterMode=d),S(d)}),t(),n(24,"po-radio-group",15),w("ngModelChange",function(d){return h(p),_(i.size,d)||(i.size=d),S(d)}),t(),n(25,"po-input",16),w("ngModelChange",function(d){return h(p),_(i.locateSummary,d)||(i.locateSummary=d),S(d)}),u("p-change",function(){return h(p),S(i.changeLocateSummary())}),t(),n(26,"po-input",17),w("ngModelChange",function(d){return h(p),_(i.literals,d)||(i.literals=d),S(d)}),u("p-change",function(){return h(p),S(i.changeLiterals())}),t(),n(27,"po-input",18),w("ngModelChange",function(d){return h(p),_(i.filterModel,d)||(i.filterModel=d),S(d)}),u("p-change-model",function(d){return h(p),S(i.updateFilterKeys(d))}),t(),n(28,"po-input",19),w("ngModelChange",function(d){return h(p),_(i.filterSelectModel,d)||(i.filterSelectModel=d),S(d)}),u("p-change",function(d){return h(p),S(i.updateFilterSelect(d))}),t(),l(29,"po-divider"),n(30,"div",2)(31,"po-button",20),u("p-click",function(){return h(p),S(i.restore())}),t()()()}o&2&&(s(),m("p-aria-label",i.ariaLabel)("p-disabled",i.properties.includes("disabled"))("p-filter-keys",i.fieldKeys)("p-filter-type",i.filterMode)("p-filter-select",i.fieldSelect)("p-icon",i.icon)("p-items",i.items)("p-literals",i.customLiterals)("p-locate-summary",i.customLocateSummary)("p-search-type",i.searchMode)("p-show-listbox",i.properties.includes("showListbox"))("p-size",i.size),s(5),se("p-label","Itens encontrados: ",i.filteredItems==null?null:i.filteredItems.length,""),s(3),O(i.filteredItems),s(4),m("p-value",i.search),s(),m("p-value",i.event),s(4),P("ngModel",i.ariaLabel),s(),P("ngModel",i.itemsModel),s(),P("ngModel",i.properties),m("p-options",i.propertiesOptions),s(),P("ngModel",i.icon),m("p-options",i.iconsOptions),s(),P("ngModel",i.searchMode),m("p-options",i.searchModeOptions),s(),P("ngModel",i.filterMode),m("p-options",i.filterModeOptions),s(),P("ngModel",i.size),m("p-options",i.sizeOptions),s(),P("ngModel",i.locateSummary),s(),P("ngModel",i.literals),s(),P("ngModel",i.filterModel),s(),P("ngModel",i.filterSelectModel))},dependencies:[Y,U,X,de,me,Ee,be,$,Z,ve,xe,ee,V,Te,T],styles:[".sample-list-search[_ngcontent-%COMP%]{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.sample-list-search[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}"]})}return a})();var et=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-search-labs-view"]],standalone:!1,decls:27,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Labs"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-labs/sample-po-search-labs.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-search
    #poSearch
    class="po-md-12"
    [p-aria-label]="ariaLabel"
    [p-disabled]="properties.includes('disabled')"
    [p-filter-keys]="fieldKeys"
    [p-filter-type]="filterMode"
    [p-filter-select]="fieldSelect"
    [p-icon]="icon"
    [p-items]="items"
    [p-literals]="customLiterals"
    [p-locate-summary]="customLocateSummary"
    [p-search-type]="searchMode"
    [p-show-listbox]="properties.includes('showListbox')"
    [p-size]="size"
    (p-blur)="changeEvent('p-blur')"
    (p-change-model)="changeEvent('p-change-model')"
    (p-filtered-items-change)="changeEvent('p-filtered-items-change')"
    (p-locate-next)="changeEvent('p-locate-next')"
    (p-locate-previous)="changeEvent('p-locate-previous')"
  ></po-search>
</div>

<po-divider />
<div class="po-row">
  <po-accordion class="po-md-12">
    <po-accordion-item p-label="Itens encontrados: { { filteredItems?.length }}">
      <po-widget class="po-md-12">
        <ul class="sample-list-search po-md-12 row">
          @for (item of filteredItems; track item) {
            <li>
              @for (key of changeFilter(item); track key) {
                <div>
                  <strong>{ { key }}: </strong> { { item[key] }} &nbsp;
                </div>
              }
            </li>
          }
        </ul>
      </po-widget>
    </po-accordion-item>
  </po-accordion>
</div>
<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="search"> </po-info>

  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<!-- Properties -->
<form #f="ngForm">
  <po-input class="po-lg-6" name="ariaLabel" p-label="Aria label" [(ngModel)]="ariaLabel"></po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="items"
    [(ngModel)]="itemsModel"
    p-label="Items"
    p-help='Ex.: [{ "cidade": "S\xE3o Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "T\xF3quio", "pais": "Jap\xE3o" }]'
    (p-change-model)="changeItems($event)"
  >
  </po-input>

  <po-checkbox-group
    class="po-lg-6 po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group class="po-lg-6 po-md-12" name="icon" [(ngModel)]="icon" p-label="Icon" [p-options]="iconsOptions">
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="searchMode"
    [(ngModel)]="searchMode"
    p-label="Search Mode"
    [p-options]="searchModeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="filterMode"
    [(ngModel)]="filterMode"
    p-label="Filter Mode"
    [p-options]="filterModeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <po-input
    class="po-lg-6 po-md-12"
    name="locateSummary"
    [(ngModel)]="locateSummary"
    p-help='{ "currentIndex": 1000, "total": 1000 }'
    p-label="Locate Summary"
    (p-change)="changeLocateSummary()"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"search": "Search people"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="Filter Keys"
    [(ngModel)]="filterModel"
    p-label="Filter Keys"
    p-help='Ex.: ["cidade", "pais"]'
    (p-change-model)="updateFilterKeys($event)"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="Filter Select"
    [(ngModel)]="filterSelectModel"
    p-label="Filter Select"
    p-help='Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]'
    (p-change)="updateFilterSelect($event)"
  >
  </po-input>

  <po-divider />

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-labs/sample-po-search-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild, inject } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSearchComponent,
  PoSearchFilterMode,
  PoSearchLiterals
} from '@po-ui/ng-components';
import { PoSearchLocateSummary } from '@po-ui/ng-components/lib/components/po-search/interfaces/po-search-locate-summary.interface';

@Component({
  selector: 'sample-po-search-labs',
  templateUrl: './sample-po-search-labs.component.html',
  styles: [
    \`
      .sample-list-search {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
      }

      .sample-list-search strong {
        text-transform: capitalize;
      }
    \`
  ],
  standalone: false
})
export class SamplePoSearchLabsComponent implements OnInit, OnChanges {
  protected http = inject(HttpClient);

  @ViewChild('poSearch', { static: true }) poSearch!: PoSearchComponent;

  ariaLabel?: any;
  customLiterals?: PoSearchLiterals;
  literals?: string;
  properties: Array<string> = [];
  search: string = '';
  event: string = '';
  service: string = 'https://po-sample-api.onrender.com/v1/heroes';
  items: Array<any> = [];
  filteredItems: Array<any> = [];
  fieldKeys?: Array<any> = [];
  fieldSelect?: Array<any> = [];
  tooltip?: string;
  icon?: string;
  filterMode: PoSearchFilterMode = PoSearchFilterMode.startsWith;
  searchMode: 'action' | 'trigger' | 'locate' = 'action';
  fieldKey?: any;
  itemsModel?: any;
  filterModel: any = '["name"]';
  filterSelectModel?: any;
  size: string = 'medium';
  customLocateSummary?: PoSearchLocateSummary;
  locateSummary?: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'showListbox', label: 'Show Listbox' }
  ];

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'fa-search', value: 'fa fa-search' },
    { label: 'an-user', value: 'an an-user' },
    { label: 'an-magnifying-glass', value: 'an an-magnifying-glass' }
  ];

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: PoSearchFilterMode.startsWith },
    { label: 'Contains', value: PoSearchFilterMode.contains },
    { label: 'Ends With', value: PoSearchFilterMode.endsWith }
  ];

  public readonly searchModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Action', value: 'action' },
    { label: 'Trigger', value: 'trigger' },
    { label: 'Locate', value: 'locate' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.filteredItems = this.items;
    }
  }

  changeFilter(item: any) {
    return Object.keys(item);
  }

  onChangeService() {
    this.http.get(this.service).subscribe((response: any) => {
      const items = response.items;
      if (Array.isArray(items) && items.length > 0) {
        this.items = items;
        this.filteredItems = items;
        this.fieldKeys = ['name'];
      }
    });
  }

  updateFilterKeys(event: string): void {
    this.fieldKeys = this.convertToArray(event);
  }

  updateFilterSelect(event: string): void {
    this.fieldSelect = this.convertToArray(event);
  }

  filter(event: Array<any>) {
    this.filteredItems = event;

    this.event = event.length === 0 ? 'p-change-model' : 'p-filtered-items-change';
  }

  changeItems(items: string): void {
    try {
      const newItems = JSON.parse(items);
      if (Array.isArray(newItems)) {
        this.filteredItems = newItems;
        this.items = newItems;
      }
    } catch {}
  }

  changeLiterals(): void {
    try {
      this.customLiterals = JSON.parse(this.literals ?? '');
    } catch {
      this.customLiterals = undefined;
    }
  }

  changeEvent(event: string): void {
    setTimeout(() => {
      this.event = event;
    });
  }

  changeLocateSummary(): void {
    try {
      this.customLocateSummary = JSON.parse(this.locateSummary ?? '');
    } catch {
      this.customLocateSummary = undefined;
    }
  }

  restore(): void {
    this.ariaLabel = '';
    this.search = '';
    this.event = '';
    this.icon = undefined;
    this.customLiterals = undefined;
    this.customLocateSummary = undefined;
    this.properties = [];
    this.filteredItems = undefined;
    this.items = undefined;
    this.itemsModel = undefined;
    this.filterModel = '["name"]';
    this.filterSelectModel = '';
    this.fieldKeys = undefined;
    this.fieldSelect = undefined;
    this.filterMode = PoSearchFilterMode.startsWith;
    this.searchMode = 'action';
    this.literals = undefined;
    this.locateSummary = undefined;
    this.size = 'medium';
    this.cleanInput();
    this.onChangeService();
  }

  cleanInput(): void {
    try {
      this.poSearch.clearSearch();
    } catch {}
  }

  private convertToArray(value: string): Array<any> | undefined {
    try {
      return JSON.parse(value);
    } catch {
      return undefined;
    }
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-search-labs/sample-po-search-labs.service.ts"),t(),l(23,"pre",9),t()()()(),n(24,"div",10),l(25,"sample-po-search-labs"),t(),l(26,"hr")),o&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),b(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",I(4,et,i.hideSampleCodeTabs)))},dependencies:[M,x,g,v,De],encapsulation:2})}return a})();var ae=(()=>{class a{getItems(){return[{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=H({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function nt(a,y){if(a&1&&(n(0,"div",0),l(1,"po-info",4)(2,"po-info",5)(3,"po-info",6),t()),a&2){let r=y.$implicit;s(),m("p-value",r.name),s(),m("p-value",r.nickname),s(),m("p-value",r.email)}}function it(a,y){a&1&&l(0,"div")}function at(a,y){if(a&1&&(n(0,"li",7),e(1),ne(2,it,1,0,"div"),t(),n(3,"li",7),e(4),t()),a&2){let r=y.$implicit,o=W();s(),b(" Nickname: ",r.nickname," "),s(),le(o.compareObjects(r)?2:-1),s(2),b("Email: ",r.email,"")}}var Ae=(()=>{class a{service=B(ae);items;filterKeys=["name","nickname","email"];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[])}compareObjects(r){return!!this.peopleFiltered.includes(r)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-search-find-people"]],standalone:!1,features:[G([ae])],decls:8,vars:3,consts:[[1,"po-row"],["p-aria-label","Po Search",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"],[1,"po-md-12","po-text-color-neutral-dark-40"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"po-search",1),u("p-filtered-items-change",function(c){return i.filtered(c)}),t()(),l(2,"hr"),q(3,nt,4,3,"div",0,A),l(5,"hr"),n(6,"po-list-view",2),ne(7,at,5,3,"ng-template",3),t()),o&2&&(s(),m("p-items",i.items)("p-filter-keys",i.filterKeys),s(2),O(i.peopleFiltered),s(3),m("p-items",i.items))},dependencies:[V,Ie,we,T],styles:["li[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center}","li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:.75em;height:.75em;border-radius:50%;background-color:green;margin-left:10px}"]})}return a})();var rt=a=>({"docs-sample-code-tabs":a}),qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-search-find-people-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Find People"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-find-people/sample-po-search-find-people.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    [p-filter-keys]="filterKeys"
    (p-filtered-items-change)="filtered($event)"
  ></po-search>
</div>

<hr />

@for (people of peopleFiltered; track people) {
  <div class="po-row">
    <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>
    <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>
    <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
  </div>
}

<hr />

<po-list-view p-property-title="name" [p-items]="items">
  <ng-template p-list-view-content-template let-item>
    <li class="po-md-12 po-text-color-neutral-dark-40">
      Nickname: { { item.nickname }}
      @if (compareObjects(item)) {
        <div></div>
      }
    </li>
    <li class="po-md-12 po-text-color-neutral-dark-40">Email: { { item.email }}</li>
  </ng-template>
</po-list-view>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-find-people/sample-po-search-find-people.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { SamplePoSearchFindPeopleService } from './sample-po-search-find-people.service';

@Component({
  selector: 'sample-po-search-find-people',
  templateUrl: './sample-po-search-find-people.component.html',
  styles: [
    \`
      li {
        list-style: none;
        display: flex;
        align-items: center;
      }
    \`,
    \`
      li div {
        width: 0.75em;
        height: 0.75em;
        border-radius: 50%;
        background-color: green;
        margin-left: 10px;
      }
    \`
  ],
  providers: [SamplePoSearchFindPeopleService],
  standalone: false
})
export class SamplePoSearchFindPeopleComponent implements OnInit {
  private service = inject(SamplePoSearchFindPeopleService);

  items: any;
  filterKeys: Array<string> = ['name', 'nickname', 'email'];
  peopleFiltered: Array<any> = [];

  ngOnInit() {
    this.items = this.service.getItems();
  }

  filtered(event: Array<any>) {
    this.peopleFiltered = event;
    if (event.length === 4) {
      this.peopleFiltered = [];
    } else {
      try {
      } catch (error) {
        return undefined;
      }
    }
  }

  compareObjects(value: any) {
    return this.peopleFiltered.includes(value) ? true : false;
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-search-find-people/sample-po-search-find-people.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSearchFindPeopleService {
  getItems(): Array<any> {
    return [
      {
        'id': '0348093615904',
        'name': 'Leonardo Silveiras',
        'birthdate': '1995-07-15T00:00:00-00:00',
        'genre': 'male',
        'city': '4209102',
        'status': 'active',
        'nickname': 'leo.silveira',
        'email': 'leonardo.silveira@gmail.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'Joinville',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': []
      },
      {
        'id': '0648093812893',
        'name': 'Jo\xE3o Severino',
        'birthdate': '1995-10-07T00:00:00-00:00',
        'genre': 'male',
        'city': '4216206',
        'status': 'active',
        'nickname': 'jseverino',
        'email': 'jseverino@yahoo.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Francisco do Sul',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [{ 'id': 109481, 'name': 'Maria', 'age': '10', 'related': 'Daughter', 'birthdate': '2008-12-10' }]
      },
      {
        'id': '0748093840433',
        'name': 'Jos\xE9 Marcos Cardoso',
        'birthdate': '1986-08-01T00:00:00-00:00',
        'genre': 'male',
        'city': '4201307',
        'status': 'inactive',
        'nickname': 'jose',
        'email': 'jose@outlook.com',
        'nationality': 'Brazilian',
        'birthPlace': '3550308',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Inativo',
        'cityName': 'Araquari',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [
          { 'id': 109483, 'name': 'Pedro', 'age': '13', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109484, 'name': 'Paulo', 'age': '15', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109485, 'name': 'Jos\xE9', 'age': '19', 'related': 'Son', 'birthdate': '2008-12-10' }
        ]
      },
      {
        'id': '0848094890811',
        'name': 'Karlo Rodrigues',
        'birthdate': '1989-12-28T00:00:00-00:00',
        'genre': 'male',
        'city': '3550308',
        'status': 'active',
        'nickname': 'krodrigues',
        'email': 'krodrigues@uol.com.br',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Paulo',
        'state': 'S\xE3o Paulo',
        'uf': 'SP',
        'dependents': []
      }
    ];
  }
}
`),t()()()()(),n(25,"div",10),l(26,"sample-po-search-find-people"),t(),l(27,"hr")),o&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),b(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",I(4,rt,i.hideSampleCodeTabs)))},dependencies:[M,x,g,v,Ae],encapsulation:2})}return a})();var oe=(()=>{class a{getItems(){return[{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=H({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function st(a,y){if(a&1&&(n(0,"div",0),l(1,"hr")(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),t()),a&2){let r=y.$implicit;s(2),m("p-value",r.name),s(),m("p-value",r.nickname),s(),m("p-value",r.email)}}var Oe=(()=>{class a{service=B(oe);items;filterKeys=["name","nickname","email"];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[])}compareObjects(r){return!!this.peopleFiltered.includes(r)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-search-listbox"]],standalone:!1,features:[G([oe])],decls:4,vars:2,consts:[[1,"po-row"],["p-aria-label","Po Search","p-show-listbox","true","p-search-type","trigger",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"po-search",1),u("p-filtered-items-change",function(c){return i.filtered(c)}),t()(),q(2,st,5,3,"div",0,A)),o&2&&(s(),m("p-items",i.items)("p-filter-keys",i.filterKeys),s(),O(i.peopleFiltered))},dependencies:[V,T],encapsulation:2})}return a})();var mt=a=>({"docs-sample-code-tabs":a}),Be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-search-listbox-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search With Listbox"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-listbox/sample-po-search-listbox.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    [p-filter-keys]="filterKeys"
    (p-filtered-items-change)="filtered($event)"
    p-show-listbox="true"
    p-search-type="trigger"
  ></po-search>
</div>

@for (people of peopleFiltered; track people) {
  <div class="po-row">
    <hr />
    <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>
    <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>
    <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
  </div>
}
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-listbox/sample-po-search-listbox.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { SamplePoSearchListboxService } from './sample-po-search-listbox.service';

@Component({
  selector: 'sample-po-search-listbox',
  templateUrl: './sample-po-search-listbox.component.html',
  providers: [SamplePoSearchListboxService],
  standalone: false
})
export class SamplePoSearchListboxComponent implements OnInit {
  private service = inject(SamplePoSearchListboxService);

  items: any;
  filterKeys: Array<string> = ['name', 'nickname', 'email'];
  peopleFiltered: Array<any> = [];

  ngOnInit() {
    this.items = this.service.getItems();
  }

  filtered(event: Array<any>) {
    this.peopleFiltered = event;
    if (event.length === 4) {
      this.peopleFiltered = [];
    } else {
      try {
      } catch (error) {
        return undefined;
      }
    }
  }

  compareObjects(value: any) {
    return this.peopleFiltered.includes(value) ? true : false;
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-search-listbox/sample-po-search-listbox.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSearchListboxService {
  getItems(): Array<any> {
    return [
      {
        'id': '0348093615904',
        'name': 'Leonardo Silveiras',
        'birthdate': '1995-07-15T00:00:00-00:00',
        'genre': 'male',
        'city': '4209102',
        'status': 'active',
        'nickname': 'leo.silveira',
        'email': 'leonardo.silveira@gmail.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'Joinville',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': []
      },
      {
        'id': '0648093812893',
        'name': 'Jo\xE3o Severino',
        'birthdate': '1995-10-07T00:00:00-00:00',
        'genre': 'male',
        'city': '4216206',
        'status': 'active',
        'nickname': 'jseverino',
        'email': 'jseverino@yahoo.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Francisco do Sul',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [{ 'id': 109481, 'name': 'Maria', 'age': '10', 'related': 'Daughter', 'birthdate': '2008-12-10' }]
      },
      {
        'id': '0748093840433',
        'name': 'Jos\xE9 Marcos Cardoso',
        'birthdate': '1986-08-01T00:00:00-00:00',
        'genre': 'male',
        'city': '4201307',
        'status': 'inactive',
        'nickname': 'jose',
        'email': 'jose@outlook.com',
        'nationality': 'Brazilian',
        'birthPlace': '3550308',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Inativo',
        'cityName': 'Araquari',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [
          { 'id': 109483, 'name': 'Pedro', 'age': '13', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109484, 'name': 'Paulo', 'age': '15', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109485, 'name': 'Jos\xE9', 'age': '19', 'related': 'Son', 'birthdate': '2008-12-10' }
        ]
      },
      {
        'id': '0848094890811',
        'name': 'Karlo Rodrigues',
        'birthdate': '1989-12-28T00:00:00-00:00',
        'genre': 'male',
        'city': '3550308',
        'status': 'active',
        'nickname': 'krodrigues',
        'email': 'krodrigues@uol.com.br',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Paulo',
        'state': 'S\xE3o Paulo',
        'uf': 'SP',
        'dependents': []
      }
    ];
  }
}
`),t()()()()(),n(25,"div",10),l(26,"sample-po-search-listbox"),t(),l(27,"hr")),o&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),b(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",I(4,mt,i.hideSampleCodeTabs)))},dependencies:[M,x,g,v,Oe],encapsulation:2})}return a})();function ct(a,y){if(a&1&&(n(0,"div",0)(1,"po-container",2),l(2,"po-info",3)(3,"po-info",4)(4,"po-info",5)(5,"po-info",6),t()()),a&2){let r=y.$implicit;s(2),m("p-value",r.name),s(),m("p-value",r.gender),s(),m("p-value",r.planet),s(),m("p-value",r.father)}}var Ne=(()=>{class a{items;filteredItems=[];filterSelect=[{label:"Personal",value:["name","gender"]},{label:"Planet",value:["planet"]},{label:"Family",value:"father"}];ngOnInit(){this.items=[{name:"Anakin Skywalker",gender:"male",planet:"Tatooine",father:"Darth Sidious"},{name:"Luke Skywalker",gender:"male",planet:"Tatooine",father:"Anakin Skywalker"},{name:"Leia Organa",gender:"female",planet:"Alderaan",father:"Anakin Skywalker"},{name:"Han Solo",gender:"male",planet:"Corellia",father:"Ovan"}]}filtered(r){this.filteredItems=r}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-search-filter-select"]],standalone:!1,decls:4,vars:2,consts:[[1,"po-row"],["p-aria-label","Po Search","p-search-type","trigger","p-show-listbox","true","p-disabled","false",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-select"],[1,"po-row","po-mt-2"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Gender",1,"po-md-3",3,"p-value"],["p-label","Planet",1,"po-md-3",3,"p-value"],["p-label","Father",1,"po-md-3",3,"p-value"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"po-search",1),u("p-filtered-items-change",function(c){return i.filtered(c)}),t()(),q(2,ct,6,4,"div",0,A)),o&2&&(s(),m("p-items",i.items)("p-filter-select",i.filterSelect),s(),O(i.filteredItems))},dependencies:[ge,V,T],encapsulation:2})}return a})();var ht=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-search-filter-select-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search With Filter Select + Listbox"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-filter-select/sample-po-search-filter-select.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    (p-filtered-items-change)="filtered($event)"
    p-search-type="trigger"
    [p-filter-select]="filterSelect"
    p-show-listbox="true"
    p-disabled="false"
  ></po-search>
</div>

@for (people of filteredItems; track people) {
  <div class="po-row">
    <po-container class="po-row po-mt-2">
      <po-info class="po-md-3" p-label="Name" [p-value]="people.name"> </po-info>
      <po-info class="po-md-3" p-label="Gender" [p-value]="people.gender"> </po-info>
      <po-info class="po-md-3" p-label="Planet" [p-value]="people.planet"> </po-info>
      <po-info class="po-md-3" p-label="Father" [p-value]="people.father"> </po-info>
    </po-container>
  </div>
}
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-filter-select/sample-po-search-filter-select.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-po-search-filter-select',
  templateUrl: './sample-po-search-filter-select.component.html',
  standalone: false
})
export class SamplePoSearchFilterSelectComponent implements OnInit {
  items: any;
  filteredItems: Array<any> = [];
  filterSelect = [
    { label: 'Personal', value: ['name', 'gender'] },
    { label: 'Planet', value: ['planet'] },
    { label: 'Family', value: 'father' }
  ];

  ngOnInit() {
    this.items = [
      { name: 'Anakin Skywalker', gender: 'male', planet: 'Tatooine', father: 'Darth Sidious' },
      { name: 'Luke Skywalker', gender: 'male', planet: 'Tatooine', father: 'Anakin Skywalker' },
      { name: 'Leia Organa', gender: 'female', planet: 'Alderaan', father: 'Anakin Skywalker' },
      { name: 'Han Solo', gender: 'male', planet: 'Corellia', father: 'Ovan' }
    ];
  }

  filtered(event: Array<any>) {
    this.filteredItems = event;
  }
}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-search-filter-select"),t(),l(23,"hr")),o&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),b(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",I(4,ht,i.hideSampleCodeTabs)))},dependencies:[M,x,g,v,Ne],encapsulation:2})}return a})();var ft=["nameInput"],bt=["cpfInput"],Et=["addressInput"],gt=["numberInput"],vt=["emailInput"],xt=["websiteInput"],yt=["reactiveFormData"],je=(()=>{class a{fb=B(he);nameInput;cpfInput;addressInput;numberInput;emailInput;websiteInput;reactiveFormModal;reactiveForm;filterTargets=[];filteredIndexes=[];currentIndex=-1;firstSearch=!0;locateSummary={currentIndex:0,total:0};filterType=z.endsWith;searchLiterals={search:"Buscar campos"};modalPrimaryAction={label:"Close",action:()=>this.reactiveFormModal.close()};constructor(){this.createForm()}ngAfterViewInit(){this.filterTargets=[{label:"Customer name",index:0,focus:()=>this.nameInput.focus()},{label:"CPF",index:1,focus:()=>this.cpfInput.focus()},{label:"Address",index:2,focus:()=>this.addressInput.focus()},{label:"Number",index:3,focus:()=>this.numberInput.focus()},{label:"Email",index:4,focus:()=>this.emailInput.focus()},{label:"Website",index:5,focus:()=>this.websiteInput.focus()}]}createForm(){this.reactiveForm=this.fb.group({name:["",[N.required,N.minLength(5)]],cpf:["",N.required],address:["",N.required],number:["",N.required],email:["",N.required],website:["",N.required]})}updateSearchTerm(r){console.log("updateSearchTerm");let o=r.toLowerCase();this.filteredIndexes=this.filterTargets.map((p,c)=>({i:c,t:p})).filter(({t:p})=>o&&p.label.toLowerCase().startsWith(o)).map(({i:p})=>p),this.currentIndex=-1;let i=this.filteredIndexes.length;this.locateSummary={currentIndex:0,total:i}}onNextOccurrenceClick(){console.log("onNextOccurrenceClick"),this.goToNextOccurrence(),this.focusCurrent()}onPreviousOccurrenceClick(){console.log("onPreviousOccurrenceClick"),this.goToPreviousOccurrence(),this.focusCurrent()}goToNextOccurrence(){this.filteredIndexes.length&&(this.currentIndex=(this.currentIndex+1)%this.filteredIndexes.length,this.updateSummary())}goToPreviousOccurrence(){this.filteredIndexes.length&&(this.currentIndex=this.currentIndex<=0?this.filteredIndexes.length-1:this.currentIndex-1,this.updateSummary())}updateSummary(){let r=this.filteredIndexes.length,o=r===0||this.currentIndex===-1?0:this.currentIndex+1;this.locateSummary={currentIndex:o,total:r}}focusCurrent(){let r=this.filteredIndexes[this.currentIndex];r!==void 0&&(document.activeElement?.blur(),this.filterTargets[r].focus())}getInputElementByIndex(r){switch(r){case 0:return this.nameInput?.inputEl?.nativeElement??null;case 1:return this.cpfInput?.inputEl?.nativeElement??null;case 2:return this.addressInput?.inputEl?.nativeElement??null;case 3:return this.numberInput?.inputEl?.nativeElement??null;case 4:return this.emailInput?.inputEl?.nativeElement??null;case 5:return this.websiteInput?.inputEl?.nativeElement??null;default:return null}}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-search-fields-locate"]],viewQuery:function(o,i){if(o&1&&(k(ft,7),k(bt,7),k(Et,7),k(gt,7),k(vt,7),k(xt,7),k(yt,7)),o&2){let p;L(p=D())&&(i.nameInput=p.first),L(p=D())&&(i.cpfInput=p.first),L(p=D())&&(i.addressInput=p.first),L(p=D())&&(i.numberInput=p.first),L(p=D())&&(i.emailInput=p.first),L(p=D())&&(i.websiteInput=p.first),L(p=D())&&(i.reactiveFormModal=p.first)}},standalone:!1,decls:35,vars:11,consts:[["nameInput",""],["cpfInput",""],["addressInput",""],["numberInput",""],["emailInput",""],["websiteInput",""],["reactiveFormData",""],[1,"po-row"],[1,"po-ml-1","po-mr-1"],["p-search-type","locate",3,"p-change-model","p-locate-next","p-locate-previous","p-literals","p-locate-summary"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-9"],["formControlName","cpf","p-label","CPF","p-mask","999.999.999-99","p-clean","",1,"po-lg-3"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-lg-6",3,"p-value"],["p-label","CPF",1,"po-lg-6",3,"p-value"],["p-label","Address",1,"po-lg-6",3,"p-value"],["p-label","Number",1,"po-lg-6",3,"p-value"],["p-label","Email",1,"po-lg-6",3,"p-value"],["p-label","Website",1,"po-lg-6",3,"p-value"]],template:function(o,i){if(o&1){let p=Q();n(0,"div",7)(1,"div",8)(2,"po-search",9),u("p-change-model",function(d){return h(p),S(i.updateSearchTerm(d))})("p-locate-next",function(){return h(p),S(i.onNextOccurrenceClick())})("p-locate-previous",function(){return h(p),S(i.onPreviousOccurrenceClick())}),t()()(),l(3,"po-divider"),n(4,"form",10)(5,"div",7),l(6,"po-input",11,0)(8,"po-input",12,1),t(),n(10,"div",7),l(11,"po-input",13,2)(13,"po-number",14,3),t(),n(15,"div",7),l(16,"po-email",15,4)(18,"po-url",16,5),t(),n(20,"div",7)(21,"po-button",17),u("p-click",function(){return h(p),S(i.saveForm())}),t()()(),n(22,"po-modal",18,6)(24,"div",7),l(25,"po-info",19)(26,"po-info",20),t(),l(27,"po-divider"),n(28,"div",7),l(29,"po-info",21)(30,"po-info",22),t(),l(31,"po-divider"),n(32,"div",7),l(33,"po-info",23)(34,"po-info",24),t()()}o&2&&(s(2),m("p-literals",i.searchLiterals)("p-locate-summary",i.locateSummary),s(2),m("formGroup",i.reactiveForm),s(17),m("p-disabled",!i.reactiveForm.valid),s(),m("p-primary-action",i.modalPrimaryAction),s(3),m("p-value",i.reactiveForm.controls.name.value),s(),m("p-value",i.reactiveForm.controls.cpf.value),s(3),m("p-value",i.reactiveForm.controls.address.value),s(),m("p-value",i.reactiveForm.controls.number.value),s(3),m("p-value",i.reactiveForm.controls.email.value),s(),m("p-value",i.reactiveForm.controls.website.value))},dependencies:[Y,U,X,ce,ue,$,Z,Ce,ee,Pe,_e,V,ye,T],encapsulation:2})}return a})();var Pt=a=>({"docs-sample-code-tabs":a}),We=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-search-fields-locate-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Form Fields with Locate"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <div class="po-ml-1 po-mr-1">
    <po-search
      p-search-type="locate"
      [p-literals]="searchLiterals"
      [p-locate-summary]="locateSummary"
      (p-change-model)="updateSearchTerm($event)"
      (p-locate-next)="onNextOccurrenceClick()"
      (p-locate-previous)="onPreviousOccurrenceClick()"
    />
  </div>
</div>
<po-divider></po-divider>

<form [formGroup]="reactiveForm">
  <div class="po-row">
    <po-input #nameInput class="po-lg-9" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name">
    </po-input>

    <po-input #cpfInput class="po-lg-3" formControlName="cpf" p-label="CPF" p-mask="999.999.999-99" p-clean> </po-input>
  </div>

  <div class="po-row">
    <po-input #addressInput class="po-lg-9" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address">
    </po-input>

    <po-number #numberInput class="po-lg-3" formControlName="number" p-label="Number" p-clean> </po-number>
  </div>

  <div class="po-row">
    <po-email #emailInput class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-url #websiteInput class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
  </div>
</form>

<po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
  <div class="po-row">
    <po-info class="po-lg-6" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>

    <po-info class="po-lg-6" p-label="CPF" [p-value]="reactiveForm.controls.cpf.value"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-lg-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

    <po-info class="po-lg-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-lg-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

    <po-info class="po-lg-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.ts"),t(),n(19,"pre",9),e(20,`import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {
  PoEmailComponent,
  PoInputComponent,
  PoModalAction,
  PoModalComponent,
  PoNumberComponent,
  PoSearchFilterMode,
  PoSearchLiterals,
  PoUrlComponent
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-fields-locate',
  templateUrl: './sample-po-search-fields-locate.component.html',
  standalone: false
})
export class SamplePoSearchFieldsLocateComponent implements AfterViewInit {
  protected fb = inject(UntypedFormBuilder);

  @ViewChild('nameInput', { static: true }) nameInput!: PoInputComponent;
  @ViewChild('cpfInput', { static: true }) cpfInput!: PoInputComponent;
  @ViewChild('addressInput', { static: true }) addressInput!: PoInputComponent;
  @ViewChild('numberInput', { static: true }) numberInput!: PoNumberComponent;
  @ViewChild('emailInput', { static: true }) emailInput!: PoEmailComponent;
  @ViewChild('websiteInput', { static: true }) websiteInput!: PoUrlComponent;
  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal!: PoModalComponent;

  reactiveForm!: UntypedFormGroup;

  filterTargets: Array<{ label: string; index: number; focus: () => void }> = [];
  filteredIndexes: Array<number> = [];
  currentIndex: number = -1;
  firstSearch = true;

  locateSummary: { currentIndex: number; total: number } = { currentIndex: 0, total: 0 };
  filterType: PoSearchFilterMode = PoSearchFilterMode.endsWith;
  searchLiterals: PoSearchLiterals = { search: 'Buscar campos' };
  modalPrimaryAction: PoModalAction = {
    label: 'Close',
    action: () => this.reactiveFormModal.close()
  };

  constructor() {
    this.createForm();
  }

  ngAfterViewInit() {
    this.filterTargets = [
      { label: 'Customer name', index: 0, focus: () => this.nameInput.focus() },
      { label: 'CPF', index: 1, focus: () => this.cpfInput.focus() },
      { label: 'Address', index: 2, focus: () => this.addressInput.focus() },
      { label: 'Number', index: 3, focus: () => this.numberInput.focus() },
      { label: 'Email', index: 4, focus: () => this.emailInput.focus() },
      { label: 'Website', index: 5, focus: () => this.websiteInput.focus() }
    ];
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      cpf: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  // Atualiza os campos filtrados conforme o termo digitado
  updateSearchTerm(term: string) {
    console.log('updateSearchTerm');
    const value = term.toLowerCase();

    this.filteredIndexes = this.filterTargets
      .map((t, i) => ({ i, t }))
      .filter(({ t }) => value && t.label.toLowerCase().startsWith(value))
      .map(({ i }) => i);

    this.currentIndex = -1;

    const total = this.filteredIndexes.length;

    this.locateSummary = {
      currentIndex: 0,
      total: total
    };
  }

  // Navega\xE7\xE3o pelos bot\xF5es
  onNextOccurrenceClick() {
    console.log('onNextOccurrenceClick');
    this.goToNextOccurrence();
    this.focusCurrent();
  }

  onPreviousOccurrenceClick() {
    console.log('onPreviousOccurrenceClick');
    this.goToPreviousOccurrence();
    this.focusCurrent();
  }

  goToNextOccurrence() {
    if (!this.filteredIndexes.length) return;

    this.currentIndex = (this.currentIndex + 1) % this.filteredIndexes.length;
    this.updateSummary();
  }

  goToPreviousOccurrence() {
    if (!this.filteredIndexes.length) return;

    this.currentIndex = this.currentIndex <= 0 ? this.filteredIndexes.length - 1 : this.currentIndex - 1;
    this.updateSummary();
  }

  updateSummary() {
    const total = this.filteredIndexes.length;
    const current = total === 0 || this.currentIndex === -1 ? 0 : this.currentIndex + 1;

    this.locateSummary = {
      currentIndex: current,
      total: total
    };
  }

  // Foca o campo selecionado
  focusCurrent() {
    const index = this.filteredIndexes[this.currentIndex];
    if (index !== undefined) {
      (document.activeElement as HTMLElement)?.blur();
      this.filterTargets[index].focus();
    }
  }

  // Obt\xEAm o elemento real do campo
  getInputElementByIndex(index: number): HTMLElement | null {
    switch (index) {
      case 0:
        return this.nameInput?.inputEl?.nativeElement ?? null;
      case 1:
        return this.cpfInput?.inputEl?.nativeElement ?? null;
      case 2:
        return this.addressInput?.inputEl?.nativeElement ?? null;
      case 3:
        return this.numberInput?.inputEl?.nativeElement ?? null;
      case 4:
        return this.emailInput?.inputEl?.nativeElement ?? null;
      case 5:
        return this.websiteInput?.inputEl?.nativeElement ?? null;
      default:
        return null;
    }
  }

  saveForm() {
    this.reactiveFormModal.open();
  }
}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-search-fields-locate"),t(),l(23,"hr")),o&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),b(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",I(4,Pt,i.hideSampleCodeTabs)))},dependencies:[M,x,g,v,je],encapsulation:2})}return a})();var Re=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-search-doc"]],standalone:!1,decls:1214,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<any>"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoSearchFilterSelect[]"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoSearchLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoSearchLocateSummary"],[1,"language-ts"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","searchMode"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","number"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoSearchModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-search."),t()(),n(7,"h3",3),e(8,"Componente"),t(),n(9,"h4",4)(10,"code",5),e(11,"PoSearchComponent"),t()(),n(12,"div",2)(13,"p"),e(14,"O componente search, tamb\xE9m conhecido como barra de pesquisa, \xE9 utilizado para ajudar os usu\xE1rios a localizar um determinado conte\xFAdo."),t(),n(15,"p"),e(16,"Normalmente localizado no canto superior direito, junto com o \xEDcone de lupa, uma vez que este \xEDcone \xE9 amplamente reconhecido."),t(),n(17,"h4"),e(18,"Boas pr\xE1ticas"),t(),n(19,"p"),e(20,`Foram estruturados os padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia
aos usu\xE1rios. Portanto, \xE9 de extrema import\xE2ncia que, ao utilizar este componente, as pessoas respons\xE1veis por seu
desenvolvimento considerem os seguintes crit\xE9rios:`),t(),n(21,"ul")(22,"li"),e(23,`Utilize labels para apresentar resultados que est\xE3o sendo exibidos e apresente os resultados mais relevantes
primeiro.`),t(),n(24,"li"),e(25,`Exiba uma mensagem clara quando n\xE3o forem encontrados resultados para busca e sempre que poss\xEDvel ofere\xE7a outras
sugest\xF5es de busca.`),t(),n(26,"li"),e(27,`Mantenha o texto original no campo de input, que facilita a a\xE7\xE3o do usu\xE1rio caso queira fazer uma nova busca com
alguma modifica\xE7\xE3o na pesquisa.`),t(),n(28,"li"),e(29,`Caso seja poss\xEDvel detectar um erro de digita\xE7\xE3o, mostre os resultados para a palavra "corrigida", isso evita a
frustra\xE7\xE3o de n\xE3o obter resultados e n\xE3o for\xE7a o usu\xE1rio a realizar uma nova busca.`),t(),n(30,"li"),e(31,"Quando apropriado, destaque os termos da busca nos resultados."),t(),n(32,"li"),e(33,"A entrada do campo de pesquisa deve caber em uma linha. N\xE3o use entradas de pesquisa de v\xE1rias linhas."),t(),n(34,"li"),e(35,`Recomenda-se ter apenas uma pesquisa por p\xE1gina. Se voc\xEA precisar de v\xE1rias pesquisas, rotule-as claramente para
indicar sua finalidade.`),t(),n(36,"li"),e(37,`Se poss\xEDvel, forne\xE7a sugest\xF5es de pesquisa, seja em um helptext ou sugest\xE3o de pesquisa que \xE9 um autocomplete. Isso
ajuda os usu\xE1rios a encontrar o que est\xE3o procurando, especialmente se os itens pesquis\xE1veis forem complexos.`),t()(),n(38,"h4"),e(39,"Acessibilidade tratada no componente"),t(),n(40,"p"),e(41,` Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo
propriet\xE1rio do conte\xFAdo. S\xE3o elas:`),t(),n(42,"ul")(43,"li"),e(44,"Permitir a intera\xE7\xE3o via teclado (2.1.1: Keyboard (A));"),t(),n(45,"li"),e(46,"Altera\xE7\xE3o entre os estados precisa ser indicada por mais de um elemento al\xE9m da cor (1.4.1: Use of Color);"),t()(),n(47,"h4"),e(48,"Tokens customiz\xE1veis"),t(),n(49,"p"),e(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(51,"blockquote")(52,"p"),e(53,"Para maiores informa\xE7\xF5es, acesse o guia "),n(54,"a",6),e(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(56,"."),t()(),n(57,"table")(58,"thead")(59,"tr")(60,"th"),e(61,"Propriedade"),t(),n(62,"th"),e(63,"Descri\xE7\xE3o"),t(),n(64,"th"),e(65,"Valor Padr\xE3o"),t()()(),n(66,"tbody")(67,"tr")(68,"td")(69,"strong"),e(70,"Default Values"),t()(),l(71,"td")(72,"td"),t(),n(73,"tr")(74,"td")(75,"code"),e(76,"--font-family"),t()(),n(77,"td"),e(78,"Fam\xEDlia tipogr\xE1fica do campo"),t(),n(79,"td")(80,"code"),e(81,"var(--font-family-theme)"),t()()(),n(82,"tr")(83,"td")(84,"code"),e(85,"--font-size"),t()(),n(86,"td"),e(87,"Tamanho da fonte do campo"),t(),n(88,"td")(89,"code"),e(90,"var(--font-size-default)"),t()()(),n(91,"tr")(92,"td")(93,"code"),e(94,"--text-color-placeholder"),t()(),n(95,"td"),e(96,"Cor do texto no placeholder"),t(),n(97,"td")(98,"code"),e(99,"var(--color-neutral-light-30)"),t()()(),n(100,"tr")(101,"td")(102,"code"),e(103,"--color"),t()(),n(104,"td"),e(105,"Cor das bordas"),t(),n(106,"td")(107,"code"),e(108,"var(--color-neutral-dark-70)"),t()()(),n(109,"tr")(110,"td")(111,"code"),e(112,"--border-radius"),t()(),n(113,"td"),e(114,"Raio das bordas"),t(),n(115,"td")(116,"code"),e(117,"var(--border-radius-md)"),t()()(),n(118,"tr")(119,"td")(120,"code"),e(121,"--background"),t()(),n(122,"td"),e(123,"Cor de background"),t(),n(124,"td")(125,"code"),e(126,"var(--color-neutral-light-05)"),t()()(),n(127,"tr")(128,"td")(129,"code"),e(130,"--text-color"),t()(),n(131,"td"),e(132,"Cor do texto edit\xE1vel"),t(),n(133,"td")(134,"code"),e(135,"var(--color-neutral-dark-90)"),t()()(),n(136,"tr")(137,"td")(138,"code"),e(139,"--color-clear"),t()(),n(140,"td"),e(141,"Cor do \xEDcone close"),t(),n(142,"td")(143,"code"),e(144,"var(--color-action-default)"),t()()(),n(145,"tr")(146,"td")(147,"code"),e(148,"--color-controls"),t()(),n(149,"td"),e(150,"Cor dos \xEDcones de controle do mode location"),t(),n(151,"td")(152,"code"),e(153,"var(--color-action-default)"),t()()(),n(154,"tr")(155,"td")(156,"code"),e(157,"--transition-property"),t()(),n(158,"td"),e(159,"Atributo da transi\xE7\xE3o"),t(),n(160,"td")(161,"code"),e(162,"all"),t()()(),n(163,"tr")(164,"td")(165,"code"),e(166,"--transition-duration"),t()(),n(167,"td"),e(168,"Dura\xE7\xE3o da transi\xE7\xE3o"),t(),n(169,"td")(170,"code"),e(171,"var(--duration-extra-fast)"),t()()(),n(172,"tr")(173,"td")(174,"code"),e(175,"--transition-timing"),t()(),n(176,"td"),e(177,"Dura\xE7\xE3o da transi\xE7\xE3o com o tipo de transi\xE7\xE3o"),t(),n(178,"td")(179,"code"),e(180,"var(--timing-standart)"),t()()(),n(181,"tr")(182,"td")(183,"strong"),e(184,"Icon"),t()(),l(185,"td")(186,"td"),t(),n(187,"tr")(188,"td")(189,"code"),e(190,"--color-icon-read"),t()(),n(191,"td"),e(192,"Cor do \xEDcone de busca no modo action"),t(),n(193,"td")(194,"code"),e(195,"var(--color-neutral-dark-70)"),t()()(),n(196,"tr")(197,"td")(198,"code"),e(199,"--color-icon"),t()(),n(200,"td"),e(201,"Cor do \xEDcone de busca no modo trigger"),t(),n(202,"td")(203,"code"),e(204,"var(--color-action-default)"),t()()(),n(205,"tr")(206,"td")(207,"strong"),e(208,"Hover"),t()(),l(209,"td")(210,"td"),t(),n(211,"tr")(212,"td")(213,"code"),e(214,"--color-hover"),t()(),n(215,"td"),e(216,"Cor das bordas no estado hover"),t(),n(217,"td")(218,"code"),e(219,"var(--color-action-hover)"),t()()(),n(220,"tr")(221,"td")(222,"code"),e(223,"--background-hover"),t()(),n(224,"td"),e(225,"Cor de background no estado hover"),t(),n(226,"td")(227,"code"),e(228,"var(--color-brand-01-lightest)"),t()()(),n(229,"tr")(230,"td")(231,"strong"),e(232,"Focused"),t()(),l(233,"td")(234,"td"),t(),n(235,"tr")(236,"td")(237,"code"),e(238,"--color-focused"),t()(),n(239,"td"),e(240,"Cor das bordas no estado de focus"),t(),n(241,"td")(242,"code"),e(243,"var(--color-action-default)"),t()()(),n(244,"tr")(245,"td")(246,"code"),e(247,"--outline-color-focused"),t()(),n(248,"td"),e(249,"Cor do outline no estado de focus"),t(),n(250,"td")(251,"code"),e(252,"var(--color-action-focus)"),t()()(),n(253,"tr")(254,"td")(255,"strong"),e(256,"Disabled"),t()(),l(257,"td")(258,"td"),t(),n(259,"tr")(260,"td")(261,"code"),e(262,"--color-disabled"),t()(),n(263,"td"),e(264,"Cor principal no estado disabled"),t(),n(265,"td")(266,"code"),e(267,"var(--color-action-disabled)"),t()()(),n(268,"tr")(269,"td")(270,"code"),e(271,"--background-disabled"),t()(),n(272,"td"),e(273,"Cor de background no estado disabled"),t(),n(274,"td")(275,"code"),e(276,"var(--color-neutral-light-20)"),t()()()()()(),n(277,"div",7)(278,"h4",8),e(279,"Seletor"),t(),n(280,"pre",9),e(281,`<po-search
    p-aria-label="string"
    (p-blur)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-disabled="boolean"
    (p-filter)="EventEmitter"
    p-filter-keys="Array<any>"
    p-filter-select="PoSearchFilterSelect[]"
    p-filter-type="PoSearchFilterMode"
    (p-filtered-items-change)="EventEmitter"
    p-icon="string | TemplateRef<void>"
    p-items="Array<any>"
    (p-listbox-onclick)="EventEmitter"
    p-literals="PoSearchLiterals"
    (p-locate-next)="EventEmitter"
    (p-locate-previous)="EventEmitter"
    p-locate-summary="PoSearchLocateSummary"
    p-show-listbox="boolean"
    p-size="string"
    p-search-type="searchMode" >
</po-search>
`),t()(),n(282,"h4",10),e(283,"Propriedades"),t(),n(284,"table",11)(285,"tr",12)(286,"th",13),e(287,"Nome"),t(),n(288,"th",13),e(289,"Tipo"),t(),n(290,"th",13),e(291,"Padr\xE3o"),t(),n(292,"th",13),e(293,"Descri\xE7\xE3o"),t()(),n(294,"tr",14)(295,"td",15)(296,"div",16)(297,"span",17),e(298," p-aria-label"),l(299,"br"),t()()(),n(300,"td",18)(301,"code",19),e(302,"string"),t()(),n(303,"td",20),e(304,"-"),t(),n(305,"td",21)(306,"em")(307,"strong"),e(308,"(opcional)"),t()(),n(309,"p"),e(310,"Define um aria-label para o po-search."),t(),n(311,"blockquote")(312,"p"),e(313,"Devido o componente n\xE3o possuir uma label assim como outros campos de texto, o "),n(314,"code"),e(315,"aria-label"),t(),e(316,` \xE9 utilizado para
acessibilidade.`),t()()()(),n(317,"tr",14)(318,"td",15)(319,"div",22)(320,"span",23),e(321," (p-blur)"),l(322,"br"),t()()(),n(323,"td",18)(324,"code",24),e(325,"EventEmitter"),t()(),n(326,"td",20),e(327,"-"),t(),n(328,"td",21)(329,"em")(330,"strong"),e(331,"(opcional)"),t()(),n(332,"p"),e(333,"Evento disparado ao sair do campo."),t()()(),n(334,"tr",14)(335,"td",15)(336,"div",22)(337,"span",23),e(338," (p-change-model)"),l(339,"br"),t()()(),n(340,"td",18)(341,"code",24),e(342,"EventEmitter"),t()(),n(343,"td",20),e(344,"-"),t(),n(345,"td",21)(346,"em")(347,"strong"),e(348,"(opcional)"),t()(),n(349,"p"),e(350,"Evento disparado ao alterar valor do model."),t()()(),n(351,"tr",14)(352,"td",15)(353,"div",16)(354,"span",17),e(355," p-disabled"),l(356,"br"),t()()(),n(357,"td",18)(358,"code",25),e(359,"boolean"),t()(),n(360,"td",20)(361,"p")(362,"code"),e(363,"false"),t()()(),n(364,"td",21)(365,"em")(366,"strong"),e(367,"(opcional)"),t()(),n(368,"p"),e(369,"Desabilita o po-search e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),t()()(),n(370,"tr",14)(371,"td",15)(372,"div",22)(373,"span",23),e(374," (p-filter)"),l(375,"br"),t()()(),n(376,"td",18)(377,"code",24),e(378,"EventEmitter"),t()(),n(379,"td",20),e(380,"-"),t(),n(381,"td",21)(382,"em")(383,"strong"),e(384,"(opcional)"),t()(),n(385,"p"),e(386,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es nos filtros."),t(),n(387,"blockquote")(388,"p"),e(389,"Incompat\xEDvel com a propriedade "),n(390,"code"),e(391,"p-search-type"),t(),e(392," do tipo "),n(393,"code"),e(394,"locate"),t(),e(395,"."),t()()()(),n(396,"tr",14)(397,"td",15)(398,"div",16)(399,"span",17),e(400," p-filter-keys"),l(401,"br"),t()()(),n(402,"td",18)(403,"code",26),e(404,"Array<any>"),t()(),n(405,"td",20),e(406,"-"),t(),n(407,"td",21)(408,"p"),e(409,"Define os nomes das propriedades do objeto que ser\xE3o utilizados para busca em "),n(410,"code"),e(411,"p-items"),t(),e(412,`. Cada valor definido no
array ser\xE1 considerado durante a apresenta\xE7\xE3o e filtragem dos itens.
Exemplo de uso:`),t(),n(413,"pre")(414,"code",27),e(415,`const filterKeys: Array<string> = ['name', 'gender', 'planet', 'father'];
`),t()(),n(416,"blockquote")(417,"p"),e(418,"Esta propriedade \xE9 ignorada quando utilizado com "),n(419,"code"),e(420,"p-filter-select"),t(),e(421,` e incompat\xEDvel com a propriedade
`),n(422,"code"),e(423,"p-search-type"),t(),e(424," do tipo "),n(425,"code"),e(426,"locate"),t(),e(427,"."),t()()()(),n(428,"tr",14)(429,"td",15)(430,"div",16)(431,"span",17),e(432," p-filter-select"),l(433,"br"),t()()(),n(434,"td",18)(435,"code",28),e(436,"PoSearchFilterSelect[]"),t()(),n(437,"td",20),e(438,"-"),t(),n(439,"td",21)(440,"p"),e(441,`Habilita um seletor de filtros \xE0 esquerda do campo, permitindo a aplica\xE7\xE3o de filtros agrupados na busca ou sobre
os itens fornecidos em `),n(442,"code"),e(443,"p-items"),t(),e(444,". Automaticamente adiciona a op\xE7\xE3o "),n(445,"strong"),e(446,"Todos"),t(),e(447,", com um mapeamento de todas as op\xE7\xF5es passadas."),t(),n(448,"p"),e(449,"Exemplo de uso:"),t(),n(450,"pre")(451,"code",27),e(452,`const filterSelect = [
  { label: 'personal', value: ['name', 'email', 'nickname'] },
  { label: 'address', value: ['country', 'state', 'city', 'street'] },
  { label: 'family', value: ['father', 'mother', 'dependents'] }
];
`),t()(),n(453,"blockquote")(454,"p"),e(455,"Ao ser habilitada, a propriedade "),n(456,"code"),e(457,"p-filter-keys"),t(),e(458,` ser\xE1 ignorada. Esta propriedade \xE9 incompat\xEDvel com a propriedade
`),n(459,"code"),e(460,"p-search-type"),t(),e(461," do tipo "),n(462,"code"),e(463,"locate"),t(),e(464,"."),t()()()(),n(465,"tr",14)(466,"td",15)(467,"div",16)(468,"span",17),e(469," p-filter-type"),l(470,"br"),t()()(),n(471,"td",18)(472,"code",29),e(473,"PoSearchFilterMode"),t()(),n(474,"td",20)(475,"p")(476,"code"),e(477,"startsWith"),t()()(),n(478,"td",21)(479,"em")(480,"strong"),e(481,"(opcional)"),t()(),n(482,"p"),e(483,`Define o modo de pesquisa utilizado no campo de busca. Os valores permitidos s\xE3o definidos pelo enum
`),n(484,"strong"),e(485,"PoSearchFilterMode"),t(),e(486,"."),t(),n(487,"blockquote")(488,"p"),e(489,"Incompat\xEDvel com a propriedade "),n(490,"code"),e(491,"p-search-type"),t(),e(492," do tipo "),n(493,"code"),e(494,"locate"),t(),e(495,"."),t()()()(),n(496,"tr",14)(497,"td",15)(498,"div",22)(499,"span",23),e(500," (p-filtered-items-change)"),l(501,"br"),t()()(),n(502,"td",18)(503,"code",24),e(504,"EventEmitter"),t()(),n(505,"td",20),e(506,"-"),t(),n(507,"td",21)(508,"em")(509,"strong"),e(510,"(opcional)"),t()(),n(511,"p"),e(512,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no input."),t(),n(513,"blockquote")(514,"p"),e(515,"Incompat\xEDvel com a propriedade "),n(516,"code"),e(517,"p-search-type"),t(),e(518," do tipo "),n(519,"code"),e(520,"locate"),t(),e(521,"."),t()()()(),n(522,"tr",14)(523,"td",15)(524,"div",16)(525,"span",17),e(526," p-icon"),l(527,"br"),t()()(),n(528,"td",18)(529,"code",19),e(530,"string "),t(),n(531,"code",30),e(532," TemplateRef<void>"),t()(),n(533,"td",20),e(534,"-"),t(),n(535,"td",21)(536,"em")(537,"strong"),e(538,"(opcional)"),t()(),n(539,"p"),e(540,"Permite customizar o \xEDcone de busca que acompanha o campo."),t(),n(541,"p"),e(542,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(543,"a",31),e(544,"Biblioteca de \xEDcones PO UI"),t(),e(545,", conforme exemplo:"),t(),n(546,"pre")(547,"code"),e(548,`<po-search p-icon="an an-user"></po-search>
`),t()(),n(549,"p"),e(550,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(551,"em"),e(552,"Font Awesome"),t(),e(553,`, desde que a biblioteca
esteja carregada no projeto:`),t(),n(554,"pre")(555,"code"),e(556,`<po-search p-icon="fa fa-podcast"></po-search>
`),t()(),n(557,"p"),e(558,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(559,"code"),e(560,"TemplateRef"),t(),e(561,", conforme exemplo abaixo:"),t(),n(562,"pre")(563,"code"),e(564,`<po-search [p-icon]="template"></po-search>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),t()()()(),n(565,"tr",14)(566,"td",15)(567,"div",16)(568,"span",17),e(569," p-items"),l(570,"br"),t()()(),n(571,"td",18)(572,"code",26),e(573,"Array<any>"),t()(),n(574,"td",20),e(575,"-"),t(),n(576,"td",21)(577,"em")(578,"strong"),e(579,"(opcional)"),t()(),n(580,"p"),e(581,"Lista de itens que ser\xE3o utilizados para pesquisa."),t(),n(582,"blockquote")(583,"p"),e(584,"Incompat\xEDvel com a propriedade "),n(585,"code"),e(586,"p-search-type"),t(),e(587," do tipo "),n(588,"code"),e(589,"locate"),t(),e(590,"."),t()()()(),n(591,"tr",14)(592,"td",15)(593,"div",22)(594,"span",23),e(595," (p-listbox-onclick)"),l(596,"br"),t()()(),n(597,"td",18)(598,"code",24),e(599,"EventEmitter"),t()(),n(600,"td",20),e(601,"-"),t(),n(602,"td",21)(603,"em")(604,"strong"),e(605,"(opcional)"),t()(),n(606,"p"),e(607,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver click no listbox."),t(),n(608,"blockquote")(609,"p"),e(610,"Incompat\xEDvel com a propriedade "),n(611,"code"),e(612,"p-search-type"),t(),e(613," do tipo "),n(614,"code"),e(615,"locate"),t(),e(616,"."),t()()()(),n(617,"tr",14)(618,"td",15)(619,"div",16)(620,"span",17),e(621," p-literals"),l(622,"br"),t()()(),n(623,"td",18)(624,"code",32),e(625,"PoSearchLiterals"),t()(),n(626,"td",20),e(627,"-"),t(),n(628,"td",21)(629,"em")(630,"strong"),e(631,"(opcional)"),t()(),n(632,"p"),e(633,"Objeto com as literais usadas no "),n(634,"code"),e(635,"po-search"),t(),e(636,", permitindo personalizar os textos exibidos no componente."),t(),n(637,"p"),e(638,"Para utilizar basta passar a literal que deseja customizar:"),t(),n(639,"pre")(640,"code"),e(641,`const customLiterals: PoSearchLiterals = {
  search: 'Pesquisar',
  clean: 'Limpar',
};
`),t()(),n(642,"p"),e(643,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),t(),n(644,"pre")(645,"code"),e(646,`<po-search
  [p-literals]="customLiterals">
</po-search>
`),t()(),n(647,"blockquote")(648,"p"),e(649,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),n(650,"a",33)(651,"code"),e(652,"PoI18nService"),t()(),e(653,` ou
do browser.`),t()()()(),n(654,"tr",14)(655,"td",15)(656,"div",22)(657,"span",23),e(658," (p-locate-next)"),l(659,"br"),t()()(),n(660,"td",18)(661,"code",24),e(662,"EventEmitter"),t()(),n(663,"td",20),e(664,"-"),t(),n(665,"td",21)(666,"em")(667,"strong"),e(668,"(opcional)"),t()(),n(669,"p"),e(670,'Evento disparado ao clicar no controle "Pr\xF3ximo resultado".'),t(),n(671,"blockquote")(672,"p"),e(673,"Compat\xEDvel com a propriedade "),n(674,"code"),e(675,"p-search-type"),t(),e(676," do tipo "),n(677,"code"),e(678,"locate"),t(),e(679,"."),t()()()(),n(680,"tr",14)(681,"td",15)(682,"div",22)(683,"span",23),e(684," (p-locate-previous)"),l(685,"br"),t()()(),n(686,"td",18)(687,"code",24),e(688,"EventEmitter"),t()(),n(689,"td",20),e(690,"-"),t(),n(691,"td",21)(692,"em")(693,"strong"),e(694,"(opcional)"),t()(),n(695,"p"),e(696,'Evento disparado ao clicar no controle "Resultado anterior".'),t(),n(697,"blockquote")(698,"p"),e(699,"Compat\xEDvel com a propriedade "),n(700,"code"),e(701,"p-search-type"),t(),e(702," do tipo "),n(703,"code"),e(704,"locate"),t(),e(705,"."),t()()()(),n(706,"tr",14)(707,"td",15)(708,"div",16)(709,"span",17),e(710," p-locate-summary"),l(711,"br"),t()()(),n(712,"td",18)(713,"code",34),e(714,"PoSearchLocateSummary"),t()(),n(715,"td",20),e(716,"-"),t(),n(717,"td",21)(718,"em")(719,"strong"),e(720,"(opcional)"),t()(),n(721,"p"),e(722,"Define os valores do contador exibido ao usar a propriedade "),n(723,"code"),e(724,"p-search-type"),t(),e(725," do tipo "),n(726,"code"),e(727,"locate"),t(),e(728,`, indicando a posi\xE7\xE3o
atual e o total de ocorr\xEAncias encontradas.
Exemplo de uso:`),t(),n(729,"pre")(730,"code",35),e(731,`locateSummary: PoSearchLocateSummary = { currentIndex: 0, total: 5 };
`),t()(),n(732,"blockquote")(733,"p"),e(734,"Compat\xEDvel com a propriedade "),n(735,"code"),e(736,"p-search-type"),t(),e(737," do tipo "),n(738,"code"),e(739,"locate"),t(),e(740,"."),t()()()(),n(741,"tr",14)(742,"td",15)(743,"div",16)(744,"span",17),e(745," p-show-listbox"),l(746,"br"),t()()(),n(747,"td",18)(748,"code",25),e(749,"boolean"),t()(),n(750,"td",20)(751,"p")(752,"code"),e(753,"false"),t()()(),n(754,"td",21)(755,"em")(756,"strong"),e(757,"(opcional)"),t()(),n(758,"p"),e(759,"Exibe uma lista (auto-complete) com as op\xE7\xF5es definidas em "),n(760,"code"),e(761,"p-filter-keys"),t(),e(762," ou "),n(763,"code"),e(764,"p-filter-select"),t(),e(765,` enquanto realiza
uma busca, respeitando o `),n(766,"code"),e(767,"p-filter-type"),t(),e(768," como modo de pesquisa."),t(),n(769,"blockquote")(770,"p"),e(771,"Incompat\xEDvel com a propriedade "),n(772,"code"),e(773,"p-search-type"),t(),e(774," do tipo "),n(775,"code"),e(776,"locate"),t(),e(777,"."),t()()()(),n(778,"tr",14)(779,"td",15)(780,"div",16)(781,"span",17),e(782," p-size"),l(783,"br"),t()()(),n(784,"td",18)(785,"code",19),e(786,"string"),t()(),n(787,"td",20)(788,"p")(789,"code"),e(790,"medium"),t()()(),n(791,"td",21)(792,"em")(793,"strong"),e(794,"(opcional)"),t()(),n(795,"p"),e(796,"Define o tamanho do componente:"),t(),n(797,"ul")(798,"li")(799,"code"),e(800,"small"),t(),e(801,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(802,"li")(803,"code"),e(804,"medium"),t(),e(805,": altura do input como 44px."),t()(),n(806,"blockquote")(807,"p"),e(808,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(809,"code"),e(810,"medium"),t(),e(811,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(812,"a",36),e(813,"po-theme"),t(),e(814,"."),t()()()(),n(815,"tr",14)(816,"td",15)(817,"div",16)(818,"span",17),e(819," p-search-type"),l(820,"br"),t()()(),n(821,"td",18)(822,"code",37),e(823,"searchMode"),t()(),n(824,"td",20)(825,"p")(826,"code"),e(827,"action"),t()()(),n(828,"td",21)(829,"em")(830,"strong"),e(831,"(opcional)"),t()(),n(832,"p"),e(833,"Determina a forma de realizar a pesquisa no componente. Valores aceitos:"),t(),n(834,"ul")(835,"li")(836,"code"),e(837,"action"),t(),e(838,": Realiza a busca a cada caractere digitado."),t(),n(839,"li")(840,"code"),e(841,"trigger"),t(),e(842,": Realiza a busca ao pressionar "),n(843,"code"),e(844,"enter"),t(),e(845," ou clicar no \xEDcone de busca."),t(),n(846,"li")(847,"code"),e(848,"locate"),t(),e(849,": Modo manual. Exibe bot\xF5es e contador, mas n\xE3o executa buscas \u2014 controle \xE9 do desenvolvedor."),t()()()()(),n(850,"h3"),e(851,"Interfaces"),t(),n(852,"h4",38)(853,"code",5),e(854,"PoSearchFilterSelect"),t()(),n(855,"div",2)(856,"p"),e(857,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas no dropdown do "),n(858,"code"),e(859,"po-search"),t(),e(860,", ao usar a propriedade "),n(861,"code"),e(862,"p-filter-select"),t(),e(863,"."),t()(),n(864,"h4",10),e(865,"Propriedades"),t(),n(866,"table",11)(867,"tr",12)(868,"th",13),e(869,"Nome"),t(),n(870,"th",13),e(871,"Tipo"),t(),n(872,"th",13),e(873,"Descri\xE7\xE3o"),t()(),n(874,"tr",14)(875,"td",15)(876,"div",16)(877,"span",17),e(878," label"),l(879,"br"),t()()(),n(880,"td",18)(881,"code",19),e(882,"string"),t()(),n(883,"td",21)(884,"p"),e(885,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),t()()(),n(886,"tr",14)(887,"td",15)(888,"div",16)(889,"span",17),e(890," value"),l(891,"br"),t()()(),n(892,"td",18)(893,"code",39),e(894,"Array<string> "),t(),n(895,"code",19),e(896," string"),t()(),n(897,"td",21)(898,"p"),e(899,"Valores que ser\xE3o atribu\xEDdos ao "),n(900,"code"),e(901,"p-filter-keys"),t()()()()(),n(902,"h4",38)(903,"code",5),e(904,"PoSearchLocateSummary"),t()(),n(905,"div",2)(906,"p"),e(907,"Interface que define o resumo de localiza\xE7\xE3o do filtro "),n(908,"code"),e(909,"p-filter-locate"),t(),e(910,"."),t()(),n(911,"h4",10),e(912,"Propriedades"),t(),n(913,"table",11)(914,"tr",12)(915,"th",13),e(916,"Nome"),t(),n(917,"th",13),e(918,"Tipo"),t(),n(919,"th",13),e(920,"Descri\xE7\xE3o"),t()(),n(921,"tr",14)(922,"td",15)(923,"div",16)(924,"span",17),e(925," currentIndex"),l(926,"br"),t()()(),n(927,"td",18)(928,"code",40),e(929,"number"),t()(),n(930,"td",21)(931,"p"),e(932,"\xCDndice atual da ocorr\xEAncia localizada."),t()()(),n(933,"tr",14)(934,"td",15)(935,"div",16)(936,"span",17),e(937," total"),l(938,"br"),t()()(),n(939,"td",18)(940,"code",40),e(941,"number"),t()(),n(942,"td",21)(943,"p"),e(944,"Total de ocorr\xEAncias encontradas."),t()()()(),n(945,"h4",38)(946,"code",5),e(947,"PoSearchOption"),t()(),n(948,"div",2)(949,"p"),e(950,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista ao procurar do "),n(951,"code"),e(952,"po-search"),t(),e(953,"."),t()(),n(954,"h4",10),e(955,"Propriedades"),t(),n(956,"table",11)(957,"tr",12)(958,"th",13),e(959,"Nome"),t(),n(960,"th",13),e(961,"Tipo"),t(),n(962,"th",13),e(963,"Descri\xE7\xE3o"),t()(),n(964,"tr",14)(965,"td",15)(966,"div",16)(967,"span",17),e(968," label"),l(969,"br"),t()()(),n(970,"td",18)(971,"code",19),e(972,"string"),t()(),n(973,"td",21)(974,"em")(975,"strong"),e(976,"(opcional)"),t()(),n(977,"p"),e(978,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),t(),n(979,"blockquote")(980,"p"),e(981,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),n(982,"code"),e(983,"value"),t(),e(984,"."),t()()()(),n(985,"tr",14)(986,"td",15)(987,"div",16)(988,"span",17),e(989," value"),l(990,"br"),t()()(),n(991,"td",18)(992,"code",19),e(993,"string "),t(),n(994,"code",40),e(995," number"),t()(),n(996,"td",21)(997,"p"),e(998,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),n(999,"em"),e(1e3,"model"),t(),e(1001,"."),t()()()(),n(1002,"h4",38)(1003,"code",5),e(1004,"PoSearchLiterals"),t()(),n(1005,"div",2)(1006,"p"),e(1007,"Interface para defini\xE7\xE3o das literais usadas no "),n(1008,"code"),e(1009,"po-search"),t(),e(1010,"."),t()(),n(1011,"h4",10),e(1012,"Propriedades"),t(),n(1013,"table",11)(1014,"tr",12)(1015,"th",13),e(1016,"Nome"),t(),n(1017,"th",13),e(1018,"Tipo"),t(),n(1019,"th",13),e(1020,"Descri\xE7\xE3o"),t()(),n(1021,"tr",14)(1022,"td",15)(1023,"div",16)(1024,"span",17),e(1025," all"),l(1026,"br"),t()()(),n(1027,"td",18)(1028,"code",19),e(1029,"string"),t()(),n(1030,"td",21)(1031,"em")(1032,"strong"),e(1033,"(opcional)"),t()(),n(1034,"p"),e(1035,"Texto exibido no dropdown de tipo de filtro, representando todos os tipos dispon\xEDveis."),t(),n(1036,"blockquote")(1037,"p"),e(1038,"Exibido apenas quando a propriedade "),n(1039,"code"),e(1040,"p-filter-select"),t(),e(1041," estiver habilitada."),t()()()(),n(1042,"tr",14)(1043,"td",15)(1044,"div",16)(1045,"span",17),e(1046," clean"),l(1047,"br"),t()()(),n(1048,"td",18)(1049,"code",19),e(1050,"string"),t()(),n(1051,"td",21)(1052,"em")(1053,"strong"),e(1054,"(opcional)"),t()(),n(1055,"p"),e(1056,"Texto alternativo (aria-label) para o bot\xE3o de limpar o campo de busca, usado por leitores de tela."),t()()(),n(1057,"tr",14)(1058,"td",15)(1059,"div",16)(1060,"span",17),e(1061," next"),l(1062,"br"),t()()(),n(1063,"td",18)(1064,"code",19),e(1065,"string"),t()(),n(1066,"td",21)(1067,"em")(1068,"strong"),e(1069,"(opcional)"),t()(),n(1070,"p"),e(1071,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o pr\xF3ximo resultado da busca."),t(),n(1072,"blockquote")(1073,"p"),e(1074,"Exibido apenas quando a propriedade "),n(1075,"code"),e(1076,"p-filter-locate"),t(),e(1077," estiver habilitada."),t()()()(),n(1078,"tr",14)(1079,"td",15)(1080,"div",16)(1081,"span",17),e(1082," of"),l(1083,"br"),t()()(),n(1084,"td",18)(1085,"code",19),e(1086,"string"),t()(),n(1087,"td",21)(1088,"em")(1089,"strong"),e(1090,"(opcional)"),t()(),n(1091,"p"),e(1092,'Texto alternativo (aria-label) para a palavra "de" no contador de resultados (ex: "Resultado 1 de 4").'),t(),n(1093,"blockquote")(1094,"p"),e(1095,"Exibido apenas quando a propriedade "),n(1096,"code"),e(1097,"p-filter-locate"),t(),e(1098," estiver habilitada."),t()()()(),n(1099,"tr",14)(1100,"td",15)(1101,"div",16)(1102,"span",17),e(1103," previous"),l(1104,"br"),t()()(),n(1105,"td",18)(1106,"code",19),e(1107,"string"),t()(),n(1108,"td",21)(1109,"em")(1110,"strong"),e(1111,"(opcional)"),t()(),n(1112,"p"),e(1113,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o resultado anterior da busca."),t(),n(1114,"blockquote")(1115,"p"),e(1116,"Exibido apenas quando a propriedade "),n(1117,"code"),e(1118,"p-filter-locate"),t(),e(1119," estiver habilitada."),t()()()(),n(1120,"tr",14)(1121,"td",15)(1122,"div",16)(1123,"span",17),e(1124," result"),l(1125,"br"),t()()(),n(1126,"td",18)(1127,"code",19),e(1128,"string"),t()(),n(1129,"td",21)(1130,"em")(1131,"strong"),e(1132,"(opcional)"),t()(),n(1133,"p"),e(1134,'Texto alternativo (aria-label) para a label "Resultado" que acompanha o contador.'),t(),n(1135,"blockquote")(1136,"p"),e(1137,"Exibido apenas quando a propriedade "),n(1138,"code"),e(1139,"p-filter-locate"),t(),e(1140," estiver habilitada."),t()()()(),n(1141,"tr",14)(1142,"td",15)(1143,"div",16)(1144,"span",17),e(1145," search"),l(1146,"br"),t()()(),n(1147,"td",18)(1148,"code",19),e(1149,"string"),t()(),n(1150,"td",21)(1151,"em")(1152,"strong"),e(1153,"(opcional)"),t()(),n(1154,"p"),e(1155,"Texto exibido como "),n(1156,"em"),e(1157,"placeholder"),t(),e(1158," no campo de busca."),t()()()(),n(1159,"h3"),e(1160,"Enums"),t(),n(1161,"h4",4)(1162,"code",5),e(1163,"PoSearchFilterMode"),t()(),n(1164,"div",2)(1165,"p"),e(1166,"Define o tipo de busca usado no "),n(1167,"code"),e(1168,"po-search"),t(),e(1169,"."),t()(),n(1170,"h4",10),e(1171,"Propriedades"),t(),n(1172,"table",11)(1173,"tr",12)(1174,"th",13),e(1175,"Nome"),t(),n(1176,"th",13),e(1177,"Descri\xE7\xE3o"),t()(),n(1178,"tr",14)(1179,"td",15)(1180,"div",16)(1181,"span",17),e(1182," startsWith"),l(1183,"br"),t()()(),n(1184,"td",21)(1185,"p"),e(1186,"Verifica se o texto "),n(1187,"em"),e(1188,"inicia"),t(),e(1189," com o valor pesquisado."),t()()(),n(1190,"tr",14)(1191,"td",15)(1192,"div",16)(1193,"span",17),e(1194," contains"),l(1195,"br"),t()()(),n(1196,"td",21)(1197,"p"),e(1198,"Verifica se o texto "),n(1199,"em"),e(1200,"cont\xE9m"),t(),e(1201," o valor pesquisado."),t()()(),n(1202,"tr",14)(1203,"td",15)(1204,"div",16)(1205,"span",17),e(1206," endsWith"),l(1207,"br"),t()()(),n(1208,"td",21)(1209,"p"),e(1210,"Verifica se o texto "),n(1211,"em"),e(1212,"finaliza"),t(),e(1213," com o valor pesquisado."),t()()()()())},dependencies:[x],encapsulation:2})}return a})();var He=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||a)(te(Se),te(fe))};static \u0275cmp=f({type:a,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title","Search",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return i.changeTab("doc")}),l(3,"sample-po-search-doc"),t(),n(4,"po-tab",3),u("p-click",function(){return i.changeTab("web")}),l(5,"sample-po-search-basic-view")(6,"sample-po-search-labs-view")(7,"sample-po-search-find-people-view")(8,"sample-po-search-listbox-view")(9,"sample-po-search-filter-select-view")(10,"sample-po-search-fields-locate-view"),t()()()),o&2&&(m("p-actions",i.actions),s(2),m("p-active",i.activeTab==="doc"),s(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[Me,g,v,Le,Ve,qe,Be,ze,We,Re],encapsulation:2})}return a})();var It=[{path:"",component:He}],Ke=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=J({type:a});static \u0275inj=K({imports:[ie.forChild(It),ie]})}return a})();var Mn=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=J({type:a});static \u0275inj=K({imports:[Fe,Ke]})}return a})();export{Mn as DocPoSearchModule};
