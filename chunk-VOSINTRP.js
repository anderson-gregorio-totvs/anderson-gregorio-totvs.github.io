import{$ as M,$a as I,$b as Z,$c as te,$d as pe,Ca as q,Cd as le,Da as W,Ea as H,F as b,Fa as A,G as v,Ga as n,Ia as V,Ka as T,La as P,Lb as R,Ma as x,Mb as G,Nb as J,Oa as z,Ob as Q,Od as k,Pa as w,Pb as U,T as s,U as F,Vd as ae,Wb as K,Wd as re,Xd as f,Yb as X,Yd as g,Zb as O,_ as u,_b as Y,_d as y,a as j,gd as ne,ha as d,ka as C,md as ie,na as t,oa as e,oc as $,pa as a,re as E,se,ta as D,ua as h,y as L,yd as oe,zc as ee}from"./chunk-23IW53AA.js";var Ve=()=>({label:"Adicionar",value:1.1}),me=l=>[l],Te=l=>({label:"Gerenciador de usu\xE1rios",value:1,subItems:l}),de=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275cmp=u({type:l,selectors:[["sample-po-tree-view-basic"]],standalone:!1,decls:1,vars:8,consts:[[3,"p-items"]],template:function(o,i){o&1&&a(0,"po-tree-view",0),o&2&&d("p-items",w(6,me,w(4,Te,w(2,me,z(1,Ve)))))},dependencies:[y],encapsulation:2})}return l})();var xe=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=u({type:l,selectors:[["sample-po-tree-view-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Tree View Basic"),e(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-tree-view-basic/sample-po-tree-view-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-tree-view
  [p-items]="[{ label: 'Gerenciador de usu\xE1rios', value: 1, subItems: [{ label: 'Adicionar', value: 1.1 }] }]"
>
</po-tree-view>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-tree-view-basic/sample-po-tree-view-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-tree-view-basic',
  templateUrl: 'sample-po-tree-view-basic.component.html',
  standalone: false
})
export class SamplePoTreeViewBasicComponent {}
`),e()()()()(),t(21,"div",10),a(22,"sample-po-tree-view-basic"),e(),a(23,"hr")),o&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),V(" ",i.sampleCodeButtonLabel,""),s(),d("ngClass",w(4,xe,i.hideSampleCodeTabs)))},dependencies:[I,E,f,g,de],encapsulation:2})}return l})();var ue=(()=>{class l{event;items;itemProperties;parent;parentList;selectable;treeViewItem;maxLevel=4;singleSelect=!1;itemPropertiesOptions=[{value:"selected",label:"Selected"},{value:"expanded",label:"Expanded"},{value:"disable-selection",label:"Disable Selection"}];ngOnInit(){this.restore()}add(r){r.selected=this.itemProperties.includes("selected"),r.expanded=this.itemProperties.includes("expanded"),r.isSelectable=!this.itemProperties.includes("disable-selection");let o=j({},r);if(!this.parent)this.items=[...this.items,o];else{let i=this.getTreeViewItemNode(this.items,this.parent);i.subItems||(i.subItems=[]),i.subItems=[...i.subItems,o]}this.items=[].concat(this.items),this.parentList=this.updateParentList(this.items)}changeEvent(r,o){this.event=`${r}: ${JSON.stringify(o)}`}restore(){this.event=void 0,this.items=[],this.parent=void 0,this.parentList=[],this.itemProperties=[],this.selectable=void 0,this.treeViewItem={},this.maxLevel=4}getTreeViewItemNode(r,o){let i;if(r){for(let m of r)if(m.value===o){i=m;break}else i||(i=this.getTreeViewItemNode(m.subItems,o));return i}}updateParentList(r,o=0,i=[],m){return r.forEach(c=>{let{label:p,value:Ce}=c;i.push({label:`${"-".repeat(o)} ${p}`,value:Ce}),c.subItems&&(this.updateParentList(c.subItems,++o,i,c),--o),o=m?o:0}),i}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=u({type:l,selectors:[["sample-po-tree-view-labs"]],standalone:!1,decls:23,vars:15,consts:[["treeViewItemForm","ngForm"],[3,"p-collapsed","p-expanded","p-selected","p-unselected","p-items","p-selectable","p-max-level","p-single-select"],["p-label","Events"],[1,"po-row"],["p-label","Event",3,"p-value"],["p-label","Po Tree View Config"],["name","level","p-label","Max Level",1,"po-md-4",3,"ngModelChange","ngModel"],["name","selectable","p-label","Selectable",1,"po-md-4",3,"ngModelChange","ngModel"],["name","singleSelect","p-label","Single Select",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Po Tree View Item"],["name","parent","p-label","Parent Item","p-placeholder","Add tree view item",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","label","p-label","Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","value","p-label","Value","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","itemProperties","p-columns","3","p-label","Item Properties",1,"po-md-9",3,"ngModelChange","ngModel","p-options"],["p-label","Add",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,i){if(o&1){let m=D();t(0,"po-tree-view",1),h("p-collapsed",function(p){return b(m),v(i.changeEvent("p-collapsed",p))})("p-expanded",function(p){return b(m),v(i.changeEvent("p-expanded",p))})("p-selected",function(p){return b(m),v(i.changeEvent("p-selected",p))})("p-unselected",function(p){return b(m),v(i.changeEvent("p-unselected",p))}),e(),a(1,"po-divider",2),t(2,"div",3),a(3,"po-info",4),e(),a(4,"po-divider",5),t(5,"div",3)(6,"po-input",6),x("ngModelChange",function(p){return b(m),P(i.maxLevel,p)||(i.maxLevel=p),v(p)}),e(),t(7,"po-switch",7),x("ngModelChange",function(p){return b(m),P(i.selectable,p)||(i.selectable=p),v(p)}),e(),t(8,"po-switch",8),x("ngModelChange",function(p){return b(m),P(i.singleSelect,p)||(i.singleSelect=p),v(p)}),e()(),a(9,"po-divider",9),t(10,"form",null,0)(12,"div",3)(13,"po-select",10),x("ngModelChange",function(p){return b(m),P(i.parent,p)||(i.parent=p),v(p)}),e(),t(14,"po-input",11),x("ngModelChange",function(p){return b(m),P(i.treeViewItem.label,p)||(i.treeViewItem.label=p),v(p)}),e(),t(15,"po-input",12),x("ngModelChange",function(p){return b(m),P(i.treeViewItem.value,p)||(i.treeViewItem.value=p),v(p)}),e()(),t(16,"div",3)(17,"po-checkbox-group",13),x("ngModelChange",function(p){return b(m),P(i.itemProperties,p)||(i.itemProperties=p),v(p)}),e()(),t(18,"div",3)(19,"po-button",14),h("p-click",function(){b(m);let p=A(11);return i.add(i.treeViewItem),p.reset(),v(i.itemProperties=[])}),e()()(),a(20,"hr"),t(21,"div",3)(22,"po-button",15),h("p-click",function(){return b(m),v(i.restore())}),e()()}if(o&2){let m=A(11);d("p-items",i.items)("p-selectable",i.selectable)("p-max-level",i.maxLevel)("p-single-select",i.singleSelect),s(3),d("p-value",i.event),s(3),T("ngModel",i.maxLevel),s(),T("ngModel",i.selectable),s(),T("ngModel",i.singleSelect),s(5),T("ngModel",i.parent),d("p-options",i.parentList),s(),T("ngModel",i.treeViewItem.label),s(),T("ngModel",i.treeViewItem.value),s(2),T("ngModel",i.itemProperties),d("p-options",i.itemPropertiesOptions),s(2),d("p-disabled",m.invalid)}},dependencies:[U,R,G,Q,J,$,Y,ee,ie,oe,te,le,y],encapsulation:2})}return l})();var _e=l=>({"docs-sample-code-tabs":l}),be=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=u({type:l,selectors:[["sample-po-tree-view-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Tree View Labs"),e(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-tree-view-labs/sample-po-tree-view-labs.component.html"),e(),t(13,"pre",7),n(14,`<po-tree-view
  [p-items]="items"
  [p-selectable]="selectable"
  (p-collapsed)="changeEvent('p-collapsed', $event)"
  (p-expanded)="changeEvent('p-expanded', $event)"
  (p-selected)="changeEvent('p-selected', $event)"
  (p-unselected)="changeEvent('p-unselected', $event)"
  [p-max-level]="maxLevel"
  [p-single-select]="singleSelect"
>
</po-tree-view>

<po-divider p-label="Events"></po-divider>

<div class="po-row">
  <po-info p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider p-label="Po Tree View Config"></po-divider>

<div class="po-row">
  <po-input class="po-md-4" name="level" [(ngModel)]="maxLevel" p-label="Max Level"> </po-input>
  <po-switch class="po-md-4" name="selectable" [(ngModel)]="selectable" p-label="Selectable"> </po-switch>
  <po-switch class="po-md-4" name="singleSelect" [(ngModel)]="singleSelect" p-label="Single Select"> </po-switch>
</div>

<po-divider p-label="Po Tree View Item"></po-divider>

<form #treeViewItemForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-4"
      name="parent"
      [(ngModel)]="parent"
      p-label="Parent Item"
      p-placeholder="Add tree view item"
      [p-options]="parentList"
    >
    </po-select>

    <po-input class="po-md-4" name="label" [(ngModel)]="treeViewItem.label" p-label="Label" p-required> </po-input>

    <po-input class="po-md-4" name="value" [(ngModel)]="treeViewItem.value" p-label="Value" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-9"
      name="itemProperties"
      [(ngModel)]="itemProperties"
      p-columns="3"
      p-label="Item Properties"
      [p-options]="itemPropertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Add"
      [p-disabled]="treeViewItemForm.invalid"
      (p-click)="add(treeViewItem); treeViewItemForm.reset(); this.itemProperties = []"
    >
    </po-button>
  </div>
</form>

<hr />

<div class="po-row">
  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-tree-view-labs/sample-po-tree-view-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoSelectOption, PoTreeViewItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tree-view-labs',
  templateUrl: 'sample-po-tree-view-labs.component.html',
  standalone: false
})
export class SamplePoTreeViewLabsComponent implements OnInit {
  event: string;
  items: Array<PoTreeViewItem>;
  itemProperties: Array<string>;
  parent: string;
  parentList: Array<PoSelectOption>;
  selectable: boolean;
  treeViewItem: PoTreeViewItem;
  maxLevel: number = 4;
  singleSelect: boolean = false;

