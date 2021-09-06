import { CoffeeContext } from "../classes/coffee.context";
import { ICoffee } from "../interfaces/coffee.interface";

export class Coffee implements ICoffee {

  private flavor!: string;

  setFlavor(flavor: string): void {
    this.flavor = flavor;
    console.log(`Coffee is created! - ${flavor}.`);
  }

  getFlavor(): string {
    return this.flavor;
  }
    
  serveCoffee(context: CoffeeContext): void {
    console.log(`Serving ${this.flavor} to the table #${context.getTable()}.`);
  }
}