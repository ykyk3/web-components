class Components extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.init();
    }

    // browser will call this when the element is removed from the document
    disconnectedCallback() {}

    static get observedAttributes() {
        return ['data-state'];
    }

    // specifies the attributes to be monitored
    attributeChangedCallback(name, old, value) {}

    // Called when the element has been moved to a new document
    // e.g. use case document.adoptNode
    adoptedCallback() {}

    init() {
        this.addEvents();
    }

    addEvents() {
        this.addEventListener('click', this.click);
    }

    click() {
        this.dataset.state =
            this.dataset.state === 'active' ? 'unactive' : 'active';
    }
}

export default () => customElements.define('web-components', Components);
