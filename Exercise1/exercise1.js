function isValid(){
    p1 = document.getElementById("p1").value;
    p2 = document.getElementById("p2").value;
    if((p1==p2) &&(p1.length >= 8)){
        alert("Password is valid");
    }
    else{
        alert("Password not valid");
    }
}