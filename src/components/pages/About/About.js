import { Component } from "../../../core";

export class AboutPage extends Component {
    render() {
        return `
        <my-title></my-title>
        <content-about></content-about>
        <subscribe-card></subscribe-card>
        <recommendation-recipe></recommendation-recipe>
        `;
    }
}

customElements.define('about-page', AboutPage);