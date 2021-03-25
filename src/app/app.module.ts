import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {DetailsComponent} from './details/details.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AppShellNoRenderDirective} from './directives/app-shell-no-render.directive';
import {AppShellRenderDirective} from './directives/app-shell-render.directive';
import {DogResolver} from './services/dog.resolver';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    AboutUsComponent,
    AppShellNoRenderDirective,
    AppShellRenderDirective
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  providers: [DogResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
