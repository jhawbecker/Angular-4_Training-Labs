import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.router'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ShipOrderComponent } from './shipping/ship-order.component';
import { OrdersToShipComponent } from './shipping/orders-to-ship.component';
import { ReceiveProductComponent } from './receiving/receive-product.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InventoryComponent,
    ShipOrderComponent,
    OrdersToShipComponent,
    ReceiveProductComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
