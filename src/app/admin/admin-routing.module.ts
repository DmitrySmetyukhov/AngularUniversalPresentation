import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminMainPageComponent} from './admin-main-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminMainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
