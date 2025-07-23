import{$ as D,$a as g,A as M,B as L,Ed as f,Ga as e,Ia as b,Na as q,Oa as T,Od as v,Pa as c,T as m,U as V,Wb as z,Xd as u,Yb as B,Yd as E,Zb as A,_ as d,h as F,ha as p,ka as S,na as t,oa as i,ob as I,pa as n,pb as H,re as x,se as N,ua as y,x as j,y as C}from"./chunk-ODUOVNEW.js";var $=()=>({property:"name"}),ee=o=>[o],te=()=>({name:"Jhon"}),_=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-basic"]],standalone:!1,decls:1,vars:6,consts:[[3,"p-fields","p-value"]],template:function(a,l){a&1&&n(0,"po-dynamic-view",0),a&2&&p("p-fields",c(3,ee,T(2,$)))("p-value",T(5,te))},dependencies:[f],encapsulation:2})}return o})();var ne=o=>({"docs-sample-code-tabs":o}),R=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(n(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic View Basic"),i(),t(4,"a",2),y("click",function(){return l.toggleSampleCodeTabs()}),n(5,"span"),e(6),i()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.html"),i(),t(13,"pre",7),e(14,`<po-dynamic-view [p-fields]="[{ property: 'name' }]" [p-value]="{ name: 'Jhon' }"> </po-dynamic-view>
`),i()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.ts"),i(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-view-basic',
  templateUrl: './sample-po-dynamic-view-basic.component.html',
  standalone: false
})
export class SamplePoDynamicViewBasicComponent {}
`),i()()()()(),t(21,"div",10),n(22,"sample-po-dynamic-view-basic"),i(),n(23,"hr")),a&2&&(m(5),S("po-icon "+l.sampleCodeButtonIcon),m(),b(" ",l.sampleCodeButtonLabel,""),m(),p("ngClass",c(4,ne,l.hideSampleCodeTabs)))},dependencies:[g,x,u,E,_],encapsulation:2})}return o})();var G=(()=>{class o{fields=[{property:"name",divider:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",divider:"Work Data"},{property:"job",tag:!0,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:!0,color:"#C596E7",icon:"an an-check"},{property:"city",label:"City",divider:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"marriedStatus",options:[{label:"MARRIED",value:"1"}],label:"Marital status",divider:"ADDITIONAL DATA",tag:!0,color:"#C596E7"},{property:"children",options:[{label:"yes ",value:"1"},{label:"no",value:"2"}]},{property:"hobbies",label:"Hobbies",gridColumns:12,divider:"Additional Information"}];employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"S\xE3o Paulo",wage:8000.5,availability:"Available",admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",marriedStatus:"1",children:"1",hobbies:`Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.
Pr\xE1tica de corrida ao ar livre.
Jogos de tabuleiro e videogames.
Culin\xE1ria, especialmente cozinha italiana.`};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-employee"]],standalone:!1,decls:2,vars:3,consts:[["p-title","Employee"],[3,"p-fields","p-value","p-text-wrap"]],template:function(a,l){a&1&&(t(0,"po-page-default",0),n(1,"po-dynamic-view",1),i()),a&2&&(m(),p("p-fields",l.fields)("p-value",l.employee)("p-text-wrap",!0))},dependencies:[f,v],encapsulation:2})}return o})();var le=o=>({"docs-sample-code-tabs":o}),J=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-employee-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(n(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic View - Employee"),i(),t(4,"a",2),y("click",function(){return l.toggleSampleCodeTabs()}),n(5,"span"),e(6),i()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.html"),i(),t(13,"pre",7),e(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee" [p-text-wrap]="true"> </po-dynamic-view>
</po-page-default>
`),i()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.ts"),i(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dynamic-view-employee',
  templateUrl: './sample-po-dynamic-view-employee.component.html',
  standalone: false
})
export class SamplePoDynamicViewEmployeeComponent {
  fields: Array<PoDynamicViewField> = [
    { property: 'name', divider: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', divider: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'city', label: 'City', divider: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    {
      property: 'marriedStatus',
      options: [{ label: 'MARRIED', value: '1' }],
      label: 'Marital status',
      divider: 'ADDITIONAL DATA',
      tag: true,
      color: '#C596E7'
    },
    {
      property: 'children',
      options: [
        { label: 'yes ', value: '1' },
        { label: 'no', value: '2' }
      ]
    },
    {
      property: 'hobbies',
      label: 'Hobbies',
      gridColumns: 12,
      divider: 'Additional Information'
    }
  ];

  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'S\xE3o Paulo',
    wage: 8000.5,
    availability: 'Available',
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    marriedStatus: '1',
    children: '1',
    hobbies:
      'Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.\\n' +
      'Pr\xE1tica de corrida ao ar livre.\\n' +
      'Jogos de tabuleiro e videogames.\\n' +
      'Culin\xE1ria, especialmente cozinha italiana.'
  };
}
`),i()()()()(),t(21,"div",10),n(22,"sample-po-dynamic-view-employee"),i(),n(23,"hr")),a&2&&(m(5),S("po-icon "+l.sampleCodeButtonIcon),m(),b(" ",l.sampleCodeButtonLabel,""),m(),p("ngClass",c(4,le,l.hideSampleCodeTabs)))},dependencies:[g,x,u,E,G],encapsulation:2})}return o})();var O=(()=>{class o{httpClient;headers=new I({"X-PO-No-Message":"true"});url;filterParams;constructor(r){this.httpClient=r}getObjectByValue(r,a){return this.httpClient.get(this.url,{headers:this.headers,params:this.filterParams}).pipe(F(l=>"items"in l?l.items:l))}setConfig(r,a){this.url=r,this.filterParams=a}static \u0275fac=function(a){return new(a||o)(M(H))};static \u0275prov=j({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var W=(()=>{class o{employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"A",wage:8000.5,availability:"Available",cities:[{city:"S\xE3o Paulo",id:"SP"},{city:"Joinville",id:"SC"},{city:"Belo Horizonte",id:"MG"}],admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",profile:"admin",image:"https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg"};fields=[{property:"name",divider:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",divider:"Work Data"},{property:"job",tag:!0,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:!0,color:"#C596E7",icon:"an an-check"},{property:"cities",isArrayOrObject:!0,fieldLabel:"city",fieldValue:"id",concatLabelValue:!0},{property:"city",label:"City",divider:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"image",divider:"Image",image:!0,alt:"image",height:"250"}];_newService=L(O);ngOnInit(){this._newService.setConfig("https://po-sample-api.onrender.com/v1/hotels",{id:1485976673002})}customEmployeeData(){return{value:{cpf:this.checkProfile(),rg:this.checkProfile(),wage:this.checkProfile()},fields:[{property:"name",divider:"Personal data by load customization",order:1},{property:"cpf",tag:!0,color:"color-07",order:2},{property:"rg",tag:!0,color:"color-07",order:3},{property:"wage",type:"string",tag:!0,color:"color-07"},{property:"genre",visible:!1},{property:"job",tag:!1},{searchService:this._newService,fieldLabel:"address_city",property:"city"}]}}checkProfile(){if(this.employee.profile==="admin")return"confidential"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-employee-on-load"]],standalone:!1,features:[q([O])],decls:2,vars:3,consts:[["p-title","Employee on Load"],[3,"p-fields","p-load","p-value"]],template:function(a,l){a&1&&(t(0,"po-page-default",0),n(1,"po-dynamic-view",1),i()),a&2&&(m(),p("p-fields",l.fields)("p-load",l.customEmployeeData.bind(l))("p-value",l.employee))},dependencies:[f,v],encapsulation:2})}return o})();var de=o=>({"docs-sample-code-tabs":o}),U=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-employee-on-load-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(n(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic View - Employee on load"),i(),t(4,"a",2),y("click",function(){return l.toggleSampleCodeTabs()}),n(5,"span"),e(6),i()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.html"),i(),t(13,"pre",7),e(14,`<po-page-default p-title="Employee on Load">
  <po-dynamic-view [p-fields]="fields" [p-load]="customEmployeeData.bind(this)" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),i()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.ts"),i(),t(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import { PoDynamicViewField } from '@po-ui/ng-components';
