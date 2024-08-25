import {
  PaymentGatewayFactory,
  PaymentProcessor,
  PaymentValidator,
} from "../../interface/interface";

export class SquareProcessor implements PaymentProcessor {
  proccessPayment(amount: number) {
    console.warn(`Processing payment of $${amount} through Square.`);
  }
}

class SquareValidator implements PaymentValidator {
  validatePayment(details: string): boolean {
    console.log(`Validating Square payment with details: ${details}`);
    return true;
  }
}

export class SquareFactory implements PaymentGatewayFactory {
  createProcessor(): PaymentProcessor {
    return new SquareProcessor();
  }
  createValidator(): PaymentValidator {
    return new SquareValidator();
  }
}
