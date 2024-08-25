import { Logistics } from "../logistics";
import { Product } from "../interface";
import { RoadPackage } from "./package";

export class ByRoadLogistics extends Logistics {
  public PackagingGoods(): Product {
    return new RoadPackage();
  }
}
