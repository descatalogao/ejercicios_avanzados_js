function findArrayIndex(array, text) {
    for (item of array){
      if (item.includes(text)){
        number=((array.indexOf(item)))
      }
    }
  }

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// findArrayIndex(mainCharacters, 'Luke')

function removeItem (array, text) {
  findArrayIndex(array, text)
  // console.log(number)
  array.splice(number, 1);
}

removeItem (mainCharacters, "Chewbacca")
console.log(mainCharacters)