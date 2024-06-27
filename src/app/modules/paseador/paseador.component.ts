import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-paseador',
  templateUrl: './paseador.component.html',
  styleUrls: ['./paseador.component.scss']
})
export class PaseadorComponent {

  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  openmodal() {
    this.modalComponent.openModal();
  }

}
