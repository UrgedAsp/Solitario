// Creamos array vacio para las cartas
var cartas = [];

// Con un ciclo for llenamos el array con las cartas
for (let i = 1; i <= 13; i++) {

    // PICAS
    cartas.push({
        valor : i,
        color: 'negro',
        tipo: 'pica',
        imagen: 'img/' + i + 'P.PNG'
    })
    
    // TREBOLES
    cartas.push({
        valor : i,
        color: 'negro',
        tipo: 'trebol',
        imagen: 'img/' + i + 'T.PNG'
    })

    // CORAZONES
    cartas.push({
        valor : i,
        color: 'rojo',
        tipo: 'corazon',
        imagen: 'img/' + i + 'C.PNG'
    })

    // DIAMANTES
    cartas.push({
        valor : i,
        color: 'rojo',
        tipo: 'diamante',
        imagen: 'img/' + i + 'D.PNG'
    })

}

// CREAMOS UNA FUNCION PARA BARAJAR LAS CARTAS
function desordenar(unArray){
    let i = unArray.sort(function(a,b) {return (Math.random()-0.5)});
    return [...i];
}

desordenar(cartas);