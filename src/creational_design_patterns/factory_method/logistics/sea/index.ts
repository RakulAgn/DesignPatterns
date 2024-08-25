import { Logistics } from "../logistics";
import { Product } from "../interface";
import { SeaPackage } from "./package";

export class BySeaLogistics extends Logistics {
  public PackagingGoods(): Product {
    return new SeaPackage();
  }
}
