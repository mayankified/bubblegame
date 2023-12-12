var score = 0,
rn;
var isgameover = false;


function makebubble() {
    var clutter = "";
    for (var i = 1; i < 153; i++) {
        var rand = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble container">${rand}</div>`;
    }
    document.querySelector(".mid").innerHTML = clutter;
}

var timerr = 60;
function timer() {
    setInterval(() => {
    if (timerr > 0) {
      timerr--;
      document.querySelector("#timer").textContent = timerr;
    } else {
      clearInterval(timer);
      alert("Game Over..your score is " + score);
      timerr=60;
      makebubble();
      newhit();

    }
  }, 1000);
}

function newhit() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = rn;
}

function incscore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

function decscore() {
  score -= 5;
  document.querySelector("#score").textContent = score;
}

document.querySelector(".mid").addEventListener("click", (data) => {
  if (Number(data.target.textContent) == rn) {
    incscore();
    newhit();
    makebubble();
  } else {
    decscore();
  }
});

makebubble();
timer();
newhit();
