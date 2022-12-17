import { Component } from "../../core";

export class ContentAbout extends Component {
    constructor() {
        super();
        this.state = {};
        this.props = {};
    }

    render() {
        return `
        
    <div class="blog-content container">
        <div class="blog-content__questions">
            <div class="blog-content__item blog-content__item_first">
                <h5>How did you start out in the food industry?</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
                </p>
            </div>
            <div class="blog-content__item blog-content__item_second">
                <h5>What do you like most about your job?</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
                </p>
            </div>
            <div class="blog-content__item blog-content__item_third">
                <h5 class="except">Do you cook at home on your days off?</h5>
                <img class="blog-content__image" src="../../assets/images/blog-post-page/girl-image.jpg" alt="cooking-girl">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
                </p>
            </div>
            <div class="blog-content__item">
                <h5>What would your advice be to young people looking to get their foot in the door?</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
                </p>
            </div>
            <blockquote>
                <P>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.”</P>
            </blockquote>
            <div class="blog-content__item">
                <h5>What is the biggest misconception that people have about being a professional chef?</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
                </p>
            </div>
        </div>
        <div class="blog-content__share">
            <p class="share-text">SHARE THIS ON:</p>
            <ul class="share__social-list">
                <li>
                    <a href="#">
                        <img class="social-logo" src="../../assets/images/social/facebook-logo.svg" alt="facebook-icon">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="social-logo" src="../../assets/images/social/twitter-logo.svg" alt="twitter-icon">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="social-logo" src="../../assets/images/social/instagram-logo.svg" alt="instagram-icon">
                    </a>
                </li>
            </ul>
        </div>
    </div>
        
        `
    }
}

customElements.define('content-about', ContentAbout);