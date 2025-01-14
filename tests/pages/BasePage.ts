export class BasePage {
  constructor(protected page: any) {}

  async navigate(path: string = "") {
    await this.page.goto(`${process.env.BASE_URL}${path}`);
  }

  async waitForLoadState() {
    await this.page.waitForLoadState("networkidle");
  }
}
