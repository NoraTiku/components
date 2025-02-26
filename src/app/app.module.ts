import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { JvSlackNTellComponent } from './jv-slack-n-tell/jv-slack-n-tell.component';

import { JacComponentComponent } from './jac-component/jac-component.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'

import { TjsMultiplicationComponent } from './tjs-multiplication/tjs-multiplication.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent
    , JacComponentComponent
    , PizzaToppingsComponent
    , TjsMultiplicationComponent
    , JvSlackNTellComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatButtonModule
    , MatCheckboxModule
    , MatFormFieldModule
    , MatSelectModule
    , MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
