import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dataprocessor',
  templateUrl: './dataprocessor.component.html',
  styleUrls: ['./dataprocessor.component.css']
})
export class DataprocessorComponent {

  constructor(
    private router: Router
  ){}

  navigateToDataCreate(): void {
    this.router.navigate(['/criarPessoas'])
  }

}
