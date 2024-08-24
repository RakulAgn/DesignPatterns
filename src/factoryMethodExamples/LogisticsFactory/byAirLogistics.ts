import { Product } from "../../interface/interface";
import { Operation } from "../../types/types";
import { Logistics } from "./logistics";

export class ByAirLogistics extends Logistics {
  public PackagingGoods(): Product {
    return new AirPackage();
  }
}

class AirPackage implements Product {
  public operation(): Operation {
    return {
      PackageName: "Air Package",
      PackageWeight: "20kg",
      PackageCost: 150,
      ShippmentType: "ByRoad",
    };
  }
}
