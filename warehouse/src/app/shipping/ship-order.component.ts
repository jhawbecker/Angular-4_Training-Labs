import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order';
import { OrderLine } from '../shared/orderLine';
import { Product } from '../shared/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nw-ship-order',
  templateUrl: './ship-order.component.html',
  styleUrls: ['./ship-order.component.css'],
  styles: [`.big-checkbox{
    transform: scale(2);
  }`, `
  .test-blue{
    background-color: blue;
  }
    `]
})

export class ShipOrderComponent implements OnInit {
  private order: Order;

  constructor(private _route: ActivatedRoute) { }

  public getBestLocation(orderLine) {
    orderLine.locationID = "01A1A";
    console.log(orderLine);
  };

  public markAsShipped(order) {
    order.status = 1;
  };

  public markWithProblem(order) {
    order.status = 2;
  };

  public isReadyToShip(order) {
    return order.lines.every(line => line.picked);
  }

  ngOnInit() {
    const id = this._route.snapshot.params['orderID'];
    this.order = new Order();
    this.order.orderID = id;
    this.order.orderDate = new Date();
    this.order.shipVia = 1;
    this.order.shipping = 10;
    this.order.shipName = "Jonathan Hawbecker";
    this.order.shipAddress = "777 Placeholder Pl";
    this.order.shipCity = "Camp Hill";
    this.order.shipRegion = "PA";
    this.order.shipCountry = "USA";
    this.order.shipPostalCode = "5T4N-L33";
    this.order.status = 0;
    this.order.lines = [];
    const line1 = new OrderLine();
    line1.locationID = "02B1C";
    line1.price = 30.00;
    line1.productID = 55;
    line1.quantity = 2;
    line1.product = new Product();
    line1.product.name = "Oreos";
    line1.product.imageUrl = "/assets/images/productImages/34.jpg";
    const line2 = new OrderLine();
    //line2.locationID = "05A3As";
    line2.price = 30.00;
    line2.productID = 45;
    line2.quantity = 7;
    line2.product = new Product();
    line2.product.name = "Peanuts";
    line2.product.imageUrl = "/assets/images/productImages/67.jpg";
    this.order.lines.push(line1);
    this.order.lines.push(line2);

    /*    for (let x; x = 1 ; x< 5) {
        this.order.lines.push(new OrderLine);
        this.order.lines[x].product.imageUrl = 'assets/images/productImages/${x}.jpg'
        
       } */
  }

}
