// 1.I should write function
// 2.Function should be called tellStory
// 3.The function should accept array of 3 strings
// 4.The arguments should be name,mood and activity all strings
// 5.The function should return one big string with a story made from the arguments



function tellStory(myName,myMood,myActivity){

    let myStory=`This is ${myName} .${myName} is nice person.today he is ${myMood}.He is ${myActivity} all day.`
    console.log(myStory)

    return myStory

}

let myNewStory=tellStory("John","happy","dancing")
console.log(myNewStory)