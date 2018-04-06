import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nw-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css']
})
export class ReceiveProductComponent implements OnInit {
  private showForm: boolean;
  private receivedProducts = [];
  private productID: number;
  private quantity: number;

  constructor() { }

  public saveTrackingNumber() {
    this.showForm = true;
  }

  public receiveProduct(productID, quantity) {
    this.receivedProducts.push({ productID, quantity });
    this.productID = undefined;
    this.quantity = undefined;
  }

  public finishReceiving() {
    alert("Finished Receive");
  }

  ngOnInit() {
  }

}
