import{$ as B,$a as L,$d as ce,Cd as me,F as u,Fa as J,G as h,Ga as e,Ia as T,Jc as V,Ka as S,La as b,Lb as Y,Ma as f,Mb as X,Na as U,Nb as K,Oa as N,Ob as Z,Od as de,Pa as w,Pb as $,Qa as G,T as s,U as A,Wb as ee,Xd as y,Yb as te,Yd as v,Zb as z,_ as C,_b as ne,a as D,b as q,bb as Q,ea as H,gd as re,ha as d,ka as _,md as le,na as t,oa as n,oc as ie,pa as o,re as P,sd as pe,se as ue,ta as F,tc as E,ua as g,uc as M,va as W,vc as oe,y as O,yd as se,zc as ae}from"./chunk-ODUOVNEW.js";var _e=()=>({label:"Angular",data:100}),Te=()=>({label:"React",data:10}),we=(a,j)=>[a,j],he=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-chart-basic"]],standalone:!1,decls:1,vars:6,consts:[[3,"p-series"]],template:function(r,i){r&1&&o(0,"po-chart",0),r&2&&d("p-series",G(3,we,N(1,_e),N(2,Te)))},dependencies:[M],encapsulation:2})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-chart-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Chart Basic"),n(),t(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-basic/sample-po-chart-basic.component.html"),n(),t(13,"pre",7),e(14,`<po-chart
  [p-series]="[
    { label: 'Angular', data: 100 },
    { label: 'React', data: 10 }
  ]"
