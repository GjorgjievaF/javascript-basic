let myDiv = document.getElementById("myDiv")

arrayOfNumbers = [10,3,7,9,20,22,11]
let sum = 0


function myNumbers(){
    myDiv.innerHTML+="<ul>"
    for(let i=0;i<arrayOfNumbers.length;i++){
       myDiv.innerHTML +=`<li>The number is :${arrayOfNumbers[i]}</li>`
    }

    myDiv.innerHTML +="</ul>"

    
    
}

function sumNumbers(){
    let sum = 0;
    for(i=0;i<arrayOfNumbers.length;i++){
        sum+=arrayOfNumbers[i]

    }
    
    myDiv.innerHTML+=`<h3>The sum of numbers is: ${sum}</h3>`
}

myNumbers(arrayOfNumbers)

sumNumbers()











