import { NotificatonOperation, Operation } from "../types/types";

export interface Product {
  operation(): Operation;
}

export interface Notify {
  operation(): NotificatonOperation;
}

export interface PaymentProcessor {
  proccessPayment(amount: number): void;
}

export interface PaymentValidator {
  validatePayment(details: string): boolean;
}

export interface PaymentGatewayFactory {
  createProcessor(): PaymentProcessor;
  createValidator(): PaymentValidator;
}
