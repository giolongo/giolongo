import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import {NgxTypedJsModule} from "ngx-typed-js";
import { KnowComponent } from './components/know/know.component';
import {NgCircleProgressModule} from "ng-circle-progress";
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import {NgxPageScrollModule} from "ngx-page-scroll";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    KnowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxTypedJsModule,
    NgbModule,
    NgxTypedJsModule,
    NgxPageScrollCoreModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    }),
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
