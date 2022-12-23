import { Component } from "../../core";
import './blog-part.scss';

export class BlogPart extends Component {
    

    render() {
        return `
        
    <div class="title">
        <div class="title-wrapper container">
            <h1>Blog & Article</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
        </div>
    </div>
    <div class="search-form__wrapper container">
        <form class="search-form" action="">
            <input class="search-form__input" type="text" placeholder="Search article, news or recipe...">
            <button class="search-form__button">Search</button>
        </form>
    </div>
    <div class="main-part">
        <div class="main-part__wrapper container">
            <div class="blog-list">
                <div class="blog-list__item">
                    <img src="../../assets/images/blog-page/blog1.jpg" alt="noodle">
                    <div class="blog-item__body">
                        <h5>Crochet Projects for Noodle Lovers</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
                        <div class="author-block">
                            <div class="author-block__author">
                                <div class="author-image">
                                    <img src="../../assets/images/blog-page/a1.png" alt="blogger-photo">
                                </div>
                                <div class="performer-name">Wade Warren</div>
                            </div>
                            <div class="author-block__date details">12 November 2021</div>
                        </div>
                    </div>
                </div>
                <div class="blog-list__item">
                    <img src="../../assets/images/blog-page/blog2.jpg" alt="vegetarian-dish">
                    <div class="blog-item__body">
                        <h5>10 Vegetarian Recipes To Eat This Month</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
                        <div class="author-block">
                            <div class="author-block__author">
                                <div class="author-image">
                                    <img src="../../assets/images/blog-page/a2.png" alt="blogger-photo">
                                </div>
                                <div class="performer-name">Robert Fox</div>
                            </div>
                            <div class="author-block__date details">12 November 2021</div>
                        </div>
                    </div>
                </div>
                <div class="blog-list__item">
                    <img src="../../assets/images/blog-page/blog3.jpg" alt="chef">
                    <div class="blog-item__body">
                        <h5>Full Guide to Becoming a Professional Chef</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
                        <div class="author-block">
                            <div class="author-block__author">
                                <div class="author-image">
                                    <img src="../../assets/images/blog-page/a3.png" alt="blogger-photo">
                                </div>
                                <div class="performer-name">Dianne Russell</div>
                            </div>
                            <div class="author-block__date details">12 November 2021</div>
                        </div>
                    </div>
                </div>
                <div class="blog-list__item">
                    <img src="../../assets/images/blog-page/blog4.jpg" alt="vegetarian-lasagna">
                    <div class="blog-item__body">
                        <h5>Simple & Delicious Vegetarian Lasagna</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
                        <div class="author-block">
                            <div class="author-block__author">
                                <div class="author-image">
                                    <img src="../../assets/images/blog-page/a4.png" alt="blogger-photo">
                                </div>
                                <div class="performer-name">Leslie Alexander</div>
                            </div>
                            <div class="author-block__date details">12 November 2021</div>
                        </div>
                    </div>
                </div>
                <div class="blog-list__item">
                    <img src="../../assets/images/blog-page/blog5.jpg" alt="salad">
                    <div class="blog-item__body">
                        <h5>Plantain and Pinto Stew with Aji Verde</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
                        <div class="author-block">
                            <div class="author-block__author">
                                <div class="author-image">
                                    <img src="../../assets/images/blog-page/a5.png" alt="blogger-photo">
                                </div>
                                <div class="performer-name">Courtney Henry</div>
                            </div>
                            <div class="author-block__date details">12 November 2021</div>
                        </div>
                    </div>
                </div>
                <div class="blog-list__item">
                    <img src="../../assets/images/blog-page/blog6.jpg" alt="poster">
                    <div class="blog-item__body">
                        <h5>We’re Hiring a Communications Assistant!</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
                        <div class="author-block">
                            <div class="author-block__author">
                                <div class="author-image">
                                    <img src="../../assets/images/blog-page/a6.png" alt="blogger-photo">
                                </div>
                                <div class="performer-name">Albert Flores</div>
                            </div>
                            <div class="author-block__date details">12 November 2021</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tasty-recipe">
                <h4>Tasty Recipes</h4>
                <div class="tasty-recipe-block">
                    <div class="tasty-recipe-block__item">
                        <img src="../../assets/images/blog-page/tasty1.jpg" alt="chicken-meatball">
                        <div class="tasty-recipe__text">
                            <h6>Chicken Meatballs with Cream Cheese</h6>
                            <p class="details">By Andreas Paula</p>
                        </div>
                    </div>
                    <div class="tasty-recipe-block__item">
                        <img src="../../assets/images/blog-page/tasty2.jpg" alt="creamy-chicken">
                        <div class="tasty-recipe__text">
                            <h6>Traditional Bolognaise Ragu</h6>
                            <p class="details">By Andreas Paula</p>
                        </div>
                    </div>
                    <div class="tasty-recipe-block__item">
                        <img src="../../assets/images/blog-page/tasty3.jpg" alt="chicken-and-rice">
                        <div class="tasty-recipe__text">
                            <h6>Pork and Chive Chinese Dumplings</h6>
                            <p class="details">By Andreas Paula</p>
                        </div>
                    </div>
                </div>
                <div class="ads">
                    <a href="#">www.foodieland.com</a>
                </div>
            </div>
        </div>
    </div>
        
        `
    }
}

customElements.define('blog-part', BlogPart);