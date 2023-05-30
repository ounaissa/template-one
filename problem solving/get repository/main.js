let  theinput  = document.querySelector(".get-repos input")
let  showData  = document.querySelector(".show-data")
let  thebuttom = document.querySelector(".get-butom")

thebuttom.onclick = function (){
    getrepos();
    
}  

function getrepos(){
    if(theinput.value == ""){
        showData.innerHTML = `<span>the username value can not be empty</span>`
    }else{
       fetch(`https://api.github.com/users/${theinput.value}/repos`)
       .then((response) => response.json())
       .then((repositries) => {
        showData.innerHTML = "";

        for(let i = 0 ; i<6 ; i++){ 
            let spans_cont = document.createElement("div")
            let maindiv = document.createElement("div")
                maindiv.className = "repo-main"
            let textNode = document.createTextNode(repositries[i].name)
        maindiv.appendChild(textNode)
        // first span url
            let theurl = document.createElement('a')
                theurl.innerHTML = "Visit"
                theurl.href = `https://github.com/${theinput.value}/${repositries[i].name}`;
                theurl.setAttribute("target" , "_blank")
                spans_cont.appendChild(theurl)

        // Second span stars
            let stars_span = document.createElement("span")
                stars_span.innerHTML = `stars ${repositries[i].stargazers_count}`
                spans_cont.appendChild(stars_span)
        maindiv.appendChild(spans_cont)    
        showData.appendChild(maindiv)
        }

       })
    }
}