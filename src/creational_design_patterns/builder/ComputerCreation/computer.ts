import { ComputerCreation, CPU, GPU, RAM, Storage } from "./interface";

export class Computer {
  cpu?: CPU;
  ram?: RAM;
  storage?: Storage;
  gpu?: GPU;

  toString(): string {
    return `Computer:
    CPU: ${
      this.cpu
        ? `${this.cpu.brand} ${this.cpu.model} ${this.cpu.clockSpeed}GHz`
        : "Not specified"
    }
    RAM: ${this.ram ? `${this.ram.size}GB ${this.ram.type}` : "Not specified"}
    Storage: ${
      this.storage
        ? `${this.storage.size}GB ${this.storage.type}`
        : "Not specified"
    }
    GPU: ${
      this.gpu
        ? `${this.gpu.brand} ${this.gpu.model} ${this.gpu.memory}GB`
        : "Not specified"
    }`;
  }
}

export class DesktopComputerCreation implements ComputerCreation {
  private computer: Computer = new Computer();

  reset(): void {
    this.computer = new Computer();
  }
  setCPU(cpu: CPU) {
    this.computer.cpu = cpu;
    return this;
  }
  setRAM(ram: RAM) {
    this.computer.ram = ram;
    return this;
  }
  setStorage(storage: Storage): this {
    this.computer.storage = storage;
    return this;
  }
  setGPU(gpu: GPU): this {
    this.computer.gpu = gpu;
    return this;
  }
  getResult(): Computer {
    const result = this.computer;

    this.reset();
    return result;
  }
}

// Usage of Computer Creation Lets Create Some Predefined Configured Computers
export class ComputerDirector {
  private builder: ComputerCreation;

  constructor(builder: ComputerCreation) {
    this.builder = builder;
  }

  createGamingPc(): Computer {
    return this.builder
      .setCPU({
        brand: "Intel",
        model: "i9-11900k",
        clockSpeed: 3.5,
      })
      .setRAM({ size: 32, type: "DDR4" })
      .setStorage({ size: 1000, type: "SSD" })
      .setGPU({ brand: "NVIDIA", model: "RTX 3080", memory: 10 })
      .getResult();
  }

  createOfficePc(): Computer {
    return this.builder
      .setCPU({ brand: "Intel", model: "i5-11600", clockSpeed: 2.8 })
      .setRAM({ size: 16, type: "DDR4" })
      .setStorage({ size: 512, type: "SSD" })
      .getResult();
  }
}
