import Component from "../model/Component";
import { callable } from "../util/tool";

export default class About extends Component {
  template: string;
  constructor(props: any) {
    super({
      tagName: "div",
      props,
      classList: ["wrap"],
      style: {
        position: "relative",
      },
    });
    this.template = `
		<div>
			<span class="hover">about</span>
		</div>
		`;
  }
}
