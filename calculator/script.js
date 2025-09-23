let button = document.querySelectorAll('.num');
let input = document.getElementById('display');
let realInputText = "";
let stack = "";
function addToDisplay(data, visualText){
    console.log(realInputText[realInputText.length-1]);
    if(data === "C"){
        realInputText='';
        input.innerText='';
    }else if(isNaN(data)){ //NOT A NUMBER
        if(input.innerText != '' || data == '('){
            if(data != '='){
                if(data === '('){
                    stack += data;
                    realInputText+=data;
                    input.innerText+=visualText;
                }else if(data === ')'){
                    let opened=0;
                    let closed=0;
                    for(let i=0;i<stack.length;i++){
                        if(stack[i] === '('){
                            opened++;
                        }else{
                            closed++;
                        }
                    }
                    if(opened < closed){
                        return;
                    }
                    realInputText+=data;
                    input.innerText+=visualText;
                }
                if(!isNaN(realInputText[realInputText.length-1])){
                    
                    realInputText+=data;
                    input.innerText+=visualText;
                }
            }else{
                input.innerText='sugi pula vlade';
                realInputText=input.innerText;
            }
        }
    }else{
        realInputText+=visualText;
        input.innerText+=data;
    }
    

}

button.forEach(function(button){
    button.addEventListener('click', function(e){
        addToDisplay(e.target.getAttribute('data-value'),e.target.innerText);
    });
});
