import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { LapseTimePipe } from './lapse-time.pipe';
import { HighlightDirective } from './highlight.directive';
import { HeaderComponent } from './header/header.component';
import { PluralPipe } from './plural.pipe';
import {ServeDataService} from './serve-data.service'
import {HttpModule} from '@angular/http'

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    LapseTimePipe,
    HighlightDirective,
    HeaderComponent,
    PluralPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ServeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
