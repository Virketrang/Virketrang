import { Component } from '@angular/core';
import { Item } from '../../../types/item';

@Component({
    selector: 'app-accounting',
    templateUrl: './accounting.component.html',
    styleUrls: ['./accounting.component.scss'],
})
export class AccountingComponent {
    items: Item[] = [{ path: '/accounting/sales', name: 'Fakturer' }];
}