  readonly itemPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'selected', label: 'Selected' },
    { value: 'expanded', label: 'Expanded' },
    { value: 'disable-selection', label: 'Disable Selection' }
  ];

  ngOnInit() {
    this.restore();
  }

  add(treeViewItem: PoTreeViewItem) {
    treeViewItem.selected = this.itemProperties.includes('selected');
    treeViewItem.expanded = this.itemProperties.includes('expanded');
    treeViewItem.isSelectable = !this.itemProperties.includes('disable-selection');

    const treeViewItemClone = { ...treeViewItem };

    if (!this.parent) {
      this.items = [...this.items, treeViewItemClone];
    } else {
      const treeViewItemNode = this.getTreeViewItemNode(this.items, this.parent);

      if (!treeViewItemNode.subItems) {
        treeViewItemNode.subItems = [];
      }

      treeViewItemNode.subItems = [...treeViewItemNode.subItems, treeViewItemClone];
    }

    this.items = [].concat(this.items);
    this.parentList = this.updateParentList(this.items);
  }

  changeEvent(event: string, treeViewItem: PoTreeViewItem) {
    this.event = \`\${event}: \${JSON.stringify(treeViewItem)}\`;
  }

  restore() {
    this.event = undefined;
    this.items = [];
    this.parent = undefined;
    this.parentList = [];
    this.itemProperties = [];
    this.selectable = undefined;
    this.treeViewItem = <any>{};
    this.maxLevel = 4;
  }

  private getTreeViewItemNode(items: Array<PoTreeViewItem>, value: string) {
    let treeViewItemNode: PoTreeViewItem;

    if (!items) {
      return;
    }

    for (const item of items) {
      if (item.value === value) {
        treeViewItemNode = item;
        break;
      } else if (!treeViewItemNode) {
        treeViewItemNode = this.getTreeViewItemNode(item.subItems, value);
      }
    }

    return treeViewItemNode;
  }

  private updateParentList(
    items: Array<PoTreeViewItem>,
    level = 0,
    parentList = [],
    parentItem?: PoTreeViewItem
  ): Array<PoSelectOption> {
    items.forEach(item => {
      const { label, value } = item;

      parentList.push({ label: \`\${'-'.repeat(level)} \${label}\`, value });

      if (item.subItems) {
        this.updateParentList(item.subItems, ++level, parentList, item);
        --level;
      }

      level = !parentItem ? 0 : level;
    });

    return parentList;
  }
}
`),e()()()()(),t(21,"div",10),a(22,"sample-po-tree-view-labs"),e(),a(23,"hr")),o&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),V(" ",i.sampleCodeButtonLabel,""),s(),d("ngClass",w(4,_e,i.hideSampleCodeTabs)))},dependencies:[I,E,f,g,ue],encapsulation:2})}return l})();var ve=(()=>{class l{items=[{label:"my_project",value:1,expanded:!0,subItems:[{label:"angular.json",value:121},{label:"browserslist",value:122,subItems:[{label:"e2e",value:1223,subItems:[{label:"protractor.conf.js",value:12231},{label:"src",value:12232},{label:"tsconfig.json",value:12233}]}]},{label:"karma.conf.js",value:123},{label:"node_modules",value:124},{label:"package.json",value:125},{label:"package-lock.json",value:126},{label:"README.md",value:127},{label:"src",value:128,subItems:[{label:"app",value:1281},{label:"assets",value:1282},{label:"environments",value:1283},{label:"favicon.ico",value:1284},{label:"index.html",value:1285},{label:"main.ts",value:1286},{label:"polyfills.ts",value:1287},{label:"styles.css",value:1288},{label:"test.ts",value:1289}]},{label:"tsconfig.app.json",value:129},{label:"tsconfig.json",value:130},{label:"tsconfig.spec.json",value:131},{label:"eslint.json",value:132}]}];static \u0275fac=function(o){return new(o||l)};static \u0275cmp=u({type:l,selectors:[["sample-po-tree-view-folder-structure"]],standalone:!1,decls:4,vars:1,consts:[["p-title","Angular folder structure"],[1,"po-mb-4","po-ml-1","po-text-color-neutral-dark-40"],[1,"po-lg-4","po-md-6",3,"p-items"]],template:function(o,i){o&1&&(t(0,"po-page-default",0)(1,"p",1),n(2," This is the basic structure created using the Angular cli: "),e(),a(3,"po-tree-view",2),e()),o&2&&(s(3),d("p-items",i.items))},dependencies:[k,y],encapsulation:2})}return l})();var Me=l=>({"docs-sample-code-tabs":l}),he=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=u({type:l,selectors:[["sample-po-tree-view-folder-structure-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Tree View - Folder Structure"),e(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.html"),e(),t(13,"pre",7),n(14,`<po-page-default p-title="Angular folder structure">
  <p class="po-mb-4 po-ml-1 po-text-color-neutral-dark-40">
    This is the basic structure created using the Angular cli:
  </p>

  <po-tree-view class="po-lg-4 po-md-6" [p-items]="items"> </po-tree-view>
</po-page-default>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

import { PoTreeViewItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tree-view-folder-structure',
  templateUrl: 'sample-po-tree-view-folder-structure.component.html',
  standalone: false
})
export class SamplePoTreeViewFolderStructureComponent {
  readonly items: Array<PoTreeViewItem> = [
    {
      label: 'my_project',
      value: 1,
      expanded: true,
      subItems: [
        { label: 'angular.json', value: 121 },
        {
          label: 'browserslist',
          value: 122,
          subItems: [
            {
              label: 'e2e',
              value: 1223,
              subItems: [
                { label: 'protractor.conf.js', value: 12231 },
                { label: 'src', value: 12232 },
                { label: 'tsconfig.json', value: 12233 }
              ]
            }
          ]
        },
        { label: 'karma.conf.js', value: 123 },
        { label: 'node_modules', value: 124 },
        { label: 'package.json', value: 125 },
        { label: 'package-lock.json', value: 126 },
        { label: 'README.md', value: 127 },
        {
          label: 'src',
          value: 128,
          subItems: [
            { label: 'app', value: 1281 },
            { label: 'assets', value: 1282 },
            { label: 'environments', value: 1283 },
            { label: 'favicon.ico', value: 1284 },
            { label: 'index.html', value: 1285 },
            { label: 'main.ts', value: 1286 },
            { label: 'polyfills.ts', value: 1287 },
            { label: 'styles.css', value: 1288 },
            { label: 'test.ts', value: 1289 }
          ]
        },
        { label: 'tsconfig.app.json', value: 129 },
        { label: 'tsconfig.json', value: 130 },
        { label: 'tsconfig.spec.json', value: 131 },
        { label: 'eslint.json', value: 132 }
      ]
    }
  ];
}
`),e()()()()(),t(21,"div",10),a(22,"sample-po-tree-view-folder-structure"),e(),a(23,"hr")),o&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),V(" ",i.sampleCodeButtonLabel,""),s(),d("ngClass",w(4,Me,i.hideSampleCodeTabs)))},dependencies:[I,E,f,g,ve],encapsulation:2})}return l})();var Be=["stepper"],we=(()=>{class l{stepper;columnsItemsSelected=[{property:"item"}];confirmed=!1;itemsListSelected=[];items=[{label:"Condiments",value:"condiments",subItems:[{label:"Extra virgin Olive",value:"extraVirginOlive"},{label:"Mayonnaise",value:"Mayonnaise"},{label:"Tomato ketchup",value:"tomatoKetchup"},{label:"Soda",value:"soda"}]},{label:"Drinks",value:"drinks",subItems:[{label:"Orange juice",value:"orangeJuice"},{label:"Grape juice",value:"grapeJuice"},{label:"Beer",value:"beer"},{label:"Wine",value:"wine"},{label:"Soda",value:"soda"}]},{label:"Grains",value:122,subItems:[{label:"Black bean",value:"blackBean"},{label:"Chickpeas",value:"chickpeas"},{label:"Lentil",value:"lentil"},{label:"Pea",value:"pea"}]},{label:"Personal hygiene",value:"personalHygiene",subItems:[{label:"Body wash",value:"bodyWash"},{label:"Deodorant",value:"deodorant"},{label:"Shampoo",value:"deodorant"},{label:"Conditioner",value:"conditioner"},{label:"Sunscreen lotion",value:"sunscreenLotion"}]},{label:"Frozen foods",value:"frozenFoods",subItems:[{label:"Hamburguer",value:"hamburguer"},{label:"Lasagna",value:"lasagna"},{label:"Sandwiches",value:"sandwiches"}]}];addItem(r){r.subItems?r.subItems.forEach(o=>{this.itemsListSelected.some(i=>i.item===o.label)||this.itemsListSelected.push({item:o.label})}):this.itemsListSelected.some(o=>o.item===r.label)||this.itemsListSelected.push({item:r.label})}checkOut(){this.confirmed=!0,this.stepper.next()}isConfirmed(){return!!this.confirmed}removeItem(r){if(r.subItems){let o=r.subItems.map(i=>i.label);this.itemsListSelected=this.itemsListSelected.filter(i=>!o.includes(i.item))}else this.itemsListSelected=this.itemsListSelected.filter(o=>r.label!==o.item)}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=u({type:l,selectors:[["sample-po-tree-view-supermarket"]],viewQuery:function(o,i){if(o&1&&q(Be,7),o&2){let m;W(m=H())&&(i.stepper=m.first)}},standalone:!1,decls:18,vars:6,consts:[["stepper",""],["p-title","Welcome to the PO Supermarket"],[1,"po-offset-md-3","po-offset-lg-2","po-offset-xl-2"],[1,"po-row"],["p-step-icons","",1,"po-md-9","po-lg-8","po-mb-1"],["p-label","Step 1"],[1,"po-font-subtitle"],["p-selectable","",3,"p-selected","p-unselected","p-items"],["p-label","Step 2",3,"p-can-active-next-step"],["p-primary-label","Confirm","p-title","Selected items",3,"p-primary-action","p-disabled"],["p-striped","",3,"p-columns","p-items","p-hide-table-search"],["p-label","Step 3"],[1,"po-row","po-font-display"],["p-icon","po-icon ph ph-check"]],template:function(o,i){if(o&1){let m=D();t(0,"po-page-default",1)(1,"div",2)(2,"div",3)(3,"po-stepper",4,0)(5,"po-step",5)(6,"p",6),n(7,"Please, select your items:"),e(),t(8,"po-tree-view",7),h("p-selected",function(p){return b(m),v(i.addItem(p))})("p-unselected",function(p){return b(m),v(i.removeItem(p))}),e()(),t(9,"po-step",8)(10,"po-widget",9),h("p-primary-action",function(){return b(m),v(i.checkOut())}),a(11,"po-table",10),e()(),t(12,"po-step",11)(13,"po-widget")(14,"div",12)(15,"p"),n(16,"Order dispatched"),e(),a(17,"po-icon",13),e()()()()()()()}o&2&&(s(8),d("p-items",i.items),s(),d("p-can-active-next-step",i.isConfirmed.bind(i)),s(),d("p-disabled",i.itemsListSelected.length<1),s(),d("p-columns",i.columnsItemsSelected)("p-items",i.itemsListSelected)("p-hide-table-search",!1))},dependencies:[Z,k,ae,re,ne,y,pe],encapsulation:2})}return l})();var Ae=l=>({"docs-sample-code-tabs":l}),Se=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=u({type:l,selectors:[["sample-po-tree-view-supermarket-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Tree View - Supermarket"),e(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.html"),e(),t(13,"pre",7),n(14,`<po-page-default p-title="Welcome to the PO Supermarket">
  <div class="po-offset-md-3 po-offset-lg-2 po-offset-xl-2">
    <div class="po-row">
      <po-stepper #stepper p-step-icons class="po-md-9 po-lg-8 po-mb-1">
        <po-step p-label="Step 1">
          <p class="po-font-subtitle">Please, select your items:</p>

          <po-tree-view
            p-selectable
            [p-items]="items"
            (p-selected)="addItem($event)"
            (p-unselected)="removeItem($event)"
          >
          </po-tree-view>
        </po-step>

        <po-step p-label="Step 2" [p-can-active-next-step]="isConfirmed.bind(this)">
          <po-widget
            p-primary-label="Confirm"
            p-title="Selected items"
            [p-disabled]="itemsListSelected.length < 1"
            (p-primary-action)="checkOut()"
          >
            <po-table
              p-striped
              [p-columns]="columnsItemsSelected"
              [p-items]="itemsListSelected"
              [p-hide-table-search]="false"
            >
            </po-table>
          </po-widget>
        </po-step>

        <po-step p-label="Step 3">
          <po-widget>
            <div class="po-row po-font-display">
              <p>Order dispatched</p>
              <po-icon p-icon="po-icon ph ph-check"></po-icon>
            </div>
          </po-widget>
        </po-step>
      </po-stepper>
    </div>
  </div>
</po-page-default>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, ViewChild } from '@angular/core';

import { PoStepperComponent, PoTableColumn, PoTreeViewItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tree-view-supermarket',
  templateUrl: 'sample-po-tree-view-supermarket.component.html',
  standalone: false
})
export class SamplePoTreeViewSupermarketComponent {
  @ViewChild('stepper', { static: true }) stepper: PoStepperComponent;

  columnsItemsSelected: Array<PoTableColumn> = [{ property: 'item' }];
  confirmed: boolean = false;
  itemsListSelected: Array<any> = [];

  readonly items: Array<PoTreeViewItem> = [
    {
      label: 'Condiments',
      value: 'condiments',
      subItems: [
        { label: 'Extra virgin Olive', value: 'extraVirginOlive' },
        { label: 'Mayonnaise', value: 'Mayonnaise' },
        { label: 'Tomato ketchup', value: 'tomatoKetchup' },
        { label: 'Soda', value: 'soda' }
      ]
    },
    {
      label: 'Drinks',
      value: 'drinks',
      subItems: [
        { label: 'Orange juice', value: 'orangeJuice' },
        { label: 'Grape juice', value: 'grapeJuice' },
        { label: 'Beer', value: 'beer' },
        { label: 'Wine', value: 'wine' },
        { label: 'Soda', value: 'soda' }
      ]
    },
    {
      label: 'Grains',
      value: 122,
      subItems: [
        { label: 'Black bean', value: 'blackBean' },
        { label: 'Chickpeas', value: 'chickpeas' },
        { label: 'Lentil', value: 'lentil' },
        { label: 'Pea', value: 'pea' }
      ]
    },
    {
      label: 'Personal hygiene',
      value: 'personalHygiene',
      subItems: [
        { label: 'Body wash', value: 'bodyWash' },
        { label: 'Deodorant', value: 'deodorant' },
        { label: 'Shampoo', value: 'deodorant' },
        { label: 'Conditioner', value: 'conditioner' },
        { label: 'Sunscreen lotion', value: 'sunscreenLotion' }
      ]
    },
    {
      label: 'Frozen foods',
      value: 'frozenFoods',
      subItems: [
        { label: 'Hamburguer', value: 'hamburguer' },
        { label: 'Lasagna', value: 'lasagna' },
        { label: 'Sandwiches', value: 'sandwiches' }
      ]
    }
  ];

  addItem(seletectedItem) {
    if (seletectedItem.subItems) {
      seletectedItem.subItems.forEach(itemSelected => {
        if (!this.itemsListSelected.some(item => item.item === itemSelected.label)) {
          this.itemsListSelected.push({ item: itemSelected.label });
        }
      });
    } else {
      if (!this.itemsListSelected.some(item => item.item === seletectedItem.label)) {
        this.itemsListSelected.push({ item: seletectedItem.label });
      }
    }
  }

  checkOut() {
    this.confirmed = true;
    this.stepper.next();
  }

  isConfirmed() {
    return !!this.confirmed;
  }

  removeItem(unseletectedItem) {
    if (unseletectedItem.subItems) {
      const removedValues = unseletectedItem.subItems.map(item => item.label);
      this.itemsListSelected = this.itemsListSelected.filter(
        itemSelected => !removedValues.includes(itemSelected.item)
      );
    } else {
      this.itemsListSelected = this.itemsListSelected.filter(
        itemSelected => unseletectedItem.label !== itemSelected.item
      );
    }
  }
}
`),e()()()()(),t(21,"div",10),a(22,"sample-po-tree-view-supermarket"),e(),a(23,"hr")),o&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),V(" ",i.sampleCodeButtonLabel,""),s(),d("ngClass",w(4,Ae,i.hideSampleCodeTabs)))},dependencies:[I,E,f,g,we],encapsulation:2})}return l})();var fe=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275cmp=u({type:l,selectors:[["sample-po-tree-view-doc"]],standalone:!1,decls:340,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","Array<PoTreeViewItem>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","null"],["pan","",1,"docs-api-property-type","string"]],template:function(o,i){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoTreeViewModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,"M\xF3dulo do componente "),t(7,"code"),n(8,"po-tree-view"),e(),n(9,"."),e(),t(10,"blockquote")(11,"p"),n(12,"Para o correto funcionamento do componente "),t(13,"code"),n(14,"po-tree-view"),e(),n(15,", deve ser importado o m\xF3dulo "),t(16,"code"),n(17,"BrowserAnimationsModule"),e(),n(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),e()(),t(19,"p"),n(20,"M\xF3dulo da aplica\xE7\xE3o:"),e(),t(21,"pre")(22,"code"),n(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...
    PoModule
  ],
  declarations: [
    AppComponent,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`),e()(),t(24,"p"),n(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),e(),t(26,"pre")(27,"code"),n(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));`),e()()(),t(29,"h3",3),n(30,"Componente"),e(),t(31,"h4",4)(32,"code",5),n(33,"PoTreeViewComponent"),e()(),t(34,"div",2)(35,"p"),n(36,`O componente fornece um modelo de visualiza\xE7\xE3o em \xE1rvore, possibilitando a visualiza\xE7\xE3o das informa\xE7\xF5es de maneira
