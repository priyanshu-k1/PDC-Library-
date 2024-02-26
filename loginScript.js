var counter=0;
function moveslide(){
    const slider=document.getElementById("slider");
    const sliderButton=document.getElementById("SliderButton");
    if(counter==0){
        slider.style.transform = 'translateX(-100%)';
        sliderButton.innerText="Log in"
        counter+=1;
    }
    else{
        slider.style.transform = 'translateX(0%)';
        sliderButton.innerText="New here?"
        counter-=1;
    }
    
}