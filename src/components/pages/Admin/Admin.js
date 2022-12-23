import { Component } from "../../../core";
import { authService } from "../../../services/Auth";
import { appRoutes } from "../../../constants/appRoutes";
import { FormManager } from "../../../core/FormManager/FormManager";


export class AdminPage extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
        };
        this.form = new FormManager();
    }

    componentDidMount() {
        if (!authService.user) {
            this.dispatch("change-route", {
                target: appRoutes[this.props.path ?? "contact"],
            });
        }
    }

    render() {
        return `
        <style>
            body {
                background-color: rgba(255, 116, 38, 1); 
            }

        </style>
        <my-preloader is-loading="${this.state.isLoading}">
            <div class="container mt-5 admin-container">
                <h1>AdminPage</h1>
                <div class="row">
                    <div class="col-12">
                        <form class="send-data">
                            <div class="mb-3">
                                <label class="form-label">Type recipe name</label>
                                <input class="form-control" type="text" name="title">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Recipe rating</label>
                                <input class="form-range" type="range" name="rating" min="0" max="5" step="0.5">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Upload a poster</label>
                                <input class="form-control" type="file" id="formFile" name="poster">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Chose a category</label>
                                <select class="form-select" name="category">
                                    <option selected value="breakfast">Breakfast</option>
                                    <option value="vegan">Vegan</option>
                                    <option value="meat">Meat</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="lunch">Lunch</option>
                                    <option value="chocolate">Chocolate</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea name="description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Send</button>
                        </form>
                    </div>
                <div>
            </div>
        </my-preloader>
        
        `;
    }


}

customElements.define("admin-page", AdminPage);