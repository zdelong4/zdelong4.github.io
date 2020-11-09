var slideIndex = 1;

function next(){
    if(slideIndex ==1){
        document.getElementById('display').src='img2.jpg';
        slideIndex++;
    }
    else if(slideIndex ==2){
        document.getElementById('display').src='img3.jpg';
        slideIndex++;  
    }
    else if(slideIndex ==3){
        document.getElementById('display').src='img4.jpg';
        slideIndex++;  
    }
    else if(slideIndex ==4){
        document.getElementById('display').src='img5.jpg';
        slideIndex++;  
    }else if(slideIndex ==5){
        document.getElementById('display').src='img1.jpg';
        slideIndex = 1;  
    }
}

function previous(){
    if(slideIndex ==1){
        document.getElementById('display').src='img5.jpg';
        slideIndex = 5;
    }
    else if(slideIndex ==2){
        document.getElementById('display').src='img1.jpg';
        slideIndex--;  
    }
    else if(slideIndex ==3){
        document.getElementById('display').src='img2.jpg';
        slideIndex--;  
    }
    else if(slideIndex ==4){
        document.getElementById('display').src='img3.jpg';
        slideIndex--;  
    }else if(slideIndex ==5){
        document.getElementById('display').src='img4.jpg';
        slideIndex--;  
    }
}
