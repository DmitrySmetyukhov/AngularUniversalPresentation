import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminMainPageComponent} from './admin-main-page.component';
import {AdminRoutingModule} from './admin-routing.module';


@NgModule({
  declarations: [AdminMainPageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {
}
