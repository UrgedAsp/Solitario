// Configuracion de Drag and Drop
function allowDrop(ev) {
    ev.preventDefault();
}
// 

// Creamos todas las imagenes de las cartas
let container = document.getElementById("container");
for (let i = 0; i < cartas.length; i++) {
    let img = document.createElement("img");
    img.src = cartas[i].imagen;
    img.className = cartas[i].imagen;
    img.style.position = "absolute";
    img.style.borderRadius = "10%";
    img.width = 150;
    img.height = 180;
    img.id = "cartas" + (i + 1);
    img.draggable = true;
    img.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData("id", event.target.id);
        event.dataTransfer.setData("obj", JSON.stringify(cartas[i]));
    })
    container.appendChild(img);
}
// 

// Creamos la baraja de las 24
let barajaTapada = [];
for (let i = 0; i < 24; i++) {
    barajaTapada.push(cartas[i]);
    document.getElementById('barajitaT').appendChild(document.getElementById('cartas' + (i + 1)))
    let ultima = document.getElementById('barajitaT').lastChild;
    ultima.style.opacity = '0';
    ultima.draggable = false;
}
console.log(barajaTapada);
// 


// Funcionamiento de la baraja
function destapar() {

    let barajaT = document.getElementById('barajitaT').hasChildNodes();
    if (barajaT) {
        let ultima = document.getElementById('barajitaT').lastChild;
        document.getElementById('barajitaD').appendChild(ultima);
        ultima.style.opacity = '1';
        ultima.draggable = true;
    } else {
        let contador = document.getElementById('barajitaD').childElementCount;
        
        for (let i = 0; i < contador; i++) {
            let ultima = document.getElementById('barajitaD').lastChild;
            ultima.style.opacity = '0';
            document.getElementById('barajitaT').appendChild(ultima);
        }
    }
}
// 

// Evento de soltar las cartas
let diamante = document.getElementById('diamantes');
let corazon = document.getElementById('corazones');
let trebol = document.getElementById('treboles');
let pica = document.getElementById('picas');

diamante.addEventListener('drop', (event) => {
    event.preventDefault();
    let numeroD = diamante.childElementCount+1;
    let id = event.dataTransfer.getData("id");
    let objeto = event.dataTransfer.getData("obj");
    objeto = JSON.parse(objeto);
    if (objeto.tipo == 'diamante' && objeto.valor == numeroD) {
        if(document.getElementById(id).previousSibling){
            document.getElementById(id).previousSibling.src = document.getElementById(id).previousSibling.className;
        }
        let cartica = document.getElementById(id);
        cartica.style.top = '0';
        diamante.appendChild(cartica);
    }
})

pica.addEventListener('drop', (event) => {
    event.preventDefault();
    let numeroP = pica.childElementCount+1;
    let id = event.dataTransfer.getData("id");
    let objeto = event.dataTransfer.getData("obj");
    objeto = JSON.parse(objeto);
    if (objeto.tipo == 'pica' && objeto.valor == numeroP) {
        if(document.getElementById(id).previousSibling){
            document.getElementById(id).previousSibling.src = document.getElementById(id).previousSibling.className;
        }
        let cartica = document.getElementById(id);
        cartica.style.top = '0';
        pica.appendChild(cartica);
    }
})

trebol.addEventListener('drop', (event) => {
    event.preventDefault();
    let numeroT = trebol.childElementCount+1;
    let id = event.dataTransfer.getData("id");
    let objeto = event.dataTransfer.getData("obj");
    objeto = JSON.parse(objeto);
    if (objeto.tipo == 'trebol' && objeto.valor == numeroT) {
        if(document.getElementById(id).previousSibling){
            document.getElementById(id).previousSibling.src = document.getElementById(id).previousSibling.className;
        } 
       let cartica = document.getElementById(id);
        cartica.style.top = '0';
        trebol.appendChild(cartica);
    }
})

corazon.addEventListener('drop', (event) => {
    let numeroC = corazon.childElementCount+1;
    event.preventDefault();
    let id = event.dataTransfer.getData("id");
    let objeto = event.dataTransfer.getData("obj");
    objeto = JSON.parse(objeto);
    if (objeto.tipo == 'corazon' && objeto.valor == numeroC) {
        if(document.getElementById(id).previousSibling){
            document.getElementById(id).previousSibling.src = document.getElementById(id).previousSibling.className;
        }
        let cartica = document.getElementById(id);
        cartica.style.top = '0';
        corazon.appendChild(cartica);
    }
})
// 

