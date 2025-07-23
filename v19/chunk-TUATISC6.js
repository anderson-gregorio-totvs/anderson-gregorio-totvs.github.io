import{$ as Z,$a as k,$c as Be,$d as ze,A as he,Aa as ee,Bc as Oe,Ca as M,Cd as U,Da as I,Ea as F,F as u,Fc as O,G as b,Ga as e,Ha as pe,Ia as _,Jc as oe,Ka as S,La as g,Lb as j,Ma as v,Mb as De,Na as L,Nb as _e,Oa as te,Ob as z,Od as je,Pa as f,Pb as ke,T as m,U as w,Ua as ne,Va as fe,Wa as Ce,Wb as Ae,Xd as y,Yb as ie,Yd as T,Zb as ce,_ as h,_b as N,a as G,ab as ye,ad as Le,b as $,bc as Me,bd as X,cd as K,dd as ue,ea as J,ed as qe,fd as Ve,gd as C,ha as c,ib as Te,ka as D,la as xe,lb as Pe,md as ae,na as t,oa as n,oc as W,pa as i,pb as we,q as Ee,re as P,sd as Ne,se as We,ta as V,ua as E,va as Se,x as B,xc as Ie,y as Y,ya as ge,yd as Re,za as ve,zc as Fe,zd as He}from"./chunk-QVEZB6GT.js";var pt=()=>({table:"PO Table",angular:"PO-UI"}),ct=r=>[r],Ue=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=h({type:r,selectors:[["sample-po-table-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-items"]],template:function(l,o){l&1&&i(0,"po-table",0),l&2&&c("p-items",f(2,ct,te(1,pt)))},dependencies:[C],encapsulation:2})}return r})();var bt=r=>({"docs-sample-code-tabs":r}),Qe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=h({type:r,selectors:[["sample-po-table-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table Basic"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-basic/sample-po-table-basic.component.html"),n(),t(13,"pre",7),e(14,`<po-table [p-items]="[{ table: 'PO Table', angular: 'PO-UI' }]"> </po-table>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-basic/sample-po-table-basic.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-table-basic',
  templateUrl: './sample-po-table-basic.component.html',
  standalone: false
})
export class SamplePoTableBasicComponent {}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-table-basic"),n(),i(23,"hr")),l&2&&(m(5),D("po-icon "+o.sampleCodeButtonIcon),m(),_(" ",o.sampleCodeButtonLabel,""),m(),c("ngClass",f(4,bt,o.hideSampleCodeTabs)))},dependencies:[k,P,y,T,Ue],encapsulation:2})}return r})();var le=(()=>{class r{colors=["color-01","color-02","color-03","color-04","color-05","color-06","color-07","color-08","color-09","color-10","color-11","color-12"];generateNewItem(a){return{text:`Text ${a}`,page:`Link ${a}`,link:"https://po-ui.io/",number:a,date:this.generateRandomDate(),time:this.generateRandomTime(),dateTime:this.generateRandomDate(),currency:this.generateRandomNumber(),subtitle:this.generateRandomColor(),detail:[{info:"Detail Information 1",date:new Date,time:this.generateRandomTime(),currency:1500.5},{info:"Detail Information 2",date:new Date,time:this.generateRandomTime(),currency:6511}],label:this.generateRandomColor(),color:`Text ${a}`,icon:this.generateRandomIcon(a),boolean:this.generateRandomBoolean()}}getColumns(){return{text:{property:"text",width:"30%"},number:{property:"number",type:"number"},date:{property:"date",type:"date"},time:{property:"time",type:"time"},dateTime:{property:"dateTime",label:"DateTime",type:"dateTime"},currency:{property:"currency",type:"currency",format:"USD"},link:{property:"page",label:"Link",type:"link"},icon:{property:"icon",type:"icon"},boolean:{property:"boolean",type:"boolean"},subtitle:{property:"subtitle",type:"subtitle",width:"10%",subtitles:[{value:"color-01",color:"color-01",label:"Color 1",content:"1"},{value:"color-02",color:"color-02",label:"Color 2",content:"2"},{value:"color-03",color:"color-03",label:"Color 3",content:"3"},{value:"color-04",color:"color-04",label:"Color 4",content:"4"},{value:"color-05",color:"color-05",label:"Color 5",content:"5"},{value:"color-06",color:"color-06",label:"Color 6",content:"6"},{value:"color-07",color:"color-07",label:"Color 7",content:"7"},{value:"color-08",color:"color-08",label:"Color 8",content:"8"},{value:"color-09",color:"color-09",label:"Color 9",content:"9"},{value:"color-10",color:"color-10",label:"Color 10",content:"10"},{value:"color-11",color:"color-11",label:"Color 11",content:"11"},{value:"color-12",color:"color-12",label:"Color 12",content:"12"}]},label:{property:"label",type:"label",width:"10%",labels:[{value:"color-01",color:"color-01",label:"Color 1"},{value:"color-02",color:"color-02",label:"Color 2"},{value:"color-03",color:"color-03",label:"Color 3"},{value:"color-04",color:"color-04",label:"Color 4"},{value:"color-05",color:"color-05",label:"Color 5"},{value:"color-06",color:"color-06",label:"Color 6"},{value:"color-07",color:"color-07",label:"Color 7"},{value:"color-08",color:"color-08",label:"Color 8"},{value:"color-09",color:"color-09",label:"Color 9"},{value:"color-10",color:"color-10",label:"Color 10"},{value:"color-11",color:"color-11",label:"Color 11"},{value:"color-12",color:"color-12",label:"Color 12"}]},color:{property:"color",width:"10%",color:this.changeColor},detail:{property:"detail",type:"detail",detail:{columns:[{property:"info",label:"Detail"},{property:"date",label:"Detail Date",type:"date",format:"dd-MM-yy"},{property:"time",label:"Detail Time",type:"time"},{property:"currency",label:"Detail Currency",type:"currency"}],typeHeader:"inline"}}}}changeColor(a,l){return a[l].slice(5,7).trim()%2===0?"color-08":"color-11"}generateRandomBoolean(){return Math.random()>=.5}generateRandomNumber(){return(Math.random()*200+1).toFixed(3)}generateRandomColor(){return this.colors[Math.floor(Math.random()*this.colors.length)]}generateRandomIcon(a){let l=["an an-copy","an an-check","an an-camera","an an-plant","an an-building-apartment"],o=["an an-trash","an an-newspaper","an an-gas-pump","an an-chats","an an-bluetooth"],s=Math.floor(Math.random()*5);return[{value:`${a}`,icon:l[s],tooltip:l[s]},{value:`${a}`,icon:o[s],tooltip:o[s]}]}generateRandomTime(){let a=Math.floor(Math.random()*23),l=Math.floor(Math.random()*59),o=Math.floor(Math.random()*59),s=a<10?"0"+a.toString():a.toString(),p=l<10?"0"+l.toString():l.toString(),d=o<10?"0"+o.toString():o.toString();return`${s}:${p}:${d}`}generateRandomDate(){let a=Math.floor(Math.random()*28),l=Math.floor(Math.random()*12),o=Math.floor(Math.random()*24)+2e3;return new Date(o,l,a)}static \u0275fac=function(l){return new(l||r)};static \u0275prov=B({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var $e=(()=>{class r{samplePoTableLabsService;poModal;actions;actionsDefinition;actionTableFirst={action:this.openModal.bind(this),disabled:this.disableAction.bind(this),label:"First Action"};actionTableSecond={action:this.openModal.bind(this),label:"Second Action"};columns;columnsDefinition;columnsName;container;currentItem;customLiterals;event;height;items;itemIndex=0;literals;maxColumns;properties=["hideBatchActions","hideTableSearch"];selection;spacing=ue.Medium;filterType=X.startsWith;filteredColumns=[];actionsDefinitionOptions=[{label:"Actions",value:"actions"},{label:"Disable first action",value:"disableAction",disabled:!0},{label:"Single action",value:"singleAction"},{label:"First action visible",value:"visibleAction"}];selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Hide select all",value:"hideSelectAll",disabled:!0},{label:"Single select",value:"singleSelect",disabled:!0}];filterModeOptions=[{label:"Starts With",value:X.startsWith},{label:"Contains",value:X.contains},{label:"Ends With",value:X.endsWith}];columnsOptions=[{value:"text",label:"Text"},{value:"link",label:"Link"},{value:"number",label:"Number"},{value:"currency",label:"Currency"},{value:"date",label:"Date"},{value:"time",label:"Time"},{value:"dateTime",label:"DateTime"},{value:"subtitle",label:"Subtitle"},{value:"detail",label:"Detail"},{value:"label",label:"Label"},{value:"color",label:"Color"},{value:"icon",label:"Icon"},{value:"boolean",label:"Boolean"}];propertiesOptions=[{label:"Sort",value:"sort"},{label:"Striped",value:"striped"},{label:"Show more disabled",value:"showMoreDisabled"},{label:"Loading show more",value:"loadingShowMore"},{label:"Hide detail",value:"hideDetail"},{label:"Loading",value:"loading"},{label:"Auto collapse",value:"autoCollapse"},{label:"Hide columns manager",value:"hideColumnsManager"},{label:"Hide batch actions",value:"hideBatchActions"},{label:"Actions Right",value:"actionsRight"},{label:"Draggable",value:"draggable"},{label:"Hide action fixed columns",value:"fixed"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Virtual Scroll",value:"virtualScroll"}];typeHeaderOptions=[{label:"Inline",value:"inline"},{label:"None",value:"none"},{label:"Top",value:"top"}];typeSpacing=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];constructor(a){this.samplePoTableLabsService=a,this.columnsDefinition=this.samplePoTableLabsService?.getColumns()}ngOnInit(){this.restore()}addItem(){this.items=[...this.items,this.samplePoTableLabsService.generateNewItem(this.itemIndex)],this.itemIndex++}changeActionOptions(){let a=this.actionsDefinition.actions;this.actionsDefinitionOptions[1].disabled=!a,this.actionsDefinitionOptions[2].disabled=!a,this.actionsDefinitionOptions[3].disabled=!a,this.actionsDefinitionOptions=[].concat(this.actionsDefinitionOptions),this.actions=a?this.actionsDefinition.singleAction?[this.actionTableFirst]:[this.actionTableFirst,this.actionTableSecond]:[],this.actionTableFirst.visible=this.actionsDefinition.visibleAction,this.spacingSelectOrAction()}changeEvent(a){this.event=a}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}changeFilteredColumns(){this.filteredColumns=this.filteredColumns.toString().split(/,\s*/)}changeSelectionOptions(){let a=this.selection.includes("singleSelect"),l=this.selection.includes("selectable");this.selectionOptions[1].disabled=a||!l,this.selectionOptions[2].disabled=!l,this.selectionOptions=[].concat(this.selectionOptions),this.spacingSelectOrAction()}deleteItems(a){this.height&&(this.items=a)}disableAction(){return this.actionsDefinition.disableAction}openModal(a){this.currentItem=a.text,this.poModal.open()}restore(){this.actionsDefinition={visibleAction:null},this.actions=[],this.columnsDefinition.detail.detail.typeHeader=void 0,this.columnsName=[],this.container="",this.customLiterals=void 0,this.height=void 0,this.items=[],this.itemIndex=0,this.literals="",this.maxColumns=void 0,this.properties=["hideBatchActions","hideTableSearch"],this.selection=[],this.spacing=ue.Medium,this.filteredColumns=[],this.updateColumns(),this.changeActionOptions()}showMore(){this.addItem()}updateColumns(){this.columns=[],this.columnsName.forEach(a=>{this.columns.push(this.columnsDefinition[a])})}spacingSelectOrAction(){this.columnsName.length>0&&this.updateColumns()}static \u0275fac=function(l){return new(l||r)(w(le))};static \u0275cmp=h({type:r,selectors:[["sample-po-table-labs"]],viewQuery:function(l,o){if(l&1&&M(O,7),l&2){let s;I(s=F())&&(o.poModal=s.first)}},standalone:!1,features:[L([le])],decls:33,vars:48,consts:[["f","ngForm"],[3,"p-all-selected","p-all-unselected","p-collapsed","p-expanded","p-selected","p-show-more","p-unselected","p-delete-items","p-actions","p-actions-right","p-columns","p-container","p-height","p-filter-type","p-hide-detail","p-hide-columns-manager","p-hide-batch-actions","p-hide-table-search","p-hide-select-all","p-items","p-literals","p-filtered-columns","p-loading","p-max-columns","p-selectable","p-spacing","p-loading-show-more","p-show-more-disabled","p-single-select","p-sort","p-striped","p-virtual-scroll","p-auto-collapse","p-draggable","p-hide-action-fixed-columns"],[1,"po-row"],["p-label","Event",1,"po-md-12",3,"p-value"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["name","columnsName","p-label","Columns","p-columns","4",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","typeHeader","p-label","Column detail typeHeader",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","hideSelect","p-label","Column detail hideSelect",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","height","p-clean","","p-help","Height of table","p-label","Height",1,"po-md-3",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}',"p-label","Literals",1,"po-md-3",3,"ngModelChange","p-change","ngModel"],["name","filteredColumns","p-help",'Ex.: "text, time"',"p-label","Filter Columns",1,"po-md-3",3,"ngModelChange","p-change","ngModel"],["name","maxColumns","p-clean","","p-help","Max columns to be visible","p-label","Max Columns",1,"po-md-3",3,"ngModelChange","ngModel"],["name","actionsDefinition","p-columns","4","p-indeterminate","","p-label","Actions",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","spacing","p-label","Spacing",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","selection","p-help","To enable 'hide select all' and 'single select' check 'selectable'.","p-label","Selection",1,"po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","filterMode","p-columns","3","p-label","Filter mode",1,"po-md-5",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm","p-title","PO Table"],["p-label","Chosen Item:",3,"p-value"]],template:function(l,o){if(l&1){let s=V();t(0,"po-table",1),E("p-all-selected",function(){return u(s),b(o.changeEvent("p-all-selected"))})("p-all-unselected",function(){return u(s),b(o.changeEvent("p-all-unselected"))})("p-collapsed",function(){return u(s),b(o.changeEvent("p-collapsed"))})("p-expanded",function(){return u(s),b(o.changeEvent("p-expanded"))})("p-selected",function(){return u(s),b(o.changeEvent("p-selected"))})("p-show-more",function(){return u(s),b(o.showMore())})("p-unselected",function(){return u(s),b(o.changeEvent("p-unselected"))})("p-delete-items",function(d){return u(s),b(o.deleteItems(d))}),n(),i(1,"po-divider"),t(2,"div",2),i(3,"po-info",3),n(),i(4,"po-divider"),t(5,"div",2)(6,"po-button",4),E("p-click",function(){return u(s),b(o.addItem())}),n()(),i(7,"po-divider"),t(8,"form",null,0)(10,"div",2)(11,"po-checkbox-group",5),v("ngModelChange",function(d){return u(s),g(o.columnsName,d)||(o.columnsName=d),b(d)}),E("p-change",function(){return u(s),b(o.updateColumns())}),n()(),t(12,"div",2)(13,"po-radio-group",6),v("ngModelChange",function(d){return u(s),g(o.columnsDefinition.detail.detail.typeHeader,d)||(o.columnsDefinition.detail.detail.typeHeader=d),b(d)}),n(),t(14,"po-switch",7),v("ngModelChange",function(d){return u(s),g(o.columnsDefinition.detail.detail.hideSelect,d)||(o.columnsDefinition.detail.detail.hideSelect=d),b(d)}),n()(),t(15,"div",2)(16,"po-checkbox-group",8),v("ngModelChange",function(d){return u(s),g(o.properties,d)||(o.properties=d),b(d)}),n()(),t(17,"div",2)(18,"po-number",9),v("ngModelChange",function(d){return u(s),g(o.height,d)||(o.height=d),b(d)}),n(),t(19,"po-input",10),v("ngModelChange",function(d){return u(s),g(o.literals,d)||(o.literals=d),b(d)}),E("p-change",function(){return u(s),b(o.changeLiterals())}),n(),t(20,"po-input",11),v("ngModelChange",function(d){return u(s),g(o.filteredColumns,d)||(o.filteredColumns=d),b(d)}),E("p-change",function(){return u(s),b(o.changeFilteredColumns())}),n(),t(21,"po-number",12),v("ngModelChange",function(d){return u(s),g(o.maxColumns,d)||(o.maxColumns=d),b(d)}),n()(),t(22,"div",2)(23,"po-checkbox-group",13),v("ngModelChange",function(d){return u(s),g(o.actionsDefinition,d)||(o.actionsDefinition=d),b(d)}),E("p-change",function(){return u(s),b(o.changeActionOptions())}),n()(),t(24,"div",2)(25,"po-radio-group",14),v("ngModelChange",function(d){return u(s),g(o.spacing,d)||(o.spacing=d),b(d)}),n()(),t(26,"div",2)(27,"po-checkbox-group",15),v("ngModelChange",function(d){return u(s),g(o.selection,d)||(o.selection=d),b(d)}),E("p-change",function(){return u(s),b(o.changeSelectionOptions())}),n(),t(28,"po-radio-group",16),v("ngModelChange",function(d){return u(s),g(o.filterType,d)||(o.filterType=d),b(d)}),n()(),t(29,"div",2)(30,"po-button",17),E("p-click",function(){return u(s),b(o.restore())}),n()()(),t(31,"po-modal",18),i(32,"po-info",19),n()}l&2&&(c("p-actions",o.actions)("p-actions-right",o.properties.includes("actionsRight"))("p-columns",o.columns)("p-container",o.container)("p-height",o.height)("p-filter-type",o.filterType)("p-hide-detail",o.properties.includes("hideDetail"))("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-hide-batch-actions",o.properties.includes("hideBatchActions"))("p-hide-table-search",o.properties.includes("hideTableSearch"))("p-hide-select-all",o.selection.includes("hideSelectAll"))("p-items",o.items)("p-literals",o.customLiterals)("p-filtered-columns",o.filteredColumns)("p-loading",o.properties.includes("loading"))("p-max-columns",o.maxColumns)("p-selectable",o.selection.includes("selectable"))("p-spacing",o.spacing)("p-loading-show-more",o.properties.includes("loadingShowMore"))("p-show-more-disabled",o.properties.includes("showMoreDisabled"))("p-single-select",o.selection.includes("singleSelect"))("p-sort",o.properties.includes("sort"))("p-striped",o.properties.includes("striped"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-auto-collapse",o.properties.includes("autoCollapse"))("p-draggable",o.properties.includes("draggable"))("p-hide-action-fixed-columns",o.properties.includes("fixed")),m(3),c("p-value",o.event),m(8),S("ngModel",o.columnsName),c("p-options",o.columnsOptions),m(2),S("ngModel",o.columnsDefinition.detail.detail.typeHeader),c("p-options",o.typeHeaderOptions),m(),S("ngModel",o.columnsDefinition.detail.detail.hideSelect),m(2),S("ngModel",o.properties),c("p-options",o.propertiesOptions),m(2),S("ngModel",o.height),m(),S("ngModel",o.literals),m(),S("ngModel",o.filteredColumns),m(),S("ngModel",o.maxColumns),m(2),S("ngModel",o.actionsDefinition),c("p-options",o.actionsDefinitionOptions),m(2),S("ngModel",o.spacing),c("p-options",o.typeSpacing),m(2),S("ngModel",o.selection),c("p-options",o.selectionOptions),m(),S("ngModel",o.filterType),c("p-options",o.filterModeOptions),m(4),c("p-value",o.currentItem))},dependencies:[ke,j,De,z,_e,W,N,Fe,Oe,ae,Ne,Be,U,O,C],encapsulation:2})}return r})();var St=r=>({"docs-sample-code-tabs":r}),Je=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=h({type:r,selectors:[["sample-po-table-labs-view"]],standalone:!1,decls:38,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","E2E"],["appCodeHighlight","",1,"test"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table Labs"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-labs/sample-po-table-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-table
  [p-actions]="actions"
  [p-actions-right]="properties.includes('actionsRight')"
  [p-columns]="columns"
  [p-container]="container"
  [p-height]="height"
  [p-filter-type]="filterType"
  [p-hide-detail]="properties.includes('hideDetail')"
  [p-hide-columns-manager]="properties.includes('hideColumnsManager')"
  [p-hide-batch-actions]="properties.includes('hideBatchActions')"
  [p-hide-table-search]="properties.includes('hideTableSearch')"
  [p-hide-select-all]="selection.includes('hideSelectAll')"
  [p-items]="items"
  [p-literals]="customLiterals"
  [p-filtered-columns]="filteredColumns"
  [p-loading]="properties.includes('loading')"
  [p-max-columns]="maxColumns"
  [p-selectable]="selection.includes('selectable')"
  [p-spacing]="spacing"
  [p-loading-show-more]="properties.includes('loadingShowMore')"
  [p-show-more-disabled]="properties.includes('showMoreDisabled')"
  [p-single-select]="selection.includes('singleSelect')"
  [p-sort]="properties.includes('sort')"
  [p-striped]="properties.includes('striped')"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-all-selected)="changeEvent('p-all-selected')"
  (p-all-unselected)="changeEvent('p-all-unselected')"
  (p-collapsed)="changeEvent('p-collapsed')"
  (p-expanded)="changeEvent('p-expanded')"
  (p-selected)="changeEvent('p-selected')"
  (p-show-more)="showMore()"
  (p-unselected)="changeEvent('p-unselected')"
  [p-auto-collapse]="properties.includes('autoCollapse')"
  (p-delete-items)="deleteItems($event)"
  [p-draggable]="properties.includes('draggable')"
  [p-hide-action-fixed-columns]="properties.includes('fixed')"
>
</po-table>

<po-divider></po-divider>

<div class="po-row">
  <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider></po-divider>

<div class="po-row">
  <po-button class="po-md-3" p-label="Add Item" (p-click)="addItem()"> </po-button>
</div>

<po-divider></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="columnsName"
      [(ngModel)]="columnsName"
      p-label="Columns"
      p-columns="4"
      [p-options]="columnsOptions"
      (p-change)="updateColumns()"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-6"
      name="typeHeader"
      [(ngModel)]="columnsDefinition.detail.detail.typeHeader"
      p-label="Column detail typeHeader"
      [p-options]="typeHeaderOptions"
    >
    </po-radio-group>

    <po-switch
      class="po-lg-6"
      name="hideSelect"
      [(ngModel)]="columnsDefinition.detail.detail.hideSelect"
      p-label="Column detail hideSelect"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-number class="po-md-3" name="height" [(ngModel)]="height" p-clean p-help="Height of table" p-label="Height">
    </po-number>

    <po-input
      class="po-md-3"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input
      class="po-md-3"
      name="filteredColumns"
      [(ngModel)]="filteredColumns"
      p-help='Ex.: "text, time"'
      p-label="Filter Columns"
      (p-change)="changeFilteredColumns()"
    >
    </po-input>

    <po-number
      class="po-md-3"
      name="maxColumns"
      [(ngModel)]="maxColumns"
      p-clean
      p-help="Max columns to be visible"
      p-label="Max Columns"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="actionsDefinition"
      [(ngModel)]="actionsDefinition"
      p-columns="4"
      p-indeterminate
      p-label="Actions"
      [p-options]="actionsDefinitionOptions"
      (p-change)="changeActionOptions()"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-radio-group class="po-lg-6" name="spacing" [(ngModel)]="spacing" p-label="Spacing" [p-options]="typeSpacing">
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-6"
      name="selection"
      [(ngModel)]="selection"
      p-help="To enable 'hide select all' and 'single select' check 'selectable'."
      p-label="Selection"
      [p-options]="selectionOptions"
      (p-change)="changeSelectionOptions()"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-5"
      name="filterMode"
      [(ngModel)]="filterType"
      p-columns="3"
      p-label="Filter mode"
      [p-options]="filterModeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>

<po-modal p-click-out="true" p-size="sm" p-title="PO Table">
  <po-info p-label="Chosen Item:" [p-value]="currentItem"> </po-info>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-labs/sample-po-table-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoModalComponent,
  PoRadioGroupOption,
  PoTableAction,
  PoTableColumn,
  PoTableColumnSpacing,
  PoTableLiterals,
  PoSearchFilterMode
} from '@po-ui/ng-components';

import { SamplePoTableLabsService } from './sample-po-table-labs.service';

