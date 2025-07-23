import{$ as G,$a as T,$c as ce,A as Z,Bc as me,Cd as I,F as u,Fa as D,Fc as de,G as S,Ga as n,Ha as J,Ia as x,Ka as g,La as h,Lb as V,Ma as b,Mb as N,Na as te,Nb as q,Oa as U,Ob as k,Od as ue,Pa as w,Pb as W,Qa as ne,T as r,U as L,Wb as ae,Xd as C,Yb as le,Yd as y,Za as ie,Zb as Y,_ as f,_b as pe,ea as $,gc as se,ha as c,ka as _,md as z,na as t,oa as e,oc as R,pa as p,pb as oe,re as P,se as Se,ta as F,ua as E,x as X,y as B,yd as M,za as ee,zc as re}from"./chunk-QVEZB6GT.js";var Te=()=>({label:"Option 1",value:"1"}),Me=()=>({label:"Option 2",value:"2"}),Oe=(o,H)=>[o,H],ge=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-select-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","select","p-label","PO Select",3,"p-options"]],template:function(l,i){l&1&&p(0,"po-select",0),l&2&&c("p-options",ne(3,Oe,U(1,Te),U(2,Me)))},dependencies:[M],encapsulation:2})}return o})();var Ve=o=>({"docs-sample-code-tabs":o}),he=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-select-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Select Basic"),e(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),p(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-select-basic/sample-po-select-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-select
  name="select"
  p-label="PO Select"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-select>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-select-basic/sample-po-select-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-select-basic',
  templateUrl: './sample-po-select-basic.component.html',
  standalone: false
})
export class SamplePoSelectBasicComponent {}
`),e()()()()(),t(21,"div",10),p(22,"sample-po-select-basic"),e(),p(23,"hr")),l&2&&(r(5),_("po-icon "+i.sampleCodeButtonIcon),r(),x(" ",i.sampleCodeButtonLabel,""),r(),c("ngClass",w(4,Ve,i.hideSampleCodeTabs)))},dependencies:[T,P,C,y,ge],encapsulation:2})}return o})();var Ee=(()=>{class o{cdr;event;help;label;option;options;optionsGroup;optionsGroupList=[];placeholder;properties;fieldErrorMessage;select;selectedOptionsGroup;selectOptionGroupSwitch;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"readonly",label:"Read Only"},{value:"errorLimit",label:"Limit Error Message"}];constructor(s){this.cdr=s}ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0},this.cdr.detectChanges()}changeEvent(s){this.event=s}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.event="",this.help=void 0,this.label=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.select="",this.selectOptionGroupSwitch=!1,this.selectedOptionsGroup=void 0}restoreSwitch(s){s||(this.selectedOptionsGroup=void 0,this.optionsGroup=void 0)}insertGroupIntoSelectInput(s){this.selectedOptionsGroup=s,this.optionsGroupList=[...this.optionsGroupList,{label:s,value:s}]}verifyOptionObject(s,l,i){let{label:d,value:m}=l;if(i){let a=s.findIndex(Q=>Q.label===i&&"options"in Q);return a===-1?(this.insertGroupIntoSelectInput(i),[...s,{label:i,options:[{label:d,value:m}]}]):(s[a].options.push({label:d,value:m}),s)}return[...s,{label:d,value:m}]}static \u0275fac=function(l){return new(l||o)(L(ie))};static \u0275cmp=f({type:o,selectors:[["sample-po-select-labs"]],standalone:!1,decls:34,vars:29,consts:[["fOption","ngForm"],["f","ngForm"],["name","select",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","ngModel","p-disabled","p-help","p-label","p-options","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po select options group"],["name","selectOptionGroupSwitch","p-label","Select options group",1,"po-md-2",3,"p-change","ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-md-5",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-md-5",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po select options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-md-3"],["p-label","Sample Restore",3,"p-click"]],template:function(l,i){if(l&1){let d=F();t(0,"po-select",2),b("ngModelChange",function(a){return u(d),h(i.select,a)||(i.select=a),S(a)}),E("p-blur",function(){return u(d),S(i.changeEvent("p-blur"))})("p-change",function(){return u(d),S(i.changeEvent("p-change"))})("p-change-model",function(){return u(d),S(i.changeEvent("p-change-model"))})("p-enter",function(){return u(d),S(i.changeEvent("p-enter"))}),e(),p(1,"hr"),t(2,"div",3),p(3,"po-info",4)(4,"po-info",5),e(),p(5,"hr"),t(6,"form",null,0),p(8,"po-divider",6),t(9,"div",3)(10,"po-switch",7),E("p-change",function(a){return u(d),S(i.restoreSwitch(a))}),b("ngModelChange",function(a){return u(d),h(i.selectOptionGroupSwitch,a)||(i.selectOptionGroupSwitch=a),S(a)}),e(),t(11,"po-select",8),b("ngModelChange",function(a){return u(d),h(i.selectedOptionsGroup,a)||(i.selectedOptionsGroup=a),S(a)}),E("p-change",function(){return u(d),S(i.optionsGroupSelection())}),e(),t(12,"po-input",9),b("ngModelChange",function(a){return u(d),h(i.optionsGroup,a)||(i.optionsGroup=a),S(a)}),e()(),p(13,"po-divider",10),t(14,"div",3)(15,"po-input",11),b("ngModelChange",function(a){return u(d),h(i.option.label,a)||(i.option.label=a),S(a)}),e(),t(16,"po-input",12),b("ngModelChange",function(a){return u(d),h(i.option.value,a)||(i.option.value=a),S(a)}),e()(),t(17,"div",3)(18,"po-button",13),E("p-click",function(){return u(d),S(i.addOption())}),e()()(),p(19,"hr"),t(20,"form",null,1)(22,"div",3)(23,"po-input",14),b("ngModelChange",function(a){return u(d),h(i.label,a)||(i.label=a),S(a)}),e(),t(24,"po-input",15),b("ngModelChange",function(a){return u(d),h(i.help,a)||(i.help=a),S(a)}),e()(),t(25,"div",3)(26,"po-input",16),b("ngModelChange",function(a){return u(d),h(i.placeholder,a)||(i.placeholder=a),S(a)}),e(),t(27,"po-input",17),b("ngModelChange",function(a){return u(d),h(i.fieldErrorMessage,a)||(i.fieldErrorMessage=a),S(a)}),e()(),t(28,"div",3)(29,"po-checkbox-group",18),b("ngModelChange",function(a){return u(d),h(i.properties,a)||(i.properties=a),S(a)}),e()(),t(30,"div",3)(31,"div",19)(32,"po-button",20),E("p-click",function(){return u(d),S(i.restore())}),e()()(),p(33,"form"),e()}if(l&2){let d=D(7);g("ngModel",i.select),c("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-options",i.options)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),r(3),c("p-value",i.select),r(),c("p-value",i.event),r(6),g("ngModel",i.selectOptionGroupSwitch),r(),g("ngModel",i.selectedOptionsGroup),c("p-disabled",!i.selectOptionGroupSwitch)("p-options",i.optionsGroupList),r(),g("ngModel",i.optionsGroup),c("p-disabled",!i.selectOptionGroupSwitch),r(3),g("ngModel",i.option.label),r(),g("ngModel",i.option.value),r(2),c("p-disabled",d.invalid),r(5),g("ngModel",i.label),r(),g("ngModel",i.help),r(2),g("ngModel",i.placeholder),r(),g("ngModel",i.fieldErrorMessage),r(2),g("ngModel",i.properties),c("p-options",i.propertiesOptions)}},dependencies:[W,V,N,k,q,R,pe,re,z,M,ce,I],encapsulation:2})}return o})();var De=o=>({"docs-sample-code-tabs":o}),fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-select-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Select Labs"),e(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),p(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-select-labs/sample-po-select-labs.component.html"),e(),t(13,"pre",7),n(14,`<po-select
  class="po-md-12"
  name="select"
  [(ngModel)]="select"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-options]="options"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-select>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="select"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #fOption="ngForm">
  <po-divider p-label="Po select options group"></po-divider>

  <div class="po-row">
    <po-switch
      class="po-md-2"
      name="selectOptionGroupSwitch"
      (p-change)="restoreSwitch($event)"
      [(ngModel)]="selectOptionGroupSwitch"
      p-label="Select options group"
    >
    </po-switch>

    <po-select
      class="po-md-5"
      name="selectedsOptionsGroup"
      [(ngModel)]="selectedOptionsGroup"
      p-label="Options group list"
      [p-disabled]="!selectOptionGroupSwitch"
      [p-options]="optionsGroupList"
      (p-change)="optionsGroupSelection()"
    >
    </po-select>

    <po-input
      class="po-md-5"
      name="optionsGroup"
      [(ngModel)]="optionsGroup"
      p-label="New Options Group"
      [p-disabled]="!selectOptionGroupSwitch"
      p-required
    >
    </po-input>
  </div>

  <po-divider p-label="Po select options"></po-divider>
  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-6 po-lg-3" p-label="Add Option" [p-disabled]="fOption.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

    <po-input class="po-md-6" name="help" [(ngModel)]="help" p-label="Help"> </po-input>
  </div>
  <div class="po-row">
    <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-label="Placeholder"> </po-input>

    <po-input
      class="po-md-6"
      name="fieldErrorMessage"
      [(ngModel)]="fieldErrorMessage"
      p-clean
      p-label="Field Error Message"
    >
    </po-input>
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
    <div class="po-md-3">
      <po-button p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </div>
  <form></form>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-select-labs/sample-po-select-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoSelectOption, PoSelectOptionGroup } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-select-labs',
  templateUrl: './sample-po-select-labs.component.html',
  standalone: false
})
export class SamplePoSelectLabsComponent implements OnInit {
  event: string;
  help: string;
  label: string;
  option: PoSelectOption;
  options: Array<PoSelectOption | PoSelectOptionGroup>;
  optionsGroup: string;
  optionsGroupList: Array<PoSelectOption> = [];
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  select: string;
  selectedOptionsGroup: string;
  selectOptionGroupSwitch: boolean;

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'errorLimit', label: 'Limit Error Message' }
  ];

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = this.verifyOptionObject(this.options.concat(), this.option, this.optionsGroup);
    this.option = { label: undefined, value: undefined };
    this.cdr.detectChanges();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  optionsGroupSelection() {
    this.optionsGroup = this.selectedOptionsGroup;
  }

  restore() {
    this.event = '';
    this.help = undefined;
    this.label = undefined;
    this.option = { label: undefined, value: undefined };
    this.options = [];
    this.optionsGroup = undefined;
    this.optionsGroupList = [];
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.select = '';
    this.selectOptionGroupSwitch = false;
    this.selectedOptionsGroup = undefined;
  }

  restoreSwitch(event: boolean) {
    if (!event) {
      this.selectedOptionsGroup = undefined;
      this.optionsGroup = undefined;
    }
  }

  private insertGroupIntoSelectInput(value: string) {
    this.selectedOptionsGroup = value;
    this.optionsGroupList = [...this.optionsGroupList, { label: value, value }];
  }

  private verifyOptionObject(
    options: Array<PoSelectOption | PoSelectOptionGroup>,
    option: PoSelectOption,
    optionsGroup?: string
  ) {
    const { label, value } = option;

    if (optionsGroup) {
      const indexItem = options.findIndex(
        (optionItem: PoSelectOptionGroup) => optionItem.label === optionsGroup && 'options' in optionItem
      );

      if (indexItem === -1) {
        this.insertGroupIntoSelectInput(optionsGroup);
        return [...options, { label: optionsGroup, options: [{ label, value }] }];
      }

      (options as Array<PoSelectOptionGroup>)[indexItem].options.push({ label, value });
      return options;
    }

    return [...options, { label, value }];
  }
}
`),e()()()()(),t(21,"div",10),p(22,"sample-po-select-labs"),e(),p(23,"hr")),l&2&&(r(5),_("po-icon "+i.sampleCodeButtonIcon),r(),x(" ",i.sampleCodeButtonLabel,""),r(),c("ngClass",w(4,De,i.hideSampleCodeTabs)))},dependencies:[T,P,C,y,Ee],encapsulation:2})}return o})();var j=(()=>{class o{http;url="https://po-sample-api.onrender.com/v1/sampleSelect";constructor(s){this.http=s}getCitiesByState(s){return this.http.get(`${this.url}/getCities/${s}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(l){return new(l||o)(Z(oe))};static \u0275prov=X({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function Fe(o,H){if(o&1&&(t(0,"div",17),p(1,"po-avatar",18),t(2,"div",19)(3,"div",20),n(4),e(),t(5,"div",21),n(6),e()()()),o&2){let s=H.$implicit;r(),ee("p-src","https://po-sample-api.onrender.com/v1/sampleSelect/",s.value,".png"),r(3),J(s.label),r(2),J(s.value)}}var ve=(()=>{class o{sampleService;address;city;cityOptions;document;documentLabel;documentType;mask;minLength;name;nameLabel;state;stateOptions;options=[{label:"CPF",value:"CPF"},{label:"CNPJ",value:"CNPJ"}];citiesSubscription;statesSubscription;constructor(s){this.sampleService=s}ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}ngOnInit(){this.initialize(),this.getStates(),this.changeType(this.documentType)}changeType(s){s==="CPF"?(this.documentLabel="CPF Number",this.mask="999.999.999-99",this.minLength=14,this.nameLabel="Client Name"):(this.documentLabel="CNPJ Number",this.mask="99.999.999/9999-99",this.minLength=18,this.nameLabel="Company Name"),this.address="",this.document="",this.name=""}initialize(){this.cityOptions=[],this.stateOptions=[],this.documentType="CPF"}onChangeState(){this.getCitiesByState(this.state)}getCityByValue(s){let l=this.cityOptions.find(i=>i.value===s);return l?l.label:""}getStateByValue(s){let l=this.stateOptions.find(i=>i.value===s);return l?l.label:""}getCitiesByState(s){this.citiesSubscription=this.sampleService.getCitiesByState(s).subscribe(l=>{this.cityOptions=l.items,this.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(s=>{this.stateOptions=s.items,this.state="sp",this.getCitiesByState(this.state)})}static \u0275fac=function(l){return new(l||o)(L(j))};static \u0275cmp=f({type:o,selectors:[["sample-po-select-customer-registration"]],standalone:!1,features:[te([j])],decls:27,vars:22,consts:[["f","ngForm"],["modal",""],[1,"po-row"],["name","documentType","p-label","Document type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","document","p-mask-format-model","","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label","p-mask","p-minlength"],["name","name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label"],["name","address","p-label","Address",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["p-select-option-template",""],["name","city","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Send Informations",1,"po-md-4",3,"p-click","p-disabled"],["p-title","Informations"],["p-label","Document type",1,"po-md-6",3,"p-value"],[1,"po-md-6",3,"p-label","p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","State",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"],[1,"sample-select-option-template-container"],["p-size","xs",3,"p-src"],[1,"sample-select-option-template-margin"],[1,"sample-select-option-template-label"],[1,"sample-select-option-template-value"]],template:function(l,i){if(l&1){let d=F();t(0,"form",null,0)(2,"div",2)(3,"po-radio-group",3),b("ngModelChange",function(a){return u(d),h(i.documentType,a)||(i.documentType=a),S(a)}),E("p-change",function(a){return u(d),S(i.changeType(a))}),e(),t(4,"po-input",4),b("ngModelChange",function(a){return u(d),h(i.document,a)||(i.document=a),S(a)}),e()(),t(5,"div",2)(6,"po-input",5),b("ngModelChange",function(a){return u(d),h(i.name,a)||(i.name=a),S(a)}),e(),t(7,"po-input",6),b("ngModelChange",function(a){return u(d),h(i.address,a)||(i.address=a),S(a)}),e()(),t(8,"div",2)(9,"po-select",7),b("ngModelChange",function(a){return u(d),h(i.state,a)||(i.state=a),S(a)}),E("p-change",function(){return u(d),S(i.onChangeState())}),$(10,Fe,7,4,"ng-template",8),e(),t(11,"po-select",9),b("ngModelChange",function(a){return u(d),h(i.city,a)||(i.city=a),S(a)}),e()(),t(12,"div",2)(13,"po-button",10),E("p-click",function(){u(d);let a=D(15);return S(a.open())}),e()()(),t(14,"po-modal",11,1)(16,"div",2),p(17,"po-info",12)(18,"po-info",13),e(),p(19,"hr"),t(20,"div",2),p(21,"po-info",13)(22,"po-info",14),e(),p(23,"hr"),t(24,"div",2),p(25,"po-info",15)(26,"po-info",16),e()()}if(l&2){let d=D(1);r(3),g("ngModel",i.documentType),c("p-options",i.options),r(),g("ngModel",i.document),c("p-label",i.documentLabel)("p-mask",i.mask)("p-minlength",i.minLength),r(2),g("ngModel",i.name),c("p-label",i.nameLabel),r(),g("ngModel",i.address),r(2),g("ngModel",i.state),c("p-options",i.stateOptions),r(2),g("ngModel",i.city),c("p-options",i.cityOptions),r(2),c("p-disabled",d.invalid),r(4),c("p-value",i.documentType),r(),c("p-label",i.documentLabel)("p-value",i.document),r(3),c("p-label",i.nameLabel)("p-value",i.name),r(),c("p-value",i.address),r(3),c("p-value",i.getStateByValue(i.state)),r(),c("p-value",i.getCityByValue(i.city))}},dependencies:[W,V,N,k,q,se,R,me,z,M,I,de],styles:[".sample-select-option-template-container[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start;width:100%}.sample-select-option-template-margin[_ngcontent-%COMP%]{margin:5px}.sample-select-option-template-label[_ngcontent-%COMP%]{font-size:16px}.sample-select-option-template-value[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}"]})}return o})();var qe=o=>({"docs-sample-code-tabs":o}),Ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-select-customer-registration-view"]],standalone:!1,decls:38,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","E2E"],["appCodeHighlight","",1,"test"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Select - Customer registration"),e(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),p(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.html"),e(),t(13,"pre",7),n(14,`<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-md-6"
      name="documentType"
      [(ngModel)]="documentType"
      p-label="Document type"
      [p-options]="options"
      (p-change)="changeType($event)"
    >
    </po-radio-group>

    <po-input
      class="po-md-6"
      name="document"
      [(ngModel)]="document"
      p-mask-format-model
      p-required
      [p-label]="documentLabel"
      [p-mask]="mask"
      [p-minlength]="minLength"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="name" [(ngModel)]="name" p-required [p-label]="nameLabel"> </po-input>

    <po-input class="po-md-6" name="address" [(ngModel)]="address" p-label="Address"> </po-input>
  </div>

  <div class="po-row">
    <po-select
      class="po-md-6"
      name="state"
      [(ngModel)]="state"
      p-label="State"
      [p-options]="stateOptions"
      (p-change)="onChangeState()"
    >
      <ng-template p-select-option-template let-option>
        <div class="sample-select-option-template-container">
          <po-avatar p-size="xs" p-src="https://po-sample-api.onrender.com/v1/sampleSelect/{ { option.value }}.png">
          </po-avatar>

          <div class="sample-select-option-template-margin">
            <div class="sample-select-option-template-label">{ { option.label }}</div>
            <div class="sample-select-option-template-value">{ { option.value }}</div>
          </div>
        </div>
      </ng-template>
    </po-select>

    <po-select class="po-md-6" name="city" [(ngModel)]="city" p-label="City" [p-options]="cityOptions"> </po-select>
  </div>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Send Informations" [p-disabled]="f.invalid" (p-click)="modal.open()">
    </po-button>
  </div>
</form>

<po-modal #modal p-title="Informations">
  <div class="po-row">
    <po-info class="po-md-6" p-label="Document type" [p-value]="documentType"> </po-info>

    <po-info class="po-md-6" [p-label]="documentLabel" [p-value]="document"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-md-6" [p-label]="nameLabel" [p-value]="name"> </po-info>

    <po-info class="po-md-6" p-label="Address" [p-value]="address"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-md-6" p-label="State" [p-value]="getStateByValue(state)"> </po-info>

    <po-info class="po-md-6" p-label="City" [p-value]="getCityByValue(city)"> </po-info>
  </div>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

import { SamplePoSelectCustomerRegistrationService } from './sample-po-select-customer-registration.service';

@Component({
  selector: 'sample-po-select-customer-registration',
  templateUrl: './sample-po-select-customer-registration.component.html',
  providers: [SamplePoSelectCustomerRegistrationService],
  styles: [
    \`
      .sample-select-option-template-container {
        display: inline-flex;
        align-items: flex-start;
        width: 100%;
      }

      .sample-select-option-template-margin {
        margin: 5px;
      }

      .sample-select-option-template-label {
        font-size: 16px;
      }

      .sample-select-option-template-value {
        font-size: 12px;
        text-transform: uppercase;
      }
    \`
  ],
  standalone: false
})
export class SamplePoSelectCustomerRegistrationComponent implements OnDestroy, OnInit {
  address: string;
  city: number;
  cityOptions: Array<PoSelectOption>;
  document: string;
  documentLabel;
  documentType: string;
  mask: string;
  minLength: number;
  name: string;
  nameLabel: string;
  state: string;
  stateOptions: Array<PoSelectOption>;

  readonly options: Array<PoRadioGroupOption> = [
    { label: 'CPF', value: 'CPF' },
    { label: 'CNPJ', value: 'CNPJ' }
  ];

  private citiesSubscription: Subscription;
  private statesSubscription: Subscription;

  constructor(private sampleService: SamplePoSelectCustomerRegistrationService) {}

  ngOnDestroy() {
    this.citiesSubscription?.unsubscribe();
    this.statesSubscription?.unsubscribe();
  }

  ngOnInit() {
    this.initialize();
    this.getStates();
    this.changeType(this.documentType);
  }

  changeType(documentType) {
    if (documentType === 'CPF') {
      this.documentLabel = 'CPF Number';
      this.mask = '999.999.999-99';
      this.minLength = 14;
      this.nameLabel = 'Client Name';
    } else {
      this.documentLabel = 'CNPJ Number';
      this.mask = '99.999.999/9999-99';
      this.minLength = 18;
      this.nameLabel = 'Company Name';
    }

    this.address = '';
    this.document = '';
    this.name = '';
  }

  initialize() {
    this.cityOptions = [];
    this.stateOptions = [];
    this.documentType = 'CPF';
  }

  onChangeState() {
    this.getCitiesByState(this.state);
  }

  getCityByValue(cityValue: number) {
    const cityLabel = this.cityOptions.find(city => city.value === cityValue);
    return cityLabel ? cityLabel.label : '';
  }

  getStateByValue(stateValue: string) {
    const stateLabel = this.stateOptions.find(state => state.value === stateValue);
    return stateLabel ? stateLabel.label : '';
  }

  private getCitiesByState(state: string) {
    this.citiesSubscription = this.sampleService
      .getCitiesByState(state)
      .subscribe((cities: { items: Array<PoSelectOption> }) => {
        this.cityOptions = cities.items;
        this.city = this.cityOptions[0].value as number;
      });
  }

  private getStates() {
    this.statesSubscription = this.sampleService.getStates().subscribe((states: { items: Array<PoSelectOption> }) => {
      this.stateOptions = states.items;
      this.state = 'sp';

      this.getCitiesByState(this.state);
    });
  }
}
`),e(),t(21,"label",6),n(22,"sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts"),e(),t(23,"pre",9),n(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSelectCustomerRegistrationService {
  private url: string = 'https://po-sample-api.onrender.com/v1/sampleSelect';

  constructor(private http: HttpClient) {}

  getCitiesByState(uf: string) {
    return this.http.get(\`\${this.url}/getCities/\${uf}\`);
  }

  getStates() {
    return this.http.get(\`\${this.url}/getStates\`);
  }
}
`),e()()(),t(25,"po-tab",10)(26,"div")(27,"label",6),n(28,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.e2e-spec.ts"),e(),t(29,"pre",11),n(30,`import { PoSelectPage } from './sample-po-select-customer-registration.component.po';

describe('Po-Select E2E', () => {
  const select: PoSelectPage = new PoSelectPage();

  beforeEach(() => {
    select.navigateTo();
  });

  it('Dinamic clicks to state SP', () => {
    select.poSelectState.click();
    select.stateSaoPaulo.click();
    expect(select.poSelectState.getText()).toContain('S\xE3o Paulo');
    expect(select.poSelectCity.getText()).toContain('Campinas');
  });

  it('Dinamic clicks to state SC', () => {
    select.poSelectState.click();
    select.stateSantaCatarina.click();
    expect(select.poSelectState.getText()).toContain('Santa Catarina');
    expect(select.poSelectCity.getText()).toContain('Joinville');
  });

  it('Dinamic clicks to state PR', () => {
    select.poSelectState.click();
    select.stateParana.click();
    expect(select.poSelectState.getText()).toContain('Paran\xE1');
    expect(select.poSelectCity.getText()).toContain('Curitiba');
  });

  it('Check the cities of SP', () => {
    select.poSelectState.click();
    select.stateSaoPaulo.click();
    select.poSelectCity.click();
    expect(select.cityCampinas.isDisplayed()).toBeTruthy();
    expect(select.citySantoAndre.isPresent()).toBeTruthy();
    expect(select.citySantos.isDisplayed()).toBeTruthy();
  });

  it('Check the cities of SC', () => {
    select.poSelectState.click();
    select.stateSantaCatarina.click();
    select.poSelectCity.click();
    expect(select.cityJoinville.isDisplayed()).toBeTruthy();
    expect(select.cityFlorianopolis.isPresent()).toBeTruthy();
    expect(select.cityTubarao.isDisplayed()).toBeTruthy();
  });

  it('Check the cities of PR', () => {
    select.poSelectState.click();
    select.stateParana.click();
    select.poSelectCity.click();
    expect(select.cityCuritiba.isDisplayed()).toBeTruthy();
    expect(select.cityMafra.isPresent()).toBeTruthy();
    expect(select.cityRioNegro.isDisplayed()).toBeTruthy();
  });
});
`),e(),t(31,"label",6),n(32,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.po.ts"),e(),t(33,"pre",11),n(34,`import { browser, by, element } from 'protractor';

export class PoSelectPage {
  private sample = 'sample-po-select';

  navigateTo() {
    return browser.get(browser.baseUrl + '/documentation/po-select?view=web');
  }

  private getPoSelect(selectName: string) {
    return element(by.css(\`\${this.sample} [name=\${selectName}] .po-select-button\`));
  }

  private getPoSelectItem(selectVal: string, stateVal: number) {
    return element(by.css(\`\${this.sample} po-select[name=\${selectVal}] .po-select-content > li[value="\${stateVal}"]\`));
  }

  get poSelectState() {
    return this.getPoSelect('state');
  }

  get poSelectCity() {
    return this.getPoSelect('city');
  }

  get stateSaoPaulo() {
    return this.getPoSelectItem('state', 1);
  }

  get stateSantaCatarina() {
    return this.getPoSelectItem('state', 2);
  }

  get stateParana() {
    return this.getPoSelectItem('state', 3);
  }

  get cityCampinas() {
    return this.getPoSelectItem('city', 1);
  }

  get citySantoAndre() {
    return this.getPoSelectItem('city', 2);
  }

  get citySantos() {
    return this.getPoSelectItem('city', 3);
  }

  get cityJoinville() {
    return this.getPoSelectItem('city', 4);
  }

  get cityFlorianopolis() {
    return this.getPoSelectItem('city', 5);
  }

  get cityTubarao() {
    return this.getPoSelectItem('city', 6);
  }

  get cityCuritiba() {
    return this.getPoSelectItem('city', 7);
  }

  get cityMafra() {
    return this.getPoSelectItem('city', 8);
  }

  get cityRioNegro() {
    return this.getPoSelectItem('city', 9);
  }
}
`),e()()()()(),t(35,"div",12),p(36,"sample-po-select-customer-registration"),e(),p(37,"hr")),l&2&&(r(5),_("po-icon "+i.sampleCodeButtonIcon),r(),x(" ",i.sampleCodeButtonLabel,""),r(),c("ngClass",w(4,qe,i.hideSampleCodeTabs)))},dependencies:[T,P,C,y,ve],encapsulation:2})}return o})();var ye=(()=>{class o{select;fieldLabel="nomeFantasia";fieldValue="cnpj";empresas=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];labels=[{label:"Dados",options:[{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"email",value:"email"}]},{label:"Cidade",options:[{label:"origem",value:"origem"}]}];values=[{label:"codigo",value:"codigo"},{label:"cnpj",value:"cnpj"},{label:"id",value:"id"},{label:"data",value:"data"}];onChange(s){this.select=void 0}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-select-companies"]],standalone:!1,decls:5,vars:9,consts:[["name","select","p-label","PO Select",3,"ngModelChange","ngModel","p-field-value","p-field-label","p-options"],["p-label","Model","name","selectInfo",3,"p-valueChange","p-value"],[1,"po-row"],["name","fieldLabel","p-label","p-field-label",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"],["name","selectValue","p-label","p-field-value",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"]],template:function(l,i){l&1&&(t(0,"po-select",0),b("ngModelChange",function(m){return h(i.select,m)||(i.select=m),m}),e(),t(1,"po-info",1),b("p-valueChange",function(m){return h(i.select,m)||(i.select=m),m}),e(),t(2,"div",2)(3,"po-select",3),E("p-change",function(m){return i.onChange(m)}),b("ngModelChange",function(m){return h(i.fieldLabel,m)||(i.fieldLabel=m),m}),e(),t(4,"po-select",4),E("p-change",function(m){return i.onChange(m)}),b("ngModelChange",function(m){return h(i.fieldValue,m)||(i.fieldValue=m),m}),e()()),l&2&&(g("ngModel",i.select),c("p-field-value",i.fieldValue)("p-field-label",i.fieldLabel)("p-options",i.empresas),r(),g("p-value",i.select),r(2),c("p-options",i.labels),g("ngModel",i.fieldLabel),r(),c("p-options",i.values),g("ngModel",i.fieldValue))},dependencies:[V,k,M,I],encapsulation:2})}return o})();var ze=o=>({"docs-sample-code-tabs":o}),Pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-select-companies-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Select Companies"),e(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),p(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-select-companies/sample-po-select-companies.component.html"),e(),t(13,"pre",7),n(14,`<po-select
  name="select"
  p-label="PO Select"
  [(ngModel)]="select"
  [p-field-value]="fieldValue"
  [p-field-label]="fieldLabel"
  [p-options]="empresas"
>
</po-select>

<po-info p-label="Model" name="selectInfo" [(p-value)]="select"> </po-info>

<div class="po-row">
  <po-select
    class="po-md-6"
    name="fieldLabel"
    p-label="p-field-label"
    [p-options]="labels"
    (p-change)="onChange($event)"
    [(ngModel)]="fieldLabel"
  >
  </po-select>

  <po-select
    class="po-md-6"
    name="selectValue"
    p-label="p-field-value"
    [p-options]="values"
    (p-change)="onChange($event)"
    [(ngModel)]="fieldValue"
  >
  </po-select>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-select-companies/sample-po-select-companies.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

import { PoSelectOption, PoSelectOptionGroup } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-select-companies',
  templateUrl: './sample-po-select-companies.component.html',
  standalone: false
})
export class SamplePoSelectCompaniesComponent {
  select: Array<string>;
  fieldLabel = 'nomeFantasia';
  fieldValue = 'cnpj';

  empresas: Array<any> = [
    {
      codigo: '1',
      nomeFantasia: 'TOTVS SA',
      razaoSocial: 'TOTVS LTDA',
      label: 'TOTVS COMPANY',
      cnpj: '01.234.567/0000-01',
      value: '100',
      id: '10',
      email: 'totvscompany@sample.com',
      data: '10/03/2015',
      origem: 'S\xE3o Paulo'
    },
    {
      codigo: '2',
      nomeFantasia: 'INSTITUTO TOTVS DE ENSINO SA',
      razaoSocial: 'INST TOTVS DE ENSINO LTDA',
      label: 'INST TOTVS',
      cnpj: '02.345.678/0000-02',
      value: '200',
      id: '20',
      email: 'insttotvs@sample.com',
      data: '10/10/2020',
      origem: 'Joinville'
    },
    {
      codigo: '3',
      nomeFantasia: 'TOTVS ENTERPRISE SA',
      razaoSocial: 'TOTVS ENTERPRISE LTDA ',
      label: 'ENT TOTVS',
      cnpj: '03.456.789/0000-03',
      value: '300',
      id: '30',
      email: 'enttotvs@sample.com',
      data: '10/01/2022',
      origem: 'Curitiba'
    }
  ];

  readonly labels: Array<PoSelectOptionGroup> = [
    {
      label: 'Dados',
      options: [
        { label: 'nomeFantasia', value: 'nomeFantasia' },
        { label: 'razaoSocial', value: 'razaoSocial' },
        { label: 'email', value: 'email' }
      ]
    },
    {
      label: 'Cidade',
      options: [{ label: 'origem', value: 'origem' }]
    }
  ];

  readonly values: Array<PoSelectOption> = [
    { label: 'codigo', value: 'codigo' },
    { label: 'cnpj', value: 'cnpj' },
    { label: 'id', value: 'id' },
    { label: 'data', value: 'data' }
  ];

  onChange(event) {
    this.select = undefined;
  }
}
`),e()()()()(),t(21,"div",10),p(22,"sample-po-select-companies"),e(),p(23,"hr")),l&2&&(r(5),_("po-icon "+i.sampleCodeButtonIcon),r(),x(" ",i.sampleCodeButtonLabel,""),r(),c("ngClass",w(4,ze,i.hideSampleCodeTabs)))},dependencies:[T,P,C,y,ye],encapsulation:2})}return o})();var _e=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-select-doc"]],standalone:!1,decls:697,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo-option-template"],["href","/documentation/po-select-option-template"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","any[]"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","number"]],template:function(l,i){l&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoFieldModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),e(),t(7,"blockquote")(8,"p"),n(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),t(10,"code"),n(11,"FormsModule"),e(),n(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),t(13,"code"),n(14,"ReactiveFormsModule"),e(),n(15,", ambos nativos do Angular."),e()()(),t(16,"h3",3),n(17,"Componente"),e(),t(18,"h4",4)(19,"code",5),n(20,"PoSelectComponent"),e()(),t(21,"div",2)(22,"p"),n(23,` O componente po-select exibe uma lista de valores e permite que o usu\xE1rio selecione um desses valores.
Os valores listados podem ser fixos ou din\xE2micos de acordo com a necessidade do desenvolvedor, dando mais flexibilidade ao componente.
O po-select n\xE3o permite que o usu\xE1rio informe um valor diferente dos valores listados, isso garante a consist\xEAncia da informa\xE7\xE3o.
O po-select n\xE3o permite que sejam passados valores duplicados, undefined e null para as op\xE7\xF5es, excluindo-os da lista.`),e(),t(24,"blockquote")(25,"p"),n(26,"Ao passar um valor para o "),t(27,"em"),n(28,"model"),e(),n(29," que n\xE3o est\xE1 na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),t(30,"code"),n(31,"undefined"),e(),n(32,"."),e()(),t(33,"p"),n(34,"Tamb\xE9m existe a possibilidade de utilizar um "),t(35,"em"),n(36,"template"),e(),n(37,` para a exibi\xE7\xE3o dos itens da lista,
veja mais em `),t(38,"strong")(39,"a",6),n(40,"p-combo-option-template"),e()(),n(41,"."),e(),t(42,"blockquote")(43,"p"),n(44,"Obs: o template "),t(45,"strong")(46,"a",7),n(47,"p-select-option-template"),e()(),n(48," ser\xE1 depreciado na vers\xE3o 14.x.x."),e()(),t(49,"h4",8),n(50,"Tokens customiz\xE1veis"),e(),t(51,"p"),n(52,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(53,"blockquote")(54,"p"),n(55,"Para maiores informa\xE7\xF5es, acesse o guia "),t(56,"a",9),n(57,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(58,"."),e()(),t(59,"table")(60,"thead")(61,"tr")(62,"th"),n(63,"Propriedade"),e(),t(64,"th"),n(65,"Descri\xE7\xE3o"),e(),t(66,"th"),n(67,"Valor Padr\xE3o"),e()()(),t(68,"tbody")(69,"tr")(70,"td")(71,"strong"),n(72,"Default Values"),e()(),p(73,"td")(74,"td"),e(),t(75,"tr")(76,"td")(77,"code"),n(78,"--font-family"),e()(),t(79,"td"),n(80,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(81,"td")(82,"code"),n(83,"var(--font-family-theme)"),e()()(),t(84,"tr")(85,"td")(86,"code"),n(87,"--font-size"),e()(),t(88,"td"),n(89,"Tamanho da fonte"),e(),t(90,"td")(91,"code"),n(92,"var(--font-size-default)"),e()()(),t(93,"tr")(94,"td")(95,"code"),n(96,"--text-color-empty"),e()(),t(97,"td"),n(98,"Cor do placeholder"),e(),t(99,"td")(100,"code"),n(101,"var(--color-neutral-light-30)"),e()()(),t(102,"tr")(103,"td")(104,"code"),n(105,"--color"),e()(),t(106,"td"),n(107,"Cor da borda"),e(),t(108,"td")(109,"code"),n(110,"var(--color-neutral-dark-70)"),e()()(),t(111,"tr")(112,"td")(113,"code"),n(114,"--background"),e()(),t(115,"td"),n(116,"Cor de background"),e(),t(117,"td")(118,"code"),n(119,"var(--color-neutral-light-05)"),e()()(),t(120,"tr")(121,"td")(122,"code"),n(123,"--text-color"),e()(),t(124,"td"),n(125,"Cor do texto"),e(),t(126,"td")(127,"code"),n(128,"var(--color-neutral-dark-90)"),e()()(),t(129,"tr")(130,"td")(131,"code"),n(132,"--padding-horizontal"),e()(),t(133,"td"),n(134,"Preenchimento horizontal"),e(),t(135,"td")(136,"code"),n(137,"0.5em"),e()()(),t(138,"tr")(139,"td")(140,"code"),n(141,"--padding-vertical"),e()(),t(142,"td"),n(143,"Preenchimento vertical"),e(),t(144,"td")(145,"code"),n(146,"0.7em"),e()()(),t(147,"tr")(148,"td")(149,"strong"),n(150,"Hover"),e()(),p(151,"td")(152,"td"),e(),t(153,"tr")(154,"td")(155,"code"),n(156,"--color-hover"),e()(),t(157,"td"),n(158,"Cor principal no estado hover"),e(),t(159,"td")(160,"code"),n(161,"var(--color-brand-01-dark)"),e()()(),t(162,"tr")(163,"td")(164,"code"),n(165,"--background-hover"),e()(),t(166,"td"),n(167,"Cor de background no estado hover"),e(),t(168,"td")(169,"code"),n(170,"var(--color-brand-01-lighter)"),e()()(),t(171,"tr")(172,"td")(173,"strong"),n(174,"Focused"),e()(),p(175,"td")(176,"td"),e(),t(177,"tr")(178,"td")(179,"code"),n(180,"--outline-color-focused"),e()(),t(181,"td"),n(182,"Cor do outline do estado de focus"),e(),t(183,"td")(184,"code"),n(185,"var(--color-action-focus)"),e()()(),t(186,"tr")(187,"td")(188,"code"),n(189,"--color-focused"),e()(),t(190,"td"),n(191,"Cor da borda no estado de focus"),e(),t(192,"td")(193,"code"),n(194,"var(--color-action-default)"),e()()(),t(195,"tr")(196,"td")(197,"strong"),n(198,"Disabled"),e()(),p(199,"td")(200,"td"),e(),t(201,"tr")(202,"td")(203,"code"),n(204,"--color-disabled"),e()(),t(205,"td"),n(206,"Cor principal no estado disabled"),e(),t(207,"td")(208,"code"),n(209,"var(--color-neutral-light-30)"),e()()(),t(210,"tr")(211,"td")(212,"code"),n(213,"--background-color-disabled"),e(),n(214,"\xA0"),e(),t(215,"td"),n(216,"Cor de background no estado disabled"),e(),t(217,"td")(218,"code"),n(219,"var(--color-neutral-light-20)"),e()()()()()(),t(220,"div",10)(221,"h4",11),n(222,"Seletor"),e(),t(223,"pre",12),n(224,`<po-select
    (p-change)="EventEmitter"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-help="string"
    p-label="string"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="any[]"
    p-placeholder="string"
    p-readonly="boolean"
    p-required="boolean"
    p-show-required="boolean" >
</po-select>
`),e()(),t(225,"h4",13),n(226,"Propriedades"),e(),t(227,"table",14)(228,"tr",15)(229,"th",16),n(230,"Nome"),e(),t(231,"th",16),n(232,"Tipo"),e(),t(233,"th",16),n(234,"Padr\xE3o"),e(),t(235,"th",16),n(236,"Descri\xE7\xE3o"),e()(),t(237,"tr",17)(238,"td",18)(239,"div",19)(240,"span",20),n(241," (p-change)"),p(242,"br"),e()()(),t(243,"td",21)(244,"code",22),n(245,"EventEmitter"),e()(),t(246,"td",23),n(247,"-"),e(),t(248,"td",24)(249,"em")(250,"strong"),n(251,"(opcional)"),e()(),t(252,"p"),n(253,"Evento disparado ao alterar valor do campo."),e()()(),t(254,"tr",17)(255,"td",18)(256,"div",25)(257,"span",26),n(258," p-disabled"),p(259,"br"),e()()(),t(260,"td",21)(261,"code",27),n(262,"boolean"),e()(),t(263,"td",23)(264,"p")(265,"code"),n(266,"false"),e()()(),t(267,"td",24)(268,"em")(269,"strong"),n(270,"(opcional)"),e()(),t(271,"p"),n(272,"Indica se o campo ser\xE1 desabilitado."),e()()(),t(273,"tr",17)(274,"td",18)(275,"div",25)(276,"span",26),n(277," p-error-limit"),p(278,"br"),e()()(),t(279,"td",21)(280,"code",27),n(281,"boolean"),e()(),t(282,"td",23)(283,"p")(284,"code"),n(285,"false"),e()()(),t(286,"td",24)(287,"em")(288,"strong"),n(289,"(opcional)"),e()(),t(290,"p"),n(291,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),e(),t(292,"blockquote")(293,"p"),n(294,"Caso essa propriedade seja definida como "),t(295,"code"),n(296,"true"),e(),n(297,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),e()()()(),t(298,"tr",17)(299,"td",18)(300,"div",25)(301,"span",26),n(302," p-field-error-message"),p(303,"br"),e()()(),t(304,"td",21)(305,"code",28),n(306,"string"),e()(),t(307,"td",23),n(308,"-"),e(),t(309,"td",24)(310,"em")(311,"strong"),n(312,"(opcional)"),e()(),t(313,"p"),n(314,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),e(),t(315,"blockquote")(316,"p"),n(317,"Necess\xE1rio que a propriedade "),t(318,"code"),n(319,"p-required"),e(),n(320," esteja habilitada."),e()()()(),t(321,"tr",17)(322,"td",18)(323,"div",25)(324,"span",26),n(325," p-field-label"),p(326,"br"),e()()(),t(327,"td",21)(328,"code",28),n(329,"string"),e()(),t(330,"td",23)(331,"p")(332,"code"),n(333,"label"),e()()(),t(334,"td",24)(335,"em")(336,"strong"),n(337,"(opcional)"),e()(),t(338,"p"),n(339,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(340,"code"),n(341,"p-options"),e(),n(342,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),e()()(),t(343,"tr",17)(344,"td",18)(345,"div",25)(346,"span",26),n(347," p-field-value"),p(348,"br"),e()()(),t(349,"td",21)(350,"code",28),n(351,"string"),e()(),t(352,"td",23)(353,"p")(354,"code"),n(355,"value"),e()()(),t(356,"td",24)(357,"em")(358,"strong"),n(359,"(opcional)"),e()(),t(360,"p"),n(361,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(362,"code"),n(363,"p-options"),e(),n(364,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),e()()(),t(365,"tr",17)(366,"td",18)(367,"div",25)(368,"span",26),n(369," p-help"),p(370,"br"),e()()(),t(371,"td",21)(372,"code",28),n(373,"string"),e()(),t(374,"td",23),n(375,"-"),e(),t(376,"td",24)(377,"p"),n(378,"Texto de apoio para o campo."),e()()(),t(379,"tr",17)(380,"td",18)(381,"div",25)(382,"span",26),n(383," p-label"),p(384,"br"),e()()(),t(385,"td",21)(386,"code",28),n(387,"string"),e()(),t(388,"td",23),n(389,"-"),e(),t(390,"td",24)(391,"p"),n(392,"R\xF3tulo exibido pelo componente."),e()()(),t(393,"tr",17)(394,"td",18)(395,"div",25)(396,"span",26),n(397," name"),p(398,"br"),e()()(),t(399,"td",21)(400,"code",28),n(401,"string"),e()(),t(402,"td",23),n(403,"-"),e(),t(404,"td",24)(405,"p"),n(406,"Nome do componente."),e()()(),t(407,"tr",17)(408,"td",18)(409,"div",19)(410,"span",20),n(411," (ngModelChange)"),p(412,"br"),e()()(),t(413,"td",21)(414,"code",22),n(415,"EventEmitter"),e()(),t(416,"td",23),n(417,"-"),e(),t(418,"td",24)(419,"em")(420,"strong"),n(421,"(opcional)"),e()(),t(422,"p"),n(423,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),e(),t(424,"p"),n(425,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),t(426,"code"),n(427,"strictTemplates"),e(),n(428,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),e(),t(429,"pre")(430,"code"),n(431,'<po-select ... [ngModel]="selectModel" (ngModelChange)="selectModel = $event"> </po-select>'),e()()()(),t(432,"tr",17)(433,"td",18)(434,"div",25)(435,"span",26),n(436," p-optional"),p(437,"br"),e()()(),t(438,"td",21)(439,"code",27),n(440,"boolean"),e()(),t(441,"td",23)(442,"p")(443,"code"),n(444,"false"),e()()(),t(445,"td",24)(446,"em")(447,"strong"),n(448,"(opcional)"),e()(),t(449,"p"),n(450,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),e(),t(451,"blockquote")(452,"p"),n(453,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(454,"ul")(455,"li"),n(456,"O campo conter "),t(457,"code"),n(458,"p-required"),e(),n(459,";"),e(),t(460,"li"),n(461,"N\xE3o possuir "),t(462,"code"),n(463,"p-help"),e(),n(464," e/ou "),t(465,"code"),n(466,"p-label"),e(),n(467,"."),e()()()(),t(468,"tr",17)(469,"td",18)(470,"div",25)(471,"span",26),n(472," p-options"),p(473,"br"),e()()(),t(474,"td",21)(475,"code",29),n(476,"any[]"),e()(),t(477,"td",23),n(478,"-"),e(),t(479,"td",24)(480,"p"),n(481,"Nesta propriedade deve ser definido uma cole\xE7\xE3o de objetos que implementam a interface "),t(482,"code"),n(483,"PoSelectOption"),e(),n(484,`,
ou uma cole\xE7\xE3o de objetos dentro de grupos diferentes, que seriam da interface `),t(485,"code"),n(486,"PoSelectOptionGroup"),e(),n(487,"."),e(),t(488,"p"),n(489,"Caso esta lista estiver vazia, o model ser\xE1 "),t(490,"code"),n(491,"undefined"),e(),n(492,"."),e(),t(493,"blockquote")(494,"p"),n(495,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),e()(),t(496,"pre")(497,"code"),n(498,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });`),e()(),t(499,"blockquote")(500,"p"),n(501,"Para cole\xE7\xE3o de objetos dentro de grupos distintos ser\xE1 exibido a label e op\xE7\xF5es somente se a propriedade "),t(502,"code"),n(503,"options"),e(),n(504," possua valores. Sendo assim, a estrutura seguiria dessa forma:"),e()(),t(505,"pre")(506,"code"),n(507,`this.options = [{
 label: 'Op\xE7\xF5es',
 options: [
   { value: 1, label: 'op\xE7\xE3o 1' },
   { value: 2, label: 'op\xE7\xE3o 2' }
 ],
}];`),e()(),t(508,"p"),n(509,`\xC9 poss\xEDvel a utiliza\xE7\xE3o de op\xE7\xF5es agrupadas e desagrupadas em conjunto, por\xE9m ser\xE1 feita a ordena\xE7\xE3o de exibir as op\xE7\xF5es
desagrupadas acima.`),e()()(),t(510,"tr",17)(511,"td",18)(512,"div",25)(513,"span",26),n(514," p-placeholder"),p(515,"br"),e()()(),t(516,"td",21)(517,"code",28),n(518,"string"),e()(),t(519,"td",23),n(520,"-"),e(),t(521,"td",24)(522,"em")(523,"strong"),n(524,"(opcional)"),e()(),t(525,"p"),n(526,"Mensagem que aparecer\xE1 enquanto nenhuma op\xE7\xE3o estiver selecionada."),e()()(),t(527,"tr",17)(528,"td",18)(529,"div",25)(530,"span",26),n(531," p-readonly"),p(532,"br"),e()()(),t(533,"td",21)(534,"code",27),n(535,"boolean"),e()(),t(536,"td",23)(537,"p")(538,"code"),n(539,"false"),e()()(),t(540,"td",24)(541,"em")(542,"strong"),n(543,"(opcional)"),e()(),t(544,"p"),n(545,"Indica que o campo ser\xE1 somente para leitura."),e()()(),t(546,"tr",17)(547,"td",18)(548,"div",25)(549,"span",26),n(550," p-required"),p(551,"br"),e()()(),t(552,"td",21)(553,"code",27),n(554,"boolean"),e()(),t(555,"td",23)(556,"p")(557,"code"),n(558,"false"),e()()(),t(559,"td",24)(560,"em")(561,"strong"),n(562,"(opcional)"),e()(),t(563,"p"),n(564,"Define que o campo ser\xE1 obrigat\xF3rio."),e()()(),t(565,"tr",17)(566,"td",18)(567,"div",25)(568,"span",26),n(569," p-show-required"),p(570,"br"),e()()(),t(571,"td",21)(572,"code",27),n(573,"boolean"),e()(),t(574,"td",23),n(575,"-"),e(),t(576,"td",24)(577,"p"),n(578,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),e(),t(579,"blockquote")(580,"p"),n(581,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(582,"ul")(583,"li"),n(584,"N\xE3o possuir "),t(585,"code"),n(586,"p-help"),e(),n(587," e/ou "),t(588,"code"),n(589,"p-label"),e(),n(590,"."),e()()()()(),t(591,"h3",13),n(592,"M\xE9todos"),e(),t(593,"table",30)(594,"tr",17)(595,"th",31)(596,"div",25)(597,"h4")(598,"span",26),n(599," focus "),e()()()()(),t(600,"tr",24)(601,"td",24)(602,"p"),n(603,"Fun\xE7\xE3o que atribui foco ao componente."),e(),t(604,"p"),n(605,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),t(606,"pre")(607,"code"),n(608,`import { PoSelectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSelectComponent, { static: true }) select: PoSelectComponent;

focusSelect() {
  this.select.focus();
}`),e()()()()(),p(609,"br"),t(610,"h3"),n(611,"Interfaces"),e(),t(612,"h4",32)(613,"code",5),n(614,"PoSelectOptionGroup"),e()(),t(615,"div",2)(616,"p"),n(617,"Interface da cole\xE7\xF5es de itens em grupo, utilizando uma label para o grupo e as op\xE7\xF5es do tipo "),t(618,"code"),n(619,"PoSelectOption"),e(),n(620,"."),e()(),t(621,"h4",13),n(622,"Propriedades"),e(),t(623,"table",14)(624,"tr",15)(625,"th",16),n(626,"Nome"),e(),t(627,"th",16),n(628,"Tipo"),e(),t(629,"th",16),n(630,"Descri\xE7\xE3o"),e()(),t(631,"tr",17)(632,"td",18)(633,"div",25)(634,"span",26),n(635," label"),p(636,"br"),e()()(),t(637,"td",21)(638,"code",28),n(639,"string"),e()(),t(640,"td",24)(641,"p"),n(642,"Label para denominar o nome do grupo."),e()()(),t(643,"tr",17)(644,"td",18)(645,"div",25)(646,"span",26),n(647," options"),p(648,"br"),e()()(),t(649,"td",21)(650,"code",33),n(651,"Array<PoSelectOption>"),e()(),t(652,"td",24)(653,"p"),n(654,"Lista com as op\xE7\xF5es dispon\xEDveis em cada grupo."),e()()()(),t(655,"h4",32)(656,"code",5),n(657,"PoSelectOption"),e()(),t(658,"div",2)(659,"p"),n(660,"Interface da cole\xE7\xF5es de itens que deve ser informado no componente po-select"),e()(),t(661,"h4",13),n(662,"Propriedades"),e(),t(663,"table",14)(664,"tr",15)(665,"th",16),n(666,"Nome"),e(),t(667,"th",16),n(668,"Tipo"),e(),t(669,"th",16),n(670,"Descri\xE7\xE3o"),e()(),t(671,"tr",17)(672,"td",18)(673,"div",25)(674,"span",26),n(675," label"),p(676,"br"),e()()(),t(677,"td",21)(678,"code",28),n(679,"string"),e()(),t(680,"td",24)(681,"p"),n(682,"Label a ser utilizada nos itens da lista."),e()()(),t(683,"tr",17)(684,"td",18)(685,"div",25)(686,"span",26),n(687," value"),p(688,"br"),e()()(),t(689,"td",21)(690,"code",28),n(691,"string "),e(),t(692,"code",34),n(693," number"),e()(),t(694,"td",24)(695,"p"),n(696,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),e()()()()())},dependencies:[P],encapsulation:2})}return o})();var xe=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,l){this.route=s,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let l=s.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||o)(L(ae),L(le))};static \u0275cmp=f({type:o,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title"," Select",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(l,i){l&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),p(3,"sample-po-select-doc"),e(),t(4,"po-tab",3),p(5,"sample-po-select-basic-view")(6,"sample-po-select-labs-view")(7,"sample-po-select-customer-registration-view")(8,"sample-po-select-companies-view"),e()()()),l&2&&(c("p-actions",i.actions),r(2),c("p-active",i.activeTab.includes("doc")),r(2),c("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[ue,C,y,he,fe,Ce,Pe,_e],encapsulation:2})}return o})();var He=[{path:"",component:xe}],we=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=G({type:o});static \u0275inj=B({imports:[Y.forChild(He),Y]})}return o})();var Ct=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=G({type:o});static \u0275inj=B({imports:[Se,we]})}return o})();export{Ct as DocPoSelectModule};
