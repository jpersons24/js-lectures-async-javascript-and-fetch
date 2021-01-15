// function sleep(time) {
//   const start = new Date()
//   while (new Date() - start < time * 1000) {
//     // do nothing && block the main thread 😈
//   }
// }

// ************ SYNCHRONOUS CODE VS ASYNCHRONOUS CODE *************

// calling a sleep function such as below blocks the render thread and stop the user from being able to interact with page because of the sleep function

document.querySelector('button').addEventListener('click', function() {
  const input = document.querySelector('#input')
  const id = input.value

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(pokemon => {
      renderPokemon(pokemon)
    })
})

// functin to display pokemon on page --> called in fetch on line 19
function renderPokemon(pokemon) {
  console.log(pokemon.name)
  const name = document.querySelector('#name')
  name.textContent = pokemon.name
}

// console.log('before timeout')

// setTimeout allows user to continue to interact with page
// says theres is an action or function to run after the given amount of time

// setTimeout(() => {
//   console.log('inside timeout')
// }, 5000)

// console.log('after set timeout')




// *** EXAMPLE ANALAGY***:  comparing to cooking --> can continue to do things while your oven is preheating. you don't have to stop all acitivities

// preheat oven
// console.log('preheating oven')

// setTimeout(() => {
//   console.log('oven! preheated!!')
//   setTimeout(() => {
//     console.log('chicken is cooking')
//   }, 5000)
// }, 5000)

// // prep ingredients
// console.log('chopping vegetables and marinating chicken')


// *************** USING FETCH ****************


// *** fetch structure example ***
// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));


// console log within fetch request comes after 'BEFORE' and 'AFTER' console log
// javascript is treating fetch request asynchronously --> like setTimeout

// 1. making network request
// 2. parsing response
// 3. getting some data

// console.log('BEFORE fetch')


// BELOW CODE IS LONGER VERSION OF STEP ONE THROUGH THREE

// const promise = fetch('https://pokeapi.co/api/v2/pokemon/1')

// console.log(promise)
// promise variable does not yet hold the data --> must call .then and use callback function to retrieve data through callback function parameter 'response'
// promise.then(function(response) {
  // const anotherPromise = response.json()
  // responose.json() is returning another promise
  // anotherPromise.then(function(data){
    // console.log(data)
  // })
// })


// BELOW CODE IS SIMPLER AND DRY VERSION OF STEP ONE THROUGH THREE

// // 1.fetch is making network request
// fetch('https://pokeapi.co/api/v2/pokemon/1')
//   // 2. get response back --> call response.json to parse data into javascript object
//   .then(response => response.json())
//   // 3. data returned in one big string, structured as JS object
//   .then(data => {
//     console.log(data)
//     console.log('INSIDE FETCH')
//   });

// console.log('AFTER fetch')
