import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { StepContainerComponent } from './step-container/step-container.component';
import { StepResolverService } from './resolvers/step-resolver.service';
import { CartResolverService } from './resolvers/cart-resolver.service';

const cartRoutes: Routes = [
  {
    path: '',
    component: CartComponent,
    resolve: {
      cart: CartResolverService
    },
    children: [
      {
        path: ':stepId',
        component: StepContainerComponent,
        resolve: {
          step: StepResolverService
        }
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(cartRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CartRoutingModule {
}
