const songs=[ 
    {
        
        name:"khabar e tahiyul",
        artist:"Ali sethi",
        img:"khbr"

    },
    {
        name:"Ghum kha gayi",
        artist:"waqar khan",
        img:"wk"
       

    },
    {
        
        name:"Pasoori coke studio",
        artist:"Ali sethi",
        img:"cs"

    },
   

];
// console.log(songs[0].name);


const music=document.querySelector('audio');
const img=document.querySelector('img');
const song=document.querySelector('#song');
const artist=document.querySelector('#artist');
const play=document.querySelector('#play');
const progressbar=document.querySelector('#range');
const repeat=document.querySelector('#loop');
progressbar.value=0;
console.log(progressbar.value);
run=false;
loopm=false;
console.log(progressbar);
let index=0;
// let index=i%2;
console.log(index);




function loadmusic(index)
{
music.src=`/${songs[index].name}.mp3`;
song.innerHTML=`<strong>${songs[index].name}</strong>`;
artist.innerText=songs[index].artist;
img.src=`/${songs[index].img}.jpg`;
}
loadmusic(index);
console.log(img);

// play music
const pmusic= ()=>
{
music.play();
run=true;

play.classList.replace('fa-play','fa-pause')
};





//pause music
const pumusic=()=>
    {
        music.pause();
    run=false;
    play.classList.replace('fa-pause','fa-play')
    };  

// on clicking
play.addEventListener('click',()=>
{
if(run)
{
    pumusic();
}
else{
    pmusic();
}

});

// on clicking prev
prev.addEventListener('click',()=>
{
    index--;
    if(index<0)
    {
        index=songs.length-1;
    }
    console.log(index);
    loadmusic(index);
    pmusic();
});

// on clicking forward
function nextmusic()
{
    index++;
    if(index>songs.length-1)
    {
        index=0;
    }
   
    console.log(index);
    loadmusic(index);
    pmusic(); 
}
forward.addEventListener('click',()=>
{
    // index++;
    // if(index>songs.length-1)
    // {
    //     index=0;
    // }
   
    // console.log(index);
    // loadmusic(index);
    // pmusic();
    nextmusic();
});


music.addEventListener('timeupdate',()=>

{
    
    progressbar.value=0;
progress=parseFloat((music.currentTime/music.duration)*100);

progressbar.value=progress;console.log(progressbar.value);
if(music.currentTime==music.duration && loopm==true)
{
    nextmusic();
}
});

progressbar.addEventListener('change',()=>
{
    music.currentTime=(progressbar.value/100)*music.duration;
});

loop.addEventListener('click',()=>
{
   if(!loopm)
  {  loopm=true;
    loop.style.color=`white`
    
  }
else{
    loopm=false;
   loop.style.color=`black`;
  
}
   


});

