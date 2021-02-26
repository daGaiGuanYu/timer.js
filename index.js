export default class Timer {
  #startTime
  #stopTime
  #pauseList = []
  constructor(dontStart){
    if(!dontStart)
      this.start()
  }
  start(){
    if(!this.#startTime)
      this.#startTime = new Date()
  }
  stop(){
    if(this.#stopTime) return

    this.#stopTime = new Date()
    return this.#time()
  }

  started(){
    return this.#startTime == undefined
  }
  stoped(){
    return this.#stopTime != undefined
  }

  #time(){
    return this.#stopTime - this.#startTime - (
      this.#pauseList.map( item => item.time() ).reduce( (a, b) => a + b , 0)
    )
  }
  time(){
    if(this.#stopTime)
      return this.#time()
    else
      throw 'timer not stoped'
  }

  pause(){
    let last = lastEl(this.#pauseList)
    if(!last || last.stoped())
      this.#pauseList.push(new Timer())
  }
  continue(){
    let last = lastEl(this.#pauseList)
    if(last && !last.stoped())
      last.stop()
  }
}

function lastEl(arr){
  return arr[arr.length - 1]
}