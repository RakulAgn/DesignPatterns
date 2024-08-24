import { NotificatonOperation, Operation } from "../types/types";

export interface Product {
  operation(): Operation;
}

export interface Notify {
  operation(): NotificatonOperation;
}
