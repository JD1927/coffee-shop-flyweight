import { CoffeeFactory } from '../factories/coffee.factory';
import { Coffee } from '../flyweights/coffee.flyweight';
import { CoffeeContext } from './coffee.context';

export class Waitress {
  private static coffees: Coffee[] = [];
  private static tables: CoffeeContext[] = [];
  private static ordersCount: number = 0;
  private static coffeeFactory: CoffeeFactory;


  static takeOrder(flavor: string, table: number): void {
    this.coffees[this.ordersCount] = this.coffeeFactory.getCoffeeFlavor(flavor);
    const context = new CoffeeContext();
    context.setTable(table);
    this.tables[this.ordersCount] = context;
    this.ordersCount++;
  }

  static work(): void {
    this.coffeeFactory = new CoffeeFactory();

    this.takeOrder("Cappuccino", 2);
    this.takeOrder("Cappuccino", 2);
    this.takeOrder("Regular Coffee", 1);
    this.takeOrder("Regular Coffee", 2);
    this.takeOrder("Regular Coffee", 3);
    this.takeOrder("Regular Coffee", 4);
    this.takeOrder("Cappuccino", 4);
    this.takeOrder("Cappuccino", 5);
    this.takeOrder("Regular Coffee", 3);
    this.takeOrder("Cappuccino", 3);

    this.coffees.forEach((coffee, index) => {
      coffee.serveCoffee(this.tables[index]);
    });

    console.log(`Total Coffee objects made: ${this.coffeeFactory.getTotalCoffeeFlavors()}`);
  }

}