import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MtaService } from './mta.service';
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MtaService],
  bootstrap: [AppComponent]
})
export class AppModule { }