// Columnas del juego


fila1 = document.getElementById('fila1');
fila2 = document.getElementById('fila2');
fila3 = document.getElementById('fila3');
fila4 = document.getElementById('fila4');
fila5 = document.getElementById('fila5');
fila6 = document.getElementById('fila6');
fila7 = document.getElementById('fila7');


// EVENTOS DE LA FILA1
fila1.appendChild(document.getElementById('cartas25'));
let marginF1 = 0;
let pImgFila1 = document.getElementById('fila1').firstChild;
for (let i = 0; i < fila1.childElementCount; i++) {
    pImgFila1.style.top = marginF1 + 'px';
    marginF1 += 50;
    pImgFila1 = pImgFila1.nextSibling;
    if(i == cartas.length - 1){
        img.src = cartas[i].imagen;
    }
}
fila1.addEventListener('drop', (event) => {
    event.preventDefault();
    let id = event.dataTransfer.getData("id");
    let objeto = event.dataTransfer.getData("obj");
    objeto = JSON.parse(objeto);
    console.log(id);
    console.log(objeto);
    if (!fila1.hasChildNodes()) {
        if (objeto.valor == 13) {
            if(document.getElementById(id).previousSibling){
                document.getElementById(id).previousSibling.src = document.getElementById(id).previousSibling.className;
            }
            document.getElementById(id).style.top = '0';
            if(document.getElementById(id).nextSibling){
                do{
                    let idH = document.getElementById(id).nextSibling.id;
                    fila1.appendChild(document.getElementById(id));
                    id = idH;
                }while(document.getElementById(id).nextSibling)
                fila1.appendChild(document.getElementById(id));
            }else{
                fila1.appendChild(document.getElementById(id));                
            }
        }
    }else{
    }
    let lastImg = fila1.lastChild.className;
    //lastImg = lastImg.replace(/^.*[\\\/]/, '');
    resultado = cartas.find(carta => carta.imagen === lastImg);
    
    
    if (resultado.color == objeto.color) {
    } else {
        if (objeto.valor == (resultado.valor - 1)) {
            if(document.getElementById(id).previousSibling){
                document.getElementById(id).previousSibling.src = document.getElementById(id).previousSibling.className;
            }
            if(document.getElementById(id).nextSibling){
                do{
                    let idH = document.getElementById(id).nextSibling.id;
                    fila1.appendChild(document.getElementById(id));
                    id = idH;
                }while(document.getElementById(id).nextSibling)
                fila1.appendChild(document.getElementById(id));
            }else{
                fila1.appendChild(document.getElementById(id));                
            }
            let marginF1 = 0;
            let pImgFila1 = document.getElementById('fila1').firstChild;
            for (let i = 0; i < fila1.childElementCount; i++) {
                pImgFila1.style.top = marginF1 + 'px';
                marginF1 += 50;
                pImgFila1 = pImgFila1.nextSibling;
            }
        } else {
        }
    }

})
// 

