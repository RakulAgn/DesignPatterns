import {
  ByAirLogistics,
  ByRoadLogistics,
  BySeaLogistics,
  Logistics,
} from "./factoryMethodExamples/LogisticsFactory";

function logisticsOperations(logistics: Logistics) {
  const packagingInformation = logistics.preparePackage();
  console.table(packagingInformation);
}

console.warn("By Road Logistics:");
logisticsOperations(new ByRoadLogistics());

console.warn("\nBy Sea Logistics:");
logisticsOperations(new BySeaLogistics());

console.warn("\nBy Air Logistics:");
logisticsOperations(new ByAirLogistics());
