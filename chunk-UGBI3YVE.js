import{$ as I,$a as y,Bc as $,F as u,G as g,Ga as o,Ia as k,Ka as C,La as v,Lb as H,Ma as B,Mb as j,Nb as z,Ob as Y,Od as te,Pa as w,Pb as J,T as s,U as G,Wb as Q,Xd as P,Yb as K,Yd as E,Zb as W,_ as m,_b as X,bb as A,ea as R,fe as U,ge as _,ha as d,ka as x,md as ee,na as t,oa as e,oc as Z,pa as p,pe as N,re as f,se as oe,ta as M,ua as c,va as L,y as D}from"./chunk-23IW53AA.js";var ne=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=m({type:n,selectors:[["sample-po-page-blocked-user-basic"]],standalone:!1,decls:1,vars:0,template:function(i,a){i&1&&p(0,"po-page-blocked-user")},dependencies:[_],encapsulation:2})}return n})();var he=n=>({"docs-sample-code-tabs":n}),ae=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=m({type:n,selectors:[["sample-po-page-blocked-user-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Page Blocked User Basic"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),p(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.html"),e(),t(13,"pre",7),o(14,`<po-page-blocked-user></po-page-blocked-user>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.ts"),e(),t(19,"pre",9),o(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-blocked-user-basic',
  templateUrl: './sample-po-page-blocked-user-basic.component.html',
  standalone: false
})
export class SamplePoPageBlockedUserBasicComponent {}
`),e()()()()(),t(21,"div",10),p(22,"sample-po-page-blocked-user-basic"),e(),p(23,"hr")),i&2&&(s(5),x("po-icon "+a.sampleCodeButtonIcon),s(),k(" ",a.sampleCodeButtonLabel,""),s(),d("ngClass",w(4,he,a.hideSampleCodeTabs)))},dependencies:[y,f,P,E,ne],encapsulation:2})}return n})();var ie=(()=>{class n{contactMail;contactPhone;customParams;params;logo;reason=U.None;secondaryLogo;url;reasonOptions=[{label:"Default",value:U.None},{label:"Expired Password",value:U.ExpiredPassword},{label:"Exceeded Attempts",value:U.ExceededAttempts}];ngOnInit(){this.restore()}changeLiterals(){try{this.customParams=JSON.parse(this.params)}catch{this.customParams=void 0}}restore(){this.contactMail=void 0,this.contactPhone=void 0,this.customParams={attempts:5,days:90,hours:24},this.params="",this.logo="",this.reason=U.None,this.secondaryLogo="",this.url=void 0}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=m({type:n,selectors:[["sample-po-page-blocked-user-labs"]],standalone:!1,decls:14,vars:15,consts:[["f","ngForm"],[3,"p-contact-email","p-contact-phone","p-logo","p-params","p-reason","p-secondary-logo","p-url-back"],["p-label","Properties"],[1,"po-row"],["name","contactPhone","p-clean","","p-help","Ex.: 11 99999 9999","p-label","Contact Phone",1,"po-md-6",3,"ngModelChange","ngModel"],["name","contactMail","p-help","Ex.: user@po-ui.com.br","p-label","Contact Mail",1,"po-md-6",3,"ngModelChange","ngModel"],["name","reason","p-columns","3","p-label","Reason Screen Type",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","params","p-clean","","p-help",'Ex.: {"attempts": 20, "days": 20, "hours": 20}',"p-label","Custom Params",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","url","p-clean","","p-help","Ex.: https://po-ui.io/home","p-label","URL Link",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-label","Logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-label","Secondary logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(i,a){if(i&1){let h=M();p(0,"po-page-blocked-user",1)(1,"po-divider",2),t(2,"form",null,0)(4,"div",3)(5,"po-input",4),B("ngModelChange",function(r){return u(h),v(a.contactPhone,r)||(a.contactPhone=r),g(r)}),e(),t(6,"po-input",5),B("ngModelChange",function(r){return u(h),v(a.contactMail,r)||(a.contactMail=r),g(r)}),e(),t(7,"po-radio-group",6),B("ngModelChange",function(r){return u(h),v(a.reason,r)||(a.reason=r),g(r)}),e(),t(8,"po-input",7),B("ngModelChange",function(r){return u(h),v(a.params,r)||(a.params=r),g(r)}),c("p-change",function(){return u(h),g(a.changeLiterals())}),e(),t(9,"po-input",8),B("ngModelChange",function(r){return u(h),v(a.url,r)||(a.url=r),g(r)}),e(),t(10,"po-input",9),B("ngModelChange",function(r){return u(h),v(a.logo,r)||(a.logo=r),g(r)}),e(),t(11,"po-input",10),B("ngModelChange",function(r){return u(h),v(a.secondaryLogo,r)||(a.secondaryLogo=r),g(r)}),e()(),t(12,"div",3)(13,"po-button",11),c("p-click",function(){return u(h),g(a.restore())}),e()()()}i&2&&(d("p-contact-email",a.contactMail)("p-contact-phone",a.contactPhone)("p-logo",a.logo)("p-params",a.customParams)("p-reason",a.reason)("p-secondary-logo",a.secondaryLogo)("p-url-back",a.url),s(5),C("ngModel",a.contactPhone),s(),C("ngModel",a.contactMail),s(),C("ngModel",a.reason),d("p-options",a.reasonOptions),s(),C("ngModel",a.params),s(),C("ngModel",a.url),s(),C("ngModel",a.logo),s(),C("ngModel",a.secondaryLogo))},dependencies:[J,H,j,Y,z,Z,X,$,ee,_],encapsulation:2})}return n})();var Ee=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=m({type:n,selectors:[["sample-po-page-blocked-user-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Page Blocked User Labs"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),p(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.html"),e(),t(13,"pre",7),o(14,`<po-page-blocked-user
  [p-contact-email]="contactMail"
  [p-contact-phone]="contactPhone"
  [p-logo]="logo"
  [p-params]="customParams"
  [p-reason]="reason"
  [p-secondary-logo]="secondaryLogo"
  [p-url-back]="url"
>
</po-page-blocked-user>

<po-divider p-label="Properties"></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="contactPhone"
      [(ngModel)]="contactPhone"
      p-clean
      p-help="Ex.: 11 99999 9999"
      p-label="Contact Phone"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="contactMail"
      [(ngModel)]="contactMail"
      p-help="Ex.: user@po-ui.com.br"
      p-label="Contact Mail"
    >
    </po-input>

    <po-radio-group
      class="po-lg-12"
      name="reason"
      [(ngModel)]="reason"
      p-columns="3"
      p-label="Reason Screen Type"
      [p-options]="reasonOptions"
    >
    </po-radio-group>

    <po-input
      class="po-lg-6"
      name="params"
      [(ngModel)]="params"
      p-clean
      p-help='Ex.: {"attempts": 20, "days": 20, "hours": 20}'
      p-label="Custom Params"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="url"
      [(ngModel)]="url"
      p-clean
      p-help="Ex.: https://po-ui.io/home"
      p-label="URL Link"
    >
    </po-input>

    <po-input class="po-lg-6" name="logo" [(ngModel)]="logo" p-clean p-label="Logo"> </po-input>

    <po-input class="po-lg-6" name="secondaryLogo" [(ngModel)]="secondaryLogo" p-clean p-label="Secondary logo">
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.ts"),e(),t(19,"pre",9),o(20,`import { Component, OnInit } from '@angular/core';

import { PoPageBlockedUserReason, PoPageBlockedUserReasonParams } from '@po-ui/ng-templates';
import { PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-blocked-user-labs',
  templateUrl: './sample-po-page-blocked-user-labs.component.html',
  standalone: false
})
export class SamplePoPageBlockedUserLabsComponent implements OnInit {
  contactMail: string;
  contactPhone: string;
  customParams: PoPageBlockedUserReasonParams;
  params: string;
  logo: string;
  reason: PoPageBlockedUserReason = PoPageBlockedUserReason.None;
  secondaryLogo: string;
  url: string;

  public readonly reasonOptions: Array<PoRadioGroupOption> = [
    { label: 'Default', value: PoPageBlockedUserReason.None },
    { label: 'Expired Password', value: PoPageBlockedUserReason.ExpiredPassword },
    { label: 'Exceeded Attempts', value: PoPageBlockedUserReason.ExceededAttempts }
  ];

  ngOnInit() {
    this.restore();
  }

  changeLiterals() {
    try {
      this.customParams = JSON.parse(this.params);
    } catch {
      this.customParams = undefined;
    }
  }

  restore() {
    this.contactMail = undefined;
    this.contactPhone = undefined;
    this.customParams = { attempts: 5, days: 90, hours: 24 };
    this.params = '';
    this.logo = '';
    this.reason = PoPageBlockedUserReason.None;
    this.secondaryLogo = '';
    this.url = undefined;
  }
}
`),e()()()()(),t(21,"div",10),p(22,"sample-po-page-blocked-user-labs"),e(),p(23,"hr")),i&2&&(s(5),x("po-icon "+a.sampleCodeButtonIcon),s(),k(" ",a.sampleCodeButtonLabel,""),s(),d("ngClass",w(4,Ee,a.hideSampleCodeTabs)))},dependencies:[y,f,P,E,ie],encapsulation:2})}return n})();function Se(n,q){if(n&1){let l=M();t(0,"po-page-login",2),c("p-login-submit",function(){u(l);let a=L();return g(a.checkLogin())}),e()}}function xe(n,q){if(n&1&&p(0,"po-page-blocked-user",3),n&2){let l=L();d("p-params",l.params)}}var le=(()=>{class n{blocked=!1;params={attempts:1,hours:48};checkLogin(){this.blocked=!0}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=m({type:n,selectors:[["sample-po-page-blocked-user-exceeded-attempts"]],standalone:!1,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit",4,"ngIf"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","exceededAttempts","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-back","https://po-ui.io/documentation/po-page-blocked-user",3,"p-params",4,"ngIf"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","exceededAttempts","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-back","https://po-ui.io/documentation/po-page-blocked-user",3,"p-params"]],template:function(i,a){i&1&&R(0,Se,1,0,"po-page-login",0)(1,xe,1,1,"po-page-blocked-user",1),i&2&&(d("ngIf",!a.blocked),s(),d("ngIf",a.blocked))},dependencies:[A,_,N],encapsulation:2})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=m({type:n,selectors:[["sample-po-page-blocked-user-exceeded-attempts-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Page Blocked User Exceeded Attempts"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),p(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.html"),e(),t(13,"pre",7),o(14,`<po-page-login
  *ngIf="!blocked"
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  (p-login-submit)="checkLogin()"
>
</po-page-login>

<po-page-blocked-user
  *ngIf="blocked"
  p-contact-email="user@po-ui.com.br"
  p-contact-phone="0800 709 8100"
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-reason="exceededAttempts"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  p-url-back="https://po-ui.io/documentation/po-page-blocked-user"
  [p-params]="params"
>
</po-page-blocked-user>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.ts"),e(),t(19,"pre",9),o(20,`import { Component } from '@angular/core';

import { PoPageBlockedUserReasonParams } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-blocked-user-exceeded-attempts',
  templateUrl: './sample-po-page-blocked-user-exceeded-attempts.component.html',
  standalone: false
})
export class SamplePoPageBlockedUserExceededAttemptsComponent {
  blocked = false;
  params: PoPageBlockedUserReasonParams = { attempts: 1, hours: 48 };

