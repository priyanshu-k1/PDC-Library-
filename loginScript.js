var counter=0;
function moveslide(){
    const slider=document.getElementById("slider");
    if(counter==0){
        slider.style.transform = 'translateX(-100%)';
        counter+=1;
    }
    else{
        slider.style.transform = 'translateX(0%)';
        counter-=1;
    }
    
}