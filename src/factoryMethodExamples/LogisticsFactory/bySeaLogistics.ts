import { Product } from "../../interface/interface";
import { Operation } from "../../types/types";
import { Logistics } from "./logistics";

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
