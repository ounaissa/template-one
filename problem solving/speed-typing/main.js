let words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
  ];

  let levels = {
    "easy" : 6 , 
    "normal" : 4 ,
    "hard" : 3 
  };






// selectors 
let lvl = document.querySelector(".message .lvl");
let seconds = document.querySelector(".message .seconds");
let current_word = document.querySelector(".the-word")
let input = document.querySelector(".input")
let all_words = document.querySelector(".upcoming-words");
let time_left = document.querySelector(".time-left span ");
let score_get = document.querySelector(".score .get")
let score_total =  document.querySelector(".score .total")
let finish = document.querySelector(".finish")
//selectors 
let counter = 0 ; 
let lvl_selctor = -1 ; 
/* filling information  */

lvl.onclick = function (){
  lvl_selctor++;
  if(lvl_selctor === Object.keys(levels).length){
    lvl_selctor = 0 ; 
  }
  lvl.innerHTML =   Object.keys(levels)[lvl_selctor];
  seconds.innerHTML =   Object.values(levels)[lvl_selctor];
 time_left.innerHTML = seconds.innerHTML ; 
 
}
 
 time_left.innerHTML = seconds.innerHTML ; 
input.onpaste = function (){
    return false;
}


score_get.innerHTML = 0 ; 
score_total.innerHTML = words.length;
/* filling information  */
let date = new Date().toLocaleDateString();
 console.log(date)
let startGame = document.querySelector(".start").onclick = function (){
this.remove() ; 
input.focus() ; 
genWords();

}

  

function genWords(){
let random_Word = words[Math.floor(Math.random() * words.length)];
let index_random = words.indexOf(random_Word) ;  
words.splice(index_random , 1 ) ;
current_word.innerHTML = random_Word;
 all_words.innerHTML="";
 for(let i = 0 ; i<words.length ; i++){
    let arr_words = document.createElement("div")
        arr_words.innerHTML = words[i];
     all_words.appendChild(arr_words)     

}
 play();
}
function play(){
  time_left.innerHTML =Object.values(levels)[lvl_selctor] ;
 let start = setInterval(() => {
    time_left.innerHTML--; 
    if(time_left.innerHTML === "0" ){
        clearInterval(start)
        if(current_word.innerHTML.toLowerCase() === input.value){
          input.value = "" ; 
          score_get.innerHTML++; 
         if(words.length > 0 ){
          genWords() ; 
         }else{
          let span = document.createElement("span");
          span.className = 'good'
          span.appendChild(document.createTextNode(`congratulation , you win the game ,score ${score_get}`))
          finish.appendChild(span)
         }

        }else{
          let span = document.createElement("span");
              span.className = 'bad'
              span.appendChild(document.createTextNode(`game Over your score is ${score_get.innerHTML}`))
          finish.appendChild(span)
         
        }
        let anay_obj = {
          score : score_get.innerHTML ,
          date : date 
        }  
        localStorage.setItem("anaylises"+counter , Object.values(anay_obj)) 
        counter++;
        console.log(counter)  
    }
 } , 1000)
}