import { appRoutes } from '../../constants/appRoutes';
import * as core from '../../core';
import './menu.scss';

export class Menu extends core.Component {
    constructor() {
        super();
        this.props = {};
        this.state = {
            isVisible: false,
            activePath: window.location.pathname,
        };
    }

    static get observedAttributes() {
        return ['items'];
    };

    onChangeRoute = (evt) => {
        this.setState((state) => {
            return {
                ...state,
                activePath: evt.detail.target,
            };
        });
    };

    isActiveLink(path) {
        return this.state.activePath === path ? "active" : "";
    }

    toggleMenu = () => {
        this.setState((state) => {
            return {
                ...state,
                isVisible: !state.isVisible,
            }
        })

    }

    componentDidMount() {
        window.addEventListener('toggle-menu', this.toggleMenu);
        window.addEventListener('change-route', this.toggleMenu);
        window.addEventListener('change-route', this.onChangeRoute);
    }

    componentWillUnmount() {
        window.removeEventListener('toggle-menu', this.toggleMenu);
        window.removeEventListener('change-route', this.toggleMenu);
        window.removeEventListener('change-route', this.onChangeRoute);
    }


    render() {
        const items = JSON.parse(this.props.items);
        return `
        <style>
            .menu__link{
                display: inline-block;
                text-decoration: none;
            }

            .active{
                color: rgba(255, 116, 38, 1);
            }

            @media screen and (max-width: 882px) {
                .active{
                    color: rgba(255, 116, 38, 1)!important;
                }
            }
        </style>
        <nav class="${this.state.isVisible ? 'open' : 'closed'}">
            <ul class="menu-list">
                ${items.map((item) => {
                    return `
                    <li class="menu__item">
                        <my-link class="my-link" to="${item.to}">
                            <span class="menu__link ${this.isActiveLink(item.to)}">${item.label}</span>
                        </my-link>
                    </li>
                    `
                }).join('')}
                

                <li class="menu__item"> 
                    <a href="#" class="sign-out-link">
                        <span class="menu__link">Sigh out</span>
                    </a>
                </li>
                
            </ul>
        </nav>
        
        `
    }

}

customElements.define('my-menu', Menu);

