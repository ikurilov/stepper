import { CartSharedModule } from './cart-shared.module';

describe('CartSharedModule', () => {
  let cartSharedModule: CartSharedModule;

  beforeEach(() => {
    cartSharedModule = new CartSharedModule();
  });

  it('should create an instance', () => {
    expect(cartSharedModule).toBeTruthy();
  });
});
