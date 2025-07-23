import{$ as F,$a as T,$c as se,Ca as O,Cd as le,Da as R,Dc as ie,Ea as D,F as u,Fa as H,G as g,Ga as e,Ia as M,Jc as re,Ka as C,La as w,Lb as z,Ma as S,Mb as G,Nb as U,Oa as ee,Ob as j,Od as me,Pa as q,Pb as Q,Qd as de,T as p,U as V,Wb as ne,Xd as b,Ya as te,Yb as oe,Yd as x,Zb as $,_ as c,_b as Y,bb as W,ea as A,ha as d,he as P,ka as _,md as Z,na as n,oa as t,oc as J,pa as s,pe as ce,re as y,se as ue,ta as k,ua as h,va as E,vc as ae,y as I,yd as pe}from"./chunk-ODUOVNEW.js";var ge=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-basic"]],standalone:!1,decls:1,vars:0,template:function(i,o){i&1&&s(0,"po-page-change-password")},dependencies:[P],encapsulation:2})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(s(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Change Password Basic"),t(),n(4,"a",2),h("click",function(){return o.toggleSampleCodeTabs()}),s(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-page-change-password></po-page-change-password>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-basic',
  templateUrl: './sample-po-page-change-password-basic.component.html',
  standalone: false
})
export class SamplePoPageChangePasswordBasicComponent {}
`),t()()()()(),n(21,"div",10),s(22,"sample-po-page-change-password-basic"),t(),s(23,"hr")),i&2&&(p(5),_("po-icon "+o.sampleCodeButtonIcon),p(),M(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",q(4,qe,o.hideSampleCodeTabs)))},dependencies:[T,y,b,x,ge],encapsulation:2})}return a})();var Pe=(()=>{class a{poDialog;changePassword;hideCurrentPassword;logo;recovery;requirement;requirements;secondaryLogo;urlBack;urlHome;constructor(r){this.poDialog=r}ngOnInit(){this.restore()}addRequirement(){this.requirements=[...this.requirements,this.requirement],this.requirement={requirement:"",status:!1}}restore(){this.hideCurrentPassword=!1,this.logo=void 0,this.urlBack="",this.urlHome="",this.recovery="",this.requirement={requirement:"",status:!1},this.requirements=[],this.secondaryLogo=void 0}submit(r){this.poDialog.alert({title:"Authenticate",message:JSON.stringify(r),ok:()=>this.changePassword.openConfirmation()})}static \u0275fac=function(i){return new(i||a)(V(re))};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-labs"]],viewQuery:function(i,o){if(i&1&&O(P,7),i&2){let l;R(l=D())&&(o.changePassword=l.first)}},standalone:!1,decls:25,vars:16,consts:[["f","ngForm"],["fRequirements","ngForm"],[3,"p-submit","p-hide-current-password","p-logo","p-recovery","p-requirements","p-secondary-logo","p-url-back","p-url-home"],["p-label","Properties"],[1,"po-row"],["name","urlHome","p-label","Url home",1,"po-md-6",3,"ngModelChange","ngModel"],["name","recovery","p-label","Recovery",1,"po-md-6",3,"ngModelChange","ngModel"],["name","urlBack","p-label","Url back",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-label","Logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-label","Secondary logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","hideCurrentPassword","p-label","Hide current password",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","requirement","p-label","Requirement","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","requirementStatus","p-label","Requirement Status",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Password Requirement",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(i,o){if(i&1){let l=k();n(0,"po-page-change-password",2),h("p-submit",function(m){return u(l),g(o.submit(m))}),t(),s(1,"po-divider",3),n(2,"form",null,0)(4,"div",4)(5,"po-input",5),S("ngModelChange",function(m){return u(l),w(o.urlHome,m)||(o.urlHome=m),g(m)}),t(),n(6,"po-input",6),S("ngModelChange",function(m){return u(l),w(o.recovery,m)||(o.recovery=m),g(m)}),t()(),n(7,"div",4)(8,"po-input",7),S("ngModelChange",function(m){return u(l),w(o.urlBack,m)||(o.urlBack=m),g(m)}),t(),n(9,"po-input",8),S("ngModelChange",function(m){return u(l),w(o.logo,m)||(o.logo=m),g(m)}),t()(),n(10,"div",4)(11,"po-input",9),S("ngModelChange",function(m){return u(l),w(o.secondaryLogo,m)||(o.secondaryLogo=m),g(m)}),t(),n(12,"po-switch",10),S("ngModelChange",function(m){return u(l),w(o.hideCurrentPassword,m)||(o.hideCurrentPassword=m),g(m)}),t()(),s(13,"br")(14,"hr"),n(15,"form",null,1)(17,"div",4)(18,"po-input",11),S("ngModelChange",function(m){return u(l),w(o.requirement.requirement,m)||(o.requirement.requirement=m),g(m)}),t(),n(19,"po-switch",12),S("ngModelChange",function(m){return u(l),w(o.requirement.status,m)||(o.requirement.status=m),g(m)}),t()(),n(20,"div",4)(21,"po-button",13),h("p-click",function(){return u(l),g(o.addRequirement())}),t()()(),s(22,"hr"),n(23,"div",4)(24,"po-button",14),h("p-click",function(){return u(l),g(o.restore())}),t()()()}if(i&2){let l=H(16);d("p-hide-current-password",o.hideCurrentPassword)("p-logo",o.logo)("p-recovery",o.recovery)("p-requirements",o.requirements)("p-secondary-logo",o.secondaryLogo)("p-url-back",o.urlBack)("p-url-home",o.urlHome),p(5),C("ngModel",o.urlHome),p(),C("ngModel",o.recovery),p(2),C("ngModel",o.urlBack),p(),C("ngModel",o.logo),p(2),C("ngModel",o.secondaryLogo),p(),C("ngModel",o.hideCurrentPassword),p(6),C("ngModel",o.requirement.requirement),p(),C("ngModel",o.requirement.status),p(2),d("p-disabled",l.form.invalid)}},dependencies:[Q,z,G,j,U,J,Y,Z,se,P],encapsulation:2})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(s(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Change Password Labs"),t(),n(4,"a",2),h("click",function(){return o.toggleSampleCodeTabs()}),s(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-page-change-password
  [p-hide-current-password]="hideCurrentPassword"
  [p-logo]="logo"
  [p-recovery]="recovery"
  [p-requirements]="requirements"
  [p-secondary-logo]="secondaryLogo"
  [p-url-back]="urlBack"
  [p-url-home]="urlHome"
  (p-submit)="submit($event)"
>
</po-page-change-password>

<po-divider p-label="Properties"></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="urlHome" [(ngModel)]="urlHome" p-label="Url home"> </po-input>

    <po-input class="po-md-6" name="recovery" [(ngModel)]="recovery" p-label="Recovery"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="urlBack" [(ngModel)]="urlBack" p-label="Url back"> </po-input>

    <po-input class="po-lg-6" name="logo" [(ngModel)]="logo" p-clean p-label="Logo"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="secondaryLogo" [(ngModel)]="secondaryLogo" p-clean p-label="Secondary logo">
    </po-input>

    <po-switch
      class="po-lg-6"
      name="hideCurrentPassword"
      [(ngModel)]="hideCurrentPassword"
      p-label="Hide current password"
    >
    </po-switch>
  </div>

  <br />

  <hr />

  <form #fRequirements="ngForm">
    <div class="po-row">
      <po-input
        class="po-md-6"
        name="requirement"
        [(ngModel)]="requirement.requirement"
        p-label="Requirement"
        p-required
      >
      </po-input>

      <po-switch class="po-md-6" name="requirementStatus" [(ngModel)]="requirement.status" p-label="Requirement Status">
      </po-switch>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-6 po-lg-3"
        p-label="Add Password Requirement"
        [p-disabled]="fRequirements.form.invalid"
        (p-click)="addRequirement()"
      >
      </po-button>
    </div>
  </form>

  <hr />

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import { PoDialogService } from '@po-ui/ng-components';
import {
  PoPageChangePassword,
  PoPageChangePasswordComponent,
  PoPageChangePasswordRequirement
} from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-change-password-labs',
  templateUrl: './sample-po-page-change-password-labs.component.html',
  standalone: false
})
export class SamplePoPageChangePasswordLabsComponent implements OnInit {
  @ViewChild(PoPageChangePasswordComponent, { static: true }) changePassword: PoPageChangePasswordComponent;

  hideCurrentPassword: boolean;
  logo: string;
  recovery: string;
  requirement: PoPageChangePasswordRequirement;
  requirements: Array<PoPageChangePasswordRequirement>;
  secondaryLogo: string;
  urlBack: string;
  urlHome: string;

  constructor(private poDialog: PoDialogService) {}

  ngOnInit() {
    this.restore();
  }

  addRequirement() {
    this.requirements = [...this.requirements, this.requirement];
    this.requirement = { requirement: '', status: false };
  }

  restore() {
    this.hideCurrentPassword = false;
    this.logo = undefined;
    this.urlBack = '';
    this.urlHome = '';
    this.recovery = '';
    this.requirement = { requirement: '', status: false };
    this.requirements = [];
    this.secondaryLogo = undefined;
  }

  submit(formData: PoPageChangePassword) {
    this.poDialog.alert({
      title: 'Authenticate',
      message: JSON.stringify(formData),
      ok: () => this.changePassword.openConfirmation()
    });
  }
}
`),t()()()()(),n(21,"div",10),s(22,"sample-po-page-change-password-labs"),t(),s(23,"hr")),i&2&&(p(5),_("po-icon "+o.sampleCodeButtonIcon),p(),M(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",q(4,Oe,o.hideSampleCodeTabs)))},dependencies:[T,y,b,x,Pe],encapsulation:2})}return a})();function De(a,X){if(a&1){let r=k();n(0,"po-page-edit",3)(1,"form",null,1)(3,"div",4)(4,"div",4),s(5,"po-input",5),n(6,"po-datepicker",6),S("ngModelChange",function(o){u(r);let l=E();return w(l.birthday,o)||(l.birthday=o),g(o)}),t(),s(7,"po-input",7),t(),n(8,"div",4)(9,"po-select",8),S("ngModelChange",function(o){u(r);let l=E();return w(l.country,o)||(l.country=o),g(o)}),t(),n(10,"po-select",9),S("ngModelChange",function(o){u(r);let l=E();return w(l.city,o)||(l.city=o),g(o)}),t(),s(11,"po-input",10),t(),s(12,"po-divider",11),n(13,"po-button",12),h("p-click",function(){u(r);let o=E();return g(o.showChangePasswordScreen())}),t()()()()}if(a&2){let r=E();d("p-breadcrumb",r.breadcrumb),p(5),d("ngModel",r.fullName),p(),C("ngModel",r.birthday),p(),d("ngModel",r.email),p(2),C("ngModel",r.country),d("p-options",r.countryOptions),p(),C("ngModel",r.city),d("p-options",r.cityOptions),p(),d("ngModel",r.phoneNumber)}}function Be(a,X){if(a&1){let r=k();n(0,"po-page-change-password",13),h("p-submit",function(){u(r);let o=E();return g(o.onSubmit())}),t()}if(a&2){let r=E();d("p-url-back",r.url)("p-url-home",r.url)}}var we=(()=>{class a{changePassword;birthday;changePasswordScreen;city;country;email;fullName;phoneNumber;url;breadcrumb={items:[{label:"Home",link:"/documentation/po-page-change-password"},{label:"Profile"}]};cityOptions=[{label:"S\xE3o Paulo",value:"sp"}];countryOptions=[{label:"Brazil",value:"br"}];ngOnInit(){this.initialize()}initialize(){this.birthday="1991-11-28T00:00:00-02:00",this.changePasswordScreen=!1,this.city="sp",this.country="br",this.email="natasha.romanova@mail.com.br",this.fullName="Natasha Romanova",this.phoneNumber="119999999999",this.url="/home"}onSubmit(){this.changePassword.openConfirmation()}showChangePasswordScreen(){this.changePasswordScreen=!0}showProfileScreen(){this.changePasswordScreen=!1}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-modify"]],viewQuery:function(i,o){if(i&1&&O(P,5),i&2){let l;R(l=D())&&(o.changePassword=l.first)}},standalone:!1,decls:3,vars:2,consts:[["changePasswordBlock",""],["formEditUser","ngForm"],["p-title","User Profile",3,"p-breadcrumb",4,"ngIf","ngIfElse"],["p-title","User Profile",3,"p-breadcrumb"],[1,"po-row"],["name","fullName","p-label","Name",1,"po-md-12",3,"ngModel"],["name","birthday","p-clean","","p-format","dd/mm/yyyy","p-label","Birthday Date","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-label","Email",1,"po-md-6",3,"ngModel"],["name","country","p-disabled","","p-label","Country",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","city","p-disabled","","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","phoneNumber","p-label","Phone Number","p-mask","(99)99999-9999",1,"po-md-12",3,"ngModel"],["p-label","Change Password",1,"po-md-12","po-mt-3"],["p-label","Change Your Password",1,"po-pb-3","po-pt-3","po-md-3",3,"p-click"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-submit","p-url-back","p-url-home"]],template:function(i,o){if(i&1&&A(0,De,14,9,"po-page-edit",2)(1,Be,1,2,"ng-template",null,0,te),i&2){let l=H(2);d("ngIf",!o.changePasswordScreen)("ngIfElse",l)}},dependencies:[W,Q,z,G,j,U,J,Y,ie,Z,pe,de,P],encapsulation:2})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-modify-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(s(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Change Password Modify"),t(),n(4,"a",2),h("click",function(){return o.toggleSampleCodeTabs()}),s(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.html"),t(),n(13,"pre",7),e(14,`<po-page-edit
  *ngIf="!changePasswordScreen; else changePasswordBlock"
  p-title="User Profile"
  [p-breadcrumb]="breadcrumb"
>
  <form #formEditUser="ngForm">
    <div class="po-row">
      <div class="po-row">
        <po-input class="po-md-12" name="fullName" [ngModel]="fullName" p-label="Name"> </po-input>

        <po-datepicker
          class="po-md-6"
          name="birthday"
          [(ngModel)]="birthday"
          p-clean
          p-format="dd/mm/yyyy"
          p-label="Birthday Date"
          p-required
        >
        </po-datepicker>

        <po-input class="po-md-6" name="email" [ngModel]="email" p-label="Email"> </po-input>
      </div>

      <div class="po-row">
        <po-select
          class="po-md-6"
          name="country"
          [(ngModel)]="country"
          p-disabled
          p-label="Country"
          [p-options]="countryOptions"
        >
        </po-select>

        <po-select class="po-md-6" name="city" [(ngModel)]="city" p-disabled p-label="City" [p-options]="cityOptions">
        </po-select>

        <po-input
          class="po-md-12"
          name="phoneNumber"
          [ngModel]="phoneNumber"
          p-label="Phone Number"
          p-mask="(99)99999-9999"
        >
        </po-input>
      </div>

      <po-divider class="po-md-12 po-mt-3" p-label="Change Password"> </po-divider>

      <po-button class="po-pb-3 po-pt-3 po-md-3" p-label="Change Your Password" (p-click)="showChangePasswordScreen()">
      </po-button>
    </div>
  </form>
</po-page-edit>

<ng-template #changePasswordBlock>
  <po-page-change-password
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    [p-url-back]="url"
    [p-url-home]="url"
    (p-submit)="onSubmit()"
  >
  </po-page-change-password>
</ng-template>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import { PoPageChangePasswordComponent } from '@po-ui/ng-templates';

import { PoBreadcrumb, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-change-password-modify',
  templateUrl: './sample-po-page-change-password-modify.component.html',
  standalone: false
})
export class SamplePoPageChangePasswordModifyComponent implements OnInit {
  @ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

  birthday: string;
  changePasswordScreen: boolean;
  city: string;
  country: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  url: string;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/documentation/po-page-change-password' }, { label: 'Profile' }]
  };

  public readonly cityOptions: Array<PoSelectOption> = [{ label: 'S\xE3o Paulo', value: 'sp' }];

  public readonly countryOptions: Array<PoSelectOption> = [{ label: 'Brazil', value: 'br' }];

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.birthday = '1991-11-28T00:00:00-02:00';
    this.changePasswordScreen = false;
    this.city = 'sp';
    this.country = 'br';
    this.email = 'natasha.romanova@mail.com.br';
    this.fullName = 'Natasha Romanova';
    this.phoneNumber = '119999999999';
    this.url = '/home';
  }

  onSubmit() {
    this.changePassword.openConfirmation();
  }

  showChangePasswordScreen() {
    this.changePasswordScreen = true;
  }

  showProfileScreen() {
    this.changePasswordScreen = false;
  }
}
`),t()()()()(),n(21,"div",10),s(22,"sample-po-page-change-password-modify"),t(),s(23,"hr")),i&2&&(p(5),_("po-icon "+o.sampleCodeButtonIcon),p(),M(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",q(4,Ne,o.hideSampleCodeTabs)))},dependencies:[T,y,b,x,we],encapsulation:2})}return a})();function Fe(a,X){if(a&1){let r=k();n(0,"po-page-login",2),h("p-login-submit",function(){u(r);let o=E();return g(o.checkLogin())}),t()}}function Ae(a,X){if(a&1){let r=k();n(0,"po-page-change-password",3),h("p-submit",function(){u(r);let o=E();return g(o.onSubmit())}),t()}if(a&2){let r=E();d("p-requirements",r.requirements)}}var fe=(()=>{class a{changePassword;login=!1;requirements=[{requirement:"Use at least one symbol (ex. !, @, #).",status:this.validateSymbols.bind(this)},{requirement:"Mix uppercase and lowercase characters.",status:this.validateCases.bind(this)},{requirement:"Min of 5 characters.",status:this.validateCharacters.bind(this)}];checkLogin(){this.login=!this.login}onSubmit(){this.changePassword.openConfirmation()}validateCases(r){if(r){let i=r.match(/[a-z]/g);return!(!i||i.length<1||(i=r.match(/[A-Z]/g),!i||i.length<1))}}validateCharacters(r){return r&&r.length>=5}validateSymbols(r){if(r){let i=r.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g);return!(!i||i.length<1)}}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-create"]],viewQuery:function(i,o){if(i&1&&O(P,7),i&2){let l;R(l=D())&&(o.changePassword=l.first)}},standalone:!1,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit",4,"ngIf"],["p-hide-current-password","","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-home","/home",3,"p-requirements","p-submit",4,"ngIf"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"],["p-hide-current-password","","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-home","/home",3,"p-submit","p-requirements"]],template:function(i,o){i&1&&A(0,Fe,1,0,"po-page-login",0)(1,Ae,1,1,"po-page-change-password",1),i&2&&(d("ngIf",!o.login),p(),d("ngIf",o.login))},dependencies:[W,P,ce],encapsulation:2})}return a})();var We=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-create-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(s(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Change Password Create"),t(),n(4,"a",2),h("click",function(){return o.toggleSampleCodeTabs()}),s(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-change-password-create/sample-po-page-change-password-create.component.html"),t(),n(13,"pre",7),e(14,`<po-page-login
  *ngIf="!login"
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  (p-login-submit)="checkLogin()"
>
</po-page-login>

<po-page-change-password
  *ngIf="login"
  p-hide-current-password
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  p-url-home="/home"
  [p-requirements]="requirements"
  (p-submit)="onSubmit()"
>
</po-page-change-password>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-change-password-create/sample-po-page-change-password-create.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';
import { PoPageChangePasswordComponent, PoPageChangePasswordRequirement } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-change-password-create',
  templateUrl: './sample-po-page-change-password-create.component.html',
  standalone: false
})
export class SamplePoPageChangePasswordCreateComponent {
  @ViewChild(PoPageChangePasswordComponent, { static: true }) changePassword: PoPageChangePasswordComponent;

  login: boolean = false;
  requirements: Array<PoPageChangePasswordRequirement> = [
    { requirement: 'Use at least one symbol (ex. !, @, #).', status: this.validateSymbols.bind(this) },
    { requirement: 'Mix uppercase and lowercase characters.', status: this.validateCases.bind(this) },
    { requirement: 'Min of 5 characters.', status: this.validateCharacters.bind(this) }
  ];

  checkLogin() {
    this.login = !this.login;
  }

  onSubmit() {
    this.changePassword.openConfirmation();
  }

  validateCases(newPassword: string) {
    if (newPassword) {
      let result = newPassword.match(/[a-z]/g);

      if (!result || result.length < 1) {
        return false;
      }

      result = newPassword.match(/[A-Z]/g);

      if (!result || result.length < 1) {
        return false;
      }
      return true;
    }
  }

  validateCharacters(newPassword: string) {
    return newPassword && newPassword.length >= 5;
  }

  validateSymbols(newPassword: string) {
    if (newPassword) {
      const result = newPassword.match(/[!@#$%^&*()_+\\-=\\[\\]{};':"\\\\|,.<>\\/?]+/g);

      if (!result || result.length < 1) {
        return false;
      }
      return true;
    }
  }
}
`),t()()()()(),n(21,"div",10),s(22,"sample-po-page-change-password-create"),t(),s(23,"hr")),i&2&&(p(5),_("po-icon "+o.sampleCodeButtonIcon),p(),M(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",q(4,We,o.hideSampleCodeTabs)))},dependencies:[T,y,b,x,fe],encapsulation:2})}return a})();var Ge=()=>({url:"https://po-sample-api.onrender.com/v1/users",type:"all",contactMail:"support@mail.com"}),be=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-request"]],standalone:!1,decls:6,vars:2,consts:[[1,"po-row"],["p-label","Forgot your Password Sample Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Forgot your Password Sample Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Forgot your Password Sample SMS Code","p-value","999999",1,"po-md-2"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-token","rzDsQiSYoq","p-url-new-password","https://thf.totvs.com.br/sample/api/new-password",3,"p-recovery"]],template:function(i,o){i&1&&(n(0,"po-container")(1,"div",0),s(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),t()(),s(5,"po-page-change-password",4)),i&2&&(p(5),d("p-recovery",ee(1,Ge)))},dependencies:[ae,le,P],encapsulation:2})}return a})();var je=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-request-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(s(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Change Password Request"),t(),n(4,"a",2),h("click",function(){return o.toggleSampleCodeTabs()}),s(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-change-password-request/sample-po-page-change-password-request.component.html"),t(),n(13,"pre",7),e(14,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Forgot your Password Sample Phone" p-value="(99) 99999-9999"></po-info>
    <po-info class="po-md-2" p-label="Forgot your Password Sample Email" p-value="mail@mail.com"></po-info>
    <po-info class="po-md-2" p-label="Forgot your Password Sample SMS Code" p-value="999999"></po-info>
  </div>
</po-container>

<po-page-change-password
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  p-token="rzDsQiSYoq"
  p-url-new-password="https://thf.totvs.com.br/sample/api/new-password"
  [p-recovery]="{ url: 'https://po-sample-api.onrender.com/v1/users', type: 'all', contactMail: 'support@mail.com' }"
>
</po-page-change-password>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-change-password-request/sample-po-page-change-password-request.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-request',
  templateUrl: './sample-po-page-change-password-request.component.html',
  standalone: false
})
export class SamplePoPageChangePasswordRequestComponent {}
`),t()()()()(),n(21,"div",10),s(22,"sample-po-page-change-password-request"),t(),s(23,"hr")),i&2&&(p(5),_("po-icon "+o.sampleCodeButtonIcon),p(),M(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",q(4,je,o.hideSampleCodeTabs)))},dependencies:[T,y,b,x,be],encapsulation:2})}return a})();var ye=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-doc"]],standalone:!1,decls:634,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoPageChangePasswordRecovery"],["pan","",1,"docs-api-property-type","PoPageChangePasswordRequirement[]"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["id","processo"],["id","praticidade"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],["href","/documentation/po-modal-password-recovery"]],template:function(i,o){i&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageChangePasswordModule } from '@po-ui/ng-templates';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo do template do po-page-change-password."),t()(),n(7,"h3",3),e(8,"Componente"),t(),n(9,"h4",4)(10,"code",5),e(11,"PoPageChangePasswordComponent"),t()(),n(12,"div",2)(13,"p"),e(14,"O componente "),n(15,"code"),e(16,"po-page-change-password"),t(),e(17," \xE9 utilizado como template para tela de cadastro ou altera\xE7\xE3o de senha."),t(),n(18,"p"),e(19,`Apresenta dicas e regras para senhas mais seguras e tamb\xE9m possibilidade de personalizar o redirecionamento para as telas
'esqueceu a senha', 'voltar' e 'entrar no sistema'. Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis.`),t(),n(20,"p"),e(21,"A propriedade "),n(22,"code"),e(23,"p-url-new-password"),t(),e(24,` automatiza a rotina do template e simplifica o processo de cadastro/altera\xE7\xE3o de senha, bastando
definir uma url para POST das informa\xE7\xF5es digitadas pelo usu\xE1rio. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o
desenvolvimento da aplica\xE7\xE3o no `),n(25,"em"),e(26,"client side"),t(),e(27,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de cadastro/altera\xE7\xE3o de senha.
Seu detalhamento para uso pode ser visto logo abaixo em `),n(28,"em"),e(29,"propriedades"),t(),e(30,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),t(),n(31,"p"),e(32,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),n(33,"em"),e(34,"assets"),t(),e(35," no arquivo "),n(36,"strong"),e(37,"angular.json"),t(),e(38," da aplica\xE7\xE3o na seguinte ordem:"),t(),n(39,"pre")(40,"code"),e(41,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]`),t()()(),n(42,"div",6)(43,"h4",7),e(44,"Seletor"),t(),n(45,"pre",8),e(46,`<po-page-change-password
    p-hide-current-password="boolean"
    p-logo="string"
    p-no-autocomplete-password="boolean"
    p-recovery="string | Function | PoPageChangePasswordRecovery"
    p-requirements="PoPageChangePasswordRequirement[]"
    p-secondary-logo="string"
    (p-submit)="EventEmitter"
    p-token="string"
    p-url-back="string"
    p-url-home="string"
    p-url-new-password="string" >
</po-page-change-password>
`),t()(),n(47,"h4",9),e(48,"Propriedades"),t(),n(49,"table",10)(50,"tr",11)(51,"th",12),e(52,"Nome"),t(),n(53,"th",12),e(54,"Tipo"),t(),n(55,"th",12),e(56,"Padr\xE3o"),t(),n(57,"th",12),e(58,"Descri\xE7\xE3o"),t()(),n(59,"tr",13)(60,"td",14)(61,"div",15)(62,"span",16),e(63," p-hide-current-password"),s(64,"br"),t()()(),n(65,"td",17)(66,"code",18),e(67,"boolean"),t()(),n(68,"td",19)(69,"p")(70,"code"),e(71,"false"),t()()(),n(72,"td",20)(73,"em")(74,"strong"),e(75,"(opcional)"),t()(),n(76,"p"),e(77,"Esconde o campo "),n(78,"code"),e(79,"Senha atual"),t(),e(80," para que o template seja para cria\xE7\xE3o de senha."),t()()(),n(81,"tr",13)(82,"td",14)(83,"div",15)(84,"span",16),e(85," p-logo"),s(86,"br"),t()()(),n(87,"td",17)(88,"code",21),e(89,"string"),t()(),n(90,"td",19),e(91,"-"),t(),n(92,"td",20)(93,"em")(94,"strong"),e(95,"(opcional)"),t()(),n(96,"p"),e(97,"Caminho para a logomarca localizada na parte superior."),t(),n(98,"blockquote")(99,"p"),e(100,"Caso seja indefinida o espa\xE7o se mant\xE9m preservado por\xE9m vazio."),t()()()(),n(101,"tr",13)(102,"td",14)(103,"div",15)(104,"span",16),e(105," p-no-autocomplete-password"),s(106,"br"),t()()(),n(107,"td",17)(108,"code",18),e(109,"boolean"),t()(),n(110,"td",19)(111,"p")(112,"code"),e(113,"true"),t()()(),n(114,"td",20)(115,"em")(116,"strong"),e(117,"(opcional)"),t()(),n(118,"p"),e(119,"Define a propriedade nativa "),n(120,"code"),e(121,"autocomplete"),t(),e(122," do campo como "),n(123,"code"),e(124,"off"),t(),e(125,"."),t(),n(126,"blockquote")(127,"p"),e(128,"No input de senha("),n(129,"code"),e(130,"po-password"),t(),e(131,") ser\xE1 definido como "),n(132,"code"),e(133,"new-password"),t(),e(134,"."),t()()()(),n(135,"tr",13)(136,"td",14)(137,"div",15)(138,"span",16),e(139," p-recovery"),s(140,"br"),t()()(),n(141,"td",17)(142,"code",21),e(143,"string "),t(),n(144,"code",22),e(145," Function "),t(),n(146,"code",23),e(147," PoPageChangePasswordRecovery"),t()(),n(148,"td",19),e(149,"-"),t(),n(150,"td",20)(151,"em")(152,"strong"),e(153,"(opcional)"),t()(),n(154,"p"),e(155,"URL para a a\xE7\xE3o do link "),n(156,"code"),e(157,"Esqueceu a senha"),t(),e(158,"."),t(),n(159,"p"),e(160,"A propriedade aceita os seguintes tipos:"),t(),n(161,"ul")(162,"li")(163,"p")(164,"strong"),e(165,"String"),t(),e(166,": informe uma url externa ou uma rota v\xE1lida;"),t()(),n(167,"li")(168,"p")(169,"strong"),e(170,"Function"),t(),e(171,": pode-se customizar a a\xE7\xE3o. Para esta possilidade basta atribuir:"),t(),n(172,"pre")(173,"code"),e(174,`<po-page-change-password>
   [recovery]="this.myFunc.bind(this)";
</po-page-change-password>`),t()()(),n(175,"li")(176,"p")(177,"strong"),e(178,"PoPageChangePasswordRecovery"),t(),e(179,": cria-se v\xEDnculo autom\xE1tico com o template "),n(180,"strong"),e(181,"po-modal-password-recovery"),t(),e(182,`.
O objeto deve conter a `),n(183,"strong"),e(184,"url"),t(),e(185," para requisi\xE7\xE3o dos recursos e pode-se definir o "),n(186,"strong"),e(187,"tipo"),t(),e(188,` de modal para recupera\xE7\xE3o de senha,
`),n(189,"strong"),e(190,"email"),t(),e(191," para contato e "),n(192,"strong"),e(193,"m\xE1scara"),t(),e(194," do campo de telefone."),t()()(),n(195,"blockquote")(196,"p"),e(197,"Caso n\xE3o tenha valor o link "),n(198,"code"),e(199,"Esqueceu a senha"),t(),e(200," desaparece."),t()()()(),n(201,"tr",13)(202,"td",14)(203,"div",15)(204,"span",16),e(205," p-requirements"),s(206,"br"),t()()(),n(207,"td",17)(208,"code",24),e(209,"PoPageChangePasswordRequirement[]"),t()(),n(210,"td",19),e(211,"-"),t(),n(212,"td",20)(213,"em")(214,"strong"),e(215,"(opcional)"),t()(),n(216,"p"),e(217,"Lista de regras para cria\xE7\xE3o e altera\xE7\xE3o de senha."),t()()(),n(218,"tr",13)(219,"td",14)(220,"div",15)(221,"span",16),e(222," p-secondary-logo"),s(223,"br"),t()()(),n(224,"td",17)(225,"code",21),e(226,"string"),t()(),n(227,"td",19),e(228,"-"),t(),n(229,"td",20)(230,"em")(231,"strong"),e(232,"(opcional)"),t()(),n(233,"p"),e(234,"Caminho para a logomarca localizada no rodap\xE9."),t()()(),n(235,"tr",13)(236,"td",14)(237,"div",25)(238,"span",26),e(239," (p-submit)"),s(240,"br"),t()()(),n(241,"td",17)(242,"code",27),e(243,"EventEmitter"),t()(),n(244,"td",19),e(245,"-"),t(),n(246,"td",20)(247,"em")(248,"strong"),e(249,"(opcional)"),t()(),n(250,"p"),e(251,"Fun\xE7\xE3o executada ao submeter o form pelo bot\xE3o salvar."),t(),n(252,"p"),e(253,`Caso definida essa fun\xE7\xE3o, a modal de confirma\xE7\xE3o n\xE3o aparece, mas pode ser chamada pelo
m\xE9todo `),n(254,"code"),e(255,"openConfirmation"),t(),e(256,". Exemplo:"),t(),n(257,"pre")(258,"code"),e(259,`@ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

onSubmit() {
 this.changePassword.openConfirmation();
}`),t()(),n(260,"blockquote")(261,"p"),e(262,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),n(263,"code"),e(264,"p-url-new-password"),t(),e(265,"."),t()()()(),n(266,"tr",13)(267,"td",14)(268,"div",15)(269,"span",16),e(270," p-token"),s(271,"br"),t()()(),n(272,"td",17)(273,"code",21),e(274,"string"),t()(),n(275,"td",19),e(276,"-"),t(),n(277,"td",20)(278,"em")(279,"strong"),e(280,"(opcional)"),t()(),n(281,"p"),e(282,"Token para solicita\xE7\xE3o de troca/recupera\xE7\xE3o de senha."),t(),n(283,"blockquote")(284,"p"),e(285,"Esta propriedade ser\xE1 ignorada caso exista um token como par\xE2metro na URL inicial do template."),t()()()(),n(286,"tr",13)(287,"td",14)(288,"div",15)(289,"span",16),e(290," p-url-back"),s(291,"br"),t()()(),n(292,"td",17)(293,"code",21),e(294,"string"),t()(),n(295,"td",19)(296,"p")(297,"code"),e(298,"/"),t()()(),n(299,"td",20)(300,"em")(301,"strong"),e(302,"(opcional)"),t()(),n(303,"p"),e(304,"URL para a a\xE7\xE3o de retorno da p\xE1gina."),t(),n(305,"blockquote")(306,"p"),e(307,"O bot\xE3o "),n(308,"code"),e(309,"Voltar"),t(),e(310," aparece apenas para telas de altera\xE7\xE3o de senha, ou seja, s\xF3 aparece se a propriedade "),n(311,"code"),e(312,"p-hide-current-password"),t(),e(313,` for
falsa.`),t()()()(),n(314,"tr",13)(315,"td",14)(316,"div",15)(317,"span",16),e(318," p-url-home"),s(319,"br"),t()()(),n(320,"td",17)(321,"code",21),e(322,"string"),t()(),n(323,"td",19)(324,"p")(325,"code"),e(326,"/"),t()()(),n(327,"td",20)(328,"em")(329,"strong"),e(330,"(opcional)"),t()(),n(331,"p"),e(332,"URL para a a\xE7\xE3o do bot\xE3o "),n(333,"code"),e(334,"Entrar no sistema"),t(),e(335,` da modal de confirma\xE7\xE3o que aparece ap\xF3s salvar a senha ou se chamada pelo m\xE9todo
`),n(336,"code"),e(337,"openConfirmation"),t(),e(338,"."),t()()(),n(339,"tr",13)(340,"td",14)(341,"div",15)(342,"span",16),e(343," p-url-new-password"),s(344,"br"),t()()(),n(345,"td",17)(346,"code",21),e(347,"string"),t()(),n(348,"td",19),e(349,"-"),t(),n(350,"td",20)(351,"em")(352,"strong"),e(353,"(opcional)"),t()(),n(354,"p"),e(355,"Endpoint usado pelo template para realizar um POST. Quando preenchido, o m\xE9todo "),n(356,"code"),e(357,"p-submit"),t(),e(358,` ser\xE1 ignorado e o componente adquirir\xE1
automatiza\xE7\xE3o para o processo de cadastro/troca de senha.`),t(),n(359,"h3",28),e(360,"Processo"),t(),n(361,"p"),e(362,"Ao digitar um valor v\xE1lido nos campos de senha e pressionar "),n(363,"strong"),e(364,"salvar"),t(),e(365,`,
o componente far\xE1 uma requisi\xE7\xE3o `),n(366,"code"),e(367,"POST"),t(),e(368,` na url especificada nesta propriedade passando o objeto contendo os valores definidos pelo
usu\xE1rio.`),t(),n(369,"pre")(370,"code"),e(371,`body {
 token?: token,
 oldPassword?: oldPassword,
 newPassword: newPassword
}`),t()(),n(372,"p"),e(373,"O c\xF3digo de resposta HTTP de status esperado \xE9 "),n(374,"code"),e(375,"204"),t(),e(376,"."),t(),n(377,"p"),e(378,"Em caso de "),n(379,"strong"),e(380,"sucesso"),t(),e(381,", ser\xE1 exibida a modal de confirma\xE7\xE3o de senha alterada."),t(),n(382,"blockquote")(383,"p"),e(384,"O token ser\xE1 informado pela propriedade "),n(385,"code"),e(386,"p-token"),t(),e(387,"do componente ou por um "),n(388,"em"),e(389,"query parameter"),t(),e(390," na URL do template."),t()(),n(391,"p")(392,"em"),e(393,"Processo finalizado."),t()(),s(394,"hr"),n(395,"h4",29),e(396,"Praticidade"),t(),n(397,"p"),e(398,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),n(399,"code"),e(400,"po-page-change-password"),t(),e(401,` no restante da aplica\xE7\xE3o. O exemplo abaixo
exemplifica a forma din\xE2mica com a qual o template de tela de troca de senha pode ser gerado ao navegar para rota `),n(402,"code"),e(403,"/change-password"),t(),e(404,`, e
tamb\xE9m como ele se comunica com o servi\xE7o para efetua\xE7\xE3o do processo de troca de senha do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),t(),n(405,"pre")(406,"code"),e(407,`import { PoModalPasswordRecoveryType, PoPageChangePasswordComponent } from '@po-ui/ng-templates';

...
const routes: Routes = [
  {
    path: 'change-password', component: PoPageChangePasswordComponent, data: {
      serviceApi: 'https://po-ui.io/sample/api/new-password',
      recovery: {
        url: 'https://po-ui.io/sample/api/users',
        type: PoModalPasswordRecoveryType.All,
        contactMail: 'dev.po@po-ui.com',
        phoneMask: '9-999-999-9999'
      }
    }
  }
  ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }`),t()(),n(408,"p"),e(409,"O metadado "),n(410,"code"),e(411,"serviceApi"),t(),e(412," deve ser a "),n(413,"strong"),e(414,"url"),t(),e(415," para requisi\xE7\xE3o dos recursos de troca de senha. E "),n(416,"code"),e(417,"recovery"),t(),e(418,` \xE9 a interface
`),n(419,"code"),e(420,"PoPageChangePasswordRecovery"),t(),e(421," respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de senha."),t(),n(422,"blockquote")(423,"p"),e(424,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade."),t()()()()(),n(425,"h3",9),e(426,"M\xE9todos"),t(),n(427,"table",30)(428,"tr",13)(429,"th",31)(430,"div",15)(431,"h4")(432,"span",16),e(433," openConfirmation "),t()()()()(),n(434,"tr",20)(435,"td",20)(436,"p"),e(437,"Abre uma modal de confirma\xE7\xE3o com texto, imagem e bot\xE3o que redireciona para o link definido na propriedade "),n(438,"code"),e(439,"p-url-home"),t(),e(440,""),t()()()(),s(441,"br"),n(442,"h3"),e(443,"Interfaces"),t(),n(444,"h4",32)(445,"code",5),e(446,"PoPageChangePasswordRecovery"),t()(),n(447,"div",2)(448,"p"),e(449,"Interface para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha no "),n(450,"code"),e(451,"po-modal-password-recovery"),t(),e(452,"."),t()(),n(453,"h4",9),e(454,"Propriedades"),t(),n(455,"table",10)(456,"tr",11)(457,"th",12),e(458,"Nome"),t(),n(459,"th",12),e(460,"Tipo"),t(),n(461,"th",12),e(462,"Descri\xE7\xE3o"),t()(),n(463,"tr",13)(464,"td",14)(465,"div",15)(466,"span",16),e(467," contactMail"),s(468,"br"),t()()(),n(469,"td",17)(470,"code",21),e(471,"string"),t()(),n(472,"td",20)(473,"em")(474,"strong"),e(475,"(opcional)"),t()(),n(476,"p"),e(477,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),t()()(),n(478,"tr",13)(479,"td",14)(480,"div",15)(481,"span",16),e(482," phoneMask"),s(483,"br"),t()()(),n(484,"td",17)(485,"code",21),e(486,"string"),t()(),n(487,"td",20)(488,"em")(489,"strong"),e(490,"(opcional)"),t()(),n(491,"p"),e(492,"Defini\xE7\xE3o da m\xE1scara do campo de telefone."),t()()(),n(493,"tr",13)(494,"td",14)(495,"div",15)(496,"span",16),e(497," type"),s(498,"br"),t()()(),n(499,"td",17)(500,"code",33),e(501,"PoModalPasswordRecoveryType"),t()(),n(502,"td",20)(503,"em")(504,"strong"),e(505,"(opcional)"),t()(),n(506,"p"),e(507,"Enum para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha "),n(508,"a",34),e(509,"PoModalPasswordRecoveryType"),t(),e(510,"."),t(),n(511,"blockquote")(512,"p"),e(513,"Caso n\xE3o seja definido valor se assume o padr\xE3o "),n(514,"code"),e(515,"PoModalPasswordRecoveryType.Email"),t(),e(516,"."),t()()()(),n(517,"tr",13)(518,"td",14)(519,"div",15)(520,"span",16),e(521," url"),s(522,"br"),t()()(),n(523,"td",17)(524,"code",21),e(525,"string"),t()(),n(526,"td",20)(527,"p"),e(528,"Endpoint usado pelo template "),n(529,"strong"),e(530,"PoModalPasswordRecovery"),t(),e(531," para requisi\xE7\xE3o do recurso."),t(),n(532,"blockquote")(533,"p"),e(534,"Saiba mais em "),n(535,"a",34),e(536,"PoModalPasswordRecovery"),t(),e(537,"."),t()()()()(),n(538,"h4",32)(539,"code",5),e(540,"PoPageChangePasswordRequirement"),t()(),n(541,"div",2)(542,"p"),e(543,"Interface com a defini\xE7\xE3o dos objetos aceitos pela propriedade "),n(544,"code"),e(545,"p-password-requirements"),t(),e(546,"."),t()(),n(547,"h4",9),e(548,"Propriedades"),t(),n(549,"table",10)(550,"tr",11)(551,"th",12),e(552,"Nome"),t(),n(553,"th",12),e(554,"Tipo"),t(),n(555,"th",12),e(556,"Descri\xE7\xE3o"),t()(),n(557,"tr",13)(558,"td",14)(559,"div",15)(560,"span",16),e(561," requirement"),s(562,"br"),t()()(),n(563,"td",17)(564,"code",21),e(565,"string"),t()(),n(566,"td",20)(567,"p"),e(568,"Requisito."),t()()(),n(569,"tr",13)(570,"td",14)(571,"div",15)(572,"span",16),e(573," status"),s(574,"br"),t()()(),n(575,"td",17)(576,"code",18),e(577,"boolean "),t(),n(578,"code",22),e(579," Function"),t()(),n(580,"td",20)(581,"p"),e(582,"Fun\xE7\xE3o que deve retornar um booleano para validar um requisito de senha."),t(),n(583,"p"),e(584,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que representa esta valida\xE7\xE3o."),t()()()(),n(585,"h4",32)(586,"code",5),e(587,"PoPageChangePassword"),t()(),n(588,"div",2)(589,"p"),e(590,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),n(591,"code"),e(592,"po-page-change-password"),t(),e(593,"."),t()(),n(594,"h4",9),e(595,"Propriedades"),t(),n(596,"table",10)(597,"tr",11)(598,"th",12),e(599,"Nome"),t(),n(600,"th",12),e(601,"Tipo"),t(),n(602,"th",12),e(603,"Descri\xE7\xE3o"),t()(),n(604,"tr",13)(605,"td",14)(606,"div",15)(607,"span",16),e(608," currentPassword"),s(609,"br"),t()()(),n(610,"td",17)(611,"code",21),e(612,"string"),t()(),n(613,"td",20)(614,"em")(615,"strong"),e(616,"(opcional)"),t()(),n(617,"p"),e(618,"Senha atual"),t()()(),n(619,"tr",13)(620,"td",14)(621,"div",15)(622,"span",16),e(623," newPassword"),s(624,"br"),t()()(),n(625,"td",17)(626,"code",21),e(627,"string"),t()(),n(628,"td",20)(629,"em")(630,"strong"),e(631,"(opcional)"),t()(),n(632,"p"),e(633,"Nova senha"),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var ve=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(i){return new(i||a)(V(ne),V(oe))};static \u0275cmp=c({type:a,selectors:[["ng-component"]],standalone:!1,decls:10,vars:4,consts:[["p-title"," Page Change Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(i,o){i&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),s(3,"sample-po-page-change-password-doc"),t(),n(4,"po-tab",3),s(5,"sample-po-page-change-password-basic-view")(6,"sample-po-page-change-password-labs-view")(7,"sample-po-page-change-password-modify-view")(8,"sample-po-page-change-password-create-view")(9,"sample-po-page-change-password-request-view"),t()()()),i&2&&(d("p-actions",o.actions),p(2),d("p-active",o.activeTab.includes("doc")),p(2),d("p-hide",o.hidePoWebSample)("p-active",o.activeTab.includes("web")))},dependencies:[me,b,x,he,Ce,Se,Ee,xe,ye],encapsulation:2})}return a})();var Je=[{path:"",component:ve}],_e=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=F({type:a});static \u0275inj=I({imports:[$.forChild(Je),$]})}return a})();var kt=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=F({type:a});static \u0275inj=I({imports:[ue,_e]})}return a})();export{kt as DocPoPageChangePasswordModule};
