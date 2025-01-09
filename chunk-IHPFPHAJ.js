import{$ as G,$a as C,$b as se,$c as ce,$d as Z,Ca as D,Cd as X,Da as k,Ea as L,F as m,Fa as V,Fc as ue,G as u,Ga as e,Ia as F,Ka as g,La as h,Lb as R,Ma as f,Mb as z,Nb as B,Oa as te,Ob as O,Od as he,Pa as v,Pb as j,Sb as ae,T as s,Tb as le,U,Ua as ne,Ub as re,Va as ie,Vd as fe,Wb as pe,Wd as xe,Xd as w,Yb as de,Yd as y,Zb as $,_ as S,ad as Ee,bb as Y,ea as J,ha as c,ja as ee,ka as P,kb as oe,md as I,na as n,oa as t,oc as A,pa as o,re as _,sd as be,se as ve,ta as T,ua as b,va as W,vd as M,wd as Se,y as Q,yd as ge,zc as me,zd as K}from"./chunk-PI3TYJHE.js";var Ce=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-upload-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","upload","p-label","PO Upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile"]],template:function(r,i){r&1&&o(0,"po-upload",0)},dependencies:[M],encapsulation:2})}return a})();var Be=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-upload-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload Basic"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-basic/sample-po-upload-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-basic/sample-po-upload-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-basic"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",v(4,Be,i.hideSampleCodeTabs)))},dependencies:[C,_,w,y,Ce],encapsulation:2})}return a})();function je(a,Re){if(a&1&&(n(0,"div")(1,"po-widget",21)(2,"form",22),o(3,"po-input",23)(4,"po-select",24)(5,"po-select",25)(6,"po-switch",26)(7,"po-switch",27),t()()()),a&2){let p=W();s(2),c("formGroup",p.actionForm),s(2),c("p-options",p.iconOptions),s(),c("p-options",p.typeOptions)}}var _e=(()=>{class a{fb;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;actionForm;propertiesOptions=[{value:"autoupload",label:"Automatic upload"},{value:"directory",label:"Directory"},{value:"disabled",label:"Disabled"},{value:"disabledRemoveFile",label:"Disabled Remove File"},{value:"dragDrop",label:"Drag Drop"},{value:"requiredUrl",label:"required Url"},{value:"multiple",label:"Multiple upload"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"restrictionsInfo",label:"Hide Restrictions Info"},{value:"selectButton",label:"Hide Select Files Button"},{value:"sendButton",label:"Hide Send Files Button"},{value:"showCustomAction",label:"Add Custom Action to Progress"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];constructor(p){this.fb=p,this.initializeActionForm()}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(p=>{this.updateAction(p)})}updateAction(p){this.action=p}changeEvent(p){this.event=p}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onChangeHeaders(p){try{this.headers=JSON.parse(p)}catch{this.headers=void 0}}onChangeExtension(){let p=this.allowedExtensions.split(",").map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:p})}onChangeMaxFiles(p){this.restrictions=Object.assign({},this.restrictions,{maxFiles:p})}onChangeMaxSize(p){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(p)})}onChangeMinSize(p){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(p)})}restore(){this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals="",this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url="https://po-sample-api.onrender.com/v1/uploads/addFile",this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:"default",visible:!0}),this.action={label:"",type:"default"}}getValueInBytes(p){return 1048576*p}static \u0275fac=function(r){return new(r||a)(U(re))};static \u0275cmp=S({type:a,selectors:[["sample-po-upload-labs"]],standalone:!1,decls:32,vars:41,consts:[["fRestrictions","ngForm"],["f","ngForm"],["name","upload",3,"ngModelChange","p-custom-action-click","p-error","p-success","p-upload","ngModel","p-auto-upload","p-directory","p-disabled","p-required-url","p-disabled-remove-file","p-drag-drop","p-drag-drop-height","p-form-field","p-help","p-hide-select-button","p-hide-restrictions-info","p-hide-send-button","p-label","p-literals","p-multiple","p-optional","p-required","p-show-required","p-restrictions","p-url","p-headers","p-custom-action"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","allowedExtensions","p-help","Enter the allowed extensions separated by comma","p-label","Allowed Extensions","p-placeholder",".png, .jpeg, .jpg",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","maxFiles","p-clean","","p-help","Requires that the 'p-multiple' property be enabled","p-label","Max Files",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","dragDropHeight","p-clean","","p-help","Height of drag drop area","p-label","Drag Drop Height","p-min","160",1,"po-md-4",3,"ngModelChange","ngModel"],["name","minSize","p-clean","","p-help","In megabytes","p-label","Min File Size",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","maxSize","p-clean","","p-help","In megabytes","p-label","Max File Size",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","formField","p-clean","","p-label","Form Field",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","URL","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","headers","p-help",'Ex.: {"Authorization": "12312414"}',"p-label","Headers",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-help","Select any options","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[4,"ngIf"],[1,"po-row","po-mt-1"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-sm-6","po-md-4"],["formControlName","icon","p-label","Icon",1,"po-sm-6","po-md-2",3,"p-options"],["formControlName","type","p-label","Type",1,"po-sm-6","po-md-2",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-sm-6","po-md-2"],["formControlName","visible","p-label","Visible",1,"po-sm-6","po-md-2"]],template:function(r,i){if(r&1){let d=T();n(0,"po-upload",2),f("ngModelChange",function(l){return m(d),h(i.upload,l)||(i.upload=l),u(l)}),b("p-custom-action-click",function(){return m(d),u(i.changeEvent("p-custom-action-click"))})("p-error",function(){return m(d),u(i.changeEvent("p-error"))})("p-success",function(){return m(d),u(i.changeEvent("p-success"))})("p-upload",function(){return m(d),u(i.changeEvent("p-upload"))}),t(),o(1,"hr"),n(2,"div",3),o(3,"po-info",4),ne(4,"json"),o(5,"po-info",5),t(),o(6,"hr"),n(7,"form",null,0)(9,"div",3)(10,"po-input",6),f("ngModelChange",function(l){return m(d),h(i.allowedExtensions,l)||(i.allowedExtensions=l),u(l)}),b("p-change",function(){return m(d),u(i.onChangeExtension())}),t(),n(11,"po-number",7),f("ngModelChange",function(l){return m(d),h(i.maxFiles,l)||(i.maxFiles=l),u(l)}),b("p-change",function(){return m(d),u(i.onChangeMaxFiles(i.maxFiles))}),t()(),n(12,"div",3)(13,"po-number",8),f("ngModelChange",function(l){return m(d),h(i.dragDropHeight,l)||(i.dragDropHeight=l),u(l)}),t(),n(14,"po-number",9),f("ngModelChange",function(l){return m(d),h(i.minSize,l)||(i.minSize=l),u(l)}),b("p-change",function(){return m(d),u(i.onChangeMinSize(i.minSize))}),t(),n(15,"po-number",10),f("ngModelChange",function(l){return m(d),h(i.maxSize,l)||(i.maxSize=l),u(l)}),b("p-change",function(){return m(d),u(i.onChangeMaxSize(i.maxSize))}),t()()(),o(16,"hr"),n(17,"form",null,1)(19,"div",3)(20,"po-input",11),f("ngModelChange",function(l){return m(d),h(i.label,l)||(i.label=l),u(l)}),t(),n(21,"po-input",12),f("ngModelChange",function(l){return m(d),h(i.help,l)||(i.help=l),u(l)}),t()(),n(22,"div",3)(23,"po-input",13),f("ngModelChange",function(l){return m(d),h(i.formField,l)||(i.formField=l),u(l)}),t(),n(24,"po-input",14),f("ngModelChange",function(l){return m(d),h(i.url,l)||(i.url=l),u(l)}),t()(),n(25,"div",3)(26,"po-input",15),f("ngModelChange",function(l){return m(d),h(i.headersLabs,l)||(i.headersLabs=l),u(l)}),b("p-change",function(l){return m(d),u(i.onChangeHeaders(l))}),t(),n(27,"po-input",16),f("ngModelChange",function(l){return m(d),h(i.literals,l)||(i.literals=l),u(l)}),b("p-change",function(){return m(d),u(i.changeLiterals())}),t(),n(28,"po-checkbox-group",17),f("ngModelChange",function(l){return m(d),h(i.properties,l)||(i.properties=l),u(l)}),t()(),J(29,je,8,3,"div",18),n(30,"div",19)(31,"po-button",20),b("p-click",function(){return m(d),u(i.restore())}),t()()()}r&2&&(g("ngModel",i.upload),c("p-auto-upload",i.properties.includes("autoupload"))("p-directory",i.properties.includes("directory"))("p-disabled",i.properties.includes("disabled"))("p-required-url",i.properties.includes("requiredUrl"))("p-disabled-remove-file",i.properties.includes("disabledRemoveFile"))("p-drag-drop",i.properties.includes("dragDrop"))("p-drag-drop-height",i.dragDropHeight)("p-form-field",i.formField)("p-help",i.help)("p-hide-select-button",i.properties.includes("selectButton"))("p-hide-restrictions-info",i.properties.includes("restrictionsInfo"))("p-hide-send-button",i.properties.includes("sendButton"))("p-label",i.label)("p-literals",i.customLiterals)("p-multiple",i.properties.includes("multiple"))("p-optional",i.properties.includes("optional"))("p-required",i.properties.includes("required"))("p-show-required",i.properties.includes("showRequired"))("p-restrictions",i.restrictions)("p-url",i.url)("p-headers",i.headers)("p-custom-action",i.action),s(3),c("p-value",ie(4,39,i.upload)),s(2),c("p-value",i.event),s(5),g("ngModel",i.allowedExtensions),s(),g("ngModel",i.maxFiles),s(2),g("ngModel",i.dragDropHeight),s(),g("ngModel",i.minSize),s(),g("ngModel",i.maxSize),s(5),g("ngModel",i.label),s(),g("ngModel",i.help),s(2),g("ngModel",i.formField),s(),g("ngModel",i.url),s(2),g("ngModel",i.headersLabs),s(),g("ngModel",i.literals),s(),g("ngModel",i.properties),c("p-options",i.propertiesOptions),s(),c("ngIf",i.properties.includes("showCustomAction")))},dependencies:[Y,j,R,z,O,B,ae,le,A,me,I,be,ge,M,ce,X,Z,oe],encapsulation:2})}return a})();var Ie=a=>({"docs-sample-code-tabs":a}),Pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-upload-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload Labs"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-labs/sample-po-upload-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-upload
  name="upload"
  [(ngModel)]="upload"
  [p-auto-upload]="properties.includes('autoupload')"
  [p-directory]="properties.includes('directory')"
  [p-disabled]="properties.includes('disabled')"
  [p-required-url]="properties.includes('requiredUrl')"
  [p-disabled-remove-file]="properties.includes('disabledRemoveFile')"
  [p-drag-drop]="properties.includes('dragDrop')"
  [p-drag-drop-height]="dragDropHeight"
  [p-form-field]="formField"
  [p-help]="help"
  [p-hide-select-button]="properties.includes('selectButton')"
  [p-hide-restrictions-info]="properties.includes('restrictionsInfo')"
  [p-hide-send-button]="properties.includes('sendButton')"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-multiple]="properties.includes('multiple')"
  [p-optional]="properties.includes('optional')"
  [p-required]="properties.includes('required')"
  [p-show-required]="properties.includes('showRequired')"
  [p-restrictions]="restrictions"
  [p-url]="url"
  [p-headers]="headers"
  [p-custom-action]="action"
  (p-custom-action-click)="changeEvent('p-custom-action-click')"
  (p-error)="changeEvent('p-error')"
  (p-success)="changeEvent('p-success')"
  (p-upload)="changeEvent('p-upload')"
