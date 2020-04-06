import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from "./app.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/lastika',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AppComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'lastika',
        loadChildren: () => import('./views/graph/force-layout.module').then(m => m.ForceLayoutModule),
        data: { title: 'Demo' }
      },
    ]
  },

  { path: '**', redirectTo: 'lastika' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
