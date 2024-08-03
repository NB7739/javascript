
let product_data=document.querySelector(".product_data");


async function api_data(){
    let data=await fetch("https://fakestoreapi.com/products");
    let json_data=await data.json();

    json_data.map((val)=>{
        let imgelement=document.createElement("img");
        let titleelement=document.createElement("p");
        let titletext=document.createTextNode(val.title);
        let priceelement=document.createElement("p");
        let pricetext=document.createTextNode(val.price);
        priceelement.appendChild(pricetext);
        titleelement.appendChild(titletext);
        imgelement.setAttribute("src",val.image);
        imgelement.setAttribute("class","product_image");
        product_data.appendChild(imgelement);
        product_data.appendChild(titleelement);
        // console.log(val);
})
}
api_data();