@Component({
  selector: 'sample-po-table-labs',
  templateUrl: './sample-po-table-labs.component.html',
  providers: [SamplePoTableLabsService],
  standalone: false
})
export class SamplePoTableLabsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  actions: Array<PoTableAction>;
  actionsDefinition: any;
  actionTableFirst: PoTableAction = {
    action: this.openModal.bind(this),
    disabled: this.disableAction.bind(this),
    label: 'First Action'
  };
  actionTableSecond: PoTableAction = { action: this.openModal.bind(this), label: 'Second Action' };

  columns: Array<PoTableColumn>;
  columnsDefinition: any;
  columnsName: Array<string>;
  container: string;
  currentItem: string;
  customLiterals: PoTableLiterals;
  event: string;
  height: number;
  items: Array<any>;
  itemIndex = 0;
  literals: string;
  maxColumns: number;
  properties: Array<string> = ['hideBatchActions', 'hideTableSearch'];
  selection: Array<string>;
  spacing: PoTableColumnSpacing = PoTableColumnSpacing.Medium;
  filterType: PoSearchFilterMode = PoSearchFilterMode.startsWith;
  filteredColumns: Array<string> = [];

  actionsDefinitionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Disable first action', value: 'disableAction', disabled: true },
    { label: 'Single action', value: 'singleAction' },
    { label: 'First action visible', value: 'visibleAction' }
  ];

  selectionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Selectable', value: 'selectable' },
    { label: 'Hide select all', value: 'hideSelectAll', disabled: true },
    { label: 'Single select', value: 'singleSelect', disabled: true }
  ];

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: PoSearchFilterMode.startsWith },
    { label: 'Contains', value: PoSearchFilterMode.contains },
    { label: 'Ends With', value: PoSearchFilterMode.endsWith }
  ];

  public readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'text', label: 'Text' },
    { value: 'link', label: 'Link' },
    { value: 'number', label: 'Number' },
    { value: 'currency', label: 'Currency' },
    { value: 'date', label: 'Date' },
    { value: 'time', label: 'Time' },
    { value: 'dateTime', label: 'DateTime' },
    { value: 'subtitle', label: 'Subtitle' },
    { value: 'detail', label: 'Detail' },
    { value: 'label', label: 'Label' },
    { value: 'color', label: 'Color' },
    { value: 'icon', label: 'Icon' },
    { value: 'boolean', label: 'Boolean' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Sort', value: 'sort' },
    { label: 'Striped', value: 'striped' },
    { label: 'Show more disabled', value: 'showMoreDisabled' },
    { label: 'Loading show more', value: 'loadingShowMore' },
    { label: 'Hide detail', value: 'hideDetail' },
    { label: 'Loading', value: 'loading' },
    { label: 'Auto collapse', value: 'autoCollapse' },
    { label: 'Hide columns manager', value: 'hideColumnsManager' },
    { label: 'Hide batch actions', value: 'hideBatchActions' },
    { label: 'Actions Right', value: 'actionsRight' },
    { label: 'Draggable', value: 'draggable' },
    { label: 'Hide action fixed columns', value: 'fixed' },
    { label: 'Hide Table Search', value: 'hideTableSearch' },
    { label: 'Virtual Scroll', value: 'virtualScroll' }
  ];

  public readonly typeHeaderOptions: Array<PoRadioGroupOption> = [
    { label: 'Inline', value: 'inline' },
    { label: 'None', value: 'none' },
    { label: 'Top', value: 'top' }
  ];

  public readonly typeSpacing: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  constructor(private samplePoTableLabsService: SamplePoTableLabsService) {
    this.columnsDefinition = this.samplePoTableLabsService?.getColumns();
  }

  ngOnInit() {
    this.restore();
  }

  addItem() {
    this.items = [...this.items, this.samplePoTableLabsService.generateNewItem(this.itemIndex)];
    this.itemIndex++;
  }

  changeActionOptions() {
    const actions = this.actionsDefinition.actions;

    this.actionsDefinitionOptions[1].disabled = !actions;
    this.actionsDefinitionOptions[2].disabled = !actions;
    this.actionsDefinitionOptions[3].disabled = !actions;

    this.actionsDefinitionOptions = [].concat(this.actionsDefinitionOptions);

    this.actions = actions
      ? this.actionsDefinition.singleAction
        ? [this.actionTableFirst]
        : [this.actionTableFirst, this.actionTableSecond]
      : [];
    this.actionTableFirst.visible = this.actionsDefinition.visibleAction;
    this.spacingSelectOrAction();
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

  changeFilteredColumns() {
    this.filteredColumns = this.filteredColumns.toString().split(/,\\s*/);
  }

  changeSelectionOptions() {
    const singleSelect = this.selection.includes('singleSelect');
    const selectable = this.selection.includes('selectable');

    this.selectionOptions[1].disabled = singleSelect || !selectable;
    this.selectionOptions[2].disabled = !selectable;

    this.selectionOptions = [].concat(this.selectionOptions);
    this.spacingSelectOrAction();
  }

  deleteItems(items: Array<any>) {
    if (this.height) {
      this.items = items;
    }
  }

  disableAction() {
    return this.actionsDefinition.disableAction;
  }

  openModal(row) {
    this.currentItem = row.text;
    this.poModal.open();
  }

  restore() {
    this.actionsDefinition = { visibleAction: null };
    this.actions = [];
    //this.columnsDefinition = this.samplePoTableLabsService.getColumns();
    this.columnsDefinition.detail.detail.typeHeader = undefined;
    this.columnsName = [];
    this.container = '';
    this.customLiterals = undefined;
    this.height = undefined;
    this.items = [];
    this.itemIndex = 0;
    this.literals = '';
    this.maxColumns = undefined;
    this.properties = ['hideBatchActions', 'hideTableSearch'];
    this.selection = [];
    this.spacing = PoTableColumnSpacing.Medium;
    this.filteredColumns = [];

    this.updateColumns();
    this.changeActionOptions();
  }

  showMore() {
    this.addItem();
  }

  updateColumns() {
    this.columns = [];
    this.columnsName.forEach(column => {
      this.columns.push(this.columnsDefinition[column]);
    });
  }

  private spacingSelectOrAction() {
    if (this.columnsName.length > 0) {
      this.updateColumns();
    }
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-labs/sample-po-table-labs.service.ts"),n(),t(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableLabsService {
  private readonly colors = [
    'color-01',
    'color-02',
    'color-03',
    'color-04',
    'color-05',
    'color-06',
    'color-07',
    'color-08',
    'color-09',
    'color-10',
    'color-11',
    'color-12'
  ];

  generateNewItem(index: number) {
    return {
      text: \`Text \${index}\`,
      page: \`Link \${index}\`,
      link: 'https://po-ui.io/',
      number: index,
      date: this.generateRandomDate(),
      time: this.generateRandomTime(),
      dateTime: this.generateRandomDate(),
      currency: this.generateRandomNumber(),
      subtitle: this.generateRandomColor(),
      detail: [
        { info: \`Detail Information 1\`, date: new Date(), time: this.generateRandomTime(), currency: 1500.5 },
        { info: \`Detail Information 2\`, date: new Date(), time: this.generateRandomTime(), currency: 6511 }
      ],
      label: this.generateRandomColor(),
      color: \`Text \${index}\`,
      icon: this.generateRandomIcon(index),
      boolean: this.generateRandomBoolean()
    };
  }

  getColumns() {
    return {
      text: <PoTableColumn>{ property: 'text', width: '30%' },
      number: <PoTableColumn>{ property: 'number', type: 'number' },
      date: <PoTableColumn>{ property: 'date', type: 'date' },
      time: <PoTableColumn>{ property: 'time', type: 'time' },
      dateTime: <PoTableColumn>{ property: 'dateTime', label: 'DateTime', type: 'dateTime' },
      currency: <PoTableColumn>{ property: 'currency', type: 'currency', format: 'USD' },
      link: <PoTableColumn>{ property: 'page', label: 'Link', type: 'link' },
      icon: <PoTableColumn>{ property: 'icon', type: 'icon' },
      boolean: <PoTableColumn>{ property: 'boolean', type: 'boolean' },
      subtitle: <PoTableColumn>{
        property: 'subtitle',
        type: 'subtitle',
        width: '10%',
        subtitles: [
          { value: 'color-01', color: 'color-01', label: 'Color 1', content: '1' },
          { value: 'color-02', color: 'color-02', label: 'Color 2', content: '2' },
          { value: 'color-03', color: 'color-03', label: 'Color 3', content: '3' },
          { value: 'color-04', color: 'color-04', label: 'Color 4', content: '4' },
          { value: 'color-05', color: 'color-05', label: 'Color 5', content: '5' },
          { value: 'color-06', color: 'color-06', label: 'Color 6', content: '6' },
          { value: 'color-07', color: 'color-07', label: 'Color 7', content: '7' },
          { value: 'color-08', color: 'color-08', label: 'Color 8', content: '8' },
          { value: 'color-09', color: 'color-09', label: 'Color 9', content: '9' },
          { value: 'color-10', color: 'color-10', label: 'Color 10', content: '10' },
          { value: 'color-11', color: 'color-11', label: 'Color 11', content: '11' },
          { value: 'color-12', color: 'color-12', label: 'Color 12', content: '12' }
        ]
      },

      label: <PoTableColumn>{
        property: 'label',
        type: 'label',
        width: '10%',
        labels: [
          { value: 'color-01', color: 'color-01', label: 'Color 1' },
          { value: 'color-02', color: 'color-02', label: 'Color 2' },
          { value: 'color-03', color: 'color-03', label: 'Color 3' },
          { value: 'color-04', color: 'color-04', label: 'Color 4' },
          { value: 'color-05', color: 'color-05', label: 'Color 5' },
          { value: 'color-06', color: 'color-06', label: 'Color 6' },
          { value: 'color-07', color: 'color-07', label: 'Color 7' },
          { value: 'color-08', color: 'color-08', label: 'Color 8' },
          { value: 'color-09', color: 'color-09', label: 'Color 9' },
          { value: 'color-10', color: 'color-10', label: 'Color 10' },
          { value: 'color-11', color: 'color-11', label: 'Color 11' },
          { value: 'color-12', color: 'color-12', label: 'Color 12' }
        ]
      },

      color: <PoTableColumn>{ property: 'color', width: '10%', color: this.changeColor },

      detail: <PoTableColumn>{
        property: 'detail',
        type: 'detail',
        detail: {
          columns: [
            { property: 'info', label: 'Detail' },
            { property: 'date', label: 'Detail Date', type: 'date', format: 'dd-MM-yy' },
            { property: 'time', label: 'Detail Time', type: 'time' },
            { property: 'currency', label: 'Detail Currency', type: 'currency' }
          ],
          typeHeader: 'inline'
        }
      }
    };
  }

  private changeColor(row, column) {
    const number = row[column].slice(5, 7).trim();

    return number % 2 === 0 ? 'color-08' : 'color-11';
  }

  private generateRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }

  private generateRandomNumber() {
    return (Math.random() * 200 + 1).toFixed(3);
  }

  private generateRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  private generateRandomIcon(index: number) {
    const iconsOne = ['an an-copy', 'an an-check', 'an an-camera', 'an an-plant', 'an an-building-apartment'];
    const iconsTwo = ['an an-trash', 'an an-newspaper', 'an an-gas-pump', 'an an-chats', 'an an-bluetooth'];

    const randomIcon = Math.floor(Math.random() * 5);

    return [
      { value: \`\${index}\`, icon: iconsOne[randomIcon], tooltip: iconsOne[randomIcon] },
      { value: \`\${index}\`, icon: iconsTwo[randomIcon], tooltip: iconsTwo[randomIcon] }
    ];
  }

  private generateRandomTime() {
    const hour = Math.floor(Math.random() * 23);
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    const hourValid = hour < 10 ? '0' + hour.toString() : hour.toString();
    const minutesValid = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const secondsValid = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return \`\${hourValid}:\${minutesValid}:\${secondsValid}\`;
  }

  private generateRandomDate() {
    const day = Math.floor(Math.random() * 28);
    const month = Math.floor(Math.random() * 12);
    const year = Math.floor(Math.random() * 24) + 2000;

    return new Date(year, month, day);
  }
}
`),n()()(),t(25,"po-tab",10)(26,"div")(27,"label",6),e(28,"sample-po-table-labs/sample-po-table-labs.component.e2e-spec.ts"),n(),t(29,"pre",11),e(30,`import { PoTableLabsPage } from './sample-po-table-labs.component.po';

describe('Po-Table-Labs E2E', () => {
  const table: PoTableLabsPage = new PoTableLabsPage();

  beforeEach(() => {
    table.navigateTo();
  });

  it('checkboxs disable on Init', () => {
    expect(table.poCheckboxSingleSelect.click()).toBeFalsy();
    expect(table.poCheckboxNoBrasil.click()).toBeFalsy();
    expect(table.poCheckboxHideSelectAll.click()).toBeFalsy();
  });

  it('Load more results', () => {
    table.poButtonChangeMore.click();
    expect(table.poButtonChangeMore.isEnabled()).toBeFalsy();
    expect(table.poCheckboxShowMore.isSelected()).toBeFalsy();
  });

  it('Checkbox select all disable', () => {
    table.poCheckboxShowCheckbox.click();
    table.poCheckboxSingleSelect.click();
    expect(table.poCheckboxHideSelectAll.click()).toBeFalsy();
  });

  it('Checkis if column \xB4Destino\xB4 exist', () => {
    expect(table.poTableColumnDestiny.isPresent()).toBeTruthy();
  });

  it('Checkis if column \xB4Pa\xEDs\xB4 exist', () => {
    expect(table.poTableColumnCountry.isPresent()).toBeTruthy();
  });

  it('Checkis if column \xB4Ida\xB4 exist', () => {
    expect(table.poTableColumnLeave.isPresent()).toBeTruthy();
  });

  it('Checkis if column \xB4Volta\xB4 exist', () => {
    expect(table.poTableColumnBack.isPresent()).toBeTruthy();
  });

  it('Checkis if column \xB4N\xFAmero do voo\xB4 exist', () => {
    expect(table.poTableColumnFlightNumber.isPresent()).toBeTruthy();
  });

  it('Checkis if column \xB4Valor\xB4 exist', () => {
    expect(table.poTableColumnPrice.isPresent()).toBeTruthy();
  });

  it('Checks if checkbox \xB4Exibir sele\xE7\xE3o\xB4 exist', () => {
    expect(table.poCheckboxShowCheckbox.isPresent()).toBeTruthy();
  });

  it('Checks if checkbox \xB4Sele\xE7\xE3o de apenas uma linha\xB4 exist', () => {
    expect(table.poCheckboxSingleSelect.isPresent()).toBeTruthy();
  });

  it('Checks if checkbox \xB4Carregar mais resultados\xB4 exist', () => {
    expect(table.poCheckboxShowMore.isPresent()).toBeTruthy();
  });

  it('Checks if checkbox \xB4Desabilitar detalhes para Brasil\xB4 exist', () => {
    expect(table.poCheckboxNoBrasil.isPresent()).toBeTruthy();
  });

  it('Checks if checkbox \xB4Esconder checkbox selecionar todos\xB4 exist', () => {
    expect(table.poCheckboxHideSelectAll.isPresent()).toBeTruthy();
  });

  it('Checks if checkbox \xB4Permitir ordena\xE7\xE3o\xB4 exist', () => {
    expect(table.poCheckboxAllowSort.isPresent()).toBeTruthy();
  });

  it('Checks if checkbox \xB4Exibir a\xE7\xF5es\xB4 exist', () => {
    expect(table.poCheckboxShowActions.isPresent()).toBeTruthy();
  });

  it('Checks if checkbox \xB4Exibir tabela listrada (striped)\xB4 exist', () => {
    expect(table.poCheckboxStripedTable.isPresent()).toBeTruthy();
  });

  it('Check if icon more is present ', () => {
    table.poCheckboxShowActions.click();
    expect(table.poTableActions.isPresent()).toBeTruthy();
  });

  it('Checks if checkbox \xB4Habilitar recurso de drag and drop (draggable)\xB4 exist', () => {
    expect(table.poCheckboxDraggableTable.isPresent()).toBeTruthy();
  });
});
`),n(),t(31,"label",6),e(32,"sample-po-table-labs/sample-po-table-labs.component.po.ts"),n(),t(33,"pre",11),e(34,`import { browser, by, element } from 'protractor';

export class PoTableLabsPage {
  private sampleTable = 'sample-po-table-labs';

  private checkLabel = '.po-checkbox-group-label';

  private checkInput = '.po-checkbox-group-input';

  navigateTo() {
    return browser.get(browser.baseUrl + '/documentation/po-table?view=web');
  }

  private getPoCheckbox(checkGroup: string, checkValue: string) {
    return element(
      by.css(
        \`\${this.sampleTable} po-checkbox-group[name="\${checkGroup}"] \${this.checkInput}[value="\${checkValue}"]+\${this.checkLabel}\`
      )
    );
  }

  private getPoTableColumn(columnName: string) {
    return element.all(
      by.cssContainingText(\`\${this.sampleTable} po-table .po-table-header-ellipsis span\`, \`\${columnName}\`)
    );
  }

  get poCheckboxAllowSort() {
    return this.getPoCheckbox('options', 'allowSort');
  }

  get poCheckboxStripedTable() {
    return this.getPoCheckbox('options', 'stripedTable');
  }

  get poCheckboxShowMore() {
    return this.getPoCheckbox('options', 'showMore');
  }

  get poCheckboxShowCheckbox() {
    return this.getPoCheckbox('checkboxOptions', 'showCheckbox');
  }

  get poCheckboxSingleSelect() {
    return this.getPoCheckbox('checkboxOptions', 'singleSelect');
  }

  get poCheckboxHideSelectAll() {
    return this.getPoCheckbox('checkboxOptions', 'hideSelectAll');
  }

  get poCheckboxShowActions() {
    return this.getPoCheckbox('actionOptions', 'showActions');
  }

  get poCheckboxNoBrasil() {
    return this.getPoCheckbox('actionOptions', 'noBrazil');
  }

  get poCheckboxShowSingleAction() {
    return this.getPoCheckbox('actionOptions', 'showSingleAction');
  }

  get poCheckboxDraggableTable() {
    return this.getPoCheckbox('options', 'draggable');
  }

  get poTableColumnDestiny() {
    return this.getPoTableColumn('Destino');
  }

  get poTableColumnCountry() {
    return this.getPoTableColumn('Pa\xEDs');
  }

  get poTableColumnLeave() {
    return this.getPoTableColumn('Ida');
  }

  get poTableColumnBack() {
    return this.getPoTableColumn('Volta');
  }

  get poTableColumnFlightNumber() {
    return this.getPoTableColumn('N\xFAmero do voo');
  }

  get poTableColumnPrice() {
    return this.getPoTableColumn('Valor');
  }

  get poButtonChangeMore() {
    return element(by.css(\`\${this.sampleTable} .po-table-footer .po-button\`));
  }

  get poTableActions() {
    return element.all(by.css(\`\${this.sampleTable} po-table .po-icon.an an-dots-three.po-clickable\`));
  }
}
`),n()()()()(),t(35,"div",12),i(36,"sample-po-table-labs"),n(),i(37,"hr")),l&2&&(m(5),D("po-icon "+o.sampleCodeButtonIcon),m(),_(" ",o.sampleCodeButtonLabel,""),m(),c("ngClass",f(4,St,o.hideSampleCodeTabs)))},dependencies:[k,P,y,T,$e],encapsulation:2})}return r})();var vt=["table"],Xe=(()=>{class r{tableComponent;service="";key;value;sampleService="";params;filters=[];columns=[{property:"id"},{property:"name"}];stringColumns=JSON.stringify(this.columns);defaultColumns=[...this.columns];addFilter(a,l){this.params=$(G({},this.params),{[a]:l}),this.setFilters(a,l),this.tableComponent.applyFilters(this.params),this.resetInputs()}changeService(a){this.sampleService=a}onChangeColumns(a){try{this.columns=JSON.parse(a)}catch{this.stringColumns=JSON.stringify(this.defaultColumns),this.columns=[...this.defaultColumns]}}removeAllItems(){this.tableComponent.applyFilters({})}removeItem(a){delete this.params[a.removedDisclaimer.property],this.tableComponent.applyFilters(this.params)}resetInputs(){this.key=void 0,this.value=void 0}setFilters(a,l){let o=this.filters.find(s=>s.property===a);o?(this.filters.splice(this.filters.indexOf(o),1),o=Object.assign({},o)):o={property:a},o.value=l,o.label=`${a.charAt(0).toUpperCase()+a.slice(1)}: ${l}`,this.filters=[...this.filters,o]}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=h({type:r,selectors:[["sample-po-table-with-api"]],viewQuery:function(l,o){if(l&1&&M(vt,5),l&2){let s;I(s=F())&&(o.tableComponent=s.first)}},standalone:!1,decls:16,vars:12,consts:[["table",""],[1,"po-row"],["p-label","URL API service","p-help","https://po-sample-api.onrender.com/v1/heroes",1,"po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Columns",1,"po-md-12"],["p-label","Columns","p-help","[{ property: 'name' }]",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-rows"],["p-label","Filters",1,"po-md-12"],["p-label","Key","p-help","Object key",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Value","p-help","Object value",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Filter",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-mt-1","po-md-12",3,"p-remove","p-remove-all","p-disclaimers"],[1,"po-mt-1","po-md-12",3,"p-columns","p-service-api","p-height","p-hide-table-search","p-infinite-scroll"]],template:function(l,o){if(l&1){let s=V();t(0,"div",1)(1,"po-input",2),v("ngModelChange",function(d){return u(s),g(o.service,d)||(o.service=d),b(d)}),E("p-change",function(){return u(s),b(o.changeService(o.service))}),n()(),t(2,"div",1),i(3,"po-divider",3),t(4,"po-textarea",4),v("ngModelChange",function(d){return u(s),g(o.stringColumns,d)||(o.stringColumns=d),b(d)}),E("p-change",function(d){return u(s),b(o.onChangeColumns(d))}),n()(),t(5,"div",1),i(6,"po-divider",5),t(7,"po-input",6),v("ngModelChange",function(d){return u(s),g(o.key,d)||(o.key=d),b(d)}),n(),t(8,"po-input",7),v("ngModelChange",function(d){return u(s),g(o.value,d)||(o.value=d),b(d)}),n()(),t(9,"div",1)(10,"po-button",8),E("p-click",function(){return u(s),b(o.addFilter(o.key,o.value))}),n()(),t(11,"div",1)(12,"po-disclaimer-group",9),E("p-remove",function(d){return u(s),b(o.removeItem(d))})("p-remove-all",function(){return u(s),b(o.removeAllItems())}),n()(),t(13,"div",1),i(14,"po-table",10,0),n()}l&2&&(m(),S("ngModel",o.service),m(3),S("ngModel",o.stringColumns),c("p-rows",5),m(3),S("ngModel",o.key),m(),S("ngModel",o.value),m(2),c("p-disabled",!o.key||!o.value),m(2),c("p-disclaimers",o.filters),m(2),c("p-columns",o.columns)("p-service-api",o.sampleService)("p-height",300)("p-hide-table-search",!1)("p-infinite-scroll",!0))},dependencies:[j,z,W,Ie,N,ae,He,C],encapsulation:2})}return r})();var Ct=r=>({"docs-sample-code-tabs":r}),Ke=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=h({type:r,selectors:[["sample-po-table-with-api-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table using API"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-with-api/sample-po-table-with-api.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row">
  <po-input
    class="po-md-12"
    p-label="URL API service"
    p-help="https://po-sample-api.onrender.com/v1/heroes"
    [(ngModel)]="service"
    (p-change)="changeService(service)"
  >
  </po-input>
</div>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Columns"></po-divider>
  <po-textarea
    class="po-md-12"
    p-label="Columns"
    p-help="[{ property: 'name' }]"
    [(ngModel)]="stringColumns"
    [p-rows]="5"
    (p-change)="onChangeColumns($event)"
  >
  </po-textarea>
</div>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Filters"></po-divider>
  <po-input class="po-md-6" p-label="Key" p-help="Object key" [(ngModel)]="key"></po-input>
  <po-input class="po-md-6" p-label="Value" p-help="Object value" [(ngModel)]="value"></po-input>
</div>
<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Add Filter"
    (p-click)="addFilter(key, value)"
    [p-disabled]="!key || !value"
  ></po-button>
</div>
<div class="po-row">
  <po-disclaimer-group
    class="po-mt-1 po-md-12"
    [p-disclaimers]="filters"
    (p-remove)="removeItem($event)"
    (p-remove-all)="removeAllItems()"
  >
  </po-disclaimer-group>
</div>
<div class="po-row">
  <po-table
    class="po-mt-1 po-md-12"
    #table
    [p-columns]="columns"
    [p-service-api]="sampleService"
    [p-height]="300"
    [p-hide-table-search]="false"
    [p-infinite-scroll]="true"
  >
  </po-table>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-with-api/sample-po-table-with-api.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';
import { PoDisclaimerGroupRemoveAction, PoDisclaimer, PoTableComponent, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-table-with-api',
  templateUrl: './sample-po-table-with-api.component.html',
  standalone: false
})
export class SamplePoTableWithApiComponent {
  @ViewChild('table') tableComponent: PoTableComponent;

  service = '';
  key: string;
  value: string;
  sampleService = '';
  params: {};
  filters: Array<PoDisclaimer> = [];
  columns: Array<PoTableColumn> = [{ property: 'id' }, { property: 'name' }];
  stringColumns: string = JSON.stringify(this.columns);

  private defaultColumns: Array<PoTableColumn> = [...this.columns];

  addFilter(property: string, value: any) {
    this.params = { ...this.params, [property]: value };

    this.setFilters(property, value);

    this.tableComponent.applyFilters(this.params);

    this.resetInputs();
  }

  changeService(service) {
    this.sampleService = service;
  }

  onChangeColumns(columns) {
    try {
      this.columns = JSON.parse(columns);
    } catch (e) {
      this.stringColumns = JSON.stringify(this.defaultColumns);
      this.columns = [...this.defaultColumns];
    }
  }

  removeAllItems() {
    this.tableComponent.applyFilters({});
  }

  removeItem(item: PoDisclaimerGroupRemoveAction) {
    delete this.params[item.removedDisclaimer.property];
    this.tableComponent.applyFilters(this.params);
  }

  private resetInputs() {
    this.key = undefined;
    this.value = undefined;
  }

  private setFilters(property: string, value: string) {
    let filter = this.filters.find(item => item.property === property);
    if (!filter) {
      filter = <any>{ property: property };
    } else {
      this.filters.splice(this.filters.indexOf(filter), 1);
      filter = Object.assign({}, filter);
    }

    filter.value = value;
    filter.label = \`\${property.charAt(0).toUpperCase() + property.slice(1)}: \${value}\`;

    this.filters = [...this.filters, filter];
  }
}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-table-with-api"),n(),i(23,"hr")),l&2&&(m(5),D("po-icon "+o.sampleCodeButtonIcon),m(),_(" ",o.sampleCodeButtonLabel,""),m(),c("ngClass",f(4,Ct,o.hideSampleCodeTabs)))},dependencies:[k,P,y,T,Xe],encapsulation:2})}return r})();var re=(()=>{class r{getColumns(){return[{property:"code",type:"number",width:"8%"},{property:"product"},{property:"customer"},{property:"exit_forecast",label:"Exit forecast",type:"dateTime"},{property:"time_since_purchase",label:"Time since purchase",type:"time",visible:!1},{property:"quantity",label:"Quantity (Tons)",type:"number",width:"15%",visible:!1},{property:"icms",label:"ICMS",type:"number",format:"1.2-5",visible:!1},{property:"status",type:"label",width:"8%",labels:[{value:"delivered",color:"blue",label:"Delivered"},{value:"transport",label:"Transport",type:Me.Success},{value:"production",color:" #745678",label:"Production"},{value:"stock",color:"rgb(201, 53, 125)",label:"Stock",icon:"an an-package"}]}]}getItems(){return[{code:1200,product:"Rice",customer:"Angeloni",quantity:3,icms:1500,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"delivered",license_plate:"MDJD9191",batch_product:18041822,driver:"Jos\xE9 Oliveira"},{code:1355,product:"Margarine",customer:"Giassi",quantity:1,icms:50,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"XXA5454",batch_product:18041821,driver:"Francisco Pereira"},{code:1496,product:"Wheat flour",customer:"Walmart",quantity:5,icms:2045,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"QEW5779",batch_product:18041820,driver:"Pedro da Costa"},{code:1712,product:"Milk",customer:"Carrefour",quantity:10,icms:15005,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"WWW1247",batch_product:18041819,driver:"Jo\xE3o da Silva"},{code:1881,product:"Oil",customer:"Carrefour",quantity:1,icms:1110,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"XXI2312",batch_product:18041825,driver:"Antonio Lima"},{code:1551,product:"Cream cheese",customer:"Barbosa",quantity:15,icms:1119,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"stock",license_plate:"XXI2359",batch_product:18041888,driver:"Vitoria Felix"}]}generateRandomDate(){let a=Math.floor(Math.random()*20),l=Math.floor(Math.random()*59),o=Math.floor(Math.random()*59);return new Date(2018,10,23,a,l,o)}generateRandomTime(){let a=Math.floor(Math.random()*59),l=Math.floor(Math.random()*59),o=a<10?"0"+a.toString():a.toString(),s=l<10?"0"+l.toString():l.toString();return`00:${o}:${s}`}static \u0275fac=function(l){return new(l||r)};static \u0275prov=B({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Pt(r,Q){if(r&1){let a=V();t(0,"po-widget",2)(1,"div",3)(2,"po-select",4),v("ngModelChange",function(o){let s=u(a).$implicit;return g(s.status,o)||(s.status=o),b(o)}),n()(),t(3,"div",3),i(4,"po-info",5)(5,"po-info",6)(6,"po-info",7),n()()}if(r&2){let a=Q.$implicit,l=Se();ve("p-title","Transport detail ",a.code,""),m(2),S("ngModel",a.status),c("p-options",l.statusOptions),m(2),c("p-value",a.batch_product),m(),c("p-value",a.driver),m(),c("p-value",a.license_plate)}}var Ye=(()=>{class r{transportService;columns;items;statusOptions=[{label:"Delivered",value:"delivered"},{label:"Transport",value:"transport"},{label:"Production",value:"production"}];constructor(a){this.transportService=a}ngOnInit(){this.columns=this.transportService.getColumns(),this.items=this.transportService.getItems()}isUndelivered(a,l){return a.status!=="delivered"}static \u0275fac=function(l){return new(l||r)(w(re))};static \u0275cmp=h({type:r,selectors:[["sample-po-table-transport"]],standalone:!1,features:[L([re])],decls:2,vars:9,consts:[["p-spacing","large",3,"p-auto-collapse","p-columns","p-hide-columns-manager","p-hide-table-search","p-items","p-sort","p-striped"],["p-table-row-template","",3,"p-table-row-template-arrow-direction","p-table-row-template-show"],[3,"p-title"],[1,"po-row"],["name","status","p-label","Transport status",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Batch of product","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","Driver","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","License plate","p-orientation","horizontal",1,"po-md-4",3,"p-value"]],template:function(l,o){l&1&&(t(0,"po-table",0),J(1,Pt,7,7,"ng-template",1),n()),l&2&&(c("p-auto-collapse",!0)("p-columns",o.columns)("p-hide-columns-manager",!0)("p-hide-table-search",!1)("p-items",o.items)("p-sort",!0)("p-striped",!0),m(),c("p-table-row-template-arrow-direction","right")("p-table-row-template-show",o.isUndelivered))},dependencies:[j,z,Re,U,C,Ve,ze],encapsulation:2})}return r})();var Dt=r=>({"docs-sample-code-tabs":r}),Ze=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=h({type:r,selectors:[["sample-po-table-transport-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Transport"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-transport/sample-po-table-transport.component.html"),n(),t(13,"pre",7),e(14,`<po-table
  [p-auto-collapse]="true"
  [p-columns]="columns"
  [p-hide-columns-manager]="true"
  [p-hide-table-search]="false"
  [p-items]="items"
  [p-sort]="true"
  [p-striped]="true"
  p-spacing="large"
>
  <ng-template
    p-table-row-template
    let-rowItem
    let-i="rowIndex"
    [p-table-row-template-arrow-direction]="'right'"
    [p-table-row-template-show]="isUndelivered"
  >
    <po-widget p-title="Transport detail { { rowItem.code }}">
      <div class="po-row">
        <po-select
          class="po-md-6"
          name="status"
          [(ngModel)]="rowItem.status"
          p-label="Transport status"
          [p-options]="statusOptions"
        >
        </po-select>
      </div>

      <div class="po-row">
        <po-info
          class="po-md-4"
          p-label="Batch of product"
          p-orientation="horizontal"
          [p-value]="rowItem.batch_product"
        >
        </po-info>

        <po-info class="po-md-4" p-label="Driver" p-orientation="horizontal" [p-value]="rowItem.driver"> </po-info>

        <po-info class="po-md-4" p-label="License plate" p-orientation="horizontal" [p-value]="rowItem.license_plate">
        </po-info>
      </div>
    </po-widget>
  </ng-template>
</po-table>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-transport/sample-po-table-transport.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

import { PoTableColumn } from '@po-ui/ng-components';

import { SamplePoTableTransportService } from './sample-po-table-transport.service';

@Component({
  selector: 'sample-po-table-transport',
  templateUrl: 'sample-po-table-transport.component.html',
  providers: [SamplePoTableTransportService],
  standalone: false
})
export class SamplePoTableTransportComponent implements OnInit {
  columns: Array<PoTableColumn>;
  items: Array<any>;

  readonly statusOptions: Array<PoSelectOption> = [
    { label: 'Delivered', value: 'delivered' },
    { label: 'Transport', value: 'transport' },
    { label: 'Production', value: 'production' }
  ];

  constructor(private transportService: SamplePoTableTransportService) {}

  ngOnInit() {
    this.columns = this.transportService.getColumns();
    this.items = this.transportService.getItems();
  }

  isUndelivered(row, index: number) {
    return row.status !== 'delivered';
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-transport/sample-po-table-transport.service.ts"),n(),t(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn, PoTagType } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableTransportService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'code', type: 'number', width: '8%' },
      { property: 'product' },
      { property: 'customer' },
      { property: 'exit_forecast', label: 'Exit forecast', type: 'dateTime' },
      { property: 'time_since_purchase', label: 'Time since purchase', type: 'time', visible: false },
      { property: 'quantity', label: 'Quantity (Tons)', type: 'number', width: '15%', visible: false },
      { property: 'icms', label: 'ICMS', type: 'number', format: '1.2-5', visible: false },
      {
        property: 'status',
        type: 'label',
        width: '8%',
        labels: [
          { value: 'delivered', color: 'blue', label: 'Delivered' },
          { value: 'transport', label: 'Transport', type: PoTagType.Success },
          { value: 'production', color: ' #745678', label: 'Production' },
          { value: 'stock', color: 'rgb(201, 53, 125)', label: 'Stock', icon: 'an an-package' }
        ]
      }
    ];
  }

  getItems(): Array<any> {
    return [
      {
        code: 1200,
        product: 'Rice',
        customer: 'Angeloni',
        quantity: 3,
        icms: 1500,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'delivered',
        license_plate: 'MDJD9191',
        batch_product: 18041822,
        driver: 'Jos\xE9 Oliveira'
      },
      {
        code: 1355,
        product: 'Margarine',
        customer: 'Giassi',
        quantity: 1,
        icms: 50,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'transport',
        license_plate: 'XXA5454',
        batch_product: 18041821,
        driver: 'Francisco Pereira'
      },
      {
        code: 1496,
        product: 'Wheat flour',
        customer: 'Walmart',
        quantity: 5,
        icms: 2045,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'transport',
        license_plate: 'QEW5779',
        batch_product: 18041820,
        driver: 'Pedro da Costa'
      },
      {
        code: 1712,
        product: 'Milk',
        customer: 'Carrefour',
        quantity: 10,
        icms: 15005,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'production',
        license_plate: 'WWW1247',
        batch_product: 18041819,
        driver: 'Jo\xE3o da Silva'
      },
      {
        code: 1881,
        product: 'Oil',
        customer: 'Carrefour',
        quantity: 1,
        icms: 1110,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'production',
        license_plate: 'XXI2312',
        batch_product: 18041825,
        driver: 'Antonio Lima'
      },
      {
        code: 1551,
        product: 'Cream cheese',
        customer: 'Barbosa',
        quantity: 15,
        icms: 1119,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'stock',
        license_plate: 'XXI2359',
        batch_product: 18041888,
        driver: 'Vitoria Felix'
      }
    ];
  }

  private generateRandomDate() {
    const hour = Math.floor(Math.random() * 20);
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    return new Date(2018, 10, 23, hour, minutes, seconds);
  }

  private generateRandomTime() {
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    const minutesValid = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const secondsValid = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return \`00:\${minutesValid}:\${secondsValid}\`;
  }
}
`),n()()()()(),t(25,"div",10),i(26,"sample-po-table-transport"),n(),i(27,"hr")),l&2&&(m(5),D("po-icon "+o.sampleCodeButtonIcon),m(),_(" ",o.sampleCodeButtonLabel,""),m(),c("ngClass",f(4,Dt,o.hideSampleCodeTabs)))},dependencies:[k,P,y,T,Ye],encapsulation:2})}return r})();var se=(()=>{class r{getColumns(){return[{property:"status",type:"label",labels:[{value:"available",color:"color-11",label:"Available"},{value:"reserved",color:"color-08",label:"Reserved"},{value:"closed",color:"color-07",label:"Closed"}]},{property:"country"},{property:"destination"},{property:"region",type:"subtitle",width:"180px",subtitles:[{value:"Alps",color:"color-01",label:"Alps",content:"AL"},{value:"Australasia",color:"color-02",label:"Australasia",content:"AU"},{value:"British Isle",color:"color-03",label:"British Isle",content:"BI"},{value:"Caucasus",color:"color-04",label:"Caucasus",content:"CA"},{value:"Danube",color:"color-05",label:"Danube",content:"DA"},{value:"East Asia",color:"color-06",label:"East Asia",content:"EA"},{value:"Latin America",color:"color-07",label:"Latin America",content:"LA"},{value:"Mediterranean",color:"color-08",label:"Mediterranean",content:"ME"},{value:"Nordics",color:"color-09",label:"Nordics",content:"NO"},{value:"North America",color:"color-10",label:"North America",content:"NA"},{value:"Southern Africa",color:"color-11",label:"Southern Africa",content:"SA"},{value:"Western Africa",color:"color-12",label:"Western Africa",content:"WA"}]},{property:"date",type:"date"},{property:"returnDate",label:"Return Date",type:"date"},{property:"value",type:"currency",format:"USD"},{property:"id",label:"Flight Number",type:"number"},{property:"onBoardService",label:"On Board Service",type:"boolean",boolean:{trueLabel:"Yes",falseLabel:"No"}},{property:"detail",label:"Details",type:"detail",detail:{columns:[{property:"package"},{property:"tour"},{property:"time",label:"Departure time",type:"time",format:"HH:mm"},{property:"distance",label:"Distance (Miles)",type:"number",format:"1.0-5"}],typeHeader:"top"}}]}getItems(){return[{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",onBoardService:!1,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"20:10:10",distance:"1000"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"09:15:19",distance:"2000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"07:10:20",distance:"3000"}]},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",onBoardService:!1,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"10:15:10",distance:"4800"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"22:15:10",distance:"11000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"10:15:10",distance:"1000"}]},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",onBoardService:!1,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",onBoardService:!1,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",onBoardService:!0,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48999,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",onBoardService:!1,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",onBoardService:!1,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",onBoardService:!1,airline:"Aero M\xE9xico",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"12:10:10",distance:"2200"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"11:10:10",distance:"1500"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"16:10:10",distance:"1800"}]},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",onBoardService:!0,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",onBoardService:!1,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",onBoardService:!0,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",onBoardService:!0,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",onBoardService:!1,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",onBoardService:!0,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",onBoardService:!1,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",onBoardService:!1,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",onBoardService:!0,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",onBoardService:!1,airline:"LATAM",status:"reserved",region:"Latin America"}]}static \u0275fac=function(l){return new(l||r)};static \u0275prov=B({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var et=(()=>{class r{sampleAirfare;poNotification;poDialog;poModal;poTable;actions=[{action:this.discount.bind(this),icon:"an an-currency-circle-dollar",label:"Apply Discount",disabled:this.validateDiscount.bind(this)},{action:this.details.bind(this),icon:"an an-info",label:"Details"},{action:this.remove.bind(this),icon:"po-icon an an-trash",label:"Remove"}];columns;columnsDefault;detail;items;total=0;totalExpanded=0;initialColumns;constructor(a,l,o){this.sampleAirfare=a,this.poNotification=l,this.poDialog=o}ngOnInit(){this.columns=this.sampleAirfare.getColumns(),this.items=this.sampleAirfare.getItems()}ngAfterViewInit(){if(this.columnsDefault=this.columns,localStorage.getItem("initial-columns")){this.initialColumns=localStorage.getItem("initial-columns").split(",");let l=[...this.columns.map(o=>$(G({},o),{visible:this.initialColumns.includes(o.property)}))];l.sort(this.sortFunction),this.columns=l}}sortFunction(a,l){let o=localStorage.getItem("initial-columns").split(","),s=o.indexOf(a.property),p=o.indexOf(l.property);if(s===-1)return 1;if(p===-1||s<p)return-1;if(s>p)return 1}addToCart(){let a=this.poTable.getSelectedRows();a.length>0&&this.poDialog.confirm({title:"Add to cart",message:`Would you like to add ${a.length} items to cart?`,confirm:()=>this.confirmItems(a),cancel:()=>{}})}confirmItems(a){a.forEach(l=>{switch(l.status){case"available":this.poNotification.success(`${this.getDescription(l)} added succesfully`);break;case"reserved":this.poNotification.warning(`${this.getDescription(l)} added succesfully, verify your e-mail to complete reservation`);break;case"closed":this.poNotification.error(`${this.getDescription(l)} is closed and not available anymore`);break}}),this.poTable.unselectRows()}collapseAll(){this.items.forEach((a,l)=>{a.detail&&(this.onCollapseDetail(),this.poTable.collapse(l))})}decreaseTotal(a){a.value&&(this.total-=a.value)}deleteItems(a){this.items=a}details(a){this.detail=a,this.poModal.open()}remove(a){this.poTable.removeItem(a)}discount(a){if(!a.disableDiscount){let l=$(G({},a),{value:a.value-a.value*.2,disableDiscount:!0});this.poTable.updateItem(a,l)}}expandAll(){this.totalExpanded=0,this.items.forEach((a,l)=>{a.detail&&(this.onExpandDetail(),this.poTable.expand(l))})}onCollapseDetail(){this.totalExpanded-=1,this.totalExpanded=this.totalExpanded<0?0:this.totalExpanded}onExpandDetail(){this.totalExpanded+=1}sumTotal(a){a.value&&(this.total+=a.value)}restoreColumn(){this.columns=this.columnsDefault}changeColumnVisible(a){localStorage.setItem("initial-columns",a)}getDescription(a){return`Airfare to ${a.destination} - ${a.initials}`}validateDiscount(a){return a.disableDiscount}static \u0275fac=function(l){return new(l||r)(w(se),w(Le),w(oe))};static \u0275cmp=h({type:r,selectors:[["sample-po-table-airfare"]],viewQuery:function(l,o){if(l&1&&(M(O,7),M(C,7)),l&2){let s;I(s=F())&&(o.poModal=s.first),I(s=F())&&(o.poTable=s.first)}},standalone:!1,features:[L([se,oe])],decls:16,vars:23,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-collapsed","p-expanded","p-selected","p-unselected","p-change-visible-columns","p-restore-column-manager","p-delete-items","p-container","p-height","p-hide-batch-actions","p-hide-table-search","p-selectable","p-sort","p-striped","p-actions","p-columns","p-items","p-max-columns","p-virtual-scroll"],["p-label","Total Value","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],["p-label","Expanded Itens","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],[1,"po-row"],["p-icon","an an-shopping-cart-simple","p-label","Add items to cart",1,"po-md-3",3,"p-click"],["p-label","Expand all detail",1,"po-md-3",3,"p-click"],["p-label","Collapse all detail",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm",3,"p-title"],["p-label","Airline",1,"po-sm-6",3,"p-value"],["p-label","Initials",1,"po-sm-2",3,"p-value"],["p-label","Class",1,"po-sm-4",3,"p-value"]],template:function(l,o){l&1&&(t(0,"div",0),e(1,"Choose one or more promotional airfares"),n(),i(2,"po-divider"),t(3,"po-table",1),E("p-collapsed",function(){return o.onCollapseDetail()})("p-expanded",function(){return o.onExpandDetail()})("p-selected",function(p){return o.sumTotal(p)})("p-unselected",function(p){return o.decreaseTotal(p)})("p-change-visible-columns",function(p){return o.changeColumnVisible(p)})("p-restore-column-manager",function(){return o.restoreColumn()})("p-delete-items",function(p){return o.deleteItems(p)}),n(),i(4,"po-divider")(5,"po-info",2),ne(6,"currency"),i(7,"po-info",3),t(8,"div",4)(9,"po-button",5),E("p-click",function(){return o.addToCart()}),n(),t(10,"po-button",6),E("p-click",function(){return o.expandAll()}),n(),t(11,"po-button",7),E("p-click",function(){return o.collapseAll()}),n()(),t(12,"po-modal",8),i(13,"po-info",9)(14,"po-info",10)(15,"po-info",11),n()),l&2&&(m(3),c("p-container",!0)("p-height",400)("p-hide-batch-actions",!1)("p-hide-table-search",!1)("p-selectable",!0)("p-sort",!0)("p-striped",!0)("p-actions",o.actions)("p-columns",o.columns)("p-items",o.items)("p-max-columns",7)("p-virtual-scroll",!1),m(2),ge("p-value",Ce(6,20,o.total,"USD")),m(2),c("p-value",o.totalExpanded),m(5),ee("p-title","",o.detail==null?null:o.detail.destination," - ",o.detail==null?null:o.detail.country,""),m(),c("p-value",o.detail==null?null:o.detail.airline),m(),c("p-value",o.detail==null?null:o.detail.initials),m(),c("p-value",o.detail==null?null:o.detail.class))},dependencies:[W,N,U,O,C,Pe],encapsulation:2})}return r})();var Mt=r=>({"docs-sample-code-tabs":r}),tt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=h({type:r,selectors:[["sample-po-table-airfare-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Airfare"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-airfare/sample-po-table-airfare.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more promotional airfares</div>

<po-divider></po-divider>

<po-table
  [p-container]="true"
  [p-height]="400"
  [p-hide-batch-actions]="false"
  [p-hide-table-search]="false"
  [p-selectable]="true"
  [p-sort]="true"
  [p-striped]="true"
  [p-actions]="actions"
  [p-columns]="columns"
  [p-items]="items"
  [p-max-columns]="7"
  [p-virtual-scroll]="false"
  (p-collapsed)="onCollapseDetail()"
  (p-expanded)="onExpandDetail()"
  (p-selected)="sumTotal($event)"
  (p-unselected)="decreaseTotal($event)"
  (p-change-visible-columns)="changeColumnVisible($event)"
  (p-restore-column-manager)="restoreColumn()"
  (p-delete-items)="deleteItems($event)"
>
</po-table>

<po-divider></po-divider>

<po-info
  class="po-md-6 po-mb-sm-2 po-mb-md-2 po-lb-lg-2"
  p-label="Total Value"
  p-orientation="horizontal"
  p-value="{ { total | currency: 'USD' }}"
>
</po-info>

<po-info
  class="po-md-6 po-mb-sm-2 po-mb-md-2 po-lb-lg-2"
  p-label="Expanded Itens"
  p-orientation="horizontal"
  [p-value]="totalExpanded"
>
</po-info>

<div class="po-row">
  <po-button class="po-md-3" p-icon="an an-shopping-cart-simple" p-label="Add items to cart" (p-click)="addToCart()">
  </po-button>
  <po-button class="po-md-3" p-label="Expand all detail" (p-click)="expandAll()"> </po-button>
  <po-button class="po-md-3" p-label="Collapse all detail" (p-click)="collapseAll()"> </po-button>
</div>

<po-modal p-click-out="true" p-size="sm" p-title="{ { detail?.destination }} - { { detail?.country }}">
  <po-info class="po-sm-6" p-label="Airline" [p-value]="detail?.airline"> </po-info>

  <po-info class="po-sm-2" p-label="Initials" [p-value]="detail?.initials"> </po-info>

  <po-info class="po-sm-4" p-label="Class" [p-value]="detail?.class"> </po-info>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-airfare/sample-po-table-airfare.component.ts"),n(),t(19,"pre",9),e(20,`import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';

import {
  PoDialogService,
  PoModalComponent,
  PoTableAction,
  PoTableColumn,
  PoTableComponent,
  PoNotificationService
} from '@po-ui/ng-components';

import { SamplePoTableAirfareService } from './sample-po-table-airfare.service';

@Component({
  selector: 'sample-po-table-airfare',
  templateUrl: './sample-po-table-airfare.component.html',
  providers: [SamplePoTableAirfareService, PoDialogService],
  standalone: false
})
export class SamplePoTableAirfareComponent implements AfterViewInit, OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild(PoTableComponent, { static: true }) poTable: PoTableComponent;

  actions: Array<PoTableAction> = [
    {
      action: this.discount.bind(this),
      icon: 'an an-currency-circle-dollar',
      label: 'Apply Discount',
      disabled: this.validateDiscount.bind(this)
    },
    { action: this.details.bind(this), icon: 'an an-info', label: 'Details' },
    { action: this.remove.bind(this), icon: 'po-icon an an-trash', label: 'Remove' }
  ];
  columns: Array<PoTableColumn>;
  columnsDefault: Array<PoTableColumn>;
  detail: any;
  items: Array<any>;
  total: number = 0;
  totalExpanded = 0;
  initialColumns: Array<any>;

  constructor(
    private sampleAirfare: SamplePoTableAirfareService,
    private poNotification: PoNotificationService,
    private poDialog: PoDialogService
  ) {}

  ngOnInit(): void {
    this.columns = this.sampleAirfare.getColumns();
    this.items = this.sampleAirfare.getItems();
  }

  ngAfterViewInit(): void {
    this.columnsDefault = this.columns;
    if (localStorage.getItem('initial-columns')) {
      this.initialColumns = localStorage.getItem('initial-columns').split(',');

      const result = this.columns.map(el => ({
        ...el,
        visible: this.initialColumns.includes(el.property)
      }));

      const newColumn = [...result];
      newColumn.sort(this.sortFunction);
      this.columns = newColumn;
    }
  }

  sortFunction(a, b) {
    const teste = localStorage.getItem('initial-columns').split(',');
    const indexA = teste.indexOf(a['property']);
    const indexB = teste.indexOf(b['property']);
    if (indexA === -1) {
      return 1;
    }
    if (indexB === -1) {
      return -1;
    }
    if (indexA < indexB) {
      return -1;
    } else if (indexA > indexB) {
      return 1;
    }
  }

  addToCart() {
    const selectedItems = this.poTable.getSelectedRows();

    if (selectedItems.length > 0) {
      this.poDialog.confirm({
        title: 'Add to cart',
        message: \`Would you like to add \${selectedItems.length} items to cart?\`,
        confirm: () => this.confirmItems(selectedItems),
        cancel: () => {}
      });
    }
  }

  confirmItems(selectedItems: Array<any>) {
    selectedItems.forEach(item => {
      switch (item.status) {
        case 'available':
          this.poNotification.success(\`\${this.getDescription(item)} added succesfully\`);
          break;
        case 'reserved':
          this.poNotification.warning(
            \`\${this.getDescription(item)} added succesfully, verify your e-mail to complete reservation\`
          );
          break;
        case 'closed':
          this.poNotification.error(\`\${this.getDescription(item)} is closed and not available anymore\`);
          break;
      }
    });

    this.poTable.unselectRows();
  }

  collapseAll() {
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onCollapseDetail();
        this.poTable.collapse(index);
      }
    });
  }

  decreaseTotal(row: any) {
    if (row.value) {
      this.total -= row.value;
    }
  }

  deleteItems(items: Array<any>) {
    this.items = items;
  }

  details(item) {
    this.detail = item;
    this.poModal.open();
  }

  remove(item: { [key: string]: any }) {
    this.poTable.removeItem(item);
  }

  discount(item) {
    if (!item.disableDiscount) {
      const updatedItem = { ...item, value: item.value - item.value * 0.2, disableDiscount: true };
      this.poTable.updateItem(item, updatedItem);
    }
  }

  expandAll() {
    this.totalExpanded = 0;
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onExpandDetail();
        this.poTable.expand(index);
      }
    });
  }

  onCollapseDetail() {
    this.totalExpanded -= 1;
    this.totalExpanded = this.totalExpanded < 0 ? 0 : this.totalExpanded;
  }

  onExpandDetail() {
    this.totalExpanded += 1;
  }

  sumTotal(row: any) {
    if (row.value) {
      this.total += row.value;
    }
  }

  restoreColumn() {
    this.columns = this.columnsDefault;
  }

  changeColumnVisible(event) {
    localStorage.setItem('initial-columns', event);
  }

  private getDescription(item: any) {
    return \`Airfare to \${item.destination} - \${item.initials}\`;
  }

  private validateDiscount(item) {
    return item.disableDiscount;
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-airfare/sample-po-table-airfare.service.ts"),n(),t(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn, PoTableDetail } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableAirfareService {
  getColumns(): Array<PoTableColumn> {
    const airfareDetail: PoTableDetail = {
      columns: [
        { property: 'package' },
        { property: 'tour' },
        { property: 'time', label: 'Departure time', type: 'time', format: 'HH:mm' },
        { property: 'distance', label: 'Distance (Miles)', type: 'number', format: '1.0-5' }
      ],
      typeHeader: 'top'
    };

    return [
      {
        property: 'status',
        type: 'label',
        labels: [
          { value: 'available', color: 'color-11', label: 'Available' },
          { value: 'reserved', color: 'color-08', label: 'Reserved' },
          { value: 'closed', color: 'color-07', label: 'Closed' }
        ]
      },
      { property: 'country' },
      { property: 'destination' },
      {
        property: 'region',
        type: 'subtitle',
        width: '180px',
        subtitles: [
          { value: 'Alps', color: 'color-01', label: 'Alps', content: 'AL' },
          { value: 'Australasia', color: 'color-02', label: 'Australasia', content: 'AU' },
          { value: 'British Isle', color: 'color-03', label: 'British Isle', content: 'BI' },
          { value: 'Caucasus', color: 'color-04', label: 'Caucasus', content: 'CA' },
          { value: 'Danube', color: 'color-05', label: 'Danube', content: 'DA' },
          { value: 'East Asia', color: 'color-06', label: 'East Asia', content: 'EA' },
          { value: 'Latin America', color: 'color-07', label: 'Latin America', content: 'LA' },
          { value: 'Mediterranean', color: 'color-08', label: 'Mediterranean', content: 'ME' },
          { value: 'Nordics', color: 'color-09', label: 'Nordics', content: 'NO' },
          { value: 'North America', color: 'color-10', label: 'North America', content: 'NA' },
          { value: 'Southern Africa', color: 'color-11', label: 'Southern Africa', content: 'SA' },
          { value: 'Western Africa', color: 'color-12', label: 'Western Africa', content: 'WA' }
        ]
      },
      { property: 'date', type: 'date' },
      { property: 'returnDate', label: 'Return Date', type: 'date' },
      { property: 'value', type: 'currency', format: 'USD' },
      { property: 'id', label: 'Flight Number', type: 'number' },
      {
        property: 'onBoardService',
        label: 'On Board Service',
        type: 'boolean',
        boolean: {
          trueLabel: 'Yes',
          falseLabel: 'No'
        }
      },
      { property: 'detail', label: 'Details', type: 'detail', detail: airfareDetail }
    ];
  }

  getItems() {
    return [
      {
        id: 11234,
        initials: 'BR',
        country: 'Brazil',
        value: 1000.0,
        date: '2018-10-09',
        returnDate: '2018-11-01',
        class: 'Economic',
        onBoardService: false,
        destination: 'Rio de Janeiro',
        airline: 'Azul',
        status: 'available',
        region: 'Latin America',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '20:10:10',
            distance: '1000'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '09:15:19',
            distance: '2000'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '07:10:20',
            distance: '3000'
          }
        ]
      },
      {
        id: 22467,
        initials: 'FR',
        country: 'France',
        value: 5000.0,
        date: '2019-12-13',
        returnDate: '2019-12-31',
        class: 'Economic',
        onBoardService: false,
        destination: 'Paris',
        airline: 'British Airways',
        status: 'closed',
        region: 'Alps',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '10:15:10',
            distance: '4800'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '22:15:10',
            distance: '11000'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '10:15:10',
            distance: '1000'
          }
        ]
      },
      {
        id: 40670,
        initials: 'SN',
        country: 'Senegal',
        value: 3200.0,
        date: '2017-11-22',
        returnDate: '2018-12-01',
        class: 'Economic',
        onBoardService: false,
        destination: 'Dakar',
        airline: 'Iberia',
        status: 'closed',
        region: 'Western Africa'
      },
      {
        id: 34679,
        initials: 'PT',
        country: 'Portugal',
        value: 5500.0,
        date: '2017-10-10',
        returnDate: '2018-10-20',
        class: 'Economic',
        onBoardService: false,
        destination: 'Lisbon',
        airline: 'Air Europa',
        status: 'closed',
        region: 'Mediterranean'
      },
      {
        id: 48999,
        initials: 'RU',
        country: 'Russia',
        value: 6700.0,
        date: '2019-01-17',
        returnDate: '2019-02-20',
        class: 'First Class',
        onBoardService: true,
        destination: 'Moscow',
        airline: 'Lufthansa',
        status: 'reserved',
        region: 'Caucasus'
      },
      {
        id: 48999,
        initials: 'US',
        country: 'United States',
        value: 2700.49,
        date: '2018-10-17',
        returnDate: '2018-10-29',
        class: 'Economic',
        onBoardService: false,
        destination: 'Los Angeles',
        airline: 'American Airlines',
        status: 'reserved',
        region: 'North America'
      },
      {
        id: 54563,
        initials: 'CL',
        country: 'Chile',
        value: 2000.0,
        date: '2018-10-20',
        returnDate: '2018-11-01',
        destination: 'Cusco',
        class: 'Economic',
        onBoardService: false,
        airline: 'LATAM',
        status: 'available',
        region: 'Latin America'
      },
      {
        id: 64568,
        initials: 'MX',
        country: 'Mexico',
        value: 2100.0,
        date: '2018-03-10',
        returnDate: '2018-05-09',
        destination: 'Mexico City',
        class: 'Economic',
        onBoardService: false,
        airline: 'Aero M\xE9xico',
        status: 'available',
        region: 'Latin America',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '12:10:10',
            distance: '2200'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '11:10:10',
            distance: '1500'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '16:10:10',
            distance: '1800'
          }
        ]
      },
      {
        id: 75456,
        initials: 'IE',
        country: 'Ireland',
        value: 6300.0,
        date: '2018-10-14',
        returnDate: '2018-10-30',
        destination: 'Cork',
        class: 'First Class',
        onBoardService: true,
        airline: 'Lufthansa',
        status: 'reserved',
        region: 'British Isle'
      },
      {
        id: 23445,
        initials: 'ZA',
        country: 'South Africa',
        value: 1900.0,
        date: '2018-12-10',
        returnDate: '2018-12-25',
        destination: 'Cape Town',
        class: 'Economic',
        onBoardService: false,
        airline: 'South African Airways',
        status: 'available',
        region: 'Southern Africa'
      },
      {
        id: 19238,
        initials: 'AU',
        country: 'Australia',
        value: 6300.0,
        date: '2018-10-14',
        returnDate: '2018-10-30',
        destination: 'Sydney',
        class: 'First Class',
        onBoardService: true,
        airline: 'Jetstar Airways',
        status: 'reserved',
        region: 'Australasia'
      },
      {
        id: 85456,
        initials: 'JP',
        country: 'Japan',
        value: 5900.0,
        date: '2018-10-25',
        returnDate: '2018-11-10',
        destination: 'Tokio',
        class: 'Executive',
        onBoardService: true,
        airline: 'Japan Airlines',
        status: 'available',
        region: 'East Asia'
      },
      {
        id: 94565,
        initials: 'CN',
        country: 'China',
        value: 2900.0,
        date: '2018-10-10',
        returnDate: '2018-10-25',
        destination: 'Beijing',
        class: 'Economic',
        onBoardService: false,
        airline: 'Malaysia Airlines',
        status: 'available',
        region: 'East Asia'
      },
      {
        id: 32330,
        initials: 'UK',
        country: 'England',
        value: 2090.5,
        date: '2018-10-07',
        returnDate: '2018-11-15',
        destination: 'London',
        class: 'Executive',
        onBoardService: true,
        airline: 'British Airways',
        status: 'available',
        region: 'British Isle'
      },
      {
        id: 14560,
        initials: 'CA',
        country: 'Canada',
        value: 2090.5,
        date: '2018-10-07',
        returnDate: '2018-10-20',
        destination: 'Quebec',
        class: 'Economic',
        onBoardService: false,
        airline: 'American Airlines',
        status: 'available',
        region: 'North America'
      },
      {
        id: 93800,
        initials: 'IS',
        country: 'Iceland',
        value: 6300.0,
        date: '2018-10-12',
        returnDate: '2018-10-27',
        destination: 'Reykjav\xEDk',
        class: 'Economic',
        onBoardService: false,
        airline: 'Star Alliance',
        status: 'available',
        region: 'Nordics'
      },
      {
        id: 34239,
        initials: 'DE',
        country: 'Germany',
        value: 3070.5,
        date: '2018-10-07',
        returnDate: '2018-10-20',
        destination: 'Berlin',
        class: 'Executive',
        onBoardService: true,
        airline: 'LATAM',
        status: 'available',
        region: 'Danube'
      },
      {
        id: 45611,
        initials: 'AR',
        country: 'Argentina',
        value: 3500.5,
        date: '2018-12-07',
        returnDate: '2018-12-29',
        destination: 'Ushuaia',
        class: 'Economic',
        onBoardService: false,
        airline: 'LATAM',
        status: 'reserved',
        region: 'Latin America'
      }
    ];
  }
}
`),n()()()()(),t(25,"div",10),i(26,"sample-po-table-airfare"),n(),i(27,"hr")),l&2&&(m(5),D("po-icon "+o.sampleCodeButtonIcon),m(),_(" ",o.sampleCodeButtonLabel,""),m(),c("ngClass",f(4,Mt,o.hideSampleCodeTabs)))},dependencies:[k,P,y,T,et],encapsulation:2})}return r})();var H=function(r){return r[r.Stable=0]="Stable",r[r.Experimental=1]="Experimental",r[r.RoadMap=2]="RoadMap",r}(H||{});var me=(()=>{class r{items=[{component:{favorite:["favorite","documentation"],name:"PO Select",description:"Display a list of items and allows selection",link:"/documentation/po-select",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Checkbox",description:"Group of square buttons that allows multiple items to be selected",link:"/documentation/po-checkbox-group",extra:"Best Practices",extras:["Short and objective texts for items","Use with short lists","For big lists use PO Multiselect"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Login",description:"Template for authentication",link:"/documentation/po-page-login",extra:"Features",extras:[],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Number",description:"Input that allows only numbers",link:"/documentation/po-number",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Dynamic Table",description:"Template for list resources with a table",link:"/documentation/po-page-dynamic-table",extra:"Features",extras:["6 defaults actions","Use Metadata to build your page","No code","Customization"],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Combo",description:"Display a list of items with filter and allows selection",link:"/documentation/po-combo",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Notification",description:"Show notification easily and quickly",link:"/documentation/po-notification",extra:"Features",extras:["4 types of notifications","Define time for your notifications","Use actions in your notification"],status:0,type:"service"}},{component:{favorite:["favorite","documentation"],name:"PO Multiselect",description:"Display a list of items and allows multiple selection",link:"/documentation/po-multiselect",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:[],name:"PO Grid",description:"Create a grid for edition",link:"/documentation/po-grid",extra:"Features",extras:[],status:2,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Input",description:"Input for general texts",link:"/documentation/po-input",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Textarea",description:"Larger input for big texts",link:"/documentation/po-textarea",extra:"Best Practices",extras:["Recommended to large texts like observations and details","For short texts use po-input"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Datepicker",description:"Input with calendar for dates",link:"/documentation/po-datepicker",extra:"Features",extras:["Multiple idioms ( pt, es , en)","Custom date formats","Period validation (start date and end date)"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Email",description:"Input that allows valid email texts (username@email.com)",link:"/documentation/po-email",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Url",description:"Input that expects a valid url as text (http://www.url.com)",link:"/documentation/po-url",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Password",description:"Input with bullet text to type passwords",link:"/documentation/po-password",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Login",description:"Input with a user icon that represents a login field",link:"/documentation/po-login",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Upload",description:"Upload file(s) with a loading bar",link:"/documentation/po-upload",extra:"Features",extras:["Multiple file selection","Automatic upload after click","File format and size restriction"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Avatar",description:"Creates a circle with a picture inside",link:"/documentation/po-avatar",extra:"Features",extras:["Multiple sizes","Default image"],status:0,type:"component"}}];getItems(a,l=!1){let o=[...this.items];return a&&a.column&&o.sort((s,p)=>this.sort(s,p,a)),l||(o.length=10),o}sort(a,l,o){let s=o.column.property,p=o.type;if(s.split(".").length>1){let d=s.split(".")[0],be=s.split(".")[1];return a[d][be]<l[d][be]?p===K.Ascending?-1:1:p===K.Ascending?1:-1}else return a[s]<l[s]?p===K.Ascending?-1:1:p===K.Ascending?1:-1}static \u0275fac=function(l){return new(l||r)};static \u0275prov=B({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Bt(r,Q){if(r&1&&(t(0,"div"),e(1),ne(2,"uppercase"),n()),r&2){let a=Q.$implicit;xe("badge ",a,""),m(),pe(fe(2,4,a))}}function Lt(r,Q){if(r&1&&(t(0,"ul")(1,"li",5),e(2),n(),i(3,"hr"),n()),r&2){let a=Q.$implicit;m(2),pe(a)}}var nt=(()=>{class r{sampleComponents;router;poModal;extraInformation;items;showMoreDisabled=!1;title;isLoading=!1;columns=[{property:"component.status",type:"label",label:"Status",width:"5%",labels:[{value:H.Stable,color:"color-11",label:"Stable",textColor:"white",tooltip:"Published component"},{value:H.Experimental,color:"color-08",label:"Experimental",textColor:"white",tooltip:"Component in homologation"},{value:H.RoadMap,color:"color-07",label:"Roadmap",textColor:"white",tooltip:"Component in roadmap"}]},{property:"component.name",label:"Name",type:"link"},{property:"component.type",label:"Type",type:"columnTemplate",width:"10%"},{property:"component.description",label:"Descri\xE7\xE3o",color:this.experimentalColor.bind(this)},{property:"component.extra",label:"Extras",width:"10px",type:"link",tooltip:"Additional details",action:(a,l)=>{this.extras(a,l)},disabled:this.canShowExtras.bind(this)},{property:"component.favorite",label:"Actions",type:"icon",sortable:!1,icons:[{action:this.favorite.bind(this),color:this.isFavorite.bind(this),icon:"an an-star",tooltip:"Favorite",value:"favorite"},{action:this.goToDocumentation.bind(this),disabled:this.canGoToDocumentation.bind(this),icon:"an an-arrow-square-out",tooltip:"Click to go to documentation",value:"documentation"}]}];constructor(a,l){this.sampleComponents=a,this.router=l}ngOnInit(){this.items=this.sampleComponents.getItems()}experimentalColor(a){return a?.component?.status===H.Experimental?"color-08":"color-11"}extras(a,l){this.title=a,this.extraInformation=l,this.poModal.open()}goToDocumentation(a){this.router.navigate([a?.component?.link])}showMore(a){this.isLoading=!0,this.showMoreDisabled=!0,setTimeout(()=>{this.items=this.getItems(a),this.isLoading=!1},4e3)}sort(a){this.items=this.getItems(a)}showAlert(a){alert(a)}canGoToDocumentation(a){return a?.component?.status!==H.Stable}canShowExtras(a){return a?.component?.status!==H.Stable||a?.component?.extras.length===0}favorite(a){a.component.isFavorite=!a.component.isFavorite}getItems(a){return this.sampleComponents.getItems(a,this.showMoreDisabled)}isFavorite(a){return a?.component?.isFavorite?"color-08":"color-11"}static \u0275fac=function(l){return new(l||r)(w(me),w(ie))};static \u0275cmp=h({type:r,selectors:[["sample-po-table-components"]],viewQuery:function(l,o){if(l&1&&M(O,7),l&2){let s;I(s=F())&&(o.poModal=s.first)}},standalone:!1,features:[L([me])],decls:7,vars:10,consts:[[1,"po-font-text-large","po-text-color-neutral-dark-40"],["p-container","shadow",3,"p-show-more","p-sort-by","p-loading-show-more","p-columns","p-items","p-show-more-disabled","p-sort"],["p-table-column-template","",3,"p-property"],["p-click-out","true","p-size","sm",3,"p-title"],[4,"ngFor","ngForOf"],[1,"po-font-text"]],template:function(l,o){l&1&&(t(0,"div",0),e(1,"PO UI Library"),n(),i(2,"hr"),t(3,"po-table",1),E("p-show-more",function(p){return o.showMore(p)})("p-sort-by",function(p){return o.sort(p)}),J(4,Bt,3,6,"ng-template",2),n(),t(5,"po-modal",3),J(6,Lt,4,1,"ul",4),n()),l&2&&(m(3),c("p-loading-show-more",o.isLoading)("p-columns",o.columns)("p-items",o.items)("p-show-more-disabled",o.showMoreDisabled)("p-sort",!0),m(),c("p-property","component.type"),m(),ee("p-title","",o.title," - ",o.extraInformation==null?null:o.extraInformation.component,""),m(),c("ngForOf",o.extraInformation==null?null:o.extraInformation.extras))},dependencies:[ye,O,C,qe,Te],styles:[".badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:3px;color:#fff;width:100px;text-align:center;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;font-size:10px}.badge.component[_ngcontent-%COMP%]{background-color:#82b1ff}.badge.service[_ngcontent-%COMP%]{background-color:#b39ddb}.badge.template[_ngcontent-%COMP%]{background-color:#ffb515}"]})}return r})();var Vt=r=>({"docs-sample-code-tabs":r}),it=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=h({type:r,selectors:[["sample-po-table-components-view"]],standalone:!1,decls:38,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Po Field Components"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-components/sample-po-table-components.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-font-text-large po-text-color-neutral-dark-40">PO UI Library</div>

<hr />

<po-table
  p-container="shadow"
  [p-loading-show-more]="isLoading"
  [p-columns]="columns"
  [p-items]="items"
  [p-show-more-disabled]="showMoreDisabled"
  [p-sort]="true"
  (p-show-more)="showMore($event)"
  (p-sort-by)="sort($event)"
>
  <ng-template p-table-column-template [p-property]="'component.type'" let-value>
    <div class="badge { { value }}">{ { value | uppercase }}</div>
  </ng-template>
</po-table>

<po-modal p-click-out="true" p-size="sm" p-title="{ { title }} - { { extraInformation?.component }}">
  <ul *ngFor="let extra of extraInformation?.extras">
    <li class="po-font-text">{ { extra }}</li>
    <hr />
  </ul>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-components/sample-po-table-components.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoModalComponent, PoTableColumn, PoTableColumnLabel, PoTableColumnSort } from '@po-ui/ng-components';

import { SamplePoTableComponentStatus } from './sample-po-table-components.enum';
import { SamplePoTableComponentsService } from './sample-po-table-components.service';

@Component({
  selector: 'sample-po-table-components',
  templateUrl: './sample-po-table-components.component.html',
  styleUrls: ['./sample-po-table-components.component.css'],
  providers: [SamplePoTableComponentsService],
  standalone: false
})
export class SamplePoTableComponentsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  extraInformation: any;
  items: Array<any>;
  showMoreDisabled: boolean = false;
  title: any;
  isLoading: boolean = false;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'component.status',
      type: 'label',
      label: 'Status',
      width: '5%',
      labels: <Array<PoTableColumnLabel>>[
        {
          value: SamplePoTableComponentStatus.Stable,
          color: 'color-11',
          label: 'Stable',
          textColor: 'white',
          tooltip: 'Published component'
        },
        {
          value: SamplePoTableComponentStatus.Experimental,
          color: 'color-08',
          label: 'Experimental',
          textColor: 'white',
          tooltip: 'Component in homologation'
        },
        {
          value: SamplePoTableComponentStatus.RoadMap,
          color: 'color-07',
          label: 'Roadmap',
          textColor: 'white',
          tooltip: 'Component in roadmap'
        }
      ]
    },
    {
      property: 'component.name',
      label: 'Name',
      type: 'link'
    },
    { property: 'component.type', label: 'Type', type: 'columnTemplate', width: '10%' },
    { property: 'component.description', label: 'Descri\xE7\xE3o', color: this.experimentalColor.bind(this) },
    {
      property: 'component.extra',
      label: 'Extras',
      width: '10px',
      type: 'link',
      tooltip: 'Additional details',
      action: (value, row) => {
        this.extras(value, row);
      },
      disabled: this.canShowExtras.bind(this)
    },
    {
      property: 'component.favorite',
      label: 'Actions',
      type: 'icon',
      sortable: false,
      icons: [
        {
          action: this.favorite.bind(this),
          color: this.isFavorite.bind(this),
          icon: 'an an-star',
          tooltip: 'Favorite',
          value: 'favorite'
        },
        {
          action: this.goToDocumentation.bind(this),
          disabled: this.canGoToDocumentation.bind(this),
          icon: 'an an-arrow-square-out',
          tooltip: 'Click to go to documentation',
          value: 'documentation'
        }
      ]
    }
  ];

  constructor(
    public sampleComponents: SamplePoTableComponentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items = this.sampleComponents.getItems();
  }

  experimentalColor(row) {
    return row?.component?.status === SamplePoTableComponentStatus.Experimental ? 'color-08' : 'color-11';
  }

  extras(value, row) {
    this.title = value;
    this.extraInformation = row;

    this.poModal.open();
  }

  goToDocumentation(row) {
    this.router.navigate([row?.component?.link]);
  }

  showMore(sort: PoTableColumnSort) {
    this.isLoading = true;
    this.showMoreDisabled = true;
    setTimeout(() => {
      this.items = this.getItems(sort);
      this.isLoading = false;
    }, 4000);
  }

  sort(sort: PoTableColumnSort) {
    this.items = this.getItems(sort);
  }

  public showAlert(msg): void {
    alert(msg);
  }

  private canGoToDocumentation(row) {
    return row?.component?.status !== SamplePoTableComponentStatus.Stable;
  }

  private canShowExtras(row: any) {
    return row?.component?.status !== SamplePoTableComponentStatus.Stable || row?.component?.extras.length === 0;
  }

  private favorite(row) {
    row.component.isFavorite = !row.component.isFavorite;
  }

  private getItems(sort: PoTableColumnSort) {
    return this.sampleComponents.getItems(sort, this.showMoreDisabled);
  }

  private isFavorite(row) {
    return row?.component?.isFavorite ? 'color-08' : 'color-11';
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-components/sample-po-table-components.enum.ts"),n(),t(23,"pre",9),e(24,`export enum SamplePoTableComponentStatus {
  Stable,
  Experimental,
  RoadMap
}
`),n(),t(25,"label",6),e(26,"sample-po-table-components/sample-po-table-components.service.ts"),n(),t(27,"pre",9),e(28,`import { Injectable } from '@angular/core';

import { PoTableColumnSort, PoTableColumnSortType } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableComponentsService {
  readonly items = [
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Select',
        description: 'Display a list of items and allows selection',
        link: '/documentation/po-select',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Checkbox',
        description: 'Group of square buttons that allows multiple items to be selected',
        link: '/documentation/po-checkbox-group',
        extra: 'Best Practices',
        extras: ['Short and objective texts for items', 'Use with short lists', 'For big lists use PO Multiselect'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Page Login',
        description: 'Template for authentication',
        link: '/documentation/po-page-login',
        extra: 'Features',
        extras: [],
        status: 0,
        type: 'template'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Number',
        description: 'Input that allows only numbers',
        link: '/documentation/po-number',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Page Dynamic Table',
        description: 'Template for list resources with a table',
        link: '/documentation/po-page-dynamic-table',
        extra: 'Features',
        extras: ['6 defaults actions', 'Use Metadata to build your page', 'No code', 'Customization'],
        status: 0,
        type: 'template'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Combo',
        description: 'Display a list of items with filter and allows selection',
        link: '/documentation/po-combo',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Notification',
        description: 'Show notification easily and quickly',
        link: '/documentation/po-notification',
        extra: 'Features',
        extras: ['4 types of notifications', 'Define time for your notifications', 'Use actions in your notification'],
        status: 0,
        type: 'service'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Multiselect',
        description: 'Display a list of items and allows multiple selection',
        link: '/documentation/po-multiselect',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: [],
        name: 'PO Grid',
        description: 'Create a grid for edition',
        link: '/documentation/po-grid',
        extra: 'Features',
        extras: [],
        status: 2,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Input',
        description: 'Input for general texts',
        link: '/documentation/po-input',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Textarea',
        description: 'Larger input for big texts',
        link: '/documentation/po-textarea',
        extra: 'Best Practices',
        extras: ['Recommended to large texts like observations and details', 'For short texts use po-input'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Datepicker',
        description: 'Input with calendar for dates',
        link: '/documentation/po-datepicker',
        extra: 'Features',
        extras: [
          'Multiple idioms ( pt, es , en)',
          'Custom date formats',
          'Period validation (start date and end date)'
        ],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Email',
        description: 'Input that allows valid email texts (username@email.com)',
        link: '/documentation/po-email',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Url',
        description: 'Input that expects a valid url as text (http://www.url.com)',
        link: '/documentation/po-url',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Password',
        description: 'Input with bullet text to type passwords',
        link: '/documentation/po-password',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Login',
        description: 'Input with a user icon that represents a login field',
        link: '/documentation/po-login',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Upload',
        description: 'Upload file(s) with a loading bar',
        link: '/documentation/po-upload',
        extra: 'Features',
        extras: ['Multiple file selection', 'Automatic upload after click', 'File format and size restriction'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Avatar',
        description: 'Creates a circle with a picture inside',
        link: '/documentation/po-avatar',
        extra: 'Features',
        extras: ['Multiple sizes', 'Default image'],
        status: 0,
        type: 'component'
      }
    }
  ];

  getItems(sort?: PoTableColumnSort, loadAll: boolean = false): Array<any> {
    const result = [...this.items];

    if (sort && sort.column) {
      result.sort((value, valueToCompare) => this.sort(value, valueToCompare, sort));
    }

    if (!loadAll) {
      result.length = 10;
    }

    return result;
  }

  private sort(value: any, valueToCompare: any, sort: PoTableColumnSort) {
    const property = sort.column.property;
    const type = sort.type;

    if (property.split('.').length > 1) {
      const propertySplitedFirst = property.split('.')[0];
      const propertySplitedLast = property.split('.')[1];
      if (
        value[propertySplitedFirst][propertySplitedLast] < valueToCompare[propertySplitedFirst][propertySplitedLast]
      ) {
        return type === PoTableColumnSortType.Ascending ? -1 : 1;
      }
      return type === PoTableColumnSortType.Ascending ? 1 : -1;
    } else {
      if (value[property] < valueToCompare[property]) {
        return type === PoTableColumnSortType.Ascending ? -1 : 1;
      }
      return type === PoTableColumnSortType.Ascending ? 1 : -1;
    }
  }
}
`),n()()(),t(29,"po-tab",10)(30,"div")(31,"label",6),e(32,"sample-po-table-components/sample-po-table-components.component.css"),n(),t(33,"pre",11),e(34,`.badge {
  padding: 3px 10px;
  border-radius: 3px;
  color: #fff;
  width: 100px;
  text-align: center;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 10px;
}

.badge.component {
  background-color: #82b1ff;
}

.badge.service {
  background-color: #b39ddb;
}

.badge.template {
  background-color: #ffb515;
}
`),n()()()()(),t(35,"div",12),i(36,"sample-po-table-components"),n(),i(37,"hr")),l&2&&(m(5),D("po-icon "+o.sampleCodeButtonIcon),m(),_(" ",o.sampleCodeButtonLabel,""),m(),c("ngClass",f(4,Vt,o.hideSampleCodeTabs)))},dependencies:[k,P,y,T,nt],encapsulation:2})}return r})();var de=(()=>{class r{http;constructor(a){this.http=a}getColumns(){return[{property:"id",label:"Id",type:"string",width:"90px"},{property:"label",label:"Name",type:"string",width:"90px"},{property:"email",label:"E-mail",type:"string",width:"120px"}]}getItems(){return this.http.get("https://po-sample-api.onrender.com/v1/heroes").pipe(Ee("items"))}static \u0275fac=function(l){return new(l||r)(he(we))};static \u0275prov=B({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Ht=["POItemsOri"],jt=["POItemsSelected"],ot=(()=>{class r{service;poItemsOri;poItemsSelected;items=[];itemsSelected=[];columns;constructor(a){this.service=a}ngOnInit(){this.getColumns(),this.getItems()}getColumns(){this.columns=this.service.getColumns()}getItems(){this.service.getItems().subscribe({next:a=>this.items=a,error:a=>console.error(a)})}changeOptions(a,l){if(l==="new")this.itemsSelected.push({id:a.id,label:a.label,email:a.email}),this.itemsSelected=[...this.itemsSelected];else{let o=this.itemsSelected.findIndex(s=>s.id===a.id);this.poItemsSelected.removeItem(o),this.itemsSelected=[...this.poItemsSelected.items]}}deleteItems(a){this.items=a,this.itemsSelected=[]}static \u0275fac=function(l){return new(l||r)(w(de))};static \u0275cmp=h({type:r,selectors:[["sample-po-table-heroes"]],viewQuery:function(l,o){if(l&1&&(M(Ht,7),M(jt,7)),l&2){let s;I(s=F())&&(o.poItemsOri=s.first),I(s=F())&&(o.poItemsSelected=s.first)}},standalone:!1,features:[L([de])],decls:11,vars:16,consts:[["POItemsOri",""],["POItemsSelected",""],[1,"po-row","po-pb-2"],[1,"po-md-6"],[1,"po-font-text-bold","po-text-color-neutral-dark-40"],["p-selectable","true","p-infinite-scroll-distance","80","p-height","300",3,"p-selected","p-unselected","p-delete-items","p-columns","p-infinite-scroll","p-hide-select-all","p-hide-table-search","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"],["p-height","300",3,"p-columns","p-hide-table-search","p-striped","p-infinite-scroll","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"]],template:function(l,o){if(l&1){let s=V();t(0,"div",2)(1,"div",3)(2,"div",4),e(3,"Choose one or more heroes for your team"),n(),t(4,"po-table",5,0),E("p-selected",function(d){return u(s),b(o.changeOptions(d,"new"))})("p-unselected",function(d){return u(s),b(o.changeOptions(d,"change"))})("p-delete-items",function(d){return u(s),b(o.deleteItems(d))}),n()(),t(6,"div",3)(7,"div",4),e(8,"Here your chosen heroes"),n(),i(9,"po-table",6,1),n()()}l&2&&(m(4),c("p-columns",o.columns)("p-infinite-scroll",!0)("p-hide-select-all",!0)("p-hide-table-search",!1)("p-items",o.items)("p-hide-action-fixed-columns",!0)("p-text-wrap",!0)("p-virtual-scroll",!1),m(5),c("p-columns",o.columns)("p-hide-table-search",!1)("p-striped",!0)("p-infinite-scroll",!0)("p-items",o.itemsSelected)("p-hide-action-fixed-columns",!0)("p-text-wrap",!0)("p-virtual-scroll",!1))},dependencies:[C],encapsulation:2})}return r})();var Wt=r=>({"docs-sample-code-tabs":r}),at=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=h({type:r,selectors:[["sample-po-table-heroes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Heroes"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-heroes/sample-po-table-heroes.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row po-pb-2">
  <div class="po-md-6">
    <div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more heroes for your team</div>
    <po-table
      #POItemsOri
      [p-columns]="columns"
      [p-infinite-scroll]="true"
      p-selectable="true"
      [p-hide-select-all]="true"
      [p-hide-table-search]="false"
      p-infinite-scroll-distance="80"
      (p-selected)="changeOptions($event, 'new')"
      (p-unselected)="changeOptions($event, 'change')"
      p-height="300"
      [p-items]="items"
      (p-delete-items)="deleteItems($event)"
      [p-hide-action-fixed-columns]="true"
      [p-text-wrap]="true"
      [p-virtual-scroll]="false"
    >
    </po-table>
  </div>
  <div class="po-md-6">
    <div class="po-font-text-bold po-text-color-neutral-dark-40">Here your chosen heroes</div>
    <po-table
      #POItemsSelected
      [p-columns]="columns"
      [p-hide-table-search]="false"
      [p-striped]="true"
      [p-infinite-scroll]="true"
      p-height="300"
      [p-items]="itemsSelected"
      [p-hide-action-fixed-columns]="true"
      [p-text-wrap]="true"
      [p-virtual-scroll]="false"
    >
    </po-table>
  </div>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-heroes/sample-po-table-heroes.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild, OnInit } from '@angular/core';
import { PoTableColumn, PoTableComponent } from '@po-ui/ng-components';

import { SamplePoTableHeroesService } from './sample-po-table-heroes.service';

@Component({
  selector: 'sample-po-table-heroes',
  templateUrl: './sample-po-table-heroes.component.html',
  providers: [SamplePoTableHeroesService],
  standalone: false
})
export class SamplePoTableHeroesComponent implements OnInit {
  @ViewChild('POItemsOri', { static: true }) poItemsOri: PoTableComponent;
  @ViewChild('POItemsSelected', { static: true }) poItemsSelected: PoTableComponent;

  items: Array<any> = [];
  itemsSelected: Array<any> = [];
  columns: Array<PoTableColumn>;

  constructor(private service: SamplePoTableHeroesService) {}

  ngOnInit(): void {
    this.getColumns();
    this.getItems();
  }

  getColumns(): void {
    this.columns = this.service.getColumns();
  }

  getItems(): void {
    this.service.getItems().subscribe({
      next: res => (this.items = res),
      error: err => console.error(err)
    });
  }

  changeOptions(event, type): void {
    if (type === 'new') {
      this.itemsSelected.push({
        id: event.id,
        label: event.label,
        email: event.email
      });
      this.itemsSelected = [...this.itemsSelected];
    } else {
      const index = this.itemsSelected.findIndex(el => el.id === event.id);
      this.poItemsSelected.removeItem(index);
      this.itemsSelected = [...this.poItemsSelected.items];
    }
  }

  deleteItems(items: Array<any>) {
    this.items = items;
    this.itemsSelected = [];
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-heroes/sample-po-table-heroes.service.ts"),n(),t(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableHeroesService {
  constructor(private http: HttpClient) {}
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'id', label: 'Id', type: 'string', width: '90px' },
      { property: 'label', label: 'Name', type: 'string', width: '90px' },
      { property: 'email', label: 'E-mail', type: 'string', width: '120px' }
    ];
  }

  getItems(): Observable<any> {
    return this.http.get('https://po-sample-api.onrender.com/v1/heroes').pipe(pluck('items'));
  }
}
`),n()()()()(),t(25,"div",10),i(26,"sample-po-table-heroes"),n(),i(27,"hr")),l&2&&(m(5),D("po-icon "+o.sampleCodeButtonIcon),m(),_(" ",o.sampleCodeButtonLabel,""),m(),c("ngClass",f(4,Wt,o.hideSampleCodeTabs)))},dependencies:[k,P,y,T,ot],encapsulation:2})}return r})();var Qt=()=>({code:"001",table:"PO Table",angular:"PO-UI"}),Gt=r=>[r],lt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=h({type:r,selectors:[["sample-po-table-draggable"]],standalone:!1,decls:4,vars:7,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-items","p-draggable","p-hide-columns-manager","p-hide-table-search"]],template:function(l,o){l&1&&(t(0,"div",0),e(1,` Choose one column and drag to another horizontal position in the table and drop
`),n(),i(2,"po-divider")(3,"po-table",1)),l&2&&(m(3),c("p-items",f(5,Gt,te(4,Qt)))("p-draggable",!0)("p-hide-columns-manager",!0)("p-hide-table-search",!1))},dependencies:[N,C],encapsulation:2})}return r})();var Jt=r=>({"docs-sample-code-tabs":r}),rt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=h({type:r,selectors:[["sample-po-table-draggable-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table Drag and Drop"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-draggable/sample-po-table-draggable.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">
  Choose one column and drag to another horizontal position in the table and drop
</div>

<po-divider></po-divider>

<po-table
  [p-items]="[{ code: '001', table: 'PO Table', angular: 'PO-UI' }]"
  [p-draggable]="true"
  [p-hide-columns-manager]="true"
  [p-hide-table-search]="false"
>
</po-table>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-draggable/sample-po-table-draggable.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-table-draggable',
  templateUrl: './sample-po-table-draggable.component.html',
  standalone: false
})
export class SamplePoTableDraggableComponent {}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-table-draggable"),n(),i(23,"hr")),l&2&&(m(5),D("po-icon "+o.sampleCodeButtonIcon),m(),_(" ",o.sampleCodeButtonLabel,""),m(),c("ngClass",f(4,Jt,o.hideSampleCodeTabs)))},dependencies:[k,P,y,T,lt],encapsulation:2})}return r})();var st=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=h({type:r,selectors:[["sample-po-table-doc"]],standalone:!1,decls:3972,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-table-row-template"],["href","/documentation/po-table-column-template"],["href","/documentation/po-table-cell-template"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableAction[]"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoTableColumn[]"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoTableLiterals"],["href","/documentation/po-i18n"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","PoTableColumnSpacing"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","PoTableColumn"],["pan","",1,"docs-api-property-type","PoTableColumnSortType"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","PoTableDetail"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["id","tableColumnIcon"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["pan","",1,"docs-api-property-type","PoTagType"],["pan","",1,"docs-api-property-type","Array<PoTableDetailColumn>"]],template:function(l,o){l&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoTableModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-table"),n()(),t(7,"h3",3),e(8,"Componente"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoTableComponent"),n()(),t(12,"div",2)(13,"p"),e(14,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
formato personalizado.`),n(),t(15,"p"),e(16,`Tamb\xE9m \xE9 possivel criar tabelas com ordena\xE7\xE3o de dados, linhas com detalhes, coluna para sele\xE7\xE3o de linhas, coluna com a\xE7\xF5es e tamb\xE9m
carregamento por demanda atrav\xE9s do bot\xE3o `),t(17,"strong"),e(18,"Carregar mais resultados"),n(),e(19,"."),n(),t(20,"blockquote")(21,"p"),e(22,"As linhas de detalhes podem tamb\xE9m ser customizadas atrav\xE9s do "),t(23,"a",6)(24,"code"),e(25,"p-table-row-template"),n()(),e(26,"."),n()(),t(27,"blockquote")(28,"p"),e(29,"As colunas podem ser customizadas atrav\xE9s dos templates "),t(30,"a",7)(31,"code"),e(32,"p-table-column-template"),n()(),e(33,`
e `),t(34,"a",8)(35,"code"),e(36,"p-table-cell-template"),n()(),e(37,"."),n()(),t(38,"p"),e(39,`O componente permite gerenciar a exibi\xE7\xE3o das colunas dinamicamente. Esta funcionalidade pode ser acessada atrav\xE9s do \xEDcone de engrenagem
no canto superior direito do cabe\xE7alho da tabela.`),n(),t(40,"p"),e(41,"Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, ser\xE1 exibido um "),t(42,"em"),e(43,"scroll"),n(),e(44,` na horizontal para a
completa visualiza\xE7\xE3o dos dados.`),n(),t(45,"h4",9),e(46,"Tokens customiz\xE1veis"),n(),t(47,"p"),e(48,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),n(),t(49,"blockquote")(50,"p"),e(51,"Para maiores informa\xE7\xF5es, acesse o guia "),t(52,"a",10),e(53,"Personalizando o Tema Padr\xE3o com Tokens CSS"),n(),e(54,"."),n()(),t(55,"table")(56,"thead")(57,"tr")(58,"th"),e(59,"Propriedade"),n(),t(60,"th"),e(61,"Descri\xE7\xE3o"),n(),t(62,"th"),e(63,"Valor Padr\xE3o"),n()()(),t(64,"tbody")(65,"tr")(66,"td")(67,"strong"),e(68,"Default Values"),n()(),i(69,"td")(70,"td"),n(),t(71,"tr")(72,"td")(73,"code"),e(74,"--font-family"),n()(),t(75,"td"),e(76,"Fam\xEDlia tipogr\xE1fica usada"),n(),t(77,"td")(78,"code"),e(79,"var(--font-family-theme)"),n()()(),t(80,"tr")(81,"td")(82,"code"),e(83,"--background-color"),n()(),t(84,"td"),e(85,"Cor de background"),n(),t(86,"td")(87,"code"),e(88,"var(--color-neutral-light-00)"),n()()(),t(89,"tr")(90,"td")(91,"code"),e(92,"--color"),n()(),t(93,"td"),e(94,"Cor principal da table"),n(),t(95,"td")(96,"code"),e(97,"var(--color-neutral-dark-95)"),n()()(),t(98,"tr")(99,"td")(100,"code"),e(101,"--background-striped-color"),n()(),t(102,"td"),e(103,"Cor do background quando striped"),n(),t(104,"td")(105,"code"),e(106,"var(--color-neutral-light-05)"),n()()(),t(107,"tr")(108,"td")(109,"code"),e(110,"--color-line"),n()(),t(111,"td"),e(112,"Cor das linhas"),n(),t(113,"td")(114,"code"),e(115,"var(--color-neutral-mid-40)"),n()()(),t(116,"tr")(117,"td")(118,"strong"),e(119,"Hover"),n()(),i(120,"td")(121,"td"),n(),t(122,"tr")(123,"td")(124,"code"),e(125,"--color-hover"),n()(),t(126,"td"),e(127,"Cor principal no estado hover"),n(),t(128,"td")(129,"code"),e(130,"var(--color-action-hover)"),n()()(),t(131,"tr")(132,"td")(133,"code"),e(134,"--background-color-hover"),n()(),t(135,"td"),e(136,"Cor de background no estado hover"),n(),t(137,"td")(138,"code"),e(139,"var(--color-brand-01-lighter)"),n()()(),t(140,"tr")(141,"td")(142,"strong"),e(143,"Focused"),n()(),i(144,"td")(145,"td"),n(),t(146,"tr")(147,"td")(148,"code"),e(149,"--outline-color-focused"),n()(),t(150,"td"),e(151,"Cor do outline do estado de focus"),n(),t(152,"td")(153,"code"),e(154,"var(--color-action-focus)"),n()()(),t(155,"tr")(156,"td")(157,"strong"),e(158,"Disabled"),n()(),i(159,"td")(160,"td"),n(),t(161,"tr")(162,"td")(163,"code"),e(164,"--color-disabled"),n()(),t(165,"td"),e(166,"Cor principal no estado disabled"),n(),t(167,"td")(168,"code"),e(169,"var(--color-neutral-mid-40)"),n()()(),t(170,"tr")(171,"td")(172,"strong"),e(173,"Headline"),n()(),i(174,"td")(175,"td"),n(),t(176,"tr")(177,"td")(178,"code"),e(179,"--background-color-headline"),n(),e(180," \xA0"),n(),t(181,"td"),e(182,"Cor do cabe\xE7alho"),n(),t(183,"td")(184,"code"),e(185,"var(--color-neutral-light-10)"),n()()(),t(186,"tr")(187,"td")(188,"code"),e(189,"--font-weight-headline"),n()(),t(190,"td"),e(191,"Peso da fonte do cabe\xE7alho"),n(),t(192,"td")(193,"code"),e(194,"var(--font-weight-bold)"),n()()(),t(195,"tr")(196,"td")(197,"strong"),e(198,"Selected"),n()(),i(199,"td")(200,"td"),n(),t(201,"tr")(202,"td")(203,"code"),e(204,"--background-color-selected"),n(),e(205,"\xA0"),n(),t(206,"td"),e(207,"Cor de background no estado de selecionado"),n(),t(208,"td")(209,"code"),e(210,"var(--color-brand-01-lightest)"),n()()(),t(211,"tr")(212,"td")(213,"strong"),e(214,"Actived"),n()(),i(215,"td")(216,"td"),n(),t(217,"tr")(218,"td")(219,"code"),e(220,"--color-actived"),n()(),t(221,"td"),e(222,"Cor do texto no estado de selecionado"),n(),t(223,"td")(224,"code"),e(225,"var(--color-neutral-dark-90)"),n()()(),t(226,"tr")(227,"td")(228,"code"),e(229,"--background-color-actived"),n()(),t(230,"td"),e(231,"Cor de background no estado de selecionado"),n(),t(232,"td")(233,"code"),e(234,"var(--color-brand-01-light)"),n()()()()()(),t(235,"div",11)(236,"h4",12),e(237,"Seletor"),n(),t(238,"pre",13),e(239,`<po-table
    p-actions-right="boolean"
    p-actions="PoTableAction[]"
    (p-all-selected)="EventEmitter"
    (p-all-unselected)="EventEmitter"
    p-auto-collapse="boolean"
    (p-change-visible-columns)="EventEmitter"
    (p-collapsed)="EventEmitter"
    (p-restore-column-manager)="EventEmitter"
    p-columns="PoTableColumn[]"
    p-container="string"
    p-draggable="boolean"
    (p-delete-items)="EventEmitter"
    (p-expanded)="EventEmitter"
    p-filter-type="PoSearchFilterMode"
    p-filtered-columns="Array<string>"
    p-height="number"
    p-hide-action-fixed-columns="boolean"
    p-hide-batch-actions="boolean"
    p-hide-columns-manager="boolean"
    p-hide-detail="boolean"
    p-hide-select-all="boolean"
    p-hide-table-search="boolean"
    p-infinite-scroll="boolean"
    p-infinite-scroll-distance="number"
    p-items="any[]"
    p-literals="PoTableLiterals"
    p-loading="boolean"
    p-loading-show-more="boolean"
    p-max-columns="number"
    p-param-delete-api="string"
    p-selectable="boolean"
    p-selectable-entire-line="boolean"
    (p-selected)="EventEmitter"
    p-service-api="string"
    p-service-delete="string"
    (p-show-more)="EventEmitter"
    p-show-more-disabled="boolean"
    p-single-select="boolean"
    p-sort="boolean"
    (p-sort-by)="EventEmitter"
    p-spacing="PoTableColumnSpacing"
    p-striped="boolean"
    p-text-wrap="boolean"
    (p-unselected)="EventEmitter"
    p-virtual-scroll="boolean" >
</po-table>
`),n()(),t(240,"h4",14),e(241,"Propriedades"),n(),t(242,"table",15)(243,"tr",16)(244,"th",17),e(245,"Nome"),n(),t(246,"th",17),e(247,"Tipo"),n(),t(248,"th",17),e(249,"Padr\xE3o"),n(),t(250,"th",17),e(251,"Descri\xE7\xE3o"),n()(),t(252,"tr",18)(253,"td",19)(254,"div",20)(255,"span",21),e(256," p-actions-right"),i(257,"br"),n()()(),t(258,"td",22)(259,"code",23),e(260,"boolean"),n()(),t(261,"td",24)(262,"p")(263,"code"),e(264,"false"),n()()(),t(265,"td",25)(266,"em")(267,"strong"),e(268,"(opcional)"),n()(),t(269,"p"),e(270,"Define que a coluna de a\xE7\xF5es ficar\xE1 no lado direito da tabela."),n()()(),t(271,"tr",18)(272,"td",19)(273,"div",20)(274,"span",21),e(275," p-actions"),i(276,"br"),n()()(),t(277,"td",22)(278,"code",26),e(279,"PoTableAction[]"),n()(),t(280,"td",24),e(281,"-"),n(),t(282,"td",25)(283,"em")(284,"strong"),e(285,"(opcional)"),n()(),t(286,"p"),e(287,"Define uma lista de a\xE7\xF5es."),n(),t(288,"p"),e(289,`Quando houver apenas uma a\xE7\xE3o definida ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrup\xE1-las exibindo o \xEDcone `),t(290,"a",27)(291,"strong"),e(292,"an an-dots-three"),n()(),e(293," que listar\xE1 as a\xE7\xF5es ao ser clicado."),n(),t(294,"p")(295,"strong"),e(296,"A coluna de a\xE7\xF5es n\xE3o ser\xE1 exibida quando:"),n()(),t(297,"ul")(298,"li"),e(299,"a lista conter valores inv\xE1lidos ou indefinidos."),n(),t(300,"li"),e(301,"tenha uma \xFAnica a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),n()()()(),t(302,"tr",18)(303,"td",19)(304,"div",28)(305,"span",29),e(306," (p-all-selected)"),i(307,"br"),n()()(),t(308,"td",22)(309,"code",30),e(310,"EventEmitter"),n()(),t(311,"td",24),e(312,"-"),n(),t(313,"td",25)(314,"em")(315,"strong"),e(316,"(opcional)"),n()(),t(317,"p"),e(318,"Evento executado quando todas as linhas s\xE3o selecionadas por meio do "),t(319,"em"),e(320,"checkbox"),n(),e(321," que seleciona todas as linhas."),n()()(),t(322,"tr",18)(323,"td",19)(324,"div",28)(325,"span",29),e(326," (p-all-unselected)"),i(327,"br"),n()()(),t(328,"td",22)(329,"code",30),e(330,"EventEmitter"),n()(),t(331,"td",24),e(332,"-"),n(),t(333,"td",25)(334,"em")(335,"strong"),e(336,"(opcional)"),n()(),t(337,"p"),e(338,"Evento executado quando a sele\xE7\xE3o das linhas \xE9 desmarcada por meio do "),t(339,"em"),e(340,"checkbox"),n(),e(341," que seleciona todas as linhas."),n()()(),t(342,"tr",18)(343,"td",19)(344,"div",20)(345,"span",21),e(346," p-auto-collapse"),i(347,"br"),n()()(),t(348,"td",22)(349,"code",23),e(350,"boolean"),n()(),t(351,"td",24)(352,"p")(353,"code"),e(354,"false"),n()()(),t(355,"td",25)(356,"em")(357,"strong"),e(358,"(opcional)"),n()(),t(359,"p"),e(360,"Permite fechar um detalhe ou row template automaticamente, ao abrir outro item."),n()()(),t(361,"tr",18)(362,"td",19)(363,"div",28)(364,"span",29),e(365," (p-change-visible-columns)"),i(366,"br"),n()()(),t(367,"td",22)(368,"code",30),e(369,"EventEmitter"),n()(),t(370,"td",24),e(371,"-"),n(),t(372,"td",25)(373,"em")(374,"strong"),e(375,"(opcional)"),n()(),t(376,"p"),e(377,"Evento disparado ao fechar o page slide do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),n(),t(378,"p"),e(379,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),n()()(),t(380,"tr",18)(381,"td",19)(382,"div",28)(383,"span",29),e(384," (p-collapsed)"),i(385,"br"),n()()(),t(386,"td",22)(387,"code",30),e(388,"EventEmitter"),n()(),t(389,"td",24),e(390,"-"),n(),t(391,"td",25)(392,"em")(393,"strong"),e(394,"(opcional)"),n()(),t(395,"p"),e(396,"Evento executado ao colapsar uma linha do "),t(397,"code"),e(398,"po-table"),n(),e(399,"."),n(),t(400,"blockquote")(401,"p"),e(402,"Como par\xE2metro o componente envia o item colapsado."),n()()()(),t(403,"tr",18)(404,"td",19)(405,"div",28)(406,"span",29),e(407," (p-restore-column-manager)"),i(408,"br"),n()()(),t(409,"td",22)(410,"code",30),e(411,"EventEmitter"),n()(),t(412,"td",24),e(413,"-"),n(),t(414,"td",25)(415,"em")(416,"strong"),e(417,"(opcional)"),n()(),t(418,"p"),e(419,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),n(),t(420,"p"),e(421,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),n()()(),t(422,"tr",18)(423,"td",19)(424,"div",20)(425,"span",21),e(426," p-columns"),i(427,"br"),n()()(),t(428,"td",22)(429,"code",31),e(430,"PoTableColumn[]"),n()(),t(431,"td",24),e(432,"-"),n(),t(433,"td",25)(434,"em")(435,"strong"),e(436,"(opcional)"),n()(),t(437,"p"),e(438,"Lista das colunas da tabela, deve receber um "),t(439,"em"),e(440,"array"),n(),e(441," de objetos que implementam a interface "),t(442,"code"),e(443,"PoTableColumn"),n(),e(444,`.
Por padr\xE3o receber\xE1 como valor a primeira coluna da lista de itens da tabela.`),n(),t(445,"blockquote")(446,"p"),e(447,"Caso n\xE3o encontre valor, a mensagem 'Nenhuma defini\xE7\xE3o de colunas' ser\xE1 exibida."),n()()()(),t(448,"tr",18)(449,"td",19)(450,"div",20)(451,"span",21),e(452," p-container"),i(453,"br"),n()()(),t(454,"td",22)(455,"code",32),e(456,"string"),n()(),t(457,"td",24)(458,"p")(459,"code"),e(460,"border"),n()()(),t(461,"td",25)(462,"em")(463,"strong"),e(464,"(opcional)"),n()(),t(465,"p"),e(466,"Adiciona um contorno arredondado ao "),t(467,"code"),e(468,"po-table"),n(),e(469,", as op\xE7\xF5es s\xE3o:"),n(),t(470,"ul")(471,"li")(472,"code"),e(473,"border"),n(),e(474,": com bordas/linhas."),n(),t(475,"li")(476,"code"),e(477,"shadow"),n(),e(478,": com sombras."),n()()()(),t(479,"tr",18)(480,"td",19)(481,"div",20)(482,"span",21),e(483," p-draggable"),i(484,"br"),n()()(),t(485,"td",22)(486,"code",23),e(487,"boolean"),n()(),t(488,"td",24)(489,"p")(490,"code"),e(491,"false"),n()()(),t(492,"td",25)(493,"em")(494,"strong"),e(495,"(opcional)"),n()(),t(496,"p"),e(497,"Habilita o modo drag and drop para as colunas da tabela."),n()()(),t(498,"tr",18)(499,"td",19)(500,"div",28)(501,"span",29),e(502," (p-delete-items)"),i(503,"br"),n()()(),t(504,"td",22)(505,"code",30),e(506,"EventEmitter"),n()(),t(507,"td",24),e(508,"-"),n(),t(509,"td",25)(510,"em")(511,"strong"),e(512,"(opcional)"),n()(),t(513,"p"),e(514,"Evento executado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado."),n(),t(515,"pre")(516,"code"),e(517,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>`),n()(),t(518,"blockquote")(519,"p"),e(520,"Como par\xE2metro o componente envia a lista atualizada, sem os itens exclu\xEDdos."),n()()()(),t(521,"tr",18)(522,"td",19)(523,"div",28)(524,"span",29),e(525," (p-expanded)"),i(526,"br"),n()()(),t(527,"td",22)(528,"code",30),e(529,"EventEmitter"),n()(),t(530,"td",24),e(531,"-"),n(),t(532,"td",25)(533,"em")(534,"strong"),e(535,"(opcional)"),n()(),t(536,"p"),e(537,"Evento executado ao expandir uma linha do "),t(538,"code"),e(539,"po-table"),n(),e(540,"."),n(),t(541,"blockquote")(542,"p"),e(543,"Como par\xE2metro o componente envia o item expandido."),n()()()(),t(544,"tr",18)(545,"td",19)(546,"div",20)(547,"span",21),e(548," p-filter-type"),i(549,"br"),n()()(),t(550,"td",22)(551,"code",33),e(552,"PoSearchFilterMode"),n()(),t(553,"td",24)(554,"p")(555,"code"),e(556,"startsWith"),n()()(),t(557,"td",25)(558,"em")(559,"strong"),e(560,"(opcional)"),n()(),t(561,"p"),e(562,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoSearchFilterMode`),n(),t(563,"blockquote")(564,"p"),e(565,`Obs: A pesquisa \xE9 realizada exclusivamente nos dados locais, ou seja, aqueles que foram
renderizados na tabela.`),n()()()(),t(566,"tr",18)(567,"td",19)(568,"div",20)(569,"span",21),e(570," p-filtered-columns"),i(571,"br"),n()()(),t(572,"td",22)(573,"code",34),e(574,"Array<string>"),n()(),t(575,"td",24),e(576,"-"),n(),t(577,"td",25)(578,"em")(579,"strong"),e(580,"(opcional)"),n()(),t(581,"p"),e(582,`Define as colunas que ser\xE3o filtradas no campo de pesquisa.
Aceita um array de strings, representando as colunas espec\xEDficas que ser\xE3o consideradas na filtragem.`),n()()(),t(583,"tr",18)(584,"td",19)(585,"div",20)(586,"span",21),e(587," p-height"),i(588,"br"),n()()(),t(589,"td",22)(590,"code",35),e(591,"number"),n()(),t(592,"td",24),e(593,"-"),n(),t(594,"td",25)(595,"em")(596,"strong"),e(597,"(opcional)"),n()(),t(598,"p"),e(599,"Define a altura da tabela em "),t(600,"em"),e(601,"pixels"),n(),e(602," e fixa o cabe\xE7alho."),n(),t(603,"p"),e(604,"Ao utilizar essa propriedade ser\xE1 inserido o "),t(605,"code"),e(606,"virtual-scroll"),n(),e(607," na tabela melhorando a performance."),n()()(),t(608,"tr",18)(609,"td",19)(610,"div",20)(611,"span",21),e(612," p-hide-action-fixed-columns"),i(613,"br"),n()()(),t(614,"td",22)(615,"code",23),e(616,"boolean"),n()(),t(617,"td",24)(618,"p")(619,"code"),e(620,"false"),n()()(),t(621,"td",25)(622,"em")(623,"strong"),e(624,"(opcional)"),n()(),t(625,"p"),e(626,"Permite que as a\xE7\xF5es para fixar uma coluna da tabela sejam escondidas."),n()()(),t(627,"tr",18)(628,"td",19)(629,"div",20)(630,"span",21),e(631," p-hide-batch-actions"),i(632,"br"),n()()(),t(633,"td",22)(634,"code",23),e(635,"boolean"),n()(),t(636,"td",24)(637,"p")(638,"code"),e(639,"true"),n()()(),t(640,"td",25)(641,"em")(642,"strong"),e(643,"(opcional)"),n()(),t(644,"p"),e(645,"Permite que as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens, sejam escondidas."),n()()(),t(646,"tr",18)(647,"td",19)(648,"div",20)(649,"span",21),e(650," p-hide-columns-manager"),i(651,"br"),n()()(),t(652,"td",22)(653,"code",23),e(654,"boolean"),n()(),t(655,"td",24)(656,"p")(657,"code"),e(658,"false"),n()()(),t(659,"td",25)(660,"em")(661,"strong"),e(662,"(opcional)"),n()(),t(663,"p"),e(664,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),n()()(),t(665,"tr",18)(666,"td",19)(667,"div",20)(668,"span",21),e(669," p-hide-detail"),i(670,"br"),n()()(),t(671,"td",22)(672,"code",23),e(673,"boolean"),n()(),t(674,"td",24)(675,"p")(676,"code"),e(677,"false"),n()()(),t(678,"td",25)(679,"em")(680,"strong"),e(681,"(opcional)"),n()(),t(682,"p"),e(683,"Habilita a visualiza\xE7\xE3o da lista de detalhes de cada linha da coluna."),n()()(),t(684,"tr",18)(685,"td",19)(686,"div",20)(687,"span",21),e(688," p-hide-select-all"),i(689,"br"),n()()(),t(690,"td",22)(691,"code",23),e(692,"boolean"),n()(),t(693,"td",24)(694,"p")(695,"code"),e(696,"false"),n()()(),t(697,"td",25)(698,"p"),e(699,"Esconde o "),t(700,"em"),e(701,"checkbox"),n(),e(702," para sele\xE7\xE3o de todas as linhas."),n(),t(703,"blockquote")(704,"p"),e(705,"Sempre receber\xE1 "),t(706,"em"),e(707,"true"),n(),e(708," caso a sele\xE7\xE3o de apenas uma linha esteja ativa."),n()()()(),t(709,"tr",18)(710,"td",19)(711,"div",20)(712,"span",21),e(713," p-hide-table-search"),i(714,"br"),n()()(),t(715,"td",22)(716,"code",23),e(717,"boolean"),n()(),t(718,"td",24)(719,"p")(720,"code"),e(721,"true"),n()()(),t(722,"td",25)(723,"em")(724,"strong"),e(725,"(opcional)"),n()(),t(726,"p"),e(727,"Permite que o campo de pesquisa seja escondido."),n()()(),t(728,"tr",18)(729,"td",19)(730,"div",20)(731,"span",21),e(732," p-infinite-scroll"),i(733,"br"),n()()(),t(734,"td",22)(735,"code",23),e(736,"boolean"),n()(),t(737,"td",24)(738,"p")(739,"code"),e(740,"false"),n()()(),t(741,"td",25)(742,"em")(743,"strong"),e(744,"(opcional)"),n()(),t(745,"p"),e(746,`Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o bot\xE3o "Carregar Mais" deixar\xE1 de ser exibido. Ao chegar no fim da tabela
executar\xE1 a fun\xE7\xE3o `),t(747,"code"),e(748,"p-show-more"),n(),e(749,"."),n(),t(750,"p")(751,"strong"),e(752,"Regras de utiliza\xE7\xE3o:"),n()(),t(753,"ul")(754,"li"),e(755,"O scroll infinito s\xF3 funciona para tabelas que utilizam a propriedade "),t(756,"code"),e(757,"p-height"),n(),e(758," e que possuem o scroll j\xE1 na carga inicial dos dados."),n()()()(),t(759,"tr",18)(760,"td",19)(761,"div",20)(762,"span",21),e(763," p-infinite-scroll-distance"),i(764,"br"),n()()(),t(765,"td",22)(766,"code",35),e(767,"number"),n()(),t(768,"td",24),e(769,"-"),n(),t(770,"td",25)(771,"em")(772,"strong"),e(773,"(opcional)"),n()(),t(774,"p"),e(775,"Define o percentual necess\xE1rio para disparar o evento "),t(776,"code"),e(777,"p-show-more"),n(),e(778,`, que \xE9 respons\xE1vel por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
que 0, o valor padr\xE3o ser\xE1 100%`),n(),t(779,"p")(780,"strong"),e(781,"Exemplos:"),n()(),t(782,"ul")(783,"li"),e(784,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll da tabela, o "),t(785,"code"),e(786,"p-show-more"),n(),e(787," ser\xE1 disparado."),n()()()(),t(788,"tr",18)(789,"td",19)(790,"div",20)(791,"span",21),e(792," p-items"),i(793,"br"),n()()(),t(794,"td",22)(795,"code",36),e(796,"any[]"),n()(),t(797,"td",24),e(798,"-"),n(),t(799,"td",25)(800,"p"),e(801,"Lista de itens da tabela."),n(),t(802,"blockquote")(803,"p"),e(804,"Se falso, ser\xE1 inicializado como um "),t(805,"em"),e(806,"array"),n(),e(807," vazio."),n()()()(),t(808,"tr",18)(809,"td",19)(810,"div",20)(811,"span",21),e(812," p-literals"),i(813,"br"),n()()(),t(814,"td",22)(815,"code",37),e(816,"PoTableLiterals"),n()(),t(817,"td",24),e(818,"-"),n(),t(819,"td",25)(820,"em")(821,"strong"),e(822,"(opcional)"),n()(),t(823,"p"),e(824,"Objeto com as literais usadas no "),t(825,"code"),e(826,"po-table"),n(),e(827,"."),n(),t(828,"p"),e(829,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),n(),t(830,"pre")(831,"code"),e(832,`const customLiterals: PoTableLiterals = {
  noColumns: 'Nenhuma defini\xE7\xE3o de colunas',
  noData: 'Nenhum dado encontrado',
  noVisibleColumn: 'Nenhuma coluna vis\xEDvel',
  noItem: 'Nenhum item selecionado',
  oneItem: '1 item selecionado',
  multipleItems: 'itens selecionados',
  loadingData: 'Carregando',
  loadMoreData: 'Carregar mais resultados',
  seeCompleteSubtitle: 'Ver legenda completa',
  completeSubtitle: 'Legenda completa',
  columnsManager: 'Gerenciador de colunas',
  bodyDelete: 'Deseja realmente excluir esse item?',
  cancel: 'Cancelar',
  delete: 'Excluir',
  deleteSuccessful: 'Itens removidos com sucesso',
  deleteApiError: 'Ocorreu um erro inesperado, tente novamente mais tarde!',
};`),n()(),t(833,"p"),e(834,"Ou passando apenas as literais que deseja customizar:"),n(),t(835,"pre")(836,"code"),e(837,`const customLiterals: PoTableLiterals = {
  noData: 'Sem dados'
};`),n()(),t(838,"p"),e(839,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),n(),t(840,"pre")(841,"code"),e(842,`<po-table
  [p-literals]="customLiterals">
</po-table>`),n()(),t(843,"blockquote")(844,"p"),e(845,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(846,"a",38)(847,"code"),e(848,"PoI18nService"),n()(),e(849," ou do browser."),n()()()(),t(850,"tr",18)(851,"td",19)(852,"div",20)(853,"span",21),e(854," p-loading"),i(855,"br"),n()()(),t(856,"td",22)(857,"code",23),e(858,"boolean"),n()(),t(859,"td",24)(860,"p")(861,"code"),e(862,"false"),n()()(),t(863,"td",25)(864,"em")(865,"strong"),e(866,"(opcional)"),n()(),t(867,"p"),e(868,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados da "),t(869,"em"),e(870,"table"),n(),e(871,"."),n()()(),t(872,"tr",18)(873,"td",19)(874,"div",20)(875,"span",21),e(876," p-loading-show-more"),i(877,"br"),n()()(),t(878,"td",22)(879,"code",23),e(880,"boolean"),n()(),t(881,"td",24)(882,"p")(883,"code"),e(884,"false"),n()()(),t(885,"td",25)(886,"em")(887,"strong"),e(888,"(opcional)"),n()(),t(889,"p"),e(890,'Permite que seja adicionado o estado de carregamento no bot\xE3o "Carregar mais resultados".'),n()()(),t(891,"tr",18)(892,"td",19)(893,"div",20)(894,"span",21),e(895," p-max-columns"),i(896,"br"),n()()(),t(897,"td",22)(898,"code",35),e(899,"number"),n()(),t(900,"td",24),e(901,"-"),n(),t(902,"td",25)(903,"em")(904,"strong"),e(905,"(opcional)"),n()(),t(906,"p"),e(907,"Define uma quantidade m\xE1xima de colunas que ser\xE3o exibidas na tabela."),n(),t(908,"p"),e(909,`Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o
desabilitadas e caso houver mais colunas vis\xEDveis do que o permitido, as excedentes
ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),n()()(),t(910,"tr",18)(911,"td",19)(912,"div",20)(913,"span",21),e(914," p-param-delete-api"),i(915,"br"),n()()(),t(916,"td",22)(917,"code",32),e(918,"string"),n()(),t(919,"td",24)(920,"p")(921,"code"),e(922,"id"),n()()(),t(923,"td",25)(924,"em")(925,"strong"),e(926,"(opcional)"),n()(),t(927,"p"),e(928,"Adiciona o par\xE2metro a ser enviado para a requisi\xE7\xE3o de DELETE."),n(),t(929,"p"),e(930,"\xC9 necess\xE1rio a utiliza\xE7\xE3o da propriedade "),t(931,"code"),e(932,"p-service-delete"),n(),e(933," em conjunto."),n()()(),t(934,"tr",18)(935,"td",19)(936,"div",20)(937,"span",21),e(938," p-selectable"),i(939,"br"),n()()(),t(940,"td",22)(941,"code",23),e(942,"boolean"),n()(),t(943,"td",24)(944,"p")(945,"code"),e(946,"false"),n()()(),t(947,"td",25)(948,"em")(949,"strong"),e(950,"(opcional)"),n()(),t(951,"p"),e(952,"Permite a sele\xE7\xE3o de linhas na tabela e, caso a propriedade "),t(953,"code"),e(954,"p-single-select"),n(),e(955,` esteja definida ser\xE1 poss\xEDvel
selecionar apenas uma \xFAnica linha.`),n(),t(956,"p")(957,"strong"),e(958,"Importante:"),n()(),t(959,"ul")(960,"li"),e(961,"As linhas de detalhe definidas em "),t(962,"code"),e(963,"PoTableDetail"),n(),e(964," possuem comportamento independente da linha mestre;"),n(),t(965,"li"),e(966,"Cada linha possui por padr\xE3o a propriedade din\xE2mica "),t(967,"code"),e(968,"$selected"),n(),e(969,`, na qual \xE9 poss\xEDvel validar se a linha
est\xE1 selecionada, por exemplo: `),t(970,"code"),e(971,"item.$selected"),n(),e(972," ou "),t(973,"code"),e(974,"item['$selected']"),n(),e(975,"."),n()()()(),t(976,"tr",18)(977,"td",19)(978,"div",20)(979,"span",21),e(980," p-selectable-entire-line"),i(981,"br"),n()()(),t(982,"td",22)(983,"code",23),e(984,"boolean"),n()(),t(985,"td",24)(986,"p")(987,"code"),e(988,"true"),n()()(),t(989,"td",25)(990,"p"),e(991,"Permite selecionar um item da tabela clicando na linha."),n(),t(992,"blockquote")(993,"p"),e(994,"Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como "),t(995,"code"),e(996,"false"),n(),e(997,"."),n()()()(),t(998,"tr",18)(999,"td",19)(1e3,"div",28)(1001,"span",29),e(1002," (p-selected)"),i(1003,"br"),n()()(),t(1004,"td",22)(1005,"code",30),e(1006,"EventEmitter"),n()(),t(1007,"td",24),e(1008,"-"),n(),t(1009,"td",25)(1010,"em")(1011,"strong"),e(1012,"(opcional)"),n()(),t(1013,"p"),e(1014,"Evento executado ao selecionar uma linha do "),t(1015,"code"),e(1016,"po-table"),n(),e(1017,"."),n()()(),t(1018,"tr",18)(1019,"td",19)(1020,"div",20)(1021,"span",21),e(1022," p-service-api"),i(1023,"br"),n()()(),t(1024,"td",22)(1025,"code",32),e(1026,"string"),n()(),t(1027,"td",24),e(1028,"-"),n(),t(1029,"td",25)(1030,"em")(1031,"strong"),e(1032,"(opcional)"),n()(),t(1033,"p"),e(1034,"URL da API respons\xE1vel por retornar os registros."),n(),t(1035,"p"),e(1036,"Ao realizar a busca de mais registros via pagina\xE7\xE3o (Carregar mais resultados), ser\xE1 enviado os par\xE2metros "),t(1037,"code"),e(1038,"page"),n(),e(1039," e "),t(1040,"code"),e(1041,"pageSize"),n(),e(1042,", conforme abaixo:"),n(),t(1043,"pre")(1044,"code"),e(1045,"url + ?page=1&pageSize=10"),n()(),t(1046,"p"),e(1047,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),t(1048,"code"),e(1049,"order"),n(),e(1050,", por exemplo:"),n(),t(1051,"ul")(1052,"li")(1053,"p"),e(1054,"Coluna decrescente:"),n(),t(1055,"pre")(1056,"code"),e(1057,"url + ?page=1&pageSize=10&order=-name"),n()()(),t(1058,"li")(1059,"p"),e(1060,"Coluna ascendente:"),n(),t(1061,"pre")(1062,"code"),e(1063,"url + ?page=1&pageSize=10&order=name"),n()()()(),t(1064,"blockquote")(1065,"p"),e(1066,"Esta URL deve retornar e receber os dados no padr\xE3o de "),t(1067,"a",39),e(1068,"API do PO UI"),n(),e(1069,"."),n()()()(),t(1070,"tr",18)(1071,"td",19)(1072,"div",20)(1073,"span",21),e(1074," p-service-delete"),i(1075,"br"),n()()(),t(1076,"td",22)(1077,"code",32),e(1078,"string"),n()(),t(1079,"td",24),e(1080,"-"),n(),t(1081,"td",25)(1082,"em")(1083,"strong"),e(1084,"(opcional)"),n()(),t(1085,"p"),e(1086,"URL da API respons\xE1vel por excluir os registros."),n(),t(1087,"p"),e(1088,"Ao selecionar o bot\xE3o de excluir itens, essa url ser\xE1 executada utilizando o par\xE2metro enviado na propriedade "),t(1089,"code"),e(1090,"p-param-delete-api"),n(),e(1091,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),t(1092,"code"),e(1093,"id"),n(),e(1094,"."),n(),t(1095,"blockquote")(1096,"p"),e(1097,"Esta URL deve retornar e receber os dados no padr\xE3o de "),t(1098,"a",39),e(1099,"API do PO UI"),n(),e(1100,"."),n()()()(),t(1101,"tr",18)(1102,"td",19)(1103,"div",28)(1104,"span",29),e(1105," (p-show-more)"),i(1106,"br"),n()()(),t(1107,"td",22)(1108,"code",30),e(1109,"EventEmitter"),n()(),t(1110,"td",24),e(1111,"-"),n(),t(1112,"td",25)(1113,"em")(1114,"strong"),e(1115,"(opcional)"),n()(),t(1116,"p"),e(1117,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),n(),t(1118,"p"),e(1119,"Recebe um objeto "),t(1120,"code"),e(1121,"{ column, type }"),n(),e(1122," onde:"),n(),t(1123,"ul")(1124,"li"),e(1125,"column ("),t(1126,"code"),e(1127,"PoTableColumn"),n(),e(1128,"): objeto da coluna que est\xE1 ordenada."),n(),t(1129,"li"),e(1130,"type ("),t(1131,"code"),e(1132,"PoTableColumnSortType"),n(),e(1133,"): tipo da ordena\xE7\xE3o."),n()()()(),t(1134,"tr",18)(1135,"td",19)(1136,"div",20)(1137,"span",21),e(1138," p-show-more-disabled"),i(1139,"br"),n()()(),t(1140,"td",22)(1141,"code",23),e(1142,"boolean"),n()(),t(1143,"td",24)(1144,"p")(1145,"code"),e(1146,"false"),n()()(),t(1147,"td",25)(1148,"p"),e(1149,'Se verdadeiro, torna habilitado o bot\xE3o "Carregar mais resultados".'),n()()(),t(1150,"tr",18)(1151,"td",19)(1152,"div",20)(1153,"span",21),e(1154," p-single-select"),i(1155,"br"),n()()(),t(1156,"td",22)(1157,"code",23),e(1158,"boolean"),n()(),t(1159,"td",24),e(1160,"-"),n(),t(1161,"td",25)(1162,"p"),e(1163,"Define que somente uma linha da tabela pode ser selecionada."),n(),t(1164,"blockquote")(1165,"p"),e(1166,"Esta defini\xE7\xE3o n\xE3o se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai."),n()()()(),t(1167,"tr",18)(1168,"td",19)(1169,"div",20)(1170,"span",21),e(1171," p-sort"),i(1172,"br"),n()()(),t(1173,"td",22)(1174,"code",23),e(1175,"boolean"),n()(),t(1176,"td",24)(1177,"p")(1178,"code"),e(1179,"false"),n()()(),t(1180,"td",25)(1181,"em")(1182,"strong"),e(1183,"(opcional)"),n()(),t(1184,"p"),e(1185,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),n()()(),t(1186,"tr",18)(1187,"td",19)(1188,"div",28)(1189,"span",29),e(1190," (p-sort-by)"),i(1191,"br"),n()()(),t(1192,"td",22)(1193,"code",30),e(1194,"EventEmitter"),n()(),t(1195,"td",24),e(1196,"-"),n(),t(1197,"td",25)(1198,"em")(1199,"strong"),e(1200,"(opcional)"),n()(),t(1201,"p"),e(1202,"Evento executado ao ordenar colunas da tabela."),n(),t(1203,"p"),e(1204,"Recebe um objeto "),t(1205,"code"),e(1206,"{ column, type }"),n(),e(1207," onde:"),n(),t(1208,"ul")(1209,"li"),e(1210,"column ("),t(1211,"code"),e(1212,"PoTableColumn"),n(),e(1213,"): objeto da coluna que foi clicada/ordenada."),n(),t(1214,"li"),e(1215,"type ("),t(1216,"code"),e(1217,"PoTableColumnSortType"),n(),e(1218,"): tipo da ordena\xE7\xE3o."),n()()()(),t(1219,"tr",18)(1220,"td",19)(1221,"div",20)(1222,"span",21),e(1223," p-spacing"),i(1224,"br"),n()()(),t(1225,"td",22)(1226,"code",40),e(1227,"PoTableColumnSpacing"),n()(),t(1228,"td",24)(1229,"p")(1230,"code"),e(1231,"medium"),n()()(),t(1232,"td",25)(1233,"em")(1234,"strong"),e(1235,"(opcional)"),n()(),t(1236,"p"),e(1237,"Respons\xE1vel por aplicar espa\xE7amento nas colunas."),n(),t(1238,"p"),e(1239,"Deve receber um dos valores do enum "),t(1240,"code"),e(1241,"PoTableColumnSpacing"),n(),e(1242,"."),n()()(),t(1243,"tr",18)(1244,"td",19)(1245,"div",20)(1246,"span",21),e(1247," p-striped"),i(1248,"br"),n()()(),t(1249,"td",22)(1250,"code",23),e(1251,"boolean"),n()(),t(1252,"td",24)(1253,"p")(1254,"code"),e(1255,"false"),n()()(),t(1256,"td",25)(1257,"p"),e(1258,"Habilita ou desabilita o estilo listrado da tabela ("),t(1259,"code"),e(1260,"striped"),n(),e(1261,")."),n(),t(1262,"blockquote")(1263,"p"),e(1264,"Recomendado para tabelas com maior n\xFAmero de dados, facilitando a sua visualiza\xE7\xE3o na tabela."),n()()()(),t(1265,"tr",18)(1266,"td",19)(1267,"div",20)(1268,"span",21),e(1269," p-text-wrap"),i(1270,"br"),n()()(),t(1271,"td",22)(1272,"code",23),e(1273,"boolean"),n()(),t(1274,"td",24)(1275,"p")(1276,"code"),e(1277,"false"),n()()(),t(1278,"td",25)(1279,"em")(1280,"strong"),e(1281,"(opcional)"),n()(),t(1282,"p"),e(1283,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),n(),t(1284,"blockquote")(1285,"p"),e(1286,"Incompat\xEDvel com "),t(1287,"code"),e(1288,"virtual-scroll"),n(),e(1289,", que requer altura fixa nas linhas."),n()()()(),t(1290,"tr",18)(1291,"td",19)(1292,"div",28)(1293,"span",29),e(1294," (p-unselected)"),i(1295,"br"),n()()(),t(1296,"td",22)(1297,"code",30),e(1298,"EventEmitter"),n()(),t(1299,"td",24),e(1300,"-"),n(),t(1301,"td",25)(1302,"em")(1303,"strong"),e(1304,"(opcional)"),n()(),t(1305,"p"),e(1306,"Evento executado ao desmarcar a sele\xE7\xE3o de uma linha do "),t(1307,"code"),e(1308,"po-table"),n(),e(1309,"."),n()()(),t(1310,"tr",18)(1311,"td",19)(1312,"div",20)(1313,"span",21),e(1314," p-virtual-scroll"),i(1315,"br"),n()()(),t(1316,"td",22)(1317,"code",23),e(1318,"boolean"),n()(),t(1319,"td",24)(1320,"p")(1321,"code"),e(1322,"true"),n()()(),t(1323,"td",25)(1324,"em")(1325,"strong"),e(1326,"(opcional)"),n()(),t(1327,"p"),e(1328,"Habilita o "),t(1329,"code"),e(1330,"virtual-scroll"),n(),e(1331,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),t(1332,"code"),e(1333,"p-height"),n(),e(1334,") para funcionar corretamente."),n(),t(1335,"blockquote")(1336,"p"),e(1337,"Incompat\xEDvel com "),t(1338,"code"),e(1339,"p-text-wrap"),n(),e(1340," e "),t(1341,"code"),e(1342,"master-detail"),n(),e(1343,", pois o "),t(1344,"code"),e(1345,"virtual-scroll"),n(),e(1346," exige altura fixa nas linhas."),n()()()()(),t(1347,"h3",14),e(1348,"M\xE9todos"),n(),t(1349,"table",41)(1350,"tr",18)(1351,"th",42)(1352,"div",20)(1353,"h4")(1354,"span",21),e(1355," applyFilters "),n()()()()(),t(1356,"tr",25)(1357,"td",25)(1358,"p"),e(1359,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza a tabela."),n(),t(1360,"p"),e(1361,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),n(),t(1362,"pre")(1363,"code"),e(1364,"url + ?page=1&pageSize=10"),n()(),t(1365,"blockquote")(1366,"p"),e(1367,"Obs: os par\xE2metros "),t(1368,"code"),e(1369,"page"),n(),e(1370," e "),t(1371,"code"),e(1372,"pageSize"),n(),e(1373," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),n()(),t(1374,"p"),e(1375,"Caso sejam informados os par\xE2metros "),t(1376,"code"),e(1377,"{ name: 'JOHN', age: '23' }"),n(),e(1378,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),n(),t(1379,"pre")(1380,"code"),e(1381,"url + ?page=1&pageSize=10&name=JOHN&age=23"),n()()()()(),t(1382,"h5")(1383,"b"),e(1384,"Par\xE2metros"),n()(),t(1385,"table",15)(1386,"tr",16)(1387,"th",17),e(1388,"Nome"),n(),t(1389,"th",17),e(1390,"Tipo"),n(),t(1391,"th",17),e(1392,"Descri\xE7\xE3o"),n()(),t(1393,"tr",18)(1394,"td",19),e(1395," queryParams"),n(),t(1396,"td",22)(1397,"code",43),e(1398," { key: value } "),n()(),t(1399,"td",25)(1400,"p"),e(1401,"Formato do objeto a ser enviado."),n(),t(1402,"blockquote")(1403,"p"),e(1404,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),n()()()()(),i(1405,"br"),t(1406,"table",41)(1407,"tr",18)(1408,"th",42)(1409,"div",20)(1410,"h4")(1411,"span",21),e(1412," applyFixedColumns "),n()()()()(),t(1413,"tr",25)(1414,"td",25)(1415,"p"),e(1416,"Verifica se columns possuem a propriedade width."),n()()()(),i(1417,"br"),t(1418,"table",41)(1419,"tr",18)(1420,"th",42)(1421,"div",20)(1422,"h4")(1423,"span",21),e(1424," collapse "),n()()()()(),t(1425,"tr",25)(1426,"td",25)(1427,"p"),e(1428,"M\xE9todo que colapsa uma linha com detalhe quando executada."),n()()()(),t(1429,"h5")(1430,"b"),e(1431,"Par\xE2metros"),n()(),t(1432,"table",15)(1433,"tr",16)(1434,"th",17),e(1435,"Nome"),n(),t(1436,"th",17),e(1437,"Tipo"),n(),t(1438,"th",17),e(1439,"Descri\xE7\xE3o"),n()(),t(1440,"tr",18)(1441,"td",19),e(1442," rowIndex"),n(),t(1443,"td",22)(1444,"code",44),e(1445," number "),n()(),t(1446,"td",25)(1447,"p"),e(1448,"\xCDndice da linha que ser\xE1 colapsada."),n(),t(1449,"blockquote")(1450,"p"),e(1451,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),n()()()()(),i(1452,"br"),t(1453,"table",41)(1454,"tr",18)(1455,"th",42)(1456,"div",20)(1457,"h4")(1458,"span",21),e(1459," expand "),n()()()()(),t(1460,"tr",25)(1461,"td",25)(1462,"p"),e(1463,"M\xE9todo que expande uma linha com detalhe quando executada."),n()()()(),t(1464,"h5")(1465,"b"),e(1466,"Par\xE2metros"),n()(),t(1467,"table",15)(1468,"tr",16)(1469,"th",17),e(1470,"Nome"),n(),t(1471,"th",17),e(1472,"Tipo"),n(),t(1473,"th",17),e(1474,"Descri\xE7\xE3o"),n()(),t(1475,"tr",18)(1476,"td",19),e(1477," rowIndex"),n(),t(1478,"td",22)(1479,"code",44),e(1480," number "),n()(),t(1481,"td",25)(1482,"p"),e(1483,"\xCDndice da linha que ser\xE1 expandida."),n(),t(1484,"blockquote")(1485,"p"),e(1486,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),n()()()()(),i(1487,"br"),t(1488,"table",41)(1489,"tr",18)(1490,"th",42)(1491,"div",20)(1492,"h4")(1493,"span",21),e(1494," getSelectedRows "),n()()()()(),t(1495,"tr",25)(1496,"td",25)(1497,"p"),e(1498,"Retorna as linhas do "),t(1499,"code"),e(1500,"po-table"),n(),e(1501," que est\xE3o selecionadas."),n()()()(),i(1502,"br"),t(1503,"table",41)(1504,"tr",18)(1505,"th",42)(1506,"div",20)(1507,"h4")(1508,"span",21),e(1509," getUnselectedRows "),n()()()()(),t(1510,"tr",25)(1511,"td",25)(1512,"p"),e(1513,"Retorna as linhas do "),t(1514,"code"),e(1515,"po-table"),n(),e(1516," que n\xE3o est\xE3o selecionadas."),n()()()(),i(1517,"br"),t(1518,"table",41)(1519,"tr",18)(1520,"th",42)(1521,"div",20)(1522,"h4")(1523,"span",21),e(1524," unselectRows "),n()()()()(),t(1525,"tr",25)(1526,"td",25)(1527,"p"),e(1528,"Desmarca as linhas que est\xE3o selecionadas."),n()()()(),i(1529,"br"),t(1530,"table",41)(1531,"tr",18)(1532,"th",42)(1533,"div",20)(1534,"h4")(1535,"span",21),e(1536," unselectRowItem "),n()()()()(),t(1537,"tr",25)(1538,"td",25)(1539,"p"),e(1540,"Desmarca uma linha que est\xE1 selecionada."),n()()()(),i(1541,"br"),t(1542,"table",41)(1543,"tr",18)(1544,"th",42)(1545,"div",20)(1546,"h4")(1547,"span",21),e(1548," selectRowItem "),n()()()()(),t(1549,"tr",25)(1550,"td",25)(1551,"p"),e(1552,"Seleciona uma linha do 'po-table'."),n()()()(),i(1553,"br"),t(1554,"table",41)(1555,"tr",18)(1556,"th",42)(1557,"div",20)(1558,"h4")(1559,"span",21),e(1560," deleteItems "),n()()()()(),t(1561,"tr",25)(1562,"td",25)(1563,"p"),e(1564,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),t(1565,"code"),e(1566,"p-service-delete"),n(),e(1567,", ser\xE1 necess\xE1rio excluir 1 item por vez."),n(),t(1568,"p"),e(1569,"Ao utilizar "),t(1570,"code"),e(1571,"p-service-delete"),n(),e(1572," mas sem a propriedade "),t(1573,"code"),e(1574,"p-service-api"),n(),e(1575,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),n(),t(1576,"p"),e(1577,"Caso a tabela utilize "),t(1578,"code"),e(1579,"p-height"),n(),e(1580," e esteja sem servi\xE7o, \xE9 necess\xE1rio a reatribui\xE7\xE3o dos itens utilizando o evento "),t(1581,"code"),e(1582,"(p-delete-items)"),n(),e(1583,", por exemplo:"),n(),t(1584,"pre")(1585,"code"),e(1586,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>`),n()()()()(),i(1587,"br"),t(1588,"table",41)(1589,"tr",18)(1590,"th",42)(1591,"div",20)(1592,"h4")(1593,"span",21),e(1594," removeItem "),n()()()()(),t(1595,"tr",25)(1596,"td",25)(1597,"p"),e(1598,"M\xE9todo que remove um item da tabela."),n()()()(),t(1599,"h5")(1600,"b"),e(1601,"Par\xE2metros"),n()(),t(1602,"table",15)(1603,"tr",16)(1604,"th",17),e(1605,"Nome"),n(),t(1606,"th",17),e(1607,"Tipo"),n(),t(1608,"th",17),e(1609,"Descri\xE7\xE3o"),n()(),t(1610,"tr",18)(1611,"td",19),e(1612," item"),n(),t(1613,"td",22)(1614,"code",35),e(1615," number "),n(),t(1616,"code",43),e(1617," { key: value } "),n()(),t(1618,"td",25)(1619,"p"),e(1620,"\xCDndice da linha ou o item que ser\xE1 removido."),n(),t(1621,"blockquote")(1622,"p"),e(1623,"Ao remover o item, a linha que o representa ser\xE1 exclu\xEDda da tabela."),n()()()()(),i(1624,"br"),t(1625,"table",41)(1626,"tr",18)(1627,"th",42)(1628,"div",20)(1629,"h4")(1630,"span",21),e(1631," updateItem "),n()()()()(),t(1632,"tr",25)(1633,"td",25)(1634,"p"),e(1635,"M\xE9todo que atualiza um item da tabela."),n()()()(),t(1636,"h5")(1637,"b"),e(1638,"Par\xE2metros"),n()(),t(1639,"table",15)(1640,"tr",16)(1641,"th",17),e(1642,"Nome"),n(),t(1643,"th",17),e(1644,"Tipo"),n(),t(1645,"th",17),e(1646,"Descri\xE7\xE3o"),n()(),t(1647,"tr",18)(1648,"td",19),e(1649," item"),n(),t(1650,"td",22)(1651,"code",35),e(1652," number "),n(),t(1653,"code",43),e(1654," { key: value } "),n()(),t(1655,"td",25)(1656,"p"),e(1657,"\xCDndice da linha ou o item que ser\xE1 atualizado."),n()()(),t(1658,"tr",18)(1659,"td",19),e(1660," updatedItem"),n(),t(1661,"td",22)(1662,"code",43),e(1663," { key: value } "),n()(),t(1664,"td",25)(1665,"p"),e(1666,"Item que foi atualizado."),n(),t(1667,"blockquote")(1668,"p"),e(1669,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada na tabela."),n()()()()(),i(1670,"br"),t(1671,"h3"),e(1672,"Interfaces"),n(),t(1673,"h4",45)(1674,"code",5),e(1675,"PoTableAction"),n()(),t(1676,"div",2)(1677,"p"),e(1678,"Interface para lista de a\xE7\xF5es do componente. "),n()(),t(1679,"h4",14),e(1680,"Propriedades"),n(),t(1681,"table",15)(1682,"tr",16)(1683,"th",17),e(1684,"Nome"),n(),t(1685,"th",17),e(1686,"Tipo"),n(),t(1687,"th",17),e(1688,"Descri\xE7\xE3o"),n()(),t(1689,"tr",18)(1690,"td",19)(1691,"div",20)(1692,"span",21),e(1693," action"),i(1694,"br"),n()()(),t(1695,"td",22)(1696,"code",46),e(1697,"Function"),n()(),t(1698,"td",25)(1699,"em")(1700,"strong"),e(1701,"(opcional)"),n()(),t(1702,"p"),e(1703,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),n(),t(1704,"blockquote")(1705,"p"),e(1706,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),t(1707,"em"),e(1708,"bind"),n(),e(1709,"."),n()(),t(1710,"p"),e(1711,"Exemplo: "),t(1712,"code"),e(1713,"action: this.myFunction.bind(this)"),n()()()(),t(1714,"tr",18)(1715,"td",19)(1716,"div",20)(1717,"span",21),e(1718," disabled"),i(1719,"br"),n()()(),t(1720,"td",22)(1721,"code",23),e(1722,"boolean "),n(),t(1723,"code",46),e(1724," Function"),n()(),t(1725,"td",25)(1726,"em")(1727,"strong"),e(1728,"(opcional)"),n()(),t(1729,"p"),e(1730,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),n(),t(1731,"p"),e(1732,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),n()()(),t(1733,"tr",18)(1734,"td",19)(1735,"div",20)(1736,"span",21),e(1737," icon"),i(1738,"br"),n()()(),t(1739,"td",22)(1740,"code",32),e(1741,"string "),n(),t(1742,"code",47),e(1743," TemplateRef<void>"),n()(),t(1744,"td",25)(1745,"em")(1746,"strong"),e(1747,"(opcional)"),n()(),t(1748,"p"),e(1749,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),n(),t(1750,"p"),e(1751,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(1752,"a",27),e(1753,"Biblioteca de \xEDcones"),n(),e(1754,". conforme exemplo abaixo:"),n(),t(1755,"pre")(1756,"code"),e(1757,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>`),n()(),t(1758,"p"),e(1759,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),n(),t(1760,"pre")(1761,"code"),e(1762,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>`),n()(),t(1763,"p"),e(1764,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(1765,"code"),e(1766,"TemplateRef"),n(),e(1767,`, conforme exemplo abaixo:
component.html:`),n(),t(1768,"pre")(1769,"code"),e(1770,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>`),n()(),t(1771,"p"),e(1772,"component.ts:"),n(),t(1773,"pre")(1774,"code"),e(1775,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];`),n()()()(),t(1776,"tr",18)(1777,"td",19)(1778,"div",20)(1779,"span",21),e(1780," label"),i(1781,"br"),n()()(),t(1782,"td",22)(1783,"code",32),e(1784,"string"),n()(),t(1785,"td",25)(1786,"p"),e(1787,"R\xF3tulo da a\xE7\xE3o."),n()()(),t(1788,"tr",18)(1789,"td",19)(1790,"div",20)(1791,"span",21),e(1792," selected"),i(1793,"br"),n()()(),t(1794,"td",22)(1795,"code",23),e(1796,"boolean"),n()(),t(1797,"td",25)(1798,"em")(1799,"strong"),e(1800,"(opcional)"),n()(),t(1801,"p"),e(1802,"Define se a a\xE7\xE3o est\xE1 selecionada."),n()()(),t(1803,"tr",18)(1804,"td",19)(1805,"div",20)(1806,"span",21),e(1807," separator"),i(1808,"br"),n()()(),t(1809,"td",22)(1810,"code",23),e(1811,"boolean"),n()(),t(1812,"td",25)(1813,"em")(1814,"strong"),e(1815,"(opcional)"),n()(),t(1816,"p"),e(1817,"Atribui uma linha separadora acima do item."),n()()(),t(1818,"tr",18)(1819,"td",19)(1820,"div",20)(1821,"span",21),e(1822," type"),i(1823,"br"),n()()(),t(1824,"td",22)(1825,"code",32),e(1826,"string"),n()(),t(1827,"td",25)(1828,"em")(1829,"strong"),e(1830,"(opcional)"),n()(),t(1831,"p"),e(1832,"Define a cor do item, sendo "),t(1833,"code"),e(1834,"default"),n(),e(1835," o padr\xE3o."),n(),t(1836,"p"),e(1837,"Valores v\xE1lidos:"),n(),t(1838,"ul")(1839,"li")(1840,"code"),e(1841,"default"),n()(),t(1842,"li")(1843,"code"),e(1844,"danger"),n(),e(1845," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),n()()()(),t(1846,"tr",18)(1847,"td",19)(1848,"div",20)(1849,"span",21),e(1850," url"),i(1851,"br"),n()()(),t(1852,"td",22)(1853,"code",32),e(1854,"string"),n()(),t(1855,"td",25)(1856,"em")(1857,"strong"),e(1858,"(opcional)"),n()(),t(1859,"p"),e(1860,"URL utilizada no redirecionamento das p\xE1ginas."),n()()(),t(1861,"tr",18)(1862,"td",19)(1863,"div",20)(1864,"span",21),e(1865," visible"),i(1866,"br"),n()()(),t(1867,"td",22)(1868,"code",23),e(1869,"boolean "),n(),t(1870,"code",46),e(1871," Function"),n()(),t(1872,"td",25)(1873,"em")(1874,"strong"),e(1875,"(opcional)"),n()(),t(1876,"p"),e(1877,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),n(),t(1878,"blockquote")(1879,"p"),e(1880,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),n()(),t(1881,"p"),e(1882,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),n(),t(1883,"ul")(1884,"li")(1885,"p"),e(1886,"Fun\xE7\xE3o que deve retornar um booleano."),n()(),t(1887,"li")(1888,"p"),e(1889,"Informar diretamente um valor booleano."),n()()()()()(),t(1890,"h4",45)(1891,"code",5),e(1892,"PoTableBoolean"),n()(),t(1893,"div",2)(1894,"p"),e(1895,"Interface que define as colunas booleanas do "),t(1896,"code"),e(1897,"po-table"),n(),e(1898,"."),n()(),t(1899,"h4",14),e(1900,"Propriedades"),n(),t(1901,"table",15)(1902,"tr",16)(1903,"th",17),e(1904,"Nome"),n(),t(1905,"th",17),e(1906,"Tipo"),n(),t(1907,"th",17),e(1908,"Descri\xE7\xE3o"),n()(),t(1909,"tr",18)(1910,"td",19)(1911,"div",20)(1912,"span",21),e(1913," falseLabel"),i(1914,"br"),n()()(),t(1915,"td",22)(1916,"code",32),e(1917,"string"),n()(),t(1918,"td",25)(1919,"em")(1920,"strong"),e(1921,"(opcional)"),n()(),t(1922,"p"),e(1923,"Define o r\xF3tulo para valores "),t(1924,"code"),e(1925,"false"),n(),e(1926,"."),n()()(),t(1927,"tr",18)(1928,"td",19)(1929,"div",20)(1930,"span",21),e(1931," trueLabel"),i(1932,"br"),n()()(),t(1933,"td",22)(1934,"code",32),e(1935,"string"),n()(),t(1936,"td",25)(1937,"em")(1938,"strong"),e(1939,"(opcional)"),n()(),t(1940,"p"),e(1941,"Define o r\xF3tulo para valores "),t(1942,"code"),e(1943,"true"),n(),e(1944,"."),n()()()(),t(1945,"h4",45)(1946,"code",5),e(1947,"PoTableColumnSort"),n()(),t(1948,"div",2)(1949,"p"),e(1950,"Interface para ordena\xE7\xE3o das colunas do componente table."),n()(),t(1951,"h4",14),e(1952,"Propriedades"),n(),t(1953,"table",15)(1954,"tr",16)(1955,"th",17),e(1956,"Nome"),n(),t(1957,"th",17),e(1958,"Tipo"),n(),t(1959,"th",17),e(1960,"Descri\xE7\xE3o"),n()(),t(1961,"tr",18)(1962,"td",19)(1963,"div",20)(1964,"span",21),e(1965," column"),i(1966,"br"),n()()(),t(1967,"td",22)(1968,"code",48),e(1969,"PoTableColumn"),n()(),t(1970,"td",25)(1971,"em")(1972,"strong"),e(1973,"(opcional)"),n()(),t(1974,"p"),e(1975,"Coluna pela qual a tabela est\xE1 ordenada."),n()()(),t(1976,"tr",18)(1977,"td",19)(1978,"div",20)(1979,"span",21),e(1980," type"),i(1981,"br"),n()()(),t(1982,"td",22)(1983,"code",49),e(1984,"PoTableColumnSortType"),n()(),t(1985,"td",25)(1986,"p"),e(1987,"Tipo da ordena\xE7\xE3o."),n()()()(),t(1988,"h4",45)(1989,"code",5),e(1990,"PoTableColumn"),n()(),t(1991,"div",2)(1992,"p"),e(1993,"Interface para configura\xE7\xE3o das colunas do "),t(1994,"code"),e(1995,"po-table"),n(),e(1996,"."),n(),t(1997,"p"),e(1998,"As defini\xE7\xF5es das colunas ser\xE3o aplicadas linha a linha."),n()(),t(1999,"h4",14),e(2e3,"Propriedades"),n(),t(2001,"table",15)(2002,"tr",16)(2003,"th",17),e(2004,"Nome"),n(),t(2005,"th",17),e(2006,"Tipo"),n(),t(2007,"th",17),e(2008,"Descri\xE7\xE3o"),n()(),t(2009,"tr",18)(2010,"td",19)(2011,"div",20)(2012,"span",21),e(2013," action"),i(2014,"br"),n()()(),t(2015,"td",22)(2016,"code",46),e(2017,"Function"),n()(),t(2018,"td",25)(2019,"em")(2020,"strong"),e(2021,"(opcional)"),n()(),t(2022,"p"),e(2023,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),t(2024,"code"),e(2025,"link"),n(),e(2026," ou "),t(2027,"code"),e(2028,"icon"),n(),e(2029,"."),n(),t(2030,"blockquote")(2031,"p"),e(2032,"Quando for do tipo "),t(2033,"code"),e(2034,"link"),n(),e(2035,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),n()(),t(2036,"blockquote")(2037,"p"),e(2038,"Quando for do tipo "),t(2039,"code"),e(2040,"icon"),n(),e(2041," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),n()()()(),t(2042,"tr",18)(2043,"td",19)(2044,"div",20)(2045,"span",21),e(2046," boolean"),i(2047,"br"),n()()(),t(2048,"td",22)(2049,"code",50),e(2050,"PoTableBoolean"),n()(),t(2051,"td",25)(2052,"em")(2053,"strong"),e(2054,"(opcional)"),n()(),t(2055,"p"),e(2056,"Define um objeto do tipo "),t(2057,"code"),e(2058,"PoTableBoolean"),n(),e(2059," para as colunas do tipo "),t(2060,"em"),e(2061,"boolean"),n(),e(2062,". Por exemplo:"),n(),t(2063,"pre")(2064,"code"),e(2065,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}`),n()(),t(2066,"blockquote")(2067,"p"),e(2068,"Caso n\xE3o seja definido um objeto para colunas do tipo "),t(2069,"em"),e(2070,"boolean"),n(),e(2071,`,
esta exibir\xE1 por padr\xE3o `),t(2072,"code"),e(2073,"Sim"),n(),e(2074," e "),t(2075,"code"),e(2076,"N\xE3o"),n(),e(2077," de acordo com os valores "),t(2078,"em"),e(2079,"booleanos"),n(),e(2080,"."),n()()()(),t(2081,"tr",18)(2082,"td",19)(2083,"div",20)(2084,"span",21),e(2085," color"),i(2086,"br"),n()()(),t(2087,"td",22)(2088,"code",32),e(2089,"string "),n(),t(2090,"code",46),e(2091," Function"),n()(),t(2092,"td",25)(2093,"em")(2094,"strong"),e(2095,"(opcional)"),n()(),t(2096,"p"),e(2097,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),n(),t(2098,"p"),e(2099,"Valores v\xE1lidos:"),n(),t(2100,"ul")(2101,"li"),i(2102,"span",51),t(2103,"code"),e(2104,"color-01"),n()(),t(2105,"li"),i(2106,"span",52),t(2107,"code"),e(2108,"color-02"),n()(),t(2109,"li"),i(2110,"span",53),t(2111,"code"),e(2112,"color-03"),n()(),t(2113,"li"),i(2114,"span",54),t(2115,"code"),e(2116,"color-04"),n()(),t(2117,"li"),i(2118,"span",55),t(2119,"code"),e(2120,"color-05"),n()(),t(2121,"li"),i(2122,"span",56),t(2123,"code"),e(2124,"color-06"),n()(),t(2125,"li"),i(2126,"span",57),t(2127,"code"),e(2128,"color-07"),n()(),t(2129,"li"),i(2130,"span",58),t(2131,"code"),e(2132,"color-08"),n()(),t(2133,"li"),i(2134,"span",59),t(2135,"code"),e(2136,"color-09"),n()(),t(2137,"li"),i(2138,"span",60),t(2139,"code"),e(2140,"color-10"),n()(),t(2141,"li"),i(2142,"span",61),t(2143,"code"),e(2144,"color-11"),n()(),t(2145,"li"),i(2146,"span",62),t(2147,"code"),e(2148,"color-12"),n()()(),t(2149,"blockquote")(2150,"p"),e(2151,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),n()(),t(2152,"pre")(2153,"code"),e(2154,"(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }"),n()(),t(2155,"blockquote")(2156,"p"),e(2157,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),t(2158,"code"),e(2159,"icons"),n(),e(2160,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),n()(),t(2161,"pre")(2162,"code"),e(2163,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},`),n()()()(),t(2164,"tr",18)(2165,"td",19)(2166,"div",20)(2167,"span",21),e(2168," detail"),i(2169,"br"),n()()(),t(2170,"td",22)(2171,"code",63),e(2172,"PoTableDetail"),n()(),t(2173,"td",25)(2174,"em")(2175,"strong"),e(2176,"(opcional)"),n()(),t(2177,"p"),e(2178,"Define um objeto que segue a interface "),t(2179,"code"),e(2180,"PoTableDetail"),n(),e(2181,", para as colunas de detalhes. Por exemplo:"),n(),t(2182,"pre")(2183,"code"),e(2184,"{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }"),n()()()(),t(2185,"tr",18)(2186,"td",19)(2187,"div",20)(2188,"span",21),e(2189," disabled"),i(2190,"br"),n()()(),t(2191,"td",22)(2192,"code",46),e(2193,"Function"),n()(),t(2194,"td",25)(2195,"em")(2196,"strong"),e(2197,"(opcional)"),n()(),t(2198,"p"),e(2199,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),t(2200,"em"),e(2201,"link"),n(),e(2202," e sua a\xE7\xE3o."),n(),t(2203,"blockquote")(2204,"p"),e(2205,"Propriedade dispon\xEDvel nas colunas do tipo "),t(2206,"code"),e(2207,"link"),n(),e(2208,"."),n()()()(),t(2209,"tr",18)(2210,"td",19)(2211,"div",20)(2212,"span",21),e(2213," format"),i(2214,"br"),n()()(),t(2215,"td",22)(2216,"code",32),e(2217,"string"),n()(),t(2218,"td",25)(2219,"em")(2220,"strong"),e(2221,"(opcional)"),n()(),t(2222,"p"),e(2223,"Formato de exibi\xE7\xE3o do valor da coluna:"),n(),t(2224,"ul")(2225,"li")(2226,"p"),e(2227,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),n()(),t(2228,"li")(2229,"p"),e(2230,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),n()(),t(2231,"li")(2232,"p"),e(2233,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e
milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),n()(),t(2234,"li")(2235,"p"),e(2236,"Formato para n\xFAmeros (number): aceita um valor seguindo o padr\xE3o "),t(2237,"a",64)(2238,"strong"),e(2239,"DecimalPipe"),n()(),e(2240,`
para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original. Exemplo:`),n(),t(2241,"ul")(2242,"li"),e(2243,"Com o valor de entrada: "),t(2244,"code"),e(2245,"50"),n(),e(2246," e a valor para formata\xE7\xE3o: "),t(2247,"code"),e(2248,"'1.2-5'"),n(),e(2249," o resultado ser\xE1: "),t(2250,"code"),e(2251,"50.00"),n()()()()()()(),t(2252,"tr",18)(2253,"td",19)(2254,"div",20)(2255,"span",21),e(2256," icons"),i(2257,"br"),n()()(),t(2258,"td",22)(2259,"code",65),e(2260,"Array<PoTableColumnIcon>"),n()(),t(2261,"td",25)(2262,"em")(2263,"strong"),e(2264,"(opcional)"),n()(),t(2265,"p"),e(2266,"Define um "),t(2267,"em"),e(2268,"array"),n(),e(2269," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),t(2270,"code"),e(2271,"action"),n(),e(2272," e "),t(2273,"code"),e(2274,"color"),n(),e(2275,`
definidos na coluna, \xE0 partir do `),t(2276,"em"),e(2277,"value"),n(),e(2278," da "),t(2279,"a",66)(2280,"code"),e(2281,"PoTableColumnIcon"),n()(),e(2282,", por exemplo:"),n(),t(2283,"pre")(2284,"code"),e(2285,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},`),n()(),t(2286,"pre")(2287,"code"),e(2288,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...`),n()()()(),t(2289,"tr",18)(2290,"td",19)(2291,"div",20)(2292,"span",21),e(2293," label"),i(2294,"br"),n()()(),t(2295,"td",22)(2296,"code",32),e(2297,"string"),n()(),t(2298,"td",25)(2299,"em")(2300,"strong"),e(2301,"(opcional)"),n()(),t(2302,"p"),e(2303,"Texto para t\xEDtulo da coluna."),n(),t(2304,"p"),e(2305,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),t(2306,"em"),e(2307,"label"),n(),e(2308," o valor da propriedade "),t(2309,"em"),e(2310,"property"),n(),e(2311," com a primeira letra em mai\xFAsculo."),n()()(),t(2312,"tr",18)(2313,"td",19)(2314,"div",20)(2315,"span",21),e(2316," labels"),i(2317,"br"),n()()(),t(2318,"td",22)(2319,"code",67),e(2320,"Array<PoTableColumnLabel>"),n()(),t(2321,"td",25)(2322,"em")(2323,"strong"),e(2324,"(opcional)"),n()(),t(2325,"p"),e(2326,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),t(2327,"code"),e(2328,"PoTableColumnLabel"),n(),e(2329," na qual devem ser definidas os labels. Por exemplo:"),n(),t(2330,"pre")(2331,"code"),e(2332,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}`),n()()()(),t(2333,"tr",18)(2334,"td",19)(2335,"div",20)(2336,"span",21),e(2337," link"),i(2338,"br"),n()()(),t(2339,"td",22)(2340,"code",32),e(2341,"string"),n()(),t(2342,"td",25)(2343,"em")(2344,"strong"),e(2345,"(opcional)"),n()(),t(2346,"p"),e(2347,"Define o nome da propriedade que conter\xE1 o "),t(2348,"code"),e(2349,"link"),n(),e(2350," a ser redirecionado."),n()()(),t(2351,"tr",18)(2352,"td",19)(2353,"div",20)(2354,"span",21),e(2355," property"),i(2356,"br"),n()()(),t(2357,"td",22)(2358,"code",32),e(2359,"string"),n()(),t(2360,"td",25)(2361,"em")(2362,"strong"),e(2363,"(opcional)"),n()(),t(2364,"p"),e(2365,"Nome identificador da coluna. Tamb\xE9m permite objetos aninhados conforme exemplo abaixo."),n(),t(2366,"pre")(2367,"code"),e(2368,"{ property: 'address.street', label: 'Rua' }"),n()()()(),t(2369,"tr",18)(2370,"td",19)(2371,"div",20)(2372,"span",21),e(2373," sortable"),i(2374,"br"),n()()(),t(2375,"td",22)(2376,"code",23),e(2377,"boolean"),n()(),t(2378,"td",25)(2379,"em")(2380,"strong"),e(2381,"(opcional)"),n()(),t(2382,"p"),e(2383,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),n()()(),t(2384,"tr",18)(2385,"td",19)(2386,"div",20)(2387,"span",21),e(2388," subtitles"),i(2389,"br"),n()()(),t(2390,"td",22)(2391,"code",68),e(2392,"Array<PoTableSubtitleColumn>"),n()(),t(2393,"td",25)(2394,"em")(2395,"strong"),e(2396,"(opcional)"),n()(),t(2397,"p"),e(2398,"Define um array de objetos para as colunas de legenda. Onde, "),t(2399,"code"),e(2400,"subtitles"),n(),e(2401,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),n(),t(2402,"pre")(2403,"code"),e(2404,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', content: '2' }
}`),n()(),t(2405,"p"),e(2406,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),n()()(),t(2407,"tr",18)(2408,"td",19)(2409,"div",20)(2410,"span",21),e(2411," tooltip"),i(2412,"br"),n()()(),t(2413,"td",22)(2414,"code",32),e(2415,"string"),n()(),t(2416,"td",25)(2417,"em")(2418,"strong"),e(2419,"(opcional)"),n()(),t(2420,"p"),e(2421,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),t(2422,"em"),e(2423,"mouse"),n(),e(2424," sobre um texto."),n(),t(2425,"blockquote")(2426,"p"),e(2427,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),t(2428,"em"),e(2429,"link"),n(),e(2430,"."),n()(),t(2431,"blockquote")(2432,"p"),e(2433,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),t(2434,"em"),e(2435,"tooltip"),n(),e(2436," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),n()()()(),t(2437,"tr",18)(2438,"td",19)(2439,"div",20)(2440,"span",21),e(2441," type"),i(2442,"br"),n()()(),t(2443,"td",22)(2444,"code",32),e(2445,"string"),n()(),t(2446,"td",25)(2447,"em")(2448,"strong"),e(2449,"(opcional)"),n()(),t(2450,"p"),e(2451,"Tipo da coluna."),n(),t(2452,"p"),e(2453,"Valores v\xE1lidos:"),n(),t(2454,"ul")(2455,"li")(2456,"p")(2457,"code"),e(2458,"boolean"),n(),e(2459,": Exibir\xE1 por padr\xE3o "),t(2460,"code"),e(2461,"Sim"),n(),e(2462," e "),t(2463,"code"),e(2464,"N\xE3o"),n(),e(2465," de acordo com os valores "),t(2466,"em"),e(2467,"booleanos"),n(),e(2468,"."),n(),t(2469,"blockquote")(2470,"p"),e(2471,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),t(2472,"code"),e(2473,"boolean"),n(),e(2474," desta interface."),n()()(),t(2475,"li")(2476,"p")(2477,"code"),e(2478,"currency"),n(),e(2479,": valores monet\xE1rios."),n()(),t(2480,"li")(2481,"p")(2482,"code"),e(2483,"date"),n(),e(2484,": valor de datas."),n(),t(2485,"ul")(2486,"li"),e(2487,"Aceita os tipos "),t(2488,"em"),e(2489,"string"),n(),e(2490," e "),t(2491,"em"),e(2492,"Date"),n(),e(2493,` padr\xE3o do Javascript,
por exemplo: `),t(2494,"code"),e(2495,"'2017-11-28'"),n(),e(2496," ou "),t(2497,"code"),e(2498,"new Date(2017, 10, 28)"),n(),e(2499,"."),n()()(),t(2500,"li")(2501,"p")(2502,"code"),e(2503,"dateTime"),n(),e(2504,": valor de data com hor\xE1rio."),n(),t(2505,"ul")(2506,"li"),e(2507,"Aceita o tipo "),t(2508,"em"),e(2509,"string"),n(),e(2510," no formato "),t(2511,"strong"),e(2512,"ISO-8601"),n(),e(2513," extendido "),t(2514,"strong"),e(2515,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),n(),e(2516,`
e o tipo `),t(2517,"em"),e(2518,"Date"),n(),e(2519," padr\xE3o do Javascript, por exemplo: "),t(2520,"code"),e(2521,"'2017-11-28T00:00:00-02:00'"),n(),e(2522," ou "),t(2523,"code"),e(2524,"new Date(2017, 10, 28)"),n(),e(2525,"."),n()()(),t(2526,"li")(2527,"p")(2528,"code"),e(2529,"detail"),n(),e(2530,": array de objetos para o master-detail."),n(),t(2531,"ul")(2532,"li"),e(2533,"Incompat\xEDvel com "),t(2534,"code"),e(2535,"virtual-scroll"),n(),e(2536,", que requer altura fixa nas linhas."),n()()(),t(2537,"li")(2538,"p")(2539,"code"),e(2540,"icon"),n(),e(2541,": "),t(2542,"em"),e(2543,"array"),n(),e(2544," de "),t(2545,"em"),e(2546,"string"),n(),e(2547," ou objetos para a coluna de \xEDcones."),n()(),t(2548,"li")(2549,"p")(2550,"code"),e(2551,"label"),n(),e(2552,": texto com destaque."),n()(),t(2553,"li")(2554,"p")(2555,"code"),e(2556,"link"),n(),e(2557,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),n()(),t(2558,"li")(2559,"p")(2560,"code"),e(2561,"number"),n(),e(2562,": valores num\xE9ricos."),n()(),t(2563,"li")(2564,"p")(2565,"code"),e(2566,"string"),n(),e(2567,": textos."),n()(),t(2568,"li")(2569,"p")(2570,"code"),e(2571,"subtitle"),n(),e(2572,": array de objetos para a coluna de legenda."),n()(),t(2573,"li")(2574,"p")(2575,"code"),e(2576,"time"),n(),e(2577,": valor de hor\xE1rio."),n(),t(2578,"ul")(2579,"li"),e(2580,"Aceita o tipo "),t(2581,"em"),e(2582,"string"),n(),e(2583," nos formatos "),t(2584,"strong"),e(2585,"'HH:mm:ss'"),n(),e(2586," ou "),t(2587,"strong"),e(2588,"'HH:mm:ss.ffffff'"),n(),e(2589,", por exemplo: "),t(2590,"code"),e(2591,"'23:12:45'"),n(),e(2592,"."),n()()(),t(2593,"li")(2594,"p")(2595,"code"),e(2596,"cellTemplate"),n(),e(2597,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),t(2598,"a",8),e(2599,"PoTableCellTemplate"),n(),e(2600,"."),n()(),t(2601,"li")(2602,"p")(2603,"code"),e(2604,"columnTemplate"),n(),e(2605,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),t(2606,"a",7),e(2607,"PoTableColumnTemplate"),n(),e(2608,"."),n()()()()(),t(2609,"tr",18)(2610,"td",19)(2611,"div",20)(2612,"span",21),e(2613," visible"),i(2614,"br"),n()()(),t(2615,"td",22)(2616,"code",23),e(2617,"boolean"),n()(),t(2618,"td",25)(2619,"em")(2620,"strong"),e(2621,"(opcional)"),n()(),t(2622,"p"),e(2623,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),t(2624,"strong"),e(2625,"gerenciador de colunas"),n(),e(2626,"."),n(),t(2627,"blockquote")(2628,"p"),e(2629,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),t(2630,"code"),e(2631,"p-max-columns"),n(),e(2632,"."),n()()()(),t(2633,"tr",18)(2634,"td",19)(2635,"div",20)(2636,"span",21),e(2637," width"),i(2638,"br"),n()()(),t(2639,"td",22)(2640,"code",32),e(2641,"string"),n()(),t(2642,"td",25)(2643,"em")(2644,"strong"),e(2645,"(opcional)"),n()(),t(2646,"p"),e(2647,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),n(),t(2648,"ul")(2649,"li"),e(2650,"para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px"),n(),t(2651,"li"),e(2652,"para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px"),n()()()()(),t(2653,"h4",45)(2654,"code",5),e(2655,"PoTableLiterals"),n()(),t(2656,"div",2)(2657,"p"),e(2658,"Interface para defini\xE7\xE3o das literais usadas no "),t(2659,"code"),e(2660,"po-table"),n(),e(2661,"."),n()(),t(2662,"h4",14),e(2663,"Propriedades"),n(),t(2664,"table",15)(2665,"tr",16)(2666,"th",17),e(2667,"Nome"),n(),t(2668,"th",17),e(2669,"Tipo"),n(),t(2670,"th",17),e(2671,"Descri\xE7\xE3o"),n()(),t(2672,"tr",18)(2673,"td",19)(2674,"div",20)(2675,"span",21),e(2676," bodyDelete"),i(2677,"br"),n()()(),t(2678,"td",22)(2679,"code",32),e(2680,"string"),n()(),t(2681,"td",25)(2682,"em")(2683,"strong"),e(2684,"(opcional)"),n()(),t(2685,"p"),e(2686,"Texto no corpo do Modal de exclus\xE3o"),n()()(),t(2687,"tr",18)(2688,"td",19)(2689,"div",20)(2690,"span",21),e(2691," cancel"),i(2692,"br"),n()()(),t(2693,"td",22)(2694,"code",32),e(2695,"string"),n()(),t(2696,"td",25)(2697,"em")(2698,"strong"),e(2699,"(opcional)"),n()(),t(2700,"p"),e(2701,"Texto no Modal para cancelar a exclus\xE3o"),n()()(),t(2702,"tr",18)(2703,"td",19)(2704,"div",20)(2705,"span",21),e(2706," columnsManager"),i(2707,"br"),n()()(),t(2708,"td",22)(2709,"code",32),e(2710,"string"),n()(),t(2711,"td",25)(2712,"em")(2713,"strong"),e(2714,"(opcional)"),n()(),t(2715,"p"),e(2716,"Texto do "),t(2717,"strong"),e(2718,"Gerenciador de colunas"),n(),e(2719," localizado no canto superior direito da tabela."),n()()(),t(2720,"tr",18)(2721,"td",19)(2722,"div",20)(2723,"span",21),e(2724," completeSubtitle"),i(2725,"br"),n()()(),t(2726,"td",22)(2727,"code",32),e(2728,"string"),n()(),t(2729,"td",25)(2730,"em")(2731,"strong"),e(2732,"(opcional)"),n()(),t(2733,"p"),e(2734,"T\xEDtulo da modal 'Legenda completa' que aparece ao clicar no bot\xE3o 'Ver legenda completa'."),n()()(),t(2735,"tr",18)(2736,"td",19)(2737,"div",20)(2738,"span",21),e(2739," delete"),i(2740,"br"),n()()(),t(2741,"td",22)(2742,"code",32),e(2743,"string"),n()(),t(2744,"td",25)(2745,"em")(2746,"strong"),e(2747,"(opcional)"),n()(),t(2748,"p"),e(2749,"Texto no Modal para confirmar a exclus\xE3o"),n()()(),t(2750,"tr",18)(2751,"td",19)(2752,"div",20)(2753,"span",21),e(2754," deleteApiError"),i(2755,"br"),n()()(),t(2756,"td",22)(2757,"code",32),e(2758,"string"),n()(),t(2759,"td",25)(2760,"em")(2761,"strong"),e(2762,"(opcional)"),n()(),t(2763,"p"),e(2764,"Texto de notifica\xE7\xE3o de erro na requisi\xE7\xE3o Delete"),n()()(),t(2765,"tr",18)(2766,"td",19)(2767,"div",20)(2768,"span",21),e(2769," deleteSuccessful"),i(2770,"br"),n()()(),t(2771,"td",22)(2772,"code",32),e(2773,"string"),n()(),t(2774,"td",25)(2775,"em")(2776,"strong"),e(2777,"(opcional)"),n()(),t(2778,"p"),e(2779,"Texto de notifica\xE7\xE3o de remo\xE7\xE3o com sucesso"),n()()(),t(2780,"tr",18)(2781,"td",19)(2782,"div",20)(2783,"span",21),e(2784," loadMoreData"),i(2785,"br"),n()()(),t(2786,"td",22)(2787,"code",32),e(2788,"string"),n()(),t(2789,"td",25)(2790,"em")(2791,"strong"),e(2792,"(opcional)"),n()(),t(2793,"p"),e(2794,"Texto do bot\xE3o de "),t(2795,"strong"),e(2796,"Carregar mais resultados"),n(),e(2797," localizado no rodap\xE9 da tabela."),n()()(),t(2798,"tr",18)(2799,"td",19)(2800,"div",20)(2801,"span",21),e(2802," loadingData"),i(2803,"br"),n()()(),t(2804,"td",22)(2805,"code",32),e(2806,"string"),n()(),t(2807,"td",25)(2808,"em")(2809,"strong"),e(2810,"(opcional)"),n()(),t(2811,"p"),e(2812,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),n()()(),t(2813,"tr",18)(2814,"td",19)(2815,"div",20)(2816,"span",21),e(2817," multipleItems"),i(2818,"br"),n()()(),t(2819,"td",22)(2820,"code",32),e(2821,"string"),n()(),t(2822,"td",25)(2823,"em")(2824,"strong"),e(2825,"(opcional)"),n()(),t(2826,"p"),e(2827,"Texto exibido quando apenas 1 item for selecionado no checkbox."),n()()(),t(2828,"tr",18)(2829,"td",19)(2830,"div",20)(2831,"span",21),e(2832," noColumns"),i(2833,"br"),n()()(),t(2834,"td",22)(2835,"code",32),e(2836,"string"),n()(),t(2837,"td",25)(2838,"em")(2839,"strong"),e(2840,"(opcional)"),n()(),t(2841,"p"),e(2842,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),n()()(),t(2843,"tr",18)(2844,"td",19)(2845,"div",20)(2846,"span",21),e(2847," noData"),i(2848,"br"),n()()(),t(2849,"td",22)(2850,"code",32),e(2851,"string"),n()(),t(2852,"td",25)(2853,"em")(2854,"strong"),e(2855,"(opcional)"),n()(),t(2856,"p"),e(2857,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),n()()(),t(2858,"tr",18)(2859,"td",19)(2860,"div",20)(2861,"span",21),e(2862," noItem"),i(2863,"br"),n()()(),t(2864,"td",22)(2865,"code",32),e(2866,"string"),n()(),t(2867,"td",25)(2868,"em")(2869,"strong"),e(2870,"(opcional)"),n()(),t(2871,"p"),e(2872,"Texto exibido quando nenhum item for selecionado no checkbox."),n()()(),t(2873,"tr",18)(2874,"td",19)(2875,"div",20)(2876,"span",21),e(2877," noVisibleColumn"),i(2878,"br"),n()()(),t(2879,"td",22)(2880,"code",32),e(2881,"string"),n()(),t(2882,"td",25)(2883,"em")(2884,"strong"),e(2885,"(opcional)"),n()(),t(2886,"p"),e(2887,"Texto exibido quando n\xE3o existem colunas vis\xEDveis para a tabela."),n()()(),t(2888,"tr",18)(2889,"td",19)(2890,"div",20)(2891,"span",21),e(2892," oneItem"),i(2893,"br"),n()()(),t(2894,"td",22)(2895,"code",32),e(2896,"string"),n()(),t(2897,"td",25)(2898,"em")(2899,"strong"),e(2900,"(opcional)"),n()(),t(2901,"p"),e(2902,"Texto exibido quando apenas 1 item for selecionado no checkbox."),n()()(),t(2903,"tr",18)(2904,"td",19)(2905,"div",20)(2906,"span",21),e(2907," seeCompleteSubtitle"),i(2908,"br"),n()()(),t(2909,"td",22)(2910,"code",32),e(2911,"string"),n()(),t(2912,"td",25)(2913,"em")(2914,"strong"),e(2915,"(opcional)"),n()(),t(2916,"p"),e(2917,"Texto do bot\xE3o "),t(2918,"strong"),e(2919,"Ver legenda completa"),n(),e(2920," que aparece quando o rodap\xE9 de legendas \xE9 maior que a tabela."),n()()()(),t(2921,"h4",45)(2922,"code",5),e(2923,"PoTableColumnIcon"),n()(),t(2924,"div",2)(2925,"p"),i(2926,"a",69),n(),t(2927,"p"),e(2928,"Interface que define a coluna com \xEDcone(s) do "),t(2929,"code"),e(2930,"po-table"),n(),e(2931,"."),n()(),t(2932,"h4",14),e(2933,"Propriedades"),n(),t(2934,"table",15)(2935,"tr",16)(2936,"th",17),e(2937,"Nome"),n(),t(2938,"th",17),e(2939,"Tipo"),n(),t(2940,"th",17),e(2941,"Descri\xE7\xE3o"),n()(),t(2942,"tr",18)(2943,"td",19)(2944,"div",20)(2945,"span",21),e(2946," action"),i(2947,"br"),n()()(),t(2948,"td",22)(2949,"code",46),e(2950,"Function"),n()(),t(2951,"td",25)(2952,"em")(2953,"strong"),e(2954,"(opcional)"),n()(),t(2955,"p"),e(2956,"Define a a\xE7\xE3o que ser\xE1 executada ao clicar no \xEDcone."),n()()(),t(2957,"tr",18)(2958,"td",19)(2959,"div",20)(2960,"span",21),e(2961," color"),i(2962,"br"),n()()(),t(2963,"td",22)(2964,"code",32),e(2965,"string "),n(),t(2966,"code",46),e(2967," Function"),n()(),t(2968,"td",25)(2969,"em")(2970,"strong"),e(2971,"(opcional)"),n()(),t(2972,"p"),e(2973,"Define a cor do \xEDcone."),n(),t(2974,"p"),e(2975,"Valores v\xE1lidos:"),n(),t(2976,"ul")(2977,"li"),i(2978,"span",51),t(2979,"code"),e(2980,"color-01"),n()(),t(2981,"li"),i(2982,"span",52),t(2983,"code"),e(2984,"color-02"),n()(),t(2985,"li"),i(2986,"span",53),t(2987,"code"),e(2988,"color-03"),n()(),t(2989,"li"),i(2990,"span",54),t(2991,"code"),e(2992,"color-04"),n()(),t(2993,"li"),i(2994,"span",55),t(2995,"code"),e(2996,"color-05"),n()(),t(2997,"li"),i(2998,"span",56),t(2999,"code"),e(3e3,"color-06"),n()(),t(3001,"li"),i(3002,"span",57),t(3003,"code"),e(3004,"color-07"),n()(),t(3005,"li"),i(3006,"span",58),t(3007,"code"),e(3008,"color-08"),n()(),t(3009,"li"),i(3010,"span",59),t(3011,"code"),e(3012,"color-09"),n()(),t(3013,"li"),i(3014,"span",60),t(3015,"code"),e(3016,"color-10"),n()(),t(3017,"li"),i(3018,"span",61),t(3019,"code"),e(3020,"color-11"),n()(),t(3021,"li"),i(3022,"span",62),t(3023,"code"),e(3024,"color-12"),n()()()()(),t(3025,"tr",18)(3026,"td",19)(3027,"div",20)(3028,"span",21),e(3029," disabled"),i(3030,"br"),n()()(),t(3031,"td",22)(3032,"code",46),e(3033,"Function"),n()(),t(3034,"td",25)(3035,"em")(3036,"strong"),e(3037,"(opcional)"),n()(),t(3038,"p"),e(3039,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o \xEDcone e sua a\xE7\xE3o."),n()()(),t(3040,"tr",18)(3041,"td",19)(3042,"div",20)(3043,"span",21),e(3044," icon"),i(3045,"br"),n()()(),t(3046,"td",22)(3047,"code",32),e(3048,"string "),n(),t(3049,"code",47),e(3050," TemplateRef<void>"),n()(),t(3051,"td",25)(3052,"em")(3053,"strong"),e(3054,"(opcional)"),n()(),t(3055,"p"),e(3056,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(3057,"a",27),e(3058,"Biblioteca de \xEDcones"),n(),e(3059,". conforme exemplo abaixo:"),n(),t(3060,"pre")(3061,"code"),e(3062,"[ { icon: 'an an-plus' } ]"),n()(),t(3063,"p"),e(3064,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),n(),t(3065,"pre")(3066,"code"),e(3067,"[ {  icon: 'fas fa-plus' } ]"),n()(),t(3068,"p"),e(3069,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(3070,"code"),e(3071,"TemplateRef"),n(),e(3072,`, conforme exemplo abaixo:
`),t(3073,"code"),e(3074,"component.html"),n(),e(3075,":"),n(),t(3076,"pre")(3077,"code"),e(3078,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>`),n()(),t(3079,"p")(3080,"code"),e(3081,"component.ts"),n(),e(3082,":"),n(),t(3083,"pre")(3084,"code"),e(3085,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];`),n()(),t(3086,"blockquote")(3087,"p"),e(3088,"Caso esta propriedade n\xE3o seja definida, a mesma receber\xE1 o valor contido em "),t(3089,"code"),e(3090,"value"),n(),e(3091,"."),n()()()(),t(3092,"tr",18)(3093,"td",19)(3094,"div",20)(3095,"span",21),e(3096," tooltip"),i(3097,"br"),n()()(),t(3098,"td",22)(3099,"code",32),e(3100,"string"),n()(),t(3101,"td",25)(3102,"em")(3103,"strong"),e(3104,"(opcional)"),n()(),t(3105,"p"),e(3106,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),t(3107,"em"),e(3108,"mouse"),n(),e(3109," em cima do \xEDcone."),n()()(),t(3110,"tr",18)(3111,"td",19)(3112,"div",20)(3113,"span",21),e(3114," value"),i(3115,"br"),n()()(),t(3116,"td",22)(3117,"code",32),e(3118,"string"),n()(),t(3119,"td",25)(3120,"p"),e(3121,"Define o valor do \xEDcone que ser\xE1 exibido."),n()()()(),t(3122,"h4",45)(3123,"code",5),e(3124,"PoTableColumnLabel"),n()(),t(3125,"div",2)(3126,"p"),e(3127,"Interface para configura\xE7\xE3o das colunas de labels do "),t(3128,"code"),e(3129,"po-table"),n(),e(3130,"."),n()(),t(3131,"h4",14),e(3132,"Propriedades"),n(),t(3133,"table",15)(3134,"tr",16)(3135,"th",17),e(3136,"Nome"),n(),t(3137,"th",17),e(3138,"Tipo"),n(),t(3139,"th",17),e(3140,"Descri\xE7\xE3o"),n()(),t(3141,"tr",18)(3142,"td",19)(3143,"div",20)(3144,"span",21),e(3145," color"),i(3146,"br"),n()()(),t(3147,"td",22)(3148,"code",32),e(3149,"string"),n()(),t(3150,"td",25)(3151,"em")(3152,"strong"),e(3153,"(opcional)"),n()(),t(3154,"p"),e(3155,"Define a cor do label."),n(),t(3156,"p"),e(3157,"Valores v\xE1lidos:"),n(),t(3158,"ul")(3159,"li"),i(3160,"span",51),t(3161,"code"),e(3162,"color-01"),n()(),t(3163,"li"),i(3164,"span",52),t(3165,"code"),e(3166,"color-02"),n()(),t(3167,"li"),i(3168,"span",53),t(3169,"code"),e(3170,"color-03"),n()(),t(3171,"li"),i(3172,"span",54),t(3173,"code"),e(3174,"color-04"),n()(),t(3175,"li"),i(3176,"span",55),t(3177,"code"),e(3178,"color-05"),n()(),t(3179,"li"),i(3180,"span",56),t(3181,"code"),e(3182,"color-06"),n()(),t(3183,"li"),i(3184,"span",57),t(3185,"code"),e(3186,"color-07"),n()(),t(3187,"li"),i(3188,"span",58),t(3189,"code"),e(3190,"color-08"),n()(),t(3191,"li"),i(3192,"span",59),t(3193,"code"),e(3194,"color-09"),n()(),t(3195,"li"),i(3196,"span",60),t(3197,"code"),e(3198,"color-10"),n()(),t(3199,"li"),i(3200,"span",61),t(3201,"code"),e(3202,"color-11"),n()(),t(3203,"li"),i(3204,"span",62),t(3205,"code"),e(3206,"color-12"),n()()()()(),t(3207,"tr",18)(3208,"td",19)(3209,"div",20)(3210,"span",21),e(3211," icon"),i(3212,"br"),n()()(),t(3213,"td",22)(3214,"code",23),e(3215,"boolean "),n(),t(3216,"code",32),e(3217," string "),n(),t(3218,"code",47),e(3219," TemplateRef<void>"),n()(),t(3220,"td",25)(3221,"em")(3222,"strong"),e(3223,"(opcional)"),n()(),t(3224,"p"),e(3225,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),t(3226,"em"),e(3227,"tag"),n(),e(3228,"."),n(),t(3229,"p"),e(3230,"Quando "),t(3231,"code"),e(3232,"p-type"),n(),e(3233," estiver definida, basta informar um valor igual a "),t(3234,"code"),e(3235,"true"),n(),e(3236," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),n(),t(3237,"ul")(3238,"li"),i(3239,"span",70),e(3240," - "),t(3241,"code"),e(3242,"success"),n()(),t(3243,"li"),i(3244,"span",71),e(3245," - "),t(3246,"code"),e(3247,"warning"),n()(),t(3248,"li"),i(3249,"span",72),e(3250," - "),t(3251,"code"),e(3252,"danger"),n()(),t(3253,"li"),i(3254,"span",73),e(3255," - "),t(3256,"code"),e(3257,"info"),n()()(),t(3258,"p"),e(3259,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(3260,"a",27),e(3261,"Biblioteca de \xEDcones"),n(),e(3262,". conforme exemplo abaixo:"),n(),t(3263,"pre")(3264,"code"),e(3265,'<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>'),n()(),t(3266,"p"),e(3267,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),t(3268,"em"),e(3269,"Font Awesome"),n(),e(3270,", da seguinte forma:"),n(),t(3271,"pre")(3272,"code"),e(3273,'<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>'),n()(),t(3274,"p"),e(3275,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(3276,"code"),e(3277,"TemplateRef"),n(),e(3278,", conforme exemplo abaixo:"),n(),t(3279,"pre")(3280,"code"),e(3281,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>`),n()(),t(3282,"blockquote")(3283,"p"),e(3284,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),t(3285,"code"),e(3286,"font-size: inherit"),n(),e(3287," caso o \xEDcone utilizado n\xE3o aplique-o."),n()()()(),t(3288,"tr",18)(3289,"td",19)(3290,"div",20)(3291,"span",21),e(3292," label"),i(3293,"br"),n()()(),t(3294,"td",22)(3295,"code",32),e(3296,"string"),n()(),t(3297,"td",25)(3298,"p"),e(3299,"Texto que ser\xE1 exibido na coluna."),n()()(),t(3300,"tr",18)(3301,"td",19)(3302,"div",20)(3303,"span",21),e(3304," textColor"),i(3305,"br"),n()()(),t(3306,"td",22)(3307,"code",32),e(3308,"string"),n()(),t(3309,"td",25)(3310,"em")(3311,"strong"),e(3312,"(opcional)"),n()(),t(3313,"p"),e(3314,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),n(),t(3315,"ul")(3316,"li")(3317,"p"),e(3318,"Hexadeximal, por exemplo "),t(3319,"code"),e(3320,"#c64840"),n(),e(3321,";"),n()(),t(3322,"li")(3323,"p"),e(3324,"RGB, como "),t(3325,"code"),e(3326,"rgb(0, 0, 165)"),n(),e(3327,";"),n()(),t(3328,"li")(3329,"p"),e(3330,"O nome da cor, por exemplo "),t(3331,"code"),e(3332,"blue"),n(),e(3333,";"),n()(),t(3334,"li")(3335,"p"),e(3336,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),n(),t(3337,"ul")(3338,"li"),i(3339,"span",51),t(3340,"code"),e(3341,"color-01"),n()(),t(3342,"li"),i(3343,"span",52),t(3344,"code"),e(3345,"color-02"),n()(),t(3346,"li"),i(3347,"span",53),t(3348,"code"),e(3349,"color-03"),n()(),t(3350,"li"),i(3351,"span",54),t(3352,"code"),e(3353,"color-04"),n()(),t(3354,"li"),i(3355,"span",55),t(3356,"code"),e(3357,"color-05"),n()(),t(3358,"li"),i(3359,"span",56),t(3360,"code"),e(3361,"color-06"),n()(),t(3362,"li"),i(3363,"span",57),t(3364,"code"),e(3365,"color-07"),n()(),t(3366,"li"),i(3367,"span",58),t(3368,"code"),e(3369,"color-08"),n()(),t(3370,"li"),i(3371,"span",59),t(3372,"code"),e(3373,"color-09"),n()(),t(3374,"li"),i(3375,"span",60),t(3376,"code"),e(3377,"color-10"),n()(),t(3378,"li"),i(3379,"span",61),t(3380,"code"),e(3381,"color-11"),n()(),t(3382,"li"),i(3383,"span",62),t(3384,"code"),e(3385,"color-12"),n()()()(),t(3386,"li")(3387,"p"),e(3388,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),n()()(),t(3389,"blockquote")(3390,"p")(3391,"strong"),e(3392,"Aten\xE7\xE3o:"),n(),e(3393," A propriedade "),t(3394,"code"),e(3395,"p-type"),n(),e(3396," sobrep\xF5e esta defini\xE7\xE3o."),n()()()(),t(3397,"tr",18)(3398,"td",19)(3399,"div",20)(3400,"span",21),e(3401," tooltip"),i(3402,"br"),n()()(),t(3403,"td",22)(3404,"code",32),e(3405,"string"),n()(),t(3406,"td",25)(3407,"em")(3408,"strong"),e(3409,"(opcional)"),n()(),t(3410,"p"),e(3411,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),t(3412,"em"),e(3413,"mouse"),n(),e(3414," em cima do "),t(3415,"em"),e(3416,"label"),n(),e(3417,"."),n(),t(3418,"blockquote")(3419,"p"),e(3420,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),n()()()(),t(3421,"tr",18)(3422,"td",19)(3423,"div",20)(3424,"span",21),e(3425," type"),i(3426,"br"),n()()(),t(3427,"td",22)(3428,"code",74),e(3429,"PoTagType"),n()(),t(3430,"td",25)(3431,"em")(3432,"strong"),e(3433,"(opcional)"),n()(),t(3434,"p"),e(3435,"Define o tipo da "),t(3436,"em"),e(3437,"tag"),n(),e(3438,"."),n(),t(3439,"p"),e(3440,"Valores v\xE1lidos:"),n(),t(3441,"ul")(3442,"li")(3443,"code"),e(3444,"success"),n(),e(3445,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),n(),t(3446,"li")(3447,"code"),e(3448,"warning"),n(),e(3449,": cor amarela que representa aviso ou advert\xEAncia."),n(),t(3450,"li")(3451,"code"),e(3452,"danger"),n(),e(3453,": cor vermelha para erro ou aviso cr\xEDtico."),n(),t(3454,"li")(3455,"code"),e(3456,"info"),n(),e(3457,": cor cinza escuro que caracteriza conte\xFAdo informativo."),n()(),t(3458,"blockquote")(3459,"p"),e(3460,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),t(3461,"code"),e(3462,"p-color"),n(),e(3463," e "),t(3464,"code"),e(3465,"p-icon"),n(),e(3466," somente ser\xE1 exibido caso seja "),t(3467,"code"),e(3468,"true"),n(),e(3469,"."),n()()()(),t(3470,"tr",18)(3471,"td",19)(3472,"div",20)(3473,"span",21),e(3474," value"),i(3475,"br"),n()()(),t(3476,"td",22)(3477,"code",32),e(3478,"string "),n(),t(3479,"code",35),e(3480," number"),n()(),t(3481,"td",25)(3482,"p"),e(3483,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),n()()()(),t(3484,"h4",45)(3485,"code",5),e(3486,"PoTableDetailColumn"),n()(),t(3487,"div",2)(3488,"p"),e(3489,"Interface para configura\xE7\xE3o das colunas do "),t(3490,"code"),e(3491,"po-table-detail"),n(),e(3492,"."),n()(),t(3493,"h4",14),e(3494,"Propriedades"),n(),t(3495,"table",15)(3496,"tr",16)(3497,"th",17),e(3498,"Nome"),n(),t(3499,"th",17),e(3500,"Tipo"),n(),t(3501,"th",17),e(3502,"Descri\xE7\xE3o"),n()(),t(3503,"tr",18)(3504,"td",19)(3505,"div",20)(3506,"span",21),e(3507," format"),i(3508,"br"),n()()(),t(3509,"td",22)(3510,"code",32),e(3511,"string"),n()(),t(3512,"td",25)(3513,"em")(3514,"strong"),e(3515,"(opcional)"),n()(),t(3516,"p"),e(3517,"Formato de exibi\xE7\xE3o do valor da coluna:"),n(),t(3518,"ul")(3519,"li")(3520,"p"),e(3521,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),n()(),t(3522,"li")(3523,"p"),e(3524,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),n()(),t(3525,"li")(3526,"p"),e(3527,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e
milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),n()(),t(3528,"li")(3529,"p"),e(3530,"Formato para n\xFAmeros (number): aceita um valor seguindo o padr\xE3o "),t(3531,"a",64)(3532,"strong"),e(3533,"DecimalPipe"),n()(),e(3534,`
para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original. Exemplo:`),n(),t(3535,"ul")(3536,"li"),e(3537,"Valor de entrada: "),t(3538,"code"),e(3539,"50"),n(),e(3540," e valor para formata\xE7\xE3o: "),t(3541,"code"),e(3542,"'1.2-5'"),n(),e(3543," o resultado ser\xE1: "),t(3544,"code"),e(3545,"50.00"),n()()()()()()(),t(3546,"tr",18)(3547,"td",19)(3548,"div",20)(3549,"span",21),e(3550," label"),i(3551,"br"),n()()(),t(3552,"td",22)(3553,"code",32),e(3554,"string"),n()(),t(3555,"td",25)(3556,"em")(3557,"strong"),e(3558,"(opcional)"),n()(),t(3559,"p"),e(3560,"Texto para t\xEDtulo da coluna."),n()()(),t(3561,"tr",18)(3562,"td",19)(3563,"div",20)(3564,"span",21),e(3565," property"),i(3566,"br"),n()()(),t(3567,"td",22)(3568,"code",32),e(3569,"string"),n()(),t(3570,"td",25)(3571,"em")(3572,"strong"),e(3573,"(opcional)"),n()(),t(3574,"p"),e(3575,"Nome identificador da coluna."),n()()(),t(3576,"tr",18)(3577,"td",19)(3578,"div",20)(3579,"span",21),e(3580," type"),i(3581,"br"),n()()(),t(3582,"td",22)(3583,"code",32),e(3584,"string"),n()(),t(3585,"td",25)(3586,"em")(3587,"strong"),e(3588,"(opcional)"),n()(),t(3589,"p"),e(3590,"Tipo da coluna."),n(),t(3591,"p"),e(3592,"Valores v\xE1lidos:"),n(),t(3593,"ul")(3594,"li")(3595,"p")(3596,"code"),e(3597,"currency"),n(),e(3598,": valores monet\xE1rios."),n()(),t(3599,"li")(3600,"p")(3601,"code"),e(3602,"date"),n(),e(3603,": valor de datas."),n(),t(3604,"ul")(3605,"li"),e(3606,"Aceita os tipos "),t(3607,"em"),e(3608,"string"),n(),e(3609," e "),t(3610,"em"),e(3611,"Date"),n(),e(3612,` padr\xE3o do Javascript,
por exemplo: `),t(3613,"code"),e(3614,"'2017-11-28'"),n(),e(3615," ou "),t(3616,"code"),e(3617,"new Date(2017, 10, 28)"),n(),e(3618,"."),n()()(),t(3619,"li")(3620,"p")(3621,"code"),e(3622,"time"),n(),e(3623,": valor de hor\xE1rio."),n()(),t(3624,"li")(3625,"p")(3626,"code"),e(3627,"number"),n(),e(3628,": valores num\xE9ricos."),n()(),t(3629,"li")(3630,"p")(3631,"code"),e(3632,"dateTime"),n(),e(3633,": valor de data com hor\xE1rio."),n(),t(3634,"ul")(3635,"li")(3636,"p"),e(3637,"Aceita o tipo "),t(3638,"em"),e(3639,"string"),n(),e(3640," no formato "),t(3641,"strong"),e(3642,"ISO-8601"),n(),e(3643," extendido "),t(3644,"strong"),e(3645,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),n(),e(3646,`
e o tipo `),t(3647,"em"),e(3648,"Date"),n(),e(3649," padr\xE3o do Javascript, por exemplo: "),t(3650,"code"),e(3651,"'2017-11-28T00:00:00-02:00'"),n(),e(3652," ou "),t(3653,"code"),e(3654,"new Date(2017, 10, 28)"),n(),e(3655,"."),n()(),t(3656,"li")(3657,"p"),e(3658,"Aceita o tipo "),t(3659,"em"),e(3660,"string"),n(),e(3661," nos formatos "),t(3662,"strong"),e(3663,"'HH:mm:ss'"),n(),e(3664," ou "),t(3665,"strong"),e(3666,"'HH:mm:ss.ffffff'"),n(),e(3667,", por exemplo: "),t(3668,"code"),e(3669,"'23:12:45'"),n(),e(3670,"."),n()()()()()()()(),t(3671,"h4",45)(3672,"code",5),e(3673,"PoTableDetail"),n()(),t(3674,"div",2)(3675,"p"),e(3676,"Interface para configura\xE7\xE3o do "),t(3677,"em"),e(3678,"detail"),n(),e(3679," do componente "),t(3680,"code"),e(3681,"po-table"),n(),e(3682,"."),n()(),t(3683,"h4",14),e(3684,"Propriedades"),n(),t(3685,"table",15)(3686,"tr",16)(3687,"th",17),e(3688,"Nome"),n(),t(3689,"th",17),e(3690,"Tipo"),n(),t(3691,"th",17),e(3692,"Descri\xE7\xE3o"),n()(),t(3693,"tr",18)(3694,"td",19)(3695,"div",20)(3696,"span",21),e(3697," columns"),i(3698,"br"),n()()(),t(3699,"td",22)(3700,"code",75),e(3701,"Array<PoTableDetailColumn>"),n()(),t(3702,"td",25)(3703,"p"),e(3704,"Define uma lista do tipo "),t(3705,"code"),e(3706,"PoTableDetailColumn"),n(),e(3707," para as colunas do objet "),t(3708,"em"),e(3709,"detail"),n(),e(3710,". Por exemplo:"),n(),t(3711,"pre")(3712,"code"),e(3713,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]`),n()()()(),t(3714,"tr",18)(3715,"td",19)(3716,"div",20)(3717,"span",21),e(3718," hideSelect"),i(3719,"br"),n()()(),t(3720,"td",22)(3721,"code",23),e(3722,"boolean"),n()(),t(3723,"td",25)(3724,"em")(3725,"strong"),e(3726,"(opcional)"),n()(),t(3727,"p"),e(3728,"Define se o checkbox de sele\xE7\xE3o do detail ser\xE1 exibido. Valor padr\xE3o 'false'."),n()()(),t(3729,"tr",18)(3730,"td",19)(3731,"div",20)(3732,"span",21),e(3733," typeHeader"),i(3734,"br"),n()()(),t(3735,"td",22)(3736,"code",32),e(3737,"string"),n()(),t(3738,"td",25)(3739,"em")(3740,"strong"),e(3741,"(opcional)"),n()(),t(3742,"p"),e(3743,"Define o tipo de cabe\xE7alho para o conte\xFAdo do "),t(3744,"em"),e(3745,"detail"),n(),e(3746," ."),n(),t(3747,"p"),e(3748,"Valores v\xE1lidos:"),n(),t(3749,"ul")(3750,"li")(3751,"code"),e(3752,"inline"),n(),e(3753,": Atribui o cabe\xE7alho na mesma linha do "),t(3754,"em"),e(3755,"detail"),n(),e(3756,"."),n(),t(3757,"li")(3758,"code"),e(3759,"top"),n(),e(3760,": Atribui o cabe\xE7alho acima do "),t(3761,"em"),e(3762,"detail"),n(),e(3763,", id\xEAntico ao "),t(3764,"code"),e(3765,"po-table"),n(),e(3766,"."),n(),t(3767,"li")(3768,"code"),e(3769,"none"),n(),e(3770,": Remove o cabe\xE7alho do "),t(3771,"em"),e(3772,"detail"),n(),e(3773,"."),n()()()()(),t(3774,"h4",45)(3775,"code",5),e(3776,"PoTableSubtitleColumn"),n()(),t(3777,"div",2)(3778,"p"),e(3779,"Interface para configura\xE7\xE3o das colunas de legenda do Po-Table."),n()(),t(3780,"h4",14),e(3781,"Propriedades"),n(),t(3782,"table",15)(3783,"tr",16)(3784,"th",17),e(3785,"Nome"),n(),t(3786,"th",17),e(3787,"Tipo"),n(),t(3788,"th",17),e(3789,"Descri\xE7\xE3o"),n()(),t(3790,"tr",18)(3791,"td",19)(3792,"div",20)(3793,"span",21),e(3794," color"),i(3795,"br"),n()()(),t(3796,"td",22)(3797,"code",32),e(3798,"string"),n()(),t(3799,"td",25)(3800,"em")(3801,"strong"),e(3802,"(opcional)"),n()(),t(3803,"p"),e(3804,"Define a cor do "),t(3805,"em"),e(3806,"status"),n(),e(3807,"."),n(),t(3808,"p"),e(3809,"Valores v\xE1lidos:"),n(),t(3810,"ul")(3811,"li"),i(3812,"span",51),t(3813,"code"),e(3814,"color-01"),n()(),t(3815,"li"),i(3816,"span",52),t(3817,"code"),e(3818,"color-02"),n()(),t(3819,"li"),i(3820,"span",53),t(3821,"code"),e(3822,"color-03"),n()(),t(3823,"li"),i(3824,"span",54),t(3825,"code"),e(3826,"color-04"),n()(),t(3827,"li"),i(3828,"span",55),t(3829,"code"),e(3830,"color-05"),n()(),t(3831,"li"),i(3832,"span",56),t(3833,"code"),e(3834,"color-06"),n()(),t(3835,"li"),i(3836,"span",57),t(3837,"code"),e(3838,"color-07"),n()(),t(3839,"li"),i(3840,"span",58),t(3841,"code"),e(3842,"color-08"),n()(),t(3843,"li"),i(3844,"span",59),t(3845,"code"),e(3846,"color-09"),n()(),t(3847,"li"),i(3848,"span",60),t(3849,"code"),e(3850,"color-10"),n()(),t(3851,"li"),i(3852,"span",61),t(3853,"code"),e(3854,"color-11"),n()(),t(3855,"li"),i(3856,"span",62),t(3857,"code"),e(3858,"color-12"),n()()()()(),t(3859,"tr",18)(3860,"td",19)(3861,"div",20)(3862,"span",21),e(3863," content"),i(3864,"br"),n()()(),t(3865,"td",22)(3866,"code",32),e(3867,"string"),n()(),t(3868,"td",25)(3869,"p"),e(3870,"Conte\xFAdo que ser\xE1 exibido na coluna da tabela."),n()()(),t(3871,"tr",18)(3872,"td",19)(3873,"div",20)(3874,"span",21),e(3875," label"),i(3876,"br"),n()()(),t(3877,"td",22)(3878,"code",32),e(3879,"string"),n()(),t(3880,"td",25)(3881,"p"),e(3882,"Texto que ser\xE1 exibido no rodap\xE9 da tabela como legenda."),n()()(),t(3883,"tr",18)(3884,"td",19)(3885,"div",20)(3886,"span",21),e(3887," value"),i(3888,"br"),n()()(),t(3889,"td",22)(3890,"code",32),e(3891,"string "),n(),t(3892,"code",35),e(3893," number"),n()(),t(3894,"td",25)(3895,"p"),e(3896,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),n()()()(),t(3897,"h3"),e(3898,"Enums"),n(),t(3899,"h4",4)(3900,"code",5),e(3901,"PoTableColumnSortType"),n()(),t(3902,"div",2)(3903,"p"),e(3904,"Tipos de ordena\xE7\xE3o das colunas da tabela."),n()(),t(3905,"h4",14),e(3906,"Propriedades"),n(),t(3907,"table",15)(3908,"tr",16)(3909,"th",17),e(3910,"Nome"),n(),t(3911,"th",17),e(3912,"Descri\xE7\xE3o"),n()(),t(3913,"tr",18)(3914,"td",19)(3915,"div",20)(3916,"span",21),e(3917," Ascending"),i(3918,"br"),n()()(),t(3919,"td",25)(3920,"p"),e(3921,"Ordena\xE7\xE3o ascendente"),n()()(),t(3922,"tr",18)(3923,"td",19)(3924,"div",20)(3925,"span",21),e(3926," Descending"),i(3927,"br"),n()()(),t(3928,"td",25)(3929,"p"),e(3930,"Ordena\xE7\xE3o descendente"),n()()()(),t(3931,"h4",4)(3932,"code",5),e(3933,"PoTableColumnSpacing"),n()(),t(3934,"div",2)(3935,"p"),e(3936,"Tipos de espa\xE7amento das colunas da tabela."),n()(),t(3937,"h4",14),e(3938,"Propriedades"),n(),t(3939,"table",15)(3940,"tr",16)(3941,"th",17),e(3942,"Nome"),n(),t(3943,"th",17),e(3944,"Descri\xE7\xE3o"),n()(),t(3945,"tr",18)(3946,"td",19)(3947,"div",20)(3948,"span",21),e(3949," Small"),i(3950,"br"),n()()(),t(3951,"td",25)(3952,"p"),e(3953,"Espa\xE7amento pequeno"),n()()(),t(3954,"tr",18)(3955,"td",19)(3956,"div",20)(3957,"span",21),e(3958," Medium"),i(3959,"br"),n()()(),t(3960,"td",25)(3961,"p"),e(3962,"Espa\xE7amento m\xE9dio"),n()()(),t(3963,"tr",18)(3964,"td",19)(3965,"div",20)(3966,"span",21),e(3967," Large"),i(3968,"br"),n()()(),t(3969,"td",25)(3970,"p"),e(3971,"Espa\xE7amento grande"),n()()()()())},dependencies:[P],encapsulation:2})}return r})();var mt=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||r)(w(Ae),w(ie))};static \u0275cmp=h({type:r,selectors:[["ng-component"]],standalone:!1,decls:13,vars:4,consts:[["p-title"," Table",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(l,o){l&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),i(3,"sample-po-table-doc"),n(),t(4,"po-tab",3),i(5,"sample-po-table-basic-view")(6,"sample-po-table-labs-view")(7,"sample-po-table-with-api-view")(8,"sample-po-table-transport-view")(9,"sample-po-table-airfare-view")(10,"sample-po-table-components-view")(11,"sample-po-table-heroes-view")(12,"sample-po-table-draggable-view"),n()()()),l&2&&(c("p-actions",o.actions),m(2),c("p-active",o.activeTab.includes("doc")),m(2),c("p-hide",o.hidePoWebSample)("p-active",o.activeTab.includes("web")))},dependencies:[je,y,T,Qe,Je,Ke,Ze,tt,it,at,rt,st],encapsulation:2})}return r})();var Yt=[{path:"",component:mt}],dt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=Z({type:r});static \u0275inj=Y({imports:[ce.forChild(Yt),ce]})}return r})();var oi=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=Z({type:r});static \u0275inj=Y({imports:[We,dt]})}return r})();export{oi as DocPoTableModule};
