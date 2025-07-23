import{$ as Y,$a as k,$d as ne,A as me,Ca as F,Cd as te,Da as I,Dc as Ee,Ea as V,F as u,Fa as v,Fc as be,G as S,Ga as e,Ha as ce,Ia as y,Ka as h,La as g,Lb as J,Ma as f,Mb as O,Nb as R,Ob as Z,Od as Pe,Pa as A,Pb as H,T as l,U as M,Ud as D,Vd as L,Wb as Se,Wd as x,Xd as P,Yb as he,Yd as _,Za as z,Zb as ie,_ as E,_b as ge,a as oe,ab as X,bb as G,ea as B,g as pe,ha as d,jc as fe,ka as T,ld as ve,m as ae,md as ee,na as t,o as re,oa as n,oc as K,od as Ce,pa as r,pb as ue,re as w,se as _e,ta as q,ua as b,v as le,va as de,vc as $,x as se,y as U,yd as ye,zd as xe}from"./chunk-TZ5FQAUY.js";var we=(()=>{class p{static \u0275fac=function(a){return new(a||p)};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-basic"]],standalone:!1,decls:4,vars:1,consts:[[3,"p-align-center"],["p-label","Step 1"],["p-label","Step 2"],["p-label","Step 3"]],template:function(a,i){a&1&&(t(0,"po-stepper",0),r(1,"po-step",1)(2,"po-step",2)(3,"po-step",3),n()),a&2&&d("p-align-center",!1)},dependencies:[L,x],encapsulation:2})}return p})();var He=p=>({"docs-sample-code-tabs":p}),De=(()=>{class p{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||p)};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Stepper Basic"),n(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-stepper-basic/sample-po-stepper-basic.component.html"),n(),t(13,"pre",7),e(14,`<po-stepper [p-align-center]="false">
  <po-step p-label="Step 1"></po-step>
  <po-step p-label="Step 2"></po-step>
  <po-step p-label="Step 3"></po-step>
</po-stepper>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-stepper-basic/sample-po-stepper-basic.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-stepper-basic',
  templateUrl: './sample-po-stepper-basic.component.html',
  standalone: false
})
export class SamplePoStepperBasicComponent {}
`),n()()()()(),t(21,"div",10),r(22,"sample-po-stepper-basic"),n(),r(23,"hr")),a&2&&(l(5),T("po-icon "+i.sampleCodeButtonIcon),l(),y(" ",i.sampleCodeButtonLabel,""),l(),d("ngClass",A(4,He,i.hideSampleCodeTabs)))},dependencies:[k,w,P,_,we],encapsulation:2})}return p})();function Qe(p,j){if(p&1&&(t(0,"po-step",9)(1,"h2"),e(2),n()()),p&2){let s=j.$implicit;d("p-label",s.label)("p-icon-default",s.iconDefault),l(2),y("Step Content ",s.label,"")}}var Te=(()=>{class p{changeDetector;event;properties={};stepItem={};steps=[];propertiesFields=[{divider:"Properties",property:"stepSize",label:"Step Size",type:"number",maxValue:64,minValue:24,gridLgColumns:2},{property:"orientation",options:[{value:"vertical",label:"Vertical",checked:!0},{value:"horizontal",label:"Horizontal"}],gridLgColumns:4},{label:"Align Steps Center",gridLgColumns:3,property:"alignCenter",type:"boolean"},{label:"Step icons",gridLgColumns:3,property:"stepIcons",type:"boolean"},{label:"Step Icon Active Custom",help:"Ex.: ph ph-pencil-simple-line",gridLgColumns:4,property:"iconActive"},{label:"Step Icon Done Custom",help:"Ex.: ph ph-check-fat",gridLgColumns:4,property:"iconDone"},{property:"disabledClick",label:"Disabled click",type:"boolean"}];stepItemFields=[{divider:"Step form",property:"label",label:"Step Label",gridMdColumns:6,gridXlColumns:6},{property:"iconDefault",label:"Step Icon Default Custom",help:"Ex.: ph ph-question",gridMdColumns:6,gridXlColumns:6}];constructor(s){this.changeDetector=s}ngOnInit(){this.restore()}addItem(s){this.steps=[...this.steps,oe({},s)],this.stepItem={},this.changeDetector.detectChanges()}changeStep(s){this.event=s,this.changeDetector.detectChanges()}restore(){this.properties={},this.steps=[],this.event=void 0,this.properties.orientation="horizontal",this.properties.alignCenter=!1}static \u0275fac=function(a){return new(a||p)(M(z))};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-labs"]],standalone:!1,decls:16,vars:14,consts:[["stepForm","ngForm"],["propertiesForm","ngForm"],[3,"p-change-step","p-align-center","p-orientation","p-step-icons","p-step-size","p-step-icon-active","p-step-icon-done","p-disable-click"],[3,"p-label","p-icon-default",4,"ngFor","ngForOf"],["p-label","Event",3,"p-value"],[3,"p-group-form","p-fields","p-value"],[1,"po-row"],["p-label","Add Step",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],[3,"p-label","p-icon-default"]],template:function(a,i){if(a&1){let m=q();t(0,"po-container")(1,"po-stepper",2),b("p-change-step",function(){return u(m),S(i.changeStep("change"))}),B(2,Qe,3,3,"po-step",3),n(),r(3,"hr")(4,"po-info",4),t(5,"form",null,0),r(7,"po-dynamic-form",5),t(8,"div",6)(9,"po-button",7),b("p-click",function(){u(m);let o=v(6);return i.addItem(i.stepItem),S(o.reset())}),n()()(),t(10,"form",null,1),r(12,"po-dynamic-form",5)(13,"hr"),t(14,"div",6)(15,"po-button",8),b("p-click",function(){u(m);let o=v(6),Oe=v(11);return i.restore(),Oe.reset(),S(o.reset())}),n()()()()}if(a&2){let m=v(6);l(),d("p-align-center",i.properties.alignCenter)("p-orientation",i.properties.orientation)("p-step-icons",i.properties.stepIcons)("p-step-size",i.properties.stepSize)("p-step-icon-active",i.properties.iconActive)("p-step-icon-done",i.properties.iconDone)("p-disable-click",i.properties.disabledClick),l(),d("ngForOf",i.steps),l(2),d("p-value",i.event),l(3),d("p-fields",i.stepItemFields)("p-value",i.stepItem),l(2),d("p-disabled",m.invalid),l(3),d("p-fields",i.propertiesFields)("p-value",i.properties)}},dependencies:[X,H,O,R,K,$,Ce,te,L,x],encapsulation:2})}return p})();var Ye=p=>({"docs-sample-code-tabs":p}),Fe=(()=>{class p{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||p)};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Stepper Labs"),n(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-stepper-labs/sample-po-stepper-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-container>
  <po-stepper
    [p-align-center]="properties.alignCenter"
    [p-orientation]="properties.orientation"
    [p-step-icons]="properties.stepIcons"
    [p-step-size]="properties.stepSize"
    [p-step-icon-active]="properties.iconActive"
    [p-step-icon-done]="properties.iconDone"
    [p-disable-click]="properties.disabledClick"
    (p-change-step)="changeStep('change')"
  >
    <po-step *ngFor="let step of steps" [p-label]="step.label" [p-icon-default]="step.iconDefault">
      <h2>Step Content { { step.label }}</h2>
    </po-step>
  </po-stepper>

  <hr />

  <po-info p-label="Event" [p-value]="event"> </po-info>

  <form #stepForm="ngForm">
    <po-dynamic-form [p-group-form] [p-fields]="stepItemFields" [p-value]="stepItem"> </po-dynamic-form>

    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Add Step"
        [p-disabled]="stepForm.invalid"
        (p-click)="addItem(stepItem); stepForm.reset()"
      >
      </po-button>
    </div>
  </form>

  <form #propertiesForm="ngForm">
    <po-dynamic-form [p-group-form] [p-fields]="propertiesFields" [p-value]="properties"> </po-dynamic-form>
    <hr />
    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Sample Restore"
        (p-click)="restore(); propertiesForm.reset(); stepForm.reset()"
      >
      </po-button>
    </div>
  </form>
</po-container>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-stepper-labs/sample-po-stepper-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { PoDynamicFormField, PoStepperItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-stepper-labs',
  templateUrl: './sample-po-stepper-labs.component.html',
  standalone: false
})
export class SamplePoStepperLabsComponent implements OnInit {
  event: any;
  properties: any = {};
  stepItem: PoStepperItem = <any>{};
  steps: Array<PoStepperItem> = [];

  readonly propertiesFields: Array<PoDynamicFormField> = [
    {
      divider: 'Properties',
      property: 'stepSize',
      label: 'Step Size',
      type: 'number',
      maxValue: 64,
      minValue: 24,
      gridLgColumns: 2
    },
    {
      property: 'orientation',
      options: [
        { value: 'vertical', label: 'Vertical', checked: true },
        { value: 'horizontal', label: 'Horizontal' }
      ],
      gridLgColumns: 4
    },
    {
      label: 'Align Steps Center',
      gridLgColumns: 3,
      property: 'alignCenter',
      type: 'boolean'
    },
    {
      label: 'Step icons',
      gridLgColumns: 3,
      property: 'stepIcons',
      type: 'boolean'
    },
    {
      label: 'Step Icon Active Custom',
      help: 'Ex.: ph ph-pencil-simple-line',
      gridLgColumns: 4,
      property: 'iconActive'
    },
    {
      label: 'Step Icon Done Custom',
      help: 'Ex.: ph ph-check-fat',
      gridLgColumns: 4,
      property: 'iconDone'
    },
    {
      property: 'disabledClick',
      label: 'Disabled click',
      type: 'boolean'
    }
  ];

  readonly stepItemFields: Array<PoDynamicFormField> = [
    {
      divider: 'Step form',
      property: 'label',
      label: 'Step Label',
      gridMdColumns: 6,
      gridXlColumns: 6
    },
    {
      property: 'iconDefault',
      label: 'Step Icon Default Custom',
      help: 'Ex.: ph ph-question',
      gridMdColumns: 6,
      gridXlColumns: 6
    }
  ];

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    this.restore();
  }

  addItem(stepItem: PoStepperItem) {
    this.steps = [...this.steps, { ...stepItem }];
    this.stepItem = {};
    this.changeDetector.detectChanges();
  }

  changeStep(event) {
    this.event = event;

    this.changeDetector.detectChanges();
  }

  restore() {
    this.properties = {};
    this.steps = [];
    this.event = undefined;
    this.properties.orientation = 'horizontal';
    this.properties.alignCenter = false;
  }
}
`),n()()()()(),t(21,"div",10),r(22,"sample-po-stepper-labs"),n(),r(23,"hr")),a&2&&(l(5),T("po-icon "+i.sampleCodeButtonIcon),l(),y(" ",i.sampleCodeButtonLabel,""),l(),d("ngClass",A(4,Ye,i.hideSampleCodeTabs)))},dependencies:[k,w,P,_,Te],encapsulation:2})}return p})();var Ge=["addressForm"],Je=["paymentForm"],Ze=["personalForm"],Ke=["successData"];function $e(p,j){p&1&&r(0,"po-loading-overlay",52)}var Ie=(()=>{class p{addressForm;paymentForm;personalForm;successData;address;birthday;cardCode;cardName;cardValid;confirmLabelWidget="Confirm Purchase";currentActiveStep;document;isLoadingPayment=!1;name;nextLabelWidget="Next Step";previousLabelWidget="Previous Step";constructor(){this.address=this.getAddress()}canActiveFinishStep(s){return pe(s.form.valid).pipe(le(()=>this.isLoadingPayment=!0),ae(2e3),re(()=>this.isLoadingPayment=!1))}canActiveNextStep(s){return s.valid}onConfirmStep(s){this.successData.open(),this.resetForms(),this.address=this.getAddress(),s.first()}getAddress(){return{city:"Sao Paulo",code:"02511-000",country:"Brazil",number:"1000",reference:"",street:"Avenida Braz Leme"}}resetForms(){this.personalForm.reset(),this.paymentForm.reset()}static \u0275fac=function(a){return new(a||p)};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-sales"]],viewQuery:function(a,i){if(a&1&&(F(Ge,7),F(Je,7),F(Ze,7),F(Ke,7)),a&2){let m;I(m=V())&&(i.addressForm=m.first),I(m=V())&&(i.paymentForm=m.first),I(m=V())&&(i.personalForm=m.first),I(m=V())&&(i.successData=m.first)}},standalone:!1,decls:84,vars:29,consts:[["stepper",""],["personalForm","ngForm"],["addressForm","ngForm"],["paymentForm","ngForm"],["cardname",""],["cardcode",""],["carddate",""],["successData",""],[1,"po-row"],["p-title","Product Detail",1,"po-md-9"],[1,"po-lg-4"],["src","../../../assets/graphics/shoe.gif","width","215","height","200"],[1,"po-lg-8"],[1,"po-font-title"],[1,"po-font-text-large-bold"],[1,"po-font-text"],["p-height","317","p-title","Price",1,"po-md-3"],[2,"position","relative"],["p-text","Loading",4,"ngIf"],["p-align-center","false","p-orientation","vertical","p-step-icons","","p-step-size","32"],["p-label","Personal",3,"p-can-active-next-step"],["p-height","380","p-title","Purchase",1,"po-md-12",3,"p-primary-action","p-primary-label"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","birthday","p-format","dd/mm/yyyy","p-label","Birthday","p-optional","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","document","p-label","Document","p-optional","",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Address",3,"p-can-active-next-step"],["p-height","380","p-title","Purchase",1,"po-md-12",3,"p-primary-action","p-secondary-action","p-primary-label","p-secondary-label"],["name","address.street","p-label","Street/House","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","number","p-label","Number","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","city","p-label","City","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","code","p-label","Postal Code","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","country","p-label","Country","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","reference","p-label","Reference","p-optional","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Payment",3,"p-can-active-next-step"],["name","cardName","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","cardCode","p-clean","","p-label","Code","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-pattern","\\d{4} \\d{4} \\d{4} \\d{4}","p-required","",1,"po-lg-4","po-md-9",3,"ngModelChange","ngModel"],["name","cardValid","p-clean","","p-label","Expiration Date","p-mask","12/99","p-mask-format-model","","p-pattern","\\d{2}\\/\\d{2}","p-required","",1,"po-lg-2","po-md-3",3,"ngModelChange","ngModel"],["p-label","Finish"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Document",1,"po-md-3",3,"p-value"],["p-label","Address",1,"po-md-3",3,"p-value"],["p-label","Number",1,"po-md-3",3,"p-value"],["p-label","City",1,"po-md-3",3,"p-value"],["p-label","Country",1,"po-md-3",3,"p-value"],["p-label","Product","p-value","Nike XYZ - Red/Gold Stripes",1,"po-md-4"],["p-label","Price","p-value","$2.500,00",1,"po-md-2"],["p-label","Discount","p-value","$500,00",1,"po-md-2"],["p-label","Tax","p-value","$160,00",1,"po-md-2"],["p-label","Final Price","p-value","$2.160,00",1,"po-md-2"],["p-title","Informations"],["src","../../../assets/graphics/check.jpg","width","350","height","350",1,"po-offset-md-6","po-offset-xl-3"],[1,"po-offset-md-8","po-offset-xl-3","po-font-title"],["p-text","Loading"]],template:function(a,i){if(a&1){let m=q();t(0,"div",8)(1,"po-widget",9)(2,"div",8)(3,"div",10),r(4,"img",11),n(),t(5,"div",12)(6,"p",13),e(7,"Nike XYZ - Red/Gold Stripes"),n(),t(8,"p",14),e(9,"Brand: Nike | Style: Modern | Men's"),n(),t(10,"p",15),e(11,"Width: 12.5 - COD: 001254648412319"),n(),r(12,"hr"),t(13,"p",15),e(14,"Price: $2.500,00 | Discount: $500,00 | Tax: $160,00"),n()()()(),t(15,"po-widget",16)(16,"p",15),e(17,"$2.500,00"),n(),t(18,"p",15),e(19,"$500,00(-)"),n(),t(20,"p",15),e(21,"$160,00(+)"),n(),r(22,"hr"),t(23,"p",14),e(24,"Total: $2.160,00"),n()()(),r(25,"hr"),t(26,"div",17),B(27,$e,1,0,"po-loading-overlay",18),t(28,"po-stepper",19,0)(30,"po-step",20)(31,"po-widget",21),b("p-primary-action",function(){u(m);let o=v(29);return S(o.next())}),t(32,"form",null,1)(34,"div",8)(35,"po-input",22),f("ngModelChange",function(o){return u(m),g(i.name,o)||(i.name=o),S(o)}),n(),t(36,"po-datepicker",23),f("ngModelChange",function(o){return u(m),g(i.birthday,o)||(i.birthday=o),S(o)}),n(),t(37,"po-input",24),f("ngModelChange",function(o){return u(m),g(i.document,o)||(i.document=o),S(o)}),n()()()()(),t(38,"po-step",25)(39,"po-widget",26),b("p-primary-action",function(){u(m);let o=v(29);return S(o.previous())})("p-secondary-action",function(){u(m);let o=v(29);return S(o.next())}),t(40,"form",null,2)(42,"div",8)(43,"po-input",27),f("ngModelChange",function(o){return u(m),g(i.address.street,o)||(i.address.street=o),S(o)}),n(),t(44,"po-input",28),f("ngModelChange",function(o){return u(m),g(i.address.number,o)||(i.address.number=o),S(o)}),n(),t(45,"po-input",29),f("ngModelChange",function(o){return u(m),g(i.address.city,o)||(i.address.city=o),S(o)}),n()(),t(46,"div",8)(47,"po-input",30),f("ngModelChange",function(o){return u(m),g(i.address.code,o)||(i.address.code=o),S(o)}),n(),t(48,"po-input",31),f("ngModelChange",function(o){return u(m),g(i.address.country,o)||(i.address.country=o),S(o)}),n(),t(49,"po-input",32),f("ngModelChange",function(o){return u(m),g(i.address.reference,o)||(i.address.reference=o),S(o)}),n()()()()(),t(50,"po-step",33)(51,"po-widget",26),b("p-primary-action",function(){u(m);let o=v(29);return S(o.previous())})("p-secondary-action",function(){u(m);let o=v(29);return S(o.next())}),t(52,"form",null,3)(54,"div",8)(55,"po-input",34,4),f("ngModelChange",function(o){return u(m),g(i.cardName,o)||(i.cardName=o),S(o)}),n(),t(57,"po-input",35,5),f("ngModelChange",function(o){return u(m),g(i.cardCode,o)||(i.cardCode=o),S(o)}),n(),t(59,"po-input",36,6),f("ngModelChange",function(o){return u(m),g(i.cardValid,o)||(i.cardValid=o),S(o)}),n()()()()(),t(61,"po-step",37)(62,"po-widget",26),b("p-primary-action",function(){u(m);let o=v(29);return S(o.previous())})("p-secondary-action",function(){u(m);let o=v(29);return S(i.onConfirmStep(o))}),t(63,"div",8),r(64,"po-info",38)(65,"po-info",39),n(),t(66,"div",8),r(67,"po-info",40)(68,"po-info",41)(69,"po-info",42)(70,"po-info",43),n(),r(71,"hr"),t(72,"div",8),r(73,"po-info",44)(74,"po-info",45)(75,"po-info",46)(76,"po-info",47)(77,"po-info",48),n()()()()(),t(78,"po-modal",49,7)(80,"div",8),r(81,"img",50),t(82,"p",51),e(83,"Success! ORDER NUMBER: 5767686678609-XPTOA"),n()()()}if(a&2){let m=v(33),c=v(41),o=v(53);l(27),d("ngIf",i.isLoadingPayment),l(3),d("p-can-active-next-step",i.canActiveNextStep.bind(i,m)),l(),d("p-primary-label",i.nextLabelWidget),l(4),h("ngModel",i.name),l(),h("ngModel",i.birthday),l(),h("ngModel",i.document),l(),d("p-can-active-next-step",i.canActiveNextStep.bind(i,c)),l(),d("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.nextLabelWidget),l(4),h("ngModel",i.address.street),l(),h("ngModel",i.address.number),l(),h("ngModel",i.address.city),l(2),h("ngModel",i.address.code),l(),h("ngModel",i.address.country),l(),h("ngModel",i.address.reference),l(),d("p-can-active-next-step",i.canActiveFinishStep.bind(i,o)),l(),d("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.nextLabelWidget),l(4),h("ngModel",i.cardName),l(2),h("ngModel",i.cardCode),l(2),h("ngModel",i.cardValid),l(3),d("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.confirmLabelWidget),l(2),d("p-value",i.name),l(),d("p-value",i.document),l(2),d("p-value",i.address.street),l(),d("p-value",i.address.number),l(),d("p-value",i.address.city),l(),d("p-value",i.address.country)}},dependencies:[G,H,J,O,Z,R,Ee,ee,te,fe,be,L,x,ne],encapsulation:2})}return p})();var tt=p=>({"docs-sample-code-tabs":p}),Ve=(()=>{class p{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||p)};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-sales-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Stepper - Sales"),n(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-stepper-sales/sample-po-stepper-sales.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row">
  <po-widget class="po-md-9" p-title="Product Detail">
    <div class="po-row">
      <div class="po-lg-4">
        <img src="../../../assets/graphics/shoe.gif" width="215" height="200" />
      </div>
      <div class="po-lg-8">
        <p class="po-font-title">Nike XYZ - Red/Gold Stripes</p>
        <p class="po-font-text-large-bold">Brand: Nike | Style: Modern | Men's</p>
        <p class="po-font-text">Width: 12.5 - COD: 001254648412319</p>
        <hr />
        <p class="po-font-text">Price: $2.500,00 | Discount: $500,00 | Tax: $160,00</p>
      </div>
    </div>
  </po-widget>

  <po-widget class="po-md-3" p-height="317" p-title="Price">
    <p class="po-font-text">$2.500,00</p>
    <p class="po-font-text">$500,00(-)</p>
    <p class="po-font-text">$160,00(+)</p>
    <hr />
    <p class="po-font-text-large-bold">Total: $2.160,00</p>
  </po-widget>
</div>

<hr />

<div style="position: relative">
  <po-loading-overlay *ngIf="isLoadingPayment" p-text="Loading"> </po-loading-overlay>

  <po-stepper #stepper p-align-center="false" p-orientation="vertical" p-step-icons p-step-size="32">
    <po-step p-label="Personal" [p-can-active-next-step]="canActiveNextStep.bind(this, personalForm)">
      <po-widget
        class="po-md-12"
        p-height="380"
        [p-primary-label]="nextLabelWidget"
        p-title="Purchase"
        (p-primary-action)="stepper.next()"
      >
        <form #personalForm="ngForm">
          <div class="po-row">
            <po-input class="po-md-6" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>
            <po-datepicker
              class="po-md-3"
              name="birthday"
              [(ngModel)]="birthday"
              p-format="dd/mm/yyyy"
              p-label="Birthday"
              p-optional
            >
            </po-datepicker>
            <po-input class="po-md-3" name="document" [(ngModel)]="document" p-label="Document" p-optional> </po-input>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Address" [p-can-active-next-step]="canActiveNextStep.bind(this, addressForm)">
      <po-widget
        class="po-md-12"
        p-height="380"
        p-title="Purchase"
        [p-primary-label]="previousLabelWidget"
        [p-secondary-label]="nextLabelWidget"
        (p-primary-action)="stepper.previous()"
        (p-secondary-action)="stepper.next()"
      >
        <form #addressForm="ngForm">
          <div class="po-row">
            <po-input
              class="po-md-6"
              name="address.street"
              [(ngModel)]="address.street"
              p-label="Street/House"
              p-required
            >
            </po-input>
            <po-input class="po-md-3" name="number" [(ngModel)]="address.number" p-label="Number" p-required>
            </po-input>
            <po-input class="po-md-3" name="city" [(ngModel)]="address.city" p-label="City" p-required> </po-input>
          </div>
          <div class="po-row">
            <po-input class="po-md-3" name="code" [(ngModel)]="address.code" p-label="Postal Code" p-required>
            </po-input>
            <po-input class="po-md-3" name="country" [(ngModel)]="address.country" p-label="Country" p-required>
            </po-input>
            <po-input class="po-md-6" name="reference" [(ngModel)]="address.reference" p-label="Reference" p-optional>
            </po-input>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Payment" [p-can-active-next-step]="canActiveFinishStep.bind(this, paymentForm)">
      <po-widget
        class="po-md-12"
        p-height="380"
        [p-primary-label]="previousLabelWidget"
        [p-secondary-label]="nextLabelWidget"
        p-title="Purchase"
        (p-primary-action)="stepper.previous()"
        (p-secondary-action)="stepper.next()"
      >
        <form #paymentForm="ngForm">
          <div class="po-row">
            <po-input
              #cardname
              class="po-lg-6"
              name="cardName"
              [(ngModel)]="cardName"
              p-clean
              p-label="Name"
              p-required
            >
            </po-input>

            <po-input
              #cardcode
              class="po-lg-4 po-md-9"
              name="cardCode"
              [(ngModel)]="cardCode"
              p-clean
              p-label="Code"
              p-mask="9999 9999 9999 9999"
              p-mask-format-model
              p-pattern="\\d{4} \\d{4} \\d{4} \\d{4}"
              p-required
            >
            </po-input>

            <po-input
              #carddate
              class="po-lg-2 po-md-3"
              name="cardValid"
              [(ngModel)]="cardValid"
              p-clean
              p-label="Expiration Date"
              p-mask="12/99"
              p-mask-format-model
              p-pattern="\\d{2}\\/\\d{2}"
              p-required
            >
            </po-input>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Finish">
      <po-widget
        class="po-md-12"
        p-height="380"
        [p-primary-label]="previousLabelWidget"
        [p-secondary-label]="confirmLabelWidget"
        p-title="Purchase"
        (p-primary-action)="stepper.previous()"
        (p-secondary-action)="onConfirmStep(stepper)"
      >
        <div class="po-row">
          <po-info class="po-md-3" p-label="Name" [p-value]="name"> </po-info>
          <po-info class="po-md-3" p-label="Document" [p-value]="document"> </po-info>
        </div>
        <div class="po-row">
          <po-info class="po-md-3" p-label="Address" [p-value]="address.street"> </po-info>
          <po-info class="po-md-3" p-label="Number" [p-value]="address.number"> </po-info>
          <po-info class="po-md-3" p-label="City" [p-value]="address.city"> </po-info>
          <po-info class="po-md-3" p-label="Country" [p-value]="address.country"> </po-info>
        </div>
        <hr />
        <div class="po-row">
          <po-info class="po-md-4" p-label="Product" p-value="Nike XYZ - Red/Gold Stripes"> </po-info>
          <po-info class="po-md-2" p-label="Price" p-value="$2.500,00"> </po-info>
          <po-info class="po-md-2" p-label="Discount" p-value="$500,00"> </po-info>
          <po-info class="po-md-2" p-label="Tax" p-value="$160,00"> </po-info>
          <po-info class="po-md-2" p-label="Final Price" p-value="$2.160,00"> </po-info>
        </div>
      </po-widget>
    </po-step>
  </po-stepper>
</div>

<po-modal #successData p-title="Informations">
  <div class="po-row">
    <img class="po-offset-md-6 po-offset-xl-3" src="../../../assets/graphics/check.jpg" width="350" height="350" />
    <p class="po-offset-md-8 po-offset-xl-3 po-font-title">Success! ORDER NUMBER: 5767686678609-XPTOA</p>
  </div>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-stepper-sales/sample-po-stepper-sales.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalComponent, PoStepComponent, PoStepperComponent } from '@po-ui/ng-components';
import { of } from 'rxjs';
import { delay, finalize, map, tap } from 'rxjs/operators';

@Component({
  selector: 'sample-po-stepper-sales',
  templateUrl: './sample-po-stepper-sales.component.html',
  standalone: false
})
export class SamplePoStepperSalesComponent {
  @ViewChild('addressForm', { static: true }) addressForm: NgForm;
  @ViewChild('paymentForm', { static: true }) paymentForm: NgForm;
  @ViewChild('personalForm', { static: true }) personalForm: NgForm;
  @ViewChild('successData', { static: true }) successData: PoModalComponent;

  address: any;
  birthday: string;
  cardCode: string;
  cardName: string;
  cardValid: string;
  confirmLabelWidget: string = 'Confirm Purchase';
  currentActiveStep: PoStepComponent;
  document: string;
  isLoadingPayment: boolean = false;
  name: string;
  nextLabelWidget: string = 'Next Step';
  previousLabelWidget: string = 'Previous Step';

  constructor() {
    this.address = this.getAddress();
  }

  canActiveFinishStep(paymentForm: NgForm) {
    return of(paymentForm.form.valid).pipe(
      tap(() => (this.isLoadingPayment = true)),
      delay(2000),
      finalize(() => (this.isLoadingPayment = false))
    );
  }

  canActiveNextStep(form: NgForm) {
    return form.valid;
  }

  onConfirmStep(stepper: PoStepperComponent) {
    this.successData.open();

    this.resetForms();
    this.address = this.getAddress();
    stepper.first();
  }

  private getAddress() {
    return {
      city: 'Sao Paulo',
      code: '02511-000',
      country: 'Brazil',
      number: '1000',
      reference: '',
      street: 'Avenida Braz Leme'
    };
  }

  private resetForms(): void {
    this.personalForm.reset();
    this.paymentForm.reset();
  }
}
`),n()()()()(),t(21,"div",10),r(22,"sample-po-stepper-sales"),n(),r(23,"hr")),a&2&&(l(5),T("po-icon "+i.sampleCodeButtonIcon),l(),y(" ",i.sampleCodeButtonLabel,""),l(),d("ngClass",A(4,tt,i.hideSampleCodeTabs)))},dependencies:[k,w,P,_,Ie],encapsulation:2})}return p})();var Ae=(()=>{class p{http;url="https://po-sample-api.onrender.com/v1/sampleSelect";constructor(s){this.http=s}getCitiesByState(s){return this.http.get(`${this.url}/getCities/${s}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(a){return new(a||p)(me(ue))};static \u0275prov=se({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})();var ot=["basicInformation"],pt=["academicFormation"],at=["professionalExperiences"];function rt(p,j){if(p&1&&(t(0,"div",24)(1,"po-widget",26)(2,"p"),e(3),n()()()),p&2){let s=j.$implicit;l(),d("p-title",s.title),l(2),ce(s.description)}}function lt(p,j){if(p&1&&(t(0,"div",4),r(1,"po-divider",24),B(2,rt,4,2,"div",25),n()),p&2){let s=de();l(2),d("ngForOf",s.professionalExperiences)}}var ke=(()=>{class p{sampleService;changeDetector;basicInformationForm;academicFormationForm;professionalExperiencesForm;stepper;cityOptions=[];stateOptions=[];basicInformation;highSchool;universityEducation;professionalExperiences;experienceTitle;experienceDescripton;overview;citiesSubscription;statesSubscription;constructor(s,a){this.sampleService=s,this.changeDetector=a}ngAfterViewInit(){setTimeout(()=>this.activeStep())}ngOnInit(){this.basicInformation=this.getBasicInformations(),this.highSchool=this.getHighSchool(),this.universityEducation=this.getUniversityEducation(),this.professionalExperiences=this.getProfessionalExperiencies(),this.getStates()}ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}activeStep(){this.stepper.active(2)}onChangeState(){this.getCitiesByState(this.basicInformation.state)}addProfessionalExperiences(s){let a={title:s.value.experienceTitle,description:s.value.experienceDescripton};this.professionalExperiences=[...this.professionalExperiences,a]}getBasicInformations(){return{name:"Maria Alice",email:"mariaalice@gmail.com",phone:"47988888888",state:"sp",city:1}}getHighSchool(){return{name:"Escola de Ensino B\xE1sico Dr Jorge Lacerda",city:"Joinville",conclusionYear:"2016"}}getUniversityEducation(){return{name:"Universidade Federal do Santa Catarina",city:"Florian\xF3polis",conclusionYear:"2020"}}getProfessionalExperiencies(){return[{title:"Analista de desenvolvimento de software na TOTVS",description:"Respons\xE1vel pelo desenvolvimento e manuten\xE7\xE3o de sistemas do segmento de manufatura. Do ano de 2019 \xE0 2020"}]}getCitiesByState(s){this.citiesSubscription=this.sampleService.getCitiesByState(s).subscribe(a=>{this.cityOptions=a.items,this.basicInformation.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(s=>{this.stateOptions=s.items,this.getCitiesByState(this.basicInformation.state)})}static \u0275fac=function(a){return new(a||p)(M(Ae),M(z))};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-active"]],viewQuery:function(a,i){if(a&1&&(F(ot,7),F(pt,7),F(at,7),F(x,5)),a&2){let m;I(m=V())&&(i.basicInformationForm=m.first),I(m=V())&&(i.academicFormationForm=m.first),I(m=V())&&(i.professionalExperiencesForm=m.first),I(m=V())&&(i.stepper=m.first)}},standalone:!1,decls:32,vars:16,consts:[["basicInformationForm","ngForm"],["academicFormationForm","ngForm"],["professionalExperiencesForm","ngForm"],["p-label","Basic information"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","phone","p-label","Phone","p-optional","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","city","p-label","City",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-label","Academic formation"],["p-label","High school",1,"po-md-12"],["name","highSchoolName","p-clean","","p-label","Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","highSchoolCity","p-clean","","p-label","City",1,"po-md-3",3,"ngModelChange","ngModel"],["name","highSchoolPeriod","p-label","Period",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","University education",1,"po-md-12"],["name","universityEducationName","p-clean","","p-label","Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","universityEducationCity","p-clean","","p-label","City",1,"po-md-3",3,"ngModelChange","ngModel"],["name","universityEducationPeriod","p-label","Period",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Professional experiences"],["name","experienceTitle","p-label","Professional position",1,"po-md-12",3,"ngModelChange","ngModel"],["name","experienceDescripton","p-label","Describe your responsibilities","p-rows","4",1,"po-md-12",3,"ngModelChange","ngModel"],["type","submit","p-label","Add professional experience",1,"po-md-4",3,"p-click"],["class","po-row",4,"ngIf"],[1,"po-md-12"],["class","po-md-12",4,"ngFor","ngForOf"],[1,"po-md-12",3,"p-title"]],template:function(a,i){if(a&1){let m=q();t(0,"po-container")(1,"po-stepper")(2,"po-step",3)(3,"form",null,0)(5,"div",4)(6,"po-input",5),f("ngModelChange",function(o){return u(m),g(i.basicInformation.name,o)||(i.basicInformation.name=o),S(o)}),n(),t(7,"po-email",6),f("ngModelChange",function(o){return u(m),g(i.basicInformation.email,o)||(i.basicInformation.email=o),S(o)}),n(),t(8,"po-input",7),f("ngModelChange",function(o){return u(m),g(i.basicInformation.phone,o)||(i.basicInformation.phone=o),S(o)}),n(),t(9,"po-select",8),f("ngModelChange",function(o){return u(m),g(i.basicInformation.state,o)||(i.basicInformation.state=o),S(o)}),b("p-change",function(){return u(m),S(i.onChangeState())}),n(),t(10,"po-select",9),f("ngModelChange",function(o){return u(m),g(i.basicInformation.city,o)||(i.basicInformation.city=o),S(o)}),n()()()(),t(11,"po-step",10)(12,"form",null,1)(14,"div",4),r(15,"po-divider",11),t(16,"po-input",12),f("ngModelChange",function(o){return u(m),g(i.highSchool.name,o)||(i.highSchool.name=o),S(o)}),n(),t(17,"po-input",13),f("ngModelChange",function(o){return u(m),g(i.highSchool.city,o)||(i.highSchool.city=o),S(o)}),n(),t(18,"po-input",14),f("ngModelChange",function(o){return u(m),g(i.highSchool.conclusionYear,o)||(i.highSchool.conclusionYear=o),S(o)}),n()(),t(19,"div",4),r(20,"po-divider",15),t(21,"po-input",16),f("ngModelChange",function(o){return u(m),g(i.universityEducation.name,o)||(i.universityEducation.name=o),S(o)}),n(),t(22,"po-input",17),f("ngModelChange",function(o){return u(m),g(i.universityEducation.city,o)||(i.universityEducation.city=o),S(o)}),n(),t(23,"po-input",18),f("ngModelChange",function(o){return u(m),g(i.universityEducation.conclusionYear,o)||(i.universityEducation.conclusionYear=o),S(o)}),n()()()(),t(24,"po-step",19)(25,"form",null,2)(27,"div",4)(28,"po-input",20),f("ngModelChange",function(o){return u(m),g(i.experienceTitle,o)||(i.experienceTitle=o),S(o)}),n(),t(29,"po-textarea",21),f("ngModelChange",function(o){return u(m),g(i.experienceDescripton,o)||(i.experienceDescripton=o),S(o)}),n(),t(30,"po-button",22),b("p-click",function(){u(m);let o=v(26);return i.addProfessionalExperiences(o),S(o.reset())}),n()()(),B(31,lt,3,1,"div",23),n()()()}a&2&&(l(6),h("ngModel",i.basicInformation.name),l(),h("ngModel",i.basicInformation.email),l(),h("ngModel",i.basicInformation.phone),l(),h("ngModel",i.basicInformation.state),d("p-options",i.stateOptions),l(),h("ngModel",i.basicInformation.city),d("p-options",i.cityOptions),l(6),h("ngModel",i.highSchool.name),l(),h("ngModel",i.highSchool.city),l(),h("ngModel",i.highSchool.conclusionYear),l(3),h("ngModel",i.universityEducation.name),l(),h("ngModel",i.universityEducation.city),l(),h("ngModel",i.universityEducation.conclusionYear),l(5),h("ngModel",i.experienceTitle),l(),h("ngModel",i.experienceDescripton),l(2),d("ngIf",i.professionalExperiences))},dependencies:[X,G,H,J,O,Z,R,K,$,ge,ve,ee,ye,xe,L,x,ne],encapsulation:2})}return p})();var mt=p=>({"docs-sample-code-tabs":p}),We=(()=>{class p{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||p)};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-active-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Stepper - Active"),n(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-stepper-active/sample-po-stepper-active.component.html"),n(),t(13,"pre",7),e(14,`<po-container>
  <po-stepper>
    <po-step p-label="Basic information">
      <form #basicInformationForm="ngForm">
        <div class="po-row">
          <po-input class="po-md-6" name="name" [(ngModel)]="basicInformation.name" p-clean p-label="Name" p-required>
          </po-input>
          <po-email
            class="po-md-6"
            name="email"
            [(ngModel)]="basicInformation.email"
            p-clean
            p-label="Email"
            p-required
          >
          </po-email>
          <po-input class="po-md-4" name="phone" [(ngModel)]="basicInformation.phone" p-label="Phone" p-optional>
          </po-input>
          <po-select
            class="po-md-4"
            name="state"
            [(ngModel)]="basicInformation.state"
            p-label="State"
            [p-options]="stateOptions"
            (p-change)="onChangeState()"
          >
          </po-select>
          <po-select
            class="po-md-4"
            name="city"
            [(ngModel)]="basicInformation.city"
            p-label="City"
            [p-options]="cityOptions"
          >
          </po-select>
        </div>
      </form>
    </po-step>
    <po-step p-label="Academic formation">
      <form #academicFormationForm="ngForm">
        <div class="po-row">
          <po-divider class="po-md-12" p-label="High school"></po-divider>
          <po-input class="po-md-6" name="highSchoolName" [(ngModel)]="highSchool.name" p-clean p-label="Name">
          </po-input>
          <po-input class="po-md-3" name="highSchoolCity" [(ngModel)]="highSchool.city" p-clean p-label="City">
          </po-input>
          <po-input class="po-md-3" name="highSchoolPeriod" [(ngModel)]="highSchool.conclusionYear" p-label="Period">
          </po-input>
        </div>
        <div class="po-row">
          <po-divider class="po-md-12" p-label="University education"> </po-divider>
          <po-input
            class="po-md-6"
            name="universityEducationName"
            [(ngModel)]="universityEducation.name"
            p-clean
            p-label="Name"
          >
          </po-input>
          <po-input
            class="po-md-3"
            name="universityEducationCity"
            [(ngModel)]="universityEducation.city"
            p-clean
            p-label="City"
          >
          </po-input>
          <po-input
            class="po-md-3"
            name="universityEducationPeriod"
            [(ngModel)]="universityEducation.conclusionYear"
            p-label="Period"
          >
          </po-input>
        </div>
      </form>
    </po-step>
    <po-step p-label="Professional experiences">
      <form #professionalExperiencesForm="ngForm">
        <div class="po-row">
          <po-input
            class="po-md-12"
            name="experienceTitle"
            [(ngModel)]="experienceTitle"
            p-label="Professional position"
          ></po-input>
          <po-textarea
            class="po-md-12"
            name="experienceDescripton"
            [(ngModel)]="experienceDescripton"
            p-label="Describe your responsibilities"
            p-rows="4"
          ></po-textarea>
          <po-button
            class="po-md-4"
            type="submit"
            p-label="Add professional experience"
            (p-click)="addProfessionalExperiences(professionalExperiencesForm); professionalExperiencesForm.reset()"
          ></po-button>
        </div>
      </form>
      <div class="po-row" *ngIf="professionalExperiences">
        <po-divider class="po-md-12"> </po-divider>
        <div class="po-md-12" *ngFor="let experience of professionalExperiences">
          <po-widget class="po-md-12" [p-title]="experience.title">
            <p>{ { experience.description }}</p>
          </po-widget>
        </div>
      </div>
    </po-step>
  </po-stepper>
</po-container>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-stepper-active/sample-po-stepper-active.component.ts"),n(),t(19,"pre",9),e(20,`import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PoSelectOption, PoStepperComponent } from '@po-ui/ng-components';
import { SamplePoStepperActiveService } from './sample-po-stepper-active.service';

@Component({
  selector: 'sample-po-stepper-active',
  templateUrl: './sample-po-stepper-active.component.html',
  standalone: false
})
export class SamplePoStepperActiveComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('basicInformation', { static: true }) basicInformationForm: NgForm;
  @ViewChild('academicFormation', { static: true }) academicFormationForm: NgForm;
  @ViewChild('professionalExperiences', { static: true }) professionalExperiencesForm: NgForm;
  @ViewChild(PoStepperComponent) stepper: PoStepperComponent;

  cityOptions: Array<PoSelectOption> = [];
  stateOptions: Array<PoSelectOption> = [];
  basicInformation: any;
  highSchool: any;
  universityEducation: any;
  professionalExperiences: Array<any>;
  experienceTitle: string;
  experienceDescripton: string;
  overview: any;

  private citiesSubscription: Subscription;
  private statesSubscription: Subscription;

  constructor(
    public sampleService: SamplePoStepperActiveService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.activeStep());
  }

  ngOnInit(): void {
    this.basicInformation = this.getBasicInformations();
    this.highSchool = this.getHighSchool();
    this.universityEducation = this.getUniversityEducation();
    this.professionalExperiences = this.getProfessionalExperiencies();
    this.getStates();
  }

  ngOnDestroy() {
    this.citiesSubscription?.unsubscribe();
    this.statesSubscription?.unsubscribe();
  }

  activeStep() {
    this.stepper.active(2);
  }

  onChangeState() {
    this.getCitiesByState(this.basicInformation.state);
  }

  addProfessionalExperiences(form: NgForm) {
    const experience = {
      title: form.value['experienceTitle'],
      description: form.value['experienceDescripton']
    };
    this.professionalExperiences = [...this.professionalExperiences, experience];
  }

  private getBasicInformations() {
    return {
      name: 'Maria Alice',
      email: 'mariaalice@gmail.com',
      phone: '47988888888',
      state: 'sp',
      city: 1
    };
  }

  private getHighSchool() {
    return {
      name: 'Escola de Ensino B\xE1sico Dr Jorge Lacerda',
      city: 'Joinville',
      conclusionYear: '2016'
    };
  }

  private getUniversityEducation() {
    return {
      name: 'Universidade Federal do Santa Catarina',
      city: 'Florian\xF3polis',
      conclusionYear: '2020'
    };
  }

  private getProfessionalExperiencies() {
    return [
      {
        title: 'Analista de desenvolvimento de software na TOTVS',
        description:
          'Respons\xE1vel pelo desenvolvimento e manuten\xE7\xE3o de sistemas do segmento de manufatura. Do ano de 2019 \xE0 2020'
      }
    ];
  }

  private getCitiesByState(state: string) {
    this.citiesSubscription = this.sampleService
      .getCitiesByState(state)
      .subscribe((cities: { items: Array<PoSelectOption> }) => {
        this.cityOptions = cities.items;
        this.basicInformation.city = this.cityOptions[0].value as number;
      });
  }

  private getStates() {
    this.statesSubscription = this.sampleService.getStates().subscribe((states: { items: Array<PoSelectOption> }) => {
      this.stateOptions = states.items;
      this.getCitiesByState(this.basicInformation.state);
    });
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-stepper-active/sample-po-stepper-active.service.ts"),n(),t(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoStepperActiveService {
  private url: string = 'https://po-sample-api.onrender.com/v1/sampleSelect';

  constructor(private http: HttpClient) {}

  getCitiesByState(uf: string) {
    return this.http.get(\`\${this.url}/getCities/\${uf}\`);
  }

  getStates() {
    return this.http.get(\`\${this.url}/getStates\`);
  }
}
`),n()()()()(),t(25,"div",10),r(26,"sample-po-stepper-active"),n(),r(27,"hr")),a&2&&(l(5),T("po-icon "+i.sampleCodeButtonIcon),l(),y(" ",i.sampleCodeButtonLabel,""),l(),d("ngClass",A(4,mt,i.hideSampleCodeTabs)))},dependencies:[k,w,P,_,ke],encapsulation:2})}return p})();var Le=(()=>{class p{changeDetector;currentStep;stepsWithStatus=[{label:"Step 1",status:D.Done},{label:"Step 2",status:D.Active},{label:"Step 3",status:D.Default},{label:"Step 4",status:D.Disabled}];constructor(s){this.changeDetector=s}ngAfterViewInit(){this.currentStep=2,this.changeDetector.detectChanges()}onChangeStatus(s){this.currentStep=s,this.stepsWithStatus.forEach(a=>{a.status===D.Active&&(a.status=D.Done)}),this.stepsWithStatus.forEach((a,i)=>{i>this.currentStep&&a.status===D.Active&&(a.status=D.Default)}),this.currentStep<this.stepsWithStatus.length&&this.stepsWithStatus[this.currentStep].status===D.Disabled&&(this.stepsWithStatus[this.currentStep].status=D.Default)}static \u0275fac=function(a){return new(a||p)(M(z))};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-steps"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-change-step","p-align-center","p-sequential","p-step","p-steps"]],template:function(a,i){a&1&&(t(0,"po-stepper",0),b("p-change-step",function(c){return i.onChangeStatus(c)}),n()),a&2&&d("p-align-center",!1)("p-sequential",!1)("p-step",i.currentStep)("p-steps",i.stepsWithStatus)},dependencies:[x],encapsulation:2})}return p})();var ut=p=>({"docs-sample-code-tabs":p}),Be=(()=>{class p{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||p)};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-steps-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Stepper - Steps"),n(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-stepper-steps/sample-po-stepper-steps.component.html"),n(),t(13,"pre",7),e(14,`<po-stepper
  [p-align-center]="false"
  [p-sequential]="false"
  [p-step]="currentStep"
  [p-steps]="stepsWithStatus"
  (p-change-step)="onChangeStatus($event)"
>
</po-stepper>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-stepper-steps/sample-po-stepper-steps.component.ts"),n(),t(19,"pre",9),e(20,`import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { PoStepperItem, PoStepperStatus } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-stepper-steps',
  templateUrl: './sample-po-stepper-steps.component.html',
  standalone: false
})
export class SamplePoStepperStepsComponent implements AfterViewInit {
  currentStep: number;
  stepsWithStatus: Array<PoStepperItem> = [
    { label: 'Step 1', status: PoStepperStatus.Done },
    { label: 'Step 2', status: PoStepperStatus.Active },
    { label: 'Step 3', status: PoStepperStatus.Default },
    { label: 'Step 4', status: PoStepperStatus.Disabled }
  ];

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.currentStep = 2;
    this.changeDetector.detectChanges();
  }

  onChangeStatus(event: number): void {
    this.currentStep = event;

    this.stepsWithStatus.forEach(step => {
      if (step.status === PoStepperStatus.Active) {
        step.status = PoStepperStatus.Done;
      }
    });

    this.stepsWithStatus.forEach((step, index) => {
      if (index > this.currentStep && step.status === PoStepperStatus.Active) {
        step.status = PoStepperStatus.Default;
      }
    });
    if (
      this.currentStep < this.stepsWithStatus.length &&
      this.stepsWithStatus[this.currentStep].status === PoStepperStatus.Disabled
    ) {
      this.stepsWithStatus[this.currentStep].status = PoStepperStatus.Default;
    }
  }
}
`),n()()()()(),t(21,"div",10),r(22,"sample-po-stepper-steps"),n(),r(23,"hr")),a&2&&(l(5),T("po-icon "+i.sampleCodeButtonIcon),l(),y(" ",i.sampleCodeButtonLabel,""),l(),d("ngClass",A(4,ut,i.hideSampleCodeTabs)))},dependencies:[k,w,P,_,Le],encapsulation:2})}return p})();var Ne=(()=>{class p{static \u0275fac=function(a){return new(a||p)};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-doc"]],standalone:!1,decls:1020,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-step"],["href","/documentation/po-stepper#stepIconsProperty"],["id","utilizando-os-m\xE9todos-do-componente"],["href","https://angular.io/api/core/ViewChild"],["id","boas-pr\xE1ticas"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["href","https://phosphoricons.com/"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoStepperOrientation"],["href","documentation/po-stepper#stepperOrientation"],["pan","",1,"docs-api-property-type","number"],["id","stepIconsProperty"],["pan","",1,"docs-api-property-type","Array<PoStepperItem>"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoStepperStatus"],["id","stepperOrientation"],["id","stepperStatus"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoStepperModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-stepper"),n()(),t(7,"h3",3),e(8,"Componente"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoStepperComponent"),n()(),t(12,"div",2)(13,"p"),e(14,"O "),t(15,"code"),e(16,"po-stepper"),n(),e(17,` permite que um processo seja dividido em passos para que o usu\xE1rio o realize
mais facilmente.`),n(),t(18,"p"),e(19,"Existem duas formas de utiliza\xE7\xE3o:"),n(),t(20,"p"),e(21,"1 - Usando o componente "),t(22,"a",6)(23,"strong"),e(24,"po-step"),n()(),e(25," para renderizar e descrever os passos."),n(),t(26,"p"),e(27,"2 - Atrav\xE9s da propriedade "),t(28,"code"),e(29,"p-steps"),n(),e(30,` para descrever os passos do processo, sendo responsabilidade do desenvolvedor o controle
de renderiza\xE7\xE3o do que ser\xE1 exibido a cada `),t(31,"em"),e(32,"step"),n(),e(33," ativo."),n(),t(34,"p"),e(35,`Atrav\xE9s de suas propriedades, \xE9 poss\xEDvel definir se sua orienta\xE7\xE3o ser\xE1 horizontal ou vertical,
al\xE9m da possibilidade de aumentar o tamanho dos `),t(36,"em"),e(37,"steps"),n(),e(38,"."),n(),t(39,"p"),e(40,"Tamb\xE9m \xE9 poss\xEDvel navegar entre os "),t(41,"em"),e(42,"steps"),n(),e(43," atrav\xE9s do teclado utilizando a tecla "),t(44,"em"),e(45,"tab"),n(),e(46," e, para ativar o "),t(47,"em"),e(48,"step"),n(),e(49,` em foco basta
pressionar a tecla `),t(50,"em"),e(51,"enter"),n(),e(52,". Al\xE9m disso, \xE9 poss\xEDvel ativar a exibi\xE7\xE3o de \xEDcones no lugar de n\xFAmeros nos "),t(53,"em"),e(54,"steps"),n(),e(55,` atrav\xE9s da
propriedade `),t(56,"a",7)(57,"code"),e(58,"p-step-icons"),n()(),e(59,"."),n(),t(60,"h4",8),e(61,"Utilizando os m\xE9todos do componente:"),n(),t(62,"p"),e(63,"Para acessar os m\xE9todos do componente \xE9 necess\xE1rio ter a refer\xEAncia do mesmo."),n(),t(64,"p"),e(65,"Por exemplo, utilizando um "),t(66,"a",9)(67,"strong"),e(68,"ViewChild"),n()(),e(69,":"),n(),t(70,"pre")(71,"code"),e(72,"@ViewChild(PoStepperComponent) poStepperComponent: PoStepperComponent;"),n()(),t(73,"p"),e(74,"E para acessar o m\xE9todo:"),n(),t(75,"pre")(76,"code"),e(77,"poStepperComponent.next();"),n()(),t(78,"h4",10),e(79,"Boas pr\xE1ticas"),n(),t(80,"ul")(81,"li"),e(82,"Evite "),t(83,"code"),e(84,"labels"),n(),e(85," extensos que quebram o layout do "),t(86,"code"),e(87,"po-stepper"),n(),e(88,", use "),t(89,"code"),e(90,"labels"),n(),e(91," diretos, curtos e intuitivos."),n(),t(92,"li"),e(93,"Utilize apenas um "),t(94,"code"),e(95,"po-stepper"),n(),e(96," por p\xE1gina."),n()(),t(97,"h4",11),e(98,"Tokens customiz\xE1veis"),n(),t(99,"p"),e(100,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),n(),t(101,"blockquote")(102,"p"),e(103,"Para maiores informa\xE7\xF5es, acesse o guia "),t(104,"a",12),e(105,"Personalizando o Tema Padr\xE3o com Tokens CSS"),n(),e(106,"."),n()(),t(107,"table")(108,"thead")(109,"tr")(110,"th"),e(111,"Propriedade"),n(),t(112,"th"),e(113,"Descri\xE7\xE3o"),n(),t(114,"th"),e(115,"Valor Padr\xE3o"),n()()(),t(116,"tbody")(117,"tr")(118,"td")(119,"strong"),e(120,"Label"),n()(),r(121,"td")(122,"td"),n(),t(123,"tr")(124,"td")(125,"code"),e(126,"--font-family"),n()(),t(127,"td"),e(128,"Fam\xEDlia tipogr\xE1fica usada"),n(),t(129,"td")(130,"code"),e(131,"var(--font-family-theme)"),n()()(),t(132,"tr")(133,"td")(134,"code"),e(135,"--font-size"),n()(),t(136,"td"),e(137,"Tamanho da fonte"),n(),t(138,"td")(139,"code"),e(140,"var(--font-size-default)"),n()()(),t(141,"tr")(142,"td")(143,"code"),e(144,"--font-weight"),n()(),t(145,"td"),e(146,"Peso da fonte"),n(),t(147,"td")(148,"code"),e(149,"var(--font-weight-normal)"),n()()(),t(150,"tr")(151,"td")(152,"strong"),e(153,"Step - Done"),n()(),r(154,"td")(155,"td"),n(),t(156,"tr")(157,"td")(158,"code"),e(159,"--text-color"),n()(),t(160,"td"),e(161,"Cor do texto no step conclu\xEDdo"),n(),t(162,"td")(163,"code"),e(164,"var(--color-neutral-dark-70)"),n()()(),t(165,"tr")(166,"td")(167,"code"),e(168,"--color-icon-done"),n()(),t(169,"td"),e(170,"Cor do \xEDcone no step conclu\xEDdo"),n(),t(171,"td")(172,"code"),e(173,"var(--color-neutral-dark-70)"),n()()(),t(174,"tr")(175,"td")(176,"code"),e(177,"--background-done"),n()(),t(178,"td"),e(179,"Cor de fundo no step conclu\xEDdo"),n(),t(180,"td")(181,"code"),e(182,"var(--color-neutral-light-00)"),n()()(),t(183,"tr")(184,"td")(185,"strong"),e(186,"Line - Done"),n()(),r(187,"td")(188,"td"),n(),t(189,"tr")(190,"td")(191,"code"),e(192,"--color-line-done"),n()(),t(193,"td"),e(194,"Cor da linha no step conclu\xEDdo"),n(),t(195,"td")(196,"code"),e(197,"var(--color-neutral-mid-40)"),n()()(),t(198,"tr")(199,"td")(200,"strong"),e(201,"Step - Current"),n()(),r(202,"td")(203,"td"),n(),t(204,"tr")(205,"td")(206,"code"),e(207,"--color-icon-current"),n()(),t(208,"td"),e(209,"Cor do \xEDcone no step atual"),n(),t(210,"td")(211,"code"),e(212,"var(--color-neutral-light-00)"),n()()(),t(213,"tr")(214,"td")(215,"code"),e(216,"--background-current"),n()(),t(217,"td"),e(218,"Cor de fundo no step atual"),n(),t(219,"td")(220,"code"),e(221,"var(--color-action-default)"),n()()(),t(222,"tr")(223,"td")(224,"code"),e(225,"--font-weight-current"),n()(),t(226,"td"),e(227,"Peso da fonte no step atual"),n(),t(228,"td")(229,"code"),e(230,"var(--font-weight-bold)"),n()()(),t(231,"tr")(232,"td")(233,"strong"),e(234,"Step - Next"),n()(),r(235,"td")(236,"td"),n(),t(237,"tr")(238,"td")(239,"code"),e(240,"--font-size-circle"),n()(),t(241,"td"),e(242,"Tamanho da fonte no c\xEDrculo do pr\xF3ximo step"),n(),t(243,"td")(244,"code"),e(245,"var(--font-size-sm)"),n()()(),t(246,"tr")(247,"td")(248,"code"),e(249,"--color-next"),n()(),t(250,"td"),e(251,"Cor do \xEDcone no pr\xF3ximo step"),n(),t(252,"td")(253,"code"),e(254,"var(--color-action-disabled)"),n()()(),t(255,"tr")(256,"td")(257,"code"),e(258,"--text-color-next"),n()(),t(259,"td"),e(260,"Cor do texto no pr\xF3ximo step"),n(),t(261,"td")(262,"code"),e(263,"var(--color-neutral-light-30)"),n()()(),t(264,"tr")(265,"td")(266,"strong"),e(267,"Focused"),n()(),r(268,"td")(269,"td"),n(),t(270,"tr")(271,"td")(272,"code"),e(273,"--outline-color-focused"),n()(),t(274,"td"),e(275,"Cor do outline do estado de focus"),n(),t(276,"td")(277,"code"),e(278,"var(--color-action-focus)"),n()()()()()(),t(279,"div",13)(280,"h4",14),e(281,"Seletor"),n(),t(282,"pre",15),e(283,`<po-stepper
    p-align-center="boolean"
    p-disable-click="boolean"
    p-step-icon-active="string | TemplateRef<void>"
    p-step-icon-done="string | TemplateRef<void>"
    (p-change-step)="EventEmitter"
    p-orientation="PoStepperOrientation"
    p-sequential="boolean"
    p-step="number"
    p-step-icons="boolean"
    p-step-size="number"
    p-steps="Array<PoStepperItem>" >
