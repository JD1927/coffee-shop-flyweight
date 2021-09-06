export class CoffeeContext {
  private tableNumber!: number;

  setTable(tableNumber: number): void {
    this.tableNumber = tableNumber;
  }

  getTable(): number {
    return this.tableNumber;
  }
}