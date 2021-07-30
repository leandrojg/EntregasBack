

let animales = "Gato, Elefante, Perro, Mono";
let hombres = "Mariano, Raquel, Arturo, Leonel";
let autos = "Fiat, Audi, Ferrari, Ford";


function mostrarPalabras(arr, i, callback,) {

    if (arr.length == i) {
        console.log('Proceso completo')
        console.log(`Cantidad de palabras: ${arr.length}`)
        return;
    }

    setTimeout(() =>{
        callback(arr[i]);
        mostrarPalabras(arr, i+1, callback);
    
    },1000)

}


mostrarPalabras(animales.split(' '),0,(e)=>{
    console.log(e)
});


mostrarPalabras(hombres.split(' '),0,(e)=>{
    console.log(e)
});


mostrarPalabras(autos.split(' '),0,(e)=>{
    console.log(e)
});

//probe utilizar este ejemplo de anidamiento pero no funciono :(

// let hacerTarea2 = (msg,cb) => {
//     console.log(msg);
//     setTimeout(cb, 100)
// }   

// console.log('Iniciando tarea')
// hacerTarea2(1,()=>{

//     hacerTarea2(2,()=>{

//         hacerTarea2(3,()=>{

//         console.log('finalizar tarea')    
//         })
//     })
// })

