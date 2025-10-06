let buttons = document.querySelectorAll("button")
let operationScreen = document.getElementById("operation-screen")
let resultScreen = document.getElementById("result-screen")

// console.log(buttons)
let shouldResetScreen = false

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () =>{
        let key = buttons[i].textContent
        
        let num1 =0
        let num2 =0
        let op
        let result
        
        if(key != "AC" & key != "="){
            if(shouldResetScreen){
                resultScreen.innerText = ''
                operationScreen.textContent = ''
            }
            operationScreen.textContent += key
        }
        shouldResetScreen = false
        let mathOperation = operationScreen.textContent

        let mathArray = mathOperation.split("")

        if(key == "="){
            mathArray.map((ele)=>{
                if(!Number.isInteger(+ele)){
                    op = ele
            }
            })
            
                for(let i = 0; i < mathArray.indexOf(op); i++){
                num1 += mathArray[i]
                }
                for(let i = mathArray.indexOf(op) +1; i < mathArray.length; i++){
                num2+= mathArray[i]
                }

            result = calculate(num1,op,num2)
            resultScreen.innerText = result
            shouldResetScreen = true
            
        }

        if(key == "AC"){
            result = 0
            resultScreen.innerText = ''
            operationScreen.textContent = ''
        }

    })
}
function calculate(n1,op,n2){
    if(op == '*'){
        return +n1 * +n2
    }else if(op == '/'){
        return +n1 / +n2
    }else if(op == '+'){
        return +n1 + +n2
    }else{
        return +n1 - +n2
    }
}
