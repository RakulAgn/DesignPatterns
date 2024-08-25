import { Product } from "./interface";

export abstract class Logistics {
  public abstract PackagingGoods(): Product;

  public preparePackage() {
    const Package = this.PackagingGoods();

    return Package.operation();
  }
}

export function logisticsOperations(logistics: Logistics) {
  const packagingInformation = logistics.preparePackage();
  console.table(packagingInformation);
}
