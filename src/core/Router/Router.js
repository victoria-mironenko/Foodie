import { matchRoute } from './utils'

export class Router extends HTMLElement {
    get outlet() {
        return this.querySelector('my-outlet');
    }

    get routes() {
        return Array.from(this.querySelectorAll('my-route'))
            .map((route) => {
                return {
                    path: route.getAttribute('path'),
                    title: route.getAttribute('title'),
                    component: route.getAttribute('component'),
                }
            })
    }

    navigate(url) {
        const matchedRoute = matchRoute(this.routes, url);
        if(matchedRoute) {
            window.history.pushState(null, null, url);
            this.renderPage(matchedRoute)
        }
    }

    renderPage(activeRoute) {
        const { component, title, params = {} } = activeRoute;
        if(component) {
            while(this.outlet.firstChild) {
                this.outlet.removeChild(this.outlet.firstChild)
            }

            const updateView = () => {
                const view = document.createElement(component);
                document.title = title || document.title;
                for(let key in params) {
                    if(key !== '*') {
                        view.setAttribute(key, params[key]);
                    }
                }

                this.outlet.append(view)
            }

            updateView()
        }
    }

    onPopState = () => {
        this.navigate(window.location.pathname)
    }

    onChangeRoute = (evt) => {
        this.navigate(evt.detail.target)
    }

    connectedCallback() {
        this.navigate(window.location.pathname);
        this.addEventListener('popstate', this.onPopState);
        window.addEventListener('change-route', this.onChangeRoute);
    }

    disconnectedCallback() {
        this.removeEventListener('popstate', this.onPopState);
        window.removeEventListener('change-route', this.onChangeRoute);
    }
}

customElements.define('my-router', Router);