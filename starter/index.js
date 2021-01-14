function sleep(time) {
  const start = new Date()
  while (new Date() - start < time * 1000) {
    // do nothing && block the main thread 😈
  }
}


console.log('Hello!')
console.log('brb, going to sleep for a sec')
sleep(5)
console.log('ok, im back lets run some more code')
console.log('done')
