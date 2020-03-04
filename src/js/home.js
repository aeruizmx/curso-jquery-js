console.log('Hola mundo')
const noCambia = 'ANDRES'
let cambia = '@NeonTigerMX'

function cambiarNombre(nuevoNombre){
  cambia = nuevoNombre
}

const getUserAll = new Promise(function (todoBien, todoMal) {
  //Llamar a un api
  setTimeout(function(){
    //Luego de 3 segundos
    todoBien('Okey');
  }, 5000)
})

const getUser = new Promise(function (todoBien, todoMal) {
  //Llamar a un api
  setTimeout(function(){
    //Luego de 3 segundos
    todoBien('SOkey 2');
  }, 3000)
})

/* getUser
  .then(function() {
    console.log('Todo esta bien en la vida')
  })
  .catch(function(message){
    console.log(message)
  }) */
//Promise.all  resuelve todas OK y luego THEN
//Promise.race resuelve y la primera que termine continua THEN
//Cuando ocurre algo, se lanza el catch y termina
Promise.race([
  getUser,
  getUserAll
])
.then(function (message) {
  console.log(message)
})
.catch(function(message){
  console.log(message)
})