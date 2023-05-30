let slideImages = Array.from(document.querySelectorAll(".image-cont img"));
 let bullets = document.querySelector(".indecaters")
 let current_slide = 1; 

let slideNumber = document.querySelector(".slide-number")

let button_prev = document.querySelector(".previes")
let  buttom_next = document.querySelector(".next")

buttom_next.addEventListener("click" , next_slide)
button_prev.addEventListener("click" , prev_slide)



let theul = document.createElement("ul");
    theul.className = "the-ul"


    bullets.appendChild(theul)
     for(let i = 1 ; i<=slideImages.length ; i++){
        let theli = document.createElement("li")
            theli.setAttribute("data-index" , i)
            theli.innerHTML  = i ; 
    theul.appendChild(theli)
    }
    let arrul = Array.from(theul.children);


    checker();

function next_slide(){
    
   if(!(buttom_next.classList.contains("disabled"))){
    current_slide ++;
    checker();
}
    }
    
    function prev_slide(){
   if(!(button_prev.classList.contains("disabled"))){
        current_slide--;
        checker();
   }
    }


function checker(){
  
    slideNumber.innerHTML = `slide #${current_slide}`
    removeactives();
    slideImages[current_slide-1].classList.add("active");
    theul.children[current_slide-1].classList.add("active")
    if(current_slide === 1){
        button_prev.classList.add("disabled")
    }else{
        button_prev.classList.remove("disabled")
    }
    if(current_slide === slideImages.length){
        buttom_next.classList.add("disabled");
    }else{
        buttom_next.classList.remove("disabled");
    }

}

function removeactives(){
    slideImages.forEach((img) =>{
        img.classList.remove("active")
    })
    for(let i =0 ; i<theul.childElementCount ; i++){
        theul.children[i].classList.remove("active")    
    }
} 

for(let i = 0 ; i < arrul.length ; i++){
    arrul[i].onclick = function (){
        current_slide = arrul[i].getAttribute("data-index")  ; 
        checker();
    }
}

var intervalId = window.setInterval(() =>{
    if(!(buttom_next.classList.contains("disabled"))){
        current_slide ++;
        checker();
    }
}, 1500);