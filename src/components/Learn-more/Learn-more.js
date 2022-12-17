import { Component } from "../../core";
import './learn-more.scss';

export class LearnMore extends Component {
    constructor() {
        super();
        this.state = {};
        this.props = {};
    }

    render() {
        return `
        
    <section class="learn-more">
        <div class="learn-more__wrapper container">
            <div class="learn-more__info">
                <h2>Everyone can be a chef in their own kitchen</h2>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <div class="learn-more-link">
                    <a href="#">Learn More</a>
                </div>
            </div>
            <div class="learn-more__image">
                <img src="../../assets/images/homepage/lean-more.png" alt="cook">
            </div>
        </div>
    </section>
        
        `
    }
}

customElements.define('learn-more', LearnMore);