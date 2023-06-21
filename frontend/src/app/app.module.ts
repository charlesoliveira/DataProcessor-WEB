import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule }from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DataprocessorComponent } from './views/dataprocessor/dataprocessor.component';
import { DataprocessorCreateComponent } from './components/dataprocessor/dataprocessor-create/dataprocessor-create.component';

import { HttpClientModule }from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { DataprocessorReadComponent } from './components/dataprocessor/dataprocessor-read/dataprocessor-read.component';
import { DataprocessorListAllComponent } from './components/dataprocessor/dataprocessor-list-all/dataprocessor-list-all.component'

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { DataprocessorListallComponent } from './components/dataprocessor/dataprocessor-listall/dataprocessor-listall.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DataprocessorQtdufComponent } from './components/dataprocessor/dataprocessor-qtduf/dataprocessor-qtduf.component';
import { DataprocessorImcComponent } from './components/dataprocessor/dataprocessor-imc/dataprocessor-imc.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    DataprocessorComponent,
    DataprocessorCreateComponent,
    DataprocessorReadComponent,
    DataprocessorListAllComponent,
    DataprocessorListallComponent,
    DataprocessorQtdufComponent,
    DataprocessorImcComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatSnackBarModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
