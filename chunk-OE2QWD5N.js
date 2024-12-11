import{$ as s,Ga as e,Od as S,T as c,U as u,Wb as f,Xd as g,Yb as x,Yd as w,Zb as E,_ as l,ha as d,na as i,oa as t,pa as p,re as b,se as h,y as m}from"./chunk-V5DQALWN.js";var C=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["sample-po-list-view-content-template-doc"]],standalone:!1,decls:115,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(item)","=>","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(n,r){n&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoListViewModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente "),i(7,"code"),e(8,"po-list-view"),t(),e(9,"."),t(),i(10,"blockquote")(11,"p"),e(12,"Para o correto funcionamento do componente "),i(13,"code"),e(14,"po-list-view"),t(),e(15,", deve ser importado o m\xF3dulo "),i(16,"code"),e(17,"BrowserAnimationsModule"),t(),e(18,` no
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
}).catch(err => console.error(err));`),t()()(),i(29,"h3",3),e(30,"Componente"),t(),i(31,"h4",4)(32,"code",5),e(33,"PoListViewContentTemplateDirective"),t()(),i(34,"div",2)(35,"p"),e(36,"Esta diretiva permite que sejam apresentadas informa\xE7\xF5es essenciais de cada item."),t(),i(37,"p"),e(38,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),t(),i(39,"ul")(40,"li"),e(41,"Item: "),i(42,"code"),e(43,"item"),t(),e(44," determina o item da linha corrente."),t(),i(45,"li"),e(46,"\xCDndice: "),i(47,"code"),e(48,"index"),t(),e(49," determina o \xEDndice da linha corrente."),t()(),i(50,"p"),e(51,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),i(52,"em"),e(53,"syntax sugar"),t(),e(54,". Veja a seguir ambos, respectivamente:"),t(),i(55,"pre")(56,"code"),e(57,`...
<po-list-view
  p-property-title="name"
  [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

  <ng-template p-list-view-content-template let-item let-code="index">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Code" [p-value]="code"></po-info>
      <po-info class="po-md-6" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>

</po-list-view>

...`),t()(),i(58,"pre")(59,"code"),e(60,`...
<po-list-view
   p-property-title="name"
   [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

   <div *p-list-view-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...`),t()(),i(61,"p"),e(62,"A diretiva "),i(63,"strong"),e(64,"p-list-view-content-template"),t(),e(65,`, possibilita tamb\xE9m alterar o t\xEDtulo dos itens. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz a altera\xE7\xE3o, \xE0 propriedade `),i(66,"code"),e(67,"p-title"),t(),e(68,`,
a mesma deve retornar um valor do tipo `),i(69,"em"),e(70,"string"),t(),e(71,". Veja o exemplo a seguir:"),t(),i(72,"pre")(73,"code"),e(74,`...
@Component({
   selector: 'app-root',
   template: \`
     ...
     <po-list-view
       [p-items]="items">
       <ng-template p-list-view-content-template let-item [p-title]="customTitle">
         <div class="po-row">
           <po-info class="po-md-12" p-label="Customer" [p-value]="item.customer"></po-info>
         </div>
       </ng-template>
     ...
   \`
})
export class AppComponent {
   public items = [{
     code: 1200,
     product: 'Rice',
     customer: 'Supermarket 1',
   }, {
     code: 1355,
     product: 'Bean',
     customer: 'Supermarket 2'
   }];

   customTitle(item) {
     return \`\${item.code} - \${item.product}\`;
   }
}`),t()()(),i(75,"div",6)(76,"h4",7),e(77,"Seletor"),t(),i(78,"pre",8),e(79,`<[p-list-view-content-template]
    p-title="(item) => string" >
</[p-list-view-content-template]>
`),t()(),i(80,"h4",9),e(81,"Propriedades"),t(),i(82,"table",10)(83,"tr",11)(84,"th",12),e(85,"Nome"),t(),i(86,"th",12),e(87,"Tipo"),t(),i(88,"th",12),e(89,"Padr\xE3o"),t(),i(90,"th",12),e(91,"Descri\xE7\xE3o"),t()(),i(92,"tr",13)(93,"td",14)(94,"div",15)(95,"span",16),e(96," p-title"),p(97,"br"),t()()(),i(98,"td",17)(99,"code",18),e(100,"(item) => string"),t()(),i(101,"td",19),e(102,"-"),t(),i(103,"td",20)(104,"em")(105,"strong"),e(106,"(opcional)"),t()(),i(107,"p"),e(108,"Fun\xE7\xE3o que deve retornar um valor do tipo "),i(109,"code"),e(110,"string"),t(),e(111,", que ser\xE1 utilizado como o t\xEDtulo de cada item da lista."),t(),i(112,"blockquote")(113,"p"),e(114,"Por par\xE2metro ser\xE1 enviado o item corrente, onde poder\xE1 utiliz\xE1-lo para recuperar dados sobre o mesmo."),t()()()()()())},dependencies:[b],encapsulation:2})}return o})();var D=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(n){return new(n||o)(u(f),u(x))};static \u0275cmp=l({type:o,selectors:[["ng-component"]],standalone:!1,decls:5,vars:4,consts:[["p-title"," List View Content Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(n,r){n&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),p(3,"sample-po-list-view-content-template-doc"),t(),p(4,"po-tab",3),t()()),n&2&&(d("p-actions",r.actions),c(2),d("p-active",r.activeTab.includes("doc")),c(2),d("p-hide",r.hidePoWebSample)("p-active",r.activeTab.includes("web")))},dependencies:[S,g,w,C],encapsulation:2})}return o})();var T=[{path:"",component:D}],P=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=s({type:o});static \u0275inj=m({imports:[E.forChild(T),E]})}return o})();var W=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=s({type:o});static \u0275inj=m({imports:[h,P]})}return o})();export{W as DocPoListViewContentTemplateModule};