>
</po-upload>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="upload | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #fRestrictions="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="allowedExtensions"
      [(ngModel)]="allowedExtensions"
      p-help="Enter the allowed extensions separated by comma"
      p-label="Allowed Extensions"
      p-placeholder=".png, .jpeg, .jpg"
      (p-change)="onChangeExtension()"
    >
    </po-input>

    <po-number
      class="po-md-6"
      name="maxFiles"
      [(ngModel)]="maxFiles"
      p-clean
      p-help="Requires that the 'p-multiple' property be enabled"
      p-label="Max Files"
      (p-change)="onChangeMaxFiles(maxFiles)"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-number
      class="po-md-4"
      name="dragDropHeight"
      [(ngModel)]="dragDropHeight"
      p-clean
      p-help="Height of drag drop area"
      p-label="Drag Drop Height"
      p-min="160"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="minSize"
      [(ngModel)]="minSize"
      p-clean
      p-help="In megabytes"
      p-label="Min File Size"
      (p-change)="onChangeMinSize(minSize)"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="maxSize"
      [(ngModel)]="maxSize"
      p-clean
      p-help="In megabytes"
      p-label="Max File Size"
      (p-change)="onChangeMaxSize(maxSize)"
    >
    </po-number>
  </div>
</form>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="formField" [(ngModel)]="formField" p-clean p-label="Form Field"> </po-input>

    <po-input class="po-md-6" name="url" [(ngModel)]="url" p-clean p-label="URL" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="headers"
      [(ngModel)]="headersLabs"
      p-help='Ex.: {"Authorization": "12312414"}'
      p-label="Headers"
      (p-change)="onChangeHeaders($event)"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-help="Select any options"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div *ngIf="properties.includes('showCustomAction')">
    <po-widget p-title="Action Button">
      <form [formGroup]="actionForm" class="po-row">
        <po-input class="po-sm-6 po-md-4" formControlName="label" p-label="Label" />
        <po-select class="po-sm-6 po-md-2" formControlName="icon" p-label="Icon" [p-options]="iconOptions" />
        <po-select class="po-sm-6 po-md-2" formControlName="type" p-label="Type" [p-options]="typeOptions" />
        <po-switch class="po-sm-6 po-md-2" formControlName="disabled" p-label="Disabled" />
        <po-switch class="po-sm-6 po-md-2" formControlName="visible" p-label="Visible" />
      </form>
    </po-widget>
  </div>

  <div class="po-row po-mt-1">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-labs/sample-po-upload-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {
  PoCheckboxGroupOption,
  PoProgressAction,
  PoSelectOption,
  PoUploadFileRestrictions,
  PoUploadLiterals
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-labs',
  templateUrl: './sample-po-upload-labs.component.html',
  standalone: false
})
export class SamplePoUploadLabsComponent implements OnInit {
  allowedExtensions: string;
  customLiterals: PoUploadLiterals;
  dragDropHeight: number;
  event: string;
  formField: string;
  help: string;
  label: string;
  literals: string;
  maxFiles: number;
  maxSize: number;
  minSize: number;
  properties: Array<string>;
  restrictions: PoUploadFileRestrictions;
  upload: Array<any>;
  url: string;
  headers: { [name: string]: string | Array<string> };
  headersLabs: string;
  action: PoProgressAction;
  actionForm: FormGroup;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'autoupload', label: 'Automatic upload' },
    { value: 'directory', label: 'Directory' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'disabledRemoveFile', label: 'Disabled Remove File' },
    { value: 'dragDrop', label: 'Drag Drop' },
    { value: 'requiredUrl', label: 'required Url' },
    { value: 'multiple', label: 'Multiple upload' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'restrictionsInfo', label: 'Hide Restrictions Info' },
    { value: 'selectButton', label: 'Hide Select Files Button' },
    { value: 'sendButton', label: 'Hide Send Files Button' },
    { value: 'showCustomAction', label: 'Add Custom Action to Progress' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-download', label: 'an an-download' },
    { value: 'an an-Server', label: 'an an-Server' },
    { value: 'an an-upload', label: 'an an-upload' },
    { value: 'an an-share', label: 'an an-share' }
  ];

  constructor(private fb: FormBuilder) {
    this.initializeActionForm();
  }

  initializeActionForm() {
    this.actionForm = this.fb.group({
      label: [''],
      icon: [''],
      type: ['default'],
      visible: [true],
      disabled: [false]
    });
  }

  ngOnInit() {
    this.restore();
    this.actionForm.valueChanges.subscribe(formValue => {
      this.updateAction(formValue);
    });
  }

  updateAction(formValue: any) {
    this.action = formValue;
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onChangeHeaders(headers) {
    try {
      this.headers = JSON.parse(headers);
    } catch {
      this.headers = undefined;
    }
  }
  onChangeExtension() {
    const allowedExtensions = this.allowedExtensions.split(',').map(allowedExtension => allowedExtension.trim());
    this.restrictions = Object.assign({}, this.restrictions, { allowedExtensions });
  }

  onChangeMaxFiles(maxFiles: number) {
    this.restrictions = Object.assign({}, this.restrictions, { maxFiles });
  }

  onChangeMaxSize(maxSize: number) {
    this.restrictions = Object.assign({}, this.restrictions, { maxFileSize: this.getValueInBytes(maxSize) });
  }

  onChangeMinSize(minSize: number) {
    this.restrictions = Object.assign({}, this.restrictions, { minFileSize: this.getValueInBytes(minSize) });
  }

  restore() {
    this.allowedExtensions = undefined;
    this.customLiterals = undefined;
    this.dragDropHeight = undefined;
    this.event = undefined;
    this.formField = undefined;
    this.label = undefined;
    this.help = undefined;
    this.literals = '';
    this.maxFiles = undefined;
    this.maxSize = undefined;
    this.minSize = undefined;
    this.properties = [];
    this.restrictions = {};
    this.upload = undefined;
    this.url = 'https://po-sample-api.onrender.com/v1/uploads/addFile';
    this.headers = undefined;
    this.headersLabs = undefined;
    this.actionForm.reset({ type: 'default', visible: true });
    this.action = { label: '', type: 'default' };
  }

  private getValueInBytes(value: number) {
    return 1048576 * value;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-labs"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",v(4,Ie,i.hideSampleCodeTabs)))},dependencies:[C,_,w,y,_e],encapsulation:2})}return a})();var We=["formOpportunity"],He=()=>({maxFileSize:"204800"}),Fe=(()=>{class a{poNotification;formOpportunity;biograph;linkedin;name;resume;uploadedResume;constructor(p){this.poNotification=p}ngOnInit(){this.uploadedResume=!1}apply(){this.formOpportunity.reset(),this.uploadedResume=!1,this.poNotification.success("You were applied successfully")}resumeUploadError(){this.uploadedResume=!1}resumeUploadSuccess(){this.uploadedResume=!0}static \u0275fac=function(r){return new(r||a)(U(Ee))};static \u0275cmp=S({type:a,selectors:[["sample-po-upload-resume"]],viewQuery:function(r,i){if(r&1&&D(We,7),r&2){let d;k(d=L())&&(i.formOpportunity=d.first)}},standalone:!1,decls:12,vars:7,consts:[["formOpportunity","ngForm"],[1,"po-row"],["name","name","p-clean","","p-label","Full Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","biograph","p-label","Biograph","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","linkedin","p-clean","","p-label","LinkedIn URL",1,"po-md-12",3,"ngModelChange","ngModel"],["name","resume","p-label","Resume","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-md-12",3,"ngModelChange","p-error","p-success","ngModel","p-restrictions"],["p-label","Apply",1,"po-md-4",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let d=T();n(0,"form",null,0)(2,"div",1)(3,"po-input",2),f("ngModelChange",function(l){return m(d),h(i.name,l)||(i.name=l),u(l)}),t()(),n(4,"div",1)(5,"po-textarea",3),f("ngModelChange",function(l){return m(d),h(i.biograph,l)||(i.biograph=l),u(l)}),t()(),n(6,"div",1)(7,"po-url",4),f("ngModelChange",function(l){return m(d),h(i.linkedin,l)||(i.linkedin=l),u(l)}),t()(),n(8,"div",1)(9,"po-upload",5),f("ngModelChange",function(l){return m(d),h(i.resume,l)||(i.resume=l),u(l)}),b("p-error",function(){return m(d),u(i.resumeUploadError())})("p-success",function(){return m(d),u(i.resumeUploadSuccess())}),t()(),n(10,"div",1)(11,"po-button",6),b("p-click",function(){return m(d),u(i.apply())}),t()()()}if(r&2){let d=V(1);s(3),g("ngModel",i.name),s(2),g("ngModel",i.biograph),s(2),g("ngModel",i.linkedin),s(2),g("ngModel",i.resume),c("p-restrictions",te(6,He)),s(2),c("p-disabled",d.invalid||!i.uploadedResume)}},dependencies:[j,R,z,O,B,A,I,K,M,Se],encapsulation:2})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-upload-resume-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - Resume"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-resume/sample-po-upload-resume.component.html"),t(),n(13,"pre",7),e(14,`<form #formOpportunity="ngForm">
  <div class="po-row">
    <po-input class="po-md-12" name="name" [(ngModel)]="name" p-clean p-label="Full Name" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" name="biograph" [(ngModel)]="biograph" p-label="Biograph" p-required> </po-textarea>
  </div>

  <div class="po-row">
    <po-url class="po-md-12" name="linkedin" [(ngModel)]="linkedin" p-clean p-label="LinkedIn URL"> </po-url>
  </div>

  <div class="po-row">
    <po-upload
      class="po-md-12"
      name="resume"
      [(ngModel)]="resume"
      p-label="Resume"
      p-required
      p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
      [p-restrictions]="{ maxFileSize: '204800' }"
      (p-error)="resumeUploadError()"
      (p-success)="resumeUploadSuccess()"
    >
    </po-upload>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4"
      p-label="Apply"
      [p-disabled]="formOpportunity.invalid || !uploadedResume"
      (p-click)="apply()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-resume/sample-po-upload-resume.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-resume',
  templateUrl: 'sample-po-upload-resume.component.html',
  standalone: false
})
export class SamplePoUploadResumeComponent implements OnInit {
  @ViewChild('formOpportunity', { static: true }) formOpportunity: UntypedFormControl;

  biograph: string;
  linkedin: string;
  name: string;
  resume: string;
  uploadedResume: boolean;

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.uploadedResume = false;
  }

  apply() {
    this.formOpportunity.reset();
    this.uploadedResume = false;

    this.poNotification.success('You were applied successfully');
  }

  resumeUploadError() {
    this.uploadedResume = false;
  }

  resumeUploadSuccess() {
    this.uploadedResume = true;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-resume"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",v(4,Ge,i.hideSampleCodeTabs)))},dependencies:[C,_,w,y,Fe],encapsulation:2})}return a})();var Ye=["upload"],Ke=["stepper"],Xe=["submitForm"],Ze=["sucessData"],$e=a=>({"po-invisible":a});function et(a,Re){if(a&1){let p=T();n(0,"div",8)(1,"div",9)(2,"p",11),e(3,"Confirm informations"),t()(),o(4,"po-info",29)(5,"po-info",30)(6,"po-info",31),n(7,"po-button",32),b("p-click",function(){m(p);let i=W();return u(i.confirmSubmit())}),t()()}if(a&2){let p=W();s(4),c("p-value",p.project[0].name||"N/D"),s(),c("p-value",p.title||"N/D"),s(),c("p-value",p.description||"N/D")}}var qe=(()=>{class a{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close()},label:"Return"};description;project=[];restrictions={allowedExtensions:[".zip",".7z",".tar",".wim"]};title;ngOnInit(){this.newSubmit()}canSubmitProject(){return!!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first()}submitProject(){this.upload.sendFiles(),this.stepper.next()}newSubmit(){this.project=[],this.title=void 0,this.description=void 0}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-upload-rs"]],viewQuery:function(r,i){if(r&1&&(D(Ye,7),D(Ke,7),D(Xe,7),D(Ze,7)),r&2){let d;k(d=L())&&(i.upload=d.first),k(d=L())&&(i.stepper=d.first),k(d=L())&&(i.submitForm=d.first),k(d=L())&&(i.sucessData=d.first)}},standalone:!1,decls:47,vars:15,consts:[["stepper",""],["submitForm","ngForm"],["upload",""],["sucessData",""],[1,"po-row"],["p-orientation","vertical","p-step-icons","","p-step-size","42",1,"po-lg-10","po-offset-lg-2","po-offset-xl-2"],["p-label","Welcome"],["p-title","Realize & Show",1,"po-lg-8","po-mt-2"],[1,"tht-row"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-text-large"],["p-label","Yes!","p-kind","primary",1,"po-sm-12","po-mt-2",3,"p-click"],["p-label","Submit",3,"p-can-active-next-step"],[1,"po-lg-10"],[1,"po-font-subtitle"],[1,"po-font-text-small-bold"],[1,"po-font-title","po-lg-2"],["p-icon","an an-cloud-arrow-up",1,"po-clickable",3,"click"],["p-icon","an an-fill an-x-circle",1,"po-clickable",3,"click","ngClass"],[1,"po-sm-12","po-mt-3","po-font-text-bold"],["name","project","p-hide-select-button","","p-hide-send-button","","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-sm-12",3,"ngModelChange","ngModel","p-restrictions"],["name","title","p-label","Title","p-placeholder","Be creative","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","description","p-label","Description","p-maxlength","140","p-placeholder","Resume on few words","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["p-label","Done",1,"po-sm-12","po-mt-2",3,"p-click","p-disabled"],["p-label","Confirm"],["class","tht-row",4,"ngIf"],["p-title","Confirmation",3,"p-primary-action"],[1,"po-sm-12","po-font-title"],["p-label","File name",1,"po-md-4",3,"p-value"],["p-label","Title",1,"po-md-4",3,"p-value"],["p-label","Description",1,"po-md-4",3,"p-value"],["p-label","Confirm",1,"po-sm-12","po-mt-2","po-mb-2",3,"p-click"]],template:function(r,i){if(r&1){let d=T();n(0,"div",4)(1,"po-stepper",5,0)(3,"po-step",6)(4,"po-widget",7)(5,"div",8)(6,"div",9)(7,"h1",10),e(8,"Welcome, TOTVER!"),t(),n(9,"p",11),e(10,"Let's submit your project?"),t()()(),n(11,"div",8)(12,"po-button",12),b("p-click",function(){m(d);let l=V(2);return u(l.next())}),t()()()(),n(13,"po-step",13)(14,"po-widget",7)(15,"form",null,1)(17,"div",4)(18,"div",14)(19,"div",4)(20,"p",15),e(21,"Please, select your project:"),t()(),n(22,"div",4)(23,"p",16),e(24,"*Upload a zip file containing your project."),t()()(),n(25,"div",17)(26,"po-icon",18),b("click",function(){m(d);let l=V(32);return u(l.selectFiles())}),t(),n(27,"po-icon",19),b("click",function(){m(d);let l=V(32);return u(l.clear())}),t()()(),n(28,"div",4)(29,"label",20),e(30,"Attached"),t(),n(31,"po-upload",21,2),f("ngModelChange",function(l){return m(d),h(i.project,l)||(i.project=l),u(l)}),t()(),n(33,"div",4)(34,"po-input",22),f("ngModelChange",function(l){return m(d),h(i.title,l)||(i.title=l),u(l)}),t()(),n(35,"div",4)(36,"po-textarea",23),f("ngModelChange",function(l){return m(d),h(i.description,l)||(i.description=l),u(l)}),t()(),n(37,"div",8)(38,"po-button",24),b("p-click",function(){return m(d),u(i.submitProject())}),t()()()()(),n(39,"po-step",25)(40,"po-widget",7),J(41,et,8,3,"div",26),t()()()(),n(42,"po-modal",27,3)(44,"div",4)(45,"p",28),e(46,"Project successfully submited!"),t()()()}r&2&&(s(13),c("p-can-active-next-step",i.canSubmitProject.bind(i)),s(14),c("ngClass",v(13,$e,i.project.length<1)),s(2),ee("po-invisible",i.project.length<1),s(2),g("ngModel",i.project),c("p-restrictions",i.restrictions),s(3),g("ngModel",i.title),c("p-disabled",i.project.length<1),s(2),g("ngModel",i.description),c("p-disabled",i.project.length<1),s(2),c("p-disabled",i.canSubmitProject()),s(3),c("ngIf",i.canSubmitProject()),s(),c("p-primary-action",i.confirm))},dependencies:[C,Y,j,R,z,O,B,A,I,K,M,se,X,ue,fe,xe,Z],encapsulation:2})}return a})();var nt=a=>({"docs-sample-code-tabs":a}),Ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-upload-rs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - Realize & Show"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-rs/sample-po-upload-rs.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-stepper
    #stepper
    class="po-lg-10 po-offset-lg-2 po-offset-xl-2"
    p-orientation="vertical"
    p-step-icons
    p-step-size="42"
  >
    <po-step p-label="Welcome">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        <div class="tht-row">
          <div class="po-sm-12">
            <h1 class="po-font-title">Welcome, TOTVER!</h1>
            <p class="po-font-text-large">Let's submit your project?</p>
          </div>
        </div>

        <div class="tht-row">
          <po-button class="po-sm-12 po-mt-2" p-label="Yes!" p-kind="primary" (p-click)="stepper.next()"> </po-button>
        </div>
      </po-widget>
    </po-step>

    <po-step p-label="Submit" [p-can-active-next-step]="canSubmitProject.bind(this)">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        <form #submitForm="ngForm">
          <div class="po-row">
            <div class="po-lg-10">
              <div class="po-row">
                <p class="po-font-subtitle">Please, select your project:</p>
              </div>

              <div class="po-row">
                <p class="po-font-text-small-bold">*Upload a zip file containing your project.</p>
              </div>
            </div>

            <div class="po-font-title po-lg-2">
              <po-icon p-icon="an an-cloud-arrow-up" class="po-clickable" (click)="upload.selectFiles()"></po-icon>
              <po-icon
                p-icon="an an-fill an-x-circle"
                class="po-clickable"
                [ngClass]="{ 'po-invisible': project.length < 1 }"
                (click)="upload.clear()"
              ></po-icon>
            </div>
          </div>

          <div class="po-row">
            <label class="po-sm-12 po-mt-3 po-font-text-bold" [class.po-invisible]="project.length < 1">Attached</label>
            <po-upload
              #upload
              class="po-sm-12"
              name="project"
              [(ngModel)]="project"
              p-hide-select-button
              p-hide-send-button
              p-required
              p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
              [p-restrictions]="restrictions"
            >
            </po-upload>
          </div>

          <div class="po-row">
            <po-input
              class="po-sm-12"
              name="title"
              [(ngModel)]="title"
              p-label="Title"
              p-placeholder="Be creative"
              p-required
              [p-disabled]="project.length < 1"
            >
            </po-input>
          </div>

          <div class="po-row">
            <po-textarea
              class="po-sm-12"
              name="description"
              [(ngModel)]="description"
              p-label="Description"
              p-maxlength="140"
              p-placeholder="Resume on few words"
              p-required
              [p-disabled]="project.length < 1"
            >
            </po-textarea>
          </div>

          <div class="tht-row">
            <po-button
              class="po-sm-12 po-mt-2"
              p-label="Done"
              [p-disabled]="canSubmitProject()"
              (p-click)="submitProject()"
            >
            </po-button>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Confirm">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        <div class="tht-row" *ngIf="canSubmitProject()">
          <div class="po-sm-12">
            <p class="po-font-text-large">Confirm informations</p>
          </div>

          <po-info class="po-md-4" p-label="File name" [p-value]="project[0].name || 'N/D'"> </po-info>

          <po-info class="po-md-4" p-label="Title" [p-value]="title || 'N/D'"> </po-info>

          <po-info class="po-md-4" p-label="Description" [p-value]="description || 'N/D'"> </po-info>

          <po-button class="po-sm-12 po-mt-2 po-mb-2" p-label="Confirm" (p-click)="confirmSubmit()"> </po-button>
        </div>
      </po-widget>
    </po-step>
  </po-stepper>
</div>

<po-modal #sucessData p-title="Confirmation" [p-primary-action]="confirm">
  <div class="po-row">
    <p class="po-sm-12 po-font-title">Project successfully submited!</p>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-rs/sample-po-upload-rs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoStepperComponent, PoUploadComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-rs',
  templateUrl: 'sample-po-upload-rs.component.html',
  standalone: false
})
export class SamplePoUploadRsComponent implements OnInit {
  @ViewChild('upload', { static: true }) upload: PoUploadComponent;
  @ViewChild('stepper', { static: true }) stepper: PoStepperComponent;
  @ViewChild('submitForm', { static: true }) submitForm: NgForm;
  @ViewChild('sucessData', { static: true }) sucessData: PoModalComponent;

  confirm: PoModalAction = {
    action: () => {
      this.sucessData.close();
    },
    label: 'Return'
  };

  description: string;
  project: Array<any> = [];
  restrictions = { allowedExtensions: ['.zip', '.7z', '.tar', '.wim'] };
  title: string;

  ngOnInit() {
    this.newSubmit();
  }

  canSubmitProject() {
    return !!(this.project && this.project.length) && this.title && this.description;
  }

  confirmSubmit() {
    this.sucessData.open();
    this.newSubmit();
    this.stepper.first();
  }

  submitProject() {
    this.upload.sendFiles();
    this.stepper.next();
  }

  private newSubmit() {
    this.project = [];
    this.title = undefined;
    this.description = undefined;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-rs"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",v(4,nt,i.hideSampleCodeTabs)))},dependencies:[C,_,w,y,qe],encapsulation:2})}return a})();var Te=(()=>{class a{customAction={icon:"an an-download",type:"default",visible:!1};uploadSuccess(){this.customAction.visible=!0}onCustomActionClick(p){if(!p.rawFile){console.error("Arquivo inv\xE1lido ou n\xE3o encontrado.");return}this.downloadFile(p.rawFile)}downloadFile(p){let r=URL.createObjectURL(p),i=document.createElement("a");i.href=r,i.download=p.name,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-upload-download"]],standalone:!1,decls:1,vars:2,consts:[["name","upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-custom-action-click","p-success","p-custom-action","p-multiple"]],template:function(r,i){r&1&&(n(0,"po-upload",0),b("p-custom-action-click",function(E){return i.onCustomActionClick(E)})("p-success",function(){return i.uploadSuccess()}),t()),r&2&&c("p-custom-action",i.customAction)("p-multiple",!0)},dependencies:[M],encapsulation:2})}return a})();var at=a=>({"docs-sample-code-tabs":a}),De=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-upload-download-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - with Download Button"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-download/sample-po-upload-download.component.html"),t(),n(13,"pre",7),e(14,`<po-upload
  name="upload"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-custom-action]="customAction"
  (p-custom-action-click)="onCustomActionClick($event)"
  [p-multiple]="true"
  (p-success)="uploadSuccess()"
></po-upload>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-download/sample-po-upload-download.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-download',
  templateUrl: 'sample-po-upload-download.component.html',
  standalone: false
})
export class SamplePoUploadDownloadComponent {
  customAction: PoProgressAction = {
    icon: 'an an-download',
    type: 'default',
    visible: false
  };

