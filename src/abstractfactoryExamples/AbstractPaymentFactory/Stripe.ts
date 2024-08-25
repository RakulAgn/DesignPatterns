import {
  PaymentGatewayFactory,
  PaymentProcessor,
  PaymentValidator,
} from "../../interface/interface";

export class StripeProcessor implements PaymentProcessor {
  proccessPayment(amount: number) {
    console.warn(`Processing payment of $${amount} through Stripe.`);
  }
}

class StripeValidator implements PaymentValidator {
  validatePayment(details: string): boolean {
    console.log(`Validating Stripe payment with details: ${details}`);
    return true;
  }
}

export class StripeFactory implements PaymentGatewayFactory {
  createProcessor(): PaymentProcessor {
    return new StripeProcessor();
  }
  createValidator(): PaymentValidator {
    return new StripeValidator();
  }
}
