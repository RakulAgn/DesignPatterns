import { Computer } from "./computer";

export interface CPU {
  brand: string;
  model: string;
  clockSpeed: number;
}

export interface RAM {
  size: number;
  type: string;
}

export interface Storage {
  size: number;
  type: "SSD" | "HDD";
}

export interface GPU {
  brand: string;
  model: string;
  memory: number;
}

export interface ComputerCreation {
  reset(): void;
  setCPU(cpu: CPU): this;
  setRAM(ram: RAM): this;
  setStorage(storage: Storage): this;
  setGPU(gpu: GPU): this;
  getResult(): Computer;
}
