const video = document.querySelector('.hero__bg')
const btn = document.querySelector('.hero__btn')

video.play()

btn.addEventListener('click', toggleVideo)

function toggleVideo() {
  if (video.paused) {
    video.play()

    btn.innerHTML = '<ion-icon name="stop-circle-outline"></ion-icon>'
  } else {
    video.pause()

    btn.innerHTML = '<ion-icon name="play-circle-outline"></ion-icon>'
  }
}