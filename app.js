document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let squares = document.querySelectorAll('.grid div')
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#start-button')
    const width = 10

  //create the Tetrominoes
  const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ]

  const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]

  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

  let currentPosition = 4
  let currentRotation = 0

// random selection of tetrominoes
  let random = Math.floor(Math.random()*theTetrominoes.length)
//   console.log(random)
  let current = theTetrominoes[random][0]

//   console.log(theTetrominoes)


// draw the tetromino
function draw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.add('tetromino')
    })
}

draw()

// undraw
function undraw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.remove('tetromino')
    })
}


// move down every second
timerId = setInterval(moveDown, 1000)

// move down function
function moveDown() {
    undraw()
    currentPosition += width
    draw()
    freeze()
}

// freeze function
function freeze() {
    if(current.some(index=>squares[currentPosition + index + width].classList.contains('taken'))) {
        current.forEach(index => squares[currentPosition + index].classList.add('taken'))
    // start new tetromino fall
    random = Math.floor(Math.random() * theTetrominoes.length)
    current = theTetrominoes[random][currentRotation]
    currentPosition = 4
    draw()
    }
}


})