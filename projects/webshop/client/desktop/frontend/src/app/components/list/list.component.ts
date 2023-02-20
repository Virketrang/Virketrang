import { Component, Input } from '@angular/core';
import { Item } from '../../types/item';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.sass'],
})
export class ListComponent {
    @Input()
    title!: string;

    @Input()
    items!: Item[];
}
