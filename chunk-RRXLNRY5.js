import{$ as O,$a as M,$c as oe,Bc as ie,Ca as G,Da as J,Ea as K,F as c,Fa as X,Fc as j,G as d,Ga as i,Ia as v,Ka as E,La as S,Lb as I,Lc as z,Ma as g,Mb as W,Mc as P,Na as B,Nb as F,Ob as R,Od as le,Pa as _,Pb as A,T as s,U as y,Ua as Y,Va as Z,Wb as ee,Xd as w,Yb as te,Yd as x,Zb as H,_ as f,ad as C,gd as ne,ha as u,id as ae,ka as T,lb as $,md as re,na as e,oa as t,oc as k,pa as p,re as L,sd as Q,se as pe,ta as V,ua as b,y as q}from"./chunk-ODUOVNEW.js";var se=(()=>{class a{poNotification;constructor(r){this.poNotification=r}static \u0275fac=function(n){return new(n||a)(y(C))};static \u0275cmp=f({type:a,selectors:[["sample-po-notification-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-label","Open Notification",3,"p-click"]],template:function(n,o){n&1&&(e(0,"po-button",0),b("p-click",function(){return o.poNotification.success("PO Notification!")}),t())},dependencies:[k],encapsulation:2})}return a})();var Ce=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-notification-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(p(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Notification Basic"),t(),e(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),p(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-notification-basic/sample-po-notification-basic.component.html"),t(),e(13,"pre",7),i(14,`<po-button p-label="Open Notification" (p-click)="poNotification.success('PO Notification!')"> </po-button>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-notification-basic/sample-po-notification-basic.component.ts"),t(),e(19,"pre",9),i(20,`import { Component } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-notification-basic',
  templateUrl: './sample-po-notification-basic.component.html',
  standalone: false
})
export class SamplePoNotificationBasicComponent {
  constructor(public poNotification: PoNotificationService) {}
}
`),t()()()()(),e(21,"div",10),p(22,"sample-po-notification-basic"),t(),p(23,"hr")),n&2&&(s(5),T("po-icon "+o.sampleCodeButtonIcon),s(),v(" ",o.sampleCodeButtonLabel,""),s(),u("ngClass",_(4,Ce,o.hideSampleCodeTabs)))},dependencies:[M,L,w,x,se],encapsulation:2})}return a})();var de=(()=>{class a{poNotification;poModal;action;actionLabel;message;orientation;type;duration;orientationOptions=[{label:"Top",value:z.Top},{label:"Bottom",value:z.Bottom}];typeOptions=[{label:"Success",value:P.Success},{label:"Error",value:P.Error},{label:"Warning",value:P.Warning},{label:"Information",value:P.Information}];constructor(r){this.poNotification=r}ngOnInit(){this.restore()}restore(){this.message="PO Notification",this.type=void 0,this.orientation=void 0,this.action=!1,this.actionLabel="",this.duration=void 0}showNotification(){let r={message:this.message,orientation:this.orientation,action:void 0,actionLabel:this.actionLabel,duration:this.duration};switch(this.action&&(r.action=()=>this.poModal.open()),this.type){case P.Success:{this.poNotification.success(r);break}case P.Error:{this.poNotification.error(r);break}case P.Warning:{this.poNotification.warning(r);break}case P.Information:{this.poNotification.information(r);break}default:{this.poNotification.success(r);break}}}static \u0275fac=function(n){return new(n||a)(y(C))};static \u0275cmp=f({type:a,selectors:[["sample-po-notification-labs"]],viewQuery:function(n,o){if(n&1&&G(j,7),n&2){let m;J(m=K())&&(o.poModal=m.first)}},standalone:!1,features:[B([C])],decls:15,vars:8,consts:[["f","ngForm"],["p-label","Open Notification",3,"p-click"],[1,"po-row"],["name","type","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","orientation","p-label","Orientation",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","message","p-clean","","p-label","Message","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","duration","p-clean","","p-label","Duration",1,"po-md-6",3,"ngModelChange","ngModel"],["name","action","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-clean","","p-label","Action Label",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-title","PO Notification"]],template:function(n,o){if(n&1){let m=V();e(0,"po-button",1),b("p-click",function(){return c(m),d(o.showNotification())}),t(),p(1,"hr"),e(2,"form",null,0)(4,"div",2)(5,"po-radio-group",3),g("ngModelChange",function(l){return c(m),S(o.type,l)||(o.type=l),d(l)}),t(),e(6,"po-radio-group",4),g("ngModelChange",function(l){return c(m),S(o.orientation,l)||(o.orientation=l),d(l)}),t()(),e(7,"po-input",5),g("ngModelChange",function(l){return c(m),S(o.message,l)||(o.message=l),d(l)}),t(),e(8,"po-number",6),g("ngModelChange",function(l){return c(m),S(o.duration,l)||(o.duration=l),d(l)}),t(),e(9,"po-switch",7),g("ngModelChange",function(l){return c(m),S(o.action,l)||(o.action=l),d(l)}),t(),e(10,"po-input",8),g("ngModelChange",function(l){return c(m),S(o.actionLabel,l)||(o.actionLabel=l),d(l)}),t(),e(11,"div",2)(12,"po-button",9),b("p-click",function(){return c(m),d(o.restore())}),t()()(),e(13,"po-modal",10),i(14," Notification Action "),t()}n&2&&(s(5),E("ngModel",o.type),u("p-options",o.typeOptions),s(),E("ngModel",o.orientation),u("p-options",o.orientationOptions),s(),E("ngModel",o.message),s(),E("ngModel",o.duration),s(),E("ngModel",o.action),s(),E("ngModel",o.actionLabel))},dependencies:[A,I,W,R,F,k,ie,re,Q,oe,j],encapsulation:2})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-notification-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(p(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Notification Labs"),t(),e(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),p(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-notification-labs/sample-po-notification-labs.component.html"),t(),e(13,"pre",7),i(14,`<po-button (p-click)="showNotification()" p-label="Open Notification"> </po-button>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-radio-group class="po-md-6" name="type" [(ngModel)]="type" p-label="Type" [p-options]="typeOptions">
    </po-radio-group>

    <po-radio-group
      class="po-md-6"
      name="orientation"
      [(ngModel)]="orientation"
      p-label="Orientation"
      [p-options]="orientationOptions"
    >
    </po-radio-group>
  </div>

  <po-input class="po-md-6" name="message" [(ngModel)]="message" p-clean p-label="Message" p-required> </po-input>

  <po-number class="po-md-6" name="duration" [(ngModel)]="duration" p-clean p-label="Duration"> </po-number>

  <po-switch class="po-md-6" name="action" [(ngModel)]="action" p-label="Action"> </po-switch>

  <po-input class="po-md-6" name="actionLabel" [(ngModel)]="actionLabel" p-clean p-label="Action Label"> </po-input>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>

