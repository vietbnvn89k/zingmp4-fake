const check_box = document.getElementById("accept")
const top_bar = document.querySelector("#top-bar")
function Check_box(){
    if (check_box.checked == true){
        top_bar.classList.add("remove")
      } else {
        top_bar.classList.remove("remove")
      }
}

check_box.addEventListener('click', Check_box)

const heart = document.querySelector('.fa-heart')
const ellipsis = document.querySelector('.fa-ellipsis')
function clickHeart(){
    heart.classList.toggle("open")
}
function clickEllipsis(){
    
}
heart.addEventListener('click', clickHeart)


const video = document.getElementById('icon-music')
const play = document.querySelector('.play-bottom-bar')
const pause = document.querySelector('.pause-bottom-bar')

function Play(){
    video.play();
    play.classList.add('remove')
    pause.classList.add('open')
}

function Pause(){
    video.pause();
    play.classList.remove('remove')
    pause.classList.remove('open')
}

function OpenFullscreen() {
    if (video.requestFullscreen()){
        Play();
    } 
    else{
        Pause();    
    }
}

play.addEventListener('click', Play)

pause.addEventListener('click', Pause)

video.addEventListener('click', OpenFullscreen)



const click_close = document.querySelector('.close-list')
const open_playlist = document.querySelector('#infomation #part-3')
const new_playlist = document.querySelector("#new-playlist")

function Close(){
    new_playlist.classList.remove("open")
}

function OpenNewPlaylist(){
    new_playlist.classList.toggle("open")
}

click_close.addEventListener('click', Close)
open_playlist.addEventListener('click', OpenNewPlaylist)



const more_bottom_bar = document.querySelector('#more-bottom-bar')
const icon_more_bottom_bar = document.querySelector('.more-bottom')
function OpenMore(){
    more_bottom_bar.classList.toggle('open')
}
icon_more_bottom_bar.addEventListener('click', OpenMore)
