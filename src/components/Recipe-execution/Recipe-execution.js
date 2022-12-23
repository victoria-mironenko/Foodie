import { Component } from "../../core";
import './recipe-execution.scss';

export class RecipeExecution extends Component {
    

    render() {
        return `
        
    <section class="recipe-execution">
        <div class="recipe-execution__wrapper container">
            <div class="recipe-execution__titles">
                <div class="titles-info">
                    <h1>Health Japanese Fried Rice</h1>
                    <div class="recipe-details">
                        <div class="recipe-performer">
                            <img src="../../assets/images/homepage/author.svg" alt="chef">
                            <div class="recipe-performer__data">
                                <p class="recipe-performer__name chef-name">John Smith</p>
                                <p class="details">15 March 2022</p>
                            </div>
                        </div>
                        <div class="recipe-details__description">
                            <img src="../../assets/images/homepage/timer.svg" alt="timer-icon">
                            <div class="recipe-details__cooking-time">
                                <p class="cooking-time__first-line">PREP TIME</p>
                                <p class="details">15 Minutes</p>
                            </div>
                        </div>
                        <div class="recipe-details__description">
                            <img src="../../assets/images/homepage/timer.svg" alt="timer-icon">
                            <div class="recipe-details__cooking-time">
                                <p class="cooking-time__first-line">COOK TIME</p>
                                <p class="details">15 Minutes</p>
                            </div>
                        </div>
                        <div class="recipe-details__description">
                            <img src="../../assets/images/homepage/forkKnife.svg" alt="fork-and-knife">
                            <div class="recipe-details__cooking-time dishes">
                                <p class="details">Chicken</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="services">
                    <div class="print">
                        <div class="print__wrapper">
                            <img src="../../assets/images/recipe-details/printer.svg" alt="printer-icon">
                        </div>
                        <p class="services__text">PRINT</p>
                    </div>
                    <div class="share">
                        <div class="share__wrapper">
                            <img src="../../assets/images/recipe-details/share.svg" alt="share-icon">
                        </div>
                        <p class="services__text">SHARE</p>
                    </div>
                </div>
            </div>
            <div class="recipe-specification">
                <div class="video">
                    <iframe class="video__item" 
                        src="https://www.youtube.com/embed/53YShB3_0-E" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
                <div class="nutrition-info">
                    <h5>Nutrition Information</h5>
                    <ul class="nutrition-list">
                        <li class="nutrition-list__item">
                            <div class="nutrition-list__composition">Calories</div>
                            <div class="nutrition-list__value">219.9 kcal</div>
                        </li>
                        <li class="nutrition-list__item">
                            <div class="nutrition-list__composition">Total Fat</div>
                            <div class="nutrition-list__value">10.7 g</div>
                        </li>
                        <li class="nutrition-list__item">
                            <div class="nutrition-list__composition">Protein</div>
                            <div class="nutrition-list__value">7.9 g</div>
                        </li>
                        <li class="nutrition-list__item">
                            <div class="nutrition-list__composition">Carbohydrate</div>
                            <div class="nutrition-list__value">22.3 g</div>
                        </li>
                        <li class="nutrition-list__item">
                            <div class="nutrition-list__composition">Cholesterol</div>
                            <div class="nutrition-list__value">37.4 mg</div>
                        </li>
                    </ul>
                    <p>
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </section>
        
        `
    }
}


customElements.define('recipe-execution', RecipeExecution);