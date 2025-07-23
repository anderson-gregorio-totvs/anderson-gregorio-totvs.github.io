import{o as C,p as Ce}from"./chunk-NP7J2H5K.js";import{Bb as ye,Ea as ge,H as ue,M as he,O as Se,Ua as B,cb as be,eb as ve,lb as Ee,o as me,p as de,qa as fe,sa as z,xa as T,xb as E,y as ce,yb as y}from"./chunk-SHGC3HSE.js";import{$a as te,Ab as k,Bc as ie,Ca as M,Cc as ae,Dc as oe,Ec as re,Fc as le,Ga as X,Ha as D,Ia as L,Ja as I,Ka as t,L as q,La as e,M as j,Ma as l,P as A,Q,Qa as Y,Ra as c,Sa as O,Sc as se,T as S,U as f,Uc as pe,Wa as Z,Wc as J,Yb as ne,Za as $,_a as ee,bb as n,db as g,fb as x,gb as P,hb as _,ia as s,ib as W,ja as H,kb as w,pa as u,qa as N,va as R,za as m}from"./chunk-2SZI3FNB.js";var xe=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-search-basic"]],standalone:!1,decls:1,vars:0,template:function(r,a){r&1&&l(0,"po-search")},dependencies:[T],encapsulation:2})}return i})();var ze=i=>({"docs-sample-code-tabs":i}),Pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-search-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,a){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Search Basic"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-search-basic/sample-po-search-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-search></po-search>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-search-basic/sample-po-search-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-search-basic',
  templateUrl: './sample-po-search-basic.component.html',
  standalone: false
})
export class SamplePoSearchBasicComponent {}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-search-basic"),e(),l(23,"hr")),r&2&&(s(5),M("po-icon "+a.sampleCodeButtonIcon),s(),g(" ",a.sampleCodeButtonLabel,""),s(),m("ngClass",w(4,ze,a.hideSampleCodeTabs)))},dependencies:[k,C,E,y,xe],encapsulation:2})}return i})();var qe=["poSearch"];function je(i,v){if(i&1&&(t(0,"div")(1,"strong"),n(2),e(),n(3),e()),i&2){let o=v.$implicit,r=O().$implicit;s(2),g("",o,": "),s(),g(" ",r[o]," \xA0 ")}}function Ne(i,v){if(i&1&&(t(0,"li"),L(1,je,4,2,"div",null,D),e()),i&2){let o=v.$implicit,r=O();s(),I(r.changeFilter(o))}}var _e=(()=>{class i{http=A(ne);PoSearch;customLiterals;literals;properties;showListbox;search;event;service="https://po-sample-api.onrender.com/v1/heroes";items=[];filteredItems=[];fieldKeys=[];fieldSelect=[];tooltip;icon;filterMode;searchMode="action";fieldKey;itemsModel;filterModel;filterSelectModel;size;propertiesOptions=[{value:"disabled",label:"Disabled"}];iconsOptions=[{label:"fa-search",value:"fa fa-search"},{label:"an-user",value:"an an-user"},{label:"an-magnifying-glass",value:"an an-magnifying-glass"}];filterModeOptions=[{label:"Starts With",value:z.startsWith},{label:"Contains",value:z.contains},{label:"Ends With",value:z.endsWith}];searchModeOptions=[{label:"Action",value:"action"},{label:"Trigger",value:"trigger"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}ngOnChanges(o){o.items&&(this.filteredItems=this.items)}changeFilter(o){return Object.keys(o)}onChangeService(){this.http.get(this.service).subscribe(o=>{let r=o.items;r&&r.length>0&&(this.items=r,this.filteredItems=r,this.fieldKeys=["name"])})}updateFilterKeys(o){this.fieldKeys=this.convertToArray(o)}updateFilterSelect(o){this.fieldSelect=this.convertToArray(o)}filter(o){if(this.filteredItems=o,o.length===0){this.event="p-change-model";return}this.event="p-filtered-items-change"}changeItems(o){try{let r=JSON.parse(o);Array.isArray(r)&&(this.filteredItems=r,this.items=r)}catch{}}propertiesChange(o){this.properties=o}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}changeModel(o){this.search=o,this.event.length===0&&(this.event="p-change-model"),o.length===0&&(this.search="",this.event="")}restore(){this.search="",this.event="",this.icon=void 0,this.customLiterals=void 0,this.properties=[],this.showListbox=!1,this.filteredItems=void 0,this.items=void 0,this.itemsModel=void 0,this.filterModel='["name"]',this.filterSelectModel="",this.fieldKeys=void 0,this.fieldSelect=void 0,this.filterMode=z.startsWith,this.searchMode="action",this.literals=void 0,this.size="medium",this.cleanInput(),this.onChangeService()}cleanInput(){try{this.PoSearch.clearSearch()}catch{}}convertToArray(o){try{return JSON.parse(o)}catch{return}}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-search-labs"]],viewQuery:function(r,a){if(r&1&&$(qe,7),r&2){let d;ee(d=te())&&(a.PoSearch=d.first)}},standalone:!1,features:[Q],decls:31,vars:29,consts:[["poSearch",""],["f","ngForm"],[1,"po-row"],["name","Po Search",1,"po-md-12",3,"p-filtered-items-change","p-change-model","p-icon","p-items","p-disabled","p-filter-keys","p-filter-select","p-literals","p-filter-type","p-search-type","p-show-listbox","p-size"],[1,"po-md-12"],[3,"p-label"],[1,"sample-list-search","po-md-12","row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-3","po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","switch","p-label","showListbox",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","searchMode","p-label","Search Mode",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter Mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","items","p-label","Items","p-help",'Ex.: [ { "cidade": "S\xE3o Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "T\xF3quio", "pais": "Jap\xE3o" }]',1,"po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","literals","p-help",'Ex.: {"search": "Search people"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","Filter Keys","p-label","Filter Keys","p-help",'Ex.: ["cidade", "pais"]',1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","Filter Select","p-label","Filter Select","p-help",'Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,a){if(r&1){let d=Y();t(0,"div",2)(1,"po-search",3,0),c("p-filtered-items-change",function(p){return S(d),f(a.filter(p))})("p-change-model",function(p){return S(d),f(a.changeModel(p))}),e()(),l(3,"hr"),t(4,"div",2)(5,"po-accordion",4)(6,"po-accordion-item",5)(7,"po-widget",4)(8,"ul",6),L(9,Ne,3,0,"li",null,D),e()()()()(),l(11,"hr"),t(12,"div",2),l(13,"po-info",7)(14,"po-info",8),e(),l(15,"hr"),t(16,"form",null,1)(18,"po-checkbox-group",9),_("ngModelChange",function(p){return S(d),P(a.properties,p)||(a.properties=p),f(p)}),c("p-change",function(p){return S(d),f(a.propertiesChange(p))}),e(),t(19,"po-switch",10),_("ngModelChange",function(p){return S(d),P(a.showListbox,p)||(a.showListbox=p),f(p)}),e(),t(20,"po-radio-group",11),_("ngModelChange",function(p){return S(d),P(a.icon,p)||(a.icon=p),f(p)}),e(),t(21,"po-radio-group",12),_("ngModelChange",function(p){return S(d),P(a.searchMode,p)||(a.searchMode=p),f(p)}),e(),t(22,"po-radio-group",13),_("ngModelChange",function(p){return S(d),P(a.size,p)||(a.size=p),f(p)}),e(),t(23,"po-radio-group",14),_("ngModelChange",function(p){return S(d),P(a.filterMode,p)||(a.filterMode=p),f(p)}),e(),t(24,"po-input",15),_("ngModelChange",function(p){return S(d),P(a.itemsModel,p)||(a.itemsModel=p),f(p)}),c("p-change-model",function(p){return S(d),f(a.changeItems(p))}),e(),t(25,"po-input",16),_("ngModelChange",function(p){return S(d),P(a.literals,p)||(a.literals=p),f(p)}),c("p-change",function(){return S(d),f(a.changeLiterals())}),e(),t(26,"po-input",17),_("ngModelChange",function(p){return S(d),P(a.filterModel,p)||(a.filterModel=p),f(p)}),c("p-change-model",function(p){return S(d),f(a.updateFilterKeys(p))}),e(),t(27,"po-input",18),_("ngModelChange",function(p){return S(d),P(a.filterSelectModel,p)||(a.filterSelectModel=p),f(p)}),c("p-change",function(p){return S(d),f(a.updateFilterSelect(p))}),e(),l(28,"hr"),t(29,"div",2)(30,"po-button",19),c("p-click",function(){return S(d),f(a.restore())}),e()()()}r&2&&(s(),m("p-icon",a.icon)("p-items",a.items)("p-disabled",a.properties.includes("disabled"))("p-filter-keys",a.fieldKeys)("p-filter-select",a.fieldSelect)("p-literals",a.customLiterals)("p-filter-type",a.filterMode)("p-search-type",a.searchMode)("p-show-listbox",a.showListbox)("p-size",a.size),s(5),Z("p-label","Itens encontrados: ",a.filteredItems.length,""),s(3),I(a.filteredItems),s(4),m("p-value",a.search),s(),m("p-value",a.event),s(4),x("ngModel",a.properties),m("p-options",a.propertiesOptions),s(),x("ngModel",a.showListbox),s(),x("ngModel",a.icon),m("p-options",a.iconsOptions),s(),x("ngModel",a.searchMode),m("p-options",a.searchModeOptions),s(),x("ngModel",a.size),m("p-options",a.sizeOptions),s(),x("ngModel",a.filterMode),m("p-options",a.filterModeOptions),s(),x("ngModel",a.itemsModel),s(),x("ngModel",a.literals),s(),x("ngModel",a.filterModel),s(),x("ngModel",a.filterSelectModel))},dependencies:[le,ie,ae,re,oe,de,me,ce,he,Se,ge,fe,B,ye,T],styles:[".sample-list-search[_ngcontent-%COMP%]{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.sample-list-search[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}"]})}return i})();var Ke=i=>({"docs-sample-code-tabs":i}),Me=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-search-labs-view"]],standalone:!1,decls:27,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,a){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Search Labs"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-search-labs/sample-po-search-labs.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-search
    #poSearch
    class="po-md-12"
    name="Po Search"
    [p-icon]="icon"
    [p-items]="items"
    [p-disabled]="properties.includes('disabled')"
    [p-filter-keys]="fieldKeys"
    [p-filter-select]="fieldSelect"
    [p-literals]="customLiterals"
    [p-filter-type]="filterMode"
    [p-search-type]="searchMode"
    [p-show-listbox]="showListbox"
    [p-size]="size"
    (p-filtered-items-change)="filter($event)"
    (p-change-model)="changeModel($event)"
  ></po-search>