// EVENTOS DE LA FILA2
fila2.appendChild(document.getElementById('cartas26'));
fila2.appendChild(document.getElementById('cartas27'));
let marginF2 = 0;
let pImgFila2 = document.getElementById('fila2').firstChild;
// TAPA LAS CARTAS MENOS LA ÚLTIMA
let pImgFila2Tapadas = document.getElementById('fila2').childNodes;
for (let i = 0; i < pImgFila2Tapadas.length; i++) {
    pImgFila2Tapadas[i].src = './img/NN.PNG';
    if(i == pImgFila2Tapadas.length - 1 ){
        pImgFila2Tapadas[i].src = pImgFila2Tapadas[i].className;
    }
}
for (let i = 0; i < fila2.childElementCount; i++) {
    pImgFila2.style.top = marginF2 + 'px';
    marginF2 += 50;
    pImgFila2 = pImgFila2.nextSibling;
   
}
fila2.addEventListener('drop', (event) => {
    event.preventDefault();
    let id = event.dataTransfer.getData("id");
    let objeto = event.dataTransfer.getData("obj");
    objeto = JSON.parse(objeto);
    console.log(id);
    console.log(objeto);
    if (!fila2.hasChildNodes()) {
        if (objeto.valor == 13) {
            if(document.getElementById(id).previousSibling){
                document.getElementById(id).previousSibling.src = document.getElementById(id).previousSibling.className;
            }
            document.getElementById(id).style.top = '0';
            if(document.getElementById(id).nextSibling){
                do{
                    let idH = document.getElementById(id).nextSibling.id;
                    fila2.appendChild(document.getElementById(id));
                    id = idH;
                }while(document.getElementById(id).nextSibling)
                fila2.appendChild(document.getElementById(id));
            }else{
                fila2.appendChild(document.getElementById(id));                
            }
        }
    }else{
    }
    let lastImg = fila2.lastChild.className;
    //lastImg = lastImg.replace(/^.*[\\\/]/, '');
    resultado = cartas.find(carta => carta.imagen === lastImg);
    
    if (resultado.color == objeto.color) {
    } else {
        if (objeto.valor == (resultado.valor - 1)) {
            if(document.getElementById(id).previousSibling){
                document.getElementById(id).previousSibling.src = document.getElementById(id).previousSibling.className;
            }
            if(document.getElementById(id).nextSibling){
                do{
                    let idH = document.getElementById(id).nextSibling.id;
                    fila2.appendChild(document.getElementById(id));
                    id = idH;
                }while(document.getElementById(id).nextSibling)
                fila2.appendChild(document.getElementById(id));
            }else{
                fila2.appendChild(document.getElementById(id));            
            }
            let marginF2 = 0;
            let pImgFila2 = document.getElementById('fila2').firstChild;
            for (let i = 0; i < fila2.childElementCount; i++) {
                pImgFila2.style.top = marginF2 + 'px';
                marginF2 += 50;
                pImgFila2 = pImgFila2.nextSibling;
            }
        } else {
        }
    }
})
// 

fila3.appendChild(document.getElementById('cartas28'));
fila3.appendChild(document.getElementById('cartas29'));
fila3.appendChild(document.getElementById('cartas30'));
let marginF3 = 0;
let pImgFila3 = document.getElementById('fila3').firstChild;
// TAPA LAS CARTAS MENOS LA ÚLTIMA
let pImgFila3Tapadas = document.getElementById('fila3').childNodes;
for (let i = 0; i < pImgFila3Tapadas.length; i++) {
    pImgFila3Tapadas[i].src = './img/NN.PNG';
    if(i == pImgFila3Tapadas.length - 1 ){
        pImgFila3Tapadas[i].src = pImgFila3Tapadas[i].className;
    }
}
for (let i = 0; i < fila3.childElementCount; i++) {
    pImgFila3.style.top = marginF3 + 'px';
    marginF3 += 50;
    pImgFila3 = pImgFila3.nextSibling;
}
fila3.addEventListener('drop', (event) => {
    event.preventDefault();
    let id = event.dataTransfer.getData("id");
    let objeto = event.dataTransfer.getData("obj");
    objeto = JSON.parse(objeto);
    console.log(id);
    console.log(objeto);
    if (!fila3.hasChildNodes()) {
        if (objeto.valor == 13) {
            if(document.getElementById(id).previousSibling){
                document.getElementById(id).previousSibling.src = document.getElementById(id).previousSibling.className;
            }
            document.getElementById(id).style.top = '0';
            if(document.getElementById(id).nextSibling){
                do{
                    let idH = document.getElementById(id).nextSibling.id;
                    fila3.appendChild(document.getElementById(id));
                    id = idH;
                }while(document.getElementById(id).nextSibling)
                fila3.appendChild(document.getElementById(id));
            }else{
                fila3.appendChild(document.getElementById(id));                
            }
        }
    }
    let lastImg = fila3.lastChild.className
    //lastImg = lastImg.replace(/^.*[\\\/]/, '');
    resultado = cartas.find(carta => carta.imagen === lastImg);
    
    if (resultado.color == objeto.color) {
    } else {
        if (objeto.valor == (resultado.valor - 1)) {
            if(document.getElementById(id).previousSibling){
                document.getElementById(id).previousSibling.src = document.getElementById(id).previousSibling.className;
            }
            if(document.getElementById(id).nextSibling){
                do{
                    let idH = document.getElementById(id).nextSibling.id;
                    fila3.appendChild(document.getElementById(id));
                    id = idH;
                }while(document.getElementById(id).nextSibling)
                fila3.appendChild(document.getElementById(id));
            }else{
                fila3.appendChild(document.getElementById(id));                
            }
            let marginF3 = 0;
            let pImgFila3 = document.getElementById('fila3').firstChild;
            for (let i = 0; i < fila3.childElementCount; i++) {
                pImgFila3.style.top = marginF3 + 'px';
                marginF3 += 50;
                pImgFila3 = pImgFila3.nextSibling;
            }
        }
    }

})

