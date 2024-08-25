import { Product } from "../interface";
import { Operation } from "../type";

export class RoadPackage implements Product {
  public operation(): Operation {
    return {
      PackageName: "Road Package",
      PackageWeight: "20kg",
      PackageCost: 550,
      ShippmentType: "ByRoad",
    };
  }
}
