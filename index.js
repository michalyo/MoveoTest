const container = document.querySelector('#container')
const playButton = document.querySelector('#playButton')
const pauseButton = document.querySelector('#pauseButton')
const loopButton = document.querySelector('#loopButton')

const songsArr =[]
const ColorsArr = []

for(let i = 0; i <8; i++){
    songsArr.push({title:`Song number ${i+1}` , src:`./Audios/song-${i+1}.mp3`})
    ColorsArr.push(`rgb(255,${i*30}, 255)`)
}

songsArr.forEach((item,index)=>{
    const newAudio = document.createElement('div')
    newAudio.style.backgroundColor = ColorsArr[index]
    newAudio.innerHTML = `<h2>${item.title}</h2>
    <audio controls class="audio-file" loop>
        <source src=${item.src}>
        </audio>
        <button onClick='muteTrack(${index})'>Mute/Unmute</button> `
        container.appendChild(newAudio)
})

const audioArrFile = document.querySelectorAll('.audio-file')

playButton.addEventListener('click', ()=>{
    audioArrFile.forEach(file =>{
        file.play()
    })
})

loopButton.addEventListener('click', ()=>{
    window.alert("The music is playing in a loop now please confirm")
    audioArrFile.forEach(file =>{
        file.toggleAttribute('loop')
    })
})

pauseButton.addEventListener('click', ()=>{
    audioArrFile.forEach(file =>{
        file.pause()
        file.currentTime = 0
    })
})

function muteTrack(index){
    audioArrFile[index].muted = !audioArrFile[index].muted
}


