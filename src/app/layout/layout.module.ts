import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MasterContainerComponent } from './master-container/master-container.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MasterContainerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    MasterContainerComponent,
  ]
})
export class LayoutModule { 
   
}
