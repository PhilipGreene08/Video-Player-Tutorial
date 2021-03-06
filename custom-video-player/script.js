const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const time = document.getElementById('timestamp')

//functions
function toggleVideoStatus() {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class= "fa fa-play fa-2x"</i>'
  } else {
    play.innerHTML = '<i class= "fa fa-pause fa-2x"</i>'
  }
}
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100
  //getminutes
  let mins = Math.floor(video.currentTime / 60)
  if(mins < 10) {
    mins = '0' + String(mins)
  }

  //get seconds 
  let seconds = Math.floor(video.currentTime % 60)
  if(seconds < 10) {
    seconds = '0' + String(seconds)
  }

  time.innerHTML = `${mins}:${seconds}`
  }

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100
  
}

//event listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)

stop.addEventListener('click', stopVideo)

progress.addEventListener('change', setVideoProgress)