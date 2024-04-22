export class Logger {
  private Product: string;
  private DebugMode: boolean = false;

  constructor(DebugMode: boolean, Product: string) {
    this.DebugMode = DebugMode;
    this.Product = Product;
  }

  public Debug(Message: string) {
    this.DebugMode
      ? console.log(`[${this.Product} (DEBUG)]: ${Message}`)
      : null;
  }

  public Info(Message: string) {
    console.log(`[${this.Product} (INFO)]: ${Message}`);
  }

  public Warn(Message: string) {
    console.log(`[${this.Product} (WARN)]: ${Message}`);
  }

  public Error(Message: string) {
    console.log(`[${this.Product} (ERROR)]: ${Message}`);
  }

  public Fatal(Message: string) {
    console.log(`[${this.Product} (FATAL)]: ${Message}`);
  }
}
