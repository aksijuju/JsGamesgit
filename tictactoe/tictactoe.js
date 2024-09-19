  const btn = document.querySelectorAll('.btn');
const reset = document.querySelector('#resetbtn');
const winp = document.querySelector('#win-p');
const winnerdiv = document.querySelector('.winnerdiv');

let playerx = true;

const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

btn.forEach((btn) => {
    btn.addEventListener("click", function() {
        if(playerx) {
            btn.innerText = "X";
            playerx = false;
        }
        else {
            btn.innerText = "O";
            playerx = true;
        }
        check();
    });
});

check = () => {
    for(let winner of win ) {
        var pos1 = btn[winner[0]].innerHTML;
        var pos2 = btn[winner[1]].innerHTML;
        var pos3 = btn[winner[2]].innerHTML;
        if(pos1!='' && pos2!='' && pos3!='') {
            if(pos1 === pos2 && pos2 === pos3) { 
                 winp.innerText = `congratulations,player${pos1} is the winner`;
                 winnerdiv.classList.remove("hide");
                 for(let btns of btn) {
                    btns.disabled = true;
                 }
            }
        }
    }
}

reset.addEventListener("click", () => {
    for(let btns of btn) {
        winnerdiv.classList.add("hide");
        playerx = true;
        btns.disabled = false;
        btns.innerText = "";
    }
});