import {
  PaymentGatewayFactory,
  PaymentProcessor,
  PaymentValidator,
} from "../../interface/interface";

class PaypalProcessor implements PaymentProcessor {
  proccessPayment(amount: number): void {
    console.warn(`Processing payment of $${amount} through PayPal.`);
  }
}

class PayPalValidator implements PaymentValidator {
  validatePayment(details: string): boolean {
    console.log(`Validating PayPal payment with details: ${details}`);
    return true;
  }
}

export class PayPalFactory implements PaymentGatewayFactory {
  createProcessor(): PaymentProcessor {
    return new PaypalProcessor();
  }
  createValidator(): PaymentValidator {
    return new PayPalValidator();
  }
}
