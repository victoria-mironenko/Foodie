import { Component } from "../../core";
import './subscribe-card.scss';

export class SubscribeCard extends Component {
    constructor() {
        super();
        this.state = {};
        this.props = {};
    }

    render() {
        return `
        
    <section class="subscribe-card">
        <div class="subscribe-card__wrapper container">
            <div class="subscribe-card__titles">
                <h2>Deliciousness to your inbox</h2>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor<br> incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <img class="subscribe-img-left" src="../../assets/images/homepage/subscribe1.png" alt="vegetables">
            <img class="subscribe-img-right" src="../../assets/images/homepage/subscribe2.png" alt="vegetables">
            <form class="subscribe-form" action="">
                <input class="subscribe-form__input" type="email" required name="user-mail">
                <span>Your email address...</span>
                <button class="subscribe-form__button">Subscribe</button>
            </form>
        </div>
    </section>
        
        `
    }
}

customElements.define('subscribe-card', SubscribeCard);