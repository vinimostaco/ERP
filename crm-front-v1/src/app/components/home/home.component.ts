import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  submit() {
    console.log('Formulário enviado!');
  }

  async getClients() {
    const url = 'http://localhost:3000/admin/fullClients';
    const res = await axios.get(url);
    console.log(res.data);
  }
}