  checkLogin() {
    this.blocked = true;
  }
}
`),e()()()()(),t(21,"div",10),p(22,"sample-po-page-blocked-user-exceeded-attempts"),e(),p(23,"hr")),i&2&&(s(5),x("po-icon "+a.sampleCodeButtonIcon),s(),k(" ",a.sampleCodeButtonLabel,""),s(),d("ngClass",w(4,Ce,a.hideSampleCodeTabs)))},dependencies:[y,f,P,E,le],encapsulation:2})}return n})();function Be(n,q){if(n&1){let l=M();t(0,"po-page-login",2),c("p-login-submit",function(){u(l);let a=L();return g(a.checkLogin())}),e()}}function we(n,q){n&1&&p(0,"po-page-blocked-user",3)}var re=(()=>{class n{blocked=!1;checkLogin(){this.blocked=!0}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=m({type:n,selectors:[["sample-po-page-blocked-user-expired-password"]],standalone:!1,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit",4,"ngIf"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","expiredPassword","p-url-back","https://po-ui.io/documentation/po-page-blocked-user",4,"ngIf"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","expiredPassword","p-url-back","https://po-ui.io/documentation/po-page-blocked-user"]],template:function(i,a){i&1&&R(0,Be,1,0,"po-page-login",0)(1,we,1,0,"po-page-blocked-user",1),i&2&&(d("ngIf",!a.blocked),s(),d("ngIf",a.blocked))},dependencies:[A,_,N],encapsulation:2})}return n})();var _e=n=>({"docs-sample-code-tabs":n}),de=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=m({type:n,selectors:[["sample-po-page-blocked-user-expired-password-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Page Blocked User Expired Password"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),p(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.html"),e(),t(13,"pre",7),o(14,`<po-page-login
  *ngIf="!blocked"
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  (p-login-submit)="checkLogin()"
>
</po-page-login>

