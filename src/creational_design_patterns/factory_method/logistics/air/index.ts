import { Logistics } from "../logistics";
import { Product } from "../interface";
import { AirPackage } from "./package";

export class ByAirLogistics extends Logistics {
  public PackagingGoods(): Product {
    return new AirPackage();
  }
}
