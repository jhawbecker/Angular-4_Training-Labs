import { OrdersToShipComponent } from "./shipping/orders-to-ship.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { ReceiveProductComponent } from "./receiving/receive-product.component"
import { InventoryComponent } from "./inventory/inventory.component"

import { RouterModule } from "@angular/router"
import { ShipOrderComponent } from "./shipping/ship-order.component";

const routes = [
    { path: "ship", component: OrdersToShipComponent },
    { path: "ship/:orderID", component: ShipOrderComponent },
    { path: "receive", component: ReceiveProductComponent },
    { path: "inventory", component: InventoryComponent },
    { path: "**", component: DashboardComponent }
    //Okay, you fill in the other three
];

export const routing = RouterModule.forRoot(routes);
