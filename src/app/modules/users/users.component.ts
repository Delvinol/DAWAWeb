import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { UsersService } from './services/users.service';
import { User, NewUser } from './models/users';
import { NotifyService } from 'src/app/shared/services/notify.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: User[] = [];
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;
  editUser: User | null = null;
  nuevoUsuario: NewUser = new NewUser();
  showCrearUsuarioForm: boolean = false;

  constructor(private userService: UsersService, private notifyService: NotifyService) {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        this.notifyService.notify(error.message, 'error');
        console.error(error);
      }
    );
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe(
      () => {
        this.notifyService.notify('Usuario eliminado correctamente', 'success');
        this.getUsers();
      },
      (error) => {
        this.notifyService.notify('Error al eliminar usuario', 'error');
        console.error(error);
      }
    );
  }

  openCrearUsuarioForm() {
    this.showCrearUsuarioForm = true;
  }

  cancelarCrearUsuario() {
    this.showCrearUsuarioForm = false;
    this.resetNuevoUsuario();
  }

  crearUsuario() {
    this.userService.crearUsuario(this.nuevoUsuario).subscribe(
      () => {
        this.notifyService.notify('Usuario creado correctamente', 'success');
        this.getUsers();
        this.cancelarCrearUsuario();
      },
      (error) => {
        this.notifyService.notify('Error al crear usuario', 'error');
        console.error(error);
      }
    );
  }

  resetNuevoUsuario() {
    this.nuevoUsuario = new NewUser();
  }

  editarUsuario(user: User) {
    this.editUser = { ...user }; // Copiar el usuario para no modificar el original directamente
    this.editUser.id = this.editUser.id.toString(); // Convertir a cadena
    if (this.modalComponent) {
      this.modalComponent.open();
    }
  }
  
  

  guardarCambiosUsuario() {
    if (this.editUser) {
      const idAsNumber = +this.editUser.id; // Convertir a número
      this.userService.editarUsuario(idAsNumber, this.editUser).subscribe(
        () => {
          this.notifyService.notify('Usuario actualizado correctamente', 'success');
          this.getUsers();
          if (this.modalComponent) {
            this.modalComponent.close();
          }
        },
        (error) => {
          this.notifyService.notify('Error al actualizar usuario', 'error');
          console.error(error);
        }
      );
    }
  }
  
  
  
}
