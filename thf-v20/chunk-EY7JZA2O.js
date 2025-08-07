import{a as at}from"./chunk-HENNAL3T.js";import{a as Ue,b as Ke}from"./chunk-4GUXAMV7.js";import{a as te,b as de,c as L,d as Y,e as ee,g as rt}from"./chunk-WIO6VFEC.js";import"./chunk-PQACOBOF.js";import"./chunk-HWQUH2TO.js";import{a as lt}from"./chunk-O7R5MEBM.js";import{$ as E,$a as M,$e as Ye,$f as ge,Af as $,Bb as h,Ca as V,Cb as v,Cf as ot,Da as Ae,Db as g,Ec as Oe,Hb as Le,Ia as qe,Ib as me,Ja as ke,Kb as Re,Lc as Qe,Ma as Fe,Na as Ie,Nc as j,Od as H,Of as Z,Pc as B,Pd as _,Qc as Se,Ra as c,Rc as N,Sa as i,Sc as Ge,Ta as t,Tc as f,U as we,Ua as n,Uc as J,V as ie,Vc as be,Vd as $e,Wf as X,X as De,Xb as oe,Xf as z,Yc as Ne,Zc as Be,Zf as le,_ as u,a as ce,ad as He,af as et,b as ue,bd as We,ee as G,fb as C,gb as S,gc as Me,ge as Ze,hb as U,ia as W,ib as T,jc as je,je as se,kb as A,kc as Ve,ke as Xe,lb as q,lc as ae,le as y,lf as tt,mb as k,pa as p,pf as it,qb as K,sc as ze,td as Je,te as fe,ua as R,ue as re,uf as nt,vb as e,vd as Ce,vf as ve,wb as Ee,xa as b,xb as _e,ya as ne,ye as he,zc as xe,zd as P}from"./chunk-FIDTK4XA.js";var Lt=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","templates-before",""]],[["","templates-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Rt=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[enums-before]","[enums-after]","[templates-before]","[templates-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],dt=(()=>{let l=class l{constructor(r){this.el=r}ngAfterViewInit(){this.accordions.forEach(r=>{setTimeout(()=>{r.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(r){setTimeout(()=>{let a=this.tabs.tabs.find(o=>o.elementRef.nativeElement.className===`docs-tab-${r}`);if(a){let o=a.elementRef.nativeElement;o.textContent.trim()!==""||o.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(x=>{let D=x.querySelector(".po-tab-button-label");D&&D?.textContent?.trim().toLowerCase()===r&&x.remove()}),o.remove(),a.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(x=>!x.hide)))}},100)}};l.\u0275fac=function(a){return new(a||l)(R(W))},l.\u0275cmp=b({type:l,selectors:[["api-thf-grid"]],viewQuery:function(a,o){if(a&1&&(A(z,5),A(_,5)),a&2){let s;q(s=k())&&(o.tabs=s.first),q(s=k())&&(o.accordions=s)}},standalone:!1,ngContentSelectors:Rt,decls:5848,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Function"],[1,"language-html"],["pan","",1,"docs-api-property-type","Array<ThfTableAction>"],["href","/guides/icons"],[1,"language-typescript"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<ThfAggregateDescriptor>"],["pan","",1,"docs-api-property-type","Array<ThfGridColumn>"],[1,"docs-api-deprecated-marker"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDropdownAction>"],["pan","",1,"docs-api-property-type","ThfGridEditProperties"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicSearchFilters>"],["pan","",1,"docs-api-property-type","'basic'"],["pan","",1,"docs-api-property-type","'service'"],["pan","",1,"docs-api-property-type","ThfGridRowActions"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","null"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","ThfGridLiterals"],["pan","",1,"docs-api-property-type","(()","=>","ThfGridOptions)"],["pan","",1,"docs-api-property-type","Array<ThfGridOptionPaging>"],[1,"language-json"],["pan","",1,"docs-api-property-type","ThfGridDeleteService"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","Array<ThfGridColumnSort>"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],["href","https://tdn.totvs.com/pages/releaseview.action?pageId=871520382"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["p-label","Interfaces"],["p-label","ThfTableAction"],["href","https://po-ui.io/icons"],["p-label","ThfAggregateDescriptor"],["pan","",1,"docs-api-property-type","'sum'"],["pan","",1,"docs-api-property-type","'average'"],["pan","",1,"docs-api-property-type","'count'"],["pan","",1,"docs-api-property-type","'min'"],["pan","",1,"docs-api-property-type","'max'"],["p-label","ThfGridColumnSort"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["p-label","ThfGridColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","PoTableDetail"],["pan","",1,"docs-api-property-type","CustomEditProperties"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["href","/documentation/po-table-cell-template"],["href","/documentation/po-table-column-template"],["p-label","CustomEditProperties"],["href","https://po-ui.io/documentation/po-dynamic-form"],["pan","",1,"docs-api-property-type","'input'"],["pan","",1,"docs-api-property-type","'number'"],["pan","",1,"docs-api-property-type","'select'"],["pan","",1,"docs-api-property-type","'datepicker'"],["pan","",1,"docs-api-property-type","'switch'"],["pan","",1,"docs-api-property-type","'combo'"],["pan","",1,"docs-api-property-type","'multiselect'"],["pan","",1,"docs-api-property-type","'decimal'"],["pan","",1,"docs-api-property-type","'checkbox'"],["pan","",1,"docs-api-property-type","'lookup'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["pan","",1,"docs-api-property-type","((item:","any)","=>","string)"],["pan","",1,"docs-api-property-type","Array<ThfLookupFilterSearchSelect>"],["pan","",1,"docs-api-property-type","Array<ThfLookupKeysLabel>"],["pan","",1,"docs-api-property-type","(value:","any)","=>","void"],["pan","",1,"docs-api-property-type","(model:","any)","=>","void"],["pan","",1,"docs-api-property-type","(error:","HttpErrorResponse)","=>","void"],["pan","",1,"docs-api-property-type","(selection:","any"],["pan","",1,"docs-api-property-type","Array<any>)","=>","void"],["pan","",1,"docs-api-property-type","'sm'"],["pan","",1,"docs-api-property-type","'md'"],["pan","",1,"docs-api-property-type","'lg'"],["pan","",1,"docs-api-property-type","'xl'"],["pan","",1,"docs-api-property-type","'auto'"],["p-label","ThfGridDeleteService"],["p-label","ThfGridEditProperties"],["pan","",1,"docs-api-property-type","(param:","any)","=>","FormGroup"],["pan","",1,"docs-api-property-type","(data:","any,","columnProperty:","string)","=>","FormGroup"],["p-label","ThfGridLiterals"],["p-label","ThfGridOptionPaging"],["p-label","ThfGridOptions"],["p-label","ThfGridRowActions"],["pan","",1,"docs-api-property-type","(param:","any,","mode:","'edit'"],["pan","",1,"docs-api-property-type","'include')","=>","FormGroup"],["pan","",1,"docs-api-property-type","Observable<FormGroup>"],["pan","",1,"docs-api-property-type","(row:","any)","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","Observable<boolean>"],["pan","",1,"docs-api-property-type","(updatedRow:","any,","originalRow:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","(updatedRows:","Array<any>)","=>","void"],["pan","",1,"docs-api-property-type","Array<ThfGridEditModeActionType>"],["pan","",1,"docs-api-property-type","(updatedField:","any,","columnProperty:","string)","=>","boolean"],["p-label","Enums"],["p-label","ThfColumnSpacing"],["p-label","ThfGridEditModeActionType"],["p-label","Templates"],["p-label","ThfGridCellTemplateDirective"],["p-label","ThfGridColumnTemplateDirective"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(a,o){a&1&&(U(Lt),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),T(4),t(),i(5,"po-tab",4),T(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfGridComponent"),t()(),i(16,"div",10)(17,"p"),e(18,`O grid foi criado para que voc\xEA tenha um controle de alto desempenho, oferecendo uma performance extremamente r\xE1pida,
integrando-se perfeitamente ao seu aplicativo e sendo altamente personaliz\xE1vel.`),t(),i(19,"p"),e(20,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(21,"code"),e(22,"THF-Grid"),t(),e(23,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(24,"code"),e(25,"import { ThfGridComponent } from '@totvs/thf-components';"),t()()(),i(26,"div",11)(27,"h4",12),e(28,"Seletor"),t(),i(29,"pre",13),e(30,`<thf-grid
  t-action-delete="boolean"
  t-action-edit="Function"
  t-action-excel="boolean"
  t-action-pdf="boolean"
  t-actions-right="boolean"
  t-actions="Array<ThfTableAction>"
  t-actions-filter="boolean"
  (t-delete-items)="EventEmitter"
  t-aggregates="Array<ThfAggregateDescriptor>"
  t-allow-batch-delete="boolean"
  t-auto-size="boolean"
  (t-change-fixed-columns)="EventEmitter"
  (t-change-options-column-manager)="EventEmitter"
  (t-change-visible-columns)="EventEmitter"
  (t-changed-density)="EventEmitter"
  (t-changed-items)="EventEmitter"
  (t-restore-column-manager)="EventEmitter"
  t-columns="Array<ThfGridColumn>"
  (t-columns-selected)="EventEmitter"
  t-components-size="string"
  t-custom-actions="Array<PoDropdownAction>"
  (t-custom-filter)="EventEmitter"
  (t-delete-item)="EventEmitter"
  t-disabled-include-button="boolean"
  t-draggable="boolean"
  t-edit-properties="ThfGridEditProperties"
  (t-change-page-size)="EventEmitter"
  t-fields="Array<PoPageDynamicSearchFilters>"
  t-filter-input-mode="'basic' | 'service'"
  t-grid-row-actions="ThfGridRowActions"
  t-group="Array<string>"
  t-groupable="boolean | GroupableSettings"
  t-header-template="TemplateRef<void>"
  t-headline-fixed="boolean"
  t-height="number | string | null"
  t-hide-action-fixed-columns="boolean"
  t-hide-batch-actions="boolean"
  t-hide-columns-manager="boolean"
  t-hide-select-all="boolean"
  t-hide-table-search="boolean"
  t-loading="boolean"
  t-items="Array<any>"
  t-literals="ThfGridLiterals"
  t-max-columns="number"
  t-max-height="number | string | null"
  t-max-resizable-width="number"
  t-min-height="number | string | null"
  t-min-resizable-width="number"
  (t-change-group)="EventEmitter"
  t-load="string | (() => ThfGridOptions)"
  t-options-paging="Array<ThfGridOptionPaging>"
  (t-change-order-column)="EventEmitter"
  t-page-size="number"
  t-page-size-virtual="number"
  t-pageable="boolean"
  t-param-delete-api="string"
  t-resizable="boolean"
  t-row-height="number"
  (t-rows-selected)="EventEmitter"
  t-selectable="boolean"
  t-selectable-entire-line="boolean"
  (t-selected)="EventEmitter"
  (t-all-selected)="EventEmitter"
  t-service-delete-api="string | ThfGridDeleteService"
  t-service-api="string"
  t-show-densification-configuration="boolean"
  t-show-draggable-icon="boolean"
  t-show-footer-aggregates="boolean"
  (t-show-more)="EventEmitter"
  t-show-more-disabled="boolean"
  t-single-select="boolean"
  t-sort="Array<ThfGridColumnSort>"
  (t-change-sort-column)="EventEmitter"
  t-sortable="boolean"
  t-spacing="string"
  t-striped="boolean"
  t-text-wrap="boolean"
  (t-unselected)="EventEmitter"
  (t-all-unselected)="EventEmitter"
  t-virtual-columns="boolean"
  t-virtual-scroll="boolean" >
</thf-grid>
`),t()()(),i(31,"po-accordion-item",14)(32,"h4",15),e(33,"Propriedades"),t(),i(34,"table",16)(35,"tr",17)(36,"th",18),e(37,"Nome"),t(),i(38,"th",18),e(39,"Tipo"),t(),i(40,"th",18),e(41,"Padr\xE3o"),t(),i(42,"th",18),e(43,"Descri\xE7\xE3o"),t()(),i(44,"tr",19)(45,"td",20)(46,"div",21)(47,"span",22),e(48,"t-action-delete"),n(49,"br"),t()()(),i(50,"td",23)(51,"code",24),e(52,"boolean"),t()(),i(53,"td",25)(54,"p")(55,"code"),e(56,"false"),t()()(),i(57,"td",26)(58,"em")(59,"strong"),e(60,"(opcional)"),t()(),i(61,"p"),e(62,"Exibe o bot\xE3o de Excluir. Requer que a propriedade "),i(63,"strong"),e(64,"t-selectable"),t(),e(65," esteja habilitada."),t()()(),i(66,"tr",19)(67,"td",20)(68,"div",21)(69,"span",22),e(70,"t-action-edit"),n(71,"br"),t()()(),i(72,"td",23)(73,"code",27),e(74,"Function"),t()(),i(75,"td",25),e(76,"-"),t(),i(77,"td",26)(78,"em")(79,"strong"),e(80,"(opcional)"),t()(),i(81,"p"),e(82,`Exibe o bot\xE3o de Editar e executa a fun\xE7\xE3o definida ao clicar.
Requer que a propriedade `),i(83,"strong"),e(84,"t-selectable"),t(),e(85," esteja habilitada."),t(),i(86,"pre")(87,"code",28),e(88,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-action-edit]="myFunction.bind(this)"
 [t-selectable]-true
></thf-grid>`),t()()()(),i(89,"tr",19)(90,"td",20)(91,"div",21)(92,"span",22),e(93,"t-action-excel"),n(94,"br"),t()()(),i(95,"td",23)(96,"code",24),e(97,"boolean"),t()(),i(98,"td",25)(99,"p")(100,"code"),e(101,"false"),t()()(),i(102,"td",26)(103,"em")(104,"strong"),e(105,"(opcional)"),t()(),i(106,"p"),e(107,"Exibe o bot\xE3o de Exportar. Requer que a propriedade "),i(108,"strong"),e(109,"t-selectable"),t(),e(110,` esteja habilitada.
Permite realizar o download dos dados do grid no formato `),i(111,"code"),e(112,".xlsx"),t(),e(113,"."),t()()(),i(114,"tr",19)(115,"td",20)(116,"div",21)(117,"span",22),e(118,"t-action-pdf"),n(119,"br"),t()()(),i(120,"td",23)(121,"code",24),e(122,"boolean"),t()(),i(123,"td",25)(124,"p")(125,"code"),e(126,"false"),t()()(),i(127,"td",26)(128,"em")(129,"strong"),e(130,"(opcional)"),t()(),i(131,"p"),e(132,"Exibe o bot\xE3o de Download. Requer que a propriedade "),i(133,"strong"),e(134,"t-selectable"),t(),e(135,` esteja habilitada.
Permite realizar o download dos dados do grid no formato `),i(136,"code"),e(137,"PDF"),t(),e(138,"."),t(),i(139,"blockquote")(140,"p"),e(141,"Todos os dados exportados para PDF utilizar\xE3o a fonte 'Lato', garantindo compatibilidade com a tabela de caracteres ASCII estendida."),t()()()(),i(142,"tr",19)(143,"td",20)(144,"div",21)(145,"span",22),e(146," t-actions-right"),n(147,"br"),t()()(),i(148,"td",23)(149,"code",24),e(150,"boolean"),t()(),i(151,"td",25)(152,"p")(153,"code"),e(154,"false"),t()()(),i(155,"td",26)(156,"em")(157,"strong"),e(158,"(opcional)"),t()(),i(159,"p"),e(160,"Posiciona a coluna de a\xE7\xF5es ("),i(161,"strong"),e(162,"t-actions"),t(),e(163,") \xE0 direita."),t()()(),i(164,"tr",19)(165,"td",20)(166,"div",21)(167,"span",22),e(168,"t-actions"),n(169,"br"),t()()(),i(170,"td",23)(171,"code",29),e(172,"Array<ThfTableAction>"),t()(),i(173,"td",25),e(174,"-"),t(),i(175,"td",26)(176,"em")(177,"strong"),e(178,"(opcional)"),t()(),i(179,"p"),e(180,"Permite definir uma lista de a\xE7\xF5es que implementam a interface "),i(181,"strong"),e(182,"ThfTableAction"),t(),e(183,`, adicionando uma coluna
ao grid. Se houver apenas uma a\xE7\xE3o v\xE1lida, ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrupar m\xFAltiplas a\xE7\xF5es e exibe o \xEDcone `),i(184,"a",30)(185,"strong"),e(186,"an an-caret-circle-right"),t()(),e(187,`. Ao
pressionar o \xEDcone, todas as a\xE7\xF5es ser\xE3o listadas.`),t(),i(188,"p")(189,"strong"),e(190,"A coluna n\xE3o ser\xE1 exibida se:"),t()(),i(191,"ul")(192,"li"),e(193,"a lista contiver valores inv\xE1lidos ou indefinidos;"),t(),i(194,"li"),e(195,"houver apenas uma a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),t()(),i(196,"pre")(197,"code",28),e(198,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-actions]="actionsGrid"
></thf-grid>`),t()(),i(199,"pre")(200,"code",31),e(201,`actionsGrid: Array<ThfTableAction> = [
 {
   label: '',
   action: (e: any) => {
     this.poNotification.information(\`\${e.id} - \${e.name} \`);
   },
   icon: 'ICON_MENU_OPEN',
   fixed: true
 },
];

constructor(private poNotification: PoNotificationService) {}`),t()()()(),i(202,"tr",19)(203,"td",20)(204,"div",21)(205,"span",22),e(206,"t-actions-filter"),n(207,"br"),t()()(),i(208,"td",23)(209,"code",24),e(210,"boolean"),t()(),i(211,"td",25)(212,"p")(213,"code"),e(214,"true"),t()()(),i(215,"td",26)(216,"em")(217,"strong"),e(218,"(opcional)"),t()(),i(219,"p"),e(220,`Exibe o bot\xE3o de Filtros.
Habilita um modal com op\xE7\xF5es adicionais de filtro, caso o output `),i(221,"strong"),e(222,"t-custom-filter"),t(),e(223," n\xE3o esteja em uso."),t()()(),i(224,"tr",19)(225,"td",20)(226,"div",32)(227,"span",33),e(228," (t-delete-items)"),n(229,"br"),t()()(),i(230,"td",23)(231,"code",34),e(232,"EventEmitter"),t()(),i(233,"td",25),e(234,"-"),t(),i(235,"td",26)(236,"em")(237,"strong"),e(238,"(opcional)"),t()(),i(239,"p"),e(240,`Evento disparado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado.
Retorna os itens que permanecem dispon\xEDveis.`),t()()(),i(241,"tr",19)(242,"td",20)(243,"div",21)(244,"span",22),e(245," t-aggregates"),n(246,"br"),t()()(),i(247,"td",23)(248,"code",35),e(249,"Array<ThfAggregateDescriptor>"),t()(),i(250,"td",25)(251,"p")(252,"code"),e(253,"[]"),t()()(),i(254,"td",26)(255,"em")(256,"strong"),e(257,"(opcional)"),t()(),i(258,"p"),e(259,`Possibilita apresentar totalizadores de uma ou mais colunas ao utilizar o recurso de agrupamento de colunas.
Esta propriedade recebe um array com a lista de objetos com formato da interface `),i(260,"code"),e(261,"ThfAggregateDescriptor"),t(),e(262,"."),t()()(),i(263,"tr",19)(264,"td",20)(265,"div",21)(266,"span",22),e(267," t-allow-batch-delete"),n(268,"br"),t()()(),i(269,"td",23)(270,"code",24),e(271,"boolean"),t()(),i(272,"td",25)(273,"p")(274,"code"),e(275,"false"),t()()(),i(276,"td",26)(277,"em")(278,"strong"),e(279,"(opcional)"),t()(),i(280,"p"),e(281,`Habilita a exclus\xE3o em lote dos itens selecionados na grid. Quando ativado, permite que m\xFAltiplos itens sejam exclu\xEDdos de uma vez
ao utilizar `),i(282,"strong"),e(283,"t-service-api"),t(),e(284," e/ou "),i(285,"strong"),e(286,"t-service-delete-api"),t(),e(287,", desde que o servi\xE7o implemente o m\xE9todo "),i(288,"code"),e(289,"deleteBatchItems"),t(),e(290," da interface "),i(291,"code"),e(292,"ThfGridDeleteService"),t(),e(293,"."),t()()(),i(294,"tr",19)(295,"td",20)(296,"div",21)(297,"span",22),e(298,"t-auto-size"),n(299,"br"),t()()(),i(300,"td",23)(301,"code",24),e(302,"boolean"),t()(),i(303,"td",25)(304,"p")(305,"code"),e(306,"false"),t()()(),i(307,"td",26)(308,"em")(309,"strong"),e(310,"(opcional)"),t()(),i(311,"p"),e(312,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(313,"strong"),e(314,"t-resizable"),t(),e(315," esteja habilitada."),t(),i(316,"blockquote")(317,"p"),e(318,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.
Esta propriedade \xE9 incompat\xEDvel quando t-grid-row-actions est\xE1 habilitado.`),t()()()(),i(319,"tr",19)(320,"td",20)(321,"div",32)(322,"span",33),e(323," (t-change-fixed-columns)"),n(324,"br"),t()()(),i(325,"td",23)(326,"code",34),e(327,"EventEmitter"),t()(),i(328,"td",25),e(329,"-"),t(),i(330,"td",26)(331,"em")(332,"strong"),e(333,"(opcional)"),t()(),i(334,"p"),e(335,`Evento disparado ao fechar o Gerenciar Tabela ap\xF3s alterar as colunas fixas.
Retorna um array de strings com as colunas fixas atualizadas.`),t()()(),i(336,"tr",19)(337,"td",20)(338,"div",32)(339,"span",33),e(340," (t-change-options-column-manager)"),n(341,"br"),t()()(),i(342,"td",23)(343,"code",34),e(344,"EventEmitter"),t()(),i(345,"td",25),e(346,"-"),t(),i(347,"td",26)(348,"em")(349,"strong"),e(350,"(opcional)"),t()(),i(351,"p"),e(352,`Evento disparado ao selecionar a op\xE7\xE3o draggable ou groupable no Gerenciar Tabela.
Retorna um array de strings contendo as a\xE7\xF5es habilitadas.`),t()()(),i(353,"tr",19)(354,"td",20)(355,"div",32)(356,"span",33),e(357," (t-change-visible-columns)"),n(358,"br"),t()()(),i(359,"td",23)(360,"code",34),e(361,"EventEmitter"),t()(),i(362,"td",25),e(363,"-"),t(),i(364,"td",26)(365,"em")(366,"strong"),e(367,"(opcional)"),t()(),i(368,"p"),e(369,`Evento disparado ao fechar o Gerenciar Tabela ap\xF3s alterar as colunas vis\xEDveis.
Retorna um array de strings com as colunas vis\xEDveis atualizadas.`),t()()(),i(370,"tr",19)(371,"td",20)(372,"div",32)(373,"span",33),e(374," (t-changed-density)"),n(375,"br"),t()()(),i(376,"td",23)(377,"code",34),e(378,"EventEmitter"),t()(),i(379,"td",25),e(380,"-"),t(),i(381,"td",26)(382,"em")(383,"strong"),e(384,"(opcional)"),t()(),i(385,"p"),e(386,"Evento disparado ao selecionar o tipo de densidade no Gerenciar Tabela. Retorna a densidade aplicada."),t()()(),i(387,"tr",19)(388,"td",20)(389,"div",32)(390,"span",33),e(391," (t-changed-items)"),n(392,"br"),t()()(),i(393,"td",23)(394,"code",34),e(395,"EventEmitter"),t()(),i(396,"td",25),e(397,"-"),t(),i(398,"td",26)(399,"em")(400,"strong"),e(401,"(opcional)"),t()(),i(402,"p"),e(403,"Evento emitido quando ocorre uma altera\xE7\xE3o em alguma linha da grid."),t()()(),i(404,"tr",19)(405,"td",20)(406,"div",32)(407,"span",33),e(408," (t-restore-column-manager)"),n(409,"br"),t()()(),i(410,"td",23)(411,"code",34),e(412,"EventEmitter"),t()(),i(413,"td",25),e(414,"-"),t(),i(415,"td",26)(416,"em")(417,"strong"),e(418,"(opcional)"),t()(),i(419,"p"),e(420,`Evento disparado quando pressionado o bot\xE3o 'Restaurar padr\xE3o' no Gerenciar Tabela.
Retorna um array de strings com as colunas vis\xEDveis por padr\xE3o.`),t()()(),i(421,"tr",19)(422,"td",20)(423,"div",21)(424,"span",22),e(425,"t-columns"),n(426,"br"),t()()(),i(427,"td",23)(428,"code",36),e(429,"Array<ThfGridColumn>"),t()(),i(430,"td",25),e(431,"-"),t(),i(432,"td",26)(433,"em")(434,"strong"),e(435,"(opcional)"),t()(),i(436,"p"),e(437,"Permite definir e configurar as colunas do grid que implementam a interface "),i(438,"strong"),e(439,"ThfGridColumn"),t(),e(440,"."),t(),i(441,"pre")(442,"code",28),e(443,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-columns]="columns"
></thf-grid>`),t()(),i(444,"pre")(445,"code",31),e(446,`columns: Array<ThfGridColumn> = [
 { property: 'id', visible: false },
 { property: 'name', label: 'Nome' },
}`),t()()()(),i(447,"tr",19)(448,"td",20)(449,"div",32)(450,"span",33),e(451," (t-columns-selected)"),n(452,"br"),t()(),i(453,"div",37),e(454,"Deprecated"),t()(),i(455,"td",23)(456,"code",34),e(457,"EventEmitter"),t()(),i(458,"td",25),e(459,"-"),t(),i(460,"td",26)(461,"p"),e(462,"Retorna um array indicando quais s\xE3o as linhas selecionadas no momento."),t(),i(463,"blockquote")(464,"p")(465,"strong"),e(466,"Nota"),t(),e(467,`: Este evento est\xE1 depreciado e ser\xE1 removido na vers\xE3o 21. Recomendamos
utilizar o evento `),i(468,"code"),e(469,"t-rows-selected"),t(),e(470,", que j\xE1 est\xE1 dispon\xEDvel e oferece a mesma funcionalidade."),t()()()(),i(471,"tr",19)(472,"td",20)(473,"div",21)(474,"span",22),e(475,"t-components-size"),n(476,"br"),t()()(),i(477,"td",23)(478,"code",38),e(479,"string"),t()(),i(480,"td",25)(481,"p")(482,"code"),e(483,"medium"),t()()(),i(484,"td",26)(485,"em")(486,"strong"),e(487,"(opcional)"),t()(),i(488,"p"),e(489,"Define o tamanho dos componentes de formul\xE1rio no grid:"),t(),i(490,"ul")(491,"li")(492,"code"),e(493,"small"),t(),e(494,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(495,"li")(496,"code"),e(497,"medium"),t(),e(498,": aplica a medida medium de cada componente."),t()(),i(499,"blockquote")(500,"p"),e(501,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(502,"code"),e(503,"medium"),t(),e(504,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(505,"a",39),e(506,"po-theme"),t(),e(507,"."),t()()()(),i(508,"tr",19)(509,"td",20)(510,"div",21)(511,"span",22),e(512,"t-custom-actions"),n(513,"br"),t()()(),i(514,"td",23)(515,"code",40),e(516,"Array<PoDropdownAction>"),t()(),i(517,"td",25),e(518,"-"),t(),i(519,"td",26)(520,"em")(521,"strong"),e(522,"(opcional)"),t()(),i(523,"p"),e(524,"Permite adicionar a\xE7\xF5es customizadas que implementam a interface "),i(525,"strong"),e(526,"PoDropdownAction"),t(),e(527,`.
Essas a\xE7\xF5es ser\xE3o exibidas no dropdown 'Mais a\xE7\xF5es' ao selecionar um item.
Requer que a propriedade `),i(528,"strong"),e(529,"t-selectable"),t(),e(530," esteja habilitada."),t(),i(531,"pre")(532,"code",28),e(533,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-custom-actions]="customActions"
 [t-selectable]="true"></thf-grid>`),t()(),i(534,"pre")(535,"code",31),e(536,`customActions: Array<PoDropdownAction> = [
 { label: 'Hist\xF3rico', action: this.myAction.bind(this) }];

myAction() {
 window.alert('voce clicou em hist\xF3rico!');
}`),t()()()(),i(537,"tr",19)(538,"td",20)(539,"div",32)(540,"span",33),e(541," (t-custom-filter)"),n(542,"br"),t()()(),i(543,"td",23)(544,"code",34),e(545,"EventEmitter"),t()(),i(546,"td",25),e(547,"-"),t(),i(548,"td",26)(549,"em")(550,"strong"),e(551,"(opcional)"),t()(),i(552,"p"),e(553,"Evento disparado ao clicar no menu Filtros."),t()()(),i(554,"tr",19)(555,"td",20)(556,"div",32)(557,"span",33),e(558," (t-delete-item)"),n(559,"br"),t()()(),i(560,"td",23)(561,"code",34),e(562,"EventEmitter"),t()(),i(563,"td",25),e(564,"-"),t(),i(565,"td",26)(566,"em")(567,"strong"),e(568,"(opcional)"),t()(),i(569,"p"),e(570,"Evento disparado ao excluir um item. Retorna o item exclu\xEDdo."),t()()(),i(571,"tr",19)(572,"td",20)(573,"div",21)(574,"span",22),e(575,"t-disabled-include-button"),n(576,"br"),t()()(),i(577,"td",23)(578,"code",24),e(579,"boolean"),t()(),i(580,"td",25)(581,"p")(582,"code"),e(583,"false"),t()()(),i(584,"td",26)(585,"em")(586,"strong"),e(587,"(opcional)"),t()(),i(588,"p"),e(589,`Desabilita o bot\xE3o de Incluir. Ao definir como true, o bot\xE3o ser\xE1 desabilitado.
Ideal para cen\xE1rios onde a inclus\xE3o de novas linhas deve ser restrita.`),t()()(),i(590,"tr",19)(591,"td",20)(592,"div",21)(593,"span",22),e(594,"t-draggable"),n(595,"br"),t()()(),i(596,"td",23)(597,"code",24),e(598,"boolean"),t()(),i(599,"td",25)(600,"p")(601,"code"),e(602,"false"),t()()(),i(603,"td",26)(604,"em")(605,"strong"),e(606,"(opcional)"),t()(),i(607,"p"),e(608,"Habilita o Drag and Drop nas colunas."),t()()(),i(609,"tr",19)(610,"td",20)(611,"div",21)(612,"span",22),e(613,"t-edit-properties"),n(614,"br"),t()()(),i(615,"td",23)(616,"code",41),e(617,"ThfGridEditProperties"),t()(),i(618,"td",25),e(619,"-"),t(),i(620,"td",26)(621,"em")(622,"strong"),e(623,"(opcional)"),t()(),i(624,"p"),e(625,"Permite configurar a edi\xE7\xE3o em linha, implementando a interface "),i(626,"strong"),e(627,"ThfGridEditProperties"),t(),e(628,`.
Exemplo de uso na aba Interfaces >> ThfGridEditProperties.`),t(),i(629,"blockquote")(630,"p"),e(631,"Para garantir o correto funcionamento da conclus\xE3o da edi\xE7\xE3o dos dados, \xE9 necess\xE1rio que os dados contenham uma coluna de ID ou que pelo menos uma coluna tenha a propriedade KEY definida como true."),t()()()(),i(632,"tr",19)(633,"td",20)(634,"div",32)(635,"span",33),e(636," (t-change-page-size)"),n(637,"br"),t()()(),i(638,"td",23)(639,"code",34),e(640,"EventEmitter"),t()(),i(641,"td",25),e(642,"-"),t(),i(643,"td",26)(644,"em")(645,"strong"),e(646,"(opcional)"),t()(),i(647,"p"),e(648,"Evento disparado ao alterar a quantidade de itens por p\xE1gina. Retorna um objeto com o page-size atual."),t()()(),i(649,"tr",19)(650,"td",20)(651,"div",21)(652,"span",22),e(653,"t-fields"),n(654,"br"),t()()(),i(655,"td",23)(656,"code",42),e(657,"Array<PoPageDynamicSearchFilters>"),t()(),i(658,"td",25),e(659,"-"),t(),i(660,"td",26)(661,"em")(662,"strong"),e(663,"(opcional)"),t()(),i(664,"p"),e(665,"Permite definir os campos filtr\xE1veis na janela 'Filtros', implementando a interface "),i(666,"strong"),e(667,"PoPageDynamicSearchFilters"),t(),e(668,"."),t(),i(669,"pre")(670,"code",28),e(671,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-fields]="customFields"
></thf-grid>`),t()(),i(672,"pre")(673,"code",31),e(674,"customFields: Array<PoPageDynamicSearchFilters> = [{ property: 'name', required: true, showRequired: true }]"),t()()()(),i(675,"tr",19)(676,"td",20)(677,"div",21)(678,"span",22),e(679,"t-filter-input-mode"),n(680,"br"),t()()(),i(681,"td",23)(682,"code",43),e(683,"'basic' "),t(),i(684,"code",44),e(685," 'service'"),t()(),i(686,"td",25)(687,"p")(688,"code"),e(689,"basic"),t()()(),i(690,"td",26)(691,"em")(692,"strong"),e(693,"(opcional)"),t()(),i(694,"p"),e(695,"Define o modo do filtro para o input de pesquisa."),t()()(),i(696,"tr",19)(697,"td",20)(698,"div",21)(699,"span",22),e(700,"t-grid-row-actions"),n(701,"br"),t()()(),i(702,"td",23)(703,"code",45),e(704,"ThfGridRowActions"),t()(),i(705,"td",25),e(706,"-"),t(),i(707,"td",26)(708,"em")(709,"strong"),e(710,"(opcional)"),t()(),i(711,"p"),e(712,"Configura a edi\xE7\xE3o flu\xEDda, implementando a interface "),i(713,"strong"),e(714,"ThfGridRowActions"),t(),e(715,`.
Permite manipular o comportamento das a\xE7\xF5es de linha, como edi\xE7\xE3o, inclus\xE3o e remo\xE7\xE3o de itens.
\xC9 poss\xEDvel definir fun\xE7\xF5es espec\xEDficas para controlar as a\xE7\xF5es antes e depois das opera\xE7\xF5es.
Fundamental para implementar um fluxo de manipula\xE7\xE3o de dados totalmente personalizado.`),t(),i(716,"blockquote")(717,"p"),e(718,`Ao habilitar t-grid-row-actions a propriedade t-auto-size \xE9 desabilitada para manter a padroniza\xE7\xE3o das larguras das colunas edit\xE1veis.
Quando o t-grid-row-actions \xE9 habilitado, a propriedade t-resizable \xE9 ativada automaticamente.`),t()()()(),i(719,"tr",19)(720,"td",20)(721,"div",21)(722,"span",22),e(723," t-group"),n(724,"br"),t()()(),i(725,"td",23)(726,"code",46),e(727,"Array<string>"),t()(),i(728,"td",25),e(729,"-"),t(),i(730,"td",26)(731,"em")(732,"strong"),e(733,"(opcional)"),t()(),i(734,"p"),e(735,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(736,"strong"),e(737,"t-groupable"),t(),e(738," esteja habilitada."),t()()(),i(739,"tr",19)(740,"td",20)(741,"div",21)(742,"span",22),e(743,"t-groupable"),n(744,"br"),t()()(),i(745,"td",23)(746,"code",24),e(747,"boolean "),t(),i(748,"code",47),e(749," GroupableSettings"),t()(),i(750,"td",25)(751,"p")(752,"code"),e(753,"false"),t()()(),i(754,"td",26)(755,"em")(756,"strong"),e(757,"(opcional)"),t()(),i(758,"p"),e(759,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(760,"tr",19)(761,"td",20)(762,"div",21)(763,"span",22),e(764,"t-header-template"),n(765,"br"),t()()(),i(766,"td",23)(767,"code",48),e(768,"TemplateRef<void>"),t()(),i(769,"td",25),e(770,"-"),t(),i(771,"td",26)(772,"em")(773,"strong"),e(774,"(opcional)"),t()(),i(775,"p"),e(776,"Container aberto para adicionar conte\xFAdo entre o cabe\xE7alho de a\xE7\xF5es e a lista do grid."),t(),i(777,"pre")(778,"code",28),e(779,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-header-template]="template"
></thf-grid>

<ng-template #template>
 <div style="display: flex; gap: 8px; align-items: center;">
   <po-tag [p-type]="tagTypeDanger" p-value="Remover todos"> </po-tag>
   <po-tag [p-type]="tagTypeInfo" [p-removable]="true" p-value="Brasil"> </po-tag>
   <po-tag [p-type]="tagTypeInfo" [p-removable]="true" p-value="College"> </po-tag>
 </div>
</ng-template>`),t()()()(),i(780,"tr",19)(781,"td",20)(782,"div",21)(783,"span",22),e(784,"t-headline-fixed"),n(785,"br"),t()()(),i(786,"td",23)(787,"code",24),e(788,"boolean"),t()(),i(789,"td",25)(790,"p")(791,"code"),e(792,"false"),t()()(),i(793,"td",26)(794,"em")(795,"strong"),e(796,"(opcional)"),t()(),i(797,"p"),e(798,"Define o cabe\xE7alho do grid como fixo, desde que a altura ("),i(799,"strong"),e(800,"t-height"),t(),e(801,") n\xE3o esteja definida."),t()()(),i(802,"tr",19)(803,"td",20)(804,"div",21)(805,"span",22),e(806,"t-height"),n(807,"br"),t()()(),i(808,"td",23)(809,"code",49),e(810,"number "),t(),i(811,"code",38),e(812," string "),t(),i(813,"code",50),e(814," null"),t()(),i(815,"td",25)(816,"p"),e(817,"100%"),t()(),i(818,"td",26)(819,"em")(820,"strong"),e(821,"(opcional)"),t()(),i(822,"p"),e(823,"Define a altura da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(824,"code"),e(825,'"<n\xFAmero>%"'),t(),e(826,")."),t(),i(827,"ul")(828,"li"),e(829,"Se "),i(830,"strong"),e(831,"n\xE3o informado"),t(),e(832,", a altura da tabela ser\xE1 ajustada automaticamente pela quantidade de itens."),t(),i(833,"li"),e(834,"Caso seja informado um valor inv\xE1lido, ser\xE1 aplicado "),i(835,"strong"),e(836,"100%"),t(),e(837," como padr\xE3o."),t(),i(838,"li"),e(839,"Se "),i(840,"code"),e(841,"t-height"),t(),e(842," for menor que "),i(843,"code"),e(844,"t-min-height"),t(),e(845,", a altura m\xEDnima ser\xE1 aplicada."),t(),i(846,"li"),e(847,"Se "),i(848,"code"),e(849,"t-height"),t(),e(850," for maior que "),i(851,"code"),e(852,"t-max-height"),t(),e(853,", a altura m\xE1xima ser\xE1 aplicada."),t()(),i(854,"blockquote")(855,"p")(856,"strong"),e(857,"Observa\xE7\xE3o:"),t(),e(858," Quando definido, o "),i(859,"strong"),e(860,"virtual scroll"),t(),e(861," ser\xE1 ativado automaticamente. Consulte a documenta\xE7\xE3o da propriedade "),i(862,"strong"),e(863,"t-virtual-scroll"),t(),e(864," para mais detalhes."),t()()()(),i(865,"tr",19)(866,"td",20)(867,"div",21)(868,"span",22),e(869,"t-hide-action-fixed-columns"),n(870,"br"),t()()(),i(871,"td",23)(872,"code",24),e(873,"boolean"),t()(),i(874,"td",25)(875,"p")(876,"code"),e(877,"false"),t()()(),i(878,"td",26)(879,"em")(880,"strong"),e(881,"(opcional)"),t()(),i(882,"p"),e(883,`Controla a visibilidade da op\xE7\xE3o de fixar colunas no Gerenciar Tabela.
Se alguma coluna j\xE1 estiver fixa quando essa propriedade for habilitada,
ela permanecer\xE1 fixa, garantindo que ocultar as op\xE7\xF5es de fixar n\xE3o afete o estado das colunas j\xE1 fixadas.`),t()()(),i(884,"tr",19)(885,"td",20)(886,"div",21)(887,"span",22),e(888," t-hide-batch-actions"),n(889,"br"),t()()(),i(890,"td",23)(891,"code",24),e(892,"boolean"),t()(),i(893,"td",25)(894,"p")(895,"code"),e(896,"false"),t()()(),i(897,"td",26)(898,"em")(899,"strong"),e(900,"(opcional)"),t()(),i(901,"p"),e(902,"Permite ocultar as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens."),t()()(),i(903,"tr",19)(904,"td",20)(905,"div",21)(906,"span",22),e(907,"t-hide-columns-manager"),n(908,"br"),t()()(),i(909,"td",23)(910,"code",24),e(911,"boolean"),t()(),i(912,"td",25)(913,"p")(914,"code"),e(915,"false"),t()()(),i(916,"td",26)(917,"em")(918,"strong"),e(919,"(opcional)"),t()(),i(920,"p"),e(921,"Permite ocultar o bot\xE3o Gerenciar Tabela."),t()()(),i(922,"tr",19)(923,"td",20)(924,"div",21)(925,"span",22),e(926,"t-hide-select-all"),n(927,"br"),t()()(),i(928,"td",23)(929,"code",24),e(930,"boolean"),t()(),i(931,"td",25)(932,"p")(933,"code"),e(934,"false"),t()()(),i(935,"td",26)(936,"em")(937,"strong"),e(938,"(opcional)"),t()(),i(939,"p"),e(940,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(941,"tr",19)(942,"td",20)(943,"div",21)(944,"span",22),e(945,"t-hide-table-search"),n(946,"br"),t()()(),i(947,"td",23)(948,"code",24),e(949,"boolean"),t()(),i(950,"td",25)(951,"p")(952,"code"),e(953,"false"),t()()(),i(954,"td",26)(955,"em")(956,"strong"),e(957,"(opcional)"),t()(),i(958,"p"),e(959,"Permite ocultar o campo de pesquisa."),t()()(),i(960,"tr",19)(961,"td",20)(962,"div",21)(963,"span",22),e(964," t-loading"),n(965,"br"),t()()(),i(966,"td",23)(967,"code",24),e(968,"boolean"),t()(),i(969,"td",25)(970,"p")(971,"code"),e(972,"false"),t()()(),i(973,"td",26)(974,"em")(975,"strong"),e(976,"(opcional)"),t()(),i(977,"p"),e(978,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados do grid."),t()()(),i(979,"tr",19)(980,"td",20)(981,"div",21)(982,"span",22),e(983,"t-items"),n(984,"br"),t()()(),i(985,"td",23)(986,"code",51),e(987,"Array<any>"),t()(),i(988,"td",25),e(989,"-"),t(),i(990,"td",26)(991,"em")(992,"strong"),e(993,"(opcional)"),t()(),i(994,"p"),e(995,`Permite listar os itens no grid.
Cada item do array representa uma linha no grid e deve conter as propriedades
que correspondem \xE0s colunas definidas no grid.`),t(),i(996,"pre")(997,"code",28),e(998,`// Exemplo de uso:
<thf-grid
 [t-items]="[{ name: 'M\xF4nica'}, { name: 'Cebolinha'}]"
></thf-grid>`),t()()()(),i(999,"tr",19)(1e3,"td",20)(1001,"div",21)(1002,"span",22),e(1003,"t-literals"),n(1004,"br"),t()()(),i(1005,"td",23)(1006,"code",52),e(1007,"ThfGridLiterals"),t()(),i(1008,"td",25),e(1009,"-"),t(),i(1010,"td",26)(1011,"em")(1012,"strong"),e(1013,"(opcional)"),t()(),i(1014,"p"),e(1015,"Permite definir literais personalizados para o componente, conforme a interface "),i(1016,"strong"),e(1017,"ThfGridLiterals"),t(),e(1018,"."),t(),i(1019,"pre")(1020,"code",28),e(1021,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-literals]="customLiterals"
></thf-grid>`),t()(),i(1022,"pre")(1023,"code",31),e(1024,"customLiterals: ThfGridLiterals = { advancedSearch: 'Mais filtros' };"),t()()()(),i(1025,"tr",19)(1026,"td",20)(1027,"div",21)(1028,"span",22),e(1029,"t-max-columns"),n(1030,"br"),t()()(),i(1031,"td",23)(1032,"code",49),e(1033,"number"),t()(),i(1034,"td",25),e(1035,"-"),t(),i(1036,"td",26)(1037,"em")(1038,"strong"),e(1039,"(opcional)"),t()(),i(1040,"p"),e(1041,`Define a quantidade m\xE1xima de colunas que ser\xE3o exibidas no grid.
Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o desabilitadas e
caso houver mais colunas vis\xEDveis do que o permitido, as excedentes ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),t()()(),i(1042,"tr",19)(1043,"td",20)(1044,"div",21)(1045,"span",22),e(1046," t-max-height"),n(1047,"br"),t()()(),i(1048,"td",23)(1049,"code",49),e(1050,"number "),t(),i(1051,"code",38),e(1052," string "),t(),i(1053,"code",50),e(1054," null"),t()(),i(1055,"td",25),e(1056,"-"),t(),i(1057,"td",26)(1058,"em")(1059,"strong"),e(1060,"(opcional)"),t()(),i(1061,"p"),e(1062,"Define a "),i(1063,"strong"),e(1064,"altura m\xE1xima"),t(),e(1065," da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1066,"code"),e(1067,'"<n\xFAmero>%"'),t(),e(1068,")."),t(),i(1069,"ul")(1070,"li"),e(1071,"Se "),i(1072,"strong"),e(1073,"n\xE3o informado"),t(),e(1074,", a altura m\xE1xima ser\xE1 definida pela propriedade "),i(1075,"code"),e(1076,"t-height"),t(),e(1077,", se existir."),t(),i(1078,"li"),e(1079,"Caso "),i(1080,"code"),e(1081,"t-height"),t(),e(1082," seja "),i(1083,"strong"),e(1084,"maior"),t(),e(1085," que "),i(1086,"code"),e(1087,"t-max-height"),t(),e(1088,", o grid usar\xE1 "),i(1089,"code"),e(1090,"t-max-height"),t(),e(1091," como limite superior."),t(),i(1092,"li"),e(1093,"Caso o valor passado seja inv\xE1lido, "),i(1094,"strong"),e(1095,"nenhuma altura m\xE1xima ser\xE1 aplicada"),t(),e(1096,"."),t()()()(),i(1097,"tr",19)(1098,"td",20)(1099,"div",21)(1100,"span",22),e(1101,"t-max-resizable-width"),n(1102,"br"),t()()(),i(1103,"td",23)(1104,"code",49),e(1105,"number"),t()(),i(1106,"td",25),e(1107,"-"),t(),i(1108,"td",26)(1109,"em")(1110,"strong"),e(1111,"(opcional)"),t()(),i(1112,"p"),e(1113,"Define a largura m\xE1xima para redimensionar uma coluna. Requer que a propriedade "),i(1114,"strong"),e(1115,"t-resizable"),t(),e(1116," esteja habilitada."),t()()(),i(1117,"tr",19)(1118,"td",20)(1119,"div",21)(1120,"span",22),e(1121," t-min-height"),n(1122,"br"),t()()(),i(1123,"td",23)(1124,"code",49),e(1125,"number "),t(),i(1126,"code",38),e(1127," string "),t(),i(1128,"code",50),e(1129," null"),t()(),i(1130,"td",25),e(1131,"-"),t(),i(1132,"td",26)(1133,"em")(1134,"strong"),e(1135,"(opcional)"),t()(),i(1136,"p"),e(1137,"Define a "),i(1138,"strong"),e(1139,"altura m\xEDnima"),t(),e(1140," da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1141,"code"),e(1142,'"<n\xFAmero>%"'),t(),e(1143,")."),t(),i(1144,"ul")(1145,"li"),e(1146,"Se "),i(1147,"strong"),e(1148,"n\xE3o informado"),t(),e(1149,", a altura m\xEDnima ser\xE1 definida pela propriedade "),i(1150,"code"),e(1151,"t-height"),t(),e(1152,", se existir."),t(),i(1153,"li"),e(1154,"Caso "),i(1155,"code"),e(1156,"t-height"),t(),e(1157," seja "),i(1158,"strong"),e(1159,"menor"),t(),e(1160," que "),i(1161,"code"),e(1162,"t-min-height"),t(),e(1163,", o grid usar\xE1 "),i(1164,"code"),e(1165,"t-min-height"),t(),e(1166," como limite inferior."),t(),i(1167,"li"),e(1168,"Caso o valor passado seja inv\xE1lido, "),i(1169,"strong"),e(1170,"nenhuma altura m\xEDnima ser\xE1 aplicada"),t(),e(1171,"."),t()()()(),i(1172,"tr",19)(1173,"td",20)(1174,"div",21)(1175,"span",22),e(1176,"t-min-resizable-width"),n(1177,"br"),t()()(),i(1178,"td",23)(1179,"code",49),e(1180,"number"),t()(),i(1181,"td",25)(1182,"p")(1183,"code"),e(1184,"10"),t()()(),i(1185,"td",26)(1186,"em")(1187,"strong"),e(1188,"(opcional)"),t()(),i(1189,"p"),e(1190,"Define a largura m\xEDnima para redimensionar uma coluna. Requer que a propriedade "),i(1191,"strong"),e(1192,"t-resizable"),t(),e(1193," esteja habilitada."),t()()(),i(1194,"tr",19)(1195,"td",20)(1196,"div",32)(1197,"span",33),e(1198," (t-change-group)"),n(1199,"br"),t()()(),i(1200,"td",23)(1201,"code",34),e(1202,"EventEmitter"),t()(),i(1203,"td",25),e(1204,"-"),t(),i(1205,"td",26)(1206,"em")(1207,"strong"),e(1208,"(opcional)"),t()(),i(1209,"p"),e(1210,"Evento disparado quando ocorre o agrupamento no grid. Retorna um array de strings das colunas agrupadas."),t()()(),i(1211,"tr",19)(1212,"td",20)(1213,"div",21)(1214,"span",22),e(1215," t-load"),n(1216,"br"),t()()(),i(1217,"td",23)(1218,"code",38),e(1219,"string "),t(),i(1220,"code",53),e(1221," (() => ThfGridOptions)"),t()(),i(1222,"td",25),e(1223,"-"),t(),i(1224,"td",26)(1225,"em")(1226,"strong"),e(1227,"(opcional)"),t()(),i(1228,"p"),e(1229,`Define dinamicamente as colunas e a\xE7\xF5es do grid ap\xF3s o carregamento inicial dos dados.
Pode ser uma URL que retorna a configura\xE7\xE3o via GET ou uma fun\xE7\xE3o que retorna a configura\xE7\xE3o diretamente.
Quando fun\xE7\xE3o, a propriedade deve implementar a interface `),i(1230,"strong"),e(1231,"ThfGridOptions"),t(),e(1232,"."),t()()(),i(1233,"tr",19)(1234,"td",20)(1235,"div",21)(1236,"span",22),e(1237,"t-options-paging"),n(1238,"br"),t()()(),i(1239,"td",23)(1240,"code",54),e(1241,"Array<ThfGridOptionPaging>"),t()(),i(1242,"td",25),e(1243,"-"),t(),i(1244,"td",26)(1245,"em")(1246,"strong"),e(1247,"(opcional)"),t()(),i(1248,"p"),e(1249,"Define as op\xE7\xF5es de itens por p\xE1gina, implementando a interface "),i(1250,"strong"),e(1251,"ThfGridOptionPaging"),t(),e(1252,`.
Requer que a propriedade `),i(1253,"strong"),e(1254,"t-pageable"),t(),e(1255," esteja habilitada."),t()()(),i(1256,"tr",19)(1257,"td",20)(1258,"div",32)(1259,"span",33),e(1260," (t-change-order-column)"),n(1261,"br"),t()()(),i(1262,"td",23)(1263,"code",34),e(1264,"EventEmitter"),t()(),i(1265,"td",25),e(1266,"-"),t(),i(1267,"td",26)(1268,"em")(1269,"strong"),e(1270,"(opcional)"),t()(),i(1271,"p"),e(1272,`Evento disparado quando a ordem das colunas \xE9 alterada atrav\xE9s do Gerenciar Tabela ou pelo Draggable.
Retorna um array de strings.`),t()()(),i(1273,"tr",19)(1274,"td",20)(1275,"div",21)(1276,"span",22),e(1277,"t-page-size"),n(1278,"br"),t()()(),i(1279,"td",23)(1280,"code",49),e(1281,"number"),t()(),i(1282,"td",25)(1283,"p")(1284,"code"),e(1285,"10"),t()()(),i(1286,"td",26)(1287,"em")(1288,"strong"),e(1289,"(opcional)"),t()(),i(1290,"p"),e(1291,"Define a quantidade de itens default na p\xE1gina. Requer que a propriedade "),i(1292,"strong"),e(1293,"t-pageable"),t(),e(1294," esteja habilitada."),t()()(),i(1295,"tr",19)(1296,"td",20)(1297,"div",21)(1298,"span",22),e(1299,"t-page-size-virtual"),n(1300,"br"),t()()(),i(1301,"td",23)(1302,"code",49),e(1303,"number"),t()(),i(1304,"td",25)(1305,"p")(1306,"code"),e(1307,"60"),t()()(),i(1308,"td",26)(1309,"em")(1310,"strong"),e(1311,"(opcional)"),t()(),i(1312,"p"),e(1313,`Necess\xE1rio quando o virtual scroll est\xE1 habilitado para evitar comportamentos inesperados durante a rolagem.
Recomenda-se que o valor seja pelo menos 3 vezes o n\xFAmero de itens vis\xEDveis no grid.`),t()()(),i(1314,"tr",19)(1315,"td",20)(1316,"div",21)(1317,"span",22),e(1318,"t-pageable"),n(1319,"br"),t()()(),i(1320,"td",23)(1321,"code",24),e(1322,"boolean"),t()(),i(1323,"td",25)(1324,"p")(1325,"code"),e(1326,"false"),t()()(),i(1327,"td",26)(1328,"em")(1329,"strong"),e(1330,"(opcional)"),t()(),i(1331,"p"),e(1332,"Exibe o bot\xE3o 'Carregar mais resultados' e habilita a pagina\xE7\xE3o no Gerenciar Tabela."),t()()(),i(1333,"tr",19)(1334,"td",20)(1335,"div",21)(1336,"span",22),e(1337,"t-param-delete-api"),n(1338,"br"),t()()(),i(1339,"td",23)(1340,"code",38),e(1341,"string"),t()(),i(1342,"td",25),e(1343,"-"),t(),i(1344,"td",26)(1345,"em")(1346,"strong"),e(1347,"(opcional)"),t()(),i(1348,"p"),e(1349,"Define o par\xE2metro para a requisi\xE7\xE3o de DELETE ou POST(caso a propriedade "),i(1350,"code"),e(1351,"t-allow-batch-delete"),t(),e(1352," seja definida)."),t(),i(1353,"p"),e(1354,"Quando "),i(1355,"strong"),e(1356,"t-service-delete-api"),t(),e(1357," estiver configurado e o valor de "),i(1358,"strong"),e(1359,"t-param-delete-api"),t(),e(1360,` n\xE3o for informado,
por padr\xE3o, ser\xE1 enviado `),i(1361,"code"),e(1362,"key"),t(),e(1363," (definido ao usar "),i(1364,"strong"),e(1365,"ThfGridColumn"),t(),e(1366,") ou, na aus\xEAncia, "),i(1367,"code"),e(1368,"id"),t(),e(1369,`. Caso
`),i(1370,"strong"),e(1371,"t-service-delete-api"),t(),e(1372," n\xE3o esteja definido, ser\xE1 considerada a URL de "),i(1373,"strong"),e(1374,"t-service-api"),t(),e(1375,"."),t(),i(1376,"blockquote")(1377,"p"),e(1378,"Durante a exclus\xE3o de um \xFAnico item, ele ser\xE1 enviado como par\xE2metro na URL, conforme o exemplo abaixo:"),t(),i(1379,"pre")(1380,"code"),e(1381,`// Considerando t-param-delete-api="email"
DELETE /items?email=email1@example.com`),t()(),i(1382,"p"),e(1383,"Caso o valor n\xE3o seja uma propriedade v\xE1lida do item, o grid ir\xE1 considerar as keys definidas na coluna"),t(),i(1384,"pre")(1385,"code"),e(1386,`// Considerando t-param-delete-api="propriedadeInexistente" e as colunas "id" e "email" com keys definidas
DELETE /items?propriedadeInexistente=1|email1@example.com`),t()(),i(1387,"p"),e(1388,"Na aus\xEAncia do t-param-delete-api e das keys, o grid ir\xE1 considerar o id do item e enviar diretamente como par\xE2metro na URL:"),t(),i(1389,"pre")(1390,"code"),e(1391,`// Considerando t-param-delete-api="email" e sem keys definidas
DELETE /items/1`),t()()(),i(1392,"blockquote")(1393,"p"),e(1394,"Durante a exclus\xE3o em lote, ele ser\xE1 enviado no corpo da requisi\xE7\xE3o POST como o \xEDndice "),i(1395,"code"),e(1396,"paramDelete"),t(),e(1397,", conforme o exemplo abaixo:"),t(),i(1398,"pre")(1399,"code",55),e(1400,`// Considerando t-param-delete-api="email"
{
  items: [
    { id: '1', email: 'email1@example.com' },
    { id: '2', email: 'email2@example.com' }
  ],
  keys: ['email1@example.com', 'email2@example.com'],
  total: 2,
  paramDelete: "email"
}`),t()()()()(),i(1401,"tr",19)(1402,"td",20)(1403,"div",21)(1404,"span",22),e(1405,"t-resizable"),n(1406,"br"),t()()(),i(1407,"td",23)(1408,"code",24),e(1409,"boolean"),t()(),i(1410,"td",25)(1411,"p")(1412,"code"),e(1413,"false"),t()()(),i(1414,"td",26)(1415,"em")(1416,"strong"),e(1417,"(opcional)"),t()(),i(1418,"p"),e(1419,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1420,"tr",19)(1421,"td",20)(1422,"div",21)(1423,"span",22),e(1424,"t-row-height"),n(1425,"br"),t()()(),i(1426,"td",23)(1427,"code",49),e(1428,"number"),t()(),i(1429,"td",25),e(1430,"-"),t(),i(1431,"td",26)(1432,"em")(1433,"strong"),e(1434,"(opcional)"),t()(),i(1435,"p"),e(1436,`Define a altura da linha quando o virtual scroll est\xE1 habilitado.
Necess\xE1ria para calcular corretamente o n\xFAmero de itens vis\xEDveis e evitar comportamentos inesperados durante a rolagem.
Recomenda-se o uso dessa propriedade ao utilizar colunas com templates personalizados
(`),i(1437,"code"),e(1438,"columnTemplate"),t(),e(1439," e "),i(1440,"code"),e(1441,"cellTemplate"),t(),e(1442,")."),t()()(),i(1443,"tr",19)(1444,"td",20)(1445,"div",32)(1446,"span",33),e(1447," (t-rows-selected)"),n(1448,"br"),t()()(),i(1449,"td",23)(1450,"code",34),e(1451,"EventEmitter"),t()(),i(1452,"td",25),e(1453,"-"),t(),i(1454,"td",26)(1455,"p"),e(1456,"Retorna um array indicando quais s\xE3o as linhas selecionadas no momento."),t()()(),i(1457,"tr",19)(1458,"td",20)(1459,"div",21)(1460,"span",22),e(1461,"t-selectable"),n(1462,"br"),t()()(),i(1463,"td",23)(1464,"code",24),e(1465,"boolean"),t()(),i(1466,"td",25)(1467,"p")(1468,"code"),e(1469,"false"),t()()(),i(1470,"td",26)(1471,"em")(1472,"strong"),e(1473,"(opcional)"),t()(),i(1474,"p"),e(1475,`Habilita a sele\xE7\xE3o de itens, adicionando uma coluna com checkbox.
A sele\xE7\xE3o padr\xE3o \xE9 m\xFAltipla, permitindo selecionar v\xE1rios itens ao mesmo tempo.`),t()()(),i(1476,"tr",19)(1477,"td",20)(1478,"div",21)(1479,"span",22),e(1480,"t-selectable-entire-line"),n(1481,"br"),t()()(),i(1482,"td",23)(1483,"code",24),e(1484,"boolean"),t()(),i(1485,"td",25)(1486,"p")(1487,"code"),e(1488,"true"),t()()(),i(1489,"td",26)(1490,"em")(1491,"strong"),e(1492,"(opcional)"),t()(),i(1493,"p"),e(1494,"Permite selecionar o item ao clicar na linha. Requer que a propriedade "),i(1495,"strong"),e(1496,"t-selectable"),t(),e(1497," esteja habilitada."),t()()(),i(1498,"tr",19)(1499,"td",20)(1500,"div",32)(1501,"span",33),e(1502," (t-selected)"),n(1503,"br"),t()()(),i(1504,"td",23)(1505,"code",34),e(1506,"EventEmitter"),t()(),i(1507,"td",25),e(1508,"-"),t(),i(1509,"td",26)(1510,"em")(1511,"strong"),e(1512,"(opcional)"),t()(),i(1513,"p"),e(1514,"Evento disparado quando selecionado um item. Retorna o item selecionado."),t()()(),i(1515,"tr",19)(1516,"td",20)(1517,"div",32)(1518,"span",33),e(1519," (t-all-selected)"),n(1520,"br"),t()()(),i(1521,"td",23)(1522,"code",34),e(1523,"EventEmitter"),t()(),i(1524,"td",25),e(1525,"-"),t(),i(1526,"td",26)(1527,"em")(1528,"strong"),e(1529,"(opcional)"),t()(),i(1530,"p"),e(1531,"Evento disparado quando selecionado todos os itens. Retorna todos os itens selecionados."),t()()(),i(1532,"tr",19)(1533,"td",20)(1534,"div",21)(1535,"span",22),e(1536,"t-service-delete-api"),n(1537,"br"),t()()(),i(1538,"td",23)(1539,"code",38),e(1540,"string "),t(),i(1541,"code",56),e(1542," ThfGridDeleteService"),t()(),i(1543,"td",25),e(1544,"-"),t(),i(1545,"td",26)(1546,"em")(1547,"strong"),e(1548,"(opcional)"),t()(),i(1549,"p"),e(1550,`Respons\xE1vel por excluir o item. Aceita um servi\xE7o que implementa a interface
`),i(1551,"strong"),e(1552,"ThfGridDeleteService"),t(),e(1553," ou uma URL."),t(),i(1554,"p"),e(1555,`Ao selecionar o bot\xE3o de excluir, essa URL ou servi\xE7o ser\xE1 chamado, enviando o par\xE2metro definido na propriedade
`),i(1556,"strong"),e(1557,"t-param-delete-api"),t(),e(1558,". Se configurado e "),i(1559,"strong"),e(1560,"t-param-delete-api"),t(),e(1561," n\xE3o for informado, ser\xE1 enviado "),i(1562,"code"),e(1563,"key"),t(),e(1564,`
(definido ao usar `),i(1565,"strong"),e(1566,"ThfGridColumn"),t(),e(1567,") ou, na aus\xEAncia, "),i(1568,"code"),e(1569,"id"),t(),e(1570,"."),t(),i(1571,"p"),e(1572,"Por padr\xE3o, a exclus\xE3o \xE9 feita item a item. No entanto, ao habilitar a propriedade "),i(1573,"strong"),e(1574,"t-allow-batch-delete"),t(),e(1575,` e utilizar
um servi\xE7o com o m\xE9todo `),i(1576,"code"),e(1577,"deleteBatchItems"),t(),e(1578,", a exclus\xE3o em lote ser\xE1 permitida."),t(),i(1579,"blockquote")(1580,"p"),e(1581,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(1582,"a",57),e(1583,"API do PO UI"),t()()(),i(1584,"blockquote")(1585,"p"),e(1586,"Caso utilize um servi\xE7o "),i(1587,"strong"),e(1588,"ThfGridDeleteService"),t(),e(1589,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(1590,"tr",19)(1591,"td",20)(1592,"div",21)(1593,"span",22),e(1594," t-service-api"),n(1595,"br"),t()()(),i(1596,"td",23)(1597,"code",38),e(1598,"string"),t()(),i(1599,"td",25),e(1600,"-"),t(),i(1601,"td",26)(1602,"em")(1603,"strong"),e(1604,"(opcional)"),t()(),i(1605,"p"),e(1606,"Define a rota da "),i(1607,"code"),e(1608,"API"),t(),e(1609,` para realizar o GET dos itens e popular o grid.
Para a exclus\xE3o, \xE9 necess\xE1rio que a `),i(1610,"code"),e(1611,"API"),t(),e(1612,` esteja preparada para receber uma ou
mais `),i(1613,"code"),e(1614,"keys"),t(),e(1615," concatenadas para identifica\xE7\xE3o do registro. Caso n\xE3o haja "),i(1616,"code"),e(1617,"keys"),t(),e(1618,`,
que implementa a interface `),i(1619,"strong"),e(1620,"ThfGridColumn"),t(),e(1621,", a requisi\xE7\xE3o de exclus\xE3o ocorrer\xE1 pelo "),i(1622,"code"),e(1623,"id"),t(),e(1624,"."),t()()(),i(1625,"tr",19)(1626,"td",20)(1627,"div",21)(1628,"span",22),e(1629,"t-show-densification-configuration"),n(1630,"br"),t()()(),i(1631,"td",23)(1632,"code",24),e(1633,"boolean"),t()(),i(1634,"td",25)(1635,"p")(1636,"code"),e(1637,"false"),t()()(),i(1638,"td",26)(1639,"em")(1640,"strong"),e(1641,"(opcional)"),t()(),i(1642,"p"),e(1643,"Habilita um atalho para alternar o espa\xE7amento das linhas do grid entre os modos "),i(1644,"code"),e(1645,"Compacto"),t(),e(1646," e "),i(1647,"code"),e(1648,"Espa\xE7oso"),t(),e(1649,` no
Gerenciar Tabela.`),t(),i(1650,"blockquote")(1651,"p"),e(1652,"Em n\xEDvel de acessibilidade "),i(1653,"strong"),e(1654,"AA"),t(),e(1655,", a op\xE7\xE3o "),i(1656,"code"),e(1657,"Extra Compacto"),t(),e(1658," tamb\xE9m \xE9 exibida."),t()()()(),i(1659,"tr",19)(1660,"td",20)(1661,"div",21)(1662,"span",22),e(1663,"t-show-draggable-icon"),n(1664,"br"),t()()(),i(1665,"td",23)(1666,"code",24),e(1667,"boolean"),t()(),i(1668,"td",25)(1669,"p")(1670,"code"),e(1671,"false"),t()()(),i(1672,"td",26)(1673,"em")(1674,"strong"),e(1675,"(opcional)"),t()(),i(1676,"p"),e(1677,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(1678,"tr",19)(1679,"td",20)(1680,"div",21)(1681,"span",22),e(1682," t-show-footer-aggregates"),n(1683,"br"),t()()(),i(1684,"td",23)(1685,"code",24),e(1686,"boolean"),t()(),i(1687,"td",25)(1688,"p")(1689,"code"),e(1690,"false"),t()()(),i(1691,"td",26)(1692,"em")(1693,"strong"),e(1694,"(opcional)"),t()(),i(1695,"p"),e(1696,"Quando definido true, exibir\xE1 no rodap\xE9 da tabela os totalizadores que foram definidos na propriedade "),i(1697,"code"),e(1698,"t-aggregates"),t(),e(1699,"."),t()()(),i(1700,"tr",19)(1701,"td",20)(1702,"div",32)(1703,"span",33),e(1704," (t-show-more)"),n(1705,"br"),t()()(),i(1706,"td",23)(1707,"code",34),e(1708,"EventEmitter"),t()(),i(1709,"td",25),e(1710,"-"),t(),i(1711,"td",26)(1712,"em")(1713,"strong"),e(1714,"(opcional)"),t()(),i(1715,"p"),e(1716,"Evento disparado quando pressionado o bot\xE3o 'Carregar mais'. Retorna um array do tipo "),i(1717,"strong"),e(1718,"ThfGridColumnSort"),t(),e(1719,`,
caso existam colunas ordenadas definidas.`),t(),i(1720,"blockquote")(1721,"p"),e(1722,"Caso "),i(1723,"strong"),e(1724,"t-items"),t(),e(1725," esteja definido, o uso desse evento se torna obrigat\xF3rio caso queira exibir o bot\xE3o 'Carregar mais'."),t()()()(),i(1726,"tr",19)(1727,"td",20)(1728,"div",21)(1729,"span",22),e(1730,"t-show-more-disabled"),n(1731,"br"),t()()(),i(1732,"td",23)(1733,"code",24),e(1734,"boolean"),t()(),i(1735,"td",25)(1736,"p")(1737,"code"),e(1738,"false"),t()()(),i(1739,"td",26)(1740,"em")(1741,"strong"),e(1742,"(opcional)"),t()(),i(1743,"p"),e(1744,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(1745,"tr",19)(1746,"td",20)(1747,"div",21)(1748,"span",22),e(1749,"t-single-select"),n(1750,"br"),t()()(),i(1751,"td",23)(1752,"code",24),e(1753,"boolean"),t()(),i(1754,"td",25)(1755,"p")(1756,"code"),e(1757,"false"),t()()(),i(1758,"td",26)(1759,"em")(1760,"strong"),e(1761,"(opcional)"),t()(),i(1762,"p"),e(1763,"Define a sele\xE7\xE3o \xFAnica. Requer que a propriedade "),i(1764,"strong"),e(1765,"t-selectable"),t(),e(1766," esteja habilitada."),t()()(),i(1767,"tr",19)(1768,"td",20)(1769,"div",21)(1770,"span",22),e(1771,"t-sort"),n(1772,"br"),t()()(),i(1773,"td",23)(1774,"code",58),e(1775,"Array<ThfGridColumnSort>"),t()(),i(1776,"td",25),e(1777,"-"),t(),i(1778,"td",26)(1779,"em")(1780,"strong"),e(1781,"(opcional)"),t()(),i(1782,"p"),e(1783,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(1784,"pre")(1785,"code",28),e(1786,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-sort]="sortColumns"
></thf-grid>`),t()(),i(1787,"pre")(1788,"code",31),e(1789,"sortColumns: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];"),t()()()(),i(1790,"tr",19)(1791,"td",20)(1792,"div",32)(1793,"span",33),e(1794," (t-change-sort-column)"),n(1795,"br"),t()()(),i(1796,"td",23)(1797,"code",34),e(1798,"EventEmitter"),t()(),i(1799,"td",25),e(1800,"-"),t(),i(1801,"td",26)(1802,"em")(1803,"strong"),e(1804,"(opcional)"),t()(),i(1805,"p"),e(1806,`Evento disparado ao alterar o sort da coluna.
Retorna um array do tipo `),i(1807,"strong"),e(1808,"ThfGridColumnSort"),t(),e(1809," com a regra de sortable e a coluna aplicada."),t()()(),i(1810,"tr",19)(1811,"td",20)(1812,"div",21)(1813,"span",22),e(1814,"t-sortable"),n(1815,"br"),t()()(),i(1816,"td",23)(1817,"code",24),e(1818,"boolean"),t()(),i(1819,"td",25)(1820,"p")(1821,"code"),e(1822,"true"),t()()(),i(1823,"td",26)(1824,"em")(1825,"strong"),e(1826,"(opcional)"),t()(),i(1827,"p"),e(1828,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(1829,"tr",19)(1830,"td",20)(1831,"div",21)(1832,"span",22),e(1833,"t-spacing"),n(1834,"br"),t()()(),i(1835,"td",23)(1836,"code",38),e(1837,"string"),t()(),i(1838,"td",25)(1839,"p")(1840,"code"),e(1841,"medium"),t()()(),i(1842,"td",26)(1843,"em")(1844,"strong"),e(1845,"(opcional)"),t()(),i(1846,"p"),e(1847,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(1848,"strong"),e(1849,"ThfColumnSpacing"),t(),e(1850,"."),t(),i(1851,"blockquote")(1852,"p"),e(1853,"Em n\xEDvel de acessibilidade "),i(1854,"strong"),e(1855,"AA"),t(),e(1856,", caso o valor de "),i(1857,"code"),e(1858,"t-spacing"),t(),e(1859," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),i(1860,"code"),e(1861,"extraSmall"),t(),e(1862,`
nos seguintes cen\xE1rios:`),t(),i(1863,"ul")(1864,"li"),e(1865,"Quando o valor de "),i(1866,"code"),e(1867,"t-components-size"),t(),e(1868," for "),i(1869,"code"),e(1870,"small"),t(),e(1871,";"),t(),i(1872,"li"),e(1873,"Quando o valor padr\xE3o dos componentes for configurado como "),i(1874,"code"),e(1875,"small"),t(),e(1876,` no
`),i(1877,"a",39),e(1878,"servi\xE7o de tema"),t(),e(1879,"."),t()()()()(),i(1880,"tr",19)(1881,"td",20)(1882,"div",21)(1883,"span",22),e(1884,"t-striped"),n(1885,"br"),t()()(),i(1886,"td",23)(1887,"code",24),e(1888,"boolean"),t()(),i(1889,"td",25)(1890,"p")(1891,"code"),e(1892,"true"),t()()(),i(1893,"td",26)(1894,"em")(1895,"strong"),e(1896,"(opcional)"),t()(),i(1897,"p"),e(1898,"Define o estilo listrado no grid (striped)."),t()()(),i(1899,"tr",19)(1900,"td",20)(1901,"div",21)(1902,"span",22),e(1903,"t-text-wrap"),n(1904,"br"),t()()(),i(1905,"td",23)(1906,"code",24),e(1907,"boolean"),t()(),i(1908,"td",25)(1909,"p")(1910,"code"),e(1911,"false"),t()()(),i(1912,"td",26)(1913,"em")(1914,"strong"),e(1915,"(opcional)"),t()(),i(1916,"p"),e(1917,`Define a quebra autom\xE1tica de texto. Quando ativada, o texto que excede o espa\xE7o dispon\xEDvel \xE9 transferido para a
pr\xF3xima linha em pontos apropriados para uma leitura clara.`),t(),i(1918,"blockquote")(1919,"p"),e(1920,"Propriedade incompat\xEDvel quando "),i(1921,"strong"),e(1922,"t-virtual-scroll"),t(),e(1923," est\xE1 habilitado."),t()()()(),i(1924,"tr",19)(1925,"td",20)(1926,"div",32)(1927,"span",33),e(1928," (t-unselected)"),n(1929,"br"),t()()(),i(1930,"td",23)(1931,"code",34),e(1932,"EventEmitter"),t()(),i(1933,"td",25),e(1934,"-"),t(),i(1935,"td",26)(1936,"em")(1937,"strong"),e(1938,"(opcional)"),t()(),i(1939,"p"),e(1940,"Evento disparado quando desselecionado um item. Retorna o item desselecionado."),t()()(),i(1941,"tr",19)(1942,"td",20)(1943,"div",32)(1944,"span",33),e(1945," (t-all-unselected)"),n(1946,"br"),t()()(),i(1947,"td",23)(1948,"code",34),e(1949,"EventEmitter"),t()(),i(1950,"td",25),e(1951,"-"),t(),i(1952,"td",26)(1953,"em")(1954,"strong"),e(1955,"(opcional)"),t()(),i(1956,"p"),e(1957,"Evento disparado quando desselecionado todos os itens. Retorna um array com todos os itens desselecionados."),t()()(),i(1958,"tr",19)(1959,"td",20)(1960,"div",21)(1961,"span",22),e(1962,"t-virtual-columns"),n(1963,"br"),t()()(),i(1964,"td",23)(1965,"code",24),e(1966,"boolean"),t()(),i(1967,"td",25)(1968,"p")(1969,"code"),e(1970,"false"),t()()(),i(1971,"td",26)(1972,"em")(1973,"strong"),e(1974,"(opcional)"),t()(),i(1975,"p"),e(1976,`Define o uso do virtual columns no grid para melhorar a performance com grande volume de colunas.
Recomendamos a utiliza\xE7\xE3o dessa propriedade somente em caso de perda de performance com grande quantidade de colunas.
Existe incompatibilidade com a propriedade `),i(1977,"strong"),e(1978,"t-auto-size"),t(),e(1979," e m\xE9todo "),i(1980,"strong"),e(1981,"autoFitColumns()"),t(),e(1982,`.
Caso a grid tenha mais de 50 colunas o virtual-columns \xE9 ativado.`),t()()(),i(1983,"tr",19)(1984,"td",20)(1985,"div",21)(1986,"span",22),e(1987,"t-virtual-scroll"),n(1988,"br"),t()()(),i(1989,"td",23)(1990,"code",24),e(1991,"boolean"),t()(),i(1992,"td",25)(1993,"p")(1994,"code"),e(1995,"true"),t()()(),i(1996,"td",26)(1997,"em")(1998,"strong"),e(1999,"(opcional)"),t()(),i(2e3,"p"),e(2001,`Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados.
Requer que a propriedade `),i(2002,"strong"),e(2003,"t-height"),t(),e(2004," esteja definida."),t(),i(2005,"blockquote")(2006,"p"),e(2007,"Verificar a documenta\xE7\xE3o das seguintes propriedades: "),i(2008,"strong"),e(2009,"t-text-wrap"),t(),e(2010,", "),i(2011,"strong"),e(2012,"t-row-height"),t(),e(2013," e "),i(2014,"strong"),e(2015,"t-page-size-virtual"),t(),e(2016,"."),t()()()()()(),i(2017,"po-accordion-item",59)(2018,"table",60)(2019,"tr",19)(2020,"th",61)(2021,"div",21)(2022,"h4")(2023,"span",22),e(2024," cleanRowActionsMode "),t()()()()(),i(2025,"tr",26)(2026,"td",26)(2027,"p"),e(2028,"Aplica o estado default aos itens editados, inclu\xEDdos e removidos do grid."),t(),i(2029,"p"),e(2030,`Esse m\xE9todo \xE9 usado para aplicar as altera\xE7\xF5es realizadas nos registros do grid, e tamb\xE9m
para remover os itens marcados para exclus\xE3o, de acordo com os par\xE2metros fornecidos.`),t(),i(2031,"pre")(2032,"code"),e(2033,`// Aplica o estado de edi\xE7\xE3o e inclus\xE3o, removendo os itens com $removed
this.cleanRowActionsMode();

// Aplica apenas as edi\xE7\xF5es, sem alterar as inclus\xF5es e exclus\xF5es
this.cleanRowActionsMode(true, false, false);

// Remove apenas os itens com $removed, sem aplicar edi\xE7\xF5es e inclus\xF5es
this.cleanRowActionsMode(false, false, true);`),t()(),i(2034,"p"),e(2035,`Exemplo de uso:
Se voc\xEA precisa aplicar o estado de todas as a\xE7\xF5es de linha, como edi\xE7\xE3o, inclus\xE3o e
remo\xE7\xE3o, basta chamar este m\xE9todo. Por exemplo, se houver uma a\xE7\xE3o de aplicar o grid ao
salvar os dados, voc\xEA pode us\xE1-lo da seguinte forma:`),t(),i(2036,"pre")(2037,"code",31),e(2038,`// Ap\xF3s salvar os dados na API, voc\xEA pode limpar todos os estados de a\xE7\xE3o de linha
this.myService.saveData(this.thfGrid.getChangedItems()).subscribe(() => {
  this.thfGrid.cleanRowActionsMode(); // Limpa todas as a\xE7\xF5es de linha ap\xF3s salvar
  console.log('A\xE7\xF5es de linha limpas.');
});`),t()()()()(),i(2039,"h5")(2040,"b"),e(2041,"Par\xE2metros"),t()(),i(2042,"table",16)(2043,"tr",17)(2044,"th",18),e(2045,"Nome"),t(),i(2046,"th",18),e(2047,"Tipo"),t(),i(2048,"th",18),e(2049,"Descri\xE7\xE3o"),t()(),i(2050,"tr",19)(2051,"td",20),e(2052," edit"),t(),i(2053,"td",23)(2054,"code",62),e(2055," boolean "),t()(),i(2056,"td",26)(2057,"p"),e(2058,"Indica se deve aplicar as edi\xE7\xF5es realizadas nas linhas."),t()()(),i(2059,"tr",19)(2060,"td",20),e(2061," include"),t(),i(2062,"td",23)(2063,"code",62),e(2064," boolean "),t()(),i(2065,"td",26)(2066,"p"),e(2067,"Indica se deve aplicar as inclus\xF5es de novas linhas."),t()()(),i(2068,"tr",19)(2069,"td",20),e(2070," del"),t(),i(2071,"td",23)(2072,"code",62),e(2073," boolean "),t()(),i(2074,"td",26)(2075,"p"),e(2076,"Indica se deve remover as linhas marcadas para exclus\xE3o."),t()()()(),n(2077,"br"),i(2078,"table",60)(2079,"tr",19)(2080,"th",61)(2081,"div",21)(2082,"h4")(2083,"span",22),e(2084," deleteItems "),t()()()()(),i(2085,"tr",26)(2086,"td",26)(2087,"p"),e(2088,"M\xE9todo respons\xE1vel pela exclus\xE3o de itens selecionados."),t(),i(2089,"p"),e(2090,"Quando "),i(2091,"strong"),e(2092,"t-items"),t(),e(2093,` est\xE1 definido, a remo\xE7\xE3o pode ser feita em lote, excluindo todas as linhas selecionadas localmente.
Se utilizado com um servi\xE7o (`),i(2094,"strong"),e(2095,"t-service-api"),t(),e(2096," e/ou "),i(2097,"strong"),e(2098,"t-service-delete-api"),t(),e(2099,"), a exclus\xE3o permitida \xE9 de um item por vez."),t(),i(2100,"blockquote")(2101,"p"),e(2102,'Caso utilizado com a "edi\xE7\xE3o flu\xEDda offline via formul\xE1rio (propriedade '),i(2103,"strong"),e(2104,"t-grid-row-actions"),t(),e(2105,`)" remove localmente
as linhas sinalizadas com `),i(2106,"code"),e(2107,"$removed"),t(),e(2108,"."),t()(),i(2109,"blockquote")(2110,"p"),e(2111,"\xC9 poss\xEDvel habilitar a exclus\xE3o em lote com servi\xE7os remotos utilizando a propriedade "),i(2112,"strong"),e(2113,"t-allow-batch-delete"),t(),e(2114," em conjunto com "),i(2115,"strong"),e(2116,"t-service-api"),t(),e(2117," e/ou "),i(2118,"strong"),e(2119,"t-service-delete-api"),t(),e(2120,"."),t()()()()(),n(2121,"br"),i(2122,"table",60)(2123,"tr",19)(2124,"th",61)(2125,"div",21)(2126,"h4")(2127,"span",22),e(2128," getChangedItems "),t()()()()(),i(2129,"tr",26)(2130,"td",26)(2131,"p"),e(2132,"Retorna uma lista dos itens que foram modificados no grid, com a propriedade "),i(2133,"code"),e(2134,"op"),t(),e(2135,` indicando
a a\xE7\xE3o executada sobre cada item, podendo ser 'remove', 'add' ou 'replace'.`),t(),i(2136,"pre")(2137,"code"),e(2138,`// Exemplo de uso:
const changedItems = this.getChangedItems();
console.log(changedItems);
// Sa\xEDda esperada: [{ id: 1, name: 'Item 1', op: 'replace' }, { id: 2, name: 'Item 2', op: 'remove' }]`),t()()()()(),i(2139,"h5")(2140,"b"),e(2141,"Retorno"),t()(),i(2142,"table",16)(2143,"tr",17)(2144,"th",18),e(2145,"Tipo"),t(),i(2146,"th",18),e(2147,"Descri\xE7\xE3o"),t()(),i(2148,"tr",19)(2149,"td",23)(2150,"code",62),e(2151,"Array<any>"),t()(),i(2152,"td",26)(2153,"p"),e(2154,"Uma lista de objetos representando os itens modificados. Cada objeto ter\xE1 a propriedade "),i(2155,"code"),e(2156,"op"),t(),e(2157," que indica a a\xE7\xE3o realizada"),t()()()(),n(2158,"br"),i(2159,"table",60)(2160,"tr",19)(2161,"th",61)(2162,"div",21)(2163,"h4")(2164,"span",22),e(2165," getSelectedRows "),t()()()()(),i(2166,"tr",26)(2167,"td",26)(2168,"p"),e(2169,"M\xE9todo respons\xE1vel por retornar os itens do grid que est\xE3o selecionadas."),t()()()(),n(2170,"br"),i(2171,"table",60)(2172,"tr",19)(2173,"th",61)(2174,"div",21)(2175,"h4")(2176,"span",22),e(2177," showAdditionalHelp "),t()()()()(),i(2178,"tr",26)(2179,"td",26)(2180,"p"),e(2181,"M\xE9todo que exibe "),i(2182,"code"),e(2183,"additionalHelpTooltip"),t(),e(2184," ou executa a a\xE7\xE3o definida em "),i(2185,"code"),e(2186,"additionalHelp"),t(),e(2187,` de um campo durante a
edi\xE7\xE3o (`),i(2188,"code"),e(2189,"t-edit-properties"),t(),e(2190," ou "),i(2191,"code"),e(2192,"t-grid-row-actions"),t(),e(2193,`) do grid. Para isso, ser\xE1 necess\xE1rio ter uma inst\xE2ncia do
componente no DOM e configurar uma tecla de atalho utilizando o evento `),i(2194,"code"),e(2195,"t-keydown"),t(),e(2196,"."),t(),i(2197,"pre")(2198,"code"),e(2199,`import { ThfGridComponent } from '@totvs/thf-components';
...
@ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

columns: Array<ThfGridColumn> = [
 ...
 {
   property: 'name',
   label: 'Nome',
   editProperties: {
     componentEditable: 'input',
     additionalHelpTooltip: 'Nome completo',
     keydown: this.onkeydown.bind(this, 'name')
    }
 },
]

onkeydown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.thfGrid.showAdditionalHelp(property);
 }
}`),t()(),i(2200,"blockquote")(2201,"p"),e(2202,`Com t-grid-row-actions: Alguns atalhos j\xE1 est\xE3o em uso, ent\xE3o, evite sobrescrev\xEA-los. Para mais detalhes,
consulte o `),i(2203,"a",63),e(2204,"TDN"),t(),e(2205,"."),t()()()()(),i(2206,"h5")(2207,"b"),e(2208,"Par\xE2metros"),t()(),i(2209,"table",16)(2210,"tr",17)(2211,"th",18),e(2212,"Nome"),t(),i(2213,"th",18),e(2214,"Tipo"),t(),i(2215,"th",18),e(2216,"Descri\xE7\xE3o"),t()(),i(2217,"tr",19)(2218,"td",20),e(2219," property"),t(),i(2220,"td",23)(2221,"code",62),e(2222," string "),t()(),i(2223,"td",26)(2224,"p"),e(2225,"Identificador da coluna."),t()()()(),n(2226,"br"),i(2227,"table",60)(2228,"tr",19)(2229,"th",61)(2230,"div",21)(2231,"h4")(2232,"span",22),e(2233," selectRowItem "),t()()()()(),i(2234,"tr",26)(2235,"td",26)(2236,"p"),e(2237,"Seleciona um item do grid."),t()()()(),i(2238,"h5")(2239,"b"),e(2240,"Par\xE2metros"),t()(),i(2241,"table",16)(2242,"tr",17)(2243,"th",18),e(2244,"Nome"),t(),i(2245,"th",18),e(2246,"Tipo"),t(),i(2247,"th",18),e(2248,"Descri\xE7\xE3o"),t()(),i(2249,"tr",19)(2250,"td",20),e(2251," item"),t(),i(2252,"td",23)(2253,"code",64),e(2254," { key: value } "),t(),i(2255,"code",27),e(2256," Function "),t()(),i(2257,"td",26)(2258,"p"),e(2259,"Item ou fun\xE7\xE3o que recebe como par\xE2metro o item e retorna um boolean."),t()()()(),n(2260,"br"),i(2261,"table",60)(2262,"tr",19)(2263,"th",61)(2264,"div",21)(2265,"h4")(2266,"span",22),e(2267," unselectRowItem "),t()()()()(),i(2268,"tr",26)(2269,"td",26)(2270,"p"),e(2271,"Desmarca o item que est\xE1 selecionado."),t()()()(),i(2272,"h5")(2273,"b"),e(2274,"Par\xE2metros"),t()(),i(2275,"table",16)(2276,"tr",17)(2277,"th",18),e(2278,"Nome"),t(),i(2279,"th",18),e(2280,"Tipo"),t(),i(2281,"th",18),e(2282,"Descri\xE7\xE3o"),t()(),i(2283,"tr",19)(2284,"td",20),e(2285," item"),t(),i(2286,"td",23)(2287,"code",64),e(2288," { key: value } "),t(),i(2289,"code",27),e(2290," Function "),t()(),i(2291,"td",26)(2292,"p"),e(2293,"Item ou fun\xE7\xE3o que recebe como par\xE2metro o item e retorna um boolean."),t()()()(),n(2294,"br"),i(2295,"table",60)(2296,"tr",19)(2297,"th",61)(2298,"div",21)(2299,"h4")(2300,"span",22),e(2301," applyFilters "),t()()()()(),i(2302,"tr",26)(2303,"td",26)(2304,"p"),e(2305,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza o grid."),t(),i(2306,"p"),e(2307,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),t(),i(2308,"pre")(2309,"code"),e(2310,"url + ?page=1&pageSize=10"),t()(),i(2311,"blockquote")(2312,"p"),e(2313,"Obs: os par\xE2metros "),i(2314,"code"),e(2315,"page"),t(),e(2316," e "),i(2317,"code"),e(2318,"pageSize"),t(),e(2319," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),t()(),i(2320,"p"),e(2321,"Caso sejam informados os par\xE2metros "),i(2322,"code"),e(2323,"{ name: 'JOHN', age: '23' }"),t(),e(2324,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),t(),i(2325,"pre")(2326,"code"),e(2327,"url + ?page=1&pageSize=10&name=JOHN&age=23"),t()()()()(),i(2328,"h5")(2329,"b"),e(2330,"Par\xE2metros"),t()(),i(2331,"table",16)(2332,"tr",17)(2333,"th",18),e(2334,"Nome"),t(),i(2335,"th",18),e(2336,"Tipo"),t(),i(2337,"th",18),e(2338,"Descri\xE7\xE3o"),t()(),i(2339,"tr",19)(2340,"td",20),e(2341," queryParams"),t(),i(2342,"td",23)(2343,"code",64),e(2344," { key: value } "),t()(),i(2345,"td",26)(2346,"p"),e(2347,"Formato do objeto a ser enviado."),t(),i(2348,"blockquote")(2349,"p"),e(2350,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),t()()()()(),n(2351,"br"),i(2352,"table",60)(2353,"tr",19)(2354,"th",61)(2355,"div",21)(2356,"h4")(2357,"span",22),e(2358," calculateHeightDynamically "),t()()()()(),i(2359,"tr",26)(2360,"td",26)(2361,"p"),e(2362,"Mant\xE9m compatibilidade com vers\xF5es anteriores, chamando "),i(2363,"code"),e(2364,"calculateDynamicSize"),t(),e(2365," com a propriedade "),i(2366,"code"),e(2367,"'height'"),t(),e(2368,"."),t()()()(),i(2369,"h5")(2370,"b"),e(2371,"Par\xE2metros"),t()(),i(2372,"table",16)(2373,"tr",17)(2374,"th",18),e(2375,"Nome"),t(),i(2376,"th",18),e(2377,"Tipo"),t(),i(2378,"th",18),e(2379,"Descri\xE7\xE3o"),t()(),i(2380,"tr",19)(2381,"td",20),e(2382," callRowHeight"),t(),n(2383,"td",23),i(2384,"td",26)(2385,"p"),e(2386,"Define se o m\xE9todo "),i(2387,"code"),e(2388,"calculateRowHeight"),t(),e(2389," deve ser chamado ap\xF3s o c\xE1lculo do tamanho."),t()()()(),n(2390,"br"),i(2391,"table",60)(2392,"tr",19)(2393,"th",61)(2394,"div",21)(2395,"h4")(2396,"span",22),e(2397," removeItem "),t()()()()(),i(2398,"tr",26)(2399,"td",26)(2400,"p"),e(2401,"M\xE9todo que remove um item localmente do grid."),t()()()(),i(2402,"h5")(2403,"b"),e(2404,"Par\xE2metros"),t()(),i(2405,"table",16)(2406,"tr",17)(2407,"th",18),e(2408,"Nome"),t(),i(2409,"th",18),e(2410,"Tipo"),t(),i(2411,"th",18),e(2412,"Descri\xE7\xE3o"),t()(),i(2413,"tr",19)(2414,"td",20),e(2415," item"),t(),i(2416,"td",23)(2417,"code",49),e(2418," number "),t(),i(2419,"code",64),e(2420," { key: value } "),t()(),i(2421,"td",26)(2422,"p"),e(2423,"\xCDndice ou item que ser\xE1 removido."),t(),i(2424,"blockquote")(2425,"p"),e(2426,"Ao remover o item, a linha que o representa ser\xE1 removida do grid."),t()()()()(),n(2427,"br"),i(2428,"table",60)(2429,"tr",19)(2430,"th",61)(2431,"div",21)(2432,"h4")(2433,"span",22),e(2434," unselectRows "),t()()()()(),i(2435,"tr",26)(2436,"td",26)(2437,"p"),e(2438,"M\xE9todo respons\xE1vel por desmarcar as linhas que est\xE3o selecionadas."),t()()()(),n(2439,"br"),i(2440,"table",60)(2441,"tr",19)(2442,"th",61)(2443,"div",21)(2444,"h4")(2445,"span",22),e(2446," updateItem "),t()()()()(),i(2447,"tr",26)(2448,"td",26)(2449,"p"),e(2450,"M\xE9todo que atualiza um item do grid quando utilizado "),i(2451,"strong"),e(2452,"t-itens"),t(),e(2453,"."),t()()()(),i(2454,"h5")(2455,"b"),e(2456,"Par\xE2metros"),t()(),i(2457,"table",16)(2458,"tr",17)(2459,"th",18),e(2460,"Nome"),t(),i(2461,"th",18),e(2462,"Tipo"),t(),i(2463,"th",18),e(2464,"Descri\xE7\xE3o"),t()(),i(2465,"tr",19)(2466,"td",20),e(2467," item"),t(),i(2468,"td",23)(2469,"code",49),e(2470," number "),t(),i(2471,"code",64),e(2472," { key: value } "),t()(),i(2473,"td",26)(2474,"p"),e(2475,"\xCDndice ou o item que ser\xE1 atualizado."),t()()(),i(2476,"tr",19)(2477,"td",20),e(2478," updatedItem"),t(),i(2479,"td",23)(2480,"code",64),e(2481," { key: value } "),t()(),i(2482,"td",26)(2483,"p"),e(2484,"Item que foi atualizado."),t(),i(2485,"blockquote")(2486,"p"),e(2487,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada no grid."),t()()()()(),n(2488,"br"),i(2489,"table",60)(2490,"tr",19)(2491,"th",61)(2492,"div",21)(2493,"h4")(2494,"span",22),e(2495," calculateDynamicSize "),t()()()()(),i(2496,"tr",26)(2497,"td",26)(2498,"p"),e(2499,"M\xE9todo que calcula dinamicamente o tamanho da grid com base na porcentagem definida nas propriedades "),i(2500,"strong"),e(2501,"t-height"),t(),e(2502,`,
`),i(2503,"strong"),e(2504,"t-min-height"),t(),e(2505," e "),i(2506,"strong"),e(2507,"t-max-height"),t(),e(2508,"."),t(),i(2509,"p"),e(2510,`Caso a grid esteja dentro de um componente ou elemento que altere sua visibilidade,
\xE9 necess\xE1rio chamar este m\xE9todo para garantir um c\xE1lculo correto. Exemplo:`),t(),i(2511,"pre")(2512,"code",28),e(2513,`<po-tabs>
 <po-tab (p-click)="emitClickTab()" p-label="PO Tabs">
   <thf-grid #thfGrid> </thf-grid>
 </po-tab>
</po-tabs>`),t()(),i(2514,"pre")(2515,"code",31),e(2516,`@ViewChild('thfGrid') thfGrid: ThfGridComponent;

emitClickTab() {
 // Time-out necess\xE1rio para garantir que o DOM foi atualizado antes do c\xE1lculo da altura.
 setTimeout(() => {
   this.thfGrid.calculateDynamicSize('height', true);
 }, 100);
}`),t()()()()(),i(2517,"h5")(2518,"b"),e(2519,"Par\xE2metros"),t()(),i(2520,"table",16)(2521,"tr",17)(2522,"th",18),e(2523,"Nome"),t(),i(2524,"th",18),e(2525,"Tipo"),t(),i(2526,"th",18),e(2527,"Descri\xE7\xE3o"),t()(),i(2528,"tr",19)(2529,"td",20),e(2530," property"),t(),n(2531,"td",23),i(2532,"td",26)(2533,"p"),e(2534,"Define qual propriedade ser\xE1 calculada: "),i(2535,"code"),e(2536,"'height'"),t(),e(2537,", "),i(2538,"code"),e(2539,"'minHeight'"),t(),e(2540," ou "),i(2541,"code"),e(2542,"'maxHeight'"),t(),e(2543,"."),t()()(),i(2544,"tr",19)(2545,"td",20),e(2546," callRowHeight"),t(),n(2547,"td",23),i(2548,"td",26)(2549,"p"),e(2550,"Define se o m\xE9todo "),i(2551,"code"),e(2552,"calculateRowHeight"),t(),e(2553," deve ser chamado ap\xF3s o c\xE1lculo do tamanho."),t()()()(),n(2554,"br"),t()()(),T(2555,2),t(),i(2556,"po-tab",65),T(2557,3),i(2558,"po-container",5)(2559,"po-accordion",6)(2560,"po-accordion-item",66)(2561,"h4",9)(2562,"code"),e(2563,"ThfTableAction"),t()(),i(2564,"div",10)(2565,"p"),e(2566," Interface para configura\xE7\xE3o das a\xE7\xF5es."),t()(),i(2567,"h4",15),e(2568,"Propriedades"),t(),i(2569,"table",16)(2570,"tr",17)(2571,"th",18),e(2572,"Nome"),t(),i(2573,"th",18),e(2574,"Tipo"),t(),i(2575,"th",18),e(2576,"Descri\xE7\xE3o"),t()(),i(2577,"tr",19)(2578,"td",20)(2579,"div",21)(2580,"span",22),e(2581," action"),n(2582,"br"),t()()(),i(2583,"td",23)(2584,"code",27),e(2585,"Function"),t()(),i(2586,"td",26)(2587,"em")(2588,"strong"),e(2589,"(opcional)"),t()(),i(2590,"p"),e(2591,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),i(2592,"blockquote")(2593,"p"),e(2594,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),i(2595,"em"),e(2596,"bind"),t(),e(2597,"."),t()(),i(2598,"p"),e(2599,"Exemplo: "),i(2600,"code"),e(2601,"action: this.myFunction.bind(this)"),t()()()(),i(2602,"tr",19)(2603,"td",20)(2604,"div",21)(2605,"span",22),e(2606," disabled"),n(2607,"br"),t()()(),i(2608,"td",23)(2609,"code",24),e(2610,"boolean "),t(),i(2611,"code",27),e(2612," Function"),t()(),i(2613,"td",26)(2614,"em")(2615,"strong"),e(2616,"(opcional)"),t()(),i(2617,"p"),e(2618,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),i(2619,"p"),e(2620,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),i(2621,"tr",19)(2622,"td",20)(2623,"div",21)(2624,"span",22),e(2625," fixed"),n(2626,"br"),t()()(),i(2627,"td",23)(2628,"code",24),e(2629,"boolean"),t()(),i(2630,"td",26)(2631,"em")(2632,"strong"),e(2633,"(opcional)"),t()(),i(2634,"p"),e(2635,"Propriedade para fixar a a\xE7\xE3o"),t()()(),i(2636,"tr",19)(2637,"td",20)(2638,"div",21)(2639,"span",22),e(2640," icon"),n(2641,"br"),t()()(),i(2642,"td",23)(2643,"code",38),e(2644,"string "),t(),i(2645,"code",48),e(2646," TemplateRef<void>"),t()(),i(2647,"td",26)(2648,"em")(2649,"strong"),e(2650,"(opcional)"),t()(),i(2651,"p"),e(2652,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),i(2653,"p"),e(2654,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),i(2655,"a",67),e(2656,"Biblioteca de \xEDcones"),t(),e(2657,". conforme exemplo abaixo:"),t(),i(2658,"pre")(2659,"code"),e(2660,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>`),t()(),i(2661,"p"),e(2662,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),i(2663,"pre")(2664,"code"),e(2665,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>`),t()(),i(2666,"p"),e(2667,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),i(2668,"code"),e(2669,"TemplateRef"),t(),e(2670,`, conforme exemplo abaixo:
component.html:`),t(),i(2671,"pre")(2672,"code"),e(2673,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>`),t()(),i(2674,"p"),e(2675,"component.ts:"),t(),i(2676,"pre")(2677,"code"),e(2678,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];`),t()()()(),i(2679,"tr",19)(2680,"td",20)(2681,"div",21)(2682,"span",22),e(2683," label"),n(2684,"br"),t()()(),i(2685,"td",23)(2686,"code",38),e(2687,"string"),t()(),i(2688,"td",26)(2689,"p"),e(2690,"R\xF3tulo da a\xE7\xE3o."),t()()(),i(2691,"tr",19)(2692,"td",20)(2693,"div",21)(2694,"span",22),e(2695," selected"),n(2696,"br"),t()()(),i(2697,"td",23)(2698,"code",24),e(2699,"boolean"),t()(),i(2700,"td",26)(2701,"em")(2702,"strong"),e(2703,"(opcional)"),t()(),i(2704,"p"),e(2705,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),i(2706,"tr",19)(2707,"td",20)(2708,"div",21)(2709,"span",22),e(2710," separator"),n(2711,"br"),t()()(),i(2712,"td",23)(2713,"code",24),e(2714,"boolean"),t()(),i(2715,"td",26)(2716,"em")(2717,"strong"),e(2718,"(opcional)"),t()(),i(2719,"p"),e(2720,"Atribui uma linha separadora acima do item."),t()()(),i(2721,"tr",19)(2722,"td",20)(2723,"div",21)(2724,"span",22),e(2725," type"),n(2726,"br"),t()()(),i(2727,"td",23)(2728,"code",38),e(2729,"string"),t()(),i(2730,"td",26)(2731,"em")(2732,"strong"),e(2733,"(opcional)"),t()(),i(2734,"p"),e(2735,"Define a cor do item, sendo "),i(2736,"code"),e(2737,"default"),t(),e(2738," o padr\xE3o."),t(),i(2739,"p"),e(2740,"Valores v\xE1lidos:"),t(),i(2741,"ul")(2742,"li")(2743,"code"),e(2744,"default"),t()(),i(2745,"li")(2746,"code"),e(2747,"danger"),t(),e(2748," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),i(2749,"tr",19)(2750,"td",20)(2751,"div",21)(2752,"span",22),e(2753," url"),n(2754,"br"),t()()(),i(2755,"td",23)(2756,"code",38),e(2757,"string"),t()(),i(2758,"td",26)(2759,"em")(2760,"strong"),e(2761,"(opcional)"),t()(),i(2762,"p"),e(2763,"URL utilizada no redirecionamento das p\xE1ginas."),t()()(),i(2764,"tr",19)(2765,"td",20)(2766,"div",21)(2767,"span",22),e(2768," visible"),n(2769,"br"),t()()(),i(2770,"td",23)(2771,"code",24),e(2772,"boolean "),t(),i(2773,"code",27),e(2774," Function"),t()(),i(2775,"td",26)(2776,"em")(2777,"strong"),e(2778,"(opcional)"),t()(),i(2779,"p"),e(2780,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),i(2781,"blockquote")(2782,"p"),e(2783,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),i(2784,"p"),e(2785,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),i(2786,"ul")(2787,"li")(2788,"p"),e(2789,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),i(2790,"li")(2791,"p"),e(2792,"Informar diretamente um valor booleano."),t()()()()()()(),i(2793,"po-accordion-item",68)(2794,"h4",9)(2795,"code"),e(2796,"ThfAggregateDescriptor"),t()(),i(2797,"div",10)(2798,"p"),e(2799,"Recebe um objeto contendo a coluna, uma label e a fun\xE7\xE3o que ser\xE1 aplicada para o c\xE1lculo do totalizador."),t()(),i(2800,"h4",15),e(2801,"Propriedades"),t(),i(2802,"table",16)(2803,"tr",17)(2804,"th",18),e(2805,"Nome"),t(),i(2806,"th",18),e(2807,"Tipo"),t(),i(2808,"th",18),e(2809,"Descri\xE7\xE3o"),t()(),i(2810,"tr",19)(2811,"td",20)(2812,"div",21)(2813,"span",22),e(2814," aggregate"),n(2815,"br"),t()()(),i(2816,"td",23)(2817,"code",69),e(2818,"'sum' "),t(),i(2819,"code",70),e(2820," 'average' "),t(),i(2821,"code",71),e(2822," 'count' "),t(),i(2823,"code",72),e(2824," 'min' "),t(),i(2825,"code",73),e(2826," 'max'"),t()(),i(2827,"td",26)(2828,"p"),e(2829,"Propriedade que recebe a fun\xE7\xE3o para o c\xE1lculo."),t()()(),i(2830,"tr",19)(2831,"td",20)(2832,"div",21)(2833,"span",22),e(2834," field"),n(2835,"br"),t()()(),i(2836,"td",23)(2837,"code",38),e(2838,"string"),t()(),i(2839,"td",26)(2840,"p"),e(2841,"Coluna que ser\xE1 utilizada pelo totalizador."),t()()(),i(2842,"tr",19)(2843,"td",20)(2844,"div",21)(2845,"span",22),e(2846," label"),n(2847,"br"),t()()(),i(2848,"td",23)(2849,"code",38),e(2850,"string"),t()(),i(2851,"td",26)(2852,"em")(2853,"strong"),e(2854,"(opcional)"),t()(),i(2855,"p"),e(2856,"Texto que ser\xE1 exibido junto ao resultado."),t()()()()(),i(2857,"po-accordion-item",74)(2858,"h4",9)(2859,"code"),e(2860,"ThfGridColumnSort"),t()(),i(2861,"div",10)(2862,"p"),e(2863,"Interface para definir a ordena\xE7\xE3o das colunas ("),i(2864,"strong"),e(2865,"t-sort"),t(),e(2866,")."),t()(),i(2867,"h4",15),e(2868,"Propriedades"),t(),i(2869,"table",16)(2870,"tr",17)(2871,"th",18),e(2872,"Nome"),t(),i(2873,"th",18),e(2874,"Tipo"),t(),i(2875,"th",18),e(2876,"Descri\xE7\xE3o"),t()(),i(2877,"tr",19)(2878,"td",20)(2879,"div",21)(2880,"span",22),e(2881," dir"),n(2882,"br"),t()()(),i(2883,"td",23)(2884,"code",75),e(2885,"'asc' "),t(),i(2886,"code",76),e(2887," 'desc'"),t()(),i(2888,"td",26)(2889,"em")(2890,"strong"),e(2891,"(opcional)"),t()(),i(2892,"p"),e(2893,"Dire\xE7\xE3o da coluna:"),t(),i(2894,"ul")(2895,"li")(2896,"code"),e(2897,"asc"),t()(),i(2898,"li")(2899,"code"),e(2900,"desc"),t()()()()(),i(2901,"tr",19)(2902,"td",20)(2903,"div",21)(2904,"span",22),e(2905," field"),n(2906,"br"),t()()(),i(2907,"td",23)(2908,"code",38),e(2909,"string"),t()(),i(2910,"td",26)(2911,"p"),e(2912,"Coluna"),t()()()()(),i(2913,"po-accordion-item",77)(2914,"h4",9)(2915,"code"),e(2916,"ThfGridColumn"),t()(),i(2917,"div",10)(2918,"p"),e(2919,"Interface para configura\xE7\xE3o das colunas ("),i(2920,"strong"),e(2921,"t-columns"),t(),e(2922,")."),t()(),i(2923,"h4",15),e(2924,"Propriedades"),t(),i(2925,"table",16)(2926,"tr",17)(2927,"th",18),e(2928,"Nome"),t(),i(2929,"th",18),e(2930,"Tipo"),t(),i(2931,"th",18),e(2932,"Descri\xE7\xE3o"),t()(),i(2933,"tr",19)(2934,"td",20)(2935,"div",21)(2936,"span",22),e(2937," action"),n(2938,"br"),t()()(),i(2939,"td",23)(2940,"code",27),e(2941,"Function"),t()(),i(2942,"td",26)(2943,"em")(2944,"strong"),e(2945,"(opcional)"),t()(),i(2946,"p"),e(2947,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),i(2948,"code"),e(2949,"link"),t(),e(2950," ou "),i(2951,"code"),e(2952,"icon"),t(),e(2953,"."),t(),i(2954,"blockquote")(2955,"p"),e(2956,"Quando for do tipo "),i(2957,"code"),e(2958,"link"),t(),e(2959,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),t()(),i(2960,"blockquote")(2961,"p"),e(2962,"Quando for do tipo "),i(2963,"code"),e(2964,"icon"),t(),e(2965," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),t()()()(),i(2966,"tr",19)(2967,"td",20)(2968,"div",21)(2969,"span",22),e(2970," boolean"),n(2971,"br"),t()()(),i(2972,"td",23)(2973,"code",78),e(2974,"PoTableBoolean"),t()(),i(2975,"td",26)(2976,"em")(2977,"strong"),e(2978,"(opcional)"),t()(),i(2979,"p"),e(2980,"Define um objeto do tipo "),i(2981,"code"),e(2982,"PoTableBoolean"),t(),e(2983," para as colunas do tipo "),i(2984,"em"),e(2985,"boolean"),t(),e(2986,". Por exemplo:"),t(),i(2987,"pre")(2988,"code"),e(2989,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}`),t()(),i(2990,"blockquote")(2991,"p"),e(2992,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(2993,"em"),e(2994,"boolean"),t(),e(2995,`,
esta exibir\xE1 por padr\xE3o `),i(2996,"code"),e(2997,"Sim"),t(),e(2998," e "),i(2999,"code"),e(3e3,"N\xE3o"),t(),e(3001," de acordo com os valores "),i(3002,"em"),e(3003,"booleanos"),t(),e(3004,"."),t()()()(),i(3005,"tr",19)(3006,"td",20)(3007,"div",21)(3008,"span",22),e(3009," booleanFalse"),n(3010,"br"),t()()(),i(3011,"td",23)(3012,"code",38),e(3013,"string"),t()(),i(3014,"td",26)(3015,"em")(3016,"strong"),e(3017,"(opcional)"),t()(),i(3018,"p"),e(3019,"Texto exibido quando o valor da coluna for "),i(3020,"em"),e(3021,"false"),t(),e(3022,"."),t()()(),i(3023,"tr",19)(3024,"td",20)(3025,"div",21)(3026,"span",22),e(3027," booleanTrue"),n(3028,"br"),t()()(),i(3029,"td",23)(3030,"code",38),e(3031,"string"),t()(),i(3032,"td",26)(3033,"em")(3034,"strong"),e(3035,"(opcional)"),t()(),i(3036,"p"),e(3037,"Texto exibido quando o valor da coluna for "),i(3038,"em"),e(3039,"true"),t(),e(3040,"."),t()()(),i(3041,"tr",19)(3042,"td",20)(3043,"div",21)(3044,"span",22),e(3045," color"),n(3046,"br"),t()()(),i(3047,"td",23)(3048,"code",38),e(3049,"string "),t(),i(3050,"code",27),e(3051," Function"),t()(),i(3052,"td",26)(3053,"em")(3054,"strong"),e(3055,"(opcional)"),t()(),i(3056,"p"),e(3057,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),t(),i(3058,"p"),e(3059,"Valores v\xE1lidos:"),t(),i(3060,"ul")(3061,"li"),n(3062,"span",79),i(3063,"code"),e(3064,"color-01"),t()(),i(3065,"li"),n(3066,"span",80),i(3067,"code"),e(3068,"color-02"),t()(),i(3069,"li"),n(3070,"span",81),i(3071,"code"),e(3072,"color-03"),t()(),i(3073,"li"),n(3074,"span",82),i(3075,"code"),e(3076,"color-04"),t()(),i(3077,"li"),n(3078,"span",83),i(3079,"code"),e(3080,"color-05"),t()(),i(3081,"li"),n(3082,"span",84),i(3083,"code"),e(3084,"color-06"),t()(),i(3085,"li"),n(3086,"span",85),i(3087,"code"),e(3088,"color-07"),t()(),i(3089,"li"),n(3090,"span",86),i(3091,"code"),e(3092,"color-08"),t()(),i(3093,"li"),n(3094,"span",87),i(3095,"code"),e(3096,"color-09"),t()(),i(3097,"li"),n(3098,"span",88),i(3099,"code"),e(3100,"color-10"),t()(),i(3101,"li"),n(3102,"span",89),i(3103,"code"),e(3104,"color-11"),t()(),i(3105,"li"),n(3106,"span",90),i(3107,"code"),e(3108,"color-12"),t()()(),i(3109,"blockquote")(3110,"p"),e(3111,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),t()(),i(3112,"pre")(3113,"code"),e(3114,"(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }"),t()(),i(3115,"blockquote")(3116,"p"),e(3117,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),i(3118,"code"),e(3119,"icons"),t(),e(3120,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),t()(),i(3121,"pre")(3122,"code"),e(3123,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},`),t()()()(),i(3124,"tr",19)(3125,"td",20)(3126,"div",21)(3127,"span",22),e(3128," detail"),n(3129,"br"),t()()(),i(3130,"td",23)(3131,"code",91),e(3132,"PoTableDetail"),t()(),i(3133,"td",26)(3134,"em")(3135,"strong"),e(3136,"(opcional)"),t()(),i(3137,"p"),e(3138,"Define um objeto que segue a interface "),i(3139,"code"),e(3140,"PoTableDetail"),t(),e(3141,", para as colunas de detalhes. Por exemplo:"),t(),i(3142,"pre")(3143,"code"),e(3144,"{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }"),t()()()(),i(3145,"tr",19)(3146,"td",20)(3147,"div",21)(3148,"span",22),e(3149," disabled"),n(3150,"br"),t()()(),i(3151,"td",23)(3152,"code",27),e(3153,"Function"),t()(),i(3154,"td",26)(3155,"em")(3156,"strong"),e(3157,"(opcional)"),t()(),i(3158,"p"),e(3159,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(3160,"em"),e(3161,"link"),t(),e(3162," e sua a\xE7\xE3o."),t(),i(3163,"blockquote")(3164,"p"),e(3165,"Propriedade dispon\xEDvel nas colunas do tipo "),i(3166,"code"),e(3167,"link"),t(),e(3168,"."),t()()()(),i(3169,"tr",19)(3170,"td",20)(3171,"div",21)(3172,"span",22),e(3173," editProperties"),n(3174,"br"),t()()(),i(3175,"td",23)(3176,"code",92),e(3177,"CustomEditProperties"),t()(),i(3178,"td",26)(3179,"em")(3180,"strong"),e(3181,"(opcional)"),t()(),i(3182,"p"),e(3183,"Propriedade para customizar as colunas edit\xE1veis"),t()()(),i(3184,"tr",19)(3185,"td",20)(3186,"div",21)(3187,"span",22),e(3188," fixed"),n(3189,"br"),t()()(),i(3190,"td",23)(3191,"code",24),e(3192,"boolean"),t()(),i(3193,"td",26)(3194,"em")(3195,"strong"),e(3196,"(opcional)"),t()(),i(3197,"p"),e(3198,"Propriedade para fixar a coluna inicialmente."),t(),i(3199,"blockquote")(3200,"p"),e(3201,`No momento, \xE9 poss\xEDvel fixar apenas 2 colunas e garantir o funcionamento correto.
Caso a coluna de a\xE7\xF5es esteja fixa, \xE9 poss\xEDvel fixar somente 1 coluna corretamente.`),t()()()(),i(3202,"tr",19)(3203,"td",20)(3204,"div",21)(3205,"span",22),e(3206," format"),n(3207,"br"),t()()(),i(3208,"td",23)(3209,"code",38),e(3210,"string"),t()(),i(3211,"td",26)(3212,"em")(3213,"strong"),e(3214,"(opcional)"),t()(),i(3215,"p"),e(3216,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(3217,"ul")(3218,"li"),e(3219,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(3220,"li"),e(3221,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t(),i(3222,"li"),e(3223,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e
milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),t(),i(3224,"li"),e(3225,"Formato para n\xFAmeros (number): aceita um valor seguindo o padr\xE3o "),i(3226,"a",93)(3227,"strong"),e(3228,"DecimalPipe"),t()(),e(3229,`
para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original. Exemplo:`),i(3230,"ul")(3231,"li"),e(3232,"Com o valor de entrada: "),i(3233,"code"),e(3234,"50"),t(),e(3235," e a valor para formata\xE7\xE3o: "),i(3236,"code"),e(3237,"'1.2-5'"),t(),e(3238," o resultado ser\xE1: "),i(3239,"code"),e(3240,"50.00"),t()()()()()()(),i(3241,"tr",19)(3242,"td",20)(3243,"div",21)(3244,"span",22),e(3245," icons"),n(3246,"br"),t()()(),i(3247,"td",23)(3248,"code",94),e(3249,"Array<PoTableColumnIcon>"),t()(),i(3250,"td",26)(3251,"em")(3252,"strong"),e(3253,"(opcional)"),t()(),i(3254,"p"),e(3255,"Define um "),i(3256,"em"),e(3257,"array"),t(),e(3258," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),i(3259,"code"),e(3260,"action"),t(),e(3261," e "),i(3262,"code"),e(3263,"color"),t(),e(3264,`
definidos na coluna, \xE0 partir do `),i(3265,"em"),e(3266,"value"),t(),e(3267," da "),i(3268,"a",95)(3269,"code"),e(3270,"PoTableColumnIcon"),t()(),e(3271,", por exemplo:"),t(),i(3272,"pre")(3273,"code"),e(3274,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},`),t()(),i(3275,"pre")(3276,"code"),e(3277,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...`),t()()()(),i(3278,"tr",19)(3279,"td",20)(3280,"div",21)(3281,"span",22),e(3282," key"),n(3283,"br"),t()()(),i(3284,"td",23)(3285,"code",24),e(3286,"boolean "),t(),i(3287,"code",49),e(3288," number"),t()(),i(3289,"td",26)(3290,"em")(3291,"strong"),e(3292,"(opcional)"),t()(),i(3293,"p"),e(3294,`Indica se a coluna faz parte da chave composta para exclus\xE3o de registros.
Pode ser do tipo num\xE9rico ou booleano. Os valores num\xE9ricos sempre ser\xE3o priorizados em rela\xE7\xE3o aos booleanos.
Para a exclus\xE3o, \xE9 necess\xE1rio que a `),i(3295,"code"),e(3296,"API"),t(),e(3297," esteja preparada para receber uma ou mais "),i(3298,"code"),e(3299,"keys"),t(),e(3300," concatenadas com pipe '|' para identifica\xE7\xE3o do registro. ex.: DELETE {end-point}/{keys}"),t(),i(3301,"blockquote")(3302,"p"),e(3303,`Exemplo de keys: [{ property: 'id', key: 1 }, { property: 'name', key: true }, { property: 'email', key: 2 }].
Resposta do exemplo: 'valor de id|valor de email|valor de name'`),t()()()(),i(3304,"tr",19)(3305,"td",20)(3306,"div",21)(3307,"span",22),e(3308," label"),n(3309,"br"),t()()(),i(3310,"td",23)(3311,"code",38),e(3312,"string"),t()(),i(3313,"td",26)(3314,"em")(3315,"strong"),e(3316,"(opcional)"),t()(),i(3317,"p"),e(3318,"Texto para t\xEDtulo da coluna."),t(),i(3319,"p"),e(3320,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(3321,"em"),e(3322,"label"),t(),e(3323," o valor da propriedade "),i(3324,"em"),e(3325,"property"),t(),e(3326," com a primeira letra em mai\xFAsculo."),t()()(),i(3327,"tr",19)(3328,"td",20)(3329,"div",21)(3330,"span",22),e(3331," labels"),n(3332,"br"),t()()(),i(3333,"td",23)(3334,"code",96),e(3335,"Array<PoTableColumnLabel>"),t()(),i(3336,"td",26)(3337,"em")(3338,"strong"),e(3339,"(opcional)"),t()(),i(3340,"p"),e(3341,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(3342,"code"),e(3343,"PoTableColumnLabel"),t(),e(3344," na qual devem ser definidas os labels. Por exemplo:"),t(),i(3345,"pre")(3346,"code"),e(3347,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}`),t()()()(),i(3348,"tr",19)(3349,"td",20)(3350,"div",21)(3351,"span",22),e(3352," link"),n(3353,"br"),t()()(),i(3354,"td",23)(3355,"code",38),e(3356,"string"),t()(),i(3357,"td",26)(3358,"em")(3359,"strong"),e(3360,"(opcional)"),t()(),i(3361,"p"),e(3362,"Define o nome da propriedade que conter\xE1 o "),i(3363,"code"),e(3364,"link"),t(),e(3365," a ser redirecionado."),t()()(),i(3366,"tr",19)(3367,"td",20)(3368,"div",21)(3369,"span",22),e(3370," mask"),n(3371,"br"),t()()(),i(3372,"td",23)(3373,"code",38),e(3374,"string"),t()(),i(3375,"td",26)(3376,"em")(3377,"strong"),e(3378,"(opcional)"),t()(),i(3379,"p"),e(3380,`Indica uma m\xE1scara para a coluna
Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
Aplic\xE1vel nas colunas do tipo `),i(3381,"code"),e(3382,"number"),t(),e(3383," e "),i(3384,"code"),e(3385,"string"),t(),e(3386,`
Nas colunas do tipo `),i(3387,"code"),e(3388,"number"),t(),e(3389," a propriedade "),i(3390,"code"),e(3391,"mask"),t(),e(3392," ter\xE1 prioridade sob "),i(3393,"code"),e(3394,"format"),t()()()(),i(3395,"tr",19)(3396,"td",20)(3397,"div",21)(3398,"span",22),e(3399," property"),n(3400,"br"),t()()(),i(3401,"td",23)(3402,"code",38),e(3403,"string"),t()(),i(3404,"td",26)(3405,"p"),e(3406,"Identificador da coluna."),t()()(),i(3407,"tr",19)(3408,"td",20)(3409,"div",21)(3410,"span",22),e(3411," resizable"),n(3412,"br"),t()()(),i(3413,"td",23)(3414,"code",24),e(3415,"boolean"),t()(),i(3416,"td",26)(3417,"em")(3418,"strong"),e(3419,"(opcional)"),t()(),i(3420,"p"),e(3421,"Define se a coluna pode ser redimensionada pelo usu\xE1rio."),t()()(),i(3422,"tr",19)(3423,"td",20)(3424,"div",21)(3425,"span",22),e(3426," sortable"),n(3427,"br"),t()()(),i(3428,"td",23)(3429,"code",24),e(3430,"boolean"),t()(),i(3431,"td",26)(3432,"em")(3433,"strong"),e(3434,"(opcional)"),t()(),i(3435,"p"),e(3436,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),t()()(),i(3437,"tr",19)(3438,"td",20)(3439,"div",21)(3440,"span",22),e(3441," subtitles"),n(3442,"br"),t()()(),i(3443,"td",23)(3444,"code",97),e(3445,"Array<PoTableSubtitleColumn>"),t()(),i(3446,"td",26)(3447,"em")(3448,"strong"),e(3449,"(opcional)"),t()(),i(3450,"p"),e(3451,"Define um array de objetos para as colunas de legenda. Onde, "),i(3452,"code"),e(3453,"subtitles"),t(),e(3454,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),t(),i(3455,"pre")(3456,"code"),e(3457,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', content: '2' }
}`),t()(),i(3458,"p"),e(3459,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),t()()(),i(3460,"tr",19)(3461,"td",20)(3462,"div",21)(3463,"span",22),e(3464," tooltip"),n(3465,"br"),t()()(),i(3466,"td",23)(3467,"code",38),e(3468,"string"),t()(),i(3469,"td",26)(3470,"em")(3471,"strong"),e(3472,"(opcional)"),t()(),i(3473,"p"),e(3474,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),i(3475,"em"),e(3476,"mouse"),t(),e(3477," sobre um texto."),t(),i(3478,"blockquote")(3479,"p"),e(3480,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),i(3481,"em"),e(3482,"link"),t(),e(3483,"."),t()(),i(3484,"blockquote")(3485,"p"),e(3486,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),i(3487,"em"),e(3488,"tooltip"),t(),e(3489," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),t()()()(),i(3490,"tr",19)(3491,"td",20)(3492,"div",21)(3493,"span",22),e(3494," type"),n(3495,"br"),t()()(),i(3496,"td",23)(3497,"code",38),e(3498,"string"),t()(),i(3499,"td",26)(3500,"em")(3501,"strong"),e(3502,"(opcional)"),t()(),i(3503,"p"),e(3504,"Tipo da coluna."),t(),i(3505,"p"),e(3506,"Valores v\xE1lidos:"),t(),i(3507,"ul")(3508,"li")(3509,"p")(3510,"code"),e(3511,"boolean"),t(),e(3512,": Exibir\xE1 por padr\xE3o "),i(3513,"code"),e(3514,"Sim"),t(),e(3515," e "),i(3516,"code"),e(3517,"N\xE3o"),t(),e(3518," de acordo com os valores "),i(3519,"em"),e(3520,"booleanos"),t(),e(3521,"."),t(),i(3522,"blockquote")(3523,"p"),e(3524,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),i(3525,"code"),e(3526,"boolean"),t(),e(3527," desta interface."),t()()(),i(3528,"li")(3529,"p")(3530,"code"),e(3531,"currency"),t(),e(3532,": valores monet\xE1rios."),t()(),i(3533,"li")(3534,"p")(3535,"code"),e(3536,"date"),t(),e(3537,": valor de datas."),t(),i(3538,"ul")(3539,"li"),e(3540,"Aceita os tipos "),i(3541,"em"),e(3542,"string"),t(),e(3543," e "),i(3544,"em"),e(3545,"Date"),t(),e(3546,` padr\xE3o do Javascript,
por exemplo: `),i(3547,"code"),e(3548,"'2017-11-28'"),t(),e(3549," ou "),i(3550,"code"),e(3551,"new Date(2017, 10, 28)"),t(),e(3552,"."),t()()(),i(3553,"li")(3554,"p")(3555,"code"),e(3556,"dateTime"),t(),e(3557,": valor de data com hor\xE1rio."),t(),i(3558,"ul")(3559,"li"),e(3560,"Aceita o tipo "),i(3561,"em"),e(3562,"string"),t(),e(3563," no formato "),i(3564,"strong"),e(3565,"ISO-8601"),t(),e(3566," extendido "),i(3567,"strong"),e(3568,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(3569,`
e o tipo `),i(3570,"em"),e(3571,"Date"),t(),e(3572," padr\xE3o do Javascript, por exemplo: "),i(3573,"code"),e(3574,"'2017-11-28T00:00:00-02:00'"),t(),e(3575," ou "),i(3576,"code"),e(3577,"new Date(2017, 10, 28)"),t(),e(3578,"."),t()()(),i(3579,"li")(3580,"p")(3581,"code"),e(3582,"detail"),t(),e(3583,": array de objetos para o master-detail."),t(),i(3584,"ul")(3585,"li"),e(3586,"Incompat\xEDvel com "),i(3587,"code"),e(3588,"virtual-scroll"),t(),e(3589,", que requer altura fixa nas linhas."),t()()(),i(3590,"li")(3591,"p")(3592,"code"),e(3593,"icon"),t(),e(3594,": "),i(3595,"em"),e(3596,"array"),t(),e(3597," de "),i(3598,"em"),e(3599,"string"),t(),e(3600," ou objetos para a coluna de \xEDcones."),t()(),i(3601,"li")(3602,"p")(3603,"code"),e(3604,"label"),t(),e(3605,": texto com destaque."),t()(),i(3606,"li")(3607,"p")(3608,"code"),e(3609,"link"),t(),e(3610,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),t()(),i(3611,"li")(3612,"p")(3613,"code"),e(3614,"number"),t(),e(3615,": valores num\xE9ricos."),t()(),i(3616,"li")(3617,"p")(3618,"code"),e(3619,"string"),t(),e(3620,": textos."),t()(),i(3621,"li")(3622,"p")(3623,"code"),e(3624,"subtitle"),t(),e(3625,": array de objetos para a coluna de legenda."),t()(),i(3626,"li")(3627,"p")(3628,"code"),e(3629,"time"),t(),e(3630,": valor de hor\xE1rio."),t(),i(3631,"ul")(3632,"li"),e(3633,"Aceita o tipo "),i(3634,"em"),e(3635,"string"),t(),e(3636," nos formatos "),i(3637,"strong"),e(3638,"'HH:mm:ss'"),t(),e(3639," ou "),i(3640,"strong"),e(3641,"'HH:mm:ss.ffffff'"),t(),e(3642,", por exemplo: "),i(3643,"code"),e(3644,"'23:12:45'"),t(),e(3645,"."),t()()(),i(3646,"li")(3647,"p")(3648,"code"),e(3649,"cellTemplate"),t(),e(3650,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),i(3651,"a",98),e(3652,"PoTableCellTemplate"),t(),e(3653,"."),t()(),i(3654,"li")(3655,"p")(3656,"code"),e(3657,"columnTemplate"),t(),e(3658,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),i(3659,"a",99),e(3660,"PoTableColumnTemplate"),t(),e(3661,"."),t()()()()(),i(3662,"tr",19)(3663,"td",20)(3664,"div",21)(3665,"span",22),e(3666," visible"),n(3667,"br"),t()()(),i(3668,"td",23)(3669,"code",24),e(3670,"boolean"),t()(),i(3671,"td",26)(3672,"em")(3673,"strong"),e(3674,"(opcional)"),t()(),i(3675,"p"),e(3676,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(3677,"strong"),e(3678,"gerenciador de colunas"),t(),e(3679,"."),t(),i(3680,"blockquote")(3681,"p"),e(3682,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(3683,"code"),e(3684,"p-max-columns"),t(),e(3685,"."),t()()()(),i(3686,"tr",19)(3687,"td",20)(3688,"div",21)(3689,"span",22),e(3690," width"),n(3691,"br"),t()()(),i(3692,"td",23)(3693,"code",49),e(3694,"number "),t(),i(3695,"code",38),e(3696," string"),t()(),i(3697,"td",26)(3698,"em")(3699,"strong"),e(3700,"(opcional)"),t()(),i(3701,"p"),e(3702,"Caso seja passado o formato "),i(3703,"code"),e(3704,"number"),t(),e(3705,`, ser\xE1 aplicado em pixels.
A largura da coluna pode ser informada em pixels ou porcentagem.`),t(),i(3706,"blockquote")(3707,"p"),e(3708,`Exemplo Pixel: 100.
Exemplo Porcentagem: '100%'.
Apesar de atribuir largura as colunas da grid \xE9 importante ressaltar
que o componente recalcula as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis na grid,
podendo alterar as dimens\xF5es passadas proporcionalmente.`),t()()()()()(),i(3709,"po-accordion-item",100)(3710,"h4",9)(3711,"code"),e(3712,"CustomEditProperties"),t()(),i(3713,"div",10)(3714,"p"),e(3715,"Interface para configura\xE7\xE3o das colunas edit\xE1veis ("),i(3716,"strong"),e(3717,"editProperties"),t(),e(3718,`).
Al\xE9m dessas propriedades, herda as defini\xE7\xF5es da interface
`),i(3719,"a",101),e(3720,"PoDynamicFormField"),t(),e(3721,`,
permitindo definir campos de entrada que ser\xE3o criados dinamicamente.`),t()(),i(3722,"h4",15),e(3723,"Propriedades"),t(),i(3724,"table",16)(3725,"tr",17)(3726,"th",18),e(3727,"Nome"),t(),i(3728,"th",18),e(3729,"Tipo"),t(),i(3730,"th",18),e(3731,"Descri\xE7\xE3o"),t()(),i(3732,"tr",19)(3733,"td",20)(3734,"div",21)(3735,"span",22),e(3736," componentEditable"),n(3737,"br"),t()()(),i(3738,"td",23)(3739,"code",102),e(3740,"'input' "),t(),i(3741,"code",103),e(3742," 'number' "),t(),i(3743,"code",104),e(3744," 'select' "),t(),i(3745,"code",105),e(3746," 'datepicker' "),t(),i(3747,"code",106),e(3748," 'switch' "),t(),i(3749,"code",107),e(3750," 'combo' "),t(),i(3751,"code",108),e(3752," 'multiselect' "),t(),i(3753,"code",109),e(3754," 'decimal' "),t(),i(3755,"code",110),e(3756," 'checkbox' "),t(),i(3757,"code",111),e(3758," 'lookup'"),t()(),i(3759,"td",26)(3760,"em")(3761,"strong"),e(3762,"(opcional)"),t()(),i(3763,"p"),e(3764,"Propriedade para escolher qual componente ser\xE1 exibido para editar."),t(),i(3765,"blockquote")(3766,"p"),e(3767,"O valor padr\xE3o \xE9 "),i(3768,"code"),e(3769,"input"),t(),e(3770,"."),t()()()(),i(3771,"tr",19)(3772,"td",20)(3773,"div",21)(3774,"span",22),e(3775," componentSize"),n(3776,"br"),t()()(),i(3777,"td",23)(3778,"code",112),e(3779,"'small' "),t(),i(3780,"code",113),e(3781," 'medium' "),t(),i(3782,"code",114),e(3783," 'large'"),t()(),i(3784,"td",26)(3785,"em")(3786,"strong"),e(3787,"(opcional)"),t()(),i(3788,"p"),e(3789,"Define o tamanho dos componentes de formul\xE1rio no grid conforme suas respectivas documenta\xE7\xF5es:"),t(),i(3790,"ul")(3791,"li")(3792,"code"),e(3793,"small"),t(),e(3794,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(3795,"li")(3796,"code"),e(3797,"medium"),t(),e(3798,": aplica a medida medium de cada componente."),t(),i(3799,"li")(3800,"code"),e(3801,"large"),t(),e(3802,": aplica a medida large de cada componente (dispon\xEDvel para "),i(3803,"code"),e(3804,"po-checkbox"),t(),e(3805," e "),i(3806,"code"),e(3807,"po-radio-group"),t(),e(3808,")."),i(3809,"blockquote")(3810,"p"),e(3811,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(3812,"code"),e(3813,"medium"),t(),e(3814,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(3815,"a",39),e(3816,"po-theme"),t(),e(3817,"."),t()()()()()(),i(3818,"tr",19)(3819,"td",20)(3820,"div",21)(3821,"span",22),e(3822," controlValueWithLabel"),n(3823,"br"),t()()(),i(3824,"td",23)(3825,"code",24),e(3826,"boolean"),t()(),i(3827,"td",26)(3828,"em")(3829,"strong"),e(3830,"(opcional)"),t()(),i(3831,"p"),e(3832,"Determina se os componentes "),i(3833,"code"),e(3834,"select"),t(),e(3835,", "),i(3836,"code"),e(3837,"combo"),t(),e(3838,", "),i(3839,"code"),e(3840,"multiselect"),t(),e(3841," e "),i(3842,"code"),e(3843,"thf-lookup"),t(),e(3844,`
devem exibir o `),i(3845,"code"),e(3846,"label"),t(),e(3847," ao inv\xE9s de "),i(3848,"code"),e(3849,"value"),t(),e(3850," na grid"),t()()(),i(3851,"tr",19)(3852,"td",20)(3853,"div",21)(3854,"span",22),e(3855," fieldFormat"),n(3856,"br"),t()()(),i(3857,"td",23)(3858,"code",46),e(3859,"Array<string> "),t(),i(3860,"code",115),e(3861," ((item: any) => string)"),t()(),i(3862,"td",26)(3863,"em")(3864,"strong"),e(3865,"(opcional)"),t()(),i(3866,"p"),e(3867,"Formato de exibi\xE7\xE3o do campo."),t(),i(3868,"p"),e(3869,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(3870,"em"),e(3871,"string"),t(),e(3872," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(3873,"pre")(3874,"code",31),e(3875,`fieldFormat(obj) {
  return \`\${obj.id} (\${obj.name})\`;
}


Ou pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo.
Nessa caso, ser\xE1 utilizado \` - \` como separador, por exemplo:

\`\`\`typescript
 fieldFormat]="['id','nickname']"`),t()(),i(3876,"blockquote")(3877,"p"),e(3878,"Componente compat\xEDvel: "),i(3879,"code"),e(3880,"thf-lookup"),t(),e(3881,"."),t()()()(),i(3882,"tr",19)(3883,"td",20)(3884,"div",21)(3885,"span",22),e(3886," filterSearchSelect"),n(3887,"br"),t()()(),i(3888,"td",23)(3889,"code",116),e(3890,"Array<ThfLookupFilterSearchSelect>"),t()(),i(3891,"td",26)(3892,"em")(3893,"strong"),e(3894,"(opcional)"),t()(),i(3895,"p"),e(3896,"Propriedade para listar as op\xE7\xF5es de filtro do po-search no modal."),t(),i(3897,"blockquote")(3898,"p"),e(3899,"Componente compat\xEDvel: "),i(3900,"code"),e(3901,"thf-lookup"),t(),e(3902,"."),t()()()(),i(3903,"tr",19)(3904,"td",20)(3905,"div",21)(3906,"span",22),e(3907," keysLabel"),n(3908,"br"),t()()(),i(3909,"td",23)(3910,"code",117),e(3911,"Array<ThfLookupKeysLabel>"),t()(),i(3912,"td",26)(3913,"em")(3914,"strong"),e(3915,"(opcional)"),t()(),i(3916,"p"),e(3917,"Propriedade para exibir at\xE9 3 propriedades por valor no listbox."),t(),i(3918,"blockquote")(3919,"p"),e(3920,"Componente compat\xEDvel: "),i(3921,"code"),e(3922,"thf-lookup"),t(),e(3923,"."),t()()()(),i(3924,"tr",19)(3925,"td",20)(3926,"div",21)(3927,"span",22),e(3928," onBlur"),n(3929,"br"),t()()(),i(3930,"td",23)(3931,"code",27),e(3932,"Function"),t()(),i(3933,"td",26)(3934,"em")(3935,"strong"),e(3936,"(opcional)"),t()(),i(3937,"p"),e(3938,"Evento disparado ao sair do campo."),t(),i(3939,"blockquote")(3940,"p")(3941,"strong"),e(3942,"Componentes compat\xEDveis"),t(),e(3943,": "),i(3944,"code"),e(3945,"po-input"),t(),e(3946,", "),i(3947,"code"),e(3948,"po-number"),t(),e(3949,", "),i(3950,"code"),e(3951,"po-decimal"),t(),e(3952,", "),i(3953,"code"),e(3954,"po-datepicker"),t(),e(3955,", "),i(3956,"code"),e(3957,"po-select"),t(),e(3958,", "),i(3959,"code"),e(3960,"po-combo"),t(),e(3961,", "),i(3962,"code"),e(3963,"po-multiselect"),t(),e(3964,", "),i(3965,"code"),e(3966,"po-checkbox"),t()()()()(),i(3967,"tr",19)(3968,"td",20)(3969,"div",21)(3970,"span",22),e(3971," onChange"),n(3972,"br"),t()()(),i(3973,"td",23)(3974,"code",118),e(3975,"(value: any) => void"),t()(),i(3976,"td",26)(3977,"em")(3978,"strong"),e(3979,"(opcional)"),t()(),i(3980,"p"),e(3981,"Evento disparado ao alterar valor e deixar o campo."),t(),i(3982,"blockquote")(3983,"p")(3984,"strong"),e(3985,"Componentes compat\xEDveis"),t(),e(3986,": "),i(3987,"code"),e(3988,"po-input"),t(),e(3989,", "),i(3990,"code"),e(3991,"po-number"),t(),e(3992,", "),i(3993,"code"),e(3994,"po-decimal"),t(),e(3995,", "),i(3996,"code"),e(3997,"po-datepicker"),t(),e(3998,", "),i(3999,"code"),e(4e3,"po-select"),t(),e(4001,", "),i(4002,"code"),e(4003,"po-switch"),t(),e(4004,", "),i(4005,"code"),e(4006,"po-combo"),t(),e(4007,", "),i(4008,"code"),e(4009,"po-multiselect"),t(),e(4010,", "),i(4011,"code"),e(4012,"po-checkbox"),t(),e(4013,", "),i(4014,"code"),e(4015,"thf-lookup"),t()()()()(),i(4016,"tr",19)(4017,"td",20)(4018,"div",21)(4019,"span",22),e(4020," onChangeModel"),n(4021,"br"),t()()(),i(4022,"td",23)(4023,"code",119),e(4024,"(model: any) => void"),t()(),i(4025,"td",26)(4026,"em")(4027,"strong"),e(4028,"(opcional)"),t()(),i(4029,"p"),e(4030,"Evento disparado ao alterar valor do model."),t(),i(4031,"blockquote")(4032,"p")(4033,"strong"),e(4034,"Componentes compat\xEDveis"),t(),e(4035,": "),i(4036,"code"),e(4037,"po-input"),t(),e(4038,", "),i(4039,"code"),e(4040,"po-number"),t(),e(4041,", "),i(4042,"code"),e(4043,"po-decimal"),t(),e(4044,", "),i(4045,"code"),e(4046,"po-select"),t(),e(4047,", "),i(4048,"code"),e(4049,"po-combo"),t(),e(4050,", "),i(4051,"code"),e(4052,"thf-lookup"),t()()()()(),i(4053,"tr",19)(4054,"td",20)(4055,"div",21)(4056,"span",22),e(4057," onEnter"),n(4058,"br"),t()()(),i(4059,"td",23)(4060,"code",27),e(4061,"Function"),t()(),i(4062,"td",26)(4063,"em")(4064,"strong"),e(4065,"(opcional)"),t()(),i(4066,"p"),e(4067,"Evento disparado ao entrar no campo."),t(),i(4068,"blockquote")(4069,"p")(4070,"strong"),e(4071,"Componentes compat\xEDveis"),t(),e(4072,": "),i(4073,"code"),e(4074,"po-input"),t(),e(4075,", "),i(4076,"code"),e(4077,"po-number"),t(),e(4078,", "),i(4079,"code"),e(4080,"po-decimal"),t()()()()(),i(4081,"tr",19)(4082,"td",20)(4083,"div",21)(4084,"span",22),e(4085," onError"),n(4086,"br"),t()()(),i(4087,"td",23)(4088,"code",120),e(4089,"(error: HttpErrorResponse) => void"),t()(),i(4090,"td",26)(4091,"em")(4092,"strong"),e(4093,"(opcional)"),t()(),i(4094,"p"),e(4095,"Callback disparado quando ocorre erro na requisi\xE7\xE3o de busca."),t(),i(4096,"blockquote")(4097,"p")(4098,"strong"),e(4099,"Componente compat\xEDvel"),t(),e(4100,": "),i(4101,"code"),e(4102,"thf-lookup"),t()()()()(),i(4103,"tr",19)(4104,"td",20)(4105,"div",21)(4106,"span",22),e(4107," onFocus"),n(4108,"br"),t()()(),i(4109,"td",23)(4110,"code",27),e(4111,"Function"),t()(),i(4112,"td",26)(4113,"em")(4114,"strong"),e(4115,"(opcional)"),t()(),i(4116,"p"),e(4117,"Callback disparado quando o campo recebe foco."),t(),i(4118,"blockquote")(4119,"p")(4120,"strong"),e(4121,"Componente compat\xEDvel"),t(),e(4122,": "),i(4123,"code"),e(4124,"thf-lookup"),t()()()()(),i(4125,"tr",19)(4126,"td",20)(4127,"div",21)(4128,"span",22),e(4129," onInputChange"),n(4130,"br"),t()()(),i(4131,"td",23)(4132,"code",118),e(4133,"(value: any) => void"),t()(),i(4134,"td",26)(4135,"em")(4136,"strong"),e(4137,"(opcional)"),t()(),i(4138,"p"),e(4139,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no campo de busca do componente. A fun\xE7\xE3o receber\xE1 como argumento o valor modificado."),t(),i(4140,"blockquote")(4141,"p")(4142,"strong"),e(4143,"Componente compat\xEDvel"),t(),e(4144,": "),i(4145,"code"),e(4146,"po-combo"),t()()()()(),i(4147,"tr",19)(4148,"td",20)(4149,"div",21)(4150,"span",22),e(4151," onSelected"),n(4152,"br"),t()()(),i(4153,"td",23)(4154,"code",121),e(4155,"(selection: any "),t(),i(4156,"code",122),e(4157," Array<any>) => void"),t()(),i(4158,"td",26)(4159,"em")(4160,"strong"),e(4161,"(opcional)"),t()(),i(4162,"p"),e(4163,"Callback disparado ao selecionar item(s)."),t(),i(4164,"blockquote")(4165,"p")(4166,"strong"),e(4167,"Componente compat\xEDvel"),t(),e(4168,": "),i(4169,"code"),e(4170,"thf-lookup"),t()()()()(),i(4171,"tr",19)(4172,"td",20)(4173,"div",21)(4174,"span",22),e(4175," size"),n(4176,"br"),t()()(),i(4177,"td",23)(4178,"code",123),e(4179,"'sm' "),t(),i(4180,"code",124),e(4181," 'md' "),t(),i(4182,"code",125),e(4183," 'lg' "),t(),i(4184,"code",126),e(4185," 'xl' "),t(),i(4186,"code",127),e(4187," 'auto'"),t()(),i(4188,"td",26)(4189,"em")(4190,"strong"),e(4191,"(opcional)"),t()(),i(4192,"p"),e(4193,"Propriedade para definir o tamanho do modal."),t(),i(4194,"blockquote")(4195,"p"),e(4196,"Componente compat\xEDvel: "),i(4197,"code"),e(4198,"thf-lookup"),t(),e(4199,"."),t()()()()()(),i(4200,"po-accordion-item",128)(4201,"h4",9)(4202,"code"),e(4203,"ThfGridDeleteService"),t()(),i(4204,"div",10)(4205,"p"),e(4206,"Interface para excluir algum item via servi\xE7o."),t()(),i(4207,"table",60)(4208,"tr",19)(4209,"th",61)(4210,"div",21)(4211,"h4")(4212,"span",22),e(4213," deleteItem "),t()()()()(),i(4214,"tr",26)(4215,"td",26)(4216,"p"),e(4217,`M\xE9todo que ser\xE1 disparado ao excluir algum item, deve-se retornar
um `),i(4218,"em"),e(4219,"Observable"),t(),e(4220,"."),t()()()(),i(4221,"h5")(4222,"b"),e(4223,"Par\xE2metros"),t()(),i(4224,"table",16)(4225,"tr",17)(4226,"th",18),e(4227,"Nome"),t(),i(4228,"th",18),e(4229,"Tipo"),t(),i(4230,"th",18),e(4231,"Descri\xE7\xE3o"),t()(),i(4232,"tr",19)(4233,"td",20),e(4234," selectedRow"),t(),i(4235,"td",23)(4236,"code",62),e(4237," any "),t()(),i(4238,"td",26)(4239,"p"),e(4240,"Par\xE2metro com o valor do atual item selecionado."),t()()(),i(4241,"tr",19)(4242,"td",20),e(4243," filterParams"),t(),i(4244,"td",23)(4245,"code",62),e(4246," any "),t()(),i(4247,"td",26)(4248,"p"),e(4249,"Valor informado atrav\xE9s da propriedade "),i(4250,"code"),e(4251,"t-param-delete-api"),t(),e(4252,"."),t()()(),i(4253,"tr",19)(4254,"td",20),e(4255," keyValue"),t(),i(4256,"td",23)(4257,"code",62),e(4258," string "),t()(),i(4259,"td",26)(4260,"p"),e(4261,"Valor informado caso tenha alguma coluna com a propriedade "),i(4262,"code"),e(4263,"key"),t(),e(4264," ativa ou o valor da propriedade "),i(4265,"code"),e(4266,"id"),t(),e(4267,"."),t()()()(),n(4268,"br"),i(4269,"table",60)(4270,"tr",19)(4271,"th",61)(4272,"div",21)(4273,"h4")(4274,"span",22),e(4275," deleteBatchItems "),t()()()()(),i(4276,"tr",26)(4277,"td",26)(4278,"p"),e(4279,"M\xE9todo que ser\xE1 disparado ao excluir itens quando o THF-GRID estiver com a propriedade "),i(4280,"code"),e(4281,"t-allow-batch-delete"),t(),e(4282,` habilitada, deve-se retornar
um `),i(4283,"em"),e(4284,"Observable"),t(),e(4285,"."),t(),i(4286,"p"),e(4287,"Ao habilitar a propriedade "),i(4288,"code"),e(4289,"t-allow-batch-delete"),t(),e(4290,", este m\xE9todo sempre ser\xE1 chamado, exluindo um ou v\xE1rios itens."),t()()()(),i(4291,"h5")(4292,"b"),e(4293,"Par\xE2metros"),t()(),i(4294,"table",16)(4295,"tr",17)(4296,"th",18),e(4297,"Nome"),t(),i(4298,"th",18),e(4299,"Tipo"),t(),i(4300,"th",18),e(4301,"Descri\xE7\xE3o"),t()(),i(4302,"tr",19)(4303,"td",20),e(4304," selectedRows"),t(),i(4305,"td",23)(4306,"code",62),e(4307," any "),t()(),i(4308,"td",26)(4309,"p"),e(4310,"Par\xE2metro com os valores dos itens selecionados."),t()()(),i(4311,"tr",19)(4312,"td",20),e(4313," paramDelete"),t(),i(4314,"td",23)(4315,"code",62),e(4316," any "),t()(),i(4317,"td",26)(4318,"p"),e(4319,"Valor informado atrav\xE9s da propriedade "),i(4320,"code"),e(4321,"t-param-delete-api"),t(),e(4322,"."),t()()(),i(4323,"tr",19)(4324,"td",20),e(4325," keys"),t(),i(4326,"td",23)(4327,"code",62),e(4328," string "),t()(),i(4329,"td",26)(4330,"p"),e(4331,"Valor informado caso tenha alguma coluna com a propriedade "),i(4332,"code"),e(4333,"key"),t(),e(4334," ativa ou o valor da propriedade "),i(4335,"code"),e(4336,"id"),t(),e(4337,"."),t()()()(),n(4338,"br"),t(),i(4339,"po-accordion-item",129)(4340,"h4",9)(4341,"code"),e(4342,"ThfGridEditProperties"),t()(),i(4343,"div",10)(4344,"p"),e(4345,"Interface para configura\xE7\xE3o da edi\xE7\xE3o em linha ("),i(4346,"strong"),e(4347,"t-edit-properties"),t(),e(4348,")."),t()(),i(4349,"h4",15),e(4350,"Propriedades"),t(),i(4351,"table",16)(4352,"tr",17)(4353,"th",18),e(4354,"Nome"),t(),i(4355,"th",18),e(4356,"Tipo"),t(),i(4357,"th",18),e(4358,"Descri\xE7\xE3o"),t()(),i(4359,"tr",19)(4360,"td",20)(4361,"div",21)(4362,"span",22),e(4363," actionEdit"),n(4364,"br"),t()()(),i(4365,"td",23)(4366,"code",130),e(4367,"(param: any) => FormGroup"),t()(),i(4368,"td",26)(4369,"p"),e(4370,`M\xE9todo executado ao iniciar o modo edi\xE7\xE3o.
\xC9 passado um par\xE2metro com os valores respectivos de cada coluna.
\xC9 obrigat\xF3rio retornar o formul\xE1rio. Cada FormControl deve estar com o mesmo nome da `),i(4371,"code"),e(4372,"property"),t(),e(4373," da coluna desejada."),t(),i(4374,"p"),e(4375,"Exemplo de envio para a API:"),t(),i(4376,"pre")(4377,"code",28),e(4378,`<thf-grid
  t-service-api="https://po-sample-api.onrender.com/v1/people"
  [t-columns]="columns"
  [t-edit-properties]="editProperties"
>
</thf-grid>`),t()(),i(4379,"pre")(4380,"code",31),e(4381,`form: FormGroup;
editProperties: ThfGridEditProperties;

ngOnInit() {
  this.editProperties = {
    actionEdit: this.setFormGroup.bind(this),
    validate: this.changeValueForm.bind(this) // PROPRIEDADE OPCIONAL
  };
}

setFormGroup(dataItem) {
  const genreDescription = this.columns1.find(column => column.property === 'genreDescription');
  genreDescription.editProperties.disabled = true;
  genreDescription.editProperties.options = this.appService.getCity(dataItem.genre);
  this.form = new FormGroup({
    id: new FormControl(dataItem.id, [Validators.required]) // ID \xC9 OBRIGAT\xD3RIO,
    city: new FormControl(dataItem.city),
    email: new FormControl(dataItem.email),
    birthdate: new FormControl(dataItem.birthdate),
    genre: new FormControl(dataItem.genre),
    status: new FormControl(dataItem.status),
    genreDescription: new FormControl(dataItem.genreDescription, [Validators.required])
  });
  return this.form;
};`),t()()()(),i(4382,"tr",19)(4383,"td",20)(4384,"div",21)(4385,"span",22),e(4386," validate"),n(4387,"br"),t()()(),i(4388,"td",23)(4389,"code",131),e(4390,"(data: any, columnProperty: string) => FormGroup"),t()(),i(4391,"td",26)(4392,"em")(4393,"strong"),e(4394,"(opcional)"),t()(),i(4395,"p"),e(4396,`M\xE9todo executado ao alterar o valor de algum campo do formul\xE1rio.
O primeiro par\xE2metro s\xE3o os valores respectivos de cada coluna.
O segundo par\xE2metro \xE9 indicando a `),i(4397,"code"),e(4398,"property"),t(),e(4399,` da coluna que teve o valor alterado
\xC9 obrigat\xF3rio retornar o formul\xE1rio. Cada FormControl deve estar com o mesmo nome da `),i(4400,"code"),e(4401,"property"),t(),e(4402," da coluna desejada."),t()()()()(),i(4403,"po-accordion-item",132)(4404,"h4",9)(4405,"code"),e(4406,"ThfGridLiterals"),t()(),i(4407,"div",10)(4408,"p"),e(4409,"Interface para customizar literais ("),i(4410,"strong"),e(4411,"t-literals"),t(),e(4412,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(4413,"h4",15),e(4414,"Propriedades"),t(),i(4415,"table",16)(4416,"tr",17)(4417,"th",18),e(4418,"Nome"),t(),i(4419,"th",18),e(4420,"Tipo"),t(),i(4421,"th",18),e(4422,"Descri\xE7\xE3o"),t()(),i(4423,"tr",19)(4424,"td",20)(4425,"div",21)(4426,"span",22),e(4427," advancedSearch"),n(4428,"br"),t()()(),i(4429,"td",23)(4430,"code",38),e(4431,"string"),t()(),i(4432,"td",26)(4433,"em")(4434,"strong"),e(4435,"(opcional)"),t()(),i(4436,"p"),e(4437,"T\xEDtulo do modal Filtros"),t()()(),i(4438,"tr",19)(4439,"td",20)(4440,"div",21)(4441,"span",22),e(4442," bodyDelete"),n(4443,"br"),t()()(),i(4444,"td",23)(4445,"code",38),e(4446,"string"),t()(),i(4447,"td",26)(4448,"em")(4449,"strong"),e(4450,"(opcional)"),t()(),i(4451,"p"),e(4452,"Conte\xFAdo do modal Excluir"),t()()(),i(4453,"tr",19)(4454,"td",20)(4455,"div",21)(4456,"span",22),e(4457," bodyDeleteBatch"),n(4458,"br"),t()()(),i(4459,"td",23)(4460,"code",38),e(4461,"string"),t()(),i(4462,"td",26)(4463,"em")(4464,"strong"),e(4465,"(opcional)"),t()(),i(4466,"p"),e(4467,"Conte\xFAdo do modal Excluir configurado para excluir em lote"),t()()(),i(4468,"tr",19)(4469,"td",20)(4470,"div",21)(4471,"span",22),e(4472," cancel"),n(4473,"br"),t()()(),i(4474,"td",23)(4475,"code",38),e(4476,"string"),t()(),i(4477,"td",26)(4478,"em")(4479,"strong"),e(4480,"(opcional)"),t()(),i(4481,"p"),e(4482,"Label do bot\xE3o Cancelar"),t()()(),i(4483,"tr",19)(4484,"td",20)(4485,"div",21)(4486,"span",22),e(4487," columnsManager"),n(4488,"br"),t()()(),i(4489,"td",23)(4490,"code",38),e(4491,"string"),t()(),i(4492,"td",26)(4493,"em")(4494,"strong"),e(4495,"(opcional)"),t()(),i(4496,"p"),e(4497,"T\xEDtulo do page-slide Gerenciar Tabela"),t()()(),i(4498,"tr",19)(4499,"td",20)(4500,"div",21)(4501,"span",22),e(4502," compact"),n(4503,"br"),t()()(),i(4504,"td",23)(4505,"code",38),e(4506,"string"),t()(),i(4507,"td",26)(4508,"em")(4509,"strong"),e(4510,"(opcional)"),t()(),i(4511,"p"),e(4512,"Label do radio de densidade Compacto no Gerenciar Tabela"),t()()(),i(4513,"tr",19)(4514,"td",20)(4515,"div",21)(4516,"span",22),e(4517," confirm"),n(4518,"br"),t()()(),i(4519,"td",23)(4520,"code",38),e(4521,"string"),t()(),i(4522,"td",26)(4523,"em")(4524,"strong"),e(4525,"(opcional)"),t()(),i(4526,"p"),e(4527,"Label do bot\xE3o Confirmar"),t()()(),i(4528,"tr",19)(4529,"td",20)(4530,"div",21)(4531,"span",22),e(4532," default"),n(4533,"br"),t()()(),i(4534,"td",23)(4535,"code",38),e(4536,"string"),t()(),i(4537,"td",26)(4538,"em")(4539,"strong"),e(4540,"(opcional)"),t()(),i(4541,"p"),e(4542,"Label do radio de densidade Espa\xE7oso no Gerenciar Tabela"),t()()(),i(4543,"tr",19)(4544,"td",20)(4545,"div",21)(4546,"span",22),e(4547," delete"),n(4548,"br"),t()()(),i(4549,"td",23)(4550,"code",38),e(4551,"string"),t()(),i(4552,"td",26)(4553,"em")(4554,"strong"),e(4555,"(opcional)"),t()(),i(4556,"p"),e(4557,"Label do bot\xE3o Excluir"),t()()(),i(4558,"tr",19)(4559,"td",20)(4560,"div",21)(4561,"span",22),e(4562," deleteApiError"),n(4563,"br"),t()()(),i(4564,"td",23)(4565,"code",38),e(4566,"string"),t()(),i(4567,"td",26)(4568,"em")(4569,"strong"),e(4570,"(opcional)"),t()(),i(4571,"p"),e(4572,"Resposta de erro da requisi\xE7\xE3o delete no popup"),t()()(),i(4573,"tr",19)(4574,"td",20)(4575,"div",21)(4576,"span",22),e(4577," deleteItem"),n(4578,"br"),t()()(),i(4579,"td",23)(4580,"code",38),e(4581,"string"),t()(),i(4582,"td",26)(4583,"em")(4584,"strong"),e(4585,"(opcional)"),t()(),i(4586,"p"),e(4587,"T\xEDtulo do modal Excluir"),t()()(),i(4588,"tr",19)(4589,"td",20)(4590,"div",21)(4591,"span",22),e(4592," density"),n(4593,"br"),t()()(),i(4594,"td",23)(4595,"code",38),e(4596,"string"),t()(),i(4597,"td",26)(4598,"em")(4599,"strong"),e(4600,"(opcional)"),t()(),i(4601,"p"),e(4602,'T\xEDtulo da sess\xE3o "Densidade" no Gerenciar Tabela'),t()()(),i(4603,"tr",19)(4604,"td",20)(4605,"div",21)(4606,"span",22),e(4607," draggable"),n(4608,"br"),t()()(),i(4609,"td",23)(4610,"code",38),e(4611,"string"),t()(),i(4612,"td",26)(4613,"em")(4614,"strong"),e(4615,"(opcional)"),t()(),i(4616,"p"),e(4617,'Label da op\xE7\xE3o "Draggable" na sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(4618,"tr",19)(4619,"td",20)(4620,"div",21)(4621,"span",22),e(4622," edit"),n(4623,"br"),t()()(),i(4624,"td",23)(4625,"code",38),e(4626,"string"),t()(),i(4627,"td",26)(4628,"em")(4629,"strong"),e(4630,"(opcional)"),t()(),i(4631,"p"),e(4632,"Label do bot\xE3o Editar"),t()()(),i(4633,"tr",19)(4634,"td",20)(4635,"div",21)(4636,"span",22),e(4637," editRow"),n(4638,"br"),t()()(),i(4639,"td",23)(4640,"code",38),e(4641,"string"),t()(),i(4642,"td",26)(4643,"em")(4644,"strong"),e(4645,"(opcional)"),t()(),i(4646,"p"),e(4647,"T\xEDtulo das a\xE7\xF5es quando Edi\xE7\xE3o em linha."),t()()(),i(4648,"tr",19)(4649,"td",20)(4650,"div",21)(4651,"span",22),e(4652," export"),n(4653,"br"),t()()(),i(4654,"td",23)(4655,"code",38),e(4656,"string"),t()(),i(4657,"td",26)(4658,"em")(4659,"strong"),e(4660,"(opcional)"),t()(),i(4661,"p"),e(4662,"Label do bot\xE3o Exportar"),t()()(),i(4663,"tr",19)(4664,"td",20)(4665,"div",21)(4666,"span",22),e(4667," exportExcel"),n(4668,"br"),t()()(),i(4669,"td",23)(4670,"code",38),e(4671,"string"),t()(),i(4672,"td",26)(4673,"em")(4674,"strong"),e(4675,"(opcional)"),t()(),i(4676,"p"),e(4677,"Label do bot\xE3o Exportar Excel"),t()()(),i(4678,"tr",19)(4679,"td",20)(4680,"div",21)(4681,"span",22),e(4682," exportPDF"),n(4683,"br"),t()()(),i(4684,"td",23)(4685,"code",38),e(4686,"string"),t()(),i(4687,"td",26)(4688,"em")(4689,"strong"),e(4690,"(opcional)"),t()(),i(4691,"p"),e(4692,"Label do bot\xE3o Exportar PDF"),t()()(),i(4693,"tr",19)(4694,"td",20)(4695,"div",21)(4696,"span",22),e(4697," extraCompact"),n(4698,"br"),t()()(),i(4699,"td",23)(4700,"code",38),e(4701,"string"),t()(),i(4702,"td",26)(4703,"em")(4704,"strong"),e(4705,"(opcional)"),t()(),i(4706,"p"),e(4707,"Label do radio de densidade Extra Compacto no Gerenciar Tabela"),t()()(),i(4708,"tr",19)(4709,"td",20)(4710,"div",21)(4711,"span",22),e(4712," filters"),n(4713,"br"),t()()(),i(4714,"td",23)(4715,"code",38),e(4716,"string"),t()(),i(4717,"td",26)(4718,"em")(4719,"strong"),e(4720,"(opcional)"),t()(),i(4721,"p"),e(4722,"Label do bot\xE3o Filtros"),t()()(),i(4723,"tr",19)(4724,"td",20)(4725,"div",21)(4726,"span",22),e(4727," fixed"),n(4728,"br"),t()()(),i(4729,"td",23)(4730,"code",38),e(4731,"string"),t()(),i(4732,"td",26)(4733,"em")(4734,"strong"),e(4735,"(opcional)"),t()(),i(4736,"p"),e(4737,'T\xEDtulo da sess\xE3o "Fixo" no Gerenciar Tabela'),t()()(),i(4738,"tr",19)(4739,"td",20)(4740,"div",21)(4741,"span",22),e(4742," gridRowActionsConfirmAddCancelButton"),n(4743,"br"),t()()(),i(4744,"td",23)(4745,"code",38),e(4746,"string"),t()(),i(4747,"td",26)(4748,"em")(4749,"strong"),e(4750,"(opcional)"),t()(),i(4751,"p"),e(4752,'Label do bot\xE3o "Cancelar" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(4753,"tr",19)(4754,"td",20)(4755,"div",21)(4756,"span",22),e(4757," gridRowActionsConfirmAddConfirmButton"),n(4758,"br"),t()()(),i(4759,"td",23)(4760,"code",38),e(4761,"string"),t()(),i(4762,"td",26)(4763,"em")(4764,"strong"),e(4765,"(opcional)"),t()(),i(4766,"p"),e(4767,'Label do bot\xE3o "Confirmar" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(4768,"tr",19)(4769,"td",20)(4770,"div",21)(4771,"span",22),e(4772," gridRowActionsConfirmAddTitle"),n(4773,"br"),t()()(),i(4774,"td",23)(4775,"code",38),e(4776,"string"),t()(),i(4777,"td",26)(4778,"em")(4779,"strong"),e(4780,"(opcional)"),t()(),i(4781,"p"),e(4782,'T\xEDtulo do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(4783,"tr",19)(4784,"td",20)(4785,"div",21)(4786,"span",22),e(4787," groupable"),n(4788,"br"),t()()(),i(4789,"td",23)(4790,"code",38),e(4791,"string"),t()(),i(4792,"td",26)(4793,"em")(4794,"strong"),e(4795,"(opcional)"),t()(),i(4796,"p"),e(4797,'Label da op\xE7\xE3o "Groupable" na sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(4798,"tr",19)(4799,"td",20)(4800,"div",21)(4801,"span",22),e(4802," groupableText"),n(4803,"br"),t()()(),i(4804,"td",23)(4805,"code",38),e(4806,"string"),t()(),i(4807,"td",26)(4808,"em")(4809,"strong"),e(4810,"(opcional)"),t()(),i(4811,"p"),e(4812,"Texto do cabe\xE7alho onde se deve soltar as colunas que devem ser agrupadas."),t()()(),i(4813,"tr",19)(4814,"td",20)(4815,"div",21)(4816,"span",22),e(4817," legendListOptions"),n(4818,"br"),t()()(),i(4819,"td",23)(4820,"code",38),e(4821,"string"),t()(),i(4822,"td",26)(4823,"em")(4824,"strong"),e(4825,"(opcional)"),t()(),i(4826,"p"),e(4827,'T\xEDtulo da sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(4828,"tr",19)(4829,"td",20)(4830,"div",21)(4831,"span",22),e(4832," loadMoreData"),n(4833,"br"),t()()(),i(4834,"td",23)(4835,"code",38),e(4836,"string"),t()(),i(4837,"td",26)(4838,"em")(4839,"strong"),e(4840,"(opcional)"),t()(),i(4841,"p"),e(4842,"Label do bot\xE3o Carregar mais resultados"),t()()(),i(4843,"tr",19)(4844,"td",20)(4845,"div",21)(4846,"span",22),e(4847," loadingData"),n(4848,"br"),t()()(),i(4849,"td",23)(4850,"code",38),e(4851,"string"),t()(),i(4852,"td",26)(4853,"em")(4854,"strong"),e(4855,"(opcional)"),t()(),i(4856,"p"),e(4857,"Texto do modal Carregando..."),t()()(),i(4858,"tr",19)(4859,"td",20)(4860,"div",21)(4861,"span",22),e(4862," manageTable"),n(4863,"br"),t()()(),i(4864,"td",23)(4865,"code",38),e(4866,"string"),t()(),i(4867,"td",26)(4868,"em")(4869,"strong"),e(4870,"(opcional)"),t()(),i(4871,"p"),e(4872,"Label do bot\xE3o Gerenciar Tabela"),t()()(),i(4873,"tr",19)(4874,"td",20)(4875,"div",21)(4876,"span",22),e(4877," moreActions"),n(4878,"br"),t()()(),i(4879,"td",23)(4880,"code",38),e(4881,"string"),t()(),i(4882,"td",26)(4883,"em")(4884,"strong"),e(4885,"(opcional)"),t()(),i(4886,"p"),e(4887,"Label do bot\xE3o Mais a\xE7\xF5es"),t()()(),i(4888,"tr",19)(4889,"td",20)(4890,"div",21)(4891,"span",22),e(4892," multipleItems"),n(4893,"br"),t()()(),i(4894,"td",23)(4895,"code",38),e(4896,"string"),t()(),i(4897,"td",26)(4898,"em")(4899,"strong"),e(4900,"(opcional)"),t()(),i(4901,"p"),e(4902,"Texto auxiliar ao selecionar muitos itens exibido nas a\xE7\xF5es em lote."),t()()(),i(4903,"tr",19)(4904,"td",20)(4905,"div",21)(4906,"span",22),e(4907," noColumns"),n(4908,"br"),t()()(),i(4909,"td",23)(4910,"code",38),e(4911,"string"),t()(),i(4912,"td",26)(4913,"em")(4914,"strong"),e(4915,"(opcional)"),t()(),i(4916,"p"),e(4917,"Mensagem exibida quando n\xE3o existem colunas definidas."),t()()(),i(4918,"tr",19)(4919,"td",20)(4920,"div",21)(4921,"span",22),e(4922," noData"),n(4923,"br"),t()()(),i(4924,"td",23)(4925,"code",38),e(4926,"string"),t()(),i(4927,"td",26)(4928,"em")(4929,"strong"),e(4930,"(opcional)"),t()(),i(4931,"p"),e(4932,"Mensagem exibida quando n\xE3o existem itens para serem exibidos."),t()()(),i(4933,"tr",19)(4934,"td",20)(4935,"div",21)(4936,"span",22),e(4937," noItem"),n(4938,"br"),t()()(),i(4939,"td",23)(4940,"code",38),e(4941,"string"),t()(),i(4942,"td",26)(4943,"em")(4944,"strong"),e(4945,"(opcional)"),t()(),i(4946,"p"),e(4947,"Mensagem exibida quando nenhum item est\xE1 selecionado."),t()()(),i(4948,"tr",19)(4949,"td",20)(4950,"div",21)(4951,"span",22),e(4952," oneItem"),n(4953,"br"),t()()(),i(4954,"td",23)(4955,"code",38),e(4956,"string"),t()(),i(4957,"td",26)(4958,"em")(4959,"strong"),e(4960,"(opcional)"),t()(),i(4961,"p"),e(4962,"Texto ao selecionar um \xFAnico item exibido nas a\xE7\xF5es em lote."),t()()(),i(4963,"tr",19)(4964,"td",20)(4965,"div",21)(4966,"span",22),e(4967," otherColumns"),n(4968,"br"),t()()(),i(4969,"td",23)(4970,"code",38),e(4971,"string"),t()(),i(4972,"td",26)(4973,"em")(4974,"strong"),e(4975,"(opcional)"),t()(),i(4976,"p"),e(4977,'T\xEDtulo da sess\xE3o "Outras colunas" no Gerenciar Tabela'),t()()(),i(4978,"tr",19)(4979,"td",20)(4980,"div",21)(4981,"span",22),e(4982," placeholderSearchInput"),n(4983,"br"),t()()(),i(4984,"td",23)(4985,"code",38),e(4986,"string"),t()(),i(4987,"td",26)(4988,"em")(4989,"strong"),e(4990,"(opcional)"),t()(),i(4991,"p"),e(4992,"Placeholder do campo Buscar na tabela"),t()()(),i(4993,"tr",19)(4994,"td",20)(4995,"div",21)(4996,"span",22),e(4997," restoreDefault"),n(4998,"br"),t()()(),i(4999,"td",23)(5e3,"code",38),e(5001,"string"),t()(),i(5002,"td",26)(5003,"em")(5004,"strong"),e(5005,"(opcional)"),t()(),i(5006,"p"),e(5007,'Label do bot\xE3o "Restaurar padr\xE3o" no Gerenciar Tabela'),t()()(),i(5008,"tr",19)(5009,"td",20)(5010,"div",21)(5011,"span",22),e(5012," resultsByPage"),n(5013,"br"),t()()(),i(5014,"td",23)(5015,"code",38),e(5016,"string"),t()(),i(5017,"td",26)(5018,"em")(5019,"strong"),e(5020,"(opcional)"),t()(),i(5021,"p"),e(5022,'Label "Resultados por p\xE1gina" no Gerenciar Tabela.'),t()()(),i(5023,"tr",19)(5024,"td",20)(5025,"div",21)(5026,"span",22),e(5027," save"),n(5028,"br"),t()()(),i(5029,"td",23)(5030,"code",38),e(5031,"string"),t()(),i(5032,"td",26)(5033,"em")(5034,"strong"),e(5035,"(opcional)"),t()(),i(5036,"p"),e(5037,"Label do bot\xE3o Salvar"),t()()(),i(5038,"tr",19)(5039,"td",20)(5040,"div",21)(5041,"span",22),e(5042," warningColumnsRequired"),n(5043,"br"),t()()(),i(5044,"td",23)(5045,"code",38),e(5046,"string"),t()(),i(5047,"td",26)(5048,"em")(5049,"strong"),e(5050,"(opcional)"),t()(),i(5051,"p"),e(5052,'Mensagem do modal "Exclus\xE3o dos dados inseridos".'),t()()()()(),i(5053,"po-accordion-item",133)(5054,"h4",9)(5055,"code"),e(5056,"ThfGridOptionPaging"),t()(),i(5057,"div",10)(5058,"p"),e(5059,"Interface para configura\xE7\xE3o das op\xE7\xF5es de pagina\xE7\xE3o ("),i(5060,"strong"),e(5061,"t-options-paging"),t(),e(5062,")."),t()(),i(5063,"h4",15),e(5064,"Propriedades"),t(),i(5065,"table",16)(5066,"tr",17)(5067,"th",18),e(5068,"Nome"),t(),i(5069,"th",18),e(5070,"Tipo"),t(),i(5071,"th",18),e(5072,"Descri\xE7\xE3o"),t()(),i(5073,"tr",19)(5074,"td",20)(5075,"div",21)(5076,"span",22),e(5077," label"),n(5078,"br"),t()()(),i(5079,"td",23)(5080,"code",38),e(5081,"string"),t()(),i(5082,"td",26)(5083,"p"),e(5084,"Label correspondente a quantidade de itens"),t()()(),i(5085,"tr",19)(5086,"td",20)(5087,"div",21)(5088,"span",22),e(5089," value"),n(5090,"br"),t()()(),i(5091,"td",23)(5092,"code",49),e(5093,"number"),t()(),i(5094,"td",26)(5095,"p"),e(5096,"Quantidade de itens por p\xE1gina"),t()()()()(),i(5097,"po-accordion-item",134)(5098,"h4",9)(5099,"code"),e(5100,"ThfGridOptions"),t()(),i(5101,"div",10)(5102,"p"),e(5103,"Interface para as propriedades que permitem personalizar dinamicamente o comportamento do componente."),t()(),i(5104,"h4",15),e(5105,"Propriedades"),t(),i(5106,"table",16)(5107,"tr",17)(5108,"th",18),e(5109,"Nome"),t(),i(5110,"th",18),e(5111,"Tipo"),t(),i(5112,"th",18),e(5113,"Descri\xE7\xE3o"),t()(),i(5114,"tr",19)(5115,"td",20)(5116,"div",21)(5117,"span",22),e(5118," actions"),n(5119,"br"),t()()(),i(5120,"td",23)(5121,"code",29),e(5122,"Array<ThfTableAction>"),t()(),i(5123,"td",26)(5124,"em")(5125,"strong"),e(5126,"(opcional)"),t()(),i(5127,"p"),e(5128,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar no grid atrav\xE9s de bot\xF5es."),t()()(),i(5129,"tr",19)(5130,"td",20)(5131,"div",21)(5132,"span",22),e(5133," columns"),n(5134,"br"),t()()(),i(5135,"td",23)(5136,"code",36),e(5137,"Array<ThfGridColumn>"),t()(),i(5138,"td",26)(5139,"em")(5140,"strong"),e(5141,"(opcional)"),t()(),i(5142,"p"),e(5143,`Lista das colunas usadas no grid e busca avan\xE7ada.
Caso precise alterar uma coluna que j\xE1 exista deve ser passado o atributo `),i(5144,"code"),e(5145,"property"),t(),e(5146," com o mesmo conte\xFAdo do original."),t()()(),i(5147,"tr",19)(5148,"td",20)(5149,"div",21)(5150,"span",22),e(5151," customActions"),n(5152,"br"),t()()(),i(5153,"td",23)(5154,"code",40),e(5155,"Array<PoDropdownAction>"),t()(),i(5156,"td",26)(5157,"em")(5158,"strong"),e(5159,"(opcional)"),t()(),i(5160,"p"),e(5161,"Lista de a\xE7\xF5es customizadas do grid que ser\xE3o incorporadas \xE0s a\xE7\xF5es informadas atrav\xE9s da propriedade "),i(5162,"code"),e(5163,"actions"),t(),e(5164,"."),t(),i(5165,"pre")(5166,"code",31),e(5167,`// Exemplo de uso:
[
 { label: 'Apply Discount', action: this.applyDiscount.bind(this) },
 { label: 'Details', action: this.details.bind(this) }
];`),t()()()()()(),i(5168,"po-accordion-item",135)(5169,"h4",9)(5170,"code"),e(5171,"ThfGridRowActions"),t()(),i(5172,"div",10)(5173,"p"),e(5174,"Interface para configura\xE7\xE3o da edi\xE7\xE3o flu\xEDda ("),i(5175,"strong"),e(5176,"t-grid-row-actions"),t(),e(5177,`).
Essas a\xE7\xF5es permitem manipular o comportamento de edi\xE7\xE3o, inser\xE7\xE3o e remo\xE7\xE3o de dados no grid.`),t()(),i(5178,"h4",15),e(5179,"Propriedades"),t(),i(5180,"table",16)(5181,"tr",17)(5182,"th",18),e(5183,"Nome"),t(),i(5184,"th",18),e(5185,"Tipo"),t(),i(5186,"th",18),e(5187,"Descri\xE7\xE3o"),t()(),i(5188,"tr",19)(5189,"td",20)(5190,"div",21)(5191,"span",22),e(5192," actionEdit"),n(5193,"br"),t()()(),i(5194,"td",23)(5195,"code",136),e(5196,"(param: any, mode: 'edit' "),t(),i(5197,"code",137),e(5198," 'include') => FormGroup "),t(),i(5199,"code",138),e(5200," Observable<FormGroup>"),t()(),i(5201,"td",26)(5202,"p"),e(5203,`Fun\xE7\xE3o respons\xE1vel por iniciar o modo de edi\xE7\xE3o ou inclus\xE3o de uma linha no grid.
O m\xE9todo recebe os dados da linha selecionada ou um objeto vazio no modo de inclus\xE3o.
Deve retornar um `),i(5204,"code"),e(5205,"FormGroup"),t(),e(5206," que ser\xE1 utilizado para controlar os valores das colunas edit\xE1veis."),t(),i(5207,"pre")(5208,"code",31),e(5209,`// Exemplo de uso:

actionEdit: (param, mode) => new FormGroup({
  name: new FormControl(param.name),
  age: new FormControl(param.age)
})`),t()(),i(5210,"p"),e(5211,"ou"),t(),i(5212,"pre")(5213,"code",31),e(5214,`actionEdit: (dataItem, mode) => {
return this.appService
 .listItems('https://po-sample-api.onrender.com/v1/heroes', { name: 'Robert Bruce Banner' })
  .pipe(
     map(items => {
       return new FormGroup({
         name: new FormControl(items.name),
         age: new FormControl(items.age)
       })
     }
   )
 }`),t()()()(),i(5215,"tr",19)(5216,"td",20)(5217,"div",21)(5218,"span",22),e(5219," afterRemove"),n(5220,"br"),t()()(),i(5221,"td",23)(5222,"code",139),e(5223,"(row: any) => void"),t()(),i(5224,"td",26)(5225,"em")(5226,"strong"),e(5227,"(opcional)"),t()(),i(5228,"p"),e(5229,`Fun\xE7\xE3o opcional executada ap\xF3s a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s a remo\xE7\xE3o de dados, como exibir notifica\xE7\xF5es.`),t()()(),i(5230,"tr",19)(5231,"td",20)(5232,"div",21)(5233,"span",22),e(5234," afterSave"),n(5235,"br"),t()()(),i(5236,"td",23)(5237,"code",139),e(5238,"(row: any) => void"),t()(),i(5239,"td",26)(5240,"em")(5241,"strong"),e(5242,"(opcional)"),t()(),i(5243,"p"),e(5244,`Fun\xE7\xE3o opcional executada ap\xF3s o salvamento de uma linha editada.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s a conclus\xE3o de uma edi\xE7\xE3o.`),t()()(),i(5245,"tr",19)(5246,"td",20)(5247,"div",21)(5248,"span",22),e(5249," afterUndoRemove"),n(5250,"br"),t()()(),i(5251,"td",23)(5252,"code",139),e(5253,"(row: any) => void"),t()(),i(5254,"td",26)(5255,"em")(5256,"strong"),e(5257,"(opcional)"),t()(),i(5258,"p"),e(5259,`Fun\xE7\xE3o opcional executada ap\xF3s desfazer a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s desfazer a remo\xE7\xE3o de dados, como exibir notifica\xE7\xF5es.`),t()()(),i(5260,"tr",19)(5261,"td",20)(5262,"div",21)(5263,"span",22),e(5264," beforeInsert"),n(5265,"br"),t()()(),i(5266,"td",23)(5267,"code",140),e(5268,"(row: any) => boolean "),t(),i(5269,"code",141),e(5270," Observable<boolean>"),t()(),i(5271,"td",26)(5272,"em")(5273,"strong"),e(5274,"(opcional)"),t()(),i(5275,"p"),e(5276,`Fun\xE7\xE3o opcional executada antes de inserir uma nova linha no grid.
Pode ser usada para validar ou modificar os dados antes da inclus\xE3o.`),t()()(),i(5277,"tr",19)(5278,"td",20)(5279,"div",21)(5280,"span",22),e(5281," beforeRemove"),n(5282,"br"),t()()(),i(5283,"td",23)(5284,"code",140),e(5285,"(row: any) => boolean "),t(),i(5286,"code",141),e(5287," Observable<boolean>"),t()(),i(5288,"td",26)(5289,"em")(5290,"strong"),e(5291,"(opcional)"),t()(),i(5292,"p"),e(5293,`Fun\xE7\xE3o opcional executada antes de remover uma linha do grid.
Pode ser usada para validar ou confirmar a remo\xE7\xE3o da linha.`),t()()(),i(5294,"tr",19)(5295,"td",20)(5296,"div",21)(5297,"span",22),e(5298," beforeSave"),n(5299,"br"),t()()(),i(5300,"td",23)(5301,"code",142),e(5302,"(updatedRow: any, originalRow: any) => boolean "),t(),i(5303,"code",141),e(5304," Observable<boolean>"),t()(),i(5305,"td",26)(5306,"em")(5307,"strong"),e(5308,"(opcional)"),t()(),i(5309,"p"),e(5310,`Fun\xE7\xE3o opcional executada antes de salvar as altera\xE7\xF5es de uma linha editada.
Pode ser usada para validar ou modificar os dados antes de confirmar a edi\xE7\xE3o.`),t()()(),i(5311,"tr",19)(5312,"td",20)(5313,"div",21)(5314,"span",22),e(5315," beforeUndoRemove"),n(5316,"br"),t()()(),i(5317,"td",23)(5318,"code",140),e(5319,"(row: any) => boolean "),t(),i(5320,"code",141),e(5321," Observable<boolean>"),t()(),i(5322,"td",26)(5323,"em")(5324,"strong"),e(5325,"(opcional)"),t()(),i(5326,"p"),e(5327,`Fun\xE7\xE3o opcional executada antes de desfazer a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para validar ou confirmar o desfazer da remo\xE7\xE3o da linha.`),t()()(),i(5328,"tr",19)(5329,"td",20)(5330,"div",21)(5331,"span",22),e(5332," change"),n(5333,"br"),t()()(),i(5334,"td",23)(5335,"code",143),e(5336,"(updatedRows: Array<any>) => void"),t()(),i(5337,"td",26)(5338,"em")(5339,"strong"),e(5340,"(opcional)"),t()(),i(5341,"p"),e(5342,`Fun\xE7\xE3o opcional que retorna a lista atualizada sempre que ocorre edi\xE7\xE3o, inclus\xE3o ou remo\xE7\xE3o.
Facilita o monitoramento das mudan\xE7as feitas, permitindo que se veja rapidamente o que foi alterado no grid.
Ser\xE1 disparado apenas durante a\xE7\xF5es de edi\xE7\xE3o flu\xEDda, sem compatibilidade com outros eventos.`),t()()(),i(5343,"tr",19)(5344,"td",20)(5345,"div",21)(5346,"span",22),e(5347," hiddenGrid"),n(5348,"br"),t()()(),i(5349,"td",23)(5350,"code",24),e(5351,"boolean"),t()(),i(5352,"td",26)(5353,"em")(5354,"strong"),e(5355,"(opcional)"),t()(),i(5356,"p"),e(5357,"Propriedade opcional utilizada para determinar se a grid deve ser ocultada quando n\xE3o houver registros."),t()()(),i(5358,"tr",19)(5359,"td",20)(5360,"div",21)(5361,"span",22),e(5362," noPermission"),n(5363,"br"),t()()(),i(5364,"td",23)(5365,"code",144),e(5366,"Array<ThfGridEditModeActionType>"),t()(),i(5367,"td",26)(5368,"em")(5369,"strong"),e(5370,"(opcional)"),t()(),i(5371,"p"),e(5372,`Propriedade opcional que permite remover e desabilitar as a\xE7\xF5es no grid.
Os valores permitidos no array s\xE3o definidos pelo enum `),i(5373,"strong"),e(5374,"ThfGridEditModeActionType"),t(),e(5375,":"),t(),i(5376,"pre")(5377,"code",31),e(5378,`// Exemplo de uso:

gridRowActions: ThfGridRowActions = {
 noPermission: [
   ThfGridEditModeActionType.Replace,
   ThfGridEditModeActionType.Add,
   ThfGridEditModeActionType.Remove] // Desabilita edi\xE7\xE3o, inclus\xE3o e remo\xE7\xE3o
  // outras a\xE7\xF5es...
};`),t()()()(),i(5379,"tr",19)(5380,"td",20)(5381,"div",21)(5382,"span",22),e(5383," title"),n(5384,"br"),t()()(),i(5385,"td",23)(5386,"code",38),e(5387,"string"),t()(),i(5388,"td",26)(5389,"em")(5390,"strong"),e(5391,"(opcional)"),t()(),i(5392,"p"),e(5393,"T\xEDtulo opcional que pode ser usado para exibir um cabe\xE7alho ou descri\xE7\xE3o na interface."),t()()(),i(5394,"tr",19)(5395,"td",20)(5396,"div",21)(5397,"span",22),e(5398," validateField"),n(5399,"br"),t()()(),i(5400,"td",23)(5401,"code",145),e(5402,"(updatedField: any, columnProperty: string) => boolean "),t(),i(5403,"code",141),e(5404," Observable<boolean>"),t()(),i(5405,"td",26)(5406,"em")(5407,"strong"),e(5408,"(opcional)"),t()(),i(5409,"p"),e(5410,`Fun\xE7\xE3o opcional executada quando algum campo \xE9 alterado.
Pode ser usada para validar ou modificar dados baseados no valor alterado.`),t(),i(5411,"pre")(5412,"code",31),e(5413,`// Exemplo de uso:

onValidate(updatedField, property) {

 if(property === 'pais') {
     this.myForm?.controls['capital'].setValue(null); // valor da capital modificado para nulo
     const valuePais = this.myForm.controls[property].value;
     const capital = this.columnWithItems.find(column => column.property === 'capital');
      if (valuePais === 'Brasil') {
         capital.editProperties.disabled = false;
         this.form?.controls['capital'].setValue('Brasilia'); // Modificado o valor do campo "capital" baseado no valor do campo "pais"
      } else if (valuePais === 'Portugal') {
          capital.editProperties.disabled = false;
          this.form?.controls['capital'].setValue('Lisboa');
      } else {
        capital.editProperties.disabled = true;
        this.form?.controls['capital'].setValue('');
     }

   return true;
 }
}`),t()()()()()()()(),T(5414,4),t(),i(5415,"po-tab",146),T(5416,5),i(5417,"po-container",5)(5418,"po-accordion",6)(5419,"po-accordion-item",147)(5420,"h4",9)(5421,"code"),e(5422,"ThfColumnSpacing"),t()(),i(5423,"h4",15),e(5424,"Propriedades"),t(),i(5425,"table",16)(5426,"tr",17)(5427,"th",18),e(5428,"Nome"),t(),i(5429,"th",18),e(5430,"Descri\xE7\xE3o"),t()(),i(5431,"tr",19)(5432,"td",20)(5433,"div",21)(5434,"span",22),e(5435," ExtraSmall"),n(5436,"br"),t()()(),i(5437,"td",26)(5438,"p"),e(5439,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 1rem (horizontal)."),t()()(),i(5440,"tr",19)(5441,"td",20)(5442,"div",21)(5443,"span",22),e(5444," Large"),n(5445,"br"),t()()(),i(5446,"td",26)(5447,"p"),e(5448,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()(),i(5449,"tr",19)(5450,"td",20)(5451,"div",21)(5452,"span",22),e(5453," Medium"),n(5454,"br"),t()()(),i(5455,"td",26)(5456,"p"),e(5457,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),i(5458,"tr",19)(5459,"td",20)(5460,"div",21)(5461,"span",22),e(5462," Small"),n(5463,"br"),t()()(),i(5464,"td",26)(5465,"p"),e(5466,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()()()(),i(5467,"po-accordion-item",148)(5468,"h4",9)(5469,"code"),e(5470,"ThfGridEditModeActionType"),t()(),i(5471,"h4",15),e(5472,"Propriedades"),t(),i(5473,"table",16)(5474,"tr",17)(5475,"th",18),e(5476,"Nome"),t(),i(5477,"th",18),e(5478,"Descri\xE7\xE3o"),t()(),i(5479,"tr",19)(5480,"td",20)(5481,"div",21)(5482,"span",22),e(5483," Add"),n(5484,"br"),t()()(),i(5485,"td",26)(5486,"p"),e(5487,"A\xE7\xE3o de inclus\xE3o"),t()()(),i(5488,"tr",19)(5489,"td",20)(5490,"div",21)(5491,"span",22),e(5492," Remove"),n(5493,"br"),t()()(),i(5494,"td",26)(5495,"p"),e(5496,"A\xE7\xE3o de remo\xE7\xE3o"),t()()(),i(5497,"tr",19)(5498,"td",20)(5499,"div",21)(5500,"span",22),e(5501," Replace"),n(5502,"br"),t()()(),i(5503,"td",26)(5504,"p"),e(5505,"A\xE7\xE3o de edi\xE7\xE3o"),t()()()()()()(),T(5506,6),t(),i(5507,"po-tab",149),T(5508,7),i(5509,"po-container",5)(5510,"po-accordion",6)(5511,"po-accordion-item",150)(5512,"h4",9)(5513,"code"),e(5514,"ThfGridCellTemplateDirective"),t()(),i(5515,"div",10)(5516,"p"),e(5517,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),i(5518,"p"),e(5519,"Em seu uso, deve-se apenas adicionar a diretiva "),i(5520,"strong"),e(5521,"t-grid-cell-template"),t(),e(5522," \xE0 tag "),i(5523,"code"),e(5524,"ng-template"),t(),e(5525,"."),t(),i(5526,"p"),e(5527,"Retorno:"),t(),i(5528,"ul")(5529,"li")(5530,"code"),e(5531,"column"),t(),e(5532,": conte\xFAdo da coluna corrente."),t(),i(5533,"li")(5534,"code"),e(5535,"row"),t(),e(5536,": conte\xFAdo da linha corrente"),t()(),i(5537,"p"),e(5538,"Modo de uso:"),t(),i(5539,"pre")(5540,"code"),e(5541,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com"
  >
    <ng-template t-grid-cell-template let-column="column" let-row="row">
     <div *ngIf="column.property === 'status' && row.status === 'CANCELED'">
       <h1 [style.background]="'red'">CANCELADA</h1>
       <span (click)="onClick()"><small>clique aqui</small></span>
     </div>
     <h1 *ngIf="column.property === 'status' && row.status === 'FINISHED'" [style.background]="'green'">FINALIZADA</h1>
     <h1 *ngIf="column.property === 'status' && row.status === 'OPENED'" [style.background]="'orange'">ABERTA</h1>
     <h1 *ngIf="column.property === 'status2'">Conte\xFAdo do status 2</h1>
     <h1 *ngIf="column.property === 'status3'">Conte\xFAdo do status 3</h1>
   </ng-template>
...`),t()(),i(5542,"blockquote")(5543,"p"),e(5544,"No exemplo acima, o usu\xE1rio tem como retorno "),i(5545,"code"),e(5546,"row"),t(),e(5547," e a "),i(5548,"code"),e(5549,"column"),t(),e(5550," corrente, neste caso ele tem total liberdade para manipular os objetos."),t()(),i(5551,"p"),e(5552,"Abaixo, a declara\xE7\xE3o dos dados de entrada do THF-GRID para o uso da directiva."),t(),i(5553,"pre")(5554,"code"),e(5555,`...
export class AppComponent {

   columns = [
      { property: 'code', label: 'ID' },
      { property: 'product', label: 'PRODUTO' },
      { property: 'status', label: 'STATUS', type: 'cellTemplate' },
      { property: 'status2', label: 'STATUS 2', type: 'cellTemplate' },
      { property: 'status3', label: 'STATUS 3', type: 'cellTemplate' }
   ];
}
...`),t()(),i(5556,"blockquote")(5557,"p"),e(5558,"Observa\xE7\xE3o: Sempre adicionar o "),i(5559,"strong"),e(5560,"type"),t(),e(5561," da coluna que deseja manipular com a directiva como "),i(5562,"code"),e(5563,"cellTemplate"),t()()()(),i(5564,"div",11)(5565,"h4",12),e(5566,"Seletor"),t(),i(5567,"pre",13),e(5568,`<[t-grid-cell-template] >
</[t-grid-cell-template]>
`),t()()(),i(5569,"po-accordion-item",151)(5570,"h4",9)(5571,"code"),e(5572,"ThfGridColumnTemplateDirective"),t()(),i(5573,"div",10)(5574,"p"),e(5575,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),i(5576,"p"),e(5577,"Em seu uso, deve-se utilizar como par\xE2metro de entrada o input "),i(5578,"strong"),e(5579,"[t-property]"),t(),e(5580,`, o qual \xE9 respons\xE1vel por informar ao THF-GRID qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),t(),i(5581,"p"),e(5582,"Retorno:"),t(),i(5583,"ul")(5584,"li"),e(5585,"value: valor referente ao conte\xFAdo da linha corrente."),t()(),i(5586,"p"),e(5587,"Modo de uso:"),t(),i(5588,"pre")(5589,"code",28),e(5590,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com">
  <ng-template t-grid-column-template [t-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</thf-grid>
...`),t()(),i(5591,"blockquote")(5592,"p"),e(5593,"No exemplo acima, todas as c\xE9lulas correspondentes a coluna "),i(5594,"code"),e(5595,"status"),t(),e(5596," ter\xE3o o conte\xFAdo alterado para "),i(5597,"code"),e(5598,"<h1>${value}</h1>"),t(),e(5599,`,
sendo que `),i(5600,"code"),e(5601,"value"),t(),e(5602," refere-se ao conte\xFAdo da linha."),t()(),i(5603,"pre")(5604,"code",28),e(5605,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com">
  <ng-template  t-grid-column-template [t-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</thf-grid>
...`),t()(),i(5606,"blockquote")(5607,"p"),e(5608,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),t()(),i(5609,"p"),e(5610,"Abaixo, a declara\xE7\xE3o dos dados de entrada do THF-GRID para o uso da directiva."),t(),i(5611,"pre")(5612,"code",31),e(5613,`...
export class AppComponent {

   targetProperty= 'status';

   columns = [
     { property: 'code', label: 'ID' },
     { property: 'product', label: 'PRODUTO' },
     { property: 'status', label: 'STATUS', type: 'columnTemplate' }
   ];
}
...`),t()(),i(5614,"blockquote")(5615,"p"),e(5616,"Observa\xE7\xE3o: Sempre adicionar o "),i(5617,"strong"),e(5618,"type"),t(),e(5619," da coluna que deseja manipular com a directiva como "),i(5620,"code"),e(5621,"columnTemplate"),t()()()(),i(5622,"div",11)(5623,"h4",12),e(5624,"Seletor"),t(),i(5625,"pre",13),e(5626,`<[t-grid-column-template] >
</[t-grid-column-template]>
`),t()()()()(),T(5627,8),t(),i(5628,"po-tab",152)(5629,"po-container",5),T(5630,9),i(5631,"h3",153),e(5632,"Tokens customiz\xE1veis"),t(),i(5633,"p"),e(5634,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(5635,"blockquote")(5636,"p"),e(5637,"Para maiores informa\xE7\xF5es, acesse o guia "),i(5638,"a",154),e(5639,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(5640,"."),t()(),i(5641,"table")(5642,"thead")(5643,"tr")(5644,"th"),e(5645,"Propriedade"),t(),i(5646,"th"),e(5647,"Descri\xE7\xE3o"),t(),i(5648,"th"),e(5649,"Valor Padr\xE3o"),t()()(),i(5650,"tbody")(5651,"tr")(5652,"td")(5653,"strong"),e(5654,"Default Values"),t()(),n(5655,"td")(5656,"td"),t(),i(5657,"tr")(5658,"td")(5659,"code"),e(5660,"--font-family"),t()(),i(5661,"td"),e(5662,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(5663,"td")(5664,"code"),e(5665,"var(--font-family-theme)"),t()()(),i(5666,"tr")(5667,"td")(5668,"code"),e(5669,"--background-color"),t()(),i(5670,"td"),e(5671,"Cor de background"),t(),i(5672,"td")(5673,"code"),e(5674,"var(--color-neutral-light-00)"),t()()(),i(5675,"tr")(5676,"td")(5677,"code"),e(5678,"--color"),t()(),i(5679,"td"),e(5680,"Cor principal da table"),t(),i(5681,"td")(5682,"code"),e(5683,"var(--color-neutral-dark-95)"),t()()(),i(5684,"tr")(5685,"td")(5686,"code"),e(5687,"--background-striped-color"),t()(),i(5688,"td"),e(5689,"Cor do background quando striped"),t(),i(5690,"td")(5691,"code"),e(5692,"var(--color-neutral-light-05)"),t()()(),i(5693,"tr")(5694,"td")(5695,"code"),e(5696,"--color-line"),t()(),i(5697,"td"),e(5698,"Cor das linhas"),t(),i(5699,"td")(5700,"code"),e(5701,"var(--color-neutral-mid-40)"),t()()(),i(5702,"tr")(5703,"td")(5704,"strong"),e(5705,"Hover"),t()(),n(5706,"td")(5707,"td"),t(),i(5708,"tr")(5709,"td")(5710,"code"),e(5711,"--color-hover"),t()(),i(5712,"td"),e(5713,"Cor principal no estado hover"),t(),i(5714,"td")(5715,"code"),e(5716,"var(--color-action-hover)"),t()()(),i(5717,"tr")(5718,"td")(5719,"code"),e(5720,"--background-color-hover"),t()(),i(5721,"td"),e(5722,"Cor de background no estado hover"),t(),i(5723,"td")(5724,"code"),e(5725,"var(--color-brand-01-lighter)"),t()()(),i(5726,"tr")(5727,"td")(5728,"strong"),e(5729,"Focused"),t()(),n(5730,"td")(5731,"td"),t(),i(5732,"tr")(5733,"td")(5734,"code"),e(5735,"--outline-color-focused"),t()(),i(5736,"td"),e(5737,"Cor do outline do estado de focus"),t(),i(5738,"td")(5739,"code"),e(5740,"var(--color-action-focus)"),t()()(),i(5741,"tr")(5742,"td")(5743,"strong"),e(5744,"Disabled"),t()(),n(5745,"td")(5746,"td"),t(),i(5747,"tr")(5748,"td")(5749,"code"),e(5750,"--color-disabled"),t()(),i(5751,"td"),e(5752,"Cor principal no estado disabled"),t(),i(5753,"td")(5754,"code"),e(5755,"var(--color-neutral-mid-40)"),t()()(),i(5756,"tr")(5757,"td")(5758,"strong"),e(5759,"Headline"),t()(),n(5760,"td")(5761,"td"),t(),i(5762,"tr")(5763,"td")(5764,"code"),e(5765,"--background-color-headline"),t()(),i(5766,"td"),e(5767,"Cor do cabe\xE7alho"),t(),i(5768,"td")(5769,"code"),e(5770,"var(--color-neutral-light-10)"),t()()(),i(5771,"tr")(5772,"td")(5773,"code"),e(5774,"--font-weight-headline"),t()(),i(5775,"td"),e(5776,"Peso da fonte do cabe\xE7alho"),t(),i(5777,"td")(5778,"code"),e(5779,"var(--font-weight-bold)"),t()()(),i(5780,"tr")(5781,"td")(5782,"strong"),e(5783,"Selected"),t()(),n(5784,"td")(5785,"td"),t(),i(5786,"tr")(5787,"td")(5788,"code"),e(5789,"--background-color-selected"),t()(),i(5790,"td"),e(5791,"Cor de background no estado de selecionado"),t(),i(5792,"td")(5793,"code"),e(5794,"var(--color-brand-01-lightest)"),t()()(),i(5795,"tr")(5796,"td")(5797,"code"),e(5798,"--color-actived"),t()(),i(5799,"td"),e(5800,"Cor do texto no estado de selecionado"),t(),i(5801,"td")(5802,"code"),e(5803,"var(--color-neutral-dark-90)"),t()()(),i(5804,"tr")(5805,"td")(5806,"strong"),e(5807,"Pressed"),t()(),n(5808,"td")(5809,"td"),t(),i(5810,"tr")(5811,"td")(5812,"code"),e(5813,"--background-color-actived"),t()(),i(5814,"td"),e(5815,"Cor de background da a\xE7\xE3o quando pressionada"),t(),i(5816,"td")(5817,"code"),e(5818,"var(--color-brand-01-light)"),t()()(),i(5819,"tr"),n(5820,"td")(5821,"td")(5822,"td"),t(),i(5823,"tr")(5824,"td")(5825,"strong"),e(5826,"Toolbar Title"),t()(),n(5827,"td")(5828,"td"),t(),i(5829,"tr")(5830,"td")(5831,"code"),e(5832,"--font-size-toolbar-title"),t()(),i(5833,"td"),e(5834,"Tamanho da fonte do Titulo da toolbar da Grid"),t(),i(5835,"td"),e(5836,"1.125rem"),t()(),i(5837,"tr")(5838,"td")(5839,"code"),e(5840,"--letter-spacing-toolbar-title"),t()(),i(5841,"td"),e(5842,"Espa\xE7amento entre letras do Titulo da toolbar da Grid"),t(),i(5843,"td"),e(5844,"0.017rem"),t()()()()(),T(5845,10),t(),i(5846,"po-tab",155),T(5847,11),t()()())},dependencies:[_,H,y,X,z],encapsulation:2});let d=l;return d})();var jt=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Vt=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],mt=(()=>{let l=class l{constructor(r){this.el=r}ngAfterViewInit(){this.accordions.forEach(r=>{setTimeout(()=>{r.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(r){setTimeout(()=>{let a=this.tabs.tabs.find(o=>o.elementRef.nativeElement.className===`docs-tab-${r}`);if(a){let o=a.elementRef.nativeElement;o.textContent.trim()!==""||o.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(x=>{let D=x.querySelector(".po-tab-button-label");D&&D?.textContent?.trim().toLowerCase()===r&&x.remove()}),o.remove(),a.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(x=>!x.hide)))}},100)}};l.\u0275fac=function(a){return new(a||l)(R(W))},l.\u0275cmp=b({type:l,selectors:[["api-thf-lookup"]],viewQuery:function(a,o){if(a&1&&(A(z,5),A(_,5)),a&2){let s;q(s=k())&&(o.tabs=s.first),q(s=k())&&(o.accordions=s)}},standalone:!1,ngContentSelectors:Vt,decls:1965,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","Array<ThfLookupColumn>"],[1,"language-html"],[1,"language-typescript"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","((item:","any)","=>","string)"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<ThfLookupFilterSearchSelect>"],["pan","",1,"docs-api-property-type","ThfLookupFilter"],["href","https://po-ui.io/guides/api"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","Array<ThfLookupKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupLiterals"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["p-label","Interfaces"],["p-label","ThfLookupColumn"],["p-label","ThfLookupFilterSearchSelect"],["p-label","ThfLookupFilter"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","Array<any>"],["p-label","ThfLookupFilteredItemsParams"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","number"],["p-label","ThfLookupKeysLabel"],["p-label","ThfLookupLiterals"],["p-label","ThfLookupResponseApi"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(a,o){a&1&&(U(jt),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),T(4),t(),i(5,"po-tab",4),T(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfLookupComponent"),t()(),i(16,"div",10)(17,"p"),e(18,`Componente utilizado para abrir um modal de busca com um grid que lista dados de um servi\xE7o.
Neste modal \xE9 poss\xEDvel buscar e selecionar um ou mais registros que ser\xE3o enviados para o campo.
O `),i(19,"code"),e(20,"thf-lookup"),t(),e(21," permite que o usu\xE1rio digite um valor e pressione a tecla TAB para buscar um registro."),t(),i(22,"p"),e(23,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(24,"code"),e(25,"THF-Lookup"),t(),e(26,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(27,"code"),e(28,"import { ThfLookupComponent } from '@totvs/thf-components';"),t()()(),i(29,"div",11)(30,"h4",12),e(31,"Seletor"),t(),i(32,"pre",13),e(33,`<thf-lookup
  t-additional-help="EventEmitter"
  t-additional-help-tooltip="string"
  t-append-in-body="boolean"
  t-auto-focus="boolean"
  t-auto-height="boolean"
  (t-change)="EventEmitter"
  (t-change-model)="EventEmitter"
  t-clean="boolean"
  t-columns="Array<ThfLookupColumn>"
  t-size="string"
  t-disabled="boolean"
  t-error-limit="boolean"
  t-field-error-message="string"
  t-field-format="Array<string> | ((item: any) => string)"
  t-field-label="string"
  t-field-value="string"
  t-filter-params="any"
  t-filter-search-select="Array<ThfLookupFilterSearchSelect>"
  t-filter-service="ThfLookupFilter | string"
  t-help="string"
  (t-focus)="EventEmitter"
  t-key-last-search="string"
  (t-keydown)="EventEmitter"
  t-keys-label="Array<ThfLookupKeysLabel>"
  t-label="string"
  t-literals="ThfLookupLiterals"
  t-multiple="boolean"
  t-no-autocomplete="boolean"
  (t-error)="EventEmitter"
  t-optional="boolean"
  t-placeholder="string"
  t-required="boolean"
  (t-selected)="EventEmitter"
  t-show-required="boolean"
  t-modal-size="string" >
</thf-lookup>
`),t()()(),i(34,"po-accordion-item",14)(35,"h4",15),e(36,"Propriedades"),t(),i(37,"table",16)(38,"tr",17)(39,"th",18),e(40,"Nome"),t(),i(41,"th",18),e(42,"Tipo"),t(),i(43,"th",18),e(44,"Padr\xE3o"),t(),i(45,"th",18),e(46,"Descri\xE7\xE3o"),t()(),i(47,"tr",19)(48,"td",20)(49,"div",21)(50,"span",22),e(51,"t-additional-help"),n(52,"br"),t()()(),i(53,"td",23)(54,"code",24),e(55,"EventEmitter"),t()(),i(56,"td",25),e(57,"-"),t(),i(58,"td",26)(59,"em")(60,"strong"),e(61,"(opcional)"),t()(),i(62,"p"),e(63,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),i(64,"code"),e(65,"t-help"),t(),e(66,"."),t()()(),i(67,"tr",19)(68,"td",20)(69,"div",21)(70,"span",22),e(71,"t-additional-help-tooltip"),n(72,"br"),t()()(),i(73,"td",23)(74,"code",27),e(75,"string"),t()(),i(76,"td",25),e(77,"-"),t(),i(78,"td",26)(79,"em")(80,"strong"),e(81,"(opcional)"),t()(),i(82,"p"),e(83,"Exibe um \xEDcone de ajuda adicional ao "),i(84,"code"),e(85,"t-help"),t(),e(86,`, com o texto desta propriedade no tooltip.
Se o evento `),i(87,"code"),e(88,"t-additional-help"),t(),e(89,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),i(90,"strong"),e(91,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(92,"blockquote")(93,"p"),e(94,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),i(95,"tr",19)(96,"td",20)(97,"div",21)(98,"span",22),e(99," t-append-in-body"),n(100,"br"),t()()(),i(101,"td",23)(102,"code",28),e(103,"boolean"),t()(),i(104,"td",25)(105,"p")(106,"code"),e(107,"false"),t()()(),i(108,"td",26)(109,"em")(110,"strong"),e(111,"(opcional)"),t()(),i(112,"p"),e(113,"Define que o "),i(114,"code"),e(115,"listbox"),t(),e(116," e/ou tooltip ("),i(117,"code"),e(118,"t-additional-help-tooltip"),t(),e(119," e/ou "),i(120,"code"),e(121,"t-error-limit"),t(),e(122,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(123,"blockquote")(124,"p"),e(125,"Quando utilizado com "),i(126,"code"),e(127,"t-additional-help-tooltip"),t(),e(128,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(129,"tr",19)(130,"td",20)(131,"div",21)(132,"span",22),e(133,"t-auto-focus"),n(134,"br"),t()()(),i(135,"td",23)(136,"code",28),e(137,"boolean"),t()(),i(138,"td",25)(139,"p")(140,"code"),e(141,"false"),t()()(),i(142,"td",26)(143,"em")(144,"strong"),e(145,"(opcional)"),t()(),i(146,"p"),e(147,"Aplica foco no elemento ao ser iniciado."),t(),i(148,"blockquote")(149,"p"),e(150,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(151,"tr",19)(152,"td",20)(153,"div",21)(154,"span",22),e(155,"t-auto-height"),n(156,"br"),t()()(),i(157,"td",23)(158,"code",28),e(159,"boolean"),t()(),i(160,"td",25)(161,"p")(162,"code"),e(163,"false"),t()()(),i(164,"td",26)(165,"em")(166,"strong"),e(167,"(opcional)"),t()(),i(168,"p"),e(169,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, com altura m\xEDnima fixa e altura m\xE1xima de acordo
com o n\xFAmero de itens selecionados, mantendo-os sempre vis\xEDveis.`),t()()(),i(170,"tr",19)(171,"td",20)(172,"div",29)(173,"span",30),e(174," (t-change)"),n(175,"br"),t()()(),i(176,"td",23)(177,"code",24),e(178,"EventEmitter"),t()(),i(179,"td",25),e(180,"-"),t(),i(181,"td",26)(182,"em")(183,"strong"),e(184,"(opcional)"),t()(),i(185,"p"),e(186,"Evento disparado quando ocorre mudan\xE7as de valor realizadas pelo usu\xE1rio."),t()()(),i(187,"tr",19)(188,"td",20)(189,"div",29)(190,"span",30),e(191," (t-change-model)"),n(192,"br"),t()()(),i(193,"td",23)(194,"code",24),e(195,"EventEmitter"),t()(),i(196,"td",25),e(197,"-"),t(),i(198,"td",26)(199,"em")(200,"strong"),e(201,"(opcional)"),t()(),i(202,"p"),e(203,"Evento disparado quando ocorre mudan\xE7as de valor no campo realizados pelo usu\xE1rio ou altera\xE7\xF5es de valores de forma din\xE2mica."),t()()(),i(204,"tr",19)(205,"td",20)(206,"div",21)(207,"span",22),e(208,"t-clean"),n(209,"br"),t()()(),i(210,"td",23)(211,"code",28),e(212,"boolean"),t()(),i(213,"td",25)(214,"p")(215,"code"),e(216,"false"),t()()(),i(217,"td",26)(218,"em")(219,"strong"),e(220,"(opcional)"),t()(),i(221,"p"),e(222,"Exibe um \xEDcone que permite limpar o campo. No caso de sele\xE7\xE3o m\xFAltipla, esta op\xE7\xE3o sempre ser\xE1 "),i(223,"code"),e(224,"true"),t(),e(225,"."),t()()(),i(226,"tr",19)(227,"td",20)(228,"div",21)(229,"span",22),e(230,"t-columns"),n(231,"br"),t()()(),i(232,"td",23)(233,"code",31),e(234,"Array<ThfLookupColumn>"),t()(),i(235,"td",25),e(236,"-"),t(),i(237,"td",26)(238,"em")(239,"strong"),e(240,"(opcional)"),t()(),i(241,"p"),e(242,"Permite definir e configurar as colunas do grid dentro do modal de busca avan\xE7ada por meio da interface "),i(243,"strong"),e(244,"ThfLookupColumn"),t(),e(245,"."),t(),i(246,"pre")(247,"code",32),e(248,`// Exemplo de uso:
<thf-lookup
 ...
 [t-columns]="columns"
></thf-lookup>`),t()(),i(249,"pre")(250,"code",33),e(251,`columns: Array<ThfLookupColumn> = [
 { property: 'id', label: 'C\xF3digo' },
 { property: 'name', label: 'Nome' },
}`),t()()()(),i(252,"tr",19)(253,"td",20)(254,"div",21)(255,"span",22),e(256," t-size"),n(257,"br"),t()()(),i(258,"td",23)(259,"code",27),e(260,"string"),t()(),i(261,"td",25)(262,"p")(263,"code"),e(264,"medium"),t()()(),i(265,"td",26)(266,"em")(267,"strong"),e(268,"(opcional)"),t()(),i(269,"p"),e(270,"Define o tamanho do componente:"),t(),i(271,"ul")(272,"li")(273,"code"),e(274,"small"),t(),e(275,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(276,"li")(277,"code"),e(278,"medium"),t(),e(279,": altura do input como 44px."),t()(),i(280,"blockquote")(281,"p"),e(282,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(283,"code"),e(284,"medium"),t(),e(285,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(286,"a",34),e(287,"po-theme"),t(),e(288,"."),t()()()(),i(289,"tr",19)(290,"td",20)(291,"div",21)(292,"span",22),e(293,"t-disabled"),n(294,"br"),t()()(),i(295,"td",23)(296,"code",28),e(297,"boolean"),t()(),i(298,"td",25)(299,"p")(300,"code"),e(301,"false"),t()()(),i(302,"td",26)(303,"em")(304,"strong"),e(305,"(opcional)"),t()(),i(306,"p"),e(307,"Desabilita o campo."),t()()(),i(308,"tr",19)(309,"td",20)(310,"div",21)(311,"span",22),e(312,"t-error-limit"),n(313,"br"),t()()(),i(314,"td",23)(315,"code",28),e(316,"boolean"),t()(),i(317,"td",25)(318,"p")(319,"code"),e(320,"false"),t()()(),i(321,"td",26)(322,"em")(323,"strong"),e(324,"(opcional)"),t()(),i(325,"p"),e(326,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(327,"blockquote")(328,"p"),e(329,"Caso essa propriedade seja definida como "),i(330,"code"),e(331,"true"),t(),e(332,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(333,"tr",19)(334,"td",20)(335,"div",21)(336,"span",22),e(337,"t-field-error-message"),n(338,"br"),t()()(),i(339,"td",23)(340,"code",27),e(341,"string"),t()(),i(342,"td",25),e(343,"-"),t(),i(344,"td",26)(345,"em")(346,"strong"),e(347,"(opcional)"),t()(),i(348,"p"),e(349,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),i(350,"blockquote")(351,"p"),e(352,"Necess\xE1rio que a propriedade "),i(353,"code"),e(354,"t-required"),t(),e(355," esteja habilitada."),t()()()(),i(356,"tr",19)(357,"td",20)(358,"div",21)(359,"span",22),e(360," t-field-format"),n(361,"br"),t()()(),i(362,"td",23)(363,"code",35),e(364,"Array<string> "),t(),i(365,"code",36),e(366," ((item: any) => string)"),t()(),i(367,"td",25),e(368,"-"),t(),i(369,"td",26)(370,"em")(371,"strong"),e(372,"(opcional)"),t()(),i(373,"p"),e(374,"Formato de exibi\xE7\xE3o do campo."),t(),i(375,"p"),e(376,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(377,"em"),e(378,"string"),t(),e(379," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(380,"pre")(381,"code",33),e(382,"fieldFormat(obj) {\n  return `${obj.id} (${obj.name})`;\n}"),t()(),i(383,"pre")(384,"code",32),e(385,`<thf-lookup
  ...
  [t-field-format]="fieldFormat"
  ...
></thf-lookup>
<!-- Apresenta\xE7\xE3o no campo: 123 (Goku)  -->`),t()(),i(386,"p"),e(387,`Ou pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo.
Nessa caso, ser\xE1 utilizado `),i(388,"code"),e(389,"-"),t(),e(390,` como separador.
Por exemplo:`),t(),i(391,"pre")(392,"code",32),e(393,`<thf-lookup
  ...
  [t-field-format]="['id','nickname']"
  ...
></thf-lookup>
<!-- Apresenta\xE7\xE3o no campo: 123 - Goku  -->`),t()(),i(394,"blockquote")(395,"p"),e(396,"Esta propriedade sobrep\xF5e a "),i(397,"code"),e(398,"t-keys-label"),t(),e(399," como formata\xE7\xE3o do campo."),t()()()(),i(400,"tr",19)(401,"td",20)(402,"div",21)(403,"span",22),e(404,"t-field-label"),n(405,"br"),t()()(),i(406,"td",23)(407,"code",27),e(408,"string"),t()(),i(409,"td",25),e(410,"-"),t(),i(411,"td",26)(412,"p"),e(413,`Define a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e do filtro selecionado dentro do modal de busca avan\xE7ada.
Propriedade obrigat\xF3ria.`),t()()(),i(414,"tr",19)(415,"td",20)(416,"div",21)(417,"span",22),e(418,"t-field-value"),n(419,"br"),t()()(),i(420,"td",23)(421,"code",27),e(422,"string"),t()(),i(423,"td",25),e(424,"-"),t(),i(425,"td",26)(426,"p"),e(427,"Define a coluna que ser\xE1 utilizada como valor do campo. Propriedade obrigat\xF3ria."),t(),i(428,"blockquote")(429,"p"),e(430,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(431,"tr",19)(432,"td",20)(433,"div",21)(434,"span",22),e(435,"t-filter-params"),n(436,"br"),t()()(),i(437,"td",23)(438,"code",37),e(439,"any"),t()(),i(440,"td",25),e(441,"-"),t(),i(442,"td",26)(443,"em")(444,"strong"),e(445,"(opcional)"),t()(),i(446,"p"),e(447,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou ao servi\xE7o que implementa a interface "),i(448,"strong"),e(449,"ThfLookupFilter"),t(),e(450,"."),t()()(),i(451,"tr",19)(452,"td",20)(453,"div",21)(454,"span",22),e(455,"t-filter-search-select"),n(456,"br"),t()()(),i(457,"td",23)(458,"code",38),e(459,"Array<ThfLookupFilterSearchSelect>"),t()(),i(460,"td",25),e(461,"-"),t(),i(462,"td",26)(463,"em")(464,"strong"),e(465,"(opcional)"),t()(),i(466,"p"),e(467,`Permite definir quais colunas ser\xE3o op\xE7\xF5es de filtro dentro do modal de busca avan\xE7ada. Deve implementar a interface
`),i(468,"strong"),e(469,"ThfLookupFilterSearchSelect"),t(),e(470,"."),t(),i(471,"pre")(472,"code",32),e(473,`// Exemplo de uso:
<thf-lookup
 ...
 [t-filter-search-select]="filterSelect"
></thf-lookup>`),t()(),i(474,"pre")(475,"code",33),e(476,`filterSelect: Array<ThfLookupFilterSearchSelect> = [
 { label: 'Nome', value: 'name' },
 { label: 'Nickname', value: 'nickname' },
 { label: 'Email', value: 'email' }
];`),t()()()(),i(477,"tr",19)(478,"td",20)(479,"div",21)(480,"span",22),e(481,"t-filter-service"),n(482,"br"),t()()(),i(483,"td",23)(484,"code",39),e(485,"ThfLookupFilter "),t(),i(486,"code",27),e(487," string"),t()(),i(488,"td",25),e(489,"-"),t(),i(490,"td",26)(491,"p"),e(492,`Respons\xE1vel por buscar os dados exibidos no grid dentro do modal de busca avan\xE7ada. Aceita um servi\xE7o que implementa a interface
`),i(493,"strong"),e(494,"ThfLookupFilter"),t(),e(495," ou uma URL."),t(),i(496,"p"),e(497,`Quando uma URL \xE9 definida:
Se houver filtro, \xE9 adicionado o par\xE2metro `),i(498,"code"),e(499,"filter"),t(),e(500," com o valor da busca:"),t(),i(501,"pre")(502,"code"),e(503,"url + ?page=1&pageSize=20&filter=Peter"),t()(),i(504,"p"),e(505,"Se houver ordena\xE7\xE3o, \xE9 adicionado o par\xE2metro "),i(506,"code"),e(507,"order"),t(),e(508,` com o valor da coluna.
Exemplo de busca com ordena\xE7\xE3o decrescente:`),t(),i(509,"pre")(510,"code"),e(511,"url + ?page=1&pageSize=20&filter=Peter&order=-name"),t()(),i(512,"p"),e(513,"Exemplo de busca com ordena\xE7\xE3o crescente:"),t(),i(514,"pre")(515,"code"),e(516,"url + ?page=1&pageSize=20&filter=Peter&order=name"),t()(),i(517,"p"),e(518,"Se definido "),i(519,"strong"),e(520,"t-filter-params"),t(),e(521,`, seu valor tamb\xE9m ser\xE1 concatenado.
Exemplo com `),i(522,"code"),e(523,"{ age: 23 }"),t(),e(524,":"),t(),i(525,"pre")(526,"code"),e(527,"url + ?page=1&pageSize=20&age=23&filter=Peter"),t()(),i(528,"p"),e(529,`Se o campo precisar iniciar com valores, os registros s\xE3o buscados das seguintes formas:
Exemplo com a sele\xE7\xE3o \xFAnica:`),t(),i(530,"pre")(531,"code"),e(532,`model = 1234;

GET url/1234`),t()(),i(533,"p"),e(534,"Exemplo com a sele\xE7\xE3o m\xFAltipla:"),t(),i(535,"pre")(536,"code"),e(537,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678`),t()(),i(538,"blockquote")(539,"p"),e(540,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(541,"a",40),e(542,"API do PO UI"),t(),e(543,` e utilizar
os valores definidos nas propriedades `),i(544,"strong"),e(545,"t-field-label"),t(),e(546," e "),i(547,"strong"),e(548,"t-field-value"),t(),e(549," para a constru\xE7\xE3o do "),i(550,"strong"),e(551,"thf-lookup"),t(),e(552,"."),t()(),i(553,"p"),e(554,"Caso a busca tenha ocorrido pressionando a tecla "),i(555,"em"),e(556,"TAB"),t(),e(557,`, o filtro ser\xE1 codificado atrav\xE9s da fun\xE7\xE3o
`),i(558,"a",41),e(559,"encodeURIComponent"),t(),e(560,`, e portanto concatenado
na URL da seguinte forma:`),t(),i(561,"pre")(562,"code"),e(563,"url/valor%20que%20se%20deseja%20filtrar"),t()(),i(564,"blockquote")(565,"p"),e(566,"Caso utilize um servi\xE7o "),i(567,"strong"),e(568,"ThfLookupFilter"),t(),e(569,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(570,"tr",19)(571,"td",20)(572,"div",21)(573,"span",22),e(574,"t-help"),n(575,"br"),t()()(),i(576,"td",23)(577,"code",27),e(578,"string"),t()(),i(579,"td",25),e(580,"-"),t(),i(581,"td",26)(582,"em")(583,"strong"),e(584,"(opcional)"),t()(),i(585,"p"),e(586,"Texto de apoio do campo."),t()()(),i(587,"tr",19)(588,"td",20)(589,"div",29)(590,"span",30),e(591," (t-focus)"),n(592,"br"),t()()(),i(593,"td",23)(594,"code",24),e(595,"EventEmitter"),t()(),i(596,"td",25),e(597,"-"),t(),i(598,"td",26)(599,"em")(600,"strong"),e(601,"(opcional)"),t()(),i(602,"p"),e(603,"Evento emitido quando o campo de entrada (input) recebe foco."),t(),i(604,"p"),e(605,"Esse evento pode ser utilizado para realizar a\xE7\xF5es espec\xEDficas no momento em que o foco \xE9 aplicado ao input."),t()()(),i(606,"tr",19)(607,"td",20)(608,"div",21)(609,"span",22),e(610,"t-key-last-search"),n(611,"br"),t()()(),i(612,"td",23)(613,"code",27),e(614,"string"),t()(),i(615,"td",25),e(616,"-"),t(),i(617,"td",26)(618,"em")(619,"strong"),e(620,"(opcional)"),t()(),i(621,"p"),e(622,"Define um identificador \xFAnico para o campo. Marca\xE7\xE3o necess\xE1ria quando h\xE1 hist\xF3rico de \xFAltimas pesquisas."),t()()(),i(623,"tr",19)(624,"td",20)(625,"div",29)(626,"span",30),e(627," (t-keydown)"),n(628,"br"),t()()(),i(629,"td",23)(630,"code",24),e(631,"EventEmitter"),t()(),i(632,"td",25),e(633,"-"),t(),i(634,"td",26)(635,"em")(636,"strong"),e(637,"(opcional)"),t()(),i(638,"p"),e(639,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no campo.
Retorna um objeto `),i(640,"code"),e(641,"KeyboardEvent"),t(),e(642," com informa\xE7\xF5es sobre a tecla."),t()()(),i(643,"tr",19)(644,"td",20)(645,"div",21)(646,"span",22),e(647,"t-keys-label"),n(648,"br"),t()()(),i(649,"td",23)(650,"code",42),e(651,"Array<ThfLookupKeysLabel>"),t()(),i(652,"td",25),e(653,"-"),t(),i(654,"td",26)(655,"em")(656,"strong"),e(657,"(opcional)"),t()(),i(658,"p"),e(659,"Permite definir at\xE9 3 propriedades do item selecionado que ficar\xE3o vis\xEDveis no campo."),t(),i(660,"pre")(661,"code",32),e(662,`<thf-lookup
 ...
 [t-keys-label]="keysLabel"
></thf-lookup>`),t()(),i(663,"pre")(664,"code",33),e(665,`keysLabel: Array<ThfLookupKeysLabel> = [
 { label: 'Nome', value: 'name' },
 { label: 'Email', value: 'email' }
];`),t()(),i(666,"pre")(667,"code"),e(668,`// sa\xEDda no campo:
Robert Bruce Banner-hulksmash@marvel.com`),t()()()(),i(669,"tr",19)(670,"td",20)(671,"div",21)(672,"span",22),e(673,"t-label"),n(674,"br"),t()()(),i(675,"td",23)(676,"code",27),e(677,"string"),t()(),i(678,"td",25),e(679,"-"),t(),i(680,"td",26)(681,"em")(682,"strong"),e(683,"(opcional)"),t()(),i(684,"p"),e(685,"Label do campo. Tamb\xE9m usado como t\xEDtulo do modal de busca avan\xE7ada, se "),i(686,"code"),e(687,"modalTitle"),t(),e(688," n\xE3o estiver definido em "),i(689,"strong"),e(690,"t-literals"),t(),e(691,"."),t()()(),i(692,"tr",19)(693,"td",20)(694,"div",21)(695,"span",22),e(696,"t-literals"),n(697,"br"),t()()(),i(698,"td",23)(699,"code",43),e(700,"ThfLookupLiterals"),t()(),i(701,"td",25),e(702,"-"),t(),i(703,"td",26)(704,"em")(705,"strong"),e(706,"(opcional)"),t()(),i(707,"p"),e(708,"Permite definir literais personalizados para o componente, conforme a interface "),i(709,"strong"),e(710,"ThfLookupLiterals"),t(),e(711,"."),t(),i(712,"pre")(713,"code",32),e(714,`// Exemplo de uso:
<thf-lookup
 ...
 [t-literals]="customLiterals"
></thf-lookup>`),t()(),i(715,"pre")(716,"code",33),e(717,"customLiterals: ThfLookupLiterals = { modalTitle: 'Busca avan\xE7ada' };"),t()()()(),i(718,"tr",19)(719,"td",20)(720,"div",21)(721,"span",22),e(722,"t-multiple"),n(723,"br"),t()()(),i(724,"td",23)(725,"code",28),e(726,"boolean"),t()(),i(727,"td",25)(728,"p")(729,"code"),e(730,"false"),t()()(),i(731,"td",26)(732,"em")(733,"strong"),e(734,"(opcional)"),t()(),i(735,"p"),e(736,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(737,"blockquote")(738,"p"),e(739,"Quando habilitado, o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(740,"code"),e(741,"[ 12345, 67890 ]"),t()()()()(),i(742,"tr",19)(743,"td",20)(744,"div",21)(745,"span",22),e(746,"t-no-autocomplete"),n(747,"br"),t()()(),i(748,"td",23)(749,"code",28),e(750,"boolean"),t()(),i(751,"td",25)(752,"p")(753,"code"),e(754,"false"),t()()(),i(755,"td",26)(756,"em")(757,"strong"),e(758,"(opcional)"),t()(),i(759,"p"),e(760,"Desabilita o "),i(761,"code"),e(762,"autocomplete"),t(),e(763," (propriedade nativa) do campo."),t()()(),i(764,"tr",19)(765,"td",20)(766,"div",29)(767,"span",30),e(768," (t-error)"),n(769,"br"),t()()(),i(770,"td",23)(771,"code",24),e(772,"EventEmitter"),t()(),i(773,"td",25),e(774,"-"),t(),i(775,"td",26)(776,"em")(777,"strong"),e(778,"(opcional)"),t()(),i(779,"p"),e(780,`Evento disparado quando ocorre algum erro na requisi\xE7\xE3o de busca.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(781,"tr",19)(782,"td",20)(783,"div",21)(784,"span",22),e(785,"t-optional"),n(786,"br"),t()()(),i(787,"td",23)(788,"code",28),e(789,"boolean"),t()(),i(790,"td",25)(791,"p")(792,"code"),e(793,"false"),t()()(),i(794,"td",26)(795,"em")(796,"strong"),e(797,"(opcional)"),t()(),i(798,"p"),e(799,"Exibe um indicador opcional no campo. Requer que "),i(800,"strong"),e(801,"t-label"),t(),e(802," esteja definido e "),i(803,"strong"),e(804,"t-required"),t(),e(805," desabilitado."),t()()(),i(806,"tr",19)(807,"td",20)(808,"div",21)(809,"span",22),e(810,"t-placeholder"),n(811,"br"),t()()(),i(812,"td",23)(813,"code",27),e(814,"string"),t()(),i(815,"td",25),e(816,"-"),t(),i(817,"td",26)(818,"em")(819,"strong"),e(820,"(opcional)"),t()(),i(821,"p"),e(822,"Texto exibido enquanto o campo estiver vazio."),t()()(),i(823,"tr",19)(824,"td",20)(825,"div",21)(826,"span",22),e(827,"t-required"),n(828,"br"),t()()(),i(829,"td",23)(830,"code",28),e(831,"boolean"),t()(),i(832,"td",25)(833,"p")(834,"code"),e(835,"false"),t()()(),i(836,"td",26)(837,"em")(838,"strong"),e(839,"(opcional)"),t()(),i(840,"p"),e(841,"Define o campo como obrigat\xF3rio. Caso "),i(842,"strong"),e(843,"t-disabled"),t(),e(844," esteja habilitado, a obrigatoriedade ser\xE1 ignorada."),t()()(),i(845,"tr",19)(846,"td",20)(847,"div",29)(848,"span",30),e(849," (t-selected)"),n(850,"br"),t()()(),i(851,"td",23)(852,"code",24),e(853,"EventEmitter"),t()(),i(854,"td",25),e(855,"-"),t(),i(856,"td",26)(857,"em")(858,"strong"),e(859,"(opcional)"),t()(),i(860,"p"),e(861,`Evento disparado ao selecionar um item.
Para sele\xE7\xE3o m\xFAltipla, retorna a lista de itens selecionados contendo os valores da coluna definida em `),i(862,"strong"),e(863,"t-field-value"),t(),e(864,`.
Para sele\xE7\xE3o \xFAnica retorna o objeto do item.`),t()()(),i(865,"tr",19)(866,"td",20)(867,"div",21)(868,"span",22),e(869,"t-show-required"),n(870,"br"),t()()(),i(871,"td",23)(872,"code",28),e(873,"boolean"),t()(),i(874,"td",25)(875,"p")(876,"code"),e(877,"false"),t()()(),i(878,"td",26)(879,"em")(880,"strong"),e(881,"(opcional)"),t()(),i(882,"p"),e(883,"Exibe um indicador de obrigatoriedade no campo. Requer que "),i(884,"strong"),e(885,"t-required"),t(),e(886," esteja habilitado e "),i(887,"strong"),e(888,"t-label"),t(),e(889," definido."),t()()(),i(890,"tr",19)(891,"td",20)(892,"div",21)(893,"span",22),e(894," t-modal-size"),n(895,"br"),t()()(),i(896,"td",23)(897,"code",27),e(898,"string"),t()(),i(899,"td",25)(900,"p")(901,"code"),e(902,"lg"),t()()(),i(903,"td",26)(904,"em")(905,"strong"),e(906,"(opcional)"),t()(),i(907,"p"),e(908,"Define o tamanho do modal."),t(),i(909,"p"),e(910,"Valores v\xE1lidos:"),t(),i(911,"ul")(912,"li")(913,"code"),e(914,"sm"),t(),e(915," (pequeno)"),t(),i(916,"li")(917,"code"),e(918,"md"),t(),e(919," (m\xE9dio)"),t(),i(920,"li")(921,"code"),e(922,"lg"),t(),e(923," (grande)"),t(),i(924,"li")(925,"code"),e(926,"xl"),t(),e(927," (extra grande)"),t(),i(928,"li")(929,"code"),e(930,"auto"),t(),e(931," (autom\xE1tico)"),t()(),i(932,"blockquote")(933,"p"),e(934,"Quando informado "),i(935,"code"),e(936,"auto"),t(),e(937,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),i(938,"code"),e(939,"lg"),t(),e(940,"."),t()()()()()(),i(941,"po-accordion-item",44)(942,"table",45)(943,"tr",19)(944,"th",46)(945,"div",21)(946,"h4")(947,"span",22),e(948," showAdditionalHelp "),t()()()()(),i(949,"tr",26)(950,"td",26)(951,"p"),e(952,"M\xE9todo que exibe "),i(953,"code"),e(954,"t-additionalHelpTooltip"),t(),e(955," ou executa a a\xE7\xE3o definida em "),i(956,"code"),e(957,"t-additionalHelp"),t(),e(958,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(959,"code"),e(960,"t-keydown"),t(),e(961,"."),t(),i(962,"pre")(963,"code"),e(964,`<thf-lookup
 #lookup
 ...
 t-additional-help-tooltip="Mensagem de ajuda complementar"
 (t-keydown)="onKeyDown($event, lookup)"
></thf-lookup>`),t()(),i(965,"pre")(966,"code"),e(967,`...
onKeyDown(event: KeyboardEvent, inp: ThfLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}`),t()()()()(),n(968,"br"),t()()(),T(969,2),t(),i(970,"po-tab",47),T(971,3),i(972,"po-container",5)(973,"po-accordion",6)(974,"po-accordion-item",48)(975,"h4",9)(976,"code"),e(977,"ThfLookupColumn"),t()(),i(978,"div",10)(979,"p"),e(980,"Interface para configura\xE7\xE3o das colunas ("),i(981,"strong"),e(982,"t-columns"),t(),e(983,")."),t()(),i(984,"h4",15),e(985,"Propriedades"),t(),i(986,"table",16)(987,"tr",17)(988,"th",18),e(989,"Nome"),t(),i(990,"th",18),e(991,"Tipo"),t(),i(992,"th",18),e(993,"Descri\xE7\xE3o"),t()(),i(994,"tr",19)(995,"td",20)(996,"div",21)(997,"span",22),e(998," format"),n(999,"br"),t()()(),i(1e3,"td",23)(1001,"code",27),e(1002,"string"),t()(),i(1003,"td",26)(1004,"em")(1005,"strong"),e(1006,"(opcional)"),t()(),i(1007,"p"),e(1008,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(1009,"ul")(1010,"li"),e(1011,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(1012,"li"),e(1013,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(1014,"tr",19)(1015,"td",20)(1016,"div",21)(1017,"span",22),e(1018," label"),n(1019,"br"),t()()(),i(1020,"td",23)(1021,"code",27),e(1022,"string"),t()(),i(1023,"td",26)(1024,"em")(1025,"strong"),e(1026,"(opcional)"),t()(),i(1027,"p"),e(1028,"Texto para t\xEDtulo da coluna."),t(),i(1029,"p"),e(1030,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(1031,"em"),e(1032,"label"),t(),e(1033," o valor da propriedade "),i(1034,"em"),e(1035,"property"),t(),e(1036," com a primeira letra em mai\xFAsculo."),t()()(),i(1037,"tr",19)(1038,"td",20)(1039,"div",21)(1040,"span",22),e(1041," property"),n(1042,"br"),t()()(),i(1043,"td",23)(1044,"code",27),e(1045,"string"),t()(),i(1046,"td",26)(1047,"em")(1048,"strong"),e(1049,"(opcional)"),t()(),i(1050,"p"),e(1051,"Nome identificador da coluna."),t()()(),i(1052,"tr",19)(1053,"td",20)(1054,"div",21)(1055,"span",22),e(1056," type"),n(1057,"br"),t()()(),i(1058,"td",23)(1059,"code",27),e(1060,"string"),t()(),i(1061,"td",26)(1062,"em")(1063,"strong"),e(1064,"(opcional)"),t()(),i(1065,"p"),e(1066,"Tipo da coluna:"),t(),i(1067,"ul")(1068,"li"),e(1069,"string (padr\xE3o): textos"),t(),i(1070,"li"),e(1071,"number: valores num\xE9ricos"),t(),i(1072,"li"),e(1073,"date: data"),t(),i(1074,"li"),e(1075,"currency: valores monet\xE1rios"),t(),i(1076,"li"),e(1077,"dateTime: data e hora"),t()()()(),i(1078,"tr",19)(1079,"td",20)(1080,"div",21)(1081,"span",22),e(1082," width"),n(1083,"br"),t()()(),i(1084,"td",23)(1085,"code",27),e(1086,"string"),t()(),i(1087,"td",26)(1088,"em")(1089,"strong"),e(1090,"(opcional)"),t()(),i(1091,"p"),e(1092,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()()(),i(1093,"po-accordion-item",49)(1094,"h4",9)(1095,"code"),e(1096,"ThfLookupFilterSearchSelect"),t()(),i(1097,"div",10)(1098,"p"),e(1099,"Interface que define as colunas para busca ("),i(1100,"strong"),e(1101,"t-filter-search-select"),t(),e(1102,")"),t()(),i(1103,"h4",15),e(1104,"Propriedades"),t(),i(1105,"table",16)(1106,"tr",17)(1107,"th",18),e(1108,"Nome"),t(),i(1109,"th",18),e(1110,"Tipo"),t(),i(1111,"th",18),e(1112,"Descri\xE7\xE3o"),t()(),i(1113,"tr",19)(1114,"td",20)(1115,"div",21)(1116,"span",22),e(1117," label"),n(1118,"br"),t()()(),i(1119,"td",23)(1120,"code",27),e(1121,"string"),t()(),i(1122,"td",26)(1123,"p"),e(1124,"R\xF3tulo da coluna"),t()()(),i(1125,"tr",19)(1126,"td",20)(1127,"div",21)(1128,"span",22),e(1129," value"),n(1130,"br"),t()()(),i(1131,"td",23)(1132,"code",27),e(1133,"string"),t()(),i(1134,"td",26)(1135,"p"),e(1136,"Coluna"),t()()()()(),i(1137,"po-accordion-item",50)(1138,"h4",9)(1139,"code"),e(1140,"ThfLookupFilter"),t()(),i(1141,"div",10)(1142,"p"),e(1143,"Interface para definir o tipo de busca via servi\xE7o."),t()(),i(1144,"table",45)(1145,"tr",19)(1146,"th",46)(1147,"div",21)(1148,"h4")(1149,"span",22),e(1150," fetchItems "),t()()()()(),i(1151,"tr",26)(1152,"td",26)(1153,"p"),e(1154,`M\xE9todo que ser\xE1 disparado ao digitar no campo do componente, deve-se retornar
um `),i(1155,"em"),e(1156,"Observable"),t(),e(1157," com a resposta da API no formato { items: [] }."),t()()()(),i(1158,"h5")(1159,"b"),e(1160,"Par\xE2metros"),t()(),i(1161,"table",16)(1162,"tr",17)(1163,"th",18),e(1164,"Nome"),t(),i(1165,"th",18),e(1166,"Tipo"),t(),i(1167,"th",18),e(1168,"Descri\xE7\xE3o"),t()(),i(1169,"tr",19)(1170,"td",20),e(1171," query"),t(),i(1172,"td",23)(1173,"code",51),e(1174," string "),t()(),i(1175,"td",26)(1176,"p"),e(1177,"Par\xE2metro com o valor que est\xE1 sendo digitado no campo do lookup"),t()()(),i(1178,"tr",19)(1179,"td",20),e(1180," filterParams"),t(),i(1181,"td",23)(1182,"code",51),e(1183," any "),t()(),i(1184,"td",26)(1185,"p"),e(1186,"Valor informado atrav\xE9s da propriedade "),i(1187,"strong"),e(1188,"t-filter-params"),t(),e(1189,"."),t()()()(),n(1190,"br"),i(1191,"table",45)(1192,"tr",19)(1193,"th",46)(1194,"div",21)(1195,"h4")(1196,"span",22),e(1197," getFilteredItems "),t()()()()(),i(1198,"tr",26)(1199,"td",26)(1200,"p"),e(1201,`M\xE9todo que ser\xE1 disparado ao filtrar no grid ou carregar mais resultados no componente, deve-se retornar
um `),i(1202,"em"),e(1203,"Observable"),t(),e(1204," com a resposta da API no formato da interface "),i(1205,"strong"),e(1206,"ThfLookupResponseApi"),t(),e(1207,"."),t()()()(),i(1208,"h5")(1209,"b"),e(1210,"Par\xE2metros"),t()(),i(1211,"table",16)(1212,"tr",17)(1213,"th",18),e(1214,"Nome"),t(),i(1215,"th",18),e(1216,"Tipo"),t(),i(1217,"th",18),e(1218,"Descri\xE7\xE3o"),t()(),i(1219,"tr",19)(1220,"td",20),e(1221," params"),t(),i(1222,"td",23)(1223,"code",51),e(1224," ThfLookupFilteredItemsParams "),t()(),i(1225,"td",26)(1226,"p"),e(1227,"Objeto enviado por par\xE2metro que implementa a interface "),i(1228,"strong"),e(1229,"ThfLookupFilteredItemsParams"),t(),e(1230,"."),t()()()(),n(1231,"br"),i(1232,"table",45)(1233,"tr",19)(1234,"th",46)(1235,"div",21)(1236,"h4")(1237,"span",22),e(1238," getObjectByValue "),t()()()()(),i(1239,"tr",26)(1240,"td",26)(1241,"p"),e(1242,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(1243,"p"),e(1244,"Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o esteja habilitada, o par\xE2metro "),i(1245,"code"),e(1246,"value"),t(),e(1247,` ser\xE1 enviado como uma lista de valores
e o `),i(1248,"em"),e(1249,"Observable"),t(),e(1250," deve retornar uma lista de objetos."),t()()()(),i(1251,"h5")(1252,"b"),e(1253,"Par\xE2metros"),t()(),i(1254,"table",16)(1255,"tr",17)(1256,"th",18),e(1257,"Nome"),t(),i(1258,"th",18),e(1259,"Tipo"),t(),i(1260,"th",18),e(1261,"Descri\xE7\xE3o"),t()(),i(1262,"tr",19)(1263,"td",20),e(1264," value"),t(),i(1265,"td",23)(1266,"code",27),e(1267," string "),t(),i(1268,"code",52),e(1269," Array<any> "),t()(),i(1270,"td",26)(1271,"p"),e(1272,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(1273,"tr",19)(1274,"td",20),e(1275," filterParams"),t(),i(1276,"td",23)(1277,"code",51),e(1278," any "),t()(),i(1279,"td",26)(1280,"p"),e(1281,"Valor informado atrav\xE9s da propriedade "),i(1282,"strong"),e(1283,"t-filter-params"),t(),e(1284,"."),t()()()(),n(1285,"br"),t(),i(1286,"po-accordion-item",53)(1287,"h4",9)(1288,"code"),e(1289,"ThfLookupFilteredItemsParams"),t()(),i(1290,"div",10)(1291,"p"),e(1292,"Interface do objeto enviado como par\xE2metro do m\xE9todo privado "),i(1293,"strong"),e(1294,"getFilteredItems"),t(),e(1295,"."),t()(),i(1296,"h4",15),e(1297,"Propriedades"),t(),i(1298,"table",16)(1299,"tr",17)(1300,"th",18),e(1301,"Nome"),t(),i(1302,"th",18),e(1303,"Tipo"),t(),i(1304,"th",18),e(1305,"Descri\xE7\xE3o"),t()(),i(1306,"tr",19)(1307,"td",20)(1308,"div",21)(1309,"span",22),e(1310," filter"),n(1311,"br"),t()()(),i(1312,"td",23)(1313,"code",54),e(1314,`{ [key: string]: any;
}`),t()(),i(1315,"td",26)(1316,"em")(1317,"strong"),e(1318,"(opcional)"),t()(),i(1319,"p"),e(1320,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(1321,"tr",19)(1322,"td",20)(1323,"div",21)(1324,"span",22),e(1325," filterParams"),n(1326,"br"),t()()(),i(1327,"td",23)(1328,"code",37),e(1329,"any"),t()(),i(1330,"td",26)(1331,"em")(1332,"strong"),e(1333,"(opcional)"),t()(),i(1334,"p"),e(1335,"Valor informado atrav\xE9s da propriedade "),i(1336,"code"),e(1337,"t-filter-params"),t(),e(1338,"."),t()()(),i(1339,"tr",19)(1340,"td",20)(1341,"div",21)(1342,"span",22),e(1343," order"),n(1344,"br"),t()()(),i(1345,"td",23)(1346,"code",27),e(1347,"string"),t()(),i(1348,"td",26)(1349,"em")(1350,"strong"),e(1351,"(opcional)"),t()(),i(1352,"p"),e(1353,"Coluna que est\xE1 sendo ordenada na grid."),t(),i(1354,"ul")(1355,"li"),e(1356,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(1357,"code"),e(1358,"-<colunaOrdenada>"),t(),e(1359,", por exemplo "),i(1360,"code"),e(1361,"-name"),t(),e(1362,"."),t(),i(1363,"li"),e(1364,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(1365,"code"),e(1366,"<colunaOrdenada>"),t(),e(1367,", por exemplo "),i(1368,"code"),e(1369,"name"),t(),e(1370,"."),t()()()(),i(1371,"tr",19)(1372,"td",20)(1373,"div",21)(1374,"span",22),e(1375," page"),n(1376,"br"),t()()(),i(1377,"td",23)(1378,"code",55),e(1379,"number"),t()(),i(1380,"td",26)(1381,"em")(1382,"strong"),e(1383,"(opcional)"),t()(),i(1384,"p"),e(1385,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(1386,"tr",19)(1387,"td",20)(1388,"div",21)(1389,"span",22),e(1390," pageSize"),n(1391,"br"),t()()(),i(1392,"td",23)(1393,"code",55),e(1394,"number"),t()(),i(1395,"td",26)(1396,"em")(1397,"strong"),e(1398,"(opcional)"),t()(),i(1399,"p"),e(1400,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()()(),i(1401,"po-accordion-item",56)(1402,"h4",9)(1403,"code"),e(1404,"ThfLookupKeysLabel"),t()(),i(1405,"div",10)(1406,"p"),e(1407,"Interface para definir as propriedades vis\xEDveis do item selecionado ("),i(1408,"strong"),e(1409,"t-keys-label"),t(),e(1410,")."),t()(),i(1411,"h4",15),e(1412,"Propriedades"),t(),i(1413,"table",16)(1414,"tr",17)(1415,"th",18),e(1416,"Nome"),t(),i(1417,"th",18),e(1418,"Tipo"),t(),i(1419,"th",18),e(1420,"Descri\xE7\xE3o"),t()(),i(1421,"tr",19)(1422,"td",20)(1423,"div",21)(1424,"span",22),e(1425," label"),n(1426,"br"),t()()(),i(1427,"td",23)(1428,"code",27),e(1429,"string"),t()(),i(1430,"td",26)(1431,"p"),e(1432,"Texto exibido"),t()()(),i(1433,"tr",19)(1434,"td",20)(1435,"div",21)(1436,"span",22),e(1437," value"),n(1438,"br"),t()()(),i(1439,"td",23)(1440,"code",27),e(1441,"string"),t()(),i(1442,"td",26)(1443,"p"),e(1444,"Coluna"),t()()()()(),i(1445,"po-accordion-item",57)(1446,"h4",9)(1447,"code"),e(1448,"ThfLookupLiterals"),t()(),i(1449,"div",10)(1450,"p"),e(1451,"Interface para customizar literais ("),i(1452,"strong"),e(1453,"t-literals"),t(),e(1454,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(1455,"h4",15),e(1456,"Propriedades"),t(),i(1457,"table",16)(1458,"tr",17)(1459,"th",18),e(1460,"Nome"),t(),i(1461,"th",18),e(1462,"Tipo"),t(),i(1463,"th",18),e(1464,"Descri\xE7\xE3o"),t()(),i(1465,"tr",19)(1466,"td",20)(1467,"div",21)(1468,"span",22),e(1469," confirmBodyDelete"),n(1470,"br"),t()()(),i(1471,"td",23)(1472,"code",27),e(1473,"string"),t()(),i(1474,"td",26)(1475,"em")(1476,"strong"),e(1477,"(opcional)"),t()(),i(1478,"p"),e(1479,"Texto do corpo do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(1480,"tr",19)(1481,"td",20)(1482,"div",21)(1483,"span",22),e(1484," confirmCancelDelete"),n(1485,"br"),t()()(),i(1486,"td",23)(1487,"code",27),e(1488,"string"),t()(),i(1489,"td",26)(1490,"em")(1491,"strong"),e(1492,"(opcional)"),t()(),i(1493,"p"),e(1494,"Texto do bot\xE3o de cancelar do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(1495,"tr",19)(1496,"td",20)(1497,"div",21)(1498,"span",22),e(1499," confirmRemoveDelete"),n(1500,"br"),t()()(),i(1501,"td",23)(1502,"code",27),e(1503,"string"),t()(),i(1504,"td",26)(1505,"em")(1506,"strong"),e(1507,"(opcional)"),t()(),i(1508,"p"),e(1509,"Texto do bot\xE3o de remover do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(1510,"tr",19)(1511,"td",20)(1512,"div",21)(1513,"span",22),e(1514," confirmTitleDelete"),n(1515,"br"),t()()(),i(1516,"td",23)(1517,"code",27),e(1518,"string"),t()(),i(1519,"td",26)(1520,"em")(1521,"strong"),e(1522,"(opcional)"),t()(),i(1523,"p"),e(1524,"T\xEDtulo do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(1525,"tr",19)(1526,"td",20)(1527,"div",21)(1528,"span",22),e(1529," lastSearch"),n(1530,"br"),t()()(),i(1531,"td",23)(1532,"code",27),e(1533,"string"),t()(),i(1534,"td",26)(1535,"em")(1536,"strong"),e(1537,"(opcional)"),t()(),i(1538,"p"),e(1539,"Texto exibido no listbox quando estiver exibindo as ultimas pesquisas."),t()()(),i(1540,"tr",19)(1541,"td",20)(1542,"div",21)(1543,"span",22),e(1544," listNotFound"),n(1545,"br"),t()()(),i(1546,"td",23)(1547,"code",27),e(1548,"string"),t()(),i(1549,"td",26)(1550,"em")(1551,"strong"),e(1552,"(opcional)"),t()(),i(1553,"p"),e(1554,"Texto exibido no listbox quando nenhum resultado for encontrado."),t()()(),i(1555,"tr",19)(1556,"td",20)(1557,"div",21)(1558,"span",22),e(1559," modalPlaceholder"),n(1560,"br"),t()()(),i(1561,"td",23)(1562,"code",27),e(1563,"string"),t()(),i(1564,"td",26)(1565,"em")(1566,"strong"),e(1567,"(opcional)"),t()(),i(1568,"p"),e(1569,"Texto exibido no placeholder do input da modal."),t()()(),i(1570,"tr",19)(1571,"td",20)(1572,"div",21)(1573,"span",22),e(1574," modalPrimaryActionLabel"),n(1575,"br"),t()()(),i(1576,"td",23)(1577,"code",27),e(1578,"string"),t()(),i(1579,"td",26)(1580,"em")(1581,"strong"),e(1582,"(opcional)"),t()(),i(1583,"p"),e(1584,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),i(1585,"tr",19)(1586,"td",20)(1587,"div",21)(1588,"span",22),e(1589," modalSecondaryActionLabel"),n(1590,"br"),t()()(),i(1591,"td",23)(1592,"code",27),e(1593,"string"),t()(),i(1594,"td",26)(1595,"em")(1596,"strong"),e(1597,"(opcional)"),t()(),i(1598,"p"),e(1599,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),i(1600,"tr",19)(1601,"td",20)(1602,"div",21)(1603,"span",22),e(1604," modalTableLoadMoreData"),n(1605,"br"),t()()(),i(1606,"td",23)(1607,"code",27),e(1608,"string"),t()(),i(1609,"td",26)(1610,"em")(1611,"strong"),e(1612,"(opcional)"),t()(),i(1613,"p"),e(1614,"Label do "),i(1615,"code"),e(1616,"button"),t(),e(1617," que deve carregar mais resultados no grid, ou seja, exibir mais itens."),t()()(),i(1618,"tr",19)(1619,"td",20)(1620,"div",21)(1621,"span",22),e(1622," modalTableLoadingData"),n(1623,"br"),t()()(),i(1624,"td",23)(1625,"code",27),e(1626,"string"),t()(),i(1627,"td",26)(1628,"em")(1629,"strong"),e(1630,"(opcional)"),t()(),i(1631,"p"),e(1632,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na grid."),t()()(),i(1633,"tr",19)(1634,"td",20)(1635,"div",21)(1636,"span",22),e(1637," modalTableNoColumns"),n(1638,"br"),t()()(),i(1639,"td",23)(1640,"code",27),e(1641,"string"),t()(),i(1642,"td",26)(1643,"em")(1644,"strong"),e(1645,"(opcional)"),t()(),i(1646,"p"),e(1647,"Texto exibido quando n\xE3o existem colunas definidas no grid."),t()()(),i(1648,"tr",19)(1649,"td",20)(1650,"div",21)(1651,"span",22),e(1652," modalTableNoData"),n(1653,"br"),t()()(),i(1654,"td",23)(1655,"code",27),e(1656,"string"),t()(),i(1657,"td",26)(1658,"em")(1659,"strong"),e(1660,"(opcional)"),t()(),i(1661,"p"),e(1662,"Texto exibido quando n\xE3o existem itens para serem exibidos no grid."),t()()(),i(1663,"tr",19)(1664,"td",20)(1665,"div",21)(1666,"span",22),e(1667," modalTitle"),n(1668,"br"),t()()(),i(1669,"td",23)(1670,"code",27),e(1671,"string"),t()(),i(1672,"td",26)(1673,"em")(1674,"strong"),e(1675,"(opcional)"),t()(),i(1676,"p"),e(1677,"Texto exibido no t\xEDtulo da modal."),t()()(),i(1678,"tr",19)(1679,"td",20)(1680,"div",21)(1681,"span",22),e(1682," multipleItems"),n(1683,"br"),t()()(),i(1684,"td",23)(1685,"code",27),e(1686,"string"),t()(),i(1687,"td",26)(1688,"em")(1689,"strong"),e(1690,"(opcional)"),t()(),i(1691,"p"),e(1692,"Frase exibida no accordion quando possui mais de um item selecionado."),t()()(),i(1693,"tr",19)(1694,"td",20)(1695,"div",21)(1696,"span",22),e(1697," oneItem"),n(1698,"br"),t()()(),i(1699,"td",23)(1700,"code",27),e(1701,"string"),t()(),i(1702,"td",26)(1703,"em")(1704,"strong"),e(1705,"(opcional)"),t()(),i(1706,"p"),e(1707,"Frase exibida no accordion quando possui apenas um item selecionado."),t()()(),i(1708,"tr",19)(1709,"td",20)(1710,"div",21)(1711,"span",22),e(1712," or"),n(1713,"br"),t()()(),i(1714,"td",23)(1715,"code",27),e(1716,"string"),t()(),i(1717,"td",26)(1718,"em")(1719,"strong"),e(1720,"(opcional)"),t()(),i(1721,"p"),e(1722,"Palavra 'ou' que \xE9 exibida dentro do listbox."),t()()(),i(1723,"tr",19)(1724,"td",20)(1725,"div",21)(1726,"span",22),e(1727," searchAdvanced"),n(1728,"br"),t()()(),i(1729,"td",23)(1730,"code",27),e(1731,"string"),t()(),i(1732,"td",26)(1733,"em")(1734,"strong"),e(1735,"(opcional)"),t()(),i(1736,"p"),e(1737,"Texto exibido no listbox para fazer busca avan\xE7ada."),t()()(),i(1738,"tr",19)(1739,"td",20)(1740,"div",21)(1741,"span",22),e(1742," searchBy"),n(1743,"br"),t()()(),i(1744,"td",23)(1745,"code",27),e(1746,"string"),t()(),i(1747,"td",26)(1748,"em")(1749,"strong"),e(1750,"(opcional)"),t()(),i(1751,"p"),e(1752,"Texto exibido para indicar os campos filtrados."),t()()()()(),i(1753,"po-accordion-item",58)(1754,"h4",9)(1755,"code"),e(1756,"ThfLookupResponseApi"),t()(),i(1757,"div",10)(1758,"p"),e(1759,"Interface que representa a estrutura de uma resposta de sucesso HTTP."),t(),i(1760,"blockquote")(1761,"p"),e(1762,"Utilizada apenas quando a resposta incluir uma cole\xE7\xE3o de itens. "),t()()(),i(1763,"h4",15),e(1764,"Propriedades"),t(),i(1765,"table",16)(1766,"tr",17)(1767,"th",18),e(1768,"Nome"),t(),i(1769,"th",18),e(1770,"Tipo"),t(),i(1771,"th",18),e(1772,"Descri\xE7\xE3o"),t()(),i(1773,"tr",19)(1774,"td",20)(1775,"div",21)(1776,"span",22),e(1777," hasNext"),n(1778,"br"),t()()(),i(1779,"td",23)(1780,"code",28),e(1781,"boolean"),t()(),i(1782,"td",26)(1783,"p"),e(1784,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(1785,"tr",19)(1786,"td",20)(1787,"div",21)(1788,"span",22),e(1789," items"),n(1790,"br"),t()()(),i(1791,"td",23)(1792,"code",52),e(1793,"Array<any>"),t()(),i(1794,"td",26)(1795,"p"),e(1796,"Lista de itens retornados."),t()()()()()()(),T(1797,4),t(),i(1798,"po-tab",59)(1799,"po-container",5),T(1800,5),i(1801,"h3",60),e(1802,"Tokens customiz\xE1veis"),t(),i(1803,"p"),e(1804,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(1805,"blockquote")(1806,"p"),e(1807,"Para maiores informa\xE7\xF5es, acesse o guia "),i(1808,"a",61),e(1809,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(1810,"."),t()(),i(1811,"table")(1812,"thead")(1813,"tr")(1814,"th"),e(1815,"Propriedade"),t(),i(1816,"th"),e(1817,"Descri\xE7\xE3o"),t(),i(1818,"th"),e(1819,"Valor Padr\xE3o"),t()()(),i(1820,"tbody")(1821,"tr")(1822,"td")(1823,"strong"),e(1824,"Default Values"),t()(),n(1825,"td")(1826,"td"),t(),i(1827,"tr")(1828,"td")(1829,"code"),e(1830,"--font-family"),t()(),i(1831,"td"),e(1832,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(1833,"td")(1834,"code"),e(1835,"var(--font-family-theme)"),t()()(),i(1836,"tr")(1837,"td")(1838,"code"),e(1839,"--font-size"),t()(),i(1840,"td"),e(1841,"Tamanho da fonte"),t(),i(1842,"td")(1843,"code"),e(1844,"var(--font-size)"),t()()(),i(1845,"tr")(1846,"td")(1847,"code"),e(1848,"--text-color-placeholder"),t()(),i(1849,"td"),e(1850,"Cor do texto no placeholder"),t(),i(1851,"td")(1852,"code"),e(1853,"var(--color-neutral-light-30)"),t()()(),i(1854,"tr")(1855,"td")(1856,"code"),e(1857,"--color"),t()(),i(1858,"td"),e(1859,"Cor principal do campo"),t(),i(1860,"td")(1861,"code"),e(1862,"var(--color-neutral-dark-70)"),t()()(),i(1863,"tr")(1864,"td")(1865,"code"),e(1866,"--background"),t()(),i(1867,"td"),e(1868,"Cor de background"),t(),i(1869,"td")(1870,"code"),e(1871,"var(--color-neutral-light-00)"),t()()(),i(1872,"tr")(1873,"td")(1874,"code"),e(1875,"--text-color"),t()(),i(1876,"td"),e(1877,"Cor do texto"),t(),i(1878,"td")(1879,"code"),e(1880,"var(--color-neutral-mid-60)"),t()()(),i(1881,"tr")(1882,"td")(1883,"strong"),e(1884,"Hover"),t()(),n(1885,"td")(1886,"td"),t(),i(1887,"tr")(1888,"td")(1889,"code"),e(1890,"--color-hover"),t()(),i(1891,"td"),e(1892,"Cor principal do campo no estado hover"),t(),i(1893,"td")(1894,"code"),e(1895,"var(--color-brand-01-dark)"),t()()(),i(1896,"tr")(1897,"td")(1898,"code"),e(1899,"--background-hover"),t()(),i(1900,"td"),e(1901,"Cor de background no estado hover"),t(),i(1902,"td")(1903,"code"),e(1904,"var(--color-brand-01-lightest)"),t()()(),i(1905,"tr")(1906,"td")(1907,"strong"),e(1908,"Focused"),t()(),n(1909,"td")(1910,"td"),t(),i(1911,"tr")(1912,"td")(1913,"code"),e(1914,"--color-focused"),t()(),i(1915,"td"),e(1916,"Cor principal do campo no estado de focus"),t(),i(1917,"td")(1918,"code"),e(1919,"var(--color-action-default)"),t()()(),i(1920,"tr")(1921,"td")(1922,"code"),e(1923,"--outline-color-focused"),t()(),i(1924,"td"),e(1925,"Cor do outline no estado de focus"),t(),i(1926,"td")(1927,"code"),e(1928,"var(--color-action-focus)"),t()()(),i(1929,"tr")(1930,"td")(1931,"strong"),e(1932,"Disabled"),t()(),n(1933,"td")(1934,"td"),t(),i(1935,"tr")(1936,"td")(1937,"code"),e(1938,"--color-disabled"),t()(),i(1939,"td"),e(1940,"Cor principal do campo no estado disabled"),t(),i(1941,"td")(1942,"code"),e(1943,"var(--color-neutral-light-30)"),t()()(),i(1944,"tr")(1945,"td")(1946,"code"),e(1947,"--background-disabled"),t()(),i(1948,"td"),e(1949,"Cor de background no estado disabled"),t(),i(1950,"td")(1951,"code"),e(1952,"var(--color-neutral-light-05)"),t()()(),i(1953,"tr")(1954,"td")(1955,"code"),e(1956,"--text-color-disabled"),t()(),i(1957,"td"),e(1958,"Cor do texto no estado disabled"),t(),i(1959,"td")(1960,"code"),e(1961,"var(--color-neutral-dark-70)"),t()()()()()(),T(1962,6),t(),i(1963,"po-tab",62),T(1964,7),t()()())},dependencies:[_,H,y,X,z],encapsulation:2});let d=l;return d})();var Ot=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","labs",""]]],Qt=["[overview]","[especificacao-before]","[especificacao-after]","[labs]"],st=(()=>{let l=class l{constructor(r){this.el=r}ngAfterViewInit(){this.accordions.forEach(r=>{setTimeout(()=>{r.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(r){setTimeout(()=>{let a=this.tabs.tabs.find(o=>o.elementRef.nativeElement.className===`docs-tab-${r}`);if(a){let o=a.elementRef.nativeElement;o.textContent.trim()!==""||o.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(x=>{let D=x.querySelector(".po-tab-button-label");D&&D?.textContent?.trim().toLowerCase()===r&&x.remove()}),o.remove(),a.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(x=>!x.hide)))}},100)}};l.\u0275fac=function(a){return new(a||l)(R(W))},l.\u0275cmp=b({type:l,selectors:[["api-thf-splitter-pane"]],viewQuery:function(a,o){if(a&1&&(A(z,5),A(_,5)),a&2){let s;q(s=k())&&(o.tabs=s.first),q(s=k())&&(o.accordions=s)}},standalone:!1,ngContentSelectors:Qt,decls:140,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"language-html"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean,","any"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["p-label","Labs",1,"docs-tab-labs"]],template:function(a,o){a&1&&(U(Ot),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),T(4),t(),i(5,"po-tab",4),T(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfSplitterModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfSplitterPaneComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O componente "),i(19,"code"),e(20,"thf-splitter-pane"),t(),e(21," representa uma das se\xE7\xF5es que comp\xF5em o "),i(22,"code"),e(23,"thf-splitter"),t(),e(24,"."),t(),i(25,"p"),e(26,"Devem ser utilizados "),i(27,"strong"),e(28,"exatamente dois panes"),t(),e(29," por splitter; panes adicionais ser\xE3o ignorados."),t(),i(30,"p"),e(31,"Cada "),i(32,"code"),e(33,"pane"),t(),e(34," se ajusta dinamicamente conforme o redimensionamento."),t(),i(35,"pre")(36,"code",11),e(37,`<thf-splitter>
 <thf-splitter-pane [(t-size)]="50%">
   Conte\xFAdo do painel
 </thf-splitter-pane>
 ...
</thf-splitter>`),t()()(),i(38,"div",12)(39,"h4",13),e(40,"Seletor"),t(),i(41,"pre",14),e(42,`<thf-splitter-pane
  t-scrollable="boolean, any"
  t-size="string"
  (t-size-change)="EventEmitter" >
</thf-splitter-pane>
`),t()()(),i(43,"po-accordion-item",15)(44,"h4",16),e(45,"Propriedades"),t(),i(46,"table",17)(47,"tr",18)(48,"th",19),e(49,"Nome"),t(),i(50,"th",19),e(51,"Tipo"),t(),i(52,"th",19),e(53,"Padr\xE3o"),t(),i(54,"th",19),e(55,"Descri\xE7\xE3o"),t()(),i(56,"tr",20)(57,"td",21)(58,"div",22)(59,"span",23),e(60," t-scrollable"),n(61,"br"),t()()(),i(62,"td",24)(63,"code",25),e(64,"boolean, any"),t()(),i(65,"td",26)(66,"p"),e(67,"false"),t()(),i(68,"td",27)(69,"p"),e(70,`Habilita a rolagem horizontal/vertical do pane quando o conte\xFAdo exceder o valor de tamanho definido. A rolagem \xE9 aplicada
somente se o tamanho m\xEDnimo for atingido durante o redimensionamento.`),t()()(),i(71,"tr",20)(72,"td",21)(73,"div",22)(74,"span",23),e(75," t-size"),n(76,"br"),t()()(),i(77,"td",24)(78,"code",28),e(79,"string"),t()(),i(80,"td",26),e(81,"-"),t(),i(82,"td",27)(83,"p"),e(84,"Define o tamanho inicial do pane (% ou px), respeitando os limites entre "),i(85,"strong"),e(86,"30% e 70%"),t(),e(87,` do tamanho total
do splitter.`),t(),i(88,"p"),e(89,"Suporta two-way binding com "),i(90,"code"),e(91,"t-size-change"),t(),e(92,"."),t(),i(93,"blockquote")(94,"p"),e(95,"Apenas um pane pode definir "),i(96,"code"),e(97,"t-size"),t(),e(98,`; caso contr\xE1rio, ser\xE1 exibido um erro no console.
Quando o valor definido em `),i(99,"code"),e(100,"px"),t(),e(101,` estiver fora dos limites percentuais, ao realizar o redimensionamento os limites de 30% a 70% ser\xE3o aplicados automaticamente.
O uso de `),i(102,"code"),e(103,"px"),t(),e(104," \xE9 \xFAtil para cen\xE1rios onde o "),i(105,"code"),e(106,"thf-splitter"),t(),e(107," est\xE1 com "),i(108,"code"),e(109,"t-disabled"),t(),e(110," habilitado, pois o tamanho fixo n\xE3o ser\xE1 alterado."),t()(),i(111,"pre")(112,"code",11),e(113,`<!-- One-way -->
<thf-splitter-pane [t-size]="'50%'">

<!-- Two-way -->
<thf-splitter-pane [(t-size)]="variavel">`),t()()()(),i(114,"tr",20)(115,"td",21)(116,"div",29)(117,"span",30),e(118," (t-size-change)"),n(119,"br"),t()()(),i(120,"td",24)(121,"code",31),e(122,"EventEmitter"),t()(),i(123,"td",26),e(124,"-"),t(),i(125,"td",27)(126,"p"),e(127,"Evento emitido quando o tamanho do pane que possui "),i(128,"code"),e(129,"t-size"),t(),e(130," \xE9 modificada. Caso nenhum pane possua "),i(131,"code"),e(132,"t-size"),t(),e(133,`, o
evento n\xE3o ser\xE1 disparado.`),t(),i(134,"pre")(135,"code",11),e(136,'<thf-splitter-pane (t-size-change)="onSizeChange($event)">'),t()()()()()()()(),T(137,2),t(),i(138,"po-tab",32),T(139,3),t()()())},dependencies:[_,H,y,X,z],encapsulation:2});let d=l;return d})();var Nt=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Bt=["[overview]","[especificacao-before]","[especificacao-after]","[enums-before]","[enums-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],pt=(()=>{let l=class l{constructor(r){this.el=r}ngAfterViewInit(){this.accordions.forEach(r=>{setTimeout(()=>{r.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(r){setTimeout(()=>{let a=this.tabs.tabs.find(o=>o.elementRef.nativeElement.className===`docs-tab-${r}`);if(a){let o=a.elementRef.nativeElement;o.textContent.trim()!==""||o.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(x=>{let D=x.querySelector(".po-tab-button-label");D&&D?.textContent?.trim().toLowerCase()===r&&x.remove()}),o.remove(),a.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(x=>!x.hide)))}},100)}};l.\u0275fac=function(a){return new(a||l)(R(W))},l.\u0275cmp=b({type:l,selectors:[["api-thf-splitter"]],viewQuery:function(a,o){if(a&1&&(A(z,5),A(_,5)),a&2){let s;q(s=k())&&(o.tabs=s.first),q(s=k())&&(o.accordions=s)}},standalone:!1,ngContentSelectors:Bt,decls:326,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],["id","boas-pr\xE1ticas"],[1,"language-html"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean,","any"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ThfSplitterOrientation,","string"],[1,"language-typescript"],["p-label","Enums"],["p-label","ThfSplitterOrientation"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(a,o){a&1&&(U(Nt),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),T(4),t(),i(5,"po-tab",4),T(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfSplitterModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfSplitterComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O componente "),i(19,"code"),e(20,"thf-splitter"),t(),e(21,` \xE9 respons\xE1vel por dividir visualmente a tela em duas se\xE7\xF5es, com suporte a
redimensionamento entre elas. \xC9 ideal para estruturar interfaces com pain\xE9is laterais e conte\xFAdos principais de forma
flex\xEDvel.`),t(),i(22,"p"),e(23,"O redimensionamento \xE9 realizado por meio de um "),i(24,"em"),e(25,"trigger"),t(),e(26,` interativo, que pode ser manipulado com o mouse ou pelo
teclado, utilizando as teclas `),i(27,"code"),e(28,"\u2190"),t(),e(29," e "),i(30,"code"),e(31,"\u2192"),t(),e(32," na orienta\xE7\xE3o "),i(33,"code"),e(34,"horizontal"),t(),e(35,", e "),i(36,"code"),e(37,"\u2191"),t(),e(38," e "),i(39,"code"),e(40,"\u2193"),t(),e(41," na orienta\xE7\xE3o "),i(42,"code"),e(43,"vertical"),t(),e(44,". O "),i(45,"em"),e(46,"trigger"),t(),e(47," recebe foco ao navegar com "),i(48,"code"),e(49,"TAB"),t(),e(50,"."),t(),i(51,"p"),e(52,"Cada "),i(53,"code"),e(54,"pane"),t(),e(55," respeita limites de largura entre "),i(56,"strong"),e(57,"30% e 70%"),t(),e(58,". O "),i(59,"em"),e(60,"trigger"),t(),e(61,` ser\xE1 automaticamente bloqueado ao tentar
ultrapassar esses limites.`),t(),i(62,"h4",11),e(63,"Boas pr\xE1ticas"),t(),i(64,"ul")(65,"li"),e(66,"Evite usar o "),i(67,"code"),e(68,"thf-splitter"),t(),e(69," dentro de um modal ou componentes semelhantes que possam comprometer a usabilidade."),t()(),i(70,"pre")(71,"code",12),e(72,`<thf-splitter>
  <thf-splitter-pane [t-size]="'30%'">
    Conte\xFAdo do Painel Esquerdo
  </thf-splitter-pane>
  <thf-splitter-pane>
    Conte\xFAdo do Painel Direito (ocupa espa\xE7o restante)
  </thf-splitter-pane>
</thf-splitter>`),t()()(),i(73,"div",13)(74,"h4",14),e(75,"Seletor"),t(),i(76,"pre",15),e(77,`<thf-splitter
  t-disabled="boolean, any"
  (t-layout-change)="EventEmitter"
  t-orientation="ThfSplitterOrientation, string" >
</thf-splitter>
`),t()()(),i(78,"po-accordion-item",16)(79,"h4",17),e(80,"Propriedades"),t(),i(81,"table",18)(82,"tr",19)(83,"th",20),e(84,"Nome"),t(),i(85,"th",20),e(86,"Tipo"),t(),i(87,"th",20),e(88,"Padr\xE3o"),t(),i(89,"th",20),e(90,"Descri\xE7\xE3o"),t()(),i(91,"tr",21)(92,"td",22)(93,"div",23)(94,"span",24),e(95," t-disabled"),n(96,"br"),t()()(),i(97,"td",25)(98,"code",26),e(99,"boolean, any"),t()(),i(100,"td",27)(101,"p"),e(102,"false"),t()(),i(103,"td",28)(104,"p"),e(105,"Desabilita o redimensionamento entre os panes, ocultando a intera\xE7\xE3o via trigger."),t()()(),i(106,"tr",21)(107,"td",22)(108,"div",29)(109,"span",30),e(110," (t-layout-change)"),n(111,"br"),t()()(),i(112,"td",25)(113,"code",31),e(114,"EventEmitter"),t()(),i(115,"td",27),e(116,"-"),t(),i(117,"td",28)(118,"p"),e(119,"Evento emitido sempre que houver altera\xE7\xE3o de layout provocada por redimensionamento. Quando "),i(120,"code"),e(121,"t-disabled"),t(),e(122,` estiver
ativado, este evento n\xE3o ser\xE1 disparado.`),t(),i(123,"pre")(124,"code",12),e(125,'<thf-splitter (t-layout-change)="onLayoutChange($event)">'),t()()()(),i(126,"tr",21)(127,"td",22)(128,"div",23)(129,"span",24),e(130," t-orientation"),n(131,"br"),t()()(),i(132,"td",25)(133,"code",32),e(134,"ThfSplitterOrientation, string"),t()(),i(135,"td",27)(136,"p"),e(137,"'horizontal'"),t()(),i(138,"td",28)(139,"p"),e(140,`Define a orienta\xE7\xE3o dos pain\xE9is do splitter.
Valores aceitos: `),i(141,"code"),e(142,"'horizontal'"),t(),e(143," ou "),i(144,"code"),e(145,"'vertical'"),t(),e(146,"."),t(),i(147,"pre")(148,"code",12),e(149,'<thf-splitter t-orientation="vertical"> ...'),t()(),i(150,"p"),e(151,"ou"),t(),i(152,"pre")(153,"code",33),e(154,"orientation = ThfSplitterOrientation.Vertical;"),t()(),i(155,"pre")(156,"code",12),e(157,'<thf-splitter [t-orientation]="orientation"> ...'),t()()()()()()()(),T(158,2),t(),i(159,"po-tab",34),T(160,3),i(161,"po-container",5)(162,"po-accordion",6)(163,"po-accordion-item",35)(164,"h4",9)(165,"code"),e(166,"ThfSplitterOrientation"),t()(),i(167,"h4",17),e(168,"Propriedades"),t(),i(169,"table",18)(170,"tr",19)(171,"th",20),e(172,"Nome"),t(),i(173,"th",20),e(174,"Descri\xE7\xE3o"),t()(),i(175,"tr",21)(176,"td",22)(177,"div",23)(178,"span",24),e(179," Horizontal"),n(180,"br"),t()()(),i(181,"td",28)(182,"p"),e(183,"Divide o espa\xE7o na "),i(184,"strong"),e(185,"horizontal"),t(),e(186," (esquerda/direita)"),t()()(),i(187,"tr",21)(188,"td",22)(189,"div",23)(190,"span",24),e(191," Vertical"),n(192,"br"),t()()(),i(193,"td",28)(194,"p"),e(195,"Divide o espa\xE7o na "),i(196,"strong"),e(197,"vertical"),t(),e(198," (cima/baixo)"),t()()()()()()(),T(199,4),t(),i(200,"po-tab",36)(201,"po-container",5),T(202,5),i(203,"h3",37),e(204,"Tokens customiz\xE1veis"),t(),i(205,"p"),e(206,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(207,"blockquote")(208,"p"),e(209,"Para maiores informa\xE7\xF5es, acesse o guia "),i(210,"a",38),e(211,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(212,"."),t()(),i(213,"table")(214,"thead")(215,"tr")(216,"th"),e(217,"Propriedade"),t(),i(218,"th"),e(219,"Descri\xE7\xE3o"),t(),i(220,"th"),e(221,"Valor Padr\xE3o"),t()()(),i(222,"tbody")(223,"tr")(224,"td")(225,"strong"),e(226,"Splitter Track"),t()(),n(227,"td")(228,"td"),t(),i(229,"tr")(230,"td")(231,"code"),e(232,"--background-track"),t()(),i(233,"td"),e(234,"Cor de background do Track apresentado no Splitter"),t(),i(235,"td")(236,"code"),e(237,"var(--color-neutral-light-10)"),t()()(),i(238,"tr"),n(239,"td")(240,"td")(241,"td"),t(),i(242,"tr")(243,"td")(244,"strong"),e(245,"Splitter Trigger"),t()(),n(246,"td")(247,"td"),t(),i(248,"tr")(249,"td")(250,"code"),e(251,"--box-shadow"),t()(),i(252,"td"),e(253,"Sombra aplicado no bot\xE3o do trigger"),t(),i(254,"td")(255,"code"),e(256,"var(--shadow-sm)"),t()()(),i(257,"tr")(258,"td")(259,"code"),e(260,"--background-color"),t()(),i(261,"td"),e(262,"Cor de background"),t(),i(263,"td")(264,"code"),e(265,"var(--color-neutral-light-00)"),t()()(),i(266,"tr")(267,"td")(268,"code"),e(269,"--color"),t()(),i(270,"td"),e(271,"Cor do \xEDcone"),t(),i(272,"td")(273,"code"),e(274,"var(--color-action-default)"),t()()(),i(275,"tr")(276,"td")(277,"strong"),e(278,"Hover"),t()(),n(279,"td")(280,"td"),t(),i(281,"tr")(282,"td")(283,"code"),e(284,"--background-color-hover"),t()(),i(285,"td"),e(286,"Cor de background no estado hover"),t(),i(287,"td")(288,"code"),e(289,"var(--color-brand-01-lighter)"),t()()(),i(290,"tr")(291,"td")(292,"code"),e(293,"--color-hover"),t()(),i(294,"td"),e(295,"Cor do \xEDcone no estado hover"),t(),i(296,"td")(297,"code"),e(298,"var(--color-brand-01-darkest)"),t()()(),i(299,"tr")(300,"td")(301,"strong"),e(302,"Pressed"),t()(),n(303,"td")(304,"td"),t(),i(305,"tr")(306,"td")(307,"code"),e(308,"--background-color-pressed"),t()(),i(309,"td"),e(310,"Cor de background quando pressionada"),t(),i(311,"td")(312,"code"),e(313,"var(--color-brand-01-ligh)"),t()()(),i(314,"tr")(315,"td")(316,"code"),e(317,"--color-pressed"),t()(),i(318,"td"),e(319,"Cor de \xEDcone quando pressionado"),t(),i(320,"td")(321,"code"),e(322,"var(--color-brand-01-darkest)"),t()()()()()(),T(323,6),t(),i(324,"po-tab",39),T(325,7),t()()())},dependencies:[_,H,y,X,z],encapsulation:2});let d=l;return d})();var ct=(()=>{let l=class l{};l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=ne({type:l}),l.\u0275inj=ie({imports:[xe,ge]});let d=l;return d})();var Te=[{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",onBoardService:!1,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America"},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",onBoardService:!1,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps"},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",onBoardService:!1,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",onBoardService:!1,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",onBoardService:!0,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48998,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",onBoardService:!1,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",onBoardService:!1,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",onBoardService:!1,airline:"Aero M\xE9xico",status:"available",region:"Latin America"},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",onBoardService:!0,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",onBoardService:!1,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",onBoardService:!0,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",onBoardService:!0,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",onBoardService:!1,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",onBoardService:!0,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",onBoardService:!1,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",onBoardService:!1,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",onBoardService:!0,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",onBoardService:!1,airline:"LATAM",status:"reserved",region:"Latin America"}],ut=`export const DATA = ${JSON.stringify(Te,null,2)};`;function Wt(d,l){}function Ut(d,l){d&1&&V(0,Wt,0,0,"ng-template")}function Kt(d,l){if(d&1&&(i(0,"po-accordion-item",7),V(1,Ut,1,0,null,8),t()),d&2){let m=S();p(),c("ngTemplateOutlet",m.dynamicTemplate)}}function Jt(d,l){if(d&1&&n(0,"po-code-editor",9),d&2){let m=S();c("p-readonly",!0)("ngModel",m.htmlCode)("p-theme",m.themeActive===1?"vs-dark":"vs")}}function $t(d,l){if(d&1&&n(0,"po-code-editor",10),d&2){let m=S();c("p-readonly",!0)("p-theme",m.themeActive===1?"vs-dark":"vs")("ngModel",m.tsCode)}}function Zt(d,l){if(d&1&&n(0,"po-code-editor",10),d&2){let m=S();c("p-readonly",!0)("p-theme",m.themeActive===1?"vs-dark":"vs")("ngModel",m.serviceCode)}}function Xt(d,l){if(d&1&&n(0,"po-code-editor",10),d&2){let m=S();c("p-readonly",!0)("p-theme",m.themeActive===1?"vs-dark":"vs")("ngModel",m.othersCode==null?null:m.othersCode.body)}}var w=(()=>{let l=class l{constructor(r){this.sharedService=r,this.htmlCode="",this.marginTopClass="po-mt-3",this.properties=!1,this.serviceCode="",this.showOthersCodeButton=!1,this.showServiceButton=!1,this.tsCode="",this.buttons=[],this.selectedCode="html"}ngOnInit(){this.buttons=[{label:"HTML",selected:!0,action:()=>this.selectedCode="html"},{label:"TS",action:()=>this.selectedCode="ts"}],this.showServiceButton&&this.buttons.push({label:"Service",action:()=>this.selectedCode="service"}),this.showOthersCodeButton&&this.buttons.push({label:this.othersCode.label,action:()=>this.selectedCode="othersCode"}),this.sharedService.getThemeActive().subscribe(r=>{this.themeActive=r.type||0})}};l.\u0275fac=function(a){return new(a||l)(R(at))},l.\u0275cmp=b({type:l,selectors:[["app-code-accordion-doc"]],inputs:{dynamicTemplate:"dynamicTemplate",htmlCode:"htmlCode",marginTopClass:"marginTopClass",othersCode:"othersCode",properties:"properties",serviceCode:"serviceCode",showOthersCodeButton:"showOthersCodeButton",showServiceButton:"showServiceButton",tsCode:"tsCode"},standalone:!1,decls:10,vars:8,consts:[[3,"ngClass"],["p-label","Propriedades",4,"ngIf"],["p-label","Fontes"],[1,"po-pt-1"],["p-toggle","single","ngDefaultControl","",3,"ngModelChange","p-buttons","ngModel"],["class","po-pt-2","p-height","350","p-language","html","ngDefaultControl","",3,"p-readonly","ngModel","p-theme",4,"ngIf"],["class","po-pt-2","p-height","350","p-language","typescript","ngDefaultControl","",3,"p-readonly","p-theme","ngModel",4,"ngIf"],["p-label","Propriedades"],[4,"ngTemplateOutlet"],["p-height","350","p-language","html","ngDefaultControl","",1,"po-pt-2",3,"p-readonly","ngModel","p-theme"],["p-height","350","p-language","typescript","ngDefaultControl","",1,"po-pt-2",3,"p-readonly","p-theme","ngModel"]],template:function(a,o){a&1&&(i(0,"div",0)(1,"po-accordion"),V(2,Kt,2,1,"po-accordion-item",1),i(3,"po-accordion-item",2)(4,"div",3)(5,"po-button-group",4),g("ngModelChange",function(x){return v(o.selectedCode,x)||(o.selectedCode=x),x}),t(),V(6,Jt,1,3,"po-code-editor",5)(7,$t,1,3,"po-code-editor",6)(8,Zt,1,3,"po-code-editor",6)(9,Xt,1,3,"po-code-editor",6),t()()()()),a&2&&(c("ngClass",o.marginTopClass),p(2),c("ngIf",o.properties),p(3),c("p-buttons",o.buttons),h("ngModel",o.selectedCode),p(),c("ngIf",o.selectedCode==="html"),p(),c("ngIf",o.selectedCode==="ts"),p(),c("ngIf",o.selectedCode==="service"),p(),c("ngIf",o.selectedCode==="othersCode"))},dependencies:[je,ae,ze,Qe,B,J,_,H,Ze,Ue],encapsulation:2});let d=l;return d})();var Et=(()=>{let l=class l{constructor(){this.htmlCode=`<thf-grid
    [t-actions-filter]="true"
    [t-columns]="columnsTotalizador"
    [t-resizable]="true"
    [t-groupable]="true"
    [t-draggable]="true"
    [t-items]="itemsTotalizador"
    [t-selectable]="true"
    [t-show-densification-configuration]="true"
    [t-aggregates]="aggregatesDescriptor"
    [t-show-footer-aggregates]="true"
    [t-height]="450"
  />
  `,this.tsCode=`import { Component } from '@angular/core';
import { ThfAggregateDescriptor, ThfGridColumn } from '@totvs/thf-components';
import { DATA, DATA_STRING } from './data';
  
@Component({
  selector: 'app-thf-grid-aggregates-doc',
  templateUrl: './thf-grid-aggregates-doc.component.html',
  styleUrl: './thf-grid-aggregates-doc.component.css',
})
export class ThfGridAggregateDocComponent {
  columnsTotalizador: Array<ThfGridColumn> = [
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'available', color: 'color-11', label: 'Available' },
        { value: 'reserved', color: 'color-08', label: 'Reserved' },
        { value: 'closed', color: 'color-07', label: 'Closed' },
      ],
    },
    { property: 'region', label: 'Region' },
    { property: 'country', label: 'Country' },
    { property: 'destination', label: 'Destination' },
    { property: 'value', type: 'currency', label: 'Value', format: 'BRL' },
  ];

  aggregatesDescriptor: Array<ThfAggregateDescriptor> = [
    { field: 'value', aggregate: 'sum', label: 'Totalx' },
    { field: 'country', aggregate: 'count', label: 'Contagem' },
  ];
  itemsTotalizador = DATA;
}
  `,this.tsOthersCode={label:"Data",body:ut},this.columnsTotalizador=[{property:"status",label:"Status",type:"label",labels:[{value:"available",color:"color-11",label:"Available"},{value:"reserved",color:"color-08",label:"Reserved"},{value:"closed",color:"color-07",label:"Closed"}]},{property:"region",label:"Region"},{property:"country",label:"Country"},{property:"destination",label:"Destination"},{property:"value",type:"currency",label:"Value",format:"BRL"}],this.aggregatesDescriptor=[{field:"value",aggregate:"sum",label:"Total"},{field:"country",aggregate:"count",label:"Contagem"}],this.itemsTotalizador=Te}};l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid-aggregates-doc"]],standalone:!1,decls:6,vars:15,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-actions-filter","t-columns","t-resizable","t-groupable","t-draggable","t-items","t-selectable","t-show-densification-configuration","t-aggregates","t-show-footer-aggregates","t-height"],[3,"htmlCode","tsCode","othersCode","showOthersCodeButton"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Totalizador por Colunas"),t(),n(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),a&2&&(p(4),c("t-actions-filter",!0)("t-columns",o.columnsTotalizador)("t-resizable",!0)("t-groupable",!0)("t-draggable",!0)("t-items",o.itemsTotalizador)("t-selectable",!0)("t-show-densification-configuration",!0)("t-aggregates",o.aggregatesDescriptor)("t-show-footer-aggregates",!0)("t-height",450),p(),c("htmlCode",o.htmlCode)("tsCode",o.tsCode)("othersCode",o.tsOthersCode)("showOthersCodeButton",!0))},dependencies:[y,P,L,w],encapsulation:2});let d=l;return d})();var xt=(()=>{let l=class l{constructor(){this.htmlCode=`<thf-grid
  t-service-api="https://po-sample-api.onrender.com/v1/heroes"
  [t-columns]="column"
  [t-height]="400"
/>
  `,this.tsCode=`import { Component } from '@angular/core';
import { ThfGridColumn } from '@totvs/thf-components';
  
@Component({
  selector: 'app-thf-grid-basic-doc',
  templateUrl: './thf-grid-basic-doc.component.html',
  styleUrl: './thf-grid-basic-doc.component.css',
})
export class ThfGridBasicDocComponent {
  column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', visible: false },
    { property: 'label', label: 'Label', visible: false },
    { property: 'value', label: 'Code' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail', width: 100 },
  ];
}
  `,this.column=[{property:"id",label:"Id",visible:!1},{property:"label",label:"Label",visible:!1},{property:"value",label:"Code"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail",width:100}]}};l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid-basic-doc"]],standalone:!1,decls:6,vars:4,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/heroes",3,"t-columns","t-height"],[3,"htmlCode","tsCode"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Service"),t(),n(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),a&2&&(p(4),c("t-columns",o.column)("t-height",400),p(),c("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[y,P,L,w],encapsulation:2});let d=l;return d})();var ye=(()=>{let l=class l{constructor(r){this.httpClient=r}deleteItem(r,a,o){return this.httpClient.delete("https://po-sample-api.onrender.com/v1/people"+"/"+o)}};l.\u0275fac=function(a){return new(a||l)(De(Oe))},l.\u0275prov=we({token:l,factory:l.\u0275fac,providedIn:"root"});let d=l;return d})();var St=(()=>{let l=class l{constructor(r){this.serviceDeleteApi=r,this.htmlCode=`<thf-grid
    t-service-api="https://po-sample-api.onrender.com/v1/people"
    [t-action-delete]="true"
    [t-columns]="column"
    [t-height]="400"
    [t-literals]="literals"
    [t-selectable]="true"
    [t-service-delete-api]="serviceDeleteApi"
    (t-selected)="selectedItem($event)"
  />
  `,this.tsCode=`import { Component } from '@angular/core';
import { ThfGridColumn, ThfGridLiterals } from '@totvs/thf-components';
import { ThfDeleteService } from './thf-grid-delete-service-doc.service';
  
@Component({
  selector: 'app-thf-grid-delete-service-doc',
  templateUrl: './thf-grid-delete-service-doc.component.html',
  styleUrl: './thf-grid-delete-service-doc.component.css',
  providers: [ThfDeleteService],
})
export class ThfGridDeleteServiceDocComponent {
  literals!: ThfGridLiterals;
  column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', visible: false },
    { property: 'label', label: 'Label', visible: false },
    { property: 'name', label: 'Nome' },
    { property: 'cityName', label: 'Cidade' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail', width: 100 },
  ];

  constructor(protected serviceDeleteApi: ThfDeleteService) {}

  selectedItem(event: any) {
    this.literals = {
      bodyDelete: \`Tem certeza que deseja excluir \${event.name}?\`,
    };
  }
}
  `,this.serviceCode=`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ThfGridDeleteService } from '@totvs/thf-components';

import { Observable } from 'rxjs';
  
@Injectable({
  providedIn: 'root',
})
export class ThfDeleteService implements ThfGridDeleteService {
  constructor(private httpClient: HttpClient) {}

  deleteItem(
    selectedRow: any,
    filterParams?: any,
    keyValue?: any
  ): Observable<any> {
    const urlDelete = 'https://po-sample-api.onrender.com/v1/people';
    return this.httpClient.delete(urlDelete + '/' + keyValue);
  }
}
  `,this.column=[{property:"id",label:"Id",visible:!1},{property:"label",label:"Label",visible:!1},{property:"name",label:"Nome"},{property:"cityName",label:"Cidade"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail",width:100}]}selectedItem(r){this.literals={bodyDelete:"Tem certeza que deseja excluir "+r.name+"?"}}};l.\u0275fac=function(a){return new(a||l)(R(ye))},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid-delete-service-doc"]],standalone:!1,features:[Le([ye])],decls:6,vars:10,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/people",3,"t-selected","t-action-delete","t-columns","t-height","t-literals","t-selectable","t-service-delete-api"],[3,"htmlCode","tsCode","serviceCode","showServiceButton"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Grid Dele\xE7\xE3o com Servi\xE7o Customizado"),t(),n(3,"po-divider",1),i(4,"thf-grid",2),C("t-selected",function(x){return o.selectedItem(x)}),t(),n(5,"app-code-accordion-doc",3),t()),a&2&&(p(4),c("t-action-delete",!0)("t-columns",o.column)("t-height",400)("t-literals",o.literals)("t-selectable",!0)("t-service-delete-api",o.serviceDeleteApi),p(),c("htmlCode",o.htmlCode)("tsCode",o.tsCode)("serviceCode",o.serviceCode)("showServiceButton",!0))},dependencies:[y,P,L,w],encapsulation:2});let d=l;return d})();var ni=()=>[];function oi(d,l){if(d&1){let m=M();i(0,"div",7)(1,"po-container",8)(2,"po-checkbox-group",9),g("ngModelChange",function(a){u(m);let o=S();return v(o.columnsName,a)||(o.columnsName=a),E(a)}),C("p-change",function(){u(m);let a=S();return E(a.updateColumns())}),t()(),i(3,"po-container",8)(4,"po-checkbox-group",10),g("ngModelChange",function(a){u(m);let o=S();return v(o.selection,a)||(o.selection=a),E(a)}),C("p-change",function(){u(m);let a=S();return E(a.changeSelectionOptions())}),t()(),i(5,"po-container",8)(6,"po-checkbox-group",11),g("ngModelChange",function(a){u(m);let o=S();return v(o.otherProperties,a)||(o.otherProperties=a),E(a)}),C("p-change",function(){u(m);let a=S();return E(a.changeOtherProperties())}),t()(),i(7,"po-container",8)(8,"po-radio-group",12),g("ngModelChange",function(a){u(m);let o=S();return v(o.spacing,a)||(o.spacing=a),E(a)}),t()(),i(9,"po-container",8)(10,"po-radio-group",13),g("ngModelChange",function(a){u(m);let o=S();return v(o.componentsSize,a)||(o.componentsSize=a),E(a)}),t(),i(11,"po-radio-group",14),g("ngModelChange",function(a){u(m);let o=S();return v(o.filterinputModeValue,a)||(o.filterinputModeValue=a),E(a)}),t()(),i(12,"po-container",15)(13,"po-number",16),g("ngModelChange",function(a){u(m);let o=S();return v(o.minResizableValue,a)||(o.minResizableValue=a),E(a)}),t(),i(14,"po-number",17),g("ngModelChange",function(a){u(m);let o=S();return v(o.maxResizableValue,a)||(o.maxResizableValue=a),E(a)}),t()(),i(15,"po-container",15)(16,"po-number",18),g("ngModelChange",function(a){u(m);let o=S();return v(o.height,a)||(o.height=a),E(a)}),t(),i(17,"po-number",19),g("ngModelChange",function(a){u(m);let o=S();return v(o.maxHeight,a)||(o.maxHeight=a),E(a)}),t(),i(18,"po-number",20),g("ngModelChange",function(a){u(m);let o=S();return v(o.minHeight,a)||(o.minHeight=a),E(a)}),t()(),i(19,"po-container",15)(20,"po-textarea",21),g("ngModelChange",function(a){u(m);let o=S();return v(o.literals,a)||(o.literals=a),E(a)}),C("p-change-model",function(){u(m);let a=S();return E(a.changeLiterals())}),t()(),i(21,"po-container",15)(22,"po-textarea",22),g("ngModelChange",function(a){u(m);let o=S();return v(o.sort,a)||(o.sort=a),E(a)}),C("p-change-model",function(){u(m);let a=S();return E(a.changeSort())}),t()(),i(23,"po-container",23)(24,"div",24)(25,"po-checkbox-group",25),g("ngModelChange",function(a){u(m);let o=S();return v(o.pagination,a)||(o.pagination=a),E(a)}),C("p-change",function(){u(m);let a=S();return E(a.changePagination())}),t(),i(26,"po-textarea",26),g("ngModelChange",function(a){u(m);let o=S();return v(o.optionsPage,a)||(o.optionsPage=a),E(a)}),C("p-change-model",function(){u(m);let a=S();return E(a.changeOptionsPage())}),t()()()(),i(27,"div",27)(28,"po-button",28),C("p-click",function(){u(m);let a=S();return E(a.restore())}),t()()}if(d&2){let m=S();p(2),h("ngModel",m.columnsName),c("p-options",m.columnsOptions),p(2),c("p-options",m.selectionOptions),h("ngModel",m.selection),p(2),c("p-columns",4)("p-options",m.otherPropertiesOptions),h("ngModel",m.otherProperties),p(2),c("p-columns",4)("p-options",m.spacingOptions),h("ngModel",m.spacing),p(2),h("ngModel",m.componentsSize),c("p-options",m.componentsSizeOptions),p(),h("ngModel",m.filterinputModeValue),c("p-options",m.filterModeOptions),p(2),h("ngModel",m.minResizableValue),c("disabled",!m.resizable),p(),h("ngModel",m.maxResizableValue),c("disabled",!m.resizable),p(2),h("ngModel",m.height),p(),h("ngModel",m.maxHeight),p(),h("ngModel",m.minHeight),p(2),h("ngModel",m.literals),p(2),h("ngModel",m.sort),p(3),c("p-options",m.paginationOptions),h("ngModel",m.pagination),p(),h("ngModel",m.optionsPage),c("disabled",!m.pagination.includes("pageable"))}}var bt=(()=>{let l=class l{constructor(r){this.poNotification=r,this.htmlCode=`<po-container>
  <span class="po-font-text-large-bold">Labs</span>
  <po-divider class="po-divider-mb-0"></po-divider>
  <thf-grid
    [t-action-delete]="selection.includes('actionDelete')"
    [t-action-edit]="selection.includes('actionEdit')"
    [t-action-excel]="selection.includes('actionExcel')"
    [t-action-pdf]="selection.includes('actionPdf')"
    [t-actions]="actions || []"
    [t-actions-filter]="otherProperties.includes('actionsFilter')"
    [t-actions-right]="otherProperties.includes('actionRight')"
    [t-columns]="columns"
    [t-components-size]="componentsSize"
    [t-draggable]="otherProperties.includes('draggable')"
    [t-filter-input-mode]="filterinputModeValue"
    [t-groupable]="otherProperties.includes('groupable')"
    [t-height]="height"
    [t-max-height]="maxHeight"
    [t-min-height]="minHeight"
    [t-hide-columns-manager]="otherProperties.includes('hideColumnsManager')"
    [t-hide-action-fixed-columns]="
      otherProperties.includes('hideActionFixedColumns')
    "
    [t-hide-batch-actions]="selection.includes('hideBatchActions')"
    [t-hide-select-all]="selection.includes('hideSelectAll')"
    [t-hide-table-search]="otherProperties.includes('hideTableSearch')"
    [t-literals]="literalsCustom"
    [t-loading]="otherProperties.includes('loading')"
    [t-max-resizable-width]="maxResizableValue"
    [t-min-resizable-width]="minResizableValue"
    [t-options-paging]="customOptionsPage"
    [t-pageable]="pagination.includes('pageable')"
    t-param-delete-api="value"
    [t-resizable]="resizable"
    [t-selectable]="selection.includes('selectable')"
    [t-selectable-entire-line]="selection.includes('selectableEntireLine')"
    [t-show-densification-configuration]="
      otherProperties.includes('showDensificationConfiguration')
    "
    [t-show-draggable-icon]="otherProperties.includes('showDraggableIcon')"
    [t-show-more-disabled]="pagination.includes('showMoreDisabled')"
    [t-single-select]="selection.includes('singleSelect')"
    [t-sort]="customSort"
    [t-sortable]="otherProperties.includes('sortable')"
    [t-spacing]="spacing"
    [t-striped]="otherProperties.includes('striped')"
    [t-text-wrap]="otherProperties.includes('textWrap')"
    [t-virtual-scroll]="otherProperties.includes('virtualScroll')"
    [t-items]="items"
    (t-change-fixed-columns)="changeEvent('t-change-fixed-columns')"
    (t-change-order-column)="changeEvent('t-change-order-column')"
    (t-change-page-size)="changeEvent('t-change-page-size')"
    (t-change-sort-column)="changeEvent('t-change-sort-column')"
    (t-change-visible-columns)="changeEvent('t-change-visible-columns')"
    (t-change-options-column-manager)="
      changeEvent('t-change-options-column-manager')
    "
    (t-changed-density)="changeEvent('t-changed-density')"
    (t-delete-item)="changeEvent('t-delete-item')"
    (t-delete-items)="changeEvent('t-delete-items')"
    (t-delete-item-error)="changeEvent('t-delete-item-error')"
    (t-filter-item-error)="changeEvent('t-filter-item-error')"
    (t-restore-column-manager)="changeEvent('t-restore-column-manager')"
    (t-selected)="changeEvent('t-selected')"
    (t-all-selected)="changeEvent('t-all-selected')"
    (t-unselected)="changeEvent('t-unselected')"
    (t-all-unselected)="changeEvent('t-all-unselected')"
    (t-change-group)="changeEvent('t-change-group')"
    (t-rows-selected)="changeEvent('t-rows-selected')"
  />

  <po-container class="po-mt-2" style="display: flex">
    <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
  </po-container>

  <div class="po-row po-mt-2 po-mb-2" style="display: block">
      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="columnsName"
          [(ngModel)]="columnsName"
          p-columns="4"
          p-label="Columns"
          [p-options]="columnsOptions"
          (p-change)="updateColumns()"
        >
        </po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="selection"
          p-label="Selection"
          p-columns="4"
          [p-options]="selectionOptions"
          [(ngModel)]="selection"
          (p-change)="changeSelectionOptions()"
        ></po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="otherProperties"
          p-label="Other Properties"
          [p-columns]="4"
          [p-options]="otherPropertiesOptions"
          [(ngModel)]="otherProperties"
          (p-change)="changeOtherProperties()"
        >
        </po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-radio-group
          name="spacing"
          p-help="Para aplicar o tamanho Extra Small, defina o n\xEDvel de acessibilidade como AA no navbar."
          p-label="Spacing"
          [p-columns]="4"
          [p-options]="spacingOptions"
          [(ngModel)]="spacing"
        ></po-radio-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-radio-group
          class="po-lg-6"
          name="componentsSize"
          [(ngModel)]="componentsSize"
          p-label="Components size"
          p-help="Para aplicar o tamanho small, defina o n\xEDvel de acessibilidade como AA no navbar."
          [p-options]="componentsSizeOptions"
        >
        </po-radio-group>

        <po-radio-group
          class="po-lg-6"
          name="filterinputModeValue"
          p-label="Filter Input Mode"
          [(ngModel)]="filterinputModeValue"
          [p-options]="filterModeOptions"
        ></po-radio-group>
      </po-container>

      <po-container class="po-mb-2 po-lg-6" style="display: flex">
        <po-number
          class="po-md-6"
          p-label="Min Resizable Width"
          [(ngModel)]="minResizableValue"
          [disabled]="!resizable"
        ></po-number>
        <po-number
          class="po-md-6"
          p-label="Max Resizable Width"
          [(ngModel)]="maxResizableValue"
          [disabled]="!resizable"
        ></po-number>
      </po-container>

      <po-container class="po-mb-2 po-lg-6" style="display: flex">
        <po-number
          class="po-md-6 po-lg-4"
          p-label="Height"
          [(ngModel)]="height"
        ></po-number>
        <po-number
          class="po-md-6 po-lg-4"
          p-label="Max Height"
          [(ngModel)]="maxHeight"
        ></po-number>
        <po-number
          class="po-md-6 po-lg-4"
          p-label="Min Height"
          [(ngModel)]="minHeight"
        ></po-number>
      </po-container>

      <po-container class="po-mb-2 po-lg-6" style="display: flex">
        <po-textarea
          name="literals"
          p-label="Literals"
          p-help='{"noData": "Sem dados a serem exibidos"}'
          [(ngModel)]="literals"
          (p-change-model)="changeLiterals()"
        ></po-textarea>
      </po-container>

      <po-container class="po-mb-2 po-lg-6" style="display: flex">
        <po-textarea
          name="sort"
          p-label="Sort"
          p-help='[{ "field":"name", "dir":"asc" }]'
          [(ngModel)]="sort"
          (p-change-model)="changeSort()"
        ></po-textarea>
      </po-container>

      <po-container class="po-mb-2 po-lg-12" style="display: flex">
        <div style="display: flex; flex-wrap: wrap">
          <po-checkbox-group
            class="po-lg-6"
            name="pagination"
            p-label="Pagination"
            [p-options]="paginationOptions"
            [(ngModel)]="pagination"
            (p-change)="changePagination()"
          ></po-checkbox-group>

          <po-textarea
            class="po-lg-6"
            name="optionsPage"
            p-label="Options Page"
            p-help='[{ "value":"25", "label":"25" }, { "value":"50", "label":"50" }]'
            [(ngModel)]="optionsPage"
            (p-change-model)="changeOptionsPage()"
            [disabled]="!pagination.includes('pageable')"
          ></po-textarea>
        </div>
      </po-container>
    </div>

    <div class="po-row">
      <po-button
        class="po-lg-3 po-md-6"
        p-label="Restore"
        (p-click)="restore()"
      >
      </po-button>
    </div>
</po-container>
`,this.tsCode=`import { Component } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoNotificationService,
  PoRadioGroupOption,
} from '@po-ui/ng-components';
import {
  ThfColumnSpacing,
  ThfGridColumn,
  ThfGridColumnSort,
  ThfGridLiterals,
  ThfTableAction,
} from '@totvs/thf-components';
import { ThfGridOptionPaging } from '@totvs/thf-components/lib/components/thf-grid-lookup/thf-grid/interfaces/thf-grid-option-paging.interface';

@Component({
  selector: 'app-thf-grid-labs-doc',
  templateUrl: './thf-grid-labs-doc.component.html',
  styleUrls: ['./thf-grid-labs-doc.component.css'],
})
export class ThfGridLabsDocComponent {
  actions: Array<ThfTableAction> | undefined = undefined;
  columnsName: Array<string> = ['id', 'name', 'birthdate', 'email'];
  componentsSize: string = 'medium';
  customOptionsPage: Array<ThfGridOptionPaging> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 50, label: '50' },
    { value: 100, label: '100' },
    { value: 1000, label: '1000' }
  ];
  customSort: Array<ThfGridColumnSort> = [
    {
      field: '',
      dir: 'asc'
    }
  ];
  event: string = '';
  filterinputModeValue: string = 'basic';
  height = 400;
  minHeight = undefined;
  maxHeight = undefined;
  literals: string = '';
  literalsCustom: ThfGridLiterals = {};
  maxResizableValue: number = 300;
  minResizableValue: number = 10;
  optionsPage: string = \`[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]\`;
  pagination: Array<string> = [];
  properties: Array<string> = [];
  resizable: boolean = false;
  selection: Array<string> = ['selectableEntireLine'];
  sort: string = '[{"field": "", "dir": "asc"}]';
  spacing: ThfColumnSpacing = ThfColumnSpacing.Medium;
  otherProperties: Array<string> = ['actionsFilter', 'draggable', 'groupable', 'sortable', 'striped', 'virtualScroll'];

  customAction: Array<ThfTableAction> = [
    {
      label: '',
      action: (e: any) => {
        this.poNotification.information(\`\${e.id} - \${e.name}\`);
      },
      icon: 'ICON_MENU_OPEN',
      fixed: true
    }
  ];

  componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  selectionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Selectable', value: 'selectable' },
    { label: 'Single', value: 'singleSelect', disabled: true },
    { label: 'Entire Line', value: 'selectableEntireLine', disabled: true },
    { label: 'Hide Select All', value: 'hideSelectAll', disabled: true },
    { label: 'Action Delete', value: 'actionDelete', disabled: true },
    { label: 'Action Edit', value: 'actionEdit', disabled: true },
    { label: 'Action Excel', value: 'actionExcel', disabled: true },
    { label: 'Action PDF', value: 'actionPdf', disabled: true },
    { label: 'Hide Batch Actions', value: 'hideBatchActions', disabled: true }
  ];
  spacingOptions: Array<PoRadioGroupOption> = [
    { label: 'extraSmall', value: ThfColumnSpacing.ExtraSmall },
    { label: 'Small', value: ThfColumnSpacing.Small },
    { label: 'Medium', value: ThfColumnSpacing.Medium },
    { label: 'Large', value: ThfColumnSpacing.Large }
  ];
  filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Basic', value: 'basic' },
    { label: 'Service', value: 'service' }
  ];
  otherPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Actions Filter', value: 'actionsFilter' },
    { label: 'Action Right', value: 'actionRight' },
    { label: 'Draggable', value: 'draggable' },
    { label: 'Groupable', value: 'groupable' },
    { label: 'Hide Columns Manager', value: 'hideColumnsManager' },
    { label: 'Hide Actions Fixed Columns', value: 'hideActionFixedColumns' },
    { label: 'Hide Table Search', value: 'hideTableSearch' },
    { label: 'Loading', value: 'loading' },
    { label: 'Resizable', value: 'resizable' },
    {
      label: 'Show Densification Configuration',
      value: 'showDensificationConfiguration'
    },
    { label: 'Show Draggable Icon', value: 'showDraggableIcon' },
    { label: 'Sortable', value: 'sortable' },
    { label: 'Striped', value: 'striped' },
    { label: 'Text Wrap', value: 'textWrap', disabled: false },
    { label: 'Virtual Scroll', value: 'virtualScroll' }
  ];
  paginationOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Pageable', value: 'pageable' },
    { label: 'Show More Disabled', value: 'showMoreDisabled', disabled: false }
  ];

  items = [
    {
      id: 1,
      name: 'Jo\xE3o Silva',
      birthdate: '1990-05-15',
      lastLogin: '2024-02-14T15:30:00Z',
      active: true,
      email: 'joao.silva@example.com'
    },
    {
      id: 2,
      name: 'Maria Souza',
      birthdate: '1985-10-23',
      lastLogin: '2024-02-13T08:45:00Z',
      active: false,
      email: 'maria.souza@example.com'
    },
    {
      id: 3,
      name: 'Carlos Almeida',
      birthdate: '1998-07-09',
      lastLogin: '2024-02-14T20:15:00Z',
      active: true,
      email: 'carlos.almeida@example.com'
    },
    {
      id: 4,
      name: 'Fernanda Costa',
      birthdate: '1992-03-12',
      lastLogin: '2024-02-12T18:00:00Z',
      active: false,
      email: 'fernanda.costa@example.com'
    },
    {
      id: 5,
      name: 'Ricardo Lima',
      birthdate: '1980-11-30',
      lastLogin: '2024-02-11T07:25:00Z',
      active: true,
      email: 'ricardo.lima@example.com'
    },
    {
      id: 6,
      name: 'Ana Pereira',
      birthdate: '1995-09-18',
      lastLogin: '2024-02-10T14:10:00Z',
      active: true,
      email: 'ana.pereira@example.com'
    },
    {
      id: 7,
      name: 'Pedro Henrique',
      birthdate: '1993-06-25',
      lastLogin: '2024-02-09T12:30:00Z',
      active: false,
      email: 'pedro.henrique@example.com'
    },
    {
      id: 8,
      name: 'Beatriz Ramos',
      birthdate: '1999-04-03',
      lastLogin: '2024-02-08T09:15:00Z',
      active: true,
      email: 'beatriz.ramos@example.com'
    },
    {
      id: 9,
      name: 'Lucas Oliveira',
      birthdate: '1987-07-22',
      lastLogin: '2024-02-07T16:45:00Z',
      active: false,
      email: 'lucas.oliveira@example.com'
    },
    {
      id: 10,
      name: 'Juliana Martins',
      birthdate: '1996-01-05',
      lastLogin: '2024-02-06T11:00:00Z',
      active: true,
      email: 'juliana.martins@example.com'
    },
    {
      id: 11,
      name: 'Eduardo Nunes',
      birthdate: '1982-08-17',
      lastLogin: '2024-02-05T17:20:00Z',
      active: false,
      email: 'eduardo.nunes@example.com'
    },
    {
      id: 12,
      name: 'Camila Ferreira',
      birthdate: '2000-12-29',
      lastLogin: '2024-02-04T13:40:00Z',
      active: true,
      email: 'camila.ferreira@example.com'
    }
  ];

  columns: Array<ThfGridColumn> = [
    { property: 'id', label: 'Number' },
    { property: 'name', label: 'Text' },
    { property: 'birthdate', label: 'Date', type: 'date' },
    {
      property: 'email',
      label: 'Link',
      type: 'link',
      action: this.openEmail.bind(this)
    }
  ];

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Number' },
    { value: 'name', label: 'Text' },
    { value: 'birthdate', label: 'Date' },
    { value: 'lastLogin', label: 'DateTime' },
    { value: 'active', label: 'Boolean' },
    { value: 'email', label: 'Link' }
  ];

  private readonly columnsDefinition: any = {
    id: <ThfGridColumn>{ property: 'id', label: 'Number' },
    name: <ThfGridColumn>{ property: 'name', label: 'Text' },
    birthdate: <ThfGridColumn>{
      property: 'birthdate',
      label: 'Date',
      type: 'date'
    },
    lastLogin: <ThfGridColumn>{
      property: 'lastLogin',
      label: 'DateTime',
      type: 'dateTime'
    },
    active: <ThfGridColumn>{ property: 'active', label: 'Boolean' },
    email: <ThfGridColumn>{
      property: 'email',
      label: 'Link',
      type: 'link',
      action: this.openEmail.bind(this)
    }
  };

  constructor(private readonly poNotification: PoNotificationService) {}

  ngAfterViewInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  changeLiterals() {
    try {
      this.literalsCustom = JSON.parse(this.literals);
    } catch {
      this.literalsCustom = {};
    }
  }

  changeOptionsPage() {
    try {
      this.customOptionsPage = JSON.parse(this.optionsPage);
    } catch {
      this.customOptionsPage = [
        { value: 10, label: '10' },
        { value: 20, label: '20' },
        { value: 50, label: '50' },
        { value: 100, label: '100' },
        { value: 1000, label: '1000' }
      ];
    }
  }

  changeOtherProperties() {
    this.actions = this.otherProperties.includes('actions') ? this.customAction : [];

    const isVirtualScrollEnabled = this.otherProperties.includes('virtualScroll');
    const isResizableEnabled = this.otherProperties.includes('resizable');

    this.otherPropertiesOptions = this.otherPropertiesOptions.map(option => {
      if (option.value === 'textWrap') {
        return { ...option, disabled: isVirtualScrollEnabled };
      }
      return option;
    });

    if (isVirtualScrollEnabled && this.otherProperties.includes('textWrap')) {
      this.otherProperties = this.otherProperties.filter(prop => prop !== 'textWrap');
    }

    this.resizable = isResizableEnabled;
  }

  changePagination() {
    const pageable = this.pagination.includes('pageable');

    this.paginationOptions[1].disabled = !pageable;
    this.paginationOptions = [...this.paginationOptions];
  }

  changeSelectionOptions() {
    const selectable = this.selection.includes('selectable');

    this.selectionOptions[1].disabled = !selectable;
    this.selectionOptions[2].disabled = !selectable;
    this.selectionOptions[3].disabled = !selectable;
    this.selectionOptions[4].disabled = !selectable;
    this.selectionOptions[5].disabled = !selectable;
    this.selectionOptions[6].disabled = !selectable;
    this.selectionOptions[7].disabled = !selectable;
    this.selectionOptions[8].disabled = !selectable;
    this.selectionOptions = [...this.selectionOptions];
  }

  changeSort() {
    try {
      this.customSort = JSON.parse(this.sort);
    } catch {
      this.customSort = [
        {
          field: '',
          dir: 'asc'
        }
      ];
    }
  }

  openEmail(email: string) {
    window.open(\`mailto:\${email}\`, '_blank');
  }

  restore() {
    this.actions = undefined;
    this.columnsName = ['id', 'name', 'birthdate', 'email'];
    this.componentsSize = 'medium';
    this.event = '';
    this.filterinputModeValue = 'basic';
    this.literals = '';
    this.literalsCustom = {};
    this.maxResizableValue = 300;
    this.minResizableValue = 10;
    this.height = 400;
    this.minHeight = undefined;
    this.maxHeight = undefined;
    this.optionsPage = \`[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]\`;
    this.pagination = [];
    this.properties = [];
    this.resizable = false;
    this.selection = ['selectableEntireLine'];
    this.sort = '[{"field": "", "dir": "asc"}]';
    this.spacing = ThfColumnSpacing.Medium;
    this.otherProperties = ['actionsFilter', 'draggable', 'groupable', 'sortable', 'striped', 'virtualScroll'];

    this.updateColumns();
    this.changeLiterals();
    this.changeSort();
    this.changePagination();
    this.changeSelectionOptions();
    this.changeOtherProperties();
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach(column => this.columns.push(this.columnsDefinition[column]));
  }
}
  `,this.actions=void 0,this.columnsName=["id","name","birthdate","email"],this.componentsSize="medium",this.customOptionsPage=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"},{value:1e3,label:"1000"}],this.customSort=[{field:"",dir:"asc"}],this.event="",this.filterinputModeValue="basic",this.height=400,this.minHeight=void 0,this.maxHeight=void 0,this.literals="",this.literalsCustom={},this.maxResizableValue=300,this.minResizableValue=10,this.optionsPage='[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]',this.pagination=[],this.properties=[],this.resizable=!1,this.selection=["selectableEntireLine"],this.sort='[{"field": "", "dir": "asc"}]',this.spacing=te.Medium,this.otherProperties=["actionsFilter","draggable","groupable","sortable","striped","virtualScroll"],this.customAction=[{label:"",action:a=>{this.poNotification.information(`${a.id} - ${a.name}`)},icon:"ICON_MENU_OPEN",fixed:!0}],this.componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Single",value:"singleSelect",disabled:!0},{label:"Entire Line",value:"selectableEntireLine",disabled:!0},{label:"Hide Select All",value:"hideSelectAll",disabled:!0},{label:"Action Delete",value:"actionDelete",disabled:!0},{label:"Action Edit",value:"actionEdit",disabled:!0},{label:"Action Excel",value:"actionExcel",disabled:!0},{label:"Action PDF",value:"actionPdf",disabled:!0},{label:"Hide Batch Actions",value:"hideBatchActions",disabled:!0}],this.spacingOptions=[{label:"extraSmall",value:te.ExtraSmall},{label:"Small",value:te.Small},{label:"Medium",value:te.Medium},{label:"Large",value:te.Large}],this.filterModeOptions=[{label:"Basic",value:"basic"},{label:"Service",value:"service"}],this.otherPropertiesOptions=[{label:"Actions",value:"actions"},{label:"Actions Filter",value:"actionsFilter"},{label:"Action Right",value:"actionRight"},{label:"Draggable",value:"draggable"},{label:"Groupable",value:"groupable"},{label:"Hide Columns Manager",value:"hideColumnsManager"},{label:"Hide Actions Fixed Columns",value:"hideActionFixedColumns"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Loading",value:"loading"},{label:"Resizable",value:"resizable"},{label:"Show Densification Configuration",value:"showDensificationConfiguration"},{label:"Show Draggable Icon",value:"showDraggableIcon"},{label:"Sortable",value:"sortable"},{label:"Striped",value:"striped"},{label:"Text Wrap",value:"textWrap",disabled:!1},{label:"Virtual Scroll",value:"virtualScroll"}],this.paginationOptions=[{label:"Pageable",value:"pageable"},{label:"Show More Disabled",value:"showMoreDisabled",disabled:!1}],this.items=[{id:1,name:"Jo\xE3o Silva",birthdate:"1990-05-15",lastLogin:"2024-02-14T15:30:00Z",active:!0,email:"joao.silva@example.com"},{id:2,name:"Maria Souza",birthdate:"1985-10-23",lastLogin:"2024-02-13T08:45:00Z",active:!1,email:"maria.souza@example.com"},{id:3,name:"Carlos Almeida",birthdate:"1998-07-09",lastLogin:"2024-02-14T20:15:00Z",active:!0,email:"carlos.almeida@example.com"},{id:4,name:"Fernanda Costa",birthdate:"1992-03-12",lastLogin:"2024-02-12T18:00:00Z",active:!1,email:"fernanda.costa@example.com"},{id:5,name:"Ricardo Lima",birthdate:"1980-11-30",lastLogin:"2024-02-11T07:25:00Z",active:!0,email:"ricardo.lima@example.com"},{id:6,name:"Ana Pereira",birthdate:"1995-09-18",lastLogin:"2024-02-10T14:10:00Z",active:!0,email:"ana.pereira@example.com"},{id:7,name:"Pedro Henrique",birthdate:"1993-06-25",lastLogin:"2024-02-09T12:30:00Z",active:!1,email:"pedro.henrique@example.com"},{id:8,name:"Beatriz Ramos",birthdate:"1999-04-03",lastLogin:"2024-02-08T09:15:00Z",active:!0,email:"beatriz.ramos@example.com"},{id:9,name:"Lucas Oliveira",birthdate:"1987-07-22",lastLogin:"2024-02-07T16:45:00Z",active:!1,email:"lucas.oliveira@example.com"},{id:10,name:"Juliana Martins",birthdate:"1996-01-05",lastLogin:"2024-02-06T11:00:00Z",active:!0,email:"juliana.martins@example.com"},{id:11,name:"Eduardo Nunes",birthdate:"1982-08-17",lastLogin:"2024-02-05T17:20:00Z",active:!1,email:"eduardo.nunes@example.com"},{id:12,name:"Camila Ferreira",birthdate:"2000-12-29",lastLogin:"2024-02-04T13:40:00Z",active:!0,email:"camila.ferreira@example.com"}],this.columns=[{property:"id",label:"Number"},{property:"name",label:"Text"},{property:"birthdate",label:"Date",type:"date"},{property:"email",label:"Link",type:"link",action:this.openEmail.bind(this)}],this.columnsOptions=[{value:"id",label:"Number"},{value:"name",label:"Text"},{value:"birthdate",label:"Date"},{value:"lastLogin",label:"DateTime"},{value:"active",label:"Boolean"},{value:"email",label:"Link"}],this.columnsDefinition={id:{property:"id",label:"Number"},name:{property:"name",label:"Text"},birthdate:{property:"birthdate",label:"Date",type:"date"},lastLogin:{property:"lastLogin",label:"DateTime",type:"dateTime"},active:{property:"active",label:"Boolean"},email:{property:"email",label:"Link",type:"link",action:this.openEmail.bind(this)}}}ngAfterViewInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.literalsCustom=JSON.parse(this.literals)}catch{this.literalsCustom={}}}changeOptionsPage(){try{this.customOptionsPage=JSON.parse(this.optionsPage)}catch{this.customOptionsPage=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"},{value:1e3,label:"1000"}]}}changeOtherProperties(){this.actions=this.otherProperties.includes("actions")?this.customAction:[];let r=this.otherProperties.includes("virtualScroll"),a=this.otherProperties.includes("resizable");this.otherPropertiesOptions=this.otherPropertiesOptions.map(o=>o.value==="textWrap"?ue(ce({},o),{disabled:r}):o),r&&this.otherProperties.includes("textWrap")&&(this.otherProperties=this.otherProperties.filter(o=>o!=="textWrap")),this.resizable=a}changePagination(){let r=this.pagination.includes("pageable");this.paginationOptions[1].disabled=!r,this.paginationOptions=[...this.paginationOptions]}changeSelectionOptions(){let r=this.selection.includes("selectable");this.selectionOptions[1].disabled=!r,this.selectionOptions[2].disabled=!r,this.selectionOptions[3].disabled=!r,this.selectionOptions[4].disabled=!r,this.selectionOptions[5].disabled=!r,this.selectionOptions[6].disabled=!r,this.selectionOptions[7].disabled=!r,this.selectionOptions[8].disabled=!r,this.selectionOptions=[...this.selectionOptions]}changeSort(){try{this.customSort=JSON.parse(this.sort)}catch{this.customSort=[{field:"",dir:"asc"}]}}openEmail(r){window.open(`mailto:${r}`,"_blank")}restore(){this.actions=void 0,this.columnsName=["id","name","birthdate","email"],this.componentsSize="medium",this.event="",this.filterinputModeValue="basic",this.literals="",this.literalsCustom={},this.maxResizableValue=300,this.minResizableValue=10,this.height=400,this.minHeight=void 0,this.maxHeight=void 0,this.optionsPage='[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]',this.pagination=[],this.properties=[],this.resizable=!1,this.selection=["selectableEntireLine"],this.sort='[{"field": "", "dir": "asc"}]',this.spacing=te.Medium,this.otherProperties=["actionsFilter","draggable","groupable","sortable","striped","virtualScroll"],this.updateColumns(),this.changeLiterals(),this.changeSort(),this.changePagination(),this.changeSelectionOptions(),this.changeOtherProperties()}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}};l.\u0275fac=function(a){return new(a||l)(R(et))},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid-labs-doc"]],standalone:!1,decls:10,vars:46,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-param-delete-api","value",3,"t-change-fixed-columns","t-change-order-column","t-change-page-size","t-change-sort-column","t-change-visible-columns","t-change-options-column-manager","t-changed-density","t-delete-item","t-delete-items","t-delete-item-error","t-filter-item-error","t-restore-column-manager","t-selected","t-all-selected","t-unselected","t-all-unselected","t-change-group","t-rows-selected","t-action-delete","t-action-edit","t-action-excel","t-action-pdf","t-actions","t-actions-filter","t-actions-right","t-components-size","t-columns","t-draggable","t-filter-input-mode","t-groupable","t-height","t-max-height","t-min-height","t-hide-columns-manager","t-hide-action-fixed-columns","t-hide-batch-actions","t-hide-select-all","t-hide-table-search","t-literals","t-loading","t-max-resizable-width","t-min-resizable-width","t-options-paging","t-pageable","t-resizable","t-selectable","t-selectable-entire-line","t-show-densification-configuration","t-show-draggable-icon","t-show-more-disabled","t-single-select","t-sort","t-sortable","t-spacing","t-striped","t-text-wrap","t-virtual-scroll","t-items"],[1,"po-mt-2",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","columnsName","p-columns","4","p-label","Columns",3,"ngModelChange","p-change","ngModel","p-options"],["name","selection","p-label","Selection","p-columns","4",3,"ngModelChange","p-change","p-options","ngModel"],["name","otherProperties","p-label","Other Properties",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","spacing","p-help","Para aplicar o tamanho Extra Small, defina o n\xEDvel de acessibilidade como AA no navbar.","p-label","Spacing",3,"ngModelChange","p-columns","p-options","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, defina o n\xEDvel de acessibilidade como AA no navbar.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterinputModeValue","p-label","Filter Input Mode",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],[1,"po-mb-2","po-lg-6",2,"display","flex"],["p-label","Min Resizable Width",1,"po-md-6",3,"ngModelChange","ngModel","disabled"],["p-label","Max Resizable Width",1,"po-md-6",3,"ngModelChange","ngModel","disabled"],["p-label","Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["p-label","Max Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["p-label","Min Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","literals","p-label","Literals","p-help",'{"noData": "Sem dados a serem exibidos"}',3,"ngModelChange","p-change-model","ngModel"],["name","sort","p-label","Sort","p-help",'[{ "field":"name", "dir":"asc" }]',3,"ngModelChange","p-change-model","ngModel"],[1,"po-mb-2","po-lg-12",2,"display","flex"],[2,"display","flex","flex-wrap","wrap"],["name","pagination","p-label","Pagination",1,"po-lg-6",3,"ngModelChange","p-change","p-options","ngModel"],["name","optionsPage","p-label","Options Page","p-help",'[{ "value":"25", "label":"25" }, { "value":"50", "label":"50" }]',1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel","disabled"],[1,"po-row"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let s=M();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),n(3,"po-divider",2),i(4,"thf-grid",3),C("t-change-fixed-columns",function(){return u(s),E(o.changeEvent("t-change-fixed-columns"))})("t-change-order-column",function(){return u(s),E(o.changeEvent("t-change-order-column"))})("t-change-page-size",function(){return u(s),E(o.changeEvent("t-change-page-size"))})("t-change-sort-column",function(){return u(s),E(o.changeEvent("t-change-sort-column"))})("t-change-visible-columns",function(){return u(s),E(o.changeEvent("t-change-visible-columns"))})("t-change-options-column-manager",function(){return u(s),E(o.changeEvent("t-change-options-column-manager"))})("t-changed-density",function(){return u(s),E(o.changeEvent("t-changed-density"))})("t-delete-item",function(){return u(s),E(o.changeEvent("t-delete-item"))})("t-delete-items",function(){return u(s),E(o.changeEvent("t-delete-items"))})("t-delete-item-error",function(){return u(s),E(o.changeEvent("t-delete-item-error"))})("t-filter-item-error",function(){return u(s),E(o.changeEvent("t-filter-item-error"))})("t-restore-column-manager",function(){return u(s),E(o.changeEvent("t-restore-column-manager"))})("t-selected",function(){return u(s),E(o.changeEvent("t-selected"))})("t-all-selected",function(){return u(s),E(o.changeEvent("t-all-selected"))})("t-unselected",function(){return u(s),E(o.changeEvent("t-unselected"))})("t-all-unselected",function(){return u(s),E(o.changeEvent("t-all-unselected"))})("t-change-group",function(){return u(s),E(o.changeEvent("t-change-group"))})("t-rows-selected",function(){return u(s),E(o.changeEvent("t-rows-selected"))}),t(),i(5,"po-container",4),n(6,"po-info",5),t(),n(7,"app-code-accordion-doc",6),V(8,oi,29,27,"ng-template",null,0,oe),t()}if(a&2){let s=K(9);p(4),c("t-action-delete",o.selection.includes("actionDelete"))("t-action-edit",o.selection.includes("actionEdit"))("t-action-excel",o.selection.includes("actionExcel"))("t-action-pdf",o.selection.includes("actionPdf"))("t-actions",o.actions||me(45,ni))("t-actions-filter",o.otherProperties.includes("actionsFilter"))("t-actions-right",o.otherProperties.includes("actionRight"))("t-components-size",o.componentsSize)("t-columns",o.columns)("t-draggable",o.otherProperties.includes("draggable"))("t-filter-input-mode",o.filterinputModeValue)("t-groupable",o.otherProperties.includes("groupable"))("t-height",o.height)("t-max-height",o.maxHeight)("t-min-height",o.minHeight)("t-hide-columns-manager",o.otherProperties.includes("hideColumnsManager"))("t-hide-action-fixed-columns",o.otherProperties.includes("hideActionFixedColumns"))("t-hide-batch-actions",o.selection.includes("hideBatchActions"))("t-hide-select-all",o.selection.includes("hideSelectAll"))("t-hide-table-search",o.otherProperties.includes("hideTableSearch"))("t-literals",o.literalsCustom)("t-loading",o.otherProperties.includes("loading"))("t-max-resizable-width",o.maxResizableValue)("t-min-resizable-width",o.minResizableValue)("t-options-paging",o.customOptionsPage)("t-pageable",o.pagination.includes("pageable"))("t-resizable",o.resizable)("t-selectable",o.selection.includes("selectable"))("t-selectable-entire-line",o.selection.includes("selectableEntireLine"))("t-show-densification-configuration",o.otherProperties.includes("showDensificationConfiguration"))("t-show-draggable-icon",o.otherProperties.includes("showDraggableIcon"))("t-show-more-disabled",o.pagination.includes("showMoreDisabled"))("t-single-select",o.selection.includes("singleSelect"))("t-sort",o.customSort)("t-sortable",o.otherProperties.includes("sortable"))("t-spacing",o.spacing)("t-striped",o.otherProperties.includes("striped"))("t-text-wrap",o.otherProperties.includes("textWrap"))("t-virtual-scroll",o.otherProperties.includes("virtualScroll"))("t-items",o.items),p(2),c("p-value",o.event),p(),c("properties",!0)("dynamicTemplate",s)("htmlCode",o.htmlCode)("tsCode",o.tsCode)}},dependencies:[B,J,G,y,P,fe,re,it,ve,$,L,w],encapsulation:2});let d=l;return d})();var ri=["gridComponent"],ft=(()=>{let l=class l{constructor(){this.htmlCode=`<thf-grid
  #gridComponent
  t-service-api="https://po-sample-api.onrender.com/v1/people"
  [t-auto-size]="true"
  [t-columns]="columns"
  [t-actions-filter]="true"
  [t-selectable]="true"
  [t-actions-right]="true"
  [t-draggable]="true"
  [t-groupable]="true"
  [t-height]="400"
  [t-edit-properties]="editProperties"
/>
  `,this.tsCode=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThfGridColumn, ThfGridComponent, ThfGridEditProperties } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-editing-inline-doc',
  templateUrl: './thf-grid-editing-inline-doc.component.html',
  styleUrls: ['./thf-grid-editing-inline-doc.component.css'],
  standalone: false,
})
export class ThfGridEditingInlineDocComponent {
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  columns: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', editProperties: { disabled: true } },
    { property: 'name', label: 'Nome' },
    {
      property: 'birthdate',
      label: 'Data de  nascimento',
      type: 'date',
      editProperties: {
        componentEditable: 'datepicker',
        clean: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        additionalHelpTooltip: 'Informe a data de nascimento no formato DDMMAAAA ou selecione no calend\xE1rio.',
        keydown: this.onKeyDown.bind(this, 'birthdate')
      }
    },
    {
      property: 'city',
      label: 'Cidade',
      editProperties: {
        componentEditable: 'combo',
        options: [
          { value: '4201307', label: 'Araquari' },
          { value: '1501402', label: 'Bel\xE9m' },
          { value: '3509502', label: 'Campinas' },
          { value: '4106902', label: 'Curitiba' },
          { value: '4209102', label: 'Joinville' },
          { value: '3534401', label: 'Osasco' },
          { value: '3304557', label: 'Rio de Janeiro' },
          { value: '4215802', label: 'S\xE3o Bento do Sul' },
          { value: '4216206', label: 'S\xE3o Francisco do Sul' },
          { value: '3550308', label: 'S\xE3o Paulo' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        removeInitialFilter: true,
        controlValueWithLabel: true,
      },
    },
  ];

  form!: FormGroup;
  editProperties!: ThfGridEditProperties;

  ngOnInit() {
    this.editProperties = {
      actionEdit: this.setFormGroup.bind(this),
    };
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  setFormGroup(dataItem: any) {
    this.form = new FormGroup({
      id: new FormControl(dataItem.id, [Validators.required]),
      name: new FormControl(dataItem.name),
      city: new FormControl(dataItem.city),
      birthdate: new FormControl(dataItem.birthdate),
    });
    return this.form;
  }
}
  `,this.columns=[{property:"id",label:"Id",editProperties:{disabled:!0}},{property:"name",label:"Nome"},{property:"birthdate",label:"Data de  nascimento",type:"date",editProperties:{componentEditable:"datepicker",clean:!0,required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,additionalHelpTooltip:"Informe a data de nascimento no formato DDMMAAAA ou selecione no calend\xE1rio.",keydown:this.onKeyDown.bind(this,"birthdate")}},{property:"city",label:"Cidade",editProperties:{componentEditable:"combo",options:[{value:"4201307",label:"Araquari"},{value:"1501402",label:"Bel\xE9m"},{value:"3509502",label:"Campinas"},{value:"4106902",label:"Curitiba"},{value:"4209102",label:"Joinville"},{value:"3534401",label:"Osasco"},{value:"3304557",label:"Rio de Janeiro"},{value:"4215802",label:"S\xE3o Bento do Sul"},{value:"4216206",label:"S\xE3o Francisco do Sul"},{value:"3550308",label:"S\xE3o Paulo"}],fieldLabel:"label",fieldValue:"value",removeInitialFilter:!0,controlValueWithLabel:!0}}]}ngOnInit(){this.editProperties={actionEdit:this.setFormGroup.bind(this)}}onKeyDown(r,a){a.code==="F9"&&this.thfGrid.showAdditionalHelp(r)}setFormGroup(r){return this.form=new N({id:new f(r.id,[j.required]),name:new f(r.name),city:new f(r.city),birthdate:new f(r.birthdate)}),this.form}};l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid-editing-inline-doc"]],viewQuery:function(a,o){if(a&1&&A(ri,5),a&2){let s;q(s=k())&&(o.thfGrid=s.first)}},standalone:!1,decls:7,vars:11,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/people",3,"t-auto-size","t-columns","t-actions-filter","t-selectable","t-actions-right","t-draggable","t-groupable","t-height","t-edit-properties"],[3,"htmlCode","tsCode"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",1),e(2,"Edi\xE7\xE3o em linha"),t(),n(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),a&2&&(p(4),c("t-auto-size",!0)("t-columns",o.columns)("t-actions-filter",!0)("t-selectable",!0)("t-actions-right",!0)("t-draggable",!0)("t-groupable",!0)("t-height",400)("t-edit-properties",o.editProperties),p(2),c("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[y,P,L,w],encapsulation:2});let d=l;return d})();var di=["modal"],mi=["gridComponent"];function si(d,l){if(d&1&&(i(0,"div",9)(1,"pre"),e(2),t()()),d&2){let m=S();p(2),Ee(m.getLabelChangedItems())}}var ht=(()=>{let l=class l{constructor(){this.htmlCode=`<po-button class="po-mr-2" p-label="Finaliza modo edi\xE7\xE3o" (p-click)="finishEditMode()"></po-button>
<po-button
  p-label="Get itens alterados"
  [p-disabled]="getChangedItems()?.length === 0"
  (p-click)="poModal.open()"
></po-button>

<thf-grid
  #gridComponent
  [t-height]="400"
  [t-selectable]="true"
  [t-single-select]="true"
  [t-items]="items"
  [t-columns]="columnWithItems"
  [t-grid-row-actions]="gridRowsActionsWithItems"
  [t-actions-right]="true"
  [t-sortable]="true"
/>

<po-modal #modal p-title="Itens que foram alterados">
  <div class="code" *ngIf="getChangedItems()?.length">
    <pre>{{ getLabelChangedItems() }}</pre>
  </div>
</po-modal>
`,this.tsCode=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PoModalComponent } from '@po-ui/ng-components';
import { ThfGridColumn, ThfGridComponent, ThfGridRowActions } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-row-actions-doc',
  templateUrl: './thf-grid-grid-row-actions-doc.component.html',
  styleUrls: ['./thf-grid-grid-row-actions-doc.component.css'],
  standalone: false
})
export class ThfGridRowActionsDocComponent {
  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  items = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      status: 1,
      values: [1495831666871],
      perfil: [1],
      state: { value: 'SC', label: 'Santa Catarina' },
      city: 'Lages',
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      status: 2,
      values: [1495831698598],
      perfil: [2],
      state: { value: 'SC', label: 'Santa Catarina' },
      city: 'Brusque',
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      values: [1495832652942],
      perfil: [3],
      state: { value: 'SP', label: 'S\xE3o Paulo' },
      city: 'Guarulhos',
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      values: [1495832683682],
      perfil: [3],
      state: { value: 'SP', label: 'S\xE3o Paulo' },
      city: 'Campinas',
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      values: [1495833068596],
      perfil: [2],
      state: { value: 'RJ', label: 'Rio de Janeiro' },
      city: null,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      values: [1495833068597],
      perfil: [1],
      state: null,
      city: null,
    },
  ];
  currentIdItem: any;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
      editProperties: {
        required: true,
        componentEditable: 'input',
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        additionalHelpTooltip: 'Informe pelo menos o primeiro nome.',
        keydown: this.onKeyDown.bind(this, 'name'),
      },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'color-11', label: 'Ativo' },
        { value: 2, color: 'color-08', label: 'Inativo' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 1, label: 'Ativo' },
          { value: 2, label: 'Inativo' },
          { value: 0, label: 'Other' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    },
    {
      property: 'values',
      label: 'Values',
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        additionalHelpTooltip: 'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        keydown: this.onKeyDown.bind(this, 'values'),
      },
    },
    {
      property: 'perfil',
      label: 'Perfil',
      editProperties: {
        componentEditable: 'multiselect',
        options: [
          { value: 1, label: 'RH' },
          { value: 2, label: 'Almoxarifado' },
          { value: 3, label: 'Vendedor' }
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        additionalHelpTooltip: 'Marque um ou mais status, conforme necess\xE1rio.',
        keydown: this.onKeyDown.bind(this, 'otherStatus'),
        controlValueWithLabel: true,
      },
    },
    {
      property: 'state',
      label: 'Estado',
      editProperties: {
        componentEditable: 'combo',
        required: false,
        removeInitialFilter: true,
        options: [
          { value: 'MG', label: 'Minas Gerais' },
          { value: 'RJ', label: 'Rio de Janeiro' },
          { value: 'SC', label: 'Santa Catarina' },
          { value: 'SP', label: 'S\xE3o Paulo' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        controlValueWithLabel: true,
      },
    },
    {
      property: 'city',
      label: 'cidade',
      editProperties: {
        componentEditable: 'combo',
        required: false,
        removeInitialFilter: true,
        disabled: false,
        fieldLabel: 'value',
        fieldValue: 'value',
      },
    },
  ];

  itemsUpdated: Array<any> = [];
  disabledIncludeButton!: boolean;
  gridRowsActionsWithItems!: ThfGridRowActions;
  myForm!: FormGroup;

  ngOnInit() {
    this.gridRowsActionsWithItems = {
      title: 'Items',
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        this.myForm = new FormGroup({
          name: new FormControl(dataItem.name),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          values: new FormControl(dataItem.values, [Validators.required]),
          perfil: new FormControl(dataItem.perfil, [Validators.required]),
          state: new FormControl(dataItem.state),
          city: new FormControl(dataItem.city),
        });
        this.handleStateAndCity(this.myForm?.controls['state'].value);
        return this.myForm;
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
      validateField: this.onValidate.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
    const city = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (city?.editProperties) {
      city.editProperties.disabled = true;
    }
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.disabledIncludeButton = false;
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    const city = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (city?.editProperties) {
      city.editProperties.disabled = true;
    }
    return true;
  }

  onValidate(value: any, columnProperty: any) {
    console.log('onValidateField:', value, columnProperty);

    if (columnProperty === 'state') {
      this.myForm?.controls['city'].setValue(null);
      const stateValue = this.myForm.controls['state'].value;
      const cityColumn = this.columnWithItems.find(
        (column) => column.property === 'city'
      );

      if (!cityColumn?.editProperties) {
        return true;
      }

      if (!stateValue) {
        cityColumn.editProperties.disabled = true;
      } else {
        cityColumn.editProperties.disabled = false;
        cityColumn.editProperties.options = this.getCity(stateValue.value);

        this.myForm?.controls['city'].setValue('');
      }
    }

    return true;
  }

  handleStateAndCity(value: any) {
    const cityColumn = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (!cityColumn?.editProperties) {
      return;
    }
    if (value) {
      cityColumn.editProperties.options = this.getCity(value);
      cityColumn.editProperties.disabled = false;
    } else {
      cityColumn.editProperties.disabled = true;
    }
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  getChangedItems() {
    return this.thfGrid?.getChangedItems() || [];
  }

  getLabelChangedItems() {
    return JSON.stringify(this.thfGrid?.getChangedItems() || [], null, 2);
  }

  finishEditMode() {
    this.thfGrid.cleanRowActionsMode();
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  private getCity(state: string) {
    const city = {
      MG: [
        { value: 'Belo Horizonte' },
        { value: 'Contagem' },
        { value: 'Juiz de Fora' },
        { value: 'Uberl\xE2ndia' },
      ],
      RJ: [
        { value: 'Duque de Caxias' },
        { value: 'Nova Igua\xE7u' },
        { value: 'Rio de Janeiro' },
        { value: 'S\xE3o Gon\xE7alo' },
      ],
      SP: [
        { value: 'Campinas' },
        { value: 'Guarulhos' },
        { value: 'S\xE3o Bernardo do Campo' },
        { value: 'S\xE3o Paulo' },
      ],
      SC: [
        { value: 'Balne\xE1rio Cambori\xFA' },
        { value: 'Brusque' },
        { value: 'Lages' },
        { value: 'Palho\xE7a' },
      ],
    };

    return city[state as keyof typeof city] || [];
  }
}
`,this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],perfil:[1],state:{value:"SC",label:"Santa Catarina"},city:"Lages"},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],perfil:[2],state:{value:"SC",label:"Santa Catarina"},city:"Brusque"},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],perfil:[3],state:{value:"SP",label:"S\xE3o Paulo"},city:"Guarulhos"},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],perfil:[3],state:{value:"SP",label:"S\xE3o Paulo"},city:"Campinas"},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],perfil:[2],state:{value:"RJ",label:"Rio de Janeiro"},city:null},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],perfil:[1],state:null,city:null}],this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",additionalHelpTooltip:"Informe pelo menos o primeiro nome.",keydown:this.onKeyDown.bind(this,"name")}},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:1,label:"Ativo"},{value:2,label:"Inativo"},{value:0,label:"Other"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}},{property:"values",label:"Values",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!0,errorMessage:"Obrigat\xF3rio",additionalHelpTooltip:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",keydown:this.onKeyDown.bind(this,"values")}},{property:"perfil",label:"Perfil",editProperties:{componentEditable:"multiselect",options:[{value:1,label:"RH"},{value:2,label:"Almoxarifado"},{value:3,label:"Vendedor"}],fieldLabel:"label",fieldValue:"value",required:!0,errorMessage:"Obrigat\xF3rio",additionalHelpTooltip:"Marque um ou mais status, conforme necess\xE1rio.",keydown:this.onKeyDown.bind(this,"otherStatus"),controlValueWithLabel:!0}},{property:"state",label:"Estado",editProperties:{componentEditable:"combo",required:!1,removeInitialFilter:!0,options:[{value:"MG",label:"Minas Gerais"},{value:"RJ",label:"Rio de Janeiro"},{value:"SC",label:"Santa Catarina"},{value:"SP",label:"S\xE3o Paulo"}],fieldLabel:"label",fieldValue:"value",controlValueWithLabel:!0}},{property:"city",label:"cidade",editProperties:{componentEditable:"combo",required:!1,removeInitialFilter:!0,disabled:!1,fieldLabel:"value",fieldValue:"value"}}],this.itemsUpdated=[]}ngOnInit(){this.gridRowsActionsWithItems={title:"Items",actionEdit:(r,a)=>(a==="include"&&!r.id&&(console.log("mode: ",a),this.disabledIncludeButton=!0,r.id=r.$uuidThfIncluded,r.dependents=[],this.currentIdItem=r.id),this.myForm=new N({name:new f(r.name),status:new f(r.status,[j.min(1)]),values:new f(r.values,[j.required]),perfil:new f(r.perfil,[j.required]),state:new f(r.state),city:new f(r.city)}),this.handleStateAndCity(this.myForm?.controls.state.value),this.myForm),afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),validateField:this.onValidate.bind(this)},this.itemsUpdated=[...this.items]}onAfterSave(r){console.log("onAfterSave(new): ",r);let a=this.columnWithItems.find(o=>o.property==="city");a?.editProperties&&(a.editProperties.disabled=!0)}onBeforeSave(r,a){return console.log("before new value: ",r),console.log("before old value: ",a),!0}onBeforeInsert(r){console.log("before insert new value: ",r),this.disabledIncludeButton=!1,this.itemsUpdated=[...this.itemsUpdated,r];let a=this.columnWithItems.find(o=>o.property==="city");return a?.editProperties&&(a.editProperties.disabled=!0),!0}onValidate(r,a){if(console.log("onValidateField:",r,a),a==="state"){this.myForm?.controls.city.setValue(null);let o=this.myForm.controls.state.value,s=this.columnWithItems.find(x=>x.property==="city");if(!s?.editProperties)return!0;o?(s.editProperties.disabled=!1,s.editProperties.options=this.getCity(o.value),this.myForm?.controls.city.setValue("")):s.editProperties.disabled=!0}return!0}handleStateAndCity(r){let a=this.columnWithItems.find(o=>o.property==="city");a?.editProperties&&(r?(a.editProperties.options=this.getCity(r),a.editProperties.disabled=!1):a.editProperties.disabled=!0)}onBeforeRemove(r){return!0}onAfterRemove(r){return console.log("afterRemove: ",r),!0}getChangedItems(){return this.thfGrid?.getChangedItems()||[]}getLabelChangedItems(){return JSON.stringify(this.thfGrid?.getChangedItems()||[],null,2)}finishEditMode(){this.thfGrid.cleanRowActionsMode()}onKeyDown(r,a){a.code==="F9"&&this.thfGrid.showAdditionalHelp(r)}getCity(r){return{MG:[{value:"Belo Horizonte"},{value:"Contagem"},{value:"Juiz de Fora"},{value:"Uberl\xE2ndia"}],RJ:[{value:"Duque de Caxias"},{value:"Nova Igua\xE7u"},{value:"Rio de Janeiro"},{value:"S\xE3o Gon\xE7alo"}],SP:[{value:"Campinas"},{value:"Guarulhos"},{value:"S\xE3o Bernardo do Campo"},{value:"S\xE3o Paulo"}],SC:[{value:"Balne\xE1rio Cambori\xFA"},{value:"Brusque"},{value:"Lages"},{value:"Palho\xE7a"}]}[r]||[]}};l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid-row-actions-doc"]],viewQuery:function(a,o){if(a&1&&(A(di,7),A(mi,5)),a&2){let s;q(s=k())&&(o.poModal=s.first),q(s=k())&&(o.thfGrid=s.first)}},standalone:!1,decls:12,vars:12,consts:[["gridComponent",""],["modal",""],[1,"po-font-text-large-bold"],["p-label","Finaliza modo edi\xE7\xE3o",1,"po-mr-2",3,"p-click"],["p-label","Get itens alterados",3,"p-click","p-disabled"],[3,"t-height","t-selectable","t-single-select","t-items","t-columns","t-grid-row-actions","t-actions-right","t-sortable"],["p-title","Itens que foram alterados"],["class","code",4,"ngIf"],[3,"htmlCode","tsCode"],[1,"code"]],template:function(a,o){if(a&1){let s=M();i(0,"po-container")(1,"span",2),e(2,"Edi\xE7\xE3o flu\xEDda"),t(),n(3,"po-divider"),i(4,"po-button",3),C("p-click",function(){return u(s),E(o.finishEditMode())}),t(),i(5,"po-button",4),C("p-click",function(){return u(s),E(o.poModal.open())}),t(),n(6,"thf-grid",5,0),i(8,"po-modal",6,1),V(10,si,3,1,"div",7),t(),n(11,"app-code-accordion-doc",8),t()}if(a&2){let s,x;p(5),c("p-disabled",((s=o.getChangedItems())==null?null:s.length)===0),p(),c("t-height",400)("t-selectable",!0)("t-single-select",!0)("t-items",o.items)("t-columns",o.columnWithItems)("t-grid-row-actions",o.gridRowsActionsWithItems)("t-actions-right",!0)("t-sortable",!0),p(4),c("ngIf",(x=o.getChangedItems())==null?null:x.length),p(),c("htmlCode",o.htmlCode)("tsCode",o.tsCode)}},dependencies:[ae,G,y,P,he,L,w],styles:[".code[_ngcontent-%COMP%]{padding:1rem;background-color:#000;color:#adff2f;margin-top:.5rem;margin-left:2rem;border-radius:.5rem}"]});let d=l;return d})();var ci=["modal"],ui=["gridComponent"];function Ei(d,l){if(d&1&&(i(0,"div",9)(1,"pre"),e(2),t()()),d&2){let m=S();p(2),Ee(m.getLabelChangedItems())}}var vt=(()=>{let l=class l{constructor(){this.htmlCode=`<po-button
  class="po-mr-2"
  p-label="Finaliza modo edi\xE7\xE3o"
  (p-click)="finishEditMode()"
></po-button>
<po-button
  p-label="Get itens alterados"
  [p-disabled]="getChangedItems()?.length === 0"
  (p-click)="poModal.open()"
></po-button>

<thf-grid
  #gridComponent
  [t-height]="400"
  [t-selectable]="true"
  [t-single-select]="true"
  [t-items]="items"
  [t-columns]="columnWithItems"
  [t-grid-row-actions]="gridRowsActionsWithItems"
  [t-aggregates]="aggregatesDescriptor"
  [t-show-footer-aggregates]="true"
  [t-actions-right]="true"
  [t-sortable]="true"
/>

<po-modal #modal p-title="Itens que foram alterados">
  <div class="code" *ngIf="getChangedItems()?.length">
    <pre>{{ getLabelChangedItems() }}</pre>
  </div>
</po-modal>
`,this.tsCode=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PoModalComponent } from '@po-ui/ng-components';
import {
  ThfAggregateDescriptor,
  ThfGridColumn,
  ThfGridComponent,
  ThfGridRowActions,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-editing-fluid-currency-doc',
  templateUrl: './thf-grid-editing-fluid-currency-doc.component.html',
  styleUrls: ['./thf-grid-editing-fluid-currency-doc.component.css'],
  standalone: false,
})
export class ThfGridEditingFluidCurrencyDocComponent {
  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  items = [
    {
      id: 11234,
      country: 'Brazil',
      value: 1000.0,
      destination: 'Rio de Janeiro',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 22467,
      country: 'France',
      value: 5000.0,
      destination: 'Paris',
      status: 'closed',
      region: 'Alps',
    },
    {
      id: 40670,
      country: 'Senegal',
      value: 3200.0,
      destination: 'Dakar',
      status: 'closed',
      region: 'Western Africa',
    },
    {
      id: 34679,
      country: 'Portugal',
      value: 5500.0,
      destination: 'Lisbon',
      status: 'closed',
      region: 'Mediterranean',
    },
    {
      id: 48999,
      country: 'Russia',
      value: 6700.0,
      destination: 'Moscow',
      status: 'reserved',
      region: 'Caucasus',
    },
    {
      id: 48999,
      country: 'United States',
      value: 2700.49,
      destination: 'Los Angeles',
      status: 'reserved',
      region: 'North America',
    },
    {
      id: 54563,
      country: 'Chile',
      value: 2000.0,
      destination: 'Cusco',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 64568,
      country: 'Mexico',
      value: 2100.0,
      destination: 'Mexico City',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 75456,
      country: 'Ireland',
      value: 6300.0,
      destination: 'Cork',
      status: 'reserved',
      region: 'British Isle',
    },
    {
      id: 23445,
      country: 'South Africa',
      value: 1900.0,
      destination: 'Cape Town',
      status: 'available',
      region: 'Southern Africa',
    },
    {
      id: 19238,
      country: 'Australia',
      value: 6300.0,
      destination: 'Sydney',
      status: 'reserved',
      region: 'Australasia',
    },
    {
      id: 85456,
      country: 'Japan',
      value: 5900.0,
      destination: 'Tokio',
      status: 'available',
      region: 'East Asia',
    },
    {
      id: 94565,
      country: 'China',
      value: 2900.0,
      destination: 'Beijing',
      status: 'available',
      region: 'East Asia',
    },
    {
      id: 32330,
      country: 'England',
      value: 2090.5,
      destination: 'London',
      status: 'available',
      region: 'British Isle',
    },
    {
      id: 14560,
      country: 'Canada',
      value: 2090.5,
      destination: 'Quebec',
      status: 'available',
      region: 'North America',
    },
    {
      id: 93800,
      country: 'Iceland',
      value: 6300.0,
      destination: 'Reykjav\xEDk',
      status: 'available',
      region: 'Nordics',
    },
    {
      id: 34239,
      country: 'Germany',
      value: 3070.5,
      destination: 'Berlin',
      status: 'available',
      region: 'Danube',
    },
    {
      id: 45611,
      country: 'Argentina',
      value: 3500.5,
      destination: 'Ushuaia',
      status: 'reserved',
      region: 'Latin America',
    },
  ];
  currentIdItem: any;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'available', color: 'color-11', label: 'Available' },
        { value: 'reserved', color: 'color-08', label: 'Reserved' },
        { value: 'closed', color: 'color-07', label: 'Closed' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 'available', label: 'Available' },
          { value: 'reserved', label: 'Reserved' },
          { value: 'closed', label: 'Closed' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    },
    {
      property: 'region',
      label: 'Region',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        additionalHelpTooltip: 'Informe a regi\xE3o referida.',
        keydown: this.onKeyDown.bind(this, 'region'),
      },
    },
    {
      property: 'country',
      label: 'Country',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        additionalHelpTooltip: 'Informe o pa\xEDs referido.',
        keydown: this.onKeyDown.bind(this, 'country'),
      },
    },
    {
      property: 'destination',
      label: 'Destination',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        additionalHelpTooltip: 'Informe o destino dentro do pa\xEDs informado.',
        keydown: this.onKeyDown.bind(this, 'destination'),
      },
    },
    {
      property: 'value',
      label: 'Value',
      type: 'currency',
      format: 'USD',
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
  ];

  aggregatesDescriptor: Array<ThfAggregateDescriptor> = [
    { field: 'value', aggregate: 'sum', label: 'Total' }
  ];

  itemsUpdated: Array<any> = [];
  disabledIncludeButton!: boolean;
  gridRowsActionsWithItems!: ThfGridRowActions;

  ngOnInit() {
    this.gridRowsActionsWithItems = {
      title: 'Items',
      hiddenGrid: true,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        return new FormGroup({
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          region: new FormControl(dataItem.region, [Validators.required]),
          country: new FormControl(dataItem.country, [Validators.required]),
          destination: new FormControl(dataItem.destination, [Validators.required]),
          value: new FormControl(dataItem.value, [Validators.required]),
        });
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeSaveSubItems(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.disabledIncludeButton = false;
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    return true;
  }

  onBeforeInsertSubItems(newValue: { id: any; $uuidThfIncluded: any }) {
    newValue.id = newValue.$uuidThfIncluded;
    const item = this.itemsUpdated.find(
      (item) => item.id === this.currentIdItem
    );
    item.dependents = item.dependents
      ? [...item.dependents, newValue]
      : [newValue];
    return true;
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  getChangedItems() {
    return this.thfGrid?.getChangedItems() || [];
  }

  getLabelChangedItems() {
    return JSON.stringify(this.thfGrid?.getChangedItems() || [], null, 2);
  }

  finishEditMode() {
    this.thfGrid.cleanRowActionsMode();
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }
}

  `,this.items=[{id:11234,country:"Brazil",value:1e3,destination:"Rio de Janeiro",status:"available",region:"Latin America"},{id:22467,country:"France",value:5e3,destination:"Paris",status:"closed",region:"Alps"},{id:40670,country:"Senegal",value:3200,destination:"Dakar",status:"closed",region:"Western Africa"},{id:34679,country:"Portugal",value:5500,destination:"Lisbon",status:"closed",region:"Mediterranean"},{id:48999,country:"Russia",value:6700,destination:"Moscow",status:"reserved",region:"Caucasus"},{id:48999,country:"United States",value:2700.49,destination:"Los Angeles",status:"reserved",region:"North America"},{id:54563,country:"Chile",value:2e3,destination:"Cusco",status:"available",region:"Latin America"},{id:64568,country:"Mexico",value:2100,destination:"Mexico City",status:"available",region:"Latin America"},{id:75456,country:"Ireland",value:6300,destination:"Cork",status:"reserved",region:"British Isle"},{id:23445,country:"South Africa",value:1900,destination:"Cape Town",status:"available",region:"Southern Africa"},{id:19238,country:"Australia",value:6300,destination:"Sydney",status:"reserved",region:"Australasia"},{id:85456,country:"Japan",value:5900,destination:"Tokio",status:"available",region:"East Asia"},{id:94565,country:"China",value:2900,destination:"Beijing",status:"available",region:"East Asia"},{id:32330,country:"England",value:2090.5,destination:"London",status:"available",region:"British Isle"},{id:14560,country:"Canada",value:2090.5,destination:"Quebec",status:"available",region:"North America"},{id:93800,country:"Iceland",value:6300,destination:"Reykjav\xEDk",status:"available",region:"Nordics"},{id:34239,country:"Germany",value:3070.5,destination:"Berlin",status:"available",region:"Danube"},{id:45611,country:"Argentina",value:3500.5,destination:"Ushuaia",status:"reserved",region:"Latin America"}],this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"status",label:"Status",type:"label",labels:[{value:"available",color:"color-11",label:"Available"},{value:"reserved",color:"color-08",label:"Reserved"},{value:"closed",color:"color-07",label:"Closed"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"available",label:"Available"},{value:"reserved",label:"Reserved"},{value:"closed",label:"Closed"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}},{property:"region",label:"Region",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",additionalHelpTooltip:"Informe a regi\xE3o referida.",keydown:this.onKeyDown.bind(this,"region")}},{property:"country",label:"Country",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",additionalHelpTooltip:"Informe o pa\xEDs referido.",keydown:this.onKeyDown.bind(this,"country")}},{property:"destination",label:"Destination",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",additionalHelpTooltip:"Informe o destino dentro do pa\xEDs informado.",keydown:this.onKeyDown.bind(this,"destination")}},{property:"value",label:"Value",type:"currency",format:"USD",editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}}],this.aggregatesDescriptor=[{field:"value",aggregate:"sum",label:"Total"}],this.itemsUpdated=[]}ngOnInit(){this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!0,actionEdit:(r,a)=>(a==="include"&&!r.id&&(console.log("mode: ",a),this.disabledIncludeButton=!0,r.id=r.$uuidThfIncluded,r.dependents=[],this.currentIdItem=r.id),new N({status:new f(r.status,[j.min(1)]),region:new f(r.region,[j.required]),country:new f(r.country,[j.required]),destination:new f(r.destination,[j.required]),value:new f(r.value,[j.required])})),afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this)},this.itemsUpdated=[...this.items]}onAfterSave(r){console.log("onAfterSave(new): ",r)}onBeforeSave(r,a){return console.log("before new value: ",r),console.log("before old value: ",a),!0}onBeforeSaveSubItems(r,a){return console.log("before new value: ",r),console.log("before old value: ",a),!0}onBeforeInsert(r){return console.log("before insert new value: ",r),this.disabledIncludeButton=!1,this.itemsUpdated=[...this.itemsUpdated,r],!0}onBeforeInsertSubItems(r){r.id=r.$uuidThfIncluded;let a=this.itemsUpdated.find(o=>o.id===this.currentIdItem);return a.dependents=a.dependents?[...a.dependents,r]:[r],!0}onBeforeRemove(r){return!0}onAfterRemove(r){return console.log("afterRemove: ",r),!0}getChangedItems(){return this.thfGrid?.getChangedItems()||[]}getLabelChangedItems(){return JSON.stringify(this.thfGrid?.getChangedItems()||[],null,2)}finishEditMode(){this.thfGrid.cleanRowActionsMode()}onKeyDown(r,a){a.code==="F9"&&this.thfGrid.showAdditionalHelp(r)}};l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid-editing-fluid-currency-doc"]],viewQuery:function(a,o){if(a&1&&(A(ci,7),A(ui,5)),a&2){let s;q(s=k())&&(o.poModal=s.first),q(s=k())&&(o.thfGrid=s.first)}},standalone:!1,decls:12,vars:14,consts:[["gridComponent",""],["modal",""],[1,"po-font-text-large-bold"],["p-label","Finaliza modo edi\xE7\xE3o",1,"po-mr-2",3,"p-click"],["p-label","Get itens alterados",3,"p-click","p-disabled"],[3,"t-height","t-selectable","t-single-select","t-items","t-columns","t-grid-row-actions","t-aggregates","t-show-footer-aggregates","t-actions-right","t-sortable"],["p-title","Itens que foram alterados"],["class","code",4,"ngIf"],[3,"htmlCode","tsCode"],[1,"code"]],template:function(a,o){if(a&1){let s=M();i(0,"po-container")(1,"span",2),e(2,"Edi\xE7\xE3o com Padroniza\xE7\xE3o do N\xFAmero de Casas Decimais"),t(),n(3,"po-divider"),i(4,"po-button",3),C("p-click",function(){return u(s),E(o.finishEditMode())}),t(),i(5,"po-button",4),C("p-click",function(){return u(s),E(o.poModal.open())}),t(),n(6,"thf-grid",5,0),i(8,"po-modal",6,1),V(10,Ei,3,1,"div",7),t(),n(11,"app-code-accordion-doc",8),t()}if(a&2){let s,x;p(5),c("p-disabled",((s=o.getChangedItems())==null?null:s.length)===0),p(),c("t-height",400)("t-selectable",!0)("t-single-select",!0)("t-items",o.items)("t-columns",o.columnWithItems)("t-grid-row-actions",o.gridRowsActionsWithItems)("t-aggregates",o.aggregatesDescriptor)("t-show-footer-aggregates",!0)("t-actions-right",!0)("t-sortable",!0),p(4),c("ngIf",(x=o.getChangedItems())==null?null:x.length),p(),c("htmlCode",o.htmlCode)("tsCode",o.tsCode)}},dependencies:[ae,G,y,P,he,L,w],encapsulation:2});let d=l;return d})();var Si=["gridComponent"],gt=(()=>{let l=class l{constructor(){this.htmlCode=`
   <thf-grid
      #gridComponent
      t-spacing="small"
      [t-selectable]="true"
      [t-single-select]="true"
      [t-columns]="columnWithItems"
      [t-items]="items"
      [t-grid-row-actions]="gridRowsActionsWithItems"
      [t-actions-right]="true"
      [t-auto-size]="false"
      [t-height]="500"
      [t-virtual-columns]="true"
      [t-virtual-scroll]="true"
    />
  `,this.tsCode=`
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridEditProperties,
  ThfGridRowActions,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-virtual-doc',
  templateUrl: './thf-grid-virtual-doc.component.html',
  styleUrl: './thf-grid-virtual-doc.component.css',
  standalone: false,
})
export class ThfGridVirtualDocComponent implements OnInit {
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;
  gridRowsActionsWithItems!: ThfGridRowActions;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
      editProperties: {
        required: true,
        componentEditable: 'input',
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        additionalHelpTooltip: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
        keydown: this.onKeyDown.bind(this, 'name'),
      },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'color-11', label: 'Ativo' },
        { value: 2, color: 'color-08', label: 'Inativo' },
      ],
      editProperties: {
        componentEditable: 'combo',
        required: true,
        disabledInitFilter: true,
        options: [
          { value: 1, label: 'Ativo' },
          { value: 2, label: 'Inativo' },
          { value: 0, label: 'Other' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
        additionalHelpTooltip: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'values',
      label: 'Values',
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: false,
        errorMessage: 'Obrigat\xF3rio',
        additionalHelpTooltip:
          'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        help: 'Input lookup',
        keydown: this.onKeyDown.bind(this, 'values'),
        controlValueWithLabel: true,
      },
    },

    {
      property: 'number',
      label: 'Number',
      type: 'number',
      editProperties: {
        componentEditable: 'number',
        errorMessage: 'Number \xE9 obrigat\xF3rio',
        help: 'Input number',
        additionalHelpTooltip: 'Digite um n\xFAmero aqui',
      },
    },
    {
      property: 'datepicker',
      label: 'datepicker',
      editProperties: {
        componentEditable: 'datepicker',
        errorMessage: 'Datepicker \xE9 obrigat\xF3rio',
        help: 'Entre com a data',
        additionalHelpTooltip: 'Valor do tipo date',
      },
    },
    {
      property: 'otherStatus',
      label: 'Outro Status',
      editProperties: {
        componentEditable: 'multiselect',
        options: [
          { value: 123, label: 'Ativo' },
          { value: 233, label: 'Inativo' },
          { value: 3, label: 'Other' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        errorMessage: 'Obrigat\xF3rio',
        additionalHelpTooltip: 'Marque um ou mais status, conforme necess\xE1rio.',
        help: 'status',
        keydown: this.onKeyDown.bind(this, 'otherStatus'),
        controlValueWithLabel: true,
      },
    },
    {
      property: 'select',
      label: 'select',
      editProperties: {
        componentEditable: 'select',
        options: [
          { value: 123, label: 'Ativo' },
          { value: 233, label: 'Inativo' },
          { value: 3, label: 'Other' },
        ],
        errorMessage: 'select \xE9 obrigat\xF3rio',
        additionalHelpTooltip: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'switch',
      label: 'switch',
      editProperties: {
        componentEditable: 'switch',
        hideLabelStatus: false,
        additionalHelpTooltip: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'decimal',
      label: 'decimal',
      type: 'currency',
      editProperties: {
        componentEditable: 'decimal',
        additionalHelpTooltip: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'checkbox',
      label: 'checkbox',
      editProperties: {
        componentEditable: 'checkbox',
        disabled: false,
        help: 'lorem impsum',
        additionalHelpTooltip: ' ok ok ok',
      },
    },
    {
      property: 'valuesx',
      label: 'Valuesx',
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        additionalHelpTooltip:
          'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        help: 'Input lookup',
        keydown: this.onKeyDown.bind(this, 'valuesx'),
        controlValueWithLabel: true,
      },
    },
  ];

  items: any[] = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      status: 1,
      values: [1495831666871],
      valuesx: [1495831666871],
      otherStatus: [233],
      number: 1,
      datepicker: '1980-11-01',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      status: 2,
      values: [1495831698598],
      valuesx: [1495831698598],
      otherStatus: [233],
      number: 2,
      datepicker: '1980-11-02',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      values: [1495832652942],
      valuesx: [1495832652942],
      otherStatus: [3],
      number: 3,
      datepicker: '1980-11-03',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      values: [1495832683682],
      valuesx: [1495832683682],
      otherStatus: [3],
      number: 4,
      datepicker: '1980-11-04',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      values: [1495833068596],
      valuesx: [1495833068596],
      otherStatus: [233],
      number: 5,
      datepicker: '1980-11-05',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      values: [1495833068597],
      valuesx: [1495833068597],
      otherStatus: [233],
      number: 6,
      datepicker: '1980-11-06',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
  ];

  form!: FormGroup;
  itemsUpdated: Array<any> = [];
  editProperties!: ThfGridEditProperties;
  currentIdItem: any;

  ngOnInit() {
    this.editProperties = {
      actionEdit: this.setFormGroup.bind(this),
    };

    for (let i = 1; i <= 600; i++) {
      const prop = 'property' + i;
      this.columnWithItems.push({
        property: prop,
        label: 'Dynamic' + i,
        editProperties: { disabled: false },
      });
    }

    let itemsUpdatedNew = [];

    const baseItem = this.items[0];
    for (let i = 1; i <= 10000; i++) {
      const randomId = Date.now() + i;
      const newItem = {
        ...baseItem,
        id: randomId + i,
        name: baseItem.name +  i,
      };
      for (let j = 1; j <= 600; j++) {
        newItem['property'+j] = 'Valor'+j;
      }

      itemsUpdatedNew.push(newItem);
    }

    this.items = itemsUpdatedNew;

    this.gridRowsActionsWithItems = {
      title: 'Items',
      hiddenGrid: true,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        let group: any = {
          name: new FormControl(dataItem.name),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          values: new FormControl(dataItem.values, [Validators.required]),
          valuesx: new FormControl(dataItem.values, [Validators.required]),
          otherStatus: new FormControl(dataItem.otherStatus),
          number: new FormControl(dataItem.number),
          datepicker: new FormControl(dataItem.datepicker),
          select: new FormControl(dataItem.select),
          switch: new FormControl(dataItem.switch),
          decimal: new FormControl(dataItem.decimal),
          checkbox: new FormControl(dataItem.checkbox),
        };
        for (let i = 1; i <= 600; i++) {
          group['property'+i] = new FormControl(dataItem['property'+i]);
        }

        this.form = new FormGroup(group);
        return this.form;
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeSaveSubItems(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    return true;
  }

  onBeforeInsertSubItems(newValue: { id: any; $uuidThfIncluded: any }) {
    newValue.id = newValue.$uuidThfIncluded;
    const item = this.itemsUpdated.find(
      (item) => item.id === this.currentIdItem
    );
    item.dependents = item.dependents
      ? [...item.dependents, newValue]
      : [newValue];
    return true;
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  setFormGroup(dataItem: any) {
    this.form = new FormGroup({
      id: new FormControl(dataItem.id, [Validators.required]),
      name: new FormControl(dataItem.name),
      city: new FormControl(dataItem.city),
      birthdate: new FormControl(dataItem.birthdate),
      status: new FormControl(dataItem.status),
      email: new FormControl(dataItem.email),
    });
    return this.form;
  }
}
  `,this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome",editProperties:{required:!0,componentEditable:"input",errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,additionalHelpTooltip:"Informe pelo menos o primeiro nome.",help:"Input text",keydown:this.onKeyDown.bind(this,"name")}},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}],editProperties:{componentEditable:"combo",required:!0,disabledInitFilter:!0,options:[{value:1,label:"Ativo"},{value:2,label:"Inativo"},{value:0,label:"Other"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value",additionalHelpTooltip:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"values",label:"Values",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!1,errorMessage:"Obrigat\xF3rio",additionalHelpTooltip:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",help:"Input lookup",keydown:this.onKeyDown.bind(this,"values"),controlValueWithLabel:!0}},{property:"number",label:"Number",type:"number",editProperties:{componentEditable:"number",errorMessage:"Number \xE9 obrigat\xF3rio",help:"Input number",additionalHelpTooltip:"Digite um n\xFAmero aqui"}},{property:"datepicker",label:"datepicker",editProperties:{componentEditable:"datepicker",errorMessage:"Datepicker \xE9 obrigat\xF3rio",help:"Entre com a data",additionalHelpTooltip:"Valor do tipo date"}},{property:"otherStatus",label:"Outro Status",editProperties:{componentEditable:"multiselect",options:[{value:123,label:"Ativo"},{value:233,label:"Inativo"},{value:3,label:"Other"}],fieldLabel:"label",fieldValue:"value",errorMessage:"Obrigat\xF3rio",additionalHelpTooltip:"Marque um ou mais status, conforme necess\xE1rio.",help:"status",keydown:this.onKeyDown.bind(this,"otherStatus"),controlValueWithLabel:!0}},{property:"select",label:"select",editProperties:{componentEditable:"select",options:[{value:123,label:"Ativo"},{value:233,label:"Inativo"},{value:3,label:"Other"}],errorMessage:"select \xE9 obrigat\xF3rio",additionalHelpTooltip:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"switch",label:"switch",editProperties:{componentEditable:"switch",hideLabelStatus:!1,additionalHelpTooltip:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"decimal",label:"decimal",type:"currency",editProperties:{componentEditable:"decimal",additionalHelpTooltip:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"checkbox",label:"checkbox",editProperties:{componentEditable:"checkbox",disabled:!1,help:"lorem impsum",additionalHelpTooltip:" ok ok ok"}},{property:"valuesx",label:"Valuesx",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!0,errorMessage:"Obrigat\xF3rio",additionalHelpTooltip:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",help:"Input lookup",keydown:this.onKeyDown.bind(this,"valuesx"),controlValueWithLabel:!0}}],this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],valuesx:[1495831666871],otherStatus:[233],number:1,datepicker:"1980-11-01",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],valuesx:[1495831698598],otherStatus:[233],number:2,datepicker:"1980-11-02",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],valuesx:[1495832652942],otherStatus:[3],number:3,datepicker:"1980-11-03",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],valuesx:[1495832683682],otherStatus:[3],number:4,datepicker:"1980-11-04",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],valuesx:[1495833068596],otherStatus:[233],number:5,datepicker:"1980-11-05",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],valuesx:[1495833068597],otherStatus:[233],number:6,datepicker:"1980-11-06",select:"3",switch:!0,decimal:123.45,checkbox:!0}],this.itemsUpdated=[]}ngOnInit(){this.editProperties={actionEdit:this.setFormGroup.bind(this)};for(let o=1;o<=600;o++){let s=`property${o}`;this.columnWithItems.push({property:s,label:`Dynamic ${o}`,editProperties:{disabled:!1}})}let r=[],a=this.items[0];for(let o=1;o<=1e4;o++){let s=Date.now()+o,x=ue(ce({},a),{id:s+o,name:`${a.name} ${o}`});for(let D=1;D<=600;D++)x[`property${D}`]=`Valor ${D}`;r.push(x)}this.items=r,this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!0,actionEdit:(o,s)=>{s==="include"&&!o.id&&(console.log("mode: ",s),o.id=o.$uuidThfIncluded,o.dependents=[],this.currentIdItem=o.id);let x={name:new f(o.name),status:new f(o.status,[j.min(1)]),values:new f(o.values,[j.required]),valuesx:new f(o.values,[j.required]),otherStatus:new f(o.otherStatus),number:new f(o.number),datepicker:new f(o.datepicker),select:new f(o.select),switch:new f(o.switch),decimal:new f(o.decimal),checkbox:new f(o.checkbox)};for(let D=1;D<=600;D++)x[`property${D}`]=new f(o[`property${D}`]);return this.form=new N(x),this.form},afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this)},this.itemsUpdated=[...this.items]}onKeyDown(r,a){a.code==="F9"&&this.thfGrid.showAdditionalHelp(r)}onBeforeSave(r,a){return console.log("before new value: ",r),console.log("before old value: ",a),!0}onBeforeSaveSubItems(r,a){return console.log("before new value: ",r),console.log("before old value: ",a),!0}onBeforeInsert(r){return console.log("before insert new value: ",r),this.itemsUpdated=[...this.itemsUpdated,r],!0}onBeforeInsertSubItems(r){r.id=r.$uuidThfIncluded;let a=this.itemsUpdated.find(o=>o.id===this.currentIdItem);return a.dependents=a.dependents?[...a.dependents,r]:[r],!0}onBeforeRemove(r){return!0}onAfterSave(r){console.log("onAfterSave(new): ",r)}onAfterRemove(r){return console.log("afterRemove: ",r),!0}setFormGroup(r){return this.form=new N({id:new f(r.id,[j.required]),name:new f(r.name),city:new f(r.city),birthdate:new f(r.birthdate),status:new f(r.status),email:new f(r.email)}),this.form}};l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid-virtual-doc"]],viewQuery:function(a,o){if(a&1&&A(Si,5),a&2){let s;q(s=k())&&(o.thfGrid=s.first)}},standalone:!1,decls:7,vars:12,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-spacing","small",3,"t-selectable","t-single-select","t-columns","t-items","t-grid-row-actions","t-actions-right","t-auto-size","t-height","t-virtual-columns","t-virtual-scroll"],[3,"htmlCode","tsCode"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",1),e(2,"Grid utilizando virtual-columns e virtual-scroll"),t(),n(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),a&2&&(p(4),c("t-selectable",!0)("t-single-select",!0)("t-columns",o.columnWithItems)("t-items",o.items)("t-grid-row-actions",o.gridRowsActionsWithItems)("t-actions-right",!0)("t-auto-size",!1)("t-height",500)("t-virtual-columns",!0)("t-virtual-scroll",!0),p(2),c("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[y,P,L,w],encapsulation:2});let d=l;return d})();var yt=(()=>{let l=class l{};l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-grid"]],standalone:!1,decls:12,vars:0,consts:[["p-title","THF-Grid","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview","",1,"samples-container"],["labs","",1,"samples-container"]],template:function(a,o){a&1&&(i(0,"po-page-default",0)(1,"api-thf-grid")(2,"div",1),n(3,"app-thf-grid-basic-doc")(4,"app-thf-grid-editing-inline-doc")(5,"app-thf-grid-row-actions-doc")(6,"app-thf-grid-aggregates-doc")(7,"app-thf-grid-editing-fluid-currency-doc")(8,"app-thf-grid-delete-service-doc")(9,"app-thf-grid-virtual-doc"),t(),i(10,"div",2),n(11,"app-thf-grid-labs-doc"),t()()())},dependencies:[Z,dt,Et,xt,St,bt,ft,ht,vt,gt],encapsulation:2});let d=l;return d})();function fi(d,l){if(d&1){let m=M();i(0,"div",7)(1,"po-container",8)(2,"po-input",9),g("ngModelChange",function(a){u(m);let o=S();return v(o.label,a)||(o.label=a),E(a)}),t(),i(3,"po-input",10),g("ngModelChange",function(a){u(m);let o=S();return v(o.help,a)||(o.help=a),E(a)}),t(),i(4,"po-input",11),g("ngModelChange",function(a){u(m);let o=S();return v(o.additionalHelpTooltip,a)||(o.additionalHelpTooltip=a),E(a)}),t(),i(5,"po-input",12),g("ngModelChange",function(a){u(m);let o=S();return v(o.placeholder,a)||(o.placeholder=a),E(a)}),t(),i(6,"po-input",13),g("ngModelChange",function(a){u(m);let o=S();return v(o.fieldErrorMessage,a)||(o.fieldErrorMessage=a),E(a)}),t(),i(7,"po-select",14),g("ngModelChange",function(a){u(m);let o=S();return v(o.fieldLabel,a)||(o.fieldLabel=a),E(a)}),t(),i(8,"po-select",15),g("ngModelChange",function(a){u(m);let o=S();return v(o.fieldValue,a)||(o.fieldValue=a),E(a)}),t(),i(9,"po-input",16),g("ngModelChange",function(a){u(m);let o=S();return v(o.fieldFormat,a)||(o.fieldFormat=a),E(a)}),C("p-change",function(a){u(m);let o=S();return E(o.onFieldFormatChange(a))}),t()(),i(10,"po-container",8)(11,"po-checkbox-group",17),g("ngModelChange",function(a){u(m);let o=S();return v(o.columnsName,a)||(o.columnsName=a),E(a)}),C("p-change",function(){u(m);let a=S();return E(a.updateColumns())}),t()(),i(12,"po-container",8)(13,"po-checkbox-group",18),g("ngModelChange",function(a){u(m);let o=S();return v(o.otherProperties,a)||(o.otherProperties=a),E(a)}),C("p-change",function(){u(m);let a=S();return E(a.changeOtherPropertiesOptions())}),t()(),i(14,"po-container",8)(15,"po-radio-group",19),g("ngModelChange",function(a){u(m);let o=S();return v(o.lookupModalSize,a)||(o.lookupModalSize=a),E(a)}),t()(),i(16,"po-container",8)(17,"po-radio-group",20),g("ngModelChange",function(a){u(m);let o=S();return v(o.size,a)||(o.size=a),E(a)}),t(),i(18,"po-textarea",21),g("ngModelChange",function(a){u(m);let o=S();return v(o.literals,a)||(o.literals=a),E(a)}),C("p-change-model",function(){u(m);let a=S();return E(a.changeLiterals())}),t(),i(19,"po-textarea",22),g("ngModelChange",function(a){u(m);let o=S();return v(o.filterSearchSelect,a)||(o.filterSearchSelect=a),E(a)}),C("p-change-model",function(){u(m);let a=S();return E(a.changeFilterSearchSelects())}),t(),i(20,"po-textarea",23),g("ngModelChange",function(a){u(m);let o=S();return v(o.keysLabel,a)||(o.keysLabel=a),E(a)}),C("p-change-model",function(){u(m);let a=S();return E(a.changeKeysLabel())}),t()()(),i(21,"div",24)(22,"po-button",25),C("p-click",function(){u(m);let a=S();return E(a.restore())}),t()()}if(d&2){let m=S();p(2),h("ngModel",m.label),p(),h("ngModel",m.help),p(),h("ngModel",m.additionalHelpTooltip),p(),h("ngModel",m.placeholder),p(),h("ngModel",m.fieldErrorMessage),p(),h("ngModel",m.fieldLabel),c("p-options",m.fieldLabelOptions),p(),h("ngModel",m.fieldValue),c("p-options",m.fieldValueOptions),p(),h("ngModel",m.fieldFormat),p(2),h("ngModel",m.columnsName),c("p-columns",4)("p-options",m.columnsOptions),p(2),c("p-columns",4)("p-options",m.otherPropertiesOptions),h("ngModel",m.otherProperties),p(2),c("p-columns",4)("p-options",m.lookupModalSizeOptions),h("ngModel",m.lookupModalSize),p(2),h("ngModel",m.size),c("p-options",m.sizesOptions),p(),h("ngModel",m.literals),p(),h("ngModel",m.filterSearchSelect),p(),h("ngModel",m.keysLabel)}}var Ct=(()=>{let l=class l{constructor(){this.htmlCode=`<po-container>
  <span class="po-font-text-large-bold">Labs</span>
  <po-divider class="po-divider-mb-0-75"></po-divider>
  <thf-lookup
    name="lookup"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    [t-additional-help-tooltip]="additionalHelpTooltip"
    [t-auto-height]="otherProperties.includes('autoHeight')"
    [t-clean]="otherProperties.includes('clean')"
    [t-columns]="columns"
    [t-disabled]="otherProperties.includes('disabled')"
    [t-error-limit]="otherProperties.includes('fieldErrorLimit')"
    [t-field-error-message]="fieldErrorMessage"
    [t-field-format]="fieldFormat"
    [t-field-label]="fieldLabel"
    [t-field-value]="fieldValue"
    [t-field-error-message]="fieldErrorMessage"
    [t-filter-search-select]="customFilterSearchSelect"
    [t-help]="help"
    [t-keys-label]="customKeysLabel"
    [t-label]="label"
    [t-literals]="customLiterals"
    [t-modal-size]="lookupModalSize"
    [t-multiple]="otherProperties.includes('multiple')"
    [t-no-autocomplete]="otherProperties.includes('noAutoComplete')"
    [t-optional]="otherProperties.includes('optional')"
    [t-placeholder]="placeholder"
    [t-required]="otherProperties.includes('required')"
    [t-show-required]="otherProperties.includes('showRequired')"
    [t-size]="size"
    (t-change)="changeEvent('t-change')"
    (t-error)="changeEvent('t-error')"
    (t-selected)="changeEvent('t-selected')"
    (t-focus)="changeEvent('t-focus')"
    (t-keydown)="changeEvent('t-keydown')"
    (t-rows-selected)="changeEvent('t-rows-selected')"
    [(ngModel)]="lookupSingle"
  ></thf-lookup>

  <po-container class="po-mt-1" style="display: flex">
    <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
  </po-container>

  <div class="po-row po-mt-2 po-mb-2" style="display: block">
      <po-container class="po-mb-2" style="display: flex">
        <po-input
          class="po-md-6"
          name="label"
          [(ngModel)]="label"
          p-clean
          p-label="Label"
        ></po-input>
        <po-input
          class="po-md-6"
          name="help"
          [(ngModel)]="help"
          p-clean
          p-label="Help"
        ></po-input>
        <po-input
          class="po-md-6"
          name="additionalHelpTooltip"
          [(ngModel)]="additionalHelpTooltip"
          p-clean
          p-label="Additional Help Tooltip"
        >
        </po-input>
        <po-input
          class="po-md-6"
          name="placeholder"
          [(ngModel)]="placeholder"
          p-clean
          p-label="Placeholder"
        ></po-input>

        <po-input
          class="po-md-6"
          name="fieldErrorMessage"
          [(ngModel)]="fieldErrorMessage"
          p-clean
          p-label="Field Error Message"
        ></po-input>

        <po-select
          class="po-md-6 po-lg-3"
          name="fieldLabel"
          [(ngModel)]="fieldLabel"
          p-label="Field Label"
          p-required
          [p-options]="fieldLabelOptions"
        ></po-select>

        <po-select
          class="po-md-6 po-lg-3"
          name="fieldValue"
          [(ngModel)]="fieldValue"
          p-label="Field Value"
          p-required
          [p-options]="fieldValueOptions"
        ></po-select>

        <po-input
          name="formatField"
          [(ngModel)]="fieldFormat"
          class="po-md-6"
          p-label="Field Format"
          p-help='Ex.: ["id", "name"]'
          (p-change)="onFieldFormatChange($event)"
        >
        </po-input>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="columnsName"
          [(ngModel)]="columnsName"
          [p-columns]="4"
          p-label="Columns"
          [p-options]="columnsOptions"
          (p-change)="updateColumns()"
        ></po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="otherProperties"
          p-label="Other Properties"
          [p-columns]="4"
          [p-options]="otherPropertiesOptions"
          [(ngModel)]="otherProperties"
          (p-change)="changeOtherPropertiesOptions()"
        ></po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-radio-group
          name="lookupModalSize"
          p-label="Modal Size"
          [p-columns]="4"
          [p-options]="lookupModalSizeOptions"
          [(ngModel)]="lookupModalSize"
        ></po-radio-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-radio-group
          class="po-lg-6"
          name="size"
          [(ngModel)]="size"
          p-label="Size"
          p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar."
          [p-options]="sizesOptions"
        >
        </po-radio-group>

        <po-textarea
          class="po-lg-6"
          name="literals"
          p-label="Literals"
          p-help='{ "modalTitle": "Busca avan\xE7ada" }'
          [(ngModel)]="literals"
          (p-change-model)="changeLiterals()"
        ></po-textarea>

        <po-textarea
          class="po-lg-6"
          name="filterSearchSelect"
          [(ngModel)]="filterSearchSelect"
          (p-change-model)="changeFilterSearchSelects()"
          p-help='[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]'
          p-label="Filter Search Select"
        ></po-textarea>

        <po-textarea
          class="po-lg-6"
          name="keysLabel"
          [(ngModel)]="keysLabel"
          (p-change-model)="changeKeysLabel()"
          p-help='[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]'
          p-label="Keys Label"
        ></po-textarea>

      </po-container>
    </div>

    <div class="po-row">
      <po-button
        class="po-lg-3 po-md-6"
        p-label="Restore"
        (p-click)="restore()"
      >
      </po-button>
    </div>
</po-container>
  `,this.tsCode=`import { Component } from '@angular/core';
import { PoCheckboxGroupOption, PoSelectOption } from '@po-ui/ng-components';
import { ThfLookupColumn, ThfLookupFilterSearchSelect, ThfLookupKeysLabel, ThfLookupLiterals } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-lookup-labs-doc',
  templateUrl: './thf-lookup-labs-doc.component.html',
  styleUrl: './thf-lookup-labs-doc.component.css'
})
export class ThfLookupLabsDocComponent {
  additionalHelpTooltip: string = '';
  columnsName: Array<string> = ['id', 'name', 'nickname', 'email'];
  customFilterSearchSelect: Array<ThfLookupFilterSearchSelect> = [];
  customKeysLabel: Array<ThfLookupKeysLabel> = [];
  customLiterals: ThfLookupLiterals = {};
  event: string = '';
  fieldErrorMessage: string = '';
  fieldLabel: string = 'name';
  fieldValue: string = 'value';
  filterSearchSelect: string = '';
  help: string = '';
  keysLabel: string = '';
  label: string = '';
  literals: string = '';
  lookupModalSize: string = 'lg';
  lookupSingle: any;
  otherProperties: Array<string> = [];
  placeholder: string = '';
  fieldFormat: Array<string> | undefined;
  size: string = 'medium';

  columns: Array<ThfLookupColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail' },
  ];

  lookupModalSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' },
    { label: 'xl', value: 'xl' },
    { label: 'auto', value: 'auto' },
  ];

  otherPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Auto Height', value: 'autoHeight' },
    { label: 'Clean', value: 'clean', disabled: false },
    { label: 'Disabled', value: 'disabled' },
    { label: 'Multiple', value: 'multiple' },
    { label: 'No Autocomplete', value: 'noAutoComplete' },
    { label: 'Optional', value: 'optional', disabled: false },
    { label: 'Required', value: 'required' },
    { label: 'Show Required', value: 'showRequired', disabled: true },
    { value: 'fieldErrorLimit', label: 'Limit Error Message' },
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
  ];

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Nome' },
    { value: 'nickname', label: 'Apelido' },
    { value: 'email', label: 'E-mail' },
  ];

  readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'name', label: 'Name' },
    ...this.columnsOptions,
  ];

  readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions,
  ];

  private readonly columnsDefinition: any = {
    id: <ThfLookupColumn>{ property: 'id', label: 'Id' },
    name: <ThfLookupColumn>{ property: 'name', label: 'Nome' },
    nickname: <ThfLookupColumn>{ property: 'nickname', label: 'Apelido' },
    email: <ThfLookupColumn>{ property: 'email', label: 'E-mail' },
  };

  ngOnInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  changeFilterSearchSelects() {
    try {
      this.customFilterSearchSelect = JSON.parse(this.filterSearchSelect);
    } catch {
      this.customFilterSearchSelect = [];
    }
  }

  changeKeysLabel() {
    try {
      this.customKeysLabel = JSON.parse(this.keysLabel);
    } catch {
      this.customKeysLabel = [];
    }
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = {};
    }
  }

  changeOtherPropertiesOptions() {
    const multiple = this.otherProperties.includes('multiple');
    const required = this.otherProperties.includes('required');

    this.otherPropertiesOptions[1].disabled = multiple;
    this.otherPropertiesOptions[7].disabled = !required;
    this.otherPropertiesOptions[5].disabled = required;
    this.otherPropertiesOptions = [...this.otherPropertiesOptions];
  }

  onFieldFormatChange(event: any) {
    try {
      this.fieldFormat = JSON.parse(event);
    } catch {
      this.fieldFormat = undefined;
    }
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.columnsName = ['id', 'name', 'nickname', 'email'];
    this.customFilterSearchSelect = [];
    this.customKeysLabel = [];
    this.customLiterals = {};
    this.event = '';
    this.fieldErrorMessage = '';
    this.fieldLabel = 'nickname';
    this.fieldValue = 'name';
    this.filterSearchSelect = '';
    this.help = '';
    this.keysLabel = '';
    this.label = '';
    this.literals = '';
    this.lookupSingle = undefined;
    this.otherProperties = [];
    this.placeholder = '';
    this.fieldFormat = undefined;
    this.size = 'medium';
    this.changeFilterSearchSelects();
    this.changeKeysLabel();
    this.changeLiterals();
    this.changeOtherPropertiesOptions();
    this.updateColumns();
    this.lookupModalSize = 'lg';
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach((column) =>
      this.columns.push(this.columnsDefinition[column])
    );
  }
}
  `,this.additionalHelpTooltip="",this.columnsName=["id","name","nickname","email"],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.help="",this.keysLabel="",this.label="",this.literals="",this.fieldErrorMessage="",this.otherProperties=[],this.placeholder="",this.lookupModalSize="lg",this.size="medium",this.columns=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail"}],this.lookupModalSizeOptions=[{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"},{label:"xl",value:"xl"},{label:"auto",value:"auto"}],this.otherPropertiesOptions=[{label:"Auto Height",value:"autoHeight"},{label:"Clean",value:"clean",disabled:!1},{label:"Disabled",value:"disabled"},{label:"Multiple",value:"multiple"},{label:"No Autocomplete",value:"noAutoComplete"},{label:"Optional",value:"optional",disabled:!1},{label:"Required",value:"required"},{label:"Show Required",value:"showRequired",disabled:!0},{value:"fieldErrorLimit",label:"Limit Error Message"}],this.sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Nome"},{value:"nickname",label:"Apelido"},{value:"email",label:"E-mail"}],this.fieldLabelOptions=[{value:"name",label:"Name"},...this.columnsOptions],this.fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions],this.columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Nome"},nickname:{property:"nickname",label:"Apelido"},email:{property:"email",label:"E-mail"}}}ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeFilterSearchSelects(){try{this.customFilterSearchSelect=JSON.parse(this.filterSearchSelect)}catch{this.customFilterSearchSelect=[]}}changeKeysLabel(){try{this.customKeysLabel=JSON.parse(this.keysLabel)}catch{this.customKeysLabel=[]}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals={}}}changeOtherPropertiesOptions(){let r=this.otherProperties.includes("multiple"),a=this.otherProperties.includes("required");this.otherPropertiesOptions[1].disabled=r,this.otherPropertiesOptions[7].disabled=!a,this.otherPropertiesOptions[5].disabled=a,this.otherPropertiesOptions=[...this.otherPropertiesOptions]}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch{this.fieldFormat=void 0}}restore(){this.additionalHelpTooltip="",this.columnsName=["id","name","nickname","email"],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldErrorMessage="",this.fieldLabel="nickname",this.fieldValue="name",this.filterSearchSelect="",this.help="",this.keysLabel="",this.label="",this.literals="",this.lookupSingle=void 0,this.otherProperties=[],this.placeholder="",this.fieldFormat=void 0,this.size="medium",this.changeFilterSearchSelects(),this.changeKeysLabel(),this.changeLiterals(),this.changeOtherPropertiesOptions(),this.updateColumns(),this.lookupModalSize="lg"}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}};l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-lookup-labs-doc"]],standalone:!1,decls:10,vars:30,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookup","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-change","t-error","t-selected","t-focus","t-keydown","t-rows-selected","ngModelChange","t-additional-help-tooltip","t-auto-height","t-clean","t-columns","t-disabled","t-error-limit","t-field-error-message","t-field-format","t-field-label","t-field-value","t-filter-search-select","t-help","t-keys-label","t-label","t-literals","t-modal-size","t-multiple","t-no-autocomplete","t-optional","t-placeholder","t-required","t-show-required","t-size","ngModel"],[1,"po-mt-1",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","columnsName","p-label","Columns",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],["name","otherProperties","p-label","Other Properties",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","lookupModalSize","p-label","Modal Size",3,"ngModelChange","p-columns","p-options","ngModel"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","literals","p-label","Literals","p-help",'{ "modalTitle": "Busca avan\xE7ada" }',1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","filterSearchSelect","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]',"p-label","Filter Search Select",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","keysLabel","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]',"p-label","Keys Label",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],[1,"po-row"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let s=M();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),n(3,"po-divider",2),i(4,"thf-lookup",3),C("t-change",function(){return u(s),E(o.changeEvent("t-change"))})("t-error",function(){return u(s),E(o.changeEvent("t-error"))})("t-selected",function(){return u(s),E(o.changeEvent("t-selected"))})("t-focus",function(){return u(s),E(o.changeEvent("t-focus"))})("t-keydown",function(){return u(s),E(o.changeEvent("t-keydown"))})("t-rows-selected",function(){return u(s),E(o.changeEvent("t-rows-selected"))}),g("ngModelChange",function(D){return u(s),v(o.lookupSingle,D)||(o.lookupSingle=D),E(D)}),t(),i(5,"po-container",4),n(6,"po-info",5),t(),n(7,"app-code-accordion-doc",6),V(8,fi,23,24,"ng-template",null,0,oe),t()}if(a&2){let s=K(9);p(4),c("t-additional-help-tooltip",o.additionalHelpTooltip)("t-auto-height",o.otherProperties.includes("autoHeight"))("t-clean",o.otherProperties.includes("clean"))("t-columns",o.columns)("t-disabled",o.otherProperties.includes("disabled"))("t-error-limit",o.otherProperties.includes("fieldErrorLimit"))("t-field-error-message",o.fieldErrorMessage)("t-field-format",o.fieldFormat)("t-field-label",o.fieldLabel)("t-field-value",o.fieldValue)("t-field-error-message",o.fieldErrorMessage)("t-filter-search-select",o.customFilterSearchSelect)("t-help",o.help)("t-keys-label",o.customKeysLabel)("t-label",o.label)("t-literals",o.customLiterals)("t-modal-size",o.lookupModalSize)("t-multiple",o.otherProperties.includes("multiple"))("t-no-autocomplete",o.otherProperties.includes("noAutoComplete"))("t-optional",o.otherProperties.includes("optional"))("t-placeholder",o.placeholder)("t-required",o.otherProperties.includes("required"))("t-show-required",o.otherProperties.includes("showRequired"))("t-size",o.size),h("ngModel",o.lookupSingle),p(2),c("p-value",o.event),p(),c("properties",!0)("dynamicTemplate",s)("htmlCode",o.htmlCode)("tsCode",o.tsCode)}},dependencies:[B,J,G,y,P,fe,re,tt,nt,ve,$,de,w],styles:[".po-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px}.containerProperties[_ngcontent-%COMP%]{flex:1 1 100%}"]});let d=l;return d})();var Tt=(()=>{let l=class l{constructor(){this.htmlCode=`<form [formGroup]="formMission">
  <thf-lookup
    formControlName="lookup2"
    name="lookupMultiple"
    t-field-label="name"
    t-field-value="value"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    t-key-last-search="lookupMultiple"
    t-label="Her\xF3is"
    t-placeholder="Placeholder multiple"
    [t-columns]="columns"
    [t-keys-label]="keysLabel"
    [t-multiple]="true"
    [t-filter-search-select]="filterSelect"
  ></thf-lookup>
</form>
  `,this.tsCode=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-thf-lookup-form-doc',
  templateUrl: './thf-lookup-form-doc.component.html',
  styleUrl: './thf-lookup-form-doc.component.css',
})
export class ThfLookupFormDocComponent {
  formMission = new FormGroup({
    lookup2: new FormControl(['1495831666871']),
  });

  columns = [
    { property: 'name', label: 'Name' },
    { property: 'nickname', label: 'Nickname' },
    { property: 'email', label: 'Email' },
    { property: 'id', label: 'Id' },
  ];

  keysLabel = [
    { label: 'Nome', value: 'name' },
    { label: 'Email', value: 'email' },
  ];

  filterSelect = [
    { label: 'Nome', value: 'name' },
    { label: 'Nickname', value: 'nickname' },
    { label: 'Email', value: 'email' },
  ];
}
  `,this.formMission=new N({lookup2:new f(["1495831666871"])}),this.columns=[{property:"name",label:"Name"},{property:"nickname",label:"Nickname"},{property:"email",label:"Email"},{property:"id",label:"Id"}],this.keysLabel=[{label:"Nome",value:"name"},{label:"Email",value:"email"}],this.filterSelect=[{label:"Nome",value:"name"},{label:"Nickname",value:"nickname"},{label:"Email",value:"email"}]}};l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-lookup-form-doc"]],standalone:!1,decls:7,vars:7,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],[3,"formGroup"],["formControlName","lookup2","name","lookupMultiple","t-field-label","name","t-field-value","value","t-filter-service","https://po-sample-api.onrender.com/v1/heroes","t-key-last-search","lookupMultiple","t-label","Her\xF3is","t-placeholder","Placeholder multiple",3,"t-columns","t-keys-label","t-multiple","t-filter-search-select"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Multiple Reactive Form"),t(),n(3,"po-divider",1),i(4,"form",2),n(5,"thf-lookup",3),t(),n(6,"app-code-accordion-doc",4),t()),a&2&&(p(4),c("formGroup",o.formMission),p(),c("t-columns",o.columns)("t-keys-label",o.keysLabel)("t-multiple",!0)("t-filter-search-select",o.filterSelect),p(),c("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[be,B,Se,Ne,Be,y,P,de,w],encapsulation:2});let d=l;return d})();var Pt=(()=>{let l=class l{constructor(){this.htmlCode=`<thf-lookup
  name="lookupSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
></thf-lookup>
  `,this.tsCode=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-basic-doc',
  templateUrl: './thf-lookup-basic-doc.component.html',
  styleUrl: './thf-lookup-basic-doc.component.css'
})
export class ThfLookupBasicDocComponent {}`}};l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-lookup-basic-doc"]],standalone:!1,decls:7,vars:2,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupSingle","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Single"),t(),n(3,"po-divider",1),i(4,"form"),n(5,"thf-lookup",2),t(),n(6,"app-code-accordion-doc",3),t()),a&2&&(p(6),c("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[be,Se,Ge,y,P,de,w],encapsulation:2});let d=l;return d})();var wt=(()=>{let l=class l{};l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-lookup"]],standalone:!1,decls:8,vars:0,consts:[["p-title","THF-Lookup","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],[1,"samples-container"],["labs","",1,"samples-container"]],template:function(a,o){a&1&&(i(0,"po-page-default",0)(1,"api-thf-lookup")(2,"div",1)(3,"div",2),n(4,"app-thf-lookup-basic-doc")(5,"app-thf-lookup-form-doc"),t()(),i(6,"div",3),n(7,"app-thf-lookup-labs-doc"),t()()())},dependencies:[Z,mt,Ct,Tt,Pt],encapsulation:2});let d=l;return d})();var yi=["splitter"],Ci=["paneForm"],Ti=()=>({label:"horizontal",value:"horizontal"}),Pi=()=>({label:"vertical",value:"vertical"}),wi=(d,l)=>[d,l];function Di(d,l){if(d&1){let m=M();i(0,"thf-splitter-pane",10),C("t-size-change",function(){u(m);let a=S();return E(a.changeEvent("(t-size-change)"))}),i(1,"div",11)(2,"po-widget",12),C("p-primary-action",function(){let a=u(m).index,o=S();return E(o.removePane(a))}),i(3,"div",13),e(4),t()()()()}if(d&2){let m=l.$implicit,r=l.index;c("t-resizable",m.resizable)("t-scrollable",m.scrollable)("t-size",m.size),p(4),_e(" Pane Content ",r," ")}}function Ai(d,l){if(d&1){let m=M();i(0,"div",14)(1,"po-container",15),n(2,"po-dynamic-form",16,2),i(4,"div",17)(5,"po-button",18),C("p-click",function(){u(m);let a=K(3),o=S();return E(o.addPane(a.form.value))}),t()()(),i(6,"po-container",15)(7,"po-switch",19),g("ngModelChange",function(a){u(m);let o=S();return v(o.disabled,a)||(o.disabled=a),E(a)}),t(),i(8,"po-radio-group",20),g("ngModelChange",function(a){u(m);let o=S();return v(o.orientation,a)||(o.orientation=a),E(a)}),t()()(),i(9,"div",17)(10,"po-button",21),C("p-click",function(){u(m);let a=S();return E(a.restore())}),t()()}if(d&2){let m=K(3),r=S();p(2),c("p-fields",r.panesFieldsForm)("p-value",r.pane),p(3),c("p-disabled",m.form.invalid),p(2),h("ngModel",r.disabled),p(),h("ngModel",r.orientation),c("p-options",Re(8,wi,me(6,Ti),me(7,Pi)))}}var Dt=(()=>{let l=class l{constructor(){this.event="",this.panes=[],this.pane={},this.disabled=!1,this.orientation="horizontal",this.panesFieldsForm=[{property:"size",gridColumns:6,type:"number",maxValue:100,minValue:0,maxLength:3,step:5,help:"Valor em porc (%)"},{property:"scrollable",type:"boolean",gridColumns:3}],this.htmlCode=`<thf-splitter
  #splitter
  name="splitter"
  [t-disabled]="disabled"
  [t-orientation]="orientation"
  (t-layout-change)="changeEvent('(t-layout-change)')"
>
  <thf-splitter-pane
    *ngFor="let pane of panes; let i = index"
    (t-size-change)="changeEvent('(t-size-change)')"
    [t-resizable]="pane.resizable"
    [t-scrollable]="pane.scrollable"
    [t-size]="pane.size"
  >
    <div class="po-m-2">
      <po-widget p-title="Title Pane" p-primary-label="Close" (p-primary-action)="removePane(i)">
        <div class="po-font-subtitle po-text-center">Pane Content {{ i }}</div>
      </po-widget>
    </div>
  </thf-splitter-pane>
</thf-splitter>

<po-container class="po-mt-1" style="display: flex">
  <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
</po-container>

<div class="po-row po-mt-2 po-mb-2" style="display: block">
  <po-container class="po-mb-2" style="display: flex">
    <po-dynamic-form #paneForm [p-fields]="panesFieldsForm" [p-value]="pane"> </po-dynamic-form>
    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Add Pane"
        [p-disabled]="paneForm.form.invalid"
        (p-click)="addPane(paneForm.form.value)"
      />
    </div>
  </po-container>

  <po-container class="po-mb-2" style="display: flex">
    <po-switch class="po-md-6" name="disabled" p-label="Disabled" [(ngModel)]="disabled" />

    <po-radio-group
      class="po-md-6"
      name="orientation"
      p-label="orientation"
      [(ngModel)]="orientation"
      [p-options]="[
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' }
      ]"
    />
  </po-container>
</div>

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Restore" (p-click)="restore()"> </po-button>
</div>
`,this.tsCode=`import { Component, OnInit, ViewChild } from '@angular/core';
import {
  PoDynamicFormComponent,
  PoDynamicFormField,
} from '@po-ui/ng-components';
import {
  ThfSplitterComponent,
  ThfSplitterPaneComponent,
} from '@totvs/thf-components';
 
@Component({
  selector: 'app-thf-splitter-labs-doc',
  templateUrl: './thf-splitter-labs-doc.component.html',
  styleUrl: './thf-splitter-labs-doc.component.css',
  standalone: false,
})
  export class ThfSplitterLabsDocComponent implements OnInit {
@ViewChild('splitter', { static: true }) splitter!: ThfSplitterComponent;
  @ViewChild('paneForm', { static: true }) paneForm!: PoDynamicFormComponent;

  event: string = '';
  panes: Array<ThfSplitterPaneComponent> = [];
  pane = {};
  disabled = false;
  orientation = 'horizontal';

  panesFieldsForm: Array<PoDynamicFormField> = [
    {
      property: 'size',
      gridColumns: 6,
      type: 'number',
      maxValue: 100,
      minValue: 0,
      maxLength: 3,
      step: 5,
      help: 'Valor em porc (%)'
    },
    { property: 'scrollable', type: 'boolean', gridColumns: 3 }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  restore() {
    this.event = '';
    this.panes = [];
    this.pane = {
      size: '50',
      scrollable: false
    };
  }

  addPane(_pane: any) {
    const newPane = Object.assign({}, _pane);
    newPane.size += '%';
    this.panes.push(newPane);
    this.pane = {
      size: '50',
      scrollable: false
    };
  }

  removePane(idx: number) {
    this.panes.splice(idx, 1);
  }
}`}ngOnInit(){this.restore()}changeEvent(r){this.event=r}restore(){this.event="",this.panes=[],this.pane={size:"50",scrollable:!1}}addPane(r){let a=Object.assign({},r);a.size+="%",this.panes.push(a),this.pane={size:"50",scrollable:!1}}removePane(r){this.panes.splice(r,1)}};l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-splitter-labs-doc"]],viewQuery:function(a,o){if(a&1&&(A(yi,7),A(Ci,7)),a&2){let s;q(s=k())&&(o.splitter=s.first),q(s=k())&&(o.paneForm=s.first)}},standalone:!1,decls:12,vars:8,consts:[["splitter",""],["customTemplate",""],["paneForm",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","splitter",3,"t-layout-change","t-disabled","t-orientation"],[3,"t-resizable","t-scrollable","t-size","t-size-change",4,"ngFor","ngForOf"],[1,"po-mt-1",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[3,"t-size-change","t-resizable","t-scrollable","t-size"],[1,"po-m-2"],["p-title","Title Pane","p-primary-label","Close",3,"p-primary-action"],[1,"po-font-subtitle","po-text-center"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Pane",1,"po-md-3",3,"p-click","p-disabled"],["name","disabled","p-label","Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["name","orientation","p-label","orientation",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let s=M();i(0,"po-container")(1,"span",3),e(2,"Labs"),t(),n(3,"po-divider",4),i(4,"thf-splitter",5,0),C("t-layout-change",function(){return u(s),E(o.changeEvent("(t-layout-change)"))}),V(6,Di,5,4,"thf-splitter-pane",6),t(),i(7,"po-container",7),n(8,"po-info",8),t(),n(9,"app-code-accordion-doc",9),V(10,Ai,11,11,"ng-template",null,1,oe),t()}if(a&2){let s=K(11);p(4),c("t-disabled",o.disabled)("t-orientation",o.orientation),p(2),c("ngForOf",o.panes),p(2),c("p-value",o.event),p(),c("properties",!0)("dynamicTemplate",s)("htmlCode",o.htmlCode)("tsCode",o.tsCode)}},dependencies:[Ve,B,J,G,y,P,ot,re,Ye,$,le,ee,Y,w],encapsulation:2});let d=l;return d})();var ki=["gridComponent"];function Fi(d,l){if(d&1){let m=M();i(0,"thf-splitter-pane",9)(1,"po-widget",11),C("p-primary-action",function(){u(m);let a=S();return E(a.closePane())}),i(2,"div",12),n(3,"po-info",13),t(),i(4,"div",12),n(5,"po-info",14),t(),i(6,"div",12),n(7,"po-info",15),t(),i(8,"div",12),n(9,"po-info",16),t()()()}if(d&2){let m=S();c("t-size","30%"),p(3),c("p-value",m.selectedHero.name),p(2),c("p-value",m.selectedHero.nickname),p(2),c("p-value",m.selectedHero.email),p(2),c("p-value",m.selectedHero.city)}}var At=(()=>{let l=class l{constructor(r,a){this.router=r,this.changeDetector=a,this.showHeroPane=!1,this.selectedHero=null,this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",email:"hulksmash@marvel.com",status:1,city:"Lages"},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",email:"spvalueerman@marvel.com",status:2,city:"Brusque"},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,email:"goku@dbz.com",city:"Guarulhos"},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,email:"hawkeye@marvel.com",city:"Campinas"},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,email:"nickfuckingfury@marvel.com",city:null},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,email:"gohan@dbz.com",city:null}],this.column=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}]},{property:"city",label:"Cidade"}],this.htmlCode=`  <thf-splitter t-disabled>
    <thf-splitter-pane>
      <div class="po-lg-12 po-pt-2 po-pb-2">
        <div
          class="po-row"
          style="justify-content: space-between; align-items: center"
        >
          <p class="po-font-subtitle">Controle de Her\xF3is</p>
          <po-button
            p-icon="an an-star"
            p-label="Star"
            (p-click)="openExternalLink()"
          ></po-button>
        </div>
        <thf-grid
          #gridComponent
          [t-height]="300"
          [t-selectable]="true"
          [t-single-select]="true"
          [t-items]="items"
          [t-columns]="column"
          [t-sortable]="true"
          (t-selected)="selectItem($event)"
          (t-unselected)="closePane()"
        />
      </div>
    </thf-splitter-pane>

    @if (showHeroPane) {
    <thf-splitter-pane [t-size]="'30%'">
      <po-widget
        p-title="Her\xF3i Selecionado"
        p-primary-label="Fechar Painel"
        (p-primary-action)="closePane()"
      >
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Name"
            [p-value]="selectedHero.name"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Apelido"
            [p-value]="selectedHero.nickname"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Contato"
            [p-value]="selectedHero.email"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Reside em"
            [p-value]="selectedHero.city"
          />
        </div>
      </po-widget>
    </thf-splitter-pane>
    }
  </thf-splitter>
`,this.tsCode=`import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ThfGridColumn, ThfGridComponent } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-splitter-grid-doc',
  templateUrl: './thf-splitter-grid-doc.component.html',
  styleUrl: './thf-splitter-grid-doc.component.css',
  standalone: false,
})
export class ThfSplitterGridDocComponent implements AfterViewInit {
  @ViewChild('gridComponent', { static: true })
  grid!: ThfGridComponent;

  showHeroPane = false;
  selectedHero: any = null;

  items = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      email: 'hulksmash@marvel.com',
      status: 1,
      city: 'Lages',
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      email: 'spvalueerman@marvel.com',
      status: 2,
      city: 'Brusque',
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      email: 'goku@dbz.com',
      city: 'Guarulhos',
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      email: 'hawkeye@marvel.com',
      city: 'Campinas',
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      email: 'nickfuckingfury@marvel.com',
      city: null,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      email: 'gohan@dbz.com',
      city: null,
    },
  ];

  column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'color-11', label: 'Ativo' },
        { value: 2, color: 'color-08', label: 'Inativo' },
      ],
    },
    { property: 'city', label: 'Cidade' },
  ];

  constructor(
    protected router: Router,
    protected changeDetector: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.grid.selectRowItem(this.items[0]);
    this.selectItem(this.items[0]);

    this.changeDetector.detectChanges();
  }

  openExternalLink() {
    window.open('https://github.com/po-ui/po-angular');
  }

  selectItem(hero: any) {
    if (!hero) {
      this.closePane();
      return;
    }
    this.selectedHero = {
      id: hero.id || '',
      name: hero.name || '',
      nickname: hero.nickname || '',
      email: hero.email || '',
      city: hero.city || '',
    };
    this.showHeroPane = true;
  }

  closePane() {
    this.showHeroPane = false;
    this.selectedHero = null;
    this.grid.unselectRows();
  }
}`}ngAfterViewInit(){this.grid.selectRowItem(this.items[0]),this.selectItem(this.items[0]),this.changeDetector.detectChanges()}openExternalLink(){window.open("https://github.com/po-ui/po-angular")}selectItem(r){if(!r){this.closePane();return}this.selectedHero={id:r.id||"",name:r.name||"",nickname:r.nickname||"",email:r.email||"",city:r.city||""},this.showHeroPane=!0}closePane(){this.showHeroPane=!1,this.selectedHero=null,this.grid.unselectRows()}};l.\u0275fac=function(a){return new(a||l)(R(Je),R(Me))},l.\u0275cmp=b({type:l,selectors:[["app-thf-splitter-grid-doc"]],viewQuery:function(a,o){if(a&1&&A(ki,7),a&2){let s;q(s=k())&&(o.grid=s.first)}},standalone:!1,decls:15,vars:9,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["t-disabled",""],[1,"po-lg-12","po-pt-2","po-pb-2"],[1,"po-row",2,"justify-content","space-between","align-items","center"],[1,"po-font-subtitle"],["p-icon","an an-star","p-label","Star",3,"p-click"],[3,"t-selected","t-unselected","t-height","t-selectable","t-single-select","t-items","t-columns","t-sortable"],[3,"t-size"],[3,"htmlCode","tsCode"],["p-title","Her\xF3i Selecionado","p-primary-label","Fechar Painel",3,"p-primary-action"],[1,"po-row"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Apelido",1,"po-md-12",3,"p-value"],["p-label","Contato",1,"po-md-12",3,"p-value"],["p-label","Reside em",1,"po-md-12",3,"p-value"]],template:function(a,o){if(a&1){let s=M();i(0,"po-container")(1,"span",1),e(2,"Divis\xE3o din\xE2mica"),t(),n(3,"po-divider",2),i(4,"thf-splitter",3)(5,"thf-splitter-pane")(6,"div",4)(7,"div",5)(8,"p",6),e(9,"Controle de Her\xF3is"),t(),i(10,"po-button",7),C("p-click",function(){return u(s),E(o.openExternalLink())}),t()(),i(11,"thf-grid",8,0),C("t-selected",function(D){return u(s),E(o.selectItem(D))})("t-unselected",function(){return u(s),E(o.closePane())}),t()()(),Fe(13,Fi,10,5,"thf-splitter-pane",9),t(),n(14,"app-code-accordion-doc",10),t()}a&2&&(p(11),c("t-height",300)("t-selectable",!0)("t-single-select",!0)("t-items",o.items)("t-columns",o.column)("t-sortable",!0),p(2),Ie(o.showHeroPane?13:-1),p(),c("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[G,y,P,$,le,L,ee,Y,w],encapsulation:2});let d=l;return d})();var qt=(()=>{let l=class l{constructor(){this.optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7},rendererOption:"svg"},this.optionsPie={rendererOption:"svg"},this.categoriesColumn=["coffee","chocolate","tea"],this.evolutionOfCoffeeAndSomeCompetitors=[{label:"2014",data:[91,40,42],type:se.Column},{label:"2017",data:[93,52,18],type:se.Column},{label:"2020",data:[95,21,-17],type:se.Column},{label:"Coffee consumption in Brazil",data:[34,27,79],type:se.Line,color:"color-10"}],this.coffeeProduction=[{label:"Brazil",data:2796,tooltip:"Brazil (South America)",color:"color-10"},{label:"Vietnam",data:1076,tooltip:"Vietnam (Asia)"},{label:"Colombia",data:688,tooltip:"Colombia (South America)"},{label:"Indonesia",data:682,tooltip:"Indonesia (Asia/Oceania)"},{label:"Peru",data:273,tooltip:"Peru (South America)"}],this.htmlCode=`<thf-splitter>
  <thf-splitter-pane>
    <po-widget p-title="Chart type column with line">
      <po-chart
        p-title="Evolution of coffee and some competitors - %"
        [p-options]="optionsColumn"
        [p-categories]="categoriesColumn"
        [p-series]="evolutionOfCoffeeAndSomeCompetitors"
      >
      </po-chart>
    </po-widget>
  </thf-splitter-pane>
  <thf-splitter-pane [t-size]="'50%'">
    <po-widget p-title="Chart type pizza">
      <po-chart p-title="Top 5 coffee producing countries (in tons)" [p-series]="coffeeProduction"> </po-chart>
    </po-widget>
  </thf-splitter-pane>
</thf-splitter>
`,this.tsCode=`import { Component } from '@angular/core';
import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'app-thf-splitter-chart-doc',
  templateUrl: './thf-splitter-chart-doc.component.html',
  styleUrl: './thf-splitter-chart-doc.component.css',
  standalone: false,
})
export class ThfSplitterChartDocComponent {
    optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      maxRange: 100,
      gridLines: 7,
    },
    rendererOption: 'svg',
  };
  optionsPie: PoChartOptions = {
    rendererOption: 'svg',
  };

  categoriesColumn: Array<string> = ['coffee', 'chocolate', 'tea'];
  evolutionOfCoffeeAndSomeCompetitors: Array<PoChartSerie> = [
    { label: '2014', data: [91, 40, 42], type: PoChartType.Column },
    { label: '2017', data: [93, 52, 18], type: PoChartType.Column },
    { label: '2020', data: [95, 21, -17], type: PoChartType.Column },
    {
      label: 'Coffee consumption in Brazil',
      data: [34, 27, 79],
      type: PoChartType.Line,
      color: 'color-10',
    },
  ];
  coffeeProduction: Array<PoChartSerie> = [
    {
      label: 'Brazil',
      data: 2796,
      tooltip: 'Brazil (South America)',
      color: 'color-10',
    },
    { label: 'Vietnam', data: 1076, tooltip: 'Vietnam (Asia)' },
    { label: 'Colombia', data: 688, tooltip: 'Colombia (South America)' },
    { label: 'Indonesia', data: 682, tooltip: 'Indonesia (Asia/Oceania)' },
    { label: 'Peru', data: 273, tooltip: 'Peru (South America)' },
  ];
}
`}};l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-splitter-chart-doc"]],standalone:!1,decls:12,vars:8,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["p-title","Chart type column with line"],["p-title","Evolution of coffee and some competitors - %",3,"p-options","p-categories","p-series"],[3,"t-size"],["p-title","Chart type pizza"],["p-title","Top 5 coffee producing countries (in tons)",3,"p-series","p-options"],[3,"htmlCode","tsCode"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Divis\xE3o com gr\xE1ficos din\xE2micos"),t(),n(3,"po-divider",1),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"po-widget",2),n(7,"po-chart",3),t()(),i(8,"thf-splitter-pane",4)(9,"po-widget",5),n(10,"po-chart",6),t()()(),n(11,"app-code-accordion-doc",7),t()),a&2&&(p(7),c("p-options",o.optionsColumn)("p-categories",o.categoriesColumn)("p-series",o.evolutionOfCoffeeAndSomeCompetitors),p(),c("t-size","50%"),p(2),c("p-series",o.coffeeProduction)("p-options",o.optionsPie),p(),c("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[Xe,y,P,le,ee,Y,w],encapsulation:2});let d=l;return d})();var kt=(()=>{let l=class l{constructor(){this.htmlCode=`<thf-splitter>
          <thf-splitter-pane>
            <h4>Pane 1</h4>
          </thf-splitter-pane>

          <thf-splitter-pane>
            <thf-splitter [t-orientation]="'vertical'">
              <thf-splitter-pane>
                <h4>Pane 2</h4>
              </thf-splitter-pane>
              <thf-splitter-pane>
                <h4>Pane 3</h4>
              </thf-splitter-pane>
            </thf-splitter>
          </thf-splitter-pane>
        </thf-splitter>
`,this.tsCode=`import { Component } from '@angular/core';
  
@Component({
  selector: 'app-thf-splitter-basic-doc',
  standalone: false,
  templateUrl: './thf-thf-splitter-basic-doc.html',
})
export class ThfSplitterBasicDocComponent {
}
  `}};l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-splitter-basic-doc"]],standalone:!1,decls:17,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-orientation"],[3,"htmlCode","tsCode"]],template:function(a,o){a&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic"),t(),n(3,"po-divider",1),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"h4"),e(7,"Pane 1"),t()(),i(8,"thf-splitter-pane")(9,"thf-splitter",2)(10,"thf-splitter-pane")(11,"h4"),e(12,"Pane 2"),t()(),i(13,"thf-splitter-pane")(14,"h4"),e(15,"Pane 3"),t()()()()(),n(16,"app-code-accordion-doc",3),t()),a&2&&(p(9),c("t-orientation","vertical"),p(7),c("htmlCode",o.htmlCode)("tsCode",o.tsCode))},dependencies:[y,P,ee,Y,w],encapsulation:2});let d=l;return d})();var Ri=()=>[At,qt,kt];function Mi(d,l){d&1&&(i(0,"div",3),n(1,"app-thf-splitter-basic-doc")(2,"app-thf-splitter-grid-doc")(3,"app-thf-splitter-chart-doc"),t())}function ji(d,l){d&1&&n(0,"po-loading-overlay",4),d&2&&c("p-screen-lock",!1)}var Ft=(()=>{let l=class l{};l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-splitter"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Splitter","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],["labs","",1,"samples-container"],[1,"samples-container"],[3,"p-screen-lock"]],template:function(a,o){a&1&&(i(0,"po-page-default",0)(1,"api-thf-splitter")(2,"div",1),Ae(3,Mi,4,0)(4,ji,1,1),qe(5,3,Ri,null,4),ke(),t(),i(7,"div",2),n(8,"app-thf-splitter-labs-doc"),t()()())},dependencies:[$e,Z,pt,Dt],encapsulation:2});let d=l;return d})();var It=(()=>{let l=class l{};l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=b({type:l,selectors:[["app-thf-splitter-pane"]],standalone:!1,decls:2,vars:0,consts:[["p-title","THF-Splitter-Pane","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"]],template:function(a,o){a&1&&(i(0,"po-page-default",0),n(1,"api-thf-splitter-pane"),t())},dependencies:[Z,st],encapsulation:2});let d=l;return d})();var Vi=[{path:"thf-grid",component:yt},{path:"thf-lookup",component:wt},{path:"thf-splitter",component:Ft},{path:"thf-splitter-pane",component:It}],_t=(()=>{let l=class l{};l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=ne({type:l}),l.\u0275inj=ie({imports:[Ce.forChild(Vi),Ce]});let d=l;return d})();var Sd=(()=>{let l=class l{};l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=ne({type:l}),l.\u0275inj=ie({imports:[xe,He,We,ge,rt,lt,ct,_t,Ke]});let d=l;return d})();export{Sd as DocumentationModule};
