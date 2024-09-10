import { PayPalFactory } from "./abstractfactoryExamples/AbstractPaymentFactory/Paypal";
import { SquareFactory } from "./abstractfactoryExamples/AbstractPaymentFactory/Square";
import { StripeFactory } from "./abstractfactoryExamples/AbstractPaymentFactory/Stripe";
import {
  ComputerDirector,
  DesktopComputerCreation,
} from "./creational_design_patterns/builder/ComputerCreation/computer";
import {
  ByRoadLogistics,
  ByAirLogistics,
  BySeaLogistics,
  logisticsOperations,
} from "./creational_design_patterns/factory_method/logistics";

import {
  Notification,
  PushNotification,
  SmsNotification,
  WebNotification,
} from "./factoryMethodExamples/NotificationFactory";
import { PaymentGatewayFactory } from "./interface/interface";

/**
 *
 * Logistics Examples Starts
 */
console.warn("By Road Logistics:");
logisticsOperations(new ByRoadLogistics());

console.warn("\nBy Sea Logistics:");
logisticsOperations(new BySeaLogistics());

console.warn("\nBy Air Logistics:");
logisticsOperations(new ByAirLogistics());

/**
 *
 * Logistics Examples Ends
 */

/**
 * Notification Example Starts
 */

function notificatonOperation(nofitication: Notification) {
  const notifyMessage = nofitication.sentNotification();
  console.info(notifyMessage.message);
}

console.warn("Push Notification");
notificatonOperation(new PushNotification());

console.warn("\nSms Notification");
notificatonOperation(new SmsNotification());

console.warn("\nWeb Notification");
notificatonOperation(new WebNotification());

/**
 * Notification Example Ends
 */

/**
 *
 * Abstract Payment Proccessing Example Start
 */

function processOrder(
  factory: PaymentGatewayFactory,
  amount: number,
  details: string
) {
  const processor = factory.createProcessor();
  const validator = factory.createValidator();

  if (validator.validatePayment(details)) {
    processor.proccessPayment(amount);
  } else {
    console.log("Payment validation failed.");
  }
}

const paypalFactory = new PayPalFactory();
const stripeFactory = new StripeFactory();
const squareFactory = new SquareFactory();

processOrder(paypalFactory, 100, "PayPal transaction details");
processOrder(stripeFactory, 200, "Stripe transaction details");
processOrder(squareFactory, 300, "Square transaction details");

/**
 *
 * Abstract Payment Proccessing Example End
 */

/**
 *  Builder Pattern Example
 *
 */

const builder = new DesktopComputerCreation();
const director = new ComputerDirector(builder);

const customPC = new DesktopComputerCreation()
  .setCPU({ brand: "AMD", model: "Ryzen 7 5800X", clockSpeed: 3.8 })
  .setRAM({ size: 64, type: "DDR4" })
  .setStorage({ size: 2000, type: "SSD" })
  .setGPU({ brand: "AMD", model: "Radeon RX 6800", memory: 16 })
  .getResult();

console.log("Gaming", director.createGamingPc().toString());
console.log("Office", director.createOfficePc().toString());
console.log("Custom", customPC.toString());
