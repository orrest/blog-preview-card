import { Routes } from '@angular/router';
import { BlogPreviewCardComponent } from './blog-preview-card/blog-preview-card.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: BlogPreviewCardComponent },
];