</po-stepper>
`),n()(),t(284,"h4",16),e(285,"Propriedades"),n(),t(286,"table",17)(287,"tr",18)(288,"th",19),e(289,"Nome"),n(),t(290,"th",19),e(291,"Tipo"),n(),t(292,"th",19),e(293,"Padr\xE3o"),n(),t(294,"th",19),e(295,"Descri\xE7\xE3o"),n()(),t(296,"tr",20)(297,"td",21)(298,"div",22)(299,"span",23),e(300," p-align-center"),r(301,"br"),n()()(),t(302,"td",24)(303,"code",25),e(304,"boolean"),n()(),t(305,"td",26)(306,"p")(307,"code"),e(308,"true"),n()()(),t(309,"td",27)(310,"em")(311,"strong"),e(312,"(opcional)"),n()(),t(313,"p"),e(314,"Define o alinhamento dos "),t(315,"em"),e(316,"steps"),n(),e(317," e "),t(318,"em"),e(319,"labels"),n(),e(320," no "),t(321,"em"),e(322,"stepper"),n(),e(323,", dependendo da orienta\xE7\xE3o."),n(),t(324,"ul")(325,"li"),e(326,"Quando "),t(327,"code"),e(328,"true"),n(),e(329,", ficam centralizados em ambas as orienta\xE7\xF5es (horizontal e vertical)."),n(),t(330,"li"),e(331,"Quando "),t(332,"code"),e(333,"false"),n(),e(334,", ficam alinhados \xE0 esquerda na orienta\xE7\xE3o horizontal e ao topo na orienta\xE7\xE3o vertical."),n()()()(),t(335,"tr",20)(336,"td",21)(337,"div",22)(338,"span",23),e(339," p-disable-click"),r(340,"br"),n()()(),t(341,"td",24)(342,"code",25),e(343,"boolean"),n()(),t(344,"td",26)(345,"p")(346,"code"),e(347,"false"),n()()(),t(348,"td",27)(349,"em")(350,"strong"),e(351,"(opcional)"),n()(),t(352,"p"),e(353,"Desabilita o clique nos steps."),n()()(),t(354,"tr",20)(355,"td",21)(356,"div",22)(357,"span",23),e(358," p-step-icon-active"),r(359,"br"),n()()(),t(360,"td",24)(361,"code",28),e(362,"string "),n(),t(363,"code",29),e(364," TemplateRef<void>"),n()(),t(365,"td",26)(366,"p")(367,"code"),e(368,"po-icon-edit"),n()()(),t(369,"td",27)(370,"em")(371,"strong"),e(372,"(opcional)"),n()(),t(373,"p"),e(374,`Permite definir o \xEDcone do step no status ativo.
Esta propriedade permite usar \xEDcones da `),t(375,"a",30),e(376,"Biblioteca de \xEDcones"),n(),e(377," ou da biblioteca "),t(378,"a",31),e(379,"Phosphor"),n(),e(380,"."),n(),t(381,"p"),e(382,"Exemplo usando a biblioteca de \xEDcones padr\xE3o:"),n(),t(383,"pre")(384,"code"),e(385,`<po-stepper p-step-icon-active="po-icon po-icon-settings">
   ...
