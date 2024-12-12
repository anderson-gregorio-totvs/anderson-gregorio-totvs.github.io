import{$ as V,$a as L,$c as re,A as H,Ca as j,Cd as ue,Da as U,Ea as G,F as u,G as c,Ga as e,Ia as v,Ka as g,La as E,Lb as Y,Ld as ce,Ma as S,Mb as Z,Md as C,Na as Q,Nb as $,Oa as J,Ob as ee,Od as _,Pa as M,Pb as te,T as d,U as I,Wb as ne,Xd as P,Yb as ie,Yd as w,Za as K,Zb as B,Zd as he,_ as b,_b as oe,ea as R,h as O,ha as p,ka as k,la as z,md as me,na as t,oa as n,oc as ae,pa as o,pb as X,qc as le,re as y,sd as de,se as be,ta as N,ua as f,wd as se,x as W,y as D,yd as pe}from"./chunk-23IW53AA.js";var ye=()=>({label:"PO UI - Angular Framework",link:"/"}),Ie=a=>[a],ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-menu-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-menus"]],template:function(l,i){l&1&&o(0,"po-menu",0),l&2&&p("p-menus",M(2,Ie,J(1,ye)))},dependencies:[C],encapsulation:2})}return a})();var Le=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-menu-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Menu Basic"),n(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-menu-basic/sample-po-menu-basic.component.html"),n(),t(13,"pre",7),e(14,`<po-menu [p-menus]="[{ label: 'PO UI - Angular Framework', link: '/' }]"></po-menu>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-menu-basic/sample-po-menu-basic.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-menu-basic',
  templateUrl: './sample-po-menu-basic.component.html',
  standalone: false
})
export class SamplePoMenuBasicComponent {}
`),n()()()()(),t(21,"div",10),o(22,"sample-po-menu-basic"),n(),o(23,"hr")),l&2&&(d(5),k("po-icon "+i.sampleCodeButtonIcon),d(),v(" ",i.sampleCodeButtonLabel,""),d(),p("ngClass",M(4,Le,i.hideSampleCodeTabs)))},dependencies:[L,y,P,w,ge],encapsulation:2})}return a})();function Te(a,A){if(a&1&&(t(0,"div"),o(1,"span"),t(2,"span",25),e(3),n()()),a&2){let m=A.$implicit;d(),z("sample-menu-circle sample-menu-vertical-middle po-",m.value,""),d(2),v(" ",m.label," ")}}var fe=(()=>{class a{changeDetector;menu;badgeColor;badgeValue;buttons=[{label:"Collapse",action:this.collapse.bind(this)},{label:"Expand",action:this.expand.bind(this)},{label:"Toggle",action:this.toggle.bind(this)}];filter;icon;label;link;logo;logoLink;maxBadgeValue=999999999999999;menuItems;menuItemSelected;menuParams;params;parent;parentList;service;shortLabel;shortLogo;searchTreeItems;badgeColorList=[{label:"color-01",value:"color-01"},{label:"color-02",value:"color-02"},{label:"color-03",value:"color-03"},{label:"color-04",value:"color-04"},{label:"color-05",value:"color-05"},{label:"color-06",value:"color-06"},{label:"color-07",value:"color-07"},{label:"color-08",value:"color-08"},{label:"color-09",value:"color-09"},{label:"color-10",value:"color-10"},{label:"color-11",value:"color-11"},{label:"color-12",value:"color-12"}];iconsOptions=[{label:"ph ph-newspaper",value:"ph ph-newspaper"},{label:"ph ph-camera",value:"ph ph-camera"},{label:"ph ph-calendar-dots",value:"ph ph-calendar-dots"},{label:"ph ph-user",value:"ph ph-user"},{label:"ph ph-chat",value:"ph ph-chat"},{label:"ph ph-package",value:"ph ph-package"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"fa fa-podcast",label:"fa fa-podcast"}];constructor(m){this.changeDetector=m}ngOnInit(){this.restore()}addMenuItem(){if(this.label){if(!this.parent)this.menuItems.push({action:this.changeMenuSelected.bind(this),icon:this.icon,label:this.label,link:this.link,shortLabel:this.shortLabel,badge:{value:this.badgeValue,color:this.badgeColor}});else{let m=this.getMenuParent(this.menuItems,this.parent);m.subItems||(m.subItems=[]),m.subItems.push({action:this.changeMenuSelected.bind(this),label:this.label,link:this.link,badge:{value:this.badgeValue,color:this.badgeColor}})}this.formReset(),this.updateMenuItems()}}onChangeParams(m){try{this.params=JSON.parse(m)}catch{this.params=void 0}}restore(){this.formReset(),this.filter=!1,this.menuItemSelected=void 0,this.badgeColor=void 0,this.badgeValue=void 0,this.logo=void 0,this.logoLink=void 0,this.params=void 0,this.parentList=[],this.menuItems=[],this.menuParams=void 0,this.service="",this.shortLogo=void 0,this.searchTreeItems=!1,this.updateMenuItems()}changeMenuSelected(m){this.menuItemSelected=m.label}collapse(){this.menu.collapse()}expand(){this.menu.expand()}formReset(){this.badgeColor=void 0,this.badgeValue=void 0,this.icon=void 0,this.label="PO Menu",this.link=void 0,this.parent=void 0,this.shortLabel="Menu"}getMenuParent(m,l){let i;if(m){for(let s of m)if(s.id===l){i=s;break}else i||(i=this.getMenuParent(s.subItems,l));return i}}toggle(){this.menu.toggle()}updateMenuItems(){this.changeDetector.detectChanges(),this.parentList=[],this.menuItems.forEach(m=>{this.parentList.push({label:m.label,value:m.id}),m.subItems&&m.subItems.forEach(l=>{this.parentList.push({label:`- ${l.label}`,value:l.id}),l.subItems&&l.subItems.forEach(i=>{this.parentList.push({label:`-- ${i.label}`,value:i.id})})})})}onFilterChange(m){this.filter=m,!this.filter&&this.searchTreeItems&&(this.searchTreeItems=!1)}static \u0275fac=function(l){return new(l||a)(I(K))};static \u0275cmp=b({type:a,selectors:[["sample-po-menu-labs"]],viewQuery:function(l,i){if(l&1&&j(C,7),l&2){let s;U(s=G())&&(i.menu=s.first)}},standalone:!1,decls:39,vars:30,consts:[["f","ngForm"],[1,"po-wrapper"],[3,"p-filter","p-logo","p-logo-link","p-menus","p-params","p-service","p-short-logo","p-search-tree-items"],["p-title","PO Menu"],[1,"po-row"],["p-label","Methods","p-value","Only if all menu items have icon and short label.",1,"po-lg-12"],[1,"po-lg-12",3,"p-buttons"],["p-label","Menu Item Selected",3,"p-value"],["name","filterMenu","p-label","Filter","p-label-off","Disabled","p-label-on","Enabled",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","searchTreeItems","p-label","Filter Search Tree Items","p-label-off","Disabled","p-label-on","Enabled",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["name","parent","p-label","Parent","p-placeholder","Add new menu at root level",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","label","p-label","Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","shortLabel","p-label","Short Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","link","p-label","External link","p-placeholder","http://",1,"po-md-4",3,"ngModelChange","ngModel"],["name","badgeColor","p-label","Badge color","p-placeholder","Select a color of badge",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-select-option-template",""],["name","badgeValue","p-label","Badge value","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max"],["name","icon","p-label","Icon",1,"po-md-4",3,"ngModelChange","ngModel","p-disabled","p-options"],["p-label","Add",1,"po-xl-2","po-md-4",3,"p-click"],["name","service","p-clean","","p-label","Service","p-help","https://po-sample-api.onrender.com/v1/menus",1,"po-md-6",3,"ngModelChange","ngModel"],["name","menuParams","p-clean","","p-label","Params","p-help",'Enter a value to be sent as a parameter. Ex: { "departament": "technology" }',1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","logo","p-clean","","p-help","https://po-ui.io/assets/graphics/po.png","p-label","Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","shortLogo","p-clean","","p-help","https://po-ui.io/assets/graphics/logo-dgeni.png","p-label","Short Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo link","p-clean","","p-help","ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'","p-label","Logo link",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-xl-3","po-md-5",3,"p-click"],[1,"sample-menu-vertical-middle"]],template:function(l,i){if(l&1){let s=N();t(0,"div",1),o(1,"po-menu",2),t(2,"po-page-default",3)(3,"div",4),o(4,"po-info",5)(5,"po-button-group",6),n(),o(6,"po-divider"),t(7,"div",4),o(8,"po-info",7),n(),o(9,"po-divider"),t(10,"form",null,0)(12,"div",4)(13,"po-switch",8),S("ngModelChange",function(r){return u(s),E(i.filter,r)||(i.filter=r),c(r)}),f("ngModelChange",function(r){return u(s),c(i.onFilterChange(r))}),n(),t(14,"po-switch",9),S("ngModelChange",function(r){return u(s),E(i.searchTreeItems,r)||(i.searchTreeItems=r),c(r)}),n()(),t(15,"div",4)(16,"po-select",10),S("ngModelChange",function(r){return u(s),E(i.parent,r)||(i.parent=r),c(r)}),n(),t(17,"po-input",11),S("ngModelChange",function(r){return u(s),E(i.label,r)||(i.label=r),c(r)}),n(),t(18,"po-input",12),S("ngModelChange",function(r){return u(s),E(i.shortLabel,r)||(i.shortLabel=r),c(r)}),n()(),t(19,"div",4)(20,"po-url",13),S("ngModelChange",function(r){return u(s),E(i.link,r)||(i.link=r),c(r)}),n(),t(21,"po-select",14),S("ngModelChange",function(r){return u(s),E(i.badgeColor,r)||(i.badgeColor=r),c(r)}),R(22,Te,4,4,"ng-template",15),n(),t(23,"po-number",16),S("ngModelChange",function(r){return u(s),E(i.badgeValue,r)||(i.badgeValue=r),c(r)}),n()(),t(24,"div",4)(25,"po-select",17),S("ngModelChange",function(r){return u(s),E(i.icon,r)||(i.icon=r),c(r)}),n()(),t(26,"div",4)(27,"po-button",18),f("p-click",function(){return u(s),c(i.addMenuItem())}),n()(),o(28,"hr"),t(29,"div",4)(30,"po-input",19),S("ngModelChange",function(r){return u(s),E(i.service,r)||(i.service=r),c(r)}),n(),t(31,"po-input",20),S("ngModelChange",function(r){return u(s),E(i.menuParams,r)||(i.menuParams=r),c(r)}),f("p-change-model",function(r){return u(s),c(i.onChangeParams(r))}),n()(),t(32,"div",4)(33,"po-input",21),S("ngModelChange",function(r){return u(s),E(i.logo,r)||(i.logo=r),c(r)}),n(),t(34,"po-input",22),S("ngModelChange",function(r){return u(s),E(i.shortLogo,r)||(i.shortLogo=r),c(r)}),n()(),t(35,"div",4)(36,"po-input",23),S("ngModelChange",function(r){return u(s),E(i.logoLink,r)||(i.logoLink=r),c(r)}),n()(),t(37,"div",4)(38,"po-button",24),f("p-click",function(){return u(s),c(i.restore())}),n()()()()()}l&2&&(d(),p("p-filter",i.filter)("p-logo",i.logo)("p-logo-link",i.logoLink)("p-menus",i.menuItems)("p-params",i.params)("p-service",i.service)("p-short-logo",i.shortLogo)("p-search-tree-items",i.searchTreeItems),d(4),p("p-buttons",i.buttons),d(3),p("p-value",i.menuItemSelected),d(5),g("ngModel",i.filter),d(),g("ngModel",i.searchTreeItems),p("p-disabled",!i.filter),d(2),g("ngModel",i.parent),p("p-options",i.parentList),d(),g("ngModel",i.label),d(),g("ngModel",i.shortLabel),d(2),g("ngModel",i.link),d(),g("ngModel",i.badgeColor),p("p-options",i.badgeColorList),d(2),g("ngModel",i.badgeValue),p("p-max",i.maxBadgeValue),d(2),g("ngModel",i.icon),p("p-disabled",i.parent)("p-options",i.iconsOptions),d(5),g("ngModel",i.service),d(),g("ngModel",i.menuParams),d(2),g("ngModel",i.logo),d(),g("ngModel",i.shortLogo),d(2),g("ngModel",i.logoLink))},dependencies:[te,Y,Z,ee,$,ae,le,oe,me,de,pe,se,re,ue,C,_],styles:[".sample-menu-circle[_ngcontent-%COMP%]{border-radius:14px;display:inline-block;height:20px;width:20px}.sample-menu-vertical-middle[_ngcontent-%COMP%]{vertical-align:middle}"]})}return a})();var Ve=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-menu-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Menu Labs"),n(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-menu-labs/sample-po-menu-labs.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-wrapper">
  <po-menu
    [p-filter]="filter"
    [p-logo]="logo"
    [p-logo-link]="logoLink"
    [p-menus]="menuItems"
    [p-params]="params"
    [p-service]="service"
    [p-short-logo]="shortLogo"
    [p-search-tree-items]="searchTreeItems"
  >
  </po-menu>

  <po-page-default p-title="PO Menu">
    <div class="po-row">
      <po-info class="po-lg-12" p-label="Methods" p-value="Only if all menu items have icon and short label.">
      </po-info>

      <po-button-group class="po-lg-12" [p-buttons]="buttons"> </po-button-group>
    </div>

    <po-divider></po-divider>

    <div class="po-row">
      <po-info p-label="Menu Item Selected" [p-value]="menuItemSelected"> </po-info>
    </div>

    <po-divider></po-divider>

    <form #f="ngForm">
      <div class="po-row">
        <po-switch
          class="po-lg-6"
          name="filterMenu"
          [(ngModel)]="filter"
          p-label="Filter"
          p-label-off="Disabled"
          p-label-on="Enabled"
          (ngModelChange)="onFilterChange($event)"
        >
        </po-switch>

        <po-switch
          class="po-lg-6"
          name="searchTreeItems"
          [(ngModel)]="searchTreeItems"
          p-label="Filter Search Tree Items"
          p-label-off="Disabled"
          p-label-on="Enabled"
          [p-disabled]="!filter"
        >
        </po-switch>
      </div>

      <div class="po-row">
        <po-select
          class="po-md-4"
          name="parent"
          [(ngModel)]="parent"
          p-label="Parent"
          p-placeholder="Add new menu at root level"
          [p-options]="parentList"
        >
        </po-select>

        <po-input class="po-md-4" name="label" [(ngModel)]="label" p-label="Label" p-required> </po-input>

        <po-input class="po-md-4" name="shortLabel" [(ngModel)]="shortLabel" p-label="Short Label" p-required>
        </po-input>
      </div>

      <div class="po-row">
        <po-url class="po-md-4" name="link" [(ngModel)]="link" p-label="External link" p-placeholder="http://">
        </po-url>

        <po-select
          class="po-md-4"
          name="badgeColor"
          [(ngModel)]="badgeColor"
          p-label="Badge color"
          p-placeholder="Select a color of badge"
          [p-options]="badgeColorList"
        >
          <ng-template p-select-option-template let-option>
            <div>
              <span class="sample-menu-circle sample-menu-vertical-middle po-{ { option.value }}"></span>
              <span class="sample-menu-vertical-middle"> { { option.label }} </span>
            </div>
          </ng-template>
        </po-select>

        <po-number
          class="po-md-4"
          name="badgeValue"
          [(ngModel)]="badgeValue"
          p-label="Badge value"
          p-required
          [p-max]="maxBadgeValue"
        >
        </po-number>
      </div>

      <div class="po-row">
        <po-select
          class="po-md-4"
          name="icon"
          [(ngModel)]="icon"
          p-label="Icon"
          [p-disabled]="parent"
          [p-options]="iconsOptions"
        >
        </po-select>
      </div>

      <div class="po-row">
        <po-button class="po-xl-2 po-md-4" p-label="Add" (p-click)="addMenuItem()"> </po-button>
      </div>

      <hr />

      <div class="po-row">
        <po-input
          class="po-md-6"
          name="service"
          [(ngModel)]="service"
          p-clean
          p-label="Service"
          p-help="https://po-sample-api.onrender.com/v1/menus"
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="menuParams"
          [(ngModel)]="menuParams"
          p-clean
          p-label="Params"
          p-help='Enter a value to be sent as a parameter. Ex: { "departament": "technology" }'
          (p-change-model)="onChangeParams($event)"
        >
        </po-input>
      </div>

      <div class="po-row">
        <po-input
          class="po-md-6"
          name="logo"
          [(ngModel)]="logo"
          p-clean
          p-help="https://po-ui.io/assets/graphics/po.png"
          p-label="Logo"
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="shortLogo"
          [(ngModel)]="shortLogo"
          p-clean
          p-help="https://po-ui.io/assets/graphics/logo-dgeni.png"
          p-label="Short Logo"
        >
        </po-input>
      </div>

      <div class="po-row">
        <po-input
          class="po-md-12"
          name="logo link"
          [(ngModel)]="logoLink"
          p-clean
          p-help="ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'"
          p-label="Logo link"
        >
        </po-input>
      </div>

      <div class="po-row">
        <po-button class="po-xl-3 po-md-5" p-label="Sample Restore" (p-click)="restore()"> </po-button>
      </div>
    </form>
  </po-page-default>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-menu-labs/sample-po-menu-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

import { PoButtonGroupItem, PoMenuComponent, PoMenuItem, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-menu-labs',
  templateUrl: './sample-po-menu-labs.component.html',
  styles: [
    \`
      .sample-menu-circle {
        border-radius: 14px;
        display: inline-block;
        height: 20px;
        width: 20px;
      }

      .sample-menu-vertical-middle {
        vertical-align: middle;
      }
    \`
  ],
  standalone: false
})
export class SamplePoMenuLabsComponent implements OnInit {
  @ViewChild(PoMenuComponent, { static: true }) menu: PoMenuComponent;

  badgeColor: string;
  badgeValue: number;
  buttons: Array<PoButtonGroupItem> = [
    { label: 'Collapse', action: this.collapse.bind(this) },
    { label: 'Expand', action: this.expand.bind(this) },
    { label: 'Toggle', action: this.toggle.bind(this) }
  ];
  filter: boolean;
  icon: string;
  label: string;
  link: string;
  logo: string;
  logoLink: string;
  maxBadgeValue = 999999999999999;
  menuItems: Array<PoMenuItem>;
  menuItemSelected: string;
  menuParams: string;
  params: any;
  parent: string;
  parentList: Array<PoSelectOption>;
  service: string;
  shortLabel: string;
  shortLogo: string;
  searchTreeItems: boolean;

  public readonly badgeColorList: Array<PoSelectOption> = [
    { label: 'color-01', value: 'color-01' },
    { label: 'color-02', value: 'color-02' },
    { label: 'color-03', value: 'color-03' },
    { label: 'color-04', value: 'color-04' },
    { label: 'color-05', value: 'color-05' },
    { label: 'color-06', value: 'color-06' },
    { label: 'color-07', value: 'color-07' },
    { label: 'color-08', value: 'color-08' },
    { label: 'color-09', value: 'color-09' },
    { label: 'color-10', value: 'color-10' },
    { label: 'color-11', value: 'color-11' },
    { label: 'color-12', value: 'color-12' }
  ];

  public readonly iconsOptions: Array<PoSelectOption> = [
    { label: 'ph ph-newspaper', value: 'ph ph-newspaper' },
    { label: 'ph ph-camera', value: 'ph ph-camera' },
    { label: 'ph ph-calendar-dots', value: 'ph ph-calendar-dots' },
    { label: 'ph ph-user', value: 'ph ph-user' },
    { label: 'ph ph-chat', value: 'ph ph-chat' },
    { label: 'ph ph-package', value: 'ph ph-package' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.restore();
  }

  addMenuItem() {
    if (!this.label) {
      return;
    }

    if (!this.parent) {
      this.menuItems.push({
        action: this.changeMenuSelected.bind(this),
        icon: this.icon,
        label: this.label,
        link: this.link,
        shortLabel: this.shortLabel,
        badge: { value: this.badgeValue, color: this.badgeColor }
      });
    } else {
      const menuParent = this.getMenuParent(this.menuItems, this.parent);

      if (!menuParent.subItems) {
        menuParent.subItems = [];
      }

      menuParent.subItems.push({
        action: this.changeMenuSelected.bind(this),
        label: this.label,
        link: this.link,
        badge: { value: this.badgeValue, color: this.badgeColor }
      });
    }

    this.formReset();
    this.updateMenuItems();
  }

  onChangeParams(params: any) {
    try {
      this.params = JSON.parse(params);
    } catch (e) {
      this.params = undefined;
    }
  }

  restore() {
    this.formReset();

    this.filter = false;
    this.menuItemSelected = undefined;
    this.badgeColor = undefined;
    this.badgeValue = undefined;
    this.logo = undefined;
    this.logoLink = undefined;
    this.params = undefined;
    this.parentList = [];
    this.menuItems = [];
    this.menuParams = undefined;
    this.service = '';
    this.shortLogo = undefined;
    this.searchTreeItems = false;

    this.updateMenuItems();
  }

  private changeMenuSelected(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }

  private collapse() {
    this.menu.collapse();
  }

  private expand() {
    this.menu.expand();
  }

  private formReset() {
    this.badgeColor = undefined;
    this.badgeValue = undefined;
    this.icon = undefined;
    this.label = 'PO Menu';
    this.link = undefined;
    this.parent = undefined;
    this.shortLabel = 'Menu';
  }

  private getMenuParent(menus: Array<PoMenuItem>, id: string): PoMenuItem {
    let menuParent;

    if (!menus) {
      return;
    }

    for (const subMenu of menus) {
      if (subMenu['id'] === id) {
        menuParent = subMenu;
        break;
      } else if (!menuParent) {
        menuParent = this.getMenuParent(subMenu.subItems, id);
      }
    }

    return menuParent;
  }

  private toggle() {
    this.menu.toggle();
  }

  private updateMenuItems() {
    this.changeDetector.detectChanges();

    this.parentList = [];

    this.menuItems.forEach(item => {
      this.parentList.push(<PoSelectOption>{ label: item.label, value: item['id'] });

      if (item.subItems) {
        item.subItems.forEach(secondItem => {
          this.parentList.push(<PoSelectOption>{ label: \`- \${secondItem.label}\`, value: secondItem['id'] });

          if (secondItem.subItems) {
            secondItem.subItems.forEach(thirdItem => {
              this.parentList.push(<PoSelectOption>{ label: \`-- \${thirdItem.label}\`, value: thirdItem['id'] });
            });
          }
        });
      }
    });
  }

  onFilterChange(newValue: boolean) {
    this.filter = newValue;
    if (!this.filter && this.searchTreeItems) {
      this.searchTreeItems = false;
    }
  }
}
`),n()()()()(),t(21,"div",10),o(22,"sample-po-menu-labs"),n(),o(23,"hr")),l&2&&(d(5),k("po-icon "+i.sampleCodeButtonIcon),d(),v(" ",i.sampleCodeButtonLabel,""),d(),p("ngClass",M(4,Ve,i.hideSampleCodeTabs)))},dependencies:[L,y,P,w,fe],encapsulation:2})}return a})();var F=(()=>{class a{http;url="https://po-sample-api.onrender.com/v1/menus";constructor(m){this.http=m}getFilteredData(m){let l={search:m};return this.http.get(this.url,{params:l}).pipe(O(i=>i.items))}static \u0275fac=function(l){return new(l||a)(H(X))};static \u0275prov=W({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Be(a,A){a&1&&(t(0,"div",5)(1,"p"),e(2,"Welcome,"),n(),t(3,"p")(4,"b"),e(5," John Doe "),n()()())}var ve=(()=>{class a{samplePoMenuHumanResourcesService;menuItemSelected;menus=[{label:"Register user",action:this.printMenuAction.bind(this),icon:"ph ph-user",shortLabel:"Register"},{label:"Timekeeping",action:this.printMenuAction.bind(this),icon:"ph ph-clock",shortLabel:"Timekeeping",badge:{value:1}},{label:"Useful links",icon:"ph ph-share",shortLabel:"Links",subItems:[{label:"Ministry of Labour",action:this.printMenuAction.bind(this),link:"http://trabalho.gov.br/"},{label:"SindPD Syndicate",action:this.printMenuAction.bind(this),link:"http://www.sindpd.com.br/"}]},{label:"Benefits",icon:"ph ph-star",shortLabel:"Benefits",subItems:[{label:"Meal tickets",subItems:[{label:"Acceptance network ",action:this.printMenuAction.bind(this)},{label:"Extracts",action:this.printMenuAction.bind(this),subItems:[{label:"Monthly",action:this.printMenuAction.bind(this),badge:{value:3,color:"color-03"}},{label:"Custom",action:this.printMenuAction.bind(this)}]}]},{label:"Transportation tickets",action:this.printMenuAction.bind(this),badge:{value:12}}]}];constructor(m){this.samplePoMenuHumanResourcesService=m}printMenuAction(m){this.menuItemSelected=m.label}static \u0275fac=function(l){return new(l||a)(I(F))};static \u0275cmp=b({type:a,selectors:[["sample-po-menu-human-resources"]],standalone:!1,features:[Q([F])],decls:5,vars:5,consts:[[1,"po-wrapper"],["p-collapsed","","p-filter","",3,"p-menus","p-service","p-automatic-toggle"],["class","po-p-2 po-font-title sample-menu-header-text-color",4,"p-menu-header-template"],["p-title","PO - Human Resources",3,"p-show-notification"],[3,"p-title"],[1,"po-p-2","po-font-title","sample-menu-header-text-color"]],template:function(l,i){l&1&&(t(0,"div",0)(1,"po-menu",1),R(2,Be,6,0,"div",2),n(),o(3,"po-toolbar",3)(4,"po-page-default",4),n()),l&2&&(d(),p("p-menus",i.menus)("p-service",i.samplePoMenuHumanResourcesService)("p-automatic-toggle",!0),d(2),p("p-show-notification",!1),d(),p("p-title",i.menuItemSelected))},dependencies:[C,ce,_,he],styles:[".sample-menu-header-text-color[_ngcontent-%COMP%]{color:#9da7a9}"]})}return a})();var Ae=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-menu-human-resources-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Menu - Human Resources"),n(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-wrapper">
  <po-menu
    p-collapsed
    p-filter
    [p-menus]="menus"
    [p-service]="samplePoMenuHumanResourcesService"
    [p-automatic-toggle]="true"
  >
    <div *p-menu-header-template class="po-p-2 po-font-title sample-menu-header-text-color">
      <p>Welcome,</p>
      <p>
        <b> John Doe </b>
      </p>
    </div>
  </po-menu>

  <po-toolbar p-title="PO - Human Resources" [p-show-notification]="false"></po-toolbar>

  <po-page-default [p-title]="menuItemSelected"></po-page-default>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

import { SamplePoMenuHumanResourcesService } from './sample-po-menu-human-resources.service';

@Component({
  selector: 'sample-po-menu-human-resources',
  templateUrl: './sample-po-menu-human-resources.component.html',
  providers: [SamplePoMenuHumanResourcesService],
  styles: [
    \`
      .sample-menu-header-text-color {
        color: #9da7a9;
      }
    \`
  ],
  standalone: false
})
export class SamplePoMenuHumanResourcesComponent {
  menuItemSelected: string;

  menus: Array<PoMenuItem> = [
    { label: 'Register user', action: this.printMenuAction.bind(this), icon: 'ph ph-user', shortLabel: 'Register' },
    {
      label: 'Timekeeping',
      action: this.printMenuAction.bind(this),
      icon: 'ph ph-clock',
      shortLabel: 'Timekeeping',
      badge: { value: 1 }
    },
    {
      label: 'Useful links',
      icon: 'ph ph-share',
      shortLabel: 'Links',
      subItems: [
        { label: 'Ministry of Labour', action: this.printMenuAction.bind(this), link: 'http://trabalho.gov.br/' },
        { label: 'SindPD Syndicate', action: this.printMenuAction.bind(this), link: 'http://www.sindpd.com.br/' }
      ]
    },
    {
      label: 'Benefits',
      icon: 'ph ph-star',
      shortLabel: 'Benefits',
      subItems: [
        {
          label: 'Meal tickets',
          subItems: [
            { label: 'Acceptance network ', action: this.printMenuAction.bind(this) },
            {
              label: 'Extracts',
              action: this.printMenuAction.bind(this),
              subItems: [
                { label: 'Monthly', action: this.printMenuAction.bind(this), badge: { value: 3, color: 'color-03' } },
                { label: 'Custom', action: this.printMenuAction.bind(this) }
              ]
            }
          ]
        },
        { label: 'Transportation tickets', action: this.printMenuAction.bind(this), badge: { value: 12 } }
      ]
    }
  ];

  constructor(public samplePoMenuHumanResourcesService: SamplePoMenuHumanResourcesService) {}

  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-menu-human-resources/sample-po-menu-human-resources.service.ts"),n(),t(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoMenuFilter, PoMenuItemFiltered } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoMenuHumanResourcesService implements PoMenuFilter {
  private url: string = 'https://po-sample-api.onrender.com/v1/menus';

  constructor(private http: HttpClient) {}

  getFilteredData(search: string): Observable<Array<PoMenuItemFiltered>> {
    const params = { search };

    return this.http.get(this.url, { params }).pipe(map((response: any) => response.items));
  }
}
`),n()()()()(),t(25,"div",10),o(26,"sample-po-menu-human-resources"),n(),o(27,"hr")),l&2&&(d(5),k("po-icon "+i.sampleCodeButtonIcon),d(),v(" ",i.sampleCodeButtonLabel,""),d(),p("ngClass",M(4,Ae,i.hideSampleCodeTabs)))},dependencies:[L,y,P,w,ve],encapsulation:2})}return a})();var Ce=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-menu-doc"]],standalone:!1,decls:1138,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["href","/documentation/po-menu-header-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","documentation/po-menu#colapseMethod"],["href","documentation/po-menu#expandMethod"],["href","documentation/po-menu#toggleMethod"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoMenuItem[]"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoMenuFilter"],["href","https://po-ui.io/guides/api"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["id","colapseMethod"],["id","expandMethod"],["id","toggleMethod"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","()","=>","void"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoMenuItemBadge"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoMenuItem>"]],template:function(l,i){l&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoMenuModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-menu."),n()(),t(7,"h3",3),e(8,"Componente"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoMenuComponent"),n()(),t(12,"div",2)(13,"p"),e(14,"Este \xE9 um componente de menu lateral que \xE9 utilizado para navega\xE7\xE3o nas p\xE1ginas de uma aplica\xE7\xE3o."),n(),t(15,"p"),e(16,"O componente po-menu recebe uma lista de objetos do tipo "),t(17,"code"),e(18,"MenuItem"),n(),e(19,` com as informa\xE7\xF5es dos itens de menu como
textos, links para redirecionamento, a\xE7\xF5es, at\xE9 4 n\xEDveis de menu e \xEDcones para o primeiro n\xEDvel de menu.`),n(),t(20,"h4",6),e(21,"Tokens customiz\xE1veis"),n(),t(22,"p"),e(23,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),n(),t(24,"blockquote")(25,"p"),e(26,"Para maiores informa\xE7\xF5es, acesse o guia "),t(27,"a",7),e(28,"Personalizando o Tema Padr\xE3o com Tokens CSS"),n(),e(29,"."),n()(),t(30,"table")(31,"thead")(32,"tr")(33,"th"),e(34,"Propriedade"),n(),t(35,"th"),e(36,"Descri\xE7\xE3o"),n(),t(37,"th"),e(38,"Valor Padr\xE3o"),n()()(),t(39,"tbody")(40,"tr")(41,"td")(42,"strong"),e(43,"Default Values"),n()(),o(44,"td")(45,"td"),n(),t(46,"tr")(47,"td")(48,"code"),e(49,"--border-radius"),n()(),t(50,"td"),e(51,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),n(),t(52,"td")(53,"code"),e(54,"var(--border-radius-md)"),n()()(),t(55,"tr")(56,"td")(57,"code"),e(58,"--border-color"),n()(),t(59,"td"),e(60,"Cor da borda"),n(),t(61,"td")(62,"code"),e(63,"var(--color-neutral-light-20)"),n()()(),t(64,"tr")(65,"td")(66,"code"),e(67,"--background-color"),n()(),t(68,"td"),e(69,"Cor de background"),n(),t(70,"td")(71,"code"),e(72,"Var(----color-neutral-light-05)"),n()()(),t(73,"tr")(74,"td")(75,"strong"),e(76,"Menu Footer"),n()(),o(77,"td")(78,"td"),n(),t(79,"tr")(80,"td")(81,"code"),e(82,"--color"),n()(),t(83,"td"),e(84,"Cor principla do menu footer"),n(),t(85,"td")(86,"code"),e(87,"var(--color-action-default)"),n()()(),t(88,"tr")(89,"td")(90,"code"),e(91,"--font-size"),n()(),t(92,"td"),e(93,"Tamanho da fonte"),n(),t(94,"td")(95,"code"),e(96,"var(--font-size-default)"),n()()(),t(97,"tr")(98,"td")(99,"code"),e(100,"--line-height"),n()(),t(101,"td"),e(102,"Tamanho da label"),n(),t(103,"td")(104,"code"),e(105,"var(--line-height-md)"),n()()(),t(106,"tr")(107,"td")(108,"code"),e(109,"--outline-color-focused"),n()(),t(110,"td"),e(111,"Cor do outline do estado de focus"),n(),t(112,"td")(113,"code"),e(114,"var(--color-action-focus)"),n()()(),t(115,"tr")(116,"td")(117,"code"),e(118,"--font-weight-lvl0"),n()(),t(119,"td"),e(120,"Peso da fonte"),n(),t(121,"td")(122,"code"),e(123,"var(--font-weight-bold)"),n()()(),t(124,"tr")(125,"td")(126,"strong"),e(127,"po-menu-item"),n()(),o(128,"td")(129,"td"),n(),t(130,"tr")(131,"td")(132,"code"),e(133,"--font-family"),n()(),t(134,"td"),e(135,"Fam\xEDlia tipogr\xE1fica usada"),n(),t(136,"td")(137,"code"),e(138,"var(--font-family-theme)"),n()()(),t(139,"tr")(140,"td")(141,"code"),e(142,"--font-size"),n()(),t(143,"td"),e(144,"Tamanho da fonte"),n(),t(145,"td")(146,"code"),e(147,"var(--font-size-default)"),n()()(),t(148,"tr")(149,"td")(150,"code"),e(151,"--line-height"),n()(),t(152,"td"),e(153,"Tamanho da label"),n(),t(154,"td")(155,"code"),e(156,"var(--line-height-md)"),n()()(),t(157,"tr")(158,"td")(159,"code"),e(160,"--border-radius"),n()(),t(161,"td"),e(162,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),n(),t(163,"td")(164,"code"),e(165,"var(--border-radius-md)"),n()()(),t(166,"tr")(167,"td")(168,"code"),e(169,"--color"),n()(),t(170,"td"),e(171,"Cor principal do item"),n(),t(172,"td")(173,"code"),e(174,"var(--color-action-default)"),n()()(),t(175,"tr")(176,"td")(177,"code"),e(178,"--background-color"),n()(),t(179,"td"),e(180,"Cor do background"),n(),t(181,"td")(182,"code"),e(183,"transparent"),n()()(),t(184,"tr")(185,"td")(186,"strong"),e(187,"Hover"),n()(),o(188,"td")(189,"td"),n(),t(190,"tr")(191,"td")(192,"code"),e(193,"--color-hover"),n()(),t(194,"td"),e(195,"Cor principal no estado hover"),n(),t(196,"td")(197,"code"),e(198,"var(--color-brand-01-darkest)"),n()()(),t(199,"tr")(200,"td")(201,"code"),e(202,"--background-color-hover"),n()(),t(203,"td"),e(204,"Cor de background no estado hover"),n(),t(205,"td")(206,"code"),e(207,"var(--color-brand-01-lighter)"),n()()(),t(208,"tr")(209,"td")(210,"strong"),e(211,"Focused"),n()(),o(212,"td")(213,"td"),n(),t(214,"tr")(215,"td")(216,"code"),e(217,"--outline-color-focused"),n()(),t(218,"td"),e(219,"Cor do outline do estado de focus"),n(),t(220,"td")(221,"code"),e(222,"var(--color-action-focus)"),n()()(),t(223,"tr")(224,"td")(225,"strong"),e(226,"Pressed"),n()(),o(227,"td")(228,"td"),n(),t(229,"tr")(230,"td")(231,"code"),e(232,"--background-color-pressed"),n(),e(233," \xA0"),n(),t(234,"td"),e(235,"Cor de background no estado de pressionado\xA0"),n(),t(236,"td")(237,"code"),e(238,"var(--color-brand-01-light)"),n()()(),t(239,"tr")(240,"td")(241,"strong"),e(242,"Actived"),n()(),o(243,"td")(244,"td"),n(),t(245,"tr")(246,"td")(247,"code"),e(248,"--background-color-actived"),n()(),t(249,"td"),e(250,"Cor de background no estado actived"),n(),t(251,"td")(252,"code"),e(253,"var(--color-brand-01-darkest)"),n()()(),t(254,"tr")(255,"td")(256,"code"),e(257,"--color-actived"),n()(),t(258,"td"),e(259,"Cor principal no estado actived"),n(),t(260,"td")(261,"code"),e(262,"var(--color-brand-01-lighter)"),n()()(),t(263,"tr")(264,"td")(265,"strong"),e(266,"Font"),n()(),o(267,"td")(268,"td"),n(),t(269,"tr")(270,"td")(271,"code"),e(272,"--font-weight-lvl0"),n()(),t(273,"td"),e(274,"Peso da fonte bold"),n(),t(275,"td")(276,"code"),e(277,"var(--font-weight-bold)"),n()()(),t(278,"tr")(279,"td")(280,"code"),e(281,"--font-weight-lvl1"),n()(),t(282,"td"),e(283,"Peso da fonte"),n(),t(284,"td")(285,"code"),e(286,"var(--font-weight-normal)"),n()()()()(),t(287,"p"),o(288,"br"),e(289," Aparece completo em telas com largura maior que 1200px, caso contr\xE1rio o menu \xE9 escondido e chamado por meio de um bot\xE3o."),n(),t(290,"p"),e(291,`O menu tamb\xE9m pode ser colapsado. Essa op\xE7\xE3o \xE9 habilitada quando todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones e textos curtos.
Se colapsado, somente os itens de primeiro n\xEDvel ser\xE3o exibidos e, caso o item selecionado possua sub-n\xEDveis,
ent\xE3o o menu alternar\xE1 novamente para o estado aberto.`),n(),t(292,"p"),e(293,"Existe a possibilidade de customizar a logomarca, que \xE9 exibida na parte superior do componente."),n(),t(294,"p"),e(295,`E para adicionar um conte\xFAdo personalizado entre a logomarca e o campo de filtro,
basta adicionar este conte\xFAdo com a diretiva `),t(296,"a",8)(297,"strong"),e(298,"p-menu-header-template"),n()(),e(299,"."),n(),t(300,"p"),e(301,`Caso utilizar o filtro de menus, \xE9 poss\xEDvel realizar buscas em servi\xE7o, apenas informando a URL do servi\xE7o ou a inst\xE2ncia de
um servi\xE7o customizado implementando a interface `),t(302,"code"),e(303,"PoMenuFilter"),n(),e(304,"."),n(),t(305,"p"),e(306,"Para o menu funcionar corretamente \xE9 necess\xE1rio importar o "),t(307,"code"),e(308,"RouterModule"),n(),e(309," e "),t(310,"code"),e(311,"Routes"),n(),e(312," do m\xF3dulo principal de sua aplica\xE7\xE3o:"),n(),t(313,"pre")(314,"code"),e(315,`import { RouterModule, Routes } from '@angular/router';

