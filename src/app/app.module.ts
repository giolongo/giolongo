import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import {NgxTypedJsModule} from "ngx-typed-js";
import { KnowComponent } from './components/know/know.component';
import {NgCircleProgressModule} from "ng-circle-progress";
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import {NgxPageScrollModule} from "ngx-page-scroll";
import { ScrollSpyDirective } from './directives/scroll-spy.directive';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { TimelineComponent } from './components/timeline/timeline.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    KnowComponent,
    ScrollSpyDirective,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxTypedJsModule,
    NgbModule,
    FontAwesomeModule,
    NgxTypedJsModule,
    NgxPageScrollCoreModule,
    TranslateModule.forRoot({
      defaultLanguage: 'it',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
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
