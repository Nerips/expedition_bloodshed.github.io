function boxOpen(){
    var video = document.getElementById("theVideo")
    window.scrollTo(0,0);
    document.getElementById('videobox').style.display = 'flex'
    document.getElementById('fade').style.display = 'block'
    video.play();

    document.getElementById('videobox').style.flexDirection = 'column'
    document.getElementById('videobox').style.alignItems = "center"
}
/*      display: flex;
    flex-direction: column; 
    align-items: center;*/

function boxClose(){
    var video = document.getElementById("theVideo")
       document.getElementById('videobox').style.display = 'none'
    document.getElementById('fade').style.display = 'none'
    video.pause();
}