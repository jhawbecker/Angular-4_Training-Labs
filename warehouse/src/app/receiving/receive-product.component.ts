import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nw-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css']
})
export class ReceiveProductComponent implements OnInit {
  private showForm:boolean;
  
  constructor() { }

  public saveTrackingNumber() {
    this.showForm = true;
  }

  public receiveProduct() {
    alert("Received Product!");
  }

  public finishReceiving() {
    alert("Finished Receive");
  }

  ngOnInit() {
  }

}
