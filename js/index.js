

let palabras = "Perro, Gato, Burro, Elefante";


function mostrarPalabras(arr, i, callback) {
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

mostrarPalabras(palabras.split(' '),0,(e)=>{
    console.log(e)
});


//callback

let llamadasAlaFuncion = (msg,cb) => {
    console.log(msg);
    setTimeout(cb, 100)
}


llamadasAlaFuncion(1,()=>{

    llamadasAlaFuncion(2,()=>{

        llamadasAlaFuncion(3,()=>{

        console.log('finalizar tarea')    
        })
    })
})

llamadasAlaFuncion(1)
llamadasAlaFuncion(2)
llamadasAlaFuncion(3)