fila4.appendChild(document.getElementById('cartas31'));
fila4.appendChild(document.getElementById('cartas32'));
fila4.appendChild(document.getElementById('cartas33'));
fila4.appendChild(document.getElementById('cartas34'));
let marginF4 = 0;
let pImgFila4 = document.getElementById('fila4').firstChild;
// TAPA LAS CARTAS MENOS LA ÚLTIMA
let pImgFila4Tapadas = document.getElementById('fila4').childNodes;
for (let i = 0; i < pImgFila4Tapadas.length; i++) {
    pImgFila4Tapadas[i].src = './img/NN.PNG';
    if(i == pImgFila4Tapadas.length - 1 ){
        pImgFila4Tapadas[i].src = pImgFila4Tapadas[i].className;
    }
}
for (let i = 0; i < fila4.childElementCount; i++) {
    pImgFila4.style.top = marginF4 + 'px';
    marginF4 += 50;
    pImgFila4 = pImgFila4.nextSibling;
}
fila4.addEventListener('drop', (event) => {
    event.preventDefault();
    let id = event.dataTransfer.getData("id");
    let objeto = event.dataTransfer.getData("obj");
    objeto = JSON.parse(objeto);
    if (!fila4.hasChildNodes()) {
        if (objeto.valor == 13) {
            if(document.getElementById(id).previousSibling){
                document.getElementById(id).previousSibling.src = document.getElementById(id).previousSibling.className;
            }
            document.getElementById(id).style.top = '0';
            if(document.getElementById(id).nextSibling){
                do{
                    let idH = document.getElementById(id).nextSibling.id;
                    fila4.appendChild(document.getElementById(id));
                    id = idH;
                }while(document.getElementById(id).nextSibling)
                fila4.appendChild(document.getElementById(id));
            }else{
                fila4.appendChild(document.getElementById(id));                
            }
        }
    }
    let lastImg = fila4.lastChild.className;
    //lastImg = lastImg.replace(/^.*[\\\/]/, '');
    resultado = cartas.find(carta => carta.imagen === lastImg);
    
    
    if (resultado.color == objeto.color) {
    } else {
        if (objeto.valor == (resultado.valor - 1)) {
            if(document.getElementById(id).previousSibling){
                document.getElementById(id).previousSibling.src = document.getElementById(id).previousSibling.className;
            }
            if(document.getElementById(id).nextSibling){
                do{
                    let idH = document.getElementById(id).nextSibling.id;
                    fila4.appendChild(document.getElementById(id));
                    id = idH;
                }while(document.getElementById(id).nextSibling)
                fila4.appendChild(document.getElementById(id));
            }else{
                fila4.appendChild(document.getElementById(id));                
            }
            let marginF4 = 0;
            let pImgFila4 = document.getElementById('fila4').firstChild;
            for (let i = 0; i < fila4.childElementCount; i++) {
                pImgFila4.style.top = marginF4 + 'px';
                marginF4 += 50;
                pImgFila4 = pImgFila4.nextSibling;
            }
        } else {
        }
    }

})

