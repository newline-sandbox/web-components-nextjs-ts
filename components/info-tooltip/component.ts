import { extractPropsFromAttrs } from "../../shared";
import template, { TemplateProps } from "./template";

class InfoTooltip extends HTMLElement {
  constructor() {
    super();

    // Safari does not support this feature. https://caniuse.com/mdn-api_htmlelement_attachinternals
    if (typeof this.attachInternals === "function") {
      const internals = this.attachInternals();

      let shadow = internals.shadowRoot;

      if (!shadow) {
        shadow = this.attachShadowDomImperatively();
      }
    } else {
      this.attachShadowDomImperatively();
    }
  }

  attachShadowDomImperatively() {
    const shadow = this.attachShadow({ mode: "open" });

    const props = extractPropsFromAttrs(this.attributes) as TemplateProps;

    shadow.innerHTML = template(props as TemplateProps, false);

    return shadow;
  }
}

customElements.define("info-tooltip", InfoTooltip);