</po-stepper>`),n()(),t(386,"p"),e(387,"Exemplo usando a biblioteca "),t(388,"em"),e(389,"Phosphor"),n(),e(390,":"),n(),t(391,"pre")(392,"code"),e(393,`<po-stepper p-step-icon-active="ph ph-pencil-simple-line">
   ...
</po-stepper>`),n()(),t(394,"p"),e(395,"Para customizar o \xEDcone atrav\xE9s do "),t(396,"code"),e(397,"TemplateRef"),n(),e(398,", veja a documenta\xE7\xE3o da propriedade "),t(399,"code"),e(400,"p-step-icon-done"),n(),e(401,"."),n(),t(402,"blockquote")(403,"p"),e(404,"Deve-se usar "),t(405,"code"),e(406,"font-size: inherit"),n(),e(407," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),n()()()(),t(408,"tr",20)(409,"td",21)(410,"div",22)(411,"span",23),e(412," p-step-icon-done"),r(413,"br"),n()()(),t(414,"td",24)(415,"code",28),e(416,"string "),n(),t(417,"code",29),e(418," TemplateRef<void>"),n()(),t(419,"td",26)(420,"p")(421,"code"),e(422,"po-icon-ok"),n()()(),t(423,"td",27)(424,"em")(425,"strong"),e(426,"(opcional)"),n()(),t(427,"p"),e(428,`Permite definir o \xEDcone do step no status conclu\xEDdo.
Esta propriedade permite usar \xEDcones da `),t(429,"a",30),e(430,"Biblioteca de \xEDcones"),n(),e(431," ou da biblioteca "),t(432,"a",31),e(433,"Phosphor"),n(),e(434,"."),n(),t(435,"p"),e(436,"Exemplo usando a biblioteca de \xEDcones padr\xE3o:"),n(),t(437,"pre")(438,"code"),e(439,`<po-stepper p-step-icon-done="po-icon po-icon-eye">
   ...
