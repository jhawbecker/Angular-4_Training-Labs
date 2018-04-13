import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ShipOrderComponent } from './shipping/ship-order.component';
import { OrdersToShipComponent } from './shipping/orders-to-ship.component';
import { ReceiveProductComponent } from './receiving/receive-product.component';
import { ListOfOrdersComponent } from './shipping/list-of-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InventoryComponent,
    ShipOrderComponent,
    OrdersToShipComponent,
    ReceiveProductComponent,
    ListOfOrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