  uploadSuccess() {
    this.customAction.visible = true;
  }

  onCustomActionClick(file: { rawFile: File }) {
    if (!file.rawFile) {
      console.error('Arquivo inv\xE1lido ou n\xE3o encontrado.');
      return;
    }

    this.downloadFile(file.rawFile);
  }

  downloadFile(rawFile: File) {
    // Cria uma URL tempor\xE1ria para o arquivo
    const url = URL.createObjectURL(rawFile);

    // Cria um link <a> tempor\xE1rio para iniciar o download
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = rawFile.name; // Define o nome do arquivo para o download
    anchor.style.display = 'none';

    // Adiciona o link ao DOM, aciona o clique e remove o link
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    // Libera a mem\xF3ria utilizada pela URL tempor\xE1ria
    URL.revokeObjectURL(url);
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-download"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",v(4,at,i.hideSampleCodeTabs)))},dependencies:[C,_,w,y,Te],encapsulation:2})}return a})();var ke=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-upload-doc"]],standalone:!1,decls:1429,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-html"],[1,"language-typescript"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoUploadComponent"),t()(),n(21,"div",2)(22,"p"),e(23,"O componente "),n(24,"code"),e(25,"po-upload"),t(),e(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),t(),n(27,"ul")(28,"li"),e(29,"M\xFAltipla sele\xE7\xE3o, onde o usu\xE1rio pode enviar mais de um arquivo ao servidor."),t(),n(30,"li"),e(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),t(),n(32,"li"),e(33,"Restri\xE7\xF5es de formatos de arquivo e tamanho."),t(),n(34,"li"),e(35,"Fun\xE7\xE3o de sucesso que ser\xE1 disparada quando os arquivos forem enviados com sucesso."),t(),n(36,"li"),e(37,"Fun\xE7\xE3o de erro que ser\xE1 disparada quando houver erro no envio dos arquivos."),t(),n(38,"li"),e(39,"Permite habilitar uma \xE1rea onde os arquivos podem ser arrastados. "),t()()(),n(40,"div",6)(41,"h4",7),e(42,"Seletor"),t(),n(43,"pre",8),e(44,`<po-upload
    p-auto-focus="boolean"
    p-auto-upload="boolean"
    p-custom-action="PoProgressAction"
    (p-custom-action-click)="EventEmitter"
    p-directory="boolean"
    p-disabled="boolean"
    p-disabled-remove-file="boolean"
    p-drag-drop="boolean"
    p-drag-drop-height="number"
    p-restrictions="PoUploadFileRestrictions"
    p-form-field="string"
    p-headers="{
    [name: string]: string | Array<string>;
}"
    p-help="string"
    p-hide-restrictions-info="boolean"
    p-hide-select-button="boolean"
    p-hide-send-button="boolean"
    p-multiple="boolean"
    p-label="string"
    p-literals="PoUploadLiterals"
    name="string"
    (ng-model-change)="EventEmitter"
    (p-error)="EventEmitter"
    (p-success)="EventEmitter"
    (p-upload)="EventEmitter"
    p-optional="boolean"
    p-required="boolean"
    p-required-url="boolean"
    p-show-required="boolean"
    p-url="string" >
