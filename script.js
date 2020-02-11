addEventListener("keydown", function(e){
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)  
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  audio.curruntTime = 0
  audio.play()

  this.setTimeout(function(){
    key.classList.remove('play')
  }, 100)
})

