import { html, css, LitElement, CSSResultGroup, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { getColorByType } from "./common/js/util";
import { TagType, TagSize } from "./interface/CmsTag";

@customElement("cms-tag")
export class CmsTag extends LitElement {
  static styles = css`
    :host {
      --scale: 0.85;
      --edge: 50px;
      font-weight: 400;
    }
    :host > .tag {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      white-space: nowrap;
      line-height: 1;
      font-size: 12px;
    }
  `;

  @property({ type: String }) type: TagType = "default";

  @property({ type: String }) size: TagSize = "default";

  @property({ type: Boolean }) round = false;

  @state() tagStyle = {};

  getColor() {
    return getColorByType(this.type);
  }

  getHeight = () => {
    let height = 24;
    switch (this.size) {
      case "default":
        height = 24;
        break;
      case "large":
        height = 32;
        break;
      case "small":
        height = 20;
        break;
    }
    return (height + "px") as unknown as CSSResultGroup;
  };

  getPadding = () => {
    let padding = 9;
    switch (this.size) {
      case "default":
        padding = 9;
        break;
      case "large":
        padding = 13;
        break;
      case "small":
        padding = 7;
        break;
    }
    return (padding + "px") as unknown as CSSResultGroup;
  };

  render() {
    this.tagStyle = {
      color: `${this.getColor()} 1)`,
      backgroundColor: `${this.getColor()} 0.1)`,
      border: `1px solid ${this.getColor()} 0.2)`,
      height: `${unsafeCSS(this.getHeight())}`,
      padding: `0 ${unsafeCSS(this.getPadding())}`,
      borderRadius: this.round ? "9999px" : "4px",
    };
    return html`
      <span class="tag" style=${styleMap(this.tagStyle)}>
        <span class="tag-content">
          <slot></slot>
        </span>
      </span>
    `;
  }
}
