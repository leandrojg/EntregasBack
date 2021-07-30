let animales = "Gato, Elefante, Perro, Mono";
let hombres = "Mariano, Raquel, Arturo, Leonel";
let autos = "Fiat, Audi, Ferrari, Ford";

//aqui deberia recibir un texto y no un array. tambien deberia recibir un el timeout como parametro.
function mostrarPalabras(arr, i, callback) {
  if (arr.length == i) {
    console.log("Proceso completo");
    console.log(`Cantidad de palabras: ${arr.length}`);
    return;
  }

  setTimeout(() => {
    callback(arr[i]);
    mostrarPalabras(arr, i + 1, callback);
  }, 1000);
}

// mostrarPalabras(animales.split(" "), 0, (e) => {
//   console.log(e);
// });

// mostrarPalabras(hombres.split(" "), 0, (e) => {
//   console.log(e);
// });

// mostrarPalabras(autos.split(" "), 0, (e) => {
//   console.log(e);
// });

//probe utilizar este ejemplo de anidamiento pero no funciono :(
//creo que estaba medio cerca, pero no se me ocurre facil como hacerlo con setTimeout
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

//hago otra func aqui
function mostrarWords(texto, cant, timeout = 1000, callback) {
  //cant cuenta las palabras, y timeout creo que era 1s por defecto
  const array = texto.split(" "); //es mejor ponerlo adentro y no tener que pasarlo como parametro cada vez que se llama la f.
  let index = 0; //un contador bien clasico
  let id = setInterval(
    //aveces permite hacer cosas mas divertidas que setTimeout
    () => {
      console.log(array[index++]); //aquí voy mostrando cada palabra
      if (index >= array.length) {
        //con este condicional basicamente estoy usando setInterval como un while xD
        clearInterval(id); //como buen bucle, no quiero que sea infinito
        callback(array.length + cant); //aqui voy acumulando la cantidad de palabras
      }
    },
    timeout //el segundo parametro de setInterval es el tiempo entre cada palabra.
  );
}

//aqui viene lo divertido
mostrarWords(animales, 0, 300, (cant) => {
  mostrarWords(hombres, cant, 500, (cant) => {
    mostrarWords(autos, cant, 700, (cant) => {
      console.log("Proceso terminado, Cantidad de palabras:", cant); //callback hell como corresponde
    });
  });
});
