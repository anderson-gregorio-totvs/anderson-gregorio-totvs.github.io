import{$ as d,Ga as e,Od as h,T as c,U as u,Wb as v,Xd as b,Yb as x,Yd as w,Zb as E,_ as m,ha as s,na as i,oa as t,pa as r,re as S,se as D,y as l}from"./chunk-V5DQALWN.js";var g=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=m({type:o,selectors:[["sample-po-list-view-detail-template-doc"]],standalone:!1,decls:101,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(item)","=>","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(n,p){n&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoListViewModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente "),i(7,"code"),e(8,"po-list-view"),t(),e(9,"."),t(),i(10,"blockquote")(11,"p"),e(12,"Para o correto funcionamento do componente "),i(13,"code"),e(14,"po-list-view"),t(),e(15,", deve ser importado o m\xF3dulo "),i(16,"code"),e(17,"BrowserAnimationsModule"),t(),e(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),t()(),i(19,"p"),e(20,"M\xF3dulo da aplica\xE7\xE3o:"),t(),i(21,"pre")(22,"code"),e(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
export class AppModule { }`),t()(),i(24,"p"),e(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),t(),i(26,"pre")(27,"code"),e(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));`),t()()(),i(29,"h3",3),e(30,"Componente"),t(),i(31,"h4",4)(32,"code",5),e(33,"PoListViewDetailTemplateDirective"),t()(),i(34,"div",2)(35,"p"),e(36,`Esta diretiva permite que sejam apresentadas informa\xE7\xF5es adicionais de cada item, construindo um
bot\xE3o `),i(37,"code"),e(38,"Exibir detalhes"),t(),e(39," abaixo do conte\xFAdo principal do item."),t(),i(40,"p"),e(41,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),t(),i(42,"ul")(43,"li"),e(44,"Item: "),i(45,"code"),e(46,"item"),t(),e(47," determina o item da linha corrente."),t(),i(48,"li"),e(49,"\xCDndice: "),i(50,"code"),e(51,"index"),t(),e(52," determina o \xEDndice da linha corrente."),t()(),i(53,"p"),e(54,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),i(55,"em"),e(56,"syntax sugar"),t(),e(57,". Veja a seguir ambos, respectivamente:"),t(),i(58,"pre")(59,"code"),e(60,`...
<po-list-view
  p-property-title="name"
  [p-items]="items">

  <ng-template p-list-view-detail-template let-item let-code="index">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Code" [p-value]="code"></po-info>
      <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>

</po-list-view>

...`),t()(),i(61,"pre")(62,"code"),e(63,`...
<po-list-view
   p-property-title="name"
   [p-items]="items">
   <div *p-list-view-detail-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...`),t()()(),i(64,"div",6)(65,"h4",7),e(66,"Seletor"),t(),i(67,"pre",8),e(68,`<[p-list-view-detail-template]
    p-show-detail="(item) => boolean" >
</[p-list-view-detail-template]>
`),t()(),i(69,"h4",9),e(70,"Propriedades"),t(),i(71,"table",10)(72,"tr",11)(73,"th",12),e(74,"Nome"),t(),i(75,"th",12),e(76,"Tipo"),t(),i(77,"th",12),e(78,"Padr\xE3o"),t(),i(79,"th",12),e(80,"Descri\xE7\xE3o"),t()(),i(81,"tr",13)(82,"td",14)(83,"div",15)(84,"span",16),e(85," p-show-detail"),r(86,"br"),t()()(),i(87,"td",17)(88,"code",18),e(89,"(item) => boolean"),t()(),i(90,"td",19),e(91,"-"),t(),i(92,"td",20)(93,"em")(94,"strong"),e(95,"(opcional)"),t()(),i(96,"p"),e(97,"Fun\xE7\xE3o que deve retornar um valor do tipo "),i(98,"code"),e(99,"boolean"),t(),e(100,`, que ser\xE1 utilizado como a valida\xE7\xE3o para que o detalhe de item
da lista inicie aberto ou fechado.`),t()()()()())},dependencies:[S],encapsulation:2})}return o})();var P=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(n){return new(n||o)(u(v),u(x))};static \u0275cmp=m({type:o,selectors:[["ng-component"]],standalone:!1,decls:5,vars:4,consts:[["p-title"," List View Detail Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(n,p){n&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),r(3,"sample-po-list-view-detail-template-doc"),t(),r(4,"po-tab",3),t()()),n&2&&(s("p-actions",p.actions),c(2),s("p-active",p.activeTab.includes("doc")),c(2),s("p-hide",p.hidePoWebSample)("p-active",p.activeTab.includes("web")))},dependencies:[h,b,w,g],encapsulation:2})}return o})();var y=[{path:"",component:P}],C=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=d({type:o});static \u0275inj=l({imports:[E.forChild(y),E]})}return o})();var W=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=d({type:o});static \u0275inj=l({imports:[D,C]})}return o})();export{W as DocPoListViewDetailTemplateModule};