...

@NgModule({
  imports: [
    RouterModule,
    Routes,
    ...
    PoModule,
    ...
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`),n()(),t(316,"p"),e(317,"Al\xE9m disso \xE9 necess\xE1rio criar um m\xF3dulo configurando as rotas da aplica\xE7\xE3o."),n(),t(318,"pre")(319,"code"),e(320,`import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
  {path: 'hello-world', component: HelloWorldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}`),n()()(),t(321,"div",9)(322,"h4",10),e(323,"Seletor"),n(),t(324,"pre",11),e(325,`<po-menu
    p-automatic-toggle="boolean"
    p-collapsed="boolean"
    p-filter="boolean"
    p-logo="string"
    p-logo-alt="string"
    p-logo-link="boolean | string"
    p-menus="PoMenuItem[]"
    p-params="any"
    p-search-tree-items="boolean"
    p-service="string | PoMenuFilter"
    p-short-logo="string" >
</po-menu>
`),n()(),t(326,"h4",12),e(327,"Propriedades"),n(),t(328,"table",13)(329,"tr",14)(330,"th",15),e(331,"Nome"),n(),t(332,"th",15),e(333,"Tipo"),n(),t(334,"th",15),e(335,"Padr\xE3o"),n(),t(336,"th",15),e(337,"Descri\xE7\xE3o"),n()(),t(338,"tr",16)(339,"td",17)(340,"div",18)(341,"span",19),e(342," p-automatic-toggle"),o(343,"br"),n()()(),t(344,"td",20)(345,"code",21),e(346,"boolean"),n()(),t(347,"td",22)(348,"p")(349,"code"),e(350,"false"),n()()(),t(351,"td",23)(352,"em")(353,"strong"),e(354,"(opcional)"),n()(),t(355,"p"),e(356,"Expande e Colapsa (retrai) o menu automaticamente."),n()()(),t(357,"tr",16)(358,"td",17)(359,"div",18)(360,"span",19),e(361," p-collapsed"),o(362,"br"),n()()(),t(363,"td",20)(364,"code",21),e(365,"boolean"),n()(),t(366,"td",22)(367,"p")(368,"code"),e(369,"false"),n()()(),t(370,"td",23)(371,"em")(372,"strong"),e(373,"(opcional)"),n()(),t(374,"p"),e(375,"Colapsa (retrai) o menu e caso receba o valor "),t(376,"code"),e(377,"false"),n(),e(378," expande o menu."),n(),t(379,"blockquote")(380,"p"),e(381,"Utilize esta propriedade para iniciar o menu colapsado."),n()(),t(382,"blockquote")(383,"p"),e(384,"Ao utilizar os m\xE9todos "),t(385,"a",24)(386,"code"),e(387,"colapse"),n()(),e(388,", "),t(389,"a",25)(390,"code"),e(391,"expand"),n()(),e(392,` e
`),t(393,"a",26)(394,"code"),e(395,"toggle"),n()(),e(396," o valor desta propriedade n\xE3o \xE9 alterado."),n()(),t(397,"p")(398,"strong"),e(399,"Importante:"),n()(),t(400,"blockquote")(401,"p"),e(402,"O menu ser\xE1 colapsado/expandido apenas se todos os itens de menu tiverem valor nas propriedades "),t(403,"code"),e(404,"icon"),n(),e(405," e "),t(406,"code"),e(407,"shortLabel"),n(),e(408,"."),n()()()(),t(409,"tr",16)(410,"td",17)(411,"div",18)(412,"span",19),e(413," p-filter"),o(414,"br"),n()()(),t(415,"td",20)(416,"code",21),e(417,"boolean"),n()(),t(418,"td",22)(419,"p")(420,"code"),e(421,"false"),n()()(),t(422,"td",23)(423,"em")(424,"strong"),e(425,"(opcional)"),n()(),t(426,"p"),e(427,`Habilita um campo para pesquisa no menu.
A pesquisa \xE9 realizada em todos os n\xEDveis do menu e busca apenas pelos itens que cont\xE9m uma a\xE7\xE3o e/ou link definidos,
ou tamb\xE9m, pode ser realizada atrav\xE9s de um servi\xE7o definido na propriedade `),t(428,"code"),e(429,"p-service"),n(),e(430,"."),n(),t(431,"blockquote")(432,"p"),e(433,"O campo de pesquisa \xE9 desabilitado se o menu estiver colapsado."),n()()()(),t(434,"tr",16)(435,"td",17)(436,"div",18)(437,"span",19),e(438," p-logo"),o(439,"br"),n()()(),t(440,"td",20)(441,"code",27),e(442,"string"),n()(),t(443,"td",22),e(444,"-"),n(),t(445,"td",23)(446,"em")(447,"strong"),e(448,"(opcional)"),n()(),t(449,"p"),e(450,"Caminho para a logomarca, que ser\xE1 exibida quando o componente estiver expandido, localizada na parte superior."),n(),t(451,"blockquote")(452,"p")(453,"strong"),e(454,"Importante:"),n()()(),t(455,"ul")(456,"li"),e(457,"Caso esta propriedade estiver indefinida ou inv\xE1lida o espa\xE7o para logomarca ser\xE1 removido."),n(),t(458,"li"),e(459,"Como boa pr\xE1tica, indica-se utilizar imagens com at\xE9 "),t(460,"code"),e(461,"24px"),n(),e(462," de altura e "),t(463,"code"),e(464,"224px"),n(),e(465,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),n()()()(),t(466,"tr",16)(467,"td",17)(468,"div",18)(469,"span",19),e(470," p-logo-alt"),o(471,"br"),n()()(),t(472,"td",20)(473,"code",27),e(474,"string"),n()(),t(475,"td",22)(476,"p")(477,"code"),e(478,"Logomarca in\xEDcio"),n()()(),t(479,"td",23)(480,"em")(481,"strong"),e(482,"(opcional)"),n()(),t(483,"p"),e(484,"Define o texto alternativo para a logomarca."),n(),t(485,"blockquote")(486,"p")(487,"strong"),e(488,"Importante"),n(),e(489,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),n()()()(),t(490,"tr",16)(491,"td",17)(492,"div",18)(493,"span",19),e(494," p-logo-link"),o(495,"br"),n()()(),t(496,"td",20)(497,"code",21),e(498,"boolean "),n(),t(499,"code",27),e(500," string"),n()(),t(501,"td",22)(502,"p")(503,"code"),e(504,"true"),n()()(),t(505,"td",23)(506,"em")(507,"strong"),e(508,"(opcional)"),n()(),t(509,"p"),e(510,"Define o link para a rota ao clicar no logo do menu."),n(),t(511,"ul")(512,"li"),e(513,"Se o valor for uma string, define a rota para o link informado."),n(),t(514,"li"),e(515,"Se for "),t(516,"code"),e(517,"false"),n(),e(518,", o logo n\xE3o ter\xE1 link associado."),n(),t(519,"li"),e(520,"Se for "),t(521,"code"),e(522,"true"),n(),e(523,", o logo ter\xE1 a rota padr\xE3o "),t(524,"code"),e(525,"./"),n(),e(526,"."),n()()()(),t(527,"tr",16)(528,"td",17)(529,"div",18)(530,"span",19),e(531," p-menus"),o(532,"br"),n()()(),t(533,"td",20)(534,"code",28),e(535,"PoMenuItem[]"),n()(),t(536,"td",22),e(537,"-"),n(),t(538,"td",23)(539,"p"),e(540,"Lista dos itens do menu. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),n()()(),t(541,"tr",16)(542,"td",17)(543,"div",18)(544,"span",19),e(545," p-params"),o(546,"br"),n()()(),t(547,"td",20)(548,"code",29),e(549,"any"),n()(),t(550,"td",22),e(551,"-"),n(),t(552,"td",23)(553,"em")(554,"strong"),e(555,"(opcional)"),n()(),t(556,"p"),e(557,"Deve ser informado um objeto que deseja-se utilizar na requisi\xE7\xE3o de filtro dos itens de menu."),n(),t(558,"p"),e(559,"Caso utilizado um servi\xE7o customizado, implementando a interface "),t(560,"code"),e(561,"PoMenuFilter"),n(),e(562,`, o valor desta propriedade
ser\xE1 passado como par\xE2metro, na fun\xE7\xE3o `),t(563,"code"),e(564,"getFilteredData"),n(),e(565,"."),n(),t(566,"p"),e(567,"Quando utilizada uma URL de servi\xE7o, ser\xE1 realizado um "),t(568,"em"),e(569,"GET"),n(),e(570,` na URL informada, passando os valores informados
nesta propriedade em conjunto com o par\xE2metro `),t(571,"code"),e(572,"search"),n(),e(573,", veja exemplo:"),n(),t(574,"pre")(575,"code"),e(576,`<po-menu p-service="/api/v1/fnd/menu" [p-params]="{ company: 1, user: 297767512 }">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas&company=1&user=297767512`),n()()()(),t(577,"tr",16)(578,"td",17)(579,"div",18)(580,"span",19),e(581," p-search-tree-items"),o(582,"br"),n()()(),t(583,"td",20)(584,"code",21),e(585,"boolean"),n()(),t(586,"td",22)(587,"p")(588,"code"),e(589,"false"),n()()(),t(590,"td",23)(591,"em")(592,"strong"),e(593,"(opcional)"),n()(),t(594,"p"),e(595,`Quando ativado, a pesquisa tamb\xE9m retornar\xE1 itens agrupadores al\xE9m dos itens que cont\xEAm uma a\xE7\xE3o e/ou link definidos.
Isso pode ser \xFAtil quando se deseja encontrar rapidamente categorias ou se\xE7\xF5es do menu.`),n(),t(596,"blockquote")(597,"p"),e(598,"\xC9 necess\xE1rio que a propriedade "),t(599,"code"),e(600,"p-filter"),n(),e(601," esteja habilitada."),n()()()(),t(602,"tr",16)(603,"td",17)(604,"div",18)(605,"span",19),e(606," p-service"),o(607,"br"),n()()(),t(608,"td",20)(609,"code",27),e(610,"string "),n(),t(611,"code",30),e(612," PoMenuFilter"),n()(),t(613,"td",22),e(614,"-"),n(),t(615,"td",23)(616,"em")(617,"strong"),e(618,"(opcional)"),n()(),t(619,"p"),e(620,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 utilizado para realizar o filtro de itens do
menu quando realizar uma busca. Caso haja a necessidade de customiza\xE7\xE3o, pode ser informado um
servi\xE7o implementando a interface `),t(621,"code"),e(622,"PoMenuFilter"),n(),e(623,"."),n(),t(624,"p"),e(625,`Caso utilizada uma URL, o servi\xE7o deve retornar os dados conforme o
`),t(626,"a",31),e(627,"Guia de implementa\xE7\xE3o de APIs"),n(),e(628," do PO UI."),n(),t(629,"p"),e(630,"Quando utilizada uma URL de servi\xE7o, ser\xE1 realizado um "),t(631,"em"),e(632,"GET"),n(),e(633,` na URL informada, passando o valor digitado
no par\xE2metro `),t(634,"code"),e(635,"search"),n(),e(636,", veja exemplo:"),n(),t(637,"blockquote")(638,"p"),e(639,"O filtro no servi\xE7o ser\xE1 realizado caso contenha no m\xEDnimo tr\xEAs caracteres no campo de busca, por exemplo "),t(640,"code"),e(641,"tot"),n(),e(642,"."),n()(),t(643,"pre")(644,"code"),e(645,`<po-menu p-service="/api/v1/fnd/menu">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas`),n()(),t(646,"blockquote")(647,"p"),e(648,"\xC9 necess\xE1rio que propriedade "),t(649,"code"),e(650,"p-filter"),n(),e(651," esteja habilitada."),n()()()(),t(652,"tr",16)(653,"td",17)(654,"div",18)(655,"span",19),e(656," p-short-logo"),o(657,"br"),n()()(),t(658,"td",20)(659,"code",27),e(660,"string"),n()(),t(661,"td",22),e(662,"-"),n(),t(663,"td",23)(664,"em")(665,"strong"),e(666,"(opcional)"),n()(),t(667,"p"),e(668,"Caminho para a logomarca, que ser\xE1 exibida quando o componente estiver colapsado, localizada na parte superior."),n(),t(669,"blockquote")(670,"p")(671,"strong"),e(672,"Importante:"),n()()(),t(673,"ul")(674,"li"),e(675,"Caso esta propriedade estiver indefinida ou inv\xE1lida passa a assumir o valor informado na propriedade "),t(676,"code"),e(677,"p-logo"),n(),e(678,` e na aus\xEAncia desta o
espa\xE7o para logomarca ser\xE1 removido.`),n(),t(679,"li"),e(680,"Como boa pr\xE1tica, indica-se utilizar imagens com at\xE9 "),t(681,"code"),e(682,"48px"),n(),e(683," de altura e "),t(684,"code"),e(685,"48px"),n(),e(686,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),n(),t(687,"li"),e(688,"Caso n\xE3o informar um valor, esta propriedade passa a assumir o valor informado na propriedade "),t(689,"code"),e(690,"p-logo"),n(),e(691,"."),n()()()()(),t(692,"h3",12),e(693,"M\xE9todos"),n(),t(694,"table",32)(695,"tr",16)(696,"th",33)(697,"div",18)(698,"h4")(699,"span",19),e(700," collapse "),n()()()()(),t(701,"tr",23)(702,"td",23)(703,"p"),o(704,"a",34),n(),t(705,"p"),e(706,"*M\xE9todo para colapsar (retrair) o menu."),n()()()(),o(707,"br"),t(708,"table",32)(709,"tr",16)(710,"th",33)(711,"div",18)(712,"h4")(713,"span",19),e(714," expand "),n()()()()(),t(715,"tr",23)(716,"td",23)(717,"p"),o(718,"a",35),n(),t(719,"p"),e(720,"*M\xE9todo para expandir (aumentar) o menu."),n()()()(),o(721,"br"),t(722,"table",32)(723,"tr",16)(724,"th",33)(725,"div",18)(726,"h4")(727,"span",19),e(728," toggle "),n()()()()(),t(729,"tr",23)(730,"td",23)(731,"p"),o(732,"a",36),e(733,`
*M\xE9todo que colapsa e expande o menu alternadamente.`),n(),t(734,"blockquote")(735,"p"),e(736,"*Os m\xE9todos apenas v\xE3o colapsar/expandir o menu se:"),n()(),t(737,"ul")(738,"li"),e(739,"Todos os itens de menu tiverem valor nas propriedades "),t(740,"code"),e(741,"icon"),n(),e(742," e "),t(743,"code"),e(744,"shortLabel"),n(),e(745,"."),n()()()()(),o(746,"br"),t(747,"h3"),e(748,"Interfaces"),n(),t(749,"h4",37)(750,"code",5),e(751,"PoMenuFilter"),n()(),t(752,"div",2)(753,"p"),e(754,"Interface do servi\xE7o utilizado no componente "),t(755,"code"),e(756,"po-menu"),n(),e(757,"."),n()(),t(758,"h4",12),e(759,"M\xE9todos"),n(),t(760,"table",32)(761,"tr",16)(762,"th",33)(763,"div",18)(764,"h4")(765,"span",19),e(766," getFilteredData "),n()()()()(),t(767,"tr",23)(768,"td",23)(769,"p"),e(770,"M\xE9todo respons\xE1vel por retornar um "),t(771,"em"),e(772,"Observable"),n(),e(773," que retorne uma lista de objetos que seguem a interface "),t(774,"code"),e(775,"PoMenuItemFiltered"),n(),e(776,`.
Ser\xE1 informado por par\xE2metro o valor a ser pesquisado e as informa\xE7\xF5es adicionais preenchidas atrav\xE9s da propriedade `),t(777,"code"),e(778,"p-params"),n(),e(779,"."),n()()()(),t(780,"h5")(781,"b"),e(782,"Par\xE2metros"),n()(),t(783,"table",13)(784,"tr",14)(785,"th",15),e(786,"Nome"),n(),t(787,"th",15),e(788,"Tipo"),n(),t(789,"th",15),e(790,"Descri\xE7\xE3o"),n()(),t(791,"tr",16)(792,"td",17),e(793," search"),n(),t(794,"td",20)(795,"code",38),e(796," string "),n()(),t(797,"td",23)(798,"p"),e(799,"Valor informado no campo de busca dos itens de menus."),n()()(),t(800,"tr",16)(801,"td",17),e(802," params"),n(),t(803,"td",20)(804,"code",38),e(805," any "),n()(),t(806,"td",23)(807,"p"),e(808,"Valor informado atrav\xE9s da propriedade "),t(809,"code"),e(810,"p-params"),n(),e(811,"."),n()()()(),o(812,"br"),t(813,"h4",37)(814,"code",5),e(815,"PoMenuItemBadge"),n()(),t(816,"div",2)(817,"p"),e(818,"Interface do "),t(819,"em"),e(820,"badge"),n(),e(821," utilizado no "),t(822,"code"),e(823,"po-menu"),n(),e(824,"."),n()(),t(825,"h4",12),e(826,"Propriedades"),n(),t(827,"table",13)(828,"tr",14)(829,"th",15),e(830,"Nome"),n(),t(831,"th",15),e(832,"Tipo"),n(),t(833,"th",15),e(834,"Descri\xE7\xE3o"),n()(),t(835,"tr",16)(836,"td",17)(837,"div",18)(838,"span",19),e(839," color"),o(840,"br"),n()()(),t(841,"td",20)(842,"code",27),e(843,"string"),n()(),t(844,"td",23)(845,"em")(846,"strong"),e(847,"(opcional)"),n()(),t(848,"p"),e(849,"Define a cor do "),t(850,"em"),e(851,"badge"),n(),e(852," e aceita os valores:"),n(),t(853,"p"),o(854,"span",39),t(855,"code"),e(856,"color-01"),n()(),t(857,"p"),o(858,"span",40),t(859,"code"),e(860,"color-02"),n()(),t(861,"p"),o(862,"span",41),t(863,"code"),e(864,"color-03"),n()(),t(865,"p"),o(866,"span",42),t(867,"code"),e(868,"color-04"),n()(),t(869,"p"),o(870,"span",43),t(871,"code"),e(872,"color-05"),n()(),t(873,"p"),o(874,"span",44),t(875,"code"),e(876,"color-06"),n()(),t(877,"p"),o(878,"span",45),t(879,"code"),e(880,"color-07"),n()(),t(881,"p"),o(882,"span",46),t(883,"code"),e(884,"color-08"),n()(),t(885,"p"),o(886,"span",47),t(887,"code"),e(888,"color-09"),n()(),t(889,"p"),o(890,"span",48),t(891,"code"),e(892,"color-10"),n()(),t(893,"p"),o(894,"span",49),t(895,"code"),e(896,"color-11"),n()(),t(897,"p"),o(898,"span",50),t(899,"code"),e(900,"color-12"),n()()()(),t(901,"tr",16)(902,"td",17)(903,"div",18)(904,"span",19),e(905," value"),o(906,"br"),n()()(),t(907,"td",20)(908,"code",51),e(909,"number"),n()(),t(910,"td",23)(911,"p"),e(912,"N\xFAmero exibido no "),t(913,"em"),e(914,"badge"),n(),e(915,", caso o mesmo seja maior que "),t(916,"strong"),e(917,"9"),n(),e(918," o mesmo exibe "),t(919,"strong"),e(920,"9+"),n(),e(921,"."),n()()()(),t(922,"h4",37)(923,"code",5),e(924,"PoMenuItemFiltered"),n()(),t(925,"div",2)(926,"p"),e(927,"Interface do objeto que deve conter na cole\xE7\xE3o de itens filtrados no componente "),t(928,"code"),e(929,"po-menu"),n(),e(930,"."),n()(),t(931,"h4",12),e(932,"Propriedades"),n(),t(933,"table",13)(934,"tr",14)(935,"th",15),e(936,"Nome"),n(),t(937,"th",15),e(938,"Tipo"),n(),t(939,"th",15),e(940,"Descri\xE7\xE3o"),n()(),t(941,"tr",16)(942,"td",17)(943,"div",18)(944,"span",19),e(945," action"),o(946,"br"),n()()(),t(947,"td",20)(948,"code",52),e(949,"() => void"),n()(),t(950,"td",23)(951,"p"),e(952,"A\xE7\xE3o a ser executada quando o item de menu for clicado."),n()()(),t(953,"tr",16)(954,"td",17)(955,"div",18)(956,"span",19),e(957," label"),o(958,"br"),n()()(),t(959,"td",20)(960,"code",27),e(961,"string"),n()(),t(962,"td",23)(963,"p"),e(964,"Texto do item de menu."),n()()(),t(965,"tr",16)(966,"td",17)(967,"div",18)(968,"span",19),e(969," link"),o(970,"br"),n()()(),t(971,"td",20)(972,"code",27),e(973,"string"),n()(),t(974,"td",23)(975,"p"),e(976,"Link* para redirecionamento no clique do item do menu, podendo ser um "),t(977,"em"),e(978,"link"),n(),e(979," interno ou externo."),n()()()(),t(980,"h4",37)(981,"code",5),e(982,"PoMenuItem"),n()(),t(983,"div",2)(984,"p"),e(985,"Interface para os itens de menu do componente po-menu."),n()(),t(986,"h4",12),e(987,"Propriedades"),n(),t(988,"table",13)(989,"tr",14)(990,"th",15),e(991,"Nome"),n(),t(992,"th",15),e(993,"Tipo"),n(),t(994,"th",15),e(995,"Descri\xE7\xE3o"),n()(),t(996,"tr",16)(997,"td",17)(998,"div",18)(999,"span",19),e(1e3," action"),o(1001,"br"),n()()(),t(1002,"td",20)(1003,"code",53),e(1004,"Function"),n()(),t(1005,"td",23)(1006,"em")(1007,"strong"),e(1008,"(opcional)"),n()(),t(1009,"p"),e(1010,"A\xE7\xE3o personalizada para clique do item de menu."),n()()(),t(1011,"tr",16)(1012,"td",17)(1013,"div",18)(1014,"span",19),e(1015," badge"),o(1016,"br"),n()()(),t(1017,"td",20)(1018,"code",54),e(1019,"PoMenuItemBadge"),n()(),t(1020,"td",23)(1021,"em")(1022,"strong"),e(1023,"(opcional)"),n()(),t(1024,"p"),e(1025,"Badge do item de menu."),n(),t(1026,"p"),e(1027,"Ao adicion\xE1-lo em um subitem (filho) todos os itens ascendentes (pai) ser\xE3o marcados com um ponto vermelho."),n(),t(1028,"blockquote")(1029,"p"),e(1030,"O "),t(1031,"code"),e(1032,"po-badge"),n(),e(1033," s\xF3 ser\xE1 exibido caso o item do menu n\xE3o possua "),t(1034,"code"),e(1035,"subItems"),n(),e(1036," e seu valor seja maior ou igual a 0."),n()()()(),t(1037,"tr",16)(1038,"td",17)(1039,"div",18)(1040,"span",19),e(1041," icon"),o(1042,"br"),n()()(),t(1043,"td",20)(1044,"code",27),e(1045,"string "),n(),t(1046,"code",55),e(1047," TemplateRef<void>"),n()(),t(1048,"td",23)(1049,"em")(1050,"strong"),e(1051,"(opcional)"),n()(),t(1052,"p"),e(1053,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(1054,"a",56),e(1055,"Biblioteca de \xEDcones"),n(),e(1056,". conforme exemplo abaixo:"),n(),t(1057,"pre")(1058,"code"),e(1059,`<po-menu
 [p-menus]="[{ link: '/', label: 'PO ICON', icon: 'ph ph-newspaper' }]">
</po-menu>`),n()(),t(1060,"p"),e(1061,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),n(),t(1062,"pre")(1063,"code"),e(1064,`<po-menu
 [p-menus]="[{ link: '/', label: 'FA ICON', icon: 'fa fa-podcast' }]">
</po-menu>`),n()(),t(1065,"p"),e(1066,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(1067,"code"),e(1068,"TemplateRef"),n(),e(1069,`, conforme exemplo abaixo:
component.html:`),n(),t(1070,"pre")(1071,"code"),e(1072,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-menu [p-menus]="myProperty"></po-menu>`),n()(),t(1073,"p"),e(1074,"component.ts:"),n(),t(1075,"pre")(1076,"code"),e(1077,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   link: '/',
   label: 'Icon',
   icon: this.iconTemplate
 }
];`),n()(),t(1078,"blockquote")(1079,"p"),e(1080,`S\xE3o exibidos apenas no primeiro n\xEDvel de menu e ser\xE3o vis\xEDveis apenas se todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones.
O menu colapsado tamb\xE9m aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu possu\xEDrem \xEDcones e textos curtos.`),n()()()(),t(1081,"tr",16)(1082,"td",17)(1083,"div",18)(1084,"span",19),e(1085," label"),o(1086,"br"),n()()(),t(1087,"td",20)(1088,"code",27),e(1089,"string"),n()(),t(1090,"td",23)(1091,"p"),e(1092,"Texto do item de menu."),n()()(),t(1093,"tr",16)(1094,"td",17)(1095,"div",18)(1096,"span",19),e(1097," link"),o(1098,"br"),n()()(),t(1099,"td",20)(1100,"code",27),e(1101,"string"),n()(),t(1102,"td",23)(1103,"em")(1104,"strong"),e(1105,"(opcional)"),n()(),t(1106,"p"),e(1107,"Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo."),n()()(),t(1108,"tr",16)(1109,"td",17)(1110,"div",18)(1111,"span",19),e(1112," shortLabel"),o(1113,"br"),n()()(),t(1114,"td",20)(1115,"code",27),e(1116,"string"),n()(),t(1117,"td",23)(1118,"em")(1119,"strong"),e(1120,"(opcional)"),n()(),t(1121,"p"),e(1122,`Texto curto exibido atrav\xE9s de um tooltip para o item que aparece quando o menu estiver colapsado.
Se colapsado, aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu que possu\xEDrem \xEDcones e textos curtos.`),n()()(),t(1123,"tr",16)(1124,"td",17)(1125,"div",18)(1126,"span",19),e(1127," subItems"),o(1128,"br"),n()()(),t(1129,"td",20)(1130,"code",57),e(1131,"Array<PoMenuItem>"),n()(),t(1132,"td",23)(1133,"em")(1134,"strong"),e(1135,"(opcional)"),n()(),t(1136,"p"),e(1137,"Lista de sub-items, criando novos n\xEDveis dentro do menu. O n\xFAmero m\xE1ximo de n\xEDveis do menu \xE9 igual a 4."),n()()()()())},dependencies:[y],encapsulation:2})}return a})();var Pe=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(I(ne),I(ie))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Menu",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(l,i){l&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),o(3,"sample-po-menu-doc"),n(),t(4,"po-tab",3),o(5,"sample-po-menu-basic-view")(6,"sample-po-menu-labs-view")(7,"sample-po-menu-human-resources-view"),n()()()),l&2&&(p("p-actions",i.actions),d(2),p("p-active",i.activeTab.includes("doc")),d(2),p("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[_,P,w,Se,xe,Me,Ce],encapsulation:2})}return a})();var He=[{path:"",component:Pe}],we=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=V({type:a});static \u0275inj=D({imports:[B.forChild(He),B]})}return a})();var gt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=V({type:a});static \u0275inj=D({imports:[be,we]})}return a})();export{gt as DocPoMenuModule};
