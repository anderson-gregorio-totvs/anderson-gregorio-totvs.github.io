import{$ as r,Ga as e,Od as g,T as c,U as d,Wb as E,Xd as x,Yb as f,Yd as h,Zb as b,_ as l,ha as s,na as o,oa as t,pa as u,re as S,se as C,y as m}from"./chunk-V5DQALWN.js";var D=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=l({type:i,selectors:[["sample-po-combo-option-template-doc"]],standalone:!1,decls:69,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""]],template:function(n,p){n&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),o(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),o(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),o(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),o(16,"h3",3),e(17,"Componente"),t(),o(18,"h4",4)(19,"code",5),e(20,"PoComboOptionTemplateDirective"),t()(),o(21,"div",2)(22,"p"),e(23,"Esta diretiva permite personalizar o conte\xFAdo dos itens exibidos na lista de op\xE7\xF5es do componente."),t(),o(24,"blockquote")(25,"p"),e(26,"Quando utilizada em dispositivos "),o(27,"em"),e(28,"mobile"),t(),e(29," ser\xE1 exibido o componente nativo."),t()(),o(30,"p"),e(31,"Para personalizar o conte\xFAdo de cada item da lista deve-se utilizar a diretiva "),o(32,"code"),e(33,"p-combo-option-template"),t(),e(34," com "),o(35,"code"),e(36,"ng-template"),t(),e(37,`
dentro da `),o(38,"em"),e(39,"tag"),t(),o(40,"code"),e(41,"po-combo"),t(),e(42,"."),t(),o(43,"p"),e(44,"Para obter a refer\xEAncia do item atual utilize "),o(45,"code"),e(46,"let-option"),t(),e(47,", com isso voc\xEA ter\xE1 acesso aos valores e poder\xE1 personalizar sua exibi\xE7\xE3o."),t(),o(48,"p"),e(49,"Esta diretiva comp\xF5e-se de dois meios para uso, de forma expl\xEDcita tal como em "),o(50,"em"),e(51,"syntax sugar"),t(),e(52,". Veja a seguir ambos, respectivamente:"),t(),o(53,"pre")(54,"code"),e(55,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <ng-template p-combo-option-template let-option>
      <option-template [option]="option"></option-template>
    </ng-template>
</po-combo>
...`),t()(),o(56,"pre")(57,"code"),e(58,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <div *p-combo-option-template="let option">
      <option-template [option]="option"></option-template>
    </div>
</po-combo>
...`),t()(),o(59,"p"),e(60,`Para o caso de personaliza\xE7\xE3o de op\xE7\xF5es com agrupamentos, deve-se seguir a mesma orienta\xE7\xE3o acima. Por\xE9m, cabe ao desenvolvedor
a responsabilidade de estiliza\xE7\xE3o dos elementos da lista, tais como t\xEDtulo e links dos grupos. Abaixo h\xE1 um exemplo de aplica\xE7\xE3o:`),t(),o(61,"pre")(62,"code"),e(63,`...
<ng-template p-combo-option-template let-option>
  <ng-container *ngIf="option.options; then optionsGroupTitle; else optionsGroupList"></ng-container>
  <ng-template #optionsGroupTitle>
    <p class="po-combo-item-title" [innerHtml]="option.label"></p>
  </ng-template>
  <ng-template #optionsGroupList>
    <div class="po-combo-item">
      <div class="po-row">
        <po-avatar class="po-md-1" p-size="sm"></po-avatar>
        <div class="po-md-11" [innerHtml]="option.label"></div>
      </div>
    </div>
  </ng-template>
</ng-template>
...`),t()()(),o(64,"div",6)(65,"h4",7),e(66,"Seletor"),t(),o(67,"pre",8),e(68,`<[p-combo-option-template] >
</[p-combo-option-template]>
`),t()()())},dependencies:[S],encapsulation:2})}return i})();var P=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(n){return new(n||i)(d(E),d(f))};static \u0275cmp=l({type:i,selectors:[["ng-component"]],standalone:!1,decls:5,vars:4,consts:[["p-title"," Combo Option Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(n,p){n&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u(3,"sample-po-combo-option-template-doc"),t(),u(4,"po-tab",3),t()()),n&2&&(s("p-actions",p.actions),c(2),s("p-active",p.activeTab.includes("doc")),c(2),s("p-hide",p.hidePoWebSample)("p-active",p.activeTab.includes("web")))},dependencies:[g,x,h,D],encapsulation:2})}return i})();var y=[{path:"",component:P}],T=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=r({type:i});static \u0275inj=m({imports:[b.forChild(y),b]})}return i})();var L=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=r({type:i});static \u0275inj=m({imports:[C,T]})}return i})();export{L as DocPoComboOptionTemplateModule};