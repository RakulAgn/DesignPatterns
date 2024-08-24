import { Notify } from "../../interface/interface";
import { NotificatonOperation } from "../../types/types";
import { Notification } from "./notification";

export class WebNotification extends Notification {
  public notify(): Notify {
    return new WebNotificationMethod();
  }
}

class WebNotificationMethod implements Notify {
  operation(): NotificatonOperation {
    return {
      message: "LinkedIn: One Message from Mathew",
    };
  }
}
