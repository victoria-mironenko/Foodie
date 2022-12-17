import { appRoutes } from '../../constants/appRoutes';
import * as core from '../../core';
import './header.scss'

export class Header extends core.Component {
    constructor() {
        super();
        this.state = {
            menuItems: [
                {to: appRoutes.home, label: 'Home'},
                {to: appRoutes.recipe, label: 'Recipes'},
                {to: appRoutes.blog, label: 'Blog'},
                {to: appRoutes.contact, label: 'Contact'},
                {to: appRoutes.about, label: 'About us'},
            ]
        };
        this.props = {};
    }

    


    render () {
        return `

        <header class="header">
        <div class="header__container container">
            <a href="#" class="header__logo">
                <img src="../../assets/images/logo.svg" alt="logo">
            </a>
            <my-menu class="header__menu menu" items='${JSON.stringify(this.state.menuItems)}'></my-menu>
            <ul class="header__social-list social-list">
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
            <my-burger class="header-burger"></my-burger>
        </div>
    </header>

        `    }
}

customElements.define('my-header', Header)