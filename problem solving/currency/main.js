
fetch('https://api.currencyfreaks.com/latest?apikey=a2792fa0008a4a2aa070a6ec6cae4d8c').then((result) =>{
let mydata = result.json() 
return mydata ; 
}).then((currncy) => {
    console.log(currncy.base)
    let input = document.querySelector("input")
    let keys =Object.keys(currncy.rates);
    let list = document.querySelector(".types")
    let box = document.querySelector("div .curprice");
    let type = document.querySelector("div .type");
        for(let i = 0 ; i<keys.length ; i++){
            let li = document.createElement("li"); 
                li.innerHTML = keys[i]
                li.className = "currencies"
                list.appendChild(li)
        }
    document.addEventListener("click" , (e)=>{
        if(e.target.className === "currencies"){
        console.log(e.target)
        type.innerHTML = e.target.innerHTML
        box.innerHTML = Math.round(input.value * currncy.rates[e.target.innerHTML]);
        }
   
    })        

}) 