hier\xE1rquica, desta forma sendo poss\xEDvel utilizar at\xE9 4 n\xEDveis.`),e(),t(37,"p"),n(38,"Nele \xE9 poss\xEDvel navegar entre os itens atrav\xE9s da tecla "),t(39,"em"),n(40,"tab"),e(),n(41,`, permitindo expandir ou colapsar o item em foco
por meio das teclas `),t(42,"em"),n(43,"enter"),e(),n(44," e "),t(45,"em"),n(46,"space"),e(),n(47,"."),e(),t(48,"p"),n(49,"Al\xE9m da navega\xE7\xE3o, o componente possibilita tamb\xE9m a sele\xE7\xE3o dos itens do primeiro ao \xFAltimo n\xEDvel, tanto de forma parcial como completa."),e(),t(50,"p"),n(51,"O componente tamb\xE9m possui eventos disparados ao marcar/desmarcar e expandir/colapsar os itens. "),e()(),t(52,"div",6)(53,"h4",7),n(54,"Seletor"),e(),t(55,"pre",8),n(56,`<po-tree-view
    (p-collapsed)="EventEmitter"
    (p-expanded)="EventEmitter"
    p-items="Array<PoTreeViewItem>"
    p-max-level="number"
    p-selectable="boolean"
    (p-selected)="EventEmitter"
    p-single-select="boolean"
    (p-unselected)="EventEmitter" >
