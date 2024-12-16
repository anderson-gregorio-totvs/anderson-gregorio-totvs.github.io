import{$ as L,$a as E,Bc as J,Cd as X,F as S,Fa as B,G as P,Ga as n,Ia as v,Ka as y,Kd as w,La as _,Lb as N,Ma as k,Mb as W,Nb as q,Oa as H,Ob as A,Od as x,Pa as b,Pb as j,T as m,U as O,Wb as z,Xd as g,Yb as U,Yd as f,Zb as V,Zd as Y,_ as d,ha as s,ka as M,md as K,na as t,oa as e,oc as G,pa as l,re as C,se as Z,ta as R,ua as c,wd as Q,y as D}from"./chunk-TZ5FQAUY.js";var se=()=>({label:"PO HTML Framework",link:"/",icon:"ph ph-house-line"}),re=o=>[o],$=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-menu-panel-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-menus"]],template:function(i,a){i&1&&l(0,"po-menu-panel",0),i&2&&s("p-menus",b(2,re,H(1,se)))},dependencies:[w],encapsulation:2})}return o})();var ue=o=>({"docs-sample-code-tabs":o}),te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-menu-panel-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Menu Panel Basic"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-menu-panel [p-menus]="[{ label: 'PO HTML Framework', link: '/', icon: 'ph ph-house-line' }]"></po-menu-panel>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-menu-panel-basic',
  templateUrl: './sample-po-menu-panel-basic.component.html',
  standalone: false
})
export class SamplePoMenuPanelBasicComponent {}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-menu-panel-basic"),e(),l(23,"hr")),i&2&&(m(5),M("po-icon "+a.sampleCodeButtonIcon),m(),v(" ",a.sampleCodeButtonLabel,""),m(),s("ngClass",b(4,ue,a.hideSampleCodeTabs)))},dependencies:[E,C,g,f,$],encapsulation:2})}return o})();var ne=(()=>{class o{menuItem={icon:void 0,label:void 0};menuItems;menuItemSelected;logo;iconsOptions=[{label:"ph ph-newspaper",value:"ph ph-newspaper"},{label:"ph ph-camera",value:"ph ph-camera"},{label:"ph ph-calendar-dots",value:"ph ph-calendar-dots"},{label:"ph ph-user",value:"ph ph-user"},{label:"ph ph-chat",value:"ph ph-chat"},{label:"ph ph-package",value:"ph ph-package"}];ngOnInit(){this.restore()}addMenuItem(p){let i=Object.assign({},p,{action:this.onMenuItemSelected.bind(this)});this.menuItems=[...this.menuItems,i]}restore(){this.menuItems=[],this.menuItemSelected=void 0,this.logo=void 0}onMenuItemSelected(p){this.menuItemSelected=p.label}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-menu-panel-labs"]],standalone:!1,decls:18,vars:9,consts:[["fMenuPanel","ngForm"],[1,"po-wrapper-menu-panel"],[3,"p-menus","p-logo"],["p-title","PO Menu Panel"],[1,"po-row"],["p-label","Menu Item Selected",3,"p-value"],["name","logo","p-label","Logo","p-help","Exemplo: https://po-ui.io/assets/po-logos/po_inverse.svg",1,"po-md-12",3,"ngModelChange","ngModel"],["name","label","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","link","p-label","External link","p-placeholder","http://",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add",1,"po-xl-2","po-md-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-xl-3","po-md-5",3,"p-click"]],template:function(i,a){if(i&1){let u=R();t(0,"div",1),l(1,"po-menu-panel",2),t(2,"po-page-default",3)(3,"div",4),l(4,"po-info",5),e(),l(5,"hr"),t(6,"div",4)(7,"po-input",6),k("ngModelChange",function(r){return S(u),_(a.logo,r)||(a.logo=r),P(r)}),e()(),t(8,"form",null,0)(10,"div",4)(11,"po-input",7),k("ngModelChange",function(r){return S(u),_(a.menuItem.label,r)||(a.menuItem.label=r),P(r)}),e(),t(12,"po-url",8),k("ngModelChange",function(r){return S(u),_(a.menuItem.link,r)||(a.menuItem.link=r),P(r)}),e()(),t(13,"div",4)(14,"po-radio-group",9),k("ngModelChange",function(r){return S(u),_(a.menuItem.icon,r)||(a.menuItem.icon=r),P(r)}),e()(),t(15,"div",4)(16,"po-button",10),c("p-click",function(){S(u);let r=B(9);return a.addMenuItem(a.menuItem),P(r.reset())}),e(),t(17,"po-button",11),c("p-click",function(){S(u);let r=B(9);return a.restore(),P(r.reset())}),e()()()()()}if(i&2){let u=B(9);m(),s("p-menus",a.menuItems)("p-logo",a.logo),m(3),s("p-value",a.menuItemSelected),m(3),y("ngModel",a.logo),m(4),y("ngModel",a.menuItem.label),m(),y("ngModel",a.menuItem.link),m(2),y("ngModel",a.menuItem.icon),s("p-options",a.iconsOptions),m(2),s("p-disabled",u.invalid)}},dependencies:[j,N,W,A,q,G,J,K,Q,X,w,x],encapsulation:2})}return o})();var be=o=>({"docs-sample-code-tabs":o}),oe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-menu-panel-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Menu Panel Labs"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-wrapper-menu-panel">
  <po-menu-panel [p-menus]="menuItems" [p-logo]="logo"> </po-menu-panel>

  <po-page-default p-title="PO Menu Panel">
    <div class="po-row">
      <po-info p-label="Menu Item Selected" [p-value]="menuItemSelected"> </po-info>
    </div>

    <hr />

    <div class="po-row">
      <po-input
        class="po-md-12"
        name="logo"
        [(ngModel)]="logo"
        p-label="Logo"
        p-help="Exemplo: https://po-ui.io/assets/po-logos/po_inverse.svg"
      >
      </po-input>
    </div>

    <form #fMenuPanel="ngForm">
      <div class="po-row">
        <po-input class="po-md-6" name="label" [(ngModel)]="menuItem.label" p-label="Label" p-required> </po-input>

        <po-url class="po-md-6" name="link" [(ngModel)]="menuItem.link" p-label="External link" p-placeholder="http://">
        </po-url>
      </div>

      <div class="po-row">
        <po-radio-group
          class="po-lg-12"
          name="icon"
          [(ngModel)]="menuItem.icon"
          p-label="Icon"
          p-required
          [p-options]="iconsOptions"
        >
        </po-radio-group>
      </div>

      <div class="po-row">
        <po-button
          class="po-xl-2 po-md-4"
          [p-disabled]="fMenuPanel.invalid"
          p-label="Add"
          (p-click)="addMenuItem(menuItem); fMenuPanel.reset()"
        >
        </po-button>

        <po-button class="po-xl-3 po-md-5" p-label="Sample Restore" (p-click)="restore(); fMenuPanel.reset()">
        </po-button>
      </div>
    </form>
  </po-page-default>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import { PoMenuPanelItem, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-menu-panel-labs',
  templateUrl: './sample-po-menu-panel-labs.component.html',
  standalone: false
})
export class SamplePoMenuPanelLabsComponent implements OnInit {
  menuItem: PoMenuPanelItem = { icon: undefined, label: undefined };
  menuItems: Array<PoMenuPanelItem>;
  menuItemSelected: string;
  logo: string;

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'ph ph-newspaper', value: 'ph ph-newspaper' },
    { label: 'ph ph-camera', value: 'ph ph-camera' },
    { label: 'ph ph-calendar-dots', value: 'ph ph-calendar-dots' },
    { label: 'ph ph-user', value: 'ph ph-user' },
    { label: 'ph ph-chat', value: 'ph ph-chat' },
    { label: 'ph ph-package', value: 'ph ph-package' }
  ];

  ngOnInit(): void {
    this.restore();
  }

  addMenuItem(menuItem: PoMenuPanelItem) {
    const newMenuItem = Object.assign({}, menuItem, { action: this.onMenuItemSelected.bind(this) });

    this.menuItems = [...this.menuItems, newMenuItem];
  }

  restore() {
    this.menuItems = [];
    this.menuItemSelected = undefined;
    this.logo = undefined;
  }

  private onMenuItemSelected(menu: PoMenuPanelItem) {
    this.menuItemSelected = menu.label;
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-menu-panel-labs"),e(),l(23,"hr")),i&2&&(m(5),M("po-icon "+a.sampleCodeButtonIcon),m(),v(" ",a.sampleCodeButtonLabel,""),m(),s("ngClass",b(4,be,a.hideSampleCodeTabs)))},dependencies:[E,C,g,f,ne],encapsulation:2})}return o})();var ie=(()=>{class o{title="Customers";menuItems=[{label:"Home",action:this.changeTitle.bind(this),icon:"ph ph-house-line"},{label:"Customers",action:this.changeTitle.bind(this),icon:"ph ph-user"},{label:"New Sale",action:this.changeTitle.bind(this),icon:"ph ph-money"},{label:"Reports",action:this.changeTitle.bind(this),icon:"ph ph-newspaper"},{label:"Settings",action:this.changeTitle.bind(this),icon:"ph ph-gear"}];changeTitle(p){this.title=p.label}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-menu-panel-customer"]],standalone:!1,decls:4,vars:2,consts:[[1,"po-wrapper-menu-panel"],["p-title","PO - Customers"],["p-logo","https://po-ui.io/assets/po-logos/po_color_bg.svg",3,"p-menus"],[3,"p-title"]],template:function(i,a){i&1&&(t(0,"div",0),l(1,"po-toolbar",1)(2,"po-menu-panel",2)(3,"po-page-default",3),e()),i&2&&(m(2),s("p-menus",a.menuItems),m(),s("p-title",a.title))},dependencies:[w,x,Y],encapsulation:2})}return o})();var Ce=o=>({"docs-sample-code-tabs":o}),ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-menu-panel-customer-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Menu Panel - Customers"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-wrapper-menu-panel">
  <po-toolbar p-title="PO - Customers"></po-toolbar>

  <po-menu-panel [p-menus]="menuItems" p-logo="https://po-ui.io/assets/po-logos/po_color_bg.svg"></po-menu-panel>

  <po-page-default [p-title]="title"></po-page-default>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

import { PoMenuPanelItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-menu-panel-customer',
  templateUrl: './sample-po-menu-panel-customer.component.html',
  standalone: false
})
export class SamplePoMenuPanelCustomerComponent {
  title: string = 'Customers';

  public readonly menuItems: Array<PoMenuPanelItem> = [
    { label: 'Home', action: this.changeTitle.bind(this), icon: 'ph ph-house-line' },
    { label: 'Customers', action: this.changeTitle.bind(this), icon: 'ph ph-user' },
    { label: 'New Sale', action: this.changeTitle.bind(this), icon: 'ph ph-money' },
    { label: 'Reports', action: this.changeTitle.bind(this), icon: 'ph ph-newspaper' },
    { label: 'Settings', action: this.changeTitle.bind(this), icon: 'ph ph-gear' }
  ];

  changeTitle(menu: PoMenuPanelItem) {
    this.title = menu.label;
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-menu-panel-customer"),e(),l(23,"hr")),i&2&&(m(5),M("po-icon "+a.sampleCodeButtonIcon),m(),v(" ",a.sampleCodeButtonLabel,""),m(),s("ngClass",b(4,Ce,a.hideSampleCodeTabs)))},dependencies:[E,C,g,f,ie],encapsulation:2})}return o})();var le=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-menu-panel-doc"]],standalone:!1,decls:195,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoMenuPanelItem[]"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","https://po-ui.io/icons"]],template:function(i,a){i&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoMenuPanelModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,"M\xF3dulo do componente po-menu-panel."),e()(),t(7,"h3",3),n(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),n(11,"PoMenuPanelComponent"),e()(),t(12,"div",2)(13,"p"),n(14,`Este \xE9 um componente de menu lateral composto apenas por \xEDcones e com um n\xEDvel, utilizado para navega\xE7\xE3o
em p\xE1ginas internas, externas da aplica\xE7\xE3o ou aciona uma a\xE7\xE3o.`),e(),t(15,"p"),n(16,"O componente "),t(17,"code"),n(18,"po-menu-panel"),e(),n(19," recebe uma lista de objetos do tipo "),t(20,"code"),n(21,"MenuPanelItem"),e(),n(22,` com as informa\xE7\xF5es dos
itens de menu como textos, links para redirecionamento, a\xE7\xF5es e \xEDcones. Para o menu funcionar corretamente \xE9 necess\xE1rio importar o `),t(23,"code"),n(24,"RouterModule"),e(),n(25," e "),t(26,"code"),n(27,"Routes"),e(),n(28," do m\xF3dulo principal de sua aplica\xE7\xE3o:"),e(),t(29,"pre")(30,"code"),n(31,`import { RouterModule, Routes } from '@angular/router';

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
export class AppModule { }`),e()(),t(32,"p"),n(33,"Al\xE9m disso \xE9 necess\xE1rio criar um m\xF3dulo configurando as rotas da aplica\xE7\xE3o."),e(),t(34,"pre")(35,"code"),n(36,`import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
  {path: 'hello-world', component: HelloWorldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}`),e()()(),t(37,"div",6)(38,"h4",7),n(39,"Seletor"),e(),t(40,"pre",8),n(41,`<po-menu-panel
    p-logo="string"
    p-logo-alt="string"
    p-menus="PoMenuPanelItem[]" >
</po-menu-panel>
`),e()(),t(42,"h4",9),n(43,"Propriedades"),e(),t(44,"table",10)(45,"tr",11)(46,"th",12),n(47,"Nome"),e(),t(48,"th",12),n(49,"Tipo"),e(),t(50,"th",12),n(51,"Padr\xE3o"),e(),t(52,"th",12),n(53,"Descri\xE7\xE3o"),e()(),t(54,"tr",13)(55,"td",14)(56,"div",15)(57,"span",16),n(58," p-logo"),l(59,"br"),e()()(),t(60,"td",17)(61,"code",18),n(62,"string"),e()(),t(63,"td",19),n(64,"-"),e(),t(65,"td",20)(66,"em")(67,"strong"),n(68,"(opcional)"),e()(),t(69,"p"),n(70,"Caminho para a logomarca localizada na parte superior do menu."),e(),t(71,"blockquote")(72,"p")(73,"strong"),n(74,"Importante"),e(),n(75,`
Caso seja indefinida ser\xE1 aplicada a imagem default do PO UI.`),e()()()(),t(76,"tr",13)(77,"td",14)(78,"div",15)(79,"span",16),n(80," p-logo-alt"),l(81,"br"),e()()(),t(82,"td",17)(83,"code",18),n(84,"string"),e()(),t(85,"td",19)(86,"p")(87,"code"),n(88,"Logomarca in\xEDcio"),e()()(),t(89,"td",20)(90,"em")(91,"strong"),n(92,"(opcional)"),e()(),t(93,"p"),n(94,"Define o texto alternativo para a logomarca."),e(),t(95,"blockquote")(96,"p")(97,"strong"),n(98,"Importante"),e(),n(99,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),e()()()(),t(100,"tr",13)(101,"td",14)(102,"div",15)(103,"span",16),n(104," p-menus"),l(105,"br"),e()()(),t(106,"td",17)(107,"code",21),n(108,"PoMenuPanelItem[]"),e()(),t(109,"td",19),n(110,"-"),e(),t(111,"td",20)(112,"p"),n(113,"Lista dos itens do "),t(114,"code"),n(115,"po-menu-panel"),e(),n(116,". Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),e()()()(),t(117,"h3"),n(118,"Interfaces"),e(),t(119,"h4",22)(120,"code",5),n(121,"PoMenuPanelItem"),e()(),t(122,"div",2)(123,"p"),n(124,"Interface para os itens de menu do componente "),t(125,"code"),n(126,"po-menu-panel"),e(),n(127,"."),e()(),t(128,"h4",9),n(129,"Propriedades"),e(),t(130,"table",10)(131,"tr",11)(132,"th",12),n(133,"Nome"),e(),t(134,"th",12),n(135,"Tipo"),e(),t(136,"th",12),n(137,"Descri\xE7\xE3o"),e()(),t(138,"tr",13)(139,"td",14)(140,"div",15)(141,"span",16),n(142," action"),l(143,"br"),e()()(),t(144,"td",17)(145,"code",23),n(146,"Function"),e()(),t(147,"td",20)(148,"em")(149,"strong"),n(150,"(opcional)"),e()(),t(151,"p"),n(152,"A\xE7\xE3o personalizada para clique do item de menu."),e()()(),t(153,"tr",13)(154,"td",14)(155,"div",15)(156,"span",16),n(157," icon"),l(158,"br"),e()()(),t(159,"td",17)(160,"code",18),n(161,"string"),e()(),t(162,"td",20)(163,"p"),n(164,"\xCDcone para o item de menu, os "),t(165,"a",24),n(166,"\xEDcones aceitos"),e(),n(167," s\xE3o os definidos no guia de estilo da PO."),e()()(),t(168,"tr",13)(169,"td",14)(170,"div",15)(171,"span",16),n(172," label"),l(173,"br"),e()()(),t(174,"td",17)(175,"code",18),n(176,"string"),e()(),t(177,"td",20)(178,"p"),n(179,"Texto do item de menu."),e()()(),t(180,"tr",13)(181,"td",14)(182,"div",15)(183,"span",16),n(184," link"),l(185,"br"),e()()(),t(186,"td",17)(187,"code",18),n(188,"string"),e()(),t(189,"td",20)(190,"em")(191,"strong"),n(192,"(opcional)"),e()(),t(193,"p"),n(194,"Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo."),e()()()()())},dependencies:[C],encapsulation:2})}return o})();var pe=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,i){this.route=p,this.router=i}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let i=p.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(i){return new(i||o)(O(z),O(U))};static \u0275cmp=d({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Menu Panel",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(i,a){i&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),l(3,"sample-po-menu-panel-doc"),e(),t(4,"po-tab",3),l(5,"sample-po-menu-panel-basic-view")(6,"sample-po-menu-panel-labs-view")(7,"sample-po-menu-panel-customer-view"),e()()()),i&2&&(s("p-actions",a.actions),m(2),s("p-active",a.activeTab.includes("doc")),m(2),s("p-hide",a.hidePoWebSample)("p-active",a.activeTab.includes("web")))},dependencies:[x,g,f,te,oe,ae,le],encapsulation:2})}return o})();var Me=[{path:"",component:pe}],me=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=L({type:o});static \u0275inj=D({imports:[V.forChild(Me),V]})}return o})();var Ge=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=L({type:o});static \u0275inj=D({imports:[Z,me]})}return o})();export{Ge as DocPoMenuPanelModule};
