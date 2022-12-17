import { Component } from "../../../core";

export class BlogPage extends Component {
    render() {
        return `
        <blog-part></blog-part>
        <subscribe-card></subscribe-card>
        `;
    }
}

customElements.define("blog-page", BlogPage);
