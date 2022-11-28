import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaCreatorComponent } from './components/pizza-creator/pizza-creator.component';
import { ToppingGroupPipe } from './shared/pipes/topping-group.pipe';
import { ToppingFilterPipe } from './pipes/topping-filter.pipe';
import { PizzaOffersComponent } from './components/pizza-offers/pizza-offers.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaCreatorComponent,
    ToppingGroupPipe,
    ToppingFilterPipe,
    PizzaOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
