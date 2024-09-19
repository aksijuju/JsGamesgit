function displayuser(e) {
    var your = document.querySelector("#userchoice");
    your.setAttribute('src', e);

    var arr = ['stone.png', 'paper.png', 'scissor.png'];

    var random = Math.floor(Math.random() * arr.length);

    var dis = arr[random];
    computerchoice.src = dis;

    var yourscore = 0;
    var computerscore = 0;

    if (your === dis) {
        yourscore+=0;
        computerscore+=0;
    }
    else{
        if(your === "stone.png"  &&  dis === "scissor.png") {
            yourscore+=1;
        }
        else if(your === "stone" && dis === "paper") {
            computerscore+=1;
        }
        if(your === "paper"  && dis === "stone") {
            yourscore+=1;
        }
        else if(your === "paper" && dis === "scissor") {
            computerscore+=1;
        }
        if(your === "scissor"  && dis === "stone") {
            computerscore+=1;
        }
        else if(your === "scissor" && dis === "paper") {
            yourscore+=1;
        }
    }
    document.getElementById("yourscore").innerHTML = yourscore;
    document.getElementById("computerscore").innerHTML = computerscore;
}

