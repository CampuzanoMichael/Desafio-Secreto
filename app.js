
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let amigos = 0 ;
let  indiceAleatorio ;


// Funcion para agregar amigo.
function agregarAmigo() {
    amigos = document.getElementById('amigo').value;
    
   if (amigos == 0) {
        alert("Por favor, inserte un nombre.");
    }
    else{
        // Si se encuentra el nombre en la lista no lo va 
        // a incluir. 
        if (listaAmigos.includes(amigos)) {
            alert("ESTE NOMBRE YA SE ENCUENTRA EN LA LISTA");
        }
        // Si no se encuentra el nombre en la lista lo va a incluir
        else{
            listaAmigos.push(amigos);
            limpiarCaja();
        }

        //Me muestra por ahora que hay en el arreglo y que se 
        //nombres hay por ahora.
        console.log(listaAmigos);
       
        mostrarAmigos();
}
}

//Funcion para limpiar la caja 
function limpiarCaja() {
    document.getElementById('amigo').value = " "; 
}

//Funcion para sortearAmigo
function sortearAmigo() {
    indiceAleatorio=Math.floor(Math.random()*listaAmigos.length);
   
    let amigoSorteado = listaAmigos[indiceAleatorio];
    
    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML =` Tu amigo secreto es:${amigoSorteado}`;
   
   
    return;  
}

//Funcion para mostrarAmigos
function  mostrarAmigos() {
    
    //crear variable contenedor que es la cual va a contener el elemento que se colocara
   var contenedor = document.getElementById('listaAmigos');
   
   //Se limpia el contenedor para que este no cuente con nada dentro de este que no deseemos
   contenedor.innerHTML = "";
  
   //Se crea un for para que recorra la lista y agregue el nuevo elemento a la lista
   for (let i = 0; i < listaAmigos.length; i++) {
   
    //Se crea el nuevo elemento de la lista - donde se crea la variable y se pone el elemento que se quiere
   //crear dentro del html.   
   let nuevoElemento = document.createElement('li');
   
   // Establecer el contenido del <li> con el nombre del amigo
   nuevoElemento.textContent = listaAmigos[i];
  
   // Agregar el nuevo <li> al contenedor
   //Se agrega el nuevo elemento al UL que es el contenedor que sostiene li.
   contenedor.appendChild(nuevoElemento);
       
   }
}
