import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ForceLayoutRoutingModule } from './force-layout-routing.module';
import { GraphForceLayoutDemoComponent } from './graph-force-layout-demo/graph-force-layout-demo.component';

@NgModule({
    imports: [
        CommonModule,
        ForceLayoutRoutingModule,
        SharedModule,
        HttpClientModule,
    ],
    exports: [
        GraphForceLayoutDemoComponent
    ],
    declarations: [
        GraphForceLayoutDemoComponent,

    ]
})
export class ForceLayoutModule { }
