import{$ as D,$a as T,$c as Q,$d as te,Bc as K,F as x,Fa as A,G as C,Ga as n,Ia as h,Ka as v,La as B,Lb as I,Ma as P,Mb as H,Nb as R,Ob as L,Od as ee,Pa as w,Pb as j,T as p,U as _,Wb as U,Xd as S,Yb as J,Yd as f,Zb as O,_ as d,ad as F,ha as s,ia as W,ka as y,md as X,na as t,oa as e,oc as Y,pa as l,pc as N,qc as G,re as E,se as ne,ta as q,ua as b,y as k,yd as Z,zd as $}from"./chunk-ODUOVNEW.js";var oe=(()=>{class o{buttons=[{label:"Button 1",action:this.action.bind(this)},{label:"Button 2",action:this.action.bind(this)}];action(r){alert(`${r.label}`)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-button-group-basic"]],standalone:!1,decls:1,vars:1,consts:[[1,"po-md-12",3,"p-buttons"]],template:function(a,i){a&1&&l(0,"po-button-group",0),a&2&&s("p-buttons",i.buttons)},dependencies:[G],encapsulation:2})}return o})();var ge=o=>({"docs-sample-code-tabs":o}),ie=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-button-group-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Button Group Basic"),e(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-button-group-basic/sample-po-button-group-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-button-group class="po-md-12" [p-buttons]="buttons"> </po-button-group>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-button-group-basic/sample-po-button-group-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-button-group-basic"),e(),l(23,"hr")),a&2&&(p(5),y("po-icon "+i.sampleCodeButtonIcon),p(),h(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,ge,i.hideSampleCodeTabs)))},dependencies:[T,E,S,f,oe],encapsulation:2})}return o})();var ae=(()=>{class o{poNotification;button;buttons;toggle;iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"fa fa-podcast",value:"fa fa-podcast"},{label:"fa fa-calculator",value:"fa fa-calculator"}];toggleOptions=[{label:"none",value:N.None},{label:"single",value:N.Single},{label:"multiple",value:N.Multiple}];constructor(r){this.poNotification=r}ngOnInit(){this.restore()}action(r){this.poNotification.success(r.action)}addButton(){this.buttons.push({icon:this.button.icon,label:this.button.label,action:this.action.bind(this,this.button),disabled:this.button.disabled,tooltip:this.button.tooltip}),this.button={}}restore(){this.button={},this.buttons=[]}static \u0275fac=function(a){return new(a||o)(_(F))};static \u0275cmp=d({type:o,selectors:[["sample-po-button-group-labs"]],standalone:!1,decls:20,vars:11,consts:[["fButtons","ngForm"],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-buttons","p-toggle"],["name","buttonLabel","p-label","Button label",1,"po-md-4",3,"ngModelChange","ngModel"],["name","buttonAction","p-label","Button action","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","buttonDisabled","p-label","Button disabled",1,"po-md-4",3,"ngModelChange","ngModel"],["name","buttonTooltip","p-label","Button tooltip",1,"po-md-4",3,"ngModelChange","ngModel"],["name","buttonIcon","p-label","Button Icon",1,"po-md-8",3,"ngModelChange","ngModel","p-options"],["p-label","Add button",1,"po-md-2",3,"p-click","p-disabled"],["name","toggle","p-label","Toggle",1,"po-md-3",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let u=q();t(0,"div",2),l(1,"po-button-group",3),e(),l(2,"hr"),t(3,"form",null,0)(5,"div",2)(6,"po-input",4),P("ngModelChange",function(m){return x(u),B(i.button.label,m)||(i.button.label=m),C(m)}),e(),t(7,"po-input",5),P("ngModelChange",function(m){return x(u),B(i.button.action,m)||(i.button.action=m),C(m)}),e(),t(8,"po-switch",6),P("ngModelChange",function(m){return x(u),B(i.button.disabled,m)||(i.button.disabled=m),C(m)}),e(),t(9,"po-input",7),P("ngModelChange",function(m){return x(u),B(i.button.tooltip,m)||(i.button.tooltip=m),C(m)}),e(),t(10,"po-radio-group",8),P("ngModelChange",function(m){return x(u),B(i.button.icon,m)||(i.button.icon=m),C(m)}),e()(),t(11,"div",2)(12,"po-button",9),b("p-click",function(){x(u);let m=A(4);return i.addButton(),C(m.reset())}),e()()(),l(13,"hr"),t(14,"form",null,1)(16,"div",2)(17,"po-select",10),P("ngModelChange",function(m){return x(u),B(i.toggle,m)||(i.toggle=m),C(m)}),e()(),t(18,"div",2)(19,"po-button",11),b("p-click",function(){x(u);let m=A(4);return A(15).reset(),m.reset(),C(i.restore())}),e()()()}if(a&2){let u=A(4);p(),s("p-buttons",i.buttons)("p-toggle",i.toggle),p(5),v("ngModel",i.button.label),p(),v("ngModel",i.button.action),p(),v("ngModel",i.button.disabled),p(),v("ngModel",i.button.tooltip),p(),v("ngModel",i.button.icon),s("p-options",i.iconsOptions),p(2),s("p-disabled",u.invalid),p(5),v("ngModel",i.toggle),s("p-options",i.toggleOptions)}},dependencies:[j,I,H,L,R,Y,G,K,X,Z,Q],encapsulation:2})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),le=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-button-group-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Button Group Labs"),e(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-button-group-labs/sample-po-button-group-labs.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
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
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-button-group-labs/sample-po-button-group-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

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
    { label: 'an an-newspaper', value: 'an an-newspaper' },
    { label: 'an an-calendar-dots', value: 'an an-calendar-dots' },
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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-button-group-labs"),e(),l(23,"hr")),a&2&&(p(5),y("po-icon "+i.sampleCodeButtonIcon),p(),h(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,Ee,i.hideSampleCodeTabs)))},dependencies:[T,E,S,f,ae],encapsulation:2})}return o})();var re=(()=>{class o{poNotification;attendances=[{label:"Appointment",icon:"an an-calendar-dots",action:this.getPassword.bind(this)},{label:"Emergency",icon:"an an-syringe",action:this.getPassword.bind(this)},{label:"Exams",icon:"an an-flask",action:this.getPassword.bind(this)}];constructor(r){this.poNotification=r}getPassword(r){let a=this.randomPassword(),i=this.getTypeNotification(r.label);this.poNotification[i](`
      Type of attendance: ${r.label} -
      Your password: ${a}
    `)}getTypeNotification(r=""){switch(r){case"Emergency":return"error";case"Appointment":return"information";case"Exams":return"success"}}randomPassword(){return Math.random().toString().slice(2,5)}static \u0275fac=function(a){return new(a||o)(_(F))};static \u0275cmp=d({type:o,selectors:[["sample-po-button-group-attendance"]],standalone:!1,decls:8,vars:1,consts:[[1,"po-row"],[1,"po-md-12","po-font-title"],[1,"po-md-12","po-font-text","po-text-color-neutral-dark-40"],[1,"po-md-12",3,"p-buttons"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"div",1),n(2,"Choose the type of attendance"),e(),t(3,"div",2),n(4,"Get your password"),e()(),l(5,"hr"),t(6,"div",0),l(7,"po-button-group",3),e()),a&2&&(p(7),s("p-buttons",i.attendances))},dependencies:[G],encapsulation:2})}return o})();var ve=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-button-group-attendance-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Button Group - Attendance"),e(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-button-group-attendance/sample-po-button-group-attendance.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <div class="po-md-12 po-font-title">Choose the type of attendance</div>
  <div class="po-md-12 po-font-text po-text-color-neutral-dark-40">Get your password</div>
</div>

<hr />

<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="attendances"> </po-button-group>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

import { PoButtonGroupItem, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-attendance',
  templateUrl: './sample-po-button-group-attendance.component.html',
  standalone: false
})
export class SamplePoButtonGroupAttendanceComponent {
  attendances: Array<PoButtonGroupItem> = [
    { label: 'Appointment', icon: 'an an-calendar-dots', action: this.getPassword.bind(this) },
    { label: 'Emergency', icon: 'an an-syringe', action: this.getPassword.bind(this) },
    { label: 'Exams', icon: 'an an-flask', action: this.getPassword.bind(this) }
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
`),e()()()()(),t(21,"div",10),l(22,"sample-po-button-group-attendance"),e(),l(23,"hr")),a&2&&(p(5),y("po-icon "+i.sampleCodeButtonIcon),p(),h(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,ve,i.hideSampleCodeTabs)))},dependencies:[T,E,S,f,re],encapsulation:2})}return o})();var me=(()=>{class o{setBold;setItalic;setTextAlignment;setUnderline;textArea='"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway';fontStyle=[{icon:"an an-text-b",action:()=>this.setBold=!this.setBold,tooltip:"Bold"},{icon:"an an-text-italic",action:()=>this.setItalic=!this.setItalic,tooltip:"Italic"},{icon:"an an-text-underline",action:()=>this.setUnderline=!this.setUnderline,tooltip:"Underline"}];textAlign=[{icon:"an an-text-align-left",selected:!0,action:()=>this.setTextAlignment="left",tooltip:"Left align"},{icon:"an an-text-align-center",action:()=>this.setTextAlignment="center",tooltip:"Center align"},{icon:"an an-text-align-right",action:()=>this.setTextAlignment="right",tooltip:"Right align"},{icon:"an an-text-align-justify",action:()=>this.setTextAlignment="justify",tooltip:"Justify"}];static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-button-group-post"]],standalone:!1,decls:12,vars:12,consts:[[1,"po-font-title","po-mb-2"],[1,"po-row"],[1,"po-md-4","po-lg-3"],["p-toggle","multiple",3,"p-buttons"],["p-toggle","single",3,"p-buttons"],["name","textArea","p-maxlength","400",1,"po-md-12",3,"ngModelChange","ngModel"],[1,"po-md-12","po-mt-3","po-font-text-large"]],template:function(a,i){a&1&&(t(0,"div",0),n(1,"Create New Post"),e(),t(2,"po-widget")(3,"div",1)(4,"div",2),l(5,"po-button-group",3),e(),t(6,"div",2),l(7,"po-button-group",4),e(),t(8,"po-textarea",5),P("ngModelChange",function(c){return B(i.textArea,c)||(i.textArea=c),c}),e(),l(9,"hr"),t(10,"div",6),n(11),e()()()),a&2&&(p(5),s("p-buttons",i.fontStyle),p(2),s("p-buttons",i.textAlign),p(),v("ngModel",i.textArea),p(2),W("font-weight",i.setBold?"bold":"normal")("font-style",i.setItalic?"italic":"normal")("text-decoration",i.setUnderline?"underline":"none")("text-align",i.setTextAlignment),p(),h(" ",i.textArea," "))},dependencies:[I,L,G,$,te],encapsulation:2})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-button-group-post-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Button Group - Post"),e(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-button-group-post/sample-po-button-group-post.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-font-title po-mb-2">Create New Post</div>
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
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-button-group-post/sample-po-button-group-post.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

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
    { icon: 'an an-text-b', action: () => (this.setBold = !this.setBold), tooltip: 'Bold' },
    { icon: 'an an-text-italic', action: () => (this.setItalic = !this.setItalic), tooltip: 'Italic' },
    { icon: 'an an-text-underline', action: () => (this.setUnderline = !this.setUnderline), tooltip: 'Underline' }
  ];

  textAlign: Array<PoButtonGroupItem> = [
    {
      icon: 'an an-text-align-left',
      selected: true,
      action: () => (this.setTextAlignment = 'left'),
      tooltip: 'Left align'
    },
    { icon: 'an an-text-align-center', action: () => (this.setTextAlignment = 'center'), tooltip: 'Center align' },
    { icon: 'an an-text-align-right', action: () => (this.setTextAlignment = 'right'), tooltip: 'Right align' },
    { icon: 'an an-text-align-justify', action: () => (this.setTextAlignment = 'justify'), tooltip: 'Justify' }
  ];
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-button-group-post"),e(),l(23,"hr")),a&2&&(p(5),y("po-icon "+i.sampleCodeButtonIcon),p(),h(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,ye,i.hideSampleCodeTabs)))},dependencies:[T,E,S,f,me],encapsulation:2})}return o})();var de=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-button-group-doc"]],standalone:!1,decls:532,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","boas-pr\xE1ticas"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoButtonGroupItem>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoButtonGroupModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,"M\xF3dulo do componente po-button-group."),e()(),t(7,"h3",3),n(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),n(11,"PoButtonGroupComponent"),e()(),t(12,"div",2)(13,"p"),n(14,"O componente "),t(15,"code"),n(16,"po-button-group"),e(),n(17,` \xE9 formado por um conjunto de bot\xF5es distribu\xEDdos horizontalmente.
Cada bot\xE3o do grupo \xE9 tratado de forma individual, recebendo assim um r\xF3tulo, uma a\xE7\xE3o bem como se dever\xE1 estar habilitado ou n\xE3o.`),e(),t(18,"p"),n(19,`Este componente al\xE9m de servir como um agrupador de bot\xF5es para a\xE7\xE3o, tamb\xE9m permite que sejam utilizados
para sele\xE7\xF5es multiplas e \xFAnicas.`),e(),t(20,"p"),n(21,`O grupo de bot\xF5es deve ser utilizado para organizar as a\xE7\xF5es de maneira uniforme e transmitir a ideia de que os bot\xF5es fazem
parte de um mesmo contexto.`),e(),t(22,"h4",6),n(23,"Boas pr\xE1ticas"),e(),t(24,"ul")(25,"li"),n(26,"Evite usar o "),t(27,"code"),n(28,"po-button-group"),e(),n(29," com apenas 1 a\xE7\xE3o, para isso utilize o "),t(30,"code"),n(31,"po-button"),e(),n(32,"."),e(),t(33,"li"),n(34,"Procure utilizar no m\xE1ximo 3 a\xE7\xF5es para cada "),t(35,"code"),n(36,"po-button-group"),e(),n(37,"."),e()(),t(38,"blockquote")(39,"p"),n(40,"As recomenda\xE7\xF5es do "),t(41,"code"),n(42,"po-button"),e(),n(43," tamb\xE9m valem para o "),t(44,"code"),n(45,"po-button-group"),e(),n(46,"."),e()(),t(47,"h4",7),n(48,"Tokens customiz\xE1veis"),e(),t(49,"p"),n(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(51,"blockquote")(52,"p"),n(53,"Para maiores informa\xE7\xF5es, acesse o guia "),t(54,"a",8),n(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(56,"."),e()(),t(57,"table")(58,"thead")(59,"tr")(60,"th"),n(61,"Propriedade"),e(),t(62,"th"),n(63,"Descri\xE7\xE3o"),e(),t(64,"th"),n(65,"Valor Padr\xE3o"),e()()(),t(66,"tbody")(67,"tr")(68,"td")(69,"strong"),n(70,"Default Values"),e()(),l(71,"td")(72,"td"),e(),t(73,"tr")(74,"td")(75,"code"),n(76,"--font-family"),e()(),t(77,"td"),n(78,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(79,"td")(80,"code"),n(81,"var(--font-family-theme)"),e()()(),t(82,"tr")(83,"td")(84,"code"),n(85,"--font-size"),e()(),t(86,"td"),n(87,"Tamanho da fonte"),e(),t(88,"td")(89,"code"),n(90,"var(--font-size-default)"),e()()(),t(91,"tr")(92,"td")(93,"code"),n(94,"--font-weight"),e()(),t(95,"td"),n(96,"Peso da fonte"),e(),t(97,"td")(98,"code"),n(99,"var(--font-weight-bold)"),e()()(),t(100,"tr")(101,"td")(102,"code"),n(103,"--line-height"),e()(),t(104,"td"),n(105,"Tamanho da label"),e(),t(106,"td")(107,"code"),n(108,"var(--line-height-none)"),e()()(),t(109,"tr")(110,"td")(111,"code"),n(112,"--border-radius"),e()(),t(113,"td"),n(114,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),t(115,"td")(116,"code"),n(117,"var(--border-radius-md)"),e()()(),t(118,"tr")(119,"td")(120,"code"),n(121,"--border-width"),e()(),t(122,"td"),n(123,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),e(),t(124,"td")(125,"code"),n(126,"var(--border-width-md)"),e()()(),t(127,"tr")(128,"td")(129,"code"),n(130,"--padding"),e()(),t(131,"td"),n(132,"Preenchimento"),e(),t(133,"td")(134,"code"),n(135,"0 1em"),e()()(),t(136,"tr")(137,"td")(138,"code"),n(139,"--text-color"),e()(),t(140,"td"),n(141,"Cor do texto"),e(),t(142,"td")(143,"code"),n(144,"var(--color-neutral-light-00)"),e()()(),t(145,"tr")(146,"td")(147,"code"),n(148,"--color"),e()(),t(149,"td"),n(150,"Cor principal do bot\xE3o"),e(),t(151,"td")(152,"code"),n(153,"var(--color-action-default)"),e()()(),t(154,"tr")(155,"td")(156,"code"),n(157,"--background-color"),e()(),t(158,"td"),n(159,"Cor de background"),e(),t(160,"td")(161,"code"),n(162,"var(--color-transparent)"),e()()(),t(163,"tr")(164,"td")(165,"code"),n(166,"--shadow"),e()(),t(167,"td"),n(168,"Cont\xE9m o valor da sombra do elemento"),e(),t(169,"td")(170,"code"),n(171,"var(--shadow-none)"),e()()(),t(172,"tr")(173,"td")(174,"strong"),n(175,"Hover"),e()(),l(176,"td")(177,"td"),e(),t(178,"tr")(179,"td")(180,"code"),n(181,"--color-hover"),e()(),t(182,"td"),n(183,"Cor principal no estado hover"),e(),t(184,"td")(185,"code"),n(186,"var(--color-action-hover)"),e()()(),t(187,"tr")(188,"td")(189,"code"),n(190,"--background-hover"),e()(),t(191,"td"),n(192,"Cor de background no estado hover"),e(),t(193,"td")(194,"code"),n(195,"var(--color-brand-01-lighter)"),e()()(),t(196,"tr")(197,"td")(198,"code"),n(199,"--border-color-hover"),e()(),t(200,"td"),n(201,"Cor da borda no estado hover"),e(),t(202,"td")(203,"code"),n(204,"var(--color-brand-01-darkest)"),e()()(),t(205,"tr")(206,"td")(207,"strong"),n(208,"Focused"),e()(),l(209,"td")(210,"td"),e(),t(211,"tr")(212,"td")(213,"code"),n(214,"--outline-color-focused"),e()(),t(215,"td"),n(216,"Cor do outline do estado de focus"),e(),t(217,"td")(218,"code"),n(219,"var(--color-action-focus)"),e()()(),t(220,"tr")(221,"td")(222,"strong"),n(223,"Pressed"),e()(),l(224,"td")(225,"td"),e(),t(226,"tr")(227,"td")(228,"code"),n(229,"--color-pressed"),e()(),t(230,"td"),n(231,"Cor principal no estado de pressionado"),e(),t(232,"td")(233,"code"),n(234,"var(--color-action-pressed)"),e()()(),t(235,"tr")(236,"td")(237,"code"),n(238,"--background-pressed"),e()(),t(239,"td"),n(240,"Cor de background no estado de pressionado\xA0"),e(),t(241,"td")(242,"code"),n(243,"var(--color-brand-01-light)"),e()()(),t(244,"tr")(245,"td")(246,"strong"),n(247,"Disabled"),e()(),l(248,"td")(249,"td"),e(),t(250,"tr")(251,"td")(252,"code"),n(253,"--color-disabled"),e()(),t(254,"td"),n(255,"Cor principal no estado disabled"),e(),t(256,"td")(257,"code"),n(258,"var(--color-action-disabled)"),e()()(),t(259,"tr")(260,"td")(261,"code"),n(262,"--background-color-disabled"),e(),n(263," \xA0"),e(),t(264,"td"),n(265,"Cor de background no estado disabled"),e(),t(266,"td")(267,"code"),n(268,"var(--color-transparent)"),e()()()()()(),t(269,"div",9)(270,"h4",10),n(271,"Seletor"),e(),t(272,"pre",11),n(273,`<po-button-group
    p-buttons="Array<PoButtonGroupItem>"
    p-toggle="string" >
</po-button-group>
`),e()(),t(274,"h4",12),n(275,"Propriedades"),e(),t(276,"table",13)(277,"tr",14)(278,"th",15),n(279,"Nome"),e(),t(280,"th",15),n(281,"Tipo"),e(),t(282,"th",15),n(283,"Padr\xE3o"),e(),t(284,"th",15),n(285,"Descri\xE7\xE3o"),e()(),t(286,"tr",16)(287,"td",17)(288,"div",18)(289,"span",19),n(290," p-buttons"),l(291,"br"),e()()(),t(292,"td",20)(293,"code",21),n(294,"Array<PoButtonGroupItem>"),e()(),t(295,"td",22),n(296,"-"),e(),t(297,"td",23)(298,"p"),n(299,"Lista de bot\xF5es."),e()()(),t(300,"tr",16)(301,"td",17)(302,"div",18)(303,"span",19),n(304," p-toggle"),l(305,"br"),e()()(),t(306,"td",20)(307,"code",24),n(308,"string"),e()(),t(309,"td",22)(310,"p")(311,"code"),n(312,"none"),e()()(),t(313,"td",23)(314,"em")(315,"strong"),n(316,"(opcional)"),e()(),t(317,"p"),n(318,"Define o modo de sele\xE7\xE3o de bot\xF5es."),e(),t(319,"blockquote")(320,"p"),n(321,"Veja os valores v\xE1lidos no "),t(322,"em"),n(323,"enum"),e(),t(324,"code"),n(325,"PoButtonGroupToggle"),e(),n(326,"."),e()()()()(),t(327,"h3"),n(328,"Interfaces"),e(),t(329,"h4",25)(330,"code",5),n(331,"PoButtonGroupItem"),e()(),t(332,"div",2)(333,"p"),n(334,"Interface para os itens do "),t(335,"code"),n(336,"po-button-group"),e(),n(337,"."),e()(),t(338,"h4",12),n(339,"Propriedades"),e(),t(340,"table",13)(341,"tr",14)(342,"th",15),n(343,"Nome"),e(),t(344,"th",15),n(345,"Tipo"),e(),t(346,"th",15),n(347,"Descri\xE7\xE3o"),e()(),t(348,"tr",16)(349,"td",17)(350,"div",18)(351,"span",19),n(352," action"),l(353,"br"),e()()(),t(354,"td",20)(355,"code",26),n(356,"Function"),e()(),t(357,"td",23)(358,"p"),n(359,"A\xE7\xE3o executada ao clicar sobre o bot\xE3o."),e()()(),t(360,"tr",16)(361,"td",17)(362,"div",18)(363,"span",19),n(364," disabled"),l(365,"br"),e()()(),t(366,"td",20)(367,"code",27),n(368,"boolean"),e()(),t(369,"td",23)(370,"em")(371,"strong"),n(372,"(opcional)"),e()(),t(373,"p"),n(374,"Se verdadeiro, define o bot\xE3o como desabilitado."),e(),t(375,"blockquote")(376,"p"),n(377,"Por padr\xE3o esta propriedade \xE9 "),t(378,"code"),n(379,"false"),e(),n(380,"."),e()()()(),t(381,"tr",16)(382,"td",17)(383,"div",18)(384,"span",19),n(385," icon"),l(386,"br"),e()()(),t(387,"td",20)(388,"code",24),n(389,"string "),e(),t(390,"code",28),n(391," TemplateRef<void>"),e()(),t(392,"td",23)(393,"em")(394,"strong"),n(395,"(opcional)"),e()(),t(396,"p"),n(397,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),e(),t(398,"p"),n(399,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(400,"a",29),n(401,"Biblioteca de \xEDcones"),e(),n(402,". conforme exemplo abaixo:"),e(),t(403,"pre")(404,"code"),n(405,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'an an-user' },
];`),e()(),t(406,"p"),n(407,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),t(408,"em"),n(409,"Font Awesome"),e(),n(410,", da seguinte forma:"),e(),t(411,"pre")(412,"code"),n(413,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'fa fa-podcast' },
];`),e()(),t(414,"p"),n(415,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(416,"code"),n(417,"TemplateRef"),e(),n(418,", conforme exemplo abaixo:"),e(),t(419,"p"),n(420,"component.html:"),e(),t(421,"pre")(422,"code"),n(423,`<ng-template #iconTemplate>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>`),e()(),t(424,"p"),n(425,"component.ts:"),e(),t(426,"pre")(427,"code"),n(428,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;
buttons: Array<PoButtonGroupItem> = [];
...