<po-modal p-title="PO Notification"> Notification Action </po-modal>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-notification-labs/sample-po-notification-labs.component.ts"),t(),e(19,"pre",9),i(20,`import { Component, ViewChild, OnInit } from '@angular/core';

import {
  PoModalComponent,
  PoNotification,
  PoNotificationService,
  PoToasterOrientation,
  PoToasterType,
  PoRadioGroupOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-notification-labs',
  templateUrl: './sample-po-notification-labs.component.html',
  providers: [PoNotificationService],
  standalone: false
})
export class SamplePoNotificationLabsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  action: boolean;
  actionLabel: string;
  message: string;
  orientation: number;
  type: PoToasterType;
  duration: number;

  public readonly orientationOptions: Array<PoRadioGroupOption> = [
    { label: 'Top', value: PoToasterOrientation.Top },
    { label: 'Bottom', value: PoToasterOrientation.Bottom }
  ];

  public readonly typeOptions: Array<PoRadioGroupOption> = [
    { label: 'Success', value: PoToasterType.Success },
    { label: 'Error', value: PoToasterType.Error },
    { label: 'Warning', value: PoToasterType.Warning },
    { label: 'Information', value: PoToasterType.Information }
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.message = 'PO Notification';
    this.type = undefined;
    this.orientation = undefined;
    this.action = false;
    this.actionLabel = '';
    this.duration = undefined;
  }

  showNotification() {
    const poNotification: PoNotification = {
      message: this.message,
      orientation: this.orientation,
      action: undefined,
      actionLabel: this.actionLabel,
      duration: this.duration
    };

    if (this.action) {
      poNotification.action = () => this.poModal.open();
    }

    switch (this.type) {
      case PoToasterType.Success: {
        this.poNotification.success(poNotification);
        break;
      }
      case PoToasterType.Error: {
        this.poNotification.error(poNotification);
        break;
      }
      case PoToasterType.Warning: {
        this.poNotification.warning(poNotification);
        break;
      }
      case PoToasterType.Information: {
        this.poNotification.information(poNotification);
        break;
      }
      default: {
        this.poNotification.success(poNotification);
        break;
      }
    }
  }
}
`),t()()()()(),e(21,"div",10),p(22,"sample-po-notification-labs"),t(),p(23,"hr")),n&2&&(s(5),T("po-icon "+o.sampleCodeButtonIcon),s(),v(" ",o.sampleCodeButtonLabel,""),s(),u("ngClass",_(4,ve,o.hideSampleCodeTabs)))},dependencies:[M,L,w,x,de],encapsulation:2})}return a})();var fe=(()=>{class a{poNotification;name;price;product;quantity;stock;totalPrice;totalPriceSum=2500;columns=[{property:"productID",label:"Id"},{property:"productName",label:"Product"},{property:"quantity",label:"Quantity"},{property:"price",label:"Price",type:"currency",format:"BRL"},{property:"total",label:"Total Price",type:"currency",format:"BRL"}];products=[{productID:"004",productName:"Notebook",quantity:2,price:1250,total:2500}];productDetailsList=[{id:"001",price:50,stock:10},{id:"002",price:210,stock:5},{id:"003",price:998,stock:2},{id:"004",price:1250,stock:1}];productOptions=[{value:"001",label:"p-Shirt Blue"},{value:"002",label:"Clock"},{value:"003",label:"Cellphone"},{value:"004",label:"Notebook"}];constructor(r){this.poNotification=r}addCart(){if(this.checkQuantity(),this.productOptions&&this.quantity>0){let r=this.products.findIndex(n=>n.productID===this.product);r>=0?(this.products[r].quantity+=this.quantity,this.products[r].total+=this.totalPrice):this.products.push({productID:this.product,productName:this.name,quantity:this.quantity,price:this.price,total:this.totalPrice}),this.totalPriceSum+=this.totalPrice,this.poNotification.success("Order included successfully!"),this.stockUpdate(this.product,this.quantity),this.clearFields()}}checkProduct(){let r=this.productDetailsList.findIndex(n=>n.id===this.product);if(r>=0){let n=this.productDetailsList[r];this.price=n.price,this.stock=n.stock,this.name=this.productOptions[r].label}}checkQuantity(){this.quantity>this.stock?this.poNotification.error("Quantity not available in stock"):this.totalValue()}clearFields(){this.product="",this.price=0,this.quantity=0,this.stock=0,this.totalPrice=0}stockUpdate(r,n){let o=this.productDetailsList.find(m=>m.id===r);o.stock=o.stock-n}totalValue(){this.totalPrice=this.quantity*this.price}static \u0275fac=function(n){return new(n||a)(y(C))};static \u0275cmp=f({type:a,selectors:[["sample-po-notification-sales"]],standalone:!1,features:[B([C])],decls:17,vars:14,consts:[["f","ngForm"],[1,"po-row"],["name","product","p-label","Product","p-placeholder","Select a Product","p-required","",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","quantity","p-label","Quantity","p-min","0","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","p-change","ngModel","p-max"],["name","price","p-disabled","","p-label","Price","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","stock","p-disabled","","p-label","Stock","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","totalPrice","p-disabled","","p-label","Total Price","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["p-label","Add To Cart",1,"po-md-3",3,"p-click","p-disabled"],["p-striped","true",3,"p-columns","p-items","p-hide-table-search"],[1,"po-pull-right","po-lg-12"],[1,"po-pull-right","po-font-subtitle"]],template:function(n,o){if(n&1){let m=V();e(0,"form",null,0)(2,"div",1)(3,"po-combo",2),g("ngModelChange",function(l){return c(m),S(o.product,l)||(o.product=l),d(l)}),b("p-change",function(){return c(m),d(o.checkProduct())}),t(),e(4,"po-number",3),g("ngModelChange",function(l){return c(m),S(o.quantity,l)||(o.quantity=l),d(l)}),b("p-change",function(){return c(m),d(o.checkQuantity())}),t(),e(5,"po-number",4),g("ngModelChange",function(l){return c(m),S(o.price,l)||(o.price=l),d(l)}),t(),e(6,"po-number",5),g("ngModelChange",function(l){return c(m),S(o.stock,l)||(o.stock=l),d(l)}),t(),e(7,"po-number",6),g("ngModelChange",function(l){return c(m),S(o.totalPrice,l)||(o.totalPrice=l),d(l)}),t()(),e(8,"div",1)(9,"po-button",7),b("p-click",function(){return c(m),d(o.addCart())}),t()()(),p(10,"hr")(11,"po-table",8),e(12,"div",1)(13,"div",9)(14,"span",10),i(15),Y(16,"currency"),t()()()}if(n&2){let m=X(1);s(3),E("ngModel",o.product),u("p-options",o.productOptions),s(),E("ngModel",o.quantity),u("p-max",o.stock),s(),E("ngModel",o.price),s(),E("ngModel",o.stock),s(),E("ngModel",o.totalPrice),s(2),u("p-disabled",m.form.invalid||o.stock===0),s(2),u("p-columns",o.columns)("p-items",o.products)("p-hide-table-search",!1),s(4),v("Total: R",Z(16,12,o.totalPriceSum)," ")}},dependencies:[A,I,W,R,F,k,ae,Q,ne,$],encapsulation:2})}return a})();var Te=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-notification-sales-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(p(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Notification - Sales"),t(),e(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),p(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-notification-sales/sample-po-notification-sales.component.html"),t(),e(13,"pre",7),i(14,`<form #f="ngForm">
  <div class="po-row">
    <po-combo
      class="po-md-4"
      name="product"
      [(ngModel)]="product"
      p-label="Product"
      p-placeholder="Select a Product"
      p-required
      [p-options]="productOptions"
      (p-change)="checkProduct()"
    >
    </po-combo>

    <po-number
      class="po-md-2"
      name="quantity"
      [(ngModel)]="quantity"
      p-label="Quantity"
      p-min="0"
      p-placeholder="0"
      p-required
      [p-max]="stock"
      (p-change)="checkQuantity()"
    >
    </po-number>

    <po-number class="po-md-2" name="price" [(ngModel)]="price" p-disabled p-label="Price" p-placeholder="0" p-required>
    </po-number>

    <po-number class="po-md-2" name="stock" [(ngModel)]="stock" p-disabled p-label="Stock" p-placeholder="0" p-required>
    </po-number>

    <po-number
      class="po-md-2"
      name="totalPrice"
      [(ngModel)]="totalPrice"
      p-disabled
      p-label="Total Price"
      p-placeholder="0"
      p-required
    >
    </po-number>
  </div>
  <div class="po-row">
    <po-button class="po-md-3" p-label="Add To Cart" [p-disabled]="f.form.invalid || stock === 0" (p-click)="addCart()">
    </po-button>
  </div>
