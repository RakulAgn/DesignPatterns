import { Product } from "../interface";
import { Operation } from "../type";

export class AirPackage implements Product {
  public operation(): Operation {
    return {
      PackageName: "Air Package",
      PackageWeight: "20kg",
      PackageCost: 150,
      ShippmentType: "ByRoad",
    };
  }
}
