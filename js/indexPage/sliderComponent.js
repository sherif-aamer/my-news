

class SliderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<h1>${this.getAttribute('text')}</h1>`
        // this.querySelector('h1').innerText = 
    }
}

window.customElements.define('slider-component', SliderComponent)