fila5.appendChild(document.getElementById('cartas35'));
fila5.appendChild(document.getElementById('cartas36'));
fila5.appendChild(document.getElementById('cartas37'));
fila5.appendChild(document.getElementById('cartas38'));
fila5.appendChild(document.getElementById('cartas39'));
let marginF5 = 0;
let pImgFila5 = document.getElementById('fila5').firstChild;
// TAPA LAS CARTAS MENOS LA ÚLTIMA
let pImgFila5Tapadas = document.getElementById('fila5').childNodes;
for (let i = 0; i < pImgFila5Tapadas.length; i++) {
    pImgFila5Tapadas[i].src = './img/NN.PNG';
    if(i == pImgFila5Tapadas.length - 1 ){
        pImgFila5Tapadas[i].src = pImgFila5Tapadas[i].className;
    }
}
for (let i = 0; i < fila5.childElementCount; i++) {
    pImgFila5.style.top = marginF5 + 'px';
    marginF5 += 50;
    pImgFila5 = pImgFila5.nextSibling;
}
fila5.addEventListener('drop', (event) => {
    event.preventDefault();
    let id = event.dataTransfer.getData("id");
    let objeto = event.dataTransfer.getData("obj");
    objeto = JSON.parse(objeto);
    if (!fila5.hasChildNodes()) {
        if (objeto.valor == 13) {
            if(document.getElementById(id).previousSibling){
                document.getElementById(id).previousSibling.src = document.getElementById(id).previousSibling.className;
            }
            document.getElementById(id).style.top = '0';
            if(document.getElementById(id).nextSibling){
                do{
                    let idH = document.getElementById(id).nextSibling.id;
                    fila5.appendChild(document.getElementById(id));
                    id = idH;
                }while(document.getElementById(id).nextSibling)
                fila5.appendChild(document.getElementById(id));
            }else{
                fila5.appendChild(document.getElementById(id));                
            }
        }
    }else{
    }
    let lastImg = fila5.lastChild.className;
    //lastImg = lastImg.replace(/^.*[\\\/]/, '');
    resultado = cartas.find(carta => carta.imagen === lastImg);
    
    
    if (resultado.color == objeto.color) {
    } else {
        if (objeto.valor == (resultado.valor - 1)) {
            if(document.getElementById(id).previousSibling){
                document.getElementById(id).previousSibling.src = document.getElementById(id).previousSibling.className;
            }
            if(document.getElementById(id).nextSibling){
                do{
                    let idH = document.getElementById(id).nextSibling.id;
                    fila5.appendChild(document.getElementById(id));
                    id = idH;
                }while(document.getElementById(id).nextSibling)
                fila5.appendChild(document.getElementById(id));
            }else{
                fila5.appendChild(document.getElementById(id));                
            }
            let marginF5 = 0;
            let pImgFila5 = document.getElementById('fila5').firstChild;
            for (let i = 0; i < fila5.childElementCount; i++) {
                pImgFila5.style.top = marginF5 + 'px';
                marginF5 += 50;
                pImgFila5 = pImgFila5.nextSibling;
            }
        } else {
        }
    }

})

fila6.appendChild(document.getElementById('cartas40'));
fila6.appendChild(document.getElementById('cartas41'));
fila6.appendChild(document.getElementById('cartas42'));
fila6.appendChild(document.getElementById('cartas43'));
fila6.appendChild(document.getElementById('cartas44'));
fila6.appendChild(document.getElementById('cartas45'));
let marginF6 = 0;
let pImgFila6 = document.getElementById('fila6').firstChild;
// TAPA LAS CARTAS MENOS LA ÚLTIMA
let pImgFila6Tapadas = document.getElementById('fila6').childNodes;
for (let i = 0; i < pImgFila6Tapadas.length; i++) {
    pImgFila6Tapadas[i].src = './img/NN.PNG';
    if(i == pImgFila6Tapadas.length - 1 ){
        pImgFila6Tapadas[i].src = pImgFila6Tapadas[i].className;
    }
}
for (let i = 0; i < fila6.childElementCount; i++) {
    pImgFila6.style.top = marginF6 + 'px';
    marginF6 += 50;
    pImgFila6 = pImgFila6.nextSibling;
}
fila6.addEventListener('drop', (event) => {
    event.preventDefault();
    let id = event.dataTransfer.getData("id");
    let objeto = event.dataTransfer.getData("obj");
    objeto = JSON.parse(objeto);
    if (!fila6.hasChildNodes()) {
        if (objeto.valor == 13) {
            if(document.getElementById(id).previousSibling){
                document.getElementById(id).previousSibling.src = document.getElementById(id).previousSibling.className;
            }
            document.getElementById(id).style.top = '0';
            if(document.getElementById(id).nextSibling){
                do{
                    let idH = document.getElementById(id).nextSibling.id;
                    fila6.appendChild(document.getElementById(id));
                    id = idH;
                }while(document.getElementById(id).nextSibling)
                fila6.appendChild(document.getElementById(id));
            }else{
                fila6.appendChild(document.getElementById(id));                
            }
        }
    }else{
    }
    let lastImg = fila6.lastChild.className;
    //lastImg = lastImg.replace(/^.*[\\\/]/, '');
    resultado = cartas.find(carta => carta.imagen === lastImg);
      
    if (resultado.color == objeto.color) {
    } else {
        if (objeto.valor == (resultado.valor - 1)) {
            if(document.getElementById(id).previousSibling){
                document.getElementById(id).previousSibling.src = document.getElementById(id).previousSibling.className;
            }
            if(document.getElementById(id).nextSibling){
                do{
                    let idH = document.getElementById(id).nextSibling.id;
                    fila6.appendChild(document.getElementById(id));
                    id = idH;
                }while(document.getElementById(id).nextSibling)
                fila6.appendChild(document.getElementById(id));
            }else{
                fila6.appendChild(document.getElementById(id));                
            }
            let marginF6 = 0;
            let pImgFila6 = document.getElementById('fila6').firstChild;
            for (let i = 0; i < fila6.childElementCount; i++) {
                pImgFila6.style.top = marginF6 + 'px';
                marginF6 += 50;
                pImgFila6 = pImgFila6.nextSibling;
            }
        } else {
        }
    }

})

