import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { InventuraDashboardComponent } from './inventura-dashboard/inventura-dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { DodajProizvodComponent } from './dodaj-proizvod/dodaj-proizvod.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    InventuraDashboardComponent,
    TablesComponent,
    DodajProizvodComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
