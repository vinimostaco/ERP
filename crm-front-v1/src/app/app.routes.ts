import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UploadCLientsComponent } from './components/upload-clients/upload-clients.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'uploadClients',
    component: UploadCLientsComponent,
  },
];