</po-upload>
`),t()(),n(45,"h4",9),e(46,"Propriedades"),t(),n(47,"table",10)(48,"tr",11)(49,"th",12),e(50,"Nome"),t(),n(51,"th",12),e(52,"Tipo"),t(),n(53,"th",12),e(54,"Padr\xE3o"),t(),n(55,"th",12),e(56,"Descri\xE7\xE3o"),t()(),n(57,"tr",13)(58,"td",14)(59,"div",15)(60,"span",16),e(61," p-auto-focus"),o(62,"br"),t()()(),n(63,"td",17)(64,"code",18),e(65,"boolean"),t()(),n(66,"td",19)(67,"p")(68,"code"),e(69,"false"),t()()(),n(70,"td",20)(71,"em")(72,"strong"),e(73,"(opcional)"),t()(),n(74,"p"),e(75,"Aplica foco no elemento ao ser iniciado."),t(),n(76,"blockquote")(77,"p"),e(78,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(79,"tr",13)(80,"td",14)(81,"div",15)(82,"span",16),e(83," p-auto-upload"),o(84,"br"),t()()(),n(85,"td",17)(86,"code",18),e(87,"boolean"),t()(),n(88,"td",19)(89,"p")(90,"code"),e(91,"false"),t()()(),n(92,"td",20)(93,"em")(94,"strong"),e(95,"(opcional)"),t()(),n(96,"p"),e(97,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),n(98,"blockquote")(99,"p"),e(100,"Esta propriedade funciona somente se a propriedade "),n(101,"code"),e(102,"p-url"),t(),e(103," tiver um valor atribu\xEDdo."),t()()()(),n(104,"tr",13)(105,"td",14)(106,"div",15)(107,"span",16),e(108," p-custom-action"),o(109,"br"),t()()(),n(110,"td",17)(111,"code",21),e(112,"PoProgressAction"),t()(),n(113,"td",19),e(114,"-"),t(),n(115,"td",20)(116,"em")(117,"strong"),e(118,"(opcional)"),t()(),n(119,"p"),e(120,"Define uma a\xE7\xE3o personalizada no componente "),n(121,"code"),e(122,"po-upload"),t(),e(123,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),n(124,"p"),e(125,"A a\xE7\xE3o deve implementar a interface "),n(126,"strong"),e(127,"PoProgressAction"),t(),e(128,", permitindo configurar propriedades como:"),t(),n(129,"ul")(130,"li")(131,"code"),e(132,"label"),t(),e(133,": Texto do bot\xE3o."),t(),n(134,"li")(135,"code"),e(136,"icon"),t(),e(137,": \xCDcone a ser exibido no bot\xE3o."),t(),n(138,"li")(139,"code"),e(140,"type"),t(),e(141,": Tipo de bot\xE3o (ex.: "),n(142,"code"),e(143,"danger"),t(),e(144," ou "),n(145,"code"),e(146,"default"),t(),e(147,")."),t(),n(148,"li")(149,"code"),e(150,"disabled"),t(),e(151,": Indica se o bot\xE3o deve estar desabilitado."),t(),n(152,"li")(153,"code"),e(154,"visible"),t(),e(155,": Indica se o bot\xE3o deve estar vis\xEDvel."),t()(),n(156,"p")(157,"strong"),e(158,"Exemplo de uso:"),t()(),n(159,"pre")(160,"code",22),e(161,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>`),t()(),n(162,"pre")(163,"code",23),e(164,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}`),t()()()(),n(165,"tr",13)(166,"td",14)(167,"div",24)(168,"span",25),e(169," (p-custom-action-click)"),o(170,"br"),t()()(),n(171,"td",17)(172,"code",26),e(173,"EventEmitter"),t()(),n(174,"td",19),e(175,"-"),t(),n(176,"td",20)(177,"em")(178,"strong"),e(179,"(opcional)"),t()(),n(180,"p"),e(181,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),n(182,"code"),e(183,"p-custom-action"),t(),e(184,"."),t(),n(185,"p"),e(186,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),n(187,"p")(188,"strong"),e(189,"Exemplo de uso:"),t()(),n(190,"pre")(191,"code",22),e(192,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>`),t()(),n(193,"pre")(194,"code",23),e(195,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
  // L\xF3gica para download do arquivo
  this.downloadFile(file);
}

