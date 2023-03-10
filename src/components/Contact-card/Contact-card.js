import { Component } from "../../core";
import './contact-card.scss';
import '../Input';
import '../Preloader';
import { initialFieldsState } from "./initialState";
import { FormManager } from "../../core/FormManager/FormManager";
import { Validator } from "../../core/FormManager/Validator";
import { authService } from "../../services/Auth";
import { appRoutes } from "../../constants/appRoutes";

export class ContactCard extends Component {
    constructor() {
        super();
        this.state = {
            error: "",
            isLoading: false,
            fields: {
            ...initialFieldsState,
            },
        };
        this.form = new FormManager();
    }

    toggleisLoading = () => {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !state.isLoading,
            };
        });
    };

    registerUser = (data) => {
        this.toggleisLoading();
        authService
            .signUp(data.email, data.password)
            .then((user) => {
                authService.user = user;
                this.dispatch("change-route", { target: appRoutes.home });
            })
            .catch((error) => {
                this.setState((state) => {
                    return {
                        ...state,
                        error: error.message,
                    };
                });
            })
            .finally(() => {
            this.toggleisLoading();
            });
        };

    validateForm = (evt) => {
        if (evt.target.closest("my-input")) {
            this.form.init(this.querySelector(".registration-form"), {
                email: [
                    Validator.email("Email is not valid"),
                    Validator.required("The field should not be empty"),
                ],
                password: [Validator.required("The field should not be empty")],
            });
        }
    };

    validate = (evt) => {
        this.setState((state) => {
            return {
                ...state,
                fields: {
                    ...state.fields,
                    ...evt.detail,
                },
            };
        });
    };

    componentDidMount() {
        this.addEventListener("click", this.validateForm);
        this.addEventListener("validate-controls", this.validate);
        this.addEventListener('submit', this.form.handleSubmit(this.registerUser))
    }

    render() {
        const {
            fields: { email, password },
        } = this.state;
        return `
    <my-preloader is-loading="${this.state.isLoading}">    
        <section class="contact-card">
            <div class="contact-card__wrapper container">
                <h1>Contact us</h1>
                <div class="form-wrapper">
                    
                    <form class="registration-form contact-us-form" action="">
                    
                        <div class="contact-us-image">
                            <img src="../../assets/images/contact-image.png" alt="chef">
                        </div>
                        <div class="user-name">
                            <label for="your-name">Name</label>
                            <input type="text" id="your-name" placeholder="Enter your name...">
                        </div>
                        <my-input
                            type="email"
                            label="Email"
                            control-name="email"
                            class-name="user-email"
                            value="${email.value}"
                            is-valid="${email.isValid}"
                            is-touched="${email.isTouched}"
                            error-message="${email.errors?.message}"
                        ></my-input>
                        <my-input
                            type="password" 
                            label="Password"
                            control-name="password"
                            class-name="first-pass user-password"
                            value="${password.value}"
                            is-valid="${password.isValid}"
                            is-touched="${password.isTouched}"
                            error-message="${password.errors?.message}"
                        ></my-input>
                        <div class="user-enquiry">
                            <label for="type">ENquiry type</label>
                            <select id="type">
                                <option value="recipe">Recipe</option>
                                <option value="advertising" selected>Advertising</option>
                                <option value="product">Product</option>
                            </select>
                        </div>
                        <div class="user-message">
                            <label for="messages">MEssages</label>
                            <textarea id="messages" name="messages">
                                    Enter your messages...
                            </textarea>
                        </div>
                        <div class="invalid-feedback text-center mb-3 d-block">${this.state.error}</div>
                        <button class="submit-btn" type="submit">Submit</button>
                        
                    </form>
                </div>
            </div>
        </section>
    </my-preloader>    
        `
    }
}

customElements.define('contact-card', ContactCard);