</form>

<hr />

<po-table p-striped="true" [p-columns]="columns" [p-items]="products" [p-hide-table-search]="false"> </po-table>

<div class="po-row">
  <div class="po-pull-right po-lg-12">
    <span class="po-pull-right po-font-subtitle">Total: R{ { totalPriceSum | currency }} </span>
  </div>
</div>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-notification-sales/sample-po-notification-sales.component.ts"),t(),e(19,"pre",9),i(20,`import { Component } from '@angular/core';

import { PoComboOption, PoNotificationService, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-notification-sales',
  templateUrl: './sample-po-notification-sales.component.html',
  providers: [PoNotificationService],
  standalone: false
})
export class SamplePoNotificationSalesComponent {
  name: string;
  price: number;
  product: string;
  quantity: number;
  stock: number;
  totalPrice: number;
  totalPriceSum = 2500;

  readonly columns: Array<PoTableColumn> = [
    { property: 'productID', label: 'Id' },
    { property: 'productName', label: 'Product' },
    { property: 'quantity', label: 'Quantity' },
    { property: 'price', label: 'Price', type: 'currency', format: 'BRL' },
    { property: 'total', label: 'Total Price', type: 'currency', format: 'BRL' }
  ];

  products: Array<any> = [{ productID: '004', productName: 'Notebook', quantity: 2, price: 1250, total: 2500 }];

