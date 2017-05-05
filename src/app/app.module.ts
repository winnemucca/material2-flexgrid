import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ModelsService} from './models.service';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdCardModule,
  MdGridListModule,
  MdInputModule,
  MdToolbarModule,
  MdSidenavModule,
  MdTabsModule
} from '@angular/material';


import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdGridListModule,
    MdInputModule,
    MdSidenavModule,
    MdToolbarModule,
    MdTabsModule,
    FlexLayoutModule

  ],
  providers: [
    ModelsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
