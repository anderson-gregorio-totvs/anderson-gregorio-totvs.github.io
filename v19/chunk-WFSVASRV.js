import{$ as A,$a as C,$b as le,$d as he,Ca as T,Cd as G,Da as D,Ea as V,F as m,Fa as L,Fc as pe,G as u,Ga as e,Ia as M,Ka as b,La as g,Lb as R,Ma as S,Mb as k,Nb as z,Oa as $,Ob as j,Od as ue,Pa as v,Pb as B,T as d,U as W,Ua as ee,Va as te,Vd as ce,Wb as oe,Wd as Ee,Xd as w,Yb as ae,Yd as _,Zb as K,_ as f,ad as de,bb as ne,ea as X,ha as E,ja as Z,ka as P,kb as ie,md as I,na as t,oa as n,oc as O,pa as a,re as y,sd as se,se as be,ta as U,ua as h,va as Y,vd as q,wd as me,y as H,zc as re,zd as Q}from"./chunk-V5DQALWN.js";var ge=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-upload-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","upload","p-label","PO Upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile"]],template:function(r,i){r&1&&a(0,"po-upload",0)},dependencies:[q],encapsulation:2})}return l})();var Ue=l=>({"docs-sample-code-tabs":l}),Se=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-upload-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Upload Basic"),n(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-basic/sample-po-upload-basic.component.html"),n(),t(13,"pre",7),e(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-basic/sample-po-upload-basic.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
    selector: 'sample-po-upload-basic',
    templateUrl: 'sample-po-upload-basic.component.html',
    standalone: false
})
export class SamplePoUploadBasicComponent {}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-upload-basic"),n(),a(23,"hr")),r&2&&(d(5),P("po-icon "+i.sampleCodeButtonIcon),d(),M(" ",i.sampleCodeButtonLabel,""),d(),E("ngClass",v(4,Ue,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,ge],encapsulation:2})}return l})();var xe=(()=>{class l{allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;propertiesOptions=[{value:"autoupload",label:"Automatic upload"},{value:"directory",label:"Directory"},{value:"disabled",label:"Disabled"},{value:"disabledRemoveFile",label:"Disabled Remove File"},{value:"dragDrop",label:"Drag Drop"},{value:"requiredUrl",label:"required Url"},{value:"multiple",label:"Multiple upload"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"restrictionsInfo",label:"Hide Restrictions Info"},{value:"selectButton",label:"Hide Select Files Button"},{value:"sendButton",label:"Hide Send Files Button"}];ngOnInit(){this.restore()}changeEvent(s){this.event=s}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onChangeHeaders(s){try{this.headers=JSON.parse(s)}catch{this.headers=void 0}}onChangeExtension(){let s=this.allowedExtensions.split(",").map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:s})}onChangeMaxFiles(s){this.restrictions=Object.assign({},this.restrictions,{maxFiles:s})}onChangeMaxSize(s){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(s)})}onChangeMinSize(s){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(s)})}restore(){this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals="",this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url="https://po-sample-api.onrender.com/v1/uploads/addFile",this.headers=void 0,this.headersLabs=void 0}getValueInBytes(s){return 1048576*s}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-upload-labs"]],standalone:!1,decls:31,vars:39,consts:[["fRestrictions","ngForm"],["f","ngForm"],["name","upload",3,"ngModelChange","p-error","p-success","p-upload","ngModel","p-auto-upload","p-directory","p-disabled","p-required-url","p-disabled-remove-file","p-drag-drop","p-drag-drop-height","p-form-field","p-help","p-hide-select-button","p-hide-restrictions-info","p-hide-send-button","p-label","p-literals","p-multiple","p-optional","p-required","p-show-required","p-restrictions","p-url","p-headers"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","allowedExtensions","p-help","Enter the allowed extensions separated by comma","p-label","Allowed Extensions","p-placeholder",".png, .jpeg, .jpg",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","maxFiles","p-clean","","p-help","Requires that the 'p-multiple' property be enabled","p-label","Max Files",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","dragDropHeight","p-clean","","p-help","Height of drag drop area","p-label","Drag Drop Height","p-min","160",1,"po-md-4",3,"ngModelChange","ngModel"],["name","minSize","p-clean","","p-help","In megabytes","p-label","Min File Size",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","maxSize","p-clean","","p-help","In megabytes","p-label","Max File Size",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","formField","p-clean","","p-label","Form Field",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","URL","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","headers","p-help",'Ex.: {"Authorization": "12312414"}',"p-label","Headers",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-help","Select any options","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let p=U();t(0,"po-upload",2),S("ngModelChange",function(o){return m(p),g(i.upload,o)||(i.upload=o),u(o)}),h("p-error",function(){return m(p),u(i.changeEvent("p-error"))})("p-success",function(){return m(p),u(i.changeEvent("p-success"))})("p-upload",function(){return m(p),u(i.changeEvent("p-upload"))}),n(),a(1,"hr"),t(2,"div",3),a(3,"po-info",4),ee(4,"json"),a(5,"po-info",5),n(),a(6,"hr"),t(7,"form",null,0)(9,"div",3)(10,"po-input",6),S("ngModelChange",function(o){return m(p),g(i.allowedExtensions,o)||(i.allowedExtensions=o),u(o)}),h("p-change",function(){return m(p),u(i.onChangeExtension())}),n(),t(11,"po-number",7),S("ngModelChange",function(o){return m(p),g(i.maxFiles,o)||(i.maxFiles=o),u(o)}),h("p-change",function(){return m(p),u(i.onChangeMaxFiles(i.maxFiles))}),n()(),t(12,"div",3)(13,"po-number",8),S("ngModelChange",function(o){return m(p),g(i.dragDropHeight,o)||(i.dragDropHeight=o),u(o)}),n(),t(14,"po-number",9),S("ngModelChange",function(o){return m(p),g(i.minSize,o)||(i.minSize=o),u(o)}),h("p-change",function(){return m(p),u(i.onChangeMinSize(i.minSize))}),n(),t(15,"po-number",10),S("ngModelChange",function(o){return m(p),g(i.maxSize,o)||(i.maxSize=o),u(o)}),h("p-change",function(){return m(p),u(i.onChangeMaxSize(i.maxSize))}),n()()(),a(16,"hr"),t(17,"form",null,1)(19,"div",3)(20,"po-input",11),S("ngModelChange",function(o){return m(p),g(i.label,o)||(i.label=o),u(o)}),n(),t(21,"po-input",12),S("ngModelChange",function(o){return m(p),g(i.help,o)||(i.help=o),u(o)}),n()(),t(22,"div",3)(23,"po-input",13),S("ngModelChange",function(o){return m(p),g(i.formField,o)||(i.formField=o),u(o)}),n(),t(24,"po-input",14),S("ngModelChange",function(o){return m(p),g(i.url,o)||(i.url=o),u(o)}),n()(),t(25,"div",3)(26,"po-input",15),S("ngModelChange",function(o){return m(p),g(i.headersLabs,o)||(i.headersLabs=o),u(o)}),h("p-change",function(o){return m(p),u(i.onChangeHeaders(o))}),n(),t(27,"po-input",16),S("ngModelChange",function(o){return m(p),g(i.literals,o)||(i.literals=o),u(o)}),h("p-change",function(){return m(p),u(i.changeLiterals())}),n(),t(28,"po-checkbox-group",17),S("ngModelChange",function(o){return m(p),g(i.properties,o)||(i.properties=o),u(o)}),n()(),t(29,"div",3)(30,"po-button",18),h("p-click",function(){return m(p),u(i.restore())}),n()()()}r&2&&(b("ngModel",i.upload),E("p-auto-upload",i.properties.includes("autoupload"))("p-directory",i.properties.includes("directory"))("p-disabled",i.properties.includes("disabled"))("p-required-url",i.properties.includes("requiredUrl"))("p-disabled-remove-file",i.properties.includes("disabledRemoveFile"))("p-drag-drop",i.properties.includes("dragDrop"))("p-drag-drop-height",i.dragDropHeight)("p-form-field",i.formField)("p-help",i.help)("p-hide-select-button",i.properties.includes("selectButton"))("p-hide-restrictions-info",i.properties.includes("restrictionsInfo"))("p-hide-send-button",i.properties.includes("sendButton"))("p-label",i.label)("p-literals",i.customLiterals)("p-multiple",i.properties.includes("multiple"))("p-optional",i.properties.includes("optional"))("p-required",i.properties.includes("required"))("p-show-required",i.properties.includes("showRequired"))("p-restrictions",i.restrictions)("p-url",i.url)("p-headers",i.headers),d(3),E("p-value",te(4,37,i.upload)),d(2),E("p-value",i.event),d(5),b("ngModel",i.allowedExtensions),d(),b("ngModel",i.maxFiles),d(2),b("ngModel",i.dragDropHeight),d(),b("ngModel",i.minSize),d(),b("ngModel",i.maxSize),d(5),b("ngModel",i.label),d(),b("ngModel",i.help),d(2),b("ngModel",i.formField),d(),b("ngModel",i.url),d(2),b("ngModel",i.headersLabs),d(),b("ngModel",i.literals),d(),b("ngModel",i.properties),E("p-options",i.propertiesOptions))},dependencies:[B,R,k,j,z,O,re,I,se,q,G,ie],encapsulation:2})}return l})();var Ve=l=>({"docs-sample-code-tabs":l}),ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-upload-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Upload Labs"),n(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-labs/sample-po-upload-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-upload
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

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-labs/sample-po-upload-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoUploadFileRestrictions, PoUploadLiterals } from '@po-ui/ng-components';

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
    { value: 'sendButton', label: 'Hide Send Files Button' }
  ];

  ngOnInit() {
    this.restore();
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
  }

  private getValueInBytes(value: number) {
    return 1048576 * value;
  }
}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-upload-labs"),n(),a(23,"hr")),r&2&&(d(5),P("po-icon "+i.sampleCodeButtonIcon),d(),M(" ",i.sampleCodeButtonLabel,""),d(),E("ngClass",v(4,Ve,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,xe],encapsulation:2})}return l})();var Re=["formOpportunity"],ke=()=>({maxFileSize:"204800"}),Ce=(()=>{class l{poNotification;formOpportunity;biograph;linkedin;name;resume;uploadedResume;constructor(s){this.poNotification=s}ngOnInit(){this.uploadedResume=!1}apply(){this.formOpportunity.reset(),this.uploadedResume=!1,this.poNotification.success("You were applied successfully")}resumeUploadError(){this.uploadedResume=!1}resumeUploadSuccess(){this.uploadedResume=!0}static \u0275fac=function(r){return new(r||l)(W(de))};static \u0275cmp=f({type:l,selectors:[["sample-po-upload-resume"]],viewQuery:function(r,i){if(r&1&&T(Re,7),r&2){let p;D(p=V())&&(i.formOpportunity=p.first)}},standalone:!1,decls:12,vars:7,consts:[["formOpportunity","ngForm"],[1,"po-row"],["name","name","p-clean","","p-label","Full Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","biograph","p-label","Biograph","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","linkedin","p-clean","","p-label","LinkedIn URL",1,"po-md-12",3,"ngModelChange","ngModel"],["name","resume","p-label","Resume","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-md-12",3,"ngModelChange","p-error","p-success","ngModel","p-restrictions"],["p-label","Apply",1,"po-md-4",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=U();t(0,"form",null,0)(2,"div",1)(3,"po-input",2),S("ngModelChange",function(o){return m(p),g(i.name,o)||(i.name=o),u(o)}),n()(),t(4,"div",1)(5,"po-textarea",3),S("ngModelChange",function(o){return m(p),g(i.biograph,o)||(i.biograph=o),u(o)}),n()(),t(6,"div",1)(7,"po-url",4),S("ngModelChange",function(o){return m(p),g(i.linkedin,o)||(i.linkedin=o),u(o)}),n()(),t(8,"div",1)(9,"po-upload",5),S("ngModelChange",function(o){return m(p),g(i.resume,o)||(i.resume=o),u(o)}),h("p-error",function(){return m(p),u(i.resumeUploadError())})("p-success",function(){return m(p),u(i.resumeUploadSuccess())}),n()(),t(10,"div",1)(11,"po-button",6),h("p-click",function(){return m(p),u(i.apply())}),n()()()}if(r&2){let p=L(1);d(3),b("ngModel",i.name),d(2),b("ngModel",i.biograph),d(2),b("ngModel",i.linkedin),d(2),b("ngModel",i.resume),E("p-restrictions",$(6,ke)),d(2),E("p-disabled",p.invalid||!i.uploadedResume)}},dependencies:[B,R,k,j,z,O,I,Q,q,me],encapsulation:2})}return l})();var je=l=>({"docs-sample-code-tabs":l}),we=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-upload-resume-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - Resume"),n(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-resume/sample-po-upload-resume.component.html"),n(),t(13,"pre",7),e(14,`<form #formOpportunity="ngForm">
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
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-resume/sample-po-upload-resume.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';
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
`),n()()()()(),t(21,"div",10),a(22,"sample-po-upload-resume"),n(),a(23,"hr")),r&2&&(d(5),P("po-icon "+i.sampleCodeButtonIcon),d(),M(" ",i.sampleCodeButtonLabel,""),d(),E("ngClass",v(4,je,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Ce],encapsulation:2})}return l})();var Oe=["upload"],Ie=["stepper"],We=["submitForm"],Ne=["sucessData"],He=l=>({"po-invisible":l});function Ae(l,Xe){if(l&1){let s=U();t(0,"div",8)(1,"div",9)(2,"p",11),e(3,"Confirm informations"),n()(),a(4,"po-info",29)(5,"po-info",30)(6,"po-info",31),t(7,"po-button",32),h("p-click",function(){m(s);let i=Y();return u(i.confirmSubmit())}),n()()}if(l&2){let s=Y();d(4),E("p-value",s.project[0].name||"N/D"),d(),E("p-value",s.title||"N/D"),d(),E("p-value",s.description||"N/D")}}var _e=(()=>{class l{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close()},label:"Return"};description;project=[];restrictions={allowedExtensions:[".zip",".7z",".tar",".wim"]};title;ngOnInit(){this.newSubmit()}canSubmitProject(){return!!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first()}submitProject(){this.upload.sendFiles(),this.stepper.next()}newSubmit(){this.project=[],this.title=void 0,this.description=void 0}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-upload-rs"]],viewQuery:function(r,i){if(r&1&&(T(Oe,7),T(Ie,7),T(We,7),T(Ne,7)),r&2){let p;D(p=V())&&(i.upload=p.first),D(p=V())&&(i.stepper=p.first),D(p=V())&&(i.submitForm=p.first),D(p=V())&&(i.sucessData=p.first)}},standalone:!1,decls:47,vars:15,consts:[["stepper",""],["submitForm","ngForm"],["upload",""],["sucessData",""],[1,"po-row"],["p-orientation","vertical","p-step-icons","","p-step-size","42",1,"po-lg-10","po-offset-lg-2","po-offset-xl-2"],["p-label","Welcome"],["p-title","Realize & Show",1,"po-lg-8","po-mt-2"],[1,"tht-row"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-text-large"],["p-label","Yes!","p-kind","primary",1,"po-sm-12","po-mt-2",3,"p-click"],["p-label","Submit",3,"p-can-active-next-step"],[1,"po-lg-10"],[1,"po-font-subtitle"],[1,"po-font-text-small-bold"],[1,"po-font-title","po-lg-2"],["p-icon","ph ph-cloud-arrow-up",1,"po-clickable",3,"click"],["p-icon","ph ph-fill ph-x-circle",1,"po-clickable",3,"click","ngClass"],[1,"po-sm-12","po-mt-3","po-font-text-bold"],["name","project","p-hide-select-button","","p-hide-send-button","","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-sm-12",3,"ngModelChange","ngModel","p-restrictions"],["name","title","p-label","Title","p-placeholder","Be creative","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","description","p-label","Description","p-maxlength","140","p-placeholder","Resume on few words","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["p-label","Done",1,"po-sm-12","po-mt-2",3,"p-click","p-disabled"],["p-label","Confirm"],["class","tht-row",4,"ngIf"],["p-title","Confirmation",3,"p-primary-action"],[1,"po-sm-12","po-font-title"],["p-label","File name",1,"po-md-4",3,"p-value"],["p-label","Title",1,"po-md-4",3,"p-value"],["p-label","Description",1,"po-md-4",3,"p-value"],["p-label","Confirm",1,"po-sm-12","po-mt-2","po-mb-2",3,"p-click"]],template:function(r,i){if(r&1){let p=U();t(0,"div",4)(1,"po-stepper",5,0)(3,"po-step",6)(4,"po-widget",7)(5,"div",8)(6,"div",9)(7,"h1",10),e(8,"Welcome, TOTVER!"),n(),t(9,"p",11),e(10,"Let's submit your project?"),n()()(),t(11,"div",8)(12,"po-button",12),h("p-click",function(){m(p);let o=L(2);return u(o.next())}),n()()()(),t(13,"po-step",13)(14,"po-widget",7)(15,"form",null,1)(17,"div",4)(18,"div",14)(19,"div",4)(20,"p",15),e(21,"Please, select your project:"),n()(),t(22,"div",4)(23,"p",16),e(24,"*Upload a zip file containing your project."),n()()(),t(25,"div",17)(26,"po-icon",18),h("click",function(){m(p);let o=L(32);return u(o.selectFiles())}),n(),t(27,"po-icon",19),h("click",function(){m(p);let o=L(32);return u(o.clear())}),n()()(),t(28,"div",4)(29,"label",20),e(30,"Attached"),n(),t(31,"po-upload",21,2),S("ngModelChange",function(o){return m(p),g(i.project,o)||(i.project=o),u(o)}),n()(),t(33,"div",4)(34,"po-input",22),S("ngModelChange",function(o){return m(p),g(i.title,o)||(i.title=o),u(o)}),n()(),t(35,"div",4)(36,"po-textarea",23),S("ngModelChange",function(o){return m(p),g(i.description,o)||(i.description=o),u(o)}),n()(),t(37,"div",8)(38,"po-button",24),h("p-click",function(){return m(p),u(i.submitProject())}),n()()()()(),t(39,"po-step",25)(40,"po-widget",7),X(41,Ae,8,3,"div",26),n()()()(),t(42,"po-modal",27,3)(44,"div",4)(45,"p",28),e(46,"Project successfully submited!"),n()()()}r&2&&(d(13),E("p-can-active-next-step",i.canSubmitProject.bind(i)),d(14),E("ngClass",v(13,He,i.project.length<1)),d(2),Z("po-invisible",i.project.length<1),d(2),b("ngModel",i.project),E("p-restrictions",i.restrictions),d(3),b("ngModel",i.title),E("p-disabled",i.project.length<1),d(2),b("ngModel",i.description),E("p-disabled",i.project.length<1),d(2),E("p-disabled",i.canSubmitProject()),d(3),E("ngIf",i.canSubmitProject()),d(),E("p-primary-action",i.confirm))},dependencies:[C,ne,B,R,k,j,z,O,I,Q,q,le,G,pe,ce,Ee,he],encapsulation:2})}return l})();var Ge=l=>({"docs-sample-code-tabs":l}),ye=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="ph ph-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"ph ph-plus":"ph ph-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-upload-rs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - Realize & Show"),n(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-rs/sample-po-upload-rs.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row">
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
              <po-icon p-icon="ph ph-cloud-arrow-up" class="po-clickable" (click)="upload.selectFiles()"></po-icon>
              <po-icon
                p-icon="ph ph-fill ph-x-circle"
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
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-rs/sample-po-upload-rs.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';
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
`),n()()()()(),t(21,"div",10),a(22,"sample-po-upload-rs"),n(),a(23,"hr")),r&2&&(d(5),P("po-icon "+i.sampleCodeButtonIcon),d(),M(" ",i.sampleCodeButtonLabel,""),d(),E("ngClass",v(4,Ge,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,_e],encapsulation:2})}return l})();var Pe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-upload-doc"]],standalone:!1,decls:1187,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<string>"]],template:function(r,i){r&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),n(),t(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),t(10,"code"),e(11,"FormsModule"),n(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),t(13,"code"),e(14,"ReactiveFormsModule"),n(),e(15,", ambos nativos do Angular."),n()()(),t(16,"h3",3),e(17,"Componente"),n(),t(18,"h4",4)(19,"code",5),e(20,"PoUploadComponent"),n()(),t(21,"div",2)(22,"p"),e(23,"O componente "),t(24,"code"),e(25,"po-upload"),n(),e(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),n(),t(27,"ul")(28,"li"),e(29,"M\xFAltipla sele\xE7\xE3o, onde o usu\xE1rio pode enviar mais de um arquivo ao servidor."),n(),t(30,"li"),e(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),n(),t(32,"li"),e(33,"Restri\xE7\xF5es de formatos de arquivo e tamanho."),n(),t(34,"li"),e(35,"Fun\xE7\xE3o de sucesso que ser\xE1 disparada quando os arquivos forem enviados com sucesso."),n(),t(36,"li"),e(37,"Fun\xE7\xE3o de erro que ser\xE1 disparada quando houver erro no envio dos arquivos."),n(),t(38,"li"),e(39,"Permite habilitar uma \xE1rea onde os arquivos podem ser arrastados. "),n()()(),t(40,"div",6)(41,"h4",7),e(42,"Seletor"),n(),t(43,"pre",8),e(44,`<po-upload
    p-auto-focus="boolean"
    p-auto-upload="boolean"
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
`),n()(),t(45,"h4",9),e(46,"Propriedades"),n(),t(47,"table",10)(48,"tr",11)(49,"th",12),e(50,"Nome"),n(),t(51,"th",12),e(52,"Tipo"),n(),t(53,"th",12),e(54,"Padr\xE3o"),n(),t(55,"th",12),e(56,"Descri\xE7\xE3o"),n()(),t(57,"tr",13)(58,"td",14)(59,"div",15)(60,"span",16),e(61," p-auto-focus"),a(62,"br"),n()()(),t(63,"td",17)(64,"code",18),e(65,"boolean"),n()(),t(66,"td",19)(67,"p")(68,"code"),e(69,"false"),n()()(),t(70,"td",20)(71,"em")(72,"strong"),e(73,"(opcional)"),n()(),t(74,"p"),e(75,"Aplica foco no elemento ao ser iniciado."),n(),t(76,"blockquote")(77,"p"),e(78,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),n()()()(),t(79,"tr",13)(80,"td",14)(81,"div",15)(82,"span",16),e(83," p-auto-upload"),a(84,"br"),n()()(),t(85,"td",17)(86,"code",18),e(87,"boolean"),n()(),t(88,"td",19)(89,"p")(90,"code"),e(91,"false"),n()()(),t(92,"td",20)(93,"em")(94,"strong"),e(95,"(opcional)"),n()(),t(96,"p"),e(97,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),n(),t(98,"blockquote")(99,"p"),e(100,"Esta propriedade funciona somente se a propriedade "),t(101,"code"),e(102,"p-url"),n(),e(103," tiver um valor atribu\xEDdo."),n()()()(),t(104,"tr",13)(105,"td",14)(106,"div",15)(107,"span",16),e(108," p-directory"),a(109,"br"),n()()(),t(110,"td",17)(111,"code",18),e(112,"boolean"),n()(),t(113,"td",19)(114,"p")(115,"code"),e(116,"false"),n()()(),t(117,"td",20)(118,"em")(119,"strong"),e(120,"(opcional)"),n()(),t(121,"p"),e(122,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),n(),t(123,"blockquote")(124,"p"),e(125,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),n()(),t(126,"blockquote")(127,"p"),e(128,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),t(129,"strong"),e(130,"Internet Explorer"),n(),e(131,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),n()()()(),t(132,"tr",13)(133,"td",14)(134,"div",15)(135,"span",16),e(136," p-disabled"),a(137,"br"),n()()(),t(138,"td",17)(139,"code",18),e(140,"boolean"),n()(),t(141,"td",19),e(142,"-"),n(),t(143,"td",20)(144,"em")(145,"strong"),e(146,"(opcional)"),n()(),t(147,"p"),e(148,"Indica que o campo ser\xE1 desabilitado."),n()()(),t(149,"tr",13)(150,"td",14)(151,"div",15)(152,"span",16),e(153," p-disabled-remove-file"),a(154,"br"),n()()(),t(155,"td",17)(156,"code",18),e(157,"boolean"),n()(),t(158,"td",19)(159,"p")(160,"code"),e(161,"false"),n()()(),t(162,"td",20)(163,"em")(164,"strong"),e(165,"(opcional)"),n()(),t(166,"p"),e(167,"Desabilita bot\xE3o de remover o(s) arquivo(s) selecionado(s)."),n()()(),t(168,"tr",13)(169,"td",14)(170,"div",15)(171,"span",16),e(172," p-drag-drop"),a(173,"br"),n()()(),t(174,"td",17)(175,"code",18),e(176,"boolean"),n()(),t(177,"td",19)(178,"p")(179,"code"),e(180,"false"),n()()(),t(181,"td",20)(182,"em")(183,"strong"),e(184,"(opcional)"),n()(),t(185,"p"),e(186,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),n(),t(187,"blockquote")(188,"p"),e(189,"Recomendamos utilizar apenas um "),t(190,"code"),e(191,"po-upload"),n(),e(192," com esta funcionalidade por tela."),n()()()(),t(193,"tr",13)(194,"td",14)(195,"div",15)(196,"span",16),e(197," p-drag-drop-height"),a(198,"br"),n()()(),t(199,"td",17)(200,"code",21),e(201,"number"),n()(),t(202,"td",19)(203,"p")(204,"code"),e(205,"320"),n()()(),t(206,"td",20)(207,"em")(208,"strong"),e(209,"(opcional)"),n()(),t(210,"p"),e(211,"Define em "),t(212,"em"),e(213,"pixels"),n(),e(214," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),t(215,"code"),e(216,"160px"),n(),e(217,"."),n(),t(218,"blockquote")(219,"p"),e(220,"Esta propriedade funciona somente se a propriedade "),t(221,"code"),e(222,"p-drag-drop"),n(),e(223," estiver habilitada."),n()()()(),t(224,"tr",13)(225,"td",14)(226,"div",15)(227,"span",16),e(228," p-restrictions"),a(229,"br"),n()()(),t(230,"td",17)(231,"code",22),e(232,"PoUploadFileRestrictions"),n()(),t(233,"td",19),e(234,"-"),n(),t(235,"td",20)(236,"em")(237,"strong"),e(238,"(opcional)"),n()(),t(239,"p"),e(240,"Objeto que segue a defini\xE7\xE3o da interface "),t(241,"code"),e(242,"PoUploadFileRestrictions"),n(),e(243,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),n()()(),t(244,"tr",13)(245,"td",14)(246,"div",15)(247,"span",16),e(248," p-form-field"),a(249,"br"),n()()(),t(250,"td",17)(251,"code",23),e(252,"string"),n()(),t(253,"td",19)(254,"p")(255,"code"),e(256,"files"),n()()(),t(257,"td",20)(258,"em")(259,"strong"),e(260,"(opcional)"),n()(),t(261,"p"),e(262,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),t(263,"code"),e(264,"p-url"),n(),e(265,"."),n()()(),t(266,"tr",13)(267,"td",14)(268,"div",15)(269,"span",16),e(270," p-headers"),a(271,"br"),n()()(),t(272,"td",17)(273,"code",24),e(274,"{ [name: string]: string "),n(),t(275,"code",25),e(276,` Array<string>;
}`),n()(),t(277,"td",19),e(278,"-"),n(),t(279,"td",20)(280,"p"),e(281,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),n()()(),t(282,"tr",13)(283,"td",14)(284,"div",15)(285,"span",16),e(286," p-help"),a(287,"br"),n()()(),t(288,"td",17)(289,"code",23),e(290,"string"),n()(),t(291,"td",19),e(292,"-"),n(),t(293,"td",20)(294,"em")(295,"strong"),e(296,"(opcional)"),n()(),t(297,"p"),e(298,"Texto de apoio para o campo."),n()()(),t(299,"tr",13)(300,"td",14)(301,"div",15)(302,"span",16),e(303," p-hide-restrictions-info"),a(304,"br"),n()()(),t(305,"td",17)(306,"code",18),e(307,"boolean"),n()(),t(308,"td",19)(309,"p")(310,"code"),e(311,"false"),n()()(),t(312,"td",20)(313,"em")(314,"strong"),e(315,"(opcional)"),n()(),t(316,"p"),e(317,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),n()()(),t(318,"tr",13)(319,"td",14)(320,"div",15)(321,"span",16),e(322," p-hide-select-button"),a(323,"br"),n()()(),t(324,"td",17)(325,"code",18),e(326,"boolean"),n()(),t(327,"td",19)(328,"p")(329,"code"),e(330,"false"),n()()(),t(331,"td",20)(332,"em")(333,"strong"),e(334,"(opcional)"),n()(),t(335,"p"),e(336,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),n(),t(337,"blockquote")(338,"p"),e(339,"Caso o valor definido seja "),t(340,"code"),e(341,"true"),n(),e(342,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),t(343,"code"),e(344,"selectFiles()"),n(),e(345," para sele\xE7\xE3o de arquivos."),n()()()(),t(346,"tr",13)(347,"td",14)(348,"div",15)(349,"span",16),e(350," p-hide-send-button"),a(351,"br"),n()()(),t(352,"td",17)(353,"code",18),e(354,"boolean"),n()(),t(355,"td",19)(356,"p")(357,"code"),e(358,"false"),n()()(),t(359,"td",20)(360,"em")(361,"strong"),e(362,"(opcional)"),n()(),t(363,"p"),e(364,"Omite o bot\xE3o de envio de arquivos."),n(),t(365,"blockquote")(366,"p"),e(367,"Caso o valor definido seja "),t(368,"code"),e(369,"true"),n(),e(370,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),t(371,"code"),e(372,"sendFiles()"),n(),e(373," para envio do(s) arquivo(s) selecionado(s)."),n()()()(),t(374,"tr",13)(375,"td",14)(376,"div",15)(377,"span",16),e(378," p-multiple"),a(379,"br"),n()()(),t(380,"td",17)(381,"code",18),e(382,"boolean"),n()(),t(383,"td",19),e(384,"-"),n(),t(385,"td",20)(386,"em")(387,"strong"),e(388,"(opcional)"),n()(),t(389,"p"),e(390,"Define se pode selecionar mais de um arquivo."),n(),t(391,"blockquote")(392,"p"),e(393,"Se utilizada a "),t(394,"code"),e(395,"p-directory"),n(),e(396,", habilita-se automaticamente esta propriedade."),n()()()(),t(397,"tr",13)(398,"td",14)(399,"div",15)(400,"span",16),e(401," p-label"),a(402,"br"),n()()(),t(403,"td",17)(404,"code",23),e(405,"string"),n()(),t(406,"td",19),e(407,"-"),n(),t(408,"td",20)(409,"em")(410,"strong"),e(411,"(opcional)"),n()(),t(412,"p"),e(413,"R\xF3tulo do campo."),n()()(),t(414,"tr",13)(415,"td",14)(416,"div",15)(417,"span",16),e(418," p-literals"),a(419,"br"),n()()(),t(420,"td",17)(421,"code",26),e(422,"PoUploadLiterals"),n()(),t(423,"td",19),e(424,"-"),n(),t(425,"td",20)(426,"em")(427,"strong"),e(428,"(opcional)"),n()(),t(429,"p"),e(430,"Objeto com as literais usadas no "),t(431,"code"),e(432,"po-upload"),n(),e(433,"."),n(),t(434,"p"),e(435,"Existem duas maneiras de customizar o componente:"),n(),t(436,"ul")(437,"li"),e(438,"passando um objeto implementando a interface "),t(439,"code"),e(440,"PoUploadLiterals"),n(),e(441," com todas as literais dispon\xEDveis;"),n(),t(442,"li"),e(443,"passando apenas as literais que deseja customizar:"),t(444,"pre")(445,"code"),e(446,`const customLiterals: PoUploadLiterals = {
 folders: 'Pastas',
 selectFile: 'Buscar arquivo',
 startSending: 'Enviar'
};`),n()()()(),t(447,"p"),e(448,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),n(),t(449,"pre")(450,"code"),e(451,`<po-upload
  [p-literals]="customLiterals">
</po-upload>`),n()(),t(452,"blockquote")(453,"p"),e(454,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),t(455,"em"),e(456,"browser"),n(),e(457," (pt, en, es, ru)."),n()()()(),t(458,"tr",13)(459,"td",14)(460,"div",15)(461,"span",16),e(462," name"),a(463,"br"),n()()(),t(464,"td",17)(465,"code",23),e(466,"string"),n()(),t(467,"td",19),e(468,"-"),n(),t(469,"td",20)(470,"p"),e(471,"Define o valor do atributo "),t(472,"code"),e(473,"name"),n(),e(474," do componente."),n()()(),t(475,"tr",13)(476,"td",14)(477,"div",27)(478,"span",28),e(479," (ngModelChange)"),a(480,"br"),n()()(),t(481,"td",17)(482,"code",29),e(483,"EventEmitter"),n()(),t(484,"td",19),e(485,"-"),n(),t(486,"td",20)(487,"em")(488,"strong"),e(489,"(opcional)"),n()(),t(490,"p"),e(491,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da "),t(492,"em"),e(493,"tag"),n(),t(494,"code"),e(495,"form"),n(),e(496,"."),n(),t(497,"p"),e(498,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),t(499,"code"),e(500,"strictTemplates"),n(),e(501,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),n(),t(502,"pre")(503,"code"),e(504,'<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>'),n()()()(),t(505,"tr",13)(506,"td",14)(507,"div",27)(508,"span",28),e(509," (p-error)"),a(510,"br"),n()()(),t(511,"td",17)(512,"code",29),e(513,"EventEmitter"),n()(),t(514,"td",19),e(515,"-"),n(),t(516,"td",20)(517,"em")(518,"strong"),e(519,"(opcional)"),n()(),t(520,"p"),e(521,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),n(),t(522,"blockquote")(523,"p"),e(524,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),t(525,"code"),e(526,"HttpErrorResponse"),n(),e(527,"."),n()()()(),t(528,"tr",13)(529,"td",14)(530,"div",27)(531,"span",28),e(532," (p-success)"),a(533,"br"),n()()(),t(534,"td",17)(535,"code",29),e(536,"EventEmitter"),n()(),t(537,"td",19),e(538,"-"),n(),t(539,"td",20)(540,"em")(541,"strong"),e(542,"(opcional)"),n()(),t(543,"p"),e(544,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),n(),t(545,"blockquote")(546,"p"),e(547,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),t(548,"code"),e(549,"HttpResponse"),n(),e(550,"."),n()()()(),t(551,"tr",13)(552,"td",14)(553,"div",27)(554,"span",28),e(555," (p-upload)"),a(556,"br"),n()()(),t(557,"td",17)(558,"code",29),e(559,"EventEmitter"),n()(),t(560,"td",19),e(561,"-"),n(),t(562,"td",20)(563,"em")(564,"strong"),e(565,"(opcional)"),n()(),t(566,"p"),e(567,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),n(),t(568,"blockquote")(569,"p"),e(570,"data, nesta propriedade pode ser informado algum dado"),n()(),t(571,"pre")(572,"code"),e(573,"event.data = {id: 'id do usu\xE1rio'};"),n()(),t(574,"blockquote")(575,"p"),e(576,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),t(577,"code"),e(578,"data"),n(),e(579,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),n()(),t(580,"pre")(581,"code"),e(582,"event.extraFormData = {id: 'id do usu\xE1rio'};"),n()()()(),t(583,"tr",13)(584,"td",14)(585,"div",15)(586,"span",16),e(587," p-optional"),a(588,"br"),n()()(),t(589,"td",17)(590,"code",18),e(591,"boolean"),n()(),t(592,"td",19)(593,"p")(594,"code"),e(595,"false"),n()()(),t(596,"td",20)(597,"em")(598,"strong"),e(599,"(opcional)"),n()(),t(600,"p"),e(601,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),n(),t(602,"blockquote")(603,"p"),e(604,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),n()(),t(605,"ul")(606,"li"),e(607,"O campo conter "),t(608,"code"),e(609,"p-required"),n(),e(610,";"),n(),t(611,"li"),e(612,"N\xE3o possuir "),t(613,"code"),e(614,"p-help"),n(),e(615," e/ou "),t(616,"code"),e(617,"p-label"),n(),e(618,"."),n()()()(),t(619,"tr",13)(620,"td",14)(621,"div",15)(622,"span",16),e(623," p-required"),a(624,"br"),n()()(),t(625,"td",17)(626,"code",18),e(627,"boolean"),n()(),t(628,"td",19)(629,"p")(630,"code"),e(631,"false"),n()()(),t(632,"td",20)(633,"em")(634,"strong"),e(635,"(opcional)"),n()(),t(636,"p"),e(637,"Define que o campo ser\xE1 obrigat\xF3rio."),n()()(),t(638,"tr",13)(639,"td",14)(640,"div",15)(641,"span",16),e(642," p-required-url"),a(643,"br"),n()()(),t(644,"td",17)(645,"code",18),e(646,"boolean"),n()(),t(647,"td",19)(648,"p")(649,"code"),e(650,"true"),n()()(),t(651,"td",20)(652,"em")(653,"strong"),e(654,"(opcional)"),n()(),t(655,"p"),e(656,"Define se a propriedade "),t(657,"code"),e(658,"p-url"),n(),e(659," \xE9 obrigat\xF3ria."),n(),t(660,"p"),e(661,"Caso a propriedade seja definida como "),t(662,"code"),e(663,"false"),n(),e(664,":"),n(),t(665,"ul")(666,"li"),e(667,'o bot\xE3o de "Selecionar arquivo" ficar\xE1 habilitado mesmo sem a propriedade '),t(668,"code"),e(669,"p-url"),n(),e(670," definida."),n(),t(671,"li"),e(672,'o bot\xE3o "Iniciar envio" ficar\xE1 oculto at\xE9 que a propriedade '),t(673,"code"),e(674,"p-url"),n(),e(675," seja definida."),n()(),t(676,"blockquote")(677,"p"),e(678,"Se utilizada com a propriedade "),t(679,"code"),e(680,"p-auto-upload"),n(),e(681," definida como "),t(682,"code"),e(683,"true"),n(),e(684," ser\xE1 necess\xE1rio definir a propriedade "),t(685,"code"),e(686,"p-url"),n(),e(687,"."),n()()()(),t(688,"tr",13)(689,"td",14)(690,"div",15)(691,"span",16),e(692," p-show-required"),a(693,"br"),n()()(),t(694,"td",17)(695,"code",18),e(696,"boolean"),n()(),t(697,"td",19),e(698,"-"),n(),t(699,"td",20)(700,"p"),e(701,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),n(),t(702,"blockquote")(703,"p"),e(704,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),n()(),t(705,"ul")(706,"li"),e(707,"N\xE3o possuir "),t(708,"code"),e(709,"p-help"),n(),e(710," e/ou "),t(711,"code"),e(712,"p-label"),n(),e(713,"."),n()()()(),t(714,"tr",13)(715,"td",14)(716,"div",15)(717,"span",16),e(718," p-url"),a(719,"br"),n()()(),t(720,"td",17)(721,"code",23),e(722,"string"),n()(),t(723,"td",19),e(724,"-"),n(),t(725,"td",20)(726,"p"),e(727,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),n()()()(),t(728,"h3",9),e(729,"M\xE9todos"),n(),t(730,"table",30)(731,"tr",13)(732,"th",31)(733,"div",15)(734,"h4")(735,"span",16),e(736," clear "),n()()()()(),t(737,"tr",20)(738,"td",20)(739,"p"),e(740,"M\xE9todo respons\xE1vel por "),t(741,"strong"),e(742,"limpar"),n(),e(743," o(s) arquivo(s) selecionado(s)."),n()()()(),a(744,"br"),t(745,"table",30)(746,"tr",13)(747,"th",31)(748,"div",15)(749,"h4")(750,"span",16),e(751," focus "),n()()()()(),t(752,"tr",20)(753,"td",20)(754,"p"),e(755,"Fun\xE7\xE3o que atribui foco ao componente."),n(),t(756,"p"),e(757,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),n(),t(758,"pre")(759,"code"),e(760,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}`),n()()()()(),a(761,"br"),t(762,"table",30)(763,"tr",13)(764,"th",31)(765,"div",15)(766,"h4")(767,"span",16),e(768," selectFiles "),n()()()()(),t(769,"tr",20)(770,"td",20)(771,"p"),e(772,"M\xE9todo respons\xE1vel por "),t(773,"strong"),e(774,"abrir"),n(),e(775," a janela para sele\xE7\xE3o de arquivo(s)."),n()()()(),a(776,"br"),t(777,"table",30)(778,"tr",13)(779,"th",31)(780,"div",15)(781,"h4")(782,"span",16),e(783," sendFiles "),n()()()()(),t(784,"tr",20)(785,"td",20)(786,"p"),e(787,"M\xE9todo respons\xE1vel por "),t(788,"strong"),e(789,"enviar"),n(),e(790," o(s) arquivo(s) selecionado(s)."),n()()()(),a(791,"br"),t(792,"h3"),e(793,"Interfaces"),n(),t(794,"h4",32)(795,"code",5),e(796,"PoUploadFileRestrictions"),n()(),t(797,"div",2)(798,"p"),e(799,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),n()(),t(800,"h4",9),e(801,"Propriedades"),n(),t(802,"table",10)(803,"tr",11)(804,"th",12),e(805,"Nome"),n(),t(806,"th",12),e(807,"Tipo"),n(),t(808,"th",12),e(809,"Descri\xE7\xE3o"),n()(),t(810,"tr",13)(811,"td",14)(812,"div",15)(813,"span",16),e(814," allowedExtensions"),a(815,"br"),n()()(),t(816,"td",17)(817,"code",33),e(818,"Array<string>"),n()(),t(819,"td",20)(820,"em")(821,"strong"),e(822,"(opcional)"),n()(),t(823,"p"),e(824,"Extens\xF5es permitidas de arquivos que ser\xE3o enviados ao servidor, devendo ser informada uma cole\xE7\xE3o de extens\xF5es, por exemplo:"),n(),t(825,"pre")(826,"code"),e(827,"allowedExtensions = ['.png', '.jpg', '.pdf'];"),n()()()(),t(828,"tr",13)(829,"td",14)(830,"div",15)(831,"span",16),e(832," maxFileSize"),a(833,"br"),n()()(),t(834,"td",17)(835,"code",21),e(836,"number"),n()(),t(837,"td",20)(838,"em")(839,"strong"),e(840,"(opcional)"),n()(),t(841,"p"),e(842,"Tamanho m\xE1ximo do arquivo a ser enviado ao servidor."),n(),t(843,"p"),e(844,"Deve ser informado um valor em "),t(845,"em"),e(846,"bytes"),n(),e(847,", por exemplo: "),t(848,"code"),e(849,"31457280"),n(),e(850," (30MB)."),n(),t(851,"blockquote")(852,"p"),e(853,"Por padr\xE3o o valor \xE9 "),t(854,"code"),e(855,"30 MB"),n(),e(856,"."),n()()()(),t(857,"tr",13)(858,"td",14)(859,"div",15)(860,"span",16),e(861," maxFiles"),a(862,"br"),n()()(),t(863,"td",17)(864,"code",21),e(865,"number"),n()(),t(866,"td",20)(867,"em")(868,"strong"),e(869,"(opcional)"),n()(),t(870,"p"),e(871,"Quantidade m\xE1xima de arquivos para o "),t(872,"em"),e(873,"upload"),n(),e(874,"."),n(),t(875,"blockquote")(876,"p"),e(877,"Esta propriedade ser\xE1 v\xE1lida somente se a propriedade "),t(878,"code"),e(879,"p-multiple"),n(),e(880," estiver habilitada e seu valor for maior do que zero."),n()()()(),t(881,"tr",13)(882,"td",14)(883,"div",15)(884,"span",16),e(885," minFileSize"),a(886,"br"),n()()(),t(887,"td",17)(888,"code",21),e(889,"number"),n()(),t(890,"td",20)(891,"em")(892,"strong"),e(893,"(opcional)"),n()(),t(894,"p"),e(895,"Tamanho m\xEDnimo em "),t(896,"em"),e(897,"bytes"),n(),e(898," do arquivo que ser\xE1 enviado ao servidor."),n(),t(899,"blockquote")(900,"p"),e(901,"Por padr\xE3o o valor \xE9 "),t(902,"code"),e(903,"0"),n(),e(904,"."),n()()()()(),t(905,"h4",32)(906,"code",5),e(907,"PoUploadLiterals"),n()(),t(908,"div",2)(909,"p"),e(910,"Interface para defini\xE7\xE3o das literais usadas no "),t(911,"code"),e(912,"po-upload"),n(),e(913,"."),n()(),t(914,"h4",9),e(915,"Propriedades"),n(),t(916,"table",10)(917,"tr",11)(918,"th",12),e(919,"Nome"),n(),t(920,"th",12),e(921,"Tipo"),n(),t(922,"th",12),e(923,"Descri\xE7\xE3o"),n()(),t(924,"tr",13)(925,"td",14)(926,"div",15)(927,"span",16),e(928," dragFilesHere"),a(929,"br"),n()()(),t(930,"td",17)(931,"code",23),e(932,"string"),n()(),t(933,"td",20)(934,"em")(935,"strong"),e(936,"(opcional)"),n()(),t(937,"p"),e(938,"Texto indicativo para a \xE1rea onde os arquivos devem ser arrastados quando utilizada a propriedade "),t(939,"code"),e(940,"p-drag-drop"),n(),e(941,"."),n()()(),t(942,"tr",13)(943,"td",14)(944,"div",15)(945,"span",16),e(946," dragFoldersHere"),a(947,"br"),n()()(),t(948,"td",17)(949,"code",23),e(950,"string"),n()(),t(951,"td",20)(952,"em")(953,"strong"),e(954,"(opcional)"),n()(),t(955,"p"),e(956,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser arrastados quando utilizada a propriedade "),t(957,"code"),e(958,"p-drag-drop"),n(),e(959,"."),n()()(),t(960,"tr",13)(961,"td",14)(962,"div",15)(963,"span",16),e(964," dropFilesHere"),a(965,"br"),n()()(),t(966,"td",17)(967,"code",23),e(968,"string"),n()(),t(969,"td",20)(970,"em")(971,"strong"),e(972,"(opcional)"),n()(),t(973,"p"),e(974,"Texto indicativo para a \xE1rea onde os arquivos devem ser soltos quando utilizada a propriedade "),t(975,"code"),e(976,"p-drag-drop"),n()()()(),t(977,"tr",13)(978,"td",14)(979,"div",15)(980,"span",16),e(981," dropFoldersHere"),a(982,"br"),n()()(),t(983,"td",17)(984,"code",23),e(985,"string"),n()(),t(986,"td",20)(987,"em")(988,"strong"),e(989,"(opcional)"),n()(),t(990,"p"),e(991,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser soltos quando utilizada a propriedade "),t(992,"code"),e(993,"p-drag-drop"),n(),e(994,"."),n()()(),t(995,"tr",13)(996,"td",14)(997,"div",15)(998,"span",16),e(999," errorOccurred"),a(1e3,"br"),n()()(),t(1001,"td",17)(1002,"code",23),e(1003,"string"),n()(),t(1004,"td",20)(1005,"em")(1006,"strong"),e(1007,"(opcional)"),n()(),t(1008,"p"),e(1009,"Texto a ser exibido quando ocorrer erro no envio do arquivo."),n()()(),t(1010,"tr",13)(1011,"td",14)(1012,"div",15)(1013,"span",16),e(1014," files"),a(1015,"br"),n()()(),t(1016,"td",17)(1017,"code",23),e(1018,"string"),n()(),t(1019,"td",20)(1020,"em")(1021,"strong"),e(1022,"(opcional)"),n()(),t(1023,"p"),e(1024,"Par\xE2metro "),t(1025,"em"),e(1026,"files"),n(),e(1027," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),t(1028,"em"),e(1029,"dragDrop"),n(),e(1030,"."),n()()(),t(1031,"tr",13)(1032,"td",14)(1033,"div",15)(1034,"span",16),e(1035," folders"),a(1036,"br"),n()()(),t(1037,"td",17)(1038,"code",23),e(1039,"string"),n()(),t(1040,"td",20)(1041,"em")(1042,"strong"),e(1043,"(opcional)"),n()(),t(1044,"p"),e(1045,"Par\xE2metro "),t(1046,"em"),e(1047,"folders"),n(),e(1048," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),t(1049,"em"),e(1050,"dragDrop"),n(),e(1051,"."),n()()(),t(1052,"tr",13)(1053,"td",14)(1054,"div",15)(1055,"span",16),e(1056," invalidDropArea"),a(1057,"br"),n()()(),t(1058,"td",17)(1059,"code",23),e(1060,"string"),n()(),t(1061,"td",20)(1062,"em")(1063,"strong"),e(1064,"(opcional)"),n()(),t(1065,"p"),e(1066,"Texto exibido caso o usu\xE1rio arrastar um arquivo para um local inv\xE1lido ao utilizar a op\xE7\xE3o de "),t(1067,"em"),e(1068,"dragDrop"),n(),e(1069,"."),n()()(),t(1070,"tr",13)(1071,"td",14)(1072,"div",15)(1073,"span",16),e(1074," selectFile"),a(1075,"br"),n()()(),t(1076,"td",17)(1077,"code",23),e(1078,"string"),n()(),t(1079,"td",20)(1080,"em")(1081,"strong"),e(1082,"(opcional)"),n()(),t(1083,"p"),e(1084,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos."),n()()(),t(1085,"tr",13)(1086,"td",14)(1087,"div",15)(1088,"span",16),e(1089," selectFiles"),a(1090,"br"),n()()(),t(1091,"td",17)(1092,"code",23),e(1093,"string"),n()(),t(1094,"td",20)(1095,"em")(1096,"strong"),e(1097,"(opcional)"),n()(),t(1098,"p"),e(1099,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),t(1100,"code"),e(1101,"p-multiple"),n(),e(1102,"."),n()()(),t(1103,"tr",13)(1104,"td",14)(1105,"div",15)(1106,"span",16),e(1107," selectFilesOnComputer"),a(1108,"br"),n()()(),t(1109,"td",17)(1110,"code",23),e(1111,"string"),n()(),t(1112,"td",20)(1113,"em")(1114,"strong"),e(1115,"(opcional)"),n()(),t(1116,"p"),e(1117,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),t(1118,"em"),e(1119,"dragDrop"),n(),e(1120,"."),n()()(),t(1121,"tr",13)(1122,"td",14)(1123,"div",15)(1124,"span",16),e(1125," selectFolder"),a(1126,"br"),n()()(),t(1127,"td",17)(1128,"code",23),e(1129,"string"),n()(),t(1130,"td",20)(1131,"em")(1132,"strong"),e(1133,"(opcional)"),n()(),t(1134,"p"),e(1135,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),t(1136,"code"),e(1137,"p-directory"),n(),e(1138,"."),n()()(),t(1139,"tr",13)(1140,"td",14)(1141,"div",15)(1142,"span",16),e(1143," selectFolderOnComputer"),a(1144,"br"),n()()(),t(1145,"td",17)(1146,"code",23),e(1147,"string"),n()(),t(1148,"td",20)(1149,"em")(1150,"strong"),e(1151,"(opcional)"),n()(),t(1152,"p"),e(1153,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),t(1154,"em"),e(1155,"dragDrop"),n(),e(1156,"."),n()()(),t(1157,"tr",13)(1158,"td",14)(1159,"div",15)(1160,"span",16),e(1161," sentWithSuccess"),a(1162,"br"),n()()(),t(1163,"td",17)(1164,"code",23),e(1165,"string"),n()(),t(1166,"td",20)(1167,"em")(1168,"strong"),e(1169,"(opcional)"),n()(),t(1170,"p"),e(1171,"Texto a ser exibido quando o envio do arquivo for realizado com sucesso."),n()()(),t(1172,"tr",13)(1173,"td",14)(1174,"div",15)(1175,"span",16),e(1176," startSending"),a(1177,"br"),n()()(),t(1178,"td",17)(1179,"code",23),e(1180,"string"),n()(),t(1181,"td",20)(1182,"em")(1183,"strong"),e(1184,"(opcional)"),n()(),t(1185,"p"),e(1186,"Texto exibido no label do bot\xE3o para iniciar o envio dos arquivos."),n()()()()())},dependencies:[y],encapsulation:2})}return l})();var Me=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"ph ph-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,r){this.route=s,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let r=s.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)(W(oe),W(ae))};static \u0275cmp=f({type:l,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title"," Upload",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(r,i){r&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),a(3,"sample-po-upload-doc"),n(),t(4,"po-tab",3),a(5,"sample-po-upload-basic-view")(6,"sample-po-upload-labs-view")(7,"sample-po-upload-resume-view")(8,"sample-po-upload-rs-view"),n()()()),r&2&&(E("p-actions",i.actions),d(2),E("p-active",i.activeTab.includes("doc")),d(2),E("p-hide",i.hidePoWebSample)("p-active",i.activeTab.includes("web")))},dependencies:[ue,w,_,Se,ve,we,ye,Pe],encapsulation:2})}return l})();var Ke=[{path:"",component:Me}],qe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=A({type:l});static \u0275inj=H({imports:[K.forChild(Ke),K]})}return l})();var yt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=A({type:l});static \u0275inj=H({imports:[be,qe]})}return l})();export{yt as DocPoUploadModule};
