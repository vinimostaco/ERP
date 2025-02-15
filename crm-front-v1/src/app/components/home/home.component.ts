import { Component } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
  submit() {
    console.log('Formulário enviado!');
  }

  async getClients() {
    const url = 'http://localhost:3000/admin/fullClients';
    const res = await axios.get(url);
    console.log(res.data);
  }

  onOptionSelect(option: number) {
    switch (option) {
      case 1:
        console.log('indo para uploadClients');
        this.router.navigate(['/uploadClients']);
        break;
      case 2:
        this.router.navigate(['/teste']);
        break;
      default:
        this.router.navigate(['']);
        break;
    }

    // if (option === 1) {
    //   this.router.navigate(['/uploadClients']);
    // } else if (option === 2) {
    //   this.router.navigate(['/teste']);
    // }
  }
}
