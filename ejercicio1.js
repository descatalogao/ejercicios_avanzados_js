const movies = [
    {
      title: "Bracula: Condemor II",
      duration: 192,
      categories: ["comedia", "aventura"],
    },
    {
      title: "Spider-Man: No Way Home",
      duration: 122,
      categories: ["aventura", "acción"],
    },
    {
      title: "The Voices",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "Shrek",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },
  ];

  array=[]
  for (movie of movies){
    array.push(movie.categories)
  }
  array2=[]
  for (i of array){
    for (let y=0; y<(i.length); y++){
      array2.push(i[y])
    }
  array3=[]
  if (array3[0] === 'undefined'){
    array3.push(array2[0])
  }
  for (item2 of array2){
    let count=0
    for (item3 of array3){
      if (item2 === item3){
        count++
      }
    }
    if (count === 0){
    array3.push(item2)
    }
  }
  }
  console.log(array3)

