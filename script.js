

const getResults = async () =>{

    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    displayResult(data);
     
}

const displayResult = (response) =>{

    console.log(response);

    for (let i=0; i<4; i++){
        document.querySelector(`#img${i+1}`).src= response[i].image;
        document.querySelector(`#title${i}`).innerHTML = response[i].title; 
        document.querySelector(`#price${i}`).innerHTML = response[i].price; 


    }


}

getResults();

//for incrementing quantity

const increment = () =>{

}

//for decrementing quantity

const decrement = () =>{

}

document.querySelector(".cart-icon").addEventListener('click', function(){
    document.querySelector(".cart").style.width  = "30vw";
    document.querySelector(".cart").style.visibility  = "visible";


})
document.querySelector(".fa-xmark").addEventListener('click', function(){
    document.querySelector(".cart").style.visibility  = "hidden";



})