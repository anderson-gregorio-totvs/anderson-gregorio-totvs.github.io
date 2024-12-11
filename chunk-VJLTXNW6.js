import{$ as r,Ga as e,Od as g,T as s,U as c,Wb as E,Xd as b,Yb as S,Yd as x,Zb as f,_ as m,ha as d,na as o,oa as t,pa as u,re as C,se as h,y as p}from"./chunk-V5DQALWN.js";var D=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=m({type:i,selectors:[["sample-po-slide-content-template-doc"]],standalone:!1,decls:66,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""]],template:function(n,l){n&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoSlideModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente "),o(7,"code"),e(8,"po-slide"),t(),e(9,"."),t(),o(10,"blockquote")(11,"p"),e(12,"Para o correto funcionamento do componente "),o(13,"code"),e(14,"po-slide"),t(),e(15,", deve ser importado o m\xF3dulo "),o(16,"code"),e(17,"BrowserAnimationsModule"),t(),e(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),t()(),o(19,"p"),e(20,"M\xF3dulo da aplica\xE7\xE3o:"),t(),o(21,"pre")(22,"code"),e(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
export class AppModule { }`),t()(),o(24,"p"),e(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),t(),o(26,"pre")(27,"code"),e(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));`),t()()(),o(29,"h3",3),e(30,"Componente"),t(),o(31,"h4",4)(32,"code",5),e(33,"PoSlideContentTemplateDirective"),t()(),o(34,"div",2)(35,"p"),e(36,"Esta diretiva permite a customiza\xE7\xE3o de um slide."),t(),o(37,"p"),e(38,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),t(),o(39,"ul")(40,"li"),e(41,"Item: "),o(42,"code"),e(43,"item"),t(),e(44," determina o item do slide corrente."),t(),o(45,"li"),e(46,"\xCDndice: "),o(47,"code"),e(48,"index"),t(),e(49," determina o \xEDndice do slide corrente."),t()(),o(50,"p"),e(51,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),o(52,"em"),e(53,"syntax sugar"),t(),e(54,". Veja a seguir ambos, respectivamente:"),t(),o(55,"pre")(56,"code"),e(57,`...
<po-slide
  [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">

  <ng-template p-slide-content-template let-item let-code="index">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Code" [p-value]="item.id"></po-info>
      <po-info class="po-md-6" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>

</po-slide>

...`),t()(),o(58,"pre")(59,"code"),e(60,`...
<po-slide
   [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">

   <div *p-slide-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-slide>
...`),t()()(),o(61,"div",6)(62,"h4",7),e(63,"Seletor"),t(),o(64,"pre",8),e(65,`<[p-slide-content-template] >
</[p-slide-content-template]>
`),t()()())},dependencies:[C],encapsulation:2})}return i})();var M=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(n){return new(n||i)(c(E),c(S))};static \u0275cmp=m({type:i,selectors:[["ng-component"]],standalone:!1,decls:5,vars:4,consts:[["p-title"," Slide Content Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(n,l){n&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u(3,"sample-po-slide-content-template-doc"),t(),u(4,"po-tab",3),t()()),n&2&&(d("p-actions",l.actions),s(2),d("p-active",l.activeTab.includes("doc")),s(2),d("p-hide",l.hidePoWebSample)("p-active",l.activeTab.includes("web")))},dependencies:[g,b,x,D],encapsulation:2})}return i})();var w=[{path:"",component:M}],P=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=r({type:i});static \u0275inj=p({imports:[f.forChild(w),f]})}return i})();var L=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=r({type:i});static \u0275inj=p({imports:[h,P]})}return i})();export{L as DocPoSlideContentTemplateModule};
