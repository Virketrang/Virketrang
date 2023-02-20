import { Component } from '@angular/core';
import { Item } from '../../../types/item';

@Component({
    selector: 'app-webshop',
    templateUrl: './webshop.component.html',
    styleUrls: ['./webshop.component.sass'],
})
export class WebshopComponent {
    items: Item[] = [
        { path: '/dashboard/webshop/products', name: 'Alle Produkter' },
        { path: '/dashboard/webshop/categories', name: 'Kategorier' },
        { path: '/dashboard/webshop/discounts', name: 'Tilbud' },
    ];
}
