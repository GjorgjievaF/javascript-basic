
let array=[5,3,7,9,8,5,2,12]

function myNumbers(arrayOfNumbers){
    
    let max=[]
    let min=[]
    for(let i=0;i<arrayOfNumbers.length;i++){
        if(arrayOfNumbers[i] > max ){
            max=arrayOfNumbers[i]
            console.log(`The max value is:${max}`)

            
            

            
        }else if(arrayOfNumbers[i] < min){
            min=arrayOfNumbers[i]
            console.log(`The min value is: ${min}`)
            
            
                       

    }   
}
}

let maxNumber=myNumbers(array)
console.log(maxNumber)


   