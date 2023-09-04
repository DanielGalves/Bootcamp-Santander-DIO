class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }   

    build(){
        const componentRoot = document.createElement("div");
            componentRoot.setAttribute("class", "card");

            const cardLeft = document.createElement("div");
            cardLeft.setAttribute("class", "card_left");

                const autor = document.createElement("span");
                autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
                
                const linkTitle = document.createElement("a");
                linkTitle.href = this.getAttribute("href_link");
                //linkTitle.setAttribute("href", this.getAttribute("href_link"));
                linkTitle.textContent = this.getAttribute("title");

                const newsContent = document.createElement("p");
                newsContent.textContent = this.getAttribute("content");

                cardLeft.appendChild(autor);
                cardLeft.appendChild(linkTitle);
                cardLeft.appendChild(newsContent);


            const cardRight = document.createElement("div");
            cardRight.setAttribute("class", "card_right");
                const newsImage =document.createElement("img");
                newsImage.src = this.getAttribute("srcImage");
                //newsImage.setAttribute("src", this.getAttribute("srcImage"));


                cardRight.appendChild(newsImage);
            componentRoot.appendChild(cardLeft);
            componentRoot.appendChild(cardRight);

        return componentRoot;
    }


    style(){
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 80%;
            border: 1px solid gray;
            box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 15px 0 0 10px;
            
        }
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card_left > span{
            font-weight: 400;
        
        }
        
        .card_left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bolder;
        }
        .card_left > p {
            color: grey;
        }
        .card_right img{
            width: 150px;
            height: 150px;
        }
        
        
        `;
        return style;
    }


}

customElements.define("card-news",CardNews);