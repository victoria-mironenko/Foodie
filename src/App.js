import * as core from "./core";
import './components';
import './auth/PrivateRoute';
import { appRoutes } from "./constants/appRoutes";
import { authService } from "./services/Auth";

export class App extends core.Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            isLogged: false,
            error: "",
        };
    }

    toggleIsLoading() {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !state.isLoading,
            };
        });
    }

    getUser() {
        this.toggleIsLoading();
        authService
            .init()
            .then((user) => {
                authService.user = user;
                this.setState((state) => {
                    return {
                        ...state,
                        isLogged: Boolean(user),
                    };
                });
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
                this.toggleIsLoading();
            });
    }

        onSignOut = () => {
            this.toggleIsLoading();
            authService
            .signOut()
            .then(() => {
                this.setState((state) => {
                return {
                    ...state,
                    isLogged: false,
                };
                });
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
                this.toggleIsLoading();
            });
        };
    
        setIsLogged = () => {
            console.log('user-is-logouted');
            this.setState((state) => {
            return {
                ...state,
                isLogged: true,
            };
            });
        };

    componentDidMount() {
        this.getUser();
        this.addEventListener("user-is-logged", this.setIsLogged);
        this.addEventListener("user-is-logouted", this.onSignOut);
    }

    componentWillUnmount() {
        this.removeEventListener("user-is-logged", this.setIsLogged);
        this.removeEventListener("user-is-logouted", this.onSignOut);
    }

    render() {
        return this.state.isLoading
        ? ` <my-preloader is-loading="${this.state.isLoading}"></my-preloader>`
        : `
        <div class="wrapper">
            <my-router>
                <my-header></my-header>
                <main class="main">
                    <my-route path="${appRoutes.home}" component="home-page" title="Home Page"></my-route>
                    <my-route path="${appRoutes.admin}" component="admin-page" title="Admin Page"></my-route>
                    <my-route path="${appRoutes.signIn}" component="sign-in-page" title="SignIn Page"></my-route>
                    <my-route path="${appRoutes.recipe}" component="recipe-page" title="Recipe Page"></my-route>
                    <my-route path="${appRoutes.blog}" component="blog-page" title="Blog Page"></my-route>
                    <my-route path="${appRoutes.contact}" component="contact-page" title="Contact Page"></my-route>
                    <my-route path="${appRoutes.about}" component="about-page" title="About Page"></my-route>
                    <my-route path="${appRoutes.errorPage}" component="error-page" title="Not Found Page"></my-route>
                    <my-outlet></my-outlet>
                </main>
                <my-footer></my-footer>
            </my-router>
        </div>
        
        `
    }

}

customElements.define("my-app", App);




