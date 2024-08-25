import { PayPalFactory } from "./abstractfactoryExamples/AbstractPaymentFactory/Paypal";
import { SquareFactory } from "./abstractfactoryExamples/AbstractPaymentFactory/Square";
import { StripeFactory } from "./abstractfactoryExamples/AbstractPaymentFactory/Stripe";
import {
  ByAirLogistics,
  ByRoadLogistics,
  BySeaLogistics,
  Logistics,
} from "./factoryMethodExamples/LogisticsFactory";
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
function logisticsOperations(logistics: Logistics) {
  const packagingInformation = logistics.preparePackage();
  console.table(packagingInformation);
}

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