fila7.appendChild(document.getElementById('cartas46'));
fila7.appendChild(document.getElementById('cartas47'));
fila7.appendChild(document.getElementById('cartas48'));
fila7.appendChild(document.getElementById('cartas49'));
fila7.appendChild(document.getElementById('cartas50'));
fila7.appendChild(document.getElementById('cartas51'));
fila7.appendChild(document.getElementById('cartas52'));
let marginF7 = 0;
let pImgFila7 = document.getElementById('fila7').firstChild;
// TAPA LAS CARTAS MENOS LA ÚLTIMA
let pImgFila7Tapadas = document.getElementById('fila7').childNodes;
for (let i = 0; i < pImgFila7Tapadas.length; i++) {
    pImgFila7Tapadas[i].src = './img/NN.PNG';
    if(i == pImgFila7Tapadas.length - 1 ){
        pImgFila7Tapadas[i].src = pImgFila7Tapadas[i].className;
    }
}
for (let i = 0; i < fila7.childElementCount; i++) {
    pImgFila7.style.top = marginF7 + 'px';
    marginF7 += 50;
    pImgFila7 = pImgFila7.nextSibling;
}
fila7.addEventListener('drop', (event) => {
    event.preventDefault();
    let id = event.dataTransfer.getData("id");
    let objeto = event.dataTransfer.getData("obj");
    objeto = JSON.parse(objeto);
    if (!fila7.hasChildNodes()) {
        if (objeto.valor == 13) {
            document.getElementById(id).previousSibling.src = document.getElementById(id).previousSibling.className;
            document.getElementById(id).style.top = '0';
            if(document.getElementById(id).nextSibling){
                do{
                    let idH = document.getElementById(id).nextSibling.id;
                    fila7.appendChild(document.getElementById(id));
                    id = idH;
                }while(document.getElementById(id).nextSibling)
                fila7.appendChild(document.getElementById(id));
            }else{
                fila7.appendChild(document.getElementById(id));                
            }        }
    }
    let lastImg = fila7.lastChild.className;
    //lastImg = lastImg.replace(/^.*[\\\/]/, '');
    resultado = cartas.find(carta => carta.imagen === lastImg);
    
    if (resultado.color == objeto.color) {
    } else {
        if (objeto.valor == (resultado.valor - 1)) {
            if(document.getElementById(id).previousSibling){
                document.getElementById(id).previousSibling.src = document.getElementById(id).previousSibling.className;
            }
            if(document.getElementById(id).nextSibling){
                do{
                    let idH = document.getElementById(id).nextSibling.id;
                    fila7.appendChild(document.getElementById(id));
                    id = idH;
                }while(document.getElementById(id).nextSibling)
                fila7.appendChild(document.getElementById(id));
            }else{
                fila7.appendChild(document.getElementById(id));                
            }
            let marginF7 = 0;
            let pImgFila7 = document.getElementById('fila7').firstChild;
            for (let i = 0; i < fila7.childElementCount; i++) {
                pImgFila7.style.top = marginF7 + 'px';
                marginF7 += 50;
                pImgFila7 = pImgFila7.nextSibling;
            }
        } else {
        }
    }
})






const ganaste = setInterval(()=>{
    if(diamante.childElementCount == 13 && pica.childElementCount == 13 && trebol.childElementCount == 13 && corazon.childElementCount == 13){
        alert('FELICIDADES GANASTE');
        clearInterval(ganaste);
    }   
    },1000)