</po-tree-view>
`),e()(),t(57,"h4",9),n(58,"Propriedades"),e(),t(59,"table",10)(60,"tr",11)(61,"th",12),n(62,"Nome"),e(),t(63,"th",12),n(64,"Tipo"),e(),t(65,"th",12),n(66,"Padr\xE3o"),e(),t(67,"th",12),n(68,"Descri\xE7\xE3o"),e()(),t(69,"tr",13)(70,"td",14)(71,"div",15)(72,"span",16),n(73," (p-collapsed)"),a(74,"br"),e()()(),t(75,"td",17)(76,"code",18),n(77,"EventEmitter"),e()(),t(78,"td",19),n(79,"-"),e(),t(80,"td",20)(81,"em")(82,"strong"),n(83,"(opcional)"),e()(),t(84,"p"),n(85,"A\xE7\xE3o que ser\xE1 disparada ao colapsar um item."),e(),t(86,"blockquote")(87,"p"),n(88,"Como par\xE2metro o componente envia o item colapsado."),e()()()(),t(89,"tr",13)(90,"td",14)(91,"div",15)(92,"span",16),n(93," (p-expanded)"),a(94,"br"),e()()(),t(95,"td",17)(96,"code",18),n(97,"EventEmitter"),e()(),t(98,"td",19),n(99,"-"),e(),t(100,"td",20)(101,"em")(102,"strong"),n(103,"(opcional)"),e()(),t(104,"p"),n(105,"A\xE7\xE3o que ser\xE1 disparada ao expandir um item."),e(),t(106,"blockquote")(107,"p"),n(108,"Como par\xE2metro o componente envia o item expandido."),e()()()(),t(109,"tr",13)(110,"td",14)(111,"div",21)(112,"span",22),n(113," p-items"),a(114,"br"),e()()(),t(115,"td",17)(116,"code",23),n(117,"Array<PoTreeViewItem>"),e()(),t(118,"td",19),n(119,"-"),e(),t(120,"td",20)(121,"p"),n(122,"Lista de itens do tipo "),t(123,"code"),n(124,"PoTreeViewItem"),e(),n(125," que ser\xE1 renderizada pelo componente."),e()()(),t(126,"tr",13)(127,"td",14)(128,"div",21)(129,"span",22),n(130," p-max-level"),a(131,"br"),e()()(),t(132,"td",17)(133,"code",24),n(134,"number"),e()(),t(135,"td",19)(136,"p"),n(137,"4"),e()(),t(138,"td",20)(139,"em")(140,"strong"),n(141,"(opcional)"),e()(),t(142,"p"),n(143,"Define o m\xE1ximo de n\xEDveis para o tree-view."),e(),t(144,"blockquote")(145,"p"),n(146,"O valor padr\xE3o \xE9 4"),e()()()(),t(147,"tr",13)(148,"td",14)(149,"div",21)(150,"span",22),n(151," p-selectable"),a(152,"br"),e()()(),t(153,"td",17)(154,"code",25),n(155,"boolean"),e()(),t(156,"td",19)(157,"p"),n(158,"false"),e()(),t(159,"td",20)(160,"em")(161,"strong"),n(162,"(opcional)"),e()(),t(163,"p"),n(164,"Habilita uma caixa de sele\xE7\xE3o para selecionar e/ou desmarcar um item da lista."),e()()(),t(165,"tr",13)(166,"td",14)(167,"div",15)(168,"span",16),n(169," (p-selected)"),a(170,"br"),e()()(),t(171,"td",17)(172,"code",18),n(173,"EventEmitter"),e()(),t(174,"td",19),n(175,"-"),e(),t(176,"td",20)(177,"em")(178,"strong"),n(179,"(opcional)"),e()(),t(180,"p"),n(181,"A\xE7\xE3o que ser\xE1 disparada ao selecionar um item."),e(),t(182,"blockquote")(183,"p"),n(184,"Como par\xE2metro o componente envia o item selecionado."),e()()()(),t(185,"tr",13)(186,"td",14)(187,"div",21)(188,"span",22),n(189," p-single-select"),a(190,"br"),e()()(),t(191,"td",17)(192,"code",25),n(193,"boolean"),e()(),t(194,"td",19)(195,"p"),n(196,"false"),e()(),t(197,"td",20)(198,"em")(199,"strong"),n(200,"(opcional)"),e()(),t(201,"p"),n(202,"Habilita a sele\xE7\xE3o para item \xFAnico atr\xE1ves de po-radio."),e()()(),t(203,"tr",13)(204,"td",14)(205,"div",15)(206,"span",16),n(207," (p-unselected)"),a(208,"br"),e()()(),t(209,"td",17)(210,"code",18),n(211,"EventEmitter"),e()(),t(212,"td",19),n(213,"-"),e(),t(214,"td",20)(215,"em")(216,"strong"),n(217,"(opcional)"),e()(),t(218,"p"),n(219,"A\xE7\xE3o que ser\xE1 disparada ao desfazer a sele\xE7\xE3o de um item."),e(),t(220,"blockquote")(221,"p"),n(222,"Como par\xE2metro o componente envia o item que foi desmarcado."),e()()()()(),t(223,"h3"),n(224,"Interfaces"),e(),t(225,"h4",26)(226,"code",5),n(227,"PoTreeViewItem"),e()(),t(228,"div",2)(229,"p"),n(230,"Interface para defini\xE7\xE3o dos itens do componente "),t(231,"code"),n(232,"po-tree-view"),e(),n(233,"."),e()(),t(234,"h4",9),n(235,"Propriedades"),e(),t(236,"table",10)(237,"tr",11)(238,"th",12),n(239,"Nome"),e(),t(240,"th",12),n(241,"Tipo"),e(),t(242,"th",12),n(243,"Descri\xE7\xE3o"),e()(),t(244,"tr",13)(245,"td",14)(246,"div",21)(247,"span",22),n(248," expanded"),a(249,"br"),e()()(),t(250,"td",17)(251,"code",25),n(252,"boolean"),e()(),t(253,"td",20)(254,"em")(255,"strong"),n(256,"(opcional)"),e()(),t(257,"p"),n(258,"Expande o item."),e()()(),t(259,"tr",13)(260,"td",14)(261,"div",21)(262,"span",22),n(263," isSelectable"),a(264,"br"),e()()(),t(265,"td",17)(266,"code",25),n(267,"boolean "),e(),t(268,"code",27),n(269," null"),e()(),t(270,"td",20)(271,"em")(272,"strong"),n(273,"(opcional)"),e()(),t(274,"p"),n(275,"Permite ativar/desativar a sele\xE7\xE3o do item"),e()()(),t(276,"tr",13)(277,"td",14)(278,"div",21)(279,"span",22),n(280," label"),a(281,"br"),e()()(),t(282,"td",17)(283,"code",28),n(284,"string"),e()(),t(285,"td",20)(286,"p"),n(287,`Desabilita a selec\xE3o do item.
Texto de exibi\xE7\xE3o do item.`),e()()(),t(288,"tr",13)(289,"td",14)(290,"div",21)(291,"span",22),n(292," selected"),a(293,"br"),e()()(),t(294,"td",17)(295,"code",25),n(296,"boolean "),e(),t(297,"code",27),n(298," null"),e()(),t(299,"td",20)(300,"em")(301,"strong"),n(302,"(opcional)"),e()(),t(303,"p"),n(304,"Marca o item como selecionado."),e(),t(305,"blockquote")(306,"p"),n(307,"Caso o item que conter "),t(308,"code"),n(309,"subItems"),e(),n(310," for selecionado, os seus itens filhos ser\xE3o tamb\xE9m selecionados."),e()()()(),t(311,"tr",13)(312,"td",14)(313,"div",21)(314,"span",22),n(315," subItems"),a(316,"br"),e()()(),t(317,"td",17)(318,"code",23),n(319,"Array<PoTreeViewItem>"),e()(),t(320,"td",20)(321,"em")(322,"strong"),n(323,"(opcional)"),e()(),t(324,"p"),n(325,"Lista de itens do pr\xF3ximo n\xEDvel, e assim consecutivamente at\xE9 que se atinja o quarto n\xEDvel."),e()()(),t(326,"tr",13)(327,"td",14)(328,"div",21)(329,"span",22),n(330," value"),a(331,"br"),e()()(),t(332,"td",17)(333,"code",28),n(334,"string "),e(),t(335,"code",24),n(336," number"),e()(),t(337,"td",20)(338,"p"),n(339,"Valor do item que poder\xE1 ser utilizado como refer\xEAncia para sua identifica\xE7\xE3o."),e()()()()())},dependencies:[E],encapsulation:2})}return l})();var ge=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||l)(F(K),F(X))};static \u0275cmp=u({type:l,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title"," Tree View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(o,i){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),a(3,"sample-po-tree-view-doc"),e(),t(4,"po-tab",3),a(5,"sample-po-tree-view-basic-view")(6,"sample-po-tree-view-labs-view")(7,"sample-po-tree-view-folder-structure-view")(8,"sample-po-tree-view-supermarket-view"),e()()()),o&2&&(d("p-actions",i.actions),s(2),d("p-active",i.activeTab.includes("doc")),s(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[k,f,g,ce,be,he,Se,fe],encapsulation:2})}return l})();var je=[{path:"",component:ge}],Ee=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275mod=M({type:l});static \u0275inj=L({imports:[O.forChild(je),O]})}return l})();var vt=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275mod=M({type:l});static \u0275inj=L({imports:[se,Ee]})}return l})();export{vt as DocPoTreeViewModule};
