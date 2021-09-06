import { CoffeeContext } from '../classes/coffee.context';

export interface ICoffee {
  serveCoffee(context: CoffeeContext): void;
}