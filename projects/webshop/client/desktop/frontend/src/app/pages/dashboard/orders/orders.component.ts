import { Component } from '@angular/core';
import { Item } from '../../../types/item';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
    items: Item[] = [{ path: 'orders/all', name: 'Alle Ordrer' }];
}
