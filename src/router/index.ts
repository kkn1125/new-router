import { APP } from "../util/global";
import History from "./History";
import Page from "./Page";

export default class Router {
  pages: Page[] = [];
  history: History = new History();

  constructor(pages?: Page[]) {
    pages && (this.pages = pages);

    this.render();

    window.addEventListener("hashchange", (e) => {
      this.clear();
      console.log("hashchange", e);
      history.pushState({}, "", e.newURL);
      this.history.pushHistory();
      console.log(this.history);
      this.render();
    });
  }

  addPage(page: Page) {
    this.pages.push(page);
  }

  isExists(page: Page) {
    return this.pages.find((p) => p.name === page.name);
  }

  render() {
    const page = this.pages.find((page) => page.path === location.hash);
    page?.render();
  }

  forward() {
    history.pushState({}, "");
  }

  backward() {}

  clear() {
    APP.innerHTML = "";
  }
}
