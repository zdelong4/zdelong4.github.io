function background(){
    var red = document.getElementById("rBa").value;
    var green = document.getElementById("gBa").value;
    var blue = document.getElementById("bBa").value;
    var p1 = document.getElementById("p1");
    p1.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
}

function boarder(){
    var red = document.getElementById("rBo").value;
    var green = document.getElementById("gBo").value;
    var blue = document.getElementById("bBo").value;
    var p1 = document.getElementById("p1");
    p1.style.borderColor = "rgb("+red+","+green+","+blue+")";
    }