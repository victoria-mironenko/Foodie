import { Component } from "../../core";
import './more-recipes.scss';

export class MoreRecipes extends Component {
    constructor() {
        super();
        this.state = {};
        this.props = {};
    }

    render() {
        return `
        
    <section class="more-recipes">
        <div class="more-recipes__wrapper container">
            <div class="more-recipes__titles">
                <h2>Try this delicious recipe<br>to make your day</h2>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor<br> incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div class="more-recipes__grid">
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
                <div class="more-recipes__item">
                    <div class="more-recipes__like">
                        <div class="round">
                            <img src="../../assets/images/homepage/choosing-recipe/heart.svg" alt="heart">
                        </div>
                    </div>
                    <img src="../../assets/images/homepage/more-recipes/image5.jpg" alt="chicken-salad">
                    <p class="title-p more-recipes__title-p">Rainbow Chicken Salad with Almond Honey Mustard Dressing</p>
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
                    <img src="../../assets/images/homepage/more-recipes/image6.jpg" alt="spicy-sandwiches">
                    <p class="title-p more-recipes__title-p">Barbeque Spicy Sandwiches with Chips</p>
                    <div class="more-recipes__cooking">
                        <div class="timer">
                            <img src="../../assets/images/homepage/timer.svg" alt="timer">
                            <p class="details">30 Minutes</p>
                        </div>
                        <div class="dish">
                            <img src="../../assets/images/homepage/forkKnife.svg" alt="fork-and-knife">
                            <p class="details">Snack</p>
                        </div>
                    </div>
                </div>
                <div class="more-recipes__item">
                    <div class="more-recipes__like">
                        <div class="round">
                            <img src="../../assets/images/homepage/choosing-recipe/heart.svg" alt="heart">
                        </div>
                    </div>
                    <img src="../../assets/images/homepage/more-recipes/image7.jpg" alt="lettuce-wraps">
                    <p class="title-p more-recipes__title-p">Firecracker Vegan Lettuce Wraps - Spicy!</p>
                    <div class="more-recipes__cooking">
                        <div class="timer">
                            <img src="../../assets/images/homepage/timer.svg" alt="timer">
                            <p class="details">30 Minutes</p>
                        </div>
                        <div class="dish">
                            <img src="../../assets/images/homepage/forkKnife.svg" alt="fork-and-knife">
                            <p class="details">Seafood</p>
                        </div>
                    </div>
                </div>
                <div class="more-recipes__item">
                    <div class="more-recipes__like">
                        <div class="round">
                            <img src="../../assets/images/homepage/choosing-recipe/heart.svg" alt="heart">
                        </div>
                    </div>
                    <img src="../../assets/images/homepage/more-recipes/image8.jpg" alt="chicken-soup">
                    <p class="title-p more-recipes__title-p">Chicken Ramen Soup with Mushroom</p>
                    <div class="more-recipes__cooking">
                        <div class="timer">
                            <img src="../../assets/images/homepage/timer.svg" alt="timer">
                            <p class="details">30 Minutes</p>
                        </div>
                        <div class="dish">
                            <img src="../../assets/images/homepage/forkKnife.svg" alt="fork-and-knife">
                            <p class="details">Japanese</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
        `
    }
}

customElements.define('more-recipes', MoreRecipes);