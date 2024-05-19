const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Santiago",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Laura",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];

let favs=[]
  for (user of users){
    for (i of(Object.keys(user.favoritesSounds))){
        favs.push(i)
    }
  }
  clean=[]
  for (fav of favs){
    count=0
    for (object of clean){
        if (object === fav){
            count++
        }
    }
    if (count === 0){
        clean.push(fav)
    }
  }
  for (category of clean){
    count=0
    for (fav of favs){
        if (fav.includes(category)){
        count++
        }
    }
    console.log((category)+(".....")+(count))
  }
// console.log(favs)
// console.log(clean)