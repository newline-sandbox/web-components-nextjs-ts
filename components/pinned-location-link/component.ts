import template, { TemplateProps } from "./template";
import { extractPropsFromAttrs } from "../../shared";

class PinnedLocationLink extends HTMLElement {
  connectedCallback() {
    const props = extractPropsFromAttrs(this.attributes) as TemplateProps;

    this.innerHTML = template(props);
  }
}

customElements.define("pinned-location-link", PinnedLocationLink);