>
</po-chart>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-basic/sample-po-chart-basic.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-chart-basic',
  templateUrl: './sample-po-chart-basic.component.html',
  standalone: false
})
export class SamplePoChartBasicComponent {}
`),n()()()()(),t(21,"div",10),o(22,"sample-po-chart-basic"),n(),o(23,"hr")),r&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),T(" ",i.sampleCodeButtonLabel,""),s(),d("ngClass",w(4,Me,i.hideSampleCodeTabs)))},dependencies:[L,P,y,v,he],encapsulation:2})}return a})();function De(a,j){if(a&1){let p=F();t(0,"po-checkbox-group",26),f("ngModelChange",function(i){u(p);let m=W();return b(m.dataLabel,i)||(m.dataLabel=i),h(i)}),g("p-change",function(i){u(p);let m=W();return h(m.changeDataLabelOptions(i))}),n()}if(a&2){let p=W();S("ngModel",p.dataLabel),d("p-options",p.dataLabelOptions)}}var ge=(()=>{class a{allCategories=[];categories;color;data;event;height;label;optionsActions;series;serieType;title;tooltip;type;options={axis:{minRange:void 0,maxRange:void 0,gridLines:void 0}};dataLabel;propertiesOptions=[{value:"legend",label:"Legend"}];typeOptions=[{label:"Donut",value:E.Donut},{label:"Pie",value:E.Pie},{label:"Area",value:E.Area},{label:"Line",value:E.Line},{label:"Column",value:E.Column},{label:"Bar",value:E.Bar}];dataLabelOptions=[{value:"fixed",label:"Fixed"}];ngOnInit(){this.restore()}addOptions(p){this.options=D(D({},this.options),p?D({},p):{})}addCategories(){this.allCategories=this.convertToArray(this.categories)}addData(){let p=isNaN(this.data)?this.convertToArray(this.data):Math.floor(this.data),r=this.serieType??this.type,i=this.color;this.series=[...this.series,q(D({label:this.label,data:p,tooltip:this.tooltip},i?{color:i}:{}),{type:r})]}changeActionOptions(){let p=this.optionsActions.legend;this.addOptions({legend:p})}isLineType(){return this.type===E.Line}changeDataLabelOptions(){let p=this.dataLabel.fixed}changeEvent(p,r){this.event=`${p}: ${JSON.stringify(r)}`}restore(){this.color=void 0,this.type=void 0,this.serieType=void 0,this.label=void 0,this.categories=void 0,this.event=void 0,this.height=void 0,this.series=[],this.title=void 0,this.tooltip=void 0,this.data=void 0,this.allCategories=[],this.optionsActions={legend:null},this.dataLabel={fixed:!1},this.options=q(D({},this.optionsActions),{axis:{minRange:void 0,maxRange:void 0,gridLines:void 0}})}convertToArray(p){try{return JSON.parse(p)}catch{return}}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-chart-labs"]],standalone:!1,decls:34,vars:25,consts:[["chartSeries","ngForm"],[3,"p-series-click","p-series-hover","p-categories","p-height","p-options","p-series","p-title","p-type"],["p-label","Events",1,"po-md-12"],[1,"po-row"],["p-label","Event",3,"p-value"],["p-label","Properties",1,"po-md-12"],["name","type","p-columns","3","p-label","Type",1,"po-md-3",3,"ngModelChange","ngModel","p-options"],["name","height","p-label","Height",1,"po-md-2",3,"ngModelChange","ngModel"],["name","title","p-label","Title",1,"po-md-4",3,"ngModelChange","ngModel"],["class","po-md-3","name","dataLabel","p-label","dataLabel","p-help","only for Line Chart",3,"ngModel","p-options","ngModelChange","p-change",4,"ngIf"],["p-label","Chart series",1,"po-md-12"],["name","label","p-label","Label","p-help","Serie label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","data","p-label","Data","p-help","Example: [25, 58, 83, 66] or 25","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","serieType","p-help","Serie Type","p-label","Type",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","tooltip","p-label","Tooltip","p-help","Custom Tooltip",1,"po-md-4",3,"ngModelChange","ngModel"],["name","color","p-label","Color","p-help","Custom Color",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Add Serie",1,"po-md-4",3,"p-click"],[1,"po-md-12"],["name","categories","p-help",'Example: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]',"p-label","Categories",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["p-label","Chart options",1,"po-md-12"],["name","minRange","p-help","Example: 0","p-label","minRange",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","maxRange","p-help","Example: 100","p-label","maxRange",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","gridLines","p-help","Example: 6","p-label","gridLines",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","innerRadius","p-help","Example: value between 0 and 100","p-label","innerRadius",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","propertiesOptions","p-help","Boolean properties","p-indeterminate","","p-label","Properties",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["name","dataLabel","p-label","dataLabel","p-help","only for Line Chart",1,"po-md-3",3,"ngModelChange","p-change","ngModel","p-options"]],template:function(r,i){if(r&1){let m=F();t(0,"po-chart",1),g("p-series-click",function(l){return u(m),h(i.changeEvent("p-series-click",l))})("p-series-hover",function(l){return u(m),h(i.changeEvent("p-series-hover",l))}),n(),o(1,"po-divider",2),t(2,"div",3),o(3,"po-info",4),n(),o(4,"po-divider",5),t(5,"form")(6,"po-select",6),f("ngModelChange",function(l){return u(m),b(i.type,l)||(i.type=l),h(l)}),n(),t(7,"po-number",7),f("ngModelChange",function(l){return u(m),b(i.height,l)||(i.height=l),h(l)}),n(),t(8,"po-input",8),f("ngModelChange",function(l){return u(m),b(i.title,l)||(i.title=l),h(l)}),n(),H(9,De,1,2,"po-checkbox-group",9),n(),t(10,"form",null,0),o(12,"po-divider",10),t(13,"div",3)(14,"po-input",11),f("ngModelChange",function(l){return u(m),b(i.label,l)||(i.label=l),h(l)}),n(),t(15,"po-input",12),f("ngModelChange",function(l){return u(m),b(i.data,l)||(i.data=l),h(l)}),n(),t(16,"po-select",13),f("ngModelChange",function(l){return u(m),b(i.serieType,l)||(i.serieType=l),h(l)}),n(),t(17,"po-input",14),f("ngModelChange",function(l){return u(m),b(i.tooltip,l)||(i.tooltip=l),h(l)}),n(),t(18,"po-input",15),f("ngModelChange",function(l){return u(m),b(i.color,l)||(i.color=l),h(l)}),n()(),t(19,"div",3)(20,"po-button",16),g("p-click",function(){u(m);let l=J(11);return i.addData(),h(l.reset())}),n()()(),t(21,"form")(22,"div",3),o(23,"po-divider",17),t(24,"po-input",18),f("ngModelChange",function(l){return u(m),b(i.categories,l)||(i.categories=l),h(l)}),g("p-blur",function(){return u(m),h(i.addCategories())}),n(),o(25,"po-divider",19),t(26,"po-number",20),f("ngModelChange",function(l){return u(m),b(i.options.axis.minRange,l)||(i.options.axis.minRange=l),h(l)}),g("p-blur",function(){return u(m),h(i.addOptions())}),n(),t(27,"po-number",21),f("ngModelChange",function(l){return u(m),b(i.options.axis.maxRange,l)||(i.options.axis.maxRange=l),h(l)}),g("p-blur",function(){return u(m),h(i.addOptions())}),n(),t(28,"po-number",22),f("ngModelChange",function(l){return u(m),b(i.options.axis.gridLines,l)||(i.options.axis.gridLines=l),h(l)}),g("p-blur",function(){return u(m),h(i.addOptions())}),n(),t(29,"po-number",23),f("ngModelChange",function(l){return u(m),b(i.options.innerRadius,l)||(i.options.innerRadius=l),h(l)}),g("p-blur",function(){return u(m),h(i.addOptions())}),n(),t(30,"po-checkbox-group",24),f("ngModelChange",function(l){return u(m),b(i.optionsActions,l)||(i.optionsActions=l),h(l)}),g("p-change",function(){return u(m),h(i.changeActionOptions())}),n()(),o(31,"po-divider",17),t(32,"div",3)(33,"po-button",25),g("p-click",function(){return u(m),h(i.restore())}),n()()()}r&2&&(d("p-categories",i.allCategories)("p-height",i.height)("p-options",i.options)("p-series",i.series)("p-title",i.title)("p-type",i.type),s(3),d("p-value",i.event),s(3),S("ngModel",i.type),d("p-options",i.typeOptions),s(),S("ngModel",i.height),s(),S("ngModel",i.title),s(),d("ngIf",i.isLineType()),s(5),S("ngModel",i.label),s(),S("ngModel",i.data),s(),S("ngModel",i.serieType),d("p-options",i.typeOptions),s(),S("ngModel",i.tooltip),s(),S("ngModel",i.color),s(6),S("ngModel",i.categories),s(2),S("ngModel",i.options.axis.minRange),s(),S("ngModel",i.options.axis.maxRange),s(),S("ngModel",i.options.axis.gridLines),s(),S("ngModel",i.options.innerRadius),s(),S("ngModel",i.optionsActions),d("p-options",i.propertiesOptions))},dependencies:[Q,$,Y,X,Z,K,ie,M,ne,ae,le,pe,se,me],encapsulation:2})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-chart-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Chart Labs"),n(),t(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-labs/sample-po-chart-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-chart
  [p-categories]="allCategories"
  [p-height]="height"
  [p-options]="options"
  [p-series]="series"
  [p-title]="title"
  [p-type]="type"
  (p-series-click)="changeEvent('p-series-click', $event)"
  (p-series-hover)="changeEvent('p-series-hover', $event)"
>
</po-chart>

<po-divider class="po-md-12" p-label="Events"></po-divider>

<div class="po-row">
  <po-info p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider class="po-md-12" p-label="Properties"></po-divider>

<form>
  <po-select class="po-md-3" name="type" [(ngModel)]="type" p-columns="3" p-label="Type" [p-options]="typeOptions">
  </po-select>

  <po-number class="po-md-2" name="height" [(ngModel)]="height" p-label="Height"> </po-number>

  <po-input class="po-md-4" name="title" [(ngModel)]="title" p-label="Title"> </po-input>

  <po-checkbox-group
    *ngIf="isLineType()"
    class="po-md-3"
    name="dataLabel"
    p-label="dataLabel"
    p-help="only for Line Chart"
    [(ngModel)]="dataLabel"
    [p-options]="dataLabelOptions"
    (p-change)="changeDataLabelOptions($event)"
  >
  </po-checkbox-group>
</form>

<form #chartSeries="ngForm">
  <po-divider class="po-md-12" p-label="Chart series"></po-divider>

  <div class="po-row">
    <po-input
      class="po-md-4"
      name="label"
      [(ngModel)]="label"
      p-label="Label"
      p-help="Serie label"
      p-required
    ></po-input>

    <po-input
      class="po-md-4"
      name="data"
      [(ngModel)]="data"
      p-label="Data"
      p-help="Example: [25, 58, 83, 66] or 25"
      p-required
    >
    </po-input>

    <po-select
      class="po-md-4"
      name="serieType"
      [(ngModel)]="serieType"
      p-help="Serie Type"
      p-label="Type"
      [p-options]="typeOptions"
    >
    </po-select>

    <po-input class="po-md-4" name="tooltip" [(ngModel)]="tooltip" p-label="Tooltip" p-help="Custom Tooltip"></po-input>
    <po-input class="po-md-4" name="color" [(ngModel)]="color" p-label="Color" p-help="Custom Color"></po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Add Serie" (p-click)="addData(); chartSeries.reset()"> </po-button>
  </div>
</form>

<form>
  <div class="po-row">
    <po-divider class="po-md-12"></po-divider>

    <po-input
      class="po-md-4"
      name="categories"
      [(ngModel)]="categories"
      p-help='Example: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]'
      p-label="Categories"
      (p-blur)="addCategories()"
    >
    </po-input>

    <po-divider class="po-md-12" p-label="Chart options"></po-divider>

    <po-number
      class="po-md-4"
      name="minRange"
      [(ngModel)]="options.axis.minRange"
      p-help="Example: 0"
      p-label="minRange"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="maxRange"
      [(ngModel)]="options.axis.maxRange"
      p-help="Example: 100"
      p-label="maxRange"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="gridLines"
      [(ngModel)]="options.axis.gridLines"
      p-help="Example: 6"
      p-label="gridLines"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="innerRadius"
      [(ngModel)]="options.innerRadius"
      p-help="Example: value between 0 and 100"
      p-label="innerRadius"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-checkbox-group
      class="po-md-4"
      name="propertiesOptions"
      p-help="Boolean properties"
      p-indeterminate
      p-label="Properties"
      [(ngModel)]="optionsActions"
      [p-options]="propertiesOptions"
      (p-change)="changeActionOptions()"
    >
    </po-checkbox-group>
  </div>

  <po-divider class="po-md-12"></po-divider>
  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-labs/sample-po-chart-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoChartSerie,
  PoChartType,
  PoSelectOption,
  PoChartOptions,
  PoCheckboxGroupOption,
  PoChartDataLabel
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-labs',
  templateUrl: './sample-po-chart-labs.component.html',
  standalone: false
})
export class SamplePoChartLabsComponent implements OnInit {
  allCategories: Array<string> = [];
  categories: string;
  color: string;
  data;
  event: string;
  height: number;
  label: string;
  optionsActions: PoChartOptions;
  series: Array<PoChartSerie>;
  serieType: PoChartType;
  title: string;
  tooltip: string;
  type: PoChartType;
  options: PoChartOptions = {
    axis: {
      minRange: undefined,
      maxRange: undefined,
      gridLines: undefined
    }
  };
  dataLabel: PoChartDataLabel;

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'legend', label: 'Legend' }];

  readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Donut', value: PoChartType.Donut },
    { label: 'Pie', value: PoChartType.Pie },
    { label: 'Area', value: PoChartType.Area },
    { label: 'Line', value: PoChartType.Line },
    { label: 'Column', value: PoChartType.Column },
    { label: 'Bar', value: PoChartType.Bar }
  ];

  readonly dataLabelOptions: Array<PoCheckboxGroupOption> = [{ value: 'fixed', label: 'Fixed' }];

  ngOnInit() {
    this.restore();
  }

  addOptions(actionOptions?: PoChartOptions) {
    this.options = { ...this.options, ...(actionOptions ? { ...actionOptions } : {}) };
  }

  addCategories() {
    this.allCategories = this.convertToArray(this.categories);
  }

  addData() {
    const data = isNaN(this.data) ? this.convertToArray(this.data) : Math.floor(this.data);
    const type = this.serieType ?? this.type;
    const color = this.color;

    this.series = [
      ...this.series,
      { label: this.label, data, tooltip: this.tooltip, ...(color ? { color } : {}), type }
    ];
  }

  changeActionOptions() {
    const legend = this.optionsActions.legend;

    this.addOptions({ legend });
  }

  isLineType(): boolean {
    return this.type === PoChartType.Line;
  }

  changeDataLabelOptions() {
    const fixed = this.dataLabel.fixed;
  }

  changeEvent(eventName: string, serieEvent: PoChartSerie): void {
    this.event = \`\${eventName}: \${JSON.stringify(serieEvent)}\`;
  }

  restore() {
    this.color = undefined;
    this.type = undefined;
    this.serieType = undefined;
    this.label = undefined;
    this.categories = undefined;
    this.event = undefined;
    this.height = undefined;
    this.series = [];
    this.title = undefined;
    this.tooltip = undefined;
    this.data = undefined;
    this.allCategories = [];
    this.optionsActions = {
      legend: null
    };
    this.dataLabel = {
      fixed: false
    };
    this.options = {
      ...this.optionsActions,
      axis: {
        minRange: undefined,
        maxRange: undefined,
        gridLines: undefined
      }
    };
  }

  private convertToArray(value: string): Array<any> {
    try {
      return JSON.parse(value);
    } catch {
      return undefined;
    }
  }
}
`),n()()()()(),t(21,"div",10),o(22,"sample-po-chart-labs"),n(),o(23,"hr")),r&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),T(" ",i.sampleCodeButtonLabel,""),s(),d("ngClass",w(4,Oe,i.hideSampleCodeTabs)))},dependencies:[L,P,y,v,ge],encapsulation:2})}return a})();var Se=(()=>{class a{poAlert;participationByCountryInWorldExportsType=E.Line;evolutionOfCoffeeAndSomeCompetitorsType=E.Column;coffeConsumingChartType=E.Donut;consumptionPerCapitaType=E.Bar;categories=["2010","2011","2012","2013","2014","2015"];chartAreaCategories=["Jan-18","Jul-18","Jan-19","Jul-19","Jan-20","Jul-20","Jan-21"];categoriesColumn=["coffee","chocolate","tea"];consumptionPerCapitaItems=["Water","Fruit Juice","Coffee","Cola drinks","Pils","Tea","Red Wine","Prosecco","Sodas","Beer 0% A.","Wheat Beer","Milk Shakes","Icetea"];chartAreaSeries=[{label:"Starbucks",data:[550,497,532,550,530,565,572],type:E.Area},{label:"Green Mntn Coffee Roaster",data:[420,511,493,525,522,510,567],type:E.Area},{label:"Dunkin Brands Group",data:[312,542,497,610,542,661,674],type:E.Area},{label:"Coffee Arabica Price",data:[550,612,525,373,342,297,282],type:E.Line,color:"po-color-07"}];coffeeConsumption=[{label:"Finland",data:9.6,tooltip:"Finland (Europe)"},{label:"Norway",data:7.2,tooltip:"Norway (Europe)"},{label:"Netherlands",data:6.7,tooltip:"Netherlands (Europe)"},{label:"Slovenia",data:6.1,tooltip:"Slovenia (Europe)"},{label:"Austria",data:5.5,tooltip:"Austria (Europe)"}];consumptionPerCapita=[{label:"2018",data:[86.5,51.3,44.6,39.5,27.6,27.3,25.4,21.5,20.8,15.9,15.4,14.4]},{label:"2020",data:[86.1,52.1,47.3,37.8,29.8,28.5,24.9,22.5,21.1,14.5,15.5,15.5]}];participationByCountryInWorldExports=[{label:"Brazil",data:[35,32,25,29,33,33],color:"color-10"},{label:"Vietnam",data:[15,17,23,19,22,18]},{label:"Colombia",data:[8,7,6,9,10,11]},{label:"India",data:[5,6,5,4,5,5]},{label:"Indonesia",data:[7,6,10,10,4,6]}];evolutionOfCoffeeAndSomeCompetitors=[{label:"2014",data:[91,40,42],type:E.Column},{label:"2017",data:[93,52,18],type:E.Column},{label:"2020",data:[95,21,-17],type:E.Column},{label:"Coffee consumption in Brazil",data:[34,27,79],type:E.Line,color:"color-10"}];coffeeProduction=[{label:"Brazil",data:2796,tooltip:"Brazil (South America)",color:"color-10"},{label:"Vietnam",data:1076,tooltip:"Vietnam (Asia)"},{label:"Colombia",data:688,tooltip:"Colombia (South America)"},{label:"Indonesia",data:682,tooltip:"Indonesia (Asia/Oceania)"},{label:"Peru",data:273,tooltip:"Peru (South America)"}];items=[{position:"1",company:"Tim Hortons",location:"Hamilton, Ontario, Canada",foundation:"1964"},{position:"2",company:"Bewley\u2019s",location:"Dublin, Ireland",foundation:"1840"},{position:"3",company:"Lavazza Coffee",location:"Italy",foundation:"1895"},{position:"4",company:"Peet\u2019s Tea and Coffee",location:"Emeryville, California, US",foundation:"1966"},{position:"5",company:"Tully\u2019s Coffee",location:"Seattle, Washington, US",foundation:"1992"},{position:"6",company:"Costa Coffee",location:"Dunstable, England",foundation:"1971"},{position:"7",company:"McCafe",location:"Oak Brook, Illinois, United States",foundation:"1993"},{position:"8",company:"Starbucks Coffee",location:"Seattle, Washington, US",foundation:"1971"},{position:"9",company:"Dunkin\u2019 Donuts",location:"Quincy, Massachusetts, US",foundation:"1950"},{position:"10",company:"Coffee Beanery",location:"Flushing, Michigan, US",foundation:"1976"}];consumptionPerCapitaOptions={axis:{maxRange:100,gridLines:2}};chartAreaOptions={axis:{maxRange:700,gridLines:8}};options={axis:{minRange:0,maxRange:40,gridLines:5}};optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7}};constructor(p){this.poAlert=p}searchMore(p){window.open(`http://google.com/search?q=coffee+producing+${p.label}`,"_blank")}showMeTheDates(p){this.poAlert.alert({title:"Statistic",message:`${p.label} consuming ${p.data}kg per capita!`,ok:()=>{}})}static \u0275fac=function(r){return new(r||a)(A(V))};static \u0275cmp=C({type:a,selectors:[["sample-po-chart-coffee-ranking"]],standalone:!1,features:[U([V])],decls:28,vars:20,consts:[[1,"po-row"],[1,"po-md-12","po-lg-6"],["p-title","Participation by country in world exports - %",1,"po-md-12","po-mt-2",3,"p-options","p-categories","p-series","p-type"],["p-title","Evolution of coffee and some competitors - %",1,"po-md-12","po-mt-2",3,"p-options","p-categories","p-series"],["p-title","Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %",1,"po-md-12","po-mt-2",3,"p-height","p-categories","p-series","p-type","p-options"],[1,"po-md-12"],["p-title","Top 5 coffee producing countries (in tons)",1,"po-lg-6","po-mt-2",3,"p-series-click","p-series"],["p-title","Top 5 Coffee Consuming Countries (in kg per capita)",1,"po-lg-6","po-mt-2",3,"p-series-click","p-series","p-type"],["p-title","While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)",1,"po-md-6","po-mt-2",3,"p-options","p-categories","p-series"],[1,"po-md-6","po-mt-2"],["p-height","198"],[1,"po-font-title","po-text-center","po-pt-5"],[1,"po-text-center"],[1,"po-lg-12","po-mt-2"],[1,"po-font-text-bold"],["p-container","shadow",3,"p-items","p-hide-table-search"]],template:function(r,i){r&1&&(t(0,"div",0)(1,"div",1)(2,"div",0),o(3,"po-chart",2)(4,"po-chart",3),n()(),t(5,"div",1),o(6,"po-chart",4),n(),t(7,"div",5)(8,"po-chart",6),g("p-series-click",function(c){return i.searchMore(c)}),n(),t(9,"po-chart",7),g("p-series-click",function(c){return i.showMeTheDates(c)}),n()(),t(10,"div",0),o(11,"po-chart",8),t(12,"div",9)(13,"po-widget",10)(14,"div",11),e(15,"66 billion"),n(),t(16,"div",12),e(17,"cups of coffee are consumed per year in U.S."),n()(),t(18,"po-widget",10)(19,"div",11),e(20,"2nd most"),n(),t(21,"div",12),e(22,"traded commodity in the world second to Oil."),n()()()()(),t(23,"div",0)(24,"po-container",13)(25,"div",14),e(26,"Top 10 Largest Coffee Chains in the World"),n(),o(27,"po-table",15),n()()),r&2&&(s(3),d("p-options",i.options)("p-categories",i.categories)("p-series",i.participationByCountryInWorldExports)("p-type",i.participationByCountryInWorldExportsType),s(),d("p-options",i.optionsColumn)("p-categories",i.categoriesColumn)("p-series",i.evolutionOfCoffeeAndSomeCompetitors),s(2),d("p-height",816)("p-categories",i.consumptionPerCapitaItems)("p-series",i.consumptionPerCapita)("p-type",i.consumptionPerCapitaType)("p-options",i.consumptionPerCapitaOptions),s(2),d("p-series",i.coffeeProduction),s(),d("p-series",i.coffeeConsumption)("p-type",i.coffeConsumingChartType),s(2),d("p-options",i.chartAreaOptions)("p-categories",i.chartAreaCategories)("p-series",i.chartAreaSeries),s(16),d("p-items",i.items)("p-hide-table-search",!1))},dependencies:[M,oe,re,ce],encapsulation:2})}return a})();var Ve=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-chart-coffee-ranking-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Chart - Coffee Ranking"),n(),t(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row">
  <div class="po-md-12 po-lg-6">
    <div class="po-row">
      <po-chart
        class="po-md-12 po-mt-2"
        p-title="Participation by country in world exports - %"
        [p-options]="options"
        [p-categories]="categories"
        [p-series]="participationByCountryInWorldExports"
        [p-type]="participationByCountryInWorldExportsType"
      >
      </po-chart>

      <po-chart
        class="po-md-12 po-mt-2"
        p-title="Evolution of coffee and some competitors - %"
        [p-options]="optionsColumn"
        [p-categories]="categoriesColumn"
        [p-series]="evolutionOfCoffeeAndSomeCompetitors"
      >
      </po-chart>
    </div>
  </div>

  <div class="po-md-12 po-lg-6">
    <po-chart
      class="po-md-12 po-mt-2"
      p-title="Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %"
      [p-height]="816"
      [p-categories]="consumptionPerCapitaItems"
      [p-series]="consumptionPerCapita"
      [p-type]="consumptionPerCapitaType"
      [p-options]="consumptionPerCapitaOptions"
    >
    </po-chart>
  </div>

  <div class="po-md-12">
    <po-chart
      class="po-lg-6 po-mt-2"
      p-title="Top 5 coffee producing countries (in tons)"
      [p-series]="coffeeProduction"
      (p-series-click)="searchMore($event)"
    >
    </po-chart>

    <po-chart
      class="po-lg-6 po-mt-2"
      p-title="Top 5 Coffee Consuming Countries (in kg per capita)"
      [p-series]="coffeeConsumption"
      [p-type]="coffeConsumingChartType"
      (p-series-click)="showMeTheDates($event)"
    >
    </po-chart>
  </div>

  <div class="po-row">
    <po-chart
      class="po-md-6 po-mt-2"
      p-title="While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)"
      [p-options]="chartAreaOptions"
      [p-categories]="chartAreaCategories"
      [p-series]="chartAreaSeries"
    >
    </po-chart>

    <div class="po-md-6 po-mt-2">
      <po-widget p-height="198">
        <div class="po-font-title po-text-center po-pt-5">66 billion</div>
        <div class="po-text-center">cups of coffee are consumed per year in U.S.</div>
      </po-widget>

      <po-widget p-height="198">
        <div class="po-font-title po-text-center po-pt-5">2nd most</div>
        <div class="po-text-center">traded commodity in the world second to Oil.</div>
      </po-widget>
    </div>
  </div>
