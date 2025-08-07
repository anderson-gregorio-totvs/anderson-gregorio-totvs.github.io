import{a as N}from"./chunk-HENNAL3T.js";import{a as x,b}from"./chunk-4GUXAMV7.js";import"./chunk-PQACOBOF.js";import{a as c}from"./chunk-O7R5MEBM.js";import{$f as D,Lc as g,Of as C,Pc as f,Ra as d,Sa as o,Ta as t,Ua as s,Uc as v,V as u,ad as S,pa as l,ua as M,vb as e,vd as E,xa as O,ya as p,zc as h}from"./chunk-FIDTK4XA.js";var y=(()=>{let i=class i{constructor(m){this.sharedService=m,this.commandDoc1=`export const <NOME-MODULO>Submenu: Array<PoMenuItem> = [
  {
    label: '<NOME-APLICA\xC7\xC3O>',
    subItems: [
      { label: '<LABEL-ROTA>', link: 'use-case/<NOME-MODULO>/<ROTA-EXEMPLO>' }
      // Outros submenus podem ser adicionados aqui
      ...
    ],
  },
];`,this.commandDoc2=`import { PoMenuItem } from '@po-ui/ng-components';
import { <NOME-MODULO>Submenu } from './use-case/<NOME-MODULO>/submenu';


export const useCaseSumenu: Array<PoMenuItem> = [
  { label: 'Smart-UI', link: 'https://smart-ui.dev.totvs.app/' },
  \u2026<NOME-MODULO>Submenu,
];`,this.commandDoc3=`const routes: Routes = [
  . . .
  {
    path: '<NOME-MODULO>',
    loadChildren: () =>
      import('./<NOME-MODULO>/<NOME-MODULO>.module').then(
        (m) => m.<NOME-MODULO>Module
      ),
  },
];`,this.commandDoc4=`import { PoModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    <NOME-MODULO>RoutingModule
  ]
})
export class <NOME-MODULO> { }`,this.commandDoc5=`...
const routes: Routes = [
  {
    path: 'hello-world',
    component: HelloWorldComponent
  }
];
...`,this.commandDoc6=`import { PoMenuItem } from '@po-ui/ng-components';


export const <NOME-MODULO>Submenu: Array<PoMenuItem> = [
  {
    label: '<NOME-APLICA\xC7\xC3O>',
    subItems: [
      { label: 'hello-world', link: 'use-case/<NOME-MODULO>/hello-world' }
      ...
    ],
  },
];`}ngOnInit(){this.sharedService.getThemeActive().subscribe(m=>{this.themeActive=m.type??0})}};i.\u0275fac=function(a){return new(a||i)(M(N))},i.\u0275cmp=O({type:i,selectors:[["app-contributing"]],standalone:!1,decls:93,vars:24,consts:[["p-title","Como Contribuir","p-subtitle","Guia para Adicionar uma Aplica\xE7\xE3o de Teste no Portal THF",1,"vitrine-page"],[1,"grid","grid-row"],["fullscreen","true","title","Solicitando acesso ao reposit\xF3rio"],[1,"container-section"],["href","https://tdn.totvs.com/display/public/THF/Abertura+de+Apoio","target","_blank"],["fullscreen","true","title","Criando o M\xF3dulo da Aplica\xE7\xE3o"],["fullscreen","true","title","Configurando o Menu"],[1,"bold"],["p-language","html","ngDefaultControl","",1,"po-pt-2",3,"p-height","p-readonly","ngModel","p-theme"],["fullscreen","true","title","Testando um Componente Simples (Opcional)"],["fullscreen","true","title","Orienta\xE7\xF5es Gerais"]],template:function(a,r){a&1&&(o(0,"po-page-default",0)(1,"section",1)(2,"card",2)(3,"section",3)(4,"p"),e(5," Abra uma issue de apoio para o time THF solicitando acesso ao reposit\xF3rio para inclus\xE3o de cases no Portal THF conforme "),o(6,"a",4),e(7,"documenta\xE7\xE3o dispon\xEDvel no TDN"),t(),e(8,". "),t()()(),o(9,"card",5)(10,"section",3)(11,"p"),e(12," Execute o comando abaixo para gerar um novo m\xF3dulo com roteamento: "),t(),o(13,"pre")(14,"code"),e(15,"npx ng g m use-case/<NOME-MODULO> --routing"),t()()()(),o(16,"card",6)(17,"section",3)(18,"p"),e(19,' Para exibir o submenu da sua aplica\xE7\xE3o na se\xE7\xE3o "Casos de Uso" do menu principal, siga os passos abaixo: '),t(),o(20,"p",7),e(21,"Criando o Submenu"),t(),o(22,"p"),e(23," Crie o arquivo "),o(24,"code"),e(25,"use-case/<NOME-MODULO>/submenu.ts"),t(),e(26," com o seguinte conte\xFAdo: "),t(),s(27,"po-code-editor",8),o(28,"p",7),e(29,"Importando o Submenu no Projeto"),t(),o(30,"p"),e(31," No arquivo src/app/use-case-submenu.ts, importe e adicione o submenu criado: "),t(),s(32,"po-code-editor",8),o(33,"p",7),e(34,"Configurando a Rota Principal"),t(),o(35,"p"),e(36," No arquivo `src/app/use-case-routing.module.ts`, adicione a rota principal do m\xF3dulo: "),t(),s(37,"po-code-editor",8),t()(),o(38,"card",9)(39,"section",3)(40,"p",7),e(41,"Criando o Componente"),t(),o(42,"p"),e(43,"Execute o comando abaixo para gerar um novo componente:"),t(),o(44,"pre")(45,"code"),e(46,"npx ng g c use-case/<NOME-MODULO>/hello-world"),t()(),o(47,"p"),e(48,"No arquivo hello-world.component.html, adicione o exemplo abaixo:"),t(),o(49,"pre")(50,"code"),e(51,'<po-page-default p-title="Hello World"> hello-world </po-page-default>'),t()(),o(52,"p",7),e(53,"Configurando o M\xF3dulo"),t(),o(54,"p"),e(55," No arquivo "),o(56,"code"),e(57,"use-case/<NOME-MODULO>/<NOME-MODULO>.module.ts"),t(),e(58," realize a importa\xE7\xE3o do "),o(59,"code"),e(60,"PoModule"),t(),e(61,": "),t(),s(62,"po-code-editor",8),o(63,"p",7),e(64,"Criando a Rota do Componente"),t(),o(65,"p"),e(66," No arquivo "),o(67,"code"),e(68,"use-case/<NOME-MODULO>/<NOME-MODULO>-routing.module.ts"),t(),e(69,", adicione a rota do componente: "),t(),s(70,"po-code-editor",8),o(71,"p",7),e(72,"Atualizando o Submenu"),t(),o(73,"p"),e(74," No arquivo "),o(75,"code"),e(76,"use-case/<NOME-MODULO>/submenu.ts"),t(),e(77,", inclua o novo item no submenu: "),t(),s(78,"po-code-editor",8),t()(),o(79,"card",10)(80,"section",3)(81,"ul")(82,"li"),e(83," Todos os componentes e servi\xE7os devem ser criados dentro do m\xF3dulo "),o(84,"code"),e(85,"src/app/use-case/<NOME-MODULO>"),t()(),o(86,"li"),e(87,"N\xE3o adicione depend\xEAncias externas ao projeto."),t(),o(88,"li"),e(89," N\xE3o consuma APIs externas. Utilize arquivos "),o(90,"code"),e(91,"JSON"),t(),e(92," para simular requisi\xE7\xF5es ao backend. "),t()()()()()()),a&2&&(l(27),d("p-height",220)("p-readonly",!0)("ngModel",r.commandDoc1)("p-theme",r.themeActive===1?"vs-dark":"vs"),l(5),d("p-height",180)("p-readonly",!0)("ngModel",r.commandDoc2)("p-theme",r.themeActive===1?"vs-dark":"vs"),l(5),d("p-height",200)("p-readonly",!0)("ngModel",r.commandDoc3)("p-theme",r.themeActive===1?"vs-dark":"vs"),l(25),d("p-height",270)("p-readonly",!0)("ngModel",r.commandDoc4)("p-theme",r.themeActive===1?"vs-dark":"vs"),l(8),d("p-height",170)("p-readonly",!0)("ngModel",r.commandDoc5)("p-theme",r.themeActive===1?"vs-dark":"vs"),l(8),d("p-height",250)("p-readonly",!0)("ngModel",r.commandDoc6)("p-theme",r.themeActive===1?"vs-dark":"vs"))},dependencies:[g,f,v,C,x,c],styles:[".container-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{margin-top:.8rem}.bold[_ngcontent-%COMP%]{font-family:var(--font-family-bold),sans-serif}ul[_ngcontent-%COMP%]{margin:1rem 1rem 0}"]});let n=i;return n})();var P=[{path:"contributing",component:y},{path:"datasul",loadChildren:()=>import("./chunk-3QVS26T6.js").then(n=>n.DatasulModule)}],L=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=p({type:i}),i.\u0275inj=u({imports:[E.forChild(P),E]});let n=i;return n})();var K=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=p({type:i}),i.\u0275inj=u({imports:[h,S,D,b,L,c]});let n=i;return n})();export{K as UseCaseModule};
