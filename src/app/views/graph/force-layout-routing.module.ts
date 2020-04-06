import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphForceLayoutDemoComponent } from './graph-force-layout-demo/graph-force-layout-demo.component';

const routes: Routes = [
  {
    path: 'graph/force-layout',
    component: GraphForceLayoutDemoComponent,
    data: {
      title: 'Force Layout'
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForceLayoutRoutingModule { }
