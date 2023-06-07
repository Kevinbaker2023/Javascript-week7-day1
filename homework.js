//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max","HAS","PuRple","dog"]

const findWords = (str, names) => {
    const str1 = str.toLowerCase()
    for (let i = 0; i < names.length; i++) {
        if (str1.includes(names[i].toLowerCase())) {
            console.log(`Matched ${names[i]}`);
        } else {
            console.log('No Match');
        }
    }
}

console.log(findWords("Hello Max, my name is Dog, and I have purple eyes!", ["Max","HAS","PuRple","dog"]))

//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

const replaceEvens = (arr) => {
    for (let i = 0; i < arr.length; i += 2) {
        arr.splice(i, 1, "even index");
        }
    return arr
}

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// https://www.codewars.com/kata/57efcb78e77282f4790003d8/train/javascript

function howManyTimes(annualPrice, individualPrice) {
    let solution = annualPrice / individualPrice;
    solution = Math.ceil(solution)
    return solution
  }

//   https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

function well(x){
    counter = 0
    for(let i in x){
      if(x[i] === 'good'){
        counter += 1
      }
    } if(counter === 1 || counter === 2){
      return 'Publish!'
    } else if(counter > 2){
      return 'I smell a series!'
    } else {
      return 'Fail!'
    }
  }