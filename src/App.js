import * as core from "./core";
import './components';
import { appRoutes } from "./constants/appRoutes";

export class App extends core.Component {
    constructor() {
        super();
        this.state = {};
        this.props = {};
    }

    render() {
        return `
        <div class="wrapper">
            <my-router>
                <my-header></my-header>
                <main class="main">
                    <my-route path="${appRoutes.home}" component="home-page" title="Home Page"></my-route>
                    <my-route path="${appRoutes.recipe}" component="recipe-page" title="Recipe Page"></my-route>
                    <my-route path="${appRoutes.blog}" component="blog-page" title="Blog Page"></my-route>
                    <my-route path="${appRoutes.contact}" component="contact-page" title="Contact Page"></my-route>
                    <my-route path="${appRoutes.about}" component="about-page" title="About Page"></my-route>
                    <my-route path="${appRoutes.errorPage}" component="error-page" title="Not Found Page"></my-route>
                    <my-outlet></my-outlet>
                </main>
                <my-footer></my-footer>
            </my-router>
        </div>
        
        `
    }

}

customElements.define("my-app", App);




