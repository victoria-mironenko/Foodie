import { Component } from "../../core";
import './burger.scss';

export class Burger extends Component {
    constructor() {
        super();
        this.props = {};
        this.state = {
            isActive: false,
        };
    }

    onClick = () => {
        this.dispatch('toggle-menu');
        this.setState((state) => {
            return {
                ...state,
                isActive: !state.isActive,
            }
        })
    }

    changeBurger = () => {
        this.setState((state) => {
            return {
                ...state,
                isActive: !state.isActive,
            }
        })
    }


    componentDidMount() {
        this.addEventListener('click', this.onClick);
        window.addEventListener('change-route', this.changeBurger);
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.onClick);
        window.removeEventListener('change-route', this.changeBurger);
    }

    render() {
        return `
        <div class="header-burger ${this.state.isActive ? 'active' : ''}"><span></span></div>
        `
    }
}

customElements.define('my-burger', Burger);