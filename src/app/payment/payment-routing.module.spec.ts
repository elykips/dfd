import { PaymentRoutingModule } from './payment-routing.module';

describe('PaymentRoutingModule', () => {
  let paymentRoutingModule: PaymentRoutingModule;

  beforeEach(() => {
    paymentRoutingModule = new PaymentRoutingModule();
  });

  it('should create an instance', () => {
    expect(paymentRoutingModule).toBeTruthy();
  });
});
