function rollDice(faces){
    array=[]

    //Crear dado
    for (let i=0; i<faces;i++){
        array.push((i+1))
    }
    console.log(array)

    //Simular una tirada
    let result = Math.random() * faces;
    result= Math.round(result);
    console.log(result)
}

rollDice(6)