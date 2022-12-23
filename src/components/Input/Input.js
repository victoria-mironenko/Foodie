import { Component } from "../../core";

export class Input extends Component {
    static get observedAttributes() {
        return [
            "type",
            "label",
            "control-name",
            "class-name",
            "value",
            "is-valid",
            "is-touched",
            "error-message",
        ];
    }

    render() {

        const controlClassName = JSON.parse(this.props['is-valid']) ? 'is-valid' : 'is-invalid';
        const isAddClassName = JSON.parse(this.props['is-touched']) ? controlClassName : '';

        return `
        
            <div>
                <label>${this.props.label}</label>
                <input 
                    class="form-control ${isAddClassName} ${this.props['class-name'] ?? ''}" 
                    type="${this.props.type}" 
                    placeholder="Your ${this.props.type}..."
                    name="${this.props['control-name']}"
                    value="${this.props.value}"
                />
                <div class="invalid-feedback">${this.props['error-message']}</div>
            </div>
            
            `;
    }
}

customElements.define("my-input", Input);