import { SamplePoDynamicViewEmployeeOnLoadService } from './sample-po-dynamic-view-employee-on-load.service';

@Component({
  selector: 'sample-po-dynamic-view-employee-on-load',
  templateUrl: './sample-po-dynamic-view-employee-on-load.component.html',
  providers: [SamplePoDynamicViewEmployeeOnLoadService],
  standalone: false
})
export class SamplePoDynamicViewEmployeeOnLoadComponent implements OnInit {
  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'A',
    wage: 8000.5,
    availability: 'Available',
    cities: [
      {
        city: 'S\xE3o Paulo',
        id: 'SP'
      },
      {
        city: 'Joinville',
        id: 'SC'
      },
      {
        city: 'Belo Horizonte',
        id: 'MG'
      }
    ],
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    profile: 'admin',
    image: 'https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg'
  };

  fields: Array<PoDynamicViewField> = [
    { property: 'name', divider: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', divider: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'cities', isArrayOrObject: true, fieldLabel: 'city', fieldValue: 'id', concatLabelValue: true },
    { property: 'city', label: 'City', divider: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    { property: 'image', divider: 'Image', image: true, alt: 'image', height: '250' }
  ];

  private _newService = inject(SamplePoDynamicViewEmployeeOnLoadService);

  ngOnInit(): void {
    this._newService.setConfig('https://po-sample-api.onrender.com/v1/hotels', { id: 1485976673002 });
  }

  customEmployeeData() {
    return {
      value: {
        cpf: this.checkProfile(),
        rg: this.checkProfile(),
        wage: this.checkProfile()
      },
      fields: [
        { property: 'name', divider: 'Personal data by load customization', order: 1 },
        { property: 'cpf', tag: true, color: 'color-07', order: 2 },
        { property: 'rg', tag: true, color: 'color-07', order: 3 },
        { property: 'wage', type: 'string', tag: true, color: 'color-07' },
        { property: 'genre', visible: false },
        { property: 'job', tag: false },
        {
          searchService: this._newService,
          fieldLabel: 'address_city',
          property: 'city'
        }
      ]
    };
  }

  private checkProfile(): string {
    if (this.employee.profile === 'admin') {
      return 'confidential';
    }
  }
}
`),i(),t(21,"label",6),e(22,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.service.ts"),i(),t(23,"pre",9),e(24,`import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SamplePoDynamicViewEmployeeOnLoadService {
  readonly headers: HttpHeaders = new HttpHeaders({
    'X-PO-No-Message': 'true'
  });

  url: string;
  filterParams;

  constructor(private httpClient: HttpClient) {}

  getObjectByValue(value: string | Array<any>, filterParams?: any): Observable<Array<any> | { [key: string]: any }> {
    return this.httpClient
      .get(this.url, {
        headers: this.headers,
        params: this.filterParams
      })
      .pipe(map((response: any) => ('items' in response ? response.items : response)));
  }

  setConfig(url: string, filterParams) {
    this.url = url;
    this.filterParams = filterParams;
  }
}
`),i()()()()(),t(25,"div",10),n(26,"sample-po-dynamic-view-employee-on-load"),i(),n(27,"hr")),a&2&&(m(5),S("po-icon "+l.sampleCodeButtonIcon),m(),b(" ",l.sampleCodeButtonLabel,""),m(),p("ngClass",c(4,de,l.hideSampleCodeTabs)))},dependencies:[g,x,u,E,W],encapsulation:2})}return o})();var Z=(()=>{class o{fields=[{property:"name",container:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",container:"Work Data"},{property:"job",tag:!0,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:!0,color:"#C596E7",icon:"an an-check"},{property:"city",label:"City",container:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"marriedStatus",options:[{label:"MARRIED",value:"1"}],label:"Marital status",container:"ADDITIONAL DATA",tag:!0,color:"#C596E7"},{property:"children",options:[{label:"yes ",value:"1"},{label:"no",value:"2"}]}];employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"S\xE3o Paulo",wage:8000.5,availability:"Available",admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",marriedStatus:"1",children:"1"};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-container"]],standalone:!1,decls:2,vars:2,consts:[["p-title","Employee"],[3,"p-fields","p-value"]],template:function(a,l){a&1&&(t(0,"po-page-default",0),n(1,"po-dynamic-view",1),i()),a&2&&(m(),p("p-fields",l.fields)("p-value",l.employee))},dependencies:[f,v],encapsulation:2})}return o})();var ce=o=>({"docs-sample-code-tabs":o}),X=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-container-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(n(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic View - Employee on load"),i(),t(4,"a",2),y("click",function(){return l.toggleSampleCodeTabs()}),n(5,"span"),e(6),i()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.html"),i(),t(13,"pre",7),e(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),i()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.ts"),i(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dynamic-view-container',
  templateUrl: './sample-po-dynamic-view-container.component.html',
  standalone: false
})
export class SamplePoDynamicViewContainerComponent {
  fields: Array<PoDynamicViewField> = [
    { property: 'name', container: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', container: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'city', label: 'City', container: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    {
      property: 'marriedStatus',
      options: [{ label: 'MARRIED', value: '1' }],
      label: 'Marital status',
      container: 'ADDITIONAL DATA',
      tag: true,
      color: '#C596E7'
    },
    {
      property: 'children',
      options: [
        { label: 'yes ', value: '1' },
        { label: 'no', value: '2' }
      ]
    }
  ];

  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'S\xE3o Paulo',
    wage: 8000.5,
    availability: 'Available',
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    marriedStatus: '1',
    children: '1'
  };
}
`),i()()()()(),t(21,"div",10),n(22,"sample-po-dynamic-view-container"),i(),n(23,"hr")),a&2&&(m(5),S("po-icon "+l.sampleCodeButtonIcon),m(),b(" ",l.sampleCodeButtonLabel,""),m(),p("ngClass",c(4,ce,l.hideSampleCodeTabs)))},dependencies:[g,x,u,E,Z],encapsulation:2})}return o})();var Q=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-doc"]],standalone:!1,decls:1533,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoDynamicViewField[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","object"],[1,"docs-api-h4","docs-api-class-name"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","Array<string>"],["href","https://angular.io/api/common/CurrencyPipe"],["href","https://angular.io/api/common/DatePipe"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<{","label:","string;","value:","string"],["pan","",1,"docs-api-property-type","number;","}>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoDynamicViewRequest"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"]],template:function(a,l){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),i()(),n(4,"div",2),t(5,"h3",3),e(6,"Componente"),i(),t(7,"h4",4)(8,"code",5),e(9,"PoDynamicViewComponent"),i()(),t(10,"div",2)(11,"p"),e(12,"Componente para listar dados dinamicamente a partir de uma lista de objetos."),i(),t(13,"blockquote")(14,"p"),e(15,"Por padr\xE3o esse componente cria "),t(16,"code"),e(17,"po-info"),i(),e(18," para exibi\xE7\xE3o, \xE9 poss\xEDvel criar "),t(19,"code"),e(20,"po-tag"),i(),e(21," passando a propriedade { tag: true }. "),i()()(),t(22,"div",6)(23,"h4",7),e(24,"Seletor"),i(),t(25,"pre",8),e(26,`<po-dynamic-view
    p-fields="PoDynamicViewField[]"
    p-load="string | Function"
    p-show-all-value="boolean"
    p-text-wrap="boolean"
    p-value="object" >
</po-dynamic-view>
`),i()(),t(27,"h4",9),e(28,"Propriedades"),i(),t(29,"table",10)(30,"tr",11)(31,"th",12),e(32,"Nome"),i(),t(33,"th",12),e(34,"Tipo"),i(),t(35,"th",12),e(36,"Padr\xE3o"),i(),t(37,"th",12),e(38,"Descri\xE7\xE3o"),i()(),t(39,"tr",13)(40,"td",14)(41,"div",15)(42,"span",16),e(43," p-fields"),n(44,"br"),i()()(),t(45,"td",17)(46,"code",18),e(47,"PoDynamicViewField[]"),i()(),t(48,"td",19)(49,"p")(50,"code"),e(51,"[]"),i()()(),t(52,"td",20)(53,"em")(54,"strong"),e(55,"(opcional)"),i()(),t(56,"p"),e(57,"Lista de objetos que implementam a interface "),t(58,"code"),e(59,"PoDynamicView"),i(),e(60,"."),i(),t(61,"blockquote")(62,"p"),e(63,"Ex: "),t(64,"code"),e(65,"[ { property: 'age' } ]"),i()()(),t(66,"p"),e(67,"Regras de tipagem e formata\xE7\xE3o dos valores exibidos:"),i(),t(68,"ul")(69,"li"),e(70,"Caso o "),t(71,"em"),e(72,"type"),i(),e(73," informado seja "),t(74,"em"),e(75,"currency"),i(),e(76," e n\xE3o seja informado o "),t(77,"em"),e(78,"format"),i(),e(79,` o mesmo recebe "'BRL', 'symbol', '1.2-2'"
como formato padr\xE3o.`),i(),t(80,"li"),e(81,"Caso o "),t(82,"em"),e(83,"type"),i(),e(84," informado seja "),t(85,"em"),e(86,"date"),i(),e(87," e n\xE3o seja informado o "),t(88,"em"),e(89,"format"),i(),e(90," o mesmo recebe 'dd/MM/yyyy' como formato padr\xE3o."),i(),t(91,"li"),e(92,"Caso o "),t(93,"em"),e(94,"type"),i(),e(95," informado seja "),t(96,"em"),e(97,"dateTime"),i(),e(98," e n\xE3o seja informado o "),t(99,"em"),e(100,"format"),i(),e(101," o mesmo recebe 'dd/MM/yyyy HH:mm:ss' como formato padr\xE3o."),i(),t(102,"li"),e(103,"Caso o "),t(104,"em"),e(105,"type"),i(),e(106," informado seja "),t(107,"em"),e(108,"number"),i(),e(109," e n\xE3o seja informado o "),t(110,"em"),e(111,"format"),i(),e(112," o mesmo n\xE3o ser\xE1 formatado."),i(),t(113,"li"),e(114,"Caso o "),t(115,"em"),e(116,"type"),i(),e(117," informado seja "),t(118,"em"),e(119,"time"),i(),e(120," e n\xE3o seja informado o "),t(121,"em"),e(122,"format"),i(),e(123," o mesmo recebe 'HH:mm:ss.ffffff' como formato padr\xE3o."),i()(),t(124,"blockquote")(125,"p"),e(126,"As propriedades informadas ser\xE3o exibidas mesmo n\xE3o contendo valor de refer\xEAncia no objeto da propriedade "),t(127,"code"),e(128,"p-value"),i(),e(129,"."),i()()()(),t(130,"tr",13)(131,"td",14)(132,"div",15)(133,"span",16),e(134," p-load"),n(135,"br"),i()()(),t(136,"td",17)(137,"code",21),e(138,"string "),i(),t(139,"code",22),e(140," Function"),i()(),t(141,"td",19),e(142,"-"),i(),t(143,"td",20)(144,"em")(145,"strong"),e(146,"(opcional)"),i()(),t(147,"p"),e(148,"Possibilita executar uma fun\xE7\xE3o quando o componente \xE9 inicializado."),i(),t(149,"p"),e(150,"A propriedade aceita os seguintes tipos:"),i(),t(151,"ul")(152,"li")(153,"strong"),e(154,"String"),i(),e(155,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),t(156,"code"),e(157,"POST"),i(),e(158,"."),i(),t(159,"li")(160,"strong"),e(161,"Function"),i(),e(162,": M\xE9todo que ser\xE1 executado na inicializa\xE7\xE3o do componente."),i()(),t(163,"p"),e(164,"Para os dois tipos de utiliza\xE7\xE3o da propriedade espera-se o seguinte retorno:"),i(),t(165,"pre")(166,"code"),e(167,`{
  value: {
    cnpj: '**************', // altera valor do campo
    updated: (new Date()).toString() // atribui valor ao campo novo
  },
  fields: [
    { property: 'updated', tag: true } // inclui campo novo
  ]
}`),i()(),t(168,"blockquote")(169,"p")(170,"strong"),e(171,"value"),i(),e(172,": any = atribui novo valor do model."),i()(),t(173,"blockquote")(174,"p")(175,"strong"),e(176,"fields"),i(),e(177,": "),t(178,"code"),e(179,"Array<PoDynamicViewField>"),i(),e(180,` = Lista de campos que deseja alterar as propriedades,
caso enviar um campo a mais ser\xE1 criado um novo campo.`),i()(),t(181,"ul")(182,"li"),e(183,"Para esconder/remover campos precisa informar no field a propriedade "),t(184,"code"),e(185,"visible = false"),i(),e(186,"."),i()()()(),t(187,"tr",13)(188,"td",14)(189,"div",15)(190,"span",16),e(191," p-show-all-value"),n(192,"br"),i()()(),t(193,"td",17)(194,"code",23),e(195,"boolean"),i()(),t(196,"td",19)(197,"p")(198,"code"),e(199,"false"),i()()(),t(200,"td",20)(201,"em")(202,"strong"),e(203,"(opcional)"),i()(),t(204,"p"),e(205,"Indica se exibir\xE1 todas as informa\xE7\xF5es contidas dentro do objeto informado na propriedade "),t(206,"code"),e(207,"p-value"),i(),e(208,"."),i()()(),t(209,"tr",13)(210,"td",14)(211,"div",15)(212,"span",16),e(213," p-text-wrap"),n(214,"br"),i()()(),t(215,"td",17)(216,"code",23),e(217,"boolean"),i()(),t(218,"td",19)(219,"p")(220,"code"),e(221,"false"),i()()(),t(222,"td",20)(223,"em")(224,"strong"),e(225,"(opcional)"),i()(),t(226,"p"),e(227,"Permite a quebra de linha no texto do "),t(228,"code"),e(229,"p-value"),i(),e(230,", aplicando-a onde h\xE1 "),t(231,"code"),e(232,"\\n"),i(),e(233,"."),i(),t(234,"pre")(235,"code"),e(236,`<po-dynamic-view
  [p-value]="{ description: 'Primeira linha\\nSegunda linha' }"
  [p-text-wrap]="true"
></po-dynamic-view>`),i()(),t(237,"p"),e(238,"Sa\xEDda:"),i(),t(239,"pre")(240,"code"),e(241,`Primeira linha
Segunda linha`),i()()()(),t(242,"tr",13)(243,"td",14)(244,"div",15)(245,"span",16),e(246," p-value"),n(247,"br"),i()()(),t(248,"td",17)(249,"code",24),e(250,"object"),i()(),t(251,"td",19),e(252,"-"),i(),t(253,"td",20)(254,"p"),e(255,"Objeto que ser\xE1 utilizado para exibir as informa\xE7\xF5es din\xE2micas, o valor ser\xE1 recuperado atrav\xE9s do atributo "),t(256,"em"),e(257,"property"),i(),e(258,`
dos objetos contidos na propridade `),t(259,"code"),e(260,"p-fields"),i(),e(261,"."),i(),t(262,"blockquote")(263,"p"),e(264,"Ex: "),t(265,"code"),e(266,"{ age: '35' }"),i()()()()()(),t(267,"h3"),e(268,"Interfaces"),i(),t(269,"h4",25)(270,"code",5),e(271,"PoDynamicViewRequest"),i()(),t(272,"div",2)(273,"p"),e(274,"Define o tipo de busca customizada para um campo em espec\xEDfico."),i()(),t(275,"h4",9),e(276,"M\xE9todos"),i(),t(277,"table",26)(278,"tr",13)(279,"th",27)(280,"div",15)(281,"h4")(282,"span",16),e(283," getObjectByValue "),i()()()()(),t(284,"tr",20)(285,"td",20)(286,"p"),e(287,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),i()()()(),t(288,"h5")(289,"b"),e(290,"Par\xE2metros"),i()(),t(291,"table",10)(292,"tr",11)(293,"th",12),e(294,"Nome"),i(),t(295,"th",12),e(296,"Tipo"),i(),t(297,"th",12),e(298,"Descri\xE7\xE3o"),i()(),t(299,"tr",13)(300,"td",14),e(301," value"),i(),t(302,"td",17)(303,"code",21),e(304," string "),i(),t(305,"code",28),e(306," Array<any> "),i()(),t(307,"td",20)(308,"p"),e(309,"Valor \xFAnico a ser buscado na fonte de dados."),i()()(),t(310,"tr",13)(311,"td",14),e(312," filterParams"),i(),t(313,"td",17)(314,"code",29),e(315," any "),i()(),t(316,"td",20)(317,"p"),e(318,"Valor opcional para informar filtros customizados."),i()()()(),n(319,"br"),t(320,"h4",25)(321,"code",5),e(322,"PoDynamicViewField"),i()(),t(323,"div",2)(324,"p"),e(325," Interface para defini\xE7\xE3o das propriedades dos campos de visualiza\xE7\xE3o que ser\xE3o criados dinamicamente."),i()(),t(326,"h4",9),e(327,"Propriedades"),i(),t(328,"table",10)(329,"tr",11)(330,"th",12),e(331,"Nome"),i(),t(332,"th",12),e(333,"Tipo"),i(),t(334,"th",12),e(335,"Descri\xE7\xE3o"),i()(),t(336,"tr",13)(337,"td",14)(338,"div",15)(339,"span",16),e(340," alt"),n(341,"br"),i()()(),t(342,"td",17)(343,"code",21),e(344,"string"),i()(),t(345,"td",20)(346,"em")(347,"strong"),e(348,"(opcional)"),i()(),t(349,"p"),e(350,"Defini o texto alternativo descrevendo a imagem."),i(),t(351,"p"),e(352,"Exemplo de utiliza\xE7\xE3o:"),i(),t(353,"pre")(354,"code"),e(355,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];`),i()(),t(356,"p")(357,"strong"),e(358,"Componentes compat\xEDveis:"),i(),t(359,"code"),e(360,"po-image"),i(),e(361,"."),i()()(),t(362,"tr",13)(363,"td",14)(364,"div",15)(365,"span",16),e(366," booleanFalse"),n(367,"br"),i()()(),t(368,"td",17)(369,"code",21),e(370,"string"),i()(),t(371,"td",20)(372,"em")(373,"strong"),e(374,"(opcional)"),i()(),t(375,"p"),e(376,"Texto exibido quando o valor do componente for "),t(377,"em"),e(378,"false"),i(),e(379,"."),i()()(),t(380,"tr",13)(381,"td",14)(382,"div",15)(383,"span",16),e(384," booleanTrue"),n(385,"br"),i()()(),t(386,"td",17)(387,"code",21),e(388,"string"),i()(),t(389,"td",20)(390,"em")(391,"strong"),e(392,"(opcional)"),i()(),t(393,"p"),e(394,"Texto exibido quando o valor do componente for "),t(395,"em"),e(396,"true"),i(),e(397,"."),i()()(),t(398,"tr",13)(399,"td",14)(400,"div",15)(401,"span",16),e(402," color"),n(403,"br"),i()()(),t(404,"td",17)(405,"code",21),e(406,"string"),i()(),t(407,"td",20)(408,"em")(409,"strong"),e(410,"(opcional)"),i()(),t(411,"p"),e(412,"Determina a cor da tag. As maneiras de customizar as cores s\xE3o:"),i(),t(413,"ul")(414,"li"),e(415,"Hexadeximal, por exemplo "),t(416,"code"),e(417,"#c64840"),i(),e(418,";"),i(),t(419,"li"),e(420,"RGB, como "),t(421,"code"),e(422,"rgb(0, 0, 165)"),i(),e(423,";"),i(),t(424,"li"),e(425,"O nome da cor, por exemplo "),t(426,"code"),e(427,"blue"),i(),e(428,";"),i(),t(429,"li"),e(430,"Usando uma das cores do tema do PO:"),i(),t(431,"li"),e(432,"Valores v\xE1lidos:"),t(433,"ul")(434,"li"),n(435,"span",30),t(436,"code"),e(437,"color-01"),i()(),t(438,"li"),n(439,"span",31),t(440,"code"),e(441,"color-02"),i()(),t(442,"li"),n(443,"span",32),t(444,"code"),e(445,"color-03"),i()(),t(446,"li"),n(447,"span",33),t(448,"code"),e(449,"color-04"),i()(),t(450,"li"),n(451,"span",34),t(452,"code"),e(453,"color-05"),i()(),t(454,"li"),n(455,"span",35),t(456,"code"),e(457,"color-06"),i()(),t(458,"li"),n(459,"span",36),t(460,"code"),e(461,"color-07"),i()(),t(462,"li"),n(463,"span",37),t(464,"code"),e(465,"color-08"),i()(),t(466,"li"),n(467,"span",38),t(468,"code"),e(469,"color-09"),i()(),t(470,"li"),n(471,"span",39),t(472,"code"),e(473,"color-10"),i()(),t(474,"li"),n(475,"span",40),t(476,"code"),e(477,"color-11"),i()(),t(478,"li"),n(479,"span",41),t(480,"code"),e(481,"color-12"),i()()()()()()(),t(482,"tr",13)(483,"td",14)(484,"div",15)(485,"span",16),e(486," concatLabelValue"),n(487,"br"),i()()(),t(488,"td",17)(489,"code",23),e(490,"boolean"),i()(),t(491,"td",20)(492,"em")(493,"strong"),e(494,"(opcional)"),i()(),t(495,"p"),e(496,"Permite que seja exibido em tela, de forma concatenada as propriedades "),t(497,"code"),e(498,"fieldLabel"),i(),e(499," + "),t(500,"code"),e(501,"fieldValue"),i(),e(502,`.
A ordem sempre ser\xE1 `),t(503,"code"),e(504,"fieldLabel"),i(),e(505," e depois "),t(506,"code"),e(507,"fieldValue"),i(),e(508,", n\xE3o sendo poss\xEDvel alterar."),i(),t(509,"blockquote")(510,"p"),e(511,"Propriedade funciona corretamente caso as propriedades "),t(512,"code"),e(513,"fieldLabel"),i(),e(514," e "),t(515,"code"),e(516,"fielValue"),i(),e(517," sejam v\xE1lidas."),i()()()(),t(518,"tr",13)(519,"td",14)(520,"div",15)(521,"span",16),e(522," container"),n(523,"br"),i()()(),t(524,"td",17)(525,"code",21),e(526,"string"),i()(),t(527,"td",20)(528,"em")(529,"strong"),e(530,"(opcional)"),i()(),t(531,"p"),e(532,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),i(),t(533,"p"),e(534,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),i()()(),t(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),e(539," divider"),n(540,"br"),i()()(),t(541,"td",17)(542,"code",21),e(543,"string"),i()(),t(544,"td",20)(545,"em")(546,"strong"),e(547,"(opcional)"),i()(),t(548,"p"),e(549,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),i()()(),t(550,"tr",13)(551,"td",14)(552,"div",15)(553,"span",16),e(554," fieldLabel"),n(555,"br"),i()()(),t(556,"td",17)(557,"code",21),e(558,"string"),i()(),t(559,"td",20)(560,"em")(561,"strong"),e(562,"(opcional)"),i()(),t(563,"p"),e(564,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),i(),t(565,"p"),e(566,"O valor padr\xE3o \xE9: "),t(567,"code"),e(568,"label"),i(),e(569,"."),i()()(),t(570,"tr",13)(571,"td",14)(572,"div",15)(573,"span",16),e(574," fieldValue"),n(575,"br"),i()()(),t(576,"td",17)(577,"code",21),e(578,"string"),i()(),t(579,"td",20)(580,"em")(581,"strong"),e(582,"(opcional)"),i()(),t(583,"p"),e(584,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),i(),t(585,"p"),e(586,"O valor padr\xE3o \xE9: "),t(587,"code"),e(588,"value"),i(),e(589,"."),i()()(),t(590,"tr",13)(591,"td",14)(592,"div",15)(593,"span",16),e(594," format"),n(595,"br"),i()()(),t(596,"td",17)(597,"code",21),e(598,"string "),i(),t(599,"code",42),e(600," Array<string>"),i()(),t(601,"td",20)(602,"em")(603,"strong"),e(604,"(opcional)"),i()(),t(605,"p"),e(606,"Define o formato de exibi\xE7\xE3o para o valor de um campo."),i(),t(607,"ul")(608,"li")(609,"p"),e(610,"Quando "),t(611,"code"),e(612,"format"),i(),e(613," \xE9 uma "),t(614,"code"),e(615,"string"),i(),e(616,", o formato aplicado depende da propriedade "),t(617,"strong"),e(618,"type"),i(),e(619," segue como usar cada tipo:"),i(),t(620,"ul")(621,"li")(622,"code"),e(623,"currency"),i(),e(624,": Utiliza c\xF3digos de moeda definidos pelo "),t(625,"a",43),e(626,"CurrencyPipe"),i(),e(627,`.
Exemplos: Use 'BRL' para Real Brasileiro e 'USD' para D\xF3lar Americano.`),i(),t(628,"li")(629,"code"),e(630,"date"),i(),e(631,": Adota formatos de data especificados pelo "),t(632,"a",44),e(633,"DatePipe"),i(),e(634,`.
Suporta formatos personalizados, como dia (dd), m\xEAs (MM) e ano (yyyy ou yy).
Formato padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),i(),t(635,"li")(636,"code"),e(637,"time"),i(),e(638,`: Aceita formatos de tempo, incluindo hora (HH), minutos (mm), segundos (ss) e opcionalmente
milisegundos (f-ffffff). Formato padr\xE3o \xE9 'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff'.`),i(),t(639,"li")(640,"code"),e(641,"number"),i(),e(642,": Usa especifica\xE7\xF5es do "),t(643,"a",45),e(644,"DecimalPipe"),i(),e(645,` para formata\xE7\xE3o num\xE9rica.
Na aus\xEAncia de um formato espec\xEDfico, o n\xFAmero \xE9 exibido como fornecido.
Exemplo: Entrada `),t(646,"code"),e(647,"50"),i(),e(648,", formato "),t(649,"code"),e(650,"'1.2-5'"),i(),e(651,", resulta em "),t(652,"code"),e(653,"50.00"),i(),e(654,"."),i()()(),t(655,"li")(656,"p"),e(657,"Quando "),t(658,"code"),e(659,"format"),i(),e(660," \xE9 um "),t(661,"code"),e(662,"Array<string>"),i(),e(663,":"),i(),t(664,"ul")(665,"li"),e(666,"Cada elemento do array representa uma propriedade do objeto."),i(),t(667,"li"),e(668,"Os valores dessas propriedades s\xE3o concatenados, separados pelo padr\xE3o ' - '."),i(),t(669,"li"),e(670,"Exemplo: Para "),t(671,"code"),e(672,'format: ["id", "name"]'),i(),e(673," e um objeto "),t(674,"code"),e(675,"{ id: 1, name: 'Carlos Diego' }"),i(),e(676,`,
o resultado ser\xE1 `),t(677,"code"),e(678,"'1 - Carlos Diego'"),i(),e(679,"."),i()()()()()(),t(680,"tr",13)(681,"td",14)(682,"div",15)(683,"span",16),e(684," gridColumns"),n(685,"br"),i()()(),t(686,"td",17)(687,"code",46),e(688,"number"),i()(),t(689,"td",20)(690,"em")(691,"strong"),e(692,"(opcional)"),i()(),t(693,"p"),e(694,"Tamanho de exibi\xE7\xE3o do campo em telas."),i(),t(695,"p"),e(696,"Deve ser usado o sistema de "),t(697,"strong"),e(698,"grid"),i(),e(699," do PO (1 ... 12 colunas)."),i(),t(700,"blockquote")(701,"p"),e(702,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),i()()()(),t(703,"tr",13)(704,"td",14)(705,"div",15)(706,"span",16),e(707," gridLgColumns"),n(708,"br"),i()()(),t(709,"td",17)(710,"code",46),e(711,"number"),i()(),t(712,"td",20)(713,"em")(714,"strong"),e(715,"(opcional)"),i()(),t(716,"p"),e(717,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),i(),t(718,"p"),e(719,"Deve ser usado o sistema de "),t(720,"strong"),e(721,"grid"),i(),e(722," do PO (1 ... 12 colunas)."),i(),t(723,"blockquote")(724,"p"),e(725,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(726,"code"),e(727,"gridColumns"),i(),e(728,"."),i()()()(),t(729,"tr",13)(730,"td",14)(731,"div",15)(732,"span",16),e(733," gridLgPull"),n(734,"br"),i()()(),t(735,"td",17)(736,"code",46),e(737,"number"),i()(),t(738,"td",20)(739,"em")(740,"strong"),e(741,"(opcional)"),i()(),t(742,"p"),e(743,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),i(),t(744,"p"),e(745,"Deve ser usado o sistema de "),t(746,"strong"),e(747,"grid"),i(),e(748," do PO (1 ... 11 colunas)."),i(),t(749,"blockquote")(750,"p"),e(751,"Esta propriedade n\xE3o funciona com a propriedade "),t(752,"code"),e(753,"gridColumns"),i(),e(754,". Deve-se especificar o tamanho da tela."),i()()()(),t(755,"tr",13)(756,"td",14)(757,"div",15)(758,"span",16),e(759," gridMdColumns"),n(760,"br"),i()()(),t(761,"td",17)(762,"code",46),e(763,"number"),i()(),t(764,"td",20)(765,"em")(766,"strong"),e(767,"(opcional)"),i()(),t(768,"p"),e(769,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),i(),t(770,"p"),e(771,"Deve ser usado o sistema de "),t(772,"strong"),e(773,"grid"),i(),e(774," do PO (1 ... 12 colunas)."),i(),t(775,"blockquote")(776,"p"),e(777,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(778,"code"),e(779,"gridColumns"),i(),e(780,"."),i()()()(),t(781,"tr",13)(782,"td",14)(783,"div",15)(784,"span",16),e(785," gridMdPull"),n(786,"br"),i()()(),t(787,"td",17)(788,"code",46),e(789,"number"),i()(),t(790,"td",20)(791,"em")(792,"strong"),e(793,"(opcional)"),i()(),t(794,"p"),e(795,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),i(),t(796,"p"),e(797,"Deve ser usado o sistema de "),t(798,"strong"),e(799,"grid"),i(),e(800," do PO (1 ... 11 colunas)."),i(),t(801,"blockquote")(802,"p"),e(803,"Esta propriedade n\xE3o funciona com a propriedade "),t(804,"code"),e(805,"gridColumns"),i(),e(806,". Deve-se especificar o tamanho da tela."),i()()()(),t(807,"tr",13)(808,"td",14)(809,"div",15)(810,"span",16),e(811," gridSmColumns"),n(812,"br"),i()()(),t(813,"td",17)(814,"code",46),e(815,"number"),i()(),t(816,"td",20)(817,"em")(818,"strong"),e(819,"(opcional)"),i()(),t(820,"p"),e(821,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),i(),t(822,"p"),e(823,"Deve ser usado o sistema de "),t(824,"strong"),e(825,"grid"),i(),e(826," do PO (1 ... 12 colunas)."),i(),t(827,"blockquote")(828,"p"),e(829,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(830,"code"),e(831,"gridColumns"),i(),e(832,"."),i()()()(),t(833,"tr",13)(834,"td",14)(835,"div",15)(836,"span",16),e(837," gridSmPull"),n(838,"br"),i()()(),t(839,"td",17)(840,"code",46),e(841,"number"),i()(),t(842,"td",20)(843,"em")(844,"strong"),e(845,"(opcional)"),i()(),t(846,"p"),e(847,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),i(),t(848,"p"),e(849,"Deve ser usado o sistema de "),t(850,"strong"),e(851,"grid"),i(),e(852," do PO (1 ... 11 colunas)."),i(),t(853,"blockquote")(854,"p"),e(855,"Esta propriedade n\xE3o funciona com a propriedade "),t(856,"code"),e(857,"gridColumns"),i(),e(858,". Deve-se especificar o tamanho da tela."),i()()()(),t(859,"tr",13)(860,"td",14)(861,"div",15)(862,"span",16),e(863," gridXlColumns"),n(864,"br"),i()()(),t(865,"td",17)(866,"code",46),e(867,"number"),i()(),t(868,"td",20)(869,"em")(870,"strong"),e(871,"(opcional)"),i()(),t(872,"p"),e(873,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),i(),t(874,"p"),e(875,"Deve ser usado o sistema de "),t(876,"strong"),e(877,"grid"),i(),e(878," do PO (1 ... 12 colunas)."),i(),t(879,"blockquote")(880,"p"),e(881,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(882,"code"),e(883,"gridColumns"),i(),e(884,"."),i()()()(),t(885,"tr",13)(886,"td",14)(887,"div",15)(888,"span",16),e(889," gridXlPull"),n(890,"br"),i()()(),t(891,"td",17)(892,"code",46),e(893,"number"),i()(),t(894,"td",20)(895,"em")(896,"strong"),e(897,"(opcional)"),i()(),t(898,"p"),e(899,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),i(),t(900,"p"),e(901,"Deve ser usado o sistema de "),t(902,"strong"),e(903,"grid"),i(),e(904," do PO (1 ... 11 colunas)."),i(),t(905,"blockquote")(906,"p"),e(907,"Esta propriedade n\xE3o funciona com a propriedade "),t(908,"code"),e(909,"gridColumns"),i(),e(910,". Deve-se especificar o tamanho da tela."),i()()()(),t(911,"tr",13)(912,"td",14)(913,"div",15)(914,"span",16),e(915," height"),n(916,"br"),i()()(),t(917,"td",17)(918,"code",21),e(919,"string"),i()(),t(920,"td",20)(921,"em")(922,"strong"),e(923,"(opcional)"),i()(),t(924,"p"),e(925,"Defini o texto alternativo descrevendo a imagem."),i(),t(926,"p"),e(927,"Exemplo de utiliza\xE7\xE3o:"),i(),t(928,"pre")(929,"code"),e(930,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'number'},
];`),i()(),t(931,"p")(932,"strong"),e(933,"Componentes compat\xEDveis:"),i(),t(934,"code"),e(935,"po-image"),i(),e(936,"."),i()()(),t(937,"tr",13)(938,"td",14)(939,"div",15)(940,"span",16),e(941," icon"),n(942,"br"),i()()(),t(943,"td",17)(944,"code",21),e(945,"string"),i()(),t(946,"td",20)(947,"em")(948,"strong"),e(949,"(opcional)"),i()(),t(950,"p"),e(951,"Define um \xEDcone que ser\xE1 exibido ao lado do valor para o campo do tipo "),t(952,"em"),e(953,"tag"),i(),e(954,"."),i(),t(955,"blockquote")(956,"p"),e(957,"Veja os valores v\xE1lidos na "),t(958,"a",47),e(959,"biblioteca de \xEDcones"),i(),e(960,"."),i()()()(),t(961,"tr",13)(962,"td",14)(963,"div",15)(964,"span",16),e(965," image"),n(966,"br"),i()()(),t(967,"td",17)(968,"code",23),e(969,"boolean"),i()(),t(970,"td",20)(971,"em")(972,"strong"),e(973,"(opcional)"),i()(),t(974,"p"),e(975,"Possibilita a utiliza\xE7\xE3o de imagem."),i(),t(976,"p"),e(977,"Exemplo de utiliza\xE7\xE3o:"),i(),t(978,"pre")(979,"code"),e(980,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];`),i()(),t(981,"ul")(982,"li")(983,"p"),e(984,"@default "),t(985,"code"),e(986,"false"),i()()(),t(987,"li")(988,"p")(989,"em"),e(990,"Componentes compat\xEDveis:*"),i(),t(991,"code"),e(992,"po-image"),i(),e(993,"."),i()()()()(),t(994,"tr",13)(995,"td",14)(996,"div",15)(997,"span",16),e(998," isArrayOrObject"),n(999,"br"),i()()(),t(1e3,"td",17)(1001,"code",23),e(1002,"boolean"),i()(),t(1003,"td",20)(1004,"em")(1005,"strong"),e(1006,"(opcional)"),i()(),t(1007,"p"),e(1008,"Define que a propriedade "),t(1009,"code"),e(1010,"property"),i(),e(1011," \xE9 uma lista ou um objeto."),i(),t(1012,"blockquote")(1013,"p"),e(1014,"Por padr\xE3o, espera-se que a lista ou o objeto esteja com as propriedades "),t(1015,"code"),e(1016,"label"),i(),e(1017," e "),t(1018,"code"),e(1019,"value"),i(),e(1020,`.
Caso estejam com nomes diferentes, deve-se usar as propriedades `),t(1021,"code"),e(1022,"fieldLabel"),i(),e(1023," e "),t(1024,"code"),e(1025,"fieldValue"),i(),e(1026,`.
\xC9 ignorada caso a propriedade `),t(1027,"code"),e(1028,"searchService"),i(),e(1029," esteja sendo utilizada."),i()()()(),t(1030,"tr",13)(1031,"td",14)(1032,"div",15)(1033,"span",16),e(1034," key"),n(1035,"br"),i()()(),t(1036,"td",17)(1037,"code",23),e(1038,"boolean"),i()(),t(1039,"td",20)(1040,"em")(1041,"strong"),e(1042,"(opcional)"),i()(),t(1043,"p"),e(1044,"Identificador"),i()()(),t(1045,"tr",13)(1046,"td",14)(1047,"div",15)(1048,"span",16),e(1049," label"),n(1050,"br"),i()()(),t(1051,"td",17)(1052,"code",21),e(1053,"string"),i()(),t(1054,"td",20)(1055,"em")(1056,"strong"),e(1057,"(opcional)"),i()(),t(1058,"p"),e(1059,"R\xF3tulo do campo exibido."),i(),t(1060,"p"),e(1061,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),t(1062,"code"),e(1063,"label"),i(),e(1064," o valor da propriedade "),t(1065,"code"),e(1066,"property"),i(),e(1067," com a primeira letra em mai\xFAsculo."),i()()(),t(1068,"tr",13)(1069,"td",14)(1070,"div",15)(1071,"span",16),e(1072," offsetColumns"),n(1073,"br"),i()()(),t(1074,"td",17)(1075,"code",46),e(1076,"number"),i()(),t(1077,"td",20)(1078,"em")(1079,"strong"),e(1080,"(opcional)"),i()(),t(1081,"p"),e(1082,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),i(),t(1083,"p"),e(1084,"Deve ser usado o sistema de "),t(1085,"strong"),e(1086,"grid"),i(),e(1087," do PO (1 ... 12 colunas)."),i(),t(1088,"blockquote")(1089,"p"),e(1090,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),i()()()(),t(1091,"tr",13)(1092,"td",14)(1093,"div",15)(1094,"span",16),e(1095," offsetLgColumns"),n(1096,"br"),i()()(),t(1097,"td",17)(1098,"code",46),e(1099,"number"),i()(),t(1100,"td",20)(1101,"em")(1102,"strong"),e(1103,"(opcional)"),i()(),t(1104,"p"),e(1105,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),i(),t(1106,"p"),e(1107,"Deve ser usado o sistema de "),t(1108,"strong"),e(1109,"grid"),i(),e(1110," do PO (1 ... 12 colunas)."),i(),t(1111,"blockquote")(1112,"p"),e(1113,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(1114,"code"),e(1115,"offsetColumns"),i(),e(1116,"."),i()()()(),t(1117,"tr",13)(1118,"td",14)(1119,"div",15)(1120,"span",16),e(1121," offsetMdColumns"),n(1122,"br"),i()()(),t(1123,"td",17)(1124,"code",46),e(1125,"number"),i()(),t(1126,"td",20)(1127,"em")(1128,"strong"),e(1129,"(opcional)"),i()(),t(1130,"p"),e(1131,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),i(),t(1132,"p"),e(1133,"Deve ser usado o sistema de "),t(1134,"strong"),e(1135,"grid"),i(),e(1136," do PO (1 ... 12 colunas)."),i(),t(1137,"blockquote")(1138,"p"),e(1139,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(1140,"code"),e(1141,"offsetColumns"),i(),e(1142,"."),i()()()(),t(1143,"tr",13)(1144,"td",14)(1145,"div",15)(1146,"span",16),e(1147," offsetSmColumns"),n(1148,"br"),i()()(),t(1149,"td",17)(1150,"code",46),e(1151,"number"),i()(),t(1152,"td",20)(1153,"em")(1154,"strong"),e(1155,"(opcional)"),i()(),t(1156,"p"),e(1157,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),i(),t(1158,"p"),e(1159,"Deve ser usado o sistema de "),t(1160,"strong"),e(1161,"grid"),i(),e(1162," do PO (1 ... 12 colunas)."),i(),t(1163,"blockquote")(1164,"p"),e(1165,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(1166,"code"),e(1167,"offsetColumns"),i(),e(1168,"."),i()()()(),t(1169,"tr",13)(1170,"td",14)(1171,"div",15)(1172,"span",16),e(1173," offsetXlColumns"),n(1174,"br"),i()()(),t(1175,"td",17)(1176,"code",46),e(1177,"number"),i()(),t(1178,"td",20)(1179,"em")(1180,"strong"),e(1181,"(opcional)"),i()(),t(1182,"p"),e(1183,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),i(),t(1184,"p"),e(1185,"Deve ser usado o sistema de "),t(1186,"strong"),e(1187,"grid"),i(),e(1188," do PO (1 ... 12 colunas)."),i(),t(1189,"blockquote")(1190,"p"),e(1191,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(1192,"code"),e(1193,"offsetColumns"),i(),e(1194,"."),i()()()(),t(1195,"tr",13)(1196,"td",14)(1197,"div",15)(1198,"span",16),e(1199," options"),n(1200,"br"),i()()(),t(1201,"td",17)(1202,"code",48),e(1203,"Array<{ label: string; value: string "),i(),t(1204,"code",49),e(1205,` number;
}>`),i()(),t(1206,"td",20)(1207,"em")(1208,"strong"),e(1209,"(opcional)"),i()(),t(1210,"p"),e(1211,`Lista de op\xE7\xF5es que podem ser vinculadas \xE0 propriedade p-value.
Quando uma op\xE7\xE3o de valor \xE9 passada, sua propriedade label ser\xE1 atribu\xEDda \xE0 propriedade p-value.`),i(),t(1212,"p"),e(1213,"Exemplo de utiliza\xE7\xE3o:"),i(),t(1214,"pre")(1215,"code"),e(1216,`fields = [
  {
    property: 'name', options: [
      {label: 'Anna', value: '1'},
      {label: 'Jhon', value: '2'},
      {label: 'Mark', value: '3'}
    ]
  }
];`),i()(),t(1217,"pre")(1218,"code"),e(1219,`<!-- Passando o valor 2 referente ao Jhon -->
<po-dynamic-view [p-fields]="fields" [p-value]="{ name: '2' }"> </po-dynamic-view>`),i()()()(),t(1220,"tr",13)(1221,"td",14)(1222,"div",15)(1223,"span",16),e(1224," optionsMulti"),n(1225,"br"),i()()(),t(1226,"td",17)(1227,"code",23),e(1228,"boolean"),i()(),t(1229,"td",20)(1230,"em")(1231,"strong"),e(1232,"(opcional)"),i()(),t(1233,"p"),e(1234,`Habilita a visualiza\xE7\xE3o de m\xFAltiplos itens.
\xDAtil para exibir dados em formatos semelhantes aos componentes que suportam sele\xE7\xE3o m\xFAltipla.`),i()()(),t(1235,"tr",13)(1236,"td",14)(1237,"div",15)(1238,"span",16),e(1239," optionsService"),n(1240,"br"),i()()(),t(1241,"td",17)(1242,"code",21),e(1243,"string "),i(),t(1244,"code",50),e(1245," PoComboFilter "),i(),t(1246,"code",51),e(1247," PoMultiselectFilter"),i()(),t(1248,"td",20)(1249,"em")(1250,"strong"),e(1251,"(opcional)"),i()(),t(1252,"p"),e(1253,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),t(1254,"strong"),e(1255,"Importante"),i()(),t(1256,"blockquote")(1257,"p"),e(1258,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),t(1259,"a",52),e(1260,"guia de API do PO UI"),i(),e(1261,"."),i()()()(),t(1262,"tr",13)(1263,"td",14)(1264,"div",15)(1265,"span",16),e(1266," order"),n(1267,"br"),i()()(),t(1268,"td",17)(1269,"code",46),e(1270,"number"),i()(),t(1271,"td",20)(1272,"em")(1273,"strong"),e(1274,"(opcional)"),i()(),t(1275,"p"),e(1276,"Informa a ordem de exibi\xE7\xE3o do campo."),i(),t(1277,"p"),e(1278,"Exemplo de utiliza\xE7\xE3o:"),i(),t(1279,"pre")(1280,"code"),e(1281,`[
  { property: 'test 1', order: 2 },
  { property: 'test 2', order: 1 },
  { property: 'test 3' },
  { property: 'test 4', order: 3 }
];`),i()(),t(1282,"p"),e(1283,"Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:"),i(),t(1284,"pre")(1285,"code"),e(1286,`[
  { property: 'test 2', order: 1 },
  { property: 'test 1', order: 2 },
  { property: 'test 4', order: 3 },
  { property: 'test 3' }
];`),i()(),t(1287,"p"),e(1288,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),i(),t(1289,"p"),e(1290,"Campos sem "),t(1291,"code"),e(1292,"order"),i(),e(1293,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),i()()(),t(1294,"tr",13)(1295,"td",14)(1296,"div",15)(1297,"span",16),e(1298," params"),n(1299,"br"),i()()(),t(1300,"td",17)(1301,"code",53),e(1302,"any"),i()(),t(1303,"td",20)(1304,"em")(1305,"strong"),e(1306,"(opcional)"),i()(),t(1307,"p"),e(1308,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca "),t(1309,"code"),e(1310,"searchService"),i(),e(1311," ou "),t(1312,"code"),e(1313,"optionsService"),i(),e(1314,`
utilizadas pelos campos que dependem de servi\xE7os para carregar seus dados.`),i(),t(1315,"p"),e(1316,"Por exemplo, para o par\xE2metro "),t(1317,"code"),e(1318,"{ age: 23 }"),i(),e(1319," a URL da requisi\xE7\xE3o ficaria:"),i(),t(1320,"p")(1321,"code"),e(1322,"url + /1?age=23"),i()()()(),t(1323,"tr",13)(1324,"td",14)(1325,"div",15)(1326,"span",16),e(1327," property"),n(1328,"br"),i()()(),t(1329,"td",17)(1330,"code",21),e(1331,"string"),i()(),t(1332,"td",20)(1333,"p"),e(1334,"Nome de refer\xEAncia do campo."),i()()(),t(1335,"tr",13)(1336,"td",14)(1337,"div",15)(1338,"span",16),e(1339," searchService"),n(1340,"br"),i()()(),t(1341,"td",17)(1342,"code",21),e(1343,"string "),i(),t(1344,"code",54),e(1345," PoDynamicViewRequest"),i()(),t(1346,"td",20)(1347,"em")(1348,"strong"),e(1349,"(opcional)"),i()(),t(1350,"p"),e(1351,`Servi\xE7o customizado para um campo em espec\xEDfico.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoDynamicViewRequest.
`),t(1352,"strong"),e(1353,"Importante:"),i()(),t(1354,"blockquote")(1355,"p"),e(1356,"A propriedade "),t(1357,"code"),e(1358,"property"),i(),e(1359,` deve receber um valor v\xE1lido independente de sua utiliza\xE7\xE3o para
execu\xE7\xE3o correta.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),t(1360,"a",52),e(1361,"guia de API do PO UI"),i(),e(1362,"."),i()()()(),t(1363,"tr",13)(1364,"td",14)(1365,"div",15)(1366,"span",16),e(1367," tag"),n(1368,"br"),i()()(),t(1369,"td",17)(1370,"code",23),e(1371,"boolean"),i()(),t(1372,"td",20)(1373,"em")(1374,"strong"),e(1375,"(opcional)"),i()(),t(1376,"p"),e(1377,"Indica se o campo ser\xE1 um "),t(1378,"code"),e(1379,"po-tag"),i(),e(1380,"."),i()()(),t(1381,"tr",13)(1382,"td",14)(1383,"div",15)(1384,"span",16),e(1385," textColor"),n(1386,"br"),i()()(),t(1387,"td",17)(1388,"code",21),e(1389,"string"),i()(),t(1390,"td",20)(1391,"em")(1392,"strong"),e(1393,"(opcional)"),i()(),t(1394,"p"),e(1395,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),i(),t(1396,"ul")(1397,"li"),e(1398,"Hexadeximal, por exemplo "),t(1399,"code"),e(1400,"#c64840"),i(),e(1401,";"),i(),t(1402,"li"),e(1403,"RGB, como "),t(1404,"code"),e(1405,"rgb(0, 0, 165)"),i(),e(1406,";"),i(),t(1407,"li"),e(1408,"O nome da cor, por exemplo "),t(1409,"code"),e(1410,"blue"),i(),e(1411,";"),i()()()(),t(1412,"tr",13)(1413,"td",14)(1414,"div",15)(1415,"span",16),e(1416," type"),n(1417,"br"),i()()(),t(1418,"td",17)(1419,"code",21),e(1420,"string "),i(),t(1421,"code",55),e(1422," PoDynamicFieldType"),i()(),t(1423,"td",20)(1424,"em")(1425,"strong"),e(1426,"(opcional)"),i()(),t(1427,"p"),e(1428,"Tipo do valor campo."),i(),t(1429,"p"),e(1430,"Valores v\xE1lidos:"),i(),t(1431,"ul")(1432,"li")(1433,"code"),e(1434,"boolean"),i(),e(1435,": Valores "),t(1436,"em"),e(1437,"booleanos"),i(),e(1438,"."),i(),t(1439,"li")(1440,"code"),e(1441,"currency"),i(),e(1442,": Valores monet\xE1rios."),i(),t(1443,"li")(1444,"code"),e(1445,"decimal"),i(),e(1446,": Valores decimais."),i(),t(1447,"li")(1448,"code"),e(1449,"date"),i(),e(1450,": Valores de datas."),t(1451,"ul")(1452,"li"),e(1453,"Aceita os tipos "),t(1454,"strong"),e(1455,"string"),i(),e(1456," e "),t(1457,"strong"),e(1458,"Date"),i(),e(1459,` padr\xE3o do Javascript,
por exemplo: `),t(1460,"code"),e(1461,"'2017-11-28'"),i(),e(1462," ou "),t(1463,"code"),e(1464,"new Date(2017, 10, 28)"),i(),e(1465,"."),i()()(),t(1466,"li")(1467,"code"),e(1468,"dateTime"),i(),e(1469,": Valor de data com hor\xE1rio."),t(1470,"ul")(1471,"li"),e(1472,"Aceita o tipo "),t(1473,"em"),e(1474,"string"),i(),e(1475," no formato "),t(1476,"strong"),e(1477,"ISO-8601"),i(),e(1478," extendido "),t(1479,"strong"),e(1480,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),i(),e(1481,`
e o tipo `),t(1482,"strong"),e(1483,"Date"),i(),e(1484," padr\xE3o do Javascript, por exemplo: "),t(1485,"code"),e(1486,"'2017-11-28T00:00:00-02:00'"),i(),e(1487," ou "),t(1488,"code"),e(1489,"new Date(2017, 10, 28)"),i(),e(1490,"."),i()()(),t(1491,"li")(1492,"code"),e(1493,"number"),i(),e(1494,": Valores num\xE9ricos."),i(),t(1495,"li")(1496,"code"),e(1497,"string"),i(),e(1498,": Textos."),i(),t(1499,"li")(1500,"code"),e(1501,"time"),i(),e(1502,": Valor do hor\xE1rio."),t(1503,"ul")(1504,"li"),e(1505,"Aceita o tipo "),t(1506,"strong"),e(1507,"string"),i(),e(1508," nos formatos "),t(1509,"strong"),e(1510,"'HH:mm:ss'"),i(),e(1511," ou "),t(1512,"strong"),e(1513,"'HH:mm:ss.ffffff'"),i(),e(1514,", por exemplo: "),t(1515,"code"),e(1516,"'23:12:45'"),i(),e(1517,"."),i()()()()()(),t(1518,"tr",13)(1519,"td",14)(1520,"div",15)(1521,"span",16),e(1522," visible"),n(1523,"br"),i()()(),t(1524,"td",17)(1525,"code",23),e(1526,"boolean"),i()(),t(1527,"td",20)(1528,"em")(1529,"strong"),e(1530,"(opcional)"),i()(),t(1531,"p"),e(1532,"Indica se o campo ser\xE1 vis\xEDvel."),i()()()()())},dependencies:[x],encapsulation:2})}return o})();var K=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(V(z),V(B))};static \u0275cmp=d({type:o,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title"," Dynamic View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(a,l){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),n(3,"sample-po-dynamic-view-doc"),i(),t(4,"po-tab",3),n(5,"sample-po-dynamic-view-basic-view")(6,"sample-po-dynamic-view-employee-view")(7,"sample-po-dynamic-view-employee-on-load-view")(8,"sample-po-dynamic-view-container-view"),i()()()),a&2&&(p("p-actions",l.actions),m(2),p("p-active",l.activeTab.includes("doc")),m(2),p("p-hide",l.hidePoWebSample)("p-active",l.activeTab.includes("web")))},dependencies:[v,u,E,R,J,U,X,Q],encapsulation:2})}return o})();var xe=[{path:"",component:K}],Y=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=D({type:o});static \u0275inj=C({imports:[A.forChild(xe),A]})}return o})();var Qe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=D({type:o});static \u0275inj=C({imports:[N,Y]})}return o})();export{Qe as DocPoDynamicViewModule};
