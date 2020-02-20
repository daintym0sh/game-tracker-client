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
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';


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
    HttpClientModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
