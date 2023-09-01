class TituloDinamico extends HTMLElement {
    constructor(){
        super();


        const shadow = this.attachShadow({mode:"open"});

        //base do component
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = 'Daniel'


        //estilizar o component


    }


}

customElements.define('titulo-dinamico');