import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestCompComponent1} from "./components/component1/component1.component";
import {TestCompComponent2} from "./components/component2/component2.component";


const routes: Routes = [
    {path: '' , component: TestCompComponent1},
    {path: 'component1' , component: TestCompComponent1},
    {path: 'component2' , component: TestCompComponent2},
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[TestCompComponent1,TestCompComponent2];
