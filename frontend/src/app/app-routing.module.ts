import { DataprocessorQtdufComponent } from './components/dataprocessor/dataprocessor-qtduf/dataprocessor-qtduf.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DataprocessorComponent } from './views/dataprocessor/dataprocessor.component';
import { DataprocessorCreateComponent } from './components/dataprocessor/dataprocessor-create/dataprocessor-create.component';
import { DataprocessorImcComponent } from './components/dataprocessor/dataprocessor-imc/dataprocessor-imc.component';


const routes: Routes = [
{ path: "", component: HomeComponent },
{ path: "listarPessoas", component: DataprocessorComponent },
{ path: "criarPessoas", component: DataprocessorCreateComponent },
{ path: "qtdUF", component: DataprocessorQtdufComponent },
{ path: "imc", component: DataprocessorImcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
