import{$ as T,$a as C,F as k,Fa as v,G as q,Ga as e,Ia as f,Na as M,Oa as B,Od as H,Pa as x,T as l,U as E,Wb as R,Xd as S,Yb as U,Yd as b,Zb as z,_ as p,ad as A,be as O,ha as d,ka as y,na as n,oa as t,oc as N,od as h,pa as i,re as g,se as X,ta as w,ua as u,x as D,y as P}from"./chunk-ODUOVNEW.js";var ne=()=>({property:"name",required:!0,showRequired:!0}),ie=o=>[o],_=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=p({type:o,selectors:[["sample-po-dynamic-form-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-fields"]],template:function(a,m){a&1&&i(0,"po-dynamic-form",0),a&2&&d("p-fields",x(2,ie,B(1,ne)))},dependencies:[h],encapsulation:2})}return o})();var ae=o=>({"docs-sample-code-tabs":o}),W=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=p({type:o,selectors:[["sample-po-dynamic-form-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,m){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form Basic"),t(),n(4,"a",2),u("click",function(){return m.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),t()()()()(),n(21,"div",10),i(22,"sample-po-dynamic-form-basic"),t(),i(23,"hr")),a&2&&(l(5),y("po-icon "+m.sampleCodeButtonIcon),l(),f(" ",m.sampleCodeButtonLabel,""),l(),d("ngClass",x(4,ae,m.hideSampleCodeTabs)))},dependencies:[C,g,S,b,_],encapsulation:2})}return o})();var L=(()=>{class o{getCity(r){switch(r){case 1:return[{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return[{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return[{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return[{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return[]}getUserDocument(r){let a={property:"cpf",visible:!0},m={property:"cnpj",visible:!0};return{fields:[r.isJuridicPerson?m:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var K=(()=>{class o{poNotification;registerService;person={};validateFields=["state"];fields=[{property:"name",divider:"PERSONAL DATA",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password"},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",divider:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",divider:"Work data",range:!0,gridColumns:5,gridSmColumns:12},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",divider:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:!0,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:!0},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:!0,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:!0},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:!0,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:!0},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:O.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:!0,url:"https://po-sample-api.onrender.com/v1/uploads/addFile"}];constructor(r,a){this.poNotification=r,this.registerService=a}ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:!1,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"}}onChangeFields(r){return{value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(r.value.state),disabled:!1}]}}onLoadFields(r){return this.registerService.getUserDocument(r)}static \u0275fac=function(a){return new(a||o)(E(A),E(L))};static \u0275cmp=p({type:o,selectors:[["sample-po-dynamic-form-register"]],standalone:!1,features:[M([L])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,m){if(a&1){let s=w();i(0,"po-dynamic-form",1,0)(2,"br"),n(3,"div",2)(4,"po-button",3),u("p-click",function(){k(s);let j=v(1);return m.poNotification.success("Data saved successfully!"),q(j.form.reset())}),t()()}if(a&2){let s=v(1);d("p-fields",m.fields)("p-load",m.onLoadFields.bind(m))("p-validate",m.onChangeFields.bind(m))("p-validate-fields",m.validateFields)("p-value",m.person),l(4),d("p-disabled",s==null?null:s.form.invalid)}},dependencies:[N,h],encapsulation:2})}return o})();var de=o=>({"docs-sample-code-tabs":o}),G=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=p({type:o,selectors:[["sample-po-dynamic-form-register-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,m){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form - Register"),t(),n(4,"a",2),u("click",function(){return m.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form
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
`),t()()()()(),n(25,"div",10),i(26,"sample-po-dynamic-form-register"),t(),i(27,"hr")),a&2&&(l(5),y("po-icon "+m.sampleCodeButtonIcon),l(),f(" ",m.sampleCodeButtonLabel,""),l(),d("ngClass",x(4,de,m.hideSampleCodeTabs)))},dependencies:[C,g,S,b,K],encapsulation:2})}return o})();var V=(()=>{class o{getCity(r){switch(r){case 1:return[{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return[{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return[{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return[{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return[]}getUserDocument(r){let a={property:"cpf",visible:!0},m={property:"cnpj",visible:!0};return{fields:[r.isJuridicPerson?m:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Q=(()=>{class o{poNotification;registerService;person={};validateFields=["state"];fields=[{property:"name",container:"PERSONAL DATA",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password"},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",container:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",container:"Work data",range:!0,gridColumns:5,gridSmColumns:12},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",container:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:!0,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:!0},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:!0,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:!0},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:!0,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:!0},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:O.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:!0,url:"https://po-sample-api.onrender.com/v1/uploads/addFile"}];constructor(r,a){this.poNotification=r,this.registerService=a}ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:!1,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"}}onChangeFields(r){return{value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(r.value.state),disabled:!1}]}}onLoadFields(r){return this.registerService.getUserDocument(r)}static \u0275fac=function(a){return new(a||o)(E(A),E(V))};static \u0275cmp=p({type:o,selectors:[["sample-po-dynamic-form-container"]],standalone:!1,features:[M([V])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,m){if(a&1){let s=w();i(0,"po-dynamic-form",1,0)(2,"br"),n(3,"div",2)(4,"po-button",3),u("p-click",function(){k(s);let j=v(1);return m.poNotification.success("Data saved successfully!"),q(j.form.reset())}),t()()}if(a&2){let s=v(1);d("p-fields",m.fields)("p-load",m.onLoadFields.bind(m))("p-validate",m.onChangeFields.bind(m))("p-validate-fields",m.validateFields)("p-value",m.person),l(4),d("p-disabled",s==null?null:s.form.invalid)}},dependencies:[N,h],encapsulation:2})}return o})();var ue=o=>({"docs-sample-code-tabs":o}),Y=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=p({type:o,selectors:[["sample-po-dynamic-form-container-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,m){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form - Container"),t(),n(4,"a",2),u("click",function(){return m.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form
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
  ForceBooleanComponentEnum
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
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile'
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
`),t()()()()(),n(25,"div",10),i(26,"sample-po-dynamic-form-container"),t(),i(27,"hr")),a&2&&(l(5),y("po-icon "+m.sampleCodeButtonIcon),l(),f(" ",m.sampleCodeButtonLabel,""),l(),d("ngClass",x(4,ue,m.hideSampleCodeTabs)))},dependencies:[C,g,S,b,Q],encapsulation:2})}return o})();var Z=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=p({type:o,selectors:[["sample-po-dynamic-form-doc"]],standalone:!1,decls:3929,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"language-ts"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["href","documentation/po-dynamic-form#po-dynamic-form-load"],["href","documentation/po-dynamic-form#po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-javascript"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["id","po-dynamic-form-load"],["id","po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type","PoDynamicFormField"],["id","po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,m){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2),n(5,"h3",3),e(6,"Componente"),t(),n(7,"h4",4)(8,"code",5),e(9,"PoDynamicFormComponent"),t()(),n(10,"div",2)(11,"p"),e(12,"Componente para cria\xE7\xE3o de formul\xE1rios din\xE2micos a partir de uma lista de objetos."),t(),n(13,"p"),e(14,"Tamb\xE9m \xE9 poss\xEDvel verificar se o formul\xE1rio est\xE1 v\xE1lido e informar valores para a exibi\xE7\xE3o de informa\xE7\xF5es. "),t()(),n(15,"div",6)(16,"h4",7),e(17,"Seletor"),t(),n(18,"pre",8),e(19,`<po-dynamic-form
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
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),n(872,"p"),e(873,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),n(874,"tr",13)(875,"td",14)(876,"div",15)(877,"span",16),e(878," debounceTime"),i(879,"br"),t()()(),n(880,"td",17)(881,"code",40),e(882,"number"),t()(),n(883,"td",20)(884,"em")(885,"strong"),e(886,"(opcional)"),t()(),n(887,"p"),e(888,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),n(889,"code"),e(890,"p-filter-service"),t(),e(891,")."),t(),n(892,"p")(893,"strong"),e(894,"Componentes compat\xEDveis:"),t(),n(895,"code"),e(896,"po-combo"),t(),e(897,", "),n(898,"code"),e(899,"po-multiselect"),t(),e(900,"."),t()()(),n(901,"tr",13)(902,"td",14)(903,"div",15)(904,"span",16),e(905," decimalsLength"),i(906,"br"),t()()(),n(907,"td",17)(908,"code",40),e(909,"number"),t()(),n(910,"td",20)(911,"em")(912,"strong"),e(913,"(opcional)"),t()(),n(914,"p"),e(915,"Quantidade m\xE1xima de casas decimais."),t(),n(916,"blockquote")(917,"p"),e(918,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(919,"code"),e(920,"type"),t(),e(921," for "),n(922,"em"),e(923,"currency"),t(),e(924," ou "),n(925,"em"),e(926,"decimal"),t(),e(927,"."),t()()()(),n(928,"tr",13)(929,"td",14)(930,"div",15)(931,"span",16),e(932," directory"),i(933,"br"),t()()(),n(934,"td",17)(935,"code",27),e(936,"boolean"),t()(),n(937,"td",20)(938,"em")(939,"strong"),e(940,"(opcional)"),t()(),n(941,"p"),e(942,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(943,"blockquote")(944,"p"),e(945,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(946,"blockquote")(947,"p"),e(948,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(949,"strong"),e(950,"Internet Explorer"),t(),e(951,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),n(952,"p")(953,"strong"),e(954,"Componente compat\xEDvel"),t(),e(955,": "),n(956,"code"),e(957,"po-upload"),t()()()(),n(958,"tr",13)(959,"td",14)(960,"div",15)(961,"span",16),e(962," disabled"),i(963,"br"),t()()(),n(964,"td",17)(965,"code",27),e(966,"boolean"),t()(),n(967,"td",20)(968,"em")(969,"strong"),e(970,"(opcional)"),t()(),n(971,"p"),e(972,"Desabilita o campo caso informar o valor "),n(973,"em"),e(974,"true"),t(),e(975,"."),t()()(),n(976,"tr",13)(977,"td",14)(978,"div",15)(979,"span",16),e(980," disabledInitFilter"),i(981,"br"),t()()(),n(982,"td",17)(983,"code",27),e(984,"boolean"),t()(),n(985,"td",20)(986,"em")(987,"strong"),e(988,"(opcional)"),t()(),n(989,"p"),e(990,"Desabilita o filtro inicial no servi\xE7o do "),n(991,"code"),e(992,"po-combo"),t(),e(993,", que \xE9 executado no primeiro clique no campo."),t()()(),n(994,"tr",13)(995,"td",14)(996,"div",15)(997,"span",16),e(998," disabledTabFilter"),i(999,"br"),t()()(),n(1e3,"td",17)(1001,"code",27),e(1002,"boolean"),t()(),n(1003,"td",20)(1004,"em")(1005,"strong"),e(1006,"(opcional)"),t()(),n(1007,"p"),e(1008,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),n(1009,"code"),e(1010,"po-combo"),t(),e(1011,"."),t()()(),n(1012,"tr",13)(1013,"td",14)(1014,"div",15)(1015,"span",16),e(1016," divider"),i(1017,"br"),t()()(),n(1018,"td",17)(1019,"code",18),e(1020,"string"),t()(),n(1021,"td",20)(1022,"em")(1023,"strong"),e(1024,"(opcional)"),t()(),n(1025,"p"),e(1026,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),n(1027,"tr",13)(1028,"td",14)(1029,"div",15)(1030,"span",16),e(1031," dragDrop"),i(1032,"br"),t()()(),n(1033,"td",17)(1034,"code",27),e(1035,"boolean"),t()(),n(1036,"td",20)(1037,"em")(1038,"strong"),e(1039,"(opcional)"),t()(),n(1040,"p"),e(1041,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(1042,"blockquote")(1043,"p"),e(1044,"Recomendamos utilizar apenas um "),n(1045,"code"),e(1046,"po-upload"),t(),e(1047," com esta funcionalidade por tela."),t()(),n(1048,"p")(1049,"strong"),e(1050,"Componente compat\xEDvel"),t(),e(1051,": "),n(1052,"code"),e(1053,"po-upload"),t()()()(),n(1054,"tr",13)(1055,"td",14)(1056,"div",15)(1057,"span",16),e(1058," dragDropHeight"),i(1059,"br"),t()()(),n(1060,"td",17)(1061,"code",40),e(1062,"number"),t()(),n(1063,"td",20)(1064,"em")(1065,"strong"),e(1066,"(opcional)"),t()(),n(1067,"p"),e(1068,"Define em "),n(1069,"em"),e(1070,"pixels"),t(),e(1071," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(1072,"code"),e(1073,"160px"),t(),e(1074,"."),t(),n(1075,"blockquote")(1076,"p"),e(1077,"Esta propriedade funciona somente se a propriedade "),n(1078,"code"),e(1079,"p-drag-drop"),t(),e(1080," estiver habilitada."),t()(),n(1081,"p")(1082,"strong"),e(1083,"Componente compat\xEDvel"),t(),e(1084,": "),n(1085,"code"),e(1086,"po-upload"),t()()()(),n(1087,"tr",13)(1088,"td",14)(1089,"div",15)(1090,"span",16),e(1091," errorAsyncFunction"),i(1092,"br"),t()()(),n(1093,"td",17)(1094,"code",42),e(1095,"(value) => Observable<boolean>"),t()(),n(1096,"td",20)(1097,"em")(1098,"strong"),e(1099,"(opcional)"),t()(),n(1100,"p"),e(1101,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1102,"code"),e(1103,"change"),t(),e(1104," ou "),n(1105,"code"),e(1106,"change-model"),t(),e(1107,", dependendo do valor da propriedade "),n(1108,"code"),e(1109,"triggerMode"),t(),e(1110,"."),t(),n(1111,"blockquote")(1112,"p"),e(1113,"Retorna "),n(1114,"code"),e(1115,"Observable com o valor true"),t(),e(1116," para sinalizar o erro "),n(1117,"code"),e(1118,"false"),t(),e(1119," para indicar que n\xE3o h\xE1 erro."),t()(),n(1120,"p")(1121,"strong"),e(1122,"Componente compat\xEDvel"),t(),e(1123,": "),n(1124,"code"),e(1125,"po-datepicker"),t()()()(),n(1126,"tr",13)(1127,"td",14)(1128,"div",15)(1129,"span",16),e(1130," errorAsyncProperties"),i(1131,"br"),t()()(),n(1132,"td",17)(1133,"code",43),e(1134,"ErrorAsyncProperties"),t()(),n(1135,"td",20)(1136,"em")(1137,"strong"),e(1138,"(opcional)"),t()(),n(1139,"p"),e(1140,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),n(1141,"p")(1142,"strong"),e(1143,"Componentes compat\xEDveis:"),t(),n(1144,"code"),e(1145,"po-input"),t(),e(1146,", "),n(1147,"code"),e(1148,"po-number"),t(),e(1149,", "),n(1150,"code"),e(1151,"po-decimal"),t(),e(1152,", "),n(1153,"code"),e(1154,"po-password"),t(),e(1155,"."),t()()(),n(1156,"tr",13)(1157,"td",14)(1158,"div",15)(1159,"span",16),e(1160," errorMessage"),i(1161,"br"),t()()(),n(1162,"td",17)(1163,"code",18),e(1164,"string"),t()(),n(1165,"td",20)(1166,"em")(1167,"strong"),e(1168,"(opcional)"),t()(),n(1169,"p"),e(1170,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),n(1171,"p"),e(1172,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),n(1173,"ul")(1174,"li"),e(1175,"pattern;"),t(),n(1176,"li"),e(1177,"minValue;"),t(),n(1178,"li"),e(1179,"maxValue;"),t(),n(1180,"li"),e(1181,"required;"),t()(),n(1182,"blockquote")(1183,"p"),e(1184,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),n(1185,"code"),e(1186,"po-datepicker"),t(),e(1187,", "),n(1188,"code"),e(1189,"po-input"),t(),e(1190,", "),n(1191,"code"),e(1192,"po-number"),t(),e(1193,", "),n(1194,"code"),e(1195,"po-decimal"),t(),e(1196,", "),n(1197,"code"),e(1198,"po-password"),t(),e(1199,`, \xE9 necess\xE1rio que a propriedade
`),n(1200,"code"),e(1201,"requiredFieldErrorMessage"),t(),e(1202," esteja como "),n(1203,"code"),e(1204,"true"),t(),e(1205,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),n(1206,"code"),e(1207,"po-datepicker-range"),t(),e(1208,", "),n(1209,"code"),e(1210,"po-select"),t(),e(1211,", "),n(1212,"code"),e(1213,"po-checkbox-group"),t(),e(1214,", "),n(1215,"code"),e(1216,"po-radio-group"),t(),e(1217,", "),n(1218,"code"),e(1219,"po-multiselect"),t(),e(1220,", "),n(1221,"code"),e(1222,"po-combo"),t(),e(1223,`,
`),n(1224,"code"),e(1225,"po-lookup"),t(),e(1226," e "),n(1227,"code"),e(1228,"po-textarea"),t(),e(1229," n\xE3o \xE9 necess\xE1rio passar a propriedade "),n(1230,"code"),e(1231,"requiredFieldErrorMessage"),t(),e(1232,"."),t()(),n(1233,"p")(1234,"strong"),e(1235,"Componentes compat\xEDveis:"),t(),n(1236,"code"),e(1237,"po-datepicker"),t(),e(1238,", "),n(1239,"code"),e(1240,"po-input"),t(),e(1241,", "),n(1242,"code"),e(1243,"po-number"),t(),e(1244,", "),n(1245,"code"),e(1246,"po-decimal"),t(),e(1247,", "),n(1248,"code"),e(1249,"po-password"),t(),e(1250,", "),n(1251,"code"),e(1252,"po-datepicker-range"),t(),e(1253,", "),n(1254,"code"),e(1255,"po-select"),t(),e(1256,", "),n(1257,"code"),e(1258,"po-checkbox-group"),t(),e(1259,", "),n(1260,"code"),e(1261,"po-radio-group"),t(),e(1262,", "),n(1263,"code"),e(1264,"po-multiselect"),t(),e(1265,", "),n(1266,"code"),e(1267,"po-combo"),t(),e(1268,", "),n(1269,"code"),e(1270,"po-lookup"),t(),e(1271,", "),n(1272,"code"),e(1273,"po-textarea"),t(),e(1274,"."),t()()(),n(1275,"tr",13)(1276,"td",14)(1277,"div",15)(1278,"span",16),e(1279," fieldLabel"),i(1280,"br"),t()()(),n(1281,"td",17)(1282,"code",18),e(1283,"string"),t()(),n(1284,"td",20)(1285,"em")(1286,"strong"),e(1287,"(opcional)"),t()(),n(1288,"p"),e(1289,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),n(1290,"p"),e(1291,"O valor padr\xE3o \xE9: "),n(1292,"code"),e(1293,"label"),t(),e(1294,"."),t(),n(1295,"blockquote")(1296,"p"),e(1297,"Esta propriedade pode ser utilizada em conjunto com: "),n(1298,"code"),e(1299,"options"),t(),e(1300,", "),n(1301,"code"),e(1302,"optionsService"),t(),e(1303," e "),n(1304,"code"),e(1305,"searchService"),t(),e(1306,"."),t()()()(),n(1307,"tr",13)(1308,"td",14)(1309,"div",15)(1310,"span",16),e(1311," fieldValue"),i(1312,"br"),t()()(),n(1313,"td",17)(1314,"code",18),e(1315,"string"),t()(),n(1316,"td",20)(1317,"em")(1318,"strong"),e(1319,"(opcional)"),t()(),n(1320,"p"),e(1321,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),n(1322,"p"),e(1323,"O valor padr\xE3o \xE9: "),n(1324,"code"),e(1325,"value"),t(),e(1326,"."),t(),n(1327,"blockquote")(1328,"p"),e(1329,"Esta propriedade pode ser utilizada em conjunto com: "),n(1330,"code"),e(1331,"options"),t(),e(1332,", "),n(1333,"code"),e(1334,"optionsService"),t(),e(1335," e "),n(1336,"code"),e(1337,"searchService"),t(),e(1338,"."),t()()()(),n(1339,"tr",13)(1340,"td",14)(1341,"div",15)(1342,"span",16),e(1343," filterMinlength"),i(1344,"br"),t()()(),n(1345,"td",17)(1346,"code",40),e(1347,"number"),t()(),n(1348,"td",20)(1349,"em")(1350,"strong"),e(1351,"(opcional)"),t()(),n(1352,"p"),e(1353,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),n(1354,"code"),e(1355,"po-combo"),t(),e(1356,"."),t()()(),n(1357,"tr",13)(1358,"td",14)(1359,"div",15)(1360,"span",16),e(1361," filterMode"),i(1362,"br"),t()()(),n(1363,"td",17)(1364,"code",44),e(1365,"PoMultiselectFilterMode"),t()(),n(1366,"td",20)(1367,"em")(1368,"strong"),e(1369,"(opcional)"),t()(),n(1370,"p"),e(1371,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),n(1372,"code"),e(1373,"startsWith"),t(),e(1374,", "),n(1375,"code"),e(1376,"contains"),t(),e(1377," ou "),n(1378,"code"),e(1379,"endsWith"),t(),e(1380,"."),t(),n(1381,"blockquote")(1382,"p"),e(1383,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),n(1384,"p")(1385,"strong"),e(1386,"Componentes compat\xEDveis:"),t(),n(1387,"code"),e(1388,"po-multiselect"),t(),e(1389,"."),t()()(),n(1390,"tr",13)(1391,"td",14)(1392,"div",15)(1393,"span",16),e(1394," forceBooleanComponentType"),i(1395,"br"),t()()(),n(1396,"td",17)(1397,"code",45),e(1398,"ForceBooleanComponentEnum"),t()(),n(1399,"td",20)(1400,"em")(1401,"strong"),e(1402,"(opcional)"),t()(),n(1403,"p"),e(1404,"Valores aceitos:"),t(),n(1405,"ul")(1406,"li"),e(1407,"ForceBooleanComponentEnum.switch"),t(),n(1408,"li"),e(1409,"ForceBooleanComponentEnum.checkbox"),t()()()(),n(1410,"tr",13)(1411,"td",14)(1412,"div",15)(1413,"span",16),e(1414," forceOptionsComponentType"),i(1415,"br"),t()()(),n(1416,"td",17)(1417,"code",46),e(1418,"ForceOptionComponentEnum"),t()(),n(1419,"td",20)(1420,"em")(1421,"strong"),e(1422,"(opcional)"),t()(),n(1423,"p"),e(1424,"pode ser utilizada em conjunto com a propriedade "),n(1425,"code"),e(1426,"options"),t(),e(1427," for\xE7ando o componente a renderizar um "),n(1428,"code"),e(1429,"po-select"),t(),e(1430," ou "),n(1431,"code"),e(1432,"po-radio-group"),t(),e(1433,"."),t(),n(1434,"p"),e(1435,"Valores aceitos:"),t(),n(1436,"ul")(1437,"li"),e(1438,"ForceOptionComponentEnum.radioGroup"),t(),n(1439,"li"),e(1440,"ForceOptionComponentEnum.select"),t()(),n(1441,"blockquote")(1442,"p"),e(1443,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),n(1444,"code"),e(1445,"optionsMulti"),t(),e(1446," e "),n(1447,"code"),e(1448,"optionsService"),t(),e(1449,"."),t()()()(),n(1450,"tr",13)(1451,"td",14)(1452,"div",15)(1453,"span",16),e(1454," formField"),i(1455,"br"),t()()(),n(1456,"td",17)(1457,"code",18),e(1458,"string"),t()(),n(1459,"td",20)(1460,"em")(1461,"strong"),e(1462,"(opcional)"),t()(),n(1463,"p"),e(1464,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(1465,"code"),e(1466,"url"),t(),e(1467,"."),t(),n(1468,"blockquote")(1469,"p"),e(1470,"O valor default \xE9 "),n(1471,"code"),e(1472,"files"),t()()(),n(1473,"p")(1474,"strong"),e(1475,"Componente compat\xEDvel"),t(),e(1476,": "),n(1477,"code"),e(1478,"po-upload"),t()()()(),n(1479,"tr",13)(1480,"td",14)(1481,"div",15)(1482,"span",16),e(1483," format"),i(1484,"br"),t()()(),n(1485,"td",17)(1486,"code",18),e(1487,"string "),t(),n(1488,"code",31),e(1489," Array<string>"),t()(),n(1490,"td",20)(1491,"em")(1492,"strong"),e(1493,"(opcional)"),t()(),n(1494,"p"),e(1495,"Formato de exibi\xE7\xE3o no campo."),t(),n(1496,"p"),e(1497,"Ao utilizar esta propriedade com o "),n(1498,"code"),e(1499,"type"),t(),n(1500,"em"),e(1501,"PoDynamicFieldType.Date"),t(),e(1502," ou "),n(1503,"em"),e(1504,"PoDynamicFieldType.DateTime"),t(),e(1505,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),n(1506,"p"),e(1507,"Valores v\xE1lidos:"),t(),n(1508,"ul")(1509,"li"),e(1510,"dd/mm/yyyy"),t(),n(1511,"li"),e(1512,"mm/dd/yyyy"),t(),n(1513,"li"),e(1514,"yyyy/mm/dd"),t()(),n(1515,"p"),e(1516,"Tamb\xE9m pode-se utilizar em conjunto com "),n(1517,"code"),e(1518,"searchService"),t(),e(1519,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t()()(),n(1520,"tr",13)(1521,"td",14)(1522,"div",15)(1523,"span",16),e(1524," formatModel"),i(1525,"br"),t()()(),n(1526,"td",17)(1527,"code",27),e(1528,"boolean"),t()(),n(1529,"td",20)(1530,"em")(1531,"strong"),e(1532,"(opcional)"),t()(),n(1533,"p"),e(1534,"Indica se o "),n(1535,"code"),e(1536,"model"),t(),e(1537," receber\xE1 o valor formatado pelas propriedades "),n(1538,"code"),e(1539,"p-label-on"),t(),e(1540," e "),n(1541,"code"),e(1542,"p-label-off"),t(),e(1543,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),n(1544,"p"),e(1545,"O valor padr\xE3o \xE9: "),n(1546,"code"),e(1547,"false"),t(),e(1548,"."),t(),n(1549,"blockquote")(1550,"p"),e(1551,"Esta propriedade est\xE1 disponivel apenas para o "),n(1552,"code"),e(1553,"swicth"),t(),e(1554,"."),t()()()(),n(1555,"tr",13)(1556,"td",14)(1557,"div",15)(1558,"span",16),e(1559," gridColumns"),i(1560,"br"),t()()(),n(1561,"td",17)(1562,"code",40),e(1563,"number"),t()(),n(1564,"td",20)(1565,"em")(1566,"strong"),e(1567,"(opcional)"),t()(),n(1568,"p"),e(1569,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),n(1570,"p"),e(1571,"Deve ser usado o sistema de "),n(1572,"strong"),e(1573,"grid"),t(),e(1574," do PO (1 ... 12 colunas)."),t(),n(1575,"blockquote")(1576,"p"),e(1577,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(1578,"tr",13)(1579,"td",14)(1580,"div",15)(1581,"span",16),e(1582," gridLgColumns"),i(1583,"br"),t()()(),n(1584,"td",17)(1585,"code",40),e(1586,"number"),t()(),n(1587,"td",20)(1588,"em")(1589,"strong"),e(1590,"(opcional)"),t()(),n(1591,"p"),e(1592,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(1593,"p"),e(1594,"Deve ser usado o sistema de "),n(1595,"strong"),e(1596,"grid"),t(),e(1597," do PO (1 ... 12 colunas)."),t(),n(1598,"blockquote")(1599,"p"),e(1600,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1601,"code"),e(1602,"gridColumns"),t(),e(1603,"."),t()()()(),n(1604,"tr",13)(1605,"td",14)(1606,"div",15)(1607,"span",16),e(1608," gridLgPull"),i(1609,"br"),t()()(),n(1610,"td",17)(1611,"code",40),e(1612,"number"),t()(),n(1613,"td",20)(1614,"em")(1615,"strong"),e(1616,"(opcional)"),t()(),n(1617,"p"),e(1618,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),n(1619,"p"),e(1620,"Deve ser usado o sistema de "),n(1621,"strong"),e(1622,"grid"),t(),e(1623," do PO (1 ... 11 colunas)."),t(),n(1624,"blockquote")(1625,"p"),e(1626,"Esta propriedade n\xE3o funciona com a propriedade "),n(1627,"code"),e(1628,"gridColumns"),t(),e(1629,". Deve-se especificar o tamanho da tela."),t()()()(),n(1630,"tr",13)(1631,"td",14)(1632,"div",15)(1633,"span",16),e(1634," gridMdColumns"),i(1635,"br"),t()()(),n(1636,"td",17)(1637,"code",40),e(1638,"number"),t()(),n(1639,"td",20)(1640,"em")(1641,"strong"),e(1642,"(opcional)"),t()(),n(1643,"p"),e(1644,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(1645,"p"),e(1646,"Deve ser usado o sistema de "),n(1647,"strong"),e(1648,"grid"),t(),e(1649," do PO (1 ... 12 colunas)."),t(),n(1650,"blockquote")(1651,"p"),e(1652,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1653,"code"),e(1654,"gridColumns"),t(),e(1655,"."),t()()()(),n(1656,"tr",13)(1657,"td",14)(1658,"div",15)(1659,"span",16),e(1660," gridMdPull"),i(1661,"br"),t()()(),n(1662,"td",17)(1663,"code",40),e(1664,"number"),t()(),n(1665,"td",20)(1666,"em")(1667,"strong"),e(1668,"(opcional)"),t()(),n(1669,"p"),e(1670,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),n(1671,"p"),e(1672,"Deve ser usado o sistema de "),n(1673,"strong"),e(1674,"grid"),t(),e(1675," do PO (1 ... 11 colunas)."),t(),n(1676,"blockquote")(1677,"p"),e(1678,"Esta propriedade n\xE3o funciona com a propriedade "),n(1679,"code"),e(1680,"gridColumns"),t(),e(1681,". Deve-se especificar o tamanho da tela."),t()()()(),n(1682,"tr",13)(1683,"td",14)(1684,"div",15)(1685,"span",16),e(1686," gridSmColumns"),i(1687,"br"),t()()(),n(1688,"td",17)(1689,"code",40),e(1690,"number"),t()(),n(1691,"td",20)(1692,"em")(1693,"strong"),e(1694,"(opcional)"),t()(),n(1695,"p"),e(1696,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(1697,"p"),e(1698,"Deve ser usado o sistema de "),n(1699,"strong"),e(1700,"grid"),t(),e(1701," do PO (1 ... 12 colunas)."),t(),n(1702,"blockquote")(1703,"p"),e(1704,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1705,"code"),e(1706,"gridColumns"),t(),e(1707,"."),t()()()(),n(1708,"tr",13)(1709,"td",14)(1710,"div",15)(1711,"span",16),e(1712," gridSmPull"),i(1713,"br"),t()()(),n(1714,"td",17)(1715,"code",40),e(1716,"number"),t()(),n(1717,"td",20)(1718,"em")(1719,"strong"),e(1720,"(opcional)"),t()(),n(1721,"p"),e(1722,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),n(1723,"p"),e(1724,"Deve ser usado o sistema de "),n(1725,"strong"),e(1726,"grid"),t(),e(1727," do PO (1 ... 11 colunas)."),t(),n(1728,"blockquote")(1729,"p"),e(1730,"Esta propriedade n\xE3o funciona com a propriedade "),n(1731,"code"),e(1732,"gridColumns"),t(),e(1733,". Deve-se especificar o tamanho da tela."),t()()()(),n(1734,"tr",13)(1735,"td",14)(1736,"div",15)(1737,"span",16),e(1738," gridXlColumns"),i(1739,"br"),t()()(),n(1740,"td",17)(1741,"code",40),e(1742,"number"),t()(),n(1743,"td",20)(1744,"em")(1745,"strong"),e(1746,"(opcional)"),t()(),n(1747,"p"),e(1748,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(1749,"p"),e(1750,"Deve ser usado o sistema de "),n(1751,"strong"),e(1752,"grid"),t(),e(1753," do PO (1 ... 12 colunas)."),t(),n(1754,"blockquote")(1755,"p"),e(1756,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1757,"code"),e(1758,"gridColumns"),t(),e(1759,"."),t()()()(),n(1760,"tr",13)(1761,"td",14)(1762,"div",15)(1763,"span",16),e(1764," gridXlPull"),i(1765,"br"),t()()(),n(1766,"td",17)(1767,"code",40),e(1768,"number"),t()(),n(1769,"td",20)(1770,"em")(1771,"strong"),e(1772,"(opcional)"),t()(),n(1773,"p"),e(1774,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),n(1775,"p"),e(1776,"Deve ser usado o sistema de "),n(1777,"strong"),e(1778,"grid"),t(),e(1779," do PO (1 ... 11 colunas)."),t(),n(1780,"blockquote")(1781,"p"),e(1782,"Esta propriedade n\xE3o funciona com a propriedade "),n(1783,"code"),e(1784,"gridColumns"),t(),e(1785,". Deve-se especificar o tamanho da tela."),t()()()(),n(1786,"tr",13)(1787,"td",14)(1788,"div",15)(1789,"span",16),e(1790," headers"),i(1791,"br"),t()()(),n(1792,"td",17)(1793,"code",47),e(1794,"{ [name: string]: string "),t(),n(1795,"code",48),e(1796,` Array<string>;
}`),t()(),n(1797,"td",20)(1798,"em")(1799,"strong"),e(1800,"(opcional)"),t()(),n(1801,"p"),e(1802,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),n(1803,"p")(1804,"strong"),e(1805,"Componente compat\xEDvel"),t(),e(1806,": "),n(1807,"code"),e(1808,"po-upload"),t()()()(),n(1809,"tr",13)(1810,"td",14)(1811,"div",15)(1812,"span",16),e(1813," help"),i(1814,"br"),t()()(),n(1815,"td",17)(1816,"code",18),e(1817,"string"),t()(),n(1818,"td",20)(1819,"em")(1820,"strong"),e(1821,"(opcional)"),t()(),n(1822,"p"),e(1823,"Texto de ajuda."),t()()(),n(1824,"tr",13)(1825,"td",14)(1826,"div",15)(1827,"span",16),e(1828," hideLabelStatus"),i(1829,"br"),t()()(),n(1830,"td",17)(1831,"code",27),e(1832,"boolean"),t()(),n(1833,"td",20)(1834,"em")(1835,"strong"),e(1836,"(opcional)"),t()(),n(1837,"p"),e(1838,"Indica se o status do "),n(1839,"code"),e(1840,"model"),t(),e(1841," ser\xE1 escondido visualmente ao lado do switch"),t()()(),n(1842,"tr",13)(1843,"td",14)(1844,"div",15)(1845,"span",16),e(1846," hidePasswordPeek"),i(1847,"br"),t()()(),n(1848,"td",17)(1849,"code",27),e(1850,"boolean"),t()(),n(1851,"td",20)(1852,"em")(1853,"strong"),e(1854,"(opcional)"),t()(),n(1855,"p"),e(1856,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),n(1857,"code"),e(1858,"po-password"),t(),e(1859,"."),t()()(),n(1860,"tr",13)(1861,"td",14)(1862,"div",15)(1863,"span",16),e(1864," hideRestrictionsInfo"),i(1865,"br"),t()()(),n(1866,"td",17)(1867,"code",27),e(1868,"boolean"),t()(),n(1869,"td",20)(1870,"em")(1871,"strong"),e(1872,"(opcional)"),t()(),n(1873,"p"),e(1874,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),n(1875,"p")(1876,"strong"),e(1877,"Componente compat\xEDvel"),t(),e(1878,": "),n(1879,"code"),e(1880,"po-upload"),t()()()(),n(1881,"tr",13)(1882,"td",14)(1883,"div",15)(1884,"span",16),e(1885," hideSearch"),i(1886,"br"),t()()(),n(1887,"td",17)(1888,"code",27),e(1889,"boolean"),t()(),n(1890,"td",20)(1891,"em")(1892,"strong"),e(1893,"(opcional)"),t()(),n(1894,"p"),e(1895,"Esconde o campo de pesquisa existente dentro do dropdown do "),n(1896,"code"),e(1897,"po-multiselect"),t(),e(1898,"."),t()()(),n(1899,"tr",13)(1900,"td",14)(1901,"div",15)(1902,"span",16),e(1903," hideSelectAll"),i(1904,"br"),t()()(),n(1905,"td",17)(1906,"code",27),e(1907,"boolean"),t()(),n(1908,"td",20)(1909,"em")(1910,"strong"),e(1911,"(opcional)"),t()(),n(1912,"p"),e(1913,'Indica se o campo "Selecionar todos" do '),n(1914,"code"),e(1915,"po-multiselect"),t(),e(1916," ser\xE1 escondido."),t()()(),n(1917,"tr",13)(1918,"td",14)(1919,"div",15)(1920,"span",16),e(1921," hideSelectButton"),i(1922,"br"),t()()(),n(1923,"td",17)(1924,"code",27),e(1925,"boolean"),t()(),n(1926,"td",20)(1927,"em")(1928,"strong"),e(1929,"(opcional)"),t()(),n(1930,"p"),e(1931,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(1932,"blockquote")(1933,"p"),e(1934,"Caso o valor definido seja "),n(1935,"code"),e(1936,"true"),t(),e(1937,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(1938,"code"),e(1939,"selectFiles()"),t(),e(1940," para sele\xE7\xE3o de arquivos."),t()(),n(1941,"p")(1942,"strong"),e(1943,"Componente compat\xEDvel"),t(),e(1944,": "),n(1945,"code"),e(1946,"po-upload"),t()()()(),n(1947,"tr",13)(1948,"td",14)(1949,"div",15)(1950,"span",16),e(1951," hideSendButton"),i(1952,"br"),t()()(),n(1953,"td",17)(1954,"code",27),e(1955,"boolean"),t()(),n(1956,"td",20)(1957,"em")(1958,"strong"),e(1959,"(opcional)"),t()(),n(1960,"p"),e(1961,"Omite o bot\xE3o de envio de arquivos."),t(),n(1962,"blockquote")(1963,"p"),e(1964,"Caso o valor definido seja "),n(1965,"code"),e(1966,"true"),t(),e(1967,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(1968,"code"),e(1969,"sendFiles()"),t(),e(1970," para envio do(s) arquivo(s) selecionado(s)."),t()(),n(1971,"p")(1972,"strong"),e(1973,"Componente compat\xEDvel"),t(),e(1974,": "),n(1975,"code"),e(1976,"po-upload"),t()()()(),n(1977,"tr",13)(1978,"td",14)(1979,"div",15)(1980,"span",16),e(1981," icon"),i(1982,"br"),t()()(),n(1983,"td",17)(1984,"code",18),e(1985,"string "),t(),n(1986,"code",49),e(1987," TemplateRef<void>"),t()(),n(1988,"td",20)(1989,"em")(1990,"strong"),e(1991,"(opcional)"),t()(),n(1992,"p"),e(1993,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(1994,"blockquote")(1995,"p"),e(1996,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),n(1997,"ul")(1998,"li"),e(1999,"Input;"),t(),n(2e3,"li"),e(2001,"Number;"),t(),n(2002,"li"),e(2003,"Decimal;"),t(),n(2004,"li"),e(2005,"Combo;"),t(),n(2006,"li"),e(2007,"Password;"),t()(),n(2008,"blockquote")(2009,"p"),e(2010,"Veja a disponibilidade de \xEDcones em "),n(2011,"a",50),e(2012,"biblioteca de \xEDcones"),t(),e(2013,"."),t()()()(),n(2014,"tr",13)(2015,"td",14)(2016,"div",15)(2017,"span",16),e(2018," infiniteScroll"),i(2019,"br"),t()()(),n(2020,"td",17)(2021,"code",27),e(2022,"boolean"),t()(),n(2023,"td",20)(2024,"em")(2025,"strong"),e(2026,"(opcional)"),t()(),n(2027,"p"),e(2028,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),n(2029,"p")(2030,"strong"),e(2031,"Componentes compat\xEDveis:"),t(),n(2032,"code"),e(2033,"po-combo"),t(),e(2034,", "),n(2035,"code"),e(2036,"po-lookup"),t(),e(2037,"."),t()()(),n(2038,"tr",13)(2039,"td",14)(2040,"div",15)(2041,"span",16),e(2042," infiniteScrollDistance"),i(2043,"br"),t()()(),n(2044,"td",17)(2045,"code",40),e(2046,"number"),t()(),n(2047,"td",20)(2048,"em")(2049,"strong"),e(2050,"(opcional)"),t()(),n(2051,"p"),e(2052,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),n(2053,"strong"),e(2054,"Exemplos"),t(),n(2055,"code"),e(2056,"{ infiniteScrollDistance: 80 }"),t(),e(2057,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),n(2058,"p")(2059,"strong"),e(2060,"Componente compat\xEDvel:"),t(),n(2061,"code"),e(2062,"po-combo"),t(),e(2063,"."),t()()(),n(2064,"tr",13)(2065,"td",14)(2066,"div",15)(2067,"span",16),e(2068," isoFormat"),i(2069,"br"),t()()(),n(2070,"td",17)(2071,"code",51),e(2072,"PoDatepickerIsoFormat"),t()(),n(2073,"td",20)(2074,"em")(2075,"strong"),e(2076,"(opcional)"),t()(),n(2077,"p"),e(2078,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),n(2079,"blockquote")(2080,"p"),e(2081,"Veja os valores v\xE1lidos no "),n(2082,"code"),e(2083,"enumPoDatepickerIsoFormat"),t(),e(2084,"."),t()(),n(2085,"p")(2086,"strong"),e(2087,"Componente compat\xEDvel:"),t(),e(2088," po-datepicker"),t()()(),n(2089,"tr",13)(2090,"td",14)(2091,"div",15)(2092,"span",16),e(2093," key"),i(2094,"br"),t()()(),n(2095,"td",17)(2096,"code",27),e(2097,"boolean"),t()(),n(2098,"td",20)(2099,"em")(2100,"strong"),e(2101,"(opcional)"),t()(),n(2102,"p"),e(2103,"Identificador"),t()()(),n(2104,"tr",13)(2105,"td",14)(2106,"div",15)(2107,"span",16),e(2108," label"),i(2109,"br"),t()()(),n(2110,"td",17)(2111,"code",18),e(2112,"string"),t()(),n(2113,"td",20)(2114,"em")(2115,"strong"),e(2116,"(opcional)"),t()(),n(2117,"p"),e(2118,"R\xF3tulo do campo exibido."),t(),n(2119,"p"),e(2120,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),n(2121,"code"),e(2122,"label"),t(),e(2123," o valor da propriedade "),n(2124,"code"),e(2125,"property"),t(),e(2126," com a primeira letra em mai\xFAsculo."),t()()(),n(2127,"tr",13)(2128,"td",14)(2129,"div",15)(2130,"span",16),e(2131," labelPosition"),i(2132,"br"),t()()(),n(2133,"td",17)(2134,"code",52),e(2135,"PoSwitchLabelPosition"),t()(),n(2136,"td",20)(2137,"em")(2138,"strong"),e(2139,"(opcional)"),t()(),n(2140,"p"),e(2141,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),n(2142,"blockquote")(2143,"p"),e(2144,"Por padr\xE3o exibe \xE0 direita."),t()()()(),n(2145,"tr",13)(2146,"td",14)(2147,"div",15)(2148,"span",16),e(2149," literals"),i(2150,"br"),t()()(),n(2151,"td",17)(2152,"code",53),e(2153,"PoLookupLiterals "),t(),n(2154,"code",54),e(2155," PoMultiselectLiterals "),t(),n(2156,"code",55),e(2157," PoComboLiterals "),t(),n(2158,"code",56),e(2159," PoDatepickerRangeLiterals "),t(),n(2160,"code",57),e(2161," PoUploadLiterals"),t()(),n(2162,"td",20)(2163,"em")(2164,"strong"),e(2165,"(opcional)"),t()(),n(2166,"p"),e(2167,"Objeto com as literais usadas para os seguintes componentes: "),n(2168,"code"),e(2169,"po-lookup"),t(),e(2170,", "),n(2171,"code"),e(2172,"po-multiselect"),t(),e(2173,", "),n(2174,"code"),e(2175,"po-combo"),t(),e(2176," e "),n(2177,"code"),e(2178,"po-datepicker-range"),t(),e(2179,"."),t(),n(2180,"blockquote")(2181,"p"),e(2182,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),n(2183,"p")(2184,"strong"),e(2185,"Componentes compat\xEDveis:"),t(),n(2186,"code"),e(2187,"po-lookup"),t(),e(2188,", "),n(2189,"code"),e(2190,"po-multiselect"),t(),e(2191,", "),n(2192,"code"),e(2193,"po-combo"),t(),e(2194,", "),n(2195,"code"),e(2196,"po-datepicker-range"),t()()()(),n(2197,"tr",13)(2198,"td",14)(2199,"div",15)(2200,"span",16),e(2201," locale"),i(2202,"br"),t()()(),n(2203,"td",17)(2204,"code",18),e(2205,"string"),t()(),n(2206,"td",20)(2207,"em")(2208,"strong"),e(2209,"(opcional)"),t()(),n(2210,"p"),e(2211,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),n(2212,"a",58)(2213,"code"),e(2214,"I18n"),t()()(),n(2215,"p"),e(2216,`Exemplo de utiliza\xE7\xE3o:
`),n(2217,"code"),e(2218,`[ { property: 'birthday', locale: 'en', type: 'date' }, { property: 'wage', locale: 'ru', type: 'currency' }
];`),t()(),n(2219,"blockquote")(2220,"p"),e(2221,"Para ver quais linguagens suportadas acesse "),n(2222,"a",58)(2223,"code"),e(2224,"I18n"),t()(),e(2225,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),n(2226,"tr",13)(2227,"td",14)(2228,"div",15)(2229,"span",16),e(2230," mask"),i(2231,"br"),t()()(),n(2232,"td",17)(2233,"code",18),e(2234,"string"),t()(),n(2235,"td",20)(2236,"em")(2237,"strong"),e(2238,"(opcional)"),t()(),n(2239,"p"),e(2240,"M\xE1scara para o campo."),t(),n(2241,"p")(2242,"strong"),e(2243,"Componentes compat\xEDveis:"),t(),n(2244,"code"),e(2245,"po-input"),t(),e(2246,"."),t(),n(2247,"blockquote")(2248,"p"),e(2249,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(2250,"code"),e(2251,"type: time"),t(),e(2252,"."),t()()()(),n(2253,"tr",13)(2254,"td",14)(2255,"div",15)(2256,"span",16),e(2257," maskFormatModel"),i(2258,"br"),t()()(),n(2259,"td",17)(2260,"code",27),e(2261,"boolean"),t()(),n(2262,"td",20)(2263,"em")(2264,"strong"),e(2265,"(opcional)"),t()(),n(2266,"p"),e(2267,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),n(2268,"code"),e(2269,"false"),t(),e(2270,"."),t(),n(2271,"p")(2272,"strong"),e(2273,"Componentes compat\xEDveis:"),t(),n(2274,"code"),e(2275,"po-input"),t(),e(2276,"."),t(),n(2277,"blockquote")(2278,"p"),e(2279,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(2280,"code"),e(2281,"type: time"),t(),e(2282,"."),t()()()(),n(2283,"tr",13)(2284,"td",14)(2285,"div",15)(2286,"span",16),e(2287," maxLength"),i(2288,"br"),t()()(),n(2289,"td",17)(2290,"code",40),e(2291,"number"),t()(),n(2292,"td",20)(2293,"em")(2294,"strong"),e(2295,"(opcional)"),t()(),n(2296,"p"),e(2297,"Tamanho m\xE1ximo de caracteres."),t(),n(2298,"p")(2299,"strong"),e(2300,"Componentes compat\xEDveis:"),t(),n(2301,"code"),e(2302,"po-input"),t(),e(2303,", "),n(2304,"code"),e(2305,"po-number"),t(),e(2306,", "),n(2307,"code"),e(2308,"po-decimal"),t(),e(2309,", "),n(2310,"code"),e(2311,"po-textarea"),t(),e(2312,", "),n(2313,"code"),e(2314,"po-password"),t(),e(2315,"."),t()()(),n(2316,"tr",13)(2317,"td",14)(2318,"div",15)(2319,"span",16),e(2320," maxValue"),i(2321,"br"),t()()(),n(2322,"td",17)(2323,"code",18),e(2324,"string "),t(),n(2325,"code",40),e(2326," number"),t()(),n(2327,"td",20)(2328,"em")(2329,"strong"),e(2330,"(opcional)"),t()(),n(2331,"p"),e(2332,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(2333,"em"),e(2334,"number"),t(),e(2335,", "),n(2336,"em"),e(2337,"date"),t(),e(2338," ou "),n(2339,"em"),e(2340,"dateTime"),t(),e(2341,"."),t(),n(2342,"p")(2343,"strong"),e(2344,"Componentes compat\xEDveis:"),t(),n(2345,"code"),e(2346,"po-datepicker"),t(),e(2347,", "),n(2348,"code"),e(2349,"po-datepicker-range"),t(),e(2350,", "),n(2351,"code"),e(2352,"po-number"),t(),e(2353,", "),n(2354,"code"),e(2355,"po-decimal"),t()()()(),n(2356,"tr",13)(2357,"td",14)(2358,"div",15)(2359,"span",16),e(2360," minLength"),i(2361,"br"),t()()(),n(2362,"td",17)(2363,"code",40),e(2364,"number"),t()(),n(2365,"td",20)(2366,"em")(2367,"strong"),e(2368,"(opcional)"),t()(),n(2369,"p"),e(2370,"Tamanho m\xEDnimo de caracteres."),t(),n(2371,"p")(2372,"strong"),e(2373,"Componentes compat\xEDveis:"),t(),n(2374,"code"),e(2375,"po-input"),t(),e(2376,", "),n(2377,"code"),e(2378,"po-number"),t(),e(2379,", "),n(2380,"code"),e(2381,"po-decimal"),t(),e(2382,", "),n(2383,"code"),e(2384,"po-textarea"),t(),e(2385,", "),n(2386,"code"),e(2387,"po-password"),t(),e(2388,"."),t()()(),n(2389,"tr",13)(2390,"td",14)(2391,"div",15)(2392,"span",16),e(2393," minValue"),i(2394,"br"),t()()(),n(2395,"td",17)(2396,"code",18),e(2397,"string "),t(),n(2398,"code",40),e(2399," number"),t()(),n(2400,"td",20)(2401,"em")(2402,"strong"),e(2403,"(opcional)"),t()(),n(2404,"p"),e(2405,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(2406,"em"),e(2407,"number"),t(),e(2408,", "),n(2409,"em"),e(2410,"date"),t(),e(2411," ou "),n(2412,"em"),e(2413,"dateTime"),t(),e(2414,"."),t(),n(2415,"p")(2416,"strong"),e(2417,"Componentes compat\xEDveis:"),t(),n(2418,"code"),e(2419,"po-datepicker"),t(),e(2420,", "),n(2421,"code"),e(2422,"po-datepicker-range"),t(),e(2423,", "),n(2424,"code"),e(2425,"po-number"),t(),e(2426,", "),n(2427,"code"),e(2428,"po-decimal"),t()()()(),n(2429,"tr",13)(2430,"td",14)(2431,"div",15)(2432,"span",16),e(2433," multiple"),i(2434,"br"),t()()(),n(2435,"td",17)(2436,"code",27),e(2437,"boolean"),t()(),n(2438,"td",20)(2439,"em")(2440,"strong"),e(2441,"(opcional)"),t()(),n(2442,"p"),e(2443,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),n(2444,"p")(2445,"strong"),e(2446,"Componente compat\xEDvel:"),t(),n(2447,"code"),e(2448,"po-lookup"),t(),e(2449,", "),n(2450,"code"),e(2451,"po-upload"),t()()()(),n(2452,"tr",13)(2453,"td",14)(2454,"div",15)(2455,"span",16),e(2456," noAutocomplete"),i(2457,"br"),t()()(),n(2458,"td",17)(2459,"code",27),e(2460,"boolean"),t()(),n(2461,"td",20)(2462,"em")(2463,"strong"),e(2464,"(opcional)"),t()(),n(2465,"p"),e(2466,"Define a propriedade nativa "),n(2467,"code"),e(2468,"autocomplete"),t(),e(2469," do campo como off."),t(),n(2470,"p")(2471,"strong"),e(2472,"Componentes compat\xEDveis:"),t(),n(2473,"code"),e(2474,"po-datepicker"),t(),e(2475,", "),n(2476,"code"),e(2477,"po-datepicker-range"),t(),e(2478,", "),n(2479,"code"),e(2480,"po-input"),t(),e(2481,", "),n(2482,"code"),e(2483,"po-number"),t(),e(2484,", "),n(2485,"code"),e(2486,"po-decimal"),t(),e(2487,", "),n(2488,"code"),e(2489,"po-lookup"),t(),e(2490,", "),n(2491,"code"),e(2492,"po-password"),t()()()(),n(2493,"tr",13)(2494,"td",14)(2495,"div",15)(2496,"span",16),e(2497," offsetColumns"),i(2498,"br"),t()()(),n(2499,"td",17)(2500,"code",40),e(2501,"number"),t()(),n(2502,"td",20)(2503,"em")(2504,"strong"),e(2505,"(opcional)"),t()(),n(2506,"p"),e(2507,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),n(2508,"p"),e(2509,"Deve ser usado o sistema de "),n(2510,"strong"),e(2511,"grid"),t(),e(2512," do PO (1 ... 12 colunas)."),t(),n(2513,"blockquote")(2514,"p"),e(2515,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(2516,"tr",13)(2517,"td",14)(2518,"div",15)(2519,"span",16),e(2520," offsetLgColumns"),i(2521,"br"),t()()(),n(2522,"td",17)(2523,"code",40),e(2524,"number"),t()(),n(2525,"td",20)(2526,"em")(2527,"strong"),e(2528,"(opcional)"),t()(),n(2529,"p"),e(2530,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(2531,"p"),e(2532,"Deve ser usado o sistema de "),n(2533,"strong"),e(2534,"grid"),t(),e(2535," do PO (1 ... 12 colunas)."),t(),n(2536,"blockquote")(2537,"p"),e(2538,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2539,"code"),e(2540,"offsetColumns"),t(),e(2541,"."),t()()()(),n(2542,"tr",13)(2543,"td",14)(2544,"div",15)(2545,"span",16),e(2546," offsetMdColumns"),i(2547,"br"),t()()(),n(2548,"td",17)(2549,"code",40),e(2550,"number"),t()(),n(2551,"td",20)(2552,"em")(2553,"strong"),e(2554,"(opcional)"),t()(),n(2555,"p"),e(2556,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(2557,"p"),e(2558,"Deve ser usado o sistema de "),n(2559,"strong"),e(2560,"grid"),t(),e(2561," do PO (1 ... 12 colunas)."),t(),n(2562,"blockquote")(2563,"p"),e(2564,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2565,"code"),e(2566,"offsetColumns"),t(),e(2567,"."),t()()()(),n(2568,"tr",13)(2569,"td",14)(2570,"div",15)(2571,"span",16),e(2572," offsetSmColumns"),i(2573,"br"),t()()(),n(2574,"td",17)(2575,"code",40),e(2576,"number"),t()(),n(2577,"td",20)(2578,"em")(2579,"strong"),e(2580,"(opcional)"),t()(),n(2581,"p"),e(2582,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(2583,"p"),e(2584,"Deve ser usado o sistema de "),n(2585,"strong"),e(2586,"grid"),t(),e(2587," do PO (1 ... 12 colunas)."),t(),n(2588,"blockquote")(2589,"p"),e(2590,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2591,"code"),e(2592,"offsetColumns"),t(),e(2593,"."),t()()()(),n(2594,"tr",13)(2595,"td",14)(2596,"div",15)(2597,"span",16),e(2598," offsetXlColumns"),i(2599,"br"),t()()(),n(2600,"td",17)(2601,"code",40),e(2602,"number"),t()(),n(2603,"td",20)(2604,"em")(2605,"strong"),e(2606,"(opcional)"),t()(),n(2607,"p"),e(2608,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(2609,"p"),e(2610,"Deve ser usado o sistema de "),n(2611,"strong"),e(2612,"grid"),t(),e(2613," do PO (1 ... 12 colunas)."),t(),n(2614,"blockquote")(2615,"p"),e(2616,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2617,"code"),e(2618,"offsetColumns"),t(),e(2619,"."),t()()()(),n(2620,"tr",13)(2621,"td",14)(2622,"div",15)(2623,"span",16),e(2624," onError"),i(2625,"br"),t()()(),n(2626,"td",17)(2627,"code",28),e(2628,"Function"),t()(),n(2629,"td",20)(2630,"em")(2631,"strong"),e(2632,"(opcional)"),t()(),n(2633,"p"),e(2634,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(2635,"blockquote")(2636,"p"),e(2637,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(2638,"code"),e(2639,"HttpErrorResponse"),t(),e(2640,"."),t()(),n(2641,"p")(2642,"strong"),e(2643,"Componente compat\xEDvel"),t(),e(2644,": "),n(2645,"code"),e(2646,"po-upload"),t()()()(),n(2647,"tr",13)(2648,"td",14)(2649,"div",15)(2650,"span",16),e(2651," onSuccess"),i(2652,"br"),t()()(),n(2653,"td",17)(2654,"code",28),e(2655,"Function"),t()(),n(2656,"td",20)(2657,"em")(2658,"strong"),e(2659,"(opcional)"),t()(),n(2660,"p"),e(2661,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(2662,"blockquote")(2663,"p"),e(2664,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(2665,"code"),e(2666,"HttpResponse"),t(),e(2667,"."),t()(),n(2668,"p")(2669,"strong"),e(2670,"Componente compat\xEDvel"),t(),e(2671,": "),n(2672,"code"),e(2673,"po-upload"),t()()()(),n(2674,"tr",13)(2675,"td",14)(2676,"div",15)(2677,"span",16),e(2678," onUpload"),i(2679,"br"),t()()(),n(2680,"td",17)(2681,"code",28),e(2682,"Function"),t()(),n(2683,"td",20)(2684,"em")(2685,"strong"),e(2686,"(opcional)"),t()(),n(2687,"p"),e(2688,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(2689,"pre")(2690,"code"),e(2691,"event.data = {id: 'id do usu\xE1rio'};"),t()(),n(2692,"p")(2693,"strong"),e(2694,"Componente compat\xEDvel"),t(),e(2695,": "),n(2696,"code"),e(2697,"po-upload"),t()()()(),n(2698,"tr",13)(2699,"td",14)(2700,"div",15)(2701,"span",16),e(2702," optional"),i(2703,"br"),t()()(),n(2704,"td",17)(2705,"code",27),e(2706,"boolean"),t()(),n(2707,"td",20)(2708,"em")(2709,"strong"),e(2710,"(opcional)"),t()(),n(2711,"p"),e(2712,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(2713,"blockquote")(2714,"p"),e(2715,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),n(2716,"ul")(2717,"li"),e(2718,"O campo for "),n(2719,"code"),e(2720,"required"),t(),e(2721,", ou;"),t(),n(2722,"li"),e(2723,"N\xE3o possuir "),n(2724,"code"),e(2725,"help"),t(),e(2726," e "),n(2727,"code"),e(2728,"label"),t(),e(2729,"."),t()()()(),n(2730,"tr",13)(2731,"td",14)(2732,"div",15)(2733,"span",16),e(2734," options"),i(2735,"br"),t()()(),n(2736,"td",17)(2737,"code",31),e(2738,"Array<string> "),t(),n(2739,"code",59),e(2740," Array<PoSelectOption> "),t(),n(2741,"code",60),e(2742," Array<PoMultiselectOption> "),t(),n(2743,"code",61),e(2744," Array<PoCheckboxGroupOption> "),t(),n(2745,"code",62),e(2746," Array<any>"),t()(),n(2747,"td",20)(2748,"em")(2749,"strong"),e(2750,"(opcional)"),t()(),n(2751,"p"),e(2752,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),n(2753,"p")(2754,"strong"),e(2755,"Componentes compat\xEDveis:"),t(),n(2756,"code"),e(2757,"po-select"),t(),e(2758,", "),n(2759,"code"),e(2760,"po-radio-group"),t(),e(2761,", "),n(2762,"code"),e(2763,"po-checkbox-group"),t(),e(2764,", "),n(2765,"code"),e(2766,"po-multiselect"),t(),e(2767,"."),t()()(),n(2768,"tr",13)(2769,"td",14)(2770,"div",15)(2771,"span",16),e(2772," optionsMulti"),i(2773,"br"),t()()(),n(2774,"td",17)(2775,"code",27),e(2776,"boolean"),t()(),n(2777,"td",20)(2778,"em")(2779,"strong"),e(2780,"(opcional)"),t()(),n(2781,"p"),e(2782,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),n(2783,"tr",13)(2784,"td",14)(2785,"div",15)(2786,"span",16),e(2787," optionsService"),i(2788,"br"),t()()(),n(2789,"td",17)(2790,"code",18),e(2791,"string "),t(),n(2792,"code",63),e(2793," PoComboFilter "),t(),n(2794,"code",64),e(2795," PoMultiselectFilter"),t()(),n(2796,"td",20)(2797,"em")(2798,"strong"),e(2799,"(opcional)"),t()(),n(2800,"p"),e(2801,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),n(2802,"strong"),e(2803,"Importante"),t()(),n(2804,"blockquote")(2805,"p"),e(2806,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),n(2807,"a",65),e(2808,"guia de API do PO UI"),t(),e(2809,"."),t()()()(),n(2810,"tr",13)(2811,"td",14)(2812,"div",15)(2813,"span",16),e(2814," order"),i(2815,"br"),t()()(),n(2816,"td",17)(2817,"code",40),e(2818,"number"),t()(),n(2819,"td",20)(2820,"em")(2821,"strong"),e(2822,"(opcional)"),t()(),n(2823,"p"),e(2824,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),n(2825,"p"),e(2826,"Exemplo de utiliza\xE7\xE3o:"),t(),n(2827,"p")(2828,"code"),e(2829,`[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 }
];`),t()(),n(2830,"p"),e(2831,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),n(2832,"code"),e(2833,`[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' }
];`),t()(),n(2834,"p"),e(2835,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),n(2836,"p"),e(2837,"Campos sem "),n(2838,"code"),e(2839,"order"),t(),e(2840,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),n(2841,"tr",13)(2842,"td",14)(2843,"div",15)(2844,"span",16),e(2845," params"),i(2846,"br"),t()()(),n(2847,"td",17)(2848,"code",32),e(2849,"any"),t()(),n(2850,"td",20)(2851,"em")(2852,"strong"),e(2853,"(opcional)"),t()(),n(2854,"p"),e(2855,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),n(2856,"code"),e(2857,"po-lookup"),t(),e(2858,` e
`),n(2859,"code"),e(2860,"po-combo"),t(),e(2861,"."),t(),n(2862,"p"),e(2863,"Por exemplo, para o par\xE2metro "),n(2864,"code"),e(2865,"{ age: 23 }"),t(),e(2866," a URL da requisi\xE7\xE3o ficaria:"),t(),n(2867,"p")(2868,"code"),e(2869,"url + ?age=23&filter=Peter"),t()()()(),n(2870,"tr",13)(2871,"td",14)(2872,"div",15)(2873,"span",16),e(2874," pattern"),i(2875,"br"),t()()(),n(2876,"td",17)(2877,"code",18),e(2878,"string"),t()(),n(2879,"td",20)(2880,"em")(2881,"strong"),e(2882,"(opcional)"),t()(),n(2883,"p"),e(2884,"Regex para valida\xE7\xE3o do campo."),t(),n(2885,"p")(2886,"strong"),e(2887,"Componentes compat\xEDveis:"),t(),n(2888,"code"),e(2889,"po-input"),t(),e(2890,", "),n(2891,"code"),e(2892,"po-password"),t(),e(2893,"."),t()()(),n(2894,"tr",13)(2895,"td",14)(2896,"div",15)(2897,"span",16),e(2898," placeholder"),i(2899,"br"),t()()(),n(2900,"td",17)(2901,"code",18),e(2902,"string"),t()(),n(2903,"td",20)(2904,"em")(2905,"strong"),e(2906,"(opcional)"),t()(),n(2907,"p"),e(2908,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),n(2909,"tr",13)(2910,"td",14)(2911,"div",15)(2912,"span",16),e(2913," placeholderSearch"),i(2914,"br"),t()()(),n(2915,"td",17)(2916,"code",18),e(2917,"string"),t()(),n(2918,"td",20)(2919,"em")(2920,"strong"),e(2921,"(opcional)"),t()(),n(2922,"p"),e(2923,"Placeholder do campo de pesquisa do "),n(2924,"code"),e(2925,"po-multiselect"),t(),e(2926,"."),t(),n(2927,"blockquote")(2928,"p"),e(2929,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),n(2930,"tr",13)(2931,"td",14)(2932,"div",15)(2933,"span",16),e(2934," property"),i(2935,"br"),t()()(),n(2936,"td",17)(2937,"code",18),e(2938,"string"),t()(),n(2939,"td",20)(2940,"p"),e(2941,"Nome de refer\xEAncia do campo."),t()()(),n(2942,"tr",13)(2943,"td",14)(2944,"div",15)(2945,"span",16),e(2946," range"),i(2947,"br"),t()()(),n(2948,"td",17)(2949,"code",27),e(2950,"boolean"),t()(),n(2951,"td",20)(2952,"em")(2953,"strong"),e(2954,"(opcional)"),t()(),n(2955,"p"),e(2956,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),n(2957,"blockquote")(2958,"p"),e(2959,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),n(2960,"tr",13)(2961,"td",14)(2962,"div",15)(2963,"span",16),e(2964," readonly"),i(2965,"br"),t()()(),n(2966,"td",17)(2967,"code",27),e(2968,"boolean"),t()(),n(2969,"td",20)(2970,"em")(2971,"strong"),e(2972,"(opcional)"),t()(),n(2973,"p"),e(2974,"Indica que o campo ser\xE1 somente leitura."),t(),n(2975,"p")(2976,"strong"),e(2977,"Componentes compat\xEDveis:"),t(),n(2978,"code"),e(2979,"po-datepicker"),t(),e(2980,", "),n(2981,"code"),e(2982,"po-datepicker-range"),t(),e(2983,", "),n(2984,"code"),e(2985,"po-input"),t(),e(2986,", "),n(2987,"code"),e(2988,"po-number"),t(),e(2989,", "),n(2990,"code"),e(2991,"po-decimal"),t(),e(2992,", "),n(2993,"code"),e(2994,"po-select"),t(),e(2995,", "),n(2996,"code"),e(2997,"po-textarea"),t(),e(2998,", "),n(2999,"code"),e(3e3,"po-password"),t()()()(),n(3001,"tr",13)(3002,"td",14)(3003,"div",15)(3004,"span",16),e(3005," required"),i(3006,"br"),t()()(),n(3007,"td",17)(3008,"code",27),e(3009,"boolean"),t()(),n(3010,"td",20)(3011,"em")(3012,"strong"),e(3013,"(opcional)"),t()(),n(3014,"p"),e(3015,"Define a obrigatoriedade do campo."),t()()(),n(3016,"tr",13)(3017,"td",14)(3018,"div",15)(3019,"span",16),e(3020," requiredFieldErrorMessage"),i(3021,"br"),t()()(),n(3022,"td",17)(3023,"code",27),e(3024,"boolean"),t()(),n(3025,"td",20)(3026,"em")(3027,"strong"),e(3028,"(opcional)"),t()(),n(3029,"p"),e(3030,"Exibe a mensagem setada na propriedade "),n(3031,"code"),e(3032,"errorMessage"),t(),e(3033," se o campo estiver vazio e for requerido."),t(),n(3034,"blockquote")(3035,"p"),e(3036,"Necess\xE1rio que a propriedade "),n(3037,"code"),e(3038,"required"),t(),e(3039," esteja habilitada."),t()(),n(3040,"p")(3041,"strong"),e(3042,"Componentes compat\xEDveis:"),t(),n(3043,"code"),e(3044,"po-datepicker"),t(),e(3045,", "),n(3046,"code"),e(3047,"po-input"),t(),e(3048,", "),n(3049,"code"),e(3050,"po-number"),t(),e(3051,", "),n(3052,"code"),e(3053,"po-decimal"),t(),e(3054,", "),n(3055,"code"),e(3056,"po-password"),t(),e(3057,"."),t()()(),n(3058,"tr",13)(3059,"td",14)(3060,"div",15)(3061,"span",16),e(3062," restrictions"),i(3063,"br"),t()()(),n(3064,"td",17)(3065,"code",66),e(3066,"PoUploadFileRestrictions"),t()(),n(3067,"td",20)(3068,"em")(3069,"strong"),e(3070,"(opcional)"),t()(),n(3071,"p"),e(3072,"Objeto que segue a defini\xE7\xE3o da interface "),n(3073,"code"),e(3074,"PoUploadFileRestrictions"),t(),e(3075,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),n(3076,"p")(3077,"strong"),e(3078,"Componente compat\xEDvel"),t(),e(3079,": "),n(3080,"code"),e(3081,"po-upload"),t()()()(),n(3082,"tr",13)(3083,"td",14)(3084,"div",15)(3085,"span",16),e(3086," rows"),i(3087,"br"),t()()(),n(3088,"td",17)(3089,"code",40),e(3090,"number"),t()(),n(3091,"td",20)(3092,"em")(3093,"strong"),e(3094,"(opcional)"),t()(),n(3095,"p"),e(3096,"Quantidade de linhas exibidas no "),n(3097,"code"),e(3098,"po-textarea"),t(),e(3099,"."),t()()(),n(3100,"tr",13)(3101,"td",14)(3102,"div",15)(3103,"span",16),e(3104," searchService"),i(3105,"br"),t()()(),n(3106,"td",17)(3107,"code",18),e(3108,"string "),t(),n(3109,"code",67),e(3110," PoLookupFilter"),t()(),n(3111,"td",20)(3112,"em")(3113,"strong"),e(3114,"(opcional)"),t()(),n(3115,"p"),e(3116,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),n(3117,"code"),e(3118,"columns"),t(),e(3119,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),n(3120,"strong"),e(3121,"Importante:"),t()(),n(3122,"blockquote")(3123,"p"),e(3124,"Caso utilizar a propriedade "),n(3125,"code"),e(3126,"optionsService"),t(),e(3127,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),n(3128,"a",65),e(3129,"guia de API do PO UI"),t(),e(3130,"."),t()()()(),n(3131,"tr",13)(3132,"td",14)(3133,"div",15)(3134,"span",16),e(3135," secret"),i(3136,"br"),t()()(),n(3137,"td",17)(3138,"code",27),e(3139,"boolean"),t()(),n(3140,"td",20)(3141,"em")(3142,"strong"),e(3143,"(opcional)"),t()(),n(3144,"p"),e(3145,"Esconde a informa\xE7\xE3o estilo "),n(3146,"em"),e(3147,"password"),t(),e(3148,", pode ser utilizado quando o tipo de dado for "),n(3149,"em"),e(3150,"string"),t(),e(3151,"."),t()()(),n(3152,"tr",13)(3153,"td",14)(3154,"div",15)(3155,"span",16),e(3156," showRequired"),i(3157,"br"),t()()(),n(3158,"td",17)(3159,"code",27),e(3160,"boolean"),t()(),n(3161,"td",20)(3162,"em")(3163,"strong"),e(3164,"(opcional)"),t()(),n(3165,"p"),e(3166,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(3167,"blockquote")(3168,"p"),e(3169,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(3170,"ul")(3171,"li"),e(3172,"N\xE3o possuir "),n(3173,"code"),e(3174,"p-help"),t(),e(3175," e/ou "),n(3176,"code"),e(3177,"p-label"),t(),e(3178,"."),t()()()(),n(3179,"tr",13)(3180,"td",14)(3181,"div",15)(3182,"span",16),e(3183," sort"),i(3184,"br"),t()()(),n(3185,"td",17)(3186,"code",27),e(3187,"boolean"),t()(),n(3188,"td",20)(3189,"em")(3190,"strong"),e(3191,"(opcional)"),t()(),n(3192,"p"),e(3193,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),n(3194,"p")(3195,"strong"),e(3196,"Componentes compat\xEDveis:"),t(),n(3197,"code"),e(3198,"po-combo"),t(),e(3199,", po-multiselect"),t()()(),n(3200,"tr",13)(3201,"td",14)(3202,"div",15)(3203,"span",16),e(3204," step"),i(3205,"br"),t()()(),n(3206,"td",17)(3207,"code",40),e(3208,"number"),t()(),n(3209,"td",20)(3210,"em")(3211,"strong"),e(3212,"(opcional)"),t()(),n(3213,"p"),e(3214,"Intervalo utilizado no "),n(3215,"code"),e(3216,"po-number"),t(),e(3217,"."),t()()(),n(3218,"tr",13)(3219,"td",14)(3220,"div",15)(3221,"span",16),e(3222," thousandMaxlength"),i(3223,"br"),t()()(),n(3224,"td",17)(3225,"code",40),e(3226,"number"),t()(),n(3227,"td",20)(3228,"em")(3229,"strong"),e(3230,"(opcional)"),t()(),n(3231,"p"),e(3232,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),n(3233,"blockquote")(3234,"p"),e(3235,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(3236,"code"),e(3237,"type"),t(),e(3238," for "),n(3239,"em"),e(3240,"currency"),t(),e(3241," ou "),n(3242,"em"),e(3243,"decimal"),t(),e(3244,"."),t()()()(),n(3245,"tr",13)(3246,"td",14)(3247,"div",15)(3248,"span",16),e(3249," type"),i(3250,"br"),t()()(),n(3251,"td",17)(3252,"code",18),e(3253,"string "),t(),n(3254,"code",68),e(3255," PoDynamicFieldType"),t()(),n(3256,"td",20)(3257,"em")(3258,"strong"),e(3259,"(opcional)"),t()(),n(3260,"p"),e(3261,"Tipo do valor campo."),t(),n(3262,"p"),e(3263,"Valores v\xE1lidos:"),t(),n(3264,"ul")(3265,"li")(3266,"code"),e(3267,"boolean"),t(),e(3268,": Valores "),n(3269,"em"),e(3270,"booleanos"),t(),e(3271,"."),t(),n(3272,"li")(3273,"code"),e(3274,"currency"),t(),e(3275,": Valores monet\xE1rios."),t(),n(3276,"li")(3277,"code"),e(3278,"decimal"),t(),e(3279,": Valores decimais."),t(),n(3280,"li")(3281,"code"),e(3282,"date"),t(),e(3283,": Valores de datas."),n(3284,"ul")(3285,"li"),e(3286,"Aceita os tipos "),n(3287,"strong"),e(3288,"string"),t(),e(3289," e "),n(3290,"strong"),e(3291,"Date"),t(),e(3292,` padr\xE3o do Javascript,
por exemplo: `),n(3293,"code"),e(3294,"'2017-11-28'"),t(),e(3295," ou "),n(3296,"code"),e(3297,"new Date(2017, 10, 28)"),t(),e(3298,"."),t()()(),n(3299,"li")(3300,"code"),e(3301,"dateTime"),t(),e(3302,": Valor de data com hor\xE1rio."),n(3303,"ul")(3304,"li"),e(3305,"Aceita o tipo "),n(3306,"em"),e(3307,"string"),t(),e(3308," no formato "),n(3309,"strong"),e(3310,"ISO-8601"),t(),e(3311," extendido "),n(3312,"strong"),e(3313,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(3314,`
e o tipo `),n(3315,"strong"),e(3316,"Date"),t(),e(3317," padr\xE3o do Javascript, por exemplo: "),n(3318,"code"),e(3319,"'2017-11-28T00:00:00-02:00'"),t(),e(3320," ou "),n(3321,"code"),e(3322,"new Date(2017, 10, 28)"),t(),e(3323,"."),t()()(),n(3324,"li")(3325,"code"),e(3326,"number"),t(),e(3327,": Valores num\xE9ricos."),t(),n(3328,"li")(3329,"code"),e(3330,"string"),t(),e(3331,": Textos."),t(),n(3332,"li")(3333,"code"),e(3334,"time"),t(),e(3335,": Valor do hor\xE1rio."),n(3336,"ul")(3337,"li"),e(3338,"Aceita o tipo "),n(3339,"strong"),e(3340,"string"),t(),e(3341," nos formatos "),n(3342,"strong"),e(3343,"'HH:mm:ss'"),t(),e(3344," ou "),n(3345,"strong"),e(3346,"'HH:mm:ss.ffffff'"),t(),e(3347,", por exemplo: "),n(3348,"code"),e(3349,"'23:12:45'"),t(),e(3350,"."),t()()()()()(),n(3351,"tr",13)(3352,"td",14)(3353,"div",15)(3354,"span",16),e(3355," url"),i(3356,"br"),t()()(),n(3357,"td",17)(3358,"code",18),e(3359,"string"),t()(),n(3360,"td",20)(3361,"em")(3362,"strong"),e(3363,"(opcional)"),t()(),n(3364,"p"),e(3365,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),n(3366,"p")(3367,"strong"),e(3368,"Componente compat\xEDvel"),t(),e(3369,": "),n(3370,"code"),e(3371,"po-upload"),t()()()(),n(3372,"tr",13)(3373,"td",14)(3374,"div",15)(3375,"span",16),e(3376," validate"),i(3377,"br"),t()()(),n(3378,"td",17)(3379,"code",18),e(3380,"string "),t(),n(3381,"code",28),e(3382," Function"),t()(),n(3383,"td",20)(3384,"em")(3385,"strong"),e(3386,"(opcional)"),t()(),n(3387,"p"),e(3388,"Fun\xE7\xE3o ou servi\xE7o para validar as "),n(3389,"strong"),e(3390,"mudan\xE7as do campo"),t(),e(3391,"."),t(),n(3392,"ul")(3393,"li"),e(3394,"A propriedade aceita os seguintes tipos:"),t(),n(3395,"li")(3396,"strong"),e(3397,"String"),t(),e(3398,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),n(3399,"code"),e(3400,"POST"),t(),e(3401,"."),t(),n(3402,"li")(3403,"strong"),e(3404,"Function"),t(),e(3405,": M\xE9todo que ser\xE1 executado."),t()(),n(3406,"p"),e(3407,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),n(3408,"code"),e(3409,"PoDynamicFormFieldChanged"),t(),e(3410,":"),t(),n(3411,"p")(3412,"code"),e(3413,"{ property: 'property name', value: 'new value' }"),t()(),n(3414,"p"),e(3415,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(3416,"a",69),e(3417,"PoDynamicFormFieldValidation"),t(),e(3418,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),n(3419,"pre")(3420,"code"),e(3421,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}`),t()(),n(3422,"p"),e(3423,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(3424,"code"),e(3425,"bind"),t(),e(3426,`, por exemplo:
`),n(3427,"code"),e(3428,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),n(3429,"tr",13)(3430,"td",14)(3431,"div",15)(3432,"span",16),e(3433," visible"),i(3434,"br"),t()()(),n(3435,"td",17)(3436,"code",27),e(3437,"boolean"),t()(),n(3438,"td",20)(3439,"em")(3440,"strong"),e(3441,"(opcional)"),t()(),n(3442,"p"),e(3443,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),n(3444,"h4",37)(3445,"code",5),e(3446,"PoDynamicFormLoad"),t()(),n(3447,"div",2)(3448,"p"),i(3449,"a",70),t(),n(3450,"p"),e(3451,"Estrutura de retorno no carregamento do formul\xE1rio."),t()(),n(3452,"h4",9),e(3453,"Propriedades"),t(),n(3454,"table",10)(3455,"tr",11)(3456,"th",12),e(3457,"Nome"),t(),n(3458,"th",12),e(3459,"Tipo"),t(),n(3460,"th",12),e(3461,"Descri\xE7\xE3o"),t()(),n(3462,"tr",13)(3463,"td",14)(3464,"div",15)(3465,"span",16),e(3466," fields"),i(3467,"br"),t()()(),n(3468,"td",17)(3469,"code",21),e(3470,"Array<PoDynamicFormField>"),t()(),n(3471,"td",20)(3472,"em")(3473,"strong"),e(3474,"(opcional)"),t()(),n(3475,"p"),e(3476,"Lista com as novas defini\xE7\xF5es dos campos."),t(),n(3477,"blockquote")(3478,"p"),e(3479,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas."),t()()()(),n(3480,"tr",13)(3481,"td",14)(3482,"div",15)(3483,"span",16),e(3484," focus"),i(3485,"br"),t()()(),n(3486,"td",17)(3487,"code",18),e(3488,"string"),t()(),n(3489,"td",20)(3490,"em")(3491,"strong"),e(3492,"(opcional)"),t()(),n(3493,"p"),e(3494,"Nome do campo que receber\xE1 o foco."),t(),n(3495,"p"),e(3496,"Exemplo:"),t(),n(3497,"pre")(3498,"code"),e(3499,"focus: 'name'"),t()()()(),n(3500,"tr",13)(3501,"td",14)(3502,"div",15)(3503,"span",16),e(3504," value"),i(3505,"br"),t()()(),n(3506,"td",17)(3507,"code",32),e(3508,"any"),t()(),n(3509,"td",20)(3510,"em")(3511,"strong"),e(3512,"(opcional)"),t()(),n(3513,"p"),e(3514,"Objeto contendo os novos valores."),t(),n(3515,"p"),e(3516,"Exemplo:"),t(),n(3517,"pre")(3518,"code"),e(3519,`{
  name: 'new name',
  age: 10
}`),t()(),n(3520,"blockquote")(3521,"p"),e(3522,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),n(3523,"h4",37)(3524,"code",5),e(3525,"PoDynamicFormFieldChanged"),t()(),n(3526,"div",2)(3527,"p"),e(3528,"Estrutura dos valores que ser\xE3o disparados quando houver uma mudan\xE7a em um campo ou no formul\xE1rio."),t()(),n(3529,"h4",9),e(3530,"Propriedades"),t(),n(3531,"table",10)(3532,"tr",11)(3533,"th",12),e(3534,"Nome"),t(),n(3535,"th",12),e(3536,"Tipo"),t(),n(3537,"th",12),e(3538,"Descri\xE7\xE3o"),t()(),n(3539,"tr",13)(3540,"td",14)(3541,"div",15)(3542,"span",16),e(3543," property"),i(3544,"br"),t()()(),n(3545,"td",17)(3546,"code",18),e(3547,"string"),t()(),n(3548,"td",20)(3549,"p"),e(3550,"Valor da propriedade do campo."),t()()(),n(3551,"tr",13)(3552,"td",14)(3553,"div",15)(3554,"span",16),e(3555," value"),i(3556,"br"),t()()(),n(3557,"td",17)(3558,"code",32),e(3559,"any"),t()(),n(3560,"td",20)(3561,"p"),e(3562,"Novo valor do campo."),t()()()(),n(3563,"h4",37)(3564,"code",5),e(3565,"PoDynamicFormFieldValidation"),t()(),n(3566,"div",2)(3567,"p"),i(3568,"a",71),t(),n(3569,"p"),e(3570,"Estrutura de retorno da valida\xE7\xE3o de um campo."),t()(),n(3571,"h4",9),e(3572,"Propriedades"),t(),n(3573,"table",10)(3574,"tr",11)(3575,"th",12),e(3576,"Nome"),t(),n(3577,"th",12),e(3578,"Tipo"),t(),n(3579,"th",12),e(3580,"Descri\xE7\xE3o"),t()(),n(3581,"tr",13)(3582,"td",14)(3583,"div",15)(3584,"span",16),e(3585," field"),i(3586,"br"),t()()(),n(3587,"td",17)(3588,"code",72),e(3589,"PoDynamicFormField"),t()(),n(3590,"td",20)(3591,"em")(3592,"strong"),e(3593,"(opcional)"),t()(),n(3594,"p"),e(3595,"Novas defini\xE7\xF5es das propriedades do campo."),t(),n(3596,"blockquote")(3597,"p"),e(3598,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades, apenas as que foram alteradas."),t()()()(),n(3599,"tr",13)(3600,"td",14)(3601,"div",15)(3602,"span",16),e(3603," focus"),i(3604,"br"),t()()(),n(3605,"td",17)(3606,"code",27),e(3607,"boolean"),t()(),n(3608,"td",20)(3609,"em")(3610,"strong"),e(3611,"(opcional)"),t()(),n(3612,"p"),e(3613,"Coloca o foco no campo ap\xF3s a valida\xE7\xE3o."),t()()(),n(3614,"tr",13)(3615,"td",14)(3616,"div",15)(3617,"span",16),e(3618," value"),i(3619,"br"),t()()(),n(3620,"td",17)(3621,"code",32),e(3622,"any"),t()(),n(3623,"td",20)(3624,"em")(3625,"strong"),e(3626,"(opcional)"),t()(),n(3627,"p"),e(3628,"Novo valor do campo"),t()()()(),n(3629,"h4",37)(3630,"code",5),e(3631,"PoDynamicFormValidation"),t()(),n(3632,"div",2)(3633,"p"),i(3634,"a",73),t(),n(3635,"p"),e(3636,"Estrutura de retorno da valida\xE7\xE3o do formul\xE1rio."),t()(),n(3637,"h4",9),e(3638,"Propriedades"),t(),n(3639,"table",10)(3640,"tr",11)(3641,"th",12),e(3642,"Nome"),t(),n(3643,"th",12),e(3644,"Tipo"),t(),n(3645,"th",12),e(3646,"Descri\xE7\xE3o"),t()(),n(3647,"tr",13)(3648,"td",14)(3649,"div",15)(3650,"span",16),e(3651," fields"),i(3652,"br"),t()()(),n(3653,"td",17)(3654,"code",21),e(3655,"Array<PoDynamicFormField>"),t()(),n(3656,"td",20)(3657,"em")(3658,"strong"),e(3659,"(opcional)"),t()(),n(3660,"p"),e(3661,"Lista com as novas defini\xE7\xF5es dos campos."),t(),n(3662,"blockquote")(3663,"p"),e(3664,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que foram alteradas."),t()()()(),n(3665,"tr",13)(3666,"td",14)(3667,"div",15)(3668,"span",16),e(3669," focus"),i(3670,"br"),t()()(),n(3671,"td",17)(3672,"code",18),e(3673,"string"),t()(),n(3674,"td",20)(3675,"em")(3676,"strong"),e(3677,"(opcional)"),t()(),n(3678,"p"),e(3679,"Nome do campo que receber\xE1 o foco."),t(),n(3680,"p"),e(3681,"Exemplo:"),t(),n(3682,"pre")(3683,"code"),e(3684,"focus: 'name'"),t()()()(),n(3685,"tr",13)(3686,"td",14)(3687,"div",15)(3688,"span",16),e(3689," value"),i(3690,"br"),t()()(),n(3691,"td",17)(3692,"code",32),e(3693,"any"),t()(),n(3694,"td",20)(3695,"em")(3696,"strong"),e(3697,"(opcional)"),t()(),n(3698,"p"),e(3699,"Objeto contendo os novos valores."),t(),n(3700,"p"),e(3701,"Exemplo:"),t(),n(3702,"pre")(3703,"code"),e(3704,`{
  name: 'new name',
  age: 10
}`),t()(),n(3705,"blockquote")(3706,"p"),e(3707,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),n(3708,"h4",37)(3709,"code",5),e(3710,"ErrorAsyncProperties"),t()(),n(3711,"div",2)(3712,"p"),e(3713,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(3714,"h4",9),e(3715,"Propriedades"),t(),n(3716,"table",10)(3717,"tr",11)(3718,"th",12),e(3719,"Nome"),t(),n(3720,"th",12),e(3721,"Tipo"),t(),n(3722,"th",12),e(3723,"Descri\xE7\xE3o"),t()(),n(3724,"tr",13)(3725,"td",14)(3726,"div",15)(3727,"span",16),e(3728," errorAsync"),i(3729,"br"),t()()(),n(3730,"td",17)(3731,"code",42),e(3732,"(value) => Observable<boolean>"),t()(),n(3733,"td",20)(3734,"p"),e(3735,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(3736,"code"),e(3737,"change"),t(),e(3738," ou "),n(3739,"code"),e(3740,"change-model"),t(),e(3741,", dependendo do valor da propriedade "),n(3742,"code"),e(3743,"triggerMode"),t(),e(3744,"."),t()()(),n(3745,"tr",13)(3746,"td",14)(3747,"div",15)(3748,"span",16),e(3749," triggerMode"),i(3750,"br"),t()()(),n(3751,"td",17)(3752,"code",74),e(3753,"'change' "),t(),n(3754,"code",75),e(3755," 'changeModel'"),t()(),n(3756,"td",20)(3757,"em")(3758,"strong"),e(3759,"(opcional)"),t()(),n(3760,"p"),e(3761,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(3762,"code"),e(3763,"change"),t(),e(3764," ou "),n(3765,"code"),e(3766,"change-model"),t(),e(3767,"."),t()()()(),n(3768,"h3"),e(3769,"Enums"),t(),n(3770,"h4",4)(3771,"code",5),e(3772,"ForceBooleanComponentEnum"),t()(),n(3773,"div",2)(3774,"p"),e(3775,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),n(3776,"h4",9),e(3777,"Propriedades"),t(),n(3778,"table",10)(3779,"tr",11)(3780,"th",12),e(3781,"Nome"),t(),n(3782,"th",12),e(3783,"Descri\xE7\xE3o"),t()(),n(3784,"tr",13)(3785,"td",14)(3786,"div",15)(3787,"span",16),e(3788," switch"),i(3789,"br"),t()()(),n(3790,"td",20)(3791,"p"),e(3792,"For\xE7a a renderiza\xE7\xE3o de um po-switch"),t()()(),n(3793,"tr",13)(3794,"td",14)(3795,"div",15)(3796,"span",16),e(3797," checkbox"),i(3798,"br"),t()()(),n(3799,"td",20)(3800,"p"),e(3801,"For\xE7a a renderiza\xE7\xE3o de um po-checkbox"),t()()()(),n(3802,"h4",4)(3803,"code",5),e(3804,"ForceOptionComponentEnum"),t()(),n(3805,"div",2)(3806,"p"),e(3807,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),n(3808,"h4",9),e(3809,"Propriedades"),t(),n(3810,"table",10)(3811,"tr",11)(3812,"th",12),e(3813,"Nome"),t(),n(3814,"th",12),e(3815,"Descri\xE7\xE3o"),t()(),n(3816,"tr",13)(3817,"td",14)(3818,"div",15)(3819,"span",16),e(3820," radioGroup"),i(3821,"br"),t()()(),n(3822,"td",20)(3823,"p"),e(3824,"For\xE7a a renderiza\xE7\xE3o de um po-radio-group independente da quantidade do op\xE7\xF5es"),t()()(),n(3825,"tr",13)(3826,"td",14)(3827,"div",15)(3828,"span",16),e(3829," select"),i(3830,"br"),t()()(),n(3831,"td",20)(3832,"p"),e(3833,"For\xE7a a renderiza\xE7\xE3o de um po-select independente da quantidade do op\xE7\xF5es"),t()()()(),n(3834,"h4",4)(3835,"code",5),e(3836,"PoDynamicFieldType"),t()(),n(3837,"div",2)(3838,"p"),e(3839,"Enum para defini\xE7\xE3o do tipo de campo que ser\xE1 criado dinamicamente."),t()(),n(3840,"h4",9),e(3841,"Propriedades"),t(),n(3842,"table",10)(3843,"tr",11)(3844,"th",12),e(3845,"Nome"),t(),n(3846,"th",12),e(3847,"Descri\xE7\xE3o"),t()(),n(3848,"tr",13)(3849,"td",14)(3850,"div",15)(3851,"span",16),e(3852," Boolean"),i(3853,"br"),t()()(),n(3854,"td",20)(3855,"p"),e(3856,"Valor booleano."),t()()(),n(3857,"tr",13)(3858,"td",14)(3859,"div",15)(3860,"span",16),e(3861," Currency"),i(3862,"br"),t()()(),n(3863,"td",20)(3864,"p"),e(3865,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),n(3866,"tr",13)(3867,"td",14)(3868,"div",15)(3869,"span",16),e(3870," Decimal"),i(3871,"br"),t()()(),n(3872,"td",20)(3873,"p"),e(3874,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),n(3875,"tr",13)(3876,"td",14)(3877,"div",15)(3878,"span",16),e(3879," Date"),i(3880,"br"),t()()(),n(3881,"td",20)(3882,"p"),e(3883,"Valor para data."),t()()(),n(3884,"tr",13)(3885,"td",14)(3886,"div",15)(3887,"span",16),e(3888," DateTime"),i(3889,"br"),t()()(),n(3890,"td",20)(3891,"p"),e(3892,"Valor para data e hora."),t()()(),n(3893,"tr",13)(3894,"td",14)(3895,"div",15)(3896,"span",16),e(3897," Time"),i(3898,"br"),t()()(),n(3899,"td",20)(3900,"p"),e(3901,"Utilizado para informar/exibir hora."),t()()(),n(3902,"tr",13)(3903,"td",14)(3904,"div",15)(3905,"span",16),e(3906," Number"),i(3907,"br"),t()()(),n(3908,"td",20)(3909,"p"),e(3910,"Valor num\xE9rico."),t()()(),n(3911,"tr",13)(3912,"td",14)(3913,"div",15)(3914,"span",16),e(3915," String"),i(3916,"br"),t()()(),n(3917,"td",20)(3918,"p"),e(3919,"Texto."),t()()(),n(3920,"tr",13)(3921,"td",14)(3922,"div",15)(3923,"span",16),e(3924," Upload"),i(3925,"br"),t()()(),n(3926,"td",20)(3927,"p"),e(3928,"Utilizado para fazer uploads de arquivos."),t()()()()())},dependencies:[g],encapsulation:2})}return o})();var $=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(E(R),E(U))};static \u0275cmp=p({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Dynamic Form",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,m){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),i(3,"sample-po-dynamic-form-doc"),t(),n(4,"po-tab",3),i(5,"sample-po-dynamic-form-basic-view")(6,"sample-po-dynamic-form-register-view")(7,"sample-po-dynamic-form-container-view"),t()()()),a&2&&(d("p-actions",m.actions),l(2),d("p-active",m.activeTab.includes("doc")),l(2),d("p-hide",m.hidePoWebSample)("p-active",m.activeTab.includes("web")))},dependencies:[H,S,b,W,G,Y,Z],encapsulation:2})}return o})();var Se=[{path:"",component:$}],ee=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[z.forChild(Se),z]})}return o})();var Xe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[X,ee]})}return o})();export{Xe as DocPoDynamicFormModule};
