import{$ as D,$a as T,$c as Q,$d as te,Bc as K,F as x,Fa as A,G as C,Ga as o,Ia as h,Ka as v,La as B,Lb as I,Ma as P,Mb as H,Nb as R,Ob as L,Od as ee,Pa as w,Pb as j,T as r,U as _,Wb as U,Xd as S,Yb as J,Yd as f,Zb as O,_ as d,ad as F,ha as s,ia as W,ka as y,md as X,na as t,oa as e,oc as Y,pa as l,pc as N,qc as G,re as E,se as oe,ta as q,ua as b,y as k,yd as Z,zd as $}from"./chunk-TZ5FQAUY.js";var ne=(()=>{class n{buttons=[{label:"Button 1",action:this.action.bind(this)},{label:"Button 2",action:this.action.bind(this)}];action(p){alert(`${p.label}`)}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-button-group-basic"]],standalone:!1,decls:1,vars:1,consts:[[1,"po-md-12",3,"p-buttons"]],template:function(a,i){a&1&&l(0,"po-button-group",0),a&2&&s("p-buttons",i.buttons)},dependencies:[G],encapsulation:2})}return n})();var ge=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-button-group-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Button Group Basic"),e(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-button-group-basic/sample-po-button-group-basic.component.html"),e(),t(13,"pre",7),o(14,`<po-button-group class="po-md-12" [p-buttons]="buttons"> </po-button-group>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-button-group-basic/sample-po-button-group-basic.component.ts"),e(),t(19,"pre",9),o(20,`import { Component } from '@angular/core';

import { PoButtonGroupItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-basic',
  templateUrl: './sample-po-button-group-basic.component.html',
  standalone: false
})
export class SamplePoButtonGroupBasicComponent {
  buttons: Array<PoButtonGroupItem> = [
    { label: 'Button 1', action: this.action.bind(this) },
    { label: 'Button 2', action: this.action.bind(this) }
  ];

  action(button) {
    alert(\`\${button.label}\`);
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-button-group-basic"),e(),l(23,"hr")),a&2&&(r(5),y("po-icon "+i.sampleCodeButtonIcon),r(),h(" ",i.sampleCodeButtonLabel,""),r(),s("ngClass",w(4,ge,i.hideSampleCodeTabs)))},dependencies:[T,E,S,f,ne],encapsulation:2})}return n})();var ae=(()=>{class n{poNotification;button;buttons;toggle;iconsOptions=[{label:"ph ph-newspaper",value:"ph ph-newspaper"},{label:"ph ph-calendar-dots",value:"ph ph-calendar-dots"},{label:"fa fa-podcast",value:"fa fa-podcast"},{label:"fa fa-calculator",value:"fa fa-calculator"}];toggleOptions=[{label:"none",value:N.None},{label:"single",value:N.Single},{label:"multiple",value:N.Multiple}];constructor(p){this.poNotification=p}ngOnInit(){this.restore()}action(p){this.poNotification.success(p.action)}addButton(){this.buttons.push({icon:this.button.icon,label:this.button.label,action:this.action.bind(this,this.button),disabled:this.button.disabled,tooltip:this.button.tooltip}),this.button={}}restore(){this.button={},this.buttons=[]}static \u0275fac=function(a){return new(a||n)(_(F))};static \u0275cmp=d({type:n,selectors:[["sample-po-button-group-labs"]],standalone:!1,decls:20,vars:11,consts:[["fButtons","ngForm"],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-buttons","p-toggle"],["name","buttonLabel","p-label","Button label",1,"po-md-4",3,"ngModelChange","ngModel"],["name","buttonAction","p-label","Button action","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","buttonDisabled","p-label","Button disabled",1,"po-md-4",3,"ngModelChange","ngModel"],["name","buttonTooltip","p-label","Button tooltip",1,"po-md-4",3,"ngModelChange","ngModel"],["name","buttonIcon","p-label","Button Icon",1,"po-md-8",3,"ngModelChange","ngModel","p-options"],["p-label","Add button",1,"po-md-2",3,"p-click","p-disabled"],["name","toggle","p-label","Toggle",1,"po-md-3",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let u=q();t(0,"div",2),l(1,"po-button-group",3),e(),l(2,"hr"),t(3,"form",null,0)(5,"div",2)(6,"po-input",4),P("ngModelChange",function(m){return x(u),B(i.button.label,m)||(i.button.label=m),C(m)}),e(),t(7,"po-input",5),P("ngModelChange",function(m){return x(u),B(i.button.action,m)||(i.button.action=m),C(m)}),e(),t(8,"po-switch",6),P("ngModelChange",function(m){return x(u),B(i.button.disabled,m)||(i.button.disabled=m),C(m)}),e(),t(9,"po-input",7),P("ngModelChange",function(m){return x(u),B(i.button.tooltip,m)||(i.button.tooltip=m),C(m)}),e(),t(10,"po-radio-group",8),P("ngModelChange",function(m){return x(u),B(i.button.icon,m)||(i.button.icon=m),C(m)}),e()(),t(11,"div",2)(12,"po-button",9),b("p-click",function(){x(u);let m=A(4);return i.addButton(),C(m.reset())}),e()()(),l(13,"hr"),t(14,"form",null,1)(16,"div",2)(17,"po-select",10),P("ngModelChange",function(m){return x(u),B(i.toggle,m)||(i.toggle=m),C(m)}),e()(),t(18,"div",2)(19,"po-button",11),b("p-click",function(){x(u);let m=A(4);return A(15).reset(),m.reset(),C(i.restore())}),e()()()}if(a&2){let u=A(4);r(),s("p-buttons",i.buttons)("p-toggle",i.toggle),r(5),v("ngModel",i.button.label),r(),v("ngModel",i.button.action),r(),v("ngModel",i.button.disabled),r(),v("ngModel",i.button.tooltip),r(),v("ngModel",i.button.icon),s("p-options",i.iconsOptions),r(2),s("p-disabled",u.invalid),r(5),v("ngModel",i.toggle),s("p-options",i.toggleOptions)}},dependencies:[j,I,H,L,R,Y,G,K,X,Z,Q],encapsulation:2})}return n})();var Ee=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-button-group-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Button Group Labs"),e(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-button-group-labs/sample-po-button-group-labs.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="buttons" [p-toggle]="toggle"> </po-button-group>
</div>

<hr />

<form #fButtons="ngForm">
  <div class="po-row">
    <po-input class="po-md-4" name="buttonLabel" [(ngModel)]="button.label" p-label="Button label"> </po-input>

    <po-input class="po-md-4" name="buttonAction" [(ngModel)]="button.action" p-label="Button action" p-required>
    </po-input>

    <po-switch class="po-md-4" name="buttonDisabled" [(ngModel)]="button.disabled" p-label="Button disabled">
    </po-switch>

    <po-input class="po-md-4" name="buttonTooltip" [(ngModel)]="button.tooltip" p-label="Button tooltip"> </po-input>

    <po-radio-group
      class="po-md-8"
      name="buttonIcon"
      [(ngModel)]="button.icon"
      p-label="Button Icon"
      [p-options]="iconsOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-2"
      p-label="Add button"
      [p-disabled]="fButtons.invalid"
      (p-click)="addButton(); fButtons.reset()"
    >
    </po-button>
  </div>
</form>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-select class="po-md-3" name="toggle" [(ngModel)]="toggle" p-label="Toggle" [p-options]="toggleOptions">
    </po-select>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="f.reset(); fButtons.reset(); restore()"> </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-button-group-labs/sample-po-button-group-labs.component.ts"),e(),t(19,"pre",9),o(20,`import { Component, OnInit } from '@angular/core';

import {
  PoButtonGroupItem,
  PoButtonGroupToggle,
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-labs',
  templateUrl: './sample-po-button-group-labs.component.html',
  standalone: false
})
export class SamplePoButtonGroupLabsComponent implements OnInit {
  button: any;
  buttons: Array<PoButtonGroupItem>;
  toggle: PoButtonGroupToggle;

  iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'ph ph-newspaper', value: 'ph ph-newspaper' },
    { label: 'ph ph-calendar-dots', value: 'ph ph-calendar-dots' },
    { label: 'fa fa-podcast', value: 'fa fa-podcast' },
    { label: 'fa fa-calculator', value: 'fa fa-calculator' }
  ];

  readonly toggleOptions: Array<PoSelectOption> = [
    { label: 'none', value: PoButtonGroupToggle.None },
    { label: 'single', value: PoButtonGroupToggle.Single },
    { label: 'multiple', value: PoButtonGroupToggle.Multiple }
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
  }

  action(button) {
    this.poNotification.success(button.action);
  }

  addButton() {
    this.buttons.push({
      icon: this.button.icon,
      label: this.button.label,
      action: this.action.bind(this, this.button),
      disabled: this.button.disabled,
      tooltip: this.button.tooltip
    });

    this.button = {};
  }

  restore() {
    this.button = {};
    this.buttons = [];
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-button-group-labs"),e(),l(23,"hr")),a&2&&(r(5),y("po-icon "+i.sampleCodeButtonIcon),r(),h(" ",i.sampleCodeButtonLabel,""),r(),s("ngClass",w(4,Ee,i.hideSampleCodeTabs)))},dependencies:[T,E,S,f,ae],encapsulation:2})}return n})();var pe=(()=>{class n{poNotification;attendances=[{label:"Appointment",icon:"ph ph-calendar-dots",action:this.getPassword.bind(this)},{label:"Emergency",icon:"ph ph-syringe",action:this.getPassword.bind(this)},{label:"Exams",icon:"ph ph-flask",action:this.getPassword.bind(this)}];constructor(p){this.poNotification=p}getPassword(p){let a=this.randomPassword(),i=this.getTypeNotification(p.label);this.poNotification[i](`
      Type of attendance: ${p.label} -
      Your password: ${a}
    `)}getTypeNotification(p=""){switch(p){case"Emergency":return"error";case"Appointment":return"information";case"Exams":return"success"}}randomPassword(){return Math.random().toString().slice(2,5)}static \u0275fac=function(a){return new(a||n)(_(F))};static \u0275cmp=d({type:n,selectors:[["sample-po-button-group-attendance"]],standalone:!1,decls:8,vars:1,consts:[[1,"po-row"],[1,"po-md-12","po-font-title"],[1,"po-md-12","po-font-text","po-text-color-neutral-dark-40"],[1,"po-md-12",3,"p-buttons"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"div",1),o(2,"Choose the type of attendance"),e(),t(3,"div",2),o(4,"Get your password"),e()(),l(5,"hr"),t(6,"div",0),l(7,"po-button-group",3),e()),a&2&&(r(7),s("p-buttons",i.attendances))},dependencies:[G],encapsulation:2})}return n})();var ve=n=>({"docs-sample-code-tabs":n}),re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-button-group-attendance-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Button Group - Attendance"),e(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-button-group-attendance/sample-po-button-group-attendance.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-row">
  <div class="po-md-12 po-font-title">Choose the type of attendance</div>
  <div class="po-md-12 po-font-text po-text-color-neutral-dark-40">Get your password</div>
</div>

<hr />

<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="attendances"> </po-button-group>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts"),e(),t(19,"pre",9),o(20,`import { Component } from '@angular/core';

import { PoButtonGroupItem, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-attendance',
  templateUrl: './sample-po-button-group-attendance.component.html',
  standalone: false
})
export class SamplePoButtonGroupAttendanceComponent {
  attendances: Array<PoButtonGroupItem> = [
    { label: 'Appointment', icon: 'ph ph-calendar-dots', action: this.getPassword.bind(this) },
    { label: 'Emergency', icon: 'ph ph-syringe', action: this.getPassword.bind(this) },
    { label: 'Exams', icon: 'ph ph-flask', action: this.getPassword.bind(this) }
  ];

  constructor(private poNotification: PoNotificationService) {}

  getPassword(attendance) {
    const password = this.randomPassword();
    const typeNotification = this.getTypeNotification(attendance.label);

    this.poNotification[typeNotification](\`
      Type of attendance: \${attendance.label} -
      Your password: \${password}
    \`);
  }

  getTypeNotification(label: string = ''): string {
    switch (label) {
      case 'Emergency':
        return 'error';
      case 'Appointment':
        return 'information';
      case 'Exams':
        return 'success';
    }
  }

  randomPassword() {
    return Math.random().toString().slice(2, 5);
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-button-group-attendance"),e(),l(23,"hr")),a&2&&(r(5),y("po-icon "+i.sampleCodeButtonIcon),r(),h(" ",i.sampleCodeButtonLabel,""),r(),s("ngClass",w(4,ve,i.hideSampleCodeTabs)))},dependencies:[T,E,S,f,pe],encapsulation:2})}return n})();var me=(()=>{class n{setBold;setItalic;setTextAlignment;setUnderline;textArea='"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway';fontStyle=[{icon:"ph ph-text-b",action:()=>this.setBold=!this.setBold,tooltip:"Bold"},{icon:"ph ph-text-italic",action:()=>this.setItalic=!this.setItalic,tooltip:"Italic"},{icon:"ph ph-text-underline",action:()=>this.setUnderline=!this.setUnderline,tooltip:"Underline"}];textAlign=[{icon:"ph ph-text-align-left",selected:!0,action:()=>this.setTextAlignment="left",tooltip:"Left align"},{icon:"ph ph-text-align-center",action:()=>this.setTextAlignment="center",tooltip:"Center align"},{icon:"ph ph-text-align-right",action:()=>this.setTextAlignment="right",tooltip:"Right align"},{icon:"ph ph-text-align-justify",action:()=>this.setTextAlignment="justify",tooltip:"Justify"}];static \u0275fac=function(a){return new(a||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-button-group-post"]],standalone:!1,decls:12,vars:12,consts:[[1,"po-font-title","po-mb-2"],[1,"po-row"],[1,"po-md-4","po-lg-3"],["p-toggle","multiple",3,"p-buttons"],["p-toggle","single",3,"p-buttons"],["name","textArea","p-maxlength","400",1,"po-md-12",3,"ngModelChange","ngModel"],[1,"po-md-12","po-mt-3","po-font-text-large"]],template:function(a,i){a&1&&(t(0,"div",0),o(1,"Create New Post"),e(),t(2,"po-widget")(3,"div",1)(4,"div",2),l(5,"po-button-group",3),e(),t(6,"div",2),l(7,"po-button-group",4),e(),t(8,"po-textarea",5),P("ngModelChange",function(c){return B(i.textArea,c)||(i.textArea=c),c}),e(),l(9,"hr"),t(10,"div",6),o(11),e()()()),a&2&&(r(5),s("p-buttons",i.fontStyle),r(2),s("p-buttons",i.textAlign),r(),v("ngModel",i.textArea),r(2),W("font-weight",i.setBold?"bold":"normal")("font-style",i.setItalic?"italic":"normal")("text-decoration",i.setUnderline?"underline":"none")("text-align",i.setTextAlignment),r(),h(" ",i.textArea," "))},dependencies:[I,L,G,$,te],encapsulation:2})}return n})();var ye=n=>({"docs-sample-code-tabs":n}),se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-button-group-post-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Button Group - Post"),e(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-button-group-post/sample-po-button-group-post.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-font-title po-mb-2">Create New Post</div>
<po-widget>
  <div class="po-row">
    <div class="po-md-4 po-lg-3">
      <po-button-group p-toggle="multiple" [p-buttons]="fontStyle"> </po-button-group>
    </div>
    <div class="po-md-4 po-lg-3">
      <po-button-group p-toggle="single" [p-buttons]="textAlign"> </po-button-group>
    </div>
    <po-textarea class="po-md-12" name="textArea" [(ngModel)]="textArea" p-maxlength="400"> </po-textarea>
    <hr />
    <div
      class="po-md-12 po-mt-3 po-font-text-large"
      [style.font-weight]="setBold ? 'bold' : 'normal'"
      [style.font-style]="setItalic ? 'italic' : 'normal'"
      [style.text-decoration]="setUnderline ? 'underline' : 'none'"
      [style.text-align]="setTextAlignment"
    >
      { { textArea }}
    </div>
  </div>
</po-widget>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-button-group-post/sample-po-button-group-post.component.ts"),e(),t(19,"pre",9),o(20,`import { Component } from '@angular/core';

import { PoButtonGroupItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-post',
  templateUrl: './sample-po-button-group-post.component.html',
  standalone: false
})
export class SamplePoButtonGroupPostComponent {
  setBold: boolean;
  setItalic: boolean;
  setTextAlignment: string;
  setUnderline: boolean;
  textArea: string = '"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway';

  fontStyle: Array<PoButtonGroupItem> = [
    { icon: 'ph ph-text-b', action: () => (this.setBold = !this.setBold), tooltip: 'Bold' },
    { icon: 'ph ph-text-italic', action: () => (this.setItalic = !this.setItalic), tooltip: 'Italic' },
    { icon: 'ph ph-text-underline', action: () => (this.setUnderline = !this.setUnderline), tooltip: 'Underline' }
  ];

  textAlign: Array<PoButtonGroupItem> = [
    {
      icon: 'ph ph-text-align-left',
      selected: true,
      action: () => (this.setTextAlignment = 'left'),
      tooltip: 'Left align'
    },
    { icon: 'ph ph-text-align-center', action: () => (this.setTextAlignment = 'center'), tooltip: 'Center align' },
    { icon: 'ph ph-text-align-right', action: () => (this.setTextAlignment = 'right'), tooltip: 'Right align' },
    { icon: 'ph ph-text-align-justify', action: () => (this.setTextAlignment = 'justify'), tooltip: 'Justify' }
  ];
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-button-group-post"),e(),l(23,"hr")),a&2&&(r(5),y("po-icon "+i.sampleCodeButtonIcon),r(),h(" ",i.sampleCodeButtonLabel,""),r(),s("ngClass",w(4,ye,i.hideSampleCodeTabs)))},dependencies:[T,E,S,f,me],encapsulation:2})}return n})();var de=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-button-group-doc"]],standalone:!1,decls:532,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","boas-pr\xE1ticas"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoButtonGroupItem>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),o(3,"import { PoButtonGroupModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),o(6,"M\xF3dulo do componente po-button-group."),e()(),t(7,"h3",3),o(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),o(11,"PoButtonGroupComponent"),e()(),t(12,"div",2)(13,"p"),o(14,"O componente "),t(15,"code"),o(16,"po-button-group"),e(),o(17,` \xE9 formado por um conjunto de bot\xF5es distribu\xEDdos horizontalmente.
Cada bot\xE3o do grupo \xE9 tratado de forma individual, recebendo assim um r\xF3tulo, uma a\xE7\xE3o bem como se dever\xE1 estar habilitado ou n\xE3o.`),e(),t(18,"p"),o(19,`Este componente al\xE9m de servir como um agrupador de bot\xF5es para a\xE7\xE3o, tamb\xE9m permite que sejam utilizados
para sele\xE7\xF5es multiplas e \xFAnicas.`),e(),t(20,"p"),o(21,`O grupo de bot\xF5es deve ser utilizado para organizar as a\xE7\xF5es de maneira uniforme e transmitir a ideia de que os bot\xF5es fazem
parte de um mesmo contexto.`),e(),t(22,"h4",6),o(23,"Boas pr\xE1ticas"),e(),t(24,"ul")(25,"li"),o(26,"Evite usar o "),t(27,"code"),o(28,"po-button-group"),e(),o(29," com apenas 1 a\xE7\xE3o, para isso utilize o "),t(30,"code"),o(31,"po-button"),e(),o(32,"."),e(),t(33,"li"),o(34,"Procure utilizar no m\xE1ximo 3 a\xE7\xF5es para cada "),t(35,"code"),o(36,"po-button-group"),e(),o(37,"."),e()(),t(38,"blockquote")(39,"p"),o(40,"As recomenda\xE7\xF5es do "),t(41,"code"),o(42,"po-button"),e(),o(43," tamb\xE9m valem para o "),t(44,"code"),o(45,"po-button-group"),e(),o(46,"."),e()(),t(47,"h4",7),o(48,"Tokens customiz\xE1veis"),e(),t(49,"p"),o(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(51,"blockquote")(52,"p"),o(53,"Para maiores informa\xE7\xF5es, acesse o guia "),t(54,"a",8),o(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),o(56,"."),e()(),t(57,"table")(58,"thead")(59,"tr")(60,"th"),o(61,"Propriedade"),e(),t(62,"th"),o(63,"Descri\xE7\xE3o"),e(),t(64,"th"),o(65,"Valor Padr\xE3o"),e()()(),t(66,"tbody")(67,"tr")(68,"td")(69,"strong"),o(70,"Default Values"),e()(),l(71,"td")(72,"td"),e(),t(73,"tr")(74,"td")(75,"code"),o(76,"--font-family"),e()(),t(77,"td"),o(78,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(79,"td")(80,"code"),o(81,"var(--font-family-theme)"),e()()(),t(82,"tr")(83,"td")(84,"code"),o(85,"--font-size"),e()(),t(86,"td"),o(87,"Tamanho da fonte"),e(),t(88,"td")(89,"code"),o(90,"var(--font-size-default)"),e()()(),t(91,"tr")(92,"td")(93,"code"),o(94,"--font-weight"),e()(),t(95,"td"),o(96,"Peso da fonte"),e(),t(97,"td")(98,"code"),o(99,"var(--font-weight-bold)"),e()()(),t(100,"tr")(101,"td")(102,"code"),o(103,"--line-height"),e()(),t(104,"td"),o(105,"Tamanho da label"),e(),t(106,"td")(107,"code"),o(108,"var(--line-height-none)"),e()()(),t(109,"tr")(110,"td")(111,"code"),o(112,"--border-radius"),e()(),t(113,"td"),o(114,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),t(115,"td")(116,"code"),o(117,"var(--border-radius-md)"),e()()(),t(118,"tr")(119,"td")(120,"code"),o(121,"--border-width"),e()(),t(122,"td"),o(123,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),e(),t(124,"td")(125,"code"),o(126,"var(--border-width-md)"),e()()(),t(127,"tr")(128,"td")(129,"code"),o(130,"--padding"),e()(),t(131,"td"),o(132,"Preenchimento"),e(),t(133,"td")(134,"code"),o(135,"0 1em"),e()()(),t(136,"tr")(137,"td")(138,"code"),o(139,"--text-color"),e()(),t(140,"td"),o(141,"Cor do texto"),e(),t(142,"td")(143,"code"),o(144,"var(--color-neutral-light-00)"),e()()(),t(145,"tr")(146,"td")(147,"code"),o(148,"--color"),e()(),t(149,"td"),o(150,"Cor principal do bot\xE3o"),e(),t(151,"td")(152,"code"),o(153,"var(--color-action-default)"),e()()(),t(154,"tr")(155,"td")(156,"code"),o(157,"--background-color"),e()(),t(158,"td"),o(159,"Cor de background"),e(),t(160,"td")(161,"code"),o(162,"var(--color-transparent)"),e()()(),t(163,"tr")(164,"td")(165,"code"),o(166,"--shadow"),e()(),t(167,"td"),o(168,"Cont\xE9m o valor da sombra do elemento"),e(),t(169,"td")(170,"code"),o(171,"var(--shadow-none)"),e()()(),t(172,"tr")(173,"td")(174,"strong"),o(175,"Hover"),e()(),l(176,"td")(177,"td"),e(),t(178,"tr")(179,"td")(180,"code"),o(181,"--color-hover"),e()(),t(182,"td"),o(183,"Cor principal no estado hover"),e(),t(184,"td")(185,"code"),o(186,"var(--color-action-hover)"),e()()(),t(187,"tr")(188,"td")(189,"code"),o(190,"--background-hover"),e()(),t(191,"td"),o(192,"Cor de background no estado hover"),e(),t(193,"td")(194,"code"),o(195,"var(--color-brand-01-lighter)"),e()()(),t(196,"tr")(197,"td")(198,"code"),o(199,"--border-color-hover"),e()(),t(200,"td"),o(201,"Cor da borda no estado hover"),e(),t(202,"td")(203,"code"),o(204,"var(--color-brand-01-darkest)"),e()()(),t(205,"tr")(206,"td")(207,"strong"),o(208,"Focused"),e()(),l(209,"td")(210,"td"),e(),t(211,"tr")(212,"td")(213,"code"),o(214,"--outline-color-focused"),e()(),t(215,"td"),o(216,"Cor do outline do estado de focus"),e(),t(217,"td")(218,"code"),o(219,"var(--color-action-focus)"),e()()(),t(220,"tr")(221,"td")(222,"strong"),o(223,"Pressed"),e()(),l(224,"td")(225,"td"),e(),t(226,"tr")(227,"td")(228,"code"),o(229,"--color-pressed"),e()(),t(230,"td"),o(231,"Cor principal no estado de pressionado"),e(),t(232,"td")(233,"code"),o(234,"var(--color-action-pressed)"),e()()(),t(235,"tr")(236,"td")(237,"code"),o(238,"--background-pressed"),e()(),t(239,"td"),o(240,"Cor de background no estado de pressionado\xA0"),e(),t(241,"td")(242,"code"),o(243,"var(--color-brand-01-light)"),e()()(),t(244,"tr")(245,"td")(246,"strong"),o(247,"Disabled"),e()(),l(248,"td")(249,"td"),e(),t(250,"tr")(251,"td")(252,"code"),o(253,"--color-disabled"),e()(),t(254,"td"),o(255,"Cor principal no estado disabled"),e(),t(256,"td")(257,"code"),o(258,"var(--color-action-disabled)"),e()()(),t(259,"tr")(260,"td")(261,"code"),o(262,"--background-color-disabled"),e(),o(263," \xA0"),e(),t(264,"td"),o(265,"Cor de background no estado disabled"),e(),t(266,"td")(267,"code"),o(268,"var(--color-transparent)"),e()()()()()(),t(269,"div",9)(270,"h4",10),o(271,"Seletor"),e(),t(272,"pre",11),o(273,`<po-button-group
    p-buttons="Array<PoButtonGroupItem>"
    p-toggle="string" >
</po-button-group>
`),e()(),t(274,"h4",12),o(275,"Propriedades"),e(),t(276,"table",13)(277,"tr",14)(278,"th",15),o(279,"Nome"),e(),t(280,"th",15),o(281,"Tipo"),e(),t(282,"th",15),o(283,"Padr\xE3o"),e(),t(284,"th",15),o(285,"Descri\xE7\xE3o"),e()(),t(286,"tr",16)(287,"td",17)(288,"div",18)(289,"span",19),o(290," p-buttons"),l(291,"br"),e()()(),t(292,"td",20)(293,"code",21),o(294,"Array<PoButtonGroupItem>"),e()(),t(295,"td",22),o(296,"-"),e(),t(297,"td",23)(298,"p"),o(299,"Lista de bot\xF5es."),e()()(),t(300,"tr",16)(301,"td",17)(302,"div",18)(303,"span",19),o(304," p-toggle"),l(305,"br"),e()()(),t(306,"td",20)(307,"code",24),o(308,"string"),e()(),t(309,"td",22)(310,"p")(311,"code"),o(312,"none"),e()()(),t(313,"td",23)(314,"em")(315,"strong"),o(316,"(opcional)"),e()(),t(317,"p"),o(318,"Define o modo de sele\xE7\xE3o de bot\xF5es."),e(),t(319,"blockquote")(320,"p"),o(321,"Veja os valores v\xE1lidos no "),t(322,"em"),o(323,"enum"),e(),t(324,"code"),o(325,"PoButtonGroupToggle"),e(),o(326,"."),e()()()()(),t(327,"h3"),o(328,"Interfaces"),e(),t(329,"h4",25)(330,"code",5),o(331,"PoButtonGroupItem"),e()(),t(332,"div",2)(333,"p"),o(334,"Interface para os itens do "),t(335,"code"),o(336,"po-button-group"),e(),o(337,"."),e()(),t(338,"h4",12),o(339,"Propriedades"),e(),t(340,"table",13)(341,"tr",14)(342,"th",15),o(343,"Nome"),e(),t(344,"th",15),o(345,"Tipo"),e(),t(346,"th",15),o(347,"Descri\xE7\xE3o"),e()(),t(348,"tr",16)(349,"td",17)(350,"div",18)(351,"span",19),o(352," action"),l(353,"br"),e()()(),t(354,"td",20)(355,"code",26),o(356,"Function"),e()(),t(357,"td",23)(358,"p"),o(359,"A\xE7\xE3o executada ao clicar sobre o bot\xE3o."),e()()(),t(360,"tr",16)(361,"td",17)(362,"div",18)(363,"span",19),o(364," disabled"),l(365,"br"),e()()(),t(366,"td",20)(367,"code",27),o(368,"boolean"),e()(),t(369,"td",23)(370,"em")(371,"strong"),o(372,"(opcional)"),e()(),t(373,"p"),o(374,"Se verdadeiro, define o bot\xE3o como desabilitado."),e(),t(375,"blockquote")(376,"p"),o(377,"Por padr\xE3o esta propriedade \xE9 "),t(378,"code"),o(379,"false"),e(),o(380,"."),e()()()(),t(381,"tr",16)(382,"td",17)(383,"div",18)(384,"span",19),o(385," icon"),l(386,"br"),e()()(),t(387,"td",20)(388,"code",24),o(389,"string "),e(),t(390,"code",28),o(391," TemplateRef<void>"),e()(),t(392,"td",23)(393,"em")(394,"strong"),o(395,"(opcional)"),e()(),t(396,"p"),o(397,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),e(),t(398,"p"),o(399,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(400,"a",29),o(401,"Biblioteca de \xEDcones"),e(),o(402,". conforme exemplo abaixo:"),e(),t(403,"pre")(404,"code"),o(405,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'ph ph-user' },
];`),e()(),t(406,"p"),o(407,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),t(408,"em"),o(409,"Font Awesome"),e(),o(410,", da seguinte forma:"),e(),t(411,"pre")(412,"code"),o(413,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'fa fa-podcast' },
];`),e()(),t(414,"p"),o(415,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(416,"code"),o(417,"TemplateRef"),e(),o(418,", conforme exemplo abaixo:"),e(),t(419,"p"),o(420,"component.html:"),e(),t(421,"pre")(422,"code"),o(423,`<ng-template #iconTemplate>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>`),e()(),t(424,"p"),o(425,"component.ts:"),e(),t(426,"pre")(427,"code"),o(428,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;
buttons: Array<PoButtonGroupItem> = [];
...

this.buttons = [
  { label: 'Button 1', action: this.action.bind(this), icon: this.iconTemplate }
];`),e()(),t(429,"blockquote")(430,"p"),o(431,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),t(432,"code"),o(433,"font-size: inherit"),e(),o(434," caso o \xEDcone utilizado n\xE3o aplique-o."),e()()()(),t(435,"tr",16)(436,"td",17)(437,"div",18)(438,"span",19),o(439," label"),l(440,"br"),e()()(),t(441,"td",20)(442,"code",24),o(443,"string"),e()(),t(444,"td",23)(445,"em")(446,"strong"),o(447,"(opcional)"),e()(),t(448,"p"),o(449,"Label do bot\xE3o."),e()()(),t(450,"tr",16)(451,"td",17)(452,"div",18)(453,"span",19),o(454," selected"),l(455,"br"),e()()(),t(456,"td",20)(457,"code",27),o(458,"boolean"),e()(),t(459,"td",23)(460,"em")(461,"strong"),o(462,"(opcional)"),e()(),t(463,"p"),o(464,"Define se o bot\xE3o est\xE1 selecionado. Utilizado juntamente \xE0 propriedade "),t(465,"code"),o(466,"p-toggle"),e(),o(467,"."),e()()(),t(468,"tr",16)(469,"td",17)(470,"div",18)(471,"span",19),o(472," tooltip"),l(473,"br"),e()()(),t(474,"td",20)(475,"code",24),o(476,"string"),e()(),t(477,"td",23)(478,"em")(479,"strong"),o(480,"(opcional)"),e()(),t(481,"p"),o(482,"Define a mensagem a ser exibida ao posicionar o "),t(483,"em"),o(484,"mouse"),e(),o(485," sobre o bot\xE3o."),e()()()(),t(486,"h3"),o(487,"Enums"),e(),t(488,"h4",4)(489,"code",5),o(490,"PoButtonGroupToggle"),e()(),t(491,"div",2)(492,"p"),o(493,"Define o tipo de sele\xE7\xE3o dos bot\xF5es do "),t(494,"code"),o(495,"po-button-group"),e(),o(496,"."),e()(),t(497,"h4",12),o(498,"Propriedades"),e(),t(499,"table",13)(500,"tr",14)(501,"th",15),o(502,"Nome"),e(),t(503,"th",15),o(504,"Descri\xE7\xE3o"),e()(),t(505,"tr",16)(506,"td",17)(507,"div",18)(508,"span",19),o(509," Multiple"),l(510,"br"),e()()(),t(511,"td",23)(512,"p"),o(513,"Sele\xE7\xE3o m\xFAltipla."),e()()(),t(514,"tr",16)(515,"td",17)(516,"div",18)(517,"span",19),o(518," None"),l(519,"br"),e()()(),t(520,"td",23)(521,"p"),o(522,"Sele\xE7\xE3o desabilitada."),e()()(),t(523,"tr",16)(524,"td",17)(525,"div",18)(526,"span",19),o(527," Single"),l(528,"br"),e()()(),t(529,"td",23)(530,"p"),o(531,"Sele\xE7\xE3o \xFAnica."),e()()()()())},dependencies:[E],encapsulation:2})}return n})();var ue=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||n)(_(U),_(J))};static \u0275cmp=d({type:n,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title"," Button Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,i){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),l(3,"sample-po-button-group-doc"),e(),t(4,"po-tab",3),l(5,"sample-po-button-group-basic-view")(6,"sample-po-button-group-labs-view")(7,"sample-po-button-group-attendance-view")(8,"sample-po-button-group-post-view"),e()()()),a&2&&(s("p-actions",i.actions),r(2),s("p-active",i.activeTab.includes("doc")),r(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[ee,S,f,ie,le,re,se,de],encapsulation:2})}return n})();var Ge=[{path:"",component:ue}],ce=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=D({type:n});static \u0275inj=k({imports:[O.forChild(Ge),O]})}return n})();var it=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=D({type:n});static \u0275inj=k({imports:[oe,ce]})}return n})();export{it as DocPoButtonGroupModule};