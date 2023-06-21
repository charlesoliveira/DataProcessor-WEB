import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pessoa } from './data.model';
import { QtdUF } from './data.model';
import { Imc } from './data.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataprocessorService {

  baseUrl = "http://localhost:3001/pessoas"
  springUrl = "http://localhost:8080/dados/pessoas"
  springUrlQtdUF = "http://localhost:8080/dados/qtdUF"
  springUrlImc = "http://localhost:8080/dados/imc"

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(data: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.baseUrl, data)
  }

  read(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.springUrl)
  }

  readQtds(): Observable<QtdUF[]> {
    return this.http.get<QtdUF[]>(this.springUrlQtdUF)
  }

  readImc(): Observable<Imc[]> {
    return this.http.get<Imc[]>(this.springUrlImc)
  }

}
