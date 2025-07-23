import{$ as A,$a as P,$d as X,Bc as G,F as b,Fa as O,Fc as J,G as g,Ga as t,Ia as u,Ka as k,La as D,Lb as N,Ma as z,Mb as F,Nb as H,Ob as W,Od as Q,Pa as x,Pb as q,S as I,T as l,U as M,Wb as R,Xd as C,Yb as j,Yd as f,Zb as L,_ as s,_b as $,gc as w,ha as m,ka as E,md as K,na as a,oa as e,oc as U,pa as r,re as S,se as Y,ta as B,ua as d,y as _}from"./chunk-TZ5FQAUY.js";var Z=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-avatar-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-src","https://po-ui.io/assets/graphics/logo-po.png"]],template:function(n,i){n&1&&r(0,"po-avatar",0)},dependencies:[w],encapsulation:2})}return o})();var me=o=>({"docs-sample-code-tabs":o}),te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-avatar-basic-view"]],standalone:!1,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","E2E"],["appCodeHighlight","",1,"test"],[1,"docs-sample-container"]],template:function(n,i){n&1&&(r(0,"br"),a(1,"blockquote",0)(2,"label",1),t(3,"PO Avatar Basic"),e(),a(4,"a",2),d("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),a(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-avatar-basic/sample-po-avatar-basic.component.html"),e(),a(13,"pre",7),t(14,`<po-avatar p-src="https://po-ui.io/assets/graphics/logo-po.png"> </po-avatar>
`),e()()(),a(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-avatar-basic/sample-po-avatar-basic.component.ts"),e(),a(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-basic',
  templateUrl: './sample-po-avatar-basic.component.html',
  standalone: false
})
export class SamplePoAvatarBasicComponent {}
`),e()()(),a(21,"po-tab",10)(22,"div")(23,"label",6),t(24,"sample-po-avatar-basic/sample-po-avatar-basic.component.e2e-spec.ts"),e(),a(25,"pre",11),t(26,`import { SamplePoAvatarBasicComponentPO } from './sample-po-avatar-basic.component.po';

describe('SamplePoAvatarBasic E2E', () => {
  const avatar = new SamplePoAvatarBasicComponentPO();

  beforeEach(() => {
    avatar.navigateTo();
  });

  it('Check if the element Po Avatar is present', () => {
    expect(avatar.poAvatar.isPresent()).toBeTruthy();
  });
});
`),e(),a(27,"label",6),t(28,"sample-po-avatar-basic/sample-po-avatar-basic.component.po.ts"),e(),a(29,"pre",11),t(30,`import { browser, by, element } from 'protractor';

export class SamplePoAvatarBasicComponentPO {
  private sampleName = 'sample-po-avatar-basic';

  navigateTo() {
    return browser.get(browser.baseUrl + '/documentation/po-avatar?view=web');
  }

  get poAvatar() {
    return element(by.css(\`\${this.sampleName} .po-avatar\`));
  }
}
`),e()()()()(),a(31,"div",12),r(32,"sample-po-avatar-basic"),e(),r(33,"hr")),n&2&&(l(5),E("po-icon "+i.sampleCodeButtonIcon),l(),u(" ",i.sampleCodeButtonLabel,""),l(),m("ngClass",x(4,me,i.hideSampleCodeTabs)))},dependencies:[P,S,C,f,Z],encapsulation:2})}return o})();var ae=(()=>{class o{src;size;sizeOptions=[{label:"Extra Large (144x144)",value:"xl"},{label:"Large (96x96)",value:"lg"},{label:"Medium (64x64)",value:"md"},{label:"Small (32x32)",value:"sm"},{label:"Extra small (24x24)",value:"xs"}];ngOnInit(){this.restore()}restore(){this.src="http://lorempixel.com/144/144/cats",this.size=void 0}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-avatar-labs"]],standalone:!1,decls:9,vars:5,consts:[["f","ngForm"],[3,"p-size","p-src"],["p-label","Properties"],[1,"po-row"],["name","sizes","p-help","Select a size for the avatar","p-label","Size",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","src","p-clear","","p-help","Enter a url or path of the image that will be displayed","p-label","Source",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(n,i){if(n&1){let c=B();r(0,"po-avatar",1)(1,"po-divider",2),a(2,"form",null,0)(4,"div",3)(5,"po-radio-group",4),z("ngModelChange",function(v){return b(c),D(i.size,v)||(i.size=v),g(v)}),e(),a(6,"po-input",5),z("ngModelChange",function(v){return b(c),D(i.src,v)||(i.src=v),g(v)}),e()(),a(7,"div",3)(8,"po-button",6),d("p-click",function(){return b(c),g(i.restore())}),e()()()}n&2&&(m("p-size",i.size)("p-src",i.src),l(5),k("ngModel",i.size),m("p-options",i.sizeOptions),l(),k("ngModel",i.src))},dependencies:[q,N,F,W,H,w,U,$,G,K],encapsulation:2})}return o})();var ue=o=>({"docs-sample-code-tabs":o}),oe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-avatar-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,i){n&1&&(r(0,"br"),a(1,"blockquote",0)(2,"label",1),t(3,"PO Avatar Labs"),e(),a(4,"a",2),d("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),a(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-avatar-labs/sample-po-avatar-labs.component.html"),e(),a(13,"pre",7),t(14,`<po-avatar [p-size]="size" [p-src]="src"> </po-avatar>

<po-divider p-label="Properties"></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-6"
      name="sizes"
      [(ngModel)]="size"
      p-help="Select a size for the avatar"
      p-label="Size"
      [p-options]="sizeOptions"
    >
    </po-radio-group>

    <po-input
      class="po-lg-6"
      name="src"
      [(ngModel)]="src"
      p-clear
      p-help="Enter a url or path of the image that will be displayed"
      p-label="Source"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),a(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-avatar-labs/sample-po-avatar-labs.component.ts"),e(),a(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-avatar-labs',
  templateUrl: './sample-po-avatar-labs.component.html',
  standalone: false
})
export class SamplePoAvatarLabsComponent implements OnInit {
  src: string;
  size: string;

  sizeOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Extra Large (144x144)', value: 'xl' },
    { label: 'Large (96x96)', value: 'lg' },
    { label: 'Medium (64x64)', value: 'md' },
    { label: 'Small (32x32)', value: 'sm' },
    { label: 'Extra small (24x24)', value: 'xs' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.src = 'http://lorempixel.com/144/144/cats';
    this.size = undefined;
  }
}
`),e()()()()(),a(21,"div",10),r(22,"sample-po-avatar-labs"),e(),r(23,"hr")),n&2&&(l(5),E("po-icon "+i.sampleCodeButtonIcon),l(),u(" ",i.sampleCodeButtonLabel,""),l(),m("ngClass",x(4,ue,i.hideSampleCodeTabs)))},dependencies:[P,S,C,f,ae],encapsulation:2})}return o})();var ne=(()=>{class o{avatar="http://lorempixel.com/300/300/cats/";contact={name:"Mr. Dev PO",email:"dev.po@po-ui.com",phone:"47912012015"};callContact(p){window.open(`tel:${p}`,"_self")}sendContact(p){window.open(`mailto:${p}`,"_self")}formatPhoneNumber(p){return`(${p.substring(0,2)}) ${p.substring(2,7)}-${p.substring(7)}`}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-avatar-business-card"]],standalone:!1,decls:19,vars:5,consts:[["modal",""],[1,"po-row"],["p-height","250","p-title","Business Card","p-primary-label","Call","p-secondary-label","Send e-mail",1,"po-sm-12","po-md-8","po-lg-6",3,"p-primary-action","p-secondary-action"],["p-size","lg",1,"po-md-4",3,"p-click","p-src"],[1,"po-md-8"],["p-title","Profile Image"],[1,"sample-center-image",3,"src"]],template:function(n,i){if(n&1){let c=B();a(0,"div",1)(1,"po-widget",2),d("p-primary-action",function(){return b(c),g(i.callContact(i.contact.phone))})("p-secondary-action",function(){return b(c),g(i.sendContact(i.contact.email))}),a(2,"po-avatar",3),d("p-click",function(){b(c);let v=O(17);return g(v.open())}),e(),a(3,"div",4)(4,"p")(5,"strong"),t(6,"Name:"),e(),t(7),e(),a(8,"p")(9,"strong"),t(10,"Phone:"),e(),t(11),e(),a(12,"p")(13,"strong"),t(14,"E-mail:"),e(),t(15),e()()()(),a(16,"po-modal",5,0),r(18,"img",6),e()}n&2&&(l(2),m("p-src",i.avatar),l(5),u(" ",i.contact.name,""),l(4),u(" ",i.formatPhoneNumber(i.contact.phone),""),l(4),u(" ",i.contact.email,""),l(3),m("src",i.avatar,I))},dependencies:[w,J,X],styles:[".sample-center-image[_ngcontent-%COMP%]{display:block;margin:0 auto}"]})}return o})();var be=o=>({"docs-sample-code-tabs":o}),ie=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-avatar-business-card-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,i){n&1&&(r(0,"br"),a(1,"blockquote",0)(2,"label",1),t(3,"PO Avatar - Business Card"),e(),a(4,"a",2),d("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),a(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.html"),e(),a(13,"pre",7),t(14,`<div class="po-row">
  <po-widget
    class="po-sm-12 po-md-8 po-lg-6"
    p-height="250"
    p-title="Business Card"
    p-primary-label="Call"
    p-secondary-label="Send e-mail"
    (p-primary-action)="callContact(contact.phone)"
    (p-secondary-action)="sendContact(contact.email)"
  >
    <po-avatar class="po-md-4" p-size="lg" [p-src]="avatar" (p-click)="modal.open()"> </po-avatar>

    <div class="po-md-8">
      <p><strong>Name:</strong> { { contact.name }}</p>
      <p><strong>Phone:</strong> { { formatPhoneNumber(contact.phone) }}</p>
      <p><strong>E-mail:</strong> { { contact.email }}</p>
    </div>
  </po-widget>
</div>

<po-modal #modal p-title="Profile Image">
  <img [src]="avatar" class="sample-center-image" />
</po-modal>
`),e()()(),a(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.ts"),e(),a(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-business-card',
  styles: [
    \`
      .sample-center-image {
        display: block;
        margin: 0 auto;
      }
    \`
  ],
  templateUrl: './sample-po-avatar-business-card.component.html',
  standalone: false
})
export class SamplePoAvatarBusinessCardComponent {
  avatar = 'http://lorempixel.com/300/300/cats/';

  contact = {
    name: 'Mr. Dev PO',
    email: 'dev.po@po-ui.com',
    phone: '47912012015'
  };

  callContact(phone) {
    window.open(\`tel:\${phone}\`, '_self');
  }

  sendContact(email) {
    window.open(\`mailto:\${email}\`, '_self');
  }

  formatPhoneNumber(phone) {
    return \`(\${phone.substring(0, 2)}) \${phone.substring(2, 7)}-\${phone.substring(7)}\`;
  }
}
`),e()()()()(),a(21,"div",10),r(22,"sample-po-avatar-business-card"),e(),r(23,"hr")),n&2&&(l(5),E("po-icon "+i.sampleCodeButtonIcon),l(),u(" ",i.sampleCodeButtonLabel,""),l(),m("ngClass",x(4,be,i.hideSampleCodeTabs)))},dependencies:[P,S,C,f,ne],encapsulation:2})}return o})();var pe=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-avatar-doc"]],standalone:!1,decls:151,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","'eager'"],["pan","",1,"docs-api-property-type","'lazy'"],["pan","",1,"docs-api-property-type","string"]],template:function(n,i){n&1&&(a(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoAvatarModule } from '@po-ui/ng-components';"),e()(),a(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente po-avatar."),e()(),a(7,"h3",3),t(8,"Componente"),e(),a(9,"h4",4)(10,"code",5),t(11,"PoAvatarComponent"),e()(),a(12,"div",2)(13,"p"),t(14,"O componente "),a(15,"code"),t(16,"po-avatar"),e(),t(17,` \xE9 um container para imagens em miniatura, possui um formato redondo e cinco op\xE7\xF5es de
tamanho, pode ser utilizado para mostrar a foto do perfil de um usu\xE1rio, entre outras possibilidades.`),e(),a(18,"p"),t(19,"Al\xE9m de poder ser utilizado separadamente, \xE9 poss\xEDvel usar o "),a(20,"code"),t(21,"po-avatar"),e(),t(22,` juntamente com outros componentes e criar
layouts ricos e bem interessantes para os usu\xE1rios, como por exemplo, uma lista de itens ou produtos. `),e()(),a(23,"div",6)(24,"h4",7),t(25,"Seletor"),e(),a(26,"pre",8),t(27,`<po-avatar
    (p-click)="EventEmitter"
    p-loading="'eager' | 'lazy'"
    p-size="string"
    p-src="string" >
</po-avatar>
`),e()(),a(28,"h4",9),t(29,"Propriedades"),e(),a(30,"table",10)(31,"tr",11)(32,"th",12),t(33,"Nome"),e(),a(34,"th",12),t(35,"Tipo"),e(),a(36,"th",12),t(37,"Padr\xE3o"),e(),a(38,"th",12),t(39,"Descri\xE7\xE3o"),e()(),a(40,"tr",13)(41,"td",14)(42,"div",15)(43,"span",16),t(44," (p-click)"),r(45,"br"),e()()(),a(46,"td",17)(47,"code",18),t(48,"EventEmitter"),e()(),a(49,"td",19),t(50,"-"),e(),a(51,"td",20)(52,"p"),t(53,"Evento disparado ao clicar na imagem do "),a(54,"em"),t(55,"avatar"),e(),t(56,"."),e()()(),a(57,"tr",13)(58,"td",14)(59,"div",21)(60,"span",22),t(61," p-loading"),r(62,"br"),e()()(),a(63,"td",17)(64,"code",23),t(65,"'eager' "),e(),a(66,"code",24),t(67," 'lazy'"),e()(),a(68,"td",19)(69,"p")(70,"code"),t(71,"eager"),e()()(),a(72,"td",20)(73,"em")(74,"strong"),t(75,"(opcional)"),e()(),a(76,"p"),t(77,"Indica como o navegador deve carregar a imagem."),e(),a(78,"p"),t(79,"Valores v\xE1lidos:"),e(),a(80,"ul")(81,"li")(82,"code"),t(83,"eager"),e(),t(84," (a imagem \xE9 carregada imediatamente, independente de estar vis\xEDvel ou n\xE3o)"),e(),a(85,"li")(86,"code"),t(87,"lazy"),e(),t(88," (a imagem s\xF3 \xE9 carregada quando estiver pr\xF3xima de ser renderizada)"),e()()()(),a(89,"tr",13)(90,"td",14)(91,"div",21)(92,"span",22),t(93," p-size"),r(94,"br"),e()()(),a(95,"td",17)(96,"code",25),t(97,"string"),e()(),a(98,"td",19)(99,"p")(100,"code"),t(101,"md"),e()()(),a(102,"td",20)(103,"em")(104,"strong"),t(105,"(opcional)"),e()(),a(106,"p"),t(107,"Tamanho de exibi\xE7\xE3o do componente."),e(),a(108,"p"),t(109,"Valores v\xE1lidos:"),e(),a(110,"ul")(111,"li")(112,"code"),t(113,"xs"),e(),t(114," (24x24)"),e(),a(115,"li")(116,"code"),t(117,"sm"),e(),t(118," (32x32)"),e(),a(119,"li")(120,"code"),t(121,"md"),e(),t(122," (64x64)"),e(),a(123,"li")(124,"code"),t(125,"lg"),e(),t(126," (96x96)"),e(),a(127,"li")(128,"code"),t(129,"xl"),e(),t(130," (144x144)"),e()()()(),a(131,"tr",13)(132,"td",14)(133,"div",21)(134,"span",22),t(135," p-src"),r(136,"br"),e()()(),a(137,"td",17)(138,"code",25),t(139,"string"),e()(),a(140,"td",19),t(141,"-"),e(),a(142,"td",20)(143,"p"),t(144,"Fonte da imagem que pode ser um caminho local ("),a(145,"code"),t(146,"./assets/images/logo-black-small.png"),e(),t(147,`)
ou um servidor externo (`),a(148,"code"),t(149,"https://po-ui.io/assets/images/logo-black-small.png"),e(),t(150,")."),e()()()()())},dependencies:[S],encapsulation:2})}return o})();var re=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,n){this.route=p,this.router=n}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let n=p.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(n){return new(n||o)(M(R),M(j))};static \u0275cmp=s({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Avatar",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(n,i){n&1&&(a(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),r(3,"sample-po-avatar-doc"),e(),a(4,"po-tab",3),r(5,"sample-po-avatar-basic-view")(6,"sample-po-avatar-labs-view")(7,"sample-po-avatar-business-card-view"),e()()()),n&2&&(m("p-actions",i.actions),l(2),m("p-active",i.activeTab.includes("doc")),l(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[Q,C,f,te,oe,ie,pe],encapsulation:2})}return o})();var fe=[{path:"",component:re}],le=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=A({type:o});static \u0275inj=_({imports:[L.forChild(fe),L]})}return o})();var je=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=A({type:o});static \u0275inj=_({imports:[Y,le]})}return o})();export{je as DocPoAvatarModule};
