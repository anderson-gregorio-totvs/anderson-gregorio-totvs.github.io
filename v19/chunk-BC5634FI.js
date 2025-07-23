import{$ as D,$a as M,Cd as V,F as m,Fa as U,G as u,Ga as e,Ia as y,Jc as q,Ka as g,La as E,Lb as G,Ma as S,Mb as Y,Nb as J,Ob as Z,Od as ie,Pa as _,Pb as Q,T as p,U as w,Wb as K,Xd as P,Yb as X,Yd as f,Zb as R,_ as b,_b as $,a as j,bb as H,be as oe,de as ae,ea as z,ge as re,ha as h,ka as L,md as ne,na as n,oa as t,oc as ee,pa as o,pe as F,re as C,se as le,ta as O,ua as x,va as k,vc as B,y as A,zc as te}from"./chunk-V5DQALWN.js";var se=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-page-login-basic"]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&o(0,"po-page-login")},dependencies:[F],encapsulation:2})}return r})();var Pe=r=>({"docs-sample-code-tabs":r}),pe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-page-login-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Login Basic"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-login-basic/sample-po-page-login-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-page-login></po-page-login>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-login-basic/sample-po-page-login-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
    selector: 'sample-po-page-login-basic',
    templateUrl: './sample-po-page-login-basic.component.html',
    standalone: false
})
export class SamplePoPageLoginBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-page-login-basic"),t(),o(23,"hr")),l&2&&(p(5),L("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),h("ngClass",_(4,Pe,i.hideSampleCodeTabs)))},dependencies:[M,C,P,f,se],encapsulation:2})}return r})();var de=(()=>{class r{poDialog;background;contactEmail;customField;customFieldOption;customFieldOptions;customLiterals;environment;exceededAttempts;secondaryLogo;literals;login;loginPattern;loginError;loginErrors;logo;passwordError;passwordErrors;passwordPattern;productName;properties;recovery;registerUrl;support;propertiesOptions=[{value:"hideRememberUser",label:"Hide remember user"},{value:"loading",label:"Loading"}];constructor(s){this.poDialog=s}ngOnInit(){this.restore()}addCustomFieldOption(){this.customFieldOptions.push({label:this.customFieldOption.label,value:this.customFieldOption.value}),this.customField.options=this.customFieldOptions,this.onChangeCustomProperties(),this.customFieldOption={}}addLoginError(){this.loginErrors.push(this.loginError),this.loginError=""}addPasswordError(){this.passwordErrors.push(this.passwordError),this.passwordError=""}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}loginSubmit(s){this.exceededAttempts<=0&&this.poDialog.alert({title:"Authenticate",message:JSON.stringify(s)})}onChangeCustomProperties(){this.customField=Object.assign({},this.customField)}restore(){this.properties=[],this.background="",this.contactEmail="",this.customField={property:void 0},this.customFieldOption={label:void 0,value:void 0},this.customFieldOptions=[],this.customLiterals=void 0,this.environment="",this.exceededAttempts=0,this.secondaryLogo=void 0,this.literals="",this.login="",this.loginPattern="",this.loginError="",this.loginErrors=[],this.logo=void 0,this.passwordError="",this.passwordErrors=[],this.passwordPattern="",this.passwordError="",this.passwordErrors=[],this.productName="",this.recovery="",this.registerUrl="",this.support=""}static \u0275fac=function(l){return new(l||r)(w(q))};static \u0275cmp=b({type:r,selectors:[["sample-po-page-login-labs"]],standalone:!1,decls:59,vars:47,consts:[["f","ngForm"],["formCustomFieldOptions","ngForm"],[3,"p-login-submit","p-background","p-contact-email","p-custom-field","p-environment","p-exceeded-attempts-warning","p-hide-remember-user","p-loading","p-literals","p-login","p-login-errors","p-login-pattern","p-logo","p-password-errors","p-password-pattern","p-product-name","p-recovery","p-register-url","p-secondary-logo","p-support"],[1,"po-row"],["name","literals","p-help",'Ex.: {"submitLabel":"Access System", "highlightInfo": "Awesome, PO is beautiful!!!"}',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","productName","p-clean","","p-help","A custom name that succeeds the title","p-label","Product Name",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","loginPattern","p-clean","","p-help","Ex.: ^[a-zA-Z]*$ (Only letters)","p-label","Login Pattern",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","login","p-clean","","p-help","Ex.: podev","p-label","Login",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","exceededAttempts","p-clean","","p-help","Ex.: 5","p-label","Exceeded Attempts Warning",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","passwordPattern","p-clean","","p-help","Ex.: ^(\\d*)$ (Only numbers)","p-label","Password Pattern",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","contactMail","p-clean","","p-label","Contact Email",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","environment","p-clean","","p-label","Environment",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-label","Logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-label","Secondary logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","background","p-clean","","p-label","Background",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","support","p-clean","","p-label","Support",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","recovery","p-clean","","p-label","Recovery",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","registerUrl","p-clean","","p-label","Register URL",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Login Errors"],["name","loginError","p-clean","","p-label","Login Error",1,"po-md-8",3,"ngModelChange","ngModel"],["p-label","Add Login Error",1,"po-md-4","po-mt-4",3,"p-click"],["p-label","Password Errors"],["name","passwordError","p-clean","","p-label","Password Error",1,"po-lg-8",3,"ngModelChange","ngModel"],["p-label","Add Password Error",1,"po-md-4","po-mt-4",3,"p-click"],["p-label","Custom Field"],["name","customFieldProperty","p-clean","","p-help","Ex.: domain","p-label","Custom Field Property",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldValue","p-clean","","p-help","Ex.: JV01","p-label","Custom Field Value",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","customFieldPlaceholder","p-clean","","p-help","Ex.: Enter your domain","p-label","Custom Field Placeholder",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldPattern","p-clean","","p-help","Ex.: [a-z]","p-label","Custom Field Pattern",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldErrorPattern","p-clean","","p-help","Ex.: Value doesn`t match expected","p-label","Custom Field Error Pattern",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldComboUrl","p-clean","","p-help","Ex.: https://po-sample-api.onrender.com/v1/heroes","p-label","Custom Field URL",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldComboValue","p-clean","","p-help","Property to specify the return field. Ex.: value, nickname, label","p-label","Custom Field Field Value",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldOptionLabel","p-clean","","p-label","Custom Field Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","customFieldOptionValue","p-clean","","p-label","Custom Field Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Custom Field Option",1,"po-md-6","po-lg-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let d=O();n(0,"po-page-login",2),x("p-login-submit",function(a){return m(d),u(i.loginSubmit(a))}),t(),o(1,"hr"),n(2,"form",null,0)(4,"div",3)(5,"po-input",4),S("ngModelChange",function(a){return m(d),E(i.literals,a)||(i.literals=a),u(a)}),x("p-change",function(){return m(d),u(i.changeLiterals())}),t(),n(6,"po-input",5),S("ngModelChange",function(a){return m(d),E(i.productName,a)||(i.productName=a),u(a)}),t()(),n(7,"div",3)(8,"po-input",6),S("ngModelChange",function(a){return m(d),E(i.loginPattern,a)||(i.loginPattern=a),u(a)}),t(),n(9,"po-input",7),S("ngModelChange",function(a){return m(d),E(i.login,a)||(i.login=a),u(a)}),t()(),n(10,"div",3)(11,"po-input",8),S("ngModelChange",function(a){return m(d),E(i.exceededAttempts,a)||(i.exceededAttempts=a),u(a)}),t(),n(12,"po-input",9),S("ngModelChange",function(a){return m(d),E(i.passwordPattern,a)||(i.passwordPattern=a),u(a)}),t()(),n(13,"div",3)(14,"po-input",10),S("ngModelChange",function(a){return m(d),E(i.contactEmail,a)||(i.contactEmail=a),u(a)}),t(),n(15,"po-input",11),S("ngModelChange",function(a){return m(d),E(i.environment,a)||(i.environment=a),u(a)}),t()(),n(16,"div",3)(17,"po-input",12),S("ngModelChange",function(a){return m(d),E(i.logo,a)||(i.logo=a),u(a)}),t(),n(18,"po-input",13),S("ngModelChange",function(a){return m(d),E(i.secondaryLogo,a)||(i.secondaryLogo=a),u(a)}),t()(),n(19,"div",3)(20,"po-input",14),S("ngModelChange",function(a){return m(d),E(i.background,a)||(i.background=a),u(a)}),t(),n(21,"po-input",15),S("ngModelChange",function(a){return m(d),E(i.support,a)||(i.support=a),u(a)}),t()(),n(22,"div",3)(23,"po-input",16),S("ngModelChange",function(a){return m(d),E(i.recovery,a)||(i.recovery=a),u(a)}),t(),n(24,"po-input",17),S("ngModelChange",function(a){return m(d),E(i.registerUrl,a)||(i.registerUrl=a),u(a)}),t()(),n(25,"div",3)(26,"po-checkbox-group",18),S("ngModelChange",function(a){return m(d),E(i.properties,a)||(i.properties=a),u(a)}),t()(),o(27,"po-divider",19),n(28,"div",3)(29,"po-input",20),S("ngModelChange",function(a){return m(d),E(i.loginError,a)||(i.loginError=a),u(a)}),t(),n(30,"po-button",21),x("p-click",function(){return m(d),u(i.addLoginError())}),t()(),o(31,"po-divider",22),n(32,"div",3)(33,"po-input",23),S("ngModelChange",function(a){return m(d),E(i.passwordError,a)||(i.passwordError=a),u(a)}),t(),n(34,"po-button",24),x("p-click",function(){return m(d),u(i.addPasswordError())}),t()(),o(35,"po-divider",25),n(36,"div",3)(37,"po-input",26),S("ngModelChange",function(a){return m(d),E(i.customField.property,a)||(i.customField.property=a),u(a)}),x("p-change-model",function(){return m(d),u(i.onChangeCustomProperties())}),t(),n(38,"po-input",27),S("ngModelChange",function(a){return m(d),E(i.customField.value,a)||(i.customField.value=a),u(a)}),t()(),n(39,"div",3)(40,"po-input",28),S("ngModelChange",function(a){return m(d),E(i.customField.placeholder,a)||(i.customField.placeholder=a),u(a)}),t(),n(41,"po-input",29),S("ngModelChange",function(a){return m(d),E(i.customField.pattern,a)||(i.customField.pattern=a),u(a)}),t(),n(42,"po-input",30),S("ngModelChange",function(a){return m(d),E(i.customField.errorPattern,a)||(i.customField.errorPattern=a),u(a)}),t()(),o(43,"hr"),n(44,"div",3)(45,"po-input",31),S("ngModelChange",function(a){return m(d),E(i.customField.url,a)||(i.customField.url=a),u(a)}),x("p-change-model",function(){return m(d),u(i.onChangeCustomProperties())}),t(),n(46,"po-input",32),S("ngModelChange",function(a){return m(d),E(i.customField.fieldValue,a)||(i.customField.fieldValue=a),u(a)}),x("p-change-model",function(){return m(d),u(i.onChangeCustomProperties())}),t()(),o(47,"hr"),n(48,"form",null,1)(50,"div",3)(51,"po-input",33),S("ngModelChange",function(a){return m(d),E(i.customFieldOption.label,a)||(i.customFieldOption.label=a),u(a)}),t(),n(52,"po-input",34),S("ngModelChange",function(a){return m(d),E(i.customFieldOption.value,a)||(i.customFieldOption.value=a),u(a)}),t()(),n(53,"div",3)(54,"po-button",35),x("p-click",function(){return m(d),u(i.addCustomFieldOption())}),t()()(),o(55,"br")(56,"hr"),n(57,"div",3)(58,"po-button",36),x("p-click",function(){return m(d),u(i.restore())}),t()()()}if(l&2){let d=U(49);h("p-background",i.background)("p-contact-email",i.contactEmail)("p-custom-field",i.customField)("p-environment",i.environment)("p-exceeded-attempts-warning",i.exceededAttempts)("p-hide-remember-user",i.properties.includes("hideRememberUser"))("p-loading",i.properties.includes("loading"))("p-literals",i.customLiterals)("p-login",i.login)("p-login-errors",i.loginErrors)("p-login-pattern",i.loginPattern)("p-logo",i.logo)("p-password-errors",i.passwordErrors)("p-password-pattern",i.passwordPattern)("p-product-name",i.productName)("p-recovery",i.recovery)("p-register-url",i.registerUrl)("p-secondary-logo",i.secondaryLogo)("p-support",i.support),p(5),g("ngModel",i.literals),p(),g("ngModel",i.productName),p(2),g("ngModel",i.loginPattern),p(),g("ngModel",i.login),p(2),g("ngModel",i.exceededAttempts),p(),g("ngModel",i.passwordPattern),p(2),g("ngModel",i.contactEmail),p(),g("ngModel",i.environment),p(2),g("ngModel",i.logo),p(),g("ngModel",i.secondaryLogo),p(2),g("ngModel",i.background),p(),g("ngModel",i.support),p(2),g("ngModel",i.recovery),p(),g("ngModel",i.registerUrl),p(2),g("ngModel",i.properties),h("p-options",i.propertiesOptions),p(3),g("ngModel",i.loginError),p(4),g("ngModel",i.passwordError),p(4),g("ngModel",i.customField.property),p(),g("ngModel",i.customField.value),p(2),g("ngModel",i.customField.placeholder),p(),g("ngModel",i.customField.pattern),p(),g("ngModel",i.customField.errorPattern),p(3),g("ngModel",i.customField.url),p(),g("ngModel",i.customField.fieldValue),p(5),g("ngModel",i.customFieldOption.label),p(),g("ngModel",i.customFieldOption.value),p(2),h("p-disabled",d.invalid)}},dependencies:[Q,G,Y,Z,J,ee,$,te,ne,F],encapsulation:2})}return r})();var we=r=>({"docs-sample-code-tabs":r}),me=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-page-login-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Login Labs"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-login-labs/sample-po-page-login-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-page-login
  [p-background]="background"
  [p-contact-email]="contactEmail"
  [p-custom-field]="customField"
  [p-environment]="environment"
  [p-exceeded-attempts-warning]="exceededAttempts"
  [p-hide-remember-user]="properties.includes('hideRememberUser')"
  [p-loading]="properties.includes('loading')"
  [p-literals]="customLiterals"
  [p-login]="login"
  [p-login-errors]="loginErrors"
  [p-login-pattern]="loginPattern"
  [p-logo]="logo"
  [p-password-errors]="passwordErrors"
  [p-password-pattern]="passwordPattern"
  [p-product-name]="productName"
  [p-recovery]="recovery"
  [p-register-url]="registerUrl"
  [p-secondary-logo]="secondaryLogo"
  [p-support]="support"
  (p-login-submit)="loginSubmit($event)"
>
</po-page-login>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"submitLabel":"Access System", "highlightInfo": "Awesome, PO is beautiful!!!"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input
      class="po-lg-6"
      name="productName"
      [(ngModel)]="productName"
      p-clean
      p-help="A custom name that succeeds the title"
      p-label="Product Name"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="loginPattern"
      [(ngModel)]="loginPattern"
      p-clean
      p-help="Ex.: ^[a-zA-Z]*$ (Only letters)"
      p-label="Login Pattern"
    >
    </po-input>

    <po-input class="po-lg-6" name="login" [(ngModel)]="login" p-clean p-help="Ex.: podev" p-label="Login"> </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="exceededAttempts"
      [(ngModel)]="exceededAttempts"
      p-clean
      p-help="Ex.: 5"
      p-label="Exceeded Attempts Warning"
    >
    </po-input>

    <po-input
      class="po-lg-6"
      name="passwordPattern"
      [(ngModel)]="passwordPattern"
      p-clean
      p-help="Ex.: ^(\\d*)$ (Only numbers)"
      p-label="Password Pattern"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="contactMail" [(ngModel)]="contactEmail" p-clean p-label="Contact Email"> </po-input>

    <po-input class="po-lg-6" name="environment" [(ngModel)]="environment" p-clean p-label="Environment"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="logo" [(ngModel)]="logo" p-clean p-label="Logo"> </po-input>

    <po-input class="po-lg-6" name="secondaryLogo" [(ngModel)]="secondaryLogo" p-clean p-label="Secondary logo">
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="background" [(ngModel)]="background" p-clean p-label="Background"> </po-input>

    <po-input class="po-lg-6" name="support" [(ngModel)]="support" p-clean p-label="Support"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="recovery" [(ngModel)]="recovery" p-clean p-label="Recovery"> </po-input>

    <po-input class="po-lg-6" name="registerUrl" [(ngModel)]="registerUrl" p-clean p-label="Register URL"> </po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <po-divider p-label="Login Errors"></po-divider>

  <div class="po-row">
    <po-input class="po-md-8" name="loginError" [(ngModel)]="loginError" p-clean p-label="Login Error"> </po-input>

    <po-button class="po-md-4 po-mt-4" p-label="Add Login Error" (p-click)="addLoginError()"> </po-button>
  </div>

  <po-divider p-label="Password Errors"></po-divider>

  <div class="po-row">
    <po-input class="po-lg-8" name="passwordError" [(ngModel)]="passwordError" p-clean p-label="Password Error">
    </po-input>

    <po-button class="po-md-4 po-mt-4" p-label="Add Password Error" (p-click)="addPasswordError()"> </po-button>
  </div>

  <po-divider p-label="Custom Field"></po-divider>

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="customFieldProperty"
      [(ngModel)]="customField.property"
      p-clean
      p-help="Ex.: domain"
      p-label="Custom Field Property"
      (p-change-model)="onChangeCustomProperties()"
    >
    </po-input>

    <po-input
      class="po-lg-6"
      name="customFieldValue"
      [(ngModel)]="customField.value"
      p-clean
      p-help="Ex.: JV01"
      p-label="Custom Field Value"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-lg-4"
      name="customFieldPlaceholder"
      [(ngModel)]="customField.placeholder"
      p-clean
      p-help="Ex.: Enter your domain"
      p-label="Custom Field Placeholder"
    >
    </po-input>

    <po-input
      class="po-lg-4"
      name="customFieldPattern"
      [(ngModel)]="customField.pattern"
      p-clean
      p-help="Ex.: [a-z]"
      p-label="Custom Field Pattern"
    >
    </po-input>

    <po-input
      class="po-lg-4"
      name="customFieldErrorPattern"
      [(ngModel)]="customField.errorPattern"
      p-clean
      p-help="Ex.: Value doesn\`t match expected"
      p-label="Custom Field Error Pattern"
    >
    </po-input>
  </div>

  <hr />

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="customFieldComboUrl"
      [(ngModel)]="customField.url"
      p-clean
      p-help="Ex.: https://po-sample-api.onrender.com/v1/heroes"
      p-label="Custom Field URL"
      (p-change-model)="onChangeCustomProperties()"
    >
    </po-input>

    <po-input
      class="po-lg-6"
      name="customFieldComboValue"
      [(ngModel)]="customField.fieldValue"
      p-clean
      p-help="Property to specify the return field. Ex.: value, nickname, label"
      p-label="Custom Field Field Value"
      (p-change-model)="onChangeCustomProperties()"
    >
    </po-input>
  </div>

  <hr />

  <form #formCustomFieldOptions="ngForm">
    <div class="po-row">
      <po-input
        class="po-md-6"
        name="customFieldOptionLabel"
        [(ngModel)]="customFieldOption.label"
        p-clean
        p-label="Custom Field Option Label"
        p-required
      >
      </po-input>

      <po-input
        class="po-md-6"
        name="customFieldOptionValue"
        [(ngModel)]="customFieldOption.value"
        p-clean
        p-label="Custom Field Option Value"
        p-required
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-6 po-lg-4"
        p-label="Add Custom Field Option"
        [p-disabled]="formCustomFieldOptions.invalid"
        (p-click)="addCustomFieldOption()"
      >
      </po-button>
    </div>
  </form>

  <br />

  <hr />

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-login-labs/sample-po-page-login-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoSelectOption, PoDialogService } from '@po-ui/ng-components';

import { PoPageLogin, PoPageLoginCustomField, PoPageLoginLiterals } from '@po-ui/ng-templates';

@Component({
    selector: 'sample-po-page-login-labs',
    templateUrl: './sample-po-page-login-labs.component.html',
    standalone: false
})
export class SamplePoPageLoginLabsComponent implements OnInit {
  background: string;
  contactEmail: string;
  customField: PoPageLoginCustomField;
  customFieldOption: any;
  customFieldOptions: Array<PoSelectOption>;
  customLiterals: PoPageLoginLiterals;
  environment: string;
  exceededAttempts: number;
  secondaryLogo: string;
  literals: string;
  login: string;
  loginPattern: string;
  loginError: string;
  loginErrors: Array<string>;
  logo: string;
  passwordError: string;
  passwordErrors: Array<string>;
  passwordPattern: string;
  productName: string;
  properties: Array<string>;
  recovery: string;
  registerUrl: string;
  support: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'hideRememberUser', label: 'Hide remember user' },
    { value: 'loading', label: 'Loading' }
  ];

  constructor(private poDialog: PoDialogService) {}

  ngOnInit() {
    this.restore();
  }

  addCustomFieldOption() {
    this.customFieldOptions.push({ label: this.customFieldOption.label, value: this.customFieldOption.value });
    this.customField.options = this.customFieldOptions;
    this.onChangeCustomProperties();

    this.customFieldOption = {};
  }

  addLoginError() {
    this.loginErrors.push(this.loginError);
    this.loginError = '';
  }

  addPasswordError() {
    this.passwordErrors.push(this.passwordError);
    this.passwordError = '';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  loginSubmit(formData: PoPageLogin) {
    if (this.exceededAttempts <= 0) {
      this.poDialog.alert({
        title: 'Authenticate',
        message: JSON.stringify(formData)
      });
    }
  }

  onChangeCustomProperties() {
    this.customField = Object.assign({}, this.customField);
  }

  restore() {
    this.properties = [];
    this.background = '';
    this.contactEmail = '';
    this.customField = { property: undefined };
    this.customFieldOption = { label: undefined, value: undefined };
    this.customFieldOptions = [];
    this.customLiterals = undefined;
    this.environment = '';
    this.exceededAttempts = 0;
    this.secondaryLogo = undefined;
    this.literals = '';
    this.login = '';
    this.loginPattern = '';
    this.loginError = '';
    this.loginErrors = [];
    this.logo = undefined;
    this.passwordError = '';
    this.passwordErrors = [];
    this.passwordPattern = '';
    this.passwordError = '';
    this.passwordErrors = [];
    this.productName = '';
    this.recovery = '';
    this.registerUrl = '';
    this.support = '';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-page-login-labs"),t(),o(23,"hr")),l&2&&(p(5),L("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),h("ngClass",_(4,we,i.hideSampleCodeTabs)))},dependencies:[M,C,P,f,de],encapsulation:2})}return r})();function ye(r,be){if(r&1){let s=O();n(0,"po-page-login",6),x("p-login-change",function(){m(s);let i=k();return u(i.loginChange())})("p-login-submit",function(i){m(s);let d=k();return u(d.checkLogin(i))})("p-password-change",function(){m(s);let i=k();return u(i.passwordChange())}),t()}if(r&2){let s=k();h("p-custom-field",s.customField)("p-exceeded-attempts-warning",s.exceededAttempts)("p-literals",s.literalsI18n)("p-loading",s.loading)("p-password-errors",s.passwordErrors)("p-login-errors",s.loginErrors)("p-recovery",s.passwordRecovery)}}function _e(r,be){if(r&1&&o(0,"po-page-blocked-user",7),r&2){let s=k();h("p-params",s.params)}}var ue=(()=>{class r{poI18nService;poDialog;customField={property:"domain",placeholder:"Enter your domain"};attempts=3;exceededAttempts;literalsI18n;loading=!1;loginErrors=[];passwordErrors=[];params={attempts:3,hours:24};passwordRecovery={url:"https://po-sample-api.onrender.com/v1/users",type:ae.All,contactMail:"support@mail.com"};showPageBlocked=!1;i18nSubscription;constructor(s,l){this.poI18nService=s,this.poDialog=l}ngOnDestroy(){this.i18nSubscription.unsubscribe()}ngOnInit(){this.i18nSubscription=this.poI18nService.getLiterals().subscribe(s=>{this.literalsI18n=s,this.exceededAttempts=0})}checkLogin(s){this.loading=!0,s.login==="devpo"&&s.password==="1986"?(this.passwordErrors=[],this.exceededAttempts=0,this.loginErrors=[],setTimeout(()=>{this.poDialog.alert({ok:()=>this.loading=!1,title:"Access released",message:"You are on vacation, take time to rest."})},3e3)):(this.loading=!1,this.generateAttempts(),this.passwordErrors=["Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente."],this.loginErrors=["Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente."])}passwordChange(){this.passwordErrors.length&&(this.passwordErrors=[])}loginChange(){this.loginErrors.length&&(this.loginErrors=[])}generateAttempts(){this.attempts>=1&&(this.attempts--,this.exceededAttempts=this.attempts),this.attempts===0&&(this.showPageBlocked=!0)}static \u0275fac=function(l){return new(l||r)(w(oe),w(q))};static \u0275cmp=b({type:r,selectors:[["sample-po-page-login-human-resources"]],standalone:!1,decls:7,vars:2,consts:[[1,"po-row"],["p-label","Forgot your ID Sample Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Forgot your ID Sample Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Forgot your ID Sample SMS Code","p-value","999999",1,"po-md-2"],["p-hide-remember-user","","p-login-pattern","^[a-zA-Z]*$","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-password-pattern","^(\\d*)$","p-product-name","Human Resources","p-register-url","http://po.com","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-custom-field","p-exceeded-attempts-warning","p-literals","p-loading","p-password-errors","p-login-errors","p-recovery","p-login-change","p-login-submit","p-password-change",4,"ngIf"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","exceededAttempts","p-url-back","https://po-ui.io/documentation/po-page-login",3,"p-params",4,"ngIf"],["p-hide-remember-user","","p-login-pattern","^[a-zA-Z]*$","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-password-pattern","^(\\d*)$","p-product-name","Human Resources","p-register-url","http://po.com","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-change","p-login-submit","p-password-change","p-custom-field","p-exceeded-attempts-warning","p-literals","p-loading","p-password-errors","p-login-errors","p-recovery"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","exceededAttempts","p-url-back","https://po-ui.io/documentation/po-page-login",3,"p-params"]],template:function(l,i){l&1&&(n(0,"po-container")(1,"div",0),o(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),t()(),z(5,ye,1,7,"po-page-login",4)(6,_e,1,1,"po-page-blocked-user",5)),l&2&&(p(5),h("ngIf",!i.showPageBlocked),p(),h("ngIf",i.showPageBlocked))},dependencies:[H,B,V,re,F],encapsulation:2})}return r})();var Fe=r=>({"docs-sample-code-tabs":r}),ce=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-page-login-human-resources-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Login - Human Resources"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.html"),t(),n(13,"pre",7),e(14,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Forgot your ID Sample Phone" p-value="(99) 99999-9999"></po-info>
    <po-info class="po-md-2" p-label="Forgot your ID Sample Email" p-value="mail@mail.com"></po-info>
    <po-info class="po-md-2" p-label="Forgot your ID Sample SMS Code" p-value="999999"></po-info>
  </div>
</po-container>

<po-page-login
  *ngIf="!showPageBlocked"
  p-hide-remember-user
  p-login-pattern="^[a-zA-Z]*$"
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-password-pattern="^(\\d*)$"
  p-product-name="Human Resources"
  p-register-url="http://po.com"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  [p-custom-field]="customField"
  [p-exceeded-attempts-warning]="exceededAttempts"
  [p-literals]="literalsI18n"
  [p-loading]="loading"
  [p-password-errors]="passwordErrors"
  [p-login-errors]="loginErrors"
  [p-recovery]="passwordRecovery"
  (p-login-change)="loginChange()"
  (p-login-submit)="checkLogin($event)"
  (p-password-change)="passwordChange()"
>
</po-page-login>

<po-page-blocked-user
  *ngIf="showPageBlocked"
  p-contact-email="user@po-ui.com.br"
  p-contact-phone="0800 709 8100"
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-reason="exceededAttempts"
  p-url-back="https://po-ui.io/documentation/po-page-login"
  [p-params]="params"
>
</po-page-blocked-user>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { PoDialogService, PoI18nService } from '@po-ui/ng-components';
import {
  PoModalPasswordRecoveryType,
  PoPageBlockedUserReasonParams,
  PoPageLoginCustomField,
  PoPageLoginLiterals,
  PoPageLoginRecovery
} from '@po-ui/ng-templates';

@Component({
    selector: 'sample-po-page-login-human-resources',
    templateUrl: './sample-po-page-login-human-resources.component.html',
    standalone: false
})
export class SamplePoPageLoginHumanResourcesComponent implements OnDestroy, OnInit {
  customField: PoPageLoginCustomField = {
    property: 'domain',
    placeholder: 'Enter your domain'
  };

  attempts = 3;
  exceededAttempts: number;
  literalsI18n: PoPageLoginLiterals;
  loading: boolean = false;
  loginErrors = [];
  passwordErrors = [];
  params: PoPageBlockedUserReasonParams = { attempts: 3, hours: 24 };
  passwordRecovery: PoPageLoginRecovery = {
    url: 'https://po-sample-api.onrender.com/v1/users',
    type: PoModalPasswordRecoveryType.All,
    contactMail: 'support@mail.com'
  };
  showPageBlocked: boolean = false;

  private i18nSubscription: Subscription;

  constructor(
    private poI18nService: PoI18nService,
    private poDialog: PoDialogService
  ) {}

  ngOnDestroy() {
    this.i18nSubscription.unsubscribe();
  }

  ngOnInit() {
    this.i18nSubscription = this.poI18nService.getLiterals().subscribe(literals => {
      this.literalsI18n = literals;
      this.exceededAttempts = 0;
    });
  }

  checkLogin(formData) {
    this.loading = true;

    if (formData.login === 'devpo' && formData.password === '1986') {
      this.passwordErrors = [];
      this.exceededAttempts = 0;
      this.loginErrors = [];

      setTimeout(() => {
        this.poDialog.alert({
          ok: () => (this.loading = false),
          title: 'Access released',
          message: 'You are on vacation, take time to rest.'
        });
      }, 3000);
    } else {
      this.loading = false;
      this.generateAttempts();
      this.passwordErrors = ['Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente.'];
      this.loginErrors = ['Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente.'];
    }
  }

  passwordChange() {
    if (this.passwordErrors.length) {
      this.passwordErrors = [];
    }
  }

  loginChange() {
    if (this.loginErrors.length) {
      this.loginErrors = [];
    }
  }

  private generateAttempts() {
    if (this.attempts >= 1) {
      this.attempts--;
      this.exceededAttempts = this.attempts;
    }
    if (this.attempts === 0) {
      this.showPageBlocked = true;
    }
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.module.ts"),t(),n(23,"pre",9),e(24,`/**
 * Exemplo de configura\xE7\xE3o de um m\xF3dulo com i18n.
 */

// import { NgModule } from '@angular/core';

// import { PoModule } from '@po-ui/ng-components/po.module';
// import { PoI18nConfig, PoI18nModule } from '@po-ui/ng-components/services/po-i18n';

// import { SamplePoPageLoginHumanResourcesComponent } from './sample-po-page-login-human-resources.component';

// const humanResourcesEnLiterals = {
//   loginErrorPattern: 'Invalid ID',
//   loginPlaceholder: 'Insert your ID',
//   passwordErrorPattern: 'Invalid PIN',
//   passwordPlaceholder: 'Insert your PIN',
//   submitLabel: 'Access your account',
//   forgotPassword: 'Forgot your ID or PIN?',
//   highlightInfo: 'For us the future is now'
// };

// const humanResourcesEsLiterals = {
//   loginErrorPattern: 'ID invalido',
//   loginPlaceholder: 'Inserte su ID',
//   passwordErrorPattern: 'Contrase\xF1a incorrecta',
//   passwordPlaceholder: 'Inserte su contrase\xF1a',
//   submitLabel: 'Accede a su cuenta',
//   forgotPassword: '\xBFOlvid\xF3 su ID o contrase\xF1a?',
//   highlightInfo: 'Para nosotros el futuro es ahora'
// };

// const humanResourcesPtLiterals = {
// loginErrorPattern: 'ID inv\xE1lido',
//   loginPlaceholder: 'Insira seu ID',
//   passwordErrorPattern: 'Senha incorreta',
//   passwordPlaceholder: 'Insira sua senha',
//   submitLabel: 'Acesse a sua conta',
//   forgotPassword: 'Esqueceu seu ID ou sua senha?',
//   highlightInfo: 'Para n\xF3s o futuro \xE9 agora'
// };

// const poI18nConfig: PoI18nConfig = {
//   contexts: {
//     general: {
//       'en': humanResourcesEnLiterals,
//       'es': humanResourcesEsLiterals,
//       'pt': humanResourcesPtLiterals,
//     }
//   },
//   default: {
//    context: 'general',
//    cache: true
//   }
// };

// @NgModule({
//   imports: [
//     PoModule,
//     PoI18nModule.config(poI18nConfig)
//   ],
//   declarations: [
//     SamplePoPageLoginHumanResourcesComponent
//   ],
//   exports: [],
//   providers: []
// })
// export class SamplePoPageLoginHumanResourcesModule { }
`),t()()()()(),n(25,"div",10),o(26,"sample-po-page-login-human-resources"),t(),o(27,"hr")),l&2&&(p(5),L("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),h("ngClass",_(4,Fe,i.hideSampleCodeTabs)))},dependencies:[M,C,P,f,ue],encapsulation:2})}return r})();var ge=(()=>{class r{literals;japoneseLiterals={welcome:"\u3088\u3046\u3053\u305D",loginLabel:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",loginPlaceholder:"\u30A2\u30AF\u30BB\u30B9\u30E6\u30FC\u30B6\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",passwordErrorPattern:"\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5FC5\u8981",passwordLabel:"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",passwordPlaceholder:"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",submitLabel:"\u30A2\u30AF\u30BB\u30B9\u30B7\u30B9\u30C6\u30E0",submittedLabel:"\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u4E2D ...",rememberUser:"\u81EA\u52D5\u7684\u306B\u30ED\u30B0\u30A4\u30F3",rememberUserHint:"\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30B7\u30B9\u30C6\u30E0\u30E1\u30CB\u30E5\u30FC\u3067\u7121\u52B9\u306B\u3067\u304D\u307E\u3059",loginHint:`\u30E6\u30FC\u30B6\u30FC\u306F\u6700\u521D\u306E\u65E5\u306B\u3042\u306A\u305F\u306B\u914D\u9054\u3055\u308C\u307E\u3057\u305F\u3002
    \u3053\u306E\u60C5\u5831\u3092\u7D1B\u5931\u3057\u305F\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044`};languages=[{language:"pt",description:"Portugu\xEAs"},{language:"jp",description:"\u65E5\u672C\u8A9E"}];changeLanguage(s){s?.language==="jp"?this.literals=j({},this.japoneseLiterals):this.literals={}}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-page-login-automatic-service"]],standalone:!1,decls:5,vars:2,consts:[[1,"po-row"],["p-label","Forgot your ID Sample Login","p-value","admin",1,"po-md-2"],["p-label","Forgot your ID Sample Password","p-value","admin",1,"po-md-2"],["p-authentication-url","https://po-sample-api.onrender.com/v1/users/authentication","p-blocked-url","/documentation/po-page-blocked-user","p-authentication-type","Bearer","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-language-change","p-languages","p-literals"]],template:function(l,i){l&1&&(n(0,"po-container")(1,"div",0),o(2,"po-info",1)(3,"po-info",2),t()(),n(4,"po-page-login",3),x("p-language-change",function(c){return i.changeLanguage(c)}),t()),l&2&&(p(4),h("p-languages",i.languages)("p-literals",i.literals))},dependencies:[B,V,F],encapsulation:2})}return r})();var Ae=r=>({"docs-sample-code-tabs":r}),Ee=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-page-login-automatic-service-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Login - Automatic Service"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.html"),t(),n(13,"pre",7),e(14,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Forgot your ID Sample Login" p-value="admin"></po-info>
    <po-info class="po-md-2" p-label="Forgot your ID Sample Password" p-value="admin"></po-info>
  </div>
</po-container>
<po-page-login
  p-authentication-url="https://po-sample-api.onrender.com/v1/users/authentication"
  p-blocked-url="/documentation/po-page-blocked-user"
  p-authentication-type="Bearer"
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  [p-languages]="languages"
  [p-literals]="literals"
  (p-language-change)="changeLanguage($event)"
>
</po-page-login>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoLanguage } from '@po-ui/ng-components';
import { PoPageLoginLiterals } from '@po-ui/ng-templates';

@Component({
    selector: 'sample-po-page-login-automatic-service',
    templateUrl: './sample-po-page-login-automatic-service.component.html',
    standalone: false
})
export class SamplePoPageLoginAutomaticServiceComponent {
  literals: PoPageLoginLiterals;
  japoneseLiterals: PoPageLoginLiterals = {
    welcome: '\u3088\u3046\u3053\u305D',
    loginLabel: '\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    loginPlaceholder: '\u30A2\u30AF\u30BB\u30B9\u30E6\u30FC\u30B6\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    passwordErrorPattern: '\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5FC5\u8981',
    passwordLabel: '\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    passwordPlaceholder: '\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    submitLabel: '\u30A2\u30AF\u30BB\u30B9\u30B7\u30B9\u30C6\u30E0',
    submittedLabel: '\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u4E2D ...',
    rememberUser: '\u81EA\u52D5\u7684\u306B\u30ED\u30B0\u30A4\u30F3',
    rememberUserHint: '\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30B7\u30B9\u30C6\u30E0\u30E1\u30CB\u30E5\u30FC\u3067\u7121\u52B9\u306B\u3067\u304D\u307E\u3059',
    loginHint: \`\u30E6\u30FC\u30B6\u30FC\u306F\u6700\u521D\u306E\u65E5\u306B\u3042\u306A\u305F\u306B\u914D\u9054\u3055\u308C\u307E\u3057\u305F\u3002
    \u3053\u306E\u60C5\u5831\u3092\u7D1B\u5931\u3057\u305F\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\`
  };

  languages: Array<PoLanguage> = [
    { language: 'pt', description: 'Portugu\xEAs' },
    { language: 'jp', description: '\u65E5\u672C\u8A9E' }
  ];

  changeLanguage(language: PoLanguage) {
    if (language?.language === 'jp') {
      this.literals = { ...this.japoneseLiterals };
    } else {
      this.literals = {};
    }
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-page-login-automatic-service"),t(),o(23,"hr")),l&2&&(p(5),L("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),h("ngClass",_(4,Ae,i.hideSampleCodeTabs)))},dependencies:[M,C,P,f,ge],encapsulation:2})}return r})();var Se=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-page-login-doc"]],standalone:!1,decls:1860,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPageLoginAuthenticationType"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["id","processos"],["id","praticidade"],["pan","",1,"docs-api-property-type","PoPageLoginCustomField"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoLanguage>"],["pan","",1,"docs-api-property-type","PoPageLoginLiterals"],["pan","",1,"docs-api-property-type","string[]"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoPageLoginRecovery"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],["href","/documentation/po-modal-password-recovery"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageLoginModule } from '@po-ui/ng-templates';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo do template do po-page-login."),t()(),n(7,"h3",3),e(8,"Componente"),t(),n(9,"h4",4)(10,"code",5),e(11,"PoPageLoginComponent"),t()(),n(12,"div",2)(13,"p"),e(14,"O componente "),n(15,"code"),e(16,"po-page-login"),t(),e(17,` \xE9 utilizado como template para tela de login.
Com ele \xE9 poss\xEDvel definirmos valores para usu\xE1rio, senha e definir a\xE7\xF5es para recupera\xE7\xE3o de senha e grava\xE7\xE3o de dados do usu\xE1rio.
Tamb\xE9m \xE9 poss\xEDvel inserir uma imagem em conjunto com um texto de destaque.`),t(),n(18,"p"),e(19,"A propriedade "),n(20,"code"),e(21,"p-authentication-url"),t(),e(22,` automatiza a rotina do componente e simplifica o processo para autentica\xE7\xE3o do usu\xE1rio, bastando
definir uma url para requisi\xE7\xE3o da autentica\xE7\xE3o. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o desenvolvimento
da aplica\xE7\xE3o no `),n(23,"em"),e(24,"client side"),t(),e(25,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de login de usu\xE1rio.
Seu detalhamento para uso pode ser visto logo abaixo em `),n(26,"em"),e(27,"propriedades"),t(),e(28,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),t(),n(29,"p"),e(30,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),n(31,"em"),e(32,"assets"),t(),e(33," no arquivo "),n(34,"strong"),e(35,"angular.json"),t(),e(36," da aplica\xE7\xE3o na seguinte ordem:"),t(),n(37,"pre")(38,"code"),e(39,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]`),t()()(),n(40,"div",6)(41,"h4",7),e(42,"Seletor"),t(),n(43,"pre",8),e(44,`<po-page-login
    p-authentication-type="PoPageLoginAuthenticationType"
    p-authentication-url="string"
    p-background="string"
    p-blocked-url="string"
    p-contact-email="string"
    p-custom-field="string | PoPageLoginCustomField"
    p-environment="string"
    p-exceeded-attempts-warning="number"
    p-hide-label-status="boolean"
    p-hide-password-peek="boolean"
    p-hide-remember-user="boolean"
    (p-language-change)="EventEmitter"
    p-languages="Array<PoLanguage>"
    p-literals="PoPageLoginLiterals"
    p-loading="boolean"
    p-login="string"
    (p-login-change)="EventEmitter"
    p-login-errors="string[]"
    p-login-pattern="string"
    (p-login-submit)="EventEmitter"
    p-logo="string"
    p-no-autocomplete-login="boolean"
    p-no-autocomplete-password="boolean"
    (p-password-change)="EventEmitter"
    p-password-errors="string[]"
    p-password-pattern="string"
    p-product-name="string"
    p-recovery="string | Function | PoPageLoginRecovery"
    p-register-url="string"
    p-secondary-logo="string"
    p-support="string | Function" >
</po-page-login>
`),t()(),n(45,"h4",9),e(46,"Propriedades"),t(),n(47,"table",10)(48,"tr",11)(49,"th",12),e(50,"Nome"),t(),n(51,"th",12),e(52,"Tipo"),t(),n(53,"th",12),e(54,"Padr\xE3o"),t(),n(55,"th",12),e(56,"Descri\xE7\xE3o"),t()(),n(57,"tr",13)(58,"td",14)(59,"div",15)(60,"span",16),e(61," p-authentication-type"),o(62,"br"),t()()(),n(63,"td",17)(64,"code",18),e(65,"PoPageLoginAuthenticationType"),t()(),n(66,"td",19)(67,"p")(68,"code"),e(69,"PoPageLoginAuthenticationType.Basic"),t()()(),n(70,"td",20)(71,"em")(72,"strong"),e(73,"(opcional)"),t()(),n(74,"p"),e(75,"Atributo que recebe o tipo de esquema da autentica\xE7\xE3o, sendo suportados apenas os valores "),n(76,"code"),e(77,"Basic"),t(),e(78," e "),n(79,"code"),e(80,"Bearer"),t(),e(81,"."),t(),n(82,"blockquote")(83,"p"),e(84,"Caso o tipo definido seja "),n(85,"code"),e(86,"Basic"),t(),e(87,", o componente far\xE1 uma requisi\xE7\xE3o "),n(88,"code"),e(89,"POST"),t(),e(90," contendo:"),t()(),n(91,"pre")(92,"code"),e(93,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}`),t()(),n(94,"blockquote")(95,"p"),e(96,"Caso o tipo definido seja "),n(97,"code"),e(98,"Bearer"),t(),e(99,", o componente far\xE1 uma requisi\xE7\xE3o "),n(100,"code"),e(101,"POST"),t(),e(102," contendo:"),t()(),n(103,"pre")(104,"code"),e(105,`body {
 login: login,
 password: base64(password),
 rememberUser: rememberUser
}`),t()()()(),n(106,"tr",13)(107,"td",14)(108,"div",15)(109,"span",16),e(110," p-authentication-url"),o(111,"br"),t()()(),n(112,"td",17)(113,"code",21),e(114,"string"),t()(),n(115,"td",19),e(116,"-"),t(),n(117,"td",20)(118,"em")(119,"strong"),e(120,"(opcional)"),t()(),n(121,"p"),e(122,"Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido, o m\xE9todo "),n(123,"code"),e(124,"p-login-submit"),t(),e(125,` ser\xE1 ignorado e o
componente adquirir\xE1 automatiza\xE7\xE3o para o processo de autentica\xE7\xE3o.`),t(),n(126,"h3",22),e(127,"Processos"),t(),n(128,"p"),e(129,"Ao digitar um valor v\xE1lido no campo de login/password e pressionar "),n(130,"strong"),e(131,"Enter"),t(),e(132,", o componente far\xE1 uma requisi\xE7\xE3o "),n(133,"code"),e(134,"POST"),t(),e(135,`
na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio:`),t(),n(136,"pre")(137,"code"),e(138,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}`),t()(),n(139,"p"),e(140,"Em caso de "),n(141,"strong"),e(142,"sucesso"),t(),e(143,", o objeto de retorno \xE9 armazenado no "),n(144,"code"),e(145,"sessionStorage"),t(),e(146,` e o usu\xE1rio \xE9 redirecionado para a p\xE1gina inicial da
aplica\xE7\xE3o `),n(147,"code"),e(148,"/"),t(),e(149,"."),t(),n(150,"pre")(151,"code"),e(152,`200:
{
  user: user
}`),t()(),n(153,"p"),e(154,"Em caso de "),n(155,"strong"),e(156,"erro"),t(),e(157," na autentica\xE7\xE3o, espera-se o seguinte retorno:"),t(),n(158,"pre")(159,"code"),e(160,`400/401
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl
}`),t()(),n(161,"blockquote")(162,"p"),e(163,"Pode-se atribuir uma quantidade m\xE1xima de tentativas restantes (maxAttemptsRemaining) para o atributo "),n(164,"code"),e(165,"p-exceeded-attempts-warning"),t(),e(166,`,
assim como os avisos relacionados aos campos login e password (loginWarnings, passwordWarnings) para os atributos `),n(167,"code"),e(168,"p-login-errors"),t(),e(169,` e
`),n(170,"code"),e(171,"p-password-errors"),t(),e(172," conforme retorno abaixo:"),t()(),n(173,"pre")(174,"code"),e(175,`400
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl,
  maxAttemptsRemaining?: maxAttemptsRemaining,
  loginWarnings?: [loginWarnings],
  passwordWarnings?: [passwordWarnings]
}`),t()(),n(176,"blockquote")(177,"p"),e(178,"Caso o valor atribu\xEDdo para "),n(179,"code"),e(180,"p-exceeded-attempts-warning"),t(),e(181,` seja igual a 0(zero), poder\xE1 ser passado um valor para o
atributo `),n(182,"code"),e(183,"p-blocked-url"),t(),e(184," e o usu\xE1rio ser\xE1 redirecionado para uma tela de bloqueio."),t()(),n(185,"p")(186,"em"),e(187,"Processo finalizado."),t()(),o(188,"hr"),n(189,"h4",23),e(190,"Praticidade"),t(),n(191,"p"),e(192,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),n(193,"code"),e(194,"po-page-login"),t(),e(195,` no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template de tela de login pode ser gerado ao navegar para rota `),n(196,"code"),e(197,"/login"),t(),e(198,`, e tamb\xE9m como ele se comunica
com o servi\xE7o para efetua\xE7\xE3o do processo de autentica\xE7\xE3o do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),t(),n(199,"pre")(200,"code"),e(201,`import { PoPageLoginComponent, PoPageLoginAthenticationType } from '@po-ui/ng-templates';

...
const routes: Routes = [
  {
    path: 'login', component: PoPageLoginComponent, data: {
      serviceApi: 'https://po-ui.io/sample/api/users/authentication',
      environment: 'development',
      recovery: {
        url: 'https://po-ui.io/sample/api/users',
        type: PoModalPasswordRecoveryType.All,
        contactMail: 'dev.po@po-ui.com',
        phoneMask: '9-999-999-9999'
      },
      registerUrl: '/new-password',
      authenticationType: PoPageLoginAthenticationType.Basic
    }
  }
  ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }`),t()(),n(202,"p"),e(203,"O metadado "),n(204,"code"),e(205,"serviceApi"),t(),e(206," deve ser a "),n(207,"strong"),e(208,"url"),t(),e(209," para requisi\xE7\xE3o dos recursos de autentica\xE7\xE3o, o "),n(210,"code"),e(211,"environment"),t(),e(212,` alimenta a propriedade
`),n(213,"code"),e(214,"p-environment"),t(),e(215,", "),n(216,"code"),e(217,"recovery"),t(),e(218," \xE9 a interface "),n(219,"code"),e(220,"PoPageLoginRecovery"),t(),e(221,` respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de
senha, `),n(222,"code"),e(223,"registerUrl"),t(),e(224," alimenta a propriedade "),n(225,"code"),e(226,"p-register-url"),t(),e(227," e "),n(228,"code"),e(229,"authenticationType"),t(),e(230," que define a propriedade "),n(231,"code"),e(232,"p-authentication-type"),t(),e(233,"."),t(),n(234,"blockquote")(235,"p"),e(236,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade."),t()()()(),n(237,"tr",13)(238,"td",14)(239,"div",15)(240,"span",16),e(241," p-background"),o(242,"br"),t()()(),n(243,"td",17)(244,"code",21),e(245,"string"),t()(),n(246,"td",19),e(247,"-"),t(),n(248,"td",20)(249,"em")(250,"strong"),e(251,"(opcional)"),t()(),n(252,"p"),e(253,"O "),n(254,"code"),e(255,"p-background"),t(),e(256,` permite inserir uma imagem de destaque ao lado direito do formul\xE1rio de login, caso a propriedade
n\xE3o seja preenchida o formul\xE1rio ser\xE1 centralizado no espa\xE7o dispon\xEDvel.`),t(),n(257,"p"),e(258,"A fonte da imagem pode ser de um caminho local ou uma url de um servidor externo."),t(),n(259,"p"),e(260,`Al\xE9m da imagem, \xE9 poss\xEDvel adicionar um texto informativo por cima da imagem da imagem de destaque, para isso informe
um valor para a literal `),n(261,"code"),e(262,"highlightInfo"),t(),e(263,"."),t(),n(264,"blockquote")(265,"p"),e(266,"Veja mais sobre as literais na propriedade "),n(267,"code"),e(268,"p-literals"),t(),e(269,"."),t()(),n(270,"p"),e(271,"Exemplos de valores v\xE1lidos:"),t(),n(272,"ul")(273,"li")(274,"strong"),e(275,"local"),t(),e(276,": "),n(277,"code"),e(278,"./assets/images/login-background.png"),t()(),n(279,"li")(280,"strong"),e(281,"url externa"),t(),e(282,": "),n(283,"code"),e(284,"https://po-ui.io/assets/images/login-background.png"),t()()(),n(285,"blockquote")(286,"p"),e(287,"Essa propriedade \xE9 ignorada para aplica\xE7\xF5es mobile."),t()()()(),n(288,"tr",13)(289,"td",14)(290,"div",15)(291,"span",16),e(292," p-blocked-url"),o(293,"br"),t()()(),n(294,"td",17)(295,"code",21),e(296,"string"),t()(),n(297,"td",19),e(298,"-"),t(),n(299,"td",20)(300,"em")(301,"strong"),e(302,"(opcional)"),t()(),n(303,"p"),e(304,"Caso o valor atribu\xEDdo para "),n(305,"code"),e(306,"p-exceeded-attempts-warning"),t(),e(307,` seja igual a 0(zero) e a aplica\xE7\xE3o tenha um link de bloqueio de usu\xE1rio,
informe uma url externa ou uma rota v\xE1lida, dessa forma em caso de bloqueio o usu\xE1rio ser\xE1 redirecionado.`),t()()(),n(308,"tr",13)(309,"td",14)(310,"div",15)(311,"span",16),e(312," p-contact-email"),o(313,"br"),t()()(),n(314,"td",17)(315,"code",21),e(316,"string"),t()(),n(317,"td",19),e(318,"-"),t(),n(319,"td",20)(320,"em")(321,"strong"),e(322,"(opcional)"),t()(),n(323,"p"),e(324,"Personaliza o e-mail que \xE9 exibido na mensagem de dica de login padr\xE3o para contato de suporte."),t()()(),n(325,"tr",13)(326,"td",14)(327,"div",15)(328,"span",16),e(329," p-custom-field"),o(330,"br"),t()()(),n(331,"td",17)(332,"code",21),e(333,"string "),t(),n(334,"code",24),e(335," PoPageLoginCustomField"),t()(),n(336,"td",19),e(337,"-"),t(),n(338,"td",20)(339,"em")(340,"strong"),e(341,"(opcional)"),t()(),n(342,"p"),e(343,"Ao informar um valor do tipo "),n(344,"code"),e(345,"string"),t(),e(346,`, o mesmo ser\xE1 aplicado como a chave do campo customizado e utilizar\xE1
os valores padr\xF5es contidos na propriedade `),n(347,"code"),e(348,"literals"),t(),e(349," como "),n(350,"code"),e(351,"customFieldErrorPattern"),t(),e(352," e "),n(353,"code"),e(354,"customFieldPlaceholder"),t(),e(355,"."),t(),n(356,"p"),e(357,"Existe a possibilidade de informar um objeto que segue a defini\xE7\xE3o da interface "),n(358,"code"),e(359,"PoPageLoginCustomField"),t(),e(360,`, onde
atrav\xE9s dos par\xE2metros enviados pode gerar um `),n(361,"code"),e(362,"po-input"),t(),e(363,", "),n(364,"code"),e(365,"po-combo"),t(),e(366,` especificamente para servi\xE7os
ou `),n(367,"code"),e(368,"po-select"),t(),e(369," para valores fixos."),t(),n(370,"p"),e(371,"Abaixo seguem os exemplos de cada tipo de campo."),t(),n(372,"p")(373,"code"),e(374,"po-input"),t(),e(375,":"),t(),n(376,"pre")(377,"code"),e(378,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  pattern: '[a-z]',
  errorPattern: 'Invalid value'
}`),t()(),n(379,"p")(380,"code"),e(381,"po-combo"),t(),e(382,":"),t(),n(383,"pre")(384,"code"),e(385,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  url: 'https://po-ui.io/sample/api/comboOption/domains',
  fieldValue: 'nickname'
}`),t()(),n(386,"p")(387,"code"),e(388,"po-select"),t(),e(389,":"),t(),n(390,"pre")(391,"code"),e(392,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  options: [{label: 'Domain 1', value: '1'}, {label: 'Domain 2', value: '2'}]
}`),t()(),n(393,"p"),e(394,`Caso o customField possua options, url e fieldValue preenchidos, ser\xE1 priorizado o po-select
utilizando o options.`),t()()(),n(395,"tr",13)(396,"td",14)(397,"div",15)(398,"span",16),e(399," p-environment"),o(400,"br"),t()()(),n(401,"td",17)(402,"code",21),e(403,"string"),t()(),n(404,"td",19),e(405,"-"),t(),n(406,"td",20)(407,"em")(408,"strong"),e(409,"(opcional)"),t()(),n(410,"p"),e(411,"Adiciona uma "),n(412,"code"),e(413,"tag"),t(),e(414," abaixo do t\xEDtulo que especifica o ambiente que o usu\xE1rio est\xE1 fazendo o login."),t(),n(415,"blockquote")(416,"p"),e(417,"Essa propriedade limita o texto em 40 caracteres."),t()()()(),n(418,"tr",13)(419,"td",14)(420,"div",15)(421,"span",16),e(422," p-exceeded-attempts-warning"),o(423,"br"),t()()(),n(424,"td",17)(425,"code",25),e(426,"number"),t()(),n(427,"td",19)(428,"p")(429,"code"),e(430,"0"),t()()(),n(431,"td",20)(432,"em")(433,"strong"),e(434,"(opcional)"),t()(),n(435,"p"),e(436,`Exibe um aviso de bloqueio de acordo com a quantidade restante de tentativas.
O aviso ser\xE1 exibido somente se a quantidade for maior que zero.`),t(),n(437,"blockquote")(438,"p"),e(439,"Caso tenha algum valor atribu\xEDdo para o atributo "),n(440,"code"),e(441,"p-authentication-url"),t(),e(442,` e o retorno da requisi\xE7\xE3o estiver atribuindo valor
para o `),n(443,"code"),e(444,"p-exceeded-attempts-warning"),t(),e(445,", o valor considerado ser\xE1 o do retorno da requisi\xE7\xE3o."),t()()()(),n(446,"tr",13)(447,"td",14)(448,"div",15)(449,"span",16),e(450," p-hide-label-status"),o(451,"br"),t()()(),n(452,"td",17)(453,"code",26),e(454,"boolean"),t()(),n(455,"td",19)(456,"p")(457,"code"),e(458,"false"),t()()(),n(459,"td",20)(460,"em")(461,"strong"),e(462,"(opcional)"),t()(),n(463,"p"),e(464,"Indica se o status do "),n(465,"code"),e(466,"model"),t(),e(467," do switch de lembrar o usu\xE1rio ser\xE1 escondido visualmente."),t(),n(468,"blockquote")(469,"p"),e(470,"Por padr\xE3o ser\xE1 atribu\xEDdo "),n(471,"code"),e(472,"false"),t(),e(473,"."),t()()()(),n(474,"tr",13)(475,"td",14)(476,"div",15)(477,"span",16),e(478," p-hide-password-peek"),o(479,"br"),t()()(),n(480,"td",17)(481,"code",26),e(482,"boolean"),t()(),n(483,"td",19)(484,"p")(485,"code"),e(486,"false"),t()()(),n(487,"td",20)(488,"em")(489,"strong"),e(490,"(opcional)"),t()(),n(491,"p"),e(492,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),t()()(),n(493,"tr",13)(494,"td",14)(495,"div",15)(496,"span",16),e(497," p-hide-remember-user"),o(498,"br"),t()()(),n(499,"td",17)(500,"code",26),e(501,"boolean"),t()(),n(502,"td",19)(503,"p")(504,"code"),e(505,"false"),t()()(),n(506,"td",20)(507,"em")(508,"strong"),e(509,"(opcional)"),t()(),n(510,"p"),e(511,'Esconde a fun\xE7\xE3o "Lembrar usu\xE1rio" do formul\xE1rio de login.'),t(),n(512,"p"),e(513,"Quando essa propriedade \xE9 setada com "),n(514,"code"),e(515,"true"),t(),e(516," a propriedade "),n(517,"code"),e(518,"rememberUser"),t(),e(519," enviada no evento "),n(520,"code"),e(521,"p-login-submit"),t(),e(522,` ser\xE1 sempre
`),n(523,"code"),e(524,"false"),t(),e(525,"."),t(),n(526,"blockquote")(527,"p"),e(528,"Veja a propriedade "),n(529,"code"),e(530,"p-literals"),t(),e(531," para customizar a literal "),n(532,"code"),e(533,"rememberUser"),t(),e(534,"."),t()()()(),n(535,"tr",13)(536,"td",14)(537,"div",27)(538,"span",28),e(539," (p-language-change)"),o(540,"br"),t()()(),n(541,"td",17)(542,"code",29),e(543,"EventEmitter"),t()(),n(544,"td",19),e(545,"-"),t(),n(546,"td",20)(547,"em")(548,"strong"),e(549,"(opcional)"),t()(),n(550,"p"),e(551,"Evento disparado quando o usu\xE1rio alterar o idioma da p\xE1gina."),t(),n(552,"p"),e(553,"Esse evento receber\xE1 como par\xE2metro um objeto do tipo "),n(554,"code"),e(555,"PoLanguage"),t(),e(556," com a linguagem selecionada."),t()()(),n(557,"tr",13)(558,"td",14)(559,"div",15)(560,"span",16),e(561," p-languages"),o(562,"br"),t()()(),n(563,"td",17)(564,"code",30),e(565,"Array<PoLanguage>"),t()(),n(566,"td",19),e(567,"-"),t(),n(568,"td",20)(569,"em")(570,"strong"),e(571,"(opcional)"),t()(),n(572,"p"),e(573,"Cole\xE7\xE3o de idiomas que o componente ir\xE1 tratar e disponibilizar\xE1 para o usu\xE1rio escolher."),t(),n(574,"p"),e(575,"Caso essa propriedade n\xE3o seja utilizada o componente mostrar\xE1 no combo os idiomas que ele suporta por padr\xE3o."),t(),n(576,"p"),e(577,"Caso a cole\xE7\xE3o tenha um idioma, a p\xE1gina estar\xE1 nesse idioma e n\xE3o mostrar\xE1 o combo."),t(),n(578,"p"),e(579,"Caso seja passado um array vazio, a p\xE1gina ter\xE1 o idioma configurado no "),n(580,"code"),e(581,"i18n"),t(),e(582," e n\xE3o mostrar\xE1 o combo de sele\xE7\xE3o."),t(),n(583,"blockquote")(584,"p"),e(585,"Se for passado um idioma n\xE3o suportado, ser\xE1 preciso passar as literais pela propriedade "),n(586,"code"),e(587,"p-literals"),t(),e(588,"."),t()()()(),n(589,"tr",13)(590,"td",14)(591,"div",15)(592,"span",16),e(593," p-literals"),o(594,"br"),t()()(),n(595,"td",17)(596,"code",31),e(597,"PoPageLoginLiterals"),t()(),n(598,"td",19),e(599,"-"),t(),n(600,"td",20)(601,"em")(602,"strong"),e(603,"(opcional)"),t()(),n(604,"p"),e(605,"Objeto com as literais usadas no "),n(606,"code"),e(607,"po-page-login"),t(),e(608,"."),t(),n(609,"p"),e(610,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),n(611,"pre")(612,"code"),e(613,`const customLiterals: PoPageLoginLiterals = {
  attempts: '{0} vez(es) ',
  createANewPasswordNow: 'Melhor criar uma senha nova agora! Voc\xEA vai poder entrar no sistema logo em seguida.',
  forgotPassword: 'Esqueceu sua senha?',
  forgotYourPassword: 'Esqueceu sua senha?',
  highlightInfo: '',
  iForgotMyPassword: 'Esqueci minha senha',
  ifYouTryHarder: 'Se tentar mais ',
  welcome: 'Boas-vindas',
  loginErrorPattern: 'Login obrigat\xF3rio',
  loginHint: 'Caso n\xE3o possua usu\xE1rio entre em contato com o suporte',
  loginLabel: 'Insira seu usu\xE1rio',
  loginPlaceholder: 'Insira seu usu\xE1rio de acesso',
  passwordErrorPattern: 'Senha obrigat\xF3ria',
  passwordLabel: 'Insira sua senha',
  passwordPlaceholder: 'Insira sua senha de acesso',
  customFieldErrorPattern: 'Campo customizado inv\xE1lido',
  customFieldPlaceholder: 'Por favor insira um valor',
  registerUrl: 'Novo registro',
  rememberUser: 'Lembrar usu\xE1rio',
  rememberUserHint: 'Esta op\xE7\xE3o pode ser desabilitada nas configura\xE7\xF5es do sistema',
  submitLabel: 'Acessar sistema',
  submittedLabel: 'Carregando...',
  titlePopover: 'Opa!',
  yourUserWillBeBlocked: 'sem sucesso seu usu\xE1rio ser\xE1 bloqueado e voc\xEA fica 24 horas sem poder acessar :('
};`),t()(),n(614,"p"),e(615,"Ou passando apenas as literais que deseja customizar:"),t(),n(616,"pre")(617,"code"),e(618,`const customLiterals: PoPageLoginLiterals = {
  loginPlaceholder: 'Insira seu usu\xE1rio de acesso',
  passwordPlaceholder: 'Insira sua senha de acesso',
  submitLabel: 'Acessar sistema'
};`),t()(),n(619,"p"),e(620,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),n(621,"pre")(622,"code"),e(623,`<po-page-login
  [p-literals]="customLiterals">
</po-page-login>`),t()(),n(624,"blockquote")(625,"p"),e(626,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do browser (pt, en, es).
\xC9 tamb\xE9m poss\xEDvel alternar o objeto padr\xE3o de literais atrav\xE9s do seletor de idiomas localizado na parte inferior do template,
nesse caso, h\xE1 tamb\xE9m a op\xE7\xE3o do idioma russo.`),t()()()(),n(627,"tr",13)(628,"td",14)(629,"div",15)(630,"span",16),e(631," p-loading"),o(632,"br"),t()()(),n(633,"td",17)(634,"code",26),e(635,"boolean"),t()(),n(636,"td",19)(637,"p")(638,"code"),e(639,"false"),t()()(),n(640,"td",20)(641,"em")(642,"strong"),e(643,"(opcional)"),t()(),n(644,"p"),e(645,"Habilita um estado de carregamento ao bot\xE3o de "),n(646,"em"),e(647,"login"),t(),e(648,"."),t(),n(649,"blockquote")(650,"p"),e(651,"\xC9 necess\xE1rio atribuir "),n(652,"code"),e(653,"true"),t(),e(654," \xE0 esta propriedade na fun\xE7\xE3o definida em "),n(655,"code"),e(656,"p-login-submit"),t(),e(657,"."),t()()()(),n(658,"tr",13)(659,"td",14)(660,"div",15)(661,"span",16),e(662," p-login"),o(663,"br"),t()()(),n(664,"td",17)(665,"code",21),e(666,"string"),t()(),n(667,"td",19),e(668,"-"),t(),n(669,"td",20)(670,"em")(671,"strong"),e(672,"(opcional)"),t()(),n(673,"p"),e(674,"Valor do modelo do campo de login."),t()()(),n(675,"tr",13)(676,"td",14)(677,"div",27)(678,"span",28),e(679," (p-login-change)"),o(680,"br"),t()()(),n(681,"td",17)(682,"code",29),e(683,"EventEmitter"),t()(),n(684,"td",19),e(685,"-"),t(),n(686,"td",20)(687,"em")(688,"strong"),e(689,"(opcional)"),t()(),n(690,"p"),e(691,"Evento disparado quando o usu\xE1rio alterar o input do campo login."),t(),n(692,"p"),e(693,"Esse evento receber\xE1 como par\xE2metro uma vari\xE1vel do tipo "),n(694,"code"),e(695,"string"),t(),e(696," com o texto informado no campo."),t(),n(697,"blockquote")(698,"p"),e(699,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),n(700,"code"),e(701,"p-authentication-url"),t(),e(702,"."),t()()()(),n(703,"tr",13)(704,"td",14)(705,"div",15)(706,"span",16),e(707," p-login-errors"),o(708,"br"),t()()(),n(709,"td",17)(710,"code",32),e(711,"string[]"),t()(),n(712,"td",19),e(713,"-"),t(),n(714,"td",20)(715,"em")(716,"strong"),e(717,"(opcional)"),t()(),n(718,"p"),e(719,"Atributo que recebe uma lista de erros e exibe abaixo do campo de login."),t()()(),n(720,"tr",13)(721,"td",14)(722,"div",15)(723,"span",16),e(724," p-login-pattern"),o(725,"br"),t()()(),n(726,"td",17)(727,"code",21),e(728,"string"),t()(),n(729,"td",19),e(730,"-"),t(),n(731,"td",20)(732,"em")(733,"strong"),e(734,"(opcional)"),t()(),n(735,"p"),e(736,"Express\xE3o regular para validar o campo de login, caso a express\xE3o n\xE3o seja atentida, a literal "),n(737,"code"),e(738,"loginErrorPattern"),t(),e(739,`
ser\xE1 exibida.`),t(),n(740,"p"),e(741,"Exemplos de valores v\xE1lidos:"),t(),n(742,"ul")(743,"li"),e(744,"email: "),n(745,"code"),e(746,"[expressao-regular-email]"),t()(),n(747,"li"),e(748,"cpf: "),n(749,"code"),e(750,"[expressao-regular-cpf]"),t()()(),n(751,"blockquote")(752,"p"),e(753,"Veja a propriedade "),n(754,"code"),e(755,"p-literals"),t(),e(756," para customizar a literal "),n(757,"code"),e(758,"loginErrorPattern"),t(),e(759,"."),t()()()(),n(760,"tr",13)(761,"td",14)(762,"div",27)(763,"span",28),e(764," (p-login-submit)"),o(765,"br"),t()()(),n(766,"td",17)(767,"code",29),e(768,"EventEmitter"),t()(),n(769,"td",19),e(770,"-"),t(),n(771,"td",20)(772,"p"),e(773,"Evento disparado ao submeter o formul\xE1rio de login (apertando "),n(774,"code"),e(775,"Enter"),t(),e(776," dentro dos campos ou pressionando o bot\xE3o de confirma\xE7\xE3o)."),t(),n(777,"p"),e(778,"Esse evento receber\xE1 como par\xE2metro um objeto do tipo "),n(779,"code"),e(780,"PoPageLogin"),t(),e(781," com os dados informados no formul\xE1rio."),t(),n(782,"blockquote")(783,"p"),e(784,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),n(785,"code"),e(786,"p-url-recovery"),t(),e(787,"."),t()(),n(788,"blockquote")(789,"p"),e(790,"Para mais detalhes consulte a documenta\xE7\xE3o sobre a interface "),n(791,"code"),e(792,"PoPageLogin"),t(),e(793," mais abaixo."),t()()()(),n(794,"tr",13)(795,"td",14)(796,"div",15)(797,"span",16),e(798," p-logo"),o(799,"br"),t()()(),n(800,"td",17)(801,"code",21),e(802,"string"),t()(),n(803,"td",19),e(804,"-"),t(),n(805,"td",20)(806,"em")(807,"strong"),e(808,"(opcional)"),t()(),n(809,"p"),e(810,"Caminho para a logomarca localizada na parte superior."),t(),n(811,"blockquote")(812,"p"),e(813,"Caso seja indefinida o espa\xE7o se mant\xE9m preservado por\xE9m vazio."),t()()()(),n(814,"tr",13)(815,"td",14)(816,"div",15)(817,"span",16),e(818," p-no-autocomplete-login"),o(819,"br"),t()()(),n(820,"td",17)(821,"code",26),e(822,"boolean"),t()(),n(823,"td",19)(824,"p")(825,"code"),e(826,"true"),t()()(),n(827,"td",20)(828,"em")(829,"strong"),e(830,"(opcional)"),t()(),n(831,"p"),e(832,"Define a propriedade nativa "),n(833,"code"),e(834,"autocomplete"),t(),e(835," do campo como "),n(836,"code"),e(837,"off"),t(),e(838,"."),t()()(),n(839,"tr",13)(840,"td",14)(841,"div",15)(842,"span",16),e(843," p-no-autocomplete-password"),o(844,"br"),t()()(),n(845,"td",17)(846,"code",26),e(847,"boolean"),t()(),n(848,"td",19)(849,"p")(850,"code"),e(851,"true"),t()()(),n(852,"td",20)(853,"em")(854,"strong"),e(855,"(opcional)"),t()(),n(856,"p"),e(857,"Define a propriedade nativa "),n(858,"code"),e(859,"autocomplete"),t(),e(860," do campo como "),n(861,"code"),e(862,"off"),t(),e(863,"."),t(),n(864,"blockquote")(865,"p"),e(866,"No componente "),n(867,"code"),e(868,"po-password"),t(),e(869," ser\xE1 definido como "),n(870,"code"),e(871,"new-password"),t(),e(872,"."),t()()()(),n(873,"tr",13)(874,"td",14)(875,"div",27)(876,"span",28),e(877," (p-password-change)"),o(878,"br"),t()()(),n(879,"td",17)(880,"code",29),e(881,"EventEmitter"),t()(),n(882,"td",19),e(883,"-"),t(),n(884,"td",20)(885,"em")(886,"strong"),e(887,"(opcional)"),t()(),n(888,"p"),e(889,"Evento disparado quando o usu\xE1rio alterar o input do campo password."),t(),n(890,"p"),e(891,"Esse evento receber\xE1 como par\xE2metro uma vari\xE1vel do tipo "),n(892,"code"),e(893,"string"),t(),e(894," com o texto informado no campo."),t(),n(895,"blockquote")(896,"p"),e(897,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),n(898,"code"),e(899,"p-authentication-url"),t(),e(900,"."),t()()()(),n(901,"tr",13)(902,"td",14)(903,"div",15)(904,"span",16),e(905," p-password-errors"),o(906,"br"),t()()(),n(907,"td",17)(908,"code",32),e(909,"string[]"),t()(),n(910,"td",19),e(911,"-"),t(),n(912,"td",20)(913,"em")(914,"strong"),e(915,"(opcional)"),t()(),n(916,"p"),e(917,"Atributo que recebe uma lista de erros e exibe abaixo do campo de password."),t()()(),n(918,"tr",13)(919,"td",14)(920,"div",15)(921,"span",16),e(922," p-password-pattern"),o(923,"br"),t()()(),n(924,"td",17)(925,"code",21),e(926,"string"),t()(),n(927,"td",19),e(928,"-"),t(),n(929,"td",20)(930,"em")(931,"strong"),e(932,"(opcional)"),t()(),n(933,"p"),e(934,"Express\xE3o regular para validar o campo de password, caso a express\xE3o n\xE3o seja atentida, a literal "),n(935,"code"),e(936,"passwordErrorPattern"),t(),e(937,`
ser\xE1 exibida.`),t(),n(938,"p"),e(939,"Exemplos de valores v\xE1lidos:"),t(),n(940,"ul")(941,"li"),e(942,"Apenas n\xFAmeros: "),n(943,"code"),e(944,"\\d?"),t()(),n(945,"li"),e(946,"Letras m\xEDnusculas: "),n(947,"code"),e(948,"\\z?"),t()()(),n(949,"blockquote")(950,"p"),e(951,"Veja a propriedade "),n(952,"code"),e(953,"p-literals"),t(),e(954," para customizar a literal "),n(955,"code"),e(956,"passwordErrorPattern"),t(),e(957,"."),t()()()(),n(958,"tr",13)(959,"td",14)(960,"div",15)(961,"span",16),e(962," p-product-name"),o(963,"br"),t()()(),n(964,"td",17)(965,"code",21),e(966,"string"),t()(),n(967,"td",19),e(968,"-"),t(),n(969,"td",20)(970,"em")(971,"strong"),e(972,"(opcional)"),t()(),n(973,"p"),e(974,"Texto customizado que fica entre a logo e a mensagem de boas-vindas."),t()()(),n(975,"tr",13)(976,"td",14)(977,"div",15)(978,"span",16),e(979," p-recovery"),o(980,"br"),t()()(),n(981,"td",17)(982,"code",21),e(983,"string "),t(),n(984,"code",33),e(985," Function "),t(),n(986,"code",34),e(987," PoPageLoginRecovery"),t()(),n(988,"td",19),e(989,"-"),t(),n(990,"td",20)(991,"em")(992,"strong"),e(993,"(opcional)"),t()(),n(994,"p"),e(995,"Exibe um link abaixo do formul\xE1rio de login para que os usu\xE1rios da aplica\xE7\xE3o fa\xE7am a recupera\xE7\xE3o dos dados de autentica\xE7\xE3o."),t(),n(996,"p"),e(997,"A propriedade aceita os seguintes tipos:"),t(),n(998,"ul")(999,"li")(1e3,"p")(1001,"strong"),e(1002,"String"),t(),e(1003,": informe uma url externa ou uma rota v\xE1lida;"),t()(),n(1004,"li")(1005,"p")(1006,"strong"),e(1007,"Function"),t(),e(1008,": pode-se customizar a a\xE7\xE3o. Para esta possilidade basta atribuir:"),t(),n(1009,"pre")(1010,"code"),e(1011,`<po-page-login>
[recovery]="this.myRecovery.bind(this)">
</po-page-login>`),t()()(),n(1012,"li")(1013,"p")(1014,"strong"),e(1015,"PoPageLoginRecovery"),t(),e(1016,": cria-se v\xEDnculo autom\xE1tico com o template "),n(1017,"strong"),e(1018,"po-modal-password-recovery"),t(),e(1019,`.
O objeto deve conter a `),n(1020,"strong"),e(1021,"url"),t(),e(1022," para requisi\xE7\xE3o dos recursos e pode-se definir o "),n(1023,"strong"),e(1024,"tipo"),t(),e(1025,` de modal para recupera\xE7\xE3o de senha,
`),n(1026,"strong"),e(1027,"email"),t(),e(1028," para contato e "),n(1029,"strong"),e(1030,"m\xE1scara"),t(),e(1031," do campo de telefone."),t()()()()(),n(1032,"tr",13)(1033,"td",14)(1034,"div",15)(1035,"span",16),e(1036," p-register-url"),o(1037,"br"),t()()(),n(1038,"td",17)(1039,"code",21),e(1040,"string"),t()(),n(1041,"td",19),e(1042,"-"),t(),n(1043,"td",20)(1044,"em")(1045,"strong"),e(1046,"(opcional)"),t()(),n(1047,"p"),e(1048,`Caso a aplica\xE7\xE3o tenha um link para novos cadastros, informe uma url externa ou uma rota v\xE1lida, dessa
forma ser\xE1 exibido um link abaixo do formul\xE1rio de login para os usu\xE1rios da aplica\xE7\xE3o.`),t(),n(1049,"p"),e(1050,"Exemplos de valores v\xE1lidos:"),t(),n(1051,"ul")(1052,"li")(1053,"strong"),e(1054,"local"),t(),e(1055,": "),n(1056,"code"),e(1057,"/home"),t()(),n(1058,"li")(1059,"strong"),e(1060,"url externa"),t(),e(1061,": "),n(1062,"code"),e(1063,"https://po-ui.io"),t()()(),n(1064,"blockquote")(1065,"p"),e(1066,"Veja a propriedade "),n(1067,"code"),e(1068,"p-literals"),t(),e(1069," para customizar a literal "),n(1070,"code"),e(1071,"registerUrl"),t(),e(1072,"."),t()()()(),n(1073,"tr",13)(1074,"td",14)(1075,"div",15)(1076,"span",16),e(1077," p-secondary-logo"),o(1078,"br"),t()()(),n(1079,"td",17)(1080,"code",21),e(1081,"string"),t()(),n(1082,"td",19),e(1083,"-"),t(),n(1084,"td",20)(1085,"em")(1086,"strong"),e(1087,"(opcional)"),t()(),n(1088,"p"),e(1089,"Caminho para a logomarca localizada no rodap\xE9."),t()()(),n(1090,"tr",13)(1091,"td",14)(1092,"div",15)(1093,"span",16),e(1094," p-support"),o(1095,"br"),t()()(),n(1096,"td",17)(1097,"code",21),e(1098,"string "),t(),n(1099,"code",33),e(1100," Function"),t()(),n(1101,"td",19),e(1102,"-"),t(),n(1103,"td",20)(1104,"em")(1105,"strong"),e(1106,"(opcional)"),t()(),n(1107,"p"),e(1108,"Exibe um bot\xE3o para suporte."),t(),n(1109,"p"),e(1110,"A propriedade aceita os seguintes tipos:"),t(),n(1111,"ul")(1112,"li")(1113,"strong"),e(1114,"String"),t(),e(1115,": URL externa ou uma rota v\xE1lida;"),t(),n(1116,"li")(1117,"strong"),e(1118,"Function"),t(),e(1119,": Fun\xE7\xE3o a ser disparada ao clicar no bot\xE3o de suporte;"),n(1120,"pre")(1121,"code"),e(1122,`<po-page-login>
[p-support]="this.mySupport.bind(this)">
</po-page-login>`),t()()()()()()(),n(1123,"h3"),e(1124,"Interfaces"),t(),n(1125,"h4",35)(1126,"code",5),e(1127,"PoPageLoginCustomField"),t()(),n(1128,"div",2)(1129,"p"),e(1130,"Interface com a defini\xE7\xE3o do Custom Field, podendo ser utilizado para informar um campo customizado no componente "),n(1131,"code"),e(1132,"po-page-login"),t(),e(1133,"."),t()(),n(1134,"h4",9),e(1135,"Propriedades"),t(),n(1136,"table",10)(1137,"tr",11)(1138,"th",12),e(1139,"Nome"),t(),n(1140,"th",12),e(1141,"Tipo"),t(),n(1142,"th",12),e(1143,"Descri\xE7\xE3o"),t()(),n(1144,"tr",13)(1145,"td",14)(1146,"div",15)(1147,"span",16),e(1148," errorPattern"),o(1149,"br"),t()()(),n(1150,"td",17)(1151,"code",21),e(1152,"string"),t()(),n(1153,"td",20)(1154,"em")(1155,"strong"),e(1156,"(opcional)"),t()(),n(1157,"p"),e(1158,"Mensagem que ser\xE1 exibida quando a express\xE3o regular informada na propriedade "),n(1159,"code"),e(1160,"pattern"),t(),e(1161," n\xE3o for v\xE1lida."),t()()(),n(1162,"tr",13)(1163,"td",14)(1164,"div",15)(1165,"span",16),e(1166," fieldValue"),o(1167,"br"),t()()(),n(1168,"td",17)(1169,"code",21),e(1170,"string"),t()(),n(1171,"td",20)(1172,"em")(1173,"strong"),e(1174,"(opcional)"),t()(),n(1175,"p"),e(1176,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na
lista do componente `),n(1177,"code"),e(1178,"po-combo"),t(),e(1179,", esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),t()()(),n(1180,"tr",13)(1181,"td",14)(1182,"div",15)(1183,"span",16),e(1184," options"),o(1185,"br"),t()()(),n(1186,"td",17)(1187,"code",36),e(1188,"Array<PoSelectOption>"),t()(),n(1189,"td",20)(1190,"em")(1191,"strong"),e(1192,"(opcional)"),t()(),n(1193,"p"),e(1194,"Lista de op\xE7\xF5es de um "),n(1195,"code"),e(1196,"po-select"),t(),e(1197,"."),t()()(),n(1198,"tr",13)(1199,"td",14)(1200,"div",15)(1201,"span",16),e(1202," pattern"),o(1203,"br"),t()()(),n(1204,"td",17)(1205,"code",21),e(1206,"string"),t()(),n(1207,"td",20)(1208,"em")(1209,"strong"),e(1210,"(opcional)"),t()(),n(1211,"p"),e(1212,`Express\xE3o regular para validar o campo customizado, caso a express\xE3o n\xE3o seja atendida a literal informada na
propriedade `),n(1213,"code"),e(1214,"errorPattern"),t(),e(1215," ser\xE1 exibida."),t()()(),n(1216,"tr",13)(1217,"td",14)(1218,"div",15)(1219,"span",16),e(1220," placeholder"),o(1221,"br"),t()()(),n(1222,"td",17)(1223,"code",21),e(1224,"string"),t()(),n(1225,"td",20)(1226,"em")(1227,"strong"),e(1228,"(opcional)"),t()(),n(1229,"p"),e(1230,"Mensagem que ser\xE1 exibida enquanto o campo customizado n\xE3o estiver preenchido."),t()()(),n(1231,"tr",13)(1232,"td",14)(1233,"div",15)(1234,"span",16),e(1235," property"),o(1236,"br"),t()()(),n(1237,"td",17)(1238,"code",21),e(1239,"string"),t()(),n(1240,"td",20)(1241,"p"),e(1242,"Nome da propriedade que ser\xE1 utilizado no campo customizado."),t()()(),n(1243,"tr",13)(1244,"td",14)(1245,"div",15)(1246,"span",16),e(1247," url"),o(1248,"br"),t()()(),n(1249,"td",17)(1250,"code",21),e(1251,"string"),t()(),n(1252,"td",20)(1253,"em")(1254,"strong"),e(1255,"(opcional)"),t()(),n(1256,"p"),e(1257,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da
lista de itens do componente `),n(1258,"code"),e(1259,"po-combo"),t(),e(1260,"."),t()()(),n(1261,"tr",13)(1262,"td",14)(1263,"div",15)(1264,"span",16),e(1265," value"),o(1266,"br"),t()()(),n(1267,"td",17)(1268,"code",21),e(1269,"string "),t(),n(1270,"code",25),e(1271," number"),t()(),n(1272,"td",20)(1273,"em")(1274,"strong"),e(1275,"(opcional)"),t()(),n(1276,"p"),e(1277,"Valor do campo customizado."),t()()()(),n(1278,"h4",35)(1279,"code",5),e(1280,"PoPageLoginLiterals"),t()(),n(1281,"div",2)(1282,"p"),e(1283,"Interface para defini\xE7\xE3o das literais usadas no "),n(1284,"code"),e(1285,"po-page-login"),t(),e(1286,"."),t()(),n(1287,"h4",9),e(1288,"Propriedades"),t(),n(1289,"table",10)(1290,"tr",11)(1291,"th",12),e(1292,"Nome"),t(),n(1293,"th",12),e(1294,"Tipo"),t(),n(1295,"th",12),e(1296,"Descri\xE7\xE3o"),t()(),n(1297,"tr",13)(1298,"td",14)(1299,"div",15)(1300,"span",16),e(1301," attempts"),o(1302,"br"),t()()(),n(1303,"td",17)(1304,"code",21),e(1305,"string"),t()(),n(1306,"td",20)(1307,"em")(1308,"strong"),e(1309,"(opcional)"),t()(),n(1310,"p"),e(1311,"Texto que informa a quantidade de tentativas restantes no popover de aviso de bloqueio."),t()()(),n(1312,"tr",13)(1313,"td",14)(1314,"div",15)(1315,"span",16),e(1316," createANewPasswordNow"),o(1317,"br"),t()()(),n(1318,"td",17)(1319,"code",21),e(1320,"string"),t()(),n(1321,"td",20)(1322,"em")(1323,"strong"),e(1324,"(opcional)"),t()(),n(1325,"p"),e(1326,"Texto exibido no popover de aviso de bloqueio, que orienta o usu\xE1rio, caso ele tenha esquecido a senha, a criar uma nova senha."),t()()(),n(1327,"tr",13)(1328,"td",14)(1329,"div",15)(1330,"span",16),e(1331," customFieldErrorPattern"),o(1332,"br"),t()()(),n(1333,"td",17)(1334,"code",21),e(1335,"string"),t()(),n(1336,"td",20)(1337,"em")(1338,"strong"),e(1339,"(opcional)"),t()(),n(1340,"p"),e(1341,"Mensagem de erro apresentada quando o campo customizado est\xE1 inv\xE1lido"),t()()(),n(1342,"tr",13)(1343,"td",14)(1344,"div",15)(1345,"span",16),e(1346," customFieldPlaceholder"),o(1347,"br"),t()()(),n(1348,"td",17)(1349,"code",21),e(1350,"string"),t()(),n(1351,"td",20)(1352,"em")(1353,"strong"),e(1354,"(opcional)"),t()(),n(1355,"p"),e(1356,"Placeholder para o campo customizado."),t()()(),n(1357,"tr",13)(1358,"td",14)(1359,"div",15)(1360,"span",16),e(1361," forgotPassword"),o(1362,"br"),t()()(),n(1363,"td",17)(1364,"code",21),e(1365,"string"),t()(),n(1366,"td",20)(1367,"em")(1368,"strong"),e(1369,"(opcional)"),t()(),n(1370,"p"),e(1371,"Texto de ajuda para recupera\xE7\xE3o dos dados de acesso."),t()()(),n(1372,"tr",13)(1373,"td",14)(1374,"div",15)(1375,"span",16),e(1376," forgotYourPassword"),o(1377,"br"),t()()(),n(1378,"td",17)(1379,"code",21),e(1380,"string"),t()(),n(1381,"td",20)(1382,"em")(1383,"strong"),e(1384,"(opcional)"),t()(),n(1385,"p"),e(1386,"Texto que questiona o esquecimento da senha no popover de aviso de bloqueio."),t()()(),n(1387,"tr",13)(1388,"td",14)(1389,"div",15)(1390,"span",16),e(1391," highlightInfo"),o(1392,"br"),t()()(),n(1393,"td",17)(1394,"code",21),e(1395,"string"),t()(),n(1396,"td",20)(1397,"em")(1398,"strong"),e(1399,"(opcional)"),t()(),n(1400,"p"),e(1401,"Texto de destaque sobreposto \xE0 imagem de destaque. Essa op\xE7\xE3o \xE9 utilizada em conjunto com o atributo "),n(1402,"code"),e(1403,"p-background"),t(),e(1404,"."),t()()(),n(1405,"tr",13)(1406,"td",14)(1407,"div",15)(1408,"span",16),e(1409," iForgotMyPassword"),o(1410,"br"),t()()(),n(1411,"td",17)(1412,"code",21),e(1413,"string"),t()(),n(1414,"td",20)(1415,"em")(1416,"strong"),e(1417,"(opcional)"),t()(),n(1418,"p"),e(1419,"Texto do link de 'esqueci minha senha' exibido no popover de aviso de bloqueio."),t()()(),n(1420,"tr",13)(1421,"td",14)(1422,"div",15)(1423,"span",16),e(1424," ifYouTryHarder"),o(1425,"br"),t()()(),n(1426,"td",17)(1427,"code",21),e(1428,"string"),t()(),n(1429,"td",20)(1430,"em")(1431,"strong"),e(1432,"(opcional)"),t()(),n(1433,"p"),e(1434,"Texto de aviso de tentativas exibido no popover de aviso de bloqueio."),t()()(),n(1435,"tr",13)(1436,"td",14)(1437,"div",15)(1438,"span",16),e(1439," loginErrorPattern"),o(1440,"br"),t()()(),n(1441,"td",17)(1442,"code",21),e(1443,"string"),t()(),n(1444,"td",20)(1445,"em")(1446,"strong"),e(1447,"(opcional)"),t()(),n(1448,"p"),e(1449,"Mensagem de erro apresentada quando o campo de login est\xE1 inv\xE1lido."),t()()(),n(1450,"tr",13)(1451,"td",14)(1452,"div",15)(1453,"span",16),e(1454," loginHint"),o(1455,"br"),t()()(),n(1456,"td",17)(1457,"code",21),e(1458,"string"),t()(),n(1459,"td",20)(1460,"em")(1461,"strong"),e(1462,"(opcional)"),t()(),n(1463,"p"),e(1464,"Texto exibido como dica para o campo de login."),t()()(),n(1465,"tr",13)(1466,"td",14)(1467,"div",15)(1468,"span",16),e(1469," loginLabel"),o(1470,"br"),t()()(),n(1471,"td",17)(1472,"code",21),e(1473,"string"),t()(),n(1474,"td",20)(1475,"em")(1476,"strong"),e(1477,"(opcional)"),t()(),n(1478,"p"),e(1479,"Texto exibido como label do campo de login."),t()()(),n(1480,"tr",13)(1481,"td",14)(1482,"div",15)(1483,"span",16),e(1484," loginPlaceholder"),o(1485,"br"),t()()(),n(1486,"td",17)(1487,"code",21),e(1488,"string"),t()(),n(1489,"td",20)(1490,"em")(1491,"strong"),e(1492,"(opcional)"),t()(),n(1493,"p"),e(1494,"Placeholder do campo de login."),t()()(),n(1495,"tr",13)(1496,"td",14)(1497,"div",15)(1498,"span",16),e(1499," passwordErrorPattern"),o(1500,"br"),t()()(),n(1501,"td",17)(1502,"code",21),e(1503,"string"),t()(),n(1504,"td",20)(1505,"em")(1506,"strong"),e(1507,"(opcional)"),t()(),n(1508,"p"),e(1509,"Mensagem de erro apresentada quando o campo de password est\xE1 inv\xE1lido."),t()()(),n(1510,"tr",13)(1511,"td",14)(1512,"div",15)(1513,"span",16),e(1514," passwordLabel"),o(1515,"br"),t()()(),n(1516,"td",17)(1517,"code",21),e(1518,"string"),t()(),n(1519,"td",20)(1520,"em")(1521,"strong"),e(1522,"(opcional)"),t()(),n(1523,"p"),e(1524,"Texto exibido como label do campo de password."),t()()(),n(1525,"tr",13)(1526,"td",14)(1527,"div",15)(1528,"span",16),e(1529," passwordPlaceholder"),o(1530,"br"),t()()(),n(1531,"td",17)(1532,"code",21),e(1533,"string"),t()(),n(1534,"td",20)(1535,"em")(1536,"strong"),e(1537,"(opcional)"),t()(),n(1538,"p"),e(1539,"Placeholder do campo de password."),t()()(),n(1540,"tr",13)(1541,"td",14)(1542,"div",15)(1543,"span",16),e(1544," registerUrl"),o(1545,"br"),t()()(),n(1546,"td",17)(1547,"code",21),e(1548,"string"),t()(),n(1549,"td",20)(1550,"em")(1551,"strong"),e(1552,"(opcional)"),t()(),n(1553,"p"),e(1554,"Texto exibido no link de novo cadastro."),t()()(),n(1555,"tr",13)(1556,"td",14)(1557,"div",15)(1558,"span",16),e(1559," rememberUser"),o(1560,"br"),t()()(),n(1561,"td",17)(1562,"code",21),e(1563,"string"),t()(),n(1564,"td",20)(1565,"em")(1566,"strong"),e(1567,"(opcional)"),t()(),n(1568,"p"),e(1569,'Texto exibido na fun\xE7\xE3o "Lembrar usu\xE1rio".'),t()()(),n(1570,"tr",13)(1571,"td",14)(1572,"div",15)(1573,"span",16),e(1574," rememberUserHint"),o(1575,"br"),t()()(),n(1576,"td",17)(1577,"code",21),e(1578,"string"),t()(),n(1579,"td",20)(1580,"em")(1581,"strong"),e(1582,"(opcional)"),t()(),n(1583,"p"),e(1584,'Texto exibido como dica da fun\xE7\xE3o "Lembrar usu\xE1rio"'),t()()(),n(1585,"tr",13)(1586,"td",14)(1587,"div",15)(1588,"span",16),e(1589," submitLabel"),o(1590,"br"),t()()(),n(1591,"td",17)(1592,"code",21),e(1593,"string"),t()(),n(1594,"td",20)(1595,"em")(1596,"strong"),e(1597,"(opcional)"),t()(),n(1598,"p"),e(1599,"Texto exibido no bot\xE3o de confirma\xE7\xE3o da p\xE1gina de login."),t()()(),n(1600,"tr",13)(1601,"td",14)(1602,"div",15)(1603,"span",16),e(1604," submittedLabel"),o(1605,"br"),t()()(),n(1606,"td",17)(1607,"code",21),e(1608,"string"),t()(),n(1609,"td",20)(1610,"em")(1611,"strong"),e(1612,"(opcional)"),t()(),n(1613,"p"),e(1614,"Texto exibido no bot\xE3o de confirma\xE7\xE3o da p\xE1gina de login quando estiver em estado de carregamento."),t()()(),n(1615,"tr",13)(1616,"td",14)(1617,"div",15)(1618,"span",16),e(1619," support"),o(1620,"br"),t()()(),n(1621,"td",17)(1622,"code",21),e(1623,"string"),t()(),n(1624,"td",20)(1625,"em")(1626,"strong"),e(1627,"(opcional)"),t()(),n(1628,"p"),e(1629,"Label do bot\xE3o de suporte."),t()()(),n(1630,"tr",13)(1631,"td",14)(1632,"div",15)(1633,"span",16),e(1634," titlePopover"),o(1635,"br"),t()()(),n(1636,"td",17)(1637,"code",21),e(1638,"string"),t()(),n(1639,"td",20)(1640,"em")(1641,"strong"),e(1642,"(opcional)"),t()(),n(1643,"p"),e(1644,"T\xEDtulo do popover para aviso de bloqueio."),t()()(),n(1645,"tr",13)(1646,"td",14)(1647,"div",15)(1648,"span",16),e(1649," welcome"),o(1650,"br"),t()()(),n(1651,"td",17)(1652,"code",21),e(1653,"string"),t()(),n(1654,"td",20)(1655,"em")(1656,"strong"),e(1657,"(opcional)"),t()(),n(1658,"p"),e(1659,'Mensagem de "Boas-vindas" para o usu\xE1rio que aparece acima dos campos de entrada.'),t()()(),n(1660,"tr",13)(1661,"td",14)(1662,"div",15)(1663,"span",16),e(1664," yourUserWillBeBlocked"),o(1665,"br"),t()()(),n(1666,"td",17)(1667,"code",21),e(1668,"string"),t()(),n(1669,"td",20)(1670,"em")(1671,"strong"),e(1672,"(opcional)"),t()(),n(1673,"p"),e(1674,"Texto que informa ao usu\xE1rio que o mesmo ser\xE1 bloqueado e por quanto tempo no popover de aviso de bloqueio."),t()()()(),n(1675,"h4",35)(1676,"code",5),e(1677,"PoPageLoginRecovery"),t()(),n(1678,"div",2)(1679,"p"),e(1680,"Interface para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha no "),n(1681,"code"),e(1682,"po-modal-password-recovery"),t(),e(1683,"."),t()(),n(1684,"h4",9),e(1685,"Propriedades"),t(),n(1686,"table",10)(1687,"tr",11)(1688,"th",12),e(1689,"Nome"),t(),n(1690,"th",12),e(1691,"Tipo"),t(),n(1692,"th",12),e(1693,"Descri\xE7\xE3o"),t()(),n(1694,"tr",13)(1695,"td",14)(1696,"div",15)(1697,"span",16),e(1698," contactMail"),o(1699,"br"),t()()(),n(1700,"td",17)(1701,"code",21),e(1702,"string"),t()(),n(1703,"td",20)(1704,"em")(1705,"strong"),e(1706,"(opcional)"),t()(),n(1707,"p"),e(1708,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),t()()(),n(1709,"tr",13)(1710,"td",14)(1711,"div",15)(1712,"span",16),e(1713," phoneMask"),o(1714,"br"),t()()(),n(1715,"td",17)(1716,"code",21),e(1717,"string"),t()(),n(1718,"td",20)(1719,"em")(1720,"strong"),e(1721,"(opcional)"),t()(),n(1722,"p"),e(1723,"Defini\xE7\xE3o da m\xE1scara do campo de telefone."),t()()(),n(1724,"tr",13)(1725,"td",14)(1726,"div",15)(1727,"span",16),e(1728," type"),o(1729,"br"),t()()(),n(1730,"td",17)(1731,"code",37),e(1732,"PoModalPasswordRecoveryType"),t()(),n(1733,"td",20)(1734,"em")(1735,"strong"),e(1736,"(opcional)"),t()(),n(1737,"p"),e(1738,"Enum para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha "),n(1739,"a",38),e(1740,"PoModalPasswordRecoveryType"),t(),e(1741,"."),t(),n(1742,"blockquote")(1743,"p"),e(1744,"Caso n\xE3o seja definido valor se assume o padr\xE3o "),n(1745,"code"),e(1746,"PoModalPasswordRecoveryType.Email"),t(),e(1747,"."),t()()()(),n(1748,"tr",13)(1749,"td",14)(1750,"div",15)(1751,"span",16),e(1752," url"),o(1753,"br"),t()()(),n(1754,"td",17)(1755,"code",21),e(1756,"string"),t()(),n(1757,"td",20)(1758,"p"),e(1759,"Endpoint usado pelo template "),n(1760,"strong"),e(1761,"PoModalPasswordRecovery"),t(),e(1762," para requisi\xE7\xE3o do recurso."),t(),n(1763,"blockquote")(1764,"p"),e(1765,"Saiba mais em "),n(1766,"a",38),e(1767,"PoModalPasswordRecovery"),t(),e(1768,"."),t()()()()(),n(1769,"h4",35)(1770,"code",5),e(1771,"PoPageLogin"),t()(),n(1772,"div",2)(1773,"p"),e(1774,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),n(1775,"code"),e(1776,"po-page-login"),t(),e(1777,"."),t()(),n(1778,"h4",9),e(1779,"Propriedades"),t(),n(1780,"table",10)(1781,"tr",11)(1782,"th",12),e(1783,"Nome"),t(),n(1784,"th",12),e(1785,"Tipo"),t(),n(1786,"th",12),e(1787,"Descri\xE7\xE3o"),t()(),n(1788,"tr",13)(1789,"td",14)(1790,"div",15)(1791,"span",16),e(1792," login"),o(1793,"br"),t()()(),n(1794,"td",17)(1795,"code",21),e(1796,"string"),t()(),n(1797,"td",20)(1798,"p"),e(1799,"Login preenchido pelo usu\xE1rio."),t()()(),n(1800,"tr",13)(1801,"td",14)(1802,"div",15)(1803,"span",16),e(1804," password"),o(1805,"br"),t()()(),n(1806,"td",17)(1807,"code",21),e(1808,"string"),t()(),n(1809,"td",20)(1810,"p"),e(1811,"Senha preenchida pelo usu\xE1rio, a mesma ser\xE1 convertida para [hash/md5] antes de ser enviada para a aplica\xE7\xE3o."),t()()(),n(1812,"tr",13)(1813,"td",14)(1814,"div",15)(1815,"span",16),e(1816," rememberUser"),o(1817,"br"),t()()(),n(1818,"td",17)(1819,"code",26),e(1820,"boolean"),t()(),n(1821,"td",20)(1822,"p"),e(1823,"Essa propriedade informa se o usu\xE1rio quer que seus dados sejam lembrados em um acesso futuro."),t()()()(),n(1824,"h3"),e(1825,"Enums"),t(),n(1826,"h4",4)(1827,"code",5),e(1828,"PoPageLoginAuthenticationType"),t()(),n(1829,"div",2)(1830,"p")(1831,"em"),e(1832,"Enum"),t(),e(1833," para defini\xE7\xE3o do tipo de autentica\xE7\xE3o."),t()(),n(1834,"h4",9),e(1835,"Propriedades"),t(),n(1836,"table",10)(1837,"tr",11)(1838,"th",12),e(1839,"Nome"),t(),n(1840,"th",12),e(1841,"Descri\xE7\xE3o"),t()(),n(1842,"tr",13)(1843,"td",14)(1844,"div",15)(1845,"span",16),e(1846," Basic"),o(1847,"br"),t()()(),n(1848,"td",20)(1849,"p"),e(1850,"Autentica\xE7\xE3o Basic"),t()()(),n(1851,"tr",13)(1852,"td",14)(1853,"div",15)(1854,"span",16),e(1855," Bearer"),o(1856,"br"),t()()(),n(1857,"td",20)(1858,"p"),e(1859,"Autentica\xE7\xE3o Bearer"),t()()()()())},dependencies:[C],encapsulation:2})}return r})();var he=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,l){this.route=s,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let l=s.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||r)(w(K),w(X))};static \u0275cmp=b({type:r,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title"," Page Login",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),o(3,"sample-po-page-login-doc"),t(),n(4,"po-tab",3),o(5,"sample-po-page-login-basic-view")(6,"sample-po-page-login-labs-view")(7,"sample-po-page-login-human-resources-view")(8,"sample-po-page-login-automatic-service-view"),t()()()),l&2&&(h("p-actions",i.actions),p(2),h("p-active",i.activeTab.includes("doc")),p(2),h("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[ie,P,f,pe,me,ce,Ee,Se],encapsulation:2})}return r})();var Be=[{path:"",component:he}],xe=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=D({type:r});static \u0275inj=A({imports:[R.forChild(Be),R]})}return r})();var ut=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=D({type:r});static \u0275inj=A({imports:[le,xe]})}return r})();export{ut as DocPoPageLoginModule};
