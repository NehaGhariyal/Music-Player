let index=0;
let songs =[
    {songName: "Who Says - Selena Gomez", filepath:"music/0.mp3", coverpath:"cover/0.png"},
    {songName: "Company - Justin Bieber", filepath:"music/1.mp3", coverpath:"cover/1.png"},
    {songName: "Style - Taylor Swift", filepath:"music/2.mp3", coverpath:"cover/2.png"},
    {songName: "Into You - Ariana Grande", filepath:"music/3.mp3", coverpath:"cover/3.png"},
    {songName: "See You - Johnny Orlando", filepath:"music/4.mp3", coverpath:"cover/4.png"},
    {songName: "Best Life - Nani Hirunkit", filepath:"music/5.mp3", coverpath:"cover/5.png"}
]

let songarr = document.getElementsByClassName("songitemply1");
let coverimages = document.getElementsByClassName("cover");
let audioElement = new Audio('music/0.mp3');
let btnply=document.getElementById("btnply");
let songItems=Array.from(document.getElementsByClassName("songitem"));
let songsname=document.getElementById("song-name");
let coverimage=document.getElementById("cover-image");
let nav = this.document.getElementsByClassName("main-nav");


//nav-bar color change
window.addEventListener("scroll", function() {
    if (window.scrollY > 65) { 
        
        nav[0].style.backgroundColor = "rgb(244 238 238)"; 
    } else {
        nav[0].style.backgroundColor = "#f4eeee87"; 
    }
});

// pause and play button

btnply.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        btnply.classList.remove('fa-play-circle');
        btnply.classList.add('fa-pause-circle');
        let arr=coverimages[index].alt;
        if(btnply.classList.add('fa-pause-circle')!=true){
        songarr[arr].classList.remove('fa-play');
        songarr[arr].classList.add('fa-pause');

    }}
    else{
        audioElement.pause();
        let arr=coverimages[index].alt;
        btnply.classList.remove('fa-pause-circle');
        btnply.classList.add('fa-play-circle');
        songarr[arr].classList.add('fa-play');
        songarr[arr].classList.remove('fa-pause');
    }
})


songItems.forEach((element,i)=>{
   
    element.getElementsByTagName("img").src =songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})

//time update
audioElement.addEventListener('timeupdate', ()=>{
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const  makeallply=()=>{
    Array.from(document.getElementsByClassName("songitemply1")).forEach((element)=>{
        element.classList.add('fa-play');
    })

}
var count=0;
Array.from(document.getElementsByClassName("songitemply1")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      
        makeallply();
        count++;
        if(count%2!=0){
        index=parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src=`music/${index}.mp3`;
        coverimage.src=`cover/${index}.png`;
        songsname.innerText = songs[index].songName;
        audioElement.currentTime=0;
        audioElement.play();
        btnply.classList.remove('fa-play-circle');
        btnply.classList.add('fa-pause-circle'); }
        else{
            audioElement.pause();   
            btnply.classList.add('fa-play-circle');
            btnply.classList.remove('fa-pause-circle'); }
        }
)})

document.getElementById('next').addEventListener('click',()=>{
    try {
    {if(index>=5){
        index=0;
    }
    else{
        index+=1;
    }
    audioElement.src=`music/${index}.mp3`;
    coverimage.src=`cover/${index}.png`;
    songsname.innerText = songs[index].songName; 
    audioElement.currentTime=0;
    audioElement.play();
    btnply.classList.remove('fa-play-circle');
    btnply.classList.add('fa-pause-circle'); 
    songarr[index].classList.remove('fa-play');
    songarr[index].classList.add('fa-pause');
    songarr[index-1].classList.add('fa-play');}
  
    } catch (error) {
        songarr[5].classList.remove('fa-pause');
        songarr[5].classList.add('fa-play');
    }
})

document.getElementById('previous').addEventListener('click',()=>{
    if(index<=0){
       
        index=0;
    }
    else{
        index -=1;
    }
    audioElement.src=`music/${index}.mp3`;
    coverimage.src=`cover/${index}.png`;
    songsname.innerText = songs[index].songName; 
    audioElement.currentTime=0;
    audioElement.play();
    btnply.classList.remove('fa-play-circle');
    btnply.classList.add('fa-pause-circle'); 
    songarr[index].classList.remove('fa-play');
    songarr[index].classList.add('fa-pause');
    songarr[index+1].classList.add('fa-play');
})

