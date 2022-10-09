import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './AuthInterceptor';
import { ErrorInterceptor } from './ErrorInterceptor';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(
    {
      rippleEffect: true,
       // mode: 'md',
      backButtonText: 'Back',
    }
  ), AppRoutingModule, HttpClientModule, ScrollingModule, SweetAlert2Module.forRoot(),  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi   : true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
