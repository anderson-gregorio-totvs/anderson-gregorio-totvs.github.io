import{$ as f,$a as H,$d as le,Bc as $,Ca as w,Da as k,Ea as A,F as g,Fc as T,G as x,Ga as e,Ia as j,Ka as N,La as L,Lb as G,Ma as M,Mb as Q,Na as W,Nb as U,Ob as J,Oc as ee,Od as P,Pa as z,Pb as K,Pc as te,Qc as ne,Rc as _,Sc as I,T as d,Tc as ie,U as E,Uc as R,Vc as V,Wb as X,Wc as C,Xd as y,Yb as Y,Yd as D,Zb as O,_ as u,a as m,ad as oe,b as h,ha as p,ka as q,ld as ae,na as t,oa as n,pa as i,re,se as me,ta as B,ua as v,vc as Z,y as S}from"./chunk-PI3TYJHE.js";var Ee=["formShare"],pe=(()=>{class a{poNotification;poTheme;formShare;poModal;email="";isSubscribed=!1;theme=0;themeStorage="po-theme-default";themeChangeListenerDark;themeChangeListenerDefault;themeOptions=[{label:"Light",value:0},{label:"Dark",value:1}];actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"po-icon-share"},{label:"GitHub",url:"https://github.com/po-ui/po-angular"},{label:"Components",url:"/documentation"},{label:"Disable notification",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};cancelAction={action:()=>{this.modalClose()},label:"Cancel"};shareAction={action:()=>{this.share()},label:"Share"};poThemeSample={name:"po-theme",type:{light:{color:{brand:{"01":{lightest:"#f2eaf6",lighter:"#d9c2e5",light:"#bd94d1",base:"#753399",dark:"#5b1c7d",darker:"#400e58",darkest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:h(m({},te),{disabled:"var(--color-neutral-mid-40)"}),feedback:h(m({},_),{info:h(m({},_.info),{base:"#0079b8"})}),neutral:m({},ne)},onRoot:h(m({},I.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:m({},I.perComponent)},dark:{color:{brand:{"01":{darkest:"#f2eaf6",darker:"#d9c2e5",dark:"#bd94d1",base:"#753399",light:"#5b1c7d",lighter:"#400e58",lightest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:h(m({},ie),{disabled:"var(--color-neutral-mid-40)"}),feedback:h(m({},R),{info:h(m({},R.info),{base:"#0079b8"})}),neutral:{light:{"00":"#1c1c1c","05":"#202020",10:"#2b2b2b",20:"#3b3b3b",30:"#5a5a5a"},mid:{40:"#7c7c7c",60:"#a1a1a1"},dark:{70:"#c1c1c1",80:"#d9d9d9",90:"#eeeeee",95:"#fbfbfb"}}},onRoot:h(m({},V.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:m({},V.perComponent)}},active:ee.light};constructor(r,o){this.poNotification=r,this.poTheme=o;let l=this.poTheme.applyTheme();l?this.theme=l.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme),this.theme=this.poThemeSample.active)}changeTheme(r,o=!0){this.poTheme.setTheme(this.poThemeSample,r),r===1?localStorage.setItem("po-ui-theme","po-theme-dark"):localStorage.setItem("po-ui-theme","po-theme-default"),o&&window.dispatchEvent(new Event("po-sample-change-theme"))}ngOnInit(){localStorage.getItem("po-ui-theme")&&(this.themeStorage=localStorage.getItem("po-ui-theme")),this.theme=this.themeStorage==="po-theme-default"?0:1,this.changeTheme(this.theme,!1),this.themeChangeListenerDefault=()=>{this.changeTheme(0,!1),this.theme=0},this.themeChangeListenerDark=()=>{this.changeTheme(1,!1),this.theme=1},window.addEventListener("po-theme-default",this.themeChangeListenerDefault),window.addEventListener("po-theme-dark",this.themeChangeListenerDark)}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Email invalid."),this.modalClose()}ngOnDestroy(){window.removeEventListener("po-theme-default",this.themeChangeListenerDefault),window.removeEventListener("po-theme-dark",this.themeChangeListenerDark)}disableNotification(){this.isSubscribed=!0}static \u0275fac=function(o){return new(o||a)(E(oe),E(C))};static \u0275cmp=u({type:a,selectors:[["sample-po-theme-labs"]],viewQuery:function(o,l){if(o&1&&(w(Ee,7),w(T,7)),o&2){let s;k(s=A())&&(l.formShare=s.first),k(s=A())&&(l.poModal=s.first)}},standalone:!1,features:[W([C])],decls:40,vars:7,consts:[["formShare","ngForm"],["id","test"],["p-title","Theme Change"],["name","theme",1,"po-lg-4","po-pl-2",3,"ngModelChange","p-change","ngModel","p-options"],["p-title","Example"],["p-title","Dashboard",3,"p-actions","p-breadcrumb"],[1,"po-row"],["p-title","Daily visitors",1,"po-md-6","po-lg-4","po-mb-2"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-widget-text-subtitle"],["p-title","Most viewed page",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Website status",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","NPM downloads",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Devforum PO questions",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Angular versions supported",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(o,l){if(o&1){let s=B();t(0,"po-container",1)(1,"po-widget",2)(2,"po-radio-group",3),M("ngModelChange",function(c){return g(s),L(l.theme,c)||(l.theme=c),x(c)}),v("p-change",function(c){return g(s),x(l.changeTheme(c))}),n()(),t(3,"po-widget",4)(4,"po-page-default",5)(5,"div",6)(6,"po-widget",7)(7,"div",8),e(8,"540"),n(),t(9,"div",9),e(10,"www.po.com.br"),n()(),t(11,"po-widget",10)(12,"div",8),e(13,"300 views"),n(),t(14,"div",9),e(15,"https://po-ui.io"),n()(),t(16,"po-widget",11)(17,"div",8),e(18,"Online"),n(),t(19,"div",9),e(20,"28 days"),n()(),t(21,"po-widget",12)(22,"div",8),e(23,"266"),n(),t(24,"div",9),e(25,"@po-ui/ng-components - 1.10.1"),n()(),t(26,"po-widget",13)(27,"div",8),e(28,"800 questions"),n(),t(29,"div",9),e(30,"https://devforum.po.com.br"),n()(),t(31,"po-widget",14)(32,"div",8),e(33,"AngularJS - Angular 6"),n(),t(34,"div",9),e(35,"Angular 6 most downloaded"),n()()()()()(),t(36,"po-modal",15)(37,"form",null,0)(39,"po-email",16),M("ngModelChange",function(c){return g(s),L(l.email,c)||(l.email=c),x(c)}),n()()()}o&2&&(d(2),N("ngModel",l.theme),p("p-options",l.themeOptions),d(2),p("p-actions",l.actions)("p-breadcrumb",l.breadcrumb),d(32),p("p-primary-action",l.shareAction)("p-secondary-action",l.cancelAction),d(3),N("ngModel",l.email))},dependencies:[K,G,Q,J,U,Z,$,ae,T,P,le],encapsulation:2})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-theme-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Theme Labs"),n(),t(4,"a",2),v("click",function(){return l.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-theme-labs/sample-po-theme-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-container id="test">
  <po-widget p-title="Theme Change">
    <po-radio-group
      class="po-lg-4 po-pl-2"
      name="theme"
      [(ngModel)]="theme"
      [p-options]="themeOptions"
      (p-change)="changeTheme($event)"
    >
    </po-radio-group>
  </po-widget>
  <po-widget p-title="Example">
    <po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
      <div class="po-row">
        <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Daily visitors">
          <div class="po-font-subtitle po-text-center">540</div>
          <div class="po-text-center sample-widget-text-subtitle">www.po.com.br</div>
        </po-widget>

        <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Most viewed page">
          <div class="po-font-subtitle po-text-center">300 views</div>
          <div class="po-text-center sample-widget-text-subtitle">https://po-ui.io</div>
        </po-widget>

        <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Website status">
          <div class="po-font-subtitle po-text-center">Online</div>
          <div class="po-text-center sample-widget-text-subtitle">28 days</div>
        </po-widget>

        <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="NPM downloads">
          <div class="po-font-subtitle po-text-center">266</div>
          <div class="po-text-center sample-widget-text-subtitle">&#64;po-ui/ng-components - 1.10.1</div>
        </po-widget>

        <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Devforum PO questions">
          <div class="po-font-subtitle po-text-center">800 questions</div>
          <div class="po-text-center sample-widget-text-subtitle">https://devforum.po.com.br</div>
        </po-widget>

        <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Angular versions supported">
          <div class="po-font-subtitle po-text-center">AngularJS - Angular 6</div>
          <div class="po-text-center sample-widget-text-subtitle">Angular 6 most downloaded</div>
        </po-widget>
      </div>
    </po-page-default>
  </po-widget>
</po-container>

<po-modal p-title="Share webpage" [p-primary-action]="shareAction" [p-secondary-action]="cancelAction">
  <form #formShare="ngForm">
    <po-email
      class="po-lg-12"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Type an e-mail for sharing webpage: http://www.po.com.br"
      p-required
    >
    </po-email>
  </form>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-theme-labs/sample-po-theme-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  PoBreadcrumb,
  PoRadioGroupOption,
  PoThemeService,
  PoThemeTypeEnum,
  poThemeDefaultActions,
  poThemeDefaultActionsDark,
  poThemeDefaultDarkValues,
  poThemeDefaultFeedback,
  poThemeDefaultFeedbackDark,
  poThemeDefaultLightValues,
  poThemeDefaultNeutrals
} from '@po-ui/ng-components';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';
@Component({
  selector: 'sample-po-theme-labs',
  templateUrl: './sample-po-theme-labs.component.html',
  providers: [PoThemeService],
  standalone: false
})
export class SamplePoThemeLabsComponent implements OnInit, OnDestroy {
  @ViewChild('formShare', { static: true })
  formShare!: NgForm;
  @ViewChild(PoModalComponent, { static: true })
  poModal!: PoModalComponent;

  email: string = '';
  isSubscribed: boolean = false;

  theme: PoThemeTypeEnum = 0;
  themeStorage = 'po-theme-default';
  private themeChangeListenerDark: any;
  private themeChangeListenerDefault: any;

  readonly themeOptions: Array<PoRadioGroupOption> = [
    { label: 'Light', value: 0 },
    { label: 'Dark', value: 1 }
  ];

  public readonly actions: Array<PoPageAction> = [
    {
      label: 'Share',
      action: this.modalOpen.bind(this),
      icon: 'po-icon-share'
    },
    { label: 'GitHub', url: 'https://github.com/po-ui/po-angular' },
    { label: 'Components', url: '/documentation' },
    {
      label: 'Disable notification',
      action: this.disableNotification.bind(this),
      disabled: () => this.isSubscribed
    }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Dashboard' }]
  };

  public readonly cancelAction: PoModalAction = {
    action: () => {
      this.modalClose();
    },
    label: 'Cancel'
  };

  public readonly shareAction: PoModalAction = {
    action: () => {
      this.share();
    },
    label: 'Share'
  };

  poThemeSample = {
    name: 'po-theme',
    type: {
      light: {
        color: {
          brand: {
            '01': {
              lightest: '#f2eaf6',
              lighter: '#d9c2e5',
              light: '#bd94d1',
              base: '#753399',
              dark: '#5b1c7d',
              darker: '#400e58',
              darkest: '#260538'
            },
            '02': {
              base: '#b92f72'
            },
            '03': {
              base: '#ffd464'
            }
          },
          action: {
            ...poThemeDefaultActions,
            disabled: 'var(--color-neutral-mid-40)'
          },
          feedback: {
            ...poThemeDefaultFeedback,
            info: {
              ...poThemeDefaultFeedback.info,
              base: '#0079b8'
            }
          },
          neutral: {
            ...poThemeDefaultNeutrals
          }
        },
        onRoot: {
          ...poThemeDefaultLightValues.onRoot,
          '--color-page-background-color-page': 'var(--color-neutral-light-05)'
        },
        perComponent: {
          ...poThemeDefaultLightValues.perComponent
        }
      },
      dark: {
        color: {
          brand: {
            '01': {
              darkest: '#f2eaf6',
              darker: '#d9c2e5',
              dark: '#bd94d1',
              base: '#753399',
              light: '#5b1c7d',
              lighter: '#400e58',
              lightest: '#260538'
            },
            '02': {
              base: '#b92f72'
            },
            '03': {
              base: '#ffd464'
            }
          },
          action: {
            ...poThemeDefaultActionsDark,
            disabled: 'var(--color-neutral-mid-40)'
          },
          feedback: {
            ...poThemeDefaultFeedbackDark,
            info: {
              ...poThemeDefaultFeedbackDark.info,
              base: '#0079b8'
            }
          },
          neutral: {
            light: {
              '00': '#1c1c1c',
              '05': '#202020',
              '10': '#2b2b2b',
              '20': '#3b3b3b',
              '30': '#5a5a5a'
            },
            mid: {
              '40': '#7c7c7c',
              '60': '#a1a1a1'
            },
            dark: {
              '70': '#c1c1c1',
              '80': '#d9d9d9',
              '90': '#eeeeee',
              '95': '#fbfbfb'
            }
          }
        },
        onRoot: {
          ...poThemeDefaultDarkValues.onRoot,
          '--color-page-background-color-page': 'var(--color-neutral-light-05)'
        },
        perComponent: {
          ...poThemeDefaultDarkValues.perComponent
        }
      }
    },
    active: PoThemeTypeEnum.light
  };

  constructor(
    private poNotification: PoNotificationService,
    private poTheme: PoThemeService
  ) {
    const _poTheme = this.poTheme.applyTheme();
    if (!_poTheme) {
      this.poTheme.setTheme(this.poThemeSample, this.theme);
      this.theme = this.poThemeSample.active;
    } else {
      this.theme = _poTheme.active || 0;
    }
  }

  changeTheme(value: number, dispatchEvent = true) {
    this.poTheme.setTheme(this.poThemeSample, value);
    value === 1
      ? localStorage.setItem('po-ui-theme', 'po-theme-dark')
      : localStorage.setItem('po-ui-theme', 'po-theme-default');
    if (dispatchEvent) {
      window.dispatchEvent(new Event('po-sample-change-theme'));
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('po-ui-theme')) {
      this.themeStorage = localStorage.getItem('po-ui-theme');
    }

    this.theme = this.themeStorage === 'po-theme-default' ? 0 : 1;
    this.changeTheme(this.theme, false);

    this.themeChangeListenerDefault = () => {
      this.changeTheme(0, false);
      this.theme = 0;
    };

    this.themeChangeListenerDark = () => {
      this.changeTheme(1, false);
      this.theme = 1;
    };

    window.addEventListener('po-theme-default', this.themeChangeListenerDefault);
    window.addEventListener('po-theme-dark', this.themeChangeListenerDark);
  }

  modalClose() {
    this.poModal.close();
    this.formShare.reset();
  }

  modalOpen() {
    this.poModal.open();
  }

  share() {
    if (this.formShare.valid) {
      this.poNotification.success(\`Webpage shared successfully to: \${this.email}.\`);
    } else {
      this.poNotification.error(\`Email invalid.\`);
    }
    this.modalClose();
  }

  ngOnDestroy(): void {
    window.removeEventListener('po-theme-default', this.themeChangeListenerDefault);
    window.removeEventListener('po-theme-dark', this.themeChangeListenerDark);
  }

  private disableNotification() {
    this.isSubscribed = true;
  }
}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-theme-labs"),n(),i(23,"hr")),o&2&&(d(5),q("po-icon "+l.sampleCodeButtonIcon),d(),j(" ",l.sampleCodeButtonLabel,""),d(),p("ngClass",z(4,Se,l.hideSampleCodeTabs)))},dependencies:[H,re,y,D,pe],encapsulation:2})}return a})();var ce=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-theme-doc"]],standalone:!1,decls:896,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/colors-customization"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoThemeColorAction"],[1,"language-javascript"],["pan","",1,"docs-api-property-type","poThemeColorBrand"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoThemeColorNeutral"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","{","'70'?:","string;","'80'?:","string;","'90'?:","string;","'95'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'00'?:","string;","'05'?:","string;","'10'?:","string;","'20'?:","string;","'30'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'40'?:","string;","'60'?:","string;","}"],["pan","",1,"docs-api-property-type","PoThemeColor"],["pan","",1,"docs-api-property-type","DynamicProperties"],["pan","",1,"docs-api-property-type","PoThemeTypeEnum"],["pan","",1,"docs-api-property-type","PoThemeActive"],["pan","",1,"docs-api-property-type","PoThemeType"],["pan","",1,"docs-api-property-type","Array<PoThemeType>"]],template:function(o,l){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoThemeModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo respons\xE1vel por fornecer servi\xE7os relacionados ao tema PO."),n()(),t(7,"h3",3),e(8,"Services"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoThemeService"),n()(),t(12,"div",2)(13,"p"),e(14,"O "),t(15,"code"),e(16,"PoThemeService"),n(),e(17," possibilita a personaliza\xE7\xE3o das cores do tema padr\xE3o do "),t(18,"code"),e(19,"PO-UI"),n(),e(20,", permitindo a altera\xE7\xE3o dos valores das vari\xE1veis de estilo usadas no CSS padr\xE3o."),n(),t(21,"blockquote")(22,"p"),e(23,"Para saber mais sobre como customizar as cores do tema padr\xE3o verifique o item "),t(24,"a",6),e(25,"Customizando cores do tema padr\xE3o"),n(),e(26," na aba "),t(27,"code"),e(28,"Guias"),n(),e(29,"."),n()(),t(30,"blockquote")(31,"p"),e(32,"Obs.: N\xE3o est\xE1 documentado aqui e n\xE3o indicamos a customiza\xE7\xE3o das cores de 'feedback' por motivos de acessibilidade e usabilidade."),n()()(),t(33,"h3",7),e(34,"M\xE9todos"),n(),t(35,"table",8)(36,"tr",9)(37,"th",10)(38,"div",11)(39,"h4")(40,"span",12),e(41," setTheme "),n()()()()(),t(42,"tr",13)(43,"td",13)(44,"p"),e(45,"Aplica um tema ao componente de acordo com o tipo de tema e o n\xEDvel de acessibilidade especificados."),n(),t(46,"p"),e(47,"Este m\xE9todo configura o tema do componente com base no objeto "),t(48,"code"),e(49,"themeConfig"),n(),e(50," fornecido, no "),t(51,"code"),e(52,"themeType"),n(),e(53," e no "),t(54,"code"),e(55,"a11yLevel"),n(),e(56,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),n()()()(),t(57,"h5")(58,"b"),e(59,"Par\xE2metros"),n()(),t(60,"table",14)(61,"tr",15)(62,"th",16),e(63,"Nome"),n(),t(64,"th",16),e(65,"Tipo"),n(),t(66,"th",16),e(67,"Descri\xE7\xE3o"),n()(),t(68,"tr",9)(69,"td",17),e(70," themeConfig"),n(),t(71,"td",18)(72,"code",19),e(73," PoTheme "),n()(),t(74,"td",13)(75,"p"),e(76,"Configura\xE7\xE3o de tema a ser aplicada ao componente."),n()()(),t(77,"tr",9)(78,"td",17),e(79," themeType"),n(),t(80,"td",18)(81,"code",19),e(82," PoThemeTypeEnum "),n()(),t(83,"td",13)(84,"p"),e(85,"(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro \xE9 o padr\xE3o."),n()()(),t(86,"tr",9)(87,"td",17),e(88," a11yLevel"),n(),t(89,"td",18)(90,"code",19),e(91," PoThemeA11yEnum "),n()(),t(92,"td",13)(93,"p"),e(94,"(Opcional) N\xEDvel de acessibilidade do tema, podendo ser AA ou AAA. Padr\xE3o \xE9 AAA."),n()()(),t(95,"tr",9)(96,"td",17),e(97," persistPreference"),n(),t(98,"td",18)(99,"code",19),e(100," boolean "),n()(),t(101,"td",13)(102,"p"),e(103,"(Opcional) Define se a prefer\xEAncia de tema deve ser salva no localStorage para persist\xEAncia. "),t(104,"code"),e(105,"true"),n(),e(106," para salvar, "),t(107,"code"),e(108,"false"),n(),e(109," para n\xE3o salvar."),n()()()(),i(110,"br"),t(111,"table",8)(112,"tr",9)(113,"th",10)(114,"div",11)(115,"h4")(116,"span",12),e(117," persistThemeActive "),n()()()()(),t(118,"tr",13)(119,"td",13)(120,"p"),e(121,"Persiste e define o tema do aplicativo com base nos dados armazenados."),n(),t(122,"p"),e(123,"Este m\xE9todo recupera os dados do tema armazenados e os aplica ao aplicativo."),n()()()(),t(124,"h5")(125,"b"),e(126,"Retorno"),n()(),t(127,"table",14)(128,"tr",15)(129,"th",16),e(130,"Tipo"),n(),t(131,"th",16),e(132,"Descri\xE7\xE3o"),n()(),t(133,"tr",9)(134,"td",18)(135,"code",19),e(136,"PoTheme"),n()(),t(137,"td",13)(138,"p"),e(139,"Recupera o tema armazenado."),n()()()(),i(140,"br"),t(141,"table",8)(142,"tr",9)(143,"th",10)(144,"div",11)(145,"h4")(146,"span",12),e(147," changeCurrentThemeType "),n()()()()(),t(148,"tr",13)(149,"td",13)(150,"p"),e(151,"Altera o tipo do tema armazenado e aplica os novos estilos ao documento."),n(),t(152,"p"),e(153,"Este m\xE9todo altera o tipo do tema armazenado ativo (light/dark)"),n()()()(),t(154,"h5")(155,"b"),e(156,"Par\xE2metros"),n()(),t(157,"table",14)(158,"tr",15)(159,"th",16),e(160,"Nome"),n(),t(161,"th",16),e(162,"Tipo"),n(),t(163,"th",16),e(164,"Descri\xE7\xE3o"),n()(),t(165,"tr",9)(166,"td",17),e(167," themeType"),n(),t(168,"td",18)(169,"code",19),e(170," PoThemeTypeEnum "),n()(),t(171,"td",13)(172,"p"),e(173,"O tipo de tema a ser aplicado, light ou dark."),n()()()(),i(174,"br"),t(175,"table",8)(176,"tr",9)(177,"th",10)(178,"div",11)(179,"h4")(180,"span",12),e(181," cleanThemeActive "),n()()()()(),t(182,"tr",13)(183,"td",13)(184,"p"),e(185,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),n()()()(),t(186,"h5")(187,"b"),e(188,"Par\xE2metros"),n()(),t(189,"table",14)(190,"tr",15)(191,"th",16),e(192,"Nome"),n(),t(193,"th",16),e(194,"Tipo"),n(),t(195,"th",16),e(196,"Descri\xE7\xE3o"),n()(),t(197,"tr",9)(198,"td",17),e(199," persistPreference"),n(),t(200,"td",18)(201,"code",19),e(202," boolean "),n()(),t(203,"td",13)(204,"p"),e(205,"(Opcional) Define se a prefer\xEAncia de tema n\xE3o deve ser mantida no localStorage para persist\xEAncia. "),t(206,"code"),e(207,"true"),n(),e(208," para remover, "),t(209,"code"),e(210,"false"),n(),e(211," para manter."),n()()()(),i(212,"br"),t(213,"table",8)(214,"tr",9)(215,"th",10)(216,"div",11)(217,"h4")(218,"span",12),e(219," getThemeActive "),n()()()()(),t(220,"tr",13)(221,"td",13)(222,"p"),e(223,"Retorna o tema ativo como um observable."),n()()()(),t(224,"h5")(225,"b"),e(226,"Retorno"),n()(),t(227,"table",14)(228,"tr",15)(229,"th",16),e(230,"Tipo"),n(),t(231,"th",16),e(232,"Descri\xE7\xE3o"),n()(),t(233,"tr",9)(234,"td",18)(235,"code",19),e(236,"PoTheme"),n()(),t(237,"td",13)(238,"p"),e(239,"Tema ativo."),n()()()(),i(240,"br"),t(241,"table",8)(242,"tr",9)(243,"th",10)(244,"div",11)(245,"h4")(246,"span",12),e(247," setDefaultTheme "),n()()()()(),t(248,"tr",13)(249,"td",13)(250,"p"),e(251,'Define o tema atual como o tema "PoUI Padr\xE3o".'),n()()()(),t(252,"h5")(253,"b"),e(254,"Par\xE2metros"),n()(),t(255,"table",14)(256,"tr",15)(257,"th",16),e(258,"Nome"),n(),t(259,"th",16),e(260,"Tipo"),n(),t(261,"th",16),e(262,"Descri\xE7\xE3o"),n()(),t(263,"tr",9)(264,"td",17),e(265," type"),n(),t(266,"td",18)(267,"code",19),e(268," PoThemeTypeEnum "),n()(),t(269,"td",13)(270,"p"),e(271,"O tipo de Tema a ser aplicado, light / dark."),n()()()(),i(272,"br"),t(273,"table",8)(274,"tr",9)(275,"th",10)(276,"div",11)(277,"h4")(278,"span",12),e(279," setThemeType "),n()()()()(),t(280,"tr",13)(281,"td",13)(282,"p"),e(283,"Define o tipo (light/dark) quando um tema est\xE1 sendo aplicado."),n()()()(),t(284,"h5")(285,"b"),e(286,"Par\xE2metros"),n()(),t(287,"table",14)(288,"tr",15)(289,"th",16),e(290,"Nome"),n(),t(291,"th",16),e(292,"Tipo"),n(),t(293,"th",16),e(294,"Descri\xE7\xE3o"),n()(),t(295,"tr",9)(296,"td",17),e(297," theme"),n(),t(298,"td",18)(299,"code",19),e(300," PoTheme "),n()(),t(301,"td",13)(302,"p"),e(303,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(304,"tr",9)(305,"td",17),e(306," themeType"),n(),t(307,"td",18)(308,"code",19),e(309," PoThemeTypeEnum "),n()(),t(310,"td",13)(311,"p"),e(312,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(313,"br"),t(314,"table",8)(315,"tr",9)(316,"th",10)(317,"div",11)(318,"h4")(319,"span",12),e(320," setCurrentThemeType "),n()()()()(),t(321,"tr",13)(322,"td",13)(323,"p"),e(324,"Define o tipo (light/dark) para um tema j\xE1 ativo."),n()()()(),t(325,"h5")(326,"b"),e(327,"Par\xE2metros"),n()(),t(328,"table",14)(329,"tr",15)(330,"th",16),e(331,"Nome"),n(),t(332,"th",16),e(333,"Tipo"),n(),t(334,"th",16),e(335,"Descri\xE7\xE3o"),n()(),t(336,"tr",9)(337,"td",17),e(338," themeType"),n(),t(339,"td",18)(340,"code",19),e(341," PoThemeTypeEnum "),n()(),t(342,"td",13)(343,"p"),e(344,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(345,"br"),t(346,"table",8)(347,"tr",9)(348,"th",10)(349,"div",11)(350,"h4")(351,"span",12),e(352," setThemeA11y "),n()()()()(),t(353,"tr",13)(354,"td",13)(355,"p"),e(356,"Define o nivel de acessibilidade quando um tema est\xE1 sendo aplicado."),n()()()(),t(357,"h5")(358,"b"),e(359,"Par\xE2metros"),n()(),t(360,"table",14)(361,"tr",15)(362,"th",16),e(363,"Nome"),n(),t(364,"th",16),e(365,"Tipo"),n(),t(366,"th",16),e(367,"Descri\xE7\xE3o"),n()(),t(368,"tr",9)(369,"td",17),e(370," theme"),n(),t(371,"td",18)(372,"code",19),e(373," PoTheme "),n()(),t(374,"td",13)(375,"p"),e(376,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(377,"tr",9)(378,"td",17),e(379," a11y"),n(),t(380,"td",18)(381,"code",19),e(382," PoThemeA11yEnum "),n()(),t(383,"td",13)(384,"p"),e(385,"(Opcional) N\xEDvel de acessibilidade a ser aplicado ao tema, como AA ou AAA. Se n\xE3o for informado, por padr\xE3o a acessibilidade ser\xE1 AAA."),n()()()(),i(386,"br"),t(387,"table",8)(388,"tr",9)(389,"th",10)(390,"div",11)(391,"h4")(392,"span",12),e(393," setCurrentThemeA11y "),n()()()()(),t(394,"tr",13)(395,"td",13)(396,"p"),e(397,"Define o nivel de acessibilidade para um tema j\xE1 ativo."),n()()()(),t(398,"h5")(399,"b"),e(400,"Par\xE2metros"),n()(),t(401,"table",14)(402,"tr",15)(403,"th",16),e(404,"Nome"),n(),t(405,"th",16),e(406,"Tipo"),n(),t(407,"th",16),e(408,"Descri\xE7\xE3o"),n()(),t(409,"tr",9)(410,"td",17),e(411," a11y"),n(),t(412,"td",18)(413,"code",19),e(414," PoThemeA11yEnum "),n()(),t(415,"td",13)(416,"p"),e(417,"(Opcional) N\xEDvel de acessibilidade a ser aplicado ao tema, como AA ou AAA. Se n\xE3o for informado, por padr\xE3o a acessibilidade ser\xE1 AAA."),n()()()(),i(418,"br"),t(419,"h3"),e(420,"Interfaces"),n(),t(421,"h4",20)(422,"code",5),e(423,"PoThemeColor"),n()(),t(424,"div",2)(425,"p"),e(426,"Interface para representar as cores do tema."),n()(),t(427,"h4",7),e(428,"Propriedades"),n(),t(429,"table",14)(430,"tr",15)(431,"th",16),e(432,"Nome"),n(),t(433,"th",16),e(434,"Tipo"),n(),t(435,"th",16),e(436,"Descri\xE7\xE3o"),n()(),t(437,"tr",9)(438,"td",17)(439,"div",11)(440,"span",12),e(441," action"),i(442,"br"),n()()(),t(443,"td",18)(444,"code",21),e(445,"PoThemeColorAction"),n()(),t(446,"td",13)(447,"em")(448,"strong"),e(449,"(opcional)"),n()(),t(450,"p"),e(451,"Cores da Action a serem aplicadas."),n(),t(452,"p"),e(453,"Exemplo de uso:"),n(),t(454,"pre")(455,"code",22),e(456,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}`),n()()()(),t(457,"tr",9)(458,"td",17)(459,"div",11)(460,"span",12),e(461," brand"),i(462,"br"),n()()(),t(463,"td",18)(464,"code",23),e(465,"poThemeColorBrand"),n()(),t(466,"td",13)(467,"em")(468,"strong"),e(469,"(opcional)"),n()(),t(470,"p"),e(471,"Cores da Brand a serem aplicadas."),n(),t(472,"p"),e(473,"Exemplo de uso:"),n(),t(474,"pre")(475,"code",24),e(476,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}`),n()()()(),t(477,"tr",9)(478,"td",17)(479,"div",11)(480,"span",12),e(481," neutral"),i(482,"br"),n()()(),t(483,"td",18)(484,"code",25),e(485,"PoThemeColorNeutral"),n()(),t(486,"td",13)(487,"em")(488,"strong"),e(489,"(opcional)"),n()(),t(490,"p"),e(491,"Cores Neutrals a serem aplicadas."),n(),t(492,"p"),e(493,"Exemplo de uso:"),n(),t(494,"pre")(495,"code",24),e(496,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}`),n()()()()(),t(497,"h4",20)(498,"code",5),e(499,"PoThemeColorAction"),n()(),t(500,"div",2)(501,"p"),e(502,"Interface para as cores de a\xE7\xE3o do tema."),n()(),t(503,"h4",7),e(504,"Propriedades"),n(),t(505,"table",14)(506,"tr",15)(507,"th",16),e(508,"Nome"),n(),t(509,"th",16),e(510,"Tipo"),n(),t(511,"th",16),e(512,"Descri\xE7\xE3o"),n()(),t(513,"tr",9)(514,"td",17)(515,"div",11)(516,"span",12),e(517," default"),i(518,"br"),n()()(),t(519,"td",18)(520,"code",26),e(521,"string"),n()(),t(522,"td",13)(523,"em")(524,"strong"),e(525,"(opcional)"),n()(),t(526,"p"),e(527,"Cores da Action 'Default'."),n(),t(528,"p"),e(529,"Exemplo de uso:"),n(),t(530,"pre")(531,"code",24),e(532,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}`),n()()()(),t(533,"tr",9)(534,"td",17)(535,"div",11)(536,"span",12),e(537," disabled"),i(538,"br"),n()()(),t(539,"td",18)(540,"code",26),e(541,"string"),n()(),t(542,"td",13)(543,"em")(544,"strong"),e(545,"(opcional)"),n()(),t(546,"p"),e(547,"Cores da Action de 'disabled'."),n(),t(548,"p"),e(549,"Exemplo de uso:"),n(),t(550,"pre")(551,"code",24),e(552,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}`),n()()()(),t(553,"tr",9)(554,"td",17)(555,"div",11)(556,"span",12),e(557," focus"),i(558,"br"),n()()(),t(559,"td",18)(560,"code",26),e(561,"string"),n()(),t(562,"td",13)(563,"em")(564,"strong"),e(565,"(opcional)"),n()(),t(566,"p"),e(567,"Cores da Action para 'focus'."),n(),t(568,"p"),e(569,"Exemplo de uso:"),n(),t(570,"pre")(571,"code",24),e(572,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}`),n()()()(),t(573,"tr",9)(574,"td",17)(575,"div",11)(576,"span",12),e(577," hover"),i(578,"br"),n()()(),t(579,"td",18)(580,"code",26),e(581,"string"),n()(),t(582,"td",13)(583,"em")(584,"strong"),e(585,"(opcional)"),n()(),t(586,"p"),e(587,"Cores da Action para 'hover'."),n(),t(588,"p"),e(589,"Exemplo de uso:"),n(),t(590,"pre")(591,"code",24),e(592,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}`),n()()()(),t(593,"tr",9)(594,"td",17)(595,"div",11)(596,"span",12),e(597," pressed"),i(598,"br"),n()()(),t(599,"td",18)(600,"code",26),e(601,"string"),n()(),t(602,"td",13)(603,"em")(604,"strong"),e(605,"(opcional)"),n()(),t(606,"p"),e(607,"Cores da Action para 'pressed'."),n(),t(608,"p"),e(609,"Exemplo de uso:"),n(),t(610,"pre")(611,"code",24),e(612,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}`),n()()()()(),t(613,"h4",20)(614,"code",5),e(615,"PoThemeColorNeutral"),n()(),t(616,"div",2)(617,"p"),e(618,"Interface para as cores neutras do tema."),n()(),t(619,"h4",7),e(620,"Propriedades"),n(),t(621,"table",14)(622,"tr",15)(623,"th",16),e(624,"Nome"),n(),t(625,"th",16),e(626,"Tipo"),n(),t(627,"th",16),e(628,"Descri\xE7\xE3o"),n()(),t(629,"tr",9)(630,"td",17)(631,"div",11)(632,"span",12),e(633," dark"),i(634,"br"),n()()(),t(635,"td",18)(636,"code",27),e(637,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),n()(),t(638,"td",13)(639,"em")(640,"strong"),e(641,"(opcional)"),n()(),t(642,"p"),e(643,"Cores Neutrals do tipo 'dark'."),n(),t(644,"p"),e(645,"Exemplo de uso:"),n(),t(646,"pre")(647,"code",24),e(648,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}`),n()()()(),t(649,"tr",9)(650,"td",17)(651,"div",11)(652,"span",12),e(653," light"),i(654,"br"),n()()(),t(655,"td",18)(656,"code",28),e(657,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),n()(),t(658,"td",13)(659,"em")(660,"strong"),e(661,"(opcional)"),n()(),t(662,"p"),e(663,"Cores Neutrals do tipo 'light'."),n(),t(664,"p"),e(665,"Exemplo de uso:"),n(),t(666,"pre")(667,"code",24),e(668,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}`),n()()()(),t(669,"tr",9)(670,"td",17)(671,"div",11)(672,"span",12),e(673," mid"),i(674,"br"),n()()(),t(675,"td",18)(676,"code",29),e(677,`{ '40'?: string; '60'?: string;
}`),n()(),t(678,"td",13)(679,"em")(680,"strong"),e(681,"(opcional)"),n()(),t(682,"p"),e(683,"Cores Neutrals do tipo 'mid'."),n(),t(684,"p"),e(685,"Exemplo de uso:"),n(),t(686,"pre")(687,"code",24),e(688,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}`),n()()()()(),t(689,"h4",20)(690,"code",5),e(691,"PoThemeTokens"),n()(),t(692,"div",2)(693,"p"),e(694,"Interface para o tema da aplica\xE7\xE3o."),n()(),t(695,"h4",20)(696,"code",5),e(697,"PoThemeToken"),n()(),t(698,"div",2)(699,"p"),e(700,"Interface para os tokens do Tema."),n()(),t(701,"h4",7),e(702,"Propriedades"),n(),t(703,"table",14)(704,"tr",15)(705,"th",16),e(706,"Nome"),n(),t(707,"th",16),e(708,"Tipo"),n(),t(709,"th",16),e(710,"Descri\xE7\xE3o"),n()(),t(711,"tr",9)(712,"td",17)(713,"div",11)(714,"span",12),e(715," color"),i(716,"br"),n()()(),t(717,"td",18)(718,"code",30),e(719,"PoThemeColor"),n()(),t(720,"td",13)(721,"em")(722,"strong"),e(723,"(opcional)"),n()(),t(724,"p"),e(725,"Tokens do tipo 'color'"),n()()(),t(726,"tr",9)(727,"td",17)(728,"div",11)(729,"span",12),e(730," onRoot"),i(731,"br"),n()()(),t(732,"td",18)(733,"code",31),e(734,"DynamicProperties"),n()(),t(735,"td",13)(736,"em")(737,"strong"),e(738,"(opcional)"),n()(),t(739,"p"),e(740,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),t(741,"code"),e(742,":root"),n()(),t(743,"p"),e(744,"Exemplo de uso:"),n(),t(745,"pre")(746,"code",24),e(747,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},`),n()()()(),t(748,"tr",9)(749,"td",17)(750,"div",11)(751,"span",12),e(752," perComponent"),i(753,"br"),n()()(),t(754,"td",18)(755,"code",31),e(756,"DynamicProperties"),n()(),t(757,"td",13)(758,"em")(759,"strong"),e(760,"(opcional)"),n()(),t(761,"p"),e(762,"Tokens do tipo 'perComponent'"),n(),t(763,"p"),e(764,"Exemplo de uso:"),n(),t(765,"pre")(766,"code",24),e(767,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},`),n()()()()(),t(768,"h4",20)(769,"code",5),e(770,"PoTheme"),n()(),t(771,"div",2)(772,"p"),e(773,"Interface para o m\xE9todo "),t(774,"code"),e(775,"setTheme()"),n(),e(776,"."),n()(),t(777,"h4",7),e(778,"Propriedades"),n(),t(779,"table",14)(780,"tr",15)(781,"th",16),e(782,"Nome"),n(),t(783,"th",16),e(784,"Tipo"),n(),t(785,"th",16),e(786,"Descri\xE7\xE3o"),n()(),t(787,"tr",9)(788,"td",17)(789,"div",11)(790,"span",12),e(791," active"),i(792,"br"),n()()(),t(793,"td",18)(794,"code",32),e(795,"PoThemeTypeEnum "),n(),t(796,"code",33),e(797," PoThemeActive"),n()(),t(798,"td",13)(799,"em")(800,"strong"),e(801,"(opcional)"),n()(),t(802,"p"),e(803,"Tipo e nivel de acessibilidade de tema ativo"),n()()(),t(804,"tr",9)(805,"td",17)(806,"div",11)(807,"span",12),e(808," name"),i(809,"br"),n()()(),t(810,"td",18)(811,"code",26),e(812,"string"),n()(),t(813,"td",13)(814,"p"),e(815,"Nome do tema: 'default', 'totvs', 'sunset', etc."),n()()(),t(816,"tr",9)(817,"td",17)(818,"div",11)(819,"span",12),e(820," type"),i(821,"br"),n()()(),t(822,"td",18)(823,"code",34),e(824,"PoThemeType "),n(),t(825,"code",35),e(826," Array<PoThemeType>"),n()(),t(827,"td",13)(828,"p"),e(829,"Tipos de tema: 'light' e 'dark'"),n()()()(),t(830,"h3"),e(831,"Enums"),n(),t(832,"h4",4)(833,"code",5),e(834,"PoThemeA11yEnum"),n()(),t(835,"div",2)(836,"p"),e(837,"Enum para definir os n\xEDveis de acessibilidade suportados pelo servi\xE7o de temas."),n()(),t(838,"h4",7),e(839,"Propriedades"),n(),t(840,"table",14)(841,"tr",15)(842,"th",16),e(843,"Nome"),n(),t(844,"th",16),e(845,"Descri\xE7\xE3o"),n()(),t(846,"tr",9)(847,"td",17)(848,"div",11)(849,"span",12),e(850," AA"),i(851,"br"),n()()(),t(852,"td",13)(853,"p"),e(854,"N\xEDvel de acessibilidade duplo A (AA)"),n()()(),t(855,"tr",9)(856,"td",17)(857,"div",11)(858,"span",12),e(859," AAA"),i(860,"br"),n()()(),t(861,"td",13)(862,"p"),e(863,"N\xEDvel de acessibilidade triplo A (AAA)"),n()()()(),t(864,"h4",4)(865,"code",5),e(866,"PoThemeTypeEnum"),n()(),t(867,"div",2)(868,"p"),e(869,"Enum para definir os tipos de tema suportados pelo servi\xE7o de temas."),n()(),t(870,"h4",7),e(871,"Propriedades"),n(),t(872,"table",14)(873,"tr",15)(874,"th",16),e(875,"Nome"),n(),t(876,"th",16),e(877,"Descri\xE7\xE3o"),n()(),t(878,"tr",9)(879,"td",17)(880,"div",11)(881,"span",12),e(882," light"),i(883,"br"),n()()(),t(884,"td",13)(885,"p"),e(886,"Define o tema como claro."),n()()(),t(887,"tr",9)(888,"td",17)(889,"div",11)(890,"span",12),e(891," dark"),i(892,"br"),n()()(),t(893,"td",13)(894,"p"),e(895,"Define o tema como escuro."),n()()()()())},encapsulation:2})}return a})();var he=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||a)(E(X),E(Y))};static \u0275cmp=u({type:a,selectors:[["ng-component"]],standalone:!1,decls:6,vars:4,consts:[["p-title"," Theme",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(o,l){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),i(3,"sample-po-theme-doc"),n(),t(4,"po-tab",3),i(5,"sample-po-theme-labs-view"),n()()()),o&2&&(p("p-actions",l.actions),d(2),p("p-active",l.activeTab.includes("doc")),d(2),p("p-hide",l.hidePoWebSample)("p-active",l.activeTab.includes("web")))},dependencies:[P,y,D,se,ce],encapsulation:2})}return a})();var fe=[{path:"",component:he}],ue=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=f({type:a});static \u0275inj=S({imports:[O.forChild(fe),O]})}return a})();var We=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=f({type:a});static \u0275inj=S({imports:[me,ue]})}return a})();export{We as DocPoThemeModule};
