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
