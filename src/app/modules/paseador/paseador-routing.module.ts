import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaseadorComponent } from './paseador.component';

const routes: Routes = [{ path: '', component: PaseadorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaseadorRoutingModule { }
