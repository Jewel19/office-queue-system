import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pubdash',
    loadChildren: () => import('./pubdash/pubdash.module').then( m => m.PubdashPageModule)
  },
  {
    path: 'admndash',
    loadChildren: () => import('./admndash/admndash.module').then( m => m.AdmndashPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'ofccrt',
    loadChildren: () => import('./ofccrt/ofccrt.module').then( m => m.OfccrtPageModule)
  },
  {
    path: 'ofcdash',
    loadChildren: () => import('./ofcdash/ofcdash.module').then( m => m.OfcdashPageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
