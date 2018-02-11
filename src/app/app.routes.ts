import { Routes } from '@angular/router';

const AppRoutes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/dashboard',
}/*, {
  path: 'path',
  loadChildren: 'modulefile#modulename',
}*/];

export { AppRoutes };
