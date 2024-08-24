export type Operation = {
  PackageName: string;
  PackageWeight: string;
  PackageCost: number;
  ShippmentType: "ByRoad" | "BySea" | "ByAir";
};

export type NotificatonOperation = {
  message: string;
};
