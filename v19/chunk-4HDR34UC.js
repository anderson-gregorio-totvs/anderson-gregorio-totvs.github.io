import{$ as O,$a as A,$c as ee,Ca as z,Cd as oe,Da as q,Ea as U,F as b,Fa as G,Fc as F,G as u,Ga as e,Ia as w,Ka as g,La as v,Lb as R,Ma as k,Mb as K,Nb as X,Ob as _,Od as ne,Pa as P,Pb as J,T as r,U as H,Ua as j,Va as Y,Wb as Z,Xd as S,Yb as $,Yd as C,Zb as V,_ as c,_b as D,ha as s,ka as T,kb as Q,kc as y,md as te,na as o,oa as t,oc as L,pa as l,re as f,se as ie,ta as N,ua as h,y as M}from"./chunk-ODUOVNEW.js";var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-checkbox-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","checkbox","p-label","PO Checkbox"]],template:function(a,i){a&1&&l(0,"po-checkbox",0)},dependencies:[y],encapsulation:2})}return n})();var ue=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-checkbox-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Basic"),t(),o(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox name="checkbox" p-label="PO Checkbox"> </po-checkbox>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-basic',
  templateUrl: './sample-po-checkbox-basic.component.html',
  standalone: false
})
export class SamplePoCheckboxBasicComponent {}
`),t()()()()(),o(21,"div",10),l(22,"sample-po-checkbox-basic"),t(),l(23,"hr")),a&2&&(r(5),T("po-icon "+i.sampleCodeButtonIcon),r(),w(" ",i.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,ue,i.hideSampleCodeTabs)))},dependencies:[A,f,S,C,ae],encapsulation:2})}return n})();var me=(()=>{class n{checkbox;disabled;size;event;label;ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.checkbox=void 0,this.disabled=!1,this.event=void 0,this.label=void 0}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-checkbox-labs"]],standalone:!1,decls:15,vars:11,consts:[["f","ngForm"],["name","checkbox",3,"ngModelChange","p-change","ngModel","p-disabled","p-label","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-sm-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","size","p-label","Size","p-label-off","medium","p-label-on","large",1,"po-sm-3",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let d=N();o(0,"po-checkbox",1),k("ngModelChange",function(p){return b(d),v(i.checkbox,p)||(i.checkbox=p),u(p)}),h("p-change",function(){return b(d),u(i.changeEvent("p-change"))}),t(),l(1,"po-divider"),o(2,"div",2),l(3,"po-info",3),j(4,"json"),l(5,"po-info",4),t(),l(6,"po-divider"),o(7,"form",null,0)(9,"div",2)(10,"po-input",5),k("ngModelChange",function(p){return b(d),v(i.label,p)||(i.label=p),u(p)}),t(),o(11,"po-switch",6),k("ngModelChange",function(p){return b(d),v(i.disabled,p)||(i.disabled=p),u(p)}),t(),o(12,"po-switch",7),k("ngModelChange",function(p){return b(d),v(i.size,p)||(i.size=p),u(p)}),t()(),o(13,"div",2)(14,"po-button",8),h("p-click",function(){return b(d),u(i.restore())}),t()()()}a&2&&(g("ngModel",i.checkbox),s("p-disabled",i.disabled)("p-label",i.label)("p-size",i.size?"large":"medium"),r(3),s("p-value",Y(4,9,i.checkbox)),r(2),s("p-value",i.event),r(5),g("ngModel",i.label),r(),g("ngModel",i.disabled),r(),g("ngModel",i.size))},dependencies:[J,R,K,_,X,L,D,te,y,ee,oe,Q],encapsulation:2})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-checkbox-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Labs"),t(),o(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox
  name="checkbox"
  [(ngModel)]="checkbox"
  [p-disabled]="disabled"
  [p-label]="label"
  [p-size]="size ? 'large' : 'medium'"
  (p-change)="changeEvent('p-change')"
>
</po-checkbox>

<po-divider></po-divider>

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="checkbox | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-sm-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

    <po-switch class="po-sm-3" name="disabled" [(ngModel)]="disabled" p-label="Disabled"> </po-switch>

    <po-switch class="po-sm-3" name="size" [(ngModel)]="size" p-label="Size" p-label-off="medium" p-label-on="large">
    </po-switch>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-labs',
  templateUrl: './sample-po-checkbox-labs.component.html',
  standalone: false
})
export class SamplePoCheckboxLabsComponent implements OnInit {
  checkbox: boolean | null;
  disabled: boolean;
  size: boolean;
  event: string;
  label: string;

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.checkbox = undefined;
    this.disabled = false;
    this.event = undefined;
    this.label = undefined;
  }
}
`),t()()()()(),o(21,"div",10),l(22,"sample-po-checkbox-labs"),t(),l(23,"hr")),a&2&&(r(5),T("po-icon "+i.sampleCodeButtonIcon),r(),w(" ",i.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,Ce,i.hideSampleCodeTabs)))},dependencies:[A,f,S,C,me],encapsulation:2})}return n})();var pe=(()=>{class n{modalTerm;acceptance=!1;primaryAction={action:()=>{this.modalTerm.close()},disabled:!0,label:"Confirm"};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-checkbox-acceptance-term"]],viewQuery:function(a,i){if(a&1&&z(F,7),a&2){let d;q(d=U())&&(i.modalTerm=d.first)}},standalone:!1,decls:23,vars:2,consts:[["modalTerm",""],["p-label","View term",3,"p-click"],["p-title","Acceptance Term",3,"p-primary-action"],[1,"po-row"],[1,"po-sm-12"],[1,"po-font-text-large-bold"],[1,"po-row","po-p-1"],["name","acceptance","p-label","I have read and agree to the terms of service and privacy",3,"ngModelChange","p-change","ngModel"]],template:function(a,i){if(a&1){let d=N();o(0,"po-button",1),h("p-click",function(){b(d);let p=G(2);return u(p.open())}),t(),o(1,"po-modal",2,0)(3,"div",3)(4,"div",4)(5,"h3",5),e(6,"MIT License"),t()(),o(7,"div",4)(8,"h4"),e(9,"Copyright (c) 2019 PO UI"),t()(),l(10,"po-divider",4),o(11,"div",4)(12,"p"),e(13,' Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: '),t(),l(14,"br"),o(15,"p"),e(16," The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. "),t(),l(17,"br"),o(18,"p"),e(19,' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. '),t()()(),l(20,"po-divider"),o(21,"div",6)(22,"po-checkbox",7),k("ngModelChange",function(p){return b(d),v(i.acceptance,p)||(i.acceptance=p),u(p)}),h("p-change",function(){return b(d),u(i.primaryAction.disabled=!i.acceptance)}),t()()()}a&2&&(r(),s("p-primary-action",i.primaryAction),r(21),g("ngModel",i.acceptance))},dependencies:[R,_,L,D,y,F],encapsulation:2})}return n})();var ve=n=>({"docs-sample-code-tabs":n}),de=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-checkbox-acceptance-term-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox - Acceptance Term"),t(),o(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html"),t(),o(13,"pre",7),e(14,`<po-button p-label="View term" (p-click)="modalTerm.open()"> </po-button>

<po-modal #modalTerm p-title="Acceptance Term" [p-primary-action]="primaryAction">
  <div class="po-row">
    <div class="po-sm-12">
      <h3 class="po-font-text-large-bold">MIT License</h3>
    </div>

    <div class="po-sm-12">
      <h4>Copyright (c) 2019 PO UI</h4>
    </div>

    <po-divider class="po-sm-12"></po-divider>

    <div class="po-sm-12">
      <p>
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
        documentation files (the "Software"), to deal in the Software without restriction, including without limitation
        the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
        to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      </p>
      <br />
      <p>
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of
        the Software.
      </p>
      <br />
      <p>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
        THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
        CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
        DEALINGS IN THE SOFTWARE.
      </p>
    </div>
  </div>

  <po-divider></po-divider>

  <div class="po-row po-p-1">
    <po-checkbox
      name="acceptance"
      [(ngModel)]="acceptance"
      p-label="I have read and agree to the terms of service and privacy"
      (p-change)="primaryAction.disabled = !acceptance"
    >
    </po-checkbox>
  </div>
</po-modal>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-acceptance-term',
  templateUrl: './sample-po-checkbox-acceptance-term.component.html',
  standalone: false
})
export class SamplePoCheckboxAcceptanceTermComponent {
  @ViewChild(PoModalComponent, { static: true }) modalTerm: PoModalComponent;

  acceptance: boolean = false;

  primaryAction: PoModalAction = {
    action: () => {
      this.modalTerm.close();
    },
    disabled: true,
    label: 'Confirm'
  };
}
`),t()()()()(),o(21,"div",10),l(22,"sample-po-checkbox-acceptance-term"),t(),l(23,"hr")),a&2&&(r(5),T("po-icon "+i.sampleCodeButtonIcon),r(),w(" ",i.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,ve,i.hideSampleCodeTabs)))},dependencies:[A,f,S,C,pe],encapsulation:2})}return n})();var ce=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-checkbox-doc"]],standalone:!1,decls:404,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(a,i){a&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),o(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),o(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),o(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),o(16,"h3",3),e(17,"Componente"),t(),o(18,"h4",4)(19,"code",5),e(20,"PoCheckboxComponent"),t()(),o(21,"div",2)(22,"p"),e(23,"O componente "),o(24,"code"),e(25,"po-checkbox"),t(),e(26,` exibe uma caixa de op\xE7\xE3o com um texto ao lado, na qual \xE9 poss\xEDvel marcar e desmarcar atrav\xE9s tanto
no `),o(27,"em"),e(28,"click"),t(),e(29," do "),o(30,"em"),e(31,"mouse"),t(),e(32," quanto por meio da tecla "),o(33,"em"),e(34,"space"),t(),e(35," quando estiver com foco."),t(),o(36,"p"),e(37,`Cada op\xE7\xE3o poder\xE1 receber um estado de marcado, desmarcado, indeterminado/mixed e desabilitado, como tamb\xE9m uma a\xE7\xE3o que ser\xE1 disparada quando
ocorrer mudan\xE7as do valor.`),t(),o(38,"blockquote")(39,"p"),e(40,"O "),o(41,"em"),e(42,"model"),t(),e(43," deste componente aceitar\xE1 valores igual \xE0 "),o(44,"code"),e(45,"true"),t(),e(46,", "),o(47,"code"),e(48,"false"),t(),e(49," ou "),o(50,"code"),e(51,"null"),t(),e(52," para quando for indeterminado/mixed."),t()(),o(53,"p")(54,"strong"),e(55,"Acessibilidade tratada no componente:"),t()(),o(56,"p"),e(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),t(),o(58,"ul")(59,"li"),e(60,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),o(61,"a",6),e(62,"WCAG 4.1.2: Name, Role, Value"),t()(),o(63,"li"),e(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),o(65,"a",7),e(66,"WCAG 2.4.12: Focus Appearance"),t()(),o(67,"li"),e(68,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o componente do seu estado marcado e desmarcado. "),o(69,"a",8),e(70,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),t()()(),o(71,"h4",9),e(72,"Tokens customiz\xE1veis"),t(),o(73,"p"),e(74,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),o(75,"blockquote")(76,"p"),e(77,"Para maiores informa\xE7\xF5es, acesse o guia "),o(78,"a",10),e(79,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(80,"."),t()(),o(81,"table")(82,"thead")(83,"tr")(84,"th"),e(85,"Propriedade"),t(),o(86,"th"),e(87,"Descri\xE7\xE3o"),t(),o(88,"th"),e(89,"Valor Padr\xE3o"),t()()(),o(90,"tbody")(91,"tr")(92,"td")(93,"strong"),e(94,"Default Values"),t()(),l(95,"td")(96,"td"),t(),o(97,"tr")(98,"td")(99,"code"),e(100,"--border-color"),t()(),o(101,"td"),e(102,"Cor da borda"),t(),o(103,"td")(104,"code"),e(105,"var(--color-neutral-dark-70)"),t()()(),o(106,"tr")(107,"td")(108,"code"),e(109,"--color-unchecked"),t()(),o(110,"td"),e(111,"Cor quando n\xE3o selecionado"),t(),o(112,"td")(113,"code"),e(114,"var(--color-neutral-light-00)"),t()()(),o(115,"tr")(116,"td")(117,"code"),e(118,"--color-checked"),t()(),o(119,"td"),e(120,"Cor quando selecionado"),t(),o(121,"td")(122,"code"),e(123,"var(--color-action-default)"),t()()(),o(124,"tr")(125,"td")(126,"strong"),e(127,"Hover"),t()(),l(128,"td")(129,"td"),t(),o(130,"tr")(131,"td")(132,"code"),e(133,"--color-hover"),t()(),o(134,"td"),e(135,"Cor principal no estado hover"),t(),o(136,"td")(137,"code"),e(138,"var(--color-action-hover)"),t()()(),o(139,"tr")(140,"td")(141,"code"),e(142,"--shadow-color-hover"),t()(),o(143,"td"),e(144,"Cor da sombra no estado hover"),t(),o(145,"td")(146,"code"),e(147,"var(--color-brand-01-lighter)"),t()()(),o(148,"tr")(149,"td")(150,"strong"),e(151,"Focused"),t()(),l(152,"td")(153,"td"),t(),o(154,"tr")(155,"td")(156,"code"),e(157,"--outline-color-focused"),t()(),o(158,"td"),e(159,"Cor do outline do estado de focus"),t(),o(160,"td")(161,"code"),e(162,"var(--color-action-focus)"),t()()(),o(163,"tr")(164,"td")(165,"strong"),e(166,"Disabled"),t()(),l(167,"td")(168,"td"),t(),o(169,"tr")(170,"td")(171,"code"),e(172,"--color-unchecked-disabled"),t(),e(173," \xA0"),t(),o(174,"td"),e(175,"Cor pricipal quando n\xE3o selecionado no estado disabled\xA0"),t(),o(176,"td")(177,"code"),e(178,"var(--color-action-disabled)"),t()()(),o(179,"tr")(180,"td")(181,"code"),e(182,"--color-checked-disabled"),t(),e(183," \xA0"),t(),o(184,"td"),e(185,"Cor pricipal quando selecionado no estado disabled"),t(),o(186,"td")(187,"code"),e(188,"var(--color-neutral-dark-70)"),t()()()()()(),o(189,"div",11)(190,"h4",12),e(191,"Seletor"),t(),o(192,"pre",13),e(193,`<po-checkbox
    p-auto-focus="boolean"
    (p-change)="EventEmitter"
    p-disabled="boolean"
    p-label="string"
    name="string"
    p-size="string" >
</po-checkbox>
`),t()(),o(194,"h4",14),e(195,"Propriedades"),t(),o(196,"table",15)(197,"tr",16)(198,"th",17),e(199,"Nome"),t(),o(200,"th",17),e(201,"Tipo"),t(),o(202,"th",17),e(203,"Padr\xE3o"),t(),o(204,"th",17),e(205,"Descri\xE7\xE3o"),t()(),o(206,"tr",18)(207,"td",19)(208,"div",20)(209,"span",21),e(210," p-auto-focus"),l(211,"br"),t()()(),o(212,"td",22)(213,"code",23),e(214,"boolean"),t()(),o(215,"td",24)(216,"p")(217,"code"),e(218,"false"),t()()(),o(219,"td",25)(220,"em")(221,"strong"),e(222,"(opcional)"),t()(),o(223,"p"),e(224,"Aplica foco no elemento ao ser iniciado."),t(),o(225,"blockquote")(226,"p"),e(227,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),o(228,"tr",18)(229,"td",19)(230,"div",26)(231,"span",27),e(232," (p-change)"),l(233,"br"),t()()(),o(234,"td",22)(235,"code",28),e(236,"EventEmitter"),t()(),o(237,"td",24),e(238,"-"),t(),o(239,"td",25)(240,"em")(241,"strong"),e(242,"(opcional)"),t()(),o(243,"p"),e(244,"Evento disparado quando o valor do "),o(245,"em"),e(246,"checkbox"),t(),e(247," for alterado."),t()()(),o(248,"tr",18)(249,"td",19)(250,"div",20)(251,"span",21),e(252," p-disabled"),l(253,"br"),t()()(),o(254,"td",22)(255,"code",23),e(256,"boolean"),t()(),o(257,"td",24)(258,"p")(259,"code"),e(260,"false"),t()()(),o(261,"td",25)(262,"em")(263,"strong"),e(264,"(opcional)"),t()(),o(265,"p"),e(266,"Define o estado do "),o(267,"em"),e(268,"checkbox"),t(),e(269," como desabilitado."),t()()(),o(270,"tr",18)(271,"td",19)(272,"div",20)(273,"span",21),e(274," p-label"),l(275,"br"),t()()(),o(276,"td",22)(277,"code",29),e(278,"string"),t()(),o(279,"td",24),e(280,"-"),t(),o(281,"td",25)(282,"em")(283,"strong"),e(284,"(opcional)"),t()(),o(285,"p"),e(286,"Texto de exibi\xE7\xE3o do "),o(287,"em"),e(288,"checkbox"),t(),e(289,"."),t()()(),o(290,"tr",18)(291,"td",19)(292,"div",20)(293,"span",21),e(294," name"),l(295,"br"),t()()(),o(296,"td",22)(297,"code",29),e(298,"string"),t()(),o(299,"td",24),e(300,"-"),t(),o(301,"td",25)(302,"p"),e(303,"Define o nome do "),o(304,"em"),e(305,"checkbox"),t(),e(306,"."),t()()(),o(307,"tr",18)(308,"td",19)(309,"div",20)(310,"span",21),e(311," p-size"),l(312,"br"),t()()(),o(313,"td",22)(314,"code",29),e(315,"string"),t()(),o(316,"td",24)(317,"p")(318,"code"),e(319,"medium"),t()()(),o(320,"td",25)(321,"em")(322,"strong"),e(323,"(opcional)"),t()(),o(324,"p"),e(325,"Define o tamanho do "),o(326,"em"),e(327,"checkbox"),t()(),o(328,"p"),e(329,"Valores v\xE1lidos:"),t(),o(330,"ul")(331,"li")(332,"code"),e(333,"medium"),t(),e(334,": o "),o(335,"code"),e(336,"po-checkbox"),t(),e(337," fica do tamanho padr\xE3o, com 24px de altura.;"),t(),o(338,"li")(339,"code"),e(340,"large"),t(),e(341,": o "),o(342,"code"),e(343,"po-checkbox"),t(),e(344," fica maior, com 32px de altura.;"),t()()()()(),o(345,"h3",14),e(346,"M\xE9todos"),t(),o(347,"table",30)(348,"tr",18)(349,"th",31)(350,"div",20)(351,"h4")(352,"span",21),e(353," focus "),t()()()()(),o(354,"tr",25)(355,"td",25)(356,"p"),e(357,"Fun\xE7\xE3o que atribui foco ao "),o(358,"em"),e(359,"checkbox"),t(),e(360,"."),t(),o(361,"p"),e(362,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a refer\xEAncia do componente no DOM atrav\xE9s do "),o(363,"code"),e(364,"ViewChild"),t(),e(365,", como por exemplo:"),t(),o(366,"pre")(367,"code"),e(368,`...
import { ViewChild } from '@angular/core';
import { PoCheckboxComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;

focusCheckbox() {
  this.checkbox.focus();
}`),t()()()()(),l(369,"br"),o(370,"h3"),e(371,"Enums"),t(),o(372,"h4",4)(373,"code",5),e(374,"PoCheckboxSize"),t()(),o(375,"div",2)(376,"p"),e(377,"Enum para definir o tamanho do po-checkbox."),t()(),o(378,"h4",14),e(379,"Propriedades"),t(),o(380,"table",15)(381,"tr",16)(382,"th",17),e(383,"Nome"),t(),o(384,"th",17),e(385,"Descri\xE7\xE3o"),t()(),o(386,"tr",18)(387,"td",19)(388,"div",20)(389,"span",21),e(390," medium"),l(391,"br"),t()()(),o(392,"td",25)(393,"p"),e(394,"A caixa de sele\xE7\xE3o fica do tamanho padr\xE3o, com 24px de altura."),t()()(),o(395,"tr",18)(396,"td",19)(397,"div",20)(398,"span",21),e(399," large"),l(400,"br"),t()()(),o(401,"td",25)(402,"p"),e(403,"A caixa de sele\xE7\xE3o fica maior, com 32px de altura."),t()()()()())},dependencies:[f],encapsulation:2})}return n})();var se=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||n)(H(Z),H($))};static \u0275cmp=c({type:n,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Checkbox",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,i){a&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),l(3,"sample-po-checkbox-doc"),t(),o(4,"po-tab",3),l(5,"sample-po-checkbox-basic-view")(6,"sample-po-checkbox-labs-view")(7,"sample-po-checkbox-acceptance-term-view"),t()()()),a&2&&(s("p-actions",i.actions),r(2),s("p-active",i.activeTab.includes("doc")),r(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[ne,S,C,le,re,de,ce],encapsulation:2})}return n})();var we=[{path:"",component:se}],he=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=O({type:n});static \u0275inj=M({imports:[V.forChild(we),V]})}return n})();var Xe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=O({type:n});static \u0275inj=M({imports:[ie,he]})}return n})();export{Xe as DocPoCheckboxModule};