</div>

<div class="po-row">
  <po-container class="po-lg-12 po-mt-2">
    <div class="po-font-text-bold">Top 10 Largest Coffee Chains in the World</div>

    <po-table p-container="shadow" [p-items]="items" [p-hide-table-search]="false"> </po-table>
  </po-container>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoChartType, PoChartOptions, PoChartSerie, PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-coffee-ranking',
  templateUrl: './sample-po-chart-coffee-ranking.component.html',
  providers: [PoDialogService],
  standalone: false
})
export class SamplePoChartCoffeeRankingComponent {
  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;
  evolutionOfCoffeeAndSomeCompetitorsType: PoChartType = PoChartType.Column;
  coffeConsumingChartType: PoChartType = PoChartType.Donut;
  consumptionPerCapitaType: PoChartType = PoChartType.Bar;

  categories: Array<string> = ['2010', '2011', '2012', '2013', '2014', '2015'];

  chartAreaCategories: Array<string> = ['Jan-18', 'Jul-18', 'Jan-19', 'Jul-19', 'Jan-20', 'Jul-20', 'Jan-21'];

  categoriesColumn: Array<string> = ['coffee', 'chocolate', 'tea'];

  consumptionPerCapitaItems: Array<string> = [
    'Water',
    'Fruit Juice',
    'Coffee',
    'Cola drinks',
    'Pils',
    'Tea',
    'Red Wine',
    'Prosecco',
    'Sodas',
    'Beer 0% A.',
    'Wheat Beer',
    'Milk Shakes',
    'Icetea'
  ];

