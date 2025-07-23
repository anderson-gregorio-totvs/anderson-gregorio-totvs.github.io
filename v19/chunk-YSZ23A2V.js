import{$ as V,$a as M,Ca as B,Cd as N,Da as L,Ea as A,F as E,Fa as I,G as v,Ga as e,Ia as C,Jc as Y,Ka as k,La as q,Lb as H,Ma as D,Mb as W,Nb as J,Ob as U,Od as ee,Pa as x,Pb as Q,T as s,U as _,Wb as G,Xd as b,Yb as K,Yd as g,Zb as j,_ as c,de as w,ee as S,ha as m,ka as P,md as Z,na as o,oa as t,oc as R,pa as r,re as f,se as te,ta as O,ua as u,vc as X,y as F,yd as $}from"./chunk-V5DQALWN.js";var ne=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-modal-password-recovery-basic"]],standalone:!1,decls:3,vars:0,consts:[["passwordRecoveryModal",""],["p-label","Open modal password recovery",3,"p-click"]],template:function(a,i){if(a&1){let p=O();r(0,"po-modal-password-recovery",null,0),o(2,"po-button",1),u("p-click",function(){E(p);let d=I(1);return v(d.open())}),t()}},dependencies:[R,S],encapsulation:2})}return n})();var Ee=n=>({"docs-sample-code-tabs":n}),ae=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-modal-password-recovery-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Modal Password Recovery Basic"),t(),o(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-modal-password-recovery #passwordRecoveryModal></po-modal-password-recovery>

<po-button p-label="Open modal password recovery" (p-click)="passwordRecoveryModal.open()"> </po-button>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
    selector: 'sample-po-modal-password-recovery-basic',
    templateUrl: './sample-po-modal-password-recovery-basic.component.html',
    standalone: false
})
export class SamplePoModalPasswordRecoveryBasicComponent {}
`),t()()()()(),o(21,"div",10),r(22,"sample-po-modal-password-recovery-basic"),t(),r(23,"hr")),a&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),C(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",x(4,Ee,i.hideSampleCodeTabs)))},dependencies:[M,f,b,g,ne],encapsulation:2})}return n})();var re=(()=>{class n{poDialog;poModalPasswordRecovery;codeError;email;event;invalidCode=!0;invalidCodeMessage;phoneMask;submitEvent;type;typeOptions=[{label:"All",value:w.All},{label:"Email",value:w.Email},{label:"SMS",value:w.SMS}];constructor(l){this.poDialog=l}ngOnInit(){this.restore()}changeEvent(l){this.event=l}openPasswordRecoveryModal(){this.poModalPasswordRecovery.open()}restore(){this.codeError=void 0,this.email=void 0,this.event=void 0,this.phoneMask=void 0,this.submitEvent=void 0,this.type=w.Email}submit(l){this.poDialog.alert({title:"Change Password Requested By User",message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.advanceModal(l)})}submitCode(l){this.poDialog.alert({title:"Emitted SMS Code By User",message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.resendCode(l)})}advanceModal(l){l.hasOwnProperty("sms")?this.openSmsCode(l):this.openConfirmation(l)}openConfirmation(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openConfirmation()}openSmsCode(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openSmsCode()}resendCode(l){this.submitEvent=JSON.stringify(event),this.invalidCode&&this.invalidCodeMessage?(this.invalidCode=!this.invalidCode,this.codeError=this.invalidCodeMessage,this.poModalPasswordRecovery.openSmsCode()):(this.codeError=void 0,this.invalidCode=!this.invalidCode,this.poModalPasswordRecovery.completed())}static \u0275fac=function(a){return new(a||n)(_(Y))};static \u0275cmp=c({type:n,selectors:[["sample-po-modal-password-recovery-labs"]],viewQuery:function(a,i){if(a&1&&B(S,5),a&2){let p;L(p=A())&&(i.poModalPasswordRecovery=p.first)}},standalone:!1,decls:16,vars:11,consts:[["f","ngForm"],[3,"p-code-submit","p-submit","p-code-error","p-contact-email","p-phone-mask","p-type"],["p-label","Open modal password recovery",3,"p-click"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","type","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","invalidCodeMessage","p-clean","","p-label","Code Error","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-maxlength","30","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","phoneMask","p-clean","","p-label","Phone Mask","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let p=O();o(0,"po-modal-password-recovery",1),u("p-code-submit",function(d){return E(p),i.submitCode(d),v(i.changeEvent("p-submit-code"))})("p-submit",function(d){return E(p),i.submit(d),v(i.changeEvent("p-submit"))}),t(),o(1,"po-button",2),u("p-click",function(){return E(p),v(i.openPasswordRecoveryModal())}),t(),r(2,"hr"),o(3,"div",3),r(4,"po-info",4)(5,"po-info",5),t(),r(6,"hr"),o(7,"form",null,0)(9,"div",3)(10,"po-select",6),D("ngModelChange",function(d){return E(p),q(i.type,d)||(i.type=d),v(d)}),t(),o(11,"po-input",7),D("ngModelChange",function(d){return E(p),q(i.invalidCodeMessage,d)||(i.invalidCodeMessage=d),v(d)}),t(),o(12,"po-input",8),D("ngModelChange",function(d){return E(p),q(i.email,d)||(i.email=d),v(d)}),t(),o(13,"po-input",9),D("ngModelChange",function(d){return E(p),q(i.phoneMask,d)||(i.phoneMask=d),v(d)}),t()(),o(14,"div",3)(15,"po-button",10),u("p-click",function(){return E(p),I(8).reset(),v(i.restore())}),t()()()}a&2&&(m("p-code-error",i.codeError)("p-contact-email",i.email)("p-phone-mask",i.phoneMask)("p-type",i.type),s(4),m("p-value",i.submitEvent),s(),m("p-value",i.event),s(5),k("ngModel",i.type),m("p-options",i.typeOptions),s(),k("ngModel",i.invalidCodeMessage),s(),k("ngModel",i.email),s(),k("ngModel",i.phoneMask))},dependencies:[Q,H,W,U,J,R,Z,$,N,S],encapsulation:2})}return n})();var ye=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-modal-password-recovery-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Modal Password Recovery Labs"),t(),o(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-modal-password-recovery
  [p-code-error]="codeError"
  [p-contact-email]="email"
  [p-phone-mask]="phoneMask"
  [p-type]="type"
  (p-code-submit)="submitCode($event); changeEvent('p-submit-code')"
  (p-submit)="submit($event); changeEvent('p-submit')"
>
</po-modal-password-recovery>

<po-button p-label="Open modal password recovery" (p-click)="openPasswordRecoveryModal()"> </po-button>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="submitEvent"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-select class="po-md-6" name="type" [(ngModel)]="type" p-label="Type" [p-options]="typeOptions"> </po-select>

    <po-input
      class="po-md-6"
      name="invalidCodeMessage"
      [(ngModel)]="invalidCodeMessage"
      p-clean
      p-label="Code Error"
      p-required
    >
    </po-input>

    <po-input class="po-md-6" name="email" [(ngModel)]="email" p-clean p-label="Email" p-maxlength="30" p-required>
    </po-input>

    <po-input class="po-md-6" name="phoneMask" [(ngModel)]="phoneMask" p-clean p-label="Phone Mask" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="f.reset(); this.restore()"> </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import { PoDialogService, PoSelectOption } from '@po-ui/ng-components';
import {
  PoModalPasswordRecovery,
  PoModalPasswordRecoveryComponent,
  PoModalPasswordRecoveryType
} from '@po-ui/ng-templates';

@Component({
    selector: 'sample-po-modal-password-recovery-labs',
    templateUrl: './sample-po-modal-password-recovery-labs.component.html',
    standalone: false
})
export class SamplePoModalPasswordRecoveryLabsComponent implements OnInit {
  @ViewChild(PoModalPasswordRecoveryComponent) poModalPasswordRecovery: PoModalPasswordRecoveryComponent;

  codeError: string;
  email: string;
  event: string;
  invalidCode: boolean = true;
  invalidCodeMessage: string;
  phoneMask: string;
  submitEvent: string;
  type: PoModalPasswordRecoveryType;

  typeOptions: Array<PoSelectOption> = [
    { label: 'All', value: PoModalPasswordRecoveryType.All },
    { label: 'Email', value: PoModalPasswordRecoveryType.Email },
    { label: 'SMS', value: PoModalPasswordRecoveryType.SMS }
  ];

  constructor(private poDialog: PoDialogService) {}

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  openPasswordRecoveryModal() {
    this.poModalPasswordRecovery.open();
  }

  restore() {
    this.codeError = undefined;
    this.email = undefined;
    this.event = undefined;
    this.phoneMask = undefined;
    this.submitEvent = undefined;
    this.type = PoModalPasswordRecoveryType.Email;
  }

  submit(event: PoModalPasswordRecovery) {
    this.poDialog.alert({
      title: 'Change Password Requested By User',
      message: \`Submitted Object: \${JSON.stringify(event)}\`,
      ok: () => this.advanceModal(event)
    });
  }

  submitCode(event: PoModalPasswordRecovery) {
    this.poDialog.alert({
      title: 'Emitted SMS Code By User',
      message: \`Submitted Object: \${JSON.stringify(event)}\`,
      ok: () => this.resendCode(event)
    });
  }

  private advanceModal(event: PoModalPasswordRecovery) {
    event.hasOwnProperty('sms') ? this.openSmsCode(event) : this.openConfirmation(event);
  }

  private openConfirmation(event: PoModalPasswordRecovery) {
    this.submitEvent = JSON.stringify(event);
    this.poModalPasswordRecovery.openConfirmation();
  }

  private openSmsCode(event: PoModalPasswordRecovery) {
    this.submitEvent = JSON.stringify(event);
    this.poModalPasswordRecovery.openSmsCode();
  }

  private resendCode(eventevent: PoModalPasswordRecovery) {
    this.submitEvent = JSON.stringify(event);

    if (this.invalidCode && this.invalidCodeMessage) {
      this.invalidCode = !this.invalidCode;
      this.codeError = this.invalidCodeMessage;

      this.poModalPasswordRecovery.openSmsCode();
    } else {
      this.codeError = undefined;
      this.invalidCode = !this.invalidCode;
      this.poModalPasswordRecovery.completed();
    }
  }
}
`),t()()()()(),o(21,"div",10),r(22,"sample-po-modal-password-recovery-labs"),t(),r(23,"hr")),a&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),C(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",x(4,ye,i.hideSampleCodeTabs)))},dependencies:[M,f,b,g,re],encapsulation:2})}return n})();var se=(()=>{class n{poModalPasswordRecovery;type=w.All;urlRecovery="https://po-sample-api.onrender.com/v1/users";openPasswordRecoveryModal(){this.poModalPasswordRecovery.open()}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-modal-password-recovery-request"]],viewQuery:function(a,i){if(a&1&&B(S,5),a&2){let p;L(p=A())&&(i.poModalPasswordRecovery=p.first)}},standalone:!1,decls:14,vars:2,consts:[[1,"po-row"],["p-label","Data Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Data Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Data SMS Code","p-value","999999",1,"po-md-2"],["src","./assets/images/expired.svg",1,"po-page-blocked-user-image","po-mb-5","po-mt-5"],[1,"po-font-title","po-text-center","po-md-12","po-mb-2"],[1,"po-font-text","po-text-center","po-md-12","po-mb-5","po-text-color-neutral-dark-40"],["p-label","Forgot your password?","p-kind","primary",1,"po-mb-5","po-offset-md-3","po-md-6","po-offset-lg-4","po-lg-4","po-offset-xl-4","po-xl-4",3,"p-click"],[3,"p-type","p-url-recovery"]],template:function(a,i){a&1&&(o(0,"po-container")(1,"div",0),r(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),t()(),o(5,"po-container"),r(6,"img",4),o(7,"div",0)(8,"p",5),e(9,"Oops!"),t(),o(10,"p",6),e(11," Password Recovery Requested by user "),t(),o(12,"po-button",7),u("p-click",function(){return i.openPasswordRecoveryModal()}),t()()(),r(13,"po-modal-password-recovery",8)),a&2&&(s(13),m("p-type",i.type)("p-url-recovery",i.urlRecovery))},dependencies:[R,X,N,S],encapsulation:2})}return n})();var ge=n=>({"docs-sample-code-tabs":n}),de=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-modal-password-recovery-request-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Modal Password Recovery Request"),t(),o(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.html"),t(),o(13,"pre",7),e(14,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Data Phone" p-value="(99) 99999-9999"></po-info>
    <po-info class="po-md-2" p-label="Data Email" p-value="mail@mail.com"></po-info>
    <po-info class="po-md-2" p-label="Data SMS Code" p-value="999999"></po-info>
  </div>
</po-container>

<po-container>
  <img class="po-page-blocked-user-image po-mb-5 po-mt-5" src="./assets/images/expired.svg" />

  <div class="po-row">
    <p class="po-font-title po-text-center po-md-12 po-mb-2">Oops!</p>
    <p class="po-font-text po-text-center po-md-12 po-mb-5 po-text-color-neutral-dark-40">
      Password Recovery Requested by user
    </p>
    <po-button
      class="po-mb-5 po-offset-md-3 po-md-6 po-offset-lg-4 po-lg-4 po-offset-xl-4 po-xl-4"
      p-label="Forgot your password?"
      p-kind="primary"
      (p-click)="openPasswordRecoveryModal()"
    >
    </po-button>
  </div>
</po-container>

<po-modal-password-recovery [p-type]="type" [p-url-recovery]="urlRecovery"> </po-modal-password-recovery>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';

import { PoModalPasswordRecoveryComponent, PoModalPasswordRecoveryType } from '@po-ui/ng-templates';

@Component({
    selector: 'sample-po-modal-password-recovery-request',
    templateUrl: './sample-po-modal-password-recovery-request.component.html',
    standalone: false
})
export class SamplePoModalPasswordRecoveryRequestComponent {
  @ViewChild(PoModalPasswordRecoveryComponent) poModalPasswordRecovery: PoModalPasswordRecoveryComponent;

  type: PoModalPasswordRecoveryType = PoModalPasswordRecoveryType.All;
  urlRecovery: string = 'https://po-sample-api.onrender.com/v1/users';

  openPasswordRecoveryModal() {
    this.poModalPasswordRecovery.open();
  }
}
`),t()()()()(),o(21,"div",10),r(22,"sample-po-modal-password-recovery-request"),t(),r(23,"hr")),a&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),C(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",x(4,ge,i.hideSampleCodeTabs)))},dependencies:[M,f,b,g,se],encapsulation:2})}return n})();var pe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-modal-password-recovery-doc"]],standalone:!1,decls:603,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],["id","processos"],["id","recupera\xE7\xE3o-por-email"],["id","recupera\xE7\xE3o-por-sms"],["id","valida\xE7\xE3o-do-c\xF3digo-sms"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(a,i){a&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoModalPasswordRecoveryModule } from '@po-ui/ng-templates';"),t()(),o(4,"div",2)(5,"p"),e(6,"M\xF3dulo do template do po-modal-password-recovery."),t()(),o(7,"h3",3),e(8,"Componente"),t(),o(9,"h4",4)(10,"code",5),e(11,"PoModalPasswordRecoveryComponent"),t()(),o(12,"div",2)(13,"p"),e(14,"O componente "),o(15,"code"),e(16,"po-modal-password-recovery"),t(),e(17," \xE9 utilizado como template para solicita\xE7\xE3o de troca de senha."),t(),o(18,"p"),e(19,"\xC9 composto por uma modal que possui tr\xEAs telas, cada uma com as seguintes caracter\xEDsticas:"),t(),o(20,"ul")(21,"li"),e(22,"A primeira possui campos para preenchimento de email ou n\xFAmero de telefone;"),t(),o(23,"li"),e(24,"Tela com campo para preenchimento de c\xF3digo SMS enviado para o n\xFAmero de telefone enviado;"),t(),o(25,"li"),e(26,"A terceira se trata de uma confirma\xE7\xE3o de envio de link para a caixa de email do usu\xE1rio."),t()(),o(27,"p"),e(28,"A propriedade "),o(29,"code"),e(30,"p-url-recovery"),t(),e(31,` automatiza a rotina do componente e simplifica o processo
para recupera\xE7\xE3o de senha, bastando definir uma url para requisi\xE7\xE3o dos recursos.
Seu detalhamento para uso pode ser visto logo abaixo em `),o(32,"em"),e(33,"propriedades"),t(),e(34,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),t(),o(35,"p"),e(36,`Para a modal de digita\xE7\xE3o de c\xF3digo SMS, \xE9 poss\xEDvel definir uma mensagem de erro
customizada com a propriedade `),o(37,"code"),e(38,"p-code-error"),t(),e(39,` e h\xE1 um link para
reenvio de c\xF3digo por SMS. Ao reenviar, o evento `),o(40,"code"),e(41,"p-code-submit"),t(),e(42,` envia um objeto com o telefone do usu\xE1rio e a quantidade
de vezes em que o usu\xE1rio fez a solicita\xE7\xE3o de reenvio.`),t(),o(43,"blockquote")(44,"p"),e(45,`\xC9 indicada a utiliza\xE7\xE3o da tela de digita\xE7\xE3o para envio de c\xF3digo SMS apenas
se a op\xE7\xE3o por envio SMS for disponibilizada para o usu\xE1rio.`),t()(),o(46,"p"),e(47,"A modal de confirma\xE7\xE3o cont\xE9m uma a\xE7\xE3o de reenvio e o evento "),o(48,"code"),e(49,"p-submit"),t(),e(50,`
\xE9 quem passa o objeto contendo o email em conjunto com a quantidade de tentativas de reenvio.`),t(),o(51,"blockquote")(52,"p"),e(53,"A tela de confirma\xE7\xE3o \xE9 indicada para quando o usu\xE1rio solicitar a troca atrav\xE9s do email."),t()(),o(54,"blockquote")(55,"p"),e(56,"Os textos das modals s\xE3o pr\xE9-definidos, imut\xE1veis e s\xE3o traduzidos de acordo com o idioma do "),o(57,"em"),e(58,"browser"),t(),e(59," (pt, en e es)"),t()(),o(60,"p"),e(61,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),o(62,"em"),e(63,"assets"),t(),e(64," no arquivo "),o(65,"strong"),e(66,"angular.json"),t(),e(67," da aplica\xE7\xE3o na seguinte ordem:"),t(),o(68,"pre")(69,"code"),e(70,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]`),t()()(),o(71,"div",6)(72,"h4",7),e(73,"Seletor"),t(),o(74,"pre",8),e(75,`<po-modal-password-recovery
    p-code-error="string"
    (p-code-submit)="EventEmitter"
    p-contact-email="string"
    p-phone-mask="string"
    (p-submit)="EventEmitter"
    p-type="PoModalPasswordRecoveryType"
    p-url-recovery="string" >
</po-modal-password-recovery>
`),t()(),o(76,"h4",9),e(77,"Propriedades"),t(),o(78,"table",10)(79,"tr",11)(80,"th",12),e(81,"Nome"),t(),o(82,"th",12),e(83,"Tipo"),t(),o(84,"th",12),e(85,"Padr\xE3o"),t(),o(86,"th",12),e(87,"Descri\xE7\xE3o"),t()(),o(88,"tr",13)(89,"td",14)(90,"div",15)(91,"span",16),e(92," p-code-error"),r(93,"br"),t()()(),o(94,"td",17)(95,"code",18),e(96,"string"),t()(),o(97,"td",19),e(98,"-"),t(),o(99,"td",20)(100,"em")(101,"strong"),e(102,"(opcional)"),t()(),o(103,"p"),e(104,"Defini\xE7\xE3o de mensagem de erro customizada para quando o usu\xE1rio passar um c\xF3digo SMS inv\xE1lido ou errado."),t()()(),o(105,"tr",13)(106,"td",14)(107,"div",21)(108,"span",22),e(109," (p-code-submit)"),r(110,"br"),t()()(),o(111,"td",17)(112,"code",23),e(113,"EventEmitter"),t()(),o(114,"td",19),e(115,"-"),t(),o(116,"td",20)(117,"em")(118,"strong"),e(119,"(opcional)"),t()(),o(120,"p"),e(121,"A\xE7\xE3o contendo como par\xE2metro o c\xF3digo enviado por SMS e digitado pelo usu\xE1rio."),t(),o(122,"blockquote")(123,"p"),e(124,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),o(125,"code"),e(126,"p-url-recovery"),t(),e(127,"."),t()()()(),o(128,"tr",13)(129,"td",14)(130,"div",15)(131,"span",16),e(132," p-contact-email"),r(133,"br"),t()()(),o(134,"td",17)(135,"code",18),e(136,"string"),t()(),o(137,"td",19),e(138,"-"),t(),o(139,"td",20)(140,"em")(141,"strong"),e(142,"(opcional)"),t()(),o(143,"p"),e(144,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),t()()(),o(145,"tr",13)(146,"td",14)(147,"div",15)(148,"span",16),e(149," p-phone-mask"),r(150,"br"),t()()(),o(151,"td",17)(152,"code",18),e(153,"string"),t()(),o(154,"td",19)(155,"p")(156,"code"),e(157,"(99) 99999-9999"),t()()(),o(158,"td",20)(159,"em")(160,"strong"),e(161,"(opcional)"),t()(),o(162,"p"),e(163,"Defini\xE7\xE3o da mascara do campo de telefone."),t()()(),o(164,"tr",13)(165,"td",14)(166,"div",21)(167,"span",22),e(168," (p-submit)"),r(169,"br"),t()()(),o(170,"td",17)(171,"code",23),e(172,"EventEmitter"),t()(),o(173,"td",19),e(174,"-"),t(),o(175,"td",20)(176,"em")(177,"strong"),e(178,"(opcional)"),t()(),o(179,"p"),e(180,"A\xE7\xE3o contendo o email como par\xE2metro e que \xE9 executada quando o usu\xE1rio clica sobres os bot\xF5es de 'enviar' e 'reenviar' e-mail."),t(),o(181,"blockquote")(182,"p"),e(183,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),o(184,"code"),e(185,"p-url-recovery"),t(),e(186,"."),t()()()(),o(187,"tr",13)(188,"td",14)(189,"div",15)(190,"span",16),e(191," p-type"),r(192,"br"),t()()(),o(193,"td",17)(194,"code",24),e(195,"PoModalPasswordRecoveryType"),t()(),o(196,"td",19)(197,"p")(198,"code"),e(199,"PoModalPasswordRecoveryType.Email"),t()()(),o(200,"td",20)(201,"em")(202,"strong"),e(203,"(opcional)"),t()(),o(204,"p"),e(205,"Define o tipo de recupera\xE7\xE3o de senha que ser\xE1 exibido."),t()()(),o(206,"tr",13)(207,"td",14)(208,"div",15)(209,"span",16),e(210," p-url-recovery"),r(211,"br"),t()()(),o(212,"td",17)(213,"code",18),e(214,"string"),t()(),o(215,"td",19),e(216,"-"),t(),o(217,"td",20)(218,"em")(219,"strong"),e(220,"(opcional)"),t()(),o(221,"p"),e(222,`Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido,
o m\xE9todos `),o(223,"code"),e(224,"p-submit"),t(),e(225," e "),o(226,"code"),e(227,"p-submit-code"),t(),e(228,` ser\xE3o ignorados e o componente adquirir\xE1 automatiza\xE7\xE3o
para o processo de solicita\xE7\xE3o de troca de senha.`),t(),o(229,"h3",25),e(230,"Processos"),t(),o(231,"p"),e(232,"Ao digitar um valor v\xE1lido no campo de email/telefone e pressionar "),o(233,"strong"),e(234,"enviar"),t(),e(235,`,
o componente far\xE1 uma requisi\xE7\xE3o `),o(236,"code"),e(237,"POST"),t(),e(238," na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio."),t(),o(239,"pre")(240,"code"),e(241,`body {
 email: email,
 retry?: retry
}`),t()(),o(242,"h4",26),e(243,"Recupera\xE7\xE3o por email"),t(),o(244,"p"),e(245,"Para a recupera\xE7\xE3o de senha por "),o(246,"strong"),e(247,"email"),t(),e(248,", o c\xF3digo de resposta HTTP de status esperado \xE9 "),o(249,"code"),e(250,"204"),t(),e(251,"."),t(),o(252,"p"),e(253,"Em caso de "),o(254,"strong"),e(255,"sucesso"),t(),e(256,", ser\xE1 exibida a modal de confirma\xE7\xE3o de e-mail para o usu\xE1rio."),t(),o(257,"blockquote")(258,"p"),e(259,"A a\xE7\xE3o "),o(260,"strong"),e(261,"Reenviar"),t(),e(262,` na tela de confirma\xE7\xE3o efetua uma nova requisi\xE7\xE3o
passando-se o objeto com incremento para o valor da propriedade `),o(263,"strong"),e(264,"retry"),t(),e(265,"."),t()(),o(266,"p")(267,"em"),e(268,"Processo finalizado."),t()(),o(269,"h4",27),e(270,"Recupera\xE7\xE3o por SMS"),t(),o(271,"p"),e(272,"Se a op\xE7\xE3o de recupera\xE7\xE3o for por "),o(273,"strong"),e(274,"SMS"),t(),e(275,", o c\xF3digo de status de sucesso deve ser "),o(276,"code"),e(277,"200"),t(),e(278,`.
Em caso de `),o(279,"strong"),e(280,"sucesso"),t(),e(281,`, abre-se a modal de digita\xE7\xE3o de c\xF3digo SMS e a resposta
desta requisi\xE7\xE3o deve retornar uma defini\xE7\xE3o de dados abaixo:`),t(),o(282,"pre")(283,"code"),e(284,`200:
{
  hash: hash,
  urlValidationCode?: url
}`),t()(),o(285,"ul")(286,"li"),e(287,"O "),o(288,"strong"),e(289,"hash"),t(),e(290," ser\xE1 o c\xF3digo de valida\xE7\xE3o da solicita\xE7\xE3o do SMS para ser enviado juntamente com o c\xF3digo de verifica\xE7\xE3o do SMS;"),t(),o(291,"li")(292,"strong"),e(293,"urlValidationCode"),t(),e(294," \xE9 a url usada para valida\xE7\xE3o do c\xF3digo enviado por SMS."),t()(),o(295,"blockquote")(296,"p"),e(297,"Caso n\xE3o seja passado urlValidationCode, o endpoint usado para valida\xE7\xE3o do c\xF3digo ser\xE1 "),o(298,"code"),e(299,"<p-url-recovery>/validation"),t(),e(300,"."),t()(),o(301,"h4",28),e(302,"Valida\xE7\xE3o do c\xF3digo SMS"),t(),o(303,"p"),e(304,"Ao digitar um valor v\xE1lido no campo de c\xF3digo SMS e pressionar "),o(305,"strong"),e(306,"continuar"),t(),e(307,", o componente far\xE1 uma requisi\xE7\xE3o "),o(308,"code"),e(309,"POST"),t(),e(310," contendo:"),t(),o(311,"pre")(312,"code"),e(313,`POST /<p-url-recovery>/validation OU /<urlValidationCode>
Body {
 hash: hash,
 code: code
}`),t()(),o(314,"p"),e(315,"O c\xF3digo de resposta HTTP de status esperado \xE9 "),o(316,"code"),e(317,"200"),t(),e(318,"."),t(),o(319,"p"),e(320,"Em caso de "),o(321,"strong"),e(322,"erro"),t(),e(323,` na valida\xE7\xE3o do c\xF3digo SMS, a modal se mant\xE9m com o campo para digita\xE7\xE3o
de c\xF3digo SMS`),t(),o(324,"blockquote")(325,"p"),e(326,"Pode-se atribuir a mensagem de erro (message) para o atributo "),o(327,"code"),e(328,"p-code-error"),t(),e(329," conforme retorno abaixo:"),t()(),o(330,"pre")(331,"code"),e(332,`400
{
  error {
    message: 'Error Message'
  }
}`),t()(),o(333,"p"),e(334,"Em caso de "),o(335,"strong"),e(336,"sucesso"),t(),e(337,", espera-se a resposta desta requisi\xE7\xE3o retornando a seguinte defini\xE7\xE3o:"),t(),o(338,"pre")(339,"code"),e(340,`200:
{
  token: token,
  urlChangePassword?: url
}`),t()(),o(341,"ul")(342,"li")(343,"strong"),e(344,"token"),t(),e(345,": Token de altera\xE7\xE3o de senha;"),t(),o(346,"li")(347,"strong"),e(348,"urlChangePassword"),t(),e(349,": url para o formul\xE1rio de altera\xE7\xE3o de senha."),t()(),o(350,"p"),e(351,"O componente est\xE1 configurado para redirecionar para a url estabelecida em "),o(352,"code"),e(353,"urlChangePassword"),t(),e(354,"."),t(),o(355,"blockquote")(356,"p"),e(357,`Caso n\xE3o seja passado valor para urlChangePassword,
a url usada para valida\xE7\xE3o ser\xE1 a `),o(358,"code"),e(359,"<p-url-recovery>/changePassword?token=<token>"),t(),e(360,"."),t()(),o(361,"p")(362,"em"),e(363,"Processo finalizado."),t()()()()(),o(364,"h3",9),e(365,"M\xE9todos"),t(),o(366,"table",29)(367,"tr",13)(368,"th",30)(369,"div",15)(370,"h4")(371,"span",16),e(372," completed "),t()()()()(),o(373,"tr",20)(374,"td",20)(375,"p"),e(376,`Ac\xE3o para conclus\xE3o de processo e fechamento da modal. Indica-se sua utiliza\xE7\xE3o
para ap\xF3s o envio e valida\xE7\xE3o do c\xF3digo SMS enviado pelo usu\xE1rio.`),t(),o(377,"blockquote")(378,"p"),e(379,"Nas modals em que h\xE1 a a\xE7\xE3o de 'cancelar' dispensa-se o uso desta a\xE7\xE3o pois o componente j\xE1 trata o fechamento da modal."),t()()()()(),r(380,"br"),o(381,"table",29)(382,"tr",13)(383,"th",30)(384,"div",15)(385,"h4")(386,"span",16),e(387," open "),t()()()()(),o(388,"tr",20)(389,"td",20)(390,"p"),e(391,"Abre a modal de preenchimento de email ou n\xFAmero de telefone para solicita\xE7\xE3o de troca de senha."),t()()()(),r(392,"br"),o(393,"table",29)(394,"tr",13)(395,"th",30)(396,"div",15)(397,"h4")(398,"span",16),e(399," openConfirmation "),t()()()()(),o(400,"tr",20)(401,"td",20)(402,"p"),e(403,"Abre a modal de confirma\xE7\xE3o de envio de email."),t()()()(),r(404,"br"),o(405,"table",29)(406,"tr",13)(407,"th",30)(408,"div",15)(409,"h4")(410,"span",16),e(411," openSmsCode "),t()()()()(),o(412,"tr",20)(413,"td",20)(414,"p"),e(415,"Abre a modal de preenchimento do c\xF3digo SMS enviado ao usu\xE1rio."),t()()()(),r(416,"br"),o(417,"h3"),e(418,"Interfaces"),t(),o(419,"h4",31)(420,"code",5),e(421,"PoModalPasswordRecovery"),t()(),o(422,"div",2)(423,"p"),e(424,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),o(425,"code"),e(426,"po-modal-password-recovery"),t(),e(427,"."),t()(),o(428,"h4",9),e(429,"Propriedades"),t(),o(430,"table",10)(431,"tr",11)(432,"th",12),e(433,"Nome"),t(),o(434,"th",12),e(435,"Tipo"),t(),o(436,"th",12),e(437,"Descri\xE7\xE3o"),t()(),o(438,"tr",13)(439,"td",14)(440,"div",15)(441,"span",16),e(442," code"),r(443,"br"),t()()(),o(444,"td",17)(445,"code",18),e(446,"string"),t()(),o(447,"td",20)(448,"em")(449,"strong"),e(450,"(opcional)"),t()(),o(451,"p"),e(452,"Valor contendo o c\xF3digo enviado por SMS e digitado pelo usu\xE1rio."),t()()(),o(453,"tr",13)(454,"td",14)(455,"div",15)(456,"span",16),e(457," email"),r(458,"br"),t()()(),o(459,"td",17)(460,"code",18),e(461,"string"),t()(),o(462,"td",20)(463,"em")(464,"strong"),e(465,"(opcional)"),t()(),o(466,"p"),e(467,"Valor contendo o email enviado pelo usu\xE1rio."),t()()(),o(468,"tr",13)(469,"td",14)(470,"div",15)(471,"span",16),e(472," hash"),r(473,"br"),t()()(),o(474,"td",17)(475,"code",18),e(476,"string"),t()(),o(477,"td",20)(478,"em")(479,"strong"),e(480,"(opcional)"),t()(),o(481,"p"),e(482,"C\xF3digo de valida\xE7\xE3o da solicita\xE7\xE3o do SMS para ser enviado junto com o c\xF3digo de verifica\xE7\xE3o do SMS"),t()()(),o(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),e(487," retry"),r(488,"br"),t()()(),o(489,"td",17)(490,"code",32),e(491,"number"),t()(),o(492,"td",20)(493,"em")(494,"strong"),e(495,"(opcional)"),t()(),o(496,"p"),e(497,"N\xFAmero de tentativas de reenvio."),t()()(),o(498,"tr",13)(499,"td",14)(500,"div",15)(501,"span",16),e(502," sms"),r(503,"br"),t()()(),o(504,"td",17)(505,"code",18),e(506,"string"),t()(),o(507,"td",20)(508,"em")(509,"strong"),e(510,"(opcional)"),t()(),o(511,"p"),e(512,"Valor contendo o n\xFAmero de telefone enviado pelo usu\xE1rio."),t()()(),o(513,"tr",13)(514,"td",14)(515,"div",15)(516,"span",16),e(517," token"),r(518,"br"),t()()(),o(519,"td",17)(520,"code",18),e(521,"string"),t()(),o(522,"td",20)(523,"em")(524,"strong"),e(525,"(opcional)"),t()(),o(526,"p"),e(527,"Token de altera\xE7\xE3o de senha"),t()()(),o(528,"tr",13)(529,"td",14)(530,"div",15)(531,"span",16),e(532," urlChangePassword"),r(533,"br"),t()()(),o(534,"td",17)(535,"code",18),e(536,"string"),t()(),o(537,"td",20)(538,"em")(539,"strong"),e(540,"(opcional)"),t()(),o(541,"p"),e(542,"URL para o formul\xE1rio de altera\xE7\xE3o de senha"),t()()(),o(543,"tr",13)(544,"td",14)(545,"div",15)(546,"span",16),e(547," urlValidationCode"),r(548,"br"),t()()(),o(549,"td",17)(550,"code",18),e(551,"string"),t()(),o(552,"td",20)(553,"em")(554,"strong"),e(555,"(opcional)"),t()(),o(556,"p"),e(557,"URL usada para valida\xE7\xE3o do c\xF3digo enviado por SMS"),t()()()(),o(558,"h3"),e(559,"Enums"),t(),o(560,"h4",4)(561,"code",5),e(562,"PoModalPasswordRecoveryType"),t()(),o(563,"div",2)(564,"p")(565,"em"),e(566,"Enum"),t(),e(567," para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha."),t()(),o(568,"h4",9),e(569,"Propriedades"),t(),o(570,"table",10)(571,"tr",11)(572,"th",12),e(573,"Nome"),t(),o(574,"th",12),e(575,"Descri\xE7\xE3o"),t()(),o(576,"tr",13)(577,"td",14)(578,"div",15)(579,"span",16),e(580," All"),r(581,"br"),t()()(),o(582,"td",20)(583,"p"),e(584,"Possibilita ao usu\xE1rio optar por envio via email ou SMS"),t()()(),o(585,"tr",13)(586,"td",14)(587,"div",15)(588,"span",16),e(589," Email"),r(590,"br"),t()()(),o(591,"td",20)(592,"p"),e(593,"Defini\xE7\xE3o para recupera\xE7\xE3o apenas por email"),t()()(),o(594,"tr",13)(595,"td",14)(596,"div",15)(597,"span",16),e(598," SMS"),r(599,"br"),t()()(),o(600,"td",20)(601,"p"),e(602,"Defini\xE7\xE3o para recupera\xE7\xE3o apenas por SMS"),t()()()()())},dependencies:[f],encapsulation:2})}return n})();var me=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||n)(_(G),_(K))};static \u0275cmp=c({type:n,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Modal Password Recovery",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,i){a&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),r(3,"sample-po-modal-password-recovery-doc"),t(),o(4,"po-tab",3),r(5,"sample-po-modal-password-recovery-basic-view")(6,"sample-po-modal-password-recovery-labs-view")(7,"sample-po-modal-password-recovery-request-view"),t()()()),a&2&&(m("p-actions",i.actions),s(2),m("p-active",i.activeTab.includes("doc")),s(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[ee,b,g,ae,le,de,pe],encapsulation:2})}return n})();var Pe=[{path:"",component:me}],ce=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=V({type:n});static \u0275inj=F({imports:[j.forChild(Pe),j]})}return n})();var Xe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=V({type:n});static \u0275inj=F({imports:[te,ce]})}return n})();export{Xe as DocPoModalPasswordRecoveryModule};
