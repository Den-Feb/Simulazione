import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }