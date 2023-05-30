/* selecteres  */
    let questionscount = document.querySelector(".count"); 
    let bulletsContainer = document.querySelector(".bullets");
    let result = document.querySelector(".result");
    let answers =  document.querySelector(".answers");
    let question = document.querySelector(".question");
    let submit_buttm = document.querySelector(".submit");
    let time = document.querySelector(".time");

/* sellecters */

/* counters */
    let current_question = 0 ;
    let true_counter = 0 ;  
    let wrong_counter = 0 ;
    let countDownInterval = 2.5;
/* counters */
/* get request */
function getQuestions(){
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function (){
        if(myRequest.readyState === 4 && this.status === 200){
            let questionsObject = JSON.parse(this.responseText) 
            let count = questionsObject.length;
            bullets(count);
            questionsnumber(count) 
            add_Data(questionsObject[current_question] , count)
            countDown(5 , count)
            submit_buttm.addEventListener("click" , ()=>{
                let right = questionsObject[current_question].right_answer
                current_question++;
                clearInterval(countDownInterval)
                countDown(5 , count)

                check_answer(right , count);
                question.innerHTML ="";
                answers.innerHTML ="";
                add_Data(questionsObject[current_question] , count)
                handle_bullets()
                questionsnumber(count)

               

            })




        } 

    }
    myRequest.open("GET" , "html-questions.json" , true);
    myRequest.send();
}

getQuestions();
/* get request */


/* add bullets  */
function bullets( count){
    
    for(let i = 0 ; i<count ; i++){
        let span = document.createElement("span");
        if(i === 0){
            span.className = "on"
        }
        bulletsContainer.appendChild(span);
    }
}
/* add bullets  */
function questionsnumber(count){
    if(current_question < count){
    questionscount.innerHTML = `${current_question+1} / ${count}` ;
    }
}

/* handl bullets */
function handle_bullets(){
    let spans = document.querySelectorAll(".bullets span")
    let arrspan = Array.from(spans).forEach((span , index)=>{
        if(current_question === index ){
            span.className = "on"
        }
    })
}

/* handl bullets */

  /*  Add data */
  function add_Data(Obj , count ){
    if(current_question < count){
        let question_title = document.createElement("h2")
    let question_text =  document.createTextNode(Obj['title'])
    question_title.appendChild(question_text);
    question.appendChild(question_title)
    for(let i = 1 ; i<=3 ; i++){
        let maindiv = document.createElement("div")
            maindiv.className = "answer"

        let radio = document.createElement("input");
            radio.name = 'question'
            radio.type = 'radio'
            radio.id = `answer_${i}` ; 
            radio.dataset.answer = Obj[`answer_${i}`];
            let theLabel = document.createElement("label");

            // Add For Attribute
            theLabel.htmlFor = `answer_${i}`;
      
            // Create Label Text
            let theLabelText = document.createTextNode(Obj[`answer_${i}`]);
      
            // Add The Text To Label
            theLabel.appendChild(theLabelText);

            maindiv.appendChild(radio)
             maindiv.appendChild(theLabel);
                answers.appendChild(maindiv);

            }
    
    }else{
        submit_buttm.remove();
        if(true_counter > wrong_counter){
            result.innerHTML = `perfect , you pass the test with ${true_counter} true nswers and ${wrong_counter} wrong answers `
        }else if(true_counter === wrong_counter){
            result.innerHTML = ` good , you pass the test with ${true_counter} true nswers and ${wrong_counter} wrong answers `

        }else{
            result.innerHTML = `faild unfortunately , you failed the test with ${true_counter} true nswers and ${wrong_counter} wrong answers `

        }

    }
} 

/*  Add data */
/* check answer */
function check_answer(right , count){
    let all_answers = document.getElementsByName("question")
    let the_choosen ; 
    for(let i = 0 ; i<3 ; i++){
        if(all_answers[i].checked ){
            the_choosen = all_answers[i].dataset.answer ;
        }
    }
    if(right  === the_choosen){
        true_counter++;
    }else{
        wrong_counter++;
    }
}

/* check answer */

/* count down */
function countDown(duration , count){
    if(current_question < count ){
        let minutes , seconds ; 
        countDownInterval = setInterval(function(){
            minutes = parseInt(duration / 60)
            seconds = parseInt(duration % 60)
            minutes = minutes < 10 ? `0${minutes}` : minutes;  
            seconds = seconds < 10 ? `0${seconds}` : seconds;  

            time.innerHTML = `${minutes} : ${seconds}`
            if(--duration < 0 ){
                clearInterval(countDownInterval);
                submit_buttm.click()
            }
        },1000)
    }
}
/* count down */


