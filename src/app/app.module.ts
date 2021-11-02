import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PagesModule} from './pages/pages.module';
import { AppComponent } from './app.component';
import {LayoutModule} from './layout/layout.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
