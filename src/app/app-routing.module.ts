import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", redirectTo:'landing', pathMatch:'full'},
  {path:"landing", loadChildren: () => import("./pages/landing/landing.module").then(m => m.LandingModule)},
  {path:"auth", loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)},
  {path:"dashboard", loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
