import { Component } from "../../../core";

export class ContactPage extends Component {
    render() {
        return `
        <contact-card></contact-card>
        <subscribe-card></subscribe-card>
        <recommendation-recipe></recommendation-recipe>
        `;
    }
}

customElements.define('contact-page', ContactPage);