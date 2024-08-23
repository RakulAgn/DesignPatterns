import { Product } from "./interface";
import { Logistics } from "./logistics";
import { Operation } from "./types";

export class ByRoadLogistics extends Logistics {
  public PackagingGoods(): Product {
    return new RoadPackage();
  }
}

class RoadPackage implements Product {
  public operation(): Operation {
    return {
      PackageName: "Road Package",
      PackageWeight: "20kg",
      PackageCost: 550,
      ShippmentType: "ByRoad",
    };
  }
}
