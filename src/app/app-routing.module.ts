import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {DogResolver} from './services/dog.resolver';

const routes: Routes = [
  {
    path: 'dogs',
    component: HomeComponent
  },
  {
    path: 'dogs/:id',
    component: DetailsComponent,
    resolve: {
      dog: DogResolver
    }
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
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
