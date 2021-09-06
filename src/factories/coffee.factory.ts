import { Coffee } from '../flyweights/coffee.flyweight';

export class CoffeeFactory {
  private flavors: Map<string, Coffee> = new Map<string, Coffee>();

  getCoffeeFlavor(flavorName: string): Coffee {
    let flavor = this.flavors.get(flavorName);
    if (!flavor) {
      flavor = new Coffee();
      flavor.setFlavor(flavorName);
      this.flavors.set(flavorName, flavor);
    }
    return flavor;
  }

  getTotalCoffeeFlavors(): number {
    return this.flavors.size;
  }
}