  chartAreaSeries: Array<PoChartSerie> = [
    { label: 'Starbucks', data: [550, 497, 532, 550, 530, 565, 572], type: PoChartType.Area },
    { label: 'Green Mntn Coffee Roaster', data: [420, 511, 493, 525, 522, 510, 567], type: PoChartType.Area },
    { label: 'Dunkin Brands Group', data: [312, 542, 497, 610, 542, 661, 674], type: PoChartType.Area },
    {
      label: 'Coffee Arabica Price',
      data: [550, 612, 525, 373, 342, 297, 282],
      type: PoChartType.Line,
      color: 'po-color-07'
    }
  ];

  coffeeConsumption: Array<PoChartSerie> = [
    { label: 'Finland', data: 9.6, tooltip: 'Finland (Europe)' },
    { label: 'Norway', data: 7.2, tooltip: 'Norway (Europe)' },
    { label: 'Netherlands', data: 6.7, tooltip: 'Netherlands (Europe)' },
    { label: 'Slovenia', data: 6.1, tooltip: 'Slovenia (Europe)' },
    { label: 'Austria', data: 5.5, tooltip: 'Austria (Europe)' }
  ];

  consumptionPerCapita: Array<PoChartSerie> = [
    { label: '2018', data: [86.5, 51.3, 44.6, 39.5, 27.6, 27.3, 25.4, 21.5, 20.8, 15.9, 15.4, 14.4] },
    { label: '2020', data: [86.1, 52.1, 47.3, 37.8, 29.8, 28.5, 24.9, 22.5, 21.1, 14.5, 15.5, 15.5] }
  ];

  participationByCountryInWorldExports: Array<PoChartSerie> = [
    { label: 'Brazil', data: [35, 32, 25, 29, 33, 33], color: 'color-10' },
    { label: 'Vietnam', data: [15, 17, 23, 19, 22, 18] },
    { label: 'Colombia', data: [8, 7, 6, 9, 10, 11] },
    { label: 'India', data: [5, 6, 5, 4, 5, 5] },
    { label: 'Indonesia', data: [7, 6, 10, 10, 4, 6] }
  ];

  evolutionOfCoffeeAndSomeCompetitors: Array<PoChartSerie> = [
    { label: '2014', data: [91, 40, 42], type: PoChartType.Column },
    { label: '2017', data: [93, 52, 18], type: PoChartType.Column },
    { label: '2020', data: [95, 21, -17], type: PoChartType.Column },
    { label: 'Coffee consumption in Brazil', data: [34, 27, 79], type: PoChartType.Line, color: 'color-10' }
  ];

  coffeeProduction: Array<PoChartSerie> = [
    { label: 'Brazil', data: 2796, tooltip: 'Brazil (South America)', color: 'color-10' },
    { label: 'Vietnam', data: 1076, tooltip: 'Vietnam (Asia)' },
    { label: 'Colombia', data: 688, tooltip: 'Colombia (South America)' },
    { label: 'Indonesia', data: 682, tooltip: 'Indonesia (Asia/Oceania)' },
    { label: 'Peru', data: 273, tooltip: 'Peru (South America)' }
  ];

  items: Array<any> = [
    { position: '1', company: 'Tim Hortons', location: 'Hamilton, Ontario, Canada', foundation: '1964' },
    { position: '2', company: 'Bewley\u2019s', location: 'Dublin, Ireland', foundation: '1840' },
    { position: '3', company: 'Lavazza Coffee', location: 'Italy', foundation: '1895' },
    { position: '4', company: 'Peet\u2019s Tea and Coffee', location: 'Emeryville, California, US', foundation: '1966' },
    { position: '5', company: 'Tully\u2019s Coffee', location: 'Seattle, Washington, US', foundation: '1992' },
    { position: '6', company: 'Costa Coffee', location: 'Dunstable, England', foundation: '1971' },
    { position: '7', company: 'McCafe', location: 'Oak Brook, Illinois, United States', foundation: '1993' },
    { position: '8', company: 'Starbucks Coffee', location: 'Seattle, Washington, US', foundation: '1971' },
    { position: '9', company: 'Dunkin\u2019 Donuts', location: 'Quincy, Massachusetts, US', foundation: '1950' },
    { position: '10', company: 'Coffee Beanery', location: 'Flushing, Michigan, US', foundation: '1976' }
  ];

  consumptionPerCapitaOptions: PoChartOptions = {
    axis: {
      maxRange: 100,
      gridLines: 2
    }
  };

  chartAreaOptions: PoChartOptions = {
    axis: {
      maxRange: 700,
      gridLines: 8
    }
  };