downloadFile(file: PoUploadFile) {
  // Exemplo de download
  console.log(\`Iniciando o download do arquivo: \${file.name}\`);
}`),t()()()(),n(196,"tr",13)(197,"td",14)(198,"div",15)(199,"span",16),e(200," p-directory"),o(201,"br"),t()()(),n(202,"td",17)(203,"code",18),e(204,"boolean"),t()(),n(205,"td",19)(206,"p")(207,"code"),e(208,"false"),t()()(),n(209,"td",20)(210,"em")(211,"strong"),e(212,"(opcional)"),t()(),n(213,"p"),e(214,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(215,"blockquote")(216,"p"),e(217,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(218,"blockquote")(219,"p"),e(220,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(221,"strong"),e(222,"Internet Explorer"),t(),e(223,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()()()(),n(224,"tr",13)(225,"td",14)(226,"div",15)(227,"span",16),e(228," p-disabled"),o(229,"br"),t()()(),n(230,"td",17)(231,"code",18),e(232,"boolean"),t()(),n(233,"td",19),e(234,"-"),t(),n(235,"td",20)(236,"em")(237,"strong"),e(238,"(opcional)"),t()(),n(239,"p"),e(240,"Indica que o campo ser\xE1 desabilitado."),t()()(),n(241,"tr",13)(242,"td",14)(243,"div",15)(244,"span",16),e(245," p-disabled-remove-file"),o(246,"br"),t()()(),n(247,"td",17)(248,"code",18),e(249,"boolean"),t()(),n(250,"td",19)(251,"p")(252,"code"),e(253,"false"),t()()(),n(254,"td",20)(255,"em")(256,"strong"),e(257,"(opcional)"),t()(),n(258,"p"),e(259,"Desabilita bot\xE3o de remover o(s) arquivo(s) selecionado(s)."),t()()(),n(260,"tr",13)(261,"td",14)(262,"div",15)(263,"span",16),e(264," p-drag-drop"),o(265,"br"),t()()(),n(266,"td",17)(267,"code",18),e(268,"boolean"),t()(),n(269,"td",19)(270,"p")(271,"code"),e(272,"false"),t()()(),n(273,"td",20)(274,"em")(275,"strong"),e(276,"(opcional)"),t()(),n(277,"p"),e(278,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(279,"blockquote")(280,"p"),e(281,"Recomendamos utilizar apenas um "),n(282,"code"),e(283,"po-upload"),t(),e(284," com esta funcionalidade por tela."),t()()()(),n(285,"tr",13)(286,"td",14)(287,"div",15)(288,"span",16),e(289," p-drag-drop-height"),o(290,"br"),t()()(),n(291,"td",17)(292,"code",27),e(293,"number"),t()(),n(294,"td",19)(295,"p")(296,"code"),e(297,"320"),t()()(),n(298,"td",20)(299,"em")(300,"strong"),e(301,"(opcional)"),t()(),n(302,"p"),e(303,"Define em "),n(304,"em"),e(305,"pixels"),t(),e(306," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(307,"code"),e(308,"160px"),t(),e(309,"."),t(),n(310,"blockquote")(311,"p"),e(312,"Esta propriedade funciona somente se a propriedade "),n(313,"code"),e(314,"p-drag-drop"),t(),e(315," estiver habilitada."),t()()()(),n(316,"tr",13)(317,"td",14)(318,"div",15)(319,"span",16),e(320," p-restrictions"),o(321,"br"),t()()(),n(322,"td",17)(323,"code",28),e(324,"PoUploadFileRestrictions"),t()(),n(325,"td",19),e(326,"-"),t(),n(327,"td",20)(328,"em")(329,"strong"),e(330,"(opcional)"),t()(),n(331,"p"),e(332,"Objeto que segue a defini\xE7\xE3o da interface "),n(333,"code"),e(334,"PoUploadFileRestrictions"),t(),e(335,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t()()(),n(336,"tr",13)(337,"td",14)(338,"div",15)(339,"span",16),e(340," p-form-field"),o(341,"br"),t()()(),n(342,"td",17)(343,"code",29),e(344,"string"),t()(),n(345,"td",19)(346,"p")(347,"code"),e(348,"files"),t()()(),n(349,"td",20)(350,"em")(351,"strong"),e(352,"(opcional)"),t()(),n(353,"p"),e(354,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(355,"code"),e(356,"p-url"),t(),e(357,"."),t()()(),n(358,"tr",13)(359,"td",14)(360,"div",15)(361,"span",16),e(362," p-headers"),o(363,"br"),t()()(),n(364,"td",17)(365,"code",30),e(366,"{ [name: string]: string "),t(),n(367,"code",31),e(368,` Array<string>;
}`),t()(),n(369,"td",19),e(370,"-"),t(),n(371,"td",20)(372,"p"),e(373,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t()()(),n(374,"tr",13)(375,"td",14)(376,"div",15)(377,"span",16),e(378," p-help"),o(379,"br"),t()()(),n(380,"td",17)(381,"code",29),e(382,"string"),t()(),n(383,"td",19),e(384,"-"),t(),n(385,"td",20)(386,"em")(387,"strong"),e(388,"(opcional)"),t()(),n(389,"p"),e(390,"Texto de apoio para o campo."),t()()(),n(391,"tr",13)(392,"td",14)(393,"div",15)(394,"span",16),e(395," p-hide-restrictions-info"),o(396,"br"),t()()(),n(397,"td",17)(398,"code",18),e(399,"boolean"),t()(),n(400,"td",19)(401,"p")(402,"code"),e(403,"false"),t()()(),n(404,"td",20)(405,"em")(406,"strong"),e(407,"(opcional)"),t()(),n(408,"p"),e(409,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t()()(),n(410,"tr",13)(411,"td",14)(412,"div",15)(413,"span",16),e(414," p-hide-select-button"),o(415,"br"),t()()(),n(416,"td",17)(417,"code",18),e(418,"boolean"),t()(),n(419,"td",19)(420,"p")(421,"code"),e(422,"false"),t()()(),n(423,"td",20)(424,"em")(425,"strong"),e(426,"(opcional)"),t()(),n(427,"p"),e(428,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(429,"blockquote")(430,"p"),e(431,"Caso o valor definido seja "),n(432,"code"),e(433,"true"),t(),e(434,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(435,"code"),e(436,"selectFiles()"),t(),e(437," para sele\xE7\xE3o de arquivos."),t()()()(),n(438,"tr",13)(439,"td",14)(440,"div",15)(441,"span",16),e(442," p-hide-send-button"),o(443,"br"),t()()(),n(444,"td",17)(445,"code",18),e(446,"boolean"),t()(),n(447,"td",19)(448,"p")(449,"code"),e(450,"false"),t()()(),n(451,"td",20)(452,"em")(453,"strong"),e(454,"(opcional)"),t()(),n(455,"p"),e(456,"Omite o bot\xE3o de envio de arquivos."),t(),n(457,"blockquote")(458,"p"),e(459,"Caso o valor definido seja "),n(460,"code"),e(461,"true"),t(),e(462,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(463,"code"),e(464,"sendFiles()"),t(),e(465," para envio do(s) arquivo(s) selecionado(s)."),t()()()(),n(466,"tr",13)(467,"td",14)(468,"div",15)(469,"span",16),e(470," p-multiple"),o(471,"br"),t()()(),n(472,"td",17)(473,"code",18),e(474,"boolean"),t()(),n(475,"td",19),e(476,"-"),t(),n(477,"td",20)(478,"em")(479,"strong"),e(480,"(opcional)"),t()(),n(481,"p"),e(482,"Define se pode selecionar mais de um arquivo."),t(),n(483,"blockquote")(484,"p"),e(485,"Se utilizada a "),n(486,"code"),e(487,"p-directory"),t(),e(488,", habilita-se automaticamente esta propriedade."),t()()()(),n(489,"tr",13)(490,"td",14)(491,"div",15)(492,"span",16),e(493," p-label"),o(494,"br"),t()()(),n(495,"td",17)(496,"code",29),e(497,"string"),t()(),n(498,"td",19),e(499,"-"),t(),n(500,"td",20)(501,"em")(502,"strong"),e(503,"(opcional)"),t()(),n(504,"p"),e(505,"R\xF3tulo do campo."),t()()(),n(506,"tr",13)(507,"td",14)(508,"div",15)(509,"span",16),e(510," p-literals"),o(511,"br"),t()()(),n(512,"td",17)(513,"code",32),e(514,"PoUploadLiterals"),t()(),n(515,"td",19),e(516,"-"),t(),n(517,"td",20)(518,"em")(519,"strong"),e(520,"(opcional)"),t()(),n(521,"p"),e(522,"Objeto com as literais usadas no "),n(523,"code"),e(524,"po-upload"),t(),e(525,"."),t(),n(526,"p"),e(527,"Existem duas maneiras de customizar o componente:"),t(),n(528,"ul")(529,"li"),e(530,"passando um objeto implementando a interface "),n(531,"code"),e(532,"PoUploadLiterals"),t(),e(533," com todas as literais dispon\xEDveis;"),t(),n(534,"li"),e(535,"passando apenas as literais que deseja customizar:"),n(536,"pre")(537,"code"),e(538,`const customLiterals: PoUploadLiterals = {
 folders: 'Pastas',
 selectFile: 'Buscar arquivo',
 startSending: 'Enviar'
};`),t()()()(),n(539,"p"),e(540,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),t(),n(541,"pre")(542,"code"),e(543,`<po-upload
  [p-literals]="customLiterals">
</po-upload>`),t()(),n(544,"blockquote")(545,"p"),e(546,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),n(547,"em"),e(548,"browser"),t(),e(549," (pt, en, es, ru)."),t()()()(),n(550,"tr",13)(551,"td",14)(552,"div",15)(553,"span",16),e(554," name"),o(555,"br"),t()()(),n(556,"td",17)(557,"code",29),e(558,"string"),t()(),n(559,"td",19),e(560,"-"),t(),n(561,"td",20)(562,"p"),e(563,"Define o valor do atributo "),n(564,"code"),e(565,"name"),t(),e(566," do componente."),t()()(),n(567,"tr",13)(568,"td",14)(569,"div",24)(570,"span",25),e(571," (ngModelChange)"),o(572,"br"),t()()(),n(573,"td",17)(574,"code",26),e(575,"EventEmitter"),t()(),n(576,"td",19),e(577,"-"),t(),n(578,"td",20)(579,"em")(580,"strong"),e(581,"(opcional)"),t()(),n(582,"p"),e(583,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da "),n(584,"em"),e(585,"tag"),t(),n(586,"code"),e(587,"form"),t(),e(588,"."),t(),n(589,"p"),e(590,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),n(591,"code"),e(592,"strictTemplates"),t(),e(593,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),t(),n(594,"pre")(595,"code"),e(596,'<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>'),t()()()(),n(597,"tr",13)(598,"td",14)(599,"div",24)(600,"span",25),e(601," (p-error)"),o(602,"br"),t()()(),n(603,"td",17)(604,"code",26),e(605,"EventEmitter"),t()(),n(606,"td",19),e(607,"-"),t(),n(608,"td",20)(609,"em")(610,"strong"),e(611,"(opcional)"),t()(),n(612,"p"),e(613,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(614,"blockquote")(615,"p"),e(616,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(617,"code"),e(618,"HttpErrorResponse"),t(),e(619,"."),t()()()(),n(620,"tr",13)(621,"td",14)(622,"div",24)(623,"span",25),e(624," (p-success)"),o(625,"br"),t()()(),n(626,"td",17)(627,"code",26),e(628,"EventEmitter"),t()(),n(629,"td",19),e(630,"-"),t(),n(631,"td",20)(632,"em")(633,"strong"),e(634,"(opcional)"),t()(),n(635,"p"),e(636,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(637,"blockquote")(638,"p"),e(639,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(640,"code"),e(641,"HttpResponse"),t(),e(642,"."),t()()()(),n(643,"tr",13)(644,"td",14)(645,"div",24)(646,"span",25),e(647," (p-upload)"),o(648,"br"),t()()(),n(649,"td",17)(650,"code",26),e(651,"EventEmitter"),t()(),n(652,"td",19),e(653,"-"),t(),n(654,"td",20)(655,"em")(656,"strong"),e(657,"(opcional)"),t()(),n(658,"p"),e(659,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(660,"blockquote")(661,"p"),e(662,"data, nesta propriedade pode ser informado algum dado"),t()(),n(663,"pre")(664,"code"),e(665,"event.data = {id: 'id do usu\xE1rio'};"),t()(),n(666,"blockquote")(667,"p"),e(668,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),n(669,"code"),e(670,"data"),t(),e(671,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),t()(),n(672,"pre")(673,"code"),e(674,"event.extraFormData = {id: 'id do usu\xE1rio'};"),t()()()(),n(675,"tr",13)(676,"td",14)(677,"div",15)(678,"span",16),e(679," p-optional"),o(680,"br"),t()()(),n(681,"td",17)(682,"code",18),e(683,"boolean"),t()(),n(684,"td",19)(685,"p")(686,"code"),e(687,"false"),t()()(),n(688,"td",20)(689,"em")(690,"strong"),e(691,"(opcional)"),t()(),n(692,"p"),e(693,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(694,"blockquote")(695,"p"),e(696,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(697,"ul")(698,"li"),e(699,"O campo conter "),n(700,"code"),e(701,"p-required"),t(),e(702,";"),t(),n(703,"li"),e(704,"N\xE3o possuir "),n(705,"code"),e(706,"p-help"),t(),e(707," e/ou "),n(708,"code"),e(709,"p-label"),t(),e(710,"."),t()()()(),n(711,"tr",13)(712,"td",14)(713,"div",15)(714,"span",16),e(715," p-required"),o(716,"br"),t()()(),n(717,"td",17)(718,"code",18),e(719,"boolean"),t()(),n(720,"td",19)(721,"p")(722,"code"),e(723,"false"),t()()(),n(724,"td",20)(725,"em")(726,"strong"),e(727,"(opcional)"),t()(),n(728,"p"),e(729,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),n(730,"tr",13)(731,"td",14)(732,"div",15)(733,"span",16),e(734," p-required-url"),o(735,"br"),t()()(),n(736,"td",17)(737,"code",18),e(738,"boolean"),t()(),n(739,"td",19)(740,"p")(741,"code"),e(742,"true"),t()()(),n(743,"td",20)(744,"em")(745,"strong"),e(746,"(opcional)"),t()(),n(747,"p"),e(748,"Define se a propriedade "),n(749,"code"),e(750,"p-url"),t(),e(751," \xE9 obrigat\xF3ria."),t(),n(752,"p"),e(753,"Caso a propriedade seja definida como "),n(754,"code"),e(755,"false"),t(),e(756,":"),t(),n(757,"ul")(758,"li"),e(759,'o bot\xE3o de "Selecionar arquivo" ficar\xE1 habilitado mesmo sem a propriedade '),n(760,"code"),e(761,"p-url"),t(),e(762," definida."),t(),n(763,"li"),e(764,'o bot\xE3o "Iniciar envio" ficar\xE1 oculto at\xE9 que a propriedade '),n(765,"code"),e(766,"p-url"),t(),e(767," seja definida."),t()(),n(768,"blockquote")(769,"p"),e(770,"Se utilizada com a propriedade "),n(771,"code"),e(772,"p-auto-upload"),t(),e(773," definida como "),n(774,"code"),e(775,"true"),t(),e(776," ser\xE1 necess\xE1rio definir a propriedade "),n(777,"code"),e(778,"p-url"),t(),e(779,"."),t()()()(),n(780,"tr",13)(781,"td",14)(782,"div",15)(783,"span",16),e(784," p-show-required"),o(785,"br"),t()()(),n(786,"td",17)(787,"code",18),e(788,"boolean"),t()(),n(789,"td",19),e(790,"-"),t(),n(791,"td",20)(792,"p"),e(793,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(794,"blockquote")(795,"p"),e(796,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(797,"ul")(798,"li"),e(799,"N\xE3o possuir "),n(800,"code"),e(801,"p-help"),t(),e(802," e/ou "),n(803,"code"),e(804,"p-label"),t(),e(805,"."),t()()()(),n(806,"tr",13)(807,"td",14)(808,"div",15)(809,"span",16),e(810," p-url"),o(811,"br"),t()()(),n(812,"td",17)(813,"code",29),e(814,"string"),t()(),n(815,"td",19),e(816,"-"),t(),n(817,"td",20)(818,"p"),e(819,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t()()()(),n(820,"h3",9),e(821,"M\xE9todos"),t(),n(822,"table",33)(823,"tr",13)(824,"th",34)(825,"div",15)(826,"h4")(827,"span",16),e(828," clear "),t()()()()(),n(829,"tr",20)(830,"td",20)(831,"p"),e(832,"M\xE9todo respons\xE1vel por "),n(833,"strong"),e(834,"limpar"),t(),e(835," o(s) arquivo(s) selecionado(s)."),t()()()(),o(836,"br"),n(837,"table",33)(838,"tr",13)(839,"th",34)(840,"div",15)(841,"h4")(842,"span",16),e(843," focus "),t()()()()(),n(844,"tr",20)(845,"td",20)(846,"p"),e(847,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(848,"p"),e(849,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(850,"pre")(851,"code"),e(852,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}`),t()()()()(),o(853,"br"),n(854,"table",33)(855,"tr",13)(856,"th",34)(857,"div",15)(858,"h4")(859,"span",16),e(860," selectFiles "),t()()()()(),n(861,"tr",20)(862,"td",20)(863,"p"),e(864,"M\xE9todo respons\xE1vel por "),n(865,"strong"),e(866,"abrir"),t(),e(867," a janela para sele\xE7\xE3o de arquivo(s)."),t()()()(),o(868,"br"),n(869,"table",33)(870,"tr",13)(871,"th",34)(872,"div",15)(873,"h4")(874,"span",16),e(875," sendFiles "),t()()()()(),n(876,"tr",20)(877,"td",20)(878,"p"),e(879,"M\xE9todo respons\xE1vel por "),n(880,"strong"),e(881,"enviar"),t(),e(882," o(s) arquivo(s) selecionado(s)."),t()()()(),o(883,"br"),n(884,"h3"),e(885,"Interfaces"),t(),n(886,"h4",35)(887,"code",5),e(888,"PoUploadFileRestrictions"),t()(),n(889,"div",2)(890,"p"),e(891,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),t()(),n(892,"h4",9),e(893,"Propriedades"),t(),n(894,"table",10)(895,"tr",11)(896,"th",12),e(897,"Nome"),t(),n(898,"th",12),e(899,"Tipo"),t(),n(900,"th",12),e(901,"Descri\xE7\xE3o"),t()(),n(902,"tr",13)(903,"td",14)(904,"div",15)(905,"span",16),e(906," allowedExtensions"),o(907,"br"),t()()(),n(908,"td",17)(909,"code",36),e(910,"Array<string>"),t()(),n(911,"td",20)(912,"em")(913,"strong"),e(914,"(opcional)"),t()(),n(915,"p"),e(916,"Extens\xF5es permitidas de arquivos que ser\xE3o enviados ao servidor, devendo ser informada uma cole\xE7\xE3o de extens\xF5es, por exemplo:"),t(),n(917,"pre")(918,"code"),e(919,"allowedExtensions = ['.png', '.jpg', '.pdf'];"),t()()()(),n(920,"tr",13)(921,"td",14)(922,"div",15)(923,"span",16),e(924," maxFileSize"),o(925,"br"),t()()(),n(926,"td",17)(927,"code",27),e(928,"number"),t()(),n(929,"td",20)(930,"em")(931,"strong"),e(932,"(opcional)"),t()(),n(933,"p"),e(934,"Tamanho m\xE1ximo do arquivo a ser enviado ao servidor."),t(),n(935,"p"),e(936,"Deve ser informado um valor em "),n(937,"em"),e(938,"bytes"),t(),e(939,", por exemplo: "),n(940,"code"),e(941,"31457280"),t(),e(942," (30MB)."),t(),n(943,"blockquote")(944,"p"),e(945,"Por padr\xE3o o valor \xE9 "),n(946,"code"),e(947,"30 MB"),t(),e(948,"."),t()()()(),n(949,"tr",13)(950,"td",14)(951,"div",15)(952,"span",16),e(953," maxFiles"),o(954,"br"),t()()(),n(955,"td",17)(956,"code",27),e(957,"number"),t()(),n(958,"td",20)(959,"em")(960,"strong"),e(961,"(opcional)"),t()(),n(962,"p"),e(963,"Quantidade m\xE1xima de arquivos para o "),n(964,"em"),e(965,"upload"),t(),e(966,"."),t(),n(967,"blockquote")(968,"p"),e(969,"Esta propriedade ser\xE1 v\xE1lida somente se a propriedade "),n(970,"code"),e(971,"p-multiple"),t(),e(972," estiver habilitada e seu valor for maior do que zero."),t()()()(),n(973,"tr",13)(974,"td",14)(975,"div",15)(976,"span",16),e(977," minFileSize"),o(978,"br"),t()()(),n(979,"td",17)(980,"code",27),e(981,"number"),t()(),n(982,"td",20)(983,"em")(984,"strong"),e(985,"(opcional)"),t()(),n(986,"p"),e(987,"Tamanho m\xEDnimo em "),n(988,"em"),e(989,"bytes"),t(),e(990," do arquivo que ser\xE1 enviado ao servidor."),t(),n(991,"blockquote")(992,"p"),e(993,"Por padr\xE3o o valor \xE9 "),n(994,"code"),e(995,"0"),t(),e(996,"."),t()()()()(),n(997,"h4",35)(998,"code",5),e(999,"PoUploadLiterals"),t()(),n(1e3,"div",2)(1001,"p"),e(1002,"Interface para defini\xE7\xE3o das literais usadas no "),n(1003,"code"),e(1004,"po-upload"),t(),e(1005,"."),t()(),n(1006,"h4",9),e(1007,"Propriedades"),t(),n(1008,"table",10)(1009,"tr",11)(1010,"th",12),e(1011,"Nome"),t(),n(1012,"th",12),e(1013,"Tipo"),t(),n(1014,"th",12),e(1015,"Descri\xE7\xE3o"),t()(),n(1016,"tr",13)(1017,"td",14)(1018,"div",15)(1019,"span",16),e(1020," dragFilesHere"),o(1021,"br"),t()()(),n(1022,"td",17)(1023,"code",29),e(1024,"string"),t()(),n(1025,"td",20)(1026,"em")(1027,"strong"),e(1028,"(opcional)"),t()(),n(1029,"p"),e(1030,"Texto indicativo para a \xE1rea onde os arquivos devem ser arrastados quando utilizada a propriedade "),n(1031,"code"),e(1032,"p-drag-drop"),t(),e(1033,"."),t()()(),n(1034,"tr",13)(1035,"td",14)(1036,"div",15)(1037,"span",16),e(1038," dragFoldersHere"),o(1039,"br"),t()()(),n(1040,"td",17)(1041,"code",29),e(1042,"string"),t()(),n(1043,"td",20)(1044,"em")(1045,"strong"),e(1046,"(opcional)"),t()(),n(1047,"p"),e(1048,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser arrastados quando utilizada a propriedade "),n(1049,"code"),e(1050,"p-drag-drop"),t(),e(1051,"."),t()()(),n(1052,"tr",13)(1053,"td",14)(1054,"div",15)(1055,"span",16),e(1056," dropFilesHere"),o(1057,"br"),t()()(),n(1058,"td",17)(1059,"code",29),e(1060,"string"),t()(),n(1061,"td",20)(1062,"em")(1063,"strong"),e(1064,"(opcional)"),t()(),n(1065,"p"),e(1066,"Texto indicativo para a \xE1rea onde os arquivos devem ser soltos quando utilizada a propriedade "),n(1067,"code"),e(1068,"p-drag-drop"),t()()()(),n(1069,"tr",13)(1070,"td",14)(1071,"div",15)(1072,"span",16),e(1073," dropFoldersHere"),o(1074,"br"),t()()(),n(1075,"td",17)(1076,"code",29),e(1077,"string"),t()(),n(1078,"td",20)(1079,"em")(1080,"strong"),e(1081,"(opcional)"),t()(),n(1082,"p"),e(1083,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser soltos quando utilizada a propriedade "),n(1084,"code"),e(1085,"p-drag-drop"),t(),e(1086,"."),t()()(),n(1087,"tr",13)(1088,"td",14)(1089,"div",15)(1090,"span",16),e(1091," errorOccurred"),o(1092,"br"),t()()(),n(1093,"td",17)(1094,"code",29),e(1095,"string"),t()(),n(1096,"td",20)(1097,"em")(1098,"strong"),e(1099,"(opcional)"),t()(),n(1100,"p"),e(1101,"Texto a ser exibido quando ocorrer erro no envio do arquivo."),t()()(),n(1102,"tr",13)(1103,"td",14)(1104,"div",15)(1105,"span",16),e(1106," files"),o(1107,"br"),t()()(),n(1108,"td",17)(1109,"code",29),e(1110,"string"),t()(),n(1111,"td",20)(1112,"em")(1113,"strong"),e(1114,"(opcional)"),t()(),n(1115,"p"),e(1116,"Par\xE2metro "),n(1117,"em"),e(1118,"files"),t(),e(1119," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),n(1120,"em"),e(1121,"dragDrop"),t(),e(1122,"."),t()()(),n(1123,"tr",13)(1124,"td",14)(1125,"div",15)(1126,"span",16),e(1127," folders"),o(1128,"br"),t()()(),n(1129,"td",17)(1130,"code",29),e(1131,"string"),t()(),n(1132,"td",20)(1133,"em")(1134,"strong"),e(1135,"(opcional)"),t()(),n(1136,"p"),e(1137,"Par\xE2metro "),n(1138,"em"),e(1139,"folders"),t(),e(1140," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),n(1141,"em"),e(1142,"dragDrop"),t(),e(1143,"."),t()()(),n(1144,"tr",13)(1145,"td",14)(1146,"div",15)(1147,"span",16),e(1148," invalidDropArea"),o(1149,"br"),t()()(),n(1150,"td",17)(1151,"code",29),e(1152,"string"),t()(),n(1153,"td",20)(1154,"em")(1155,"strong"),e(1156,"(opcional)"),t()(),n(1157,"p"),e(1158,"Texto exibido caso o usu\xE1rio arrastar um arquivo para um local inv\xE1lido ao utilizar a op\xE7\xE3o de "),n(1159,"em"),e(1160,"dragDrop"),t(),e(1161,"."),t()()(),n(1162,"tr",13)(1163,"td",14)(1164,"div",15)(1165,"span",16),e(1166," selectFile"),o(1167,"br"),t()()(),n(1168,"td",17)(1169,"code",29),e(1170,"string"),t()(),n(1171,"td",20)(1172,"em")(1173,"strong"),e(1174,"(opcional)"),t()(),n(1175,"p"),e(1176,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos."),t()()(),n(1177,"tr",13)(1178,"td",14)(1179,"div",15)(1180,"span",16),e(1181," selectFiles"),o(1182,"br"),t()()(),n(1183,"td",17)(1184,"code",29),e(1185,"string"),t()(),n(1186,"td",20)(1187,"em")(1188,"strong"),e(1189,"(opcional)"),t()(),n(1190,"p"),e(1191,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),n(1192,"code"),e(1193,"p-multiple"),t(),e(1194,"."),t()()(),n(1195,"tr",13)(1196,"td",14)(1197,"div",15)(1198,"span",16),e(1199," selectFilesOnComputer"),o(1200,"br"),t()()(),n(1201,"td",17)(1202,"code",29),e(1203,"string"),t()(),n(1204,"td",20)(1205,"em")(1206,"strong"),e(1207,"(opcional)"),t()(),n(1208,"p"),e(1209,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),n(1210,"em"),e(1211,"dragDrop"),t(),e(1212,"."),t()()(),n(1213,"tr",13)(1214,"td",14)(1215,"div",15)(1216,"span",16),e(1217," selectFolder"),o(1218,"br"),t()()(),n(1219,"td",17)(1220,"code",29),e(1221,"string"),t()(),n(1222,"td",20)(1223,"em")(1224,"strong"),e(1225,"(opcional)"),t()(),n(1226,"p"),e(1227,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),n(1228,"code"),e(1229,"p-directory"),t(),e(1230,"."),t()()(),n(1231,"tr",13)(1232,"td",14)(1233,"div",15)(1234,"span",16),e(1235," selectFolderOnComputer"),o(1236,"br"),t()()(),n(1237,"td",17)(1238,"code",29),e(1239,"string"),t()(),n(1240,"td",20)(1241,"em")(1242,"strong"),e(1243,"(opcional)"),t()(),n(1244,"p"),e(1245,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),n(1246,"em"),e(1247,"dragDrop"),t(),e(1248,"."),t()()(),n(1249,"tr",13)(1250,"td",14)(1251,"div",15)(1252,"span",16),e(1253," sentWithSuccess"),o(1254,"br"),t()()(),n(1255,"td",17)(1256,"code",29),e(1257,"string"),t()(),n(1258,"td",20)(1259,"em")(1260,"strong"),e(1261,"(opcional)"),t()(),n(1262,"p"),e(1263,"Texto a ser exibido quando o envio do arquivo for realizado com sucesso."),t()()(),n(1264,"tr",13)(1265,"td",14)(1266,"div",15)(1267,"span",16),e(1268," startSending"),o(1269,"br"),t()()(),n(1270,"td",17)(1271,"code",29),e(1272,"string"),t()(),n(1273,"td",20)(1274,"em")(1275,"strong"),e(1276,"(opcional)"),t()(),n(1277,"p"),e(1278,"Texto exibido no label do bot\xE3o para iniciar o envio dos arquivos."),t()()()(),n(1279,"h4",35)(1280,"code",5),e(1281,"PoProgressAction"),t()(),n(1282,"div",2)(1283,"p"),e(1284,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),t()(),n(1285,"h4",9),e(1286,"Propriedades"),t(),n(1287,"table",10)(1288,"tr",11)(1289,"th",12),e(1290,"Nome"),t(),n(1291,"th",12),e(1292,"Tipo"),t(),n(1293,"th",12),e(1294,"Descri\xE7\xE3o"),t()(),n(1295,"tr",13)(1296,"td",14)(1297,"div",15)(1298,"span",16),e(1299," disabled"),o(1300,"br"),t()()(),n(1301,"td",17)(1302,"code",18),e(1303,"boolean "),t(),n(1304,"code",37),e(1305," Function"),t()(),n(1306,"td",20)(1307,"em")(1308,"strong"),e(1309,"(opcional)"),t()(),n(1310,"p"),e(1311,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),n(1312,"p"),e(1313,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),n(1314,"tr",13)(1315,"td",14)(1316,"div",15)(1317,"span",16),e(1318," icon"),o(1319,"br"),t()()(),n(1320,"td",17)(1321,"code",29),e(1322,"string "),t(),n(1323,"code",38),e(1324," TemplateRef<void>"),t()(),n(1325,"td",20)(1326,"em")(1327,"strong"),e(1328,"(opcional)"),t()(),n(1329,"p"),e(1330,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),n(1331,"p"),e(1332,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(1333,"a",39),e(1334,"Biblioteca de \xEDcones"),t(),e(1335,". conforme exemplo abaixo:"),t(),n(1336,"pre")(1337,"code"),e(1338,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>`),t()(),n(1339,"p"),e(1340,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),n(1341,"pre")(1342,"code"),e(1343,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>`),t()(),n(1344,"p"),e(1345,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(1346,"code"),e(1347,"TemplateRef"),t(),e(1348,`, conforme exemplo abaixo:
component.html:`),t(),n(1349,"pre")(1350,"code"),e(1351,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>`),t()(),n(1352,"p"),e(1353,"component.ts:"),t(),n(1354,"pre")(1355,"code"),e(1356,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];`),t()()()(),n(1357,"tr",13)(1358,"td",14)(1359,"div",15)(1360,"span",16),e(1361," label"),o(1362,"br"),t()()(),n(1363,"td",17)(1364,"code",29),e(1365,"string"),t()(),n(1366,"td",20)(1367,"em")(1368,"strong"),e(1369,"(opcional)"),t()(),n(1370,"p"),e(1371,"R\xF3tulo da a\xE7\xE3o."),t()()(),n(1372,"tr",13)(1373,"td",14)(1374,"div",15)(1375,"span",16),e(1376," type"),o(1377,"br"),t()()(),n(1378,"td",17)(1379,"code",29),e(1380,"string"),t()(),n(1381,"td",20)(1382,"em")(1383,"strong"),e(1384,"(opcional)"),t()(),n(1385,"p"),e(1386,"Define a cor do item, sendo "),n(1387,"code"),e(1388,"default"),t(),e(1389," o padr\xE3o."),t(),n(1390,"p"),e(1391,"Valores v\xE1lidos:"),t(),n(1392,"ul")(1393,"li")(1394,"code"),e(1395,"default"),t()(),n(1396,"li")(1397,"code"),e(1398,"danger"),t(),e(1399," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),n(1400,"tr",13)(1401,"td",14)(1402,"div",15)(1403,"span",16),e(1404," visible"),o(1405,"br"),t()()(),n(1406,"td",17)(1407,"code",18),e(1408,"boolean "),t(),n(1409,"code",37),e(1410," Function"),t()(),n(1411,"td",20)(1412,"em")(1413,"strong"),e(1414,"(opcional)"),t()(),n(1415,"p"),e(1416,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),n(1417,"blockquote")(1418,"p"),e(1419,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),n(1420,"p"),e(1421,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),n(1422,"ul")(1423,"li")(1424,"p"),e(1425,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),n(1426,"li")(1427,"p"),e(1428,"Informar diretamente um valor booleano."),t()()()()()()())},dependencies:[_],encapsulation:2})}return a})();var Le=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(U(pe),U(de))};static \u0275cmp=S({type:a,selectors:[["ng-component"]],standalone:!1,decls:10,vars:4,consts:[["p-title"," Upload",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),o(3,"sample-po-upload-doc"),t(),n(4,"po-tab",3),o(5,"sample-po-upload-basic-view")(6,"sample-po-upload-labs-view")(7,"sample-po-upload-resume-view")(8,"sample-po-upload-rs-view")(9,"sample-po-upload-download-view"),t()()()),r&2&&(c("p-actions",i.actions),s(2),c("p-active",i.activeTab.includes("doc")),s(2),c("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[he,w,y,we,Pe,Me,Ue,De,ke],encapsulation:2})}return a})();var pt=[{path:"",component:Le}],Ve=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=G({type:a});static \u0275inj=Q({imports:[$.forChild(pt),$]})}return a})();var jt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=G({type:a});static \u0275inj=Q({imports:[ve,Ve]})}return a})();export{jt as DocPoUploadModule};
