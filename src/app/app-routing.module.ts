import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';

const routes: Routes = [
  {
    path: 'dogs',
    component: HomeComponent
  },
  {
    path: 'dogs/:id',
    component: DetailsComponent
  },
  {
    path: '**',
    redirectTo: 'dogs'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
