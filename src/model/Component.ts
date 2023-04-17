import { divideToDash } from "../util/tool";

type ComponentConstructorType = {
  tagName: string;
  props?: any;
  classList?: string[];
  innerContent?: string;
  component?: Component;
  style?: { [k in keyof CSSStyleDeclaration]?: any };
};

export default class Component {
  element: HTMLElement = document.createElement("div");
  parent: HTMLElement = document.querySelector("#app") || this.createApp();
  tagName: string;
  id?: string = "";
  classList: string[] = [];
  props: any = {};
  innerHTML: string = "";
  innerText: string = "";
  innerComponent: Component;
  style: { [k in keyof CSSStyleDeclaration]?: any } = {};
  template: string;

  createApp() {
    const app = document.createElement("div");
    app.id = "app";
    document.body.insertAdjacentElement("beforeend", app);
    return app;
  }

  constructor({
    tagName,
    props,
    classList,
    innerContent,
    component,
    style,
  }: ComponentConstructorType) {
    this.tagName = tagName;
    this.element = document.createElement(this.tagName);
    classList && (this.classList = classList);
    props && (this.props = props);
    innerContent && this.setContent(innerContent);
    component && (this.innerComponent = component);
    if (style) {
      console.log(style);
      Object.entries(style).forEach(([k, v]) => {
        this.element.style[divideToDash(k) as any] = v;
      });
    }
  }

  setContent(content: string | Component) {
    if (typeof content === "string") {
      this.innerHTML = content;
      this.innerText = content;
    } else {
      this.innerComponent = content;
    }
  }

  update(props: any) {
    this.props = props;
    this.render();
  }

  render() {
    if (this.props.id) {
      this.element.id = this.props.id;
    }
    if (this.classList.length > 0) {
      this.element.classList.add(...this.classList);
    }
    if (this.innerText) {
      this.element.innerText = this.innerText;
    }
    if (this.innerHTML) {
      this.element.innerHTML = this.innerHTML;
    }
    if (this.template) {
      this.element.innerHTML = this.template;
    }
    if (this.props) {
      Object.entries(this.props).forEach(([k, v]) => {
        this.element.setAttribute(divideToDash(k), JSON.stringify(v));
      });
    }

    this.element = this.parent.insertAdjacentElement(
      "beforeend",
      this.element
    ) as HTMLElement;

    if (this.innerComponent) {
      this.innerComponent.parent = this.element;
      console.log(this.innerComponent.parent);
      this.innerComponent.render();
    }
  }
}
