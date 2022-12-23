import { Component } from "../../../core";
import '../../Input';
import '../../Preloader';
import { initialFieldsState } from "./initialState";
import { FormManager } from "../../../core/FormManager/FormManager";
import { Validator } from "../../../core/FormManager/Validator";
import { authService } from "../../../services/Auth"; 
import { appRoutes } from "../../../constants/appRoutes";


export class SignInPage extends Component {
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

    render() {

        const {
            fields: { email, password },
        } = this.state;

        return `

        <style>
            
            .sign-container {
                height: auto;
                background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%);
                padding-bottom: 6vh;
            }

            .sign-form {
                display: flex;
                flex-direction: column;
                gap: 5vw;
            }

            label {
                margin-bottom: 2vh;
            }
        </style>


            <my-preloader is-loading="${this.state.isLoading}">
                <div class="sign-container container">
                    <h1>Sign In</h1>
                    <form class="mt-5 registration-form sign-form">
                        <div class="invalid-feedback text-center mb-3 d-block">${this.state.error}</div>
                        <my-input
                            type="email"
                            label="Email"
                            control-name="email"
                            value="${email.value}"
                            is-valid="${email.isValid}"
                            is-touched="${email.isTouched}"
                            error-message="${email.errors?.message}"
                        ></my-input>

                        <my-input
                            type="password" 
                            label="Password"
                            control-name="password"
                            class-name="first-pass"
                            value="${password.value}"
                            is-valid="${password.isValid}"
                            is-touched="${password.isTouched}"
                            error-message="${password.errors?.message}"
                        ></my-input>
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </form>
                </div>
            </my-preloader>
        `;

    }

}

customElements.define("sign-in-page", SignInPage);