import { Routes } from '@angular/router';

import { FullComponent } from './layout/full/full.component';
import { BlankComponent } from './layout/blank/blank.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { AuthGuard } from './auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/first', pathMatch: 'full' },
      {
        path: '',
        loadChildren:
          () => import('./content/content.module').then(m => m.ContentModule)
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',
        loadChildren:
          () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
