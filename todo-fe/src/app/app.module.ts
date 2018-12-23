import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TestServiceProxy, ValuesServiceProxy } from '../shared/service-proxies/service-proxies';
import { API_BASE_URL as api_url } from '../shared/service-proxies/service-proxies';
import { environment } from '../environments/environment';

export function getRemoteServiceBaseUrl(): string {
  console.log(environment.frontEndBaseUrl);
  console.log(environment.backEndBaseurl);
  return environment.backEndBaseurl;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: api_url, useFactory: getRemoteServiceBaseUrl },
    TestServiceProxy,
    ValuesServiceProxy],
  bootstrap: [AppComponent]
})
export class AppModule { }
