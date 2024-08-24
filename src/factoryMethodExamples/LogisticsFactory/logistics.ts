import { Product } from "../../interface/interface";

export abstract class Logistics {
  public abstract PackagingGoods(): Product;

  public preparePackage() {
    const Package = this.PackagingGoods();

    return Package.operation();
  }
}
