import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.sass'],
})
export class ModalComponent implements OnInit {
    @ViewChild('modal')
    modal!: ElementRef<HTMLDialogElement>;

    @Input()
    title = '';

    ngOnInit(): void {
        console.log('init');
    }

    showModal(): void {
        this.modal.nativeElement.showModal();
    }
}
