import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlvysUiComponentsModule } from 'alvys-ui-components';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AlvysUiComponentsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
