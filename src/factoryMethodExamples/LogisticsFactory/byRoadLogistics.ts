import { Product } from "../../interface/interface";
import { Operation } from "../../types/types";
import { Logistics } from "./logistics";

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
