import { Component } from "../../core";
import './title.scss';

export class Title extends Component {
    constructor() {
        super();
        this.state = {};
        this.props = {};
    }

    render() {
        return `
        
    <section class="title-block">
        <div class="title-block__wrapper container">
            <h1>Full Guide to Becoming a Professional Chef</h1>
            <div class="blogger-block">
                <div class="blogger-block__blogger">
                    <div class="blogger-image">
                        <img src="../../assets/images/blog-post-page/blogger.png" alt="blogger-photo">
                    </div>
                    <div class="blogger-name">John Smith</div>
                </div>
                <div class="blogger-block__date details">15 March 2022</div>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
            </p>
            <img class="main-image" src="../../assets/images/blog-post-page/main-image.jpg" alt="chef">
        </div>
    </section>
        
        `
    }
}

customElements.define('my-title', Title)