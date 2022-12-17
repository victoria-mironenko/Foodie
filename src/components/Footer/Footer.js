import { Component } from "../../core";
import './footer.scss';

export class Footer extends Component {
    constructor() {
        super();
        this.props = {};
        this.state = {};
    }

    render() {
        return `
        <footer class="footer">
            <div class="footer__wrapper container">
                <div class="footer__top">
                    <div>
                        <a href="#" class="footer__logo">
                            <img src="../../assets/images/logo.svg" alt="logo">
                        </a>
                        <p class="footer__info">Lorem ipsum dolor sit amet, consectetuipisicing elit,</p>
                    </div>
                    <nav class="footer__menu menu">
                        <ul class="menu-list">
                            <li class="menu__item">
                                <a class="menu__link" href="#">Recipes</a>
                            </li>
                            <li class="menu__item">
                                <a class="menu__link" href="#">Blog</a>
                            </li>
                            <li class="menu__item">
                                <a class="menu__link" href="#">Contact</a>
                            </li>
                            <li class="menu__item">
                                <a class="menu__link" href="#">About us</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="footer__bottom">
                    <div>
                        <img class="copyright" src="../../assets/images/copyright.svg" alt="copyright">
                    </div>
                    <ul class="footer__social-list social-list">
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
        </footer>
        `
    }
}

customElements.define('my-footer', Footer);