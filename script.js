const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const popup = document.getElementById('gameOverPopup')
const simBtn = document.getElementById('simBtn')
const naoBtn = document.getElementById('naoBtn')

const jump = () => {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = 'game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        clearInterval(loop)


        setTimeout(() => {
            popup.style.display = 'flex'
        }, 500)
    }
}, 10)

 document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'ArrowUp') {
    event.preventDefault() // impede a tela de rolar
  }
  jump()
})

document.addEventListener('keydown', jump)

simBtn.addEventListener('click', () => {
  popup.style.display = 'none' // esconde antes de recarregar
  location.reload()
})

naoBtn.addEventListener('click', () => {
  popup.style.display = 'none'
})
