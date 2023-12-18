let myNum = [10,5,4,7,9]

function myNumbers(arrayOfNumbers){
    let result = arrayOfNumbers[0] + arrayOfNumbers[1] + arrayOfNumbers[2] + arrayOfNumbers[3] + arrayOfNumbers[4]

    return result
}

let newSumNumbers=myNumbers(myNum)
console.log(newSumNumbers);



function validateNumber(myInput){
    if(isNaN(myInput[0])){
        return console.log('ERROR , you entered something that is not number')
    }else if(isNaN(myInput[1])){
        return console.log('ERROR , you entered something that is not number')
    }else if(isNaN(myInput[2])){

         return console.log('ERROR , you entered something that is not number')
    }else if(isNaN(myInput[3])){
        return console.log('ERROR , you entered something that is not number')

    }else if(isNaN(myInput[4])){
        return console.log('ERROR , you entered something that is not number')
    }else {
        return console.log(myInput)

    }
    
    }

    let newValidateNumber=validateNumber(myInput)
    console.log(newValidateNumber)



