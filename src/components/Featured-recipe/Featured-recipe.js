import { Component } from "../../core";
import './featured-recipe.scss';

export class FeatutedRecipe extends Component {
    
    render() {
        return `
            <section class="featured-recipe">
                <div class="featured-recipe-container">
                    <div class="left-el"></div>
                    <div class="featured-recipe__wrapper container-conc">
                        <div class="featured-recipe__badge">
                            <img class="badge" src="../../assets/images/homepage/badge.svg" alt="badge">
                        </div>
                        <div class="featured-recipe__info">
                            <div class="features-recipe__top">
                                <div class="subtitle-block">
                                    <img src="../../assets/images/homepage/recipe-list.png">
                                    <div class="subtitle-text">Hot Recipes</div>
                                </div>
                                <h1>Spicy delicious<br> chicken wings</h1>
                                <p class="featured-recipe__text">Lorem ipsum dolor sit amet, consectetuipisicing elit,
                                    sed
                                    do eiusmod<br> tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                                <div class="hot-recipe-details">
                                    <div class="hot-recipe__timer">
                                        <img src="../../assets/images/homepage/timer.svg" alt="timer">
                                        <p class="details">30 Minutes</p>
                                    </div>
                                    <div class="hot-recipe__dish">
                                        <img src="../../assets/images/homepage/forkKnife.svg" alt="fork-and-knife">
                                        <p class="details">Chicken</p>
                                    </div>
                                </div>
                            </div>
                            <div class="chef-block">
                                <div class="chef-block__author">
                                    <img src="../../assets/images/homepage/author.svg" alt="chef">
                                    <div class="chef-block__data">
                                        <div class="chef-name">John Smith</div>
                                        <p class="details">15 March 2022</p>
                                    </div>
                                </div>
                                <div class="chef-block__more">
                                    <a href="#">View Recipes</a>
                                    <img src="../../assets/images/homepage/arrow.svg" alt="arrow">
                                </div>
                            </div>
                        </div>
                        <div class="featured-recipe__image">
                            <img src="../../assets/images/homepage/baked-chicken-wings.jpg" alt="baked-chicken-wings">
                        </div>
                    </div>
                    <div class="right-el"></div>
                </div>
            </section>
        
        `
    }
}

customElements.define('featured-recipe', FeatutedRecipe);