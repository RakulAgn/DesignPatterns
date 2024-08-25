import { Product } from "../interface";
import { Operation } from "../type";

export class SeaPackage implements Product {
  public operation(): Operation {
    return {
      PackageName: "Sea Package",
      PackageWeight: "20kg",
      PackageCost: 650,
      ShippmentType: "BySea",
    };
  }
}