  options: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 40,
      gridLines: 5
    }
  };

  optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      maxRange: 100,
      gridLines: 7
    }
  };

  constructor(private poAlert: PoDialogService) {}

  searchMore(event: any) {
    window.open(\`http://google.com/search?q=coffee+producing+\${event.label}\`, '_blank');
  }

  showMeTheDates(event: any) {
    this.poAlert.alert({
      title: 'Statistic',
      message: \`\${event.label} consuming \${event.data}kg per capita!\`,
      ok: () => {}
    });
  }
}
`),n()()()()(),t(21,"div",10),o(22,"sample-po-chart-coffee-ranking"),n(),o(23,"hr")),r&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),T(" ",i.sampleCodeButtonLabel,""),s(),d("ngClass",w(4,Ve,i.hideSampleCodeTabs)))},dependencies:[L,P,y,v,Se],encapsulation:2})}return a})();var fe=(()=>{class a{participationByCountryInWorldExportsType=E.Line;options={axis:{minRange:0,maxRange:40,gridLines:5}};dataLabel={fixed:!0};categories=["2010","2011","2012","2013","2014","2015"];participationByCountryInWorldExports=[{label:"Brazil",data:[35,32,27,29,33,33]},{label:"Vietnam",data:[15,17,18,19,22,18]},{label:"Colombia",data:[8,7,6,9,10,11]}];static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-chart-world-exports"]],standalone:!1,decls:2,vars:5,consts:[[1,"po-row"],["p-title","Participation by country in world exports - %",1,"po-md-12",3,"p-options","p-categories","p-series","p-type","p-data-label"]],template:function(r,i){r&1&&(t(0,"div",0),o(1,"po-chart",1),n()),r&2&&(s(),d("p-options",i.options)("p-categories",i.categories)("p-series",i.participationByCountryInWorldExports)("p-type",i.participationByCountryInWorldExportsType)("p-data-label",i.dataLabel))},dependencies:[M],encapsulation:2})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-chart-world-exports-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Chart - World Exports"),n(),t(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-world-exports/sample-po-chart-world-exports.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row">
  <po-chart
    class="po-md-12"
    p-title="Participation by country in world exports - %"
    [p-options]="options"
    [p-categories]="categories"
    [p-series]="participationByCountryInWorldExports"
    [p-type]="participationByCountryInWorldExportsType"
    [p-data-label]="dataLabel"
  >
  </po-chart>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-world-exports/sample-po-chart-world-exports.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-world-exports',
  templateUrl: './sample-po-chart-world-exports.component.html',
  standalone: false
})
export class SamplePoChartWorldExportsComponent {
  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;
  options: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 40,
      gridLines: 5
    }
  };
  dataLabel = { fixed: true };

  categories: Array<string> = ['2010', '2011', '2012', '2013', '2014', '2015'];

  participationByCountryInWorldExports: Array<PoChartSerie> = [
    { label: 'Brazil', data: [35, 32, 27, 29, 33, 33] },
    { label: 'Vietnam', data: [15, 17, 18, 19, 22, 18] },
    { label: 'Colombia', data: [8, 7, 6, 9, 10, 11] }
  ];
}
`),n()()()()(),t(21,"div",10),o(22,"sample-po-chart-world-exports"),n(),o(23,"hr")),r&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),T(" ",i.sampleCodeButtonLabel,""),s(),d("ngClass",w(4,qe,i.hideSampleCodeTabs)))},dependencies:[L,P,y,v,fe],encapsulation:2})}return a})();var ye=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=C({type:a,selectors:[["sample-po-chart-doc"]],standalone:!1,decls:1031,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","guia-de-uso-para-gr\xE1ficos"],["href","/guides/guide-charts"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoChartDataLabel"],["id","exemplo-de-utiliza\xE7\xE3o"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoChartOptions"],["pan","",1,"docs-api-property-type","PoChartSerie[]"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoChartType"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoChartAxisOptions"],["pan","",1,"docs-api-property-type","boolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","Array<number>"]],template:function(r,i){r&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoChartModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente "),t(7,"code"),e(8,"po-chart"),n(),e(9,"."),n()(),t(10,"h3",3),e(11,"Componente"),n(),t(12,"h4",4)(13,"code",5),e(14,"PoChartComponent"),n()(),t(15,"div",2)(16,"p"),e(17,"O "),t(18,"code"),e(19,"po-chart"),n(),e(20,` \xE9 um componente para renderiza\xE7\xE3o de dados atrav\xE9s de gr\xE1ficos, com isso facilitando a compreens\xE3o e tornando a
visualiza\xE7\xE3o destes dados mais agrad\xE1vel.`),n(),t(21,"p"),e(22,"Atrav\xE9s de suas principais propriedades \xE9 poss\xEDvel definir atributos, tais como tipo de gr\xE1fico, altura, t\xEDtulo, cores customizadas, op\xE7\xF5es para os eixos, entre outros."),n(),t(23,"p"),e(24,"O componente permite utilizar em conjunto s\xE9ries do tipo linha e coluna."),n(),t(25,"p"),e(26,`Al\xE9m disso, tamb\xE9m \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada ao clicar em determinado elemento do gr\xE1fico
e outra que ser\xE1 executada ao passar o `),t(27,"em"),e(28,"mouse"),n(),e(29," sobre o elemento."),n(),t(30,"h4",6),e(31,"Guia de uso para Gr\xE1ficos"),n(),t(32,"blockquote")(33,"p"),e(34,"Veja nosso "),t(35,"a",7),e(36,"guia de uso para gr\xE1ficos"),n(),e(37,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores. `),n()()(),t(38,"div",8)(39,"h4",9),e(40,"Seletor"),n(),t(41,"pre",10),e(42,`<po-chart
    p-categories="string[]"
    p-data-label="PoChartDataLabel"
    p-height="number"
    p-options="PoChartOptions"
    p-series="PoChartSerie[]"
    (p-series-click)="EventEmitter"
    (p-series-hover)="EventEmitter"
    p-title="string"
    p-type="PoChartType" >
</po-chart>
`),n()(),t(43,"h4",11),e(44,"Propriedades"),n(),t(45,"table",12)(46,"tr",13)(47,"th",14),e(48,"Nome"),n(),t(49,"th",14),e(50,"Tipo"),n(),t(51,"th",14),e(52,"Padr\xE3o"),n(),t(53,"th",14),e(54,"Descri\xE7\xE3o"),n()(),t(55,"tr",15)(56,"td",16)(57,"div",17)(58,"span",18),e(59," p-categories"),o(60,"br"),n()()(),t(61,"td",19)(62,"code",20),e(63,"string[]"),n()(),t(64,"td",21),e(65,"-"),n(),t(66,"td",22)(67,"em")(68,"strong"),e(69,"(opcional)"),n()(),t(70,"p"),e(71,"Define os nomes das categorias que ser\xE3o plotadas no eixo X do gr\xE1fico caso seja do tipo "),t(72,"code"),e(73,"bar"),n(),e(74,", ou ent\xE3o nos eixos Y do grid de gr\xE1ficos dos tipos "),t(75,"code"),e(76,"area"),n(),e(77,", "),t(78,"code"),e(79,"columnn"),n(),e(80," e "),t(81,"code"),e(82,"line"),n(),e(83,"."),n(),t(84,"blockquote")(85,"p"),e(86,"Gr\xE1ficos do tipo "),t(87,"code"),e(88,"bar"),n(),e(89," dimensionam a \xE1rea do gr\xE1fico de acordo com a largura do maior texto de categorias. No entanto, \xE9 uma boa pr\xE1tica optar por palavras curtas para que a leitura do gr\xE1fico n\xE3o seja prejudicada."),n()(),t(90,"blockquote")(91,"p"),e(92,"Caso n\xE3o seja especificado um valor para a categoria, ser\xE1 plotado um h\xEDfen na categoria referente a cada s\xE9rie."),n()()()(),t(93,"tr",15)(94,"td",16)(95,"div",17)(96,"span",18),e(97," p-data-label"),o(98,"br"),n()()(),t(99,"td",19)(100,"code",23),e(101,"PoChartDataLabel"),n()(),t(102,"td",21),e(103,"-"),n(),t(104,"td",22)(105,"em")(106,"strong"),e(107,"(opcional)"),n()(),t(108,"p"),e(109,"Permite configurar as propriedades de exibi\xE7\xE3o dos r\xF3tulos das s\xE9ries no gr\xE1fico."),n(),t(110,"p"),e(111,"Essa configura\xE7\xE3o possibilita fixar os valores das s\xE9ries diretamente no gr\xE1fico, alterando o comportamento visual:"),n(),t(112,"ul")(113,"li"),e(114,"Os valores das s\xE9ries permanecem vis\xEDveis, sem a necessidade de hover."),n(),t(115,"li"),e(116,"O "),t(117,"em"),e(118,"tooltip"),n(),e(119," n\xE3o ser\xE1 exibido."),n(),t(120,"li"),e(121,"Os marcadores ("),t(122,"em"),e(123,"bullets"),n(),e(124,") ter\xE3o seu estilo ajustado."),n(),t(125,"li"),e(126,"As outras s\xE9ries ficar\xE3o com opacidade reduzida ao passar o mouse sobre a s\xE9rie ativa."),n()(),t(127,"blockquote")(128,"p"),e(129,"Dispon\xEDvel apenas para gr\xE1ficos do tipo "),t(130,"code"),e(131,"line"),n(),e(132,"."),n()(),t(133,"h4",24),e(134,"Exemplo de utiliza\xE7\xE3o:"),n(),t(135,"pre")(136,"code",25),e(137,`dataLabel: PoChartDataLabel = {
  fixed: true,
};`),n()()()(),t(138,"tr",15)(139,"td",16)(140,"div",17)(141,"span",18),e(142," p-height"),o(143,"br"),n()()(),t(144,"td",19)(145,"code",26),e(146,"number"),n()(),t(147,"td",21)(148,"p")(149,"code"),e(150,"400px"),n()()(),t(151,"td",22)(152,"em")(153,"strong"),e(154,"(opcional)"),n()(),t(155,"p"),e(156,"Define a altura do gr\xE1fico."),n(),t(157,"blockquote")(158,"p"),e(159,"O valor m\xEDnimo aceito nesta propriedade \xE9 200."),n()()()(),t(160,"tr",15)(161,"td",16)(162,"div",17)(163,"span",18),e(164," p-options"),o(165,"br"),n()()(),t(166,"td",19)(167,"code",27),e(168,"PoChartOptions"),n()(),t(169,"td",21),e(170,"-"),n(),t(171,"td",22)(172,"em")(173,"strong"),e(174,"(opcional)"),n()(),t(175,"p"),e(176,"Objeto com as configura\xE7\xF5es usadas no "),t(177,"code"),e(178,"po-chart"),n(),e(179,"."),n(),t(180,"p"),e(181,`\xC9 poss\xEDvel, por exemplo, definir as configura\xE7\xF5es de exibi\xE7\xE3o das legendas,
configurar os eixos(`),t(182,"em"),e(183,"axis"),n(),e(184,") para os gr\xE1ficos dos tipos "),t(185,"code"),e(186,"area"),n(),e(187,", "),t(188,"code"),e(189,"line"),n(),e(190,", "),t(191,"code"),e(192,"column"),n(),e(193," e "),t(194,"code"),e(195,"bar"),n(),e(196," da seguinte forma:"),n(),t(197,"pre")(198,"code"),e(199,`chartOptions: PoChartOptions = {
  legend: true,
  axis: {
    minRange: 0,
    maxRange: 100,
    gridLines: 5,
  },
};`),n()()()(),t(200,"tr",15)(201,"td",16)(202,"div",17)(203,"span",18),e(204," p-series"),o(205,"br"),n()()(),t(206,"td",19)(207,"code",28),e(208,"PoChartSerie[]"),n()(),t(209,"td",21),e(210,"-"),n(),t(211,"td",22)(212,"p"),e(213,"Define os elementos do gr\xE1fico que ser\xE3o criados dinamicamente."),n()()(),t(214,"tr",15)(215,"td",16)(216,"div",29)(217,"span",30),e(218," (p-series-click)"),o(219,"br"),n()()(),t(220,"td",19)(221,"code",31),e(222,"EventEmitter"),n()(),t(223,"td",21),e(224,"-"),n(),t(225,"td",22)(226,"em")(227,"strong"),e(228,"(opcional)"),n()(),t(229,"p"),e(230,"Evento executado quando o usu\xE1rio clicar sobre um elemento do gr\xE1fico."),n(),t(231,"p"),e(232,"O evento emitir\xE1 o seguinte par\xE2metro:"),n(),t(233,"ul")(234,"li")(235,"em"),e(236,"donut"),n(),e(237," e "),t(238,"em"),e(239,"pie"),n(),e(240,": um objeto contendo a categoria e valor da s\xE9rie."),n(),t(241,"li")(242,"em"),e(243,"area"),n(),e(244,", "),t(245,"em"),e(246,"line"),n(),e(247,", "),t(248,"em"),e(249,"column"),n(),e(250," e "),t(251,"em"),e(252,"bar"),n(),e(253,": um objeto contendo o nome da s\xE9rie, valor e categoria do eixo do gr\xE1fico."),n()()()(),t(254,"tr",15)(255,"td",16)(256,"div",29)(257,"span",30),e(258," (p-series-hover)"),o(259,"br"),n()()(),t(260,"td",19)(261,"code",31),e(262,"EventEmitter"),n()(),t(263,"td",21),e(264,"-"),n(),t(265,"td",22)(266,"em")(267,"strong"),e(268,"(opcional)"),n()(),t(269,"p"),e(270,"Evento executado quando o usu\xE1rio passar o "),t(271,"em"),e(272,"mouse"),n(),e(273," sobre um elemento do gr\xE1fico."),n(),t(274,"p"),e(275,"O evento emitir\xE1 o seguinte par\xE2metro de acordo com o tipo de gr\xE1fico:"),n(),t(276,"ul")(277,"li")(278,"em"),e(279,"donut"),n(),e(280," e "),t(281,"em"),e(282,"pie"),n(),e(283,": um objeto contendo a categoria e valor da s\xE9rie."),n(),t(284,"li")(285,"em"),e(286,"area"),n(),e(287,", "),t(288,"em"),e(289,"line"),n(),e(290,", "),t(291,"em"),e(292,"column"),n(),e(293," e "),t(294,"em"),e(295,"bar"),n(),e(296,": um objeto contendo a categoria, valor da s\xE9rie e categoria do eixo do gr\xE1fico."),n()()()(),t(297,"tr",15)(298,"td",16)(299,"div",17)(300,"span",18),e(301," p-title"),o(302,"br"),n()()(),t(303,"td",19)(304,"code",32),e(305,"string"),n()(),t(306,"td",21),e(307,"-"),n(),t(308,"td",22)(309,"em")(310,"strong"),e(311,"(opcional)"),n()(),t(312,"p"),e(313,"Define o t\xEDtulo do gr\xE1fico."),n()()(),t(314,"tr",15)(315,"td",16)(316,"div",17)(317,"span",18),e(318," p-type"),o(319,"br"),n()()(),t(320,"td",19)(321,"code",33),e(322,"PoChartType"),n()(),t(323,"td",21),e(324,"-"),n(),t(325,"td",22)(326,"em")(327,"strong"),e(328,"(opcional)"),n()(),t(329,"p"),e(330,"Define o tipo de gr\xE1fico."),n(),t(331,"p"),e(332,"\xC9 poss\xEDvel tamb\xE9m combinar gr\xE1ficos dos tipos linha e coluna. Para isso, opte pela declara\xE7\xE3o de "),t(333,"code"),e(334,"type"),n(),e(335," conforme a interface "),t(336,"code"),e(337,"PoChartSerie"),n(),e(338,"."),n(),t(339,"blockquote")(340,"p"),e(341,"Note que, se houver declara\xE7\xE3o de tipo de gr\xE1fico tanto em "),t(342,"code"),e(343,"p-type"),n(),e(344," quanto em "),t(345,"code"),e(346,"PochartSerie.type"),n(),e(347,", o valor "),t(348,"code"),e(349,"{ type }"),n(),e(350," da primeira s\xE9rie anular\xE1 o valor definido em "),t(351,"code"),e(352,"p-type"),n(),e(353,"."),n()(),t(354,"p"),e(355,"Se n\xE3o passado valor, o padr\xE3o ser\xE1 relativo \xE0 primeira s\xE9rie passada em "),t(356,"code"),e(357,"p-series"),n(),e(358,":"),n(),t(359,"ul")(360,"li"),e(361,"Se "),t(362,"code"),e(363,"p-series = [{ data: [1,2,3] }]"),n(),e(364,": ser\xE1 "),t(365,"code"),e(366,"PoChartType.Column"),n(),e(367,"."),n(),t(368,"li"),e(369,"Se "),t(370,"code"),e(371,"p-series = [{ data: 1 }]"),n(),e(372,": ser\xE1 "),t(373,"code"),e(374,"PoChartType.Pie"),n(),e(375,"."),n()(),t(376,"blockquote")(377,"p"),e(378,"Veja os valores v\xE1lidos no "),t(379,"em"),e(380,"enum"),n(),t(381,"code"),e(382,"PoChartType"),n(),e(383,"."),n()()()()(),t(384,"h3"),e(385,"Interfaces"),n(),t(386,"h4",34)(387,"code",5),e(388,"PoChartAxisOptions"),n()(),t(389,"div",2)(390,"p")(391,"em"),e(392,"Interface"),n(),e(393," que define os eixos do grid."),n()(),t(394,"h4",11),e(395,"Propriedades"),n(),t(396,"table",12)(397,"tr",13)(398,"th",14),e(399,"Nome"),n(),t(400,"th",14),e(401,"Tipo"),n(),t(402,"th",14),e(403,"Descri\xE7\xE3o"),n()(),t(404,"tr",15)(405,"td",16)(406,"div",17)(407,"span",18),e(408," gridLines"),o(409,"br"),n()()(),t(410,"td",19)(411,"code",26),e(412,"number"),n()(),t(413,"td",22)(414,"em")(415,"strong"),e(416,"(opcional)"),n()(),t(417,"p"),e(418,`Define a quantidade de linhas exibidas no grid.
Para os gr\xE1ficos dos tipos `),t(419,"code"),e(420,"Area"),n(),e(421,", "),t(422,"code"),e(423,"Line"),n(),e(424," e "),t(425,"code"),e(426,"Column"),n(),e(427,`, as linhas modificadas ser\xE3o as horizontais (eixo X).
J\xE1 para gr\xE1ficos do tipo `),t(428,"code"),e(429,"Bar"),n(),e(430,", tratar\xE1 as linhas verticais (eixo Y)."),n(),t(431,"p"),e(432,"A propriedade cont\xE9m as seguintes diretrizes para seu correto funcionamento:"),n(),t(433,"ul")(434,"li"),e(435,"Quantidade padr\xE3o de linhas: '5';"),n(),t(436,"li"),e(437,"Quantidade m\xEDnima permitida: '2';"),n(),t(438,"li"),e(439,"Quantidade m\xE1xima permitida: '10';"),n()()()(),t(440,"tr",15)(441,"td",16)(442,"div",17)(443,"span",18),e(444," maxRange"),o(445,"br"),n()()(),t(446,"td",19)(447,"code",26),e(448,"number"),n()(),t(449,"td",22)(450,"em")(451,"strong"),e(452,"(opcional)"),n()(),t(453,"p"),e(454,`Define o alcance de valor m\xE1ximo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor de alcance m\xE1ximo exibido ser\xE1 o maior existente entre as s\xE9ries.
Se por acaso o valor m\xE1ximo das s\xE9ries for superior ao definido aqui, esta propriedade ser\xE1 ignorada.`),n(),t(455,"blockquote")(456,"p"),e(457,"Esta defini\xE7\xE3o n\xE3o deve refletir na plotagem das s\xE9ries. Os valores m\xE1ximos e m\xEDnimos encontrados nas s\xE9ries ser\xE3o as bases para seus alcance."),n()()()(),t(458,"tr",15)(459,"td",16)(460,"div",17)(461,"span",18),e(462," minRange"),o(463,"br"),n()()(),t(464,"td",19)(465,"code",26),e(466,"number"),n()(),t(467,"td",22)(468,"em")(469,"strong"),e(470,"(opcional)"),n()(),t(471,"p"),e(472,`Define o alcance m\xEDnimo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor-base de alcance m\xEDnimo ser\xE1 o menor encontrado entre as s\xE9ries.
Se houver valores negativos nas s\xE9ries, o menor deles ser\xE1 a base m\xEDnima.
Se por acaso o valor m\xEDnimo das s\xE9ries for inferior ao definido aqui, esta propriedade ser\xE1 ignorada.`),n(),t(473,"blockquote")(474,"p"),e(475,"Esta defini\xE7\xE3o n\xE3o deve refletir na plotagem das s\xE9ries. Os valores m\xE1ximos e m\xEDnimos encontrados nas s\xE9ries ser\xE3o as bases para seus alcance."),n()()()()(),t(476,"h4",34)(477,"code",5),e(478,"PoChartOptions"),n()(),t(479,"div",2)(480,"p")(481,"em"),e(482,"Interface"),n(),e(483," para configura\xE7\xF5es dos elementos do gr\xE1fico."),n()(),t(484,"h4",11),e(485,"Propriedades"),n(),t(486,"table",12)(487,"tr",13)(488,"th",14),e(489,"Nome"),n(),t(490,"th",14),e(491,"Tipo"),n(),t(492,"th",14),e(493,"Descri\xE7\xE3o"),n()(),t(494,"tr",15)(495,"td",16)(496,"div",17)(497,"span",18),e(498," axis"),o(499,"br"),n()()(),t(500,"td",19)(501,"code",35),e(502,"PoChartAxisOptions"),n()(),t(503,"td",22)(504,"em")(505,"strong"),e(506,"(opcional)"),n()(),t(507,"p"),e(508,"Define um objeto do tipo "),t(509,"code"),e(510,"PoChartAxisOptions"),n(),e(511," para configura\xE7\xE3o dos eixos."),n()()(),t(512,"tr",15)(513,"td",16)(514,"div",17)(515,"span",18),e(516," innerRadius"),o(517,"br"),n()()(),t(518,"td",19)(519,"code",26),e(520,"number"),n()(),t(521,"td",22)(522,"em")(523,"strong"),e(524,"(opcional)"),n()(),t(525,"p"),e(526,"Define o di\xE2metro, em valor percentual entre "),t(527,"code"),e(528,"0"),n(),e(529," e "),t(530,"code"),e(531,"100"),n(),e(532,", da \xE1rea central para gr\xE1ficos do tipo "),t(533,"code"),e(534,"donut"),n(),e(535,`.
Se passado um percentual que torne a espessura do gr\xE1fico menor do que `),t(536,"code"),e(537,"40px"),n(),e(538,`,
os textos internos do gr\xE1ficos ser\xE3o ocultados para que n\xE3o haja quebra de layout.`),n()()(),t(539,"tr",15)(540,"td",16)(541,"div",17)(542,"span",18),e(543," legend"),o(544,"br"),n()()(),t(545,"td",19)(546,"code",36),e(547,"boolean"),n()(),t(548,"td",22)(549,"em")(550,"strong"),e(551,"(opcional)"),n()(),t(552,"p"),e(553,"Define a exibi\xE7\xE3o da legenda do gr\xE1fico. Valor padr\xE3o \xE9 "),t(554,"code"),e(555,"true"),n()()()()(),t(556,"h4",34)(557,"code",5),e(558,"PoChartDataLabel"),n()(),t(559,"div",2)(560,"p"),e(561,"Interface que define as propriedades de exibi\xE7\xE3o dos r\xF3tulos das s\xE9ries no "),t(562,"code"),e(563,"po-chart"),n(),e(564,"."),n(),t(565,"blockquote")(566,"p"),e(567,"Aplic\xE1vel apenas para gr\xE1ficos do tipo "),t(568,"code"),e(569,"line"),n(),e(570,"."),n()()(),t(571,"h4",11),e(572,"Propriedades"),n(),t(573,"table",12)(574,"tr",13)(575,"th",14),e(576,"Nome"),n(),t(577,"th",14),e(578,"Tipo"),n(),t(579,"th",14),e(580,"Descri\xE7\xE3o"),n()(),t(581,"tr",15)(582,"td",16)(583,"div",17)(584,"span",18),e(585," fixed"),o(586,"br"),n()()(),t(587,"td",19)(588,"code",36),e(589,"boolean"),n()(),t(590,"td",22)(591,"em")(592,"strong"),e(593,"(opcional)"),n()(),t(594,"p"),e(595,"Indica se o texto associado aos pontos da s\xE9rie deve permanecer fixo na exibi\xE7\xE3o do gr\xE1fico."),n(),t(596,"ul")(597,"li"),e(598,"Quando definido como "),t(599,"code"),e(600,"true"),n(),e(601,":"),t(602,"ul")(603,"li"),e(604,"O "),t(605,"em"),e(606,"tooltip"),n(),e(607," n\xE3o ser\xE1 exibido."),n(),t(608,"li"),e(609,"As outras s\xE9ries ficar\xE3o com opacidade reduzida ao passar o mouse sobre a s\xE9rie ativa."),n()()()(),t(610,"blockquote")(611,"p"),e(612,"Dispon\xEDvel apenas para o tipo de gr\xE1fico "),t(613,"code"),e(614,"PoChartType.Line"),n(),e(615,"."),n()()()()(),t(616,"h4",34)(617,"code",5),e(618,"PoChartSerie"),n()(),t(619,"div",2)(620,"p"),e(621,"Interface das series din\xE2micas do "),t(622,"code"),e(623,"po-chart"),n(),e(624," que possibilita desenhar gr\xE1ficos dos tipos "),t(625,"code"),e(626,"area"),n(),e(627,", "),t(628,"code"),e(629,"bar"),n(),e(630,", "),t(631,"code"),e(632,"column"),n(),e(633,", "),t(634,"code"),e(635,"line"),n(),e(636,", "),t(637,"code"),e(638,"donut"),n(),e(639," e "),t(640,"code"),e(641,"pie"),n()()(),t(642,"h4",11),e(643,"Propriedades"),n(),t(644,"table",12)(645,"tr",13)(646,"th",14),e(647,"Nome"),n(),t(648,"th",14),e(649,"Tipo"),n(),t(650,"th",14),e(651,"Descri\xE7\xE3o"),n()(),t(652,"tr",15)(653,"td",16)(654,"div",17)(655,"span",18),e(656," color"),o(657,"br"),n()()(),t(658,"td",19)(659,"code",32),e(660,"string"),n()(),t(661,"td",22)(662,"em")(663,"strong"),e(664,"(opcional)"),n()(),t(665,"p"),e(666,"Determina a cor da s\xE9rie. As maneiras de customizar o "),t(667,"em"),e(668,"preset"),n(),e(669," padr\xE3o de cores s\xE3o:"),n(),t(670,"ul")(671,"li"),e(672,"Hexadeximal, por exemplo "),t(673,"code"),e(674,"#c64840"),n(),e(675,";"),n(),t(676,"li"),e(677,"RGB, como "),t(678,"code"),e(679,"rgb(0, 0, 165)"),n()(),t(680,"li"),e(681,"O nome da cor, por exemplo "),t(682,"code"),e(683,"blue"),n(),e(684,";"),n(),t(685,"li"),e(686,"Usando uma das cores do tema do PO: Valores v\xE1lidos:"),t(687,"ul")(688,"li"),o(689,"span",37),t(690,"code"),e(691,"color-01"),n()(),t(692,"li"),o(693,"span",38),t(694,"code"),e(695,"color-02"),n()(),t(696,"li"),o(697,"span",39),t(698,"code"),e(699,"color-03"),n()(),t(700,"li"),o(701,"span",40),t(702,"code"),e(703,"color-04"),n()(),t(704,"li"),o(705,"span",41),t(706,"code"),e(707,"color-05"),n()(),t(708,"li"),o(709,"span",42),t(710,"code"),e(711,"color-06"),n()(),t(712,"li"),o(713,"span",43),t(714,"code"),e(715,"color-07"),n()(),t(716,"li"),o(717,"span",44),t(718,"code"),e(719,"color-08"),n()(),t(720,"li"),o(721,"span",45),t(722,"code"),e(723,"color-09"),n()(),t(724,"li"),o(725,"span",46),t(726,"code"),e(727,"color-10"),n()(),t(728,"li"),o(729,"span",47),t(730,"code"),e(731,"color-11"),n()(),t(732,"li"),o(733,"span",48),t(734,"code"),e(735,"color-12"),n()()()()(),t(736,"ul")(737,"li"),e(738,"A partir da 13\xB0 s\xE9rie o valor da cor ser\xE1 preta caso n\xE3o seja enviada uma cor customizada."),n()()()(),t(739,"tr",15)(740,"td",16)(741,"div",17)(742,"span",18),e(743," data"),o(744,"br"),n()()(),t(745,"td",19)(746,"code",26),e(747,"number "),n(),t(748,"code",49),e(749," Array<number>"),n()(),t(750,"td",22)(751,"em")(752,"strong"),e(753,"(opcional)"),n()(),t(754,"p"),e(755,"Define a lista de valores para a s\xE9rie. Os tipos esperados s\xE3o de acordo com o tipo de gr\xE1fico:"),n(),t(756,"ul")(757,"li"),e(758,"Para gr\xE1ficos dos tipos "),t(759,"code"),e(760,"donut"),n(),e(761," e "),t(762,"code"),e(763,"pie"),n(),e(764,", espera-se "),t(765,"em"),e(766,"number"),n(),e(767,";"),n(),t(768,"li"),e(769,"Para gr\xE1ficos dos tipos "),t(770,"code"),e(771,"area"),n(),e(772,", "),t(773,"code"),e(774,"bar"),n(),e(775,", "),t(776,"code"),e(777,"column"),n(),e(778," e "),t(779,"code"),e(780,"line"),n(),e(781,", espera-se um "),t(782,"em"),e(783,"array"),n(),e(784," de "),t(785,"code"),e(786,"data"),n(),e(787,"."),n()(),t(788,"blockquote")(789,"p"),e(790,"Se passado valor "),t(791,"code"),e(792,"null"),n(),e(793," em determinado item da lista, a itera\xE7\xE3o ir\xE1 ignor\xE1-lo."),n()()()(),t(794,"tr",15)(795,"td",16)(796,"div",17)(797,"span",18),e(798," label"),o(799,"br"),n()()(),t(800,"td",19)(801,"code",32),e(802,"string"),n()(),t(803,"td",22)(804,"em")(805,"strong"),e(806,"(opcional)"),n()(),t(807,"p"),e(808,"R\xF3tulo refer\xEAncia da s\xE9rie;."),n()()(),t(809,"tr",15)(810,"td",16)(811,"div",17)(812,"span",18),e(813," tooltip"),o(814,"br"),n()()(),t(815,"td",19)(816,"code",32),e(817,"string"),n()(),t(818,"td",22)(819,"em")(820,"strong"),e(821,"(opcional)"),n()(),t(822,"p"),e(823,"Define o texto que ser\xE1 exibido ao passar o mouse por cima das s\xE9ries do "),t(824,"em"),e(825,"chart"),n(),e(826,"."),n(),t(827,"blockquote")(828,"p"),e(829,"Caso n\xE3o seja informado um valor para o "),t(830,"em"),e(831,"tooltip"),n(),e(832,", ser\xE1 exibido da seguinte forma:"),n()(),t(833,"ul")(834,"li")(835,"code"),e(836,"donut"),n(),e(837,": "),t(838,"code"),e(839,"label"),n(),e(840,": valor proporcional ao total em porcentagem."),n(),t(841,"li")(842,"code"),e(843,"area"),n(),e(844,", "),t(845,"code"),e(846,"bar"),n(),e(847,", "),t(848,"code"),e(849,"column"),n(),e(850,", "),t(851,"code"),e(852,"line"),n(),e(853," e "),t(854,"code"),e(855,"pie"),n(),e(856,": "),t(857,"code"),e(858,"label"),n(),e(859,": "),t(860,"code"),e(861,"data"),n(),e(862,"."),n()()()(),t(863,"tr",15)(864,"td",16)(865,"div",17)(866,"span",18),e(867," type"),o(868,"br"),n()()(),t(869,"td",19)(870,"code",33),e(871,"PoChartType"),n()(),t(872,"td",22)(873,"em")(874,"strong"),e(875,"(opcional)"),n()(),t(876,"p"),e(877,"Define em qual tipo de gr\xE1fico que ser\xE1 exibida a s\xE9rie. \xC9 poss\xEDvel combinar s\xE9ries dos tipos "),t(878,"code"),e(879,"column"),n(),e(880," e "),t(881,"code"),e(882,"line"),n(),e(883," no mesmo gr\xE1fico. Para isso, basta criar as s\xE9ries com as configura\xE7\xF5es:"),n(),t(884,"ul")(885,"li"),e(886,"Serie A: "),t(887,"code"),e(888,"{ type: ChartType.Column, data: ... }"),n(),e(889,";"),n(),t(890,"li"),e(891,"S\xE9rie B: "),t(892,"code"),e(893,"{ type: ChartType.Line, data: ... }"),n(),e(894,"."),n()(),t(895,"p"),e(896,"Se tanto "),t(897,"code"),e(898,"p-type"),n(),e(899," quanto "),t(900,"code"),e(901,"{ type }"),n(),e(902," forem ignorados, o padr\xE3o gerado pelo componente ser\xE1:"),n(),t(903,"ul")(904,"li")(905,"code"),e(906,"column"),n(),e(907,": se "),t(908,"code"),e(909,"data"),n(),e(910," receber "),t(911,"code"),e(912,"Array<number>"),n(),e(913,";"),n(),t(914,"li")(915,"code"),e(916,"pie"),n(),e(917,": se "),t(918,"code"),e(919,"data"),n(),e(920," for "),t(921,"em"),e(922,"number"),n(),e(923,"."),n()(),t(924,"blockquote")(925,"p"),e(926,"Se utilizada a propriedade "),t(927,"code"),e(928,"p-type"),n(),e(929,", dispensa-se a defini\xE7\xE3o desta propriedade. Por\xE9m, se houver declara\xE7\xE3o para ambas, o valor "),t(930,"code"),e(931,"{type}"),n(),e(932," da primeira s\xE9rie sobrescrever\xE1 o valor definido em "),t(933,"code"),e(934,"p-type"),n(),e(935,"."),n()(),t(936,"blockquote")(937,"p"),e(938,"O componente s\xF3 exibir\xE1 as s\xE9ries que tiverem o mesmo "),t(939,"code"),e(940,"type"),n(),e(941," definido, exceto para mesclagem para tipos "),t(942,"code"),e(943,"column"),n(),e(944," e "),t(945,"code"),e(946,"line"),n(),e(947,"."),n()()()()(),t(948,"h3"),e(949,"Enums"),n(),t(950,"h4",4)(951,"code",5),e(952,"PoChartType"),n()(),t(953,"div",2)(954,"p")(955,"em"),e(956,"Enum"),n(),t(957,"code"),e(958,"PoChartType"),n(),e(959," para especifica\xE7\xE3o dos tipos de gr\xE1ficos."),n()(),t(960,"h4",11),e(961,"Propriedades"),n(),t(962,"table",12)(963,"tr",13)(964,"th",14),e(965,"Nome"),n(),t(966,"th",14),e(967,"Descri\xE7\xE3o"),n()(),t(968,"tr",15)(969,"td",16)(970,"div",17)(971,"span",18),e(972," Area"),o(973,"br"),n()()(),t(974,"td",22)(975,"p"),e(976,`Tipo de gr\xE1fico que exibe os dados de modo quantitativo, utilizando linhas cont\xEDnuas demarcadas por pontos para cada valor de s\xE9rie definido.
Similar ao gr\xE1fico de linha, diferencia-se pela \xE1rea localizada abaixo da linha das s\xE9ries, que \xE9 preenchida com cores para um destaque expl\xEDcita da evolu\xE7\xE3o e mudan\xE7a dos dados.`),n()()(),t(977,"tr",15)(978,"td",16)(979,"div",17)(980,"span",18),e(981," Donut"),o(982,"br"),n()()(),t(983,"td",22)(984,"p"),e(985,"Exibe os dados em formato de rosca, dividindo em partes proporcionais."),n()()(),t(986,"tr",15)(987,"td",16)(988,"div",17)(989,"span",18),e(990," Pie"),o(991,"br"),n()()(),t(992,"td",22)(993,"p"),e(994,"Exibe os dados em formato circular, dividindo proporcionalmente em fatias."),n()()(),t(995,"tr",15)(996,"td",16)(997,"div",17)(998,"span",18),e(999," Line"),o(1e3,"br"),n()()(),t(1001,"td",22)(1002,"p"),e(1003,`Gr\xE1fico que mostra os dados de modo linear e cont\xEDnuo. \xC9 \xFAtil, por exemplo, para fazer compara\xE7\xF5es de tend\xEAncia durante determinado per\xEDodo.
Pode ser utilizado em conjunto com gr\xE1ficos dos tipos `),t(1004,"code"),e(1005,"column"),n(),e(1006," e "),t(1007,"code"),e(1008,"area"),n(),e(1009,", definindo-se o tipo atrav\xE9s da propriedade "),t(1010,"code"),e(1011,"PoChartSerie.type"),n(),e(1012,"."),n()()(),t(1013,"tr",15)(1014,"td",16)(1015,"div",17)(1016,"span",18),e(1017," Column"),o(1018,"br"),n()()(),t(1019,"td",22)(1020,"p"),e(1021,`Gr\xE1fico que exibe os dados em forma de barras verticais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo entre diversas s\xE9ries.
As s\xE9ries s\xE3o exibidas lado-a-lado, com um pequeno espa\xE7o entre elas.`),n()()(),t(1022,"tr",15)(1023,"td",16)(1024,"div",17)(1025,"span",18),e(1026," Bar"),o(1027,"br"),n()()(),t(1028,"td",22)(1029,"p"),e(1030,"Gr\xE1fico que exibe os dados em forma de barras horizontais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo de s\xE9ries e categorias."),n()()()()())},dependencies:[P],encapsulation:2})}return a})();var ve=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(A(ee),A(te))};static \u0275cmp=C({type:a,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title"," Chart",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(r,i){r&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),o(3,"sample-po-chart-doc"),n(),t(4,"po-tab",3),o(5,"sample-po-chart-basic-view")(6,"sample-po-chart-labs-view")(7,"sample-po-chart-coffee-ranking-view")(8,"sample-po-chart-world-exports-view"),n()()()),r&2&&(d("p-actions",i.actions),s(2),d("p-active",i.activeTab.includes("doc")),s(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[de,y,v,Ee,Ce,be,xe,ye],encapsulation:2})}return a})();var ze=[{path:"",component:ve}],Pe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=B({type:a});static \u0275inj=O({imports:[z.forChild(ze),z]})}return a})();var xt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=B({type:a});static \u0275inj=O({imports:[ue,Pe]})}return a})();export{xt as DocPoChartModule};
