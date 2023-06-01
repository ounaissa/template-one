document.querySelector(".contorle span ").onclick = function(){
   let yourname = prompt("what is your name ") ;
   if(yourname == ""){
   document.querySelector(".name span").innerHTML = "unknown";
   }else{
   document.querySelector(".name span").innerHTML = yourname;
   }
   document.querySelector(".contorle").remove()
}

 let duration = 1000 ; 
 let tries_count = 0 ; 
 let blocks = document.querySelector(".container")
 let arr_blocks = Array.from(blocks.children);

let orderRange = [...Array(arr_blocks.length).keys()];
test(orderRange.length)

arr_blocks.forEach((block ,index ) => {
    block.style.order = test(orderRange.length , index);

    block.addEventListener("click" , function (){
        flipped(block)
    })
})

function flipped(selected){
    selected.classList.add("is-flipped");

    let flipped_blocks = arr_blocks.filter(flipped_block => flipped_block.classList.contains("is-flipped"))
    if(flipped_blocks.length === 2 ){
        stop_click();
        test_matching(flipped_blocks[0] , flipped_blocks[1])
    }
}

/*
function shuffle(arr){
    let currnet = arr.length , temp , rendom ; 
    while(currnet > 0){
        rendom =Math.floor(Math.random() * currnet)  
        currnet--;
        temp = arr[currnet] 
        arr[currnet] = arr[rendom] ;
        arr[rendom] = temp ;
    } 
    return arr;
}
*/
function test(length , index){
    let shuffled_arr = []; 
    for(let i = 0 ; i<length ; i++){
    let random = Math.floor(Math.random() * length) 
        shuffled_arr.push(random)
    }
    return shuffled_arr[index];

}

function stop_click(){
    blocks.classList.add("no-clicking");
    setTimeout(()=>{
    blocks.classList.remove("no-clicking");
    } , duration)
}
document.querySelector(".tries span").innerHTML = tries_count;

function test_matching(block_1 , block_2){

    if(block_1.getAttribute("data-tech") === block_2.getAttribute("data-tech")){
        block_1.classList.remove("is-flipped");
        block_2.classList.remove("is-flipped");
        block_1.classList.add("matched");
        block_2.classList.add("matched");
    }else{
        setTimeout(()=>{
            block_1.classList.remove("is-flipped");
            block_2.classList.remove("is-flipped");
             tries_count++;
    document.querySelector(".tries span").innerHTML = tries_count;

            } , duration)
    }

}