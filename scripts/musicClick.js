const musics = album1
const players = player


mus1 = document.getElementById('1')
mus2 = document.getElementById('2')
mus3 = document.getElementById('3')
mus4 = document.getElementById('4')
mus5 = document.getElementById('5')
mus6 = document.getElementById('6')
mus7 = document.getElementById('7')
mus8 = document.getElementById('8')
mus9 = document.getElementById('9')
mus10 = document.getElementById('10')
mus11 = document.getElementById("11")
mus12 = document.getElementById('12')
mus13 = document.getElementById('13')


const audio = document.querySelector("audio")
const title = document.querySelector(".card-content h5")
const cover = document.querySelector(".card-image")

mus1.addEventListener('click', function(){
    audio.src = musics[0].file
    title.innerText = musics[0].title
    players.currentPlaying = 0

    audio.play()
})

mus2.addEventListener('click', function(){
    audio.src = musics[1].file
    title.innerText = musics[1].title
    players.currentPlaying = 1
    
    audio.play()
})

mus3.addEventListener('click', function(){
    audio.src = musics[2].file
    title.innerText = musics[2].title
    players.currentPlaying = 2
    
    audio.play()
})

mus4.addEventListener('click', function(){
    audio.src = musics[3].file
    title.innerText = musics[3].title
    players.currentPlaying = 3
    
    audio.play()
})

mus5.addEventListener('click', function(){
    audio.src = musics[4].file
    title.innerText = musics[4].title
    players.currentPlaying = 4
    
    audio.play()
})

mus6.addEventListener('click', function(){
    audio.src = musics[5].file
    title.innerText = musics[5].title
    players.currentPlaying = 5
    
    audio.play()
})

mus7.addEventListener('click', function(){
    audio.src = musics[6].file
    title.innerText = musics[6].title
    players.currentPlaying = 6
    
    audio.play()
})

mus8.addEventListener('click', function(){
    audio.src = musics[7].file
    title.innerText = musics[7].title
    players.currentPlaying = 7
    
    audio.play()
})

mus9.addEventListener('click', function(){
    audio.src = musics[8].file
    title.innerText = musics[8].title
    players.currentPlaying = 8
    
    audio.play()
})

mus10.addEventListener('click', function(){
    audio.src = musics[9].file
    title.innerText = musics[9].title
    players.currentPlaying = 9
    
    audio.play()
})

mus11.addEventListener('click', function(){
    audio.src = musics[10].file
    title.innerText = musics[10].title
    players.currentPlaying = 10
    
    audio.play()
})

mus12.addEventListener('click', function(){
    audio.src = musics[11].file
    title.innerText = musics[11].title
    players.currentPlaying = 11
    
    audio.play()
})
mus13.addEventListener('click', function(){
    audio.src = musics[12].file
    title.innerText = musics[12].title
    players.currentPlaying = 12
    
    audio.play()
})