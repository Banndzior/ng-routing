import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { TriangleComponent } from './triangle/triangle.component';


const routes: Routes = [
  { path: '', redirectTo: 'rectangle', pathMatch: 'full' },
  { path: 'rectangle', component: RectangleComponent, children: [
    { path: 'circle', component: CircleComponent }
  ] },
  { path: 'circle', component: CircleComponent },
  { path: 'triangle', component: TriangleComponent },
  { path: '**', redirectTo: 'triangle' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