this.buttons = [
  { label: 'Button 1', action: this.action.bind(this), icon: this.iconTemplate }
];`),e()(),t(429,"blockquote")(430,"p"),n(431,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),t(432,"code"),n(433,"font-size: inherit"),e(),n(434," caso o \xEDcone utilizado n\xE3o aplique-o."),e()()()(),t(435,"tr",16)(436,"td",17)(437,"div",18)(438,"span",19),n(439," label"),l(440,"br"),e()()(),t(441,"td",20)(442,"code",24),n(443,"string"),e()(),t(444,"td",23)(445,"em")(446,"strong"),n(447,"(opcional)"),e()(),t(448,"p"),n(449,"Label do bot\xE3o."),e()()(),t(450,"tr",16)(451,"td",17)(452,"div",18)(453,"span",19),n(454," selected"),l(455,"br"),e()()(),t(456,"td",20)(457,"code",27),n(458,"boolean"),e()(),t(459,"td",23)(460,"em")(461,"strong"),n(462,"(opcional)"),e()(),t(463,"p"),n(464,"Define se o bot\xE3o est\xE1 selecionado. Utilizado juntamente \xE0 propriedade "),t(465,"code"),n(466,"p-toggle"),e(),n(467,"."),e()()(),t(468,"tr",16)(469,"td",17)(470,"div",18)(471,"span",19),n(472," tooltip"),l(473,"br"),e()()(),t(474,"td",20)(475,"code",24),n(476,"string"),e()(),t(477,"td",23)(478,"em")(479,"strong"),n(480,"(opcional)"),e()(),t(481,"p"),n(482,"Define a mensagem a ser exibida ao posicionar o "),t(483,"em"),n(484,"mouse"),e(),n(485," sobre o bot\xE3o."),e()()()(),t(486,"h3"),n(487,"Enums"),e(),t(488,"h4",4)(489,"code",5),n(490,"PoButtonGroupToggle"),e()(),t(491,"div",2)(492,"p"),n(493,"Define o tipo de sele\xE7\xE3o dos bot\xF5es do "),t(494,"code"),n(495,"po-button-group"),e(),n(496,"."),e()(),t(497,"h4",12),n(498,"Propriedades"),e(),t(499,"table",13)(500,"tr",14)(501,"th",15),n(502,"Nome"),e(),t(503,"th",15),n(504,"Descri\xE7\xE3o"),e()(),t(505,"tr",16)(506,"td",17)(507,"div",18)(508,"span",19),n(509," Multiple"),l(510,"br"),e()()(),t(511,"td",23)(512,"p"),n(513,"Sele\xE7\xE3o m\xFAltipla."),e()()(),t(514,"tr",16)(515,"td",17)(516,"div",18)(517,"span",19),n(518," None"),l(519,"br"),e()()(),t(520,"td",23)(521,"p"),n(522,"Sele\xE7\xE3o desabilitada."),e()()(),t(523,"tr",16)(524,"td",17)(525,"div",18)(526,"span",19),n(527," Single"),l(528,"br"),e()()(),t(529,"td",23)(530,"p"),n(531,"Sele\xE7\xE3o \xFAnica."),e()()()()())},dependencies:[E],encapsulation:2})}return o})();var ue=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(_(U),_(J))};static \u0275cmp=d({type:o,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title"," Button Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,i){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),l(3,"sample-po-button-group-doc"),e(),t(4,"po-tab",3),l(5,"sample-po-button-group-basic-view")(6,"sample-po-button-group-labs-view")(7,"sample-po-button-group-attendance-view")(8,"sample-po-button-group-post-view"),e()()()),a&2&&(s("p-actions",i.actions),p(2),s("p-active",i.activeTab.includes("doc")),p(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[ee,S,f,ie,le,pe,se,de],encapsulation:2})}return o})();var Ge=[{path:"",component:ue}],ce=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=D({type:o});static \u0275inj=k({imports:[O.forChild(Ge),O]})}return o})();var it=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=D({type:o});static \u0275inj=k({imports:[ne,ce]})}return o})();export{it as DocPoButtonGroupModule};
