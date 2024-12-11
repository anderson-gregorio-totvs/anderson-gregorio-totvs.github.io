import{$ as k,$a as L,Ca as W,Cd as $,Da as I,Ea as R,F as g,Fc as N,G as E,Ga as e,Ia as w,Ka as h,La as S,Lb as V,Ma as b,Mb as H,Nb as j,Ob as F,Od as ee,Pa as M,Pb as G,T as p,U as T,Wb as Q,Xd as v,Yb as U,Yd as C,Zb as A,_ as u,ad as J,ha as c,ka as P,md as X,na as n,nd as _,oa as t,oc as B,pa as o,re as y,sd as K,se as te,ta as O,td as Y,ua as x,y as D,zc as Z}from"./chunk-V5DQALWN.js";var ne=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-login-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","login","p-label","PO Login"]],template:function(l,i){l&1&&o(0,"po-login",0)},dependencies:[_],encapsulation:2})}return a})();var ue=a=>({"docs-sample-code-tabs":a}),oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-login-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Login Basic"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-login-basic/sample-po-login-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-login name="login" p-label="PO Login"> </po-login>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-login-basic/sample-po-login-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
    selector: 'sample-po-login-basic',
    templateUrl: './sample-po-login-basic.component.html',
    standalone: false
})
export class SamplePoLoginBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-login-basic"),t(),o(23,"hr")),l&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),w(" ",i.sampleCodeButtonLabel,""),p(),c("ngClass",M(4,ue,i.hideSampleCodeTabs)))},dependencies:[L,y,v,C,ne],encapsulation:2})}return a})();var ae=(()=>{class a{errorPattern;event;help;label;login;maxlength;minlength;pattern;placeholder;properties;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.errorPattern="",this.event="",this.label=void 0,this.login="",this.help=void 0,this.maxlength=void 0,this.minlength=void 0,this.pattern="",this.placeholder="",this.properties=[]}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-login-labs"]],standalone:!1,decls:22,vars:27,consts:[["f","ngForm"],["name","login",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","ngModel","p-clean","p-disabled","p-error-pattern","p-help","p-label","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-4",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-4",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-4",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-help","Ex.: Required field","p-label","Error pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min length",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max length",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let d=O();n(0,"po-login",1),b("ngModelChange",function(r){return g(d),S(i.login,r)||(i.login=r),E(r)}),x("p-blur",function(){return g(d),E(i.changeEvent("p-blur"))})("p-change",function(){return g(d),E(i.changeEvent("p-change"))})("p-change-model",function(){return g(d),E(i.changeEvent("p-change-model"))})("p-enter",function(){return g(d),E(i.changeEvent("p-enter"))}),t(),o(1,"hr"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"hr"),n(6,"form",null,0)(8,"div",2)(9,"po-input",5),b("ngModelChange",function(r){return g(d),S(i.label,r)||(i.label=r),E(r)}),t(),n(10,"po-input",6),b("ngModelChange",function(r){return g(d),S(i.help,r)||(i.help=r),E(r)}),t(),n(11,"po-input",7),b("ngModelChange",function(r){return g(d),S(i.placeholder,r)||(i.placeholder=r),E(r)}),t()(),n(12,"div",2)(13,"po-input",8),b("ngModelChange",function(r){return g(d),S(i.pattern,r)||(i.pattern=r),E(r)}),t(),n(14,"po-input",9),b("ngModelChange",function(r){return g(d),S(i.errorPattern,r)||(i.errorPattern=r),E(r)}),t()(),n(15,"div",2)(16,"po-number",10),b("ngModelChange",function(r){return g(d),S(i.minlength,r)||(i.minlength=r),E(r)}),t(),n(17,"po-number",11),b("ngModelChange",function(r){return g(d),S(i.maxlength,r)||(i.maxlength=r),E(r)}),t()(),n(18,"div",2)(19,"po-checkbox-group",12),b("ngModelChange",function(r){return g(d),S(i.properties,r)||(i.properties=r),E(r)}),t()(),n(20,"div",2)(21,"po-button",13),x("p-click",function(){return g(d),E(i.restore())}),t()()()}l&2&&(h("ngModel",i.login),c("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-label",i.label)("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired")),p(3),c("p-value",i.login),p(),c("p-value",i.event),p(5),h("ngModel",i.label),p(),h("ngModel",i.help),p(),h("ngModel",i.placeholder),p(2),h("ngModel",i.pattern),p(),h("ngModel",i.errorPattern),p(2),h("ngModel",i.minlength),p(),h("ngModel",i.maxlength),p(2),h("ngModel",i.properties),c("p-options",i.propertiesOptions))},dependencies:[G,V,H,F,j,B,Z,X,_,K,$],encapsulation:2})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-login-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Login Labs"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-login-labs/sample-po-login-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-login
  name="login"
  [(ngModel)]="login"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-label]="label"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-pattern]="pattern"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
