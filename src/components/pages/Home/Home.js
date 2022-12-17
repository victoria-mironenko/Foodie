import { Component } from "../../../core";
export class HomePage extends Component {

    render() {
        return `
        <featured-recipe></featured-recipe>
        <my-categories></my-categories>
        <choosing-recipe></choosing-recipe>
        <learn-more></learn-more>
        <on-instagram></on-instagram>
        <more-recipes></more-recipes>
        <subscribe-card></subscribe-card>
        `
    }
}

customElements.define('home-page', HomePage)