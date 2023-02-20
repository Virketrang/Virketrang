import { ModalComponent } from './../../../../components/modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '@packages/interfaces';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.sass'],
})
export class ProductsComponent implements OnInit {
    constructor(private http: HttpClient) {}

    readonly api = 'http://localhost:3333/api/products';

    products!: Observable<Product[]>;

    @ViewChild('dialog')
    modal!: ModalComponent;

    getProducts() {
        return (this.products = this.http.get<Product[]>(this.api));
    }

    ngOnInit(): void {
        this.products = this.getProducts();
    }

    showModal(): void {
        this.modal.showModal();
    }
}
