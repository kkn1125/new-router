import Component from "../../model/Component";

class Header extends Component {
  template: string;
  constructor(props?: any) {
    super({
      tagName: "div",
      props,
      classList: ["wrap"],
      style: {
        position: "relative",
      },
    });
    this.template = `header`;
  }
}

export default new Header({});
