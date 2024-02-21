import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MyArtComponent } from './components/my-art/my-art.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Empty path for the default route
  { path: 'about-me', component: AboutMeComponent },
  { path: 'my-art', component: MyArtComponent },
  // Add more routes as needed
];