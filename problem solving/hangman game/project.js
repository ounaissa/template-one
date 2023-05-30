let cont =  document.querySelector(".container");
let counter = 0 ; 
/*
document.querySelector("button").addEventListener("click" , ()=>{
 if(counter === cont.childElementCount){
    document.querySelector("p").textContent = "you failed .."
 }
    let output = document.querySelector("input")
    if(output.value === "word"){
        console.log("true word")
    }
    else{
        for(let i = 0 ; i<cont.childElementCount ; i++){
            if(cont.children[i].hasAttribute("hidden")){
                cont.children[i].removeAttribute("hidden")
                break ;
            }else if ( i === cont.childElementCount){
                console.log("you failed")
            }
        }
        
    }
counter++;
})
*/
////////////////////////////////////////* Letter  */////////////////////////////////////////////////
let letters = document.querySelector(".alpha");
let alpha = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").forEach( leter =>{
    let span = document.createElement("span");
        span.textContent = leter ;
        span.className = "letter";
    letters.appendChild(span);
});

////////////////////////////////////////* choose random Word From a object */////////////////////////////////////////////////
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
  }
  let allkeys = Object.keys(words);
  let random =Math.floor(Math.random() * Object.keys(words).length);
let randomkeys = allkeys[random];
let randomcate = words[randomkeys] 
let randomkeycate =Math.floor(Math.random() * randomcate.length);

/* the random word */
let word = randomcate[randomkeycate] ;

let lettersGuess = document.querySelector(".letters-guess");

let arrWord = Array.from(word)

arrWord.forEach(letter => {
    let emptySpan = document.createElement("span")
    if(letter === " "){
        emptySpan.className  = "with-space";
        emptySpan.innerHTML = "-"
    }
    lettersGuess.appendChild(emptySpan);
});
let arr_word_after = [] ; 
for(let i = 0 ; i <arrWord.length ; i++){
    if(arrWord[i] !== ' '){
        arr_word_after.push(arrWord[i])
    }
}
console.log(arr_word_after)

let wrong_counter = 0 ; 
let true_counter = 0 ;
let space_counter = 0 ; 
let popup = document.createElement("div");
    popup.className = "popup";
document.querySelector(".info").appendChild(popup)

/* ganerate letter choosen  */
document.addEventListener("click" , (e) => {
    let thestatus = false ;

    if(e.target.className === "letter"){
        e.target.classList.add("clicked") ; 
        /// letterword == arr of the random word  ///
        arrWord.forEach(( value , index ) => {
     
            if(value.toUpperCase() === e.target.textContent){
                thestatus = true ;
                true_counter++ ; 
                console.log(true_counter)
                console.log(lettersGuess.children[index])
                if(!(lettersGuess.children[index].classList.contains("with-space"))){
                lettersGuess.children[index].innerHTML = e.target.textContent
                }else if (lettersGuess.children[index].classList.contains("with-space")){
                    space_counter++;
                }
             if((true_counter - space_counter) === arrWord.length){
                popup.innerHTML = "awesome , the word is " + word ;
                popup.style.display = "block"
             }   
            }
        
        })

if(thestatus === false ){
    wrong_counter++;

    for(let i = 0 ; i<cont.childElementCount ; i++){
        if(cont.children[i].hasAttribute("hidden")){
            cont.children[i].removeAttribute("hidden")
            if(wrong_counter === 11){
                    popup.textContent = "you failed , refresh to start again ";
                    popup.style.display = "block" ; 

               for(let i = 0 ; i<letters.childElementCount ; i++){
                    letters.children[i].classList.add("clicked")
               }
            }
            break ;
        }

    
    
}


    }
}})

/* ganerate letter choosen  */