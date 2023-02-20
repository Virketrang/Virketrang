import { Component } from '@angular/core';
import { Item } from '../../types/item';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.sass'],
})
export class NavigationComponent {
    items: Item[] = [
        { path: '/dashboard/orders', name: 'Ordrer' },
        { path: '/dashboard/webshop', name: 'Webshop' },
        { path: '/dashboard/accounting', name: 'Regnskab' },
        { path: '/dashboard/customers', name: 'Kundekartotek' },
        { path: '/dashboard/employees', name: 'Medarbejdere' },
    ];
}
