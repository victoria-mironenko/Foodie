import { Component } from "../../core";
import './cooking.scss';

export class Cooking extends Component {
    constructor() {
        super();
        this.state = {};
        this.props = {};
    }

    onClick = (evt) => {
        const target = evt.target.closest('.ingredients-list__item');
        const targetSecond = evt.target.closest('.step-list__item');
        if(target) {
            target.classList.toggle('checked')
        }
        if(targetSecond) {
            targetSecond.classList.toggle('checked')
        }

    }

    componentDidMount() {
        this.addEventListener('click', this.onClick);
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.onClick);
    }

    render() {
        return `
        
    <section class="cooking">
        <div class="cooking__wrapper container">
            <div class="cooking-step">
                <h3 class="cooking-step__ingredients">Ingredients</h3>
                <h5>For main dish</h5>
                <ul class="ingredients-list">
                    <li class="ingredients-list__item">
                        <img class="empty" src="../../assets/images/recipe-details/empty.svg" alt="ellipse">
                        <img class="fill" src="../../assets/images/recipe-details/checked.svg" alt="ellipse">
                        <p>Lorem ipsum dolor sit amet</p>
                    </li>
                    <li class="ingredients-list__item">
                        <img class="empty" src="../../assets/images/recipe-details/empty.svg" alt="ellipse">
                        <img class="fill" src="../../assets/images/recipe-details/checked.svg" alt="ellipse">
                        <p>Lorem ipsum dolor sit amet</p>
                    </li>
                    <li class="ingredients-list__item">
                        <img class="empty" src="../../assets/images/recipe-details/empty.svg" alt="ellipse">
                        <img class="fill" src="../../assets/images/recipe-details/checked.svg" alt="ellipse">
                        <p>Lorem ipsum dolor sit amet</p>
                    </li>
                    <li class="ingredients-list__item">
                        <img class="empty" src="../../assets/images/recipe-details/empty.svg" alt="ellipse">
                        <img class="fill" src="../../assets/images/recipe-details/checked.svg" alt="ellipse">
                        <p>Lorem ipsum dolor sit amet</p>
                    </li>
                    <li class="ingredients-list__item">
                        <img class="empty" src="../../assets/images/recipe-details/empty.svg" alt="ellipse">
                        <img class="fill" src="../../assets/images/recipe-details/checked.svg" alt="ellipse">
                        <p>Lorem ipsum dolor sit amet</p>
                    </li>
                </ul>
                <h5>For the sauce</h5>
                <ul class="ingredients-list">
                    <li class="ingredients-list__item">
                        <img class="empty" src="../../assets/images/recipe-details/empty.svg" alt="ellipse">
                        <img class="fill" src="../../assets/images/recipe-details/checked.svg" alt="ellipse">
                        <p>Lorem ipsum dolor sit amet</p>
                    </li>
                    <li class="ingredients-list__item">
                        <img class="empty" src="../../assets/images/recipe-details/empty.svg" alt="ellipse">
                        <img class="fill" src="../../assets/images/recipe-details/checked.svg" alt="ellipse">
                        <p>Lorem ipsum dolor sit amet</p>
                    </li>
                    <li class="ingredients-list__item">
                        <img class="empty" src="../../assets/images/recipe-details/empty.svg" alt="ellipse">
                        <img class="fill" src="../../assets/images/recipe-details/checked.svg" alt="ellipse">
                        <p>Lorem ipsum dolor sit amet</p>
                    </li>
                </ul>
                <h3 class="cooking-step__direction">Directions</h3>
                <ul class="step-list">
                    <li class="step-list__item">
                        <img class="empty" src="../../assets/images/recipe-details/empty.svg" alt="ellipse">
                        <img class="fill" src="../../assets/images/recipe-details/checked.svg" alt="ellipse">
                        <div class="step-list__text">
                            <h5>1. Lorem ipsum dolor sit amet</h5>
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            <img class="step-list-image" src="../../assets/images/recipe-details/cooking-girl.jpg" alt="cooking-girl">
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                        </div>
                    </li>
                    <li class="step-list__item">
                        <img class="empty" src="../../assets/images/recipe-details/empty.svg" alt="ellipse">
                        <img class="fill" src="../../assets/images/recipe-details/checked.svg" alt="ellipse">
                        <div class="step-list__text">
                            <h5>2. Lorem ipsum dolor sit amet</h5>
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        </div>
                    </li>
                    <li class="step-list__item">
                        <img class="empty" src="../../assets/images/recipe-details/empty.svg" alt="ellipse">
                        <img class="fill" src="../../assets/images/recipe-details/checked.svg" alt="ellipse">
                        <div class="step-list__text">
                            <h5>3. Lorem ipsum dolor sit amet</h5>
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="other-recipe">
                <h4>Other Recipe</h4>
                <div class="other-recipe-block">
                    <div class="other-recipe-block__item">
                        <img src="../../assets/images/recipe-details/other-recipe1.jpg" alt="chicken-meatball">
                        <div class="other-recipe__text">
                            <h6>Chicken Meatball with Creamy Chees...</h6>
                            <p class="details">By Andreas Paula</p>
                        </div>
                    </div>
                    <div class="other-recipe-block__item">
                        <img src="../../assets/images/recipe-details/other-recipe2.jpg" alt="creamy-chicken">
                        <div class="other-recipe__text">
                            <h6>The Creamiest Creamy Chicken an...</h6>
                            <p class="details">By Andreas Paula</p>
                        </div>
                    </div>
                    <div class="other-recipe-block__item">
                        <img src="../../assets/images/recipe-details/other-recipe3.jpg" alt="chicken-and-rice">
                        <div class="other-recipe__text">
                            <h6>The Best Easy One Pot Chicken and Rice</h6>
                            <p class="details">By Andreas Paula</p>
                        </div>
                    </div>
                </div>
                <div class="ads">
                    <a href="#">www.foodieland.com</a>
                </div>
            </div>
        </div>
    </section>
        
        `
    }
}

customElements.define('my-cooking', Cooking);