import{$ as T,$a as C,F as q,Fa as v,G as k,Ga as e,Ia as f,Na as A,Oa as B,Od as H,Pa as x,T as l,U as E,Wb as R,Xd as S,Yb as U,Yd as b,Zb as V,_ as p,ad as N,be as L,ha as d,ka as y,na as n,oa as t,oc as M,od as h,pa as i,re as g,se as X,ta as w,ua as u,x as D,y as P}from"./chunk-QVEZB6GT.js";var ne=()=>({property:"name",required:!0,showRequired:!0}),ie=o=>[o],_=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=p({type:o,selectors:[["sample-po-dynamic-form-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-fields"]],template:function(a,m){a&1&&i(0,"po-dynamic-form",0),a&2&&d("p-fields",x(2,ie,B(1,ne)))},dependencies:[h],encapsulation:2})}return o})();var ae=o=>({"docs-sample-code-tabs":o}),W=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=p({type:o,selectors:[["sample-po-dynamic-form-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,m){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form Basic"),t(),n(4,"a",2),u("click",function(){return m.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),t()()()()(),n(21,"div",10),i(22,"sample-po-dynamic-form-basic"),t(),i(23,"hr")),a&2&&(l(5),y("po-icon "+m.sampleCodeButtonIcon),l(),f(" ",m.sampleCodeButtonLabel,""),l(),d("ngClass",x(4,ae,m.hideSampleCodeTabs)))},dependencies:[C,g,S,b,_],encapsulation:2})}return o})();var O=(()=>{class o{getCity(r){switch(r){case 1:return[{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return[{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return[{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return[{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return[]}getUserDocument(r){let a={property:"cpf",visible:!0},m={property:"cnpj",visible:!0};return{fields:[r.isJuridicPerson?m:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var K=(()=>{class o{poNotification;registerService;person={};validateFields=["state"];fields=[{property:"name",divider:"PERSONAL DATA",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password"},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",divider:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",divider:"Work data",range:!0,gridColumns:5,gridSmColumns:12},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",divider:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:!0,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:!0},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:!0,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:!0},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:!0,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:!0},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:L.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:!0,url:"https://po-sample-api.onrender.com/v1/uploads/addFile"}];constructor(r,a){this.poNotification=r,this.registerService=a}ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:!1,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"}}onChangeFields(r){return{value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(r.value.state),disabled:!1}]}}onLoadFields(r){return this.registerService.getUserDocument(r)}static \u0275fac=function(a){return new(a||o)(E(N),E(O))};static \u0275cmp=p({type:o,selectors:[["sample-po-dynamic-form-register"]],standalone:!1,features:[A([O])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,m){if(a&1){let s=w();i(0,"po-dynamic-form",1,0)(2,"br"),n(3,"div",2)(4,"po-button",3),u("p-click",function(){q(s);let z=v(1);return m.poNotification.success("Data saved successfully!"),k(z.form.reset())}),t()()}if(a&2){let s=v(1);d("p-fields",m.fields)("p-load",m.onLoadFields.bind(m))("p-validate",m.onChangeFields.bind(m))("p-validate-fields",m.validateFields)("p-value",m.person),l(4),d("p-disabled",s==null?null:s.form.invalid)}},dependencies:[M,h],encapsulation:2})}return o})();var de=o=>({"docs-sample-code-tabs":o}),G=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=p({type:o,selectors:[["sample-po-dynamic-form-register-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,m){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form - Register"),t(),n(4,"a",2),u("click",function(){return m.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  ForceBooleanComponentEnum
} from '@po-ui/ng-components';
import { PoDynamicFormRegisterService } from './sample-po-dynamic-form-register.service';

@Component({
  selector: 'sample-po-dynamic-form-register',
  templateUrl: './sample-po-dynamic-form-register.component.html',
  providers: [PoDynamicFormRegisterService],
  standalone: false
})
export class SamplePoDynamicFormRegisterComponent implements OnInit {
  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      divider: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password'
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', divider: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      divider: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'hobbies',
      divider: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile'
    }
  ];

  constructor(
    public poNotification: PoNotificationService,
    private registerService: PoDynamicFormRegisterService
  ) {}

  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          options: this.registerService.getCity(changedValue.value.state),
          disabled: false
        }
      ]
    };
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormRegisterService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-dynamic-form-register"),t(),i(27,"hr")),a&2&&(l(5),y("po-icon "+m.sampleCodeButtonIcon),l(),f(" ",m.sampleCodeButtonLabel,""),l(),d("ngClass",x(4,de,m.hideSampleCodeTabs)))},dependencies:[C,g,S,b,K],encapsulation:2})}return o})();var j=(()=>{class o{getCity(r){switch(r){case 1:return[{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return[{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return[{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return[{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return[]}getUserDocument(r){let a={property:"cpf",visible:!0},m={property:"cnpj",visible:!0};return{fields:[r.isJuridicPerson?m:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Q=(()=>{class o{poNotification;registerService;person={};validateFields=["state"];fields=[{property:"name",container:"PERSONAL DATA",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password"},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",container:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",container:"Work data",range:!0,gridColumns:5,gridSmColumns:12},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",container:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:!0,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:!0},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:!0,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:!0},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:!0,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:!0},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:L.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:!0,url:"https://po-sample-api.onrender.com/v1/uploads/addFile",customAction:{icon:"an an-download",visible:!0},customActionClick:r=>{console.log("Iniciar download para o arquivo:",r.name)}}];constructor(r,a){this.poNotification=r,this.registerService=a}ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:!1,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"}}onChangeFields(r){return{value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(r.value.state),disabled:!1}]}}onLoadFields(r){return this.registerService.getUserDocument(r)}static \u0275fac=function(a){return new(a||o)(E(N),E(j))};static \u0275cmp=p({type:o,selectors:[["sample-po-dynamic-form-container"]],standalone:!1,features:[A([j])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,m){if(a&1){let s=w();i(0,"po-dynamic-form",1,0)(2,"br"),n(3,"div",2)(4,"po-button",3),u("p-click",function(){q(s);let z=v(1);return m.poNotification.success("Data saved successfully!"),k(z.form.reset())}),t()()}if(a&2){let s=v(1);d("p-fields",m.fields)("p-load",m.onLoadFields.bind(m))("p-validate",m.onChangeFields.bind(m))("p-validate-fields",m.validateFields)("p-value",m.person),l(4),d("p-disabled",s==null?null:s.form.invalid)}},dependencies:[M,h],encapsulation:2})}return o})();var ue=o=>({"docs-sample-code-tabs":o}),Y=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=p({type:o,selectors:[["sample-po-dynamic-form-container-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,m){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form - Container"),t(),n(4,"a",2),u("click",function(){return m.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  ForceBooleanComponentEnum,
  PoUploadFile
} from '@po-ui/ng-components';
import { PoDynamicFormContainerService } from './sample-po-dynamic-form-container.service';

@Component({
  selector: 'sample-po-dynamic-form-container',
  templateUrl: './sample-po-dynamic-form-container.component.html',
  providers: [PoDynamicFormContainerService],
  standalone: false
})
export class SamplePoDynamicFormContainerComponent implements OnInit {
  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      container: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password'
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', container: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      container: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'hobbies',
      container: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile',
      customAction: { icon: 'an an-download', visible: true },
      customActionClick: (file: PoUploadFile) => {
        console.log('Iniciar download para o arquivo:', file.name);
      }
    }
  ];

  constructor(
    public poNotification: PoNotificationService,
    private registerService: PoDynamicFormContainerService
  ) {}

  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          options: this.registerService.getCity(changedValue.value.state),
          disabled: false
        }
      ]
    };
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormContainerService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-dynamic-form-container"),t(),i(27,"hr")),a&2&&(l(5),y("po-icon "+m.sampleCodeButtonIcon),l(),f(" ",m.sampleCodeButtonLabel,""),l(),d("ngClass",x(4,ue,m.hideSampleCodeTabs)))},dependencies:[C,g,S,b,Q],encapsulation:2})}return o})();var Z=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=p({type:o,selectors:[["sample-po-dynamic-form-doc"]],standalone:!1,decls:4070,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"language-ts"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["href","documentation/po-dynamic-form#po-dynamic-form-load"],["href","documentation/po-dynamic-form#po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-javascript"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["id","po-dynamic-form-load"],["id","po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type","PoDynamicFormField"],["id","po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,m){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2),n(5,"h3",3),e(6,"Componente"),t(),n(7,"h4",4)(8,"code",5),e(9,"PoDynamicFormComponent"),t()(),n(10,"div",2)(11,"p"),e(12,"Componente para cria\xE7\xE3o de formul\xE1rios din\xE2micos a partir de uma lista de objetos."),t(),n(13,"p"),e(14,"Tamb\xE9m \xE9 poss\xEDvel verificar se o formul\xE1rio est\xE1 v\xE1lido e informar valores para a exibi\xE7\xE3o de informa\xE7\xF5es. "),t()(),n(15,"div",6)(16,"h4",7),e(17,"Seletor"),t(),n(18,"pre",8),e(19,`<po-dynamic-form
    p-auto-focus="string"
    p-fields="Array<PoDynamicFormField>"
    (p-form)="EventEmitter"
    p-group-form="boolean"
    p-load="string | Function"
    p-validate="string | Function"
    p-validate-fields="Array<string>"
    p-validate-on-input="boolean"
    p-value="any" >
</po-dynamic-form>
`),t()(),n(20,"h4",9),e(21,"Propriedades"),t(),n(22,"table",10)(23,"tr",11)(24,"th",12),e(25,"Nome"),t(),n(26,"th",12),e(27,"Tipo"),t(),n(28,"th",12),e(29,"Padr\xE3o"),t(),n(30,"th",12),e(31,"Descri\xE7\xE3o"),t()(),n(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),e(36," p-auto-focus"),i(37,"br"),t()()(),n(38,"td",17)(39,"code",18),e(40,"string"),t()(),n(41,"td",19),e(42,"-"),t(),n(43,"td",20)(44,"em")(45,"strong"),e(46,"(opcional)"),t()(),n(47,"p"),e(48,"Nome da propriedade, atribu\xEDda ao "),n(49,"code"),e(50,"PoDynamicFormField.property"),t(),e(51,", que iniciar\xE1 o campo com foco."),t()()(),n(52,"tr",13)(53,"td",14)(54,"div",15)(55,"span",16),e(56," p-fields"),i(57,"br"),t()()(),n(58,"td",17)(59,"code",21),e(60,"Array<PoDynamicFormField>"),t()(),n(61,"td",19)(62,"p")(63,"code"),e(64,"[]"),t()()(),n(65,"td",20)(66,"p"),e(67,"Cole\xE7\xE3o de objetos que implementam a interface "),n(68,"code"),e(69,"PoDynamicFormField"),t(),e(70,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),t(),n(71,"blockquote")(72,"p"),e(73,"Ex: "),n(74,"code"),e(75,"[ { property: 'name' } ]"),t()()(),n(76,"p"),e(77,"Regras de tipagem e cria\xE7\xE3o dos componentes:"),t(),n(78,"ul")(79,"li"),e(80,"Caso o "),n(81,"em"),e(82,"type"),t(),e(83," informado seja "),n(84,"em"),e(85,"boolean"),t(),e(86," o componente criado ser\xE1 o "),n(87,"code"),e(88,"po-switch"),t(),e(89,"."),t(),n(90,"li"),e(91,"Caso o "),n(92,"em"),e(93,"type"),t(),e(94," informado seja "),n(95,"em"),e(96,"currency"),t(),e(97," e n\xE3o seja informado um "),n(98,"em"),e(99,"mask"),t(),e(100," ou "),n(101,"em"),e(102,"pattern"),t(),e(103," o componente criado ser\xE1 o "),n(104,"code"),e(105,"po-decimal"),t(),e(106,`,
caso seja informado um `),n(107,"em"),e(108,"mask"),t(),e(109," ou "),n(110,"em"),e(111,"pattern"),t(),e(112," o componente criado ser\xE1 o "),n(113,"code"),e(114,"po-input"),t(),e(115,"."),t(),n(116,"li"),e(117,"Caso o "),n(118,"em"),e(119,"type"),t(),e(120," informado seja "),n(121,"em"),e(122,"number"),t(),e(123," e n\xE3o seja informado um "),n(124,"em"),e(125,"mask"),t(),e(126," ou "),n(127,"em"),e(128,"pattern"),t(),e(129," o componente criado ser\xE1 o "),n(130,"code"),e(131,"po-number"),t(),e(132,`, caso seja
informado um `),n(133,"em"),e(134,"mask"),t(),e(135," ou "),n(136,"em"),e(137,"pattern"),t(),e(138," o componente criado ser\xE1 o "),n(139,"code"),e(140,"po-input"),t(),e(141,"."),t(),n(142,"li"),e(143,"Caso a lista possua a propriedade "),n(144,"code"),e(145,"options"),t(),e(146," e a mesma possua at\xE9 3 itens o componente criado ser\xE1 o "),n(147,"code"),e(148,"po-radio-group"),t(),e(149,`
ou `),n(150,"code"),e(151,"po-checkbox-group"),t(),e(152," se informar a propriedade "),n(153,"code"),e(154,"optionsMulti"),t(),e(155,"."),t(),n(156,"li"),e(157,"Caso a mesma possua 3 ou mais itens, ser\xE1 criado o componente "),n(158,"code"),e(159,"po-select"),t(),e(160," ou, "),n(161,"code"),e(162,"po-multiselect"),t(),e(163," se a propriedade "),n(164,"code"),e(165,"optionsMulti"),t(),e(166,`
for verdadeira.`),t(),n(167,"li"),e(168,"Caso o "),n(169,"em"),e(170,"type"),t(),e(171," informado seja "),n(172,"em"),e(173,"date"),t(),e(174," ou "),n(175,"em"),e(176,"datetime"),t(),e(177," o componente criado ser\xE1 o "),n(178,"code"),e(179,"po-datepicker"),t(),e(180,"."),t(),n(181,"li"),e(182,"Caso seja informado a propriedade "),n(183,"code"),e(184,"optionsService"),t(),e(185," o componente criado ser\xE1 o "),n(186,"code"),e(187,"po-combo"),t(),e(188,"."),t(),n(189,"li"),e(190,"Caso o "),n(191,"em"),e(192,"type"),t(),e(193," informado seja "),n(194,"em"),e(195,"time"),t(),e(196," o componente criado ser\xE1 um "),n(197,"code"),e(198,"po-input"),t(),e(199," podendo receber um "),n(200,"em"),e(201,"mask"),t(),e(202,` para formatar
o valor exibido, caso n\xE3o seja informado um `),n(203,"em"),e(204,"mask"),t(),e(205," o componente ser\xE1 criado com a m\xE1scara '99:99' por padr\xE3o."),t(),n(206,"li"),e(207,"Caso a lista possua a propriedade "),n(208,"code"),e(209,"rows"),t(),e(210,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),n(211,"code"),e(212,"po-textarea"),t(),e(213,", caso o valor da propriedade "),n(214,"code"),e(215,"rows"),t(),e(216," seja menor que 3 o componente criado ser\xE1 o "),n(217,"code"),e(218,"po-input"),t(),e(219,"."),t(),n(220,"li"),e(221,"Caso seja informada a propriedade "),n(222,"code"),e(223,"secret"),t(),e(224," o componente criado ser\xE1 o "),n(225,"code"),e(226,"po-password"),t(),e(227,"."),t(),n(228,"li"),e(229,"Caso o "),n(230,"em"),e(231,"type"),t(),e(232," informado seja "),n(233,"em"),e(234,"string"),t(),e(235," o componente criado ser\xE1 o "),n(236,"code"),e(237,"po-input"),t(),e(238,"."),n(239,"blockquote")(240,"p"),e(241,"Ao alterar o valor das "),n(242,"code"),e(243,"properties"),t(),e(244,", visibilidade e/ou agrupamentos via container, os "),n(245,"code"),e(246,"fields"),t(),e(247," que utilizam servi\xE7o podem refazer as chamadas para as API's."),t()()()()()(),n(248,"tr",13)(249,"td",14)(250,"div",22)(251,"span",23),e(252," (p-form)"),i(253,"br"),t()()(),n(254,"td",17)(255,"code",24),e(256,"EventEmitter"),t()(),n(257,"td",19),e(258,"-"),t(),n(259,"td",20)(260,"em")(261,"strong"),e(262,"(opcional)"),t()(),n(263,"p"),e(264,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),t(),n(265,"p"),e(266,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),n(267,"em"),e(268,"template reference"),t(),e(269," e atrav\xE9s do "),n(270,"em"),e(271,"output"),t(),e(272,", veja os exemplos abaixo:"),t(),n(273,"blockquote")(274,"p")(275,"em"),e(276,"template reference"),t()()(),n(277,"pre")(278,"code",25),e(279,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>`),t()(),n(280,"blockquote")(281,"p")(282,"em"),e(283,"Output"),t()()(),n(284,"pre")(285,"code",25),e(286,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...`),t()(),n(287,"pre")(288,"code",26),e(289,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}`),t()(),n(290,"blockquote")(291,"p"),e(292,"Caso a propriedade "),n(293,"code"),e(294,"p-group-form"),t(),e(295,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),t()()()(),n(296,"tr",13)(297,"td",14)(298,"div",15)(299,"span",16),e(300," p-group-form"),i(301,"br"),t()()(),n(302,"td",17)(303,"code",27),e(304,"boolean"),t()(),n(305,"td",19),e(306,"-"),t(),n(307,"td",20)(308,"em")(309,"strong"),e(310,"(opcional)"),t()(),n(311,"p"),e(312,"Ao informar esta propriedade, o componente passar\xE1 a utilizar o formul\xE1rio pai para criar os "),n(313,"code"),e(314,"FormControl"),t(),e(315,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),t(),n(316,"pre")(317,"code",25),e(318,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>`),t()()()(),n(319,"tr",13)(320,"td",14)(321,"div",15)(322,"span",16),e(323," p-load"),i(324,"br"),t()()(),n(325,"td",17)(326,"code",18),e(327,"string "),t(),n(328,"code",28),e(329," Function"),t()(),n(330,"td",19),e(331,"-"),t(),n(332,"td",20)(333,"em")(334,"strong"),e(335,"(opcional)"),t()(),n(336,"p"),e(337,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),t(),n(338,"p"),e(339,"A propriedade aceita os seguintes tipos:"),t(),n(340,"ul")(341,"li")(342,"code"),e(343,"string"),t(),e(344,": "),n(345,"em"),e(346,"Endpoint"),t(),e(347," usado pelo componente para requisi\xE7\xE3o via "),n(348,"code"),e(349,"POST"),t(),e(350,"."),t(),n(351,"li")(352,"code"),e(353,"function"),t(),e(354,": M\xE9todo que ser\xE1 executado."),t()(),n(355,"p"),e(356,"Ao ser executado, ir\xE1 receber como par\xE2metro o objeto informado no "),n(357,"code"),e(358,"p-value"),t(),e(359,"."),t(),n(360,"p"),e(361,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(362,"a",29),e(363,"PoDynamicFormLoad"),t(),e(364,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),t(),n(365,"p"),e(366,"Por exemplo:"),t(),n(367,"pre")(368,"code"),e(369,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}`),t()(),n(370,"p"),e(371,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(372,"code"),e(373,"bind"),t(),e(374,", por exemplo:"),t(),n(375,"pre")(376,"code"),e(377,'[p-load]="onLoadFields.bind(this)"'),t()()()(),n(378,"tr",13)(379,"td",14)(380,"div",15)(381,"span",16),e(382," p-validate"),i(383,"br"),t()()(),n(384,"td",17)(385,"code",18),e(386,"string "),t(),n(387,"code",28),e(388," Function"),t()(),n(389,"td",19),e(390,"-"),t(),n(391,"td",20)(392,"em")(393,"strong"),e(394,"(opcional)"),t()(),n(395,"p"),e(396,"Fun\xE7\xE3o ou servi\xE7o para validar as "),n(397,"strong"),e(398,"mudan\xE7as do formul\xE1rio"),t(),e(399,"."),t(),n(400,"p"),e(401,"A propriedade aceita os seguintes tipos:"),t(),n(402,"ul")(403,"li")(404,"code"),e(405,"string"),t(),e(406,": "),n(407,"em"),e(408,"Endpoint"),t(),e(409," usado pelo componente para requisi\xE7\xE3o via "),n(410,"code"),e(411,"POST"),t(),e(412,"."),t(),n(413,"li")(414,"code"),e(415,"function"),t(),e(416,": M\xE9todo que ser\xE1 executado."),t()(),n(417,"p"),e(418,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),n(419,"code"),e(420,"PoDynamicFormFieldChanged"),t(),e(421,":"),t(),n(422,"pre")(423,"code"),e(424,"{ property: 'property name', value: 'new value' }"),t()(),n(425,"p"),e(426,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(427,"a",30),e(428,"PoDynamicFormValidation"),t(),e(429,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),t(),n(430,"pre")(431,"code"),e(432,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}`),t()(),n(433,"p"),e(434,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(435,"code"),e(436,"bind"),t(),e(437,", por exemplo:"),t(),n(438,"pre")(439,"code"),e(440,'[p-validate]="this.myFunction.bind(this)"'),t()(),n(441,"blockquote")(442,"p"),e(443,"Se houver uma lista de campos para valida\xE7\xE3o definida em "),n(444,"code"),e(445,"p-validate-fields"),t(),e(446,", a propriedade "),n(447,"code"),e(448,"validate"),t(),e(449," s\xF3 receber\xE1 o disparo para os campos equivalentes."),t()()()(),n(450,"tr",13)(451,"td",14)(452,"div",15)(453,"span",16),e(454," p-validate-fields"),i(455,"br"),t()()(),n(456,"td",17)(457,"code",31),e(458,"Array<string>"),t()(),n(459,"td",19),e(460,"-"),t(),n(461,"td",20)(462,"em")(463,"strong"),e(464,"(opcional)"),t()(),n(465,"p"),e(466,"Lista que define os campos que ir\xE3o disparar o validate do form."),t()()(),n(467,"tr",13)(468,"td",14)(469,"div",15)(470,"span",16),e(471," p-validate-on-input"),i(472,"br"),t()()(),n(473,"td",17)(474,"code",27),e(475,"boolean"),t()(),n(476,"td",19),e(477,"-"),t(),n(478,"td",20)(479,"em")(480,"strong"),e(481,"(opcional)"),t()(),n(482,"p"),e(483,"Ao informar esta propriedade, o componente passar\xE1 a emitir o valor a cada caractere digitado."),t(),n(484,"p"),e(485,"Pode ser aplicado nos seguintes componentes:"),t(),n(486,"ul")(487,"li"),e(488,"po-input"),t(),n(489,"li"),e(490,"po-number"),t(),n(491,"li"),e(492,"po-decimal"),t(),n(493,"li"),e(494,"po-textarea"),t(),n(495,"li"),e(496,"po-password"),t()(),n(497,"p"),e(498,"Deve informar os campos que deseja receber as emiss\xF5es na propriedade "),n(499,"code"),e(500,"p-validate-fields"),t(),e(501,"."),t()()(),n(502,"tr",13)(503,"td",14)(504,"div",15)(505,"span",16),e(506," p-value"),i(507,"br"),t()()(),n(508,"td",17)(509,"code",32),e(510,"any"),t()(),n(511,"td",19),e(512,"-"),t(),n(513,"td",20)(514,"p"),e(515,"Objeto que ser\xE1 utilizado como valor para exibir as informa\xE7\xF5es, ser\xE1 recuperado e preenchido atrav\xE9s do atributo "),n(516,"em"),e(517,"property"),t(),e(518,`
dos objetos contidos na propridade `),n(519,"code"),e(520,"p-fields"),t(),e(521,"."),t(),n(522,"p"),e(523,"Pode iniciar com valor ou apenas com um objeto vazio que ser\xE1 preenchido conforme descrito acima."),t(),n(524,"blockquote")(525,"p"),e(526,"Ex: "),n(527,"code"),e(528,"{ name: 'po' }"),t()()()()()(),n(529,"h3",9),e(530,"M\xE9todos"),t(),n(531,"table",33)(532,"tr",13)(533,"th",34)(534,"div",15)(535,"h4")(536,"span",16),e(537," focus "),t()()()()(),n(538,"tr",20)(539,"td",20)(540,"p"),e(541,"Fun\xE7\xE3o que atribui foco ao campo desejado."),t(),n(542,"p"),e(543,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a inst\xE2ncia do "),n(544,"code"),e(545,"dynamic form"),t(),e(546,", como por exemplo:"),t(),n(547,"pre")(548,"code",25),e(549,'<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>'),t()(),n(550,"pre")(551,"code",35),e(552,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}`),t()()()()(),n(553,"h5")(554,"b"),e(555,"Par\xE2metros"),t()(),n(556,"table",10)(557,"tr",11)(558,"th",12),e(559,"Nome"),t(),n(560,"th",12),e(561,"Tipo"),t(),n(562,"th",12),e(563,"Descri\xE7\xE3o"),t()(),n(564,"tr",13)(565,"td",14),e(566," property"),t(),n(567,"td",17)(568,"code",36),e(569," string "),t()(),n(570,"td",20)(571,"p"),e(572,"Nome da propriedade atribu\xEDda ao "),n(573,"code"),e(574,"PoDynamicFormField.property"),t(),e(575,"."),t()()()(),i(576,"br"),n(577,"h3"),e(578,"Interfaces"),t(),n(579,"h4",37)(580,"code",5),e(581,"PoDynamicFormField"),t()(),n(582,"div",2)(583,"p"),e(584," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente."),t()(),n(585,"h4",9),e(586,"Propriedades"),t(),n(587,"table",10)(588,"tr",11)(589,"th",12),e(590,"Nome"),t(),n(591,"th",12),e(592,"Tipo"),t(),n(593,"th",12),e(594,"Descri\xE7\xE3o"),t()(),n(595,"tr",13)(596,"td",14)(597,"div",15)(598,"span",16),e(599," advancedFilters"),i(600,"br"),t()()(),n(601,"td",17)(602,"code",38),e(603,"Array<PoLookupAdvancedFilter>"),t()(),n(604,"td",20)(605,"em")(606,"strong"),e(607,"(opcional)"),t()(),n(608,"p"),e(609,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),n(610,"blockquote")(611,"p"),e(612,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),n(613,"p"),e(614,"Exemplo de URL com busca avan\xE7ada:"),t(),n(615,"p")(616,"code"),e(617,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),n(618,"p"),e(619,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),n(620,"p")(621,"code"),e(622,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),n(623,"tr",13)(624,"td",14)(625,"div",15)(626,"span",16),e(627," autoHeight"),i(628,"br"),t()()(),n(629,"td",17)(630,"code",27),e(631,"boolean"),t()(),n(632,"td",20)(633,"em")(634,"strong"),e(635,"(opcional)"),t()(),n(636,"p"),e(637,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),n(638,"p")(639,"strong"),e(640,"Componentes compat\xEDveis:"),t(),n(641,"code"),e(642,"po-multiselect"),t(),e(643,", "),n(644,"code"),e(645,"po-lookup"),t(),e(646,"."),t()()(),n(647,"tr",13)(648,"td",14)(649,"div",15)(650,"span",16),e(651," autoUpload"),i(652,"br"),t()()(),n(653,"td",17)(654,"code",27),e(655,"boolean"),t()(),n(656,"td",20)(657,"em")(658,"strong"),e(659,"(opcional)"),t()(),n(660,"p"),e(661,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),n(662,"p")(663,"strong"),e(664,"Componente compat\xEDvel"),t(),e(665,": "),n(666,"code"),e(667,"po-upload"),t()()()(),n(668,"tr",13)(669,"td",14)(670,"div",15)(671,"span",16),e(672," booleanFalse"),i(673,"br"),t()()(),n(674,"td",17)(675,"code",18),e(676,"string"),t()(),n(677,"td",20)(678,"em")(679,"strong"),e(680,"(opcional)"),t()(),n(681,"p"),e(682,"Texto exibido quando o valor do componente for "),n(683,"em"),e(684,"false"),t(),e(685,"."),t()()(),n(686,"tr",13)(687,"td",14)(688,"div",15)(689,"span",16),e(690," booleanTrue"),i(691,"br"),t()()(),n(692,"td",17)(693,"code",18),e(694,"string"),t()(),n(695,"td",20)(696,"em")(697,"strong"),e(698,"(opcional)"),t()(),n(699,"p"),e(700,"Texto exibido quando o valor do componente for "),n(701,"em"),e(702,"true"),t(),e(703,"."),t()()(),n(704,"tr",13)(705,"td",14)(706,"div",15)(707,"span",16),e(708," changeOnEnter"),i(709,"br"),t()()(),n(710,"td",17)(711,"code",27),e(712,"boolean"),t()(),n(713,"td",20)(714,"em")(715,"strong"),e(716,"(opcional)"),t()(),n(717,"p"),e(718,"Indica que o evento "),n(719,"code"),e(720,"p-change"),t(),e(721,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),n(722,"code"),e(723,"po-combo"),t(),e(724,"."),t()()(),n(725,"tr",13)(726,"td",14)(727,"div",15)(728,"span",16),e(729," changeVisibleColumns"),i(730,"br"),t()()(),n(731,"td",17)(732,"code",28),e(733,"Function"),t()(),n(734,"td",20)(735,"em")(736,"strong"),e(737,"(opcional)"),t()(),n(738,"p"),e(739,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),n(740,"p"),e(741,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(742,"p")(743,"strong"),e(744,"Componentes compat\xEDveis"),t(),e(745,": "),n(746,"code"),e(747,"po-lookup"),t()()()(),n(748,"tr",13)(749,"td",14)(750,"div",15)(751,"span",16),e(752," clean"),i(753,"br"),t()()(),n(754,"td",17)(755,"code",27),e(756,"boolean"),t()(),n(757,"td",20)(758,"em")(759,"strong"),e(760,"(opcional)"),t()(),n(761,"p"),e(762,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),n(763,"p")(764,"strong"),e(765,"Componentes compat\xEDveis:"),t(),n(766,"code"),e(767,"po-datepicker"),t(),e(768,", "),n(769,"code"),e(770,"po-datepicker-range"),t(),e(771,", "),n(772,"code"),e(773,"po-input"),t(),e(774,", "),n(775,"code"),e(776,"po-number"),t(),e(777,", "),n(778,"code"),e(779,"po-decimal"),t(),e(780,", "),n(781,"code"),e(782,"po-combo"),t(),e(783,", "),n(784,"code"),e(785,"po-lookup"),t(),e(786,", "),n(787,"code"),e(788,"po-password"),t()()()(),n(789,"tr",13)(790,"td",14)(791,"div",15)(792,"span",16),e(793," columnRestoreManager"),i(794,"br"),t()()(),n(795,"td",17)(796,"code",28),e(797,"Function"),t()(),n(798,"td",20)(799,"em")(800,"strong"),e(801,"(opcional)"),t()(),n(802,"p"),e(803,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),n(804,"p"),e(805,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(806,"p")(807,"strong"),e(808,"Componentes compat\xEDveis"),t(),e(809,": "),n(810,"code"),e(811,"po-lookup"),t()()()(),n(812,"tr",13)(813,"td",14)(814,"div",15)(815,"span",16),e(816," columns"),i(817,"br"),t()()(),n(818,"td",17)(819,"code",39),e(820,"Array<PoLookupColumn> "),t(),n(821,"code",40),e(822," number"),t()(),n(823,"td",20)(824,"em")(825,"strong"),e(826,"(opcional)"),t()(),n(827,"p"),e(828,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),n(829,"code"),e(830,"searchService"),t(),e(831,`,
essa propriedade deve receber um array de objetos que implementam a interface `),n(832,"a",41)(833,"code"),e(834,"PoLookupColumn"),t()(),e(835,"."),t(),n(836,"blockquote")(837,"p"),e(838,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),n(839,"em"),e(840,"label"),t(),e(841," e "),n(842,"em"),e(843,"value"),t(),e(844,` para valores
de tela e do model respectivamente.`),t()(),n(845,"p")(846,"strong"),e(847,"Componentes compat\xEDveis:"),t(),n(848,"code"),e(849,"po-radio-group"),t(),e(850,", "),n(851,"code"),e(852,"po-lookup"),t(),e(853,", "),n(854,"code"),e(855,"po-checkbox-group"),t(),e(856,"."),t()()(),n(857,"tr",13)(858,"td",14)(859,"div",15)(860,"span",16),e(861," container"),i(862,"br"),t()()(),n(863,"td",17)(864,"code",18),e(865,"string"),t()(),n(866,"td",20)(867,"em")(868,"strong"),e(869,"(opcional)"),t()(),n(870,"p"),e(871,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),n(872,"p"),e(873,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),n(874,"tr",13)(875,"td",14)(876,"div",15)(877,"span",16),e(878," customAction"),i(879,"br"),t()()(),n(880,"td",17)(881,"code",42),e(882,"PoProgressAction"),t()(),n(883,"td",20)(884,"em")(885,"strong"),e(886,"(opcional)"),t()(),n(887,"p"),e(888,"Define uma a\xE7\xE3o personalizada no componente "),n(889,"code"),e(890,"po-upload"),t(),e(891,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),n(892,"p")(893,"strong"),e(894,"Componente compat\xEDvel"),t(),e(895,": "),n(896,"code"),e(897,"po-upload"),t(),e(898,","),t(),n(899,"p")(900,"strong"),e(901,"Exemplo de configura\xE7\xE3o"),t(),e(902,":"),t(),n(903,"pre")(904,"code",43),e(905,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};`),t()()()(),n(906,"tr",13)(907,"td",14)(908,"div",15)(909,"span",16),e(910," customActionClick"),i(911,"br"),t()()(),n(912,"td",17)(913,"code",44),e(914,"(file: PoUploadFile) => void"),t()(),n(915,"td",20)(916,"em")(917,"strong"),e(918,"(opcional)"),t()(),n(919,"p"),e(920,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),n(921,"code"),e(922,"p-custom-action"),t(),e(923,"."),t(),n(924,"p")(925,"strong"),e(926,"Componente compat\xEDvel"),t(),e(927,": "),n(928,"code"),e(929,"po-upload"),t(),e(930,","),t(),n(931,"p"),e(932,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),n(933,"p")(934,"strong"),e(935,"Par\xE2metro do evento"),t(),e(936,":"),t(),n(937,"ul")(938,"li")(939,"code"),e(940,"file"),t(),e(941,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),n(942,"code"),e(943,"PoUploadFile"),t(),e(944," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),n(945,"p")(946,"strong"),e(947,"Exemplo de uso"),t(),e(948,":"),t(),n(949,"pre")(950,"code",43),e(951,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}`),t()()()(),n(952,"tr",13)(953,"td",14)(954,"div",15)(955,"span",16),e(956," debounceTime"),i(957,"br"),t()()(),n(958,"td",17)(959,"code",40),e(960,"number"),t()(),n(961,"td",20)(962,"em")(963,"strong"),e(964,"(opcional)"),t()(),n(965,"p"),e(966,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),n(967,"code"),e(968,"p-filter-service"),t(),e(969,")."),t(),n(970,"p")(971,"strong"),e(972,"Componentes compat\xEDveis:"),t(),n(973,"code"),e(974,"po-combo"),t(),e(975,", "),n(976,"code"),e(977,"po-multiselect"),t(),e(978,"."),t()()(),n(979,"tr",13)(980,"td",14)(981,"div",15)(982,"span",16),e(983," decimalsLength"),i(984,"br"),t()()(),n(985,"td",17)(986,"code",40),e(987,"number"),t()(),n(988,"td",20)(989,"em")(990,"strong"),e(991,"(opcional)"),t()(),n(992,"p"),e(993,"Quantidade m\xE1xima de casas decimais."),t(),n(994,"blockquote")(995,"p"),e(996,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(997,"code"),e(998,"type"),t(),e(999," for "),n(1e3,"em"),e(1001,"currency"),t(),e(1002," ou "),n(1003,"em"),e(1004,"decimal"),t(),e(1005,"."),t()()()(),n(1006,"tr",13)(1007,"td",14)(1008,"div",15)(1009,"span",16),e(1010," directory"),i(1011,"br"),t()()(),n(1012,"td",17)(1013,"code",27),e(1014,"boolean"),t()(),n(1015,"td",20)(1016,"em")(1017,"strong"),e(1018,"(opcional)"),t()(),n(1019,"p"),e(1020,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(1021,"blockquote")(1022,"p"),e(1023,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(1024,"blockquote")(1025,"p"),e(1026,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(1027,"strong"),e(1028,"Internet Explorer"),t(),e(1029,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),n(1030,"p")(1031,"strong"),e(1032,"Componente compat\xEDvel"),t(),e(1033,": "),n(1034,"code"),e(1035,"po-upload"),t()()()(),n(1036,"tr",13)(1037,"td",14)(1038,"div",15)(1039,"span",16),e(1040," disabled"),i(1041,"br"),t()()(),n(1042,"td",17)(1043,"code",27),e(1044,"boolean"),t()(),n(1045,"td",20)(1046,"em")(1047,"strong"),e(1048,"(opcional)"),t()(),n(1049,"p"),e(1050,"Desabilita o campo caso informar o valor "),n(1051,"em"),e(1052,"true"),t(),e(1053,"."),t()()(),n(1054,"tr",13)(1055,"td",14)(1056,"div",15)(1057,"span",16),e(1058," disabledInitFilter"),i(1059,"br"),t()()(),n(1060,"td",17)(1061,"code",27),e(1062,"boolean"),t()(),n(1063,"td",20)(1064,"em")(1065,"strong"),e(1066,"(opcional)"),t()(),n(1067,"p"),e(1068,"Desabilita o filtro inicial no servi\xE7o do "),n(1069,"code"),e(1070,"po-combo"),t(),e(1071,", que \xE9 executado no primeiro clique no campo."),t()()(),n(1072,"tr",13)(1073,"td",14)(1074,"div",15)(1075,"span",16),e(1076," disabledTabFilter"),i(1077,"br"),t()()(),n(1078,"td",17)(1079,"code",27),e(1080,"boolean"),t()(),n(1081,"td",20)(1082,"em")(1083,"strong"),e(1084,"(opcional)"),t()(),n(1085,"p"),e(1086,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),n(1087,"code"),e(1088,"po-combo"),t(),e(1089,"."),t()()(),n(1090,"tr",13)(1091,"td",14)(1092,"div",15)(1093,"span",16),e(1094," divider"),i(1095,"br"),t()()(),n(1096,"td",17)(1097,"code",18),e(1098,"string"),t()(),n(1099,"td",20)(1100,"em")(1101,"strong"),e(1102,"(opcional)"),t()(),n(1103,"p"),e(1104,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),n(1105,"tr",13)(1106,"td",14)(1107,"div",15)(1108,"span",16),e(1109," dragDrop"),i(1110,"br"),t()()(),n(1111,"td",17)(1112,"code",27),e(1113,"boolean"),t()(),n(1114,"td",20)(1115,"em")(1116,"strong"),e(1117,"(opcional)"),t()(),n(1118,"p"),e(1119,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(1120,"blockquote")(1121,"p"),e(1122,"Recomendamos utilizar apenas um "),n(1123,"code"),e(1124,"po-upload"),t(),e(1125," com esta funcionalidade por tela."),t()(),n(1126,"p")(1127,"strong"),e(1128,"Componente compat\xEDvel"),t(),e(1129,": "),n(1130,"code"),e(1131,"po-upload"),t()()()(),n(1132,"tr",13)(1133,"td",14)(1134,"div",15)(1135,"span",16),e(1136," dragDropHeight"),i(1137,"br"),t()()(),n(1138,"td",17)(1139,"code",40),e(1140,"number"),t()(),n(1141,"td",20)(1142,"em")(1143,"strong"),e(1144,"(opcional)"),t()(),n(1145,"p"),e(1146,"Define em "),n(1147,"em"),e(1148,"pixels"),t(),e(1149," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(1150,"code"),e(1151,"160px"),t(),e(1152,"."),t(),n(1153,"blockquote")(1154,"p"),e(1155,"Esta propriedade funciona somente se a propriedade "),n(1156,"code"),e(1157,"p-drag-drop"),t(),e(1158," estiver habilitada."),t()(),n(1159,"p")(1160,"strong"),e(1161,"Componente compat\xEDvel"),t(),e(1162,": "),n(1163,"code"),e(1164,"po-upload"),t()()()(),n(1165,"tr",13)(1166,"td",14)(1167,"div",15)(1168,"span",16),e(1169," errorAsyncFunction"),i(1170,"br"),t()()(),n(1171,"td",17)(1172,"code",45),e(1173,"(value) => Observable<boolean>"),t()(),n(1174,"td",20)(1175,"em")(1176,"strong"),e(1177,"(opcional)"),t()(),n(1178,"p"),e(1179,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1180,"code"),e(1181,"change"),t(),e(1182," ou "),n(1183,"code"),e(1184,"change-model"),t(),e(1185,", dependendo do valor da propriedade "),n(1186,"code"),e(1187,"triggerMode"),t(),e(1188,"."),t(),n(1189,"blockquote")(1190,"p"),e(1191,"Retorna "),n(1192,"code"),e(1193,"Observable com o valor true"),t(),e(1194," para sinalizar o erro "),n(1195,"code"),e(1196,"false"),t(),e(1197," para indicar que n\xE3o h\xE1 erro."),t()(),n(1198,"p")(1199,"strong"),e(1200,"Componente compat\xEDvel"),t(),e(1201,": "),n(1202,"code"),e(1203,"po-datepicker"),t()()()(),n(1204,"tr",13)(1205,"td",14)(1206,"div",15)(1207,"span",16),e(1208," errorAsyncProperties"),i(1209,"br"),t()()(),n(1210,"td",17)(1211,"code",46),e(1212,"ErrorAsyncProperties"),t()(),n(1213,"td",20)(1214,"em")(1215,"strong"),e(1216,"(opcional)"),t()(),n(1217,"p"),e(1218,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),n(1219,"p")(1220,"strong"),e(1221,"Componentes compat\xEDveis:"),t(),n(1222,"code"),e(1223,"po-input"),t(),e(1224,", "),n(1225,"code"),e(1226,"po-number"),t(),e(1227,", "),n(1228,"code"),e(1229,"po-decimal"),t(),e(1230,", "),n(1231,"code"),e(1232,"po-password"),t(),e(1233,"."),t()()(),n(1234,"tr",13)(1235,"td",14)(1236,"div",15)(1237,"span",16),e(1238," errorLimit"),i(1239,"br"),t()()(),n(1240,"td",17)(1241,"code",27),e(1242,"boolean"),t()(),n(1243,"td",20)(1244,"em")(1245,"strong"),e(1246,"(opcional)"),t()(),n(1247,"p"),e(1248,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(1249,"blockquote")(1250,"p"),e(1251,"Caso essa propriedade seja definida como "),n(1252,"code"),e(1253,"true"),t(),e(1254,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),n(1255,"p")(1256,"strong"),e(1257,"Componentes compat\xEDveis:"),t(),n(1258,"code"),e(1259,"po-datepicker"),t(),e(1260,", "),n(1261,"code"),e(1262,"po-input"),t(),e(1263,", "),n(1264,"code"),e(1265,"po-number"),t(),e(1266,", "),n(1267,"code"),e(1268,"po-decimal"),t(),e(1269,", "),n(1270,"code"),e(1271,"po-password"),t(),e(1272,", "),n(1273,"code"),e(1274,"po-datepicker-range"),t(),e(1275,", "),n(1276,"code"),e(1277,"po-select"),t(),e(1278,", "),n(1279,"code"),e(1280,"po-checkbox-group"),t(),e(1281,", "),n(1282,"code"),e(1283,"po-radio-group"),t(),e(1284,", "),n(1285,"code"),e(1286,"po-multiselect"),t(),e(1287,", "),n(1288,"code"),e(1289,"po-combo"),t(),e(1290,", "),n(1291,"code"),e(1292,"po-lookup"),t(),e(1293,", "),n(1294,"code"),e(1295,"po-textarea"),t(),e(1296,"."),t()()(),n(1297,"tr",13)(1298,"td",14)(1299,"div",15)(1300,"span",16),e(1301," errorMessage"),i(1302,"br"),t()()(),n(1303,"td",17)(1304,"code",18),e(1305,"string"),t()(),n(1306,"td",20)(1307,"em")(1308,"strong"),e(1309,"(opcional)"),t()(),n(1310,"p"),e(1311,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),n(1312,"p"),e(1313,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),n(1314,"ul")(1315,"li"),e(1316,"pattern;"),t(),n(1317,"li"),e(1318,"minValue;"),t(),n(1319,"li"),e(1320,"maxValue;"),t(),n(1321,"li"),e(1322,"required;"),t()(),n(1323,"blockquote")(1324,"p"),e(1325,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),n(1326,"code"),e(1327,"po-datepicker"),t(),e(1328,", "),n(1329,"code"),e(1330,"po-input"),t(),e(1331,", "),n(1332,"code"),e(1333,"po-number"),t(),e(1334,", "),n(1335,"code"),e(1336,"po-decimal"),t(),e(1337,", "),n(1338,"code"),e(1339,"po-password"),t(),e(1340,`, \xE9 necess\xE1rio que a propriedade
`),n(1341,"code"),e(1342,"requiredFieldErrorMessage"),t(),e(1343," esteja como "),n(1344,"code"),e(1345,"true"),t(),e(1346,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),n(1347,"code"),e(1348,"po-datepicker-range"),t(),e(1349,", "),n(1350,"code"),e(1351,"po-select"),t(),e(1352,", "),n(1353,"code"),e(1354,"po-checkbox-group"),t(),e(1355,", "),n(1356,"code"),e(1357,"po-radio-group"),t(),e(1358,", "),n(1359,"code"),e(1360,"po-multiselect"),t(),e(1361,", "),n(1362,"code"),e(1363,"po-combo"),t(),e(1364,`,
`),n(1365,"code"),e(1366,"po-lookup"),t(),e(1367," e "),n(1368,"code"),e(1369,"po-textarea"),t(),e(1370," n\xE3o \xE9 necess\xE1rio passar a propriedade "),n(1371,"code"),e(1372,"requiredFieldErrorMessage"),t(),e(1373,"."),t()(),n(1374,"p")(1375,"strong"),e(1376,"Componentes compat\xEDveis:"),t(),n(1377,"code"),e(1378,"po-datepicker"),t(),e(1379,", "),n(1380,"code"),e(1381,"po-input"),t(),e(1382,", "),n(1383,"code"),e(1384,"po-number"),t(),e(1385,", "),n(1386,"code"),e(1387,"po-decimal"),t(),e(1388,", "),n(1389,"code"),e(1390,"po-password"),t(),e(1391,", "),n(1392,"code"),e(1393,"po-datepicker-range"),t(),e(1394,", "),n(1395,"code"),e(1396,"po-select"),t(),e(1397,", "),n(1398,"code"),e(1399,"po-checkbox-group"),t(),e(1400,", "),n(1401,"code"),e(1402,"po-radio-group"),t(),e(1403,", "),n(1404,"code"),e(1405,"po-multiselect"),t(),e(1406,", "),n(1407,"code"),e(1408,"po-combo"),t(),e(1409,", "),n(1410,"code"),e(1411,"po-lookup"),t(),e(1412,", "),n(1413,"code"),e(1414,"po-textarea"),t(),e(1415,"."),t()()(),n(1416,"tr",13)(1417,"td",14)(1418,"div",15)(1419,"span",16),e(1420," fieldLabel"),i(1421,"br"),t()()(),n(1422,"td",17)(1423,"code",18),e(1424,"string"),t()(),n(1425,"td",20)(1426,"em")(1427,"strong"),e(1428,"(opcional)"),t()(),n(1429,"p"),e(1430,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),n(1431,"p"),e(1432,"O valor padr\xE3o \xE9: "),n(1433,"code"),e(1434,"label"),t(),e(1435,"."),t(),n(1436,"blockquote")(1437,"p"),e(1438,"Esta propriedade pode ser utilizada em conjunto com: "),n(1439,"code"),e(1440,"options"),t(),e(1441,", "),n(1442,"code"),e(1443,"optionsService"),t(),e(1444," e "),n(1445,"code"),e(1446,"searchService"),t(),e(1447,"."),t()()()(),n(1448,"tr",13)(1449,"td",14)(1450,"div",15)(1451,"span",16),e(1452," fieldValue"),i(1453,"br"),t()()(),n(1454,"td",17)(1455,"code",18),e(1456,"string"),t()(),n(1457,"td",20)(1458,"em")(1459,"strong"),e(1460,"(opcional)"),t()(),n(1461,"p"),e(1462,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),n(1463,"p"),e(1464,"O valor padr\xE3o \xE9: "),n(1465,"code"),e(1466,"value"),t(),e(1467,"."),t(),n(1468,"blockquote")(1469,"p"),e(1470,"Esta propriedade pode ser utilizada em conjunto com: "),n(1471,"code"),e(1472,"options"),t(),e(1473,", "),n(1474,"code"),e(1475,"optionsService"),t(),e(1476," e "),n(1477,"code"),e(1478,"searchService"),t(),e(1479,"."),t()()()(),n(1480,"tr",13)(1481,"td",14)(1482,"div",15)(1483,"span",16),e(1484," filterMinlength"),i(1485,"br"),t()()(),n(1486,"td",17)(1487,"code",40),e(1488,"number"),t()(),n(1489,"td",20)(1490,"em")(1491,"strong"),e(1492,"(opcional)"),t()(),n(1493,"p"),e(1494,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),n(1495,"code"),e(1496,"po-combo"),t(),e(1497,"."),t()()(),n(1498,"tr",13)(1499,"td",14)(1500,"div",15)(1501,"span",16),e(1502," filterMode"),i(1503,"br"),t()()(),n(1504,"td",17)(1505,"code",47),e(1506,"PoMultiselectFilterMode"),t()(),n(1507,"td",20)(1508,"em")(1509,"strong"),e(1510,"(opcional)"),t()(),n(1511,"p"),e(1512,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),n(1513,"code"),e(1514,"startsWith"),t(),e(1515,", "),n(1516,"code"),e(1517,"contains"),t(),e(1518," ou "),n(1519,"code"),e(1520,"endsWith"),t(),e(1521,"."),t(),n(1522,"blockquote")(1523,"p"),e(1524,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),n(1525,"p")(1526,"strong"),e(1527,"Componentes compat\xEDveis:"),t(),n(1528,"code"),e(1529,"po-multiselect"),t(),e(1530,"."),t()()(),n(1531,"tr",13)(1532,"td",14)(1533,"div",15)(1534,"span",16),e(1535," forceBooleanComponentType"),i(1536,"br"),t()()(),n(1537,"td",17)(1538,"code",48),e(1539,"ForceBooleanComponentEnum"),t()(),n(1540,"td",20)(1541,"em")(1542,"strong"),e(1543,"(opcional)"),t()(),n(1544,"p"),e(1545,"Valores aceitos:"),t(),n(1546,"ul")(1547,"li"),e(1548,"ForceBooleanComponentEnum.switch"),t(),n(1549,"li"),e(1550,"ForceBooleanComponentEnum.checkbox"),t()()()(),n(1551,"tr",13)(1552,"td",14)(1553,"div",15)(1554,"span",16),e(1555," forceOptionsComponentType"),i(1556,"br"),t()()(),n(1557,"td",17)(1558,"code",49),e(1559,"ForceOptionComponentEnum"),t()(),n(1560,"td",20)(1561,"em")(1562,"strong"),e(1563,"(opcional)"),t()(),n(1564,"p"),e(1565,"pode ser utilizada em conjunto com a propriedade "),n(1566,"code"),e(1567,"options"),t(),e(1568," for\xE7ando o componente a renderizar um "),n(1569,"code"),e(1570,"po-select"),t(),e(1571," ou "),n(1572,"code"),e(1573,"po-radio-group"),t(),e(1574,"."),t(),n(1575,"p"),e(1576,"Valores aceitos:"),t(),n(1577,"ul")(1578,"li"),e(1579,"ForceOptionComponentEnum.radioGroup"),t(),n(1580,"li"),e(1581,"ForceOptionComponentEnum.select"),t()(),n(1582,"blockquote")(1583,"p"),e(1584,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),n(1585,"code"),e(1586,"optionsMulti"),t(),e(1587," e "),n(1588,"code"),e(1589,"optionsService"),t(),e(1590,"."),t()()()(),n(1591,"tr",13)(1592,"td",14)(1593,"div",15)(1594,"span",16),e(1595," formField"),i(1596,"br"),t()()(),n(1597,"td",17)(1598,"code",18),e(1599,"string"),t()(),n(1600,"td",20)(1601,"em")(1602,"strong"),e(1603,"(opcional)"),t()(),n(1604,"p"),e(1605,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(1606,"code"),e(1607,"url"),t(),e(1608,"."),t(),n(1609,"blockquote")(1610,"p"),e(1611,"O valor default \xE9 "),n(1612,"code"),e(1613,"files"),t()()(),n(1614,"p")(1615,"strong"),e(1616,"Componente compat\xEDvel"),t(),e(1617,": "),n(1618,"code"),e(1619,"po-upload"),t()()()(),n(1620,"tr",13)(1621,"td",14)(1622,"div",15)(1623,"span",16),e(1624," format"),i(1625,"br"),t()()(),n(1626,"td",17)(1627,"code",18),e(1628,"string "),t(),n(1629,"code",31),e(1630," Array<string>"),t()(),n(1631,"td",20)(1632,"em")(1633,"strong"),e(1634,"(opcional)"),t()(),n(1635,"p"),e(1636,"Formato de exibi\xE7\xE3o no campo."),t(),n(1637,"p"),e(1638,"Ao utilizar esta propriedade com o "),n(1639,"code"),e(1640,"type"),t(),n(1641,"em"),e(1642,"PoDynamicFieldType.Date"),t(),e(1643," ou "),n(1644,"em"),e(1645,"PoDynamicFieldType.DateTime"),t(),e(1646,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),n(1647,"p"),e(1648,"Valores v\xE1lidos:"),t(),n(1649,"ul")(1650,"li"),e(1651,"dd/mm/yyyy"),t(),n(1652,"li"),e(1653,"mm/dd/yyyy"),t(),n(1654,"li"),e(1655,"yyyy/mm/dd"),t()(),n(1656,"p"),e(1657,"Tamb\xE9m pode-se utilizar em conjunto com "),n(1658,"code"),e(1659,"searchService"),t(),e(1660,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t()()(),n(1661,"tr",13)(1662,"td",14)(1663,"div",15)(1664,"span",16),e(1665," formatModel"),i(1666,"br"),t()()(),n(1667,"td",17)(1668,"code",27),e(1669,"boolean"),t()(),n(1670,"td",20)(1671,"em")(1672,"strong"),e(1673,"(opcional)"),t()(),n(1674,"p"),e(1675,"Indica se o "),n(1676,"code"),e(1677,"model"),t(),e(1678," receber\xE1 o valor formatado pelas propriedades "),n(1679,"code"),e(1680,"p-label-on"),t(),e(1681," e "),n(1682,"code"),e(1683,"p-label-off"),t(),e(1684,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),n(1685,"p"),e(1686,"O valor padr\xE3o \xE9: "),n(1687,"code"),e(1688,"false"),t(),e(1689,"."),t(),n(1690,"blockquote")(1691,"p"),e(1692,"Esta propriedade est\xE1 disponivel apenas para o "),n(1693,"code"),e(1694,"swicth"),t(),e(1695,"."),t()()()(),n(1696,"tr",13)(1697,"td",14)(1698,"div",15)(1699,"span",16),e(1700," gridColumns"),i(1701,"br"),t()()(),n(1702,"td",17)(1703,"code",40),e(1704,"number"),t()(),n(1705,"td",20)(1706,"em")(1707,"strong"),e(1708,"(opcional)"),t()(),n(1709,"p"),e(1710,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),n(1711,"p"),e(1712,"Deve ser usado o sistema de "),n(1713,"strong"),e(1714,"grid"),t(),e(1715," do PO (1 ... 12 colunas)."),t(),n(1716,"blockquote")(1717,"p"),e(1718,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(1719,"tr",13)(1720,"td",14)(1721,"div",15)(1722,"span",16),e(1723," gridLgColumns"),i(1724,"br"),t()()(),n(1725,"td",17)(1726,"code",40),e(1727,"number"),t()(),n(1728,"td",20)(1729,"em")(1730,"strong"),e(1731,"(opcional)"),t()(),n(1732,"p"),e(1733,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(1734,"p"),e(1735,"Deve ser usado o sistema de "),n(1736,"strong"),e(1737,"grid"),t(),e(1738," do PO (1 ... 12 colunas)."),t(),n(1739,"blockquote")(1740,"p"),e(1741,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1742,"code"),e(1743,"gridColumns"),t(),e(1744,"."),t()()()(),n(1745,"tr",13)(1746,"td",14)(1747,"div",15)(1748,"span",16),e(1749," gridLgPull"),i(1750,"br"),t()()(),n(1751,"td",17)(1752,"code",40),e(1753,"number"),t()(),n(1754,"td",20)(1755,"em")(1756,"strong"),e(1757,"(opcional)"),t()(),n(1758,"p"),e(1759,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),n(1760,"p"),e(1761,"Deve ser usado o sistema de "),n(1762,"strong"),e(1763,"grid"),t(),e(1764," do PO (1 ... 11 colunas)."),t(),n(1765,"blockquote")(1766,"p"),e(1767,"Esta propriedade n\xE3o funciona com a propriedade "),n(1768,"code"),e(1769,"gridColumns"),t(),e(1770,". Deve-se especificar o tamanho da tela."),t()()()(),n(1771,"tr",13)(1772,"td",14)(1773,"div",15)(1774,"span",16),e(1775," gridMdColumns"),i(1776,"br"),t()()(),n(1777,"td",17)(1778,"code",40),e(1779,"number"),t()(),n(1780,"td",20)(1781,"em")(1782,"strong"),e(1783,"(opcional)"),t()(),n(1784,"p"),e(1785,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(1786,"p"),e(1787,"Deve ser usado o sistema de "),n(1788,"strong"),e(1789,"grid"),t(),e(1790," do PO (1 ... 12 colunas)."),t(),n(1791,"blockquote")(1792,"p"),e(1793,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1794,"code"),e(1795,"gridColumns"),t(),e(1796,"."),t()()()(),n(1797,"tr",13)(1798,"td",14)(1799,"div",15)(1800,"span",16),e(1801," gridMdPull"),i(1802,"br"),t()()(),n(1803,"td",17)(1804,"code",40),e(1805,"number"),t()(),n(1806,"td",20)(1807,"em")(1808,"strong"),e(1809,"(opcional)"),t()(),n(1810,"p"),e(1811,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),n(1812,"p"),e(1813,"Deve ser usado o sistema de "),n(1814,"strong"),e(1815,"grid"),t(),e(1816," do PO (1 ... 11 colunas)."),t(),n(1817,"blockquote")(1818,"p"),e(1819,"Esta propriedade n\xE3o funciona com a propriedade "),n(1820,"code"),e(1821,"gridColumns"),t(),e(1822,". Deve-se especificar o tamanho da tela."),t()()()(),n(1823,"tr",13)(1824,"td",14)(1825,"div",15)(1826,"span",16),e(1827," gridSmColumns"),i(1828,"br"),t()()(),n(1829,"td",17)(1830,"code",40),e(1831,"number"),t()(),n(1832,"td",20)(1833,"em")(1834,"strong"),e(1835,"(opcional)"),t()(),n(1836,"p"),e(1837,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(1838,"p"),e(1839,"Deve ser usado o sistema de "),n(1840,"strong"),e(1841,"grid"),t(),e(1842," do PO (1 ... 12 colunas)."),t(),n(1843,"blockquote")(1844,"p"),e(1845,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1846,"code"),e(1847,"gridColumns"),t(),e(1848,"."),t()()()(),n(1849,"tr",13)(1850,"td",14)(1851,"div",15)(1852,"span",16),e(1853," gridSmPull"),i(1854,"br"),t()()(),n(1855,"td",17)(1856,"code",40),e(1857,"number"),t()(),n(1858,"td",20)(1859,"em")(1860,"strong"),e(1861,"(opcional)"),t()(),n(1862,"p"),e(1863,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),n(1864,"p"),e(1865,"Deve ser usado o sistema de "),n(1866,"strong"),e(1867,"grid"),t(),e(1868," do PO (1 ... 11 colunas)."),t(),n(1869,"blockquote")(1870,"p"),e(1871,"Esta propriedade n\xE3o funciona com a propriedade "),n(1872,"code"),e(1873,"gridColumns"),t(),e(1874,". Deve-se especificar o tamanho da tela."),t()()()(),n(1875,"tr",13)(1876,"td",14)(1877,"div",15)(1878,"span",16),e(1879," gridXlColumns"),i(1880,"br"),t()()(),n(1881,"td",17)(1882,"code",40),e(1883,"number"),t()(),n(1884,"td",20)(1885,"em")(1886,"strong"),e(1887,"(opcional)"),t()(),n(1888,"p"),e(1889,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(1890,"p"),e(1891,"Deve ser usado o sistema de "),n(1892,"strong"),e(1893,"grid"),t(),e(1894," do PO (1 ... 12 colunas)."),t(),n(1895,"blockquote")(1896,"p"),e(1897,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1898,"code"),e(1899,"gridColumns"),t(),e(1900,"."),t()()()(),n(1901,"tr",13)(1902,"td",14)(1903,"div",15)(1904,"span",16),e(1905," gridXlPull"),i(1906,"br"),t()()(),n(1907,"td",17)(1908,"code",40),e(1909,"number"),t()(),n(1910,"td",20)(1911,"em")(1912,"strong"),e(1913,"(opcional)"),t()(),n(1914,"p"),e(1915,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),n(1916,"p"),e(1917,"Deve ser usado o sistema de "),n(1918,"strong"),e(1919,"grid"),t(),e(1920," do PO (1 ... 11 colunas)."),t(),n(1921,"blockquote")(1922,"p"),e(1923,"Esta propriedade n\xE3o funciona com a propriedade "),n(1924,"code"),e(1925,"gridColumns"),t(),e(1926,". Deve-se especificar o tamanho da tela."),t()()()(),n(1927,"tr",13)(1928,"td",14)(1929,"div",15)(1930,"span",16),e(1931," headers"),i(1932,"br"),t()()(),n(1933,"td",17)(1934,"code",50),e(1935,"{ [name: string]: string "),t(),n(1936,"code",51),e(1937,` Array<string>;
}`),t()(),n(1938,"td",20)(1939,"em")(1940,"strong"),e(1941,"(opcional)"),t()(),n(1942,"p"),e(1943,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),n(1944,"p")(1945,"strong"),e(1946,"Componente compat\xEDvel"),t(),e(1947,": "),n(1948,"code"),e(1949,"po-upload"),t()()()(),n(1950,"tr",13)(1951,"td",14)(1952,"div",15)(1953,"span",16),e(1954," help"),i(1955,"br"),t()()(),n(1956,"td",17)(1957,"code",18),e(1958,"string"),t()(),n(1959,"td",20)(1960,"em")(1961,"strong"),e(1962,"(opcional)"),t()(),n(1963,"p"),e(1964,"Texto de ajuda."),t()()(),n(1965,"tr",13)(1966,"td",14)(1967,"div",15)(1968,"span",16),e(1969," hideLabelStatus"),i(1970,"br"),t()()(),n(1971,"td",17)(1972,"code",27),e(1973,"boolean"),t()(),n(1974,"td",20)(1975,"em")(1976,"strong"),e(1977,"(opcional)"),t()(),n(1978,"p"),e(1979,"Indica se o status do "),n(1980,"code"),e(1981,"model"),t(),e(1982," ser\xE1 escondido visualmente ao lado do switch"),t()()(),n(1983,"tr",13)(1984,"td",14)(1985,"div",15)(1986,"span",16),e(1987," hidePasswordPeek"),i(1988,"br"),t()()(),n(1989,"td",17)(1990,"code",27),e(1991,"boolean"),t()(),n(1992,"td",20)(1993,"em")(1994,"strong"),e(1995,"(opcional)"),t()(),n(1996,"p"),e(1997,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),n(1998,"code"),e(1999,"po-password"),t(),e(2e3,"."),t()()(),n(2001,"tr",13)(2002,"td",14)(2003,"div",15)(2004,"span",16),e(2005," hideRestrictionsInfo"),i(2006,"br"),t()()(),n(2007,"td",17)(2008,"code",27),e(2009,"boolean"),t()(),n(2010,"td",20)(2011,"em")(2012,"strong"),e(2013,"(opcional)"),t()(),n(2014,"p"),e(2015,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),n(2016,"p")(2017,"strong"),e(2018,"Componente compat\xEDvel"),t(),e(2019,": "),n(2020,"code"),e(2021,"po-upload"),t()()()(),n(2022,"tr",13)(2023,"td",14)(2024,"div",15)(2025,"span",16),e(2026," hideSearch"),i(2027,"br"),t()()(),n(2028,"td",17)(2029,"code",27),e(2030,"boolean"),t()(),n(2031,"td",20)(2032,"em")(2033,"strong"),e(2034,"(opcional)"),t()(),n(2035,"p"),e(2036,"Esconde o campo de pesquisa existente dentro do dropdown do "),n(2037,"code"),e(2038,"po-multiselect"),t(),e(2039,"."),t()()(),n(2040,"tr",13)(2041,"td",14)(2042,"div",15)(2043,"span",16),e(2044," hideSelectAll"),i(2045,"br"),t()()(),n(2046,"td",17)(2047,"code",27),e(2048,"boolean"),t()(),n(2049,"td",20)(2050,"em")(2051,"strong"),e(2052,"(opcional)"),t()(),n(2053,"p"),e(2054,'Indica se o campo "Selecionar todos" do '),n(2055,"code"),e(2056,"po-multiselect"),t(),e(2057," ser\xE1 escondido."),t()()(),n(2058,"tr",13)(2059,"td",14)(2060,"div",15)(2061,"span",16),e(2062," hideSelectButton"),i(2063,"br"),t()()(),n(2064,"td",17)(2065,"code",27),e(2066,"boolean"),t()(),n(2067,"td",20)(2068,"em")(2069,"strong"),e(2070,"(opcional)"),t()(),n(2071,"p"),e(2072,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(2073,"blockquote")(2074,"p"),e(2075,"Caso o valor definido seja "),n(2076,"code"),e(2077,"true"),t(),e(2078,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2079,"code"),e(2080,"selectFiles()"),t(),e(2081," para sele\xE7\xE3o de arquivos."),t()(),n(2082,"p")(2083,"strong"),e(2084,"Componente compat\xEDvel"),t(),e(2085,": "),n(2086,"code"),e(2087,"po-upload"),t()()()(),n(2088,"tr",13)(2089,"td",14)(2090,"div",15)(2091,"span",16),e(2092," hideSendButton"),i(2093,"br"),t()()(),n(2094,"td",17)(2095,"code",27),e(2096,"boolean"),t()(),n(2097,"td",20)(2098,"em")(2099,"strong"),e(2100,"(opcional)"),t()(),n(2101,"p"),e(2102,"Omite o bot\xE3o de envio de arquivos."),t(),n(2103,"blockquote")(2104,"p"),e(2105,"Caso o valor definido seja "),n(2106,"code"),e(2107,"true"),t(),e(2108,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2109,"code"),e(2110,"sendFiles()"),t(),e(2111," para envio do(s) arquivo(s) selecionado(s)."),t()(),n(2112,"p")(2113,"strong"),e(2114,"Componente compat\xEDvel"),t(),e(2115,": "),n(2116,"code"),e(2117,"po-upload"),t()()()(),n(2118,"tr",13)(2119,"td",14)(2120,"div",15)(2121,"span",16),e(2122," icon"),i(2123,"br"),t()()(),n(2124,"td",17)(2125,"code",18),e(2126,"string "),t(),n(2127,"code",52),e(2128," TemplateRef<void>"),t()(),n(2129,"td",20)(2130,"em")(2131,"strong"),e(2132,"(opcional)"),t()(),n(2133,"p"),e(2134,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(2135,"blockquote")(2136,"p"),e(2137,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),n(2138,"ul")(2139,"li"),e(2140,"Input;"),t(),n(2141,"li"),e(2142,"Number;"),t(),n(2143,"li"),e(2144,"Decimal;"),t(),n(2145,"li"),e(2146,"Combo;"),t(),n(2147,"li"),e(2148,"Password;"),t()(),n(2149,"blockquote")(2150,"p"),e(2151,"Veja a disponibilidade de \xEDcones em "),n(2152,"a",53),e(2153,"biblioteca de \xEDcones"),t(),e(2154,"."),t()()()(),n(2155,"tr",13)(2156,"td",14)(2157,"div",15)(2158,"span",16),e(2159," infiniteScroll"),i(2160,"br"),t()()(),n(2161,"td",17)(2162,"code",27),e(2163,"boolean"),t()(),n(2164,"td",20)(2165,"em")(2166,"strong"),e(2167,"(opcional)"),t()(),n(2168,"p"),e(2169,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),n(2170,"p")(2171,"strong"),e(2172,"Componentes compat\xEDveis:"),t(),n(2173,"code"),e(2174,"po-combo"),t(),e(2175,", "),n(2176,"code"),e(2177,"po-lookup"),t(),e(2178,"."),t()()(),n(2179,"tr",13)(2180,"td",14)(2181,"div",15)(2182,"span",16),e(2183," infiniteScrollDistance"),i(2184,"br"),t()()(),n(2185,"td",17)(2186,"code",40),e(2187,"number"),t()(),n(2188,"td",20)(2189,"em")(2190,"strong"),e(2191,"(opcional)"),t()(),n(2192,"p"),e(2193,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),n(2194,"strong"),e(2195,"Exemplos"),t(),n(2196,"code"),e(2197,"{ infiniteScrollDistance: 80 }"),t(),e(2198,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),n(2199,"p")(2200,"strong"),e(2201,"Componente compat\xEDvel:"),t(),n(2202,"code"),e(2203,"po-combo"),t(),e(2204,"."),t()()(),n(2205,"tr",13)(2206,"td",14)(2207,"div",15)(2208,"span",16),e(2209," isoFormat"),i(2210,"br"),t()()(),n(2211,"td",17)(2212,"code",54),e(2213,"PoDatepickerIsoFormat"),t()(),n(2214,"td",20)(2215,"em")(2216,"strong"),e(2217,"(opcional)"),t()(),n(2218,"p"),e(2219,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),n(2220,"blockquote")(2221,"p"),e(2222,"Veja os valores v\xE1lidos no "),n(2223,"code"),e(2224,"enumPoDatepickerIsoFormat"),t(),e(2225,"."),t()(),n(2226,"p")(2227,"strong"),e(2228,"Componente compat\xEDvel:"),t(),e(2229," po-datepicker"),t()()(),n(2230,"tr",13)(2231,"td",14)(2232,"div",15)(2233,"span",16),e(2234," key"),i(2235,"br"),t()()(),n(2236,"td",17)(2237,"code",27),e(2238,"boolean"),t()(),n(2239,"td",20)(2240,"em")(2241,"strong"),e(2242,"(opcional)"),t()(),n(2243,"p"),e(2244,"Identificador"),t()()(),n(2245,"tr",13)(2246,"td",14)(2247,"div",15)(2248,"span",16),e(2249," label"),i(2250,"br"),t()()(),n(2251,"td",17)(2252,"code",18),e(2253,"string"),t()(),n(2254,"td",20)(2255,"em")(2256,"strong"),e(2257,"(opcional)"),t()(),n(2258,"p"),e(2259,"R\xF3tulo do campo exibido."),t(),n(2260,"p"),e(2261,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),n(2262,"code"),e(2263,"label"),t(),e(2264," o valor da propriedade "),n(2265,"code"),e(2266,"property"),t(),e(2267," com a primeira letra em mai\xFAsculo."),t()()(),n(2268,"tr",13)(2269,"td",14)(2270,"div",15)(2271,"span",16),e(2272," labelPosition"),i(2273,"br"),t()()(),n(2274,"td",17)(2275,"code",55),e(2276,"PoSwitchLabelPosition"),t()(),n(2277,"td",20)(2278,"em")(2279,"strong"),e(2280,"(opcional)"),t()(),n(2281,"p"),e(2282,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),n(2283,"blockquote")(2284,"p"),e(2285,"Por padr\xE3o exibe \xE0 direita."),t()()()(),n(2286,"tr",13)(2287,"td",14)(2288,"div",15)(2289,"span",16),e(2290," literals"),i(2291,"br"),t()()(),n(2292,"td",17)(2293,"code",56),e(2294,"PoLookupLiterals "),t(),n(2295,"code",57),e(2296," PoMultiselectLiterals "),t(),n(2297,"code",58),e(2298," PoComboLiterals "),t(),n(2299,"code",59),e(2300," PoDatepickerRangeLiterals "),t(),n(2301,"code",60),e(2302," PoUploadLiterals"),t()(),n(2303,"td",20)(2304,"em")(2305,"strong"),e(2306,"(opcional)"),t()(),n(2307,"p"),e(2308,"Objeto com as literais usadas para os seguintes componentes: "),n(2309,"code"),e(2310,"po-lookup"),t(),e(2311,", "),n(2312,"code"),e(2313,"po-multiselect"),t(),e(2314,", "),n(2315,"code"),e(2316,"po-combo"),t(),e(2317," e "),n(2318,"code"),e(2319,"po-datepicker-range"),t(),e(2320,"."),t(),n(2321,"blockquote")(2322,"p"),e(2323,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),n(2324,"p")(2325,"strong"),e(2326,"Componentes compat\xEDveis:"),t(),n(2327,"code"),e(2328,"po-lookup"),t(),e(2329,", "),n(2330,"code"),e(2331,"po-multiselect"),t(),e(2332,", "),n(2333,"code"),e(2334,"po-combo"),t(),e(2335,", "),n(2336,"code"),e(2337,"po-datepicker-range"),t()()()(),n(2338,"tr",13)(2339,"td",14)(2340,"div",15)(2341,"span",16),e(2342," locale"),i(2343,"br"),t()()(),n(2344,"td",17)(2345,"code",18),e(2346,"string"),t()(),n(2347,"td",20)(2348,"em")(2349,"strong"),e(2350,"(opcional)"),t()(),n(2351,"p"),e(2352,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),n(2353,"a",61)(2354,"code"),e(2355,"I18n"),t()()(),n(2356,"p"),e(2357,`Exemplo de utiliza\xE7\xE3o:
`),n(2358,"code"),e(2359,`[ { property: 'birthday', locale: 'en', type: 'date' }, { property: 'wage', locale: 'ru', type: 'currency' }
];`),t()(),n(2360,"blockquote")(2361,"p"),e(2362,"Para ver quais linguagens suportadas acesse "),n(2363,"a",61)(2364,"code"),e(2365,"I18n"),t()(),e(2366,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),n(2367,"tr",13)(2368,"td",14)(2369,"div",15)(2370,"span",16),e(2371," mask"),i(2372,"br"),t()()(),n(2373,"td",17)(2374,"code",18),e(2375,"string"),t()(),n(2376,"td",20)(2377,"em")(2378,"strong"),e(2379,"(opcional)"),t()(),n(2380,"p"),e(2381,"M\xE1scara para o campo."),t(),n(2382,"p")(2383,"strong"),e(2384,"Componentes compat\xEDveis:"),t(),n(2385,"code"),e(2386,"po-input"),t(),e(2387,"."),t(),n(2388,"blockquote")(2389,"p"),e(2390,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(2391,"code"),e(2392,"type: time"),t(),e(2393,"."),t()()()(),n(2394,"tr",13)(2395,"td",14)(2396,"div",15)(2397,"span",16),e(2398," maskFormatModel"),i(2399,"br"),t()()(),n(2400,"td",17)(2401,"code",27),e(2402,"boolean"),t()(),n(2403,"td",20)(2404,"em")(2405,"strong"),e(2406,"(opcional)"),t()(),n(2407,"p"),e(2408,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),n(2409,"code"),e(2410,"false"),t(),e(2411,"."),t(),n(2412,"p")(2413,"strong"),e(2414,"Componentes compat\xEDveis:"),t(),n(2415,"code"),e(2416,"po-input"),t(),e(2417,"."),t(),n(2418,"blockquote")(2419,"p"),e(2420,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(2421,"code"),e(2422,"type: time"),t(),e(2423,"."),t()()()(),n(2424,"tr",13)(2425,"td",14)(2426,"div",15)(2427,"span",16),e(2428," maxLength"),i(2429,"br"),t()()(),n(2430,"td",17)(2431,"code",40),e(2432,"number"),t()(),n(2433,"td",20)(2434,"em")(2435,"strong"),e(2436,"(opcional)"),t()(),n(2437,"p"),e(2438,"Tamanho m\xE1ximo de caracteres."),t(),n(2439,"p")(2440,"strong"),e(2441,"Componentes compat\xEDveis:"),t(),n(2442,"code"),e(2443,"po-input"),t(),e(2444,", "),n(2445,"code"),e(2446,"po-number"),t(),e(2447,", "),n(2448,"code"),e(2449,"po-decimal"),t(),e(2450,", "),n(2451,"code"),e(2452,"po-textarea"),t(),e(2453,", "),n(2454,"code"),e(2455,"po-password"),t(),e(2456,"."),t()()(),n(2457,"tr",13)(2458,"td",14)(2459,"div",15)(2460,"span",16),e(2461," maxValue"),i(2462,"br"),t()()(),n(2463,"td",17)(2464,"code",18),e(2465,"string "),t(),n(2466,"code",40),e(2467," number"),t()(),n(2468,"td",20)(2469,"em")(2470,"strong"),e(2471,"(opcional)"),t()(),n(2472,"p"),e(2473,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(2474,"em"),e(2475,"number"),t(),e(2476,", "),n(2477,"em"),e(2478,"date"),t(),e(2479," ou "),n(2480,"em"),e(2481,"dateTime"),t(),e(2482,"."),t(),n(2483,"p")(2484,"strong"),e(2485,"Componentes compat\xEDveis:"),t(),n(2486,"code"),e(2487,"po-datepicker"),t(),e(2488,", "),n(2489,"code"),e(2490,"po-datepicker-range"),t(),e(2491,", "),n(2492,"code"),e(2493,"po-number"),t(),e(2494,", "),n(2495,"code"),e(2496,"po-decimal"),t()()()(),n(2497,"tr",13)(2498,"td",14)(2499,"div",15)(2500,"span",16),e(2501," minLength"),i(2502,"br"),t()()(),n(2503,"td",17)(2504,"code",40),e(2505,"number"),t()(),n(2506,"td",20)(2507,"em")(2508,"strong"),e(2509,"(opcional)"),t()(),n(2510,"p"),e(2511,"Tamanho m\xEDnimo de caracteres."),t(),n(2512,"p")(2513,"strong"),e(2514,"Componentes compat\xEDveis:"),t(),n(2515,"code"),e(2516,"po-input"),t(),e(2517,", "),n(2518,"code"),e(2519,"po-number"),t(),e(2520,", "),n(2521,"code"),e(2522,"po-decimal"),t(),e(2523,", "),n(2524,"code"),e(2525,"po-textarea"),t(),e(2526,", "),n(2527,"code"),e(2528,"po-password"),t(),e(2529,"."),t()()(),n(2530,"tr",13)(2531,"td",14)(2532,"div",15)(2533,"span",16),e(2534," minValue"),i(2535,"br"),t()()(),n(2536,"td",17)(2537,"code",18),e(2538,"string "),t(),n(2539,"code",40),e(2540," number"),t()(),n(2541,"td",20)(2542,"em")(2543,"strong"),e(2544,"(opcional)"),t()(),n(2545,"p"),e(2546,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(2547,"em"),e(2548,"number"),t(),e(2549,", "),n(2550,"em"),e(2551,"date"),t(),e(2552," ou "),n(2553,"em"),e(2554,"dateTime"),t(),e(2555,"."),t(),n(2556,"p")(2557,"strong"),e(2558,"Componentes compat\xEDveis:"),t(),n(2559,"code"),e(2560,"po-datepicker"),t(),e(2561,", "),n(2562,"code"),e(2563,"po-datepicker-range"),t(),e(2564,", "),n(2565,"code"),e(2566,"po-number"),t(),e(2567,", "),n(2568,"code"),e(2569,"po-decimal"),t()()()(),n(2570,"tr",13)(2571,"td",14)(2572,"div",15)(2573,"span",16),e(2574," multiple"),i(2575,"br"),t()()(),n(2576,"td",17)(2577,"code",27),e(2578,"boolean"),t()(),n(2579,"td",20)(2580,"em")(2581,"strong"),e(2582,"(opcional)"),t()(),n(2583,"p"),e(2584,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),n(2585,"p")(2586,"strong"),e(2587,"Componente compat\xEDvel:"),t(),n(2588,"code"),e(2589,"po-lookup"),t(),e(2590,", "),n(2591,"code"),e(2592,"po-upload"),t()()()(),n(2593,"tr",13)(2594,"td",14)(2595,"div",15)(2596,"span",16),e(2597," noAutocomplete"),i(2598,"br"),t()()(),n(2599,"td",17)(2600,"code",27),e(2601,"boolean"),t()(),n(2602,"td",20)(2603,"em")(2604,"strong"),e(2605,"(opcional)"),t()(),n(2606,"p"),e(2607,"Define a propriedade nativa "),n(2608,"code"),e(2609,"autocomplete"),t(),e(2610," do campo como off."),t(),n(2611,"p")(2612,"strong"),e(2613,"Componentes compat\xEDveis:"),t(),n(2614,"code"),e(2615,"po-datepicker"),t(),e(2616,", "),n(2617,"code"),e(2618,"po-datepicker-range"),t(),e(2619,", "),n(2620,"code"),e(2621,"po-input"),t(),e(2622,", "),n(2623,"code"),e(2624,"po-number"),t(),e(2625,", "),n(2626,"code"),e(2627,"po-decimal"),t(),e(2628,", "),n(2629,"code"),e(2630,"po-lookup"),t(),e(2631,", "),n(2632,"code"),e(2633,"po-password"),t()()()(),n(2634,"tr",13)(2635,"td",14)(2636,"div",15)(2637,"span",16),e(2638," offsetColumns"),i(2639,"br"),t()()(),n(2640,"td",17)(2641,"code",40),e(2642,"number"),t()(),n(2643,"td",20)(2644,"em")(2645,"strong"),e(2646,"(opcional)"),t()(),n(2647,"p"),e(2648,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),n(2649,"p"),e(2650,"Deve ser usado o sistema de "),n(2651,"strong"),e(2652,"grid"),t(),e(2653," do PO (1 ... 12 colunas)."),t(),n(2654,"blockquote")(2655,"p"),e(2656,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(2657,"tr",13)(2658,"td",14)(2659,"div",15)(2660,"span",16),e(2661," offsetLgColumns"),i(2662,"br"),t()()(),n(2663,"td",17)(2664,"code",40),e(2665,"number"),t()(),n(2666,"td",20)(2667,"em")(2668,"strong"),e(2669,"(opcional)"),t()(),n(2670,"p"),e(2671,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(2672,"p"),e(2673,"Deve ser usado o sistema de "),n(2674,"strong"),e(2675,"grid"),t(),e(2676," do PO (1 ... 12 colunas)."),t(),n(2677,"blockquote")(2678,"p"),e(2679,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2680,"code"),e(2681,"offsetColumns"),t(),e(2682,"."),t()()()(),n(2683,"tr",13)(2684,"td",14)(2685,"div",15)(2686,"span",16),e(2687," offsetMdColumns"),i(2688,"br"),t()()(),n(2689,"td",17)(2690,"code",40),e(2691,"number"),t()(),n(2692,"td",20)(2693,"em")(2694,"strong"),e(2695,"(opcional)"),t()(),n(2696,"p"),e(2697,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(2698,"p"),e(2699,"Deve ser usado o sistema de "),n(2700,"strong"),e(2701,"grid"),t(),e(2702," do PO (1 ... 12 colunas)."),t(),n(2703,"blockquote")(2704,"p"),e(2705,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2706,"code"),e(2707,"offsetColumns"),t(),e(2708,"."),t()()()(),n(2709,"tr",13)(2710,"td",14)(2711,"div",15)(2712,"span",16),e(2713," offsetSmColumns"),i(2714,"br"),t()()(),n(2715,"td",17)(2716,"code",40),e(2717,"number"),t()(),n(2718,"td",20)(2719,"em")(2720,"strong"),e(2721,"(opcional)"),t()(),n(2722,"p"),e(2723,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(2724,"p"),e(2725,"Deve ser usado o sistema de "),n(2726,"strong"),e(2727,"grid"),t(),e(2728," do PO (1 ... 12 colunas)."),t(),n(2729,"blockquote")(2730,"p"),e(2731,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2732,"code"),e(2733,"offsetColumns"),t(),e(2734,"."),t()()()(),n(2735,"tr",13)(2736,"td",14)(2737,"div",15)(2738,"span",16),e(2739," offsetXlColumns"),i(2740,"br"),t()()(),n(2741,"td",17)(2742,"code",40),e(2743,"number"),t()(),n(2744,"td",20)(2745,"em")(2746,"strong"),e(2747,"(opcional)"),t()(),n(2748,"p"),e(2749,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(2750,"p"),e(2751,"Deve ser usado o sistema de "),n(2752,"strong"),e(2753,"grid"),t(),e(2754," do PO (1 ... 12 colunas)."),t(),n(2755,"blockquote")(2756,"p"),e(2757,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2758,"code"),e(2759,"offsetColumns"),t(),e(2760,"."),t()()()(),n(2761,"tr",13)(2762,"td",14)(2763,"div",15)(2764,"span",16),e(2765," onError"),i(2766,"br"),t()()(),n(2767,"td",17)(2768,"code",28),e(2769,"Function"),t()(),n(2770,"td",20)(2771,"em")(2772,"strong"),e(2773,"(opcional)"),t()(),n(2774,"p"),e(2775,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(2776,"blockquote")(2777,"p"),e(2778,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(2779,"code"),e(2780,"HttpErrorResponse"),t(),e(2781,"."),t()(),n(2782,"p")(2783,"strong"),e(2784,"Componente compat\xEDvel"),t(),e(2785,": "),n(2786,"code"),e(2787,"po-upload"),t()()()(),n(2788,"tr",13)(2789,"td",14)(2790,"div",15)(2791,"span",16),e(2792," onSuccess"),i(2793,"br"),t()()(),n(2794,"td",17)(2795,"code",28),e(2796,"Function"),t()(),n(2797,"td",20)(2798,"em")(2799,"strong"),e(2800,"(opcional)"),t()(),n(2801,"p"),e(2802,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(2803,"blockquote")(2804,"p"),e(2805,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(2806,"code"),e(2807,"HttpResponse"),t(),e(2808,"."),t()(),n(2809,"p")(2810,"strong"),e(2811,"Componente compat\xEDvel"),t(),e(2812,": "),n(2813,"code"),e(2814,"po-upload"),t()()()(),n(2815,"tr",13)(2816,"td",14)(2817,"div",15)(2818,"span",16),e(2819," onUpload"),i(2820,"br"),t()()(),n(2821,"td",17)(2822,"code",28),e(2823,"Function"),t()(),n(2824,"td",20)(2825,"em")(2826,"strong"),e(2827,"(opcional)"),t()(),n(2828,"p"),e(2829,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(2830,"pre")(2831,"code"),e(2832,"event.data = {id: 'id do usu\xE1rio'};"),t()(),n(2833,"p")(2834,"strong"),e(2835,"Componente compat\xEDvel"),t(),e(2836,": "),n(2837,"code"),e(2838,"po-upload"),t()()()(),n(2839,"tr",13)(2840,"td",14)(2841,"div",15)(2842,"span",16),e(2843," optional"),i(2844,"br"),t()()(),n(2845,"td",17)(2846,"code",27),e(2847,"boolean"),t()(),n(2848,"td",20)(2849,"em")(2850,"strong"),e(2851,"(opcional)"),t()(),n(2852,"p"),e(2853,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(2854,"blockquote")(2855,"p"),e(2856,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),n(2857,"ul")(2858,"li"),e(2859,"O campo for "),n(2860,"code"),e(2861,"required"),t(),e(2862,", ou;"),t(),n(2863,"li"),e(2864,"N\xE3o possuir "),n(2865,"code"),e(2866,"help"),t(),e(2867," e "),n(2868,"code"),e(2869,"label"),t(),e(2870,"."),t()()()(),n(2871,"tr",13)(2872,"td",14)(2873,"div",15)(2874,"span",16),e(2875," options"),i(2876,"br"),t()()(),n(2877,"td",17)(2878,"code",31),e(2879,"Array<string> "),t(),n(2880,"code",62),e(2881," Array<PoSelectOption> "),t(),n(2882,"code",63),e(2883," Array<PoMultiselectOption> "),t(),n(2884,"code",64),e(2885," Array<PoCheckboxGroupOption> "),t(),n(2886,"code",65),e(2887," Array<any>"),t()(),n(2888,"td",20)(2889,"em")(2890,"strong"),e(2891,"(opcional)"),t()(),n(2892,"p"),e(2893,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),n(2894,"p")(2895,"strong"),e(2896,"Componentes compat\xEDveis:"),t(),n(2897,"code"),e(2898,"po-select"),t(),e(2899,", "),n(2900,"code"),e(2901,"po-radio-group"),t(),e(2902,", "),n(2903,"code"),e(2904,"po-checkbox-group"),t(),e(2905,", "),n(2906,"code"),e(2907,"po-multiselect"),t(),e(2908,"."),t()()(),n(2909,"tr",13)(2910,"td",14)(2911,"div",15)(2912,"span",16),e(2913," optionsMulti"),i(2914,"br"),t()()(),n(2915,"td",17)(2916,"code",27),e(2917,"boolean"),t()(),n(2918,"td",20)(2919,"em")(2920,"strong"),e(2921,"(opcional)"),t()(),n(2922,"p"),e(2923,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),n(2924,"tr",13)(2925,"td",14)(2926,"div",15)(2927,"span",16),e(2928," optionsService"),i(2929,"br"),t()()(),n(2930,"td",17)(2931,"code",18),e(2932,"string "),t(),n(2933,"code",66),e(2934," PoComboFilter "),t(),n(2935,"code",67),e(2936," PoMultiselectFilter"),t()(),n(2937,"td",20)(2938,"em")(2939,"strong"),e(2940,"(opcional)"),t()(),n(2941,"p"),e(2942,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),n(2943,"strong"),e(2944,"Importante"),t()(),n(2945,"blockquote")(2946,"p"),e(2947,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),n(2948,"a",68),e(2949,"guia de API do PO UI"),t(),e(2950,"."),t()()()(),n(2951,"tr",13)(2952,"td",14)(2953,"div",15)(2954,"span",16),e(2955," order"),i(2956,"br"),t()()(),n(2957,"td",17)(2958,"code",40),e(2959,"number"),t()(),n(2960,"td",20)(2961,"em")(2962,"strong"),e(2963,"(opcional)"),t()(),n(2964,"p"),e(2965,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),n(2966,"p"),e(2967,"Exemplo de utiliza\xE7\xE3o:"),t(),n(2968,"p")(2969,"code"),e(2970,`[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 }
];`),t()(),n(2971,"p"),e(2972,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),n(2973,"code"),e(2974,`[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' }
];`),t()(),n(2975,"p"),e(2976,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),n(2977,"p"),e(2978,"Campos sem "),n(2979,"code"),e(2980,"order"),t(),e(2981,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),n(2982,"tr",13)(2983,"td",14)(2984,"div",15)(2985,"span",16),e(2986," params"),i(2987,"br"),t()()(),n(2988,"td",17)(2989,"code",32),e(2990,"any"),t()(),n(2991,"td",20)(2992,"em")(2993,"strong"),e(2994,"(opcional)"),t()(),n(2995,"p"),e(2996,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),n(2997,"code"),e(2998,"po-lookup"),t(),e(2999,` e
`),n(3e3,"code"),e(3001,"po-combo"),t(),e(3002,"."),t(),n(3003,"p"),e(3004,"Por exemplo, para o par\xE2metro "),n(3005,"code"),e(3006,"{ age: 23 }"),t(),e(3007," a URL da requisi\xE7\xE3o ficaria:"),t(),n(3008,"p")(3009,"code"),e(3010,"url + ?age=23&filter=Peter"),t()()()(),n(3011,"tr",13)(3012,"td",14)(3013,"div",15)(3014,"span",16),e(3015," pattern"),i(3016,"br"),t()()(),n(3017,"td",17)(3018,"code",18),e(3019,"string"),t()(),n(3020,"td",20)(3021,"em")(3022,"strong"),e(3023,"(opcional)"),t()(),n(3024,"p"),e(3025,"Regex para valida\xE7\xE3o do campo."),t(),n(3026,"p")(3027,"strong"),e(3028,"Componentes compat\xEDveis:"),t(),n(3029,"code"),e(3030,"po-input"),t(),e(3031,", "),n(3032,"code"),e(3033,"po-password"),t(),e(3034,"."),t()()(),n(3035,"tr",13)(3036,"td",14)(3037,"div",15)(3038,"span",16),e(3039," placeholder"),i(3040,"br"),t()()(),n(3041,"td",17)(3042,"code",18),e(3043,"string"),t()(),n(3044,"td",20)(3045,"em")(3046,"strong"),e(3047,"(opcional)"),t()(),n(3048,"p"),e(3049,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),n(3050,"tr",13)(3051,"td",14)(3052,"div",15)(3053,"span",16),e(3054," placeholderSearch"),i(3055,"br"),t()()(),n(3056,"td",17)(3057,"code",18),e(3058,"string"),t()(),n(3059,"td",20)(3060,"em")(3061,"strong"),e(3062,"(opcional)"),t()(),n(3063,"p"),e(3064,"Placeholder do campo de pesquisa do "),n(3065,"code"),e(3066,"po-multiselect"),t(),e(3067,"."),t(),n(3068,"blockquote")(3069,"p"),e(3070,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),n(3071,"tr",13)(3072,"td",14)(3073,"div",15)(3074,"span",16),e(3075," property"),i(3076,"br"),t()()(),n(3077,"td",17)(3078,"code",18),e(3079,"string"),t()(),n(3080,"td",20)(3081,"p"),e(3082,"Nome de refer\xEAncia do campo."),t()()(),n(3083,"tr",13)(3084,"td",14)(3085,"div",15)(3086,"span",16),e(3087," range"),i(3088,"br"),t()()(),n(3089,"td",17)(3090,"code",27),e(3091,"boolean"),t()(),n(3092,"td",20)(3093,"em")(3094,"strong"),e(3095,"(opcional)"),t()(),n(3096,"p"),e(3097,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),n(3098,"blockquote")(3099,"p"),e(3100,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),n(3101,"tr",13)(3102,"td",14)(3103,"div",15)(3104,"span",16),e(3105," readonly"),i(3106,"br"),t()()(),n(3107,"td",17)(3108,"code",27),e(3109,"boolean"),t()(),n(3110,"td",20)(3111,"em")(3112,"strong"),e(3113,"(opcional)"),t()(),n(3114,"p"),e(3115,"Indica que o campo ser\xE1 somente leitura."),t(),n(3116,"p")(3117,"strong"),e(3118,"Componentes compat\xEDveis:"),t(),n(3119,"code"),e(3120,"po-datepicker"),t(),e(3121,", "),n(3122,"code"),e(3123,"po-datepicker-range"),t(),e(3124,", "),n(3125,"code"),e(3126,"po-input"),t(),e(3127,", "),n(3128,"code"),e(3129,"po-number"),t(),e(3130,", "),n(3131,"code"),e(3132,"po-decimal"),t(),e(3133,", "),n(3134,"code"),e(3135,"po-select"),t(),e(3136,", "),n(3137,"code"),e(3138,"po-textarea"),t(),e(3139,", "),n(3140,"code"),e(3141,"po-password"),t()()()(),n(3142,"tr",13)(3143,"td",14)(3144,"div",15)(3145,"span",16),e(3146," required"),i(3147,"br"),t()()(),n(3148,"td",17)(3149,"code",27),e(3150,"boolean"),t()(),n(3151,"td",20)(3152,"em")(3153,"strong"),e(3154,"(opcional)"),t()(),n(3155,"p"),e(3156,"Define a obrigatoriedade do campo."),t()()(),n(3157,"tr",13)(3158,"td",14)(3159,"div",15)(3160,"span",16),e(3161," requiredFieldErrorMessage"),i(3162,"br"),t()()(),n(3163,"td",17)(3164,"code",27),e(3165,"boolean"),t()(),n(3166,"td",20)(3167,"em")(3168,"strong"),e(3169,"(opcional)"),t()(),n(3170,"p"),e(3171,"Exibe a mensagem setada na propriedade "),n(3172,"code"),e(3173,"errorMessage"),t(),e(3174," se o campo estiver vazio e for requerido."),t(),n(3175,"blockquote")(3176,"p"),e(3177,"Necess\xE1rio que a propriedade "),n(3178,"code"),e(3179,"required"),t(),e(3180," esteja habilitada."),t()(),n(3181,"p")(3182,"strong"),e(3183,"Componentes compat\xEDveis:"),t(),n(3184,"code"),e(3185,"po-datepicker"),t(),e(3186,", "),n(3187,"code"),e(3188,"po-input"),t(),e(3189,", "),n(3190,"code"),e(3191,"po-number"),t(),e(3192,", "),n(3193,"code"),e(3194,"po-decimal"),t(),e(3195,", "),n(3196,"code"),e(3197,"po-password"),t(),e(3198,"."),t()()(),n(3199,"tr",13)(3200,"td",14)(3201,"div",15)(3202,"span",16),e(3203," restrictions"),i(3204,"br"),t()()(),n(3205,"td",17)(3206,"code",69),e(3207,"PoUploadFileRestrictions"),t()(),n(3208,"td",20)(3209,"em")(3210,"strong"),e(3211,"(opcional)"),t()(),n(3212,"p"),e(3213,"Objeto que segue a defini\xE7\xE3o da interface "),n(3214,"code"),e(3215,"PoUploadFileRestrictions"),t(),e(3216,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),n(3217,"p")(3218,"strong"),e(3219,"Componente compat\xEDvel"),t(),e(3220,": "),n(3221,"code"),e(3222,"po-upload"),t()()()(),n(3223,"tr",13)(3224,"td",14)(3225,"div",15)(3226,"span",16),e(3227," rows"),i(3228,"br"),t()()(),n(3229,"td",17)(3230,"code",40),e(3231,"number"),t()(),n(3232,"td",20)(3233,"em")(3234,"strong"),e(3235,"(opcional)"),t()(),n(3236,"p"),e(3237,"Quantidade de linhas exibidas no "),n(3238,"code"),e(3239,"po-textarea"),t(),e(3240,"."),t()()(),n(3241,"tr",13)(3242,"td",14)(3243,"div",15)(3244,"span",16),e(3245," searchService"),i(3246,"br"),t()()(),n(3247,"td",17)(3248,"code",18),e(3249,"string "),t(),n(3250,"code",70),e(3251," PoLookupFilter"),t()(),n(3252,"td",20)(3253,"em")(3254,"strong"),e(3255,"(opcional)"),t()(),n(3256,"p"),e(3257,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),n(3258,"code"),e(3259,"columns"),t(),e(3260,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),n(3261,"strong"),e(3262,"Importante:"),t()(),n(3263,"blockquote")(3264,"p"),e(3265,"Caso utilizar a propriedade "),n(3266,"code"),e(3267,"optionsService"),t(),e(3268,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),n(3269,"a",68),e(3270,"guia de API do PO UI"),t(),e(3271,"."),t()()()(),n(3272,"tr",13)(3273,"td",14)(3274,"div",15)(3275,"span",16),e(3276," secret"),i(3277,"br"),t()()(),n(3278,"td",17)(3279,"code",27),e(3280,"boolean"),t()(),n(3281,"td",20)(3282,"em")(3283,"strong"),e(3284,"(opcional)"),t()(),n(3285,"p"),e(3286,"Esconde a informa\xE7\xE3o estilo "),n(3287,"em"),e(3288,"password"),t(),e(3289,", pode ser utilizado quando o tipo de dado for "),n(3290,"em"),e(3291,"string"),t(),e(3292,"."),t()()(),n(3293,"tr",13)(3294,"td",14)(3295,"div",15)(3296,"span",16),e(3297," showRequired"),i(3298,"br"),t()()(),n(3299,"td",17)(3300,"code",27),e(3301,"boolean"),t()(),n(3302,"td",20)(3303,"em")(3304,"strong"),e(3305,"(opcional)"),t()(),n(3306,"p"),e(3307,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(3308,"blockquote")(3309,"p"),e(3310,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(3311,"ul")(3312,"li"),e(3313,"N\xE3o possuir "),n(3314,"code"),e(3315,"p-help"),t(),e(3316," e/ou "),n(3317,"code"),e(3318,"p-label"),t(),e(3319,"."),t()()()(),n(3320,"tr",13)(3321,"td",14)(3322,"div",15)(3323,"span",16),e(3324," sort"),i(3325,"br"),t()()(),n(3326,"td",17)(3327,"code",27),e(3328,"boolean"),t()(),n(3329,"td",20)(3330,"em")(3331,"strong"),e(3332,"(opcional)"),t()(),n(3333,"p"),e(3334,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),n(3335,"p")(3336,"strong"),e(3337,"Componentes compat\xEDveis:"),t(),n(3338,"code"),e(3339,"po-combo"),t(),e(3340,", po-multiselect"),t()()(),n(3341,"tr",13)(3342,"td",14)(3343,"div",15)(3344,"span",16),e(3345," step"),i(3346,"br"),t()()(),n(3347,"td",17)(3348,"code",40),e(3349,"number"),t()(),n(3350,"td",20)(3351,"em")(3352,"strong"),e(3353,"(opcional)"),t()(),n(3354,"p"),e(3355,"Intervalo utilizado no "),n(3356,"code"),e(3357,"po-number"),t(),e(3358,"."),t()()(),n(3359,"tr",13)(3360,"td",14)(3361,"div",15)(3362,"span",16),e(3363," thousandMaxlength"),i(3364,"br"),t()()(),n(3365,"td",17)(3366,"code",40),e(3367,"number"),t()(),n(3368,"td",20)(3369,"em")(3370,"strong"),e(3371,"(opcional)"),t()(),n(3372,"p"),e(3373,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),n(3374,"blockquote")(3375,"p"),e(3376,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(3377,"code"),e(3378,"type"),t(),e(3379," for "),n(3380,"em"),e(3381,"currency"),t(),e(3382," ou "),n(3383,"em"),e(3384,"decimal"),t(),e(3385,"."),t()()()(),n(3386,"tr",13)(3387,"td",14)(3388,"div",15)(3389,"span",16),e(3390," type"),i(3391,"br"),t()()(),n(3392,"td",17)(3393,"code",18),e(3394,"string "),t(),n(3395,"code",71),e(3396," PoDynamicFieldType"),t()(),n(3397,"td",20)(3398,"em")(3399,"strong"),e(3400,"(opcional)"),t()(),n(3401,"p"),e(3402,"Tipo do valor campo."),t(),n(3403,"p"),e(3404,"Valores v\xE1lidos:"),t(),n(3405,"ul")(3406,"li")(3407,"code"),e(3408,"boolean"),t(),e(3409,": Valores "),n(3410,"em"),e(3411,"booleanos"),t(),e(3412,"."),t(),n(3413,"li")(3414,"code"),e(3415,"currency"),t(),e(3416,": Valores monet\xE1rios."),t(),n(3417,"li")(3418,"code"),e(3419,"decimal"),t(),e(3420,": Valores decimais."),t(),n(3421,"li")(3422,"code"),e(3423,"date"),t(),e(3424,": Valores de datas."),n(3425,"ul")(3426,"li"),e(3427,"Aceita os tipos "),n(3428,"strong"),e(3429,"string"),t(),e(3430," e "),n(3431,"strong"),e(3432,"Date"),t(),e(3433,` padr\xE3o do Javascript,
por exemplo: `),n(3434,"code"),e(3435,"'2017-11-28'"),t(),e(3436," ou "),n(3437,"code"),e(3438,"new Date(2017, 10, 28)"),t(),e(3439,"."),t()()(),n(3440,"li")(3441,"code"),e(3442,"dateTime"),t(),e(3443,": Valor de data com hor\xE1rio."),n(3444,"ul")(3445,"li"),e(3446,"Aceita o tipo "),n(3447,"em"),e(3448,"string"),t(),e(3449," no formato "),n(3450,"strong"),e(3451,"ISO-8601"),t(),e(3452," extendido "),n(3453,"strong"),e(3454,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(3455,`
e o tipo `),n(3456,"strong"),e(3457,"Date"),t(),e(3458," padr\xE3o do Javascript, por exemplo: "),n(3459,"code"),e(3460,"'2017-11-28T00:00:00-02:00'"),t(),e(3461," ou "),n(3462,"code"),e(3463,"new Date(2017, 10, 28)"),t(),e(3464,"."),t()()(),n(3465,"li")(3466,"code"),e(3467,"number"),t(),e(3468,": Valores num\xE9ricos."),t(),n(3469,"li")(3470,"code"),e(3471,"string"),t(),e(3472,": Textos."),t(),n(3473,"li")(3474,"code"),e(3475,"time"),t(),e(3476,": Valor do hor\xE1rio."),n(3477,"ul")(3478,"li"),e(3479,"Aceita o tipo "),n(3480,"strong"),e(3481,"string"),t(),e(3482," nos formatos "),n(3483,"strong"),e(3484,"'HH:mm:ss'"),t(),e(3485," ou "),n(3486,"strong"),e(3487,"'HH:mm:ss.ffffff'"),t(),e(3488,", por exemplo: "),n(3489,"code"),e(3490,"'23:12:45'"),t(),e(3491,"."),t()()()()()(),n(3492,"tr",13)(3493,"td",14)(3494,"div",15)(3495,"span",16),e(3496," url"),i(3497,"br"),t()()(),n(3498,"td",17)(3499,"code",18),e(3500,"string"),t()(),n(3501,"td",20)(3502,"em")(3503,"strong"),e(3504,"(opcional)"),t()(),n(3505,"p"),e(3506,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),n(3507,"p")(3508,"strong"),e(3509,"Componente compat\xEDvel"),t(),e(3510,": "),n(3511,"code"),e(3512,"po-upload"),t()()()(),n(3513,"tr",13)(3514,"td",14)(3515,"div",15)(3516,"span",16),e(3517," validate"),i(3518,"br"),t()()(),n(3519,"td",17)(3520,"code",18),e(3521,"string "),t(),n(3522,"code",28),e(3523," Function"),t()(),n(3524,"td",20)(3525,"em")(3526,"strong"),e(3527,"(opcional)"),t()(),n(3528,"p"),e(3529,"Fun\xE7\xE3o ou servi\xE7o para validar as "),n(3530,"strong"),e(3531,"mudan\xE7as do campo"),t(),e(3532,"."),t(),n(3533,"ul")(3534,"li"),e(3535,"A propriedade aceita os seguintes tipos:"),t(),n(3536,"li")(3537,"strong"),e(3538,"String"),t(),e(3539,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),n(3540,"code"),e(3541,"POST"),t(),e(3542,"."),t(),n(3543,"li")(3544,"strong"),e(3545,"Function"),t(),e(3546,": M\xE9todo que ser\xE1 executado."),t()(),n(3547,"p"),e(3548,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),n(3549,"code"),e(3550,"PoDynamicFormFieldChanged"),t(),e(3551,":"),t(),n(3552,"p")(3553,"code"),e(3554,"{ property: 'property name', value: 'new value' }"),t()(),n(3555,"p"),e(3556,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(3557,"a",72),e(3558,"PoDynamicFormFieldValidation"),t(),e(3559,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),n(3560,"pre")(3561,"code"),e(3562,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}`),t()(),n(3563,"p"),e(3564,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(3565,"code"),e(3566,"bind"),t(),e(3567,`, por exemplo:
`),n(3568,"code"),e(3569,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),n(3570,"tr",13)(3571,"td",14)(3572,"div",15)(3573,"span",16),e(3574," visible"),i(3575,"br"),t()()(),n(3576,"td",17)(3577,"code",27),e(3578,"boolean"),t()(),n(3579,"td",20)(3580,"em")(3581,"strong"),e(3582,"(opcional)"),t()(),n(3583,"p"),e(3584,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),n(3585,"h4",37)(3586,"code",5),e(3587,"PoDynamicFormLoad"),t()(),n(3588,"div",2)(3589,"p"),i(3590,"a",73),t(),n(3591,"p"),e(3592,"Estrutura de retorno no carregamento do formul\xE1rio."),t()(),n(3593,"h4",9),e(3594,"Propriedades"),t(),n(3595,"table",10)(3596,"tr",11)(3597,"th",12),e(3598,"Nome"),t(),n(3599,"th",12),e(3600,"Tipo"),t(),n(3601,"th",12),e(3602,"Descri\xE7\xE3o"),t()(),n(3603,"tr",13)(3604,"td",14)(3605,"div",15)(3606,"span",16),e(3607," fields"),i(3608,"br"),t()()(),n(3609,"td",17)(3610,"code",21),e(3611,"Array<PoDynamicFormField>"),t()(),n(3612,"td",20)(3613,"em")(3614,"strong"),e(3615,"(opcional)"),t()(),n(3616,"p"),e(3617,"Lista com as novas defini\xE7\xF5es dos campos."),t(),n(3618,"blockquote")(3619,"p"),e(3620,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas."),t()()()(),n(3621,"tr",13)(3622,"td",14)(3623,"div",15)(3624,"span",16),e(3625," focus"),i(3626,"br"),t()()(),n(3627,"td",17)(3628,"code",18),e(3629,"string"),t()(),n(3630,"td",20)(3631,"em")(3632,"strong"),e(3633,"(opcional)"),t()(),n(3634,"p"),e(3635,"Nome do campo que receber\xE1 o foco."),t(),n(3636,"p"),e(3637,"Exemplo:"),t(),n(3638,"pre")(3639,"code"),e(3640,"focus: 'name'"),t()()()(),n(3641,"tr",13)(3642,"td",14)(3643,"div",15)(3644,"span",16),e(3645," value"),i(3646,"br"),t()()(),n(3647,"td",17)(3648,"code",32),e(3649,"any"),t()(),n(3650,"td",20)(3651,"em")(3652,"strong"),e(3653,"(opcional)"),t()(),n(3654,"p"),e(3655,"Objeto contendo os novos valores."),t(),n(3656,"p"),e(3657,"Exemplo:"),t(),n(3658,"pre")(3659,"code"),e(3660,`{
  name: 'new name',
  age: 10
}`),t()(),n(3661,"blockquote")(3662,"p"),e(3663,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),n(3664,"h4",37)(3665,"code",5),e(3666,"PoDynamicFormFieldChanged"),t()(),n(3667,"div",2)(3668,"p"),e(3669,"Estrutura dos valores que ser\xE3o disparados quando houver uma mudan\xE7a em um campo ou no formul\xE1rio."),t()(),n(3670,"h4",9),e(3671,"Propriedades"),t(),n(3672,"table",10)(3673,"tr",11)(3674,"th",12),e(3675,"Nome"),t(),n(3676,"th",12),e(3677,"Tipo"),t(),n(3678,"th",12),e(3679,"Descri\xE7\xE3o"),t()(),n(3680,"tr",13)(3681,"td",14)(3682,"div",15)(3683,"span",16),e(3684," property"),i(3685,"br"),t()()(),n(3686,"td",17)(3687,"code",18),e(3688,"string"),t()(),n(3689,"td",20)(3690,"p"),e(3691,"Valor da propriedade do campo."),t()()(),n(3692,"tr",13)(3693,"td",14)(3694,"div",15)(3695,"span",16),e(3696," value"),i(3697,"br"),t()()(),n(3698,"td",17)(3699,"code",32),e(3700,"any"),t()(),n(3701,"td",20)(3702,"p"),e(3703,"Novo valor do campo."),t()()()(),n(3704,"h4",37)(3705,"code",5),e(3706,"PoDynamicFormFieldValidation"),t()(),n(3707,"div",2)(3708,"p"),i(3709,"a",74),t(),n(3710,"p"),e(3711,"Estrutura de retorno da valida\xE7\xE3o de um campo."),t()(),n(3712,"h4",9),e(3713,"Propriedades"),t(),n(3714,"table",10)(3715,"tr",11)(3716,"th",12),e(3717,"Nome"),t(),n(3718,"th",12),e(3719,"Tipo"),t(),n(3720,"th",12),e(3721,"Descri\xE7\xE3o"),t()(),n(3722,"tr",13)(3723,"td",14)(3724,"div",15)(3725,"span",16),e(3726," field"),i(3727,"br"),t()()(),n(3728,"td",17)(3729,"code",75),e(3730,"PoDynamicFormField"),t()(),n(3731,"td",20)(3732,"em")(3733,"strong"),e(3734,"(opcional)"),t()(),n(3735,"p"),e(3736,"Novas defini\xE7\xF5es das propriedades do campo."),t(),n(3737,"blockquote")(3738,"p"),e(3739,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades, apenas as que foram alteradas."),t()()()(),n(3740,"tr",13)(3741,"td",14)(3742,"div",15)(3743,"span",16),e(3744," focus"),i(3745,"br"),t()()(),n(3746,"td",17)(3747,"code",27),e(3748,"boolean"),t()(),n(3749,"td",20)(3750,"em")(3751,"strong"),e(3752,"(opcional)"),t()(),n(3753,"p"),e(3754,"Coloca o foco no campo ap\xF3s a valida\xE7\xE3o."),t()()(),n(3755,"tr",13)(3756,"td",14)(3757,"div",15)(3758,"span",16),e(3759," value"),i(3760,"br"),t()()(),n(3761,"td",17)(3762,"code",32),e(3763,"any"),t()(),n(3764,"td",20)(3765,"em")(3766,"strong"),e(3767,"(opcional)"),t()(),n(3768,"p"),e(3769,"Novo valor do campo"),t()()()(),n(3770,"h4",37)(3771,"code",5),e(3772,"PoDynamicFormValidation"),t()(),n(3773,"div",2)(3774,"p"),i(3775,"a",76),t(),n(3776,"p"),e(3777,"Estrutura de retorno da valida\xE7\xE3o do formul\xE1rio."),t()(),n(3778,"h4",9),e(3779,"Propriedades"),t(),n(3780,"table",10)(3781,"tr",11)(3782,"th",12),e(3783,"Nome"),t(),n(3784,"th",12),e(3785,"Tipo"),t(),n(3786,"th",12),e(3787,"Descri\xE7\xE3o"),t()(),n(3788,"tr",13)(3789,"td",14)(3790,"div",15)(3791,"span",16),e(3792," fields"),i(3793,"br"),t()()(),n(3794,"td",17)(3795,"code",21),e(3796,"Array<PoDynamicFormField>"),t()(),n(3797,"td",20)(3798,"em")(3799,"strong"),e(3800,"(opcional)"),t()(),n(3801,"p"),e(3802,"Lista com as novas defini\xE7\xF5es dos campos."),t(),n(3803,"blockquote")(3804,"p"),e(3805,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que foram alteradas."),t()()()(),n(3806,"tr",13)(3807,"td",14)(3808,"div",15)(3809,"span",16),e(3810," focus"),i(3811,"br"),t()()(),n(3812,"td",17)(3813,"code",18),e(3814,"string"),t()(),n(3815,"td",20)(3816,"em")(3817,"strong"),e(3818,"(opcional)"),t()(),n(3819,"p"),e(3820,"Nome do campo que receber\xE1 o foco."),t(),n(3821,"p"),e(3822,"Exemplo:"),t(),n(3823,"pre")(3824,"code"),e(3825,"focus: 'name'"),t()()()(),n(3826,"tr",13)(3827,"td",14)(3828,"div",15)(3829,"span",16),e(3830," value"),i(3831,"br"),t()()(),n(3832,"td",17)(3833,"code",32),e(3834,"any"),t()(),n(3835,"td",20)(3836,"em")(3837,"strong"),e(3838,"(opcional)"),t()(),n(3839,"p"),e(3840,"Objeto contendo os novos valores."),t(),n(3841,"p"),e(3842,"Exemplo:"),t(),n(3843,"pre")(3844,"code"),e(3845,`{
  name: 'new name',
  age: 10
}`),t()(),n(3846,"blockquote")(3847,"p"),e(3848,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),n(3849,"h4",37)(3850,"code",5),e(3851,"ErrorAsyncProperties"),t()(),n(3852,"div",2)(3853,"p"),e(3854,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(3855,"h4",9),e(3856,"Propriedades"),t(),n(3857,"table",10)(3858,"tr",11)(3859,"th",12),e(3860,"Nome"),t(),n(3861,"th",12),e(3862,"Tipo"),t(),n(3863,"th",12),e(3864,"Descri\xE7\xE3o"),t()(),n(3865,"tr",13)(3866,"td",14)(3867,"div",15)(3868,"span",16),e(3869," errorAsync"),i(3870,"br"),t()()(),n(3871,"td",17)(3872,"code",45),e(3873,"(value) => Observable<boolean>"),t()(),n(3874,"td",20)(3875,"p"),e(3876,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(3877,"code"),e(3878,"change"),t(),e(3879," ou "),n(3880,"code"),e(3881,"change-model"),t(),e(3882,", dependendo do valor da propriedade "),n(3883,"code"),e(3884,"triggerMode"),t(),e(3885,"."),t()()(),n(3886,"tr",13)(3887,"td",14)(3888,"div",15)(3889,"span",16),e(3890," triggerMode"),i(3891,"br"),t()()(),n(3892,"td",17)(3893,"code",77),e(3894,"'change' "),t(),n(3895,"code",78),e(3896," 'changeModel'"),t()(),n(3897,"td",20)(3898,"em")(3899,"strong"),e(3900,"(opcional)"),t()(),n(3901,"p"),e(3902,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(3903,"code"),e(3904,"change"),t(),e(3905," ou "),n(3906,"code"),e(3907,"change-model"),t(),e(3908,"."),t()()()(),n(3909,"h3"),e(3910,"Enums"),t(),n(3911,"h4",4)(3912,"code",5),e(3913,"ForceBooleanComponentEnum"),t()(),n(3914,"div",2)(3915,"p"),e(3916,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),n(3917,"h4",9),e(3918,"Propriedades"),t(),n(3919,"table",10)(3920,"tr",11)(3921,"th",12),e(3922,"Nome"),t(),n(3923,"th",12),e(3924,"Descri\xE7\xE3o"),t()(),n(3925,"tr",13)(3926,"td",14)(3927,"div",15)(3928,"span",16),e(3929," switch"),i(3930,"br"),t()()(),n(3931,"td",20)(3932,"p"),e(3933,"For\xE7a a renderiza\xE7\xE3o de um po-switch"),t()()(),n(3934,"tr",13)(3935,"td",14)(3936,"div",15)(3937,"span",16),e(3938," checkbox"),i(3939,"br"),t()()(),n(3940,"td",20)(3941,"p"),e(3942,"For\xE7a a renderiza\xE7\xE3o de um po-checkbox"),t()()()(),n(3943,"h4",4)(3944,"code",5),e(3945,"ForceOptionComponentEnum"),t()(),n(3946,"div",2)(3947,"p"),e(3948,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),n(3949,"h4",9),e(3950,"Propriedades"),t(),n(3951,"table",10)(3952,"tr",11)(3953,"th",12),e(3954,"Nome"),t(),n(3955,"th",12),e(3956,"Descri\xE7\xE3o"),t()(),n(3957,"tr",13)(3958,"td",14)(3959,"div",15)(3960,"span",16),e(3961," radioGroup"),i(3962,"br"),t()()(),n(3963,"td",20)(3964,"p"),e(3965,"For\xE7a a renderiza\xE7\xE3o de um po-radio-group independente da quantidade do op\xE7\xF5es"),t()()(),n(3966,"tr",13)(3967,"td",14)(3968,"div",15)(3969,"span",16),e(3970," select"),i(3971,"br"),t()()(),n(3972,"td",20)(3973,"p"),e(3974,"For\xE7a a renderiza\xE7\xE3o de um po-select independente da quantidade do op\xE7\xF5es"),t()()()(),n(3975,"h4",4)(3976,"code",5),e(3977,"PoDynamicFieldType"),t()(),n(3978,"div",2)(3979,"p"),e(3980,"Enum para defini\xE7\xE3o do tipo de campo que ser\xE1 criado dinamicamente."),t()(),n(3981,"h4",9),e(3982,"Propriedades"),t(),n(3983,"table",10)(3984,"tr",11)(3985,"th",12),e(3986,"Nome"),t(),n(3987,"th",12),e(3988,"Descri\xE7\xE3o"),t()(),n(3989,"tr",13)(3990,"td",14)(3991,"div",15)(3992,"span",16),e(3993," Boolean"),i(3994,"br"),t()()(),n(3995,"td",20)(3996,"p"),e(3997,"Valor booleano."),t()()(),n(3998,"tr",13)(3999,"td",14)(4e3,"div",15)(4001,"span",16),e(4002," Currency"),i(4003,"br"),t()()(),n(4004,"td",20)(4005,"p"),e(4006,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),n(4007,"tr",13)(4008,"td",14)(4009,"div",15)(4010,"span",16),e(4011," Decimal"),i(4012,"br"),t()()(),n(4013,"td",20)(4014,"p"),e(4015,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),n(4016,"tr",13)(4017,"td",14)(4018,"div",15)(4019,"span",16),e(4020," Date"),i(4021,"br"),t()()(),n(4022,"td",20)(4023,"p"),e(4024,"Valor para data."),t()()(),n(4025,"tr",13)(4026,"td",14)(4027,"div",15)(4028,"span",16),e(4029," DateTime"),i(4030,"br"),t()()(),n(4031,"td",20)(4032,"p"),e(4033,"Valor para data e hora."),t()()(),n(4034,"tr",13)(4035,"td",14)(4036,"div",15)(4037,"span",16),e(4038," Time"),i(4039,"br"),t()()(),n(4040,"td",20)(4041,"p"),e(4042,"Utilizado para informar/exibir hora."),t()()(),n(4043,"tr",13)(4044,"td",14)(4045,"div",15)(4046,"span",16),e(4047," Number"),i(4048,"br"),t()()(),n(4049,"td",20)(4050,"p"),e(4051,"Valor num\xE9rico."),t()()(),n(4052,"tr",13)(4053,"td",14)(4054,"div",15)(4055,"span",16),e(4056," String"),i(4057,"br"),t()()(),n(4058,"td",20)(4059,"p"),e(4060,"Texto."),t()()(),n(4061,"tr",13)(4062,"td",14)(4063,"div",15)(4064,"span",16),e(4065," Upload"),i(4066,"br"),t()()(),n(4067,"td",20)(4068,"p"),e(4069,"Utilizado para fazer uploads de arquivos."),t()()()()())},dependencies:[g],encapsulation:2})}return o})();var $=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(E(R),E(U))};static \u0275cmp=p({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Dynamic Form",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,m){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),i(3,"sample-po-dynamic-form-doc"),t(),n(4,"po-tab",3),i(5,"sample-po-dynamic-form-basic-view")(6,"sample-po-dynamic-form-register-view")(7,"sample-po-dynamic-form-container-view"),t()()()),a&2&&(d("p-actions",m.actions),l(2),d("p-active",m.activeTab.includes("doc")),l(2),d("p-hide",m.hidePoWebSample)("p-active",m.activeTab.includes("web")))},dependencies:[H,S,b,W,G,Y,Z],encapsulation:2})}return o})();var Se=[{path:"",component:$}],ee=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[V.forChild(Se),V]})}return o})();var Xe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[X,ee]})}return o})();export{Xe as DocPoDynamicFormModule};