<po-page-blocked-user
  *ngIf="blocked"
  p-contact-email="user@po-ui.com.br"
  p-contact-phone="0800 709 8100"
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-reason="expiredPassword"
  p-url-back="https://po-ui.io/documentation/po-page-blocked-user"
>
</po-page-blocked-user>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.ts"),e(),t(19,"pre",9),o(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-blocked-user-expired-password',
  templateUrl: './sample-po-page-blocked-user-expired-password.component.html',
  standalone: false
})
export class SamplePoPageBlockedUserExpiredPasswordComponent {
  blocked = false;

  checkLogin() {
    this.blocked = true;
  }
}
`),e()()()()(),t(21,"div",10),p(22,"sample-po-page-blocked-user-expired-password"),e(),p(23,"hr")),i&2&&(s(5),x("po-icon "+a.sampleCodeButtonIcon),s(),k(" ",a.sampleCodeButtonLabel,""),s(),d("ngClass",w(4,_e,a.hideSampleCodeTabs)))},dependencies:[y,f,P,E,re],encapsulation:2})}return n})();var me=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=m({type:n,selectors:[["sample-po-page-blocked-user-doc"]],standalone:!1,decls:324,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","praticidade"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoPageBlockedUserReasonParams"],["pan","",1,"docs-api-property-type","PoPageBlockedUserReason"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(i,a){i&1&&(t(0,"div",0)(1,"p",1)(2,"code"),o(3,"import { PoPageBlockedUserModule } from '@po-ui/ng-templates';"),e()(),t(4,"div",2)(5,"p"),o(6,"M\xF3dulo do template do po-page-blocked-user."),e()(),t(7,"h3",3),o(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),o(11,"PoPageBlockedUserComponent"),e()(),t(12,"div",2)(13,"p"),o(14,"O componente "),t(15,"code"),o(16,"po-page-blocked-user"),e(),o(17,` \xE9 utilizado como template para tela de bloqueio de usu\xE1rio.
\xC9 poss\xEDvel definir entre tr\xEAs tipos de telas para alertar o usu\xE1rio sobre um eventual bloqueio de login.`),e(),t(18,"p"),o(19,`Cada modelo de bloqueio possui uma imagem e texto adequados \xE0 situa\xE7\xE3o.
Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis, por\xE9m,
\xE9 poss\xEDvel estipular par\xE2metros como dias, horas e tentativas de acesso esgotadas.`),e(),t(20,"p"),o(21,"Por fim, h\xE1 propriedades para adi\xE7\xE3o de telefone e/ou email para contato e tamb\xE9m a defini\xE7\xE3o para a url de retorno."),e(),t(22,"p"),o(23,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),t(24,"em"),o(25,"assets"),e(),o(26," no arquivo "),t(27,"strong"),o(28,"angular.json"),e(),o(29," da aplica\xE7\xE3o na seguinte ordem:"),e(),t(30,"pre")(31,"code"),o(32,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]`),e()(),p(33,"hr"),t(34,"h4",6),o(35,"Praticidade"),e(),t(36,"p"),o(37,"O "),t(38,"code"),o(39,"po-page-blocked-user"),e(),o(40,`, assim como suas propriedades, pode tamb\xE9m ser transmitido diretamente pelas configura\xE7\xE3os de rota e,
desta maneira, dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template pode ser gerado se navegasse para uma rota denominada como `),t(41,"code"),o(42,"/access-denied"),e(),o(43,":"),e(),t(44,"pre")(45,"code"),o(46,`import { PoPageBlockedUserComponent, PoPageBlockedUserReason } from '@po-ui/ng-templates';

...
const routes: Routes = [
  {
    path: 'access-denied', component: PoPageBlockedUserComponent, data: {
      contactEmail: 'dev.po@po-ui.com',
      contactPhone: '0800 1234 000',
      reason: PoPageBlockedUserReason.ExpiredPassword,
      urlBack: '/home'
    }
  }
  ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }`),e()(),t(47,"blockquote")(48,"p"),o(49,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade. "),e()()(),t(50,"div",7)(51,"h4",8),o(52,"Seletor"),e(),t(53,"pre",9),o(54,`<po-page-blocked-user
    p-contact-email="string"
    p-contact-phone="string"
    p-logo="string"
    p-params="PoPageBlockedUserReasonParams"
    p-reason="PoPageBlockedUserReason"
    p-secondary-logo="string"
    p-url-back="string" >
</po-page-blocked-user>
`),e()(),t(55,"h4",10),o(56,"Propriedades"),e(),t(57,"table",11)(58,"tr",12)(59,"th",13),o(60,"Nome"),e(),t(61,"th",13),o(62,"Tipo"),e(),t(63,"th",13),o(64,"Padr\xE3o"),e(),t(65,"th",13),o(66,"Descri\xE7\xE3o"),e()(),t(67,"tr",14)(68,"td",15)(69,"div",16)(70,"span",17),o(71," p-contact-email"),p(72,"br"),e()()(),t(73,"td",18)(74,"code",19),o(75,"string"),e()(),t(76,"td",20),o(77,"-"),e(),t(78,"td",21)(79,"em")(80,"strong"),o(81,"(opcional)"),e()(),t(82,"p"),o(83,`Valor para o email de contato que deve ser exibido. A a\xE7\xE3o est\xE1 de acordo com o protocolo MAILTO e \xE9 poss\xEDvel definir
tanto rotas internas quanto externas.`),e()()(),t(84,"tr",14)(85,"td",15)(86,"div",16)(87,"span",17),o(88," p-contact-phone"),p(89,"br"),e()()(),t(90,"td",18)(91,"code",19),o(92,"string"),e()(),t(93,"td",20),o(94,"-"),e(),t(95,"td",21)(96,"em")(97,"strong"),o(98,"(opcional)"),e()(),t(99,"p"),o(100,"Valor para o telefone de contato que deve ser exibido. A a\xE7\xE3o est\xE1 de acordo com o protocolo TEL."),e(),t(101,"blockquote")(102,"p"),o(103,"A propriedade n\xE3o contem tratamento de m\xE1scara, fica a crit\xE9rio do desenvolvedor defini-la."),e()()()(),t(104,"tr",14)(105,"td",15)(106,"div",16)(107,"span",17),o(108," p-logo"),p(109,"br"),e()()(),t(110,"td",18)(111,"code",19),o(112,"string"),e()(),t(113,"td",20),o(114,"-"),e(),t(115,"td",21)(116,"em")(117,"strong"),o(118,"(opcional)"),e()(),t(119,"p"),o(120,"Caminho para a logomarca localizada na parte superior, caso n\xE3o seja definida ou seja inv\xE1lida assume a logo padr\xE3o do PO UI."),e()()(),t(121,"tr",14)(122,"td",15)(123,"div",16)(124,"span",17),o(125," p-params"),p(126,"br"),e()()(),t(127,"td",18)(128,"code",22),o(129,"PoPageBlockedUserReasonParams"),e()(),t(130,"td",20),o(131,"-"),e(),t(132,"td",21)(133,"em")(134,"strong"),o(135,"(opcional)"),e()(),t(136,"p"),o(137,`Designa\xE7\xE3o de valores usados para a customiza\xE7\xE3o da mensagem de bloqueio.
Confira abaixo os valores pr\xE9-definidos.`),e(),t(138,"pre")(139,"code"),o(140,`const customLiterals: PoPageBlockedUserReasonParams = {
  attempts: 5,
  days: 90,
  hours: 24
};`),e()(),t(141,"blockquote")(142,"p"),o(143,"Salientamos a import\xE2ncia e aten\xE7\xE3o para configura\xE7\xE3o desses valores conforme definidos no projeto."),e()(),t(144,"blockquote")(145,"p"),o(146,"Veja os par\xE2metros customiz\xE1veis na interface "),t(147,"code"),o(148,"PoPageBlockedUserReasonParams"),e(),o(149,"."),e()()()(),t(150,"tr",14)(151,"td",15)(152,"div",16)(153,"span",17),o(154," p-reason"),p(155,"br"),e()()(),t(156,"td",18)(157,"code",23),o(158,"PoPageBlockedUserReason"),e()(),t(159,"td",20)(160,"p")(161,"code"),o(162,"PoPageBlockedUserReason.None"),e()()(),t(163,"td",21)(164,"em")(165,"strong"),o(166,"(opcional)"),e()(),t(167,"p"),o(168,"Defini\xE7\xE3o de motivo de bloqueio de usu\xE1rio. As informa\xE7\xF5es modificam conforme o motivo selecionado."),e(),t(169,"blockquote")(170,"p"),o(171,"Veja os valores v\xE1lidos no "),t(172,"em"),o(173,"enum"),e(),t(174,"code"),o(175,"PoPageBlockedUserReason"),e(),o(176,"."),e()()()(),t(177,"tr",14)(178,"td",15)(179,"div",16)(180,"span",17),o(181," p-secondary-logo"),p(182,"br"),e()()(),t(183,"td",18)(184,"code",19),o(185,"string"),e()(),t(186,"td",20),o(187,"-"),e(),t(188,"td",21)(189,"em")(190,"strong"),o(191,"(opcional)"),e()(),t(192,"p"),o(193,"Caminho para a logomarca localizada no rodap\xE9."),e()()(),t(194,"tr",14)(195,"td",15)(196,"div",16)(197,"span",17),o(198," p-url-back"),p(199,"br"),e()()(),t(200,"td",18)(201,"code",19),o(202,"string"),e()(),t(203,"td",20)(204,"p")(205,"code"),o(206,"/"),e()()(),t(207,"td",21)(208,"em")(209,"strong"),o(210,"(opcional)"),e()(),t(211,"p"),o(212,"URL para a a\xE7\xE3o de retorno da p\xE1gina."),e()()()(),t(213,"h3"),o(214,"Interfaces"),e(),t(215,"h4",24)(216,"code",5),o(217,"PoPageBlockedUserReasonParams"),e()(),t(218,"div",2)(219,"p"),o(220,"Interface que define os valores de customiza\xE7\xE3o da mensagem de bloqueio do componente "),t(221,"code"),o(222,"po-page-blocked-user"),e(),o(223,"."),e()(),t(224,"h4",10),o(225,"Propriedades"),e(),t(226,"table",11)(227,"tr",12)(228,"th",13),o(229,"Nome"),e(),t(230,"th",13),o(231,"Tipo"),e(),t(232,"th",13),o(233,"Descri\xE7\xE3o"),e()(),t(234,"tr",14)(235,"td",15)(236,"div",16)(237,"span",17),o(238," attempts"),p(239,"br"),e()()(),t(240,"td",18)(241,"code",25),o(242,"number"),e()(),t(243,"td",21)(244,"em")(245,"strong"),o(246,"(opcional)"),e()(),t(247,"p"),o(248,"Quantidade m\xE1xima de tentativas."),e()()(),t(249,"tr",14)(250,"td",15)(251,"div",16)(252,"span",17),o(253," days"),p(254,"br"),e()()(),t(255,"td",18)(256,"code",25),o(257,"number"),e()(),t(258,"td",21)(259,"em")(260,"strong"),o(261,"(opcional)"),e()(),t(262,"p"),o(263,"Quantidade de dias para expira\xE7\xE3o de senha."),e()()(),t(264,"tr",14)(265,"td",15)(266,"div",16)(267,"span",17),o(268," hours"),p(269,"br"),e()()(),t(270,"td",18)(271,"code",25),o(272,"number"),e()(),t(273,"td",21)(274,"em")(275,"strong"),o(276,"(opcional)"),e()(),t(277,"p"),o(278,"Horas que o sistema permanecer\xE1 bloqueado."),e()()()(),t(279,"h3"),o(280,"Enums"),e(),t(281,"h4",4)(282,"code",5),o(283,"PoPageBlockedUserReason"),e()(),t(284,"div",2)(285,"p")(286,"em"),o(287,"Enum"),e(),o(288," para os tipos de motivo de bloqueio de usu\xE1rio. As informa\xE7\xF5es modificam conforme o motivo selecionado pelo desenvolvedor."),e()(),t(289,"h4",10),o(290,"Propriedades"),e(),t(291,"table",11)(292,"tr",12)(293,"th",13),o(294,"Nome"),e(),t(295,"th",13),o(296,"Descri\xE7\xE3o"),e()(),t(297,"tr",14)(298,"td",15)(299,"div",16)(300,"span",17),o(301," None"),p(302,"br"),e()()(),t(303,"td",21)(304,"p"),o(305,"Sem defini\xE7\xE3o; a tela exibir\xE1 conte\xFAdo de bloqueio gen\xE9rico."),e()()(),t(306,"tr",14)(307,"td",15)(308,"div",16)(309,"span",17),o(310," ExceededAttempts"),p(311,"br"),e()()(),t(312,"td",21)(313,"p"),o(314,"Defini\xE7\xE3o para tentativas de acesso esgotadas."),e()()(),t(315,"tr",14)(316,"td",15)(317,"div",16)(318,"span",17),o(319," ExpiredPassword"),p(320,"br"),e()()(),t(321,"td",21)(322,"p"),o(323,"Defini\xE7\xE3o para senha expirada."),e()()()()())},dependencies:[f],encapsulation:2})}return n})();var ce=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,i){this.route=l,this.router=i}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let i=l.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(i){return new(i||n)(G(Q),G(K))};static \u0275cmp=m({type:n,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title"," Page Blocked User",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(i,a){i&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),p(3,"sample-po-page-blocked-user-doc"),e(),t(4,"po-tab",3),p(5,"sample-po-page-blocked-user-basic-view")(6,"sample-po-page-blocked-user-labs-view")(7,"sample-po-page-blocked-user-exceeded-attempts-view")(8,"sample-po-page-blocked-user-expired-password-view"),e()()()),i&2&&(d("p-actions",a.actions),s(2),d("p-active",a.activeTab.includes("doc")),s(2),d("p-hide",a.hidePoWebSample)("p-active",a.activeTab.includes("web")))},dependencies:[te,P,E,ae,pe,se,de,me],encapsulation:2})}return n})();var Le=[{path:"",component:ce}],ue=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=I({type:n});static \u0275inj=D({imports:[W.forChild(Le),W]})}return n})();var lt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=I({type:n});static \u0275inj=D({imports:[oe,ue]})}return n})();export{lt as DocPoPageBlockedUserModule};