>
</po-login>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="login"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-4" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-md-4" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

    <po-input class="po-md-4" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="pattern"
      [(ngModel)]="pattern"
      p-clean
      p-help="Ex.: '[a-zA]{5}[Z0-9]{3}'"
      p-label="Pattern (Regex)"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="errorPattern"
      [(ngModel)]="errorPattern"
      p-clean
      p-help="Ex.: Required field"
      p-label="Error pattern"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min length"> </po-number>

    <po-number class="po-md-6" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max length"> </po-number>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-login-labs/sample-po-login-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
    selector: 'sample-po-login-labs',
    templateUrl: './sample-po-login-labs.component.html',
    standalone: false
})
export class SamplePoLoginLabsComponent implements OnInit {
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  login: string;
  maxlength: number;
  minlength: number;
  pattern: string;
  placeholder: string;
  properties: Array<string>;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.errorPattern = '';
    this.event = '';

    this.label = undefined;
    this.login = '';

    this.help = undefined;

    this.maxlength = undefined;
    this.minlength = undefined;

    this.pattern = '';
    this.placeholder = '';
    this.properties = [];
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-login-labs"),t(),o(23,"hr")),l&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),w(" ",i.sampleCodeButtonLabel,""),p(),c("ngClass",M(4,Se,i.hideSampleCodeTabs)))},dependencies:[L,y,v,C,ae],encapsulation:2})}return a})();var re=(()=>{class a{poNotification;poModal;userLogin;userPassword;primaryAction={label:"Confirm",action:()=>{this.confirmAction()}};constructor(m){this.poNotification=m}openModal(){this.poModal.open()}cleanForm(){this.userLogin="",this.userPassword=""}confirmAction(){this.userLogin&&this.userPassword&&(this.poNotification.success(`Discount successfully applied to user ${this.userLogin}!`),this.poModal.close(),this.cleanForm())}static \u0275fac=function(l){return new(l||a)(T(J))};static \u0275cmp=u({type:a,selectors:[["sample-po-login-confirm"]],viewQuery:function(l,i){if(l&1&&W(N,7),l&2){let d;I(d=R())&&(i.poModal=d.first)}},standalone:!1,decls:7,vars:3,consts:[[1,"po-text-center"],[1,"po-font-subtitle"],["p-label","Confirm Identity",3,"p-click"],["p-hide-close","true","p-size","auto","p-title","Confirm your identity",3,"p-primary-action"],["name","userLogin","p-clean","","p-label","User","p-maxlength","40","p-placeholder","domain\\user","p-required","",3,"ngModelChange","ngModel"],["name","userPassword","p-clean","","p-label","Password","p-placeholder","Enter your password","p-required","",3,"ngModelChange","ngModel"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"div",1),e(2," To gain a 25% discount on your purchases, confirm your identity with your username and password! "),t(),n(3,"po-button",2),x("p-click",function(){return i.openModal()}),t()(),n(4,"po-modal",3)(5,"po-login",4),b("ngModelChange",function(s){return S(i.userLogin,s)||(i.userLogin=s),s}),t(),n(6,"po-password",5),b("ngModelChange",function(s){return S(i.userPassword,s)||(i.userPassword=s),s}),t()()),l&2&&(p(4),c("p-primary-action",i.primaryAction),p(),h("ngModel",i.userLogin),p(),h("ngModel",i.userPassword))},dependencies:[V,F,B,_,Y,N],encapsulation:2})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-login-confirm-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Login - Confirm Identity"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-login-confirm/sample-po-login-confirm.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-text-center">
  <div class="po-font-subtitle">
    To gain a 25% discount on your purchases, confirm your identity with your username and password!
  </div>

