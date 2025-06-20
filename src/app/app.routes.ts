import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },        // Or your actual home/login page
  { path: 'profile', component: ProfileComponent } // ✅ Corrected
];
