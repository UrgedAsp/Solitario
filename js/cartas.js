// Creamos array vacio para las cartas
var cartas = [];

// Con un ciclo for llenamos el array con las cartas
for (let i = 1; i <= 13; i++) {

    // PICAS
    cartas.push({
        valor : i,
        color: 'negro',
        tipo: 'pica',
        imagen: 'img/' + i + 'S.svg'
    })
    
    // TREBOLES
    cartas.push({
        valor : i,
        color: 'negro',
        tipo: 'trebol',
        imagen: 'img/' + i + 'C.svg'
    })

    // CORAZONES
    cartas.push({
        valor : i,
        color: 'rojo',
        tipo: 'corazon',
        imagen: 'img/' + i + 'H.svg'
    })

    // DIAMANTES
    cartas.push({
        valor : i,
        color: 'rojo',
        tipo: 'diamante',
        imagen: 'img/' + i + 'D.svg'
    })

}

// CREAMOS UNA FUNCION PARA BARAJAR LAS CARTAS
function desordenar(unArray){
    let i = unArray.sort(function(a,b) {return (Math.random()-0.5)});
    return [...i];
}

desordenar(cartas);