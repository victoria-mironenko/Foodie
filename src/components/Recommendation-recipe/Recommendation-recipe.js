import { Component } from "../../core";
import './recommendation-recipe.scss';

export class RecommendationRecipe extends Component {
    constructor() {
        super();
        this.state = {};
        this.props = {};
    }

    render() {
        return `
        
    <section class="recommendation-recipe">
        <div class="recommendation-recipe__wrapper container">
            <h3>You may like these recipe too</h3>
            <div class="recommendation-recipe__grid">
                <div class="more-recipes__item">
                    <div class="more-recipes__like">
                        <div class="round">
                            <img src="../../assets/images/homepage/choosing-recipe/heart.svg" alt="heart">
                        </div>
                    </div>
                    <img src="../../assets/images/homepage/more-recipes/image1.jpg" alt="fruit-salad">
                    <p class="title-p more-recipes__title-p">Mixed Tropical Fruit Salad with Superfood Boosts</p>
                    <div class="more-recipes__cooking">
                        <div class="timer">
                            <img src="../../assets/images/homepage/timer.svg" alt="timer">
                            <p class="details">30 Minutes</p>
                        </div>
                        <div class="dish">
                            <img src="../../assets/images/homepage/forkKnife.svg" alt="fork-and-knife">
                            <p class="details">Healthy</p>
                        </div>
                    </div>
                </div>
                <div class="more-recipes__item">
                    <div class="more-recipes__like">
                        <div class="round">
                            <img src="../../assets/images/homepage/choosing-recipe/heart.svg" alt="heart">
                        </div>
                    </div>
                    <img src="../../assets/images/homepage/more-recipes/image2.jpg" alt="cheeseburger">
                    <p class="title-p more-recipes__title-p">Big and Juicy Wagyu Beef Cheeseburger</p>
                    <div class="more-recipes__cooking">
                        <div class="timer">
                            <img src="../../assets/images/homepage/timer.svg" alt="timer">
                            <p class="details">30 Minutes</p>
                        </div>
                        <div class="dish">
                            <img src="../../assets/images/homepage/forkKnife.svg" alt="fork-and-knife">
                            <p class="details">Western</p>
                        </div>
                    </div>
                </div>
                <div class="more-recipes__item">
                    <div class="more-recipes__like">
                        <div class="round">
                            <img src="../../assets/images/homepage/choosing-recipe/heart.svg" alt="heart">
                        </div>
                    </div>
                    <img src="../../assets/images/homepage/more-recipes/image3.jpg" alt="fried-rice">
                    <p class="title-p more-recipes__title-p">Healthy Japanese Fried Rice with Asparagus</p>
                    <div class="more-recipes__cooking">
                        <div class="timer">
                            <img src="../../assets/images/homepage/timer.svg" alt="timer">
                            <p class="details">30 Minutes</p>
                        </div>
                        <div class="dish">
                            <img src="../../assets/images/homepage/forkKnife.svg" alt="fork-and-knife">
                            <p class="details">Healthy</p>
                        </div>
                    </div>
                </div>
                <div class="more-recipes__item">
                    <div class="more-recipes__like">
                        <div class="round">
                            <img src="../../assets/images/homepage/choosing-recipe/heart.svg" alt="heart">
                        </div>
                    </div>
                    <img src="../../assets/images/homepage/more-recipes/image4.jpg" alt="vegetarian-taco">
                    <p class="title-p more-recipes__title-p">Cauliflower Walnut Vegetarian Taco Meat</p>
                    <div class="more-recipes__cooking">
                        <div class="timer">
                            <img src="../../assets/images/homepage/timer.svg" alt="timer">
                            <p class="details">30 Minutes</p>
                        </div>
                        <div class="dish">
                            <img src="../../assets/images/homepage/forkKnife.svg" alt="fork-and-knife">
                            <p class="details">Eastern</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
        `
    }
}

customElements.define('recommendation-recipe', RecommendationRecipe);