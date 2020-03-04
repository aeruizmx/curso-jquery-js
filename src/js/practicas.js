console.log('Hola mundo')
const noCambia = 'ANDRES'
let cambia = '@NeonTigerMX'

function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}

const getUserAll = new Promise(function (todoBien, todoMal) {
  //Llamar a un api
  setTimeout(function () {
    //Luego de 3 segundos
    todoBien('Okey en 5 segundos');
  }, 5000)
})

const getUser = new Promise(function (todoBien, todoMal) {
  //Llamar a un api
  setTimeout(function () {
    //Luego de 3 segundos
    todoBien('Okey en 3 segundos');
  }, 3000)
})

getUser
  .then(function () {
    console.log('Todo esta bien en la vida')
  })
  .catch(function (message) {
    console.log(message)
  })

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
  .catch(function (message) {
    console.log(message)
  })

//JQUERY PETICION CORRECTA
//$.ajax('url',{configuracion})
$.ajax('https://randomuser.me/api/', {
  method: 'GET',
  success: function (data) {
    console.log(data)
  },
  error: function (error) {
    console.log(error)
  }
})

//JQUERY PETICION CON ERROR
$.ajax('https://randomuser.me/api/asasasa', {
  method: 'GET',
  success: function (data) {
    console.log(data)
  },
  error: function (error) {
    console.log(error)
  }
})

//JS PETICION 
fetch('https://randomuser.me/api/')
  .then(function (response) {
    //console.log(response)
    return response.json()
  })
  .then(function (data) {
    console.log('User:', data.results[0].name.first)
  })
  .catch(function (error) {
    console.log(error)
  })

//JS PETICION CON FALLO
fetch('https://randomuser.me/api/asasas')
  .then(function (response) {
    //console.log(response)
    return response.json()
  })
  .then(function (data) {
    console.log('User:', data.results[0].name.first)
  })
  .catch(function (error) {
    console.log(error)
  });

// FUNCIONES ASINCRONAS
(async function load() {
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  //LLAMADAS
  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action');

  ///OTRA FORMA DE HACER LLAMADA
  let terrorList = getData('https://yts.mx/api/v2/list_movies.json?genre=terror')
    .then(function (data) {
      console.log('terrorList', data);
    });

  // JQUERY SELECTORES
  const $home = $('.home');

  // JS SELECTORES
  const $horrorContainer = document.querySelector('#horror');


})()