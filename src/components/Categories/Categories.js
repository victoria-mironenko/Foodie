import { Component } from "../../core";
import './categories.scss';

export class Categories extends Component {
    constructor() {
        super();
        this.state = {};
        this.props = {};
    }

    render() {
        return `
        <section class="categories">
        <div class="categories__wrapper container">
            <div class="categories__titles">
                <h2>Categories</h2>
                <div class="categories-more">
                    <a class="categories-more-link" href="#">View All Categories</a>
                </div>
            </div>
            <div class="categories__items">
                <a href="#"><img src="../../assets/images/homepage/categories/breakfast.png" alt="breakfast"></a>
                <a href="#"><img src="../../assets/images/homepage/categories/vegan.png" alt="vegan-meal"></a>
                <a href="#"><img src="../../assets/images/homepage/categories/meat.png" alt="meat"></a>
                <a href="#"><img src="../../assets/images/homepage/categories/dessert.png" alt="dessert"></a>
                <a href="#"><img src="../../assets/images/homepage/categories/lunch.png" alt="lunch"></a>
                <a href="#"><img src="../../assets/images/homepage/categories/chocolate.png" alt="chocolate"></a>
            </div>

        </div>
    </section>
        
        `
    }
}

customElements.define('my-categories', Categories);