import Component from "../model/Component";

export default class Page {
  name: string;
  path: string;
  header: Component;
  footer: Component;
  component: Component = new Component({
    tagName: "div",
    innerContent: "test",
  });
  constructor(name: string, path: string, component?: Component) {
    this.name = name;
    this.path = path ? "#" + path : "";
    component && (this.component = component);
  }

  setComponent(component: Component) {
    this.component = component;
  }

  setHeader(header: Component) {
    this.header = header;
  }

  setFooter(footer: Component) {
    this.footer = footer;
  }

  renderHeader() {
    if (!this.header) return;
    const wrap = document.createElement("div");
    wrap.id = "header";
    this.component.parent.insertAdjacentElement("beforebegin", wrap);
    this.header.parent = wrap;
    this.header.render();
  }
  renderFooter() {
    if (!this.footer) return;
    const wrap = document.createElement("div");
    wrap.id = "footer";
    this.component.parent.insertAdjacentElement("afterend", wrap);
    this.footer.parent = wrap;
    this.footer.render();
  }

  render() {
    this.component.render();
    this.renderHeader();
    this.renderFooter();
  }
}
