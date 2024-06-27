import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from 'src/app/shared/shared.module';
import { PaseadorComponent } from './paseador.component';
import { PaseadorRoutingModule } from './paseador-routing.module';


@NgModule({
  declarations: [
    PaseadorComponent
  ],
  imports: [
    CommonModule,
    PaseadorRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
