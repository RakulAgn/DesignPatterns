import { Product } from "./interface";
import { Logistics } from "./logistics";
import { Operation } from "./types";

export class BySeaLogistics extends Logistics {
  public PackagingGoods(): Product {
    return new SeaPackage();
  }
}

class SeaPackage implements Product {
  public operation(): Operation {
    return {
      PackageName: "Sea Package",
      PackageWeight: "20kg",
      PackageCost: 650,
      ShippmentType: "BySea",
    };
  }
}
