import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { LapseTimePipe } from './lapse-time.pipe';
import { HighlightDirective } from './highlight.directive';
import { HeaderComponent } from './header/header.component';
import { PluralPipe } from './plural.pipe';


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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
