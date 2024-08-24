import { Notify } from "../../interface/interface";
import { NotificatonOperation } from "../../types/types";
import { Notification } from "./notification";

export class PushNotification extends Notification {
  public notify(): Notify {
    return new PushNotificationMethod();
  }
}

class PushNotificationMethod implements Notify {
  operation(): NotificatonOperation {
    return {
      message: "Hey, You Got a Message From Mathew !! :) Push Notification",
    };
  }
}
