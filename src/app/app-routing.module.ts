import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigniComponent } from './signi/signi.component';

const routes: Routes = [ 
   {
  path: '',
  component: SigniComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
