import { Notify } from "../../interface/interface";

export abstract class Notification {
  public abstract notify(): Notify;

  public sentNotification() {
    const Package = this.notify();

    return Package.operation();
  }
}