  <po-button p-label="Confirm Identity" (p-click)="openModal()"> </po-button>
</div>

<po-modal p-hide-close="true" p-size="auto" p-title="Confirm your identity" [p-primary-action]="primaryAction">
  <po-login
    name="userLogin"
    [(ngModel)]="userLogin"
    p-clean
    p-label="User"
    p-maxlength="40"
    p-placeholder="domain\\user"
    p-required
  >
  </po-login>

  <po-password
    name="userPassword"
    [(ngModel)]="userPassword"
    p-clean
    p-label="Password"
    p-placeholder="Enter your password"
    p-required
  >
  </po-password>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-login-confirm/sample-po-login-confirm.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
    selector: 'sample-po-login-confirm',
    templateUrl: './sample-po-login-confirm.component.html',
    standalone: false
})
export class SamplePoLoginConfirmComponent {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  userLogin: string;
  userPassword: string;

  primaryAction: PoModalAction = {
    label: 'Confirm',
    action: () => {
      this.confirmAction();
    }
  };

  constructor(private poNotification: PoNotificationService) {}

  openModal() {
    this.poModal.open();
  }

  private cleanForm() {
    this.userLogin = '';
    this.userPassword = '';
  }

  private confirmAction() {
    if (this.userLogin && this.userPassword) {
      this.poNotification.success(\`Discount successfully applied to user \${this.userLogin}!\`);

      this.poModal.close();
      this.cleanForm();
    }
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-login-confirm"),t(),o(23,"hr")),l&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),w(" ",i.sampleCodeButtonLabel,""),p(),c("ngClass",M(4,fe,i.hideSampleCodeTabs)))},dependencies:[L,y,v,C,re],encapsulation:2})}return a})();var me=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-login-doc"]],standalone:!1,decls:906,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoLoginComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4",6),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",7),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",8),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),o(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),n(209,"p"),o(210,"br"),e(211," O "),n(212,"code"),e(213,"po-login"),t(),e(214," \xE9 um input espec\xEDfico para login. J\xE1 possui tipo, estilo e \xEDcone predefinidos."),t()(),n(215,"div",9)(216,"h4",10),e(217,"Seletor"),t(),n(218,"pre",11),e(219,`<po-login
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-disabled="boolean"
    p-emit-all-changes="boolean"
    (p-enter)="EventEmitter"
    p-error-async-properties="ErrorAsyncProperties"
    p-error-pattern="string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    p-label="string"
    p-mask="string"
    p-mask-format-model="boolean"
    p-maxlength="number"
    p-minlength="number"
    name="string"
    p-no-autocomplete="boolean"
    p-optional="boolean"
    p-pattern="string"
    p-placeholder="string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-upper-case="boolean" >
</po-login>
`),t()(),n(220,"h4",12),e(221,"Propriedades"),t(),n(222,"table",13)(223,"tr",14)(224,"th",15),e(225,"Nome"),t(),n(226,"th",15),e(227,"Tipo"),t(),n(228,"th",15),e(229,"Padr\xE3o"),t(),n(230,"th",15),e(231,"Descri\xE7\xE3o"),t()(),n(232,"tr",16)(233,"td",17)(234,"div",18)(235,"span",19),e(236," p-auto-focus"),o(237,"br"),t()()(),n(238,"td",20)(239,"code",21),e(240,"boolean"),t()(),n(241,"td",22)(242,"p")(243,"code"),e(244,"false"),t()()(),n(245,"td",23)(246,"em")(247,"strong"),e(248,"(opcional)"),t()(),n(249,"p"),e(250,"Aplica foco no elemento ao ser iniciado."),t(),n(251,"blockquote")(252,"p"),e(253,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(254,"tr",16)(255,"td",17)(256,"div",24)(257,"span",25),e(258," (p-blur)"),o(259,"br"),t()()(),n(260,"td",20)(261,"code",26),e(262,"EventEmitter"),t()(),n(263,"td",22),e(264,"-"),t(),n(265,"td",23)(266,"em")(267,"strong"),e(268,"(opcional)"),t()(),n(269,"p"),e(270,"Evento disparado ao sair do campo."),t()()(),n(271,"tr",16)(272,"td",17)(273,"div",24)(274,"span",25),e(275," (p-change)"),o(276,"br"),t()()(),n(277,"td",20)(278,"code",26),e(279,"EventEmitter"),t()(),n(280,"td",22),e(281,"-"),t(),n(282,"td",23)(283,"em")(284,"strong"),e(285,"(opcional)"),t()(),n(286,"p"),e(287,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(288,"tr",16)(289,"td",17)(290,"div",24)(291,"span",25),e(292," (p-change-model)"),o(293,"br"),t()()(),n(294,"td",20)(295,"code",26),e(296,"EventEmitter"),t()(),n(297,"td",22),e(298,"-"),t(),n(299,"td",23)(300,"em")(301,"strong"),e(302,"(opcional)"),t()(),n(303,"p"),e(304,"Evento disparado ao alterar valor do model."),t()()(),n(305,"tr",16)(306,"td",17)(307,"div",18)(308,"span",19),e(309,"p-clean"),o(310,"br"),t()()(),n(311,"td",20)(312,"code",21),e(313,"boolean"),t()(),n(314,"td",22),e(315,"-"),t(),n(316,"td",23)(317,"em")(318,"strong"),e(319,"(opcional)"),t()(),n(320,"p"),e(321,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(322,"tr",16)(323,"td",17)(324,"div",18)(325,"span",19),e(326,"p-disabled"),o(327,"br"),t()()(),n(328,"td",20)(329,"code",21),e(330,"boolean"),t()(),n(331,"td",22)(332,"p")(333,"code"),e(334,"false"),t()()(),n(335,"td",23)(336,"em")(337,"strong"),e(338,"(opcional)"),t()(),n(339,"p"),e(340,"Se verdadeiro, desabilita o campo."),t()()(),n(341,"tr",16)(342,"td",17)(343,"div",18)(344,"span",19),e(345," p-emit-all-changes"),o(346,"br"),t()()(),n(347,"td",20)(348,"code",21),e(349,"boolean"),t()(),n(350,"td",22)(351,"p")(352,"code"),e(353,"false"),t()()(),n(354,"td",23)(355,"em")(356,"strong"),e(357,"(opcional)"),t()(),n(358,"p"),e(359,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(360,"tr",16)(361,"td",17)(362,"div",24)(363,"span",25),e(364," (p-enter)"),o(365,"br"),t()()(),n(366,"td",20)(367,"code",26),e(368,"EventEmitter"),t()(),n(369,"td",22),e(370,"-"),t(),n(371,"td",23)(372,"em")(373,"strong"),e(374,"(opcional)"),t()(),n(375,"p"),e(376,"Evento disparado ao entrar do campo."),t()()(),n(377,"tr",16)(378,"td",17)(379,"div",18)(380,"span",19),e(381," p-error-async-properties"),o(382,"br"),t()()(),n(383,"td",20)(384,"code",27),e(385,"ErrorAsyncProperties"),t()(),n(386,"td",22),e(387,"-"),t(),n(388,"td",23)(389,"em")(390,"strong"),e(391,"(opcional)"),t()(),n(392,"p"),e(393,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(394,"code"),e(395,"Reactive Forms"),t(),e(396,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(397,"code"),e(398,"asyncValidators"),t(),e(399,"."),t()()(),n(400,"tr",16)(401,"td",17)(402,"div",18)(403,"span",19),e(404," p-error-pattern"),o(405,"br"),t()()(),n(406,"td",20)(407,"code",28),e(408,"string"),t()(),n(409,"td",22),e(410,"-"),t(),n(411,"td",23)(412,"em")(413,"strong"),e(414,"(opcional)"),t()(),n(415,"p"),e(416,"Mensagem que ser\xE1 apresentada quando o "),n(417,"code"),e(418,"pattern"),t(),e(419," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(420,"blockquote")(421,"p"),e(422,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(423,"code"),e(424,"p-required-field-error-message"),t(),e(425," em conjunto."),t()()()(),n(426,"tr",16)(427,"td",17)(428,"div",18)(429,"span",19),e(430," p-help"),o(431,"br"),t()()(),n(432,"td",20)(433,"code",28),e(434,"string"),t()(),n(435,"td",22),e(436,"-"),t(),n(437,"td",23)(438,"em")(439,"strong"),e(440,"(opcional)"),t()(),n(441,"p"),e(442,"Texto de apoio do campo."),t()()(),n(443,"tr",16)(444,"td",17)(445,"div",18)(446,"span",19),e(447," p-icon"),o(448,"br"),t()()(),n(449,"td",20)(450,"code",28),e(451,"string "),t(),n(452,"code",29),e(453," TemplateRef<void>"),t()(),n(454,"td",22),e(455,"-"),t(),n(456,"td",23)(457,"em")(458,"strong"),e(459,"(opcional)"),t()(),n(460,"p"),e(461,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(462,"p"),e(463,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(464,"a",30),e(465,"Biblioteca de \xEDcones"),t(),e(466,". conforme exemplo abaixo:"),t(),n(467,"pre")(468,"code"),e(469,'<po-input p-icon="ph ph-user" p-label="PO input"></po-input>'),t()(),n(470,"p"),e(471,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(472,"em"),e(473,"Font Awesome"),t(),e(474,", da seguinte forma:"),t(),n(475,"pre")(476,"code"),e(477,'<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>'),t()(),n(478,"p"),e(479,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(480,"code"),e(481,"TemplateRef"),t(),e(482,", conforme exemplo abaixo:"),t(),n(483,"pre")(484,"code"),e(485,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>`),t()(),n(486,"blockquote")(487,"p"),e(488,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(489,"code"),e(490,"font-size: inherit"),t(),e(491," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(492,"tr",16)(493,"td",17)(494,"div",18)(495,"span",19),e(496," p-label"),o(497,"br"),t()()(),n(498,"td",20)(499,"code",28),e(500,"string"),t()(),n(501,"td",22),e(502,"-"),t(),n(503,"td",23)(504,"em")(505,"strong"),e(506,"(opcional)"),t()(),n(507,"p"),e(508,"R\xF3tulo do campo."),t()()(),n(509,"tr",16)(510,"td",17)(511,"div",18)(512,"span",19),e(513,"p-mask"),o(514,"br"),t()()(),n(515,"td",20)(516,"code",28),e(517,"string"),t()(),n(518,"td",22),e(519,"-"),t(),n(520,"td",23)(521,"em")(522,"strong"),e(523,"(opcional)"),t()(),n(524,"p"),e(525,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(526,"tr",16)(527,"td",17)(528,"div",18)(529,"span",19),e(530,"p-mask-format-model"),o(531,"br"),t()()(),n(532,"td",20)(533,"code",21),e(534,"boolean"),t()(),n(535,"td",22)(536,"p")(537,"code"),e(538,"false"),t()()(),n(539,"td",23)(540,"em")(541,"strong"),e(542,"(opcional)"),t()(),n(543,"p"),e(544,"Indica se o "),n(545,"code"),e(546,"model"),t(),e(547," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(548,"tr",16)(549,"td",17)(550,"div",18)(551,"span",19),e(552," p-maxlength"),o(553,"br"),t()()(),n(554,"td",20)(555,"code",31),e(556,"number"),t()(),n(557,"td",22),e(558,"-"),t(),n(559,"td",23)(560,"em")(561,"strong"),e(562,"(opcional)"),t()(),n(563,"p"),e(564,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(565,"tr",16)(566,"td",17)(567,"div",18)(568,"span",19),e(569," p-minlength"),o(570,"br"),t()()(),n(571,"td",20)(572,"code",31),e(573,"number"),t()(),n(574,"td",22),e(575,"-"),t(),n(576,"td",23)(577,"em")(578,"strong"),e(579,"(opcional)"),t()(),n(580,"p"),e(581,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(582,"tr",16)(583,"td",17)(584,"div",18)(585,"span",19),e(586," name"),o(587,"br"),t()()(),n(588,"td",20)(589,"code",28),e(590,"string"),t()(),n(591,"td",22),e(592,"-"),t(),n(593,"td",23)(594,"p"),e(595,"Nome e identificador do campo."),t()()(),n(596,"tr",16)(597,"td",17)(598,"div",18)(599,"span",19),e(600," p-no-autocomplete"),o(601,"br"),t()()(),n(602,"td",20)(603,"code",21),e(604,"boolean"),t()(),n(605,"td",22)(606,"p")(607,"code"),e(608,"false"),t()()(),n(609,"td",23)(610,"em")(611,"strong"),e(612,"(opcional)"),t()(),n(613,"p"),e(614,"Define a propriedade nativa "),n(615,"code"),e(616,"autocomplete"),t(),e(617," do campo como "),n(618,"code"),e(619,"off"),t(),e(620,"."),t(),n(621,"blockquote")(622,"p"),e(623,"No componente "),n(624,"code"),e(625,"po-password"),t(),e(626," ser\xE1 definido como "),n(627,"code"),e(628,"new-password"),t(),e(629,"."),t()(),n(630,"p"),e(631,"Nos componentes "),n(632,"code"),e(633,"po-password"),t(),e(634," e "),n(635,"code"),e(636,"po-login"),t(),e(637," o valor padr\xE3o ser\xE1 "),n(638,"code"),e(639,"true"),t(),e(640,"."),t()()(),n(641,"tr",16)(642,"td",17)(643,"div",18)(644,"span",19),e(645," p-optional"),o(646,"br"),t()()(),n(647,"td",20)(648,"code",21),e(649,"boolean"),t()(),n(650,"td",22)(651,"p")(652,"code"),e(653,"false"),t()()(),n(654,"td",23)(655,"em")(656,"strong"),e(657,"(opcional)"),t()(),n(658,"p"),e(659,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(660,"blockquote")(661,"p"),e(662,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(663,"ul")(664,"li"),e(665,"O campo conter "),n(666,"code"),e(667,"p-required"),t(),e(668,";"),t(),n(669,"li"),e(670,"N\xE3o possuir "),n(671,"code"),e(672,"p-help"),t(),e(673," e/ou "),n(674,"code"),e(675,"p-label"),t(),e(676,"."),t()()()(),n(677,"tr",16)(678,"td",17)(679,"div",18)(680,"span",19),e(681,"p-pattern"),o(682,"br"),t()()(),n(683,"td",20)(684,"code",28),e(685,"string"),t()(),n(686,"td",22),e(687,"-"),t(),n(688,"td",23)(689,"em")(690,"strong"),e(691,"(opcional)"),t()(),n(692,"p"),e(693,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(694,"code"),e(695,"(p-mask)"),t(),e(696,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(697,"tr",16)(698,"td",17)(699,"div",18)(700,"span",19),e(701," p-placeholder"),o(702,"br"),t()()(),n(703,"td",20)(704,"code",28),e(705,"string"),t()(),n(706,"td",22)(707,"p"),e(708,"''"),t()(),n(709,"td",23)(710,"em")(711,"strong"),e(712,"(opcional)"),t()(),n(713,"p"),e(714,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(715,"tr",16)(716,"td",17)(717,"div",18)(718,"span",19),e(719,"p-readonly"),o(720,"br"),t()()(),n(721,"td",20)(722,"code",21),e(723,"boolean"),t()(),n(724,"td",22),e(725,"-"),t(),n(726,"td",23)(727,"em")(728,"strong"),e(729,"(opcional)"),t()(),n(730,"p"),e(731,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(732,"tr",16)(733,"td",17)(734,"div",18)(735,"span",19),e(736,"p-required"),o(737,"br"),t()()(),n(738,"td",20)(739,"code",21),e(740,"boolean"),t()(),n(741,"td",22)(742,"p")(743,"code"),e(744,"false"),t()()(),n(745,"td",23)(746,"em")(747,"strong"),e(748,"(opcional)"),t()(),n(749,"p"),e(750,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(751,"blockquote")(752,"p"),e(753,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(754,"code"),e(755,"(p-disabled)"),t(),e(756,"."),t()()()(),n(757,"tr",16)(758,"td",17)(759,"div",18)(760,"span",19),e(761," p-required-field-error-message"),o(762,"br"),t()()(),n(763,"td",20)(764,"code",21),e(765,"boolean"),t()(),n(766,"td",22)(767,"p")(768,"code"),e(769,"false"),t()()(),n(770,"td",23)(771,"em")(772,"strong"),e(773,"(opcional)"),t()(),n(774,"p"),e(775,"Exibe a mensagem setada na propriedade "),n(776,"code"),e(777,"p-error-pattern"),t(),e(778," se o campo estiver vazio e for requerido."),t(),n(779,"blockquote")(780,"p"),e(781,"Necess\xE1rio que a propriedade "),n(782,"code"),e(783,"p-required"),t(),e(784," esteja habilitada."),t()()()(),n(785,"tr",16)(786,"td",17)(787,"div",18)(788,"span",19),e(789," p-show-required"),o(790,"br"),t()()(),n(791,"td",20)(792,"code",21),e(793,"boolean"),t()(),n(794,"td",22),e(795,"-"),t(),n(796,"td",23)(797,"p"),e(798,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(799,"blockquote")(800,"p"),e(801,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(802,"ul")(803,"li"),e(804,"N\xE3o possuir "),n(805,"code"),e(806,"p-help"),t(),e(807," e/ou "),n(808,"code"),e(809,"p-label"),t(),e(810,"."),t()()()(),n(811,"tr",16)(812,"td",17)(813,"div",18)(814,"span",19),e(815," p-upper-case"),o(816,"br"),t()()(),n(817,"td",20)(818,"code",21),e(819,"boolean"),t()(),n(820,"td",22),e(821,"-"),t(),n(822,"td",23)(823,"p"),e(824,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(825,"h3",12),e(826,"M\xE9todos"),t(),n(827,"table",32)(828,"tr",16)(829,"th",33)(830,"div",18)(831,"h4")(832,"span",19),e(833," focus "),t()()()()(),n(834,"tr",23)(835,"td",23)(836,"p"),e(837,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(838,"p"),e(839,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(840,"pre")(841,"code"),e(842,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}`),t()()()()(),o(843,"br"),n(844,"h3"),e(845,"Interfaces"),t(),n(846,"h4",34)(847,"code",5),e(848,"ErrorAsyncProperties"),t()(),n(849,"div",2)(850,"p"),e(851,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(852,"h4",12),e(853,"Propriedades"),t(),n(854,"table",13)(855,"tr",14)(856,"th",15),e(857,"Nome"),t(),n(858,"th",15),e(859,"Tipo"),t(),n(860,"th",15),e(861,"Descri\xE7\xE3o"),t()(),n(862,"tr",16)(863,"td",17)(864,"div",18)(865,"span",19),e(866," errorAsync"),o(867,"br"),t()()(),n(868,"td",20)(869,"code",35),e(870,"(value) => Observable<boolean>"),t()(),n(871,"td",23)(872,"p"),e(873,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(874,"code"),e(875,"change"),t(),e(876," ou "),n(877,"code"),e(878,"change-model"),t(),e(879,", dependendo do valor da propriedade "),n(880,"code"),e(881,"triggerMode"),t(),e(882,"."),t()()(),n(883,"tr",16)(884,"td",17)(885,"div",18)(886,"span",19),e(887," triggerMode"),o(888,"br"),t()()(),n(889,"td",20)(890,"code",36),e(891,"'change' "),t(),n(892,"code",37),e(893," 'changeModel'"),t()(),n(894,"td",23)(895,"em")(896,"strong"),e(897,"(opcional)"),t()(),n(898,"p"),e(899,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(900,"code"),e(901,"change"),t(),e(902," ou "),n(903,"code"),e(904,"change-model"),t(),e(905,"."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var de=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(T(Q),T(U))};static \u0275cmp=u({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Login",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),o(3,"sample-po-login-doc"),t(),n(4,"po-tab",3),o(5,"sample-po-login-basic-view")(6,"sample-po-login-labs-view")(7,"sample-po-login-confirm-view"),t()()()),l&2&&(c("p-actions",i.actions),p(2),c("p-active",i.activeTab.includes("doc")),p(2),c("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[ee,v,C,oe,le,pe,me],encapsulation:2})}return a})();var ye=[{path:"",component:de}],se=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=k({type:a});static \u0275inj=D({imports:[A.forChild(ye),A]})}return a})();var Ze=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=k({type:a});static \u0275inj=D({imports:[te,se]})}return a})();export{Ze as DocPoLoginModule};
