import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'teams',
    loadComponent: () =>
      import('./teams/teams.component').then(m => m.TeamsComponent)
  },
  {
    path: 'games',
    loadComponent: () =>
      import('./games/games.component').then(m => m.GamesComponent)
  },
  {
    path: 'analytics',
    loadComponent: () =>
      import('./analytics/analytics.component').then(m => m.AnalyticsComponent)
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./reports/reports.component').then(m => m.ReportsComponent)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  }
];
