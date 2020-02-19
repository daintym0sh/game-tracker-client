import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FullComponent } from './layout/full/full.component';
import { BlankComponent } from './layout/blank/blank.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AppComponent } from './app.component';
import { AppRoutes } from './app-routing.module';
import { NotFoundComponent } from './layout/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SpinnerComponent,
    NavigationComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
