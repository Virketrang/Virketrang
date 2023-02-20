import { Component } from '@angular/core';
import { Item } from '../../../types/item';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
    items: Item[] = [{ path: '/customers/all', name: 'Alle Kunder' }];
}
