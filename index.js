const number = document.querySelector("#number");
const btn =document.querySelector("#btn")
const display = document.querySelector("#result")



checkNumber=() => {
    const userValue = parseInt(number.value);
    const list=[];
    for (i=1;i<userValue;i++){
        if(userValue%i==0){
            list.push(i)            
        }

    }
    let message="";
    let sum =0;
    const result = list.map(item =>{
        return sum += item
    })
    if (userValue===result[result.length -1]){
         message= "it's a perfect number"
         number.focus()
         number.value=""
        console.log()
    }else {
        message= "it's a not perfect number"
        number.focus()
        number.value=""
        console.log("it's not a perfect number")
    }

    display.innerText = message
    console.log(userValue)
    console.log(list)
    console.log(result)
}



btn.addEventListener("click", checkNumber)