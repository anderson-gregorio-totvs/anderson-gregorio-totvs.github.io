import{$ as Y,$a as W,$d as ne,A as me,Ca as F,Cd as te,Da as I,Dc as Ee,Ea as V,F as u,Fa as v,Fc as be,G as S,Ga as e,Ha as ce,Ia as y,Ka as h,La as g,Lb as J,Ma as f,Mb as O,Nb as R,Ob as Z,Od as Pe,Pa as A,Pb as H,T as l,U as M,Ud as D,Vd as k,Wb as Se,Wd as x,Xd as P,Yb as he,Yd as _,Za as z,Zb as ie,_ as E,_b as ge,a as oe,ab as X,bb as G,ea as B,g as pe,ha as d,jc as fe,ka as T,ld as ve,m as ae,md as ee,na as t,o as re,oa as n,oc as K,od as Ce,pa as r,pb as ue,re as w,se as _e,ta as q,ua as b,v as le,va as de,vc as $,x as se,y as U,yd as ye,zd as xe}from"./chunk-V5DQALWN.js";var we=(()=>{class p{static \u0275fac=function(a){return new(a||p)};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-basic"]],standalone:!1,decls:4,vars:1,consts:[[3,"p-align-center"],["p-label","Step 1"],["p-label","Step 2"],["p-label","Step 3"]],template:function(a,i){a&1&&(t(0,"po-stepper",0),r(1,"po-step",1)(2,"po-step",2)(3,"po-step",3),n()),a&2&&d("p-align-center",!1)},dependencies:[k,x],encapsulation:2})}return p})();var He=p=>({"docs-sample-code-tabs":p}),De=(()=>{class p{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||p)};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Stepper Basic"),n(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-stepper-basic/sample-po-stepper-basic.component.html"),n(),t(13,"pre",7),e(14,`<po-stepper [p-align-center]="false">
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
`),n()()()()(),t(21,"div",10),r(22,"sample-po-stepper-basic"),n(),r(23,"hr")),a&2&&(l(5),T("po-icon "+i.sampleCodeButtonIcon),l(),y(" ",i.sampleCodeButtonLabel,""),l(),d("ngClass",A(4,He,i.hideSampleCodeTabs)))},dependencies:[W,w,P,_,we],encapsulation:2})}return p})();function Qe(p,j){if(p&1&&(t(0,"po-step",9)(1,"h2"),e(2),n()()),p&2){let s=j.$implicit;d("p-label",s.label)("p-icon-default",s.iconDefault),l(2),y("Step Content ",s.label,"")}}var Te=(()=>{class p{changeDetector;event;properties={};stepItem={};steps=[];propertiesFields=[{divider:"Properties",property:"stepSize",label:"Step Size",type:"number",maxValue:64,minValue:24,gridLgColumns:2},{property:"orientation",options:[{value:"vertical",label:"Vertical",checked:!0},{value:"horizontal",label:"Horizontal"}],gridLgColumns:4},{label:"Align Steps Center",gridLgColumns:3,property:"alignCenter",type:"boolean"},{label:"Step icons",gridLgColumns:3,property:"stepIcons",type:"boolean"},{label:"Step Icon Active Custom",help:"Ex.: ph ph-pencil-simple-line",gridLgColumns:4,property:"iconActive"},{label:"Step Icon Done Custom",help:"Ex.: ph ph-check-fat",gridLgColumns:4,property:"iconDone"}];stepItemFields=[{divider:"Step form",property:"label",label:"Step Label",gridMdColumns:6,gridXlColumns:6},{property:"iconDefault",label:"Step Icon Default Custom",help:"Ex.: ph ph-question",gridMdColumns:6,gridXlColumns:6}];constructor(s){this.changeDetector=s}ngOnInit(){this.restore()}addItem(s){this.steps=[...this.steps,oe({},s)],this.stepItem={},this.changeDetector.detectChanges()}changeStep(s){this.event=s,this.changeDetector.detectChanges()}restore(){this.properties={},this.steps=[],this.event=void 0,this.properties.orientation="horizontal",this.properties.alignCenter=!1}static \u0275fac=function(a){return new(a||p)(M(z))};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-labs"]],standalone:!1,decls:16,vars:13,consts:[["stepForm","ngForm"],["propertiesForm","ngForm"],[3,"p-change-step","p-align-center","p-orientation","p-step-icons","p-step-size","p-step-icon-active","p-step-icon-done"],[3,"p-label","p-icon-default",4,"ngFor","ngForOf"],["p-label","Event",3,"p-value"],[3,"p-group-form","p-fields","p-value"],[1,"po-row"],["p-label","Add Step",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],[3,"p-label","p-icon-default"]],template:function(a,i){if(a&1){let m=q();t(0,"po-container")(1,"po-stepper",2),b("p-change-step",function(){return u(m),S(i.changeStep("change"))}),B(2,Qe,3,3,"po-step",3),n(),r(3,"hr")(4,"po-info",4),t(5,"form",null,0),r(7,"po-dynamic-form",5),t(8,"div",6)(9,"po-button",7),b("p-click",function(){u(m);let o=v(6);return i.addItem(i.stepItem),S(o.reset())}),n()()(),t(10,"form",null,1),r(12,"po-dynamic-form",5)(13,"hr"),t(14,"div",6)(15,"po-button",8),b("p-click",function(){u(m);let o=v(6),Oe=v(11);return i.restore(),Oe.reset(),S(o.reset())}),n()()()()}if(a&2){let m=v(6);l(),d("p-align-center",i.properties.alignCenter)("p-orientation",i.properties.orientation)("p-step-icons",i.properties.stepIcons)("p-step-size",i.properties.stepSize)("p-step-icon-active",i.properties.iconActive)("p-step-icon-done",i.properties.iconDone),l(),d("ngForOf",i.steps),l(2),d("p-value",i.event),l(3),d("p-fields",i.stepItemFields)("p-value",i.stepItem),l(2),d("p-disabled",m.invalid),l(3),d("p-fields",i.propertiesFields)("p-value",i.properties)}},dependencies:[X,H,O,R,K,$,Ce,te,k,x],encapsulation:2})}return p})();var Ye=p=>({"docs-sample-code-tabs":p}),Fe=(()=>{class p{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||p)};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Stepper Labs"),n(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-stepper-labs/sample-po-stepper-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-container>
  <po-stepper
    [p-align-center]="properties.alignCenter"
    [p-orientation]="properties.orientation"
    [p-step-icons]="properties.stepIcons"
    [p-step-size]="properties.stepSize"
    [p-step-icon-active]="properties.iconActive"
    [p-step-icon-done]="properties.iconDone"
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
`),n()()()()(),t(21,"div",10),r(22,"sample-po-stepper-labs"),n(),r(23,"hr")),a&2&&(l(5),T("po-icon "+i.sampleCodeButtonIcon),l(),y(" ",i.sampleCodeButtonLabel,""),l(),d("ngClass",A(4,Ye,i.hideSampleCodeTabs)))},dependencies:[W,w,P,_,Te],encapsulation:2})}return p})();var Ge=["addressForm"],Je=["paymentForm"],Ze=["personalForm"],Ke=["successData"];function $e(p,j){p&1&&r(0,"po-loading-overlay",52)}var Ie=(()=>{class p{addressForm;paymentForm;personalForm;successData;address;birthday;cardCode;cardName;cardValid;confirmLabelWidget="Confirm Purchase";currentActiveStep;document;isLoadingPayment=!1;name;nextLabelWidget="Next Step";previousLabelWidget="Previous Step";constructor(){this.address=this.getAddress()}canActiveFinishStep(s){return pe(s.form.valid).pipe(le(()=>this.isLoadingPayment=!0),ae(2e3),re(()=>this.isLoadingPayment=!1))}canActiveNextStep(s){return s.valid}onConfirmStep(s){this.successData.open(),this.resetForms(),this.address=this.getAddress(),s.first()}getAddress(){return{city:"Sao Paulo",code:"02511-000",country:"Brazil",number:"1000",reference:"",street:"Avenida Braz Leme"}}resetForms(){this.personalForm.reset(),this.paymentForm.reset()}static \u0275fac=function(a){return new(a||p)};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-sales"]],viewQuery:function(a,i){if(a&1&&(F(Ge,7),F(Je,7),F(Ze,7),F(Ke,7)),a&2){let m;I(m=V())&&(i.addressForm=m.first),I(m=V())&&(i.paymentForm=m.first),I(m=V())&&(i.personalForm=m.first),I(m=V())&&(i.successData=m.first)}},standalone:!1,decls:84,vars:29,consts:[["stepper",""],["personalForm","ngForm"],["addressForm","ngForm"],["paymentForm","ngForm"],["cardname",""],["cardcode",""],["carddate",""],["successData",""],[1,"po-row"],["p-title","Product Detail",1,"po-md-9"],[1,"po-lg-4"],["src","../../../assets/graphics/shoe.gif","width","215","height","200"],[1,"po-lg-8"],[1,"po-font-title"],[1,"po-font-text-large-bold"],[1,"po-font-text"],["p-height","317","p-title","Price",1,"po-md-3"],[2,"position","relative"],["p-text","Loading",4,"ngIf"],["p-align-center","false","p-orientation","vertical","p-step-icons","","p-step-size","32"],["p-label","Personal",3,"p-can-active-next-step"],["p-height","380","p-title","Purchase",1,"po-md-12",3,"p-primary-action","p-primary-label"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","birthday","p-format","dd/mm/yyyy","p-label","Birthday","p-optional","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","document","p-label","Document","p-optional","",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Address",3,"p-can-active-next-step"],["p-height","380","p-title","Purchase",1,"po-md-12",3,"p-primary-action","p-secondary-action","p-primary-label","p-secondary-label"],["name","address.street","p-label","Street/House","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","number","p-label","Number","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","city","p-label","City","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","code","p-label","Postal Code","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","country","p-label","Country","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","reference","p-label","Reference","p-optional","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Payment",3,"p-can-active-next-step"],["name","cardName","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","cardCode","p-clean","","p-label","Code","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-pattern","\\d{4} \\d{4} \\d{4} \\d{4}","p-required","",1,"po-lg-4","po-md-9",3,"ngModelChange","ngModel"],["name","cardValid","p-clean","","p-label","Expiration Date","p-mask","12/99","p-mask-format-model","","p-pattern","\\d{2}\\/\\d{2}","p-required","",1,"po-lg-2","po-md-3",3,"ngModelChange","ngModel"],["p-label","Finish"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Document",1,"po-md-3",3,"p-value"],["p-label","Address",1,"po-md-3",3,"p-value"],["p-label","Number",1,"po-md-3",3,"p-value"],["p-label","City",1,"po-md-3",3,"p-value"],["p-label","Country",1,"po-md-3",3,"p-value"],["p-label","Product","p-value","Nike XYZ - Red/Gold Stripes",1,"po-md-4"],["p-label","Price","p-value","$2.500,00",1,"po-md-2"],["p-label","Discount","p-value","$500,00",1,"po-md-2"],["p-label","Tax","p-value","$160,00",1,"po-md-2"],["p-label","Final Price","p-value","$2.160,00",1,"po-md-2"],["p-title","Informations"],["src","../../../assets/graphics/check.jpg","width","350","height","350",1,"po-offset-md-6","po-offset-xl-3"],[1,"po-offset-md-8","po-offset-xl-3","po-font-title"],["p-text","Loading"]],template:function(a,i){if(a&1){let m=q();t(0,"div",8)(1,"po-widget",9)(2,"div",8)(3,"div",10),r(4,"img",11),n(),t(5,"div",12)(6,"p",13),e(7,"Nike XYZ - Red/Gold Stripes"),n(),t(8,"p",14),e(9,"Brand: Nike | Style: Modern | Men's"),n(),t(10,"p",15),e(11,"Width: 12.5 - COD: 001254648412319"),n(),r(12,"hr"),t(13,"p",15),e(14,"Price: $2.500,00 | Discount: $500,00 | Tax: $160,00"),n()()()(),t(15,"po-widget",16)(16,"p",15),e(17,"$2.500,00"),n(),t(18,"p",15),e(19,"$500,00(-)"),n(),t(20,"p",15),e(21,"$160,00(+)"),n(),r(22,"hr"),t(23,"p",14),e(24,"Total: $2.160,00"),n()()(),r(25,"hr"),t(26,"div",17),B(27,$e,1,0,"po-loading-overlay",18),t(28,"po-stepper",19,0)(30,"po-step",20)(31,"po-widget",21),b("p-primary-action",function(){u(m);let o=v(29);return S(o.next())}),t(32,"form",null,1)(34,"div",8)(35,"po-input",22),f("ngModelChange",function(o){return u(m),g(i.name,o)||(i.name=o),S(o)}),n(),t(36,"po-datepicker",23),f("ngModelChange",function(o){return u(m),g(i.birthday,o)||(i.birthday=o),S(o)}),n(),t(37,"po-input",24),f("ngModelChange",function(o){return u(m),g(i.document,o)||(i.document=o),S(o)}),n()()()()(),t(38,"po-step",25)(39,"po-widget",26),b("p-primary-action",function(){u(m);let o=v(29);return S(o.previous())})("p-secondary-action",function(){u(m);let o=v(29);return S(o.next())}),t(40,"form",null,2)(42,"div",8)(43,"po-input",27),f("ngModelChange",function(o){return u(m),g(i.address.street,o)||(i.address.street=o),S(o)}),n(),t(44,"po-input",28),f("ngModelChange",function(o){return u(m),g(i.address.number,o)||(i.address.number=o),S(o)}),n(),t(45,"po-input",29),f("ngModelChange",function(o){return u(m),g(i.address.city,o)||(i.address.city=o),S(o)}),n()(),t(46,"div",8)(47,"po-input",30),f("ngModelChange",function(o){return u(m),g(i.address.code,o)||(i.address.code=o),S(o)}),n(),t(48,"po-input",31),f("ngModelChange",function(o){return u(m),g(i.address.country,o)||(i.address.country=o),S(o)}),n(),t(49,"po-input",32),f("ngModelChange",function(o){return u(m),g(i.address.reference,o)||(i.address.reference=o),S(o)}),n()()()()(),t(50,"po-step",33)(51,"po-widget",26),b("p-primary-action",function(){u(m);let o=v(29);return S(o.previous())})("p-secondary-action",function(){u(m);let o=v(29);return S(o.next())}),t(52,"form",null,3)(54,"div",8)(55,"po-input",34,4),f("ngModelChange",function(o){return u(m),g(i.cardName,o)||(i.cardName=o),S(o)}),n(),t(57,"po-input",35,5),f("ngModelChange",function(o){return u(m),g(i.cardCode,o)||(i.cardCode=o),S(o)}),n(),t(59,"po-input",36,6),f("ngModelChange",function(o){return u(m),g(i.cardValid,o)||(i.cardValid=o),S(o)}),n()()()()(),t(61,"po-step",37)(62,"po-widget",26),b("p-primary-action",function(){u(m);let o=v(29);return S(o.previous())})("p-secondary-action",function(){u(m);let o=v(29);return S(i.onConfirmStep(o))}),t(63,"div",8),r(64,"po-info",38)(65,"po-info",39),n(),t(66,"div",8),r(67,"po-info",40)(68,"po-info",41)(69,"po-info",42)(70,"po-info",43),n(),r(71,"hr"),t(72,"div",8),r(73,"po-info",44)(74,"po-info",45)(75,"po-info",46)(76,"po-info",47)(77,"po-info",48),n()()()()(),t(78,"po-modal",49,7)(80,"div",8),r(81,"img",50),t(82,"p",51),e(83,"Success! ORDER NUMBER: 5767686678609-XPTOA"),n()()()}if(a&2){let m=v(33),c=v(41),o=v(53);l(27),d("ngIf",i.isLoadingPayment),l(3),d("p-can-active-next-step",i.canActiveNextStep.bind(i,m)),l(),d("p-primary-label",i.nextLabelWidget),l(4),h("ngModel",i.name),l(),h("ngModel",i.birthday),l(),h("ngModel",i.document),l(),d("p-can-active-next-step",i.canActiveNextStep.bind(i,c)),l(),d("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.nextLabelWidget),l(4),h("ngModel",i.address.street),l(),h("ngModel",i.address.number),l(),h("ngModel",i.address.city),l(2),h("ngModel",i.address.code),l(),h("ngModel",i.address.country),l(),h("ngModel",i.address.reference),l(),d("p-can-active-next-step",i.canActiveFinishStep.bind(i,o)),l(),d("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.nextLabelWidget),l(4),h("ngModel",i.cardName),l(2),h("ngModel",i.cardCode),l(2),h("ngModel",i.cardValid),l(3),d("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.confirmLabelWidget),l(2),d("p-value",i.name),l(),d("p-value",i.document),l(2),d("p-value",i.address.street),l(),d("p-value",i.address.number),l(),d("p-value",i.address.city),l(),d("p-value",i.address.country)}},dependencies:[G,H,J,O,Z,R,Ee,ee,te,fe,be,k,x,ne],encapsulation:2})}return p})();var tt=p=>({"docs-sample-code-tabs":p}),Ve=(()=>{class p{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||p)};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-sales-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Stepper - Sales"),n(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-stepper-sales/sample-po-stepper-sales.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row">
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
`),n()()()()(),t(21,"div",10),r(22,"sample-po-stepper-sales"),n(),r(23,"hr")),a&2&&(l(5),T("po-icon "+i.sampleCodeButtonIcon),l(),y(" ",i.sampleCodeButtonLabel,""),l(),d("ngClass",A(4,tt,i.hideSampleCodeTabs)))},dependencies:[W,w,P,_,Ie],encapsulation:2})}return p})();var Ae=(()=>{class p{http;url="https://po-sample-api.onrender.com/v1/sampleSelect";constructor(s){this.http=s}getCitiesByState(s){return this.http.get(`${this.url}/getCities/${s}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(a){return new(a||p)(me(ue))};static \u0275prov=se({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})();var ot=["basicInformation"],pt=["academicFormation"],at=["professionalExperiences"];function rt(p,j){if(p&1&&(t(0,"div",24)(1,"po-widget",26)(2,"p"),e(3),n()()()),p&2){let s=j.$implicit;l(),d("p-title",s.title),l(2),ce(s.description)}}function lt(p,j){if(p&1&&(t(0,"div",4),r(1,"po-divider",24),B(2,rt,4,2,"div",25),n()),p&2){let s=de();l(2),d("ngForOf",s.professionalExperiences)}}var We=(()=>{class p{sampleService;changeDetector;basicInformationForm;academicFormationForm;professionalExperiencesForm;stepper;cityOptions=[];stateOptions=[];basicInformation;highSchool;universityEducation;professionalExperiences;experienceTitle;experienceDescripton;overview;citiesSubscription;statesSubscription;constructor(s,a){this.sampleService=s,this.changeDetector=a}ngAfterViewInit(){setTimeout(()=>this.activeStep())}ngOnInit(){this.basicInformation=this.getBasicInformations(),this.highSchool=this.getHighSchool(),this.universityEducation=this.getUniversityEducation(),this.professionalExperiences=this.getProfessionalExperiencies(),this.getStates()}ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}activeStep(){this.stepper.active(2)}onChangeState(){this.getCitiesByState(this.basicInformation.state)}addProfessionalExperiences(s){let a={title:s.value.experienceTitle,description:s.value.experienceDescripton};this.professionalExperiences=[...this.professionalExperiences,a]}getBasicInformations(){return{name:"Maria Alice",email:"mariaalice@gmail.com",phone:"47988888888",state:"sp",city:1}}getHighSchool(){return{name:"Escola de Ensino B\xE1sico Dr Jorge Lacerda",city:"Joinville",conclusionYear:"2016"}}getUniversityEducation(){return{name:"Universidade Federal do Santa Catarina",city:"Florian\xF3polis",conclusionYear:"2020"}}getProfessionalExperiencies(){return[{title:"Analista de desenvolvimento de software na TOTVS",description:"Respons\xE1vel pelo desenvolvimento e manuten\xE7\xE3o de sistemas do segmento de manufatura. Do ano de 2019 \xE0 2020"}]}getCitiesByState(s){this.citiesSubscription=this.sampleService.getCitiesByState(s).subscribe(a=>{this.cityOptions=a.items,this.basicInformation.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(s=>{this.stateOptions=s.items,this.getCitiesByState(this.basicInformation.state)})}static \u0275fac=function(a){return new(a||p)(M(Ae),M(z))};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-active"]],viewQuery:function(a,i){if(a&1&&(F(ot,7),F(pt,7),F(at,7),F(x,5)),a&2){let m;I(m=V())&&(i.basicInformationForm=m.first),I(m=V())&&(i.academicFormationForm=m.first),I(m=V())&&(i.professionalExperiencesForm=m.first),I(m=V())&&(i.stepper=m.first)}},standalone:!1,decls:32,vars:16,consts:[["basicInformationForm","ngForm"],["academicFormationForm","ngForm"],["professionalExperiencesForm","ngForm"],["p-label","Basic information"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","phone","p-label","Phone","p-optional","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","city","p-label","City",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-label","Academic formation"],["p-label","High school",1,"po-md-12"],["name","highSchoolName","p-clean","","p-label","Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","highSchoolCity","p-clean","","p-label","City",1,"po-md-3",3,"ngModelChange","ngModel"],["name","highSchoolPeriod","p-label","Period",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","University education",1,"po-md-12"],["name","universityEducationName","p-clean","","p-label","Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","universityEducationCity","p-clean","","p-label","City",1,"po-md-3",3,"ngModelChange","ngModel"],["name","universityEducationPeriod","p-label","Period",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Professional experiences"],["name","experienceTitle","p-label","Professional position",1,"po-md-12",3,"ngModelChange","ngModel"],["name","experienceDescripton","p-label","Describe your responsibilities","p-rows","4",1,"po-md-12",3,"ngModelChange","ngModel"],["type","submit","p-label","Add professional experience",1,"po-md-4",3,"p-click"],["class","po-row",4,"ngIf"],[1,"po-md-12"],["class","po-md-12",4,"ngFor","ngForOf"],[1,"po-md-12",3,"p-title"]],template:function(a,i){if(a&1){let m=q();t(0,"po-container")(1,"po-stepper")(2,"po-step",3)(3,"form",null,0)(5,"div",4)(6,"po-input",5),f("ngModelChange",function(o){return u(m),g(i.basicInformation.name,o)||(i.basicInformation.name=o),S(o)}),n(),t(7,"po-email",6),f("ngModelChange",function(o){return u(m),g(i.basicInformation.email,o)||(i.basicInformation.email=o),S(o)}),n(),t(8,"po-input",7),f("ngModelChange",function(o){return u(m),g(i.basicInformation.phone,o)||(i.basicInformation.phone=o),S(o)}),n(),t(9,"po-select",8),f("ngModelChange",function(o){return u(m),g(i.basicInformation.state,o)||(i.basicInformation.state=o),S(o)}),b("p-change",function(){return u(m),S(i.onChangeState())}),n(),t(10,"po-select",9),f("ngModelChange",function(o){return u(m),g(i.basicInformation.city,o)||(i.basicInformation.city=o),S(o)}),n()()()(),t(11,"po-step",10)(12,"form",null,1)(14,"div",4),r(15,"po-divider",11),t(16,"po-input",12),f("ngModelChange",function(o){return u(m),g(i.highSchool.name,o)||(i.highSchool.name=o),S(o)}),n(),t(17,"po-input",13),f("ngModelChange",function(o){return u(m),g(i.highSchool.city,o)||(i.highSchool.city=o),S(o)}),n(),t(18,"po-input",14),f("ngModelChange",function(o){return u(m),g(i.highSchool.conclusionYear,o)||(i.highSchool.conclusionYear=o),S(o)}),n()(),t(19,"div",4),r(20,"po-divider",15),t(21,"po-input",16),f("ngModelChange",function(o){return u(m),g(i.universityEducation.name,o)||(i.universityEducation.name=o),S(o)}),n(),t(22,"po-input",17),f("ngModelChange",function(o){return u(m),g(i.universityEducation.city,o)||(i.universityEducation.city=o),S(o)}),n(),t(23,"po-input",18),f("ngModelChange",function(o){return u(m),g(i.universityEducation.conclusionYear,o)||(i.universityEducation.conclusionYear=o),S(o)}),n()()()(),t(24,"po-step",19)(25,"form",null,2)(27,"div",4)(28,"po-input",20),f("ngModelChange",function(o){return u(m),g(i.experienceTitle,o)||(i.experienceTitle=o),S(o)}),n(),t(29,"po-textarea",21),f("ngModelChange",function(o){return u(m),g(i.experienceDescripton,o)||(i.experienceDescripton=o),S(o)}),n(),t(30,"po-button",22),b("p-click",function(){u(m);let o=v(26);return i.addProfessionalExperiences(o),S(o.reset())}),n()()(),B(31,lt,3,1,"div",23),n()()()}a&2&&(l(6),h("ngModel",i.basicInformation.name),l(),h("ngModel",i.basicInformation.email),l(),h("ngModel",i.basicInformation.phone),l(),h("ngModel",i.basicInformation.state),d("p-options",i.stateOptions),l(),h("ngModel",i.basicInformation.city),d("p-options",i.cityOptions),l(6),h("ngModel",i.highSchool.name),l(),h("ngModel",i.highSchool.city),l(),h("ngModel",i.highSchool.conclusionYear),l(3),h("ngModel",i.universityEducation.name),l(),h("ngModel",i.universityEducation.city),l(),h("ngModel",i.universityEducation.conclusionYear),l(5),h("ngModel",i.experienceTitle),l(),h("ngModel",i.experienceDescripton),l(2),d("ngIf",i.professionalExperiences))},dependencies:[X,G,H,J,O,Z,R,K,$,ge,ve,ee,ye,xe,k,x,ne],encapsulation:2})}return p})();var mt=p=>({"docs-sample-code-tabs":p}),Le=(()=>{class p{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||p)};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-active-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Stepper - Active"),n(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-stepper-active/sample-po-stepper-active.component.html"),n(),t(13,"pre",7),e(14,`<po-container>
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
`),n()()()()(),t(25,"div",10),r(26,"sample-po-stepper-active"),n(),r(27,"hr")),a&2&&(l(5),T("po-icon "+i.sampleCodeButtonIcon),l(),y(" ",i.sampleCodeButtonLabel,""),l(),d("ngClass",A(4,mt,i.hideSampleCodeTabs)))},dependencies:[W,w,P,_,We],encapsulation:2})}return p})();var ke=(()=>{class p{changeDetector;currentStep;stepsWithStatus=[{label:"Step 1",status:D.Done},{label:"Step 2",status:D.Active},{label:"Step 3",status:D.Default},{label:"Step 4",status:D.Disabled}];constructor(s){this.changeDetector=s}ngAfterViewInit(){this.currentStep=2,this.changeDetector.detectChanges()}onChangeStatus(s){this.currentStep=s,this.stepsWithStatus.forEach(a=>{a.status===D.Active&&(a.status=D.Done)}),this.stepsWithStatus.forEach((a,i)=>{i>this.currentStep&&a.status===D.Active&&(a.status=D.Default)}),this.currentStep<this.stepsWithStatus.length&&this.stepsWithStatus[this.currentStep].status===D.Disabled&&(this.stepsWithStatus[this.currentStep].status=D.Default)}static \u0275fac=function(a){return new(a||p)(M(z))};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-steps"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-change-step","p-align-center","p-sequential","p-step","p-steps"]],template:function(a,i){a&1&&(t(0,"po-stepper",0),b("p-change-step",function(c){return i.onChangeStatus(c)}),n()),a&2&&d("p-align-center",!1)("p-sequential",!1)("p-step",i.currentStep)("p-steps",i.stepsWithStatus)},dependencies:[x],encapsulation:2})}return p})();var ut=p=>({"docs-sample-code-tabs":p}),Be=(()=>{class p{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(a){return new(a||p)};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-steps-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Stepper - Steps"),n(),t(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-stepper-steps/sample-po-stepper-steps.component.html"),n(),t(13,"pre",7),e(14,`<po-stepper
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
`),n()()()()(),t(21,"div",10),r(22,"sample-po-stepper-steps"),n(),r(23,"hr")),a&2&&(l(5),T("po-icon "+i.sampleCodeButtonIcon),l(),y(" ",i.sampleCodeButtonLabel,""),l(),d("ngClass",A(4,ut,i.hideSampleCodeTabs)))},dependencies:[W,w,P,_,ke],encapsulation:2})}return p})();var Ne=(()=>{class p{static \u0275fac=function(a){return new(a||p)};static \u0275cmp=E({type:p,selectors:[["sample-po-stepper-doc"]],standalone:!1,decls:1001,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-step"],["href","/documentation/po-stepper#stepIconsProperty"],["id","utilizando-os-m\xE9todos-do-componente"],["href","https://angular.io/api/core/ViewChild"],["id","boas-pr\xE1ticas"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["href","https://phosphoricons.com/"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoStepperOrientation"],["href","documentation/po-stepper#stepperOrientation"],["pan","",1,"docs-api-property-type","number"],["id","stepIconsProperty"],["pan","",1,"docs-api-property-type","Array<PoStepperItem>"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoStepperStatus"],["id","stepperOrientation"],["id","stepperStatus"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoStepperModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-stepper"),n()(),t(7,"h3",3),e(8,"Componente"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoStepperComponent"),n()(),t(12,"div",2)(13,"p"),e(14,"O "),t(15,"code"),e(16,"po-stepper"),n(),e(17,` permite que um processo seja dividido em passos para que o usu\xE1rio o realize
mais facilmente.`),n(),t(18,"p"),e(19,"Existem duas formas de utiliza\xE7\xE3o:"),n(),t(20,"p"),e(21,"1 - Usando o componente "),t(22,"a",6)(23,"strong"),e(24,"po-step"),n()(),e(25," para renderizar e descrever os passos."),n(),t(26,"p"),e(27,"2 - Atrav\xE9s da propriedade "),t(28,"code"),e(29,"p-steps"),n(),e(30,` para descrever os passos do processo, sendo responsabilidade do desenvolvedor o controle
de renderiza\xE7\xE3o do que ser\xE1 exibido a cada `),t(31,"em"),e(32,"step"),n(),e(33," ativo."),n(),t(34,"p"),e(35,`Atrav\xE9s de suas propriedades, \xE9 poss\xEDvel definir se sua orienta\xE7\xE3o ser\xE1 horizontal ou vertical,
al\xE9m da possibilidade de aumentar o tamanho dos `),t(36,"em"),e(37,"steps"),n(),e(38,"."),n(),t(39,"p"),e(40,"Tamb\xE9m \xE9 poss\xEDvel navegar entre os "),t(41,"em"),e(42,"steps"),n(),e(43," atrav\xE9s do teclado utilizando a tecla "),t(44,"em"),e(45,"tab"),n(),e(46," e, para ativar o "),t(47,"em"),e(48,"step"),n(),e(49,` em foco basta
pressionar a tecla `),t(50,"em"),e(51,"enter"),n(),e(52,". Al\xE9m disso, \xE9 poss\xEDvel ativar a exibi\xE7\xE3o de \xEDcones no lugar de n\xFAmeros nos "),t(53,"em"),e(54,"steps"),n(),e(55,` atrav\xE9s da
propriedade `),t(56,"a",7)(57,"code"),e(58,"p-step-icons"),n()(),e(59,"."),n(),t(60,"h4",8),e(61,"Utilizando os m\xE9todos do componente:"),n(),t(62,"p"),e(63,"Para acessar os m\xE9todos do componente \xE9 necess\xE1rio ter a refer\xEAncia do mesmo."),n(),t(64,"p"),e(65,"Por exemplo, utilizando um "),t(66,"a",9)(67,"strong"),e(68,"ViewChild"),n()(),e(69,":"),n(),t(70,"pre")(71,"code"),e(72,"@ViewChild(PoStepperComponent) poStepperComponent: PoStepperComponent;"),n()(),t(73,"p"),e(74,"E para acessar o m\xE9todo:"),n(),t(75,"pre")(76,"code"),e(77,"poStepperComponent.next();"),n()(),t(78,"h4",10),e(79,"Boas pr\xE1ticas"),n(),t(80,"ul")(81,"li"),e(82,"Evite "),t(83,"code"),e(84,"labels"),n(),e(85," extensos que quebram o layout do "),t(86,"code"),e(87,"po-stepper"),n(),e(88,", use "),t(89,"code"),e(90,"labels"),n(),e(91," diretos, curtos e intuitivos."),n(),t(92,"li"),e(93,"Utilize apenas um "),t(94,"code"),e(95,"po-stepper"),n(),e(96," por p\xE1gina."),n()(),t(97,"h4",11),e(98,"Tokens customiz\xE1veis"),n(),t(99,"p"),e(100,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),n(),t(101,"blockquote")(102,"p"),e(103,"Para maiores informa\xE7\xF5es, acesse o guia "),t(104,"a",12),e(105,"Personalizando o Tema Padr\xE3o com Tokens CSS"),n(),e(106,"."),n()(),t(107,"table")(108,"thead")(109,"tr")(110,"th"),e(111,"Propriedade"),n(),t(112,"th"),e(113,"Descri\xE7\xE3o"),n(),t(114,"th"),e(115,"Valor Padr\xE3o"),n()()(),t(116,"tbody")(117,"tr")(118,"td")(119,"strong"),e(120,"Label"),n()(),r(121,"td")(122,"td"),n(),t(123,"tr")(124,"td")(125,"code"),e(126,"--font-family"),n()(),t(127,"td"),e(128,"Fam\xEDlia tipogr\xE1fica usada"),n(),t(129,"td")(130,"code"),e(131,"var(--font-family-theme)"),n()()(),t(132,"tr")(133,"td")(134,"code"),e(135,"--font-size"),n()(),t(136,"td"),e(137,"Tamanho da fonte"),n(),t(138,"td")(139,"code"),e(140,"var(--font-size-default)"),n()()(),t(141,"tr")(142,"td")(143,"code"),e(144,"--font-weight"),n()(),t(145,"td"),e(146,"Peso da fonte"),n(),t(147,"td")(148,"code"),e(149,"var(--font-weight-normal)"),n()()(),t(150,"tr")(151,"td")(152,"strong"),e(153,"Step - Done"),n()(),r(154,"td")(155,"td"),n(),t(156,"tr")(157,"td")(158,"code"),e(159,"--text-color"),n()(),t(160,"td"),e(161,"Cor do texto no step conclu\xEDdo"),n(),t(162,"td")(163,"code"),e(164,"var(--color-neutral-dark-70)"),n()()(),t(165,"tr")(166,"td")(167,"code"),e(168,"--color-icon-done"),n()(),t(169,"td"),e(170,"Cor do \xEDcone no step conclu\xEDdo"),n(),t(171,"td")(172,"code"),e(173,"var(--color-neutral-dark-70)"),n()()(),t(174,"tr")(175,"td")(176,"code"),e(177,"--background-done"),n()(),t(178,"td"),e(179,"Cor de fundo no step conclu\xEDdo"),n(),t(180,"td")(181,"code"),e(182,"var(--color-neutral-light-00)"),n()()(),t(183,"tr")(184,"td")(185,"strong"),e(186,"Line - Done"),n()(),r(187,"td")(188,"td"),n(),t(189,"tr")(190,"td")(191,"code"),e(192,"--color-line-done"),n()(),t(193,"td"),e(194,"Cor da linha no step conclu\xEDdo"),n(),t(195,"td")(196,"code"),e(197,"var(--color-neutral-mid-40)"),n()()(),t(198,"tr")(199,"td")(200,"strong"),e(201,"Step - Current"),n()(),r(202,"td")(203,"td"),n(),t(204,"tr")(205,"td")(206,"code"),e(207,"--color-icon-current"),n()(),t(208,"td"),e(209,"Cor do \xEDcone no step atual"),n(),t(210,"td")(211,"code"),e(212,"var(--color-neutral-light-00)"),n()()(),t(213,"tr")(214,"td")(215,"code"),e(216,"--background-current"),n()(),t(217,"td"),e(218,"Cor de fundo no step atual"),n(),t(219,"td")(220,"code"),e(221,"var(--color-action-default)"),n()()(),t(222,"tr")(223,"td")(224,"code"),e(225,"--font-weight-current"),n()(),t(226,"td"),e(227,"Peso da fonte no step atual"),n(),t(228,"td")(229,"code"),e(230,"var(--font-weight-bold)"),n()()(),t(231,"tr")(232,"td")(233,"strong"),e(234,"Step - Next"),n()(),r(235,"td")(236,"td"),n(),t(237,"tr")(238,"td")(239,"code"),e(240,"--font-size-circle"),n()(),t(241,"td"),e(242,"Tamanho da fonte no c\xEDrculo do pr\xF3ximo step"),n(),t(243,"td")(244,"code"),e(245,"var(--font-size-sm)"),n()()(),t(246,"tr")(247,"td")(248,"code"),e(249,"--color-next"),n()(),t(250,"td"),e(251,"Cor do \xEDcone no pr\xF3ximo step"),n(),t(252,"td")(253,"code"),e(254,"var(--color-action-disabled)"),n()()(),t(255,"tr")(256,"td")(257,"code"),e(258,"--text-color-next"),n()(),t(259,"td"),e(260,"Cor do texto no pr\xF3ximo step"),n(),t(261,"td")(262,"code"),e(263,"var(--color-neutral-light-30)"),n()()(),t(264,"tr")(265,"td")(266,"strong"),e(267,"Focused"),n()(),r(268,"td")(269,"td"),n(),t(270,"tr")(271,"td")(272,"code"),e(273,"--outline-color-focused"),n()(),t(274,"td"),e(275,"Cor do outline do estado de focus"),n(),t(276,"td")(277,"code"),e(278,"var(--color-action-focus)"),n()()()()()(),t(279,"div",13)(280,"h4",14),e(281,"Seletor"),n(),t(282,"pre",15),e(283,`<po-stepper
    p-align-center="boolean"
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
`),n()(),t(284,"h4",16),e(285,"Propriedades"),n(),t(286,"table",17)(287,"tr",18)(288,"th",19),e(289,"Nome"),n(),t(290,"th",19),e(291,"Tipo"),n(),t(292,"th",19),e(293,"Padr\xE3o"),n(),t(294,"th",19),e(295,"Descri\xE7\xE3o"),n()(),t(296,"tr",20)(297,"td",21)(298,"div",22)(299,"span",23),e(300," p-align-center"),r(301,"br"),n()()(),t(302,"td",24)(303,"code",25),e(304,"boolean"),n()(),t(305,"td",26)(306,"p")(307,"code"),e(308,"true"),n()()(),t(309,"td",27)(310,"em")(311,"strong"),e(312,"(opcional)"),n()(),t(313,"p"),e(314,"Define o alinhamento dos "),t(315,"em"),e(316,"steps"),n(),e(317," e "),t(318,"em"),e(319,"labels"),n(),e(320," no "),t(321,"em"),e(322,"stepper"),n(),e(323,", dependendo da orienta\xE7\xE3o."),n(),t(324,"ul")(325,"li"),e(326,"Quando "),t(327,"code"),e(328,"true"),n(),e(329,", ficam centralizados em ambas as orienta\xE7\xF5es (horizontal e vertical)."),n(),t(330,"li"),e(331,"Quando "),t(332,"code"),e(333,"false"),n(),e(334,", ficam alinhados \xE0 esquerda na orienta\xE7\xE3o horizontal e ao topo na orienta\xE7\xE3o vertical."),n()()()(),t(335,"tr",20)(336,"td",21)(337,"div",22)(338,"span",23),e(339," p-step-icon-active"),r(340,"br"),n()()(),t(341,"td",24)(342,"code",28),e(343,"string "),n(),t(344,"code",29),e(345," TemplateRef<void>"),n()(),t(346,"td",26)(347,"p")(348,"code"),e(349,"po-icon-edit"),n()()(),t(350,"td",27)(351,"em")(352,"strong"),e(353,"(opcional)"),n()(),t(354,"p"),e(355,`Permite definir o \xEDcone do step no status ativo.
Esta propriedade permite usar \xEDcones da `),t(356,"a",30),e(357,"Biblioteca de \xEDcones"),n(),e(358," ou da biblioteca "),t(359,"a",31),e(360,"Phosphor"),n(),e(361,"."),n(),t(362,"p"),e(363,"Exemplo usando a biblioteca de \xEDcones padr\xE3o:"),n(),t(364,"pre")(365,"code"),e(366,`<po-stepper p-step-icon-active="po-icon po-icon-settings">
   ...
</po-stepper>`),n()(),t(367,"p"),e(368,"Exemplo usando a biblioteca "),t(369,"em"),e(370,"Phosphor"),n(),e(371,":"),n(),t(372,"pre")(373,"code"),e(374,`<po-stepper p-step-icon-active="ph ph-pencil-simple-line">
   ...
</po-stepper>`),n()(),t(375,"p"),e(376,"Para customizar o \xEDcone atrav\xE9s do "),t(377,"code"),e(378,"TemplateRef"),n(),e(379,", veja a documenta\xE7\xE3o da propriedade "),t(380,"code"),e(381,"p-step-icon-done"),n(),e(382,"."),n(),t(383,"blockquote")(384,"p"),e(385,"Deve-se usar "),t(386,"code"),e(387,"font-size: inherit"),n(),e(388," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),n()()()(),t(389,"tr",20)(390,"td",21)(391,"div",22)(392,"span",23),e(393," p-step-icon-done"),r(394,"br"),n()()(),t(395,"td",24)(396,"code",28),e(397,"string "),n(),t(398,"code",29),e(399," TemplateRef<void>"),n()(),t(400,"td",26)(401,"p")(402,"code"),e(403,"po-icon-ok"),n()()(),t(404,"td",27)(405,"em")(406,"strong"),e(407,"(opcional)"),n()(),t(408,"p"),e(409,`Permite definir o \xEDcone do step no status conclu\xEDdo.
Esta propriedade permite usar \xEDcones da `),t(410,"a",30),e(411,"Biblioteca de \xEDcones"),n(),e(412," ou da biblioteca "),t(413,"a",31),e(414,"Phosphor"),n(),e(415,"."),n(),t(416,"p"),e(417,"Exemplo usando a biblioteca de \xEDcones padr\xE3o:"),n(),t(418,"pre")(419,"code"),e(420,`<po-stepper p-step-icon-done="po-icon po-icon-eye">
   ...
</po-stepper>`),n()(),t(421,"p"),e(422,"Exemplo usando a biblioteca "),t(423,"em"),e(424,"Phosphor"),n(),e(425,":"),n(),t(426,"pre")(427,"code"),e(428,`<po-stepper p-step-icon-done="ph ph-check-circle">
   ...
</po-stepper>`),n()(),t(429,"p"),e(430,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(431,"code"),e(432,"TemplateRef"),n(),e(433,", conforme exemplo abaixo:"),n(),t(434,"pre")(435,"code"),e(436,`<po-stepper [p-step-icon-done]="doneIcon">
   ...
</po-stepper>

<ng-template #doneIcon>
   <i class="ph ph-check-fat"></i>
</ng-template>`),n()(),t(437,"blockquote")(438,"p"),e(439,"Deve-se usar "),t(440,"code"),e(441,"font-size: inherit"),n(),e(442," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),n()()()(),t(443,"tr",20)(444,"td",21)(445,"div",32)(446,"span",33),e(447," (p-change-step)"),r(448,"br"),n()()(),t(449,"td",24)(450,"code",34),e(451,"EventEmitter"),n()(),t(452,"td",26),e(453,"-"),n(),t(454,"td",27)(455,"p"),e(456,"A\xE7\xE3o que ser\xE1 executada quando o usu\xE1rio mudar o passo do "),t(457,"code"),e(458,"po-stepper"),n(),e(459,"."),n()()(),t(460,"tr",20)(461,"td",21)(462,"div",22)(463,"span",23),e(464," p-orientation"),r(465,"br"),n()()(),t(466,"td",24)(467,"code",35),e(468,"PoStepperOrientation"),n()(),t(469,"td",26)(470,"p")(471,"code"),e(472,"PoStepperOrientation.Horizontal"),n()()(),t(473,"td",27)(474,"em")(475,"strong"),e(476,"(opcional)"),n()(),t(477,"p"),e(478,"Define a orienta\xE7\xE3o de exibi\xE7\xE3o do "),t(479,"code"),e(480,"po-stepper"),n(),e(481,"."),n(),t(482,"blockquote")(483,"p"),e(484,"Veja os valores v\xE1lidos no "),t(485,"em"),e(486,"enum"),n(),t(487,"a",36),e(488,"PoStepperOrientation"),n(),e(489,"."),n()()()(),t(490,"tr",20)(491,"td",21)(492,"div",22)(493,"span",23),e(494," p-sequential"),r(495,"br"),n()()(),t(496,"td",24)(497,"code",25),e(498,"boolean"),n()(),t(499,"td",26)(500,"p")(501,"code"),e(502,"true"),n()()(),t(503,"td",27)(504,"em")(505,"strong"),e(506,"(opcional)"),n()(),t(507,"p"),e(508,"Define se o "),t(509,"code"),e(510,"po-stepper"),n(),e(511," ser\xE1 sequencial ou aleat\xF3rio."),n(),t(512,"blockquote")(513,"p"),e(514,"Ao utilizar o componente "),t(515,"a",6)(516,"strong"),e(517,"po-step"),n()(),e(518,", o valor desta propriedade sempre ser\xE1 verdadeiro."),n()()()(),t(519,"tr",20)(520,"td",21)(521,"div",22)(522,"span",23),e(523," p-step"),r(524,"br"),n()()(),t(525,"td",24)(526,"code",37),e(527,"number"),n()(),t(528,"td",26)(529,"p")(530,"code"),e(531,"1"),n()()(),t(532,"td",27)(533,"em")(534,"strong"),e(535,"(opcional)"),n()(),t(536,"p"),e(537,"Controla o passo atual do "),t(538,"code"),e(539,"po-stepper"),n(),e(540,"."),n(),t(541,"blockquote")(542,"p"),e(543,"Ao utilizar esta propriedade e tamb\xE9m utilizar o componente "),t(544,"a",6)(545,"strong"),e(546,"po-step"),n()(),e(547,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),t(548,"a",6)(549,"strong"),e(550,"po-step"),n()(),e(551,"."),n()()()(),t(552,"tr",20)(553,"td",21)(554,"div",22)(555,"span",23),e(556," p-step-icons"),r(557,"br"),n()()(),t(558,"td",24)(559,"code",25),e(560,"boolean"),n()(),t(561,"td",26)(562,"p")(563,"code"),e(564,"false"),n()()(),t(565,"td",27)(566,"em")(567,"strong"),e(568,"(opcional)"),n()(),t(569,"p"),r(570,"a",38),n(),t(571,"p"),e(572,"Habilita a exibi\xE7\xE3o de \xEDcone ao inv\xE9s de n\xFAmero no centro do c\xEDrculo dos "),t(573,"em"),e(574,"steps"),n(),e(575,"."),n()()(),t(576,"tr",20)(577,"td",21)(578,"div",22)(579,"span",23),e(580," p-step-size"),r(581,"br"),n()()(),t(582,"td",24)(583,"code",37),e(584,"number"),n()(),t(585,"td",26)(586,"p")(587,"code"),e(588,"24"),n()()(),t(589,"td",27)(590,"em")(591,"strong"),e(592,"(opcional)"),n()(),t(593,"p"),e(594,"Define o tamanho dos "),t(595,"em"),e(596,"steps"),n(),e(597," em "),t(598,"em"),e(599,"pixels"),n(),e(600,", possibilitando um maior destaque."),n(),t(601,"p"),e(602,"O valor informado deve ser entre "),t(603,"code"),e(604,"24"),n(),e(605," e "),t(606,"code"),e(607,"64"),n(),e(608,"."),n(),t(609,"blockquote")(610,"p"),e(611,"Valores que n\xE3o se enquadrarem a esta regra ser\xE3o ignorados, mantendo-se o valor "),t(612,"em"),e(613,"default"),n(),e(614,"."),n()()()(),t(615,"tr",20)(616,"td",21)(617,"div",22)(618,"span",23),e(619," p-steps"),r(620,"br"),n()()(),t(621,"td",24)(622,"code",39),e(623,"Array<PoStepperItem>"),n()(),t(624,"td",26),e(625,"-"),n(),t(626,"td",27)(627,"em")(628,"strong"),e(629,"(opcional)"),n()(),t(630,"p"),e(631,"Lista dos itens do stepper. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),n(),t(632,"blockquote")(633,"p"),e(634,"Ao utilizar esta propriedade e tamb\xE9m utilizar o componente "),t(635,"a",6)(636,"strong"),e(637,"po-step"),n()(),e(638,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),t(639,"a",6)(640,"strong"),e(641,"po-step"),n()(),e(642,"."),n()()()()(),t(643,"h3",16),e(644,"M\xE9todos"),n(),t(645,"table",40)(646,"tr",20)(647,"th",41)(648,"div",22)(649,"h4")(650,"span",23),e(651," active "),n()()()()(),t(652,"tr",27)(653,"td",27)(654,"p"),e(655,"Altera o status do "),t(656,"em"),e(657,"step"),n(),e(658," para ativo."),n(),t(659,"blockquote")(660,"p"),e(661,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),t(662,"a",6)(663,"strong"),e(664,"po-step"),n()(),e(665,"."),n()()()()(),t(666,"h5")(667,"b"),e(668,"Par\xE2metros"),n()(),t(669,"table",17)(670,"tr",18)(671,"th",19),e(672,"Nome"),n(),t(673,"th",19),e(674,"Tipo"),n(),t(675,"th",19),e(676,"Descri\xE7\xE3o"),n()(),t(677,"tr",20)(678,"td",21),e(679," index"),n(),t(680,"td",24)(681,"code",42),e(682," number "),n()(),t(683,"td",27)(684,"p"),e(685,"\xCDndice do "),t(686,"code"),e(687,"po-step"),n(),e(688," que se deseja ativar."),n()()()(),r(689,"br"),t(690,"table",40)(691,"tr",20)(692,"th",41)(693,"div",22)(694,"h4")(695,"span",23),e(696," first "),n()()()()(),t(697,"tr",27)(698,"td",27)(699,"p"),e(700,"Ativa o primeiro "),t(701,"em"),e(702,"step"),n(),e(703,"."),n(),t(704,"blockquote")(705,"p"),e(706,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),t(707,"a",6)(708,"strong"),e(709,"po-step"),n()(),e(710,"."),n()()()()(),r(711,"br"),t(712,"table",40)(713,"tr",20)(714,"th",41)(715,"div",22)(716,"h4")(717,"span",23),e(718," next "),n()()()()(),t(719,"tr",27)(720,"td",27)(721,"p"),e(722,"Ativa o pr\xF3ximo "),t(723,"em"),e(724,"step"),n(),e(725,"."),n(),t(726,"blockquote")(727,"p"),e(728,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),t(729,"a",6)(730,"strong"),e(731,"po-step"),n()(),e(732,"."),n()()()()(),r(733,"br"),t(734,"table",40)(735,"tr",20)(736,"th",41)(737,"div",22)(738,"h4")(739,"span",23),e(740," previous "),n()()()()(),t(741,"tr",27)(742,"td",27)(743,"p"),e(744,"Ativa o "),t(745,"em"),e(746,"step"),n(),e(747," anterior."),n(),t(748,"blockquote")(749,"p"),e(750,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),t(751,"a",6)(752,"strong"),e(753,"po-step"),n()(),e(754,"."),n()()()()(),r(755,"br"),t(756,"h3"),e(757,"Interfaces"),n(),t(758,"h4",43)(759,"code",5),e(760,"PoStepperItem"),n()(),t(761,"div",2)(762,"p"),e(763,"Interface para defini\xE7\xE3o dos "),t(764,"em"),e(765,"steps"),n(),e(766," do componente "),t(767,"code"),e(768,"po-stepper"),n(),e(769," quando utilizada a propriedade "),t(770,"code"),e(771,"p-steps"),n(),e(772,"."),n()(),t(773,"h4",16),e(774,"Propriedades"),n(),t(775,"table",17)(776,"tr",18)(777,"th",19),e(778,"Nome"),n(),t(779,"th",19),e(780,"Tipo"),n(),t(781,"th",19),e(782,"Descri\xE7\xE3o"),n()(),t(783,"tr",20)(784,"td",21)(785,"div",22)(786,"span",23),e(787," iconActive"),r(788,"br"),n()()(),t(789,"td",24)(790,"code",28),e(791,"string "),n(),t(792,"code",29),e(793," TemplateRef<void>"),n()(),t(794,"td",27)(795,"em")(796,"strong"),e(797,"(opcional)"),n()(),t(798,"p"),e(799,"Define o \xEDcone do "),t(800,"em"),e(801,"step"),n(),e(802," ativo."),n()()(),t(803,"tr",20)(804,"td",21)(805,"div",22)(806,"span",23),e(807," iconDefault"),r(808,"br"),n()()(),t(809,"td",24)(810,"code",28),e(811,"string "),n(),t(812,"code",29),e(813," TemplateRef<void>"),n()(),t(814,"td",27)(815,"em")(816,"strong"),e(817,"(opcional)"),n()(),t(818,"p"),e(819,"Define o \xEDcone do "),t(820,"em"),e(821,"step"),n(),e(822," default."),n()()(),t(823,"tr",20)(824,"td",21)(825,"div",22)(826,"span",23),e(827," iconDone"),r(828,"br"),n()()(),t(829,"td",24)(830,"code",28),e(831,"string "),n(),t(832,"code",29),e(833," TemplateRef<void>"),n()(),t(834,"td",27)(835,"em")(836,"strong"),e(837,"(opcional)"),n()(),t(838,"p"),e(839,"Define o \xEDcone do "),t(840,"em"),e(841,"step"),n(),e(842," conclu\xEDdo."),n()()(),t(843,"tr",20)(844,"td",21)(845,"div",22)(846,"span",23),e(847," label"),r(848,"br"),n()()(),t(849,"td",24)(850,"code",28),e(851,"string"),n()(),t(852,"td",27)(853,"em")(854,"strong"),e(855,"(opcional)"),n()(),t(856,"p"),e(857,"Texto do item do stepper."),n()()(),t(858,"tr",20)(859,"td",21)(860,"div",22)(861,"span",23),e(862," status"),r(863,"br"),n()()(),t(864,"td",24)(865,"code",44),e(866,"PoStepperStatus"),n()(),t(867,"td",27)(868,"em")(869,"strong"),e(870,"(opcional)"),n()(),t(871,"p"),e(872,"Define o estado de exibi\xE7\xE3o do "),t(873,"em"),e(874,"step"),n(),e(875,"."),n()()()(),t(876,"h3"),e(877,"Enums"),n(),t(878,"h4",4)(879,"code",5),e(880,"PoStepperOrientation"),n()(),t(881,"div",2)(882,"p"),r(883,"a",45),n(),t(884,"p")(885,"em"),e(886,"Enums"),n(),e(887," para defini\xE7\xE3o da orienta\xE7\xE3o do "),t(888,"code"),e(889,"po-stepper"),n(),e(890,"."),n()(),t(891,"h4",16),e(892,"Propriedades"),n(),t(893,"table",17)(894,"tr",18)(895,"th",19),e(896,"Nome"),n(),t(897,"th",19),e(898,"Descri\xE7\xE3o"),n()(),t(899,"tr",20)(900,"td",21)(901,"div",22)(902,"span",23),e(903," Horizontal"),r(904,"br"),n()()(),t(905,"td",27)(906,"p"),e(907,"Define a exibi\xE7\xE3o do componente na horizontal."),n()()(),t(908,"tr",20)(909,"td",21)(910,"div",22)(911,"span",23),e(912," Vertical"),r(913,"br"),n()()(),t(914,"td",27)(915,"p"),e(916,"Define a exibi\xE7\xE3o do componente na vertical."),n()()()(),t(917,"h4",4)(918,"code",5),e(919,"PoStepperStatus"),n()(),t(920,"div",2)(921,"p"),r(922,"a",46),n(),t(923,"p")(924,"em"),e(925,"Enums"),n(),e(926," para os status do "),t(927,"code"),e(928,"po-stepper"),n(),e(929," quando utilizada a propriedade "),t(930,"code"),e(931,"p-steps"),n(),e(932,"."),n()(),t(933,"h4",16),e(934,"Propriedades"),n(),t(935,"table",17)(936,"tr",18)(937,"th",19),e(938,"Nome"),n(),t(939,"th",19),e(940,"Descri\xE7\xE3o"),n()(),t(941,"tr",20)(942,"td",21)(943,"div",22)(944,"span",23),e(945," Active"),r(946,"br"),n()()(),t(947,"td",27)(948,"p"),e(949,"Define o estado do "),t(950,"em"),e(951,"step"),n(),e(952," como ativo."),n()()(),t(953,"tr",20)(954,"td",21)(955,"div",22)(956,"span",23),e(957," Default"),r(958,"br"),n()()(),t(959,"td",27)(960,"p"),e(961,"Define o estado do "),t(962,"em"),e(963,"step"),n(),e(964," como padr\xE3o."),n()()(),t(965,"tr",20)(966,"td",21)(967,"div",22)(968,"span",23),e(969," Disabled"),r(970,"br"),n()()(),t(971,"td",27)(972,"p"),e(973,"Define o estado do "),t(974,"em"),e(975,"step"),n(),e(976," como desabilitado."),n()()(),t(977,"tr",20)(978,"td",21)(979,"div",22)(980,"span",23),e(981," Done"),r(982,"br"),n()()(),t(983,"td",27)(984,"p"),e(985,"Define o estado do "),t(986,"em"),e(987,"step"),n(),e(988," como conclu\xEDdo."),n()()(),t(989,"tr",20)(990,"td",21)(991,"div",22)(992,"span",23),e(993," Error"),r(994,"br"),n()()(),t(995,"td",27)(996,"p"),e(997,"Define o estado do "),t(998,"em"),e(999,"step"),n(),e(1e3," com erro."),n()()()()())},dependencies:[w],encapsulation:2})}return p})();var qe=(()=>{class p{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||p)(M(Se),M(he))};static \u0275cmp=E({type:p,selectors:[["ng-component"]],standalone:!1,decls:10,vars:4,consts:[["p-title"," Stepper",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,i){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),r(3,"sample-po-stepper-doc"),n(),t(4,"po-tab",3),r(5,"sample-po-stepper-basic-view")(6,"sample-po-stepper-labs-view")(7,"sample-po-stepper-sales-view")(8,"sample-po-stepper-active-view")(9,"sample-po-stepper-steps-view"),n()()()),a&2&&(d("p-actions",i.actions),l(2),d("p-active",i.activeTab.includes("doc")),l(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[Pe,P,_,De,Fe,Ve,Le,Be,Ne],encapsulation:2})}return p})();var gt=[{path:"",component:qe}],ze=(()=>{class p{static \u0275fac=function(a){return new(a||p)};static \u0275mod=Y({type:p});static \u0275inj=U({imports:[ie.forChild(gt),ie]})}return p})();var en=(()=>{class p{static \u0275fac=function(a){return new(a||p)};static \u0275mod=Y({type:p});static \u0275inj=U({imports:[_e,ze]})}return p})();export{en as DocPoStepperModule};
