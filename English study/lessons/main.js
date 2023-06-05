let LessonTitle = document.querySelector(".lesson .title span");
let LessonList = document.createElement("ul");
let New_words = document.querySelector(".words")
let explanation = document.querySelector(".explain")
document.querySelector(".sider").appendChild(LessonList)
let selected_lesson ;
function getLessonsInfo(){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(this.status === 200 && request.readyState === 4){
            let myRequest = JSON.parse(this.responseText)
            /* create list of lessons */
            for(let i = 0 ; i<myRequest.length ; i++){
                let newli = document.createElement("li");
                    newli.innerHTML = `الدرس ${i+1}`;
                LessonList.appendChild(newli)
            }
            /* create list of lessons */
            
            /*review  selected lesson  info*/
        Array.from(LessonList.children).forEach((lesson , index ) =>{
            LessonList.children[0].classList.add("selected")
            if(lesson.classList.contains("selected")){
                LessonTitle.innerHTML =myRequest[index].title;
                for(let i = 0 ; i<myRequest[index].Words.length ;i++){
                    
                    let words_spans = document.createElement("span")
                        words_spans.innerHTML = myRequest[index].Words[i]
                New_words.appendChild(words_spans)  
            explanation.innerHTML = myRequest[index].explain;

                }
            }
            lesson.addEventListener("click" , function (){
                for(let i = 0 ; i<LessonList.childElementCount ; i++){
                    LessonList.children[i].classList.remove("selected")
                }
                lesson.classList.add("selected")
                LessonTitle.innerHTML =myRequest[index].title;
                /* create Words spans */
                if(New_words.childElementCount !== 0){
                    Array.from(New_words.children).forEach((e) =>{
                    New_words.removeChild(e)
                })
                }
                for(let i = 0 ; i<myRequest[index].Words.length ;i++){
                    
                    let words_spans = document.createElement("span")
                        words_spans.innerHTML = myRequest[index].Words[i]
                New_words.appendChild(words_spans)  
                }

            /* create Words spans */
            explanation.innerHTML = myRequest[index].explain;
            })
        })
            /*review  selected lesson  info*/


            

        }
    }
        request.open("GET" , "lessons.json")
        request.send();
}
getLessonsInfo()