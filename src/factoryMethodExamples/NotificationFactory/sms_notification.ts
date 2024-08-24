import { Notify } from "../../interface/interface";
import { NotificatonOperation } from "../../types/types";
import { Notification } from "./notification";

export class SmsNotification extends Notification {
  public notify(): Notify {
    return new SmsNotificationMethod();
  }
}

class SmsNotificationMethod implements Notify {
  operation(): NotificatonOperation {
    return {
      message:
        "OTP MESSAGE 65364 DONT SHARE YOUR ONE TIME PASSWORD WITH ANYONE SMS notification",
    };
  }
}
