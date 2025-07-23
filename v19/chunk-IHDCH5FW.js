import{$ as V,$a as M,$d as ee,Bc as J,Ca as H,Da as j,Dc as K,Ea as A,F as u,G as g,Ga as o,Ia as y,Ka as f,La as b,Lb as L,Ma as C,Mb as U,Nb as q,Ob as F,Od as $,Pa as _,Pb as W,T as p,U as D,Wb as G,Xd as v,Yb as Q,Yd as T,Zb as R,_ as c,ad as X,cc as x,ha as d,ka as P,ld as Y,md as O,na as t,oa as e,oc as I,pa as r,re as E,se as te,ta as k,td as Z,ua as w,y as B}from"./chunk-TZ5FQAUY.js";var oe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-tooltip-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-label","Open Tooltip","p-tooltip","po-tooltip"]],template:function(a,i){a&1&&r(0,"po-button",0)},dependencies:[I,x],encapsulation:2})}return n})();var ue=n=>({"docs-sample-code-tabs":n}),ne=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-tooltip-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Tooltip Basic"),e(),t(4,"a",2),w("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-tooltip-basic/sample-po-tooltip-basic.component.html"),e(),t(13,"pre",7),o(14,`<po-button p-label="Open Tooltip" p-tooltip="po-tooltip"> </po-button>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-tooltip-basic/sample-po-tooltip-basic.component.ts"),e(),t(19,"pre",9),o(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-tooltip-basic',
  templateUrl: './sample-po-tooltip-basic.component.html',
  standalone: false
})
export class SamplePoTooltipBasicComponent {}
`),e()()()()(),t(21,"div",10),r(22,"sample-po-tooltip-basic"),e(),r(23,"hr")),a&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),d("ngClass",_(4,ue,i.hideSampleCodeTabs)))},dependencies:[M,E,v,T,oe],encapsulation:2})}return n})();var ae=(()=>{class n{tooltip;tooltipPosition;tooltipPositionOptions=[{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"},{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"}];ngOnInit(){this.restore()}restore(){this.tooltip="",this.tooltipPosition=void 0}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-tooltip-labs"]],standalone:!1,decls:12,vars:5,consts:[["f","ngForm"],[1,"po-row"],[1,"po-md-4","po-lg-2","po-offset-md-4","po-offset-lg-5","po-offset-xl-5"],["p-label","Po-Tooltip",3,"p-tooltip","p-tooltip-position"],["name","tooltip","p-clean","","p-label","Tooltip",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","tooltipPosition","p-label","Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let m=k();t(0,"div",1)(1,"div",2),r(2,"po-button",3),e()(),r(3,"hr"),t(4,"form",null,0)(6,"div",1)(7,"po-input",4),C("ngModelChange",function(l){return u(m),b(i.tooltip,l)||(i.tooltip=l),g(l)}),e()(),t(8,"div",1)(9,"po-radio-group",5),C("ngModelChange",function(l){return u(m),b(i.tooltipPosition,l)||(i.tooltipPosition=l),g(l)}),e()(),t(10,"div",1)(11,"po-button",6),w("p-click",function(){return u(m),g(i.restore())}),e()()()}a&2&&(p(2),d("p-tooltip",i.tooltip)("p-tooltip-position",i.tooltipPosition),p(5),f("ngModel",i.tooltip),p(2),f("ngModel",i.tooltipPosition),d("p-options",i.tooltipPositionOptions))},dependencies:[W,L,U,F,q,I,J,O,x],encapsulation:2})}return n})();var be=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-tooltip-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Tooltip Labs"),e(),t(4,"a",2),w("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-tooltip-labs/sample-po-tooltip-labs.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-row">
  <div class="po-md-4 po-lg-2 po-offset-md-4 po-offset-lg-5 po-offset-xl-5">
    <po-button [p-tooltip]="tooltip" [p-tooltip-position]="tooltipPosition" p-label="Po-Tooltip"> </po-button>
  </div>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-lg-12" name="tooltip" [(ngModel)]="tooltip" p-clean p-label="Tooltip"> </po-input>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-6"
      name="tooltipPosition"
      [(ngModel)]="tooltipPosition"
      p-label="Position"
      [p-options]="tooltipPositionOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-tooltip-labs/sample-po-tooltip-labs.component.ts"),e(),t(19,"pre",9),o(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tooltip-labs',
  templateUrl: './sample-po-tooltip-labs.component.html',
  standalone: false
})
export class SamplePoTooltipLabsComponent implements OnInit {
  tooltip: string;
  tooltipPosition: string;

  public readonly tooltipPositionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom-left', value: 'bottom-left' },
    { label: 'Bottom-right', value: 'bottom-right' },
    { label: 'Left', value: 'left' },
    { label: 'Left-top', value: 'left-top' },
    { label: 'Left-bottom', value: 'left-bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Top-left', value: 'top-left' },
    { label: 'Top-right', value: 'top-right' },
    { label: 'Right', value: 'right' },
    { label: 'Right-top', value: 'right-top' },
    { label: 'Right-bottom', value: 'right-bottom' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.tooltip = '';
    this.tooltipPosition = undefined;
  }
}
`),e()()()()(),t(21,"div",10),r(22,"sample-po-tooltip-labs"),e(),r(23,"hr")),a&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),d("ngClass",_(4,be,i.hideSampleCodeTabs)))},dependencies:[M,E,v,T,ae],encapsulation:2})}return n})();var we=["formNewUser"],pe=(()=>{class n{poNotification;formNewUser;birthDate;confirmPassword;CPF;email;emailTooltip;genre;name;nameTooltip;password;passwordTooltip;registration;registrationTooltip;constructor(s){this.poNotification=s}ngOnInit(){this.initialize()}cancel(){this.formNewUser.reset()}confirm(){this.formNewUser.valid?(this.poNotification.success("New user registered"),this.cancel()):this.poNotification.error("Please fill in the required fields")}initialize(){this.emailTooltip="your_account@po-ui.com",this.nameTooltip="Enter full name",this.passwordTooltip="Password must contain at least 8 characters",this.registrationTooltip="The registration number is on the registration form"}static \u0275fac=function(a){return new(a||n)(D(X))};static \u0275cmp=c({type:n,selectors:[["sample-po-tooltip-new-user"]],viewQuery:function(a,i){if(a&1&&H(we,7),a&2){let m;j(m=A())&&(i.formNewUser=m.first)}},standalone:!1,decls:16,vars:13,consts:[["formNewUser","ngForm"],[1,"po-row"],["p-primary-label","Cancel","p-secondary-label","Confirm","p-title","Register New User",1,"po-md-12",3,"p-primary-action","p-secondary-action"],["name","registration","p-clean","","p-label","Registration","p-mask","99999-99/99","p-minlength","11","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","email","p-clean","","p-label","Email","p-pattern","@po-ui.com","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","CPF","p-clean","","p-label","CPF","p-mask","999.999.999-99","p-minlength","14","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","birthDate","p-clean","","p-label","Birth Date",1,"po-md-6",3,"ngModelChange","ngModel"],["name","genre","p-clean","","p-label","Genre",1,"po-md-6",3,"ngModelChange","ngModel"],["name","password","p-clean","","p-label","Password","p-minlength","8","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","confirmPassword","p-clean","","p-label","Confirm Password","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-pattern"]],template:function(a,i){if(a&1){let m=k();t(0,"div",1)(1,"po-widget",2),w("p-primary-action",function(){return u(m),g(i.cancel())})("p-secondary-action",function(){return u(m),g(i.confirm())}),t(2,"form",null,0)(4,"div",1)(5,"po-input",3),C("ngModelChange",function(l){return u(m),b(i.registration,l)||(i.registration=l),g(l)}),e(),t(6,"po-email",4),C("ngModelChange",function(l){return u(m),b(i.email,l)||(i.email=l),g(l)}),e()(),t(7,"div",1)(8,"po-input",5),C("ngModelChange",function(l){return u(m),b(i.name,l)||(i.name=l),g(l)}),e(),t(9,"po-input",6),C("ngModelChange",function(l){return u(m),b(i.CPF,l)||(i.CPF=l),g(l)}),e()(),t(10,"div",1)(11,"po-datepicker",7),C("ngModelChange",function(l){return u(m),b(i.birthDate,l)||(i.birthDate=l),g(l)}),e(),t(12,"po-input",8),C("ngModelChange",function(l){return u(m),b(i.genre,l)||(i.genre=l),g(l)}),e()(),t(13,"div",1)(14,"po-password",9),C("ngModelChange",function(l){return u(m),b(i.password,l)||(i.password=l),g(l)}),e(),t(15,"po-password",10),C("ngModelChange",function(l){return u(m),b(i.confirmPassword,l)||(i.confirmPassword=l),g(l)}),e()()()()()}a&2&&(p(5),f("ngModel",i.registration),d("p-tooltip",i.registrationTooltip),p(),f("ngModel",i.email),d("p-tooltip",i.emailTooltip),p(2),f("ngModel",i.name),d("p-tooltip",i.nameTooltip),p(),f("ngModel",i.CPF),p(2),f("ngModel",i.birthDate),p(),f("ngModel",i.genre),p(2),f("ngModel",i.password),d("p-tooltip",i.passwordTooltip),p(),f("ngModel",i.confirmPassword),d("p-pattern",i.password))},dependencies:[W,L,U,F,q,K,Y,O,Z,ee,x],encapsulation:2})}return n})();var ve=n=>({"docs-sample-code-tabs":n}),re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-tooltip-new-user-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Tooltip - New User"),e(),t(4,"a",2),w("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-row">
  <po-widget
    class="po-md-12"
    p-primary-label="Cancel"
    p-secondary-label="Confirm"
    p-title="Register New User"
    (p-primary-action)="cancel()"
    (p-secondary-action)="confirm()"
  >
    <form #formNewUser="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
          name="registration"
          [(ngModel)]="registration"
          p-clean
          p-label="Registration"
          p-mask="99999-99/99"
          p-minlength="11"
          p-required
          [p-tooltip]="registrationTooltip"
        >
        </po-input>

        <po-email
          class="po-md-6"
          name="email"
          [(ngModel)]="email"
          p-clean
          p-label="Email"
          p-pattern="@po-ui.com"
          p-required
          [p-tooltip]="emailTooltip"
        >
        </po-email>
      </div>

      <div class="po-row">
        <po-input
          class="po-md-6"
          name="name"
          [(ngModel)]="name"
          p-clean
          p-label="Name"
          p-required
          [p-tooltip]="nameTooltip"
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="CPF"
          [(ngModel)]="CPF"
          p-clean
          p-label="CPF"
          p-mask="999.999.999-99"
          p-minlength="14"
          p-required
        >
        </po-input>
      </div>

      <div class="po-row">
        <po-datepicker class="po-md-6" name="birthDate" [(ngModel)]="birthDate" p-clean p-label="Birth Date">
        </po-datepicker>

        <po-input class="po-md-6" name="genre" [(ngModel)]="genre" p-clean p-label="Genre"> </po-input>
      </div>

      <div class="po-row">
        <po-password
          class="po-md-6"
          name="password"
          [(ngModel)]="password"
          p-clean
          p-label="Password"
          p-minlength="8"
          p-required
          [p-tooltip]="passwordTooltip"
        >
        </po-password>

        <po-password
          class="po-md-6"
          name="confirmPassword"
          [(ngModel)]="confirmPassword"
          p-clean
          p-label="Confirm Password"
          p-required
          [p-pattern]="password"
        >
        </po-password>
      </div>
    </form>
  </po-widget>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.ts"),e(),t(19,"pre",9),o(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tooltip-new-user',
  templateUrl: './sample-po-tooltip-new-user.component.html',
  standalone: false
})
export class SamplePoTooltipNewUserComponent implements OnInit {
  @ViewChild('formNewUser', { static: true }) formNewUser: UntypedFormControl;

  birthDate: Date;
  confirmPassword: string;
  CPF: string;
  email: string;
  emailTooltip: string;
  genre: string;
  name: string;
  nameTooltip: string;
  password: string;
  passwordTooltip: string;
  registration: number;
  registrationTooltip: string;

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.initialize();
  }

  cancel() {
    this.formNewUser.reset();
  }

  confirm() {
    if (this.formNewUser.valid) {
      this.poNotification.success(\`New user registered\`);
      this.cancel();
    } else {
      this.poNotification.error(\`Please fill in the required fields\`);
    }
  }

  initialize() {
    this.emailTooltip = 'your_account@po-ui.com';
    this.nameTooltip = 'Enter full name';
    this.passwordTooltip = 'Password must contain at least 8 characters';
    this.registrationTooltip = 'The registration number is on the registration form';
  }
}
`),e()()()()(),t(21,"div",10),r(22,"sample-po-tooltip-new-user"),e(),r(23,"hr")),a&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),d("ngClass",_(4,ve,i.hideSampleCodeTabs)))},dependencies:[M,E,v,T,pe],encapsulation:2})}return n})();var se=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-tooltip-doc"]],standalone:!1,decls:208,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/documentation/po-popover?view=doc"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),o(3,"import { PoTooltipModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),o(6,"M\xF3dulo da diretiva Po-Tooltip."),e()(),t(7,"h3",3),o(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),o(11,"PoTooltipDirective"),e()(),t(12,"div",2)(13,"p"),o(14,`A diretiva po-tooltip deve ser utilizada para oferecer informa\xE7\xF5es adicionais quando os usu\xE1rios
passam o mouse ou realizam o foco sobre o elemento alvo ao qual ela est\xE1 atribu\xEDda.`),e(),t(15,"p"),o(16,`O conte\xFAdo \xE9 formado por um pequeno texto que deve contribuir para uma tomada de decis\xE3o ou
orienta\xE7\xE3o do usu\xE1rio. A ativa\xE7\xE3o dele pode estar em qualquer componente ou tag HTML.`),e(),t(17,"p"),o(18,`Para textos maiores ou no caso de haver a necessidade de utilizar algum outro elemento como
conte\xFAdo deve-se utilizar o `),t(19,"a",6)(20,"strong"),o(21,"po-popover"),e()(),o(22,"."),e(),t(23,"h4",7),o(24,"Tokens customiz\xE1veis"),e(),t(25,"p"),o(26,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(27,"blockquote")(28,"p"),o(29,"Para maiores informa\xE7\xF5es, acesse o guia "),t(30,"a",8),o(31,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),o(32,"."),e()(),t(33,"table")(34,"thead")(35,"tr")(36,"th"),o(37,"Propriedade"),e(),t(38,"th"),o(39,"Descri\xE7\xE3o"),e(),t(40,"th"),o(41,"Valor Padr\xE3o"),e()()(),t(42,"tbody")(43,"tr")(44,"td")(45,"strong"),o(46,"Default Values"),e()(),r(47,"td")(48,"td"),e(),t(49,"tr")(50,"td")(51,"code"),o(52,"--border-radius"),e(),o(53," \xA0"),e(),t(54,"td"),o(55,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),t(56,"td")(57,"code"),o(58,"var(--border-radius-md)"),e()()(),t(59,"tr")(60,"td")(61,"code"),o(62,"--color"),e()(),t(63,"td"),o(64,"Cor principal da tooltip"),e(),t(65,"td")(66,"code"),o(67,"var(--color-neutral-dark-80)"),e()()(),t(68,"tr")(69,"td")(70,"code"),o(71,"--font-family"),e()(),t(72,"td"),o(73,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(74,"td")(75,"code"),o(76,"var(--font-family-theme)"),e()()(),t(77,"tr")(78,"td")(79,"code"),o(80,"--text-color"),e()(),t(81,"td"),o(82,"Cor do texto"),e(),t(83,"td")(84,"code"),o(85,"var(--color-neutral-light-00)"),e()()()()()(),t(86,"div",9)(87,"h4",10),o(88,"Seletor"),e(),t(89,"pre",11),o(90,`<[p-tooltip]
    p-append-in-body="boolean"
    p-tooltip="string"
    p-tooltip-position="string" >
</[p-tooltip]>
`),e()(),t(91,"h4",12),o(92,"Propriedades"),e(),t(93,"table",13)(94,"tr",14)(95,"th",15),o(96,"Nome"),e(),t(97,"th",15),o(98,"Tipo"),e(),t(99,"th",15),o(100,"Padr\xE3o"),e(),t(101,"th",15),o(102,"Descri\xE7\xE3o"),e()(),t(103,"tr",16)(104,"td",17)(105,"div",18)(106,"span",19),o(107," p-append-in-body"),r(108,"br"),e()()(),t(109,"td",20)(110,"code",21),o(111,"boolean"),e()(),t(112,"td",22)(113,"p")(114,"code"),o(115,"false"),e()()(),t(116,"td",23)(117,"em")(118,"strong"),o(119,"(opcional)"),e()(),t(120,"p"),o(121,`Define que o po-tooltip ser\xE1 incluido no body e n\xE3o dentro do elemento ao qual o tooltip foi especificado.
Op\xE7\xE3o necess\xE1ria para o caso de uso de tooltip em um elemento SVG.`),e()()(),t(122,"tr",16)(123,"td",17)(124,"div",18)(125,"span",19),o(126," p-tooltip"),r(127,"br"),e()()(),t(128,"td",20)(129,"code",24),o(130,"string"),e()(),t(131,"td",22),o(132,"-"),e(),t(133,"td",23)(134,"p"),o(135,"Habilita e atribui um texto ao po-tooltip."),e(),t(136,"p")(137,"strong"),o(138,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),e()()()(),t(139,"tr",16)(140,"td",17)(141,"div",18)(142,"span",19),o(143," p-tooltip-position"),r(144,"br"),e()()(),t(145,"td",20)(146,"code",24),o(147,"string"),e()(),t(148,"td",22)(149,"p"),o(150,"bottom"),e()(),t(151,"td",23)(152,"em")(153,"strong"),o(154,"(opcional)"),e()(),t(155,"p"),o(156,`Define a posi\xE7\xE3o que o po-tooltip abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "bottom" (abaixo), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),e(),t(157,"p"),o(158,"Posi\xE7\xF5es v\xE1lidas:"),e(),t(159,"ul")(160,"li")(161,"code"),o(162,"right"),e(),o(163,": Posiciona o po-tooltip no lado direito do componente alvo."),e(),t(164,"li")(165,"code"),o(166,"right-bottom"),e(),o(167,": Posiciona o po-tooltip no lado direito inferior do componente alvo."),e(),t(168,"li")(169,"code"),o(170,"right-top"),e(),o(171,": Posiciona o po-tooltip no lado direito superior do componente alvo."),e(),t(172,"li")(173,"code"),o(174,"bottom"),e(),o(175,": Posiciona o po-tooltip abaixo do componente alvo."),e(),t(176,"li")(177,"code"),o(178,"bottom-left"),e(),o(179,": Posiciona o po-tooltip abaixo e \xE0 esquerda do componente alvo."),e(),t(180,"li")(181,"code"),o(182,"bottom-right"),e(),o(183,": Posiciona o po-tooltip abaixo e \xE0 direita do componente alvo."),e(),t(184,"li")(185,"code"),o(186,"left"),e(),o(187,": Posiciona o po-tooltip no lado esquerdo do componente alvo."),e(),t(188,"li")(189,"code"),o(190,"left-top"),e(),o(191,": Posiciona o po-tooltip no lado esquerdo superior do componente alvo."),e(),t(192,"li")(193,"code"),o(194,"left-bottom"),e(),o(195,": Posiciona o po-tooltip no lado esquerdo inferior do componente alvo."),e(),t(196,"li")(197,"code"),o(198,"top"),e(),o(199,": Posiciona o po-tooltip acima do componente alvo."),e(),t(200,"li")(201,"code"),o(202,"top-right"),e(),o(203,": Posiciona o po-tooltip acima e \xE0 direita do componente alvo."),e(),t(204,"li")(205,"code"),o(206,"top-left"),e(),o(207,": Posiciona o po-tooltip acima e \xE0 esquerda do componente alvo."),e()()()()()())},dependencies:[E],encapsulation:2})}return n})();var me=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||n)(D(G),D(Q))};static \u0275cmp=c({type:n,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Tooltip",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,i){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),r(3,"sample-po-tooltip-doc"),e(),t(4,"po-tab",3),r(5,"sample-po-tooltip-basic-view")(6,"sample-po-tooltip-labs-view")(7,"sample-po-tooltip-new-user-view"),e()()()),a&2&&(d("p-actions",i.actions),p(2),d("p-active",i.activeTab.includes("doc")),p(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[$,v,T,ne,le,re,se],encapsulation:2})}return n})();var Pe=[{path:"",component:me}],de=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=V({type:n});static \u0275inj=B({imports:[R.forChild(Pe),R]})}return n})();var Je=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=V({type:n});static \u0275inj=B({imports:[te,de]})}return n})();export{Je as DocPoTooltipModule};
