import Component from "../../model/Component";

class Footer extends Component {
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
    this.template = `<div>
			<span>Copyright 2023. devkimson All rights reserved.</span>
		</div>`;
  }
}

export default new Footer({});
