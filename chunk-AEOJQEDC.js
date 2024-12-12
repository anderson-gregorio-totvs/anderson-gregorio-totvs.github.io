import{$ as y,$a as M,F as u,Fa as T,G as b,Ga as e,Ia as k,Ka as v,La as h,Lb as N,Ma as g,Mb as j,Nb as W,Oa as D,Ob as O,Od as J,Pa as _,Pb as R,Qa as A,T as d,U as P,Wb as z,Xd as x,Yb as H,Yd as C,Zb as V,_ as s,ad as G,ha as p,ka as w,mc as F,md as Q,na as i,oa as t,oc as U,pa as r,re as B,se as K,ta as q,ua as S,y as I}from"./chunk-23IW53AA.js";var re=()=>({label:"Po Portal",link:"portal"}),me=()=>({label:"Po Breadcrumb",link:"breadcrumb"}),le=(n,oe)=>[n,oe],X=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-breadcrumb-basic"]],standalone:!1,decls:1,vars:6,consts:[[3,"p-items"]],template:function(a,o){a&1&&r(0,"po-breadcrumb",0),a&2&&p("p-items",A(3,le,D(1,re),D(2,me)))},dependencies:[F],encapsulation:2})}return n})();var se=n=>({"docs-sample-code-tabs":n}),Z=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-breadcrumb-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(r(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Breadcrumb Basic"),t(),i(4,"a",2),S("click",function(){return o.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-breadcrumb
  [p-items]="[
    { label: 'Po Portal', link: 'portal' },
    { label: 'Po Breadcrumb', link: 'breadcrumb' }
  ]"
>
</po-breadcrumb>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-breadcrumb-basic',
  templateUrl: './sample-po-breadcrumb-basic.component.html',
  standalone: false
})
export class SamplePoBreadcrumbBasicComponent {}
`),t()()()()(),i(21,"div",10),r(22,"sample-po-breadcrumb-basic"),t(),r(23,"hr")),a&2&&(d(5),w("po-icon "+o.sampleCodeButtonIcon),d(),k(" ",o.sampleCodeButtonLabel,""),d(),p("ngClass",_(4,se,o.hideSampleCodeTabs)))},dependencies:[M,B,x,C,X],encapsulation:2})}return n})();var $=(()=>{class n{poNotification;breadcrumbItem;breadcrumbItems;favoriteService;paramsService;constructor(m){this.poNotification=m}ngOnInit(){this.restore()}addBreadcrumb(){let m=Object.assign({},this.breadcrumbItem);m.action=m.action?this.showAction.bind(this,m.action):void 0,this.breadcrumbItems=[...this.breadcrumbItems,m],this.restoreBreadcrumbItemForm()}restore(){this.favoriteService=void 0,this.paramsService=void 0,this.breadcrumbItems=[],this.restoreBreadcrumbItemForm()}restoreBreadcrumbItemForm(){this.breadcrumbItem={action:void 0,label:void 0,link:void 0}}showAction(m){this.poNotification.success(`Breadcrumb clicked: ${m}`)}static \u0275fac=function(a){return new(a||n)(P(G))};static \u0275cmp=s({type:n,selectors:[["sample-po-breadcrumb-labs"]],standalone:!1,decls:19,vars:11,consts:[["breadcrumbForm","ngForm"],["propertiesForm","ngForm"],[3,"p-favorite-service","p-items","p-params-service"],[1,"po-row"],["name","breadcrumbAction","p-label","Breadcrumb action",1,"po-md-4",3,"ngModelChange","ngModel"],["name","breadcrumbLabel","p-label","Breadcrumb label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","breadcrumbLink","p-label","Breadcrumb link",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb",1,"po-md-3",3,"p-click","p-disabled"],["name","favoriteService","p-clean","","p-help","Ex.: https://po-sample-api.onrender.com/v1/favorite","p-label","Favorite service",1,"po-md-6",3,"ngModelChange","ngModel","p-disabled"],["name","paramsService","p-clean","","p-help","Ex.: { id: 14, user: 'dev.po' }","p-label","Params service",1,"po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let c=q();r(0,"po-breadcrumb",2)(1,"hr"),i(2,"form",null,0)(4,"div",3)(5,"po-input",4),g("ngModelChange",function(l){return u(c),h(o.breadcrumbItem.action,l)||(o.breadcrumbItem.action=l),b(l)}),t(),i(6,"po-input",5),g("ngModelChange",function(l){return u(c),h(o.breadcrumbItem.label,l)||(o.breadcrumbItem.label=l),b(l)}),t(),i(7,"po-input",6),g("ngModelChange",function(l){return u(c),h(o.breadcrumbItem.link,l)||(o.breadcrumbItem.link=l),b(l)}),t()(),i(8,"div",3)(9,"po-button",7),S("p-click",function(){return u(c),b(o.addBreadcrumb())}),t()()(),r(10,"hr"),i(11,"form",null,1)(13,"div",3)(14,"po-input",8),g("ngModelChange",function(l){return u(c),h(o.favoriteService,l)||(o.favoriteService=l),b(l)}),t(),i(15,"po-input",9),g("ngModelChange",function(l){return u(c),h(o.paramsService,l)||(o.paramsService=l),b(l)}),t()(),r(16,"hr"),i(17,"div",3)(18,"po-button",10),S("p-click",function(){u(c);let l=T(3),ae=T(12);return l.reset(),ae.reset(),b(o.restore())}),t()()()}if(a&2){let c=T(3);p("p-favorite-service",o.favoriteService)("p-items",o.breadcrumbItems)("p-params-service",o.paramsService),d(5),v("ngModel",o.breadcrumbItem.action),d(),v("ngModel",o.breadcrumbItem.label),d(),v("ngModel",o.breadcrumbItem.link),d(2),p("p-disabled",c.invalid),d(5),v("ngModel",o.favoriteService),p("p-disabled",!(o.breadcrumbItems!=null&&o.breadcrumbItems.length)),d(),v("ngModel",o.paramsService),p("p-disabled",!(o.breadcrumbItems!=null&&o.breadcrumbItems.length))}},dependencies:[R,N,j,O,W,F,U,Q],encapsulation:2})}return n})();var be=n=>({"docs-sample-code-tabs":n}),ee=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-breadcrumb-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(r(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Breadcrumb Labs"),t(),i(4,"a",2),S("click",function(){return o.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-breadcrumb [p-favorite-service]="favoriteService" [p-items]="breadcrumbItems" [p-params-service]="paramsService">
</po-breadcrumb>

<hr />

<form #breadcrumbForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-4" name="breadcrumbAction" [(ngModel)]="breadcrumbItem.action" p-label="Breadcrumb action">
    </po-input>

    <po-input
      class="po-md-4"
      name="breadcrumbLabel"
      [(ngModel)]="breadcrumbItem.label"
      p-label="Breadcrumb label"
      p-required
    >
    </po-input>

    <po-input class="po-md-4" name="breadcrumbLink" [(ngModel)]="breadcrumbItem.link" p-label="Breadcrumb link">
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Add breadcrumb"
      [p-disabled]="breadcrumbForm.invalid"
      (p-click)="addBreadcrumb()"
    >
    </po-button>
  </div>
</form>

<hr />

<form #propertiesForm="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="favoriteService"
      [(ngModel)]="favoriteService"
      p-clean
      p-help="Ex.: https://po-sample-api.onrender.com/v1/favorite"
      p-label="Favorite service"
      [p-disabled]="!breadcrumbItems?.length"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="paramsService"
      [(ngModel)]="paramsService"
      p-clean
      p-help="Ex.: { id: 14, user: 'dev.po' }"
      p-label="Params service"
      [p-disabled]="!breadcrumbItems?.length"
    >
    </po-input>
  </div>

  <hr />

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Sample Restore"
      (p-click)="breadcrumbForm.reset(); propertiesForm.reset(); restore()"
    >
    </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoBreadcrumbItem, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-breadcrumb-labs',
  templateUrl: './sample-po-breadcrumb-labs.component.html',
  standalone: false
})
export class SamplePoBreadcrumbLabsComponent implements OnInit {
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbItems: Array<PoBreadcrumbItem>;
  favoriteService: string;
  paramsService: object;

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
  }

  addBreadcrumb() {
    const breadcrumbItem: PoBreadcrumbItem = Object.assign({}, this.breadcrumbItem);
    breadcrumbItem.action = breadcrumbItem.action ? this.showAction.bind(this, breadcrumbItem.action) : undefined;

    this.breadcrumbItems = [...this.breadcrumbItems, breadcrumbItem];

    this.restoreBreadcrumbItemForm();
  }

  restore() {
    this.favoriteService = undefined;
    this.paramsService = undefined;
    this.breadcrumbItems = [];
    this.restoreBreadcrumbItemForm();
  }

  restoreBreadcrumbItemForm() {
    this.breadcrumbItem = { action: undefined, label: undefined, link: undefined };
  }

  private showAction(action: string) {
    this.poNotification.success(\`Breadcrumb clicked: \${action}\`);
  }
}
`),t()()()()(),i(21,"div",10),r(22,"sample-po-breadcrumb-labs"),t(),r(23,"hr")),a&2&&(d(5),w("po-icon "+o.sampleCodeButtonIcon),d(),k(" ",o.sampleCodeButtonLabel,""),d(),p("ngClass",_(4,be,o.hideSampleCodeTabs)))},dependencies:[M,B,x,C,$],encapsulation:2})}return n})();var te=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-breadcrumb-doc"]],standalone:!1,decls:345,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumbItem[]"],["pan","",1,"docs-api-property-type","object"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"]],template:function(a,o){a&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoBreadcrumbModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-breadcrumb."),t()(),i(7,"h3",3),e(8,"Componente"),t(),i(9,"h4",4)(10,"code",5),e(11,"PoBreadcrumbComponent"),t()(),i(12,"div",2)(13,"p"),e(14,`Este componente gera uma estrutura de navega\xE7\xE3o que apresenta ao usu\xE1rio a localiza\xE7\xE3o
da URL atual, exibindo as antecessoras conforme \xE9 realizado a navega\xE7\xE3o na aplica\xE7\xE3o.`),t(),i(15,"p"),e(16,`Quando n\xE3o houver espa\xE7amento suficiente para exibi-l\xE1s, o componente se encarrega tamb\xE9m
de agrupar as URLs antecessoras, gerando assim um \xEDcone que permite a visualiza\xE7\xE3o em cascata.`),t(),i(17,"p"),e(18,"Caso um endere\xE7o seja especificado na propriedade "),i(19,"code"),e(20,"p-favorite-service"),t(),e(21,`, o componente permite ao usu\xE1rio
favoritar a URL.`),t(),i(22,"p"),e(23,`Havendo necessidade de incluir par\xE2metros na requisi\xE7\xE3o do servi\xE7o,
o componente disp\xF5e da propriedade `),i(24,"code"),e(25,"p-params-service"),t(),e(26," que recebe um objeto contendo as informa\xE7\xF5es."),t(),i(27,"h4",6),e(28,"Tokens customiz\xE1veis"),t(),i(29,"p"),e(30,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),i(31,"blockquote")(32,"p"),e(33,"Para maiores informa\xE7\xF5es, acesse o guia "),i(34,"a",7),e(35,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(36,"."),t()(),i(37,"table")(38,"thead")(39,"tr")(40,"th"),e(41,"Propriedade"),t(),i(42,"th"),e(43,"Descri\xE7\xE3o"),t(),i(44,"th"),e(45,"Valor Padr\xE3o"),t()()(),i(46,"tbody")(47,"tr")(48,"td")(49,"strong"),e(50,"Default Values"),t()(),r(51,"td")(52,"td"),t(),i(53,"tr")(54,"td")(55,"code"),e(56,"--font-family"),t()(),i(57,"td"),e(58,"Fam\xEDlia tipogr\xE1fica usada \xA0"),t(),i(59,"td")(60,"code"),e(61,"var(--font-family-theme)"),t()()(),i(62,"tr")(63,"td")(64,"code"),e(65,"--color"),t()(),i(66,"td"),e(67,"Cor principal do icone de lista"),t(),i(68,"td")(69,"code"),e(70,"var(--color-action-default)"),t()()(),i(71,"tr")(72,"td")(73,"code"),e(74,"--color-icon"),t()(),i(75,"td"),e(76,'Cor do icone ">"'),t(),i(77,"td")(78,"code"),e(79,"var(--color-neutral-mid-60)"),t()()(),i(80,"tr")(81,"td")(82,"code"),e(83,"--color-current-page"),t(),e(84," \xA0"),t(),i(85,"td"),e(86,"Cor do pagina atual"),t(),i(87,"td")(88,"code"),e(89,"var(--color-neutral-mid-60)"),t()()()()()(),i(90,"div",8)(91,"h4",9),e(92,"Seletor"),t(),i(93,"pre",10),e(94,`<po-breadcrumb
    p-favorite-service="string"
    p-items="PoBreadcrumbItem[]"
    p-params-service="object" >
</po-breadcrumb>
`),t()(),i(95,"h4",11),e(96,"Propriedades"),t(),i(97,"table",12)(98,"tr",13)(99,"th",14),e(100,"Nome"),t(),i(101,"th",14),e(102,"Tipo"),t(),i(103,"th",14),e(104,"Padr\xE3o"),t(),i(105,"th",14),e(106,"Descri\xE7\xE3o"),t()(),i(107,"tr",15)(108,"td",16)(109,"div",17)(110,"span",18),e(111," p-favorite-service"),r(112,"br"),t()()(),i(113,"td",19)(114,"code",20),e(115,"string"),t()(),i(116,"td",21),e(117,"-"),t(),i(118,"td",22)(119,"em")(120,"strong"),e(121,"(opcional)"),t()(),i(122,"p"),e(123,"Permite definir uma URL no componente "),i(124,"code"),e(125,"po-breadcrumb"),t(),e(126," para favoritar ou desfavoritar."),t(),i(127,"blockquote")(128,"p"),e(129,"Para utilizar esta propriedade, o \xFAltimo "),i(130,"code"),e(131,"PoBreadcrumbItem"),t(),e(132," da lista de items da propriedade "),i(133,"code"),e(134,"p-items"),t(),e(135," deve ter um link informado."),t()(),i(136,"blockquote")(137,"p"),e(138,"A API deve estar preparada para retornar um objeto no formato "),i(139,"code"),e(140,"{ isFavorite: boolean }"),t(),e(141,"."),t()(),i(142,"p"),e(143,"Ao iniciar, o "),i(144,"code"),e(145,"po-breadcrumb"),t(),e(146," faz um GET na URL definida na propriedade "),i(147,"code"),e(148,"p-favorite-service"),t(),e(149,` e deve retornar a propriedade
`),i(150,"code"),e(151,"{ isFavorite: boolean }"),t(),e(152," do \xFAltimo "),i(153,"code"),e(154,"PoBreadcrumbItem"),t(),e(155," definido na lista de itens da propriedade "),i(156,"code"),e(157,"p-items"),t(),e(158,"."),t(),i(159,"p"),e(160,"Ao clicar em favoritar ou desfavoritar o "),i(161,"code"),e(162,"po-breadcrumb"),t(),e(163," faz um POST com o link e a propriedade "),i(164,"code"),e(165,"{ isFavorite: boolean }"),t(),e(166,`
definidos no \xFAltimo item da propriedade `),i(167,"code"),e(168,"p-items"),t(),e(169,"."),t(),i(170,"blockquote")(171,"p"),e(172,"Caso algum par\xE2metro seja definido na propriedade "),i(173,"code"),e(174,"p-params-service"),t(),e(175,`, o mesmo ser\xE1 enviado para a API e retornar\xE1
ap\xF3s fazer um GET ou POST.`),t()(),i(176,"p"),e(177,"Exemplo de URL contendo o servi\xE7o de favoritar ou desfavoritar:"),t(),i(178,"pre")(179,"code"),e(180,"https://po-ui.io/sample/api/favorite"),t()(),i(181,"p"),e(182,"Ao fazer o GET o "),i(183,"code"),e(184,"po-breadcrumb"),t(),e(185," concatena o link com a URL de servi\xE7o. Exemplo:"),t(),i(186,"pre")(187,"code"),e(188,"GET http://<domain>/api/favorite?url=/example"),t()(),i(189,"pre")(190,"code"),e(191,"GET http://po.com.br/sample/api/favorite?url=/example"),t()(),i(192,"pre")(193,"code"),e(194,`POST
payload: { isFavorite: true, url: '/example' }`),t()(),i(195,"p"),e(196,"Caso possua par\xE2metros definidos na propriedade "),i(197,"code"),e(198,"p-params-service"),t(),e(199,":"),t(),i(200,"pre")(201,"code"),e(202,`POST
payload: { isFavorite: true, url: "/example", params: "{ id: 14, user: 'dev.po' }" }`),t()(),i(203,"p"),e(204,"Exemplos de retorno:"),t(),i(205,"pre")(206,"code"),e(207,'{ isFavorite: true, url: "/example" }'),t()(),i(208,"pre")(209,"code"),e(210,'{ isFavorite: false, url: "/example" }'),t()(),i(211,"pre")(212,"code"),e(213,`{ isFavorite: false, url: "/example", params: "{ id: 14, user: 'dev.po' }" }`),t()()()(),i(214,"tr",15)(215,"td",16)(216,"div",17)(217,"span",18),e(218," p-items"),r(219,"br"),t()()(),i(220,"td",19)(221,"code",23),e(222,"PoBreadcrumbItem[]"),t()(),i(223,"td",21),e(224,"-"),t(),i(225,"td",22)(226,"p"),e(227,"Lista de itens do "),i(228,"em"),e(229,"breadcrumb"),t(),e(230,"."),t(),i(231,"p")(232,"strong"),e(233,"Exemplo:"),t()(),i(234,"pre")(235,"code"),e(236,"{ label: 'Po Portal', link: 'portal' }"),t()()()(),i(237,"tr",15)(238,"td",16)(239,"div",17)(240,"span",18),e(241," p-params-service"),r(242,"br"),t()()(),i(243,"td",19)(244,"code",24),e(245,"object"),t()(),i(246,"td",21),e(247,"-"),t(),i(248,"td",22)(249,"em")(250,"strong"),e(251,"(opcional)"),t()(),i(252,"p"),e(253,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),t()()()(),i(254,"h3"),e(255,"Interfaces"),t(),i(256,"h4",25)(257,"code",5),e(258,"PoBreadcrumbItem"),t()(),i(259,"div",2)(260,"p"),e(261,"Interface que define cada item do componente "),i(262,"strong"),e(263,"po-breadcrumb"),t(),e(264,"."),t()(),i(265,"h4",11),e(266,"Propriedades"),t(),i(267,"table",12)(268,"tr",13)(269,"th",14),e(270,"Nome"),t(),i(271,"th",14),e(272,"Tipo"),t(),i(273,"th",14),e(274,"Descri\xE7\xE3o"),t()(),i(275,"tr",15)(276,"td",16)(277,"div",17)(278,"span",18),e(279," action"),r(280,"br"),t()()(),i(281,"td",19)(282,"code",26),e(283,"Function"),t()(),i(284,"td",22)(285,"em")(286,"strong"),e(287,"(opcional)"),t()(),i(288,"p"),e(289,"A\xE7\xE3o executada ao clicar no item."),t(),i(290,"blockquote")(291,"p"),e(292,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),i(293,"em"),e(294,"label"),t(),e(295," do item como par\xE2metro para execu\xE7\xE3o."),t()()()(),i(296,"tr",15)(297,"td",16)(298,"div",17)(299,"span",18),e(300," label"),r(301,"br"),t()()(),i(302,"td",19)(303,"code",20),e(304,"string"),t()(),i(305,"td",22)(306,"p"),e(307,"R\xF3tulo do item."),t()()(),i(308,"tr",15)(309,"td",16)(310,"div",17)(311,"span",18),e(312," link"),r(313,"br"),t()()(),i(314,"td",19)(315,"code",20),e(316,"string"),t()(),i(317,"td",22)(318,"em")(319,"strong"),e(320,"(opcional)"),t()(),i(321,"p"),e(322,"Url do item."),t(),i(323,"blockquote")(324,"p"),e(325,"Caso o item tamb\xE9m contenha uma "),i(326,"em"),e(327,"action"),t(),e(328," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),i(329,"em"),e(330,"link"),t(),e(331,"."),t()(),i(332,"blockquote")(333,"p"),e(334,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),i(335,"strong")(336,"a",27),e(337,"Veja um exemplo de como criar rotas aqui"),t()(),e(338,"."),t()(),i(339,"blockquote")(340,"p"),e(341,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),i(342,"code"),e(343,"p-favorite-service"),t(),e(344," consiga favoritar ou desfavoritar."),t()()()()()())},dependencies:[B],encapsulation:2})}return n})();var ie=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||n)(P(z),P(H))};static \u0275cmp=s({type:n,selectors:[["ng-component"]],standalone:!1,decls:7,vars:4,consts:[["p-title"," Breadcrumb",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,o){a&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),r(3,"sample-po-breadcrumb-doc"),t(),i(4,"po-tab",3),r(5,"sample-po-breadcrumb-basic-view")(6,"sample-po-breadcrumb-labs-view"),t()()()),a&2&&(p("p-actions",o.actions),d(2),p("p-active",o.activeTab.includes("doc")),d(2),p("p-hide",o.hidePoWebSample)("p-active",o.activeTab.includes("web")))},dependencies:[J,x,C,Z,ee,te],encapsulation:2})}return n})();var fe=[{path:"",component:ie}],ne=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=y({type:n});static \u0275inj=I({imports:[V.forChild(fe),V]})}return n})();var Ne=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=y({type:n});static \u0275inj=I({imports:[K,ne]})}return n})();export{Ne as DocPoBreadcrumbModule};
