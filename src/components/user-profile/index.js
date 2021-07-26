class UserProfile extends HTMLElement {
    constructor() {
        super();
        console.log('init user profile');
    }

    connectedCallback() {
        this.init();
        this.bindEvents();
    }

    // browser will call this when the element is removed from the document
    disconnectedCallback() {
        this.repository.delete();
    }

    static get observedAttributes() {
        return ['active'];
    }

    // specifies the attributes to be monitored
    attributeChangedCallback(name, old, value) {}

    // Called when the element has been moved to a new document
    // e.g. use case document.adoptNode
    adoptedCallback() {}

    get _name() {
        return this.getAttribute('name');
    }

    get _gender() {
        return this.getAttribute('gender');
    }

    get _age() {
        return this.getAttribute('age');
    }
    get _icon() {
        return this.getAttribute('icon');
    }
    get _description() {
        return this.getAttribute('description').replaceAll('¥n', ' <br>');
    }
    get _key() {
        return `profile--${this._name}-${this._gender}-${this._age}`;
    }
    init() {
        this.lender();
    }

    lender() {
        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.innerHTML = `
            <article>
                <img data-icon src="${this._icon}"></img>
                <h1 data-name>${this._name}</h1>
                <p data-age>${this._age}</p>
                <p data-gender>${this._gender}</p>
                <p data-gender>${this._description}</p>
            </article>
        `;
    }

    bindEvents() {}

    click() {
        this.dataset.state =
            this.dataset.state === 'active' ? 'unactive' : 'active';
    }
}

export const define = () => customElements.define('user-profile', UserProfile);