  productDetailsList: Array<any> = [
    { id: '001', price: 50, stock: 10 },
    { id: '002', price: 210, stock: 5 },
    { id: '003', price: 998, stock: 2 },
    { id: '004', price: 1250, stock: 1 }
  ];

  readonly productOptions: Array<PoComboOption> = [
    { value: '001', label: 'p-Shirt Blue' },
    { value: '002', label: 'Clock' },
    { value: '003', label: 'Cellphone' },
    { value: '004', label: 'Notebook' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  addCart() {
    this.checkQuantity();

    if (this.productOptions && this.quantity > 0) {
      const itemIndex = this.products.findIndex(item => item.productID === this.product);

      if (itemIndex >= 0) {
        this.products[itemIndex].quantity += this.quantity;
        this.products[itemIndex].total += this.totalPrice;
      } else {
        this.products.push({
          productID: this.product,
          productName: this.name,
          quantity: this.quantity,
          price: this.price,
          total: this.totalPrice
        });
      }

      this.totalPriceSum += this.totalPrice;
      this.poNotification.success('Order included successfully!');
      this.stockUpdate(this.product, this.quantity);
      this.clearFields();
    }
  }

  checkProduct() {
    const selectedProductIndex = this.productDetailsList.findIndex(product => product.id === this.product);

    if (selectedProductIndex >= 0) {
      const productDetails = this.productDetailsList[selectedProductIndex];
      this.price = productDetails.price;
      this.stock = productDetails.stock;
      this.name = this.productOptions[selectedProductIndex].label;
    }
  }

  checkQuantity() {
    if (this.quantity > this.stock) {
      this.poNotification.error('Quantity not available in stock');
    } else {
      this.totalValue();
    }
  }

  clearFields() {
    this.product = '';
    this.price = 0;
    this.quantity = 0;
    this.stock = 0;
    this.totalPrice = 0;
  }

  stockUpdate(selectedProduct: string, qtd: number) {
    const item = this.productDetailsList.find(product => product.id === selectedProduct);
    item.stock = item.stock - qtd;
  }

  totalValue() {
    this.totalPrice = this.quantity * this.price;
  }
}
`),t()()()()(),e(21,"div",10),p(22,"sample-po-notification-sales"),t(),p(23,"hr")),n&2&&(s(5),T("po-icon "+o.sampleCodeButtonIcon),s(),v(" ",o.sampleCodeButtonLabel,""),s(),u("ngClass",_(4,Te,o.hideSampleCodeTabs)))},dependencies:[M,L,w,x,fe],encapsulation:2})}return a})();var be=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-notification-doc"]],standalone:!1,decls:375,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoNotification"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoToasterMode"],["pan","",1,"docs-api-property-type","PoToasterOrientation"],["pan","",1,"docs-api-property-type","boolean"]],template:function(n,o){n&1&&(e(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoNotificationModule } from '@po-ui/ng-components';"),t()(),p(4,"div",2),e(5,"h3",3),i(6,"Services"),t(),e(7,"h4",4)(8,"code",5),i(9,"PoNotificationService"),t()(),e(10,"div",2)(11,"p"),i(12,"Servi\xE7o respons\xE1vel por emitir as notifica\xE7\xF5es em uma p\xE1gina. S\xE3o disponibilizados os m\xE9todos de:"),t(),e(13,"ul")(14,"li"),i(15,"success,"),t(),e(16,"li"),i(17,"warning,"),t(),e(18,"li"),i(19,"error,"),t(),e(20,"li"),i(21,"information."),t()(),e(22,"p"),i(23,"Cada um destes m\xE9todos recebe como par\xE2metro o objeto "),e(24,"code"),i(25,"PoNotification"),t(),i(26,` que cont\xE9m os dados da mensagem e o
objeto ViewContainerRef que \xE9 a representa\xE7\xE3o do container do componente onde ser\xE1 criada a notifica\xE7\xE3o.`),t(),e(27,"p"),i(28,`Estas notifica\xE7\xF5es ser\xE3o exibidas durante 9 segundos por padr\xE3o, podendo ser alterada conforme necessidade.
Ap\xF3s este tempo a mesma \xE9 removida automaticamente.`),t(),e(29,"p"),i(30,"Notifica\xE7\xF5es com a\xE7\xE3o ou notifica\xE7\xF5es de "),e(31,"code"),i(32,"erro"),t(),i(33," permanecer\xE3o em tela at\xE9 o usu\xE1rio fecha-l\xE1 ou clicar na a\xE7\xE3o."),t(),e(34,"p"),i(35,"O servi\xE7o possui um limite de at\xE9 5 notifica\xE7\xF5es por vez, a partir do sexto a primeira notifica\xE7\xE3o ser\xE1 removida dando lugar a nova. "),t()(),e(36,"h3",6),i(37,"M\xE9todos"),t(),e(38,"table",7)(39,"tr",8)(40,"th",9)(41,"div",10)(42,"h4")(43,"span",11),i(44," success "),t()()()()(),e(45,"tr",12)(46,"td",12)(47,"p"),i(48,"Emite uma notifica\xE7\xE3o de sucesso."),t()()()(),e(49,"h5")(50,"b"),i(51,"Par\xE2metros"),t()(),e(52,"table",13)(53,"tr",14)(54,"th",15),i(55,"Nome"),t(),e(56,"th",15),i(57,"Tipo"),t(),e(58,"th",15),i(59,"Descri\xE7\xE3o"),t()(),e(60,"tr",8)(61,"td",16),i(62," notification"),t(),e(63,"td",17)(64,"code",18),i(65," PoNotification "),t(),e(66,"code",19),i(67," string "),t()(),e(68,"td",12)(69,"p"),i(70,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o."),t()()()(),p(71,"br"),e(72,"table",7)(73,"tr",8)(74,"th",9)(75,"div",10)(76,"h4")(77,"span",11),i(78," warning "),t()()()()(),e(79,"tr",12)(80,"td",12)(81,"p"),i(82,"Emite uma notifica\xE7\xE3o de aten\xE7\xE3o."),t()()()(),e(83,"h5")(84,"b"),i(85,"Par\xE2metros"),t()(),e(86,"table",13)(87,"tr",14)(88,"th",15),i(89,"Nome"),t(),e(90,"th",15),i(91,"Tipo"),t(),e(92,"th",15),i(93,"Descri\xE7\xE3o"),t()(),e(94,"tr",8)(95,"td",16),i(96," notification"),t(),e(97,"td",17)(98,"code",18),i(99," PoNotification "),t(),e(100,"code",19),i(101," string "),t()(),e(102,"td",12)(103,"p"),i(104,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),t()()()(),p(105,"br"),e(106,"table",7)(107,"tr",8)(108,"th",9)(109,"div",10)(110,"h4")(111,"span",11),i(112," error "),t()()()()(),e(113,"tr",12)(114,"td",12)(115,"p"),i(116,"Emite uma notifica\xE7\xE3o de erro."),t()()()(),e(117,"h5")(118,"b"),i(119,"Par\xE2metros"),t()(),e(120,"table",13)(121,"tr",14)(122,"th",15),i(123,"Nome"),t(),e(124,"th",15),i(125,"Tipo"),t(),e(126,"th",15),i(127,"Descri\xE7\xE3o"),t()(),e(128,"tr",8)(129,"td",16),i(130," notification"),t(),e(131,"td",17)(132,"code",18),i(133," PoNotification "),t(),e(134,"code",19),i(135," string "),t()(),e(136,"td",12)(137,"p"),i(138,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),t()()()(),p(139,"br"),e(140,"table",7)(141,"tr",8)(142,"th",9)(143,"div",10)(144,"h4")(145,"span",11),i(146," information "),t()()()()(),e(147,"tr",12)(148,"td",12)(149,"p"),i(150,"Emite uma notifica\xE7\xE3o de informa\xE7\xE3o."),t()()()(),e(151,"h5")(152,"b"),i(153,"Par\xE2metros"),t()(),e(154,"table",13)(155,"tr",14)(156,"th",15),i(157,"Nome"),t(),e(158,"th",15),i(159,"Tipo"),t(),e(160,"th",15),i(161,"Descri\xE7\xE3o"),t()(),e(162,"tr",8)(163,"td",16),i(164," notification"),t(),e(165,"td",17)(166,"code",18),i(167," PoNotification "),t(),e(168,"code",19),i(169," string "),t()(),e(170,"td",12)(171,"p"),i(172,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),t()()()(),p(173,"br"),e(174,"table",7)(175,"tr",8)(176,"th",9)(177,"div",10)(178,"h4")(179,"span",11),i(180," setDefaultDuration "),t()()()()(),e(181,"tr",12)(182,"td",12)(183,"p"),i(184,"Define em milissegundos a dura\xE7\xE3o padr\xE3o para as notifica\xE7\xF5es."),t(),e(185,"blockquote")(186,"p"),i(187,"Padr\xE3o 9 segundos."),t()()()()(),e(188,"h5")(189,"b"),i(190,"Par\xE2metros"),t()(),e(191,"table",13)(192,"tr",14)(193,"th",15),i(194,"Nome"),t(),e(195,"th",15),i(196,"Tipo"),t(),e(197,"th",15),i(198,"Descri\xE7\xE3o"),t()(),e(199,"tr",8)(200,"td",16),i(201," defaultDuration"),t(),e(202,"td",17)(203,"code",20),i(204," number "),t()(),e(205,"td",12)(206,"p"),i(207,"Dura\xE7\xE3o em milisegundos"),t()()()(),p(208,"br"),e(209,"h3"),i(210,"Interfaces"),t(),e(211,"h4",21)(212,"code",5),i(213,"PoNotification"),t()(),e(214,"div",2)(215,"p"),i(216,"Interface para uso do servi\xE7o PoNotification."),t()(),e(217,"h4",6),i(218,"Propriedades"),t(),e(219,"table",13)(220,"tr",14)(221,"th",15),i(222,"Nome"),t(),e(223,"th",15),i(224,"Tipo"),t(),e(225,"th",15),i(226,"Descri\xE7\xE3o"),t()(),e(227,"tr",8)(228,"td",16)(229,"div",10)(230,"span",11),i(231," action"),p(232,"br"),t()()(),e(233,"td",17)(234,"code",22),i(235,"Function"),t()(),e(236,"td",12)(237,"em")(238,"strong"),i(239,"(opcional)"),t()(),e(240,"p"),i(241,"A\xE7\xE3o para a notifica\xE7\xE3o."),t(),e(242,"p"),i(243,"Ao utilizar esta propriedade em conjunto com a "),e(244,"code"),i(245,"actionLabel"),t(),i(246,`,
a notifica\xE7\xE3o ficar\xE1 fixa na p\xE1gina at\xE9 usu\xE1rio fech\xE1-la ou clicar nesta a\xE7\xE3o.`),t(),e(247,"p"),i(248,"Caso n\xE3o informar a propriedade "),e(249,"code"),i(250,"actionLabel"),t(),i(251,' a a\xE7\xE3o ser\xE1 atribuida ao \xEDcone de "Fechar" da notifica\xE7\xE3o.'),t()()(),e(252,"tr",8)(253,"td",16)(254,"div",10)(255,"span",11),i(256," actionLabel"),p(257,"br"),t()()(),e(258,"td",17)(259,"code",19),i(260,"string"),t()(),e(261,"td",12)(262,"em")(263,"strong"),i(264,"(opcional)"),t()(),e(265,"p"),i(266,"Label do bot\xE3o quando houver uma a\xE7\xE3o definida."),t()()(),e(267,"tr",8)(268,"td",16)(269,"div",10)(270,"span",11),i(271," duration"),p(272,"br"),t()()(),e(273,"td",17)(274,"code",23),i(275,"number"),t()(),e(276,"td",12)(277,"em")(278,"strong"),i(279,"(opcional)"),t()(),e(280,"p"),i(281,"Define em milissegundos o tempo de dura\xE7\xE3o que a notifica\xE7\xE3o ficar\xE1 dispon\xEDvel em tela. O padr\xE3o \xE9 9000 milissegundos."),t(),e(282,"blockquote")(283,"p"),i(284,"Caso a notifica\xE7\xE3o tenha uma a\xE7\xE3o ou seja uma notifica\xE7\xE3o de "),e(285,"code"),i(286,"erro"),t(),i(287,", a propriedade ser\xE1 ignorada."),t()()()(),e(288,"tr",8)(289,"td",16)(290,"div",10)(291,"span",11),i(292," message"),p(293,"br"),t()()(),e(294,"td",17)(295,"code",19),i(296,"string"),t()(),e(297,"td",12)(298,"p"),i(299,"Mensagem a ser exibida na notifica\xE7\xE3o."),t()()(),e(300,"tr",8)(301,"td",16)(302,"div",10)(303,"span",11),i(304," mode"),p(305,"br"),t()()(),e(306,"td",17)(307,"code",24),i(308,"PoToasterMode"),t()(),e(309,"td",12)(310,"em")(311,"strong"),i(312,"(opcional)"),t()(),e(313,"p"),i(314,"Define o Modo/Tipo do Toaster."),t()()(),e(315,"tr",8)(316,"td",16)(317,"div",10)(318,"span",11),i(319," orientation"),p(320,"br"),t()()(),e(321,"td",17)(322,"code",25),i(323,"PoToasterOrientation"),t()(),e(324,"td",12)(325,"em")(326,"strong"),i(327,"(opcional)"),t()(),e(328,"p"),i(329,"Posi\xE7\xE3o da notifica\xE7\xE3o na p\xE1gina que pode ser "),e(330,"code"),i(331,"Top"),t(),i(332," (topo) ou "),e(333,"code"),i(334,"Bottom"),t(),i(335,"(rodap\xE9). A posi\xE7\xE3o padr\xE3o \xE9 "),e(336,"code"),i(337,"bottom"),t(),i(338,"."),t()()(),e(339,"tr",8)(340,"td",16)(341,"div",10)(342,"span",11),i(343," showClose"),p(344,"br"),t()()(),e(345,"td",17)(346,"code",26),i(347,"boolean"),t()(),e(348,"td",12)(349,"em")(350,"strong"),i(351,"(opcional)"),t()(),e(352,"p"),i(353,"Exibe o bot\xE3o de fechar a notifica\xE7\xE3o."),t(),e(354,"blockquote")(355,"p"),i(356,"Caso a notifica\xE7\xE3o seja do modo "),e(357,"code"),i(358,"default"),t(),i(359,", a propriedade ser\xE1 ignorada."),t()()()(),e(360,"tr",8)(361,"td",16)(362,"div",10)(363,"span",11),i(364," supportMessage"),p(365,"br"),t()()(),e(366,"td",17)(367,"code",19),i(368,"string"),t()(),e(369,"td",12)(370,"em")(371,"strong"),i(372,"(opcional)"),t()(),e(373,"p"),i(374,"Mensagem de suporte a ser exibida na notifica\xE7\xE3o."),t()()()()())},encapsulation:2})}return a})();var Ee=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,n){this.route=r,this.router=n}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let n=r.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0})}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(n){return new(n||a)(y(ee),y(te))};static \u0275cmp=f({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Notification",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-active"],["p-label","Exemplos",3,"p-hide","p-active"]],template:function(n,o){n&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),p(3,"sample-po-notification-doc"),t(),e(4,"po-tab",3),p(5,"sample-po-notification-basic-view")(6,"sample-po-notification-labs-view")(7,"sample-po-notification-sales-view"),t()()()),n&2&&(u("p-actions",o.actions),s(2),u("p-active",o.activeTab.includes("doc")),s(2),u("p-hide",o.hidePoWebSample)("p-active",o.activeTab.includes("web")))},dependencies:[le,w,x,ce,ue,he,be],encapsulation:2})}return a})();var ke=[{path:"",component:Ee}],Se=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=O({type:a});static \u0275inj=q({imports:[H.forChild(ke),H]})}return a})();var it=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=O({type:a});static \u0275inj=q({imports:[pe,Se]})}return a})();export{it as DocPoNotificationModule};
