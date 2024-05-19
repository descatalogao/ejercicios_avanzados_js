const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

function swap(array, index1, index2){

   let elementoA = array[index1]
   let elementoB = array[index2]

   array[index1]= elementoB
   array[index2]= elementoA

   console.log(array)

}

swap(fantasticFour,3,1)