import { Component } from "../../core";
import './choosing-recipe.scss';

export class ChoosingRecipe extends Component {


    render() {
        return `
        
        <section class="choosing-recipe">
        <div class="choosing-recipe__wrapper container">
            <div class="choosing-recipe__titles">
                <h2>Simple and tasty recipes</h2>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut<br>
                    labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div class="choosing-recipe__grid">
                <div class="recipe-item">
                    <div class="recipe-item__like">
                        <div class="round">
                            <img src="../../assets/images/homepage/choosing-recipe/heart.svg" alt="heart">
                        </div>
                    </div>
                    <img class="recipe-item__image" src="../../assets/images/homepage/choosing-recipe/snack.jpg" alt="snack">
                    <h5>Big and Juicy Wagyu Beef Cheeseburger</h5>
                    <div class="recipe-cooking">
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
                <div class="recipe-item">
                    <div class="recipe-item__like">
                        <div class="round">
                            <img src="../../assets/images/homepage/choosing-recipe/heart.svg" alt="heart">
                        </div>
                    </div>
                    <img class="recipe-item__image" src="../../assets/images/homepage/choosing-recipe/fish.jpg" alt="fish">
                    <h5>Fresh Lime Roasted Salmon with Ginger Sauce</h5>
                    <div class="recipe-cooking">
                        <div class="timer">
                            <img src="../../assets/images/homepage/timer.svg" alt="timer">
                            <p class="details">30 Minutes</p>
                        </div>
                        <div class="dish">
                            <img src="../../assets/images/homepage/forkKnife.svg" alt="fork-and-knife">
                            <p class="details">Fish</p>
                        </div>
                    </div>
                </div>
                <div class="recipe-item">
                    <div class="recipe-item__like">
                        <div class="round">
                            <img src="../../assets/images/homepage/choosing-recipe/heart.svg" alt="heart">
                        </div>
                    </div>
                    <img class="recipe-item__image" src="../../assets/images/homepage/choosing-recipe/pancake.jpg" alt="pancake">
                    <h5>Strawberry Oatmeal Pancake with Honey Syrup</h5>
                    <div class="recipe-cooking">
                        <div class="timer">
                            <img src="../../assets/images/homepage/timer.svg" alt="timer">
                            <p class="details">30 Minutes</p>
                        </div>
                        <div class="dish">
                            <img src="../../assets/images/homepage/forkKnife.svg" alt="fork-and-knife">
                            <p class="details">Breakfast</p>
                        </div>
                    </div>
                </div>
                <div class="recipe-item">
                    <div class="recipe-item__like">
                        <div class="round">
                            <img src="../../assets/images/homepage/choosing-recipe/heart.svg" alt="heart">
                        </div>
                    </div>
                    <img class="recipe-item__image" src="../../assets/images/homepage/choosing-recipe/salad.jpg" alt="salad">
                    <h5>Fresh and Healthy Mixed Mayonnaise Salad</h5>
                    <div class="recipe-cooking">
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
                <div class="recipe-item">
                    <div class="recipe-item__like">
                        <div class="round">
                            <img src="../../assets/images/homepage/choosing-recipe/heart.svg" alt="heart">
                        </div>
                    </div>
                    <img class="recipe-item__image" src="../../assets/images/homepage/choosing-recipe/meat.jpg" alt="meat">
                    <h5>Chicken Meatballs with Cream Cheese</h5>
                    <div class="recipe-cooking">
                        <div class="timer">
                            <img src="../../assets/images/homepage/timer.svg" alt="timer">
                            <p class="details">30 Minutes</p>
                        </div>
                        <div class="dish">
                            <img src="../../assets/images/homepage/forkKnife.svg" alt="fork-and-knife">
                            <p class="details">Meat</p>
                        </div>
                    </div>
                </div>
                <div class="choosing-recipe__ads details">
                    <a href="#">www.foodieland.com</a>
                </div>
                <div class="recipe-item">
                    <div class="recipe-item__like">
                        <div class="round">
                            <img src="../../assets/images/homepage/choosing-recipe/heart.svg" alt="heart">
                        </div>
                    </div>
                    <img class="recipe-item__image" src="../../assets/images/homepage/choosing-recipe/sweet.jpg" alt="sweet">
                    <h5>Fruity Pancake with Orange & Blueberry</h5>
                    <div class="recipe-cooking">
                        <div class="timer">
                            <img src="../../assets/images/homepage/timer.svg" alt="timer">
                            <p class="details">30 Minutes</p>
                        </div>
                        <div class="dish">
                            <img src="../../assets/images/homepage/forkKnife.svg" alt="fork-and-knife">
                            <p class="details">Sweet</p>
                        </div>
                    </div>
                </div>
                <div class="recipe-item">
                    <div class="recipe-item__like">
                        <div class="round">
                            <img src="../../assets/images/homepage/choosing-recipe/heart.svg" alt="heart">
                        </div>
                    </div>
                    <img class="recipe-item__image" src="../../assets/images/homepage/choosing-recipe/rice.jpg" alt="rice">
                    <h5>The Best Easy One Pot Chicken and Rice</h5>
                    <div class="recipe-cooking">
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
                <div class="recipe-item">
                    <div class="recipe-item__like">
                        <div class="round">
                            <img src="../../assets/images/homepage/choosing-recipe/heart.svg" alt="heart">
                        </div>
                    </div>
                    <img class="recipe-item__image" src="../../assets/images/homepage/choosing-recipe/noodles.jpg" alt="noodles">
                    <h5>The Creamiest Creamy Chicken and Bacon Pasta</h5>
                    <div class="recipe-cooking">
                        <div class="timer">
                            <img src="../../assets/images/homepage/timer.svg" alt="timer">
                            <p class="details">30 Minutes</p>
                        </div>
                        <div class="dish">
                            <img src="../../assets/images/homepage/forkKnife.svg" alt="fork-and-knife">
                            <p class="details">Noodles</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
        
        `
    }
}

customElements.define('choosing-recipe', ChoosingRecipe);