</div>

<hr />
<div class="po-row">
  <po-accordion class="po-md-12">
    <po-accordion-item p-label="Itens encontrados: { { filteredItems.length }}">
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
<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="search"> </po-info>

  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<hr />

<!-- Properties -->
<form #f="ngForm">
  <po-checkbox-group
    class="po-lg-3 po-md-6"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
    (p-change)="propertiesChange($event)"
  >
  </po-checkbox-group>

  <po-switch class="po-lg-3 po-md-6" name="switch" p-label="showListbox" [(ngModel)]="showListbox"> </po-switch>

  <po-radio-group class="po-md-12 po-lg-6" name="icon" [(ngModel)]="icon" p-label="Icon" [p-options]="iconsOptions">
  </po-radio-group>

  <po-radio-group
    class="po-md-12 po-lg-6"
    name="searchMode"
    [(ngModel)]="searchMode"
    p-label="Search Mode"
    [p-options]="searchModeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12 po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="filterMode"
    [(ngModel)]="filterMode"
    p-columns="4"
    p-label="Filter Mode"
    [p-options]="filterModeOptions"
  >
  </po-radio-group>

  <po-input
    class="po-md-12"
    name="items"
    [(ngModel)]="itemsModel"
    p-label="Items"
    p-help='Ex.: [ { "cidade": "S\xE3o Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "T\xF3quio", "pais": "Jap\xE3o" }]'
    (p-change-model)="changeItems($event)"
  >
  </po-input>
  <po-input
    class="po-md-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"search": "Search people"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    class="po-md-6"
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

  <hr />

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-search-labs/sample-po-search-labs.component.ts"),e(),t(19,"pre",9),n(20,`import {
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSearchComponent,
  PoSearchFilterMode,
  PoSearchLiterals
} from '@po-ui/ng-components';
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  private http = inject(HttpClient);

  @ViewChild('poSearch', { static: true }) PoSearch: PoSearchComponent;

  customLiterals: PoSearchLiterals;
  literals: any;
  properties: Array<string>;
  showListbox: boolean;
  search: string;
  event: string;
  service: string = 'https://po-sample-api.onrender.com/v1/heroes';
  items: Array<any> = [];
  filteredItems: Array<any> = [];
  fieldKeys: Array<any> = [];
  fieldSelect: Array<any> = [];
  tooltip: string;
  icon: string;
  filterMode: PoSearchFilterMode;
  searchMode = 'action';
  fieldKey: any;
  itemsModel: any;
  filterModel: any;
  filterSelectModel: any;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'disabled', label: 'Disabled' }];

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
    { label: 'Trigger', value: 'trigger' }
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
      if (items && items.length > 0) {
        this.items = items;
        this.filteredItems = items;
        this.fieldKeys = ['name'];
      }
    });
  }

  updateFilterKeys(event: string) {
    this.fieldKeys = this.convertToArray(event);
  }

  updateFilterSelect(event: string) {
    this.fieldSelect = this.convertToArray(event);
  }

  filter(event: Array<any>) {
    this.filteredItems = event;

    if (event.length === 0) {
      this.event = 'p-change-model';
      return;
    }

    this.event = 'p-filtered-items-change';
  }

  changeItems(items: any) {
    try {
      const new_items: Array<{}> = JSON.parse(items);

      if (Array.isArray(new_items)) {
        this.filteredItems = new_items;
        this.items = new_items;
      }
    } catch (error) {}
  }

  propertiesChange(event) {
    this.properties = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  changeModel(event: string) {
    this.search = event;
    if (this.event.length === 0) {
      this.event = 'p-change-model';
    }

    if (event.length === 0) {
      this.search = '';
      this.event = '';
    }
  }

  restore() {
    this.search = '';
    this.event = '';
    this.icon = undefined;
    this.customLiterals = undefined;
    this.properties = [];
    this.showListbox = false;
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
    this.size = 'medium';
    this.cleanInput();
    this.onChangeService();
  }

  cleanInput() {
    try {
      this.PoSearch.clearSearch();
    } catch (error) {}
  }

  private convertToArray(value: string): Array<any> {
    try {
      return JSON.parse(value);
    } catch {
      return undefined;
    }
  }
}
`),e(),t(21,"label",6),n(22,"sample-po-search-labs/sample-po-search-labs.service.ts"),e(),l(23,"pre",9),e()()()(),t(24,"div",10),l(25,"sample-po-search-labs"),e(),l(26,"hr")),r&2&&(s(5),M("po-icon "+a.sampleCodeButtonIcon),s(),g(" ",a.sampleCodeButtonLabel,""),s(),m("ngClass",w(4,Ke,a.hideSampleCodeTabs)))},dependencies:[k,C,E,y,_e],encapsulation:2})}return i})();var G=(()=>{class i{getItems(){return[{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(r){return new(r||i)};static \u0275prov=q({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Re(i,v){if(i&1&&(t(0,"div",0),l(1,"po-info",4)(2,"po-info",5)(3,"po-info",6),e()),i&2){let o=v.$implicit;s(),m("p-value",o.name),s(),m("p-value",o.nickname),s(),m("p-value",o.email)}}function Je(i,v){i&1&&l(0,"div")}function Ge(i,v){if(i&1&&(t(0,"li",7),n(1),R(2,Je,1,0,"div"),e(),t(3,"li",7),n(4),e()),i&2){let o=v.$implicit,r=O();s(),g(" Nickname: ",o.nickname," "),s(),X(r.compareObjects(o)?2:-1),s(2),g("Email: ",o.email,"")}}var we=(()=>{class i{service=A(G);items;filterKeys=["name","nickname","email"];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(o){this.peopleFiltered=o,o.length===4&&(this.peopleFiltered=[])}compareObjects(o){return!!this.peopleFiltered.includes(o)}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-search-find-people"]],standalone:!1,features:[W([G])],decls:8,vars:3,consts:[[1,"po-row"],["name","Po Search",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"],[1,"po-md-12","po-text-color-neutral-dark-40"]],template:function(r,a){r&1&&(t(0,"div",0)(1,"po-search",1),c("p-filtered-items-change",function(h){return a.filtered(h)}),e()(),l(2,"hr"),L(3,Re,4,3,"div",0,D),l(5,"hr"),t(6,"po-list-view",2),R(7,Ge,5,3,"ng-template",3),e()),r&2&&(s(),m("p-items",a.items)("p-filter-keys",a.filterKeys),s(2),I(a.peopleFiltered),s(3),m("p-items",a.items))},dependencies:[B,ve,be,T],styles:["li[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center}","li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:.75em;height:.75em;border-radius:50%;background-color:green;margin-left:10px}"]})}return i})();var Qe=i=>({"docs-sample-code-tabs":i}),ke=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-search-find-people-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,a){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Search Find People"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-search-find-people/sample-po-search-find-people.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    name="Po Search"
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
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-search-find-people/sample-po-search-find-people.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit, inject } from '@angular/core';
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
`),e(),t(21,"label",6),n(22,"sample-po-search-find-people/sample-po-search-find-people.service.ts"),e(),t(23,"pre",9),n(24,`import { Injectable } from '@angular/core';

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
`),e()()()()(),t(25,"div",10),l(26,"sample-po-search-find-people"),e(),l(27,"hr")),r&2&&(s(5),M("po-icon "+a.sampleCodeButtonIcon),s(),g(" ",a.sampleCodeButtonLabel,""),s(),m("ngClass",w(4,Qe,a.hideSampleCodeTabs)))},dependencies:[k,C,E,y,we],encapsulation:2})}return i})();var U=(()=>{class i{getItems(){return[{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(r){return new(r||i)};static \u0275prov=q({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Ye(i,v){if(i&1&&(t(0,"div",0),l(1,"hr")(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),e()),i&2){let o=v.$implicit;s(2),m("p-value",o.name),s(),m("p-value",o.nickname),s(),m("p-value",o.email)}}var Te=(()=>{class i{service=A(U);items;filterKeys=["name","nickname","email"];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(o){this.peopleFiltered=o,o.length===4&&(this.peopleFiltered=[])}compareObjects(o){return!!this.peopleFiltered.includes(o)}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-search-listbox"]],standalone:!1,features:[W([U])],decls:4,vars:2,consts:[[1,"po-row"],["name","Po Search","p-show-listbox","true","p-search-type","trigger",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(r,a){r&1&&(t(0,"div",0)(1,"po-search",1),c("p-filtered-items-change",function(h){return a.filtered(h)}),e()(),L(2,Ye,5,3,"div",0,D)),r&2&&(s(),m("p-items",a.items)("p-filter-keys",a.filterKeys),s(),I(a.peopleFiltered))},dependencies:[B,T],encapsulation:2})}return i})();var $e=i=>({"docs-sample-code-tabs":i}),Fe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-search-listbox-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,a){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Search With Listbox"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-search-listbox/sample-po-search-listbox.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    name="Po Search"
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
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-search-listbox/sample-po-search-listbox.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit, inject } from '@angular/core';
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
`),e(),t(21,"label",6),n(22,"sample-po-search-listbox/sample-po-search-listbox.service.ts"),e(),t(23,"pre",9),n(24,`import { Injectable } from '@angular/core';

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
`),e()()()()(),t(25,"div",10),l(26,"sample-po-search-listbox"),e(),l(27,"hr")),r&2&&(s(5),M("po-icon "+a.sampleCodeButtonIcon),s(),g(" ",a.sampleCodeButtonLabel,""),s(),m("ngClass",w(4,$e,a.hideSampleCodeTabs)))},dependencies:[k,C,E,y,Te],encapsulation:2})}return i})();function tt(i,v){if(i&1&&(t(0,"div",0)(1,"po-container",2),l(2,"po-info",3)(3,"po-info",4)(4,"po-info",5)(5,"po-info",6),e()()),i&2){let o=v.$implicit;s(2),m("p-value",o.name),s(),m("p-value",o.gender),s(),m("p-value",o.planet),s(),m("p-value",o.father)}}var De=(()=>{class i{items;filteredItems=[];filterSelect=[{label:"Personal",value:["name","gender"]},{label:"Planet",value:["planet"]},{label:"Family",value:"father"}];ngOnInit(){this.items=[{name:"Anakin Skywalker",gender:"male",planet:"Tatooine",father:"Darth Sidious"},{name:"Luke Skywalker",gender:"male",planet:"Tatooine",father:"Anakin Skywalker"},{name:"Leia Organa",gender:"female",planet:"Alderaan",father:"Anakin Skywalker"},{name:"Han Solo",gender:"male",planet:"Corellia",father:"Ovan"}]}filtered(o){this.filteredItems=o}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-search-filter-select"]],standalone:!1,decls:4,vars:2,consts:[[1,"po-row"],["p-aria-label","teste","name","Po Search","p-search-type","trigger","p-show-listbox","true","p-disabled","false",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-select"],[1,"po-row","po-mt-2"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Gender",1,"po-md-3",3,"p-value"],["p-label","Planet",1,"po-md-3",3,"p-value"],["p-label","Father",1,"po-md-3",3,"p-value"]],template:function(r,a){r&1&&(t(0,"div",0)(1,"po-search",1),c("p-filtered-items-change",function(h){return a.filtered(h)}),e()(),L(2,tt,6,4,"div",0,D)),r&2&&(s(),m("p-items",a.items)("p-filter-select",a.filterSelect),s(),I(a.filteredItems))},dependencies:[ue,B,T],encapsulation:2})}return i})();var it=i=>({"docs-sample-code-tabs":i}),Le=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-search-filter-select-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,a){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Search With Filter Select + Listbox"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-search-filter-select/sample-po-search-filter-select.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="teste"
    name="Po Search"
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
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-search-filter-select/sample-po-search-filter-select.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-search-filter-select"),e(),l(23,"hr")),r&2&&(s(5),M("po-icon "+a.sampleCodeButtonIcon),s(),g(" ",a.sampleCodeButtonLabel,""),s(),m("ngClass",w(4,it,a.hideSampleCodeTabs)))},dependencies:[k,C,E,y,De],encapsulation:2})}return i})();var Ie=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-search-doc"]],standalone:!1,decls:754,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoSearchFilterSelect[]"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","PoSearchLiterals"],["href","/documentation/po-i18n"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","searchMode"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","number"]],template:function(r,a){r&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoSearchModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,"M\xF3dulo do componente po-search."),e()(),t(7,"h3",3),n(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),n(11,"PoSearchComponent"),e()(),t(12,"div",2)(13,"p"),n(14,"O componente search, tamb\xE9m conhecido como barra de pesquisa, \xE9 utilizado para ajudar os usu\xE1rios a localizar um determinado conte\xFAdo"),e(),t(15,"p"),n(16,"Normalmente localizado no canto superior direito, junto com o \xEDcone de lupa, uma vez que este \xEDcone \xE9 amplamente reconhecido."),e(),t(17,"p"),n(18,"Portanto, \xE9 de extrema import\xE2ncia que, ao utilizar este componente, as pessoas respons\xE1veis por seu desenvolvimento considerem os seguintes crit\xE9rios."),e(),t(19,"h4"),n(20,"Boas pr\xE1ticas"),e(),t(21,"p"),n(22,"Foram estruturados os padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia aos usu\xE1rios. Por isso, \xE9 muito importante que ao utilizar este componente, as pessoas que o projetarem devem levar em considera\xE7\xE3o os seguintes crit\xE9rios:"),e(),t(23,"ul")(24,"li"),n(25,"Utilize labels para apresentar resultados que est\xE3o sendo exibidos e apresente os resultados mais relevantes primeiro."),e(),t(26,"li"),n(27,"Exiba uma mensagem clara quando n\xE3o forem encontrados resultados para busca e sempre que poss\xEDvel ofere\xE7a outras sugest\xF5es de busca."),e(),t(28,"li"),n(29,"Mantenha o texto original no campo de input, que facilita a a\xE7\xE3o do usu\xE1rio caso queira fazer uma nova busca com alguma modifica\xE7\xE3o na pesquisa."),e(),t(30,"li"),n(31,'Caso seja poss\xEDvel detectar um erro de digita\xE7\xE3o, mostre os resultados para a palavra "corrigida", isso evita a frustra\xE7\xE3o de n\xE3o obter resultados e n\xE3o for\xE7a o usu\xE1rio a realizar uma nova busca.'),e(),t(32,"li"),n(33,"Quando apropriado, destaque os termos da busca nos resultados."),e(),t(34,"li"),n(35,"A entrada do campo de pesquisa deve caber em uma linha. N\xE3o use entradas de pesquisa de v\xE1rias linhas."),e(),t(36,"li"),n(37,"Recomenda-se ter apenas uma pesquisa por p\xE1gina. Se voc\xEA precisar de v\xE1rias pesquisas, rotule-as claramente para indicar sua finalidade."),e(),t(38,"li"),n(39,"Se poss\xEDvel, forne\xE7a sugest\xF5es de pesquisa, seja em um helptext ou sugest\xE3o de pesquisa que \xE9 um autocomplete. Isso ajuda os usu\xE1rios a encontrar o que est\xE3o procurando, especialmente se os itens pesquis\xE1veis forem complexos."),e()(),t(40,"h4"),n(41,"Acessibilidade tratada no componente"),e(),t(42,"p"),n(43," Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),e(),t(44,"ul")(45,"li"),n(46,"Permitir a intera\xE7\xE3o via teclado (2.1.1: Keyboard (A));"),e(),t(47,"li"),n(48,"Altera\xE7\xE3o entre os estados precisa ser indicada por mais de um elemento al\xE9m da cor (1.4.1: Use of Color);"),e()(),t(49,"h4"),n(50,"Tokens customiz\xE1veis"),e(),t(51,"p"),n(52,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(53,"blockquote")(54,"p"),n(55,"Para maiores informa\xE7\xF5es, acesse o guia "),t(56,"a",6),n(57,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(58,"."),e()(),t(59,"table")(60,"thead")(61,"tr")(62,"th"),n(63,"Propriedade"),e(),t(64,"th"),n(65,"Descri\xE7\xE3o"),e(),t(66,"th"),n(67,"Valor Padr\xE3o"),e()()(),t(68,"tbody")(69,"tr")(70,"td")(71,"strong"),n(72,"Default Values"),e()(),l(73,"td")(74,"td"),e(),t(75,"tr")(76,"td")(77,"code"),n(78,"--font-family"),e()(),t(79,"td"),n(80,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(81,"td")(82,"code"),n(83,"var(--font-family-theme)"),e()()(),t(84,"tr")(85,"td")(86,"code"),n(87,"--font-size"),e()(),t(88,"td"),n(89,"Tamanho da fonte"),e(),t(90,"td")(91,"code"),n(92,"var(--font-size-default)"),e()()(),t(93,"tr")(94,"td")(95,"code"),n(96,"--text-color-placeholder"),e()(),t(97,"td"),n(98,"Cor do texto no placeholder"),e(),t(99,"td")(100,"code"),n(101,"var(--color-neutral-light-30)"),e()()(),t(102,"tr")(103,"td")(104,"code"),n(105,"--color"),e()(),t(106,"td"),n(107,"Cor principal do search"),e(),t(108,"td")(109,"code"),n(110,"var(--color-neutral-dark-70)"),e()()(),t(111,"tr")(112,"td")(113,"code"),n(114,"--border-radius"),e()(),t(115,"td"),n(116,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),t(117,"td")(118,"code"),n(119,"var(--border-radius-md)"),e()()(),t(120,"tr")(121,"td")(122,"code"),n(123,"--background"),e()(),t(124,"td"),n(125,"Cor de background"),e(),t(126,"td")(127,"code"),n(128,"var(--color-neutral-light-05)"),e()()(),t(129,"tr")(130,"td")(131,"code"),n(132,"--text-color"),e()(),t(133,"td"),n(134,"Cor do texto"),e(),t(135,"td")(136,"code"),n(137,"var(--color-neutral-dark-90)"),e()()(),t(138,"tr")(139,"td")(140,"code"),n(141,"--color-clear"),e()(),t(142,"td"),n(143,"Cor principal do icone close"),e(),t(144,"td")(145,"code"),n(146,"var(--color-action-default)"),e()()(),t(147,"tr")(148,"td")(149,"strong"),n(150,"Icon"),e()(),l(151,"td")(152,"td"),e(),t(153,"tr")(154,"td")(155,"code"),n(156,"--color-icon-read"),e()(),t(157,"td"),n(158,"Cor principal do icone de leitura"),e(),t(159,"td")(160,"code"),n(161,"var(--color-neutral-dark-70)"),e()()(),t(162,"tr")(163,"td")(164,"code"),n(165,"--color-icon"),e()(),t(166,"td"),n(167,"Cor principal do icone"),e(),t(168,"td")(169,"code"),n(170,"var(--color-action-default)"),e()()(),t(171,"tr")(172,"td")(173,"strong"),n(174,"Hover"),e()(),l(175,"td")(176,"td"),e(),t(177,"tr")(178,"td")(179,"code"),n(180,"--color-hover"),e()(),t(181,"td"),n(182,"Cor principal no estado hover"),e(),t(183,"td")(184,"code"),n(185,"var(--color-action-hover)"),e()()(),t(186,"tr")(187,"td")(188,"code"),n(189,"--background-hover"),e()(),t(190,"td"),n(191,"Cor de background no estado hover"),e(),t(192,"td")(193,"code"),n(194,"var(--color-brand-01-lightest)"),e()()(),t(195,"tr")(196,"td")(197,"strong"),n(198,"Focused"),e()(),l(199,"td")(200,"td"),e(),t(201,"tr")(202,"td")(203,"code"),n(204,"--color-focused"),e()(),t(205,"td"),n(206,"Cor principal no estado de focus"),e(),t(207,"td")(208,"code"),n(209,"var(--color-action-default)"),e()()(),t(210,"tr")(211,"td")(212,"code"),n(213,"--outline-color-focused"),e()(),t(214,"td"),n(215,"Cor do outline do estado de focus"),e(),t(216,"td")(217,"code"),n(218,"var(--color-action-focus)"),e()()(),t(219,"tr")(220,"td")(221,"strong"),n(222,"Disabled"),e()(),l(223,"td")(224,"td"),e(),t(225,"tr")(226,"td")(227,"code"),n(228,"--color-disabled"),e()(),t(229,"td"),n(230,"Cor principal no estado disabled"),e(),t(231,"td")(232,"code"),n(233,"var(--color-action-disabled)"),e()()(),t(234,"tr")(235,"td")(236,"code"),n(237,"--background-color-disabled"),e()(),t(238,"td"),n(239,"Cor de background no estado disabled"),e(),t(240,"td")(241,"code"),n(242,"var(--color-neutral-light-20)"),e()()()()()(),t(243,"div",7)(244,"h4",8),n(245,"Seletor"),e(),t(246,"pre",9),n(247,`<po-search
    p-aria-label="string"
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
    p-show-listbox="boolean"
    p-size="string"
    p-search-type="searchMode" >
</po-search>
`),e()(),t(248,"h4",10),n(249,"Propriedades"),e(),t(250,"table",11)(251,"tr",12)(252,"th",13),n(253,"Nome"),e(),t(254,"th",13),n(255,"Tipo"),e(),t(256,"th",13),n(257,"Padr\xE3o"),e(),t(258,"th",13),n(259,"Descri\xE7\xE3o"),e()(),t(260,"tr",14)(261,"td",15)(262,"div",16)(263,"span",17),n(264," p-aria-label"),l(265,"br"),e()()(),t(266,"td",18)(267,"code",19),n(268,"string"),e()(),t(269,"td",20),n(270,"-"),e(),t(271,"td",21)(272,"em")(273,"strong"),n(274,"(opcional)"),e()(),t(275,"p"),n(276,"Define um aria-label para o po-search."),e(),t(277,"blockquote")(278,"p"),n(279,"Devido o componente n\xE3o possuir uma label assim como outros campos de texto, o "),t(280,"code"),n(281,"aria-label"),e(),n(282," \xE9 utilizado para acessibilidade."),e()()()(),t(283,"tr",14)(284,"td",15)(285,"div",22)(286,"span",23),n(287," (p-change-model)"),l(288,"br"),e()()(),t(289,"td",18)(290,"code",24),n(291,"EventEmitter"),e()(),t(292,"td",20),n(293,"-"),e(),t(294,"td",21)(295,"em")(296,"strong"),n(297,"(opcional)"),e()(),t(298,"p"),n(299,"Evento disparado ao alterar valor do model."),e()()(),t(300,"tr",14)(301,"td",15)(302,"div",16)(303,"span",17),n(304," p-disabled"),l(305,"br"),e()()(),t(306,"td",18)(307,"code",25),n(308,"boolean"),e()(),t(309,"td",20)(310,"p")(311,"code"),n(312,"false"),e()()(),t(313,"td",21)(314,"em")(315,"strong"),n(316,"(opcional)"),e()(),t(317,"p"),n(318,"Desabilita o po-search e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),e()()(),t(319,"tr",14)(320,"td",15)(321,"div",22)(322,"span",23),n(323," (p-filter)"),l(324,"br"),e()()(),t(325,"td",18)(326,"code",24),n(327,"EventEmitter"),e()(),t(328,"td",20),n(329,"-"),e(),t(330,"td",21)(331,"em")(332,"strong"),n(333,"(opcional)"),e()(),t(334,"p"),n(335,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es nos filtros."),e()()(),t(336,"tr",14)(337,"td",15)(338,"div",16)(339,"span",17),n(340," p-filter-keys"),l(341,"br"),e()()(),t(342,"td",18)(343,"code",26),n(344,"Array<any>"),e()(),t(345,"td",20),n(346,"-"),e(),t(347,"td",21)(348,"p"),n(349,"Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente (p-items), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),e()()(),t(350,"tr",14)(351,"td",15)(352,"div",16)(353,"span",17),n(354," p-filter-select"),l(355,"br"),e()()(),t(356,"td",18)(357,"code",27),n(358,"PoSearchFilterSelect[]"),e()(),t(359,"td",20),n(360,"-"),e(),t(361,"td",21)(362,"p"),n(363,`Define os tipos de filtros (p-filter-keys) a serem aplicados na busca ou lista do componente (p-items).
Automaticamente adiciona a op\xE7\xE3o 'Todos', com um mapeamento de todas as op\xE7\xF5es passadas.`),e(),t(364,"blockquote")(365,"p"),n(366,"O uso desta propriedade torna a propriedade 'p-filter-keys' inv\xE1lida."),e()(),t(367,"p"),n(368,"Exemplo de uso:"),e(),t(369,"pre")(370,"code",28),n(371,`const filterSelect = [
  { label: 'personal', value: ['name', 'email', 'nickname'] },
  { label: 'address', value: ['country', 'state', 'city', 'street'] },
  { label: 'family', value: ['father', 'mother', 'dependents'] }
];
`),e()()()(),t(372,"tr",14)(373,"td",15)(374,"div",16)(375,"span",17),n(376," p-filter-type"),l(377,"br"),e()()(),t(378,"td",18)(379,"code",29),n(380,"PoSearchFilterMode"),e()(),t(381,"td",20)(382,"p")(383,"code"),n(384,"startsWith"),e()()(),t(385,"td",21)(386,"em")(387,"strong"),n(388,"(opcional)"),e()(),t(389,"p"),n(390,"Define o modo de pesquisa utilizado no campo de busca, quando habilitado. Valores definidos no enum: PoSearchFilterMode"),e()()(),t(391,"tr",14)(392,"td",15)(393,"div",22)(394,"span",23),n(395," (p-filtered-items-change)"),l(396,"br"),e()()(),t(397,"td",18)(398,"code",24),n(399,"EventEmitter"),e()(),t(400,"td",20),n(401,"-"),e(),t(402,"td",21)(403,"em")(404,"strong"),n(405,"(opcional)"),e()(),t(406,"p"),n(407,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no input."),e()()(),t(408,"tr",14)(409,"td",15)(410,"div",16)(411,"span",17),n(412," p-icon"),l(413,"br"),e()()(),t(414,"td",18)(415,"code",19),n(416,"string "),e(),t(417,"code",30),n(418," TemplateRef<void>"),e()(),t(419,"td",20),n(420,"-"),e(),t(421,"td",21)(422,"em")(423,"strong"),n(424,"(opcional)"),e()(),t(425,"p"),n(426,"Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente (p-items), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),e()()(),t(427,"tr",14)(428,"td",15)(429,"div",16)(430,"span",17),n(431," p-items"),l(432,"br"),e()()(),t(433,"td",18)(434,"code",26),n(435,"Array<any>"),e()(),t(436,"td",20),n(437,"-"),e(),t(438,"td",21)(439,"em")(440,"strong"),n(441,"(opcional)"),e()(),t(442,"p"),n(443,"Lista de itens que ser\xE3o utilizados para pesquisa"),e()()(),t(444,"tr",14)(445,"td",15)(446,"div",22)(447,"span",23),n(448," (p-listbox-onclick)"),l(449,"br"),e()()(),t(450,"td",18)(451,"code",24),n(452,"EventEmitter"),e()(),t(453,"td",20),n(454,"-"),e(),t(455,"td",21)(456,"em")(457,"strong"),n(458,"(opcional)"),e()(),t(459,"p"),n(460,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver click no listbox."),e()()(),t(461,"tr",14)(462,"td",15)(463,"div",16)(464,"span",17),n(465," p-literals"),l(466,"br"),e()()(),t(467,"td",18)(468,"code",31),n(469,"PoSearchLiterals"),e()(),t(470,"td",20),n(471,"-"),e(),t(472,"td",21)(473,"em")(474,"strong"),n(475,"(opcional)"),e()(),t(476,"p"),n(477,"Objeto com as literais usadas no "),t(478,"code"),n(479,"po-search"),e(),n(480,"."),e(),t(481,"p"),n(482,"Para utilizar basta passar a literal que deseja customizar:"),e(),t(483,"pre")(484,"code"),n(485,`const customLiterals: PoSearchLiterals = {
  search: 'Pesquisar',
  clean: 'Limpar',
};
`),e()(),t(486,"p"),n(487,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),e(),t(488,"pre")(489,"code"),n(490,`<po-search
  [p-literals]="customLiterals">
</po-search>
`),e()(),t(491,"blockquote")(492,"p"),n(493,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(494,"a",32)(495,"code"),n(496,"PoI18nService"),e()(),n(497," ou do browser."),e()()()(),t(498,"tr",14)(499,"td",15)(500,"div",16)(501,"span",17),n(502," p-show-listbox"),l(503,"br"),e()()(),t(504,"td",18)(505,"code",25),n(506,"boolean"),e()(),t(507,"td",20)(508,"p")(509,"code"),n(510,"false"),e()()(),t(511,"td",21)(512,"em")(513,"strong"),n(514,"(opcional)"),e()(),t(515,"p"),n(516,"Exibe uma lista (auto-complete) com as op\xE7\xF5es definidas no "),t(517,"code"),n(518,"p-filter-keys"),e(),n(519,` enquanto realiza uma busca,
respeitando o `),t(520,"code"),n(521,"p-filter-type"),e(),n(522," como modo de pesquisa."),e()()(),t(523,"tr",14)(524,"td",15)(525,"div",16)(526,"span",17),n(527," p-size"),l(528,"br"),e()()(),t(529,"td",18)(530,"code",19),n(531,"string"),e()(),t(532,"td",20)(533,"p")(534,"code"),n(535,"medium"),e()()(),t(536,"td",21)(537,"em")(538,"strong"),n(539,"(opcional)"),e()(),t(540,"p"),n(541,"Define o tamanho do componente:"),e(),t(542,"ul")(543,"li")(544,"code"),n(545,"small"),e(),n(546,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(547,"li")(548,"code"),n(549,"medium"),e(),n(550,": altura do input como 44px."),e()(),t(551,"blockquote")(552,"p"),n(553,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(554,"code"),n(555,"medium"),e(),n(556,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(557,"a",33),n(558,"po-theme"),e(),n(559,"."),e()()()(),t(560,"tr",14)(561,"td",15)(562,"div",16)(563,"span",17),n(564," p-search-type"),l(565,"br"),e()()(),t(566,"td",18)(567,"code",34),n(568,"searchMode"),e()(),t(569,"td",20)(570,"p")(571,"code"),n(572,"action"),e()()(),t(573,"td",21)(574,"em")(575,"strong"),n(576,"(opcional)"),e()(),t(577,"p"),n(578,"Determina a forma de realizar a pesquisa no componente"),e(),t(579,"p"),n(580,"Valores aceitos:"),e(),t(581,"ul")(582,"li")(583,"code"),n(584,"action"),e(),n(585,": Realiza a busca a cada caractere digitado."),e(),t(586,"li")(587,"code"),n(588,"trigger"),e(),n(589,": Realiza a busca ao pressionar "),t(590,"code"),n(591,"enter"),e(),n(592," ou clicar no \xEDcone de busca."),e()()()()(),t(593,"h3"),n(594,"Interfaces"),e(),t(595,"h4",35)(596,"code",5),n(597,"PoSearchFilterSelect"),e()(),t(598,"div",2)(599,"p"),n(600,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas no dropdown do "),t(601,"code"),n(602,"po-search"),e(),n(603,", ao usar a propriedade "),t(604,"code"),n(605,"p-filter-select"),e(),n(606,"."),e()(),t(607,"h4",10),n(608,"Propriedades"),e(),t(609,"table",11)(610,"tr",12)(611,"th",13),n(612,"Nome"),e(),t(613,"th",13),n(614,"Tipo"),e(),t(615,"th",13),n(616,"Descri\xE7\xE3o"),e()(),t(617,"tr",14)(618,"td",15)(619,"div",16)(620,"span",17),n(621," label"),l(622,"br"),e()()(),t(623,"td",18)(624,"code",19),n(625,"string"),e()(),t(626,"td",21)(627,"p"),n(628,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),e()()(),t(629,"tr",14)(630,"td",15)(631,"div",16)(632,"span",17),n(633," value"),l(634,"br"),e()()(),t(635,"td",18)(636,"code",36),n(637,"Array<string> "),e(),t(638,"code",19),n(639," string"),e()(),t(640,"td",21)(641,"p"),n(642,"Valores que ser\xE3o atribu\xEDdos ao "),t(643,"code"),n(644,"p-filter-keys"),e()()()()(),t(645,"h4",35)(646,"code",5),n(647,"PoSearchOption"),e()(),t(648,"div",2)(649,"p"),n(650,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista ao procurar do "),t(651,"code"),n(652,"po-search"),e(),n(653,"."),e()(),t(654,"h4",10),n(655,"Propriedades"),e(),t(656,"table",11)(657,"tr",12)(658,"th",13),n(659,"Nome"),e(),t(660,"th",13),n(661,"Tipo"),e(),t(662,"th",13),n(663,"Descri\xE7\xE3o"),e()(),t(664,"tr",14)(665,"td",15)(666,"div",16)(667,"span",17),n(668," label"),l(669,"br"),e()()(),t(670,"td",18)(671,"code",19),n(672,"string"),e()(),t(673,"td",21)(674,"em")(675,"strong"),n(676,"(opcional)"),e()(),t(677,"p"),n(678,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),e(),t(679,"blockquote")(680,"p"),n(681,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),t(682,"code"),n(683,"value"),e(),n(684,"."),e()()()(),t(685,"tr",14)(686,"td",15)(687,"div",16)(688,"span",17),n(689," value"),l(690,"br"),e()()(),t(691,"td",18)(692,"code",19),n(693,"string "),e(),t(694,"code",37),n(695," number"),e()(),t(696,"td",21)(697,"p"),n(698,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),t(699,"em"),n(700,"model"),e(),n(701,"."),e()()()(),t(702,"h3"),n(703,"Enums"),e(),t(704,"h4",4)(705,"code",5),n(706,"PoSearchFilterMode"),e()(),t(707,"div",2)(708,"p"),n(709,"Define o tipo de busca usado no po-search."),e()(),t(710,"h4",10),n(711,"Propriedades"),e(),t(712,"table",11)(713,"tr",12)(714,"th",13),n(715,"Nome"),e(),t(716,"th",13),n(717,"Descri\xE7\xE3o"),e()(),t(718,"tr",14)(719,"td",15)(720,"div",16)(721,"span",17),n(722," startsWith"),l(723,"br"),e()()(),t(724,"td",21)(725,"p"),n(726,"Verifica se o texto "),t(727,"em"),n(728,"inicia"),e(),n(729," com o valor pesquisado."),e()()(),t(730,"tr",14)(731,"td",15)(732,"div",16)(733,"span",17),n(734," contains"),l(735,"br"),e()()(),t(736,"td",21)(737,"p"),n(738,"Verifica se o texto "),t(739,"em"),n(740,"cont\xE9m"),e(),n(741," o valor pesquisado."),e()()(),t(742,"tr",14)(743,"td",15)(744,"div",16)(745,"span",17),n(746," endsWith"),l(747,"br"),e()()(),t(748,"td",21)(749,"p"),n(750,"Verifica se o texto "),t(751,"em"),n(752,"finaliza"),e(),n(753," com o valor pesquisado."),e()()()()())},dependencies:[C],encapsulation:2})}return i})();var Be=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,r){this.route=o,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let r=o.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:"merge"}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||i)(H(se),H(pe))};static \u0275cmp=u({type:i,selectors:[["ng-component"]],standalone:!1,decls:10,vars:4,consts:[["p-title","Search",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,a){r&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return a.changeTab("doc")}),l(3,"sample-po-search-doc"),e(),t(4,"po-tab",3),c("p-click",function(){return a.changeTab("web")}),l(5,"sample-po-search-basic-view")(6,"sample-po-search-labs-view")(7,"sample-po-search-find-people-view")(8,"sample-po-search-listbox-view")(9,"sample-po-search-filter-select-view"),e()()()),r&2&&(m("p-actions",a.actions),s(2),m("p-active",a.activeTab==="doc"),s(2),m("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"))},dependencies:[Ee,E,y,Pe,Me,ke,Fe,Le,Ie],encapsulation:2})}return i})();var rt=[{path:"",component:Be}],Ae=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=N({type:i});static \u0275inj=j({imports:[J.forChild(rt),J]})}return i})();var Zt=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=N({type:i});static \u0275inj=j({imports:[Ce,Ae]})}return i})();export{Zt as DocPoSearchModule};
