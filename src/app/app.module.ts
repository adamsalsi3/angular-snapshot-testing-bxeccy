import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { FlightInfoComponent } from './flight-info.component';
import { FlightSelectComponent } from './flight-select.component';
import { FlightListService } from './flight-list.service';
import { MyAppComponent } from './my-app.component';

@NgModule({
  imports: [
    BrowserModule,
    MatListModule,
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  declarations: [FlightInfoComponent, FlightSelectComponent, MyAppComponent],
  providers: [FlightListService],
  bootstrap: [MyAppComponent]
})
export class AppModule {}