</po-stepper>`),n()(),t(440,"p"),e(441,"Exemplo usando a biblioteca "),t(442,"em"),e(443,"Phosphor"),n(),e(444,":"),n(),t(445,"pre")(446,"code"),e(447,`<po-stepper p-step-icon-done="ph ph-check-circle">
   ...
</po-stepper>`),n()(),t(448,"p"),e(449,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(450,"code"),e(451,"TemplateRef"),n(),e(452,", conforme exemplo abaixo:"),n(),t(453,"pre")(454,"code"),e(455,`<po-stepper [p-step-icon-done]="doneIcon">
   ...
</po-stepper>

<ng-template #doneIcon>
   <i class="ph ph-check-fat"></i>
</ng-template>`),n()(),t(456,"blockquote")(457,"p"),e(458,"Deve-se usar "),t(459,"code"),e(460,"font-size: inherit"),n(),e(461," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),n()()()(),t(462,"tr",20)(463,"td",21)(464,"div",32)(465,"span",33),e(466," (p-change-step)"),r(467,"br"),n()()(),t(468,"td",24)(469,"code",34),e(470,"EventEmitter"),n()(),t(471,"td",26),e(472,"-"),n(),t(473,"td",27)(474,"p"),e(475,"A\xE7\xE3o que ser\xE1 executada quando o usu\xE1rio mudar o passo do "),t(476,"code"),e(477,"po-stepper"),n(),e(478,"."),n()()(),t(479,"tr",20)(480,"td",21)(481,"div",22)(482,"span",23),e(483," p-orientation"),r(484,"br"),n()()(),t(485,"td",24)(486,"code",35),e(487,"PoStepperOrientation"),n()(),t(488,"td",26)(489,"p")(490,"code"),e(491,"PoStepperOrientation.Horizontal"),n()()(),t(492,"td",27)(493,"em")(494,"strong"),e(495,"(opcional)"),n()(),t(496,"p"),e(497,"Define a orienta\xE7\xE3o de exibi\xE7\xE3o do "),t(498,"code"),e(499,"po-stepper"),n(),e(500,"."),n(),t(501,"blockquote")(502,"p"),e(503,"Veja os valores v\xE1lidos no "),t(504,"em"),e(505,"enum"),n(),t(506,"a",36),e(507,"PoStepperOrientation"),n(),e(508,"."),n()()()(),t(509,"tr",20)(510,"td",21)(511,"div",22)(512,"span",23),e(513," p-sequential"),r(514,"br"),n()()(),t(515,"td",24)(516,"code",25),e(517,"boolean"),n()(),t(518,"td",26)(519,"p")(520,"code"),e(521,"true"),n()()(),t(522,"td",27)(523,"em")(524,"strong"),e(525,"(opcional)"),n()(),t(526,"p"),e(527,"Define se o "),t(528,"code"),e(529,"po-stepper"),n(),e(530," ser\xE1 sequencial ou aleat\xF3rio."),n(),t(531,"blockquote")(532,"p"),e(533,"Ao utilizar o componente "),t(534,"a",6)(535,"strong"),e(536,"po-step"),n()(),e(537,", o valor desta propriedade sempre ser\xE1 verdadeiro."),n()()()(),t(538,"tr",20)(539,"td",21)(540,"div",22)(541,"span",23),e(542," p-step"),r(543,"br"),n()()(),t(544,"td",24)(545,"code",37),e(546,"number"),n()(),t(547,"td",26)(548,"p")(549,"code"),e(550,"1"),n()()(),t(551,"td",27)(552,"em")(553,"strong"),e(554,"(opcional)"),n()(),t(555,"p"),e(556,"Controla o passo atual do "),t(557,"code"),e(558,"po-stepper"),n(),e(559,"."),n(),t(560,"blockquote")(561,"p"),e(562,"Ao utilizar esta propriedade e tamb\xE9m utilizar o componente "),t(563,"a",6)(564,"strong"),e(565,"po-step"),n()(),e(566,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),t(567,"a",6)(568,"strong"),e(569,"po-step"),n()(),e(570,"."),n()()()(),t(571,"tr",20)(572,"td",21)(573,"div",22)(574,"span",23),e(575," p-step-icons"),r(576,"br"),n()()(),t(577,"td",24)(578,"code",25),e(579,"boolean"),n()(),t(580,"td",26)(581,"p")(582,"code"),e(583,"false"),n()()(),t(584,"td",27)(585,"em")(586,"strong"),e(587,"(opcional)"),n()(),t(588,"p"),r(589,"a",38),n(),t(590,"p"),e(591,"Habilita a exibi\xE7\xE3o de \xEDcone ao inv\xE9s de n\xFAmero no centro do c\xEDrculo dos "),t(592,"em"),e(593,"steps"),n(),e(594,"."),n()()(),t(595,"tr",20)(596,"td",21)(597,"div",22)(598,"span",23),e(599," p-step-size"),r(600,"br"),n()()(),t(601,"td",24)(602,"code",37),e(603,"number"),n()(),t(604,"td",26)(605,"p")(606,"code"),e(607,"24"),n()()(),t(608,"td",27)(609,"em")(610,"strong"),e(611,"(opcional)"),n()(),t(612,"p"),e(613,"Define o tamanho dos "),t(614,"em"),e(615,"steps"),n(),e(616," em "),t(617,"em"),e(618,"pixels"),n(),e(619,", possibilitando um maior destaque."),n(),t(620,"p"),e(621,"O valor informado deve ser entre "),t(622,"code"),e(623,"24"),n(),e(624," e "),t(625,"code"),e(626,"64"),n(),e(627,"."),n(),t(628,"blockquote")(629,"p"),e(630,"Valores que n\xE3o se enquadrarem a esta regra ser\xE3o ignorados, mantendo-se o valor "),t(631,"em"),e(632,"default"),n(),e(633,"."),n()()()(),t(634,"tr",20)(635,"td",21)(636,"div",22)(637,"span",23),e(638," p-steps"),r(639,"br"),n()()(),t(640,"td",24)(641,"code",39),e(642,"Array<PoStepperItem>"),n()(),t(643,"td",26),e(644,"-"),n(),t(645,"td",27)(646,"em")(647,"strong"),e(648,"(opcional)"),n()(),t(649,"p"),e(650,"Lista dos itens do stepper. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),n(),t(651,"blockquote")(652,"p"),e(653,"Ao utilizar esta propriedade e tamb\xE9m utilizar o componente "),t(654,"a",6)(655,"strong"),e(656,"po-step"),n()(),e(657,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),t(658,"a",6)(659,"strong"),e(660,"po-step"),n()(),e(661,"."),n()()()()(),t(662,"h3",16),e(663,"M\xE9todos"),n(),t(664,"table",40)(665,"tr",20)(666,"th",41)(667,"div",22)(668,"h4")(669,"span",23),e(670," active "),n()()()()(),t(671,"tr",27)(672,"td",27)(673,"p"),e(674,"Altera o status do "),t(675,"em"),e(676,"step"),n(),e(677," para ativo."),n(),t(678,"blockquote")(679,"p"),e(680,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),t(681,"a",6)(682,"strong"),e(683,"po-step"),n()(),e(684,"."),n()()()()(),t(685,"h5")(686,"b"),e(687,"Par\xE2metros"),n()(),t(688,"table",17)(689,"tr",18)(690,"th",19),e(691,"Nome"),n(),t(692,"th",19),e(693,"Tipo"),n(),t(694,"th",19),e(695,"Descri\xE7\xE3o"),n()(),t(696,"tr",20)(697,"td",21),e(698," index"),n(),t(699,"td",24)(700,"code",42),e(701," number "),n()(),t(702,"td",27)(703,"p"),e(704,"\xCDndice do "),t(705,"code"),e(706,"po-step"),n(),e(707," que se deseja ativar."),n()()()(),r(708,"br"),t(709,"table",40)(710,"tr",20)(711,"th",41)(712,"div",22)(713,"h4")(714,"span",23),e(715," first "),n()()()()(),t(716,"tr",27)(717,"td",27)(718,"p"),e(719,"Ativa o primeiro "),t(720,"em"),e(721,"step"),n(),e(722,"."),n(),t(723,"blockquote")(724,"p"),e(725,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),t(726,"a",6)(727,"strong"),e(728,"po-step"),n()(),e(729,"."),n()()()()(),r(730,"br"),t(731,"table",40)(732,"tr",20)(733,"th",41)(734,"div",22)(735,"h4")(736,"span",23),e(737," next "),n()()()()(),t(738,"tr",27)(739,"td",27)(740,"p"),e(741,"Ativa o pr\xF3ximo "),t(742,"em"),e(743,"step"),n(),e(744,"."),n(),t(745,"blockquote")(746,"p"),e(747,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),t(748,"a",6)(749,"strong"),e(750,"po-step"),n()(),e(751,"."),n()()()()(),r(752,"br"),t(753,"table",40)(754,"tr",20)(755,"th",41)(756,"div",22)(757,"h4")(758,"span",23),e(759," previous "),n()()()()(),t(760,"tr",27)(761,"td",27)(762,"p"),e(763,"Ativa o "),t(764,"em"),e(765,"step"),n(),e(766," anterior."),n(),t(767,"blockquote")(768,"p"),e(769,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),t(770,"a",6)(771,"strong"),e(772,"po-step"),n()(),e(773,"."),n()()()()(),r(774,"br"),t(775,"h3"),e(776,"Interfaces"),n(),t(777,"h4",43)(778,"code",5),e(779,"PoStepperItem"),n()(),t(780,"div",2)(781,"p"),e(782,"Interface para defini\xE7\xE3o dos "),t(783,"em"),e(784,"steps"),n(),e(785," do componente "),t(786,"code"),e(787,"po-stepper"),n(),e(788," quando utilizada a propriedade "),t(789,"code"),e(790,"p-steps"),n(),e(791,"."),n()(),t(792,"h4",16),e(793,"Propriedades"),n(),t(794,"table",17)(795,"tr",18)(796,"th",19),e(797,"Nome"),n(),t(798,"th",19),e(799,"Tipo"),n(),t(800,"th",19),e(801,"Descri\xE7\xE3o"),n()(),t(802,"tr",20)(803,"td",21)(804,"div",22)(805,"span",23),e(806," iconActive"),r(807,"br"),n()()(),t(808,"td",24)(809,"code",28),e(810,"string "),n(),t(811,"code",29),e(812," TemplateRef<void>"),n()(),t(813,"td",27)(814,"em")(815,"strong"),e(816,"(opcional)"),n()(),t(817,"p"),e(818,"Define o \xEDcone do "),t(819,"em"),e(820,"step"),n(),e(821," ativo."),n()()(),t(822,"tr",20)(823,"td",21)(824,"div",22)(825,"span",23),e(826," iconDefault"),r(827,"br"),n()()(),t(828,"td",24)(829,"code",28),e(830,"string "),n(),t(831,"code",29),e(832," TemplateRef<void>"),n()(),t(833,"td",27)(834,"em")(835,"strong"),e(836,"(opcional)"),n()(),t(837,"p"),e(838,"Define o \xEDcone do "),t(839,"em"),e(840,"step"),n(),e(841," default."),n()()(),t(842,"tr",20)(843,"td",21)(844,"div",22)(845,"span",23),e(846," iconDone"),r(847,"br"),n()()(),t(848,"td",24)(849,"code",28),e(850,"string "),n(),t(851,"code",29),e(852," TemplateRef<void>"),n()(),t(853,"td",27)(854,"em")(855,"strong"),e(856,"(opcional)"),n()(),t(857,"p"),e(858,"Define o \xEDcone do "),t(859,"em"),e(860,"step"),n(),e(861," conclu\xEDdo."),n()()(),t(862,"tr",20)(863,"td",21)(864,"div",22)(865,"span",23),e(866," label"),r(867,"br"),n()()(),t(868,"td",24)(869,"code",28),e(870,"string"),n()(),t(871,"td",27)(872,"em")(873,"strong"),e(874,"(opcional)"),n()(),t(875,"p"),e(876,"Texto do item do stepper."),n()()(),t(877,"tr",20)(878,"td",21)(879,"div",22)(880,"span",23),e(881," status"),r(882,"br"),n()()(),t(883,"td",24)(884,"code",44),e(885,"PoStepperStatus"),n()(),t(886,"td",27)(887,"em")(888,"strong"),e(889,"(opcional)"),n()(),t(890,"p"),e(891,"Define o estado de exibi\xE7\xE3o do "),t(892,"em"),e(893,"step"),n(),e(894,"."),n()()()(),t(895,"h3"),e(896,"Enums"),n(),t(897,"h4",4)(898,"code",5),e(899,"PoStepperOrientation"),n()(),t(900,"div",2)(901,"p"),r(902,"a",45),n(),t(903,"p")(904,"em"),e(905,"Enums"),n(),e(906," para defini\xE7\xE3o da orienta\xE7\xE3o do "),t(907,"code"),e(908,"po-stepper"),n(),e(909,"."),n()(),t(910,"h4",16),e(911,"Propriedades"),n(),t(912,"table",17)(913,"tr",18)(914,"th",19),e(915,"Nome"),n(),t(916,"th",19),e(917,"Descri\xE7\xE3o"),n()(),t(918,"tr",20)(919,"td",21)(920,"div",22)(921,"span",23),e(922," Horizontal"),r(923,"br"),n()()(),t(924,"td",27)(925,"p"),e(926,"Define a exibi\xE7\xE3o do componente na horizontal."),n()()(),t(927,"tr",20)(928,"td",21)(929,"div",22)(930,"span",23),e(931," Vertical"),r(932,"br"),n()()(),t(933,"td",27)(934,"p"),e(935,"Define a exibi\xE7\xE3o do componente na vertical."),n()()()(),t(936,"h4",4)(937,"code",5),e(938,"PoStepperStatus"),n()(),t(939,"div",2)(940,"p"),r(941,"a",46),n(),t(942,"p")(943,"em"),e(944,"Enums"),n(),e(945," para os status do "),t(946,"code"),e(947,"po-stepper"),n(),e(948," quando utilizada a propriedade "),t(949,"code"),e(950,"p-steps"),n(),e(951,"."),n()(),t(952,"h4",16),e(953,"Propriedades"),n(),t(954,"table",17)(955,"tr",18)(956,"th",19),e(957,"Nome"),n(),t(958,"th",19),e(959,"Descri\xE7\xE3o"),n()(),t(960,"tr",20)(961,"td",21)(962,"div",22)(963,"span",23),e(964," Active"),r(965,"br"),n()()(),t(966,"td",27)(967,"p"),e(968,"Define o estado do "),t(969,"em"),e(970,"step"),n(),e(971," como ativo."),n()()(),t(972,"tr",20)(973,"td",21)(974,"div",22)(975,"span",23),e(976," Default"),r(977,"br"),n()()(),t(978,"td",27)(979,"p"),e(980,"Define o estado do "),t(981,"em"),e(982,"step"),n(),e(983," como padr\xE3o."),n()()(),t(984,"tr",20)(985,"td",21)(986,"div",22)(987,"span",23),e(988," Disabled"),r(989,"br"),n()()(),t(990,"td",27)(991,"p"),e(992,"Define o estado do "),t(993,"em"),e(994,"step"),n(),e(995," como desabilitado."),n()()(),t(996,"tr",20)(997,"td",21)(998,"div",22)(999,"span",23),e(1e3," Done"),r(1001,"br"),n()()(),t(1002,"td",27)(1003,"p"),e(1004,"Define o estado do "),t(1005,"em"),e(1006,"step"),n(),e(1007," como conclu\xEDdo."),n()()(),t(1008,"tr",20)(1009,"td",21)(1010,"div",22)(1011,"span",23),e(1012," Error"),r(1013,"br"),n()()(),t(1014,"td",27)(1015,"p"),e(1016,"Define o estado do "),t(1017,"em"),e(1018,"step"),n(),e(1019," com erro."),n()()()()())},dependencies:[w],encapsulation:2})}return p})();var qe=(()=>{class p{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||p)(M(Se),M(he))};static \u0275cmp=E({type:p,selectors:[["ng-component"]],standalone:!1,decls:10,vars:4,consts:[["p-title"," Stepper",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,i){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),r(3,"sample-po-stepper-doc"),n(),t(4,"po-tab",3),r(5,"sample-po-stepper-basic-view")(6,"sample-po-stepper-labs-view")(7,"sample-po-stepper-sales-view")(8,"sample-po-stepper-active-view")(9,"sample-po-stepper-steps-view"),n()()()),a&2&&(d("p-actions",i.actions),l(2),d("p-active",i.activeTab.includes("doc")),l(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[Pe,P,_,De,Fe,Ve,We,Be,Ne],encapsulation:2})}return p})();var gt=[{path:"",component:qe}],ze=(()=>{class p{static \u0275fac=function(a){return new(a||p)};static \u0275mod=Y({type:p});static \u0275inj=U({imports:[ie.forChild(gt),ie]})}return p})();var en=(()=>{class p{static \u0275fac=function(a){return new(a||p)};static \u0275mod=Y({type:p});static \u0275inj=U({imports:[_e,ze]})}return p})();export{en as DocPoStepperModule};
