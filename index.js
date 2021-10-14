window.addEventListener('keydown',function(e)
{
  console.log(e);
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return ;//stop function from running
    audio.currentTime=0; //rewind the start
    audio.play();// play the audio
    key.classList.add('playing'); 
});
function removeTransition(e)
{
    if(e.propertyName!='transform') return ;
    // console.log(e.propertyName);
    e.target.classList.remove('playing');
    // console.log(this);
}
const keys= document.querySelectorAll('.keys');
keys.forEach(key =>key.addEventListener('transitionend',removeTransition));