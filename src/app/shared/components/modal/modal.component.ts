import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  open() {
    throw new Error('Method not implemented.');
  }

  @Input() title: string = 'Modal';
  showModal: boolean = false;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  

  constructor() { }

  openModal() {
    this.showModal = true;
  }

  close() {
    this.closeModal.emit();
  }

}
