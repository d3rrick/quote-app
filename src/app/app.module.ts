import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { LapseTimePipe } from './lapse-time.pipe';
import { HighlightDirective } from './highlight.directive';
import { PluralPipe } from './plural.pipe';

import {HttpModule} from '@angular/http';
import { QuoteFormComponent } from './quote-form/quote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    LapseTimePipe,
    HighlightDirective,
    PluralPipe,
    QuoteFormComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
