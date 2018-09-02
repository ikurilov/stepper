import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StepsConfig } from './steps.config';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products'
      },
      {
        path: 'products',
        loadChildren: './cart/cart.module#CartModule',
        data: {
          steps: StepsConfig
        }
      },
      {
        path: '**',
        redirectTo: 'products'
      },
    ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
