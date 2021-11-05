import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PagesModule} from './pages/pages.module';
import { AppComponent } from './app.component';
import {LayoutModule} from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module'
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    PagesModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
