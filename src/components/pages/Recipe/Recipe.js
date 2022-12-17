import { Component } from "../../../core";

export class RecipePage extends Component {

    render() {
        return `
        <recipe-execution></recipe-execution>
        <my-cooking></my-cooking>
        <subscribe-card></subscribe-card>
        <recommendation-recipe></recommendation-recipe>
        `
    }

}

customElements.define('recipe-page', RecipePage);